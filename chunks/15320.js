n.d(t, { Z: () => D });
var r = n(54381),
    i = n(473749),
    o = n(399606),
    a = n(28664),
    l = n(481060),
    s = n(367907),
    c = n(863249),
    d = n(944163),
    u = n(14263),
    p = n(626135),
    f = n(823379),
    m = n(45966),
    b = n(637853),
    g = n(968644),
    h = n(104265),
    x = n(588632),
    v = n(290511),
    O = n(981631),
    j = n(388032),
    _ = n(613438);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P(e, t) {
    return (0, r.jsx)(
        "span",
        {
            className: _.helpTextItem,
            children: e,
        },
        t,
    );
}
function C(e) {
    let {
            headerId: t,
            guild: n,
            step: i,
            lastPrompt: s,
            questionCount: c,
            currentPrompt: d,
            hasConnections: p,
            selectOption: f,
            gotoPrevPrompt: h,
            gotoNextPrompt: v,
            completeOnboarding: O,
        } = e,
        N = (0, o.Wu)([m.Z], () => m.Z.getOnboardingResponsesForPrompt(n.id, d.id)),
        C = 0 === N.length && (null == d ? void 0 : d.required),
        E = null == d ? void 0 : d.options.filter((e) => N.includes(e.id)),
        D = (0, b.L6)(E),
        I = (0, b.dX)(E),
        Z = 0 === N.length,
        { helpText: T, helpTextAdditional: w } = (0, g.Z)({
            guild: n,
            prompt: d,
            selectedRoleIds: D,
            selectedChannelIds: I,
            itemHook: P,
        }),
        S = (0, u.Z)(n.id, 1000),
        k = d.options.map((e) => y({ value: e.id }, e)),
        A = d.options.filter((e) => N.includes(e.id)).map((e) => e.id);
    return (0, r.jsx)("div", {
        className: _.prompt,
        children: (0, r.jsxs)("div", {
            className: _.promptContent,
            children: [
                (0, r.jsxs)(l.zJl, {
                    className: _.scrollerContent,
                    children: [
                        (0, r.jsxs)("div", {
                            className: _.questionHeader,
                            children: [
                                (0, r.jsx)(l.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: j.intl.format(j.t.isV0NW, {
                                        currentQuestion: i + 1,
                                        questionCount: c,
                                    }),
                                }),
                                d.required
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(l.Text, {
                                                  variant: "text-xs/normal",
                                                  className: _.headerSeparator,
                                                  children: "\xB7",
                                              }),
                                              (0, r.jsx)(l.Text, {
                                                  variant: "text-sm/medium",
                                                  color: "text-brand",
                                                  children: j.intl.string(j.t.Ur8Vrt),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        (0, r.jsx)(l.Heading, {
                            className: _.title,
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            id: t,
                            children: d.title,
                        }),
                        (0, r.jsx)(x.Z, {
                            options: k,
                            value: A,
                            onChange: (e) => {
                                let t = e.find((e) => !N.includes(e.id)),
                                    n = e.map((e) => e.id);
                                if (null != t) f(d.id, t.id, !0);
                                else {
                                    let e = N.filter((e) => !n.includes(e));
                                    d.options
                                        .filter((t) => e.includes(t.id))
                                        .forEach((e) => {
                                            f(d.id, e.id, !1);
                                        });
                                }
                            },
                            memberCounts: S,
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: _.navButtons,
                    children: [
                        (0, r.jsx)("div", {
                            className: _.leftButtons,
                            children:
                                (i > 0 || p) &&
                                (0, r.jsx)(l.Button, {
                                    variant: "secondary",
                                    size: "md",
                                    text: j.intl.string(j.t["13/7kX"]),
                                    onClick: () => h(N.length),
                                    icon: l.j9r,
                                    iconPosition: "start",
                                }),
                        }),
                        (0, r.jsxs)("div", {
                            className: _.rightButtons,
                            children: [
                                (0, r.jsxs)(l.Text, {
                                    className: _.helpText,
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [T, " ", w],
                                }),
                                (0, r.jsx)(a.u, {
                                    asContainer: !0,
                                    text: C ? j.intl.string(j.t.dA1dSf) : null,
                                    children: (0, r.jsx)(l.Button, {
                                        variant: Z ? "secondary" : "primary",
                                        size: "md",
                                        text: s
                                            ? "".concat(j.intl.string(j.t["8SuVoE"]), " \uD83C\uDF89")
                                            : Z
                                              ? j.intl.string(j.t["5Wxrcd"])
                                              : j.intl.string(j.t.PDTjLN),
                                        onClick: () => (s ? O() : v(N.length)),
                                        disabled: C,
                                        icon: s ? void 0 : l.d4D,
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
function E(e) {
    let {
            headerId: t,
            guild: n,
            step: i,
            lastPrompt: s,
            questionCount: c,
            currentPrompt: d,
            hasConnections: u,
            selectOption: p,
            gotoPrevPrompt: f,
            gotoNextPrompt: x,
            completeOnboarding: v,
        } = e,
        O = (0, o.Wu)([m.Z], () => m.Z.getOnboardingResponsesForPrompt(n.id, d.id)),
        y = 0 === O.length && (null == d ? void 0 : d.required),
        N = null == d ? void 0 : d.options.filter((e) => O.includes(e.id)),
        C = (0, b.L6)(N),
        E = (0, b.dX)(N),
        D = 0 === O.length,
        { helpText: I, helpTextAdditional: Z } = (0, g.Z)({
            guild: n,
            prompt: d,
            selectedRoleIds: C,
            selectedChannelIds: E,
            itemHook: P,
        });
    return (0, r.jsx)("div", {
        className: _.prompt,
        children: (0, r.jsxs)("div", {
            className: _.promptContent,
            children: [
                (0, r.jsxs)(l.zJl, {
                    className: _.scrollerContent,
                    children: [
                        (0, r.jsxs)("div", {
                            className: _.questionHeader,
                            children: [
                                (0, r.jsx)(l.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: j.intl.format(j.t.isV0NW, {
                                        currentQuestion: i + 1,
                                        questionCount: c,
                                    }),
                                }),
                                d.required
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(l.Text, {
                                                  variant: "text-xs/normal",
                                                  className: _.headerSeparator,
                                                  children: "\xB7",
                                              }),
                                              (0, r.jsx)(l.Text, {
                                                  variant: "text-sm/medium",
                                                  color: "text-brand",
                                                  children: j.intl.string(j.t.Ur8Vrt),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        (0, r.jsx)(l.Heading, {
                            className: _.title,
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            id: t,
                            children: d.title,
                        }),
                        (0, r.jsx)("div", {
                            className: _.promptOptions,
                            children: d.options.map((e) =>
                                (0, r.jsx)(
                                    h.Z,
                                    {
                                        guildId: n.id,
                                        option: e,
                                        onSelect: (t) => p(d.id, e.id, null != t && t),
                                        selected: O.includes(e.id),
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: _.navButtons,
                    children: [
                        (0, r.jsx)("div", {
                            className: _.leftButtons,
                            children:
                                (i > 0 || u) &&
                                (0, r.jsx)(l.Button, {
                                    variant: "secondary",
                                    size: "md",
                                    text: j.intl.string(j.t["13/7kX"]),
                                    onClick: () => f(O.length),
                                    icon: l.j9r,
                                    iconPosition: "start",
                                }),
                        }),
                        (0, r.jsxs)("div", {
                            className: _.rightButtons,
                            children: [
                                (0, r.jsxs)(l.Text, {
                                    className: _.helpText,
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [I, " ", Z],
                                }),
                                (0, r.jsx)(a.u, {
                                    asContainer: !0,
                                    text: y ? j.intl.string(j.t.dA1dSf) : null,
                                    children: (0, r.jsx)(l.Button, {
                                        variant: D ? "secondary" : "primary",
                                        size: "md",
                                        text: s
                                            ? "".concat(j.intl.string(j.t["8SuVoE"]), " \uD83C\uDF89")
                                            : D
                                              ? j.intl.string(j.t["5Wxrcd"])
                                              : j.intl.string(j.t.PDTjLN),
                                        onClick: () => (s ? v() : x(O.length)),
                                        disabled: y,
                                        icon: s ? void 0 : l.d4D,
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
function D(e) {
    let {
            guild: t,
            prompts: n,
            step: a,
            selectOption: l,
            completeOnboarding: u,
            setCurrentStep: g,
            headerId: h,
            disableTracking: x,
        } = e,
        j = (0, o.e7)([d.Z], () => d.Z.getRulesPrompt(t.id)),
        _ = (0, o.e7)([m.Z], () => m.Z.getConnections(t.id));
    i.useEffect(() => {
        t.features.has(O.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            !t.features.has(O.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            c.ZP.fetchVerificationForm(t.id);
    }, [t]);
    let P = n[a],
        D = a + 1 >= n.length && !(0, b.O5)(t, j),
        I = n[0].required;
    i.useEffect(() => {
        x ||
            p.default.track(
                O.rMx.GUILD_ONBOARDING_STEP_VIEWED,
                N(y({}, (0, s.hH)(t.id)), {
                    step: 0,
                    required: I,
                }),
            );
    }, [t.id, I, x]);
    let Z = (e) => {
            !x &&
                (p.default.track(
                    O.rMx.GUILD_ONBOARDING_STEP_COMPLETED,
                    N(y({}, (0, s.hH)(t.id)), {
                        step: a,
                        options_selected: e,
                        skipped: 0 === e,
                        back: !1,
                        in_onboarding: !0,
                        is_final_step: !1,
                    }),
                ),
                a < n.length - 1 &&
                    p.default.track(
                        O.rMx.GUILD_ONBOARDING_STEP_VIEWED,
                        N(y({}, (0, s.hH)(t.id)), {
                            step: a,
                            required: n[a + 1].required,
                        }),
                    )),
                a + 1 < n.length ? g(a + 1) : (0, b.O5)(t, j) && g("rules");
        },
        T = (e) => {
            !x &&
                (p.default.track(
                    O.rMx.GUILD_ONBOARDING_STEP_COMPLETED,
                    N(y({}, (0, s.hH)(t.id)), {
                        step: a,
                        skipped: !1,
                        back: !0,
                        options_selected: e,
                        in_onboarding: !0,
                        is_final_step: !1,
                    }),
                ),
                a > 0 &&
                    p.default.track(
                        O.rMx.GUILD_ONBOARDING_STEP_VIEWED,
                        N(y({}, (0, s.hH)(t.id)), {
                            step: a - 1,
                            required: n[a - 1].required,
                        }),
                    )),
                0 === a && _.length > 0 ? g("connections") : g(Math.max(0, a - 1));
        };
    if (null == P) return null;
    switch (P.type) {
        case v.FN.MULTIPLE_CHOICE:
            return (0, r.jsx)(E, {
                guild: t,
                headerId: h,
                step: a,
                questionCount: n.length,
                currentPrompt: P,
                lastPrompt: D,
                hasConnections: _.length > 0,
                selectOption: l,
                gotoPrevPrompt: T,
                gotoNextPrompt: Z,
                completeOnboarding: u,
            });
        case v.FN.DROPDOWN:
            return (0, r.jsx)(C, {
                guild: t,
                headerId: h,
                step: a,
                questionCount: n.length,
                currentPrompt: P,
                lastPrompt: D,
                hasConnections: _.length > 0,
                selectOption: l,
                gotoPrevPrompt: T,
                gotoNextPrompt: Z,
                completeOnboarding: u,
            });
        default:
            (0, f.vE)(P.type);
    }
}
