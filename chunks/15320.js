n.d(t, { Z: () => I });
var r = n(951288),
    l = n(647438),
    i = n(399606),
    o = n(28664),
    a = n(481060),
    s = n(367907),
    c = n(863249),
    u = n(944163),
    d = n(14263),
    m = n(626135),
    f = n(823379),
    p = n(45966),
    h = n(637853),
    x = n(968644),
    g = n(104265),
    v = n(588632),
    j = n(290511),
    _ = n(981631),
    b = n(388032),
    O = n(802179);
function C(e) {
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
function y(e, t) {
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
function N(e, t) {
    return (0, r.jsx)(
        "span",
        {
            className: O.helpTextItem,
            children: e,
        },
        t,
    );
}
function E(e, t) {
    return (
        !(
            e.features.has(_.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            e.features.has(_.oNc.MEMBER_VERIFICATION_GATE_ENABLED)
        ) && null != t
    );
}
function P(e) {
    let {
            headerId: t,
            guild: n,
            step: l,
            lastPrompt: s,
            questionCount: c,
            currentPrompt: u,
            selectOption: m,
            gotoPrevPrompt: f,
            gotoNextPrompt: g,
            completeOnboarding: j,
        } = e,
        _ = (0, i.Wu)([p.Z], () => p.Z.getOnboardingResponsesForPrompt(n.id, u.id)),
        y = 0 === _.length && (null == u ? void 0 : u.required),
        E = null == u ? void 0 : u.options.filter((e) => _.includes(e.id)),
        P = (0, h.L6)(E),
        Z = (0, h.dX)(E),
        I = 0 === _.length,
        { helpText: T, helpTextAdditional: w } = (0, x.Z)({
            guild: n,
            prompt: u,
            selectedRoleIds: P,
            selectedChannelIds: Z,
            itemHook: N,
        }),
        k = (0, d.Z)(n.id, 1000),
        D = u.options.map((e) => C({ value: e.id }, e)),
        R = u.options.filter((e) => _.includes(e.id)).map((e) => e.id);
    return (0, r.jsx)("div", {
        className: O.prompt,
        children: (0, r.jsxs)("div", {
            className: O.promptContent,
            children: [
                (0, r.jsxs)(a.zJl, {
                    className: O.scrollerContent,
                    children: [
                        (0, r.jsxs)("div", {
                            className: O.questionHeader,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: b.intl.format(b.t.isV0NT, {
                                        currentQuestion: l + 1,
                                        questionCount: c,
                                    }),
                                }),
                                u.required
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(a.Text, {
                                                  variant: "text-xs/normal",
                                                  className: O.headerSeparator,
                                                  children: "\xB7",
                                              }),
                                              (0, r.jsx)(a.Text, {
                                                  variant: "text-sm/medium",
                                                  color: "text-brand",
                                                  children: b.intl.string(b.t.Ur8Vrq),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        (0, r.jsx)(a.X6q, {
                            className: O.title,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            id: t,
                            children: u.title,
                        }),
                        (0, r.jsx)(v.Z, {
                            options: D,
                            value: R,
                            onChange: (e) => {
                                let t = e.find((e) => !_.includes(e.id)),
                                    n = e.map((e) => e.id);
                                if (null != t) m(u.id, t.id, !0);
                                else {
                                    let e = _.filter((e) => !n.includes(e));
                                    u.options
                                        .filter((t) => e.includes(t.id))
                                        .forEach((e) => {
                                            m(u.id, e.id, !1);
                                        });
                                }
                            },
                            memberCounts: k,
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: O.navButtons,
                    children: [
                        (0, r.jsx)("div", {
                            className: O.leftButtons,
                            children:
                                l > 0 &&
                                (0, r.jsx)(a.zxk, {
                                    variant: "secondary",
                                    size: "md",
                                    text: b.intl.string(b.t["13/7kZ"]),
                                    onClick: () => f(_.length),
                                    icon: a.j9r,
                                    iconPosition: "start",
                                }),
                        }),
                        (0, r.jsxs)("div", {
                            className: O.rightButtons,
                            children: [
                                (0, r.jsxs)(a.Text, {
                                    className: O.helpText,
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [T, " ", w],
                                }),
                                (0, r.jsx)(o.u, {
                                    asContainer: !0,
                                    text: y ? b.intl.string(b.t.dA1dSU) : null,
                                    children: (0, r.jsx)(a.zxk, {
                                        variant: I ? "secondary" : "primary",
                                        size: "md",
                                        text: s
                                            ? "".concat(b.intl.string(b.t["8SuVoK"]), " \uD83C\uDF89")
                                            : I
                                              ? b.intl.string(b.t["5WxrcX"])
                                              : b.intl.string(b.t.PDTjLC),
                                        onClick: () => (s ? j() : g(_.length)),
                                        disabled: y,
                                        icon: s ? void 0 : a.d4D,
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
function Z(e) {
    let {
            headerId: t,
            guild: n,
            step: l,
            lastPrompt: s,
            questionCount: c,
            currentPrompt: u,
            selectOption: d,
            gotoPrevPrompt: m,
            gotoNextPrompt: f,
            completeOnboarding: v,
        } = e,
        j = (0, i.Wu)([p.Z], () => p.Z.getOnboardingResponsesForPrompt(n.id, u.id)),
        _ = 0 === j.length && (null == u ? void 0 : u.required),
        C = null == u ? void 0 : u.options.filter((e) => j.includes(e.id)),
        y = (0, h.L6)(C),
        E = (0, h.dX)(C),
        P = 0 === j.length,
        { helpText: Z, helpTextAdditional: I } = (0, x.Z)({
            guild: n,
            prompt: u,
            selectedRoleIds: y,
            selectedChannelIds: E,
            itemHook: N,
        });
    return (0, r.jsx)("div", {
        className: O.prompt,
        children: (0, r.jsxs)("div", {
            className: O.promptContent,
            children: [
                (0, r.jsxs)(a.zJl, {
                    className: O.scrollerContent,
                    children: [
                        (0, r.jsxs)("div", {
                            className: O.questionHeader,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: b.intl.format(b.t.isV0NT, {
                                        currentQuestion: l + 1,
                                        questionCount: c,
                                    }),
                                }),
                                u.required
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(a.Text, {
                                                  variant: "text-xs/normal",
                                                  className: O.headerSeparator,
                                                  children: "\xB7",
                                              }),
                                              (0, r.jsx)(a.Text, {
                                                  variant: "text-sm/medium",
                                                  color: "text-brand",
                                                  children: b.intl.string(b.t.Ur8Vrq),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        (0, r.jsx)(a.X6q, {
                            className: O.title,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            id: t,
                            children: u.title,
                        }),
                        (0, r.jsx)("div", {
                            className: O.promptOptions,
                            children: u.options.map((e) =>
                                (0, r.jsx)(
                                    g.Z,
                                    {
                                        guildId: n.id,
                                        option: e,
                                        onSelect: (t) => d(u.id, e.id, null != t && t),
                                        selected: j.includes(e.id),
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: O.navButtons,
                    children: [
                        (0, r.jsx)("div", {
                            className: O.leftButtons,
                            children:
                                l > 0 &&
                                (0, r.jsx)(a.zxk, {
                                    variant: "secondary",
                                    size: "md",
                                    text: b.intl.string(b.t["13/7kZ"]),
                                    onClick: () => m(j.length),
                                    icon: a.j9r,
                                    iconPosition: "start",
                                }),
                        }),
                        (0, r.jsxs)("div", {
                            className: O.rightButtons,
                            children: [
                                (0, r.jsxs)(a.Text, {
                                    className: O.helpText,
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [Z, " ", I],
                                }),
                                (0, r.jsx)(o.u, {
                                    asContainer: !0,
                                    text: _ ? b.intl.string(b.t.dA1dSU) : null,
                                    children: (0, r.jsx)(a.zxk, {
                                        variant: P ? "secondary" : "primary",
                                        size: "md",
                                        text: s
                                            ? "".concat(b.intl.string(b.t["8SuVoK"]), " \uD83C\uDF89")
                                            : P
                                              ? b.intl.string(b.t["5WxrcX"])
                                              : b.intl.string(b.t.PDTjLC),
                                        onClick: () => (s ? v() : f(j.length)),
                                        disabled: _,
                                        icon: s ? void 0 : a.d4D,
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
function I(e) {
    let {
            guild: t,
            prompts: n,
            step: o,
            selectOption: a,
            completeOnboarding: d,
            setCurrentStep: p,
            headerId: h,
            disableTracking: x,
        } = e,
        g = (0, i.e7)([u.Z], () => u.Z.getRulesPrompt(t.id));
    l.useEffect(() => {
        t.features.has(_.oNc.MEMBER_VERIFICATION_GATE_ENABLED) &&
            !t.features.has(_.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            c.ZP.fetchVerificationForm(t.id);
    }, [t]);
    let v = n[o],
        b = o + 1 >= n.length && !E(t, g),
        O = n[0].required;
    l.useEffect(() => {
        x ||
            m.default.track(
                _.rMx.GUILD_ONBOARDING_STEP_VIEWED,
                y(C({}, (0, s.hH)(t.id)), {
                    step: 0,
                    required: O,
                }),
            );
    }, [t.id, O, x]);
    let N = (e) => {
            !x &&
                (m.default.track(
                    _.rMx.GUILD_ONBOARDING_STEP_COMPLETED,
                    y(C({}, (0, s.hH)(t.id)), {
                        step: o,
                        options_selected: e,
                        skipped: 0 === e,
                        back: !1,
                        in_onboarding: !0,
                        is_final_step: !1,
                    }),
                ),
                o < n.length - 1 &&
                    m.default.track(
                        _.rMx.GUILD_ONBOARDING_STEP_VIEWED,
                        y(C({}, (0, s.hH)(t.id)), {
                            step: o,
                            required: n[o + 1].required,
                        }),
                    )),
                o + 1 < n.length ? p(o + 1) : E(t, g) && p("rules");
        },
        I = (e) => {
            !x &&
                (m.default.track(
                    _.rMx.GUILD_ONBOARDING_STEP_COMPLETED,
                    y(C({}, (0, s.hH)(t.id)), {
                        step: o,
                        skipped: !1,
                        back: !0,
                        options_selected: e,
                        in_onboarding: !0,
                        is_final_step: !1,
                    }),
                ),
                o > 0 &&
                    m.default.track(
                        _.rMx.GUILD_ONBOARDING_STEP_VIEWED,
                        y(C({}, (0, s.hH)(t.id)), {
                            step: o - 1,
                            required: n[o - 1].required,
                        }),
                    )),
                p(Math.max(0, o - 1));
        };
    if (null == v) return null;
    switch (v.type) {
        case j.FN.MULTIPLE_CHOICE:
            return (0, r.jsx)(Z, {
                guild: t,
                headerId: h,
                step: o,
                questionCount: n.length,
                currentPrompt: v,
                lastPrompt: b,
                selectOption: a,
                gotoPrevPrompt: I,
                gotoNextPrompt: N,
                completeOnboarding: d,
            });
        case j.FN.DROPDOWN:
            return (0, r.jsx)(P, {
                guild: t,
                headerId: h,
                step: o,
                questionCount: n.length,
                currentPrompt: v,
                lastPrompt: b,
                selectOption: a,
                gotoPrevPrompt: I,
                gotoNextPrompt: N,
                completeOnboarding: d,
            });
        default:
            (0, f.vE)(v.type);
    }
}
