n.d(t, { Z: () => c });
var r = n(255367),
    i = n(73800),
    l = n(873546),
    a = n(481060),
    o = n(373662),
    s = n(388032);
function c(e) {
    let { channel: t, message: n, togglePopout: c, renderEmojiPicker: u, shouldShow: d } = e,
        p = i.useRef(null);
    return (0, r.jsx)(a.yRy, {
        targetElementRef: p,
        animation: a.yRy.Animation.FADE,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return u(t, n, r, !1);
        },
        shouldShow: d,
        onRequestClose: c,
        position: l.tq ? 'top' : 'left',
        align: l.tq ? 'center' : 'top',
        clickTrap: !0,
        children: () =>
            (0, r.jsx)(
                o.sF,
                {
                    ref: p,
                    label: s.intl.string(s.t.lfIHs7),
                    icon: a.EO4,
                    onClick: c
                },
                'add-reaction'
            )
    });
}
