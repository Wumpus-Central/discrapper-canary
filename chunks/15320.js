n.d(t, { Z: () => y });
var r = n(200651),
    l = n(192379),
    i = n(399606),
    o = n(481060),
    s = n(367907),
    a = n(863249),
    c = n(944163),
    u = n(14263),
    d = n(768762),
    m = n(626135),
    f = n(823379),
    h = n(45966),
    p = n(637853),
    x = n(968644),
    g = n(104265),
    j = n(588632),
    v = n(290511),
    _ = n(981631),
    b = n(388032),
    N = n(903864);
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
            className: N.helpTextItem,
            children: e
        },
        t
    );
}
function I(e, t) {
    return !(e.hasFeature(_.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) && e.hasFeature(_.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && null != t;
}
function k(e) {
    let { headerId: t, guild: n, step: l, lastPrompt: s, questionCount: a, currentPrompt: c, selectOption: m, gotoPrevPrompt: f, gotoNextPrompt: g, completeOnboarding: v } = e,
        _ = (0, i.Wu)([h.Z], () => h.Z.getOnboardingResponsesForPrompt(n.id, c.id)),
        O = 0 === _.length && (null == c ? void 0 : c.required),
        I = null == c ? void 0 : c.options.filter((e) => _.includes(e.id)),
        k = (0, p.L6)(I),
        Z = (0, p.dX)(I),
        y = 0 === _.length,
        { helpText: P, helpTextAdditional: w } = (0, x.Z)({
            guild: n,
            prompt: c,
            selectedRoleIds: k,
            selectedChannelIds: Z,
            itemHook: E
        }),
        D = (0, u.Z)(n.id, 1000),
        T = c.options.map((e) => C({ value: e.id }, e)),
        R = c.options.filter((e) => _.includes(e.id)).map((e) => e.id);
    return (0, r.jsx)('div', {
        className: N.prompt,
        children: (0, r.jsxs)('div', {
            className: N.promptContent,
            children: [
                (0, r.jsxs)(o.zJl, {
                    className: N.scrollerContent,
                    children: [
                        (0, r.jsxs)('div', {
                            className: N.questionHeader,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-muted',
                                    children: b.intl.format(b.t.isV0NT, {
                                        currentQuestion: l + 1,
                                        questionCount: a
                                    })
                                }),
                                c.required
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(o.Text, {
                                                  variant: 'text-xs/normal',
                                                  className: N.headerSeparator,
                                                  children: '\xB7'
                                              }),
                                              (0, r.jsx)(o.Text, {
                                                  variant: 'text-sm/medium',
                                                  color: 'text-brand',
                                                  children: b.intl.string(b.t.Ur8Vrq)
                                              })
                                          ]
                                      })
                                    : null
                            ]
                        }),
                        (0, r.jsx)(o.X6q, {
                            className: N.title,
                            variant: 'heading-xl/semibold',
                            color: 'header-primary',
                            id: t,
                            children: c.title
                        }),
                        (0, r.jsx)(j.Z, {
                            options: T,
                            value: R,
                            onChange: (e) => {
                                let t = e.find((e) => !_.includes(e.id)),
                                    n = e.map((e) => e.id);
                                if (null != t) m(c.id, t.id, !0);
                                else {
                                    let e = _.filter((e) => !n.includes(e));
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
                    className: N.navButtons,
                    children: [
                        (0, r.jsx)('div', {
                            className: N.leftButtons,
                            children:
                                l > 0 &&
                                (0, r.jsxs)(o.zxk, {
                                    className: N.button,
                                    innerClassName: N.buttonInner,
                                    onClick: () => f(_.length),
                                    size: o.zxk.Sizes.MEDIUM,
                                    look: o.zxk.Looks.OUTLINED,
                                    grow: !1,
                                    color: o.zxk.Colors.PRIMARY,
                                    children: [
                                        (0, r.jsx)(d.Z, {
                                            className: N.arrow,
                                            direction: d.Z.Directions.LEFT
                                        }),
                                        b.intl.string(b.t['13/7kZ'])
                                    ]
                                })
                        }),
                        (0, r.jsxs)('div', {
                            className: N.rightButtons,
                            children: [
                                (0, r.jsxs)(o.Text, {
                                    className: N.helpText,
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: [P, ' ', w]
                                }),
                                (0, r.jsx)(o.ua7, {
                                    text: O ? b.intl.string(b.t.dA1dSU) : null,
                                    children: (e) => {
                                        let { onMouseEnter: t, onMouseLeave: n } = e;
                                        return (0, r.jsx)(o.zxk, {
                                            className: N.button,
                                            innerClassName: N.buttonInner,
                                            onMouseEnter: t,
                                            onMouseLeave: n,
                                            onClick: () => (s ? v() : g(_.length)),
                                            disabled: O,
                                            size: o.zxk.Sizes.MEDIUM,
                                            look: o.zxk.Looks.FILLED,
                                            grow: !1,
                                            color: y ? o.zxk.Colors.PRIMARY : o.zxk.Colors.BRAND,
                                            children: s
                                                ? (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          b.intl.string(b.t['8SuVoK']),
                                                          (0, r.jsx)('span', {
                                                              className: N.finishEmoji,
                                                              role: 'img',
                                                              'aria-hidden': !0,
                                                              children: '\uD83C\uDF89'
                                                          })
                                                      ]
                                                  })
                                                : (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          y ? b.intl.string(b.t['5WxrcX']) : b.intl.string(b.t.PDTjLC),
                                                          (0, r.jsx)(d.Z, {
                                                              className: N.arrow,
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
    let { headerId: t, guild: n, step: l, lastPrompt: s, questionCount: a, currentPrompt: c, selectOption: u, gotoPrevPrompt: m, gotoNextPrompt: f, completeOnboarding: j } = e,
        v = (0, i.Wu)([h.Z], () => h.Z.getOnboardingResponsesForPrompt(n.id, c.id)),
        _ = 0 === v.length && (null == c ? void 0 : c.required),
        C = null == c ? void 0 : c.options.filter((e) => v.includes(e.id)),
        O = (0, p.L6)(C),
        I = (0, p.dX)(C),
        k = 0 === v.length,
        { helpText: Z, helpTextAdditional: y } = (0, x.Z)({
            guild: n,
            prompt: c,
            selectedRoleIds: O,
            selectedChannelIds: I,
            itemHook: E
        });
    return (0, r.jsx)('div', {
        className: N.prompt,
        children: (0, r.jsxs)('div', {
            className: N.promptContent,
            children: [
                (0, r.jsxs)(o.zJl, {
                    className: N.scrollerContent,
                    children: [
                        (0, r.jsxs)('div', {
                            className: N.questionHeader,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-muted',
                                    children: b.intl.format(b.t.isV0NT, {
                                        currentQuestion: l + 1,
                                        questionCount: a
                                    })
                                }),
                                c.required
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(o.Text, {
                                                  variant: 'text-xs/normal',
                                                  className: N.headerSeparator,
                                                  children: '\xB7'
                                              }),
                                              (0, r.jsx)(o.Text, {
                                                  variant: 'text-sm/medium',
                                                  color: 'text-brand',
                                                  children: b.intl.string(b.t.Ur8Vrq)
                                              })
                                          ]
                                      })
                                    : null
                            ]
                        }),
                        (0, r.jsx)(o.X6q, {
                            className: N.title,
                            variant: 'heading-xl/semibold',
                            color: 'header-primary',
                            id: t,
                            children: c.title
                        }),
                        (0, r.jsx)('div', {
                            className: N.promptOptions,
                            children: c.options.map((e) =>
                                (0, r.jsx)(
                                    g.Z,
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
                    className: N.navButtons,
                    children: [
                        (0, r.jsx)('div', {
                            className: N.leftButtons,
                            children:
                                l > 0 &&
                                (0, r.jsxs)(o.zxk, {
                                    className: N.button,
                                    innerClassName: N.buttonInner,
                                    onClick: () => m(v.length),
                                    size: o.zxk.Sizes.MEDIUM,
                                    look: o.zxk.Looks.OUTLINED,
                                    grow: !1,
                                    color: o.zxk.Colors.PRIMARY,
                                    children: [
                                        (0, r.jsx)(d.Z, {
                                            className: N.arrow,
                                            direction: d.Z.Directions.LEFT
                                        }),
                                        b.intl.string(b.t['13/7kZ'])
                                    ]
                                })
                        }),
                        (0, r.jsxs)('div', {
                            className: N.rightButtons,
                            children: [
                                (0, r.jsxs)(o.Text, {
                                    className: N.helpText,
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: [Z, ' ', y]
                                }),
                                (0, r.jsx)(o.ua7, {
                                    text: _ ? b.intl.string(b.t.dA1dSU) : null,
                                    children: (e) => {
                                        let { onMouseEnter: t, onMouseLeave: n } = e;
                                        return (0, r.jsx)(o.zxk, {
                                            className: N.button,
                                            innerClassName: N.buttonInner,
                                            onMouseEnter: t,
                                            onMouseLeave: n,
                                            onClick: () => (s ? j() : f(v.length)),
                                            disabled: _,
                                            size: o.zxk.Sizes.MEDIUM,
                                            look: o.zxk.Looks.FILLED,
                                            grow: !1,
                                            color: k ? o.zxk.Colors.PRIMARY : o.zxk.Colors.BRAND,
                                            children: s
                                                ? (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          b.intl.string(b.t['8SuVoK']),
                                                          (0, r.jsx)('span', {
                                                              className: N.finishEmoji,
                                                              role: 'img',
                                                              'aria-hidden': !0,
                                                              children: '\uD83C\uDF89'
                                                          })
                                                      ]
                                                  })
                                                : (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          k ? b.intl.string(b.t['5WxrcX']) : b.intl.string(b.t.PDTjLC),
                                                          (0, r.jsx)(d.Z, {
                                                              className: N.arrow,
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
    let { guild: t, prompts: n, step: o, selectOption: u, completeOnboarding: d, setCurrentStep: h, headerId: p, disableTracking: x } = e,
        g = (0, i.e7)([c.Z], () => c.Z.getRulesPrompt(t.id));
    l.useEffect(() => {
        t.hasFeature(_.oNc.MEMBER_VERIFICATION_GATE_ENABLED) && !t.hasFeature(_.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) && a.ZP.fetchVerificationForm(t.id);
    }, [t]);
    let j = n[o],
        b = o + 1 >= n.length && !I(t, g),
        N = n[0].required;
    l.useEffect(() => {
        x ||
            m.default.track(
                _.rMx.GUILD_ONBOARDING_STEP_VIEWED,
                O(C({}, (0, s.hH)(t.id)), {
                    step: 0,
                    required: N
                })
            );
    }, [t.id, N, x]);
    let E = (e) => {
            !x &&
                (m.default.track(
                    _.rMx.GUILD_ONBOARDING_STEP_COMPLETED,
                    O(C({}, (0, s.hH)(t.id)), {
                        step: o,
                        options_selected: e,
                        skipped: 0 === e,
                        back: !1,
                        in_onboarding: !0,
                        is_final_step: !1
                    })
                ),
                o < n.length - 1 &&
                    m.default.track(
                        _.rMx.GUILD_ONBOARDING_STEP_VIEWED,
                        O(C({}, (0, s.hH)(t.id)), {
                            step: o,
                            required: n[o + 1].required
                        })
                    )),
                o + 1 < n.length ? h(o + 1) : I(t, g) && h('rules');
        },
        y = (e) => {
            !x &&
                (m.default.track(
                    _.rMx.GUILD_ONBOARDING_STEP_COMPLETED,
                    O(C({}, (0, s.hH)(t.id)), {
                        step: o,
                        skipped: !1,
                        back: !0,
                        options_selected: e,
                        in_onboarding: !0,
                        is_final_step: !1
                    })
                ),
                o > 0 &&
                    m.default.track(
                        _.rMx.GUILD_ONBOARDING_STEP_VIEWED,
                        O(C({}, (0, s.hH)(t.id)), {
                            step: o - 1,
                            required: n[o - 1].required
                        })
                    )),
                h(Math.max(0, o - 1));
        };
    if (null == j) return null;
    switch (j.type) {
        case v.FN.MULTIPLE_CHOICE:
            return (0, r.jsx)(Z, {
                guild: t,
                headerId: p,
                step: o,
                questionCount: n.length,
                currentPrompt: j,
                lastPrompt: b,
                selectOption: u,
                gotoPrevPrompt: y,
                gotoNextPrompt: E,
                completeOnboarding: d
            });
        case v.FN.DROPDOWN:
            return (0, r.jsx)(k, {
                guild: t,
                headerId: p,
                step: o,
                questionCount: n.length,
                currentPrompt: j,
                lastPrompt: b,
                selectOption: u,
                gotoPrevPrompt: y,
                gotoNextPrompt: E,
                completeOnboarding: d
            });
        default:
            (0, f.vE)(j.type);
    }
}
