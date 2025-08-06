n.d(t, { Z: () => c });
var r = n(255367),
    i = n(73800),
    o = n(873546),
    a = n(481060),
    s = n(373662),
    l = n(388032);
function c(e) {
    let { channel: t, message: n, togglePopout: c, renderEmojiPicker: u, shouldShow: d } = e,
        f = i.useRef(null);
    return (0, r.jsx)(a.yRy, {
        targetElementRef: f,
        animation: a.yRy.Animation.FADE,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return u(t, n, r, !1);
        },
        shouldShow: d,
        onRequestClose: c,
        position: o.tq ? 'top' : 'left',
        align: o.tq ? 'center' : 'top',
        clickTrap: !0,
        children: () =>
            (0, r.jsx)(
                s.sF,
                {
                    ref: f,
                    label: l.intl.string(l.t.lfIHs7),
                    icon: a.EO4,
                    onClick: c
                },
                'add-reaction'
            )
    });
}
