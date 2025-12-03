n.d(t, { Z: () => N });
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(481060),
    a = n(2052),
    s = n(367907),
    o = n(45966),
    c = n(734893),
    u = n(661824),
    d = n(430824),
    g = n(626135),
    m = n(983135),
    p = n(8426),
    f = n(969632),
    h = n(570961),
    b = n(84658),
    x = n(974513),
    j = n(677892),
    _ = n(981631),
    v = n(388032),
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
    c.object = n ? _.qAy.ONBOARDING_EDIT : _.qAy.ONBOARDING_REVIEW;
    let d = async function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            l
                ? (await (0, h.$y)(t, !1),
                  g.default.track(
                      _.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                      y(C({}, (0, s.hH)(t)), {
                          action_taken: b.W$[b.W$.TOGGLE_DISABLED],
                          location: c,
                      }),
                  ))
                : (await (0, h.$y)(t, !0),
                  e && (0, p.To)(t, !0),
                  n
                      ? g.default.track(
                            _.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                            y(C({}, (0, s.hH)(t)), {
                                action_taken: b.W$[b.W$.TOGGLE_ENABLED],
                                location: c,
                            }),
                        )
                      : g.default.track(
                            _.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED,
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
                _.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
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
                            _.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                            y(C({}, (0, s.hH)(t)), {
                                action_taken: b.W$[b.W$.EDIT_DEFAULT_CHANNELS],
                                location: c,
                            }),
                        ),
                            (0, m.$K)(b.PG.DEFAULT_CHANNELS);
                    },
                    disableGoodStatus: n,
                }),
                (0, r.jsx)(u.Z, { className: O.divider }),
                (0, r.jsx)(j.ih, {
                    guildId: t,
                    onEdit: () => {
                        g.default.track(
                            _.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                            y(C({}, (0, s.hH)(t)), {
                                action_taken: b.W$[b.W$.EDIT_CONNECTIONS],
                                location: c,
                            }),
                        ),
                            (0, m.$K)(b.PG.CONNECTIONS);
                    },
                    disableGoodStatus: n,
                }),
                (0, r.jsx)(u.Z, { className: O.divider }),
                (0, r.jsx)(j.ap, {
                    guildId: t,
                    onEdit: () => {
                        g.default.track(
                            _.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                            y(C({}, (0, s.hH)(t)), {
                                action_taken: b.W$[b.W$.EDIT_CUSTOMIZATION_QUESTIONS],
                                location: c,
                            }),
                        ),
                            (0, m.$K)(b.PG.CUSTOMIZATION_QUESTIONS);
                    },
                    disableGoodStatus: n,
                }),
                (0, r.jsx)(u.Z, { className: O.divider }),
                (0, r.jsx)(j.P_, {
                    guildId: t,
                    onEdit: () => {
                        g.default.track(
                            _.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
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
                              handleOnboardingToggle: d,
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
                              handleOnboardingToggle: d,
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
                children: v.intl.string(v.t.mhxUsE),
            }),
            (0, r.jsx)(l.Text, {
                variant: "text-md/normal",
                color: "text-default",
                className: O.subheader,
                children: v.intl.string(v.t.GtWdQH),
            }),
            (0, r.jsxs)("div", {
                className: O.help,
                children: [
                    (0, r.jsx)(l.Anchor, {
                        target: "_blank",
                        href: _.EYA.GUILD_ONBOARDING_EXAMPLES,
                        children: (0, r.jsx)(l.Text, {
                            variant: "text-sm/medium",
                            color: "text-link",
                            children: v.intl.string(v.t.Ok55Kh),
                        }),
                    }),
                    (0, r.jsx)("div", { className: O.helpSeparator }),
                    (0, r.jsx)(l.Anchor, {
                        onClick: n,
                        children: (0, r.jsx)(l.Text, {
                            variant: "text-sm/medium",
                            color: "text-link",
                            children: v.intl.string(v.t["6gsjdM"]),
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
                        children: v.intl.string(v.t.WslWRL),
                    }),
                    (0, r.jsxs)(l.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: [e, v.intl.string(v.t.z9k21H)],
                    }),
                    (0, r.jsxs)(l.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: [e, v.intl.string(v.t.t1Lele)],
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
            label: s ? v.intl.string(v.t.MBdTCZ) : v.intl.string(v.t["Wslim+"]),
            description: s ? v.intl.string(v.t.LokpLi) : v.intl.string(v.t.nBIyJp),
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
        u = (0, c.uo)(o);
    return (0, r.jsxs)("div", {
        className: O.reviewHeader,
        children: [
            (0, r.jsxs)("div", {
                className: O.reviewHeaderText,
                children: [
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-md/semibold",
                        children: s ? v.intl.string(v.t.FcIcT8) : v.intl.string(v.t.R09tJ2),
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-xs/normal",
                        children: s ? v.intl.string(v.t.ockHVS) : v.intl.string(v.t["u/ji07"]),
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
                        text: v.intl.string(v.t["6gsjdM"]),
                    }),
                    (0, r.jsx)(l.Button, {
                        variant: "primary",
                        size: "sm",
                        text: v.intl.string(v.t.Yz7hsB),
                        onClick: () => n(u),
                        disabled: !s,
                    }),
                ],
            }),
        ],
    });
}
function P(e) {
    let { guildId: t } = e,
        n = (0, i.e7)([d.Z], () => d.Z.getGuild(t));
    return null == n || n.verificationLevel < _.sFg.VERY_HIGH
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
                      children: v.intl.string(v.t.HVoKZ5),
                  }),
              ],
          });
}
