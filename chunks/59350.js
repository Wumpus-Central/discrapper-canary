t.d(n, { Z: () => ei }), t(388685);
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
    v = t(402235),
    y = t(703656),
    O = t(687158),
    I = t(287008),
    N = t(484459),
    Z = t(271383),
    w = t(485386),
    P = t(430824),
    E = t(306680),
    S = t(594174),
    T = t(823379),
    B = t(51144),
    k = t(998502),
    A = t(549817),
    R = t(745752),
    D = t(45966),
    L = t(637853),
    M = t(905204),
    H = t(968644),
    U = t(521941),
    G = t(614328),
    W = t(104265),
    F = t(588632),
    z = t(290511),
    q = t(981631),
    X = t(176505),
    V = t(490897),
    J = t(388032),
    Y = t(273810),
    K = t(100658),
    Q = t(73433);
function $(e) {
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
let ee = m.EFr.SIZE_80,
    en = 'required';
function et(e) {
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
            size: (0, x.y9)(ee),
            onlyAnimateOnHover: !p
        }),
        C = (0, d.e7)([Z.ZP], () => Z.ZP.getSelfMember(i.id)),
        j = (0, d.Wu)([Z.ZP], () => Z.ZP.getMemberRoleWithPendingUpdates(i.id, o.id)),
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
        A = k.ZP.getEnableHardwareAcceleration() ? m.Xo$ : m.qEK;
    return (0, l.jsxs)('div', {
        className: Y.profile,
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
                className: Y.profileCard,
                children: [
                    (0, l.jsx)(
                        'div',
                        ((t = $({}, h)),
                        (r = r =
                            {
                                children: (0, l.jsx)(A, {
                                    src: u,
                                    avatarDecoration: g,
                                    size: ee,
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
                        className: Y.username,
                        children: null != (n = null == C ? void 0 : C.nick) ? n : B.ZP.getName(o)
                    }),
                    (0, l.jsx)(m.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        className: a()(Q.markup, Y.bio),
                        children: T
                    }),
                    null != E &&
                        E.length > 0 &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)('hr', { className: Y.separator }),
                                (0, l.jsx)(m.Text, {
                                    variant: 'text-xs/semibold',
                                    color: 'text-muted',
                                    className: Y.title,
                                    children: J.intl.string(J.t.LPJmLy)
                                }),
                                (0, l.jsx)('div', {
                                    className: Y.roles,
                                    children:
                                        null == E
                                            ? void 0
                                            : E.map((e) => {
                                                  var n;
                                                  return (0, l.jsxs)(
                                                      'div',
                                                      {
                                                          className: Y.role,
                                                          children: [
                                                              (0, l.jsx)(m.xko, {
                                                                  color: null != (n = e.colorString) ? n : (0, c.Rf)(q.p6O),
                                                                  colors: P ? e.colorStrings : null,
                                                                  className: Y.roleDot
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
    var n;
    let { prompt: t, guild: i } = e,
        [o, s] = r.useState(null),
        [c, u] = r.useState(new Set()),
        h = null == t || null == (n = t.options) ? void 0 : n.filter((e) => c.has(e.id)),
        p = (0, L.L6)(h),
        f = (0, L.dX)(h),
        g = (0, d.Wu)([D.Z], () => D.Z.getOnboardingResponsesForPrompt(i.id, t.id)),
        { helpText: x, helpTextAdditional: _ } = (0, H.p)({
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
        { handleSelectOption: j } = (0, M.Z)(i.id),
        b = t.options.map((e) => $({ value: e.id }, e)),
        v = t.options.filter((e) => g.includes(e.id)).map((e) => e.id);
    return (0, l.jsxs)('div', {
        className: Y.prompt,
        'data-new': t.isNew,
        children: [
            t.isNew &&
                (0, l.jsx)(m.IGR, {
                    color: (0, C.Lq)(q.Ilk.BRAND_260),
                    text: J.intl.string(J.t.y2b7CA),
                    className: Y.newBadge
                }),
            (0, l.jsxs)(m.X6q, {
                className: Y.promptTitle,
                variant: 'heading-md/semibold',
                color: 'header-primary',
                children: [
                    t.title,
                    t.required
                        ? (0, l.jsx)('span', {
                              className: a()(Y.required, { [Y.error]: (null == o ? void 0 : o.type) === en }),
                              children: '*'
                          })
                        : null
                ]
            }),
            (0, l.jsx)(F.Z, {
                options: b,
                value: v,
                onChange: (e) => {
                    let n = e.find((e) => !g.includes(e.id)),
                        l = e.map((e) => e.id);
                    if (null != n) j(t, n, !0), t.singleSelect && t.options.forEach((e) => c.delete(e.id)), c.add(n.id);
                    else {
                        let e = g.filter((e) => !l.includes(e)),
                            n = t.options.filter((n) => e.includes(n.id));
                        if (g.length <= n.length && t.required) return void s({ type: en });
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
                className: Y.helpText,
                children: [x, ' ', _]
            })
        ]
    });
}
function er(e) {
    var n;
    let { prompt: t, guild: i } = e,
        [o, s] = r.useState(null),
        [c, u] = r.useState(new Set()),
        h = null == t || null == (n = t.options) ? void 0 : n.filter((e) => c.has(e.id)),
        p = (0, L.L6)(h),
        f = (0, L.dX)(h),
        g = (0, d.Wu)([D.Z], () => D.Z.getOnboardingResponsesForPrompt(i.id, t.id)),
        { helpText: x, helpTextAdditional: _ } = (0, H.p)({
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
        { handleSelectOption: j } = (0, M.Z)(i.id),
        b = (e, n) => {
            if (!n && 1 === g.length && t.required) return void s({ type: en });
            j(t, e, null != n && n), t.singleSelect && n && t.options.forEach((e) => c.delete(e.id)), n ? c.add(e.id) : c.delete(e.id), u(new Set(c)), s(null);
        };
    return (0, l.jsxs)('div', {
        className: Y.prompt,
        'data-new': t.isNew,
        children: [
            t.isNew &&
                (0, l.jsx)(m.IGR, {
                    color: (0, C.Lq)(q.Ilk.BRAND_260),
                    text: J.intl.string(J.t.y2b7CA),
                    className: Y.newBadge
                }),
            (0, l.jsxs)(m.X6q, {
                className: Y.promptTitle,
                variant: 'heading-md/semibold',
                color: 'header-primary',
                children: [
                    t.title,
                    t.required
                        ? (0, l.jsx)('span', {
                              className: a()(Y.required, { [Y.error]: (null == o ? void 0 : o.type) === en }),
                              children: '*'
                          })
                        : null
                ]
            }),
            (0, l.jsx)('div', {
                className: Y.promptOptions,
                children: t.options.map((e) =>
                    (0, l.jsx)(
                        W.Z,
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
                className: Y.helpText,
                children: [x, ' ', _]
            })
        ]
    });
}
function ei(e) {
    let { guildId: n, onBrowseChannels: t } = e,
        i = (0, u.wj)((0, g.ZP)()),
        o = (0, d.e7)([P.Z], () => P.Z.getGuild(n)),
        s = (0, d.e7)([S.default], () => S.default.getCurrentUser()),
        c = (0, p.Z)('(min-width: 1344px)') && null != s,
        f = r.useCallback(() => {
            (0, y.uL)(q.Z5c.CHANNEL(n, X.oC.CHANNEL_BROWSER)), null == t || t();
        }, [n, t]),
        x = (0, d.e7)([E.ZP], () => E.ZP.hasUnread(n, V.W.GUILD_ONBOARDING_QUESTION)),
        { onboardingPromptsRaw: _, newOnboardingPrompts: b, onboardingPromptsWithNewAnswers: v, newAnswersCount: O, onboardingPrompts: I } = (0, U.Z)(n);
    r.useEffect(() => {
        (null == o ? void 0 : o.id) != null && !j.Z.isFullServerPreview(o.id) && (D.Z.shouldFetchPrompts(o.id) || x) && (0, R.eM)(o.id);
    }, [null == o ? void 0 : o.id, x]),
        r.useEffect(() => {
            if ((null == o ? void 0 : o.id) != null && !j.Z.isFullServerPreview(o.id))
                return () => {
                    (0, h.Ju)(o.id, V.W.GUILD_ONBOARDING_QUESTION, D.Z.ackIdForGuild(o.id)), A.Z.updateOnboardingResponses(o.id);
                };
        }, [null == o ? void 0 : o.id]);
    let N = r.useCallback(
        (e) => {
            if (null == o) return null;
            switch (e.type) {
                case z.FN.MULTIPLE_CHOICE:
                    return (0, l.jsx)(
                        er,
                        {
                            prompt: e,
                            guild: o
                        },
                        e.id
                    );
                case z.FN.DROPDOWN:
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
        let e = (0, C.Lq)(i ? q.Ilk.PRIMARY_300 : q.Ilk.PRIMARY_500),
            n = (0, C.Lq)(i ? q.Ilk.PRIMARY_700 : q.Ilk.PRIMARY_230);
        return (0, l.jsx)('div', {
            className: a()(K.content, Y.emptyPage),
            children: (0, l.jsxs)('div', {
                className: Y.emptyContainer,
                children: [
                    (0, l.jsx)(G.Z, {
                        className: Y.emptyIcon,
                        foregroundColor: e,
                        backgroundColor: n
                    }),
                    (0, l.jsx)(m.X6q, {
                        className: Y.emptyHeader,
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
        className: Y.scroller,
        fade: !0,
        children: [
            (0, l.jsxs)('div', {
                className: Y.pageBody,
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
                                (0, l.jsx)('div', { className: Y.sectionSeparator })
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
                                            children: J.intl.format(J.t['8IV8Ky'], { count: I.length })
                                        }),
                                        (0, l.jsx)(m.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-muted',
                                            children: J.intl.string(J.t.Ecz7T0)
                                        })
                                    ]
                                }),
                                I.map(N)
                            ]
                        })
                ]
            }),
            c &&
                (0, l.jsx)(et, {
                    guild: o,
                    user: s
                })
        ]
    });
}
