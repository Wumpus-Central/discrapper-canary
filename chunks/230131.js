(t.r(n), t.d(n, { default: () => eg }));
var i = t(477900),
    s = t(582128),
    l = t(503698),
    r = t.n(l),
    a = t(29477),
    d = t(17928),
    o = t(866323),
    c = t(534514),
    u = t(442433),
    m = t(66834),
    g = t(765671),
    h = t(4616),
    x = t(743674),
    p = t(60175),
    v = t(545868),
    N = t(164956),
    A = t(976860),
    _ = t(426660),
    b = t(71393),
    f = t(486020),
    j = t(998304),
    E = t(669953),
    O = t(591552),
    C = t(713125),
    D = t(961973),
    I = t(289873),
    y = t(834730),
    P = t(821609),
    k = t(554830),
    G = t(793574),
    L = t(666860),
    S = t(733110),
    T = t(30370),
    R = t(174459),
    H = t(817818),
    w = t(155965),
    V = t(539916),
    $ = t(652215),
    q = t(105292),
    F = t(579235);
function B(e) {
    let { guildId: n, onComplete: t, isLastStep: l, isSubmitting: r = !1, disableTracking: a } = e,
        o = s.useRef(!1),
        { onboardingConnections: u, isLoading: m } = (0, d.cf)([O.A], () => ({
            onboardingConnections: O.A.getOnboardingConnections(n),
            isLoading: O.A.isLoading(),
        })),
        g = (0, d.bG)(
            [S.default, T.A],
            () =>
                u.some((e) => {
                    if (e.connection_type === V.wZ.APPLICATION && null != e.application_id) {
                        let n = S.default.getNewestTokenForApplication(e.application_id);
                        return (
                            S.default.getFetchStateForApplication(e.application_id) === S.FetchState.FETCHED &&
                            null != n
                        );
                    }
                    if (e.connection_type === V.wZ.PROVIDER_CONNECTED_ACCOUNT && null != e.provider_id) {
                        let n = T.A.getAccount(null, e.provider_id);
                        return null != n && !n.revoked;
                    }
                    return !1;
                }),
            [u],
        );
    s.useEffect(() => {
        if (a || m || 0 === u.length || o.current) return;
        let e = (0, D.H_)(u),
            t = (0, D.OG)(u);
        (R.default.track($.HAw.GUILD_ONBOARDING_STEP_VIEWED, {
            ...(0, L.H$)(n),
            step: H.l8,
            required: !1,
            provider_connections_connected: e.connected,
            provider_connections_not_connected: e.notConnected,
            application_connections_connected: t.connected,
            application_connections_not_connected: t.notConnected,
        }),
            (o.current = !0));
    }, [n, m, u, a]);
    let h = s.useCallback(() => {
        if (!a) {
            let e = (0, D.H_)(u),
                t = (0, D.OG)(u);
            R.default.track($.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                ...(0, L.H$)(n),
                step: H.l8,
                skipped: !g,
                back: !1,
                options_selected: 0,
                in_onboarding: !0,
                is_final_step: l,
                provider_connections_connected: e.connected,
                provider_connections_not_connected: e.notConnected,
                application_connections_connected: t.connected,
                application_connections_not_connected: t.notConnected,
            });
        }
        t();
    }, [t, a, n, u, g, l]);
    return m
        ? (0, i.jsxs)("div", {
              className: F.g4,
              children: [
                  (0, i.jsx)(I.y, {}),
                  (0, i.jsx)(y.E, {
                      variant: "body-md/normal",
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
                                          children: (0, i.jsx)(y.E, {
                                              variant: "body-md/normal",
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
                                      children: u.map((e, t) =>
                                          (0, i.jsx)(
                                              w.A,
                                              { connection: e, guildId: n, location: G.A.GUILD_ONBOARDING },
                                              t,
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
                                      children: (0, i.jsx)(P.$, {
                                          variant: g ? "primary" : "secondary",
                                          onClick: h,
                                          text: g
                                              ? l
                                                  ? `${q.intl.string(q.t["8SuVoE"])} \u{1F389}`
                                                  : q.intl.string(q.t.PDTjLN)
                                              : q.intl.string(q.t["5Wxrcd"]),
                                          disabled: r,
                                          loading: r,
                                          icon: l ? void 0 : k.K,
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
t(883885);
var M = t(964486);
t(775602);
var U = t(260509);
(t(515718), t(739408), t(113473), t(694268), t(896018));
var W = t(689966);
function K(e) {
    let { guild: n, onStart: t, onboardingStatus: l, headerId: r, disableTracking: a } = e,
        o = (0, d.bG)([O.A], () => O.A.isLoading()),
        u = s.useRef(!1);
    s.useEffect(() => {
        if (!a)
            return (
                R.default.track($.HAw.GUILD_ONBOARDING_STEP_VIEWED, { ...(0, L.H$)(n.id), step: -1, required: !0 }),
                () => {
                    R.default.track($.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                        ...(0, L.H$)(n.id),
                        step: -1,
                        skipped: !u.current,
                        is_final_step: !1,
                        in_onboarding: !0,
                    });
                }
            );
    }, [n.id, u, a]);
    let m = s.useMemo(() => (0, U.Iv)(n, 135, !1, !0), [n]);
    return (
        (0, M.Ay)(() => {
            setTimeout(() => {
                ((u.current = !0), t());
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
                            (0, i.jsx)(y.E, {
                                className: W.CH,
                                variant: "body-lg/normal",
                                color: "text-overlay-light",
                                id: r,
                                children: q.intl.format(q.t["j59F/c"], { guildName: n?.name }),
                            }),
                            o
                                ? (0, i.jsx)(I.y, { className: W.__invalid_subtitle })
                                : l === C.$o.NOT_APPLICABLE
                                  ? (0, i.jsx)(c.D, {
                                        className: W.__invalid_subtitle,
                                        variant: "heading-xxl/medium",
                                        color: "text-overlay-light",
                                        children: q.intl.string(q.t.Q5ibtV),
                                    })
                                  : (0, i.jsx)(c.D, {
                                        className: W.__invalid_subtitle,
                                        variant: "heading-xxl/medium",
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
var X = t(702841),
    z = t(364522),
    J = t(548411),
    Z = t(866665),
    Q = t(408213),
    Y = t(386784),
    ee = t(403362),
    en = t(218785),
    et = t(164048),
    ei = t(839447),
    es = t(293403);
function el(e, n) {
    return (0, i.jsx)("span", { className: es.a1, children: e }, n);
}
function er(e) {
    let {
            headerId: n,
            guild: t,
            step: s,
            lastPrompt: l,
            questionCount: r,
            currentPrompt: a,
            hasConnections: d,
            isSubmitting: o,
            selectOption: u,
            gotoPrevPrompt: m,
            gotoNextPrompt: g,
            completeOnboarding: h,
        } = e,
        x = (0, X.yK)([O.A], () => O.A.getOnboardingResponsesForPrompt(t.id, a.id)),
        p = 0 === x.length && a?.required,
        v = a?.options.filter((e) => x.includes(e.id)),
        N = (0, D.a)(v),
        A = (0, D.vV)(v),
        _ = 0 === x.length,
        { helpText: b, helpTextAdditional: f } = (0, en.A)({
            guild: t,
            prompt: a,
            selectedRoleIds: N,
            selectedChannelIds: A,
            itemHook: el,
        }),
        j = (0, Y.A)(t.id, 1e3),
        E = a.options.map((e) => ({ value: e.id, ...e })),
        C = a.options.filter((e) => x.includes(e.id)).map((e) => e.id);
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
                                (0, i.jsx)(y.E, {
                                    variant: "body-sm/medium",
                                    color: "text-muted",
                                    children: q.intl.format(q.t.isV0NW, { currentQuestion: s + 1, questionCount: r }),
                                }),
                                a.required
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(y.E, {
                                                  variant: "body-xs/normal",
                                                  className: es.HE,
                                                  children: "\xb7",
                                              }),
                                              (0, i.jsx)(y.E, {
                                                  variant: "body-sm/medium",
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
                            id: n,
                            children: a.title,
                        }),
                        (0, i.jsx)(ei.A, {
                            options: E,
                            value: C,
                            onChange: function (e) {
                                let n = e.find((e) => !x.includes(e.id)),
                                    t = e.map((e) => e.id);
                                if (null != n) u(a.id, n.id, !0);
                                else {
                                    let e = x.filter((e) => !t.includes(e));
                                    a.options
                                        .filter((n) => e.includes(n.id))
                                        .forEach((e) => {
                                            u(a.id, e.id, !1);
                                        });
                                }
                            },
                            memberCounts: j,
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: es.N3,
                    children: [
                        (0, i.jsx)("div", {
                            className: es.X1,
                            children:
                                (s > 0 || d) &&
                                (0, i.jsx)(P.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: q.intl.string(q.t["13/7kX"]),
                                    onClick: () => m(x.length),
                                    icon: J.Z,
                                    iconPosition: "start",
                                }),
                        }),
                        (0, i.jsxs)("div", {
                            className: es.Oh,
                            children: [
                                (0, i.jsxs)(y.E, {
                                    className: es.BK,
                                    variant: "body-xs/normal",
                                    color: "text-muted",
                                    children: [b, " ", f],
                                }),
                                (0, i.jsx)(Z.m, {
                                    asContainer: !0,
                                    text: p ? q.intl.string(q.t.dA1dSf) : null,
                                    children: (0, i.jsx)(P.$, {
                                        variant: _ ? "secondary" : "primary",
                                        size: "md",
                                        text: l
                                            ? `${q.intl.string(q.t["8SuVoE"])} \u{1F389}`
                                            : _
                                              ? q.intl.string(q.t["5Wxrcd"])
                                              : q.intl.string(q.t.PDTjLN),
                                        onClick: () => (l ? h() : g(x.length)),
                                        disabled: p || o,
                                        loading: o,
                                        icon: l ? void 0 : k.K,
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
            headerId: n,
            guild: t,
            step: s,
            lastPrompt: l,
            questionCount: r,
            currentPrompt: a,
            hasConnections: d,
            isSubmitting: o,
            selectOption: u,
            gotoPrevPrompt: m,
            gotoNextPrompt: g,
            completeOnboarding: h,
        } = e,
        x = (0, X.yK)([O.A], () => O.A.getOnboardingResponsesForPrompt(t.id, a.id)),
        p = 0 === x.length && a?.required,
        v = a?.options.filter((e) => x.includes(e.id)),
        N = (0, D.a)(v),
        A = (0, D.vV)(v),
        _ = 0 === x.length,
        { helpText: b, helpTextAdditional: f } = (0, en.A)({
            guild: t,
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
                                (0, i.jsx)(y.E, {
                                    variant: "body-sm/medium",
                                    color: "text-muted",
                                    children: q.intl.format(q.t.isV0NW, { currentQuestion: s + 1, questionCount: r }),
                                }),
                                a.required
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(y.E, {
                                                  variant: "body-xs/normal",
                                                  className: es.HE,
                                                  children: "\xb7",
                                              }),
                                              (0, i.jsx)(y.E, {
                                                  variant: "body-sm/medium",
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
                            id: n,
                            children: a.title,
                        }),
                        (0, i.jsx)("div", {
                            className: es.vS,
                            children: a.options.map((e) =>
                                (0, i.jsx)(
                                    et.A,
                                    {
                                        guildId: t.id,
                                        option: e,
                                        onSelect: (n) => u(a.id, e.id, n ?? !1),
                                        selected: x.includes(e.id),
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
                                (s > 0 || d) &&
                                (0, i.jsx)(P.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: q.intl.string(q.t["13/7kX"]),
                                    onClick: () => m(x.length),
                                    icon: J.Z,
                                    iconPosition: "start",
                                }),
                        }),
                        (0, i.jsxs)("div", {
                            className: es.Oh,
                            children: [
                                (0, i.jsxs)(y.E, {
                                    className: es.BK,
                                    variant: "body-xs/normal",
                                    color: "text-muted",
                                    children: [b, " ", f],
                                }),
                                (0, i.jsx)(Z.m, {
                                    asContainer: !0,
                                    text: p ? q.intl.string(q.t.dA1dSf) : null,
                                    children: (0, i.jsx)(P.$, {
                                        variant: _ ? "secondary" : "primary",
                                        size: "md",
                                        text: l
                                            ? `${q.intl.string(q.t["8SuVoE"])} \u{1F389}`
                                            : _
                                              ? q.intl.string(q.t["5Wxrcd"])
                                              : q.intl.string(q.t.PDTjLN),
                                        onClick: () => (l ? h() : g(x.length)),
                                        disabled: p || o,
                                        loading: o,
                                        icon: l ? void 0 : k.K,
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
function ed(e) {
    let {
            guild: n,
            prompts: t,
            step: l,
            selectOption: r,
            completeOnboarding: a,
            setCurrentStep: d,
            headerId: o,
            disableTracking: c,
        } = e,
        [u, m] = s.useState(!1),
        g = (0, X.bG)([p.A], () => p.A.getRulesPrompt(n.id)),
        h = (0, X.bG)([O.A], () => O.A.getOnboardingConnections(n.id)),
        x = s.useCallback(() => {
            (m(!0), a());
        }, [a]);
    s.useEffect(() => {
        n.features.has($.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            !n.features.has($.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            Q.Ay.fetchVerificationForm(n.id);
    }, [n]);
    let v = t[l],
        N = l + 1 >= t.length && !(0, D.L1)(n, g),
        A = t[0].required;
    function _(e) {
        (!c &&
            (R.default.track($.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                ...(0, L.H$)(n.id),
                step: l,
                options_selected: e,
                skipped: 0 === e,
                back: !1,
                in_onboarding: !0,
                is_final_step: !1,
            }),
            l < t.length - 1 &&
                R.default.track($.HAw.GUILD_ONBOARDING_STEP_VIEWED, {
                    ...(0, L.H$)(n.id),
                    step: l,
                    required: t[l + 1].required,
                })),
            l + 1 < t.length ? d(l + 1) : (0, D.L1)(n, g) && d("rules"));
    }
    function b(e) {
        (!c &&
            (R.default.track($.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                ...(0, L.H$)(n.id),
                step: l,
                skipped: !1,
                back: !0,
                options_selected: e,
                in_onboarding: !0,
                is_final_step: !1,
            }),
            l > 0 &&
                R.default.track($.HAw.GUILD_ONBOARDING_STEP_VIEWED, {
                    ...(0, L.H$)(n.id),
                    step: l - 1,
                    required: t[l - 1].required,
                })),
            0 === l && h.length > 0 ? d("connections") : d(Math.max(0, l - 1)));
    }
    if (
        (s.useEffect(() => {
            c || R.default.track($.HAw.GUILD_ONBOARDING_STEP_VIEWED, { ...(0, L.H$)(n.id), step: 0, required: A });
        }, [n.id, A, c]),
        null == v)
    )
        return null;
    switch (v.type) {
        case V.ME.MULTIPLE_CHOICE:
            return (0, i.jsx)(ea, {
                guild: n,
                headerId: o,
                step: l,
                questionCount: t.length,
                currentPrompt: v,
                lastPrompt: N,
                hasConnections: h.length > 0,
                isSubmitting: u,
                selectOption: r,
                gotoPrevPrompt: b,
                gotoNextPrompt: _,
                completeOnboarding: x,
            });
        case V.ME.DROPDOWN:
            return (0, i.jsx)(er, {
                guild: n,
                headerId: o,
                step: l,
                questionCount: t.length,
                currentPrompt: v,
                lastPrompt: N,
                hasConnections: h.length > 0,
                isSubmitting: u,
                selectOption: r,
                gotoPrevPrompt: b,
                gotoNextPrompt: _,
                completeOnboarding: x,
            });
        default:
            (0, ee.xb)(v.type);
    }
}
var eo = t(689175),
    ec = t(46054);
function eu(e) {
    let {
            guild: n,
            prompts: t,
            completeOnboarding: l,
            setCurrentStep: r,
            disableTracking: a,
            previousPromptIndex: d,
        } = e,
        o = s.useRef(null),
        u = (0, X.bG)([p.A], () => p.A.getRulesPrompt(n.id)),
        [m, g] = s.useState(u?.response ?? !1),
        [h, x] = s.useState(!1),
        v = (0, X.bG)([p.A], () => p.A.get(n.id)),
        N = s.useRef(null),
        A = s.useRef(null),
        _ = s.useCallback(async () => {
            if (null != v && null != u) {
                x(!0);
                try {
                    await Q.Ay.submitVerificationForm(n.id, { ...v, formFields: [{ ...u, response: m }] });
                } catch {}
                l();
            }
        }, [n.id, v, u, m, l]);
    function b(e) {
        let [n] = e;
        n.isIntersecting && g(!0);
    }
    return (s.useEffect(() => {
        let e = new IntersectionObserver(b, { root: N.current, rootMargin: "0px", threshold: 0 }),
            n = A.current;
        return (
            null != n && null != n.lastElementChild && e.observe(n.lastElementChild),
            () => {
                null != n && null != n.lastElementChild && e.unobserve(n.lastElementChild);
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
                      (0, i.jsxs)(eo.Ch, {
                          className: es.gT,
                          ref: o,
                          children: [
                              (0, i.jsx)(y.E, {
                                  variant: "body-sm/medium",
                                  color: "text-muted",
                                  children: q.intl.string(q.t["b1JC+l"]),
                              }),
                              (0, i.jsx)(c.D, { variant: "heading-xl/semibold", children: q.intl.string(q.t.prJqwT) }),
                              (0, i.jsx)("div", {
                                  className: es.qE,
                                  ref: A,
                                  children: u.values.map((e, t) =>
                                      (0, i.jsxs)(
                                          "div",
                                          {
                                              className: es.gJ,
                                              children: [
                                                  (0, i.jsx)(y.E, {
                                                      variant: "body-sm/normal",
                                                      color: "text-muted",
                                                      children: `${t + 1}.`,
                                                  }),
                                                  (0, i.jsx)(y.E, {
                                                      variant: "body-sm/normal",
                                                      className: es.RQ,
                                                      children: ec.A.parseGuildVerificationFormRule(e, !0, {
                                                          channelId: n.rulesChannelId,
                                                      }),
                                                  }),
                                              ],
                                          },
                                          `term-${t}`,
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
                                      -1 !== d &&
                                      "cover" !== d &&
                                      (0, i.jsx)(P.$, {
                                          variant: "secondary",
                                          size: "md",
                                          text: q.intl.string(q.t["13/7kX"]),
                                          onClick: function () {
                                              (!a &&
                                                  (R.default.track($.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                                                      ...(0, L.H$)(n.id),
                                                      step: -1,
                                                      skipped: !1,
                                                      back: !0,
                                                      options_selected: 0,
                                                      in_onboarding: !0,
                                                      is_final_step: !1,
                                                  }),
                                                  "number" == typeof d &&
                                                      d >= 0 &&
                                                      R.default.track($.HAw.GUILD_ONBOARDING_STEP_VIEWED, {
                                                          ...(0, L.H$)(n.id),
                                                          step: d,
                                                          required: t[d].required,
                                                      })),
                                                  r(d));
                                          },
                                          icon: J.Z,
                                          iconPosition: "start",
                                      }),
                              }),
                              (0, i.jsxs)("div", {
                                  className: es.Oh,
                                  children: [
                                      (0, i.jsx)(y.E, {
                                          className: es.BK,
                                          variant: "body-xs/normal",
                                          color: "text-muted",
                                          children: m ? q.intl.string(q.t.arAe3I) : q.intl.string(q.t.D0CVAc),
                                      }),
                                      (0, i.jsx)(P.$, {
                                          variant: "primary",
                                          size: "md",
                                          text: `${q.intl.string(q.t["8SuVoE"])} \u{1F389}`,
                                          onClick: _,
                                          disabled: !m || h,
                                          loading: h,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
var em = t(660238);
function eg(e) {
    let { guildId: n } = e,
        { ref: l, width: I, height: y } = (0, g.Ay)(),
        P = (0, d.yK)([O.A], () => O.A.getOnboardingPromptsForOnboarding(n)),
        k = (0, d.bG)([O.A], () => O.A.getEnabled(n)),
        G = (0, d.bG)([O.A], () => O.A.getOnboardingConnections(n)),
        L = (0, d.bG)([p.A], () => p.A.getRulesPrompt(n)),
        S = s.useCallback(
            (e, t, i) => {
                E.A.selectOption(n, e, t, i);
            },
            [n],
        ),
        T = s.useCallback(() => {
            E.A.completeOnboarding(n, P);
        }, [n, P]),
        R = (0, d.bG)([b.A], () => b.A.getGuild(n)),
        H = s.useMemo(() => (null == R ? null : f.Ay.getGuildSplashURL({ id: R.id, splash: R.splash })), [R]),
        w = (0, x.S)(H),
        V = s.useRef(null),
        F = s.useCallback(
            (e) => {
                null == H ||
                    (null != V.current && V.current.contains(e.target)) ||
                    (0, u.L3)(e, async () => {
                        let { default: e } = await Promise.all([t.e("95340"), t.e("895813")]).then(t.bind(t, 977700));
                        return (n) => (0, i.jsx)(e, { ...n, splashUrl: H });
                    });
            },
            [H],
        ),
        M = (0, d.bG)([C.Ay], () => C.Ay.getCurrentOnboardingStep(n)),
        [U, W] = s.useState(null != H ? null : "cover"),
        [X, z] = s.useState(!1),
        J = s.useCallback(
            (e) => {
                (W(M), E.A.setUserOnboardingStep(n, e));
            },
            [n, M],
        ),
        Z = (0, d.bG)([N.A], () => N.A.isFullServerPreview(n)),
        Q = (0, d.bG)([C.Ay], () => C.Ay.getOnboardingStatus(n)),
        Y = null != P && P.length > 0,
        ee = s.useCallback(() => {
            (0, C.eg)(Q) && k && (Y || 0 !== G.length) ? (G.length > 0 ? J("connections") : J(0)) : T();
        }, [Q, k, Y, G.length, J, T]);
    s.useEffect(() => {
        if (!C.Ay.shouldShowOnboarding(n)) return m.A.escapeToDefaultChannel(n);
        (0, v.L)(n);
    }, [n]);
    let en = (0, o.p)(
            M,
            { config: a.config.default, from: { scale: 0.8, opacity: 0 }, enter: { scale: 1, opacity: 1 } },
            "cover" !== U && null !== U ? "animate-never" : "respect-motion-settings",
        ),
        et = C.Ay.shouldShowOnboarding(n),
        ei = null == R;
    return (s.useEffect(() => {
        if (!et || ei) {
            let e = setTimeout(() => {
                (0, A.pX)($.BVt.CHANNEL(n));
            }, 1e3);
            return () => clearTimeout(e);
        }
    }, [et, ei, n]),
    C.Ay.shouldShowOnboarding(n) && null != R)
        ? (0, i.jsxs)("div", {
              className: r()(em.iW, { [em.Me]: null == H }),
              ref: l,
              onContextMenu: F,
              children: [
                  null != H
                      ? (0, i.jsx)(h.A, { className: em.xX, src: H, width: I, height: y, imageClassName: em.Iv })
                      : (0, i.jsx)(_.A, {}),
                  null != w &&
                      (0, i.jsx)("div", {
                          className: em.D7,
                          style: {
                              background: `linear-gradient(180deg, ${(0, j.cb)(w, 0.16)} 0%, ${(0, j.cb)(w, 1)} 100%)`,
                          },
                      }),
                  null == H ? null : (0, i.jsx)("div", { className: em.D7 }),
                  (0, i.jsxs)("div", {
                      ref: V,
                      children: [
                          en((e, t, s) => {
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
                                                      guildId: n,
                                                      isLastStep: 0 === P.length && !(0, D.L1)(R, L),
                                                      isSubmitting: X,
                                                      disableTracking: Z,
                                                      onComplete: () => {
                                                          P.length > 0
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
                                                          P.length > 0
                                                              ? P.length - 1
                                                              : G.length > 0
                                                                ? "connections"
                                                                : "cover",
                                                      guild: R,
                                                      prompts: P,
                                                      completeOnboarding: T,
                                                      disableTracking: Z,
                                                  });
                                              case null:
                                                  return null;
                                              default:
                                                  return (0, i.jsx)(ed, {
                                                      guild: R,
                                                      prompts: P,
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
                                      variant: "heading-xs/medium",
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
