var n = l(688954),
    a = l(191850),
    r = l(792996);
let i = {
    auto: { label: a.default["2TTprm"], description: a.default["1ck6o0"] },
    preview: { label: a.default.bUZ6jT, description: a.default.DP2NVW },
    published: { label: a.default.yXd0cc, description: a.default["YY+UD8"] },
};
l.d(
    t,
    {},
    {
        Hi: ["auto", "preview", "published"],
        Ol: async function (e, t, l) {
            let a = await (0, n.h)(e, "/agent/linked-apps", {
                method: "PUT",
                json: { caller_project_id: t, build: l },
            });
            if (!a.ok) throw Error(`Linking apps failed: ${a.status}`);
        },
        Vq: function (e) {
            return r.intl.string(i[e].description);
        },
        hU: function (e) {
            return r.intl.string(i[e].label);
        },
        pc: async function (e, t) {
            let l = await (0, n.h)(e, "/agent/linked-apps", { method: "DELETE", json: { caller_project_id: t } });
            if (!l.ok) throw Error(`Unlinking apps failed: ${l.status}`);
        },
        vk: async function (e) {
            let t = await (0, n.h)(e, "/agent/linked-apps");
            if (!t.ok) throw Error(`Linked apps request failed: ${t.status}`);
            let { callers: l } = await t.json();
            return l;
        },
    },
);
