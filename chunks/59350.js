t.d(n, { Z: () => er }), t(47120);
var r = t(200651),
    l = t(192379),
    a = t(120356),
    i = t.n(a),
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
    N = t(703656),
    v = t(687158),
    y = t(287008),
    O = t(484459),
    I = t(271383),
    Z = t(430824),
    w = t(306680),
    P = t(594174),
    E = t(823379),
    S = t(51144),
    T = t(998502),
    B = t(549817),
    k = t(745752),
    A = t(45966),
    R = t(637853),
    D = t(905204),
    W = t(968644),
    L = t(521941),
    M = t(614328),
    H = t(104265),
    U = t(588632),
    G = t(290511),
    F = t(981631),
    z = t(176505),
    q = t(490897),
    X = t(388032),
    V = t(273810),
    J = t(100658),
    Y = t(73433);
function K(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = r);
            });
    }
    return e;
}
let Q = m.EFr.SIZE_80,
    $ = 'required';
function ee(e) {
    var n, t, l;
    let { guild: a, user: o } = e,
        {
            avatarSrc: u,
            eventHandlers: h,
            isAvatarAnimating: p
        } = (0, y.Z)({
            user: o,
            guildId: a.id,
            size: 120
        }),
        { avatarDecorationSrc: g } = (0, _.Z)({
            user: o,
            size: (0, x.y9)(Q),
            onlyAnimateOnHover: !p
        }),
        C = (0, d.e7)([I.ZP], () => I.ZP.getSelfMember(a.id)),
        j = (0, d.Wu)([I.ZP], () => I.ZP.getMemberRoleWithPendingUpdates(a.id, o.id)),
        N = (0, d.e7)([Z.Z], () => Z.Z.getRoles(a.id)),
        w = s()(j)
            .filter((e) => N.hasOwnProperty(e))
            .map((e) => N[e])
            .orderBy('position', 'desc')
            .value(),
        P = (0, v.ZP)(o.id, a.id);
    (0, f.ZP)(() => {
        (0, O.Z)(o.id, o.getAvatarURL(a.id, (0, m.pxk)(Q)), { guildId: a.id });
    });
    let E = (0, b.parseBioReact)(null == P ? void 0 : P.bio),
        B = T.ZP.getEnableHardwareAcceleration() ? m.Xo$ : m.qEK;
    return (0, r.jsxs)('div', {
        className: V.profile,
        children: [
            (0, r.jsx)(m.X6q, {
                variant: 'heading-md/semibold',
                color: 'header-primary',
                children: X.NW.string(X.t.diTbFx)
            }),
            (0, r.jsx)(m.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                children: X.NW.string(X.t['+8um3N'])
            }),
            (0, r.jsxs)('div', {
                className: V.profileCard,
                children: [
                    (0, r.jsx)(
                        'div',
                        ((t = K({}, h)),
                        (l = l =
                            {
                                children: (0, r.jsx)(B, {
                                    src: u,
                                    avatarDecoration: g,
                                    size: Q,
                                    'aria-label': o.username
                                })
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l))
                            : (function (e, n) {
                                  var t = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      t.push.apply(t, r);
                                  }
                                  return t;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        t)
                    ),
                    (0, r.jsx)(m.Text, {
                        variant: 'text-lg/medium',
                        color: 'header-primary',
                        className: V.username,
                        children: null != (n = null == C ? void 0 : C.nick) ? n : S.ZP.getName(o)
                    }),
                    (0, r.jsx)(m.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        className: i()(Y.markup, V.bio),
                        children: E
                    }),
                    null != w &&
                        w.length > 0 &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)('hr', { className: V.separator }),
                                (0, r.jsx)(m.Text, {
                                    variant: 'text-xs/semibold',
                                    color: 'text-muted',
                                    className: V.title,
                                    children: X.NW.string(X.t.LPJmLy)
                                }),
                                (0, r.jsx)('div', {
                                    className: V.roles,
                                    children:
                                        null == w
                                            ? void 0
                                            : w.map((e) => {
                                                  var n;
                                                  return (0, r.jsxs)(
                                                      'div',
                                                      {
                                                          className: V.role,
                                                          children: [
                                                              (0, r.jsx)(m.xko, {
                                                                  color: null != (n = e.colorString) ? n : (0, c.Rf)(F.p6O),
                                                                  className: V.roleDot
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
    var n;
    let { prompt: t, guild: a } = e,
        [o, s] = l.useState(null),
        [c, u] = l.useState(new Set()),
        h = null == t || null == (n = t.options) ? void 0 : n.filter((e) => c.has(e.id)),
        p = (0, R.L6)(h),
        f = (0, R.dX)(h),
        g = (0, d.Wu)([A.Z], () => A.Z.getOnboardingResponsesForPrompt(a.id, t.id)),
        { helpText: x, helpTextAdditional: _ } = (0, W.p)({
            guild: a,
            prompt: t,
            selectedRoleIds: p,
            selectedChannelIds: f,
            itemHook: (e, n) =>
                (0, r.jsx)(
                    m.Text,
                    {
                        variant: 'text-xs/medium',
                        color: 'header-primary',
                        children: e
                    },
                    n
                )
        }),
        { handleSelectOption: j } = (0, D.Z)(a.id),
        b = t.options.map((e) => K({ value: e.id }, e)),
        N = t.options.filter((e) => g.includes(e.id)).map((e) => e.id);
    return (0, r.jsxs)('div', {
        className: V.prompt,
        'data-new': t.isNew,
        children: [
            t.isNew &&
                (0, r.jsx)(m.IGR, {
                    color: (0, C.Lq)(F.Ilk.BRAND_260),
                    text: X.NW.string(X.t.y2b7CA),
                    className: V.newBadge
                }),
            (0, r.jsxs)(m.X6q, {
                className: V.promptTitle,
                variant: 'heading-md/semibold',
                color: 'header-primary',
                children: [
                    t.title,
                    t.required
                        ? (0, r.jsx)('span', {
                              className: i()(V.required, { [V.error]: (null == o ? void 0 : o.type) === $ }),
                              children: '*'
                          })
                        : null
                ]
            }),
            (0, r.jsx)(U.Z, {
                options: b,
                value: N,
                onChange: (e) => {
                    let n = e.find((e) => !g.includes(e.id)),
                        r = e.map((e) => e.id);
                    if (null != n) j(t, n, !0), t.singleSelect && t.options.forEach((e) => c.delete(e.id)), c.add(n.id);
                    else {
                        let e = g.filter((e) => !r.includes(e)),
                            n = t.options.filter((n) => e.includes(n.id));
                        if (g.length <= n.length && t.required) return void s({ type: $ });
                        n.forEach((e) => {
                            j(t, e, !1), c.delete(e.id);
                        });
                    }
                    u(new Set(c)), s(null);
                },
                canBeNew: !t.isNew
            }),
            (0, r.jsxs)(m.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                className: V.helpText,
                children: [x, ' ', _]
            })
        ]
    });
}
function et(e) {
    var n;
    let { prompt: t, guild: a } = e,
        [o, s] = l.useState(null),
        [c, u] = l.useState(new Set()),
        h = null == t || null == (n = t.options) ? void 0 : n.filter((e) => c.has(e.id)),
        p = (0, R.L6)(h),
        f = (0, R.dX)(h),
        g = (0, d.Wu)([A.Z], () => A.Z.getOnboardingResponsesForPrompt(a.id, t.id)),
        { helpText: x, helpTextAdditional: _ } = (0, W.p)({
            guild: a,
            prompt: t,
            selectedRoleIds: p,
            selectedChannelIds: f,
            itemHook: (e, n) =>
                (0, r.jsx)(
                    m.Text,
                    {
                        variant: 'text-xs/medium',
                        color: 'header-primary',
                        children: e
                    },
                    n
                )
        }),
        { handleSelectOption: j } = (0, D.Z)(a.id),
        b = (e, n) => {
            if (!n && 1 === g.length && t.required) return void s({ type: $ });
            j(t, e, null != n && n), t.singleSelect && n && t.options.forEach((e) => c.delete(e.id)), n ? c.add(e.id) : c.delete(e.id), u(new Set(c)), s(null);
        };
    return (0, r.jsxs)('div', {
        className: V.prompt,
        'data-new': t.isNew,
        children: [
            t.isNew &&
                (0, r.jsx)(m.IGR, {
                    color: (0, C.Lq)(F.Ilk.BRAND_260),
                    text: X.NW.string(X.t.y2b7CA),
                    className: V.newBadge
                }),
            (0, r.jsxs)(m.X6q, {
                className: V.promptTitle,
                variant: 'heading-md/semibold',
                color: 'header-primary',
                children: [
                    t.title,
                    t.required
                        ? (0, r.jsx)('span', {
                              className: i()(V.required, { [V.error]: (null == o ? void 0 : o.type) === $ }),
                              children: '*'
                          })
                        : null
                ]
            }),
            (0, r.jsx)('div', {
                className: V.promptOptions,
                children: t.options.map((e) =>
                    (0, r.jsx)(
                        H.Z,
                        {
                            hideMemberCount: !0,
                            guildId: a.id,
                            option: e,
                            onSelect: (n) => b(e, n),
                            selected: g.includes(e.id),
                            canBeNew: !t.isNew
                        },
                        e.id
                    )
                )
            }),
            (0, r.jsxs)(m.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                className: V.helpText,
                children: [x, ' ', _]
            })
        ]
    });
}
function er(e) {
    let { guildId: n, onBrowseChannels: t } = e,
        a = (0, u.wj)((0, g.ZP)()),
        o = (0, d.e7)([Z.Z], () => Z.Z.getGuild(n)),
        s = (0, d.e7)([P.default], () => P.default.getCurrentUser()),
        c = (0, p.Z)('(min-width: 1344px)') && null != s,
        f = l.useCallback(() => {
            (0, N.uL)(F.Z5c.CHANNEL(n, z.oC.CHANNEL_BROWSER)), null == t || t();
        }, [n, t]),
        x = (0, d.e7)([w.ZP], () => w.ZP.hasUnread(n, q.W.GUILD_ONBOARDING_QUESTION)),
        { onboardingPromptsRaw: _, newOnboardingPrompts: b, onboardingPromptsWithNewAnswers: v, newAnswersCount: y, onboardingPrompts: O } = (0, L.Z)(n);
    l.useEffect(() => {
        (null == o ? void 0 : o.id) != null && !j.Z.isFullServerPreview(o.id) && (A.Z.shouldFetchPrompts(o.id) || x) && (0, k.eM)(o.id);
    }, [null == o ? void 0 : o.id, x]),
        l.useEffect(() => {
            if ((null == o ? void 0 : o.id) != null && !j.Z.isFullServerPreview(o.id))
                return () => {
                    (0, h.Ju)(o.id, q.W.GUILD_ONBOARDING_QUESTION, A.Z.ackIdForGuild(o.id)), B.Z.updateOnboardingResponses(o.id);
                };
        }, [null == o ? void 0 : o.id]);
    let I = l.useCallback(
        (e) => {
            if (null == o) return null;
            switch (e.type) {
                case G.FN.MULTIPLE_CHOICE:
                    return (0, r.jsx)(
                        et,
                        {
                            prompt: e,
                            guild: o
                        },
                        e.id
                    );
                case G.FN.DROPDOWN:
                    return (0, r.jsx)(
                        en,
                        {
                            prompt: e,
                            guild: o
                        },
                        e.id
                    );
                default:
                    (0, E.vE)(e.type);
            }
        },
        [o]
    );
    if (null == o) return null;
    if (0 === _.length) {
        let e = (0, C.Lq)(a ? F.Ilk.PRIMARY_300 : F.Ilk.PRIMARY_500),
            n = (0, C.Lq)(a ? F.Ilk.PRIMARY_700 : F.Ilk.PRIMARY_230);
        return (0, r.jsx)('div', {
            className: i()(J.content, V.emptyPage),
            children: (0, r.jsxs)('div', {
                className: V.emptyContainer,
                children: [
                    (0, r.jsx)(M.Z, {
                        className: V.emptyIcon,
                        foregroundColor: e,
                        backgroundColor: n
                    }),
                    (0, r.jsx)(m.X6q, {
                        className: V.emptyHeader,
                        variant: 'heading-md/semibold',
                        children: X.NW.string(X.t.leKHQ0)
                    }),
                    (0, r.jsx)(m.Text, {
                        variant: 'text-sm/medium',
                        children: X.NW.format(X.t['jH+ktL'], { onBrowseChannels: f })
                    })
                ]
            })
        });
    }
    return (0, r.jsxs)(m.Den, {
        className: V.scroller,
        fade: !0,
        children: [
            (0, r.jsxs)('div', {
                className: V.pageBody,
                children: [
                    (b.length > 0 || v.length > 0) &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)('div', {
                                    children: (0, r.jsx)(m.X6q, {
                                        variant: 'heading-md/semibold',
                                        color: 'header-primary',
                                        children: X.NW.format(X.t.iB5Gqa, { count: b.length + y })
                                    })
                                }),
                                b.map(I),
                                v.map(I),
                                (0, r.jsx)('div', { className: V.sectionSeparator })
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
                                            children: X.NW.format(X.t['8IV8Ky'], { count: O.length })
                                        }),
                                        (0, r.jsx)(m.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-muted',
                                            children: X.NW.string(X.t.Ecz7T0)
                                        })
                                    ]
                                }),
                                O.map(I)
                            ]
                        })
                ]
            }),
            c &&
                (0, r.jsx)(ee, {
                    guild: o,
                    user: s
                })
        ]
    });
}
