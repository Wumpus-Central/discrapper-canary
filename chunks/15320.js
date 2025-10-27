n.d(t, { Z: () => Z });
var r = n(951288),
    l = n(647438),
    i = n(399606),
    a = n(28664),
    o = n(481060),
    s = n(367907),
    c = n(863249),
    u = n(944163),
    d = n(14263),
    m = n(626135),
    f = n(823379),
    p = n(45966),
    h = n(637853),
    g = n(968644),
    x = n(104265),
    v = n(588632),
    j = n(290511),
    _ = n(981631),
    b = n(388032),
    O = n(802179);
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
function C(e, t) {
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
            e.features.has(_.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            e.features.has(_.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)
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
            gotoNextPrompt: x,
            completeOnboarding: j,
        } = e,
        _ = (0, i.Wu)([p.Z], () => p.Z.getOnboardingResponsesForPrompt(n.id, u.id)),
        N = 0 === _.length && (null == u ? void 0 : u.required),
        E = null == u ? void 0 : u.options.filter((e) => _.includes(e.id)),
        P = (0, h.L6)(E),
        I = (0, h.dX)(E),
        Z = 0 === _.length,
        { helpText: w, helpTextAdditional: T } = (0, g.Z)({
            guild: n,
            prompt: u,
            selectedRoleIds: P,
            selectedChannelIds: I,
            itemHook: C,
        }),
        D = (0, d.Z)(n.id, 1000),
        S = u.options.map((e) => y({ value: e.id }, e)),
        R = u.options.filter((e) => _.includes(e.id)).map((e) => e.id);
    return (0, r.jsx)("div", {
        className: O.prompt,
        children: (0, r.jsxs)("div", {
            className: O.promptContent,
            children: [
                (0, r.jsxs)(o.zJl, {
                    className: O.scrollerContent,
                    children: [
                        (0, r.jsxs)("div", {
                            className: O.questionHeader,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: b.intl.format(b.t.isV0NW, {
                                        currentQuestion: l + 1,
                                        questionCount: c,
                                    }),
                                }),
                                u.required
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(o.Text, {
                                                  variant: "text-xs/normal",
                                                  className: O.headerSeparator,
                                                  children: "\xB7",
                                              }),
                                              (0, r.jsx)(o.Text, {
                                                  variant: "text-sm/medium",
                                                  color: "text-brand",
                                                  children: b.intl.string(b.t.Ur8Vrt),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        (0, r.jsx)(o.Heading, {
                            className: O.title,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            id: t,
                            children: u.title,
                        }),
                        (0, r.jsx)(v.Z, {
                            options: S,
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
                            memberCounts: D,
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
                                (0, r.jsx)(o.Button, {
                                    variant: "secondary",
                                    size: "md",
                                    text: b.intl.string(b.t["13/7kX"]),
                                    onClick: () => f(_.length),
                                    icon: o.j9r,
                                    iconPosition: "start",
                                }),
                        }),
                        (0, r.jsxs)("div", {
                            className: O.rightButtons,
                            children: [
                                (0, r.jsxs)(o.Text, {
                                    className: O.helpText,
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [w, " ", T],
                                }),
                                (0, r.jsx)(a.u, {
                                    asContainer: !0,
                                    text: N ? b.intl.string(b.t.dA1dSf) : null,
                                    children: (0, r.jsx)(o.Button, {
                                        variant: Z ? "secondary" : "primary",
                                        size: "md",
                                        text: s
                                            ? "".concat(b.intl.string(b.t["8SuVoE"]), " \uD83C\uDF89")
                                            : Z
                                              ? b.intl.string(b.t["5Wxrcd"])
                                              : b.intl.string(b.t.PDTjLN),
                                        onClick: () => (s ? j() : x(_.length)),
                                        disabled: N,
                                        icon: s ? void 0 : o.d4D,
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
        y = null == u ? void 0 : u.options.filter((e) => j.includes(e.id)),
        N = (0, h.L6)(y),
        E = (0, h.dX)(y),
        P = 0 === j.length,
        { helpText: I, helpTextAdditional: Z } = (0, g.Z)({
            guild: n,
            prompt: u,
            selectedRoleIds: N,
            selectedChannelIds: E,
            itemHook: C,
        });
    return (0, r.jsx)("div", {
        className: O.prompt,
        children: (0, r.jsxs)("div", {
            className: O.promptContent,
            children: [
                (0, r.jsxs)(o.zJl, {
                    className: O.scrollerContent,
                    children: [
                        (0, r.jsxs)("div", {
                            className: O.questionHeader,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: b.intl.format(b.t.isV0NW, {
                                        currentQuestion: l + 1,
                                        questionCount: c,
                                    }),
                                }),
                                u.required
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(o.Text, {
                                                  variant: "text-xs/normal",
                                                  className: O.headerSeparator,
                                                  children: "\xB7",
                                              }),
                                              (0, r.jsx)(o.Text, {
                                                  variant: "text-sm/medium",
                                                  color: "text-brand",
                                                  children: b.intl.string(b.t.Ur8Vrt),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        (0, r.jsx)(o.Heading, {
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
                                    x.Z,
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
                                (0, r.jsx)(o.Button, {
                                    variant: "secondary",
                                    size: "md",
                                    text: b.intl.string(b.t["13/7kX"]),
                                    onClick: () => m(j.length),
                                    icon: o.j9r,
                                    iconPosition: "start",
                                }),
                        }),
                        (0, r.jsxs)("div", {
                            className: O.rightButtons,
                            children: [
                                (0, r.jsxs)(o.Text, {
                                    className: O.helpText,
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [I, " ", Z],
                                }),
                                (0, r.jsx)(a.u, {
                                    asContainer: !0,
                                    text: _ ? b.intl.string(b.t.dA1dSf) : null,
                                    children: (0, r.jsx)(o.Button, {
                                        variant: P ? "secondary" : "primary",
                                        size: "md",
                                        text: s
                                            ? "".concat(b.intl.string(b.t["8SuVoE"]), " \uD83C\uDF89")
                                            : P
                                              ? b.intl.string(b.t["5Wxrcd"])
                                              : b.intl.string(b.t.PDTjLN),
                                        onClick: () => (s ? v() : f(j.length)),
                                        disabled: _,
                                        icon: s ? void 0 : o.d4D,
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
            guild: t,
            prompts: n,
            step: a,
            selectOption: o,
            completeOnboarding: d,
            setCurrentStep: p,
            headerId: h,
            disableTracking: g,
        } = e,
        x = (0, i.e7)([u.Z], () => u.Z.getRulesPrompt(t.id));
    l.useEffect(() => {
        t.features.has(_.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            !t.features.has(_.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            c.ZP.fetchVerificationForm(t.id);
    }, [t]);
    let v = n[a],
        b = a + 1 >= n.length && !E(t, x),
        O = n[0].required;
    l.useEffect(() => {
        g ||
            m.default.track(
                _.rMx.GUILD_ONBOARDING_STEP_VIEWED,
                N(y({}, (0, s.hH)(t.id)), {
                    step: 0,
                    required: O,
                }),
            );
    }, [t.id, O, g]);
    let C = (e) => {
            !g &&
                (m.default.track(
                    _.rMx.GUILD_ONBOARDING_STEP_COMPLETED,
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
                    m.default.track(
                        _.rMx.GUILD_ONBOARDING_STEP_VIEWED,
                        N(y({}, (0, s.hH)(t.id)), {
                            step: a,
                            required: n[a + 1].required,
                        }),
                    )),
                a + 1 < n.length ? p(a + 1) : E(t, x) && p("rules");
        },
        Z = (e) => {
            !g &&
                (m.default.track(
                    _.rMx.GUILD_ONBOARDING_STEP_COMPLETED,
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
                    m.default.track(
                        _.rMx.GUILD_ONBOARDING_STEP_VIEWED,
                        N(y({}, (0, s.hH)(t.id)), {
                            step: a - 1,
                            required: n[a - 1].required,
                        }),
                    )),
                p(Math.max(0, a - 1));
        };
    if (null == v) return null;
    switch (v.type) {
        case j.FN.MULTIPLE_CHOICE:
            return (0, r.jsx)(I, {
                guild: t,
                headerId: h,
                step: a,
                questionCount: n.length,
                currentPrompt: v,
                lastPrompt: b,
                selectOption: o,
                gotoPrevPrompt: Z,
                gotoNextPrompt: C,
                completeOnboarding: d,
            });
        case j.FN.DROPDOWN:
            return (0, r.jsx)(P, {
                guild: t,
                headerId: h,
                step: a,
                questionCount: n.length,
                currentPrompt: v,
                lastPrompt: b,
                selectOption: o,
                gotoPrevPrompt: Z,
                gotoNextPrompt: C,
                completeOnboarding: d,
            });
        default:
            (0, f.vE)(v.type);
    }
}
