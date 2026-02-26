"use strict";
n.d(t, { A: () => j, s: () => y });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(990078),
    c = n(397927),
    d = n(442433),
    u = n(686956),
    h = n(573435),
    A = n(101555),
    p = n(263063),
    g = n(714991),
    m = n(776231),
    _ = n(345942),
    f = n(71393),
    x = n(486020),
    C = n(860689),
    E = n(352123),
    I = n(682557),
    N = n(652215),
    b = n(985018),
    S = n(943110),
    T = n(166382);
let y = s.memo(function (e) {
    let { onClick: t } = e;
    return (0, i.jsxs)(c.DUT, {
        onClick: t,
        className: S.Eo,
        children: [
            (0, i.jsx)("img", { alt: "", src: T }),
            (0, i.jsx)(c.Text, {
                variant: "text-sm/semibold",
                color: "text-strong",
                className: S.Kk,
                children: b.intl.string(b.t.H9jxS1),
            }),
        ],
    });
});
function v(e) {
    let { entry: t } = e,
        [l, a] = s.useState(!1),
        d = s.useRef(null),
        { canEdit: u } = (0, E.A)(t);
    return (0, i.jsx)("div", {
        className: r()(S.fc, { [S.QX]: l }),
        children: (0, i.jsxs)(A.Ay, {
            children: [
                u
                    ? (0, i.jsx)(o.m, {
                          text: b.intl.string(b.t.XnuOvN),
                          children: (0, i.jsx)(A.$n, {
                              onClick: () => {
                                  (0, c.mMO)(async () => {
                                      let { default: e } = await n.e("88869").then(n.bind(n, 201700));
                                      return (n) => (0, i.jsx)(e, { ...n, entry: t });
                                  });
                              },
                              "aria-label": b.intl.string(b.t.XnuOvN),
                              children: (0, i.jsx)(c.R2l, { size: "xs", color: "currentColor", className: S.IQ }),
                          }),
                      })
                    : null,
                (0, i.jsx)(I.A, {
                    targetElementRef: d,
                    onRequestOpen: () => a(!0),
                    onRequestClose: () => a(!1),
                    entry: t,
                    hideEditButton: !0,
                    children: (e) => {
                        let { onClick: t, ...n } = e;
                        return (0, i.jsx)(o.m, {
                            text: b.intl.string(b.t["UKOtz+"]),
                            children: (0, i.jsx)(A.$n, {
                                ...n,
                                onClick: (e) => {
                                    t(e);
                                },
                                ref: d,
                                "aria-label": b.intl.string(b.t["UKOtz+"]),
                                children: (0, i.jsx)(c.jNK, { size: "md", color: "currentColor", className: S.IQ }),
                            }),
                        });
                    },
                }),
            ],
        }),
    });
}
let j = s.memo(function (e) {
    let { entry: t } = e,
        [l, r] = s.useState(!1),
        o = null != (0, a.bG)([f.A], () => f.A.getGuild(t.guildId)),
        A = async () => {
            r(!0);
            try {
                o ? (0, _.u)(t.guildId) : await u.A.joinGuild(t.guildId, { source: N.Q4z.DIRECTORY_ENTRY });
            } finally {
                r(!1);
            }
        },
        E = x.Ay.getGuildSplashURL({ id: t.guildId, splash: t.splash, size: 300 * (0, m.mZ)() }),
        I = x.Ay.getGuildIconURL({ id: t.guildId, icon: t.icon, size: 40 }) ?? void 0,
        T = b.intl.string(b.t.VJlc0S);
    return (
        o && (T = b.intl.string(b.t.cqWE2Z)),
        (0, i.jsxs)("div", {
            className: S.Nr,
            onContextMenu: (e) => {
                (0, d.L3)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 283354));
                    return (n) => (0, i.jsx)(e, { ...n, entry: t });
                });
            },
            children: [
                (0, i.jsxs)("div", {
                    className: S.MY,
                    children: [
                        (0, i.jsx)("div", {
                            className: S.Yi,
                            children: null != E && (0, i.jsx)("img", { src: E, alt: "", className: S.j0 }),
                        }),
                        (0, i.jsx)("div", {
                            className: S.$f,
                            children: (0, i.jsx)(h.Ay, {
                                mask: h.Ay.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, i.jsx)("div", {
                                    className: S.SA,
                                    children: (0, i.jsx)(p.Ay, {
                                        className: S.rZ,
                                        iconSrc: I,
                                        guild: (0, C.xi)(t),
                                        size: p.Ay.Sizes.MEDIUM,
                                        active: !0,
                                    }),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: S.OA,
                    children: [
                        (0, i.jsxs)("div", {
                            className: S.DD,
                            children: [
                                (0, i.jsx)(g.A, { className: S.n2, guild: t }),
                                (0, i.jsx)(c.Text, {
                                    className: S.J5,
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: t.name,
                                }),
                            ],
                        }),
                        (0, i.jsx)(c.Text, {
                            className: S.h_,
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: t.description,
                        }),
                        (0, i.jsxs)("div", {
                            className: S.Fj,
                            children: [
                                null != t.approximatePresenceCount &&
                                    (0, i.jsxs)("div", {
                                        className: S.Kl,
                                        children: [
                                            (0, i.jsx)("div", { className: S.JX }),
                                            (0, i.jsx)(c.Text, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                children: b.intl.format(b.t["LC+S+m"], {
                                                    membersOnline: t.approximatePresenceCount,
                                                }),
                                            }),
                                        ],
                                    }),
                                null != t.approximateMemberCount &&
                                    (0, i.jsxs)("div", {
                                        className: S.Kl,
                                        children: [
                                            (0, i.jsx)("div", { className: S.Li }),
                                            (0, i.jsx)(c.Text, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                children: b.intl.format(b.t.zRl6XR, {
                                                    count: t.approximateMemberCount,
                                                }),
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: S.PD,
                            children: (0, i.jsx)(c.Button, {
                                loading: l,
                                variant: o ? "secondary" : "active",
                                onClick: A,
                                text: T,
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)(v, { entry: t }),
            ],
        })
    );
});
