n.r(t), n.d(t, { default: () => ed });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(419354),
    o = n(17928),
    c = n(866323),
    d = n(534514),
    u = n(442433),
    m = n(686956),
    _ = n(765671),
    p = n(4616),
    x = n(743674),
    g = n(60175),
    h = n(545868),
    f = n(164956),
    v = n(976860),
    A = n(426660),
    N = n(71393),
    E = n(486020),
    j = n(998304),
    b = n(669953),
    C = n(591552),
    I = n(713125),
    O = n(961973),
    D = n(289873),
    y = n(834730),
    P = n(821609),
    S = n(554830),
    k = n(793574),
    T = n(58149),
    R = n(546183),
    L = n(30370),
    G = n(954571),
    w = n(817818),
    H = n(875150),
    V = n(539916),
    F = n(652215),
    B = n(985018),
    M = n(576002);
function $(e) {
    let { guildId: t, onComplete: n, isLastStep: l, isSubmitting: r = !1, disableTracking: a } = e,
        c = s.useRef(!1),
        { onboardingConnections: u, isLoading: m } = (0, o.cf)([C.A], () => ({
            onboardingConnections: C.A.getConnections(t),
            isLoading: C.A.isLoading(),
        })),
        _ = (0, o.bG)(
            [R.default, L.A],
            () =>
                u.some((e) => {
                    if (e.connection_type === V.wZ.APPLICATION && null != e.application_id) {
                        let t = R.default.getNewestTokenForApplication(e.application_id);
                        return (
                            R.default.getFetchStateForApplication(e.application_id) === R.FetchState.FETCHED &&
                            null != t
                        );
                    }
                    if (e.connection_type === V.wZ.PROVIDER_CONNECTED_ACCOUNT && null != e.provider_id) {
                        let t = L.A.getAccount(null, e.provider_id);
                        return null != t && !t.revoked;
                    }
                    return !1;
                }),
            [u],
        );
    s.useEffect(() => {
        if (a || m || 0 === u.length || c.current) return;
        let e = (0, O.H_)(u),
            n = (0, O.OG)(u);
        G.default.track(F.HAw.GUILD_ONBOARDING_STEP_VIEWED, {
            ...(0, T.H$)(t),
            step: w.l8,
            required: !1,
            provider_connections_connected: e.connected,
            provider_connections_not_connected: e.notConnected,
            application_connections_connected: n.connected,
            application_connections_not_connected: n.notConnected,
        }),
            (c.current = !0);
    }, [t, m, u, a]);
    let p = s.useCallback(() => {
        if (!a) {
            let e = (0, O.H_)(u),
                n = (0, O.OG)(u);
            G.default.track(F.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                ...(0, T.H$)(t),
                step: w.l8,
                skipped: !_,
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
    }, [n, a, t, u, _, l]);
    return m
        ? (0, i.jsxs)("div", {
              className: M.g4,
              children: [
                  (0, i.jsx)(D.y, {}),
                  (0, i.jsx)(y.E, {
                      variant: "text-md/normal",
                      color: "text-muted",
                      children: B.intl.string(B.t.ZTNur7),
                  }),
              ],
          })
        : (0, i.jsx)("div", {
              className: M.kL,
              children: (0, i.jsxs)("div", {
                  className: M.Qs,
                  children: [
                      (0, i.jsxs)("div", {
                          className: M.gT,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: M.wx,
                                  children: [
                                      (0, i.jsx)("div", {
                                          className: M.qd,
                                          children: (0, i.jsx)(d.D, {
                                              variant: "heading-xl/semibold",
                                              children: B.intl.string(B.t.eDVMrA),
                                          }),
                                      }),
                                      (0, i.jsx)("div", {
                                          className: M.ux,
                                          children: (0, i.jsx)(y.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: B.intl.string(B.t.BozOXu),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)("div", {
                                  className: M.A5,
                                  children: (0, i.jsx)("div", {
                                      className: M.eF,
                                      children: u.map((e, n) =>
                                          (0, i.jsx)(
                                              H.A,
                                              { connection: e, guildId: t, location: k.A.GUILD_ONBOARDING },
                                              n,
                                          ),
                                      ),
                                  }),
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          className: M.qr,
                          children: (0, i.jsxs)("div", {
                              className: M.o1,
                              children: [
                                  (0, i.jsx)("div", {}),
                                  (0, i.jsx)("div", {
                                      className: M.E3,
                                      children: (0, i.jsx)(P.$, {
                                          variant: _ ? "primary" : "secondary",
                                          onClick: p,
                                          text: _
                                              ? l
                                                  ? `${B.intl.string(B.t["8SuVoE"])} 🎉`
                                                  : B.intl.string(B.t.PDTjLN)
                                              : B.intl.string(B.t["5Wxrcd"]),
                                          disabled: r,
                                          loading: r,
                                          icon: l ? void 0 : S.K,
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
var q = n(201991),
    U = n(702841),
    K = n(990078),
    J = n(364522),
    W = n(548411),
    X = n(408213),
    z = n(386784),
    Q = n(403362),
    Z = n(218785),
    Y = n(164048),
    ee = n(839447),
    et = n(462918);
function en(e, t) {
    return (0, i.jsx)("span", { className: et.a1, children: e }, t);
}
function ei(e) {
    let {
            headerId: t,
            guild: n,
            step: s,
            lastPrompt: l,
            questionCount: r,
            currentPrompt: a,
            hasConnections: o,
            isSubmitting: c,
            selectOption: u,
            gotoPrevPrompt: m,
            gotoNextPrompt: _,
            completeOnboarding: p,
        } = e,
        x = (0, U.yK)([C.A], () => C.A.getOnboardingResponsesForPrompt(n.id, a.id)),
        g = 0 === x.length && a?.required,
        h = a?.options.filter((e) => x.includes(e.id)),
        f = (0, O.a)(h),
        v = (0, O.vV)(h),
        A = 0 === x.length,
        { helpText: N, helpTextAdditional: E } = (0, Z.A)({
            guild: n,
            prompt: a,
            selectedRoleIds: f,
            selectedChannelIds: v,
            itemHook: en,
        }),
        j = (0, z.A)(n.id, 1e3),
        b = a.options.map((e) => ({ value: e.id, ...e })),
        I = a.options.filter((e) => x.includes(e.id)).map((e) => e.id);
    return (0, i.jsx)("div", {
        className: et.J1,
        children: (0, i.jsxs)("div", {
            className: et.mK,
            children: [
                (0, i.jsxs)(J.Ip, {
                    className: et.gT,
                    children: [
                        (0, i.jsxs)("div", {
                            className: et.q,
                            children: [
                                (0, i.jsx)(y.E, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: B.intl.format(B.t.isV0NW, { currentQuestion: s + 1, questionCount: r }),
                                }),
                                a.required
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(y.E, {
                                                  variant: "text-xs/normal",
                                                  className: et.HE,
                                                  children: "\xb7",
                                              }),
                                              (0, i.jsx)(y.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-brand",
                                                  children: B.intl.string(B.t.Ur8Vrt),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        (0, i.jsx)(d.D, {
                            className: et.DD,
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            id: t,
                            children: a.title,
                        }),
                        (0, i.jsx)(ee.A, {
                            options: b,
                            value: I,
                            onChange: (e) => {
                                let t = e.find((e) => !x.includes(e.id)),
                                    n = e.map((e) => e.id);
                                if (null != t) u(a.id, t.id, !0);
                                else {
                                    let e = x.filter((e) => !n.includes(e));
                                    a.options
                                        .filter((t) => e.includes(t.id))
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
                    className: et.N3,
                    children: [
                        (0, i.jsx)("div", {
                            className: et.X1,
                            children:
                                (s > 0 || o) &&
                                (0, i.jsx)(P.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: B.intl.string(B.t["13/7kX"]),
                                    onClick: () => m(x.length),
                                    icon: W.Z,
                                    iconPosition: "start",
                                }),
                        }),
                        (0, i.jsxs)("div", {
                            className: et.Oh,
                            children: [
                                (0, i.jsxs)(y.E, {
                                    className: et.BK,
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [N, " ", E],
                                }),
                                (0, i.jsx)(K.m, {
                                    asContainer: !0,
                                    text: g ? B.intl.string(B.t.dA1dSf) : null,
                                    children: (0, i.jsx)(P.$, {
                                        variant: A ? "secondary" : "primary",
                                        size: "md",
                                        text: l
                                            ? `${B.intl.string(B.t["8SuVoE"])} 🎉`
                                            : A
                                              ? B.intl.string(B.t["5Wxrcd"])
                                              : B.intl.string(B.t.PDTjLN),
                                        onClick: () => (l ? p() : _(x.length)),
                                        disabled: g || c,
                                        loading: c,
                                        icon: l ? void 0 : S.K,
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
function es(e) {
    let {
            headerId: t,
            guild: n,
            step: s,
            lastPrompt: l,
            questionCount: r,
            currentPrompt: a,
            hasConnections: o,
            isSubmitting: c,
            selectOption: u,
            gotoPrevPrompt: m,
            gotoNextPrompt: _,
            completeOnboarding: p,
        } = e,
        x = (0, U.yK)([C.A], () => C.A.getOnboardingResponsesForPrompt(n.id, a.id)),
        g = 0 === x.length && a?.required,
        h = a?.options.filter((e) => x.includes(e.id)),
        f = (0, O.a)(h),
        v = (0, O.vV)(h),
        A = 0 === x.length,
        { helpText: N, helpTextAdditional: E } = (0, Z.A)({
            guild: n,
            prompt: a,
            selectedRoleIds: f,
            selectedChannelIds: v,
            itemHook: en,
        });
    return (0, i.jsx)("div", {
        className: et.J1,
        children: (0, i.jsxs)("div", {
            className: et.mK,
            children: [
                (0, i.jsxs)(J.Ip, {
                    className: et.gT,
                    children: [
                        (0, i.jsxs)("div", {
                            className: et.q,
                            children: [
                                (0, i.jsx)(y.E, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: B.intl.format(B.t.isV0NW, { currentQuestion: s + 1, questionCount: r }),
                                }),
                                a.required
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(y.E, {
                                                  variant: "text-xs/normal",
                                                  className: et.HE,
                                                  children: "\xb7",
                                              }),
                                              (0, i.jsx)(y.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-brand",
                                                  children: B.intl.string(B.t.Ur8Vrt),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        (0, i.jsx)(d.D, {
                            className: et.DD,
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            id: t,
                            children: a.title,
                        }),
                        (0, i.jsx)("div", {
                            className: et.vS,
                            children: a.options.map((e) =>
                                (0, i.jsx)(
                                    Y.A,
                                    {
                                        guildId: n.id,
                                        option: e,
                                        onSelect: (t) => u(a.id, e.id, t ?? !1),
                                        selected: x.includes(e.id),
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: et.N3,
                    children: [
                        (0, i.jsx)("div", {
                            className: et.X1,
                            children:
                                (s > 0 || o) &&
                                (0, i.jsx)(P.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: B.intl.string(B.t["13/7kX"]),
                                    onClick: () => m(x.length),
                                    icon: W.Z,
                                    iconPosition: "start",
                                }),
                        }),
                        (0, i.jsxs)("div", {
                            className: et.Oh,
                            children: [
                                (0, i.jsxs)(y.E, {
                                    className: et.BK,
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [N, " ", E],
                                }),
                                (0, i.jsx)(K.m, {
                                    asContainer: !0,
                                    text: g ? B.intl.string(B.t.dA1dSf) : null,
                                    children: (0, i.jsx)(P.$, {
                                        variant: A ? "secondary" : "primary",
                                        size: "md",
                                        text: l
                                            ? `${B.intl.string(B.t["8SuVoE"])} 🎉`
                                            : A
                                              ? B.intl.string(B.t["5Wxrcd"])
                                              : B.intl.string(B.t.PDTjLN),
                                        onClick: () => (l ? p() : _(x.length)),
                                        disabled: g || c,
                                        loading: c,
                                        icon: l ? void 0 : S.K,
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
function el(e) {
    let {
            guild: t,
            prompts: n,
            step: l,
            selectOption: r,
            completeOnboarding: a,
            setCurrentStep: o,
            headerId: c,
            disableTracking: d,
        } = e,
        [u, m] = s.useState(!1),
        _ = (0, U.bG)([g.A], () => g.A.getRulesPrompt(t.id)),
        p = (0, U.bG)([C.A], () => C.A.getConnections(t.id)),
        x = s.useCallback(() => {
            m(!0), a();
        }, [a]);
    s.useEffect(() => {
        t.features.has(F.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            !t.features.has(F.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            X.Ay.fetchVerificationForm(t.id);
    }, [t]);
    let h = n[l],
        f = l + 1 >= n.length && !(0, O.L1)(t, _),
        v = n[0].required;
    s.useEffect(() => {
        d || G.default.track(F.HAw.GUILD_ONBOARDING_STEP_VIEWED, { ...(0, T.H$)(t.id), step: 0, required: v });
    }, [t.id, v, d]);
    let A = (e) => {
            !d &&
                (G.default.track(F.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                    ...(0, T.H$)(t.id),
                    step: l,
                    options_selected: e,
                    skipped: 0 === e,
                    back: !1,
                    in_onboarding: !0,
                    is_final_step: !1,
                }),
                l < n.length - 1 &&
                    G.default.track(F.HAw.GUILD_ONBOARDING_STEP_VIEWED, {
                        ...(0, T.H$)(t.id),
                        step: l,
                        required: n[l + 1].required,
                    })),
                l + 1 < n.length ? o(l + 1) : (0, O.L1)(t, _) && o("rules");
        },
        N = (e) => {
            !d &&
                (G.default.track(F.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                    ...(0, T.H$)(t.id),
                    step: l,
                    skipped: !1,
                    back: !0,
                    options_selected: e,
                    in_onboarding: !0,
                    is_final_step: !1,
                }),
                l > 0 &&
                    G.default.track(F.HAw.GUILD_ONBOARDING_STEP_VIEWED, {
                        ...(0, T.H$)(t.id),
                        step: l - 1,
                        required: n[l - 1].required,
                    })),
                0 === l && p.length > 0 ? o("connections") : o(Math.max(0, l - 1));
        };
    if (null == h) return null;
    switch (h.type) {
        case V.ME.MULTIPLE_CHOICE:
            return (0, i.jsx)(es, {
                guild: t,
                headerId: c,
                step: l,
                questionCount: n.length,
                currentPrompt: h,
                lastPrompt: f,
                hasConnections: p.length > 0,
                isSubmitting: u,
                selectOption: r,
                gotoPrevPrompt: N,
                gotoNextPrompt: A,
                completeOnboarding: x,
            });
        case V.ME.DROPDOWN:
            return (0, i.jsx)(ei, {
                guild: t,
                headerId: c,
                step: l,
                questionCount: n.length,
                currentPrompt: h,
                lastPrompt: f,
                hasConnections: p.length > 0,
                isSubmitting: u,
                selectOption: r,
                gotoPrevPrompt: N,
                gotoNextPrompt: A,
                completeOnboarding: x,
            });
        default:
            (0, Q.xb)(h.type);
    }
}
var er = n(689175),
    ea = n(46054);
function eo(e) {
    let {
            guild: t,
            prompts: n,
            completeOnboarding: l,
            setCurrentStep: r,
            disableTracking: a,
            previousPromptIndex: o,
        } = e,
        c = s.useRef(null),
        u = (0, U.bG)([g.A], () => g.A.getRulesPrompt(t.id)),
        [m, _] = s.useState(u?.response ?? !1),
        [p, x] = s.useState(!1),
        h = (0, U.bG)([g.A], () => g.A.get(t.id)),
        f = s.useRef(null),
        v = s.useRef(null),
        A = s.useCallback(async () => {
            if (null != h && null != u) {
                x(!0);
                try {
                    await X.Ay.submitVerificationForm(t.id, { ...h, formFields: [{ ...u, response: m }] });
                } catch {}
                l();
            }
        }, [t.id, h, u, m, l]);
    function N(e) {
        let [t] = e;
        t.isIntersecting && _(!0);
    }
    return (s.useEffect(() => {
        let e = new IntersectionObserver(N, { root: f.current, rootMargin: "0px", threshold: 0 }),
            t = v.current;
        return (
            null != t && null != t.lastElementChild && e.observe(t.lastElementChild),
            () => {
                null != t && null != t.lastElementChild && e.unobserve(t.lastElementChild);
            }
        );
    }, [v, f]),
    null == u)
        ? null
        : (0, i.jsx)("div", {
              className: et.J1,
              children: (0, i.jsxs)("div", {
                  className: et.mK,
                  ref: f,
                  children: [
                      (0, i.jsxs)(er.Ch, {
                          className: et.gT,
                          ref: c,
                          children: [
                              (0, i.jsx)(y.E, {
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  children: B.intl.string(B.t["b1JC+l"]),
                              }),
                              (0, i.jsx)(d.D, { variant: "heading-xl/semibold", children: B.intl.string(B.t.prJqwT) }),
                              (0, i.jsx)("div", {
                                  className: et.qE,
                                  ref: v,
                                  children: u.values.map((e, n) =>
                                      (0, i.jsxs)(
                                          "div",
                                          {
                                              className: et.gJ,
                                              children: [
                                                  (0, i.jsx)(y.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: `${n + 1}.`,
                                                  }),
                                                  (0, i.jsx)(y.E, {
                                                      variant: "text-sm/normal",
                                                      className: et.RQ,
                                                      children: ea.A.parseGuildVerificationFormRule(e, !0, {
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
                      (0, i.jsx)("div", { className: et.Lw }),
                      (0, i.jsxs)("div", {
                          className: et.N3,
                          children: [
                              (0, i.jsx)("div", {
                                  className: et.X1,
                                  children:
                                      -1 !== o &&
                                      "cover" !== o &&
                                      (0, i.jsx)(P.$, {
                                          variant: "secondary",
                                          size: "md",
                                          text: B.intl.string(B.t["13/7kX"]),
                                          onClick: () => {
                                              !a &&
                                                  (G.default.track(F.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                                                      ...(0, T.H$)(t.id),
                                                      step: -1,
                                                      skipped: !1,
                                                      back: !0,
                                                      options_selected: 0,
                                                      in_onboarding: !0,
                                                      is_final_step: !1,
                                                  }),
                                                  "number" == typeof o &&
                                                      o >= 0 &&
                                                      G.default.track(F.HAw.GUILD_ONBOARDING_STEP_VIEWED, {
                                                          ...(0, T.H$)(t.id),
                                                          step: o,
                                                          required: n[o].required,
                                                      })),
                                                  r(o);
                                          },
                                          icon: W.Z,
                                          iconPosition: "start",
                                      }),
                              }),
                              (0, i.jsxs)("div", {
                                  className: et.Oh,
                                  children: [
                                      (0, i.jsx)(y.E, {
                                          className: et.BK,
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          children: m ? B.intl.string(B.t.arAe3I) : B.intl.string(B.t.D0CVAc),
                                      }),
                                      (0, i.jsx)(P.$, {
                                          variant: "primary",
                                          size: "md",
                                          text: `${B.intl.string(B.t["8SuVoE"])} 🎉`,
                                          onClick: A,
                                          disabled: !m || p,
                                          loading: p,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
var ec = n(339875);
function ed(e) {
    let { guildId: t } = e,
        { ref: l, width: D, height: y } = (0, _.Ay)(),
        P = (0, o.yK)([C.A], () => C.A.getOnboardingPromptsForOnboarding(t)),
        S = (0, o.bG)([C.A], () => C.A.getEnabled(t)),
        k = (0, o.bG)([C.A], () => C.A.getConnections(t)),
        T = (0, o.bG)([g.A], () => g.A.getRulesPrompt(t)),
        R = s.useCallback(
            (e, n, i) => {
                b.A.selectOption(t, e, n, i);
            },
            [t],
        ),
        L = s.useCallback(() => {
            b.A.completeOnboarding(t, P);
        }, [t, P]),
        G = (0, o.bG)([N.A], () => N.A.getGuild(t)),
        w = s.useMemo(() => (null == G ? null : E.Ay.getGuildSplashURL({ id: G.id, splash: G.splash })), [G]),
        H = (0, x.S)(w),
        V = s.useRef(null),
        M = s.useCallback(
            (e) => {
                null == w ||
                    (null != V.current && V.current.contains(e.target)) ||
                    (0, u.L3)(e, async () => {
                        let { default: e } = await n.e("95813").then(n.bind(n, 977700));
                        return (t) => (0, i.jsx)(e, { ...t, splashUrl: w });
                    });
            },
            [w],
        ),
        U = (0, o.bG)([I.Ay], () => I.Ay.getCurrentOnboardingStep(t)),
        [K, J] = s.useState(null != w ? null : "cover"),
        [W, X] = s.useState(!1),
        z = s.useCallback(
            (e) => {
                J(U), b.A.setUserOnboardingStep(t, e);
            },
            [t, U],
        ),
        Q = (0, o.bG)([f.A], () => f.A.isFullServerPreview(t)),
        Z = (0, o.bG)([I.Ay], () => I.Ay.getOnboardingStatus(t)),
        Y = null != P && P.length > 0,
        ee = s.useCallback(() => {
            (0, I.eg)(Z) && S && (Y || 0 !== k.length) ? (k.length > 0 ? z("connections") : z(0)) : L();
        }, [Z, S, Y, k.length, z, L]);
    s.useEffect(() => {
        if (!I.Ay.shouldShowOnboarding(t)) return m.A.escapeToDefaultChannel(t);
        (0, h.L)(t);
    }, [t]);
    let et = (0, c.p)(
            U,
            { config: a.config.default, from: { scale: 0.8, opacity: 0 }, enter: { scale: 1, opacity: 1 } },
            "cover" !== K && null !== K ? "animate-never" : "respect-motion-settings",
        ),
        en = I.Ay.shouldShowOnboarding(t),
        ei = null == G;
    return (s.useEffect(() => {
        if (!en || ei) {
            let e = setTimeout(() => {
                (0, v.pX)(F.BVt.CHANNEL(t));
            }, 1e3);
            return () => clearTimeout(e);
        }
    }, [en, ei, t]),
    I.Ay.shouldShowOnboarding(t) && null != G)
        ? (0, i.jsxs)("div", {
              className: r()(ec.iW, { [ec.Me]: null == w }),
              ref: l,
              onContextMenu: M,
              children: [
                  null != w
                      ? (0, i.jsx)(p.A, { className: ec.xX, src: w, width: D, height: y, imageClassName: ec.Iv })
                      : (0, i.jsx)(A.A, {}),
                  null != H &&
                      (0, i.jsx)("div", {
                          className: ec.D7,
                          style: {
                              background: `linear-gradient(180deg, ${(0, j.cb)(H, 0.16)} 0%, ${(0, j.cb)(H, 1)} 100%)`,
                          },
                      }),
                  null == w ? null : (0, i.jsx)("div", { className: ec.D7 }),
                  (0, i.jsxs)("div", {
                      ref: V,
                      children: [
                          et((e, n, s) => {
                              let { key: l } = s;
                              return (0, i.jsx)(
                                  a.animated.div,
                                  {
                                      style: e,
                                      children: (() => {
                                          switch (U) {
                                              case "cover":
                                                  return (0, i.jsx)(q.Ay, {
                                                      guild: G,
                                                      onboardingStatus: I.$o.READY,
                                                      onStart: ee,
                                                      disableTracking: Q,
                                                  });
                                              case "connections":
                                                  return (0, i.jsx)($, {
                                                      guildId: t,
                                                      isLastStep: 0 === P.length && !(0, O.L1)(G, T),
                                                      isSubmitting: W,
                                                      disableTracking: Q,
                                                      onComplete: () => {
                                                          P.length > 0
                                                              ? z(0)
                                                              : (0, O.L1)(G, T)
                                                                ? z("rules")
                                                                : (X(!0), L());
                                                      },
                                                  });
                                              case "rules":
                                                  return (0, i.jsx)(eo, {
                                                      setCurrentStep: z,
                                                      previousPromptIndex:
                                                          P.length > 0
                                                              ? P.length - 1
                                                              : k.length > 0
                                                                ? "connections"
                                                                : "cover",
                                                      guild: G,
                                                      prompts: P,
                                                      completeOnboarding: L,
                                                      disableTracking: Q,
                                                  });
                                              case null:
                                                  return null;
                                              default:
                                                  return (0, i.jsx)(el, {
                                                      guild: G,
                                                      prompts: P,
                                                      step: U,
                                                      selectOption: R,
                                                      completeOnboarding: L,
                                                      setCurrentStep: z,
                                                      disableTracking: Q,
                                                  });
                                          }
                                      })(),
                                  },
                                  l,
                              );
                          }),
                          "cover" === U &&
                              (0, i.jsx)("div", {
                                  className: ec.m6,
                                  children: (0, i.jsx)(d.D, {
                                      variant: "heading-sm/normal",
                                      color: "text-default",
                                      children: B.intl.format(B.t.kI6UoD, { privacyLink: F.X7G.PRIVACY }),
                                  }),
                              }),
                      ],
                  }),
              ],
          })
        : null;
}
