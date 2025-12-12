n.d(t, { Z: () => el }), n(388685);
var a = n(54381),
    r = n(473749),
    l = n(120356),
    i = n.n(l),
    o = n(442837),
    c = n(692547),
    d = n(780384),
    s = n(481060),
    u = n(45114),
    b = n(131388),
    p = n(493773),
    f = n(410030),
    h = n(100527),
    m = n(1585),
    g = n(125988),
    x = n(160404),
    C = n(240991),
    j = n(402235),
    v = n(703656),
    O = n(687158),
    y = n(287008),
    N = n(484459),
    _ = n(271383),
    w = n(485386),
    Z = n(430824),
    I = n(306680),
    P = n(594174),
    S = n(823379),
    E = n(51144),
    T = n(998502),
    B = n(549817),
    A = n(745752),
    D = n(45966),
    R = n(637853),
    k = n(905204),
    L = n(968644),
    H = n(521941),
    M = n(657021),
    U = n(614328),
    G = n(104265),
    W = n(588632),
    F = n(290511),
    q = n(981631),
    z = n(176505),
    V = n(490897),
    X = n(388032),
    Q = n(811100),
    Y = n(978966),
    K = n(960324);
function J(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
let $ = s.EFr.SIZE_80,
    ee = "required";
function et(e) {
    var t, n, r;
    let { guild: l, user: c } = e,
        {
            avatarSrc: d,
            eventHandlers: u,
            isAvatarAnimating: b,
        } = (0, y.Z)({
            user: c,
            guildId: l.id,
            size: 120,
        }),
        { avatarDecorationSrc: f } = (0, g.Z)({
            user: c,
            size: (0, m.y9)($),
            onlyAnimateOnHoverOrFocus: !b,
        }),
        h = (0, o.e7)([_.ZP], () => _.ZP.getSelfMember(l.id)),
        x = (0, o.Wu)([_.ZP], () => _.ZP.getMemberRoleWithPendingUpdates(l.id, c.id)),
        v = (0, o.e7)([w.Z], () => w.Z.getSortedRoles(l.id)),
        Z = (0, j.ZP)(l.id, c.id),
        I = v.filter((e) => x.includes(e.id)),
        P = (0, O.ZP)(c.id, l.id);
    (0, p.ZP)(() => {
        (0, N.Z)(c.id, c.getAvatarURL(l.id, (0, s.dcp)($)), { guildId: l.id });
    });
    let S = (0, C.parseBioReact)(null == P ? void 0 : P.bio),
        B = T.ZP.getEnableHardwareAcceleration() ? s.Xo$ : s.qEK;
    return (0, a.jsxs)("div", {
        className: Q.profile,
        children: [
            (0, a.jsx)(s.Heading, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: X.intl.string(X.t.diTbF8),
            }),
            (0, a.jsx)(s.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: X.intl.string(X.t["+8um3M"]),
            }),
            (0, a.jsxs)("div", {
                className: Q.profileCard,
                children: [
                    (0, a.jsx)(
                        "div",
                        ((n = J({}, u)),
                        (r = r =
                            {
                                children: (0, a.jsx)(B, {
                                    src: d,
                                    avatarDecoration: f,
                                    size: $,
                                    "aria-label": c.username,
                                }),
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var a = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, a);
                                  }
                                  return n;
                              })(Object(r)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                              }),
                        n),
                    ),
                    (0, a.jsx)(s.Text, {
                        variant: "text-lg/medium",
                        color: "text-strong",
                        className: Q.username,
                        children: null != (t = null == h ? void 0 : h.nick) ? t : E.ZP.getName(c),
                    }),
                    (0, a.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: i()(K.markup, Q.bio),
                        children: S,
                    }),
                    null != I &&
                        I.length > 0 &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)("hr", { className: Q.separator }),
                                (0, a.jsx)(s.Text, {
                                    variant: "text-xs/semibold",
                                    color: "text-muted",
                                    className: Q.title,
                                    children: X.intl.string(X.t["LPJmL/"]),
                                }),
                                (0, a.jsx)("div", {
                                    className: Q.roles,
                                    children:
                                        null == I
                                            ? void 0
                                            : I.map((e) => {
                                                  var t;
                                                  return (0, a.jsxs)(
                                                      "div",
                                                      {
                                                          className: Q.role,
                                                          children: [
                                                              (0, a.jsx)(s.xko, {
                                                                  color: null != (t = e.colorString) ? t : q.Pbq,
                                                                  colors: Z ? e.colorStrings : null,
                                                                  className: Q.roleDot,
                                                              }),
                                                              (0, a.jsx)(s.Text, {
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
    let { prompt: n, guild: l } = e,
        [d, u] = r.useState(null),
        [b, p] = r.useState(new Set()),
        f = null == n || null == (t = n.options) ? void 0 : t.filter((e) => b.has(e.id)),
        h = (0, R.L6)(f),
        m = (0, R.dX)(f),
        g = (0, o.Wu)([D.Z], () => D.Z.getOnboardingResponsesForPrompt(l.id, n.id)),
        { helpText: x, helpTextAdditional: C } = (0, L.p)({
            guild: l,
            prompt: n,
            selectedRoleIds: h,
            selectedChannelIds: m,
            itemHook: (e, t) =>
                (0, a.jsx)(
                    s.Text,
                    {
                        variant: "text-xs/medium",
                        color: "text-strong",
                        children: e,
                    },
                    t,
                ),
        }),
        { handleSelectOption: j } = (0, k.Z)(l.id),
        v = n.options.map((e) => J({ value: e.id }, e)),
        O = n.options.filter((e) => g.includes(e.id)).map((e) => e.id);
    return (0, a.jsxs)("div", {
        className: Q.prompt,
        "data-new": n.isNew,
        children: [
            n.isNew &&
                (0, a.jsx)(s.IGR, {
                    color: c.Z.unsafe_rawColors.BRAND_260.css,
                    text: X.intl.string(X.t.y2b7CA),
                    className: Q.newBadge,
                }),
            (0, a.jsxs)(s.Heading, {
                className: Q.promptTitle,
                variant: "heading-md/semibold",
                color: "text-strong",
                children: [
                    n.title,
                    n.required
                        ? (0, a.jsx)("span", {
                              className: i()(Q.required, { [Q.error]: (null == d ? void 0 : d.type) === ee }),
                              children: "*",
                          })
                        : null,
                ],
            }),
            (0, a.jsx)(W.Z, {
                options: v,
                value: O,
                onChange: (e) => {
                    let t = e.find((e) => !g.includes(e.id)),
                        a = e.map((e) => e.id);
                    if (null != t) j(n, t, !0), n.singleSelect && n.options.forEach((e) => b.delete(e.id)), b.add(t.id);
                    else {
                        let e = g.filter((e) => !a.includes(e)),
                            t = n.options.filter((t) => e.includes(t.id));
                        if (g.length <= t.length && n.required) return void u({ type: ee });
                        t.forEach((e) => {
                            j(n, e, !1), b.delete(e.id);
                        });
                    }
                    p(new Set(b)), u(null);
                },
                canBeNew: !n.isNew,
            }),
            (0, a.jsxs)(s.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: Q.helpText,
                children: [x, " ", C],
            }),
        ],
    });
}
function ea(e) {
    let { guild: t } = e,
        n = (0, o.e7)([D.Z], () => D.Z.getConnections(t.id));
    return 0 === n.length
        ? null
        : (0, a.jsxs)("div", {
              className: Q.prompt,
              children: [
                  (0, a.jsx)(s.Heading, {
                      variant: "heading-md/semibold",
                      color: "text-strong",
                      children: X.intl.string(X.t.eDVMrA),
                  }),
                  (0, a.jsx)(s.Text, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: X.intl.string(X.t.BozOXu),
                  }),
                  (0, a.jsx)("div", {
                      className: Q.connectionsContainer,
                      children: n.map((e, n) =>
                          (0, a.jsx)(
                              M.Z,
                              {
                                  connection: e,
                                  guildId: t.id,
                                  location: h.Z.CHANNELS_AND_ROLES,
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
    let { prompt: n, guild: l } = e,
        [d, u] = r.useState(null),
        [b, p] = r.useState(new Set()),
        f = null == n || null == (t = n.options) ? void 0 : t.filter((e) => b.has(e.id)),
        h = (0, R.L6)(f),
        m = (0, R.dX)(f),
        g = (0, o.Wu)([D.Z], () => D.Z.getOnboardingResponsesForPrompt(l.id, n.id)),
        { helpText: x, helpTextAdditional: C } = (0, L.p)({
            guild: l,
            prompt: n,
            selectedRoleIds: h,
            selectedChannelIds: m,
            itemHook: (e, t) =>
                (0, a.jsx)(
                    s.Text,
                    {
                        variant: "text-xs/medium",
                        color: "text-strong",
                        children: e,
                    },
                    t,
                ),
        }),
        { handleSelectOption: j } = (0, k.Z)(l.id);
    return (0, a.jsxs)("div", {
        className: Q.prompt,
        "data-new": n.isNew,
        children: [
            n.isNew &&
                (0, a.jsx)(s.IGR, {
                    color: c.Z.unsafe_rawColors.BRAND_260.css,
                    text: X.intl.string(X.t.y2b7CA),
                    className: Q.newBadge,
                }),
            (0, a.jsxs)(s.Heading, {
                className: Q.promptTitle,
                variant: "heading-md/semibold",
                color: "text-strong",
                children: [
                    n.title,
                    n.required
                        ? (0, a.jsx)("span", {
                              className: i()(Q.required, { [Q.error]: (null == d ? void 0 : d.type) === ee }),
                              children: "*",
                          })
                        : null,
                ],
            }),
            (0, a.jsx)("div", {
                className: Q.promptOptions,
                children: n.options.map((e) =>
                    (0, a.jsx)(
                        G.Z,
                        {
                            hideMemberCount: !0,
                            guildId: l.id,
                            option: e,
                            onSelect: (t) =>
                                ((e, t) => {
                                    if (!t && 1 === g.length && n.required) return void u({ type: ee });
                                    j(n, e, null != t && t),
                                        n.singleSelect && t && n.options.forEach((e) => b.delete(e.id)),
                                        t ? b.add(e.id) : b.delete(e.id),
                                        p(new Set(b)),
                                        u(null);
                                })(e, t),
                            selected: g.includes(e.id),
                            canBeNew: !n.isNew,
                        },
                        e.id,
                    ),
                ),
            }),
            (0, a.jsxs)(s.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: Q.helpText,
                children: [x, " ", C],
            }),
        ],
    });
}
function el(e) {
    let { guildId: t, onBrowseChannels: n } = e,
        l = (0, d.wj)((0, f.ZP)()),
        p = (0, o.e7)([Z.Z], () => Z.Z.getGuild(t)),
        h = (0, o.e7)([P.default], () => P.default.getCurrentUser()),
        m = (0, b.Z)("(min-width: 1344px)") && null != h,
        g = r.useCallback(() => {
            (0, v.uL)(q.Z5c.CHANNEL(t, z.oC.CHANNEL_BROWSER)), null == n || n();
        }, [t, n]),
        C = (0, o.e7)([I.ZP], () => I.ZP.hasUnread(t, V.W.GUILD_ONBOARDING_QUESTION)),
        {
            onboardingPromptsRaw: j,
            newOnboardingPrompts: O,
            onboardingPromptsWithNewAnswers: y,
            newAnswersCount: N,
            onboardingPrompts: _,
        } = (0, H.Z)(t);
    r.useEffect(() => {
        (null == p ? void 0 : p.id) != null &&
            !x.Z.isFullServerPreview(p.id) &&
            (D.Z.shouldFetchPrompts(p.id) || C) &&
            (0, A.eM)(p.id);
    }, [null == p ? void 0 : p.id, C]),
        r.useEffect(() => {
            if ((null == p ? void 0 : p.id) != null && !x.Z.isFullServerPreview(p.id))
                return () => {
                    (0, u.Ju)(p.id, V.W.GUILD_ONBOARDING_QUESTION, D.Z.ackIdForGuild(p.id)),
                        B.Z.updateOnboardingResponses(p.id);
                };
        }, [null == p ? void 0 : p.id]);
    let w = r.useCallback(
        (e) => {
            if (null == p) return null;
            switch (e.type) {
                case F.FN.MULTIPLE_CHOICE:
                    return (0, a.jsx)(
                        er,
                        {
                            prompt: e,
                            guild: p,
                        },
                        e.id,
                    );
                case F.FN.DROPDOWN:
                    return (0, a.jsx)(
                        en,
                        {
                            prompt: e,
                            guild: p,
                        },
                        e.id,
                    );
                default:
                    (0, S.vE)(e.type);
            }
        },
        [p],
    );
    if (null == p) return null;
    if (0 === j.length) {
        let e = l ? c.Z.unsafe_rawColors.PRIMARY_300.css : c.Z.unsafe_rawColors.PRIMARY_500.css,
            t = l ? c.Z.unsafe_rawColors.PRIMARY_700.css : c.Z.unsafe_rawColors.PRIMARY_230.css;
        return (0, a.jsx)("div", {
            className: i()(Y.content, Q.emptyPage),
            children: (0, a.jsxs)("div", {
                className: Q.emptyContainer,
                children: [
                    (0, a.jsx)(U.Z, {
                        className: Q.emptyIcon,
                        foregroundColor: e,
                        backgroundColor: t,
                    }),
                    (0, a.jsx)(s.Heading, {
                        className: Q.emptyHeader,
                        variant: "heading-md/semibold",
                        children: X.intl.string(X.t.leKHQz),
                    }),
                    (0, a.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        children: X.intl.format(X.t["jH+ktB"], { onBrowseChannels: g }),
                    }),
                ],
            }),
        });
    }
    return (0, a.jsxs)(s.Den, {
        className: Q.scroller,
        fade: !0,
        children: [
            (0, a.jsxs)("div", {
                className: Q.pageBody,
                children: [
                    (O.length > 0 || y.length > 0) &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)("div", {
                                    children: (0, a.jsx)(s.Heading, {
                                        variant: "heading-md/semibold",
                                        color: "text-strong",
                                        children: X.intl.format(X.t.iB5Gqe, { count: O.length + N }),
                                    }),
                                }),
                                O.map(w),
                                y.map(w),
                                (0, a.jsx)("div", { className: Q.sectionSeparator }),
                            ],
                        }),
                    _.length > 0 &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsxs)("div", {
                                    children: [
                                        (0, a.jsx)(s.Heading, {
                                            variant: "heading-md/semibold",
                                            color: "text-strong",
                                            children: X.intl.format(X.t["8IV8K9"], { count: _.length }),
                                        }),
                                        (0, a.jsx)(s.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: X.intl.string(X.t.Ecz7T9),
                                        }),
                                    ],
                                }),
                                _.map(w),
                            ],
                        }),
                    (0, a.jsx)(ea, { guild: p }),
                ],
            }),
            m &&
                (0, a.jsx)(et, {
                    guild: p,
                    user: h,
                }),
        ],
    });
}
