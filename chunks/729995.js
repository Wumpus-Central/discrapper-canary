n.d(t, { Z: () => E });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(755721),
    a = n(481060),
    s = n(2052),
    o = n(367907),
    c = n(45966),
    d = n(734893),
    u = n(661824),
    m = n(430824),
    g = n(626135),
    p = n(983135),
    f = n(8426),
    h = n(969632),
    b = n(570961),
    x = n(84658),
    j = n(974513),
    _ = n(677892),
    v = n(981631),
    O = n(388032),
    y = n(820983);
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
        l = (0, i.e7)([c.Z], () => c.Z.getEnabled(t)),
        { location: a } = (0, s.O)();
    a.object = n ? v.qAy.ONBOARDING_EDIT : v.qAy.ONBOARDING_REVIEW;
    let d = async function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            l
                ? (await (0, b.$y)(t, !1),
                  g.default.track(
                      v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                      N(C({}, (0, o.hH)(t)), {
                          action_taken: x.W$[x.W$.TOGGLE_DISABLED],
                          location: a,
                      }),
                  ))
                : (await (0, b.$y)(t, !0),
                  e && (0, f.To)(t, !0),
                  n
                      ? g.default.track(
                            v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                            N(C({}, (0, o.hH)(t)), {
                                action_taken: x.W$[x.W$.TOGGLE_ENABLED],
                                location: a,
                            }),
                        )
                      : g.default.track(
                            v.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED,
                            N(C({}, (0, o.hH)(t)), {
                                step: x.PG[x.PG.REVIEW],
                                back: !1,
                                skip: !1,
                                completed: !0,
                            }),
                        ));
        },
        m = () => {
            g.default.track(
                v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                N(C({}, (0, o.hH)(t)), {
                    action_taken: x.W$[x.W$.PREVIEW],
                    location: a,
                }),
            ),
                (0, p.di)(t);
        },
        h = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(_.ku, {
                    guildId: t,
                    onEdit: () => {
                        g.default.track(
                            v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                            N(C({}, (0, o.hH)(t)), {
                                action_taken: x.W$[x.W$.EDIT_DEFAULT_CHANNELS],
                                location: a,
                            }),
                        ),
                            (0, p.$K)(x.PG.DEFAULT_CHANNELS);
                    },
                    disableGoodStatus: n,
                }),
                (0, r.jsx)(u.Z, { className: y.divider }),
                (0, r.jsx)(_.ap, {
                    guildId: t,
                    onEdit: () => {
                        g.default.track(
                            v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                            N(C({}, (0, o.hH)(t)), {
                                action_taken: x.W$[x.W$.EDIT_CUSTOMIZATION_QUESTIONS],
                                location: a,
                            }),
                        ),
                            (0, p.$K)(x.PG.CUSTOMIZATION_QUESTIONS);
                    },
                    disableGoodStatus: n,
                }),
                (0, r.jsx)(u.Z, { className: y.divider }),
                (0, r.jsx)(_.P_, {
                    guildId: t,
                    onEdit: () => {
                        g.default.track(
                            v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                            N(C({}, (0, o.hH)(t)), {
                                action_taken: x.W$[x.W$.EDIT_HOME_SETTINGS],
                                location: a,
                            }),
                        ),
                            (0, p.$K)(x.PG.HOME_SETTINGS);
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
                      handlePreview: m,
                  }),
                  (0, r.jsx)(S, {}),
                  (0, r.jsxs)("div", {
                      className: y.content,
                      children: [
                          (0, r.jsx)(T, {
                              guildId: t,
                              handleOnboardingToggle: d,
                          }),
                          h,
                      ],
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: y.content,
                      children: [
                          (0, r.jsx)(P, {
                              guildId: t,
                              handleOnboardingToggle: d,
                              handlePreview: m,
                          }),
                          h,
                      ],
                  }),
                  (0, r.jsx)(w, { guildId: t }),
              ],
          });
}
function I(e) {
    let { guildId: t, handlePreview: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.X6q, {
                variant: "heading-lg/semibold",
                color: "header-primary",
                className: y.header,
                children: O.intl.string(O.t.mhxUsL),
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                className: y.subheader,
                children: O.intl.string(O.t.GtWdQE),
            }),
            (0, r.jsxs)("div", {
                className: y.help,
                children: [
                    (0, r.jsx)(a.eee, {
                        target: "_blank",
                        href: v.EYA.GUILD_ONBOARDING_EXAMPLES,
                        children: (0, r.jsx)(a.Text, {
                            variant: "text-sm/medium",
                            color: "text-link",
                            children: O.intl.string(O.t.Ok55Ki),
                        }),
                    }),
                    (0, r.jsx)("div", { className: y.helpSeparator }),
                    (0, r.jsx)(a.eee, {
                        onClick: n,
                        children: (0, r.jsx)(a.Text, {
                            variant: "text-sm/medium",
                            color: "text-link",
                            children: O.intl.string(O.t["6gsjdH"]),
                        }),
                    }),
                    (0, r.jsx)("div", { className: y.helpSeparator }),
                    (0, r.jsx)(j.Wu, { guildId: t }),
                ],
            }),
        ],
    });
}
function S() {
    let e = "\u2022 ";
    return (0, r.jsxs)("div", {
        className: y.notice,
        children: [
            (0, r.jsx)("img", {
                className: y.wumpus,
                src: n(33631),
                alt: "wumpus",
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: "heading-md/semibold",
                        color: "header-primary",
                        className: y.header,
                        children: O.intl.string(O.t.WslWRE),
                    }),
                    (0, r.jsxs)(a.Text, {
                        variant: "text-sm/medium",
                        color: "header-secondary",
                        children: [e, O.intl.string(O.t.z9k21N)],
                    }),
                    (0, r.jsxs)(a.Text, {
                        variant: "text-sm/medium",
                        color: "header-secondary",
                        children: [e, O.intl.string(O.t.t1LelZ)],
                    }),
                ],
            }),
        ],
    });
}
function T(e) {
    let { guildId: t, handleOnboardingToggle: n } = e,
        s = (0, _.$$)(t),
        o = (0, i.e7)([c.Z], () => c.Z.getEnabled(t));
    return (0, r.jsxs)("div", {
        className: y.review,
        children: [
            (0, r.jsxs)("div", {
                className: y.reviewHeaderText,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: "heading-md/semibold",
                        children: o ? O.intl.string(O.t.MBdTCQ) : O.intl.string(O.t.Wslim5),
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: o ? O.intl.string(O.t.LokpLi) : O.intl.string(O.t.nBIyJi),
                    }),
                ],
            }),
            (0, r.jsx)(l.T2, {
                checked: o,
                onChange: () => n(!1),
                disabled: !o && !s,
            }),
        ],
    });
}
function P(e) {
    let { guildId: t, handleOnboardingToggle: n, handlePreview: l } = e,
        s = (0, _.$$)(t),
        o = (0, i.e7)([h.Z], () => h.Z.getSettings()),
        c = (0, d.uo)(o);
    return (0, r.jsxs)("div", {
        className: y.reviewHeader,
        children: [
            (0, r.jsxs)("div", {
                className: y.reviewHeaderText,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: "heading-md/semibold",
                        children: s ? O.intl.string(O.t.FcIcT0) : O.intl.string(O.t.R09tJy),
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        children: s ? O.intl.string(O.t.ockHVV) : O.intl.string(O.t["u/ji09"]),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: y.reviewActions,
                children: [
                    (0, r.jsx)(a.zxk, {
                        size: "sm",
                        variant: "secondary",
                        onClick: l,
                        text: O.intl.string(O.t["6gsjdH"]),
                    }),
                    (0, r.jsx)(a.zxk, {
                        variant: "primary",
                        size: "sm",
                        text: O.intl.string(O.t.Yz7hsL),
                        onClick: () => n(c),
                        disabled: !s,
                    }),
                ],
            }),
        ],
    });
}
function w(e) {
    let { guildId: t } = e,
        n = (0, i.e7)([m.Z], () => m.Z.getGuild(t));
    return null == n || n.verificationLevel < v.sFg.VERY_HIGH
        ? null
        : (0, r.jsxs)("div", {
              className: y.rolesWarning,
              children: [
                  (0, r.jsx)(a.Mgn, {
                      size: "xs",
                      color: "currentColor",
                      className: y.warningIcon,
                  }),
                  (0, r.jsx)(a.Text, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      children: O.intl.string(O.t.HVoKZ2),
                  }),
              ],
          });
}
