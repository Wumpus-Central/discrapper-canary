n.d(t, { A: () => M, s: () => O });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(990078),
    d = n(939249),
    c = n(834730),
    u = n(192308),
    h = n(22231),
    A = n(365199),
    _ = n(821609),
    m = n(442433),
    g = n(686956),
    p = n(573435),
    f = n(101555),
    E = n(263063),
    x = n(714991),
    I = n(776231),
    C = n(345942),
    b = n(71393),
    N = n(486020),
    S = n(860689),
    v = n(352123),
    T = n(682557),
    y = n(652215),
    j = n(985018),
    R = n(253607),
    L = n(166382);
let O = l.memo(function (e) {
    let { onClick: t } = e;
    return (0, i.jsxs)(d.D, {
        onClick: t,
        className: R.Eo,
        children: [
            (0, i.jsx)("img", { alt: "", src: L }),
            (0, i.jsx)(c.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                className: R.Kk,
                children: j.intl.string(j.t.H9jxS1),
            }),
        ],
    });
});
function G(e) {
    let { entry: t } = e,
        [s, r] = l.useState(!1),
        d = l.useRef(null),
        { canEdit: c } = (0, v.A)(t);
    return (0, i.jsx)("div", {
        className: a()(R.fc, { [R.QX]: s }),
        children: (0, i.jsxs)(f.Ay, {
            children: [
                c
                    ? (0, i.jsx)(o.m, {
                          text: j.intl.string(j.t.XnuOvN),
                          children: (0, i.jsx)(f.$n, {
                              onClick: () => {
                                  (0, u.openModalLazy)(async () => {
                                      let { default: e } = await n.e("88869").then(n.bind(n, 201700));
                                      return (n) => (0, i.jsx)(e, { ...n, entry: t });
                                  });
                              },
                              "aria-label": j.intl.string(j.t.XnuOvN),
                              children: (0, i.jsx)(h.R, { size: "xs", color: "currentColor", className: R.IQ }),
                          }),
                      })
                    : null,
                (0, i.jsx)(T.A, {
                    targetElementRef: d,
                    onRequestOpen: () => r(!0),
                    onRequestClose: () => r(!1),
                    entry: t,
                    hideEditButton: !0,
                    children: (e) => {
                        let { onClick: t, ...n } = e;
                        return (0, i.jsx)(o.m, {
                            text: j.intl.string(j.t["UKOtz+"]),
                            children: (0, i.jsx)(f.$n, {
                                ...n,
                                onClick: (e) => {
                                    t(e);
                                },
                                ref: d,
                                "aria-label": j.intl.string(j.t["UKOtz+"]),
                                children: (0, i.jsx)(A.j, { size: "md", color: "currentColor", className: R.IQ }),
                            }),
                        });
                    },
                }),
            ],
        }),
    });
}
let M = l.memo(function (e) {
    let { entry: t } = e,
        [s, a] = l.useState(!1),
        o = null != (0, r.bG)([b.A], () => b.A.getGuild(t.guildId)),
        d = async () => {
            a(!0);
            try {
                o ? (0, C.u)(t.guildId) : await g.A.joinGuild(t.guildId, { source: y.Q4z.DIRECTORY_ENTRY });
            } finally {
                a(!1);
            }
        },
        u = N.Ay.getGuildSplashURL({ id: t.guildId, splash: t.splash, size: 300 * (0, I.mZ)() }),
        h = N.Ay.getGuildIconURL({ id: t.guildId, icon: t.icon, size: 40 }) ?? void 0,
        A = j.intl.string(j.t.VJlc0S);
    return (
        o && (A = j.intl.string(j.t.cqWE2Z)),
        (0, i.jsxs)("div", {
            className: R.Nr,
            onContextMenu: (e) => {
                (0, m.L3)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 283354));
                    return (n) => (0, i.jsx)(e, { ...n, entry: t });
                });
            },
            children: [
                (0, i.jsxs)("div", {
                    className: R.MY,
                    children: [
                        (0, i.jsx)("div", {
                            className: R.Yi,
                            children: null != u && (0, i.jsx)("img", { src: u, alt: "", className: R.j0 }),
                        }),
                        (0, i.jsx)("div", {
                            className: R.$f,
                            children: (0, i.jsx)(p.Ay, {
                                mask: p.Ay.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, i.jsx)("div", {
                                    className: R.SA,
                                    children: (0, i.jsx)(E.Ay, {
                                        className: R.rZ,
                                        iconSrc: h,
                                        guild: (0, S.xi)(t),
                                        size: E.Ay.Sizes.MEDIUM,
                                        active: !0,
                                    }),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: R.OA,
                    children: [
                        (0, i.jsxs)("div", {
                            className: R.DD,
                            children: [
                                (0, i.jsx)(x.A, { className: R.n2, guild: t }),
                                (0, i.jsx)(c.E, {
                                    className: R.J5,
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: t.name,
                                }),
                            ],
                        }),
                        (0, i.jsx)(c.E, {
                            className: R.h_,
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: t.description,
                        }),
                        (0, i.jsxs)("div", {
                            className: R.Fj,
                            children: [
                                null != t.approximatePresenceCount &&
                                    (0, i.jsxs)("div", {
                                        className: R.Kl,
                                        children: [
                                            (0, i.jsx)("div", { className: R.JX }),
                                            (0, i.jsx)(c.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                children: j.intl.format(j.t["LC+S+m"], {
                                                    membersOnline: t.approximatePresenceCount,
                                                }),
                                            }),
                                        ],
                                    }),
                                null != t.approximateMemberCount &&
                                    (0, i.jsxs)("div", {
                                        className: R.Kl,
                                        children: [
                                            (0, i.jsx)("div", { className: R.Li }),
                                            (0, i.jsx)(c.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                children: j.intl.format(j.t.zRl6XR, {
                                                    count: t.approximateMemberCount,
                                                }),
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: R.PD,
                            children: (0, i.jsx)(_.$, {
                                loading: s,
                                variant: o ? "secondary" : "active",
                                onClick: d,
                                text: A,
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)(G, { entry: t }),
            ],
        })
    );
});
