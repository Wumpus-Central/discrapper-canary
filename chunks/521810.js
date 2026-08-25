i.d(t, { m: () => ee });
var n = i(593673),
    l = i(477900),
    a = i(582128),
    r = i(297264),
    s = i(834730),
    c = i(95477),
    d = i(821609),
    u = i(289873),
    o = i(738188),
    f = i(375708),
    g = i(448492);
function h() {
    return (0, l.jsx)("div", {
        className: g.w,
        children: (0, l.jsx)(u.y, { type: u.y.Type.SPINNING_CIRCLE, "aria-label": f.intl.string(f.t.ZTNur7) }),
    });
}
function m() {
    return (0, l.jsxs)("div", {
        className: g.w,
        role: "alert",
        children: [
            (0, l.jsx)(o.WarningIcon, { size: "md", color: "text-feedback-critical", "aria-hidden": !0 }),
            (0, l.jsx)(s.E, { variant: "text-sm/normal", color: "text-muted", children: f.intl.string(f.t.F8FvUy) }),
        ],
    });
}
var x = i(534603);
function E(e) {
    return { heading: e.heading ?? "" };
}
var v = i(17928),
    p = i(331322),
    A = i(452027),
    I = i(103557),
    S = i(825484),
    C = i(866665),
    _ = i(408278),
    j = i(241326),
    y = i(683071),
    N = i(2553),
    b = i(405810),
    T = i(967198),
    D = i(488428),
    k = i(776231),
    R = i(486020),
    w = i(652215);
function F(e, t, i) {
    let n = R.QB ? "webp" : "jpg",
        { CDN_HOST: l, API_ENDPOINT: a } = window.GLOBAL_ENV,
        r = w.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, i, n),
        s = null != l ? `https://${l}${r}` : location.protocol + a + r,
        c = { size: (0, k.kr)(500 * (0, k.mZ)()) };
    return "jpg" === n && (c.quality = "lossless"), (s += `?${D.stringify(c)}`);
}
var G = i(125075),
    U = i(868602),
    W = i(445187),
    L = i(344351),
    P = i(933958),
    B = i(256693),
    M = i(812901),
    H = i(317608),
    O = i(716357),
    q = i(485845),
    z = i(795816),
    X = i(574152),
    $ = i(627363),
    K = i(587895),
    Y = i(712440),
    V = i(733110),
    Z = i(360469);
async function Q(e) {
    null == K.A.getApplication(Z.NW) && (await (0, $.TA)(Z.NW));
    let t = P.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== Z.NW);
    return await (0, z.su)({
        channelId: e,
        applicationId: Z.NW,
        isStart: t,
        embeddedActivitiesManager: (0, X.A)(),
        renderInFramePool: !0,
    });
}
var J = i(953538);
let ee = {
    [n.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t, guildSpaceMode: i } = e,
                { text: n, image_hash: a } = t.config,
                r = (0, v.bG)([T.A], () => T.A.getGuildId()),
                c = "edit" === i ? t.config.image : void 0,
                d = void 0 !== c ? c : null != a && null != r ? F(r, t.id, a) : null;
            return (0, l.jsxs)("div", {
                className: W.k,
                children: [
                    null != d && (0, l.jsx)("img", { className: W.S, src: d, alt: "" }),
                    null != n && (0, l.jsx)(s.E, { variant: "text-sm/normal", color: "text-default", children: n }),
                ],
            });
        },
        Edit: function (e) {
            let { widget: t, commit: i, cancel: r } = e,
                s = t.config,
                [u, o] = a.useState(s.title ?? ""),
                [g, h] = a.useState(s.text ?? ""),
                [m, x] = a.useState(s.image),
                [E, D] = a.useState(null),
                k = (0, v.bG)([T.A], () => T.A.getGuildId()),
                R = void 0 !== m ? m : null != s.image_hash && null != k ? F(k, t.id, s.image_hash) : null;
            return (0, l.jsxs)(p.B, {
                gap: 16,
                children: [
                    (0, l.jsx)(c.k, {
                        label: f.intl.string(f.t.gnwWrx),
                        value: u,
                        onChange: function (e) {
                            D(null), o(e);
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, l.jsx)(A.D, {
                        label: f.intl.string(f.t.X4IxWL),
                        children: (0, l.jsxs)(p.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: U.B,
                            children: [
                                (0, l.jsxs)(p.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, l.jsx)(b.A, {
                                            variant: "secondary",
                                            text: f.intl.string(f.t["MsUY/S"]),
                                            onChange: function (e) {
                                                D(null), x(e);
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, N.A)(0xa00000),
                                        }),
                                        null != R &&
                                            (0, l.jsx)(C.m, {
                                                text: f.intl.string(f.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, l.jsx)(_.K, {
                                                    variant: "critical-secondary",
                                                    icon: j.TrashIcon,
                                                    onClick: function () {
                                                        D(null), x(null);
                                                    },
                                                    "aria-label": f.intl.string(f.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != R && (0, l.jsx)("img", { className: U.V, src: R, alt: "" }),
                            ],
                        }),
                    }),
                    (0, l.jsx)(I.f, {
                        label: f.intl.string(f.t.COGMNC),
                        value: g,
                        onChange: function (e) {
                            D(null), h(e);
                        },
                        rows: 3,
                        autosize: !0,
                        maxLength: 500,
                        showCharacterCount: !0,
                    }),
                    null != E &&
                        (0, l.jsx)("div", {
                            role: "alert",
                            children: (0, l.jsx)(y.w, { type: "critical", children: E }),
                        }),
                    (0, l.jsxs)(S.e, {
                        fullWidth: !0,
                        children: [
                            (0, l.jsx)(d.$, { variant: "secondary", text: f.intl.string(f.t["ETE/oC"]), onClick: r }),
                            (0, l.jsx)(d.$, {
                                variant: "primary",
                                text: f.intl.string(f.t["R3BPH+"]),
                                onClick: function () {
                                    let e;
                                    if (
                                        ((e = void 0 !== m ? null !== m : null != s.image_hash),
                                        0 === g.length && !e && (D(f.intl.string(G.default.zleX9q)), 1))
                                    )
                                        return;
                                    let t = {
                                        type: n.a.IMAGE_TEXT,
                                        image_hash: s.image_hash,
                                        text: g.length > 0 ? g : null,
                                        title: u.length > 0 ? u : null,
                                    };
                                    void 0 !== m && (t.image = m), i(t);
                                },
                            }),
                        ],
                    }),
                ],
            });
        },
        useTitle: function (e) {
            return e.config.title ?? e.default_title ?? "";
        },
    },
    [n.a.LEADERBOARD]: {
        View: function (e) {
            var t;
            let i,
                { widget: n, hydration: a } = e;
            if (null == a || "idle" === a.status || "loading" === a.status) return (0, l.jsx)(h, {});
            if ("error" === a.status) return (0, l.jsx)(m, {});
            let { heading: c } = E(n.config),
                { entries: d } =
                    ((t = a.data),
                    {
                        entries: (Array.isArray((i = t?.entries)) ? i : []).filter(
                            (e) => null != e && Number.isFinite(e.score),
                        ),
                    });
            return (0, l.jsxs)("div", {
                className: x.Up,
                children: [
                    "" !== c && (0, l.jsx)(r.D, { variant: "heading-md/semibold", color: "text-strong", children: c }),
                    (0, l.jsx)("ol", {
                        className: x.p_,
                        children: d.map((e, t) =>
                            (0, l.jsxs)(
                                "li",
                                {
                                    className: x.nM,
                                    children: [
                                        (0, l.jsx)(s.E, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            className: x.Tm,
                                            children: t + 1,
                                        }),
                                        (0, l.jsx)(s.E, {
                                            variant: "text-sm/normal",
                                            color: "text-strong",
                                            className: x.UU,
                                            children: e.name,
                                        }),
                                        (0, l.jsx)(s.E, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            children: e.score.toLocaleString(),
                                        }),
                                    ],
                                },
                                e.id,
                            ),
                        ),
                    }),
                ],
            });
        },
        Edit: function (e) {
            let { widget: t, commit: i, cancel: n } = e,
                r = t.config,
                [s, u] = a.useState(() => E(r));
            return (0, l.jsxs)("div", {
                className: x.hc,
                children: [
                    (0, l.jsx)(c.k, { label: "Heading", value: s.heading, onChange: (e) => u({ heading: e }) }),
                    (0, l.jsxs)("div", {
                        className: x.KA,
                        children: [
                            (0, l.jsx)(d.$, { variant: "secondary", text: f.intl.string(f.t["ETE/oC"]), onClick: n }),
                            (0, l.jsx)(d.$, {
                                variant: "primary",
                                text: f.intl.string(f.t["R3BPH+"]),
                                onClick: () => i(s),
                            }),
                        ],
                    }),
                ],
            });
        },
    },
    [n.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                i,
                n = (0, v.bG)([T.A, O.A], () => {
                    let e = T.A.getGuildId();
                    return null != e ? O.A.getSpace(e)?.channel_id : void 0;
                }),
                r = (0, v.bG)([P.Ay], () => {
                    let e = P.Ay.getCurrentEmbeddedActivity();
                    return null == e ||
                        e.applicationId !== Z.NW ||
                        e.location.kind !== L.T.GUILD_CHANNEL ||
                        e.location.channel_id !== n
                        ? null
                        : e;
                }, [n]),
                s = (0, v.bG)([P.Ay], () => P.Ay.isLaunchingActivity(), []),
                { authResolved: c, isAuthorized: u } =
                    ((t = (0, v.bG)(
                        [V.default],
                        () => V.default.getFetchStateForApplication(Z.NW) === V.FetchState.FETCHED,
                        [],
                    )),
                    (i = (0, v.bG)([V.default, K.A], () => {
                        let e = V.default.getNewestTokenForApplication(Z.NW);
                        if (null == e) return !1;
                        let t = K.A.getApplication(Z.NW),
                            i = t?.integrationTypesConfig?.[q.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                        if (null == i) return !0;
                        let n = new Set(e.scopes);
                        return i.every((e) => n.has(e));
                    }, [])),
                    a.useEffect(() => {
                        V.default.getFetchStateForApplication(Z.NW) === V.FetchState.NOT_FETCHED && Y.A.fetch([Z.NW]),
                            null == K.A.getApplication(Z.NW) && (0, $.TA)(Z.NW);
                    }, []),
                    { authResolved: t, isAuthorized: i }),
                o = a.useRef(!1);
            a.useEffect(() => {
                null == r && null != n && c && u && !o.current && ((o.current = !0), Q(n));
            }, [n, r, c, u]);
            let g = a.useCallback(() => {
                    null != n && ((o.current = !0), Q(n));
                }, [n]),
                h = null != n && c && !u;
            return (0, l.jsxs)("div", {
                className: J.kL,
                children: [
                    null != r &&
                        (0, l.jsx)(H.A, { frameId: (0, B.Ri)(r), level: M.A.WithinAppContent, className: J.t$ }),
                    null == r &&
                        h &&
                        (0, l.jsx)("div", {
                            className: J.P5,
                            children: (0, l.jsx)(d.$, {
                                variant: "secondary",
                                text: f.intl.string(G.default.PSuly6),
                                loading: s,
                                onClick: g,
                            }),
                        }),
                ],
            });
        },
    },
};
