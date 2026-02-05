n.d(t, { A: () => ei });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    d = n(827734),
    c = n(582754),
    o = n(397927),
    u = n(334738),
    _ = n(241524),
    h = n(964486),
    x = n(736653),
    m = n(793574),
    A = n(954921),
    g = n(278539),
    C = n(164956),
    f = n(713804),
    p = n(676608),
    N = n(976860),
    j = n(950191),
    v = n(62199),
    b = n(576622),
    I = n(696451),
    E = n(317525),
    S = n(71393),
    w = n(222823),
    y = n(287809),
    O = n(403362),
    T = n(427262),
    L = n(837921),
    R = n(669953),
    D = n(817818),
    H = n(591552),
    M = n(961973),
    G = n(663915),
    B = n(218785),
    k = n(901434),
    P = n(724531),
    U = n(576977),
    V = n(164048),
    F = n(839447),
    W = n(539916),
    q = n(652215),
    K = n(746080),
    Z = n(790782),
    Y = n(985018),
    z = n(713273),
    J = n(638990),
    X = n(206314);
let Q = o._3J.SIZE_80,
    $ = "required";
function ee(e) {
    let { guild: t, user: n } = e,
        { avatarSrc: i, eventHandlers: s, isAvatarAnimating: d } = (0, v.A)({ user: n, guildId: t.id, size: 120 }),
        { avatarDecorationSrc: c } = (0, g.A)({ user: n, size: (0, A.Te)(Q), onlyAnimateOnHoverOrFocus: !d }),
        u = (0, r.bG)([I.Ay], () => I.Ay.getSelfMember(t.id)),
        _ = (0, r.yK)([I.Ay], () => I.Ay.getMemberRoleWithPendingUpdates(t.id, n.id)),
        x = (0, r.bG)([E.A], () => E.A.getSortedRoles(t.id)),
        m = (0, p.Ay)(t.id, n.id),
        C = x.filter((e) => _.includes(e.id)),
        N = (0, j.Ay)(n.id, t.id);
    (0, h.Ay)(() => {
        (0, b.A)(n.id, n.getAvatarURL(t.id, (0, o.FT9)(Q)), { guildId: t.id });
    });
    let S = (0, f.parseBioReact)(N?.bio),
        w = L.Ay.getEnableHardwareAcceleration() ? o.JsQ : o.euF;
    return (0, l.jsxs)("div", {
        className: z.ME,
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
                className: z.Kq,
                children: [
                    (0, l.jsx)("div", {
                        ...s,
                        children: (0, l.jsx)(w, { src: i, avatarDecoration: c, size: Q, "aria-label": n.username }),
                    }),
                    (0, l.jsx)(o.Text, {
                        variant: "text-lg/medium",
                        color: "text-strong",
                        className: z.Xh,
                        children: u?.nick ?? T.Ay.getName(n),
                    }),
                    (0, l.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: a()(X.PT, z.z3),
                        children: S,
                    }),
                    null != C &&
                        C.length > 0 &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("hr", { className: z.me }),
                                (0, l.jsx)(o.Text, {
                                    variant: "text-xs/semibold",
                                    color: "text-muted",
                                    className: z.DD,
                                    children: Y.intl.string(Y.t["LPJmL/"]),
                                }),
                                (0, l.jsx)("div", {
                                    className: z.Ot,
                                    children: C?.map((e) =>
                                        (0, l.jsxs)(
                                            "div",
                                            {
                                                className: z.JC,
                                                children: [
                                                    (0, l.jsx)(o.RYH, {
                                                        color: e.colorString ?? q.TpD,
                                                        colors: m ? e.colorStrings : null,
                                                        className: z.m4,
                                                    }),
                                                    (0, l.jsx)(o.Text, {
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
function et(e) {
    let { prompt: t, guild: n } = e,
        [s, c] = i.useState(null),
        [u, _] = i.useState(new Set()),
        h = t?.options?.filter((e) => u.has(e.id)),
        x = (0, M.a)(h),
        m = (0, M.vV)(h),
        A = (0, r.yK)([H.A], () => H.A.getOnboardingResponsesForPrompt(n.id, t.id)),
        { helpText: g, helpTextAdditional: C } = (0, B.W)({
            guild: n,
            prompt: t,
            selectedRoleIds: x,
            selectedChannelIds: m,
            itemHook: (e, t) => (0, l.jsx)(o.Text, { variant: "text-xs/medium", color: "text-strong", children: e }, t),
        }),
        { handleSelectOption: f } = (0, G.A)(n.id),
        p = t.options.map((e) => ({ value: e.id, ...e })),
        N = t.options.filter((e) => A.includes(e.id)).map((e) => e.id);
    return (0, l.jsxs)("div", {
        className: z.J1,
        "data-new": t.isNew,
        children: [
            t.isNew &&
                (0, l.jsx)(o.LpS, {
                    color: d.A.unsafe_rawColors.BRAND_260.css,
                    text: Y.intl.string(Y.t.y2b7CA),
                    className: z.Ad,
                }),
            (0, l.jsxs)(o.Heading, {
                className: z.Hi,
                variant: "heading-md/semibold",
                color: "text-strong",
                children: [
                    t.title,
                    t.required
                        ? (0, l.jsx)("span", { className: a()(z.mw, { [z.So]: s?.type === $ }), children: "*" })
                        : null,
                ],
            }),
            (0, l.jsx)(F.A, {
                options: p,
                value: N,
                onChange: (e) => {
                    let n = e.find((e) => !A.includes(e.id)),
                        l = e.map((e) => e.id);
                    if (null != n) f(t, n, !0), t.singleSelect && t.options.forEach((e) => u.delete(e.id)), u.add(n.id);
                    else {
                        let e = A.filter((e) => !l.includes(e)),
                            n = t.options.filter((t) => e.includes(t.id));
                        if (A.length <= n.length && t.required) return void c({ type: $ });
                        n.forEach((e) => {
                            f(t, e, !1), u.delete(e.id);
                        });
                    }
                    _(new Set(u)), c(null);
                },
                canBeNew: !t.isNew,
            }),
            (0, l.jsxs)(o.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: z.BK,
                children: [g, " ", C],
            }),
        ],
    });
}
function en(e) {
    let { guild: t } = e,
        n = (0, r.bG)([H.A], () => H.A.getConnections(t.id));
    return 0 === n.length
        ? null
        : (0, l.jsxs)("div", {
              className: z.J1,
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
                      className: z.lA,
                      children: n.map((e, n) =>
                          (0, l.jsx)(P.A, { connection: e, guildId: t.id, location: m.A.CHANNELS_AND_ROLES }, n),
                      ),
                  }),
              ],
          });
}
function el(e) {
    let { prompt: t, guild: n } = e,
        [s, c] = i.useState(null),
        [u, _] = i.useState(new Set()),
        h = t?.options?.filter((e) => u.has(e.id)),
        x = (0, M.a)(h),
        m = (0, M.vV)(h),
        A = (0, r.yK)([H.A], () => H.A.getOnboardingResponsesForPrompt(n.id, t.id)),
        { helpText: g, helpTextAdditional: C } = (0, B.W)({
            guild: n,
            prompt: t,
            selectedRoleIds: x,
            selectedChannelIds: m,
            itemHook: (e, t) => (0, l.jsx)(o.Text, { variant: "text-xs/medium", color: "text-strong", children: e }, t),
        }),
        { handleSelectOption: f } = (0, G.A)(n.id);
    return (0, l.jsxs)("div", {
        className: z.J1,
        "data-new": t.isNew,
        children: [
            t.isNew &&
                (0, l.jsx)(o.LpS, {
                    color: d.A.unsafe_rawColors.BRAND_260.css,
                    text: Y.intl.string(Y.t.y2b7CA),
                    className: z.Ad,
                }),
            (0, l.jsxs)(o.Heading, {
                className: z.Hi,
                variant: "heading-md/semibold",
                color: "text-strong",
                children: [
                    t.title,
                    t.required
                        ? (0, l.jsx)("span", { className: a()(z.mw, { [z.So]: s?.type === $ }), children: "*" })
                        : null,
                ],
            }),
            (0, l.jsx)("div", {
                className: z.vS,
                children: t.options.map((e) =>
                    (0, l.jsx)(
                        V.A,
                        {
                            hideMemberCount: !0,
                            guildId: n.id,
                            option: e,
                            onSelect: (n) => {
                                !n && 1 === A.length && t.required
                                    ? c({ type: $ })
                                    : (f(t, e, n ?? !1),
                                      t.singleSelect && n && t.options.forEach((e) => u.delete(e.id)),
                                      n ? u.add(e.id) : u.delete(e.id),
                                      _(new Set(u)),
                                      c(null));
                            },
                            selected: A.includes(e.id),
                            canBeNew: !t.isNew,
                        },
                        e.id,
                    ),
                ),
            }),
            (0, l.jsxs)(o.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: z.BK,
                children: [g, " ", C],
            }),
        ],
    });
}
function ei(e) {
    let { guildId: t, onBrowseChannels: n } = e,
        s = (0, c.Mw)((0, x.Ay)()),
        h = (0, r.bG)([S.A], () => S.A.getGuild(t)),
        m = (0, r.bG)([y.default], () => y.default.getCurrentUser()),
        A = (0, _.A)("(min-width: 1344px)") && null != m,
        g = i.useCallback(() => {
            (0, N.pX)(q.BVt.CHANNEL(t, K.VV.CHANNEL_BROWSER)), n?.();
        }, [t, n]),
        f = (0, r.bG)([w.Ay], () => w.Ay.hasUnread(t, Z.P.GUILD_ONBOARDING_QUESTION)),
        p = h?.latestOnboardingQuestionId,
        {
            onboardingPromptsRaw: j,
            newOnboardingPrompts: v,
            onboardingPromptsWithNewAnswers: b,
            newAnswersCount: I,
            onboardingPrompts: E,
        } = (0, k.A)(t);
    i.useEffect(() => {
        h?.id == null || (!C.A.isFullServerPreview(h.id) && (H.A.shouldFetchPrompts(h.id) || f) && (0, D.jx)(h.id));
    }, [h?.id, f, p]),
        i.useEffect(() => {
            if (h?.id != null && !C.A.isFullServerPreview(h.id))
                return () => {
                    (0, u.hK)(h.id, Z.P.GUILD_ONBOARDING_QUESTION, H.A.ackIdForGuild(h.id)),
                        R.A.updateOnboardingResponses(h.id);
                };
        }, [h?.id]);
    let T = i.useCallback(
        (e) => {
            if (null == h) return null;
            switch (e.type) {
                case W.ME.MULTIPLE_CHOICE:
                    return (0, l.jsx)(el, { prompt: e, guild: h }, e.id);
                case W.ME.DROPDOWN:
                    return (0, l.jsx)(et, { prompt: e, guild: h }, e.id);
                default:
                    (0, O.xb)(e.type);
            }
        },
        [h],
    );
    if (null == h) return null;
    if (0 === j.length) {
        let e = s ? d.A.unsafe_rawColors.PRIMARY_300.css : d.A.unsafe_rawColors.PRIMARY_500.css,
            t = s ? d.A.unsafe_rawColors.PRIMARY_700.css : d.A.unsafe_rawColors.PRIMARY_230.css;
        return (0, l.jsx)("div", {
            className: a()(J.Qs, z.Zc),
            children: (0, l.jsxs)("div", {
                className: z.do,
                children: [
                    (0, l.jsx)(U.A, { className: z.Dw, foregroundColor: e, backgroundColor: t }),
                    (0, l.jsx)(o.Heading, {
                        className: z.jU,
                        variant: "heading-md/semibold",
                        children: Y.intl.string(Y.t.leKHQz),
                    }),
                    (0, l.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        children: Y.intl.format(Y.t["jH+ktB"], { onBrowseChannels: g }),
                    }),
                ],
            }),
        });
    }
    return (0, l.jsxs)(o.T7Y, {
        className: z.XG,
        fade: !0,
        children: [
            (0, l.jsxs)("div", {
                className: z.kw,
                children: [
                    (v.length > 0 || b.length > 0) &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("div", {
                                    children: (0, l.jsx)(o.Heading, {
                                        variant: "heading-md/semibold",
                                        color: "text-strong",
                                        children: Y.intl.format(Y.t.iB5Gqe, { count: v.length + I }),
                                    }),
                                }),
                                v.map(T),
                                b.map(T),
                                (0, l.jsx)("div", { className: z.DY }),
                            ],
                        }),
                    E.length > 0 &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(o.Heading, {
                                            variant: "heading-md/semibold",
                                            color: "text-strong",
                                            children: Y.intl.format(Y.t["8IV8K9"], { count: E.length }),
                                        }),
                                        (0, l.jsx)(o.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: Y.intl.string(Y.t.Ecz7T9),
                                        }),
                                    ],
                                }),
                                E.map(T),
                            ],
                        }),
                    (0, l.jsx)(en, { guild: h }),
                ],
            }),
            A && (0, l.jsx)(ee, { guild: h, user: m }),
        ],
    });
}
