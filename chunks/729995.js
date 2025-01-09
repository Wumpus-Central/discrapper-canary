n.d(t, {
    Z: function () {
        return T;
    }
});
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    s = n(2052),
    a = n(367907),
    o = n(45966),
    c = n(734893),
    d = n(661824),
    u = n(430824),
    m = n(626135),
    h = n(983135),
    g = n(8426),
    x = n(969632),
    p = n(570961),
    f = n(84658),
    C = n(974513),
    v = n(677892),
    N = n(981631),
    _ = n(388032),
    I = n(240921);
function T(e) {
    let { guildId: t, completed: n } = e,
        l = (0, r.e7)([o.Z], () => o.Z.getEnabled(t)),
        { location: c } = (0, s.O)();
    c.object = n ? N.qAy.ONBOARDING_EDIT : N.qAy.ONBOARDING_REVIEW;
    let u = async function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            l
                ? (await (0, p.$y)(t, !1),
                  m.default.track(N.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
                      ...(0, a.hH)(t),
                      action_taken: f.W$[f.W$.TOGGLE_DISABLED],
                      location: c
                  }))
                : (await (0, p.$y)(t, !0),
                  e && (0, g.To)(t, !0),
                  n
                      ? m.default.track(N.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
                            ...(0, a.hH)(t),
                            action_taken: f.W$[f.W$.TOGGLE_ENABLED],
                            location: c
                        })
                      : m.default.track(N.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, {
                            ...(0, a.hH)(t),
                            step: f.PG[f.PG.REVIEW],
                            back: !1,
                            skip: !1,
                            completed: !0
                        }));
        },
        x = () => {
            m.default.track(N.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
                ...(0, a.hH)(t),
                action_taken: f.W$[f.W$.PREVIEW],
                location: c
            }),
                (0, h.di)(t);
        },
        C = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(v.ku, {
                    guildId: t,
                    onEdit: () => {
                        m.default.track(N.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
                            ...(0, a.hH)(t),
                            action_taken: f.W$[f.W$.EDIT_DEFAULT_CHANNELS],
                            location: c
                        }),
                            (0, h.$K)(f.PG.DEFAULT_CHANNELS);
                    },
                    disableGoodStatus: n
                }),
                (0, i.jsx)(d.Z, { className: I.divider }),
                (0, i.jsx)(v.ap, {
                    guildId: t,
                    onEdit: () => {
                        m.default.track(N.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
                            ...(0, a.hH)(t),
                            action_taken: f.W$[f.W$.EDIT_CUSTOMIZATION_QUESTIONS],
                            location: c
                        }),
                            (0, h.$K)(f.PG.CUSTOMIZATION_QUESTIONS);
                    },
                    disableGoodStatus: n
                }),
                (0, i.jsx)(d.Z, { className: I.divider }),
                (0, i.jsx)(v.P_, {
                    guildId: t,
                    onEdit: () => {
                        m.default.track(N.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
                            ...(0, a.hH)(t),
                            action_taken: f.W$[f.W$.EDIT_HOME_SETTINGS],
                            location: c
                        }),
                            (0, h.$K)(f.PG.HOME_SETTINGS);
                    },
                    disableGoodStatus: n
                })
            ]
        });
    return n
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(j, {
                      guildId: t,
                      handlePreview: x
                  }),
                  (0, i.jsx)(b, {}),
                  (0, i.jsxs)('div', {
                      className: I.content,
                      children: [
                          (0, i.jsx)(E, {
                              guildId: t,
                              handleOnboardingToggle: u
                          }),
                          C
                      ]
                  })
              ]
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)('div', {
                      className: I.content,
                      children: [
                          (0, i.jsx)(S, {
                              guildId: t,
                              handleOnboardingToggle: u,
                              handlePreview: x
                          }),
                          C
                      ]
                  }),
                  (0, i.jsx)(R, { guildId: t })
              ]
          });
}
function j(e) {
    let { guildId: t, handlePreview: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.Heading, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                className: I.header,
                children: _.intl.string(_.t.mhxUsL)
            }),
            (0, i.jsx)(l.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: I.subheader,
                children: _.intl.string(_.t.GtWdQE)
            }),
            (0, i.jsxs)('div', {
                className: I.help,
                children: [
                    (0, i.jsx)(l.Anchor, {
                        target: '_blank',
                        href: N.EYA.GUILD_ONBOARDING_EXAMPLES,
                        children: (0, i.jsx)(l.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-link',
                            children: _.intl.string(_.t.Ok55Ki)
                        })
                    }),
                    (0, i.jsx)('div', { className: I.helpSeparator }),
                    (0, i.jsx)(l.Anchor, {
                        onClick: n,
                        children: (0, i.jsx)(l.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-link',
                            children: _.intl.string(_.t['6gsjdH'])
                        })
                    }),
                    (0, i.jsx)('div', { className: I.helpSeparator }),
                    (0, i.jsx)(C.Wu, { guildId: t })
                ]
            })
        ]
    });
}
function b() {
    let e = '\u2022 ';
    return (0, i.jsxs)('div', {
        className: I.notice,
        children: [
            (0, i.jsx)('img', {
                className: I.wumpus,
                src: n(33631),
                alt: 'wumpus'
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(l.Heading, {
                        variant: 'heading-md/semibold',
                        color: 'header-primary',
                        className: I.header,
                        children: _.intl.string(_.t.WslWRE)
                    }),
                    (0, i.jsxs)(l.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: [e, _.intl.string(_.t.z9k21N)]
                    }),
                    (0, i.jsxs)(l.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: [e, _.intl.string(_.t.t1LelZ)]
                    })
                ]
            })
        ]
    });
}
function E(e) {
    let { guildId: t, handleOnboardingToggle: n } = e,
        s = (0, v.$$)(t),
        a = (0, r.e7)([o.Z], () => o.Z.getEnabled(t));
    return (0, i.jsxs)('div', {
        className: I.review,
        children: [
            (0, i.jsxs)('div', {
                className: I.reviewHeaderText,
                children: [
                    (0, i.jsx)(l.Heading, {
                        variant: 'heading-md/semibold',
                        children: a ? _.intl.string(_.t.MBdTCQ) : _.intl.string(_.t.Wslim5)
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: a ? _.intl.string(_.t.LokpLi) : _.intl.string(_.t.nBIyJi)
                    })
                ]
            }),
            (0, i.jsx)(l.Switch, {
                checked: a,
                onChange: () => n(!1),
                disabled: !a && !s
            })
        ]
    });
}
function S(e) {
    let { guildId: t, handleOnboardingToggle: n, handlePreview: s } = e,
        a = (0, v.$$)(t),
        o = (0, r.e7)([x.Z], () => x.Z.getSettings()),
        d = (0, c.uo)(o);
    return (0, i.jsxs)('div', {
        className: I.reviewHeader,
        children: [
            (0, i.jsxs)('div', {
                className: I.reviewHeaderText,
                children: [
                    (0, i.jsx)(l.Heading, {
                        variant: 'heading-md/semibold',
                        children: a ? _.intl.string(_.t.FcIcT0) : _.intl.string(_.t.R09tJy)
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-xs/normal',
                        children: a ? _.intl.string(_.t.ockHVV) : _.intl.string(_.t['u/ji09'])
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: I.reviewActions,
                children: [
                    (0, i.jsx)(l.Button, {
                        size: l.Button.Sizes.SMALL,
                        color: l.Button.Colors.PRIMARY,
                        look: l.Button.Looks.OUTLINED,
                        onClick: s,
                        children: _.intl.string(_.t['6gsjdH'])
                    }),
                    (0, i.jsx)(l.Button, {
                        size: l.Button.Sizes.SMALL,
                        color: l.Button.Colors.BRAND,
                        onClick: () => n(d),
                        disabled: !a,
                        children: _.intl.string(_.t.Yz7hsL)
                    })
                ]
            })
        ]
    });
}
function R(e) {
    let { guildId: t } = e,
        n = (0, r.e7)([u.Z], () => u.Z.getGuild(t));
    return null == n || n.verificationLevel < N.sFg.VERY_HIGH
        ? null
        : (0, i.jsxs)('div', {
              className: I.rolesWarning,
              children: [
                  (0, i.jsx)(l.CircleWarningIcon, {
                      size: 'xs',
                      color: 'currentColor',
                      className: I.warningIcon
                  }),
                  (0, i.jsx)(l.Text, {
                      variant: 'text-sm/medium',
                      color: 'text-muted',
                      children: _.intl.string(_.t.HVoKZ2)
                  })
              ]
          });
}
