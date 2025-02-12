t.d(n, { Z: () => et }), t(47120);
var l = t(200651),
    i = t(192379),
    a = t(120356),
    r = t.n(a),
    o = t(392711),
    s = t.n(o),
    d = t(866442),
    c = t(442837),
    u = t(780384),
    m = t(481060),
    h = t(45114),
    x = t(131388),
    _ = t(493773),
    p = t(410030),
    f = t(1585),
    g = t(125988),
    C = t(44315),
    v = t(160404),
    I = t(240991),
    j = t(703656),
    N = t(687158),
    Z = t(287008),
    b = t(484459),
    E = t(271383),
    w = t(430824),
    S = t(306680),
    y = t(594174),
    T = t(823379),
    B = t(51144),
    A = t(998502),
    R = t(549817),
    P = t(745752),
    k = t(45966),
    L = t(637853),
    O = t(905204),
    M = t(968644),
    D = t(521941),
    H = t(614328),
    U = t(104265),
    G = t(588632),
    F = t(290511),
    W = t(981631),
    z = t(176505),
    q = t(490897),
    X = t(388032),
    V = t(649141),
    J = t(767839),
    Y = t(642367);
let K = m.EFr.SIZE_80,
    Q = 'required';
function $(e) {
    var n;
    let { guild: t, user: i } = e,
        {
            avatarSrc: a,
            eventHandlers: o,
            isAvatarAnimating: u
        } = (0, Z.Z)({
            user: i,
            guildId: t.id,
            size: 120
        }),
        { avatarDecorationSrc: h } = (0, g.Z)({
            user: i,
            size: (0, f.y9)(K),
            onlyAnimateOnHover: !u
        }),
        x = (0, c.e7)([E.ZP], () => E.ZP.getSelfMember(t.id)),
        p = (0, c.Wu)([E.ZP], () => E.ZP.getMemberRoleWithPendingUpdates(t.id, i.id)),
        C = (0, c.e7)([w.Z], () => w.Z.getRoles(t.id)),
        v = s()(p)
            .filter((e) => C.hasOwnProperty(e))
            .map((e) => C[e])
            .orderBy('position', 'desc')
            .value(),
        j = (0, N.ZP)(i.id, t.id);
    (0, _.ZP)(() => {
        (0, b.Z)(i.id, i.getAvatarURL(t.id, (0, m.pxk)(K)), { guildId: t.id });
    });
    let S = (0, I.parseBioReact)(null == j ? void 0 : j.bio),
        y = A.ZP.getEnableHardwareAcceleration() ? m.Xo$ : m.qEK;
    return (0, l.jsxs)('div', {
        className: V.profile,
        children: [
            (0, l.jsx)(m.X6q, {
                variant: 'heading-md/semibold',
                color: 'header-primary',
                children: X.intl.string(X.t.diTbFx)
            }),
            (0, l.jsx)(m.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                children: X.intl.string(X.t['+8um3N'])
            }),
            (0, l.jsxs)('div', {
                className: V.profileCard,
                children: [
                    (0, l.jsx)('div', {
                        ...o,
                        children: (0, l.jsx)(y, {
                            src: a,
                            avatarDecoration: h,
                            size: K,
                            'aria-label': i.username
                        })
                    }),
                    (0, l.jsx)(m.Text, {
                        variant: 'text-lg/medium',
                        color: 'header-primary',
                        className: V.username,
                        children: null !== (n = null == x ? void 0 : x.nick) && void 0 !== n ? n : B.ZP.getName(i)
                    }),
                    (0, l.jsx)(m.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        className: r()(Y.markup, V.bio),
                        children: S
                    }),
                    null != v &&
                        v.length > 0 &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)('hr', { className: V.separator }),
                                (0, l.jsx)(m.Text, {
                                    variant: 'text-xs/semibold',
                                    color: 'text-muted',
                                    className: V.title,
                                    children: X.intl.string(X.t.LPJmLy)
                                }),
                                (0, l.jsx)('div', {
                                    className: V.roles,
                                    children:
                                        null == v
                                            ? void 0
                                            : v.map((e) => {
                                                  var n;
                                                  return (0, l.jsxs)(
                                                      'div',
                                                      {
                                                          className: V.role,
                                                          children: [
                                                              (0, l.jsx)(m.xko, {
                                                                  color: null !== (n = e.colorString) && void 0 !== n ? n : (0, d.Rf)(W.p6O),
                                                                  className: V.roleDot
                                                              }),
                                                              (0, l.jsx)(m.Text, {
                                                                  variant: 'text-xs/medium',
                                                                  color: 'header-primary',
                                                                  children: e.name
                                                              })
                                                          ]
                                                      },
                                                      e.id
                                                  );
                                              })
                                })
                            ]
                        })
                ]
            })
        ]
    });
}
function ee(e) {
    var n;
    let { prompt: t, guild: a } = e,
        [o, s] = i.useState(null),
        [d, u] = i.useState(new Set()),
        h = null == t ? void 0 : null === (n = t.options) || void 0 === n ? void 0 : n.filter((e) => d.has(e.id)),
        x = (0, L.L6)(h),
        _ = (0, L.dX)(h),
        p = (0, c.Wu)([k.Z], () => k.Z.getOnboardingResponsesForPrompt(a.id, t.id)),
        { helpText: f, helpTextAdditional: g } = (0, M.p)({
            guild: a,
            prompt: t,
            selectedRoleIds: x,
            selectedChannelIds: _,
            itemHook: (e, n) =>
                (0, l.jsx)(
                    m.Text,
                    {
                        variant: 'text-xs/medium',
                        color: 'header-primary',
                        children: e
                    },
                    n
                )
        }),
        { handleSelectOption: v } = (0, O.Z)(a.id),
        I = t.options.map((e) => ({
            value: e.id,
            ...e
        })),
        j = t.options.filter((e) => p.includes(e.id)).map((e) => e.id);
    return (0, l.jsx)(l.Fragment, {
        children: (0, l.jsxs)('div', {
            className: V.prompt,
            'data-new': t.isNew,
            children: [
                t.isNew &&
                    (0, l.jsx)(m.IGR, {
                        color: (0, C.Lq)(W.Ilk.BRAND_260),
                        text: X.intl.string(X.t.y2b7CA),
                        className: V.newBadge
                    }),
                (0, l.jsxs)(m.X6q, {
                    className: V.promptTitle,
                    variant: 'heading-md/semibold',
                    color: 'header-primary',
                    children: [
                        t.title,
                        t.required
                            ? (0, l.jsx)('span', {
                                  className: r()(V.required, { [V.error]: (null == o ? void 0 : o.type) === Q }),
                                  children: '*'
                              })
                            : null
                    ]
                }),
                (0, l.jsx)(G.Z, {
                    options: I,
                    value: j,
                    onChange: (e) => {
                        let n = e.find((e) => !p.includes(e.id)),
                            l = e.map((e) => e.id);
                        if (null != n) v(t, n, !0), t.singleSelect && t.options.forEach((e) => d.delete(e.id)), d.add(n.id);
                        else {
                            let e = p.filter((e) => !l.includes(e)),
                                n = t.options.filter((n) => e.includes(n.id));
                            if (p.length <= n.length && t.required) {
                                s({ type: Q });
                                return;
                            }
                            n.forEach((e) => {
                                v(t, e, !1), d.delete(e.id);
                            });
                        }
                        u(new Set(d)), s(null);
                    },
                    canBeNew: !t.isNew
                }),
                (0, l.jsxs)(m.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    className: V.helpText,
                    children: [f, ' ', g]
                })
            ]
        })
    });
}
function en(e) {
    var n;
    let { prompt: t, guild: a } = e,
        [o, s] = i.useState(null),
        [d, u] = i.useState(new Set()),
        h = null == t ? void 0 : null === (n = t.options) || void 0 === n ? void 0 : n.filter((e) => d.has(e.id)),
        x = (0, L.L6)(h),
        _ = (0, L.dX)(h),
        p = (0, c.Wu)([k.Z], () => k.Z.getOnboardingResponsesForPrompt(a.id, t.id)),
        { helpText: f, helpTextAdditional: g } = (0, M.p)({
            guild: a,
            prompt: t,
            selectedRoleIds: x,
            selectedChannelIds: _,
            itemHook: (e, n) =>
                (0, l.jsx)(
                    m.Text,
                    {
                        variant: 'text-xs/medium',
                        color: 'header-primary',
                        children: e
                    },
                    n
                )
        }),
        { handleSelectOption: v } = (0, O.Z)(a.id),
        I = (e, n) => {
            if (!n && 1 === p.length && t.required) {
                s({ type: Q });
                return;
            }
            v(t, e, null != n && n), t.singleSelect && n && t.options.forEach((e) => d.delete(e.id)), n ? d.add(e.id) : d.delete(e.id), u(new Set(d)), s(null);
        };
    return (0, l.jsx)(l.Fragment, {
        children: (0, l.jsxs)('div', {
            className: V.prompt,
            'data-new': t.isNew,
            children: [
                t.isNew &&
                    (0, l.jsx)(m.IGR, {
                        color: (0, C.Lq)(W.Ilk.BRAND_260),
                        text: X.intl.string(X.t.y2b7CA),
                        className: V.newBadge
                    }),
                (0, l.jsxs)(m.X6q, {
                    className: V.promptTitle,
                    variant: 'heading-md/semibold',
                    color: 'header-primary',
                    children: [
                        t.title,
                        t.required
                            ? (0, l.jsx)('span', {
                                  className: r()(V.required, { [V.error]: (null == o ? void 0 : o.type) === Q }),
                                  children: '*'
                              })
                            : null
                    ]
                }),
                (0, l.jsx)('div', {
                    className: V.promptOptions,
                    children: t.options.map((e) =>
                        (0, l.jsx)(
                            U.Z,
                            {
                                hideMemberCount: !0,
                                guildId: a.id,
                                option: e,
                                onSelect: (n) => I(e, n),
                                selected: p.includes(e.id),
                                canBeNew: !t.isNew
                            },
                            e.id
                        )
                    )
                }),
                (0, l.jsxs)(m.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    className: V.helpText,
                    children: [f, ' ', g]
                })
            ]
        })
    });
}
function et(e) {
    let { guildId: n, onBrowseChannels: t } = e,
        a = (0, u.wj)((0, p.ZP)()),
        o = (0, c.e7)([w.Z], () => w.Z.getGuild(n)),
        s = (0, c.e7)([y.default], () => y.default.getCurrentUser()),
        d = (0, x.Z)('(min-width: 1344px)') && null != s,
        _ = i.useCallback(() => {
            (0, j.uL)(W.Z5c.CHANNEL(n, z.oC.CHANNEL_BROWSER)), null == t || t();
        }, [n, t]),
        f = (0, c.e7)([S.ZP], () => S.ZP.hasUnread(n, q.W.GUILD_ONBOARDING_QUESTION)),
        { onboardingPromptsRaw: g, newOnboardingPrompts: I, onboardingPromptsWithNewAnswers: N, newAnswersCount: Z, onboardingPrompts: b } = (0, D.Z)(n);
    i.useEffect(() => {
        (null == o ? void 0 : o.id) != null && !v.Z.isFullServerPreview(o.id) && (k.Z.shouldFetchPrompts(o.id) || f) && (0, P.eM)(o.id);
    }, [null == o ? void 0 : o.id, f]),
        i.useEffect(() => {
            if ((null == o ? void 0 : o.id) != null && !v.Z.isFullServerPreview(o.id))
                return () => {
                    (0, h.Ju)(o.id, q.W.GUILD_ONBOARDING_QUESTION, k.Z.ackIdForGuild(o.id)), R.Z.updateOnboardingResponses(o.id);
                };
        }, [null == o ? void 0 : o.id]);
    let E = i.useCallback(
        (e) => {
            if (null == o) return null;
            switch (e.type) {
                case F.FN.MULTIPLE_CHOICE:
                    return (0, l.jsx)(
                        en,
                        {
                            prompt: e,
                            guild: o
                        },
                        e.id
                    );
                case F.FN.DROPDOWN:
                    return (0, l.jsx)(
                        ee,
                        {
                            prompt: e,
                            guild: o
                        },
                        e.id
                    );
                default:
                    (0, T.vE)(e.type);
            }
        },
        [o]
    );
    if (null == o) return null;
    if (0 === g.length) {
        let e = (0, C.Lq)(a ? W.Ilk.PRIMARY_300 : W.Ilk.PRIMARY_500),
            n = (0, C.Lq)(a ? W.Ilk.PRIMARY_700 : W.Ilk.PRIMARY_230);
        return (0, l.jsx)('div', {
            className: r()(J.content, V.emptyPage),
            children: (0, l.jsxs)('div', {
                className: V.emptyContainer,
                children: [
                    (0, l.jsx)(H.Z, {
                        className: V.emptyIcon,
                        foregroundColor: e,
                        backgroundColor: n
                    }),
                    (0, l.jsx)(m.X6q, {
                        className: V.emptyHeader,
                        variant: 'heading-md/semibold',
                        children: X.intl.string(X.t.leKHQ0)
                    }),
                    (0, l.jsx)(m.Text, {
                        variant: 'text-sm/medium',
                        children: X.intl.format(X.t['jH+ktL'], { onBrowseChannels: _ })
                    })
                ]
            })
        });
    }
    return (0, l.jsxs)(m.Den, {
        className: V.scroller,
        fade: !0,
        children: [
            (0, l.jsxs)('div', {
                className: V.pageBody,
                children: [
                    (I.length > 0 || N.length > 0) &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)('div', {
                                    children: (0, l.jsx)(m.X6q, {
                                        variant: 'heading-md/semibold',
                                        color: 'header-primary',
                                        children: X.intl.format(X.t.iB5Gqa, { count: I.length + Z })
                                    })
                                }),
                                I.map(E),
                                N.map(E),
                                (0, l.jsx)('div', { className: V.sectionSeparator })
                            ]
                        }),
                    b.length > 0 &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)('div', {
                                    children: [
                                        (0, l.jsx)(m.X6q, {
                                            variant: 'heading-md/semibold',
                                            color: 'header-primary',
                                            children: X.intl.format(X.t['8IV8Ky'], { count: b.length })
                                        }),
                                        (0, l.jsx)(m.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-muted',
                                            children: X.intl.string(X.t.Ecz7T0)
                                        })
                                    ]
                                }),
                                b.map(E)
                            ]
                        })
                ]
            }),
            d &&
                (0, l.jsx)($, {
                    guild: o,
                    user: s
                })
        ]
    });
}
