n.d(t, { r: () => _ });
var r = n(255367),
    i = n(73800),
    l = n(580685),
    s = n(793030),
    a = n(442837),
    o = n(755721),
    c = n(481060),
    d = n(944163),
    u = n(65361),
    m = n(798476),
    g = n(434404),
    p = n(999382),
    f = n(548522),
    h = n(651390),
    x = n(981631),
    b = n(388032),
    j = n(870751);
let v = {
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
        { guild: n, guildProfile: _ } = (0, a.cj)([p.Z], () => ({
            guild: p.Z.getGuild(),
            guildProfile: p.Z.getGuildProfile()
        })),
        O = null == n ? void 0 : n.id,
        y = (0, a.e7)([d.Z], () => d.Z.get(O)),
        { fetchGuildProfile: C } = (0, u.u)(O),
        N = (null == _ ? void 0 : _.visibility) == null || !l.Y.VISIBLE.has(null == _ ? void 0 : _.visibility),
        I = (null == _ ? void 0 : _.visibility) === l.k.PUBLIC_WITH_RECRUITMENT;
    i.useEffect(() => {
        null != O && C();
    }, [O, C]);
    let E = i.useMemo(() => (null == n || null == _ ? v : _), [n, _]),
        S = i.useCallback(() => {
            (null == n ? void 0 : n.id) != null && (I ? g.Z.updateGuildProfile(n.id, { visibility: l.k.PUBLIC }) : g.Z.updateGuildProfile(n.id, { visibility: l.k.PUBLIC_WITH_RECRUITMENT }));
        }, [null == n ? void 0 : n.id, I]),
        T = i.useCallback(() => {
            g.Z.setSection(x.pNK.PROFILE);
        }, []);
    if (null == n) return null;
    let P = null != t ? t : null == y ? void 0 : y.formFields;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.X6, {
                variant: 'heading-md/semibold',
                color: 'header-primary',
                children: b.intl.string(b.t.AHJddH)
            }),
            (0, r.jsx)(s.xv, {
                tag: 'p',
                variant: 'text-sm/medium',
                color: 'text-secondary',
                className: j.applicationBody,
                children: b.intl.string(b.t.Z7TCtb)
            }),
            (0, r.jsx)(h.c, { guildId: n.id }),
            (0, r.jsx)('div', {
                className: j.form,
                children:
                    null != P
                        ? (0, r.jsx)(f.y, {
                              guild: n,
                              formFields: P
                          })
                        : (0, r.jsx)(c.$jN, {})
            }),
            (0, r.jsx)('div', { className: j.divider }),
            (0, r.jsxs)(c.hjN, {
                className: j.twoColumnContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: j.column,
                        children: [
                            (0, r.jsx)(c.j7V, {
                                onChange: S,
                                value: I,
                                hideBorder: !0,
                                disabled: N,
                                children: b.intl.string(b.t['N/0239'])
                            }),
                            (0, r.jsx)(s.xv, {
                                variant: 'text-sm/normal',
                                color: 'text-secondary',
                                children: b.intl.string(b.t['3TSZYG'])
                            }),
                            N &&
                                (0, r.jsx)(s.xv, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: b.intl.format(b.t.Bk0VOj, {
                                        profileLink: (e, t) =>
                                            (0, r.jsx)(
                                                c.eee,
                                                {
                                                    onClick: T,
                                                    children: e
                                                },
                                                t
                                            )
                                    })
                                })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: j.column,
                        children: (0, r.jsxs)('div', {
                            className: j.previewWrapper,
                            children: [
                                (0, r.jsx)('div', { className: j.gradient }),
                                (0, r.jsx)(m.ZP, {
                                    className: j.preview,
                                    profile: E,
                                    CTAOverride: (0, r.jsx)(o.zx, {
                                        className: j.previewButton,
                                        size: o.zx.Sizes.SMALL,
                                        fullWidth: !0,
                                        children: b.intl.string(b.t['7XdMW1'])
                                    }),
                                    disableGuildNameClick: !0
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
