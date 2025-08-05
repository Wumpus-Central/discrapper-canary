n.d(t, { Z: () => c });
var r = n(255367),
    i = n(73800),
    a = n(873546),
    o = n(481060),
    s = n(373662),
    l = n(388032);
function c(e) {
    let { channel: t, message: n, togglePopout: c, renderEmojiPicker: u, shouldShow: d } = e,
        f = i.useRef(null);
    return (0, r.jsx)(o.yRy, {
        targetElementRef: f,
        animation: o.yRy.Animation.FADE,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return u(t, n, r, !1);
        },
        shouldShow: d,
        onRequestClose: c,
        position: a.tq ? 'top' : 'left',
        align: a.tq ? 'center' : 'top',
        clickTrap: !0,
        children: () =>
            (0, r.jsx)(
                s.sF,
                {
                    ref: f,
                    label: l.intl.string(l.t.lfIHs7),
                    icon: o.EO4,
                    onClick: c
                },
                'add-reaction'
            )
    });
}
