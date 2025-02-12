n.d(t, { Z: () => T });
var l = n(200651),
    r = n(192379),
    i = n(399606),
    o = n(481060),
    s = n(367907),
    a = n(863249),
    d = n(944163),
    c = n(14263),
    u = n(768762),
    m = n(626135),
    x = n(823379),
    h = n(806223),
    p = n(45966),
    f = n(637853),
    g = n(968644),
    v = n(104265),
    _ = n(588632),
    j = n(290511),
    C = n(981631),
    N = n(388032),
    b = n(260294);
function k(e, t) {
    return (0, l.jsx)(
        'span',
        {
            className: b.helpTextItem,
            children: e
        },
        t
    );
}
function Z(e) {
    return null != e && h.Z.getCurrentConfig({ location: 'ba216b_1' }, { autoTrackExposure: !0 }).includeRules;
}
function I(e) {
    let { headerId: t, guild: n, step: r, lastPrompt: s, questionCount: a, currentPrompt: d, selectOption: m, gotoPrevPrompt: x, gotoNextPrompt: h, completeOnboarding: v } = e,
        j = (0, i.Wu)([p.Z], () => p.Z.getOnboardingResponsesForPrompt(n.id, d.id)),
        C = 0 === j.length && (null == d ? void 0 : d.required),
        Z = null == d ? void 0 : d.options.filter((e) => j.includes(e.id)),
        I = (0, f.L6)(Z),
        E = (0, f.dX)(Z),
        T = 0 === j.length,
        { helpText: D, helpTextAdditional: w } = (0, g.Z)({
            guild: n,
            prompt: d,
            selectedRoleIds: I,
            selectedChannelIds: E,
            itemHook: k
        }),
        R = (0, c.Z)(n.id, 1000),
        P = d.options.map((e) => ({
            value: e.id,
            ...e
        })),
        M = d.options.filter((e) => j.includes(e.id)).map((e) => e.id);
    return (0, l.jsx)('div', {
        className: b.prompt,
        children: (0, l.jsxs)('div', {
            className: b.promptContent,
            children: [
                (0, l.jsxs)(o.zJl, {
                    className: b.scrollerContent,
                    children: [
                        (0, l.jsxs)('div', {
                            className: b.questionHeader,
                            children: [
                                (0, l.jsx)(o.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-muted',
                                    children: N.intl.format(N.t.isV0NT, {
                                        currentQuestion: r + 1,
                                        questionCount: a
                                    })
                                }),
                                d.required
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(o.Text, {
                                                  variant: 'text-xs/normal',
                                                  className: b.headerSeparator,
                                                  children: '\xB7'
                                              }),
                                              (0, l.jsx)(o.Text, {
                                                  variant: 'text-sm/medium',
                                                  color: 'text-brand',
                                                  children: N.intl.string(N.t.Ur8Vrq)
                                              })
                                          ]
                                      })
                                    : null
                            ]
                        }),
                        (0, l.jsx)(o.X6q, {
                            className: b.title,
                            variant: 'heading-xl/semibold',
                            color: 'header-primary',
                            id: t,
                            children: d.title
                        }),
                        (0, l.jsx)(_.Z, {
                            options: P,
                            value: M,
                            onChange: (e) => {
                                let t = e.find((e) => !j.includes(e.id)),
                                    n = e.map((e) => e.id);
                                if (null != t) m(d.id, t.id, !0);
                                else {
                                    let e = j.filter((e) => !n.includes(e));
                                    d.options
                                        .filter((t) => e.includes(t.id))
                                        .forEach((e) => {
                                            m(d.id, e.id, !1);
                                        });
                                }
                            },
                            memberCounts: R
                        })
                    ]
                }),
                (0, l.jsxs)('div', {
                    className: b.navButtons,
                    children: [
                        (0, l.jsx)('div', {
                            className: b.leftButtons,
                            children:
                                r > 0 &&
                                (0, l.jsxs)(o.zxk, {
                                    className: b.button,
                                    innerClassName: b.buttonInner,
                                    onClick: () => x(j.length),
                                    size: o.zxk.Sizes.MEDIUM,
                                    look: o.zxk.Looks.OUTLINED,
                                    grow: !1,
                                    color: o.zxk.Colors.PRIMARY,
                                    children: [
                                        (0, l.jsx)(u.Z, {
                                            className: b.arrow,
                                            direction: u.Z.Directions.LEFT
                                        }),
                                        N.intl.string(N.t['13/7kZ'])
                                    ]
                                })
                        }),
                        (0, l.jsxs)('div', {
                            className: b.rightButtons,
                            children: [
                                (0, l.jsxs)(o.Text, {
                                    className: b.helpText,
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: [D, ' ', w]
                                }),
                                (0, l.jsx)(o.ua7, {
                                    text: C ? N.intl.string(N.t.dA1dSU) : null,
                                    children: (e) => {
                                        let { onMouseEnter: t, onMouseLeave: n } = e;
                                        return (0, l.jsx)(o.zxk, {
                                            className: b.button,
                                            innerClassName: b.buttonInner,
                                            onMouseEnter: t,
                                            onMouseLeave: n,
                                            onClick: () => (s ? v() : h(j.length)),
                                            disabled: C,
                                            size: o.zxk.Sizes.MEDIUM,
                                            look: o.zxk.Looks.FILLED,
                                            grow: !1,
                                            color: T ? o.zxk.Colors.PRIMARY : o.zxk.Colors.BRAND,
                                            children: s
                                                ? (0, l.jsxs)(l.Fragment, {
                                                      children: [
                                                          N.intl.string(N.t['8SuVoK']),
                                                          (0, l.jsx)('span', {
                                                              className: b.finishEmoji,
                                                              role: 'img',
                                                              'aria-hidden': !0,
                                                              children: '\uD83C\uDF89'
                                                          })
                                                      ]
                                                  })
                                                : (0, l.jsxs)(l.Fragment, {
                                                      children: [
                                                          T ? N.intl.string(N.t['5WxrcX']) : N.intl.string(N.t.PDTjLC),
                                                          (0, l.jsx)(u.Z, {
                                                              className: b.arrow,
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
function E(e) {
    let { headerId: t, guild: n, step: r, lastPrompt: s, questionCount: a, currentPrompt: d, selectOption: c, gotoPrevPrompt: m, gotoNextPrompt: x, completeOnboarding: h } = e,
        _ = (0, i.Wu)([p.Z], () => p.Z.getOnboardingResponsesForPrompt(n.id, d.id)),
        j = 0 === _.length && (null == d ? void 0 : d.required),
        C = null == d ? void 0 : d.options.filter((e) => _.includes(e.id)),
        Z = (0, f.L6)(C),
        I = (0, f.dX)(C),
        E = 0 === _.length,
        { helpText: T, helpTextAdditional: D } = (0, g.Z)({
            guild: n,
            prompt: d,
            selectedRoleIds: Z,
            selectedChannelIds: I,
            itemHook: k
        });
    return (0, l.jsx)('div', {
        className: b.prompt,
        children: (0, l.jsxs)('div', {
            className: b.promptContent,
            children: [
                (0, l.jsxs)(o.zJl, {
                    className: b.scrollerContent,
                    children: [
                        (0, l.jsxs)('div', {
                            className: b.questionHeader,
                            children: [
                                (0, l.jsx)(o.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-muted',
                                    children: N.intl.format(N.t.isV0NT, {
                                        currentQuestion: r + 1,
                                        questionCount: a
                                    })
                                }),
                                d.required
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(o.Text, {
                                                  variant: 'text-xs/normal',
                                                  className: b.headerSeparator,
                                                  children: '\xB7'
                                              }),
                                              (0, l.jsx)(o.Text, {
                                                  variant: 'text-sm/medium',
                                                  color: 'text-brand',
                                                  children: N.intl.string(N.t.Ur8Vrq)
                                              })
                                          ]
                                      })
                                    : null
                            ]
                        }),
                        (0, l.jsx)(o.X6q, {
                            className: b.title,
                            variant: 'heading-xl/semibold',
                            color: 'header-primary',
                            id: t,
                            children: d.title
                        }),
                        (0, l.jsx)('div', {
                            className: b.promptOptions,
                            children: d.options.map((e) =>
                                (0, l.jsx)(
                                    v.Z,
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
                (0, l.jsxs)('div', {
                    className: b.navButtons,
                    children: [
                        (0, l.jsx)('div', {
                            className: b.leftButtons,
                            children:
                                r > 0 &&
                                (0, l.jsxs)(o.zxk, {
                                    className: b.button,
                                    innerClassName: b.buttonInner,
                                    onClick: () => m(_.length),
                                    size: o.zxk.Sizes.MEDIUM,
                                    look: o.zxk.Looks.OUTLINED,
                                    grow: !1,
                                    color: o.zxk.Colors.PRIMARY,
                                    children: [
                                        (0, l.jsx)(u.Z, {
                                            className: b.arrow,
                                            direction: u.Z.Directions.LEFT
                                        }),
                                        N.intl.string(N.t['13/7kZ'])
                                    ]
                                })
                        }),
                        (0, l.jsxs)('div', {
                            className: b.rightButtons,
                            children: [
                                (0, l.jsxs)(o.Text, {
                                    className: b.helpText,
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: [T, ' ', D]
                                }),
                                (0, l.jsx)(o.ua7, {
                                    text: j ? N.intl.string(N.t.dA1dSU) : null,
                                    children: (e) => {
                                        let { onMouseEnter: t, onMouseLeave: n } = e;
                                        return (0, l.jsx)(o.zxk, {
                                            className: b.button,
                                            innerClassName: b.buttonInner,
                                            onMouseEnter: t,
                                            onMouseLeave: n,
                                            onClick: () => (s ? h() : x(_.length)),
                                            disabled: j,
                                            size: o.zxk.Sizes.MEDIUM,
                                            look: o.zxk.Looks.FILLED,
                                            grow: !1,
                                            color: E ? o.zxk.Colors.PRIMARY : o.zxk.Colors.BRAND,
                                            children: s
                                                ? (0, l.jsxs)(l.Fragment, {
                                                      children: [
                                                          N.intl.string(N.t['8SuVoK']),
                                                          (0, l.jsx)('span', {
                                                              className: b.finishEmoji,
                                                              role: 'img',
                                                              'aria-hidden': !0,
                                                              children: '\uD83C\uDF89'
                                                          })
                                                      ]
                                                  })
                                                : (0, l.jsxs)(l.Fragment, {
                                                      children: [
                                                          E ? N.intl.string(N.t['5WxrcX']) : N.intl.string(N.t.PDTjLC),
                                                          (0, l.jsx)(u.Z, {
                                                              className: b.arrow,
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
    let { guild: t, prompts: n, step: o, selectOption: c, completeOnboarding: u, setCurrentStep: h, headerId: p, disableTracking: f } = e,
        g = (0, i.e7)([d.Z], () => d.Z.getRulesPrompt(t.id));
    r.useEffect(() => {
        t.hasFeature(C.oNc.MEMBER_VERIFICATION_GATE_ENABLED) && a.ZP.fetchVerificationForm(t.id);
    }, [t]);
    let v = n[o],
        _ = o + 1 >= n.length && !Z(g),
        N = n[0].required;
    r.useEffect(() => {
        !f &&
            m.default.track(C.rMx.GUILD_ONBOARDING_STEP_VIEWED, {
                ...(0, s.hH)(t.id),
                step: 0,
                required: N
            });
    }, [t.id, N, f]);
    let b = (e) => {
            !f &&
                (m.default.track(C.rMx.GUILD_ONBOARDING_STEP_COMPLETED, {
                    ...(0, s.hH)(t.id),
                    step: o,
                    options_selected: e,
                    skipped: 0 === e,
                    back: !1,
                    in_onboarding: !0,
                    is_final_step: !1
                }),
                o < n.length - 1 &&
                    m.default.track(C.rMx.GUILD_ONBOARDING_STEP_VIEWED, {
                        ...(0, s.hH)(t.id),
                        step: o,
                        required: n[o + 1].required
                    })),
                o + 1 < n.length ? h(o + 1) : Z(g) && h('rules');
        },
        k = (e) => {
            !f &&
                (m.default.track(C.rMx.GUILD_ONBOARDING_STEP_COMPLETED, {
                    ...(0, s.hH)(t.id),
                    step: o,
                    skipped: !1,
                    back: !0,
                    options_selected: e,
                    in_onboarding: !0,
                    is_final_step: !1
                }),
                o > 0 &&
                    m.default.track(C.rMx.GUILD_ONBOARDING_STEP_VIEWED, {
                        ...(0, s.hH)(t.id),
                        step: o - 1,
                        required: n[o - 1].required
                    })),
                h(Math.max(0, o - 1));
        };
    if (null == v) return null;
    switch (v.type) {
        case j.FN.MULTIPLE_CHOICE:
            return (0, l.jsx)(E, {
                guild: t,
                headerId: p,
                step: o,
                questionCount: n.length,
                currentPrompt: v,
                lastPrompt: _,
                selectOption: c,
                gotoPrevPrompt: k,
                gotoNextPrompt: b,
                completeOnboarding: u
            });
        case j.FN.DROPDOWN:
            return (0, l.jsx)(I, {
                guild: t,
                headerId: p,
                step: o,
                questionCount: n.length,
                currentPrompt: v,
                lastPrompt: _,
                selectOption: c,
                gotoPrevPrompt: k,
                gotoNextPrompt: b,
                completeOnboarding: u
            });
        default:
            (0, x.vE)(v.type);
    }
}
