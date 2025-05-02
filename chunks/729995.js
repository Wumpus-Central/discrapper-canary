n.d(t, { Z: () => N });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    s = n(2052),
    a = n(367907),
    o = n(45966),
    c = n(734893),
    u = n(661824),
    d = n(430824),
    m = n(626135),
    g = n(983135),
    p = n(8426),
    f = n(969632),
    h = n(570961),
    x = n(84658),
    b = n(974513),
    j = n(677892),
    _ = n(981631),
    v = n(388032),
    O = n(276);
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
function N(e) {
    let { guildId: t, completed: n } = e,
        l = (0, i.e7)([o.Z], () => o.Z.getEnabled(t)),
        { location: c } = (0, s.O)();
    c.object = n ? _.qAy.ONBOARDING_EDIT : _.qAy.ONBOARDING_REVIEW;
    let d = async function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            l
                ? (await (0, h.$y)(t, !1),
                  m.default.track(
                      _.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                      y(C({}, (0, a.hH)(t)), {
                          action_taken: x.W$[x.W$.TOGGLE_DISABLED],
                          location: c
                      })
                  ))
                : (await (0, h.$y)(t, !0),
                  e && (0, p.To)(t, !0),
                  n
                      ? m.default.track(
                            _.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                            y(C({}, (0, a.hH)(t)), {
                                action_taken: x.W$[x.W$.TOGGLE_ENABLED],
                                location: c
                            })
                        )
                      : m.default.track(
                            _.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED,
                            y(C({}, (0, a.hH)(t)), {
                                step: x.PG[x.PG.REVIEW],
                                back: !1,
                                skip: !1,
                                completed: !0
                            })
                        ));
        },
        f = () => {
            m.default.track(
                _.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                y(C({}, (0, a.hH)(t)), {
                    action_taken: x.W$[x.W$.PREVIEW],
                    location: c
                })
            ),
                (0, g.di)(t);
        },
        b = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(j.ku, {
                    guildId: t,
                    onEdit: () => {
                        m.default.track(
                            _.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                            y(C({}, (0, a.hH)(t)), {
                                action_taken: x.W$[x.W$.EDIT_DEFAULT_CHANNELS],
                                location: c
                            })
                        ),
                            (0, g.$K)(x.PG.DEFAULT_CHANNELS);
                    },
                    disableGoodStatus: n
                }),
                (0, r.jsx)(u.Z, { className: O.divider }),
                (0, r.jsx)(j.ap, {
                    guildId: t,
                    onEdit: () => {
                        m.default.track(
                            _.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                            y(C({}, (0, a.hH)(t)), {
                                action_taken: x.W$[x.W$.EDIT_CUSTOMIZATION_QUESTIONS],
                                location: c
                            })
                        ),
                            (0, g.$K)(x.PG.CUSTOMIZATION_QUESTIONS);
                    },
                    disableGoodStatus: n
                }),
                (0, r.jsx)(u.Z, { className: O.divider }),
                (0, r.jsx)(j.P_, {
                    guildId: t,
                    onEdit: () => {
                        m.default.track(
                            _.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                            y(C({}, (0, a.hH)(t)), {
                                action_taken: x.W$[x.W$.EDIT_HOME_SETTINGS],
                                location: c
                            })
                        ),
                            (0, g.$K)(x.PG.HOME_SETTINGS);
                    },
                    disableGoodStatus: n
                })
            ]
        });
    return n
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(I, {
                      guildId: t,
                      handlePreview: f
                  }),
                  (0, r.jsx)(E, {}),
                  (0, r.jsxs)('div', {
                      className: O.content,
                      children: [
                          (0, r.jsx)(S, {
                              guildId: t,
                              handleOnboardingToggle: d
                          }),
                          b
                      ]
                  })
              ]
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)('div', {
                      className: O.content,
                      children: [
                          (0, r.jsx)(T, {
                              guildId: t,
                              handleOnboardingToggle: d,
                              handlePreview: f
                          }),
                          b
                      ]
                  }),
                  (0, r.jsx)(P, { guildId: t })
              ]
          });
}
function I(e) {
    let { guildId: t, handlePreview: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.X6q, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                className: O.header,
                children: v.intl.string(v.t.mhxUsL)
            }),
            (0, r.jsx)(l.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: O.subheader,
                children: v.intl.string(v.t.GtWdQE)
            }),
            (0, r.jsxs)('div', {
                className: O.help,
                children: [
                    (0, r.jsx)(l.eee, {
                        target: '_blank',
                        href: _.EYA.GUILD_ONBOARDING_EXAMPLES,
                        children: (0, r.jsx)(l.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-link',
                            children: v.intl.string(v.t.Ok55Ki)
                        })
                    }),
                    (0, r.jsx)('div', { className: O.helpSeparator }),
                    (0, r.jsx)(l.eee, {
                        onClick: n,
                        children: (0, r.jsx)(l.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-link',
                            children: v.intl.string(v.t['6gsjdH'])
                        })
                    }),
                    (0, r.jsx)('div', { className: O.helpSeparator }),
                    (0, r.jsx)(b.Wu, { guildId: t })
                ]
            })
        ]
    });
}
function E() {
    let e = '\u2022 ';
    return (0, r.jsxs)('div', {
        className: O.notice,
        children: [
            (0, r.jsx)('img', {
                className: O.wumpus,
                src: n(33631),
                alt: 'wumpus'
            }),
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(l.X6q, {
                        variant: 'heading-md/semibold',
                        color: 'header-primary',
                        className: O.header,
                        children: v.intl.string(v.t.WslWRE)
                    }),
                    (0, r.jsxs)(l.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: [e, v.intl.string(v.t.z9k21N)]
                    }),
                    (0, r.jsxs)(l.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: [e, v.intl.string(v.t.t1LelZ)]
                    })
                ]
            })
        ]
    });
}
function S(e) {
    let { guildId: t, handleOnboardingToggle: n } = e,
        s = (0, j.$$)(t),
        a = (0, i.e7)([o.Z], () => o.Z.getEnabled(t));
    return (0, r.jsxs)('div', {
        className: O.review,
        children: [
            (0, r.jsxs)('div', {
                className: O.reviewHeaderText,
                children: [
                    (0, r.jsx)(l.X6q, {
                        variant: 'heading-md/semibold',
                        children: a ? v.intl.string(v.t.MBdTCQ) : v.intl.string(v.t.Wslim5)
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: a ? v.intl.string(v.t.LokpLi) : v.intl.string(v.t.nBIyJi)
                    })
                ]
            }),
            (0, r.jsx)(l.rsf, {
                checked: a,
                onChange: () => n(!1),
                disabled: !a && !s
            })
        ]
    });
}
function T(e) {
    let { guildId: t, handleOnboardingToggle: n, handlePreview: s } = e,
        a = (0, j.$$)(t),
        o = (0, i.e7)([f.Z], () => f.Z.getSettings()),
        u = (0, c.uo)(o);
    return (0, r.jsxs)('div', {
        className: O.reviewHeader,
        children: [
            (0, r.jsxs)('div', {
                className: O.reviewHeaderText,
                children: [
                    (0, r.jsx)(l.X6q, {
                        variant: 'heading-md/semibold',
                        children: a ? v.intl.string(v.t.FcIcT0) : v.intl.string(v.t.R09tJy)
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: 'text-xs/normal',
                        children: a ? v.intl.string(v.t.ockHVV) : v.intl.string(v.t['u/ji09'])
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: O.reviewActions,
                children: [
                    (0, r.jsx)(l.zxk, {
                        size: l.zxk.Sizes.SMALL,
                        color: l.zxk.Colors.PRIMARY,
                        look: l.zxk.Looks.OUTLINED,
                        onClick: s,
                        children: v.intl.string(v.t['6gsjdH'])
                    }),
                    (0, r.jsx)(l.zxk, {
                        size: l.zxk.Sizes.SMALL,
                        color: l.zxk.Colors.BRAND,
                        onClick: () => n(u),
                        disabled: !a,
                        children: v.intl.string(v.t.Yz7hsL)
                    })
                ]
            })
        ]
    });
}
function P(e) {
    let { guildId: t } = e,
        n = (0, i.e7)([d.Z], () => d.Z.getGuild(t));
    return null == n || n.verificationLevel < _.sFg.VERY_HIGH
        ? null
        : (0, r.jsxs)('div', {
              className: O.rolesWarning,
              children: [
                  (0, r.jsx)(l.P4T, {
                      size: 'xs',
                      color: 'currentColor',
                      className: O.warningIcon
                  }),
                  (0, r.jsx)(l.Text, {
                      variant: 'text-sm/medium',
                      color: 'text-muted',
                      children: v.intl.string(v.t.HVoKZ2)
                  })
              ]
          });
}
