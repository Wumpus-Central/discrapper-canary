(n.d(t, { Z: () => ei }), n(388685));
var l = n(255367),
    r = n(73800),
    i = n(120356),
    a = n.n(i),
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
    j = n(160404),
    b = n(240991),
    v = n(402235),
    y = n(703656),
    O = n(687158),
    Z = n(287008),
    N = n(484459),
    I = n(271383),
    w = n(485386),
    P = n(430824),
    E = n(306680),
    S = n(594174),
    T = n(823379),
    A = n(51144),
    B = n(998502),
    k = n(549817),
    R = n(745752),
    D = n(45966),
    L = n(637853),
    M = n(905204),
    H = n(968644),
    U = n(521941),
    G = n(614328),
    W = n(104265),
    F = n(588632),
    q = n(290511),
    z = n(981631),
    X = n(176505),
    V = n(490897),
    J = n(388032),
    Q = n(273810),
    Y = n(100658),
    K = n(73433);
function $(e) {
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
let ee = m.EFr.SIZE_80,
    et = 'required';
function en(e) {
    var t, n, r;
    let { guild: i, user: o } = e,
        {
            avatarSrc: u,
            eventHandlers: h,
            isAvatarAnimating: p
        } = (0, Z.Z)({
            user: o,
            guildId: i.id,
            size: 120
        }),
        { avatarDecorationSrc: g } = (0, _.Z)({
            user: o,
            size: (0, x.y9)(ee),
            onlyAnimateOnHover: !p
        }),
        C = (0, d.e7)([I.ZP], () => I.ZP.getSelfMember(i.id)),
        j = (0, d.Wu)([I.ZP], () => I.ZP.getMemberRoleWithPendingUpdates(i.id, o.id)),
        y = (0, d.e7)([w.Z], () => w.Z.getRoles(i.id)),
        P = (0, v.ZP)(i.id, o.id),
        E = s()(j)
            .filter((e) => y.hasOwnProperty(e))
            .map((e) => y[e])
            .orderBy('position', 'desc')
            .value(),
        S = (0, O.ZP)(o.id, i.id);
    (0, f.ZP)(() => {
        (0, N.Z)(o.id, o.getAvatarURL(i.id, (0, m.pxk)(ee)), { guildId: i.id });
    });
    let T = (0, b.parseBioReact)(null == S ? void 0 : S.bio),
        k = B.ZP.getEnableHardwareAcceleration() ? m.Xo$ : m.qEK;
    return (0, l.jsxs)('div', {
        className: Q.profile,
        children: [
            (0, l.jsx)(m.X6q, {
                variant: 'heading-md/semibold',
                color: 'header-primary',
                children: J.intl.string(J.t.diTbFx)
            }),
            (0, l.jsx)(m.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                children: J.intl.string(J.t['+8um3N'])
            }),
            (0, l.jsxs)('div', {
                className: Q.profileCard,
                children: [
                    (0, l.jsx)(
                        'div',
                        ((n = $({}, h)),
                        (r = r =
                            {
                                children: (0, l.jsx)(k, {
                                    src: u,
                                    avatarDecoration: g,
                                    size: ee,
                                    'aria-label': o.username
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
                    (0, l.jsx)(m.Text, {
                        variant: 'text-lg/medium',
                        color: 'header-primary',
                        className: Q.username,
                        children: null != (t = null == C ? void 0 : C.nick) ? t : A.ZP.getName(o)
                    }),
                    (0, l.jsx)(m.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        className: a()(K.markup, Q.bio),
                        children: T
                    }),
                    null != E &&
                        E.length > 0 &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)('hr', { className: Q.separator }),
                                (0, l.jsx)(m.Text, {
                                    variant: 'text-xs/semibold',
                                    color: 'text-muted',
                                    className: Q.title,
                                    children: J.intl.string(J.t.LPJmLy)
                                }),
                                (0, l.jsx)('div', {
                                    className: Q.roles,
                                    children:
                                        null == E
                                            ? void 0
                                            : E.map((e) => {
                                                  var t;
                                                  return (0, l.jsxs)(
                                                      'div',
                                                      {
                                                          className: Q.role,
                                                          children: [
                                                              (0, l.jsx)(m.xko, {
                                                                  color: null != (t = e.colorString) ? t : (0, c.Rf)(z.p6O),
                                                                  colors: P ? e.colorStrings : null,
                                                                  className: Q.roleDot
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
function el(e) {
    var t;
    let { prompt: n, guild: i } = e,
        [o, s] = r.useState(null),
        [c, u] = r.useState(new Set()),
        h = null == n || null == (t = n.options) ? void 0 : t.filter((e) => c.has(e.id)),
        p = (0, L.L6)(h),
        f = (0, L.dX)(h),
        g = (0, d.Wu)([D.Z], () => D.Z.getOnboardingResponsesForPrompt(i.id, n.id)),
        { helpText: x, helpTextAdditional: _ } = (0, H.p)({
            guild: i,
            prompt: n,
            selectedRoleIds: p,
            selectedChannelIds: f,
            itemHook: (e, t) =>
                (0, l.jsx)(
                    m.Text,
                    {
                        variant: 'text-xs/medium',
                        color: 'header-primary',
                        children: e
                    },
                    t
                )
        }),
        { handleSelectOption: j } = (0, M.Z)(i.id),
        b = n.options.map((e) => $({ value: e.id }, e)),
        v = n.options.filter((e) => g.includes(e.id)).map((e) => e.id);
    return (0, l.jsxs)('div', {
        className: Q.prompt,
        'data-new': n.isNew,
        children: [
            n.isNew &&
                (0, l.jsx)(m.IGR, {
                    color: (0, C.Lq)(z.Ilk.BRAND_260),
                    text: J.intl.string(J.t.y2b7CA),
                    className: Q.newBadge
                }),
            (0, l.jsxs)(m.X6q, {
                className: Q.promptTitle,
                variant: 'heading-md/semibold',
                color: 'header-primary',
                children: [
                    n.title,
                    n.required
                        ? (0, l.jsx)('span', {
                              className: a()(Q.required, { [Q.error]: (null == o ? void 0 : o.type) === et }),
                              children: '*'
                          })
                        : null
                ]
            }),
            (0, l.jsx)(F.Z, {
                options: b,
                value: v,
                onChange: (e) => {
                    let t = e.find((e) => !g.includes(e.id)),
                        l = e.map((e) => e.id);
                    if (null != t) (j(n, t, !0), n.singleSelect && n.options.forEach((e) => c.delete(e.id)), c.add(t.id));
                    else {
                        let e = g.filter((e) => !l.includes(e)),
                            t = n.options.filter((t) => e.includes(t.id));
                        if (g.length <= t.length && n.required) return void s({ type: et });
                        t.forEach((e) => {
                            (j(n, e, !1), c.delete(e.id));
                        });
                    }
                    (u(new Set(c)), s(null));
                },
                canBeNew: !n.isNew
            }),
            (0, l.jsxs)(m.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                className: Q.helpText,
                children: [x, ' ', _]
            })
        ]
    });
}
function er(e) {
    var t;
    let { prompt: n, guild: i } = e,
        [o, s] = r.useState(null),
        [c, u] = r.useState(new Set()),
        h = null == n || null == (t = n.options) ? void 0 : t.filter((e) => c.has(e.id)),
        p = (0, L.L6)(h),
        f = (0, L.dX)(h),
        g = (0, d.Wu)([D.Z], () => D.Z.getOnboardingResponsesForPrompt(i.id, n.id)),
        { helpText: x, helpTextAdditional: _ } = (0, H.p)({
            guild: i,
            prompt: n,
            selectedRoleIds: p,
            selectedChannelIds: f,
            itemHook: (e, t) =>
                (0, l.jsx)(
                    m.Text,
                    {
                        variant: 'text-xs/medium',
                        color: 'header-primary',
                        children: e
                    },
                    t
                )
        }),
        { handleSelectOption: j } = (0, M.Z)(i.id),
        b = (e, t) => {
            if (!t && 1 === g.length && n.required) return void s({ type: et });
            (j(n, e, null != t && t), n.singleSelect && t && n.options.forEach((e) => c.delete(e.id)), t ? c.add(e.id) : c.delete(e.id), u(new Set(c)), s(null));
        };
    return (0, l.jsxs)('div', {
        className: Q.prompt,
        'data-new': n.isNew,
        children: [
            n.isNew &&
                (0, l.jsx)(m.IGR, {
                    color: (0, C.Lq)(z.Ilk.BRAND_260),
                    text: J.intl.string(J.t.y2b7CA),
                    className: Q.newBadge
                }),
            (0, l.jsxs)(m.X6q, {
                className: Q.promptTitle,
                variant: 'heading-md/semibold',
                color: 'header-primary',
                children: [
                    n.title,
                    n.required
                        ? (0, l.jsx)('span', {
                              className: a()(Q.required, { [Q.error]: (null == o ? void 0 : o.type) === et }),
                              children: '*'
                          })
                        : null
                ]
            }),
            (0, l.jsx)('div', {
                className: Q.promptOptions,
                children: n.options.map((e) =>
                    (0, l.jsx)(
                        W.Z,
                        {
                            hideMemberCount: !0,
                            guildId: i.id,
                            option: e,
                            onSelect: (t) => b(e, t),
                            selected: g.includes(e.id),
                            canBeNew: !n.isNew
                        },
                        e.id
                    )
                )
            }),
            (0, l.jsxs)(m.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                className: Q.helpText,
                children: [x, ' ', _]
            })
        ]
    });
}
function ei(e) {
    let { guildId: t, onBrowseChannels: n } = e,
        i = (0, u.wj)((0, g.ZP)()),
        o = (0, d.e7)([P.Z], () => P.Z.getGuild(t)),
        s = (0, d.e7)([S.default], () => S.default.getCurrentUser()),
        c = (0, p.Z)('(min-width: 1344px)') && null != s,
        f = r.useCallback(() => {
            ((0, y.uL)(z.Z5c.CHANNEL(t, X.oC.CHANNEL_BROWSER)), null == n || n());
        }, [t, n]),
        x = (0, d.e7)([E.ZP], () => E.ZP.hasUnread(t, V.W.GUILD_ONBOARDING_QUESTION)),
        { onboardingPromptsRaw: _, newOnboardingPrompts: b, onboardingPromptsWithNewAnswers: v, newAnswersCount: O, onboardingPrompts: Z } = (0, U.Z)(t);
    (r.useEffect(() => {
        (null == o ? void 0 : o.id) != null && !j.Z.isFullServerPreview(o.id) && (D.Z.shouldFetchPrompts(o.id) || x) && (0, R.eM)(o.id);
    }, [null == o ? void 0 : o.id, x]),
        r.useEffect(() => {
            if ((null == o ? void 0 : o.id) != null && !j.Z.isFullServerPreview(o.id))
                return () => {
                    ((0, h.Ju)(o.id, V.W.GUILD_ONBOARDING_QUESTION, D.Z.ackIdForGuild(o.id)), k.Z.updateOnboardingResponses(o.id));
                };
        }, [null == o ? void 0 : o.id]));
    let N = r.useCallback(
        (e) => {
            if (null == o) return null;
            switch (e.type) {
                case q.FN.MULTIPLE_CHOICE:
                    return (0, l.jsx)(
                        er,
                        {
                            prompt: e,
                            guild: o
                        },
                        e.id
                    );
                case q.FN.DROPDOWN:
                    return (0, l.jsx)(
                        el,
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
    if (0 === _.length) {
        let e = (0, C.Lq)(i ? z.Ilk.PRIMARY_300 : z.Ilk.PRIMARY_500),
            t = (0, C.Lq)(i ? z.Ilk.PRIMARY_700 : z.Ilk.PRIMARY_230);
        return (0, l.jsx)('div', {
            className: a()(Y.content, Q.emptyPage),
            children: (0, l.jsxs)('div', {
                className: Q.emptyContainer,
                children: [
                    (0, l.jsx)(G.Z, {
                        className: Q.emptyIcon,
                        foregroundColor: e,
                        backgroundColor: t
                    }),
                    (0, l.jsx)(m.X6q, {
                        className: Q.emptyHeader,
                        variant: 'heading-md/semibold',
                        children: J.intl.string(J.t.leKHQ0)
                    }),
                    (0, l.jsx)(m.Text, {
                        variant: 'text-sm/medium',
                        children: J.intl.format(J.t['jH+ktL'], { onBrowseChannels: f })
                    })
                ]
            })
        });
    }
    return (0, l.jsxs)(m.Den, {
        className: Q.scroller,
        fade: !0,
        children: [
            (0, l.jsxs)('div', {
                className: Q.pageBody,
                children: [
                    (b.length > 0 || v.length > 0) &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)('div', {
                                    children: (0, l.jsx)(m.X6q, {
                                        variant: 'heading-md/semibold',
                                        color: 'header-primary',
                                        children: J.intl.format(J.t.iB5Gqa, { count: b.length + O })
                                    })
                                }),
                                b.map(N),
                                v.map(N),
                                (0, l.jsx)('div', { className: Q.sectionSeparator })
                            ]
                        }),
                    Z.length > 0 &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)('div', {
                                    children: [
                                        (0, l.jsx)(m.X6q, {
                                            variant: 'heading-md/semibold',
                                            color: 'header-primary',
                                            children: J.intl.format(J.t['8IV8Ky'], { count: Z.length })
                                        }),
                                        (0, l.jsx)(m.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-muted',
                                            children: J.intl.string(J.t.Ecz7T0)
                                        })
                                    ]
                                }),
                                Z.map(N)
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
