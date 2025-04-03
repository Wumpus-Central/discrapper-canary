n.d(t, { Z: () => y });
var r = n(200651),
    l = n(192379),
    o = n(399606),
    s = n(481060),
    a = n(367907),
    i = n(863249),
    c = n(944163),
    u = n(14263),
    d = n(768762),
    m = n(626135),
    h = n(823379),
    x = n(45966),
    p = n(637853),
    f = n(968644),
    g = n(104265),
    j = n(588632),
    N = n(290511),
    v = n(981631),
    _ = n(388032),
    b = n(903864);
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function O(e, t) {
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
function E(e, t) {
    return (0, r.jsx)(
        'span',
        {
            className: b.helpTextItem,
            children: e
        },
        t
    );
}
function I(e, t) {
    return !(e.hasFeature(v.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) && e.hasFeature(v.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && null != t;
}
function k(e) {
    let { headerId: t, guild: n, step: l, lastPrompt: a, questionCount: i, currentPrompt: c, selectOption: m, gotoPrevPrompt: h, gotoNextPrompt: g, completeOnboarding: N } = e,
        v = (0, o.Wu)([x.Z], () => x.Z.getOnboardingResponsesForPrompt(n.id, c.id)),
        O = 0 === v.length && (null == c ? void 0 : c.required),
        I = null == c ? void 0 : c.options.filter((e) => v.includes(e.id)),
        k = (0, p.L6)(I),
        Z = (0, p.dX)(I),
        y = 0 === v.length,
        { helpText: P, helpTextAdditional: w } = (0, f.Z)({
            guild: n,
            prompt: c,
            selectedRoleIds: k,
            selectedChannelIds: Z,
            itemHook: E
        }),
        D = (0, u.Z)(n.id, 1000),
        T = c.options.map((e) => C({ value: e.id }, e)),
        R = c.options.filter((e) => v.includes(e.id)).map((e) => e.id);
    return (0, r.jsx)('div', {
        className: b.prompt,
        children: (0, r.jsxs)('div', {
            className: b.promptContent,
            children: [
                (0, r.jsxs)(s.zJl, {
                    className: b.scrollerContent,
                    children: [
                        (0, r.jsxs)('div', {
                            className: b.questionHeader,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-muted',
                                    children: _.NW.format(_.t.isV0NT, {
                                        currentQuestion: l + 1,
                                        questionCount: i
                                    })
                                }),
                                c.required
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(s.Text, {
                                                  variant: 'text-xs/normal',
                                                  className: b.headerSeparator,
                                                  children: '\xB7'
                                              }),
                                              (0, r.jsx)(s.Text, {
                                                  variant: 'text-sm/medium',
                                                  color: 'text-brand',
                                                  children: _.NW.string(_.t.Ur8Vrq)
                                              })
                                          ]
                                      })
                                    : null
                            ]
                        }),
                        (0, r.jsx)(s.X6q, {
                            className: b.title,
                            variant: 'heading-xl/semibold',
                            color: 'header-primary',
                            id: t,
                            children: c.title
                        }),
                        (0, r.jsx)(j.Z, {
                            options: T,
                            value: R,
                            onChange: (e) => {
                                let t = e.find((e) => !v.includes(e.id)),
                                    n = e.map((e) => e.id);
                                if (null != t) m(c.id, t.id, !0);
                                else {
                                    let e = v.filter((e) => !n.includes(e));
                                    c.options
                                        .filter((t) => e.includes(t.id))
                                        .forEach((e) => {
                                            m(c.id, e.id, !1);
                                        });
                                }
                            },
                            memberCounts: D
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
                                (0, r.jsxs)(s.zxk, {
                                    className: b.button,
                                    innerClassName: b.buttonInner,
                                    onClick: () => h(v.length),
                                    size: s.zxk.Sizes.MEDIUM,
                                    look: s.zxk.Looks.OUTLINED,
                                    grow: !1,
                                    color: s.zxk.Colors.PRIMARY,
                                    children: [
                                        (0, r.jsx)(d.Z, {
                                            className: b.arrow,
                                            direction: d.Z.Directions.LEFT
                                        }),
                                        _.NW.string(_.t['13/7kZ'])
                                    ]
                                })
                        }),
                        (0, r.jsxs)('div', {
                            className: b.rightButtons,
                            children: [
                                (0, r.jsxs)(s.Text, {
                                    className: b.helpText,
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: [P, ' ', w]
                                }),
                                (0, r.jsx)(s.ua7, {
                                    text: O ? _.NW.string(_.t.dA1dSU) : null,
                                    children: (e) => {
                                        let { onMouseEnter: t, onMouseLeave: n } = e;
                                        return (0, r.jsx)(s.zxk, {
                                            className: b.button,
                                            innerClassName: b.buttonInner,
                                            onMouseEnter: t,
                                            onMouseLeave: n,
                                            onClick: () => (a ? N() : g(v.length)),
                                            disabled: O,
                                            size: s.zxk.Sizes.MEDIUM,
                                            look: s.zxk.Looks.FILLED,
                                            grow: !1,
                                            color: y ? s.zxk.Colors.PRIMARY : s.zxk.Colors.BRAND,
                                            children: a
                                                ? (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          _.NW.string(_.t['8SuVoK']),
                                                          (0, r.jsx)('span', {
                                                              className: b.finishEmoji,
                                                              role: 'img',
                                                              'aria-hidden': !0,
                                                              children: '\uD83C\uDF89'
                                                          })
                                                      ]
                                                  })
                                                : (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          y ? _.NW.string(_.t['5WxrcX']) : _.NW.string(_.t.PDTjLC),
                                                          (0, r.jsx)(d.Z, {
                                                              className: b.arrow,
                                                              direction: d.Z.Directions.RIGHT
                                                          })
                                                      ]
                                                  })
                                        });
                                    }
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
    let { headerId: t, guild: n, step: l, lastPrompt: a, questionCount: i, currentPrompt: c, selectOption: u, gotoPrevPrompt: m, gotoNextPrompt: h, completeOnboarding: j } = e,
        N = (0, o.Wu)([x.Z], () => x.Z.getOnboardingResponsesForPrompt(n.id, c.id)),
        v = 0 === N.length && (null == c ? void 0 : c.required),
        C = null == c ? void 0 : c.options.filter((e) => N.includes(e.id)),
        O = (0, p.L6)(C),
        I = (0, p.dX)(C),
        k = 0 === N.length,
        { helpText: Z, helpTextAdditional: y } = (0, f.Z)({
            guild: n,
            prompt: c,
            selectedRoleIds: O,
            selectedChannelIds: I,
            itemHook: E
        });
    return (0, r.jsx)('div', {
        className: b.prompt,
        children: (0, r.jsxs)('div', {
            className: b.promptContent,
            children: [
                (0, r.jsxs)(s.zJl, {
                    className: b.scrollerContent,
                    children: [
                        (0, r.jsxs)('div', {
                            className: b.questionHeader,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-muted',
                                    children: _.NW.format(_.t.isV0NT, {
                                        currentQuestion: l + 1,
                                        questionCount: i
                                    })
                                }),
                                c.required
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(s.Text, {
                                                  variant: 'text-xs/normal',
                                                  className: b.headerSeparator,
                                                  children: '\xB7'
                                              }),
                                              (0, r.jsx)(s.Text, {
                                                  variant: 'text-sm/medium',
                                                  color: 'text-brand',
                                                  children: _.NW.string(_.t.Ur8Vrq)
                                              })
                                          ]
                                      })
                                    : null
                            ]
                        }),
                        (0, r.jsx)(s.X6q, {
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
                                    g.Z,
                                    {
                                        guildId: n.id,
                                        option: e,
                                        onSelect: (t) => u(c.id, e.id, null != t && t),
                                        selected: N.includes(e.id)
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
                                (0, r.jsxs)(s.zxk, {
                                    className: b.button,
                                    innerClassName: b.buttonInner,
                                    onClick: () => m(N.length),
                                    size: s.zxk.Sizes.MEDIUM,
                                    look: s.zxk.Looks.OUTLINED,
                                    grow: !1,
                                    color: s.zxk.Colors.PRIMARY,
                                    children: [
                                        (0, r.jsx)(d.Z, {
                                            className: b.arrow,
                                            direction: d.Z.Directions.LEFT
                                        }),
                                        _.NW.string(_.t['13/7kZ'])
                                    ]
                                })
                        }),
                        (0, r.jsxs)('div', {
                            className: b.rightButtons,
                            children: [
                                (0, r.jsxs)(s.Text, {
                                    className: b.helpText,
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: [Z, ' ', y]
                                }),
                                (0, r.jsx)(s.ua7, {
                                    text: v ? _.NW.string(_.t.dA1dSU) : null,
                                    children: (e) => {
                                        let { onMouseEnter: t, onMouseLeave: n } = e;
                                        return (0, r.jsx)(s.zxk, {
                                            className: b.button,
                                            innerClassName: b.buttonInner,
                                            onMouseEnter: t,
                                            onMouseLeave: n,
                                            onClick: () => (a ? j() : h(N.length)),
                                            disabled: v,
                                            size: s.zxk.Sizes.MEDIUM,
                                            look: s.zxk.Looks.FILLED,
                                            grow: !1,
                                            color: k ? s.zxk.Colors.PRIMARY : s.zxk.Colors.BRAND,
                                            children: a
                                                ? (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          _.NW.string(_.t['8SuVoK']),
                                                          (0, r.jsx)('span', {
                                                              className: b.finishEmoji,
                                                              role: 'img',
                                                              'aria-hidden': !0,
                                                              children: '\uD83C\uDF89'
                                                          })
                                                      ]
                                                  })
                                                : (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          k ? _.NW.string(_.t['5WxrcX']) : _.NW.string(_.t.PDTjLC),
                                                          (0, r.jsx)(d.Z, {
                                                              className: b.arrow,
                                                              direction: d.Z.Directions.RIGHT
                                                          })
                                                      ]
                                                  })
                                        });
                                    }
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
function y(e) {
    let { guild: t, prompts: n, step: s, selectOption: u, completeOnboarding: d, setCurrentStep: x, headerId: p, disableTracking: f } = e,
        g = (0, o.e7)([c.Z], () => c.Z.getRulesPrompt(t.id));
    l.useEffect(() => {
        t.hasFeature(v.oNc.MEMBER_VERIFICATION_GATE_ENABLED) && !t.hasFeature(v.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) && i.ZP.fetchVerificationForm(t.id);
    }, [t]);
    let j = n[s],
        _ = s + 1 >= n.length && !I(t, g),
        b = n[0].required;
    l.useEffect(() => {
        f ||
            m.default.track(
                v.rMx.GUILD_ONBOARDING_STEP_VIEWED,
                O(C({}, (0, a.hH)(t.id)), {
                    step: 0,
                    required: b
                })
            );
    }, [t.id, b, f]);
    let E = (e) => {
            !f &&
                (m.default.track(
                    v.rMx.GUILD_ONBOARDING_STEP_COMPLETED,
                    O(C({}, (0, a.hH)(t.id)), {
                        step: s,
                        options_selected: e,
                        skipped: 0 === e,
                        back: !1,
                        in_onboarding: !0,
                        is_final_step: !1
                    })
                ),
                s < n.length - 1 &&
                    m.default.track(
                        v.rMx.GUILD_ONBOARDING_STEP_VIEWED,
                        O(C({}, (0, a.hH)(t.id)), {
                            step: s,
                            required: n[s + 1].required
                        })
                    )),
                s + 1 < n.length ? x(s + 1) : I(t, g) && x('rules');
        },
        y = (e) => {
            !f &&
                (m.default.track(
                    v.rMx.GUILD_ONBOARDING_STEP_COMPLETED,
                    O(C({}, (0, a.hH)(t.id)), {
                        step: s,
                        skipped: !1,
                        back: !0,
                        options_selected: e,
                        in_onboarding: !0,
                        is_final_step: !1
                    })
                ),
                s > 0 &&
                    m.default.track(
                        v.rMx.GUILD_ONBOARDING_STEP_VIEWED,
                        O(C({}, (0, a.hH)(t.id)), {
                            step: s - 1,
                            required: n[s - 1].required
                        })
                    )),
                x(Math.max(0, s - 1));
        };
    if (null == j) return null;
    switch (j.type) {
        case N.FN.MULTIPLE_CHOICE:
            return (0, r.jsx)(Z, {
                guild: t,
                headerId: p,
                step: s,
                questionCount: n.length,
                currentPrompt: j,
                lastPrompt: _,
                selectOption: u,
                gotoPrevPrompt: y,
                gotoNextPrompt: E,
                completeOnboarding: d
            });
        case N.FN.DROPDOWN:
            return (0, r.jsx)(k, {
                guild: t,
                headerId: p,
                step: s,
                questionCount: n.length,
                currentPrompt: j,
                lastPrompt: _,
                selectOption: u,
                gotoPrevPrompt: y,
                gotoNextPrompt: E,
                completeOnboarding: d
            });
        default:
            (0, h.vE)(j.type);
    }
}
