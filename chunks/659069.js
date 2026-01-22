n.d(t, {
    A: () => ei,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    c = n(827734),
    d = n(582754),
    o = n(397927),
    u = n(334738),
    f = n(241524),
    b = n(964486),
    h = n(736653),
    p = n(793574),
    g = n(954921),
    m = n(278539),
    x = n(164956),
    A = n(713804),
    j = n(676608),
    O = n(976860),
    C = n(950191),
    y = n(62199),
    v = n(576622),
    _ = n(696451),
    N = n(317525),
    w = n(71393),
    E = n(222823),
    S = n(287809),
    I = n(403362),
    P = n(427262),
    D = n(837921),
    R = n(669953),
    L = n(817818),
    T = n(591552),
    G = n(961973),
    H = n(663915),
    M = n(218785),
    k = n(901434),
    U = n(724531),
    B = n(576977),
    V = n(164048),
    F = n(839447),
    W = n(539916),
    q = n(652215),
    K = n(746080),
    Z = n(790782),
    Y = n(985018),
    J = n(713273),
    z = n(638990),
    X = n(206314);

function Q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
let $ = o._3J.SIZE_80,
    ee = "required";

function et(e) {
    var t, n, r;
    let { guild: i, user: c } = e,
        {
            avatarSrc: d,
            eventHandlers: u,
            isAvatarAnimating: f,
        } = (0, y.A)({
            user: c,
            guildId: i.id,
            size: 120,
        }),
        { avatarDecorationSrc: h } = (0, m.A)({
            user: c,
            size: (0, g.Te)($),
            onlyAnimateOnHoverOrFocus: !f,
        }),
        p = (0, s.bG)([_.Ay], () => _.Ay.getSelfMember(i.id)),
        x = (0, s.yK)([_.Ay], () => _.Ay.getMemberRoleWithPendingUpdates(i.id, c.id)),
        O = (0, s.bG)([N.A], () => N.A.getSortedRoles(i.id)),
        w = (0, j.Ay)(i.id, c.id),
        E = O.filter((e) => x.includes(e.id)),
        S = (0, C.Ay)(c.id, i.id);
    (0, b.Ay)(() => {
        (0, v.A)(c.id, c.getAvatarURL(i.id, (0, o.FT9)($)), {
            guildId: i.id,
        });
    });
    let I = (0, A.parseBioReact)(null == S ? void 0 : S.bio),
        R = D.Ay.getEnableHardwareAcceleration() ? o.JsQ : o.euF;
    return (0, l.jsxs)("div", {
        className: J.ME,
        children: [
            (0, l.jsx)(o.Heading, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: Y.intl.string(Y.t.diTbF8),
            }),
            (0, l.jsx)(o.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: Y.intl.string(Y.t["+8um3M"]),
            }),
            (0, l.jsxs)("div", {
                className: J.Kq,
                children: [
                    (0, l.jsx)(
                        "div",
                        ((n = Q({}, u)),
                        (r = r =
                            {
                                children: (0, l.jsx)(R, {
                                    src: d,
                                    avatarDecoration: h,
                                    size: $,
                                    "aria-label": c.username,
                                }),
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
                        n),
                    ),
                    (0, l.jsx)(o.Text, {
                        variant: "text-lg/medium",
                        color: "text-strong",
                        className: J.Xh,
                        children: null != (t = null == p ? void 0 : p.nick) ? t : P.Ay.getName(c),
                    }),
                    (0, l.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: a()(X.PT, J.z3),
                        children: I,
                    }),
                    null != E &&
                        E.length > 0 &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("hr", {
                                    className: J.me,
                                }),
                                (0, l.jsx)(o.Text, {
                                    variant: "text-xs/semibold",
                                    color: "text-muted",
                                    className: J.DD,
                                    children: Y.intl.string(Y.t["LPJmL/"]),
                                }),
                                (0, l.jsx)("div", {
                                    className: J.Ot,
                                    children:
                                        null == E
                                            ? void 0
                                            : E.map((e) => {
                                                  var t;
                                                  return (0, l.jsxs)(
                                                      "div",
                                                      {
                                                          className: J.JC,
                                                          children: [
                                                              (0, l.jsx)(o.RYH, {
                                                                  color: null != (t = e.colorString) ? t : q.TpD,
                                                                  colors: w ? e.colorStrings : null,
                                                                  className: J.m4,
                                                              }),
                                                              (0, l.jsx)(o.Text, {
                                                                  variant: "text-xs/medium",
                                                                  color: "text-strong",
                                                                  children: e.name,
                                                              }),
                                                          ],
                                                      },
                                                      e.id,
                                                  );
                                              }),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
}

function en(e) {
    var t;
    let { prompt: n, guild: i } = e,
        [d, u] = r.useState(null),
        [f, b] = r.useState(new Set()),
        h = null == n || null == (t = n.options) ? void 0 : t.filter((e) => f.has(e.id)),
        p = (0, G.a)(h),
        g = (0, G.vV)(h),
        m = (0, s.yK)([T.A], () => T.A.getOnboardingResponsesForPrompt(i.id, n.id)),
        { helpText: x, helpTextAdditional: A } = (0, M.W)({
            guild: i,
            prompt: n,
            selectedRoleIds: p,
            selectedChannelIds: g,
            itemHook: (e, t) =>
                (0, l.jsx)(
                    o.Text,
                    {
                        variant: "text-xs/medium",
                        color: "text-strong",
                        children: e,
                    },
                    t,
                ),
        }),
        { handleSelectOption: j } = (0, H.A)(i.id),
        O = n.options.map((e) =>
            Q(
                {
                    value: e.id,
                },
                e,
            ),
        ),
        C = n.options.filter((e) => m.includes(e.id)).map((e) => e.id);
    return (0, l.jsxs)("div", {
        className: J.J1,
        "data-new": n.isNew,
        children: [
            n.isNew &&
                (0, l.jsx)(o.LpS, {
                    color: c.A.unsafe_rawColors.BRAND_260.css,
                    text: Y.intl.string(Y.t.y2b7CA),
                    className: J.Ad,
                }),
            (0, l.jsxs)(o.Heading, {
                className: J.Hi,
                variant: "heading-md/semibold",
                color: "text-strong",
                children: [
                    n.title,
                    n.required
                        ? (0, l.jsx)("span", {
                              className: a()(J.mw, {
                                  [J.So]: (null == d ? void 0 : d.type) === ee,
                              }),
                              children: "*",
                          })
                        : null,
                ],
            }),
            (0, l.jsx)(F.A, {
                options: O,
                value: C,
                onChange: (e) => {
                    let t = e.find((e) => !m.includes(e.id)),
                        l = e.map((e) => e.id);
                    if (null != t) j(n, t, !0), n.singleSelect && n.options.forEach((e) => f.delete(e.id)), f.add(t.id);
                    else {
                        let e = m.filter((e) => !l.includes(e)),
                            t = n.options.filter((t) => e.includes(t.id));
                        if (m.length <= t.length && n.required)
                            return void u({
                                type: ee,
                            });
                        t.forEach((e) => {
                            j(n, e, !1), f.delete(e.id);
                        });
                    }
                    b(new Set(f)), u(null);
                },
                canBeNew: !n.isNew,
            }),
            (0, l.jsxs)(o.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: J.BK,
                children: [x, " ", A],
            }),
        ],
    });
}

function el(e) {
    let { guild: t } = e,
        n = (0, s.bG)([T.A], () => T.A.getConnections(t.id));
    return 0 === n.length
        ? null
        : (0, l.jsxs)("div", {
              className: J.J1,
              children: [
                  (0, l.jsx)(o.Heading, {
                      variant: "heading-md/semibold",
                      color: "text-strong",
                      children: Y.intl.string(Y.t.eDVMrA),
                  }),
                  (0, l.jsx)(o.Text, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: Y.intl.string(Y.t.BozOXu),
                  }),
                  (0, l.jsx)("div", {
                      className: J.lA,
                      children: n.map((e, n) =>
                          (0, l.jsx)(
                              U.A,
                              {
                                  connection: e,
                                  guildId: t.id,
                                  location: p.A.CHANNELS_AND_ROLES,
                              },
                              n,
                          ),
                      ),
                  }),
              ],
          });
}

function er(e) {
    var t;
    let { prompt: n, guild: i } = e,
        [d, u] = r.useState(null),
        [f, b] = r.useState(new Set()),
        h = null == n || null == (t = n.options) ? void 0 : t.filter((e) => f.has(e.id)),
        p = (0, G.a)(h),
        g = (0, G.vV)(h),
        m = (0, s.yK)([T.A], () => T.A.getOnboardingResponsesForPrompt(i.id, n.id)),
        { helpText: x, helpTextAdditional: A } = (0, M.W)({
            guild: i,
            prompt: n,
            selectedRoleIds: p,
            selectedChannelIds: g,
            itemHook: (e, t) =>
                (0, l.jsx)(
                    o.Text,
                    {
                        variant: "text-xs/medium",
                        color: "text-strong",
                        children: e,
                    },
                    t,
                ),
        }),
        { handleSelectOption: j } = (0, H.A)(i.id);
    return (0, l.jsxs)("div", {
        className: J.J1,
        "data-new": n.isNew,
        children: [
            n.isNew &&
                (0, l.jsx)(o.LpS, {
                    color: c.A.unsafe_rawColors.BRAND_260.css,
                    text: Y.intl.string(Y.t.y2b7CA),
                    className: J.Ad,
                }),
            (0, l.jsxs)(o.Heading, {
                className: J.Hi,
                variant: "heading-md/semibold",
                color: "text-strong",
                children: [
                    n.title,
                    n.required
                        ? (0, l.jsx)("span", {
                              className: a()(J.mw, {
                                  [J.So]: (null == d ? void 0 : d.type) === ee,
                              }),
                              children: "*",
                          })
                        : null,
                ],
            }),
            (0, l.jsx)("div", {
                className: J.vS,
                children: n.options.map((e) =>
                    (0, l.jsx)(
                        V.A,
                        {
                            hideMemberCount: !0,
                            guildId: i.id,
                            option: e,
                            onSelect: (t) => {
                                !t && 1 === m.length && n.required
                                    ? u({
                                          type: ee,
                                      })
                                    : (j(n, e, null != t && t),
                                      n.singleSelect && t && n.options.forEach((e) => f.delete(e.id)),
                                      t ? f.add(e.id) : f.delete(e.id),
                                      b(new Set(f)),
                                      u(null));
                            },
                            selected: m.includes(e.id),
                            canBeNew: !n.isNew,
                        },
                        e.id,
                    ),
                ),
            }),
            (0, l.jsxs)(o.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: J.BK,
                children: [x, " ", A],
            }),
        ],
    });
}

function ei(e) {
    let { guildId: t, onBrowseChannels: n } = e,
        i = (0, d.Mw)((0, h.Ay)()),
        b = (0, s.bG)([w.A], () => w.A.getGuild(t)),
        p = (0, s.bG)([S.default], () => S.default.getCurrentUser()),
        g = (0, f.A)("(min-width: 1344px)") && null != p,
        m = r.useCallback(() => {
            (0, O.pX)(q.BVt.CHANNEL(t, K.VV.CHANNEL_BROWSER)), null == n || n();
        }, [t, n]),
        A = (0, s.bG)([E.Ay], () => E.Ay.hasUnread(t, Z.P.GUILD_ONBOARDING_QUESTION)),
        j = null == b ? void 0 : b.latestOnboardingQuestionId,
        {
            onboardingPromptsRaw: C,
            newOnboardingPrompts: y,
            onboardingPromptsWithNewAnswers: v,
            newAnswersCount: _,
            onboardingPrompts: N,
        } = (0, k.A)(t);
    r.useEffect(() => {
        (null == b ? void 0 : b.id) == null ||
            (!x.A.isFullServerPreview(b.id) && (T.A.shouldFetchPrompts(b.id) || A) && (0, L.jx)(b.id));
    }, [null == b ? void 0 : b.id, A, j]),
        r.useEffect(() => {
            if ((null == b ? void 0 : b.id) != null && !x.A.isFullServerPreview(b.id))
                return () => {
                    (0, u.hK)(b.id, Z.P.GUILD_ONBOARDING_QUESTION, T.A.ackIdForGuild(b.id)),
                        R.A.updateOnboardingResponses(b.id);
                };
        }, [null == b ? void 0 : b.id]);
    let P = r.useCallback(
        (e) => {
            if (null == b) return null;
            switch (e.type) {
                case W.ME.MULTIPLE_CHOICE:
                    return (0, l.jsx)(
                        er,
                        {
                            prompt: e,
                            guild: b,
                        },
                        e.id,
                    );
                case W.ME.DROPDOWN:
                    return (0, l.jsx)(
                        en,
                        {
                            prompt: e,
                            guild: b,
                        },
                        e.id,
                    );
                default:
                    (0, I.xb)(e.type);
            }
        },
        [b],
    );
    if (null == b) return null;
    if (0 === C.length) {
        let e = i ? c.A.unsafe_rawColors.PRIMARY_300.css : c.A.unsafe_rawColors.PRIMARY_500.css,
            t = i ? c.A.unsafe_rawColors.PRIMARY_700.css : c.A.unsafe_rawColors.PRIMARY_230.css;
        return (0, l.jsx)("div", {
            className: a()(z.Qs, J.Zc),
            children: (0, l.jsxs)("div", {
                className: J.do,
                children: [
                    (0, l.jsx)(B.A, {
                        className: J.Dw,
                        foregroundColor: e,
                        backgroundColor: t,
                    }),
                    (0, l.jsx)(o.Heading, {
                        className: J.jU,
                        variant: "heading-md/semibold",
                        children: Y.intl.string(Y.t.leKHQz),
                    }),
                    (0, l.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        children: Y.intl.format(Y.t["jH+ktB"], {
                            onBrowseChannels: m,
                        }),
                    }),
                ],
            }),
        });
    }
    return (0, l.jsxs)(o.T7Y, {
        className: J.XG,
        fade: !0,
        children: [
            (0, l.jsxs)("div", {
                className: J.kw,
                children: [
                    (y.length > 0 || v.length > 0) &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("div", {
                                    children: (0, l.jsx)(o.Heading, {
                                        variant: "heading-md/semibold",
                                        color: "text-strong",
                                        children: Y.intl.format(Y.t.iB5Gqe, {
                                            count: y.length + _,
                                        }),
                                    }),
                                }),
                                y.map(P),
                                v.map(P),
                                (0, l.jsx)("div", {
                                    className: J.DY,
                                }),
                            ],
                        }),
                    N.length > 0 &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(o.Heading, {
                                            variant: "heading-md/semibold",
                                            color: "text-strong",
                                            children: Y.intl.format(Y.t["8IV8K9"], {
                                                count: N.length,
                                            }),
                                        }),
                                        (0, l.jsx)(o.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: Y.intl.string(Y.t.Ecz7T9),
                                        }),
                                    ],
                                }),
                                N.map(P),
                            ],
                        }),
                    (0, l.jsx)(el, {
                        guild: b,
                    }),
                ],
            }),
            g &&
                (0, l.jsx)(et, {
                    guild: b,
                    user: p,
                }),
        ],
    });
}
