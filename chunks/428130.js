n.d(t, { $p: () => O, IE: () => N, Ys: () => y, ac: () => j, y2: () => R });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(582754),
    d = n(397927),
    c = n(775602),
    u = n(141468),
    m = n(963852),
    g = n(763754),
    _ = n(20851),
    x = n(544028),
    A = n(253932),
    h = n(780964),
    p = n(840065),
    T = n(123857),
    f = n(652215),
    S = n(381941),
    E = n(985018),
    b = n(421361),
    C = n(885106);
let N = { COZY: "cozy", COMPACT: "compact" },
    v = "1337",
    I = (e) => {
        let t = 0;
        return [
            (0, u.rh)({
                ...(0, m.Ay)({ channelId: v, content: E.intl.string(E.t.oZxkEq) }),
                state: f.cmJ.SENT,
                id: `${t++}`,
            }),
            (0, u.rh)({
                ...(0, m.Ay)({
                    channelId: v,
                    content: (0, o.Mw)(e) ? E.intl.string(E.t["WGb/v7"]) : E.intl.string(E.t["62m4mz"]),
                }),
                state: f.cmJ.SENT,
                id: `${t++}`,
            }),
            (0, u.rh)({
                ...(0, m.Ay)({ channelId: v, content: E.intl.string(E.t.a0Byo5) }),
                state: f.cmJ.SENT,
                id: `${t++}`,
            }),
            (0, u.rh)({
                ...(0, m.Ay)({ channelId: v, content: E.intl.string(E.t.bmwEWJ) }),
                state: f.cmJ.SENT,
                id: `${t++}`,
            }),
            (0, u.rh)({
                ...(0, m.Ay)({ channelId: v, content: E.intl.string(E.t["hK9QW/"]) }),
                state: f.cmJ.SENT,
                id: `${t}`,
            }),
        ];
    },
    j = () =>
        (0, i.jsxs)("div", {
            className: b.cF,
            children: [
                (0, i.jsxs)("div", {
                    className: b.ZT,
                    children: [
                        (0, i.jsxs)(d.Text, {
                            variant: "text-md/medium",
                            children: [" ", E.intl.string(E.t["0EzVst"])],
                        }),
                        (0, i.jsx)(d.Text, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: E.intl.string(E.t.PV3dGX),
                        }),
                    ],
                }),
                (0, i.jsx)(T.Q3, {}),
            ],
        }),
    y = () =>
        E.intl.format(E.t.Jae48E, {
            onClick: () => {
                (0, p.openUserSettings)(h.X.SYNC_FORCED_COLORS);
            },
        }),
    O = () =>
        E.intl.format(E.t["5LEQdc"], {
            onAccessibilityClick: () => {
                (0, p.openUserSettings)(h.X.ACCESSIBILITY_PANEL);
            },
        }),
    R = () => {
        let e = A.hH.useSetting(),
            t = A.hD.useSetting(),
            n = A.rs.useSetting(),
            { theme: l, messageGroupSpacing: u } = (0, r.cf)([x.A, c.A], () => ({
                theme: x.A.theme,
                messageGroupSpacing: c.A.messageGroupSpacing,
            })),
            [m] = s.useState(() => I(f.NJ8.DARK)),
            [h] = s.useState(() => I(f.NJ8.LIGHT)),
            p = t && n,
            T = (0, o.Mw)(l) ? m : h;
        return (0, i.jsx)(d.M1G, {
            children: (0, i.jsx)(d.ZpM, {
                className: a()(b.VH, C.C2, e ? b.Me : void 0, `group-spacing-${null != u ? u : e ? S.y5 : S.ES}`),
                outline: !0,
                "aria-hidden": !0,
                children: T.map((t, n) =>
                    (0, i.jsx)(
                        _.A,
                        {
                            author: (0, g.p_)(t),
                            message: t,
                            compact: e,
                            isGroupStart: n % 2 == 0,
                            className: 0 === n ? b.Ck : void 0,
                            hideSimpleEmbedContent: p,
                        },
                        t.id,
                    ),
                ),
            }),
        });
    };
