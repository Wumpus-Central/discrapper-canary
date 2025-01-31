n.d(t, { default: () => m }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    o = n(481060),
    l = n(660216),
    a = n(825209),
    d = n(714338),
    c = n(556296),
    h = n(13140),
    u = n(710111),
    p = n(981631),
    b = n(388032),
    _ = n(111764);
function m(e) {
    var t;
    let { transitionState: n, onClose: m } = e,
        g = (0, r.e7)([c.Z], () => c.Z.getKeybindForAction(p.kg4.SOUNDBOARD_HOLD)),
        [f, E] = s.useState(null !== (t = null == g ? void 0 : g.shortcut) && void 0 !== t ? t : []);
    return (
        s.useEffect(
            () => (
                d.Z.disable(),
                () => {
                    d.Z.enable();
                }
            ),
            []
        ),
        (0, i.jsxs)(o.Y0X, {
            transitionState: n,
            children: [
                (0, i.jsxs)(o.xBx, {
                    separator: !1,
                    children: [
                        (0, i.jsx)(o.X6q, {
                            className: _.header,
                            variant: 'heading-xl/semibold',
                            children: b.intl.string(b.t['0Osu39'])
                        }),
                        (0, i.jsx)(o.olH, {
                            className: _.closeButton,
                            onClick: m
                        })
                    ]
                }),
                (0, i.jsxs)(o.hzk, {
                    className: _.content,
                    children: [
                        (0, i.jsx)(o.Wn, {
                            className: _.warning,
                            messageType: o.QYI.WARNING,
                            children: b.intl.string(b.t['O2v/eH'])
                        }),
                        (0, i.jsx)(o.X6q, {
                            className: _.formHeader,
                            variant: 'eyebrow',
                            color: 'header-secondary',
                            children: b.intl.string(b.t.UUpADw)
                        }),
                        (0, i.jsx)(o.Text, {
                            className: _.action,
                            variant: 'text-md/normal',
                            children: b.intl.string(b.t['1xFbPz'])
                        }),
                        (0, i.jsx)(o.Text, {
                            className: _.actionDescription,
                            variant: 'text-sm/normal',
                            children: b.intl.string(b.t.laNlTk)
                        }),
                        (0, i.jsx)(o.X6q, {
                            className: _.formHeader,
                            variant: 'eyebrow',
                            color: 'header-secondary',
                            children: b.intl.string(b.t['1La4tL'])
                        }),
                        (0, i.jsx)(a.Z, {
                            defaultValue: f,
                            onChange: E
                        }),
                        (0, i.jsx)(o.eee, {
                            className: _.resetButton,
                            onClick: () => E((0, h.Kd)(u.D_)),
                            children: b.intl.string(b.t['s7+2ra'])
                        })
                    ]
                }),
                (0, i.jsxs)(o.mzw, {
                    children: [
                        (0, i.jsx)(o.zxk, {
                            onClick: function () {
                                if (0 === f.length) return null != g && l.Z.deleteKeybind(g.id), m();
                                null == g
                                    ? l.Z.addKeybind({
                                          action: p.kg4.SOUNDBOARD_HOLD,
                                          shortcut: f,
                                          enabled: !0,
                                          params: {}
                                      })
                                    : l.Z.setKeybind({
                                          ...g,
                                          shortcut: f
                                      }),
                                    m();
                            },
                            children: b.intl.string(b.t.R3BPHx)
                        }),
                        (0, i.jsx)(o.zxk, {
                            onClick: m,
                            look: o.zxk.Looks.LINK,
                            color: o.zxk.Colors.PRIMARY,
                            children: b.intl.string(b.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    );
}
