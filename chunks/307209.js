n.d(t, {
    A: () => N,
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    s = n(212245),
    a = n(58149),
    c = n(591552),
    o = n(374084),
    d = n(813516),
    u = n(71393),
    f = n(954571),
    g = n(527678),
    b = n(199940),
    m = n(132514),
    p = n(107795),
    x = n(400812),
    h = n(259866),
    j = n(960756),
    O = n(652215),
    y = n(985018),
    v = n(117689);

function A(e) {
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

function E(e, t) {
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
        l = (0, i.bG)([c.A], () => c.A.getEnabled(t)),
        { location: o } = (0, s.p)();
    o.object = n ? O.ZSU.ONBOARDING_EDIT : O.ZSU.ONBOARDING_REVIEW;
    let u = async function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            l
                ? (await (0, p.gr)(t, !1),
                  f.default.track(
                      O.HAw.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                      E(A({}, (0, a.H$)(t)), {
                          action_taken: x.mj[x.mj.TOGGLE_DISABLED],
                          location: o,
                      }),
                  ))
                : (await (0, p.gr)(t, !0),
                  e && (0, b.UP)(t, !0),
                  n
                      ? f.default.track(
                            O.HAw.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                            E(A({}, (0, a.H$)(t)), {
                                action_taken: x.mj[x.mj.TOGGLE_ENABLED],
                                location: o,
                            }),
                        )
                      : f.default.track(
                            O.HAw.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED,
                            E(A({}, (0, a.H$)(t)), {
                                step: x.Hy[x.Hy.REVIEW],
                                back: !1,
                                skip: !1,
                                completed: !0,
                            }),
                        ));
        },
        m = () => {
            f.default.track(
                O.HAw.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                E(A({}, (0, a.H$)(t)), {
                    action_taken: x.mj[x.mj.PREVIEW],
                    location: o,
                }),
            ),
                (0, g.X$)(t);
        },
        h = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(j.gE, {
                    guildId: t,
                    onEdit: () => {
                        f.default.track(
                            O.HAw.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                            E(A({}, (0, a.H$)(t)), {
                                action_taken: x.mj[x.mj.EDIT_DEFAULT_CHANNELS],
                                location: o,
                            }),
                        ),
                            (0, g.e_)(x.Hy.DEFAULT_CHANNELS);
                    },
                    disableGoodStatus: n,
                }),
                (0, r.jsx)(d.A, {
                    className: v.yF,
                }),
                (0, r.jsx)(j.aV, {
                    guildId: t,
                    onEdit: () => {
                        f.default.track(
                            O.HAw.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                            E(A({}, (0, a.H$)(t)), {
                                action_taken: x.mj[x.mj.EDIT_CONNECTIONS],
                                location: o,
                            }),
                        ),
                            (0, g.e_)(x.Hy.CONNECTIONS);
                    },
                    disableGoodStatus: n,
                }),
                (0, r.jsx)(d.A, {
                    className: v.yF,
                }),
                (0, r.jsx)(j.$i, {
                    guildId: t,
                    onEdit: () => {
                        f.default.track(
                            O.HAw.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                            E(A({}, (0, a.H$)(t)), {
                                action_taken: x.mj[x.mj.EDIT_CUSTOMIZATION_QUESTIONS],
                                location: o,
                            }),
                        ),
                            (0, g.e_)(x.Hy.CUSTOMIZATION_QUESTIONS);
                    },
                    disableGoodStatus: n,
                }),
                (0, r.jsx)(d.A, {
                    className: v.yF,
                }),
                (0, r.jsx)(j.bW, {
                    guildId: t,
                    onEdit: () => {
                        f.default.track(
                            O.HAw.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED,
                            E(A({}, (0, a.H$)(t)), {
                                action_taken: x.mj[x.mj.EDIT_HOME_SETTINGS],
                                location: o,
                            }),
                        ),
                            (0, g.e_)(x.Hy.HOME_SETTINGS);
                    },
                    disableGoodStatus: n,
                }),
            ],
        });
    return n
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(_, {
                      guildId: t,
                      handlePreview: m,
                  }),
                  (0, r.jsx)(S, {}),
                  (0, r.jsxs)("div", {
                      className: v.Qs,
                      children: [
                          (0, r.jsx)(T, {
                              guildId: t,
                              handleOnboardingToggle: u,
                          }),
                          h,
                      ],
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: v.Qs,
                      children: [
                          (0, r.jsx)(I, {
                              guildId: t,
                              handleOnboardingToggle: u,
                              handlePreview: m,
                          }),
                          h,
                      ],
                  }),
                  (0, r.jsx)(C, {
                      guildId: t,
                  }),
              ],
          });
}

function _(e) {
    let { guildId: t, handlePreview: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                className: v.wx,
                children: y.intl.string(y.t.mhxUsE),
            }),
            (0, r.jsx)(l.Text, {
                variant: "text-md/normal",
                color: "text-default",
                className: v.m_,
                children: y.intl.string(y.t.GtWdQH),
            }),
            (0, r.jsxs)("div", {
                className: v.yj,
                children: [
                    (0, r.jsx)(l.MzZ, {
                        target: "_blank",
                        href: O.X7G.GUILD_ONBOARDING_EXAMPLES,
                        children: (0, r.jsx)(l.Text, {
                            variant: "text-sm/medium",
                            color: "text-link",
                            children: y.intl.string(y.t.Ok55Kh),
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: v.RY,
                    }),
                    (0, r.jsx)(l.MzZ, {
                        onClick: n,
                        children: (0, r.jsx)(l.Text, {
                            variant: "text-sm/medium",
                            color: "text-link",
                            children: y.intl.string(y.t["6gsjdM"]),
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: v.RY,
                    }),
                    (0, r.jsx)(h.mU, {
                        guildId: t,
                    }),
                ],
            }),
        ],
    });
}

function S() {
    let e = "• ";
    return (0, r.jsxs)("div", {
        className: v.lm,
        children: [
            (0, r.jsx)("img", {
                className: v.kX,
                src: n(903702),
                alt: "wumpus",
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        className: v.wx,
                        children: y.intl.string(y.t.WslWRL),
                    }),
                    (0, r.jsxs)(l.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: [e, y.intl.string(y.t.z9k21H)],
                    }),
                    (0, r.jsxs)(l.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: [e, y.intl.string(y.t.t1Lele)],
                    }),
                ],
            }),
        ],
    });
}

function T(e) {
    let { guildId: t, handleOnboardingToggle: n } = e,
        s = (0, j.n5)(t),
        a = (0, i.bG)([c.A], () => c.A.getEnabled(t));
    return (0, r.jsx)("div", {
        className: v.NQ,
        children: (0, r.jsx)(l.dOG, {
            label: a ? y.intl.string(y.t.MBdTCZ) : y.intl.string(y.t["Wslim+"]),
            description: a ? y.intl.string(y.t.LokpLi) : y.intl.string(y.t.nBIyJp),
            checked: a,
            onChange: () => n(!1),
            disabled: !a && !s,
        }),
    });
}

function I(e) {
    let { guildId: t, handleOnboardingToggle: n, handlePreview: s } = e,
        a = (0, j.n5)(t),
        c = (0, i.bG)([m.A], () => m.A.getSettings()),
        d = (0, o.Ic)(c);
    return (0, r.jsxs)("div", {
        className: v.cN,
        children: [
            (0, r.jsxs)("div", {
                className: v.Zj,
                children: [
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-md/semibold",
                        children: a ? y.intl.string(y.t.FcIcT8) : y.intl.string(y.t.R09tJ2),
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-xs/normal",
                        children: a ? y.intl.string(y.t.ockHVS) : y.intl.string(y.t["u/ji07"]),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: v.a4,
                children: [
                    (0, r.jsx)(l.Button, {
                        size: "sm",
                        variant: "secondary",
                        onClick: s,
                        text: y.intl.string(y.t["6gsjdM"]),
                    }),
                    (0, r.jsx)(l.Button, {
                        variant: "primary",
                        size: "sm",
                        text: y.intl.string(y.t.Yz7hsB),
                        onClick: () => n(d),
                        disabled: !a,
                    }),
                ],
            }),
        ],
    });
}

function C(e) {
    let { guildId: t } = e,
        n = (0, i.bG)([u.A], () => u.A.getGuild(t));
    return null == n || n.verificationLevel < O.PvD.VERY_HIGH
        ? null
        : (0, r.jsxs)("div", {
              className: v.et,
              children: [
                  (0, r.jsx)(l.EpV, {
                      size: "xs",
                      color: "currentColor",
                      className: v.QW,
                  }),
                  (0, r.jsx)(l.Text, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      children: y.intl.string(y.t.HVoKZ5),
                  }),
              ],
          });
}
