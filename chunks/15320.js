n.d(t, { Z: () => Z });
var r = n(255367),
    l = n(73800),
    i = n(399606),
    o = n(481060),
    a = n(367907),
    s = n(863249),
    c = n(944163),
    u = n(14263),
    d = n(626135),
    m = n(823379),
    f = n(45966),
    p = n(637853),
    h = n(968644),
    x = n(104265),
    g = n(588632),
    v = n(290511),
    j = n(981631),
    _ = n(388032),
    b = n(903864);
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function C(e, t) {
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
function y(e, t) {
    return (0, r.jsx)(
        'span',
        {
            className: b.helpTextItem,
            children: e
        },
        t
    );
}
function N(e, t) {
    return !(e.features.has(j.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) && e.features.has(j.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && null != t;
}
function E(e) {
    let { headerId: t, guild: n, step: l, lastPrompt: a, questionCount: s, currentPrompt: c, selectOption: d, gotoPrevPrompt: m, gotoNextPrompt: x, completeOnboarding: v } = e,
        j = (0, i.Wu)([f.Z], () => f.Z.getOnboardingResponsesForPrompt(n.id, c.id)),
        C = 0 === j.length && (null == c ? void 0 : c.required),
        N = null == c ? void 0 : c.options.filter((e) => j.includes(e.id)),
        E = (0, p.L6)(N),
        P = (0, p.dX)(N),
        Z = 0 === j.length,
        { helpText: I, helpTextAdditional: T } = (0, h.Z)({
            guild: n,
            prompt: c,
            selectedRoleIds: E,
            selectedChannelIds: P,
            itemHook: y
        }),
        w = (0, u.Z)(n.id, 1000),
        k = c.options.map((e) => O({ value: e.id }, e)),
        D = c.options.filter((e) => j.includes(e.id)).map((e) => e.id);
    return (0, r.jsx)('div', {
        className: b.prompt,
        children: (0, r.jsxs)('div', {
            className: b.promptContent,
            children: [
                (0, r.jsxs)(o.zJl, {
                    className: b.scrollerContent,
                    children: [
                        (0, r.jsxs)('div', {
                            className: b.questionHeader,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-muted',
                                    children: _.intl.format(_.t.isV0NT, {
                                        currentQuestion: l + 1,
                                        questionCount: s
                                    })
                                }),
                                c.required
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(o.Text, {
                                                  variant: 'text-xs/normal',
                                                  className: b.headerSeparator,
                                                  children: '\xB7'
                                              }),
                                              (0, r.jsx)(o.Text, {
                                                  variant: 'text-sm/medium',
                                                  color: 'text-brand',
                                                  children: _.intl.string(_.t.Ur8Vrq)
                                              })
                                          ]
                                      })
                                    : null
                            ]
                        }),
                        (0, r.jsx)(o.X6q, {
                            className: b.title,
                            variant: 'heading-xl/semibold',
                            color: 'header-primary',
                            id: t,
                            children: c.title
                        }),
                        (0, r.jsx)(g.Z, {
                            options: k,
                            value: D,
                            onChange: (e) => {
                                let t = e.find((e) => !j.includes(e.id)),
                                    n = e.map((e) => e.id);
                                if (null != t) d(c.id, t.id, !0);
                                else {
                                    let e = j.filter((e) => !n.includes(e));
                                    c.options
                                        .filter((t) => e.includes(t.id))
                                        .forEach((e) => {
                                            d(c.id, e.id, !1);
                                        });
                                }
                            },
                            memberCounts: w
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: b.navButtons,
                    children: [
                        (0, r.jsx)('div', {
                            className: b.leftButtons,
                            children:
                                l > 0 &&
                                (0, r.jsx)(o.zxk, {
                                    variant: 'secondary',
                                    size: 'md',
                                    text: _.intl.string(_.t['13/7kZ']),
                                    onClick: () => m(j.length),
                                    icon: o.j9r,
                                    iconPosition: 'start'
                                })
                        }),
                        (0, r.jsxs)('div', {
                            className: b.rightButtons,
                            children: [
                                (0, r.jsxs)(o.Text, {
                                    className: b.helpText,
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: [I, ' ', T]
                                }),
                                (0, r.jsx)(o.DY3, {
                                    text: C ? _.intl.string(_.t.dA1dSU) : null,
                                    children: (0, r.jsx)(o.zxk, {
                                        variant: Z ? 'secondary' : 'primary',
                                        size: 'md',
                                        text: a ? ''.concat(_.intl.string(_.t['8SuVoK']), ' \uD83C\uDF89') : Z ? _.intl.string(_.t['5WxrcX']) : _.intl.string(_.t.PDTjLC),
                                        onClick: () => (a ? v() : x(j.length)),
                                        disabled: C,
                                        icon: a ? void 0 : o.d4D,
                                        iconPosition: 'end'
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
function P(e) {
    let { headerId: t, guild: n, step: l, lastPrompt: a, questionCount: s, currentPrompt: c, selectOption: u, gotoPrevPrompt: d, gotoNextPrompt: m, completeOnboarding: g } = e,
        v = (0, i.Wu)([f.Z], () => f.Z.getOnboardingResponsesForPrompt(n.id, c.id)),
        j = 0 === v.length && (null == c ? void 0 : c.required),
        O = null == c ? void 0 : c.options.filter((e) => v.includes(e.id)),
        C = (0, p.L6)(O),
        N = (0, p.dX)(O),
        E = 0 === v.length,
        { helpText: P, helpTextAdditional: Z } = (0, h.Z)({
            guild: n,
            prompt: c,
            selectedRoleIds: C,
            selectedChannelIds: N,
            itemHook: y
        });
    return (0, r.jsx)('div', {
        className: b.prompt,
        children: (0, r.jsxs)('div', {
            className: b.promptContent,
            children: [
                (0, r.jsxs)(o.zJl, {
                    className: b.scrollerContent,
                    children: [
                        (0, r.jsxs)('div', {
                            className: b.questionHeader,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-muted',
                                    children: _.intl.format(_.t.isV0NT, {
                                        currentQuestion: l + 1,
                                        questionCount: s
                                    })
                                }),
                                c.required
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(o.Text, {
                                                  variant: 'text-xs/normal',
                                                  className: b.headerSeparator,
                                                  children: '\xB7'
                                              }),
                                              (0, r.jsx)(o.Text, {
                                                  variant: 'text-sm/medium',
                                                  color: 'text-brand',
                                                  children: _.intl.string(_.t.Ur8Vrq)
                                              })
                                          ]
                                      })
                                    : null
                            ]
                        }),
                        (0, r.jsx)(o.X6q, {
                            className: b.title,
                            variant: 'heading-xl/semibold',
                            color: 'header-primary',
                            id: t,
                            children: c.title
                        }),
                        (0, r.jsx)('div', {
                            className: b.promptOptions,
                            children: c.options.map((e) =>
                                (0, r.jsx)(
                                    x.Z,
                                    {
                                        guildId: n.id,
                                        option: e,
                                        onSelect: (t) => u(c.id, e.id, null != t && t),
                                        selected: v.includes(e.id)
                                    },
                                    e.id
                                )
                            )
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: b.navButtons,
                    children: [
                        (0, r.jsx)('div', {
                            className: b.leftButtons,
                            children:
                                l > 0 &&
                                (0, r.jsx)(o.zxk, {
                                    variant: 'secondary',
                                    size: 'md',
                                    text: _.intl.string(_.t['13/7kZ']),
                                    onClick: () => d(v.length),
                                    icon: o.j9r,
                                    iconPosition: 'start'
                                })
                        }),
                        (0, r.jsxs)('div', {
                            className: b.rightButtons,
                            children: [
                                (0, r.jsxs)(o.Text, {
                                    className: b.helpText,
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: [P, ' ', Z]
                                }),
                                (0, r.jsx)(o.DY3, {
                                    text: j ? _.intl.string(_.t.dA1dSU) : null,
                                    children: (0, r.jsx)(o.zxk, {
                                        variant: E ? 'secondary' : 'primary',
                                        size: 'md',
                                        text: a ? ''.concat(_.intl.string(_.t['8SuVoK']), ' \uD83C\uDF89') : E ? _.intl.string(_.t['5WxrcX']) : _.intl.string(_.t.PDTjLC),
                                        onClick: () => (a ? g() : m(v.length)),
                                        disabled: j,
                                        icon: a ? void 0 : o.d4D,
                                        iconPosition: 'end'
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
function Z(e) {
    let { guild: t, prompts: n, step: o, selectOption: u, completeOnboarding: f, setCurrentStep: p, headerId: h, disableTracking: x } = e,
        g = (0, i.e7)([c.Z], () => c.Z.getRulesPrompt(t.id));
    l.useEffect(() => {
        t.features.has(j.oNc.MEMBER_VERIFICATION_GATE_ENABLED) && !t.features.has(j.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) && s.ZP.fetchVerificationForm(t.id);
    }, [t]);
    let _ = n[o],
        b = o + 1 >= n.length && !N(t, g),
        y = n[0].required;
    l.useEffect(() => {
        x ||
            d.default.track(
                j.rMx.GUILD_ONBOARDING_STEP_VIEWED,
                C(O({}, (0, a.hH)(t.id)), {
                    step: 0,
                    required: y
                })
            );
    }, [t.id, y, x]);
    let Z = (e) => {
            (!x &&
                (d.default.track(
                    j.rMx.GUILD_ONBOARDING_STEP_COMPLETED,
                    C(O({}, (0, a.hH)(t.id)), {
                        step: o,
                        options_selected: e,
                        skipped: 0 === e,
                        back: !1,
                        in_onboarding: !0,
                        is_final_step: !1
                    })
                ),
                o < n.length - 1 &&
                    d.default.track(
                        j.rMx.GUILD_ONBOARDING_STEP_VIEWED,
                        C(O({}, (0, a.hH)(t.id)), {
                            step: o,
                            required: n[o + 1].required
                        })
                    )),
                o + 1 < n.length ? p(o + 1) : N(t, g) && p('rules'));
        },
        I = (e) => {
            (!x &&
                (d.default.track(
                    j.rMx.GUILD_ONBOARDING_STEP_COMPLETED,
                    C(O({}, (0, a.hH)(t.id)), {
                        step: o,
                        skipped: !1,
                        back: !0,
                        options_selected: e,
                        in_onboarding: !0,
                        is_final_step: !1
                    })
                ),
                o > 0 &&
                    d.default.track(
                        j.rMx.GUILD_ONBOARDING_STEP_VIEWED,
                        C(O({}, (0, a.hH)(t.id)), {
                            step: o - 1,
                            required: n[o - 1].required
                        })
                    )),
                p(Math.max(0, o - 1)));
        };
    if (null == _) return null;
    switch (_.type) {
        case v.FN.MULTIPLE_CHOICE:
            return (0, r.jsx)(P, {
                guild: t,
                headerId: h,
                step: o,
                questionCount: n.length,
                currentPrompt: _,
                lastPrompt: b,
                selectOption: u,
                gotoPrevPrompt: I,
                gotoNextPrompt: Z,
                completeOnboarding: f
            });
        case v.FN.DROPDOWN:
            return (0, r.jsx)(E, {
                guild: t,
                headerId: h,
                step: o,
                questionCount: n.length,
                currentPrompt: _,
                lastPrompt: b,
                selectOption: u,
                gotoPrevPrompt: I,
                gotoNextPrompt: Z,
                completeOnboarding: f
            });
        default:
            (0, m.vE)(_.type);
    }
}
