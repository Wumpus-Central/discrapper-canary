n.d(t, { Z: () => c });
var r = n(200651),
    i = n(192379),
    l = n(873546),
    o = n(481060),
    a = n(373662),
    s = n(388032);
function c(e) {
    let { channel: t, message: n, togglePopout: c, renderEmojiPicker: u, shouldShow: d } = e,
        p = i.useRef(null);
    return (0, r.jsx)(o.yRy, {
        targetElementRef: p,
        animation: o.yRy.Animation.FADE,
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
                a.sF,
                {
                    ref: p,
                    label: s.intl.string(s.t.lfIHs7),
                    icon: o.EO4,
                    onClick: c
                },
                'add-reaction'
            )
    });
}
