n.d(t, { A: () => j, s: () => y });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(990078),
    c = n(397927),
    d = n(442433),
    u = n(686956),
    h = n(573435),
    A = n(101555),
    _ = n(263063),
    m = n(714991),
    g = n(776231),
    p = n(345942),
    f = n(71393),
    x = n(486020),
    E = n(860689),
    I = n(352123),
    C = n(682557),
    N = n(652215),
    T = n(985018),
    S = n(802103),
    b = n(166382);
let y = l.memo(function (e) {
    let { onClick: t } = e;
    return (0, i.jsxs)(c.DUT, {
        onClick: t,
        className: S.Eo,
        children: [
            (0, i.jsx)("img", { alt: "", src: b }),
            (0, i.jsx)(c.Text, {
                variant: "text-sm/semibold",
                color: "text-strong",
                className: S.Kk,
                children: T.intl.string(T.t.H9jxS1),
            }),
        ],
    });
});
function v(e) {
    let { entry: t } = e,
        [s, r] = l.useState(!1),
        d = l.useRef(null),
        { canEdit: u } = (0, I.A)(t);
    return (0, i.jsx)("div", {
        className: a()(S.fc, { [S.QX]: s }),
        children: (0, i.jsxs)(A.Ay, {
            children: [
                u
                    ? (0, i.jsx)(o.m, {
                          text: T.intl.string(T.t.XnuOvN),
                          children: (0, i.jsx)(A.$n, {
                              onClick: () => {
                                  (0, c.mMO)(async () => {
                                      let { default: e } = await n.e("88869").then(n.bind(n, 201700));
                                      return (n) => (0, i.jsx)(e, { ...n, entry: t });
                                  });
                              },
                              "aria-label": T.intl.string(T.t.XnuOvN),
                              children: (0, i.jsx)(c.R2l, { size: "xs", color: "currentColor", className: S.IQ }),
                          }),
                      })
                    : null,
                (0, i.jsx)(C.A, {
                    targetElementRef: d,
                    onRequestOpen: () => r(!0),
                    onRequestClose: () => r(!1),
                    entry: t,
                    hideEditButton: !0,
                    children: (e) => {
                        let { onClick: t, ...n } = e;
                        return (0, i.jsx)(o.m, {
                            text: T.intl.string(T.t["UKOtz+"]),
                            children: (0, i.jsx)(A.$n, {
                                ...n,
                                onClick: (e) => {
                                    t(e);
                                },
                                ref: d,
                                "aria-label": T.intl.string(T.t["UKOtz+"]),
                                children: (0, i.jsx)(c.jNK, { size: "md", color: "currentColor", className: S.IQ }),
                            }),
                        });
                    },
                }),
            ],
        }),
    });
}
let j = l.memo(function (e) {
    let { entry: t } = e,
        [s, a] = l.useState(!1),
        o = null != (0, r.bG)([f.A], () => f.A.getGuild(t.guildId)),
        A = async () => {
            a(!0);
            try {
                o ? (0, p.u)(t.guildId) : await u.A.joinGuild(t.guildId, { source: N.Q4z.DIRECTORY_ENTRY });
            } finally {
                a(!1);
            }
        },
        I = x.Ay.getGuildSplashURL({ id: t.guildId, splash: t.splash, size: 300 * (0, g.mZ)() }),
        C = x.Ay.getGuildIconURL({ id: t.guildId, icon: t.icon, size: 40 }) ?? void 0,
        b = T.intl.string(T.t.VJlc0S);
    return (
        o && (b = T.intl.string(T.t.cqWE2Z)),
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
                            children: null != I && (0, i.jsx)("img", { src: I, alt: "", className: S.j0 }),
                        }),
                        (0, i.jsx)("div", {
                            className: S.$f,
                            children: (0, i.jsx)(h.Ay, {
                                mask: h.Ay.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, i.jsx)("div", {
                                    className: S.SA,
                                    children: (0, i.jsx)(_.Ay, {
                                        className: S.rZ,
                                        iconSrc: C,
                                        guild: (0, E.xi)(t),
                                        size: _.Ay.Sizes.MEDIUM,
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
                                (0, i.jsx)(m.A, { className: S.n2, guild: t }),
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
                                                children: T.intl.format(T.t["LC+S+m"], {
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
                                                children: T.intl.format(T.t.zRl6XR, {
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
                                loading: s,
                                variant: o ? "secondary" : "active",
                                onClick: A,
                                text: b,
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
