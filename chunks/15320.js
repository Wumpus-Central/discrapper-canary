n.d(t, { Z: () => Z });
var r = n(951288),
    i = n(647438),
    l = n(399606),
    o = n(28664),
    s = n(481060),
    a = n(367907),
    c = n(863249),
    d = n(944163),
    u = n(14263),
    m = n(626135),
    p = n(823379),
    f = n(45966),
    g = n(637853),
    h = n(968644),
    x = n(104265),
    v = n(588632),
    _ = n(290511),
    j = n(981631),
    b = n(388032),
    O = n(802179);
function N(e) {
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
function P(e, t) {
    return (0, r.jsx)(
        "span",
        {
            className: O.helpTextItem,
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
            lastPrompt: a,
            questionCount: c,
            currentPrompt: d,
            hasConnections: m,
            selectOption: p,
            gotoPrevPrompt: x,
            gotoNextPrompt: _,
            completeOnboarding: j,
        } = e,
        y = (0, l.Wu)([f.Z], () => f.Z.getOnboardingResponsesForPrompt(n.id, d.id)),
        C = 0 === y.length && (null == d ? void 0 : d.required),
        E = null == d ? void 0 : d.options.filter((e) => y.includes(e.id)),
        Z = (0, g.L6)(E),
        D = (0, g.dX)(E),
        I = 0 === y.length,
        { helpText: T, helpTextAdditional: S } = (0, h.Z)({
            guild: n,
            prompt: d,
            selectedRoleIds: Z,
            selectedChannelIds: D,
            itemHook: P,
        }),
        w = (0, u.Z)(n.id, 1000),
        k = d.options.map((e) => N({ value: e.id }, e)),
        A = d.options.filter((e) => y.includes(e.id)).map((e) => e.id);
    return (0, r.jsx)("div", {
        className: O.prompt,
        children: (0, r.jsxs)("div", {
            className: O.promptContent,
            children: [
                (0, r.jsxs)(s.zJl, {
                    className: O.scrollerContent,
                    children: [
                        (0, r.jsxs)("div", {
                            className: O.questionHeader,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: b.intl.format(b.t.isV0NW, {
                                        currentQuestion: i + 1,
                                        questionCount: c,
                                    }),
                                }),
                                d.required
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(s.Text, {
                                                  variant: "text-xs/normal",
                                                  className: O.headerSeparator,
                                                  children: "\xB7",
                                              }),
                                              (0, r.jsx)(s.Text, {
                                                  variant: "text-sm/medium",
                                                  color: "text-brand",
                                                  children: b.intl.string(b.t.Ur8Vrt),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        (0, r.jsx)(s.Heading, {
                            className: O.title,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            id: t,
                            children: d.title,
                        }),
                        (0, r.jsx)(v.Z, {
                            options: k,
                            value: A,
                            onChange: (e) => {
                                let t = e.find((e) => !y.includes(e.id)),
                                    n = e.map((e) => e.id);
                                if (null != t) p(d.id, t.id, !0);
                                else {
                                    let e = y.filter((e) => !n.includes(e));
                                    d.options
                                        .filter((t) => e.includes(t.id))
                                        .forEach((e) => {
                                            p(d.id, e.id, !1);
                                        });
                                }
                            },
                            memberCounts: w,
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: O.navButtons,
                    children: [
                        (0, r.jsx)("div", {
                            className: O.leftButtons,
                            children:
                                (i > 0 || m) &&
                                (0, r.jsx)(s.Button, {
                                    variant: "secondary",
                                    size: "md",
                                    text: b.intl.string(b.t["13/7kX"]),
                                    onClick: () => x(y.length),
                                    icon: s.j9r,
                                    iconPosition: "start",
                                }),
                        }),
                        (0, r.jsxs)("div", {
                            className: O.rightButtons,
                            children: [
                                (0, r.jsxs)(s.Text, {
                                    className: O.helpText,
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [T, " ", S],
                                }),
                                (0, r.jsx)(o.u, {
                                    asContainer: !0,
                                    text: C ? b.intl.string(b.t.dA1dSf) : null,
                                    children: (0, r.jsx)(s.Button, {
                                        variant: I ? "secondary" : "primary",
                                        size: "md",
                                        text: a
                                            ? "".concat(b.intl.string(b.t["8SuVoE"]), " \uD83C\uDF89")
                                            : I
                                              ? b.intl.string(b.t["5Wxrcd"])
                                              : b.intl.string(b.t.PDTjLN),
                                        onClick: () => (a ? j() : _(y.length)),
                                        disabled: C,
                                        icon: a ? void 0 : s.d4D,
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
            lastPrompt: a,
            questionCount: c,
            currentPrompt: d,
            hasConnections: u,
            selectOption: m,
            gotoPrevPrompt: p,
            gotoNextPrompt: v,
            completeOnboarding: _,
        } = e,
        j = (0, l.Wu)([f.Z], () => f.Z.getOnboardingResponsesForPrompt(n.id, d.id)),
        N = 0 === j.length && (null == d ? void 0 : d.required),
        y = null == d ? void 0 : d.options.filter((e) => j.includes(e.id)),
        C = (0, g.L6)(y),
        E = (0, g.dX)(y),
        Z = 0 === j.length,
        { helpText: D, helpTextAdditional: I } = (0, h.Z)({
            guild: n,
            prompt: d,
            selectedRoleIds: C,
            selectedChannelIds: E,
            itemHook: P,
        });
    return (0, r.jsx)("div", {
        className: O.prompt,
        children: (0, r.jsxs)("div", {
            className: O.promptContent,
            children: [
                (0, r.jsxs)(s.zJl, {
                    className: O.scrollerContent,
                    children: [
                        (0, r.jsxs)("div", {
                            className: O.questionHeader,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: b.intl.format(b.t.isV0NW, {
                                        currentQuestion: i + 1,
                                        questionCount: c,
                                    }),
                                }),
                                d.required
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(s.Text, {
                                                  variant: "text-xs/normal",
                                                  className: O.headerSeparator,
                                                  children: "\xB7",
                                              }),
                                              (0, r.jsx)(s.Text, {
                                                  variant: "text-sm/medium",
                                                  color: "text-brand",
                                                  children: b.intl.string(b.t.Ur8Vrt),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        (0, r.jsx)(s.Heading, {
                            className: O.title,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            id: t,
                            children: d.title,
                        }),
                        (0, r.jsx)("div", {
                            className: O.promptOptions,
                            children: d.options.map((e) =>
                                (0, r.jsx)(
                                    x.Z,
                                    {
                                        guildId: n.id,
                                        option: e,
                                        onSelect: (t) => m(d.id, e.id, null != t && t),
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
                                (i > 0 || u) &&
                                (0, r.jsx)(s.Button, {
                                    variant: "secondary",
                                    size: "md",
                                    text: b.intl.string(b.t["13/7kX"]),
                                    onClick: () => p(j.length),
                                    icon: s.j9r,
                                    iconPosition: "start",
                                }),
                        }),
                        (0, r.jsxs)("div", {
                            className: O.rightButtons,
                            children: [
                                (0, r.jsxs)(s.Text, {
                                    className: O.helpText,
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [D, " ", I],
                                }),
                                (0, r.jsx)(o.u, {
                                    asContainer: !0,
                                    text: N ? b.intl.string(b.t.dA1dSf) : null,
                                    children: (0, r.jsx)(s.Button, {
                                        variant: Z ? "secondary" : "primary",
                                        size: "md",
                                        text: a
                                            ? "".concat(b.intl.string(b.t["8SuVoE"]), " \uD83C\uDF89")
                                            : Z
                                              ? b.intl.string(b.t["5Wxrcd"])
                                              : b.intl.string(b.t.PDTjLN),
                                        onClick: () => (a ? _() : v(j.length)),
                                        disabled: N,
                                        icon: a ? void 0 : s.d4D,
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
            step: o,
            selectOption: s,
            completeOnboarding: u,
            setCurrentStep: h,
            headerId: x,
            disableTracking: v,
        } = e,
        b = (0, l.e7)([d.Z], () => d.Z.getRulesPrompt(t.id)),
        O = (0, l.e7)([f.Z], () => f.Z.getConnections(t.id));
    i.useEffect(() => {
        t.features.has(j.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            !t.features.has(j.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            c.ZP.fetchVerificationForm(t.id);
    }, [t]);
    let P = n[o],
        Z = o + 1 >= n.length && !(0, g.O5)(t, b),
        D = n[0].required;
    i.useEffect(() => {
        v ||
            m.default.track(
                j.rMx.GUILD_ONBOARDING_STEP_VIEWED,
                y(N({}, (0, a.hH)(t.id)), {
                    step: 0,
                    required: D,
                }),
            );
    }, [t.id, D, v]);
    let I = (e) => {
            !v &&
                (m.default.track(
                    j.rMx.GUILD_ONBOARDING_STEP_COMPLETED,
                    y(N({}, (0, a.hH)(t.id)), {
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
                        j.rMx.GUILD_ONBOARDING_STEP_VIEWED,
                        y(N({}, (0, a.hH)(t.id)), {
                            step: o,
                            required: n[o + 1].required,
                        }),
                    )),
                o + 1 < n.length ? h(o + 1) : (0, g.O5)(t, b) && h("rules");
        },
        T = (e) => {
            !v &&
                (m.default.track(
                    j.rMx.GUILD_ONBOARDING_STEP_COMPLETED,
                    y(N({}, (0, a.hH)(t.id)), {
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
                        j.rMx.GUILD_ONBOARDING_STEP_VIEWED,
                        y(N({}, (0, a.hH)(t.id)), {
                            step: o - 1,
                            required: n[o - 1].required,
                        }),
                    )),
                0 === o && O.length > 0 ? h("connections") : h(Math.max(0, o - 1));
        };
    if (null == P) return null;
    switch (P.type) {
        case _.FN.MULTIPLE_CHOICE:
            return (0, r.jsx)(E, {
                guild: t,
                headerId: x,
                step: o,
                questionCount: n.length,
                currentPrompt: P,
                lastPrompt: Z,
                hasConnections: O.length > 0,
                selectOption: s,
                gotoPrevPrompt: T,
                gotoNextPrompt: I,
                completeOnboarding: u,
            });
        case _.FN.DROPDOWN:
            return (0, r.jsx)(C, {
                guild: t,
                headerId: x,
                step: o,
                questionCount: n.length,
                currentPrompt: P,
                lastPrompt: Z,
                hasConnections: O.length > 0,
                selectOption: s,
                gotoPrevPrompt: T,
                gotoNextPrompt: I,
                completeOnboarding: u,
            });
        default:
            (0, p.vE)(P.type);
    }
}
