n.d(t, { Z: () => y });
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(351773),
    u = n(627097),
    d = n(805422),
    p = n(535834),
    f = n(390551),
    h = n(610746),
    m = n(388032),
    g = n(908134);
let b = (e) => {
        let { soundKey: t, globalMute: n } = e,
            r = (0, u.O)((e) => e.volumes[t]),
            l = (0, u.O)((e) => e.setVolume),
            a = (0, p.Tx)(t);
        return (0, i.jsxs)("div", {
            className: g.block,
            children: [
                (0, i.jsx)(s.Text, {
                    variant: "text-md/semibold",
                    children: a,
                }),
                (0, i.jsx)(s.iRW, {
                    initialValue: (null != r ? r : 0.2) * 100,
                    disabled: n,
                    maxValue: 100,
                    asValueChanges: (e) => {
                        l(t, e / 100);
                    },
                    onValueChange: (e) => {
                        l(t, e / 100);
                    },
                }),
            ],
        });
    },
    y = (e) => {
        let { open: t, close: n, style: l, triggerRef: p } = e,
            y = (0, c.Z)(null, n, p),
            C = (0, u.O)((e) => e.globalMute),
            v = (0, u.O)((e) => e.setGlobalMute),
            x = (0, u.O)((e) => e.genre),
            O = (0, u.O)((e) => e.setGenre),
            E = (0, u.O)((e) => e.songIndex),
            j = (0, u.O)((e) => e.playRadio),
            S = (0, u.O)((e) => e.setPlayRadio),
            _ = (0, u.O)((e) => e.playPrevSong),
            P = (0, u.O)((e) => e.playNextSong),
            I = (0, o.e7)([d.Z], () => d.Z.assets),
            Z = r.useMemo(() => f.at[x][E], [x, E]),
            T = !C && j;
        return (0, i.jsxs)("div", {
            ref: y,
            className: a()(g.controlPopout, { [g.hidden]: !t }),
            style: l,
            children: [
                (0, i.jsx)("div", {
                    className: g.header,
                    children: (0, i.jsx)(s.Heading, {
                        variant: "heading-md/medium",
                        color: "text-subtle",
                        children: m.intl.string(h.default.vaWEe0),
                    }),
                }),
                (0, i.jsxs)(s.Kqy, {
                    direction: "horizontal",
                    justify: "space-between",
                    align: "center",
                    gap: 0,
                    className: g.block,
                    children: [
                        null != Z &&
                            (0, i.jsxs)(s.Kqy, {
                                children: [
                                    (0, i.jsx)(s.Text, {
                                        variant: "text-sm/semibold",
                                        children: Z.song,
                                    }),
                                    (0, i.jsx)(s.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: m.intl.format(h.default.i22p4p, { artist: Z.artist }),
                                    }),
                                ],
                            }),
                        (0, i.jsxs)(s.Kqy, {
                            direction: "horizontal",
                            children: [
                                (0, i.jsx)(s.hU, {
                                    variant: "icon-only",
                                    size: "sm",
                                    "aria-label": m.intl.string(h.default.FL0ePz),
                                    icon: s.yFM,
                                    onClick: _,
                                }),
                                (0, i.jsx)(s.hU, {
                                    variant: "icon-only",
                                    size: "sm",
                                    "aria-label": m.intl.string(h.default.zsW8PM),
                                    icon: j ? s.fpf : s.o1U,
                                    onClick: (e) => {
                                        e.preventDefault(), e.stopPropagation(), S(!j);
                                    },
                                }),
                                (0, i.jsx)(s.hU, {
                                    variant: "icon-only",
                                    size: "sm",
                                    "aria-label": m.intl.string(h.default["+nt9+r"]),
                                    icon: s.LJT,
                                    onClick: P,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(s.Kqy, {
                    direction: "horizontal",
                    justify: "space-between",
                    gap: 12,
                    children: Object.values(f.AL).map((e) => {
                        var t, n;
                        return (0, i.jsx)(
                            s.P3F,
                            {
                                className: g.clickable,
                                onClick: () => {
                                    x !== e ? (O(e), S(!0)) : S(!j);
                                },
                                children: (0, i.jsxs)(s.Kqy, {
                                    align: "center",
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: a()(g.songBlock, { [g.selected]: e === x }),
                                            style: {
                                                backgroundImage: "url('".concat(
                                                    null == I || null == (n = I.genres) || null == (t = n[e])
                                                        ? void 0
                                                        : t.thumbnail,
                                                    "')",
                                                ),
                                                backgroundSize: "cover",
                                            },
                                            children: (0, i.jsxs)("div", {
                                                className: a()(g.visualizer, {
                                                    [g.selected]: e === x,
                                                    [g.playing]: T,
                                                    [g.paused]: !T,
                                                }),
                                                children: [
                                                    (0, i.jsx)("div", { className: g.dot }),
                                                    (0, i.jsx)("div", { className: g.dot }),
                                                    (0, i.jsx)("div", { className: g.dot }),
                                                ],
                                            }),
                                        }),
                                        (0, i.jsx)(s.Heading, {
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
                (0, i.jsxs)(s.Kqy, {
                    direction: "horizontal",
                    justify: "space-between",
                    align: "center",
                    children: [
                        (0, i.jsx)(s.Text, {
                            variant: "text-md/medium",
                            color: "text-subtle",
                            children: m.intl.string(h.default.IWSNp9),
                        }),
                        (0, i.jsx)("div", {
                            className: a()({ [g.muted]: C }),
                            children: (0, i.jsx)(s.hU, {
                                variant: "icon-only",
                                "aria-label": m.intl.string(h.default.Tf8XqQ),
                                icon: C ? s.OyP : s.gj8,
                                onClick: (e) => {
                                    e.preventDefault(), e.stopPropagation(), v(!C);
                                },
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)(s.Kqy, {
                    gap: 8,
                    children: [
                        (0, i.jsx)(b, {
                            soundKey: f.Yg.RADIO,
                            globalMute: C,
                        }),
                        (0, i.jsx)(b, {
                            soundKey: f.Yg.ENVIRONMENT,
                            globalMute: C,
                        }),
                        (0, i.jsx)(b, {
                            soundKey: f.Yg.CAMPFIRE,
                            globalMute: C,
                        }),
                    ],
                }),
            ],
        });
    };
