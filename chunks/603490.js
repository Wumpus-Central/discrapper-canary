n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(873546),
    l = n(481060),
    o = n(373662),
    a = n(388032);
function s(e) {
    let { channel: t, message: n, togglePopout: s, renderEmojiPicker: c, shouldShow: u } = e;
    return (0, r.jsx)(l.yRy, {
        animation: l.yRy.Animation.FADE,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return c(t, n, r, !1);
        },
        shouldShow: u,
        onRequestClose: s,
        position: i.tq ? 'top' : 'left',
        align: i.tq ? 'center' : 'top',
        clickTrap: !0,
        children: () =>
            (0, r.jsx)(
                o.sF,
                {
                    label: a.NW.string(a.t.lfIHs7),
                    icon: l.EO4,
                    onClick: s
                },
                'add-reaction'
            )
    });
}
