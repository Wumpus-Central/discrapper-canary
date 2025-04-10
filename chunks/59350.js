n.d(t, { Z: () => el }), n(388685);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    i = n.n(a),
    o = n(392711),
    s = n.n(o),
    c = n(866442),
    d = n(442837),
    u = n(780384),
    m = n(481060),
    h = n(45114),
    p = n(131388),
    f = n(493773),
    g = n(410030),
    x = n(1585),
    _ = n(125988),
    C = n(44315),
    b = n(160404),
    j = n(240991),
    N = n(181918),
    v = n(703656),
    y = n(687158),
    O = n(287008),
    I = n(484459),
    Z = n(271383),
    w = n(430824),
    P = n(306680),
    E = n(594174),
    S = n(823379),
    k = n(51144),
    T = n(998502),
    B = n(549817),
    A = n(745752),
    R = n(45966),
    D = n(637853),
    W = n(905204),
    L = n(968644),
    M = n(521941),
    H = n(614328),
    U = n(104265),
    G = n(588632),
    F = n(290511),
    z = n(981631),
    q = n(176505),
    X = n(490897),
    V = n(388032),
    J = n(273810),
    Y = n(100658),
    K = n(73433);
function Q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let $ = m.EFr.SIZE_80,
    ee = 'required';
function et(e) {
    var t, n, l;
    let { guild: a, user: o } = e,
        {
            avatarSrc: u,
            eventHandlers: h,
            isAvatarAnimating: p
        } = (0, O.Z)({
            user: o,
            guildId: a.id,
            size: 120
        }),
        { avatarDecorationSrc: g } = (0, _.Z)({
            user: o,
            size: (0, x.y9)($),
            onlyAnimateOnHover: !p
        }),
        C = (0, d.e7)([Z.ZP], () => Z.ZP.getSelfMember(a.id)),
        b = (0, d.Wu)([Z.ZP], () => Z.ZP.getMemberRoleWithPendingUpdates(a.id, o.id)),
        v = (0, d.e7)([w.Z], () => w.Z.getRoles(a.id)),
        P = (0, N.$V)(a.id, 'UserProfile'),
        E = s()(b)
            .filter((e) => v.hasOwnProperty(e))
            .map((e) => v[e])
            .orderBy('position', 'desc')
            .value(),
        S = (0, y.ZP)(o.id, a.id);
    (0, f.ZP)(() => {
        (0, I.Z)(o.id, o.getAvatarURL(a.id, (0, m.pxk)($)), { guildId: a.id });
    });
    let B = (0, j.parseBioReact)(null == S ? void 0 : S.bio),
        A = T.ZP.getEnableHardwareAcceleration() ? m.Xo$ : m.qEK;
    return (0, r.jsxs)('div', {
        className: J.profile,
        children: [
            (0, r.jsx)(m.X6q, {
                variant: 'heading-md/semibold',
                color: 'header-primary',
                children: V.NW.string(V.t.diTbFx)
            }),
            (0, r.jsx)(m.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                children: V.NW.string(V.t['+8um3N'])
            }),
            (0, r.jsxs)('div', {
                className: J.profileCard,
                children: [
                    (0, r.jsx)(
                        'div',
                        ((n = Q({}, h)),
                        (l = l =
                            {
                                children: (0, r.jsx)(A, {
                                    src: u,
                                    avatarDecoration: g,
                                    size: $,
                                    'aria-label': o.username
                                })
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        n)
                    ),
                    (0, r.jsx)(m.Text, {
                        variant: 'text-lg/medium',
                        color: 'header-primary',
                        className: J.username,
                        children: null != (t = null == C ? void 0 : C.nick) ? t : k.ZP.getName(o)
                    }),
                    (0, r.jsx)(m.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        className: i()(K.markup, J.bio),
                        children: B
                    }),
                    null != E &&
                        E.length > 0 &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)('hr', { className: J.separator }),
                                (0, r.jsx)(m.Text, {
                                    variant: 'text-xs/semibold',
                                    color: 'text-muted',
                                    className: J.title,
                                    children: V.NW.string(V.t.LPJmLy)
                                }),
                                (0, r.jsx)('div', {
                                    className: J.roles,
                                    children:
                                        null == E
                                            ? void 0
                                            : E.map((e) => {
                                                  var t;
                                                  return (0, r.jsxs)(
                                                      'div',
                                                      {
                                                          className: J.role,
                                                          children: [
                                                              (0, r.jsx)(m.xko, {
                                                                  color: null != (t = e.colorString) ? t : (0, c.Rf)(z.p6O),
                                                                  colors: P ? e.colorStrings : null,
                                                                  className: J.roleDot
                                                              }),
                                                              (0, r.jsx)(m.Text, {
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
    var t;
    let { prompt: n, guild: a } = e,
        [o, s] = l.useState(null),
        [c, u] = l.useState(new Set()),
        h = null == n || null == (t = n.options) ? void 0 : t.filter((e) => c.has(e.id)),
        p = (0, D.L6)(h),
        f = (0, D.dX)(h),
        g = (0, d.Wu)([R.Z], () => R.Z.getOnboardingResponsesForPrompt(a.id, n.id)),
        { helpText: x, helpTextAdditional: _ } = (0, L.p)({
            guild: a,
            prompt: n,
            selectedRoleIds: p,
            selectedChannelIds: f,
            itemHook: (e, t) =>
                (0, r.jsx)(
                    m.Text,
                    {
                        variant: 'text-xs/medium',
                        color: 'header-primary',
                        children: e
                    },
                    t
                )
        }),
        { handleSelectOption: b } = (0, W.Z)(a.id),
        j = n.options.map((e) => Q({ value: e.id }, e)),
        N = n.options.filter((e) => g.includes(e.id)).map((e) => e.id);
    return (0, r.jsxs)('div', {
        className: J.prompt,
        'data-new': n.isNew,
        children: [
            n.isNew &&
                (0, r.jsx)(m.IGR, {
                    color: (0, C.Lq)(z.Ilk.BRAND_260),
                    text: V.NW.string(V.t.y2b7CA),
                    className: J.newBadge
                }),
            (0, r.jsxs)(m.X6q, {
                className: J.promptTitle,
                variant: 'heading-md/semibold',
                color: 'header-primary',
                children: [
                    n.title,
                    n.required
                        ? (0, r.jsx)('span', {
                              className: i()(J.required, { [J.error]: (null == o ? void 0 : o.type) === ee }),
                              children: '*'
                          })
                        : null
                ]
            }),
            (0, r.jsx)(G.Z, {
                options: j,
                value: N,
                onChange: (e) => {
                    let t = e.find((e) => !g.includes(e.id)),
                        r = e.map((e) => e.id);
                    if (null != t) b(n, t, !0), n.singleSelect && n.options.forEach((e) => c.delete(e.id)), c.add(t.id);
                    else {
                        let e = g.filter((e) => !r.includes(e)),
                            t = n.options.filter((t) => e.includes(t.id));
                        if (g.length <= t.length && n.required) return void s({ type: ee });
                        t.forEach((e) => {
                            b(n, e, !1), c.delete(e.id);
                        });
                    }
                    u(new Set(c)), s(null);
                },
                canBeNew: !n.isNew
            }),
            (0, r.jsxs)(m.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                className: J.helpText,
                children: [x, ' ', _]
            })
        ]
    });
}
function er(e) {
    var t;
    let { prompt: n, guild: a } = e,
        [o, s] = l.useState(null),
        [c, u] = l.useState(new Set()),
        h = null == n || null == (t = n.options) ? void 0 : t.filter((e) => c.has(e.id)),
        p = (0, D.L6)(h),
        f = (0, D.dX)(h),
        g = (0, d.Wu)([R.Z], () => R.Z.getOnboardingResponsesForPrompt(a.id, n.id)),
        { helpText: x, helpTextAdditional: _ } = (0, L.p)({
            guild: a,
            prompt: n,
            selectedRoleIds: p,
            selectedChannelIds: f,
            itemHook: (e, t) =>
                (0, r.jsx)(
                    m.Text,
                    {
                        variant: 'text-xs/medium',
                        color: 'header-primary',
                        children: e
                    },
                    t
                )
        }),
        { handleSelectOption: b } = (0, W.Z)(a.id),
        j = (e, t) => {
            if (!t && 1 === g.length && n.required) return void s({ type: ee });
            b(n, e, null != t && t), n.singleSelect && t && n.options.forEach((e) => c.delete(e.id)), t ? c.add(e.id) : c.delete(e.id), u(new Set(c)), s(null);
        };
    return (0, r.jsxs)('div', {
        className: J.prompt,
        'data-new': n.isNew,
        children: [
            n.isNew &&
                (0, r.jsx)(m.IGR, {
                    color: (0, C.Lq)(z.Ilk.BRAND_260),
                    text: V.NW.string(V.t.y2b7CA),
                    className: J.newBadge
                }),
            (0, r.jsxs)(m.X6q, {
                className: J.promptTitle,
                variant: 'heading-md/semibold',
                color: 'header-primary',
                children: [
                    n.title,
                    n.required
                        ? (0, r.jsx)('span', {
                              className: i()(J.required, { [J.error]: (null == o ? void 0 : o.type) === ee }),
                              children: '*'
                          })
                        : null
                ]
            }),
            (0, r.jsx)('div', {
                className: J.promptOptions,
                children: n.options.map((e) =>
                    (0, r.jsx)(
                        U.Z,
                        {
                            hideMemberCount: !0,
                            guildId: a.id,
                            option: e,
                            onSelect: (t) => j(e, t),
                            selected: g.includes(e.id),
                            canBeNew: !n.isNew
                        },
                        e.id
                    )
                )
            }),
            (0, r.jsxs)(m.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                className: J.helpText,
                children: [x, ' ', _]
            })
        ]
    });
}
function el(e) {
    let { guildId: t, onBrowseChannels: n } = e,
        a = (0, u.wj)((0, g.ZP)()),
        o = (0, d.e7)([w.Z], () => w.Z.getGuild(t)),
        s = (0, d.e7)([E.default], () => E.default.getCurrentUser()),
        c = (0, p.Z)('(min-width: 1344px)') && null != s,
        f = l.useCallback(() => {
            (0, v.uL)(z.Z5c.CHANNEL(t, q.oC.CHANNEL_BROWSER)), null == n || n();
        }, [t, n]),
        x = (0, d.e7)([P.ZP], () => P.ZP.hasUnread(t, X.W.GUILD_ONBOARDING_QUESTION)),
        { onboardingPromptsRaw: _, newOnboardingPrompts: j, onboardingPromptsWithNewAnswers: N, newAnswersCount: y, onboardingPrompts: O } = (0, M.Z)(t);
    l.useEffect(() => {
        (null == o ? void 0 : o.id) != null && !b.Z.isFullServerPreview(o.id) && (R.Z.shouldFetchPrompts(o.id) || x) && (0, A.eM)(o.id);
    }, [null == o ? void 0 : o.id, x]),
        l.useEffect(() => {
            if ((null == o ? void 0 : o.id) != null && !b.Z.isFullServerPreview(o.id))
                return () => {
                    (0, h.Ju)(o.id, X.W.GUILD_ONBOARDING_QUESTION, R.Z.ackIdForGuild(o.id)), B.Z.updateOnboardingResponses(o.id);
                };
        }, [null == o ? void 0 : o.id]);
    let I = l.useCallback(
        (e) => {
            if (null == o) return null;
            switch (e.type) {
                case F.FN.MULTIPLE_CHOICE:
                    return (0, r.jsx)(
                        er,
                        {
                            prompt: e,
                            guild: o
                        },
                        e.id
                    );
                case F.FN.DROPDOWN:
                    return (0, r.jsx)(
                        en,
                        {
                            prompt: e,
                            guild: o
                        },
                        e.id
                    );
                default:
                    (0, S.vE)(e.type);
            }
        },
        [o]
    );
    if (null == o) return null;
    if (0 === _.length) {
        let e = (0, C.Lq)(a ? z.Ilk.PRIMARY_300 : z.Ilk.PRIMARY_500),
            t = (0, C.Lq)(a ? z.Ilk.PRIMARY_700 : z.Ilk.PRIMARY_230);
        return (0, r.jsx)('div', {
            className: i()(Y.content, J.emptyPage),
            children: (0, r.jsxs)('div', {
                className: J.emptyContainer,
                children: [
                    (0, r.jsx)(H.Z, {
                        className: J.emptyIcon,
                        foregroundColor: e,
                        backgroundColor: t
                    }),
                    (0, r.jsx)(m.X6q, {
                        className: J.emptyHeader,
                        variant: 'heading-md/semibold',
                        children: V.NW.string(V.t.leKHQ0)
                    }),
                    (0, r.jsx)(m.Text, {
                        variant: 'text-sm/medium',
                        children: V.NW.format(V.t['jH+ktL'], { onBrowseChannels: f })
                    })
                ]
            })
        });
    }
    return (0, r.jsxs)(m.Den, {
        className: J.scroller,
        fade: !0,
        children: [
            (0, r.jsxs)('div', {
                className: J.pageBody,
                children: [
                    (j.length > 0 || N.length > 0) &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)('div', {
                                    children: (0, r.jsx)(m.X6q, {
                                        variant: 'heading-md/semibold',
                                        color: 'header-primary',
                                        children: V.NW.format(V.t.iB5Gqa, { count: j.length + y })
                                    })
                                }),
                                j.map(I),
                                N.map(I),
                                (0, r.jsx)('div', { className: J.sectionSeparator })
                            ]
                        }),
                    O.length > 0 &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)('div', {
                                    children: [
                                        (0, r.jsx)(m.X6q, {
                                            variant: 'heading-md/semibold',
                                            color: 'header-primary',
                                            children: V.NW.format(V.t['8IV8Ky'], { count: O.length })
                                        }),
                                        (0, r.jsx)(m.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-muted',
                                            children: V.NW.string(V.t.Ecz7T0)
                                        })
                                    ]
                                }),
                                O.map(I)
                            ]
                        })
                ]
            }),
            c &&
                (0, r.jsx)(et, {
                    guild: o,
                    user: s
                })
        ]
    });
}
