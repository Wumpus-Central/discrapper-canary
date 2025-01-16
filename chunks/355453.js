n.r(t),
    n.d(t, {
        default: function () {
            return m;
        }
    }),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    o = n(481060),
    a = n(660216),
    l = n(825209),
    d = n(714338),
    c = n(556296),
    u = n(13140),
    h = n(710111),
    p = n(981631),
    b = n(388032),
    g = n(111764);
function m(e) {
    var t;
    let { transitionState: n, onClose: m } = e,
        f = (0, r.e7)([c.Z], () => c.Z.getKeybindForAction(p.kg4.SOUNDBOARD_HOLD)),
        [_, E] = s.useState(null !== (t = null == f ? void 0 : f.shortcut) && void 0 !== t ? t : []);
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
        (0, i.jsxs)(o.ModalRoot, {
            transitionState: n,
            children: [
                (0, i.jsxs)(o.ModalHeader, {
                    separator: !1,
                    children: [
                        (0, i.jsx)(o.Heading, {
                            className: g.header,
                            variant: 'heading-xl/semibold',
                            children: b.intl.string(b.t['0Osu39'])
                        }),
                        (0, i.jsx)(o.ModalCloseButton, {
                            className: g.closeButton,
                            onClick: m
                        })
                    ]
                }),
                (0, i.jsxs)(o.ModalContent, {
                    className: g.content,
                    children: [
                        (0, i.jsx)(o.HelpMessage, {
                            className: g.warning,
                            messageType: o.HelpMessageTypes.WARNING,
                            children: b.intl.string(b.t['O2v/eH'])
                        }),
                        (0, i.jsx)(o.Heading, {
                            className: g.formHeader,
                            variant: 'eyebrow',
                            color: 'header-secondary',
                            children: b.intl.string(b.t.UUpADw)
                        }),
                        (0, i.jsx)(o.Text, {
                            className: g.action,
                            variant: 'text-md/normal',
                            children: b.intl.string(b.t['1xFbPz'])
                        }),
                        (0, i.jsx)(o.Text, {
                            className: g.actionDescription,
                            variant: 'text-sm/normal',
                            children: b.intl.string(b.t.laNlTk)
                        }),
                        (0, i.jsx)(o.Heading, {
                            className: g.formHeader,
                            variant: 'eyebrow',
                            color: 'header-secondary',
                            children: b.intl.string(b.t['1La4tL'])
                        }),
                        (0, i.jsx)(l.Z, {
                            defaultValue: _,
                            onChange: E
                        }),
                        (0, i.jsx)(o.Anchor, {
                            className: g.resetButton,
                            onClick: () => E((0, u.Kd)(h.D_)),
                            children: b.intl.string(b.t['s7+2ra'])
                        })
                    ]
                }),
                (0, i.jsxs)(o.ModalFooter, {
                    children: [
                        (0, i.jsx)(o.Button, {
                            onClick: function () {
                                if (0 === _.length) return null != f && a.Z.deleteKeybind(f.id), m();
                                null == f
                                    ? a.Z.addKeybind({
                                          action: p.kg4.SOUNDBOARD_HOLD,
                                          shortcut: _,
                                          enabled: !0,
                                          params: {}
                                      })
                                    : a.Z.setKeybind({
                                          ...f,
                                          shortcut: _
                                      });
                                m();
                            },
                            children: b.intl.string(b.t.R3BPHx)
                        }),
                        (0, i.jsx)(o.Button, {
                            onClick: m,
                            look: o.Button.Looks.LINK,
                            color: o.Button.Colors.PRIMARY,
                            children: b.intl.string(b.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    );
}
