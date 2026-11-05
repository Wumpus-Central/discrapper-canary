(t.r(n), t.d(n, { default: () => em }));
var i = t(477900),
    s = t(582128),
    l = t(503698),
    r = t.n(l),
    a = t(120692),
    d = t(855986),
    o = t(866323),
    c = t(534514),
    u = t(442433),
    m = t(778858),
    g = t(765671),
    h = t(4616),
    x = t(743674),
    p = t(60175),
    v = t(545868),
    A = t(164956),
    N = t(976860),
    _ = t(426660),
    b = t(71393),
    j = t(486020),
    f = t(998304),
    E = t(669953),
    O = t(591552),
    C = t(713125),
    D = t(961973),
    I = t(289873),
    y = t(834730),
    P = t(821609),
    k = t(554830),
    G = t(793574),
    L = t(149468),
    S = t(733110),
    T = t(417869),
    R = t(129230);
t(817818);
var H = t(528275),
    w = t(539916),
    V = t(652215),
    $ = t(792996),
    q = t(579235);
function F(e) {
    let { guildId: n, onComplete: t, isLastStep: l, isSubmitting: r = !1, disableTracking: a } = e,
        o = s.useRef(!1),
        { onboardingConnections: u, isLoading: m } = (0, d.cf)([O.A], () => ({
            onboardingConnections: O.A.getOnboardingConnections(n),
            isLoading: O.A.isLoading(),
        })),
        g = (0, d.bG)(
            [S.A, T.A],
            () =>
                u.some((e) => {
                    if (e.connection_type === w.wZ.APPLICATION && null != e.application_id) {
                        let n = S.A.getNewestTokenForApplication(e.application_id);
                        return S.A.getFetchStateForApplication(e.application_id) === S.FetchState.FETCHED && null != n;
                    }
                    if (e.connection_type === w.wZ.PROVIDER_CONNECTED_ACCOUNT && null != e.provider_id) {
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
        (R.default.track(V.HAw.GUILD_ONBOARDING_STEP_VIEWED, {
            ...(0, L.H$)(n),
            step: -3,
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
            R.default.track(V.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                ...(0, L.H$)(n),
                step: -3,
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
              className: q.g4,
              children: [
                  (0, i.jsx)(I.y, {}),
                  (0, i.jsx)(y.E, {
                      variant: "body-md/normal",
                      color: "text-muted",
                      children: $.intl.string($.t.ZTNur7),
                  }),
              ],
          })
        : (0, i.jsx)("div", {
              className: q.kL,
              children: (0, i.jsxs)("div", {
                  className: q.Qs,
                  children: [
                      (0, i.jsxs)("div", {
                          className: q.gT,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: q.wx,
                                  children: [
                                      (0, i.jsx)("div", {
                                          className: q.qd,
                                          children: (0, i.jsx)(c.D, {
                                              variant: "heading-xl/semibold",
                                              children: $.intl.string($.t.eDVMrA),
                                          }),
                                      }),
                                      (0, i.jsx)("div", {
                                          className: q.ux,
                                          children: (0, i.jsx)(y.E, {
                                              variant: "body-md/normal",
                                              color: "text-muted",
                                              children: $.intl.string($.t.BozOXu),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)("div", {
                                  className: q.A5,
                                  children: (0, i.jsx)("div", {
                                      className: q.eF,
                                      children: u.map((e, t) =>
                                          (0, i.jsx)(
                                              H.A,
                                              { connection: e, guildId: n, location: G.A.GUILD_ONBOARDING },
                                              t,
                                          ),
                                      ),
                                  }),
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          className: q.qr,
                          children: (0, i.jsxs)("div", {
                              className: q.o1,
                              children: [
                                  (0, i.jsx)("div", {}),
                                  (0, i.jsx)("div", {
                                      className: q.E3,
                                      children: (0, i.jsx)(P.$, {
                                          variant: g ? "primary" : "secondary",
                                          onClick: h,
                                          text: g
                                              ? l
                                                  ? `${$.intl.string($.t["8SuVoE"])} \u{1F389}`
                                                  : $.intl.string($.t.PDTjLN)
                                              : $.intl.string($.t["5Wxrcd"]),
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
var B = t(964486);
t(775602);
var M = t(260509);
(t(515718), t(739408), t(113473), t(694268), t(896018));
var U = t(689966);
function W(e) {
    let { guild: n, onStart: t, onboardingStatus: l, headerId: r, disableTracking: a } = e,
        o = (0, d.bG)([O.A], () => O.A.isLoading()),
        u = s.useRef(!1);
    s.useEffect(() => {
        if (!a)
            return (
                R.default.track(V.HAw.GUILD_ONBOARDING_STEP_VIEWED, { ...(0, L.H$)(n.id), step: -1, required: !0 }),
                () => {
                    R.default.track(V.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                        ...(0, L.H$)(n.id),
                        step: -1,
                        skipped: !u.current,
                        is_final_step: !1,
                        in_onboarding: !0,
                    });
                }
            );
    }, [n.id, u, a]);
    let m = s.useMemo(() => (0, M.Iv)(n, 135, !1, !0), [n]);
    return (
        (0, B.Ay)(() => {
            setTimeout(() => {
                ((u.current = !0), t());
            }, 3e3);
        }),
        (0, i.jsx)("div", {
            className: U.PY,
            children: (0, i.jsxs)("div", {
                className: U.Fo,
                children: [
                    (0, i.jsx)("div", { children: (0, i.jsx)("img", { className: U.D3, src: m, alt: "" }) }),
                    (0, i.jsxs)("div", {
                        className: U.rD,
                        children: [
                            (0, i.jsx)(y.E, {
                                className: U.CH,
                                variant: "body-lg/normal",
                                color: "text-overlay-light",
                                id: r,
                                children: $.intl.format($.t["j59F/c"], { guildName: n?.name }),
                            }),
                            o
                                ? (0, i.jsx)(I.y, { className: U.__invalid_subtitle })
                                : l === C.$o.NOT_APPLICABLE
                                  ? (0, i.jsx)(c.D, {
                                        className: U.__invalid_subtitle,
                                        variant: "heading-xxl/medium",
                                        color: "text-overlay-light",
                                        children: $.intl.string($.t.Q5ibtV),
                                    })
                                  : (0, i.jsx)(c.D, {
                                        className: U.__invalid_subtitle,
                                        variant: "heading-xxl/medium",
                                        color: "text-overlay-light",
                                        children: $.intl.string($.t["Alcl/e"]),
                                    }),
                        ],
                    }),
                ],
            }),
        })
    );
}
var K = t(164636),
    X = t(95362),
    z = t(548411),
    J = t(866665),
    Z = t(408213),
    Q = t(386784),
    Y = t(403362),
    ee = t(218785),
    en = t(164048),
    et = t(839447),
    ei = t(293403);
function es(e, n) {
    return (0, i.jsx)("span", { className: ei.a1, children: e }, n);
}
function el(e) {
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
        x = (0, K.yK)([O.A], () => O.A.getOnboardingResponsesForPrompt(t.id, a.id)),
        p = 0 === x.length && a?.required,
        v = a?.options.filter((e) => x.includes(e.id)),
        A = (0, D.a)(v),
        N = (0, D.vV)(v),
        _ = 0 === x.length,
        { helpText: b, helpTextAdditional: j } = (0, ee.A)({
            guild: t,
            prompt: a,
            selectedRoleIds: A,
            selectedChannelIds: N,
            itemHook: es,
        }),
        f = (0, Q.A)(t.id, 1e3),
        E = a.options.map((e) => ({ value: e.id, ...e })),
        C = a.options.filter((e) => x.includes(e.id)).map((e) => e.id);
    return (0, i.jsx)("div", {
        className: ei.J1,
        children: (0, i.jsxs)("div", {
            className: ei.mK,
            children: [
                (0, i.jsxs)(X.Ip, {
                    className: ei.gT,
                    children: [
                        (0, i.jsxs)("div", {
                            className: ei.q,
                            children: [
                                (0, i.jsx)(y.E, {
                                    variant: "body-sm/medium",
                                    color: "text-muted",
                                    children: $.intl.format($.t.isV0NW, { currentQuestion: s + 1, questionCount: r }),
                                }),
                                a.required
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(y.E, {
                                                  variant: "body-xs/normal",
                                                  className: ei.HE,
                                                  children: "\xb7",
                                              }),
                                              (0, i.jsx)(y.E, {
                                                  variant: "body-sm/medium",
                                                  color: "text-brand",
                                                  children: $.intl.string($.t.Ur8Vrt),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        (0, i.jsx)(c.D, {
                            className: ei.DD,
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            id: n,
                            children: a.title,
                        }),
                        (0, i.jsx)(et.A, {
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
                            memberCounts: f,
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: ei.N3,
                    children: [
                        (0, i.jsx)("div", {
                            className: ei.X1,
                            children:
                                (s > 0 || d) &&
                                (0, i.jsx)(P.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: $.intl.string($.t["13/7kX"]),
                                    onClick: () => m(x.length),
                                    icon: z.Z,
                                    iconPosition: "start",
                                }),
                        }),
                        (0, i.jsxs)("div", {
                            className: ei.Oh,
                            children: [
                                (0, i.jsxs)(y.E, {
                                    className: ei.BK,
                                    variant: "body-xs/normal",
                                    color: "text-muted",
                                    children: [b, " ", j],
                                }),
                                (0, i.jsx)(J.m, {
                                    asContainer: !0,
                                    text: p ? $.intl.string($.t.dA1dSf) : null,
                                    children: (0, i.jsx)(P.$, {
                                        variant: _ ? "secondary" : "primary",
                                        size: "md",
                                        text: l
                                            ? `${$.intl.string($.t["8SuVoE"])} \u{1F389}`
                                            : _
                                              ? $.intl.string($.t["5Wxrcd"])
                                              : $.intl.string($.t.PDTjLN),
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
        x = (0, K.yK)([O.A], () => O.A.getOnboardingResponsesForPrompt(t.id, a.id)),
        p = 0 === x.length && a?.required,
        v = a?.options.filter((e) => x.includes(e.id)),
        A = (0, D.a)(v),
        N = (0, D.vV)(v),
        _ = 0 === x.length,
        { helpText: b, helpTextAdditional: j } = (0, ee.A)({
            guild: t,
            prompt: a,
            selectedRoleIds: A,
            selectedChannelIds: N,
            itemHook: es,
        });
    return (0, i.jsx)("div", {
        className: ei.J1,
        children: (0, i.jsxs)("div", {
            className: ei.mK,
            children: [
                (0, i.jsxs)(X.Ip, {
                    className: ei.gT,
                    children: [
                        (0, i.jsxs)("div", {
                            className: ei.q,
                            children: [
                                (0, i.jsx)(y.E, {
                                    variant: "body-sm/medium",
                                    color: "text-muted",
                                    children: $.intl.format($.t.isV0NW, { currentQuestion: s + 1, questionCount: r }),
                                }),
                                a.required
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(y.E, {
                                                  variant: "body-xs/normal",
                                                  className: ei.HE,
                                                  children: "\xb7",
                                              }),
                                              (0, i.jsx)(y.E, {
                                                  variant: "body-sm/medium",
                                                  color: "text-brand",
                                                  children: $.intl.string($.t.Ur8Vrt),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        (0, i.jsx)(c.D, {
                            className: ei.DD,
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            id: n,
                            children: a.title,
                        }),
                        (0, i.jsx)("div", {
                            className: ei.vS,
                            children: a.options.map((e) =>
                                (0, i.jsx)(
                                    en.A,
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
                    className: ei.N3,
                    children: [
                        (0, i.jsx)("div", {
                            className: ei.X1,
                            children:
                                (s > 0 || d) &&
                                (0, i.jsx)(P.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: $.intl.string($.t["13/7kX"]),
                                    onClick: () => m(x.length),
                                    icon: z.Z,
                                    iconPosition: "start",
                                }),
                        }),
                        (0, i.jsxs)("div", {
                            className: ei.Oh,
                            children: [
                                (0, i.jsxs)(y.E, {
                                    className: ei.BK,
                                    variant: "body-xs/normal",
                                    color: "text-muted",
                                    children: [b, " ", j],
                                }),
                                (0, i.jsx)(J.m, {
                                    asContainer: !0,
                                    text: p ? $.intl.string($.t.dA1dSf) : null,
                                    children: (0, i.jsx)(P.$, {
                                        variant: _ ? "secondary" : "primary",
                                        size: "md",
                                        text: l
                                            ? `${$.intl.string($.t["8SuVoE"])} \u{1F389}`
                                            : _
                                              ? $.intl.string($.t["5Wxrcd"])
                                              : $.intl.string($.t.PDTjLN),
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
        g = (0, K.bG)([p.A], () => p.A.getRulesPrompt(n.id)),
        h = (0, K.bG)([O.A], () => O.A.getOnboardingConnections(n.id)),
        x = s.useCallback(() => {
            (m(!0), a());
        }, [a]);
    s.useEffect(() => {
        n.features.has(V.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            !n.features.has(V.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            Z.Ay.fetchVerificationForm(n.id);
    }, [n]);
    let v = t[l],
        A = l + 1 >= t.length && !(0, D.L1)(n, g),
        N = t[0].required;
    function _(e) {
        (!c &&
            (R.default.track(V.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                ...(0, L.H$)(n.id),
                step: l,
                options_selected: e,
                skipped: 0 === e,
                back: !1,
                in_onboarding: !0,
                is_final_step: !1,
            }),
            l < t.length - 1 &&
                R.default.track(V.HAw.GUILD_ONBOARDING_STEP_VIEWED, {
                    ...(0, L.H$)(n.id),
                    step: l,
                    required: t[l + 1].required,
                })),
            l + 1 < t.length ? d(l + 1) : (0, D.L1)(n, g) && d("rules"));
    }
    function b(e) {
        (!c &&
            (R.default.track(V.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                ...(0, L.H$)(n.id),
                step: l,
                skipped: !1,
                back: !0,
                options_selected: e,
                in_onboarding: !0,
                is_final_step: !1,
            }),
            l > 0 &&
                R.default.track(V.HAw.GUILD_ONBOARDING_STEP_VIEWED, {
                    ...(0, L.H$)(n.id),
                    step: l - 1,
                    required: t[l - 1].required,
                })),
            0 === l && h.length > 0 ? d("connections") : d(Math.max(0, l - 1)));
    }
    if (
        (s.useEffect(() => {
            c || R.default.track(V.HAw.GUILD_ONBOARDING_STEP_VIEWED, { ...(0, L.H$)(n.id), step: 0, required: N });
        }, [n.id, N, c]),
        null == v)
    )
        return null;
    switch (v.type) {
        case w.ME.MULTIPLE_CHOICE:
            return (0, i.jsx)(er, {
                guild: n,
                headerId: o,
                step: l,
                questionCount: t.length,
                currentPrompt: v,
                lastPrompt: A,
                hasConnections: h.length > 0,
                isSubmitting: u,
                selectOption: r,
                gotoPrevPrompt: b,
                gotoNextPrompt: _,
                completeOnboarding: x,
            });
        case w.ME.DROPDOWN:
            return (0, i.jsx)(el, {
                guild: n,
                headerId: o,
                step: l,
                questionCount: t.length,
                currentPrompt: v,
                lastPrompt: A,
                hasConnections: h.length > 0,
                isSubmitting: u,
                selectOption: r,
                gotoPrevPrompt: b,
                gotoNextPrompt: _,
                completeOnboarding: x,
            });
        default:
            (0, Y.xb)(v.type);
    }
}
var ed = t(516521),
    eo = t(46054);
function ec(e) {
    let {
            guild: n,
            prompts: t,
            completeOnboarding: l,
            setCurrentStep: r,
            disableTracking: a,
            previousPromptIndex: d,
        } = e,
        o = s.useRef(null),
        u = (0, K.bG)([p.A], () => p.A.getRulesPrompt(n.id)),
        [m, g] = s.useState(u?.response ?? !1),
        [h, x] = s.useState(!1),
        v = (0, K.bG)([p.A], () => p.A.get(n.id)),
        A = s.useRef(null),
        N = s.useRef(null),
        _ = s.useCallback(async () => {
            if (null != v && null != u) {
                x(!0);
                try {
                    await Z.Ay.submitVerificationForm(n.id, { ...v, formFields: [{ ...u, response: m }] });
                } catch {}
                l();
            }
        }, [n.id, v, u, m, l]);
    function b(e) {
        let [n] = e;
        n.isIntersecting && g(!0);
    }
    return (s.useEffect(() => {
        let e = new IntersectionObserver(b, { root: A.current, rootMargin: "0px", threshold: 0 }),
            n = N.current;
        return (
            null != n && null != n.lastElementChild && e.observe(n.lastElementChild),
            () => {
                null != n && null != n.lastElementChild && e.unobserve(n.lastElementChild);
            }
        );
    }, [N, A]),
    null == u)
        ? null
        : (0, i.jsx)("div", {
              className: ei.J1,
              children: (0, i.jsxs)("div", {
                  className: ei.mK,
                  ref: A,
                  children: [
                      (0, i.jsxs)(ed.Ch, {
                          className: ei.gT,
                          ref: o,
                          children: [
                              (0, i.jsx)(y.E, {
                                  variant: "body-sm/medium",
                                  color: "text-muted",
                                  children: $.intl.string($.t["b1JC+l"]),
                              }),
                              (0, i.jsx)(c.D, { variant: "heading-xl/semibold", children: $.intl.string($.t.prJqwT) }),
                              (0, i.jsx)("div", {
                                  className: ei.qE,
                                  ref: N,
                                  children: u.values.map((e, t) =>
                                      (0, i.jsxs)(
                                          "div",
                                          {
                                              className: ei.gJ,
                                              children: [
                                                  (0, i.jsx)(y.E, {
                                                      variant: "body-sm/normal",
                                                      color: "text-muted",
                                                      children: `${t + 1}.`,
                                                  }),
                                                  (0, i.jsx)(y.E, {
                                                      variant: "body-sm/normal",
                                                      className: ei.RQ,
                                                      children: eo.A.parseGuildVerificationFormRule(e, !0, {
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
                      (0, i.jsx)("div", { className: ei.Lw }),
                      (0, i.jsxs)("div", {
                          className: ei.N3,
                          children: [
                              (0, i.jsx)("div", {
                                  className: ei.X1,
                                  children:
                                      -1 !== d &&
                                      "cover" !== d &&
                                      (0, i.jsx)(P.$, {
                                          variant: "secondary",
                                          size: "md",
                                          text: $.intl.string($.t["13/7kX"]),
                                          onClick: function () {
                                              (!a &&
                                                  (R.default.track(V.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
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
                                                      R.default.track(V.HAw.GUILD_ONBOARDING_STEP_VIEWED, {
                                                          ...(0, L.H$)(n.id),
                                                          step: d,
                                                          required: t[d].required,
                                                      })),
                                                  r(d));
                                          },
                                          icon: z.Z,
                                          iconPosition: "start",
                                      }),
                              }),
                              (0, i.jsxs)("div", {
                                  className: ei.Oh,
                                  children: [
                                      (0, i.jsx)(y.E, {
                                          className: ei.BK,
                                          variant: "body-xs/normal",
                                          color: "text-muted",
                                          children: m ? $.intl.string($.t.arAe3I) : $.intl.string($.t.D0CVAc),
                                      }),
                                      (0, i.jsx)(P.$, {
                                          variant: "primary",
                                          size: "md",
                                          text: `${$.intl.string($.t["8SuVoE"])} \u{1F389}`,
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
var eu = t(660238);
function em(e) {
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
        H = s.useMemo(() => (null == R ? null : j.Ay.getGuildSplashURL({ id: R.id, splash: R.splash })), [R]),
        w = (0, x.S)(H),
        q = s.useRef(null),
        B = s.useCallback(
            (e) => {
                null == H ||
                    (null != q.current && q.current.contains(e.target)) ||
                    (0, u.L3)(e, async () => {
                        let { default: e } = await Promise.all([t.e(95340), t.e(895813)]).then(t.bind(t, 977700));
                        return (n) => (0, i.jsx)(e, { ...n, splashUrl: H });
                    });
            },
            [H],
        ),
        M = (0, d.bG)([C.Ay], () => C.Ay.getCurrentOnboardingStep(n)),
        [U, K] = s.useState(null != H ? null : "cover"),
        [X, z] = s.useState(!1),
        J = s.useCallback(
            (e) => {
                (K(M), E.A.setUserOnboardingStep(n, e));
            },
            [n, M],
        ),
        Z = (0, d.bG)([A.A], () => A.A.isFullServerPreview(n)),
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
                (0, N.pX)(V.BVt.CHANNEL(n));
            }, 1e3);
            return () => clearTimeout(e);
        }
    }, [et, ei, n]),
    C.Ay.shouldShowOnboarding(n) && null != R)
        ? (0, i.jsxs)("div", {
              className: r()(eu.iW, { [eu.Me]: null == H }),
              ref: l,
              onContextMenu: B,
              children: [
                  null != H
                      ? (0, i.jsx)(h.A, { className: eu.xX, src: H, width: I, height: y, imageClassName: eu.Iv })
                      : (0, i.jsx)(_.A, {}),
                  null != w &&
                      (0, i.jsx)("div", {
                          className: eu.D7,
                          style: {
                              background: `linear-gradient(180deg, ${(0, f.cb)(w, 0.16)} 0%, ${(0, f.cb)(w, 1)} 100%)`,
                          },
                      }),
                  null == H ? null : (0, i.jsx)("div", { className: eu.D7 }),
                  (0, i.jsxs)("div", {
                      ref: q,
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
                                                  return (0, i.jsx)(W, {
                                                      guild: R,
                                                      onboardingStatus: C.$o.READY,
                                                      onStart: ee,
                                                      disableTracking: Z,
                                                  });
                                              case "connections":
                                                  return (0, i.jsx)(F, {
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
                                                  return (0, i.jsx)(ec, {
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
                                                  return (0, i.jsx)(ea, {
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
                                  className: eu.m6,
                                  children: (0, i.jsx)(c.D, {
                                      variant: "heading-xs/medium",
                                      color: "text-default",
                                      className: eu.hM,
                                      children: $.intl.format($.t.kI6UoD, { privacyLink: V.X7G.PRIVACY }),
                                  }),
                              }),
                      ],
                  }),
              ],
          })
        : null;
}
