t.d(a, { default: () => p }), t(47120);
var r = t(200651),
    s = t(192379),
    n = t(442837),
    d = t(481060),
    i = t(367907),
    o = t(313201),
    l = t(650774),
    c = t(434404),
    C = t(166184),
    m = t(981631),
    h = t(388032),
    u = t(168979);
let p = (e) => {
    let { transitionState: a, onClose: t, guild: p } = e,
        x = (0, o.Dt)();
    s.useEffect(() => {
        i.ZP.trackWithMetadata(m.rMx.OPEN_MODAL, { type: m.jXE.DISCOVERY_SETUP_SUCCESS_MODAL });
    }, []);
    let [_, N] = (0, n.Wu)([l.Z], () => [l.Z.getOnlineCount(p.id), l.Z.getMemberCount(p.id)], [p.id]);
    return (0, r.jsxs)(d.Y0X, {
        transitionState: a,
        'aria-labelledby': x,
        className: u.root,
        children: [
            (0, r.jsx)(d.xBx, {
                className: u.modalHeader,
                separator: !1,
                children: (0, r.jsx)(d.olH, {
                    onClick: t,
                    className: u.modalCloseButton
                })
            }),
            (0, r.jsx)(d.X6q, {
                variant: 'heading-xl/semibold',
                id: x,
                className: u.header,
                children: h.NW.string(h.t['2ocCIi'])
            }),
            (0, r.jsxs)(d.hzk, {
                className: u.modalContent,
                children: [
                    (0, r.jsx)(d.Text, {
                        variant: 'text-md/normal',
                        className: u.subheader,
                        children: h.NW.format(h.t.TRh6a2, {
                            onServerSettingsClick: () => {
                                t(),
                                    c.Z.setSection(m.pNK.DISCOVERY),
                                    i.ZP.trackWithMetadata(m.rMx.SETTINGS_PANE_VIEWED, {
                                        settings_type: 'guild',
                                        origin_pane: 'DISCOVERY',
                                        destination_pane: 'DISCOVERY'
                                    });
                            }
                        })
                    }),
                    (0, r.jsx)(C.Z, {
                        className: u.previewCard,
                        guild: p,
                        presenceCount: _,
                        memberCount: N
                    })
                ]
            }),
            (0, r.jsx)(d.mzw, {
                children: (0, r.jsx)(d.zxk, {
                    onClick: t,
                    children: h.NW.string(h.t['NX+WJC'])
                })
            })
        ]
    });
};
