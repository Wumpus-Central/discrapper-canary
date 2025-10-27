n.d(t, { Z: () => c });
var i = n(951288),
    r = n(647438),
    l = n(873546),
    a = n(481060),
    o = n(373662),
    s = n(388032);
function c(e) {
    let { channel: t, message: n, togglePopout: c, renderEmojiPicker: u, shouldShow: d } = e,
        p = r.useRef(null);
    return (0, i.jsx)(a.yRy, {
        targetElementRef: p,
        animation: a.yRy.Animation.FADE,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return u(t, n, i, !1);
        },
        shouldShow: d,
        onRequestClose: c,
        position: l.tq ? "top" : "left",
        align: l.tq ? "center" : "top",
        clickTrap: !0,
        children: () =>
            (0, i.jsx)(
                o.sF,
                {
                    ref: p,
                    label: s.intl.string(s.t.lfIHs4),
                    icon: a.EO4,
                    onClick: c,
                },
                "add-reaction",
            ),
    });
}
