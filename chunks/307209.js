n.d(t, { A: () => T });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(534514),
    r = n(834730),
    a = n(349288),
    o = n(243721),
    d = n(821609),
    c = n(695366),
    u = n(212245),
    m = n(58149),
    g = n(591552),
    h = n(374084),
    x = n(813516),
    _ = n(71393),
    p = n(954571),
    A = n(527678),
    E = n(199940),
    f = n(132514),
    j = n(107795),
    N = n(400812),
    I = n(259866),
    C = n(960756),
    b = n(652215),
    v = n(985018),
    S = n(956888);
function T(e) {
    let { guildId: t, completed: n } = e,
        s = (0, l.bG)([g.A], () => g.A.getEnabled(t)),
        { location: r } = (0, u.p)();
    r.object = n ? b.ZSU.ONBOARDING_EDIT : b.ZSU.ONBOARDING_REVIEW;
    let a = async function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            s
                ? (await (0, j.gr)(t, !1),
                  p.default.track(b.HAw.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
                      ...(0, m.H$)(t),
                      action_taken: N.mj[N.mj.TOGGLE_DISABLED],
                      location: r,
                  }))
                : (await (0, j.gr)(t, !0),
                  e && (0, E.UP)(t, !0),
                  n
                      ? p.default.track(b.HAw.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
                            ...(0, m.H$)(t),
                            action_taken: N.mj[N.mj.TOGGLE_ENABLED],
                            location: r,
                        })
                      : p.default.track(b.HAw.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, {
                            ...(0, m.H$)(t),
                            step: N.Hy[N.Hy.REVIEW],
                            back: !1,
                            skip: !1,
                            completed: !0,
                        }));
        },
        o = () => {
            p.default.track(b.HAw.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
                ...(0, m.H$)(t),
                action_taken: N.mj[N.mj.PREVIEW],
                location: r,
            }),
                (0, A.X$)(t);
        },
        d = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(C.gE, {
                    guildId: t,
                    onEdit: () => {
                        p.default.track(b.HAw.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
                            ...(0, m.H$)(t),
                            action_taken: N.mj[N.mj.EDIT_DEFAULT_CHANNELS],
                            location: r,
                        }),
                            (0, A.e_)(N.Hy.DEFAULT_CHANNELS);
                    },
                    disableGoodStatus: n,
                }),
                (0, i.jsx)(x.A, { className: S.yF }),
                (0, i.jsx)(C.aV, {
                    guildId: t,
                    onEdit: () => {
                        p.default.track(b.HAw.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
                            ...(0, m.H$)(t),
                            action_taken: N.mj[N.mj.EDIT_CONNECTIONS],
                            location: r,
                        }),
                            (0, A.e_)(N.Hy.CONNECTIONS);
                    },
                    disableGoodStatus: n,
                }),
                (0, i.jsx)(x.A, { className: S.yF }),
                (0, i.jsx)(C.$i, {
                    guildId: t,
                    onEdit: () => {
                        p.default.track(b.HAw.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
                            ...(0, m.H$)(t),
                            action_taken: N.mj[N.mj.EDIT_CUSTOMIZATION_QUESTIONS],
                            location: r,
                        }),
                            (0, A.e_)(N.Hy.CUSTOMIZATION_QUESTIONS);
                    },
                    disableGoodStatus: n,
                }),
                (0, i.jsx)(x.A, { className: S.yF }),
                (0, i.jsx)(C.bW, {
                    guildId: t,
                    onEdit: () => {
                        p.default.track(b.HAw.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
                            ...(0, m.H$)(t),
                            action_taken: N.mj[N.mj.EDIT_HOME_SETTINGS],
                            location: r,
                        }),
                            (0, A.e_)(N.Hy.HOME_SETTINGS);
                    },
                    disableGoodStatus: n,
                }),
            ],
        });
    return n
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(y, { guildId: t, handlePreview: o }),
                  (0, i.jsx)(R, {}),
                  (0, i.jsxs)("div", {
                      className: S.Qs,
                      children: [(0, i.jsx)(L, { guildId: t, handleOnboardingToggle: a }), d],
                  }),
              ],
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)("div", {
                      className: S.Qs,
                      children: [(0, i.jsx)(D, { guildId: t, handleOnboardingToggle: a, handlePreview: o }), d],
                  }),
                  (0, i.jsx)(O, { guildId: t }),
              ],
          });
}
function y(e) {
    let { guildId: t, handlePreview: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(s.D, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                className: S.wx,
                children: v.intl.string(v.t.mhxUsE),
            }),
            (0, i.jsx)(r.E, {
                variant: "text-md/normal",
                color: "text-default",
                className: S.m_,
                children: v.intl.string(v.t.GtWdQH),
            }),
            (0, i.jsxs)("div", {
                className: S.yj,
                children: [
                    (0, i.jsx)(a.Anchor, {
                        target: "_blank",
                        href: b.X7G.GUILD_ONBOARDING_EXAMPLES,
                        children: (0, i.jsx)(r.E, {
                            variant: "text-sm/medium",
                            color: "text-link",
                            children: v.intl.string(v.t.Ok55Kh),
                        }),
                    }),
                    (0, i.jsx)("div", { className: S.RY }),
                    (0, i.jsx)(a.Anchor, {
                        onClick: n,
                        children: (0, i.jsx)(r.E, {
                            variant: "text-sm/medium",
                            color: "text-link",
                            children: v.intl.string(v.t["6gsjdM"]),
                        }),
                    }),
                    (0, i.jsx)("div", { className: S.RY }),
                    (0, i.jsx)(I.mU, { guildId: t }),
                ],
            }),
        ],
    });
}
function R() {
    let e = "• ";
    return (0, i.jsxs)("div", {
        className: S.lm,
        children: [
            (0, i.jsx)("img", { className: S.kX, src: n(903702), alt: "wumpus" }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(s.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        className: S.wx,
                        children: v.intl.string(v.t.WslWRL),
                    }),
                    (0, i.jsxs)(r.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: [e, v.intl.string(v.t.z9k21H)],
                    }),
                    (0, i.jsxs)(r.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: [e, v.intl.string(v.t.t1Lele)],
                    }),
                ],
            }),
        ],
    });
}
function L(e) {
    let { guildId: t, handleOnboardingToggle: n } = e,
        s = (0, C.n5)(t),
        r = (0, l.bG)([g.A], () => g.A.getEnabled(t));
    return (0, i.jsx)("div", {
        className: S.NQ,
        children: (0, i.jsx)(o.d, {
            label: r ? v.intl.string(v.t.MBdTCZ) : v.intl.string(v.t["Wslim+"]),
            description: r ? v.intl.string(v.t.LokpLi) : v.intl.string(v.t.nBIyJp),
            checked: r,
            onChange: () => n(!1),
            disabled: !r && !s,
        }),
    });
}
function D(e) {
    let { guildId: t, handleOnboardingToggle: n, handlePreview: a } = e,
        o = (0, C.n5)(t),
        c = (0, l.bG)([f.A], () => f.A.getSettings()),
        u = (0, h.Ic)(c);
    return (0, i.jsxs)("div", {
        className: S.cN,
        children: [
            (0, i.jsxs)("div", {
                className: S.Zj,
                children: [
                    (0, i.jsx)(s.D, {
                        variant: "heading-md/semibold",
                        children: o ? v.intl.string(v.t.FcIcT8) : v.intl.string(v.t.R09tJ2),
                    }),
                    (0, i.jsx)(r.E, {
                        variant: "text-xs/normal",
                        children: o ? v.intl.string(v.t.ockHVS) : v.intl.string(v.t["u/ji07"]),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: S.a4,
                children: [
                    (0, i.jsx)(d.$, {
                        size: "sm",
                        variant: "secondary",
                        onClick: a,
                        text: v.intl.string(v.t["6gsjdM"]),
                    }),
                    (0, i.jsx)(d.$, {
                        variant: "primary",
                        size: "sm",
                        text: v.intl.string(v.t.Yz7hsB),
                        onClick: () => n(u),
                        disabled: !o,
                    }),
                ],
            }),
        ],
    });
}
function O(e) {
    let { guildId: t } = e,
        n = (0, l.bG)([_.A], () => _.A.getGuild(t));
    return null == n || n.verificationLevel < b.PvD.VERY_HIGH
        ? null
        : (0, i.jsxs)("div", {
              className: S.et,
              children: [
                  (0, i.jsx)(c.E, { size: "xs", color: "currentColor", className: S.QW }),
                  (0, i.jsx)(r.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      children: v.intl.string(v.t.HVoKZ5),
                  }),
              ],
          });
}
