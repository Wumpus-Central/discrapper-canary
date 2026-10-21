n.d(t, { WO: () => i, nU: () => l, ss: () => a });
var s = n(73153),
    r = n(688954),
    o = n(513845);
let i = {
    settings(e, t) {
        let { projectId: n } = t;
        (s.h.dispatch({
            type: "CONJURE_SETTINGS_SET",
            projectId: n,
            settings: { schema: e.schema, values: e.values, secrets: e.secrets, connections: e.connections },
        }),
            !0 === e.values_changed && (0, o.BD)(n));
    },
};
async function l(e, t) {
    let n = await (0, r.h)(e, "/agent/settings", { method: "PUT", json: t });
    if (!n.ok) throw Error(`settings submission failed (${n.status})`);
    let s = await n.json().catch(() => null);
    return { rebuildRequired: s?.rebuild_required === !0 };
}
function a(e) {
    (async function () {
        let t = await (0, r.h)(e, "/agent/rebuild", { method: "POST" });
        t.ok || console.warn("[conjure] settings rebuild request failed", e, t.status);
    })().catch((t) => {
        console.warn("[conjure] settings rebuild request failed", e, t);
    });
}
