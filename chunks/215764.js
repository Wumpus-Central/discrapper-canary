(t.r(n), t.d(n, { default: () => em }));
var i = t(477900),
    s = t(582128),
    l = t(503698),
    r = t.n(l),
    a = t(120692),
    o = t(855986),
    d = t(866323),
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
    f = t(486020),
    j = t(998304),
    E = t(669953),
    O = t(591552),
    C = t(713125),
    I = t(961973),
    D = t(289873),
    y = t(834730),
    k = t(821609),
    P = t(554830),
    L = t(793574),
    G = t(149468),
    S = t(733110),
    T = t(417869),
    R = t(129230);
t(817818);
var w = t(528275),
    H = t(539916),
    V = t(652215),
    $ = t(792996),
    q = t(579235);
function F(e) {
    let { guildId: n, onComplete: t, isLastStep: l, isSubmitting: r = !1, disableTracking: a } = e,
        d = s.useRef(!1),
        { onboardingConnections: u, isLoading: m } = (0, o.cf)([O.A], () => ({
            onboardingConnections: O.A.getOnboardingConnections(n),
            isLoading: O.A.isLoading(),
        })),
        g = (0, o.bG)(
            [S.A, T.A],
            () =>
                u.some((e) => {
                    if (e.connection_type === H.wZ.APPLICATION && null != e.application_id) {
                        let n = S.A.getNewestTokenForApplication(e.application_id);
                        return S.A.getFetchStateForApplication(e.application_id) === S.FetchState.FETCHED && null != n;
                    }
                    if (e.connection_type === H.wZ.PROVIDER_CONNECTED_ACCOUNT && null != e.provider_id) {
                        let n = T.A.getAccount(null, e.provider_id);
                        return null != n && !n.revoked;
                    }
                    return !1;
                }),
            [u],
        );
    s.useEffect(() => {
        if (a || m || 0 === u.length || d.current) return;
        let e = (0, I.H_)(u),
            t = (0, I.OG)(u);
        (R.default.track(V.HAw.GUILD_ONBOARDING_STEP_VIEWED, {
            ...(0, G.H$)(n),
            step: -3,
            required: !1,
            provider_connections_connected: e.connected,
            provider_connections_not_connected: e.notConnected,
            application_connections_connected: t.connected,
            application_connections_not_connected: t.notConnected,
        }),
            (d.current = !0));
    }, [n, m, u, a]);
    let h = s.useCallback(() => {
        if (!a) {
            let e = (0, I.H_)(u),
                t = (0, I.OG)(u);
            R.default.track(V.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                ...(0, G.H$)(n),
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
                  (0, i.jsx)(D.y, {}),
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
                                              w.A,
                                              { connection: e, guildId: n, location: L.A.GUILD_ONBOARDING },
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
                                      children: (0, i.jsx)(k.$, {
                                          variant: g ? "primary" : "secondary",
                                          onClick: h,
                                          text: g
                                              ? l
                                                  ? `${$.intl.string($.t["8SuVoE"])} \u{1F389}`
                                                  : $.intl.string($.t.PDTjLN)
                                              : $.intl.string($.t["5Wxrcd"]),
                                          disabled: r,
                                          loading: r,
                                          icon: l ? void 0 : P.ArrowLargeRightIcon,
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
        d = (0, o.bG)([O.A], () => O.A.isLoading()),
        u = s.useRef(!1);
    s.useEffect(() => {
        if (!a)
            return (
                R.default.track(V.HAw.GUILD_ONBOARDING_STEP_VIEWED, { ...(0, G.H$)(n.id), step: -1, required: !0 }),
                () => {
                    R.default.track(V.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                        ...(0, G.H$)(n.id),
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
                            d
                                ? (0, i.jsx)(D.y, { className: U.__invalid_subtitle })
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
var X = t(164636),
    K = t(95362),
    z = t(548411),
    J = t(866665),
    Q = t(408213),
    Y = t(386784),
    Z = t(403362),
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
            hasConnections: o,
            isSubmitting: d,
            selectOption: u,
            gotoPrevPrompt: m,
            gotoNextPrompt: g,
            completeOnboarding: h,
        } = e,
        x = (0, X.yK)([O.A], () => O.A.getOnboardingResponsesForPrompt(t.id, a.id)),
        p = 0 === x.length && a?.required,
        v = a?.options.filter((e) => x.includes(e.id)),
        A = (0, I.a)(v),
        N = (0, I.vV)(v),
        _ = 0 === x.length,
        { helpText: b, helpTextAdditional: f } = (0, ee.A)({
            guild: t,
            prompt: a,
            selectedRoleIds: A,
            selectedChannelIds: N,
            itemHook: es,
        }),
        j = (0, Y.A)(t.id, 1e3),
        E = a.options.map((e) => ({ value: e.id, ...e })),
        C = a.options.filter((e) => x.includes(e.id)).map((e) => e.id);
    return (0, i.jsx)("div", {
        className: ei.J1,
        children: (0, i.jsxs)("div", {
            className: ei.mK,
            children: [
                (0, i.jsxs)(K.Ip, {
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
                            memberCounts: j,
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: ei.N3,
                    children: [
                        (0, i.jsx)("div", {
                            className: ei.X1,
                            children:
                                (s > 0 || o) &&
                                (0, i.jsx)(k.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: $.intl.string($.t["13/7kX"]),
                                    onClick: () => m(x.length),
                                    icon: z.ArrowLargeLeftIcon,
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
                                    children: [b, " ", f],
                                }),
                                (0, i.jsx)(J.m, {
                                    asContainer: !0,
                                    text: p ? $.intl.string($.t.dA1dSf) : null,
                                    children: (0, i.jsx)(k.$, {
                                        variant: _ ? "secondary" : "primary",
                                        size: "md",
                                        text: l
                                            ? `${$.intl.string($.t["8SuVoE"])} \u{1F389}`
                                            : _
                                              ? $.intl.string($.t["5Wxrcd"])
                                              : $.intl.string($.t.PDTjLN),
                                        onClick: () => (l ? h() : g(x.length)),
                                        disabled: p || d,
                                        loading: d,
                                        icon: l ? void 0 : P.ArrowLargeRightIcon,
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
            hasConnections: o,
            isSubmitting: d,
            selectOption: u,
            gotoPrevPrompt: m,
            gotoNextPrompt: g,
            completeOnboarding: h,
        } = e,
        x = (0, X.yK)([O.A], () => O.A.getOnboardingResponsesForPrompt(t.id, a.id)),
        p = 0 === x.length && a?.required,
        v = a?.options.filter((e) => x.includes(e.id)),
        A = (0, I.a)(v),
        N = (0, I.vV)(v),
        _ = 0 === x.length,
        { helpText: b, helpTextAdditional: f } = (0, ee.A)({
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
                (0, i.jsxs)(K.Ip, {
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
                                (s > 0 || o) &&
                                (0, i.jsx)(k.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: $.intl.string($.t["13/7kX"]),
                                    onClick: () => m(x.length),
                                    icon: z.ArrowLargeLeftIcon,
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
                                    children: [b, " ", f],
                                }),
                                (0, i.jsx)(J.m, {
                                    asContainer: !0,
                                    text: p ? $.intl.string($.t.dA1dSf) : null,
                                    children: (0, i.jsx)(k.$, {
                                        variant: _ ? "secondary" : "primary",
                                        size: "md",
                                        text: l
                                            ? `${$.intl.string($.t["8SuVoE"])} \u{1F389}`
                                            : _
                                              ? $.intl.string($.t["5Wxrcd"])
                                              : $.intl.string($.t.PDTjLN),
                                        onClick: () => (l ? h() : g(x.length)),
                                        disabled: p || d,
                                        loading: d,
                                        icon: l ? void 0 : P.ArrowLargeRightIcon,
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
            setCurrentStep: o,
            headerId: d,
            disableTracking: c,
        } = e,
        [u, m] = s.useState(!1),
        g = (0, X.bG)([p.A], () => p.A.getRulesPrompt(n.id)),
        h = (0, X.bG)([O.A], () => O.A.getOnboardingConnections(n.id)),
        x = s.useCallback(() => {
            (m(!0), a());
        }, [a]);
    s.useEffect(() => {
        n.features.has(V.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            !n.features.has(V.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            Q.Ay.fetchVerificationForm(n.id);
    }, [n]);
    let v = t[l],
        A = l + 1 >= t.length && !(0, I.L1)(n, g),
        N = t[0].required;
    function _(e) {
        (!c &&
            (R.default.track(V.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                ...(0, G.H$)(n.id),
                step: l,
                options_selected: e,
                skipped: 0 === e,
                back: !1,
                in_onboarding: !0,
                is_final_step: !1,
            }),
            l < t.length - 1 &&
                R.default.track(V.HAw.GUILD_ONBOARDING_STEP_VIEWED, {
                    ...(0, G.H$)(n.id),
                    step: l,
                    required: t[l + 1].required,
                })),
            l + 1 < t.length ? o(l + 1) : (0, I.L1)(n, g) && o("rules"));
    }
    function b(e) {
        (!c &&
            (R.default.track(V.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                ...(0, G.H$)(n.id),
                step: l,
                skipped: !1,
                back: !0,
                options_selected: e,
                in_onboarding: !0,
                is_final_step: !1,
            }),
            l > 0 &&
                R.default.track(V.HAw.GUILD_ONBOARDING_STEP_VIEWED, {
                    ...(0, G.H$)(n.id),
                    step: l - 1,
                    required: t[l - 1].required,
                })),
            0 === l && h.length > 0 ? o("connections") : o(Math.max(0, l - 1)));
    }
    if (
        (s.useEffect(() => {
            c || R.default.track(V.HAw.GUILD_ONBOARDING_STEP_VIEWED, { ...(0, G.H$)(n.id), step: 0, required: N });
        }, [n.id, N, c]),
        null == v)
    )
        return null;
    switch (v.type) {
        case H.ME.MULTIPLE_CHOICE:
            return (0, i.jsx)(er, {
                guild: n,
                headerId: d,
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
        case H.ME.DROPDOWN:
            return (0, i.jsx)(el, {
                guild: n,
                headerId: d,
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
            (0, Z.xb)(v.type);
    }
}
var eo = t(516521),
    ed = t(46054);
function ec(e) {
    let {
            guild: n,
            prompts: t,
            completeOnboarding: l,
            setCurrentStep: r,
            disableTracking: a,
            previousPromptIndex: o,
        } = e,
        d = s.useRef(null),
        u = (0, X.bG)([p.A], () => p.A.getRulesPrompt(n.id)),
        [m, g] = s.useState(u?.response ?? !1),
        [h, x] = s.useState(!1),
        v = (0, X.bG)([p.A], () => p.A.get(n.id)),
        A = s.useRef(null),
        N = s.useRef(null),
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
                      (0, i.jsxs)(eo.Ch, {
                          className: ei.gT,
                          ref: d,
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
                                                      children: ed.A.parseGuildVerificationFormRule(e, !0, {
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
                                      -1 !== o &&
                                      "cover" !== o &&
                                      (0, i.jsx)(k.$, {
                                          variant: "secondary",
                                          size: "md",
                                          text: $.intl.string($.t["13/7kX"]),
                                          onClick: function () {
                                              (!a &&
                                                  (R.default.track(V.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                                                      ...(0, G.H$)(n.id),
                                                      step: -1,
                                                      skipped: !1,
                                                      back: !0,
                                                      options_selected: 0,
                                                      in_onboarding: !0,
                                                      is_final_step: !1,
                                                  }),
                                                  "number" == typeof o &&
                                                      o >= 0 &&
                                                      R.default.track(V.HAw.GUILD_ONBOARDING_STEP_VIEWED, {
                                                          ...(0, G.H$)(n.id),
                                                          step: o,
                                                          required: t[o].required,
                                                      })),
                                                  r(o));
                                          },
                                          icon: z.ArrowLargeLeftIcon,
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
                                      (0, i.jsx)(k.$, {
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
        { ref: l, width: D, height: y } = (0, g.Ay)(),
        k = (0, o.yK)([O.A], () => O.A.getOnboardingPromptsForOnboarding(n)),
        P = (0, o.bG)([O.A], () => O.A.getEnabled(n)),
        L = (0, o.bG)([O.A], () => O.A.getOnboardingConnections(n)),
        G = (0, o.bG)([p.A], () => p.A.getRulesPrompt(n)),
        S = s.useCallback(
            (e, t, i) => {
                E.A.selectOption(n, e, t, i);
            },
            [n],
        ),
        T = s.useCallback(() => {
            E.A.completeOnboarding(n, k);
        }, [n, k]),
        R = (0, o.bG)([b.A], () => b.A.getGuild(n)),
        w = s.useMemo(() => (null == R ? null : f.Ay.getGuildSplashURL({ id: R.id, splash: R.splash })), [R]),
        H = (0, x.S)(w),
        q = s.useRef(null),
        B = s.useCallback(
            (e) => {
                null == w ||
                    (null != q.current && q.current.contains(e.target)) ||
                    (0, u.L3)(e, async () => {
                        let { default: e } = await t.e(895813).then(t.bind(t, 977700));
                        return (n) => (0, i.jsx)(e, { ...n, splashUrl: w });
                    });
            },
            [w],
        ),
        M = (0, o.bG)([C.Ay], () => C.Ay.getCurrentOnboardingStep(n)),
        [U, X] = s.useState(null != w ? null : "cover"),
        [K, z] = s.useState(!1),
        J = s.useCallback(
            (e) => {
                (X(M), E.A.setUserOnboardingStep(n, e));
            },
            [n, M],
        ),
        Q = (0, o.bG)([A.A], () => A.A.isFullServerPreview(n)),
        Y = (0, o.bG)([C.Ay], () => C.Ay.getOnboardingStatus(n)),
        Z = null != k && k.length > 0,
        ee = s.useCallback(() => {
            (0, C.eg)(Y) && P && (Z || 0 !== L.length) ? (L.length > 0 ? J("connections") : J(0)) : T();
        }, [Y, P, Z, L.length, J, T]);
    s.useEffect(() => {
        if (!C.Ay.shouldShowOnboarding(n)) return m.A.escapeToDefaultChannel(n);
        (0, v.L)(n);
    }, [n]);
    let en = (0, d.p)(
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
              className: r()(eu.iW, { [eu.Me]: null == w }),
              ref: l,
              onContextMenu: B,
              children: [
                  null != w
                      ? (0, i.jsx)(h.A, { className: eu.xX, src: w, width: D, height: y, imageClassName: eu.Iv })
                      : (0, i.jsx)(_.A, {}),
                  null != H &&
                      (0, i.jsx)("div", {
                          className: eu.D7,
                          style: {
                              background: `linear-gradient(180deg, ${(0, j.cb)(H, 0.16)} 0%, ${(0, j.cb)(H, 1)} 100%)`,
                          },
                      }),
                  null == w ? null : (0, i.jsx)("div", { className: eu.D7 }),
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
                                                      disableTracking: Q,
                                                  });
                                              case "connections":
                                                  return (0, i.jsx)(F, {
                                                      guildId: n,
                                                      isLastStep: 0 === k.length && !(0, I.L1)(R, G),
                                                      isSubmitting: K,
                                                      disableTracking: Q,
                                                      onComplete: () => {
                                                          k.length > 0
                                                              ? J(0)
                                                              : (0, I.L1)(R, G)
                                                                ? J("rules")
                                                                : (z(!0), T());
                                                      },
                                                  });
                                              case "rules":
                                                  return (0, i.jsx)(ec, {
                                                      setCurrentStep: J,
                                                      previousPromptIndex:
                                                          k.length > 0
                                                              ? k.length - 1
                                                              : L.length > 0
                                                                ? "connections"
                                                                : "cover",
                                                      guild: R,
                                                      prompts: k,
                                                      completeOnboarding: T,
                                                      disableTracking: Q,
                                                  });
                                              case null:
                                                  return null;
                                              default:
                                                  return (0, i.jsx)(ea, {
                                                      guild: R,
                                                      prompts: k,
                                                      step: M,
                                                      selectOption: S,
                                                      completeOnboarding: T,
                                                      setCurrentStep: J,
                                                      disableTracking: Q,
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
