n.d(t, {
    Z: function () {
        return T;
    }
});
var r = n(200651),
    l = n(192379),
    o = n(399606),
    s = n(481060),
    i = n(367907),
    a = n(863249),
    d = n(944163),
    c = n(14263),
    u = n(768762),
    m = n(626135),
    p = n(823379),
    h = n(806223),
    x = n(45966),
    g = n(637853),
    f = n(968644),
    b = n(104265),
    _ = n(588632),
    v = n(290511),
    C = n(981631),
    N = n(388032),
    j = n(925741);
function I(e, t) {
    return (0, r.jsx)(
        'span',
        {
            className: j.helpTextItem,
            children: e
        },
        t
    );
}
function E(e) {
    return null != e && h.Z.getCurrentConfig({ location: 'ba216b_1' }, { autoTrackExposure: !0 }).includeRules;
}
function B(e) {
    let { headerId: t, guild: n, step: l, lastPrompt: i, questionCount: a, currentPrompt: d, selectOption: m, gotoPrevPrompt: p, gotoNextPrompt: h, completeOnboarding: b } = e,
        v = (0, o.Wu)([x.Z], () => x.Z.getOnboardingResponsesForPrompt(n.id, d.id)),
        C = 0 === v.length && (null == d ? void 0 : d.required),
        E = null == d ? void 0 : d.options.filter((e) => v.includes(e.id)),
        B = (0, g.L6)(E),
        Z = (0, g.dX)(E),
        T = 0 === v.length,
        { helpText: k, helpTextAdditional: D } = (0, f.Z)({
            guild: n,
            prompt: d,
            selectedRoleIds: B,
            selectedChannelIds: Z,
            itemHook: I
        }),
        P = (0, c.Z)(n.id, 1000),
        O = d.options.map((e) => ({
            value: e.id,
            ...e
        })),
        w = d.options.filter((e) => v.includes(e.id)).map((e) => e.id);
    return (0, r.jsx)('div', {
        className: j.prompt,
        children: (0, r.jsxs)('div', {
            className: j.promptContent,
            children: [
                (0, r.jsxs)(s.ScrollerThin, {
                    className: j.scrollerContent,
                    children: [
                        (0, r.jsxs)('div', {
                            className: j.questionHeader,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-muted',
                                    children: N.intl.format(N.t.isV0NT, {
                                        currentQuestion: l + 1,
                                        questionCount: a
                                    })
                                }),
                                d.required
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(s.Text, {
                                                  variant: 'text-xs/normal',
                                                  className: j.headerSeparator,
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
                        (0, r.jsx)(s.Heading, {
                            className: j.title,
                            variant: 'heading-xl/semibold',
                            color: 'header-primary',
                            id: t,
                            children: d.title
                        }),
                        (0, r.jsx)(_.Z, {
                            options: O,
                            value: w,
                            onChange: (e) => {
                                let t = e.find((e) => !v.includes(e.id)),
                                    n = e.map((e) => e.id);
                                if (null != t) m(d.id, t.id, !0);
                                else {
                                    let e = v.filter((e) => !n.includes(e));
                                    d.options
                                        .filter((t) => e.includes(t.id))
                                        .forEach((e) => {
                                            m(d.id, e.id, !1);
                                        });
                                }
                            },
                            memberCounts: P
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: j.navButtons,
                    children: [
                        (0, r.jsx)('div', {
                            className: j.leftButtons,
                            children:
                                l > 0 &&
                                (0, r.jsxs)(s.Button, {
                                    className: j.button,
                                    innerClassName: j.buttonInner,
                                    onClick: () => p(v.length),
                                    size: s.Button.Sizes.MEDIUM,
                                    look: s.Button.Looks.OUTLINED,
                                    grow: !1,
                                    color: s.Button.Colors.PRIMARY,
                                    children: [
                                        (0, r.jsx)(u.Z, {
                                            className: j.arrow,
                                            direction: u.Z.Directions.LEFT
                                        }),
                                        N.intl.string(N.t['13/7kZ'])
                                    ]
                                })
                        }),
                        (0, r.jsxs)('div', {
                            className: j.rightButtons,
                            children: [
                                (0, r.jsxs)(s.Text, {
                                    className: j.helpText,
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: [k, ' ', D]
                                }),
                                (0, r.jsx)(s.Tooltip, {
                                    text: C ? N.intl.string(N.t.dA1dSU) : null,
                                    children: (e) => {
                                        let { onMouseEnter: t, onMouseLeave: n } = e;
                                        return (0, r.jsx)(s.Button, {
                                            className: j.button,
                                            innerClassName: j.buttonInner,
                                            onMouseEnter: t,
                                            onMouseLeave: n,
                                            onClick: () => (i ? b() : h(v.length)),
                                            disabled: C,
                                            size: s.Button.Sizes.MEDIUM,
                                            look: s.Button.Looks.FILLED,
                                            grow: !1,
                                            color: T ? s.Button.Colors.PRIMARY : s.Button.Colors.BRAND,
                                            children: i
                                                ? (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          N.intl.string(N.t['8SuVoK']),
                                                          (0, r.jsx)('span', {
                                                              className: j.finishEmoji,
                                                              role: 'img',
                                                              'aria-hidden': !0,
                                                              children: '\uD83C\uDF89'
                                                          })
                                                      ]
                                                  })
                                                : (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          T ? N.intl.string(N.t['5WxrcX']) : N.intl.string(N.t.PDTjLC),
                                                          (0, r.jsx)(u.Z, {
                                                              className: j.arrow,
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
function Z(e) {
    let { headerId: t, guild: n, step: l, lastPrompt: i, questionCount: a, currentPrompt: d, selectOption: c, gotoPrevPrompt: m, gotoNextPrompt: p, completeOnboarding: h } = e,
        _ = (0, o.Wu)([x.Z], () => x.Z.getOnboardingResponsesForPrompt(n.id, d.id)),
        v = 0 === _.length && (null == d ? void 0 : d.required),
        C = null == d ? void 0 : d.options.filter((e) => _.includes(e.id)),
        E = (0, g.L6)(C),
        B = (0, g.dX)(C),
        Z = 0 === _.length,
        { helpText: T, helpTextAdditional: k } = (0, f.Z)({
            guild: n,
            prompt: d,
            selectedRoleIds: E,
            selectedChannelIds: B,
            itemHook: I
        });
    return (0, r.jsx)('div', {
        className: j.prompt,
        children: (0, r.jsxs)('div', {
            className: j.promptContent,
            children: [
                (0, r.jsxs)(s.ScrollerThin, {
                    className: j.scrollerContent,
                    children: [
                        (0, r.jsxs)('div', {
                            className: j.questionHeader,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-muted',
                                    children: N.intl.format(N.t.isV0NT, {
                                        currentQuestion: l + 1,
                                        questionCount: a
                                    })
                                }),
                                d.required
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(s.Text, {
                                                  variant: 'text-xs/normal',
                                                  className: j.headerSeparator,
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
                        (0, r.jsx)(s.Heading, {
                            className: j.title,
                            variant: 'heading-xl/semibold',
                            color: 'header-primary',
                            id: t,
                            children: d.title
                        }),
                        (0, r.jsx)('div', {
                            className: j.promptOptions,
                            children: d.options.map((e) =>
                                (0, r.jsx)(
                                    b.Z,
                                    {
                                        guildId: n.id,
                                        option: e,
                                        onSelect: (t) => c(d.id, e.id, null != t && t),
                                        selected: _.includes(e.id)
                                    },
                                    e.id
                                )
                            )
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: j.navButtons,
                    children: [
                        (0, r.jsx)('div', {
                            className: j.leftButtons,
                            children:
                                l > 0 &&
                                (0, r.jsxs)(s.Button, {
                                    className: j.button,
                                    innerClassName: j.buttonInner,
                                    onClick: () => m(_.length),
                                    size: s.Button.Sizes.MEDIUM,
                                    look: s.Button.Looks.OUTLINED,
                                    grow: !1,
                                    color: s.Button.Colors.PRIMARY,
                                    children: [
                                        (0, r.jsx)(u.Z, {
                                            className: j.arrow,
                                            direction: u.Z.Directions.LEFT
                                        }),
                                        N.intl.string(N.t['13/7kZ'])
                                    ]
                                })
                        }),
                        (0, r.jsxs)('div', {
                            className: j.rightButtons,
                            children: [
                                (0, r.jsxs)(s.Text, {
                                    className: j.helpText,
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: [T, ' ', k]
                                }),
                                (0, r.jsx)(s.Tooltip, {
                                    text: v ? N.intl.string(N.t.dA1dSU) : null,
                                    children: (e) => {
                                        let { onMouseEnter: t, onMouseLeave: n } = e;
                                        return (0, r.jsx)(s.Button, {
                                            className: j.button,
                                            innerClassName: j.buttonInner,
                                            onMouseEnter: t,
                                            onMouseLeave: n,
                                            onClick: () => (i ? h() : p(_.length)),
                                            disabled: v,
                                            size: s.Button.Sizes.MEDIUM,
                                            look: s.Button.Looks.FILLED,
                                            grow: !1,
                                            color: Z ? s.Button.Colors.PRIMARY : s.Button.Colors.BRAND,
                                            children: i
                                                ? (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          N.intl.string(N.t['8SuVoK']),
                                                          (0, r.jsx)('span', {
                                                              className: j.finishEmoji,
                                                              role: 'img',
                                                              'aria-hidden': !0,
                                                              children: '\uD83C\uDF89'
                                                          })
                                                      ]
                                                  })
                                                : (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          Z ? N.intl.string(N.t['5WxrcX']) : N.intl.string(N.t.PDTjLC),
                                                          (0, r.jsx)(u.Z, {
                                                              className: j.arrow,
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
function T(e) {
    let { guild: t, prompts: n, step: s, selectOption: c, completeOnboarding: u, setCurrentStep: h, headerId: x, disableTracking: g } = e,
        f = (0, o.e7)([d.Z], () => d.Z.getRulesPrompt(t.id));
    l.useEffect(() => {
        a.ZP.fetchVerificationForm(t.id);
    }, [t.id]);
    let b = n[s],
        _ = s + 1 >= n.length && !E(f),
        N = n[0].required;
    l.useEffect(() => {
        if (!g)
            m.default.track(C.rMx.GUILD_ONBOARDING_STEP_VIEWED, {
                ...(0, i.hH)(t.id),
                step: 0,
                required: N
            });
    }, [t.id, N, g]);
    let j = (e) => {
            !g &&
                (m.default.track(C.rMx.GUILD_ONBOARDING_STEP_COMPLETED, {
                    ...(0, i.hH)(t.id),
                    step: s,
                    options_selected: e,
                    skipped: 0 === e,
                    back: !1,
                    in_onboarding: !0,
                    is_final_step: !1
                }),
                s < n.length - 1 &&
                    m.default.track(C.rMx.GUILD_ONBOARDING_STEP_VIEWED, {
                        ...(0, i.hH)(t.id),
                        step: s,
                        required: n[s + 1].required
                    })),
                s + 1 < n.length ? h(s + 1) : E(f) && h('rules');
        },
        I = (e) => {
            !g &&
                (m.default.track(C.rMx.GUILD_ONBOARDING_STEP_COMPLETED, {
                    ...(0, i.hH)(t.id),
                    step: s,
                    skipped: !1,
                    back: !0,
                    options_selected: e,
                    in_onboarding: !0,
                    is_final_step: !1
                }),
                s > 0 &&
                    m.default.track(C.rMx.GUILD_ONBOARDING_STEP_VIEWED, {
                        ...(0, i.hH)(t.id),
                        step: s - 1,
                        required: n[s - 1].required
                    })),
                h(Math.max(0, s - 1));
        };
    if (null == b) return null;
    switch (b.type) {
        case v.FN.MULTIPLE_CHOICE:
            return (0, r.jsx)(Z, {
                guild: t,
                headerId: x,
                step: s,
                questionCount: n.length,
                currentPrompt: b,
                lastPrompt: _,
                selectOption: c,
                gotoPrevPrompt: I,
                gotoNextPrompt: j,
                completeOnboarding: u
            });
        case v.FN.DROPDOWN:
            return (0, r.jsx)(B, {
                guild: t,
                headerId: x,
                step: s,
                questionCount: n.length,
                currentPrompt: b,
                lastPrompt: _,
                selectOption: c,
                gotoPrevPrompt: I,
                gotoNextPrompt: j,
                completeOnboarding: u
            });
        default:
            (0, p.vE)(b.type);
    }
}
