n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    s = n(417597),
    a = n(397927),
    r = n(318937),
    o = n(533117),
    d = n(134753),
    c = n(246356),
    u = n(709562),
    h = n(912276),
    A = n(60504),
    g = n(985018);
function m(e) {
    let { channel: t } = e,
        n = (0, s.bG)([o.A], () => o.A.getDrawMode()),
        m = n?.type === d.Z.EMOJI_HOSE,
        p = l.useRef(null),
        _ = (e, t) => {
            null != e ? (0, r.Ol)({ type: d.Z.EMOJI_HOSE, emojiName: e.name, emojiId: e.id }) : m && (0, r.Ol)(null),
                t?.();
        };
    return (0, i.jsx)(A.A, {
        renderPopout: (e) => {
            let { closePopout: n, onFocus: l } = e;
            return (0, i.jsx)(c.A, {
                children: (0, i.jsx)(h.A, {
                    title: g.intl.string(g.t.XYLOyF),
                    channel: t,
                    closePopout: n,
                    onFocus: l,
                    onSelectEmoji: (e) => _(e, n),
                }),
            });
        },
        popoutTargetRef: p,
        children: (e) =>
            (0, i.jsx)(u.A, {
                ...e,
                buttonRef: p,
                iconComponent: a.VRj,
                isActive: m || e.isActive,
                onClick: (t) => {
                    _(null), e.onClick(t);
                },
            }),
    });
}
