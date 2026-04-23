t.d(n, { A: () => eo });
var l = t(627968),
    i = t(64700),
    s = t(503698),
    a = t.n(s),
    r = t(311907),
    d = t(827734),
    c = t(462887),
    o = t(778712),
    u = t(97808),
    _ = t(534514),
    h = t(834730),
    m = t(545442),
    x = t(777666),
    A = t(599319),
    C = t(334738),
    g = t(241524),
    f = t(964486),
    p = t(736653),
    N = t(793574),
    j = t(562819),
    v = t(215689),
    b = t(164956),
    E = t(713804),
    I = t(676608),
    w = t(976860),
    S = t(950191),
    y = t(62199),
    D = t(576622),
    O = t(696451),
    L = t(317525),
    R = t(71393),
    M = t(222823),
    G = t(287809),
    B = t(403362),
    T = t(427262),
    k = t(837921),
    H = t(669953),
    P = t(817818),
    U = t(591552),
    V = t(961973),
    F = t(663915),
    W = t(218785),
    q = t(901434),
    K = t(724531),
    Z = t(576977),
    Y = t(164048),
    z = t(839447),
    J = t(539916),
    X = t(652215),
    Q = t(746080),
    $ = t(790782),
    ee = t(985018),
    en = t(275196),
    et = t(964623),
    el = t(992595);
let ei = o._3.SIZE_80,
    es = "required";
function ea(e) {
    let { guild: n, user: t } = e,
        { avatarSrc: i, eventHandlers: s, isAvatarAnimating: d } = (0, y.A)({ user: t, guildId: n.id, size: 120 }),
        { avatarDecorationSrc: c } = (0, v.A)({ user: t, size: (0, j.Te)(ei), onlyAnimateOnHoverOrFocus: !d }),
        x = (0, r.bG)([O.Ay], () => O.Ay.getSelfMember(n.id)),
        A = (0, r.yK)([O.Ay], () => O.Ay.getMemberRoleWithPendingUpdates(n.id, t.id)),
        C = (0, r.bG)([L.A], () => L.A.getSortedRoles(n.id)),
        g = (0, I.Ay)(n.id, t.id),
        p = C.filter((e) => A.includes(e.id)),
        N = (0, S.Ay)(t.id, n.id);
    (0, f.Ay)(() => {
        (0, D.A)(t.id, t.getAvatarURL(n.id, (0, o.FT)(ei)), { guildId: n.id });
    });
    let b = (0, E.parseBioReact)(N?.bio),
        w = k.Ay.getEnableHardwareAcceleration() ? u.Js : u.eu;
    return (0, l.jsxs)("div", {
        className: en.ME,
        children: [
            (0, l.jsx)(_.D, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: ee.intl.string(ee.t.diTbF8),
            }),
            (0, l.jsx)(h.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: ee.intl.string(ee.t["+8um3M"]),
            }),
            (0, l.jsxs)("div", {
                className: en.Kq,
                children: [
                    (0, l.jsx)("div", {
                        ...s,
                        children: (0, l.jsx)(w, { src: i, avatarDecoration: c, size: ei, "aria-label": t.username }),
                    }),
                    (0, l.jsx)(h.E, {
                        variant: "text-lg/medium",
                        color: "text-strong",
                        className: en.Xh,
                        children: x?.nick ?? T.Ay.getName(t),
                    }),
                    (0, l.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: a()(el.PT, en.z3),
                        children: b,
                    }),
                    null != p &&
                        p.length > 0 &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("hr", { className: en.me }),
                                (0, l.jsx)(h.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-muted",
                                    className: en.DD,
                                    children: ee.intl.string(ee.t["LPJmL/"]),
                                }),
                                (0, l.jsx)("div", {
                                    className: en.Ot,
                                    children: p?.map((e) =>
                                        (0, l.jsxs)(
                                            "div",
                                            {
                                                className: en.JC,
                                                children: [
                                                    (0, l.jsx)(m.R, {
                                                        color: e.colorString ?? X.TpD,
                                                        colors: g ? e.colorStrings : null,
                                                        className: en.m4,
                                                    }),
                                                    (0, l.jsx)(h.E, {
                                                        variant: "text-xs/medium",
                                                        color: "text-strong",
                                                        children: e.name,
                                                    }),
                                                ],
                                            },
                                            e.id,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
function er(e) {
    let { prompt: n, guild: t } = e,
        [s, c] = i.useState(null),
        [o, u] = i.useState(new Set()),
        m = n?.options?.filter((e) => o.has(e.id)),
        A = (0, V.a)(m),
        C = (0, V.vV)(m),
        g = (0, r.yK)([U.A], () => U.A.getOnboardingResponsesForPrompt(t.id, n.id)),
        { helpText: f, helpTextAdditional: p } = (0, W.W)({
            guild: t,
            prompt: n,
            selectedRoleIds: A,
            selectedChannelIds: C,
            itemHook: (e, n) => (0, l.jsx)(h.E, { variant: "text-xs/medium", color: "text-strong", children: e }, n),
        }),
        { handleSelectOption: N } = (0, F.A)(t.id),
        j = n.options.map((e) => ({ value: e.id, ...e })),
        v = n.options.filter((e) => g.includes(e.id)).map((e) => e.id);
    return (0, l.jsxs)("div", {
        className: en.J1,
        "data-new": n.isNew,
        children: [
            n.isNew &&
                (0, l.jsx)(x.Lp, {
                    color: d.A.unsafe_rawColors.BRAND_260.css,
                    text: ee.intl.string(ee.t.y2b7CA),
                    className: en.Ad,
                }),
            (0, l.jsxs)(_.D, {
                className: en.Hi,
                variant: "heading-md/semibold",
                color: "text-strong",
                children: [
                    n.title,
                    n.required
                        ? (0, l.jsx)("span", { className: a()(en.mw, { [en.So]: s?.type === es }), children: "*" })
                        : null,
                ],
            }),
            (0, l.jsx)(z.A, {
                options: j,
                value: v,
                onChange: (e) => {
                    let t = e.find((e) => !g.includes(e.id)),
                        l = e.map((e) => e.id);
                    if (null != t) N(n, t, !0), n.singleSelect && n.options.forEach((e) => o.delete(e.id)), o.add(t.id);
                    else {
                        let e = g.filter((e) => !l.includes(e)),
                            t = n.options.filter((n) => e.includes(n.id));
                        if (g.length <= t.length && n.required) return void c({ type: es });
                        t.forEach((e) => {
                            N(n, e, !1), o.delete(e.id);
                        });
                    }
                    u(new Set(o)), c(null);
                },
                canBeNew: !n.isNew,
            }),
            (0, l.jsxs)(h.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: en.BK,
                children: [f, " ", p],
            }),
        ],
    });
}
function ed(e) {
    let { guild: n } = e,
        t = (0, r.bG)([U.A], () => U.A.getConnections(n.id));
    return 0 === t.length
        ? null
        : (0, l.jsxs)("div", {
              className: en.J1,
              children: [
                  (0, l.jsx)(_.D, {
                      variant: "heading-md/semibold",
                      color: "text-strong",
                      children: ee.intl.string(ee.t.eDVMrA),
                  }),
                  (0, l.jsx)(h.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: ee.intl.string(ee.t.BozOXu),
                  }),
                  (0, l.jsx)("div", {
                      className: en.lA,
                      children: t.map((e, t) =>
                          (0, l.jsx)(K.A, { connection: e, guildId: n.id, location: N.A.CHANNELS_AND_ROLES }, t),
                      ),
                  }),
              ],
          });
}
function ec(e) {
    let { prompt: n, guild: t } = e,
        [s, c] = i.useState(null),
        [o, u] = i.useState(new Set()),
        m = n?.options?.filter((e) => o.has(e.id)),
        A = (0, V.a)(m),
        C = (0, V.vV)(m),
        g = (0, r.yK)([U.A], () => U.A.getOnboardingResponsesForPrompt(t.id, n.id)),
        { helpText: f, helpTextAdditional: p } = (0, W.W)({
            guild: t,
            prompt: n,
            selectedRoleIds: A,
            selectedChannelIds: C,
            itemHook: (e, n) => (0, l.jsx)(h.E, { variant: "text-xs/medium", color: "text-strong", children: e }, n),
        }),
        { handleSelectOption: N } = (0, F.A)(t.id);
    return (0, l.jsxs)("div", {
        className: en.J1,
        "data-new": n.isNew,
        children: [
            n.isNew &&
                (0, l.jsx)(x.Lp, {
                    color: d.A.unsafe_rawColors.BRAND_260.css,
                    text: ee.intl.string(ee.t.y2b7CA),
                    className: en.Ad,
                }),
            (0, l.jsxs)(_.D, {
                className: en.Hi,
                variant: "heading-md/semibold",
                color: "text-strong",
                children: [
                    n.title,
                    n.required
                        ? (0, l.jsx)("span", { className: a()(en.mw, { [en.So]: s?.type === es }), children: "*" })
                        : null,
                ],
            }),
            (0, l.jsx)("div", {
                className: en.vS,
                children: n.options.map((e) =>
                    (0, l.jsx)(
                        Y.A,
                        {
                            hideMemberCount: !0,
                            guildId: t.id,
                            option: e,
                            onSelect: (t) => {
                                !t && 1 === g.length && n.required
                                    ? c({ type: es })
                                    : (N(n, e, t ?? !1),
                                      n.singleSelect && t && n.options.forEach((e) => o.delete(e.id)),
                                      t ? o.add(e.id) : o.delete(e.id),
                                      u(new Set(o)),
                                      c(null));
                            },
                            selected: g.includes(e.id),
                            canBeNew: !n.isNew,
                        },
                        e.id,
                    ),
                ),
            }),
            (0, l.jsxs)(h.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: en.BK,
                children: [f, " ", p],
            }),
        ],
    });
}
function eo(e) {
    let { guildId: n, onBrowseChannels: t } = e,
        s = (0, c.M)((0, p.Ay)()),
        o = (0, r.bG)([R.A], () => R.A.getGuild(n)),
        u = (0, r.bG)([G.default], () => G.default.getCurrentUser()),
        m = (0, g.A)("(min-width: 1344px)") && null != u,
        x = i.useCallback(() => {
            (0, w.pX)(X.BVt.CHANNEL(n, Q.VV.CHANNEL_BROWSER)), t?.();
        }, [n, t]),
        f = (0, r.bG)([M.Ay], () => M.Ay.hasUnread(n, $.P.GUILD_ONBOARDING_QUESTION)),
        N = o?.latestOnboardingQuestionId,
        {
            onboardingPromptsRaw: j,
            newOnboardingPrompts: v,
            onboardingPromptsWithNewAnswers: E,
            newAnswersCount: I,
            onboardingPrompts: S,
        } = (0, q.A)(n);
    i.useEffect(() => {
        o?.id == null || (!b.A.isFullServerPreview(o.id) && (U.A.shouldFetchPrompts(o.id) || f) && (0, P.jx)(o.id));
    }, [o?.id, f, N]),
        i.useEffect(() => {
            if (o?.id != null && !b.A.isFullServerPreview(o.id))
                return () => {
                    (0, C.hK)(o.id, $.P.GUILD_ONBOARDING_QUESTION, U.A.ackIdForGuild(o.id)),
                        H.A.updateOnboardingResponses(o.id);
                };
        }, [o?.id]);
    let y = i.useCallback(
        (e) => {
            if (null == o) return null;
            switch (e.type) {
                case J.ME.MULTIPLE_CHOICE:
                    return (0, l.jsx)(ec, { prompt: e, guild: o }, e.id);
                case J.ME.DROPDOWN:
                    return (0, l.jsx)(er, { prompt: e, guild: o }, e.id);
                default:
                    (0, B.xb)(e.type);
            }
        },
        [o],
    );
    if (null == o) return null;
    if (0 === j.length) {
        let e = s ? d.A.unsafe_rawColors.PRIMARY_300.css : d.A.unsafe_rawColors.PRIMARY_500.css,
            n = s ? d.A.unsafe_rawColors.PRIMARY_700.css : d.A.unsafe_rawColors.PRIMARY_230.css;
        return (0, l.jsx)("div", {
            className: a()(et.Qs, en.Zc),
            children: (0, l.jsxs)("div", {
                className: en.do,
                children: [
                    (0, l.jsx)(Z.A, { className: en.Dw, foregroundColor: e, backgroundColor: n }),
                    (0, l.jsx)(_.D, {
                        className: en.jU,
                        variant: "heading-md/semibold",
                        children: ee.intl.string(ee.t.leKHQz),
                    }),
                    (0, l.jsx)(h.E, {
                        variant: "text-sm/medium",
                        children: ee.intl.format(ee.t["jH+ktB"], { onBrowseChannels: x }),
                    }),
                ],
            }),
        });
    }
    return (0, l.jsxs)(A.Ch, {
        className: en.XG,
        fade: !0,
        children: [
            (0, l.jsxs)("div", {
                className: en.kw,
                children: [
                    (v.length > 0 || E.length > 0) &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("div", {
                                    children: (0, l.jsx)(_.D, {
                                        variant: "heading-md/semibold",
                                        color: "text-strong",
                                        children: ee.intl.format(ee.t.iB5Gqe, { count: v.length + I }),
                                    }),
                                }),
                                v.map(y),
                                E.map(y),
                                (0, l.jsx)("div", { className: en.DY }),
                            ],
                        }),
                    S.length > 0 &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(_.D, {
                                            variant: "heading-md/semibold",
                                            color: "text-strong",
                                            children: ee.intl.format(ee.t["8IV8K9"], { count: S.length }),
                                        }),
                                        (0, l.jsx)(h.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: ee.intl.string(ee.t.Ecz7T9),
                                        }),
                                    ],
                                }),
                                S.map(y),
                            ],
                        }),
                    (0, l.jsx)(ed, { guild: o }),
                ],
            }),
            m && (0, l.jsx)(ea, { guild: o, user: u }),
        ],
    });
}
