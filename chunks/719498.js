a.d(t, { default: () => m });
var n = a(200651),
    i = a(192379),
    s = a(481060),
    l = a(933557),
    r = a(540059),
    d = a(925329),
    o = a(296023),
    c = a(388032),
    x = a(854850);
let m = (e) => {
    let { channel: t, application: m, onClose: h, transitionState: k } = e,
        u = (0, r.Q3)('IntegrationsEditLinkedLobbyModal'),
        j = (0, o.w)(t),
        p = i.useCallback(
            () => (
                h(),
                (0, s.ZDy)(async () => {
                    let { default: e } = await Promise.all([a.e('38902'), a.e('31907')]).then(a.bind(a, 366854));
                    return (a) =>
                        (0, n.jsx)(e, {
                            ...a,
                            channelId: t.id,
                            application: m
                        });
                })
            ),
            [m, t.id, h]
        ),
        v = (0, l.ZP)(t, !0);
    return (0, n.jsxs)(s.Y0X, {
        transitionState: k,
        'aria-label': c.intl.string(c.t.OJknho),
        children: [
            (0, n.jsx)(s.xBx, {
                separator: !1,
                children: (0, n.jsx)(s.X6q, {
                    variant: 'heading-lg/semibold',
                    children: c.intl.string(c.t.OJknho)
                })
            }),
            (0, n.jsxs)(s.hzk, {
                className: x.content,
                children: [
                    (0, n.jsx)(d.Z, {
                        game: m,
                        size: d.Z.Sizes.LARGE
                    }),
                    (0, n.jsxs)('div', {
                        className: x.metadata,
                        children: [
                            (0, n.jsxs)('div', {
                                className: x.metadataHeader,
                                children: [
                                    (0, n.jsx)(s.Text, {
                                        variant: 'text-md/semibold',
                                        color: 'header-primary',
                                        children: m.name
                                    }),
                                    (0, n.jsx)(s.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        children: c.intl.format(c.t['0NJZAQ'], { channelName: v })
                                    })
                                ]
                            }),
                            null != j &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)('div', { className: x.divider }),
                                        (0, n.jsx)(s.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-muted',
                                            children: j
                                        })
                                    ]
                                })
                        ]
                    })
                ]
            }),
            (0, n.jsxs)(s.mzw, {
                children: [
                    (0, n.jsx)(s.zxk, {
                        onClick: p,
                        color: s.zxk.Colors.RED,
                        children: c.intl.string(c.t.LLWaxc)
                    }),
                    (0, n.jsx)(s.zxk, {
                        onClick: h,
                        look: u ? s.zxk.Looks.FILLED : s.zxk.Looks.LINK,
                        color: s.zxk.Colors.PRIMARY,
                        className: x.cancelButton,
                        children: c.intl.string(c.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
};
