n.d(t, { WO: () => f, fD: () => p, mw: () => y, nU: () => S, ss: () => T });
var i = n(158390),
    s = n(73153),
    r = n(688954),
    l = n(513845),
    a = n(442331),
    u = n(661095);
let c = new Map();
function o(e) {
    c.set(e, (c.get(e) ?? 0) + 1);
}
let f = {
    settings(e, t) {
        let { projectId: n } = t;
        (o(n),
            s.h.dispatch({
                type: "CONJURE_SETTINGS_SET",
                projectId: n,
                settings: { schema: e.schema, values: e.values, secrets: e.secrets, connections: e.connections },
            }),
            !0 === e.values_changed && (0, l.BD)(n));
    },
};
async function h(e) {
    let t = c.get(e) ?? 0,
        n = await (0, r.h)(e, "/agent/settings");
    if (!n.ok) throw Error(`settings fetch failed (${n.status})`);
    let i = await n.json();
    if ((c.get(e) ?? 0) === t || null == a.A.getSettings(e)) {
        if (!Array.isArray(i?.schema) || 0 === i.schema.length)
            return void s.h.dispatch({ type: "CONJURE_SETTINGS_LOAD_STATE_SET", projectId: e, state: "loaded" });
        s.h.dispatch({
            type: "CONJURE_SETTINGS_SET",
            projectId: e,
            settings: {
                schema: i.schema,
                values: i.values ?? {},
                secrets: i.secrets ?? [],
                connections: i.connections,
            },
        });
    }
}
let d = new Map();
async function g(e, t) {
    ((t.inFlight = !0), (t.lastFetchAt = Date.now()));
    try {
        await h(e);
    } catch {
        if (((t.inFlight = !1), t.retries >= 5))
            return void s.h.dispatch({ type: "CONJURE_SETTINGS_LOAD_STATE_SET", projectId: e, state: "failed" });
        ((t.retries += 1), t.backoff.fail(() => g(e, t)));
        return;
    }
    ((t.inFlight = !1), (t.retries = 0), t.backoff.succeed());
}
function p(e) {
    let t,
        n =
            (null == (t = d.get(e)) &&
                ((t = { backoff: new i.A(1e3, 6e4), inFlight: !1, retries: 0, lastFetchAt: -1 / 0, deferred: null }),
                d.set(e, t)),
            t);
    if (n.inFlight || n.backoff.pending || null != n.deferred) return;
    (s.h.dispatch({ type: "CONJURE_SETTINGS_LOAD_STATE_SET", projectId: e, state: "loading" }), (n.retries = 0));
    let r = n.lastFetchAt + 5e3 - Date.now();
    if (r > 0) {
        n.deferred = setTimeout(() => {
            ((n.deferred = null), g(e, n));
        }, r);
        return;
    }
    g(e, n);
}
function y(e) {
    for (let t of e) "failed" === a.A.getLoadState(t) && p(t);
}
async function S(e, t) {
    let n = await (0, r.h)(e, "/agent/settings", { method: "PUT", json: t });
    if (!n.ok) throw Error(`settings submission failed (${n.status})`);
    let i = null;
    try {
        i = await n.json();
    } catch {}
    o(e);
    let l = a.A.getSettings(e);
    return (
        null != l &&
            null != t.values &&
            s.h.dispatch({
                type: "CONJURE_SETTINGS_SET",
                projectId: e,
                settings: { ...l, values: (0, u.yj)(l.values, t.values) },
            }),
        { rebuildRequired: i?.rebuild_required === !0 }
    );
}
function T(e) {
    !(async function () {
        try {
            let t = await (0, r.h)(e, "/agent/rebuild", { method: "POST" });
            t.ok || console.warn("[conjure] settings rebuild request failed", e, t.status);
        } catch (t) {
            console.warn("[conjure] settings rebuild request failed", e, t);
        }
    })();
}
