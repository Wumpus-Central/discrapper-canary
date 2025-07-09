n.d(t, { Z: () => w });
var r = n(255367),
    l = n(73800),
    o = n(399606),
    i = n(755721),
    s = n(481060),
    a = n(367907),
    c = n(863249),
    u = n(944163),
    d = n(14263),
    m = n(768762),
    f = n(626135),
    h = n(823379),
    p = n(45966),
    x = n(637853),
    g = n(968644),
    j = n(104265),
    v = n(588632),
    _ = n(290511),
    b = n(981631),
    N = n(388032),
    C = n(903864);
function E(e) {
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
function I(e, t) {
    return (0, r.jsx)(
        'span',
        {
            className: C.helpTextItem,
            children: e
        },
        t
    );
}
function Z(e, t) {
    return !(e.features.has(b.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) && e.features.has(b.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && null != t;
}
function y(e) {
    let { headerId: t, guild: n, step: l, lastPrompt: a, questionCount: c, currentPrompt: u, selectOption: f, gotoPrevPrompt: h, gotoNextPrompt: j, completeOnboarding: _ } = e,
        b = (0, o.Wu)([p.Z], () => p.Z.getOnboardingResponsesForPrompt(n.id, u.id)),
        O = 0 === b.length && (null == u ? void 0 : u.required),
        Z = null == u ? void 0 : u.options.filter((e) => b.includes(e.id)),
        y = (0, x.L6)(Z),
        P = (0, x.dX)(Z),
        w = 0 === b.length,
        { helpText: D, helpTextAdditional: T } = (0, g.Z)({
            guild: n,
            prompt: u,
            selectedRoleIds: y,
            selectedChannelIds: P,
            itemHook: I
        }),
        R = (0, d.Z)(n.id, 1000),
        k = u.options.map((e) => E({ value: e.id }, e)),
        M = u.options.filter((e) => b.includes(e.id)).map((e) => e.id);
    return (0, r.jsx)('div', {
        className: C.prompt,
        children: (0, r.jsxs)('div', {
            className: C.promptContent,
            children: [
                (0, r.jsxs)(s.zJl, {
                    className: C.scrollerContent,
                    children: [
                        (0, r.jsxs)('div', {
                            className: C.questionHeader,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-muted',
                                    children: N.intl.format(N.t.isV0NT, {
                                        currentQuestion: l + 1,
                                        questionCount: c
                                    })
                                }),
                                u.required
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(s.Text, {
                                                  variant: 'text-xs/normal',
                                                  className: C.headerSeparator,
                                                  children: '\xB7'
                                              }),
                                              (0, r.jsx)(s.Text, {
                                                  variant: 'text-sm/medium',
                                                  color: 'text-brand',
                                                  children: N.intl.string(N.t.Ur8Vrq)
                                              })
                                          ]
                                      })
                                    : null
                            ]
                        }),
                        (0, r.jsx)(s.X6q, {
                            className: C.title,
                            variant: 'heading-xl/semibold',
                            color: 'header-primary',
                            id: t,
                            children: u.title
                        }),
                        (0, r.jsx)(v.Z, {
                            options: k,
                            value: M,
                            onChange: (e) => {
                                let t = e.find((e) => !b.includes(e.id)),
                                    n = e.map((e) => e.id);
                                if (null != t) f(u.id, t.id, !0);
                                else {
                                    let e = b.filter((e) => !n.includes(e));
                                    u.options
                                        .filter((t) => e.includes(t.id))
                                        .forEach((e) => {
                                            f(u.id, e.id, !1);
                                        });
                                }
                            },
                            memberCounts: R
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: C.navButtons,
                    children: [
                        (0, r.jsx)('div', {
                            className: C.leftButtons,
                            children:
                                l > 0 &&
                                (0, r.jsxs)(i.zx, {
                                    className: C.button,
                                    innerClassName: C.buttonInner,
                                    onClick: () => h(b.length),
                                    size: i.zx.Sizes.MEDIUM,
                                    look: i.zx.Looks.OUTLINED,
                                    grow: !1,
                                    color: i.zx.Colors.PRIMARY,
                                    children: [
                                        (0, r.jsx)(m.Z, {
                                            className: C.arrow,
                                            direction: m.Z.Directions.LEFT
                                        }),
                                        N.intl.string(N.t['13/7kZ'])
                                    ]
                                })
                        }),
                        (0, r.jsxs)('div', {
                            className: C.rightButtons,
                            children: [
                                (0, r.jsxs)(s.Text, {
                                    className: C.helpText,
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: [D, ' ', T]
                                }),
                                (0, r.jsx)(s.ua7, {
                                    text: O ? N.intl.string(N.t.dA1dSU) : null,
                                    children: (e) => {
                                        let { onMouseEnter: t, onMouseLeave: n } = e;
                                        return (0, r.jsx)(i.zx, {
                                            className: C.button,
                                            innerClassName: C.buttonInner,
                                            onMouseEnter: t,
                                            onMouseLeave: n,
                                            onClick: () => (a ? _() : j(b.length)),
                                            disabled: O,
                                            size: i.zx.Sizes.MEDIUM,
                                            look: i.zx.Looks.FILLED,
                                            grow: !1,
                                            color: w ? i.zx.Colors.PRIMARY : i.zx.Colors.BRAND,
                                            children: a
                                                ? (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          N.intl.string(N.t['8SuVoK']),
                                                          (0, r.jsx)('span', {
                                                              className: C.finishEmoji,
                                                              role: 'img',
                                                              'aria-hidden': !0,
                                                              children: '\uD83C\uDF89'
                                                          })
                                                      ]
                                                  })
                                                : (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          w ? N.intl.string(N.t['5WxrcX']) : N.intl.string(N.t.PDTjLC),
                                                          (0, r.jsx)(m.Z, {
                                                              className: C.arrow,
                                                              direction: m.Z.Directions.RIGHT
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
function P(e) {
    let { headerId: t, guild: n, step: l, lastPrompt: a, questionCount: c, currentPrompt: u, selectOption: d, gotoPrevPrompt: f, gotoNextPrompt: h, completeOnboarding: v } = e,
        _ = (0, o.Wu)([p.Z], () => p.Z.getOnboardingResponsesForPrompt(n.id, u.id)),
        b = 0 === _.length && (null == u ? void 0 : u.required),
        E = null == u ? void 0 : u.options.filter((e) => _.includes(e.id)),
        O = (0, x.L6)(E),
        Z = (0, x.dX)(E),
        y = 0 === _.length,
        { helpText: P, helpTextAdditional: w } = (0, g.Z)({
            guild: n,
            prompt: u,
            selectedRoleIds: O,
            selectedChannelIds: Z,
            itemHook: I
        });
    return (0, r.jsx)('div', {
        className: C.prompt,
        children: (0, r.jsxs)('div', {
            className: C.promptContent,
            children: [
                (0, r.jsxs)(s.zJl, {
                    className: C.scrollerContent,
                    children: [
                        (0, r.jsxs)('div', {
                            className: C.questionHeader,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-muted',
                                    children: N.intl.format(N.t.isV0NT, {
                                        currentQuestion: l + 1,
                                        questionCount: c
                                    })
                                }),
                                u.required
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(s.Text, {
                                                  variant: 'text-xs/normal',
                                                  className: C.headerSeparator,
                                                  children: '\xB7'
                                              }),
                                              (0, r.jsx)(s.Text, {
                                                  variant: 'text-sm/medium',
                                                  color: 'text-brand',
                                                  children: N.intl.string(N.t.Ur8Vrq)
                                              })
                                          ]
                                      })
                                    : null
                            ]
                        }),
                        (0, r.jsx)(s.X6q, {
                            className: C.title,
                            variant: 'heading-xl/semibold',
                            color: 'header-primary',
                            id: t,
                            children: u.title
                        }),
                        (0, r.jsx)('div', {
                            className: C.promptOptions,
                            children: u.options.map((e) =>
                                (0, r.jsx)(
                                    j.Z,
                                    {
                                        guildId: n.id,
                                        option: e,
                                        onSelect: (t) => d(u.id, e.id, null != t && t),
                                        selected: _.includes(e.id)
                                    },
                                    e.id
                                )
                            )
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: C.navButtons,
                    children: [
                        (0, r.jsx)('div', {
                            className: C.leftButtons,
                            children:
                                l > 0 &&
                                (0, r.jsxs)(i.zx, {
                                    className: C.button,
                                    innerClassName: C.buttonInner,
                                    onClick: () => f(_.length),
                                    size: i.zx.Sizes.MEDIUM,
                                    look: i.zx.Looks.OUTLINED,
                                    grow: !1,
                                    color: i.zx.Colors.PRIMARY,
                                    children: [
                                        (0, r.jsx)(m.Z, {
                                            className: C.arrow,
                                            direction: m.Z.Directions.LEFT
                                        }),
                                        N.intl.string(N.t['13/7kZ'])
                                    ]
                                })
                        }),
                        (0, r.jsxs)('div', {
                            className: C.rightButtons,
                            children: [
                                (0, r.jsxs)(s.Text, {
                                    className: C.helpText,
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: [P, ' ', w]
                                }),
                                (0, r.jsx)(s.ua7, {
                                    text: b ? N.intl.string(N.t.dA1dSU) : null,
                                    children: (e) => {
                                        let { onMouseEnter: t, onMouseLeave: n } = e;
                                        return (0, r.jsx)(i.zx, {
                                            className: C.button,
                                            innerClassName: C.buttonInner,
                                            onMouseEnter: t,
                                            onMouseLeave: n,
                                            onClick: () => (a ? v() : h(_.length)),
                                            disabled: b,
                                            size: i.zx.Sizes.MEDIUM,
                                            look: i.zx.Looks.FILLED,
                                            grow: !1,
                                            color: y ? i.zx.Colors.PRIMARY : i.zx.Colors.BRAND,
                                            children: a
                                                ? (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          N.intl.string(N.t['8SuVoK']),
                                                          (0, r.jsx)('span', {
                                                              className: C.finishEmoji,
                                                              role: 'img',
                                                              'aria-hidden': !0,
                                                              children: '\uD83C\uDF89'
                                                          })
                                                      ]
                                                  })
                                                : (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          y ? N.intl.string(N.t['5WxrcX']) : N.intl.string(N.t.PDTjLC),
                                                          (0, r.jsx)(m.Z, {
                                                              className: C.arrow,
                                                              direction: m.Z.Directions.RIGHT
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
function w(e) {
    let { guild: t, prompts: n, step: i, selectOption: s, completeOnboarding: d, setCurrentStep: m, headerId: p, disableTracking: x } = e,
        g = (0, o.e7)([u.Z], () => u.Z.getRulesPrompt(t.id));
    l.useEffect(() => {
        t.features.has(b.oNc.MEMBER_VERIFICATION_GATE_ENABLED) && !t.features.has(b.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) && c.ZP.fetchVerificationForm(t.id);
    }, [t]);
    let j = n[i],
        v = i + 1 >= n.length && !Z(t, g),
        N = n[0].required;
    l.useEffect(() => {
        x ||
            f.default.track(
                b.rMx.GUILD_ONBOARDING_STEP_VIEWED,
                O(E({}, (0, a.hH)(t.id)), {
                    step: 0,
                    required: N
                })
            );
    }, [t.id, N, x]);
    let C = (e) => {
            (!x &&
                (f.default.track(
                    b.rMx.GUILD_ONBOARDING_STEP_COMPLETED,
                    O(E({}, (0, a.hH)(t.id)), {
                        step: i,
                        options_selected: e,
                        skipped: 0 === e,
                        back: !1,
                        in_onboarding: !0,
                        is_final_step: !1
                    })
                ),
                i < n.length - 1 &&
                    f.default.track(
                        b.rMx.GUILD_ONBOARDING_STEP_VIEWED,
                        O(E({}, (0, a.hH)(t.id)), {
                            step: i,
                            required: n[i + 1].required
                        })
                    )),
                i + 1 < n.length ? m(i + 1) : Z(t, g) && m('rules'));
        },
        I = (e) => {
            (!x &&
                (f.default.track(
                    b.rMx.GUILD_ONBOARDING_STEP_COMPLETED,
                    O(E({}, (0, a.hH)(t.id)), {
                        step: i,
                        skipped: !1,
                        back: !0,
                        options_selected: e,
                        in_onboarding: !0,
                        is_final_step: !1
                    })
                ),
                i > 0 &&
                    f.default.track(
                        b.rMx.GUILD_ONBOARDING_STEP_VIEWED,
                        O(E({}, (0, a.hH)(t.id)), {
                            step: i - 1,
                            required: n[i - 1].required
                        })
                    )),
                m(Math.max(0, i - 1)));
        };
    if (null == j) return null;
    switch (j.type) {
        case _.FN.MULTIPLE_CHOICE:
            return (0, r.jsx)(P, {
                guild: t,
                headerId: p,
                step: i,
                questionCount: n.length,
                currentPrompt: j,
                lastPrompt: v,
                selectOption: s,
                gotoPrevPrompt: I,
                gotoNextPrompt: C,
                completeOnboarding: d
            });
        case _.FN.DROPDOWN:
            return (0, r.jsx)(y, {
                guild: t,
                headerId: p,
                step: i,
                questionCount: n.length,
                currentPrompt: j,
                lastPrompt: v,
                selectOption: s,
                gotoPrevPrompt: I,
                gotoNextPrompt: C,
                completeOnboarding: d
            });
        default:
            (0, h.vE)(j.type);
    }
}
