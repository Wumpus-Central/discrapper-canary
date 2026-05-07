n.r(t), n.d(t, { default: () => ec });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(873174),
    o = n(17928),
    d = n(866323),
    c = n(534514),
    u = n(442433),
    m = n(66834),
    x = n(765671),
    g = n(4616),
    h = n(743674),
    p = n(60175),
    v = n(545868),
    A = n(164956),
    N = n(976860),
    j = n(426660),
    f = n(71393),
    _ = n(486020),
    E = n(998304),
    b = n(669953),
    C = n(591552),
    O = n(713125),
    D = n(961973),
    I = n(289873),
    k = n(834730),
    P = n(821609),
    G = n(554830),
    S = n(793574),
    y = n(95561),
    T = n(546183),
    L = n(30370),
    R = n(174459),
    w = n(817818),
    H = n(875150),
    V = n(539916),
    $ = n(652215),
    q = n(375708),
    F = n(576002);
function U(e) {
    let { guildId: t, onComplete: n, isLastStep: l, isSubmitting: r = !1, disableTracking: a } = e,
        d = s.useRef(!1),
        { onboardingConnections: u, isLoading: m } = (0, o.cf)([C.A], () => ({
            onboardingConnections: C.A.getConnections(t),
            isLoading: C.A.isLoading(),
        })),
        x = (0, o.bG)(
            [T.default, L.A],
            () =>
                u.some((e) => {
                    if (e.connection_type === V.wZ.APPLICATION && null != e.application_id) {
                        let t = T.default.getNewestTokenForApplication(e.application_id);
                        return (
                            T.default.getFetchStateForApplication(e.application_id) === T.FetchState.FETCHED &&
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
        if (a || m || 0 === u.length || d.current) return;
        let e = (0, D.H_)(u),
            n = (0, D.OG)(u);
        R.default.track($.HAw.GUILD_ONBOARDING_STEP_VIEWED, {
            ...(0, y.H$)(t),
            step: w.l8,
            required: !1,
            provider_connections_connected: e.connected,
            provider_connections_not_connected: e.notConnected,
            application_connections_connected: n.connected,
            application_connections_not_connected: n.notConnected,
        }),
            (d.current = !0);
    }, [t, m, u, a]);
    let g = s.useCallback(() => {
        if (!a) {
            let e = (0, D.H_)(u),
                n = (0, D.OG)(u);
            R.default.track($.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                ...(0, y.H$)(t),
                step: w.l8,
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
                  (0, i.jsx)(k.E, {
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
                                          children: (0, i.jsx)(k.E, {
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
                                              H.A,
                                              { connection: e, guildId: t, location: S.A.GUILD_ONBOARDING },
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
                                      children: (0, i.jsx)(P.$, {
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
var B = n(201991),
    M = n(702841),
    K = n(990078),
    W = n(364522),
    X = n(548411),
    z = n(408213),
    J = n(386784),
    Z = n(403362),
    Q = n(218785),
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
            isSubmitting: d,
            selectOption: u,
            gotoPrevPrompt: m,
            gotoNextPrompt: x,
            completeOnboarding: g,
        } = e,
        h = (0, M.yK)([C.A], () => C.A.getOnboardingResponsesForPrompt(n.id, a.id)),
        p = 0 === h.length && a?.required,
        v = a?.options.filter((e) => h.includes(e.id)),
        A = (0, D.a)(v),
        N = (0, D.vV)(v),
        j = 0 === h.length,
        { helpText: f, helpTextAdditional: _ } = (0, Q.A)({
            guild: n,
            prompt: a,
            selectedRoleIds: A,
            selectedChannelIds: N,
            itemHook: en,
        }),
        E = (0, J.A)(n.id, 1e3),
        b = a.options.map((e) => ({ value: e.id, ...e })),
        O = a.options.filter((e) => h.includes(e.id)).map((e) => e.id);
    return (0, i.jsx)("div", {
        className: et.J1,
        children: (0, i.jsxs)("div", {
            className: et.mK,
            children: [
                (0, i.jsxs)(W.Ip, {
                    className: et.gT,
                    children: [
                        (0, i.jsxs)("div", {
                            className: et.q,
                            children: [
                                (0, i.jsx)(k.E, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: q.intl.format(q.t.isV0NW, { currentQuestion: s + 1, questionCount: r }),
                                }),
                                a.required
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(k.E, {
                                                  variant: "text-xs/normal",
                                                  className: et.HE,
                                                  children: "\xb7",
                                              }),
                                              (0, i.jsx)(k.E, {
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
                            className: et.DD,
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            id: t,
                            children: a.title,
                        }),
                        (0, i.jsx)(ee.A, {
                            options: b,
                            value: O,
                            onChange: (e) => {
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
                    className: et.N3,
                    children: [
                        (0, i.jsx)("div", {
                            className: et.X1,
                            children:
                                (s > 0 || o) &&
                                (0, i.jsx)(P.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: q.intl.string(q.t["13/7kX"]),
                                    onClick: () => m(h.length),
                                    icon: X.Z,
                                    iconPosition: "start",
                                }),
                        }),
                        (0, i.jsxs)("div", {
                            className: et.Oh,
                            children: [
                                (0, i.jsxs)(k.E, {
                                    className: et.BK,
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [f, " ", _],
                                }),
                                (0, i.jsx)(K.m, {
                                    asContainer: !0,
                                    text: p ? q.intl.string(q.t.dA1dSf) : null,
                                    children: (0, i.jsx)(P.$, {
                                        variant: j ? "secondary" : "primary",
                                        size: "md",
                                        text: l
                                            ? `${q.intl.string(q.t["8SuVoE"])} \u{1F389}`
                                            : j
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
function es(e) {
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
        h = (0, M.yK)([C.A], () => C.A.getOnboardingResponsesForPrompt(n.id, a.id)),
        p = 0 === h.length && a?.required,
        v = a?.options.filter((e) => h.includes(e.id)),
        A = (0, D.a)(v),
        N = (0, D.vV)(v),
        j = 0 === h.length,
        { helpText: f, helpTextAdditional: _ } = (0, Q.A)({
            guild: n,
            prompt: a,
            selectedRoleIds: A,
            selectedChannelIds: N,
            itemHook: en,
        });
    return (0, i.jsx)("div", {
        className: et.J1,
        children: (0, i.jsxs)("div", {
            className: et.mK,
            children: [
                (0, i.jsxs)(W.Ip, {
                    className: et.gT,
                    children: [
                        (0, i.jsxs)("div", {
                            className: et.q,
                            children: [
                                (0, i.jsx)(k.E, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: q.intl.format(q.t.isV0NW, { currentQuestion: s + 1, questionCount: r }),
                                }),
                                a.required
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(k.E, {
                                                  variant: "text-xs/normal",
                                                  className: et.HE,
                                                  children: "\xb7",
                                              }),
                                              (0, i.jsx)(k.E, {
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
                                        selected: h.includes(e.id),
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
                                    text: q.intl.string(q.t["13/7kX"]),
                                    onClick: () => m(h.length),
                                    icon: X.Z,
                                    iconPosition: "start",
                                }),
                        }),
                        (0, i.jsxs)("div", {
                            className: et.Oh,
                            children: [
                                (0, i.jsxs)(k.E, {
                                    className: et.BK,
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [f, " ", _],
                                }),
                                (0, i.jsx)(K.m, {
                                    asContainer: !0,
                                    text: p ? q.intl.string(q.t.dA1dSf) : null,
                                    children: (0, i.jsx)(P.$, {
                                        variant: j ? "secondary" : "primary",
                                        size: "md",
                                        text: l
                                            ? `${q.intl.string(q.t["8SuVoE"])} \u{1F389}`
                                            : j
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
function el(e) {
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
        x = (0, M.bG)([p.A], () => p.A.getRulesPrompt(t.id)),
        g = (0, M.bG)([C.A], () => C.A.getConnections(t.id)),
        h = s.useCallback(() => {
            m(!0), a();
        }, [a]);
    s.useEffect(() => {
        t.features.has($.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            !t.features.has($.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            z.Ay.fetchVerificationForm(t.id);
    }, [t]);
    let v = n[l],
        A = l + 1 >= n.length && !(0, D.L1)(t, x),
        N = n[0].required;
    s.useEffect(() => {
        c || R.default.track($.HAw.GUILD_ONBOARDING_STEP_VIEWED, { ...(0, y.H$)(t.id), step: 0, required: N });
    }, [t.id, N, c]);
    let j = (e) => {
            !c &&
                (R.default.track($.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                    ...(0, y.H$)(t.id),
                    step: l,
                    options_selected: e,
                    skipped: 0 === e,
                    back: !1,
                    in_onboarding: !0,
                    is_final_step: !1,
                }),
                l < n.length - 1 &&
                    R.default.track($.HAw.GUILD_ONBOARDING_STEP_VIEWED, {
                        ...(0, y.H$)(t.id),
                        step: l,
                        required: n[l + 1].required,
                    })),
                l + 1 < n.length ? o(l + 1) : (0, D.L1)(t, x) && o("rules");
        },
        f = (e) => {
            !c &&
                (R.default.track($.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                    ...(0, y.H$)(t.id),
                    step: l,
                    skipped: !1,
                    back: !0,
                    options_selected: e,
                    in_onboarding: !0,
                    is_final_step: !1,
                }),
                l > 0 &&
                    R.default.track($.HAw.GUILD_ONBOARDING_STEP_VIEWED, {
                        ...(0, y.H$)(t.id),
                        step: l - 1,
                        required: n[l - 1].required,
                    })),
                0 === l && g.length > 0 ? o("connections") : o(Math.max(0, l - 1));
        };
    if (null == v) return null;
    switch (v.type) {
        case V.ME.MULTIPLE_CHOICE:
            return (0, i.jsx)(es, {
                guild: t,
                headerId: d,
                step: l,
                questionCount: n.length,
                currentPrompt: v,
                lastPrompt: A,
                hasConnections: g.length > 0,
                isSubmitting: u,
                selectOption: r,
                gotoPrevPrompt: f,
                gotoNextPrompt: j,
                completeOnboarding: h,
            });
        case V.ME.DROPDOWN:
            return (0, i.jsx)(ei, {
                guild: t,
                headerId: d,
                step: l,
                questionCount: n.length,
                currentPrompt: v,
                lastPrompt: A,
                hasConnections: g.length > 0,
                isSubmitting: u,
                selectOption: r,
                gotoPrevPrompt: f,
                gotoNextPrompt: j,
                completeOnboarding: h,
            });
        default:
            (0, Z.xb)(v.type);
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
        d = s.useRef(null),
        u = (0, M.bG)([p.A], () => p.A.getRulesPrompt(t.id)),
        [m, x] = s.useState(u?.response ?? !1),
        [g, h] = s.useState(!1),
        v = (0, M.bG)([p.A], () => p.A.get(t.id)),
        A = s.useRef(null),
        N = s.useRef(null),
        j = s.useCallback(async () => {
            if (null != v && null != u) {
                h(!0);
                try {
                    await z.Ay.submitVerificationForm(t.id, { ...v, formFields: [{ ...u, response: m }] });
                } catch {}
                l();
            }
        }, [t.id, v, u, m, l]);
    function f(e) {
        let [t] = e;
        t.isIntersecting && x(!0);
    }
    return (s.useEffect(() => {
        let e = new IntersectionObserver(f, { root: A.current, rootMargin: "0px", threshold: 0 }),
            t = N.current;
        return (
            null != t && null != t.lastElementChild && e.observe(t.lastElementChild),
            () => {
                null != t && null != t.lastElementChild && e.unobserve(t.lastElementChild);
            }
        );
    }, [N, A]),
    null == u)
        ? null
        : (0, i.jsx)("div", {
              className: et.J1,
              children: (0, i.jsxs)("div", {
                  className: et.mK,
                  ref: A,
                  children: [
                      (0, i.jsxs)(er.Ch, {
                          className: et.gT,
                          ref: d,
                          children: [
                              (0, i.jsx)(k.E, {
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  children: q.intl.string(q.t["b1JC+l"]),
                              }),
                              (0, i.jsx)(c.D, { variant: "heading-xl/semibold", children: q.intl.string(q.t.prJqwT) }),
                              (0, i.jsx)("div", {
                                  className: et.qE,
                                  ref: N,
                                  children: u.values.map((e, n) =>
                                      (0, i.jsxs)(
                                          "div",
                                          {
                                              className: et.gJ,
                                              children: [
                                                  (0, i.jsx)(k.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: `${n + 1}.`,
                                                  }),
                                                  (0, i.jsx)(k.E, {
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
                                          text: q.intl.string(q.t["13/7kX"]),
                                          onClick: () => {
                                              !a &&
                                                  (R.default.track($.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                                                      ...(0, y.H$)(t.id),
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
                                                          ...(0, y.H$)(t.id),
                                                          step: o,
                                                          required: n[o].required,
                                                      })),
                                                  r(o);
                                          },
                                          icon: X.Z,
                                          iconPosition: "start",
                                      }),
                              }),
                              (0, i.jsxs)("div", {
                                  className: et.Oh,
                                  children: [
                                      (0, i.jsx)(k.E, {
                                          className: et.BK,
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          children: m ? q.intl.string(q.t.arAe3I) : q.intl.string(q.t.D0CVAc),
                                      }),
                                      (0, i.jsx)(P.$, {
                                          variant: "primary",
                                          size: "md",
                                          text: `${q.intl.string(q.t["8SuVoE"])} \u{1F389}`,
                                          onClick: j,
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
var ed = n(339875);
function ec(e) {
    let { guildId: t } = e,
        { ref: l, width: I, height: k } = (0, x.Ay)(),
        P = (0, o.yK)([C.A], () => C.A.getOnboardingPromptsForOnboarding(t)),
        G = (0, o.bG)([C.A], () => C.A.getEnabled(t)),
        S = (0, o.bG)([C.A], () => C.A.getConnections(t)),
        y = (0, o.bG)([p.A], () => p.A.getRulesPrompt(t)),
        T = s.useCallback(
            (e, n, i) => {
                b.A.selectOption(t, e, n, i);
            },
            [t],
        ),
        L = s.useCallback(() => {
            b.A.completeOnboarding(t, P);
        }, [t, P]),
        R = (0, o.bG)([f.A], () => f.A.getGuild(t)),
        w = s.useMemo(() => (null == R ? null : _.Ay.getGuildSplashURL({ id: R.id, splash: R.splash })), [R]),
        H = (0, h.S)(w),
        V = s.useRef(null),
        F = s.useCallback(
            (e) => {
                null == w ||
                    (null != V.current && V.current.contains(e.target)) ||
                    (0, u.L3)(e, async () => {
                        let { default: e } = await Promise.all([n.e("95340"), n.e("95813")]).then(n.bind(n, 977700));
                        return (t) => (0, i.jsx)(e, { ...t, splashUrl: w });
                    });
            },
            [w],
        ),
        M = (0, o.bG)([O.Ay], () => O.Ay.getCurrentOnboardingStep(t)),
        [K, W] = s.useState(null != w ? null : "cover"),
        [X, z] = s.useState(!1),
        J = s.useCallback(
            (e) => {
                W(M), b.A.setUserOnboardingStep(t, e);
            },
            [t, M],
        ),
        Z = (0, o.bG)([A.A], () => A.A.isFullServerPreview(t)),
        Q = (0, o.bG)([O.Ay], () => O.Ay.getOnboardingStatus(t)),
        Y = null != P && P.length > 0,
        ee = s.useCallback(() => {
            (0, O.eg)(Q) && G && (Y || 0 !== S.length) ? (S.length > 0 ? J("connections") : J(0)) : L();
        }, [Q, G, Y, S.length, J, L]);
    s.useEffect(() => {
        if (!O.Ay.shouldShowOnboarding(t)) return m.A.escapeToDefaultChannel(t);
        (0, v.L)(t);
    }, [t]);
    let et = (0, d.p)(
            M,
            { config: a.config.default, from: { scale: 0.8, opacity: 0 }, enter: { scale: 1, opacity: 1 } },
            "cover" !== K && null !== K ? "animate-never" : "respect-motion-settings",
        ),
        en = O.Ay.shouldShowOnboarding(t),
        ei = null == R;
    return (s.useEffect(() => {
        if (!en || ei) {
            let e = setTimeout(() => {
                (0, N.pX)($.BVt.CHANNEL(t));
            }, 1e3);
            return () => clearTimeout(e);
        }
    }, [en, ei, t]),
    O.Ay.shouldShowOnboarding(t) && null != R)
        ? (0, i.jsxs)("div", {
              className: r()(ed.iW, { [ed.Me]: null == w }),
              ref: l,
              onContextMenu: F,
              children: [
                  null != w
                      ? (0, i.jsx)(g.A, { className: ed.xX, src: w, width: I, height: k, imageClassName: ed.Iv })
                      : (0, i.jsx)(j.A, {}),
                  null != H &&
                      (0, i.jsx)("div", {
                          className: ed.D7,
                          style: {
                              background: `linear-gradient(180deg, ${(0, E.cb)(H, 0.16)} 0%, ${(0, E.cb)(H, 1)} 100%)`,
                          },
                      }),
                  null == w ? null : (0, i.jsx)("div", { className: ed.D7 }),
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
                                          switch (M) {
                                              case "cover":
                                                  return (0, i.jsx)(B.Ay, {
                                                      guild: R,
                                                      onboardingStatus: O.$o.READY,
                                                      onStart: ee,
                                                      disableTracking: Z,
                                                  });
                                              case "connections":
                                                  return (0, i.jsx)(U, {
                                                      guildId: t,
                                                      isLastStep: 0 === P.length && !(0, D.L1)(R, y),
                                                      isSubmitting: X,
                                                      disableTracking: Z,
                                                      onComplete: () => {
                                                          P.length > 0
                                                              ? J(0)
                                                              : (0, D.L1)(R, y)
                                                                ? J("rules")
                                                                : (z(!0), L());
                                                      },
                                                  });
                                              case "rules":
                                                  return (0, i.jsx)(eo, {
                                                      setCurrentStep: J,
                                                      previousPromptIndex:
                                                          P.length > 0
                                                              ? P.length - 1
                                                              : S.length > 0
                                                                ? "connections"
                                                                : "cover",
                                                      guild: R,
                                                      prompts: P,
                                                      completeOnboarding: L,
                                                      disableTracking: Z,
                                                  });
                                              case null:
                                                  return null;
                                              default:
                                                  return (0, i.jsx)(el, {
                                                      guild: R,
                                                      prompts: P,
                                                      step: M,
                                                      selectOption: T,
                                                      completeOnboarding: L,
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
                                  className: ed.m6,
                                  children: (0, i.jsx)(c.D, {
                                      variant: "heading-sm/normal",
                                      color: "text-default",
                                      children: q.intl.format(q.t.kI6UoD, { privacyLink: $.X7G.PRIVACY }),
                                  }),
                              }),
                      ],
                  }),
              ],
          })
        : null;
}
