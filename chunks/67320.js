n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(584973),
    a = n(348600);
function s(e) {
    var t, n;
    let { item: s } = e;
    if ("contentInventory" !== s.data.kind) return null;
    let { extra: o } = s.data.content;
    if ("custom_status_extra" !== o.type) return null;
    let c = {
            id: (null == (t = o.emoji_id) ? void 0 : t.toString()) === "0" ? null : o.emoji_id,
            name: null != (n = o.emoji_name) ? n : "",
            animated: o.emoji_animated,
        },
        u = null != c.id || c.name.length > 0,
        d = null != o.status && o.status.length > 0;
    return (0, r.jsx)("div", {
        className: a.container,
        children: (0, r.jsx)("div", {
            className: a.card,
            children: (0, r.jsxs)("div", {
                className: a.content,
                children: [
                    u &&
                        (0, r.jsx)("div", {
                            className: a.emojiContainer,
                            children: (0, r.jsx)(l.Z, {
                                emoji: c,
                                animate: !0,
                                hideTooltip: !1,
                            }),
                        }),
                    d &&
                        (0, r.jsx)(i.Text, {
                            variant: "text-md/normal",
                            color: "text-strong",
                            className: a.statusText,
                            children: o.status,
                        }),
                ],
            }),
        }),
    });
}
