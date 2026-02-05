n.d(t, { A: () => y, s: () => j });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(990078),
    d = n(397927),
    c = n(442433),
    u = n(686956),
    h = n(573435),
    A = n(101555),
    g = n(263063),
    m = n(714991),
    p = n(776231),
    _ = n(345942),
    x = n(71393),
    f = n(486020),
    E = n(860689),
    C = n(352123),
    I = n(682557),
    S = n(652215),
    b = n(985018),
    N = n(856528),
    T = n(166382);
let j = l.memo(function (e) {
    let { onClick: t } = e;
    return (0, i.jsxs)(d.DUT, {
        onClick: t,
        className: N.Eo,
        children: [
            (0, i.jsx)("img", { alt: "", src: T }),
            (0, i.jsx)(d.Text, {
                variant: "text-sm/semibold",
                color: "text-strong",
                className: N.Kk,
                children: b.intl.string(b.t.H9jxS1),
            }),
        ],
    });
});
function v(e) {
    let { entry: t } = e,
        [s, r] = l.useState(!1),
        c = l.useRef(null),
        { canEdit: u } = (0, C.A)(t);
    return (0, i.jsx)("div", {
        className: a()(N.fc, { [N.QX]: s }),
        children: (0, i.jsxs)(A.Ay, {
            children: [
                u
                    ? (0, i.jsx)(o.m, {
                          text: b.intl.string(b.t.XnuOvN),
                          children: (0, i.jsx)(A.$n, {
                              onClick: () => {
                                  (0, d.mMO)(async () => {
                                      let { default: e } = await n.e("88869").then(n.bind(n, 201700));
                                      return (n) => (0, i.jsx)(e, { ...n, entry: t });
                                  });
                              },
                              "aria-label": b.intl.string(b.t.XnuOvN),
                              children: (0, i.jsx)(d.R2l, { size: "xs", color: "currentColor", className: N.IQ }),
                          }),
                      })
                    : null,
                (0, i.jsx)(I.A, {
                    targetElementRef: c,
                    onRequestOpen: () => r(!0),
                    onRequestClose: () => r(!1),
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
                                ref: c,
                                "aria-label": b.intl.string(b.t["UKOtz+"]),
                                children: (0, i.jsx)(d.jNK, { size: "md", color: "currentColor", className: N.IQ }),
                            }),
                        });
                    },
                }),
            ],
        }),
    });
}
let y = l.memo(function (e) {
    let { entry: t } = e,
        [s, a] = l.useState(!1),
        o = null != (0, r.bG)([x.A], () => x.A.getGuild(t.guildId)),
        A = async () => {
            a(!0);
            try {
                o ? (0, _.u)(t.guildId) : await u.A.joinGuild(t.guildId, { source: S.Q4z.DIRECTORY_ENTRY });
            } finally {
                a(!1);
            }
        },
        C = f.Ay.getGuildSplashURL({ id: t.guildId, splash: t.splash, size: 300 * (0, p.mZ)() }),
        I = f.Ay.getGuildIconURL({ id: t.guildId, icon: t.icon, size: 40 }) ?? void 0,
        T = b.intl.string(b.t.VJlc0S);
    return (
        o && (T = b.intl.string(b.t.cqWE2Z)),
        (0, i.jsxs)("div", {
            className: N.Nr,
            onContextMenu: (e) => {
                (0, c.L3)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 283354));
                    return (n) => (0, i.jsx)(e, { ...n, entry: t });
                });
            },
            children: [
                (0, i.jsxs)("div", {
                    className: N.MY,
                    children: [
                        (0, i.jsx)("div", {
                            className: N.Yi,
                            children: null != C && (0, i.jsx)("img", { src: C, alt: "", className: N.j0 }),
                        }),
                        (0, i.jsx)("div", {
                            className: N.$f,
                            children: (0, i.jsx)(h.Ay, {
                                mask: h.Ay.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, i.jsx)("div", {
                                    className: N.SA,
                                    children: (0, i.jsx)(g.A, {
                                        className: N.rZ,
                                        iconSrc: I,
                                        guild: (0, E.xi)(t),
                                        size: g.A.Sizes.MEDIUM,
                                        active: !0,
                                    }),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: N.OA,
                    children: [
                        (0, i.jsxs)("div", {
                            className: N.DD,
                            children: [
                                (0, i.jsx)(m.A, { className: N.n2, guild: t }),
                                (0, i.jsx)(d.Text, {
                                    className: N.J5,
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: t.name,
                                }),
                            ],
                        }),
                        (0, i.jsx)(d.Text, {
                            className: N.h_,
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: t.description,
                        }),
                        (0, i.jsxs)("div", {
                            className: N.Fj,
                            children: [
                                null != t.approximatePresenceCount &&
                                    (0, i.jsxs)("div", {
                                        className: N.Kl,
                                        children: [
                                            (0, i.jsx)("div", { className: N.JX }),
                                            (0, i.jsx)(d.Text, {
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
                                        className: N.Kl,
                                        children: [
                                            (0, i.jsx)("div", { className: N.Li }),
                                            (0, i.jsx)(d.Text, {
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
                            className: N.PD,
                            children: (0, i.jsx)(d.Button, {
                                loading: s,
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
