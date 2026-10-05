(n.r(t), n.d(t, { default: () => da }), n(321073));
var l,
    a = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    o = n(536637),
    u = n.n(o),
    d = n(478104),
    c = n(17928),
    m = n(314116),
    f = n(534890),
    h = n(646270),
    p = n(31300),
    g = n(831453),
    x = n(739187),
    b = n(857250),
    v = n(97483),
    y = n(834730),
    j = n(939249),
    w = n(866665),
    k = n(140735),
    C = n(289873),
    A = n(821609),
    N = n(604525),
    S = n(92446),
    E = n(625903),
    I = n(297264),
    T = n(97893),
    P = n(364522),
    M = n(103557),
    _ = n(150934),
    R = n(691885),
    L = n(789645),
    D = n(152367),
    O = n(661531),
    F = n(442433),
    z = n(627363),
    U = n(47167),
    G = n(713654),
    q = n(625180),
    $ = n(672929),
    B = n(775946),
    H = n(742589),
    V = n(976860),
    W = n(402860),
    K = n(885386),
    X = n(734057),
    Y = n(696451),
    J = n(71393),
    Q = n(576705),
    Z = n(164892),
    ee = n(922016),
    et = n(980707),
    en = n(477782),
    el = n(81369),
    ea = n(712808);
(n(323874), n(14289), n(35956));
var ei = n(77729),
    er = n(723702),
    es = n(264572).Buffer;
async function eo(e, t) {
    if (er.isPlatformEmbedded) {
        let n = es.from(await e.arrayBuffer());
        if ("function" == typeof ei.A.fileManager.saveWithDialog2) await ei.A.fileManager.saveWithDialog2(n, t);
        else
            try {
                await ei.A.fileManager.saveWithDialog(n, t);
            } catch {}
        return;
    }
    let n = URL.createObjectURL(e);
    try {
        let e = document.createElement("a");
        ((e.href = n), (e.download = t), (e.rel = "noopener"), e.click());
    } finally {
        window.setTimeout(() => URL.revokeObjectURL(n), 0);
    }
}
var eu = n(248675),
    ed = n(375708);
async function ec(e, t, n) {
    (0, ea.Hc)(e);
    let l = await (0, ea.vX)(e, t);
    (0, ea.dv)(e, n, [l]);
}
function em(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, Z.Oq)(e.size, t)
        ? null
        : ed.intl.formatToPlainString(eu.default.ThxcOX, { size: (0, Z.sM)((0, Z.Ju)(t)) });
}
async function ef(e, t) {
    let n,
        l =
            ((n = t
                .normalize("NFKD")
                .replace(/[^a-zA-Z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "")
                .slice(0, 64)
                .replace(/-+$/g, "")
                .toLowerCase()),
            `${"" === n ? "vibegration" : n}.zip`),
        a = await (0, ea.cS)(e, l);
    await eo(a, l);
}
function eh(e) {
    let t = i.useRef(null),
        n = i.useCallback(
            (t) => {
                let n = t.target.files?.[0] ?? null;
                ((t.target.value = ""), null != n && e(n));
            },
            [e],
        );
    return {
        open: () => t.current?.click(),
        input: (0, a.jsx)("input", {
            ref: t,
            type: "file",
            accept: ".zip,.tar,.tar.gz,.tgz,.tar.bz2,.tar.xz,application/zip,application/gzip,application/x-tar,application/x-bzip2,application/x-xz",
            hidden: !0,
            "aria-hidden": !0,
            tabIndex: -1,
            onChange: n,
        }),
    };
}
var ep = n(950305),
    eg = n(664121);
let ex = [
    { value: "user", icon: ep.UserIcon, nameMessage: eu.default.s1TsXl },
    { value: "guild", icon: eg.R, nameMessage: eu.default.LlLIJw },
];
function eb(e) {
    let { importing: t, onImport: n } = e,
        l = i.useRef(null),
        r = eh(i.useCallback((e) => n(e, "user"), [n])),
        s = eh(i.useCallback((e) => n(e, "guild"), [n])),
        o = { user: r.open, guild: s.open };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(ee.Y, {
                targetElementRef: l,
                position: "bottom",
                align: "right",
                animation: ee.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, a.jsx)(et.W, {
                        "data-menu-migrated": !0,
                        navId: "conjure-import-scope",
                        "aria-label": ed.intl.string(eu.default.soVyD1),
                        onClose: t,
                        onSelect: t,
                        children: (0, a.jsx)(en.rX, {
                            label: ed.intl.string(eu.default.NyVn6T),
                            children: ex
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: ed.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, a.jsx)(
                                        en.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: o[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, n) => {
                    let { isShown: i } = n;
                    return (0, a.jsx)(A.$, {
                        ...e,
                        buttonRef: l,
                        variant: "secondary",
                        size: "sm",
                        icon: el.H,
                        text: ed.intl.string(eu.default.NJGZA3),
                        loading: t,
                        disabled: t,
                        "aria-haspopup": "menu",
                        "aria-expanded": i,
                    });
                },
            }),
            r.input,
            s.input,
        ],
    });
}
var ev = n(652215),
    ey = n(746080),
    ej = n(58703),
    ew = n(757704),
    ek = n(192308);
function eC() {
    (0, ek.openModalLazy)(
        async () => {
            let { default: e } = await n.e("492663").then(n.bind(n, 839914));
            return (t) => (0, a.jsx)(e, { ...t });
        },
        { modalKey: "conjure-changelog" },
    );
}
var eA = n(335520);
function eN() {
    let e = (0, ew.Kk)("desktop");
    if (0 === e.length) return null;
    let t = ed.intl.string(eu.default.bTBUeX);
    return (0, a.jsxs)("section", {
        className: eA.rN,
        "aria-label": t,
        children: [
            (0, a.jsxs)("div", {
                className: eA.bZ,
                children: [
                    (0, a.jsx)(y.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                    (0, a.jsx)(y.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: ed.intl.string(eu.default["ZM/VB/"]),
                    }),
                ],
            }),
            (0, a.jsx)("ol", {
                className: eA.V,
                children: e.map((e) =>
                    (0, a.jsxs)(
                        "li",
                        {
                            className: eA.S3,
                            children: [
                                (0, a.jsxs)(y.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: eA.VO,
                                    children: [
                                        (0, ej.i$)(u()(e.date, "YYYY-MM-DD"), "LL"),
                                        (0, ew.t9)(e) ? ` \xb7 ${ed.intl.string(eu.default.cW5XHD)}` : null,
                                    ],
                                }),
                                (0, a.jsx)(y.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: e.summary,
                                }),
                            ],
                        },
                        `${e.date}-${e.summary}`,
                    ),
                ),
            }),
            (0, ew.ug)("desktop")
                ? (0, a.jsx)(A.$, {
                      variant: "secondary",
                      size: "sm",
                      text: ed.intl.string(eu.default.EwU5zF),
                      onClick: eC,
                  })
                : null,
        ],
    });
}
var eS = n(404373),
    eE = n(639519),
    eI = n(361504);
function eT(e) {
    let { idea: t, installScope: n, submitting: l } = e;
    return l ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
}
var eP = n(371169),
    eM = n(260498);
function e_(e) {
    let { className: t, ariaLabel: n, disabled: l, onClick: i, children: r } = e;
    return (0, a.jsx)(j.D, { "aria-disabled": l, "aria-label": n, className: t, onClick: l ? void 0 : i, children: r });
}
var eR = n(865665),
    eL = n(373913);
let eD = { x: 5, y: 7 },
    eO = { x: 5, y: 4 };
function eF(e) {
    let { listClassName: t, radius: n, children: l } = e,
        [r, s] = i.useState(!1);
    return (0, a.jsxs)("div", {
        className: eL.n,
        onMouseEnter: () => s(!0),
        onMouseLeave: () => s(!1),
        children: [
            (0, a.jsx)("ol", { className: t, children: l }),
            r ? (0, a.jsx)(eR.C, { area: 64, radius: n, color: O.A.colors.TEXT_BRAND }) : null,
        ],
    });
}
var ez = n(864970),
    eU = n(707554),
    eG = n(770178),
    eq = n(765548),
    e$ = n(595528),
    eB = n(885576),
    eH = n(662429);
let eV = "heading-xxl/semibold",
    eW = !1;
function eK() {
    let e = i.useRef(null),
        [t, n] = i.useState(!0),
        l = (0, eq.A)((e) => {
            n(e.target.clientWidth >= 500);
        }),
        r = (0, eG.w)(l, [], { fireOnMount: !0 }),
        s = (0, c.bG)([e$.A], () => e$.A.isConnected());
    i.useEffect(() => {
        if (!s || !t || eW) return;
        let n = !1,
            l = 0;
        function a() {
            n ||
                (l = window.setTimeout(() => {
                    ((eW = !0), e.current?.play());
                }, 400));
        }
        let i = document.fonts;
        return (
            null == i ? a() : i.load("16px 'AI Visual Identity Glyphs'", "123456789ABC").then(a, a),
            () => {
                ((n = !0), window.clearTimeout(l));
            }
        );
    }, [s, t]);
    let o = (0, c.bG)([eB.A], () => eB.A.isIdle()),
        u = i.useRef(o);
    i.useEffect(() => {
        let t = u.current && !o;
        ((u.current = o), t && eW && (e.current?.stop(), e.current?.play()));
    }, [o]);
    let d = ed.intl.string(eu.default["+5XyCR"]);
    return (0, a.jsx)("div", {
        ref: r,
        className: eH.x,
        children: t
            ? (0, a.jsx)(eU.H, { children: (0, a.jsx)(ez.o, { ref: e, text: d, variant: eV, delay: null }) })
            : (0, a.jsx)(I.D, { variant: eV, children: d }),
    });
}
var eX = n(548118);
let eY = "user",
    eJ = Object.freeze({ x: 0.5, y: 0.5 });
function eQ(e) {
    return "" !== e.trim();
}
function eZ(e) {
    let t = e.name.trim(),
        n = (function (e) {
            switch (e.role) {
                case "button":
                    return "Button";
                case "link":
                    return "Link";
                case "heading":
                    return "Heading";
                case "textbox":
                    return "Input";
                case "checkbox":
                    return "Checkbox";
                case "radio":
                    return "Radio";
                case "combobox":
                    return "Dropdown";
                case "slider":
                    return "Slider";
                case "switch":
                    return "Toggle";
                case "img":
                    return "Image";
                case "list":
                    return "List";
                case "listitem":
                    return "List item";
                case "tab":
                    return "Tab";
                case "menuitem":
                    return "Menu item";
                case "dialog":
                    return "Dialog";
                case "progressbar":
                    return "Progress bar";
                case "separator":
                    return "Divider";
                case "label":
                    return "Label";
            }
            switch (e.tag) {
                case "img":
                case "picture":
                    return "Image";
                case "svg":
                    return "Icon";
                case "video":
                    return "Video";
                case "canvas":
                    return "Canvas";
                case "p":
                case "span":
                case "strong":
                case "em":
                case "small":
                case "blockquote":
                case "code":
                case "li":
                    return "Text";
                case "form":
                    return "Form";
                case "ul":
                case "ol":
                    return "List";
                case "table":
                    return "Table";
                case "header":
                    return "Header";
                case "footer":
                    return "Footer";
                case "nav":
                    return "Navigation";
                case "section":
                case "article":
                case "main":
                case "aside":
                case "figure":
                    return "Section";
                case "div":
                    return "Container";
            }
            return null;
        })(e);
    return null == n
        ? "" === t
            ? { kind: "" !== e.role ? e.role : e.tag, name: "" }
            : { kind: "", name: t }
        : { kind: n, name: t };
}
function e0(e) {
    let { kind: t, name: n } = eZ(e);
    return [t, n].filter((e) => "" !== e).join(" ");
}
function e2(e) {
    let t = [`<${e.tag}>`];
    "" !== e.role && t.push(`role=${e.role}`);
    let n = e.name.trim();
    return (
        "" !== n && t.push(`name="${n}"`),
        null != e.value && "" !== e.value && t.push(`value="${e.value}"`),
        null != e.path && "" !== e.path && t.push(`path="${e.path}"`),
        null != e.marker && t.push(`marker="${e.marker}"`),
        t.push(`at x=${e.rect.x} y=${e.rect.y}`),
        t.push(`size ${e.rect.width}x${e.rect.height}`),
        t.push(`ref=${e.ref}`),
        t.join(" ")
    );
}
let e1 = "[vibegrations:selected] ",
    e6 = " \u2014 ";
function e9(e) {
    if (!e.startsWith(e1)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        a = n.slice(e1.length),
        i = a.indexOf(e6),
        r = (-1 === i ? a : a.slice(0, i)).trim();
    return "" === r ? null : { label: r, body: l };
}
let e3 = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    e5 = new Map(),
    e4 = new Set();
function e7(e) {
    return e5.get(e) ?? e3;
}
function e8(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? e5.set(e, t) : e5.delete(e), [...e4]))
        try {
            n();
        } catch (e) {
            console.error("[vibegrations] design feedback subscriber threw", e);
        }
}
function te(e) {
    e5.has(e) && e8(e, e3);
}
function tt(e, t) {
    let n = e7(e);
    n.active && e8(e, { ...n, context: t });
}
function tn(e, t) {
    return null != t && e.authorId === t;
}
function tl(e) {
    return (
        e4.add(e),
        () => {
            e4.delete(e);
        }
    );
}
function ta(e) {
    let t = i.useCallback(() => (null == e ? e3 : e7(e)), [e]);
    return i.useSyncExternalStore(tl, t, t);
}
var ti = n(855793),
    tr = n(128761),
    ts = n(967008),
    to = n(900797),
    tu = n(320448),
    td = n(783977),
    tc = n(344587),
    tm = n(534554),
    tf = n(837984),
    th = n(359589),
    tp = n(254575);
function tg(e) {
    let [t, n] = i.useState(e),
        [l, a] = i.useState(!1),
        [r, s] = i.useState(e);
    return (
        r !== e && (s(e), e ? n(!0) : a(!1)),
        i.useEffect(() => {
            if (e || !t) return;
            let l = setTimeout(() => n(!1), 150);
            return () => clearTimeout(l);
        }, [e, t]),
        i.useEffect(() => {
            if (!t || !e) return;
            let n = 0,
                l = requestAnimationFrame(() => {
                    n = requestAnimationFrame(() => a(!0));
                });
            return () => {
                (cancelAnimationFrame(l), cancelAnimationFrame(n));
            };
        }, [t, e]),
        { mounted: t, entered: l }
    );
}
function tx(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: o, placement: u, open: d, entered: c } = e,
        [m, f] = i.useState(!1),
        h = tg(m),
        p = Z.PY.indexOf(t.tier),
        g = m ? to.t : tu._,
        x = Z.PY.map(tm.D0),
        b = (0, tm.Tc)(t.tier),
        { text: v, phase: j } = (0, tc.Q)(b);
    return (0, a.jsx)("div", {
        className: tp.qd,
        "data-placement": u ?? void 0,
        children: (0, a.jsxs)("div", {
            className: s()(tp.t$, { [tp.Zr]: d && c, [tp.GF]: !d }),
            role: "dialog",
            "aria-label": ed.intl.string(eu.default["3E7Yc0"]),
            children: [
                h.mounted
                    ? (0, a.jsx)("div", {
                          className: s()(tp.Nr, tp.uO, { [tp.Zr]: m && h.entered, [tp.GF]: !m }),
                          children: (0, a.jsx)(th.bR, { settings: t, tiers: n, choices: l, disabled: r, onChange: o }),
                      })
                    : null,
                (0, a.jsxs)("div", {
                    className: `${tp.Nr} ${tp.rF}`,
                    children: [
                        (0, a.jsxs)("div", {
                            className: tp.wx,
                            children: [
                                (0, a.jsxs)("button", {
                                    type: "button",
                                    className: tp.y6,
                                    "aria-expanded": m,
                                    "aria-label": ed.intl.string(eu.default.eGqPbV),
                                    onClick: () => f((e) => !e),
                                    children: [
                                        (0, a.jsx)(y.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: ed.intl.string(eu.default.aBPQxX),
                                        }),
                                        (0, a.jsx)(g, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: tp.vg,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(y.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: s()(tp.Z, { [tp.xQ]: "exit" === j, [tp.lm]: "enter" === j }),
                                    children: v,
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: tp.hs,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: tp.Nb,
                                    children: [
                                        (0, a.jsx)(y.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: ed.intl.string(eu.default["/tlOR5"]),
                                        }),
                                        (0, a.jsx)(y.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: ed.intl.string(eu.default.FxoUwB),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(tf.A, {
                                    activeIndex: p,
                                    stops: x,
                                    ariaLabel: ed.intl.string(eu.default.aBPQxX),
                                    disabled: r,
                                    onSelect: function (e) {
                                        let n = Z.PY[e];
                                        null != n && n !== t.tier && o((0, tm.CM)((0, tm.j6)(t, n)));
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function tb(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: s, className: o, icon: u } = e,
        d = i.useRef(null),
        [c, m] = (0, th.FT)(t, s),
        [f, h] = i.useState(!1),
        { mounted: p, entered: g } = tg(f);
    return (0, a.jsx)(ee.Y, {
        targetElementRef: d,
        position: "top",
        align: "right",
        shouldShow: p,
        onRequestClose: () => h(!1),
        animation: ee.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, a.jsx)(tx, {
                settings: c,
                tiers: n ?? null,
                choices: l,
                disabled: r,
                onChange: m,
                placement: t,
                open: f,
                entered: g,
            });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, a.jsx)(w.m, {
                text: ed.intl.string(eu.default["k2JN/p"]),
                shouldShow: !n,
                ariaHidden: !0,
                children: (0, a.jsx)(j.D, {
                    innerRef: d,
                    className: o ?? tp.hZ,
                    "aria-label": ed.intl.string(eu.default["k2JN/p"]),
                    ...e,
                    onClick: () => h((e) => !e),
                    "aria-expanded": f,
                    children: u ?? (0, a.jsx)(td.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
var tv = n(111534),
    ty = n(573083),
    tj = n(855859),
    tw = n(238490),
    tk = n(598748),
    tC = n(294323),
    tA = n(25451),
    tN = n(280450),
    tS = n(86147),
    tE = n(729475),
    tI = n(91242),
    tT = n(869146),
    tP = n(475815),
    tM = n(621466);
function t_(e) {
    return null == e ? null : document.querySelector(`[data-frame-id="${CSS.escape(e)}"]`);
}
function tR(e) {
    let t;
    return (
        null != e &&
        ((t =
            document.fullscreenElement ??
            document.webkitFullscreenElement ??
            document.mozFullScreenElement ??
            document.msFullscreenElement ??
            null),
        ((0, tM.vq)(t, Element) ? t.getAttribute("data-frame-id") : null) === e)
    );
}
function tL(e) {
    return (0, tP.a3)(document, e);
}
function tD(e) {
    return i.useSyncExternalStore(tL, () => tR(e));
}
var tO = n(165610);
function tF(e) {
    let { frame: t, controlProjectId: n } = e,
        l = tD(t?.id ?? null),
        i = (0, ty.Zv)(n),
        r = (0, c.bG)(
            [tT.A, tI.A],
            () => null != t && tT.A.getWindowOpen(ev.MLl.ACTIVITY_POPOUT) && tI.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, tO.x1)(t) || r || i) return null;
    let s = t_(t.id);
    if (null == s || !(0, tP.Ub)(s)) return null;
    let o = ed.intl.string(l ? ed.t.Z7MyNB : ed.t.OIDkcp);
    return (0, a.jsx)(H.A.Icon, {
        tooltip: o,
        icon: l ? tS.z : tE.T,
        "aria-label": o,
        role: "switch",
        "aria-checked": l,
        selected: l,
        onClick: () => {
            var e;
            let n;
            null != (n = t_((e = t.id))) && (0, tP.Ub)(n) && (tR(e) ? (0, tP.sP)(n) : (0, tP.tl)(n));
        },
    });
}
var tz = n(629584),
    tU = n(696645),
    tG = n(861899);
function tq(e) {
    let { modes: t, mode: n, onChange: l, className: r } = e,
        o = i.useMemo(() => t.map((e) => ({ value: e, name: (0, tU.kZ)(e), "aria-controls": (0, tU.z3)(e) })), [t]),
        u = i.useCallback(
            (e) => {
                l(e.value);
            },
            [l],
        );
    return null == n
        ? null
        : (0, a.jsx)(tz.I, {
              role: "tablist",
              look: "pill",
              className: s()(tG.b, r),
              optionClassName: tG.u,
              options: o,
              value: n,
              onChange: u,
          });
}
var t$ = n(226178),
    tB = n(434279),
    tH = n(287809),
    tV = n(427262),
    tW = n(245179),
    tK = n(803306);
let tX = new Set(),
    tY = new Map();
function tJ(e, t, n) {
    return null == e ? (n ?? null) : (t ?? null);
}
function tQ(e) {
    if (null == e || tX.has(e) || null != tH.default.getUser(e)) return;
    let t = tY.get(e) ?? 0;
    t >= 3 ||
        (tY.set(e, t + 1),
        tX.add(e),
        tK
            .wz(e)
            .finally(() => tX.delete(e))
            .catch(() => {}));
}
var tZ = n(16619),
    t0 = n(782603),
    t2 = n(780338),
    t1 = n(663417),
    t6 = n(70688),
    t9 = n(173936),
    t3 = n(473935),
    t5 = n(408278),
    t4 = n(365199),
    t7 = n(7437),
    t8 = n(147036),
    ne = n(957565),
    nt = n(785389),
    nn = n(123917);
let nl = new Set();
var na = n(616334),
    ni = n(189714),
    nr = n(552821);
let ns = [];
function no(e) {
    (0, x.P)((0, b.o)(e, v.Ck.FAILURE));
}
function nu(e) {
    let {
            projectId: t,
            projectName: n,
            guildId: l,
            projectGuildId: r,
            isOwner: s,
            canRemix: o,
            onExport: u,
            onImport: d,
            onRemix: f,
            onConnectTool: h,
            onHistory: p,
            onRefresh: g,
            isRefreshing: y = !1,
            onClose: j,
            refreshApplicationId: w,
            previewProjectId: k,
            onCloseMenu: C,
        } = e,
        A = (0, ni.iI)(t),
        { pending: N, refresh: S } = (0, t7.A)(w ?? null),
        { pending: I, connect: T } = (function (e, t) {
            let [n, l] = i.useState(nl),
                a = i.useRef(nl),
                r = i.useCallback((e) => {
                    ((a.current = (0, nt.Q6)(a.current, e)), l(a.current));
                }, []);
            return {
                pending: n,
                connect: i.useCallback(
                    (n) => {
                        if (null == e) return;
                        let i = (0, nt.K9)(a.current, n.type);
                        async function s() {
                            let l = await (0, ea.JI)(e, n.type);
                            (r(n.type), "url" === l.type)
                                ? (0, nn.h)({ href: l.url, trusted: !1 })
                                : t(
                                      "setup" === (0, nt.rq)(l.error)
                                          ? ed.intl.string(eu.default["jCQ/1B"])
                                          : ed.intl.string(eu.default.POxkSh),
                                  );
                        }
                        null != i && ((a.current = i), l(i), s().catch(() => r(n.type)));
                    },
                    [t, e, r],
                ),
            };
        })(k ?? null, no),
        P = (0, c.bG)([ea.Ay], () => (null == k ? ns : ea.Ay.getDeclaredConnections(k))),
        M = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: l, connectPending: a } = e,
                i = [];
            for (let { connection: e, offer: r } of (t &&
                i.push({
                    id: "preview-refresh",
                    label: ed.intl.string(eu.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            l))
                i.push(
                    "authorize" === r
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: ed.intl.formatToPlainString(eu.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: a.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: ed.intl.formatToPlainString(eu.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return i;
        })({
            canRefresh: null != w,
            refreshPending: N,
            offers: i.useMemo(() => (0, nt.Xl)(P), [P]),
            connectPending: I,
        }),
        _ = i.useMemo(() => new Map(P.map((e) => [e.type, e])), [P]),
        R = null != f && o,
        L = s && null != d,
        D = R || null != u || L || null != h || null != p,
        O = ne.p5 && null != l,
        F = ne.p5,
        z = A ? t0.BellIcon : t2.BellSlashIcon;
    return (0, a.jsxs)(et.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": ed.intl.string(ed.t.ogxXGq),
        onClose: C,
        onSelect: C,
        children: [
            null != g || null != j
                ? (0, a.jsxs)(en.rX, {
                      children: [
                          null != g
                              ? (0, a.jsx)(en.Dr, {
                                    id: "refresh",
                                    icon: t1.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: t1.RefreshIcon },
                                    label: ed.intl.string(eu.default["p4B/7M"]),
                                    disabled: y,
                                    action: g,
                                })
                              : null,
                          null != j
                              ? (0, a.jsx)(en.Dr, {
                                    id: "close",
                                    icon: t6.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: t6.DoorExitIcon },
                                    label: ed.intl.string(eu.default["/TlGcK"]),
                                    action: j,
                                })
                              : null,
                      ],
                  })
                : null,
            M.length > 0
                ? (0, a.jsx)(en.rX, {
                      children: M.map((e) =>
                          (0, a.jsx)(
                              en.Dr,
                              {
                                  id: e.id,
                                  label: e.label,
                                  disabled: e.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === e.kind) return void S();
                                      let t = null == e.connectionType ? null : _.get(e.connectionType);
                                      null != t && T(t);
                                  },
                              },
                              e.id,
                          ),
                      ),
                  })
                : null,
            (0, a.jsx)(en.rX, {
                children: (0, a.jsx)(en.Dr, {
                    id: "mute",
                    label: ed.intl.string(A ? eu.default.s9rCuH : eu.default["a+i/As"]),
                    icon: z,
                    leadingAccessory: { type: "icon", icon: z },
                    action: () => (0, ni.$L)(t, !A),
                }),
            }),
            D
                ? (0, a.jsxs)(en.rX, {
                      children: [
                          R
                              ? (0, a.jsx)(en.Dr, { id: "remix", label: ed.intl.string(eu.default.XWgAfc), action: f })
                              : null,
                          null != u
                              ? (0, a.jsx)(en.Dr, { id: "export", label: ed.intl.string(eu.default.WsEEP7), action: u })
                              : null,
                          L
                              ? (0, a.jsx)(en.Dr, { id: "import", label: ed.intl.string(eu.default.rWGY3e), action: d })
                              : null,
                          null != h
                              ? (0, a.jsx)(en.Dr, {
                                    id: "connect-tool",
                                    label: ed.intl.string(eu.default.yOIql5),
                                    action: h,
                                })
                              : null,
                          null != p
                              ? (0, a.jsx)(en.Dr, {
                                    id: "history",
                                    label: ed.intl.string(eu.default["3hIVou"]),
                                    action: p,
                                })
                              : null,
                      ],
                  })
                : null,
            F
                ? (0, a.jsxs)(en.rX, {
                      children: [
                          O
                              ? (0, a.jsx)(en.Dr, {
                                    id: "copy-link",
                                    label: ed.intl.string(ed.t.WqhZss),
                                    icon: t9.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: t9.LinkIcon },
                                    action: () =>
                                        (0, ne.C)((0, t8.n)(l, ey.VV.CONJURE, t), () =>
                                            (0, x.P)((0, b.o)(ed.intl.string(ed.t["L/PwZf"]), v.Ck.SUCCESS)),
                                        ),
                                })
                              : null,
                          (0, a.jsx)(en.Dr, {
                              id: "copy-project-id",
                              label: ed.intl.string(eu.default["nm/zuU"]),
                              icon: t3.L,
                              leadingAccessory: { type: "icon", icon: t3.L },
                              action: () =>
                                  (0, ne.C)(t, () =>
                                      (0, x.P)((0, b.o)(ed.intl.string(eu.default.CmfaZG), v.Ck.SUCCESS)),
                                  ),
                          }),
                      ],
                  })
                : null,
            s
                ? (0, a.jsxs)(en.rX, {
                      children: [
                          (0, a.jsx)(en.Dr, {
                              id: "settings",
                              label: ed.intl.string(eu.default.FzfmQ8),
                              icon: E.SettingsIcon,
                              leadingAccessory: { type: "icon", icon: E.SettingsIcon },
                              action: () => (0, na.A)(t, { guildId: r ?? l, initialTab: "project", isPreview: !0 }),
                          }),
                          (0, a.jsx)(en.Dr, {
                              id: "delete",
                              label: ed.intl.string(ed.t.oyYWHE),
                              color: "danger",
                              action: () => {
                                  (0, m.A)({
                                      title: ed.intl.formatToPlainString(eu.default.CJBhb2, { name: n }),
                                      subtitle: ed.intl.string(eu.default["0OmrVn"]),
                                      confirmText: ed.intl.string(ed.t.oyYWHE),
                                      variant: "critical",
                                      onConfirm: () => {
                                          (0, eP.K)(t, () =>
                                              (0, x.P)((0, b.o)(ed.intl.string(eu.default["0XDHob"]), v.Ck.FAILURE)),
                                          );
                                      },
                                  });
                              },
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function nd(e) {
    let { trigger: t = "header", ...n } = e,
        l = i.useRef(null);
    return (0, a.jsx)(ee.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: ee.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(nu, { ...n, onCloseMenu: t });
        },
        children: (e, n) => {
            let { onClick: i } = e,
                { isShown: r } = n;
            return (0, a.jsx)("div", {
                ref: l,
                className: nr.h,
                children:
                    "iconButton" === t
                        ? (0, a.jsx)(w.m, {
                              text: ed.intl.string(ed.t["UKOtz+"]),
                              children: (0, a.jsx)(t5.K, {
                                  icon: t4.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": ed.intl.string(ed.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": r,
                                  onClick: i,
                              }),
                          })
                        : (0, a.jsx)(H.A.Icon, {
                              icon: t4.MoreHorizontalIcon,
                              tooltip: ed.intl.string(ed.t["UKOtz+"]),
                              "aria-label": ed.intl.string(ed.t["UKOtz+"]),
                              "aria-haspopup": "menu",
                              "aria-expanded": r,
                              selected: r,
                              onClick: i,
                          }),
            });
        },
    });
}
var nc = n(845079),
    nm = n(104171),
    nf = n(286739);
function nh(e) {
    let { creator: t, className: n } = e;
    return (0, a.jsx)("div", {
        className: s()(nf.c, n),
        "aria-hidden": !0,
        children: (0, a.jsx)(nm.Ay, { users: [t.creator, ...t.collaborators], max: 3, size: nm.DN.SIZE_16 }),
    });
}
var np = n(580954),
    ng = n(246338);
let nx = "user",
    nb = "no-server",
    nv = new Map();
function ny(e) {
    return nv.get(e) ?? null;
}
function nj(e) {
    switch (e) {
        case "all":
        case nx:
        case nb:
            return null;
        default:
            return e;
    }
}
function nw(e, t) {
    switch (t) {
        case "all":
            return !0;
        case nx:
            return "user" === e.install_scope;
        case nb:
            return null == (0, tB.wu)(e);
        default:
            return e.guild_id === t || e.preview_guild_id === t;
    }
}
var nk = n(506774);
let nC = "VibegrationsProjectsPanelOpen";
function nA() {
    return nk.w.get(nC) ?? null;
}
function nN(e) {
    return `VibegrationsProjectsPanel:${e}`;
}
function nS(e, t, n) {
    return t?.integration_installed === !0 && e?.guild_id != null ? e.guild_id : n;
}
async function nE(e, t) {
    (e.guild_id !== t || e.preview_guild_id !== t) && (await (0, eP.M7)(e.id, { guild_id: t, preview_guild_id: t }));
}
var nI = n(73153),
    nT = n(587895),
    nP = n(321191),
    nM = n(808728),
    n_ = n(342110),
    nR = n(385081),
    nL = n(645070);
function nD(e) {
    let { installScope: t, status: n, integrationStatus: l, guildName: a, appChannelName: i } = e;
    if (null == n) return null;
    let r = n.surface;
    if ("unpublished" === n.state && null == r && l?.preview_ready !== !0) return null;
    let s =
            null == r
                ? null
                : "user" === t
                  ? (function (e) {
                        switch (e) {
                            case "bot":
                                return {
                                    update: ed.intl.string(eu.default.JpDnbE),
                                    open: ed.intl.string(eu.default.NNIwRu),
                                    destination: "dm",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "activity":
                                return {
                                    update: ed.intl.string(eu.default.QesMDC),
                                    open: ed.intl.string(eu.default.iyQTsb),
                                    destination: "launch",
                                    navigatesOnFirstPublish: !1,
                                    navigatesOnUpdate: !1,
                                };
                            case "widget":
                                return {
                                    update: ed.intl.string(eu.default["LUi/55"]),
                                    open: ed.intl.string(eu.default.TXUK1g),
                                    destination: "profile",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !0,
                                };
                            case "automod":
                                return null;
                        }
                    })(r)
                  : (function (e, t, n) {
                        if (null == t) return null;
                        let l = ed.intl.formatToPlainString(eu.default.fTgw6C, { server: t });
                        switch (e) {
                            case "bot":
                                return {
                                    update: ed.intl.string(eu.default.JpDnbE),
                                    open: l,
                                    destination: "guild",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "activity":
                                return {
                                    update: ed.intl.string(eu.default.QesMDC),
                                    open:
                                        null == n ? l : ed.intl.formatToPlainString(eu.default.l9xGQD, { channel: n }),
                                    destination: "channel",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "automod":
                                return {
                                    update: ed.intl.string(eu.default.bwBMMn),
                                    open: ed.intl.string(eu.default.KjbLum),
                                    destination: "automod",
                                    navigatesOnFirstPublish: !1,
                                    navigatesOnUpdate: !1,
                                };
                            case "widget":
                                return null;
                        }
                    })(r, a, i),
        o = (function (e) {
            let { installScope: t, status: n, appChannelName: l, appChannelPending: a, botInGuild: i } = e;
            return (
                "guild" === t &&
                null != n &&
                "unpublished" !== n.state &&
                ("activity" === n.surface ? null == l && !0 !== a : "bot" === n.surface && !1 === i)
            );
        })(e);
    if (null != s && "up_to_date" === n.state && !o)
        return {
            label: s.open,
            intent: "open",
            action: "open",
            destination: s.destination,
            navigatesOnPublish: !1,
            upToDate: !0,
            isUpdate: !1,
            disabledReason: null,
        };
    let u = (function (e) {
            let {
                installScope: t,
                guildName: n,
                canManageGuild: l,
                canManageChannels: a,
                usesNativeAppChannels: i,
            } = e;
            if ("guild" !== t) return null;
            let r = !1 === l,
                s = i && !1 === a,
                o = { server: n ?? "" };
            return r && s
                ? ed.intl.formatToPlainString(eu.default["4sqXfg"], o)
                : r
                  ? ed.intl.formatToPlainString(eu.default.N4NkyR, o)
                  : s
                    ? ed.intl.formatToPlainString(eu.default.PxtHIV, o)
                    : null;
        })(e),
        d = (0, tw.Qg)({
            installScope: t,
            previewReady: l?.preview_ready === !0,
            integrationInstalled: l?.integration_installed ?? null,
            botPermissionsChanged: l?.bot_permissions_changed === !0,
        }),
        c = "changes" === n.state && !o,
        m = {
            intent: d ? "consent_then_publish" : "publish",
            destination: s?.destination ?? null,
            upToDate: !1,
            isUpdate: c,
            disabledReason: u,
        },
        f = null != s && (c ? s.navigatesOnUpdate : s.navigatesOnFirstPublish);
    if (d && l?.bot_permissions_changed === !0)
        return {
            ...m,
            label: ed.intl.string(eu.default["tUeY/h"]),
            action: "review_permissions",
            navigatesOnPublish: f,
        };
    let h = s?.update ?? ed.intl.string(eu.default.QesMDC);
    return { ...m, label: c ? h : ed.intl.string(eu.default["120EFN"]), action: "publish", navigatesOnPublish: f };
}
var nO = (((l = {}).NO_PREVIEW = "no-preview"), (l.PERMISSIONS = "permissions"), l),
    nF = n(308528),
    nz = n(345942);
let nU = i.createContext(null);
function nG(e) {
    return nT.A.getApplication(e.application_id)?.bot?.id ?? e.application_id;
}
function nq(e, t) {
    let n = eM.Ay.getProject(e);
    if (null == n) return null;
    let l = "user" === n.install_scope ? null : (n.guild_id ?? t),
        a = null == l ? null : (0, ng.i8)(l, n.application_id),
        i = null == l ? null : J.A.getGuild(l);
    return {
        project: n,
        guildId: l,
        appChannelId: a,
        input: {
            installScope: n.install_scope,
            status: eM.Ay.getPublishStatus(e),
            integrationStatus: eM.Ay.getIntegrationStatus(e),
            guildName: i?.name ?? null,
            appChannelName: null == a ? null : (X.A.getChannel(a)?.name ?? null),
            appChannelPending: eM.Ay.isAppChannelPending(e),
            canManageGuild: null == i ? null : Q.A.can(ev.xBc.MANAGE_GUILD, i),
            canManageChannels: null == i ? null : Q.A.can(ev.xBc.MANAGE_CHANNELS, i),
            usesNativeAppChannels: (0, Z.KQ)(n),
            botInGuild: (function (e, t) {
                if (null == t) return null;
                let n = nP.A.getMutualGuilds(nG(e));
                return null == n
                    ? null
                    : n.some((e) => {
                          let { guild: n } = e;
                          return n.id === t;
                      });
            })(n, l),
        },
    };
}
function n$(e, t, n) {
    return (function (e, t) {
        let n,
            { applicationId: l, guildId: a, appChannelId: i, openProfile: r, openAutomodSettings: s } = t;
        switch (e) {
            case "launch":
                if ((0, tA.X)(nT.A.getApplication(l)))
                    return (q.A.launchFrame({ applicationId: l, surface: tO.sd }).catch(() => {}), Promise.resolve());
                break;
            case "profile": {
                let e = tH.default.getCurrentUser()?.id;
                if (null != e) return (r(e), Promise.resolve());
                break;
            }
            case "channel":
                if (null != a && null != i) return ((0, V.pX)(ev.BVt.CHANNEL(a, i)), Promise.resolve());
                break;
            case "automod":
                if (null != a && null != s) return (s(a), Promise.resolve());
        }
        if ("dm" !== e && null != a) {
            let e;
            return (
                null != (e = nM.Ay.getDefaultChannel(a)?.id) ? (0, V.pX)(ev.BVt.CHANNEL(a, e)) : (0, nz.u)(a),
                Promise.resolve()
            );
        }
        return ((n = nT.A.getApplication(l)?.bot?.id ?? l), nF.A.openPrivateChannel({ recipientIds: n }));
    })(t, {
        applicationId: e.project.application_id,
        guildId: e.guildId,
        appChannelId: e.appChannelId,
        openProfile: n.openProfile,
        openAutomodSettings: n.openAutomodSettings,
    });
}
async function nB(e, t) {
    let n = eM.Ay.getProject(e),
        l = n?.preview_application_id;
    if (null == n || null == l) return;
    let a = nS(n, eM.Ay.getIntegrationStatus(e), t);
    (null == nT.A.getApplication(l) && (await (0, z.TA)(l).catch(() => {})),
        await new Promise((e) => {
            nL.A.openConjureAppInstallModal({
                applicationId: l,
                application: nT.A.getApplication(l) ?? null,
                guildId: a,
                onClose: e,
            });
        }),
        await nE(n, a).catch(() => {}),
        await (0, eP.U1)(e).catch(() => {}));
}
let nH = new Set(["dm", "guild", "channel"]);
function nV(e, t, n) {
    let { project: l } = e,
        { platform: a, guildId: i } = n,
        r = l.id,
        s = t.navigatesOnPublish ? t.destination : null,
        o = "user" === l.install_scope || null != s ? null : (0, ea.$C)(r);
    (o?.catch(() => {}), "channel" === s && nW(r, !0));
    let u = (0, ea.TV)(r).then((e) => {
            if (!0 !== e.ok) {
                let t;
                throw Error(
                    null != (t = e.detail?.trim()) && "" !== t
                        ? ed.intl.formatToPlainString(eu.default["7ZsIF1"], { reason: t })
                        : ed.intl.string(eu.default.gMWZeG),
                );
            }
            return e;
        }),
        d = u.then(
            () =>
                (0, eP.tZ)(r, { isPreview: !1 }).catch((e) => {
                    console.error("[vibegrations] post-publish refresh failed", r, e);
                }),
            () => {},
        );
    if (
        (u.then(
            () => {
                (null != e.guildId && nX(l),
                    null != s &&
                        (nH.has(s) && (0, n_.cP)(r),
                        d
                            .then(() => ("channel" === s ? nK(r, i) : void 0))
                            .finally(() => nW(r, !1))
                            .then(() => n$(nq(r, i) ?? e, s, a))
                            .catch(() => {})));
            },
            (e) => {
                (nW(r, !1), a.showError(e instanceof Error ? e.message : ed.intl.string(eu.default.gMWZeG)));
            },
        ),
        null != o && null != e.guildId)
    ) {
        let t = u.then(() => {});
        (t.catch(() => {}),
            a.openPublishNotes({
                projectId: r,
                guildId: e.guildId,
                applicationId: l.application_id,
                projectName: l.name,
                publish: t,
                initialDraft: o,
            }));
    }
}
function nW(e, t) {
    nI.h.dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: e, pending: t });
}
async function nK(e, t) {
    let n = Date.now() + 5e3;
    for (; nq(e, t)?.appChannelId == null && Date.now() < n;) await new Promise((e) => setTimeout(e, 250));
}
function nX(e) {
    (0, tK.eO)(nG(e), { withMutualGuilds: !0 }).catch(() => {});
}
let nY = new Set();
async function nJ(e, t, n) {
    let { guildId: l, platform: a } = n;
    if (!0 === n.busy || nY.has(e)) return;
    let i = nq(e, l);
    if (null == i || eM.Ay.isProjectPublishing(e)) return;
    let r = nD(i.input);
    if (null != r) {
        if (
            ((0, nR.yJ)(e, {
                entryPoint: t,
                publishState: i.input.status?.state ?? null,
                surface: i.input.status?.surface ?? null,
                installScope: i.project.install_scope,
                action: r.action,
            }),
            "open" === r.intent)
        ) {
            null != r.destination && n$(i, r.destination, a).catch(() => {});
            return;
        }
        if (null == r.disabledReason) {
            if (i.input.integrationStatus?.preview_ready !== !0) return void a.showPublishBlocked(nO.NO_PREVIEW);
            if ("consent_then_publish" === r.intent) {
                nY.add(e);
                try {
                    await (a.requestConsent ?? ((e) => nB(e, l)))(e);
                } finally {
                    nY.delete(e);
                }
                if (eM.Ay.isProjectPublishing(e)) return;
                let t = nq(e, l),
                    i = t?.input.integrationStatus ?? null;
                if (
                    null == t ||
                    (0, tw.Qg)({
                        installScope: t.project.install_scope,
                        previewReady: i?.preview_ready === !0,
                        integrationInstalled: i?.integration_installed ?? null,
                        botPermissionsChanged: i?.bot_permissions_changed === !0,
                    })
                )
                    return;
                nV(t, r, n);
                return;
            }
            nV(i, r, n);
        }
    }
}
function nQ(e, t) {
    let n = i.useContext(nU),
        l = t ?? n,
        a = l?.guildId ?? null,
        {
            canPublish: r,
            publishing: s,
            project: o,
            guildId: u,
            appChannelId: d,
            installScope: m,
            status: f,
            integrationStatus: h,
            guildName: p,
            appChannelName: g,
            appChannelPending: x,
            canManageGuild: b,
            canManageChannels: v,
            usesNativeAppChannels: y,
            botInGuild: j,
        } = (0, c.cf)(
            [eM.Ay, J.A, nM.Ay, X.A, Q.A, nP.A, nT.A],
            () => {
                let t = null == e || null == a ? null : nq(e, a);
                return {
                    canPublish: null != t && (0, eM.jf)(t.project),
                    project: t?.project ?? null,
                    guildId: t?.guildId ?? null,
                    appChannelId: t?.appChannelId ?? null,
                    publishing: null != e && eM.Ay.isProjectPublishing(e),
                    installScope: t?.input.installScope ?? null,
                    status: t?.input.status ?? null,
                    integrationStatus: t?.input.integrationStatus ?? null,
                    guildName: t?.input.guildName ?? null,
                    appChannelName: t?.input.appChannelName ?? null,
                    appChannelPending: t?.input.appChannelPending ?? !1,
                    canManageGuild: t?.input.canManageGuild ?? null,
                    canManageChannels: t?.input.canManageChannels ?? null,
                    usesNativeAppChannels: t?.input.usesNativeAppChannels ?? !1,
                    botInGuild: t?.input.botInGuild ?? null,
                };
            },
            [e, a],
        ),
        w = i.useMemo(
            () =>
                null == o
                    ? null
                    : {
                          installScope: m,
                          status: f,
                          integrationStatus: h,
                          guildName: p,
                          appChannelName: g,
                          appChannelPending: x,
                          canManageGuild: b,
                          canManageChannels: v,
                          usesNativeAppChannels: y,
                          botInGuild: j,
                      },
            [o, m, f, h, p, g, x, b, v, y, j],
        ),
        k = w?.status?.state ?? null,
        C = w?.installScope === "guild" && w.status?.surface === "bot";
    i.useEffect(() => {
        null != o && null != u && C && null != k && "unpublished" !== k && nX(o);
    }, [o?.id, u, C, k]);
    let A = i.useMemo(() => (null == w ? null : nD(w)), [w]),
        N = i.useCallback(
            (t) => {
                null != e &&
                    null != l &&
                    nJ(e, t, l).catch((t) => {
                        console.error("[vibegrations] publish action failed", e, t);
                    });
            },
            [e, l],
        );
    return null != l && r && null != A
        ? {
              ...A,
              status: w?.status ?? null,
              guildId: u,
              appChannelId: d,
              publishing: s,
              disabled: s || !0 === l.busy || null != A.disabledReason,
              run: N,
          }
        : null;
}
var nZ = n(189213);
function n0(e) {
    let { reason: t, transitionState: n, onClose: l } = e,
        i = t === nO.PERMISSIONS;
    return (0, a.jsx)(nZ.a, {
        transitionState: n,
        onClose: l,
        title: ed.intl.string(i ? eu.default.wQ4UyJ : eu.default.ZNGLFE),
        subtitle: ed.intl.string(i ? eu.default.Agqmbt : eu.default.ffxKGK),
        size: "sm",
        actions: [{ text: ed.intl.string(i ? ed.t.BddRzS : eu.default["/omTNx"]), variant: "primary", onClick: l }],
    });
}
var n2 = n(951465),
    n1 = n(95264),
    n6 = n(952644),
    n9 = n(991690),
    n3 = n(58736),
    n5 = n(689175),
    n4 = n(65593),
    n7 = n(115982);
function n8(e) {
    return !(0, tW.BL)(e) && !0 !== e.stopRequested;
}
var le = n(104317),
    lt = n(643278),
    ln = n(566424),
    ll = n(683063),
    la = n(847374),
    li = n(138212);
function lr(e) {
    let { title: t, trailing: n, children: l, className: i, headerClassName: r, ...o } = e;
    return (0, a.jsxs)("section", {
        className: s()(li.Nr, i),
        ...o,
        children: [
            (0, a.jsxs)("header", {
                className: s()(li.wx, null != n && li.o5, r),
                children: [
                    (0, a.jsx)(y.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var ls = n(148590);
function lo(e) {
    let { children: t } = e;
    return (0, a.jsx)(y.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function lu(e) {
    let {
            title: t,
            meta: n,
            superseded: l = !1,
            showLabel: r,
            hideLabel: o,
            bodyClassName: u,
            beforeBody: d,
            children: c,
            ...m
        } = e,
        f = i.useId(),
        [h, p] = i.useState(!l),
        [g, x] = i.useState(l);
    g !== l && (x(l), p(!l));
    let b = i.useCallback(() => p((e) => !e), []),
        v = h ? la.a : tu._,
        y = null != n || l;
    return (0, a.jsxs)(lr, {
        ...m,
        title: t,
        trailing: y
            ? (0, a.jsxs)("span", {
                  className: ls.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(j.D, {
                                className: ls.L$,
                                onClick: b,
                                "aria-expanded": h,
                                "aria-controls": f,
                                "aria-label": h ? o : r,
                                children: (0, a.jsx)(v, { size: "xs", color: "currentColor" }),
                            })
                          : null,
                  ],
              })
            : void 0,
        headerClassName: h ? void 0 : ls.RG,
        "data-superseded": l ? "true" : void 0,
        children: [d, (0, a.jsx)("div", { id: f, className: s()(ls.rf, u), hidden: !h, children: c })],
    });
}
var ld = n(883646);
let lc = [];
function lm(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: s()(ld.xL, {
            [ld.Vb]: "in_progress" === t,
            [ld.cT]: "completed" === t,
            [ld.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return ed.intl.string(eu.default.KvBdun);
                case "in_progress":
                    return ed.intl.string(eu.default["m5G9+S"]);
                case "unfinished":
                    return ed.intl.string(eu.default.lRpwhD);
                default:
                    return ed.intl.string(eu.default.sPGeWi);
            }
        })(t),
        children: [
            (0, a.jsx)(C.y, {
                type: C.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: ld.Qd,
                itemClassName: ld.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: ld.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: ld.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function lf(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : lc), [n, t]),
        r = i.useMemo(() => new Set(l.map((e) => e.key)), [l]),
        s = l.map((e) => e.key).join("\0"),
        [o, u] = i.useState(l),
        [d, c] = i.useState(s),
        [m, f] = i.useState(!1);
    d !== s && (c(s), u([...l, ...o.filter((e) => !r.has(e.key))]), 0 === l.length && f(!1));
    let h = o.some((e) => !r.has(e.key));
    if (
        (i.useEffect(() => {
            if (!h) return;
            let e = setTimeout(() => u(l), n ? 200 : 250);
            return () => clearTimeout(e);
        }, [h, l, n]),
        i.useEffect(() => {
            if (!n || 0 === o.length) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => f(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [n, o.length]),
        0 === o.length)
    )
        return null;
    let p = o.slice(0, 3),
        g = o.length - p.length;
    return (0, a.jsxs)("span", {
        className: ld.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            p.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    ll.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: ld.MA,
                            "data-leaving": r.has(t) ? void 0 : "true",
                            children: (0, a.jsx)(s, { size: 16, alt: l, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            g > 0
                ? (0, a.jsx)(y.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: ld.qA,
                      children: `+${g}`,
                  })
                : null,
        ],
    });
}
function lh(e) {
    let t,
        { todos: n, provisional: l, agents: r, live: o = !0 } = e,
        u = (function (e) {
            let t = e.join("\0"),
                [n, l] = i.useState(() => new Set(e)),
                [a, r] = i.useState(t),
                [s, o] = i.useState(() => new Set());
            return (
                a !== t && (r(t), l(new Set(e)), o(0 === n.size ? new Set() : new Set(e.filter((e) => !n.has(e))))),
                i.useEffect(() => {
                    if (0 === s.size) return;
                    let e = 0,
                        t = requestAnimationFrame(() => {
                            e = requestAnimationFrame(() => o(new Set()));
                        });
                    return () => {
                        (cancelAnimationFrame(t), cancelAnimationFrame(e));
                    };
                }, [s]),
                s
            );
        })(i.useMemo(() => n.map((e) => e.id), [n])),
        d =
            ((t = (r ?? lc).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            i.useMemo(() => {
                let e = new Map();
                for (let t of r ?? lc) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let n = e.get(t.todoId);
                    null != n ? n.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, a.jsxs)("ul", {
        className: ld.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || o ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: s()(ld.AS, { [ld.J1]: "completed" === n }),
                        "data-arriving": u.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(lm, { status: n }),
                            (0, a.jsx)(y.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: ld.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: ld.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(lf, { agents: d.get(e.id) ?? lc, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: ld.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(lm, { status: "pending" }),
                          (0, a.jsx)(y.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: ld.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: ld.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function lp(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: i = !0, live: r = !0, superseded: s = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let d = ed.intl.formatToPlainString(eu.default["P/I+JW"], { completed: o, total: u }),
        c = ed.intl.formatToPlainString(eu.default["7tzwKB"], { completed: o, total: u });
    return (0, a.jsx)(lu, {
        title: ed.intl.string(eu.default.RtzECX),
        meta: (0, a.jsx)(lo, { children: d }),
        superseded: s,
        showLabel: ed.intl.string(eu.default.RKyN9q),
        hideLabel: ed.intl.string(eu.default.xydHoj),
        className: ld.Nr,
        bodyClassName: ld.rf,
        beforeBody: i && !s ? (0, a.jsx)(k.A, { role: "status", "aria-live": "polite", children: c }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(lh, { todos: t, provisional: n, agents: l, live: r }),
    });
}
var lg = n(308665),
    lx = n(59678),
    lb = n(903847);
function lv(e) {
    let { line: t, placement: n, todos: l, todosLive: r = !0, provisionalTodo: o, agents: u, onJumpToActivity: d } = e,
        c = null != n,
        [m, f] = i.useState(n ?? "top"),
        [h, p] = i.useState(c),
        [g, x] = i.useState(!1),
        [b, v] = i.useState(!1),
        [y, k] = i.useState(c);
    (y !== c && (k(c), null != n ? (f(n), p(!0)) : (x(!1), v(!1))),
        i.useEffect(() => {
            if (c || !h) return;
            let e = setTimeout(() => p(!1), 150);
            return () => clearTimeout(e);
        }, [c, h]),
        i.useEffect(() => {
            if (!h || !c) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => x(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [h, c]));
    let [C, A] = i.useState(!1),
        [N, S] = i.useState(!1),
        [E, I] = i.useState(b);
    (E !== b && (I(b), b ? A(!0) : S(!1)),
        i.useEffect(() => {
            if (b || !C) return;
            let e = setTimeout(() => A(!1), 150);
            return () => clearTimeout(e);
        }, [b, C]),
        i.useEffect(() => {
            if (!C || !b) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => S(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [C, b]));
    let T = null != l && l.length > 0,
        P = i.useCallback(() => v((e) => !e), []);
    return h
        ? (0, a.jsxs)("div", {
              className: lb.qd,
              "data-placement": m,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: s()(lb.vK, { [lb.ho]: g && c, [lb.ET]: !c }),
                      children: [
                          null == d
                              ? (0, a.jsx)("ol", {
                                    className: s()(lb.Rk, lx.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(ln.A, {
                                        glyph: (0, a.jsx)(lg.Ay, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(j.D, {
                                    className: lb.pZ,
                                    onClick: d,
                                    "aria-label": ed.intl.string(eu.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: s()(lb.Rk, lx.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(ln.A, {
                                            glyph: (0, a.jsx)(lg.Ay, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          T
                              ? (0, a.jsx)(w.m, {
                                    text: ed.intl.string(eu.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(j.D, {
                                        className: lb.BO,
                                        onClick: P,
                                        "aria-expanded": b,
                                        "aria-label": ed.intl.string(eu.default.RtzECX),
                                        children: (0, a.jsx)(lt.ClipboardListIcon, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: "currentColor",
                                        }),
                                    }),
                                })
                              : null,
                      ],
                  }),
                  C && T
                      ? (0, a.jsx)("div", {
                            className: s()(lb.vB, { [lb.pg]: b && N, [lb.ui]: !b }),
                            children: (0, a.jsx)(lp, {
                                todos: l,
                                provisional: o,
                                agents: u,
                                live: r,
                                announceProgress: !1,
                            }),
                        })
                      : null,
              ],
          })
        : null;
}
var ly = n(658675),
    lj = n(22231),
    lw = n(826745),
    lk = n(123292),
    lC = n(155078);
function lA(e) {
    return e.options.some((e) => null != e.image);
}
let lN = [];
function lS(e, t) {
    return {
        image: e,
        selected: t,
        busy: null,
        error: null,
        onPick: () => void 0,
        onRemove: () => void 0,
        onUpload: () => void 0,
        onLink: () => Promise.resolve(!1),
    };
}
var lE = n(87221),
    lI = n(144228),
    lT = n(241326),
    lP = n(26430),
    lM = n(750943),
    l_ = n(95477),
    lR = n(256905),
    lL = n(839214);
let lD = [],
    lO = 1,
    lF = (0, lL.D)(() => ({ draftsByProject: {} }));
function lz(e, t, n) {
    return e.draftsByProject[t]?.[n] ?? lD;
}
function lU(e, t) {
    return lz(lF.getState(), e, t);
}
function lG(e, t, n) {
    let { draftsByProject: l } = lF.getState();
    lF.setState({ draftsByProject: { ...l, [e]: { ...l[e], [t]: n } } });
}
function lq(e, t, n, l) {
    let a = lU(e, t);
    return (
        !!a.some((e) => e.localId === n) &&
        (lG(
            e,
            t,
            a.map((e) => (e.localId === n ? { ...e, ...l } : e)),
        ),
        !0)
    );
}
function l$(e, t) {
    (0, ea.Vm)(e, t).catch((e) => {
        console.error("[vibegrations] attachment cleanup failed", e);
    });
}
function lB(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && l$(e, t.ref.id));
}
function lH(e, t) {
    let { deleteFromWorker: n } = t,
        { draftsByProject: l } = lF.getState(),
        a = l[e];
    if (null == a) return;
    for (let t of Object.values(a))
        for (let l of t ?? lD) n ? lB(e, l) : null != l.previewUrl && URL.revokeObjectURL(l.previewUrl);
    let { [e]: i, ...r } = l;
    lF.setState({ draftsByProject: r });
}
function lV(e) {
    return ed.intl.formatToPlainString(eu.default.JZ59Bo, { size: (0, Z.sM)((0, Z.Ju)(e)) });
}
function lW(e, t) {
    let n = lU(e, t);
    if (0 !== n.length) {
        for (let t of n) lB(e, t);
        lG(e, t, lD);
    }
}
function lK(e, t) {
    let n = lU(e, t);
    if (0 === n.length) return [];
    for (let e of n) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (lG(e, t, lD), n.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function lX(e, t) {
    let { clarificationAnswers: n, attachments: l = [] } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = lU(e, "chat"),
        i = a.length > 0 && a.every((e) => "ready" === e.status) ? lK(e, "chat") : [];
    (0, ea.dv)(e, t, [...l, ...i], { clarificationAnswers: n });
}
function lY(e, t) {
    let [n, l] = i.useState(null),
        [a, r] = i.useState(!1),
        [s, o] = i.useState(0);
    return (
        i.useEffect(() => {
            let n = !1;
            return (
                (0, ea.PK)(e, t).then(
                    (e) => {
                        n || l(e);
                    },
                    () => {
                        n || (0 === s ? o(1) : r(!0));
                    },
                ),
                () => {
                    n = !0;
                }
            );
        }, [e, t, s]),
        {
            src: n,
            gone: a,
            handleError: i.useCallback(() => {
                (l(null),
                    (0, ea.n6)(e, t).then(
                        (e) => {
                            e && 0 === s ? o(1) : r(!0);
                        },
                        () => r(!0),
                    ));
            }, [e, t, s]),
        }
    );
}
(nI.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(lF.getState().draftsByProject)) lH(e, { deleteFromWorker: !0 });
}),
    nI.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        lH(t, { deleteFromWorker: !1 });
    }));
var lJ = n(907702);
function lQ(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: o, gone: u, handleError: d } = lY(t, n),
        [c, m] = i.useState(null),
        f = null != o && c === o;
    return u
        ? (0, a.jsxs)("span", {
              className: s()(lJ.Gt, lJ.b6),
              children: [
                  (0, a.jsx)(lE.D, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(y.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: ed.intl.string(eu.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: s()(lJ.Gt, { [lJ.iP]: !f }),
              children:
                  null != o
                      ? (0, a.jsx)("img", {
                            src: o,
                            alt: l,
                            className: lJ.Sl,
                            onLoad: (e) => {
                                m(o);
                                let { naturalWidth: t, naturalHeight: n } = e.currentTarget;
                                t > 0 && n > 0 && r({ width: t, height: n });
                            },
                            onError: d,
                            draggable: !1,
                        })
                      : null,
          });
}
function lZ(e) {
    let t,
        n,
        {
            projectId: l,
            option: i,
            multi: r,
            selected: o,
            disabled: u,
            reachable: d,
            tabbable: c,
            onPick: m,
            onView: f,
            onArrow: h,
            onMeasured: p,
            onRemove: g,
        } = e,
        x = ed.intl.formatToPlainString(eu.default.JGjZMs, { answer: i.label });
    return (0, a.jsxs)("div", {
        className: s()(lJ.Vs, { [lJ.Q9]: o, [lJ.RX]: u }),
        "data-conjure-clarification-option": i.id,
        children: [
            (0, a.jsxs)(j.D, {
                className: lJ.Up,
                "data-conjure-image-option-pick": !0,
                onClick: u ? void 0 : () => m(i),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), h(i, t));
                },
                role: r ? "checkbox" : "radio",
                "aria-checked": o,
                "aria-label": ed.intl.formatToPlainString(eu.default.AQbxhf, { answer: i.label }),
                "aria-disabled": u,
                tabIndex: d && c ? 0 : -1,
                children: [
                    (0, a.jsxs)("span", {
                        className: lJ.$_,
                        children: [
                            null != i.image
                                ? (0, a.jsx)(lQ, {
                                      projectId: l,
                                      attachmentId: i.image.attachment_id,
                                      alt: i.label,
                                      onMeasured: p,
                                  })
                                : (0, a.jsx)("span", { className: lJ.Gt }),
                            (0, a.jsx)("span", {
                                className: lJ.q3,
                                "aria-hidden": !0,
                                children: r
                                    ? (0, a.jsx)(ly.P, { checked: o, disabled: u })
                                    : (0, a.jsx)(lI.T, { checked: o, disabled: u }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(y.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: lJ.pG,
                        children:
                            "" !== (n = null != (t = i.image?.page_url ?? i.image?.url) ? (0, lC.E)(t) : "")
                                ? (function (e) {
                                      let t = e.toLowerCase().split(".");
                                      if (t.length < 2 || /^\d+$/.test(t[t.length - 1]) || e.includes(":")) return e;
                                      let [n, l] = t.slice(-2),
                                          a = t.length > 2 && 2 === l.length && n.length <= 3;
                                      return t.slice(a ? -3 : -2).join(".");
                                  })(n)
                                : i.label,
                    }),
                ],
            }),
            null != g
                ? (0, a.jsx)("span", {
                      className: lJ.B4,
                      children: (0, a.jsx)(w.m, {
                          text: ed.intl.string(eu.default.HQEXJM),
                          children: (0, a.jsx)(t5.K, {
                              icon: lT.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: g,
                              disabled: u,
                              "aria-label": ed.intl.string(eu.default.HQEXJM),
                              tabIndex: d ? 0 : -1,
                          }),
                      }),
                  })
                : null != i.image
                  ? (0, a.jsx)("span", {
                        className: lJ.B4,
                        children: (0, a.jsx)(w.m, {
                            text: ed.intl.string(eu.default["4/eeDD"]),
                            children: (0, a.jsx)(t5.K, {
                                icon: lP._,
                                size: "sm",
                                variant: "overlay-secondary",
                                onClick: () => f(i),
                                "aria-label": x,
                                tabIndex: d && c ? 0 : -1,
                            }),
                        }),
                    })
                  : null,
        ],
    });
}
function l0(e) {
    var t;
    let { projectId: n, question: l, selectedIds: r, disabled: o, reachable: u = !0, onPick: d, own: c } = e,
        m = !0 === l.multi_select,
        { options: f } = l,
        h = f.length > 4 ? "gallery" : "row",
        p = i.useRef(null),
        g = i.useRef(new Map()),
        [x, b] = i.useState(null),
        v = null != x && f.some((e) => e.id === x) ? x : (f.find((e) => r.includes(e.id)) ?? f[0])?.id,
        y = i.useCallback(
            (e) => {
                let t = f.flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    l = t.findIndex((t) => t.id === e.id);
                l < 0 ||
                    Promise.all(t.map((e) => (0, ea.PK)(n, e.image.attachment_id))).then(
                        (e) => {
                            (0, lR.R)({
                                items: e.map((e, n) => {
                                    let l,
                                        a = g.current.get(t[n].id);
                                    return {
                                        type: "IMAGE",
                                        url: e,
                                        original: e,
                                        alt: t[n].label,
                                        ...(null != a
                                            ? ((l = Math.max(1, 480 / Math.max(a.width, a.height))),
                                              { width: Math.round(a.width * l), height: Math.round(a.height * l) })
                                            : {}),
                                    };
                                }),
                                startingIndex: l,
                                shouldHideMediaOptions: !0,
                                location: "VibegrationsClarificationImageOptions",
                            });
                        },
                        () => {},
                    );
            },
            [f, n],
        ),
        j = i.useCallback(
            (e, t) => {
                let n = (f.findIndex((t) => t.id === e.id) + t + f.length) % f.length,
                    l = f[n];
                (b(l.id), p.current?.querySelectorAll("[data-conjure-image-option-pick]")[n]?.focus(), m || o || d(l));
            },
            [o, m, d, f],
        ),
        w =
            null == c.image
                ? null
                : ((t = c.image),
                  {
                      id: `own:${t.attachment.id}`,
                      label: ed.intl.string(eu.default.SUdqCQ),
                      image: { attachment_id: t.attachment.id },
                  });
    return (0, a.jsxs)("div", {
        className: lJ.Nz,
        "data-conjure-image-options": !0,
        children: [
            (0, a.jsxs)("div", {
                ref: p,
                className: s()(lJ.fF, "gallery" === h ? lJ.nV : lJ.nM, { [lJ.m3]: m }),
                role: m ? "group" : "radiogroup",
                "aria-labelledby": `${l.id}-label`,
                "data-layout": h,
                "data-count": f.length,
                children: [
                    f.map((e) =>
                        (0, a.jsx)(
                            lZ,
                            {
                                projectId: n,
                                option: e,
                                multi: m,
                                selected: r.includes(e.id),
                                disabled: o,
                                reachable: u,
                                tabbable: m || e.id === v,
                                onPick: (e) => {
                                    (b(e.id), d(e));
                                },
                                onView: y,
                                onArrow: j,
                                onMeasured: (t) => g.current.set(e.id, t),
                            },
                            e.id,
                        ),
                    ),
                    null != w
                        ? (0, a.jsx)(
                              lZ,
                              {
                                  projectId: n,
                                  option: w,
                                  multi: m,
                                  selected: c.selected,
                                  disabled: o,
                                  reachable: u,
                                  tabbable: !0,
                                  onPick: c.onPick,
                                  onView: () => void 0,
                                  onArrow: () => void 0,
                                  onMeasured: () => void 0,
                                  onRemove: c.onRemove,
                              },
                              w.id,
                          )
                        : null,
                ],
            }),
            (0, a.jsx)(l2, {
                projectId: n,
                own: c,
                disabled: o,
                reachable: u,
                uploadText: ed.intl.string(/\bicons?\b/i.test(l.question) ? eu.default.qU4WN6 : eu.default.cbMDDB),
            }),
        ],
    });
}
function l2(e) {
    let { projectId: t, own: n, disabled: l, reachable: r, uploadText: s } = e,
        o = i.useRef(null),
        [u, d] = i.useState(!1),
        [c, m] = i.useState(""),
        f = r ? 0 : -1,
        h = n.busy;
    function p() {
        "" !== c.trim() &&
            null == h &&
            n.onLink(c.trim()).then(
                (e) => {
                    e && (d(!1), m(""));
                },
                () => void 0,
            );
    }
    return (0, a.jsxs)("div", {
        className: lJ.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, a.jsxs)("div", {
                className: lJ.QJ,
                children: [
                    (0, a.jsx)(A.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: lM.X,
                        text: s,
                        loading: "upload" === h,
                        disabled: l || "link" === h,
                        onClick: () => o.current?.click(),
                        tabIndex: f,
                        "data-conjure-own-image-upload": !0,
                    }),
                    u
                        ? null
                        : (0, a.jsx)(A.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: t9.LinkIcon,
                              text: ed.intl.string(eu.default["1TgOO+"]),
                              disabled: l || "upload" === h,
                              onClick: () => d(!0),
                              tabIndex: f,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, a.jsx)("input", {
                        ref: o,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: lJ.Fg,
                        tabIndex: -1,
                        "aria-hidden": !0,
                        onChange: (e) => {
                            var l, a;
                            let i = e.currentTarget.files?.[0];
                            ((e.currentTarget.value = ""),
                                null != i &&
                                    n.onUpload(
                                        ((l = i.name),
                                        (a = i.type),
                                        (0, Z.Oq)(i.size, a)
                                            ? (0, ea.c9)(t, i, l, a)
                                            : Promise.resolve({ errorText: lV(a) })),
                                    ));
                        },
                    }),
                ],
            }),
            u
                ? (0, a.jsxs)("div", {
                      className: lJ.vG,
                      children: [
                          (0, a.jsx)("div", {
                              className: lJ.Hs,
                              children: (0, a.jsx)(l_.k, {
                                  label: ed.intl.string(eu.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: ed.intl.string(eu.default.AVhvn8),
                                  value: c,
                                  onChange: (e) => m(e),
                                  onKeyDown: (e) => {
                                      "Enter" === e.key
                                          ? (e.preventDefault(), p())
                                          : "Escape" === e.key && (e.stopPropagation(), d(!1));
                                  },
                                  autoFocus: !0,
                                  type: "url",
                                  error: null == h && n.error?.source === "link" ? n.error.text : null,
                                  disabled: l,
                                  "data-conjure-own-image-link-input": !0,
                              }),
                          }),
                          (0, a.jsxs)("div", {
                              className: lJ.gd,
                              children: [
                                  (0, a.jsx)(A.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: ed.intl.string(eu.default.FbRbeM),
                                      loading: "link" === h,
                                      disabled: l || "" === c.trim(),
                                      onClick: p,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, a.jsx)(lk.Q, {
                                      variant: "secondary",
                                      textVariant: "text-sm/medium",
                                      text: ed.intl.string(eu.default.eXZL4X),
                                      onClick: () => d(!1),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
            n.error?.source === "upload"
                ? (0, a.jsx)(y.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      "data-conjure-own-image-error": !0,
                      children: n.error.text,
                  })
                : null,
        ],
    });
}
var l1 = n(29073),
    l6 = n(384017);
function l9(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: o = !0, selected: u } = e,
        d = i.useId(),
        c = !0 === t.recommended,
        m = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(j.D, {
        className: s()(l6.uK, { [l6.ue]: l, [l6.h4]: !0 === u }),
        onClick: l ? void 0 : () => r(t),
        "aria-label": ed.intl.formatToPlainString(c ? eu.default["2p6UFz"] : eu.default.AQbxhf, { answer: t.label }),
        "aria-describedby": m ? d : void 0,
        "aria-disabled": l,
        role: null != u ? "checkbox" : void 0,
        "aria-checked": u,
        tabIndex: o ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": c ? "true" : void 0,
        children: [
            null != u
                ? (0, a.jsx)("span", { className: l6.dy, children: (0, a.jsx)(ly.P, { checked: u, disabled: l }) })
                : (0, a.jsx)("span", { className: l6.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: l6.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: l6.l8,
                        children: (0, a.jsx)(y.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: l6.ed,
                            children: t.label,
                        }),
                    }),
                    m
                        ? (0, a.jsx)(y.E, {
                              tag: "span",
                              id: d,
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: t.detail,
                          })
                        : null,
                ],
            }),
            c
                ? (0, a.jsx)(y.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: l6.rM,
                      children: ed.intl.string(eu.default.zku6r1),
                  })
                : null,
        ],
    });
}
function l3(e) {
    let { projectId: t, question: n, selected: l, disabled: i, reachable: r = !0, onPick: s, own: o } = e,
        u = !0 === n.multi_select;
    return lA(n)
        ? (0, a.jsx)(l0, { projectId: t, question: n, selectedIds: l, disabled: i, reachable: r, onPick: s, own: o })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      l9,
                      {
                          option: e,
                          position: t + 1,
                          disabled: i,
                          selected: u ? l.includes(e.id) : void 0,
                          onPick: s,
                          reachable: r,
                      },
                      e.id,
                  ),
              ),
          });
}
let l5 = [];
function l4(e) {
    let {
            projectId: t,
            question: n,
            draft: l,
            selected: i,
            direction: r,
            disabled: o,
            ownImage: u,
            ownSelected: d,
        } = e,
        c = "" === l.trim() ? null : l,
        m = !0 === n.multi_select;
    return (0, a.jsxs)("div", {
        className: s()(l6.Ge, l6.x1),
        "data-direction": r,
        "aria-hidden": !0,
        children: [
            m
                ? (0, a.jsx)(y.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: l6.aK,
                      children: ed.intl.string(eu.default.tE8qbz),
                  })
                : null,
            (0, a.jsx)(l3, {
                projectId: t,
                question: n,
                selected: i,
                disabled: o,
                onPick: () => void 0,
                reachable: !1,
                own: lS(u, d),
            }),
            lA(n)
                ? null
                : (0, a.jsxs)("div", {
                      className: l6.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: l6.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(lj.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == c ? null : (0, a.jsx)("span", { className: s()(l6.Pu, l6.es), children: c }),
                      ],
                  }),
        ],
    });
}
function l7(e) {
    var t;
    let { projectId: n, clarification: l, onSubmit: r, onDismiss: o } = e,
        [u, d] = i.useState({}),
        [c, m] = i.useState({}),
        [f, h] = i.useState({}),
        [p, g] = i.useState(0),
        [x, b] = i.useState(null),
        [v, k] = i.useState(null),
        [C, N] = i.useState(null),
        [S, E] = i.useState(!1),
        I = i.useRef(null),
        [T, P] = i.useState(null),
        M = i.useRef(null),
        _ = i.useRef(0),
        R = null == r,
        D = l.questions.length,
        O = Math.min(p, D - 1),
        F = l.questions[O],
        [z, U] = i.useState({ id: F.id, expanded: !1 }),
        G = z.id === F.id && z.expanded,
        [q, $] = i.useState(null),
        B = c[F.id] ?? "",
        H = !0 === F.multi_select,
        V = lA(F),
        W = H ? (f[F.id] ?? l5) : ((t = u[F.id]), t?.kind === "option" ? [t.optionId] : lN),
        K = (function (e, t, n) {
            let [l, a] = i.useState({}),
                [r, s] = i.useState({}),
                [o, u] = i.useState({}),
                d = ed.intl.string(eu.default.wTsP5l),
                c = i.useCallback((e) => l[e] ?? null, [l]),
                m = i.useCallback(
                    (e) => null != l[e.id] && (!0 === e.multi_select ? !0 === o[e.id] : t[e.id]?.kind === "image"),
                    [t, l, o],
                ),
                f = i.useCallback(
                    (e) => {
                        let t = l[e.id];
                        return null != t && !0 === o[e.id] ? { attachment: t.attachment, text: d } : void 0;
                    },
                    [d, l, o],
                ),
                h = i.useCallback(
                    (i, o) => {
                        let c = i.id,
                            f = !0 === i.multi_select,
                            h = l[c] ?? null;
                        if (o) return lS(h, m(i));
                        function p(e) {
                            return s((t) => ({ ...t, [c]: e }));
                        }
                        function g(e) {
                            return { kind: "image", attachment: e.attachment, text: d };
                        }
                        let x = t[c];
                        function b(t) {
                            (a((n) => {
                                let l = n[c];
                                return (
                                    null != l && (0, ea.Vm)(e, l.attachment.id).catch(() => void 0), { ...n, [c]: t }
                                );
                            }),
                                p({ busy: null, error: null }),
                                f ? u((e) => ({ ...e, [c]: !0 })) : n((e) => (e[c] === x ? { ...e, [c]: g(t) } : e)));
                        }
                        return {
                            image: h,
                            selected: m(i),
                            busy: r[c]?.busy ?? null,
                            error: r[c]?.error ?? null,
                            onPick: () => {
                                null != h &&
                                    (f ? u((e) => ({ ...e, [c]: !0 !== e[c] })) : n((e) => ({ ...e, [c]: g(h) })));
                            },
                            onRemove: () => {
                                null != h &&
                                    ((0, ea.Vm)(e, h.attachment.id).catch(() => void 0),
                                    a((e) => {
                                        let { [c]: t, ...n } = e;
                                        return n;
                                    }),
                                    u((e) => ({ ...e, [c]: !1 })),
                                    n((e) => {
                                        if (e[c]?.kind !== "image") return e;
                                        let { [c]: t, ...n } = e;
                                        return n;
                                    }));
                            },
                            onUpload: (e) => {
                                (p({ busy: "upload", error: null }),
                                    e.then(
                                        (e) => {
                                            "errorText" in e
                                                ? p({ busy: null, error: { source: "upload", text: e.errorText } })
                                                : b({ attachment: e });
                                        },
                                        () =>
                                            p({
                                                busy: null,
                                                error: { source: "upload", text: ed.intl.string(eu.default["kUw/b1"]) },
                                            }),
                                    ));
                            },
                            onLink: (t) => (
                                p({ busy: "link", error: null }),
                                (0, ea.gm)(e, t).then(
                                    (e) => (b({ attachment: e }), !0),
                                    (e) => (
                                        p({
                                            busy: null,
                                            error: {
                                                source: "link",
                                                text:
                                                    e instanceof Error && "" !== e.message
                                                        ? e.message
                                                        : ed.intl.string(eu.default.l79PMc),
                                            },
                                        }),
                                        !1
                                    ),
                                )
                            ),
                        };
                    },
                    [d, t, l, e, m, n, r],
                );
            return { imageFor: c, selectedFor: m, multiPartFor: f, controlsFor: h };
        })(n, u, d),
        X = K.imageFor(F.id),
        Y = K.selectedFor(F),
        { text: J, phase: Q } = (0, tc.Q)(F.question),
        Z = J === F.question,
        ee = Z && q?.id === F.id && q.truncated;
    i.useLayoutEffect(() => {
        if (null == T || G || !Z) return;
        function e() {
            if (null == T) return;
            let e = T.scrollHeight > T.clientHeight + 1;
            $((t) => (t?.id === F.id && t.truncated === e ? t : { id: F.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(T), () => t.disconnect());
    }, [Z, T, F.id, G]);
    let et = ed.intl.string(G ? ed.t.iTcuma : ed.t.dcl9MQ),
        en = i.useCallback(
            (e) => {
                if (null == r) return;
                let t = l.questions
                    .map((t, n) => ({ question: t, index: n, answer: e[t.id] }))
                    .filter((e) => null != e.answer && "" !== e.answer.text.trim())
                    .map((e) => {
                        let { question: t, index: n, answer: l } = e;
                        return `${n + 1}. ${t.question} \u{2192} ${l.text.trim()}`;
                    })
                    .join("\n");
                if ("" !== t) {
                    let n;
                    r(
                        t,
                        (n = l.questions.flatMap((t) => {
                            let n = e[t.id];
                            if (null == n || "" === n.text.trim()) return [];
                            let l = "option" === n.kind ? [n.optionId] : "multi" === n.kind ? n.optionIds : [],
                                a = "custom" === n.kind ? n.text.trim() : "multi" === n.kind ? n.custom : void 0,
                                i = "image" === n.kind || "multi" === n.kind ? n.attachment : void 0;
                            return [
                                {
                                    question_id: t.id,
                                    option_ids: l,
                                    ...(null != a && "" !== a ? { custom: a } : {}),
                                    ...(null != i ? { attachment_id: i.id } : {}),
                                },
                            ];
                        })).length > 0
                            ? { clarification_id: l.id, answers: n }
                            : null,
                        l.questions.flatMap((t) => {
                            let n = e[t.id];
                            return null == n || "" === n.text.trim()
                                ? []
                                : "image" === n.kind || ("multi" === n.kind && null != n.attachment)
                                  ? [n.attachment]
                                  : [];
                        }),
                    );
                }
            },
            [l, r],
        ),
        el = i.useCallback(
            (e, t) => {
                _.current += 1;
                let n = _.current;
                (b({ direction: t, moves: n }),
                    k({ question: F, draft: B, selected: W, ownImage: X, ownSelected: Y, direction: t, moves: n }),
                    E(!0),
                    g(e));
            },
            [B, X, Y, F, W],
        ),
        ei = i.useCallback(() => {
            let e = I.current,
                t = M.current;
            null != e && null != t && N({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    i.useLayoutEffect(() => {
        let e = I.current,
            t = M.current;
        if (null == e || null == t) return;
        ei();
        let n = new ResizeObserver(ei);
        return (n.observe(e), n.observe(t), () => n.disconnect());
    }, [ei]);
    let er = x?.moves;
    i.useEffect(() => {
        if (null == er) return;
        let e = setTimeout(() => k(null), 400),
            t = setTimeout(() => E(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [er]);
    let es = i.useCallback(
            (e) => {
                if (R) return;
                let t = { ...u, [F.id]: e };
                d(t);
                let n =
                    O < l.questions.length - 1
                        ? O + 1
                        : (function (e, t, n) {
                              let { questions: l } = e;
                              for (let e = 1; e <= l.length; e++) {
                                  let a = (n + e) % l.length,
                                      i = t[l[a].id];
                                  if (null == i || "" === i.text.trim()) return a;
                              }
                              return null;
                          })(l, t, O);
                null == n ? en(t) : el(n, n < O ? "back" : "forward");
            },
            [u, l, R, O, F.id, en, el],
        ),
        eo = i.useCallback(() => {
            R || 0 === O || el(O - 1, "back");
        }, [R, O, el]),
        ec = O > 0 && !R,
        em = i.useCallback(
            (e) => {
                m((e) => ({ ...e, [F.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                V ? R || d((e) => ({ ...e, [F.id]: t })) : es(t);
            },
            [R, V, F.id, es],
        ),
        { multiPartFor: ef } = K,
        eh = i.useMemo(() => {
            var e;
            let t, n;
            return H
                ? ((e = ef(F)),
                  (t = B.trim()),
                  (n = F.options.filter((e) => W.includes(e.id)).map((e) => e.label)),
                  {
                      kind: "multi",
                      optionIds: W,
                      ...("" === t ? {} : { custom: t }),
                      ...(null == e ? {} : { attachment: e.attachment }),
                      text: [...n, ...(null == e ? [] : [e.text]), ...("" === t ? [] : [t])].join(", "),
                  })
                : null;
        }, [B, H, ef, F, W]),
        ep = K.controlsFor(F, R),
        eg = i.useCallback(() => {
            if (null != eh) {
                "" !== eh.text && es(eh);
                return;
            }
            let e = B.trim();
            "" !== e && es({ kind: "custom", text: e });
        }, [B, eh, es]),
        [ex, eb] = i.useState(!1),
        [ev, ey] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => eb(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let ej = i.useCallback(() => {
            null != o && (ey(!0), setTimeout(o, 150));
        }, [o]),
        ew = i.useMemo(
            () =>
                null != eh
                    ? "" !== eh.text
                        ? eh
                        : null
                    : "" !== B.trim()
                      ? { kind: "custom", text: B.trim() }
                      : (u[F.id] ?? null),
            [u, B, eh, F.id],
        ),
        ek = null != ew && !R,
        eC = O === D - 1,
        eA = i.useCallback(() => {
            null == ew || R || es(ew);
        }, [R, ew, es]),
        eN = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, tM.vq)(e.target, HTMLTextAreaElement) ||
                    (0, tM.vq)(e.target, HTMLInputElement) ||
                    ((!(0, tM.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && ec
                            ? (e.preventDefault(), eo())
                            : "ArrowRight" === e.key && ek && (e.preventDefault(), eA())));
            },
            [ec, ek, eo, eA],
        );
    return (0, a.jsxs)("section", {
        className: s()(l6.$O, { [l6.fI]: ex && !ev, [l6.Oh]: ev }),
        role: "dialog",
        "aria-label": F.question,
        "data-conjure-clarification": l.id,
        "data-state": R ? "inert" : "open",
        "data-question-expanded": G ? "true" : void 0,
        "data-step": O,
        tabIndex: -1,
        onKeyDown: eN,
        children: [
            (0, a.jsxs)("div", {
                className: l6.rf,
                style: null == C ? void 0 : { height: C.heading + C.rows },
                "data-moving": S ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: I,
                        className: l6.wx,
                        children: [
                            (0, a.jsx)(y.E, {
                                ref: P,
                                tag: "span",
                                id: `${F.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: G ? void 0 : 5,
                                className: s()(l1.TK, l6.R_, { [l6.TB]: "exit" === Q, [l6.JU]: "enter" === Q }),
                                children: J,
                            }),
                            ee || G
                                ? (0, a.jsx)("div", {
                                      className: l1.Q7,
                                      children: (0, a.jsx)(w.m, {
                                          text: et,
                                          children: (0, a.jsx)(t5.K, {
                                              icon: G ? to.t : la.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => U({ id: F.id, expanded: !G }),
                                              "aria-label": et,
                                              "aria-controls": `${F.id}-label`,
                                              "aria-expanded": G,
                                          }),
                                      }),
                                  })
                                : null,
                            null == o
                                ? null
                                : (0, a.jsx)(j.D, {
                                      className: s()(l1.gb, l1.Q7),
                                      onClick: ej,
                                      "aria-label": ed.intl.string(eu.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, a.jsx)(L.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: l6.Cg,
                        style: null == C ? void 0 : { insetBlockStart: C.heading },
                        children: (0, a.jsxs)("div", {
                            className: l6.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: M,
                                    className: l6.Ge,
                                    role: "group",
                                    "aria-labelledby": `${F.id}-label`,
                                    "data-direction": x?.direction,
                                    "data-parity": null == x ? void 0 : x.moves % 2,
                                    children: [
                                        H
                                            ? (0, a.jsx)(y.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: l6.aK,
                                                  children: ed.intl.string(eu.default.tE8qbz),
                                              })
                                            : null,
                                        (0, a.jsx)(l3, {
                                            projectId: n,
                                            question: F,
                                            selected: W,
                                            disabled: R,
                                            onPick: (e) =>
                                                H
                                                    ? h((t) => {
                                                          var n, l;
                                                          let a;
                                                          return {
                                                              ...t,
                                                              [F.id]:
                                                                  ((n = t[F.id] ?? l5),
                                                                  (l = e.id),
                                                                  (a = n.includes(l)
                                                                      ? n.filter((e) => e !== l)
                                                                      : [...n, l]),
                                                                  F.options
                                                                      .filter((e) => a.includes(e.id))
                                                                      .map((e) => e.id)),
                                                          };
                                                      })
                                                    : em(e),
                                            own: ep,
                                        }),
                                        V
                                            ? null
                                            : (0, a.jsxs)("div", {
                                                  className: l6.Xy,
                                                  children: [
                                                      (0, a.jsx)("span", {
                                                          className: l6.Gy,
                                                          "aria-hidden": !0,
                                                          children: (0, a.jsx)(lj.PencilIcon, {
                                                              size: "custom",
                                                              width: 20,
                                                              height: 20,
                                                              color: "currentColor",
                                                          }),
                                                      }),
                                                      (0, a.jsx)(lw.y, {
                                                          value: B,
                                                          onChange: (e) => {
                                                              let { value: t } = e.currentTarget;
                                                              m((e) => ({ ...e, [F.id]: t }));
                                                          },
                                                          onKeyDown: (e) => {
                                                              "Enter" !== e.key ||
                                                                  e.shiftKey ||
                                                                  e.nativeEvent.isComposing ||
                                                                  (e.preventDefault(), eg());
                                                          },
                                                          placeholder: ed.intl.string(eu.default["tOC+tn"]),
                                                          "aria-label": ed.intl.formatToPlainString(
                                                              eu.default["4JeYPB"],
                                                              { question: F.question },
                                                          ),
                                                          disabled: R,
                                                          rows: 1,
                                                          className: l6.Pu,
                                                          "data-conjure-clarification-other": F.id,
                                                      }),
                                                  ],
                                              }),
                                    ],
                                }),
                                null == v
                                    ? null
                                    : (0, a.jsx)(
                                          l4,
                                          {
                                              projectId: n,
                                              question: v.question,
                                              draft: v.draft,
                                              selected: v.selected,
                                              ownImage: v.ownImage,
                                              ownSelected: v.ownSelected,
                                              direction: v.direction,
                                              disabled: R,
                                          },
                                          v.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            D > 1 || H || V
                ? (0, a.jsxs)("div", {
                      className: l1.qr,
                      children: [
                          (0, a.jsx)(y.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  D > 1
                                      ? ed.intl.formatToPlainString(eu.default.yzYUjq, { index: O + 1, total: D })
                                      : null,
                          }),
                          (0, a.jsxs)("div", {
                              className: l1.zt,
                              children: [
                                  ec
                                      ? (0, a.jsx)(lk.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: ed.intl.string(eu.default.Pk5lfA),
                                            onClick: eo,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  (0, a.jsx)(A.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: ed.intl.string(eC ? ed.t.geKm7t : eu.default.w1nRmT),
                                      disabled: !ek,
                                      onClick: eA,
                                      "data-conjure-clarification-next": !0,
                                      "data-submits": eC ? "true" : void 0,
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var l8 = n(106430),
    ae = n(670455),
    at = n(856059),
    an = n(411236);
function al(e) {
    let { projectId: t, request: n, onDismiss: l } = e,
        i = null != n.note && "" !== n.note ? n.note : ed.intl.string(eu.default.XuOf5s);
    return (0, a.jsx)(at.A, {
        projectId: t,
        scopeKeys: n.keys,
        notifyAgent: !0,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: n, saving: r, submit: o } = e;
            function u(e) {
                (e.preventDefault(), o());
            }
            let d = (0, a.jsx)(A.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: r,
                disabled: !n,
                text: ed.intl.string(eu.default.A7dQd9),
            });
            return null == l
                ? (0, a.jsxs)("form", {
                      className: an.Mk,
                      onSubmit: u,
                      children: [
                          (0, a.jsx)(y.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: ed.intl.string(eu.default["jZjP+I"]),
                          }),
                          (0, a.jsx)(y.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              selectable: !0,
                              children: i,
                          }),
                          t,
                          (0, a.jsx)("div", { className: an.p0, children: d }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: s()(l1.nd, l1.jx),
                      "aria-label": ed.intl.string(eu.default["jZjP+I"]),
                      onSubmit: u,
                      children: [
                          (0, a.jsxs)("div", {
                              className: l1.wx,
                              children: [
                                  (0, a.jsx)(y.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: l1.TK,
                                      children: ed.intl.string(eu.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(j.D, {
                                      className: s()(l1.gb, l1.Q7),
                                      onClick: l,
                                      "aria-label": ed.intl.string(eu.default["iq+Pte"]),
                                      children: (0, a.jsx)(L.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: an.DQ,
                              children: [
                                  (0, a.jsx)(y.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      selectable: !0,
                                      children: i,
                                  }),
                                  t,
                              ],
                          }),
                          (0, a.jsx)("div", {
                              className: l1.qr,
                              children: (0, a.jsx)("div", { className: l1.zt, children: d }),
                          }),
                      ],
                  });
        },
    });
}
var aa = n(935208),
    ai = n(435558),
    ar = n.n(ai);
let as = "VibegrationsComposerDrafts";
function ao() {
    return nk.w.get(as) ?? {};
}
let au = new Map(),
    ad = ar().throttle(() => {
        if (0 === au.size) return;
        let e = ao();
        for (let [t, n] of au) "" === n ? delete e[t] : (e[t] = n);
        (au.clear(), nk.w.set(as, e));
    }, 1e3);
class ac extends c.Ay.Store {
    getDraft(e) {
        let t = au.get(e);
        return null != t ? t : (ao()[e] ?? "");
    }
}
let am = new ac(nI.h, {
    LOGOUT: function () {
        return (au.clear(), ad.cancel(), nk.w.remove(as), !1);
    },
    CONJURE_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: n } = e;
        return (au.set(t, n), ad(), "" === n && ad.flush(), !1);
    },
});
function af(e) {
    return "" !== am.getDraft(e).trim();
}
var ah = n(29080),
    ap = n(46054),
    ag = n(615839);
function ax(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : ed.intl.string(eu.default.KcFvbo);
}
function ab(e) {
    var t;
    let n,
        l,
        { steps: a, content: i, hasProposal: r, hasAttachments: s } = e,
        o = (0, n7.B4)(a),
        u = o.filter((e) => "message" === e.type).at(-1),
        d =
            !r &&
            null != u &&
            ((t = u.content),
            (n = t.trim()),
            (l = i.trim()),
            "" !== n && "" !== l && (n === l || (t.length >= 16e3 && l.startsWith(n))))
                ? u
                : null,
        c = o.filter((e) => e !== d),
        m = c.filter((e) => "message" === e.type).at(-1),
        f = !r && "" !== i.trim();
    return {
        streamed: c,
        lastStreamedMessage: m,
        replyKey: d?.key,
        showsClosingMessage: f,
        closingContent: f ? i.trim() : "",
        attachmentsHost: (function (e) {
            let { hasAttachments: t, showsClosingMessage: n, endsOnStreamedMessage: l } = e;
            return t ? (n ? "closing" : l ? "streamed" : "standalone") : "none";
        })({ hasAttachments: s, showsClosingMessage: f, endsOnStreamedMessage: (0, n7.Lf)(a) }),
    };
}
(n(134528), n(947204));
let av = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    ay = {
        snail: () => eu.default.ABeVsS,
        goat: () => eu.default.dhXay8,
        frog: () => eu.default.SHeweG,
        bunny: () => eu.default.FytFE1,
        cat: () => eu.default["5c+sHs"],
        caterpillar: () => eu.default["/FYcne"],
        butterfly: () => eu.default["Ib/AxK"],
        dog: () => eu.default.zDjBR1,
        spider: () => eu.default["6sxyrN"],
        bee: () => eu.default.cVtefg,
        bot: () => eu.default.MjCw0v,
    },
    aj = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
                return (0, a.jsx)("img", {
                    style: { width: r, height: r },
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        goat: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
                return (0, a.jsx)("img", {
                    style: { width: r, height: r },
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-orange-40)",
        },
        frog: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
                return (0, a.jsx)("img", {
                    style: { width: r, height: r },
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-green-40)",
        },
        bunny: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
                return (0, a.jsx)("img", {
                    style: { width: r, height: r },
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-pink-40)",
        },
        cat: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
                return (0, a.jsx)("img", {
                    style: { width: r, height: r },
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-pink-40)",
        },
        caterpillar: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
                return (0, a.jsx)("img", {
                    style: { width: r, height: r },
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-green-40)",
        },
        butterfly: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
                return (0, a.jsx)("img", {
                    style: { width: r, height: r },
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
        dog: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
                return (0, a.jsx)("img", {
                    style: { width: r, height: r },
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        spider: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
                return (0, a.jsx)("img", {
                    style: { width: r, height: r },
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-orange-40)",
        },
        bee: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
                return (0, a.jsx)("img", {
                    style: { width: r, height: r },
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        bot: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
                return (0, a.jsx)("img", {
                    style: { width: r, height: r },
                    src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
    };
function aw(e) {
    return { ...aj[e], name: ed.intl.string(ay[e]()) };
}
function ak(e) {
    return av.includes(e) ? aw(e) : void 0;
}
function aC(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % av.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, av[(t + n) % av.length]);
            }),
            l
        );
    })(e))
        t.set(n, aw(l));
    return t;
}
var aA = n(60160),
    aN = n(16634);
function aS(e) {
    let { projectId: t, lane: n, Illocon: l, tint: i, name: r, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        d = (0, n7.SY)(n.steps),
        c = u
            ? null != d
                ? (0, n7.WQ)(d)
                : ax(o)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(ax(e));
                  switch (e.status) {
                      case "failed":
                          return ed.intl.formatToPlainString(eu.default.YrVgOf, { task: t });
                      case "cancelled":
                          return ed.intl.formatToPlainString(eu.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return ed.intl.formatToPlainString(eu.default["++9woZ"], {
                                  task: t,
                                  duration: (0, ag.MB)(e.durationMs),
                              });
                          return ed.intl.formatToPlainString(eu.default.nmI9Uh, { task: t });
                      default:
                          return ed.intl.formatToPlainString(eu.default.nmI9Uh, { task: t });
                  }
              })(o),
        m = u ? d : void 0,
        f =
            o.detail.length > 0 ||
            n.steps.some((e) => {
                var t;
                return e !== m || (t = e).detail.length > 0 || t.screenshots.length > 0 || t.attachments.length > 0;
            })
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          n.steps.length > 0
                              ? (0, a.jsx)("ol", {
                                    className: lx.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            aN.A,
                                            { projectId: t, node: e, presentation: "detail", active: u && e === d },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          o.detail.map((e, t) =>
                              (0, a.jsx)(
                                  "div",
                                  {
                                      className: lx.iq,
                                      children: (0, a.jsx)(aA.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(ln.A, {
        glyph: (0, a.jsx)(ll.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: r,
            body: ax(o),
            position: "left",
            children: (0, a.jsx)("span", {
                className: lx.nC,
                children: (0, a.jsx)(l, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: c,
        live: u,
        settled: !u,
        tint: i,
        detail: f,
        connected: !0,
        connectsDown: s,
    });
}
var aE = n(469393);
function aI(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, tr.lG)(t.authored_at);
    return (0, a.jsx)(lr, {
        title: ed.intl.string(eu.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: aE.r,
            children: [
                (0, a.jsxs)("div", {
                    className: aE.z,
                    children: [
                        (0, a.jsx)(y.E, { variant: "text-md/medium", children: t.subject }),
                        null != l.relative
                            ? (0, a.jsx)(y.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  title: l.absolute ?? void 0,
                                  children: l.relative,
                              })
                            : null,
                    ],
                }),
                null != n
                    ? (0, a.jsx)(A.$, {
                          variant: "secondary",
                          size: "sm",
                          text: ed.intl.string(eu.default.H8Jfhu),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
var aT = n(885574),
    aP = n(231483),
    aM = n(323384),
    a_ = n(430392),
    aR = n(632015),
    aL = n(628284),
    aD = n(97808),
    aO = n(778712),
    aF = n(809115),
    az = n(486020),
    aU = n(200700);
let aG = {
        alert: { label: () => ed.intl.string(eu.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => ed.intl.string(eu.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => ed.intl.string(eu.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => ed.intl.string(eu.default.RGzFNK), blockedStyle: !1 },
    },
    aq = {
        blocked: { label: () => ed.intl.string(eu.default.YdnZ8q), tone: "red" },
        alert: { label: () => ed.intl.string(eu.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => ed.intl.string(eu.default.RGzFNK), tone: "green" },
    },
    a$ = ["blocked", "alert", "allowed"],
    aB = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
var aH = n(984097),
    aV = n(13673);
let aW = { blocked: aP.ShieldIcon, alert: t0.BellIcon, allowed: aL.y },
    aK = {
        blurple: { text: "text-brand", icon: O.A.colors.TEXT_BRAND },
        red: { text: "text-feedback-critical", icon: O.A.colors.TEXT_FEEDBACK_CRITICAL },
        green: { text: "text-feedback-positive", icon: O.A.colors.TEXT_FEEDBACK_POSITIVE },
    };
function aX(e) {
    var t, n;
    let l,
        i,
        { example: r } = e,
        s =
            "" ===
            (i = [
                "timeout" !== (t = r).outcome || null == t.timeout_seconds
                    ? null
                    : ed.intl.formatToPlainString(ed.t["3LYql6"], {
                          duration:
                              ((n = t.timeout_seconds),
                              null != (l = (0, aU.getFriendlyDurationString)(n))
                                  ? l
                                  : n % 604800 == 0
                                    ? ed.intl.formatToPlainString(ed.t.EmoBD2, { weeks: n / 604800 })
                                    : n % 86400 == 0
                                      ? ed.intl.formatToPlainString(ed.t["k2UNz+"], { days: n / 86400 })
                                      : n % 3600 == 0
                                        ? ed.intl.formatToPlainString(ed.t.xCjYxK, { hours: n / 3600 })
                                        : n % 60 == 0
                                          ? ed.intl.formatToPlainString(ed.t.opVZ9q, { mins: n / 60 })
                                          : ed.intl.formatToPlainString(ed.t["4zv/jq"], { secs: n })),
                      }),
                r.reason,
            ]
                .filter((e) => null != e && "" !== e)
                .join(" "))
                ? null
                : i;
    return null == s
        ? null
        : (0, a.jsx)(y.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              lineClamp: 2,
              selectable: !0,
              children: s,
          });
}
function aY(e) {
    var t;
    let { example: n } = e,
        { label: l, blockedStyle: i } = aG[n.outcome];
    return (0, a.jsxs)("li", {
        className: s()(aH.nM, { [s()(aH.HV, aV.DX)]: i }),
        children: [
            (0, a.jsx)(k.A, { children: `${l()}: ` }),
            (0, a.jsx)("span", {
                className: aH.my,
                children: (0, a.jsx)(aD.eu, {
                    src: (0, az.AE)(void 0, void 0),
                    size: aO._3.SIZE_24,
                    "aria-label": ed.intl.string(eu.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: aH.fw,
                children: [
                    (0, a.jsx)(y.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), ap.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    (0, a.jsx)(aX, { example: n }),
                ],
            }),
        ],
    });
}
function aJ(e) {
    let { group: t } = e,
        n = i.useId(),
        l = aq[t.section],
        r = aW[t.section],
        s = aK[l.tone];
    return (0, a.jsxs)("div", {
        className: aH.uW,
        children: [
            (0, a.jsxs)("div", {
                className: aH.bV,
                children: [
                    (0, a.jsx)(r, { size: "xs", color: s.icon, "aria-hidden": !0 }),
                    (0, a.jsx)(y.E, {
                        id: n,
                        variant: "text-xs/semibold",
                        color: s.text,
                        className: aH.a9,
                        children: l.label(),
                    }),
                ],
            }),
            (0, a.jsx)("ul", {
                className: aH.Ge,
                "aria-labelledby": n,
                children: t.examples.map((e, t) => (0, a.jsx)(aY, { example: e }, t)),
            }),
        ],
    });
}
function aQ() {
    let { avatarSrc: e, eventHandlers: t } = (0, aF.a)(!0);
    return (0, a.jsx)("span", {
        className: aH.Gy,
        ...t,
        children: (0, a.jsx)(aD.eu, { src: e, size: aO._3.SIZE_16, "aria-label": ed.intl.string(ed.t.hG1StD) }),
    });
}
function aZ(e) {
    var t;
    let { automod: n } = e;
    return (0, a.jsx)("div", {
        className: aH.K1,
        children: ((t = n.examples),
        a$
            .map((e) => ({ section: e, examples: t.filter((t) => aB[t.outcome] === e) }))
            .filter((e) => e.examples.length > 0)).map((e) => (0, a.jsx)(aJ, { group: e }, e.section)),
    });
}
var a0 = n(443863);
function a2(e) {
    let { label: t, icon: n, info: l, children: i } = e;
    return (0, a.jsxs)("section", {
        className: a0.uW,
        children: [
            (0, a.jsxs)("span", {
                className: a0.a9,
                children: [
                    n,
                    (0, a.jsx)(y.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }),
                    l,
                ],
            }),
            i,
        ],
    });
}
function a1(e) {
    let { text: t, label: n } = e;
    return (0, a.jsx)(w.m, {
        text: t,
        children: (0, a.jsx)(j.D, {
            className: a0.bk,
            "aria-label": n,
            children: (0, a.jsx)(aT.CircleInformationIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
function a6(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)(a2, {
              label: t,
              children: (0, a.jsx)("div", {
                  className: a0.Ip,
                  children: n.map((e) =>
                      (0, a.jsx)(
                          "span",
                          {
                              className: a0.jw,
                              children: (0, a.jsx)(y.E, {
                                  variant: "text-sm/medium",
                                  color: "text-subtle",
                                  tag: "span",
                                  children: e
                                      .split("_")
                                      .map((e) => (0 === e.length ? e : e[0] + e.slice(1).toLowerCase()))
                                      .join(" "),
                              }),
                          },
                          e,
                      ),
                  ),
              }),
          });
}
function a9() {
    return (0, a.jsxs)("span", {
        className: a0.L6,
        children: [
            (0, a.jsx)(aP.ShieldIcon, {
                size: "custom",
                width: 16,
                height: 16,
                color: "currentColor",
                "aria-hidden": !0,
            }),
            (0, a.jsx)(y.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                tag: "span",
                children: ed.intl.string(eu.default.DnWMLj),
            }),
        ],
    });
}
function a3(e) {
    let { isActivity: t, hasWidget: n } = e,
        l = t ? aM.k : a_.RobotIcon;
    return (0, a.jsxs)("span", {
        className: a0.K2,
        children: [
            n
                ? (0, a.jsxs)("span", {
                      className: a0.L6,
                      children: [
                          (0, a.jsx)(aR.f, {
                              size: "custom",
                              width: 16,
                              height: 16,
                              color: "currentColor",
                              "aria-hidden": !0,
                          }),
                          (0, a.jsx)(y.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              tag: "span",
                              children: ed.intl.string(eu.default["EswAi+"]),
                          }),
                      ],
                  })
                : null,
            (0, a.jsxs)("span", {
                className: a0.L6,
                children: [
                    (0, a.jsx)(l, { size: "custom", width: 16, height: 16, color: "currentColor", "aria-hidden": !0 }),
                    (0, a.jsx)(y.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        tag: "span",
                        children: ed.intl.string(t ? ed.t.IC5Ann : eu.default.VFWfz1),
                    }),
                ],
            }),
        ],
    });
}
function a5(e) {
    let { projectId: t, design: n } = e,
        { id: l } = n,
        { src: r, gone: s, handleError: o } = lY(t, l),
        u = ed.intl.string(eu.default["3/aHX6"]),
        d = i.useCallback(() => {
            (0, ea.PK)(t, l).then(
                (e) => {
                    (0, lR.R)({
                        items: [{ type: "IMAGE", url: e, alt: u }],
                        startingIndex: 0,
                        shouldHideMediaOptions: !0,
                        location: "VibegrationsChat",
                    });
                },
                () => {},
            );
        }, [t, l, u]);
    return s
        ? null
        : (0, a.jsx)(a2, {
              label: ed.intl.string(eu.default.X15LLY),
              info: (0, a.jsx)(a1, {
                  text: ed.intl.string(eu.default.nR4B8P),
                  label: ed.intl.string(eu.default.nc0SNY),
              }),
              children: (0, a.jsx)(j.D, {
                  className: a0.xX,
                  onClick: d,
                  "aria-label": ed.intl.string(eu.default.TvAPIm),
                  children: null != r ? (0, a.jsx)("img", { src: r, alt: u, className: a0.sN, onError: o }) : null,
              }),
          });
}
function a4(e) {
    let { projectId: t, proposal: n, version: l, onApprove: i } = e,
        { automod: r } = n,
        s = l?.superseded === !0,
        o = n.what_changed?.trim() ?? "";
    return (0, a.jsxs)(lu, {
        title:
            s && null != l
                ? ed.intl.formatToPlainString(eu.default.YZ3qJs, { version: l.version })
                : ed.intl.string(eu.default["3b6e7o"]),
        meta: s
            ? (0, a.jsx)(lo, { children: ed.intl.string(eu.default.hF2c41) })
            : null != r
              ? (0, a.jsx)(a9, {})
              : (0, a.jsx)(a3, { isActivity: !0 === n.is_activity, hasWidget: null != n.widget_config }),
        superseded: s,
        showLabel: ed.intl.string(eu.default.yD8EJS),
        hideLabel: ed.intl.string(eu.default.nSPGNb),
        bodyClassName: a0.rf,
        "data-conjure-plan-card": !0,
        children: [
            "" !== o
                ? (0, a.jsx)(a2, {
                      label: ed.intl.string(eu.default.iNS4dl),
                      children: (0, a.jsx)(y.E, {
                          variant: "experimental/body-md/normal",
                          color: "text-default",
                          selectable: !0,
                          children: o,
                      }),
                  })
                : null,
            (0, a.jsx)(y.E, {
                variant: "experimental/body-md/normal",
                color: "text-default",
                selectable: !0,
                children: n.summary,
            }),
            null != r && r.examples.length > 0
                ? (0, a.jsx)(a2, {
                      label: ed.intl.string(eu.default.z4ZKYG),
                      icon: (0, a.jsx)(aQ, {}),
                      info: (0, a.jsx)(a1, {
                          text: ed.intl.string(eu.default.bo4MOx),
                          label: ed.intl.string(eu.default.VPLNot),
                      }),
                      children: (0, a.jsx)(aZ, { automod: r }),
                  })
                : null,
            null == r && null != n.design_image ? (0, a.jsx)(a5, { projectId: t, design: n.design_image }) : null,
            n.changes.length > 0
                ? (0, a.jsx)(a2, {
                      label: ed.intl.string(eu.default["5+mG1z"]),
                      children: (0, a.jsx)("ul", {
                          className: a0.p_,
                          children: n.changes.map((e, t) =>
                              (0, a.jsx)(
                                  "li",
                                  {
                                      className: a0.Aw,
                                      children: (0, a.jsx)(y.E, {
                                          variant: "experimental/body-md/normal",
                                          color: "text-default",
                                          tag: "span",
                                          selectable: !0,
                                          children: e,
                                      }),
                                  },
                                  t,
                              ),
                          ),
                      }),
                  })
                : null,
            n.commands.length > 0
                ? (0, a.jsx)(a2, {
                      label: ed.intl.string(ed.t["0hKkS+"]),
                      children: (0, a.jsx)("ul", {
                          className: a0.p_,
                          children: n.commands.map((e, t) =>
                              (0, a.jsxs)(
                                  "li",
                                  {
                                      className: a0.uX,
                                      children: [
                                          (0, a.jsxs)(y.E, {
                                              variant: "experimental/body-md/medium",
                                              color: "text-default",
                                              tag: "span",
                                              selectable: !0,
                                              children: [
                                                  "launch" === e.kind || 4 === e.type
                                                      ? "\u21EA /"
                                                      : 2 === e.type || 3 === e.type
                                                        ? ""
                                                        : "/",
                                                  e.name,
                                              ],
                                          }),
                                          (0, a.jsx)(y.E, {
                                              variant: "experimental/body-md/normal",
                                              color: "text-muted",
                                              tag: "span",
                                              selectable: !0,
                                              children: e.description,
                                          }),
                                      ],
                                  },
                                  t,
                              ),
                          ),
                      }),
                  })
                : null,
            (0, a.jsx)(a6, { label: ed.intl.string(eu.default["2UbW6r"]), names: n.bot_permissions ?? [] }),
            (0, a.jsx)(a6, { label: ed.intl.string(eu.default["7TKfpj"]), names: n.privileged_intents ?? [] }),
            null == i || s
                ? null
                : (0, a.jsxs)("div", {
                      className: a0.o1,
                      children: [
                          (0, a.jsx)(A.$, {
                              variant: "primary",
                              size: "sm",
                              text: ed.intl.string(eu.default["6S+wRM"]),
                              onClick: i,
                          }),
                          (0, a.jsx)(y.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              tag: "span",
                              children: ed.intl.string(eu.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
var a7 = n(331322);
function a8(e) {
    return null != e && e.status?.state === "unpublished";
}
function ie(e) {
    let { publish: t } = e,
        n = t.guildId,
        l = (0, c.bG)([J.A], () => (null == n ? null : J.A.getGuild(n)));
    return (0, a.jsx)(a7.B, {
        gap: 8,
        align: "start",
        children: (0, a.jsxs)(a7.B, {
            direction: "horizontal",
            gap: 8,
            align: "center",
            children: [
                (0, a.jsx)(w.m, {
                    text: t.disabledReason,
                    asContainer: !0,
                    children: (0, a.jsx)(A.$, {
                        variant: "primary",
                        size: "sm",
                        loading: t.publishing,
                        disabled: t.disabled,
                        onClick: () => t.run("card"),
                        text: t.label,
                    }),
                }),
                null != l
                    ? (0, a.jsxs)(a7.B, {
                          direction: "horizontal",
                          gap: 4,
                          align: "center",
                          children: [
                              (0, a.jsx)(y.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: ed.intl.string(eu.default["+HGTlC"]),
                              }),
                              (0, a.jsx)(eX.Ay, { guild: l, size: eX.Ay.Sizes.SMOL }),
                              (0, a.jsx)(y.E, {
                                  variant: "text-sm/medium",
                                  color: "text-default",
                                  lineClamp: 1,
                                  children: (function (e) {
                                      let t = Array.from(e);
                                      if (t.length <= 24) return e;
                                      let n = t.slice(0, 23).join("");
                                      return `${n.trimEnd()}\u{2026}`;
                                  })(l.name),
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    });
}
function it(e) {
    let { projectId: t } = e,
        n = nQ(t);
    return null != n && a8(n) ? (0, a.jsx)(ie, { publish: n }) : null;
}
var il = n(478016),
    ia = n(989271);
function ii(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        o = null == l;
    return (0, a.jsxs)(j.D, {
        className: s()(ia.nM, { [ia.f1]: o, [ia.CZ]: n }),
        onClick: o ? void 0 : () => l(t),
        "aria-label": ed.intl.formatToPlainString(eu.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": o,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: ia.jo,
                children: [
                    n
                        ? (0, a.jsx)(il.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: ia.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(y.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: ia.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, a.jsx)(y.E, {
                      tag: "div",
                      id: r,
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function ir(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(lr, {
        title: ed.intl.string(eu.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                ii,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
function is(e) {
    let { onAsk: t } = e;
    return (0, a.jsx)(a7.B, {
        align: "start",
        "data-conjure-ideas-offer": !0,
        children: (0, a.jsx)(A.$, {
            variant: "secondary",
            size: "sm",
            disabled: null == t,
            onClick: t,
            text: ed.intl.string(eu.default["U/bLzU"]),
        }),
    });
}
var io = n(530557),
    iu = n(872162);
function id(e, t) {
    return { cardId: e, status: "pending" === t ? null : t };
}
var ic = n(202723);
function im(e) {
    let { projectId: t, cardId: l, request: r, status: o, awaiting: u } = e,
        d = i.useCallback(() => {
            (0, ek.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("291953"), n.e("408337")]).then(n.bind(n, 789864));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        c = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: io.R })), [r.fields]),
        m = (function (e, t) {
            let [n, l] = i.useState(() => id(e, t));
            return n.cardId !== e || (null == n.status && "pending" !== t)
                ? (l(id(e, t)), !1)
                : null != n.status && t !== n.status;
        })(l, o),
        f = s()(ic.Lo, { [ic.jY]: m });
    return "superseded" === o
        ? (0, a.jsx)(
              "article",
              {
                  className: f,
                  children: (0, a.jsx)(y.E, {
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      tag: "span",
                      children: ed.intl.string(eu.default.CTxtdV),
                  }),
              },
              o,
          )
        : "inactive" === o
          ? (0, a.jsxs)(
                "article",
                {
                    className: f,
                    children: [
                        (0, a.jsx)(y.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            tag: "span",
                            children: ed.intl.string(eu.default.HCQvpO),
                        }),
                        (0, a.jsx)(iu.C, { label: ed.intl.string(eu.default.HCQvpO), size: "xs", items: c }),
                    ],
                },
                o,
            )
          : "pending" === o
            ? (0, a.jsx)(
                  "article",
                  {
                      className: ic.Lo,
                      children: (0, a.jsx)(iu.C, { label: ed.intl.string(eu.default.HCQvpO), size: "xs", items: c }),
                  },
                  o,
              )
            : "received" === o
              ? (0, a.jsxs)(
                    "article",
                    {
                        className: f,
                        children: [
                            (0, a.jsxs)("div", {
                                className: ic.$h,
                                children: [
                                    (0, a.jsx)("span", {
                                        className: ic.c9,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(aL.y, {
                                            size: "xs",
                                            color: O.A.colors.ICON_FEEDBACK_POSITIVE,
                                        }),
                                    }),
                                    (0, a.jsx)(y.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-feedback-positive",
                                        tag: "span",
                                        children: ed.intl.string(eu.default.sfp7Up),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(iu.C, { label: ed.intl.string(eu.default.sfp7Up), size: "xs", items: c }),
                        ],
                    },
                    o,
                )
              : (0, a.jsxs)("article", {
                    className: ic.Lo,
                    children: [
                        (0, a.jsx)(y.E, {
                            variant: "text-xs/semibold",
                            color: null != u ? "text-brand" : "text-muted",
                            tag: "span",
                            children: ed.intl.string(null != u ? eu.default.O0QIqj : eu.default.HCQvpO),
                        }),
                        (0, a.jsx)(y.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            selectable: !0,
                            children: null != r.note && "" !== r.note ? r.note : ed.intl.string(eu.default.MPGSHL),
                        }),
                        (0, a.jsx)(iu.C, { label: ed.intl.string(eu.default.HCQvpO), size: "xs", items: c }),
                        (0, a.jsx)("div", {
                            className: ic.sq,
                            children: (0, a.jsx)(A.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: d,
                                text: ed.intl.string(eu.default.EK8tKY),
                            }),
                        }),
                    ],
                });
}
var ih = n(919790),
    ip = n(971824),
    ig = n(162052),
    ix = n(165648);
function ib(e) {
    let t = aC(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? ak(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: ax(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function iv(e) {
    let {
            projectId: t,
            steps: n,
            active: l = !1,
            turnActive: r = l,
            checklistSuperseded: s = !1,
            durationMs: o,
            interrupted: u = !1,
            todos: d,
            provisionalTodo: c,
            segment: m,
            hostsChecklist: f = !0,
            reportsDuration: h = !0,
            closed: p = !1,
            segmentDurationMs: g,
        } = e,
        x = i.useMemo(() => (0, n7.GO)(n, { turnActive: l }), [n, l]),
        b = i.useMemo(
            () =>
                null == m
                    ? x
                    : {
                          ...x,
                          steps: x.steps.filter((e) => e.segment === m),
                          tasks: x.tasks.filter((e) => e.task.segment === m),
                      },
            [x, m],
        );
    if (u)
        return (0, a.jsx)("ol", {
            className: lx.pj,
            "data-live": !1,
            children: (0, a.jsx)(ln.A, {
                glyph: (0, a.jsx)(ah.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: ed.intl.string(eu.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let v = l ? void 0 : (g ?? (h ? (x.turn?.durationMs ?? o) : void 0)),
        y = f ? ((0, n7.lt)(n) ?? d ?? null) : null,
        j = null != y && y.length > 0;
    if (0 === b.steps.length && 0 === b.tasks.length && !j) return null;
    let w = b.tasks,
        k = aC(w.map((e) => e.taskId)),
        C = !p && (l || w.some((e) => "running" === e.task.status)),
        A = ib(w);
    return (0, a.jsx)(ln.E.Provider, {
        value: w.length,
        children: (0, a.jsxs)("ol", {
            className: lx.pj,
            "data-live": C,
            children: [
                (0, a.jsx)(le.A, {
                    projectId: t,
                    steps: b.steps,
                    fallbackLabel: w.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                    live: l,
                    closed: p,
                    durationMs: v,
                    connectsDown: w.length > 0,
                    tier: x.turn?.tier,
                }),
                w.map((e, n) => {
                    let l = null != e.task.helperMark ? ak(e.task.helperMark) : void 0,
                        i = l ?? k.get(e.taskId);
                    return null == i
                        ? null
                        : (0, a.jsx)(
                              aS,
                              {
                                  projectId: t,
                                  lane: e,
                                  Illocon: i.Illocon,
                                  tint: i.tint,
                                  name: null != l && null != e.task.helperName ? e.task.helperName : i.name,
                                  connectsDown: n < w.length - 1,
                              },
                              e.taskId,
                          );
                }),
                j
                    ? (0, a.jsx)("li", {
                          className: lx.YO,
                          children: (0, a.jsx)(lp, { todos: y, provisional: c, agents: A, live: r, superseded: s }),
                      })
                    : null,
            ],
        }),
    });
}
function iy(e) {
    let {
            projectId: t,
            steps: n,
            content: l,
            proposal: r,
            planVersion: o,
            ideas: u,
            attachments: d,
            secretRequest: c,
            secretRequestId: m,
            secretRequestAwaiting: f,
            secretRequestStatus: h = "open",
            settingsRequest: p,
            publishCta: g,
            onPickIdea: x,
            pickedIdeaIds: b,
            onApprovePlan: v,
            sideReply: j = !1,
            sideReplyAcknowledges: w,
            hoistedProse: k = !1,
            hoistedAttachmentsHost: C,
            restoreProposal: A,
            onRestoreProposal: N,
        } = e,
        S = i.useMemo(
            () => ab({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != d && d.length > 0 }),
            [n, l, r, d],
        ),
        { streamed: E, lastStreamedMessage: I, showsClosingMessage: T, closingContent: P } = S,
        M = (k ? C : void 0) ?? S.attachmentsHost,
        _ = T && !k,
        R = null == d ? null : (0, a.jsx)(ih.A, { projectId: t, attachments: d }),
        L = null == R ? null : (0, a.jsx)("div", { className: lx.MT, children: R }),
        D = j
            ? (0, a.jsx)(y.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return ed.intl.string(eu.default.Mv5OmK);
                          case "queued":
                              return ed.intl.string(eu.default["Po/2mi"]);
                          case "restarting":
                              return ed.intl.string(eu.default.Vj0woh);
                          default:
                              return ed.intl.string(eu.default.gY3L8p);
                      }
                  })(w),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: lx.ue,
        children: [
            E.length > 0 && !k
                ? (0, a.jsx)("ol", {
                      className: lx.dO,
                      children: E.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: lx.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: ix.PT,
                                          children: ap.A.parse(e.content, !0, {
                                              allowList: !0,
                                              allowHeading: !0,
                                              allowLinks: !0,
                                          }),
                                      }),
                                      "streamed" === M && e === I ? L : null,
                                  ],
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            null != r
                ? (0, a.jsx)(a4, { projectId: t, proposal: r, version: o, onApprove: v })
                : _
                  ? (0, a.jsxs)("div", {
                        className: s()(lx.ky, ig.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: s()(ix.PT, lx.cW),
                                children: ap.A.parse(P, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === M ? L : null,
                            D,
                        ],
                    })
                  : null,
            null != c
                ? (0, a.jsx)("div", {
                      className: s()(lx.ky, ig.XR, { [ip.O]: null != f && "open" === h }),
                      children: (0, a.jsx)(im, {
                          projectId: t,
                          cardId: m ?? "",
                          request: c,
                          status: h,
                          awaiting: "open" === h ? f : void 0,
                      }),
                  })
                : null,
            null != p
                ? (0, a.jsx)("div", {
                      className: s()(lx.ky, ig.XR),
                      children: (0, a.jsx)(al, { projectId: t, request: p }),
                  })
                : null,
            "standalone" !== M && ("closing" !== M || _) ? null : R,
            null != g ? (0, a.jsx)(it, { projectId: t }) : null,
            null != u && u.length > 0 ? (0, a.jsx)(ir, { ideas: u, pickedIdeaIds: b, onPick: x }) : null,
            null != A ? (0, a.jsx)(aI, { proposal: A, onRestore: N }) : null,
            _ ? null : D,
        ],
    });
}
var ij = n(146806),
    iw = n(475358),
    ik = n(717400),
    iC = n(663341),
    iA = n(559647),
    iN = n(775602),
    iS = n(234320),
    iE = n(285796),
    iI = n(922329),
    iT = n(153171);
let iP = Z.lN;
function iM(e, t, n, l) {
    let a = lU(e, t).length;
    !(function (e, t, n) {
        if (0 === n.length) return;
        let l = n.map((e) => {
            let { draft: t, upload: n } = e;
            return { draft: { ...t, localId: lO++ }, upload: n };
        });
        for (let { draft: n, upload: a } of (lG(e, t, [
            ...lU(e, t),
            ...l.map((e) => {
                let { draft: t } = e;
                return t;
            }),
        ]),
        l))
            a?.().then(
                (l) => {
                    "errorText" in l
                        ? lq(e, t, n.localId, { status: "error", errorText: l.errorText })
                        : lq(e, t, n.localId, { status: "ready", ref: l })
                          ? setTimeout(
                                () =>
                                    lq(e, t, n.localId, {
                                        status: "error",
                                        errorText: ed.intl.string(eu.default.E7dS5n),
                                    }),
                                Z.o2 - 3e5,
                            )
                          : l$(e, l.id);
                },
                (l) => {
                    (console.error("[vibegrations] attachment upload failed", l),
                        lq(e, t, n.localId, { status: "error", errorText: ed.intl.string(eu.default["kUw/b1"]) }));
                },
            );
    })(
        e,
        t,
        n.map((e) => {
            let t = "" === e.type ? "application/octet-stream" : e.type,
                n = { name: e.name, contentType: t };
            if (a++ >= iP)
                return {
                    draft: {
                        ...n,
                        status: "error",
                        errorText: ed.intl.formatToPlainString(eu.default.Q0aCVZ, { count: iP }),
                    },
                };
            if (!(0, Z.Oq)(e.size, t)) return { draft: { ...n, status: "error", errorText: lV(t) } };
            let i = Z.XB.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...n, status: "uploading", previewUrl: i }, upload: () => l(e) };
        }),
    );
}
function i_(e) {
    let { projectId: t, surface: n, onUploadFile: l } = e,
        a = lF.useState((e) => lz(e, t, n)),
        r = i.useCallback((e) => iM(t, n, e, l), [t, n, l]),
        s = i.useCallback(
            (e) => {
                if (e.defaultPrevented) return;
                let t = Array.from(e.clipboardData?.files ?? []);
                0 !== t.length && (e.preventDefault(), r(t));
            },
            [r],
        ),
        o = i.useCallback(
            (e) => {
                let l, a;
                null != (a = (l = lU(t, n)).find((t) => t.localId === e)) &&
                    (lB(t, a),
                    lG(
                        t,
                        n,
                        l.filter((t) => t.localId !== e),
                    ));
            },
            [t, n],
        ),
        u = i.useCallback(() => lK(t, n), [t, n]);
    return {
        drafts: a,
        addFiles: r,
        pasteFiles: s,
        removeDraft: o,
        settled: a.every((e) => "ready" === e.status),
        takeRefs: u,
    };
}
function iR(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(iI.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(y.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(C.y, { type: C.t.SPINNING_CIRCLE_SIMPLE, className: iT.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: iT.o1,
                onClick: () => n(t.localId),
                "aria-label": ed.intl.string(eu.default.Slam9g),
                children: (0, a.jsx)(iE.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var iL = n(497437);
let iD = "text-md/normal",
    iO = null;
function iF(e) {
    let { text: t, offering: n, typed: l } = e,
        [r, o] = i.useState(t),
        u = i.useRef(null),
        d = i.useRef(null),
        m = i.useRef(0),
        [f, h] = i.useState(0),
        [p, g] = i.useState(0),
        [x, b] = i.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
    (i.useLayoutEffect(() => {
        let e = u.current,
            t = e?.parentElement;
        if (null == e || null == t) return;
        let n = m.current;
        function l() {
            let e = u.current,
                t = e?.parentElement;
            if (null == e || null == t) return;
            let l = d.current;
            if (null == l) return;
            let a = parseFloat(getComputedStyle(t).columnGap),
                i = Number.isNaN(a) ? 0 : a,
                r = e.offsetWidth,
                s = l.offsetWidth + i;
            (g(r + i), h(s));
            let o = s + r,
                c = Math.max(n, l.offsetWidth) + i + r,
                m = 0 === c ? 1 : s / c,
                f = 0 === c ? 1 : o / c;
            b({
                frontFrom: 1e3 * (0, ij._R)(m),
                frontTo: 1e3 * (0, ij._R)(f),
                backFrom: 1e3 * (0, ij.T)(m),
                backTo: 1e3 * (0, ij.T)(f),
            });
        }
        let a = new ResizeObserver(l);
        return (l(), a.observe(e), a.observe(t), null != d.current && a.observe(d.current), () => a.disconnect());
    }, [t]),
        i.useEffect(() => {
            m.current = d.current?.offsetWidth ?? 0;
        }, [t]));
    let [v, j] = i.useState(0),
        [w, k] = i.useState(null),
        C = i.useRef(!1),
        A = i.useCallback(() => {
            (k(C.current ? (n ? "through" : "out") : n ? "in" : null), j((e) => e + 1));
        }, [n]);
    i.useEffect(() => {
        C.current = n;
    }, [n, t]);
    let N = "in" === w ? x.backFrom : x.frontFrom,
        S = "out" === w ? x.frontTo : x.backTo,
        E = (0, c.bG)([iN.Ay], () => iN.Ay.useReducedMotion),
        I = t === ed.intl.string(eu.default.Zc7gML),
        T = r === t && I;
    function P(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: s()(iL.VT, { [iL.qk]: l }),
            style: l
                ? {
                      insetInlineStart: f,
                      "--custom-cap-wipe-delay": `${N}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, S - N)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": l && v > 0 && null != w ? v % 2 : void 0,
            "data-wipe-kind": l ? (w ?? void 0) : void 0,
            children: (0, a.jsx)(iw.e, { shortcut: "tab", className: iL.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(ez.o, {
                text: t,
                variant: iD,
                delay: null,
                duration: 1e3,
                trailingWidth: p,
                className: s()(iL.xM, { [iL.s2]: l }),
                onStart: A,
                onComplete: () => o(t),
            }),
            P(iL.IS, n || (!E && "out" === w), u),
            (0, a.jsx)("span", {
                ref: d,
                className: iL.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(y.E, { variant: iD, tag: "span", children: t }),
            }),
            T
                ? (0, a.jsxs)("span", {
                      className: iL.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(y.E, { variant: iD, tag: "span", className: iL.xM, children: t }),
                          P(iL.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
function iz(e) {
    let {
            projectId: t,
            canSend: n,
            stopped: l,
            running: r,
            restoring: s = !1,
            onSend: o,
            onInterrupt: u,
            onUploadFile: d,
            onApprove: m,
            onImport: f,
            suggestion: h,
            questionOpen: p = !1,
            hasPendingContext: g = !1,
            onDraftHasTextChange: x,
            modelSettings: b,
            onModelSettingsChange: v,
        } = e,
        [y, j] = i.useState(() => am.getDraft(t)),
        C = i.useCallback(
            (e) => {
                ((0, eP.I$)(t, e), j(e));
            },
            [t],
        ),
        A = "" !== y.trim();
    i.useEffect(() => x?.(A), [A, x]);
    let [N, S] = i.useState(t);
    N !== t && (S(t), j(am.getDraft(t)));
    let E = (0, c.bG)([iN.Ay], () => iN.Ay.isSubmitButtonEnabled),
        [I, T] = i.useState(!1);
    i.useEffect(() => {
        r || T(!1);
    }, [r]);
    let P = i.useRef(null),
        {
            drafts: M,
            addFiles: _,
            pasteFiles: R,
            removeDraft: L,
            settled: D,
            takeRefs: O,
        } = i_({ projectId: t, surface: "chat", onUploadFile: d }),
        F = "" !== y.trim() || M.length > 0 || g,
        z = n && F && D,
        [U, G] = i.useState(null);
    i.useEffect(() => {
        if (null == U) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => G(null));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [U]);
    let q = i.useCallback(() => {
            if (!z) return;
            let e = O();
            o(y, e.length > 0 ? e : void 0);
            let t = (function (e, t, n) {
                let l,
                    a,
                    i = n.split("\n", 1)[0] ?? "";
                if (null == e || "" === i) return i;
                null == iO && (iO = document.createElement("canvas").getContext("2d"));
                let r = iO;
                if (null == r) return i;
                let s = getComputedStyle(e);
                r.font = "" !== s.font ? s.font : `${s.fontWeight} ${s.fontSize} ${s.fontFamily}`;
                let o =
                    t > 0
                        ? t
                        : ((l = parseFloat(s.paddingInlineStart)),
                          (a = parseFloat(s.paddingInlineEnd)),
                          e.clientWidth - (Number.isNaN(l) ? 0 : l) - (Number.isNaN(a) ? 0 : a));
                if (o <= 0 || r.measureText(i).width <= o) return i;
                let u = 0,
                    d = i.length;
                for (; u < d;) {
                    let e = Math.ceil((u + d) / 2);
                    r.measureText(i.slice(0, e)).width <= o ? (u = e) : (d = e - 1);
                }
                let c = i.slice(0, u),
                    m = c.lastIndexOf(" ");
                return (m > 0 ? c.slice(0, m) : c).trimEnd();
            })(X.current?.querySelector("textarea") ?? null, eo.current, y);
            ("" !== t && G(t), C(""));
        }, [z, y, o, O, C]),
        $ = i.useCallback(
            (e) => {
                (e.preventDefault(), q());
            },
            [q],
        ),
        B = i.useCallback(() => {
            null == u || I || (T(!0), u());
        }, [u, I]),
        H = null == h || "" !== y || !n || l || s || g ? null : h,
        V = i.useCallback(
            (e) => {
                if ("Escape" === e.key && r && null != u && !I) {
                    (e.preventDefault(), e.stopPropagation(), B());
                    return;
                }
                if ("Tab" === e.key && !e.shiftKey && null != H) {
                    (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), C(H));
                    return;
                }
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != m && (e.preventDefault(), m());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), q());
            },
            [q, m, r, u, I, B, H, C],
        ),
        W = i.useCallback(
            (e) => {
                n && R(e);
            },
            [n, R],
        );
    (0, iS.Vo)({
        event: ev.jej.GLOBAL_CLIPBOARD_PASTE,
        handler: (e) => {
            let { event: t } = e;
            return W(t);
        },
    });
    let K = i.useCallback(
            (e) => {
                (_(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
            },
            [_],
        ),
        X = i.useRef(null),
        Y = i.useRef(null),
        [J, Q] = i.useState(0),
        [Z, ea] = i.useState(!1);
    i.useEffect(() => {
        if (0 === y.length) return void ea(!1);
        let e = X.current?.querySelector("textarea");
        if (null != e) {
            let t = iq(e);
            null != t && Q(t);
        }
        ea(!0);
        let t = setTimeout(() => ea(!1), iU);
        return () => clearTimeout(t);
    }, [y]);
    let ei = i.useMemo(() => ({ "--custom-glow-x": `${J}px` }), [J]),
        er = Z ? ` ${iL.EB}` : "",
        es = s
            ? ed.intl.string(eu.default.qqlUiW)
            : l
              ? ed.intl.string(eu.default.mPB3eo)
              : n
                ? g
                    ? ed.intl.string(eu.default.knUjL3)
                    : p
                      ? ed.intl.string(eu.default.IevBEw)
                      : ed.intl.string(r ? eu.default["0BJa/0"] : eu.default.TEeU7z)
                : ed.intl.string(eu.default.zZ9NgM),
        eo = i.useRef(0),
        ec = i.useRef(null),
        em = i.useCallback((e) => {
            if ((ec.current?.disconnect(), null == e)) return;
            eo.current = e.clientWidth;
            let t = new ResizeObserver(() => {
                eo.current = e.clientWidth;
            });
            (t.observe(e), (ec.current = t));
        }, []),
        ef = i.useId(),
        eh = null != H,
        ep = U ?? H ?? es,
        eg = "" === y && "" !== ep;
    return (0, a.jsxs)("form", {
        onSubmit: $,
        className: iL.DA,
        children: [
            M.length > 0
                ? (0, a.jsx)("div", {
                      className: iL.lN,
                      children: M.map((e) => (0, a.jsx)(iR, { draft: e, onRemove: L }, e.localId)),
                  })
                : null,
            (0, a.jsx)("span", { className: `${iL.wg} ${iL.LP}${er}`, style: ei, "aria-hidden": !0 }),
            (0, a.jsx)("span", { className: `${iL.wg} ${iL.L3}${er}`, style: ei, "aria-hidden": !0 }),
            (0, a.jsxs)("div", {
                className: iL.VA,
                ref: X,
                children: [
                    (0, a.jsx)("input", {
                        ref: P,
                        type: "file",
                        multiple: !0,
                        onChange: K,
                        className: iL.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    null == f
                        ? (0, a.jsx)(w.m, {
                              text: ed.intl.string(eu.default.lgvqSB),
                              ariaHidden: !0,
                              children: (0, a.jsx)("button", {
                                  ref: Y,
                                  type: "button",
                                  className: `${iL.Y0} ${iL.nu}`,
                                  disabled: !n,
                                  onClick: () => P.current?.click(),
                                  "aria-label": ed.intl.string(eu.default.lgvqSB),
                                  children: (0, a.jsx)(el.H, {
                                      size: "refresh_sm",
                                      color: "currentColor",
                                      className: iL.Qu,
                                  }),
                              }),
                          })
                        : (0, a.jsx)(ee.Y, {
                              targetElementRef: Y,
                              position: "top",
                              align: "left",
                              animation: ee.Y.Animation.NONE,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, a.jsx)(et.W, {
                                      "data-menu-migrated": !0,
                                      navId: "conjure-composer-attach",
                                      "aria-label": ed.intl.string(ed.t.d56gCa),
                                      onClose: t,
                                      onSelect: t,
                                      children: (0, a.jsxs)(en.rX, {
                                          children: [
                                              (0, a.jsx)(en.Dr, {
                                                  id: "upload-file",
                                                  label: ed.intl.string(ed.t["d3+iYs"]),
                                                  iconLeft: el.H,
                                                  leadingAccessory: { type: "icon", icon: el.H },
                                                  action: () => P.current?.click(),
                                              }),
                                              null != f
                                                  ? (0, a.jsx)(en.Dr, {
                                                        id: "import-project",
                                                        label: ed.intl.string(eu.default["p/k5i7"]),
                                                        iconLeft: ik.q,
                                                        leadingAccessory: { type: "icon", icon: ik.q },
                                                        action: f,
                                                    })
                                                  : null,
                                          ],
                                      }),
                                  });
                              },
                              children: (e, t) => {
                                  let { isShown: l } = t;
                                  return (0, a.jsx)("button", {
                                      ...e,
                                      ref: Y,
                                      type: "button",
                                      className: `${iL.Y0} ${iL.nu}`,
                                      disabled: !n,
                                      "aria-label": ed.intl.string(ed.t.d56gCa),
                                      "aria-haspopup": "menu",
                                      "aria-expanded": l,
                                      children: (0, a.jsx)(iC.PlusLargeIcon, {
                                          size: "refresh_sm",
                                          color: "currentColor",
                                          className: iL.Qu,
                                      }),
                                  });
                              },
                          }),
                    eg
                        ? (0, a.jsx)("div", {
                              ref: em,
                              className: iL.ar,
                              "aria-hidden": "true",
                              children: (0, a.jsx)(iF, { text: ep, offering: eh && null == U, typed: null != U }),
                          })
                        : null,
                    (0, a.jsx)(lw.y, {
                        value: y,
                        onChange: (e) => C(e.currentTarget.value),
                        onKeyDown: V,
                        onPaste: W,
                        placeholder: eg ? "" : es,
                        disabled: !n,
                        "aria-label": ed.intl.string(eu.default.ldNl9x),
                        "aria-describedby": eg ? ef : void 0,
                        rows: 1,
                        className: iL.jp,
                    }),
                    eg ? (0, a.jsx)(k.A, { id: ef, children: es }) : null,
                    (0, a.jsx)("div", {
                        className: iL.Sz,
                        children:
                            r && null != u
                                ? (0, a.jsx)(w.m, {
                                      text: ed.intl.string(eu.default.wiguT0),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)("button", {
                                          type: "button",
                                          className: `${iL.Y0} ${iL.$E}`,
                                          disabled: I,
                                          onClick: B,
                                          "aria-label": ed.intl.string(eu.default.wiguT0),
                                          children: (0, a.jsx)(ah.w, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : b?.tierSettings != null && null != v
                                  ? (0, a.jsx)(tb, {
                                        settings: b.tierSettings,
                                        tiers: b.tiers,
                                        choices: b.choices,
                                        disabled: !n,
                                        onChange: v,
                                        className: `${iL.Y0} ${iL.$E}`,
                                        icon: (0, a.jsx)(td.R, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: "currentColor",
                                        }),
                                    })
                                  : null,
                    }),
                    E
                        ? (0, a.jsxs)("div", {
                              className: iL.fF,
                              children: [
                                  (0, a.jsx)("div", { className: iL.MT }),
                                  (0, a.jsx)("button", {
                                      type: "submit",
                                      className: iL.rt,
                                      disabled: !z,
                                      "aria-label": ed.intl.string(eu.default.rxW2cl),
                                      children: (0, a.jsx)(iA.SendMessageIcon, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
        ],
    });
}
let iU = 1500,
    iG = [
        "font-family",
        "font-size",
        "font-weight",
        "font-style",
        "font-variant",
        "letter-spacing",
        "word-spacing",
        "line-height",
        "text-indent",
        "text-transform",
        "padding-top",
        "padding-right",
        "padding-bottom",
        "padding-left",
        "border-top-width",
        "border-right-width",
        "border-bottom-width",
        "border-left-width",
    ];
function iq(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = iq.mirror;
            if (null != e) return e;
            let t = document.createElement("div");
            return (
                t.setAttribute("aria-hidden", "true"),
                (t.style.position = "absolute"),
                (t.style.top = "0"),
                (t.style.left = "-9999px"),
                (t.style.visibility = "hidden"),
                (t.style.boxSizing = "border-box"),
                (t.style.whiteSpace = "pre-wrap"),
                (t.style.overflowWrap = "break-word"),
                document.body.appendChild(t),
                (iq.mirror = t),
                t
            );
        })(),
        n = window.getComputedStyle(e);
    for (let e of iG) t.style.setProperty(e, n.getPropertyValue(e));
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let l = document.createElement("span");
    ((l.textContent = "\u200B"), t.appendChild(l));
    let a = l.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + a - e.scrollLeft);
}
iq.mirror = null;
var i$ = n(155899),
    iB = n(148087);
let iH = [6e4, 18e4, 6e5],
    iV = [
        {
            key: "outdated",
            priority: 2,
            idleDelayMs: 6e4,
            backoffDelaysMs: iH,
            clock: "persistent",
            eligible: (e) => {
                var t;
                let { publish: n, draftTyped: l } = e;
                return !l && null != (t = n) && t.isUpdate && null == t.disabledReason && !0 !== t.publishing;
            },
        },
        {
            key: "ideas",
            priority: 1,
            idleDelayMs: 6e4,
            clock: "visit",
            eligible: (e) => {
                var t;
                let { turn: n, publish: l, draftHasText: a } = e;
                return (
                    !a &&
                    l?.publishing !== !0 &&
                    "plan_implemented" === (t = n).kind &&
                    (0, tW.BL)(t) &&
                    !(null != n.publishCta && a8(l))
                );
            },
        },
    ];
function iW(e, t) {
    return {
        ...e,
        now: t,
        visitStartedAt: t,
        draftTyped: !1,
        lastActivityAt: null,
        lastMessageAt: null == e.messageAt ? null : Math.min(e.messageAt, t),
        seenAt: null,
        unseen: !1,
        hiddenAt: e.visible ? null : t,
        outdatedShown: !1,
        outdatedBackoff: 0,
    };
}
let iK = new Map();
function iX(e) {
    let { projectId: t, notice: n } = e;
    return "outdated" === n ? (0, a.jsx)(iJ, { projectId: t }) : (0, a.jsx)(iY, { projectId: t, notice: n });
}
function iY(e) {
    let { projectId: t, notice: n } = e,
        l = i.useContext(nU),
        r = (0, c.bG)([eM.Ay, nT.A], () => {
            let e = eM.Ay.getProject(t);
            return null == e ? "" : (nT.A.getApplication(e.application_id)?.name ?? e.name);
        }),
        s = i.useCallback(() => {
            null != l &&
                (function (e, t) {
                    let n = nq(e, t.guildId);
                    if (null == n) return;
                    let l = nD({
                        ...n.input,
                        status: null == n.input.status ? null : { ...n.input.status, state: "up_to_date" },
                    })?.destination;
                    null != l && n$(n, l, t.platform).catch(() => {});
                })(t, l);
        }, [l, t]);
    return (0, a.jsx)(y.E, {
        variant: "text-md/normal",
        color: "text-default",
        children: ed.intl.format(
            (function (e) {
                if (!e.update) return eu.default.MOrR29;
                switch (e.surface) {
                    case "bot":
                        return eu.default.zfpeIL;
                    case "widget":
                        return eu.default.DxCfTh;
                    case "automod":
                        return eu.default["8ytGC3"];
                    case "activity":
                    case null:
                        return eu.default.WSmpBT;
                }
            })(n),
            { name: r, onOpen: s },
        ),
    });
}
function iJ(e) {
    let { projectId: t } = e,
        n = nQ(t);
    return null == n
        ? null
        : (0, a.jsx)(y.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: ed.intl.format(eu.default.X8tdbS, {
                  action: n.label,
                  onUpdate: () => {
                      (iK.get(t)?.forEach((e) => e()), n.run("outdated_notice"));
                  },
              }),
          });
}
var iQ = n(248798);
function iZ(e, t) {
    e.style.height = `${t.offsetHeight}px`;
}
function i0(e) {
    let { reminder: t, renderReminder: n } = e,
        l = (function (e) {
            let t,
                [n, l] = i.useState([]);
            (n.find((e) => !e.leaving)?.key ?? null) !== e &&
                l(
                    ((t = n.filter((t) => t.key !== e).map((e) => ({ ...e, leaving: !0 }))),
                    null != e ? [...t, { key: e, leaving: !1 }] : t),
                );
            let a = n.some((e) => e.leaving);
            return (
                i.useEffect(() => {
                    if (!a) return;
                    let e = setTimeout(() => l((e) => e.filter((e) => !e.leaving)), 180);
                    return () => clearTimeout(e);
                }, [a, n]),
                n
            );
        })(t),
        r = l.find((e) => !e.leaving)?.key ?? null,
        o = null == r && l.length > 0,
        u = i.useRef(null),
        d = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            let e = u.current;
            if (null == e || o) return;
            e.getBoundingClientRect();
            let t = d.current;
            if (null == t) {
                e.style.height = "0px";
                return;
            }
            iZ(e, t);
            let n = new ResizeObserver(() => iZ(e, t));
            return (n.observe(t), () => n.disconnect());
        }, [r, o]),
        (0, a.jsx)("div", {
            ref: u,
            className: s()(iQ.NI, { [iQ.Jg]: null == r }),
            "aria-live": "polite",
            children: (0, a.jsx)("div", {
                className: iQ.t$,
                children: l.map((e) =>
                    (0, a.jsx)(
                        "div",
                        {
                            ref: e.leaving ? void 0 : d,
                            "aria-hidden": e.leaving || void 0,
                            className: s()(iQ.qd, e.leaving ? iQ.cu : iQ.We),
                            children: n(e.key),
                        },
                        e.key,
                    ),
                ),
            }),
        })
    );
}
var i2 = n(320095),
    i1 = n(963852),
    i6 = n(521981),
    i9 = n(763754),
    i3 = n(491182),
    i5 = n(438729),
    i4 = n(622868),
    i7 = n(448368),
    i8 = n(837528),
    re = n(439762),
    rt = n(715628),
    rn = n(752636),
    rl = n(9842),
    ra = n(589022),
    ri = n(95701),
    rr = n(994500),
    rs = n(967198),
    ro = n(7584);
let ru = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function rd(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function rc(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function rm(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let a = rc(e, t),
        i = e.codePointAt(t);
    if (
        (null != i &&
            (8205 === i ||
                (i >= 65024 && i <= 65039) ||
                (i >= 127995 && i <= 127999) ||
                (i >= 768 && i <= 879) ||
                (i >= 8400 && i <= 8447) ||
                (i >= 65056 && i <= 65071) ||
                (i >= 917536 && i <= 917631))) ||
        8205 === a
    )
        return !0;
    if (rd(a) && rd(i)) {
        let n = 0,
            l = t;
        for (; n < 32 && rd(rc(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function rf(e, t) {
    let { streaming: n } = t,
        l = (0, c.bG)([iN.Ay], () => iN.Ay.useReducedMotion),
        a = n && !l,
        [r, s] = i.useState(() => ({ target: e, length: e.length })),
        o = r;
    (o.target !== e &&
        (o = {
            target: e,
            length: a
                ? (function (e, t, n) {
                      let l = Math.min(Math.max(n, 0), e.length);
                      if (0 === l) return 0;
                      if (t.length >= l && t.startsWith(e.slice(0, l))) return l;
                      let a = Math.min(l, t.length),
                          i = 0;
                      for (; i < a && e.charCodeAt(i) === t.charCodeAt(i);) i++;
                      for (; i > 0 && rm(t, i);) i--;
                      return i;
                  })(o.target, e, o.length)
                : e.length,
        }),
        a || o.length === e.length || (o = { target: e, length: e.length }),
        o !== r && s(o));
    let u = a && o.length < e.length,
        d = i.useRef(o);
    i.useLayoutEffect(() => {
        d.current = o;
    });
    let m = i.useRef(0),
        f = i.useRef(0);
    (i.useEffect(() => {
        if (u)
            return (
                (f.current = 0),
                (m.current = requestAnimationFrame(function e(t) {
                    let n = 0 === f.current ? 32 : t - f.current;
                    if (n >= 32) {
                        f.current = t;
                        let e = d.current,
                            l = (function (e) {
                                let { target: t, revealed: n, elapsedMs: l } = e,
                                    a = Math.min(Math.max(n, 0), t.length),
                                    i = t.length - a;
                                if (i <= 0) return a;
                                if (i > 900) return t.length;
                                let r = Math.min(
                                    120,
                                    Math.max(1, Math.round(Math.max(0.16, i / 280) * Math.max(l, 0))),
                                );
                                var s = (function (e, t, n) {
                                    if (n >= e.length) return n;
                                    let l = n;
                                    for (; l > t + 1 && n - l < 12 && ru.has(e.charAt(l - 1));) l--;
                                    return ru.has(e.charAt(l - 1)) ? n : l;
                                })(t, a, Math.min(t.length, a + r));
                                let o = s;
                                for (; o < t.length && o - s < 32 && rm(t, o);) o++;
                                return o;
                            })({ target: e.target, revealed: e.length, elapsedMs: n });
                        l !== e.length && s({ target: e.target, length: l });
                    }
                    m.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(m.current)
            );
    }, [u]),
        i.useEffect(() => {
            if (u)
                return (
                    e(),
                    document.addEventListener("visibilitychange", e),
                    () => document.removeEventListener("visibilitychange", e)
                );
            function e() {
                if ("hidden" !== document.visibilityState) return;
                let { target: e } = d.current;
                s({ target: e, length: e.length });
            }
        }, [u]));
    let h = Math.min(o.length, e.length);
    return { text: h >= e.length ? e : e.slice(0, h), revealing: a && h < e.length };
}
var rh = n(565645),
    rp = n(981879);
function rg(e) {
    let { emoji: t, label: n } = e;
    return (0, a.jsx)("div", {
        className: rp.H,
        children: (0, a.jsx)(rh.A, { emojiName: t, alt: n, size: "reaction" }),
    });
}
var rx = n(194085),
    rb = n(734495),
    rv = n(180227);
function ry(e) {
    let { message: t, onClose: n } = e,
        l = (0, rb.A)(t);
    return (0, a.jsx)(et.W, {
        navId: "conjure-message-actions",
        "aria-label": ed.intl.string(ed.t.Lv7LxN),
        onClose: n,
        onSelect: n,
        children: (0, a.jsx)(en.rX, { children: l }),
    });
}
function rj(e) {
    let { groupStart: t, renderMenu: n } = e,
        [l, r] = i.useState(!1),
        o = i.useRef(null),
        u = i.useCallback(() => r((e) => !e), []),
        d = i.useCallback(() => r(!1), []);
    return (0, a.jsx)("div", {
        className: s()(rv.QE, { [rv.Rn]: t, [rv.vg]: l }),
        children: (0, a.jsx)(rx.Ay, {
            children: (0, a.jsx)(ee.Y, {
                targetElementRef: o,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return n(t);
                },
                shouldShow: l,
                onRequestClose: d,
                position: "left",
                align: "top",
                animation: ee.Y.Animation.NONE,
                children: (e, t) => {
                    let { onClick: n, ...l } = e,
                        { isShown: i } = t;
                    return (0, a.jsx)(rx.qv, {
                        ref: o,
                        label: ed.intl.string(ed.t["UKOtz+"]),
                        icon: t4.MoreHorizontalIcon,
                        selected: i,
                        onClick: u,
                        ...l,
                    });
                },
            }),
        }),
    });
}
function rw(e) {
    let { message: t, groupStart: n } = e,
        l = i.useCallback((e) => (0, a.jsx)(ry, { message: t, onClose: e }), [t]);
    return null == (0, rb.A)(t) ? null : (0, a.jsx)(rj, { groupStart: n, renderMenu: l });
}
let rk = (0, ri.createChannelRecord)({ id: "conjure-builder", type: ev.rbe.DM }),
    rC = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function rA(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: s()(rv.Yq, { [rv.x1]: t }), children: e });
}
function rN(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function rS(e, t, n) {
    let { content: l } = (0, re.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        r = i.useMemo(() => ({ message: e, channel: rk, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(i5.Ay, { className: n, message: e, content: l, compact: !1 })
          : (0, rt.A)(r, l);
}
function rE(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, i8.m)(e, rk, t.usernameProfile, l),
        o = (0, i8.Jo)(t.avatarProfile, l),
        u = (0, c.bG)([rs.A], () => rs.A.getGuildId()),
        d = (0, c.bG)([tH.default], () => tH.default.getCurrentUser()),
        m = i.useCallback(
            (t) => {
                let n = tH.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(ra.A, { ...t, user: n, currentUser: d, guildId: u ?? void 0 });
            },
            [d, u, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: o,
        onClickUsername: s,
        onPopoutRequestClose: r,
        renderPopout: m,
        guildId: u ?? void 0,
    };
}
function rI(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        s = i.useMemo(() => {
            let e = "" !== n.content ? (0, i6.Ay)(n, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == l
                ? e
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: rv.GV,
                              children: [
                                  (0, a.jsx)(N.x, {
                                      className: rv.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 14,
                                      height: 14,
                                  }),
                                  l,
                              ],
                          }),
                          e,
                      ],
                  });
        }, [n, l]),
        { isReplyAuthorBlocked: o, isReplyAuthorIgnored: u } = (0, c.cf)(
            [rr.A],
            () => ({
                isReplyAuthorBlocked: rr.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: rr.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        d = (0, i9.X4)(n),
        m = (0, i9.X4)(t),
        f = rE(n);
    return (0, a.jsx)(i7.A, {
        repliedAuthor: d,
        baseAuthor: m,
        baseMessage: t,
        channel: rk,
        referencedMessage: { state: rl.a.LOADED, message: n },
        content: s,
        compact: !1,
        isReplyAuthorBlocked: o,
        isReplyAuthorIgnored: u,
        isReplySpineClickable: null != r,
        showReplySpine: !0,
        renderPopout: f.renderPopout,
        showAvatarPopout: f.showAvatarPopout,
        showUsernamePopout: f.showUsernamePopout,
        onClickAvatar: f.onClickAvatar,
        onClickUsername: f.onClickUsername,
        onClickReply: r,
        onPopoutRequestClose: f.onPopoutRequestClose,
    });
}
function rT(e) {
    let { message: t, author: n } = e,
        l = rE(t);
    return (0, a.jsx)(i4.Ay, {
        message: t,
        channel: rk,
        author: n,
        guildId: l.guildId,
        subscribeToGroupId: t.id,
        renderPopout: l.renderPopout,
        showAvatarPopout: l.showAvatarPopout,
        showUsernamePopout: l.showUsernamePopout,
        onClickAvatar: l.onClickAvatar,
        onClickUsername: l.onClickUsername,
        onPopoutRequestClose: l.onPopoutRequestClose,
    });
}
function rP(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, agentReaction: s, groupStart: o } = e;
    i.useEffect(() => tQ(l), [l]);
    let u = (0, c.bG)(
            [tH.default],
            () => tJ(l, null != l ? tH.default.getUser(l) : null, tH.default.getCurrentUser()),
            [l],
        ),
        d = i.useMemo(() => (0, i9.FT)(u, null), [u]),
        m = i.useMemo(() => e9(t), [t]),
        f = m?.body ?? t,
        h = i.useMemo(() => {
            if (null == u) return null;
            let e = (0, i1.Ay)({ channelId: rk.id, content: f, author: u });
            return (0, i2.rh)({ ...e, timestamp: rN(n, e.timestamp), state: ev.cmJ.SENT });
        }, [f, u, n]),
        p = (function (e) {
            if (null == e || "" === e) return null;
            let t = ro.Ay.convertSurrogateToName(e, !1);
            return "" === t ? null : ed.intl.formatToPlainString(eu.default.lxXLho, { emojiName: t });
        })(s);
    return null == h
        ? null
        : (0, a.jsx)(rM, {
              message: h,
              author: d,
              content: f,
              selected: m?.label,
              accessories:
                  null != s && null != p
                      ? (0, a.jsxs)(a.Fragment, { children: [r, (0, a.jsx)(rg, { emoji: s, label: p })] })
                      : r,
              groupStart: o,
          });
}
function rM(e) {
    let { message: t, author: n, content: l, selected: i, accessories: r, groupStart: s = !0 } = e,
        o = rS(t, l);
    return (0, a.jsx)(i3.A, {
        className: rv.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(rT, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == i
                ? o
                : (0, a.jsxs)("div", {
                      className: rv.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: rv.GV,
                              children: [
                                  (0, a.jsx)(N.x, {
                                      className: rv.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  i,
                              ],
                          }),
                          (0, a.jsx)("span", { className: rv.WO, children: o }),
                      ],
                  }),
        childrenAccessories: rA(r, "" !== l),
        childrenButtons: (0, a.jsx)(rw, { message: t, groupStart: s }),
    });
}
function r_(e) {
    let {
            content: t,
            createdAt: n,
            accessories: l,
            replyTo: r,
            onJumpToReplied: s,
            groupStart: o = !0,
            streaming: u = !1,
            buttons: d,
        } = e,
        { text: m, revealing: f } = rf(t, { streaming: u }),
        h = i.useMemo(() => (0, i9.FT)(null, null), []),
        p = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        g = r?.userId,
        x = (0, c.bG)(
            [tH.default],
            () => tJ(g, null != g ? tH.default.getUser(g) : null, tH.default.getCurrentUser()),
            [g],
        ),
        b = i.useMemo(() => (null == r ? null : e9(r.content)), [r]),
        v = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, i1.Ay)({ channelId: rk.id, content: b?.body ?? r.content, author: x });
            return (0, i2.rh)({ ...e, id: r.id, timestamp: rN(r.createdAt, e.timestamp), state: ev.cmJ.SENT });
        }, [r, b, x]),
        y = i.useMemo(() => (null == r ? void 0 : { channel_id: rk.id, message_id: r.id }), [r]),
        j = i.useMemo(() => {
            let e = (0, i1.Ay)({ channelId: rk.id, content: m, author: rC });
            return (0, i2.rh)({
                ...e,
                timestamp: rN(n, e.timestamp),
                state: ev.cmJ.SENT,
                ...(null != y ? { type: ev.lAJ.REPLY, message_reference: y } : {}),
            });
        }, [m, n, y]),
        w = rS(j, m, rv.OS);
    return (0, a.jsxs)("div", {
        className: rv.$4,
        "data-replying": null != v ? "true" : void 0,
        "data-conjure-revealing": f ? "true" : void 0,
        children: [
            (0, a.jsx)(i3.A, {
                className: rv.yE,
                author: p,
                childrenRepliedMessage:
                    null == v
                        ? null
                        : (0, a.jsx)(rI, { baseMessage: j, referenced: v, selected: b?.label, onJumpToReplied: s }),
                childrenHeader: (0, rn.A)({ message: j, channel: rk, author: p, guildId: void 0, isGroupStart: o }),
                childrenMessageContent: w,
                childrenAccessories: rA(l, "" !== m),
                disableInteraction: !0,
            }),
            d,
            o
                ? (0, a.jsx)("span", {
                      className: rv.st,
                      "aria-hidden": "true",
                      children: (0, a.jsx)(aM.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
let rR = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i;
var rL = n(744898);
function rD(e) {
    let { onSelect: t, onClose: n = F.Z_, onRestoreVersion: l } = e;
    return (0, a.jsx)(et.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": ed.intl.string(ed.t.ogxXGq),
        onSelect: t,
        children: (0, a.jsx)(en.rX, {
            children: (0, a.jsx)(en.Dr, {
                id: "restore-version",
                label: ed.intl.string(eu.default.H8Jfhu),
                icon: rL.e,
                action: l,
            }),
        }),
    });
}
var rO = n(986109);
function rF(e, t) {
    (0, i$.F)({ onConfirm: () => t(e) });
}
function rz(e) {
    let {
            projectId: t,
            messages: n,
            emptyState: l,
            ref: r,
            onPickIdea: o,
            onAskForIdeas: u,
            draftHasText: d,
            onApprovePlan: m,
            floatingSettingsMessageId: f,
            onRestoreVersion: h,
        } = e,
        p = i.useRef(null),
        g = i.useCallback(
            (e) => {
                ((p.current = e), "function" == typeof r ? r(e) : null != r && (r.current = e));
            },
            [r],
        ),
        [x, b] = i.useState(null),
        v = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(v.current), []);
    let j = i.useCallback((e) => {
            let t = p.current?.querySelector(`[data-conjure-message="${e}"]`);
            (t?.scrollIntoView({ block: "center", behavior: "smooth" }),
                b(e),
                window.clearTimeout(v.current),
                (v.current = window.setTimeout(() => b(null), 1600)));
        }, []),
        w = (0, c.bG)([eM.Ay], () => eM.Ay.getPublishStatus(t)?.state ?? null),
        k = i.useMemo(() => {
            let e;
            return (function (e) {
                let t = [],
                    n = (function (e) {
                        let t = new Set(),
                            n = !1;
                        for (let l = e.length - 1; l >= 0; l--) {
                            let a = e[l];
                            null != a &&
                                null !=
                                    (function (e) {
                                        if ("assistant" !== e.role) return null;
                                        let t = (0, n7.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(a) &&
                                (n && t.add(a.render_id), (n = !0));
                        }
                        return t;
                    })(e);
                function l(e, n) {
                    t.push({ row: e, groupable: { key: e.key, ...n } });
                }
                for (let t of e) {
                    if ("user" === t.role) {
                        l(
                            { kind: "user", key: t.render_id, message: t, groupStart: !1 },
                            { actor: "user", authorId: t.user_id, boundary: void 0 },
                        );
                        continue;
                    }
                    if ("publish_notice" === t.kind) {
                        let e = `${t.render_id}:publish`;
                        l(
                            { kind: "publishNotice", key: e, message: t, groupStart: !1 },
                            { actor: "assistant", boundary: e },
                        );
                        continue;
                    }
                    let e = !(0, tW.BL)(t),
                        a = ab({
                            steps: t.steps,
                            content: t.content,
                            hasProposal: null != t.proposal,
                            hasAttachments: (t.attachments?.length ?? 0) > 0,
                        }),
                        i = a.lastStreamedMessage?.key,
                        r = (0, n7.C6)(t.steps, { turnActive: e }),
                        { lastWork: s, open: o } = (0, n7.CT)(r, { turnActive: e }),
                        u = r.at(-1)?.index,
                        d = !1;
                    for (let c of r) {
                        if (null != c.prose && rR.test(c.prose.content)) d = !0;
                        else if (null != c.prose && c.prose.key !== a.replyKey) {
                            let n = `${t.render_id}:${c.key}`;
                            l(
                                {
                                    kind: "prose",
                                    key: n,
                                    message: t,
                                    groupStart: !1,
                                    content: c.prose.content,
                                    hostsAttachments:
                                        "streamed" === a.attachmentsHost && c.prose.key === i && null != t.attachments,
                                    streaming: e && c.index === u && !c.hasWork,
                                },
                                { actor: "assistant", boundary: n },
                            );
                        }
                        (c.hasWork || c.hasTodos) &&
                            l(
                                {
                                    kind: "activity",
                                    key: `${t.render_id}:work-${c.index}`,
                                    message: t,
                                    groupStart: !1,
                                    segment: c.index,
                                    active: c.index === o,
                                    closed: c.index !== o,
                                    ...(null != c.durationMs ? { segmentDurationMs: c.durationMs } : {}),
                                    reportsDuration: c.index === s,
                                    hostsChecklist: c.hasTodos,
                                    turnActive: n8(t),
                                    checklistSuperseded: c.hasTodos && n.has(t.render_id),
                                },
                                { actor: null, boundary: void 0 },
                            );
                    }
                    let c = rR.test(t.content ?? "");
                    if (
                        (!0 === t.interrupted || d || c
                            ? l(
                                  {
                                      kind: "interrupted",
                                      key: `${t.render_id}:interrupted`,
                                      message: t,
                                      groupStart: !1,
                                  },
                                  { actor: null, boundary: void 0 },
                              )
                            : r.every((e) => !e.hasTodos) &&
                              (t.todos?.length ?? 0) > 0 &&
                              l(
                                  {
                                      kind: "legacyTodos",
                                      key: `${t.render_id}:todos`,
                                      message: t,
                                      groupStart: !1,
                                      checklistSuperseded: n.has(t.render_id),
                                  },
                                  { actor: null, boundary: void 0 },
                              ),
                        (a.showsClosingMessage && !c) ||
                            null != t.proposal ||
                            null != t.clarification ||
                            null != t.restoreProposal ||
                            (!e &&
                                (null != t.ideas ||
                                    null != t.publishCta ||
                                    null != t.secretRequest ||
                                    null != t.settingsRequest)) ||
                            "standalone" === a.attachmentsHost)
                    ) {
                        let n = `${t.render_id}:closing`;
                        l(
                            {
                                kind: "closing",
                                key: n,
                                message: t,
                                groupStart: !1,
                                active: e,
                                attachmentsHost: a.attachmentsHost,
                                content: a.closingContent,
                                sideReply: "side_reply" === t.kind,
                            },
                            {
                                actor: "assistant",
                                boundary: n,
                                separate: null != t.proposal || null != t.clarification || "side_reply" === t.kind,
                            },
                        );
                    }
                }
                let a = (function (e) {
                    let t,
                        n,
                        l = [],
                        a = null,
                        i = !1,
                        r = !1;
                    for (let s of e) {
                        if (null == s.actor) {
                            (l.push(!1), (a = null), (t = void 0), (i = !1), (r = !1), (n = void 0));
                            continue;
                        }
                        let e = !i || a !== s.actor || t !== s.authorId || s.boundary !== n || !0 === s.separate || r;
                        (e && ((a = s.actor), (t = s.authorId), (i = !0), (r = !0 === s.separate), (n = s.boundary)),
                            l.push(e));
                    }
                    return l;
                })(t.map((e) => e.groupable));
                return t.map((e, t) => ({ ...e.row, groupStart: a[t] ?? !0 }));
            })(
                ((e = (function (e, t) {
                    if ("unpublished" !== t) return null;
                    for (let t = e.length - 1; t >= 0; t--) if (null != e[t].publishCta) return e[t].id;
                    return null;
                })(n, w)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => (null == t.publishCta || t.id === e ? t : { ...t, publishCta: null }))),
            );
        }, [n, w]),
        A = n.at(-1),
        N = (function (e, t, n) {
            var l;
            let a = nQ(e),
                r = (0, iB.A)(),
                s = (function (e) {
                    for (let t = e.length - 1; t >= 0; t--) {
                        let n = e[t];
                        if ("publish_notice" !== n.kind) {
                            if ("user" === n.role) return null;
                            if ((0, tW.BL)(n)) return n;
                            if (!(0, tW.B0)(e, t)) break;
                        }
                    }
                    return null;
                })(t),
                o = t.at(-1),
                u = {
                    projectId: e,
                    draftHasText: n,
                    publishing: a?.publishing === !0,
                    drift: a?.status?.state === "changes",
                    messageAt: null != o ? Math.max(o.created_at, o.finished_at ?? 0, o.settled_at ?? 0) : null,
                    visible: r,
                },
                [d, c] = i.useState(() => iW(u, Date.now())),
                m = (function (e, t, n) {
                    if (e.projectId !== t.projectId) return iW(t, n());
                    if (
                        e.draftHasText === t.draftHasText &&
                        e.publishing === t.publishing &&
                        e.drift === t.drift &&
                        e.messageAt === t.messageAt &&
                        e.visible === t.visible
                    )
                        return e;
                    let l = n(),
                        a = { ...e, now: l };
                    if (
                        (e.draftHasText !== t.draftHasText &&
                            (a = { ...a, draftHasText: t.draftHasText, draftTyped: t.draftHasText, lastActivityAt: l }),
                        e.publishing !== t.publishing &&
                            (a = {
                                ...a,
                                publishing: t.publishing,
                                lastActivityAt: l,
                                outdatedShown: !1,
                                outdatedBackoff: 0,
                            }),
                        e.drift !== t.drift &&
                            ((a = { ...a, drift: t.drift }),
                            t.drift || (a = { ...a, outdatedShown: !1, outdatedBackoff: 0 })),
                        e.messageAt !== t.messageAt)
                    ) {
                        let n = null == t.messageAt ? null : Math.min(t.messageAt, l);
                        ((a = (function (e) {
                            if (!e.outdatedShown || e.publishing) return e;
                            let t = Math.min(e.outdatedBackoff + 1, iH.length - 1);
                            return { ...e, outdatedShown: !1, outdatedBackoff: t };
                        })({ ...a, messageAt: t.messageAt, lastMessageAt: n })),
                            t.visible || null == e.messageAt || (a = { ...a, unseen: !0 }));
                    }
                    return (
                        e.visible !== t.visible &&
                            ((a = { ...a, visible: t.visible }),
                            t.visible
                                ? (l - (e.hiddenAt ?? l) >= 6e5
                                      ? (a = { ...a, visitStartedAt: l })
                                      : a.unseen && (a = { ...a, seenAt: l }),
                                  (a = { ...a, hiddenAt: null, unseen: !1 }))
                                : (a = { ...a, hiddenAt: l, unseen: !1 })),
                        a
                    );
                })(d, u, Date.now),
                f =
                    null == s ||
                    null != (l = s).awaitingUser ||
                    null != l.secretRequest ||
                    null != l.settingsRequest ||
                    (l.intake?.questions.length ?? 0) > 0
                        ? null
                        : { turn: s, publish: a, draftHasText: n, draftTyped: m.draftTyped && n },
                { shown: h, nextDueAt: p } = (function (e, t) {
                    var n;
                    let l;
                    if (t.unseen) return { shown: null, nextDueAt: null };
                    let a = e.filter((e) => e.eligible).sort((e, t) => t.priority - e.priority)[0];
                    if (null == a) return { shown: null, nextDueAt: null };
                    let i =
                        ((l = Math.max(
                            0,
                            t.now -
                                ((n = a.clock),
                                Math.max(
                                    t.lastMessageAt ?? -1 / 0,
                                    t.lastActivityAt ?? -1 / 0,
                                    t.seenAt ?? -1 / 0,
                                    "visit" === n ? t.visitStartedAt : -1 / 0,
                                )),
                        )),
                        t.now + Math.max(0, a.idleDelayMs - l));
                    return i <= t.now ? { shown: a.key, nextDueAt: null } : { shown: null, nextDueAt: i };
                })(
                    iV.map((e) => ({
                        ...e,
                        idleDelayMs: e.backoffDelaysMs?.[m.outdatedBackoff] ?? e.idleDelayMs,
                        eligible: null != f && e.eligible(f),
                    })),
                    m,
                );
            return (
                "outdated" !== h || m.outdatedShown ? m !== d && c(m) : c({ ...m, outdatedShown: !0 }),
                i.useEffect(() => {
                    function t() {
                        let e = Date.now();
                        c((t) => ({ ...t, now: e, lastActivityAt: e }));
                    }
                    let n = iK.get(e) ?? new Set();
                    return (
                        iK.set(e, n),
                        n.add(t),
                        () => {
                            (n.delete(t), 0 === n.size && iK.delete(e));
                        }
                    );
                }, [e]),
                i.useEffect(() => {
                    if (null == p) return;
                    let e = setTimeout(() => c((e) => ({ ...e, now: Date.now() })), Math.max(0, p - Date.now()));
                    return () => clearTimeout(e);
                }, [p, m.now]),
                h
            );
        })(t, n, !0 === d),
        S = i.useCallback(
            (e) => {
                switch (e) {
                    case "outdated":
                        return (0, a.jsx)(r_, {
                            groupStart: !1,
                            content: "",
                            accessories: (0, a.jsx)(iX, { projectId: t, notice: "outdated" }),
                        });
                    case "ideas":
                        return (0, a.jsx)("div", {
                            className: rO.u$,
                            children: (0, a.jsx)(r_, {
                                content: ed.intl.string(eu.default.s96AWB),
                                accessories: (0, a.jsx)(is, { onAsk: u }),
                            }),
                        });
                }
            },
            [t, u],
        ),
        E = i.useMemo(
            () =>
                (function (e) {
                    if (e.at(-1)?.role !== "assistant") return null;
                    for (let t = e.length - 1; t >= 0; t--) {
                        let n = e[t];
                        if ("assistant" === n.role) {
                            if (!(0, tW.BL)(n) || "plan_implemented" === n.kind) return null;
                            if (null != n.proposal) return n.render_id;
                        }
                    }
                    return null;
                })(n),
            [n],
        ),
        I = i.useMemo(
            () =>
                (function (e) {
                    let t = new Map(),
                        n = null,
                        l = 0;
                    for (let a of e)
                        if ("assistant" === a.role) {
                            if ("plan_implemented" === a.kind) {
                                ((n = null), (l = 0));
                                continue;
                            }
                            null != a.proposal &&
                                (null != n && t.set(n, { version: l, superseded: !0 }),
                                (l += 1),
                                t.set(a.render_id, { version: l, superseded: !1 }),
                                (n = a.render_id));
                        }
                    return t;
                })(n),
            [n],
        ),
        T =
            (A?.role !== "assistant" || null == A.awaitingUser || null == A.secretRequest
                ? null
                : (0, tW.BL)(A)
                  ? A.awaitingUser
                  : null) ?? void 0,
        P = (0, c.bG)([ea.Ay], () => ea.Ay.getSettings(t)?.secrets, [t]),
        M = i.useMemo(
            () =>
                (function (e, t) {
                    let n = null != t ? new Set(t.filter((e) => e.set).map((e) => e.name)) : null,
                        l = new Map(),
                        a = new Set(),
                        i = !1,
                        r = !1;
                    for (let t = e.length - 1; t >= 0; t--) {
                        let s = e[t];
                        if (null == s) continue;
                        if ("user" === s.role) {
                            r =
                                r ||
                                (function (e) {
                                    let t = e.content.trim();
                                    return (
                                        t === ed.intl.string(eu.default.UGqnoV) ||
                                        t === ed.intl.string(eu.default.sMQt5O)
                                    );
                                })(s);
                            continue;
                        }
                        let o = s.secretRequest?.fields ?? [];
                        if (0 === o.length || !(0, tW.BL)(s)) continue;
                        let u = r;
                        for (let e of (u && null == n
                            ? l.set(s.render_id, "pending")
                            : u && null != n && o.every((e) => n.has(e.name))
                              ? l.set(s.render_id, "received")
                              : i
                                ? l.set(s.render_id, o.some((e) => a.has(e.name)) ? "superseded" : "inactive")
                                : l.set(s.render_id, "open"),
                        o))
                            a.add(e.name);
                        ((i = !0), (r = !1));
                    }
                    return l;
                })(n, P),
            [n, P],
        );
    if (0 === n.length) {
        if ("loading" === l)
            return (0, a.jsx)("ol", {
                ref: r,
                className: s()(rO.x7, rO.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: rO.Ub, children: (0, a.jsx)(C.y, {}) }),
            });
        let e = "unavailable" === l ? eu.default.Td4Sf4 : eu.default.V1QiNz;
        return (0, a.jsx)("ol", {
            ref: r,
            className: rO.x7,
            children: (0, a.jsx)(rU, { role: "assistant", children: (0, a.jsx)(r_, { content: ed.intl.string(e) }) }),
        });
    }
    return (0, a.jsxs)("ol", {
        ref: g,
        className: rO.x7,
        children: [
            k.map((e) => {
                let l = e.message;
                switch (e.kind) {
                    case "user": {
                        let n = null != l.attachments && l.attachments.length > 0 ? l.attachments : null;
                        return (0, a.jsx)(
                            rU,
                            {
                                role: "user",
                                anchorId: l.id,
                                highlighted: x === l.id,
                                continuation: !e.groupStart,
                                children: (0, a.jsx)(rP, {
                                    groupStart: e.groupStart,
                                    content: l.content,
                                    createdAt: l.created_at,
                                    userId: l.user_id,
                                    agentReaction: l.agentReaction,
                                    accessories:
                                        null != n ? (0, a.jsx)(ih.A, { projectId: t, attachments: n }) : void 0,
                                }),
                            },
                            e.key,
                        );
                    }
                    case "prose":
                        return (0, a.jsx)(
                            rU,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                children: (0, a.jsx)(r_, {
                                    groupStart: e.groupStart,
                                    content: e.content,
                                    streaming: e.streaming,
                                    createdAt: l.created_at,
                                    accessories:
                                        e.hostsAttachments && null != l.attachments
                                            ? (0, a.jsx)(ih.A, { projectId: t, attachments: l.attachments })
                                            : void 0,
                                }),
                            },
                            e.key,
                        );
                    case "activity":
                        return (0, a.jsx)(
                            rU,
                            {
                                role: "assistant",
                                children: (0, a.jsx)(iv, {
                                    projectId: t,
                                    steps: l.steps,
                                    segment: e.segment,
                                    active: e.active,
                                    closed: e.closed,
                                    segmentDurationMs: e.segmentDurationMs,
                                    reportsDuration: e.reportsDuration,
                                    hostsChecklist: e.hostsChecklist,
                                    turnActive: e.turnActive,
                                    checklistSuperseded: e.checklistSuperseded,
                                    durationMs: null != l.finished_at ? l.finished_at - l.created_at : void 0,
                                    todos: l.todos,
                                    provisionalTodo: l.provisionalTodo,
                                }),
                            },
                            e.key,
                        );
                    case "publishNotice":
                        return (0, a.jsx)(
                            rU,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                children: (0, a.jsx)(r_, {
                                    groupStart: e.groupStart,
                                    content: null == l.publishNotice ? l.content : "",
                                    createdAt: l.created_at,
                                    accessories:
                                        null == l.publishNotice
                                            ? void 0
                                            : (0, a.jsx)(iX, { projectId: t, notice: l.publishNotice }),
                                }),
                            },
                            e.key,
                        );
                    case "interrupted":
                        return (0, a.jsx)(
                            rU,
                            {
                                role: "assistant",
                                children: (0, a.jsx)(iv, { projectId: t, interrupted: !0, steps: l.steps }),
                            },
                            e.key,
                        );
                    case "legacyTodos":
                        return (0, a.jsx)(
                            rU,
                            {
                                role: "assistant",
                                children: (0, a.jsx)(iv, {
                                    projectId: t,
                                    steps: [],
                                    active: !1,
                                    checklistSuperseded: e.checklistSuperseded,
                                    todos: l.todos,
                                    provisionalTodo: l.provisionalTodo,
                                }),
                            },
                            e.key,
                        );
                    case "closing": {
                        let i =
                                null != h
                                    ? "assistant" !== l.role || null == l.sourceSha
                                        ? null
                                        : {
                                              sha: l.sourceSha,
                                              authorName: "",
                                              authorEmail: "",
                                              authoredAt: new Date(l.created_at).toISOString(),
                                              subject: l.content,
                                          }
                                    : null,
                            r = null != i && null != h ? () => rF(i, h) : void 0,
                            s = l.restoreProposal;
                        return (0, a.jsx)(
                            rU,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                onContextMenu:
                                    null != r
                                        ? (e) => {
                                              (0, F.jA)(e, (e) => (0, a.jsx)(rD, { ...e, onRestoreVersion: r }));
                                          }
                                        : void 0,
                                children: (0, a.jsx)(r_, {
                                    groupStart: e.groupStart,
                                    buttons:
                                        null != r
                                            ? (0, a.jsx)(rj, {
                                                  groupStart: e.groupStart,
                                                  renderMenu: (e) =>
                                                      (0, a.jsx)(rD, { onClose: e, onSelect: e, onRestoreVersion: r }),
                                              })
                                            : void 0,
                                    content: e.content,
                                    createdAt: l.created_at,
                                    replyTo: (function (e, t) {
                                        if (null == t) return;
                                        let n = e.find((e) => e.id === t && "user" === e.role);
                                        if (null != n)
                                            return {
                                                id: n.id,
                                                content: n.content,
                                                ...(null != n.user_id ? { userId: n.user_id } : {}),
                                                createdAt: n.created_at,
                                            };
                                    })(n, l.in_reply_to),
                                    onJumpToReplied: null != l.in_reply_to ? () => j(l.in_reply_to) : void 0,
                                    accessories: (0, a.jsx)(iy, {
                                        projectId: t,
                                        steps: l.steps,
                                        content: "",
                                        proposal: l.proposal,
                                        planVersion: I.get(l.render_id),
                                        interrupted: !0 === l.interrupted,
                                        hoistedProse: !0,
                                        hoistedAttachmentsHost: e.attachmentsHost,
                                        sideReply: e.sideReply,
                                        sideReplyAcknowledges: l.acknowledges,
                                        active: e.active,
                                        ideas: e.active ? void 0 : l.ideas,
                                        pickedIdeaIds:
                                            null == l.ideas
                                                ? void 0
                                                : (function (e, t, n) {
                                                      let l = new Set();
                                                      for (let a = e.indexOf(t) + 1; a > 0 && a < e.length; a++) {
                                                          let t = e[a];
                                                          if ("user" === t.role)
                                                              for (let e of n)
                                                                  e.implementation_prompt.trim() === t.content.trim() &&
                                                                      l.add(e.id);
                                                      }
                                                      return l;
                                                  })(n, l, l.ideas),
                                        attachments: l.attachments,
                                        secretRequest: e.active ? void 0 : l.secretRequest,
                                        secretRequestId: l.render_id,
                                        secretRequestAwaiting: l === A ? T : void 0,
                                        secretRequestStatus: M.get(l.render_id),
                                        settingsRequest: e.active || l.id === f ? void 0 : l.settingsRequest,
                                        publishCta: e.active ? null : l.publishCta,
                                        onPickIdea: o,
                                        onApprovePlan: l.render_id === E ? m : void 0,
                                        restoreProposal: s,
                                        onRestoreProposal:
                                            null != s && null != h && l === A
                                                ? () =>
                                                      rF(
                                                          {
                                                              sha: s.sha,
                                                              authorName: "",
                                                              authorEmail: "",
                                                              authoredAt: s.authored_at,
                                                              subject: s.subject,
                                                          },
                                                          h,
                                                      )
                                                : void 0,
                                    }),
                                }),
                            },
                            e.key,
                        );
                    }
                }
            }),
            null != T
                ? (0, a.jsx)(rU, {
                      role: "assistant",
                      continuation: !0,
                      children: (0, a.jsx)(r_, {
                          groupStart: !1,
                          content: "",
                          accessories: (0, a.jsx)(y.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: ed.intl.string(eu.default.YR8A2v),
                          }),
                      }),
                  })
                : null,
            (0, a.jsx)("li", {
                role: "none",
                className: rO.q3,
                children: (0, a.jsx)(i0, { reminder: N, renderReminder: S }),
            }),
        ],
    });
}
function rU(e) {
    let { role: t, children: n, anchorId: l, highlighted: i = !1, continuation: r = !1, onContextMenu: o } = e;
    return (0, a.jsx)("li", {
        onContextMenu: o,
        "data-role": t,
        "data-conjure-message": l,
        className: s()(rO.xk, { [rO.Qo]: i, [rO.q3]: r }),
        children: n,
    });
}
let rG = [eu.default["AX+5lk"], eu.default.VAU6A7, eu.default["1emysd"], eu.default.EXHX3L, eu.default.ChslmX];
function rq(e) {
    return rG.some((t) => ed.intl.string(t) === e);
}
function r$(e) {
    switch (e) {
        case "connecting":
            return ed.intl.string(eu.default["ECl+Dx"]);
        case "closed":
            return ed.intl.string(eu.default.mQZSp1);
        case "failed":
            return ed.intl.string(eu.default.xzJSZ6);
    }
}
var rB = n(823376),
    rH = n(187447);
function rV(e) {
    let { activity: t, id: n } = e,
        { text: l, revealing: r } = rf(t?.text ?? "", { streaming: null != t && "end" !== t.phase }),
        o = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [l]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: rH.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(n5.Ch, {
                ref: o,
                className: rH.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: s()(ix.PT, rH.bb),
                    "data-conjure-revealing": r ? "true" : void 0,
                    children: ap.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var rW = n(53659);
function rK(e) {
    let {
            activity: t,
            compacting: n = !1,
            restoring: l = !1,
            recalling: r = !1,
            controlling: o = !1,
            spoken: u,
            onSpokenChange: d,
        } = e,
        c = i.useRef(null),
        m = i.useId(),
        [f, h] = i.useState(null),
        p = (function (e) {
            let { activity: t, compacting: n = !1, restoring: l = !1, recalling: a = !1, controlling: i = !1 } = e,
                r = null != t && "end" !== t.phase;
            return i
                ? eu.default["1jqaAc"]
                : l
                  ? eu.default.M4KI5F
                  : a
                    ? rG[0]
                    : n
                      ? eu.default.xnCAaP
                      : r
                        ? eu.default.izrt52
                        : eu.default.L9EDub;
        })({ activity: t, compacting: n, restoring: l, recalling: r, controlling: o }),
        g = ed.intl.string(p),
        x = p === rG["0"],
        [b, v] = i.useState(u ?? g),
        y = i.useRef(g);
    (i.useEffect(() => {
        y.current = g;
    }, [g]),
        i.useEffect(() => {
            d?.(b);
        }, [b, d]));
    let w = i.useRef(null),
        k = i.useRef(b);
    i.useEffect(() => {
        k.current = b;
    }, [b]);
    let C = i.useRef(x),
        A = i.useRef(0);
    (i.useEffect(() => {
        ((C.current = x), !x && rq(k.current) && v(y.current));
    }, [x]),
        i.useEffect(() => {
            let e = 0,
                t = 0;
            function n() {
                if (C.current) {
                    var e;
                    ((A.current = rq(k.current) ? A.current + 1 : 0),
                        v(((e = A.current), ed.intl.string(rG[e % rG.length]))));
                } else y.current !== k.current ? v(y.current) : w.current?.play();
            }
            function l() {
                (window.clearTimeout(e), window.clearInterval(t), (e = 0), (t = 0));
            }
            function a() {
                (l(),
                    (e = window.setTimeout(() => {
                        (n(), (t = window.setInterval(n, 2400)));
                    }, 1800)));
            }
            function i() {
                (w.current?.stop(), a());
            }
            return (
                ("u" < typeof document || document.hasFocus()) && a(),
                window.addEventListener("focus", i),
                window.addEventListener("blur", l),
                () => {
                    (l(), window.removeEventListener("focus", i), window.removeEventListener("blur", l));
                }
            );
        }, []));
    let N = null != t && "" !== t.text,
        S = t?.session ?? null,
        E = N && null != S && f === S,
        I = i.useCallback(() => {
            N && null != S && h((e) => (e === S ? null : S));
        }, [N, S]),
        T = i.useCallback(() => h(null), []);
    return (0, a.jsx)(ee.Y, {
        targetElementRef: c,
        position: "top",
        align: "left",
        shouldShow: E,
        onRequestClose: T,
        renderPopout: () => (0, a.jsx)(rV, { id: m, activity: t }),
        children: () =>
            (0, a.jsxs)(j.D, {
                innerRef: c,
                className: s()(rW.hF, N && rW.Xd),
                "aria-label": ed.intl.string(l ? eu.default.qqlUiW : x ? rG["0"] : eu.default["Uuj/gh"]),
                "aria-expanded": E,
                "aria-describedby": E ? m : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": ed.intl.string(p),
                onClick: I,
                children: [
                    (0, a.jsx)("span", {
                        className: rW.bl,
                        children: (0, a.jsx)(rB.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: rW.xu,
                        "aria-hidden": !!o || !!x || void 0,
                        children: (0, a.jsx)(ez.o, {
                            ref: w,
                            text: b,
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            duration: 1e3,
                            delay: null,
                            className: rW.yE,
                        }),
                    }),
                ],
            }),
    });
}
let rX = { second: 1e3, minute: 6e4 };
function rY(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let n;
            if (null == e) return;
            let a = rX[t];
            return (
                !(function t() {
                    let i = Date.now();
                    (l(i), (n = setTimeout(t, a - ((((i - e) % a) + a) % a))));
                })(),
                () => clearTimeout(n)
            );
        }, [e, t]),
        null == e ? void 0 : Math.max(0, n - e)
    );
}
var rJ = n(719374);
function rQ(e) {
    let { startedAt: t } = e,
        n = rY(t);
    return (0, a.jsx)(y.E, {
        tag: "span",
        variant: "text-xs/medium",
        color: "text-muted",
        "aria-hidden": !0,
        className: rJ.$,
        "data-conjure-turn-timer": !0,
        children: (0, ag.C7)(n),
    });
}
function rZ(e) {
    let { startedAt: t } = e,
        n = rY(t, "minute");
    return (0, a.jsx)(k.A, { role: "timer", children: (0, ag.Us)(n) });
}
var r0 = n(436804);
function r2(e) {
    return e.toLocaleString();
}
function r1(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: r0.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: r0.mf,
                children: [
                    (0, a.jsx)(y.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(y.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [r2((0, Z.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(y.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    r2(n.input_tokens),
                    " in \xb7 ",
                    r2(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${r2(n.cache_creation_input_tokens)} cache write \xb7 ${r2(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function r6(e) {
    let { project: t } = e,
        n = (0, Z.wU)(t.compaction),
        l = (0, Z.wU)(t.classifier),
        i = (0, Z.wV)(t.orchestrator, t.codegen),
        r = (0, Z.wV)(i, n);
    return (0, a.jsxs)("div", {
        className: r0.si,
        role: "dialog",
        "aria-label": ed.intl.string(eu.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: r0.Q$,
                children: (0, a.jsxs)("div", {
                    className: r0.mf,
                    children: [
                        (0, a.jsxs)(y.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [r2((0, Z.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(y.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(r1, { label: ed.intl.string(eu.default["9Sj3SX"]), usage: i }),
            (0, a.jsx)(r1, { label: ed.intl.string(eu.default.ANCEo3), usage: n }),
            (0, a.jsx)(r1, { label: ed.intl.string(eu.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsxs)("div", {
                className: r0.mf,
                children: [
                    (0, a.jsx)(y.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: ed.intl.string(eu.default["8OUg09"]),
                    }),
                    (0, a.jsx)(y.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, Z.sj)(r) ? "\u2014" : `${Math.round(100 * (0, Z.CA)(r))}%`,
                    }),
                ],
            }),
        ],
    });
}
function r9(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(ee.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(r6, { project: t }),
        children: (e) =>
            (0, a.jsx)(j.D, {
                innerRef: n,
                className: r0.Y$,
                "aria-label": ed.intl.string(eu.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(aT.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var r3 = n(997421);
function r5(e) {
    let t,
        {
            projectId: n,
            thinking: l,
            turnStartedAt: r,
            restoring: s = !1,
            recalling: o = !1,
            thinkingActivity: u,
            compacting: d,
            projectUsage: c,
            connState: m,
        } = e,
        f = (0, ty.Zv)(n),
        [h, p] = i.useState(null),
        g = i.useCallback((e) => p(rq(e) ? null : e), []),
        x =
            null == c
                ? null
                : ((t = (0, Z.a7)(c.cost_usd)),
                  {
                      text: ed.intl.formatToPlainString(eu.default.gMuw5d, { runes: t.toLocaleString() }),
                      aria: ed.intl.formatToPlainString(eu.default.Z4LvGa, { runes: t, turns: c.turns }),
                  }),
        b = l && null != r;
    return (0, a.jsxs)("div", {
        className: r3.jf,
        children: [
            (0, a.jsxs)("div", {
                className: r3.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    l || s || o || f
                        ? (0, a.jsx)(rK, {
                              activity: u,
                              compacting: d,
                              restoring: s,
                              recalling: o,
                              controlling: f,
                              spoken: h,
                              onSpokenChange: g,
                          })
                        : null,
                    b ? (0, a.jsx)(rQ, { startedAt: r }) : null,
                ],
            }),
            b ? (0, a.jsx)(rZ, { startedAt: r }) : null,
            null == c || null == x
                ? null
                : (0, a.jsxs)("span", {
                      className: r3.BP,
                      children: [
                          (0, a.jsx)(y.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": x.aria,
                              children: x.text,
                          }),
                          (0, a.jsx)(r9, { project: c }),
                      ],
                  }),
            "open" === m
                ? null
                : (0, a.jsx)(y.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === m ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": ed.intl.formatToPlainString(eu.default["tCo+ZM"], { status: r$(m) }),
                      "data-conjure-conn": !0,
                      "data-state": m,
                      className: r3.XF,
                      children: r$(m),
                  }),
        ],
    });
}
var r4 = n(698638),
    r7 = n(608711);
let r8 = [ed.intl.string(eu.default["9w+Chc"]), ed.intl.string(eu.default.WAvmdq), ed.intl.string(eu.default.SKsrzl)];
function se(e) {
    var t;
    let { projectId: l, restoreState: r, onRestoreVersion: s } = e,
        o = (0, c.bG)([tW.Ay], () => tW.Ay.getMessages(l), [l]),
        u = (0, c.bG)([ea.Ay], () => ea.Ay.getConnState(l), [l]),
        d = (0, c.bG)([ea.Ay], () => ea.Ay.isChatStopped(l), [l]),
        m = (0, c.bG)([tW.Ay], () => tW.Ay.getProjectUsage(l), [l]),
        f = (0, c.bG)([tW.Ay], () => tW.Ay.getThinkingActivity(l), [l]),
        h = (0, c.bG)([tW.Ay], () => tW.Ay.isCompacting(l), [l]),
        p = (0, c.bG)([ea.Ay], () => ea.Ay.getModelSettings(l), [l]),
        g = i.useRef(null),
        x = i.useRef(null),
        b = i.useRef(null),
        v = i.useRef(!0),
        [j, w] = i.useState(!0);
    i.useEffect(() => {
        v.current && x.current?.scrollToBottom();
    }, [o]);
    let k = i.useCallback(() => {
            let e = g.current;
            if (null == e) return;
            let t = e.querySelector('[data-conjure-turn-status="true"][data-live="true"]'),
                n = e.querySelectorAll('[data-conjure-turn-status="true"]'),
                l = t ?? n[n.length - 1];
            if (null == l) return;
            let a = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
            l.scrollIntoView({ block: "center", behavior: a ? "auto" : "smooth" });
        }, []),
        C = i.useCallback(() => {
            let e = x.current;
            if (null == e) return;
            let t = e.getDistanceFromBottom();
            v.current = t < 32;
            let n = t > 1;
            w((e) => (!n === e ? e : !n));
        }, []);
    (i.useLayoutEffect(() => {
        let e = g.current,
            t = b.current;
        if (null == e) return;
        let n = x.current?.getScrollerNode(),
            l = e.getBoundingClientRect().width,
            a = t?.getBoundingClientRect().height,
            i = n?.getBoundingClientRect().height,
            r = null;
        function s() {
            v.current &&
                (null != r && cancelAnimationFrame(r), (r = requestAnimationFrame(() => x.current?.scrollToBottom())));
        }
        let o = new ResizeObserver((t) => {
            for (let r of t)
                if (r.target === e) {
                    let e = r.contentRect.width;
                    if (e === l) continue;
                    ((l = e), s());
                } else if (r.target === n) {
                    let e = r.contentRect.height;
                    if (e === i) continue;
                    ((i = e), s());
                } else {
                    let e = r.contentRect.height;
                    if (e === a) continue;
                    ((a = e), s());
                }
        });
        return (
            o.observe(e),
            null != n && o.observe(n),
            null != t && o.observe(t),
            () => {
                (o.disconnect(), null != r && cancelAnimationFrame(r));
            }
        );
    }, []),
        i.useEffect(() => {
            (0, ea.Hc)(l);
        }, [l]),
        (0, eS.E1)(l),
        i.useEffect(
            () => () =>
                (function (e) {
                    if ((0, n_.jb)(e)) return;
                    let t = (0, n_.hl)(e);
                    t < n_.qu ||
                        (0, n_.Xi)(e) ||
                        l8.A.possiblyShowFeedbackModal(ae.MW.VIBEGRATIONS, () => {
                            ((0, n_.AH)(e),
                                (0, ek.openModalLazy)(async () => {
                                    let { default: l } = await Promise.all([
                                        n.e("312513"),
                                        n.e("218413"),
                                        n.e("137381"),
                                        n.e("847004"),
                                        n.e("78366"),
                                    ]).then(n.bind(n, 700269));
                                    return (n) => (0, a.jsx)(l, { ...n, projectId: e, promptCount: t });
                                }));
                        });
                })(l),
            [l],
        ));
    let N = ta(l),
        S = i.useCallback(
            (e, t) => {
                (0, ea.dv)(l, e, t);
            },
            [l],
        ),
        E = i.useCallback(
            (e, t) => {
                0 === N.annotations.length
                    ? S(e, t)
                    : (S(
                          (function (e) {
                              let { annotations: t, metaComment: n, context: l } = e,
                                  a = t.filter((e) => eQ(e.comment)),
                                  i = [];
                              if (
                                  (i.push(
                                      `My design feedback: ${1 === a.length ? "1 comment" : `${a.length} comments`} on the app.`,
                                  ),
                                  null != l)
                              ) {
                                  let e = l.title.trim(),
                                      t = "" !== e ? `${e} (${l.url})` : l.url;
                                  (i.push(`Page: ${t}, viewport ${l.viewport.width}x${l.viewport.height}.`),
                                      i.push(
                                          "Element coordinates below are viewport coordinates in that frame. The refs come from one snapshot taken when this feedback was collected, so re-snapshot before acting on them.",
                                      ));
                              }
                              a.forEach((e, t) => {
                                  let n;
                                  (i.push(""),
                                      i.push(`${t + 1}. ${e2(e.target)}`),
                                      i.push(
                                          `   Feedback: ${(n = e.comment.trim()).length <= 1e3 ? n : `${n.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let r = n.trim();
                              return ("" !== r && (i.push(""), i.push(`Note for the whole batch: ${r}`)), i.join("\n"));
                          })({ annotations: N.annotations, metaComment: e, context: N.context }),
                          t,
                      ),
                      te(l));
            },
            [N, S, l],
        ),
        I = i.useCallback(() => (0, ea.fu)(l), [l]),
        T = i.useCallback((e) => lX(l, e.implementation_prompt), [l]),
        [P, M] = (function (e) {
            let [t, n] = i.useState(() => af(e)),
                [l, a] = i.useState(e),
                r = l !== e,
                s = r ? af(e) : t;
            return (r && (a(e), n(s)), [s, n]);
        })(l),
        _ = i.useCallback(() => S(ed.intl.string(eu.default["t5CN3+"])), [S]),
        R = i.useCallback((e, t, n) => lX(l, e, { clarificationAnswers: t, attachments: n }), [l]),
        L = i.useCallback((e) => (0, ea.XZ)(l, e), [l]),
        D = i.useCallback((e) => (0, ea.vX)(l, e), [l]),
        O = i.useCallback((e) => iM(l, "chat", Array.from(e), D), [l, D]),
        F = i.useCallback(() => lX(l, ed.intl.string(eu.default.Zc7gML)), [l]),
        z = r?.status === "restoring",
        U = "open" === u && !d && !z,
        G = o[o.length - 1],
        q = null != G && "assistant" === G.role && null != G.proposal,
        [$, B] = i.useState(null),
        H = G?.clarification != null && G.clarification.id !== $ ? G.clarification : null,
        V = i.useCallback(() => {
            null != H && B(H.id);
        }, [H]),
        W = (0, c.bG)([ea.Ay], () => ea.Ay.getSettings(l), [l]),
        [K, X] = i.useState(null),
        Y =
            null != G &&
            "assistant" === G.role &&
            null != G.settingsRequest &&
            (0, tW.BL)(G) &&
            G.id !== K &&
            ((t = G.settingsRequest),
            null != W &&
                (t.keys ?? []).some((e) => {
                    let t = W.schema.find((t) => t.key === e);
                    if (null == t) return !1;
                    if ("secret" === t.type) return W.secrets.find((t) => t.name === e)?.set !== !0;
                    let n = W.values[e];
                    return null == n || "" === n;
                }))
                ? G
                : null,
        J = Y?.settingsRequest ?? null,
        Q = i.useCallback(() => {
            null != Y && X(Y.id);
        }, [Y]),
        Z = null != J,
        ee = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: (0, c.bG)([tW.Ay], () => tW.Ay.hasLoadedHistory(l), [l]),
            historyUnavailable: (0, c.bG)([tW.Ay], () => tW.Ay.isHistoryUnavailable(l), [l]),
            connState: u,
        }),
        et = "loading" === ee && 0 === o.length,
        en = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < l.length; t++) e = (31 * e + l.charCodeAt(t)) % 0x7fffffff;
            return r8[e % r8.length];
        }, [l]),
        el = q ? ed.intl.string(eu.default.Zc7gML) : "greeting" === ee && 0 === o.length ? en : null,
        ei = i.useMemo(() => {
            for (let e = o.length - 1; e >= 0; e--) {
                let t = o[e];
                if ("assistant" === t.role && !(0, tW.BL)(t)) return t;
            }
        }, [o]),
        er = null != ei,
        es =
            null != ei
                ? (function (e) {
                      let t = e.turn_id ?? e.steps.find((e) => null != e.turn_id)?.turn_id;
                      if (null != t && /^\d+$/.test(t)) {
                          let e = aa.default.extractTimestamp(t);
                          if (Number.isFinite(e) && e > 0) return e;
                      }
                      return e.created_at;
                  })(ei)
                : void 0,
        eo = q && U ? F : void 0,
        ec = i.useCallback(() => lX(l, ed.intl.string(eu.default.EMgIuY)), [l]),
        [em, ef] = i.useState(null),
        [eh, ep] = i.useState(er);
    (eh !== er && (ep(er), er || ef(null)),
        i.useEffect(() => {
            if (!er) return;
            let e = x.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? ef(null)
                        : ef(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (n.observe(t), () => n.disconnect());
        }, [er, ei?.steps]));
    let eg = i.useMemo(() => (null != ei ? (0, le.b)(ei.steps) : ""), [ei]),
        ex = i.useMemo(() => (null != ei ? ((0, n7.lt)(ei.steps) ?? ei.todos) : void 0), [ei]),
        eb = ei?.provisionalTodo,
        ev = null != ei && n8(ei),
        ey = i.useMemo(() => {
            var e;
            return null != ei ? ((e = ei.steps), ib((0, n7.GO)(e, { turnActive: !0 }).tasks)) : void 0;
        }, [ei]);
    return (0, a.jsxs)("section", {
        ref: g,
        "data-conjure-chat": !0,
        className: r7.TE,
        children: [
            U
                ? (0, a.jsx)(n4.A, {
                      title: ed.intl.string(eu.default.gy7byi),
                      description: ed.intl.string(eu.default["dkv/WO"]),
                      icons: r4.ir,
                      onDrop: O,
                  })
                : null,
            (0, a.jsx)(lv, {
                onJumpToActivity: k,
                line: eg,
                placement: er && "top" === em ? "top" : null,
                todos: ex,
                todosLive: ev,
                provisionalTodo: eb,
                agents: ey,
            }),
            (0, a.jsxs)("div", {
                className: r7.JX,
                children: [
                    (0, a.jsx)(n5.Ch, {
                        ref: x,
                        onScroll: C,
                        scrollbarGutter: et ? "both-edges" : "stable",
                        className: [r7.N$, j ? null : r7.hB, Z ? r7.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(rz, {
                            ref: b,
                            projectId: l,
                            messages: o,
                            emptyState: ee,
                            floatingSettingsMessageId: Y?.id,
                            onPickIdea: U ? T : void 0,
                            onAskForIdeas: U ? _ : void 0,
                            draftHasText: P,
                            onApprovePlan: U ? ec : void 0,
                            onRestoreVersion: z || er ? void 0 : s,
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: r7.NJ,
                        children: (0, a.jsx)(r5, {
                            projectId: l,
                            thinking: er,
                            turnStartedAt: es,
                            restoring: z,
                            recalling: et,
                            thinkingActivity: f,
                            compacting: h,
                            projectUsage: m,
                            connState: u,
                        }),
                    }),
                    null == H
                        ? null
                        : (0, a.jsx)("div", {
                              className: Z ? `${r7.B5} ${r7.J9}` : r7.B5,
                              children: (0, a.jsx)(
                                  l7,
                                  { projectId: l, clarification: H, onSubmit: U ? R : void 0, onDismiss: V },
                                  H.id,
                              ),
                          }),
                    null == J
                        ? null
                        : (0, a.jsx)("div", {
                              className: r7.B5,
                              children: (0, a.jsx)(al, { projectId: l, request: J, onDismiss: Q }, Y?.id),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: r7.Jx,
                children: [
                    (0, a.jsx)(lv, {
                        onJumpToActivity: k,
                        line: eg,
                        placement: er && "bottom" === em ? "bottom" : null,
                        todos: ex,
                        todosLive: ev,
                        provisionalTodo: eb,
                        agents: ey,
                    }),
                    0 === N.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: r7.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, a.jsx)(y.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: ed.intl.formatToPlainString(eu.default["7b49dS"], {
                                          count: N.annotations.length,
                                      }),
                                  }),
                                  (0, a.jsx)(y.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: ed.intl.string(eu.default["5zG+CR"]),
                                  }),
                                  (0, a.jsx)(A.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: ed.intl.string(eu.default["/zOv9+"]),
                                      onClick: () => te(l),
                                  }),
                              ],
                          }),
                    (0, a.jsx)(iz, {
                        projectId: l,
                        canSend: U,
                        stopped: d,
                        running: er,
                        restoring: z,
                        onSend: E,
                        hasPendingContext: N.annotations.length > 0,
                        onInterrupt: U ? I : void 0,
                        onUploadFile: D,
                        onApprove: eo,
                        suggestion: el,
                        questionOpen: null != H || null != J,
                        modelSettings: p,
                        onModelSettingsChange: L,
                        onDraftHasTextChange: M,
                    }),
                ],
            }),
        ],
    });
}
var st = n(624479),
    sn = n(761508),
    sl = n(540999);
let sa = [],
    si = new Map(),
    sr = new Map(),
    ss = new Map(),
    so = new Map(),
    su = new Map(),
    sd = new Map(),
    sc = new Map();
class sm extends c.Ay.Store {
    getStatus(e) {
        return si.get(e) ?? null;
    }
    getFetchState(e) {
        return sr.get(e) ?? "idle";
    }
    getLastCompaction(e) {
        return so.get(e) ?? null;
    }
    getLastTurnUsage(e) {
        return sd.get(e) ?? null;
    }
    getLastCompactionDecline(e) {
        return su.get(e) ?? null;
    }
    getModelCalls(e) {
        return sc.get(e) ?? sa;
    }
    getForceCompactionState(e) {
        return ss.get(e) ?? "idle";
    }
}
let sf = new sm(nI.h, {
    LOGOUT: function () {
        if (
            0 === si.size &&
            0 === sr.size &&
            0 === ss.size &&
            0 === so.size &&
            0 === su.size &&
            0 === sd.size &&
            0 === sc.size
        )
            return !1;
        (si.clear(), sr.clear(), ss.clear(), so.clear(), su.clear(), sd.clear(), sc.clear());
    },
    CONJURE_DEBUG_STATUS_REQUESTED: function (e) {
        let { projectId: t } = e;
        sr.set(t, "loading");
    },
    CONJURE_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if ("open" === n) return !1;
        let l = "pending" === ss.get(t);
        l &&
            ss.set(t, {
                outcome: "failed",
                reason: "Connection lost before the worker answered",
                observedAt: new Date().toISOString(),
            });
        let a = "loading" === sr.get(t);
        if ((a && sr.set(t, "failed"), !l && !a)) return !1;
    },
    CONJURE_DEBUG_STATUS_SET: function (e) {
        let { projectId: t, status: n, failed: l } = e;
        l || null == n ? sr.set(t, "failed") : (si.set(t, n), sr.set(t, "loaded"));
    },
    CONJURE_DEBUG_COMPACTION_REPORT: function (e) {
        so.set(e.projectId, {
            tokensBefore: e.tokensBefore,
            tokensAfter: e.tokensAfter,
            retainedMessages: e.retainedMessages,
            promptCeiling: e.promptCeiling,
            observedAt: e.observedAt,
        });
    },
    CONJURE_DEBUG_COMPACTION_DECLINED: function (e) {
        su.set(e.projectId, {
            promptCeiling: e.promptCeiling,
            threshold: e.threshold,
            projected: e.projected,
            headroom: e.headroom,
            retainedMessages: e.retainedMessages,
            observedAt: e.observedAt,
        });
    },
    CONJURE_DEBUG_FORCE_COMPACTION_REQUESTED: function (e) {
        let { projectId: t } = e;
        ss.set(t, "pending");
    },
    CONJURE_DEBUG_FORCE_COMPACTION_RESULT: function (e) {
        ss.set(e.projectId, {
            outcome: e.outcome,
            reason: e.reason,
            ...(!0 === e.pendingTurn ? { pendingTurn: !0 } : {}),
            observedAt: e.observedAt,
        });
    },
    CONJURE_DEBUG_MODEL_CALL: function (e) {
        let t = sc.get(e.projectId);
        if (null != t && t.some((t) => t.id === e.id)) return !1;
        let n = {
                id: e.id,
                role: e.role,
                model: e.model,
                stopReason: e.stopReason,
                durationMs: e.durationMs,
                inputTokens: e.inputTokens,
                outputTokens: e.outputTokens,
                cacheReadTokens: e.cacheReadTokens,
                cacheWriteTokens: e.cacheWriteTokens,
                taskId: e.taskId,
                observedAt: e.observedAt,
            },
            l = null == t ? [n] : t.concat(n);
        sc.set(e.projectId, l.length > 200 ? l.slice(-200) : l);
    },
    CONJURE_CHAT_USAGE_SET: function (e) {
        let { projectId: t, turn: n } = e;
        if (0 === (0, Z.aM)(n.total)) return !1;
        sd.set(t, n);
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        (si.delete(t), sr.delete(t), ss.delete(t), so.delete(t), su.delete(t), sd.delete(t), sc.delete(t));
    },
});
function sh(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function sp(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function sg(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function sx(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = String(t.getHours()).padStart(2, "0"),
        l = String(t.getMinutes()).padStart(2, "0"),
        a = String(t.getSeconds()).padStart(2, "0");
    return `${n}:${l}:${a}`;
}
function sb(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function sv(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function sy(e) {
    return ed.intl.string("preview" === e ? eu.default["2yLYlG"] : eu.default.eiAi57);
}
let sj = ["all", "preview", "stable", "web"],
    sw = new Set(["error", "aborted", "length"]);
function sk(e) {
    switch (e.reason) {
        case "local":
            return ed.intl.string(eu.default.mUeKML);
        case "unconfigured":
            return ed.intl.string(eu.default.bGefb5);
        case "unauthorized":
            return ed.intl.string(eu.default.KLx6Bb);
        default:
            return null != e.detail
                ? ed.intl.formatToPlainString(eu.default.t09Q6q, { detail: e.detail })
                : ed.intl.string(eu.default["t+tG59"]);
    }
}
function sC(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : ed.intl.formatToPlainString(eu.default["XO/bN4"], {
              p50: sh(e.memory_p50_bytes ?? 0),
              p999: sh(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let sA = {
    db: () => eu.default["7l+DFG"],
    db_preview: () => eu.default.FAuffi,
    runtime: () => eu.default["Gkl+ab"],
    runtime_preview: () => eu.default.ynpJzv,
    bot: () => eu.default["5/i0cj"],
    bot_preview: () => eu.default.m2jsnw,
};
var sN = n(911608),
    sS = n(177427);
function sE(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: sS.KE,
        children: [
            (0, a.jsx)("div", {
                className: sS.IQ,
                children:
                    "loading" === n
                        ? (0, a.jsx)(C.y, { type: C.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, a.jsx)(y.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: ed.intl.string(eu.default.ZVByPX),
                            })
                          : null != t
                            ? (0, a.jsx)(y.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: ed.intl.formatToPlainString(eu.default.INVO50, { time: sb(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(A.$, { variant: "secondary", size: "sm", text: ed.intl.string(eu.default.oKEgiu), onClick: l }),
        ],
    });
}
function sI(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: sS.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(y.E, { variant: "text-xs/semibold", color: "text-muted", className: sS.Gf, children: t }),
            n,
        ],
    });
}
function sT(e) {
    let { label: t, value: n, hint: l, critical: i = !1 } = e;
    return (0, a.jsxs)("div", {
        className: sS.N8,
        children: [
            (0, a.jsxs)("div", {
                className: sS.x7,
                children: [
                    (0, a.jsx)(y.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(y.E, {
                        variant: "text-sm/medium",
                        color: i ? "text-feedback-critical" : "text-default",
                        children: n,
                    }),
                ],
            }),
            null != l && (0, a.jsx)(y.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
        ],
    });
}
function sP(e) {
    let { label: t, used: n, max: l, formatValue: i } = e,
        r = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = r >= 0.9;
    return (0, a.jsxs)("div", {
        className: sS.N8,
        children: [
            (0, a.jsxs)("div", {
                className: sS.x7,
                children: [
                    (0, a.jsx)(y.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(y.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${i(n)} / ${i(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(sN.z, {
                value: 100 * r,
                valueLabel: `${i(n)} of ${i(l)}`,
                "aria-label": t,
                className: s ? sS.dh : void 0,
            }),
        ],
    });
}
function sM(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(sT, {
            label: ed.intl.string(eu.default.SXP7pD),
            value: ed.intl.string(eu.default.E5hKVi),
            hint: sk(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(sT, {
            label: ed.intl.string(eu.default.SXP7pD),
            value: "\u2014",
            hint: ed.intl.string(eu.default.AGvoMJ),
        });
    let l = sC(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(sT, { label: ed.intl.string(eu.default["H/X+FI"]), value: sp(n.cpu_ms) }),
            null != l && (0, a.jsx)(sT, { label: ed.intl.string(eu.default.lmFmMO), value: l }),
        ],
    });
}
function s_(e) {
    let { analytics: t } = e,
        n = ed.intl.string(eu.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(sI, {
            title: n,
            children: (0, a.jsx)(y.E, { variant: "text-sm/normal", color: "text-muted", children: sk(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? sA[t] : null) ? ed.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(sI, {
        title: n,
        children:
            0 === l.length
                ? (0, a.jsx)(y.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: ed.intl.string(eu.default.AGvoMJ),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, a.jsx)(
                          sT,
                          {
                              label: n,
                              value: ed.intl.formatToPlainString(eu.default["w/2voO"], { cpu: sp(t.cpu_ms) }),
                              hint: sC(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var sR = n(400154);
let sL = [];
function sD(e) {
    let t,
        { call: n } = e,
        { text: l, bad: i } =
            ((t = null != n.stopReason && sw.has(n.stopReason)),
            {
                text: [
                    null != n.durationMs ? sp(n.durationMs) : null,
                    `${sg(n.inputTokens + n.cacheReadTokens + n.cacheWriteTokens)} \u{2192} ${sg(n.outputTokens)}`,
                    t ? n.stopReason : null,
                ]
                    .filter((e) => null != e)
                    .join(" \xb7 "),
                bad: t,
            });
    return (0, a.jsxs)("div", {
        className: sR.p5,
        children: [
            (0, a.jsx)(y.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: sR.Q5,
                children: sx(n.observedAt),
            }),
            (0, a.jsxs)(y.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-default",
                className: sR.qN,
                children: [n.role, " \xb7 ", n.model],
            }),
            (0, a.jsx)(y.E, {
                tag: "span",
                variant: "text-xs/medium",
                color: i ? "text-feedback-critical" : "text-muted",
                children: l,
            }),
        ],
    });
}
function sO(e, t) {
    return (0, a.jsx)(sT, {
        label: e,
        value: ed.intl.formatToPlainString(eu.default.yHJxuP, { count: sg((0, Z.aM)(t)) }),
        hint: `${sg(t.input_tokens)} in \xb7 ${sg(t.output_tokens)} out \xb7 ${sg(t.cache_read_input_tokens)} cache read`,
    });
}
function sF(e) {
    let { projectId: t, status: n, fetchState: l, onRefresh: r, traceVisible: s = !1 } = e,
        o = (0, c.bG)([sf], () => sf.getLastTurnUsage(t), [t]),
        u = (0, c.bG)([sf], () => sf.getLastCompaction(t), [t]),
        d = (0, c.bG)([sf], () => sf.getLastCompactionDecline(t), [t]),
        m = (0, c.bG)([sf], () => sf.getForceCompactionState(t), [t]),
        f = i.useCallback(() => (0, ea.Lj)(t), [t]),
        h = i.useCallback(() => (0, ea.Lj)(t, !0), [t]),
        p = (0, c.bG)([sf], () => (s ? sL : sf.getModelCalls(t)), [t, s]),
        g = n?.agent?.lifetime ?? null,
        x = n?.agent?.limits ?? null,
        b = n?.agent?.session ?? null,
        v = u?.promptCeiling ?? x?.context_window_tokens ?? null;
    return (0, a.jsxs)("div", {
        className: sR.Mf,
        children: [
            (0, a.jsx)(sE, { generatedAt: n?.generated_at ?? null, fetchState: l, onRefresh: r }),
            (0, a.jsx)(sI, {
                title: ed.intl.string(eu.default.JghNal),
                children:
                    null == g
                        ? (0, a.jsx)(y.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: ed.intl.string(eu.default.s0U5Fv),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(sT, {
                                      label: ed.intl.string(eu.default["9nqym2"]),
                                      value: sg((0, Z.a7)(g.cost_usd)),
                                      hint: ed.intl.formatToPlainString(eu.default.NCdUIh, { count: sg(g.turns) }),
                                  }),
                                  sO(ed.intl.string(eu.default.xtxP0e), g.orchestrator),
                                  sO(ed.intl.string(eu.default["9Sj3SX"]), g.codegen),
                                  sO(ed.intl.string(eu.default.ANCEo3), (0, Z.wU)(g.compaction)),
                                  n?.agent?.outcomes != null &&
                                      Object.keys(n.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(sT, {
                                          label: ed.intl.string(eu.default.SQHm7C),
                                          value: Object.entries(n.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${sg(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(sI, {
                title: ed.intl.string(eu.default.dZHPE5),
                children:
                    null == o
                        ? (0, a.jsx)(y.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: ed.intl.string(eu.default.DfVjal),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  sO(ed.intl.string(eu.default["7X3i9d"]), o.total),
                                  (0, a.jsx)(sT, {
                                      label: ed.intl.string(eu.default["8OUg09"]),
                                      value: `${Math.round((o.cache_hit_rate ?? (0, Z.CA)(o.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(sI, {
                title: ed.intl.string(eu.default.NbRk9a),
                children: [
                    null != u && null != v
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(sP, {
                                      label: ed.intl.string(eu.default.Kw5wiQ),
                                      used: u.tokensAfter,
                                      max: v,
                                      formatValue: sg,
                                  }),
                                  (0, a.jsx)(sT, {
                                      label: ed.intl.string(eu.default.mRbSns),
                                      value: `${sg(u.tokensBefore)} \u{2192} ${sg(u.tokensAfter)}`,
                                      hint: ed.intl.formatToPlainString(eu.default.Vq3skS, {
                                          count: sg(u.retainedMessages),
                                          time: sb(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(y.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != v
                                      ? ed.intl.formatToPlainString(eu.default.GMLCNv, { ceiling: sg(v) })
                                      : ed.intl.string(eu.default.s0U5Fv),
                          }),
                    null != d &&
                        (0, a.jsx)(sT, {
                            label: ed.intl.string(eu.default["4BX5KK"]),
                            value: `${sg(d.projected)} / ${sg(d.threshold)}`,
                            critical: !0,
                            hint: ed.intl.formatToPlainString(eu.default["6ngCax"], { time: sb(d.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: sR.Lj,
                        children: [
                            (0, a.jsx)(A.$, {
                                variant: "secondary",
                                size: "sm",
                                text: ed.intl.string(eu.default["1EiJeb"]),
                                disabled: "pending" === m,
                                onClick: f,
                            }),
                            (0, a.jsx)(y.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof m && "compacted" !== m.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return ed.intl.string(eu.default.wox6Ev);
                                    if ("pending" === e) return ed.intl.string(eu.default.OcPHQ1);
                                    let t = sb(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return ed.intl.formatToPlainString(eu.default.BhRjZZ, { time: t });
                                    let n =
                                        "declined" === e.outcome
                                            ? eu.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? eu.default.YZb4hK
                                              : eu.default.ZoUSVK;
                                    return ed.intl.formatToPlainString(n, {
                                        reason: e.reason ?? "no reason given",
                                        time: t,
                                    });
                                })(m),
                            }),
                            "object" == typeof m &&
                                !0 === m.pendingTurn &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(A.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: ed.intl.string(eu.default.ZxG2AI),
                                            onClick: h,
                                        }),
                                        (0, a.jsx)(y.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: ed.intl.string(eu.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            !s &&
                (0, a.jsx)(sI, {
                    title: ed.intl.string(eu.default.TkTRdW),
                    children:
                        0 === p.length
                            ? (0, a.jsx)(y.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: ed.intl.string(eu.default["r3/FhI"]),
                              })
                            : (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      p
                                          .slice(-30)
                                          .reverse()
                                          .map((e) => (0, a.jsx)(sD, { call: e }, e.id)),
                                      p.length > 30 &&
                                          (0, a.jsx)(y.E, {
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              children: ed.intl.formatToPlainString(eu.default["uZ9P/O"], {
                                                  shown: 30,
                                                  total: p.length,
                                              }),
                                          }),
                                  ],
                              }),
                }),
            (null != b || n?.analytics != null) &&
                (0, a.jsxs)(sI, {
                    title: ed.intl.string(eu.default.EsSzCS),
                    children: [
                        null != b &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(sT, {
                                        label: ed.intl.string(eu.default.CLXHAs),
                                        value: sb(b.instance_since),
                                        hint: ed.intl.string(eu.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(sT, {
                                        label: ed.intl.string(eu.default["8V8e1Z"]),
                                        value: sg(b.sockets),
                                    }),
                                    (0, a.jsx)(sT, {
                                        label: ed.intl.string(eu.default["4pBzYW"]),
                                        value: b.turn_inflight
                                            ? ed.intl.string(eu.default.Wv025I)
                                            : ed.intl.string(eu.default["7/lsFY"]),
                                    }),
                                    b.queued_messages > 0 &&
                                        (0, a.jsx)(sT, {
                                            label: ed.intl.string(eu.default["3oUYnv"]),
                                            value: sg(b.queued_messages),
                                        }),
                                ],
                            }),
                        n?.analytics != null && (0, a.jsx)(sM, { analytics: n.analytics }),
                    ],
                }),
            null != x &&
                (0, a.jsxs)(sI, {
                    title: ed.intl.string(eu.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(sT, {
                            label: ed.intl.string(eu.default.IlDBN3),
                            value: sg(x.max_subagent_iterations),
                        }),
                        (0, a.jsx)(sT, {
                            label: ed.intl.string(eu.default["ZdzKR+"]),
                            value: ed.intl.formatToPlainString(eu.default.yHJxuP, {
                                count: sg(x.context_window_tokens),
                            }),
                        }),
                        (0, a.jsx)(sT, {
                            label: ed.intl.string(eu.default.cIhN2W),
                            value: ed.intl.formatToPlainString(eu.default.yHJxuP, {
                                count: sg(x.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(sT, {
                            label: ed.intl.string(eu.default["+fOn/q"]),
                            value: sg(x.max_user_message_chars),
                        }),
                        (0, a.jsx)(sT, { label: ed.intl.string(eu.default.kIHga0), value: sg(x.max_build_attempts) }),
                        (0, a.jsx)(sT, { label: ed.intl.string(eu.default.Iw03yW), value: sg(x.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var sz = n(237528),
    sU = n(683438),
    sG = n(531893);
function sq(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: sG.ut,
              children: (0, a.jsx)(y.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: ed.intl.string(eu.default.h1SE6R),
              }),
          });
}
function s$(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: sG.qf,
              children: [
                  (0, a.jsx)(y.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: ed.intl.string(eu.default.h1SE6R),
                  }),
                  (0, a.jsx)(y.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: ed.intl.string(eu.default["8SErdg"]),
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: sG.qf,
              children: [
                  (0, a.jsx)(y.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(y.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function sB(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: sG.ps,
              children: (0, a.jsx)(y.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: ed.intl.string(eu.default.V7Ri8H),
              }),
          })
        : null;
}
var sH = n(109079);
let sV = i.memo(function (e) {
    var t;
    let { entry: n, showSource: l } = e,
        [r, s] = i.useState(!1),
        o = i.useId(),
        u = i.useMemo(
            () =>
                (function (e) {
                    let t;
                    if (e.length > 16e3) return null;
                    let n = e.indexOf("{"),
                        l = e.indexOf("["),
                        a = -1 === n ? l : -1 === l ? n : Math.min(n, l);
                    if (-1 === a) return null;
                    let i = e.slice(a).trim();
                    if (i.length < 2) return null;
                    try {
                        t = JSON.parse(i);
                    } catch {
                        return null;
                    }
                    if ("object" != typeof t || null == t) return null;
                    let r = e.slice(0, a).trim(),
                        s = JSON.stringify(t, null, 2);
                    return Array.isArray(t)
                        ? { prefix: r, pretty: s, marker: "[\u2026]", size: t.length }
                        : { prefix: r, pretty: s, marker: "{\u2026}", size: Object.keys(t).length };
                })(n.message),
            [n.message],
        ),
        d = "error" === n.level ? "text-feedback-critical" : "text-default";
    return (0, a.jsxs)("div", {
        className: sH.vK,
        children: [
            (0, a.jsx)(y.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: sH.Mt,
                selectable: !0,
                children: sx(n.ts),
            }),
            (0, a.jsx)(y.E, {
                tag: "span",
                variant: "text-xxs/semibold",
                color:
                    "error" === (t = n.level)
                        ? "text-feedback-critical"
                        : "warn" === t
                          ? "text-feedback-warning"
                          : "text-muted",
                className: sH.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: sH.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: sH.Cq, children: (0, a.jsx)(sz.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: sH.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(sz.v, {
                                text: ed.intl.string(eu.default.TrC9c8),
                                variant: "redLight",
                            }),
                        }),
                    null != u
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  "" !== u.prefix &&
                                      (0, a.jsxs)(y.E, {
                                          tag: "span",
                                          variant: "text-xs/normal",
                                          color: d,
                                          selectable: !0,
                                          children: [u.prefix, " "],
                                      }),
                                  (0, a.jsxs)(j.D, {
                                      className: sH.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": o,
                                      "aria-label": ed.intl.string(eu.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, a.jsx)(la.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, a.jsx)(tu._, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, a.jsxs)(y.E, {
                                              tag: "span",
                                              variant: "text-xs/medium",
                                              color: "none",
                                              children: [
                                                  u.marker,
                                                  " ",
                                                  ed.intl.formatToPlainString(
                                                      "[\u2026]" === u.marker
                                                          ? eu.default.kUhyUv
                                                          : eu.default["N+fphl"],
                                                      { count: u.size },
                                                  ),
                                              ],
                                          }),
                                      ],
                                  }),
                                  r &&
                                      (0, a.jsx)(y.E, {
                                          tag: "div",
                                          variant: "text-xs/normal",
                                          color: d,
                                          className: sH.dF,
                                          selectable: !0,
                                          id: o,
                                          children: u.pretty,
                                      }),
                              ],
                          })
                        : (0, a.jsx)(y.E, {
                              tag: "span",
                              variant: "text-xs/normal",
                              color: d,
                              selectable: !0,
                              children: n.message,
                          }),
                ],
            }),
        ],
    });
});
function sW(e) {
    let { projectId: t } = e,
        n = (0, c.bG)([eM.Ay], () => eM.Ay.getLogs(t), [t]),
        l = (0, c.bG)([eM.Ay], () => eM.Ay.getHistoryState(t, "logs")),
        [r, s] = i.useState("all"),
        [o, u] = i.useState(""),
        d = i.useMemo(() => {
            let e = o.trim().toLowerCase();
            return n.filter((t) => {
                var n, l;
                return (
                    "string" == typeof (n = t.log).message &&
                    "string" == typeof n.level &&
                    "string" == typeof n.ts &&
                    ("all" === r ||
                        ("preview" === (l = t.log.source) || "stable" === l || "web" === l ? l : "other") === r) &&
                    ("" === e ||
                        t.log.message.toLowerCase().includes(e) ||
                        t.log.level.includes(e) ||
                        (t.log.source?.toLowerCase().includes(e) ?? !1))
                );
            });
        }, [n, r, o]),
        m = i.useRef(null),
        f = i.useRef(!0);
    i.useEffect(() => {
        f.current && m.current?.scrollToBottom();
    }, [d]);
    let h = i.useCallback(() => {
            let e = m.current;
            null != e && (f.current = 32 > e.getDistanceFromBottom());
        }, []),
        p = i.useMemo(
            () =>
                sj.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return sy(e);
                            case "web":
                                return ed.intl.string(eu.default.IVzfVV);
                            default:
                                return ed.intl.string(eu.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, a.jsxs)("div", {
        className: sH.$F,
        children: [
            (0, a.jsxs)("div", {
                className: sH.y4,
                children: [
                    (0, a.jsx)(tz.I, {
                        look: "pill",
                        "aria-label": ed.intl.string(eu.default.MhvyUU),
                        options: p,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: sH.KT,
                        children: (0, a.jsx)(sU.I, {
                            query: o,
                            onChange: u,
                            onClear: () => u(""),
                            size: "sm",
                            placeholder: ed.intl.string(eu.default["m2+37Y"]),
                            "aria-label": ed.intl.string(eu.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, a.jsx)(sq, { state: l }),
            (0, a.jsxs)(n5.Ch, {
                ref: m,
                onScroll: h,
                overflow: "auto",
                className: sH.sx,
                children: [
                    (0, a.jsx)(sB, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(s$, {
                              state: l,
                              emptyTitle: ed.intl.string(eu.default.S7qlPG),
                              emptyBody: ed.intl.string(eu.default.nD0S9z),
                          })
                        : 0 === d.length
                          ? (0, a.jsx)(y.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: ed.intl.string(eu.default["4SIdrX"]),
                            })
                          : d.map((e) => (0, a.jsx)(sV, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function sK(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(sI, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, a.jsx)(y.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: ed.intl.string(eu.default.umcjif),
                      }),
        })
    );
}
function sX(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(sT, {
                      label: ed.intl.formatToPlainString(eu.default["01ZMS4"], { env: sy(n) }),
                      value: ((t = l.connected), ed.intl.string(t ? eu.default.Wv025I : eu.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(sT, {
                      label: ed.intl.string(eu.default["z1dh+F"]),
                      value: sg(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${sb(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(sT, { label: ed.intl.string(eu.default.Iz5GnJ), value: sg(l.guild_count) }),
                  (0, a.jsx)(sT, {
                      label: ed.intl.string(eu.default["7UqtNv"]),
                      value: sg(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? ed.intl.formatToPlainString(eu.default.MasSly, {
                                    code: l.last_close_code,
                                    time: sb(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(sT, {
                          label: ed.intl.string(eu.default["x3+JXJ"]),
                          value: sg(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(sT, { label: sy(n), value: ed.intl.string(eu.default.lTHQss) });
}
function sY(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(sT, {
        label: sy(t),
        value: ed.intl.formatToPlainString(eu.default["Xq+wHT"], {
            requests: sg(n.requests),
            failures: sg(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? ed.intl.formatToPlainString(eu.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: sb(n.last_failure.at),
                  })
                : ed.intl.formatToPlainString(eu.default["7KlGT6"], { time: sb(n.since) }),
    });
}
function sJ(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(sT, {
                label: ed.intl.formatToPlainString(eu.default["92gVTm"], { env: sy(t) }),
                value: sg(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    sT,
                    {
                        label: ed.intl.formatToPlainString(eu.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? ed.intl.formatToPlainString(eu.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? ed.intl.formatToPlainString(eu.default.wxAWNv, { time: sb(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function sQ(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(sT, {
        label: sy(t),
        value: ed.intl.formatToPlainString(eu.default.suAOj9, { calls: sg(n.calls), errors: sg(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function sZ(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(sI, {
            title: t,
            children: (0, a.jsx)(y.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: ed.intl.string(eu.default["Noami/"]),
            }),
        });
    let i = n.cpu_ms_total / n.requests,
        r = n.cpu_ms_total > 0;
    return (0, a.jsxs)(sI, {
        title: t,
        children: [
            (0, a.jsx)(sT, {
                label: ed.intl.string(eu.default.xtD4Zp),
                value: sg(n.requests),
                hint: ed.intl.formatToPlainString(eu.default["7KlGT6"], { time: sb(n.since) }),
            }),
            (0, a.jsx)(sT, { label: ed.intl.string(eu.default.gfRhR3), value: sg(n.errors), critical: n.errors > 0 }),
            r
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(sP, {
                              label: ed.intl.string(eu.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: sp,
                          }),
                          (0, a.jsx)(sT, {
                              label: ed.intl.string(eu.default.mSKImM),
                              value: sp(i),
                              hint: ed.intl.formatToPlainString(eu.default.JqMU05, {
                                  total: sp(n.cpu_ms_total),
                                  wall: sp(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(sT, {
                      label: ed.intl.string(eu.default.LEJ5r3),
                      value: ed.intl.string(eu.default["2Ekb2b"]),
                      hint: ed.intl.string(eu.default.G0aq7i),
                  }),
            !r &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(sT, { label: ed.intl.string(eu.default.xvmL1D), value: sp(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(sT, {
                    label: ed.intl.string(eu.default["4sQYwH"]),
                    value: sg(n.exceeded_cpu),
                    critical: !0,
                }),
            (0, a.jsx)(sT, {
                label: ed.intl.string(eu.default.bQenOy),
                value: sg(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: ed.intl.formatToPlainString(eu.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(sT, { label: ed.intl.string(eu.default.xgpn4Y), value: sv(n.build) }),
        ],
    });
}
function s0(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        o = r
            ? [{ key: "shared", label: ed.intl.string(eu.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: ed.intl.string(eu.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: ed.intl.string(eu.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(sI, {
        title: ed.intl.string(eu.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(sT, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(sT, {
                                  label: ed.intl.formatToPlainString(eu.default.u7kJJ4, { env: n }),
                                  value: sh(l.r2_bytes),
                                  hint: ed.intl.formatToPlainString(
                                      l.r2_truncated ? eu.default.lH0oQw : eu.default.m9h02S,
                                      { count: sg(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(sP, {
                                      label: ed.intl.formatToPlainString(eu.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: sh,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function s2(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: sR.Mf,
        children: [
            (0, a.jsx)(sE, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(sZ, {
                            title: ed.intl.string(eu.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(sZ, {
                            title: ed.intl.string(eu.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(s0, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(sK, {
                                title: ed.intl.string(eu.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(sX, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(sK, {
                                title: ed.intl.string(eu.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(sY, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(sK, {
                                title: ed.intl.string(eu.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(sJ, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(sK, {
                                title: ed.intl.string(eu.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(sQ, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(s_, { analytics: t.analytics }),
                        (0, a.jsxs)(sI, {
                            title: ed.intl.string(eu.default.fQMpFp),
                            children: [
                                (0, a.jsx)(sT, {
                                    label: ed.intl.string(eu.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? sv(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(sT, {
                                    label: ed.intl.string(eu.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? sv(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var s1 = n(761929);
function s6(e, t) {
    return String(e).padStart(t, "0");
}
function s9(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        a = `${s6(l.getHours(), 2)}:${s6(l.getMinutes(), 2)}:${s6(l.getSeconds(), 2)}`;
    return "millis" === t ? `${a}.${s6(l.getMilliseconds(), 3)}` : a;
}
var s3 = n(382541);
let s5 = new Map(),
    s4 = new Map(),
    s7 = 0,
    s8 = 0;
async function oe(e, t, n) {
    let l = s7,
        a = s5.get(t);
    if (null != a) return { status: "loaded", rich: a };
    if (Date.now() < s8) return { status: "forbidden" };
    let i = s4.get(t);
    if (null != i) return i;
    let r = (async () => {
        try {
            let a,
                { ticket: i, baseUrl: r } = await (0, s3.d)(e),
                s = await fetch(
                    ((a = new URL(`${r}/agent/trace-detail`)).searchParams.set("ticket", i),
                    a.searchParams.set("id", t),
                    a.toString()),
                    { method: "GET", credentials: "omit" },
                );
            if (403 === s.status) return ((s8 = Date.now() + 6e4), { status: "forbidden" });
            if (!s.ok) return { status: "failed" };
            let o = await s.json();
            if (!0 !== o.available || null == o.rich) return { status: "unavailable" };
            if (l !== s7) return { status: "failed" };
            var n = o.rich;
            for (s5.set(t, n); s5.size > 100;) {
                let e = s5.keys().next();
                if (!0 === e.done) break;
                s5.delete(e.value);
            }
            return { status: "loaded", rich: o.rich };
        } catch {
            return { status: "failed" };
        }
    })();
    s4.set(t, r);
    let s = await r;
    return (s4.get(t) === r && s4.delete(t), n?.aborted === !0 ? { status: "failed" } : s);
}
function ot() {
    ((s7 += 1), s5.clear(), s4.clear(), (s8 = 0));
}
function on(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function ol(e) {
    if (e < 1e3) return String(e);
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function oa(e) {
    switch (e) {
        case "subagent":
            return ed.intl.string(eu.default.PbKt9r);
        case "context":
            return ed.intl.string(eu.default["tNk/P2"]);
        case "tool":
            return ed.intl.string(eu.default.NBOJcw);
        case "delegated":
            return ed.intl.string(eu.default.QgrFdt);
        default:
            return ed.intl.string(eu.default.LsLVUy);
    }
}
function oi(e) {
    return "model" === e.kind
        ? "compaction" === e.agent
            ? "context"
            : "subagent" === e.agent
              ? "subagent"
              : "model"
        : "subagent" === e.agent
          ? "delegated"
          : "tool";
}
let or = ["model", "tool", "subagent", "delegated", "context"];
function os(e, t) {
    let n = t.trim().toLowerCase();
    return "" === n
        ? e
        : e.filter((e) => {
              let t;
              return ((t =
                  "model" === e.kind
                      ? [e.model, e.agent, e.stopReason ?? "", e.error ?? ""]
                      : [e.tool, e.agent, e.summary ?? "", e.error ?? ""]).push(oi(e)),
              t.join(" ").toLowerCase()).includes(n);
          });
}
function oo(e, t) {
    return null == t ? null : (e.find((e) => e.id === t) ?? null);
}
let ou = {
    model: "blurpleLight",
    subagent: "greenLight",
    context: "grayLight",
    tool: "grayMedium",
    delegated: "orangeLight",
};
function od(e) {
    let { category: t } = e;
    return (0, a.jsx)(sz.v, { text: oa(t), variant: ou[t] });
}
var oc = n(28863);
let om = ["arguments", "result", "usage", "diagnostics"];
var of = n(536113);
let oh = { started: of.Vf, ok: of.mo, error: of.Sr };
function op(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", {
        className: `${of.Om} ${oh[t] ?? of.Vf}`,
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "started":
                    return ed.intl.string(eu.default["2wyRDK"]);
                case "error":
                    return ed.intl.string(eu.default["2Cu8n+"]);
                default:
                    return ed.intl.string(eu.default["6kgw6D"]);
            }
        })(t),
    });
}
function og(e) {
    let { label: t, value: n } = e;
    return (0, a.jsxs)("div", {
        className: of.wV,
        children: [
            (0, a.jsx)(y.E, { variant: "text-xs/medium", color: "text-muted", className: of.D6, children: t }),
            (0, a.jsx)("div", { className: of.zL, children: n }),
        ],
    });
}
function ox(e) {
    let { label: t, value: n } = e;
    return (0, a.jsx)(og, {
        label: t,
        value: (0, a.jsx)(y.E, { variant: "text-xs/normal", color: "text-default", selectable: !0, children: n }),
    });
}
function ob(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: of.WA, children: t });
}
function ov(e) {
    let { title: t, children: n } = e,
        l = i.useId();
    return (0, a.jsxs)("section", {
        "aria-labelledby": l,
        className: of.xd,
        children: [
            (0, a.jsx)(y.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                id: l,
                className: of.Hm,
                children: t,
            }),
            n,
        ],
    });
}
function oy(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("details", {
        className: of.XK,
        children: [
            (0, a.jsxs)("summary", {
                className: of.It,
                children: [
                    (0, a.jsx)(tu._, { className: of.k, size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    (0, a.jsx)(y.E, { variant: "text-xs/semibold", color: "none", children: t }),
                ],
            }),
            (0, a.jsx)("div", { className: of.bG, children: n }),
        ],
    });
}
function oj(e) {
    let { field: t } = e;
    if (null != t.value)
        return (0, a.jsx)(og, {
            label: t.key,
            value: (0, a.jsx)(y.E, {
                variant: "text-xs/normal",
                color: "text-default",
                selectable: !0,
                children: t.value,
            }),
        });
    let n =
        null != t.chars
            ? ed.intl.formatToPlainString(eu.default.ib7All, { count: t.chars })
            : null != t.items
              ? ed.intl.formatToPlainString(eu.default.cIqKbA, { count: t.items })
              : null;
    return (0, a.jsx)(og, {
        label: t.key,
        value: (0, a.jsxs)("div", {
            className: of.Kv,
            children: [
                (0, a.jsx)(y.E, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    children: (function (e) {
                        switch (e) {
                            case "prose":
                                return ed.intl.string(eu.default["6oDpz5"]);
                            case "content":
                                return ed.intl.string(eu.default.kSGhxQ);
                            default:
                                return ed.intl.string(eu.default.JwGtRz);
                        }
                    })(t.omitted ?? "content"),
                }),
                null == n
                    ? null
                    : (0, a.jsx)(y.E, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          tabularNumbers: !0,
                          children: n,
                      }),
            ],
        }),
    });
}
function ow(e) {
    let { entries: t } = e;
    return 0 === t.length
        ? null
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)("div", {
                      className: of.QR,
                      children: (0, a.jsx)(sz.v, { text: ed.intl.string(eu.default.LRIpHQ), variant: "orangeLight" }),
                  }),
                  t.map((e) =>
                      (0, a.jsx)(
                          og,
                          {
                              label: e.key,
                              value: (0, a.jsxs)("div", {
                                  className: of.TY,
                                  children: [
                                      null == e.value
                                          ? null
                                          : (0, a.jsx)(y.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                className: of.Px,
                                                selectable: !0,
                                                children: e.value,
                                            }),
                                      !0 !== e.scrubbed
                                          ? null
                                          : (0, a.jsx)(y.E, {
                                                variant: "text-xs/normal",
                                                color: "text-feedback-warning",
                                                children: ed.intl.string(eu.default["+kQ+K3"]),
                                            }),
                                      !0 !== e.truncated
                                          ? null
                                          : (0, a.jsx)(y.E, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children:
                                                    null == e.chars
                                                        ? ed.intl.string(eu.default.ijkkUh)
                                                        : ed.intl.formatToPlainString(eu.default.PRt8I0, {
                                                              count: e.chars,
                                                          }),
                                            }),
                                  ],
                              }),
                          },
                          e.key,
                      ),
                  ),
              ],
          });
}
function ok(e) {
    let { detail: t } = e,
        n =
            null == t || "loaded" === t.status || "forbidden" === t.status
                ? null
                : ed.intl.string(
                      "loading" === t.status
                          ? eu.default.SKbSyo
                          : "unavailable" === t.status
                            ? eu.default.tdq5Zn
                            : eu.default["Dw1JW/"],
                  );
    return null == n
        ? null
        : (0, a.jsx)(y.E, { variant: "text-xs/normal", color: "text-subtle", className: of.E7, children: n });
}
function oC(e) {
    let { projectId: t, entry: n, onClose: l, parent: r, onSelect: s, childCount: o } = e,
        u = (function (e) {
            let { childCount: t = 0, hasParent: n = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                l = new Set();
            if ("tool" === e.kind)
                (((null != e.fields && e.fields.length > 0) || null != e.detailId) && l.add("arguments"),
                    "started" !== e.status && l.add("result"));
            else
                (null != e.promptTokens ||
                    null != e.inputTokens ||
                    null != e.outputTokens ||
                    null != e.cacheReadTokens ||
                    null != e.costUsd ||
                    null != e.stopReason) &&
                    l.add("usage");
            return (
                (n || t > 0 || null != e.turnId || "" !== e.startedAt || "" !== e.id) && l.add("diagnostics"),
                om.filter((e) => l.has(e))
            );
        })(n, { childCount: o, hasParent: null != r }),
        d = (function (e, t) {
            let [n, l] = i.useState(null);
            if (
                (i.useEffect(() => {
                    if (null == t || null != s5.get(t)) return;
                    let n = new AbortController();
                    return (
                        oe(e, t, n.signal).then((e) => {
                            n.signal.aborted || l({ detailId: t, detail: e });
                        }),
                        () => n.abort()
                    );
                }, [e, t]),
                null == t)
            )
                return null;
            let a = s5.get(t);
            return null != a ? { status: "loaded", rich: a } : n?.detailId === t ? n.detail : { status: "loading" };
        })(t, "tool" === n.kind ? n.detailId : void 0),
        c = "model" === n.kind ? n.model : n.tool,
        m = s9(n.startedAt, "millis"),
        f = oi(n),
        h = i.useCallback(
            (e) => {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), l());
            },
            [l],
        );
    return (0, a.jsxs)(n5.Ch, {
        className: of._0,
        onKeyDown: h,
        role: "region",
        "aria-label": ed.intl.formatToPlainString(eu.default.Qiaeyz, { name: c }),
        children: [
            (0, a.jsx)("div", {
                className: of.sy,
                children: (0, a.jsxs)("div", {
                    className: of.HI,
                    children: [
                        (0, a.jsx)(op, { status: n.status }),
                        (0, a.jsx)(od, { category: f }),
                        (0, a.jsx)(y.E, {
                            variant: "text-sm/semibold",
                            color: "text-strong",
                            className: of.kc,
                            children: c,
                        }),
                        (0, a.jsx)(y.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            tabularNumbers: !0,
                            className: of.l5,
                            children: null == n.durationMs ? ed.intl.string(eu.default["2wyRDK"]) : on(n.durationMs),
                        }),
                    ],
                }),
            }),
            null == n.error
                ? null
                : (0, a.jsx)(y.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: of.Um,
                      selectable: !0,
                      children: n.error,
                  }),
            u.includes("arguments") && "tool" === n.kind
                ? (0, a.jsxs)(ov, {
                      title: ed.intl.string(eu.default["G/4JST"]),
                      children: [
                          (n.fields ?? []).map((e) => (0, a.jsx)(oj, { field: e }, e.key)),
                          d?.status === "loaded" && null != d.rich.args
                              ? (0, a.jsx)(ow, { entries: d.rich.args })
                              : null,
                          (0, a.jsx)(ok, { detail: d }),
                      ],
                  })
                : null,
            u.includes("result") && "tool" === n.kind
                ? (0, a.jsxs)(ov, {
                      title: ed.intl.string(eu.default.Dgg25Y),
                      children: [
                          (0, a.jsx)(ox, {
                              label: ed.intl.string(eu.default["U+OQCo"]),
                              value: ed.intl.formatToPlainString(eu.default.ib7All, { count: n.resultChars ?? 0 }),
                          }),
                          null == n.resultAdded
                              ? null
                              : (0, a.jsx)(ox, {
                                    label: ed.intl.string(eu.default["MQYS+n"]),
                                    value: `+${n.resultAdded} \u{2212}${n.resultRemoved ?? 0}`,
                                }),
                          !0 !== n.resultTruncated
                              ? null
                              : (0, a.jsx)(og, {
                                    label: ed.intl.string(eu.default.t7GJFc),
                                    value: (0, a.jsx)(y.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        children: ed.intl.string(eu.default.ijkkUh),
                                    }),
                                }),
                          d?.status === "loaded" && null != d.rich.result
                              ? (0, a.jsx)(ow, { entries: d.rich.result })
                              : null,
                      ],
                  })
                : null,
            u.includes("usage") && "model" === n.kind
                ? (0, a.jsxs)(ov, {
                      title: ed.intl.string(eu.default.NXmRw1),
                      children: [
                          (0, a.jsxs)(ob, {
                              children: [
                                  null == n.promptTokens
                                      ? null
                                      : (0, a.jsx)(ox, {
                                            label: ed.intl.string(eu.default.iq3T1q),
                                            value: ed.intl.formatToPlainString(eu.default["6GQUgQ"], {
                                                tokens: ol(n.promptTokens),
                                            }),
                                        }),
                                  null == n.systemTokens
                                      ? null
                                      : (0, a.jsx)(ox, {
                                            label: ed.intl.string(eu.default.ZELAZn),
                                            value: ed.intl.formatToPlainString(eu.default.Te7mPn, {
                                                system: ol(n.systemTokens),
                                                tools: ol(n.toolsTokens ?? 0),
                                                toolCount: n.tools ?? 0,
                                                messages: ol(n.messagesTokens ?? 0),
                                                messageCount: n.messages ?? 0,
                                            }),
                                        }),
                                  null == n.inputTokens
                                      ? null
                                      : (0, a.jsx)(ox, {
                                            label: ed.intl.string(eu.default["LENc/T"]),
                                            value: String(n.inputTokens),
                                        }),
                                  null == n.outputTokens
                                      ? null
                                      : (0, a.jsx)(ox, {
                                            label: ed.intl.string(eu.default.ewRHwx),
                                            value: String(n.outputTokens),
                                        }),
                                  null == n.cacheReadTokens
                                      ? null
                                      : (0, a.jsx)(ox, {
                                            label: ed.intl.string(eu.default.heVFQD),
                                            value: ed.intl.formatToPlainString(eu.default.VO3gdd, {
                                                read: n.cacheReadTokens,
                                                write: n.cacheWriteTokens ?? 0,
                                            }),
                                        }),
                                  null == n.costUsd
                                      ? null
                                      : (0, a.jsx)(ox, {
                                            label: ed.intl.string(eu.default.aBw2Vm),
                                            value: `$${n.costUsd.toFixed(4)}`,
                                        }),
                              ],
                          }),
                          (0, a.jsx)(y.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              className: of.E7,
                              children: ed.intl.string(eu.default["foF/Bc"]),
                          }),
                      ],
                  })
                : null,
            u.includes("arguments") || u.includes("result")
                ? (0, a.jsx)(y.E, {
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: of.E7,
                      children: ed.intl.string(eu.default.o24IFK),
                  })
                : null,
            u.includes("diagnostics")
                ? (0, a.jsx)(oy, {
                      title: ed.intl.string(eu.default["dix/W4"]),
                      children: (0, a.jsxs)(ob, {
                          children: [
                              null == r
                                  ? null
                                  : (0, a.jsx)(og, {
                                        label: ed.intl.string(eu.default.soPsOJ),
                                        value: (0, a.jsx)(oc.Anchor, {
                                            onClick: () => s(r.id),
                                            children: (0, a.jsx)(y.E, {
                                                tag: "span",
                                                variant: "text-xs/normal",
                                                color: "none",
                                                children: "model" === r.kind ? r.model : r.tool,
                                            }),
                                        }),
                                    }),
                              0 === o
                                  ? null
                                  : (0, a.jsx)(ox, {
                                        label: ed.intl.string(eu.default.kNZBxr),
                                        value: ed.intl.formatToPlainString(eu.default["6LoCUh"], { count: o }),
                                    }),
                              null == n.turnId
                                  ? null
                                  : (0, a.jsx)(ox, { label: ed.intl.string(eu.default.bL1r5J), value: n.turnId }),
                              (0, a.jsx)(ox, { label: ed.intl.string(eu.default.Ndwr7X), value: n.id }),
                              null == m ? null : (0, a.jsx)(ox, { label: ed.intl.string(eu.default.sO8ghW), value: m }),
                              "model" !== n.kind || null == n.stopReason
                                  ? null
                                  : (0, a.jsx)(ox, { label: ed.intl.string(eu.default.VfYxPF), value: n.stopReason }),
                              "tool" !== n.kind || null == n.schema || 0 === n.schema.length
                                  ? null
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(y.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                className: of.Hm,
                                                children: ed.intl.string(eu.default.mSm8iy),
                                            }),
                                            n.schema.map((e) =>
                                                (0, a.jsx)(
                                                    ox,
                                                    {
                                                        label: e.name,
                                                        value: e.required
                                                            ? ed.intl.formatToPlainString(eu.default["6aSRPA"], {
                                                                  type: e.type,
                                                              })
                                                            : ed.intl.formatToPlainString(eu.default.q2B975, {
                                                                  type: e.type,
                                                              }),
                                                    },
                                                    e.name,
                                                ),
                                            ),
                                        ],
                                    }),
                          ],
                      }),
                  })
                : null,
            (0, a.jsx)(y.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: of.E7,
                children: ed.intl.string(eu.default.FloyTQ),
            }),
        ],
    });
}
let oA = { model: of.WI, subagent: of.uM, context: of.eH, tool: of.pw, delegated: of.C8 };
function oN(e) {
    let { entries: t } = e,
        n = i.useMemo(
            () =>
                (function (e) {
                    let t = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 },
                        n = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 };
                    for (let l of e) {
                        let e = oi(l);
                        ((t[e] += l.durationMs ?? 0), (n[e] += 1));
                    }
                    return or.map((e) => ({ category: e, ms: t[e], calls: n[e] }));
                })(t),
            [t],
        ),
        l = n.reduce((e, t) => e + t.ms, 0);
    return (0, a.jsxs)("div", {
        className: of.M0,
        children: [
            (0, a.jsx)("div", {
                className: of.pZ,
                "aria-hidden": !0,
                children:
                    0 === l
                        ? null
                        : n.map((e) => {
                              let { category: t, ms: n } = e;
                              return 0 === n
                                  ? null
                                  : (0, a.jsx)(
                                        "div",
                                        {
                                            className: `${of.dL} ${oA[t]}`,
                                            style: { "--custom-conjure-trace-segment-weight": String(n) },
                                        },
                                        t,
                                    );
                          }),
            }),
            (0, a.jsx)("div", {
                className: of.z4,
                role: "group",
                "aria-label": ed.intl.string(eu.default["Gioq+C"]),
                children: or.map((e) => {
                    let t = n.find((t) => t.category === e),
                        i = t?.ms ?? 0,
                        r = t?.calls ?? 0,
                        s = 0 === l ? 0 : Math.round((i / l) * 100);
                    return (0, a.jsxs)(
                        "div",
                        {
                            className: of.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${of.A9} ${oA[e]}`, "aria-hidden": !0 }),
                                (0, a.jsx)(y.E, { variant: "text-xs/normal", color: "text-muted", children: oa(e) }),
                                (0, a.jsx)(y.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: ed.intl.formatToPlainString(eu.default["3dQ1ly"], { percent: s }),
                                }),
                                (0, a.jsx)(y.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: ed.intl.formatToPlainString(eu.default.Ow0k34, { count: r }),
                                }),
                                0 === i
                                    ? null
                                    : (0, a.jsx)(y.E, {
                                          variant: "text-xs/normal",
                                          color: "text-subtle",
                                          tabularNumbers: !0,
                                          children: on(i),
                                      }),
                            ],
                        },
                        e,
                    );
                }),
            }),
        ],
    });
}
function oS(e) {
    let { entry: t, selected: n, tabbable: l, onSelect: i, onKeyDown: r, nested: s } = e,
        o = oi(t),
        u = "model" === t.kind ? t.model : t.tool,
        d =
            "model" === t.kind && null != t.promptTokens
                ? ed.intl.formatToPlainString(eu.default["6GQUgQ"], { tokens: ol(t.promptTokens) })
                : null != t.durationMs
                  ? on(t.durationMs)
                  : null;
    return (0, a.jsxs)(j.D, {
        tag: "div",
        role: "option",
        "aria-selected": n,
        tabIndex: l ? 0 : -1,
        id: `trace-${t.id}`,
        className: `${of.nM} ${s ? of.A5 : ""} ${"error" === t.status ? of.Cr : ""} ${n ? of.CZ : ""}`,
        onKeyDown: r,
        onClick: () => i(t.id),
        children: [
            (0, a.jsxs)("div", {
                className: of.sU,
                children: [
                    (0, a.jsx)(op, { status: t.status }),
                    (0, a.jsx)(od, { category: o }),
                    (0, a.jsx)(y.E, {
                        variant: "text-xs/semibold",
                        color: "text-default",
                        className: of.G9,
                        children: u,
                    }),
                    null == d
                        ? null
                        : (0, a.jsx)(y.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              tabularNumbers: !0,
                              className: of.j2,
                              children: d,
                          }),
                ],
            }),
            "tool" === t.kind && null != t.summary
                ? (0, a.jsx)(y.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: of.Ne,
                      children: t.summary,
                  })
                : null,
            null == t.error
                ? null
                : (0, a.jsx)(y.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: of.Xu,
                      children: t.error,
                  }),
        ],
    });
}
function oE(e) {
    var t;
    let { projectId: n, query: l } = e,
        r = (0, c.yK)([eM.Ay], () => eM.Ay.getTrace(n), [n]),
        s = (0, c.bG)([eM.Ay], () => eM.Ay.getHistoryState(n, "trace"));
    i.useEffect(() => ot, [n]);
    let [o, u] = i.useState(null),
        [d, m] = i.useState(40),
        [f, h] = i.useState(!1),
        p = i.useRef(null),
        g = i.useRef(null),
        x = i.useRef(null),
        b = i.useRef(null),
        v = i.useId(),
        j = i.useCallback((e) => {
            null != e && document.getElementById(`trace-${e}`)?.focus();
        }, []),
        w = i.useCallback((e) => u((t) => (t === e ? null : e)), []),
        k = i.useCallback((e) => {
            let t = p.current?.offsetHeight ?? 0;
            return 0 === t ? 40 : (0, ai.clamp)((e / t) * 100, 25, 75);
        }, []),
        C = i.useCallback((e) => {
            let t = p.current?.offsetHeight ?? 0;
            return 0 === t ? e : (0, ai.clamp)(e, (25 * t) / 100, (75 * t) / 100);
        }, []),
        A = (0, s1.A)({
            resizableDomNodeRef: g,
            orientation: s1.R.VERTICAL_TOP,
            getClampedValue: C,
            onElementResize: (e) => m(k(e)),
            onElementResizeStart: () => h(!0),
            onElementResizeEnd: () => h(!1),
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        N = i.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), A(e));
            },
            [A],
        ),
        S = i.useCallback((e) => {
            let t =
                "ArrowUp" === e.key
                    ? 5
                    : "ArrowDown" === e.key
                      ? -5
                      : "Home" === e.key
                        ? 75
                        : "End" === e.key
                          ? -75
                          : null;
            null != t && (e.preventDefault(), m((e) => (0, ai.clamp)(e + t, 25, 75)));
        }, []),
        E = i.useCallback(() => {
            (u(null), j(o));
        }, [o, j]),
        I = i.useMemo(() => os(r, l), [r, l]),
        T = i.useMemo(
            () =>
                (function (e) {
                    let t = [],
                        n = null;
                    for (let l of e) {
                        let e = l.turnId ?? null;
                        ((null == n || n.turnId !== e) &&
                            ((n = { turnId: e, entries: [] }),
                            t.push({ turnId: e, entries: n.entries, startedAt: l.startedAt, spanMs: null })),
                            n.entries.push(l));
                    }
                    return t.map((e) => ({
                        ...e,
                        spanMs: (function (e) {
                            let t = 1 / 0,
                                n = -1 / 0;
                            for (let l of e) {
                                let e = Date.parse(l.startedAt);
                                Number.isNaN(e) ||
                                    ((t = Math.min(t, e)), null != l.durationMs && (n = Math.max(n, e + l.durationMs)));
                            }
                            return Number.isFinite(t) && Number.isFinite(n) ? Math.max(0, n - t) : null;
                        })(e.entries),
                    }));
                })(r)
                    .map((e, t) => ({ ...e, index: t, entries: os(e.entries, l) }))
                    .filter((e) => e.entries.length > 0),
            [r, l],
        ),
        P = oo(I, o),
        M = P?.kind === "tool" ? oo(r, P.parentId ?? null) : null,
        _ = null == P ? 0 : ((t = P.id), r.filter((e) => "tool" === e.kind && e.parentId === t)).length,
        R = I[I.length - 1];
    i.useLayoutEffect(() => {
        if (null != o) return;
        let e = x.current?.getScrollerNode();
        null != e && (e.scrollTop = e.scrollHeight);
    }, [R, o]);
    let L = i.useCallback(
        (e) => {
            if (0 === I.length) return;
            let t = I.findIndex((e) => e.id === o);
            function n(t) {
                e.preventDefault();
                let n = Math.max(0, Math.min(I.length - 1, t));
                (u(I[n].id), document.getElementById(`trace-${I[n].id}`)?.scrollIntoView({ block: "nearest" }));
            }
            "ArrowDown" === e.key
                ? n(t + 1)
                : "ArrowUp" === e.key
                  ? n(-1 === t ? I.length - 1 : t - 1)
                  : "Home" === e.key
                    ? n(0)
                    : "End" === e.key
                      ? n(I.length - 1)
                      : "Escape" === e.key && null != o && (e.preventDefault(), u(null), j(o));
        },
        [I, o, j],
    );
    return 0 === r.length
        ? (0, a.jsx)("div", {
              className: of.uP,
              ref: p,
              children: (0, a.jsx)(s$, {
                  state: s,
                  emptyTitle: ed.intl.string(eu.default["Tpvy/s"]),
                  emptyBody: ed.intl.string(eu.default.J0WcVA),
              }),
          })
        : (0, a.jsxs)("div", {
              className: `${of.uP} ${f ? of.F4 : ""}`,
              ref: p,
              children: [
                  (0, a.jsxs)("div", {
                      className: of.DK,
                      children: [
                          (0, a.jsx)(oN, { entries: r }),
                          (0, a.jsx)(sq, { state: s }),
                          0 === I.length
                              ? (0, a.jsx)("div", {
                                    className: of.Ie,
                                    children: (0, a.jsx)(y.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children: ed.intl.string(eu.default.tDB4lC),
                                    }),
                                })
                              : (0, a.jsxs)(n5.Ch, {
                                    ref: x,
                                    className: of.Ns,
                                    children: [
                                        (0, a.jsx)(sB, { state: s }),
                                        (0, a.jsx)("div", {
                                            ref: b,
                                            id: v,
                                            role: "listbox",
                                            "aria-label": ed.intl.string(eu.default.SGbiNE),
                                            className: of.p_,
                                            children: T.map((e) => {
                                                let t = s9(e.startedAt),
                                                    n = ed.intl.formatToPlainString(eu.default.gPwGYA, {
                                                        number: e.index + 1,
                                                    });
                                                return (0, a.jsxs)(
                                                    "div",
                                                    {
                                                        role: "presentation",
                                                        children: [
                                                            (0, a.jsxs)("div", {
                                                                className: of.mf,
                                                                children: [
                                                                    (0, a.jsx)(y.E, {
                                                                        variant: "text-xs/semibold",
                                                                        color: "text-muted",
                                                                        children: n,
                                                                    }),
                                                                    (0, a.jsx)(y.E, {
                                                                        variant: "text-xs/normal",
                                                                        color: "text-subtle",
                                                                        tabularNumbers: !0,
                                                                        children: t ?? "",
                                                                    }),
                                                                    null == e.spanMs
                                                                        ? null
                                                                        : (0, a.jsx)(y.E, {
                                                                              variant: "text-xs/normal",
                                                                              color: "text-subtle",
                                                                              tabularNumbers: !0,
                                                                              children: on(e.spanMs),
                                                                          }),
                                                                ],
                                                            }),
                                                            (0, a.jsx)("div", {
                                                                role: "group",
                                                                "aria-label": n,
                                                                className: of.M5,
                                                                children: e.entries.map((e) =>
                                                                    (0, a.jsx)(
                                                                        oS,
                                                                        {
                                                                            entry: e,
                                                                            selected: e.id === o,
                                                                            tabbable: e.id === (o ?? I[0]?.id),
                                                                            onSelect: w,
                                                                            onKeyDown: L,
                                                                            nested:
                                                                                "tool" === e.kind && null != e.parentId,
                                                                        },
                                                                        e.id,
                                                                    ),
                                                                ),
                                                            }),
                                                        ],
                                                    },
                                                    e.turnId ?? `ungrouped-${e.index}`,
                                                );
                                            }),
                                        }),
                                    ],
                                }),
                      ],
                  }),
                  null == P
                      ? null
                      : (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)("div", {
                                    role: "separator",
                                    "aria-orientation": "horizontal",
                                    "aria-label": ed.intl.string(eu.default.DtSORy),
                                    "aria-valuenow": Math.round(d),
                                    "aria-valuemin": 25,
                                    "aria-valuemax": 75,
                                    tabIndex: 0,
                                    className: of.b1,
                                    onPointerDown: N,
                                    onKeyDown: S,
                                }),
                                (0, a.jsx)("div", {
                                    ref: g,
                                    className: of.Or,
                                    style: { "--custom-conjure-trace-detail-share": String(d) },
                                    children: (0, a.jsx)(oC, {
                                        projectId: n,
                                        entry: P,
                                        parent: M,
                                        childCount: _,
                                        onSelect: u,
                                        onClose: E,
                                    }),
                                }),
                            ],
                        }),
              ],
          });
}
function oI(e) {
    let { projectId: t, query: n, onQueryChange: l } = e,
        r = (0, c.yK)([eM.Ay], () => eM.Ay.getTrace(t), [t]),
        s = i.useRef(null),
        o = i.useCallback(() => {
            eo(
                new Blob(
                    [
                        JSON.stringify(
                            {
                                kind: "vibegrations.trace",
                                version: 1,
                                project_id: t,
                                exported_at: new Date().toISOString(),
                                note: 'Redacted developer trace. Tool arguments, results and prompts are reported as sizes and allowlisted technical values only; token counts marked "estimated" are a chars/4 heuristic measured before sending.',
                                entries: r,
                            },
                            null,
                            2,
                        ),
                    ],
                    { type: "application/json" },
                ),
                `vibegrations-trace-${t}.json`,
            ).catch((e) => {
                console.error("[vibegrations] trace export failed", t, e);
            });
        }, [r, t]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                className: of.ED,
                children: (0, a.jsx)(sU.I, {
                    query: n,
                    onChange: l,
                    onClear: () => l(""),
                    size: "sm",
                    placeholder: ed.intl.string(eu.default["EY8/Mt"]),
                    "aria-label": ed.intl.string(eu.default["EY8/Mt"]),
                }),
            }),
            (0, a.jsx)(ee.Y, {
                targetElementRef: s,
                position: "bottom",
                align: "right",
                animation: ee.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(et.W, {
                        "data-menu-migrated": !0,
                        navId: `conjure-trace-actions-${t}`,
                        "aria-label": ed.intl.string(ed.t.ogxXGq),
                        onClose: n,
                        onSelect: n,
                        children: (0, a.jsx)(en.rX, {
                            children: (0, a.jsx)(en.Dr, {
                                id: "export",
                                label: ed.intl.string(eu.default.WXrPRZ),
                                disabled: 0 === r.length,
                                action: o,
                            }),
                        }),
                    });
                },
                children: (e, t) => {
                    let { isShown: n } = t;
                    return (0, a.jsx)(t5.K, {
                        ...e,
                        buttonRef: s,
                        icon: t4.MoreHorizontalIcon,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": ed.intl.string(ed.t["UKOtz+"]),
                        "aria-haspopup": "menu",
                        "aria-expanded": n,
                    });
                },
            }),
        ],
    });
}
var oT = n(592465);
function oP(e) {
    let { projectId: t, onClose: n } = e,
        [l, r] = i.useState("logs"),
        [s, o] = i.useState(""),
        u = (0, c.bG)([sl.A], () => sl.A.isDeveloper),
        d = (0, c.bG)([sf], () => sf.getStatus(t), [t]),
        m = (0, c.bG)([sf], () => sf.getFetchState(t), [t]);
    i.useEffect(() => {
        (0, ea.R7)(t);
    }, [t]);
    let f = i.useCallback(() => (0, ea.R7)(t), [t]),
        h = i.useCallback(() => {
            (0, ne.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: sf.getStatus(t),
                        last_turn_usage: sf.getLastTurnUsage(t),
                        last_compaction: sf.getLastCompaction(t),
                        last_compaction_decline: sf.getLastCompactionDecline(t),
                        model_calls: sf.getModelCalls(t),
                        logs: eM.Ay.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, x.P)((0, b.o)(ed.intl.string(eu.default.wI6fhl), v.Ck.SUCCESS)),
            );
        }, [t]),
        p = ed.intl.string(eu.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: oT.nd,
        "aria-label": p,
        children: [
            (0, a.jsxs)(n3.Ay, {
                "aria-label": p,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(n3.Ay.Icon, {
                            icon: st.CopyIcon,
                            tooltip: ed.intl.string(eu.default.TkHqy2),
                            onClick: h,
                        }),
                        (0, a.jsx)(n3.Ay.Icon, { icon: L.P, tooltip: ed.intl.string(ed.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(n3.Ay.ChannelIcon, { icon: S.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(n3.Ay.Title, { children: p }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: oT.rf,
                children: [
                    (0, a.jsxs)(sn.V, {
                        selectedItem: l,
                        type: "top",
                        onItemSelect: (e) => r(e),
                        "aria-label": ed.intl.string(eu.default.RvvWIh),
                        className: oT.vR,
                        children: [
                            (0, a.jsx)(sn.V.Item, { id: "logs", children: ed.intl.string(eu.default["+VRYCm"]) }),
                            (0, a.jsx)(sn.V.Item, { id: "worker", children: ed.intl.string(eu.default["50D0FZ"]) }),
                            (0, a.jsx)(sn.V.Item, { id: "agent", children: ed.intl.string(eu.default.UkbTK1) }),
                            u
                                ? (0, a.jsx)(sn.V.Item, { id: "trace", children: ed.intl.string(eu.default.O6nNjP) })
                                : null,
                        ],
                    }),
                    "logs" === l
                        ? (0, a.jsx)(sW, { projectId: t })
                        : "worker" === l
                          ? (0, a.jsx)(s2, { status: d, fetchState: m, onRefresh: f })
                          : "trace" === l && u
                            ? (0, a.jsxs)("div", {
                                  className: oT.uP,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: oT.XH,
                                          children: (0, a.jsx)(oI, { projectId: t, query: s, onQueryChange: o }),
                                      }),
                                      (0, a.jsx)(oE, { projectId: t, query: s }),
                                  ],
                              })
                            : (0, a.jsx)(sF, { projectId: t, status: d, fetchState: m, onRefresh: f, traceVisible: u }),
                ],
            }),
        ],
    });
}
var oM = n(333007),
    o_ = n(365912),
    oR = n(775121),
    oL = n(873715);
function oD(e) {
    if (null == e || "string" != typeof e.ref || "string" != typeof e.tag) return null;
    let t = e.rect;
    if (
        null == t ||
        "number" != typeof t.x ||
        "number" != typeof t.y ||
        "number" != typeof t.width ||
        "number" != typeof t.height
    )
        return null;
    let n = {
        ref: e.ref,
        role: "string" == typeof e.role ? e.role : "",
        name: "string" == typeof e.name ? e.name : "",
        tag: e.tag,
        rect: { x: t.x, y: t.y, width: t.width, height: t.height },
    };
    return (
        "string" == typeof e.value && (n.value = e.value),
        "string" == typeof e.path && "" !== e.path && (n.path = e.path),
        "string" == typeof e.marker && (n.marker = e.marker),
        n
    );
}
n(884868);
let oO = Object.freeze({ x: -1, y: -1 });
function oF(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = oD(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var oz = n(470779);
function oU(e) {
    let {
            projectId: t,
            at: n,
            bounds: l,
            kind: r,
            value: o,
            onChange: u,
            onSubmit: d,
            onDismiss: c,
            canSubmit: m,
            closing: f,
            onUploadFile: h,
        } = e,
        {
            drafts: p,
            addFiles: g,
            pasteFiles: x,
            removeDraft: b,
            settled: v,
            takeRefs: y,
        } = i_({ projectId: t, surface: "design", onUploadFile: h }),
        j = i.useRef(null),
        k = (m || p.length > 0) && v && !f,
        C = i.useCallback(() => {
            if (!k) return;
            let e = y();
            d(e.length > 0 ? e : void 0);
        }, [k, y, d]),
        [A, N] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => N(!0));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, []);
    let S = i.useRef(null),
        [E, I] = i.useState(null);
    i.useLayoutEffect(() => {
        let e = S.current;
        if (null == e || "u" < typeof ResizeObserver) return;
        let t = new ResizeObserver(() => I({ height: e.offsetHeight }));
        return (t.observe(e), () => t.disconnect());
    }, []);
    let T = E?.height ?? 44,
        P = l.left + 8,
        M = l.top + 8,
        _ = Math.max(n.x, P),
        R = Math.min(Math.max(n.y + 32 + 4, M), Math.max(M, l.top + l.height - T - 8));
    return (0, a.jsxs)("div", {
        ref: S,
        className: s()(oz.M0, { [oz.ho]: A && !f, [oz.ET]: f }),
        style: { left: _, top: R },
        "data-testid": "conjure-design-compose-bar",
        children: [
            (0, a.jsx)("input", {
                ref: j,
                type: "file",
                multiple: !0,
                className: oz.Fg,
                tabIndex: -1,
                "aria-hidden": !0,
                onChange: (e) => {
                    (g(Array.from(e.target.files ?? [])), (e.target.value = ""));
                },
            }),
            (0, a.jsx)(w.m, {
                position: "bottom",
                text: ed.intl.string(eu.default.lgvqSB),
                ariaHidden: !0,
                children: (0, a.jsx)("button", {
                    type: "button",
                    className: oz.tY,
                    onClick: () => j.current?.click(),
                    "aria-label": ed.intl.string(eu.default.lgvqSB),
                    children: (0, a.jsx)(el.H, { size: "custom", color: "currentColor", className: oz.WW }),
                }),
            }),
            (0, a.jsx)(lw.y, {
                autoFocus: !0,
                rows: 1,
                className: oz.hF,
                value: o,
                placeholder: "" === r ? ed.intl.string(eu.default.MPPV1Q) : `Edit ${r}`,
                "aria-label": ed.intl.string(eu.default.KCYqWL),
                onChange: (e) => u(e.target.value),
                onPaste: f ? void 0 : x,
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), e.stopPropagation(), c());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), C());
                },
            }),
            p.length > 0
                ? (0, a.jsx)("div", {
                      className: oz.ZO,
                      children: p.map((e) => (0, a.jsx)(iR, { draft: e, onRemove: b }, e.localId)),
                  })
                : null,
        ],
    });
}
var oG = n(192888);
function oq(e, t) {
    return (0, oG.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(oF, () => ({ status: "failed" }));
}
var o$ = n(108308);
let oB = { x: 25, y: 21 };
function oH(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function oV(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function oW(e, t, n, l) {
    let a = oV(e, n, l);
    return { x: a.left + a.width * t.x, y: a.top + a.height * t.y };
}
function oK(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function oX(e) {
    let t = e.snapshot ?? e.results.find((e) => null != e.snapshot)?.snapshot;
    if (null == t || !Array.isArray(t.elements)) return null;
    let n = t.viewport?.width,
        l = t.viewport?.height;
    return "number" != typeof n || "number" != typeof l || n < 1
        ? null
        : {
              elements: t.elements,
              viewport: { width: n, height: l },
              url: "string" == typeof t.url ? t.url : "",
              title: "string" == typeof t.title ? t.title : "",
          };
}
function oY(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        o = null != n && n === l ? t : null,
        { active: u, annotations: d } = ta(o),
        m = (0, ty.Zv)(o),
        f = (0, ek.useHasAnyModalOpen)(),
        h = (0, c.bG)([tH.default], () => tH.default.getCurrentUser()),
        p = h?.id ?? null,
        [g, x] = i.useState(null),
        [b, v] = i.useState(null),
        [j, w] = i.useState(!1),
        [k, C] = i.useState(!1),
        [N, S] = i.useState(null),
        [E, I] = i.useState(!1),
        T = i.useRef(null),
        P = i.useRef(null),
        _ = i.useRef(null),
        [R, L] = i.useState(null),
        [D, O] = i.useState(!1),
        [F, z] = i.useState(null),
        [U, G] = i.useState(null),
        q = i.useRef(!1),
        [$, B] = i.useState(!1),
        [H, V] = i.useState(null),
        W = u && !m && !f;
    null == F || (W && F.projectId === o) || z(null);
    let K = F?.projectId ?? null;
    (i.useEffect(() => {
        if (null != K) return () => lW(K, "design");
    }, [K]),
        i.useEffect(() => {
            if (!W) return;
            function e() {
                let e = (function (e) {
                    if (null == e) return null;
                    let t = e.getBoundingClientRect();
                    return t.width < 1 || t.height < 1
                        ? null
                        : { left: t.left, top: t.top, width: t.width, height: t.height };
                })(r());
                x((t) => (oH(t, e) ? t : e));
            }
            e();
            let t = window.setInterval(e, 250);
            return (
                window.addEventListener("resize", e),
                () => {
                    (window.clearInterval(t), window.removeEventListener("resize", e));
                }
            );
        }, [W, r]),
        i.useEffect(() => {
            if (!W || null == o) return;
            let e = !0,
                t = r();
            if (null == t) return void C(!0);
            (w(!0), C(!1));
            let n = `design-feedback-${crypto.randomUUID()}`;
            return (
                (0, oL.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                    (t) => {
                        if (!e) return;
                        w(!1);
                        let n = "completed" === t.status ? oX(t.response) : null;
                        null == n ? C(!0) : (v(n), tt(o, { url: n.url, title: n.title, viewport: n.viewport }));
                    },
                    () => {
                        e && (w(!1), C(!0));
                    },
                ),
                () => {
                    e = !1;
                }
            );
        }, [W, r, o]));
    let X = i.useRef(null);
    (i.useEffect(() => {
        if (!W || null == g || null == o) return;
        if (null == b) {
            X.current = g;
            return;
        }
        if (oH(X.current, g)) return;
        let e = window.setTimeout(() => {
            let e = r();
            if (null == e) return;
            X.current = g;
            let t = [];
            for (let e = 0; e < d.length; e += 24) t.push(d.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, n) => {
                    let l = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, oL.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !Z.current) return;
                        let l = oX(e.response);
                        null != l && (v(l), tt(o, { url: l.url, title: l.title, viewport: l.viewport }));
                        let a = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let i = oD(e.element);
                            null != i && a.set(l.id, i);
                        }),
                            (n = e7(o)).active &&
                                0 !== a.size &&
                                e8(o, {
                                    ...n,
                                    annotations: n.annotations.map((e) => {
                                        let t = a.get(e.id);
                                        return null == t ? e : { ...e, target: t };
                                    }),
                                }));
                    });
                }));
        }, 200);
        return () => window.clearTimeout(e);
    }, [W, g, b, d, o, r]),
        i.useEffect(() => {
            if (!W)
                return () => {
                    (S(null), z(null), V(null), v(null));
                };
        }, [W]));
    let Y = i.useRef(null),
        J = i.useRef(null),
        Q = i.useRef(!1),
        Z = i.useRef(!1);
    i.useEffect(() => {
        ((Z.current = W), W || ((Y.current = null), (J.current = null), (_.current = null), I(!1)));
    }, [W]);
    let ee = i.useCallback(
            function e() {
                if (Q.current) return;
                let t = Y.current;
                if (null == t) return;
                Y.current = null;
                let n = r();
                null != n &&
                    ((Q.current = !0),
                    oq(n, t).then((t) => {
                        if (((Q.current = !1), Z.current)) {
                            if ("picked" !== t.status || o1(t.target, er.current.rect, er.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? S(null)
                                    : "unsupported" === t.status && O(!0);
                            else {
                                let e = eZ(t.target);
                                (L((t) => (o2(t, e) ? t : e)),
                                    S((e) => {
                                        var n;
                                        return ((n = t.target),
                                        null == e || null == n
                                            ? e === n
                                            : e.ref === n.ref &&
                                              e.rect.x === n.rect.x &&
                                              e.rect.y === n.rect.y &&
                                              e.rect.width === n.rect.width &&
                                              e.rect.height === n.rect.height)
                                            ? e
                                            : t.target;
                                    }));
                            }
                            e();
                        }
                    }));
            },
            [r],
        ),
        et = i.useCallback(() => {
            if (null == F) return;
            let e = !q.current;
            (G({ at: F.at, label: F.label, draft: F.draft, instant: e }), B(e), z(null));
        }, [F]);
    (i.useEffect(() => {
        if (!$) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => B(!1));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [$]),
        i.useEffect(() => {
            if (null == U) return;
            let e = setTimeout(() => G(null), oZ);
            return () => clearTimeout(e);
        }, [U]));
    let en = null == b || null == g || b.viewport.width < 1 ? 1 : g.width / b.viewport.width,
        el = null != b || k,
        ei = i.useMemo(() => b?.elements ?? [], [b]),
        er = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        er.current = { rect: g, scale: en };
    }, [g, en]);
    let es = i.useCallback(
            (e, t, n) => {
                null != o &&
                    (lW(o, "design"),
                    V(null),
                    (q.current = !1),
                    z({ projectId: o, target: e, anchor: t, draft: "", at: n, label: eZ(e) }));
            },
            [o],
        ),
        eo = i.useCallback((e, t) => ({ x: (e.clientX - t.left) / en, y: (e.clientY - t.top) / en }), [en]),
        ec = i.useCallback(() => {
            let e = _.current;
            if (null == e) return;
            let t = T.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let n = P.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    i.useLayoutEffect(ec);
    let em = i.useCallback(
            (e) => {
                if (null == g || null != H) return;
                if (((_.current = { x: e.clientX, y: e.clientY }), ec(), I(!0), null != F)) {
                    (Math.abs(e.clientX - F.at.x) > o0 || Math.abs(e.clientY - F.at.y) > o0) && (q.current = !0);
                    return;
                }
                if (!el) return void S(null);
                let t = eo(e, g);
                if (D) {
                    let e = (function (e, t, n) {
                            let l = null,
                                a = 1 / 0;
                            for (let i of e) {
                                let { x: e, y: r, width: s, height: o } = i.rect;
                                if (s < 1 || o < 1 || t < e || n < r || t > e + s || n > r + o) continue;
                                let u = s * o;
                                u < a && ((l = i), (a = u));
                            }
                            return l;
                        })(ei, t.x, t.y),
                        n = null != e && o1(e, g, en) ? null : e;
                    if (null != n) {
                        let e = eZ(n);
                        L((t) => (o2(t, e) ? t : e));
                    }
                    S((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = J.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((J.current = n), (Y.current = n), ee());
            },
            [g, en, el, eo, D, ei, F, H, ec, ee],
        ),
        ef = null == H ? null : d.find((e) => e.id === H.id),
        eh = W && (E || F?.target.marker != null || ef?.target.marker != null);
    i.useEffect(() => {
        if (eh)
            return () => {
                let e = r();
                null != e && oq(e, oO);
            };
    }, [eh, r]);
    let ep = i.useCallback(() => {
        (I(!1), S(null), (J.current = null), (Y.current = null));
    }, []);
    i.useEffect(() => {
        if (!W || !E || !el || D || null != F || null != H) return;
        let e = _.current,
            { rect: t, scale: n } = er.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((J.current = l), (Y.current = l), ee());
    }, [W, E, el, D, F, H, ee]);
    let eg = i.useCallback(
            (e) => {
                if (null != F || null != H) {
                    (et(), V(null));
                    return;
                }
                if (null == N || null == g) return;
                let t = eo(e, g);
                es(
                    N,
                    (function (e, t, n) {
                        let { x: l, y: a, width: i, height: r } = e.rect;
                        return i < 1 || r < 1
                            ? eJ
                            : { x: Math.min(1, Math.max(0, (t - l) / i)), y: Math.min(1, Math.max(0, (n - a) / r)) };
                    })(N, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [N, g, eo, F, H, es, et],
        ),
        ex = i.useCallback(() => {
            null != o && (S(null), te(o));
        }, [o]),
        eb = i.useCallback(() => {
            null != o &&
                (null != F
                    ? et()
                    : H?.confirmingRemove === !0
                      ? V({ ...H, confirmingRemove: !1 })
                      : null != H
                        ? V(null)
                        : ex());
        }, [o, F, H, et, ex]),
        ev = i.useRef(eb),
        ey = i.useRef(ex);
    i.useLayoutEffect(() => {
        ((ev.current = eb), (ey.current = ex));
    });
    let ej = i.useRef(null);
    i.useEffect(() => {
        if (W)
            return (
                oR.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        oR.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), ev.current());
        }
        function t(e) {
            let t = e.target;
            (0, tM.vq)(t) &&
                ej.current?.contains(t) !== !0 &&
                s?.current?.contains(t) !== !0 &&
                !(function (e) {
                    try {
                        return ((0, o_.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) &&
                ey.current();
        }
    }, [W, s]);
    let ew = i.useCallback(
            (e) => {
                if (null == o) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), eb());
                    return;
                }
                if (null != F || null != H || 0 === ei.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    n = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || n) {
                    e.preventDefault();
                    let n = null == N ? -1 : ei.findIndex((e) => e.ref === N.ref);
                    S(ei[(n + (t ? 1 : -1) + ei.length) % ei.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != N &&
                    (e.preventDefault(),
                    es(N, eJ, { x: (g?.left ?? 0) + N.rect.x * en, y: (g?.top ?? 0) + N.rect.y * en }));
            },
            [o, F, H, ei, N, es, eb, g, en],
        ),
        eC = i.useCallback(
            (e) => {
                null == o ||
                    null == F ||
                    ((eQ(F.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, ea.dv)(
                            o,
                            (function (e, t) {
                                let { kind: n, name: l } = eZ(e),
                                    a = [n, l].filter((e) => "" !== e).join(": ");
                                return `${e1}${a}${e6}${e2(e)}
${t.trim()}`;
                            })(F.target, F.draft),
                            e,
                        ),
                        et(),
                        S(null)));
            },
            [o, F, et],
        ),
        eA = i.useCallback((e) => (null == o ? Promise.reject(Error("no project")) : (0, ea.vX)(o, e)), [o]),
        eN = i.useCallback(() => {
            if (null != o && null != H && null != p && eQ(H.draft)) {
                var e, t;
                let n, l;
                ((e = H.id),
                    (t = H.draft.trim()),
                    null != (l = (n = e7(o)).annotations.find((t) => t.id === e)) &&
                        tn(l, p) &&
                        e8(o, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    V({ ...H, editing: !1 }));
            }
        }, [o, H, p]),
        eS = i.useCallback(() => {
            if (null != o && null != H && null != p) {
                var e;
                let t, n;
                ((e = H.id),
                    null != (n = (t = e7(o)).annotations.find((t) => t.id === e)) &&
                        tn(n, p) &&
                        e8(o, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    V(null));
            }
        }, [o, H, p]),
        eE = u
            ? j
                ? ed.intl.string(eu.default["Eb/YV9"])
                : k
                  ? ed.intl.string(eu.default.FD30bh)
                  : ed.intl.formatToPlainString(eu.default.dTSqLF, { count: d.length })
            : "",
        eI = W && null != g,
        eT = E && null == H,
        eP = F?.target ?? ef?.target ?? null,
        eM = F ?? U,
        e_ = F ?? (U?.instant === !0 ? null : U),
        eR =
            null != ef && null != g
                ? (function (e, t) {
                      let { left: n, top: l } = oK(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(oW(ef.target, ef.anchor, g, en), g)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (ef?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = ef;
            oq(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [ef, r]),
        (0, oM.createPortal)(
            (0, a.jsxs)("div", {
                ref: ej,
                className: o$.Li,
                children: [
                    (0, a.jsx)("div", {
                        className: o$.y4,
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-design-announcer",
                        children: eE,
                    }),
                    eI
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)("div", {
                                      className: o$.MT,
                                      style: { left: g.left, top: g.top, width: g.width, height: g.height },
                                      "data-plain-cursor": eT ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": ed.intl.string(eu.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: em,
                                      onMouseLeave: ep,
                                      onClick: eg,
                                      onKeyDown: ew,
                                  }),
                                  null != N && null == N.marker && null == F && null == H
                                      ? (0, a.jsx)(o6, { box: oV(N, g, en) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: T,
                                      className: o$.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: o$.xz,
                                          "data-shown": null != N && null == H && null == F ? "" : void 0,
                                          "data-instant": $ ? "" : void 0,
                                          children: (0, a.jsxs)(y.E, {
                                              variant: "text-xs/medium",
                                              className: o$.Ux,
                                              children: [
                                                  null == R
                                                      ? null
                                                      : (0, a.jsx)("span", { className: o$.Tl, children: R.kind }),
                                                  null == R || "" === R.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: o$.kh,
                                                            children: [" ", R.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: P,
                                      className: o$.Y,
                                      children: eT ? (0, a.jsx)("div", { className: o$.u }) : null,
                                  }),
                                  null == e_
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: o$.aZ,
                                            style: {
                                                transform: `translate3d(${e_.at.x + 20}px, ${e_.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: o$.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == F ? "" : void 0,
                                                children: (0, a.jsxs)(y.E, {
                                                    variant: "text-xs/medium",
                                                    className: o$.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: o$.Tl,
                                                            children: e_.label.kind,
                                                        }),
                                                        "" === e_.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: o$.kh,
                                                                  children: [" ", e_.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eP && null == eP.marker
                                      ? (0, a.jsx)("div", { className: o$.D0, style: oV(eP, g, en), "aria-hidden": !0 })
                                      : null,
                                  d.map((e, t) => {
                                      let n = oW(e.target, e.anchor, g, en),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: o$.xL,
                                              style: { ...oK(n, g), width: 24, height: 24 },
                                              "aria-label": ed.intl.formatToPlainString(eu.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: e0(e.target),
                                              }),
                                              "aria-expanded": H?.id === e.id,
                                              "data-testid": "conjure-design-marker",
                                              onMouseEnter: () => {
                                                  null == F && V(l);
                                              },
                                              onFocus: () => {
                                                  null == F && V(l);
                                              },
                                              onClick: (e) => {
                                                  (e.stopPropagation(), et(), V(l));
                                              },
                                              children: (0, a.jsx)(oJ, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eM || null == o
                                      ? null
                                      : (0, a.jsx)(oU, {
                                            projectId: o,
                                            at: { x: eM.at.x + 20, y: eM.at.y + 20 },
                                            bounds: g,
                                            kind: eM.label.kind,
                                            value: eM.draft,
                                            canSubmit: null != F && eQ(eM.draft),
                                            onChange: (e) => {
                                                null != F && z({ ...F, draft: e });
                                            },
                                            onSubmit: eC,
                                            onDismiss: et,
                                            onUploadFile: eA,
                                            closing: null == F,
                                        }),
                                  null != ef && null != H && null != eR
                                      ? (0, a.jsxs)(oQ, {
                                            point: eR,
                                            frame: g,
                                            authorId: ef.authorId,
                                            title: e0(ef.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                H.confirmingRemove ? V({ ...H, confirmingRemove: !1 }) : V(null);
                                            },
                                            onMouseLeave: () => {
                                                H.editing || H.confirmingRemove || V(null);
                                            },
                                            children: [
                                                H.editing
                                                    ? (0, a.jsx)(M.f, {
                                                          autoFocus: !0,
                                                          label: ed.intl.string(eu.default.KCYqWL),
                                                          hideLabel: !0,
                                                          value: H.draft,
                                                          maxLength: 1e3,
                                                          rows: 3,
                                                          onChange: (e) => V({ ...H, draft: e }),
                                                          onKeyDown: (e) => {
                                                              "Enter" !== e.key ||
                                                                  e.shiftKey ||
                                                                  (e.preventDefault(), eN());
                                                          },
                                                      })
                                                    : (0, a.jsx)(y.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-default",
                                                          className: o$.aC,
                                                          children: ef.comment,
                                                      }),
                                                tn(ef, p)
                                                    ? (0, a.jsx)("div", {
                                                          className: o$.eB,
                                                          children: H.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(y.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: o$.nv,
                                                                            children: ed.intl.string(eu.default.wOHvts),
                                                                        }),
                                                                        (0, a.jsx)(A.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: ed.intl.string(eu.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                V({ ...H, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, a.jsx)(A.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: ed.intl.string(eu.default.friIzR),
                                                                            "data-testid":
                                                                                "conjure-design-remove-confirm",
                                                                            onClick: eS,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(A.$, {
                                                                            variant: "critical-secondary",
                                                                            size: "sm",
                                                                            text: ed.intl.string(eu.default.friIzR),
                                                                            onClick: () =>
                                                                                V({
                                                                                    ...H,
                                                                                    editing: !1,
                                                                                    confirmingRemove: !0,
                                                                                }),
                                                                        }),
                                                                        H.editing
                                                                            ? (0, a.jsx)(A.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !eQ(H.draft),
                                                                                  text: ed.intl.string(
                                                                                      eu.default.iicRP9,
                                                                                  ),
                                                                                  onClick: eN,
                                                                              })
                                                                            : (0, a.jsx)(A.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: ed.intl.string(
                                                                                      eu.default["6eW9lg"],
                                                                                  ),
                                                                                  onClick: () =>
                                                                                      V({
                                                                                          ...H,
                                                                                          editing: !0,
                                                                                          draft: ef.comment,
                                                                                      }),
                                                                              }),
                                                                    ],
                                                                }),
                                                      })
                                                    : null,
                                            ],
                                        })
                                      : null,
                              ],
                          })
                        : null,
                ],
            }),
            document.body,
        )
    );
}
function oJ(e) {
    let { authorId: t } = e,
        n = (0, c.bG)([tH.default], () => tH.default.getUser(t), [t]);
    return (0, a.jsx)(aD.eu, {
        src: null == n ? null : az.Ay.getUserAvatarURL(n),
        size: aO._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function oQ(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        { point: u, frame: d, authorId: c, title: m, testId: f, onDismiss: h, onMouseLeave: p, children: g } = e,
        x = i.useRef(null),
        b = i.useRef(null),
        [v, j] = i.useState(oB);
    i.useLayoutEffect(() => {
        let e = x.current?.getBoundingClientRect(),
            t = b.current?.getBoundingClientRect();
        if (null == e || null == t || e.width < 1 || t.width < 1) return;
        let n = { x: t.left + t.width / 2 - e.left, y: t.top + t.height / 2 - e.top };
        j((e) => (0.5 > Math.abs(e.x - n.x) && 0.5 > Math.abs(e.y - n.y) ? e : n));
    }, []);
    let {
            left: w,
            top: k,
            originX: C,
            originY: A,
        } = ((n = Math.max((t = d.left + 8), d.left + d.width - 300 - 8)),
        (r = Math.max((l = d.top + 8), d.top + d.height - 160 - 8)),
        (s = Math.min(Math.max(u.x - v.x, t), n)),
        { left: s, top: (o = Math.min(Math.max(u.y - v.y, l), r)), originX: u.x - s, originY: u.y - o }),
        N = { left: w, top: k, "--custom-conjure-card-origin-x": `${C}px`, "--custom-conjure-card-origin-y": `${A}px` };
    return (0, a.jsxs)("div", {
        ref: x,
        className: o$.Nr,
        style: N,
        "data-testid": f,
        onMouseLeave: p,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, a.jsxs)("div", {
                className: o$.MY,
                children: [
                    (0, a.jsx)("span", { ref: b, className: o$.ip, children: (0, a.jsx)(oJ, { authorId: c }) }),
                    (0, a.jsx)(y.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: o$.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: o$.zI, children: g }),
        ],
    });
}
let oZ = 300,
    o0 = 2;
function o2(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function o1(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        a = t.height / n;
    return !(l < 1) && !(a < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * a;
}
function o6(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: o$.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var o9 = n(659723),
    o3 = n(697744),
    o5 = n(130324);
function o4(e) {
    let t = (0, o3.c)(),
        { events: n, getDuration: l } = t;
    return (
        i.useEffect(() => {
            let e = null,
                t = 0;
            return (
                (e = requestAnimationFrame(function a() {
                    ((e = null), null != l()) ? n.onMouseEnter() : t++ < 120 && (e = requestAnimationFrame(a));
                })),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [n, l]),
        i.useEffect(() => {
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e]),
        t
    );
}
function o7(e) {
    let { className: t } = e,
        { Component: n, events: l } = o4(3e4);
    return (0, a.jsxs)("div", {
        className: t,
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(y.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: o5.o,
                children: ed.intl.string(eu.default.AyiQEp),
            }),
        ],
    });
}
var o8 = n(251363),
    ue = n(944142),
    ut = n(532247),
    un = n(501628);
function ul(e) {
    let { progress: t } = e,
        { Component: n } = o4(1500),
        l = K.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(y.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: un.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: un.PM,
                            "data-state": n < t.stepIndex ? "done" : n === t.stepIndex ? "current" : "todo",
                        },
                        n,
                    ),
                ),
            }),
            l && null != t.stepLabel
                ? (0, a.jsx)(y.E, { variant: "text-xs/normal", color: "text-overlay-light", children: t.stepLabel })
                : null,
        ],
    });
}
function ua(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        o = (0, c.bG)([ue.A], () => (s ? ue.A.getLiveReload(t) : null), [s, t]),
        u = (0, $.A)(n, r)?.id ?? null,
        d = o?.phase ?? null,
        m = (function (e, t) {
            let n = (0, ut.dv)(e),
                [l, a] = i.useState(null),
                [r, s] = i.useState(n);
            r !== n && (s(n), a(null == n ? (0, ut.QP)(e, r) : null));
            let o = (0, c.bG)(
                    [tI.A],
                    () => {
                        let e = tI.A.getFrame(t);
                        return (0, tO.x1)(e) && e.data.proxyTicketRefreshing;
                    },
                    [t],
                ),
                u = i.useRef(o),
                d = i.useRef(!1);
            return (
                i.useEffect(() => {
                    ((u.current = o), o && (d.current = !0));
                }, [o]),
                i.useEffect(() => {
                    if (null == l) return;
                    function e() {
                        return a(null);
                    }
                    function n(n) {
                        null != n.target && n.target === (0, o8.o)(null, t) && e();
                    }
                    ((d.current = u.current), document.addEventListener("load", n, !0));
                    let i = window.setTimeout(() => {
                            d.current || e();
                        }, 4e3),
                        r = window.setTimeout(e, 15e3);
                    return () => {
                        (document.removeEventListener("load", n, !0), window.clearTimeout(i), window.clearTimeout(r));
                    };
                }, [l, t]),
                l
            );
        })(d, u),
        f = (0, ut.h_)(d, o?.step ?? null, m);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(k.A, { tag: "div", role: "status", "aria-live": "polite", children: f?.title ?? "" }),
            null != f
                ? (0, a.jsx)("div", {
                      className: un.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(ul, { progress: f }),
                  })
                : null,
        ],
    });
}
var ui = n(343030),
    ur = n(317608),
    us = n(206600),
    uo = n(742023),
    uu = n(347927);
function ud(e) {
    let { title: t, body: n, wide: l = !1, children: i } = e;
    return (0, a.jsxs)("div", {
        className: s()(uu.Bf, l && uu.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: uu.Ux,
                children: [
                    (0, a.jsx)(I.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, a.jsx)(y.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                ],
            }),
            i,
        ],
    });
}
var uc = n(957272);
function um(e) {
    let { applicationId: t, surface: n, frameOverlay: l } = e,
        { frame: r, state: s } = (0, us.A)({ applicationId: t, surface: n }),
        o = (0, tO.VA)(t, n);
    switch (
        (i.useEffect(
            () => (
                !(function (e) {
                    let t = tI.A.getFrame(e);
                    if (null == t || tT.A.getWindowOpen(ev.MLl.ACTIVITY_POPOUT)) return;
                    let n = tI.A.getMainFrame()?.id === e;
                    t.intent === tO.sV.MAIN
                        ? (n || q.A.promoteFrame(e), q.A.resetFrameLayoutModes(e))
                        : n && q.A.clearMainFrameSlot();
                })(o),
                () => {
                    let e;
                    null != (e = tI.A.getFrame(o)) &&
                        ((0, tO.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        uo.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === tO.sV.INLINE && q.A.promoteFrame(o),
                              q.A.updateFrameLayoutMode({ frameId: o, layoutMode: tO.y0.PIP }))
                            : e.intent === tO.sV.MAIN && q.A.demoteMainFrame(o));
                }
            ),
            [o],
        ),
        s)
    ) {
        case us.n.Launched:
            return (0, a.jsx)(ur.A, { frameId: r.id, level: ui.A.WithinAppContent, className: uc.Z7, overlay: l });
        case us.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: uc.qs,
                children: (0, a.jsx)(ud, {
                    title: ed.intl.string(eu.default["9kpdo7"]),
                    body: ed.intl.string(eu.default.iIA8Nj),
                }),
            });
        case us.n.NoApplication:
            return (0, a.jsx)(o7, { className: uc.qs });
        case us.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: uc.qs,
                children: (0, a.jsx)(ud, {
                    title: ed.intl.string(eu.default["7k4GyN"]),
                    body: ed.intl.string(eu.default.zdIy3R),
                }),
            });
        case us.n.Error:
            return (0, a.jsxs)("div", {
                className: uc.qs,
                children: [
                    (0, a.jsx)(I.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: ed.intl.string(eu.default.lTPbnG),
                    }),
                    (0, a.jsx)(y.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: uc.tj,
                        children: ed.intl.string(eu.default.e6GiAZ),
                    }),
                ],
            });
        case us.n.AwaitingLaunch:
        case us.n.Loading:
            return (0, a.jsx)("div", { className: uc.qs, children: (0, a.jsx)(C.y, {}) });
    }
}
var uf = n(334738),
    uh = n(688438),
    up = n(355622),
    ug = n(531685),
    ux = n(365971),
    ub = n(703462);
function uv(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: ub.f,
        children: [
            (0, a.jsx)(aM.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(y.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function uy() {
    return (0, a.jsx)("div", { className: ub.f, children: (0, a.jsx)(C.y, {}) });
}
function uj(e) {
    let t,
        n,
        { previewApplicationId: l } = e,
        { data: r, isLoading: s } = (0, z.YY)(l),
        o = r?.bot?.id ?? null,
        u = (0, c.bG)([X.A], () => {
            if (null == o) return null;
            let e = X.A.getDMFromUserId(o);
            return null != e ? X.A.getChannel(e) : null;
        });
    ((t = u?.id ?? null),
        i.useEffect(() => {
            null != t && nF.A.preload(ev.ME, t);
        }, [t]),
        (n = (0, c.bG)([ug.A], () => ug.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, ux.Xg)();
            return (
                (0, uf.yl)(t, e),
                () => {
                    (0, uf.dm)(t, e);
                }
            );
        }, [t, n]));
    let [d, m] = i.useState(null),
        f = null != o && d === o;
    return (i.useEffect(() => {
        if (null == o || null != u) return;
        let e = !1;
        return (
            nF.A.openPrivateChannel({ recipientIds: o, navigateToChannel: !1 }).catch(() => {
                e || m(o);
            }),
            () => {
                e = !0;
            }
        );
    }, [o, u]),
    s && null == r)
        ? (0, a.jsx)(uy, {})
        : null == o || f
          ? (0, a.jsx)(uv, { message: ed.intl.string(eu.default["VP/O8s"]) })
          : null == u
            ? (0, a.jsx)(uy, {})
            : (0, a.jsx)("div", {
                  className: ub.g,
                  children: (0, a.jsx)(uh.A, { channel: u, guild: null, chatInputType: up.oU.SIDEBAR }, u.id),
              });
}
var uw = n(887909),
    uk = n(570962),
    uC = n(998475);
function uA(e) {
    let {
        label: t,
        title: n,
        subtitle: l,
        header: i,
        body: r,
        actions: o,
        nextStep: u,
        appDetails: d,
        hasContentBackground: c,
        noPadding: m,
        obscured: f,
    } = (0, uw.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, a.jsxs)("section", {
        className: uC.Nr,
        "aria-label": t,
        children: [
            (0, a.jsx)("div", {
                className: uC.rf,
                children: (0, a.jsx)(uk.A, {
                    obscured: !0 === f,
                    children: (0, a.jsxs)("div", {
                        className: uC.Gq,
                        children: [
                            null != n
                                ? (0, a.jsxs)("div", {
                                      className: uC.z3,
                                      children: [
                                          (0, a.jsx)(I.D, {
                                              variant: "heading-lg/bold",
                                              color: "text-strong",
                                              children: n,
                                          }),
                                          null != l
                                              ? (0, a.jsx)(y.E, {
                                                    variant: "text-md/normal",
                                                    color: "text-default",
                                                    children: l,
                                                })
                                              : null,
                                      ],
                                  })
                                : null,
                            i,
                            (0, a.jsxs)("div", {
                                className: s()(uC.Qs, c ? uC.cw : null, m ? uC.pN : null),
                                children: [r, null == u ? d : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != o && o.length > 0
                ? (0, a.jsx)("div", {
                      className: uC.o1,
                      children: o.map((e, t) => (0, a.jsx)(A.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var uN = n(409478),
    uS = n(652227);
function uE(e) {
    let {
            applicationId: t,
            previewApplicationId: n,
            surface: l,
            previewReady: r,
            previewGate: s,
            availability: o,
            activeMode: u,
            widgetApplicationId: d,
            frameOverlay: c,
        } = e,
        m = (0, $.A)(t, l),
        { data: f, isLoading: h } = (0, z.YY)(t ?? void 0);
    if (
        (i.useEffect(() => {
            s?.type === "permissions" && null != m && (0, np.A)().leaveFrame(m.id);
        }, [m, s?.type]),
        s?.type === "checking")
    )
        return (0, a.jsx)("div", { className: uS.q, children: (0, a.jsx)(C.y, {}) });
    if (s?.type === "permissions")
        return (0, a.jsx)("div", {
            className: uS.q,
            children: null == s.authorizeProps ? (0, a.jsx)(C.y, {}) : (0, a.jsx)(uA, { ...s.authorizeProps }),
        });
    if (!r) return (0, a.jsx)(o7, { className: uS.q });
    if (null == t) return null;
    if (h && null == f) return (0, a.jsx)("div", { className: uS.q, children: (0, a.jsx)(C.y, {}) });
    let p = o.showModeSwitch && null != u ? { role: "tabpanel", id: (0, tU.z3)(u), "aria-label": (0, tU.kZ)(u) } : {};
    return (0, a.jsxs)("div", {
        className: uS.R,
        ...p,
        children: [
            (0, tw.yf)(o, u) ? (0, a.jsx)(um, { applicationId: t, surface: l, frameOverlay: c }) : null,
            "widget" === u && null != d
                ? "unavailable-authorization-revoked" === o.profileState
                    ? (0, a.jsx)("div", {
                          className: uS.q,
                          children: (0, a.jsx)(ud, {
                              wide: !0,
                              title: ed.intl.string(eu.default["08U+YO"]),
                              body: ed.intl.string(eu.default.pKBfrc),
                          }),
                      })
                    : (0, a.jsx)(uN.A, { applicationId: d })
                : null,
            "bot" === u && null != n ? (0, a.jsx)(uj, { previewApplicationId: n }) : null,
        ],
    });
}
var uI = n(175841),
    uT = n(750506),
    uP = n(867193),
    uM = n(417760);
function u_(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function uR(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function uL(e) {
    let { phase: t, projectId: n, onOpenPublishedApp: l, compact: r } = e,
        { stop: o, stopping: u } = (function (e) {
            let t = (0, c.bG)([tW.Ay], () => null != e && tW.Ay.isThinking(e)),
                [n, l] = i.useState(!1),
                [a, r] = i.useState(t);
            (t !== a && (r(t), t || l(!1)),
                i.useEffect(() => {
                    if (!n) return;
                    let e = setTimeout(() => l(!1), 5e3);
                    return () => clearTimeout(e);
                }, [n]));
            let s = i.useCallback(() => {
                null != e && (l(!0), (0, ea.fu)(e));
            }, [e]);
            return { stop: t ? s : null, stopping: n };
        })(n),
        d = (0, ty.CU)(n),
        m = "controlling" === t,
        f = ed.intl.string(m ? (d ? eu.default["VJW/5P"] : eu.default["+hD2Iz"]) : eu.default["h+i1r9"]),
        h =
            null != l
                ? (0, a.jsx)(A.$, {
                      variant: "overlay-secondary",
                      size: "sm",
                      text: ed.intl.string(eu.default["1NcO7H"]),
                      onClick: l,
                  })
                : null,
        p =
            null != o
                ? (0, a.jsx)(A.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: ed.intl.string(eu.default.oU59sU),
                      loading: u,
                      onClick: o,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return r
        ? (0, a.jsxs)("div", {
              className: s()(uM.M0, uM.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  m
                      ? (0, a.jsx)(rB.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(uI.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(y.E, { variant: "text-sm/semibold", color: "none", className: uM.ID, children: f }),
                  m ? (0, a.jsx)(k.A, { children: ed.intl.string(eu.default.fg1sor) }) : null,
                  m ? (0, a.jsxs)("div", { className: uM.lC, children: [h, p] }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: uM.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: uM.sp,
                      children: [
                          (0, a.jsx)(uI.SparklesIcon, { size: "sm", color: "currentColor" }),
                          m ? (0, a.jsx)(rB.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: uM.f4,
                              children: [
                                  (0, a.jsx)(y.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: uM.w9,
                                      children: f,
                                  }),
                                  m
                                      ? (0, a.jsx)(y.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: uM.Rb,
                                            children: ed.intl.string(eu.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  m ? (0, a.jsxs)("div", { className: uM.lC, children: [h, p] }) : null,
              ],
          });
}
function uD(e) {
    let {
            projectId: t,
            applicationId: n,
            previewApplicationId: l,
            resolveTarget: r,
            frameId: s,
            onOpenPublishedApp: o = null,
        } = e,
        u = (0, ty.Zv)(null != n && n === l ? t : null),
        d = (function (e) {
            let [t, n] = i.useState(e),
                [l, a] = i.useState(!1);
            return (e !== t && (n(e), a(!e)),
            i.useEffect(() => {
                if (!l) return;
                let e = setTimeout(() => a(!1), 2400);
                return () => clearTimeout(e);
            }, [l]),
            e)
                ? "controlling"
                : l
                  ? "handoff"
                  : "idle";
        })(u),
        c = (0, ek.useHasAnyModalOpen)(),
        m = tD(s);
    i.useEffect(() => {
        u &&
            m &&
            null != s &&
            (function (e) {
                if (!tR(e)) return;
                let t = t_(e);
                null != t && (0, tP.sP)(t);
            })(s);
    }, [u, m, s]);
    let [f, h] = i.useState(null),
        [p, g] = i.useState(null),
        [x, b] = i.useState(null),
        v = "idle" !== d;
    i.useEffect(() => {
        if (!v) return;
        function e() {
            let e = u_(r());
            h((t) => (uR(t, e) ? t : e));
            let t = null == p ? null : u_(p);
            (b((e) => (uR(e, t) ? e : t)), null != p && (0, uP.C)(p.getBoundingClientRect().height));
        }
        e();
        let t = window.setInterval(e, 250);
        window.addEventListener("resize", e);
        let n = null == p ? null : new ResizeObserver(e);
        return (
            null != p && n?.observe(p),
            () => {
                (window.clearInterval(t),
                    window.removeEventListener("resize", e),
                    n?.disconnect(),
                    null != p && (0, uP.C)(0));
            }
        );
    }, [v, r, p]);
    let y = "idle" !== d && null != f,
        j = y && "controlling" === d && !c,
        w = null != f && f.width < 420,
        k = null == f ? void 0 : { left: f.left, top: f.top, width: f.width, height: f.height },
        C =
            null == f
                ? void 0
                : (function (e, t) {
                      if (null == t) return { left: e.left, top: e.top, width: e.width, height: e.height };
                      let n = Math.min(e.left, t.left),
                          l = Math.min(e.top, t.top);
                      return {
                          left: n,
                          top: l,
                          width: Math.max(e.left + e.width, t.left + t.width) - n,
                          height: Math.max(e.top + e.height, t.top + t.height) - l,
                      };
                  })(f, x),
        A = (function () {
            let [e] = i.useContext(uT.uY),
                [t] = i.useState(() => document.createElement("div"));
            return (
                i.useLayoutEffect(() => {
                    if (null != e) return (e.prepend(t), () => t.remove());
                }, [e, t]),
                null == e ? document.body : t
            );
        })();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            y
                ? (0, a.jsx)("div", {
                      ref: g,
                      className: uM.D,
                      "data-phase": d,
                      children: (0, a.jsx)("div", {
                          className: uM.QF,
                          children: (0, a.jsx)(uL, { phase: d, projectId: t, onOpenPublishedApp: o, compact: w }),
                      }),
                  })
                : null,
            (0, oM.createPortal)(
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("div", {
                        className: uM.y4,
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-control-announcer",
                        children:
                            "controlling" === d
                                ? ed.intl.string(eu.default.oWcemF)
                                : "handoff" === d
                                  ? ed.intl.string(eu.default["h+i1r9"])
                                  : "",
                    }),
                }),
                document.body,
            ),
            j
                ? (0, oM.createPortal)(
                      (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: uM.ys,
                                  style: C,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: uM.om,
                                  style: k,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                          ],
                      }),
                      A,
                  )
                : null,
        ],
    });
}
var uO = n(399503),
    uF = n(853555),
    uz = n(591335),
    uU = n(873727),
    uG = n(147248),
    uq = n(418842),
    u$ = n(363195),
    uB = n(818023);
let uH = null;
var uV = n(602853),
    uW = n(517461),
    uK = n(487336);
function uX(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: r } = e,
        s = (0, uV.r)(O.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = i.useRef(null),
        [u, d] = (0, uW.V)("VibegrationsChatSidebarWidth", 460),
        [c, m] = i.useState(u ?? 460),
        f = (0, ai.clamp)(c, 360, n);
    i.useLayoutEffect(() => {
        l(t ? f + s : 0);
    }, [f, t, s, l]);
    let h = (0, s1.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: m,
            onElementResizeEnd: d,
            orientation: s1.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        p = i.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), h(e));
            },
            [h],
        );
    return (0, a.jsxs)("div", {
        className: uK.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: uK.Di, onPointerDown: p }),
            (0, a.jsx)("div", { ref: o, className: uK.kL, style: { width: f }, children: r }),
        ],
    });
}
var uY = n(541940);
function uJ(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: o,
            header: u,
            mainClassName: d,
            content: m,
            sidebar: f,
            onOpenPublishedApp: h,
            showsFrame: p,
        } = e,
        [g, x] = i.useState(null),
        b = (0, $.A)(l, o),
        v = b?.id ?? null;
    (!(function (e, t) {
        let n = (0, c.bG)([u$.A], () => (0, uU.x4)(u$.A.theme)),
            l = (0, c.bG)([uG.A], () => uG.A.gradientPreset),
            {
                reducedMotion: a,
                fontScale: r,
                highContrast: s,
                forcedColors: o,
                underlineLinks: u,
            } = (0, c.cf)([iN.Ay], () => ({
                reducedMotion: iN.Ay.useReducedMotion,
                fontScale: (0, uU.U0)(),
                highContrast: iN.Ay.isHighContrastModeEnabled,
                forcedColors: iN.Ay.useForcedColors,
                underlineLinks: iN.Ay.alwaysShowLinkDecorations,
            })),
            d = K.hH.useSetting(),
            m = (0, uq.C)(),
            f = i.useRef(!1),
            h = i.useRef(!1),
            p = i.useRef(0),
            g = i.useRef(null),
            x = i.useCallback(() => {
                let l = (0, o8.o)(e, t);
                if (null == l) return;
                g.current = l;
                let i = {
                    revision: ++p.current,
                    baseTheme: n,
                    customTheme: (0, uU.Lq)(),
                    uiDensity: m,
                    messageDisplayCompact: d,
                    fontScale: r,
                    reducedMotion: a,
                    highContrast: s,
                    forcedColors: o,
                    underlineLinks: u,
                };
                (0, oG.W)(l, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, o, r, t, s, d, e, a, m, u]),
            b = i.useRef(x);
        i.useLayoutEffect(() => {
            b.current = x;
        });
        let v = i.useCallback(() => {
            f.current ||
                ((f.current = !0),
                queueMicrotask(() => {
                    ((f.current = !1), h.current || b.current());
                }));
        }, []);
        (i.useEffect(
            () => (
                (h.current = !1),
                () => {
                    h.current = !0;
                }
            ),
            [],
        ),
            i.useEffect(() => {
                v();
            }, [l, v]),
            i.useLayoutEffect(() => {
                (x(), v());
            }, [v, x]),
            i.useLayoutEffect(() => {
                let n = (0, o8.o)(e, t);
                null != n && n !== g.current && v();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, o8.o)(e, t) && ((g.current = null), v());
                }
                return (document.addEventListener("load", n, !0), () => document.removeEventListener("load", n, !0));
            }, [t, e, v]),
            i.useEffect(() => {
                let e = new MutationObserver(v);
                return (
                    e.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }),
                    e.observe(document.head, { childList: !0, subtree: !0, characterData: !0 }),
                    () => e.disconnect()
                );
            }, [v]));
    })(g, v),
        i.useEffect(() => {
            if (null != t) return (0, uF.Ng)(t, () => (0, o8.o)(g, v));
        }, [t, g, v]));
    let y = i.useCallback(() => (0, o8.o)(g, v), [g, v]),
        j = i.useCallback(() => (p ? (0, o8.o)(g, v) : g), [p, g, v]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: s()(uY.Mh, d),
                children: [
                    u,
                    (0, a.jsx)(uD, {
                        projectId: t ?? null,
                        applicationId: l,
                        previewApplicationId: r,
                        resolveTarget: j,
                        frameId: v,
                        onOpenPublishedApp: h,
                    }),
                    (0, a.jsx)("div", { ref: x, className: uY.fm, children: m }),
                ],
            }),
            f,
            (0, a.jsx)(oY, {
                projectId: t ?? null,
                applicationId: l,
                previewApplicationId: r,
                resolveIframe: y,
                toggleRef: n,
            }),
        ],
    });
}
function uQ(e) {
    let {
        projectId: t,
        designFeedbackToggleRef: n,
        applicationId: l,
        previewApplicationId: r,
        surface: o,
        header: u,
        chatOpen: d,
        onCloseChat: m,
        chatHeaderAction: f,
        onRestoreVersion: h,
        debugOpen: p = !1,
        onCloseDebug: g,
        restoreState: x,
        previewReady: b,
        previewGate: v,
        availability: y,
        activeMode: j,
        widgetApplicationId: w,
        onOpenPublishedApp: k = null,
    } = e;
    ((0, uO.k)(t, w),
        (function (e) {
            let { mobile: t, landscape: n } = (0, c.cf)([tv.A], () => ({
                mobile: tv.A.isBuilderPreviewMobile(),
                landscape: tv.A.isBuilderPreviewLandscape(),
            }));
            i.useEffect(() => {
                let l;
                if (null != e) {
                    if (t) ((l = n ? uB.aX.LANDSCAPE : uB.aX.PORTRAIT), (uH = e));
                    else {
                        if (uH !== e) return;
                        ((l = uB.aX.UNHANDLED), (uH = null));
                    }
                    nI.h.dispatch({
                        type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE",
                        screenOrientation: l,
                        applicationId: e,
                    });
                }
            }, [e, t, n]);
        })(o.type === n9.U.MAIN ? l : null));
    let C = i.useRef(null),
        [A, N] = i.useState(0);
    (i.useLayoutEffect(() => {
        if (o.type === n9.U.MAIN) return ((0, eP.HV)(l), () => (0, eP.HV)(null));
    }, [l, o.type]),
        i.useEffect(() => {
            null != t && ((0, ea.Hc)(t), (0, uz.$)());
        }, [t]),
        i.useLayoutEffect(() => {
            let e = C.current;
            if (null == e) return;
            function t() {
                null != e && N(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return (n.observe(e), () => n.disconnect());
        }, []),
        i.useLayoutEffect(() => () => (0, eP.Zq)(0), []));
    let S = Math.max(360, A - 320),
        E = d || o.type === n9.U.MAIN;
    return (0, a.jsx)("div", {
        ref: C,
        className: uY.LB,
        children: (0, a.jsx)(uJ, {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: o,
            header: u,
            onOpenPublishedApp: k,
            showsFrame: (0, tw.yf)(y, j),
            mainClassName: null == u ? void 0 : s()(uY.ez, { [uY.zt]: d }),
            content: (0, a.jsx)(uE, {
                applicationId: l,
                previewApplicationId: r,
                surface: o,
                previewReady: b,
                previewGate: v,
                availability: y,
                activeMode: j,
                widgetApplicationId: w,
                frameOverlay: (0, a.jsx)(ua, { projectId: t, applicationId: l, previewApplicationId: r, surface: o }),
            }),
            sidebar:
                null != t && E
                    ? (0, a.jsx)(uX, {
                          open: d,
                          maxWidth: S,
                          onWidthChange: eP.Zq,
                          children: (0, a.jsx)("div", {
                              className: uY.cO,
                              children: p
                                  ? (0, a.jsx)(oP, { projectId: t, onClose: g ?? (() => {}) }, t)
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(o9.A, { projectId: t }),
                                            (0, a.jsx)(n3.Ay, {
                                                "aria-label": ed.intl.string(ed.t["/VQax8"]),
                                                toolbar: (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        f,
                                                        null == m
                                                            ? null
                                                            : (0, a.jsx)(n3.Ay.Icon, {
                                                                  icon: L.P,
                                                                  tooltip: ed.intl.string(eu.default.JD6Oit),
                                                                  onClick: m,
                                                              }),
                                                    ],
                                                }),
                                                children: (0, a.jsx)(n3.Ay.Title, {
                                                    children: ed.intl.string(ed.t["/VQax8"]),
                                                }),
                                            }),
                                            (0, a.jsx)("div", {
                                                className: uY.cb,
                                                children: (0, a.jsx)(
                                                    se,
                                                    { projectId: t, restoreState: x, onRestoreVersion: h },
                                                    t,
                                                ),
                                            }),
                                        ],
                                    }),
                          }),
                      })
                    : null,
        }),
    });
}
var uZ = n(631417);
function u0(e) {
    let { title: t, actions: n, breadcrumb: l } = e;
    return (0, a.jsx)(H.A, {
        hideSearch: !0,
        toolbar: n,
        className: uZ.wx,
        "aria-label": t,
        children: (0, a.jsxs)("div", {
            className: uZ.QF,
            children: [
                (0, a.jsx)(D.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: O.A.colors.TEXT_STRONG,
                    className: uZ.Kk,
                }),
                null != l
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(H.A.Title, { onClick: l.onClick, children: l.title }),
                              (0, a.jsx)(H.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, a.jsx)(H.A.Title, { className: uZ.Qw, wrapperClassName: uZ.DD, children: t }),
            ],
        }),
    });
}
var u2 = n(683071);
let u1 = "conjuring-help";
var u6 = n(173114);
function u9() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: n,
            } = (0, c.cf)([tH.default, J.A, nM.Ay, rr.A], () => {
                let e = tH.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of J.A.getGuildsArray()) {
                    if (!t.features.has(ev.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let n = nM.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, U.m1)(t, tH.default, rr.A) === u1;
                    });
                    if (null != n) return { isStaff: e, guildId: t.id, channelId: n.channel.id };
                }
                return { isStaff: e, guildId: null, channelId: null };
            });
            return e
                ? null != t && null != n
                    ? { kind: "channel", guildId: t, channelId: n }
                    : { kind: "url", url: "https://i.dis.gd/conjuring-access" }
                : null;
        })(),
        t = i.useCallback(() => {
            null != e &&
                ("channel" === e.kind
                    ? (0, V.pX)(ev.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, nn.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, a.jsx)("div", {
              className: u6.l,
              children: (0, a.jsx)(u2.w, {
                  type: "info",
                  iconAlign: "center",
                  children: ed.intl.format(eu.default["6anmu1"], { channel: u1, onNavigate: t }),
              }),
          });
}
var u3 = n(323140);
function u5(e) {
    return (0, a.jsx)(f.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function u4(e) {
    return (0, a.jsx)(h.u, { ...e, size: "custom", width: 20, height: 20 });
}
function u7(e) {
    return (0, a.jsx)(p.k, { ...e, size: "custom", width: 20, height: 20 });
}
function u8(e) {
    return (0, a.jsx)(g.H, { ...e, size: "custom", width: 20, height: 20 });
}
let de = {
    showPublishBlocked: function (e) {
        (0, ek.openModal)((t) => (0, a.jsx)(n0, { ...t, reason: e }));
    },
    openPublishNotes: n2.A,
    showError: (e) => (0, x.P)((0, b.o)(e, v.Ck.FAILURE)),
    openProfile: (e) => {
        (0, W.openUserProfileModal)({ userId: e });
    },
    openAutomodSettings: (e) => {
        Promise.resolve()
            .then(n.bind(n, 468689))
            .then((t) => {
                let { default: n } = t;
                return n.open(e, ev.BEX.GUILD_AUTOMOD);
            })
            .catch(() => {});
    },
};
function dt(e) {
    var t;
    let n,
        l,
        r,
        o,
        f,
        h,
        p,
        g,
        A,
        N,
        { project: S, guildId: E, onSelect: I, onRemix: T, shared: P = !1 } = e,
        M =
            ((n = S.id),
            (l = S.name),
            (r = i.useRef(!1)),
            (o = i.useCallback(() => {
                r.current ||
                    ((r.current = !0),
                    (0, x.P)((0, b.o)(ed.intl.formatToPlainString(eu.default.aN2JdD, { name: l }), v.Ck.MESSAGE)),
                    ef(n, l)
                        .catch((e) => {
                            let t;
                            (console.error("[vibegrations] project export failed", n, e),
                                (0, x.P)(
                                    (0, b.o)(
                                        409 === (t = e instanceof ea.xE ? e.status : null)
                                            ? ed.intl.string(eu.default["9oqbEw"])
                                            : 404 === t
                                              ? ed.intl.string(eu.default["0W8uLq"])
                                              : ed.intl.string(eu.default.N8753A),
                                        v.Ck.FAILURE,
                                    ),
                                ));
                        })
                        .finally(() => {
                            r.current = !1;
                        }));
            }, [n, l])),
            {
                onExport: o,
                onImport: (f = eh(
                    i.useCallback(
                        (e) => {
                            let t = em(e);
                            null != t
                                ? (0, x.P)((0, b.o)(t, v.Ck.FAILURE))
                                : (0, m.A)({
                                      title: ed.intl.formatToPlainString(eu.default["Gm+u1+"], { name: l }),
                                      subtitle: ed.intl.string(eu.default.M7H3sJ),
                                      confirmText: ed.intl.string(eu.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, V.pX)(ev.BVt.CHANNEL(E, ey.VV.CONJURE, n));
                                          try {
                                              await ec(n, e, ed.intl.string(eu.default.Owerd3));
                                          } catch {
                                              (0, x.P)((0, b.o)(ed.intl.string(eu.default["Q+l4Hv"]), v.Ck.FAILURE));
                                          }
                                      },
                                  });
                        },
                        [n, l, E],
                    ),
                )).open,
                importInput: f.input,
            }),
        _ =
            null == S.updated_at
                ? null
                : ed.intl.formatToPlainString(eu.default.AXydi3, { time: u()(S.updated_at).fromNow() }),
        R = (0, tB.wu)(S),
        L =
            (0, c.bG)([J.A], () => (null == R ? null : (J.A.getGuild(R)?.name ?? null)), [R]) ??
            ed.intl.string(eu.default["3QFps8"]),
        D = (0, c.bG)([eM.Ay], () => eM.Ay.isProjectDeleting(S.id), [S.id]),
        O =
            ((t = P ? S : null),
            (h = t?.id),
            (p = t?.owner_user_id),
            (g = (0, c.yK)(
                [tW.Ay],
                () =>
                    null == h
                        ? []
                        : [
                              ...new Set(
                                  tW.Ay.getMessages(h)
                                      .flatMap((e) => (null != e.user_id && e.user_id !== p ? [e.user_id] : []))
                                      .reverse(),
                              ),
                          ],
                [h, p],
            )),
            i.useEffect(() => {
                null != p && (tQ(p), g.forEach(tQ));
            }, [p, g]),
            (A = (0, c.bG)([tH.default], () => (null == p ? null : tH.default.getUser(p)), [p])),
            (N = (0, c.yK)([tH.default], () => g.map((e) => tH.default.getUser(e)).filter((e) => null != e), [g])),
            i.useMemo(
                () =>
                    null == A
                        ? null
                        : {
                              creator: A,
                              collaborators: N,
                              label: (function (e, t) {
                                  let n;
                                  return 0 === t.length
                                      ? ed.intl.formatToPlainString(eu.default.t5RWBS, { creator: e })
                                      : ed.intl.formatToPlainString(eu.default["b5uCe/"], {
                                            creator: e,
                                            collaborators:
                                                0 === (n = void 0 ?? t.length)
                                                    ? ""
                                                    : 1 === n
                                                      ? ed.intl.formatToPlainString(ed.t["8s9z8P"], { first: t[0] })
                                                      : 2 === n
                                                        ? ed.intl.formatToPlainString(ed.t["i0K/dw"], {
                                                              first: t[0],
                                                              second: t[1],
                                                          })
                                                        : 3 === n
                                                          ? ed.intl.formatToPlainString(ed.t["/KSOKY"], {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                            })
                                                          : ed.intl.formatToPlainString(ed.t.xpU76u, {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                                count: n - 3,
                                                            }),
                                        });
                              })(
                                  (0, tV.mG)(A),
                                  N.map((e) => (0, tV.mG)(e)),
                              ),
                          },
                [A, N],
            )),
        z = i.useId(),
        U = (0, a.jsx)(y.E, { variant: "text-md/semibold", color: "text-strong", className: u3.j1, children: S.name }),
        G = (0, eS.oF)(S.id),
        q = {
            projectId: S.id,
            projectName: S.name,
            guildId: E,
            projectGuildId: S.guild_id,
            isOwner: (0, eM.PV)(S),
            canRemix: (0, eM.H_)(S),
            onRemix: T,
            onExport: M.onExport,
            onImport: M.onImport,
        };
    return (0, a.jsxs)("div", {
        className: s()(u3.OY, { [u3.Wy]: D }),
        "aria-busy": D,
        children: [
            (0, a.jsx)(ti.Ay, { projectId: S.id }),
            null == G || D ? null : (0, a.jsx)("div", { className: u3.SB, "aria-hidden": !0 }),
            (0, a.jsxs)(j.D, {
                className: u3.W6,
                onClick: D ? void 0 : I,
                onContextMenu: function (e) {
                    D || (0, F.jA)(e, () => (0, a.jsx)(nu, { ...q, onCloseMenu: F.Z_ }));
                },
                tabIndex: D ? -1 : void 0,
                "aria-describedby": null != O ? z : void 0,
                children: [
                    (0, a.jsx)(nc.A, { project: S, size: "md", className: u3.VJ }),
                    (0, a.jsxs)("div", {
                        className: u3.MM,
                        children: [
                            (0, a.jsxs)("div", {
                                className: u3.Ub,
                                children: [
                                    null != O ? (0, a.jsx)(w.m, { text: O.label, ariaHidden: !0, children: U }) : U,
                                    null == O || D ? null : (0, a.jsx)(nh, { creator: O, className: u3.rb }),
                                    G !== d.I.NEEDS_INPUT || D
                                        ? null
                                        : (0, a.jsxs)("div", {
                                              className: u3.fs,
                                              children: [
                                                  (0, a.jsx)(B.A, { mentionsCount: 1 }),
                                                  (0, a.jsx)(k.A, { children: ed.intl.string(eu.default.hfIuc7) }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: u3.h3,
                                children: [
                                    (0, a.jsx)(y.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: u3.Wb,
                                        children: D ? ed.intl.string(eu.default.Yh5pAc) : L,
                                    }),
                                    null == _ || D
                                        ? null
                                        : (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                  (0, a.jsx)("span", {
                                                      className: u3.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, a.jsx)(y.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: u3.zM,
                                                      children: _,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            null != O ? (0, a.jsx)(k.A, { id: z, children: O.label }) : null,
            (0, a.jsx)("div", {
                className: u3.M2,
                children: D
                    ? (0, a.jsx)(C.y, { type: C.t.SPINNING_CIRCLE_SIMPLE })
                    : (0, a.jsxs)("div", {
                          className: u3.Pl,
                          children: [(0, a.jsx)(nd, { ...q, trigger: "iconButton" }), M.importInput],
                      }),
            }),
        ],
    });
}
function dn(e) {
    var t;
    let { project: l, projectsLoaded: r, onBack: s, guildId: o } = e,
        [u, d] = i.useState(!0),
        [f, h] = i.useState(!1),
        p = K.Q_.useSetting(),
        [g, j] = i.useState(null),
        [k, C] = i.useState(null),
        T = l?.id ?? null,
        P = i.useRef(T),
        M = i.useRef(!0),
        _ = i.useRef(!1),
        R = i.useRef(null);
    ((P.current = T),
        i.useEffect(
            () => (
                (M.current = !0),
                () => {
                    M.current = !1;
                }
            ),
            [],
        ));
    let L = (0, c.bG)([eM.Ay], () => (null == T ? null : eM.Ay.getIntegrationStatus(T)), [T]),
        { data: D, isLoading: O } = (0, z.YY)(l?.preview_application_id ?? void 0),
        F = null != T && k !== T,
        B = L?.preview_ready === !0,
        W = L?.has_activity === !0,
        {
            availability: Y,
            activeMode: J,
            setMode: Q,
            widgetApplicationId: Z,
        } = (function (e) {
            let {
                    applicationId: t,
                    previewApplicationId: n,
                    declaredActivity: l,
                    installScope: a,
                    ownerAuthorizationRevoked: r,
                    mainCardOnly: s = !1,
                } = e,
                [o, u] = i.useState(null),
                [d, m] = i.useState(t);
            d !== t && (m(t), u(null));
            let f = null != n && n === t ? n : null,
                h = (0, c.bG)([tN.default], () => tN.default.getId()),
                { applicationWidgetConfig: p } = (0, tC.A)(h, f ?? void 0),
                g = p?.surfaces,
                x = (0, tw.yZ)({
                    widgetTop: g?.[tk.m.WIDGET_TOP] != null,
                    widgetBottom: g?.[tk.m.WIDGET_BOTTOM] != null,
                    miniProfile: g?.[tk.m.MINI_PROFILE] != null,
                }),
                b = null != f && (s ? x.hasMainCard : x.hasAny),
                { data: v } = (0, z.YY)(n ?? void 0),
                y = null != n && v?.bot?.id != null,
                { data: j, isLoading: w } = (0, z.YY)(t ?? void 0),
                k = l || (0, tA.X)(j),
                C = null != t && w && null == j,
                A = (0, tw.Xm)({
                    installScope: a,
                    hasFrame: k,
                    hasProfileWidget: b,
                    hasBotDm: y,
                    ownerAuthorizationRevoked: r,
                });
            return {
                availability: A,
                isResolving: C,
                activeMode: C ? null : (0, tw.Qs)(o, A),
                setMode: u,
                widgetApplicationId: f,
            };
        })({
            applicationId: l?.preview_application_id ?? null,
            previewApplicationId: l?.preview_application_id ?? null,
            declaredActivity: W,
            installScope: l?.install_scope ?? null,
            ownerAuthorizationRevoked: L?.owner_authorization_revoked === !0,
        });
    (0, tj.x)(T, (e) => {
        Y.modes.includes(e) && Q(e);
    });
    let ee = Y.modes.includes("frame"),
        et = (0, tw.Qg)({
            installScope: l?.install_scope ?? null,
            previewReady: B,
            integrationInstalled: L?.integration_installed ?? null,
            botPermissionsChanged: L?.bot_permissions_changed === !0,
        }),
        en = u && !f,
        el = ed.intl.string(en ? eu.default.JD6Oit : eu.default.xjJAQm),
        ei = i.useCallback(() => {
            if (f) {
                (h(!1), d(!0));
                return;
            }
            d((e) => !e);
        }, [f]),
        er = i.useCallback(() => d(!1), []),
        { active: es } = ta(T);
    i.useEffect(() => {
        null != T && es && !ee && te(T);
    }, [T, es, ee]);
    let eo = i.useRef(null),
        ef = (0, ty.Zv)(T),
        ep = ed.intl.string(ef ? eu.default.Sme0T0 : es ? eu.default.vn5Rzu : eu.default["cl/Jyl"]),
        eg = i.useCallback(() => {
            if (null != T) {
                let e;
                if (es) return void te(T);
                (h(!1), d(!0), (e = e7(T)).active || e8(T, { ...e, active: !0 }));
            }
        }, [T, es]),
        ex = i.useCallback(() => {
            h((e) => !e && (d(!0), !0));
        }, []),
        eb = i.useCallback(() => h(!1), []),
        ej = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (null == l || _.current) return;
                let a = l.id;
                function i() {
                    return M.current && P.current === a;
                }
                ((_.current = !0),
                    h(!1),
                    d(!0),
                    j({ entry: e, status: "restoring" }),
                    (0, ea.oB)(a, e.sha)
                        .then(
                            async () => {
                                if (
                                    (n &&
                                        i() &&
                                        (0, x.P)(
                                            (0, b.o)(
                                                ed.intl.formatToPlainString(eu.default.Z4n6LX, {
                                                    title: (0, tr.T4)(e.subject).short,
                                                }),
                                                v.Ck.SUCCESS,
                                            ),
                                        ),
                                    null != t)
                                ) {
                                    let e = await (0, ts.c)(a, t);
                                    null != e && (0, x.P)((0, b.o)(e, v.Ck.FAILURE));
                                }
                                i() && j({ entry: e, status: "restored" });
                            },
                            (t) => {
                                i() &&
                                    (j({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", a, t),
                                    (0, x.P)((0, b.o)(ed.intl.string(eu.default["PSdo+w"]), v.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            i() && (_.current = !1);
                        }));
            },
            [l],
        ),
        ew = (0, c.bG)([tv.A], () => tv.A.isBuilderPreviewMobile()),
        eC = ed.intl.string(ew ? eu.default.tKGF0Q : eu.default.peqEOY),
        eA = i.useCallback(() => (0, eP.GG)(!ew), [ew]),
        eN = (0, c.bG)([tv.A], () => tv.A.isBuilderPreviewLandscape()),
        eS = ed.intl.string(eN ? eu.default.tunI2l : eu.default.DoNdjA),
        eE = i.useCallback(() => (0, eP.Lw)(!eN), [eN]),
        eI = (0, $.A)(l?.preview_application_id ?? null, tO.sd),
        eT = (0, tO.x1)(eI) && eI.data.proxyTicketRefreshing,
        e_ = i.useCallback(() => {
            null == eI || eT || q.A.refreshProxyTicket(eI.id);
        }, [eI, eT]),
        eR = i.useCallback(() => {
            var e, t;
            (null != l && ((e = l.id), (t = eI?.id), (0, ea.Bn)(e), (0, np.A)().leaveFrame(t)), s());
        }, [l, eI?.id, s]),
        eL = i.useCallback(() => {
            null != l && (d(!0), (0, ea.dv)(l.id, ed.intl.string(eu.default.oU20rd)));
        }, [l]),
        eD = eh(
            i.useCallback(
                (e) => {
                    if (null == l) return;
                    let t = l.id,
                        n = em(e);
                    null != n
                        ? (0, x.P)((0, b.o)(n, v.Ck.FAILURE))
                        : (0, m.A)({
                              title: ed.intl.formatToPlainString(eu.default["Gm+u1+"], { name: l.name }),
                              subtitle: ed.intl.string(eu.default.M7H3sJ),
                              confirmText: ed.intl.string(eu.default.gFHykw),
                              variant: "critical",
                              onConfirm: async () => {
                                  d(!0);
                                  try {
                                      await ec(t, e, ed.intl.string(eu.default.Owerd3));
                                  } catch {
                                      (0, x.P)((0, b.o)(ed.intl.string(eu.default["Q+l4Hv"]), v.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [l],
            ),
        ),
        eO = i.useCallback(() => {
            null != l && (0, n1.A)(l, o);
        }, [l, o]),
        eF = i.useCallback(async () => {
            if (null == T || P.current !== T) return;
            R.current?.abort();
            let e = new AbortController();
            ((R.current = e), C(null));
            try {
                await (0, eP.U1)(T, e.signal);
            } catch {
            } finally {
                e.signal.aborted || R.current !== e || P.current !== T || C(T);
            }
        }, [T]);
    i.useEffect(
        () => (
            eF(),
            () => {
                (R.current?.abort(), (R.current = null));
            }
        ),
        [eF],
    );
    let ez = nS(l ?? null, L ?? null, o),
        eU = ((t = l?.application_id ?? null), (0, c.bG)([nM.Ay], () => (null == t ? null : (0, ng.i8)(o, t)), [o, t])),
        eG = i.useMemo(() => (null == eU ? null : () => (0, V.pX)(ev.BVt.CHANNEL(o, eU))), [o, eU]),
        eq = i.useCallback(async () => {
            null != l && (await nE(l, ez));
        }, [ez, l]),
        e$ = i.useCallback(async () => {
            try {
                await eq();
            } catch {}
            await eF();
        }, [eF, eq]),
        eB = i.useMemo(() => {
            let e = l?.preview_application_id;
            return null == e || O || F
                ? null
                : {
                      ...(0, t$.i)({ applicationId: e, application: D ?? null, guildId: ez }),
                      onClose: () => {
                          e$();
                      },
                  };
        }, [F, e$, ez, O, D, l?.preview_application_id]),
        eH = et ? { type: "permissions", authorizeProps: eB } : F && null == L ? { type: "checking" } : void 0,
        eV = (0, c.bG)([eM.Ay], () => null != T && eM.Ay.isProjectDeleting(T), [T]);
    i.useEffect(() => {
        ((null == l && r) || eV) && (0, V.bG)(ev.BVt.CHANNEL(o, ey.VV.CONJURE));
    }, [o, l, r, eV]);
    let eW = i.useMemo(() => ({ guildId: o, platform: de, busy: F || O }), [o, F, O]),
        eK = nQ(T, eW),
        eX = eK?.intent === "open" && "channel" === eK.destination ? eK.appChannelId : null,
        eY = (0, c.bG)([X.A], () => (null == eX ? null : X.A.getChannel(eX)), [eX]),
        eJ = (0, U.Ay)(eY),
        eQ = (0, G.gU)(eY),
        eZ =
            null != eJ && null != eQ
                ? ed.intl.format(eu.default.gR7PUV, {
                      channel: eJ,
                      channelIconHook: (e, t) =>
                          (0, a.jsx)(eQ, { size: "xs", color: "currentColor", className: u3.Y2 }, t),
                  })
                : eK?.label,
        e0 = eK?.upToDate === !0 ? ed.intl.string(eu.default.X0kGp2) : (eK?.disabledReason ?? null),
        e2 =
            null == eK
                ? null
                : (0, a.jsx)("div", {
                      className: u3.As,
                      children: (0, a.jsx)(w.m, {
                          text: e0,
                          asContainer: !0,
                          children: (0, a.jsx)(A.$, {
                              size: "sm",
                              variant: eK.upToDate ? "secondary" : "primary",
                              loading: eK.publishing,
                              disabled: eK.disabled,
                              onClick: () => eK.run("header"),
                              text: eZ,
                          }),
                      }),
                  }),
        e1 = (0, a.jsx)(u0, {
            title: l?.name ?? ed.intl.string(eu.default.G1WwgK),
            breadcrumb: { title: ed.intl.string(eu.default.uk6jhJ), onClick: s },
            actions:
                null == l
                    ? null
                    : (0, a.jsxs)("div", {
                          className: u3.FO,
                          children: [
                              Y.showModeSwitch ? (0, a.jsx)(tq, { modes: Y.modes, mode: J, onChange: Q }) : null,
                              ee
                                  ? (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(H.A.Icon, {
                                                icon: ew ? u7 : u4,
                                                tooltip: eC,
                                                "aria-label": eC,
                                                selected: ew,
                                                onClick: eA,
                                            }),
                                            ew
                                                ? (0, a.jsx)(H.A.Icon, {
                                                      icon: u8,
                                                      tooltip: eS,
                                                      "aria-label": eS,
                                                      selected: eN,
                                                      onClick: eE,
                                                  })
                                                : null,
                                            (0, a.jsx)(H.A.Icon, {
                                                ref: eo,
                                                icon: N.x,
                                                iconClassName: u3.D8,
                                                tooltip: ep,
                                                "aria-label": ep,
                                                selected: es,
                                                disabled: ef,
                                                onClick: eg,
                                            }),
                                        ],
                                    })
                                  : null,
                              "frame" === J ? (0, a.jsx)(tF, { frame: eI, controlProjectId: l.id }) : null,
                              (0, a.jsx)("div", { className: u3.YJ }),
                              p
                                  ? (0, a.jsx)(H.A.Icon, {
                                        icon: S.BugIcon,
                                        tooltip: ed.intl.string(eu.default.Mt5k9d),
                                        "aria-label": ed.intl.string(eu.default.Mt5k9d),
                                        selected: f,
                                        onClick: ex,
                                    })
                                  : null,
                              (0, a.jsx)(H.A.Icon, {
                                  icon: E.SettingsIcon,
                                  tooltip: ed.intl.string(eu.default.I2XSKe),
                                  "aria-label": ed.intl.string(eu.default.I2XSKe),
                                  onClick: () => (0, na.A)(l.id, { guildId: o, isPreview: !0 }),
                              }),
                              (0, a.jsx)(nd, {
                                  projectId: l.id,
                                  projectName: l.name,
                                  guildId: o,
                                  projectGuildId: l.guild_id,
                                  isOwner: (0, eM.PV)(l),
                                  canRemix: (0, eM.H_)(l),
                                  onRefresh: (0, tO.x1)(eI) ? e_ : void 0,
                                  isRefreshing: eT,
                                  onClose: eR,
                                  onExport: eL,
                                  onImport: eD.open,
                                  onRemix: eO,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = l.id),
                                          void (0, ek.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("834460"),
                                                  n.e("960521"),
                                              ]).then(n.bind(n, 699760));
                                              return (n) => (0, a.jsx)(t, { ...n, projectId: e });
                                          })
                                      );
                                  },
                                  onHistory: () => {
                                      var e;
                                      return (
                                          (e = {
                                              projectId: l.id,
                                              installScope: l.install_scope,
                                              restoreDisabled: g?.status === "restoring",
                                              onRestoreVersion: (e, t) => ej(e, t, !0),
                                          }),
                                          void (0, ek.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("323079"),
                                                  n.e("437655"),
                                                  n.e("620019"),
                                                  n.e("586467"),
                                                  n.e("231782"),
                                                  n.e("551087"),
                                              ]).then(n.bind(n, 438834));
                                              return (n) => (0, a.jsx)(t, { ...n, ...e });
                                          })
                                      );
                                  },
                                  refreshApplicationId:
                                      Y.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== Y.profileState
                                          ? Z
                                          : null,
                                  previewProjectId: l.id,
                              }),
                              en
                                  ? null
                                  : (0, a.jsx)(H.A.Icon, { icon: u5, tooltip: el, "aria-label": el, onClick: ei }),
                          ],
                      }),
        });
    return (0, a.jsxs)("div", {
        className: u3.nj,
        children: [
            eD.input,
            (0, a.jsx)("main", {
                className: u3.JX,
                children:
                    null == l
                        ? (0, a.jsxs)("div", {
                              className: u3.j5,
                              children: [
                                  e1,
                                  (0, a.jsxs)("div", {
                                      className: u3.sD,
                                      children: [
                                          (0, a.jsx)(I.D, {
                                              variant: "heading-lg/semibold",
                                              children: ed.intl.string(eu.default.G1WwgK),
                                          }),
                                          (0, a.jsx)(y.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: ed.intl.string(eu.default.fINulo),
                                          }),
                                          (0, a.jsx)(A.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: ed.intl.string(eu.default["WFJ/vb"]),
                                              onClick: () => (0, eP.hF)(o),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(nU.Provider, {
                              value: eW,
                              children: (0, a.jsx)(
                                  uQ,
                                  {
                                      projectId: l.id,
                                      designFeedbackToggleRef: eo,
                                      applicationId: l.preview_application_id,
                                      previewApplicationId: l.preview_application_id,
                                      surface: tO.sd,
                                      header: e1,
                                      chatOpen: u,
                                      onCloseChat: er,
                                      chatHeaderAction: e2,
                                      debugOpen: p && f,
                                      onCloseDebug: eb,
                                      onRestoreVersion: ej,
                                      restoreState: g,
                                      previewReady: B,
                                      previewGate: eH,
                                      availability: Y,
                                      activeMode: J,
                                      widgetApplicationId: Z,
                                      onOpenPublishedApp: eG,
                                  },
                                  l.id,
                              ),
                          }),
            }),
        ],
    });
}
function dl(e) {
    let {
            projects: t,
            idea: l,
            guildId: r,
            submitting: o,
            createError: u,
            createDisabled: d,
            conjureTarget: m,
            onConjureTargetChange: f,
            nativeAppChannels: h,
            onNativeAppChannelsChange: p,
            eligibleGuilds: g,
            modelSettings: j,
            onModelSettingsChange: w,
            onSelectProject: k,
            onIdeaChange: N,
            onCreate: S,
            onCreateFromTemplate: E,
            onStartTemplate: I,
            onSubmitTemplate: F,
            onCancelTemplate: z,
            onSkipTemplate: U,
            onImportNewProject: G,
            importing: q,
        } = e,
        [$, B] = i.useState(() => ({ guildId: r, filter: ny(r) })),
        V = ($.guildId === r ? $.filter : ny(r)) ?? r,
        W = i.useCallback(
            (e) => {
                (nv.set(r, e), B({ guildId: r, filter: e }));
            },
            [r],
        ),
        K = (0, c.yK)(
            [J.A],
            () =>
                (function (e, t) {
                    let n = new Set([t]);
                    for (let t of e)
                        (null != t.guild_id && n.add(t.guild_id),
                            null != t.preview_guild_id && n.add(t.preview_guild_id));
                    let l = [];
                    for (let e of n) {
                        let t = J.A.getGuild(e);
                        null != t && l.push(t);
                    }
                    return l.sort((e, t) => e.name.localeCompare(t.name));
                })(t, r),
            [t, r],
        ),
        X = i.useMemo(
            () => [
                { id: "conjure-filter-all", value: "all", leading: D.D, label: ed.intl.string(eu.default["Xi/oIC"]) },
                {
                    id: "conjure-filter-user",
                    value: nx,
                    leading: ep.UserIcon,
                    label: ed.intl.string(eu.default.kCSgmG),
                },
                {
                    id: "conjure-filter-no-server",
                    value: nb,
                    leading: eg.R,
                    label: ed.intl.string(eu.default["3QFps8"]),
                },
                ...K.map((e) => ({
                    id: `conjure-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, a.jsx)(eX.Ay, { guild: e, size: eX.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [K],
        ),
        Y = (0, c.yK)(
            [eM.Ay, J.A],
            () => {
                let e = nj(V);
                if (null != e) return eM.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(J.A.getGuilds()))
                    eM.Ay.hasFetchedGuildProjects(e.id) && t.push(...eM.Ay.getSharedProjects(e.id));
                return t;
            },
            [V],
        );
    i.useEffect(() => {
        let e = nj(V);
        null == e || eM.Ay.hasFetchedGuildProjects(e) || (0, eP.hF)(e);
    }, [V]);
    let Q = i.useMemo(
            () =>
                Y.filter((e) => nw(e, V)).sort((e, t) =>
                    null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                ),
            [Y, V],
        ),
        ee = i.useMemo(
            () => [
                {
                    label: ed.intl.string(eu.default.NyVn6T),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: eY,
                            label: ed.intl.string(eu.default.UPLaGM),
                            leading: ep.UserIcon,
                        },
                        ...g.map((e) => ({
                            id: `conjure-target-${e.id}`,
                            value: e.id,
                            label: e.name,
                            leading: (0, a.jsx)(eX.Ay, { guild: e, size: eX.Ay.Sizes.MINI, active: !0 }),
                        })),
                    ],
                },
            ],
            [g],
        ),
        et = i.useMemo(
            () =>
                t
                    .filter((e) => nw(e, V))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, V],
        ),
        en = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, ng.Ot)(e, r)
                    ? k(e.id)
                    : (0, x.P)((0, b.o)(ed.intl.string(eu.default["XUl/cs"]), v.Ck.MESSAGE));
            },
            [r, k],
        ),
        el = ed.intl.string(eu.default.ab1sMf),
        ea = [
            ed.intl.string(eu.default["9w+Chc"]),
            ed.intl.string(eu.default.WAvmdq),
            ed.intl.string(eu.default.SKsrzl),
        ],
        ei = [
            {
                id: "moderation-bot",
                name: ed.intl.string(eu.default.lGLnE8),
                description: ed.intl.string(eu.default["pAC6k/"]),
                wizard: !0,
            },
            {
                id: "feature-showcase",
                name: ed.intl.string(eu.default.uJKQTs),
                description: ed.intl.string(eu.default["+dKy/B"]),
            },
            {
                id: "rust-sphere",
                name: ed.intl.string(eu.default.iF5Oru),
                description: ed.intl.string(eu.default.NbDDO6),
            },
        ],
        er = i.useCallback(
            (e) => {
                if (null != e.wizard) {
                    var t;
                    return void ((t = {
                        template: e,
                        guildId: r,
                        eligibleGuilds: g,
                        onStart: (t) => I(e.name, t),
                        onSubmit: (t, n, l) => F(e, t, n, l),
                        onCancel: z,
                        onSkip: U,
                    }),
                    (0, ek.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([n.e("881965"), n.e("166781")]).then(
                                n.bind(n, 790028),
                            );
                            return (n) => (0, a.jsx)(e, { ...n, ...t });
                        },
                        { modalKey: "ConjureTemplateWizardModal" },
                    ));
                }
                E(e);
            },
            [g, r, z, E, U, I, F],
        ),
        es = ed.intl.string(eu.default.zzYLlW),
        eo =
            (i.useEffect(() => {
                (0, eP.b8)();
            }, []),
            (0, c.bG)([eM.Ay], () => {
                let e = eM.Ay.getMaxProjects();
                return null != e && eM.Ay.hasFetchedOwnedProjects()
                    ? Math.max(0, e - eM.Ay.getOwnedProjects().length)
                    : null;
            })),
        ec = ed.intl.string(eu.default["2XcV3x"]),
        em = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), d || S());
            },
            [d, S],
        ),
        ef = nj(V) ?? r,
        eh = (0, c.bG)([eM.Ay], () => eM.Ay.getGuildProjectsFetchState(ef), [ef]),
        ex = (0, c.bG)([eM.Ay], () => eM.Ay.getGuildProjectsFetchState(r), [r]),
        [ev, ey] = i.useState(nA),
        ej = i.useMemo(() => nk.w.get(nN(r)) ?? !1, [r]),
        ew = "success" === ex,
        eC = (0, c.yK)([eM.Ay], () => eM.Ay.getSharedProjects(r), [r]).length > 0 || t.some((e) => nw(e, r)),
        eA = ev ?? (!!eC || "error" === ex || (!ew && ej));
    i.useEffect(() => {
        ew && nk.w.set(nN(r), eC);
    }, [ew, eC, r]);
    let eS = i.useCallback((e) => {
            (nk.w.set(nC, e), ey(e));
        }, []),
        eE = i.useCallback(() => eS(!eA), [eS, eA]),
        eT = i.useCallback(() => eS(!1), [eS]),
        eR = ed.intl.string(eu.default.kar7jh),
        eL = eA ? eR : ed.intl.string(eu.default.WSc5Y2);
    return (0, a.jsx)("div", {
        className: s()(u3.nj, u3.a0),
        children: (0, a.jsxs)("div", {
            className: u3.Yo,
            children: [
                (0, a.jsxs)("main", {
                    className: u3.ps,
                    children: [
                        (0, a.jsx)(u0, {
                            title: ed.intl.string(eu.default.uk6jhJ),
                            actions: (0, a.jsx)(H.A.Icon, {
                                icon: T.Z,
                                tooltip: eL,
                                "aria-label": eL,
                                selected: eA,
                                onClick: eE,
                            }),
                        }),
                        (0, a.jsx)(P.Ip, {
                            className: u3.Yy,
                            children: (0, a.jsx)("div", {
                                className: u3.Mo,
                                children: (0, a.jsxs)("section", {
                                    className: s()(u3.Qs, u3.Ix),
                                    children: [
                                        (0, a.jsx)(u9, {}),
                                        (0, a.jsx)(eK, {}),
                                        (0, a.jsxs)("section", {
                                            className: u3.WI,
                                            "aria-label": es,
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: u3.G9,
                                                    children: [
                                                        (0, a.jsx)(y.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: es,
                                                        }),
                                                        (0, a.jsx)(y.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: ed.intl.string(eu.default["N88+Ld"]),
                                                        }),
                                                    ],
                                                }),
                                                (0, a.jsx)(eF, {
                                                    listClassName: u3.Aw,
                                                    radius: eD,
                                                    children: ei.map((e) =>
                                                        (0, a.jsx)(
                                                            "li",
                                                            {
                                                                className: u3.EA,
                                                                children: (0, a.jsxs)(e_, {
                                                                    disabled: o,
                                                                    ariaLabel: ed.intl.formatToPlainString(
                                                                        eu.default.jGyR6p,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: s()(u3.nx, u3.rz),
                                                                    onClick: () => er(e),
                                                                    children: [
                                                                        (0, a.jsx)(y.E, {
                                                                            className: u3.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, a.jsx)(y.E, {
                                                                            className: u3.BK,
                                                                            variant: "text-sm/normal",
                                                                            color: "text-subtle",
                                                                            children: e.description,
                                                                        }),
                                                                    ],
                                                                }),
                                                            },
                                                            e.id,
                                                        ),
                                                    ),
                                                }),
                                            ],
                                        }),
                                        (0, a.jsxs)("section", {
                                            className: u3.WI,
                                            "aria-label": ec,
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: u3.G9,
                                                    children: [
                                                        (0, a.jsx)(y.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: ec,
                                                        }),
                                                        (0, a.jsx)(y.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: ed.intl.string(eu.default.JnJOAn),
                                                        }),
                                                    ],
                                                }),
                                                (0, a.jsx)(eF, {
                                                    listClassName: u3.Aw,
                                                    radius: eO,
                                                    children: ea.map((e) =>
                                                        (0, a.jsx)(
                                                            "li",
                                                            {
                                                                className: u3.EA,
                                                                children: (0, a.jsx)(e_, {
                                                                    disabled: o,
                                                                    className: u3.nx,
                                                                    onClick: () => S(e),
                                                                    children: (0, a.jsx)(y.E, {
                                                                        variant: "text-md/semibold",
                                                                        color: "text-strong",
                                                                        className: u3.un,
                                                                        children: e,
                                                                    }),
                                                                }),
                                                            },
                                                            e,
                                                        ),
                                                    ),
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(eN, {}),
                                    ],
                                }),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: u3.Yl,
                            children: (0, a.jsxs)("div", {
                                className: s()(u3.Qs, u3.DA),
                                children: [
                                    (0, a.jsx)(M.f, {
                                        label: el,
                                        hideLabel: !0,
                                        rows: 3,
                                        value: l,
                                        placeholder: el,
                                        error: u,
                                        onChange: N,
                                        onKeyDown: em,
                                    }),
                                    null != h
                                        ? (0, a.jsx)(_.S, {
                                              checked: h,
                                              disabled: o,
                                              onChange: () => p(!h),
                                              label: ed.intl.string(eu.default.qfAk5B),
                                              description: ed.intl.string(eu.default["mq+Pml"]),
                                          })
                                        : null,
                                    (0, a.jsxs)("div", {
                                        className: u3.VP,
                                        children: [
                                            (0, a.jsx)("div", {
                                                className: u3.gH,
                                                children: (0, a.jsx)(R.l, {
                                                    selectionMode: "single",
                                                    label: ed.intl.string(eu.default.NyVn6T),
                                                    hideLabel: !0,
                                                    placeholder: ed.intl.string(eu.default.NyVn6T),
                                                    options: ee,
                                                    value: m,
                                                    onSelectionChange: f,
                                                    disabled: o,
                                                }),
                                            }),
                                            null != eo
                                                ? (0, a.jsx)(y.E, {
                                                      variant: "text-sm/medium",
                                                      color: 0 === eo ? "text-feedback-warning" : "text-subtle",
                                                      children:
                                                          0 === eo
                                                              ? ed.intl.string(eu.default.s28pGG)
                                                              : ed.intl.formatToPlainString(eu.default.Wy5aK4, {
                                                                    count: eo,
                                                                }),
                                                  })
                                                : null,
                                            (0, a.jsx)(tb, {
                                                settings: j ?? Z.A4,
                                                tiers: Z.lO,
                                                choices: (0, eI.b)()
                                                    ? {
                                                          main: [...Z.vC.main, ...Z.XE.main],
                                                          subagent: [...Z.vC.subagent, ...Z.XE.subagent],
                                                          thinking: Z.vC.thinking,
                                                      }
                                                    : Z.vC,
                                                disabled: o,
                                                onChange: w,
                                            }),
                                            (0, a.jsx)(A.$, {
                                                variant: "primary",
                                                size: "md",
                                                text: ed.intl.string(ed.t.CumH4u),
                                                disabled: d,
                                                loading: o,
                                                onClick: () => S(),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)("aside", {
                    className: u3.pA,
                    hidden: !eA,
                    "aria-label": ed.intl.string(eu.default.dWgSAa),
                    children: [
                        (0, a.jsxs)("div", {
                            className: u3.IR,
                            children: [
                                (0, a.jsx)(y.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: u3.RM,
                                    children: ed.intl.string(eu.default.dWgSAa),
                                }),
                                (0, a.jsxs)("div", {
                                    className: u3.Ss,
                                    children: [
                                        (0, a.jsx)(eb, { importing: q, onImport: G }),
                                        (0, a.jsx)(H.A.Icon, { icon: L.P, tooltip: eR, "aria-label": eR, onClick: eT }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsxs)(P.Ip, {
                            className: u3.xe,
                            children: [
                                (0, a.jsx)("div", {
                                    className: u3.Vw,
                                    children: (0, a.jsx)(R.l, {
                                        selectionMode: "single",
                                        label: ed.intl.string(eu.default.U6TqU9),
                                        hideLabel: !0,
                                        options: X,
                                        value: V,
                                        onSelectionChange: W,
                                    }),
                                }),
                                (0, a.jsx)(y.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: u3.wE,
                                    children: ed.intl.string(eu.default.JQpNkh),
                                }),
                                ("unattempted" === eh || "loading" === eh) && 0 === et.length
                                    ? (0, a.jsx)("div", { className: u3.E8, children: (0, a.jsx)(C.y, {}) })
                                    : "error" === eh && 0 === et.length
                                      ? (0, a.jsxs)("div", {
                                            className: u3.E8,
                                            children: [
                                                (0, a.jsx)(y.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: u3.JS,
                                                    children: ed.intl.string(eu.default.DJAPMO),
                                                }),
                                                (0, a.jsx)(A.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: ed.intl.string(eu.default["WFJ/vb"]),
                                                    onClick: () => (0, eP.hF)(ef),
                                                }),
                                            ],
                                        })
                                      : 0 === et.length
                                        ? (0, a.jsx)("div", {
                                              className: u3.D1,
                                              children: (0, a.jsxs)("div", {
                                                  className: u3.ST,
                                                  children: [
                                                      (0, a.jsx)(D.D, { size: "lg", color: O.A.colors.TEXT_SUBTLE }),
                                                      (0, a.jsx)(y.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: u3.sI,
                                                          children: ed.intl.string(eu.default["9/5sLV"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, a.jsx)("div", {
                                              className: u3.Dq,
                                              children: et.map((e) =>
                                                  (0, a.jsx)(
                                                      dt,
                                                      {
                                                          project: e,
                                                          guildId: r,
                                                          onSelect: () => en(e),
                                                          onRemix: () => (0, n1.A)(e, r),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          }),
                                Q.length > 0
                                    ? (0, a.jsxs)("div", {
                                          className: u3.qx,
                                          children: [
                                              (0, a.jsxs)("div", {
                                                  className: u3.uc,
                                                  children: [
                                                      (0, a.jsx)(y.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-strong",
                                                          children: ed.intl.string(eu.default["wFi8+o"]),
                                                      }),
                                                      (0, a.jsx)(y.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          children: ed.intl.string(eu.default.dQ3U1J),
                                                      }),
                                                  ],
                                              }),
                                              (0, a.jsx)("div", {
                                                  className: u3.Dq,
                                                  children: Q.map((e) =>
                                                      (0, a.jsx)(
                                                          dt,
                                                          {
                                                              project: e,
                                                              guildId: r,
                                                              onSelect: () => en(e),
                                                              onRemix: () => (0, n1.A)(e, r),
                                                              shared: !0,
                                                          },
                                                          e.id,
                                                      ),
                                                  ),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function da(e) {
    let t,
        { guildId: n, projectId: l } = e,
        r = (0, c.yK)([eM.Ay], () => eM.Ay.getOwnedProjects()),
        s = (0, c.yK)([Y.Ay], () => Y.Ay.getSelfMember(n)?.roles ?? [], [n]),
        o = (0, c.bG)(
            [J.A, Q.A],
            () => {
                let e = J.A.getGuild(n);
                return null != e && Q.A.can(ev.xBc.MANAGE_GUILD, e);
            },
            [n],
        ),
        [u, d] = i.useState(""),
        m = l ?? null,
        [f, h] = i.useState(!1),
        [p, g] = i.useState(null),
        y = (0, tZ.z)("VibegrationsScreen"),
        [j, w] = i.useState(null);
    i.useEffect(() => {
        w(null);
    }, [n]);
    let k = i.useMemo(() => (y.some((e) => e.id === n) ? n : eY), [y, n]),
        C = j ?? k,
        A = C === eY ? "user" : "guild",
        N = C === eY ? n : C,
        [S, E] = i.useState(!0),
        [I, T] = i.useState(null);
    (i.useEffect(() => {
        (0, eP.hF)(n);
    }, [n, s, o]),
        i.useEffect(() => {
            (0, eP.dm)(n, m);
        }, [n, m]));
    let P = i.useCallback(
            async (e, t, n) => {
                let l = await (0, eP.gA)({ guild_id: t, install_scope: n, flags: (0, Z.wo)("guild" === n && S) });
                ((0, ea.Hc)(l),
                    (0, ea.r2)(l, I ?? Z.A4),
                    e(l),
                    (0, V.pX)(ev.BVt.CHANNEL(t, ey.VV.CONJURE, l)),
                    d(""),
                    T(null));
            },
            [S, I],
        ),
        M = i.useCallback(
            async (e) => {
                let t = (e ?? u).trim(),
                    n = eT({ idea: t, installScope: A, submitting: f });
                if ("idea" !== n && "submitting" !== n) {
                    (null != e && d(e), h(!0), g(null));
                    try {
                        await P((e) => (0, ea.dv)(e, t), N, A);
                    } catch (e) {
                        g((0, eE.mG)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [P, A, N, u, f],
        ),
        _ = i.useCallback(
            async (e) => {
                if (!f) {
                    (h(!0), g(null));
                    try {
                        await P(
                            (t) => {
                                var n;
                                (0, ea.dv)(
                                    t,
                                    ((n = e.name),
                                    ed.intl.formatToPlainString(eu.default["0PQip6"], { templateName: n })),
                                    void 0,
                                    { templateId: e.id },
                                );
                            },
                            N,
                            A,
                        );
                    } catch (e) {
                        g((0, eE.mG)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [P, A, N, f],
        ),
        R = i.useCallback(
            async (e, t) => {
                let n = await (0, eP.gA)({ guild_id: t, install_scope: "guild", flags: (0, Z.wo)(S) });
                return ((0, ea.Hc)(n), (0, ea.r2)(n, I ?? Z.A4), (0, ea.dv)(n, (0, n6.Wl)(e)), n);
            },
            [S, I],
        ),
        L = i.useCallback(async (e, t, n, l) => {
            if (eM.Ay.getProject(t)?.guild_id !== n) {
                let e = await (0, eP.M7)(t, { guild_id: n, preview_guild_id: n });
                if (!e.ok) throw new eE.DS((0, eE.hj)(e), e.status);
            }
            ((0, ea.dv)(t, l, void 0, { templateId: e.id }), (0, V.pX)(ev.BVt.CHANNEL(n, ey.VV.CONJURE, t)), T(null));
        }, []),
        D = i.useCallback((e) => {
            (0, eP.xx)(e).catch(() => void 0);
        }, []),
        O = i.useCallback(
            (e) => {
                let t = eM.Ay.getProject(e)?.guild_id ?? n;
                ((0, V.pX)(ev.BVt.CHANNEL(t, ey.VV.CONJURE, e)), T(null));
            },
            [n],
        ),
        [F, z] = i.useState(!1),
        U = i.useCallback(
            async (e, t) => {
                let l = em(e);
                if (null != l) return void (0, x.P)((0, b.o)(l, v.Ck.FAILURE));
                z(!0);
                let a = null;
                try {
                    ((a = await (0, eP.gA)({ guild_id: n, install_scope: t, flags: (0, Z.wo)("guild" === t && S) })),
                        (0, ea.Hc)(a),
                        (0, ea.r2)(a, I ?? Z.A4),
                        await ec(a, e, ed.intl.string(eu.default["LUc7/5"])),
                        (0, V.pX)(ev.BVt.CHANNEL(n, ey.VV.CONJURE, a)),
                        T(null));
                } catch {
                    (null != a && (await (0, eP.xx)(a).catch(() => void 0)),
                        (0, x.P)((0, b.o)(ed.intl.string(eu.default["Q+l4Hv"]), v.Ck.FAILURE)));
                } finally {
                    z(!1);
                }
            },
            [n, S, I],
        ),
        G = i.useCallback(
            (e) => {
                (0, V.pX)(ev.BVt.CHANNEL(n, ey.VV.CONJURE, e));
            },
            [n],
        ),
        q = i.useCallback(() => {
            (0, V.pX)(ev.BVt.CHANNEL(n, ey.VV.CONJURE));
        }, [n]),
        $ = i.useCallback((e) => {
            (d(e), g(null));
        }, []),
        B = (0, c.bG)(
            [eM.Ay],
            () => {
                if (null == m) return null;
                let e = eM.Ay.getProject(m);
                return null == e || (0, eM.PV)(e) || e.guild_id === n ? e : null;
            },
            [m, n],
        ),
        H = (0, c.bG)([eM.Ay], () => eM.Ay.hasFetchedGuildProjects(n), [n]);
    return null != m
        ? (0, a.jsx)(dn, { project: B, projectsLoaded: H, onBack: q, guildId: n }, m)
        : (0, a.jsx)(dl, {
              projects: r,
              modelSettings: I,
              onModelSettingsChange: T,
              idea: u,
              guildId: n,
              submitting: f,
              createError: p,
              createDisabled: "idea" === (t = eT({ idea: u, installScope: A, submitting: f })) || "submitting" === t,
              onSelectProject: G,
              onIdeaChange: $,
              onCreate: M,
              onCreateFromTemplate: _,
              onStartTemplate: R,
              onSubmitTemplate: L,
              onCancelTemplate: D,
              onSkipTemplate: O,
              onImportNewProject: U,
              importing: F,
              conjureTarget: C,
              onConjureTargetChange: w,
              nativeAppChannels: "guild" === A ? S : null,
              onNativeAppChannelsChange: E,
              eligibleGuilds: y,
          });
}
