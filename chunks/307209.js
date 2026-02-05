"use strict";
n.d(t, { A: () => b });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    r = n(212245),
    a = n(58149),
    o = n(591552),
    d = n(374084),
    c = n(813516),
    u = n(71393),
    m = n(954571),
    g = n(527678),
    x = n(199940),
    h = n(132514),
    _ = n(107795),
    A = n(400812),
    p = n(259866),
    f = n(960756),
    j = n(652215),
    N = n(985018),
    E = n(117689);
function b(e) {
    let { guildId: t, completed: n } = e,
        l = (0, s.bG)([o.A], () => o.A.getEnabled(t)),
        { location: d } = (0, r.p)();
    d.object = n ? j.ZSU.ONBOARDING_EDIT : j.ZSU.ONBOARDING_REVIEW;
    let u = async function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            l
                ? (await (0, _.gr)(t, !1),
                  m.default.track(j.HAw.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
                      ...(0, a.H$)(t),
                      action_taken: A.mj[A.mj.TOGGLE_DISABLED],
                      location: d,
                  }))
                : (await (0, _.gr)(t, !0),
                  e && (0, x.UP)(t, !0),
                  n
                      ? m.default.track(j.HAw.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
                            ...(0, a.H$)(t),
                            action_taken: A.mj[A.mj.TOGGLE_ENABLED],
                            location: d,
                        })
                      : m.default.track(j.HAw.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, {
                            ...(0, a.H$)(t),
                            step: A.Hy[A.Hy.REVIEW],
                            back: !1,
                            skip: !1,
                            completed: !0,
                        }));
        },
        h = () => {
            m.default.track(j.HAw.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
                ...(0, a.H$)(t),
                action_taken: A.mj[A.mj.PREVIEW],
                location: d,
            }),
                (0, g.X$)(t);
        },
        p = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(f.gE, {
                    guildId: t,
                    onEdit: () => {
                        m.default.track(j.HAw.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
                            ...(0, a.H$)(t),
                            action_taken: A.mj[A.mj.EDIT_DEFAULT_CHANNELS],
                            location: d,
                        }),
                            (0, g.e_)(A.Hy.DEFAULT_CHANNELS);
                    },
                    disableGoodStatus: n,
                }),
                (0, i.jsx)(c.A, { className: E.yF }),
                (0, i.jsx)(f.aV, {
                    guildId: t,
                    onEdit: () => {
                        m.default.track(j.HAw.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
                            ...(0, a.H$)(t),
                            action_taken: A.mj[A.mj.EDIT_CONNECTIONS],
                            location: d,
                        }),
                            (0, g.e_)(A.Hy.CONNECTIONS);
                    },
                    disableGoodStatus: n,
                }),
                (0, i.jsx)(c.A, { className: E.yF }),
                (0, i.jsx)(f.$i, {
                    guildId: t,
                    onEdit: () => {
                        m.default.track(j.HAw.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
                            ...(0, a.H$)(t),
                            action_taken: A.mj[A.mj.EDIT_CUSTOMIZATION_QUESTIONS],
                            location: d,
                        }),
                            (0, g.e_)(A.Hy.CUSTOMIZATION_QUESTIONS);
                    },
                    disableGoodStatus: n,
                }),
                (0, i.jsx)(c.A, { className: E.yF }),
                (0, i.jsx)(f.bW, {
                    guildId: t,
                    onEdit: () => {
                        m.default.track(j.HAw.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
                            ...(0, a.H$)(t),
                            action_taken: A.mj[A.mj.EDIT_HOME_SETTINGS],
                            location: d,
                        }),
                            (0, g.e_)(A.Hy.HOME_SETTINGS);
                    },
                    disableGoodStatus: n,
                }),
            ],
        });
    return n
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(T, { guildId: t, handlePreview: h }),
                  (0, i.jsx)(C, {}),
                  (0, i.jsxs)("div", {
                      className: E.Qs,
                      children: [(0, i.jsx)(I, { guildId: t, handleOnboardingToggle: u }), p],
                  }),
              ],
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)("div", {
                      className: E.Qs,
                      children: [(0, i.jsx)(v, { guildId: t, handleOnboardingToggle: u, handlePreview: h }), p],
                  }),
                  (0, i.jsx)(S, { guildId: t }),
              ],
          });
}
function T(e) {
    let { guildId: t, handlePreview: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                className: E.wx,
                children: N.intl.string(N.t.mhxUsE),
            }),
            (0, i.jsx)(l.Text, {
                variant: "text-md/normal",
                color: "text-default",
                className: E.m_,
                children: N.intl.string(N.t.GtWdQH),
            }),
            (0, i.jsxs)("div", {
                className: E.yj,
                children: [
                    (0, i.jsx)(l.MzZ, {
                        target: "_blank",
                        href: j.X7G.GUILD_ONBOARDING_EXAMPLES,
                        children: (0, i.jsx)(l.Text, {
                            variant: "text-sm/medium",
                            color: "text-link",
                            children: N.intl.string(N.t.Ok55Kh),
                        }),
                    }),
                    (0, i.jsx)("div", { className: E.RY }),
                    (0, i.jsx)(l.MzZ, {
                        onClick: n,
                        children: (0, i.jsx)(l.Text, {
                            variant: "text-sm/medium",
                            color: "text-link",
                            children: N.intl.string(N.t["6gsjdM"]),
                        }),
                    }),
                    (0, i.jsx)("div", { className: E.RY }),
                    (0, i.jsx)(p.mU, { guildId: t }),
                ],
            }),
        ],
    });
}
function C() {
    let e = "• ";
    return (0, i.jsxs)("div", {
        className: E.lm,
        children: [
            (0, i.jsx)("img", { className: E.kX, src: n(903702), alt: "wumpus" }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(l.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        className: E.wx,
                        children: N.intl.string(N.t.WslWRL),
                    }),
                    (0, i.jsxs)(l.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: [e, N.intl.string(N.t.z9k21H)],
                    }),
                    (0, i.jsxs)(l.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: [e, N.intl.string(N.t.t1Lele)],
                    }),
                ],
            }),
        ],
    });
}
function I(e) {
    let { guildId: t, handleOnboardingToggle: n } = e,
        r = (0, f.n5)(t),
        a = (0, s.bG)([o.A], () => o.A.getEnabled(t));
    return (0, i.jsx)("div", {
        className: E.NQ,
        children: (0, i.jsx)(l.dOG, {
            label: a ? N.intl.string(N.t.MBdTCZ) : N.intl.string(N.t["Wslim+"]),
            description: a ? N.intl.string(N.t.LokpLi) : N.intl.string(N.t.nBIyJp),
            checked: a,
            onChange: () => n(!1),
            disabled: !a && !r,
        }),
    });
}
function v(e) {
    let { guildId: t, handleOnboardingToggle: n, handlePreview: r } = e,
        a = (0, f.n5)(t),
        o = (0, s.bG)([h.A], () => h.A.getSettings()),
        c = (0, d.Ic)(o);
    return (0, i.jsxs)("div", {
        className: E.cN,
        children: [
            (0, i.jsxs)("div", {
                className: E.Zj,
                children: [
                    (0, i.jsx)(l.Heading, {
                        variant: "heading-md/semibold",
                        children: a ? N.intl.string(N.t.FcIcT8) : N.intl.string(N.t.R09tJ2),
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: "text-xs/normal",
                        children: a ? N.intl.string(N.t.ockHVS) : N.intl.string(N.t["u/ji07"]),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: E.a4,
                children: [
                    (0, i.jsx)(l.Button, {
                        size: "sm",
                        variant: "secondary",
                        onClick: r,
                        text: N.intl.string(N.t["6gsjdM"]),
                    }),
                    (0, i.jsx)(l.Button, {
                        variant: "primary",
                        size: "sm",
                        text: N.intl.string(N.t.Yz7hsB),
                        onClick: () => n(c),
                        disabled: !a,
                    }),
                ],
            }),
        ],
    });
}
function S(e) {
    let { guildId: t } = e,
        n = (0, s.bG)([u.A], () => u.A.getGuild(t));
    return null == n || n.verificationLevel < j.PvD.VERY_HIGH
        ? null
        : (0, i.jsxs)("div", {
              className: E.et,
              children: [
                  (0, i.jsx)(l.EpV, { size: "xs", color: "currentColor", className: E.QW }),
                  (0, i.jsx)(l.Text, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      children: N.intl.string(N.t.HVoKZ5),
                  }),
              ],
          });
}
