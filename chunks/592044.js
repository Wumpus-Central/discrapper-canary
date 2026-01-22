n.d(t, {
    A: () => A,
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(311907),
    s = n(397927),
    o = n(82495),
    c = n(38050),
    u = n(998740),
    d = n(692744),
    f = n(572808),
    p = n(241080),
    h = n(588703),
    b = n(985018),
    g = n(851830);
let m = (e) => {
        let { soundKey: t, globalMute: n } = e,
            l = (0, c.n)((e) => e.volumes[t]),
            i = (0, c.n)((e) => e.setVolume),
            a = (0, d.el)(t);
        return (0, r.jsxs)("div", {
            className: g.om,
            children: [
                (0, r.jsx)(s.Text, {
                    variant: "text-md/semibold",
                    children: a,
                }),
                (0, r.jsx)(s.Apm, {
                    initialValue: (null != l ? l : 0.2) * 100,
                    disabled: n,
                    maxValue: 100,
                    asValueChanges: (e) => {
                        i(t, e / 100);
                    },
                    onValueChange: (e) => {
                        i(t, e / 100);
                    },
                }),
            ],
        });
    },
    A = (e) => {
        let { open: t, close: n, style: l, triggerRef: d } = e,
            A = (0, o.A)(
                null,
                () => {
                    t && n();
                },
                d,
            ),
            y = (0, c.n)((e) => e.globalMute),
            O = (0, c.n)((e) => e.setGlobalMute),
            j = (0, c.n)((e) => e.genre),
            v = (0, c.n)((e) => e.setGenre),
            x = (0, c.n)((e) => e.songIndex),
            E = (0, c.n)((e) => e.playRadio),
            _ = (0, c.n)((e) => e.setPlayRadio),
            C = (0, c.n)((e) => e.playPrevSong),
            S = (0, c.n)((e) => e.playNextSong),
            I = (0, a.bG)([u.A], () => u.A.assets),
            N = (0, p.A)(j, x),
            T = !y && E;
        return (0, r.jsxs)("div", {
            ref: A,
            className: i()(g.ZR, {
                [g.R]: !t,
            }),
            style: l,
            children: [
                (0, r.jsx)("div", {
                    className: g.wx,
                    children: (0, r.jsx)(s.Heading, {
                        variant: "heading-md/medium",
                        color: "text-subtle",
                        children: b.intl.string(h.default.vaWEe0),
                    }),
                }),
                (0, r.jsxs)(s.BJc, {
                    direction: "horizontal",
                    justify: "space-between",
                    align: "center",
                    gap: 0,
                    className: g.om,
                    children: [
                        null != N &&
                            (0, r.jsxs)(s.BJc, {
                                children: [
                                    (0, r.jsx)(s.Text, {
                                        variant: "text-sm/semibold",
                                        children: N.song,
                                    }),
                                    (0, r.jsx)(s.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: b.intl.format(h.default.i22p4p, {
                                            artist: N.artist,
                                        }),
                                    }),
                                ],
                            }),
                        (0, r.jsxs)(s.BJc, {
                            direction: "horizontal",
                            children: [
                                (0, r.jsx)(s.K0, {
                                    variant: "icon-only",
                                    size: "sm",
                                    "aria-label": b.intl.string(h.default.FL0ePz),
                                    icon: s.fEi,
                                    onClick: C,
                                }),
                                (0, r.jsx)(s.K0, {
                                    variant: "icon-only",
                                    size: "sm",
                                    "aria-label": b.intl.string(h.default.zsW8PM),
                                    icon: E ? s.E$n : s.udU,
                                    onClick: (e) => {
                                        e.preventDefault(), e.stopPropagation(), _(!E);
                                    },
                                }),
                                (0, r.jsx)(s.K0, {
                                    variant: "icon-only",
                                    size: "sm",
                                    "aria-label": b.intl.string(h.default["+nt9+r"]),
                                    icon: s.uhT,
                                    onClick: S,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(s.BJc, {
                    direction: "horizontal",
                    justify: "space-between",
                    gap: 12,
                    children: Object.values(f.TU).map((e) => {
                        var t, n;
                        return (0, r.jsx)(
                            s.DUT,
                            {
                                className: g.vk,
                                onClick: () => {
                                    j !== e ? (v(e), _(!0)) : _(!E);
                                },
                                children: (0, r.jsxs)(s.BJc, {
                                    align: "center",
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: i()(g.D$, {
                                                [g.wH]: e === j,
                                            }),
                                            style: {
                                                backgroundImage: "url('".concat(
                                                    null == I || null == (n = I.genres) || null == (t = n[e])
                                                        ? void 0
                                                        : t.thumbnail,
                                                    "')",
                                                ),
                                                backgroundSize: "cover",
                                            },
                                            children: (0, r.jsxs)("div", {
                                                className: i()(g.BW, {
                                                    [g.wH]: e === j,
                                                    [g.he]: T,
                                                    [g.Ft]: !T,
                                                }),
                                                children: [
                                                    (0, r.jsx)("div", {
                                                        className: g.Om,
                                                    }),
                                                    (0, r.jsx)("div", {
                                                        className: g.Om,
                                                    }),
                                                    (0, r.jsx)("div", {
                                                        className: g.Om,
                                                    }),
                                                ],
                                            }),
                                        }),
                                        (0, r.jsx)(s.Heading, {
                                            variant: "heading-sm/normal",
                                            color: "text-subtle",
                                            children: e,
                                        }),
                                    ],
                                }),
                            },
                            e,
                        );
                    }),
                }),
                (0, r.jsxs)(s.BJc, {
                    direction: "horizontal",
                    justify: "space-between",
                    align: "center",
                    children: [
                        (0, r.jsx)(s.Text, {
                            variant: "text-md/medium",
                            color: "text-subtle",
                            children: b.intl.string(h.default.IWSNp9),
                        }),
                        (0, r.jsx)("div", {
                            className: i()({
                                [g.SU]: y,
                            }),
                            children: (0, r.jsx)(s.K0, {
                                variant: "icon-only",
                                "aria-label": b.intl.string(h.default.Tf8XqQ),
                                icon: y ? s._RO : s.HKD,
                                onClick: (e) => {
                                    e.preventDefault(), e.stopPropagation(), O(!y);
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)(s.BJc, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(m, {
                            soundKey: f.wS.RADIO,
                            globalMute: y,
                        }),
                        (0, r.jsx)(m, {
                            soundKey: f.wS.ENVIRONMENT,
                            globalMute: y,
                        }),
                        (0, r.jsx)(m, {
                            soundKey: f.wS.CAMPFIRE,
                            globalMute: y,
                        }),
                    ],
                }),
            ],
        });
    };
