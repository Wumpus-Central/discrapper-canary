var r = n(158390),
    s = n(73153),
    i = n(688954),
    l = n(513845),
    a = n(442331),
    u = n(661095);
let c = new Map();
function o(e) {
    c.set(e, (c.get(e) ?? 0) + 1);
}
let f = new Map();
async function h(e, t) {
    ((t.inFlight = !0), (t.lastFetchAt = Date.now()));
    try {
        await (async function (e) {
            let t = c.get(e) ?? 0,
                n = await (0, i.h)(e, "/agent/settings");
            if (!n.ok) throw Error(`settings fetch failed (${n.status})`);
            let r = await n.json();
            if ((c.get(e) ?? 0) === t || null == a.A.getSettings(e)) {
                if (!Array.isArray(r?.schema) || 0 === r.schema.length)
                    return void s.h.dispatch({
                        type: "CONJURE_SETTINGS_LOAD_STATE_SET",
                        projectId: e,
                        state: "loaded",
                    });
                s.h.dispatch({
                    type: "CONJURE_SETTINGS_SET",
                    projectId: e,
                    settings: {
                        schema: r.schema,
                        values: r.values ?? {},
                        server_values: r.server_values,
                        secrets: r.secrets ?? [],
                        connections: r.connections,
                    },
                });
            }
        })(e);
    } catch {
        if (((t.inFlight = !1), t.retries >= 5))
            return void s.h.dispatch({ type: "CONJURE_SETTINGS_LOAD_STATE_SET", projectId: e, state: "failed" });
        ((t.retries += 1), t.backoff.fail(() => h(e, t)));
        return;
    }
    ((t.inFlight = !1), (t.retries = 0), t.backoff.succeed());
}
function d(e) {
    let t,
        n =
            (null == (t = f.get(e)) &&
                ((t = { backoff: new r.A(1e3, 6e4), inFlight: !1, retries: 0, lastFetchAt: -1 / 0, deferred: null }),
                f.set(e, t)),
            t);
    if (n.inFlight || n.backoff.pending || null != n.deferred) return;
    (s.h.dispatch({ type: "CONJURE_SETTINGS_LOAD_STATE_SET", projectId: e, state: "loading" }), (n.retries = 0));
    let i = n.lastFetchAt + 5e3 - Date.now();
    if (i > 0) {
        n.deferred = setTimeout(() => {
            ((n.deferred = null), h(e, n));
        }, i);
        return;
    }
    h(e, n);
}
n.d(
    t,
    {},
    {
        WO: {
            settings(e, t) {
                let { projectId: n } = t;
                (o(n),
                    s.h.dispatch({
                        type: "CONJURE_SETTINGS_SET",
                        projectId: n,
                        settings: {
                            schema: e.schema,
                            values: e.values,
                            server_values: e.server_values ?? a.A.getSettings(n)?.server_values,
                            secrets: e.secrets,
                            connections: e.connections,
                        },
                    }),
                    !0 === e.values_changed && (0, l.BD)(n));
            },
        },
        fD: d,
        mw: function (e) {
            for (let t of e) "failed" === a.A.getLoadState(t) && d(t);
        },
        nU: async function (e, t) {
            let n = await (0, i.h)(e, "/agent/settings", { method: "PUT", json: t });
            if (!n.ok) throw Error(`settings submission failed (${n.status})`);
            let r = null;
            try {
                r = await n.json();
            } catch {}
            o(e);
            let l = a.A.getSettings(e);
            return (
                null != l &&
                    (null != t.values || null != t.server_values) &&
                    s.h.dispatch({
                        type: "CONJURE_SETTINGS_SET",
                        projectId: e,
                        settings: {
                            ...l,
                            values: (0, u.yj)(l.values, t.values),
                            ...(null != t.server_values
                                ? { server_values: (0, u.n1)(l.server_values, t.server_values) }
                                : {}),
                        },
                    }),
                { rebuildRequired: r?.rebuild_required === !0 }
            );
        },
        ss: function (e) {
            !(async function () {
                try {
                    let t = await (0, i.h)(e, "/agent/rebuild", { method: "POST" });
                    t.ok || console.warn("[conjure] settings rebuild request failed", e, t.status);
                } catch (t) {
                    console.warn("[conjure] settings rebuild request failed", e, t);
                }
            })();
        },
    },
);
