(n.r(t), n.d(t, { default: () => ex }));
var i = n(477900),
    s = n(582128),
    l = n(503698),
    r = n.n(l),
    a = n(399513),
    o = n(17928),
    d = n(866323),
    c = n(297264),
    u = n(442433),
    m = n(66834),
    x = n(765671),
    g = n(4616),
    h = n(743674),
    p = n(60175),
    v = n(545868),
    N = n(164956),
    A = n(976860),
    _ = n(426660),
    f = n(71393),
    j = n(486020),
    E = n(998304),
    b = n(669953),
    O = n(591552),
    C = n(713125),
    D = n(961973),
    I = n(289873),
    P = n(834730),
    k = n(821609),
    G = n(554830),
    y = n(793574),
    L = n(666860),
    S = n(733110),
    T = n(30370),
    R = n(174459),
    H = n(817818),
    w = n(155965),
    V = n(539916),
    $ = n(652215),
    q = n(105292),
    F = n(579235);
function B(e) {
    let { guildId: t, onComplete: n, isLastStep: l, isSubmitting: r = !1, disableTracking: a } = e,
        d = s.useRef(!1),
        { onboardingConnections: u, isLoading: m } = (0, o.cf)([O.A], () => ({
            onboardingConnections: O.A.getOnboardingConnections(t),
            isLoading: O.A.isLoading(),
        })),
        x = (0, o.bG)(
            [S.default, T.A],
            () =>
                u.some((e) => {
                    if (e.connection_type === V.wZ.APPLICATION && null != e.application_id) {
                        let t = S.default.getNewestTokenForApplication(e.application_id);
                        return (
                            S.default.getFetchStateForApplication(e.application_id) === S.FetchState.FETCHED &&
                            null != t
                        );
                    }
                    if (e.connection_type === V.wZ.PROVIDER_CONNECTED_ACCOUNT && null != e.provider_id) {
                        let t = T.A.getAccount(null, e.provider_id);
                        return null != t && !t.revoked;
                    }
                    return !1;
                }),
            [u],
        );
    s.useEffect(() => {
        if (a || m || 0 === u.length || d.current) return;
        let e = (0, D.H_)(u),
            n = (0, D.OG)(u);
        (R.default.track($.HAw.GUILD_ONBOARDING_STEP_VIEWED, {
            ...(0, L.H$)(t),
            step: H.l8,
            required: !1,
            provider_connections_connected: e.connected,
            provider_connections_not_connected: e.notConnected,
            application_connections_connected: n.connected,
            application_connections_not_connected: n.notConnected,
        }),
            (d.current = !0));
    }, [t, m, u, a]);
    let g = s.useCallback(() => {
        if (!a) {
            let e = (0, D.H_)(u),
                n = (0, D.OG)(u);
            R.default.track($.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                ...(0, L.H$)(t),
                step: H.l8,
                skipped: !x,
                back: !1,
                options_selected: 0,
                in_onboarding: !0,
                is_final_step: l,
                provider_connections_connected: e.connected,
                provider_connections_not_connected: e.notConnected,
                application_connections_connected: n.connected,
                application_connections_not_connected: n.notConnected,
            });
        }
        n();
    }, [n, a, t, u, x, l]);
    return m
        ? (0, i.jsxs)("div", {
              className: F.g4,
              children: [
                  (0, i.jsx)(I.y, {}),
                  (0, i.jsx)(P.E, {
                      variant: "text-md/normal",
                      color: "text-muted",
                      children: q.intl.string(q.t.ZTNur7),
                  }),
              ],
          })
        : (0, i.jsx)("div", {
              className: F.kL,
              children: (0, i.jsxs)("div", {
                  className: F.Qs,
                  children: [
                      (0, i.jsxs)("div", {
                          className: F.gT,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: F.wx,
                                  children: [
                                      (0, i.jsx)("div", {
                                          className: F.qd,
                                          children: (0, i.jsx)(c.D, {
                                              variant: "heading-xl/semibold",
                                              children: q.intl.string(q.t.eDVMrA),
                                          }),
                                      }),
                                      (0, i.jsx)("div", {
                                          className: F.ux,
                                          children: (0, i.jsx)(P.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: q.intl.string(q.t.BozOXu),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)("div", {
                                  className: F.A5,
                                  children: (0, i.jsx)("div", {
                                      className: F.eF,
                                      children: u.map((e, n) =>
                                          (0, i.jsx)(
                                              w.A,
                                              { connection: e, guildId: t, location: y.A.GUILD_ONBOARDING },
                                              n,
                                          ),
                                      ),
                                  }),
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          className: F.qr,
                          children: (0, i.jsxs)("div", {
                              className: F.o1,
                              children: [
                                  (0, i.jsx)("div", {}),
                                  (0, i.jsx)("div", {
                                      className: F.E3,
                                      children: (0, i.jsx)(k.$, {
                                          variant: x ? "primary" : "secondary",
                                          onClick: g,
                                          text: x
                                              ? l
                                                  ? `${q.intl.string(q.t["8SuVoE"])} \u{1F389}`
                                                  : q.intl.string(q.t.PDTjLN)
                                              : q.intl.string(q.t["5Wxrcd"]),
                                          disabled: r,
                                          loading: r,
                                          icon: l ? void 0 : G.K,
                                          iconPosition: "end",
                                      }),
                                  }),
                              ],
                          }),
                      }),
                  ],
              }),
          });
}
n(883885);
var M = n(964486);
n(775602);
var U = n(260509);
(n(515718), n(739408), n(113473), n(694268), n(896018));
var W = n(689966);
function K(e) {
    let { guild: t, onStart: n, onboardingStatus: l, headerId: r, disableTracking: a } = e,
        d = (0, o.bG)([O.A], () => O.A.isLoading()),
        u = s.useRef(!1);
    s.useEffect(() => {
        if (!a)
            return (
                R.default.track($.HAw.GUILD_ONBOARDING_STEP_VIEWED, { ...(0, L.H$)(t.id), step: -1, required: !0 }),
                () => {
                    R.default.track($.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                        ...(0, L.H$)(t.id),
                        step: -1,
                        skipped: !u.current,
                        is_final_step: !1,
                        in_onboarding: !0,
                    });
                }
            );
    }, [t.id, u, a]);
    let m = s.useMemo(() => (0, U.Iv)(t, 135, !1, !0), [t]);
    return (
        (0, M.Ay)(() => {
            setTimeout(() => {
                ((u.current = !0), n());
            }, 3e3);
        }),
        (0, i.jsx)("div", {
            className: W.PY,
            children: (0, i.jsxs)("div", {
                className: W.Fo,
                children: [
                    (0, i.jsx)("div", { children: (0, i.jsx)("img", { className: W.D3, src: m, alt: "" }) }),
                    (0, i.jsxs)("div", {
                        className: W.rD,
                        children: [
                            (0, i.jsx)(P.E, {
                                className: W.CH,
                                variant: "text-lg/normal",
                                color: "text-overlay-light",
                                id: r,
                                children: q.intl.format(q.t["j59F/c"], { guildName: t?.name }),
                            }),
                            d
                                ? (0, i.jsx)(I.y, { className: W.__invalid_subtitle })
                                : l === C.$o.NOT_APPLICABLE
                                  ? (0, i.jsx)(c.D, {
                                        className: W.__invalid_subtitle,
                                        variant: "heading-xxl/normal",
                                        color: "text-overlay-light",
                                        children: q.intl.string(q.t.Q5ibtV),
                                    })
                                  : (0, i.jsx)(c.D, {
                                        className: W.__invalid_subtitle,
                                        variant: "heading-xxl/normal",
                                        color: "text-overlay-light",
                                        children: q.intl.string(q.t["Alcl/e"]),
                                    }),
                        ],
                    }),
                ],
            }),
        })
    );
}
var X = n(702841),
    z = n(364522),
    J = n(548411),
    Z = n(866665),
    Q = n(408213),
    Y = n(386784),
    ee = n(403362),
    et = n(218785),
    en = n(164048),
    ei = n(839447),
    es = n(293403);
function el(e, t) {
    return (0, i.jsx)("span", { className: es.a1, children: e }, t);
}
function er(e) {
    let {
            headerId: t,
            guild: n,
            step: s,
            lastPrompt: l,
            questionCount: r,
            currentPrompt: a,
            hasConnections: o,
            isSubmitting: d,
            selectOption: u,
            gotoPrevPrompt: m,
            gotoNextPrompt: x,
            completeOnboarding: g,
        } = e,
        h = (0, X.yK)([O.A], () => O.A.getOnboardingResponsesForPrompt(n.id, a.id)),
        p = 0 === h.length && a?.required,
        v = a?.options.filter((e) => h.includes(e.id)),
        N = (0, D.a)(v),
        A = (0, D.vV)(v),
        _ = 0 === h.length,
        { helpText: f, helpTextAdditional: j } = (0, et.A)({
            guild: n,
            prompt: a,
            selectedRoleIds: N,
            selectedChannelIds: A,
            itemHook: el,
        }),
        E = (0, Y.A)(n.id, 1e3),
        b = a.options.map((e) => ({ value: e.id, ...e })),
        C = a.options.filter((e) => h.includes(e.id)).map((e) => e.id);
    return (0, i.jsx)("div", {
        className: es.J1,
        children: (0, i.jsxs)("div", {
            className: es.mK,
            children: [
                (0, i.jsxs)(z.Ip, {
                    className: es.gT,
                    children: [
                        (0, i.jsxs)("div", {
                            className: es.q,
                            children: [
                                (0, i.jsx)(P.E, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: q.intl.format(q.t.isV0NW, { currentQuestion: s + 1, questionCount: r }),
                                }),
                                a.required
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(P.E, {
                                                  variant: "text-xs/normal",
                                                  className: es.HE,
                                                  children: "\xb7",
                                              }),
                                              (0, i.jsx)(P.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-brand",
                                                  children: q.intl.string(q.t.Ur8Vrt),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        (0, i.jsx)(c.D, {
                            className: es.DD,
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            id: t,
                            children: a.title,
                        }),
                        (0, i.jsx)(ei.A, {
                            options: b,
                            value: C,
                            onChange: function (e) {
                                let t = e.find((e) => !h.includes(e.id)),
                                    n = e.map((e) => e.id);
                                if (null != t) u(a.id, t.id, !0);
                                else {
                                    let e = h.filter((e) => !n.includes(e));
                                    a.options
                                        .filter((t) => e.includes(t.id))
                                        .forEach((e) => {
                                            u(a.id, e.id, !1);
                                        });
                                }
                            },
                            memberCounts: E,
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: es.N3,
                    children: [
                        (0, i.jsx)("div", {
                            className: es.X1,
                            children:
                                (s > 0 || o) &&
                                (0, i.jsx)(k.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: q.intl.string(q.t["13/7kX"]),
                                    onClick: () => m(h.length),
                                    icon: J.Z,
                                    iconPosition: "start",
                                }),
                        }),
                        (0, i.jsxs)("div", {
                            className: es.Oh,
                            children: [
                                (0, i.jsxs)(P.E, {
                                    className: es.BK,
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [f, " ", j],
                                }),
                                (0, i.jsx)(Z.m, {
                                    asContainer: !0,
                                    text: p ? q.intl.string(q.t.dA1dSf) : null,
                                    children: (0, i.jsx)(k.$, {
                                        variant: _ ? "secondary" : "primary",
                                        size: "md",
                                        text: l
                                            ? `${q.intl.string(q.t["8SuVoE"])} \u{1F389}`
                                            : _
                                              ? q.intl.string(q.t["5Wxrcd"])
                                              : q.intl.string(q.t.PDTjLN),
                                        onClick: () => (l ? g() : x(h.length)),
                                        disabled: p || d,
                                        loading: d,
                                        icon: l ? void 0 : G.K,
                                        iconPosition: "end",
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function ea(e) {
    let {
            headerId: t,
            guild: n,
            step: s,
            lastPrompt: l,
            questionCount: r,
            currentPrompt: a,
            hasConnections: o,
            isSubmitting: d,
            selectOption: u,
            gotoPrevPrompt: m,
            gotoNextPrompt: x,
            completeOnboarding: g,
        } = e,
        h = (0, X.yK)([O.A], () => O.A.getOnboardingResponsesForPrompt(n.id, a.id)),
        p = 0 === h.length && a?.required,
        v = a?.options.filter((e) => h.includes(e.id)),
        N = (0, D.a)(v),
        A = (0, D.vV)(v),
        _ = 0 === h.length,
        { helpText: f, helpTextAdditional: j } = (0, et.A)({
            guild: n,
            prompt: a,
            selectedRoleIds: N,
            selectedChannelIds: A,
            itemHook: el,
        });
    return (0, i.jsx)("div", {
        className: es.J1,
        children: (0, i.jsxs)("div", {
            className: es.mK,
            children: [
                (0, i.jsxs)(z.Ip, {
                    className: es.gT,
                    children: [
                        (0, i.jsxs)("div", {
                            className: es.q,
                            children: [
                                (0, i.jsx)(P.E, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: q.intl.format(q.t.isV0NW, { currentQuestion: s + 1, questionCount: r }),
                                }),
                                a.required
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(P.E, {
                                                  variant: "text-xs/normal",
                                                  className: es.HE,
                                                  children: "\xb7",
                                              }),
                                              (0, i.jsx)(P.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-brand",
                                                  children: q.intl.string(q.t.Ur8Vrt),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        (0, i.jsx)(c.D, {
                            className: es.DD,
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            id: t,
                            children: a.title,
                        }),
                        (0, i.jsx)("div", {
                            className: es.vS,
                            children: a.options.map((e) =>
                                (0, i.jsx)(
                                    en.A,
                                    {
                                        guildId: n.id,
                                        option: e,
                                        onSelect: (t) => u(a.id, e.id, t ?? !1),
                                        selected: h.includes(e.id),
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: es.N3,
                    children: [
                        (0, i.jsx)("div", {
                            className: es.X1,
                            children:
                                (s > 0 || o) &&
                                (0, i.jsx)(k.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: q.intl.string(q.t["13/7kX"]),
                                    onClick: () => m(h.length),
                                    icon: J.Z,
                                    iconPosition: "start",
                                }),
                        }),
                        (0, i.jsxs)("div", {
                            className: es.Oh,
                            children: [
                                (0, i.jsxs)(P.E, {
                                    className: es.BK,
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [f, " ", j],
                                }),
                                (0, i.jsx)(Z.m, {
                                    asContainer: !0,
                                    text: p ? q.intl.string(q.t.dA1dSf) : null,
                                    children: (0, i.jsx)(k.$, {
                                        variant: _ ? "secondary" : "primary",
                                        size: "md",
                                        text: l
                                            ? `${q.intl.string(q.t["8SuVoE"])} \u{1F389}`
                                            : _
                                              ? q.intl.string(q.t["5Wxrcd"])
                                              : q.intl.string(q.t.PDTjLN),
                                        onClick: () => (l ? g() : x(h.length)),
                                        disabled: p || d,
                                        loading: d,
                                        icon: l ? void 0 : G.K,
                                        iconPosition: "end",
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function eo(e) {
    let {
            guild: t,
            prompts: n,
            step: l,
            selectOption: r,
            completeOnboarding: a,
            setCurrentStep: o,
            headerId: d,
            disableTracking: c,
        } = e,
        [u, m] = s.useState(!1),
        x = (0, X.bG)([p.A], () => p.A.getRulesPrompt(t.id)),
        g = (0, X.bG)([O.A], () => O.A.getOnboardingConnections(t.id)),
        h = s.useCallback(() => {
            (m(!0), a());
        }, [a]);
    s.useEffect(() => {
        t.features.has($.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            !t.features.has($.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            Q.Ay.fetchVerificationForm(t.id);
    }, [t]);
    let v = n[l],
        N = l + 1 >= n.length && !(0, D.L1)(t, x),
        A = n[0].required;
    function _(e) {
        (!c &&
            (R.default.track($.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                ...(0, L.H$)(t.id),
                step: l,
                options_selected: e,
                skipped: 0 === e,
                back: !1,
                in_onboarding: !0,
                is_final_step: !1,
            }),
            l < n.length - 1 &&
                R.default.track($.HAw.GUILD_ONBOARDING_STEP_VIEWED, {
                    ...(0, L.H$)(t.id),
                    step: l,
                    required: n[l + 1].required,
                })),
            l + 1 < n.length ? o(l + 1) : (0, D.L1)(t, x) && o("rules"));
    }
    function f(e) {
        (!c &&
            (R.default.track($.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                ...(0, L.H$)(t.id),
                step: l,
                skipped: !1,
                back: !0,
                options_selected: e,
                in_onboarding: !0,
                is_final_step: !1,
            }),
            l > 0 &&
                R.default.track($.HAw.GUILD_ONBOARDING_STEP_VIEWED, {
                    ...(0, L.H$)(t.id),
                    step: l - 1,
                    required: n[l - 1].required,
                })),
            0 === l && g.length > 0 ? o("connections") : o(Math.max(0, l - 1)));
    }
    if (
        (s.useEffect(() => {
            c || R.default.track($.HAw.GUILD_ONBOARDING_STEP_VIEWED, { ...(0, L.H$)(t.id), step: 0, required: A });
        }, [t.id, A, c]),
        null == v)
    )
        return null;
    switch (v.type) {
        case V.ME.MULTIPLE_CHOICE:
            return (0, i.jsx)(ea, {
                guild: t,
                headerId: d,
                step: l,
                questionCount: n.length,
                currentPrompt: v,
                lastPrompt: N,
                hasConnections: g.length > 0,
                isSubmitting: u,
                selectOption: r,
                gotoPrevPrompt: f,
                gotoNextPrompt: _,
                completeOnboarding: h,
            });
        case V.ME.DROPDOWN:
            return (0, i.jsx)(er, {
                guild: t,
                headerId: d,
                step: l,
                questionCount: n.length,
                currentPrompt: v,
                lastPrompt: N,
                hasConnections: g.length > 0,
                isSubmitting: u,
                selectOption: r,
                gotoPrevPrompt: f,
                gotoNextPrompt: _,
                completeOnboarding: h,
            });
        default:
            (0, ee.xb)(v.type);
    }
}
var ed = n(689175),
    ec = n(46054);
function eu(e) {
    let {
            guild: t,
            prompts: n,
            completeOnboarding: l,
            setCurrentStep: r,
            disableTracking: a,
            previousPromptIndex: o,
        } = e,
        d = s.useRef(null),
        u = (0, X.bG)([p.A], () => p.A.getRulesPrompt(t.id)),
        [m, x] = s.useState(u?.response ?? !1),
        [g, h] = s.useState(!1),
        v = (0, X.bG)([p.A], () => p.A.get(t.id)),
        N = s.useRef(null),
        A = s.useRef(null),
        _ = s.useCallback(async () => {
            if (null != v && null != u) {
                h(!0);
                try {
                    await Q.Ay.submitVerificationForm(t.id, { ...v, formFields: [{ ...u, response: m }] });
                } catch {}
                l();
            }
        }, [t.id, v, u, m, l]);
    function f(e) {
        let [t] = e;
        t.isIntersecting && x(!0);
    }
    return (s.useEffect(() => {
        let e = new IntersectionObserver(f, { root: N.current, rootMargin: "0px", threshold: 0 }),
            t = A.current;
        return (
            null != t && null != t.lastElementChild && e.observe(t.lastElementChild),
            () => {
                null != t && null != t.lastElementChild && e.unobserve(t.lastElementChild);
            }
        );
    }, [A, N]),
    null == u)
        ? null
        : (0, i.jsx)("div", {
              className: es.J1,
              children: (0, i.jsxs)("div", {
                  className: es.mK,
                  ref: N,
                  children: [
                      (0, i.jsxs)(ed.Ch, {
                          className: es.gT,
                          ref: d,
                          children: [
                              (0, i.jsx)(P.E, {
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  children: q.intl.string(q.t["b1JC+l"]),
                              }),
                              (0, i.jsx)(c.D, { variant: "heading-xl/semibold", children: q.intl.string(q.t.prJqwT) }),
                              (0, i.jsx)("div", {
                                  className: es.qE,
                                  ref: A,
                                  children: u.values.map((e, n) =>
                                      (0, i.jsxs)(
                                          "div",
                                          {
                                              className: es.gJ,
                                              children: [
                                                  (0, i.jsx)(P.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: `${n + 1}.`,
                                                  }),
                                                  (0, i.jsx)(P.E, {
                                                      variant: "text-sm/normal",
                                                      className: es.RQ,
                                                      children: ec.A.parseGuildVerificationFormRule(e, !0, {
                                                          channelId: t.rulesChannelId,
                                                      }),
                                                  }),
                                              ],
                                          },
                                          `term-${n}`,
                                      ),
                                  ),
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", { className: es.Lw }),
                      (0, i.jsxs)("div", {
                          className: es.N3,
                          children: [
                              (0, i.jsx)("div", {
                                  className: es.X1,
                                  children:
                                      -1 !== o &&
                                      "cover" !== o &&
                                      (0, i.jsx)(k.$, {
                                          variant: "secondary",
                                          size: "md",
                                          text: q.intl.string(q.t["13/7kX"]),
                                          onClick: function () {
                                              (!a &&
                                                  (R.default.track($.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                                                      ...(0, L.H$)(t.id),
                                                      step: -1,
                                                      skipped: !1,
                                                      back: !0,
                                                      options_selected: 0,
                                                      in_onboarding: !0,
                                                      is_final_step: !1,
                                                  }),
                                                  "number" == typeof o &&
                                                      o >= 0 &&
                                                      R.default.track($.HAw.GUILD_ONBOARDING_STEP_VIEWED, {
                                                          ...(0, L.H$)(t.id),
                                                          step: o,
                                                          required: n[o].required,
                                                      })),
                                                  r(o));
                                          },
                                          icon: J.Z,
                                          iconPosition: "start",
                                      }),
                              }),
                              (0, i.jsxs)("div", {
                                  className: es.Oh,
                                  children: [
                                      (0, i.jsx)(P.E, {
                                          className: es.BK,
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          children: m ? q.intl.string(q.t.arAe3I) : q.intl.string(q.t.D0CVAc),
                                      }),
                                      (0, i.jsx)(k.$, {
                                          variant: "primary",
                                          size: "md",
                                          text: `${q.intl.string(q.t["8SuVoE"])} \u{1F389}`,
                                          onClick: _,
                                          disabled: !m || g,
                                          loading: g,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
var em = n(660238);
function ex(e) {
    let { guildId: t } = e,
        { ref: l, width: I, height: P } = (0, x.Ay)(),
        k = (0, o.yK)([O.A], () => O.A.getOnboardingPromptsForOnboarding(t)),
        G = (0, o.bG)([O.A], () => O.A.getEnabled(t)),
        y = (0, o.bG)([O.A], () => O.A.getOnboardingConnections(t)),
        L = (0, o.bG)([p.A], () => p.A.getRulesPrompt(t)),
        S = s.useCallback(
            (e, n, i) => {
                b.A.selectOption(t, e, n, i);
            },
            [t],
        ),
        T = s.useCallback(() => {
            b.A.completeOnboarding(t, k);
        }, [t, k]),
        R = (0, o.bG)([f.A], () => f.A.getGuild(t)),
        H = s.useMemo(() => (null == R ? null : j.Ay.getGuildSplashURL({ id: R.id, splash: R.splash })), [R]),
        w = (0, h.S)(H),
        V = s.useRef(null),
        F = s.useCallback(
            (e) => {
                null == H ||
                    (null != V.current && V.current.contains(e.target)) ||
                    (0, u.L3)(e, async () => {
                        let { default: e } = await Promise.all([n.e("95340"), n.e("895813")]).then(n.bind(n, 977700));
                        return (t) => (0, i.jsx)(e, { ...t, splashUrl: H });
                    });
            },
            [H],
        ),
        M = (0, o.bG)([C.Ay], () => C.Ay.getCurrentOnboardingStep(t)),
        [U, W] = s.useState(null != H ? null : "cover"),
        [X, z] = s.useState(!1),
        J = s.useCallback(
            (e) => {
                (W(M), b.A.setUserOnboardingStep(t, e));
            },
            [t, M],
        ),
        Z = (0, o.bG)([N.A], () => N.A.isFullServerPreview(t)),
        Q = (0, o.bG)([C.Ay], () => C.Ay.getOnboardingStatus(t)),
        Y = null != k && k.length > 0,
        ee = s.useCallback(() => {
            (0, C.eg)(Q) && G && (Y || 0 !== y.length) ? (y.length > 0 ? J("connections") : J(0)) : T();
        }, [Q, G, Y, y.length, J, T]);
    s.useEffect(() => {
        if (!C.Ay.shouldShowOnboarding(t)) return m.A.escapeToDefaultChannel(t);
        (0, v.L)(t);
    }, [t]);
    let et = (0, d.p)(
            M,
            { config: a.config.default, from: { scale: 0.8, opacity: 0 }, enter: { scale: 1, opacity: 1 } },
            "cover" !== U && null !== U ? "animate-never" : "respect-motion-settings",
        ),
        en = C.Ay.shouldShowOnboarding(t),
        ei = null == R;
    return (s.useEffect(() => {
        if (!en || ei) {
            let e = setTimeout(() => {
                (0, A.pX)($.BVt.CHANNEL(t));
            }, 1e3);
            return () => clearTimeout(e);
        }
    }, [en, ei, t]),
    C.Ay.shouldShowOnboarding(t) && null != R)
        ? (0, i.jsxs)("div", {
              className: r()(em.iW, { [em.Me]: null == H }),
              ref: l,
              onContextMenu: F,
              children: [
                  null != H
                      ? (0, i.jsx)(g.A, { className: em.xX, src: H, width: I, height: P, imageClassName: em.Iv })
                      : (0, i.jsx)(_.A, {}),
                  null != w &&
                      (0, i.jsx)("div", {
                          className: em.D7,
                          style: {
                              background: `linear-gradient(180deg, ${(0, E.cb)(w, 0.16)} 0%, ${(0, E.cb)(w, 1)} 100%)`,
                          },
                      }),
                  null == H ? null : (0, i.jsx)("div", { className: em.D7 }),
                  (0, i.jsxs)("div", {
                      ref: V,
                      children: [
                          et((e, n, s) => {
                              let { key: l } = s;
                              return (0, i.jsx)(
                                  a.animated.div,
                                  {
                                      style: e,
                                      children: (function () {
                                          if (null == R) return null;
                                          switch (M) {
                                              case "cover":
                                                  return (0, i.jsx)(K, {
                                                      guild: R,
                                                      onboardingStatus: C.$o.READY,
                                                      onStart: ee,
                                                      disableTracking: Z,
                                                  });
                                              case "connections":
                                                  return (0, i.jsx)(B, {
                                                      guildId: t,
                                                      isLastStep: 0 === k.length && !(0, D.L1)(R, L),
                                                      isSubmitting: X,
                                                      disableTracking: Z,
                                                      onComplete: () => {
                                                          k.length > 0
                                                              ? J(0)
                                                              : (0, D.L1)(R, L)
                                                                ? J("rules")
                                                                : (z(!0), T());
                                                      },
                                                  });
                                              case "rules":
                                                  return (0, i.jsx)(eu, {
                                                      setCurrentStep: J,
                                                      previousPromptIndex:
                                                          k.length > 0
                                                              ? k.length - 1
                                                              : y.length > 0
                                                                ? "connections"
                                                                : "cover",
                                                      guild: R,
                                                      prompts: k,
                                                      completeOnboarding: T,
                                                      disableTracking: Z,
                                                  });
                                              case null:
                                                  return null;
                                              default:
                                                  return (0, i.jsx)(eo, {
                                                      guild: R,
                                                      prompts: k,
                                                      step: M,
                                                      selectOption: S,
                                                      completeOnboarding: T,
                                                      setCurrentStep: J,
                                                      disableTracking: Z,
                                                  });
                                          }
                                      })(),
                                  },
                                  l,
                              );
                          }),
                          "cover" === M &&
                              (0, i.jsx)("div", {
                                  className: em.m6,
                                  children: (0, i.jsx)(c.D, {
                                      variant: "heading-sm/normal",
                                      color: "text-default",
                                      className: em.hM,
                                      children: q.intl.format(q.t.kI6UoD, { privacyLink: $.X7G.PRIVACY }),
                                  }),
                              }),
                      ],
                  }),
              ],
          })
        : null;
}
