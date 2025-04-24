n.d(t, { r: () => _ });
var r = n(200651),
    i = n(192379),
    l = n(580685),
    s = n(793030),
    a = n(442837),
    o = n(481060),
    c = n(944163),
    u = n(65361),
    d = n(910200),
    m = n(434404),
    g = n(999382),
    p = n(548522),
    h = n(651390),
    f = n(981631),
    x = n(388032),
    b = n(98574);
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
    visibility: l.k.RESTRICTED,
    brandColorPrimary: null,
    tag: null,
    badge: null,
    badgeHash: null,
    badgeColorPrimary: null,
    badgeColorSecondary: null
};
function _(e) {
    let { pendingFields: t } = e,
        { guild: n, guildProfile: _ } = (0, a.cj)([g.Z], () => ({
            guild: g.Z.getGuild(),
            guildProfile: g.Z.getGuildProfile()
        })),
        v = null == n ? void 0 : n.id,
        O = (0, a.e7)([c.Z], () => c.Z.get(v)),
        { fetchGuildProfile: C } = (0, u.u)(v),
        y = (null == _ ? void 0 : _.visibility) == null || !l.Y.VISIBLE.has(null == _ ? void 0 : _.visibility),
        N = (null == _ ? void 0 : _.visibility) === l.k.PUBLIC_WITH_RECRUITMENT;
    i.useEffect(() => {
        null != v && C();
    }, [v, C]);
    let I = i.useMemo(() => (null == n || null == _ ? j : _), [n, _]),
        E = i.useCallback(() => {
            (null == n ? void 0 : n.id) != null && (N ? m.Z.updateGuildProfile(n.id, { visibility: l.k.PUBLIC }) : m.Z.updateGuildProfile(n.id, { visibility: l.k.PUBLIC_WITH_RECRUITMENT }));
        }, [null == n ? void 0 : n.id, N]),
        S = i.useCallback(() => {
            m.Z.setSection(f.pNK.PROFILE);
        }, []);
    if (null == n) return null;
    let T = null != t ? t : null == O ? void 0 : O.formFields;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.X6, {
                variant: 'heading-md/semibold',
                color: 'header-primary',
                children: x.intl.string(x.t.AHJddH)
            }),
            (0, r.jsx)(s.xv, {
                tag: 'p',
                variant: 'text-sm/medium',
                color: 'text-secondary',
                className: b.applicationBody,
                children: x.intl.string(x.t.Z7TCtb)
            }),
            (0, r.jsx)(h.c, { guildId: n.id }),
            (0, r.jsx)('div', {
                className: b.form,
                children:
                    null != T
                        ? (0, r.jsx)(p.y, {
                              guild: n,
                              formFields: T
                          })
                        : (0, r.jsx)(o.$jN, {})
            }),
            (0, r.jsx)('div', { className: b.divider }),
            (0, r.jsxs)(o.hjN, {
                className: b.twoColumnContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: b.column,
                        children: [
                            (0, r.jsx)(o.j7V, {
                                onChange: E,
                                value: N,
                                hideBorder: !0,
                                disabled: y,
                                children: x.intl.string(x.t['N/0239'])
                            }),
                            (0, r.jsx)(s.xv, {
                                variant: 'text-sm/normal',
                                color: 'text-secondary',
                                children: x.intl.string(x.t['3TSZYG'])
                            }),
                            y &&
                                (0, r.jsx)(s.xv, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: x.intl.format(x.t.Bk0VOj, {
                                        profileLink: (e, t) =>
                                            (0, r.jsx)(
                                                o.eee,
                                                {
                                                    onClick: S,
                                                    children: e
                                                },
                                                t
                                            )
                                    })
                                })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: b.column,
                        children: (0, r.jsxs)('div', {
                            className: b.previewWrapper,
                            children: [
                                (0, r.jsx)('div', { className: b.gradient }),
                                (0, r.jsx)(d.ZP, {
                                    className: b.preview,
                                    profile: I,
                                    CTAOverride: (0, r.jsx)(o.zxk, {
                                        className: b.previewButton,
                                        size: o.zxk.Sizes.SMALL,
                                        fullWidth: !0,
                                        children: x.intl.string(x.t['7XdMW1'])
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
