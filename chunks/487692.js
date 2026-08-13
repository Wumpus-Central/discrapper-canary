i.d(e, { m: () => L });
var n = i(593673),
    l = i(477900),
    a = i(582128),
    r = i(297264),
    s = i(834730),
    d = i(95477),
    c = i(821609),
    u = i(289873),
    o = i(738188),
    g = i(375708),
    m = i(308991);
function f() {
    return (0, l.jsx)("div", {
        className: m.w,
        children: (0, l.jsx)(u.y, { type: u.y.Type.SPINNING_CIRCLE, "aria-label": g.intl.string(g.t.ZTNur7) }),
    });
}
function h() {
    return (0, l.jsxs)("div", {
        className: m.w,
        role: "alert",
        children: [
            (0, l.jsx)(o.i, { size: "md", color: "text-feedback-critical", "aria-hidden": !0 }),
            (0, l.jsx)(s.E, { variant: "text-sm/normal", color: "text-muted", children: g.intl.string(g.t.F8FvUy) }),
        ],
    });
}
var x = i(101464);
function v(t) {
    return { heading: t.heading ?? "" };
}
var E = i(17928),
    j = i(331322),
    p = i(452027),
    y = i(260598),
    I = i(825484),
    _ = i(866665),
    C = i(408278),
    A = i(241326),
    S = i(683071),
    N = i(2553),
    b = i(405810),
    D = i(967198),
    w = i(488428),
    R = i(597098),
    k = i(486020),
    T = i(652215);
function G(t, e, i) {
    let n = k.QB ? "webp" : "jpg",
        { CDN_HOST: l, API_ENDPOINT: a } = window.GLOBAL_ENV,
        r = T.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(t, e, i, n),
        s = null != l ? `https://${l}${r}` : location.protocol + a + r,
        d = { size: (0, R.kr)(500 * (0, R.mZ)()) };
    return "jpg" === n && (d.quality = "lossless"), (s += `?${w.stringify(d)}`);
}
var B = i(983283),
    U = i(596127),
    W = i(34250);
let L = {
    [n.a.IMAGE_TEXT]: {
        View: function (t) {
            let { widget: e, guildSpaceMode: i } = t,
                { text: n, image_hash: a } = e.config,
                r = (0, E.bG)([D.A], () => D.A.getGuildId()),
                d = "edit" === i ? e.config.image : void 0,
                c = void 0 !== d ? d : null != a && null != r ? G(r, e.id, a) : null;
            return (0, l.jsxs)("div", {
                className: W.k,
                children: [
                    null != c && (0, l.jsx)("img", { className: W.S, src: c, alt: "" }),
                    null != n && (0, l.jsx)(s.E, { variant: "text-sm/normal", color: "text-default", children: n }),
                ],
            });
        },
        Edit: function (t) {
            let { widget: e, commit: i, cancel: r } = t,
                s = e.config,
                [u, o] = a.useState(s.title ?? ""),
                [m, f] = a.useState(s.text ?? ""),
                [h, x] = a.useState(s.image),
                [v, w] = a.useState(null),
                R = (0, E.bG)([D.A], () => D.A.getGuildId()),
                k = void 0 !== h ? h : null != s.image_hash && null != R ? G(R, e.id, s.image_hash) : null;
            return (0, l.jsxs)(j.B, {
                gap: 16,
                children: [
                    (0, l.jsx)(d.k, {
                        label: g.intl.string(g.t.gnwWrx),
                        value: u,
                        onChange: function (t) {
                            w(null), o(t);
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, l.jsx)(p.D, {
                        label: g.intl.string(g.t.X4IxWL),
                        children: (0, l.jsxs)(j.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: U.B,
                            children: [
                                (0, l.jsxs)(j.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, l.jsx)(b.A, {
                                            variant: "secondary",
                                            text: g.intl.string(g.t["MsUY/S"]),
                                            onChange: function (t) {
                                                w(null), x(t);
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, N.A)(0xa00000),
                                        }),
                                        null != k &&
                                            (0, l.jsx)(_.m, {
                                                text: g.intl.string(g.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, l.jsx)(C.K, {
                                                    variant: "critical-secondary",
                                                    icon: A.u,
                                                    onClick: function () {
                                                        w(null), x(null);
                                                    },
                                                    "aria-label": g.intl.string(g.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != k && (0, l.jsx)("img", { className: U.V, src: k, alt: "" }),
                            ],
                        }),
                    }),
                    (0, l.jsx)(y.f, {
                        label: g.intl.string(g.t.COGMNC),
                        value: m,
                        onChange: function (t) {
                            w(null), f(t);
                        },
                        rows: 3,
                        autosize: !0,
                        maxLength: 500,
                        showCharacterCount: !0,
                    }),
                    null != v &&
                        (0, l.jsx)("div", {
                            role: "alert",
                            children: (0, l.jsx)(S.w, { type: "critical", children: v }),
                        }),
                    (0, l.jsxs)(I.e, {
                        fullWidth: !0,
                        children: [
                            (0, l.jsx)(c.$, { variant: "secondary", text: g.intl.string(g.t["ETE/oC"]), onClick: r }),
                            (0, l.jsx)(c.$, {
                                variant: "primary",
                                text: g.intl.string(g.t["R3BPH+"]),
                                onClick: function () {
                                    let t;
                                    if (
                                        ((t = void 0 !== h ? null !== h : null != s.image_hash),
                                        0 === m.length && !t && (w(g.intl.string(B.default.zleX9q)), 1))
                                    )
                                        return;
                                    let e = {
                                        type: n.a.IMAGE_TEXT,
                                        image_hash: s.image_hash,
                                        text: m.length > 0 ? m : null,
                                        title: u.length > 0 ? u : null,
                                    };
                                    void 0 !== h && (e.image = h), i(e);
                                },
                            }),
                        ],
                    }),
                ],
            });
        },
        useTitle: function (t) {
            return t.config.title ?? t.default_title ?? "";
        },
    },
    [n.a.LEADERBOARD]: {
        View: function (t) {
            var e;
            let i,
                { widget: n, hydration: a } = t;
            if (null == a || "idle" === a.status || "loading" === a.status) return (0, l.jsx)(f, {});
            if ("error" === a.status) return (0, l.jsx)(h, {});
            let { heading: d } = v(n.config),
                { entries: c } =
                    ((e = a.data),
                    {
                        entries: (Array.isArray((i = e?.entries)) ? i : []).filter(
                            (t) => null != t && Number.isFinite(t.score),
                        ),
                    });
            return (0, l.jsxs)("div", {
                className: x.Up,
                children: [
                    "" !== d && (0, l.jsx)(r.D, { variant: "heading-md/semibold", color: "text-strong", children: d }),
                    (0, l.jsx)("ol", {
                        className: x.p_,
                        children: c.map((t, e) =>
                            (0, l.jsxs)(
                                "li",
                                {
                                    className: x.nM,
                                    children: [
                                        (0, l.jsx)(s.E, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            className: x.Tm,
                                            children: e + 1,
                                        }),
                                        (0, l.jsx)(s.E, {
                                            variant: "text-sm/normal",
                                            color: "text-strong",
                                            className: x.UU,
                                            children: t.name,
                                        }),
                                        (0, l.jsx)(s.E, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            children: t.score.toLocaleString(),
                                        }),
                                    ],
                                },
                                t.id,
                            ),
                        ),
                    }),
                ],
            });
        },
        Edit: function (t) {
            let { widget: e, commit: i, cancel: n } = t,
                r = e.config,
                [s, u] = a.useState(() => v(r));
            return (0, l.jsxs)("div", {
                className: x.hc,
                children: [
                    (0, l.jsx)(d.k, { label: "Heading", value: s.heading, onChange: (t) => u({ heading: t }) }),
                    (0, l.jsxs)("div", {
                        className: x.KA,
                        children: [
                            (0, l.jsx)(c.$, { variant: "secondary", text: g.intl.string(g.t["ETE/oC"]), onClick: n }),
                            (0, l.jsx)(c.$, {
                                variant: "primary",
                                text: g.intl.string(g.t["R3BPH+"]),
                                onClick: () => i(s),
                            }),
                        ],
                    }),
                ],
            });
        },
    },
};
