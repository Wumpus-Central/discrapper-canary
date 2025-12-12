n.d(t, { Z: () => ei }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(692547),
    c = n(780384),
    d = n(481060),
    u = n(45114),
    p = n(131388),
    h = n(493773),
    f = n(410030),
    m = n(100527),
    g = n(1585),
    _ = n(125988),
    x = n(160404),
    C = n(240991),
    b = n(402235),
    j = n(703656),
    v = n(687158),
    O = n(287008),
    y = n(484459),
    N = n(271383),
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
    Q = n(29858),
    Y = n(97009),
    K = n(430864);
function J(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let $ = d.EFr.SIZE_80,
    ee = "required";
function et(e) {
    var t, n, l;
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
        { avatarDecorationSrc: f } = (0, _.Z)({
            user: s,
            size: (0, g.y9)($),
            onlyAnimateOnHoverOrFocus: !p,
        }),
        m = (0, o.e7)([N.ZP], () => N.ZP.getSelfMember(i.id)),
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
                color: "text-strong",
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
                        ((n = J({}, u)),
                        (l = l =
                            {
                                children: (0, r.jsx)(B, {
                                    src: c,
                                    avatarDecoration: f,
                                    size: $,
                                    "aria-label": s.username,
                                }),
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
                        n),
                    ),
                    (0, r.jsx)(d.Text, {
                        variant: "text-lg/medium",
                        color: "text-strong",
                        className: Q.username,
                        children: null != (t = null == m ? void 0 : m.nick) ? t : E.ZP.getName(s),
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
                                                  var t;
                                                  return (0, r.jsxs)(
                                                      "div",
                                                      {
                                                          className: Q.role,
                                                          children: [
                                                              (0, r.jsx)(d.xko, {
                                                                  color: null != (t = e.colorString) ? t : q.Pbq,
                                                                  colors: Z ? e.colorStrings : null,
                                                                  className: Q.roleDot,
                                                              }),
                                                              (0, r.jsx)(d.Text, {
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
        [c, u] = l.useState(null),
        [p, h] = l.useState(new Set()),
        f = null == n || null == (t = n.options) ? void 0 : t.filter((e) => p.has(e.id)),
        m = (0, R.L6)(f),
        g = (0, R.dX)(f),
        _ = (0, o.Wu)([D.Z], () => D.Z.getOnboardingResponsesForPrompt(i.id, n.id)),
        { helpText: x, helpTextAdditional: C } = (0, L.p)({
            guild: i,
            prompt: n,
            selectedRoleIds: m,
            selectedChannelIds: g,
            itemHook: (e, t) =>
                (0, r.jsx)(
                    d.Text,
                    {
                        variant: "text-xs/medium",
                        color: "text-strong",
                        children: e,
                    },
                    t,
                ),
        }),
        { handleSelectOption: b } = (0, k.Z)(i.id),
        j = n.options.map((e) => J({ value: e.id }, e)),
        v = n.options.filter((e) => _.includes(e.id)).map((e) => e.id);
    return (0, r.jsxs)("div", {
        className: Q.prompt,
        "data-new": n.isNew,
        children: [
            n.isNew &&
                (0, r.jsx)(d.IGR, {
                    color: s.Z.unsafe_rawColors.BRAND_260.css,
                    text: X.intl.string(X.t.y2b7CA),
                    className: Q.newBadge,
                }),
            (0, r.jsxs)(d.Heading, {
                className: Q.promptTitle,
                variant: "heading-md/semibold",
                color: "text-strong",
                children: [
                    n.title,
                    n.required
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
                    let t = e.find((e) => !_.includes(e.id)),
                        r = e.map((e) => e.id);
                    if (null != t) b(n, t, !0), n.singleSelect && n.options.forEach((e) => p.delete(e.id)), p.add(t.id);
                    else {
                        let e = _.filter((e) => !r.includes(e)),
                            t = n.options.filter((t) => e.includes(t.id));
                        if (_.length <= t.length && n.required) return void u({ type: ee });
                        t.forEach((e) => {
                            b(n, e, !1), p.delete(e.id);
                        });
                    }
                    h(new Set(p)), u(null);
                },
                canBeNew: !n.isNew,
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
    let { guild: t } = e,
        n = (0, o.e7)([D.Z], () => D.Z.getConnections(t.id));
    return 0 === n.length
        ? null
        : (0, r.jsxs)("div", {
              className: Q.prompt,
              children: [
                  (0, r.jsx)(d.Heading, {
                      variant: "heading-md/semibold",
                      color: "text-strong",
                      children: X.intl.string(X.t.eDVMrA),
                  }),
                  (0, r.jsx)(d.Text, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: X.intl.string(X.t.BozOXu),
                  }),
                  (0, r.jsx)("div", {
                      className: Q.connectionsContainer,
                      children: n.map((e, n) =>
                          (0, r.jsx)(
                              M.Z,
                              {
                                  connection: e,
                                  guildId: t.id,
                                  location: m.Z.CHANNELS_AND_ROLES,
                              },
                              n,
                          ),
                      ),
                  }),
              ],
          });
}
function el(e) {
    var t;
    let { prompt: n, guild: i } = e,
        [c, u] = l.useState(null),
        [p, h] = l.useState(new Set()),
        f = null == n || null == (t = n.options) ? void 0 : t.filter((e) => p.has(e.id)),
        m = (0, R.L6)(f),
        g = (0, R.dX)(f),
        _ = (0, o.Wu)([D.Z], () => D.Z.getOnboardingResponsesForPrompt(i.id, n.id)),
        { helpText: x, helpTextAdditional: C } = (0, L.p)({
            guild: i,
            prompt: n,
            selectedRoleIds: m,
            selectedChannelIds: g,
            itemHook: (e, t) =>
                (0, r.jsx)(
                    d.Text,
                    {
                        variant: "text-xs/medium",
                        color: "text-strong",
                        children: e,
                    },
                    t,
                ),
        }),
        { handleSelectOption: b } = (0, k.Z)(i.id);
    return (0, r.jsxs)("div", {
        className: Q.prompt,
        "data-new": n.isNew,
        children: [
            n.isNew &&
                (0, r.jsx)(d.IGR, {
                    color: s.Z.unsafe_rawColors.BRAND_260.css,
                    text: X.intl.string(X.t.y2b7CA),
                    className: Q.newBadge,
                }),
            (0, r.jsxs)(d.Heading, {
                className: Q.promptTitle,
                variant: "heading-md/semibold",
                color: "text-strong",
                children: [
                    n.title,
                    n.required
                        ? (0, r.jsx)("span", {
                              className: a()(Q.required, { [Q.error]: (null == c ? void 0 : c.type) === ee }),
                              children: "*",
                          })
                        : null,
                ],
            }),
            (0, r.jsx)("div", {
                className: Q.promptOptions,
                children: n.options.map((e) =>
                    (0, r.jsx)(
                        G.Z,
                        {
                            hideMemberCount: !0,
                            guildId: i.id,
                            option: e,
                            onSelect: (t) =>
                                ((e, t) => {
                                    if (!t && 1 === _.length && n.required) return void u({ type: ee });
                                    b(n, e, null != t && t),
                                        n.singleSelect && t && n.options.forEach((e) => p.delete(e.id)),
                                        t ? p.add(e.id) : p.delete(e.id),
                                        h(new Set(p)),
                                        u(null);
                                })(e, t),
                            selected: _.includes(e.id),
                            canBeNew: !n.isNew,
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
    let { guildId: t, onBrowseChannels: n } = e,
        i = (0, c.wj)((0, f.ZP)()),
        h = (0, o.e7)([Z.Z], () => Z.Z.getGuild(t)),
        m = (0, o.e7)([P.default], () => P.default.getCurrentUser()),
        g = (0, p.Z)("(min-width: 1344px)") && null != m,
        _ = l.useCallback(() => {
            (0, j.uL)(q.Z5c.CHANNEL(t, z.oC.CHANNEL_BROWSER)), null == n || n();
        }, [t, n]),
        C = (0, o.e7)([I.ZP], () => I.ZP.hasUnread(t, V.W.GUILD_ONBOARDING_QUESTION)),
        {
            onboardingPromptsRaw: b,
            newOnboardingPrompts: v,
            onboardingPromptsWithNewAnswers: O,
            newAnswersCount: y,
            onboardingPrompts: N,
        } = (0, H.Z)(t);
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
                        en,
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
            t = i ? s.Z.unsafe_rawColors.PRIMARY_700.css : s.Z.unsafe_rawColors.PRIMARY_230.css;
        return (0, r.jsx)("div", {
            className: a()(Y.content, Q.emptyPage),
            children: (0, r.jsxs)("div", {
                className: Q.emptyContainer,
                children: [
                    (0, r.jsx)(U.Z, {
                        className: Q.emptyIcon,
                        foregroundColor: e,
                        backgroundColor: t,
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
                                        color: "text-strong",
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
                                            color: "text-strong",
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
                (0, r.jsx)(et, {
                    guild: h,
                    user: m,
                }),
        ],
    });
}
