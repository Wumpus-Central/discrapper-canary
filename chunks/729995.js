n.d(t, { Z: () => I });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(755721),
    s = n(481060),
    a = n(2052),
    o = n(367907),
    c = n(45966),
    d = n(734893),
    u = n(661824),
    m = n(430824),
    g = n(626135),
    p = n(983135),
    f = n(8426),
    h = n(969632),
    x = n(570961),
    b = n(84658),
    j = n(974513),
    _ = n(677892),
    v = n(981631),
    O = n(388032),
    C = n(276);
function y(e) {
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
function I(e) {
    let { guildId: t, completed: n } = e,
        l = (0, i.e7)([c.Z], () => c.Z.getEnabled(t)),
        { location: s } = (0, a.O)();
    s.object = n ? v.qAy.ONBOARDING_EDIT : v.qAy.ONBOARDING_REVIEW;
    let d = async function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            l
                ? (await (0, x.$y)(t, !1),
                  g.default.track(
                      v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                      N(y({}, (0, o.hH)(t)), {
                          action_taken: b.W$[b.W$.TOGGLE_DISABLED],
                          location: s
                      })
                  ))
                : (await (0, x.$y)(t, !0),
                  e && (0, f.To)(t, !0),
                  n
                      ? g.default.track(
                            v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                            N(y({}, (0, o.hH)(t)), {
                                action_taken: b.W$[b.W$.TOGGLE_ENABLED],
                                location: s
                            })
                        )
                      : g.default.track(
                            v.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED,
                            N(y({}, (0, o.hH)(t)), {
                                step: b.PG[b.PG.REVIEW],
                                back: !1,
                                skip: !1,
                                completed: !0
                            })
                        ));
        },
        m = () => {
            (g.default.track(
                v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                N(y({}, (0, o.hH)(t)), {
                    action_taken: b.W$[b.W$.PREVIEW],
                    location: s
                })
            ),
                (0, p.di)(t));
        },
        h = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(_.ku, {
                    guildId: t,
                    onEdit: () => {
                        (g.default.track(
                            v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                            N(y({}, (0, o.hH)(t)), {
                                action_taken: b.W$[b.W$.EDIT_DEFAULT_CHANNELS],
                                location: s
                            })
                        ),
                            (0, p.$K)(b.PG.DEFAULT_CHANNELS));
                    },
                    disableGoodStatus: n
                }),
                (0, r.jsx)(u.Z, { className: C.divider }),
                (0, r.jsx)(_.ap, {
                    guildId: t,
                    onEdit: () => {
                        (g.default.track(
                            v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                            N(y({}, (0, o.hH)(t)), {
                                action_taken: b.W$[b.W$.EDIT_CUSTOMIZATION_QUESTIONS],
                                location: s
                            })
                        ),
                            (0, p.$K)(b.PG.CUSTOMIZATION_QUESTIONS));
                    },
                    disableGoodStatus: n
                }),
                (0, r.jsx)(u.Z, { className: C.divider }),
                (0, r.jsx)(_.P_, {
                    guildId: t,
                    onEdit: () => {
                        (g.default.track(
                            v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                            N(y({}, (0, o.hH)(t)), {
                                action_taken: b.W$[b.W$.EDIT_HOME_SETTINGS],
                                location: s
                            })
                        ),
                            (0, p.$K)(b.PG.HOME_SETTINGS));
                    },
                    disableGoodStatus: n
                })
            ]
        });
    return n
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(E, {
                      guildId: t,
                      handlePreview: m
                  }),
                  (0, r.jsx)(S, {}),
                  (0, r.jsxs)('div', {
                      className: C.content,
                      children: [
                          (0, r.jsx)(T, {
                              guildId: t,
                              handleOnboardingToggle: d
                          }),
                          h
                      ]
                  })
              ]
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)('div', {
                      className: C.content,
                      children: [
                          (0, r.jsx)(P, {
                              guildId: t,
                              handleOnboardingToggle: d,
                              handlePreview: m
                          }),
                          h
                      ]
                  }),
                  (0, r.jsx)(w, { guildId: t })
              ]
          });
}
function E(e) {
    let { guildId: t, handlePreview: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.X6q, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                className: C.header,
                children: O.intl.string(O.t.mhxUsL)
            }),
            (0, r.jsx)(s.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: C.subheader,
                children: O.intl.string(O.t.GtWdQE)
            }),
            (0, r.jsxs)('div', {
                className: C.help,
                children: [
                    (0, r.jsx)(s.eee, {
                        target: '_blank',
                        href: v.EYA.GUILD_ONBOARDING_EXAMPLES,
                        children: (0, r.jsx)(s.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-link',
                            children: O.intl.string(O.t.Ok55Ki)
                        })
                    }),
                    (0, r.jsx)('div', { className: C.helpSeparator }),
                    (0, r.jsx)(s.eee, {
                        onClick: n,
                        children: (0, r.jsx)(s.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-link',
                            children: O.intl.string(O.t['6gsjdH'])
                        })
                    }),
                    (0, r.jsx)('div', { className: C.helpSeparator }),
                    (0, r.jsx)(j.Wu, { guildId: t })
                ]
            })
        ]
    });
}
function S() {
    let e = '\u2022 ';
    return (0, r.jsxs)('div', {
        className: C.notice,
        children: [
            (0, r.jsx)('img', {
                className: C.wumpus,
                src: n(33631),
                alt: 'wumpus'
            }),
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: 'heading-md/semibold',
                        color: 'header-primary',
                        className: C.header,
                        children: O.intl.string(O.t.WslWRE)
                    }),
                    (0, r.jsxs)(s.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: [e, O.intl.string(O.t.z9k21N)]
                    }),
                    (0, r.jsxs)(s.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: [e, O.intl.string(O.t.t1LelZ)]
                    })
                ]
            })
        ]
    });
}
function T(e) {
    let { guildId: t, handleOnboardingToggle: n } = e,
        l = (0, _.$$)(t),
        a = (0, i.e7)([c.Z], () => c.Z.getEnabled(t));
    return (0, r.jsxs)('div', {
        className: C.review,
        children: [
            (0, r.jsxs)('div', {
                className: C.reviewHeaderText,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: 'heading-md/semibold',
                        children: a ? O.intl.string(O.t.MBdTCQ) : O.intl.string(O.t.Wslim5)
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: a ? O.intl.string(O.t.LokpLi) : O.intl.string(O.t.nBIyJi)
                    })
                ]
            }),
            (0, r.jsx)(s.rsf, {
                checked: a,
                onChange: () => n(!1),
                disabled: !a && !l
            })
        ]
    });
}
function P(e) {
    let { guildId: t, handleOnboardingToggle: n, handlePreview: a } = e,
        o = (0, _.$$)(t),
        c = (0, i.e7)([h.Z], () => h.Z.getSettings()),
        u = (0, d.uo)(c);
    return (0, r.jsxs)('div', {
        className: C.reviewHeader,
        children: [
            (0, r.jsxs)('div', {
                className: C.reviewHeaderText,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: 'heading-md/semibold',
                        children: o ? O.intl.string(O.t.FcIcT0) : O.intl.string(O.t.R09tJy)
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-xs/normal',
                        children: o ? O.intl.string(O.t.ockHVV) : O.intl.string(O.t['u/ji09'])
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: C.reviewActions,
                children: [
                    (0, r.jsx)(l.zx, {
                        size: l.zx.Sizes.SMALL,
                        color: l.zx.Colors.PRIMARY,
                        look: l.zx.Looks.OUTLINED,
                        onClick: a,
                        children: O.intl.string(O.t['6gsjdH'])
                    }),
                    (0, r.jsx)(s.zxk, {
                        variant: 'primary',
                        size: 'sm',
                        text: O.intl.string(O.t.Yz7hsL),
                        onClick: () => n(u),
                        disabled: !o
                    })
                ]
            })
        ]
    });
}
function w(e) {
    let { guildId: t } = e,
        n = (0, i.e7)([m.Z], () => m.Z.getGuild(t));
    return null == n || n.verificationLevel < v.sFg.VERY_HIGH
        ? null
        : (0, r.jsxs)('div', {
              className: C.rolesWarning,
              children: [
                  (0, r.jsx)(s.P4T, {
                      size: 'xs',
                      color: 'currentColor',
                      className: C.warningIcon
                  }),
                  (0, r.jsx)(s.Text, {
                      variant: 'text-sm/medium',
                      color: 'text-muted',
                      children: O.intl.string(O.t.HVoKZ2)
                  })
              ]
          });
}
