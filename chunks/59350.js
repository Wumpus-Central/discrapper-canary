t.d(n, { Z: () => et }), t(388685);
var l = t(951288),
    r = t(647438),
    i = t(120356),
    a = t.n(i),
    o = t(442837),
    s = t(780384),
    c = t(481060),
    d = t(45114),
    u = t(131388),
    m = t(493773),
    h = t(410030),
    p = t(1585),
    f = t(125988),
    g = t(44315),
    x = t(160404),
    _ = t(240991),
    C = t(402235),
    b = t(703656),
    j = t(687158),
    v = t(287008),
    y = t(484459),
    O = t(271383),
    N = t(485386),
    Z = t(430824),
    I = t(306680),
    w = t(594174),
    P = t(823379),
    E = t(51144),
    S = t(998502),
    T = t(549817),
    B = t(745752),
    A = t(45966),
    R = t(637853),
    k = t(905204),
    D = t(968644),
    L = t(521941),
    M = t(614328),
    H = t(104265),
    U = t(588632),
    W = t(290511),
    G = t(981631),
    F = t(176505),
    q = t(490897),
    z = t(388032),
    V = t(29858),
    X = t(97009),
    Q = t(430864);
function Y(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            l.forEach(function (n) {
                var l;
                (l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = l);
            });
    }
    return e;
}
let K = c.EFr.SIZE_80,
    J = "required";
function $(e) {
    var n, t, r;
    let { guild: i, user: s } = e,
        {
            avatarSrc: d,
            eventHandlers: u,
            isAvatarAnimating: h,
        } = (0, v.Z)({
            user: s,
            guildId: i.id,
            size: 120,
        }),
        { avatarDecorationSrc: g } = (0, f.Z)({
            user: s,
            size: (0, p.y9)(K),
            onlyAnimateOnHoverOrFocus: !h,
        }),
        x = (0, o.e7)([O.ZP], () => O.ZP.getSelfMember(i.id)),
        b = (0, o.Wu)([O.ZP], () => O.ZP.getMemberRoleWithPendingUpdates(i.id, s.id)),
        Z = (0, o.e7)([N.Z], () => N.Z.getSortedRoles(i.id)),
        I = (0, C.ZP)(i.id, s.id),
        w = Z.filter((e) => b.includes(e.id)),
        P = (0, j.ZP)(s.id, i.id);
    (0, m.ZP)(() => {
        (0, y.Z)(s.id, s.getAvatarURL(i.id, (0, c.pxk)(K)), { guildId: i.id });
    });
    let T = (0, _.parseBioReact)(null == P ? void 0 : P.bio),
        B = S.ZP.getEnableHardwareAcceleration() ? c.Xo$ : c.qEK;
    return (0, l.jsxs)("div", {
        className: V.profile,
        children: [
            (0, l.jsx)(c.Heading, {
                variant: "heading-md/semibold",
                color: "header-primary",
                children: z.intl.string(z.t.diTbF8),
            }),
            (0, l.jsx)(c.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: z.intl.string(z.t["+8um3M"]),
            }),
            (0, l.jsxs)("div", {
                className: V.profileCard,
                children: [
                    (0, l.jsx)(
                        "div",
                        ((t = Y({}, u)),
                        (r = r =
                            {
                                children: (0, l.jsx)(B, {
                                    src: d,
                                    avatarDecoration: g,
                                    size: K,
                                    "aria-label": s.username,
                                }),
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
                        t),
                    ),
                    (0, l.jsx)(c.Text, {
                        variant: "text-lg/medium",
                        color: "header-primary",
                        className: V.username,
                        children: null != (n = null == x ? void 0 : x.nick) ? n : E.ZP.getName(s),
                    }),
                    (0, l.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: a()(Q.markup, V.bio),
                        children: T,
                    }),
                    null != w &&
                        w.length > 0 &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("hr", { className: V.separator }),
                                (0, l.jsx)(c.Text, {
                                    variant: "text-xs/semibold",
                                    color: "text-muted",
                                    className: V.title,
                                    children: z.intl.string(z.t["LPJmL/"]),
                                }),
                                (0, l.jsx)("div", {
                                    className: V.roles,
                                    children:
                                        null == w
                                            ? void 0
                                            : w.map((e) => {
                                                  var n;
                                                  return (0, l.jsxs)(
                                                      "div",
                                                      {
                                                          className: V.role,
                                                          children: [
                                                              (0, l.jsx)(c.xko, {
                                                                  color: null != (n = e.colorString) ? n : G.Pbq,
                                                                  colors: I ? e.colorStrings : null,
                                                                  className: V.roleDot,
                                                              }),
                                                              (0, l.jsx)(c.Text, {
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
function ee(e) {
    var n;
    let { prompt: t, guild: i } = e,
        [s, d] = r.useState(null),
        [u, m] = r.useState(new Set()),
        h = null == t || null == (n = t.options) ? void 0 : n.filter((e) => u.has(e.id)),
        p = (0, R.L6)(h),
        f = (0, R.dX)(h),
        x = (0, o.Wu)([A.Z], () => A.Z.getOnboardingResponsesForPrompt(i.id, t.id)),
        { helpText: _, helpTextAdditional: C } = (0, D.p)({
            guild: i,
            prompt: t,
            selectedRoleIds: p,
            selectedChannelIds: f,
            itemHook: (e, n) =>
                (0, l.jsx)(
                    c.Text,
                    {
                        variant: "text-xs/medium",
                        color: "header-primary",
                        children: e,
                    },
                    n,
                ),
        }),
        { handleSelectOption: b } = (0, k.Z)(i.id),
        j = t.options.map((e) => Y({ value: e.id }, e)),
        v = t.options.filter((e) => x.includes(e.id)).map((e) => e.id);
    return (0, l.jsxs)("div", {
        className: V.prompt,
        "data-new": t.isNew,
        children: [
            t.isNew &&
                (0, l.jsx)(c.IGR, {
                    color: (0, g.Lq)(G.Ilk.BRAND_260),
                    text: z.intl.string(z.t.y2b7CA),
                    className: V.newBadge,
                }),
            (0, l.jsxs)(c.Heading, {
                className: V.promptTitle,
                variant: "heading-md/semibold",
                color: "header-primary",
                children: [
                    t.title,
                    t.required
                        ? (0, l.jsx)("span", {
                              className: a()(V.required, { [V.error]: (null == s ? void 0 : s.type) === J }),
                              children: "*",
                          })
                        : null,
                ],
            }),
            (0, l.jsx)(U.Z, {
                options: j,
                value: v,
                onChange: (e) => {
                    let n = e.find((e) => !x.includes(e.id)),
                        l = e.map((e) => e.id);
                    if (null != n) b(t, n, !0), t.singleSelect && t.options.forEach((e) => u.delete(e.id)), u.add(n.id);
                    else {
                        let e = x.filter((e) => !l.includes(e)),
                            n = t.options.filter((n) => e.includes(n.id));
                        if (x.length <= n.length && t.required) return void d({ type: J });
                        n.forEach((e) => {
                            b(t, e, !1), u.delete(e.id);
                        });
                    }
                    m(new Set(u)), d(null);
                },
                canBeNew: !t.isNew,
            }),
            (0, l.jsxs)(c.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: V.helpText,
                children: [_, " ", C],
            }),
        ],
    });
}
function en(e) {
    var n;
    let { prompt: t, guild: i } = e,
        [s, d] = r.useState(null),
        [u, m] = r.useState(new Set()),
        h = null == t || null == (n = t.options) ? void 0 : n.filter((e) => u.has(e.id)),
        p = (0, R.L6)(h),
        f = (0, R.dX)(h),
        x = (0, o.Wu)([A.Z], () => A.Z.getOnboardingResponsesForPrompt(i.id, t.id)),
        { helpText: _, helpTextAdditional: C } = (0, D.p)({
            guild: i,
            prompt: t,
            selectedRoleIds: p,
            selectedChannelIds: f,
            itemHook: (e, n) =>
                (0, l.jsx)(
                    c.Text,
                    {
                        variant: "text-xs/medium",
                        color: "header-primary",
                        children: e,
                    },
                    n,
                ),
        }),
        { handleSelectOption: b } = (0, k.Z)(i.id);
    return (0, l.jsxs)("div", {
        className: V.prompt,
        "data-new": t.isNew,
        children: [
            t.isNew &&
                (0, l.jsx)(c.IGR, {
                    color: (0, g.Lq)(G.Ilk.BRAND_260),
                    text: z.intl.string(z.t.y2b7CA),
                    className: V.newBadge,
                }),
            (0, l.jsxs)(c.Heading, {
                className: V.promptTitle,
                variant: "heading-md/semibold",
                color: "header-primary",
                children: [
                    t.title,
                    t.required
                        ? (0, l.jsx)("span", {
                              className: a()(V.required, { [V.error]: (null == s ? void 0 : s.type) === J }),
                              children: "*",
                          })
                        : null,
                ],
            }),
            (0, l.jsx)("div", {
                className: V.promptOptions,
                children: t.options.map((e) =>
                    (0, l.jsx)(
                        H.Z,
                        {
                            hideMemberCount: !0,
                            guildId: i.id,
                            option: e,
                            onSelect: (n) =>
                                ((e, n) => {
                                    if (!n && 1 === x.length && t.required) return void d({ type: J });
                                    b(t, e, null != n && n),
                                        t.singleSelect && n && t.options.forEach((e) => u.delete(e.id)),
                                        n ? u.add(e.id) : u.delete(e.id),
                                        m(new Set(u)),
                                        d(null);
                                })(e, n),
                            selected: x.includes(e.id),
                            canBeNew: !t.isNew,
                        },
                        e.id,
                    ),
                ),
            }),
            (0, l.jsxs)(c.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: V.helpText,
                children: [_, " ", C],
            }),
        ],
    });
}
function et(e) {
    let { guildId: n, onBrowseChannels: t } = e,
        i = (0, s.wj)((0, h.ZP)()),
        m = (0, o.e7)([Z.Z], () => Z.Z.getGuild(n)),
        p = (0, o.e7)([w.default], () => w.default.getCurrentUser()),
        f = (0, u.Z)("(min-width: 1344px)") && null != p,
        _ = r.useCallback(() => {
            (0, b.uL)(G.Z5c.CHANNEL(n, F.oC.CHANNEL_BROWSER)), null == t || t();
        }, [n, t]),
        C = (0, o.e7)([I.ZP], () => I.ZP.hasUnread(n, q.W.GUILD_ONBOARDING_QUESTION)),
        {
            onboardingPromptsRaw: j,
            newOnboardingPrompts: v,
            onboardingPromptsWithNewAnswers: y,
            newAnswersCount: O,
            onboardingPrompts: N,
        } = (0, L.Z)(n);
    r.useEffect(() => {
        (null == m ? void 0 : m.id) != null &&
            !x.Z.isFullServerPreview(m.id) &&
            (A.Z.shouldFetchPrompts(m.id) || C) &&
            (0, B.eM)(m.id);
    }, [null == m ? void 0 : m.id, C]),
        r.useEffect(() => {
            if ((null == m ? void 0 : m.id) != null && !x.Z.isFullServerPreview(m.id))
                return () => {
                    (0, d.Ju)(m.id, q.W.GUILD_ONBOARDING_QUESTION, A.Z.ackIdForGuild(m.id)),
                        T.Z.updateOnboardingResponses(m.id);
                };
        }, [null == m ? void 0 : m.id]);
    let E = r.useCallback(
        (e) => {
            if (null == m) return null;
            switch (e.type) {
                case W.FN.MULTIPLE_CHOICE:
                    return (0, l.jsx)(
                        en,
                        {
                            prompt: e,
                            guild: m,
                        },
                        e.id,
                    );
                case W.FN.DROPDOWN:
                    return (0, l.jsx)(
                        ee,
                        {
                            prompt: e,
                            guild: m,
                        },
                        e.id,
                    );
                default:
                    (0, P.vE)(e.type);
            }
        },
        [m],
    );
    if (null == m) return null;
    if (0 === j.length) {
        let e = (0, g.Lq)(i ? G.Ilk.PRIMARY_300 : G.Ilk.PRIMARY_500),
            n = (0, g.Lq)(i ? G.Ilk.PRIMARY_700 : G.Ilk.PRIMARY_230);
        return (0, l.jsx)("div", {
            className: a()(X.content, V.emptyPage),
            children: (0, l.jsxs)("div", {
                className: V.emptyContainer,
                children: [
                    (0, l.jsx)(M.Z, {
                        className: V.emptyIcon,
                        foregroundColor: e,
                        backgroundColor: n,
                    }),
                    (0, l.jsx)(c.Heading, {
                        className: V.emptyHeader,
                        variant: "heading-md/semibold",
                        children: z.intl.string(z.t.leKHQz),
                    }),
                    (0, l.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        children: z.intl.format(z.t["jH+ktB"], { onBrowseChannels: _ }),
                    }),
                ],
            }),
        });
    }
    return (0, l.jsxs)(c.Den, {
        className: V.scroller,
        fade: !0,
        children: [
            (0, l.jsxs)("div", {
                className: V.pageBody,
                children: [
                    (v.length > 0 || y.length > 0) &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("div", {
                                    children: (0, l.jsx)(c.Heading, {
                                        variant: "heading-md/semibold",
                                        color: "header-primary",
                                        children: z.intl.format(z.t.iB5Gqe, { count: v.length + O }),
                                    }),
                                }),
                                v.map(E),
                                y.map(E),
                                (0, l.jsx)("div", { className: V.sectionSeparator }),
                            ],
                        }),
                    N.length > 0 &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(c.Heading, {
                                            variant: "heading-md/semibold",
                                            color: "header-primary",
                                            children: z.intl.format(z.t["8IV8K9"], { count: N.length }),
                                        }),
                                        (0, l.jsx)(c.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: z.intl.string(z.t.Ecz7T9),
                                        }),
                                    ],
                                }),
                                N.map(E),
                            ],
                        }),
                ],
            }),
            f &&
                (0, l.jsx)($, {
                    guild: m,
                    user: p,
                }),
        ],
    });
}
