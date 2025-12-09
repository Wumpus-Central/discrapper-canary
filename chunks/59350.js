t.d(n, { Z: () => ei }), t(388685);
var r = t(54381),
    l = t(473749),
    i = t(120356),
    a = t.n(i),
    o = t(442837),
    s = t(692547),
    c = t(780384),
    d = t(481060),
    u = t(45114),
    p = t(131388),
    h = t(493773),
    m = t(410030),
    f = t(100527),
    g = t(1585),
    _ = t(125988),
    x = t(160404),
    C = t(240991),
    b = t(402235),
    j = t(703656),
    v = t(687158),
    O = t(287008),
    y = t(484459),
    N = t(271383),
    w = t(485386),
    Z = t(430824),
    I = t(306680),
    P = t(594174),
    S = t(823379),
    E = t(51144),
    T = t(998502),
    B = t(549817),
    A = t(745752),
    D = t(45966),
    R = t(637853),
    k = t(905204),
    L = t(968644),
    H = t(521941),
    M = t(657021),
    U = t(614328),
    G = t(104265),
    W = t(588632),
    F = t(290511),
    q = t(981631),
    z = t(176505),
    V = t(490897),
    X = t(388032),
    Q = t(29858),
    Y = t(97009),
    K = t(430864);
function J(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = r);
            });
    }
    return e;
}
let $ = d.EFr.SIZE_80,
    ee = "required";
function en(e) {
    var n, t, l;
    let { guild: i, user: s } = e,
        {
            avatarSrc: c,
            eventHandlers: u,
            isAvatarAnimating: p,
        } = (0, O.Z)({
            user: s,
            guildId: i.id,
            size: 120,
        }),
        { avatarDecorationSrc: m } = (0, _.Z)({
            user: s,
            size: (0, g.y9)($),
            onlyAnimateOnHoverOrFocus: !p,
        }),
        f = (0, o.e7)([N.ZP], () => N.ZP.getSelfMember(i.id)),
        x = (0, o.Wu)([N.ZP], () => N.ZP.getMemberRoleWithPendingUpdates(i.id, s.id)),
        j = (0, o.e7)([w.Z], () => w.Z.getSortedRoles(i.id)),
        Z = (0, b.ZP)(i.id, s.id),
        I = j.filter((e) => x.includes(e.id)),
        P = (0, v.ZP)(s.id, i.id);
    (0, h.ZP)(() => {
        (0, y.Z)(s.id, s.getAvatarURL(i.id, (0, d.dcp)($)), { guildId: i.id });
    });
    let S = (0, C.parseBioReact)(null == P ? void 0 : P.bio),
        B = T.ZP.getEnableHardwareAcceleration() ? d.Xo$ : d.qEK;
    return (0, r.jsxs)("div", {
        className: Q.profile,
        children: [
            (0, r.jsx)(d.Heading, {
                variant: "heading-md/semibold",
                color: "header-primary",
                children: X.intl.string(X.t.diTbF8),
            }),
            (0, r.jsx)(d.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: X.intl.string(X.t["+8um3M"]),
            }),
            (0, r.jsxs)("div", {
                className: Q.profileCard,
                children: [
                    (0, r.jsx)(
                        "div",
                        ((t = J({}, u)),
                        (l = l =
                            {
                                children: (0, r.jsx)(B, {
                                    src: c,
                                    avatarDecoration: m,
                                    size: $,
                                    "aria-label": s.username,
                                }),
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
                        t),
                    ),
                    (0, r.jsx)(d.Text, {
                        variant: "text-lg/medium",
                        color: "header-primary",
                        className: Q.username,
                        children: null != (n = null == f ? void 0 : f.nick) ? n : E.ZP.getName(s),
                    }),
                    (0, r.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: a()(K.markup, Q.bio),
                        children: S,
                    }),
                    null != I &&
                        I.length > 0 &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("hr", { className: Q.separator }),
                                (0, r.jsx)(d.Text, {
                                    variant: "text-xs/semibold",
                                    color: "text-muted",
                                    className: Q.title,
                                    children: X.intl.string(X.t["LPJmL/"]),
                                }),
                                (0, r.jsx)("div", {
                                    className: Q.roles,
                                    children:
                                        null == I
                                            ? void 0
                                            : I.map((e) => {
                                                  var n;
                                                  return (0, r.jsxs)(
                                                      "div",
                                                      {
                                                          className: Q.role,
                                                          children: [
                                                              (0, r.jsx)(d.xko, {
                                                                  color: null != (n = e.colorString) ? n : q.Pbq,
                                                                  colors: Z ? e.colorStrings : null,
                                                                  className: Q.roleDot,
                                                              }),
                                                              (0, r.jsx)(d.Text, {
                                                                  variant: "text-xs/medium",
                                                                  color: "header-primary",
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
function et(e) {
    var n;
    let { prompt: t, guild: i } = e,
        [c, u] = l.useState(null),
        [p, h] = l.useState(new Set()),
        m = null == t || null == (n = t.options) ? void 0 : n.filter((e) => p.has(e.id)),
        f = (0, R.L6)(m),
        g = (0, R.dX)(m),
        _ = (0, o.Wu)([D.Z], () => D.Z.getOnboardingResponsesForPrompt(i.id, t.id)),
        { helpText: x, helpTextAdditional: C } = (0, L.p)({
            guild: i,
            prompt: t,
            selectedRoleIds: f,
            selectedChannelIds: g,
            itemHook: (e, n) =>
                (0, r.jsx)(
                    d.Text,
                    {
                        variant: "text-xs/medium",
                        color: "header-primary",
                        children: e,
                    },
                    n,
                ),
        }),
        { handleSelectOption: b } = (0, k.Z)(i.id),
        j = t.options.map((e) => J({ value: e.id }, e)),
        v = t.options.filter((e) => _.includes(e.id)).map((e) => e.id);
    return (0, r.jsxs)("div", {
        className: Q.prompt,
        "data-new": t.isNew,
        children: [
            t.isNew &&
                (0, r.jsx)(d.IGR, {
                    color: s.Z.unsafe_rawColors.BRAND_260.css,
                    text: X.intl.string(X.t.y2b7CA),
                    className: Q.newBadge,
                }),
            (0, r.jsxs)(d.Heading, {
                className: Q.promptTitle,
                variant: "heading-md/semibold",
                color: "header-primary",
                children: [
                    t.title,
                    t.required
                        ? (0, r.jsx)("span", {
                              className: a()(Q.required, { [Q.error]: (null == c ? void 0 : c.type) === ee }),
                              children: "*",
                          })
                        : null,
                ],
            }),
            (0, r.jsx)(W.Z, {
                options: j,
                value: v,
                onChange: (e) => {
                    let n = e.find((e) => !_.includes(e.id)),
                        r = e.map((e) => e.id);
                    if (null != n) b(t, n, !0), t.singleSelect && t.options.forEach((e) => p.delete(e.id)), p.add(n.id);
                    else {
                        let e = _.filter((e) => !r.includes(e)),
                            n = t.options.filter((n) => e.includes(n.id));
                        if (_.length <= n.length && t.required) return void u({ type: ee });
                        n.forEach((e) => {
                            b(t, e, !1), p.delete(e.id);
                        });
                    }
                    h(new Set(p)), u(null);
                },
                canBeNew: !t.isNew,
            }),
            (0, r.jsxs)(d.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: Q.helpText,
                children: [x, " ", C],
            }),
        ],
    });
}
function er(e) {
    let { guild: n } = e,
        t = (0, o.e7)([D.Z], () => D.Z.getConnections(n.id));
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: Q.prompt,
              children: [
                  (0, r.jsx)(d.Heading, {
                      variant: "heading-md/semibold",
                      color: "header-primary",
                      children: X.intl.string(X.t.eDVMrA),
                  }),
                  (0, r.jsx)(d.Text, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: X.intl.string(X.t.BozOXu),
                  }),
                  (0, r.jsx)("div", {
                      className: Q.connectionsContainer,
                      children: t.map((e, t) =>
                          (0, r.jsx)(
                              M.Z,
                              {
                                  connection: e,
                                  guildId: n.id,
                                  location: f.Z.CHANNELS_AND_ROLES,
                              },
                              t,
                          ),
                      ),
                  }),
              ],
          });
}
function el(e) {
    var n;
    let { prompt: t, guild: i } = e,
        [c, u] = l.useState(null),
        [p, h] = l.useState(new Set()),
        m = null == t || null == (n = t.options) ? void 0 : n.filter((e) => p.has(e.id)),
        f = (0, R.L6)(m),
        g = (0, R.dX)(m),
        _ = (0, o.Wu)([D.Z], () => D.Z.getOnboardingResponsesForPrompt(i.id, t.id)),
        { helpText: x, helpTextAdditional: C } = (0, L.p)({
            guild: i,
            prompt: t,
            selectedRoleIds: f,
            selectedChannelIds: g,
            itemHook: (e, n) =>
                (0, r.jsx)(
                    d.Text,
                    {
                        variant: "text-xs/medium",
                        color: "header-primary",
                        children: e,
                    },
                    n,
                ),
        }),
        { handleSelectOption: b } = (0, k.Z)(i.id);
    return (0, r.jsxs)("div", {
        className: Q.prompt,
        "data-new": t.isNew,
        children: [
            t.isNew &&
                (0, r.jsx)(d.IGR, {
                    color: s.Z.unsafe_rawColors.BRAND_260.css,
                    text: X.intl.string(X.t.y2b7CA),
                    className: Q.newBadge,
                }),
            (0, r.jsxs)(d.Heading, {
                className: Q.promptTitle,
                variant: "heading-md/semibold",
                color: "header-primary",
                children: [
                    t.title,
                    t.required
                        ? (0, r.jsx)("span", {
                              className: a()(Q.required, { [Q.error]: (null == c ? void 0 : c.type) === ee }),
                              children: "*",
                          })
                        : null,
                ],
            }),
            (0, r.jsx)("div", {
                className: Q.promptOptions,
                children: t.options.map((e) =>
                    (0, r.jsx)(
                        G.Z,
                        {
                            hideMemberCount: !0,
                            guildId: i.id,
                            option: e,
                            onSelect: (n) =>
                                ((e, n) => {
                                    if (!n && 1 === _.length && t.required) return void u({ type: ee });
                                    b(t, e, null != n && n),
                                        t.singleSelect && n && t.options.forEach((e) => p.delete(e.id)),
                                        n ? p.add(e.id) : p.delete(e.id),
                                        h(new Set(p)),
                                        u(null);
                                })(e, n),
                            selected: _.includes(e.id),
                            canBeNew: !t.isNew,
                        },
                        e.id,
                    ),
                ),
            }),
            (0, r.jsxs)(d.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: Q.helpText,
                children: [x, " ", C],
            }),
        ],
    });
}
function ei(e) {
    let { guildId: n, onBrowseChannels: t } = e,
        i = (0, c.wj)((0, m.ZP)()),
        h = (0, o.e7)([Z.Z], () => Z.Z.getGuild(n)),
        f = (0, o.e7)([P.default], () => P.default.getCurrentUser()),
        g = (0, p.Z)("(min-width: 1344px)") && null != f,
        _ = l.useCallback(() => {
            (0, j.uL)(q.Z5c.CHANNEL(n, z.oC.CHANNEL_BROWSER)), null == t || t();
        }, [n, t]),
        C = (0, o.e7)([I.ZP], () => I.ZP.hasUnread(n, V.W.GUILD_ONBOARDING_QUESTION)),
        {
            onboardingPromptsRaw: b,
            newOnboardingPrompts: v,
            onboardingPromptsWithNewAnswers: O,
            newAnswersCount: y,
            onboardingPrompts: N,
        } = (0, H.Z)(n);
    l.useEffect(() => {
        (null == h ? void 0 : h.id) != null &&
            !x.Z.isFullServerPreview(h.id) &&
            (D.Z.shouldFetchPrompts(h.id) || C) &&
            (0, A.eM)(h.id);
    }, [null == h ? void 0 : h.id, C]),
        l.useEffect(() => {
            if ((null == h ? void 0 : h.id) != null && !x.Z.isFullServerPreview(h.id))
                return () => {
                    (0, u.Ju)(h.id, V.W.GUILD_ONBOARDING_QUESTION, D.Z.ackIdForGuild(h.id)),
                        B.Z.updateOnboardingResponses(h.id);
                };
        }, [null == h ? void 0 : h.id]);
    let w = l.useCallback(
        (e) => {
            if (null == h) return null;
            switch (e.type) {
                case F.FN.MULTIPLE_CHOICE:
                    return (0, r.jsx)(
                        el,
                        {
                            prompt: e,
                            guild: h,
                        },
                        e.id,
                    );
                case F.FN.DROPDOWN:
                    return (0, r.jsx)(
                        et,
                        {
                            prompt: e,
                            guild: h,
                        },
                        e.id,
                    );
                default:
                    (0, S.vE)(e.type);
            }
        },
        [h],
    );
    if (null == h) return null;
    if (0 === b.length) {
        let e = i ? s.Z.unsafe_rawColors.PRIMARY_300.css : s.Z.unsafe_rawColors.PRIMARY_500.css,
            n = i ? s.Z.unsafe_rawColors.PRIMARY_700.css : s.Z.unsafe_rawColors.PRIMARY_230.css;
        return (0, r.jsx)("div", {
            className: a()(Y.content, Q.emptyPage),
            children: (0, r.jsxs)("div", {
                className: Q.emptyContainer,
                children: [
                    (0, r.jsx)(U.Z, {
                        className: Q.emptyIcon,
                        foregroundColor: e,
                        backgroundColor: n,
                    }),
                    (0, r.jsx)(d.Heading, {
                        className: Q.emptyHeader,
                        variant: "heading-md/semibold",
                        children: X.intl.string(X.t.leKHQz),
                    }),
                    (0, r.jsx)(d.Text, {
                        variant: "text-sm/medium",
                        children: X.intl.format(X.t["jH+ktB"], { onBrowseChannels: _ }),
                    }),
                ],
            }),
        });
    }
    return (0, r.jsxs)(d.Den, {
        className: Q.scroller,
        fade: !0,
        children: [
            (0, r.jsxs)("div", {
                className: Q.pageBody,
                children: [
                    (v.length > 0 || O.length > 0) &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("div", {
                                    children: (0, r.jsx)(d.Heading, {
                                        variant: "heading-md/semibold",
                                        color: "header-primary",
                                        children: X.intl.format(X.t.iB5Gqe, { count: v.length + y }),
                                    }),
                                }),
                                v.map(w),
                                O.map(w),
                                (0, r.jsx)("div", { className: Q.sectionSeparator }),
                            ],
                        }),
                    N.length > 0 &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)(d.Heading, {
                                            variant: "heading-md/semibold",
                                            color: "header-primary",
                                            children: X.intl.format(X.t["8IV8K9"], { count: N.length }),
                                        }),
                                        (0, r.jsx)(d.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: X.intl.string(X.t.Ecz7T9),
                                        }),
                                    ],
                                }),
                                N.map(w),
                            ],
                        }),
                    (0, r.jsx)(er, { guild: h }),
                ],
            }),
            g &&
                (0, r.jsx)(en, {
                    guild: h,
                    user: f,
                }),
        ],
    });
}
