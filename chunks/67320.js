n.d(t, { Z: () => o });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(584973),
    a = n(957331);
function o(e) {
    var t, n;
    let { item: o } = e;
    if ("contentInventory" !== o.data.kind) return null;
    let { extra: s } = o.data.content;
    if ("custom_status_extra" !== s.type) return null;
    let c = {
            id: (null == (t = s.emoji_id) ? void 0 : t.toString()) === "0" ? null : s.emoji_id,
            name: null != (n = s.emoji_name) ? n : "",
            animated: s.emoji_animated,
        },
        u = null != c.id || c.name.length > 0,
        d = null != s.status && s.status.length > 0;
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
                            children: s.status,
                        }),
                ],
            }),
        }),
    });
}
