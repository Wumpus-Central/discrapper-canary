t.d(n, { Z: () => er }), t(388685);
var l = t(255367),
    r = t(73800),
    i = t(120356),
    a = t.n(i),
    o = t(392711),
    s = t.n(o),
    c = t(866442),
    d = t(442837),
    u = t(780384),
    m = t(481060),
    h = t(45114),
    p = t(131388),
    f = t(493773),
    g = t(410030),
    x = t(1585),
    _ = t(125988),
    C = t(44315),
    j = t(160404),
    b = t(240991),
    v = t(181918),
    y = t(703656),
    O = t(687158),
    I = t(287008),
    N = t(484459),
    Z = t(271383),
    w = t(430824),
    P = t(306680),
    E = t(594174),
    S = t(823379),
    T = t(51144),
    B = t(998502),
    k = t(549817),
    A = t(745752),
    R = t(45966),
    D = t(637853),
    L = t(905204),
    M = t(968644),
    H = t(521941),
    U = t(614328),
    G = t(104265),
    W = t(588632),
    F = t(290511),
    z = t(981631),
    q = t(176505),
    X = t(490897),
    V = t(388032),
    J = t(273810),
    Y = t(100658),
    K = t(73433);
function Q(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            l.forEach(function (n) {
                var l;
                (l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = l);
            });
    }
    return e;
}
let $ = m.EFr.SIZE_80,
    ee = 'required';
function en(e) {
    var n, t, r;
    let { guild: i, user: o } = e,
        {
            avatarSrc: u,
            eventHandlers: h,
            isAvatarAnimating: p
        } = (0, I.Z)({
            user: o,
            guildId: i.id,
            size: 120
        }),
        { avatarDecorationSrc: g } = (0, _.Z)({
            user: o,
            size: (0, x.y9)($),
            onlyAnimateOnHover: !p
        }),
        C = (0, d.e7)([Z.ZP], () => Z.ZP.getSelfMember(i.id)),
        j = (0, d.Wu)([Z.ZP], () => Z.ZP.getMemberRoleWithPendingUpdates(i.id, o.id)),
        y = (0, d.e7)([w.Z], () => w.Z.getRoles(i.id)),
        P = (0, v.$V)(i.id, 'UserProfile'),
        E = s()(j)
            .filter((e) => y.hasOwnProperty(e))
            .map((e) => y[e])
            .orderBy('position', 'desc')
            .value(),
        S = (0, O.ZP)(o.id, i.id);
    (0, f.ZP)(() => {
        (0, N.Z)(o.id, o.getAvatarURL(i.id, (0, m.pxk)($)), { guildId: i.id });
    });
    let k = (0, b.parseBioReact)(null == S ? void 0 : S.bio),
        A = B.ZP.getEnableHardwareAcceleration() ? m.Xo$ : m.qEK;
    return (0, l.jsxs)('div', {
        className: J.profile,
        children: [
            (0, l.jsx)(m.X6q, {
                variant: 'heading-md/semibold',
                color: 'header-primary',
                children: V.intl.string(V.t.diTbFx)
            }),
            (0, l.jsx)(m.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                children: V.intl.string(V.t['+8um3N'])
            }),
            (0, l.jsxs)('div', {
                className: J.profileCard,
                children: [
                    (0, l.jsx)(
                        'div',
                        ((t = Q({}, h)),
                        (r = r =
                            {
                                children: (0, l.jsx)(A, {
                                    src: u,
                                    avatarDecoration: g,
                                    size: $,
                                    'aria-label': o.username
                                })
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                            : (function (e, n) {
                                  var t = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var l = Object.getOwnPropertySymbols(e);
                                      t.push.apply(t, l);
                                  }
                                  return t;
                              })(Object(r)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                              }),
                        t)
                    ),
                    (0, l.jsx)(m.Text, {
                        variant: 'text-lg/medium',
                        color: 'header-primary',
                        className: J.username,
                        children: null != (n = null == C ? void 0 : C.nick) ? n : T.ZP.getName(o)
                    }),
                    (0, l.jsx)(m.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        className: a()(K.markup, J.bio),
                        children: k
                    }),
                    null != E &&
                        E.length > 0 &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)('hr', { className: J.separator }),
                                (0, l.jsx)(m.Text, {
                                    variant: 'text-xs/semibold',
                                    color: 'text-muted',
                                    className: J.title,
                                    children: V.intl.string(V.t.LPJmLy)
                                }),
                                (0, l.jsx)('div', {
                                    className: J.roles,
                                    children:
                                        null == E
                                            ? void 0
                                            : E.map((e) => {
                                                  var n;
                                                  return (0, l.jsxs)(
                                                      'div',
                                                      {
                                                          className: J.role,
                                                          children: [
                                                              (0, l.jsx)(m.xko, {
                                                                  color: null != (n = e.colorString) ? n : (0, c.Rf)(z.p6O),
                                                                  colors: P ? e.colorStrings : null,
                                                                  className: J.roleDot
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
function et(e) {
    var n;
    let { prompt: t, guild: i } = e,
        [o, s] = r.useState(null),
        [c, u] = r.useState(new Set()),
        h = null == t || null == (n = t.options) ? void 0 : n.filter((e) => c.has(e.id)),
        p = (0, D.L6)(h),
        f = (0, D.dX)(h),
        g = (0, d.Wu)([R.Z], () => R.Z.getOnboardingResponsesForPrompt(i.id, t.id)),
        { helpText: x, helpTextAdditional: _ } = (0, M.p)({
            guild: i,
            prompt: t,
            selectedRoleIds: p,
            selectedChannelIds: f,
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
        { handleSelectOption: j } = (0, L.Z)(i.id),
        b = t.options.map((e) => Q({ value: e.id }, e)),
        v = t.options.filter((e) => g.includes(e.id)).map((e) => e.id);
    return (0, l.jsxs)('div', {
        className: J.prompt,
        'data-new': t.isNew,
        children: [
            t.isNew &&
                (0, l.jsx)(m.IGR, {
                    color: (0, C.Lq)(z.Ilk.BRAND_260),
                    text: V.intl.string(V.t.y2b7CA),
                    className: J.newBadge
                }),
            (0, l.jsxs)(m.X6q, {
                className: J.promptTitle,
                variant: 'heading-md/semibold',
                color: 'header-primary',
                children: [
                    t.title,
                    t.required
                        ? (0, l.jsx)('span', {
                              className: a()(J.required, { [J.error]: (null == o ? void 0 : o.type) === ee }),
                              children: '*'
                          })
                        : null
                ]
            }),
            (0, l.jsx)(W.Z, {
                options: b,
                value: v,
                onChange: (e) => {
                    let n = e.find((e) => !g.includes(e.id)),
                        l = e.map((e) => e.id);
                    if (null != n) j(t, n, !0), t.singleSelect && t.options.forEach((e) => c.delete(e.id)), c.add(n.id);
                    else {
                        let e = g.filter((e) => !l.includes(e)),
                            n = t.options.filter((n) => e.includes(n.id));
                        if (g.length <= n.length && t.required) return void s({ type: ee });
                        n.forEach((e) => {
                            j(t, e, !1), c.delete(e.id);
                        });
                    }
                    u(new Set(c)), s(null);
                },
                canBeNew: !t.isNew
            }),
            (0, l.jsxs)(m.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                className: J.helpText,
                children: [x, ' ', _]
            })
        ]
    });
}
function el(e) {
    var n;
    let { prompt: t, guild: i } = e,
        [o, s] = r.useState(null),
        [c, u] = r.useState(new Set()),
        h = null == t || null == (n = t.options) ? void 0 : n.filter((e) => c.has(e.id)),
        p = (0, D.L6)(h),
        f = (0, D.dX)(h),
        g = (0, d.Wu)([R.Z], () => R.Z.getOnboardingResponsesForPrompt(i.id, t.id)),
        { helpText: x, helpTextAdditional: _ } = (0, M.p)({
            guild: i,
            prompt: t,
            selectedRoleIds: p,
            selectedChannelIds: f,
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
        { handleSelectOption: j } = (0, L.Z)(i.id),
        b = (e, n) => {
            if (!n && 1 === g.length && t.required) return void s({ type: ee });
            j(t, e, null != n && n), t.singleSelect && n && t.options.forEach((e) => c.delete(e.id)), n ? c.add(e.id) : c.delete(e.id), u(new Set(c)), s(null);
        };
    return (0, l.jsxs)('div', {
        className: J.prompt,
        'data-new': t.isNew,
        children: [
            t.isNew &&
                (0, l.jsx)(m.IGR, {
                    color: (0, C.Lq)(z.Ilk.BRAND_260),
                    text: V.intl.string(V.t.y2b7CA),
                    className: J.newBadge
                }),
            (0, l.jsxs)(m.X6q, {
                className: J.promptTitle,
                variant: 'heading-md/semibold',
                color: 'header-primary',
                children: [
                    t.title,
                    t.required
                        ? (0, l.jsx)('span', {
                              className: a()(J.required, { [J.error]: (null == o ? void 0 : o.type) === ee }),
                              children: '*'
                          })
                        : null
                ]
            }),
            (0, l.jsx)('div', {
                className: J.promptOptions,
                children: t.options.map((e) =>
                    (0, l.jsx)(
                        G.Z,
                        {
                            hideMemberCount: !0,
                            guildId: i.id,
                            option: e,
                            onSelect: (n) => b(e, n),
                            selected: g.includes(e.id),
                            canBeNew: !t.isNew
                        },
                        e.id
                    )
                )
            }),
            (0, l.jsxs)(m.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                className: J.helpText,
                children: [x, ' ', _]
            })
        ]
    });
}
function er(e) {
    let { guildId: n, onBrowseChannels: t } = e,
        i = (0, u.wj)((0, g.ZP)()),
        o = (0, d.e7)([w.Z], () => w.Z.getGuild(n)),
        s = (0, d.e7)([E.default], () => E.default.getCurrentUser()),
        c = (0, p.Z)('(min-width: 1344px)') && null != s,
        f = r.useCallback(() => {
            (0, y.uL)(z.Z5c.CHANNEL(n, q.oC.CHANNEL_BROWSER)), null == t || t();
        }, [n, t]),
        x = (0, d.e7)([P.ZP], () => P.ZP.hasUnread(n, X.W.GUILD_ONBOARDING_QUESTION)),
        { onboardingPromptsRaw: _, newOnboardingPrompts: b, onboardingPromptsWithNewAnswers: v, newAnswersCount: O, onboardingPrompts: I } = (0, H.Z)(n);
    r.useEffect(() => {
        (null == o ? void 0 : o.id) != null && !j.Z.isFullServerPreview(o.id) && (R.Z.shouldFetchPrompts(o.id) || x) && (0, A.eM)(o.id);
    }, [null == o ? void 0 : o.id, x]),
        r.useEffect(() => {
            if ((null == o ? void 0 : o.id) != null && !j.Z.isFullServerPreview(o.id))
                return () => {
                    (0, h.Ju)(o.id, X.W.GUILD_ONBOARDING_QUESTION, R.Z.ackIdForGuild(o.id)), k.Z.updateOnboardingResponses(o.id);
                };
        }, [null == o ? void 0 : o.id]);
    let N = r.useCallback(
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
                    (0, S.vE)(e.type);
            }
        },
        [o]
    );
    if (null == o) return null;
    if (0 === _.length) {
        let e = (0, C.Lq)(i ? z.Ilk.PRIMARY_300 : z.Ilk.PRIMARY_500),
            n = (0, C.Lq)(i ? z.Ilk.PRIMARY_700 : z.Ilk.PRIMARY_230);
        return (0, l.jsx)('div', {
            className: a()(Y.content, J.emptyPage),
            children: (0, l.jsxs)('div', {
                className: J.emptyContainer,
                children: [
                    (0, l.jsx)(U.Z, {
                        className: J.emptyIcon,
                        foregroundColor: e,
                        backgroundColor: n
                    }),
                    (0, l.jsx)(m.X6q, {
                        className: J.emptyHeader,
                        variant: 'heading-md/semibold',
                        children: V.intl.string(V.t.leKHQ0)
                    }),
                    (0, l.jsx)(m.Text, {
                        variant: 'text-sm/medium',
                        children: V.intl.format(V.t['jH+ktL'], { onBrowseChannels: f })
                    })
                ]
            })
        });
    }
    return (0, l.jsxs)(m.Den, {
        className: J.scroller,
        fade: !0,
        children: [
            (0, l.jsxs)('div', {
                className: J.pageBody,
                children: [
                    (b.length > 0 || v.length > 0) &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)('div', {
                                    children: (0, l.jsx)(m.X6q, {
                                        variant: 'heading-md/semibold',
                                        color: 'header-primary',
                                        children: V.intl.format(V.t.iB5Gqa, { count: b.length + O })
                                    })
                                }),
                                b.map(N),
                                v.map(N),
                                (0, l.jsx)('div', { className: J.sectionSeparator })
                            ]
                        }),
                    I.length > 0 &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)('div', {
                                    children: [
                                        (0, l.jsx)(m.X6q, {
                                            variant: 'heading-md/semibold',
                                            color: 'header-primary',
                                            children: V.intl.format(V.t['8IV8Ky'], { count: I.length })
                                        }),
                                        (0, l.jsx)(m.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-muted',
                                            children: V.intl.string(V.t.Ecz7T0)
                                        })
                                    ]
                                }),
                                I.map(N)
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
