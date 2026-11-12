var n = l(688954);
async function a(e) {
    let t = await (0, n.h)(e, "/agent/linked-apps");
    if (!t.ok) throw Error(`Linked apps request failed: ${t.status}`);
    return await t.json();
}
l.d(
    t,
    {},
    {
        LW: async function (e, t) {
            let { callers: l, live: n, has_preview: r } = await a(e),
                i = l.find((e) => e.project_id === t);
            return {
                live: !0 === n,
                hasPreview: !1 !== r,
                build: i?.build ?? (!0 === n ? "published" : "auto"),
                purpose: i?.purpose ?? null,
                flow: i?.flow ?? null,
            };
        },
        Ol: async function (e, t) {
            let { build: l, purpose: a, flow: r } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = await (0, n.h)(e, "/agent/linked-apps", {
                    method: "PUT",
                    json: { caller_project_id: t, build: l, purpose: a, flow: r },
                });
            if (!i.ok) throw Error(`Linking apps failed: ${i.status}`);
        },
        k_: a,
        n9: async function (e, t) {
            let l = await (0, n.h)(e, "/agent/linked-apps/targets", {
                method: "POST",
                json: { project_ids: t.slice(0, 200) },
            });
            if (!l.ok) throw Error(`Linked app targets request failed: ${l.status}`);
            return await l.json();
        },
        pc: async function (e, t) {
            let l = await (0, n.h)(e, "/agent/linked-apps", { method: "DELETE", json: { caller_project_id: t } });
            if (!l.ok) throw Error(`Unlinking apps failed: ${l.status}`);
        },
    },
);
