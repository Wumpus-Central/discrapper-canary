t.d(n, {
    Z: function () {
        return el;
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
    C = t(410030),
    g = t(1585),
    _ = t(125988),
    b = t(44315),
    I = t(160404),
    N = t(240991),
    v = t(703656),
    Z = t(687158),
    j = t(287008),
    E = t(484459),
    B = t(271383),
    S = t(430824),
    T = t(306680),
    w = t(594174),
    A = t(823379),
    y = t(51144),
    L = t(998502),
    k = t(549817),
    O = t(745752),
    P = t(45966),
    R = t(637853),
    M = t(905204),
    D = t(968644),
    H = t(521941),
    U = t(614328),
    G = t(104265),
    W = t(588632),
    z = t(290511),
    F = t(981631),
    q = t(176505),
    V = t(490897),
    X = t(388032),
    Y = t(44975),
    Q = t(247627),
    J = t(665162);
let K = f.AvatarSizes.SIZE_80,
    $ = 'required';
function ee(e) {
    var n;
    let { guild: t, user: i } = e,
        {
            avatarSrc: o,
            eventHandlers: c,
            isAvatarAnimating: h
        } = (0, j.Z)({
            user: i,
            guildId: t.id,
            size: 120
        }),
        { avatarDecorationSrc: m } = (0, _.Z)({
            user: i,
            size: (0, g.y9)(K),
            onlyAnimateOnHover: !h
        }),
        p = (0, u.e7)([B.ZP], () => B.ZP.getSelfMember(t.id)),
        x = (0, u.Wu)([B.ZP], () => B.ZP.getMemberRoleWithPendingUpdates(t.id, i.id)),
        C = (0, u.e7)([S.Z], () => S.Z.getRoles(t.id)),
        b = s()(x)
            .filter((e) => C.hasOwnProperty(e))
            .map((e) => C[e])
            .orderBy('position', 'desc')
            .value(),
        I = (0, Z.ZP)(i.id, t.id);
    a.useEffect(() => {
        (0, E.Z)(i.id, i.getAvatarURL(t.id, (0, f.getAvatarSize)(K)), { guildId: t.id });
    }, []);
    let v = (0, N.parseBioReact)(null == I ? void 0 : I.bio),
        T = L.ZP.getEnableHardwareAcceleration() ? f.AnimatedAvatar : f.Avatar;
    return (0, l.jsxs)('div', {
        className: Y.profile,
        children: [
            (0, l.jsx)(f.Heading, {
                variant: 'heading-md/semibold',
                color: 'header-primary',
                children: X.intl.string(X.t.diTbFx)
            }),
            (0, l.jsx)(f.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                children: X.intl.string(X.t['+8um3N'])
            }),
            (0, l.jsxs)('div', {
                className: Y.profileCard,
                children: [
                    (0, l.jsx)('div', {
                        ...c,
                        children: (0, l.jsx)(T, {
                            src: o,
                            avatarDecoration: m,
                            size: K,
                            'aria-label': i.username
                        })
                    }),
                    (0, l.jsx)(f.Text, {
                        variant: 'text-lg/medium',
                        color: 'header-primary',
                        className: Y.username,
                        children: null !== (n = null == p ? void 0 : p.nick) && void 0 !== n ? n : y.ZP.getName(i)
                    }),
                    (0, l.jsx)(f.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        className: r()(J.markup, Y.bio),
                        children: v
                    }),
                    null != b &&
                        b.length > 0 &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)('hr', { className: Y.separator }),
                                (0, l.jsx)(f.Text, {
                                    variant: 'text-xs/semibold',
                                    color: 'text-muted',
                                    className: Y.title,
                                    children: X.intl.string(X.t.LPJmLy)
                                }),
                                (0, l.jsx)('div', {
                                    className: Y.roles,
                                    children:
                                        null == b
                                            ? void 0
                                            : b.map((e) => {
                                                  var n;
                                                  return (0, l.jsxs)(
                                                      'div',
                                                      {
                                                          className: Y.role,
                                                          children: [
                                                              (0, l.jsx)(f.RoleCircle, {
                                                                  color: null !== (n = e.colorString) && void 0 !== n ? n : (0, d.Rf)(F.p6O),
                                                                  className: Y.roleDot
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
function en(e) {
    var n;
    let { prompt: t, guild: i } = e,
        [o, s] = a.useState(null),
        [d, m] = a.useState(new Set()),
        p = null == t ? void 0 : null === (n = t.options) || void 0 === n ? void 0 : n.filter((e) => d.has(e.id)),
        x = (0, R.L6)(p),
        C = (0, R.dX)(p),
        g = (0, u.Wu)([P.Z], () => P.Z.getOnboardingResponsesForPrompt(i.id, t.id)),
        { helpText: _, helpTextAdditional: I } = (0, D.p)({
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
        { handleSelectOption: N } = (0, M.Z)(i.id),
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
        E = t.options.filter((e) => g.includes(e.id)).map((e) => e.id);
    return (0, l.jsx)(l.Fragment, {
        children: (0, l.jsxs)(c.animated.div, {
            className: Y.prompt,
            style: { borderColor: Z.color },
            children: [
                t.isNew &&
                    (0, l.jsx)(f.TextBadge, {
                        color: (0, b.Lq)(F.Ilk.BRAND_260),
                        text: X.intl.string(X.t.y2b7CA),
                        className: Y.newBadge
                    }),
                (0, l.jsxs)(f.Heading, {
                    className: Y.promptTitle,
                    variant: 'heading-md/semibold',
                    color: 'header-primary',
                    children: [
                        t.title,
                        t.required
                            ? (0, l.jsx)('span', {
                                  className: r()(Y.required, { [Y.error]: (null == o ? void 0 : o.type) === $ }),
                                  children: '*'
                              })
                            : null
                    ]
                }),
                (0, l.jsx)(W.Z, {
                    options: j,
                    value: E,
                    onChange: (e) => {
                        let n = e.find((e) => !g.includes(e.id)),
                            l = e.map((e) => e.id);
                        if (null != n) N(t, n, !0), t.singleSelect && t.options.forEach((e) => d.delete(e.id)), d.add(n.id);
                        else {
                            let e = g.filter((e) => !l.includes(e)),
                                n = t.options.filter((n) => e.includes(n.id));
                            if (g.length <= n.length && t.required) {
                                s({ type: $ });
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
                    className: Y.helpText,
                    children: [_, ' ', I]
                })
            ]
        })
    });
}
function et(e) {
    var n;
    let { prompt: t, guild: i } = e,
        [o, s] = a.useState(null),
        [d, m] = a.useState(new Set()),
        p = null == t ? void 0 : null === (n = t.options) || void 0 === n ? void 0 : n.filter((e) => d.has(e.id)),
        x = (0, R.L6)(p),
        C = (0, R.dX)(p),
        g = (0, u.Wu)([P.Z], () => P.Z.getOnboardingResponsesForPrompt(i.id, t.id)),
        { helpText: _, helpTextAdditional: I } = (0, D.p)({
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
        { handleSelectOption: N } = (0, M.Z)(i.id),
        v = (e, n) => {
            if (!n && 1 === g.length && t.required) {
                s({ type: $ });
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
            className: Y.prompt,
            style: { borderColor: j.color },
            children: [
                t.isNew &&
                    (0, l.jsx)(f.TextBadge, {
                        color: (0, b.Lq)(F.Ilk.BRAND_260),
                        text: X.intl.string(X.t.y2b7CA),
                        className: Y.newBadge
                    }),
                (0, l.jsxs)(f.Heading, {
                    className: Y.promptTitle,
                    variant: 'heading-md/semibold',
                    color: 'header-primary',
                    children: [
                        t.title,
                        t.required
                            ? (0, l.jsx)('span', {
                                  className: r()(Y.required, { [Y.error]: (null == o ? void 0 : o.type) === $ }),
                                  children: '*'
                              })
                            : null
                    ]
                }),
                (0, l.jsx)('div', {
                    className: Y.promptOptions,
                    children: t.options.map((e) =>
                        (0, l.jsx)(
                            G.Z,
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
                    className: Y.helpText,
                    children: [_, ' ', I]
                })
            ]
        })
    });
}
function el(e) {
    let { guildId: n, onBrowseChannels: t } = e,
        i = (0, m.wj)((0, C.ZP)()),
        o = (0, u.e7)([S.Z], () => S.Z.getGuild(n)),
        s = (0, u.e7)([w.default], () => w.default.getCurrentUser()),
        c = (0, x.Z)('(min-width: 1344px)') && null != s,
        d = a.useCallback(() => {
            (0, v.uL)(F.Z5c.CHANNEL(n, q.oC.CHANNEL_BROWSER)), null == t || t();
        }, [n, t]),
        h = (0, u.e7)([T.ZP], () => T.ZP.hasUnread(n, V.W.GUILD_ONBOARDING_QUESTION)),
        { onboardingPromptsRaw: g, newOnboardingPrompts: _, onboardingPromptsWithNewAnswers: N, newAnswersCount: Z, onboardingPrompts: j } = (0, H.Z)(n);
    a.useEffect(() => {
        if ((null == o ? void 0 : o.id) != null) !I.Z.isFullServerPreview(o.id) && (P.Z.shouldFetchPrompts(o.id) || h) && (0, O.eM)(o.id);
    }, [null == o ? void 0 : o.id, h]),
        a.useEffect(() => {
            if ((null == o ? void 0 : o.id) != null) {
                if (!I.Z.isFullServerPreview(o.id))
                    return () => {
                        (0, p.Ju)(o.id, V.W.GUILD_ONBOARDING_QUESTION, P.Z.ackIdForGuild(o.id)), k.Z.updateOnboardingResponses(o.id);
                    };
            }
        }, [null == o ? void 0 : o.id]);
    let E = a.useCallback(
        (e) => {
            if (null == o) return null;
            switch (e.type) {
                case z.FN.MULTIPLE_CHOICE:
                    return (0, l.jsx)(
                        et,
                        {
                            prompt: e,
                            guild: o
                        },
                        e.id
                    );
                case z.FN.DROPDOWN:
                    return (0, l.jsx)(
                        en,
                        {
                            prompt: e,
                            guild: o
                        },
                        e.id
                    );
                default:
                    (0, A.vE)(e.type);
            }
        },
        [o]
    );
    if (null == o) return null;
    if (0 === g.length) {
        let e = (0, b.Lq)(i ? F.Ilk.PRIMARY_300 : F.Ilk.PRIMARY_500),
            n = (0, b.Lq)(i ? F.Ilk.PRIMARY_700 : F.Ilk.PRIMARY_230);
        return (0, l.jsx)('div', {
            className: r()(Q.content, Y.emptyPage),
            children: (0, l.jsxs)('div', {
                className: Y.emptyContainer,
                children: [
                    (0, l.jsx)(U.Z, {
                        className: Y.emptyIcon,
                        foregroundColor: e,
                        backgroundColor: n
                    }),
                    (0, l.jsx)(f.Heading, {
                        className: Y.emptyHeader,
                        variant: 'heading-md/semibold',
                        children: X.intl.string(X.t.leKHQ0)
                    }),
                    (0, l.jsx)(f.Text, {
                        variant: 'text-sm/medium',
                        children: X.intl.format(X.t['jH+ktL'], { onBrowseChannels: d })
                    })
                ]
            })
        });
    }
    return (0, l.jsxs)(f.AdvancedScroller, {
        className: Y.scroller,
        fade: !0,
        children: [
            (0, l.jsxs)('div', {
                className: Y.pageBody,
                children: [
                    (_.length > 0 || N.length > 0) &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)('div', {
                                    children: (0, l.jsx)(f.Heading, {
                                        variant: 'heading-md/semibold',
                                        color: 'header-primary',
                                        children: X.intl.format(X.t.iB5Gqa, { count: _.length + Z })
                                    })
                                }),
                                _.map(E),
                                N.map(E),
                                (0, l.jsx)('div', { className: Y.sectionSeparator })
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
                                            children: X.intl.format(X.t['8IV8Ky'], { count: j.length })
                                        }),
                                        (0, l.jsx)(f.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-muted',
                                            children: X.intl.string(X.t.Ecz7T0)
                                        })
                                    ]
                                }),
                                j.map(E)
                            ]
                        })
                ]
            }),
            c &&
                (0, l.jsx)(ee, {
                    guild: o,
                    user: s
                })
        ]
    });
}
