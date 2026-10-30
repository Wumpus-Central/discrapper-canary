l.d(t, { Hi: () => i, Ol: () => c, Vq: () => o, hU: () => u, pc: () => f, vk: () => d });
var n = l(688954),
    a = l(809526),
    r = l(105292);
let i = ["auto", "preview", "published"],
    s = {
        auto: { label: a.default["2TTprm"], description: a.default["1ck6o0"] },
        preview: { label: a.default.bUZ6jT, description: a.default.DP2NVW },
        published: { label: a.default.yXd0cc, description: a.default["YY+UD8"] },
    };
function u(e) {
    return r.intl.string(s[e].label);
}
function o(e) {
    return r.intl.string(s[e].description);
}
async function d(e) {
    let t = await (0, n.h)(e, "/agent/linked-apps");
    if (!t.ok) throw Error(`Linked apps request failed: ${t.status}`);
    let { callers: l } = await t.json();
    return l;
}
async function c(e, t, l) {
    let a = await (0, n.h)(e, "/agent/linked-apps", { method: "PUT", json: { caller_project_id: t, build: l } });
    if (!a.ok) throw Error(`Linking apps failed: ${a.status}`);
}
async function f(e, t) {
    let l = await (0, n.h)(e, "/agent/linked-apps", { method: "DELETE", json: { caller_project_id: t } });
    if (!l.ok) throw Error(`Unlinking apps failed: ${l.status}`);
}
