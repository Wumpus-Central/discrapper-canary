(n.d(t, { Z: () => en }), n(388685));
var l = n(255367),
    r = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(780384),
    c = n(481060),
    d = n(45114),
    u = n(131388),
    m = n(493773),
    h = n(410030),
    p = n(1585),
    f = n(125988),
    g = n(44315),
    x = n(160404),
    _ = n(240991),
    C = n(402235),
    b = n(703656),
    j = n(687158),
    v = n(287008),
    y = n(484459),
    O = n(271383),
    Z = n(485386),
    N = n(430824),
    I = n(306680),
    w = n(594174),
    P = n(823379),
    E = n(51144),
    S = n(998502),
    T = n(549817),
    A = n(745752),
    k = n(45966),
    B = n(637853),
    R = n(905204),
    D = n(968644),
    L = n(521941),
    M = n(614328),
    H = n(104265),
    U = n(588632),
    G = n(290511),
    W = n(981631),
    F = n(176505),
    q = n(490897),
    z = n(388032),
    X = n(273810),
    V = n(100658),
    J = n(73433);
function Q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                ((l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l));
            }));
    }
    return e;
}
let Y = c.EFr.SIZE_80,
    K = 'required';
function $(e) {
    var t, n, r;
    let { guild: i, user: s } = e,
        {
            avatarSrc: d,
            eventHandlers: u,
            isAvatarAnimating: h
        } = (0, v.Z)({
            user: s,
            guildId: i.id,
            size: 120
        }),
        { avatarDecorationSrc: g } = (0, f.Z)({
            user: s,
            size: (0, p.y9)(Y),
            onlyAnimateOnHover: !h
        }),
        x = (0, o.e7)([O.ZP], () => O.ZP.getSelfMember(i.id)),
        b = (0, o.Wu)([O.ZP], () => O.ZP.getMemberRoleWithPendingUpdates(i.id, s.id)),
        N = (0, o.e7)([Z.Z], () => Z.Z.getSortedRoles(i.id)),
        I = (0, C.ZP)(i.id, s.id),
        w = N.filter((e) => b.includes(e.id)),
        P = (0, j.ZP)(s.id, i.id);
    (0, m.ZP)(() => {
        (0, y.Z)(s.id, s.getAvatarURL(i.id, (0, c.pxk)(Y)), { guildId: i.id });
    });
    let T = (0, _.parseBioReact)(null == P ? void 0 : P.bio),
        A = S.ZP.getEnableHardwareAcceleration() ? c.Xo$ : c.qEK;
    return (0, l.jsxs)('div', {
        className: X.profile,
        children: [
            (0, l.jsx)(c.X6q, {
                variant: 'heading-md/semibold',
                color: 'header-primary',
                children: z.intl.string(z.t.diTbFx)
            }),
            (0, l.jsx)(c.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                children: z.intl.string(z.t['+8um3N'])
            }),
            (0, l.jsxs)('div', {
                className: X.profileCard,
                children: [
                    (0, l.jsx)(
                        'div',
                        ((n = Q({}, u)),
                        (r = r =
                            {
                                children: (0, l.jsx)(A, {
                                    src: d,
                                    avatarDecoration: g,
                                    size: Y,
                                    'aria-label': s.username
                                })
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var l = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, l);
                                  }
                                  return n;
                              })(Object(r)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                              }),
                        n)
                    ),
                    (0, l.jsx)(c.Text, {
                        variant: 'text-lg/medium',
                        color: 'header-primary',
                        className: X.username,
                        children: null != (t = null == x ? void 0 : x.nick) ? t : E.ZP.getName(s)
                    }),
                    (0, l.jsx)(c.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        className: a()(J.markup, X.bio),
                        children: T
                    }),
                    null != w &&
                        w.length > 0 &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)('hr', { className: X.separator }),
                                (0, l.jsx)(c.Text, {
                                    variant: 'text-xs/semibold',
                                    color: 'text-muted',
                                    className: X.title,
                                    children: z.intl.string(z.t.LPJmLy)
                                }),
                                (0, l.jsx)('div', {
                                    className: X.roles,
                                    children:
                                        null == w
                                            ? void 0
                                            : w.map((e) => {
                                                  var t;
                                                  return (0, l.jsxs)(
                                                      'div',
                                                      {
                                                          className: X.role,
                                                          children: [
                                                              (0, l.jsx)(c.xko, {
                                                                  color: null != (t = e.colorString) ? t : W.Pbq,
                                                                  colors: I ? e.colorStrings : null,
                                                                  className: X.roleDot
                                                              }),
                                                              (0, l.jsx)(c.Text, {
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
    var t;
    let { prompt: n, guild: i } = e,
        [s, d] = r.useState(null),
        [u, m] = r.useState(new Set()),
        h = null == n || null == (t = n.options) ? void 0 : t.filter((e) => u.has(e.id)),
        p = (0, B.L6)(h),
        f = (0, B.dX)(h),
        x = (0, o.Wu)([k.Z], () => k.Z.getOnboardingResponsesForPrompt(i.id, n.id)),
        { helpText: _, helpTextAdditional: C } = (0, D.p)({
            guild: i,
            prompt: n,
            selectedRoleIds: p,
            selectedChannelIds: f,
            itemHook: (e, t) =>
                (0, l.jsx)(
                    c.Text,
                    {
                        variant: 'text-xs/medium',
                        color: 'header-primary',
                        children: e
                    },
                    t
                )
        }),
        { handleSelectOption: b } = (0, R.Z)(i.id),
        j = n.options.map((e) => Q({ value: e.id }, e)),
        v = n.options.filter((e) => x.includes(e.id)).map((e) => e.id);
    return (0, l.jsxs)('div', {
        className: X.prompt,
        'data-new': n.isNew,
        children: [
            n.isNew &&
                (0, l.jsx)(c.IGR, {
                    color: (0, g.Lq)(W.Ilk.BRAND_260),
                    text: z.intl.string(z.t.y2b7CA),
                    className: X.newBadge
                }),
            (0, l.jsxs)(c.X6q, {
                className: X.promptTitle,
                variant: 'heading-md/semibold',
                color: 'header-primary',
                children: [
                    n.title,
                    n.required
                        ? (0, l.jsx)('span', {
                              className: a()(X.required, { [X.error]: (null == s ? void 0 : s.type) === K }),
                              children: '*'
                          })
                        : null
                ]
            }),
            (0, l.jsx)(U.Z, {
                options: j,
                value: v,
                onChange: (e) => {
                    let t = e.find((e) => !x.includes(e.id)),
                        l = e.map((e) => e.id);
                    if (null != t) (b(n, t, !0), n.singleSelect && n.options.forEach((e) => u.delete(e.id)), u.add(t.id));
                    else {
                        let e = x.filter((e) => !l.includes(e)),
                            t = n.options.filter((t) => e.includes(t.id));
                        if (x.length <= t.length && n.required) return void d({ type: K });
                        t.forEach((e) => {
                            (b(n, e, !1), u.delete(e.id));
                        });
                    }
                    (m(new Set(u)), d(null));
                },
                canBeNew: !n.isNew
            }),
            (0, l.jsxs)(c.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                className: X.helpText,
                children: [_, ' ', C]
            })
        ]
    });
}
function et(e) {
    var t;
    let { prompt: n, guild: i } = e,
        [s, d] = r.useState(null),
        [u, m] = r.useState(new Set()),
        h = null == n || null == (t = n.options) ? void 0 : t.filter((e) => u.has(e.id)),
        p = (0, B.L6)(h),
        f = (0, B.dX)(h),
        x = (0, o.Wu)([k.Z], () => k.Z.getOnboardingResponsesForPrompt(i.id, n.id)),
        { helpText: _, helpTextAdditional: C } = (0, D.p)({
            guild: i,
            prompt: n,
            selectedRoleIds: p,
            selectedChannelIds: f,
            itemHook: (e, t) =>
                (0, l.jsx)(
                    c.Text,
                    {
                        variant: 'text-xs/medium',
                        color: 'header-primary',
                        children: e
                    },
                    t
                )
        }),
        { handleSelectOption: b } = (0, R.Z)(i.id),
        j = (e, t) => {
            if (!t && 1 === x.length && n.required) return void d({ type: K });
            (b(n, e, null != t && t), n.singleSelect && t && n.options.forEach((e) => u.delete(e.id)), t ? u.add(e.id) : u.delete(e.id), m(new Set(u)), d(null));
        };
    return (0, l.jsxs)('div', {
        className: X.prompt,
        'data-new': n.isNew,
        children: [
            n.isNew &&
                (0, l.jsx)(c.IGR, {
                    color: (0, g.Lq)(W.Ilk.BRAND_260),
                    text: z.intl.string(z.t.y2b7CA),
                    className: X.newBadge
                }),
            (0, l.jsxs)(c.X6q, {
                className: X.promptTitle,
                variant: 'heading-md/semibold',
                color: 'header-primary',
                children: [
                    n.title,
                    n.required
                        ? (0, l.jsx)('span', {
                              className: a()(X.required, { [X.error]: (null == s ? void 0 : s.type) === K }),
                              children: '*'
                          })
                        : null
                ]
            }),
            (0, l.jsx)('div', {
                className: X.promptOptions,
                children: n.options.map((e) =>
                    (0, l.jsx)(
                        H.Z,
                        {
                            hideMemberCount: !0,
                            guildId: i.id,
                            option: e,
                            onSelect: (t) => j(e, t),
                            selected: x.includes(e.id),
                            canBeNew: !n.isNew
                        },
                        e.id
                    )
                )
            }),
            (0, l.jsxs)(c.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                className: X.helpText,
                children: [_, ' ', C]
            })
        ]
    });
}
function en(e) {
    let { guildId: t, onBrowseChannels: n } = e,
        i = (0, s.wj)((0, h.ZP)()),
        m = (0, o.e7)([N.Z], () => N.Z.getGuild(t)),
        p = (0, o.e7)([w.default], () => w.default.getCurrentUser()),
        f = (0, u.Z)('(min-width: 1344px)') && null != p,
        _ = r.useCallback(() => {
            ((0, b.uL)(W.Z5c.CHANNEL(t, F.oC.CHANNEL_BROWSER)), null == n || n());
        }, [t, n]),
        C = (0, o.e7)([I.ZP], () => I.ZP.hasUnread(t, q.W.GUILD_ONBOARDING_QUESTION)),
        { onboardingPromptsRaw: j, newOnboardingPrompts: v, onboardingPromptsWithNewAnswers: y, newAnswersCount: O, onboardingPrompts: Z } = (0, L.Z)(t);
    (r.useEffect(() => {
        (null == m ? void 0 : m.id) != null && !x.Z.isFullServerPreview(m.id) && (k.Z.shouldFetchPrompts(m.id) || C) && (0, A.eM)(m.id);
    }, [null == m ? void 0 : m.id, C]),
        r.useEffect(() => {
            if ((null == m ? void 0 : m.id) != null && !x.Z.isFullServerPreview(m.id))
                return () => {
                    ((0, d.Ju)(m.id, q.W.GUILD_ONBOARDING_QUESTION, k.Z.ackIdForGuild(m.id)), T.Z.updateOnboardingResponses(m.id));
                };
        }, [null == m ? void 0 : m.id]));
    let E = r.useCallback(
        (e) => {
            if (null == m) return null;
            switch (e.type) {
                case G.FN.MULTIPLE_CHOICE:
                    return (0, l.jsx)(
                        et,
                        {
                            prompt: e,
                            guild: m
                        },
                        e.id
                    );
                case G.FN.DROPDOWN:
                    return (0, l.jsx)(
                        ee,
                        {
                            prompt: e,
                            guild: m
                        },
                        e.id
                    );
                default:
                    (0, P.vE)(e.type);
            }
        },
        [m]
    );
    if (null == m) return null;
    if (0 === j.length) {
        let e = (0, g.Lq)(i ? W.Ilk.PRIMARY_300 : W.Ilk.PRIMARY_500),
            t = (0, g.Lq)(i ? W.Ilk.PRIMARY_700 : W.Ilk.PRIMARY_230);
        return (0, l.jsx)('div', {
            className: a()(V.content, X.emptyPage),
            children: (0, l.jsxs)('div', {
                className: X.emptyContainer,
                children: [
                    (0, l.jsx)(M.Z, {
                        className: X.emptyIcon,
                        foregroundColor: e,
                        backgroundColor: t
                    }),
                    (0, l.jsx)(c.X6q, {
                        className: X.emptyHeader,
                        variant: 'heading-md/semibold',
                        children: z.intl.string(z.t.leKHQ0)
                    }),
                    (0, l.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        children: z.intl.format(z.t['jH+ktL'], { onBrowseChannels: _ })
                    })
                ]
            })
        });
    }
    return (0, l.jsxs)(c.Den, {
        className: X.scroller,
        fade: !0,
        children: [
            (0, l.jsxs)('div', {
                className: X.pageBody,
                children: [
                    (v.length > 0 || y.length > 0) &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)('div', {
                                    children: (0, l.jsx)(c.X6q, {
                                        variant: 'heading-md/semibold',
                                        color: 'header-primary',
                                        children: z.intl.format(z.t.iB5Gqa, { count: v.length + O })
                                    })
                                }),
                                v.map(E),
                                y.map(E),
                                (0, l.jsx)('div', { className: X.sectionSeparator })
                            ]
                        }),
                    Z.length > 0 &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)('div', {
                                    children: [
                                        (0, l.jsx)(c.X6q, {
                                            variant: 'heading-md/semibold',
                                            color: 'header-primary',
                                            children: z.intl.format(z.t['8IV8Ky'], { count: Z.length })
                                        }),
                                        (0, l.jsx)(c.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-muted',
                                            children: z.intl.string(z.t.Ecz7T0)
                                        })
                                    ]
                                }),
                                Z.map(E)
                            ]
                        })
                ]
            }),
            f &&
                (0, l.jsx)($, {
                    guild: m,
                    user: p
                })
        ]
    });
}
