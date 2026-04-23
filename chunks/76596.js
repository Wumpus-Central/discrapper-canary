n.d(t, { A: () => u });
var l = n(627968),
    i = n(64700),
    s = n(265872),
    a = n(565645),
    r = n(375499),
    o = n(937773),
    c = n(512805),
    d = n(307731);
function u(e) {
    let { className: t, emojiClassName: n, emoji: u, setEmoji: m, channel: h } = e,
        j = i.useRef(null),
        x =
            null == u || null == u.name
                ? null
                : () => (0, l.jsx)(a.A, { className: n, animated: u.animated ?? !1, emojiId: u.id, emojiName: u.name });
    return (0, l.jsx)(c.A, {
        hasSetEmoji: null != u && null != u.name,
        onClick: () => {
            m(null);
        },
        children: (0, l.jsx)(s.Y, {
            targetElementRef: j,
            position: "bottom",
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, l.jsx)(o.A, {
                    closePopout: t,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: l } = e;
                        null != n &&
                            (null == n.id
                                ? m({ name: n.optionallyDiverseSequence ?? "" })
                                : m({ id: n.id, name: n.originalName ?? n.name, animated: n.animated }),
                            l && t());
                    },
                    pickerIntention: d.EmojiIntention.COMMUNITY_CONTENT,
                    channel: h,
                });
            },
            children: (e, n) => {
                let { isShown: i } = n;
                return (0, l.jsx)(r.A, { ...e, ref: j, tabIndex: 0, active: i, className: t, renderButtonContents: x });
            },
        }),
    });
}
