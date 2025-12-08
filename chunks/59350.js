t.d(n, { Z: () => el }), t(388685);
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
    f = t(1585),
    g = t(125988),
    _ = t(160404),
    x = t(240991),
    C = t(402235),
    b = t(703656),
    j = t(687158),
    v = t(287008),
    O = t(484459),
    y = t(271383),
    N = t(485386),
    w = t(430824),
    Z = t(306680),
    I = t(594174),
    P = t(823379),
    S = t(51144),
    E = t(998502),
    T = t(549817),
    B = t(745752),
    D = t(45966),
    A = t(637853),
    R = t(905204),
    k = t(968644),
    L = t(521941),
    H = t(657021),
    M = t(614328),
    U = t(104265),
    G = t(588632),
    W = t(290511),
    F = t(981631),
    q = t(176505),
    z = t(490897),
    V = t(388032),
    X = t(29858),
    Q = t(97009),
    Y = t(430864);
function K(e) {
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
let J = d.EFr.SIZE_80,
    $ = "required";
function ee(e) {
    var n, t, l;
    let { guild: i, user: s } = e,
        {
            avatarSrc: c,
            eventHandlers: u,
            isAvatarAnimating: p,
        } = (0, v.Z)({
            user: s,
            guildId: i.id,
            size: 120,
        }),
        { avatarDecorationSrc: m } = (0, g.Z)({
            user: s,
            size: (0, f.y9)(J),
            onlyAnimateOnHoverOrFocus: !p,
        }),
        _ = (0, o.e7)([y.ZP], () => y.ZP.getSelfMember(i.id)),
        b = (0, o.Wu)([y.ZP], () => y.ZP.getMemberRoleWithPendingUpdates(i.id, s.id)),
        w = (0, o.e7)([N.Z], () => N.Z.getSortedRoles(i.id)),
        Z = (0, C.ZP)(i.id, s.id),
        I = w.filter((e) => b.includes(e.id)),
        P = (0, j.ZP)(s.id, i.id);
    (0, h.ZP)(() => {
        (0, O.Z)(s.id, s.getAvatarURL(i.id, (0, d.dcp)(J)), { guildId: i.id });
    });
    let T = (0, x.parseBioReact)(null == P ? void 0 : P.bio),
        B = E.ZP.getEnableHardwareAcceleration() ? d.Xo$ : d.qEK;
    return (0, r.jsxs)("div", {
        className: X.profile,
        children: [
            (0, r.jsx)(d.Heading, {
                variant: "heading-md/semibold",
                color: "header-primary",
                children: V.intl.string(V.t.diTbF8),
            }),
            (0, r.jsx)(d.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: V.intl.string(V.t["+8um3M"]),
            }),
            (0, r.jsxs)("div", {
                className: X.profileCard,
                children: [
                    (0, r.jsx)(
                        "div",
                        ((t = K({}, u)),
                        (l = l =
                            {
                                children: (0, r.jsx)(B, {
                                    src: c,
                                    avatarDecoration: m,
                                    size: J,
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
                        className: X.username,
                        children: null != (n = null == _ ? void 0 : _.nick) ? n : S.ZP.getName(s),
                    }),
                    (0, r.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: a()(Y.markup, X.bio),
                        children: T,
                    }),
                    null != I &&
                        I.length > 0 &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("hr", { className: X.separator }),
                                (0, r.jsx)(d.Text, {
                                    variant: "text-xs/semibold",
                                    color: "text-muted",
                                    className: X.title,
                                    children: V.intl.string(V.t["LPJmL/"]),
                                }),
                                (0, r.jsx)("div", {
                                    className: X.roles,
                                    children:
                                        null == I
                                            ? void 0
                                            : I.map((e) => {
                                                  var n;
                                                  return (0, r.jsxs)(
                                                      "div",
                                                      {
                                                          className: X.role,
                                                          children: [
                                                              (0, r.jsx)(d.xko, {
                                                                  color: null != (n = e.colorString) ? n : F.Pbq,
                                                                  colors: Z ? e.colorStrings : null,
                                                                  className: X.roleDot,
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
function en(e) {
    var n;
    let { prompt: t, guild: i } = e,
        [c, u] = l.useState(null),
        [p, h] = l.useState(new Set()),
        m = null == t || null == (n = t.options) ? void 0 : n.filter((e) => p.has(e.id)),
        f = (0, A.L6)(m),
        g = (0, A.dX)(m),
        _ = (0, o.Wu)([D.Z], () => D.Z.getOnboardingResponsesForPrompt(i.id, t.id)),
        { helpText: x, helpTextAdditional: C } = (0, k.p)({
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
        { handleSelectOption: b } = (0, R.Z)(i.id),
        j = t.options.map((e) => K({ value: e.id }, e)),
        v = t.options.filter((e) => _.includes(e.id)).map((e) => e.id);
    return (0, r.jsxs)("div", {
        className: X.prompt,
        "data-new": t.isNew,
        children: [
            t.isNew &&
                (0, r.jsx)(d.IGR, {
                    color: s.Z.unsafe_rawColors.BRAND_260.css,
                    text: V.intl.string(V.t.y2b7CA),
                    className: X.newBadge,
                }),
            (0, r.jsxs)(d.Heading, {
                className: X.promptTitle,
                variant: "heading-md/semibold",
                color: "header-primary",
                children: [
                    t.title,
                    t.required
                        ? (0, r.jsx)("span", {
                              className: a()(X.required, { [X.error]: (null == c ? void 0 : c.type) === $ }),
                              children: "*",
                          })
                        : null,
                ],
            }),
            (0, r.jsx)(G.Z, {
                options: j,
                value: v,
                onChange: (e) => {
                    let n = e.find((e) => !_.includes(e.id)),
                        r = e.map((e) => e.id);
                    if (null != n) b(t, n, !0), t.singleSelect && t.options.forEach((e) => p.delete(e.id)), p.add(n.id);
                    else {
                        let e = _.filter((e) => !r.includes(e)),
                            n = t.options.filter((n) => e.includes(n.id));
                        if (_.length <= n.length && t.required) return void u({ type: $ });
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
                className: X.helpText,
                children: [x, " ", C],
            }),
        ],
    });
}
function et(e) {
    let { guild: n } = e,
        t = (0, o.e7)([D.Z], () => D.Z.getConnections(n.id));
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: X.prompt,
              children: [
                  (0, r.jsx)(d.Heading, {
                      variant: "heading-md/semibold",
                      color: "header-primary",
                      children: V.intl.string(V.t.eDVMrA),
                  }),
                  (0, r.jsx)(d.Text, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: V.intl.string(V.t.BozOXu),
                  }),
                  (0, r.jsx)("div", {
                      className: X.connectionsContainer,
                      children: t.map((e, t) =>
                          (0, r.jsx)(
                              H.Z,
                              {
                                  connection: e,
                                  guildId: n.id,
                                  location: "channels-and-roles",
                              },
                              t,
                          ),
                      ),
                  }),
              ],
          });
}
function er(e) {
    var n;
    let { prompt: t, guild: i } = e,
        [c, u] = l.useState(null),
        [p, h] = l.useState(new Set()),
        m = null == t || null == (n = t.options) ? void 0 : n.filter((e) => p.has(e.id)),
        f = (0, A.L6)(m),
        g = (0, A.dX)(m),
        _ = (0, o.Wu)([D.Z], () => D.Z.getOnboardingResponsesForPrompt(i.id, t.id)),
        { helpText: x, helpTextAdditional: C } = (0, k.p)({
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
        { handleSelectOption: b } = (0, R.Z)(i.id);
    return (0, r.jsxs)("div", {
        className: X.prompt,
        "data-new": t.isNew,
        children: [
            t.isNew &&
                (0, r.jsx)(d.IGR, {
                    color: s.Z.unsafe_rawColors.BRAND_260.css,
                    text: V.intl.string(V.t.y2b7CA),
                    className: X.newBadge,
                }),
            (0, r.jsxs)(d.Heading, {
                className: X.promptTitle,
                variant: "heading-md/semibold",
                color: "header-primary",
                children: [
                    t.title,
                    t.required
                        ? (0, r.jsx)("span", {
                              className: a()(X.required, { [X.error]: (null == c ? void 0 : c.type) === $ }),
                              children: "*",
                          })
                        : null,
                ],
            }),
            (0, r.jsx)("div", {
                className: X.promptOptions,
                children: t.options.map((e) =>
                    (0, r.jsx)(
                        U.Z,
                        {
                            hideMemberCount: !0,
                            guildId: i.id,
                            option: e,
                            onSelect: (n) =>
                                ((e, n) => {
                                    if (!n && 1 === _.length && t.required) return void u({ type: $ });
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
                className: X.helpText,
                children: [x, " ", C],
            }),
        ],
    });
}
function el(e) {
    let { guildId: n, onBrowseChannels: t } = e,
        i = (0, c.wj)((0, m.ZP)()),
        h = (0, o.e7)([w.Z], () => w.Z.getGuild(n)),
        f = (0, o.e7)([I.default], () => I.default.getCurrentUser()),
        g = (0, p.Z)("(min-width: 1344px)") && null != f,
        x = l.useCallback(() => {
            (0, b.uL)(F.Z5c.CHANNEL(n, q.oC.CHANNEL_BROWSER)), null == t || t();
        }, [n, t]),
        C = (0, o.e7)([Z.ZP], () => Z.ZP.hasUnread(n, z.W.GUILD_ONBOARDING_QUESTION)),
        {
            onboardingPromptsRaw: j,
            newOnboardingPrompts: v,
            onboardingPromptsWithNewAnswers: O,
            newAnswersCount: y,
            onboardingPrompts: N,
        } = (0, L.Z)(n);
    l.useEffect(() => {
        (null == h ? void 0 : h.id) != null &&
            !_.Z.isFullServerPreview(h.id) &&
            (D.Z.shouldFetchPrompts(h.id) || C) &&
            (0, B.eM)(h.id);
    }, [null == h ? void 0 : h.id, C]),
        l.useEffect(() => {
            if ((null == h ? void 0 : h.id) != null && !_.Z.isFullServerPreview(h.id))
                return () => {
                    (0, u.Ju)(h.id, z.W.GUILD_ONBOARDING_QUESTION, D.Z.ackIdForGuild(h.id)),
                        T.Z.updateOnboardingResponses(h.id);
                };
        }, [null == h ? void 0 : h.id]);
    let S = l.useCallback(
        (e) => {
            if (null == h) return null;
            switch (e.type) {
                case W.FN.MULTIPLE_CHOICE:
                    return (0, r.jsx)(
                        er,
                        {
                            prompt: e,
                            guild: h,
                        },
                        e.id,
                    );
                case W.FN.DROPDOWN:
                    return (0, r.jsx)(
                        en,
                        {
                            prompt: e,
                            guild: h,
                        },
                        e.id,
                    );
                default:
                    (0, P.vE)(e.type);
            }
        },
        [h],
    );
    if (null == h) return null;
    if (0 === j.length) {
        let e = i ? s.Z.unsafe_rawColors.PRIMARY_300.css : s.Z.unsafe_rawColors.PRIMARY_500.css,
            n = i ? s.Z.unsafe_rawColors.PRIMARY_700.css : s.Z.unsafe_rawColors.PRIMARY_230.css;
        return (0, r.jsx)("div", {
            className: a()(Q.content, X.emptyPage),
            children: (0, r.jsxs)("div", {
                className: X.emptyContainer,
                children: [
                    (0, r.jsx)(M.Z, {
                        className: X.emptyIcon,
                        foregroundColor: e,
                        backgroundColor: n,
                    }),
                    (0, r.jsx)(d.Heading, {
                        className: X.emptyHeader,
                        variant: "heading-md/semibold",
                        children: V.intl.string(V.t.leKHQz),
                    }),
                    (0, r.jsx)(d.Text, {
                        variant: "text-sm/medium",
                        children: V.intl.format(V.t["jH+ktB"], { onBrowseChannels: x }),
                    }),
                ],
            }),
        });
    }
    return (0, r.jsxs)(d.Den, {
        className: X.scroller,
        fade: !0,
        children: [
            (0, r.jsxs)("div", {
                className: X.pageBody,
                children: [
                    (v.length > 0 || O.length > 0) &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("div", {
                                    children: (0, r.jsx)(d.Heading, {
                                        variant: "heading-md/semibold",
                                        color: "header-primary",
                                        children: V.intl.format(V.t.iB5Gqe, { count: v.length + y }),
                                    }),
                                }),
                                v.map(S),
                                O.map(S),
                                (0, r.jsx)("div", { className: X.sectionSeparator }),
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
                                            children: V.intl.format(V.t["8IV8K9"], { count: N.length }),
                                        }),
                                        (0, r.jsx)(d.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: V.intl.string(V.t.Ecz7T9),
                                        }),
                                    ],
                                }),
                                N.map(S),
                            ],
                        }),
                    (0, r.jsx)(et, { guild: h }),
                ],
            }),
            g &&
                (0, r.jsx)(ee, {
                    guild: h,
                    user: f,
                }),
        ],
    });
}
