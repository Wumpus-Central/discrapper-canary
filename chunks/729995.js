n.d(t, { Z: () => E });
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(481060),
    a = n(2052),
    s = n(367907),
    o = n(45966),
    c = n(734893),
    d = n(661824),
    u = n(430824),
    g = n(626135),
    f = n(983135),
    m = n(8426),
    b = n(969632),
    p = n(570961),
    h = n(84658),
    x = n(974513),
    j = n(677892),
    v = n(981631),
    O = n(388032),
    C = n(199368);
function y(e) {
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
function E(e) {
    let { guildId: t, completed: n } = e,
        l = (0, i.e7)([o.Z], () => o.Z.getEnabled(t)),
        { location: c } = (0, a.O)();
    c.object = n ? v.qAy.ONBOARDING_EDIT : v.qAy.ONBOARDING_REVIEW;
    let u = async function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            l
                ? (await (0, p.$y)(t, !1),
                  g.default.track(
                      v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                      N(y({}, (0, s.hH)(t)), {
                          action_taken: h.W$[h.W$.TOGGLE_DISABLED],
                          location: c,
                      }),
                  ))
                : (await (0, p.$y)(t, !0),
                  e && (0, m.To)(t, !0),
                  n
                      ? g.default.track(
                            v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                            N(y({}, (0, s.hH)(t)), {
                                action_taken: h.W$[h.W$.TOGGLE_ENABLED],
                                location: c,
                            }),
                        )
                      : g.default.track(
                            v.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED,
                            N(y({}, (0, s.hH)(t)), {
                                step: h.PG[h.PG.REVIEW],
                                back: !1,
                                skip: !1,
                                completed: !0,
                            }),
                        ));
        },
        b = () => {
            g.default.track(
                v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                N(y({}, (0, s.hH)(t)), {
                    action_taken: h.W$[h.W$.PREVIEW],
                    location: c,
                }),
            ),
                (0, f.di)(t);
        },
        x = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(j.ku, {
                    guildId: t,
                    onEdit: () => {
                        g.default.track(
                            v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                            N(y({}, (0, s.hH)(t)), {
                                action_taken: h.W$[h.W$.EDIT_DEFAULT_CHANNELS],
                                location: c,
                            }),
                        ),
                            (0, f.$K)(h.PG.DEFAULT_CHANNELS);
                    },
                    disableGoodStatus: n,
                }),
                (0, r.jsx)(d.Z, { className: C.divider }),
                (0, r.jsx)(j.ih, {
                    guildId: t,
                    onEdit: () => {
                        g.default.track(
                            v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                            N(y({}, (0, s.hH)(t)), {
                                action_taken: h.W$[h.W$.EDIT_CONNECTIONS],
                                location: c,
                            }),
                        ),
                            (0, f.$K)(h.PG.CONNECTIONS);
                    },
                    disableGoodStatus: n,
                }),
                (0, r.jsx)(d.Z, { className: C.divider }),
                (0, r.jsx)(j.ap, {
                    guildId: t,
                    onEdit: () => {
                        g.default.track(
                            v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                            N(y({}, (0, s.hH)(t)), {
                                action_taken: h.W$[h.W$.EDIT_CUSTOMIZATION_QUESTIONS],
                                location: c,
                            }),
                        ),
                            (0, f.$K)(h.PG.CUSTOMIZATION_QUESTIONS);
                    },
                    disableGoodStatus: n,
                }),
                (0, r.jsx)(d.Z, { className: C.divider }),
                (0, r.jsx)(j.P_, {
                    guildId: t,
                    onEdit: () => {
                        g.default.track(
                            v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                            N(y({}, (0, s.hH)(t)), {
                                action_taken: h.W$[h.W$.EDIT_HOME_SETTINGS],
                                location: c,
                            }),
                        ),
                            (0, f.$K)(h.PG.HOME_SETTINGS);
                    },
                    disableGoodStatus: n,
                }),
            ],
        });
    return n
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(I, {
                      guildId: t,
                      handlePreview: b,
                  }),
                  (0, r.jsx)(S, {}),
                  (0, r.jsxs)("div", {
                      className: C.content,
                      children: [
                          (0, r.jsx)(_, {
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
                      className: C.content,
                      children: [
                          (0, r.jsx)(T, {
                              guildId: t,
                              handleOnboardingToggle: u,
                              handlePreview: b,
                          }),
                          x,
                      ],
                  }),
                  (0, r.jsx)(P, { guildId: t }),
              ],
          });
}
function I(e) {
    let { guildId: t, handlePreview: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                className: C.header,
                children: O.intl.string(O.t.mhxUsE),
            }),
            (0, r.jsx)(l.Text, {
                variant: "text-md/normal",
                color: "text-default",
                className: C.subheader,
                children: O.intl.string(O.t.GtWdQH),
            }),
            (0, r.jsxs)("div", {
                className: C.help,
                children: [
                    (0, r.jsx)(l.eee, {
                        target: "_blank",
                        href: v.EYA.GUILD_ONBOARDING_EXAMPLES,
                        children: (0, r.jsx)(l.Text, {
                            variant: "text-sm/medium",
                            color: "text-link",
                            children: O.intl.string(O.t.Ok55Kh),
                        }),
                    }),
                    (0, r.jsx)("div", { className: C.helpSeparator }),
                    (0, r.jsx)(l.eee, {
                        onClick: n,
                        children: (0, r.jsx)(l.Text, {
                            variant: "text-sm/medium",
                            color: "text-link",
                            children: O.intl.string(O.t["6gsjdM"]),
                        }),
                    }),
                    (0, r.jsx)("div", { className: C.helpSeparator }),
                    (0, r.jsx)(x.Wu, { guildId: t }),
                ],
            }),
        ],
    });
}
function S() {
    let e = "\u2022 ";
    return (0, r.jsxs)("div", {
        className: C.notice,
        children: [
            (0, r.jsx)("img", {
                className: C.wumpus,
                src: n(33631),
                alt: "wumpus",
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        className: C.header,
                        children: O.intl.string(O.t.WslWRL),
                    }),
                    (0, r.jsxs)(l.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: [e, O.intl.string(O.t.z9k21H)],
                    }),
                    (0, r.jsxs)(l.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: [e, O.intl.string(O.t.t1Lele)],
                    }),
                ],
            }),
        ],
    });
}
function _(e) {
    let { guildId: t, handleOnboardingToggle: n } = e,
        a = (0, j.$$)(t),
        s = (0, i.e7)([o.Z], () => o.Z.getEnabled(t));
    return (0, r.jsx)("div", {
        className: C.review,
        children: (0, r.jsx)(l.rsf, {
            label: s ? O.intl.string(O.t.MBdTCZ) : O.intl.string(O.t["Wslim+"]),
            description: s ? O.intl.string(O.t.LokpLi) : O.intl.string(O.t.nBIyJp),
            checked: s,
            onChange: () => n(!1),
            disabled: !s && !a,
        }),
    });
}
function T(e) {
    let { guildId: t, handleOnboardingToggle: n, handlePreview: a } = e,
        s = (0, j.$$)(t),
        o = (0, i.e7)([b.Z], () => b.Z.getSettings()),
        d = (0, c.uo)(o);
    return (0, r.jsxs)("div", {
        className: C.reviewHeader,
        children: [
            (0, r.jsxs)("div", {
                className: C.reviewHeaderText,
                children: [
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-md/semibold",
                        children: s ? O.intl.string(O.t.FcIcT8) : O.intl.string(O.t.R09tJ2),
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-xs/normal",
                        children: s ? O.intl.string(O.t.ockHVS) : O.intl.string(O.t["u/ji07"]),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: C.reviewActions,
                children: [
                    (0, r.jsx)(l.Button, {
                        size: "sm",
                        variant: "secondary",
                        onClick: a,
                        text: O.intl.string(O.t["6gsjdM"]),
                    }),
                    (0, r.jsx)(l.Button, {
                        variant: "primary",
                        size: "sm",
                        text: O.intl.string(O.t.Yz7hsB),
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
              className: C.rolesWarning,
              children: [
                  (0, r.jsx)(l.Mgn, {
                      size: "xs",
                      color: "currentColor",
                      className: C.warningIcon,
                  }),
                  (0, r.jsx)(l.Text, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      children: O.intl.string(O.t.HVoKZ5),
                  }),
              ],
          });
}
