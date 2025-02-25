n.d(t, { r: () => N });
var r = n(200651),
    i = n(192379),
    s = n(580685),
    a = n(793030),
    l = n(442837),
    o = n(481060),
    c = n(944163),
    d = n(65361),
    u = n(910200),
    m = n(434404),
    p = n(999382),
    g = n(548522),
    h = n(651390),
    f = n(981631),
    b = n(388032),
    x = n(870114);
let j = {
    id: '0',
    name: '',
    description: '',
    icon: '',
    customBanner: null,
    onlineCount: 0,
    memberCount: 0,
    traits: [],
    gameApplicationIds: [],
    gameActivity: {},
    visibility: s.k.RESTRICTED
};
function N(e) {
    let { pendingFields: t } = e,
        { guild: n, profile: N } = (0, l.e7)([p.Z], () => p.Z.getProps()),
        v = null == n ? void 0 : n.id,
        _ = (0, l.e7)([c.Z], () => c.Z.get(v)),
        { fetchGuildProfile: O } = (0, d.u)(v),
        y = (null == N ? void 0 : N.visibility) === s.k.RESTRICTED,
        C = (null == N ? void 0 : N.visibility) === s.k.PUBLIC_WITH_RECRUITMENT;
    i.useEffect(() => {
        null != v && O();
    }, [v, O]);
    let I = i.useMemo(() => (null == n || null == N ? j : N), [n, N]);
    if (null == n) return null;
    let E = () => {
            m.Z.setSection(f.pNK.PROFILE);
        },
        S = null != t ? t : null == _ ? void 0 : _.formFields;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.X6, {
                variant: 'heading-md/semibold',
                color: 'header-primary',
                children: b.NW.string(b.t.AHJddH)
            }),
            (0, r.jsx)(a.xv, {
                tag: 'p',
                variant: 'text-sm/medium',
                color: 'text-secondary',
                className: x.applicationBody,
                children: b.NW.string(b.t.Z7TCtb)
            }),
            (0, r.jsx)(h.c, { guildId: n.id }),
            (0, r.jsx)('div', {
                className: x.form,
                children:
                    null != S
                        ? (0, r.jsx)(g.y, {
                              guild: n,
                              formFields: S
                          })
                        : (0, r.jsx)(o.$jN, {})
            }),
            (0, r.jsx)('div', { className: x.divider }),
            (0, r.jsxs)(o.hjN, {
                className: x.twoColumnContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: x.column,
                        children: [
                            (0, r.jsx)(o.j7V, {
                                onChange: () => {
                                    C ? m.Z.updateGuildProfile(n.id, { visibility: s.k.PUBLIC }) : m.Z.updateGuildProfile(n.id, { visibility: s.k.PUBLIC_WITH_RECRUITMENT });
                                },
                                value: C,
                                hideBorder: !0,
                                disabled: y,
                                children: b.NW.string(b.t['N/0239'])
                            }),
                            (0, r.jsx)(a.xv, {
                                variant: 'text-sm/normal',
                                color: 'text-secondary',
                                children: b.NW.string(b.t['3TSZYG'])
                            }),
                            y &&
                                (0, r.jsx)(a.xv, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: b.NW.format(b.t.Bk0VOj, {
                                        profileLink: (e, t) =>
                                            (0, r.jsx)(
                                                o.eee,
                                                {
                                                    onClick: E,
                                                    children: e
                                                },
                                                t
                                            )
                                    })
                                })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: x.column,
                        children: (0, r.jsxs)('div', {
                            className: x.previewWrapper,
                            children: [
                                (0, r.jsx)('div', { className: x.gradient }),
                                (0, r.jsx)(u.Z, {
                                    className: x.preview,
                                    profile: I,
                                    CTAOverride: (0, r.jsx)(o.zxk, {
                                        size: o.zxk.Sizes.SMALL,
                                        fullWidth: !0,
                                        disabled: !0,
                                        children: b.NW.string(b.t['7XdMW1'])
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
