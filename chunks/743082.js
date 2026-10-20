n.d(t, { WO: () => o, nU: () => i, ss: () => l });
var r = n(73153),
    s = n(688954);
let o = {
    settings(e, t) {
        let { projectId: n } = t;
        r.h.dispatch({
            type: "CONJURE_SETTINGS_SET",
            projectId: n,
            settings: { schema: e.schema, values: e.values, secrets: e.secrets, connections: e.connections },
        });
    },
};
async function i(e, t) {
    let n = await (0, s.h)(e, "/agent/settings", { method: "PUT", json: t });
    if (!n.ok) throw Error(`settings submission failed (${n.status})`);
    let r = await n.json().catch(() => null);
    return { rebuildRequired: r?.rebuild_required === !0 };
}
function l(e) {
    (async function () {
        let t = await (0, s.h)(e, "/agent/rebuild", { method: "POST" });
        t.ok || console.warn("[conjure] settings rebuild request failed", e, t.status);
    })().catch((t) => {
        console.warn("[conjure] settings rebuild request failed", e, t);
    });
}
