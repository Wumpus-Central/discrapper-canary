n.d(t, { Z: () => w });
var r = n(200651),
    l = n(192379),
    o = n(399606),
    i = n(481060),
    s = n(367907),
    a = n(863249),
    c = n(944163),
    d = n(14263),
    u = n(768762),
    m = n(626135),
    h = n(823379),
    p = n(806223),
    x = n(45966),
    f = n(637853),
    g = n(968644),
    j = n(104265),
    v = n(588632),
    b = n(290511),
    N = n(981631),
    _ = n(388032),
    C = n(557541);
function k(e) {
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
function Z(e, t) {
    return (0, r.jsx)(
        'span',
        {
            className: C.helpTextItem,
            children: e
        },
        t
    );
}
function E(e) {
    return null != e && p.Z.getCurrentConfig({ location: 'ba216b_1' }, { autoTrackExposure: !0 }).includeRules;
}
function I(e) {
    let { headerId: t, guild: n, step: l, lastPrompt: s, questionCount: a, currentPrompt: c, selectOption: m, gotoPrevPrompt: h, gotoNextPrompt: p, completeOnboarding: j } = e,
        b = (0, o.Wu)([x.Z], () => x.Z.getOnboardingResponsesForPrompt(n.id, c.id)),
        N = 0 === b.length && (null == c ? void 0 : c.required),
        O = null == c ? void 0 : c.options.filter((e) => b.includes(e.id)),
        E = (0, f.L6)(O),
        I = (0, f.dX)(O),
        y = 0 === b.length,
        { helpText: w, helpTextAdditional: P } = (0, g.Z)({
            guild: n,
            prompt: c,
            selectedRoleIds: E,
            selectedChannelIds: I,
            itemHook: Z
        }),
        D = (0, d.Z)(n.id, 1000),
        T = c.options.map((e) => k({ value: e.id }, e)),
        R = c.options.filter((e) => b.includes(e.id)).map((e) => e.id);
    return (0, r.jsx)('div', {
        className: C.prompt,
        children: (0, r.jsxs)('div', {
            className: C.promptContent,
            children: [
                (0, r.jsxs)(i.zJl, {
                    className: C.scrollerContent,
                    children: [
                        (0, r.jsxs)('div', {
                            className: C.questionHeader,
                            children: [
                                (0, r.jsx)(i.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-muted',
                                    children: _.NW.format(_.t.isV0NT, {
                                        currentQuestion: l + 1,
                                        questionCount: a
                                    })
                                }),
                                c.required
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(i.Text, {
                                                  variant: 'text-xs/normal',
                                                  className: C.headerSeparator,
                                                  children: '\xB7'
                                              }),
                                              (0, r.jsx)(i.Text, {
                                                  variant: 'text-sm/medium',
                                                  color: 'text-brand',
                                                  children: _.NW.string(_.t.Ur8Vrq)
                                              })
                                          ]
                                      })
                                    : null
                            ]
                        }),
                        (0, r.jsx)(i.X6q, {
                            className: C.title,
                            variant: 'heading-xl/semibold',
                            color: 'header-primary',
                            id: t,
                            children: c.title
                        }),
                        (0, r.jsx)(v.Z, {
                            options: T,
                            value: R,
                            onChange: (e) => {
                                let t = e.find((e) => !b.includes(e.id)),
                                    n = e.map((e) => e.id);
                                if (null != t) m(c.id, t.id, !0);
                                else {
                                    let e = b.filter((e) => !n.includes(e));
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
                    className: C.navButtons,
                    children: [
                        (0, r.jsx)('div', {
                            className: C.leftButtons,
                            children:
                                l > 0 &&
                                (0, r.jsxs)(i.zxk, {
                                    className: C.button,
                                    innerClassName: C.buttonInner,
                                    onClick: () => h(b.length),
                                    size: i.zxk.Sizes.MEDIUM,
                                    look: i.zxk.Looks.OUTLINED,
                                    grow: !1,
                                    color: i.zxk.Colors.PRIMARY,
                                    children: [
                                        (0, r.jsx)(u.Z, {
                                            className: C.arrow,
                                            direction: u.Z.Directions.LEFT
                                        }),
                                        _.NW.string(_.t['13/7kZ'])
                                    ]
                                })
                        }),
                        (0, r.jsxs)('div', {
                            className: C.rightButtons,
                            children: [
                                (0, r.jsxs)(i.Text, {
                                    className: C.helpText,
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: [w, ' ', P]
                                }),
                                (0, r.jsx)(i.ua7, {
                                    text: N ? _.NW.string(_.t.dA1dSU) : null,
                                    children: (e) => {
                                        let { onMouseEnter: t, onMouseLeave: n } = e;
                                        return (0, r.jsx)(i.zxk, {
                                            className: C.button,
                                            innerClassName: C.buttonInner,
                                            onMouseEnter: t,
                                            onMouseLeave: n,
                                            onClick: () => (s ? j() : p(b.length)),
                                            disabled: N,
                                            size: i.zxk.Sizes.MEDIUM,
                                            look: i.zxk.Looks.FILLED,
                                            grow: !1,
                                            color: y ? i.zxk.Colors.PRIMARY : i.zxk.Colors.BRAND,
                                            children: s
                                                ? (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          _.NW.string(_.t['8SuVoK']),
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
                                                          y ? _.NW.string(_.t['5WxrcX']) : _.NW.string(_.t.PDTjLC),
                                                          (0, r.jsx)(u.Z, {
                                                              className: C.arrow,
                                                              direction: u.Z.Directions.RIGHT
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
    let { headerId: t, guild: n, step: l, lastPrompt: s, questionCount: a, currentPrompt: c, selectOption: d, gotoPrevPrompt: m, gotoNextPrompt: h, completeOnboarding: p } = e,
        v = (0, o.Wu)([x.Z], () => x.Z.getOnboardingResponsesForPrompt(n.id, c.id)),
        b = 0 === v.length && (null == c ? void 0 : c.required),
        N = null == c ? void 0 : c.options.filter((e) => v.includes(e.id)),
        k = (0, f.L6)(N),
        O = (0, f.dX)(N),
        E = 0 === v.length,
        { helpText: I, helpTextAdditional: y } = (0, g.Z)({
            guild: n,
            prompt: c,
            selectedRoleIds: k,
            selectedChannelIds: O,
            itemHook: Z
        });
    return (0, r.jsx)('div', {
        className: C.prompt,
        children: (0, r.jsxs)('div', {
            className: C.promptContent,
            children: [
                (0, r.jsxs)(i.zJl, {
                    className: C.scrollerContent,
                    children: [
                        (0, r.jsxs)('div', {
                            className: C.questionHeader,
                            children: [
                                (0, r.jsx)(i.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-muted',
                                    children: _.NW.format(_.t.isV0NT, {
                                        currentQuestion: l + 1,
                                        questionCount: a
                                    })
                                }),
                                c.required
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(i.Text, {
                                                  variant: 'text-xs/normal',
                                                  className: C.headerSeparator,
                                                  children: '\xB7'
                                              }),
                                              (0, r.jsx)(i.Text, {
                                                  variant: 'text-sm/medium',
                                                  color: 'text-brand',
                                                  children: _.NW.string(_.t.Ur8Vrq)
                                              })
                                          ]
                                      })
                                    : null
                            ]
                        }),
                        (0, r.jsx)(i.X6q, {
                            className: C.title,
                            variant: 'heading-xl/semibold',
                            color: 'header-primary',
                            id: t,
                            children: c.title
                        }),
                        (0, r.jsx)('div', {
                            className: C.promptOptions,
                            children: c.options.map((e) =>
                                (0, r.jsx)(
                                    j.Z,
                                    {
                                        guildId: n.id,
                                        option: e,
                                        onSelect: (t) => d(c.id, e.id, null != t && t),
                                        selected: v.includes(e.id)
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
                                (0, r.jsxs)(i.zxk, {
                                    className: C.button,
                                    innerClassName: C.buttonInner,
                                    onClick: () => m(v.length),
                                    size: i.zxk.Sizes.MEDIUM,
                                    look: i.zxk.Looks.OUTLINED,
                                    grow: !1,
                                    color: i.zxk.Colors.PRIMARY,
                                    children: [
                                        (0, r.jsx)(u.Z, {
                                            className: C.arrow,
                                            direction: u.Z.Directions.LEFT
                                        }),
                                        _.NW.string(_.t['13/7kZ'])
                                    ]
                                })
                        }),
                        (0, r.jsxs)('div', {
                            className: C.rightButtons,
                            children: [
                                (0, r.jsxs)(i.Text, {
                                    className: C.helpText,
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: [I, ' ', y]
                                }),
                                (0, r.jsx)(i.ua7, {
                                    text: b ? _.NW.string(_.t.dA1dSU) : null,
                                    children: (e) => {
                                        let { onMouseEnter: t, onMouseLeave: n } = e;
                                        return (0, r.jsx)(i.zxk, {
                                            className: C.button,
                                            innerClassName: C.buttonInner,
                                            onMouseEnter: t,
                                            onMouseLeave: n,
                                            onClick: () => (s ? p() : h(v.length)),
                                            disabled: b,
                                            size: i.zxk.Sizes.MEDIUM,
                                            look: i.zxk.Looks.FILLED,
                                            grow: !1,
                                            color: E ? i.zxk.Colors.PRIMARY : i.zxk.Colors.BRAND,
                                            children: s
                                                ? (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          _.NW.string(_.t['8SuVoK']),
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
                                                          E ? _.NW.string(_.t['5WxrcX']) : _.NW.string(_.t.PDTjLC),
                                                          (0, r.jsx)(u.Z, {
                                                              className: C.arrow,
                                                              direction: u.Z.Directions.RIGHT
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
    let { guild: t, prompts: n, step: i, selectOption: d, completeOnboarding: u, setCurrentStep: p, headerId: x, disableTracking: f } = e,
        g = (0, o.e7)([c.Z], () => c.Z.getRulesPrompt(t.id));
    l.useEffect(() => {
        t.hasFeature(N.oNc.MEMBER_VERIFICATION_GATE_ENABLED) && a.ZP.fetchVerificationForm(t.id);
    }, [t]);
    let j = n[i],
        v = i + 1 >= n.length && !E(g),
        _ = n[0].required;
    l.useEffect(() => {
        !f &&
            m.default.track(
                N.rMx.GUILD_ONBOARDING_STEP_VIEWED,
                O(k({}, (0, s.hH)(t.id)), {
                    step: 0,
                    required: _
                })
            );
    }, [t.id, _, f]);
    let C = (e) => {
            !f &&
                (m.default.track(
                    N.rMx.GUILD_ONBOARDING_STEP_COMPLETED,
                    O(k({}, (0, s.hH)(t.id)), {
                        step: i,
                        options_selected: e,
                        skipped: 0 === e,
                        back: !1,
                        in_onboarding: !0,
                        is_final_step: !1
                    })
                ),
                i < n.length - 1 &&
                    m.default.track(
                        N.rMx.GUILD_ONBOARDING_STEP_VIEWED,
                        O(k({}, (0, s.hH)(t.id)), {
                            step: i,
                            required: n[i + 1].required
                        })
                    )),
                i + 1 < n.length ? p(i + 1) : E(g) && p('rules');
        },
        Z = (e) => {
            !f &&
                (m.default.track(
                    N.rMx.GUILD_ONBOARDING_STEP_COMPLETED,
                    O(k({}, (0, s.hH)(t.id)), {
                        step: i,
                        skipped: !1,
                        back: !0,
                        options_selected: e,
                        in_onboarding: !0,
                        is_final_step: !1
                    })
                ),
                i > 0 &&
                    m.default.track(
                        N.rMx.GUILD_ONBOARDING_STEP_VIEWED,
                        O(k({}, (0, s.hH)(t.id)), {
                            step: i - 1,
                            required: n[i - 1].required
                        })
                    )),
                p(Math.max(0, i - 1));
        };
    if (null == j) return null;
    switch (j.type) {
        case b.FN.MULTIPLE_CHOICE:
            return (0, r.jsx)(y, {
                guild: t,
                headerId: x,
                step: i,
                questionCount: n.length,
                currentPrompt: j,
                lastPrompt: v,
                selectOption: d,
                gotoPrevPrompt: Z,
                gotoNextPrompt: C,
                completeOnboarding: u
            });
        case b.FN.DROPDOWN:
            return (0, r.jsx)(I, {
                guild: t,
                headerId: x,
                step: i,
                questionCount: n.length,
                currentPrompt: j,
                lastPrompt: v,
                selectOption: d,
                gotoPrevPrompt: Z,
                gotoNextPrompt: C,
                completeOnboarding: u
            });
        default:
            (0, h.vE)(j.type);
    }
}
