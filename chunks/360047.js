n.d(t, { Hi: () => r, Ol: () => c, Vq: () => o, hU: () => s, pc: () => f, vk: () => d });
var l = n(688954),
    a = n(248675),
    i = n(105292);
let r = ["auto", "preview", "published"],
    u = {
        auto: { label: a.default["2TTprm"], description: a.default["1ck6o0"] },
        preview: { label: a.default.bUZ6jT, description: a.default.DP2NVW },
        published: { label: a.default.yXd0cc, description: a.default["YY+UD8"] },
    };
function s(e) {
    return i.intl.string(u[e].label);
}
function o(e) {
    return i.intl.string(u[e].description);
}
async function d(e) {
    let t = await (0, l.h)(e, "/agent/linked-apps");
    if (!t.ok) throw Error(`Linked apps request failed: ${t.status}`);
    let { callers: n } = await t.json();
    return n;
}
async function c(e, t, n) {
    let a = await (0, l.h)(e, "/agent/linked-apps", { method: "PUT", json: { caller_project_id: t, build: n } });
    if (!a.ok) throw Error(`Linking apps failed: ${a.status}`);
}
async function f(e, t) {
    let n = await (0, l.h)(e, "/agent/linked-apps", { method: "DELETE", json: { caller_project_id: t } });
    if (!n.ok) throw Error(`Unlinking apps failed: ${n.status}`);
}
