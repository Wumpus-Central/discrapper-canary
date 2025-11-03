n.d(t, { Z: () => N });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(481060),
    a = n(2052),
    s = n(367907),
    o = n(45966),
    c = n(734893),
    d = n(661824),
    u = n(430824),
    g = n(626135),
    m = n(983135),
    p = n(8426),
    f = n(969632),
    h = n(570961),
    b = n(84658),
    x = n(974513),
    j = n(677892),
    v = n(981631),
    _ = n(388032),
    O = n(820983);
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
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
        { location: c } = (0, a.O)();
    c.object = n ? v.qAy.ONBOARDING_EDIT : v.qAy.ONBOARDING_REVIEW;
    let u = async function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            l
                ? (await (0, h.$y)(t, !1),
                  g.default.track(
                      v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                      y(C({}, (0, s.hH)(t)), {
                          action_taken: b.W$[b.W$.TOGGLE_DISABLED],
                          location: c,
                      }),
                  ))
                : (await (0, h.$y)(t, !0),
                  e && (0, p.To)(t, !0),
                  n
                      ? g.default.track(
                            v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                            y(C({}, (0, s.hH)(t)), {
                                action_taken: b.W$[b.W$.TOGGLE_ENABLED],
                                location: c,
                            }),
                        )
                      : g.default.track(
                            v.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED,
                            y(C({}, (0, s.hH)(t)), {
                                step: b.PG[b.PG.REVIEW],
                                back: !1,
                                skip: !1,
                                completed: !0,
                            }),
                        ));
        },
        f = () => {
            g.default.track(
                v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                y(C({}, (0, s.hH)(t)), {
                    action_taken: b.W$[b.W$.PREVIEW],
                    location: c,
                }),
            ),
                (0, m.di)(t);
        },
        x = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(j.ku, {
                    guildId: t,
                    onEdit: () => {
                        g.default.track(
                            v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                            y(C({}, (0, s.hH)(t)), {
                                action_taken: b.W$[b.W$.EDIT_DEFAULT_CHANNELS],
                                location: c,
                            }),
                        ),
                            (0, m.$K)(b.PG.DEFAULT_CHANNELS);
                    },
                    disableGoodStatus: n,
                }),
                (0, r.jsx)(d.Z, { className: O.divider }),
                (0, r.jsx)(j.ih, {
                    guildId: t,
                    onEdit: () => {
                        g.default.track(
                            v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                            y(C({}, (0, s.hH)(t)), {
                                action_taken: b.W$[b.W$.EDIT_CONNECTIONS],
                                location: c,
                            }),
                        ),
                            (0, m.$K)(b.PG.CONNECTIONS);
                    },
                    disableGoodStatus: n,
                }),
                (0, r.jsx)(d.Z, { className: O.divider }),
                (0, r.jsx)(j.ap, {
                    guildId: t,
                    onEdit: () => {
                        g.default.track(
                            v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                            y(C({}, (0, s.hH)(t)), {
                                action_taken: b.W$[b.W$.EDIT_CUSTOMIZATION_QUESTIONS],
                                location: c,
                            }),
                        ),
                            (0, m.$K)(b.PG.CUSTOMIZATION_QUESTIONS);
                    },
                    disableGoodStatus: n,
                }),
                (0, r.jsx)(d.Z, { className: O.divider }),
                (0, r.jsx)(j.P_, {
                    guildId: t,
                    onEdit: () => {
                        g.default.track(
                            v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                            y(C({}, (0, s.hH)(t)), {
                                action_taken: b.W$[b.W$.EDIT_HOME_SETTINGS],
                                location: c,
                            }),
                        ),
                            (0, m.$K)(b.PG.HOME_SETTINGS);
                    },
                    disableGoodStatus: n,
                }),
            ],
        });
    return n
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(E, {
                      guildId: t,
                      handlePreview: f,
                  }),
                  (0, r.jsx)(I, {}),
                  (0, r.jsxs)("div", {
                      className: O.content,
                      children: [
                          (0, r.jsx)(S, {
                              guildId: t,
                              handleOnboardingToggle: u,
                          }),
                          x,
                      ],
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: O.content,
                      children: [
                          (0, r.jsx)(T, {
                              guildId: t,
                              handleOnboardingToggle: u,
                              handlePreview: f,
                          }),
                          x,
                      ],
                  }),
                  (0, r.jsx)(P, { guildId: t }),
              ],
          });
}
function E(e) {
    let { guildId: t, handlePreview: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.Heading, {
                variant: "heading-lg/semibold",
                color: "header-primary",
                className: O.header,
                children: _.intl.string(_.t.mhxUsE),
            }),
            (0, r.jsx)(l.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                className: O.subheader,
                children: _.intl.string(_.t.GtWdQH),
            }),
            (0, r.jsxs)("div", {
                className: O.help,
                children: [
                    (0, r.jsx)(l.Anchor, {
                        target: "_blank",
                        href: v.EYA.GUILD_ONBOARDING_EXAMPLES,
                        children: (0, r.jsx)(l.Text, {
                            variant: "text-sm/medium",
                            color: "text-link",
                            children: _.intl.string(_.t.Ok55Kh),
                        }),
                    }),
                    (0, r.jsx)("div", { className: O.helpSeparator }),
                    (0, r.jsx)(l.Anchor, {
                        onClick: n,
                        children: (0, r.jsx)(l.Text, {
                            variant: "text-sm/medium",
                            color: "text-link",
                            children: _.intl.string(_.t["6gsjdM"]),
                        }),
                    }),
                    (0, r.jsx)("div", { className: O.helpSeparator }),
                    (0, r.jsx)(x.Wu, { guildId: t }),
                ],
            }),
        ],
    });
}
function I() {
    let e = "\u2022 ";
    return (0, r.jsxs)("div", {
        className: O.notice,
        children: [
            (0, r.jsx)("img", {
                className: O.wumpus,
                src: n(33631),
                alt: "wumpus",
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-md/semibold",
                        color: "header-primary",
                        className: O.header,
                        children: _.intl.string(_.t.WslWRL),
                    }),
                    (0, r.jsxs)(l.Text, {
                        variant: "text-sm/medium",
                        color: "header-secondary",
                        children: [e, _.intl.string(_.t.z9k21H)],
                    }),
                    (0, r.jsxs)(l.Text, {
                        variant: "text-sm/medium",
                        color: "header-secondary",
                        children: [e, _.intl.string(_.t.t1Lele)],
                    }),
                ],
            }),
        ],
    });
}
function S(e) {
    let { guildId: t, handleOnboardingToggle: n } = e,
        a = (0, j.$$)(t),
        s = (0, i.e7)([o.Z], () => o.Z.getEnabled(t));
    return (0, r.jsx)("div", {
        className: O.review,
        children: (0, r.jsx)(l.rsf, {
            label: s ? _.intl.string(_.t.MBdTCZ) : _.intl.string(_.t["Wslim+"]),
            description: s ? _.intl.string(_.t.LokpLi) : _.intl.string(_.t.nBIyJp),
            checked: s,
            onChange: () => n(!1),
            disabled: !s && !a,
        }),
    });
}
function T(e) {
    let { guildId: t, handleOnboardingToggle: n, handlePreview: a } = e,
        s = (0, j.$$)(t),
        o = (0, i.e7)([f.Z], () => f.Z.getSettings()),
        d = (0, c.uo)(o);
    return (0, r.jsxs)("div", {
        className: O.reviewHeader,
        children: [
            (0, r.jsxs)("div", {
                className: O.reviewHeaderText,
                children: [
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-md/semibold",
                        children: s ? _.intl.string(_.t.FcIcT8) : _.intl.string(_.t.R09tJ2),
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-xs/normal",
                        children: s ? _.intl.string(_.t.ockHVS) : _.intl.string(_.t["u/ji07"]),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: O.reviewActions,
                children: [
                    (0, r.jsx)(l.Button, {
                        size: "sm",
                        variant: "secondary",
                        onClick: a,
                        text: _.intl.string(_.t["6gsjdM"]),
                    }),
                    (0, r.jsx)(l.Button, {
                        variant: "primary",
                        size: "sm",
                        text: _.intl.string(_.t.Yz7hsB),
                        onClick: () => n(d),
                        disabled: !s,
                    }),
                ],
            }),
        ],
    });
}
function P(e) {
    let { guildId: t } = e,
        n = (0, i.e7)([u.Z], () => u.Z.getGuild(t));
    return null == n || n.verificationLevel < v.sFg.VERY_HIGH
        ? null
        : (0, r.jsxs)("div", {
              className: O.rolesWarning,
              children: [
                  (0, r.jsx)(l.Mgn, {
                      size: "xs",
                      color: "currentColor",
                      className: O.warningIcon,
                  }),
                  (0, r.jsx)(l.Text, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      children: _.intl.string(_.t.HVoKZ5),
                  }),
              ],
          });
}
