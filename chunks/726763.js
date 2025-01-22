n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    a = n(442837),
    l = n(780384),
    o = n(481060),
    c = n(600164),
    d = n(921801),
    u = n(210887),
    m = n(726985),
    g = n(388032),
    h = n(232186);
let p = n(651714),
    x = n(297166);
function f(e) {
    let { refreshStyles: t = !1 } = e,
        n = (0, a.e7)([u.Z], () => u.Z.theme);
    return (0, i.jsx)(d.F, {
        setting: m.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_AUDIO,
        children: (0, i.jsx)(o.FormSection, {
            className: s()({ [h.marginBottom20]: !t }),
            title: g.intl.string(g.t.DSGme3),
            children: (0, i.jsx)(o.FormNotice, {
                className: s()({ [h.marginBottom20]: !t }),
                type: o.FormNoticeTypes.PRIMARY,
                imageData: {
                    src: (0, l.ap)(n) ? p : x,
                    width: 70,
                    height: 40
                },
                align: c.Z.Align.CENTER,
                body: g.intl.string(g.t['2nDAzM'])
            })
        })
    });
}
