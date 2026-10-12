(n.d(t, { WO: () => o, nU: () => i, ss: () => l }), n(323874), n(14289), n(35956));
var r = n(73153),
    s = n(382541);
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
    let { ticket: n, baseUrl: r } = await (0, s.d)(e),
        o = new URLSearchParams({ ticket: n }),
        i = await fetch(`${r}/agent/settings?${o}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(t),
        });
    if (!i.ok) throw Error(`settings submission failed (${i.status})`);
    let l = await i.json().catch(() => null);
    return { rebuildRequired: l?.rebuild_required === !0 };
}
function l(e) {
    (async function () {
        let { ticket: t, baseUrl: n } = await (0, s.d)(e),
            r = new URLSearchParams({ ticket: t }),
            o = await fetch(`${n}/agent/rebuild?${r}`, { method: "POST" });
        o.ok || console.warn("[vibegrations] settings rebuild request failed", e, o.status);
    })().catch((t) => {
        console.warn("[vibegrations] settings rebuild request failed", e, t);
    });
}
