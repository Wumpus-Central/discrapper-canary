n.d(t, { Hi: () => a, Ol: () => c, Vq: () => o, hU: () => s, pc: () => f, vk: () => d });
var l = n(688954),
    i = n(248675),
    r = n(105292);
let a = ["auto", "preview", "published"],
    u = {
        auto: { label: i.default["2TTprm"], description: i.default["1ck6o0"] },
        preview: { label: i.default.bUZ6jT, description: i.default.DP2NVW },
        published: { label: i.default.yXd0cc, description: i.default["YY+UD8"] },
    };
function s(e) {
    return r.intl.string(u[e].label);
}
function o(e) {
    return r.intl.string(u[e].description);
}
async function d(e) {
    let t = await (0, l.h)(e, "/agent/linked-apps");
    if (!t.ok) throw Error(`Linked apps request failed: ${t.status}`);
    let { callers: n } = await t.json();
    return n;
}
async function c(e, t, n) {
    let i = await (0, l.h)(e, "/agent/linked-apps", { method: "PUT", json: { caller_project_id: t, build: n } });
    if (!i.ok) throw Error(`Linking apps failed: ${i.status}`);
}
async function f(e, t) {
    let n = await (0, l.h)(e, "/agent/linked-apps", { method: "DELETE", json: { caller_project_id: t } });
    if (!n.ok) throw Error(`Unlinking apps failed: ${n.status}`);
}
