t.d(n, { Z: () => el }), t(388685);
var r = t(951288),
    l = t(647438),
    i = t(120356),
    a = t.n(i),
    o = t(442837),
    s = t(780384),
    c = t(481060),
    d = t(45114),
    u = t(131388),
    p = t(493773),
    h = t(410030),
    m = t(1585),
    f = t(125988),
    g = t(44315),
    _ = t(160404),
    x = t(240991),
    b = t(402235),
    C = t(703656),
    j = t(687158),
    O = t(287008),
    v = t(484459),
    y = t(271383),
    N = t(485386),
    I = t(430824),
    w = t(306680),
    Z = t(594174),
    P = t(823379),
    S = t(51144),
    E = t(998502),
    T = t(549817),
    B = t(745752),
    A = t(45966),
    k = t(637853),
    D = t(905204),
    R = t(968644),
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
let J = c.EFr.SIZE_80,
    $ = "required";
function ee(e) {
    var n, t, l;
    let { guild: i, user: s } = e,
        {
            avatarSrc: d,
            eventHandlers: u,
            isAvatarAnimating: h,
        } = (0, O.Z)({
            user: s,
            guildId: i.id,
            size: 120,
        }),
        { avatarDecorationSrc: g } = (0, f.Z)({
            user: s,
            size: (0, m.y9)(J),
            onlyAnimateOnHoverOrFocus: !h,
        }),
        _ = (0, o.e7)([y.ZP], () => y.ZP.getSelfMember(i.id)),
        C = (0, o.Wu)([y.ZP], () => y.ZP.getMemberRoleWithPendingUpdates(i.id, s.id)),
        I = (0, o.e7)([N.Z], () => N.Z.getSortedRoles(i.id)),
        w = (0, b.ZP)(i.id, s.id),
        Z = I.filter((e) => C.includes(e.id)),
        P = (0, j.ZP)(s.id, i.id);
    (0, p.ZP)(() => {
        (0, v.Z)(s.id, s.getAvatarURL(i.id, (0, c.pxk)(J)), { guildId: i.id });
    });
    let T = (0, x.parseBioReact)(null == P ? void 0 : P.bio),
        B = E.ZP.getEnableHardwareAcceleration() ? c.Xo$ : c.qEK;
    return (0, r.jsxs)("div", {
        className: X.profile,
        children: [
            (0, r.jsx)(c.Heading, {
                variant: "heading-md/semibold",
                color: "header-primary",
                children: V.intl.string(V.t.diTbF8),
            }),
            (0, r.jsx)(c.Text, {
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
                                    src: d,
                                    avatarDecoration: g,
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
                    (0, r.jsx)(c.Text, {
                        variant: "text-lg/medium",
                        color: "header-primary",
                        className: X.username,
                        children: null != (n = null == _ ? void 0 : _.nick) ? n : S.ZP.getName(s),
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: a()(Y.markup, X.bio),
                        children: T,
                    }),
                    null != Z &&
                        Z.length > 0 &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("hr", { className: X.separator }),
                                (0, r.jsx)(c.Text, {
                                    variant: "text-xs/semibold",
                                    color: "text-muted",
                                    className: X.title,
                                    children: V.intl.string(V.t["LPJmL/"]),
                                }),
                                (0, r.jsx)("div", {
                                    className: X.roles,
                                    children:
                                        null == Z
                                            ? void 0
                                            : Z.map((e) => {
                                                  var n;
                                                  return (0, r.jsxs)(
                                                      "div",
                                                      {
                                                          className: X.role,
                                                          children: [
                                                              (0, r.jsx)(c.xko, {
                                                                  color: null != (n = e.colorString) ? n : F.Pbq,
                                                                  colors: w ? e.colorStrings : null,
                                                                  className: X.roleDot,
                                                              }),
                                                              (0, r.jsx)(c.Text, {
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
        [s, d] = l.useState(null),
        [u, p] = l.useState(new Set()),
        h = null == t || null == (n = t.options) ? void 0 : n.filter((e) => u.has(e.id)),
        m = (0, k.L6)(h),
        f = (0, k.dX)(h),
        _ = (0, o.Wu)([A.Z], () => A.Z.getOnboardingResponsesForPrompt(i.id, t.id)),
        { helpText: x, helpTextAdditional: b } = (0, R.p)({
            guild: i,
            prompt: t,
            selectedRoleIds: m,
            selectedChannelIds: f,
            itemHook: (e, n) =>
                (0, r.jsx)(
                    c.Text,
                    {
                        variant: "text-xs/medium",
                        color: "header-primary",
                        children: e,
                    },
                    n,
                ),
        }),
        { handleSelectOption: C } = (0, D.Z)(i.id),
        j = t.options.map((e) => K({ value: e.id }, e)),
        O = t.options.filter((e) => _.includes(e.id)).map((e) => e.id);
    return (0, r.jsxs)("div", {
        className: X.prompt,
        "data-new": t.isNew,
        children: [
            t.isNew &&
                (0, r.jsx)(c.IGR, {
                    color: (0, g.Lq)(F.Ilk.BRAND_260),
                    text: V.intl.string(V.t.y2b7CA),
                    className: X.newBadge,
                }),
            (0, r.jsxs)(c.Heading, {
                className: X.promptTitle,
                variant: "heading-md/semibold",
                color: "header-primary",
                children: [
                    t.title,
                    t.required
                        ? (0, r.jsx)("span", {
                              className: a()(X.required, { [X.error]: (null == s ? void 0 : s.type) === $ }),
                              children: "*",
                          })
                        : null,
                ],
            }),
            (0, r.jsx)(G.Z, {
                options: j,
                value: O,
                onChange: (e) => {
                    let n = e.find((e) => !_.includes(e.id)),
                        r = e.map((e) => e.id);
                    if (null != n) C(t, n, !0), t.singleSelect && t.options.forEach((e) => u.delete(e.id)), u.add(n.id);
                    else {
                        let e = _.filter((e) => !r.includes(e)),
                            n = t.options.filter((n) => e.includes(n.id));
                        if (_.length <= n.length && t.required) return void d({ type: $ });
                        n.forEach((e) => {
                            C(t, e, !1), u.delete(e.id);
                        });
                    }
                    p(new Set(u)), d(null);
                },
                canBeNew: !t.isNew,
            }),
            (0, r.jsxs)(c.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: X.helpText,
                children: [x, " ", b],
            }),
        ],
    });
}
function et(e) {
    let { guild: n } = e,
        t = (0, o.e7)([A.Z], () => A.Z.getConnections(n.id));
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: X.prompt,
              children: [
                  (0, r.jsx)(c.Heading, {
                      variant: "heading-md/semibold",
                      color: "header-primary",
                      children: V.intl.string(V.t.eDVMrA),
                  }),
                  (0, r.jsx)(c.Text, {
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
        [s, d] = l.useState(null),
        [u, p] = l.useState(new Set()),
        h = null == t || null == (n = t.options) ? void 0 : n.filter((e) => u.has(e.id)),
        m = (0, k.L6)(h),
        f = (0, k.dX)(h),
        _ = (0, o.Wu)([A.Z], () => A.Z.getOnboardingResponsesForPrompt(i.id, t.id)),
        { helpText: x, helpTextAdditional: b } = (0, R.p)({
            guild: i,
            prompt: t,
            selectedRoleIds: m,
            selectedChannelIds: f,
            itemHook: (e, n) =>
                (0, r.jsx)(
                    c.Text,
                    {
                        variant: "text-xs/medium",
                        color: "header-primary",
                        children: e,
                    },
                    n,
                ),
        }),
        { handleSelectOption: C } = (0, D.Z)(i.id);
    return (0, r.jsxs)("div", {
        className: X.prompt,
        "data-new": t.isNew,
        children: [
            t.isNew &&
                (0, r.jsx)(c.IGR, {
                    color: (0, g.Lq)(F.Ilk.BRAND_260),
                    text: V.intl.string(V.t.y2b7CA),
                    className: X.newBadge,
                }),
            (0, r.jsxs)(c.Heading, {
                className: X.promptTitle,
                variant: "heading-md/semibold",
                color: "header-primary",
                children: [
                    t.title,
                    t.required
                        ? (0, r.jsx)("span", {
                              className: a()(X.required, { [X.error]: (null == s ? void 0 : s.type) === $ }),
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
                                    if (!n && 1 === _.length && t.required) return void d({ type: $ });
                                    C(t, e, null != n && n),
                                        t.singleSelect && n && t.options.forEach((e) => u.delete(e.id)),
                                        n ? u.add(e.id) : u.delete(e.id),
                                        p(new Set(u)),
                                        d(null);
                                })(e, n),
                            selected: _.includes(e.id),
                            canBeNew: !t.isNew,
                        },
                        e.id,
                    ),
                ),
            }),
            (0, r.jsxs)(c.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: X.helpText,
                children: [x, " ", b],
            }),
        ],
    });
}
function el(e) {
    let { guildId: n, onBrowseChannels: t } = e,
        i = (0, s.wj)((0, h.ZP)()),
        p = (0, o.e7)([I.Z], () => I.Z.getGuild(n)),
        m = (0, o.e7)([Z.default], () => Z.default.getCurrentUser()),
        f = (0, u.Z)("(min-width: 1344px)") && null != m,
        x = l.useCallback(() => {
            (0, C.uL)(F.Z5c.CHANNEL(n, q.oC.CHANNEL_BROWSER)), null == t || t();
        }, [n, t]),
        b = (0, o.e7)([w.ZP], () => w.ZP.hasUnread(n, z.W.GUILD_ONBOARDING_QUESTION)),
        {
            onboardingPromptsRaw: j,
            newOnboardingPrompts: O,
            onboardingPromptsWithNewAnswers: v,
            newAnswersCount: y,
            onboardingPrompts: N,
        } = (0, L.Z)(n);
    l.useEffect(() => {
        (null == p ? void 0 : p.id) != null &&
            !_.Z.isFullServerPreview(p.id) &&
            (A.Z.shouldFetchPrompts(p.id) || b) &&
            (0, B.eM)(p.id);
    }, [null == p ? void 0 : p.id, b]),
        l.useEffect(() => {
            if ((null == p ? void 0 : p.id) != null && !_.Z.isFullServerPreview(p.id))
                return () => {
                    (0, d.Ju)(p.id, z.W.GUILD_ONBOARDING_QUESTION, A.Z.ackIdForGuild(p.id)),
                        T.Z.updateOnboardingResponses(p.id);
                };
        }, [null == p ? void 0 : p.id]);
    let S = l.useCallback(
        (e) => {
            if (null == p) return null;
            switch (e.type) {
                case W.FN.MULTIPLE_CHOICE:
                    return (0, r.jsx)(
                        er,
                        {
                            prompt: e,
                            guild: p,
                        },
                        e.id,
                    );
                case W.FN.DROPDOWN:
                    return (0, r.jsx)(
                        en,
                        {
                            prompt: e,
                            guild: p,
                        },
                        e.id,
                    );
                default:
                    (0, P.vE)(e.type);
            }
        },
        [p],
    );
    if (null == p) return null;
    if (0 === j.length) {
        let e = (0, g.Lq)(i ? F.Ilk.PRIMARY_300 : F.Ilk.PRIMARY_500),
            n = (0, g.Lq)(i ? F.Ilk.PRIMARY_700 : F.Ilk.PRIMARY_230);
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
                    (0, r.jsx)(c.Heading, {
                        className: X.emptyHeader,
                        variant: "heading-md/semibold",
                        children: V.intl.string(V.t.leKHQz),
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        children: V.intl.format(V.t["jH+ktB"], { onBrowseChannels: x }),
                    }),
                ],
            }),
        });
    }
    return (0, r.jsxs)(c.Den, {
        className: X.scroller,
        fade: !0,
        children: [
            (0, r.jsxs)("div", {
                className: X.pageBody,
                children: [
                    (O.length > 0 || v.length > 0) &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("div", {
                                    children: (0, r.jsx)(c.Heading, {
                                        variant: "heading-md/semibold",
                                        color: "header-primary",
                                        children: V.intl.format(V.t.iB5Gqe, { count: O.length + y }),
                                    }),
                                }),
                                O.map(S),
                                v.map(S),
                                (0, r.jsx)("div", { className: X.sectionSeparator }),
                            ],
                        }),
                    N.length > 0 &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)(c.Heading, {
                                            variant: "heading-md/semibold",
                                            color: "header-primary",
                                            children: V.intl.format(V.t["8IV8K9"], { count: N.length }),
                                        }),
                                        (0, r.jsx)(c.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: V.intl.string(V.t.Ecz7T9),
                                        }),
                                    ],
                                }),
                                N.map(S),
                            ],
                        }),
                    (0, r.jsx)(et, { guild: p }),
                ],
            }),
            f &&
                (0, r.jsx)(ee, {
                    guild: p,
                    user: m,
                }),
        ],
    });
}
