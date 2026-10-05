(n.r(t), n.d(t, { default: () => u4 }), n(321073));
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
    g = n(739187),
    x = n(857250),
    b = n(97483),
    v = n(834730),
    j = n(939249),
    y = n(866665),
    w = n(140735),
    k = n(289873),
    C = n(821609),
    A = n(604525),
    N = n(92446),
    S = n(625903),
    E = n(297264),
    I = n(97893),
    T = n(364522),
    P = n(103557),
    M = n(150934),
    _ = n(691885),
    R = n(789645),
    L = n(152367),
    D = n(661531),
    O = n(442433),
    F = n(627363),
    z = n(47167),
    U = n(713654),
    G = n(625180),
    q = n(672929),
    $ = n(775946),
    B = n(742589),
    H = n(976860),
    V = n(402860),
    W = n(885386),
    K = n(734057),
    X = n(696451),
    Y = n(71393),
    J = n(576705),
    Q = n(164892),
    Z = n(922016),
    ee = n(980707),
    et = n(477782),
    en = n(81369),
    el = n(712808);
(n(323874), n(14289), n(35956));
var ea = n(77729),
    ei = n(723702),
    er = n(264572).Buffer;
async function es(e, t) {
    if (ei.isPlatformEmbedded) {
        let n = er.from(await e.arrayBuffer());
        if ("function" == typeof ea.A.fileManager.saveWithDialog2) await ea.A.fileManager.saveWithDialog2(n, t);
        else
            try {
                await ea.A.fileManager.saveWithDialog(n, t);
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
var eo = n(248675),
    eu = n(375708);
async function ed(e, t, n) {
    (0, el.Hc)(e);
    let l = await (0, el.vX)(e, t);
    (0, el.dv)(e, n, [l]);
}
function ec(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, Q.Oq)(e.size, t)
        ? null
        : eu.intl.formatToPlainString(eo.default.ThxcOX, { size: (0, Q.sM)((0, Q.Ju)(t)) });
}
async function em(e, t) {
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
        a = await (0, el.cS)(e, l);
    await es(a, l);
}
function ef(e) {
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
var eh = n(950305),
    ep = n(664121);
let eg = [
    { value: "user", icon: eh.UserIcon, nameMessage: eo.default.s1TsXl },
    { value: "guild", icon: ep.R, nameMessage: eo.default.LlLIJw },
];
function ex(e) {
    let { importing: t, onImport: n } = e,
        l = i.useRef(null),
        r = ef(i.useCallback((e) => n(e, "user"), [n])),
        s = ef(i.useCallback((e) => n(e, "guild"), [n])),
        o = { user: r.open, guild: s.open };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(Z.Y, {
                targetElementRef: l,
                position: "bottom",
                align: "right",
                animation: Z.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, a.jsx)(ee.W, {
                        "data-menu-migrated": !0,
                        navId: "conjure-import-scope",
                        "aria-label": eu.intl.string(eo.default.soVyD1),
                        onClose: t,
                        onSelect: t,
                        children: (0, a.jsx)(et.rX, {
                            label: eu.intl.string(eo.default.NyVn6T),
                            children: eg
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: eu.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, a.jsx)(
                                        et.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: o[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, n) => {
                    let { isShown: i } = n;
                    return (0, a.jsx)(C.$, {
                        ...e,
                        buttonRef: l,
                        variant: "secondary",
                        size: "sm",
                        icon: en.H,
                        text: eu.intl.string(eo.default.NJGZA3),
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
var eb = n(652215),
    ev = n(746080),
    ej = n(58703),
    ey = n(757704),
    ew = n(192308);
function ek() {
    (0, ew.openModalLazy)(
        async () => {
            let { default: e } = await n.e("492663").then(n.bind(n, 839914));
            return (t) => (0, a.jsx)(e, { ...t });
        },
        { modalKey: "conjure-changelog" },
    );
}
var eC = n(335520);
function eA() {
    let e = (0, ey.Kk)("desktop");
    if (0 === e.length) return null;
    let t = eu.intl.string(eo.default.bTBUeX);
    return (0, a.jsxs)("section", {
        className: eC.rN,
        "aria-label": t,
        children: [
            (0, a.jsxs)("div", {
                className: eC.bZ,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: eu.intl.string(eo.default["ZM/VB/"]),
                    }),
                ],
            }),
            (0, a.jsx)("ol", {
                className: eC.V,
                children: e.map((e) =>
                    (0, a.jsxs)(
                        "li",
                        {
                            className: eC.S3,
                            children: [
                                (0, a.jsxs)(v.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: eC.VO,
                                    children: [
                                        (0, ej.i$)(u()(e.date, "YYYY-MM-DD"), "LL"),
                                        (0, ey.t9)(e) ? ` \xb7 ${eu.intl.string(eo.default.cW5XHD)}` : null,
                                    ],
                                }),
                                (0, a.jsx)(v.E, {
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
            (0, ey.ug)("desktop")
                ? (0, a.jsx)(C.$, {
                      variant: "secondary",
                      size: "sm",
                      text: eu.intl.string(eo.default.EwU5zF),
                      onClick: ek,
                  })
                : null,
        ],
    });
}
var eN = n(404373),
    eS = n(639519),
    eE = n(361504);
function eI(e) {
    let { idea: t, installScope: n, submitting: l } = e;
    return l ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
}
var eT = n(371169),
    eP = n(260498);
function eM(e) {
    let { className: t, ariaLabel: n, disabled: l, onClick: i, children: r } = e;
    return (0, a.jsx)(j.D, { "aria-disabled": l, "aria-label": n, className: t, onClick: l ? void 0 : i, children: r });
}
var e_ = n(865665),
    eR = n(373913);
let eL = { x: 5, y: 7 },
    eD = { x: 5, y: 4 };
function eO(e) {
    let { listClassName: t, radius: n, children: l } = e,
        [r, s] = i.useState(!1);
    return (0, a.jsxs)("div", {
        className: eR.n,
        onMouseEnter: () => s(!0),
        onMouseLeave: () => s(!1),
        children: [
            (0, a.jsx)("ol", { className: t, children: l }),
            r ? (0, a.jsx)(e_.C, { area: 64, radius: n, color: D.A.colors.TEXT_BRAND }) : null,
        ],
    });
}
var eF = n(864970),
    ez = n(707554),
    eU = n(770178),
    eG = n(765548),
    eq = n(595528),
    e$ = n(885576),
    eB = n(662429);
let eH = "heading-xxl/semibold",
    eV = !1;
function eW() {
    let e = i.useRef(null),
        [t, n] = i.useState(!0),
        l = (0, eG.A)((e) => {
            n(e.target.clientWidth >= 500);
        }),
        r = (0, eU.w)(l, [], { fireOnMount: !0 }),
        s = (0, c.bG)([eq.A], () => eq.A.isConnected());
    i.useEffect(() => {
        if (!s || !t || eV) return;
        let n = !1,
            l = 0;
        function a() {
            n ||
                (l = window.setTimeout(() => {
                    ((eV = !0), e.current?.play());
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
    let o = (0, c.bG)([e$.A], () => e$.A.isIdle()),
        u = i.useRef(o);
    i.useEffect(() => {
        let t = u.current && !o;
        ((u.current = o), t && eV && (e.current?.stop(), e.current?.play()));
    }, [o]);
    let d = eu.intl.string(eo.default["+5XyCR"]);
    return (0, a.jsx)("div", {
        ref: r,
        className: eB.x,
        children: t
            ? (0, a.jsx)(ez.H, { children: (0, a.jsx)(eF.o, { ref: e, text: d, variant: eH, delay: null }) })
            : (0, a.jsx)(E.D, { variant: eH, children: d }),
    });
}
var eK = n(548118);
let eX = "user",
    eY = Object.freeze({ x: 0.5, y: 0.5 });
function eJ(e) {
    return "" !== e.trim();
}
function eQ(e) {
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
function eZ(e) {
    let { kind: t, name: n } = eQ(e);
    return [t, n].filter((e) => "" !== e).join(" ");
}
function e0(e) {
    let t = [`<${e.tag}>`];
    "" !== e.role && t.push(`role=${e.role}`);
    let n = e.name.trim();
    return (
        "" !== n && t.push(`name="${n}"`),
        null != e.value && "" !== e.value && t.push(`value="${e.value}"`),
        null != e.path && "" !== e.path && t.push(`path="${e.path}"`),
        t.push(`at x=${e.rect.x} y=${e.rect.y}`),
        t.push(`size ${e.rect.width}x${e.rect.height}`),
        t.push(`ref=${e.ref}`),
        t.join(" ")
    );
}
let e2 = "[vibegrations:selected] ",
    e1 = " \u2014 ";
function e6(e) {
    if (!e.startsWith(e2)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        a = n.slice(e2.length),
        i = a.indexOf(e1),
        r = (-1 === i ? a : a.slice(0, i)).trim();
    return "" === r ? null : { label: r, body: l };
}
let e9 = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    e3 = new Map(),
    e5 = new Set();
function e4(e) {
    return e3.get(e) ?? e9;
}
function e7(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? e3.set(e, t) : e3.delete(e), [...e5]))
        try {
            n();
        } catch (e) {
            console.error("[vibegrations] design feedback subscriber threw", e);
        }
}
function e8(e) {
    e3.has(e) && e7(e, e9);
}
function te(e, t) {
    let n = e4(e);
    n.active && e7(e, { ...n, context: t });
}
function tt(e, t) {
    return null != t && e.authorId === t;
}
function tn(e) {
    return (
        e5.add(e),
        () => {
            e5.delete(e);
        }
    );
}
function tl(e) {
    let t = i.useCallback(() => (null == e ? e9 : e4(e)), [e]);
    return i.useSyncExternalStore(tn, t, t);
}
var ta = n(855793),
    ti = n(128761),
    tr = n(967008),
    ts = n(900797),
    to = n(320448),
    tu = n(783977),
    td = n(344587),
    tc = n(534554),
    tm = n(837984),
    tf = n(359589),
    th = n(254575);
function tp(e) {
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
function tg(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: o, placement: u, open: d, entered: c } = e,
        [m, f] = i.useState(!1),
        h = tp(m),
        p = Q.PY.indexOf(t.tier),
        g = m ? ts.t : to._,
        x = Q.PY.map(tc.D0),
        b = (0, tc.Tc)(t.tier),
        { text: j, phase: y } = (0, td.Q)(b);
    return (0, a.jsx)("div", {
        className: th.qd,
        "data-placement": u ?? void 0,
        children: (0, a.jsxs)("div", {
            className: s()(th.t$, { [th.Zr]: d && c, [th.GF]: !d }),
            role: "dialog",
            "aria-label": eu.intl.string(eo.default["3E7Yc0"]),
            children: [
                h.mounted
                    ? (0, a.jsx)("div", {
                          className: s()(th.Nr, th.uO, { [th.Zr]: m && h.entered, [th.GF]: !m }),
                          children: (0, a.jsx)(tf.bR, { settings: t, tiers: n, choices: l, disabled: r, onChange: o }),
                      })
                    : null,
                (0, a.jsxs)("div", {
                    className: `${th.Nr} ${th.rF}`,
                    children: [
                        (0, a.jsxs)("div", {
                            className: th.wx,
                            children: [
                                (0, a.jsxs)("button", {
                                    type: "button",
                                    className: th.y6,
                                    "aria-expanded": m,
                                    "aria-label": eu.intl.string(eo.default.eGqPbV),
                                    onClick: () => f((e) => !e),
                                    children: [
                                        (0, a.jsx)(v.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: eu.intl.string(eo.default.aBPQxX),
                                        }),
                                        (0, a.jsx)(g, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: th.vg,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(v.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: s()(th.Z, { [th.xQ]: "exit" === y, [th.lm]: "enter" === y }),
                                    children: j,
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: th.hs,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: th.Nb,
                                    children: [
                                        (0, a.jsx)(v.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: eu.intl.string(eo.default["/tlOR5"]),
                                        }),
                                        (0, a.jsx)(v.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: eu.intl.string(eo.default.FxoUwB),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(tm.A, {
                                    activeIndex: p,
                                    stops: x,
                                    ariaLabel: eu.intl.string(eo.default.aBPQxX),
                                    disabled: r,
                                    onSelect: function (e) {
                                        let n = Q.PY[e];
                                        null != n && n !== t.tier && o((0, tc.CM)((0, tc.j6)(t, n)));
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
function tx(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: s, className: o, icon: u } = e,
        d = i.useRef(null),
        [c, m] = (0, tf.FT)(t, s),
        [f, h] = i.useState(!1),
        { mounted: p, entered: g } = tp(f);
    return (0, a.jsx)(Z.Y, {
        targetElementRef: d,
        position: "top",
        align: "right",
        shouldShow: p,
        onRequestClose: () => h(!1),
        animation: Z.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, a.jsx)(tg, {
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
            return (0, a.jsx)(y.m, {
                text: eu.intl.string(eo.default["k2JN/p"]),
                shouldShow: !n,
                ariaHidden: !0,
                children: (0, a.jsx)(j.D, {
                    innerRef: d,
                    className: o ?? th.hZ,
                    "aria-label": eu.intl.string(eo.default["k2JN/p"]),
                    ...e,
                    onClick: () => h((e) => !e),
                    "aria-expanded": f,
                    children: u ?? (0, a.jsx)(tu.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
var tb = n(111534),
    tv = n(573083),
    tj = n(855859),
    ty = n(238490),
    tw = n(598748),
    tk = n(294323),
    tC = n(25451),
    tA = n(280450),
    tN = n(86147),
    tS = n(729475),
    tE = n(91242),
    tI = n(869146),
    tT = n(475815),
    tP = n(621466);
function tM(e) {
    return null == e ? null : document.querySelector(`[data-frame-id="${CSS.escape(e)}"]`);
}
function t_(e) {
    let t;
    return (
        null != e &&
        ((t =
            document.fullscreenElement ??
            document.webkitFullscreenElement ??
            document.mozFullScreenElement ??
            document.msFullscreenElement ??
            null),
        ((0, tP.vq)(t, Element) ? t.getAttribute("data-frame-id") : null) === e)
    );
}
function tR(e) {
    return (0, tT.a3)(document, e);
}
function tL(e) {
    return i.useSyncExternalStore(tR, () => t_(e));
}
var tD = n(165610);
function tO(e) {
    let { frame: t, controlProjectId: n } = e,
        l = tL(t?.id ?? null),
        i = (0, tv.Zv)(n),
        r = (0, c.bG)(
            [tI.A, tE.A],
            () => null != t && tI.A.getWindowOpen(eb.MLl.ACTIVITY_POPOUT) && tE.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, tD.x1)(t) || r || i) return null;
    let s = tM(t.id);
    if (null == s || !(0, tT.Ub)(s)) return null;
    let o = eu.intl.string(l ? eu.t.Z7MyNB : eu.t.OIDkcp);
    return (0, a.jsx)(B.A.Icon, {
        tooltip: o,
        icon: l ? tN.z : tS.T,
        "aria-label": o,
        role: "switch",
        "aria-checked": l,
        selected: l,
        onClick: () => {
            var e;
            let n;
            null != (n = tM((e = t.id))) && (0, tT.Ub)(n) && (t_(e) ? (0, tT.sP)(n) : (0, tT.tl)(n));
        },
    });
}
var tF = n(629584),
    tz = n(696645),
    tU = n(861899);
function tG(e) {
    let { modes: t, mode: n, onChange: l, className: r } = e,
        o = i.useMemo(() => t.map((e) => ({ value: e, name: (0, tz.kZ)(e), "aria-controls": (0, tz.z3)(e) })), [t]),
        u = i.useCallback(
            (e) => {
                l(e.value);
            },
            [l],
        );
    return null == n
        ? null
        : (0, a.jsx)(tF.I, {
              role: "tablist",
              look: "pill",
              className: s()(tU.b, r),
              optionClassName: tU.u,
              options: o,
              value: n,
              onChange: u,
          });
}
var tq = n(226178),
    t$ = n(434279),
    tB = n(287809),
    tH = n(427262),
    tV = n(245179),
    tW = n(803306);
let tK = new Set(),
    tX = new Map();
function tY(e, t, n) {
    return null == e ? (n ?? null) : (t ?? null);
}
function tJ(e) {
    if (null == e || tK.has(e) || null != tB.default.getUser(e)) return;
    let t = tX.get(e) ?? 0;
    t >= 3 ||
        (tX.set(e, t + 1),
        tK.add(e),
        tW
            .wz(e)
            .finally(() => tK.delete(e))
            .catch(() => {}));
}
var tQ = n(16619),
    tZ = n(782603),
    t0 = n(780338),
    t2 = n(663417),
    t1 = n(70688),
    t6 = n(173936),
    t9 = n(473935),
    t3 = n(408278),
    t5 = n(365199),
    t4 = n(7437),
    t7 = n(147036),
    t8 = n(957565),
    ne = n(785389),
    nt = n(123917);
let nn = new Set();
var nl = n(616334),
    na = n(189714),
    ni = n(552821);
let nr = [];
function ns(e) {
    (0, g.P)((0, x.o)(e, b.Ck.FAILURE));
}
function no(e) {
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
            onRefresh: v,
            isRefreshing: j = !1,
            onClose: y,
            refreshApplicationId: w,
            previewProjectId: k,
            onCloseMenu: C,
        } = e,
        A = (0, na.iI)(t),
        { pending: N, refresh: E } = (0, t4.A)(w ?? null),
        { pending: I, connect: T } = (function (e, t) {
            let [n, l] = i.useState(nn),
                a = i.useRef(nn),
                r = i.useCallback((e) => {
                    ((a.current = (0, ne.Q6)(a.current, e)), l(a.current));
                }, []);
            return {
                pending: n,
                connect: i.useCallback(
                    (n) => {
                        if (null == e) return;
                        let i = (0, ne.K9)(a.current, n.type);
                        async function s() {
                            let l = await (0, el.JI)(e, n.type);
                            (r(n.type), "url" === l.type)
                                ? (0, nt.h)({ href: l.url, trusted: !1 })
                                : t(
                                      "setup" === (0, ne.rq)(l.error)
                                          ? eu.intl.string(eo.default["jCQ/1B"])
                                          : eu.intl.string(eo.default.POxkSh),
                                  );
                        }
                        null != i && ((a.current = i), l(i), s().catch(() => r(n.type)));
                    },
                    [t, e, r],
                ),
            };
        })(k ?? null, ns),
        P = (0, c.bG)([el.Ay], () => (null == k ? nr : el.Ay.getDeclaredConnections(k))),
        M = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: l, connectPending: a } = e,
                i = [];
            for (let { connection: e, offer: r } of (t &&
                i.push({
                    id: "preview-refresh",
                    label: eu.intl.string(eo.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            l))
                i.push(
                    "authorize" === r
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: eu.intl.formatToPlainString(eo.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: a.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: eu.intl.formatToPlainString(eo.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return i;
        })({
            canRefresh: null != w,
            refreshPending: N,
            offers: i.useMemo(() => (0, ne.Xl)(P), [P]),
            connectPending: I,
        }),
        _ = i.useMemo(() => new Map(P.map((e) => [e.type, e])), [P]),
        R = null != f && o,
        L = s && null != d,
        D = R || null != u || L || null != h || null != p,
        O = t8.p5 && null != l,
        F = t8.p5,
        z = A ? tZ.BellIcon : t0.BellSlashIcon;
    return (0, a.jsxs)(ee.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": eu.intl.string(eu.t.ogxXGq),
        onClose: C,
        onSelect: C,
        children: [
            null != v || null != y
                ? (0, a.jsxs)(et.rX, {
                      children: [
                          null != v
                              ? (0, a.jsx)(et.Dr, {
                                    id: "refresh",
                                    icon: t2.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: t2.RefreshIcon },
                                    label: eu.intl.string(eo.default["p4B/7M"]),
                                    disabled: j,
                                    action: v,
                                })
                              : null,
                          null != y
                              ? (0, a.jsx)(et.Dr, {
                                    id: "close",
                                    icon: t1.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: t1.DoorExitIcon },
                                    label: eu.intl.string(eo.default["/TlGcK"]),
                                    action: y,
                                })
                              : null,
                      ],
                  })
                : null,
            M.length > 0
                ? (0, a.jsx)(et.rX, {
                      children: M.map((e) =>
                          (0, a.jsx)(
                              et.Dr,
                              {
                                  id: e.id,
                                  label: e.label,
                                  disabled: e.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === e.kind) return void E();
                                      let t = null == e.connectionType ? null : _.get(e.connectionType);
                                      null != t && T(t);
                                  },
                              },
                              e.id,
                          ),
                      ),
                  })
                : null,
            (0, a.jsx)(et.rX, {
                children: (0, a.jsx)(et.Dr, {
                    id: "mute",
                    label: eu.intl.string(A ? eo.default.s9rCuH : eo.default["a+i/As"]),
                    icon: z,
                    leadingAccessory: { type: "icon", icon: z },
                    action: () => (0, na.$L)(t, !A),
                }),
            }),
            D
                ? (0, a.jsxs)(et.rX, {
                      children: [
                          R
                              ? (0, a.jsx)(et.Dr, { id: "remix", label: eu.intl.string(eo.default.XWgAfc), action: f })
                              : null,
                          null != u
                              ? (0, a.jsx)(et.Dr, { id: "export", label: eu.intl.string(eo.default.WsEEP7), action: u })
                              : null,
                          L
                              ? (0, a.jsx)(et.Dr, { id: "import", label: eu.intl.string(eo.default.rWGY3e), action: d })
                              : null,
                          null != h
                              ? (0, a.jsx)(et.Dr, {
                                    id: "connect-tool",
                                    label: eu.intl.string(eo.default.yOIql5),
                                    action: h,
                                })
                              : null,
                          null != p
                              ? (0, a.jsx)(et.Dr, {
                                    id: "history",
                                    label: eu.intl.string(eo.default["3hIVou"]),
                                    action: p,
                                })
                              : null,
                      ],
                  })
                : null,
            F
                ? (0, a.jsxs)(et.rX, {
                      children: [
                          O
                              ? (0, a.jsx)(et.Dr, {
                                    id: "copy-link",
                                    label: eu.intl.string(eu.t.WqhZss),
                                    icon: t6.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: t6.LinkIcon },
                                    action: () =>
                                        (0, t8.C)((0, t7.n)(l, ev.VV.CONJURE, t), () =>
                                            (0, g.P)((0, x.o)(eu.intl.string(eu.t["L/PwZf"]), b.Ck.SUCCESS)),
                                        ),
                                })
                              : null,
                          (0, a.jsx)(et.Dr, {
                              id: "copy-project-id",
                              label: eu.intl.string(eo.default["nm/zuU"]),
                              icon: t9.L,
                              leadingAccessory: { type: "icon", icon: t9.L },
                              action: () =>
                                  (0, t8.C)(t, () =>
                                      (0, g.P)((0, x.o)(eu.intl.string(eo.default.CmfaZG), b.Ck.SUCCESS)),
                                  ),
                          }),
                      ],
                  })
                : null,
            s
                ? (0, a.jsxs)(et.rX, {
                      children: [
                          (0, a.jsx)(et.Dr, {
                              id: "settings",
                              label: eu.intl.string(eo.default.FzfmQ8),
                              icon: S.SettingsIcon,
                              leadingAccessory: { type: "icon", icon: S.SettingsIcon },
                              action: () => (0, nl.A)(t, { guildId: r ?? l, initialTab: "project", isPreview: !0 }),
                          }),
                          (0, a.jsx)(et.Dr, {
                              id: "delete",
                              label: eu.intl.string(eu.t.oyYWHE),
                              color: "danger",
                              action: () => {
                                  (0, m.A)({
                                      title: eu.intl.formatToPlainString(eo.default.CJBhb2, { name: n }),
                                      subtitle: eu.intl.string(eo.default["0OmrVn"]),
                                      confirmText: eu.intl.string(eu.t.oyYWHE),
                                      variant: "critical",
                                      onConfirm: () => {
                                          (0, eT.K)(t, () =>
                                              (0, g.P)((0, x.o)(eu.intl.string(eo.default["0XDHob"]), b.Ck.FAILURE)),
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
function nu(e) {
    let { trigger: t = "header", ...n } = e,
        l = i.useRef(null);
    return (0, a.jsx)(Z.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: Z.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(no, { ...n, onCloseMenu: t });
        },
        children: (e, n) => {
            let { onClick: i } = e,
                { isShown: r } = n;
            return (0, a.jsx)("div", {
                ref: l,
                className: ni.h,
                children:
                    "iconButton" === t
                        ? (0, a.jsx)(y.m, {
                              text: eu.intl.string(eu.t["UKOtz+"]),
                              children: (0, a.jsx)(t3.K, {
                                  icon: t5.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": eu.intl.string(eu.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": r,
                                  onClick: i,
                              }),
                          })
                        : (0, a.jsx)(B.A.Icon, {
                              icon: t5.MoreHorizontalIcon,
                              tooltip: eu.intl.string(eu.t["UKOtz+"]),
                              "aria-label": eu.intl.string(eu.t["UKOtz+"]),
                              "aria-haspopup": "menu",
                              "aria-expanded": r,
                              selected: r,
                              onClick: i,
                          }),
            });
        },
    });
}
var nd = n(845079),
    nc = n(104171),
    nm = n(286739);
function nf(e) {
    let { creator: t, className: n } = e;
    return (0, a.jsx)("div", {
        className: s()(nm.c, n),
        "aria-hidden": !0,
        children: (0, a.jsx)(nc.Ay, { users: [t.creator, ...t.collaborators], max: 3, size: nc.DN.SIZE_16 }),
    });
}
var nh = n(580954),
    np = n(246338);
let ng = "user",
    nx = "no-server",
    nb = new Map();
function nv(e) {
    return nb.get(e) ?? null;
}
function nj(e) {
    switch (e) {
        case "all":
        case ng:
        case nx:
            return null;
        default:
            return e;
    }
}
function ny(e, t) {
    switch (t) {
        case "all":
            return !0;
        case ng:
            return "user" === e.install_scope;
        case nx:
            return null == (0, t$.wu)(e);
        default:
            return e.guild_id === t || e.preview_guild_id === t;
    }
}
var nw = n(506774);
let nk = "VibegrationsProjectsPanelOpen";
function nC() {
    return nw.w.get(nk) ?? null;
}
function nA(e) {
    return `VibegrationsProjectsPanel:${e}`;
}
function nN(e, t, n) {
    return t?.integration_installed === !0 && e?.guild_id != null ? e.guild_id : n;
}
async function nS(e, t) {
    (e.guild_id !== t || e.preview_guild_id !== t) && (await (0, eT.M7)(e.id, { guild_id: t, preview_guild_id: t }));
}
var nE = n(73153),
    nI = n(587895),
    nT = n(321191),
    nP = n(808728),
    nM = n(342110),
    n_ = n(385081),
    nR = n(645070);
function nL(e) {
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
                                    update: eu.intl.string(eo.default.JpDnbE),
                                    open: eu.intl.string(eo.default.NNIwRu),
                                    destination: "dm",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "activity":
                                return {
                                    update: eu.intl.string(eo.default.QesMDC),
                                    open: eu.intl.string(eo.default.iyQTsb),
                                    destination: "launch",
                                    navigatesOnFirstPublish: !1,
                                    navigatesOnUpdate: !1,
                                };
                            case "widget":
                                return {
                                    update: eu.intl.string(eo.default["LUi/55"]),
                                    open: eu.intl.string(eo.default.TXUK1g),
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
                        let l = eu.intl.formatToPlainString(eo.default.fTgw6C, { server: t });
                        switch (e) {
                            case "bot":
                                return {
                                    update: eu.intl.string(eo.default.JpDnbE),
                                    open: l,
                                    destination: "guild",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "activity":
                                return {
                                    update: eu.intl.string(eo.default.QesMDC),
                                    open:
                                        null == n ? l : eu.intl.formatToPlainString(eo.default.l9xGQD, { channel: n }),
                                    destination: "channel",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "automod":
                                return {
                                    update: eu.intl.string(eo.default.bwBMMn),
                                    open: eu.intl.string(eo.default.KjbLum),
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
                ? eu.intl.formatToPlainString(eo.default["4sqXfg"], o)
                : r
                  ? eu.intl.formatToPlainString(eo.default.N4NkyR, o)
                  : s
                    ? eu.intl.formatToPlainString(eo.default.PxtHIV, o)
                    : null;
        })(e),
        d = (0, ty.Qg)({
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
            label: eu.intl.string(eo.default["tUeY/h"]),
            action: "review_permissions",
            navigatesOnPublish: f,
        };
    let h = s?.update ?? eu.intl.string(eo.default.QesMDC);
    return { ...m, label: c ? h : eu.intl.string(eo.default["120EFN"]), action: "publish", navigatesOnPublish: f };
}
var nD = (((l = {}).NO_PREVIEW = "no-preview"), (l.PERMISSIONS = "permissions"), l),
    nO = n(308528),
    nF = n(345942);
let nz = i.createContext(null);
function nU(e) {
    return nI.A.getApplication(e.application_id)?.bot?.id ?? e.application_id;
}
function nG(e, t) {
    let n = eP.Ay.getProject(e);
    if (null == n) return null;
    let l = "user" === n.install_scope ? null : (n.guild_id ?? t),
        a = null == l ? null : (0, np.i8)(l, n.application_id),
        i = null == l ? null : Y.A.getGuild(l);
    return {
        project: n,
        guildId: l,
        appChannelId: a,
        input: {
            installScope: n.install_scope,
            status: eP.Ay.getPublishStatus(e),
            integrationStatus: eP.Ay.getIntegrationStatus(e),
            guildName: i?.name ?? null,
            appChannelName: null == a ? null : (K.A.getChannel(a)?.name ?? null),
            appChannelPending: eP.Ay.isAppChannelPending(e),
            canManageGuild: null == i ? null : J.A.can(eb.xBc.MANAGE_GUILD, i),
            canManageChannels: null == i ? null : J.A.can(eb.xBc.MANAGE_CHANNELS, i),
            usesNativeAppChannels: (0, Q.KQ)(n),
            botInGuild: (function (e, t) {
                if (null == t) return null;
                let n = nT.A.getMutualGuilds(nU(e));
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
function nq(e, t, n) {
    return (function (e, t) {
        let n,
            { applicationId: l, guildId: a, appChannelId: i, openProfile: r, openAutomodSettings: s } = t;
        switch (e) {
            case "launch":
                if ((0, tC.X)(nI.A.getApplication(l)))
                    return (G.A.launchFrame({ applicationId: l, surface: tD.sd }).catch(() => {}), Promise.resolve());
                break;
            case "profile": {
                let e = tB.default.getCurrentUser()?.id;
                if (null != e) return (r(e), Promise.resolve());
                break;
            }
            case "channel":
                if (null != a && null != i) return ((0, H.pX)(eb.BVt.CHANNEL(a, i)), Promise.resolve());
                break;
            case "automod":
                if (null != a && null != s) return (s(a), Promise.resolve());
        }
        if ("dm" !== e && null != a) {
            let e;
            return (
                null != (e = nP.Ay.getDefaultChannel(a)?.id) ? (0, H.pX)(eb.BVt.CHANNEL(a, e)) : (0, nF.u)(a),
                Promise.resolve()
            );
        }
        return ((n = nI.A.getApplication(l)?.bot?.id ?? l), nO.A.openPrivateChannel({ recipientIds: n }));
    })(t, {
        applicationId: e.project.application_id,
        guildId: e.guildId,
        appChannelId: e.appChannelId,
        openProfile: n.openProfile,
        openAutomodSettings: n.openAutomodSettings,
    });
}
async function n$(e, t) {
    let n = eP.Ay.getProject(e),
        l = n?.preview_application_id;
    if (null == n || null == l) return;
    let a = nN(n, eP.Ay.getIntegrationStatus(e), t);
    (null == nI.A.getApplication(l) && (await (0, F.TA)(l).catch(() => {})),
        await new Promise((e) => {
            nR.A.openConjureAppInstallModal({
                applicationId: l,
                application: nI.A.getApplication(l) ?? null,
                guildId: a,
                onClose: e,
            });
        }),
        await nS(n, a).catch(() => {}),
        await (0, eT.U1)(e).catch(() => {}));
}
let nB = new Set(["dm", "guild", "channel"]);
function nH(e, t, n) {
    let { project: l } = e,
        { platform: a, guildId: i } = n,
        r = l.id,
        s = t.navigatesOnPublish ? t.destination : null,
        o = "user" === l.install_scope || null != s ? null : (0, el.$C)(r);
    (o?.catch(() => {}), "channel" === s && nV(r, !0));
    let u = (0, el.TV)(r).then((e) => {
            if (!0 !== e.ok) {
                let t;
                throw Error(
                    null != (t = e.detail?.trim()) && "" !== t
                        ? eu.intl.formatToPlainString(eo.default["7ZsIF1"], { reason: t })
                        : eu.intl.string(eo.default.gMWZeG),
                );
            }
            return e;
        }),
        d = u.then(
            () =>
                (0, eT.tZ)(r, { isPreview: !1 }).catch((e) => {
                    console.error("[vibegrations] post-publish refresh failed", r, e);
                }),
            () => {},
        );
    if (
        (u.then(
            () => {
                (null != e.guildId && nK(l),
                    null != s &&
                        (nB.has(s) && (0, nM.cP)(r),
                        d
                            .then(() => ("channel" === s ? nW(r, i) : void 0))
                            .finally(() => nV(r, !1))
                            .then(() => nq(nG(r, i) ?? e, s, a))
                            .catch(() => {})));
            },
            (e) => {
                (nV(r, !1), a.showError(e instanceof Error ? e.message : eu.intl.string(eo.default.gMWZeG)));
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
function nV(e, t) {
    nE.h.dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: e, pending: t });
}
async function nW(e, t) {
    let n = Date.now() + 5e3;
    for (; nG(e, t)?.appChannelId == null && Date.now() < n;) await new Promise((e) => setTimeout(e, 250));
}
function nK(e) {
    (0, tW.eO)(nU(e), { withMutualGuilds: !0 }).catch(() => {});
}
let nX = new Set();
async function nY(e, t, n) {
    let { guildId: l, platform: a } = n;
    if (!0 === n.busy || nX.has(e)) return;
    let i = nG(e, l);
    if (null == i || eP.Ay.isProjectPublishing(e)) return;
    let r = nL(i.input);
    if (null != r) {
        if (
            ((0, n_.yJ)(e, {
                entryPoint: t,
                publishState: i.input.status?.state ?? null,
                surface: i.input.status?.surface ?? null,
                installScope: i.project.install_scope,
                action: r.action,
            }),
            "open" === r.intent)
        ) {
            null != r.destination && nq(i, r.destination, a).catch(() => {});
            return;
        }
        if (null == r.disabledReason) {
            if (i.input.integrationStatus?.preview_ready !== !0) return void a.showPublishBlocked(nD.NO_PREVIEW);
            if ("consent_then_publish" === r.intent) {
                nX.add(e);
                try {
                    await (a.requestConsent ?? ((e) => n$(e, l)))(e);
                } finally {
                    nX.delete(e);
                }
                if (eP.Ay.isProjectPublishing(e)) return;
                let t = nG(e, l),
                    i = t?.input.integrationStatus ?? null;
                if (
                    null == t ||
                    (0, ty.Qg)({
                        installScope: t.project.install_scope,
                        previewReady: i?.preview_ready === !0,
                        integrationInstalled: i?.integration_installed ?? null,
                        botPermissionsChanged: i?.bot_permissions_changed === !0,
                    })
                )
                    return;
                nH(t, r, n);
                return;
            }
            nH(i, r, n);
        }
    }
}
function nJ(e, t) {
    let n = i.useContext(nz),
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
            usesNativeAppChannels: j,
            botInGuild: y,
        } = (0, c.cf)(
            [eP.Ay, Y.A, nP.Ay, K.A, J.A, nT.A, nI.A],
            () => {
                let t = null == e || null == a ? null : nG(e, a);
                return {
                    canPublish: null != t && (0, eP.jf)(t.project),
                    project: t?.project ?? null,
                    guildId: t?.guildId ?? null,
                    appChannelId: t?.appChannelId ?? null,
                    publishing: null != e && eP.Ay.isProjectPublishing(e),
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
                          usesNativeAppChannels: j,
                          botInGuild: y,
                      },
            [o, m, f, h, p, g, x, b, v, j, y],
        ),
        k = w?.status?.state ?? null,
        C = w?.installScope === "guild" && w.status?.surface === "bot";
    i.useEffect(() => {
        null != o && null != u && C && null != k && "unpublished" !== k && nK(o);
    }, [o?.id, u, C, k]);
    let A = i.useMemo(() => (null == w ? null : nL(w)), [w]),
        N = i.useCallback(
            (t) => {
                null != e &&
                    null != l &&
                    nY(e, t, l).catch((t) => {
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
var nQ = n(189213);
function nZ(e) {
    let { reason: t, transitionState: n, onClose: l } = e,
        i = t === nD.PERMISSIONS;
    return (0, a.jsx)(nQ.a, {
        transitionState: n,
        onClose: l,
        title: eu.intl.string(i ? eo.default.wQ4UyJ : eo.default.ZNGLFE),
        subtitle: eu.intl.string(i ? eo.default.Agqmbt : eo.default.ffxKGK),
        size: "sm",
        actions: [{ text: eu.intl.string(i ? eu.t.BddRzS : eo.default["/omTNx"]), variant: "primary", onClick: l }],
    });
}
var n0 = n(951465),
    n2 = n(95264),
    n1 = n(952644),
    n6 = n(991690),
    n9 = n(58736),
    n3 = n(689175),
    n5 = n(65593),
    n4 = n(115982);
function n7(e) {
    return !(0, tV.BL)(e) && !0 !== e.stopRequested;
}
var n8 = n(104317),
    le = n(643278),
    lt = n(566424),
    ln = n(683063),
    ll = n(847374),
    la = n(138212);
function li(e) {
    let { title: t, trailing: n, children: l, className: i, headerClassName: r, ...o } = e;
    return (0, a.jsxs)("section", {
        className: s()(la.Nr, i),
        ...o,
        children: [
            (0, a.jsxs)("header", {
                className: s()(la.wx, null != n && la.o5, r),
                children: [
                    (0, a.jsx)(v.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var lr = n(148590);
function ls(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function lo(e) {
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
        v = h ? ll.a : to._,
        y = null != n || l;
    return (0, a.jsxs)(li, {
        ...m,
        title: t,
        trailing: y
            ? (0, a.jsxs)("span", {
                  className: lr.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(j.D, {
                                className: lr.L$,
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
        headerClassName: h ? void 0 : lr.RG,
        "data-superseded": l ? "true" : void 0,
        children: [d, (0, a.jsx)("div", { id: f, className: s()(lr.rf, u), hidden: !h, children: c })],
    });
}
var lu = n(883646);
let ld = [];
function lc(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: s()(lu.xL, {
            [lu.Vb]: "in_progress" === t,
            [lu.cT]: "completed" === t,
            [lu.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return eu.intl.string(eo.default.KvBdun);
                case "in_progress":
                    return eu.intl.string(eo.default["m5G9+S"]);
                case "unfinished":
                    return eu.intl.string(eo.default.lRpwhD);
                default:
                    return eu.intl.string(eo.default.sPGeWi);
            }
        })(t),
        children: [
            (0, a.jsx)(k.y, {
                type: k.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: lu.Qd,
                itemClassName: lu.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: lu.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: lu.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function lm(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : ld), [n, t]),
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
        className: lu.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            p.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    ln.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: lu.MA,
                            "data-leaving": r.has(t) ? void 0 : "true",
                            children: (0, a.jsx)(s, { size: 16, alt: l, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            g > 0
                ? (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: lu.qA,
                      children: `+${g}`,
                  })
                : null,
        ],
    });
}
function lf(e) {
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
            ((t = (r ?? ld).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            i.useMemo(() => {
                let e = new Map();
                for (let t of r ?? ld) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let n = e.get(t.todoId);
                    null != n ? n.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, a.jsxs)("ul", {
        className: lu.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || o ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: s()(lu.AS, { [lu.J1]: "completed" === n }),
                        "data-arriving": u.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(lc, { status: n }),
                            (0, a.jsx)(v.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: lu.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: lu.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(lm, { agents: d.get(e.id) ?? ld, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: lu.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(lc, { status: "pending" }),
                          (0, a.jsx)(v.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: lu.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: lu.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function lh(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: i = !0, live: r = !0, superseded: s = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let d = eu.intl.formatToPlainString(eo.default["P/I+JW"], { completed: o, total: u }),
        c = eu.intl.formatToPlainString(eo.default["7tzwKB"], { completed: o, total: u });
    return (0, a.jsx)(lo, {
        title: eu.intl.string(eo.default.RtzECX),
        meta: (0, a.jsx)(ls, { children: d }),
        superseded: s,
        showLabel: eu.intl.string(eo.default.RKyN9q),
        hideLabel: eu.intl.string(eo.default.xydHoj),
        className: lu.Nr,
        bodyClassName: lu.rf,
        beforeBody: i && !s ? (0, a.jsx)(w.A, { role: "status", "aria-live": "polite", children: c }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(lf, { todos: t, provisional: n, agents: l, live: r }),
    });
}
var lp = n(308665),
    lg = n(59678),
    lx = n(903847);
function lb(e) {
    let { line: t, placement: n, todos: l, todosLive: r = !0, provisionalTodo: o, agents: u, onJumpToActivity: d } = e,
        c = null != n,
        [m, f] = i.useState(n ?? "top"),
        [h, p] = i.useState(c),
        [g, x] = i.useState(!1),
        [b, v] = i.useState(!1),
        [w, k] = i.useState(c);
    (w !== c && (k(c), null != n ? (f(n), p(!0)) : (x(!1), v(!1))),
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
              className: lx.qd,
              "data-placement": m,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: s()(lx.vK, { [lx.ho]: g && c, [lx.ET]: !c }),
                      children: [
                          null == d
                              ? (0, a.jsx)("ol", {
                                    className: s()(lx.Rk, lg.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(lt.A, {
                                        glyph: (0, a.jsx)(lp.Ay, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(j.D, {
                                    className: lx.pZ,
                                    onClick: d,
                                    "aria-label": eu.intl.string(eo.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: s()(lx.Rk, lg.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(lt.A, {
                                            glyph: (0, a.jsx)(lp.Ay, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          T
                              ? (0, a.jsx)(y.m, {
                                    text: eu.intl.string(eo.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(j.D, {
                                        className: lx.BO,
                                        onClick: P,
                                        "aria-expanded": b,
                                        "aria-label": eu.intl.string(eo.default.RtzECX),
                                        children: (0, a.jsx)(le.ClipboardListIcon, {
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
                            className: s()(lx.vB, { [lx.pg]: b && N, [lx.ui]: !b }),
                            children: (0, a.jsx)(lh, {
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
var lv = n(658675),
    lj = n(22231),
    ly = n(826745),
    lw = n(123292),
    lk = n(155078);
function lC(e) {
    return e.options.some((e) => null != e.image);
}
let lA = [];
function lN(e, t) {
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
var lS = n(87221),
    lE = n(144228),
    lI = n(241326),
    lT = n(26430),
    lP = n(750943),
    lM = n(95477),
    l_ = n(256905),
    lR = n(839214);
let lL = [],
    lD = 1,
    lO = (0, lR.D)(() => ({ draftsByProject: {} }));
function lF(e, t, n) {
    return e.draftsByProject[t]?.[n] ?? lL;
}
function lz(e, t) {
    return lF(lO.getState(), e, t);
}
function lU(e, t, n) {
    let { draftsByProject: l } = lO.getState();
    lO.setState({ draftsByProject: { ...l, [e]: { ...l[e], [t]: n } } });
}
function lG(e, t, n, l) {
    let a = lz(e, t);
    return (
        !!a.some((e) => e.localId === n) &&
        (lU(
            e,
            t,
            a.map((e) => (e.localId === n ? { ...e, ...l } : e)),
        ),
        !0)
    );
}
function lq(e, t) {
    (0, el.Vm)(e, t).catch((e) => {
        console.error("[vibegrations] attachment cleanup failed", e);
    });
}
function l$(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && lq(e, t.ref.id));
}
function lB(e, t) {
    let { deleteFromWorker: n } = t,
        { draftsByProject: l } = lO.getState(),
        a = l[e];
    if (null == a) return;
    for (let t of Object.values(a))
        for (let l of t ?? lL) n ? l$(e, l) : null != l.previewUrl && URL.revokeObjectURL(l.previewUrl);
    let { [e]: i, ...r } = l;
    lO.setState({ draftsByProject: r });
}
function lH(e) {
    return eu.intl.formatToPlainString(eo.default.JZ59Bo, { size: (0, Q.sM)((0, Q.Ju)(e)) });
}
function lV(e, t) {
    let n = lz(e, t);
    if (0 !== n.length) {
        for (let t of n) l$(e, t);
        lU(e, t, lL);
    }
}
function lW(e, t) {
    let n = lz(e, t);
    if (0 === n.length) return [];
    for (let e of n) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (lU(e, t, lL), n.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function lK(e, t) {
    let { clarificationAnswers: n, attachments: l = [] } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = lz(e, "chat"),
        i = a.length > 0 && a.every((e) => "ready" === e.status) ? lW(e, "chat") : [];
    (0, el.dv)(e, t, [...l, ...i], { clarificationAnswers: n });
}
function lX(e, t) {
    let [n, l] = i.useState(null),
        [a, r] = i.useState(!1),
        [s, o] = i.useState(0);
    return (
        i.useEffect(() => {
            let n = !1;
            return (
                (0, el.PK)(e, t).then(
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
                    (0, el.n6)(e, t).then(
                        (e) => {
                            e && 0 === s ? o(1) : r(!0);
                        },
                        () => r(!0),
                    ));
            }, [e, t, s]),
        }
    );
}
(nE.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(lO.getState().draftsByProject)) lB(e, { deleteFromWorker: !0 });
}),
    nE.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        lB(t, { deleteFromWorker: !1 });
    }));
var lY = n(907702);
function lJ(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: o, gone: u, handleError: d } = lX(t, n),
        [c, m] = i.useState(null),
        f = null != o && c === o;
    return u
        ? (0, a.jsxs)("span", {
              className: s()(lY.Gt, lY.b6),
              children: [
                  (0, a.jsx)(lS.D, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: eu.intl.string(eo.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: s()(lY.Gt, { [lY.iP]: !f }),
              children:
                  null != o
                      ? (0, a.jsx)("img", {
                            src: o,
                            alt: l,
                            className: lY.Sl,
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
function lQ(e) {
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
        x = eu.intl.formatToPlainString(eo.default.JGjZMs, { answer: i.label });
    return (0, a.jsxs)("div", {
        className: s()(lY.Vs, { [lY.Q9]: o, [lY.RX]: u }),
        "data-conjure-clarification-option": i.id,
        children: [
            (0, a.jsxs)(j.D, {
                className: lY.Up,
                "data-conjure-image-option-pick": !0,
                onClick: u ? void 0 : () => m(i),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), h(i, t));
                },
                role: r ? "checkbox" : "radio",
                "aria-checked": o,
                "aria-label": eu.intl.formatToPlainString(eo.default.AQbxhf, { answer: i.label }),
                "aria-disabled": u,
                tabIndex: d && c ? 0 : -1,
                children: [
                    (0, a.jsxs)("span", {
                        className: lY.$_,
                        children: [
                            null != i.image
                                ? (0, a.jsx)(lJ, {
                                      projectId: l,
                                      attachmentId: i.image.attachment_id,
                                      alt: i.label,
                                      onMeasured: p,
                                  })
                                : (0, a.jsx)("span", { className: lY.Gt }),
                            (0, a.jsx)("span", {
                                className: lY.q3,
                                "aria-hidden": !0,
                                children: r
                                    ? (0, a.jsx)(lv.P, { checked: o, disabled: u })
                                    : (0, a.jsx)(lE.T, { checked: o, disabled: u }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: lY.pG,
                        children:
                            "" !== (n = null != (t = i.image?.page_url ?? i.image?.url) ? (0, lk.E)(t) : "")
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
                      className: lY.B4,
                      children: (0, a.jsx)(y.m, {
                          text: eu.intl.string(eo.default.HQEXJM),
                          children: (0, a.jsx)(t3.K, {
                              icon: lI.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: g,
                              disabled: u,
                              "aria-label": eu.intl.string(eo.default.HQEXJM),
                              tabIndex: d ? 0 : -1,
                          }),
                      }),
                  })
                : null != i.image
                  ? (0, a.jsx)("span", {
                        className: lY.B4,
                        children: (0, a.jsx)(y.m, {
                            text: eu.intl.string(eo.default["4/eeDD"]),
                            children: (0, a.jsx)(t3.K, {
                                icon: lT._,
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
function lZ(e) {
    var t;
    let { projectId: n, question: l, selectedIds: r, disabled: o, reachable: u = !0, onPick: d, own: c } = e,
        m = !0 === l.multi_select,
        { options: f } = l,
        h = f.length > 4 ? "gallery" : "row",
        p = i.useRef(null),
        g = i.useRef(new Map()),
        [x, b] = i.useState(null),
        v = null != x && f.some((e) => e.id === x) ? x : (f.find((e) => r.includes(e.id)) ?? f[0])?.id,
        j = i.useCallback(
            (e) => {
                let t = f.flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    l = t.findIndex((t) => t.id === e.id);
                l < 0 ||
                    Promise.all(t.map((e) => (0, el.PK)(n, e.image.attachment_id))).then(
                        (e) => {
                            (0, l_.R)({
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
        y = i.useCallback(
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
                      label: eu.intl.string(eo.default.SUdqCQ),
                      image: { attachment_id: t.attachment.id },
                  });
    return (0, a.jsxs)("div", {
        className: lY.Nz,
        "data-conjure-image-options": !0,
        children: [
            (0, a.jsxs)("div", {
                ref: p,
                className: s()(lY.fF, "gallery" === h ? lY.nV : lY.nM, { [lY.m3]: m }),
                role: m ? "group" : "radiogroup",
                "aria-labelledby": `${l.id}-label`,
                "data-layout": h,
                "data-count": f.length,
                children: [
                    f.map((e) =>
                        (0, a.jsx)(
                            lQ,
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
                                onView: j,
                                onArrow: y,
                                onMeasured: (t) => g.current.set(e.id, t),
                            },
                            e.id,
                        ),
                    ),
                    null != w
                        ? (0, a.jsx)(
                              lQ,
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
            (0, a.jsx)(l0, {
                projectId: n,
                own: c,
                disabled: o,
                reachable: u,
                uploadText: eu.intl.string(/\bicons?\b/i.test(l.question) ? eo.default.qU4WN6 : eo.default.cbMDDB),
            }),
        ],
    });
}
function l0(e) {
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
        className: lY.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, a.jsxs)("div", {
                className: lY.QJ,
                children: [
                    (0, a.jsx)(C.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: lP.X,
                        text: s,
                        loading: "upload" === h,
                        disabled: l || "link" === h,
                        onClick: () => o.current?.click(),
                        tabIndex: f,
                        "data-conjure-own-image-upload": !0,
                    }),
                    u
                        ? null
                        : (0, a.jsx)(C.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: t6.LinkIcon,
                              text: eu.intl.string(eo.default["1TgOO+"]),
                              disabled: l || "upload" === h,
                              onClick: () => d(!0),
                              tabIndex: f,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, a.jsx)("input", {
                        ref: o,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: lY.Fg,
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
                                        (0, Q.Oq)(i.size, a)
                                            ? (0, el.c9)(t, i, l, a)
                                            : Promise.resolve({ errorText: lH(a) })),
                                    ));
                        },
                    }),
                ],
            }),
            u
                ? (0, a.jsxs)("div", {
                      className: lY.vG,
                      children: [
                          (0, a.jsx)("div", {
                              className: lY.Hs,
                              children: (0, a.jsx)(lM.k, {
                                  label: eu.intl.string(eo.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: eu.intl.string(eo.default.AVhvn8),
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
                              className: lY.gd,
                              children: [
                                  (0, a.jsx)(C.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: eu.intl.string(eo.default.FbRbeM),
                                      loading: "link" === h,
                                      disabled: l || "" === c.trim(),
                                      onClick: p,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, a.jsx)(lw.Q, {
                                      variant: "secondary",
                                      textVariant: "text-sm/medium",
                                      text: eu.intl.string(eo.default.eXZL4X),
                                      onClick: () => d(!1),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
            n.error?.source === "upload"
                ? (0, a.jsx)(v.E, {
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
var l2 = n(29073),
    l1 = n(384017);
function l6(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: o = !0, selected: u } = e,
        d = i.useId(),
        c = !0 === t.recommended,
        m = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(j.D, {
        className: s()(l1.uK, { [l1.ue]: l, [l1.h4]: !0 === u }),
        onClick: l ? void 0 : () => r(t),
        "aria-label": eu.intl.formatToPlainString(c ? eo.default["2p6UFz"] : eo.default.AQbxhf, { answer: t.label }),
        "aria-describedby": m ? d : void 0,
        "aria-disabled": l,
        role: null != u ? "checkbox" : void 0,
        "aria-checked": u,
        tabIndex: o ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": c ? "true" : void 0,
        children: [
            null != u
                ? (0, a.jsx)("span", { className: l1.dy, children: (0, a.jsx)(lv.P, { checked: u, disabled: l }) })
                : (0, a.jsx)("span", { className: l1.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: l1.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: l1.l8,
                        children: (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: l1.ed,
                            children: t.label,
                        }),
                    }),
                    m
                        ? (0, a.jsx)(v.E, {
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
                ? (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: l1.rM,
                      children: eu.intl.string(eo.default.zku6r1),
                  })
                : null,
        ],
    });
}
function l9(e) {
    let { projectId: t, question: n, selected: l, disabled: i, reachable: r = !0, onPick: s, own: o } = e,
        u = !0 === n.multi_select;
    return lC(n)
        ? (0, a.jsx)(lZ, { projectId: t, question: n, selectedIds: l, disabled: i, reachable: r, onPick: s, own: o })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      l6,
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
let l3 = [];
function l5(e) {
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
        className: s()(l1.Ge, l1.x1),
        "data-direction": r,
        "aria-hidden": !0,
        children: [
            m
                ? (0, a.jsx)(v.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: l1.aK,
                      children: eu.intl.string(eo.default.tE8qbz),
                  })
                : null,
            (0, a.jsx)(l9, {
                projectId: t,
                question: n,
                selected: i,
                disabled: o,
                onPick: () => void 0,
                reachable: !1,
                own: lN(u, d),
            }),
            lC(n)
                ? null
                : (0, a.jsxs)("div", {
                      className: l1.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: l1.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(lj.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == c ? null : (0, a.jsx)("span", { className: s()(l1.Pu, l1.es), children: c }),
                      ],
                  }),
        ],
    });
}
function l4(e) {
    var t;
    let { projectId: n, clarification: l, onSubmit: r, onDismiss: o } = e,
        [u, d] = i.useState({}),
        [c, m] = i.useState({}),
        [f, h] = i.useState({}),
        [p, g] = i.useState(0),
        [x, b] = i.useState(null),
        [w, k] = i.useState(null),
        [A, N] = i.useState(null),
        [S, E] = i.useState(!1),
        I = i.useRef(null),
        [T, P] = i.useState(null),
        M = i.useRef(null),
        _ = i.useRef(0),
        L = null == r,
        D = l.questions.length,
        O = Math.min(p, D - 1),
        F = l.questions[O],
        [z, U] = i.useState({ id: F.id, expanded: !1 }),
        G = z.id === F.id && z.expanded,
        [q, $] = i.useState(null),
        B = c[F.id] ?? "",
        H = !0 === F.multi_select,
        V = lC(F),
        W = H ? (f[F.id] ?? l3) : ((t = u[F.id]), t?.kind === "option" ? [t.optionId] : lA),
        K = (function (e, t, n) {
            let [l, a] = i.useState({}),
                [r, s] = i.useState({}),
                [o, u] = i.useState({}),
                d = eu.intl.string(eo.default.wTsP5l),
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
                        if (o) return lN(h, m(i));
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
                                    null != l && (0, el.Vm)(e, l.attachment.id).catch(() => void 0), { ...n, [c]: t }
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
                                    ((0, el.Vm)(e, h.attachment.id).catch(() => void 0),
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
                                                error: { source: "upload", text: eu.intl.string(eo.default["kUw/b1"]) },
                                            }),
                                    ));
                            },
                            onLink: (t) => (
                                p({ busy: "link", error: null }),
                                (0, el.gm)(e, t).then(
                                    (e) => (b({ attachment: e }), !0),
                                    (e) => (
                                        p({
                                            busy: null,
                                            error: {
                                                source: "link",
                                                text:
                                                    e instanceof Error && "" !== e.message
                                                        ? e.message
                                                        : eu.intl.string(eo.default.l79PMc),
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
        { text: J, phase: Q } = (0, td.Q)(F.question),
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
    let et = eu.intl.string(G ? eu.t.iTcuma : eu.t.dcl9MQ),
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
        ea = i.useCallback(
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
                if (L) return;
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
                null == n ? en(t) : ea(n, n < O ? "back" : "forward");
            },
            [u, l, L, O, F.id, en, ea],
        ),
        ed = i.useCallback(() => {
            L || 0 === O || ea(O - 1, "back");
        }, [L, O, ea]),
        ec = O > 0 && !L,
        em = i.useCallback(
            (e) => {
                m((e) => ({ ...e, [F.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                V ? L || d((e) => ({ ...e, [F.id]: t })) : es(t);
            },
            [L, V, F.id, es],
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
        ep = K.controlsFor(F, L),
        eg = i.useCallback(() => {
            if (null != eh) {
                "" !== eh.text && es(eh);
                return;
            }
            let e = B.trim();
            "" !== e && es({ kind: "custom", text: e });
        }, [B, eh, es]),
        [ex, eb] = i.useState(!1),
        [ev, ej] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => eb(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let ey = i.useCallback(() => {
            null != o && (ej(!0), setTimeout(o, 150));
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
        ek = null != ew && !L,
        eC = O === D - 1,
        eA = i.useCallback(() => {
            null == ew || L || es(ew);
        }, [L, ew, es]),
        eN = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, tP.vq)(e.target, HTMLTextAreaElement) ||
                    (0, tP.vq)(e.target, HTMLInputElement) ||
                    ((!(0, tP.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && ec
                            ? (e.preventDefault(), ed())
                            : "ArrowRight" === e.key && ek && (e.preventDefault(), eA())));
            },
            [ec, ek, ed, eA],
        );
    return (0, a.jsxs)("section", {
        className: s()(l1.$O, { [l1.fI]: ex && !ev, [l1.Oh]: ev }),
        role: "dialog",
        "aria-label": F.question,
        "data-conjure-clarification": l.id,
        "data-state": L ? "inert" : "open",
        "data-question-expanded": G ? "true" : void 0,
        "data-step": O,
        tabIndex: -1,
        onKeyDown: eN,
        children: [
            (0, a.jsxs)("div", {
                className: l1.rf,
                style: null == A ? void 0 : { height: A.heading + A.rows },
                "data-moving": S ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: I,
                        className: l1.wx,
                        children: [
                            (0, a.jsx)(v.E, {
                                ref: P,
                                tag: "span",
                                id: `${F.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: G ? void 0 : 5,
                                className: s()(l2.TK, l1.R_, { [l1.TB]: "exit" === Q, [l1.JU]: "enter" === Q }),
                                children: J,
                            }),
                            ee || G
                                ? (0, a.jsx)("div", {
                                      className: l2.Q7,
                                      children: (0, a.jsx)(y.m, {
                                          text: et,
                                          children: (0, a.jsx)(t3.K, {
                                              icon: G ? ts.t : ll.a,
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
                                      className: s()(l2.gb, l2.Q7),
                                      onClick: ey,
                                      "aria-label": eu.intl.string(eo.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, a.jsx)(R.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: l1.Cg,
                        style: null == A ? void 0 : { insetBlockStart: A.heading },
                        children: (0, a.jsxs)("div", {
                            className: l1.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: M,
                                    className: l1.Ge,
                                    role: "group",
                                    "aria-labelledby": `${F.id}-label`,
                                    "data-direction": x?.direction,
                                    "data-parity": null == x ? void 0 : x.moves % 2,
                                    children: [
                                        H
                                            ? (0, a.jsx)(v.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: l1.aK,
                                                  children: eu.intl.string(eo.default.tE8qbz),
                                              })
                                            : null,
                                        (0, a.jsx)(l9, {
                                            projectId: n,
                                            question: F,
                                            selected: W,
                                            disabled: L,
                                            onPick: (e) =>
                                                H
                                                    ? h((t) => {
                                                          var n, l;
                                                          let a;
                                                          return {
                                                              ...t,
                                                              [F.id]:
                                                                  ((n = t[F.id] ?? l3),
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
                                                  className: l1.Xy,
                                                  children: [
                                                      (0, a.jsx)("span", {
                                                          className: l1.Gy,
                                                          "aria-hidden": !0,
                                                          children: (0, a.jsx)(lj.PencilIcon, {
                                                              size: "custom",
                                                              width: 20,
                                                              height: 20,
                                                              color: "currentColor",
                                                          }),
                                                      }),
                                                      (0, a.jsx)(ly.y, {
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
                                                          placeholder: eu.intl.string(eo.default["tOC+tn"]),
                                                          "aria-label": eu.intl.formatToPlainString(
                                                              eo.default["4JeYPB"],
                                                              { question: F.question },
                                                          ),
                                                          disabled: L,
                                                          rows: 1,
                                                          className: l1.Pu,
                                                          "data-conjure-clarification-other": F.id,
                                                      }),
                                                  ],
                                              }),
                                    ],
                                }),
                                null == w
                                    ? null
                                    : (0, a.jsx)(
                                          l5,
                                          {
                                              projectId: n,
                                              question: w.question,
                                              draft: w.draft,
                                              selected: w.selected,
                                              ownImage: w.ownImage,
                                              ownSelected: w.ownSelected,
                                              direction: w.direction,
                                              disabled: L,
                                          },
                                          w.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            D > 1 || H || V
                ? (0, a.jsxs)("div", {
                      className: l2.qr,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  D > 1
                                      ? eu.intl.formatToPlainString(eo.default.yzYUjq, { index: O + 1, total: D })
                                      : null,
                          }),
                          (0, a.jsxs)("div", {
                              className: l2.zt,
                              children: [
                                  ec
                                      ? (0, a.jsx)(lw.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: eu.intl.string(eo.default.Pk5lfA),
                                            onClick: ed,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  (0, a.jsx)(C.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: eu.intl.string(eC ? eu.t.geKm7t : eo.default.w1nRmT),
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
var l7 = n(106430),
    l8 = n(670455),
    ae = n(856059),
    at = n(411236);
function an(e) {
    let { projectId: t, request: n, onDismiss: l } = e,
        i = null != n.note && "" !== n.note ? n.note : eu.intl.string(eo.default.XuOf5s);
    return (0, a.jsx)(ae.A, {
        projectId: t,
        scopeKeys: n.keys,
        notifyAgent: !0,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: n, saving: r, submit: o } = e;
            function u(e) {
                (e.preventDefault(), o());
            }
            let d = (0, a.jsx)(C.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: r,
                disabled: !n,
                text: eu.intl.string(eo.default.A7dQd9),
            });
            return null == l
                ? (0, a.jsxs)("form", {
                      className: at.Mk,
                      onSubmit: u,
                      children: [
                          (0, a.jsx)(v.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: eu.intl.string(eo.default["jZjP+I"]),
                          }),
                          (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              selectable: !0,
                              children: i,
                          }),
                          t,
                          (0, a.jsx)("div", { className: at.p0, children: d }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: s()(l2.nd, l2.jx),
                      "aria-label": eu.intl.string(eo.default["jZjP+I"]),
                      onSubmit: u,
                      children: [
                          (0, a.jsxs)("div", {
                              className: l2.wx,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: l2.TK,
                                      children: eu.intl.string(eo.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(j.D, {
                                      className: s()(l2.gb, l2.Q7),
                                      onClick: l,
                                      "aria-label": eu.intl.string(eo.default["iq+Pte"]),
                                      children: (0, a.jsx)(R.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: at.DQ,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      selectable: !0,
                                      children: i,
                                  }),
                                  t,
                              ],
                          }),
                          (0, a.jsx)("div", {
                              className: l2.qr,
                              children: (0, a.jsx)("div", { className: l2.zt, children: d }),
                          }),
                      ],
                  });
        },
    });
}
var al = n(935208),
    aa = n(435558),
    ai = n.n(aa);
let ar = "VibegrationsComposerDrafts";
function as() {
    return nw.w.get(ar) ?? {};
}
let ao = new Map(),
    au = ai().throttle(() => {
        if (0 === ao.size) return;
        let e = as();
        for (let [t, n] of ao) "" === n ? delete e[t] : (e[t] = n);
        (ao.clear(), nw.w.set(ar, e));
    }, 1e3);
class ad extends c.Ay.Store {
    getDraft(e) {
        let t = ao.get(e);
        return null != t ? t : (as()[e] ?? "");
    }
}
let ac = new ad(nE.h, {
    LOGOUT: function () {
        return (ao.clear(), au.cancel(), nw.w.remove(ar), !1);
    },
    CONJURE_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: n } = e;
        return (ao.set(t, n), au(), "" === n && au.flush(), !1);
    },
});
function am(e) {
    return "" !== ac.getDraft(e).trim();
}
var af = n(29080),
    ah = n(46054),
    ap = n(615839);
function ag(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : eu.intl.string(eo.default.KcFvbo);
}
function ax(e) {
    var t;
    let n,
        l,
        { steps: a, content: i, hasProposal: r, hasAttachments: s } = e,
        o = (0, n4.B4)(a),
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
        })({ hasAttachments: s, showsClosingMessage: f, endsOnStreamedMessage: (0, n4.Lf)(a) }),
    };
}
(n(134528), n(947204));
let ab = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    av = {
        snail: () => eo.default.ABeVsS,
        goat: () => eo.default.dhXay8,
        frog: () => eo.default.SHeweG,
        bunny: () => eo.default.FytFE1,
        cat: () => eo.default["5c+sHs"],
        caterpillar: () => eo.default["/FYcne"],
        butterfly: () => eo.default["Ib/AxK"],
        dog: () => eo.default.zDjBR1,
        spider: () => eo.default["6sxyrN"],
        bee: () => eo.default.cVtefg,
        bot: () => eo.default.MjCw0v,
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
function ay(e) {
    return { ...aj[e], name: eu.intl.string(av[e]()) };
}
function aw(e) {
    return ab.includes(e) ? ay(e) : void 0;
}
function ak(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % ab.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, ab[(t + n) % ab.length]);
            }),
            l
        );
    })(e))
        t.set(n, ay(l));
    return t;
}
var aC = n(60160),
    aA = n(16634);
function aN(e) {
    let { projectId: t, lane: n, Illocon: l, tint: i, name: r, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        d = (0, n4.SY)(n.steps),
        c = u
            ? null != d
                ? (0, n4.WQ)(d)
                : ag(o)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(ag(e));
                  switch (e.status) {
                      case "failed":
                          return eu.intl.formatToPlainString(eo.default.YrVgOf, { task: t });
                      case "cancelled":
                          return eu.intl.formatToPlainString(eo.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return eu.intl.formatToPlainString(eo.default["++9woZ"], {
                                  task: t,
                                  duration: (0, ap.MB)(e.durationMs),
                              });
                          return eu.intl.formatToPlainString(eo.default.nmI9Uh, { task: t });
                      default:
                          return eu.intl.formatToPlainString(eo.default.nmI9Uh, { task: t });
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
                                    className: lg.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            aA.A,
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
                                      className: lg.iq,
                                      children: (0, a.jsx)(aC.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(lt.A, {
        glyph: (0, a.jsx)(ln.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: r,
            body: ag(o),
            position: "left",
            children: (0, a.jsx)("span", {
                className: lg.nC,
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
var aS = n(469393);
function aE(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, ti.lG)(t.authored_at);
    return (0, a.jsx)(li, {
        title: eu.intl.string(eo.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: aS.r,
            children: [
                (0, a.jsxs)("div", {
                    className: aS.z,
                    children: [
                        (0, a.jsx)(v.E, { variant: "text-md/medium", children: t.subject }),
                        null != l.relative
                            ? (0, a.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  title: l.absolute ?? void 0,
                                  children: l.relative,
                              })
                            : null,
                    ],
                }),
                null != n
                    ? (0, a.jsx)(C.$, {
                          variant: "secondary",
                          size: "sm",
                          text: eu.intl.string(eo.default.H8Jfhu),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
var aI = n(885574),
    aT = n(231483),
    aP = n(323384),
    aM = n(430392),
    a_ = n(632015),
    aR = n(628284),
    aL = n(97808),
    aD = n(778712),
    aO = n(809115),
    aF = n(486020),
    az = n(200700);
let aU = {
        alert: { label: () => eu.intl.string(eo.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => eu.intl.string(eo.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => eu.intl.string(eo.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => eu.intl.string(eo.default.RGzFNK), blockedStyle: !1 },
    },
    aG = {
        blocked: { label: () => eu.intl.string(eo.default.YdnZ8q), tone: "red" },
        alert: { label: () => eu.intl.string(eo.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => eu.intl.string(eo.default.RGzFNK), tone: "green" },
    },
    aq = ["blocked", "alert", "allowed"],
    a$ = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
var aB = n(984097),
    aH = n(13673);
let aV = { blocked: aT.ShieldIcon, alert: tZ.BellIcon, allowed: aR.y },
    aW = {
        blurple: { text: "text-brand", icon: D.A.colors.TEXT_BRAND },
        red: { text: "text-feedback-critical", icon: D.A.colors.TEXT_FEEDBACK_CRITICAL },
        green: { text: "text-feedback-positive", icon: D.A.colors.TEXT_FEEDBACK_POSITIVE },
    };
function aK(e) {
    var t, n;
    let l,
        i,
        { example: r } = e,
        s =
            "" ===
            (i = [
                "timeout" !== (t = r).outcome || null == t.timeout_seconds
                    ? null
                    : eu.intl.formatToPlainString(eu.t["3LYql6"], {
                          duration:
                              ((n = t.timeout_seconds),
                              null != (l = (0, az.getFriendlyDurationString)(n))
                                  ? l
                                  : n % 604800 == 0
                                    ? eu.intl.formatToPlainString(eu.t.EmoBD2, { weeks: n / 604800 })
                                    : n % 86400 == 0
                                      ? eu.intl.formatToPlainString(eu.t["k2UNz+"], { days: n / 86400 })
                                      : n % 3600 == 0
                                        ? eu.intl.formatToPlainString(eu.t.xCjYxK, { hours: n / 3600 })
                                        : n % 60 == 0
                                          ? eu.intl.formatToPlainString(eu.t.opVZ9q, { mins: n / 60 })
                                          : eu.intl.formatToPlainString(eu.t["4zv/jq"], { secs: n })),
                      }),
                r.reason,
            ]
                .filter((e) => null != e && "" !== e)
                .join(" "))
                ? null
                : i;
    return null == s
        ? null
        : (0, a.jsx)(v.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              lineClamp: 2,
              selectable: !0,
              children: s,
          });
}
function aX(e) {
    var t;
    let { example: n } = e,
        { label: l, blockedStyle: i } = aU[n.outcome];
    return (0, a.jsxs)("li", {
        className: s()(aB.nM, { [s()(aB.HV, aH.DX)]: i }),
        children: [
            (0, a.jsx)(w.A, { children: `${l()}: ` }),
            (0, a.jsx)("span", {
                className: aB.my,
                children: (0, a.jsx)(aL.eu, {
                    src: (0, aF.AE)(void 0, void 0),
                    size: aD._3.SIZE_24,
                    "aria-label": eu.intl.string(eo.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: aB.fw,
                children: [
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), ah.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    (0, a.jsx)(aK, { example: n }),
                ],
            }),
        ],
    });
}
function aY(e) {
    let { group: t } = e,
        n = i.useId(),
        l = aG[t.section],
        r = aV[t.section],
        s = aW[l.tone];
    return (0, a.jsxs)("div", {
        className: aB.uW,
        children: [
            (0, a.jsxs)("div", {
                className: aB.bV,
                children: [
                    (0, a.jsx)(r, { size: "xs", color: s.icon, "aria-hidden": !0 }),
                    (0, a.jsx)(v.E, {
                        id: n,
                        variant: "text-xs/semibold",
                        color: s.text,
                        className: aB.a9,
                        children: l.label(),
                    }),
                ],
            }),
            (0, a.jsx)("ul", {
                className: aB.Ge,
                "aria-labelledby": n,
                children: t.examples.map((e, t) => (0, a.jsx)(aX, { example: e }, t)),
            }),
        ],
    });
}
function aJ() {
    let { avatarSrc: e, eventHandlers: t } = (0, aO.a)(!0);
    return (0, a.jsx)("span", {
        className: aB.Gy,
        ...t,
        children: (0, a.jsx)(aL.eu, { src: e, size: aD._3.SIZE_16, "aria-label": eu.intl.string(eu.t.hG1StD) }),
    });
}
function aQ(e) {
    var t;
    let { automod: n } = e;
    return (0, a.jsx)("div", {
        className: aB.K1,
        children: ((t = n.examples),
        aq
            .map((e) => ({ section: e, examples: t.filter((t) => a$[t.outcome] === e) }))
            .filter((e) => e.examples.length > 0)).map((e) => (0, a.jsx)(aY, { group: e }, e.section)),
    });
}
var aZ = n(443863);
function a0(e) {
    let { label: t, icon: n, info: l, children: i } = e;
    return (0, a.jsxs)("section", {
        className: aZ.uW,
        children: [
            (0, a.jsxs)("span", {
                className: aZ.a9,
                children: [
                    n,
                    (0, a.jsx)(v.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }),
                    l,
                ],
            }),
            i,
        ],
    });
}
function a2(e) {
    let { text: t, label: n } = e;
    return (0, a.jsx)(y.m, {
        text: t,
        children: (0, a.jsx)(j.D, {
            className: aZ.bk,
            "aria-label": n,
            children: (0, a.jsx)(aI.CircleInformationIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
function a1(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)(a0, {
              label: t,
              children: (0, a.jsx)("div", {
                  className: aZ.Ip,
                  children: n.map((e) =>
                      (0, a.jsx)(
                          "span",
                          {
                              className: aZ.jw,
                              children: (0, a.jsx)(v.E, {
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
function a6() {
    return (0, a.jsxs)("span", {
        className: aZ.L6,
        children: [
            (0, a.jsx)(aT.ShieldIcon, {
                size: "custom",
                width: 16,
                height: 16,
                color: "currentColor",
                "aria-hidden": !0,
            }),
            (0, a.jsx)(v.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                tag: "span",
                children: eu.intl.string(eo.default.DnWMLj),
            }),
        ],
    });
}
function a9(e) {
    let { isActivity: t, hasWidget: n } = e,
        l = t ? aP.k : aM.RobotIcon;
    return (0, a.jsxs)("span", {
        className: aZ.K2,
        children: [
            n
                ? (0, a.jsxs)("span", {
                      className: aZ.L6,
                      children: [
                          (0, a.jsx)(a_.f, {
                              size: "custom",
                              width: 16,
                              height: 16,
                              color: "currentColor",
                              "aria-hidden": !0,
                          }),
                          (0, a.jsx)(v.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              tag: "span",
                              children: eu.intl.string(eo.default["EswAi+"]),
                          }),
                      ],
                  })
                : null,
            (0, a.jsxs)("span", {
                className: aZ.L6,
                children: [
                    (0, a.jsx)(l, { size: "custom", width: 16, height: 16, color: "currentColor", "aria-hidden": !0 }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        tag: "span",
                        children: eu.intl.string(t ? eu.t.IC5Ann : eo.default.VFWfz1),
                    }),
                ],
            }),
        ],
    });
}
function a3(e) {
    let { projectId: t, design: n } = e,
        { id: l } = n,
        { src: r, gone: s, handleError: o } = lX(t, l),
        u = eu.intl.string(eo.default["3/aHX6"]),
        d = i.useCallback(() => {
            (0, el.PK)(t, l).then(
                (e) => {
                    (0, l_.R)({
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
        : (0, a.jsx)(a0, {
              label: eu.intl.string(eo.default.X15LLY),
              info: (0, a.jsx)(a2, {
                  text: eu.intl.string(eo.default.nR4B8P),
                  label: eu.intl.string(eo.default.nc0SNY),
              }),
              children: (0, a.jsx)(j.D, {
                  className: aZ.xX,
                  onClick: d,
                  "aria-label": eu.intl.string(eo.default.TvAPIm),
                  children: null != r ? (0, a.jsx)("img", { src: r, alt: u, className: aZ.sN, onError: o }) : null,
              }),
          });
}
function a5(e) {
    let { projectId: t, proposal: n, version: l, onApprove: i } = e,
        { automod: r } = n,
        s = l?.superseded === !0,
        o = n.what_changed?.trim() ?? "";
    return (0, a.jsxs)(lo, {
        title:
            s && null != l
                ? eu.intl.formatToPlainString(eo.default.YZ3qJs, { version: l.version })
                : eu.intl.string(eo.default["3b6e7o"]),
        meta: s
            ? (0, a.jsx)(ls, { children: eu.intl.string(eo.default.hF2c41) })
            : null != r
              ? (0, a.jsx)(a6, {})
              : (0, a.jsx)(a9, { isActivity: !0 === n.is_activity, hasWidget: null != n.widget_config }),
        superseded: s,
        showLabel: eu.intl.string(eo.default.yD8EJS),
        hideLabel: eu.intl.string(eo.default.nSPGNb),
        bodyClassName: aZ.rf,
        "data-conjure-plan-card": !0,
        children: [
            "" !== o
                ? (0, a.jsx)(a0, {
                      label: eu.intl.string(eo.default.iNS4dl),
                      children: (0, a.jsx)(v.E, {
                          variant: "experimental/body-md/normal",
                          color: "text-default",
                          selectable: !0,
                          children: o,
                      }),
                  })
                : null,
            (0, a.jsx)(v.E, {
                variant: "experimental/body-md/normal",
                color: "text-default",
                selectable: !0,
                children: n.summary,
            }),
            null != r && r.examples.length > 0
                ? (0, a.jsx)(a0, {
                      label: eu.intl.string(eo.default.z4ZKYG),
                      icon: (0, a.jsx)(aJ, {}),
                      info: (0, a.jsx)(a2, {
                          text: eu.intl.string(eo.default.bo4MOx),
                          label: eu.intl.string(eo.default.VPLNot),
                      }),
                      children: (0, a.jsx)(aQ, { automod: r }),
                  })
                : null,
            null == r && null != n.design_image ? (0, a.jsx)(a3, { projectId: t, design: n.design_image }) : null,
            n.changes.length > 0
                ? (0, a.jsx)(a0, {
                      label: eu.intl.string(eo.default["5+mG1z"]),
                      children: (0, a.jsx)("ul", {
                          className: aZ.p_,
                          children: n.changes.map((e, t) =>
                              (0, a.jsx)(
                                  "li",
                                  {
                                      className: aZ.Aw,
                                      children: (0, a.jsx)(v.E, {
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
                ? (0, a.jsx)(a0, {
                      label: eu.intl.string(eu.t["0hKkS+"]),
                      children: (0, a.jsx)("ul", {
                          className: aZ.p_,
                          children: n.commands.map((e, t) =>
                              (0, a.jsxs)(
                                  "li",
                                  {
                                      className: aZ.uX,
                                      children: [
                                          (0, a.jsxs)(v.E, {
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
                                          (0, a.jsx)(v.E, {
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
            (0, a.jsx)(a1, { label: eu.intl.string(eo.default["2UbW6r"]), names: n.bot_permissions ?? [] }),
            (0, a.jsx)(a1, { label: eu.intl.string(eo.default["7TKfpj"]), names: n.privileged_intents ?? [] }),
            null == i || s
                ? null
                : (0, a.jsxs)("div", {
                      className: aZ.o1,
                      children: [
                          (0, a.jsx)(C.$, {
                              variant: "primary",
                              size: "sm",
                              text: eu.intl.string(eo.default["6S+wRM"]),
                              onClick: i,
                          }),
                          (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              tag: "span",
                              children: eu.intl.string(eo.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
var a4 = n(331322);
function a7(e) {
    return null != e && e.status?.state === "unpublished";
}
function a8(e) {
    let { publish: t } = e,
        n = t.guildId,
        l = (0, c.bG)([Y.A], () => (null == n ? null : Y.A.getGuild(n)));
    return (0, a.jsx)(a4.B, {
        gap: 8,
        align: "start",
        children: (0, a.jsxs)(a4.B, {
            direction: "horizontal",
            gap: 8,
            align: "center",
            children: [
                (0, a.jsx)(y.m, {
                    text: t.disabledReason,
                    asContainer: !0,
                    children: (0, a.jsx)(C.$, {
                        variant: "primary",
                        size: "sm",
                        loading: t.publishing,
                        disabled: t.disabled,
                        onClick: () => t.run("card"),
                        text: t.label,
                    }),
                }),
                null != l
                    ? (0, a.jsxs)(a4.B, {
                          direction: "horizontal",
                          gap: 4,
                          align: "center",
                          children: [
                              (0, a.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: eu.intl.string(eo.default["+HGTlC"]),
                              }),
                              (0, a.jsx)(eK.Ay, { guild: l, size: eK.Ay.Sizes.SMOL }),
                              (0, a.jsx)(v.E, {
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
function ie(e) {
    let { projectId: t } = e,
        n = nJ(t);
    return null != n && a7(n) ? (0, a.jsx)(a8, { publish: n }) : null;
}
var it = n(478016),
    il = n(989271);
function ia(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        o = null == l;
    return (0, a.jsxs)(j.D, {
        className: s()(il.nM, { [il.f1]: o, [il.CZ]: n }),
        onClick: o ? void 0 : () => l(t),
        "aria-label": eu.intl.formatToPlainString(eo.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": o,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: il.jo,
                children: [
                    n
                        ? (0, a.jsx)(it.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: il.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(v.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: il.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "div",
                      id: r,
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function ii(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(li, {
        title: eu.intl.string(eo.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                ia,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
function ir(e) {
    let { onAsk: t } = e;
    return (0, a.jsx)(a4.B, {
        align: "start",
        "data-conjure-ideas-offer": !0,
        children: (0, a.jsx)(C.$, {
            variant: "secondary",
            size: "sm",
            disabled: null == t,
            onClick: t,
            text: eu.intl.string(eo.default["U/bLzU"]),
        }),
    });
}
var is = n(530557),
    io = n(872162);
function iu(e, t) {
    return { cardId: e, status: "pending" === t ? null : t };
}
var id = n(202723);
function ic(e) {
    let { projectId: t, cardId: l, request: r, status: o, awaiting: u } = e,
        d = i.useCallback(() => {
            (0, ew.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("291953"), n.e("408337")]).then(n.bind(n, 789864));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        c = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: is.R })), [r.fields]),
        m = (function (e, t) {
            let [n, l] = i.useState(() => iu(e, t));
            return n.cardId !== e || (null == n.status && "pending" !== t)
                ? (l(iu(e, t)), !1)
                : null != n.status && t !== n.status;
        })(l, o),
        f = s()(id.Lo, { [id.jY]: m });
    return "superseded" === o
        ? (0, a.jsx)(
              "article",
              {
                  className: f,
                  children: (0, a.jsx)(v.E, {
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      tag: "span",
                      children: eu.intl.string(eo.default.CTxtdV),
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
                        (0, a.jsx)(v.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            tag: "span",
                            children: eu.intl.string(eo.default.HCQvpO),
                        }),
                        (0, a.jsx)(io.C, { label: eu.intl.string(eo.default.HCQvpO), size: "xs", items: c }),
                    ],
                },
                o,
            )
          : "pending" === o
            ? (0, a.jsx)(
                  "article",
                  {
                      className: id.Lo,
                      children: (0, a.jsx)(io.C, { label: eu.intl.string(eo.default.HCQvpO), size: "xs", items: c }),
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
                                className: id.$h,
                                children: [
                                    (0, a.jsx)("span", {
                                        className: id.c9,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(aR.y, {
                                            size: "xs",
                                            color: D.A.colors.ICON_FEEDBACK_POSITIVE,
                                        }),
                                    }),
                                    (0, a.jsx)(v.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-feedback-positive",
                                        tag: "span",
                                        children: eu.intl.string(eo.default.sfp7Up),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(io.C, { label: eu.intl.string(eo.default.sfp7Up), size: "xs", items: c }),
                        ],
                    },
                    o,
                )
              : (0, a.jsxs)("article", {
                    className: id.Lo,
                    children: [
                        (0, a.jsx)(v.E, {
                            variant: "text-xs/semibold",
                            color: null != u ? "text-brand" : "text-muted",
                            tag: "span",
                            children: eu.intl.string(null != u ? eo.default.O0QIqj : eo.default.HCQvpO),
                        }),
                        (0, a.jsx)(v.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            selectable: !0,
                            children: null != r.note && "" !== r.note ? r.note : eu.intl.string(eo.default.MPGSHL),
                        }),
                        (0, a.jsx)(io.C, { label: eu.intl.string(eo.default.HCQvpO), size: "xs", items: c }),
                        (0, a.jsx)("div", {
                            className: id.sq,
                            children: (0, a.jsx)(C.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: d,
                                text: eu.intl.string(eo.default.EK8tKY),
                            }),
                        }),
                    ],
                });
}
var im = n(919790),
    ih = n(971824),
    ip = n(162052),
    ig = n(165648);
function ix(e) {
    let t = ak(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? aw(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: ag(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function ib(e) {
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
        x = i.useMemo(() => (0, n4.GO)(n, { turnActive: l }), [n, l]),
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
            className: lg.pj,
            "data-live": !1,
            children: (0, a.jsx)(lt.A, {
                glyph: (0, a.jsx)(af.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: eu.intl.string(eo.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let v = l ? void 0 : (g ?? (h ? (x.turn?.durationMs ?? o) : void 0)),
        j = f ? ((0, n4.lt)(n) ?? d ?? null) : null,
        y = null != j && j.length > 0;
    if (0 === b.steps.length && 0 === b.tasks.length && !y) return null;
    let w = b.tasks,
        k = ak(w.map((e) => e.taskId)),
        C = !p && (l || w.some((e) => "running" === e.task.status)),
        A = ix(w);
    return (0, a.jsx)(lt.E.Provider, {
        value: w.length,
        children: (0, a.jsxs)("ol", {
            className: lg.pj,
            "data-live": C,
            children: [
                (0, a.jsx)(n8.A, {
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
                    let l = null != e.task.helperMark ? aw(e.task.helperMark) : void 0,
                        i = l ?? k.get(e.taskId);
                    return null == i
                        ? null
                        : (0, a.jsx)(
                              aN,
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
                y
                    ? (0, a.jsx)("li", {
                          className: lg.YO,
                          children: (0, a.jsx)(lh, { todos: j, provisional: c, agents: A, live: r, superseded: s }),
                      })
                    : null,
            ],
        }),
    });
}
function iv(e) {
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
            onApprovePlan: j,
            sideReply: y = !1,
            sideReplyAcknowledges: w,
            hoistedProse: k = !1,
            hoistedAttachmentsHost: C,
            restoreProposal: A,
            onRestoreProposal: N,
        } = e,
        S = i.useMemo(
            () => ax({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != d && d.length > 0 }),
            [n, l, r, d],
        ),
        { streamed: E, lastStreamedMessage: I, showsClosingMessage: T, closingContent: P } = S,
        M = (k ? C : void 0) ?? S.attachmentsHost,
        _ = T && !k,
        R = null == d ? null : (0, a.jsx)(im.A, { projectId: t, attachments: d }),
        L = null == R ? null : (0, a.jsx)("div", { className: lg.MT, children: R }),
        D = y
            ? (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return eu.intl.string(eo.default.Mv5OmK);
                          case "queued":
                              return eu.intl.string(eo.default["Po/2mi"]);
                          case "restarting":
                              return eu.intl.string(eo.default.Vj0woh);
                          default:
                              return eu.intl.string(eo.default.gY3L8p);
                      }
                  })(w),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: lg.ue,
        children: [
            E.length > 0 && !k
                ? (0, a.jsx)("ol", {
                      className: lg.dO,
                      children: E.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: lg.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: ig.PT,
                                          children: ah.A.parse(e.content, !0, {
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
                ? (0, a.jsx)(a5, { projectId: t, proposal: r, version: o, onApprove: j })
                : _
                  ? (0, a.jsxs)("div", {
                        className: s()(lg.ky, ip.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: s()(ig.PT, lg.cW),
                                children: ah.A.parse(P, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === M ? L : null,
                            D,
                        ],
                    })
                  : null,
            null != c
                ? (0, a.jsx)("div", {
                      className: s()(lg.ky, ip.XR, { [ih.O]: null != f && "open" === h }),
                      children: (0, a.jsx)(ic, {
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
                      className: s()(lg.ky, ip.XR),
                      children: (0, a.jsx)(an, { projectId: t, request: p }),
                  })
                : null,
            "standalone" !== M && ("closing" !== M || _) ? null : R,
            null != g ? (0, a.jsx)(ie, { projectId: t }) : null,
            null != u && u.length > 0 ? (0, a.jsx)(ii, { ideas: u, pickedIdeaIds: b, onPick: x }) : null,
            null != A ? (0, a.jsx)(aE, { proposal: A, onRestore: N }) : null,
            _ ? null : D,
        ],
    });
}
var ij = n(146806),
    iy = n(475358),
    iw = n(717400),
    ik = n(663341),
    iC = n(559647),
    iA = n(775602),
    iN = n(234320),
    iS = n(285796),
    iE = n(922329),
    iI = n(153171);
let iT = Q.lN;
function iP(e, t, n, l) {
    let a = lz(e, t).length;
    !(function (e, t, n) {
        if (0 === n.length) return;
        let l = n.map((e) => {
            let { draft: t, upload: n } = e;
            return { draft: { ...t, localId: lD++ }, upload: n };
        });
        for (let { draft: n, upload: a } of (lU(e, t, [
            ...lz(e, t),
            ...l.map((e) => {
                let { draft: t } = e;
                return t;
            }),
        ]),
        l))
            a?.().then(
                (l) => {
                    "errorText" in l
                        ? lG(e, t, n.localId, { status: "error", errorText: l.errorText })
                        : lG(e, t, n.localId, { status: "ready", ref: l })
                          ? setTimeout(
                                () =>
                                    lG(e, t, n.localId, {
                                        status: "error",
                                        errorText: eu.intl.string(eo.default.E7dS5n),
                                    }),
                                Q.o2 - 3e5,
                            )
                          : lq(e, l.id);
                },
                (l) => {
                    (console.error("[vibegrations] attachment upload failed", l),
                        lG(e, t, n.localId, { status: "error", errorText: eu.intl.string(eo.default["kUw/b1"]) }));
                },
            );
    })(
        e,
        t,
        n.map((e) => {
            let t = "" === e.type ? "application/octet-stream" : e.type,
                n = { name: e.name, contentType: t };
            if (a++ >= iT)
                return {
                    draft: {
                        ...n,
                        status: "error",
                        errorText: eu.intl.formatToPlainString(eo.default.Q0aCVZ, { count: iT }),
                    },
                };
            if (!(0, Q.Oq)(e.size, t)) return { draft: { ...n, status: "error", errorText: lH(t) } };
            let i = Q.XB.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...n, status: "uploading", previewUrl: i }, upload: () => l(e) };
        }),
    );
}
function iM(e) {
    let { projectId: t, surface: n, onUploadFile: l } = e,
        a = lO.useState((e) => lF(e, t, n)),
        r = i.useCallback((e) => iP(t, n, e, l), [t, n, l]),
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
                null != (a = (l = lz(t, n)).find((t) => t.localId === e)) &&
                    (l$(t, a),
                    lU(
                        t,
                        n,
                        l.filter((t) => t.localId !== e),
                    ));
            },
            [t, n],
        ),
        u = i.useCallback(() => lW(t, n), [t, n]);
    return {
        drafts: a,
        addFiles: r,
        pasteFiles: s,
        removeDraft: o,
        settled: a.every((e) => "ready" === e.status),
        takeRefs: u,
    };
}
function i_(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(iE.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(k.y, { type: k.t.SPINNING_CIRCLE_SIMPLE, className: iI.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: iI.o1,
                onClick: () => n(t.localId),
                "aria-label": eu.intl.string(eo.default.Slam9g),
                children: (0, a.jsx)(iS.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var iR = n(497437);
let iL = "text-md/normal",
    iD = null;
function iO(e) {
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
    let [j, y] = i.useState(0),
        [w, k] = i.useState(null),
        C = i.useRef(!1),
        A = i.useCallback(() => {
            (k(C.current ? (n ? "through" : "out") : n ? "in" : null), y((e) => e + 1));
        }, [n]);
    i.useEffect(() => {
        C.current = n;
    }, [n, t]);
    let N = "in" === w ? x.backFrom : x.frontFrom,
        S = "out" === w ? x.frontTo : x.backTo,
        E = (0, c.bG)([iA.Ay], () => iA.Ay.useReducedMotion),
        I = t === eu.intl.string(eo.default.Zc7gML),
        T = r === t && I;
    function P(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: s()(iR.VT, { [iR.qk]: l }),
            style: l
                ? {
                      insetInlineStart: f,
                      "--custom-cap-wipe-delay": `${N}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, S - N)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": l && j > 0 && null != w ? j % 2 : void 0,
            "data-wipe-kind": l ? (w ?? void 0) : void 0,
            children: (0, a.jsx)(iy.e, { shortcut: "tab", className: iR.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(eF.o, {
                text: t,
                variant: iL,
                delay: null,
                duration: 1e3,
                trailingWidth: p,
                className: s()(iR.xM, { [iR.s2]: l }),
                onStart: A,
                onComplete: () => o(t),
            }),
            P(iR.IS, n || (!E && "out" === w), u),
            (0, a.jsx)("span", {
                ref: d,
                className: iR.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(v.E, { variant: iL, tag: "span", children: t }),
            }),
            T
                ? (0, a.jsxs)("span", {
                      className: iR.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(v.E, { variant: iL, tag: "span", className: iR.xM, children: t }),
                          P(iR.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
function iF(e) {
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
        [j, k] = i.useState(() => ac.getDraft(t)),
        C = i.useCallback(
            (e) => {
                ((0, eT.I$)(t, e), k(e));
            },
            [t],
        ),
        A = "" !== j.trim();
    i.useEffect(() => x?.(A), [A, x]);
    let [N, S] = i.useState(t);
    N !== t && (S(t), k(ac.getDraft(t)));
    let E = (0, c.bG)([iA.Ay], () => iA.Ay.isSubmitButtonEnabled),
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
        } = iM({ projectId: t, surface: "chat", onUploadFile: d }),
        F = "" !== j.trim() || M.length > 0 || g,
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
            o(j, e.length > 0 ? e : void 0);
            let t = (function (e, t, n) {
                let l,
                    a,
                    i = n.split("\n", 1)[0] ?? "";
                if (null == e || "" === i) return i;
                null == iD && (iD = document.createElement("canvas").getContext("2d"));
                let r = iD;
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
            })(X.current?.querySelector("textarea") ?? null, ed.current, j);
            ("" !== t && G(t), C(""));
        }, [z, j, o, O, C]),
        $ = i.useCallback(
            (e) => {
                (e.preventDefault(), q());
            },
            [q],
        ),
        B = i.useCallback(() => {
            null == u || I || (T(!0), u());
        }, [u, I]),
        H = null == h || "" !== j || !n || l || s || g ? null : h,
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
    (0, iN.Vo)({
        event: eb.jej.GLOBAL_CLIPBOARD_PASTE,
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
        [el, ea] = i.useState(!1);
    i.useEffect(() => {
        if (0 === j.length) return void ea(!1);
        let e = X.current?.querySelector("textarea");
        if (null != e) {
            let t = iG(e);
            null != t && Q(t);
        }
        ea(!0);
        let t = setTimeout(() => ea(!1), iz);
        return () => clearTimeout(t);
    }, [j]);
    let ei = i.useMemo(() => ({ "--custom-glow-x": `${J}px` }), [J]),
        er = el ? ` ${iR.EB}` : "",
        es = s
            ? eu.intl.string(eo.default.qqlUiW)
            : l
              ? eu.intl.string(eo.default.mPB3eo)
              : n
                ? g
                    ? eu.intl.string(eo.default.knUjL3)
                    : p
                      ? eu.intl.string(eo.default.IevBEw)
                      : eu.intl.string(r ? eo.default["0BJa/0"] : eo.default.TEeU7z)
                : eu.intl.string(eo.default.zZ9NgM),
        ed = i.useRef(0),
        ec = i.useRef(null),
        em = i.useCallback((e) => {
            if ((ec.current?.disconnect(), null == e)) return;
            ed.current = e.clientWidth;
            let t = new ResizeObserver(() => {
                ed.current = e.clientWidth;
            });
            (t.observe(e), (ec.current = t));
        }, []),
        ef = i.useId(),
        eh = null != H,
        ep = U ?? H ?? es,
        eg = "" === j && "" !== ep;
    return (0, a.jsxs)("form", {
        onSubmit: $,
        className: iR.DA,
        children: [
            M.length > 0
                ? (0, a.jsx)("div", {
                      className: iR.lN,
                      children: M.map((e) => (0, a.jsx)(i_, { draft: e, onRemove: L }, e.localId)),
                  })
                : null,
            (0, a.jsx)("span", { className: `${iR.wg} ${iR.LP}${er}`, style: ei, "aria-hidden": !0 }),
            (0, a.jsx)("span", { className: `${iR.wg} ${iR.L3}${er}`, style: ei, "aria-hidden": !0 }),
            (0, a.jsxs)("div", {
                className: iR.VA,
                ref: X,
                children: [
                    (0, a.jsx)("input", {
                        ref: P,
                        type: "file",
                        multiple: !0,
                        onChange: K,
                        className: iR.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    null == f
                        ? (0, a.jsx)(y.m, {
                              text: eu.intl.string(eo.default.lgvqSB),
                              ariaHidden: !0,
                              children: (0, a.jsx)("button", {
                                  ref: Y,
                                  type: "button",
                                  className: `${iR.Y0} ${iR.nu}`,
                                  disabled: !n,
                                  onClick: () => P.current?.click(),
                                  "aria-label": eu.intl.string(eo.default.lgvqSB),
                                  children: (0, a.jsx)(en.H, {
                                      size: "refresh_sm",
                                      color: "currentColor",
                                      className: iR.Qu,
                                  }),
                              }),
                          })
                        : (0, a.jsx)(Z.Y, {
                              targetElementRef: Y,
                              position: "top",
                              align: "left",
                              animation: Z.Y.Animation.NONE,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, a.jsx)(ee.W, {
                                      "data-menu-migrated": !0,
                                      navId: "conjure-composer-attach",
                                      "aria-label": eu.intl.string(eu.t.d56gCa),
                                      onClose: t,
                                      onSelect: t,
                                      children: (0, a.jsxs)(et.rX, {
                                          children: [
                                              (0, a.jsx)(et.Dr, {
                                                  id: "upload-file",
                                                  label: eu.intl.string(eu.t["d3+iYs"]),
                                                  iconLeft: en.H,
                                                  leadingAccessory: { type: "icon", icon: en.H },
                                                  action: () => P.current?.click(),
                                              }),
                                              null != f
                                                  ? (0, a.jsx)(et.Dr, {
                                                        id: "import-project",
                                                        label: eu.intl.string(eo.default["p/k5i7"]),
                                                        iconLeft: iw.q,
                                                        leadingAccessory: { type: "icon", icon: iw.q },
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
                                      className: `${iR.Y0} ${iR.nu}`,
                                      disabled: !n,
                                      "aria-label": eu.intl.string(eu.t.d56gCa),
                                      "aria-haspopup": "menu",
                                      "aria-expanded": l,
                                      children: (0, a.jsx)(ik.PlusLargeIcon, {
                                          size: "refresh_sm",
                                          color: "currentColor",
                                          className: iR.Qu,
                                      }),
                                  });
                              },
                          }),
                    eg
                        ? (0, a.jsx)("div", {
                              ref: em,
                              className: iR.ar,
                              "aria-hidden": "true",
                              children: (0, a.jsx)(iO, { text: ep, offering: eh && null == U, typed: null != U }),
                          })
                        : null,
                    (0, a.jsx)(ly.y, {
                        value: j,
                        onChange: (e) => C(e.currentTarget.value),
                        onKeyDown: V,
                        onPaste: W,
                        placeholder: eg ? "" : es,
                        disabled: !n,
                        "aria-label": eu.intl.string(eo.default.ldNl9x),
                        "aria-describedby": eg ? ef : void 0,
                        rows: 1,
                        className: iR.jp,
                    }),
                    eg ? (0, a.jsx)(w.A, { id: ef, children: es }) : null,
                    (0, a.jsx)("div", {
                        className: iR.Sz,
                        children:
                            r && null != u
                                ? (0, a.jsx)(y.m, {
                                      text: eu.intl.string(eo.default.wiguT0),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)("button", {
                                          type: "button",
                                          className: `${iR.Y0} ${iR.$E}`,
                                          disabled: I,
                                          onClick: B,
                                          "aria-label": eu.intl.string(eo.default.wiguT0),
                                          children: (0, a.jsx)(af.w, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : b?.tierSettings != null && null != v
                                  ? (0, a.jsx)(tx, {
                                        settings: b.tierSettings,
                                        tiers: b.tiers,
                                        choices: b.choices,
                                        disabled: !n,
                                        onChange: v,
                                        className: `${iR.Y0} ${iR.$E}`,
                                        icon: (0, a.jsx)(tu.R, {
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
                              className: iR.fF,
                              children: [
                                  (0, a.jsx)("div", { className: iR.MT }),
                                  (0, a.jsx)("button", {
                                      type: "submit",
                                      className: iR.rt,
                                      disabled: !z,
                                      "aria-label": eu.intl.string(eo.default.rxW2cl),
                                      children: (0, a.jsx)(iC.SendMessageIcon, {
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
let iz = 1500,
    iU = [
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
function iG(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = iG.mirror;
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
                (iG.mirror = t),
                t
            );
        })(),
        n = window.getComputedStyle(e);
    for (let e of iU) t.style.setProperty(e, n.getPropertyValue(e));
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let l = document.createElement("span");
    ((l.textContent = "\u200B"), t.appendChild(l));
    let a = l.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + a - e.scrollLeft);
}
iG.mirror = null;
var iq = n(155899),
    i$ = n(148087);
let iB = [6e4, 18e4, 6e5],
    iH = [
        {
            key: "outdated",
            priority: 2,
            idleDelayMs: 6e4,
            backoffDelaysMs: iB,
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
                    (0, tV.BL)(t) &&
                    !(null != n.publishCta && a7(l))
                );
            },
        },
    ];
function iV(e, t) {
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
let iW = new Map();
function iK(e) {
    let { projectId: t, notice: n } = e;
    return "outdated" === n ? (0, a.jsx)(iY, { projectId: t }) : (0, a.jsx)(iX, { projectId: t, notice: n });
}
function iX(e) {
    let { projectId: t, notice: n } = e,
        l = i.useContext(nz),
        r = (0, c.bG)([eP.Ay, nI.A], () => {
            let e = eP.Ay.getProject(t);
            return null == e ? "" : (nI.A.getApplication(e.application_id)?.name ?? e.name);
        }),
        s = i.useCallback(() => {
            null != l &&
                (function (e, t) {
                    let n = nG(e, t.guildId);
                    if (null == n) return;
                    let l = nL({
                        ...n.input,
                        status: null == n.input.status ? null : { ...n.input.status, state: "up_to_date" },
                    })?.destination;
                    null != l && nq(n, l, t.platform).catch(() => {});
                })(t, l);
        }, [l, t]);
    return (0, a.jsx)(v.E, {
        variant: "text-md/normal",
        color: "text-default",
        children: eu.intl.format(
            (function (e) {
                if (!e.update) return eo.default.MOrR29;
                switch (e.surface) {
                    case "bot":
                        return eo.default.zfpeIL;
                    case "widget":
                        return eo.default.DxCfTh;
                    case "automod":
                        return eo.default["8ytGC3"];
                    case "activity":
                    case null:
                        return eo.default.WSmpBT;
                }
            })(n),
            { name: r, onOpen: s },
        ),
    });
}
function iY(e) {
    let { projectId: t } = e,
        n = nJ(t);
    return null == n
        ? null
        : (0, a.jsx)(v.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: eu.intl.format(eo.default.X8tdbS, {
                  action: n.label,
                  onUpdate: () => {
                      (iW.get(t)?.forEach((e) => e()), n.run("outdated_notice"));
                  },
              }),
          });
}
var iJ = n(248798);
function iQ(e, t) {
    e.style.height = `${t.offsetHeight}px`;
}
function iZ(e) {
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
            iQ(e, t);
            let n = new ResizeObserver(() => iQ(e, t));
            return (n.observe(t), () => n.disconnect());
        }, [r, o]),
        (0, a.jsx)("div", {
            ref: u,
            className: s()(iJ.NI, { [iJ.Jg]: null == r }),
            "aria-live": "polite",
            children: (0, a.jsx)("div", {
                className: iJ.t$,
                children: l.map((e) =>
                    (0, a.jsx)(
                        "div",
                        {
                            ref: e.leaving ? void 0 : d,
                            "aria-hidden": e.leaving || void 0,
                            className: s()(iJ.qd, e.leaving ? iJ.cu : iJ.We),
                            children: n(e.key),
                        },
                        e.key,
                    ),
                ),
            }),
        })
    );
}
var i0 = n(320095),
    i2 = n(963852),
    i1 = n(521981),
    i6 = n(763754),
    i9 = n(491182),
    i3 = n(438729),
    i5 = n(622868),
    i4 = n(448368),
    i7 = n(837528),
    i8 = n(439762),
    re = n(715628),
    rt = n(752636),
    rn = n(9842),
    rl = n(589022),
    ra = n(95701),
    ri = n(994500),
    rr = n(967198),
    rs = n(7584);
let ro = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function ru(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function rd(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function rc(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let a = rd(e, t),
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
    if (ru(a) && ru(i)) {
        let n = 0,
            l = t;
        for (; n < 32 && ru(rd(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function rm(e, t) {
    let { streaming: n } = t,
        l = (0, c.bG)([iA.Ay], () => iA.Ay.useReducedMotion),
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
                      for (; i > 0 && rc(t, i);) i--;
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
                                    for (; l > t + 1 && n - l < 12 && ro.has(e.charAt(l - 1));) l--;
                                    return ro.has(e.charAt(l - 1)) ? n : l;
                                })(t, a, Math.min(t.length, a + r));
                                let o = s;
                                for (; o < t.length && o - s < 32 && rc(t, o);) o++;
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
var rf = n(565645),
    rh = n(981879);
function rp(e) {
    let { emoji: t, label: n } = e;
    return (0, a.jsx)("div", {
        className: rh.H,
        children: (0, a.jsx)(rf.A, { emojiName: t, alt: n, size: "reaction" }),
    });
}
var rg = n(194085),
    rx = n(734495),
    rb = n(180227);
function rv(e) {
    let { message: t, onClose: n } = e,
        l = (0, rx.A)(t);
    return (0, a.jsx)(ee.W, {
        navId: "conjure-message-actions",
        "aria-label": eu.intl.string(eu.t.Lv7LxN),
        onClose: n,
        onSelect: n,
        children: (0, a.jsx)(et.rX, { children: l }),
    });
}
function rj(e) {
    let { groupStart: t, renderMenu: n } = e,
        [l, r] = i.useState(!1),
        o = i.useRef(null),
        u = i.useCallback(() => r((e) => !e), []),
        d = i.useCallback(() => r(!1), []);
    return (0, a.jsx)("div", {
        className: s()(rb.QE, { [rb.Rn]: t, [rb.vg]: l }),
        children: (0, a.jsx)(rg.Ay, {
            children: (0, a.jsx)(Z.Y, {
                targetElementRef: o,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return n(t);
                },
                shouldShow: l,
                onRequestClose: d,
                position: "left",
                align: "top",
                animation: Z.Y.Animation.NONE,
                children: (e, t) => {
                    let { onClick: n, ...l } = e,
                        { isShown: i } = t;
                    return (0, a.jsx)(rg.qv, {
                        ref: o,
                        label: eu.intl.string(eu.t["UKOtz+"]),
                        icon: t5.MoreHorizontalIcon,
                        selected: i,
                        onClick: u,
                        ...l,
                    });
                },
            }),
        }),
    });
}
function ry(e) {
    let { message: t, groupStart: n } = e,
        l = i.useCallback((e) => (0, a.jsx)(rv, { message: t, onClose: e }), [t]);
    return null == (0, rx.A)(t) ? null : (0, a.jsx)(rj, { groupStart: n, renderMenu: l });
}
let rw = (0, ra.createChannelRecord)({ id: "conjure-builder", type: eb.rbe.DM }),
    rk = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function rC(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: s()(rb.Yq, { [rb.x1]: t }), children: e });
}
function rA(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function rN(e, t, n) {
    let { content: l } = (0, i8.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        r = i.useMemo(() => ({ message: e, channel: rw, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(i3.Ay, { className: n, message: e, content: l, compact: !1 })
          : (0, re.A)(r, l);
}
function rS(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, i7.m)(e, rw, t.usernameProfile, l),
        o = (0, i7.Jo)(t.avatarProfile, l),
        u = (0, c.bG)([rr.A], () => rr.A.getGuildId()),
        d = (0, c.bG)([tB.default], () => tB.default.getCurrentUser()),
        m = i.useCallback(
            (t) => {
                let n = tB.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(rl.A, { ...t, user: n, currentUser: d, guildId: u ?? void 0 });
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
function rE(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        s = i.useMemo(() => {
            let e = "" !== n.content ? (0, i1.Ay)(n, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == l
                ? e
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: rb.GV,
                              children: [
                                  (0, a.jsx)(A.x, {
                                      className: rb.Rj,
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
            [ri.A],
            () => ({
                isReplyAuthorBlocked: ri.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: ri.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        d = (0, i6.X4)(n),
        m = (0, i6.X4)(t),
        f = rS(n);
    return (0, a.jsx)(i4.A, {
        repliedAuthor: d,
        baseAuthor: m,
        baseMessage: t,
        channel: rw,
        referencedMessage: { state: rn.a.LOADED, message: n },
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
function rI(e) {
    let { message: t, author: n } = e,
        l = rS(t);
    return (0, a.jsx)(i5.Ay, {
        message: t,
        channel: rw,
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
function rT(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, agentReaction: s, groupStart: o } = e;
    i.useEffect(() => tJ(l), [l]);
    let u = (0, c.bG)(
            [tB.default],
            () => tY(l, null != l ? tB.default.getUser(l) : null, tB.default.getCurrentUser()),
            [l],
        ),
        d = i.useMemo(() => (0, i6.FT)(u, null), [u]),
        m = i.useMemo(() => e6(t), [t]),
        f = m?.body ?? t,
        h = i.useMemo(() => {
            if (null == u) return null;
            let e = (0, i2.Ay)({ channelId: rw.id, content: f, author: u });
            return (0, i0.rh)({ ...e, timestamp: rA(n, e.timestamp), state: eb.cmJ.SENT });
        }, [f, u, n]),
        p = (function (e) {
            if (null == e || "" === e) return null;
            let t = rs.Ay.convertSurrogateToName(e, !1);
            return "" === t ? null : eu.intl.formatToPlainString(eo.default.lxXLho, { emojiName: t });
        })(s);
    return null == h
        ? null
        : (0, a.jsx)(rP, {
              message: h,
              author: d,
              content: f,
              selected: m?.label,
              accessories:
                  null != s && null != p
                      ? (0, a.jsxs)(a.Fragment, { children: [r, (0, a.jsx)(rp, { emoji: s, label: p })] })
                      : r,
              groupStart: o,
          });
}
function rP(e) {
    let { message: t, author: n, content: l, selected: i, accessories: r, groupStart: s = !0 } = e,
        o = rN(t, l);
    return (0, a.jsx)(i9.A, {
        className: rb.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(rI, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == i
                ? o
                : (0, a.jsxs)("div", {
                      className: rb.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: rb.GV,
                              children: [
                                  (0, a.jsx)(A.x, {
                                      className: rb.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  i,
                              ],
                          }),
                          (0, a.jsx)("span", { className: rb.WO, children: o }),
                      ],
                  }),
        childrenAccessories: rC(r, "" !== l),
        childrenButtons: (0, a.jsx)(ry, { message: t, groupStart: s }),
    });
}
function rM(e) {
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
        { text: m, revealing: f } = rm(t, { streaming: u }),
        h = i.useMemo(() => (0, i6.FT)(null, null), []),
        p = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        g = r?.userId,
        x = (0, c.bG)(
            [tB.default],
            () => tY(g, null != g ? tB.default.getUser(g) : null, tB.default.getCurrentUser()),
            [g],
        ),
        b = i.useMemo(() => (null == r ? null : e6(r.content)), [r]),
        v = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, i2.Ay)({ channelId: rw.id, content: b?.body ?? r.content, author: x });
            return (0, i0.rh)({ ...e, id: r.id, timestamp: rA(r.createdAt, e.timestamp), state: eb.cmJ.SENT });
        }, [r, b, x]),
        j = i.useMemo(() => (null == r ? void 0 : { channel_id: rw.id, message_id: r.id }), [r]),
        y = i.useMemo(() => {
            let e = (0, i2.Ay)({ channelId: rw.id, content: m, author: rk });
            return (0, i0.rh)({
                ...e,
                timestamp: rA(n, e.timestamp),
                state: eb.cmJ.SENT,
                ...(null != j ? { type: eb.lAJ.REPLY, message_reference: j } : {}),
            });
        }, [m, n, j]),
        w = rN(y, m, rb.OS);
    return (0, a.jsxs)("div", {
        className: rb.$4,
        "data-replying": null != v ? "true" : void 0,
        "data-conjure-revealing": f ? "true" : void 0,
        children: [
            (0, a.jsx)(i9.A, {
                className: rb.yE,
                author: p,
                childrenRepliedMessage:
                    null == v
                        ? null
                        : (0, a.jsx)(rE, { baseMessage: y, referenced: v, selected: b?.label, onJumpToReplied: s }),
                childrenHeader: (0, rt.A)({ message: y, channel: rw, author: p, guildId: void 0, isGroupStart: o }),
                childrenMessageContent: w,
                childrenAccessories: rC(l, "" !== m),
                disableInteraction: !0,
            }),
            d,
            o
                ? (0, a.jsx)("span", {
                      className: rb.st,
                      "aria-hidden": "true",
                      children: (0, a.jsx)(aP.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
let r_ = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i;
var rR = n(744898);
function rL(e) {
    let { onSelect: t, onClose: n = O.Z_, onRestoreVersion: l } = e;
    return (0, a.jsx)(ee.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": eu.intl.string(eu.t.ogxXGq),
        onSelect: t,
        children: (0, a.jsx)(et.rX, {
            children: (0, a.jsx)(et.Dr, {
                id: "restore-version",
                label: eu.intl.string(eo.default.H8Jfhu),
                icon: rR.e,
                action: l,
            }),
        }),
    });
}
var rD = n(986109);
function rO(e, t) {
    (0, iq.F)({ onConfirm: () => t(e) });
}
function rF(e) {
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
        j = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(j.current), []);
    let y = i.useCallback((e) => {
            let t = p.current?.querySelector(`[data-conjure-message="${e}"]`);
            (t?.scrollIntoView({ block: "center", behavior: "smooth" }),
                b(e),
                window.clearTimeout(j.current),
                (j.current = window.setTimeout(() => b(null), 1600)));
        }, []),
        w = (0, c.bG)([eP.Ay], () => eP.Ay.getPublishStatus(t)?.state ?? null),
        C = i.useMemo(() => {
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
                                        let t = (0, n4.lt)(e.steps);
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
                    let e = !(0, tV.BL)(t),
                        a = ax({
                            steps: t.steps,
                            content: t.content,
                            hasProposal: null != t.proposal,
                            hasAttachments: (t.attachments?.length ?? 0) > 0,
                        }),
                        i = a.lastStreamedMessage?.key,
                        r = (0, n4.C6)(t.steps, { turnActive: e }),
                        { lastWork: s, open: o } = (0, n4.CT)(r, { turnActive: e }),
                        u = r.at(-1)?.index,
                        d = !1;
                    for (let c of r) {
                        if (null != c.prose && r_.test(c.prose.content)) d = !0;
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
                                    turnActive: n7(t),
                                    checklistSuperseded: c.hasTodos && n.has(t.render_id),
                                },
                                { actor: null, boundary: void 0 },
                            );
                    }
                    let c = r_.test(t.content ?? "");
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
            let a = nJ(e),
                r = (0, i$.A)(),
                s = (function (e) {
                    for (let t = e.length - 1; t >= 0; t--) {
                        let n = e[t];
                        if ("publish_notice" !== n.kind) {
                            if ("user" === n.role) return null;
                            if ((0, tV.BL)(n)) return n;
                            if (!(0, tV.B0)(e, t)) break;
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
                [d, c] = i.useState(() => iV(u, Date.now())),
                m = (function (e, t, n) {
                    if (e.projectId !== t.projectId) return iV(t, n());
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
                            let t = Math.min(e.outdatedBackoff + 1, iB.length - 1);
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
                    iH.map((e) => ({
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
                    let n = iW.get(e) ?? new Set();
                    return (
                        iW.set(e, n),
                        n.add(t),
                        () => {
                            (n.delete(t), 0 === n.size && iW.delete(e));
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
                        return (0, a.jsx)(rM, {
                            groupStart: !1,
                            content: "",
                            accessories: (0, a.jsx)(iK, { projectId: t, notice: "outdated" }),
                        });
                    case "ideas":
                        return (0, a.jsx)("div", {
                            className: rD.u$,
                            children: (0, a.jsx)(rM, {
                                content: eu.intl.string(eo.default.s96AWB),
                                accessories: (0, a.jsx)(ir, { onAsk: u }),
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
                            if (!(0, tV.BL)(n) || "plan_implemented" === n.kind) return null;
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
                : (0, tV.BL)(A)
                  ? A.awaitingUser
                  : null) ?? void 0,
        P = (0, c.bG)([el.Ay], () => el.Ay.getSettings(t)?.secrets, [t]),
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
                                        t === eu.intl.string(eo.default.UGqnoV) ||
                                        t === eu.intl.string(eo.default.sMQt5O)
                                    );
                                })(s);
                            continue;
                        }
                        let o = s.secretRequest?.fields ?? [];
                        if (0 === o.length || !(0, tV.BL)(s)) continue;
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
                className: s()(rD.x7, rD.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: rD.Ub, children: (0, a.jsx)(k.y, {}) }),
            });
        let e = "unavailable" === l ? eo.default.Td4Sf4 : eo.default.V1QiNz;
        return (0, a.jsx)("ol", {
            ref: r,
            className: rD.x7,
            children: (0, a.jsx)(rz, { role: "assistant", children: (0, a.jsx)(rM, { content: eu.intl.string(e) }) }),
        });
    }
    return (0, a.jsxs)("ol", {
        ref: g,
        className: rD.x7,
        children: [
            C.map((e) => {
                let l = e.message;
                switch (e.kind) {
                    case "user": {
                        let n = null != l.attachments && l.attachments.length > 0 ? l.attachments : null;
                        return (0, a.jsx)(
                            rz,
                            {
                                role: "user",
                                anchorId: l.id,
                                highlighted: x === l.id,
                                continuation: !e.groupStart,
                                children: (0, a.jsx)(rT, {
                                    groupStart: e.groupStart,
                                    content: l.content,
                                    createdAt: l.created_at,
                                    userId: l.user_id,
                                    agentReaction: l.agentReaction,
                                    accessories:
                                        null != n ? (0, a.jsx)(im.A, { projectId: t, attachments: n }) : void 0,
                                }),
                            },
                            e.key,
                        );
                    }
                    case "prose":
                        return (0, a.jsx)(
                            rz,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                children: (0, a.jsx)(rM, {
                                    groupStart: e.groupStart,
                                    content: e.content,
                                    streaming: e.streaming,
                                    createdAt: l.created_at,
                                    accessories:
                                        e.hostsAttachments && null != l.attachments
                                            ? (0, a.jsx)(im.A, { projectId: t, attachments: l.attachments })
                                            : void 0,
                                }),
                            },
                            e.key,
                        );
                    case "activity":
                        return (0, a.jsx)(
                            rz,
                            {
                                role: "assistant",
                                children: (0, a.jsx)(ib, {
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
                            rz,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                children: (0, a.jsx)(rM, {
                                    groupStart: e.groupStart,
                                    content: null == l.publishNotice ? l.content : "",
                                    createdAt: l.created_at,
                                    accessories:
                                        null == l.publishNotice
                                            ? void 0
                                            : (0, a.jsx)(iK, { projectId: t, notice: l.publishNotice }),
                                }),
                            },
                            e.key,
                        );
                    case "interrupted":
                        return (0, a.jsx)(
                            rz,
                            {
                                role: "assistant",
                                children: (0, a.jsx)(ib, { projectId: t, interrupted: !0, steps: l.steps }),
                            },
                            e.key,
                        );
                    case "legacyTodos":
                        return (0, a.jsx)(
                            rz,
                            {
                                role: "assistant",
                                children: (0, a.jsx)(ib, {
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
                            r = null != i && null != h ? () => rO(i, h) : void 0,
                            s = l.restoreProposal;
                        return (0, a.jsx)(
                            rz,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                onContextMenu:
                                    null != r
                                        ? (e) => {
                                              (0, O.jA)(e, (e) => (0, a.jsx)(rL, { ...e, onRestoreVersion: r }));
                                          }
                                        : void 0,
                                children: (0, a.jsx)(rM, {
                                    groupStart: e.groupStart,
                                    buttons:
                                        null != r
                                            ? (0, a.jsx)(rj, {
                                                  groupStart: e.groupStart,
                                                  renderMenu: (e) =>
                                                      (0, a.jsx)(rL, { onClose: e, onSelect: e, onRestoreVersion: r }),
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
                                    onJumpToReplied: null != l.in_reply_to ? () => y(l.in_reply_to) : void 0,
                                    accessories: (0, a.jsx)(iv, {
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
                                                      rO(
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
                ? (0, a.jsx)(rz, {
                      role: "assistant",
                      continuation: !0,
                      children: (0, a.jsx)(rM, {
                          groupStart: !1,
                          content: "",
                          accessories: (0, a.jsx)(v.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: eu.intl.string(eo.default.YR8A2v),
                          }),
                      }),
                  })
                : null,
            (0, a.jsx)("li", {
                role: "none",
                className: rD.q3,
                children: (0, a.jsx)(iZ, { reminder: N, renderReminder: S }),
            }),
        ],
    });
}
function rz(e) {
    let { role: t, children: n, anchorId: l, highlighted: i = !1, continuation: r = !1, onContextMenu: o } = e;
    return (0, a.jsx)("li", {
        onContextMenu: o,
        "data-role": t,
        "data-conjure-message": l,
        className: s()(rD.xk, { [rD.Qo]: i, [rD.q3]: r }),
        children: n,
    });
}
let rU = [eo.default["AX+5lk"], eo.default.VAU6A7, eo.default["1emysd"], eo.default.EXHX3L, eo.default.ChslmX];
function rG(e) {
    return rU.some((t) => eu.intl.string(t) === e);
}
function rq(e) {
    switch (e) {
        case "connecting":
            return eu.intl.string(eo.default["ECl+Dx"]);
        case "closed":
            return eu.intl.string(eo.default.mQZSp1);
        case "failed":
            return eu.intl.string(eo.default.xzJSZ6);
    }
}
var r$ = n(823376),
    rB = n(187447);
function rH(e) {
    let { activity: t, id: n } = e,
        { text: l, revealing: r } = rm(t?.text ?? "", { streaming: null != t && "end" !== t.phase }),
        o = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [l]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: rB.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(n3.Ch, {
                ref: o,
                className: rB.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: s()(ig.PT, rB.bb),
                    "data-conjure-revealing": r ? "true" : void 0,
                    children: ah.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var rV = n(53659);
function rW(e) {
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
                ? eo.default["1jqaAc"]
                : l
                  ? eo.default.M4KI5F
                  : a
                    ? rU[0]
                    : n
                      ? eo.default.xnCAaP
                      : r
                        ? eo.default.izrt52
                        : eo.default.L9EDub;
        })({ activity: t, compacting: n, restoring: l, recalling: r, controlling: o }),
        g = eu.intl.string(p),
        x = p === rU["0"],
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
        ((C.current = x), !x && rG(k.current) && v(y.current));
    }, [x]),
        i.useEffect(() => {
            let e = 0,
                t = 0;
            function n() {
                if (C.current) {
                    var e;
                    ((A.current = rG(k.current) ? A.current + 1 : 0),
                        v(((e = A.current), eu.intl.string(rU[e % rU.length]))));
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
    return (0, a.jsx)(Z.Y, {
        targetElementRef: c,
        position: "top",
        align: "left",
        shouldShow: E,
        onRequestClose: T,
        renderPopout: () => (0, a.jsx)(rH, { id: m, activity: t }),
        children: () =>
            (0, a.jsxs)(j.D, {
                innerRef: c,
                className: s()(rV.hF, N && rV.Xd),
                "aria-label": eu.intl.string(l ? eo.default.qqlUiW : x ? rU["0"] : eo.default["Uuj/gh"]),
                "aria-expanded": E,
                "aria-describedby": E ? m : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": eu.intl.string(p),
                onClick: I,
                children: [
                    (0, a.jsx)("span", {
                        className: rV.bl,
                        children: (0, a.jsx)(r$.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: rV.xu,
                        "aria-hidden": !!o || !!x || void 0,
                        children: (0, a.jsx)(eF.o, {
                            ref: w,
                            text: b,
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            duration: 1e3,
                            delay: null,
                            className: rV.yE,
                        }),
                    }),
                ],
            }),
    });
}
let rK = { second: 1e3, minute: 6e4 };
function rX(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let n;
            if (null == e) return;
            let a = rK[t];
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
var rY = n(719374);
function rJ(e) {
    let { startedAt: t } = e,
        n = rX(t);
    return (0, a.jsx)(v.E, {
        tag: "span",
        variant: "text-xs/medium",
        color: "text-muted",
        "aria-hidden": !0,
        className: rY.$,
        "data-conjure-turn-timer": !0,
        children: (0, ap.C7)(n),
    });
}
function rQ(e) {
    let { startedAt: t } = e,
        n = rX(t, "minute");
    return (0, a.jsx)(w.A, { role: "timer", children: (0, ap.Us)(n) });
}
var rZ = n(436804);
function r0(e) {
    return e.toLocaleString();
}
function r2(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: rZ.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: rZ.mf,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [r0((0, Q.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(v.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    r0(n.input_tokens),
                    " in \xb7 ",
                    r0(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${r0(n.cache_creation_input_tokens)} cache write \xb7 ${r0(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function r1(e) {
    let { project: t } = e,
        n = (0, Q.wU)(t.compaction),
        l = (0, Q.wU)(t.classifier),
        i = (0, Q.wV)(t.orchestrator, t.codegen),
        r = (0, Q.wV)(i, n);
    return (0, a.jsxs)("div", {
        className: rZ.si,
        role: "dialog",
        "aria-label": eu.intl.string(eo.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: rZ.Q$,
                children: (0, a.jsxs)("div", {
                    className: rZ.mf,
                    children: [
                        (0, a.jsxs)(v.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [r0((0, Q.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(r2, { label: eu.intl.string(eo.default["9Sj3SX"]), usage: i }),
            (0, a.jsx)(r2, { label: eu.intl.string(eo.default.ANCEo3), usage: n }),
            (0, a.jsx)(r2, { label: eu.intl.string(eo.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsxs)("div", {
                className: rZ.mf,
                children: [
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: eu.intl.string(eo.default["8OUg09"]),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, Q.sj)(r) ? "\u2014" : `${Math.round(100 * (0, Q.CA)(r))}%`,
                    }),
                ],
            }),
        ],
    });
}
function r6(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(Z.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(r1, { project: t }),
        children: (e) =>
            (0, a.jsx)(j.D, {
                innerRef: n,
                className: rZ.Y$,
                "aria-label": eu.intl.string(eo.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(aI.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var r9 = n(997421);
function r3(e) {
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
        f = (0, tv.Zv)(n),
        [h, p] = i.useState(null),
        g = i.useCallback((e) => p(rG(e) ? null : e), []),
        x =
            null == c
                ? null
                : ((t = (0, Q.a7)(c.cost_usd)),
                  {
                      text: eu.intl.formatToPlainString(eo.default.gMuw5d, { runes: t.toLocaleString() }),
                      aria: eu.intl.formatToPlainString(eo.default.Z4LvGa, { runes: t, turns: c.turns }),
                  }),
        b = l && null != r;
    return (0, a.jsxs)("div", {
        className: r9.jf,
        children: [
            (0, a.jsxs)("div", {
                className: r9.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    l || s || o || f
                        ? (0, a.jsx)(rW, {
                              activity: u,
                              compacting: d,
                              restoring: s,
                              recalling: o,
                              controlling: f,
                              spoken: h,
                              onSpokenChange: g,
                          })
                        : null,
                    b ? (0, a.jsx)(rJ, { startedAt: r }) : null,
                ],
            }),
            b ? (0, a.jsx)(rQ, { startedAt: r }) : null,
            null == c || null == x
                ? null
                : (0, a.jsxs)("span", {
                      className: r9.BP,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": x.aria,
                              children: x.text,
                          }),
                          (0, a.jsx)(r6, { project: c }),
                      ],
                  }),
            "open" === m
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === m ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": eu.intl.formatToPlainString(eo.default["tCo+ZM"], { status: rq(m) }),
                      "data-conjure-conn": !0,
                      "data-state": m,
                      className: r9.XF,
                      children: rq(m),
                  }),
        ],
    });
}
var r5 = n(698638),
    r4 = n(608711);
let r7 = [eu.intl.string(eo.default["9w+Chc"]), eu.intl.string(eo.default.WAvmdq), eu.intl.string(eo.default.SKsrzl)];
function r8(e) {
    var t;
    let { projectId: l, restoreState: r, onRestoreVersion: s } = e,
        o = (0, c.bG)([tV.Ay], () => tV.Ay.getMessages(l), [l]),
        u = (0, c.bG)([el.Ay], () => el.Ay.getConnState(l), [l]),
        d = (0, c.bG)([el.Ay], () => el.Ay.isChatStopped(l), [l]),
        m = (0, c.bG)([tV.Ay], () => tV.Ay.getProjectUsage(l), [l]),
        f = (0, c.bG)([tV.Ay], () => tV.Ay.getThinkingActivity(l), [l]),
        h = (0, c.bG)([tV.Ay], () => tV.Ay.isCompacting(l), [l]),
        p = (0, c.bG)([el.Ay], () => el.Ay.getModelSettings(l), [l]),
        g = i.useRef(null),
        x = i.useRef(null),
        b = i.useRef(null),
        j = i.useRef(!0),
        [y, w] = i.useState(!0);
    i.useEffect(() => {
        j.current && x.current?.scrollToBottom();
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
        A = i.useCallback(() => {
            let e = x.current;
            if (null == e) return;
            let t = e.getDistanceFromBottom();
            j.current = t < 32;
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
            j.current &&
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
            (0, el.Hc)(l);
        }, [l]),
        (0, eN.E1)(l),
        i.useEffect(
            () => () =>
                (function (e) {
                    if ((0, nM.jb)(e)) return;
                    let t = (0, nM.hl)(e);
                    t < nM.qu ||
                        (0, nM.Xi)(e) ||
                        l7.A.possiblyShowFeedbackModal(l8.MW.VIBEGRATIONS, () => {
                            ((0, nM.AH)(e),
                                (0, ew.openModalLazy)(async () => {
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
    let N = tl(l),
        S = i.useCallback(
            (e, t) => {
                (0, el.dv)(l, e, t);
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
                                  a = t.filter((e) => eJ(e.comment)),
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
                                      i.push(`${t + 1}. ${e0(e.target)}`),
                                      i.push(
                                          `   Feedback: ${(n = e.comment.trim()).length <= 1e3 ? n : `${n.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let r = n.trim();
                              return ("" !== r && (i.push(""), i.push(`Note for the whole batch: ${r}`)), i.join("\n"));
                          })({ annotations: N.annotations, metaComment: e, context: N.context }),
                          t,
                      ),
                      e8(l));
            },
            [N, S, l],
        ),
        I = i.useCallback(() => (0, el.fu)(l), [l]),
        T = i.useCallback((e) => lK(l, e.implementation_prompt), [l]),
        [P, M] = (function (e) {
            let [t, n] = i.useState(() => am(e)),
                [l, a] = i.useState(e),
                r = l !== e,
                s = r ? am(e) : t;
            return (r && (a(e), n(s)), [s, n]);
        })(l),
        _ = i.useCallback(() => S(eu.intl.string(eo.default["t5CN3+"])), [S]),
        R = i.useCallback((e, t, n) => lK(l, e, { clarificationAnswers: t, attachments: n }), [l]),
        L = i.useCallback((e) => (0, el.XZ)(l, e), [l]),
        D = i.useCallback((e) => (0, el.vX)(l, e), [l]),
        O = i.useCallback((e) => iP(l, "chat", Array.from(e), D), [l, D]),
        F = i.useCallback(() => lK(l, eu.intl.string(eo.default.Zc7gML)), [l]),
        z = r?.status === "restoring",
        U = "open" === u && !d && !z,
        G = o[o.length - 1],
        q = null != G && "assistant" === G.role && null != G.proposal,
        [$, B] = i.useState(null),
        H = G?.clarification != null && G.clarification.id !== $ ? G.clarification : null,
        V = i.useCallback(() => {
            null != H && B(H.id);
        }, [H]),
        W = (0, c.bG)([el.Ay], () => el.Ay.getSettings(l), [l]),
        [K, X] = i.useState(null),
        Y =
            null != G &&
            "assistant" === G.role &&
            null != G.settingsRequest &&
            (0, tV.BL)(G) &&
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
            historyLoaded: (0, c.bG)([tV.Ay], () => tV.Ay.hasLoadedHistory(l), [l]),
            historyUnavailable: (0, c.bG)([tV.Ay], () => tV.Ay.isHistoryUnavailable(l), [l]),
            connState: u,
        }),
        et = "loading" === ee && 0 === o.length,
        en = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < l.length; t++) e = (31 * e + l.charCodeAt(t)) % 0x7fffffff;
            return r7[e % r7.length];
        }, [l]),
        ea = q ? eu.intl.string(eo.default.Zc7gML) : "greeting" === ee && 0 === o.length ? en : null,
        ei = i.useMemo(() => {
            for (let e = o.length - 1; e >= 0; e--) {
                let t = o[e];
                if ("assistant" === t.role && !(0, tV.BL)(t)) return t;
            }
        }, [o]),
        er = null != ei,
        es =
            null != ei
                ? (function (e) {
                      let t = e.turn_id ?? e.steps.find((e) => null != e.turn_id)?.turn_id;
                      if (null != t && /^\d+$/.test(t)) {
                          let e = al.default.extractTimestamp(t);
                          if (Number.isFinite(e) && e > 0) return e;
                      }
                      return e.created_at;
                  })(ei)
                : void 0,
        ed = q && U ? F : void 0,
        ec = i.useCallback(() => lK(l, eu.intl.string(eo.default.EMgIuY)), [l]),
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
    let eg = i.useMemo(() => (null != ei ? (0, n8.b)(ei.steps) : ""), [ei]),
        ex = i.useMemo(() => (null != ei ? ((0, n4.lt)(ei.steps) ?? ei.todos) : void 0), [ei]),
        eb = ei?.provisionalTodo,
        ev = null != ei && n7(ei),
        ej = i.useMemo(() => {
            var e;
            return null != ei ? ((e = ei.steps), ix((0, n4.GO)(e, { turnActive: !0 }).tasks)) : void 0;
        }, [ei]);
    return (0, a.jsxs)("section", {
        ref: g,
        "data-conjure-chat": !0,
        className: r4.TE,
        children: [
            U
                ? (0, a.jsx)(n5.A, {
                      title: eu.intl.string(eo.default.gy7byi),
                      description: eu.intl.string(eo.default["dkv/WO"]),
                      icons: r5.ir,
                      onDrop: O,
                  })
                : null,
            (0, a.jsx)(lb, {
                onJumpToActivity: k,
                line: eg,
                placement: er && "top" === em ? "top" : null,
                todos: ex,
                todosLive: ev,
                provisionalTodo: eb,
                agents: ej,
            }),
            (0, a.jsxs)("div", {
                className: r4.JX,
                children: [
                    (0, a.jsx)(n3.Ch, {
                        ref: x,
                        onScroll: A,
                        scrollbarGutter: et ? "both-edges" : "stable",
                        className: [r4.N$, y ? null : r4.hB, Z ? r4.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(rF, {
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
                        className: r4.NJ,
                        children: (0, a.jsx)(r3, {
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
                              className: Z ? `${r4.B5} ${r4.J9}` : r4.B5,
                              children: (0, a.jsx)(
                                  l4,
                                  { projectId: l, clarification: H, onSubmit: U ? R : void 0, onDismiss: V },
                                  H.id,
                              ),
                          }),
                    null == J
                        ? null
                        : (0, a.jsx)("div", {
                              className: r4.B5,
                              children: (0, a.jsx)(an, { projectId: l, request: J, onDismiss: Q }, Y?.id),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: r4.Jx,
                children: [
                    (0, a.jsx)(lb, {
                        onJumpToActivity: k,
                        line: eg,
                        placement: er && "bottom" === em ? "bottom" : null,
                        todos: ex,
                        todosLive: ev,
                        provisionalTodo: eb,
                        agents: ej,
                    }),
                    0 === N.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: r4.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: eu.intl.formatToPlainString(eo.default["7b49dS"], {
                                          count: N.annotations.length,
                                      }),
                                  }),
                                  (0, a.jsx)(v.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: eu.intl.string(eo.default["5zG+CR"]),
                                  }),
                                  (0, a.jsx)(C.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: eu.intl.string(eo.default["/zOv9+"]),
                                      onClick: () => e8(l),
                                  }),
                              ],
                          }),
                    (0, a.jsx)(iF, {
                        projectId: l,
                        canSend: U,
                        stopped: d,
                        running: er,
                        restoring: z,
                        onSend: E,
                        hasPendingContext: N.annotations.length > 0,
                        onInterrupt: U ? I : void 0,
                        onUploadFile: D,
                        onApprove: ed,
                        suggestion: ea,
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
var se = n(624479),
    st = n(761508),
    sn = n(540999);
let sl = [],
    sa = new Map(),
    si = new Map(),
    sr = new Map(),
    ss = new Map(),
    so = new Map(),
    su = new Map(),
    sd = new Map();
class sc extends c.Ay.Store {
    getStatus(e) {
        return sa.get(e) ?? null;
    }
    getFetchState(e) {
        return si.get(e) ?? "idle";
    }
    getLastCompaction(e) {
        return ss.get(e) ?? null;
    }
    getLastTurnUsage(e) {
        return su.get(e) ?? null;
    }
    getLastCompactionDecline(e) {
        return so.get(e) ?? null;
    }
    getModelCalls(e) {
        return sd.get(e) ?? sl;
    }
    getForceCompactionState(e) {
        return sr.get(e) ?? "idle";
    }
}
let sm = new sc(nE.h, {
    LOGOUT: function () {
        if (
            0 === sa.size &&
            0 === si.size &&
            0 === sr.size &&
            0 === ss.size &&
            0 === so.size &&
            0 === su.size &&
            0 === sd.size
        )
            return !1;
        (sa.clear(), si.clear(), sr.clear(), ss.clear(), so.clear(), su.clear(), sd.clear());
    },
    CONJURE_DEBUG_STATUS_REQUESTED: function (e) {
        let { projectId: t } = e;
        si.set(t, "loading");
    },
    CONJURE_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if ("open" === n) return !1;
        let l = "pending" === sr.get(t);
        l &&
            sr.set(t, {
                outcome: "failed",
                reason: "Connection lost before the worker answered",
                observedAt: new Date().toISOString(),
            });
        let a = "loading" === si.get(t);
        if ((a && si.set(t, "failed"), !l && !a)) return !1;
    },
    CONJURE_DEBUG_STATUS_SET: function (e) {
        let { projectId: t, status: n, failed: l } = e;
        l || null == n ? si.set(t, "failed") : (sa.set(t, n), si.set(t, "loaded"));
    },
    CONJURE_DEBUG_COMPACTION_REPORT: function (e) {
        ss.set(e.projectId, {
            tokensBefore: e.tokensBefore,
            tokensAfter: e.tokensAfter,
            retainedMessages: e.retainedMessages,
            promptCeiling: e.promptCeiling,
            observedAt: e.observedAt,
        });
    },
    CONJURE_DEBUG_COMPACTION_DECLINED: function (e) {
        so.set(e.projectId, {
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
        sr.set(t, "pending");
    },
    CONJURE_DEBUG_FORCE_COMPACTION_RESULT: function (e) {
        sr.set(e.projectId, {
            outcome: e.outcome,
            reason: e.reason,
            ...(!0 === e.pendingTurn ? { pendingTurn: !0 } : {}),
            observedAt: e.observedAt,
        });
    },
    CONJURE_DEBUG_MODEL_CALL: function (e) {
        let t = sd.get(e.projectId);
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
        sd.set(e.projectId, l.length > 200 ? l.slice(-200) : l);
    },
    CONJURE_CHAT_USAGE_SET: function (e) {
        let { projectId: t, turn: n } = e;
        if (0 === (0, Q.aM)(n.total)) return !1;
        su.set(t, n);
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        (sa.delete(t), si.delete(t), sr.delete(t), ss.delete(t), so.delete(t), su.delete(t), sd.delete(t));
    },
});
function sf(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function sh(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function sp(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function sg(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = String(t.getHours()).padStart(2, "0"),
        l = String(t.getMinutes()).padStart(2, "0"),
        a = String(t.getSeconds()).padStart(2, "0");
    return `${n}:${l}:${a}`;
}
function sx(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function sb(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function sv(e) {
    return eu.intl.string("preview" === e ? eo.default["2yLYlG"] : eo.default.eiAi57);
}
let sj = ["all", "preview", "stable", "web"],
    sy = new Set(["error", "aborted", "length"]);
function sw(e) {
    switch (e.reason) {
        case "local":
            return eu.intl.string(eo.default.mUeKML);
        case "unconfigured":
            return eu.intl.string(eo.default.bGefb5);
        case "unauthorized":
            return eu.intl.string(eo.default.KLx6Bb);
        default:
            return null != e.detail
                ? eu.intl.formatToPlainString(eo.default.t09Q6q, { detail: e.detail })
                : eu.intl.string(eo.default["t+tG59"]);
    }
}
function sk(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : eu.intl.formatToPlainString(eo.default["XO/bN4"], {
              p50: sf(e.memory_p50_bytes ?? 0),
              p999: sf(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let sC = {
    db: () => eo.default["7l+DFG"],
    db_preview: () => eo.default.FAuffi,
    runtime: () => eo.default["Gkl+ab"],
    runtime_preview: () => eo.default.ynpJzv,
    bot: () => eo.default["5/i0cj"],
    bot_preview: () => eo.default.m2jsnw,
};
var sA = n(911608),
    sN = n(177427);
function sS(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: sN.KE,
        children: [
            (0, a.jsx)("div", {
                className: sN.IQ,
                children:
                    "loading" === n
                        ? (0, a.jsx)(k.y, { type: k.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, a.jsx)(v.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: eu.intl.string(eo.default.ZVByPX),
                            })
                          : null != t
                            ? (0, a.jsx)(v.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: eu.intl.formatToPlainString(eo.default.INVO50, { time: sx(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(C.$, { variant: "secondary", size: "sm", text: eu.intl.string(eo.default.oKEgiu), onClick: l }),
        ],
    });
}
function sE(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: sN.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(v.E, { variant: "text-xs/semibold", color: "text-muted", className: sN.Gf, children: t }),
            n,
        ],
    });
}
function sI(e) {
    let { label: t, value: n, hint: l, critical: i = !1 } = e;
    return (0, a.jsxs)("div", {
        className: sN.N8,
        children: [
            (0, a.jsxs)("div", {
                className: sN.x7,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: i ? "text-feedback-critical" : "text-default",
                        children: n,
                    }),
                ],
            }),
            null != l && (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
        ],
    });
}
function sT(e) {
    let { label: t, used: n, max: l, formatValue: i } = e,
        r = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = r >= 0.9;
    return (0, a.jsxs)("div", {
        className: sN.N8,
        children: [
            (0, a.jsxs)("div", {
                className: sN.x7,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${i(n)} / ${i(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(sA.z, {
                value: 100 * r,
                valueLabel: `${i(n)} of ${i(l)}`,
                "aria-label": t,
                className: s ? sN.dh : void 0,
            }),
        ],
    });
}
function sP(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(sI, {
            label: eu.intl.string(eo.default.SXP7pD),
            value: eu.intl.string(eo.default.E5hKVi),
            hint: sw(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(sI, {
            label: eu.intl.string(eo.default.SXP7pD),
            value: "\u2014",
            hint: eu.intl.string(eo.default.AGvoMJ),
        });
    let l = sk(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(sI, { label: eu.intl.string(eo.default["H/X+FI"]), value: sh(n.cpu_ms) }),
            null != l && (0, a.jsx)(sI, { label: eu.intl.string(eo.default.lmFmMO), value: l }),
        ],
    });
}
function sM(e) {
    let { analytics: t } = e,
        n = eu.intl.string(eo.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(sE, {
            title: n,
            children: (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: sw(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? sC[t] : null) ? eu.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(sE, {
        title: n,
        children:
            0 === l.length
                ? (0, a.jsx)(v.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: eu.intl.string(eo.default.AGvoMJ),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, a.jsx)(
                          sI,
                          {
                              label: n,
                              value: eu.intl.formatToPlainString(eo.default["w/2voO"], { cpu: sh(t.cpu_ms) }),
                              hint: sk(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var s_ = n(400154);
let sR = [];
function sL(e) {
    let t,
        { call: n } = e,
        { text: l, bad: i } =
            ((t = null != n.stopReason && sy.has(n.stopReason)),
            {
                text: [
                    null != n.durationMs ? sh(n.durationMs) : null,
                    `${sp(n.inputTokens + n.cacheReadTokens + n.cacheWriteTokens)} \u{2192} ${sp(n.outputTokens)}`,
                    t ? n.stopReason : null,
                ]
                    .filter((e) => null != e)
                    .join(" \xb7 "),
                bad: t,
            });
    return (0, a.jsxs)("div", {
        className: s_.p5,
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: s_.Q5,
                children: sg(n.observedAt),
            }),
            (0, a.jsxs)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-default",
                className: s_.qN,
                children: [n.role, " \xb7 ", n.model],
            }),
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/medium",
                color: i ? "text-feedback-critical" : "text-muted",
                children: l,
            }),
        ],
    });
}
function sD(e, t) {
    return (0, a.jsx)(sI, {
        label: e,
        value: eu.intl.formatToPlainString(eo.default.yHJxuP, { count: sp((0, Q.aM)(t)) }),
        hint: `${sp(t.input_tokens)} in \xb7 ${sp(t.output_tokens)} out \xb7 ${sp(t.cache_read_input_tokens)} cache read`,
    });
}
function sO(e) {
    let { projectId: t, status: n, fetchState: l, onRefresh: r, traceVisible: s = !1 } = e,
        o = (0, c.bG)([sm], () => sm.getLastTurnUsage(t), [t]),
        u = (0, c.bG)([sm], () => sm.getLastCompaction(t), [t]),
        d = (0, c.bG)([sm], () => sm.getLastCompactionDecline(t), [t]),
        m = (0, c.bG)([sm], () => sm.getForceCompactionState(t), [t]),
        f = i.useCallback(() => (0, el.Lj)(t), [t]),
        h = i.useCallback(() => (0, el.Lj)(t, !0), [t]),
        p = (0, c.bG)([sm], () => (s ? sR : sm.getModelCalls(t)), [t, s]),
        g = n?.agent?.lifetime ?? null,
        x = n?.agent?.limits ?? null,
        b = n?.agent?.session ?? null,
        j = u?.promptCeiling ?? x?.context_window_tokens ?? null;
    return (0, a.jsxs)("div", {
        className: s_.Mf,
        children: [
            (0, a.jsx)(sS, { generatedAt: n?.generated_at ?? null, fetchState: l, onRefresh: r }),
            (0, a.jsx)(sE, {
                title: eu.intl.string(eo.default.JghNal),
                children:
                    null == g
                        ? (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: eu.intl.string(eo.default.s0U5Fv),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(sI, {
                                      label: eu.intl.string(eo.default["9nqym2"]),
                                      value: sp((0, Q.a7)(g.cost_usd)),
                                      hint: eu.intl.formatToPlainString(eo.default.NCdUIh, { count: sp(g.turns) }),
                                  }),
                                  sD(eu.intl.string(eo.default.xtxP0e), g.orchestrator),
                                  sD(eu.intl.string(eo.default["9Sj3SX"]), g.codegen),
                                  sD(eu.intl.string(eo.default.ANCEo3), (0, Q.wU)(g.compaction)),
                                  n?.agent?.outcomes != null &&
                                      Object.keys(n.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(sI, {
                                          label: eu.intl.string(eo.default.SQHm7C),
                                          value: Object.entries(n.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${sp(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(sE, {
                title: eu.intl.string(eo.default.dZHPE5),
                children:
                    null == o
                        ? (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: eu.intl.string(eo.default.DfVjal),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  sD(eu.intl.string(eo.default["7X3i9d"]), o.total),
                                  (0, a.jsx)(sI, {
                                      label: eu.intl.string(eo.default["8OUg09"]),
                                      value: `${Math.round((o.cache_hit_rate ?? (0, Q.CA)(o.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(sE, {
                title: eu.intl.string(eo.default.NbRk9a),
                children: [
                    null != u && null != j
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(sT, {
                                      label: eu.intl.string(eo.default.Kw5wiQ),
                                      used: u.tokensAfter,
                                      max: j,
                                      formatValue: sp,
                                  }),
                                  (0, a.jsx)(sI, {
                                      label: eu.intl.string(eo.default.mRbSns),
                                      value: `${sp(u.tokensBefore)} \u{2192} ${sp(u.tokensAfter)}`,
                                      hint: eu.intl.formatToPlainString(eo.default.Vq3skS, {
                                          count: sp(u.retainedMessages),
                                          time: sx(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != j
                                      ? eu.intl.formatToPlainString(eo.default.GMLCNv, { ceiling: sp(j) })
                                      : eu.intl.string(eo.default.s0U5Fv),
                          }),
                    null != d &&
                        (0, a.jsx)(sI, {
                            label: eu.intl.string(eo.default["4BX5KK"]),
                            value: `${sp(d.projected)} / ${sp(d.threshold)}`,
                            critical: !0,
                            hint: eu.intl.formatToPlainString(eo.default["6ngCax"], { time: sx(d.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: s_.Lj,
                        children: [
                            (0, a.jsx)(C.$, {
                                variant: "secondary",
                                size: "sm",
                                text: eu.intl.string(eo.default["1EiJeb"]),
                                disabled: "pending" === m,
                                onClick: f,
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof m && "compacted" !== m.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return eu.intl.string(eo.default.wox6Ev);
                                    if ("pending" === e) return eu.intl.string(eo.default.OcPHQ1);
                                    let t = sx(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return eu.intl.formatToPlainString(eo.default.BhRjZZ, { time: t });
                                    let n =
                                        "declined" === e.outcome
                                            ? eo.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? eo.default.YZb4hK
                                              : eo.default.ZoUSVK;
                                    return eu.intl.formatToPlainString(n, {
                                        reason: e.reason ?? "no reason given",
                                        time: t,
                                    });
                                })(m),
                            }),
                            "object" == typeof m &&
                                !0 === m.pendingTurn &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(C.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: eu.intl.string(eo.default.ZxG2AI),
                                            onClick: h,
                                        }),
                                        (0, a.jsx)(v.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: eu.intl.string(eo.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            !s &&
                (0, a.jsx)(sE, {
                    title: eu.intl.string(eo.default.TkTRdW),
                    children:
                        0 === p.length
                            ? (0, a.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: eu.intl.string(eo.default["r3/FhI"]),
                              })
                            : (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      p
                                          .slice(-30)
                                          .reverse()
                                          .map((e) => (0, a.jsx)(sL, { call: e }, e.id)),
                                      p.length > 30 &&
                                          (0, a.jsx)(v.E, {
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              children: eu.intl.formatToPlainString(eo.default["uZ9P/O"], {
                                                  shown: 30,
                                                  total: p.length,
                                              }),
                                          }),
                                  ],
                              }),
                }),
            (null != b || n?.analytics != null) &&
                (0, a.jsxs)(sE, {
                    title: eu.intl.string(eo.default.EsSzCS),
                    children: [
                        null != b &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(sI, {
                                        label: eu.intl.string(eo.default.CLXHAs),
                                        value: sx(b.instance_since),
                                        hint: eu.intl.string(eo.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(sI, {
                                        label: eu.intl.string(eo.default["8V8e1Z"]),
                                        value: sp(b.sockets),
                                    }),
                                    (0, a.jsx)(sI, {
                                        label: eu.intl.string(eo.default["4pBzYW"]),
                                        value: b.turn_inflight
                                            ? eu.intl.string(eo.default.Wv025I)
                                            : eu.intl.string(eo.default["7/lsFY"]),
                                    }),
                                    b.queued_messages > 0 &&
                                        (0, a.jsx)(sI, {
                                            label: eu.intl.string(eo.default["3oUYnv"]),
                                            value: sp(b.queued_messages),
                                        }),
                                ],
                            }),
                        n?.analytics != null && (0, a.jsx)(sP, { analytics: n.analytics }),
                    ],
                }),
            null != x &&
                (0, a.jsxs)(sE, {
                    title: eu.intl.string(eo.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(sI, {
                            label: eu.intl.string(eo.default.IlDBN3),
                            value: sp(x.max_subagent_iterations),
                        }),
                        (0, a.jsx)(sI, {
                            label: eu.intl.string(eo.default["ZdzKR+"]),
                            value: eu.intl.formatToPlainString(eo.default.yHJxuP, {
                                count: sp(x.context_window_tokens),
                            }),
                        }),
                        (0, a.jsx)(sI, {
                            label: eu.intl.string(eo.default.cIhN2W),
                            value: eu.intl.formatToPlainString(eo.default.yHJxuP, {
                                count: sp(x.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(sI, {
                            label: eu.intl.string(eo.default["+fOn/q"]),
                            value: sp(x.max_user_message_chars),
                        }),
                        (0, a.jsx)(sI, { label: eu.intl.string(eo.default.kIHga0), value: sp(x.max_build_attempts) }),
                        (0, a.jsx)(sI, { label: eu.intl.string(eo.default.Iw03yW), value: sp(x.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var sF = n(237528),
    sz = n(683438),
    sU = n(531893);
function sG(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: sU.ut,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: eu.intl.string(eo.default.h1SE6R),
              }),
          });
}
function sq(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: sU.qf,
              children: [
                  (0, a.jsx)(v.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: eu.intl.string(eo.default.h1SE6R),
                  }),
                  (0, a.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: eu.intl.string(eo.default["8SErdg"]),
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: sU.qf,
              children: [
                  (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function s$(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: sU.ps,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: eu.intl.string(eo.default.V7Ri8H),
              }),
          })
        : null;
}
var sB = n(109079);
let sH = i.memo(function (e) {
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
        className: sB.vK,
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: sB.Mt,
                selectable: !0,
                children: sg(n.ts),
            }),
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: "text-xxs/semibold",
                color:
                    "error" === (t = n.level)
                        ? "text-feedback-critical"
                        : "warn" === t
                          ? "text-feedback-warning"
                          : "text-muted",
                className: sB.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: sB.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: sB.Cq, children: (0, a.jsx)(sF.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: sB.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(sF.v, {
                                text: eu.intl.string(eo.default.TrC9c8),
                                variant: "redLight",
                            }),
                        }),
                    null != u
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  "" !== u.prefix &&
                                      (0, a.jsxs)(v.E, {
                                          tag: "span",
                                          variant: "text-xs/normal",
                                          color: d,
                                          selectable: !0,
                                          children: [u.prefix, " "],
                                      }),
                                  (0, a.jsxs)(j.D, {
                                      className: sB.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": o,
                                      "aria-label": eu.intl.string(eo.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, a.jsx)(ll.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, a.jsx)(to._, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, a.jsxs)(v.E, {
                                              tag: "span",
                                              variant: "text-xs/medium",
                                              color: "none",
                                              children: [
                                                  u.marker,
                                                  " ",
                                                  eu.intl.formatToPlainString(
                                                      "[\u2026]" === u.marker
                                                          ? eo.default.kUhyUv
                                                          : eo.default["N+fphl"],
                                                      { count: u.size },
                                                  ),
                                              ],
                                          }),
                                      ],
                                  }),
                                  r &&
                                      (0, a.jsx)(v.E, {
                                          tag: "div",
                                          variant: "text-xs/normal",
                                          color: d,
                                          className: sB.dF,
                                          selectable: !0,
                                          id: o,
                                          children: u.pretty,
                                      }),
                              ],
                          })
                        : (0, a.jsx)(v.E, {
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
function sV(e) {
    let { projectId: t } = e,
        n = (0, c.bG)([eP.Ay], () => eP.Ay.getLogs(t), [t]),
        l = (0, c.bG)([eP.Ay], () => eP.Ay.getHistoryState(t, "logs")),
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
                                return sv(e);
                            case "web":
                                return eu.intl.string(eo.default.IVzfVV);
                            default:
                                return eu.intl.string(eo.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, a.jsxs)("div", {
        className: sB.$F,
        children: [
            (0, a.jsxs)("div", {
                className: sB.y4,
                children: [
                    (0, a.jsx)(tF.I, {
                        look: "pill",
                        "aria-label": eu.intl.string(eo.default.MhvyUU),
                        options: p,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: sB.KT,
                        children: (0, a.jsx)(sz.I, {
                            query: o,
                            onChange: u,
                            onClear: () => u(""),
                            size: "sm",
                            placeholder: eu.intl.string(eo.default["m2+37Y"]),
                            "aria-label": eu.intl.string(eo.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, a.jsx)(sG, { state: l }),
            (0, a.jsxs)(n3.Ch, {
                ref: m,
                onScroll: h,
                overflow: "auto",
                className: sB.sx,
                children: [
                    (0, a.jsx)(s$, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(sq, {
                              state: l,
                              emptyTitle: eu.intl.string(eo.default.S7qlPG),
                              emptyBody: eu.intl.string(eo.default.nD0S9z),
                          })
                        : 0 === d.length
                          ? (0, a.jsx)(v.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: eu.intl.string(eo.default["4SIdrX"]),
                            })
                          : d.map((e) => (0, a.jsx)(sH, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function sW(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(sE, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, a.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: eu.intl.string(eo.default.umcjif),
                      }),
        })
    );
}
function sK(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(sI, {
                      label: eu.intl.formatToPlainString(eo.default["01ZMS4"], { env: sv(n) }),
                      value: ((t = l.connected), eu.intl.string(t ? eo.default.Wv025I : eo.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(sI, {
                      label: eu.intl.string(eo.default["z1dh+F"]),
                      value: sp(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${sx(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(sI, { label: eu.intl.string(eo.default.Iz5GnJ), value: sp(l.guild_count) }),
                  (0, a.jsx)(sI, {
                      label: eu.intl.string(eo.default["7UqtNv"]),
                      value: sp(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? eu.intl.formatToPlainString(eo.default.MasSly, {
                                    code: l.last_close_code,
                                    time: sx(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(sI, {
                          label: eu.intl.string(eo.default["x3+JXJ"]),
                          value: sp(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(sI, { label: sv(n), value: eu.intl.string(eo.default.lTHQss) });
}
function sX(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(sI, {
        label: sv(t),
        value: eu.intl.formatToPlainString(eo.default["Xq+wHT"], {
            requests: sp(n.requests),
            failures: sp(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? eu.intl.formatToPlainString(eo.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: sx(n.last_failure.at),
                  })
                : eu.intl.formatToPlainString(eo.default["7KlGT6"], { time: sx(n.since) }),
    });
}
function sY(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(sI, {
                label: eu.intl.formatToPlainString(eo.default["92gVTm"], { env: sv(t) }),
                value: sp(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    sI,
                    {
                        label: eu.intl.formatToPlainString(eo.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? eu.intl.formatToPlainString(eo.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? eu.intl.formatToPlainString(eo.default.wxAWNv, { time: sx(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function sJ(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(sI, {
        label: sv(t),
        value: eu.intl.formatToPlainString(eo.default.suAOj9, { calls: sp(n.calls), errors: sp(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function sQ(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(sE, {
            title: t,
            children: (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: eu.intl.string(eo.default["Noami/"]),
            }),
        });
    let i = n.cpu_ms_total / n.requests,
        r = n.cpu_ms_total > 0;
    return (0, a.jsxs)(sE, {
        title: t,
        children: [
            (0, a.jsx)(sI, {
                label: eu.intl.string(eo.default.xtD4Zp),
                value: sp(n.requests),
                hint: eu.intl.formatToPlainString(eo.default["7KlGT6"], { time: sx(n.since) }),
            }),
            (0, a.jsx)(sI, { label: eu.intl.string(eo.default.gfRhR3), value: sp(n.errors), critical: n.errors > 0 }),
            r
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(sT, {
                              label: eu.intl.string(eo.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: sh,
                          }),
                          (0, a.jsx)(sI, {
                              label: eu.intl.string(eo.default.mSKImM),
                              value: sh(i),
                              hint: eu.intl.formatToPlainString(eo.default.JqMU05, {
                                  total: sh(n.cpu_ms_total),
                                  wall: sh(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(sI, {
                      label: eu.intl.string(eo.default.LEJ5r3),
                      value: eu.intl.string(eo.default["2Ekb2b"]),
                      hint: eu.intl.string(eo.default.G0aq7i),
                  }),
            !r &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(sI, { label: eu.intl.string(eo.default.xvmL1D), value: sh(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(sI, {
                    label: eu.intl.string(eo.default["4sQYwH"]),
                    value: sp(n.exceeded_cpu),
                    critical: !0,
                }),
            (0, a.jsx)(sI, {
                label: eu.intl.string(eo.default.bQenOy),
                value: sp(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: eu.intl.formatToPlainString(eo.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(sI, { label: eu.intl.string(eo.default.xgpn4Y), value: sb(n.build) }),
        ],
    });
}
function sZ(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        o = r
            ? [{ key: "shared", label: eu.intl.string(eo.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: eu.intl.string(eo.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: eu.intl.string(eo.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(sE, {
        title: eu.intl.string(eo.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(sI, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(sI, {
                                  label: eu.intl.formatToPlainString(eo.default.u7kJJ4, { env: n }),
                                  value: sf(l.r2_bytes),
                                  hint: eu.intl.formatToPlainString(
                                      l.r2_truncated ? eo.default.lH0oQw : eo.default.m9h02S,
                                      { count: sp(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(sT, {
                                      label: eu.intl.formatToPlainString(eo.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: sf,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function s0(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: s_.Mf,
        children: [
            (0, a.jsx)(sS, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(sQ, {
                            title: eu.intl.string(eo.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(sQ, {
                            title: eu.intl.string(eo.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(sZ, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(sW, {
                                title: eu.intl.string(eo.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(sK, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(sW, {
                                title: eu.intl.string(eo.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(sX, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(sW, {
                                title: eu.intl.string(eo.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(sY, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(sW, {
                                title: eu.intl.string(eo.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(sJ, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(sM, { analytics: t.analytics }),
                        (0, a.jsxs)(sE, {
                            title: eu.intl.string(eo.default.fQMpFp),
                            children: [
                                (0, a.jsx)(sI, {
                                    label: eu.intl.string(eo.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? sb(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(sI, {
                                    label: eu.intl.string(eo.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? sb(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var s2 = n(761929);
function s1(e, t) {
    return String(e).padStart(t, "0");
}
function s6(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        a = `${s1(l.getHours(), 2)}:${s1(l.getMinutes(), 2)}:${s1(l.getSeconds(), 2)}`;
    return "millis" === t ? `${a}.${s1(l.getMilliseconds(), 3)}` : a;
}
var s9 = n(382541);
let s3 = new Map(),
    s5 = new Map(),
    s4 = 0,
    s7 = 0;
async function s8(e, t, n) {
    let l = s4,
        a = s3.get(t);
    if (null != a) return { status: "loaded", rich: a };
    if (Date.now() < s7) return { status: "forbidden" };
    let i = s5.get(t);
    if (null != i) return i;
    let r = (async () => {
        try {
            let a,
                { ticket: i, baseUrl: r } = await (0, s9.d)(e),
                s = await fetch(
                    ((a = new URL(`${r}/agent/trace-detail`)).searchParams.set("ticket", i),
                    a.searchParams.set("id", t),
                    a.toString()),
                    { method: "GET", credentials: "omit" },
                );
            if (403 === s.status) return ((s7 = Date.now() + 6e4), { status: "forbidden" });
            if (!s.ok) return { status: "failed" };
            let o = await s.json();
            if (!0 !== o.available || null == o.rich) return { status: "unavailable" };
            if (l !== s4) return { status: "failed" };
            var n = o.rich;
            for (s3.set(t, n); s3.size > 100;) {
                let e = s3.keys().next();
                if (!0 === e.done) break;
                s3.delete(e.value);
            }
            return { status: "loaded", rich: o.rich };
        } catch {
            return { status: "failed" };
        }
    })();
    s5.set(t, r);
    let s = await r;
    return (s5.get(t) === r && s5.delete(t), n?.aborted === !0 ? { status: "failed" } : s);
}
function oe() {
    ((s4 += 1), s3.clear(), s5.clear(), (s7 = 0));
}
function ot(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function on(e) {
    if (e < 1e3) return String(e);
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function ol(e) {
    switch (e) {
        case "subagent":
            return eu.intl.string(eo.default.PbKt9r);
        case "context":
            return eu.intl.string(eo.default["tNk/P2"]);
        case "tool":
            return eu.intl.string(eo.default.NBOJcw);
        case "delegated":
            return eu.intl.string(eo.default.QgrFdt);
        default:
            return eu.intl.string(eo.default.LsLVUy);
    }
}
function oa(e) {
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
let oi = ["model", "tool", "subagent", "delegated", "context"];
function or(e, t) {
    let n = t.trim().toLowerCase();
    return "" === n
        ? e
        : e.filter((e) => {
              let t;
              return ((t =
                  "model" === e.kind
                      ? [e.model, e.agent, e.stopReason ?? "", e.error ?? ""]
                      : [e.tool, e.agent, e.summary ?? "", e.error ?? ""]).push(oa(e)),
              t.join(" ").toLowerCase()).includes(n);
          });
}
function os(e, t) {
    return null == t ? null : (e.find((e) => e.id === t) ?? null);
}
let oo = {
    model: "blurpleLight",
    subagent: "greenLight",
    context: "grayLight",
    tool: "grayMedium",
    delegated: "orangeLight",
};
function ou(e) {
    let { category: t } = e;
    return (0, a.jsx)(sF.v, { text: ol(t), variant: oo[t] });
}
var od = n(28863);
let oc = ["arguments", "result", "usage", "diagnostics"];
var om = n(536113);
let of = { started: om.Vf, ok: om.mo, error: om.Sr };
function oh(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", {
        className: `${om.Om} ${of[t] ?? om.Vf}`,
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "started":
                    return eu.intl.string(eo.default["2wyRDK"]);
                case "error":
                    return eu.intl.string(eo.default["2Cu8n+"]);
                default:
                    return eu.intl.string(eo.default["6kgw6D"]);
            }
        })(t),
    });
}
function op(e) {
    let { label: t, value: n } = e;
    return (0, a.jsxs)("div", {
        className: om.wV,
        children: [
            (0, a.jsx)(v.E, { variant: "text-xs/medium", color: "text-muted", className: om.D6, children: t }),
            (0, a.jsx)("div", { className: om.zL, children: n }),
        ],
    });
}
function og(e) {
    let { label: t, value: n } = e;
    return (0, a.jsx)(op, {
        label: t,
        value: (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-default", selectable: !0, children: n }),
    });
}
function ox(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: om.WA, children: t });
}
function ob(e) {
    let { title: t, children: n } = e,
        l = i.useId();
    return (0, a.jsxs)("section", {
        "aria-labelledby": l,
        className: om.xd,
        children: [
            (0, a.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                id: l,
                className: om.Hm,
                children: t,
            }),
            n,
        ],
    });
}
function ov(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("details", {
        className: om.XK,
        children: [
            (0, a.jsxs)("summary", {
                className: om.It,
                children: [
                    (0, a.jsx)(to._, { className: om.k, size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    (0, a.jsx)(v.E, { variant: "text-xs/semibold", color: "none", children: t }),
                ],
            }),
            (0, a.jsx)("div", { className: om.bG, children: n }),
        ],
    });
}
function oj(e) {
    let { field: t } = e;
    if (null != t.value)
        return (0, a.jsx)(op, {
            label: t.key,
            value: (0, a.jsx)(v.E, {
                variant: "text-xs/normal",
                color: "text-default",
                selectable: !0,
                children: t.value,
            }),
        });
    let n =
        null != t.chars
            ? eu.intl.formatToPlainString(eo.default.ib7All, { count: t.chars })
            : null != t.items
              ? eu.intl.formatToPlainString(eo.default.cIqKbA, { count: t.items })
              : null;
    return (0, a.jsx)(op, {
        label: t.key,
        value: (0, a.jsxs)("div", {
            className: om.Kv,
            children: [
                (0, a.jsx)(v.E, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    children: (function (e) {
                        switch (e) {
                            case "prose":
                                return eu.intl.string(eo.default["6oDpz5"]);
                            case "content":
                                return eu.intl.string(eo.default.kSGhxQ);
                            default:
                                return eu.intl.string(eo.default.JwGtRz);
                        }
                    })(t.omitted ?? "content"),
                }),
                null == n
                    ? null
                    : (0, a.jsx)(v.E, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          tabularNumbers: !0,
                          children: n,
                      }),
            ],
        }),
    });
}
function oy(e) {
    let { entries: t } = e;
    return 0 === t.length
        ? null
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)("div", {
                      className: om.QR,
                      children: (0, a.jsx)(sF.v, { text: eu.intl.string(eo.default.LRIpHQ), variant: "orangeLight" }),
                  }),
                  t.map((e) =>
                      (0, a.jsx)(
                          op,
                          {
                              label: e.key,
                              value: (0, a.jsxs)("div", {
                                  className: om.TY,
                                  children: [
                                      null == e.value
                                          ? null
                                          : (0, a.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                className: om.Px,
                                                selectable: !0,
                                                children: e.value,
                                            }),
                                      !0 !== e.scrubbed
                                          ? null
                                          : (0, a.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-feedback-warning",
                                                children: eu.intl.string(eo.default["+kQ+K3"]),
                                            }),
                                      !0 !== e.truncated
                                          ? null
                                          : (0, a.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children:
                                                    null == e.chars
                                                        ? eu.intl.string(eo.default.ijkkUh)
                                                        : eu.intl.formatToPlainString(eo.default.PRt8I0, {
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
function ow(e) {
    let { detail: t } = e,
        n =
            null == t || "loaded" === t.status || "forbidden" === t.status
                ? null
                : eu.intl.string(
                      "loading" === t.status
                          ? eo.default.SKbSyo
                          : "unavailable" === t.status
                            ? eo.default.tdq5Zn
                            : eo.default["Dw1JW/"],
                  );
    return null == n
        ? null
        : (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-subtle", className: om.E7, children: n });
}
function ok(e) {
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
                oc.filter((e) => l.has(e))
            );
        })(n, { childCount: o, hasParent: null != r }),
        d = (function (e, t) {
            let [n, l] = i.useState(null);
            if (
                (i.useEffect(() => {
                    if (null == t || null != s3.get(t)) return;
                    let n = new AbortController();
                    return (
                        s8(e, t, n.signal).then((e) => {
                            n.signal.aborted || l({ detailId: t, detail: e });
                        }),
                        () => n.abort()
                    );
                }, [e, t]),
                null == t)
            )
                return null;
            let a = s3.get(t);
            return null != a ? { status: "loaded", rich: a } : n?.detailId === t ? n.detail : { status: "loading" };
        })(t, "tool" === n.kind ? n.detailId : void 0),
        c = "model" === n.kind ? n.model : n.tool,
        m = s6(n.startedAt, "millis"),
        f = oa(n),
        h = i.useCallback(
            (e) => {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), l());
            },
            [l],
        );
    return (0, a.jsxs)(n3.Ch, {
        className: om._0,
        onKeyDown: h,
        role: "region",
        "aria-label": eu.intl.formatToPlainString(eo.default.Qiaeyz, { name: c }),
        children: [
            (0, a.jsx)("div", {
                className: om.sy,
                children: (0, a.jsxs)("div", {
                    className: om.HI,
                    children: [
                        (0, a.jsx)(oh, { status: n.status }),
                        (0, a.jsx)(ou, { category: f }),
                        (0, a.jsx)(v.E, {
                            variant: "text-sm/semibold",
                            color: "text-strong",
                            className: om.kc,
                            children: c,
                        }),
                        (0, a.jsx)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            tabularNumbers: !0,
                            className: om.l5,
                            children: null == n.durationMs ? eu.intl.string(eo.default["2wyRDK"]) : ot(n.durationMs),
                        }),
                    ],
                }),
            }),
            null == n.error
                ? null
                : (0, a.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: om.Um,
                      selectable: !0,
                      children: n.error,
                  }),
            u.includes("arguments") && "tool" === n.kind
                ? (0, a.jsxs)(ob, {
                      title: eu.intl.string(eo.default["G/4JST"]),
                      children: [
                          (n.fields ?? []).map((e) => (0, a.jsx)(oj, { field: e }, e.key)),
                          d?.status === "loaded" && null != d.rich.args
                              ? (0, a.jsx)(oy, { entries: d.rich.args })
                              : null,
                          (0, a.jsx)(ow, { detail: d }),
                      ],
                  })
                : null,
            u.includes("result") && "tool" === n.kind
                ? (0, a.jsxs)(ob, {
                      title: eu.intl.string(eo.default.Dgg25Y),
                      children: [
                          (0, a.jsx)(og, {
                              label: eu.intl.string(eo.default["U+OQCo"]),
                              value: eu.intl.formatToPlainString(eo.default.ib7All, { count: n.resultChars ?? 0 }),
                          }),
                          null == n.resultAdded
                              ? null
                              : (0, a.jsx)(og, {
                                    label: eu.intl.string(eo.default["MQYS+n"]),
                                    value: `+${n.resultAdded} \u{2212}${n.resultRemoved ?? 0}`,
                                }),
                          !0 !== n.resultTruncated
                              ? null
                              : (0, a.jsx)(op, {
                                    label: eu.intl.string(eo.default.t7GJFc),
                                    value: (0, a.jsx)(v.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        children: eu.intl.string(eo.default.ijkkUh),
                                    }),
                                }),
                          d?.status === "loaded" && null != d.rich.result
                              ? (0, a.jsx)(oy, { entries: d.rich.result })
                              : null,
                      ],
                  })
                : null,
            u.includes("usage") && "model" === n.kind
                ? (0, a.jsxs)(ob, {
                      title: eu.intl.string(eo.default.NXmRw1),
                      children: [
                          (0, a.jsxs)(ox, {
                              children: [
                                  null == n.promptTokens
                                      ? null
                                      : (0, a.jsx)(og, {
                                            label: eu.intl.string(eo.default.iq3T1q),
                                            value: eu.intl.formatToPlainString(eo.default["6GQUgQ"], {
                                                tokens: on(n.promptTokens),
                                            }),
                                        }),
                                  null == n.systemTokens
                                      ? null
                                      : (0, a.jsx)(og, {
                                            label: eu.intl.string(eo.default.ZELAZn),
                                            value: eu.intl.formatToPlainString(eo.default.Te7mPn, {
                                                system: on(n.systemTokens),
                                                tools: on(n.toolsTokens ?? 0),
                                                toolCount: n.tools ?? 0,
                                                messages: on(n.messagesTokens ?? 0),
                                                messageCount: n.messages ?? 0,
                                            }),
                                        }),
                                  null == n.inputTokens
                                      ? null
                                      : (0, a.jsx)(og, {
                                            label: eu.intl.string(eo.default["LENc/T"]),
                                            value: String(n.inputTokens),
                                        }),
                                  null == n.outputTokens
                                      ? null
                                      : (0, a.jsx)(og, {
                                            label: eu.intl.string(eo.default.ewRHwx),
                                            value: String(n.outputTokens),
                                        }),
                                  null == n.cacheReadTokens
                                      ? null
                                      : (0, a.jsx)(og, {
                                            label: eu.intl.string(eo.default.heVFQD),
                                            value: eu.intl.formatToPlainString(eo.default.VO3gdd, {
                                                read: n.cacheReadTokens,
                                                write: n.cacheWriteTokens ?? 0,
                                            }),
                                        }),
                                  null == n.costUsd
                                      ? null
                                      : (0, a.jsx)(og, {
                                            label: eu.intl.string(eo.default.aBw2Vm),
                                            value: `$${n.costUsd.toFixed(4)}`,
                                        }),
                              ],
                          }),
                          (0, a.jsx)(v.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              className: om.E7,
                              children: eu.intl.string(eo.default["foF/Bc"]),
                          }),
                      ],
                  })
                : null,
            u.includes("arguments") || u.includes("result")
                ? (0, a.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: om.E7,
                      children: eu.intl.string(eo.default.o24IFK),
                  })
                : null,
            u.includes("diagnostics")
                ? (0, a.jsx)(ov, {
                      title: eu.intl.string(eo.default["dix/W4"]),
                      children: (0, a.jsxs)(ox, {
                          children: [
                              null == r
                                  ? null
                                  : (0, a.jsx)(op, {
                                        label: eu.intl.string(eo.default.soPsOJ),
                                        value: (0, a.jsx)(od.Anchor, {
                                            onClick: () => s(r.id),
                                            children: (0, a.jsx)(v.E, {
                                                tag: "span",
                                                variant: "text-xs/normal",
                                                color: "none",
                                                children: "model" === r.kind ? r.model : r.tool,
                                            }),
                                        }),
                                    }),
                              0 === o
                                  ? null
                                  : (0, a.jsx)(og, {
                                        label: eu.intl.string(eo.default.kNZBxr),
                                        value: eu.intl.formatToPlainString(eo.default["6LoCUh"], { count: o }),
                                    }),
                              null == n.turnId
                                  ? null
                                  : (0, a.jsx)(og, { label: eu.intl.string(eo.default.bL1r5J), value: n.turnId }),
                              (0, a.jsx)(og, { label: eu.intl.string(eo.default.Ndwr7X), value: n.id }),
                              null == m ? null : (0, a.jsx)(og, { label: eu.intl.string(eo.default.sO8ghW), value: m }),
                              "model" !== n.kind || null == n.stopReason
                                  ? null
                                  : (0, a.jsx)(og, { label: eu.intl.string(eo.default.VfYxPF), value: n.stopReason }),
                              "tool" !== n.kind || null == n.schema || 0 === n.schema.length
                                  ? null
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(v.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                className: om.Hm,
                                                children: eu.intl.string(eo.default.mSm8iy),
                                            }),
                                            n.schema.map((e) =>
                                                (0, a.jsx)(
                                                    og,
                                                    {
                                                        label: e.name,
                                                        value: e.required
                                                            ? eu.intl.formatToPlainString(eo.default["6aSRPA"], {
                                                                  type: e.type,
                                                              })
                                                            : eu.intl.formatToPlainString(eo.default.q2B975, {
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
            (0, a.jsx)(v.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: om.E7,
                children: eu.intl.string(eo.default.FloyTQ),
            }),
        ],
    });
}
let oC = { model: om.WI, subagent: om.uM, context: om.eH, tool: om.pw, delegated: om.C8 };
function oA(e) {
    let { entries: t } = e,
        n = i.useMemo(
            () =>
                (function (e) {
                    let t = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 },
                        n = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 };
                    for (let l of e) {
                        let e = oa(l);
                        ((t[e] += l.durationMs ?? 0), (n[e] += 1));
                    }
                    return oi.map((e) => ({ category: e, ms: t[e], calls: n[e] }));
                })(t),
            [t],
        ),
        l = n.reduce((e, t) => e + t.ms, 0);
    return (0, a.jsxs)("div", {
        className: om.M0,
        children: [
            (0, a.jsx)("div", {
                className: om.pZ,
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
                                            className: `${om.dL} ${oC[t]}`,
                                            style: { "--custom-conjure-trace-segment-weight": String(n) },
                                        },
                                        t,
                                    );
                          }),
            }),
            (0, a.jsx)("div", {
                className: om.z4,
                role: "group",
                "aria-label": eu.intl.string(eo.default["Gioq+C"]),
                children: oi.map((e) => {
                    let t = n.find((t) => t.category === e),
                        i = t?.ms ?? 0,
                        r = t?.calls ?? 0,
                        s = 0 === l ? 0 : Math.round((i / l) * 100);
                    return (0, a.jsxs)(
                        "div",
                        {
                            className: om.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${om.A9} ${oC[e]}`, "aria-hidden": !0 }),
                                (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: ol(e) }),
                                (0, a.jsx)(v.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: eu.intl.formatToPlainString(eo.default["3dQ1ly"], { percent: s }),
                                }),
                                (0, a.jsx)(v.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: eu.intl.formatToPlainString(eo.default.Ow0k34, { count: r }),
                                }),
                                0 === i
                                    ? null
                                    : (0, a.jsx)(v.E, {
                                          variant: "text-xs/normal",
                                          color: "text-subtle",
                                          tabularNumbers: !0,
                                          children: ot(i),
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
function oN(e) {
    let { entry: t, selected: n, tabbable: l, onSelect: i, onKeyDown: r, nested: s } = e,
        o = oa(t),
        u = "model" === t.kind ? t.model : t.tool,
        d =
            "model" === t.kind && null != t.promptTokens
                ? eu.intl.formatToPlainString(eo.default["6GQUgQ"], { tokens: on(t.promptTokens) })
                : null != t.durationMs
                  ? ot(t.durationMs)
                  : null;
    return (0, a.jsxs)(j.D, {
        tag: "div",
        role: "option",
        "aria-selected": n,
        tabIndex: l ? 0 : -1,
        id: `trace-${t.id}`,
        className: `${om.nM} ${s ? om.A5 : ""} ${"error" === t.status ? om.Cr : ""} ${n ? om.CZ : ""}`,
        onKeyDown: r,
        onClick: () => i(t.id),
        children: [
            (0, a.jsxs)("div", {
                className: om.sU,
                children: [
                    (0, a.jsx)(oh, { status: t.status }),
                    (0, a.jsx)(ou, { category: o }),
                    (0, a.jsx)(v.E, {
                        variant: "text-xs/semibold",
                        color: "text-default",
                        className: om.G9,
                        children: u,
                    }),
                    null == d
                        ? null
                        : (0, a.jsx)(v.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              tabularNumbers: !0,
                              className: om.j2,
                              children: d,
                          }),
                ],
            }),
            "tool" === t.kind && null != t.summary
                ? (0, a.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: om.Ne,
                      children: t.summary,
                  })
                : null,
            null == t.error
                ? null
                : (0, a.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: om.Xu,
                      children: t.error,
                  }),
        ],
    });
}
function oS(e) {
    var t;
    let { projectId: n, query: l } = e,
        r = (0, c.yK)([eP.Ay], () => eP.Ay.getTrace(n), [n]),
        s = (0, c.bG)([eP.Ay], () => eP.Ay.getHistoryState(n, "trace"));
    i.useEffect(() => oe, [n]);
    let [o, u] = i.useState(null),
        [d, m] = i.useState(40),
        [f, h] = i.useState(!1),
        p = i.useRef(null),
        g = i.useRef(null),
        x = i.useRef(null),
        b = i.useRef(null),
        j = i.useId(),
        y = i.useCallback((e) => {
            null != e && document.getElementById(`trace-${e}`)?.focus();
        }, []),
        w = i.useCallback((e) => u((t) => (t === e ? null : e)), []),
        k = i.useCallback((e) => {
            let t = p.current?.offsetHeight ?? 0;
            return 0 === t ? 40 : (0, aa.clamp)((e / t) * 100, 25, 75);
        }, []),
        C = i.useCallback((e) => {
            let t = p.current?.offsetHeight ?? 0;
            return 0 === t ? e : (0, aa.clamp)(e, (25 * t) / 100, (75 * t) / 100);
        }, []),
        A = (0, s2.A)({
            resizableDomNodeRef: g,
            orientation: s2.R.VERTICAL_TOP,
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
            null != t && (e.preventDefault(), m((e) => (0, aa.clamp)(e + t, 25, 75)));
        }, []),
        E = i.useCallback(() => {
            (u(null), y(o));
        }, [o, y]),
        I = i.useMemo(() => or(r, l), [r, l]),
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
                    .map((e, t) => ({ ...e, index: t, entries: or(e.entries, l) }))
                    .filter((e) => e.entries.length > 0),
            [r, l],
        ),
        P = os(I, o),
        M = P?.kind === "tool" ? os(r, P.parentId ?? null) : null,
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
                      : "Escape" === e.key && null != o && (e.preventDefault(), u(null), y(o));
        },
        [I, o, y],
    );
    return 0 === r.length
        ? (0, a.jsx)("div", {
              className: om.uP,
              ref: p,
              children: (0, a.jsx)(sq, {
                  state: s,
                  emptyTitle: eu.intl.string(eo.default["Tpvy/s"]),
                  emptyBody: eu.intl.string(eo.default.J0WcVA),
              }),
          })
        : (0, a.jsxs)("div", {
              className: `${om.uP} ${f ? om.F4 : ""}`,
              ref: p,
              children: [
                  (0, a.jsxs)("div", {
                      className: om.DK,
                      children: [
                          (0, a.jsx)(oA, { entries: r }),
                          (0, a.jsx)(sG, { state: s }),
                          0 === I.length
                              ? (0, a.jsx)("div", {
                                    className: om.Ie,
                                    children: (0, a.jsx)(v.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children: eu.intl.string(eo.default.tDB4lC),
                                    }),
                                })
                              : (0, a.jsxs)(n3.Ch, {
                                    ref: x,
                                    className: om.Ns,
                                    children: [
                                        (0, a.jsx)(s$, { state: s }),
                                        (0, a.jsx)("div", {
                                            ref: b,
                                            id: j,
                                            role: "listbox",
                                            "aria-label": eu.intl.string(eo.default.SGbiNE),
                                            className: om.p_,
                                            children: T.map((e) => {
                                                let t = s6(e.startedAt),
                                                    n = eu.intl.formatToPlainString(eo.default.gPwGYA, {
                                                        number: e.index + 1,
                                                    });
                                                return (0, a.jsxs)(
                                                    "div",
                                                    {
                                                        role: "presentation",
                                                        children: [
                                                            (0, a.jsxs)("div", {
                                                                className: om.mf,
                                                                children: [
                                                                    (0, a.jsx)(v.E, {
                                                                        variant: "text-xs/semibold",
                                                                        color: "text-muted",
                                                                        children: n,
                                                                    }),
                                                                    (0, a.jsx)(v.E, {
                                                                        variant: "text-xs/normal",
                                                                        color: "text-subtle",
                                                                        tabularNumbers: !0,
                                                                        children: t ?? "",
                                                                    }),
                                                                    null == e.spanMs
                                                                        ? null
                                                                        : (0, a.jsx)(v.E, {
                                                                              variant: "text-xs/normal",
                                                                              color: "text-subtle",
                                                                              tabularNumbers: !0,
                                                                              children: ot(e.spanMs),
                                                                          }),
                                                                ],
                                                            }),
                                                            (0, a.jsx)("div", {
                                                                role: "group",
                                                                "aria-label": n,
                                                                className: om.M5,
                                                                children: e.entries.map((e) =>
                                                                    (0, a.jsx)(
                                                                        oN,
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
                                    "aria-label": eu.intl.string(eo.default.DtSORy),
                                    "aria-valuenow": Math.round(d),
                                    "aria-valuemin": 25,
                                    "aria-valuemax": 75,
                                    tabIndex: 0,
                                    className: om.b1,
                                    onPointerDown: N,
                                    onKeyDown: S,
                                }),
                                (0, a.jsx)("div", {
                                    ref: g,
                                    className: om.Or,
                                    style: { "--custom-conjure-trace-detail-share": String(d) },
                                    children: (0, a.jsx)(ok, {
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
function oE(e) {
    let { projectId: t, query: n, onQueryChange: l } = e,
        r = (0, c.yK)([eP.Ay], () => eP.Ay.getTrace(t), [t]),
        s = i.useRef(null),
        o = i.useCallback(() => {
            es(
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
                className: om.ED,
                children: (0, a.jsx)(sz.I, {
                    query: n,
                    onChange: l,
                    onClear: () => l(""),
                    size: "sm",
                    placeholder: eu.intl.string(eo.default["EY8/Mt"]),
                    "aria-label": eu.intl.string(eo.default["EY8/Mt"]),
                }),
            }),
            (0, a.jsx)(Z.Y, {
                targetElementRef: s,
                position: "bottom",
                align: "right",
                animation: Z.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(ee.W, {
                        "data-menu-migrated": !0,
                        navId: `conjure-trace-actions-${t}`,
                        "aria-label": eu.intl.string(eu.t.ogxXGq),
                        onClose: n,
                        onSelect: n,
                        children: (0, a.jsx)(et.rX, {
                            children: (0, a.jsx)(et.Dr, {
                                id: "export",
                                label: eu.intl.string(eo.default.WXrPRZ),
                                disabled: 0 === r.length,
                                action: o,
                            }),
                        }),
                    });
                },
                children: (e, t) => {
                    let { isShown: n } = t;
                    return (0, a.jsx)(t3.K, {
                        ...e,
                        buttonRef: s,
                        icon: t5.MoreHorizontalIcon,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": eu.intl.string(eu.t["UKOtz+"]),
                        "aria-haspopup": "menu",
                        "aria-expanded": n,
                    });
                },
            }),
        ],
    });
}
var oI = n(592465);
function oT(e) {
    let { projectId: t, onClose: n } = e,
        [l, r] = i.useState("logs"),
        [s, o] = i.useState(""),
        u = (0, c.bG)([sn.A], () => sn.A.isDeveloper),
        d = (0, c.bG)([sm], () => sm.getStatus(t), [t]),
        m = (0, c.bG)([sm], () => sm.getFetchState(t), [t]);
    i.useEffect(() => {
        (0, el.R7)(t);
    }, [t]);
    let f = i.useCallback(() => (0, el.R7)(t), [t]),
        h = i.useCallback(() => {
            (0, t8.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: sm.getStatus(t),
                        last_turn_usage: sm.getLastTurnUsage(t),
                        last_compaction: sm.getLastCompaction(t),
                        last_compaction_decline: sm.getLastCompactionDecline(t),
                        model_calls: sm.getModelCalls(t),
                        logs: eP.Ay.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, g.P)((0, x.o)(eu.intl.string(eo.default.wI6fhl), b.Ck.SUCCESS)),
            );
        }, [t]),
        p = eu.intl.string(eo.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: oI.nd,
        "aria-label": p,
        children: [
            (0, a.jsxs)(n9.Ay, {
                "aria-label": p,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(n9.Ay.Icon, {
                            icon: se.CopyIcon,
                            tooltip: eu.intl.string(eo.default.TkHqy2),
                            onClick: h,
                        }),
                        (0, a.jsx)(n9.Ay.Icon, { icon: R.P, tooltip: eu.intl.string(eu.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(n9.Ay.ChannelIcon, { icon: N.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(n9.Ay.Title, { children: p }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: oI.rf,
                children: [
                    (0, a.jsxs)(st.V, {
                        selectedItem: l,
                        type: "top",
                        onItemSelect: (e) => r(e),
                        "aria-label": eu.intl.string(eo.default.RvvWIh),
                        className: oI.vR,
                        children: [
                            (0, a.jsx)(st.V.Item, { id: "logs", children: eu.intl.string(eo.default["+VRYCm"]) }),
                            (0, a.jsx)(st.V.Item, { id: "worker", children: eu.intl.string(eo.default["50D0FZ"]) }),
                            (0, a.jsx)(st.V.Item, { id: "agent", children: eu.intl.string(eo.default.UkbTK1) }),
                            u
                                ? (0, a.jsx)(st.V.Item, { id: "trace", children: eu.intl.string(eo.default.O6nNjP) })
                                : null,
                        ],
                    }),
                    "logs" === l
                        ? (0, a.jsx)(sV, { projectId: t })
                        : "worker" === l
                          ? (0, a.jsx)(s0, { status: d, fetchState: m, onRefresh: f })
                          : "trace" === l && u
                            ? (0, a.jsxs)("div", {
                                  className: oI.uP,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: oI.XH,
                                          children: (0, a.jsx)(oE, { projectId: t, query: s, onQueryChange: o }),
                                      }),
                                      (0, a.jsx)(oS, { projectId: t, query: s }),
                                  ],
                              })
                            : (0, a.jsx)(sO, { projectId: t, status: d, fetchState: m, onRefresh: f, traceVisible: u }),
                ],
            }),
        ],
    });
}
var oP = n(333007),
    oM = n(365912),
    o_ = n(775121),
    oR = n(873715),
    oL = n(470779);
function oD(e) {
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
            takeRefs: j,
        } = iM({ projectId: t, surface: "design", onUploadFile: h }),
        w = i.useRef(null),
        k = (m || p.length > 0) && v && !f,
        C = i.useCallback(() => {
            if (!k) return;
            let e = j();
            d(e.length > 0 ? e : void 0);
        }, [k, j, d]),
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
        className: s()(oL.M0, { [oL.ho]: A && !f, [oL.ET]: f }),
        style: { left: _, top: R },
        "data-testid": "conjure-design-compose-bar",
        children: [
            (0, a.jsx)("input", {
                ref: w,
                type: "file",
                multiple: !0,
                className: oL.Fg,
                tabIndex: -1,
                "aria-hidden": !0,
                onChange: (e) => {
                    (g(Array.from(e.target.files ?? [])), (e.target.value = ""));
                },
            }),
            (0, a.jsx)(y.m, {
                position: "bottom",
                text: eu.intl.string(eo.default.lgvqSB),
                ariaHidden: !0,
                children: (0, a.jsx)("button", {
                    type: "button",
                    className: oL.tY,
                    onClick: () => w.current?.click(),
                    "aria-label": eu.intl.string(eo.default.lgvqSB),
                    children: (0, a.jsx)(en.H, { size: "custom", color: "currentColor", className: oL.WW }),
                }),
            }),
            (0, a.jsx)(ly.y, {
                autoFocus: !0,
                rows: 1,
                className: oL.hF,
                value: o,
                placeholder: "" === r ? eu.intl.string(eo.default.MPPV1Q) : `Edit ${r}`,
                "aria-label": eu.intl.string(eo.default.KCYqWL),
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
                      className: oL.ZO,
                      children: p.map((e) => (0, a.jsx)(i_, { draft: e, onRemove: b }, e.localId)),
                  })
                : null,
        ],
    });
}
n(884868);
var oO = n(192888);
function oF(e) {
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
        n
    );
}
function oz(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = oF(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var oU = n(108308);
let oG = { x: 25, y: 21 };
function oq(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function o$(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function oB(e, t, n, l) {
    let a = o$(e, n, l);
    return { x: a.left + a.width * t.x, y: a.top + a.height * t.y };
}
function oH(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function oV(e) {
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
function oW(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        o = null != n && n === l ? t : null,
        { active: u, annotations: d } = tl(o),
        m = (0, tv.Zv)(o),
        f = (0, ew.useHasAnyModalOpen)(),
        h = (0, c.bG)([tB.default], () => tB.default.getCurrentUser()),
        p = h?.id ?? null,
        [g, x] = i.useState(null),
        [b, j] = i.useState(null),
        [y, w] = i.useState(!1),
        [k, A] = i.useState(!1),
        [N, S] = i.useState(null),
        [E, I] = i.useState(!1),
        T = i.useRef(null),
        M = i.useRef(null),
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
        if (null != K) return () => lV(K, "design");
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
                x((t) => (oq(t, e) ? t : e));
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
            if (null == t) return void A(!0);
            (w(!0), A(!1));
            let n = `design-feedback-${crypto.randomUUID()}`;
            return (
                (0, oR.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                    (t) => {
                        if (!e) return;
                        w(!1);
                        let n = "completed" === t.status ? oV(t.response) : null;
                        null == n ? A(!0) : (j(n), te(o, { url: n.url, title: n.title, viewport: n.viewport }));
                    },
                    () => {
                        e && (w(!1), A(!0));
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
        if (oq(X.current, g)) return;
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
                    (0, oR.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !Z.current) return;
                        let l = oV(e.response);
                        null != l && (j(l), te(o, { url: l.url, title: l.title, viewport: l.viewport }));
                        let a = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let i = oF(e.element);
                            null != i && a.set(l.id, i);
                        }),
                            (n = e4(o)).active &&
                                0 !== a.size &&
                                e7(o, {
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
                    (S(null), z(null), V(null), j(null));
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
                    (0, oO.W)(
                        n,
                        "control",
                        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
                        { timeoutMs: 5500, label: "inspect" },
                    )
                        .then(oz, () => ({ status: "failed" }))
                        .then((t) => {
                            if (((Q.current = !1), Z.current)) {
                                if ("picked" !== t.status || oZ(t.target, er.current.rect, er.current.scale))
                                    "picked" === t.status || "none" === t.status
                                        ? S(null)
                                        : "unsupported" === t.status && O(!0);
                                else {
                                    let e = eQ(t.target);
                                    (L((t) => (oQ(t, e) ? t : e)),
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
            let e = setTimeout(() => G(null), oY);
            return () => clearTimeout(e);
        }, [U]));
    let en = null == b || null == g || b.viewport.width < 1 ? 1 : g.width / b.viewport.width,
        ea = null != b || k,
        ei = i.useMemo(() => b?.elements ?? [], [b]),
        er = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        er.current = { rect: g, scale: en };
    }, [g, en]);
    let es = i.useCallback(
            (e, t, n) => {
                null != o &&
                    (lV(o, "design"),
                    V(null),
                    (q.current = !1),
                    z({ projectId: o, target: e, anchor: t, draft: "", at: n, label: eQ(e) }));
            },
            [o],
        ),
        ed = i.useCallback((e, t) => ({ x: (e.clientX - t.left) / en, y: (e.clientY - t.top) / en }), [en]),
        ec = i.useCallback(() => {
            let e = _.current;
            if (null == e) return;
            let t = T.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let n = M.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    i.useLayoutEffect(ec);
    let em = i.useCallback(
            (e) => {
                if (null == g || null != H) return;
                if (((_.current = { x: e.clientX, y: e.clientY }), ec(), I(!0), null != F)) {
                    (Math.abs(e.clientX - F.at.x) > oJ || Math.abs(e.clientY - F.at.y) > oJ) && (q.current = !0);
                    return;
                }
                if (!ea) return void S(null);
                let t = ed(e, g);
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
                        n = null != e && oZ(e, g, en) ? null : e;
                    if (null != n) {
                        let e = eQ(n);
                        L((t) => (oQ(t, e) ? t : e));
                    }
                    S((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = J.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((J.current = n), (Y.current = n), ee());
            },
            [g, en, ea, ed, D, ei, F, H, ec, ee],
        ),
        ef = i.useCallback(() => {
            (I(!1), S(null), (J.current = null), (Y.current = null));
        }, []);
    i.useEffect(() => {
        if (!W || !E || !ea || D || null != F || null != H) return;
        let e = _.current,
            { rect: t, scale: n } = er.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((J.current = l), (Y.current = l), ee());
    }, [W, E, ea, D, F, H, ee]);
    let eh = i.useCallback(
            (e) => {
                if (null != F || null != H) {
                    (et(), V(null));
                    return;
                }
                if (null == N || null == g) return;
                let t = ed(e, g);
                es(
                    N,
                    (function (e, t, n) {
                        let { x: l, y: a, width: i, height: r } = e.rect;
                        return i < 1 || r < 1
                            ? eY
                            : { x: Math.min(1, Math.max(0, (t - l) / i)), y: Math.min(1, Math.max(0, (n - a) / r)) };
                    })(N, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [N, g, ed, F, H, es, et],
        ),
        ep = i.useCallback(() => {
            null != o && (S(null), e8(o));
        }, [o]),
        eg = i.useCallback(() => {
            null != o &&
                (null != F
                    ? et()
                    : H?.confirmingRemove === !0
                      ? V({ ...H, confirmingRemove: !1 })
                      : null != H
                        ? V(null)
                        : ep());
        }, [o, F, H, et, ep]),
        ex = i.useRef(eg),
        eb = i.useRef(ep);
    i.useLayoutEffect(() => {
        ((ex.current = eg), (eb.current = ep));
    });
    let ev = i.useRef(null);
    i.useEffect(() => {
        if (W)
            return (
                o_.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        o_.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), ex.current());
        }
        function t(e) {
            let t = e.target;
            (0, tP.vq)(t) &&
                ev.current?.contains(t) !== !0 &&
                s?.current?.contains(t) !== !0 &&
                !(function (e) {
                    try {
                        return ((0, oM.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) &&
                eb.current();
        }
    }, [W, s]);
    let ej = i.useCallback(
            (e) => {
                if (null == o) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), eg());
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
                    es(N, eY, { x: (g?.left ?? 0) + N.rect.x * en, y: (g?.top ?? 0) + N.rect.y * en }));
            },
            [o, F, H, ei, N, es, eg, g, en],
        ),
        ey = i.useCallback(
            (e) => {
                null == o ||
                    null == F ||
                    ((eJ(F.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, el.dv)(
                            o,
                            (function (e, t) {
                                let { kind: n, name: l } = eQ(e),
                                    a = [n, l].filter((e) => "" !== e).join(": ");
                                return `${e2}${a}${e1}${e0(e)}
${t.trim()}`;
                            })(F.target, F.draft),
                            e,
                        ),
                        et(),
                        S(null)));
            },
            [o, F, et],
        ),
        ek = i.useCallback((e) => (null == o ? Promise.reject(Error("no project")) : (0, el.vX)(o, e)), [o]),
        eC = i.useCallback(() => {
            if (null != o && null != H && null != p && eJ(H.draft)) {
                var e, t;
                let n, l;
                ((e = H.id),
                    (t = H.draft.trim()),
                    null != (l = (n = e4(o)).annotations.find((t) => t.id === e)) &&
                        tt(l, p) &&
                        e7(o, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    V({ ...H, editing: !1 }));
            }
        }, [o, H, p]),
        eA = i.useCallback(() => {
            if (null != o && null != H && null != p) {
                var e;
                let t, n;
                ((e = H.id),
                    null != (n = (t = e4(o)).annotations.find((t) => t.id === e)) &&
                        tt(n, p) &&
                        e7(o, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    V(null));
            }
        }, [o, H, p]),
        eN = u
            ? y
                ? eu.intl.string(eo.default["Eb/YV9"])
                : k
                  ? eu.intl.string(eo.default.FD30bh)
                  : eu.intl.formatToPlainString(eo.default.dTSqLF, { count: d.length })
            : "",
        eS = W && null != g,
        eE = E && null == H,
        eI = null == H ? null : d.find((e) => e.id === H.id),
        eT = F?.target ?? eI?.target ?? null,
        eP = F ?? U,
        eM = F ?? (U?.instant === !0 ? null : U),
        e_ =
            null != eI && null != g
                ? (function (e, t) {
                      let { left: n, top: l } = oH(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(oB(eI.target, eI.anchor, g, en), g)
                : null;
    return (0, oP.createPortal)(
        (0, a.jsxs)("div", {
            ref: ev,
            className: oU.Li,
            children: [
                (0, a.jsx)("div", {
                    className: oU.y4,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "conjure-design-announcer",
                    children: eN,
                }),
                eS
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: oU.MT,
                                  style: { left: g.left, top: g.top, width: g.width, height: g.height },
                                  "data-plain-cursor": eE ? void 0 : "",
                                  "data-testid": "conjure-design-surface",
                                  role: "application",
                                  "aria-label": eu.intl.string(eo.default["speb/9"]),
                                  tabIndex: 0,
                                  onMouseMove: em,
                                  onMouseLeave: ef,
                                  onClick: eh,
                                  onKeyDown: ej,
                              }),
                              null != N && null == F && null == H ? (0, a.jsx)(o0, { box: o$(N, g, en) }) : null,
                              (0, a.jsx)("div", {
                                  ref: T,
                                  className: oU.aZ,
                                  children: (0, a.jsx)("div", {
                                      className: oU.xz,
                                      "data-shown": null != N && null == H && null == F ? "" : void 0,
                                      "data-instant": $ ? "" : void 0,
                                      children: (0, a.jsxs)(v.E, {
                                          variant: "text-xs/medium",
                                          className: oU.Ux,
                                          children: [
                                              null == R
                                                  ? null
                                                  : (0, a.jsx)("span", { className: oU.Tl, children: R.kind }),
                                              null == R || "" === R.name
                                                  ? null
                                                  : (0, a.jsxs)("span", { className: oU.kh, children: [" ", R.name] }),
                                          ],
                                      }),
                                  }),
                              }),
                              (0, a.jsx)("div", {
                                  ref: M,
                                  className: oU.Y,
                                  children: eE ? (0, a.jsx)("div", { className: oU.u }) : null,
                              }),
                              null == eM
                                  ? null
                                  : (0, a.jsx)("div", {
                                        className: oU.aZ,
                                        style: { transform: `translate3d(${eM.at.x + 20}px, ${eM.at.y + 20}px, 0)` },
                                        children: (0, a.jsx)("div", {
                                            className: oU.xz,
                                            "data-shown": "",
                                            "data-locked": "",
                                            "data-closing": null == F ? "" : void 0,
                                            children: (0, a.jsxs)(v.E, {
                                                variant: "text-xs/medium",
                                                className: oU.Ux,
                                                children: [
                                                    (0, a.jsx)("span", { className: oU.Tl, children: eM.label.kind }),
                                                    "" === eM.label.name
                                                        ? null
                                                        : (0, a.jsxs)("span", {
                                                              className: oU.kh,
                                                              children: [" ", eM.label.name],
                                                          }),
                                                ],
                                            }),
                                        }),
                                    }),
                              null != eT
                                  ? (0, a.jsx)("div", { className: oU.D0, style: o$(eT, g, en), "aria-hidden": !0 })
                                  : null,
                              d.map((e, t) => {
                                  let n = oB(e.target, e.anchor, g, en),
                                      l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                  return (0, a.jsx)(
                                      "button",
                                      {
                                          type: "button",
                                          className: oU.xL,
                                          style: { ...oH(n, g), width: 24, height: 24 },
                                          "aria-label": eu.intl.formatToPlainString(eo.default.SxaIQA, {
                                              index: t + 1,
                                              target: eZ(e.target),
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
                                          children: (0, a.jsx)(oK, { authorId: e.authorId }),
                                      },
                                      e.id,
                                  );
                              }),
                              null == eP || null == o
                                  ? null
                                  : (0, a.jsx)(oD, {
                                        projectId: o,
                                        at: { x: eP.at.x + 20, y: eP.at.y + 20 },
                                        bounds: g,
                                        kind: eP.label.kind,
                                        value: eP.draft,
                                        canSubmit: null != F && eJ(eP.draft),
                                        onChange: (e) => {
                                            null != F && z({ ...F, draft: e });
                                        },
                                        onSubmit: ey,
                                        onDismiss: et,
                                        onUploadFile: ek,
                                        closing: null == F,
                                    }),
                              null != eI && null != H && null != e_
                                  ? (0, a.jsxs)(oX, {
                                        point: e_,
                                        frame: g,
                                        authorId: eI.authorId,
                                        title: eZ(eI.target),
                                        testId: "conjure-design-popout",
                                        onDismiss: () => {
                                            H.confirmingRemove ? V({ ...H, confirmingRemove: !1 }) : V(null);
                                        },
                                        onMouseLeave: () => {
                                            H.editing || H.confirmingRemove || V(null);
                                        },
                                        children: [
                                            H.editing
                                                ? (0, a.jsx)(P.f, {
                                                      autoFocus: !0,
                                                      label: eu.intl.string(eo.default.KCYqWL),
                                                      hideLabel: !0,
                                                      value: H.draft,
                                                      maxLength: 1e3,
                                                      rows: 3,
                                                      onChange: (e) => V({ ...H, draft: e }),
                                                      onKeyDown: (e) => {
                                                          "Enter" !== e.key || e.shiftKey || (e.preventDefault(), eC());
                                                      },
                                                  })
                                                : (0, a.jsx)(v.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-default",
                                                      className: oU.aC,
                                                      children: eI.comment,
                                                  }),
                                            tt(eI, p)
                                                ? (0, a.jsx)("div", {
                                                      className: oU.eB,
                                                      children: H.confirmingRemove
                                                          ? (0, a.jsxs)(a.Fragment, {
                                                                children: [
                                                                    (0, a.jsx)(v.E, {
                                                                        variant: "text-xs/normal",
                                                                        color: "text-muted",
                                                                        className: oU.nv,
                                                                        children: eu.intl.string(eo.default.wOHvts),
                                                                    }),
                                                                    (0, a.jsx)(C.$, {
                                                                        variant: "secondary",
                                                                        size: "sm",
                                                                        text: eu.intl.string(eo.default["W/HWvP"]),
                                                                        onClick: () =>
                                                                            V({ ...H, confirmingRemove: !1 }),
                                                                    }),
                                                                    (0, a.jsx)(C.$, {
                                                                        variant: "critical-primary",
                                                                        size: "sm",
                                                                        text: eu.intl.string(eo.default.friIzR),
                                                                        "data-testid": "conjure-design-remove-confirm",
                                                                        onClick: eA,
                                                                    }),
                                                                ],
                                                            })
                                                          : (0, a.jsxs)(a.Fragment, {
                                                                children: [
                                                                    (0, a.jsx)(C.$, {
                                                                        variant: "critical-secondary",
                                                                        size: "sm",
                                                                        text: eu.intl.string(eo.default.friIzR),
                                                                        onClick: () =>
                                                                            V({
                                                                                ...H,
                                                                                editing: !1,
                                                                                confirmingRemove: !0,
                                                                            }),
                                                                    }),
                                                                    H.editing
                                                                        ? (0, a.jsx)(C.$, {
                                                                              variant: "primary",
                                                                              size: "sm",
                                                                              disabled: !eJ(H.draft),
                                                                              text: eu.intl.string(eo.default.iicRP9),
                                                                              onClick: eC,
                                                                          })
                                                                        : (0, a.jsx)(C.$, {
                                                                              variant: "secondary",
                                                                              size: "sm",
                                                                              text: eu.intl.string(
                                                                                  eo.default["6eW9lg"],
                                                                              ),
                                                                              onClick: () =>
                                                                                  V({
                                                                                      ...H,
                                                                                      editing: !0,
                                                                                      draft: eI.comment,
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
    );
}
function oK(e) {
    let { authorId: t } = e,
        n = (0, c.bG)([tB.default], () => tB.default.getUser(t), [t]);
    return (0, a.jsx)(aL.eu, {
        src: null == n ? null : aF.Ay.getUserAvatarURL(n),
        size: aD._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function oX(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        { point: u, frame: d, authorId: c, title: m, testId: f, onDismiss: h, onMouseLeave: p, children: g } = e,
        x = i.useRef(null),
        b = i.useRef(null),
        [j, y] = i.useState(oG);
    i.useLayoutEffect(() => {
        let e = x.current?.getBoundingClientRect(),
            t = b.current?.getBoundingClientRect();
        if (null == e || null == t || e.width < 1 || t.width < 1) return;
        let n = { x: t.left + t.width / 2 - e.left, y: t.top + t.height / 2 - e.top };
        y((e) => (0.5 > Math.abs(e.x - n.x) && 0.5 > Math.abs(e.y - n.y) ? e : n));
    }, []);
    let {
            left: w,
            top: k,
            originX: C,
            originY: A,
        } = ((n = Math.max((t = d.left + 8), d.left + d.width - 300 - 8)),
        (r = Math.max((l = d.top + 8), d.top + d.height - 160 - 8)),
        (s = Math.min(Math.max(u.x - j.x, t), n)),
        { left: s, top: (o = Math.min(Math.max(u.y - j.y, l), r)), originX: u.x - s, originY: u.y - o }),
        N = { left: w, top: k, "--custom-conjure-card-origin-x": `${C}px`, "--custom-conjure-card-origin-y": `${A}px` };
    return (0, a.jsxs)("div", {
        ref: x,
        className: oU.Nr,
        style: N,
        "data-testid": f,
        onMouseLeave: p,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, a.jsxs)("div", {
                className: oU.MY,
                children: [
                    (0, a.jsx)("span", { ref: b, className: oU.ip, children: (0, a.jsx)(oK, { authorId: c }) }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: oU.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: oU.zI, children: g }),
        ],
    });
}
let oY = 300,
    oJ = 2;
function oQ(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function oZ(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        a = t.height / n;
    return !(l < 1) && !(a < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * a;
}
function o0(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: oU.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var o2 = n(659723),
    o1 = n(697744),
    o6 = n(130324);
function o9(e) {
    let t = (0, o1.c)(),
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
function o3(e) {
    let { className: t } = e,
        { Component: n, events: l } = o9(3e4);
    return (0, a.jsxs)("div", {
        className: t,
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: o6.o,
                children: eu.intl.string(eo.default.AyiQEp),
            }),
        ],
    });
}
var o5 = n(251363),
    o4 = n(944142),
    o7 = n(532247),
    o8 = n(501628);
function ue(e) {
    let { progress: t } = e,
        { Component: n } = o9(1500),
        l = W.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: o8.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: o8.PM,
                            "data-state": n < t.stepIndex ? "done" : n === t.stepIndex ? "current" : "todo",
                        },
                        n,
                    ),
                ),
            }),
            l && null != t.stepLabel
                ? (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-overlay-light", children: t.stepLabel })
                : null,
        ],
    });
}
function ut(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        o = (0, c.bG)([o4.A], () => (s ? o4.A.getLiveReload(t) : null), [s, t]),
        u = (0, q.A)(n, r)?.id ?? null,
        d = o?.phase ?? null,
        m = (function (e, t) {
            let n = (0, o7.dv)(e),
                [l, a] = i.useState(null),
                [r, s] = i.useState(n);
            r !== n && (s(n), a(null == n ? (0, o7.QP)(e, r) : null));
            let o = (0, c.bG)(
                    [tE.A],
                    () => {
                        let e = tE.A.getFrame(t);
                        return (0, tD.x1)(e) && e.data.proxyTicketRefreshing;
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
                        null != n.target && n.target === (0, o5.o)(null, t) && e();
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
        f = (0, o7.h_)(d, o?.step ?? null, m);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(w.A, { tag: "div", role: "status", "aria-live": "polite", children: f?.title ?? "" }),
            null != f
                ? (0, a.jsx)("div", {
                      className: o8.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(ue, { progress: f }),
                  })
                : null,
        ],
    });
}
var un = n(343030),
    ul = n(317608),
    ua = n(206600),
    ui = n(742023),
    ur = n(347927);
function us(e) {
    let { title: t, body: n, wide: l = !1, children: i } = e;
    return (0, a.jsxs)("div", {
        className: s()(ur.Bf, l && ur.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: ur.Ux,
                children: [
                    (0, a.jsx)(E.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, a.jsx)(v.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                ],
            }),
            i,
        ],
    });
}
var uo = n(957272);
function uu(e) {
    let { applicationId: t, surface: n, frameOverlay: l } = e,
        { frame: r, state: s } = (0, ua.A)({ applicationId: t, surface: n }),
        o = (0, tD.VA)(t, n);
    switch (
        (i.useEffect(
            () => (
                !(function (e) {
                    let t = tE.A.getFrame(e);
                    if (null == t || tI.A.getWindowOpen(eb.MLl.ACTIVITY_POPOUT)) return;
                    let n = tE.A.getMainFrame()?.id === e;
                    t.intent === tD.sV.MAIN
                        ? (n || G.A.promoteFrame(e), G.A.resetFrameLayoutModes(e))
                        : n && G.A.clearMainFrameSlot();
                })(o),
                () => {
                    let e;
                    null != (e = tE.A.getFrame(o)) &&
                        ((0, tD.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        ui.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === tD.sV.INLINE && G.A.promoteFrame(o),
                              G.A.updateFrameLayoutMode({ frameId: o, layoutMode: tD.y0.PIP }))
                            : e.intent === tD.sV.MAIN && G.A.demoteMainFrame(o));
                }
            ),
            [o],
        ),
        s)
    ) {
        case ua.n.Launched:
            return (0, a.jsx)(ul.A, { frameId: r.id, level: un.A.WithinAppContent, className: uo.Z7, overlay: l });
        case ua.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: uo.qs,
                children: (0, a.jsx)(us, {
                    title: eu.intl.string(eo.default["9kpdo7"]),
                    body: eu.intl.string(eo.default.iIA8Nj),
                }),
            });
        case ua.n.NoApplication:
            return (0, a.jsx)(o3, { className: uo.qs });
        case ua.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: uo.qs,
                children: (0, a.jsx)(us, {
                    title: eu.intl.string(eo.default["7k4GyN"]),
                    body: eu.intl.string(eo.default.zdIy3R),
                }),
            });
        case ua.n.Error:
            return (0, a.jsxs)("div", {
                className: uo.qs,
                children: [
                    (0, a.jsx)(E.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: eu.intl.string(eo.default.lTPbnG),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: uo.tj,
                        children: eu.intl.string(eo.default.e6GiAZ),
                    }),
                ],
            });
        case ua.n.AwaitingLaunch:
        case ua.n.Loading:
            return (0, a.jsx)("div", { className: uo.qs, children: (0, a.jsx)(k.y, {}) });
    }
}
var ud = n(334738),
    uc = n(688438),
    um = n(355622),
    uf = n(531685),
    uh = n(365971),
    up = n(703462);
function ug(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: up.f,
        children: [
            (0, a.jsx)(aP.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function ux() {
    return (0, a.jsx)("div", { className: up.f, children: (0, a.jsx)(k.y, {}) });
}
function ub(e) {
    let t,
        n,
        { previewApplicationId: l } = e,
        { data: r, isLoading: s } = (0, F.YY)(l),
        o = r?.bot?.id ?? null,
        u = (0, c.bG)([K.A], () => {
            if (null == o) return null;
            let e = K.A.getDMFromUserId(o);
            return null != e ? K.A.getChannel(e) : null;
        });
    ((t = u?.id ?? null),
        i.useEffect(() => {
            null != t && nO.A.preload(eb.ME, t);
        }, [t]),
        (n = (0, c.bG)([uf.A], () => uf.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, uh.Xg)();
            return (
                (0, ud.yl)(t, e),
                () => {
                    (0, ud.dm)(t, e);
                }
            );
        }, [t, n]));
    let [d, m] = i.useState(null),
        f = null != o && d === o;
    return (i.useEffect(() => {
        if (null == o || null != u) return;
        let e = !1;
        return (
            nO.A.openPrivateChannel({ recipientIds: o, navigateToChannel: !1 }).catch(() => {
                e || m(o);
            }),
            () => {
                e = !0;
            }
        );
    }, [o, u]),
    s && null == r)
        ? (0, a.jsx)(ux, {})
        : null == o || f
          ? (0, a.jsx)(ug, { message: eu.intl.string(eo.default["VP/O8s"]) })
          : null == u
            ? (0, a.jsx)(ux, {})
            : (0, a.jsx)("div", {
                  className: up.g,
                  children: (0, a.jsx)(uc.A, { channel: u, guild: null, chatInputType: um.oU.SIDEBAR }, u.id),
              });
}
var uv = n(887909),
    uj = n(570962),
    uy = n(998475);
function uw(e) {
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
    } = (0, uv.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, a.jsxs)("section", {
        className: uy.Nr,
        "aria-label": t,
        children: [
            (0, a.jsx)("div", {
                className: uy.rf,
                children: (0, a.jsx)(uj.A, {
                    obscured: !0 === f,
                    children: (0, a.jsxs)("div", {
                        className: uy.Gq,
                        children: [
                            null != n
                                ? (0, a.jsxs)("div", {
                                      className: uy.z3,
                                      children: [
                                          (0, a.jsx)(E.D, {
                                              variant: "heading-lg/bold",
                                              color: "text-strong",
                                              children: n,
                                          }),
                                          null != l
                                              ? (0, a.jsx)(v.E, {
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
                                className: s()(uy.Qs, c ? uy.cw : null, m ? uy.pN : null),
                                children: [r, null == u ? d : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != o && o.length > 0
                ? (0, a.jsx)("div", {
                      className: uy.o1,
                      children: o.map((e, t) => (0, a.jsx)(C.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var uk = n(409478),
    uC = n(652227);
function uA(e) {
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
        m = (0, q.A)(t, l),
        { data: f, isLoading: h } = (0, F.YY)(t ?? void 0);
    if (
        (i.useEffect(() => {
            s?.type === "permissions" && null != m && (0, nh.A)().leaveFrame(m.id);
        }, [m, s?.type]),
        s?.type === "checking")
    )
        return (0, a.jsx)("div", { className: uC.q, children: (0, a.jsx)(k.y, {}) });
    if (s?.type === "permissions")
        return (0, a.jsx)("div", {
            className: uC.q,
            children: null == s.authorizeProps ? (0, a.jsx)(k.y, {}) : (0, a.jsx)(uw, { ...s.authorizeProps }),
        });
    if (!r) return (0, a.jsx)(o3, { className: uC.q });
    if (null == t) return null;
    if (h && null == f) return (0, a.jsx)("div", { className: uC.q, children: (0, a.jsx)(k.y, {}) });
    let p = o.showModeSwitch && null != u ? { role: "tabpanel", id: (0, tz.z3)(u), "aria-label": (0, tz.kZ)(u) } : {};
    return (0, a.jsxs)("div", {
        className: uC.R,
        ...p,
        children: [
            ("frame" === u && o.modes.includes("frame")) || 0 === o.modes.length
                ? (0, a.jsx)(uu, { applicationId: t, surface: l, frameOverlay: c })
                : null,
            "widget" === u && null != d
                ? "unavailable-authorization-revoked" === o.profileState
                    ? (0, a.jsx)("div", {
                          className: uC.q,
                          children: (0, a.jsx)(us, {
                              wide: !0,
                              title: eu.intl.string(eo.default["08U+YO"]),
                              body: eu.intl.string(eo.default.pKBfrc),
                          }),
                      })
                    : (0, a.jsx)(uk.A, { applicationId: d })
                : null,
            "bot" === u && null != n ? (0, a.jsx)(ub, { previewApplicationId: n }) : null,
        ],
    });
}
var uN = n(175841),
    uS = n(867193),
    uE = n(417760);
function uI(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function uT(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function uP(e) {
    let { phase: t, projectId: n, onOpenPublishedApp: l, compact: r } = e,
        { stop: o, stopping: u } = (function (e) {
            let t = (0, c.bG)([tV.Ay], () => null != e && tV.Ay.isThinking(e)),
                [n, l] = i.useState(!1),
                [a, r] = i.useState(t);
            (t !== a && (r(t), t || l(!1)),
                i.useEffect(() => {
                    if (!n) return;
                    let e = setTimeout(() => l(!1), 5e3);
                    return () => clearTimeout(e);
                }, [n]));
            let s = i.useCallback(() => {
                null != e && (l(!0), (0, el.fu)(e));
            }, [e]);
            return { stop: t ? s : null, stopping: n };
        })(n),
        d = (0, tv.CU)(n),
        m = "controlling" === t,
        f = eu.intl.string(m ? (d ? eo.default["VJW/5P"] : eo.default["+hD2Iz"]) : eo.default["h+i1r9"]),
        h =
            null != l
                ? (0, a.jsx)(C.$, {
                      variant: "overlay-secondary",
                      size: "sm",
                      text: eu.intl.string(eo.default["1NcO7H"]),
                      onClick: l,
                  })
                : null,
        p =
            null != o
                ? (0, a.jsx)(C.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: eu.intl.string(eo.default.oU59sU),
                      loading: u,
                      onClick: o,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return r
        ? (0, a.jsxs)("div", {
              className: s()(uE.M0, uE.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  m
                      ? (0, a.jsx)(r$.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(uN.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "none", className: uE.ID, children: f }),
                  m ? (0, a.jsx)(w.A, { children: eu.intl.string(eo.default.fg1sor) }) : null,
                  m ? (0, a.jsxs)("div", { className: uE.lC, children: [h, p] }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: uE.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: uE.sp,
                      children: [
                          (0, a.jsx)(uN.SparklesIcon, { size: "sm", color: "currentColor" }),
                          m ? (0, a.jsx)(r$.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: uE.f4,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: uE.w9,
                                      children: f,
                                  }),
                                  m
                                      ? (0, a.jsx)(v.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: uE.Rb,
                                            children: eu.intl.string(eo.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  m ? (0, a.jsxs)("div", { className: uE.lC, children: [h, p] }) : null,
              ],
          });
}
function uM(e) {
    let {
            projectId: t,
            applicationId: n,
            previewApplicationId: l,
            resolveIframe: r,
            frameId: s,
            onOpenPublishedApp: o = null,
        } = e,
        u = (0, tv.Zv)(null != n && n === l ? t : null),
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
        c = (0, ew.useHasAnyModalOpen)(),
        m = tL(s);
    i.useEffect(() => {
        u &&
            m &&
            null != s &&
            (function (e) {
                if (!t_(e)) return;
                let t = tM(e);
                null != t && (0, tT.sP)(t);
            })(s);
    }, [u, m, s]);
    let [f, h] = i.useState(null),
        [p, g] = i.useState(null),
        [x, b] = i.useState(null),
        v = "idle" !== d;
    i.useEffect(() => {
        if (!v) return;
        function e() {
            let e = uI(r());
            h((t) => (uT(t, e) ? t : e));
            let t = null == p ? null : uI(p);
            (b((e) => (uT(e, t) ? e : t)), null != p && (0, uS.C)(p.getBoundingClientRect().height));
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
                    null != p && (0, uS.C)(0));
            }
        );
    }, [v, r, p]);
    let j = "idle" !== d && null != f,
        y = j && "controlling" === d && !c,
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
                  })(f, x);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            j
                ? (0, a.jsx)("div", {
                      ref: g,
                      className: uE.D,
                      "data-phase": d,
                      children: (0, a.jsx)("div", {
                          className: uE.QF,
                          children: (0, a.jsx)(uP, { phase: d, projectId: t, onOpenPublishedApp: o, compact: w }),
                      }),
                  })
                : null,
            (0, oP.createPortal)(
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)("div", {
                            className: uE.y4,
                            role: "status",
                            "aria-live": "polite",
                            "data-testid": "conjure-control-announcer",
                            children:
                                "controlling" === d
                                    ? eu.intl.string(eo.default.oWcemF)
                                    : "handoff" === d
                                      ? eu.intl.string(eo.default["h+i1r9"])
                                      : "",
                        }),
                        y
                            ? (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: uE.ys,
                                          style: C,
                                          "data-testid": "conjure-control-glow",
                                          "aria-hidden": !0,
                                      }),
                                      (0, a.jsx)("div", {
                                          className: uE.om,
                                          style: k,
                                          "data-testid": "conjure-control-block",
                                          "aria-hidden": !0,
                                      }),
                                  ],
                              })
                            : null,
                    ],
                }),
                document.body,
            ),
        ],
    });
}
var u_ = n(399503),
    uR = n(853555),
    uL = n(591335),
    uD = n(873727),
    uO = n(147248),
    uF = n(418842),
    uz = n(363195),
    uU = n(602853),
    uG = n(517461),
    uq = n(487336);
function u$(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: r } = e,
        s = (0, uU.r)(D.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = i.useRef(null),
        [u, d] = (0, uG.V)("VibegrationsChatSidebarWidth", 460),
        [c, m] = i.useState(u ?? 460),
        f = (0, aa.clamp)(c, 360, n);
    i.useLayoutEffect(() => {
        l(t ? f + s : 0);
    }, [f, t, s, l]);
    let h = (0, s2.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: m,
            onElementResizeEnd: d,
            orientation: s2.R.HORIZONTAL_LEFT,
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
        className: uq.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: uq.Di, onPointerDown: p }),
            (0, a.jsx)("div", { ref: o, className: uq.kL, style: { width: f }, children: r }),
        ],
    });
}
var uB = n(541940);
function uH(e) {
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
        } = e,
        [p, g] = i.useState(null),
        x = (0, q.A)(l, o),
        b = x?.id ?? null;
    (!(function (e, t) {
        let n = (0, c.bG)([uz.A], () => (0, uD.x4)(uz.A.theme)),
            l = (0, c.bG)([uO.A], () => uO.A.gradientPreset),
            {
                reducedMotion: a,
                fontScale: r,
                highContrast: s,
                forcedColors: o,
                underlineLinks: u,
            } = (0, c.cf)([iA.Ay], () => ({
                reducedMotion: iA.Ay.useReducedMotion,
                fontScale: (0, uD.U0)(),
                highContrast: iA.Ay.isHighContrastModeEnabled,
                forcedColors: iA.Ay.useForcedColors,
                underlineLinks: iA.Ay.alwaysShowLinkDecorations,
            })),
            d = W.hH.useSetting(),
            m = (0, uF.C)(),
            f = i.useRef(!1),
            h = i.useRef(!1),
            p = i.useRef(0),
            g = i.useRef(null),
            x = i.useCallback(() => {
                let l = (0, o5.o)(e, t);
                if (null == l) return;
                g.current = l;
                let i = {
                    revision: ++p.current,
                    baseTheme: n,
                    customTheme: (0, uD.Lq)(),
                    uiDensity: m,
                    messageDisplayCompact: d,
                    fontScale: r,
                    reducedMotion: a,
                    highContrast: s,
                    forcedColors: o,
                    underlineLinks: u,
                };
                (0, oO.W)(l, "set-env", i, {
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
                let n = (0, o5.o)(e, t);
                null != n && n !== g.current && v();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, o5.o)(e, t) && ((g.current = null), v());
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
    })(p, b),
        i.useEffect(() => {
            if (null != t) return (0, uR.Ng)(t, () => (0, o5.o)(p, b));
        }, [t, p, b]));
    let v = i.useCallback(() => (0, o5.o)(p, b), [p, b]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: s()(uB.Mh, d),
                children: [
                    u,
                    (0, a.jsx)(uM, {
                        projectId: t ?? null,
                        applicationId: l,
                        previewApplicationId: r,
                        resolveIframe: v,
                        frameId: b,
                        onOpenPublishedApp: h,
                    }),
                    (0, a.jsx)("div", { ref: g, className: uB.fm, children: m }),
                ],
            }),
            f,
            (0, a.jsx)(oW, {
                projectId: t ?? null,
                applicationId: l,
                previewApplicationId: r,
                resolveIframe: v,
                toggleRef: n,
            }),
        ],
    });
}
function uV(e) {
    let {
        projectId: t,
        designFeedbackToggleRef: n,
        applicationId: l,
        previewApplicationId: r,
        surface: o,
        header: u,
        chatOpen: d,
        onCloseChat: c,
        chatHeaderAction: m,
        onRestoreVersion: f,
        debugOpen: h = !1,
        onCloseDebug: p,
        restoreState: g,
        previewReady: x,
        previewGate: b,
        availability: v,
        activeMode: j,
        widgetApplicationId: y,
        onOpenPublishedApp: w = null,
    } = e;
    (0, u_.k)(t, y);
    let k = i.useRef(null),
        [C, A] = i.useState(0);
    (i.useLayoutEffect(() => {
        if (o.type === n6.U.MAIN) return ((0, eT.HV)(l), () => (0, eT.HV)(null));
    }, [l, o.type]),
        i.useEffect(() => {
            null != t && ((0, el.Hc)(t), (0, uL.$)());
        }, [t]),
        i.useLayoutEffect(() => {
            let e = k.current;
            if (null == e) return;
            function t() {
                null != e && A(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return (n.observe(e), () => n.disconnect());
        }, []),
        i.useLayoutEffect(() => () => (0, eT.Zq)(0), []));
    let N = Math.max(360, C - 320),
        S = d || o.type === n6.U.MAIN;
    return (0, a.jsx)("div", {
        ref: k,
        className: uB.LB,
        children: (0, a.jsx)(uH, {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: o,
            header: u,
            onOpenPublishedApp: w,
            mainClassName: null == u ? void 0 : s()(uB.ez, { [uB.zt]: d }),
            content: (0, a.jsx)(uA, {
                applicationId: l,
                previewApplicationId: r,
                surface: o,
                previewReady: x,
                previewGate: b,
                availability: v,
                activeMode: j,
                widgetApplicationId: y,
                frameOverlay: (0, a.jsx)(ut, { projectId: t, applicationId: l, previewApplicationId: r, surface: o }),
            }),
            sidebar:
                null != t && S
                    ? (0, a.jsx)(u$, {
                          open: d,
                          maxWidth: N,
                          onWidthChange: eT.Zq,
                          children: (0, a.jsx)("div", {
                              className: uB.cO,
                              children: h
                                  ? (0, a.jsx)(oT, { projectId: t, onClose: p ?? (() => {}) }, t)
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(o2.A, { projectId: t }),
                                            (0, a.jsx)(n9.Ay, {
                                                "aria-label": eu.intl.string(eu.t["/VQax8"]),
                                                toolbar: (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        m,
                                                        null == c
                                                            ? null
                                                            : (0, a.jsx)(n9.Ay.Icon, {
                                                                  icon: R.P,
                                                                  tooltip: eu.intl.string(eo.default.JD6Oit),
                                                                  onClick: c,
                                                              }),
                                                    ],
                                                }),
                                                children: (0, a.jsx)(n9.Ay.Title, {
                                                    children: eu.intl.string(eu.t["/VQax8"]),
                                                }),
                                            }),
                                            (0, a.jsx)("div", {
                                                className: uB.cb,
                                                children: (0, a.jsx)(
                                                    r8,
                                                    { projectId: t, restoreState: g, onRestoreVersion: f },
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
var uW = n(631417);
function uK(e) {
    let { title: t, actions: n, breadcrumb: l } = e;
    return (0, a.jsx)(B.A, {
        hideSearch: !0,
        toolbar: n,
        className: uW.wx,
        "aria-label": t,
        children: (0, a.jsxs)("div", {
            className: uW.QF,
            children: [
                (0, a.jsx)(L.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: D.A.colors.TEXT_STRONG,
                    className: uW.Kk,
                }),
                null != l
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(B.A.Title, { onClick: l.onClick, children: l.title }),
                              (0, a.jsx)(B.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, a.jsx)(B.A.Title, { className: uW.Qw, wrapperClassName: uW.DD, children: t }),
            ],
        }),
    });
}
var uX = n(683071);
let uY = "conjuring-help";
var uJ = n(173114);
function uQ() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: n,
            } = (0, c.cf)([tB.default, Y.A, nP.Ay, ri.A], () => {
                let e = tB.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of Y.A.getGuildsArray()) {
                    if (!t.features.has(eb.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let n = nP.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, z.m1)(t, tB.default, ri.A) === uY;
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
                    ? (0, H.pX)(eb.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, nt.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, a.jsx)("div", {
              className: uJ.l,
              children: (0, a.jsx)(uX.w, {
                  type: "info",
                  iconAlign: "center",
                  children: eu.intl.format(eo.default["6anmu1"], { channel: uY, onNavigate: t }),
              }),
          });
}
var uZ = n(323140);
function u0(e) {
    return (0, a.jsx)(f.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function u2(e) {
    return (0, a.jsx)(h.u, { ...e, size: "custom", width: 20, height: 20 });
}
function u1(e) {
    return (0, a.jsx)(p.k, { ...e, size: "custom", width: 20, height: 20 });
}
let u6 = {
    showPublishBlocked: function (e) {
        (0, ew.openModal)((t) => (0, a.jsx)(nZ, { ...t, reason: e }));
    },
    openPublishNotes: n0.A,
    showError: (e) => (0, g.P)((0, x.o)(e, b.Ck.FAILURE)),
    openProfile: (e) => {
        (0, V.openUserProfileModal)({ userId: e });
    },
    openAutomodSettings: (e) => {
        Promise.resolve()
            .then(n.bind(n, 468689))
            .then((t) => {
                let { default: n } = t;
                return n.open(e, eb.BEX.GUILD_AUTOMOD);
            })
            .catch(() => {});
    },
};
function u9(e) {
    var t;
    let n,
        l,
        r,
        o,
        f,
        h,
        p,
        C,
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
                    (0, g.P)((0, x.o)(eu.intl.formatToPlainString(eo.default.aN2JdD, { name: l }), b.Ck.MESSAGE)),
                    em(n, l)
                        .catch((e) => {
                            let t;
                            (console.error("[vibegrations] project export failed", n, e),
                                (0, g.P)(
                                    (0, x.o)(
                                        409 === (t = e instanceof el.xE ? e.status : null)
                                            ? eu.intl.string(eo.default["9oqbEw"])
                                            : 404 === t
                                              ? eu.intl.string(eo.default["0W8uLq"])
                                              : eu.intl.string(eo.default.N8753A),
                                        b.Ck.FAILURE,
                                    ),
                                ));
                        })
                        .finally(() => {
                            r.current = !1;
                        }));
            }, [n, l])),
            {
                onExport: o,
                onImport: (f = ef(
                    i.useCallback(
                        (e) => {
                            let t = ec(e);
                            null != t
                                ? (0, g.P)((0, x.o)(t, b.Ck.FAILURE))
                                : (0, m.A)({
                                      title: eu.intl.formatToPlainString(eo.default["Gm+u1+"], { name: l }),
                                      subtitle: eu.intl.string(eo.default.M7H3sJ),
                                      confirmText: eu.intl.string(eo.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, H.pX)(eb.BVt.CHANNEL(E, ev.VV.CONJURE, n));
                                          try {
                                              await ed(n, e, eu.intl.string(eo.default.Owerd3));
                                          } catch {
                                              (0, g.P)((0, x.o)(eu.intl.string(eo.default["Q+l4Hv"]), b.Ck.FAILURE));
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
                : eu.intl.formatToPlainString(eo.default.AXydi3, { time: u()(S.updated_at).fromNow() }),
        R = (0, t$.wu)(S),
        L =
            (0, c.bG)([Y.A], () => (null == R ? null : (Y.A.getGuild(R)?.name ?? null)), [R]) ??
            eu.intl.string(eo.default["3QFps8"]),
        D = (0, c.bG)([eP.Ay], () => eP.Ay.isProjectDeleting(S.id), [S.id]),
        F =
            ((t = P ? S : null),
            (h = t?.id),
            (p = t?.owner_user_id),
            (C = (0, c.yK)(
                [tV.Ay],
                () =>
                    null == h
                        ? []
                        : [
                              ...new Set(
                                  tV.Ay.getMessages(h)
                                      .flatMap((e) => (null != e.user_id && e.user_id !== p ? [e.user_id] : []))
                                      .reverse(),
                              ),
                          ],
                [h, p],
            )),
            i.useEffect(() => {
                null != p && (tJ(p), C.forEach(tJ));
            }, [p, C]),
            (A = (0, c.bG)([tB.default], () => (null == p ? null : tB.default.getUser(p)), [p])),
            (N = (0, c.yK)([tB.default], () => C.map((e) => tB.default.getUser(e)).filter((e) => null != e), [C])),
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
                                      ? eu.intl.formatToPlainString(eo.default.t5RWBS, { creator: e })
                                      : eu.intl.formatToPlainString(eo.default["b5uCe/"], {
                                            creator: e,
                                            collaborators:
                                                0 === (n = void 0 ?? t.length)
                                                    ? ""
                                                    : 1 === n
                                                      ? eu.intl.formatToPlainString(eu.t["8s9z8P"], { first: t[0] })
                                                      : 2 === n
                                                        ? eu.intl.formatToPlainString(eu.t["i0K/dw"], {
                                                              first: t[0],
                                                              second: t[1],
                                                          })
                                                        : 3 === n
                                                          ? eu.intl.formatToPlainString(eu.t["/KSOKY"], {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                            })
                                                          : eu.intl.formatToPlainString(eu.t.xpU76u, {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                                count: n - 3,
                                                            }),
                                        });
                              })(
                                  (0, tH.mG)(A),
                                  N.map((e) => (0, tH.mG)(e)),
                              ),
                          },
                [A, N],
            )),
        z = i.useId(),
        U = (0, a.jsx)(v.E, { variant: "text-md/semibold", color: "text-strong", className: uZ.j1, children: S.name }),
        G = (0, eN.oF)(S.id),
        q = {
            projectId: S.id,
            projectName: S.name,
            guildId: E,
            projectGuildId: S.guild_id,
            isOwner: (0, eP.PV)(S),
            canRemix: (0, eP.H_)(S),
            onRemix: T,
            onExport: M.onExport,
            onImport: M.onImport,
        };
    return (0, a.jsxs)("div", {
        className: s()(uZ.OY, { [uZ.Wy]: D }),
        "aria-busy": D,
        children: [
            (0, a.jsx)(ta.Ay, { projectId: S.id }),
            null == G || D ? null : (0, a.jsx)("div", { className: uZ.SB, "aria-hidden": !0 }),
            (0, a.jsxs)(j.D, {
                className: uZ.W6,
                onClick: D ? void 0 : I,
                onContextMenu: function (e) {
                    D || (0, O.jA)(e, () => (0, a.jsx)(no, { ...q, onCloseMenu: O.Z_ }));
                },
                tabIndex: D ? -1 : void 0,
                "aria-describedby": null != F ? z : void 0,
                children: [
                    (0, a.jsx)(nd.A, { project: S, size: "md", className: uZ.VJ }),
                    (0, a.jsxs)("div", {
                        className: uZ.MM,
                        children: [
                            (0, a.jsxs)("div", {
                                className: uZ.Ub,
                                children: [
                                    null != F ? (0, a.jsx)(y.m, { text: F.label, ariaHidden: !0, children: U }) : U,
                                    null == F || D ? null : (0, a.jsx)(nf, { creator: F, className: uZ.rb }),
                                    G !== d.I.NEEDS_INPUT || D
                                        ? null
                                        : (0, a.jsxs)("div", {
                                              className: uZ.fs,
                                              children: [
                                                  (0, a.jsx)($.A, { mentionsCount: 1 }),
                                                  (0, a.jsx)(w.A, { children: eu.intl.string(eo.default.hfIuc7) }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: uZ.h3,
                                children: [
                                    (0, a.jsx)(v.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: uZ.Wb,
                                        children: D ? eu.intl.string(eo.default.Yh5pAc) : L,
                                    }),
                                    null == _ || D
                                        ? null
                                        : (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                  (0, a.jsx)("span", {
                                                      className: uZ.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, a.jsx)(v.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: uZ.zM,
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
            null != F ? (0, a.jsx)(w.A, { id: z, children: F.label }) : null,
            (0, a.jsx)("div", {
                className: uZ.M2,
                children: D
                    ? (0, a.jsx)(k.y, { type: k.t.SPINNING_CIRCLE_SIMPLE })
                    : (0, a.jsxs)("div", {
                          className: uZ.Pl,
                          children: [(0, a.jsx)(nu, { ...q, trigger: "iconButton" }), M.importInput],
                      }),
            }),
        ],
    });
}
function u3(e) {
    var t;
    let { project: l, projectsLoaded: r, onBack: s, guildId: o } = e,
        [u, d] = i.useState(!0),
        [f, h] = i.useState(!1),
        p = W.Q_.useSetting(),
        [j, w] = i.useState(null),
        [k, I] = i.useState(null),
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
    let L = (0, c.bG)([eP.Ay], () => (null == T ? null : eP.Ay.getIntegrationStatus(T)), [T]),
        { data: D, isLoading: O } = (0, F.YY)(l?.preview_application_id ?? void 0),
        $ = null != T && k !== T,
        V = L?.preview_ready === !0,
        X = L?.has_activity === !0,
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
                h = (0, c.bG)([tA.default], () => tA.default.getId()),
                { applicationWidgetConfig: p } = (0, tk.A)(h, f ?? void 0),
                g = p?.surfaces,
                x = (0, ty.yZ)({
                    widgetTop: g?.[tw.m.WIDGET_TOP] != null,
                    widgetBottom: g?.[tw.m.WIDGET_BOTTOM] != null,
                    miniProfile: g?.[tw.m.MINI_PROFILE] != null,
                }),
                b = null != f && (s ? x.hasMainCard : x.hasAny),
                { data: v } = (0, F.YY)(n ?? void 0),
                j = null != n && v?.bot?.id != null,
                { data: y, isLoading: w } = (0, F.YY)(t ?? void 0),
                k = l || (0, tC.X)(y),
                C = null != t && w && null == y,
                A = (0, ty.Xm)({
                    installScope: a,
                    hasFrame: k,
                    hasProfileWidget: b,
                    hasBotDm: j,
                    ownerAuthorizationRevoked: r,
                });
            return {
                availability: A,
                isResolving: C,
                activeMode: C ? null : (0, ty.Qs)(o, A),
                setMode: u,
                widgetApplicationId: f,
            };
        })({
            applicationId: l?.preview_application_id ?? null,
            previewApplicationId: l?.preview_application_id ?? null,
            declaredActivity: X,
            installScope: l?.install_scope ?? null,
            ownerAuthorizationRevoked: L?.owner_authorization_revoked === !0,
        });
    (0, tj.x)(T, (e) => {
        Y.modes.includes(e) && Q(e);
    });
    let ee = Y.modes.includes("frame"),
        et = (0, ty.Qg)({
            installScope: l?.install_scope ?? null,
            previewReady: V,
            integrationInstalled: L?.integration_installed ?? null,
            botPermissionsChanged: L?.bot_permissions_changed === !0,
        }),
        en = u && !f,
        ea = eu.intl.string(en ? eo.default.JD6Oit : eo.default.xjJAQm),
        ei = i.useCallback(() => {
            if (f) {
                (h(!1), d(!0));
                return;
            }
            d((e) => !e);
        }, [f]),
        er = i.useCallback(() => d(!1), []),
        { active: es } = tl(T);
    i.useEffect(() => {
        null != T && es && !ee && e8(T);
    }, [T, es, ee]);
    let em = i.useRef(null),
        eh = (0, tv.Zv)(T),
        ep = eu.intl.string(eh ? eo.default.Sme0T0 : es ? eo.default.vn5Rzu : eo.default["cl/Jyl"]),
        eg = i.useCallback(() => {
            if (null != T) {
                let e;
                if (es) return void e8(T);
                (h(!1), d(!0), (e = e4(T)).active || e7(T, { ...e, active: !0 }));
            }
        }, [T, es]),
        ex = i.useCallback(() => {
            h((e) => !e && (d(!0), !0));
        }, []),
        ej = i.useCallback(() => h(!1), []),
        ey = i.useCallback(
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
                    w({ entry: e, status: "restoring" }),
                    (0, el.oB)(a, e.sha)
                        .then(
                            async () => {
                                if (
                                    (n &&
                                        i() &&
                                        (0, g.P)(
                                            (0, x.o)(
                                                eu.intl.formatToPlainString(eo.default.Z4n6LX, {
                                                    title: (0, ti.T4)(e.subject).short,
                                                }),
                                                b.Ck.SUCCESS,
                                            ),
                                        ),
                                    null != t)
                                ) {
                                    let e = await (0, tr.c)(a, t);
                                    null != e && (0, g.P)((0, x.o)(e, b.Ck.FAILURE));
                                }
                                i() && w({ entry: e, status: "restored" });
                            },
                            (t) => {
                                i() &&
                                    (w({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", a, t),
                                    (0, g.P)((0, x.o)(eu.intl.string(eo.default["PSdo+w"]), b.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            i() && (_.current = !1);
                        }));
            },
            [l],
        ),
        ek = (0, c.bG)([tb.A], () => tb.A.isBuilderPreviewMobile()),
        eC = eu.intl.string(ek ? eo.default.tKGF0Q : eo.default.peqEOY),
        eA = i.useCallback(() => (0, eT.GG)(!ek), [ek]),
        eN = (0, q.A)(l?.preview_application_id ?? null, tD.sd),
        eS = (0, tD.x1)(eN) && eN.data.proxyTicketRefreshing,
        eE = i.useCallback(() => {
            null == eN || eS || G.A.refreshProxyTicket(eN.id);
        }, [eN, eS]),
        eI = i.useCallback(() => {
            var e, t;
            (null != l && ((e = l.id), (t = eN?.id), (0, el.Bn)(e), (0, nh.A)().leaveFrame(t)), s());
        }, [l, eN?.id, s]),
        eM = i.useCallback(() => {
            null != l && (d(!0), (0, el.dv)(l.id, eu.intl.string(eo.default.oU20rd)));
        }, [l]),
        e_ = ef(
            i.useCallback(
                (e) => {
                    if (null == l) return;
                    let t = l.id,
                        n = ec(e);
                    null != n
                        ? (0, g.P)((0, x.o)(n, b.Ck.FAILURE))
                        : (0, m.A)({
                              title: eu.intl.formatToPlainString(eo.default["Gm+u1+"], { name: l.name }),
                              subtitle: eu.intl.string(eo.default.M7H3sJ),
                              confirmText: eu.intl.string(eo.default.gFHykw),
                              variant: "critical",
                              onConfirm: async () => {
                                  d(!0);
                                  try {
                                      await ed(t, e, eu.intl.string(eo.default.Owerd3));
                                  } catch {
                                      (0, g.P)((0, x.o)(eu.intl.string(eo.default["Q+l4Hv"]), b.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [l],
            ),
        ),
        eR = i.useCallback(() => {
            null != l && (0, n2.A)(l, o);
        }, [l, o]),
        eL = i.useCallback(async () => {
            if (null == T || P.current !== T) return;
            R.current?.abort();
            let e = new AbortController();
            ((R.current = e), I(null));
            try {
                await (0, eT.U1)(T, e.signal);
            } catch {
            } finally {
                e.signal.aborted || R.current !== e || P.current !== T || I(T);
            }
        }, [T]);
    i.useEffect(
        () => (
            eL(),
            () => {
                (R.current?.abort(), (R.current = null));
            }
        ),
        [eL],
    );
    let eD = nN(l ?? null, L ?? null, o),
        eO = ((t = l?.application_id ?? null), (0, c.bG)([nP.Ay], () => (null == t ? null : (0, np.i8)(o, t)), [o, t])),
        eF = i.useMemo(() => (null == eO ? null : () => (0, H.pX)(eb.BVt.CHANNEL(o, eO))), [o, eO]),
        ez = i.useCallback(async () => {
            null != l && (await nS(l, eD));
        }, [eD, l]),
        eU = i.useCallback(async () => {
            try {
                await ez();
            } catch {}
            await eL();
        }, [eL, ez]),
        eG = i.useMemo(() => {
            let e = l?.preview_application_id;
            return null == e || O || $
                ? null
                : {
                      ...(0, tq.i)({ applicationId: e, application: D ?? null, guildId: eD }),
                      onClose: () => {
                          eU();
                      },
                  };
        }, [$, eU, eD, O, D, l?.preview_application_id]),
        eq = et ? { type: "permissions", authorizeProps: eG } : $ && null == L ? { type: "checking" } : void 0,
        e$ = (0, c.bG)([eP.Ay], () => null != T && eP.Ay.isProjectDeleting(T), [T]);
    i.useEffect(() => {
        ((null == l && r) || e$) && (0, H.bG)(eb.BVt.CHANNEL(o, ev.VV.CONJURE));
    }, [o, l, r, e$]);
    let eB = i.useMemo(() => ({ guildId: o, platform: u6, busy: $ || O }), [o, $, O]),
        eH = nJ(T, eB),
        eV = eH?.intent === "open" && "channel" === eH.destination ? eH.appChannelId : null,
        eW = (0, c.bG)([K.A], () => (null == eV ? null : K.A.getChannel(eV)), [eV]),
        eK = (0, z.Ay)(eW),
        eX = (0, U.gU)(eW),
        eY =
            null != eK && null != eX
                ? eu.intl.format(eo.default.gR7PUV, {
                      channel: eK,
                      channelIconHook: (e, t) =>
                          (0, a.jsx)(eX, { size: "xs", color: "currentColor", className: uZ.Y2 }, t),
                  })
                : eH?.label,
        eJ = eH?.upToDate === !0 ? eu.intl.string(eo.default.X0kGp2) : (eH?.disabledReason ?? null),
        eQ =
            null == eH
                ? null
                : (0, a.jsx)("div", {
                      className: uZ.As,
                      children: (0, a.jsx)(y.m, {
                          text: eJ,
                          asContainer: !0,
                          children: (0, a.jsx)(C.$, {
                              size: "sm",
                              variant: eH.upToDate ? "secondary" : "primary",
                              loading: eH.publishing,
                              disabled: eH.disabled,
                              onClick: () => eH.run("header"),
                              text: eY,
                          }),
                      }),
                  }),
        eZ = (0, a.jsx)(uK, {
            title: l?.name ?? eu.intl.string(eo.default.G1WwgK),
            breadcrumb: { title: eu.intl.string(eo.default.uk6jhJ), onClick: s },
            actions:
                null == l
                    ? null
                    : (0, a.jsxs)("div", {
                          className: uZ.FO,
                          children: [
                              Y.showModeSwitch ? (0, a.jsx)(tG, { modes: Y.modes, mode: J, onChange: Q }) : null,
                              ee
                                  ? (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(B.A.Icon, {
                                                icon: ek ? u1 : u2,
                                                tooltip: eC,
                                                "aria-label": eC,
                                                selected: ek,
                                                onClick: eA,
                                            }),
                                            (0, a.jsx)(B.A.Icon, {
                                                ref: em,
                                                icon: A.x,
                                                iconClassName: uZ.D8,
                                                tooltip: ep,
                                                "aria-label": ep,
                                                selected: es,
                                                disabled: eh,
                                                onClick: eg,
                                            }),
                                        ],
                                    })
                                  : null,
                              "frame" === J ? (0, a.jsx)(tO, { frame: eN, controlProjectId: l.id }) : null,
                              (0, a.jsx)("div", { className: uZ.YJ }),
                              p
                                  ? (0, a.jsx)(B.A.Icon, {
                                        icon: N.BugIcon,
                                        tooltip: eu.intl.string(eo.default.Mt5k9d),
                                        "aria-label": eu.intl.string(eo.default.Mt5k9d),
                                        selected: f,
                                        onClick: ex,
                                    })
                                  : null,
                              (0, a.jsx)(B.A.Icon, {
                                  icon: S.SettingsIcon,
                                  tooltip: eu.intl.string(eo.default.I2XSKe),
                                  "aria-label": eu.intl.string(eo.default.I2XSKe),
                                  onClick: () => (0, nl.A)(l.id, { guildId: o, isPreview: !0 }),
                              }),
                              (0, a.jsx)(nu, {
                                  projectId: l.id,
                                  projectName: l.name,
                                  guildId: o,
                                  projectGuildId: l.guild_id,
                                  isOwner: (0, eP.PV)(l),
                                  canRemix: (0, eP.H_)(l),
                                  onRefresh: (0, tD.x1)(eN) ? eE : void 0,
                                  isRefreshing: eS,
                                  onClose: eI,
                                  onExport: eM,
                                  onImport: e_.open,
                                  onRemix: eR,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = l.id),
                                          void (0, ew.openModalLazy)(async () => {
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
                                              restoreDisabled: j?.status === "restoring",
                                              onRestoreVersion: (e, t) => ey(e, t, !0),
                                          }),
                                          void (0, ew.openModalLazy)(async () => {
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
                                  : (0, a.jsx)(B.A.Icon, { icon: u0, tooltip: ea, "aria-label": ea, onClick: ei }),
                          ],
                      }),
        });
    return (0, a.jsxs)("div", {
        className: uZ.nj,
        children: [
            e_.input,
            (0, a.jsx)("main", {
                className: uZ.JX,
                children:
                    null == l
                        ? (0, a.jsxs)("div", {
                              className: uZ.j5,
                              children: [
                                  eZ,
                                  (0, a.jsxs)("div", {
                                      className: uZ.sD,
                                      children: [
                                          (0, a.jsx)(E.D, {
                                              variant: "heading-lg/semibold",
                                              children: eu.intl.string(eo.default.G1WwgK),
                                          }),
                                          (0, a.jsx)(v.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: eu.intl.string(eo.default.fINulo),
                                          }),
                                          (0, a.jsx)(C.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: eu.intl.string(eo.default["WFJ/vb"]),
                                              onClick: () => (0, eT.hF)(o),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(nz.Provider, {
                              value: eB,
                              children: (0, a.jsx)(
                                  uV,
                                  {
                                      projectId: l.id,
                                      designFeedbackToggleRef: em,
                                      applicationId: l.preview_application_id,
                                      previewApplicationId: l.preview_application_id,
                                      surface: tD.sd,
                                      header: eZ,
                                      chatOpen: u,
                                      onCloseChat: er,
                                      chatHeaderAction: eQ,
                                      debugOpen: p && f,
                                      onCloseDebug: ej,
                                      onRestoreVersion: ey,
                                      restoreState: j,
                                      previewReady: V,
                                      previewGate: eq,
                                      availability: Y,
                                      activeMode: J,
                                      widgetApplicationId: Z,
                                      onOpenPublishedApp: eF,
                                  },
                                  l.id,
                              ),
                          }),
            }),
        ],
    });
}
function u5(e) {
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
            eligibleGuilds: j,
            modelSettings: y,
            onModelSettingsChange: w,
            onSelectProject: A,
            onIdeaChange: N,
            onCreate: S,
            onCreateFromTemplate: E,
            onStartTemplate: O,
            onSubmitTemplate: F,
            onCancelTemplate: z,
            onSkipTemplate: U,
            onImportNewProject: G,
            importing: q,
        } = e,
        [$, H] = i.useState(() => ({ guildId: r, filter: nv(r) })),
        V = ($.guildId === r ? $.filter : nv(r)) ?? r,
        W = i.useCallback(
            (e) => {
                (nb.set(r, e), H({ guildId: r, filter: e }));
            },
            [r],
        ),
        K = (0, c.yK)(
            [Y.A],
            () =>
                (function (e, t) {
                    let n = new Set([t]);
                    for (let t of e)
                        (null != t.guild_id && n.add(t.guild_id),
                            null != t.preview_guild_id && n.add(t.preview_guild_id));
                    let l = [];
                    for (let e of n) {
                        let t = Y.A.getGuild(e);
                        null != t && l.push(t);
                    }
                    return l.sort((e, t) => e.name.localeCompare(t.name));
                })(t, r),
            [t, r],
        ),
        X = i.useMemo(
            () => [
                { id: "conjure-filter-all", value: "all", leading: L.D, label: eu.intl.string(eo.default["Xi/oIC"]) },
                {
                    id: "conjure-filter-user",
                    value: ng,
                    leading: eh.UserIcon,
                    label: eu.intl.string(eo.default.kCSgmG),
                },
                {
                    id: "conjure-filter-no-server",
                    value: nx,
                    leading: ep.R,
                    label: eu.intl.string(eo.default["3QFps8"]),
                },
                ...K.map((e) => ({
                    id: `conjure-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, a.jsx)(eK.Ay, { guild: e, size: eK.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [K],
        ),
        J = (0, c.yK)(
            [eP.Ay, Y.A],
            () => {
                let e = nj(V);
                if (null != e) return eP.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(Y.A.getGuilds()))
                    eP.Ay.hasFetchedGuildProjects(e.id) && t.push(...eP.Ay.getSharedProjects(e.id));
                return t;
            },
            [V],
        );
    i.useEffect(() => {
        let e = nj(V);
        null == e || eP.Ay.hasFetchedGuildProjects(e) || (0, eT.hF)(e);
    }, [V]);
    let Z = i.useMemo(
            () =>
                J.filter((e) => ny(e, V)).sort((e, t) =>
                    null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                ),
            [J, V],
        ),
        ee = i.useMemo(
            () => [
                {
                    label: eu.intl.string(eo.default.NyVn6T),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: eX,
                            label: eu.intl.string(eo.default.UPLaGM),
                            leading: eh.UserIcon,
                        },
                        ...j.map((e) => ({
                            id: `conjure-target-${e.id}`,
                            value: e.id,
                            label: e.name,
                            leading: (0, a.jsx)(eK.Ay, { guild: e, size: eK.Ay.Sizes.MINI, active: !0 }),
                        })),
                    ],
                },
            ],
            [j],
        ),
        et = i.useMemo(
            () =>
                t
                    .filter((e) => ny(e, V))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, V],
        ),
        en = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, np.Ot)(e, r)
                    ? A(e.id)
                    : (0, g.P)((0, x.o)(eu.intl.string(eo.default["XUl/cs"]), b.Ck.MESSAGE));
            },
            [r, A],
        ),
        el = eu.intl.string(eo.default.ab1sMf),
        ea = [
            eu.intl.string(eo.default["9w+Chc"]),
            eu.intl.string(eo.default.WAvmdq),
            eu.intl.string(eo.default.SKsrzl),
        ],
        ei = [
            {
                id: "moderation-bot",
                name: eu.intl.string(eo.default.lGLnE8),
                description: eu.intl.string(eo.default["pAC6k/"]),
                wizard: !0,
            },
            {
                id: "feature-showcase",
                name: eu.intl.string(eo.default.uJKQTs),
                description: eu.intl.string(eo.default["+dKy/B"]),
            },
            {
                id: "rust-sphere",
                name: eu.intl.string(eo.default.iF5Oru),
                description: eu.intl.string(eo.default.NbDDO6),
            },
        ],
        er = i.useCallback(
            (e) => {
                if (null != e.wizard) {
                    var t;
                    return void ((t = {
                        template: e,
                        guildId: r,
                        eligibleGuilds: j,
                        onStart: (t) => O(e.name, t),
                        onSubmit: (t, n, l) => F(e, t, n, l),
                        onCancel: z,
                        onSkip: U,
                    }),
                    (0, ew.openModalLazy)(
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
            [j, r, z, E, U, O, F],
        ),
        es = eu.intl.string(eo.default.zzYLlW),
        ed =
            (i.useEffect(() => {
                (0, eT.b8)();
            }, []),
            (0, c.bG)([eP.Ay], () => {
                let e = eP.Ay.getMaxProjects();
                return null != e && eP.Ay.hasFetchedOwnedProjects()
                    ? Math.max(0, e - eP.Ay.getOwnedProjects().length)
                    : null;
            })),
        ec = eu.intl.string(eo.default["2XcV3x"]),
        em = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), d || S());
            },
            [d, S],
        ),
        ef = nj(V) ?? r,
        eg = (0, c.bG)([eP.Ay], () => eP.Ay.getGuildProjectsFetchState(ef), [ef]),
        eb = (0, c.bG)([eP.Ay], () => eP.Ay.getGuildProjectsFetchState(r), [r]),
        [ev, ej] = i.useState(nC),
        ey = i.useMemo(() => nw.w.get(nA(r)) ?? !1, [r]),
        ek = "success" === eb,
        eC = (0, c.yK)([eP.Ay], () => eP.Ay.getSharedProjects(r), [r]).length > 0 || t.some((e) => ny(e, r)),
        eN = ev ?? (!!eC || "error" === eb || (!ek && ey));
    i.useEffect(() => {
        ek && nw.w.set(nA(r), eC);
    }, [ek, eC, r]);
    let eS = i.useCallback((e) => {
            (nw.w.set(nk, e), ej(e));
        }, []),
        eI = i.useCallback(() => eS(!eN), [eS, eN]),
        e_ = i.useCallback(() => eS(!1), [eS]),
        eR = eu.intl.string(eo.default.kar7jh),
        eF = eN ? eR : eu.intl.string(eo.default.WSc5Y2);
    return (0, a.jsx)("div", {
        className: s()(uZ.nj, uZ.a0),
        children: (0, a.jsxs)("div", {
            className: uZ.Yo,
            children: [
                (0, a.jsxs)("main", {
                    className: uZ.ps,
                    children: [
                        (0, a.jsx)(uK, {
                            title: eu.intl.string(eo.default.uk6jhJ),
                            actions: (0, a.jsx)(B.A.Icon, {
                                icon: I.Z,
                                tooltip: eF,
                                "aria-label": eF,
                                selected: eN,
                                onClick: eI,
                            }),
                        }),
                        (0, a.jsx)(T.Ip, {
                            className: uZ.Yy,
                            children: (0, a.jsx)("div", {
                                className: uZ.Mo,
                                children: (0, a.jsxs)("section", {
                                    className: s()(uZ.Qs, uZ.Ix),
                                    children: [
                                        (0, a.jsx)(uQ, {}),
                                        (0, a.jsx)(eW, {}),
                                        (0, a.jsxs)("section", {
                                            className: uZ.WI,
                                            "aria-label": es,
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: uZ.G9,
                                                    children: [
                                                        (0, a.jsx)(v.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: es,
                                                        }),
                                                        (0, a.jsx)(v.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: eu.intl.string(eo.default["N88+Ld"]),
                                                        }),
                                                    ],
                                                }),
                                                (0, a.jsx)(eO, {
                                                    listClassName: uZ.Aw,
                                                    radius: eL,
                                                    children: ei.map((e) =>
                                                        (0, a.jsx)(
                                                            "li",
                                                            {
                                                                className: uZ.EA,
                                                                children: (0, a.jsxs)(eM, {
                                                                    disabled: o,
                                                                    ariaLabel: eu.intl.formatToPlainString(
                                                                        eo.default.jGyR6p,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: s()(uZ.nx, uZ.rz),
                                                                    onClick: () => er(e),
                                                                    children: [
                                                                        (0, a.jsx)(v.E, {
                                                                            className: uZ.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, a.jsx)(v.E, {
                                                                            className: uZ.BK,
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
                                            className: uZ.WI,
                                            "aria-label": ec,
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: uZ.G9,
                                                    children: [
                                                        (0, a.jsx)(v.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: ec,
                                                        }),
                                                        (0, a.jsx)(v.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: eu.intl.string(eo.default.JnJOAn),
                                                        }),
                                                    ],
                                                }),
                                                (0, a.jsx)(eO, {
                                                    listClassName: uZ.Aw,
                                                    radius: eD,
                                                    children: ea.map((e) =>
                                                        (0, a.jsx)(
                                                            "li",
                                                            {
                                                                className: uZ.EA,
                                                                children: (0, a.jsx)(eM, {
                                                                    disabled: o,
                                                                    className: uZ.nx,
                                                                    onClick: () => S(e),
                                                                    children: (0, a.jsx)(v.E, {
                                                                        variant: "text-md/semibold",
                                                                        color: "text-strong",
                                                                        className: uZ.un,
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
                                        (0, a.jsx)(eA, {}),
                                    ],
                                }),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: uZ.Yl,
                            children: (0, a.jsxs)("div", {
                                className: s()(uZ.Qs, uZ.DA),
                                children: [
                                    (0, a.jsx)(P.f, {
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
                                        ? (0, a.jsx)(M.S, {
                                              checked: h,
                                              disabled: o,
                                              onChange: () => p(!h),
                                              label: eu.intl.string(eo.default.qfAk5B),
                                              description: eu.intl.string(eo.default["mq+Pml"]),
                                          })
                                        : null,
                                    (0, a.jsxs)("div", {
                                        className: uZ.VP,
                                        children: [
                                            (0, a.jsx)("div", {
                                                className: uZ.gH,
                                                children: (0, a.jsx)(_.l, {
                                                    selectionMode: "single",
                                                    label: eu.intl.string(eo.default.NyVn6T),
                                                    hideLabel: !0,
                                                    placeholder: eu.intl.string(eo.default.NyVn6T),
                                                    options: ee,
                                                    value: m,
                                                    onSelectionChange: f,
                                                    disabled: o,
                                                }),
                                            }),
                                            null != ed
                                                ? (0, a.jsx)(v.E, {
                                                      variant: "text-sm/medium",
                                                      color: 0 === ed ? "text-feedback-warning" : "text-subtle",
                                                      children:
                                                          0 === ed
                                                              ? eu.intl.string(eo.default.s28pGG)
                                                              : eu.intl.formatToPlainString(eo.default.Wy5aK4, {
                                                                    count: ed,
                                                                }),
                                                  })
                                                : null,
                                            (0, a.jsx)(tx, {
                                                settings: y ?? Q.A4,
                                                tiers: Q.lO,
                                                choices: (0, eE.b)()
                                                    ? {
                                                          main: [...Q.vC.main, ...Q.XE.main],
                                                          subagent: [...Q.vC.subagent, ...Q.XE.subagent],
                                                          thinking: Q.vC.thinking,
                                                      }
                                                    : Q.vC,
                                                disabled: o,
                                                onChange: w,
                                            }),
                                            (0, a.jsx)(C.$, {
                                                variant: "primary",
                                                size: "md",
                                                text: eu.intl.string(eu.t.CumH4u),
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
                    className: uZ.pA,
                    hidden: !eN,
                    "aria-label": eu.intl.string(eo.default.dWgSAa),
                    children: [
                        (0, a.jsxs)("div", {
                            className: uZ.IR,
                            children: [
                                (0, a.jsx)(v.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: uZ.RM,
                                    children: eu.intl.string(eo.default.dWgSAa),
                                }),
                                (0, a.jsxs)("div", {
                                    className: uZ.Ss,
                                    children: [
                                        (0, a.jsx)(ex, { importing: q, onImport: G }),
                                        (0, a.jsx)(B.A.Icon, { icon: R.P, tooltip: eR, "aria-label": eR, onClick: e_ }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsxs)(T.Ip, {
                            className: uZ.xe,
                            children: [
                                (0, a.jsx)("div", {
                                    className: uZ.Vw,
                                    children: (0, a.jsx)(_.l, {
                                        selectionMode: "single",
                                        label: eu.intl.string(eo.default.U6TqU9),
                                        hideLabel: !0,
                                        options: X,
                                        value: V,
                                        onSelectionChange: W,
                                    }),
                                }),
                                (0, a.jsx)(v.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: uZ.wE,
                                    children: eu.intl.string(eo.default.JQpNkh),
                                }),
                                ("unattempted" === eg || "loading" === eg) && 0 === et.length
                                    ? (0, a.jsx)("div", { className: uZ.E8, children: (0, a.jsx)(k.y, {}) })
                                    : "error" === eg && 0 === et.length
                                      ? (0, a.jsxs)("div", {
                                            className: uZ.E8,
                                            children: [
                                                (0, a.jsx)(v.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: uZ.JS,
                                                    children: eu.intl.string(eo.default.DJAPMO),
                                                }),
                                                (0, a.jsx)(C.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: eu.intl.string(eo.default["WFJ/vb"]),
                                                    onClick: () => (0, eT.hF)(ef),
                                                }),
                                            ],
                                        })
                                      : 0 === et.length
                                        ? (0, a.jsx)("div", {
                                              className: uZ.D1,
                                              children: (0, a.jsxs)("div", {
                                                  className: uZ.ST,
                                                  children: [
                                                      (0, a.jsx)(L.D, { size: "lg", color: D.A.colors.TEXT_SUBTLE }),
                                                      (0, a.jsx)(v.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: uZ.sI,
                                                          children: eu.intl.string(eo.default["9/5sLV"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, a.jsx)("div", {
                                              className: uZ.Dq,
                                              children: et.map((e) =>
                                                  (0, a.jsx)(
                                                      u9,
                                                      {
                                                          project: e,
                                                          guildId: r,
                                                          onSelect: () => en(e),
                                                          onRemix: () => (0, n2.A)(e, r),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          }),
                                Z.length > 0
                                    ? (0, a.jsxs)("div", {
                                          className: uZ.qx,
                                          children: [
                                              (0, a.jsxs)("div", {
                                                  className: uZ.uc,
                                                  children: [
                                                      (0, a.jsx)(v.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-strong",
                                                          children: eu.intl.string(eo.default["wFi8+o"]),
                                                      }),
                                                      (0, a.jsx)(v.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          children: eu.intl.string(eo.default.dQ3U1J),
                                                      }),
                                                  ],
                                              }),
                                              (0, a.jsx)("div", {
                                                  className: uZ.Dq,
                                                  children: Z.map((e) =>
                                                      (0, a.jsx)(
                                                          u9,
                                                          {
                                                              project: e,
                                                              guildId: r,
                                                              onSelect: () => en(e),
                                                              onRemix: () => (0, n2.A)(e, r),
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
function u4(e) {
    let t,
        { guildId: n, projectId: l } = e,
        r = (0, c.yK)([eP.Ay], () => eP.Ay.getOwnedProjects()),
        s = (0, c.yK)([X.Ay], () => X.Ay.getSelfMember(n)?.roles ?? [], [n]),
        o = (0, c.bG)(
            [Y.A, J.A],
            () => {
                let e = Y.A.getGuild(n);
                return null != e && J.A.can(eb.xBc.MANAGE_GUILD, e);
            },
            [n],
        ),
        [u, d] = i.useState(""),
        m = l ?? null,
        [f, h] = i.useState(!1),
        [p, v] = i.useState(null),
        j = (0, tQ.z)("VibegrationsScreen"),
        [y, w] = i.useState(null);
    i.useEffect(() => {
        w(null);
    }, [n]);
    let k = i.useMemo(() => (j.some((e) => e.id === n) ? n : eX), [j, n]),
        C = y ?? k,
        A = C === eX ? "user" : "guild",
        N = C === eX ? n : C,
        [S, E] = i.useState(!0),
        [I, T] = i.useState(null);
    (i.useEffect(() => {
        (0, eT.hF)(n);
    }, [n, s, o]),
        i.useEffect(() => {
            (0, eT.dm)(n, m);
        }, [n, m]));
    let P = i.useCallback(
            async (e, t, n) => {
                let l = await (0, eT.gA)({ guild_id: t, install_scope: n, flags: (0, Q.wo)("guild" === n && S) });
                ((0, el.Hc)(l),
                    (0, el.r2)(l, I ?? Q.A4),
                    e(l),
                    (0, H.pX)(eb.BVt.CHANNEL(t, ev.VV.CONJURE, l)),
                    d(""),
                    T(null));
            },
            [S, I],
        ),
        M = i.useCallback(
            async (e) => {
                let t = (e ?? u).trim(),
                    n = eI({ idea: t, installScope: A, submitting: f });
                if ("idea" !== n && "submitting" !== n) {
                    (null != e && d(e), h(!0), v(null));
                    try {
                        await P((e) => (0, el.dv)(e, t), N, A);
                    } catch (e) {
                        v((0, eS.mG)(e));
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
                    (h(!0), v(null));
                    try {
                        await P(
                            (t) => {
                                var n;
                                (0, el.dv)(
                                    t,
                                    ((n = e.name),
                                    eu.intl.formatToPlainString(eo.default["0PQip6"], { templateName: n })),
                                    void 0,
                                    { templateId: e.id },
                                );
                            },
                            N,
                            A,
                        );
                    } catch (e) {
                        v((0, eS.mG)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [P, A, N, f],
        ),
        R = i.useCallback(
            async (e, t) => {
                let n = await (0, eT.gA)({ guild_id: t, install_scope: "guild", flags: (0, Q.wo)(S) });
                return ((0, el.Hc)(n), (0, el.r2)(n, I ?? Q.A4), (0, el.dv)(n, (0, n1.Wl)(e)), n);
            },
            [S, I],
        ),
        L = i.useCallback(async (e, t, n, l) => {
            if (eP.Ay.getProject(t)?.guild_id !== n) {
                let e = await (0, eT.M7)(t, { guild_id: n, preview_guild_id: n });
                if (!e.ok) throw new eS.DS((0, eS.hj)(e), e.status);
            }
            ((0, el.dv)(t, l, void 0, { templateId: e.id }), (0, H.pX)(eb.BVt.CHANNEL(n, ev.VV.CONJURE, t)), T(null));
        }, []),
        D = i.useCallback((e) => {
            (0, eT.xx)(e).catch(() => void 0);
        }, []),
        O = i.useCallback(
            (e) => {
                let t = eP.Ay.getProject(e)?.guild_id ?? n;
                ((0, H.pX)(eb.BVt.CHANNEL(t, ev.VV.CONJURE, e)), T(null));
            },
            [n],
        ),
        [F, z] = i.useState(!1),
        U = i.useCallback(
            async (e, t) => {
                let l = ec(e);
                if (null != l) return void (0, g.P)((0, x.o)(l, b.Ck.FAILURE));
                z(!0);
                let a = null;
                try {
                    ((a = await (0, eT.gA)({ guild_id: n, install_scope: t, flags: (0, Q.wo)("guild" === t && S) })),
                        (0, el.Hc)(a),
                        (0, el.r2)(a, I ?? Q.A4),
                        await ed(a, e, eu.intl.string(eo.default["LUc7/5"])),
                        (0, H.pX)(eb.BVt.CHANNEL(n, ev.VV.CONJURE, a)),
                        T(null));
                } catch {
                    (null != a && (await (0, eT.xx)(a).catch(() => void 0)),
                        (0, g.P)((0, x.o)(eu.intl.string(eo.default["Q+l4Hv"]), b.Ck.FAILURE)));
                } finally {
                    z(!1);
                }
            },
            [n, S, I],
        ),
        G = i.useCallback(
            (e) => {
                (0, H.pX)(eb.BVt.CHANNEL(n, ev.VV.CONJURE, e));
            },
            [n],
        ),
        q = i.useCallback(() => {
            (0, H.pX)(eb.BVt.CHANNEL(n, ev.VV.CONJURE));
        }, [n]),
        $ = i.useCallback((e) => {
            (d(e), v(null));
        }, []),
        B = (0, c.bG)(
            [eP.Ay],
            () => {
                if (null == m) return null;
                let e = eP.Ay.getProject(m);
                return null == e || (0, eP.PV)(e) || e.guild_id === n ? e : null;
            },
            [m, n],
        ),
        V = (0, c.bG)([eP.Ay], () => eP.Ay.hasFetchedGuildProjects(n), [n]);
    return null != m
        ? (0, a.jsx)(u3, { project: B, projectsLoaded: V, onBack: q, guildId: n }, m)
        : (0, a.jsx)(u5, {
              projects: r,
              modelSettings: I,
              onModelSettingsChange: T,
              idea: u,
              guildId: n,
              submitting: f,
              createError: p,
              createDisabled: "idea" === (t = eI({ idea: u, installScope: A, submitting: f })) || "submitting" === t,
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
              eligibleGuilds: j,
          });
}
