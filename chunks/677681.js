n.d(t, { A: () => s });
var i = n(627968);
n(64700);
var a = n(397927),
    r = n(51183),
    l = n(82849);
function s(e) {
    let { item: t } = e;
    if ("contentInventory" !== t.data.kind) return null;
    let { extra: n } = t.data.content;
    if ("custom_status_extra" !== n.type) return null;
    let s = {
            id: n.emoji_id?.toString() === "0" ? null : n.emoji_id,
            name: n.emoji_name ?? "",
            animated: n.emoji_animated,
        },
        o = null != s.id || s.name.length > 0,
        d = null != n.status && n.status.length > 0;
    return (0, i.jsx)("div", {
        className: l.kL,
        children: (0, i.jsx)("div", {
            className: l.Nr,
            children: (0, i.jsxs)("div", {
                className: l.Qs,
                children: [
                    o &&
                        (0, i.jsx)("div", {
                            className: l.qq,
                            children: (0, i.jsx)(r.A, { emoji: s, animate: !0, hideTooltip: !1 }),
                        }),
                    d &&
                        (0, i.jsx)(a.Text, {
                            variant: "text-md/normal",
                            color: "text-strong",
                            className: l.qS,
                            children: n.status,
                        }),
                ],
            }),
        }),
    });
}
