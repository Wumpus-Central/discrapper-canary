t.d(n, {
    Z: function () {
        return ea;
    }
}),
    t(47120);
var l = t(200651),
    a = t(192379),
    i = t(120356),
    r = t.n(i),
    o = t(392711),
    s = t.n(o),
    c = t(666912),
    d = t(866442),
    u = t(442837),
    h = t(692547),
    m = t(780384),
    f = t(481060),
    p = t(45114),
    x = t(131388),
    C = t(493773),
    g = t(410030),
    _ = t(1585),
    b = t(125988),
    I = t(44315),
    N = t(160404),
    v = t(240991),
    Z = t(703656),
    j = t(687158),
    B = t(287008),
    E = t(484459),
    S = t(271383),
    T = t(430824),
    w = t(306680),
    A = t(594174),
    y = t(823379),
    L = t(51144),
    k = t(998502),
    O = t(549817),
    P = t(745752),
    R = t(45966),
    M = t(637853),
    D = t(905204),
    H = t(968644),
    U = t(521941),
    G = t(614328),
    W = t(104265),
    z = t(588632),
    F = t(290511),
    q = t(981631),
    V = t(176505),
    X = t(490897),
    Y = t(388032),
    Q = t(44975),
    J = t(247627),
    K = t(665162);
let $ = f.AvatarSizes.SIZE_80,
    ee = 'required';
function en(e) {
    var n;
    let { guild: t, user: a } = e,
        {
            avatarSrc: i,
            eventHandlers: o,
            isAvatarAnimating: c
        } = (0, B.Z)({
            user: a,
            guildId: t.id,
            size: 120
        }),
        { avatarDecorationSrc: h } = (0, b.Z)({
            user: a,
            size: (0, _.y9)($),
            onlyAnimateOnHover: !c
        }),
        m = (0, u.e7)([S.ZP], () => S.ZP.getSelfMember(t.id)),
        p = (0, u.Wu)([S.ZP], () => S.ZP.getMemberRoleWithPendingUpdates(t.id, a.id)),
        x = (0, u.e7)([T.Z], () => T.Z.getRoles(t.id)),
        g = s()(p)
            .filter((e) => x.hasOwnProperty(e))
            .map((e) => x[e])
            .orderBy('position', 'desc')
            .value(),
        I = (0, j.ZP)(a.id, t.id);
    (0, C.Z)(() => {
        (0, E.Z)(a.id, a.getAvatarURL(t.id, (0, f.getAvatarSize)($)), { guildId: t.id });
    });
    let N = (0, v.parseBioReact)(null == I ? void 0 : I.bio),
        Z = k.ZP.getEnableHardwareAcceleration() ? f.AnimatedAvatar : f.Avatar;
    return (0, l.jsxs)('div', {
        className: Q.profile,
        children: [
            (0, l.jsx)(f.Heading, {
                variant: 'heading-md/semibold',
                color: 'header-primary',
                children: Y.intl.string(Y.t.diTbFx)
            }),
            (0, l.jsx)(f.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                children: Y.intl.string(Y.t['+8um3N'])
            }),
            (0, l.jsxs)('div', {
                className: Q.profileCard,
                children: [
                    (0, l.jsx)('div', {
                        ...o,
                        children: (0, l.jsx)(Z, {
                            src: i,
                            avatarDecoration: h,
                            size: $,
                            'aria-label': a.username
                        })
                    }),
                    (0, l.jsx)(f.Text, {
                        variant: 'text-lg/medium',
                        color: 'header-primary',
                        className: Q.username,
                        children: null !== (n = null == m ? void 0 : m.nick) && void 0 !== n ? n : L.ZP.getName(a)
                    }),
                    (0, l.jsx)(f.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        className: r()(K.markup, Q.bio),
                        children: N
                    }),
                    null != g &&
                        g.length > 0 &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)('hr', { className: Q.separator }),
                                (0, l.jsx)(f.Text, {
                                    variant: 'text-xs/semibold',
                                    color: 'text-muted',
                                    className: Q.title,
                                    children: Y.intl.string(Y.t.LPJmLy)
                                }),
                                (0, l.jsx)('div', {
                                    className: Q.roles,
                                    children:
                                        null == g
                                            ? void 0
                                            : g.map((e) => {
                                                  var n;
                                                  return (0, l.jsxs)(
                                                      'div',
                                                      {
                                                          className: Q.role,
                                                          children: [
                                                              (0, l.jsx)(f.RoleCircle, {
                                                                  color: null !== (n = e.colorString) && void 0 !== n ? n : (0, d.Rf)(q.p6O),
                                                                  className: Q.roleDot
                                                              }),
                                                              (0, l.jsx)(f.Text, {
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
function et(e) {
    var n;
    let { prompt: t, guild: i } = e,
        [o, s] = a.useState(null),
        [d, m] = a.useState(new Set()),
        p = null == t ? void 0 : null === (n = t.options) || void 0 === n ? void 0 : n.filter((e) => d.has(e.id)),
        x = (0, M.L6)(p),
        C = (0, M.dX)(p),
        g = (0, u.Wu)([R.Z], () => R.Z.getOnboardingResponsesForPrompt(i.id, t.id)),
        { helpText: _, helpTextAdditional: b } = (0, H.p)({
            guild: i,
            prompt: t,
            selectedRoleIds: x,
            selectedChannelIds: C,
            itemHook: (e, n) =>
                (0, l.jsx)(
                    f.Text,
                    {
                        variant: 'text-xs/medium',
                        color: 'header-primary',
                        children: e
                    },
                    n
                )
        }),
        { handleSelectOption: N } = (0, D.Z)(i.id),
        v = (0, f.useToken)(h.Z.unsafe_rawColors.BRAND_500),
        Z = (0, f.useSpring)(
            {
                from: { color: t.isNew ? v.hex({ opacity: 1 }) : v.hex({ opacity: 0 }) },
                color: v.hex({ opacity: 0 }),
                config: { duration: 300 },
                delay: 500
            },
            'animate-always'
        ),
        j = t.options.map((e) => ({
            value: e.id,
            ...e
        })),
        B = t.options.filter((e) => g.includes(e.id)).map((e) => e.id);
    return (0, l.jsx)(l.Fragment, {
        children: (0, l.jsxs)(c.animated.div, {
            className: Q.prompt,
            style: { borderColor: Z.color },
            children: [
                t.isNew &&
                    (0, l.jsx)(f.TextBadge, {
                        color: (0, I.Lq)(q.Ilk.BRAND_260),
                        text: Y.intl.string(Y.t.y2b7CA),
                        className: Q.newBadge
                    }),
                (0, l.jsxs)(f.Heading, {
                    className: Q.promptTitle,
                    variant: 'heading-md/semibold',
                    color: 'header-primary',
                    children: [
                        t.title,
                        t.required
                            ? (0, l.jsx)('span', {
                                  className: r()(Q.required, { [Q.error]: (null == o ? void 0 : o.type) === ee }),
                                  children: '*'
                              })
                            : null
                    ]
                }),
                (0, l.jsx)(z.Z, {
                    options: j,
                    value: B,
                    onChange: (e) => {
                        let n = e.find((e) => !g.includes(e.id)),
                            l = e.map((e) => e.id);
                        if (null != n) N(t, n, !0), t.singleSelect && t.options.forEach((e) => d.delete(e.id)), d.add(n.id);
                        else {
                            let e = g.filter((e) => !l.includes(e)),
                                n = t.options.filter((n) => e.includes(n.id));
                            if (g.length <= n.length && t.required) {
                                s({ type: ee });
                                return;
                            }
                            n.forEach((e) => {
                                N(t, e, !1), d.delete(e.id);
                            });
                        }
                        m(new Set(d)), s(null);
                    },
                    canBeNew: !t.isNew
                }),
                (0, l.jsxs)(f.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    className: Q.helpText,
                    children: [_, ' ', b]
                })
            ]
        })
    });
}
function el(e) {
    var n;
    let { prompt: t, guild: i } = e,
        [o, s] = a.useState(null),
        [d, m] = a.useState(new Set()),
        p = null == t ? void 0 : null === (n = t.options) || void 0 === n ? void 0 : n.filter((e) => d.has(e.id)),
        x = (0, M.L6)(p),
        C = (0, M.dX)(p),
        g = (0, u.Wu)([R.Z], () => R.Z.getOnboardingResponsesForPrompt(i.id, t.id)),
        { helpText: _, helpTextAdditional: b } = (0, H.p)({
            guild: i,
            prompt: t,
            selectedRoleIds: x,
            selectedChannelIds: C,
            itemHook: (e, n) =>
                (0, l.jsx)(
                    f.Text,
                    {
                        variant: 'text-xs/medium',
                        color: 'header-primary',
                        children: e
                    },
                    n
                )
        }),
        { handleSelectOption: N } = (0, D.Z)(i.id),
        v = (e, n) => {
            if (!n && 1 === g.length && t.required) {
                s({ type: ee });
                return;
            }
            N(t, e, null != n && n), t.singleSelect && n && t.options.forEach((e) => d.delete(e.id)), n ? d.add(e.id) : d.delete(e.id), m(new Set(d)), s(null);
        },
        Z = (0, f.useToken)(h.Z.unsafe_rawColors.BRAND_500),
        j = (0, f.useSpring)(
            {
                from: { color: t.isNew ? Z.hex({ opacity: 1 }) : Z.hex({ opacity: 0 }) },
                color: Z.hex({ opacity: 0 }),
                config: { duration: 300 },
                delay: 500
            },
            'animate-always'
        );
    return (0, l.jsx)(l.Fragment, {
        children: (0, l.jsxs)(c.animated.div, {
            className: Q.prompt,
            style: { borderColor: j.color },
            children: [
                t.isNew &&
                    (0, l.jsx)(f.TextBadge, {
                        color: (0, I.Lq)(q.Ilk.BRAND_260),
                        text: Y.intl.string(Y.t.y2b7CA),
                        className: Q.newBadge
                    }),
                (0, l.jsxs)(f.Heading, {
                    className: Q.promptTitle,
                    variant: 'heading-md/semibold',
                    color: 'header-primary',
                    children: [
                        t.title,
                        t.required
                            ? (0, l.jsx)('span', {
                                  className: r()(Q.required, { [Q.error]: (null == o ? void 0 : o.type) === ee }),
                                  children: '*'
                              })
                            : null
                    ]
                }),
                (0, l.jsx)('div', {
                    className: Q.promptOptions,
                    children: t.options.map((e) =>
                        (0, l.jsx)(
                            W.Z,
                            {
                                hideMemberCount: !0,
                                guildId: i.id,
                                option: e,
                                onSelect: (n) => v(e, n),
                                selected: g.includes(e.id),
                                canBeNew: !t.isNew
                            },
                            e.id
                        )
                    )
                }),
                (0, l.jsxs)(f.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    className: Q.helpText,
                    children: [_, ' ', b]
                })
            ]
        })
    });
}
function ea(e) {
    let { guildId: n, onBrowseChannels: t } = e,
        i = (0, m.wj)((0, g.ZP)()),
        o = (0, u.e7)([T.Z], () => T.Z.getGuild(n)),
        s = (0, u.e7)([A.default], () => A.default.getCurrentUser()),
        c = (0, x.Z)('(min-width: 1344px)') && null != s,
        d = a.useCallback(() => {
            (0, Z.uL)(q.Z5c.CHANNEL(n, V.oC.CHANNEL_BROWSER)), null == t || t();
        }, [n, t]),
        h = (0, u.e7)([w.ZP], () => w.ZP.hasUnread(n, X.W.GUILD_ONBOARDING_QUESTION)),
        { onboardingPromptsRaw: C, newOnboardingPrompts: _, onboardingPromptsWithNewAnswers: b, newAnswersCount: v, onboardingPrompts: j } = (0, U.Z)(n);
    a.useEffect(() => {
        if ((null == o ? void 0 : o.id) != null) !N.Z.isFullServerPreview(o.id) && (R.Z.shouldFetchPrompts(o.id) || h) && (0, P.eM)(o.id);
    }, [null == o ? void 0 : o.id, h]),
        a.useEffect(() => {
            if ((null == o ? void 0 : o.id) != null) {
                if (!N.Z.isFullServerPreview(o.id))
                    return () => {
                        (0, p.Ju)(o.id, X.W.GUILD_ONBOARDING_QUESTION, R.Z.ackIdForGuild(o.id)), O.Z.updateOnboardingResponses(o.id);
                    };
            }
        }, [null == o ? void 0 : o.id]);
    let B = a.useCallback(
        (e) => {
            if (null == o) return null;
            switch (e.type) {
                case F.FN.MULTIPLE_CHOICE:
                    return (0, l.jsx)(
                        el,
                        {
                            prompt: e,
                            guild: o
                        },
                        e.id
                    );
                case F.FN.DROPDOWN:
                    return (0, l.jsx)(
                        et,
                        {
                            prompt: e,
                            guild: o
                        },
                        e.id
                    );
                default:
                    (0, y.vE)(e.type);
            }
        },
        [o]
    );
    if (null == o) return null;
    if (0 === C.length) {
        let e = (0, I.Lq)(i ? q.Ilk.PRIMARY_300 : q.Ilk.PRIMARY_500),
            n = (0, I.Lq)(i ? q.Ilk.PRIMARY_700 : q.Ilk.PRIMARY_230);
        return (0, l.jsx)('div', {
            className: r()(J.content, Q.emptyPage),
            children: (0, l.jsxs)('div', {
                className: Q.emptyContainer,
                children: [
                    (0, l.jsx)(G.Z, {
                        className: Q.emptyIcon,
                        foregroundColor: e,
                        backgroundColor: n
                    }),
                    (0, l.jsx)(f.Heading, {
                        className: Q.emptyHeader,
                        variant: 'heading-md/semibold',
                        children: Y.intl.string(Y.t.leKHQ0)
                    }),
                    (0, l.jsx)(f.Text, {
                        variant: 'text-sm/medium',
                        children: Y.intl.format(Y.t['jH+ktL'], { onBrowseChannels: d })
                    })
                ]
            })
        });
    }
    return (0, l.jsxs)(f.AdvancedScroller, {
        className: Q.scroller,
        fade: !0,
        children: [
            (0, l.jsxs)('div', {
                className: Q.pageBody,
                children: [
                    (_.length > 0 || b.length > 0) &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)('div', {
                                    children: (0, l.jsx)(f.Heading, {
                                        variant: 'heading-md/semibold',
                                        color: 'header-primary',
                                        children: Y.intl.format(Y.t.iB5Gqa, { count: _.length + v })
                                    })
                                }),
                                _.map(B),
                                b.map(B),
                                (0, l.jsx)('div', { className: Q.sectionSeparator })
                            ]
                        }),
                    j.length > 0 &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)('div', {
                                    children: [
                                        (0, l.jsx)(f.Heading, {
                                            variant: 'heading-md/semibold',
                                            color: 'header-primary',
                                            children: Y.intl.format(Y.t['8IV8Ky'], { count: j.length })
                                        }),
                                        (0, l.jsx)(f.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-muted',
                                            children: Y.intl.string(Y.t.Ecz7T0)
                                        })
                                    ]
                                }),
                                j.map(B)
                            ]
                        })
                ]
            }),
            c &&
                (0, l.jsx)(en, {
                    guild: o,
                    user: s
                })
        ]
    });
}
