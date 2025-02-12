t.d(a, { default: () => p }), t(47120);
var n = t(200651),
    r = t(192379),
    s = t(442837),
    i = t(481060),
    d = t(367907),
    l = t(313201),
    o = t(650774),
    c = t(434404),
    C = t(166184),
    m = t(981631),
    h = t(388032),
    u = t(133330);
let p = (e) => {
    let { transitionState: a, onClose: t, guild: p } = e,
        x = (0, l.Dt)();
    r.useEffect(() => {
        d.ZP.trackWithMetadata(m.rMx.OPEN_MODAL, { type: m.jXE.DISCOVERY_SETUP_SUCCESS_MODAL });
    }, []);
    let [_, S] = (0, s.Wu)([o.Z], () => [o.Z.getOnlineCount(p.id), o.Z.getMemberCount(p.id)], [p.id]);
    return (0, n.jsxs)(i.Y0X, {
        transitionState: a,
        'aria-labelledby': x,
        className: u.root,
        children: [
            (0, n.jsx)(i.xBx, {
                className: u.modalHeader,
                separator: !1,
                children: (0, n.jsx)(i.olH, {
                    onClick: t,
                    className: u.modalCloseButton
                })
            }),
            (0, n.jsx)(i.X6q, {
                variant: 'heading-xl/semibold',
                id: x,
                className: u.header,
                children: h.intl.string(h.t['2ocCIi'])
            }),
            (0, n.jsxs)(i.hzk, {
                className: u.modalContent,
                children: [
                    (0, n.jsx)(i.Text, {
                        variant: 'text-md/normal',
                        className: u.subheader,
                        children: h.intl.format(h.t.TRh6a2, {
                            onServerSettingsClick: () => {
                                t(),
                                    c.Z.setSection(m.pNK.DISCOVERY),
                                    d.ZP.trackWithMetadata(m.rMx.SETTINGS_PANE_VIEWED, {
                                        settings_type: 'guild',
                                        origin_pane: 'DISCOVERY',
                                        destination_pane: 'DISCOVERY'
                                    });
                            }
                        })
                    }),
                    (0, n.jsx)(C.Z, {
                        className: u.previewCard,
                        guild: p,
                        presenceCount: _,
                        memberCount: S
                    })
                ]
            }),
            (0, n.jsx)(i.mzw, {
                children: (0, n.jsx)(i.zxk, {
                    onClick: t,
                    children: h.intl.string(h.t['NX+WJC'])
                })
            })
        ]
    });
};
