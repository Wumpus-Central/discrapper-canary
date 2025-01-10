n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var l = n(873546),
    r = n(481060),
    a = n(373662),
    s = n(388032);
function o(e) {
    let { channel: t, message: n, togglePopout: o, renderEmojiPicker: c, shouldShow: d } = e;
    return (0, i.jsx)(r.Popout, {
        animation: r.Popout.Animation.FADE,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return c(t, n, i, !1);
        },
        shouldShow: d,
        onRequestClose: o,
        position: l.tq ? 'top' : 'left',
        align: l.tq ? 'center' : 'top',
        clickTrap: !0,
        children: () =>
            (0, i.jsx)(
                a.sF,
                {
                    label: s.intl.string(s.t.lfIHs7),
                    icon: r.ReactionIcon,
                    onClick: o
                },
                'add-reaction'
            )
    });
}
