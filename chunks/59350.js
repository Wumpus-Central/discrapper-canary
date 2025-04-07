n.d(t, { Z: () => er }), n(388685);
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
    N = n(703656),
    v = n(687158),
    y = n(287008),
    O = n(484459),
    I = n(271383),
    Z = n(430824),
    w = n(306680),
    P = n(594174),
    E = n(823379),
    S = n(51144),
    k = n(998502),
    T = n(549817),
    B = n(745752),
    A = n(45966),
    R = n(637853),
    D = n(905204),
    W = n(968644),
    L = n(521941),
    M = n(614328),
    H = n(104265),
    U = n(588632),
    G = n(290511),
    F = n(981631),
    z = n(176505),
    q = n(490897),
    X = n(388032),
    V = n(273810),
    J = n(100658),
    Y = n(73433);
function K(e) {
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
let Q = m.EFr.SIZE_80,
    $ = 'required';
function ee(e) {
    var t, n, l;
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
        b = (0, d.Wu)([I.ZP], () => I.ZP.getMemberRoleWithPendingUpdates(a.id, o.id)),
        N = (0, d.e7)([Z.Z], () => Z.Z.getRoles(a.id)),
        w = s()(b)
            .filter((e) => N.hasOwnProperty(e))
            .map((e) => N[e])
            .orderBy('position', 'desc')
            .value(),
        P = (0, v.ZP)(o.id, a.id);
    (0, f.ZP)(() => {
        (0, O.Z)(o.id, o.getAvatarURL(a.id, (0, m.pxk)(Q)), { guildId: a.id });
    });
    let E = (0, j.parseBioReact)(null == P ? void 0 : P.bio),
        T = k.ZP.getEnableHardwareAcceleration() ? m.Xo$ : m.qEK;
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
                        ((n = K({}, h)),
                        (l = l =
                            {
                                children: (0, r.jsx)(T, {
                                    src: u,
                                    avatarDecoration: g,
                                    size: Q,
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
                        className: V.username,
                        children: null != (t = null == C ? void 0 : C.nick) ? t : S.ZP.getName(o)
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
                                                  var t;
                                                  return (0, r.jsxs)(
                                                      'div',
                                                      {
                                                          className: V.role,
                                                          children: [
                                                              (0, r.jsx)(m.xko, {
                                                                  color: null != (t = e.colorString) ? t : (0, c.Rf)(F.p6O),
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
function et(e) {
    var t;
    let { prompt: n, guild: a } = e,
        [o, s] = l.useState(null),
        [c, u] = l.useState(new Set()),
        h = null == n || null == (t = n.options) ? void 0 : t.filter((e) => c.has(e.id)),
        p = (0, R.L6)(h),
        f = (0, R.dX)(h),
        g = (0, d.Wu)([A.Z], () => A.Z.getOnboardingResponsesForPrompt(a.id, n.id)),
        { helpText: x, helpTextAdditional: _ } = (0, W.p)({
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
        { handleSelectOption: b } = (0, D.Z)(a.id),
        j = n.options.map((e) => K({ value: e.id }, e)),
        N = n.options.filter((e) => g.includes(e.id)).map((e) => e.id);
    return (0, r.jsxs)('div', {
        className: V.prompt,
        'data-new': n.isNew,
        children: [
            n.isNew &&
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
                    n.title,
                    n.required
                        ? (0, r.jsx)('span', {
                              className: i()(V.required, { [V.error]: (null == o ? void 0 : o.type) === $ }),
                              children: '*'
                          })
                        : null
                ]
            }),
            (0, r.jsx)(U.Z, {
                options: j,
                value: N,
                onChange: (e) => {
                    let t = e.find((e) => !g.includes(e.id)),
                        r = e.map((e) => e.id);
                    if (null != t) b(n, t, !0), n.singleSelect && n.options.forEach((e) => c.delete(e.id)), c.add(t.id);
                    else {
                        let e = g.filter((e) => !r.includes(e)),
                            t = n.options.filter((t) => e.includes(t.id));
                        if (g.length <= t.length && n.required) return void s({ type: $ });
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
                className: V.helpText,
                children: [x, ' ', _]
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
        p = (0, R.L6)(h),
        f = (0, R.dX)(h),
        g = (0, d.Wu)([A.Z], () => A.Z.getOnboardingResponsesForPrompt(a.id, n.id)),
        { helpText: x, helpTextAdditional: _ } = (0, W.p)({
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
        { handleSelectOption: b } = (0, D.Z)(a.id),
        j = (e, t) => {
            if (!t && 1 === g.length && n.required) return void s({ type: $ });
            b(n, e, null != t && t), n.singleSelect && t && n.options.forEach((e) => c.delete(e.id)), t ? c.add(e.id) : c.delete(e.id), u(new Set(c)), s(null);
        };
    return (0, r.jsxs)('div', {
        className: V.prompt,
        'data-new': n.isNew,
        children: [
            n.isNew &&
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
                    n.title,
                    n.required
                        ? (0, r.jsx)('span', {
                              className: i()(V.required, { [V.error]: (null == o ? void 0 : o.type) === $ }),
                              children: '*'
                          })
                        : null
                ]
            }),
            (0, r.jsx)('div', {
                className: V.promptOptions,
                children: n.options.map((e) =>
                    (0, r.jsx)(
                        H.Z,
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
                className: V.helpText,
                children: [x, ' ', _]
            })
        ]
    });
}
function er(e) {
    let { guildId: t, onBrowseChannels: n } = e,
        a = (0, u.wj)((0, g.ZP)()),
        o = (0, d.e7)([Z.Z], () => Z.Z.getGuild(t)),
        s = (0, d.e7)([P.default], () => P.default.getCurrentUser()),
        c = (0, p.Z)('(min-width: 1344px)') && null != s,
        f = l.useCallback(() => {
            (0, N.uL)(F.Z5c.CHANNEL(t, z.oC.CHANNEL_BROWSER)), null == n || n();
        }, [t, n]),
        x = (0, d.e7)([w.ZP], () => w.ZP.hasUnread(t, q.W.GUILD_ONBOARDING_QUESTION)),
        { onboardingPromptsRaw: _, newOnboardingPrompts: j, onboardingPromptsWithNewAnswers: v, newAnswersCount: y, onboardingPrompts: O } = (0, L.Z)(t);
    l.useEffect(() => {
        (null == o ? void 0 : o.id) != null && !b.Z.isFullServerPreview(o.id) && (A.Z.shouldFetchPrompts(o.id) || x) && (0, B.eM)(o.id);
    }, [null == o ? void 0 : o.id, x]),
        l.useEffect(() => {
            if ((null == o ? void 0 : o.id) != null && !b.Z.isFullServerPreview(o.id))
                return () => {
                    (0, h.Ju)(o.id, q.W.GUILD_ONBOARDING_QUESTION, A.Z.ackIdForGuild(o.id)), T.Z.updateOnboardingResponses(o.id);
                };
        }, [null == o ? void 0 : o.id]);
    let I = l.useCallback(
        (e) => {
            if (null == o) return null;
            switch (e.type) {
                case G.FN.MULTIPLE_CHOICE:
                    return (0, r.jsx)(
                        en,
                        {
                            prompt: e,
                            guild: o
                        },
                        e.id
                    );
                case G.FN.DROPDOWN:
                    return (0, r.jsx)(
                        et,
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
            t = (0, C.Lq)(a ? F.Ilk.PRIMARY_700 : F.Ilk.PRIMARY_230);
        return (0, r.jsx)('div', {
            className: i()(J.content, V.emptyPage),
            children: (0, r.jsxs)('div', {
                className: V.emptyContainer,
                children: [
                    (0, r.jsx)(M.Z, {
                        className: V.emptyIcon,
                        foregroundColor: e,
                        backgroundColor: t
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
                    (j.length > 0 || v.length > 0) &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)('div', {
                                    children: (0, r.jsx)(m.X6q, {
                                        variant: 'heading-md/semibold',
                                        color: 'header-primary',
                                        children: X.NW.format(X.t.iB5Gqa, { count: j.length + y })
                                    })
                                }),
                                j.map(I),
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
