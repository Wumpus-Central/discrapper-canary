n.d(t, { Z: () => y });
var r = n(200651);
n(192379);
var i = n(442837),
    s = n(481060),
    a = n(2052),
    l = n(367907),
    o = n(45966),
    c = n(734893),
    d = n(661824),
    u = n(430824),
    m = n(626135),
    g = n(983135),
    p = n(8426),
    h = n(969632),
    f = n(570961),
    b = n(84658),
    x = n(974513),
    j = n(677892),
    N = n(981631),
    _ = n(388032),
    v = n(276);
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
function y(e) {
    let { guildId: t, completed: n } = e,
        s = (0, i.e7)([o.Z], () => o.Z.getEnabled(t)),
        { location: c } = (0, a.O)();
    c.object = n ? N.qAy.ONBOARDING_EDIT : N.qAy.ONBOARDING_REVIEW;
    let u = async function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            s
                ? (await (0, f.$y)(t, !1),
                  m.default.track(
                      N.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                      O(C({}, (0, l.hH)(t)), {
                          action_taken: b.W$[b.W$.TOGGLE_DISABLED],
                          location: c
                      })
                  ))
                : (await (0, f.$y)(t, !0),
                  e && (0, p.To)(t, !0),
                  n
                      ? m.default.track(
                            N.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                            O(C({}, (0, l.hH)(t)), {
                                action_taken: b.W$[b.W$.TOGGLE_ENABLED],
                                location: c
                            })
                        )
                      : m.default.track(
                            N.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED,
                            O(C({}, (0, l.hH)(t)), {
                                step: b.PG[b.PG.REVIEW],
                                back: !1,
                                skip: !1,
                                completed: !0
                            })
                        ));
        },
        h = () => {
            m.default.track(
                N.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                O(C({}, (0, l.hH)(t)), {
                    action_taken: b.W$[b.W$.PREVIEW],
                    location: c
                })
            ),
                (0, g.di)(t);
        },
        x = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(j.ku, {
                    guildId: t,
                    onEdit: () => {
                        m.default.track(
                            N.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                            O(C({}, (0, l.hH)(t)), {
                                action_taken: b.W$[b.W$.EDIT_DEFAULT_CHANNELS],
                                location: c
                            })
                        ),
                            (0, g.$K)(b.PG.DEFAULT_CHANNELS);
                    },
                    disableGoodStatus: n
                }),
                (0, r.jsx)(d.Z, { className: v.divider }),
                (0, r.jsx)(j.ap, {
                    guildId: t,
                    onEdit: () => {
                        m.default.track(
                            N.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                            O(C({}, (0, l.hH)(t)), {
                                action_taken: b.W$[b.W$.EDIT_CUSTOMIZATION_QUESTIONS],
                                location: c
                            })
                        ),
                            (0, g.$K)(b.PG.CUSTOMIZATION_QUESTIONS);
                    },
                    disableGoodStatus: n
                }),
                (0, r.jsx)(d.Z, { className: v.divider }),
                (0, r.jsx)(j.P_, {
                    guildId: t,
                    onEdit: () => {
                        m.default.track(
                            N.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                            O(C({}, (0, l.hH)(t)), {
                                action_taken: b.W$[b.W$.EDIT_HOME_SETTINGS],
                                location: c
                            })
                        ),
                            (0, g.$K)(b.PG.HOME_SETTINGS);
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
                      handlePreview: h
                  }),
                  (0, r.jsx)(E, {}),
                  (0, r.jsxs)('div', {
                      className: v.content,
                      children: [
                          (0, r.jsx)(S, {
                              guildId: t,
                              handleOnboardingToggle: u
                          }),
                          x
                      ]
                  })
              ]
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)('div', {
                      className: v.content,
                      children: [
                          (0, r.jsx)(T, {
                              guildId: t,
                              handleOnboardingToggle: u,
                              handlePreview: h
                          }),
                          x
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
            (0, r.jsx)(s.X6q, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                className: v.header,
                children: _.NW.string(_.t.mhxUsL)
            }),
            (0, r.jsx)(s.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: v.subheader,
                children: _.NW.string(_.t.GtWdQE)
            }),
            (0, r.jsxs)('div', {
                className: v.help,
                children: [
                    (0, r.jsx)(s.eee, {
                        target: '_blank',
                        href: N.EYA.GUILD_ONBOARDING_EXAMPLES,
                        children: (0, r.jsx)(s.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-link',
                            children: _.NW.string(_.t.Ok55Ki)
                        })
                    }),
                    (0, r.jsx)('div', { className: v.helpSeparator }),
                    (0, r.jsx)(s.eee, {
                        onClick: n,
                        children: (0, r.jsx)(s.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-link',
                            children: _.NW.string(_.t['6gsjdH'])
                        })
                    }),
                    (0, r.jsx)('div', { className: v.helpSeparator }),
                    (0, r.jsx)(x.Wu, { guildId: t })
                ]
            })
        ]
    });
}
function E() {
    let e = '\u2022 ';
    return (0, r.jsxs)('div', {
        className: v.notice,
        children: [
            (0, r.jsx)('img', {
                className: v.wumpus,
                src: n(33631),
                alt: 'wumpus'
            }),
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: 'heading-md/semibold',
                        color: 'header-primary',
                        className: v.header,
                        children: _.NW.string(_.t.WslWRE)
                    }),
                    (0, r.jsxs)(s.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: [e, _.NW.string(_.t.z9k21N)]
                    }),
                    (0, r.jsxs)(s.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: [e, _.NW.string(_.t.t1LelZ)]
                    })
                ]
            })
        ]
    });
}
function S(e) {
    let { guildId: t, handleOnboardingToggle: n } = e,
        a = (0, j.$$)(t),
        l = (0, i.e7)([o.Z], () => o.Z.getEnabled(t));
    return (0, r.jsxs)('div', {
        className: v.review,
        children: [
            (0, r.jsxs)('div', {
                className: v.reviewHeaderText,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: 'heading-md/semibold',
                        children: l ? _.NW.string(_.t.MBdTCQ) : _.NW.string(_.t.Wslim5)
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: l ? _.NW.string(_.t.LokpLi) : _.NW.string(_.t.nBIyJi)
                    })
                ]
            }),
            (0, r.jsx)(s.rsf, {
                checked: l,
                onChange: () => n(!1),
                disabled: !l && !a
            })
        ]
    });
}
function T(e) {
    let { guildId: t, handleOnboardingToggle: n, handlePreview: a } = e,
        l = (0, j.$$)(t),
        o = (0, i.e7)([h.Z], () => h.Z.getSettings()),
        d = (0, c.uo)(o);
    return (0, r.jsxs)('div', {
        className: v.reviewHeader,
        children: [
            (0, r.jsxs)('div', {
                className: v.reviewHeaderText,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: 'heading-md/semibold',
                        children: l ? _.NW.string(_.t.FcIcT0) : _.NW.string(_.t.R09tJy)
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-xs/normal',
                        children: l ? _.NW.string(_.t.ockHVV) : _.NW.string(_.t['u/ji09'])
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: v.reviewActions,
                children: [
                    (0, r.jsx)(s.zxk, {
                        size: s.zxk.Sizes.SMALL,
                        color: s.zxk.Colors.PRIMARY,
                        look: s.zxk.Looks.OUTLINED,
                        onClick: a,
                        children: _.NW.string(_.t['6gsjdH'])
                    }),
                    (0, r.jsx)(s.zxk, {
                        size: s.zxk.Sizes.SMALL,
                        color: s.zxk.Colors.BRAND,
                        onClick: () => n(d),
                        disabled: !l,
                        children: _.NW.string(_.t.Yz7hsL)
                    })
                ]
            })
        ]
    });
}
function P(e) {
    let { guildId: t } = e,
        n = (0, i.e7)([u.Z], () => u.Z.getGuild(t));
    return null == n || n.verificationLevel < N.sFg.VERY_HIGH
        ? null
        : (0, r.jsxs)('div', {
              className: v.rolesWarning,
              children: [
                  (0, r.jsx)(s.P4T, {
                      size: 'xs',
                      color: 'currentColor',
                      className: v.warningIcon
                  }),
                  (0, r.jsx)(s.Text, {
                      variant: 'text-sm/medium',
                      color: 'text-muted',
                      children: _.NW.string(_.t.HVoKZ2)
                  })
              ]
          });
}
