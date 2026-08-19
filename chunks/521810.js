i.d(t, { m: () => Z });
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
    I = i(331322),
    p = i(452027),
    A = i(260598),
    _ = i(825484),
    C = i(866665),
    S = i(408278),
    j = i(241326),
    y = i(683071),
    N = i(2553),
    b = i(405810),
    D = i(967198),
    R = i(488428),
    T = i(776231),
    k = i(486020),
    w = i(652215);
function G(e, t, i) {
    let n = k.QB ? "webp" : "jpg",
        { CDN_HOST: l, API_ENDPOINT: a } = window.GLOBAL_ENV,
        r = w.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, i, n),
        s = null != l ? `https://${l}${r}` : location.protocol + a + r,
        c = { size: (0, T.kr)(500 * (0, T.mZ)()) };
    return "jpg" === n && (c.quality = "lossless"), (s += `?${R.stringify(c)}`);
}
var U = i(125075),
    L = i(868602),
    F = i(445187),
    P = i(344351),
    W = i(933958),
    B = i(256693),
    M = i(812901),
    H = i(317608),
    q = i(716357),
    O = i(795816),
    z = i(574152),
    X = i(627363),
    K = i(587895),
    Y = i(360469);
async function $(e) {
    null == K.A.getApplication(Y.NW) && (await (0, X.TA)(Y.NW));
    let t = W.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== Y.NW);
    return await (0, O.su)({
        channelId: e,
        applicationId: Y.NW,
        isStart: t,
        embeddedActivitiesManager: (0, z.A)(),
        renderInFramePool: !0,
    });
}
var V = i(953538);
let Z = {
    [n.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t, guildSpaceMode: i } = e,
                { text: n, image_hash: a } = t.config,
                r = (0, v.bG)([D.A], () => D.A.getGuildId()),
                c = "edit" === i ? t.config.image : void 0,
                d = void 0 !== c ? c : null != a && null != r ? G(r, t.id, a) : null;
            return (0, l.jsxs)("div", {
                className: F.k,
                children: [
                    null != d && (0, l.jsx)("img", { className: F.S, src: d, alt: "" }),
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
                [E, R] = a.useState(null),
                T = (0, v.bG)([D.A], () => D.A.getGuildId()),
                k = void 0 !== m ? m : null != s.image_hash && null != T ? G(T, t.id, s.image_hash) : null;
            return (0, l.jsxs)(I.B, {
                gap: 16,
                children: [
                    (0, l.jsx)(c.k, {
                        label: f.intl.string(f.t.gnwWrx),
                        value: u,
                        onChange: function (e) {
                            R(null), o(e);
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, l.jsx)(p.D, {
                        label: f.intl.string(f.t.X4IxWL),
                        children: (0, l.jsxs)(I.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: L.B,
                            children: [
                                (0, l.jsxs)(I.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, l.jsx)(b.A, {
                                            variant: "secondary",
                                            text: f.intl.string(f.t["MsUY/S"]),
                                            onChange: function (e) {
                                                R(null), x(e);
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, N.A)(0xa00000),
                                        }),
                                        null != k &&
                                            (0, l.jsx)(C.m, {
                                                text: f.intl.string(f.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, l.jsx)(S.K, {
                                                    variant: "critical-secondary",
                                                    icon: j.TrashIcon,
                                                    onClick: function () {
                                                        R(null), x(null);
                                                    },
                                                    "aria-label": f.intl.string(f.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != k && (0, l.jsx)("img", { className: L.V, src: k, alt: "" }),
                            ],
                        }),
                    }),
                    (0, l.jsx)(A.f, {
                        label: f.intl.string(f.t.COGMNC),
                        value: g,
                        onChange: function (e) {
                            R(null), h(e);
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
                    (0, l.jsxs)(_.e, {
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
                                        0 === g.length && !e && (R(f.intl.string(U.default.zleX9q)), 1))
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
            let t = (0, v.bG)([D.A, q.A], () => {
                    let e = D.A.getGuildId();
                    return null != e ? q.A.getSpace(e)?.channel_id : void 0;
                }),
                i = (0, v.bG)([W.Ay], () => {
                    let e = W.Ay.getCurrentEmbeddedActivity();
                    return null == e ||
                        e.applicationId !== Y.NW ||
                        e.location.kind !== P.T.GUILD_CHANNEL ||
                        e.location.channel_id !== t
                        ? null
                        : e;
                }, [t]),
                n = a.useRef(!1);
            return (
                a.useEffect(() => {
                    null != i || null == t || n.current || ((n.current = !0), $(t));
                }, [t, i]),
                (0, l.jsx)("div", {
                    className: V.k,
                    children:
                        null != i &&
                        (0, l.jsx)(H.A, { frameId: (0, B.Ri)(i), level: M.A.WithinAppContent, className: V.t }),
                })
            );
        },
    },
};
