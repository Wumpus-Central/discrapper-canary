n.d(t, { Z: () => I });
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
    _ = n(84658),
    C = n(974513),
    f = n(677892),
    v = n(981631),
    N = n(388032),
    j = n(240921);
function I(e) {
    let { guildId: t, completed: n } = e,
        l = (0, r.e7)([o.Z], () => o.Z.getEnabled(t)),
        { location: c } = (0, s.O)();
    c.object = n ? v.qAy.ONBOARDING_EDIT : v.qAy.ONBOARDING_REVIEW;
    let u = async function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            l
                ? (await (0, p.$y)(t, !1),
                  m.default.track(v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
                      ...(0, a.hH)(t),
                      action_taken: _.W$[_.W$.TOGGLE_DISABLED],
                      location: c
                  }))
                : (await (0, p.$y)(t, !0),
                  e && (0, g.To)(t, !0),
                  n
                      ? m.default.track(v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
                            ...(0, a.hH)(t),
                            action_taken: _.W$[_.W$.TOGGLE_ENABLED],
                            location: c
                        })
                      : m.default.track(v.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, {
                            ...(0, a.hH)(t),
                            step: _.PG[_.PG.REVIEW],
                            back: !1,
                            skip: !1,
                            completed: !0
                        }));
        },
        x = () => {
            m.default.track(v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
                ...(0, a.hH)(t),
                action_taken: _.W$[_.W$.PREVIEW],
                location: c
            }),
                (0, h.di)(t);
        },
        C = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(f.ku, {
                    guildId: t,
                    onEdit: () => {
                        m.default.track(v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
                            ...(0, a.hH)(t),
                            action_taken: _.W$[_.W$.EDIT_DEFAULT_CHANNELS],
                            location: c
                        }),
                            (0, h.$K)(_.PG.DEFAULT_CHANNELS);
                    },
                    disableGoodStatus: n
                }),
                (0, i.jsx)(d.Z, { className: j.divider }),
                (0, i.jsx)(f.ap, {
                    guildId: t,
                    onEdit: () => {
                        m.default.track(v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
                            ...(0, a.hH)(t),
                            action_taken: _.W$[_.W$.EDIT_CUSTOMIZATION_QUESTIONS],
                            location: c
                        }),
                            (0, h.$K)(_.PG.CUSTOMIZATION_QUESTIONS);
                    },
                    disableGoodStatus: n
                }),
                (0, i.jsx)(d.Z, { className: j.divider }),
                (0, i.jsx)(f.P_, {
                    guildId: t,
                    onEdit: () => {
                        m.default.track(v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
                            ...(0, a.hH)(t),
                            action_taken: _.W$[_.W$.EDIT_HOME_SETTINGS],
                            location: c
                        }),
                            (0, h.$K)(_.PG.HOME_SETTINGS);
                    },
                    disableGoodStatus: n
                })
            ]
        });
    return n
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(E, {
                      guildId: t,
                      handlePreview: x
                  }),
                  (0, i.jsx)(b, {}),
                  (0, i.jsxs)('div', {
                      className: j.content,
                      children: [
                          (0, i.jsx)(T, {
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
                      className: j.content,
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
function E(e) {
    let { guildId: t, handlePreview: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.X6q, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                className: j.header,
                children: N.intl.string(N.t.mhxUsL)
            }),
            (0, i.jsx)(l.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: j.subheader,
                children: N.intl.string(N.t.GtWdQE)
            }),
            (0, i.jsxs)('div', {
                className: j.help,
                children: [
                    (0, i.jsx)(l.eee, {
                        target: '_blank',
                        href: v.EYA.GUILD_ONBOARDING_EXAMPLES,
                        children: (0, i.jsx)(l.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-link',
                            children: N.intl.string(N.t.Ok55Ki)
                        })
                    }),
                    (0, i.jsx)('div', { className: j.helpSeparator }),
                    (0, i.jsx)(l.eee, {
                        onClick: n,
                        children: (0, i.jsx)(l.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-link',
                            children: N.intl.string(N.t['6gsjdH'])
                        })
                    }),
                    (0, i.jsx)('div', { className: j.helpSeparator }),
                    (0, i.jsx)(C.Wu, { guildId: t })
                ]
            })
        ]
    });
}
function b() {
    let e = '\u2022 ';
    return (0, i.jsxs)('div', {
        className: j.notice,
        children: [
            (0, i.jsx)('img', {
                className: j.wumpus,
                src: n(33631),
                alt: 'wumpus'
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(l.X6q, {
                        variant: 'heading-md/semibold',
                        color: 'header-primary',
                        className: j.header,
                        children: N.intl.string(N.t.WslWRE)
                    }),
                    (0, i.jsxs)(l.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: [e, N.intl.string(N.t.z9k21N)]
                    }),
                    (0, i.jsxs)(l.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: [e, N.intl.string(N.t.t1LelZ)]
                    })
                ]
            })
        ]
    });
}
function T(e) {
    let { guildId: t, handleOnboardingToggle: n } = e,
        s = (0, f.$$)(t),
        a = (0, r.e7)([o.Z], () => o.Z.getEnabled(t));
    return (0, i.jsxs)('div', {
        className: j.review,
        children: [
            (0, i.jsxs)('div', {
                className: j.reviewHeaderText,
                children: [
                    (0, i.jsx)(l.X6q, {
                        variant: 'heading-md/semibold',
                        children: a ? N.intl.string(N.t.MBdTCQ) : N.intl.string(N.t.Wslim5)
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: a ? N.intl.string(N.t.LokpLi) : N.intl.string(N.t.nBIyJi)
                    })
                ]
            }),
            (0, i.jsx)(l.rsf, {
                checked: a,
                onChange: () => n(!1),
                disabled: !a && !s
            })
        ]
    });
}
function S(e) {
    let { guildId: t, handleOnboardingToggle: n, handlePreview: s } = e,
        a = (0, f.$$)(t),
        o = (0, r.e7)([x.Z], () => x.Z.getSettings()),
        d = (0, c.uo)(o);
    return (0, i.jsxs)('div', {
        className: j.reviewHeader,
        children: [
            (0, i.jsxs)('div', {
                className: j.reviewHeaderText,
                children: [
                    (0, i.jsx)(l.X6q, {
                        variant: 'heading-md/semibold',
                        children: a ? N.intl.string(N.t.FcIcT0) : N.intl.string(N.t.R09tJy)
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-xs/normal',
                        children: a ? N.intl.string(N.t.ockHVV) : N.intl.string(N.t['u/ji09'])
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: j.reviewActions,
                children: [
                    (0, i.jsx)(l.zxk, {
                        size: l.zxk.Sizes.SMALL,
                        color: l.zxk.Colors.PRIMARY,
                        look: l.zxk.Looks.OUTLINED,
                        onClick: s,
                        children: N.intl.string(N.t['6gsjdH'])
                    }),
                    (0, i.jsx)(l.zxk, {
                        size: l.zxk.Sizes.SMALL,
                        color: l.zxk.Colors.BRAND,
                        onClick: () => n(d),
                        disabled: !a,
                        children: N.intl.string(N.t.Yz7hsL)
                    })
                ]
            })
        ]
    });
}
function R(e) {
    let { guildId: t } = e,
        n = (0, r.e7)([u.Z], () => u.Z.getGuild(t));
    return null == n || n.verificationLevel < v.sFg.VERY_HIGH
        ? null
        : (0, i.jsxs)('div', {
              className: j.rolesWarning,
              children: [
                  (0, i.jsx)(l.P4T, {
                      size: 'xs',
                      color: 'currentColor',
                      className: j.warningIcon
                  }),
                  (0, i.jsx)(l.Text, {
                      variant: 'text-sm/medium',
                      color: 'text-muted',
                      children: N.intl.string(N.t.HVoKZ2)
                  })
              ]
          });
}
