(n.r(t), n.d(t, { default: () => dv }), n(321073));
var l,
    a,
    i,
    r = n(477900),
    s = n(582128),
    o = n(503698),
    u = n.n(o),
    d = n(536637),
    c = n.n(d),
    m = n(478104),
    f = n(17928),
    h = n(314116),
    p = n(534890),
    g = n(646270),
    x = n(31300),
    b = n(831453),
    v = n(739187),
    y = n(857250),
    j = n(97483),
    w = n(834730),
    k = n(939249),
    C = n(866665),
    A = n(140735),
    N = n(289873),
    S = n(821609),
    E = n(604525),
    I = n(92446),
    T = n(625903),
    P = n(297264),
    M = n(97893),
    _ = n(364522),
    R = n(103557),
    L = n(150934),
    D = n(691885),
    O = n(789645),
    F = n(152367),
    z = n(661531),
    G = n(442433),
    U = n(627363),
    q = n(47167),
    $ = n(713654),
    B = n(625180),
    H = n(672929),
    V = n(775946),
    W = n(742589),
    K = n(976860),
    X = n(402860),
    Y = n(885386),
    J = n(734057),
    Q = n(696451),
    Z = n(71393),
    ee = n(576705),
    et = n(164892),
    en = n(922016),
    el = n(980707),
    ea = n(477782),
    ei = n(81369),
    er = n(712808);
(n(323874), n(14289), n(35956));
var es = n(77729),
    eo = n(723702),
    eu = n(264572).Buffer;
async function ed(e, t) {
    if (eo.isPlatformEmbedded) {
        let n = eu.from(await e.arrayBuffer());
        if ("function" == typeof es.A.fileManager.saveWithDialog2) await es.A.fileManager.saveWithDialog2(n, t);
        else
            try {
                await es.A.fileManager.saveWithDialog(n, t);
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
var ec = n(248675),
    em = n(375708);
async function ef(e, t, n) {
    (0, er.Hc)(e);
    let l = await (0, er.vX)(e, t);
    (0, er.dv)(e, n, [l]);
}
function eh(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, et.Oq)(e.size, t)
        ? null
        : em.intl.formatToPlainString(ec.default.ThxcOX, { size: (0, et.sM)((0, et.Ju)(t)) });
}
async function ep(e, t) {
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
        a = await (0, er.cS)(e, l);
    await ed(a, l);
}
function eg(e) {
    let t = s.useRef(null),
        n = s.useCallback(
            (t) => {
                let n = t.target.files?.[0] ?? null;
                ((t.target.value = ""), null != n && e(n));
            },
            [e],
        );
    return {
        open: () => t.current?.click(),
        input: (0, r.jsx)("input", {
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
var ex = n(950305),
    eb = n(664121);
let ev = [
    { value: "user", icon: ex.UserIcon, nameMessage: ec.default.s1TsXl },
    { value: "guild", icon: eb.R, nameMessage: ec.default.LlLIJw },
];
function ey(e) {
    let { importing: t, onImport: n } = e,
        l = s.useRef(null),
        a = eg(s.useCallback((e) => n(e, "user"), [n])),
        i = eg(s.useCallback((e) => n(e, "guild"), [n])),
        o = { user: a.open, guild: i.open };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(en.Y, {
                targetElementRef: l,
                position: "bottom",
                align: "right",
                animation: en.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsx)(el.W, {
                        "data-menu-migrated": !0,
                        navId: "conjure-import-scope",
                        "aria-label": em.intl.string(ec.default.soVyD1),
                        onClose: t,
                        onSelect: t,
                        children: (0, r.jsx)(ea.rX, {
                            label: em.intl.string(ec.default.NyVn6T),
                            children: ev
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: em.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, r.jsx)(
                                        ea.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: o[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, n) => {
                    let { isShown: a } = n;
                    return (0, r.jsx)(S.$, {
                        ...e,
                        buttonRef: l,
                        variant: "secondary",
                        size: "sm",
                        icon: ei.H,
                        text: em.intl.string(ec.default.NJGZA3),
                        loading: t,
                        disabled: t,
                        "aria-haspopup": "menu",
                        "aria-expanded": a,
                    });
                },
            }),
            a.input,
            i.input,
        ],
    });
}
var ej = n(652215),
    ew = n(746080),
    ek = n(58703),
    eC = n(757704),
    eA = n(192308);
function eN() {
    (0, eA.openModalLazy)(
        async () => {
            let { default: e } = await n.e("492663").then(n.bind(n, 839914));
            return (t) => (0, r.jsx)(e, { ...t });
        },
        { modalKey: "conjure-changelog" },
    );
}
var eS = n(335520);
function eE() {
    let e = (0, eC.Kk)("desktop");
    if (0 === e.length) return null;
    let t = em.intl.string(ec.default.bTBUeX);
    return (0, r.jsxs)("section", {
        className: eS.rN,
        "aria-label": t,
        children: [
            (0, r.jsxs)("div", {
                className: eS.bZ,
                children: [
                    (0, r.jsx)(w.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                    (0, r.jsx)(w.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: em.intl.string(ec.default["ZM/VB/"]),
                    }),
                ],
            }),
            (0, r.jsx)("ol", {
                className: eS.V,
                children: e.map((e) =>
                    (0, r.jsxs)(
                        "li",
                        {
                            className: eS.S3,
                            children: [
                                (0, r.jsxs)(w.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: eS.VO,
                                    children: [
                                        (0, ek.i$)(c()(e.date, "YYYY-MM-DD"), "LL"),
                                        (0, eC.t9)(e) ? ` \xb7 ${em.intl.string(ec.default.cW5XHD)}` : null,
                                    ],
                                }),
                                (0, r.jsx)(w.E, {
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
            (0, eC.ug)("desktop")
                ? (0, r.jsx)(S.$, {
                      variant: "secondary",
                      size: "sm",
                      text: em.intl.string(ec.default.EwU5zF),
                      onClick: eN,
                  })
                : null,
        ],
    });
}
var eI = n(404373),
    eT = n(639519),
    eP = n(361504);
function eM(e) {
    let { idea: t, installScope: n, submitting: l } = e;
    return l ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
}
var e_ = n(371169),
    eR = n(260498);
function eL(e) {
    let { className: t, ariaLabel: n, disabled: l, onClick: a, children: i } = e;
    return (0, r.jsx)(k.D, { "aria-disabled": l, "aria-label": n, className: t, onClick: l ? void 0 : a, children: i });
}
var eD = n(865665),
    eO = n(373913);
let eF = { x: 5, y: 7 },
    ez = { x: 5, y: 4 };
function eG(e) {
    let { listClassName: t, radius: n, children: l } = e,
        [a, i] = s.useState(!1);
    return (0, r.jsxs)("div", {
        className: eO.n,
        onMouseEnter: () => i(!0),
        onMouseLeave: () => i(!1),
        children: [
            (0, r.jsx)("ol", { className: t, children: l }),
            a ? (0, r.jsx)(eD.C, { area: 64, radius: n, color: z.A.colors.TEXT_BRAND }) : null,
        ],
    });
}
var eU = n(864970),
    eq = n(707554),
    e$ = n(770178),
    eB = n(765548),
    eH = n(595528),
    eV = n(885576),
    eW = n(662429);
let eK = "heading-xxl/semibold",
    eX = !1;
function eY() {
    let e = s.useRef(null),
        [t, n] = s.useState(!0),
        l = (0, eB.A)((e) => {
            n(e.target.clientWidth >= 500);
        }),
        a = (0, e$.w)(l, [], { fireOnMount: !0 }),
        i = (0, f.bG)([eH.A], () => eH.A.isConnected());
    s.useEffect(() => {
        if (!i || !t || eX) return;
        let n = !1,
            l = 0;
        function a() {
            n ||
                (l = window.setTimeout(() => {
                    ((eX = !0), e.current?.play());
                }, 400));
        }
        let r = document.fonts;
        return (
            null == r ? a() : r.load("16px 'AI Visual Identity Glyphs'", "123456789ABC").then(a, a),
            () => {
                ((n = !0), window.clearTimeout(l));
            }
        );
    }, [i, t]);
    let o = (0, f.bG)([eV.A], () => eV.A.isIdle()),
        u = s.useRef(o);
    s.useEffect(() => {
        let t = u.current && !o;
        ((u.current = o), t && eX && (e.current?.stop(), e.current?.play()));
    }, [o]);
    let d = em.intl.string(ec.default["+5XyCR"]);
    return (0, r.jsx)("div", {
        ref: a,
        className: eW.x,
        children: t
            ? (0, r.jsx)(eq.H, { children: (0, r.jsx)(eU.o, { ref: e, text: d, variant: eK, delay: null }) })
            : (0, r.jsx)(P.D, { variant: eK, children: d }),
    });
}
var eJ = n(548118);
let eQ = "user",
    eZ = Object.freeze({ x: 0.5, y: 0.5 });
function e0(e) {
    return "" !== e.trim();
}
function e2(e) {
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
function e1(e) {
    let { kind: t, name: n } = e2(e);
    return [t, n].filter((e) => "" !== e).join(" ");
}
function e6(e) {
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
let e9 = "[vibegrations:selected] ",
    e3 = " \u2014 ";
function e5(e) {
    if (!e.startsWith(e9)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        a = n.slice(e9.length),
        i = a.indexOf(e3),
        r = (-1 === i ? a : a.slice(0, i)).trim();
    return "" === r ? null : { label: r, body: l };
}
let e4 = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    e7 = new Map(),
    e8 = new Set();
function te(e) {
    return e7.get(e) ?? e4;
}
function tt(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? e7.set(e, t) : e7.delete(e), [...e8]))
        try {
            n();
        } catch (e) {
            console.error("[vibegrations] design feedback subscriber threw", e);
        }
}
function tn(e) {
    e7.has(e) && tt(e, e4);
}
function tl(e, t) {
    let n = te(e);
    n.active && tt(e, { ...n, context: t });
}
function ta(e, t) {
    return null != t && e.authorId === t;
}
function ti(e) {
    return (
        e8.add(e),
        () => {
            e8.delete(e);
        }
    );
}
function tr(e) {
    let t = s.useCallback(() => (null == e ? e4 : te(e)), [e]);
    return s.useSyncExternalStore(ti, t, t);
}
var ts = n(855793),
    to = n(128761),
    tu = n(967008),
    td = n(900797),
    tc = n(320448),
    tm = n(783977),
    tf = n(344587),
    th = n(534554),
    tp = n(837984),
    tg = n(359589),
    tx = n(254575);
function tb(e) {
    let [t, n] = s.useState(e),
        [l, a] = s.useState(!1),
        [i, r] = s.useState(e);
    return (
        i !== e && (r(e), e ? n(!0) : a(!1)),
        s.useEffect(() => {
            if (e || !t) return;
            let l = setTimeout(() => n(!1), 150);
            return () => clearTimeout(l);
        }, [e, t]),
        s.useEffect(() => {
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
function tv(e) {
    let { settings: t, tiers: n, choices: l, disabled: a, onChange: i, placement: o, open: d, entered: c } = e,
        [m, f] = s.useState(!1),
        h = tb(m),
        p = et.PY.indexOf(t.tier),
        g = m ? td.t : tc._,
        x = et.PY.map(th.D0),
        b = (0, th.Tc)(t.tier),
        { text: v, phase: y } = (0, tf.Q)(b);
    return (0, r.jsx)("div", {
        className: tx.qd,
        "data-placement": o ?? void 0,
        children: (0, r.jsxs)("div", {
            className: u()(tx.t$, { [tx.Zr]: d && c, [tx.GF]: !d }),
            role: "dialog",
            "aria-label": em.intl.string(ec.default["3E7Yc0"]),
            children: [
                h.mounted
                    ? (0, r.jsx)("div", {
                          className: u()(tx.Nr, tx.uO, { [tx.Zr]: m && h.entered, [tx.GF]: !m }),
                          children: (0, r.jsx)(tg.bR, { settings: t, tiers: n, choices: l, disabled: a, onChange: i }),
                      })
                    : null,
                (0, r.jsxs)("div", {
                    className: `${tx.Nr} ${tx.rF}`,
                    children: [
                        (0, r.jsxs)("div", {
                            className: tx.wx,
                            children: [
                                (0, r.jsxs)("button", {
                                    type: "button",
                                    className: tx.y6,
                                    "aria-expanded": m,
                                    "aria-label": em.intl.string(ec.default.eGqPbV),
                                    onClick: () => f((e) => !e),
                                    children: [
                                        (0, r.jsx)(w.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: em.intl.string(ec.default.aBPQxX),
                                        }),
                                        (0, r.jsx)(g, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: tx.vg,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(w.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: u()(tx.Z, { [tx.xQ]: "exit" === y, [tx.lm]: "enter" === y }),
                                    children: v,
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: tx.hs,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: tx.Nb,
                                    children: [
                                        (0, r.jsx)(w.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: em.intl.string(ec.default["/tlOR5"]),
                                        }),
                                        (0, r.jsx)(w.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: em.intl.string(ec.default.FxoUwB),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(tp.A, {
                                    activeIndex: p,
                                    stops: x,
                                    ariaLabel: em.intl.string(ec.default.aBPQxX),
                                    disabled: a,
                                    onSelect: function (e) {
                                        let n = et.PY[e];
                                        null != n && n !== t.tier && i((0, th.CM)((0, th.j6)(t, n)));
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
function ty(e) {
    let { settings: t, tiers: n, choices: l, disabled: a, onChange: i, className: o, icon: u } = e,
        d = s.useRef(null),
        [c, m] = (0, tg.FT)(t, i),
        [f, h] = s.useState(!1),
        { mounted: p, entered: g } = tb(f);
    return (0, r.jsx)(en.Y, {
        targetElementRef: d,
        position: "top",
        align: "right",
        shouldShow: p,
        onRequestClose: () => h(!1),
        animation: en.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, r.jsx)(tv, {
                settings: c,
                tiers: n ?? null,
                choices: l,
                disabled: a,
                onChange: m,
                placement: t,
                open: f,
                entered: g,
            });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, r.jsx)(C.m, {
                text: em.intl.string(ec.default["k2JN/p"]),
                shouldShow: !n,
                ariaHidden: !0,
                children: (0, r.jsx)(k.D, {
                    innerRef: d,
                    className: o ?? tx.hZ,
                    "aria-label": em.intl.string(ec.default["k2JN/p"]),
                    ...e,
                    onClick: () => h((e) => !e),
                    "aria-expanded": f,
                    children: u ?? (0, r.jsx)(tm.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
var tj = n(111534),
    tw = n(573083),
    tk = n(855859),
    tC = n(238490),
    tA = n(598748),
    tN = n(294323),
    tS = n(25451),
    tE = n(280450),
    tI = n(86147),
    tT = n(729475),
    tP = n(91242),
    tM = n(869146),
    t_ = n(475815),
    tR = n(621466);
function tL(e) {
    return null == e ? null : document.querySelector(`[data-frame-id="${CSS.escape(e)}"]`);
}
function tD(e) {
    let t;
    return (
        null != e &&
        ((t =
            document.fullscreenElement ??
            document.webkitFullscreenElement ??
            document.mozFullScreenElement ??
            document.msFullscreenElement ??
            null),
        ((0, tR.vq)(t, Element) ? t.getAttribute("data-frame-id") : null) === e)
    );
}
function tO(e) {
    return (0, t_.a3)(document, e);
}
function tF(e) {
    return s.useSyncExternalStore(tO, () => tD(e));
}
var tz = n(165610);
function tG(e) {
    let { frame: t, controlProjectId: n } = e,
        l = tF(t?.id ?? null),
        a = (0, tw.Zv)(n),
        i = (0, f.bG)(
            [tM.A, tP.A],
            () => null != t && tM.A.getWindowOpen(ej.MLl.ACTIVITY_POPOUT) && tP.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, tz.x1)(t) || i || a) return null;
    let s = tL(t.id);
    if (null == s || !(0, t_.Ub)(s)) return null;
    let o = em.intl.string(l ? em.t.Z7MyNB : em.t.OIDkcp);
    return (0, r.jsx)(W.A.Icon, {
        tooltip: o,
        icon: l ? tI.z : tT.T,
        "aria-label": o,
        role: "switch",
        "aria-checked": l,
        selected: l,
        onClick: () => {
            var e;
            let n;
            null != (n = tL((e = t.id))) && (0, t_.Ub)(n) && (tD(e) ? (0, t_.sP)(n) : (0, t_.tl)(n));
        },
    });
}
var tU = n(629584),
    tq = n(696645),
    t$ = n(861899);
function tB(e) {
    let { modes: t, mode: n, onChange: l, className: a } = e,
        i = s.useMemo(() => t.map((e) => ({ value: e, name: (0, tq.kZ)(e), "aria-controls": (0, tq.z3)(e) })), [t]),
        o = s.useCallback(
            (e) => {
                l(e.value);
            },
            [l],
        );
    return null == n
        ? null
        : (0, r.jsx)(tU.I, {
              role: "tablist",
              look: "pill",
              className: u()(t$.b, a),
              optionClassName: t$.u,
              options: i,
              value: n,
              onChange: o,
          });
}
var tH = n(226178),
    tV = n(434279),
    tW = n(287809),
    tK = n(427262),
    tX = n(245179),
    tY = n(803306);
let tJ = new Set(),
    tQ = new Map();
function tZ(e, t, n) {
    return null == e ? (n ?? null) : (t ?? null);
}
function t0(e) {
    if (null == e || tJ.has(e) || null != tW.default.getUser(e)) return;
    let t = tQ.get(e) ?? 0;
    t >= 3 ||
        (tQ.set(e, t + 1),
        tJ.add(e),
        tY
            .wz(e)
            .finally(() => tJ.delete(e))
            .catch(() => {}));
}
var t2 = n(16619),
    t1 = n(782603),
    t6 = n(780338),
    t9 = n(663417),
    t3 = n(70688),
    t5 = n(173936),
    t4 = n(473935),
    t7 = n(408278),
    t8 = n(365199),
    ne = n(7437),
    nt = n(147036),
    nn = n(957565),
    nl = n(785389),
    na = n(123917);
let ni = new Set();
var nr = n(616334),
    ns = n(189714),
    no = n(552821);
let nu = [];
function nd(e) {
    (0, v.P)((0, y.o)(e, j.Ck.FAILURE));
}
function nc(e) {
    let {
            projectId: t,
            projectName: n,
            guildId: l,
            projectGuildId: a,
            isOwner: i,
            canRemix: o,
            onExport: u,
            onImport: d,
            onRemix: c,
            onConnectTool: m,
            onHistory: p,
            onRefresh: g,
            isRefreshing: x = !1,
            onClose: b,
            refreshApplicationId: w,
            previewProjectId: k,
            onCloseMenu: C,
        } = e,
        A = (0, ns.iI)(t),
        { pending: N, refresh: S } = (0, ne.A)(w ?? null),
        { pending: E, connect: I } = (function (e, t) {
            let [n, l] = s.useState(ni),
                a = s.useRef(ni),
                i = s.useCallback((e) => {
                    ((a.current = (0, nl.Q6)(a.current, e)), l(a.current));
                }, []);
            return {
                pending: n,
                connect: s.useCallback(
                    (n) => {
                        if (null == e) return;
                        let r = (0, nl.K9)(a.current, n.type);
                        async function s() {
                            let l = await (0, er.JI)(e, n.type);
                            (i(n.type), "url" === l.type)
                                ? (0, na.h)({ href: l.url, trusted: !1 })
                                : t(
                                      "setup" === (0, nl.rq)(l.error)
                                          ? em.intl.string(ec.default["jCQ/1B"])
                                          : em.intl.string(ec.default.POxkSh),
                                  );
                        }
                        null != r && ((a.current = r), l(r), s().catch(() => i(n.type)));
                    },
                    [t, e, i],
                ),
            };
        })(k ?? null, nd),
        P = (0, f.bG)([er.Ay], () => (null == k ? nu : er.Ay.getDeclaredConnections(k))),
        M = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: l, connectPending: a } = e,
                i = [];
            for (let { connection: e, offer: r } of (t &&
                i.push({
                    id: "preview-refresh",
                    label: em.intl.string(ec.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            l))
                i.push(
                    "authorize" === r
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: em.intl.formatToPlainString(ec.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: a.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: em.intl.formatToPlainString(ec.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return i;
        })({
            canRefresh: null != w,
            refreshPending: N,
            offers: s.useMemo(() => (0, nl.Xl)(P), [P]),
            connectPending: E,
        }),
        _ = s.useMemo(() => new Map(P.map((e) => [e.type, e])), [P]),
        R = null != c && o,
        L = i && null != d,
        D = R || null != u || L || null != m || null != p,
        O = nn.p5 && null != l,
        F = nn.p5,
        z = A ? t1.BellIcon : t6.BellSlashIcon;
    return (0, r.jsxs)(el.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": em.intl.string(em.t.ogxXGq),
        onClose: C,
        onSelect: C,
        children: [
            null != g || null != b
                ? (0, r.jsxs)(ea.rX, {
                      children: [
                          null != g
                              ? (0, r.jsx)(ea.Dr, {
                                    id: "refresh",
                                    icon: t9.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: t9.RefreshIcon },
                                    label: em.intl.string(ec.default["p4B/7M"]),
                                    disabled: x,
                                    action: g,
                                })
                              : null,
                          null != b
                              ? (0, r.jsx)(ea.Dr, {
                                    id: "close",
                                    icon: t3.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: t3.DoorExitIcon },
                                    label: em.intl.string(ec.default["/TlGcK"]),
                                    action: b,
                                })
                              : null,
                      ],
                  })
                : null,
            M.length > 0
                ? (0, r.jsx)(ea.rX, {
                      children: M.map((e) =>
                          (0, r.jsx)(
                              ea.Dr,
                              {
                                  id: e.id,
                                  label: e.label,
                                  disabled: e.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === e.kind) return void S();
                                      let t = null == e.connectionType ? null : _.get(e.connectionType);
                                      null != t && I(t);
                                  },
                              },
                              e.id,
                          ),
                      ),
                  })
                : null,
            (0, r.jsx)(ea.rX, {
                children: (0, r.jsx)(ea.Dr, {
                    id: "mute",
                    label: em.intl.string(A ? ec.default.s9rCuH : ec.default["a+i/As"]),
                    icon: z,
                    leadingAccessory: { type: "icon", icon: z },
                    action: () => (0, ns.$L)(t, !A),
                }),
            }),
            D
                ? (0, r.jsxs)(ea.rX, {
                      children: [
                          R
                              ? (0, r.jsx)(ea.Dr, { id: "remix", label: em.intl.string(ec.default.XWgAfc), action: c })
                              : null,
                          null != u
                              ? (0, r.jsx)(ea.Dr, { id: "export", label: em.intl.string(ec.default.WsEEP7), action: u })
                              : null,
                          L
                              ? (0, r.jsx)(ea.Dr, { id: "import", label: em.intl.string(ec.default.rWGY3e), action: d })
                              : null,
                          null != m
                              ? (0, r.jsx)(ea.Dr, {
                                    id: "connect-tool",
                                    label: em.intl.string(ec.default.yOIql5),
                                    action: m,
                                })
                              : null,
                          null != p
                              ? (0, r.jsx)(ea.Dr, {
                                    id: "history",
                                    label: em.intl.string(ec.default["3hIVou"]),
                                    action: p,
                                })
                              : null,
                      ],
                  })
                : null,
            F
                ? (0, r.jsxs)(ea.rX, {
                      children: [
                          O
                              ? (0, r.jsx)(ea.Dr, {
                                    id: "copy-link",
                                    label: em.intl.string(em.t.WqhZss),
                                    icon: t5.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: t5.LinkIcon },
                                    action: () =>
                                        (0, nn.C)((0, nt.n)(l, ew.VV.CONJURE, t), () =>
                                            (0, v.P)((0, y.o)(em.intl.string(em.t["L/PwZf"]), j.Ck.SUCCESS)),
                                        ),
                                })
                              : null,
                          (0, r.jsx)(ea.Dr, {
                              id: "copy-project-id",
                              label: em.intl.string(ec.default["nm/zuU"]),
                              icon: t4.L,
                              leadingAccessory: { type: "icon", icon: t4.L },
                              action: () =>
                                  (0, nn.C)(t, () =>
                                      (0, v.P)((0, y.o)(em.intl.string(ec.default.CmfaZG), j.Ck.SUCCESS)),
                                  ),
                          }),
                      ],
                  })
                : null,
            i
                ? (0, r.jsxs)(ea.rX, {
                      children: [
                          (0, r.jsx)(ea.Dr, {
                              id: "settings",
                              label: em.intl.string(ec.default.FzfmQ8),
                              icon: T.SettingsIcon,
                              leadingAccessory: { type: "icon", icon: T.SettingsIcon },
                              action: () => (0, nr.A)(t, { guildId: a ?? l, initialTab: "project", isPreview: !0 }),
                          }),
                          (0, r.jsx)(ea.Dr, {
                              id: "delete",
                              label: em.intl.string(em.t.oyYWHE),
                              color: "danger",
                              action: () => {
                                  (0, h.A)({
                                      title: em.intl.formatToPlainString(ec.default.CJBhb2, { name: n }),
                                      subtitle: em.intl.string(ec.default["0OmrVn"]),
                                      confirmText: em.intl.string(em.t.oyYWHE),
                                      variant: "critical",
                                      onConfirm: () => {
                                          (0, e_.K)(t, () =>
                                              (0, v.P)((0, y.o)(em.intl.string(ec.default["0XDHob"]), j.Ck.FAILURE)),
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
function nm(e) {
    let { trigger: t = "header", ...n } = e,
        l = s.useRef(null);
    return (0, r.jsx)(en.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: en.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(nc, { ...n, onCloseMenu: t });
        },
        children: (e, n) => {
            let { onClick: a } = e,
                { isShown: i } = n;
            return (0, r.jsx)("div", {
                ref: l,
                className: no.h,
                children:
                    "iconButton" === t
                        ? (0, r.jsx)(C.m, {
                              text: em.intl.string(em.t["UKOtz+"]),
                              children: (0, r.jsx)(t7.K, {
                                  icon: t8.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": em.intl.string(em.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": i,
                                  onClick: a,
                              }),
                          })
                        : (0, r.jsx)(W.A.Icon, {
                              icon: t8.MoreHorizontalIcon,
                              tooltip: em.intl.string(em.t["UKOtz+"]),
                              "aria-label": em.intl.string(em.t["UKOtz+"]),
                              "aria-haspopup": "menu",
                              "aria-expanded": i,
                              selected: i,
                              onClick: a,
                          }),
            });
        },
    });
}
var nf = n(845079),
    nh = n(104171),
    np = n(286739);
function ng(e) {
    let { creator: t, className: n } = e;
    return (0, r.jsx)("div", {
        className: u()(np.c, n),
        "aria-hidden": !0,
        children: (0, r.jsx)(nh.Ay, { users: [t.creator, ...t.collaborators], max: 3, size: nh.DN.SIZE_16 }),
    });
}
var nx = n(580954),
    nb = n(246338);
let nv = "user",
    ny = "no-server",
    nj = new Map();
function nw(e) {
    return nj.get(e) ?? null;
}
function nk(e) {
    switch (e) {
        case "all":
        case nv:
        case ny:
            return null;
        default:
            return e;
    }
}
function nC(e, t) {
    switch (t) {
        case "all":
            return !0;
        case nv:
            return "user" === e.install_scope;
        case ny:
            return null == (0, tV.wu)(e);
        default:
            return e.guild_id === t || e.preview_guild_id === t;
    }
}
var nA = n(506774);
let nN = "VibegrationsProjectsPanelOpen";
function nS() {
    return nA.w.get(nN) ?? null;
}
function nE(e) {
    return `VibegrationsProjectsPanel:${e}`;
}
function nI(e, t, n) {
    return t?.integration_installed === !0 && e?.guild_id != null ? e.guild_id : n;
}
async function nT(e, t) {
    (e.guild_id !== t || e.preview_guild_id !== t) && (await (0, e_.M7)(e.id, { guild_id: t, preview_guild_id: t }));
}
var nP = n(73153),
    nM = n(587895),
    n_ = n(321191),
    nR = n(808728),
    nL = n(385081),
    nD = n(645070);
function nO(e) {
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
                                    update: em.intl.string(ec.default.JpDnbE),
                                    open: em.intl.string(ec.default.NNIwRu),
                                    destination: "dm",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "activity":
                                return {
                                    update: em.intl.string(ec.default.QesMDC),
                                    open: em.intl.string(ec.default.iyQTsb),
                                    destination: "launch",
                                    navigatesOnFirstPublish: !1,
                                    navigatesOnUpdate: !1,
                                };
                            case "widget":
                                return {
                                    update: em.intl.string(ec.default["LUi/55"]),
                                    open: em.intl.string(ec.default.TXUK1g),
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
                        let l = em.intl.formatToPlainString(ec.default.fTgw6C, { server: t });
                        switch (e) {
                            case "bot":
                                return {
                                    update: em.intl.string(ec.default.JpDnbE),
                                    open: l,
                                    destination: "guild",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "activity":
                                return {
                                    update: em.intl.string(ec.default.QesMDC),
                                    open:
                                        null == n ? l : em.intl.formatToPlainString(ec.default.l9xGQD, { channel: n }),
                                    destination: "channel",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "automod":
                                return {
                                    update: em.intl.string(ec.default.bwBMMn),
                                    open: em.intl.string(ec.default.KjbLum),
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
                ? em.intl.formatToPlainString(ec.default["4sqXfg"], o)
                : r
                  ? em.intl.formatToPlainString(ec.default.N4NkyR, o)
                  : s
                    ? em.intl.formatToPlainString(ec.default.PxtHIV, o)
                    : null;
        })(e),
        d = (0, tC.Qg)({
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
            label: em.intl.string(ec.default["tUeY/h"]),
            action: "review_permissions",
            navigatesOnPublish: f,
        };
    let h = s?.update ?? em.intl.string(ec.default.QesMDC);
    return { ...m, label: c ? h : em.intl.string(ec.default["120EFN"]), action: "publish", navigatesOnPublish: f };
}
var nF = (((l = {}).NO_PREVIEW = "no-preview"), (l.PERMISSIONS = "permissions"), l),
    nz = n(308528),
    nG = n(345942);
let nU = s.createContext(null);
function nq(e) {
    return nM.A.getApplication(e.application_id)?.bot?.id ?? e.application_id;
}
function n$(e, t) {
    let n = eR.Ay.getProject(e);
    if (null == n) return null;
    let l = "user" === n.install_scope ? null : (n.guild_id ?? t),
        a = null == l ? null : (0, nb.i8)(l, n.application_id),
        i = null == l ? null : Z.A.getGuild(l);
    return {
        project: n,
        guildId: l,
        appChannelId: a,
        input: {
            installScope: n.install_scope,
            status: eR.Ay.getPublishStatus(e),
            integrationStatus: eR.Ay.getIntegrationStatus(e),
            guildName: i?.name ?? null,
            appChannelName: null == a ? null : (J.A.getChannel(a)?.name ?? null),
            appChannelPending: eR.Ay.isAppChannelPending(e),
            canManageGuild: null == i ? null : ee.A.can(ej.xBc.MANAGE_GUILD, i),
            canManageChannels: null == i ? null : ee.A.can(ej.xBc.MANAGE_CHANNELS, i),
            usesNativeAppChannels: (0, et.KQ)(n),
            botInGuild: (function (e, t) {
                if (null == t) return null;
                let n = n_.A.getMutualGuilds(nq(e));
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
function nB(e, t, n) {
    return (function (e, t) {
        let n,
            { applicationId: l, guildId: a, appChannelId: i, openProfile: r, openAutomodSettings: s } = t;
        switch (e) {
            case "launch":
                if ((0, tS.X)(nM.A.getApplication(l)))
                    return (B.A.launchFrame({ applicationId: l, surface: tz.sd }).catch(() => {}), Promise.resolve());
                break;
            case "profile": {
                let e = tW.default.getCurrentUser()?.id;
                if (null != e) return (r(e), Promise.resolve());
                break;
            }
            case "channel":
                if (null != a && null != i) return ((0, K.pX)(ej.BVt.CHANNEL(a, i)), Promise.resolve());
                break;
            case "automod":
                if (null != a && null != s) return (s(a), Promise.resolve());
        }
        if ("dm" !== e && null != a) {
            let e;
            return (
                null != (e = nR.Ay.getDefaultChannel(a)?.id) ? (0, K.pX)(ej.BVt.CHANNEL(a, e)) : (0, nG.u)(a),
                Promise.resolve()
            );
        }
        return ((n = nM.A.getApplication(l)?.bot?.id ?? l), nz.A.openPrivateChannel({ recipientIds: n }));
    })(t, {
        applicationId: e.project.application_id,
        guildId: e.guildId,
        appChannelId: e.appChannelId,
        openProfile: n.openProfile,
        openAutomodSettings: n.openAutomodSettings,
    });
}
async function nH(e, t) {
    let n = eR.Ay.getProject(e),
        l = n?.preview_application_id;
    if (null == n || null == l) return;
    let a = nI(n, eR.Ay.getIntegrationStatus(e), t);
    (null == nM.A.getApplication(l) && (await (0, U.TA)(l).catch(() => {})),
        await new Promise((e) => {
            nD.A.openConjureAppInstallModal({
                applicationId: l,
                application: nM.A.getApplication(l) ?? null,
                guildId: a,
                onClose: e,
            });
        }),
        await nT(n, a).catch(() => {}),
        await (0, e_.U1)(e).catch(() => {}));
}
function nV(e, t, n) {
    let { project: l } = e,
        { platform: a, guildId: i } = n,
        r = l.id,
        s = t.navigatesOnPublish ? t.destination : null,
        o = "user" === l.install_scope || null != s ? null : (0, er.$C)(r);
    (o?.catch(() => {}), "channel" === s && nW(r, !0));
    let u = (0, er.TV)(r).then((e) => {
            if (!0 !== e.ok) {
                let t;
                throw Error(
                    null != (t = e.detail?.trim()) && "" !== t
                        ? em.intl.formatToPlainString(ec.default["7ZsIF1"], { reason: t })
                        : em.intl.string(ec.default.gMWZeG),
                );
            }
            return e;
        }),
        d = u.then(
            () =>
                (0, e_.tZ)(r, { isPreview: !1 }).catch((e) => {
                    console.error("[vibegrations] post-publish refresh failed", r, e);
                }),
            () => {},
        );
    if (
        (u.then(
            () => {
                (null != e.guildId && nX(l),
                    null != s &&
                        d
                            .then(() => ("channel" === s ? nK(r, i) : void 0))
                            .finally(() => nW(r, !1))
                            .then(() => nB(n$(r, i) ?? e, s, a))
                            .catch(() => {}));
            },
            (e) => {
                (nW(r, !1), a.showError(e instanceof Error ? e.message : em.intl.string(ec.default.gMWZeG)));
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
    nP.h.dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: e, pending: t });
}
async function nK(e, t) {
    let n = Date.now() + 5e3;
    for (; n$(e, t)?.appChannelId == null && Date.now() < n;) await new Promise((e) => setTimeout(e, 250));
}
function nX(e) {
    (0, tY.eO)(nq(e), { withMutualGuilds: !0 }).catch(() => {});
}
let nY = new Set();
async function nJ(e, t, n) {
    let { guildId: l, platform: a } = n;
    if (!0 === n.busy || nY.has(e)) return;
    let i = n$(e, l);
    if (null == i || eR.Ay.isProjectPublishing(e)) return;
    let r = nO(i.input);
    if (null != r) {
        if (
            ((0, nL.yJ)(e, {
                entryPoint: t,
                publishState: i.input.status?.state ?? null,
                surface: i.input.status?.surface ?? null,
                installScope: i.project.install_scope,
                action: r.action,
            }),
            "open" === r.intent)
        ) {
            null != r.destination && nB(i, r.destination, a).catch(() => {});
            return;
        }
        if (null == r.disabledReason) {
            if (i.input.integrationStatus?.preview_ready !== !0) return void a.showPublishBlocked(nF.NO_PREVIEW);
            if ("consent_then_publish" === r.intent) {
                nY.add(e);
                try {
                    await (a.requestConsent ?? ((e) => nH(e, l)))(e);
                } finally {
                    nY.delete(e);
                }
                if (eR.Ay.isProjectPublishing(e)) return;
                let t = n$(e, l),
                    i = t?.input.integrationStatus ?? null;
                if (
                    null == t ||
                    (0, tC.Qg)({
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
    let n = s.useContext(nU),
        l = t ?? n,
        a = l?.guildId ?? null,
        {
            canPublish: i,
            publishing: r,
            project: o,
            guildId: u,
            appChannelId: d,
            installScope: c,
            status: m,
            integrationStatus: h,
            guildName: p,
            appChannelName: g,
            appChannelPending: x,
            canManageGuild: b,
            canManageChannels: v,
            usesNativeAppChannels: y,
            botInGuild: j,
        } = (0, f.cf)(
            [eR.Ay, Z.A, nR.Ay, J.A, ee.A, n_.A, nM.A],
            () => {
                let t = null == e || null == a ? null : n$(e, a);
                return {
                    canPublish: null != t && (0, eR.jf)(t.project),
                    project: t?.project ?? null,
                    guildId: t?.guildId ?? null,
                    appChannelId: t?.appChannelId ?? null,
                    publishing: null != e && eR.Ay.isProjectPublishing(e),
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
        w = s.useMemo(
            () =>
                null == o
                    ? null
                    : {
                          installScope: c,
                          status: m,
                          integrationStatus: h,
                          guildName: p,
                          appChannelName: g,
                          appChannelPending: x,
                          canManageGuild: b,
                          canManageChannels: v,
                          usesNativeAppChannels: y,
                          botInGuild: j,
                      },
            [o, c, m, h, p, g, x, b, v, y, j],
        ),
        k = w?.status?.state ?? null,
        C = w?.installScope === "guild" && w.status?.surface === "bot";
    s.useEffect(() => {
        null != o && null != u && C && null != k && "unpublished" !== k && nX(o);
    }, [o?.id, u, C, k]);
    let A = s.useMemo(() => (null == w ? null : nO(w)), [w]),
        N = s.useCallback(
            (t) => {
                null != e &&
                    null != l &&
                    nJ(e, t, l).catch((t) => {
                        console.error("[vibegrations] publish action failed", e, t);
                    });
            },
            [e, l],
        );
    return null != l && i && null != A
        ? {
              ...A,
              status: w?.status ?? null,
              guildId: u,
              appChannelId: d,
              publishing: r,
              disabled: r || !0 === l.busy || null != A.disabledReason,
              run: N,
          }
        : null;
}
var nZ = n(189213);
function n0(e) {
    let { reason: t, transitionState: n, onClose: l } = e,
        a = t === nF.PERMISSIONS;
    return (0, r.jsx)(nZ.a, {
        transitionState: n,
        onClose: l,
        title: em.intl.string(a ? ec.default.wQ4UyJ : ec.default.ZNGLFE),
        subtitle: em.intl.string(a ? ec.default.Agqmbt : ec.default.ffxKGK),
        size: "sm",
        actions: [{ text: em.intl.string(a ? em.t.BddRzS : ec.default["/omTNx"]), variant: "primary", onClick: l }],
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
    return !(0, tX.BL)(e) && !0 !== e.stopRequested;
}
var le = n(104317),
    lt = n(643278),
    ln = n(566424),
    ll = n(683063),
    la = n(847374),
    li = n(138212);
function lr(e) {
    let { title: t, trailing: n, children: l, className: a, headerClassName: i, ...s } = e;
    return (0, r.jsxs)("section", {
        className: u()(li.Nr, a),
        ...s,
        children: [
            (0, r.jsxs)("header", {
                className: u()(li.wx, null != n && li.o5, i),
                children: [
                    (0, r.jsx)(w.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
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
    return (0, r.jsx)(w.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function lu(e) {
    let {
            title: t,
            meta: n,
            superseded: l = !1,
            showLabel: a,
            hideLabel: i,
            bodyClassName: o,
            beforeBody: d,
            children: c,
            ...m
        } = e,
        f = s.useId(),
        [h, p] = s.useState(!l),
        [g, x] = s.useState(l);
    g !== l && (x(l), p(!l));
    let b = s.useCallback(() => p((e) => !e), []),
        v = h ? la.a : tc._,
        y = null != n || l;
    return (0, r.jsxs)(lr, {
        ...m,
        title: t,
        trailing: y
            ? (0, r.jsxs)("span", {
                  className: ls.ZY,
                  children: [
                      n,
                      l
                          ? (0, r.jsx)(k.D, {
                                className: ls.L$,
                                onClick: b,
                                "aria-expanded": h,
                                "aria-controls": f,
                                "aria-label": h ? i : a,
                                children: (0, r.jsx)(v, { size: "xs", color: "currentColor" }),
                            })
                          : null,
                  ],
              })
            : void 0,
        headerClassName: h ? void 0 : ls.RG,
        "data-superseded": l ? "true" : void 0,
        children: [d, (0, r.jsx)("div", { id: f, className: u()(ls.rf, o), hidden: !h, children: c })],
    });
}
var ld = n(883646);
let lc = [];
function lm(e) {
    let { status: t } = e;
    return (0, r.jsxs)("span", {
        className: u()(ld.xL, {
            [ld.Vb]: "in_progress" === t,
            [ld.cT]: "completed" === t,
            [ld.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return em.intl.string(ec.default.KvBdun);
                case "in_progress":
                    return em.intl.string(ec.default["m5G9+S"]);
                case "unfinished":
                    return em.intl.string(ec.default.lRpwhD);
                default:
                    return em.intl.string(ec.default.sPGeWi);
            }
        })(t),
        children: [
            (0, r.jsx)(N.y, {
                type: N.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: ld.Qd,
                itemClassName: ld.xB,
                "aria-hidden": !0,
            }),
            (0, r.jsx)("svg", {
                className: ld.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, r.jsx)("path", { className: ld.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function lf(e) {
    let { agents: t, active: n } = e,
        l = s.useMemo(() => (n ? t : lc), [n, t]),
        a = s.useMemo(() => new Set(l.map((e) => e.key)), [l]),
        i = l.map((e) => e.key).join("\0"),
        [o, u] = s.useState(l),
        [d, c] = s.useState(i),
        [m, f] = s.useState(!1);
    d !== i && (c(i), u([...l, ...o.filter((e) => !a.has(e.key))]), 0 === l.length && f(!1));
    let h = o.some((e) => !a.has(e.key));
    if (
        (s.useEffect(() => {
            if (!h) return;
            let e = setTimeout(() => u(l), n ? 200 : 250);
            return () => clearTimeout(e);
        }, [h, l, n]),
        s.useEffect(() => {
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
    return (0, r.jsxs)("span", {
        className: ld.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            p.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, r.jsx)(
                    ll.u,
                    {
                        asset: (0, r.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, r.jsx)("span", {
                            className: ld.MA,
                            "data-leaving": a.has(t) ? void 0 : "true",
                            children: (0, r.jsx)(s, { size: 16, alt: l, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            g > 0
                ? (0, r.jsx)(w.E, {
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
        { todos: n, provisional: l, agents: a, live: i = !0 } = e,
        o = (function (e) {
            let t = e.join("\0"),
                [n, l] = s.useState(() => new Set(e)),
                [a, i] = s.useState(t),
                [r, o] = s.useState(() => new Set());
            return (
                a !== t && (i(t), l(new Set(e)), o(0 === n.size ? new Set() : new Set(e.filter((e) => !n.has(e))))),
                s.useEffect(() => {
                    if (0 === r.size) return;
                    let e = 0,
                        t = requestAnimationFrame(() => {
                            e = requestAnimationFrame(() => o(new Set()));
                        });
                    return () => {
                        (cancelAnimationFrame(t), cancelAnimationFrame(e));
                    };
                }, [r]),
                r
            );
        })(s.useMemo(() => n.map((e) => e.id), [n])),
        d =
            ((t = (a ?? lc).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            s.useMemo(() => {
                let e = new Map();
                for (let t of a ?? lc) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let n = e.get(t.todoId);
                    null != n ? n.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, r.jsxs)("ul", {
        className: ld.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || i ? t : "unfinished");
                return (0, r.jsxs)(
                    "li",
                    {
                        className: u()(ld.AS, { [ld.J1]: "completed" === n }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, r.jsx)(lm, { status: n }),
                            (0, r.jsx)(w.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: ld.iV,
                                selectable: !0,
                                children: (0, r.jsx)("span", {
                                    className: ld.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, r.jsx)(lf, { agents: d.get(e.id) ?? lc, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, r.jsxs)("li", {
                      className: ld.AS,
                      "data-provisional": !0,
                      children: [
                          (0, r.jsx)(lm, { status: "pending" }),
                          (0, r.jsx)(w.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: ld.iV,
                              selectable: !0,
                              children: (0, r.jsx)("span", { className: ld.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function lp(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: a = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let d = em.intl.formatToPlainString(ec.default["P/I+JW"], { completed: o, total: u }),
        c = em.intl.formatToPlainString(ec.default["7tzwKB"], { completed: o, total: u });
    return (0, r.jsx)(lu, {
        title: em.intl.string(ec.default.RtzECX),
        meta: (0, r.jsx)(lo, { children: d }),
        superseded: s,
        showLabel: em.intl.string(ec.default.RKyN9q),
        hideLabel: em.intl.string(ec.default.xydHoj),
        className: ld.Nr,
        bodyClassName: ld.rf,
        beforeBody: a && !s ? (0, r.jsx)(A.A, { role: "status", "aria-live": "polite", children: c }) : null,
        "data-conjure-todo-card": !0,
        children: (0, r.jsx)(lh, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var lg = n(308665),
    lx = n(59678),
    lb = n(903847);
function lv(e) {
    let { line: t, placement: n, todos: l, todosLive: a = !0, provisionalTodo: i, agents: o, onJumpToActivity: d } = e,
        c = null != n,
        [m, f] = s.useState(n ?? "top"),
        [h, p] = s.useState(c),
        [g, x] = s.useState(!1),
        [b, v] = s.useState(!1),
        [y, j] = s.useState(c);
    (y !== c && (j(c), null != n ? (f(n), p(!0)) : (x(!1), v(!1))),
        s.useEffect(() => {
            if (c || !h) return;
            let e = setTimeout(() => p(!1), 150);
            return () => clearTimeout(e);
        }, [c, h]),
        s.useEffect(() => {
            if (!h || !c) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => x(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [h, c]));
    let [w, A] = s.useState(!1),
        [N, S] = s.useState(!1),
        [E, I] = s.useState(b);
    (E !== b && (I(b), b ? A(!0) : S(!1)),
        s.useEffect(() => {
            if (b || !w) return;
            let e = setTimeout(() => A(!1), 150);
            return () => clearTimeout(e);
        }, [b, w]),
        s.useEffect(() => {
            if (!w || !b) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => S(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [w, b]));
    let T = null != l && l.length > 0,
        P = s.useCallback(() => v((e) => !e), []);
    return h
        ? (0, r.jsxs)("div", {
              className: lb.qd,
              "data-placement": m,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, r.jsxs)("div", {
                      className: u()(lb.vK, { [lb.ho]: g && c, [lb.ET]: !c }),
                      children: [
                          null == d
                              ? (0, r.jsx)("ol", {
                                    className: u()(lb.Rk, lx.pj),
                                    "data-live": "true",
                                    children: (0, r.jsx)(ln.A, {
                                        glyph: (0, r.jsx)(lg.Ay, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, r.jsx)(k.D, {
                                    className: lb.pZ,
                                    onClick: d,
                                    "aria-label": em.intl.string(ec.default.hEK6qu),
                                    children: (0, r.jsx)("ol", {
                                        className: u()(lb.Rk, lx.pj),
                                        "data-live": "true",
                                        children: (0, r.jsx)(ln.A, {
                                            glyph: (0, r.jsx)(lg.Ay, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          T
                              ? (0, r.jsx)(C.m, {
                                    text: em.intl.string(ec.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, r.jsx)(k.D, {
                                        className: lb.BO,
                                        onClick: P,
                                        "aria-expanded": b,
                                        "aria-label": em.intl.string(ec.default.RtzECX),
                                        children: (0, r.jsx)(lt.ClipboardListIcon, {
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
                  w && T
                      ? (0, r.jsx)("div", {
                            className: u()(lb.vB, { [lb.pg]: b && N, [lb.ui]: !b }),
                            children: (0, r.jsx)(lp, {
                                todos: l,
                                provisional: i,
                                agents: o,
                                live: a,
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
function lG(e, t) {
    return lz(lF.getState(), e, t);
}
function lU(e, t, n) {
    let { draftsByProject: l } = lF.getState();
    lF.setState({ draftsByProject: { ...l, [e]: { ...l[e], [t]: n } } });
}
function lq(e, t, n, l) {
    let a = lG(e, t);
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
function l$(e, t) {
    (0, er.Vm)(e, t).catch((e) => {
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
    return em.intl.formatToPlainString(ec.default.JZ59Bo, { size: (0, et.sM)((0, et.Ju)(e)) });
}
function lW(e, t) {
    let n = lG(e, t);
    if (0 !== n.length) {
        for (let t of n) lB(e, t);
        lU(e, t, lD);
    }
}
function lK(e, t) {
    let n = lG(e, t);
    if (0 === n.length) return [];
    for (let e of n) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (lU(e, t, lD), n.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function lX(e, t) {
    let { clarificationAnswers: n, attachments: l = [] } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = lG(e, "chat"),
        i = a.length > 0 && a.every((e) => "ready" === e.status) ? lK(e, "chat") : [];
    (0, er.dv)(e, t, [...l, ...i], { clarificationAnswers: n });
}
function lY(e, t) {
    let [n, l] = s.useState(null),
        [a, i] = s.useState(!1),
        [r, o] = s.useState(0);
    return (
        s.useEffect(() => {
            let n = !1;
            return (
                (0, er.PK)(e, t).then(
                    (e) => {
                        n || l(e);
                    },
                    () => {
                        n || (0 === r ? o(1) : i(!0));
                    },
                ),
                () => {
                    n = !0;
                }
            );
        }, [e, t, r]),
        {
            src: n,
            gone: a,
            handleError: s.useCallback(() => {
                (l(null),
                    (0, er.n6)(e, t).then(
                        (e) => {
                            e && 0 === r ? o(1) : i(!0);
                        },
                        () => i(!0),
                    ));
            }, [e, t, r]),
        }
    );
}
(nP.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(lF.getState().draftsByProject)) lH(e, { deleteFromWorker: !0 });
}),
    nP.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        lH(t, { deleteFromWorker: !1 });
    }));
var lJ = n(907702);
function lQ(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: a } = e,
        { src: i, gone: o, handleError: d } = lY(t, n),
        [c, m] = s.useState(null),
        f = null != i && c === i;
    return o
        ? (0, r.jsxs)("span", {
              className: u()(lJ.Gt, lJ.b6),
              children: [
                  (0, r.jsx)(lE.D, { size: "md", color: "currentColor" }),
                  (0, r.jsx)(w.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: em.intl.string(ec.default.lhgD88),
                  }),
              ],
          })
        : (0, r.jsx)("span", {
              className: u()(lJ.Gt, { [lJ.iP]: !f }),
              children:
                  null != i
                      ? (0, r.jsx)("img", {
                            src: i,
                            alt: l,
                            className: lJ.Sl,
                            onLoad: (e) => {
                                m(i);
                                let { naturalWidth: t, naturalHeight: n } = e.currentTarget;
                                t > 0 && n > 0 && a({ width: t, height: n });
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
            option: a,
            multi: i,
            selected: s,
            disabled: o,
            reachable: d,
            tabbable: c,
            onPick: m,
            onView: f,
            onArrow: h,
            onMeasured: p,
            onRemove: g,
        } = e,
        x = em.intl.formatToPlainString(ec.default.JGjZMs, { answer: a.label });
    return (0, r.jsxs)("div", {
        className: u()(lJ.Vs, { [lJ.Q9]: s, [lJ.RX]: o }),
        "data-conjure-clarification-option": a.id,
        children: [
            (0, r.jsxs)(k.D, {
                className: lJ.Up,
                "data-conjure-image-option-pick": !0,
                onClick: o ? void 0 : () => m(a),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), h(a, t));
                },
                role: i ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": em.intl.formatToPlainString(ec.default.AQbxhf, { answer: a.label }),
                "aria-disabled": o,
                tabIndex: d && c ? 0 : -1,
                children: [
                    (0, r.jsxs)("span", {
                        className: lJ.$_,
                        children: [
                            null != a.image
                                ? (0, r.jsx)(lQ, {
                                      projectId: l,
                                      attachmentId: a.image.attachment_id,
                                      alt: a.label,
                                      onMeasured: p,
                                  })
                                : (0, r.jsx)("span", { className: lJ.Gt }),
                            (0, r.jsx)("span", {
                                className: lJ.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, r.jsx)(ly.P, { checked: s, disabled: o })
                                    : (0, r.jsx)(lI.T, { checked: s, disabled: o }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(w.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: lJ.pG,
                        children:
                            "" !== (n = null != (t = a.image?.page_url ?? a.image?.url) ? (0, lC.E)(t) : "")
                                ? (function (e) {
                                      let t = e.toLowerCase().split(".");
                                      if (t.length < 2 || /^\d+$/.test(t[t.length - 1]) || e.includes(":")) return e;
                                      let [n, l] = t.slice(-2),
                                          a = t.length > 2 && 2 === l.length && n.length <= 3;
                                      return t.slice(a ? -3 : -2).join(".");
                                  })(n)
                                : a.label,
                    }),
                ],
            }),
            null != g
                ? (0, r.jsx)("span", {
                      className: lJ.B4,
                      children: (0, r.jsx)(C.m, {
                          text: em.intl.string(ec.default.HQEXJM),
                          children: (0, r.jsx)(t7.K, {
                              icon: lT.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: g,
                              disabled: o,
                              "aria-label": em.intl.string(ec.default.HQEXJM),
                              tabIndex: d ? 0 : -1,
                          }),
                      }),
                  })
                : null != a.image
                  ? (0, r.jsx)("span", {
                        className: lJ.B4,
                        children: (0, r.jsx)(C.m, {
                            text: em.intl.string(ec.default["4/eeDD"]),
                            children: (0, r.jsx)(t7.K, {
                                icon: lP._,
                                size: "sm",
                                variant: "overlay-secondary",
                                onClick: () => f(a),
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
    let { projectId: n, question: l, selectedIds: a, disabled: i, reachable: o = !0, onPick: d, own: c } = e,
        m = !0 === l.multi_select,
        { options: f } = l,
        h = f.length > 4 ? "gallery" : "row",
        p = s.useRef(null),
        g = s.useRef(new Map()),
        [x, b] = s.useState(null),
        v = null != x && f.some((e) => e.id === x) ? x : (f.find((e) => a.includes(e.id)) ?? f[0])?.id,
        y = s.useCallback(
            (e) => {
                let t = f.flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    l = t.findIndex((t) => t.id === e.id);
                l < 0 ||
                    Promise.all(t.map((e) => (0, er.PK)(n, e.image.attachment_id))).then(
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
        j = s.useCallback(
            (e, t) => {
                let n = (f.findIndex((t) => t.id === e.id) + t + f.length) % f.length,
                    l = f[n];
                (b(l.id), p.current?.querySelectorAll("[data-conjure-image-option-pick]")[n]?.focus(), m || i || d(l));
            },
            [i, m, d, f],
        ),
        w =
            null == c.image
                ? null
                : ((t = c.image),
                  {
                      id: `own:${t.attachment.id}`,
                      label: em.intl.string(ec.default.SUdqCQ),
                      image: { attachment_id: t.attachment.id },
                  });
    return (0, r.jsxs)("div", {
        className: lJ.Nz,
        "data-conjure-image-options": !0,
        children: [
            (0, r.jsxs)("div", {
                ref: p,
                className: u()(lJ.fF, "gallery" === h ? lJ.nV : lJ.nM, { [lJ.m3]: m }),
                role: m ? "group" : "radiogroup",
                "aria-labelledby": `${l.id}-label`,
                "data-layout": h,
                "data-count": f.length,
                children: [
                    f.map((e) =>
                        (0, r.jsx)(
                            lZ,
                            {
                                projectId: n,
                                option: e,
                                multi: m,
                                selected: a.includes(e.id),
                                disabled: i,
                                reachable: o,
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
                        ? (0, r.jsx)(
                              lZ,
                              {
                                  projectId: n,
                                  option: w,
                                  multi: m,
                                  selected: c.selected,
                                  disabled: i,
                                  reachable: o,
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
            (0, r.jsx)(l2, {
                projectId: n,
                own: c,
                disabled: i,
                reachable: o,
                uploadText: em.intl.string(/\bicons?\b/i.test(l.question) ? ec.default.qU4WN6 : ec.default.cbMDDB),
            }),
        ],
    });
}
function l2(e) {
    let { projectId: t, own: n, disabled: l, reachable: a, uploadText: i } = e,
        o = s.useRef(null),
        [u, d] = s.useState(!1),
        [c, m] = s.useState(""),
        f = a ? 0 : -1,
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
    return (0, r.jsxs)("div", {
        className: lJ.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, r.jsxs)("div", {
                className: lJ.QJ,
                children: [
                    (0, r.jsx)(S.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: lM.X,
                        text: i,
                        loading: "upload" === h,
                        disabled: l || "link" === h,
                        onClick: () => o.current?.click(),
                        tabIndex: f,
                        "data-conjure-own-image-upload": !0,
                    }),
                    u
                        ? null
                        : (0, r.jsx)(S.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: t5.LinkIcon,
                              text: em.intl.string(ec.default["1TgOO+"]),
                              disabled: l || "upload" === h,
                              onClick: () => d(!0),
                              tabIndex: f,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, r.jsx)("input", {
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
                                        (0, et.Oq)(i.size, a)
                                            ? (0, er.c9)(t, i, l, a)
                                            : Promise.resolve({ errorText: lV(a) })),
                                    ));
                        },
                    }),
                ],
            }),
            u
                ? (0, r.jsxs)("div", {
                      className: lJ.vG,
                      children: [
                          (0, r.jsx)("div", {
                              className: lJ.Hs,
                              children: (0, r.jsx)(l_.k, {
                                  label: em.intl.string(ec.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: em.intl.string(ec.default.AVhvn8),
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
                          (0, r.jsxs)("div", {
                              className: lJ.gd,
                              children: [
                                  (0, r.jsx)(S.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: em.intl.string(ec.default.FbRbeM),
                                      loading: "link" === h,
                                      disabled: l || "" === c.trim(),
                                      onClick: p,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, r.jsx)(lk.Q, {
                                      variant: "secondary",
                                      textVariant: "text-sm/medium",
                                      text: em.intl.string(ec.default.eXZL4X),
                                      onClick: () => d(!1),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
            n.error?.source === "upload"
                ? (0, r.jsx)(w.E, {
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
    let { option: t, position: n, disabled: l, onPick: a, reachable: i = !0, selected: o } = e,
        d = s.useId(),
        c = !0 === t.recommended,
        m = null != t.detail && "" !== t.detail;
    return (0, r.jsxs)(k.D, {
        className: u()(l6.uK, { [l6.ue]: l, [l6.h4]: !0 === o }),
        onClick: l ? void 0 : () => a(t),
        "aria-label": em.intl.formatToPlainString(c ? ec.default["2p6UFz"] : ec.default.AQbxhf, { answer: t.label }),
        "aria-describedby": m ? d : void 0,
        "aria-disabled": l,
        role: null != o ? "checkbox" : void 0,
        "aria-checked": o,
        tabIndex: i ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": c ? "true" : void 0,
        children: [
            null != o
                ? (0, r.jsx)("span", { className: l6.dy, children: (0, r.jsx)(ly.P, { checked: o, disabled: l }) })
                : (0, r.jsx)("span", { className: l6.Gy, "aria-hidden": !0, children: n }),
            (0, r.jsxs)("span", {
                className: l6.qO,
                children: [
                    (0, r.jsx)("span", {
                        className: l6.l8,
                        children: (0, r.jsx)(w.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: l6.ed,
                            children: t.label,
                        }),
                    }),
                    m
                        ? (0, r.jsx)(w.E, {
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
                ? (0, r.jsx)(w.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: l6.rM,
                      children: em.intl.string(ec.default.zku6r1),
                  })
                : null,
        ],
    });
}
function l3(e) {
    let { projectId: t, question: n, selected: l, disabled: a, reachable: i = !0, onPick: s, own: o } = e,
        u = !0 === n.multi_select;
    return lA(n)
        ? (0, r.jsx)(l0, { projectId: t, question: n, selectedIds: l, disabled: a, reachable: i, onPick: s, own: o })
        : (0, r.jsx)(r.Fragment, {
              children: n.options.map((e, t) =>
                  (0, r.jsx)(
                      l9,
                      {
                          option: e,
                          position: t + 1,
                          disabled: a,
                          selected: u ? l.includes(e.id) : void 0,
                          onPick: s,
                          reachable: i,
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
            selected: a,
            direction: i,
            disabled: s,
            ownImage: o,
            ownSelected: d,
        } = e,
        c = "" === l.trim() ? null : l,
        m = !0 === n.multi_select;
    return (0, r.jsxs)("div", {
        className: u()(l6.Ge, l6.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            m
                ? (0, r.jsx)(w.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: l6.aK,
                      children: em.intl.string(ec.default.tE8qbz),
                  })
                : null,
            (0, r.jsx)(l3, {
                projectId: t,
                question: n,
                selected: a,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: lS(o, d),
            }),
            lA(n)
                ? null
                : (0, r.jsxs)("div", {
                      className: l6.Xy,
                      children: [
                          (0, r.jsx)("span", {
                              className: l6.Gy,
                              "aria-hidden": !0,
                              children: (0, r.jsx)(lj.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == c ? null : (0, r.jsx)("span", { className: u()(l6.Pu, l6.es), children: c }),
                      ],
                  }),
        ],
    });
}
function l7(e) {
    var t;
    let { projectId: n, clarification: l, onSubmit: a, onDismiss: i } = e,
        [o, d] = s.useState({}),
        [c, m] = s.useState({}),
        [f, h] = s.useState({}),
        [p, g] = s.useState(0),
        [x, b] = s.useState(null),
        [v, y] = s.useState(null),
        [j, A] = s.useState(null),
        [N, E] = s.useState(!1),
        I = s.useRef(null),
        [T, P] = s.useState(null),
        M = s.useRef(null),
        _ = s.useRef(0),
        R = null == a,
        L = l.questions.length,
        D = Math.min(p, L - 1),
        F = l.questions[D],
        [z, G] = s.useState({ id: F.id, expanded: !1 }),
        U = z.id === F.id && z.expanded,
        [q, $] = s.useState(null),
        B = c[F.id] ?? "",
        H = !0 === F.multi_select,
        V = lA(F),
        W = H ? (f[F.id] ?? l5) : ((t = o[F.id]), t?.kind === "option" ? [t.optionId] : lN),
        K = (function (e, t, n) {
            let [l, a] = s.useState({}),
                [i, r] = s.useState({}),
                [o, u] = s.useState({}),
                d = em.intl.string(ec.default.wTsP5l),
                c = s.useCallback((e) => l[e] ?? null, [l]),
                m = s.useCallback(
                    (e) => null != l[e.id] && (!0 === e.multi_select ? !0 === o[e.id] : t[e.id]?.kind === "image"),
                    [t, l, o],
                ),
                f = s.useCallback(
                    (e) => {
                        let t = l[e.id];
                        return null != t && !0 === o[e.id] ? { attachment: t.attachment, text: d } : void 0;
                    },
                    [d, l, o],
                ),
                h = s.useCallback(
                    (s, o) => {
                        let c = s.id,
                            f = !0 === s.multi_select,
                            h = l[c] ?? null;
                        if (o) return lS(h, m(s));
                        function p(e) {
                            return r((t) => ({ ...t, [c]: e }));
                        }
                        function g(e) {
                            return { kind: "image", attachment: e.attachment, text: d };
                        }
                        let x = t[c];
                        function b(t) {
                            (a((n) => {
                                let l = n[c];
                                return (
                                    null != l && (0, er.Vm)(e, l.attachment.id).catch(() => void 0), { ...n, [c]: t }
                                );
                            }),
                                p({ busy: null, error: null }),
                                f ? u((e) => ({ ...e, [c]: !0 })) : n((e) => (e[c] === x ? { ...e, [c]: g(t) } : e)));
                        }
                        return {
                            image: h,
                            selected: m(s),
                            busy: i[c]?.busy ?? null,
                            error: i[c]?.error ?? null,
                            onPick: () => {
                                null != h &&
                                    (f ? u((e) => ({ ...e, [c]: !0 !== e[c] })) : n((e) => ({ ...e, [c]: g(h) })));
                            },
                            onRemove: () => {
                                null != h &&
                                    ((0, er.Vm)(e, h.attachment.id).catch(() => void 0),
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
                                                error: { source: "upload", text: em.intl.string(ec.default["kUw/b1"]) },
                                            }),
                                    ));
                            },
                            onLink: (t) => (
                                p({ busy: "link", error: null }),
                                (0, er.gm)(e, t).then(
                                    (e) => (b({ attachment: e }), !0),
                                    (e) => (
                                        p({
                                            busy: null,
                                            error: {
                                                source: "link",
                                                text:
                                                    e instanceof Error && "" !== e.message
                                                        ? e.message
                                                        : em.intl.string(ec.default.l79PMc),
                                            },
                                        }),
                                        !1
                                    ),
                                )
                            ),
                        };
                    },
                    [d, t, l, e, m, n, i],
                );
            return { imageFor: c, selectedFor: m, multiPartFor: f, controlsFor: h };
        })(n, o, d),
        X = K.imageFor(F.id),
        Y = K.selectedFor(F),
        { text: J, phase: Q } = (0, tf.Q)(F.question),
        Z = J === F.question,
        ee = Z && q?.id === F.id && q.truncated;
    s.useLayoutEffect(() => {
        if (null == T || U || !Z) return;
        function e() {
            if (null == T) return;
            let e = T.scrollHeight > T.clientHeight + 1;
            $((t) => (t?.id === F.id && t.truncated === e ? t : { id: F.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(T), () => t.disconnect());
    }, [Z, T, F.id, U]);
    let et = em.intl.string(U ? em.t.iTcuma : em.t.dcl9MQ),
        en = s.useCallback(
            (e) => {
                if (null == a) return;
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
                    a(
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
            [l, a],
        ),
        el = s.useCallback(
            (e, t) => {
                _.current += 1;
                let n = _.current;
                (b({ direction: t, moves: n }),
                    y({ question: F, draft: B, selected: W, ownImage: X, ownSelected: Y, direction: t, moves: n }),
                    E(!0),
                    g(e));
            },
            [B, X, Y, F, W],
        ),
        ea = s.useCallback(() => {
            let e = I.current,
                t = M.current;
            null != e && null != t && A({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    s.useLayoutEffect(() => {
        let e = I.current,
            t = M.current;
        if (null == e || null == t) return;
        ea();
        let n = new ResizeObserver(ea);
        return (n.observe(e), n.observe(t), () => n.disconnect());
    }, [ea]);
    let ei = x?.moves;
    s.useEffect(() => {
        if (null == ei) return;
        let e = setTimeout(() => y(null), 400),
            t = setTimeout(() => E(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [ei]);
    let es = s.useCallback(
            (e) => {
                if (R) return;
                let t = { ...o, [F.id]: e };
                d(t);
                let n =
                    D < l.questions.length - 1
                        ? D + 1
                        : (function (e, t, n) {
                              let { questions: l } = e;
                              for (let e = 1; e <= l.length; e++) {
                                  let a = (n + e) % l.length,
                                      i = t[l[a].id];
                                  if (null == i || "" === i.text.trim()) return a;
                              }
                              return null;
                          })(l, t, D);
                null == n ? en(t) : el(n, n < D ? "back" : "forward");
            },
            [o, l, R, D, F.id, en, el],
        ),
        eo = s.useCallback(() => {
            R || 0 === D || el(D - 1, "back");
        }, [R, D, el]),
        eu = D > 0 && !R,
        ed = s.useCallback(
            (e) => {
                m((e) => ({ ...e, [F.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                V ? R || d((e) => ({ ...e, [F.id]: t })) : es(t);
            },
            [R, V, F.id, es],
        ),
        { multiPartFor: ef } = K,
        eh = s.useMemo(() => {
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
        eg = s.useCallback(() => {
            if (null != eh) {
                "" !== eh.text && es(eh);
                return;
            }
            let e = B.trim();
            "" !== e && es({ kind: "custom", text: e });
        }, [B, eh, es]),
        [ex, eb] = s.useState(!1),
        [ev, ey] = s.useState(!1);
    s.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => eb(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let ej = s.useCallback(() => {
            null != i && (ey(!0), setTimeout(i, 150));
        }, [i]),
        ew = s.useMemo(
            () =>
                null != eh
                    ? "" !== eh.text
                        ? eh
                        : null
                    : "" !== B.trim()
                      ? { kind: "custom", text: B.trim() }
                      : (o[F.id] ?? null),
            [o, B, eh, F.id],
        ),
        ek = null != ew && !R,
        eC = D === L - 1,
        eA = s.useCallback(() => {
            null == ew || R || es(ew);
        }, [R, ew, es]),
        eN = s.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, tR.vq)(e.target, HTMLTextAreaElement) ||
                    (0, tR.vq)(e.target, HTMLInputElement) ||
                    ((!(0, tR.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && eu
                            ? (e.preventDefault(), eo())
                            : "ArrowRight" === e.key && ek && (e.preventDefault(), eA())));
            },
            [eu, ek, eo, eA],
        );
    return (0, r.jsxs)("section", {
        className: u()(l6.$O, { [l6.fI]: ex && !ev, [l6.Oh]: ev }),
        role: "dialog",
        "aria-label": F.question,
        "data-conjure-clarification": l.id,
        "data-state": R ? "inert" : "open",
        "data-question-expanded": U ? "true" : void 0,
        "data-step": D,
        tabIndex: -1,
        onKeyDown: eN,
        children: [
            (0, r.jsxs)("div", {
                className: l6.rf,
                style: null == j ? void 0 : { height: j.heading + j.rows },
                "data-moving": N ? "" : void 0,
                children: [
                    (0, r.jsxs)("div", {
                        ref: I,
                        className: l6.wx,
                        children: [
                            (0, r.jsx)(w.E, {
                                ref: P,
                                tag: "span",
                                id: `${F.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: U ? void 0 : 5,
                                className: u()(l1.TK, l6.R_, { [l6.TB]: "exit" === Q, [l6.JU]: "enter" === Q }),
                                children: J,
                            }),
                            ee || U
                                ? (0, r.jsx)("div", {
                                      className: l1.Q7,
                                      children: (0, r.jsx)(C.m, {
                                          text: et,
                                          children: (0, r.jsx)(t7.K, {
                                              icon: U ? td.t : la.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => G({ id: F.id, expanded: !U }),
                                              "aria-label": et,
                                              "aria-controls": `${F.id}-label`,
                                              "aria-expanded": U,
                                          }),
                                      }),
                                  })
                                : null,
                            null == i
                                ? null
                                : (0, r.jsx)(k.D, {
                                      className: u()(l1.gb, l1.Q7),
                                      onClick: ej,
                                      "aria-label": em.intl.string(ec.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, r.jsx)(O.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: l6.Cg,
                        style: null == j ? void 0 : { insetBlockStart: j.heading },
                        children: (0, r.jsxs)("div", {
                            className: l6.I,
                            children: [
                                (0, r.jsxs)("div", {
                                    ref: M,
                                    className: l6.Ge,
                                    role: "group",
                                    "aria-labelledby": `${F.id}-label`,
                                    "data-direction": x?.direction,
                                    "data-parity": null == x ? void 0 : x.moves % 2,
                                    children: [
                                        H
                                            ? (0, r.jsx)(w.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: l6.aK,
                                                  children: em.intl.string(ec.default.tE8qbz),
                                              })
                                            : null,
                                        (0, r.jsx)(l3, {
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
                                                    : ed(e),
                                            own: ep,
                                        }),
                                        V
                                            ? null
                                            : (0, r.jsxs)("div", {
                                                  className: l6.Xy,
                                                  children: [
                                                      (0, r.jsx)("span", {
                                                          className: l6.Gy,
                                                          "aria-hidden": !0,
                                                          children: (0, r.jsx)(lj.PencilIcon, {
                                                              size: "custom",
                                                              width: 20,
                                                              height: 20,
                                                              color: "currentColor",
                                                          }),
                                                      }),
                                                      (0, r.jsx)(lw.y, {
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
                                                          placeholder: em.intl.string(ec.default["tOC+tn"]),
                                                          "aria-label": em.intl.formatToPlainString(
                                                              ec.default["4JeYPB"],
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
                                    : (0, r.jsx)(
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
            L > 1 || H || V
                ? (0, r.jsxs)("div", {
                      className: l1.qr,
                      children: [
                          (0, r.jsx)(w.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  L > 1
                                      ? em.intl.formatToPlainString(ec.default.yzYUjq, { index: D + 1, total: L })
                                      : null,
                          }),
                          (0, r.jsxs)("div", {
                              className: l1.zt,
                              children: [
                                  eu
                                      ? (0, r.jsx)(lk.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: em.intl.string(ec.default.Pk5lfA),
                                            onClick: eo,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  (0, r.jsx)(S.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: em.intl.string(eC ? em.t.geKm7t : ec.default.w1nRmT),
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
var l8 = n(856059),
    ae = n(411236);
function at(e) {
    let { projectId: t, request: n, onDismiss: l } = e,
        a = null != n.note && "" !== n.note ? n.note : em.intl.string(ec.default.XuOf5s);
    return (0, r.jsx)(l8.A, {
        projectId: t,
        scopeKeys: n.keys,
        notifyAgent: !0,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: n, saving: i, submit: s } = e;
            function o(e) {
                (e.preventDefault(), s());
            }
            let d = (0, r.jsx)(S.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: i,
                disabled: !n,
                text: em.intl.string(ec.default.A7dQd9),
            });
            return null == l
                ? (0, r.jsxs)("form", {
                      className: ae.Mk,
                      onSubmit: o,
                      children: [
                          (0, r.jsx)(w.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: em.intl.string(ec.default["jZjP+I"]),
                          }),
                          (0, r.jsx)(w.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              selectable: !0,
                              children: a,
                          }),
                          t,
                          (0, r.jsx)("div", { className: ae.p0, children: d }),
                      ],
                  })
                : (0, r.jsxs)("form", {
                      className: u()(l1.nd, l1.jx),
                      "aria-label": em.intl.string(ec.default["jZjP+I"]),
                      onSubmit: o,
                      children: [
                          (0, r.jsxs)("div", {
                              className: l1.wx,
                              children: [
                                  (0, r.jsx)(w.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: l1.TK,
                                      children: em.intl.string(ec.default["jZjP+I"]),
                                  }),
                                  (0, r.jsx)(k.D, {
                                      className: u()(l1.gb, l1.Q7),
                                      onClick: l,
                                      "aria-label": em.intl.string(ec.default["iq+Pte"]),
                                      children: (0, r.jsx)(O.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: ae.DQ,
                              children: [
                                  (0, r.jsx)(w.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      selectable: !0,
                                      children: a,
                                  }),
                                  t,
                              ],
                          }),
                          (0, r.jsx)("div", {
                              className: l1.qr,
                              children: (0, r.jsx)("div", { className: l1.zt, children: d }),
                          }),
                      ],
                  });
        },
    });
}
var an = n(935208),
    al = n(435558),
    aa = n.n(al);
let ai = "VibegrationsComposerDrafts";
function ar() {
    return nA.w.get(ai) ?? {};
}
let as = new Map(),
    ao = aa().throttle(() => {
        if (0 === as.size) return;
        let e = ar();
        for (let [t, n] of as) "" === n ? delete e[t] : (e[t] = n);
        (as.clear(), nA.w.set(ai, e));
    }, 1e3);
class au extends f.Ay.Store {
    getDraft(e) {
        let t = as.get(e);
        return null != t ? t : (ar()[e] ?? "");
    }
}
let ad = new au(nP.h, {
    LOGOUT: function () {
        return (as.clear(), ao.cancel(), nA.w.remove(ai), !1);
    },
    CONJURE_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: n } = e;
        return (as.set(t, n), ao(), "" === n && ao.flush(), !1);
    },
});
function ac(e) {
    return "" !== ad.getDraft(e).trim();
}
var am = n(29080),
    af = n(46054),
    ah = n(615839);
function ap(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : em.intl.string(ec.default.KcFvbo);
}
function ag(e) {
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
let ax = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    ab = {
        snail: () => ec.default.ABeVsS,
        goat: () => ec.default.dhXay8,
        frog: () => ec.default.SHeweG,
        bunny: () => ec.default.FytFE1,
        cat: () => ec.default["5c+sHs"],
        caterpillar: () => ec.default["/FYcne"],
        butterfly: () => ec.default["Ib/AxK"],
        dog: () => ec.default.zDjBR1,
        spider: () => ec.default["6sxyrN"],
        bee: () => ec.default.cVtefg,
        bot: () => ec.default.MjCw0v,
    },
    av = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        goat: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-orange-40)",
        },
        frog: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-green-40)",
        },
        bunny: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-pink-40)",
        },
        cat: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-pink-40)",
        },
        caterpillar: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-green-40)",
        },
        butterfly: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
        dog: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        spider: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-orange-40)",
        },
        bee: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        bot: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
    };
function ay(e) {
    return { ...av[e], name: em.intl.string(ab[e]()) };
}
function aj(e) {
    return ax.includes(e) ? ay(e) : void 0;
}
function aw(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % ax.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, ax[(t + n) % ax.length]);
            }),
            l
        );
    })(e))
        t.set(n, ay(l));
    return t;
}
var ak = n(60160),
    aC = n(16634);
function aA(e) {
    let { projectId: t, lane: n, Illocon: l, tint: a, name: i, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        d = (0, n7.SY)(n.steps),
        c = u
            ? null != d
                ? (0, n7.WQ)(d)
                : ap(o)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(ap(e));
                  switch (e.status) {
                      case "failed":
                          return em.intl.formatToPlainString(ec.default.YrVgOf, { task: t });
                      case "cancelled":
                          return em.intl.formatToPlainString(ec.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return em.intl.formatToPlainString(ec.default["++9woZ"], {
                                  task: t,
                                  duration: (0, ah.MB)(e.durationMs),
                              });
                          return em.intl.formatToPlainString(ec.default.nmI9Uh, { task: t });
                      default:
                          return em.intl.formatToPlainString(ec.default.nmI9Uh, { task: t });
                  }
              })(o),
        m = u ? d : void 0,
        f =
            o.detail.length > 0 ||
            n.steps.some((e) => {
                var t;
                return e !== m || (t = e).detail.length > 0 || t.screenshots.length > 0 || t.attachments.length > 0;
            })
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          n.steps.length > 0
                              ? (0, r.jsx)("ol", {
                                    className: lx.dO,
                                    children: n.steps.map((e) =>
                                        (0, r.jsx)(
                                            aC.A,
                                            { projectId: t, node: e, presentation: "detail", active: u && e === d },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          o.detail.map((e, t) =>
                              (0, r.jsx)(
                                  "div",
                                  {
                                      className: lx.iq,
                                      children: (0, r.jsx)(ak.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, r.jsx)(ln.A, {
        glyph: (0, r.jsx)(ll.u, {
            asset: (0, r.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: ap(o),
            position: "left",
            children: (0, r.jsx)("span", {
                className: lx.nC,
                children: (0, r.jsx)(l, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: c,
        live: u,
        settled: !u,
        tint: a,
        detail: f,
        connected: !0,
        connectsDown: s,
    });
}
var aN = n(469393);
function aS(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, to.lG)(t.authored_at);
    return (0, r.jsx)(lr, {
        title: em.intl.string(ec.default["t+b0rz"]),
        children: (0, r.jsxs)("div", {
            className: aN.r,
            children: [
                (0, r.jsxs)("div", {
                    className: aN.z,
                    children: [
                        (0, r.jsx)(w.E, { variant: "text-md/medium", children: t.subject }),
                        null != l.relative
                            ? (0, r.jsx)(w.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  title: l.absolute ?? void 0,
                                  children: l.relative,
                              })
                            : null,
                    ],
                }),
                null != n
                    ? (0, r.jsx)(S.$, {
                          variant: "secondary",
                          size: "sm",
                          text: em.intl.string(ec.default.H8Jfhu),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
var aE = n(885574),
    aI = n(231483),
    aT = n(323384),
    aP = n(430392),
    aM = n(632015),
    a_ = n(176999),
    aR = (((a = {}).IMAGE = "image"), a),
    aL = (((i = {}).PRIVATE = "private"), (i.PUBLIC = "public"), i),
    aD = n(773669);
let aO = [],
    aF = {};
function az(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function aG(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: aR.IMAGE,
        visibility: aL.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var aU = n(628284),
    aq = n(97808),
    a$ = n(778712),
    aB = n(809115),
    aH = n(486020),
    aV = n(200700);
let aW = {
        alert: { label: () => em.intl.string(ec.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => em.intl.string(ec.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => em.intl.string(ec.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => em.intl.string(ec.default.RGzFNK), blockedStyle: !1 },
    },
    aK = {
        blocked: { label: () => em.intl.string(ec.default.YdnZ8q), tone: "red" },
        alert: { label: () => em.intl.string(ec.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => em.intl.string(ec.default.RGzFNK), tone: "green" },
    },
    aX = ["blocked", "alert", "allowed"],
    aY = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
var aJ = n(984097),
    aQ = n(13673);
let aZ = { blocked: aI.ShieldIcon, alert: t1.BellIcon, allowed: aU.y },
    a0 = {
        blurple: { text: "text-brand", icon: z.A.colors.TEXT_BRAND },
        red: { text: "text-feedback-critical", icon: z.A.colors.TEXT_FEEDBACK_CRITICAL },
        green: { text: "text-feedback-positive", icon: z.A.colors.TEXT_FEEDBACK_POSITIVE },
    };
function a2(e) {
    var t, n;
    let l,
        a,
        { example: i } = e,
        s =
            "" ===
            (a = [
                "timeout" !== (t = i).outcome || null == t.timeout_seconds
                    ? null
                    : em.intl.formatToPlainString(em.t["3LYql6"], {
                          duration:
                              ((n = t.timeout_seconds),
                              null != (l = (0, aV.getFriendlyDurationString)(n))
                                  ? l
                                  : n % 604800 == 0
                                    ? em.intl.formatToPlainString(em.t.EmoBD2, { weeks: n / 604800 })
                                    : n % 86400 == 0
                                      ? em.intl.formatToPlainString(em.t["k2UNz+"], { days: n / 86400 })
                                      : n % 3600 == 0
                                        ? em.intl.formatToPlainString(em.t.xCjYxK, { hours: n / 3600 })
                                        : n % 60 == 0
                                          ? em.intl.formatToPlainString(em.t.opVZ9q, { mins: n / 60 })
                                          : em.intl.formatToPlainString(em.t["4zv/jq"], { secs: n })),
                      }),
                i.reason,
            ]
                .filter((e) => null != e && "" !== e)
                .join(" "))
                ? null
                : a;
    return null == s
        ? null
        : (0, r.jsx)(w.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              lineClamp: 2,
              selectable: !0,
              children: s,
          });
}
function a1(e) {
    var t;
    let { example: n } = e,
        { label: l, blockedStyle: a } = aW[n.outcome];
    return (0, r.jsxs)("li", {
        className: u()(aJ.nM, { [u()(aJ.HV, aQ.DX)]: a }),
        children: [
            (0, r.jsx)(A.A, { children: `${l()}: ` }),
            (0, r.jsx)("span", {
                className: aJ.my,
                children: (0, r.jsx)(aq.eu, {
                    src: (0, aH.AE)(void 0, void 0),
                    size: a$._3.SIZE_24,
                    "aria-label": em.intl.string(ec.default["1yI0xV"]),
                }),
            }),
            (0, r.jsxs)("div", {
                className: aJ.fw,
                children: [
                    (0, r.jsx)(w.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), af.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    (0, r.jsx)(a2, { example: n }),
                ],
            }),
        ],
    });
}
function a6(e) {
    let { group: t } = e,
        n = s.useId(),
        l = aK[t.section],
        a = aZ[t.section],
        i = a0[l.tone];
    return (0, r.jsxs)("div", {
        className: aJ.uW,
        children: [
            (0, r.jsxs)("div", {
                className: aJ.bV,
                children: [
                    (0, r.jsx)(a, { size: "xs", color: i.icon, "aria-hidden": !0 }),
                    (0, r.jsx)(w.E, {
                        id: n,
                        variant: "text-xs/semibold",
                        color: i.text,
                        className: aJ.a9,
                        children: l.label(),
                    }),
                ],
            }),
            (0, r.jsx)("ul", {
                className: aJ.Ge,
                "aria-labelledby": n,
                children: t.examples.map((e, t) => (0, r.jsx)(a1, { example: e }, t)),
            }),
        ],
    });
}
function a9() {
    let { avatarSrc: e, eventHandlers: t } = (0, aB.a)(!0);
    return (0, r.jsx)("span", {
        className: aJ.Gy,
        ...t,
        children: (0, r.jsx)(aq.eu, { src: e, size: a$._3.SIZE_16, "aria-label": em.intl.string(em.t.hG1StD) }),
    });
}
function a3(e) {
    var t;
    let { automod: n } = e;
    return (0, r.jsx)("div", {
        className: aJ.K1,
        children: ((t = n.examples),
        aX
            .map((e) => ({ section: e, examples: t.filter((t) => aY[t.outcome] === e) }))
            .filter((e) => e.examples.length > 0)).map((e) => (0, r.jsx)(a6, { group: e }, e.section)),
    });
}
var a5 = n(633075),
    a4 = n(946356),
    a7 = n(58216),
    a8 = n(27399);
function ie(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, f.bG)([tW.default], () => tW.default.getCurrentUser()),
        a = s.useMemo(() => new a5.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, r.jsx)("div", {
              className: a8.H,
              children: (0, r.jsx)(a4.A.Overlay, {
                  className: a8.w,
                  children: (0, r.jsx)(a7.A, {
                      user: l,
                      widget: a,
                      allowEditing: !1,
                      disableInteraction: !0,
                      interactiveLinks: !0,
                      disableCTA: !0,
                      rendererProps: n,
                  }),
              }),
          });
}
var it = n(443863);
function il(e) {
    let { label: t, icon: n, info: l, children: a } = e;
    return (0, r.jsxs)("section", {
        className: it.uW,
        children: [
            (0, r.jsxs)("span", {
                className: it.a9,
                children: [
                    n,
                    (0, r.jsx)(w.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }),
                    l,
                ],
            }),
            a,
        ],
    });
}
function ia(e) {
    let { text: t, label: n } = e;
    return (0, r.jsx)(C.m, {
        text: t,
        children: (0, r.jsx)(k.D, {
            className: it.bk,
            "aria-label": n,
            children: (0, r.jsx)(aE.CircleInformationIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
function ii(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, r.jsx)(il, {
              label: t,
              children: (0, r.jsx)("div", {
                  className: it.Ip,
                  children: n.map((e) =>
                      (0, r.jsx)(
                          "span",
                          {
                              className: it.jw,
                              children: (0, r.jsx)(w.E, {
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
function ir() {
    return (0, r.jsxs)("span", {
        className: it.L6,
        children: [
            (0, r.jsx)(aI.ShieldIcon, {
                size: "custom",
                width: 16,
                height: 16,
                color: "currentColor",
                "aria-hidden": !0,
            }),
            (0, r.jsx)(w.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                tag: "span",
                children: em.intl.string(ec.default.DnWMLj),
            }),
        ],
    });
}
function is(e) {
    let { isActivity: t, hasWidget: n } = e,
        l = t ? aT.k : aP.RobotIcon;
    return (0, r.jsxs)("span", {
        className: it.K2,
        children: [
            n
                ? (0, r.jsxs)("span", {
                      className: it.L6,
                      children: [
                          (0, r.jsx)(aM.f, {
                              size: "custom",
                              width: 16,
                              height: 16,
                              color: "currentColor",
                              "aria-hidden": !0,
                          }),
                          (0, r.jsx)(w.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              tag: "span",
                              children: em.intl.string(ec.default["EswAi+"]),
                          }),
                      ],
                  })
                : null,
            (0, r.jsxs)("span", {
                className: it.L6,
                children: [
                    (0, r.jsx)(l, { size: "custom", width: 16, height: 16, color: "currentColor", "aria-hidden": !0 }),
                    (0, r.jsx)(w.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        tag: "span",
                        children: em.intl.string(t ? em.t.IC5Ann : ec.default.VFWfz1),
                    }),
                ],
            }),
        ],
    });
}
function io(e) {
    let { projectId: t, design: n } = e,
        { id: l } = n,
        { src: a, gone: i, handleError: o } = lY(t, l),
        u = em.intl.string(ec.default["3/aHX6"]),
        d = s.useCallback(() => {
            (0, er.PK)(t, l).then(
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
    return i
        ? null
        : (0, r.jsx)(il, {
              label: em.intl.string(ec.default.X15LLY),
              info: (0, r.jsx)(ia, {
                  text: em.intl.string(ec.default.nR4B8P),
                  label: em.intl.string(ec.default.nc0SNY),
              }),
              children: (0, r.jsx)(k.D, {
                  className: it.xX,
                  onClick: d,
                  "aria-label": em.intl.string(ec.default.TvAPIm),
                  children: null != a ? (0, r.jsx)("img", { src: a, alt: u, className: it.sN, onError: o }) : null,
              }),
          });
}
function iu(e) {
    let { projectId: t, proposal: n, version: l, onApprove: a } = e,
        { automod: i } = n,
        o = (function (e, t) {
            let { widget_config: n, widget_preview: l } = t,
                a = (0, f.bG)([aD.default], () => aD.default.locale),
                i = (0, f.bG)([eR.Ay], () => {
                    let t = eR.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                r = (function (e, t) {
                    let [n, l] = s.useState(aF);
                    return (
                        s.useEffect(() => {
                            let n = Object.entries(t ?? {});
                            if (0 === n.length) return;
                            let a = !1;
                            return (
                                Promise.all(
                                    n.map((t) => {
                                        let [n, l] = t;
                                        return (0, er.PK)(e, l.id).then(
                                            (e) => [n, e],
                                            () => null,
                                        );
                                    }),
                                ).then(
                                    (e) => {
                                        a || l(Object.fromEntries(e.filter((e) => null != e)));
                                    },
                                    () => {},
                                ),
                                () => {
                                    a = !0;
                                }
                            );
                        }, [e, t]),
                        n
                    );
                })(e, l?.images),
                o = s.useMemo(
                    () =>
                        null == n || null == l
                            ? null
                            : (function (e, t, n, l) {
                                  let a = {};
                                  for (let [t, n] of Object.entries(e.surfaces))
                                      null != n &&
                                          (a[t] = (function (e) {
                                              let t = {};
                                              for (let [n, l] of Object.entries(e.components)) {
                                                  let e = {};
                                                  for (let [t, n] of Object.entries(l.fields))
                                                      e[t] = {
                                                          ...az(n),
                                                          ...(null != n.fallback ? { fallback: az(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let i = a_.uW.safeParse(a);
                                  if (!i.success) return null;
                                  let r = i.data;
                                  return null == r[tA.m.WIDGET_TOP] || null == r[tA.m.WIDGET_BOTTOM]
                                      ? null
                                      : {
                                            locale: l,
                                            surfaceConfigs: r,
                                            isLoading: !1,
                                            hasIdentity: !0,
                                            resolutionContext: {
                                                data: (function (e, t, n) {
                                                    let l = (function (e) {
                                                            let t = new Map();
                                                            for (let n of Object.values(e.surfaces))
                                                                for (let e of Object.values(n?.components ?? {}))
                                                                    for (let n of Object.values(e.fields))
                                                                        "data" !== n.value_type ||
                                                                            t.has(n.value) ||
                                                                            t.set(n.value, n.presentation_type);
                                                            return t;
                                                        })(e),
                                                        a = {};
                                                    for (let [e, i] of Object.entries(t.sample_data ?? {}))
                                                        if ("image" === l.get(e)) {
                                                            let t = n[String(i)];
                                                            null != t &&
                                                                (a[e] = {
                                                                    type: a_.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof i
                                                                ? (a[e] = { type: a_.oG.NUMBER, value: i })
                                                                : (a[e] = { type: a_.oG.STRING, value: i });
                                                    return a;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(aG),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: aO,
                                            },
                                        };
                              })(n, l, r, a),
                    [n, l, r, a],
                );
            return s.useMemo(() => (null == i || null == o ? null : { applicationId: i, rendererProps: o }), [i, o]);
        })(t, n),
        u = l?.superseded === !0,
        d = n.what_changed?.trim() ?? "";
    return (0, r.jsxs)(lu, {
        title:
            u && null != l
                ? em.intl.formatToPlainString(ec.default.YZ3qJs, { version: l.version })
                : em.intl.string(ec.default["3b6e7o"]),
        meta: u
            ? (0, r.jsx)(lo, { children: em.intl.string(ec.default.hF2c41) })
            : null != i
              ? (0, r.jsx)(ir, {})
              : (0, r.jsx)(is, { isActivity: !0 === n.is_activity, hasWidget: null != n.widget_config }),
        superseded: u,
        showLabel: em.intl.string(ec.default.yD8EJS),
        hideLabel: em.intl.string(ec.default.nSPGNb),
        bodyClassName: it.rf,
        "data-conjure-plan-card": !0,
        children: [
            "" !== d
                ? (0, r.jsx)(il, {
                      label: em.intl.string(ec.default.iNS4dl),
                      children: (0, r.jsx)(w.E, {
                          variant: "experimental/body-md/normal",
                          color: "text-default",
                          selectable: !0,
                          children: d,
                      }),
                  })
                : null,
            (0, r.jsx)(w.E, {
                variant: "experimental/body-md/normal",
                color: "text-default",
                selectable: !0,
                children: n.summary,
            }),
            null != i && i.examples.length > 0
                ? (0, r.jsx)(il, {
                      label: em.intl.string(ec.default.z4ZKYG),
                      icon: (0, r.jsx)(a9, {}),
                      info: (0, r.jsx)(ia, {
                          text: em.intl.string(ec.default.bo4MOx),
                          label: em.intl.string(ec.default.VPLNot),
                      }),
                      children: (0, r.jsx)(a3, { automod: i }),
                  })
                : null,
            null == i && null != n.design_image ? (0, r.jsx)(io, { projectId: t, design: n.design_image }) : null,
            null == i && null != o
                ? (0, r.jsx)(il, {
                      label: em.intl.string(ec.default.ove4zH),
                      info: (0, r.jsx)(ia, {
                          text: em.intl.string(ec.default.XcIrHx),
                          label: em.intl.string(ec.default["TwT+ht"]),
                      }),
                      children: (0, r.jsx)(ie, { ...o }),
                  })
                : null,
            n.changes.length > 0
                ? (0, r.jsx)(il, {
                      label: em.intl.string(ec.default["5+mG1z"]),
                      children: (0, r.jsx)("ul", {
                          className: it.p_,
                          children: n.changes.map((e, t) =>
                              (0, r.jsx)(
                                  "li",
                                  {
                                      className: it.Aw,
                                      children: (0, r.jsx)(w.E, {
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
                ? (0, r.jsx)(il, {
                      label: em.intl.string(em.t["0hKkS+"]),
                      children: (0, r.jsx)("ul", {
                          className: it.p_,
                          children: n.commands.map((e, t) =>
                              (0, r.jsxs)(
                                  "li",
                                  {
                                      className: it.uX,
                                      children: [
                                          (0, r.jsxs)(w.E, {
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
                                          (0, r.jsx)(w.E, {
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
            (0, r.jsx)(ii, { label: em.intl.string(ec.default["2UbW6r"]), names: n.bot_permissions ?? [] }),
            (0, r.jsx)(ii, { label: em.intl.string(ec.default["7TKfpj"]), names: n.privileged_intents ?? [] }),
            null == a || u
                ? null
                : (0, r.jsxs)("div", {
                      className: it.o1,
                      children: [
                          (0, r.jsx)(S.$, {
                              variant: "primary",
                              size: "sm",
                              text: em.intl.string(ec.default["6S+wRM"]),
                              onClick: a,
                          }),
                          (0, r.jsx)(w.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              tag: "span",
                              children: em.intl.string(ec.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
var id = n(331322);
function ic(e) {
    return null != e && e.status?.state === "unpublished";
}
function im(e) {
    let { publish: t } = e,
        n = t.guildId,
        l = (0, f.bG)([Z.A], () => (null == n ? null : Z.A.getGuild(n)));
    return (0, r.jsx)(id.B, {
        gap: 8,
        align: "start",
        children: (0, r.jsxs)(id.B, {
            direction: "horizontal",
            gap: 8,
            align: "center",
            children: [
                (0, r.jsx)(C.m, {
                    text: t.disabledReason,
                    asContainer: !0,
                    children: (0, r.jsx)(S.$, {
                        variant: "primary",
                        size: "sm",
                        loading: t.publishing,
                        disabled: t.disabled,
                        onClick: () => t.run("card"),
                        text: t.label,
                    }),
                }),
                null != l
                    ? (0, r.jsxs)(id.B, {
                          direction: "horizontal",
                          gap: 4,
                          align: "center",
                          children: [
                              (0, r.jsx)(w.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: em.intl.string(ec.default["+HGTlC"]),
                              }),
                              (0, r.jsx)(eJ.Ay, { guild: l, size: eJ.Ay.Sizes.SMOL }),
                              (0, r.jsx)(w.E, {
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
function ih(e) {
    let { projectId: t } = e,
        n = nQ(t);
    return null != n && ic(n) ? (0, r.jsx)(im, { publish: n }) : null;
}
var ip = n(478016),
    ig = n(989271);
function ix(e) {
    let { idea: t, selected: n, onPick: l } = e,
        a = s.useId(),
        i = null == l;
    return (0, r.jsxs)(k.D, {
        className: u()(ig.nM, { [ig.f1]: i, [ig.CZ]: n }),
        onClick: i ? void 0 : () => l(t),
        "aria-label": em.intl.formatToPlainString(ec.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : a,
        "aria-disabled": i,
        "aria-pressed": n,
        children: [
            (0, r.jsxs)("div", {
                className: ig.jo,
                children: [
                    n
                        ? (0, r.jsx)(ip.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: ig.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, r.jsx)(w.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: ig.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, r.jsx)(w.E, {
                      tag: "div",
                      id: a,
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function ib(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [a, i] = s.useState(() => new Set()),
        o = s.useCallback(
            (e) => {
                (i((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, r.jsx)(lr, {
        title: em.intl.string(ec.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, r.jsx)(
                ix,
                { idea: e, selected: a.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
function iv(e) {
    let { onAsk: t } = e;
    return (0, r.jsx)(id.B, {
        align: "start",
        "data-conjure-ideas-offer": !0,
        children: (0, r.jsx)(S.$, {
            variant: "secondary",
            size: "sm",
            disabled: null == t,
            onClick: t,
            text: em.intl.string(ec.default["U/bLzU"]),
        }),
    });
}
var iy = n(530557),
    ij = n(872162);
function iw(e, t) {
    return { cardId: e, status: "pending" === t ? null : t };
}
var ik = n(202723);
function iC(e) {
    let { projectId: t, cardId: l, request: a, status: i, awaiting: o } = e,
        d = s.useCallback(() => {
            (0, eA.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("291953"), n.e("408337")]).then(n.bind(n, 789864));
                return (n) => (0, r.jsx)(e, { ...n, projectId: t, request: a });
            });
        }, [t, a]),
        c = s.useMemo(() => a.fields.map((e) => ({ id: e.name, label: e.label, icon: iy.R })), [a.fields]),
        m = (function (e, t) {
            let [n, l] = s.useState(() => iw(e, t));
            return n.cardId !== e || (null == n.status && "pending" !== t)
                ? (l(iw(e, t)), !1)
                : null != n.status && t !== n.status;
        })(l, i),
        f = u()(ik.Lo, { [ik.jY]: m });
    return "superseded" === i
        ? (0, r.jsx)(
              "article",
              {
                  className: f,
                  children: (0, r.jsx)(w.E, {
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      tag: "span",
                      children: em.intl.string(ec.default.CTxtdV),
                  }),
              },
              i,
          )
        : "inactive" === i
          ? (0, r.jsxs)(
                "article",
                {
                    className: f,
                    children: [
                        (0, r.jsx)(w.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            tag: "span",
                            children: em.intl.string(ec.default.HCQvpO),
                        }),
                        (0, r.jsx)(ij.C, { label: em.intl.string(ec.default.HCQvpO), size: "xs", items: c }),
                    ],
                },
                i,
            )
          : "pending" === i
            ? (0, r.jsx)(
                  "article",
                  {
                      className: ik.Lo,
                      children: (0, r.jsx)(ij.C, { label: em.intl.string(ec.default.HCQvpO), size: "xs", items: c }),
                  },
                  i,
              )
            : "received" === i
              ? (0, r.jsxs)(
                    "article",
                    {
                        className: f,
                        children: [
                            (0, r.jsxs)("div", {
                                className: ik.$h,
                                children: [
                                    (0, r.jsx)("span", {
                                        className: ik.c9,
                                        "aria-hidden": !0,
                                        children: (0, r.jsx)(aU.y, {
                                            size: "xs",
                                            color: z.A.colors.ICON_FEEDBACK_POSITIVE,
                                        }),
                                    }),
                                    (0, r.jsx)(w.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-feedback-positive",
                                        tag: "span",
                                        children: em.intl.string(ec.default.sfp7Up),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(ij.C, { label: em.intl.string(ec.default.sfp7Up), size: "xs", items: c }),
                        ],
                    },
                    i,
                )
              : (0, r.jsxs)("article", {
                    className: ik.Lo,
                    children: [
                        (0, r.jsx)(w.E, {
                            variant: "text-xs/semibold",
                            color: null != o ? "text-brand" : "text-muted",
                            tag: "span",
                            children: em.intl.string(null != o ? ec.default.O0QIqj : ec.default.HCQvpO),
                        }),
                        (0, r.jsx)(w.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            selectable: !0,
                            children: null != a.note && "" !== a.note ? a.note : em.intl.string(ec.default.MPGSHL),
                        }),
                        (0, r.jsx)(ij.C, { label: em.intl.string(ec.default.HCQvpO), size: "xs", items: c }),
                        (0, r.jsx)("div", {
                            className: ik.sq,
                            children: (0, r.jsx)(S.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: d,
                                text: em.intl.string(ec.default.EK8tKY),
                            }),
                        }),
                    ],
                });
}
var iA = n(919790),
    iN = n(971824),
    iS = n(162052),
    iE = n(165648);
function iI(e) {
    let t = aw(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? aj(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: ap(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function iT(e) {
    let {
            projectId: t,
            steps: n,
            active: l = !1,
            turnActive: a = l,
            checklistSuperseded: i = !1,
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
        x = s.useMemo(() => (0, n7.GO)(n, { turnActive: l }), [n, l]),
        b = s.useMemo(
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
        return (0, r.jsx)("ol", {
            className: lx.pj,
            "data-live": !1,
            children: (0, r.jsx)(ln.A, {
                glyph: (0, r.jsx)(am.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: em.intl.string(ec.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let v = l ? void 0 : (g ?? (h ? (x.turn?.durationMs ?? o) : void 0)),
        y = f ? ((0, n7.lt)(n) ?? d ?? null) : null,
        j = null != y && y.length > 0;
    if (0 === b.steps.length && 0 === b.tasks.length && !j) return null;
    let w = b.tasks,
        k = aw(w.map((e) => e.taskId)),
        C = !p && (l || w.some((e) => "running" === e.task.status)),
        A = iI(w);
    return (0, r.jsx)(ln.E.Provider, {
        value: w.length,
        children: (0, r.jsxs)("ol", {
            className: lx.pj,
            "data-live": C,
            children: [
                (0, r.jsx)(le.A, {
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
                    let l = null != e.task.helperMark ? aj(e.task.helperMark) : void 0,
                        a = l ?? k.get(e.taskId);
                    return null == a
                        ? null
                        : (0, r.jsx)(
                              aA,
                              {
                                  projectId: t,
                                  lane: e,
                                  Illocon: a.Illocon,
                                  tint: a.tint,
                                  name: null != l && null != e.task.helperName ? e.task.helperName : a.name,
                                  connectsDown: n < w.length - 1,
                              },
                              e.taskId,
                          );
                }),
                j
                    ? (0, r.jsx)("li", {
                          className: lx.YO,
                          children: (0, r.jsx)(lp, { todos: y, provisional: c, agents: A, live: a, superseded: i }),
                      })
                    : null,
            ],
        }),
    });
}
function iP(e) {
    let {
            projectId: t,
            steps: n,
            content: l,
            proposal: a,
            planVersion: i,
            ideas: o,
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
            sideReply: y = !1,
            sideReplyAcknowledges: j,
            hoistedProse: k = !1,
            hoistedAttachmentsHost: C,
            restoreProposal: A,
            onRestoreProposal: N,
        } = e,
        S = s.useMemo(
            () => ag({ steps: n, content: l, hasProposal: null != a, hasAttachments: null != d && d.length > 0 }),
            [n, l, a, d],
        ),
        { streamed: E, lastStreamedMessage: I, showsClosingMessage: T, closingContent: P } = S,
        M = (k ? C : void 0) ?? S.attachmentsHost,
        _ = T && !k,
        R = null == d ? null : (0, r.jsx)(iA.A, { projectId: t, attachments: d }),
        L = null == R ? null : (0, r.jsx)("div", { className: lx.MT, children: R }),
        D = y
            ? (0, r.jsx)(w.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return em.intl.string(ec.default.Mv5OmK);
                          case "queued":
                              return em.intl.string(ec.default["Po/2mi"]);
                          case "restarting":
                              return em.intl.string(ec.default.Vj0woh);
                          default:
                              return em.intl.string(ec.default.gY3L8p);
                      }
                  })(j),
              })
            : null;
    return (0, r.jsxs)("div", {
        className: lx.ue,
        children: [
            E.length > 0 && !k
                ? (0, r.jsx)("ol", {
                      className: lx.dO,
                      children: E.filter((e) => "todos" !== e.type).map((e) =>
                          (0, r.jsxs)(
                              "li",
                              {
                                  className: lx.DV,
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: iE.PT,
                                          children: af.A.parse(e.content, !0, {
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
            null != a
                ? (0, r.jsx)(iu, { projectId: t, proposal: a, version: i, onApprove: v })
                : _
                  ? (0, r.jsxs)("div", {
                        className: u()(lx.ky, iS.XR),
                        children: [
                            (0, r.jsx)("div", {
                                className: u()(iE.PT, lx.cW),
                                children: af.A.parse(P, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === M ? L : null,
                            D,
                        ],
                    })
                  : null,
            null != c
                ? (0, r.jsx)("div", {
                      className: u()(lx.ky, iS.XR, { [iN.O]: null != f && "open" === h }),
                      children: (0, r.jsx)(iC, {
                          projectId: t,
                          cardId: m ?? "",
                          request: c,
                          status: h,
                          awaiting: "open" === h ? f : void 0,
                      }),
                  })
                : null,
            null != p
                ? (0, r.jsx)("div", {
                      className: u()(lx.ky, iS.XR),
                      children: (0, r.jsx)(at, { projectId: t, request: p }),
                  })
                : null,
            "standalone" !== M && ("closing" !== M || _) ? null : R,
            null != g ? (0, r.jsx)(ih, { projectId: t }) : null,
            null != o && o.length > 0 ? (0, r.jsx)(ib, { ideas: o, pickedIdeaIds: b, onPick: x }) : null,
            null != A ? (0, r.jsx)(aS, { proposal: A, onRestore: N }) : null,
            _ ? null : D,
        ],
    });
}
var iM = n(146806),
    i_ = n(477262),
    iR = n(432017),
    iL = n(475358),
    iD = n(717400),
    iO = n(663341),
    iF = n(559647),
    iz = n(775602),
    iG = n(234320),
    iU = n(285796),
    iq = n(922329),
    i$ = n(153171);
let iB = et.lN;
function iH(e, t, n, l) {
    let a = lG(e, t).length;
    !(function (e, t, n) {
        if (0 === n.length) return;
        let l = n.map((e) => {
            let { draft: t, upload: n } = e;
            return { draft: { ...t, localId: lO++ }, upload: n };
        });
        for (let { draft: n, upload: a } of (lU(e, t, [
            ...lG(e, t),
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
                                        errorText: em.intl.string(ec.default.E7dS5n),
                                    }),
                                et.o2 - 3e5,
                            )
                          : l$(e, l.id);
                },
                (l) => {
                    (console.error("[vibegrations] attachment upload failed", l),
                        lq(e, t, n.localId, { status: "error", errorText: em.intl.string(ec.default["kUw/b1"]) }));
                },
            );
    })(
        e,
        t,
        n.map((e) => {
            let t = "" === e.type ? "application/octet-stream" : e.type,
                n = { name: e.name, contentType: t };
            if (a++ >= iB)
                return {
                    draft: {
                        ...n,
                        status: "error",
                        errorText: em.intl.formatToPlainString(ec.default.Q0aCVZ, { count: iB }),
                    },
                };
            if (!(0, et.Oq)(e.size, t)) return { draft: { ...n, status: "error", errorText: lV(t) } };
            let i = et.XB.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...n, status: "uploading", previewUrl: i }, upload: () => l(e) };
        }),
    );
}
function iV(e) {
    let { projectId: t, surface: n, onUploadFile: l } = e,
        a = lF.useState((e) => lz(e, t, n)),
        i = s.useCallback((e) => iH(t, n, e, l), [t, n, l]),
        r = s.useCallback(
            (e) => {
                if (e.defaultPrevented) return;
                let t = Array.from(e.clipboardData?.files ?? []);
                0 !== t.length && (e.preventDefault(), i(t));
            },
            [i],
        ),
        o = s.useCallback(
            (e) => {
                let l, a;
                null != (a = (l = lG(t, n)).find((t) => t.localId === e)) &&
                    (lB(t, a),
                    lU(
                        t,
                        n,
                        l.filter((t) => t.localId !== e),
                    ));
            },
            [t, n],
        ),
        u = s.useCallback(() => lK(t, n), [t, n]);
    return {
        drafts: a,
        addFiles: i,
        pasteFiles: r,
        removeDraft: o,
        settled: a.every((e) => "ready" === e.status),
        takeRefs: u,
    };
}
function iW(e) {
    let { draft: t, onRemove: n } = e;
    return (0, r.jsxs)(iq.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, r.jsx)(w.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, r.jsx)(N.y, { type: N.t.SPINNING_CIRCLE_SIMPLE, className: i$.Rk }) : null,
            (0, r.jsx)("button", {
                type: "button",
                className: i$.o1,
                onClick: () => n(t.localId),
                "aria-label": em.intl.string(ec.default.Slam9g),
                children: (0, r.jsx)(iU.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var iK = n(497437);
let iX = [
        {
            id: "add-images-videos",
            label: ec.default["51+9lc"],
            icon: i_.s,
            accept: "image/*,video/*,.png,.jpg,.jpeg,.gif,.webp,.avif,.heic,.heif,.svg,.bmp,.mp4,.m4v,.mov,.webm,.mkv,.avi",
        },
        {
            id: "add-sounds",
            label: ec.default["10ljr2"],
            icon: iR.T,
            accept: "audio/*,.mp3,.wav,.ogg,.oga,.opus,.m4a,.aac,.flac,.weba,.webm,.aif,.aiff,.mid,.midi",
        },
        { id: "add-other-files", label: ec.default.aotDee, icon: ei.H, accept: "" },
    ],
    iY = "text-md/normal",
    iJ = null;
function iQ(e) {
    let { text: t, offering: n, typed: l } = e,
        [a, i] = s.useState(t),
        o = s.useRef(null),
        d = s.useRef(null),
        c = s.useRef(0),
        [m, h] = s.useState(0),
        [p, g] = s.useState(0),
        [x, b] = s.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
    (s.useLayoutEffect(() => {
        let e = o.current,
            t = e?.parentElement;
        if (null == e || null == t) return;
        let n = c.current;
        function l() {
            let e = o.current,
                t = e?.parentElement;
            if (null == e || null == t) return;
            let l = d.current;
            if (null == l) return;
            let a = parseFloat(getComputedStyle(t).columnGap),
                i = Number.isNaN(a) ? 0 : a,
                r = e.offsetWidth,
                s = l.offsetWidth + i;
            (g(r + i), h(s));
            let u = s + r,
                c = Math.max(n, l.offsetWidth) + i + r,
                m = 0 === c ? 1 : s / c,
                f = 0 === c ? 1 : u / c;
            b({
                frontFrom: 1e3 * (0, iM._R)(m),
                frontTo: 1e3 * (0, iM._R)(f),
                backFrom: 1e3 * (0, iM.T)(m),
                backTo: 1e3 * (0, iM.T)(f),
            });
        }
        let a = new ResizeObserver(l);
        return (l(), a.observe(e), a.observe(t), null != d.current && a.observe(d.current), () => a.disconnect());
    }, [t]),
        s.useEffect(() => {
            c.current = d.current?.offsetWidth ?? 0;
        }, [t]));
    let [v, y] = s.useState(0),
        [j, k] = s.useState(null),
        C = s.useRef(!1),
        A = s.useCallback(() => {
            (k(C.current ? (n ? "through" : "out") : n ? "in" : null), y((e) => e + 1));
        }, [n]);
    s.useEffect(() => {
        C.current = n;
    }, [n, t]);
    let N = "in" === j ? x.backFrom : x.frontFrom,
        S = "out" === j ? x.frontTo : x.backTo,
        E = (0, f.bG)([iz.Ay], () => iz.Ay.useReducedMotion),
        I = t === em.intl.string(ec.default.Zc7gML),
        T = a === t && I;
    function P(e, t, n) {
        let l = null != n;
        return (0, r.jsx)("span", {
            ref: n,
            className: u()(iK.VT, { [iK.qk]: l }),
            style: l
                ? {
                      insetInlineStart: m,
                      "--custom-cap-wipe-delay": `${N}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, S - N)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": l && v > 0 && null != j ? v % 2 : void 0,
            "data-wipe-kind": l ? (j ?? void 0) : void 0,
            children: (0, r.jsx)(iL.e, { shortcut: "tab", className: iK.xT, keyClassName: e }),
        });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eU.o, {
                text: t,
                variant: iY,
                delay: null,
                duration: 1e3,
                trailingWidth: p,
                className: u()(iK.xM, { [iK.s2]: l }),
                onStart: A,
                onComplete: () => i(t),
            }),
            P(iK.IS, n || (!E && "out" === j), o),
            (0, r.jsx)("span", {
                ref: d,
                className: iK.QI,
                "aria-hidden": !0,
                children: (0, r.jsx)(w.E, { variant: iY, tag: "span", children: t }),
            }),
            T
                ? (0, r.jsxs)("span", {
                      className: iK.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, r.jsx)(w.E, { variant: iY, tag: "span", className: iK.xM, children: t }),
                          P(iK.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
function iZ(e) {
    let {
            projectId: t,
            canSend: n,
            stopped: l,
            running: a,
            restoring: i = !1,
            onSend: o,
            onInterrupt: u,
            onUploadFile: d,
            onApprove: c,
            onImport: m,
            suggestion: h,
            questionOpen: p = !1,
            hasPendingContext: g = !1,
            onDraftHasTextChange: x,
            modelSettings: b,
            onModelSettingsChange: v,
        } = e,
        [y, j] = s.useState(() => ad.getDraft(t)),
        w = s.useCallback(
            (e) => {
                ((0, e_.I$)(t, e), j(e));
            },
            [t],
        ),
        k = "" !== y.trim();
    s.useEffect(() => x?.(k), [k, x]);
    let [N, S] = s.useState(t);
    N !== t && (S(t), j(ad.getDraft(t)));
    let E = (0, f.bG)([iz.Ay], () => iz.Ay.isSubmitButtonEnabled),
        [I, T] = s.useState(!1);
    s.useEffect(() => {
        a || T(!1);
    }, [a]);
    let P = s.useRef(null),
        {
            drafts: M,
            addFiles: _,
            pasteFiles: R,
            removeDraft: L,
            settled: D,
            takeRefs: O,
        } = iV({ projectId: t, surface: "chat", onUploadFile: d }),
        F = "" !== y.trim() || M.length > 0 || g,
        z = n && F && D,
        [G, U] = s.useState(null);
    s.useEffect(() => {
        if (null == G) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => U(null));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [G]);
    let q = s.useCallback(() => {
            if (!z) return;
            let e = O();
            o(y, e.length > 0 ? e : void 0);
            let t = (function (e, t, n) {
                let l,
                    a,
                    i = n.split("\n", 1)[0] ?? "";
                if (null == e || "" === i) return i;
                null == iJ && (iJ = document.createElement("canvas").getContext("2d"));
                let r = iJ;
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
            ("" !== t && U(t), w(""));
        }, [z, y, o, O, w]),
        $ = s.useCallback(
            (e) => {
                (e.preventDefault(), q());
            },
            [q],
        ),
        B = s.useCallback(() => {
            null == u || I || (T(!0), u());
        }, [u, I]),
        H = null == h || "" !== y || !n || l || i || g ? null : h,
        V = s.useCallback(
            (e) => {
                if ("Escape" === e.key && a && null != u && !I) {
                    (e.preventDefault(), e.stopPropagation(), B());
                    return;
                }
                if ("Tab" === e.key && !e.shiftKey && null != H) {
                    (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), w(H));
                    return;
                }
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != c && (e.preventDefault(), c());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), q());
            },
            [q, c, a, u, I, B, H, w],
        ),
        W = s.useCallback(
            (e) => {
                n && R(e);
            },
            [n, R],
        );
    (0, iG.Vo)({
        event: ej.jej.GLOBAL_CLIPBOARD_PASTE,
        handler: (e) => {
            let { event: t } = e;
            return W(t);
        },
    });
    let K = s.useCallback(
            (e) => {
                (_(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
            },
            [_],
        ),
        X = s.useRef(null),
        Y = s.useRef(null),
        J = s.useCallback((e) => {
            let t = P.current;
            null != t && ((t.accept = e), t.click());
        }, []),
        [Q, Z] = s.useState(0),
        [ee, et] = s.useState(!1);
    s.useEffect(() => {
        if (0 === y.length) return void et(!1);
        let e = X.current?.querySelector("textarea");
        if (null != e) {
            let t = i1(e);
            null != t && Z(t);
        }
        et(!0);
        let t = setTimeout(() => et(!1), i0);
        return () => clearTimeout(t);
    }, [y]);
    let ei = s.useMemo(() => ({ "--custom-glow-x": `${Q}px` }), [Q]),
        er = ee ? ` ${iK.EB}` : "",
        es = i
            ? em.intl.string(ec.default.qqlUiW)
            : l
              ? em.intl.string(ec.default.mPB3eo)
              : n
                ? g
                    ? em.intl.string(ec.default.knUjL3)
                    : p
                      ? em.intl.string(ec.default.IevBEw)
                      : em.intl.string(a ? ec.default["0BJa/0"] : ec.default.TEeU7z)
                : em.intl.string(ec.default.zZ9NgM),
        eo = s.useRef(0),
        eu = s.useRef(null),
        ed = s.useCallback((e) => {
            if ((eu.current?.disconnect(), null == e)) return;
            eo.current = e.clientWidth;
            let t = new ResizeObserver(() => {
                eo.current = e.clientWidth;
            });
            (t.observe(e), (eu.current = t));
        }, []),
        ef = s.useId(),
        eh = null != H,
        ep = G ?? H ?? es,
        eg = "" === y && "" !== ep;
    return (0, r.jsxs)("form", {
        onSubmit: $,
        className: iK.DA,
        children: [
            M.length > 0
                ? (0, r.jsx)("div", {
                      className: iK.lN,
                      children: M.map((e) => (0, r.jsx)(iW, { draft: e, onRemove: L }, e.localId)),
                  })
                : null,
            (0, r.jsx)("span", { className: `${iK.wg} ${iK.LP}${er}`, style: ei, "aria-hidden": !0 }),
            (0, r.jsx)("span", { className: `${iK.wg} ${iK.L3}${er}`, style: ei, "aria-hidden": !0 }),
            (0, r.jsxs)("div", {
                className: iK.VA,
                ref: X,
                children: [
                    (0, r.jsx)("input", {
                        ref: P,
                        type: "file",
                        multiple: !0,
                        onChange: K,
                        className: iK.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    (0, r.jsx)(en.Y, {
                        targetElementRef: Y,
                        position: "top",
                        align: "left",
                        animation: en.Y.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, r.jsx)(el.W, {
                                "data-menu-migrated": !0,
                                navId: "conjure-composer-attach",
                                "aria-label": em.intl.string(em.t.d56gCa),
                                onClose: t,
                                onSelect: t,
                                children: (0, r.jsxs)(ea.rX, {
                                    children: [
                                        iX.map((e) =>
                                            (0, r.jsx)(
                                                ea.Dr,
                                                {
                                                    id: e.id,
                                                    label: em.intl.string(e.label),
                                                    iconLeft: e.icon,
                                                    leadingAccessory: { type: "icon", icon: e.icon },
                                                    action: () => J(e.accept),
                                                },
                                                e.id,
                                            ),
                                        ),
                                        null != m
                                            ? (0, r.jsx)(ea.Dr, {
                                                  id: "import-project",
                                                  label: em.intl.string(ec.default["p/k5i7"]),
                                                  iconLeft: iD.q,
                                                  leadingAccessory: { type: "icon", icon: iD.q },
                                                  action: m,
                                              })
                                            : null,
                                    ],
                                }),
                            });
                        },
                        children: (e, t) => {
                            let { isShown: l } = t;
                            return (0, r.jsx)("button", {
                                ...e,
                                ref: Y,
                                type: "button",
                                className: `${iK.Y0} ${iK.nu}`,
                                disabled: !n,
                                "aria-label": em.intl.string(em.t.d56gCa),
                                "aria-haspopup": "menu",
                                "aria-expanded": l,
                                children: (0, r.jsx)(iO.PlusLargeIcon, {
                                    size: "refresh_sm",
                                    color: "currentColor",
                                    className: iK.Qu,
                                }),
                            });
                        },
                    }),
                    eg
                        ? (0, r.jsx)("div", {
                              ref: ed,
                              className: iK.ar,
                              "aria-hidden": "true",
                              children: (0, r.jsx)(iQ, { text: ep, offering: eh && null == G, typed: null != G }),
                          })
                        : null,
                    (0, r.jsx)(lw.y, {
                        value: y,
                        onChange: (e) => w(e.currentTarget.value),
                        onKeyDown: V,
                        onPaste: W,
                        placeholder: eg ? "" : es,
                        disabled: !n,
                        "aria-label": em.intl.string(ec.default.ldNl9x),
                        "aria-describedby": eg ? ef : void 0,
                        rows: 1,
                        className: iK.jp,
                    }),
                    eg ? (0, r.jsx)(A.A, { id: ef, children: es }) : null,
                    (0, r.jsx)("div", {
                        className: iK.Sz,
                        children:
                            a && null != u
                                ? (0, r.jsx)(C.m, {
                                      text: em.intl.string(ec.default.wiguT0),
                                      ariaHidden: !0,
                                      children: (0, r.jsx)("button", {
                                          type: "button",
                                          className: `${iK.Y0} ${iK.$E}`,
                                          disabled: I,
                                          onClick: B,
                                          "aria-label": em.intl.string(ec.default.wiguT0),
                                          children: (0, r.jsx)(am.w, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : b?.tierSettings != null && null != v
                                  ? (0, r.jsx)(ty, {
                                        settings: b.tierSettings,
                                        tiers: b.tiers,
                                        choices: b.choices,
                                        disabled: !n,
                                        onChange: v,
                                        className: `${iK.Y0} ${iK.$E}`,
                                        icon: (0, r.jsx)(tm.R, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: "currentColor",
                                        }),
                                    })
                                  : null,
                    }),
                    E
                        ? (0, r.jsxs)("div", {
                              className: iK.fF,
                              children: [
                                  (0, r.jsx)("div", { className: iK.MT }),
                                  (0, r.jsx)("button", {
                                      type: "submit",
                                      className: iK.rt,
                                      disabled: !z,
                                      "aria-label": em.intl.string(ec.default.rxW2cl),
                                      children: (0, r.jsx)(iF.SendMessageIcon, {
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
let i0 = 1500,
    i2 = [
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
function i1(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = i1.mirror;
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
                (i1.mirror = t),
                t
            );
        })(),
        n = window.getComputedStyle(e);
    for (let e of i2) t.style.setProperty(e, n.getPropertyValue(e));
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let l = document.createElement("span");
    ((l.textContent = "\u200B"), t.appendChild(l));
    let a = l.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + a - e.scrollLeft);
}
i1.mirror = null;
var i6 = n(155899),
    i9 = n(148087);
let i3 = [6e4, 18e4, 6e5],
    i5 = [
        {
            key: "outdated",
            priority: 2,
            idleDelayMs: 6e4,
            backoffDelaysMs: i3,
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
                    (0, tX.BL)(t) &&
                    !(null != n.publishCta && ic(l))
                );
            },
        },
    ];
function i4(e, t) {
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
let i7 = new Map();
function i8(e) {
    let { projectId: t, notice: n } = e;
    return "outdated" === n ? (0, r.jsx)(rt, { projectId: t }) : (0, r.jsx)(re, { projectId: t, notice: n });
}
function re(e) {
    let { projectId: t, notice: n } = e,
        l = s.useContext(nU),
        a = (0, f.bG)([eR.Ay, nM.A], () => {
            let e = eR.Ay.getProject(t);
            return null == e ? "" : (nM.A.getApplication(e.application_id)?.name ?? e.name);
        }),
        i = s.useCallback(() => {
            null != l &&
                (function (e, t) {
                    let n = n$(e, t.guildId);
                    if (null == n) return;
                    let l = nO({
                        ...n.input,
                        status: null == n.input.status ? null : { ...n.input.status, state: "up_to_date" },
                    })?.destination;
                    null != l && nB(n, l, t.platform).catch(() => {});
                })(t, l);
        }, [l, t]);
    return (0, r.jsx)(w.E, {
        variant: "text-md/normal",
        color: "text-default",
        children: em.intl.format(
            (function (e) {
                if (!e.update) return ec.default.MOrR29;
                switch (e.surface) {
                    case "bot":
                        return ec.default.zfpeIL;
                    case "widget":
                        return ec.default.DxCfTh;
                    case "automod":
                        return ec.default["8ytGC3"];
                    case "activity":
                    case null:
                        return ec.default.WSmpBT;
                }
            })(n),
            { name: a, onOpen: i },
        ),
    });
}
function rt(e) {
    let { projectId: t } = e,
        n = nQ(t);
    return null == n
        ? null
        : (0, r.jsx)(w.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: em.intl.format(ec.default.X8tdbS, {
                  action: n.label,
                  onUpdate: () => {
                      (i7.get(t)?.forEach((e) => e()), n.run("outdated_notice"));
                  },
              }),
          });
}
var rn = n(248798);
function rl(e, t) {
    e.style.height = `${t.offsetHeight}px`;
}
function ra(e) {
    let { reminder: t, renderReminder: n } = e,
        l = (function (e) {
            let t,
                [n, l] = s.useState([]);
            (n.find((e) => !e.leaving)?.key ?? null) !== e &&
                l(
                    ((t = n.filter((t) => t.key !== e).map((e) => ({ ...e, leaving: !0 }))),
                    null != e ? [...t, { key: e, leaving: !1 }] : t),
                );
            let a = n.some((e) => e.leaving);
            return (
                s.useEffect(() => {
                    if (!a) return;
                    let e = setTimeout(() => l((e) => e.filter((e) => !e.leaving)), 180);
                    return () => clearTimeout(e);
                }, [a, n]),
                n
            );
        })(t),
        a = l.find((e) => !e.leaving)?.key ?? null,
        i = null == a && l.length > 0,
        o = s.useRef(null),
        d = s.useRef(null);
    return (
        s.useLayoutEffect(() => {
            let e = o.current;
            if (null == e || i) return;
            e.getBoundingClientRect();
            let t = d.current;
            if (null == t) {
                e.style.height = "0px";
                return;
            }
            rl(e, t);
            let n = new ResizeObserver(() => rl(e, t));
            return (n.observe(t), () => n.disconnect());
        }, [a, i]),
        (0, r.jsx)("div", {
            ref: o,
            className: u()(rn.NI, { [rn.Jg]: null == a }),
            "aria-live": "polite",
            children: (0, r.jsx)("div", {
                className: rn.t$,
                children: l.map((e) =>
                    (0, r.jsx)(
                        "div",
                        {
                            ref: e.leaving ? void 0 : d,
                            "aria-hidden": e.leaving || void 0,
                            className: u()(rn.qd, e.leaving ? rn.cu : rn.We),
                            children: n(e.key),
                        },
                        e.key,
                    ),
                ),
            }),
        })
    );
}
var ri = n(320095),
    rr = n(963852),
    rs = n(521981),
    ro = n(763754),
    ru = n(491182),
    rd = n(438729),
    rc = n(622868),
    rm = n(448368),
    rf = n(837528),
    rh = n(439762),
    rp = n(715628),
    rg = n(752636),
    rx = n(9842),
    rb = n(589022),
    rv = n(95701),
    ry = n(994500),
    rj = n(967198),
    rw = n(7584);
let rk = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function rC(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function rA(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function rN(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let a = rA(e, t),
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
    if (rC(a) && rC(i)) {
        let n = 0,
            l = t;
        for (; n < 32 && rC(rA(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function rS(e, t) {
    let { streaming: n } = t,
        l = (0, f.bG)([iz.Ay], () => iz.Ay.useReducedMotion),
        a = n && !l,
        [i, r] = s.useState(() => ({ target: e, length: e.length })),
        o = i;
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
                      for (; i > 0 && rN(t, i);) i--;
                      return i;
                  })(o.target, e, o.length)
                : e.length,
        }),
        a || o.length === e.length || (o = { target: e, length: e.length }),
        o !== i && r(o));
    let u = a && o.length < e.length,
        d = s.useRef(o);
    s.useLayoutEffect(() => {
        d.current = o;
    });
    let c = s.useRef(0),
        m = s.useRef(0);
    (s.useEffect(() => {
        if (u)
            return (
                (m.current = 0),
                (c.current = requestAnimationFrame(function e(t) {
                    let n = 0 === m.current ? 32 : t - m.current;
                    if (n >= 32) {
                        m.current = t;
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
                                    for (; l > t + 1 && n - l < 12 && rk.has(e.charAt(l - 1));) l--;
                                    return rk.has(e.charAt(l - 1)) ? n : l;
                                })(t, a, Math.min(t.length, a + r));
                                let o = s;
                                for (; o < t.length && o - s < 32 && rN(t, o);) o++;
                                return o;
                            })({ target: e.target, revealed: e.length, elapsedMs: n });
                        l !== e.length && r({ target: e.target, length: l });
                    }
                    c.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(c.current)
            );
    }, [u]),
        s.useEffect(() => {
            if (u)
                return (
                    e(),
                    document.addEventListener("visibilitychange", e),
                    () => document.removeEventListener("visibilitychange", e)
                );
            function e() {
                if ("hidden" !== document.visibilityState) return;
                let { target: e } = d.current;
                r({ target: e, length: e.length });
            }
        }, [u]));
    let h = Math.min(o.length, e.length);
    return { text: h >= e.length ? e : e.slice(0, h), revealing: a && h < e.length };
}
var rE = n(565645),
    rI = n(981879);
function rT(e) {
    let { emoji: t, label: n } = e;
    return (0, r.jsx)("div", {
        className: rI.H,
        children: (0, r.jsx)(rE.A, { emojiName: t, alt: n, size: "reaction" }),
    });
}
var rP = n(194085),
    rM = n(734495),
    r_ = n(180227);
function rR(e) {
    let { message: t, onClose: n } = e,
        l = (0, rM.A)(t);
    return (0, r.jsx)(el.W, {
        navId: "conjure-message-actions",
        "aria-label": em.intl.string(em.t.Lv7LxN),
        onClose: n,
        onSelect: n,
        children: (0, r.jsx)(ea.rX, { children: l }),
    });
}
function rL(e) {
    let { groupStart: t, renderMenu: n } = e,
        [l, a] = s.useState(!1),
        i = s.useRef(null),
        o = s.useCallback(() => a((e) => !e), []),
        d = s.useCallback(() => a(!1), []);
    return (0, r.jsx)("div", {
        className: u()(r_.QE, { [r_.Rn]: t, [r_.vg]: l }),
        children: (0, r.jsx)(rP.Ay, {
            children: (0, r.jsx)(en.Y, {
                targetElementRef: i,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return n(t);
                },
                shouldShow: l,
                onRequestClose: d,
                position: "left",
                align: "top",
                animation: en.Y.Animation.NONE,
                children: (e, t) => {
                    let { onClick: n, ...l } = e,
                        { isShown: a } = t;
                    return (0, r.jsx)(rP.qv, {
                        ref: i,
                        label: em.intl.string(em.t["UKOtz+"]),
                        icon: t8.MoreHorizontalIcon,
                        selected: a,
                        onClick: o,
                        ...l,
                    });
                },
            }),
        }),
    });
}
function rD(e) {
    let { message: t, groupStart: n } = e,
        l = s.useCallback((e) => (0, r.jsx)(rR, { message: t, onClose: e }), [t]);
    return null == (0, rM.A)(t) ? null : (0, r.jsx)(rL, { groupStart: n, renderMenu: l });
}
let rO = (0, rv.createChannelRecord)({ id: "conjure-builder", type: ej.rbe.DM }),
    rF = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function rz(e, t) {
    return null == e ? e : (0, r.jsx)("div", { className: u()(r_.Yq, { [r_.x1]: t }), children: e });
}
function rG(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function rU(e, t, n) {
    let { content: l } = (0, rh.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        a = s.useMemo(() => ({ message: e, channel: rO, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, r.jsx)(rd.Ay, { className: n, message: e, content: l, compact: !1 })
          : (0, rp.A)(a, l);
}
function rq(e) {
    let [t, n] = s.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = s.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        a = s.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        i = (0, rf.m)(e, rO, t.usernameProfile, l),
        o = (0, rf.Jo)(t.avatarProfile, l),
        u = (0, f.bG)([rj.A], () => rj.A.getGuildId()),
        d = (0, f.bG)([tW.default], () => tW.default.getCurrentUser()),
        c = s.useCallback(
            (t) => {
                let n = tW.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, r.jsx)(rb.A, { ...t, user: n, currentUser: d, guildId: u ?? void 0 });
            },
            [d, u, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: o,
        onClickUsername: i,
        onPopoutRequestClose: a,
        renderPopout: c,
        guildId: u ?? void 0,
    };
}
function r$(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: a } = e,
        i = s.useMemo(() => {
            let e = "" !== n.content ? (0, rs.Ay)(n, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == l
                ? e
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)("span", {
                              className: r_.GV,
                              children: [
                                  (0, r.jsx)(E.x, {
                                      className: r_.Rj,
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
        { isReplyAuthorBlocked: o, isReplyAuthorIgnored: u } = (0, f.cf)(
            [ry.A],
            () => ({
                isReplyAuthorBlocked: ry.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: ry.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        d = (0, ro.X4)(n),
        c = (0, ro.X4)(t),
        m = rq(n);
    return (0, r.jsx)(rm.A, {
        repliedAuthor: d,
        baseAuthor: c,
        baseMessage: t,
        channel: rO,
        referencedMessage: { state: rx.a.LOADED, message: n },
        content: i,
        compact: !1,
        isReplyAuthorBlocked: o,
        isReplyAuthorIgnored: u,
        isReplySpineClickable: null != a,
        showReplySpine: !0,
        renderPopout: m.renderPopout,
        showAvatarPopout: m.showAvatarPopout,
        showUsernamePopout: m.showUsernamePopout,
        onClickAvatar: m.onClickAvatar,
        onClickUsername: m.onClickUsername,
        onClickReply: a,
        onPopoutRequestClose: m.onPopoutRequestClose,
    });
}
function rB(e) {
    let { message: t, author: n } = e,
        l = rq(t);
    return (0, r.jsx)(rc.Ay, {
        message: t,
        channel: rO,
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
function rH(e) {
    let { content: t, createdAt: n, userId: l, accessories: a, agentReaction: i, groupStart: o } = e;
    s.useEffect(() => t0(l), [l]);
    let u = (0, f.bG)(
            [tW.default],
            () => tZ(l, null != l ? tW.default.getUser(l) : null, tW.default.getCurrentUser()),
            [l],
        ),
        d = s.useMemo(() => (0, ro.FT)(u, null), [u]),
        c = s.useMemo(() => e5(t), [t]),
        m = c?.body ?? t,
        h = s.useMemo(() => {
            if (null == u) return null;
            let e = (0, rr.Ay)({ channelId: rO.id, content: m, author: u });
            return (0, ri.rh)({ ...e, timestamp: rG(n, e.timestamp), state: ej.cmJ.SENT });
        }, [m, u, n]),
        p = (function (e) {
            if (null == e || "" === e) return null;
            let t = rw.Ay.convertSurrogateToName(e, !1);
            return "" === t ? null : em.intl.formatToPlainString(ec.default.lxXLho, { emojiName: t });
        })(i);
    return null == h
        ? null
        : (0, r.jsx)(rV, {
              message: h,
              author: d,
              content: m,
              selected: c?.label,
              accessories:
                  null != i && null != p
                      ? (0, r.jsxs)(r.Fragment, { children: [a, (0, r.jsx)(rT, { emoji: i, label: p })] })
                      : a,
              groupStart: o,
          });
}
function rV(e) {
    let { message: t, author: n, content: l, selected: a, accessories: i, groupStart: s = !0 } = e,
        o = rU(t, l);
    return (0, r.jsx)(ru.A, {
        className: r_.yE,
        author: n,
        childrenHeader: s ? (0, r.jsx)(rB, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == a
                ? o
                : (0, r.jsxs)("div", {
                      className: r_.zq,
                      children: [
                          (0, r.jsxs)("span", {
                              className: r_.GV,
                              children: [
                                  (0, r.jsx)(E.x, {
                                      className: r_.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  a,
                              ],
                          }),
                          (0, r.jsx)("span", { className: r_.WO, children: o }),
                      ],
                  }),
        childrenAccessories: rz(i, "" !== l),
        childrenButtons: (0, r.jsx)(rD, { message: t, groupStart: s }),
    });
}
function rW(e) {
    let {
            content: t,
            createdAt: n,
            accessories: l,
            replyTo: a,
            onJumpToReplied: i,
            groupStart: o = !0,
            streaming: u = !1,
            buttons: d,
        } = e,
        { text: c, revealing: m } = rS(t, { streaming: u }),
        h = s.useMemo(() => (0, ro.FT)(null, null), []),
        p = s.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        g = a?.userId,
        x = (0, f.bG)(
            [tW.default],
            () => tZ(g, null != g ? tW.default.getUser(g) : null, tW.default.getCurrentUser()),
            [g],
        ),
        b = s.useMemo(() => (null == a ? null : e5(a.content)), [a]),
        v = s.useMemo(() => {
            if (null == a || null == x) return null;
            let e = (0, rr.Ay)({ channelId: rO.id, content: b?.body ?? a.content, author: x });
            return (0, ri.rh)({ ...e, id: a.id, timestamp: rG(a.createdAt, e.timestamp), state: ej.cmJ.SENT });
        }, [a, b, x]),
        y = s.useMemo(() => (null == a ? void 0 : { channel_id: rO.id, message_id: a.id }), [a]),
        j = s.useMemo(() => {
            let e = (0, rr.Ay)({ channelId: rO.id, content: c, author: rF });
            return (0, ri.rh)({
                ...e,
                timestamp: rG(n, e.timestamp),
                state: ej.cmJ.SENT,
                ...(null != y ? { type: ej.lAJ.REPLY, message_reference: y } : {}),
            });
        }, [c, n, y]),
        w = rU(j, c, r_.OS);
    return (0, r.jsxs)("div", {
        className: r_.$4,
        "data-replying": null != v ? "true" : void 0,
        "data-conjure-revealing": m ? "true" : void 0,
        children: [
            (0, r.jsx)(ru.A, {
                className: r_.yE,
                author: p,
                childrenRepliedMessage:
                    null == v
                        ? null
                        : (0, r.jsx)(r$, { baseMessage: j, referenced: v, selected: b?.label, onJumpToReplied: i }),
                childrenHeader: (0, rg.A)({ message: j, channel: rO, author: p, guildId: void 0, isGroupStart: o }),
                childrenMessageContent: w,
                childrenAccessories: rz(l, "" !== c),
                disableInteraction: !0,
            }),
            d,
            o
                ? (0, r.jsx)("span", {
                      className: r_.st,
                      "aria-hidden": "true",
                      children: (0, r.jsx)(aT.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
let rK = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i;
var rX = n(744898);
function rY(e) {
    let { onSelect: t, onClose: n = G.Z_, onRestoreVersion: l } = e;
    return (0, r.jsx)(el.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": em.intl.string(em.t.ogxXGq),
        onSelect: t,
        children: (0, r.jsx)(ea.rX, {
            children: (0, r.jsx)(ea.Dr, {
                id: "restore-version",
                label: em.intl.string(ec.default.H8Jfhu),
                icon: rX.e,
                action: l,
            }),
        }),
    });
}
var rJ = n(986109);
function rQ(e, t) {
    (0, i6.F)({ onConfirm: () => t(e) });
}
function rZ(e) {
    let {
            projectId: t,
            messages: n,
            emptyState: l,
            ref: a,
            onPickIdea: i,
            onAskForIdeas: o,
            draftHasText: d,
            onApprovePlan: c,
            floatingSettingsMessageId: m,
            onRestoreVersion: h,
        } = e,
        p = s.useRef(null),
        g = s.useCallback(
            (e) => {
                ((p.current = e), "function" == typeof a ? a(e) : null != a && (a.current = e));
            },
            [a],
        ),
        [x, b] = s.useState(null),
        v = s.useRef(0);
    s.useEffect(() => () => window.clearTimeout(v.current), []);
    let y = s.useCallback((e) => {
            let t = p.current?.querySelector(`[data-conjure-message="${e}"]`);
            (t?.scrollIntoView({ block: "center", behavior: "smooth" }),
                b(e),
                window.clearTimeout(v.current),
                (v.current = window.setTimeout(() => b(null), 1600)));
        }, []),
        j = (0, f.bG)([eR.Ay], () => eR.Ay.getPublishStatus(t)?.state ?? null),
        k = s.useMemo(() => {
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
                    let e = !(0, tX.BL)(t),
                        a = ag({
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
                        if (null != c.prose && rK.test(c.prose.content)) d = !0;
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
                    let c = rK.test(t.content ?? "");
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
                })(n, j)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => (null == t.publishCta || t.id === e ? t : { ...t, publishCta: null }))),
            );
        }, [n, j]),
        C = n.at(-1),
        A = (function (e, t, n) {
            var l;
            let a = nQ(e),
                i = (0, i9.A)(),
                r = (function (e) {
                    for (let t = e.length - 1; t >= 0; t--) {
                        let n = e[t];
                        if ("publish_notice" !== n.kind) {
                            if ("user" === n.role) return null;
                            if ((0, tX.BL)(n)) return n;
                            if (!(0, tX.B0)(e, t)) break;
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
                    visible: i,
                },
                [d, c] = s.useState(() => i4(u, Date.now())),
                m = (function (e, t, n) {
                    if (e.projectId !== t.projectId) return i4(t, n());
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
                            let t = Math.min(e.outdatedBackoff + 1, i3.length - 1);
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
                    null == r ||
                    null != (l = r).awaitingUser ||
                    null != l.secretRequest ||
                    null != l.settingsRequest ||
                    (l.intake?.questions.length ?? 0) > 0
                        ? null
                        : { turn: r, publish: a, draftHasText: n, draftTyped: m.draftTyped && n },
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
                    i5.map((e) => ({
                        ...e,
                        idleDelayMs: e.backoffDelaysMs?.[m.outdatedBackoff] ?? e.idleDelayMs,
                        eligible: null != f && e.eligible(f),
                    })),
                    m,
                );
            return (
                "outdated" !== h || m.outdatedShown ? m !== d && c(m) : c({ ...m, outdatedShown: !0 }),
                s.useEffect(() => {
                    function t() {
                        let e = Date.now();
                        c((t) => ({ ...t, now: e, lastActivityAt: e }));
                    }
                    let n = i7.get(e) ?? new Set();
                    return (
                        i7.set(e, n),
                        n.add(t),
                        () => {
                            (n.delete(t), 0 === n.size && i7.delete(e));
                        }
                    );
                }, [e]),
                s.useEffect(() => {
                    if (null == p) return;
                    let e = setTimeout(() => c((e) => ({ ...e, now: Date.now() })), Math.max(0, p - Date.now()));
                    return () => clearTimeout(e);
                }, [p, m.now]),
                h
            );
        })(t, n, !0 === d),
        S = s.useCallback(
            (e) => {
                switch (e) {
                    case "outdated":
                        return (0, r.jsx)(rW, {
                            groupStart: !1,
                            content: "",
                            accessories: (0, r.jsx)(i8, { projectId: t, notice: "outdated" }),
                        });
                    case "ideas":
                        return (0, r.jsx)("div", {
                            className: rJ.u$,
                            children: (0, r.jsx)(rW, {
                                content: em.intl.string(ec.default.s96AWB),
                                accessories: (0, r.jsx)(iv, { onAsk: o }),
                            }),
                        });
                }
            },
            [t, o],
        ),
        E = s.useMemo(
            () =>
                (function (e) {
                    if (e.at(-1)?.role !== "assistant") return null;
                    for (let t = e.length - 1; t >= 0; t--) {
                        let n = e[t];
                        if ("assistant" === n.role) {
                            if (!(0, tX.BL)(n) || "plan_implemented" === n.kind) return null;
                            if (null != n.proposal) return n.render_id;
                        }
                    }
                    return null;
                })(n),
            [n],
        ),
        I = s.useMemo(
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
            (C?.role !== "assistant" || null == C.awaitingUser || null == C.secretRequest
                ? null
                : (0, tX.BL)(C)
                  ? C.awaitingUser
                  : null) ?? void 0,
        P = (0, f.bG)([er.Ay], () => er.Ay.getSettings(t)?.secrets, [t]),
        M = s.useMemo(
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
                                        t === em.intl.string(ec.default.UGqnoV) ||
                                        t === em.intl.string(ec.default.sMQt5O)
                                    );
                                })(s);
                            continue;
                        }
                        let o = s.secretRequest?.fields ?? [];
                        if (0 === o.length || !(0, tX.BL)(s)) continue;
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
            return (0, r.jsx)("ol", {
                ref: a,
                className: u()(rJ.x7, rJ.jH),
                "aria-busy": !0,
                children: (0, r.jsx)("li", { className: rJ.Ub, children: (0, r.jsx)(N.y, {}) }),
            });
        let e = "unavailable" === l ? ec.default.Td4Sf4 : ec.default.V1QiNz;
        return (0, r.jsx)("ol", {
            ref: a,
            className: rJ.x7,
            children: (0, r.jsx)(r0, { role: "assistant", children: (0, r.jsx)(rW, { content: em.intl.string(e) }) }),
        });
    }
    return (0, r.jsxs)("ol", {
        ref: g,
        className: rJ.x7,
        children: [
            k.map((e) => {
                let l = e.message;
                switch (e.kind) {
                    case "user": {
                        let n = null != l.attachments && l.attachments.length > 0 ? l.attachments : null;
                        return (0, r.jsx)(
                            r0,
                            {
                                role: "user",
                                anchorId: l.id,
                                highlighted: x === l.id,
                                continuation: !e.groupStart,
                                children: (0, r.jsx)(rH, {
                                    groupStart: e.groupStart,
                                    content: l.content,
                                    createdAt: l.created_at,
                                    userId: l.user_id,
                                    agentReaction: l.agentReaction,
                                    accessories:
                                        null != n ? (0, r.jsx)(iA.A, { projectId: t, attachments: n }) : void 0,
                                }),
                            },
                            e.key,
                        );
                    }
                    case "prose":
                        return (0, r.jsx)(
                            r0,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                children: (0, r.jsx)(rW, {
                                    groupStart: e.groupStart,
                                    content: e.content,
                                    streaming: e.streaming,
                                    createdAt: l.created_at,
                                    accessories:
                                        e.hostsAttachments && null != l.attachments
                                            ? (0, r.jsx)(iA.A, { projectId: t, attachments: l.attachments })
                                            : void 0,
                                }),
                            },
                            e.key,
                        );
                    case "activity":
                        return (0, r.jsx)(
                            r0,
                            {
                                role: "assistant",
                                children: (0, r.jsx)(iT, {
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
                        return (0, r.jsx)(
                            r0,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                children: (0, r.jsx)(rW, {
                                    groupStart: e.groupStart,
                                    content: null == l.publishNotice ? l.content : "",
                                    createdAt: l.created_at,
                                    accessories:
                                        null == l.publishNotice
                                            ? void 0
                                            : (0, r.jsx)(i8, { projectId: t, notice: l.publishNotice }),
                                }),
                            },
                            e.key,
                        );
                    case "interrupted":
                        return (0, r.jsx)(
                            r0,
                            {
                                role: "assistant",
                                children: (0, r.jsx)(iT, { projectId: t, interrupted: !0, steps: l.steps }),
                            },
                            e.key,
                        );
                    case "legacyTodos":
                        return (0, r.jsx)(
                            r0,
                            {
                                role: "assistant",
                                children: (0, r.jsx)(iT, {
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
                        let a =
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
                            s = null != a && null != h ? () => rQ(a, h) : void 0,
                            o = l.restoreProposal;
                        return (0, r.jsx)(
                            r0,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                onContextMenu:
                                    null != s
                                        ? (e) => {
                                              (0, G.jA)(e, (e) => (0, r.jsx)(rY, { ...e, onRestoreVersion: s }));
                                          }
                                        : void 0,
                                children: (0, r.jsx)(rW, {
                                    groupStart: e.groupStart,
                                    buttons:
                                        null != s
                                            ? (0, r.jsx)(rL, {
                                                  groupStart: e.groupStart,
                                                  renderMenu: (e) =>
                                                      (0, r.jsx)(rY, { onClose: e, onSelect: e, onRestoreVersion: s }),
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
                                    accessories: (0, r.jsx)(iP, {
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
                                        secretRequestAwaiting: l === C ? T : void 0,
                                        secretRequestStatus: M.get(l.render_id),
                                        settingsRequest: e.active || l.id === m ? void 0 : l.settingsRequest,
                                        publishCta: e.active ? null : l.publishCta,
                                        onPickIdea: i,
                                        onApprovePlan: l.render_id === E ? c : void 0,
                                        restoreProposal: o,
                                        onRestoreProposal:
                                            null != o && null != h && l === C
                                                ? () =>
                                                      rQ(
                                                          {
                                                              sha: o.sha,
                                                              authorName: "",
                                                              authorEmail: "",
                                                              authoredAt: o.authored_at,
                                                              subject: o.subject,
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
                ? (0, r.jsx)(r0, {
                      role: "assistant",
                      continuation: !0,
                      children: (0, r.jsx)(rW, {
                          groupStart: !1,
                          content: "",
                          accessories: (0, r.jsx)(w.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: em.intl.string(ec.default.YR8A2v),
                          }),
                      }),
                  })
                : null,
            (0, r.jsx)("li", {
                role: "none",
                className: rJ.q3,
                children: (0, r.jsx)(ra, { reminder: A, renderReminder: S }),
            }),
        ],
    });
}
function r0(e) {
    let { role: t, children: n, anchorId: l, highlighted: a = !1, continuation: i = !1, onContextMenu: s } = e;
    return (0, r.jsx)("li", {
        onContextMenu: s,
        "data-role": t,
        "data-conjure-message": l,
        className: u()(rJ.xk, { [rJ.Qo]: a, [rJ.q3]: i }),
        children: n,
    });
}
let r2 = [ec.default["AX+5lk"], ec.default.VAU6A7, ec.default["1emysd"], ec.default.EXHX3L, ec.default.ChslmX];
function r1(e) {
    return r2.some((t) => em.intl.string(t) === e);
}
function r6(e) {
    switch (e) {
        case "connecting":
            return em.intl.string(ec.default["ECl+Dx"]);
        case "closed":
            return em.intl.string(ec.default.mQZSp1);
        case "failed":
            return em.intl.string(ec.default.xzJSZ6);
    }
}
var r9 = n(823376),
    r3 = n(187447);
function r5(e) {
    let { activity: t, id: n } = e,
        { text: l, revealing: a } = rS(t?.text ?? "", { streaming: null != t && "end" !== t.phase }),
        i = s.useRef(null);
    return (
        s.useLayoutEffect(() => {
            i.current?.scrollToBottom();
        }, [l]),
        (0, r.jsx)("div", {
            id: n,
            role: "tooltip",
            className: r3.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, r.jsx)(n5.Ch, {
                ref: i,
                className: r3.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, r.jsx)("div", {
                    className: u()(iE.PT, r3.bb),
                    "data-conjure-revealing": a ? "true" : void 0,
                    children: af.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var r4 = n(53659);
function r7(e) {
    let {
            activity: t,
            compacting: n = !1,
            restoring: l = !1,
            recalling: a = !1,
            controlling: i = !1,
            spoken: o,
            onSpokenChange: d,
        } = e,
        c = s.useRef(null),
        m = s.useId(),
        [f, h] = s.useState(null),
        p = (function (e) {
            let { activity: t, compacting: n = !1, restoring: l = !1, recalling: a = !1, controlling: i = !1 } = e,
                r = null != t && "end" !== t.phase;
            return i
                ? ec.default["1jqaAc"]
                : l
                  ? ec.default.M4KI5F
                  : a
                    ? r2[0]
                    : n
                      ? ec.default.xnCAaP
                      : r
                        ? ec.default.izrt52
                        : ec.default.L9EDub;
        })({ activity: t, compacting: n, restoring: l, recalling: a, controlling: i }),
        g = em.intl.string(p),
        x = p === r2["0"],
        [b, v] = s.useState(o ?? g),
        y = s.useRef(g);
    (s.useEffect(() => {
        y.current = g;
    }, [g]),
        s.useEffect(() => {
            d?.(b);
        }, [b, d]));
    let j = s.useRef(null),
        w = s.useRef(b);
    s.useEffect(() => {
        w.current = b;
    }, [b]);
    let C = s.useRef(x),
        A = s.useRef(0);
    (s.useEffect(() => {
        ((C.current = x), !x && r1(w.current) && v(y.current));
    }, [x]),
        s.useEffect(() => {
            let e = 0,
                t = 0;
            function n() {
                if (C.current) {
                    var e;
                    ((A.current = r1(w.current) ? A.current + 1 : 0),
                        v(((e = A.current), em.intl.string(r2[e % r2.length]))));
                } else y.current !== w.current ? v(y.current) : j.current?.play();
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
                (j.current?.stop(), a());
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
        I = s.useCallback(() => {
            N && null != S && h((e) => (e === S ? null : S));
        }, [N, S]),
        T = s.useCallback(() => h(null), []);
    return (0, r.jsx)(en.Y, {
        targetElementRef: c,
        position: "top",
        align: "left",
        shouldShow: E,
        onRequestClose: T,
        renderPopout: () => (0, r.jsx)(r5, { id: m, activity: t }),
        children: () =>
            (0, r.jsxs)(k.D, {
                innerRef: c,
                className: u()(r4.hF, N && r4.Xd),
                "aria-label": em.intl.string(l ? ec.default.qqlUiW : x ? r2["0"] : ec.default["Uuj/gh"]),
                "aria-expanded": E,
                "aria-describedby": E ? m : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": em.intl.string(p),
                onClick: I,
                children: [
                    (0, r.jsx)("span", {
                        className: r4.bl,
                        children: (0, r.jsx)(r9.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, r.jsx)("span", {
                        className: r4.xu,
                        "aria-hidden": !!i || !!x || void 0,
                        children: (0, r.jsx)(eU.o, {
                            ref: j,
                            text: b,
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            duration: 1e3,
                            delay: null,
                            className: r4.yE,
                        }),
                    }),
                ],
            }),
    });
}
let r8 = { second: 1e3, minute: 6e4 };
function se(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = s.useState(() => Date.now());
    return (
        s.useEffect(() => {
            let n;
            if (null == e) return;
            let a = r8[t];
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
var st = n(719374);
function sn(e) {
    let { startedAt: t } = e,
        n = se(t);
    return (0, r.jsx)(w.E, {
        tag: "span",
        variant: "text-xs/medium",
        color: "text-muted",
        "aria-hidden": !0,
        className: st.$,
        "data-conjure-turn-timer": !0,
        children: (0, ah.C7)(n),
    });
}
function sl(e) {
    let { startedAt: t } = e,
        n = se(t, "minute");
    return (0, r.jsx)(A.A, { role: "timer", children: (0, ah.Us)(n) });
}
var sa = n(436804);
function si(e) {
    return e.toLocaleString();
}
function sr(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, r.jsxs)("div", {
        className: sa.Q$,
        children: [
            (0, r.jsxs)("div", {
                className: sa.mf,
                children: [
                    (0, r.jsx)(w.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, r.jsxs)(w.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [si((0, et.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, r.jsxs)(w.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    si(n.input_tokens),
                    " in \xb7 ",
                    si(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${si(n.cache_creation_input_tokens)} cache write \xb7 ${si(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function ss(e) {
    let { project: t } = e,
        n = (0, et.wU)(t.compaction),
        l = (0, et.wU)(t.classifier),
        a = (0, et.wV)(t.orchestrator, t.codegen),
        i = (0, et.wV)(a, n);
    return (0, r.jsxs)("div", {
        className: sa.si,
        role: "dialog",
        "aria-label": em.intl.string(ec.default.p5EGzq),
        children: [
            (0, r.jsx)("div", {
                className: sa.Q$,
                children: (0, r.jsxs)("div", {
                    className: sa.mf,
                    children: [
                        (0, r.jsxs)(w.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [si((0, et.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, r.jsxs)(w.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(sr, { label: em.intl.string(ec.default["9Sj3SX"]), usage: a }),
            (0, r.jsx)(sr, { label: em.intl.string(ec.default.ANCEo3), usage: n }),
            (0, r.jsx)(sr, { label: em.intl.string(ec.default.ugL6D4), usage: l, cached: !1 }),
            (0, r.jsxs)("div", {
                className: sa.mf,
                children: [
                    (0, r.jsx)(w.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: em.intl.string(ec.default["8OUg09"]),
                    }),
                    (0, r.jsx)(w.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, et.sj)(i) ? "\u2014" : `${Math.round(100 * (0, et.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function so(e) {
    let { project: t } = e,
        n = s.useRef(null);
    return (0, r.jsx)(en.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, r.jsx)(ss, { project: t }),
        children: (e) =>
            (0, r.jsx)(k.D, {
                innerRef: n,
                className: sa.Y$,
                "aria-label": em.intl.string(ec.default.Z96gxQ),
                ...e,
                children: (0, r.jsx)(aE.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var su = n(997421);
function sd(e) {
    let t,
        {
            projectId: n,
            thinking: l,
            turnStartedAt: a,
            restoring: i = !1,
            recalling: o = !1,
            thinkingActivity: u,
            compacting: d,
            projectUsage: c,
            connState: m,
        } = e,
        f = (0, tw.Zv)(n),
        [h, p] = s.useState(null),
        g = s.useCallback((e) => p(r1(e) ? null : e), []),
        x =
            null == c
                ? null
                : ((t = (0, et.a7)(c.cost_usd)),
                  {
                      text: em.intl.formatToPlainString(ec.default.gMuw5d, { runes: t.toLocaleString() }),
                      aria: em.intl.formatToPlainString(ec.default.Z4LvGa, { runes: t, turns: c.turns }),
                  }),
        b = l && null != a;
    return (0, r.jsxs)("div", {
        className: su.jf,
        children: [
            (0, r.jsxs)("div", {
                className: su.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    l || i || o || f
                        ? (0, r.jsx)(r7, {
                              activity: u,
                              compacting: d,
                              restoring: i,
                              recalling: o,
                              controlling: f,
                              spoken: h,
                              onSpokenChange: g,
                          })
                        : null,
                    b ? (0, r.jsx)(sn, { startedAt: a }) : null,
                ],
            }),
            b ? (0, r.jsx)(sl, { startedAt: a }) : null,
            null == c || null == x
                ? null
                : (0, r.jsxs)("span", {
                      className: su.BP,
                      children: [
                          (0, r.jsx)(w.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": x.aria,
                              children: x.text,
                          }),
                          (0, r.jsx)(so, { project: c }),
                      ],
                  }),
            "open" === m
                ? null
                : (0, r.jsx)(w.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === m ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": em.intl.formatToPlainString(ec.default["tCo+ZM"], { status: r6(m) }),
                      "data-conjure-conn": !0,
                      "data-state": m,
                      className: su.XF,
                      children: r6(m),
                  }),
        ],
    });
}
var sc = n(698638),
    sm = n(608711);
let sf = [em.intl.string(ec.default["9w+Chc"]), em.intl.string(ec.default.WAvmdq), em.intl.string(ec.default.SKsrzl)];
function sh(e) {
    var t;
    let { projectId: n, restoreState: l, onRestoreVersion: a, onImportProject: i } = e,
        o = (0, f.bG)([tX.Ay], () => tX.Ay.getMessages(n), [n]),
        u = (0, f.bG)([er.Ay], () => er.Ay.getConnState(n), [n]),
        d = (0, f.bG)([er.Ay], () => er.Ay.isChatStopped(n), [n]),
        c = (0, f.bG)([tX.Ay], () => tX.Ay.getProjectUsage(n), [n]),
        m = (0, f.bG)([tX.Ay], () => tX.Ay.getThinkingActivity(n), [n]),
        h = (0, f.bG)([tX.Ay], () => tX.Ay.isCompacting(n), [n]),
        p = (0, f.bG)([er.Ay], () => er.Ay.getModelSettings(n), [n]),
        g = s.useRef(null),
        x = s.useRef(null),
        b = s.useRef(null),
        v = s.useRef(!0),
        [y, j] = s.useState(!0);
    s.useEffect(() => {
        v.current && x.current?.scrollToBottom();
    }, [o]);
    let k = s.useCallback(() => {
            let e = g.current;
            if (null == e) return;
            let t = e.querySelector('[data-conjure-turn-status="true"][data-live="true"]'),
                n = e.querySelectorAll('[data-conjure-turn-status="true"]'),
                l = t ?? n[n.length - 1];
            if (null == l) return;
            let a = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
            l.scrollIntoView({ block: "center", behavior: a ? "auto" : "smooth" });
        }, []),
        C = s.useCallback(() => {
            let e = x.current;
            if (null == e) return;
            let t = e.getDistanceFromBottom();
            v.current = t < 32;
            let n = t > 1;
            j((e) => (!n === e ? e : !n));
        }, []);
    (s.useLayoutEffect(() => {
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
        s.useEffect(() => {
            (0, er.Hc)(n);
        }, [n]),
        (0, eI.E1)(n));
    let A = tr(n),
        N = s.useCallback(
            (e, t) => {
                (0, er.dv)(n, e, t);
            },
            [n],
        ),
        E = s.useCallback(
            (e, t) => {
                0 === A.annotations.length
                    ? N(e, t)
                    : (N(
                          (function (e) {
                              let { annotations: t, metaComment: n, context: l } = e,
                                  a = t.filter((e) => e0(e.comment)),
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
                                      i.push(`${t + 1}. ${e6(e.target)}`),
                                      i.push(
                                          `   Feedback: ${(n = e.comment.trim()).length <= 1e3 ? n : `${n.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let r = n.trim();
                              return ("" !== r && (i.push(""), i.push(`Note for the whole batch: ${r}`)), i.join("\n"));
                          })({ annotations: A.annotations, metaComment: e, context: A.context }),
                          t,
                      ),
                      tn(n));
            },
            [A, N, n],
        ),
        I = s.useCallback(() => (0, er.fu)(n), [n]),
        T = s.useCallback((e) => lX(n, e.implementation_prompt), [n]),
        [P, M] = (function (e) {
            let [t, n] = s.useState(() => ac(e)),
                [l, a] = s.useState(e),
                i = l !== e,
                r = i ? ac(e) : t;
            return (i && (a(e), n(r)), [r, n]);
        })(n),
        _ = s.useCallback(() => N(em.intl.string(ec.default["t5CN3+"])), [N]),
        R = s.useCallback((e, t, l) => lX(n, e, { clarificationAnswers: t, attachments: l }), [n]),
        L = s.useCallback((e) => (0, er.XZ)(n, e), [n]),
        D = s.useCallback((e) => (0, er.vX)(n, e), [n]),
        O = s.useCallback((e) => iH(n, "chat", Array.from(e), D), [n, D]),
        F = s.useCallback(() => lX(n, em.intl.string(ec.default.Zc7gML)), [n]),
        z = l?.status === "restoring",
        G = "open" === u && !d && !z,
        U = o[o.length - 1],
        q = null != U && "assistant" === U.role && null != U.proposal,
        [$, B] = s.useState(null),
        H = U?.clarification != null && U.clarification.id !== $ ? U.clarification : null,
        V = s.useCallback(() => {
            null != H && B(H.id);
        }, [H]),
        W = (0, f.bG)([er.Ay], () => er.Ay.getSettings(n), [n]),
        [K, X] = s.useState(null),
        Y =
            null != U &&
            "assistant" === U.role &&
            null != U.settingsRequest &&
            (0, tX.BL)(U) &&
            U.id !== K &&
            ((t = U.settingsRequest),
            null != W &&
                (t.keys ?? []).some((e) => {
                    let t = W.schema.find((t) => t.key === e);
                    if (null == t) return !1;
                    if ("secret" === t.type) return W.secrets.find((t) => t.name === e)?.set !== !0;
                    let n = W.values[e];
                    return null == n || "" === n;
                }))
                ? U
                : null,
        J = Y?.settingsRequest ?? null,
        Q = s.useCallback(() => {
            null != Y && X(Y.id);
        }, [Y]),
        Z = null != J,
        ee = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: (0, f.bG)([tX.Ay], () => tX.Ay.hasLoadedHistory(n), [n]),
            historyUnavailable: (0, f.bG)([tX.Ay], () => tX.Ay.isHistoryUnavailable(n), [n]),
            connState: u,
        }),
        et = "loading" === ee && 0 === o.length,
        en = s.useMemo(() => {
            let e = 0;
            for (let t = 0; t < n.length; t++) e = (31 * e + n.charCodeAt(t)) % 0x7fffffff;
            return sf[e % sf.length];
        }, [n]),
        el = q ? em.intl.string(ec.default.Zc7gML) : "greeting" === ee && 0 === o.length ? en : null,
        ea = s.useMemo(() => {
            for (let e = o.length - 1; e >= 0; e--) {
                let t = o[e];
                if ("assistant" === t.role && !(0, tX.BL)(t)) return t;
            }
        }, [o]),
        ei = null != ea,
        es =
            null != ea
                ? (function (e) {
                      let t = e.turn_id ?? e.steps.find((e) => null != e.turn_id)?.turn_id;
                      if (null != t && /^\d+$/.test(t)) {
                          let e = an.default.extractTimestamp(t);
                          if (Number.isFinite(e) && e > 0) return e;
                      }
                      return e.created_at;
                  })(ea)
                : void 0,
        eo = q && G ? F : void 0,
        eu = s.useCallback(() => lX(n, em.intl.string(ec.default.EMgIuY)), [n]),
        [ed, ef] = s.useState(null),
        [eh, ep] = s.useState(ei);
    (eh !== ei && (ep(ei), ei || ef(null)),
        s.useEffect(() => {
            if (!ei) return;
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
        }, [ei, ea?.steps]));
    let eg = s.useMemo(() => (null != ea ? (0, le.b)(ea.steps) : ""), [ea]),
        ex = s.useMemo(() => (null != ea ? ((0, n7.lt)(ea.steps) ?? ea.todos) : void 0), [ea]),
        eb = ea?.provisionalTodo,
        ev = null != ea && n8(ea),
        ey = s.useMemo(() => {
            var e;
            return null != ea ? ((e = ea.steps), iI((0, n7.GO)(e, { turnActive: !0 }).tasks)) : void 0;
        }, [ea]);
    return (0, r.jsxs)("section", {
        ref: g,
        "data-conjure-chat": !0,
        className: sm.TE,
        children: [
            G
                ? (0, r.jsx)(n4.A, {
                      title: em.intl.string(ec.default.gy7byi),
                      description: em.intl.string(ec.default["dkv/WO"]),
                      icons: sc.ir,
                      onDrop: O,
                  })
                : null,
            (0, r.jsx)(lv, {
                onJumpToActivity: k,
                line: eg,
                placement: ei && "top" === ed ? "top" : null,
                todos: ex,
                todosLive: ev,
                provisionalTodo: eb,
                agents: ey,
            }),
            (0, r.jsxs)("div", {
                className: sm.JX,
                children: [
                    (0, r.jsx)(n5.Ch, {
                        ref: x,
                        onScroll: C,
                        scrollbarGutter: et ? "both-edges" : "stable",
                        className: [sm.N$, y ? null : sm.hB, Z ? sm.J9 : null].filter(Boolean).join(" "),
                        children: (0, r.jsx)(rZ, {
                            ref: b,
                            projectId: n,
                            messages: o,
                            emptyState: ee,
                            floatingSettingsMessageId: Y?.id,
                            onPickIdea: G ? T : void 0,
                            onAskForIdeas: G ? _ : void 0,
                            draftHasText: P,
                            onApprovePlan: G ? eu : void 0,
                            onRestoreVersion: z || ei ? void 0 : a,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: sm.NJ,
                        children: (0, r.jsx)(sd, {
                            projectId: n,
                            thinking: ei,
                            turnStartedAt: es,
                            restoring: z,
                            recalling: et,
                            thinkingActivity: m,
                            compacting: h,
                            projectUsage: c,
                            connState: u,
                        }),
                    }),
                    null == H
                        ? null
                        : (0, r.jsx)("div", {
                              className: Z ? `${sm.B5} ${sm.J9}` : sm.B5,
                              children: (0, r.jsx)(
                                  l7,
                                  { projectId: n, clarification: H, onSubmit: G ? R : void 0, onDismiss: V },
                                  H.id,
                              ),
                          }),
                    null == J
                        ? null
                        : (0, r.jsx)("div", {
                              className: sm.B5,
                              children: (0, r.jsx)(at, { projectId: n, request: J, onDismiss: Q }, Y?.id),
                          }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: sm.Jx,
                children: [
                    (0, r.jsx)(lv, {
                        onJumpToActivity: k,
                        line: eg,
                        placement: ei && "bottom" === ed ? "bottom" : null,
                        todos: ex,
                        todosLive: ev,
                        provisionalTodo: eb,
                        agents: ey,
                    }),
                    0 === A.annotations.length
                        ? null
                        : (0, r.jsxs)("div", {
                              className: sm.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, r.jsx)(w.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: em.intl.formatToPlainString(ec.default["7b49dS"], {
                                          count: A.annotations.length,
                                      }),
                                  }),
                                  (0, r.jsx)(w.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: em.intl.string(ec.default["5zG+CR"]),
                                  }),
                                  (0, r.jsx)(S.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: em.intl.string(ec.default["/zOv9+"]),
                                      onClick: () => tn(n),
                                  }),
                              ],
                          }),
                    (0, r.jsx)(iZ, {
                        projectId: n,
                        canSend: G,
                        stopped: d,
                        running: ei,
                        restoring: z,
                        onSend: E,
                        hasPendingContext: A.annotations.length > 0,
                        onInterrupt: G ? I : void 0,
                        onUploadFile: D,
                        onImport: i,
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
var sp = n(624479),
    sg = n(761508),
    sx = n(540999);
let sb = [],
    sv = new Map(),
    sy = new Map(),
    sj = new Map(),
    sw = new Map(),
    sk = new Map(),
    sC = new Map(),
    sA = new Map();
class sN extends f.Ay.Store {
    getStatus(e) {
        return sv.get(e) ?? null;
    }
    getFetchState(e) {
        return sy.get(e) ?? "idle";
    }
    getLastCompaction(e) {
        return sw.get(e) ?? null;
    }
    getLastTurnUsage(e) {
        return sC.get(e) ?? null;
    }
    getLastCompactionDecline(e) {
        return sk.get(e) ?? null;
    }
    getModelCalls(e) {
        return sA.get(e) ?? sb;
    }
    getForceCompactionState(e) {
        return sj.get(e) ?? "idle";
    }
}
let sS = new sN(nP.h, {
    LOGOUT: function () {
        if (
            0 === sv.size &&
            0 === sy.size &&
            0 === sj.size &&
            0 === sw.size &&
            0 === sk.size &&
            0 === sC.size &&
            0 === sA.size
        )
            return !1;
        (sv.clear(), sy.clear(), sj.clear(), sw.clear(), sk.clear(), sC.clear(), sA.clear());
    },
    CONJURE_DEBUG_STATUS_REQUESTED: function (e) {
        let { projectId: t } = e;
        sy.set(t, "loading");
    },
    CONJURE_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if ("open" === n) return !1;
        let l = "pending" === sj.get(t);
        l &&
            sj.set(t, {
                outcome: "failed",
                reason: "Connection lost before the worker answered",
                observedAt: new Date().toISOString(),
            });
        let a = "loading" === sy.get(t);
        if ((a && sy.set(t, "failed"), !l && !a)) return !1;
    },
    CONJURE_DEBUG_STATUS_SET: function (e) {
        let { projectId: t, status: n, failed: l } = e;
        l || null == n ? sy.set(t, "failed") : (sv.set(t, n), sy.set(t, "loaded"));
    },
    CONJURE_DEBUG_COMPACTION_REPORT: function (e) {
        sw.set(e.projectId, {
            tokensBefore: e.tokensBefore,
            tokensAfter: e.tokensAfter,
            retainedMessages: e.retainedMessages,
            promptCeiling: e.promptCeiling,
            observedAt: e.observedAt,
        });
    },
    CONJURE_DEBUG_COMPACTION_DECLINED: function (e) {
        sk.set(e.projectId, {
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
        sj.set(t, "pending");
    },
    CONJURE_DEBUG_FORCE_COMPACTION_RESULT: function (e) {
        sj.set(e.projectId, {
            outcome: e.outcome,
            reason: e.reason,
            ...(!0 === e.pendingTurn ? { pendingTurn: !0 } : {}),
            observedAt: e.observedAt,
        });
    },
    CONJURE_DEBUG_MODEL_CALL: function (e) {
        let t = sA.get(e.projectId);
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
        sA.set(e.projectId, l.length > 200 ? l.slice(-200) : l);
    },
    CONJURE_CHAT_USAGE_SET: function (e) {
        let { projectId: t, turn: n } = e;
        if (0 === (0, et.aM)(n.total)) return !1;
        sC.set(t, n);
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        (sv.delete(t), sy.delete(t), sj.delete(t), sw.delete(t), sk.delete(t), sC.delete(t), sA.delete(t));
    },
});
function sE(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function sI(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function sT(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function sP(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = String(t.getHours()).padStart(2, "0"),
        l = String(t.getMinutes()).padStart(2, "0"),
        a = String(t.getSeconds()).padStart(2, "0");
    return `${n}:${l}:${a}`;
}
function sM(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function s_(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function sR(e) {
    return em.intl.string("preview" === e ? ec.default["2yLYlG"] : ec.default.eiAi57);
}
let sL = ["all", "preview", "stable", "web"],
    sD = new Set(["error", "aborted", "length"]);
function sO(e) {
    switch (e.reason) {
        case "local":
            return em.intl.string(ec.default.mUeKML);
        case "unconfigured":
            return em.intl.string(ec.default.bGefb5);
        case "unauthorized":
            return em.intl.string(ec.default.KLx6Bb);
        default:
            return null != e.detail
                ? em.intl.formatToPlainString(ec.default.t09Q6q, { detail: e.detail })
                : em.intl.string(ec.default["t+tG59"]);
    }
}
function sF(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : em.intl.formatToPlainString(ec.default["XO/bN4"], {
              p50: sE(e.memory_p50_bytes ?? 0),
              p999: sE(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let sz = {
    db: () => ec.default["7l+DFG"],
    db_preview: () => ec.default.FAuffi,
    runtime: () => ec.default["Gkl+ab"],
    runtime_preview: () => ec.default.ynpJzv,
    bot: () => ec.default["5/i0cj"],
    bot_preview: () => ec.default.m2jsnw,
};
var sG = n(911608),
    sU = n(177427);
function sq(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, r.jsxs)("div", {
        className: sU.KE,
        children: [
            (0, r.jsx)("div", {
                className: sU.IQ,
                children:
                    "loading" === n
                        ? (0, r.jsx)(N.y, { type: N.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, r.jsx)(w.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: em.intl.string(ec.default.ZVByPX),
                            })
                          : null != t
                            ? (0, r.jsx)(w.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: em.intl.formatToPlainString(ec.default.INVO50, { time: sM(t) }),
                              })
                            : null,
            }),
            (0, r.jsx)(S.$, { variant: "secondary", size: "sm", text: em.intl.string(ec.default.oKEgiu), onClick: l }),
        ],
    });
}
function s$(e) {
    let { title: t, children: n } = e;
    return (0, r.jsxs)("section", {
        className: sU.uW,
        "aria-label": t,
        children: [
            (0, r.jsx)(w.E, { variant: "text-xs/semibold", color: "text-muted", className: sU.Gf, children: t }),
            n,
        ],
    });
}
function sB(e) {
    let { label: t, value: n, hint: l, critical: a = !1 } = e;
    return (0, r.jsxs)("div", {
        className: sU.N8,
        children: [
            (0, r.jsxs)("div", {
                className: sU.x7,
                children: [
                    (0, r.jsx)(w.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, r.jsx)(w.E, {
                        variant: "text-sm/medium",
                        color: a ? "text-feedback-critical" : "text-default",
                        children: n,
                    }),
                ],
            }),
            null != l && (0, r.jsx)(w.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
        ],
    });
}
function sH(e) {
    let { label: t, used: n, max: l, formatValue: a } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, r.jsxs)("div", {
        className: sU.N8,
        children: [
            (0, r.jsxs)("div", {
                className: sU.x7,
                children: [
                    (0, r.jsx)(w.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, r.jsx)(w.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${a(n)} / ${a(l)}`,
                    }),
                ],
            }),
            (0, r.jsx)(sG.z, {
                value: 100 * i,
                valueLabel: `${a(n)} of ${a(l)}`,
                "aria-label": t,
                className: s ? sU.dh : void 0,
            }),
        ],
    });
}
function sV(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, r.jsx)(sB, {
            label: em.intl.string(ec.default.SXP7pD),
            value: em.intl.string(ec.default.E5hKVi),
            hint: sO(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, r.jsx)(sB, {
            label: em.intl.string(ec.default.SXP7pD),
            value: "\u2014",
            hint: em.intl.string(ec.default.AGvoMJ),
        });
    let l = sF(n);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(sB, { label: em.intl.string(ec.default["H/X+FI"]), value: sI(n.cpu_ms) }),
            null != l && (0, r.jsx)(sB, { label: em.intl.string(ec.default.lmFmMO), value: l }),
        ],
    });
}
function sW(e) {
    let { analytics: t } = e,
        n = em.intl.string(ec.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, r.jsx)(s$, {
            title: n,
            children: (0, r.jsx)(w.E, { variant: "text-sm/normal", color: "text-muted", children: sO(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? sz[t] : null) ? em.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, r.jsx)(s$, {
        title: n,
        children:
            0 === l.length
                ? (0, r.jsx)(w.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: em.intl.string(ec.default.AGvoMJ),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, r.jsx)(
                          sB,
                          {
                              label: n,
                              value: em.intl.formatToPlainString(ec.default["w/2voO"], { cpu: sI(t.cpu_ms) }),
                              hint: sF(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var sK = n(400154);
let sX = [];
function sY(e) {
    let t,
        { call: n } = e,
        { text: l, bad: a } =
            ((t = null != n.stopReason && sD.has(n.stopReason)),
            {
                text: [
                    null != n.durationMs ? sI(n.durationMs) : null,
                    `${sT(n.inputTokens + n.cacheReadTokens + n.cacheWriteTokens)} \u{2192} ${sT(n.outputTokens)}`,
                    t ? n.stopReason : null,
                ]
                    .filter((e) => null != e)
                    .join(" \xb7 "),
                bad: t,
            });
    return (0, r.jsxs)("div", {
        className: sK.p5,
        children: [
            (0, r.jsx)(w.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: sK.Q5,
                children: sP(n.observedAt),
            }),
            (0, r.jsxs)(w.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-default",
                className: sK.qN,
                children: [n.role, " \xb7 ", n.model],
            }),
            (0, r.jsx)(w.E, {
                tag: "span",
                variant: "text-xs/medium",
                color: a ? "text-feedback-critical" : "text-muted",
                children: l,
            }),
        ],
    });
}
function sJ(e, t) {
    return (0, r.jsx)(sB, {
        label: e,
        value: em.intl.formatToPlainString(ec.default.yHJxuP, { count: sT((0, et.aM)(t)) }),
        hint: `${sT(t.input_tokens)} in \xb7 ${sT(t.output_tokens)} out \xb7 ${sT(t.cache_read_input_tokens)} cache read`,
    });
}
function sQ(e) {
    let { projectId: t, status: n, fetchState: l, onRefresh: a, traceVisible: i = !1 } = e,
        o = (0, f.bG)([sS], () => sS.getLastTurnUsage(t), [t]),
        u = (0, f.bG)([sS], () => sS.getLastCompaction(t), [t]),
        d = (0, f.bG)([sS], () => sS.getLastCompactionDecline(t), [t]),
        c = (0, f.bG)([sS], () => sS.getForceCompactionState(t), [t]),
        m = s.useCallback(() => (0, er.Lj)(t), [t]),
        h = s.useCallback(() => (0, er.Lj)(t, !0), [t]),
        p = (0, f.bG)([sS], () => (i ? sX : sS.getModelCalls(t)), [t, i]),
        g = n?.agent?.lifetime ?? null,
        x = n?.agent?.limits ?? null,
        b = n?.agent?.session ?? null,
        v = u?.promptCeiling ?? x?.context_window_tokens ?? null;
    return (0, r.jsxs)("div", {
        className: sK.Mf,
        children: [
            (0, r.jsx)(sq, { generatedAt: n?.generated_at ?? null, fetchState: l, onRefresh: a }),
            (0, r.jsx)(s$, {
                title: em.intl.string(ec.default.JghNal),
                children:
                    null == g
                        ? (0, r.jsx)(w.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: em.intl.string(ec.default.s0U5Fv),
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(sB, {
                                      label: em.intl.string(ec.default["9nqym2"]),
                                      value: sT((0, et.a7)(g.cost_usd)),
                                      hint: em.intl.formatToPlainString(ec.default.NCdUIh, { count: sT(g.turns) }),
                                  }),
                                  sJ(em.intl.string(ec.default.xtxP0e), g.orchestrator),
                                  sJ(em.intl.string(ec.default["9Sj3SX"]), g.codegen),
                                  sJ(em.intl.string(ec.default.ANCEo3), (0, et.wU)(g.compaction)),
                                  n?.agent?.outcomes != null &&
                                      Object.keys(n.agent.outcomes).length > 0 &&
                                      (0, r.jsx)(sB, {
                                          label: em.intl.string(ec.default.SQHm7C),
                                          value: Object.entries(n.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${sT(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, r.jsx)(s$, {
                title: em.intl.string(ec.default.dZHPE5),
                children:
                    null == o
                        ? (0, r.jsx)(w.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: em.intl.string(ec.default.DfVjal),
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  sJ(em.intl.string(ec.default["7X3i9d"]), o.total),
                                  (0, r.jsx)(sB, {
                                      label: em.intl.string(ec.default["8OUg09"]),
                                      value: `${Math.round((o.cache_hit_rate ?? (0, et.CA)(o.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, r.jsxs)(s$, {
                title: em.intl.string(ec.default.NbRk9a),
                children: [
                    null != u && null != v
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(sH, {
                                      label: em.intl.string(ec.default.Kw5wiQ),
                                      used: u.tokensAfter,
                                      max: v,
                                      formatValue: sT,
                                  }),
                                  (0, r.jsx)(sB, {
                                      label: em.intl.string(ec.default.mRbSns),
                                      value: `${sT(u.tokensBefore)} \u{2192} ${sT(u.tokensAfter)}`,
                                      hint: em.intl.formatToPlainString(ec.default.Vq3skS, {
                                          count: sT(u.retainedMessages),
                                          time: sM(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, r.jsx)(w.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != v
                                      ? em.intl.formatToPlainString(ec.default.GMLCNv, { ceiling: sT(v) })
                                      : em.intl.string(ec.default.s0U5Fv),
                          }),
                    null != d &&
                        (0, r.jsx)(sB, {
                            label: em.intl.string(ec.default["4BX5KK"]),
                            value: `${sT(d.projected)} / ${sT(d.threshold)}`,
                            critical: !0,
                            hint: em.intl.formatToPlainString(ec.default["6ngCax"], { time: sM(d.observedAt) }),
                        }),
                    (0, r.jsxs)("div", {
                        className: sK.Lj,
                        children: [
                            (0, r.jsx)(S.$, {
                                variant: "secondary",
                                size: "sm",
                                text: em.intl.string(ec.default["1EiJeb"]),
                                disabled: "pending" === c,
                                onClick: m,
                            }),
                            (0, r.jsx)(w.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof c && "compacted" !== c.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return em.intl.string(ec.default.wox6Ev);
                                    if ("pending" === e) return em.intl.string(ec.default.OcPHQ1);
                                    let t = sM(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return em.intl.formatToPlainString(ec.default.BhRjZZ, { time: t });
                                    let n =
                                        "declined" === e.outcome
                                            ? ec.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? ec.default.YZb4hK
                                              : ec.default.ZoUSVK;
                                    return em.intl.formatToPlainString(n, {
                                        reason: e.reason ?? "no reason given",
                                        time: t,
                                    });
                                })(c),
                            }),
                            "object" == typeof c &&
                                !0 === c.pendingTurn &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(S.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: em.intl.string(ec.default.ZxG2AI),
                                            onClick: h,
                                        }),
                                        (0, r.jsx)(w.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: em.intl.string(ec.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            !i &&
                (0, r.jsx)(s$, {
                    title: em.intl.string(ec.default.TkTRdW),
                    children:
                        0 === p.length
                            ? (0, r.jsx)(w.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: em.intl.string(ec.default["r3/FhI"]),
                              })
                            : (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      p
                                          .slice(-30)
                                          .reverse()
                                          .map((e) => (0, r.jsx)(sY, { call: e }, e.id)),
                                      p.length > 30 &&
                                          (0, r.jsx)(w.E, {
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              children: em.intl.formatToPlainString(ec.default["uZ9P/O"], {
                                                  shown: 30,
                                                  total: p.length,
                                              }),
                                          }),
                                  ],
                              }),
                }),
            (null != b || n?.analytics != null) &&
                (0, r.jsxs)(s$, {
                    title: em.intl.string(ec.default.EsSzCS),
                    children: [
                        null != b &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(sB, {
                                        label: em.intl.string(ec.default.CLXHAs),
                                        value: sM(b.instance_since),
                                        hint: em.intl.string(ec.default.UCwUEX),
                                    }),
                                    (0, r.jsx)(sB, {
                                        label: em.intl.string(ec.default["8V8e1Z"]),
                                        value: sT(b.sockets),
                                    }),
                                    (0, r.jsx)(sB, {
                                        label: em.intl.string(ec.default["4pBzYW"]),
                                        value: b.turn_inflight
                                            ? em.intl.string(ec.default.Wv025I)
                                            : em.intl.string(ec.default["7/lsFY"]),
                                    }),
                                    b.queued_messages > 0 &&
                                        (0, r.jsx)(sB, {
                                            label: em.intl.string(ec.default["3oUYnv"]),
                                            value: sT(b.queued_messages),
                                        }),
                                ],
                            }),
                        n?.analytics != null && (0, r.jsx)(sV, { analytics: n.analytics }),
                    ],
                }),
            null != x &&
                (0, r.jsxs)(s$, {
                    title: em.intl.string(ec.default["LEIhp/"]),
                    children: [
                        (0, r.jsx)(sB, {
                            label: em.intl.string(ec.default.IlDBN3),
                            value: sT(x.max_subagent_iterations),
                        }),
                        (0, r.jsx)(sB, {
                            label: em.intl.string(ec.default["ZdzKR+"]),
                            value: em.intl.formatToPlainString(ec.default.yHJxuP, {
                                count: sT(x.context_window_tokens),
                            }),
                        }),
                        (0, r.jsx)(sB, {
                            label: em.intl.string(ec.default.cIhN2W),
                            value: em.intl.formatToPlainString(ec.default.yHJxuP, {
                                count: sT(x.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, r.jsx)(sB, {
                            label: em.intl.string(ec.default["+fOn/q"]),
                            value: sT(x.max_user_message_chars),
                        }),
                        (0, r.jsx)(sB, { label: em.intl.string(ec.default.kIHga0), value: sT(x.max_build_attempts) }),
                        (0, r.jsx)(sB, { label: em.intl.string(ec.default.Iw03yW), value: sT(x.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var sZ = n(237528),
    s0 = n(683438),
    s2 = n(531893);
function s1(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, r.jsx)("div", {
              className: s2.ut,
              children: (0, r.jsx)(w.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: em.intl.string(ec.default.h1SE6R),
              }),
          });
}
function s6(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, r.jsxs)("div", {
              className: s2.qf,
              children: [
                  (0, r.jsx)(w.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: em.intl.string(ec.default.h1SE6R),
                  }),
                  (0, r.jsx)(w.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: em.intl.string(ec.default["8SErdg"]),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: s2.qf,
              children: [
                  (0, r.jsx)(w.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                  (0, r.jsx)(w.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function s9(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, r.jsx)("div", {
              className: s2.ps,
              children: (0, r.jsx)(w.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: em.intl.string(ec.default.V7Ri8H),
              }),
          })
        : null;
}
var s3 = n(109079);
let s5 = s.memo(function (e) {
    var t;
    let { entry: n, showSource: l } = e,
        [a, i] = s.useState(!1),
        o = s.useId(),
        u = s.useMemo(
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
    return (0, r.jsxs)("div", {
        className: s3.vK,
        children: [
            (0, r.jsx)(w.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: s3.Mt,
                selectable: !0,
                children: sP(n.ts),
            }),
            (0, r.jsx)(w.E, {
                tag: "span",
                variant: "text-xxs/semibold",
                color:
                    "error" === (t = n.level)
                        ? "text-feedback-critical"
                        : "warn" === t
                          ? "text-feedback-warning"
                          : "text-muted",
                className: s3.dm,
                children: n.level,
            }),
            (0, r.jsxs)("div", {
                className: s3.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, r.jsx)("span", { className: s3.Cq, children: (0, r.jsx)(sZ.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, r.jsx)("span", {
                            className: s3.Cq,
                            title: n.build ?? void 0,
                            children: (0, r.jsx)(sZ.v, {
                                text: em.intl.string(ec.default.TrC9c8),
                                variant: "redLight",
                            }),
                        }),
                    null != u
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  "" !== u.prefix &&
                                      (0, r.jsxs)(w.E, {
                                          tag: "span",
                                          variant: "text-xs/normal",
                                          color: d,
                                          selectable: !0,
                                          children: [u.prefix, " "],
                                      }),
                                  (0, r.jsxs)(k.D, {
                                      className: s3.Pq,
                                      "aria-expanded": a,
                                      "aria-controls": o,
                                      "aria-label": em.intl.string(ec.default["9CTzyV"]),
                                      onClick: () => i((e) => !e),
                                      children: [
                                          a
                                              ? (0, r.jsx)(la.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, r.jsx)(tc._, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, r.jsxs)(w.E, {
                                              tag: "span",
                                              variant: "text-xs/medium",
                                              color: "none",
                                              children: [
                                                  u.marker,
                                                  " ",
                                                  em.intl.formatToPlainString(
                                                      "[\u2026]" === u.marker
                                                          ? ec.default.kUhyUv
                                                          : ec.default["N+fphl"],
                                                      { count: u.size },
                                                  ),
                                              ],
                                          }),
                                      ],
                                  }),
                                  a &&
                                      (0, r.jsx)(w.E, {
                                          tag: "div",
                                          variant: "text-xs/normal",
                                          color: d,
                                          className: s3.dF,
                                          selectable: !0,
                                          id: o,
                                          children: u.pretty,
                                      }),
                              ],
                          })
                        : (0, r.jsx)(w.E, {
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
function s4(e) {
    let { projectId: t } = e,
        n = (0, f.bG)([eR.Ay], () => eR.Ay.getLogs(t), [t]),
        l = (0, f.bG)([eR.Ay], () => eR.Ay.getHistoryState(t, "logs")),
        [a, i] = s.useState("all"),
        [o, u] = s.useState(""),
        d = s.useMemo(() => {
            let e = o.trim().toLowerCase();
            return n.filter((t) => {
                var n, l;
                return (
                    "string" == typeof (n = t.log).message &&
                    "string" == typeof n.level &&
                    "string" == typeof n.ts &&
                    ("all" === a ||
                        ("preview" === (l = t.log.source) || "stable" === l || "web" === l ? l : "other") === a) &&
                    ("" === e ||
                        t.log.message.toLowerCase().includes(e) ||
                        t.log.level.includes(e) ||
                        (t.log.source?.toLowerCase().includes(e) ?? !1))
                );
            });
        }, [n, a, o]),
        c = s.useRef(null),
        m = s.useRef(!0);
    s.useEffect(() => {
        m.current && c.current?.scrollToBottom();
    }, [d]);
    let h = s.useCallback(() => {
            let e = c.current;
            null != e && (m.current = 32 > e.getDistanceFromBottom());
        }, []),
        p = s.useMemo(
            () =>
                sL.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return sR(e);
                            case "web":
                                return em.intl.string(ec.default.IVzfVV);
                            default:
                                return em.intl.string(ec.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, r.jsxs)("div", {
        className: s3.$F,
        children: [
            (0, r.jsxs)("div", {
                className: s3.y4,
                children: [
                    (0, r.jsx)(tU.I, {
                        look: "pill",
                        "aria-label": em.intl.string(ec.default.MhvyUU),
                        options: p,
                        value: a,
                        onChange: (e) => i(e.value),
                    }),
                    (0, r.jsx)("div", {
                        className: s3.KT,
                        children: (0, r.jsx)(s0.I, {
                            query: o,
                            onChange: u,
                            onClear: () => u(""),
                            size: "sm",
                            placeholder: em.intl.string(ec.default["m2+37Y"]),
                            "aria-label": em.intl.string(ec.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, r.jsx)(s1, { state: l }),
            (0, r.jsxs)(n5.Ch, {
                ref: c,
                onScroll: h,
                overflow: "auto",
                className: s3.sx,
                children: [
                    (0, r.jsx)(s9, { state: l }),
                    0 === n.length
                        ? (0, r.jsx)(s6, {
                              state: l,
                              emptyTitle: em.intl.string(ec.default.S7qlPG),
                              emptyBody: em.intl.string(ec.default.nD0S9z),
                          })
                        : 0 === d.length
                          ? (0, r.jsx)(w.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: em.intl.string(ec.default["4SIdrX"]),
                            })
                          : d.map((e) => (0, r.jsx)(s5, { entry: e.log, showSource: "all" === a }, e.key)),
                ],
            }),
        ],
    });
}
function s7(e) {
    let { title: t, preview: n, stable: l, renderEnv: a } = e,
        i = [];
    return (
        null != n && i.push((0, r.jsx)(s.Fragment, { children: a("preview", n) }, "preview")),
        null != l && i.push((0, r.jsx)(s.Fragment, { children: a("stable", l) }, "stable")),
        (0, r.jsx)(s$, {
            title: t,
            children:
                i.length > 0
                    ? i
                    : (0, r.jsx)(w.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: em.intl.string(ec.default.umcjif),
                      }),
        })
    );
}
function s8(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(sB, {
                      label: em.intl.formatToPlainString(ec.default["01ZMS4"], { env: sR(n) }),
                      value: ((t = l.connected), em.intl.string(t ? ec.default.Wv025I : ec.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, r.jsx)(sB, {
                      label: em.intl.string(ec.default["z1dh+F"]),
                      value: sT(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${sM(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, r.jsx)(sB, { label: em.intl.string(ec.default.Iz5GnJ), value: sT(l.guild_count) }),
                  (0, r.jsx)(sB, {
                      label: em.intl.string(ec.default["7UqtNv"]),
                      value: sT(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? em.intl.formatToPlainString(ec.default.MasSly, {
                                    code: l.last_close_code,
                                    time: sM(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, r.jsx)(sB, {
                          label: em.intl.string(ec.default["x3+JXJ"]),
                          value: sT(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, r.jsx)(sB, { label: sR(n), value: em.intl.string(ec.default.lTHQss) });
}
function oe(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, r.jsx)(sB, {
        label: sR(t),
        value: em.intl.formatToPlainString(ec.default["Xq+wHT"], {
            requests: sT(n.requests),
            failures: sT(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? em.intl.formatToPlainString(ec.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: sM(n.last_failure.at),
                  })
                : em.intl.formatToPlainString(ec.default["7KlGT6"], { time: sM(n.since) }),
    });
}
function ot(e) {
    let { env: t, runtime: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(sB, {
                label: em.intl.formatToPlainString(ec.default["92gVTm"], { env: sR(t) }),
                value: sT(n.connections),
            }),
            n.schedules.map((e) =>
                (0, r.jsx)(
                    sB,
                    {
                        label: em.intl.formatToPlainString(ec.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? em.intl.formatToPlainString(ec.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? em.intl.formatToPlainString(ec.default.wxAWNv, { time: sM(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function on(e) {
    let { env: t, metrics: n } = e;
    return (0, r.jsx)(sB, {
        label: sR(t),
        value: em.intl.formatToPlainString(ec.default.suAOj9, { calls: sT(n.calls), errors: sT(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function ol(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, r.jsx)(s$, {
            title: t,
            children: (0, r.jsx)(w.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: em.intl.string(ec.default["Noami/"]),
            }),
        });
    let a = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, r.jsxs)(s$, {
        title: t,
        children: [
            (0, r.jsx)(sB, {
                label: em.intl.string(ec.default.xtD4Zp),
                value: sT(n.requests),
                hint: em.intl.formatToPlainString(ec.default["7KlGT6"], { time: sM(n.since) }),
            }),
            (0, r.jsx)(sB, { label: em.intl.string(ec.default.gfRhR3), value: sT(n.errors), critical: n.errors > 0 }),
            i
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(sH, {
                              label: em.intl.string(ec.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: sI,
                          }),
                          (0, r.jsx)(sB, {
                              label: em.intl.string(ec.default.mSKImM),
                              value: sI(a),
                              hint: em.intl.formatToPlainString(ec.default.JqMU05, {
                                  total: sI(n.cpu_ms_total),
                                  wall: sI(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, r.jsx)(sB, {
                      label: em.intl.string(ec.default.LEJ5r3),
                      value: em.intl.string(ec.default["2Ekb2b"]),
                      hint: em.intl.string(ec.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, r.jsx)(sB, { label: em.intl.string(ec.default.xvmL1D), value: sI(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, r.jsx)(sB, {
                    label: em.intl.string(ec.default["4sQYwH"]),
                    value: sT(n.exceeded_cpu),
                    critical: !0,
                }),
            (0, r.jsx)(sB, {
                label: em.intl.string(ec.default.bQenOy),
                value: sT(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: em.intl.formatToPlainString(ec.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, r.jsx)(sB, { label: em.intl.string(ec.default.xgpn4Y), value: s_(n.build) }),
        ],
    });
}
function oa(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: a } = t.storage,
        i = t.worker.limits,
        o = a
            ? [{ key: "shared", label: em.intl.string(ec.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: em.intl.string(ec.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: em.intl.string(ec.default.eiAi57), metrics: n },
              ];
    return (0, r.jsx)(s$, {
        title: em.intl.string(ec.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, r.jsx)(sB, { label: n, value: "\u2014" }, t)
                : (0, r.jsxs)(
                      s.Fragment,
                      {
                          children: [
                              (0, r.jsx)(sB, {
                                  label: em.intl.formatToPlainString(ec.default.u7kJJ4, { env: n }),
                                  value: sE(l.r2_bytes),
                                  hint: em.intl.formatToPlainString(
                                      l.r2_truncated ? ec.default.lH0oQw : ec.default.m9h02S,
                                      { count: sT(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, r.jsx)(sH, {
                                      label: em.intl.formatToPlainString(ec.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: i.db_bytes,
                                      formatValue: sE,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function oi(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, r.jsxs)("div", {
        className: sK.Mf,
        children: [
            (0, r.jsx)(sq, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(ol, {
                            title: em.intl.string(ec.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, r.jsx)(ol, {
                            title: em.intl.string(ec.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, r.jsx)(oa, { status: t }),
                        null != t.bot &&
                            (0, r.jsx)(s7, {
                                title: em.intl.string(ec.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, r.jsx)(s8, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, r.jsx)(s7, {
                                title: em.intl.string(ec.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, r.jsx)(oe, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, r.jsx)(s7, {
                                title: em.intl.string(ec.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, r.jsx)(ot, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, r.jsx)(s7, {
                                title: em.intl.string(ec.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, r.jsx)(on, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, r.jsx)(sW, { analytics: t.analytics }),
                        (0, r.jsxs)(s$, {
                            title: em.intl.string(ec.default.fQMpFp),
                            children: [
                                (0, r.jsx)(sB, {
                                    label: em.intl.string(ec.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? s_(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, r.jsx)(sB, {
                                    label: em.intl.string(ec.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? s_(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var or = n(761929);
function os(e, t) {
    return String(e).padStart(t, "0");
}
function oo(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        a = `${os(l.getHours(), 2)}:${os(l.getMinutes(), 2)}:${os(l.getSeconds(), 2)}`;
    return "millis" === t ? `${a}.${os(l.getMilliseconds(), 3)}` : a;
}
var ou = n(382541);
let od = new Map(),
    oc = new Map(),
    om = 0,
    of = 0;
async function oh(e, t, n) {
    let l = om,
        a = od.get(t);
    if (null != a) return { status: "loaded", rich: a };
    if (Date.now() < of) return { status: "forbidden" };
    let i = oc.get(t);
    if (null != i) return i;
    let r = (async () => {
        try {
            let a,
                { ticket: i, baseUrl: r } = await (0, ou.d)(e),
                s = await fetch(
                    ((a = new URL(`${r}/agent/trace-detail`)).searchParams.set("ticket", i),
                    a.searchParams.set("id", t),
                    a.toString()),
                    { method: "GET", credentials: "omit" },
                );
            if (403 === s.status) return ((of = Date.now() + 6e4), { status: "forbidden" });
            if (!s.ok) return { status: "failed" };
            let o = await s.json();
            if (!0 !== o.available || null == o.rich) return { status: "unavailable" };
            if (l !== om) return { status: "failed" };
            var n = o.rich;
            for (od.set(t, n); od.size > 100;) {
                let e = od.keys().next();
                if (!0 === e.done) break;
                od.delete(e.value);
            }
            return { status: "loaded", rich: o.rich };
        } catch {
            return { status: "failed" };
        }
    })();
    oc.set(t, r);
    let s = await r;
    return (oc.get(t) === r && oc.delete(t), n?.aborted === !0 ? { status: "failed" } : s);
}
function op() {
    ((om += 1), od.clear(), oc.clear(), (of = 0));
}
function og(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function ox(e) {
    if (e < 1e3) return String(e);
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function ob(e) {
    switch (e) {
        case "subagent":
            return em.intl.string(ec.default.PbKt9r);
        case "context":
            return em.intl.string(ec.default["tNk/P2"]);
        case "tool":
            return em.intl.string(ec.default.NBOJcw);
        case "delegated":
            return em.intl.string(ec.default.QgrFdt);
        default:
            return em.intl.string(ec.default.LsLVUy);
    }
}
function ov(e) {
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
let oy = ["model", "tool", "subagent", "delegated", "context"];
function oj(e, t) {
    let n = t.trim().toLowerCase();
    return "" === n
        ? e
        : e.filter((e) => {
              let t;
              return ((t =
                  "model" === e.kind
                      ? [e.model, e.agent, e.stopReason ?? "", e.error ?? ""]
                      : [e.tool, e.agent, e.summary ?? "", e.error ?? ""]).push(ov(e)),
              t.join(" ").toLowerCase()).includes(n);
          });
}
function ow(e, t) {
    return null == t ? null : (e.find((e) => e.id === t) ?? null);
}
let ok = {
    model: "blurpleLight",
    subagent: "greenLight",
    context: "grayLight",
    tool: "grayMedium",
    delegated: "orangeLight",
};
function oC(e) {
    let { category: t } = e;
    return (0, r.jsx)(sZ.v, { text: ob(t), variant: ok[t] });
}
var oA = n(28863);
let oN = ["arguments", "result", "usage", "diagnostics"];
var oS = n(536113);
let oE = { started: oS.Vf, ok: oS.mo, error: oS.Sr };
function oI(e) {
    let { status: t } = e;
    return (0, r.jsx)("span", {
        className: `${oS.Om} ${oE[t] ?? oS.Vf}`,
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "started":
                    return em.intl.string(ec.default["2wyRDK"]);
                case "error":
                    return em.intl.string(ec.default["2Cu8n+"]);
                default:
                    return em.intl.string(ec.default["6kgw6D"]);
            }
        })(t),
    });
}
function oT(e) {
    let { label: t, value: n } = e;
    return (0, r.jsxs)("div", {
        className: oS.wV,
        children: [
            (0, r.jsx)(w.E, { variant: "text-xs/medium", color: "text-muted", className: oS.D6, children: t }),
            (0, r.jsx)("div", { className: oS.zL, children: n }),
        ],
    });
}
function oP(e) {
    let { label: t, value: n } = e;
    return (0, r.jsx)(oT, {
        label: t,
        value: (0, r.jsx)(w.E, { variant: "text-xs/normal", color: "text-default", selectable: !0, children: n }),
    });
}
function oM(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: oS.WA, children: t });
}
function o_(e) {
    let { title: t, children: n } = e,
        l = s.useId();
    return (0, r.jsxs)("section", {
        "aria-labelledby": l,
        className: oS.xd,
        children: [
            (0, r.jsx)(w.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                id: l,
                className: oS.Hm,
                children: t,
            }),
            n,
        ],
    });
}
function oR(e) {
    let { title: t, children: n } = e;
    return (0, r.jsxs)("details", {
        className: oS.XK,
        children: [
            (0, r.jsxs)("summary", {
                className: oS.It,
                children: [
                    (0, r.jsx)(tc._, { className: oS.k, size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    (0, r.jsx)(w.E, { variant: "text-xs/semibold", color: "none", children: t }),
                ],
            }),
            (0, r.jsx)("div", { className: oS.bG, children: n }),
        ],
    });
}
function oL(e) {
    let { field: t } = e;
    if (null != t.value)
        return (0, r.jsx)(oT, {
            label: t.key,
            value: (0, r.jsx)(w.E, {
                variant: "text-xs/normal",
                color: "text-default",
                selectable: !0,
                children: t.value,
            }),
        });
    let n =
        null != t.chars
            ? em.intl.formatToPlainString(ec.default.ib7All, { count: t.chars })
            : null != t.items
              ? em.intl.formatToPlainString(ec.default.cIqKbA, { count: t.items })
              : null;
    return (0, r.jsx)(oT, {
        label: t.key,
        value: (0, r.jsxs)("div", {
            className: oS.Kv,
            children: [
                (0, r.jsx)(w.E, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    children: (function (e) {
                        switch (e) {
                            case "prose":
                                return em.intl.string(ec.default["6oDpz5"]);
                            case "content":
                                return em.intl.string(ec.default.kSGhxQ);
                            default:
                                return em.intl.string(ec.default.JwGtRz);
                        }
                    })(t.omitted ?? "content"),
                }),
                null == n
                    ? null
                    : (0, r.jsx)(w.E, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          tabularNumbers: !0,
                          children: n,
                      }),
            ],
        }),
    });
}
function oD(e) {
    let { entries: t } = e;
    return 0 === t.length
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", {
                      className: oS.QR,
                      children: (0, r.jsx)(sZ.v, { text: em.intl.string(ec.default.LRIpHQ), variant: "orangeLight" }),
                  }),
                  t.map((e) =>
                      (0, r.jsx)(
                          oT,
                          {
                              label: e.key,
                              value: (0, r.jsxs)("div", {
                                  className: oS.TY,
                                  children: [
                                      null == e.value
                                          ? null
                                          : (0, r.jsx)(w.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                className: oS.Px,
                                                selectable: !0,
                                                children: e.value,
                                            }),
                                      !0 !== e.scrubbed
                                          ? null
                                          : (0, r.jsx)(w.E, {
                                                variant: "text-xs/normal",
                                                color: "text-feedback-warning",
                                                children: em.intl.string(ec.default["+kQ+K3"]),
                                            }),
                                      !0 !== e.truncated
                                          ? null
                                          : (0, r.jsx)(w.E, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children:
                                                    null == e.chars
                                                        ? em.intl.string(ec.default.ijkkUh)
                                                        : em.intl.formatToPlainString(ec.default.PRt8I0, {
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
function oO(e) {
    let { detail: t } = e,
        n =
            null == t || "loaded" === t.status || "forbidden" === t.status
                ? null
                : em.intl.string(
                      "loading" === t.status
                          ? ec.default.SKbSyo
                          : "unavailable" === t.status
                            ? ec.default.tdq5Zn
                            : ec.default["Dw1JW/"],
                  );
    return null == n
        ? null
        : (0, r.jsx)(w.E, { variant: "text-xs/normal", color: "text-subtle", className: oS.E7, children: n });
}
function oF(e) {
    let { projectId: t, entry: n, onClose: l, parent: a, onSelect: i, childCount: o } = e,
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
                oN.filter((e) => l.has(e))
            );
        })(n, { childCount: o, hasParent: null != a }),
        d = (function (e, t) {
            let [n, l] = s.useState(null);
            if (
                (s.useEffect(() => {
                    if (null == t || null != od.get(t)) return;
                    let n = new AbortController();
                    return (
                        oh(e, t, n.signal).then((e) => {
                            n.signal.aborted || l({ detailId: t, detail: e });
                        }),
                        () => n.abort()
                    );
                }, [e, t]),
                null == t)
            )
                return null;
            let a = od.get(t);
            return null != a ? { status: "loaded", rich: a } : n?.detailId === t ? n.detail : { status: "loading" };
        })(t, "tool" === n.kind ? n.detailId : void 0),
        c = "model" === n.kind ? n.model : n.tool,
        m = oo(n.startedAt, "millis"),
        f = ov(n),
        h = s.useCallback(
            (e) => {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), l());
            },
            [l],
        );
    return (0, r.jsxs)(n5.Ch, {
        className: oS._0,
        onKeyDown: h,
        role: "region",
        "aria-label": em.intl.formatToPlainString(ec.default.Qiaeyz, { name: c }),
        children: [
            (0, r.jsx)("div", {
                className: oS.sy,
                children: (0, r.jsxs)("div", {
                    className: oS.HI,
                    children: [
                        (0, r.jsx)(oI, { status: n.status }),
                        (0, r.jsx)(oC, { category: f }),
                        (0, r.jsx)(w.E, {
                            variant: "text-sm/semibold",
                            color: "text-strong",
                            className: oS.kc,
                            children: c,
                        }),
                        (0, r.jsx)(w.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            tabularNumbers: !0,
                            className: oS.l5,
                            children: null == n.durationMs ? em.intl.string(ec.default["2wyRDK"]) : og(n.durationMs),
                        }),
                    ],
                }),
            }),
            null == n.error
                ? null
                : (0, r.jsx)(w.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: oS.Um,
                      selectable: !0,
                      children: n.error,
                  }),
            u.includes("arguments") && "tool" === n.kind
                ? (0, r.jsxs)(o_, {
                      title: em.intl.string(ec.default["G/4JST"]),
                      children: [
                          (n.fields ?? []).map((e) => (0, r.jsx)(oL, { field: e }, e.key)),
                          d?.status === "loaded" && null != d.rich.args
                              ? (0, r.jsx)(oD, { entries: d.rich.args })
                              : null,
                          (0, r.jsx)(oO, { detail: d }),
                      ],
                  })
                : null,
            u.includes("result") && "tool" === n.kind
                ? (0, r.jsxs)(o_, {
                      title: em.intl.string(ec.default.Dgg25Y),
                      children: [
                          (0, r.jsx)(oP, {
                              label: em.intl.string(ec.default["U+OQCo"]),
                              value: em.intl.formatToPlainString(ec.default.ib7All, { count: n.resultChars ?? 0 }),
                          }),
                          null == n.resultAdded
                              ? null
                              : (0, r.jsx)(oP, {
                                    label: em.intl.string(ec.default["MQYS+n"]),
                                    value: `+${n.resultAdded} \u{2212}${n.resultRemoved ?? 0}`,
                                }),
                          !0 !== n.resultTruncated
                              ? null
                              : (0, r.jsx)(oT, {
                                    label: em.intl.string(ec.default.t7GJFc),
                                    value: (0, r.jsx)(w.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        children: em.intl.string(ec.default.ijkkUh),
                                    }),
                                }),
                          d?.status === "loaded" && null != d.rich.result
                              ? (0, r.jsx)(oD, { entries: d.rich.result })
                              : null,
                      ],
                  })
                : null,
            u.includes("usage") && "model" === n.kind
                ? (0, r.jsxs)(o_, {
                      title: em.intl.string(ec.default.NXmRw1),
                      children: [
                          (0, r.jsxs)(oM, {
                              children: [
                                  null == n.promptTokens
                                      ? null
                                      : (0, r.jsx)(oP, {
                                            label: em.intl.string(ec.default.iq3T1q),
                                            value: em.intl.formatToPlainString(ec.default["6GQUgQ"], {
                                                tokens: ox(n.promptTokens),
                                            }),
                                        }),
                                  null == n.systemTokens
                                      ? null
                                      : (0, r.jsx)(oP, {
                                            label: em.intl.string(ec.default.ZELAZn),
                                            value: em.intl.formatToPlainString(ec.default.Te7mPn, {
                                                system: ox(n.systemTokens),
                                                tools: ox(n.toolsTokens ?? 0),
                                                toolCount: n.tools ?? 0,
                                                messages: ox(n.messagesTokens ?? 0),
                                                messageCount: n.messages ?? 0,
                                            }),
                                        }),
                                  null == n.inputTokens
                                      ? null
                                      : (0, r.jsx)(oP, {
                                            label: em.intl.string(ec.default["LENc/T"]),
                                            value: String(n.inputTokens),
                                        }),
                                  null == n.outputTokens
                                      ? null
                                      : (0, r.jsx)(oP, {
                                            label: em.intl.string(ec.default.ewRHwx),
                                            value: String(n.outputTokens),
                                        }),
                                  null == n.cacheReadTokens
                                      ? null
                                      : (0, r.jsx)(oP, {
                                            label: em.intl.string(ec.default.heVFQD),
                                            value: em.intl.formatToPlainString(ec.default.VO3gdd, {
                                                read: n.cacheReadTokens,
                                                write: n.cacheWriteTokens ?? 0,
                                            }),
                                        }),
                                  null == n.costUsd
                                      ? null
                                      : (0, r.jsx)(oP, {
                                            label: em.intl.string(ec.default.aBw2Vm),
                                            value: `$${n.costUsd.toFixed(4)}`,
                                        }),
                              ],
                          }),
                          (0, r.jsx)(w.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              className: oS.E7,
                              children: em.intl.string(ec.default["foF/Bc"]),
                          }),
                      ],
                  })
                : null,
            u.includes("arguments") || u.includes("result")
                ? (0, r.jsx)(w.E, {
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: oS.E7,
                      children: em.intl.string(ec.default.o24IFK),
                  })
                : null,
            u.includes("diagnostics")
                ? (0, r.jsx)(oR, {
                      title: em.intl.string(ec.default["dix/W4"]),
                      children: (0, r.jsxs)(oM, {
                          children: [
                              null == a
                                  ? null
                                  : (0, r.jsx)(oT, {
                                        label: em.intl.string(ec.default.soPsOJ),
                                        value: (0, r.jsx)(oA.Anchor, {
                                            onClick: () => i(a.id),
                                            children: (0, r.jsx)(w.E, {
                                                tag: "span",
                                                variant: "text-xs/normal",
                                                color: "none",
                                                children: "model" === a.kind ? a.model : a.tool,
                                            }),
                                        }),
                                    }),
                              0 === o
                                  ? null
                                  : (0, r.jsx)(oP, {
                                        label: em.intl.string(ec.default.kNZBxr),
                                        value: em.intl.formatToPlainString(ec.default["6LoCUh"], { count: o }),
                                    }),
                              null == n.turnId
                                  ? null
                                  : (0, r.jsx)(oP, { label: em.intl.string(ec.default.bL1r5J), value: n.turnId }),
                              (0, r.jsx)(oP, { label: em.intl.string(ec.default.Ndwr7X), value: n.id }),
                              null == m ? null : (0, r.jsx)(oP, { label: em.intl.string(ec.default.sO8ghW), value: m }),
                              "model" !== n.kind || null == n.stopReason
                                  ? null
                                  : (0, r.jsx)(oP, { label: em.intl.string(ec.default.VfYxPF), value: n.stopReason }),
                              "tool" !== n.kind || null == n.schema || 0 === n.schema.length
                                  ? null
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(w.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                className: oS.Hm,
                                                children: em.intl.string(ec.default.mSm8iy),
                                            }),
                                            n.schema.map((e) =>
                                                (0, r.jsx)(
                                                    oP,
                                                    {
                                                        label: e.name,
                                                        value: e.required
                                                            ? em.intl.formatToPlainString(ec.default["6aSRPA"], {
                                                                  type: e.type,
                                                              })
                                                            : em.intl.formatToPlainString(ec.default.q2B975, {
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
            (0, r.jsx)(w.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: oS.E7,
                children: em.intl.string(ec.default.FloyTQ),
            }),
        ],
    });
}
let oz = { model: oS.WI, subagent: oS.uM, context: oS.eH, tool: oS.pw, delegated: oS.C8 };
function oG(e) {
    let { entries: t } = e,
        n = s.useMemo(
            () =>
                (function (e) {
                    let t = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 },
                        n = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 };
                    for (let l of e) {
                        let e = ov(l);
                        ((t[e] += l.durationMs ?? 0), (n[e] += 1));
                    }
                    return oy.map((e) => ({ category: e, ms: t[e], calls: n[e] }));
                })(t),
            [t],
        ),
        l = n.reduce((e, t) => e + t.ms, 0);
    return (0, r.jsxs)("div", {
        className: oS.M0,
        children: [
            (0, r.jsx)("div", {
                className: oS.pZ,
                "aria-hidden": !0,
                children:
                    0 === l
                        ? null
                        : n.map((e) => {
                              let { category: t, ms: n } = e;
                              return 0 === n
                                  ? null
                                  : (0, r.jsx)(
                                        "div",
                                        {
                                            className: `${oS.dL} ${oz[t]}`,
                                            style: { "--custom-conjure-trace-segment-weight": String(n) },
                                        },
                                        t,
                                    );
                          }),
            }),
            (0, r.jsx)("div", {
                className: oS.z4,
                role: "group",
                "aria-label": em.intl.string(ec.default["Gioq+C"]),
                children: oy.map((e) => {
                    let t = n.find((t) => t.category === e),
                        a = t?.ms ?? 0,
                        i = t?.calls ?? 0,
                        s = 0 === l ? 0 : Math.round((a / l) * 100);
                    return (0, r.jsxs)(
                        "div",
                        {
                            className: oS.fI,
                            children: [
                                (0, r.jsx)("span", { className: `${oS.A9} ${oz[e]}`, "aria-hidden": !0 }),
                                (0, r.jsx)(w.E, { variant: "text-xs/normal", color: "text-muted", children: ob(e) }),
                                (0, r.jsx)(w.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: em.intl.formatToPlainString(ec.default["3dQ1ly"], { percent: s }),
                                }),
                                (0, r.jsx)(w.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: em.intl.formatToPlainString(ec.default.Ow0k34, { count: i }),
                                }),
                                0 === a
                                    ? null
                                    : (0, r.jsx)(w.E, {
                                          variant: "text-xs/normal",
                                          color: "text-subtle",
                                          tabularNumbers: !0,
                                          children: og(a),
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
function oU(e) {
    let { entry: t, selected: n, tabbable: l, onSelect: a, onKeyDown: i, nested: s } = e,
        o = ov(t),
        u = "model" === t.kind ? t.model : t.tool,
        d =
            "model" === t.kind && null != t.promptTokens
                ? em.intl.formatToPlainString(ec.default["6GQUgQ"], { tokens: ox(t.promptTokens) })
                : null != t.durationMs
                  ? og(t.durationMs)
                  : null;
    return (0, r.jsxs)(k.D, {
        tag: "div",
        role: "option",
        "aria-selected": n,
        tabIndex: l ? 0 : -1,
        id: `trace-${t.id}`,
        className: `${oS.nM} ${s ? oS.A5 : ""} ${"error" === t.status ? oS.Cr : ""} ${n ? oS.CZ : ""}`,
        onKeyDown: i,
        onClick: () => a(t.id),
        children: [
            (0, r.jsxs)("div", {
                className: oS.sU,
                children: [
                    (0, r.jsx)(oI, { status: t.status }),
                    (0, r.jsx)(oC, { category: o }),
                    (0, r.jsx)(w.E, {
                        variant: "text-xs/semibold",
                        color: "text-default",
                        className: oS.G9,
                        children: u,
                    }),
                    null == d
                        ? null
                        : (0, r.jsx)(w.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              tabularNumbers: !0,
                              className: oS.j2,
                              children: d,
                          }),
                ],
            }),
            "tool" === t.kind && null != t.summary
                ? (0, r.jsx)(w.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: oS.Ne,
                      children: t.summary,
                  })
                : null,
            null == t.error
                ? null
                : (0, r.jsx)(w.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: oS.Xu,
                      children: t.error,
                  }),
        ],
    });
}
function oq(e) {
    var t;
    let { projectId: n, query: l } = e,
        a = (0, f.yK)([eR.Ay], () => eR.Ay.getTrace(n), [n]),
        i = (0, f.bG)([eR.Ay], () => eR.Ay.getHistoryState(n, "trace"));
    s.useEffect(() => op, [n]);
    let [o, u] = s.useState(null),
        [d, c] = s.useState(40),
        [m, h] = s.useState(!1),
        p = s.useRef(null),
        g = s.useRef(null),
        x = s.useRef(null),
        b = s.useRef(null),
        v = s.useId(),
        y = s.useCallback((e) => {
            null != e && document.getElementById(`trace-${e}`)?.focus();
        }, []),
        j = s.useCallback((e) => u((t) => (t === e ? null : e)), []),
        k = s.useCallback((e) => {
            let t = p.current?.offsetHeight ?? 0;
            return 0 === t ? 40 : (0, al.clamp)((e / t) * 100, 25, 75);
        }, []),
        C = s.useCallback((e) => {
            let t = p.current?.offsetHeight ?? 0;
            return 0 === t ? e : (0, al.clamp)(e, (25 * t) / 100, (75 * t) / 100);
        }, []),
        A = (0, or.A)({
            resizableDomNodeRef: g,
            orientation: or.R.VERTICAL_TOP,
            getClampedValue: C,
            onElementResize: (e) => c(k(e)),
            onElementResizeStart: () => h(!0),
            onElementResizeEnd: () => h(!1),
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        N = s.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), A(e));
            },
            [A],
        ),
        S = s.useCallback((e) => {
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
            null != t && (e.preventDefault(), c((e) => (0, al.clamp)(e + t, 25, 75)));
        }, []),
        E = s.useCallback(() => {
            (u(null), y(o));
        }, [o, y]),
        I = s.useMemo(() => oj(a, l), [a, l]),
        T = s.useMemo(
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
                })(a)
                    .map((e, t) => ({ ...e, index: t, entries: oj(e.entries, l) }))
                    .filter((e) => e.entries.length > 0),
            [a, l],
        ),
        P = ow(I, o),
        M = P?.kind === "tool" ? ow(a, P.parentId ?? null) : null,
        _ = null == P ? 0 : ((t = P.id), a.filter((e) => "tool" === e.kind && e.parentId === t)).length,
        R = I[I.length - 1];
    s.useLayoutEffect(() => {
        if (null != o) return;
        let e = x.current?.getScrollerNode();
        null != e && (e.scrollTop = e.scrollHeight);
    }, [R, o]);
    let L = s.useCallback(
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
    return 0 === a.length
        ? (0, r.jsx)("div", {
              className: oS.uP,
              ref: p,
              children: (0, r.jsx)(s6, {
                  state: i,
                  emptyTitle: em.intl.string(ec.default["Tpvy/s"]),
                  emptyBody: em.intl.string(ec.default.J0WcVA),
              }),
          })
        : (0, r.jsxs)("div", {
              className: `${oS.uP} ${m ? oS.F4 : ""}`,
              ref: p,
              children: [
                  (0, r.jsxs)("div", {
                      className: oS.DK,
                      children: [
                          (0, r.jsx)(oG, { entries: a }),
                          (0, r.jsx)(s1, { state: i }),
                          0 === I.length
                              ? (0, r.jsx)("div", {
                                    className: oS.Ie,
                                    children: (0, r.jsx)(w.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children: em.intl.string(ec.default.tDB4lC),
                                    }),
                                })
                              : (0, r.jsxs)(n5.Ch, {
                                    ref: x,
                                    className: oS.Ns,
                                    children: [
                                        (0, r.jsx)(s9, { state: i }),
                                        (0, r.jsx)("div", {
                                            ref: b,
                                            id: v,
                                            role: "listbox",
                                            "aria-label": em.intl.string(ec.default.SGbiNE),
                                            className: oS.p_,
                                            children: T.map((e) => {
                                                let t = oo(e.startedAt),
                                                    n = em.intl.formatToPlainString(ec.default.gPwGYA, {
                                                        number: e.index + 1,
                                                    });
                                                return (0, r.jsxs)(
                                                    "div",
                                                    {
                                                        role: "presentation",
                                                        children: [
                                                            (0, r.jsxs)("div", {
                                                                className: oS.mf,
                                                                children: [
                                                                    (0, r.jsx)(w.E, {
                                                                        variant: "text-xs/semibold",
                                                                        color: "text-muted",
                                                                        children: n,
                                                                    }),
                                                                    (0, r.jsx)(w.E, {
                                                                        variant: "text-xs/normal",
                                                                        color: "text-subtle",
                                                                        tabularNumbers: !0,
                                                                        children: t ?? "",
                                                                    }),
                                                                    null == e.spanMs
                                                                        ? null
                                                                        : (0, r.jsx)(w.E, {
                                                                              variant: "text-xs/normal",
                                                                              color: "text-subtle",
                                                                              tabularNumbers: !0,
                                                                              children: og(e.spanMs),
                                                                          }),
                                                                ],
                                                            }),
                                                            (0, r.jsx)("div", {
                                                                role: "group",
                                                                "aria-label": n,
                                                                className: oS.M5,
                                                                children: e.entries.map((e) =>
                                                                    (0, r.jsx)(
                                                                        oU,
                                                                        {
                                                                            entry: e,
                                                                            selected: e.id === o,
                                                                            tabbable: e.id === (o ?? I[0]?.id),
                                                                            onSelect: j,
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
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("div", {
                                    role: "separator",
                                    "aria-orientation": "horizontal",
                                    "aria-label": em.intl.string(ec.default.DtSORy),
                                    "aria-valuenow": Math.round(d),
                                    "aria-valuemin": 25,
                                    "aria-valuemax": 75,
                                    tabIndex: 0,
                                    className: oS.b1,
                                    onPointerDown: N,
                                    onKeyDown: S,
                                }),
                                (0, r.jsx)("div", {
                                    ref: g,
                                    className: oS.Or,
                                    style: { "--custom-conjure-trace-detail-share": String(d) },
                                    children: (0, r.jsx)(oF, {
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
function o$(e) {
    let { projectId: t, query: n, onQueryChange: l } = e,
        a = (0, f.yK)([eR.Ay], () => eR.Ay.getTrace(t), [t]),
        i = s.useRef(null),
        o = s.useCallback(() => {
            ed(
                new Blob(
                    [
                        JSON.stringify(
                            {
                                kind: "vibegrations.trace",
                                version: 1,
                                project_id: t,
                                exported_at: new Date().toISOString(),
                                note: 'Redacted developer trace. Tool arguments, results and prompts are reported as sizes and allowlisted technical values only; token counts marked "estimated" are a chars/4 heuristic measured before sending.',
                                entries: a,
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
        }, [a, t]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: oS.ED,
                children: (0, r.jsx)(s0.I, {
                    query: n,
                    onChange: l,
                    onClear: () => l(""),
                    size: "sm",
                    placeholder: em.intl.string(ec.default["EY8/Mt"]),
                    "aria-label": em.intl.string(ec.default["EY8/Mt"]),
                }),
            }),
            (0, r.jsx)(en.Y, {
                targetElementRef: i,
                position: "bottom",
                align: "right",
                animation: en.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, r.jsx)(el.W, {
                        "data-menu-migrated": !0,
                        navId: `conjure-trace-actions-${t}`,
                        "aria-label": em.intl.string(em.t.ogxXGq),
                        onClose: n,
                        onSelect: n,
                        children: (0, r.jsx)(ea.rX, {
                            children: (0, r.jsx)(ea.Dr, {
                                id: "export",
                                label: em.intl.string(ec.default.WXrPRZ),
                                disabled: 0 === a.length,
                                action: o,
                            }),
                        }),
                    });
                },
                children: (e, t) => {
                    let { isShown: n } = t;
                    return (0, r.jsx)(t7.K, {
                        ...e,
                        buttonRef: i,
                        icon: t8.MoreHorizontalIcon,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": em.intl.string(em.t["UKOtz+"]),
                        "aria-haspopup": "menu",
                        "aria-expanded": n,
                    });
                },
            }),
        ],
    });
}
var oB = n(592465);
function oH(e) {
    let { projectId: t, onClose: n } = e,
        [l, a] = s.useState("logs"),
        [i, o] = s.useState(""),
        u = (0, f.bG)([sx.A], () => sx.A.isDeveloper),
        d = (0, f.bG)([sS], () => sS.getStatus(t), [t]),
        c = (0, f.bG)([sS], () => sS.getFetchState(t), [t]);
    s.useEffect(() => {
        (0, er.R7)(t);
    }, [t]);
    let m = s.useCallback(() => (0, er.R7)(t), [t]),
        h = s.useCallback(() => {
            (0, nn.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: sS.getStatus(t),
                        last_turn_usage: sS.getLastTurnUsage(t),
                        last_compaction: sS.getLastCompaction(t),
                        last_compaction_decline: sS.getLastCompactionDecline(t),
                        model_calls: sS.getModelCalls(t),
                        logs: eR.Ay.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, v.P)((0, y.o)(em.intl.string(ec.default.wI6fhl), j.Ck.SUCCESS)),
            );
        }, [t]),
        p = em.intl.string(ec.default["Q4FN+H"]);
    return (0, r.jsxs)("section", {
        className: oB.nd,
        "aria-label": p,
        children: [
            (0, r.jsxs)(n3.Ay, {
                "aria-label": p,
                toolbar: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(n3.Ay.Icon, {
                            icon: sp.CopyIcon,
                            tooltip: em.intl.string(ec.default.TkHqy2),
                            onClick: h,
                        }),
                        (0, r.jsx)(n3.Ay.Icon, { icon: O.P, tooltip: em.intl.string(em.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, r.jsx)(n3.Ay.ChannelIcon, { icon: I.BugIcon, "aria-hidden": !0 }),
                    (0, r.jsx)(n3.Ay.Title, { children: p }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: oB.rf,
                children: [
                    (0, r.jsxs)(sg.V, {
                        selectedItem: l,
                        type: "top",
                        onItemSelect: (e) => a(e),
                        "aria-label": em.intl.string(ec.default.RvvWIh),
                        className: oB.vR,
                        children: [
                            (0, r.jsx)(sg.V.Item, { id: "logs", children: em.intl.string(ec.default["+VRYCm"]) }),
                            (0, r.jsx)(sg.V.Item, { id: "worker", children: em.intl.string(ec.default["50D0FZ"]) }),
                            (0, r.jsx)(sg.V.Item, { id: "agent", children: em.intl.string(ec.default.UkbTK1) }),
                            u
                                ? (0, r.jsx)(sg.V.Item, { id: "trace", children: em.intl.string(ec.default.O6nNjP) })
                                : null,
                        ],
                    }),
                    "logs" === l
                        ? (0, r.jsx)(s4, { projectId: t })
                        : "worker" === l
                          ? (0, r.jsx)(oi, { status: d, fetchState: c, onRefresh: m })
                          : "trace" === l && u
                            ? (0, r.jsxs)("div", {
                                  className: oB.uP,
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: oB.XH,
                                          children: (0, r.jsx)(o$, { projectId: t, query: i, onQueryChange: o }),
                                      }),
                                      (0, r.jsx)(oq, { projectId: t, query: i }),
                                  ],
                              })
                            : (0, r.jsx)(sQ, { projectId: t, status: d, fetchState: c, onRefresh: m, traceVisible: u }),
                ],
            }),
        ],
    });
}
var oV = n(333007),
    oW = n(365912),
    oK = n(775121),
    oX = n(873715);
function oY(e) {
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
let oJ = Object.freeze({ x: -1, y: -1 });
function oQ(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = oY(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var oZ = n(470779);
function o0(e) {
    let {
            projectId: t,
            at: n,
            bounds: l,
            kind: a,
            value: i,
            onChange: o,
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
        } = iV({ projectId: t, surface: "design", onUploadFile: h }),
        j = s.useRef(null),
        w = (m || p.length > 0) && v && !f,
        k = s.useCallback(() => {
            if (!w) return;
            let e = y();
            d(e.length > 0 ? e : void 0);
        }, [w, y, d]),
        [A, N] = s.useState(!1);
    s.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => N(!0));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, []);
    let S = s.useRef(null),
        [E, I] = s.useState(null);
    s.useLayoutEffect(() => {
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
    return (0, r.jsxs)("div", {
        ref: S,
        className: u()(oZ.M0, { [oZ.ho]: A && !f, [oZ.ET]: f }),
        style: { left: _, top: R },
        "data-testid": "conjure-design-compose-bar",
        children: [
            (0, r.jsx)("input", {
                ref: j,
                type: "file",
                multiple: !0,
                className: oZ.Fg,
                tabIndex: -1,
                "aria-hidden": !0,
                onChange: (e) => {
                    (g(Array.from(e.target.files ?? [])), (e.target.value = ""));
                },
            }),
            (0, r.jsx)(C.m, {
                position: "bottom",
                text: em.intl.string(ec.default.lgvqSB),
                ariaHidden: !0,
                children: (0, r.jsx)("button", {
                    type: "button",
                    className: oZ.tY,
                    onClick: () => j.current?.click(),
                    "aria-label": em.intl.string(ec.default.lgvqSB),
                    children: (0, r.jsx)(ei.H, { size: "custom", color: "currentColor", className: oZ.WW }),
                }),
            }),
            (0, r.jsx)(lw.y, {
                autoFocus: !0,
                rows: 1,
                className: oZ.hF,
                value: i,
                placeholder: "" === a ? em.intl.string(ec.default.MPPV1Q) : `Edit ${a}`,
                "aria-label": em.intl.string(ec.default.KCYqWL),
                onChange: (e) => o(e.target.value),
                onPaste: f ? void 0 : x,
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), e.stopPropagation(), c());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), k());
                },
            }),
            p.length > 0
                ? (0, r.jsx)("div", {
                      className: oZ.ZO,
                      children: p.map((e) => (0, r.jsx)(iW, { draft: e, onRemove: b }, e.localId)),
                  })
                : null,
        ],
    });
}
var o2 = n(192888);
function o1(e, t) {
    return (0, o2.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(oQ, () => ({ status: "failed" }));
}
var o6 = n(108308);
let o9 = { x: 25, y: 21 };
function o3(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function o5(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function o4(e, t, n, l) {
    let a = o5(e, n, l);
    return { x: a.left + a.width * t.x, y: a.top + a.height * t.y };
}
function o7(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function o8(e) {
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
function ue(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: a, toggleRef: i } = e,
        o = null != n && n === l ? t : null,
        { active: u, annotations: d } = tr(o),
        c = (0, tw.Zv)(o),
        m = (0, eA.useHasAnyModalOpen)(),
        h = (0, f.bG)([tW.default], () => tW.default.getCurrentUser()),
        p = h?.id ?? null,
        [g, x] = s.useState(null),
        [b, v] = s.useState(null),
        [y, j] = s.useState(!1),
        [k, C] = s.useState(!1),
        [A, N] = s.useState(null),
        [E, I] = s.useState(!1),
        T = s.useRef(null),
        P = s.useRef(null),
        M = s.useRef(null),
        [_, L] = s.useState(null),
        [D, O] = s.useState(!1),
        [F, z] = s.useState(null),
        [G, U] = s.useState(null),
        q = s.useRef(!1),
        [$, B] = s.useState(!1),
        [H, V] = s.useState(null),
        W = u && !c && !m;
    null == F || (W && F.projectId === o) || z(null);
    let K = F?.projectId ?? null;
    (s.useEffect(() => {
        if (null != K) return () => lW(K, "design");
    }, [K]),
        s.useEffect(() => {
            if (!W) return;
            function e() {
                let e = (function (e) {
                    if (null == e) return null;
                    let t = e.getBoundingClientRect();
                    return t.width < 1 || t.height < 1
                        ? null
                        : { left: t.left, top: t.top, width: t.width, height: t.height };
                })(a());
                x((t) => (o3(t, e) ? t : e));
            }
            e();
            let t = window.setInterval(e, 250);
            return (
                window.addEventListener("resize", e),
                () => {
                    (window.clearInterval(t), window.removeEventListener("resize", e));
                }
            );
        }, [W, a]),
        s.useEffect(() => {
            if (!W || null == o) return;
            let e = !0,
                t = a();
            if (null == t) return void C(!0);
            (j(!0), C(!1));
            let n = `design-feedback-${crypto.randomUUID()}`;
            return (
                (0, oX.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                    (t) => {
                        if (!e) return;
                        j(!1);
                        let n = "completed" === t.status ? o8(t.response) : null;
                        null == n ? C(!0) : (v(n), tl(o, { url: n.url, title: n.title, viewport: n.viewport }));
                    },
                    () => {
                        e && (j(!1), C(!0));
                    },
                ),
                () => {
                    e = !1;
                }
            );
        }, [W, a, o]));
    let X = s.useRef(null);
    (s.useEffect(() => {
        if (!W || null == g || null == o) return;
        if (null == b) {
            X.current = g;
            return;
        }
        if (o3(X.current, g)) return;
        let e = window.setTimeout(() => {
            let e = a();
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
                    (0, oX.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !Z.current) return;
                        let l = o8(e.response);
                        null != l && (v(l), tl(o, { url: l.url, title: l.title, viewport: l.viewport }));
                        let a = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let i = oY(e.element);
                            null != i && a.set(l.id, i);
                        }),
                            (n = te(o)).active &&
                                0 !== a.size &&
                                tt(o, {
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
    }, [W, g, b, d, o, a]),
        s.useEffect(() => {
            if (!W)
                return () => {
                    (N(null), z(null), V(null), v(null));
                };
        }, [W]));
    let Y = s.useRef(null),
        J = s.useRef(null),
        Q = s.useRef(!1),
        Z = s.useRef(!1);
    s.useEffect(() => {
        ((Z.current = W), W || ((Y.current = null), (J.current = null), (M.current = null), I(!1)));
    }, [W]);
    let ee = s.useCallback(
            function e() {
                if (Q.current) return;
                let t = Y.current;
                if (null == t) return;
                Y.current = null;
                let n = a();
                null != n &&
                    ((Q.current = !0),
                    o1(n, t).then((t) => {
                        if (((Q.current = !1), Z.current)) {
                            if ("picked" !== t.status || ur(t.target, ei.current.rect, ei.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? N(null)
                                    : "unsupported" === t.status && O(!0);
                            else {
                                let e = e2(t.target);
                                (L((t) => (ui(t, e) ? t : e)),
                                    N((e) => {
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
            [a],
        ),
        et = s.useCallback(() => {
            if (null == F) return;
            let e = !q.current;
            (U({ at: F.at, label: F.label, draft: F.draft, instant: e }), B(e), z(null));
        }, [F]);
    (s.useEffect(() => {
        if (!$) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => B(!1));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [$]),
        s.useEffect(() => {
            if (null == G) return;
            let e = setTimeout(() => U(null), ul);
            return () => clearTimeout(e);
        }, [G]));
    let en = null == b || null == g || b.viewport.width < 1 ? 1 : g.width / b.viewport.width,
        el = null != b || k,
        ea = s.useMemo(() => b?.elements ?? [], [b]),
        ei = s.useRef({ rect: null, scale: 1 });
    s.useLayoutEffect(() => {
        ei.current = { rect: g, scale: en };
    }, [g, en]);
    let es = s.useCallback(
            (e, t, n) => {
                null != o &&
                    (lW(o, "design"),
                    V(null),
                    (q.current = !1),
                    z({ projectId: o, target: e, anchor: t, draft: "", at: n, label: e2(e) }));
            },
            [o],
        ),
        eo = s.useCallback((e, t) => ({ x: (e.clientX - t.left) / en, y: (e.clientY - t.top) / en }), [en]),
        eu = s.useCallback(() => {
            let e = M.current;
            if (null == e) return;
            let t = T.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let n = P.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    s.useLayoutEffect(eu);
    let ed = s.useCallback(
            (e) => {
                if (null == g || null != H) return;
                if (((M.current = { x: e.clientX, y: e.clientY }), eu(), I(!0), null != F)) {
                    (Math.abs(e.clientX - F.at.x) > ua || Math.abs(e.clientY - F.at.y) > ua) && (q.current = !0);
                    return;
                }
                if (!el) return void N(null);
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
                        })(ea, t.x, t.y),
                        n = null != e && ur(e, g, en) ? null : e;
                    if (null != n) {
                        let e = e2(n);
                        L((t) => (ui(t, e) ? t : e));
                    }
                    N((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = J.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((J.current = n), (Y.current = n), ee());
            },
            [g, en, el, eo, D, ea, F, H, eu, ee],
        ),
        ef = null == H ? null : d.find((e) => e.id === H.id),
        eh = W && (E || F?.target.marker != null || ef?.target.marker != null);
    s.useEffect(() => {
        if (eh)
            return () => {
                let e = a();
                null != e && o1(e, oJ);
            };
    }, [eh, a]);
    let ep = s.useCallback(() => {
        (I(!1), N(null), (J.current = null), (Y.current = null));
    }, []);
    s.useEffect(() => {
        if (!W || !E || !el || D || null != F || null != H) return;
        let e = M.current,
            { rect: t, scale: n } = ei.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((J.current = l), (Y.current = l), ee());
    }, [W, E, el, D, F, H, ee]);
    let eg = s.useCallback(
            (e) => {
                if (null != F || null != H) {
                    (et(), V(null));
                    return;
                }
                if (null == A || null == g) return;
                let t = eo(e, g);
                es(
                    A,
                    (function (e, t, n) {
                        let { x: l, y: a, width: i, height: r } = e.rect;
                        return i < 1 || r < 1
                            ? eZ
                            : { x: Math.min(1, Math.max(0, (t - l) / i)), y: Math.min(1, Math.max(0, (n - a) / r)) };
                    })(A, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [A, g, eo, F, H, es, et],
        ),
        ex = s.useCallback(() => {
            null != o && (N(null), tn(o));
        }, [o]),
        eb = s.useCallback(() => {
            null != o &&
                (null != F
                    ? et()
                    : H?.confirmingRemove === !0
                      ? V({ ...H, confirmingRemove: !1 })
                      : null != H
                        ? V(null)
                        : ex());
        }, [o, F, H, et, ex]),
        ev = s.useRef(eb),
        ey = s.useRef(ex);
    s.useLayoutEffect(() => {
        ((ev.current = eb), (ey.current = ex));
    });
    let ej = s.useRef(null);
    s.useEffect(() => {
        if (W)
            return (
                oK.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        oK.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), ev.current());
        }
        function t(e) {
            let t = e.target;
            (0, tR.vq)(t) &&
                ej.current?.contains(t) !== !0 &&
                i?.current?.contains(t) !== !0 &&
                !(function (e) {
                    try {
                        return ((0, oW.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) &&
                ey.current();
        }
    }, [W, i]);
    let ew = s.useCallback(
            (e) => {
                if (null == o) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), eb());
                    return;
                }
                if (null != F || null != H || 0 === ea.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    n = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || n) {
                    e.preventDefault();
                    let n = null == A ? -1 : ea.findIndex((e) => e.ref === A.ref);
                    N(ea[(n + (t ? 1 : -1) + ea.length) % ea.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != A &&
                    (e.preventDefault(),
                    es(A, eZ, { x: (g?.left ?? 0) + A.rect.x * en, y: (g?.top ?? 0) + A.rect.y * en }));
            },
            [o, F, H, ea, A, es, eb, g, en],
        ),
        ek = s.useCallback(
            (e) => {
                null == o ||
                    null == F ||
                    ((e0(F.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, er.dv)(
                            o,
                            (function (e, t) {
                                let { kind: n, name: l } = e2(e),
                                    a = [n, l].filter((e) => "" !== e).join(": ");
                                return `${e9}${a}${e3}${e6(e)}
${t.trim()}`;
                            })(F.target, F.draft),
                            e,
                        ),
                        et(),
                        N(null)));
            },
            [o, F, et],
        ),
        eC = s.useCallback((e) => (null == o ? Promise.reject(Error("no project")) : (0, er.vX)(o, e)), [o]),
        eN = s.useCallback(() => {
            if (null != o && null != H && null != p && e0(H.draft)) {
                var e, t;
                let n, l;
                ((e = H.id),
                    (t = H.draft.trim()),
                    null != (l = (n = te(o)).annotations.find((t) => t.id === e)) &&
                        ta(l, p) &&
                        tt(o, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    V({ ...H, editing: !1 }));
            }
        }, [o, H, p]),
        eS = s.useCallback(() => {
            if (null != o && null != H && null != p) {
                var e;
                let t, n;
                ((e = H.id),
                    null != (n = (t = te(o)).annotations.find((t) => t.id === e)) &&
                        ta(n, p) &&
                        tt(o, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    V(null));
            }
        }, [o, H, p]),
        eE = u
            ? y
                ? em.intl.string(ec.default["Eb/YV9"])
                : k
                  ? em.intl.string(ec.default.FD30bh)
                  : em.intl.formatToPlainString(ec.default.dTSqLF, { count: d.length })
            : "",
        eI = W && null != g,
        eT = E && null == H,
        eP = F?.target ?? ef?.target ?? null,
        eM = F ?? G,
        e_ = F ?? (G?.instant === !0 ? null : G),
        eR =
            null != ef && null != g
                ? (function (e, t) {
                      let { left: n, top: l } = o7(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(o4(ef.target, ef.anchor, g, en), g)
                : null;
    return (
        s.useEffect(() => {
            let e = a();
            if (ef?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = ef;
            o1(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [ef, a]),
        (0, oV.createPortal)(
            (0, r.jsxs)("div", {
                ref: ej,
                className: o6.Li,
                children: [
                    (0, r.jsx)("div", {
                        className: o6.y4,
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-design-announcer",
                        children: eE,
                    }),
                    eI
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)("div", {
                                      className: o6.MT,
                                      style: { left: g.left, top: g.top, width: g.width, height: g.height },
                                      "data-plain-cursor": eT ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": em.intl.string(ec.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: ed,
                                      onMouseLeave: ep,
                                      onClick: eg,
                                      onKeyDown: ew,
                                  }),
                                  null != A && null == A.marker && null == F && null == H
                                      ? (0, r.jsx)(us, { box: o5(A, g, en) })
                                      : null,
                                  (0, r.jsx)("div", {
                                      ref: T,
                                      className: o6.aZ,
                                      children: (0, r.jsx)("div", {
                                          className: o6.xz,
                                          "data-shown": null != A && null == H && null == F ? "" : void 0,
                                          "data-instant": $ ? "" : void 0,
                                          children: (0, r.jsxs)(w.E, {
                                              variant: "text-xs/medium",
                                              className: o6.Ux,
                                              children: [
                                                  null == _
                                                      ? null
                                                      : (0, r.jsx)("span", { className: o6.Tl, children: _.kind }),
                                                  null == _ || "" === _.name
                                                      ? null
                                                      : (0, r.jsxs)("span", {
                                                            className: o6.kh,
                                                            children: [" ", _.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, r.jsx)("div", {
                                      ref: P,
                                      className: o6.Y,
                                      children: eT ? (0, r.jsx)("div", { className: o6.u }) : null,
                                  }),
                                  null == e_
                                      ? null
                                      : (0, r.jsx)("div", {
                                            className: o6.aZ,
                                            style: {
                                                transform: `translate3d(${e_.at.x + 20}px, ${e_.at.y + 20}px, 0)`,
                                            },
                                            children: (0, r.jsx)("div", {
                                                className: o6.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == F ? "" : void 0,
                                                children: (0, r.jsxs)(w.E, {
                                                    variant: "text-xs/medium",
                                                    className: o6.Ux,
                                                    children: [
                                                        (0, r.jsx)("span", {
                                                            className: o6.Tl,
                                                            children: e_.label.kind,
                                                        }),
                                                        "" === e_.label.name
                                                            ? null
                                                            : (0, r.jsxs)("span", {
                                                                  className: o6.kh,
                                                                  children: [" ", e_.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eP && null == eP.marker
                                      ? (0, r.jsx)("div", { className: o6.D0, style: o5(eP, g, en), "aria-hidden": !0 })
                                      : null,
                                  d.map((e, t) => {
                                      let n = o4(e.target, e.anchor, g, en),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, r.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: o6.xL,
                                              style: { ...o7(n, g), width: 24, height: 24 },
                                              "aria-label": em.intl.formatToPlainString(ec.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: e1(e.target),
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
                                              children: (0, r.jsx)(ut, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eM || null == o
                                      ? null
                                      : (0, r.jsx)(o0, {
                                            projectId: o,
                                            at: { x: eM.at.x + 20, y: eM.at.y + 20 },
                                            bounds: g,
                                            kind: eM.label.kind,
                                            value: eM.draft,
                                            canSubmit: null != F && e0(eM.draft),
                                            onChange: (e) => {
                                                null != F && z({ ...F, draft: e });
                                            },
                                            onSubmit: ek,
                                            onDismiss: et,
                                            onUploadFile: eC,
                                            closing: null == F,
                                        }),
                                  null != ef && null != H && null != eR
                                      ? (0, r.jsxs)(un, {
                                            point: eR,
                                            frame: g,
                                            authorId: ef.authorId,
                                            title: e1(ef.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                H.confirmingRemove ? V({ ...H, confirmingRemove: !1 }) : V(null);
                                            },
                                            onMouseLeave: () => {
                                                H.editing || H.confirmingRemove || V(null);
                                            },
                                            children: [
                                                H.editing
                                                    ? (0, r.jsx)(R.f, {
                                                          autoFocus: !0,
                                                          label: em.intl.string(ec.default.KCYqWL),
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
                                                    : (0, r.jsx)(w.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-default",
                                                          className: o6.aC,
                                                          children: ef.comment,
                                                      }),
                                                ta(ef, p)
                                                    ? (0, r.jsx)("div", {
                                                          className: o6.eB,
                                                          children: H.confirmingRemove
                                                              ? (0, r.jsxs)(r.Fragment, {
                                                                    children: [
                                                                        (0, r.jsx)(w.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: o6.nv,
                                                                            children: em.intl.string(ec.default.wOHvts),
                                                                        }),
                                                                        (0, r.jsx)(S.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: em.intl.string(ec.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                V({ ...H, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, r.jsx)(S.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: em.intl.string(ec.default.friIzR),
                                                                            "data-testid":
                                                                                "conjure-design-remove-confirm",
                                                                            onClick: eS,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, r.jsxs)(r.Fragment, {
                                                                    children: [
                                                                        (0, r.jsx)(S.$, {
                                                                            variant: "critical-secondary",
                                                                            size: "sm",
                                                                            text: em.intl.string(ec.default.friIzR),
                                                                            onClick: () =>
                                                                                V({
                                                                                    ...H,
                                                                                    editing: !1,
                                                                                    confirmingRemove: !0,
                                                                                }),
                                                                        }),
                                                                        H.editing
                                                                            ? (0, r.jsx)(S.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !e0(H.draft),
                                                                                  text: em.intl.string(
                                                                                      ec.default.iicRP9,
                                                                                  ),
                                                                                  onClick: eN,
                                                                              })
                                                                            : (0, r.jsx)(S.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: em.intl.string(
                                                                                      ec.default["6eW9lg"],
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
function ut(e) {
    let { authorId: t } = e,
        n = (0, f.bG)([tW.default], () => tW.default.getUser(t), [t]);
    return (0, r.jsx)(aq.eu, {
        src: null == n ? null : aH.Ay.getUserAvatarURL(n),
        size: a$._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function un(e) {
    let t,
        n,
        l,
        a,
        i,
        o,
        { point: u, frame: d, authorId: c, title: m, testId: f, onDismiss: h, onMouseLeave: p, children: g } = e,
        x = s.useRef(null),
        b = s.useRef(null),
        [v, y] = s.useState(o9);
    s.useLayoutEffect(() => {
        let e = x.current?.getBoundingClientRect(),
            t = b.current?.getBoundingClientRect();
        if (null == e || null == t || e.width < 1 || t.width < 1) return;
        let n = { x: t.left + t.width / 2 - e.left, y: t.top + t.height / 2 - e.top };
        y((e) => (0.5 > Math.abs(e.x - n.x) && 0.5 > Math.abs(e.y - n.y) ? e : n));
    }, []);
    let {
            left: j,
            top: k,
            originX: C,
            originY: A,
        } = ((n = Math.max((t = d.left + 8), d.left + d.width - 300 - 8)),
        (a = Math.max((l = d.top + 8), d.top + d.height - 160 - 8)),
        (i = Math.min(Math.max(u.x - v.x, t), n)),
        { left: i, top: (o = Math.min(Math.max(u.y - v.y, l), a)), originX: u.x - i, originY: u.y - o }),
        N = { left: j, top: k, "--custom-conjure-card-origin-x": `${C}px`, "--custom-conjure-card-origin-y": `${A}px` };
    return (0, r.jsxs)("div", {
        ref: x,
        className: o6.Nr,
        style: N,
        "data-testid": f,
        onMouseLeave: p,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, r.jsxs)("div", {
                className: o6.MY,
                children: [
                    (0, r.jsx)("span", { ref: b, className: o6.ip, children: (0, r.jsx)(ut, { authorId: c }) }),
                    (0, r.jsx)(w.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: o6.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: o6.zI, children: g }),
        ],
    });
}
let ul = 300,
    ua = 2;
function ui(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function ur(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        a = t.height / n;
    return !(l < 1) && !(a < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * a;
}
function us(e) {
    let { box: t } = e;
    return (0, r.jsx)("div", { className: o6.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var uo = n(659723),
    uu = n(697744),
    ud = n(130324);
function uc(e) {
    let t = (0, uu.c)(),
        { events: n, getDuration: l } = t;
    return (
        s.useEffect(() => {
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
        s.useEffect(() => {
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e]),
        t
    );
}
function um(e) {
    let { className: t } = e,
        { Component: n, events: l } = uc(3e4);
    return (0, r.jsxs)("div", {
        className: t,
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, r.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, r.jsx)(w.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: ud.o,
                children: em.intl.string(ec.default.AyiQEp),
            }),
        ],
    });
}
var uf = n(251363),
    uh = n(944142),
    up = n(532247),
    ug = n(501628);
function ux(e) {
    let { progress: t } = e,
        { Component: n } = uc(1500),
        l = Y.Q_.useSetting();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, r.jsx)(w.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, r.jsx)("div", {
                className: ug.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, r.jsx)(
                        "span",
                        {
                            className: ug.PM,
                            "data-state": n < t.stepIndex ? "done" : n === t.stepIndex ? "current" : "todo",
                        },
                        n,
                    ),
                ),
            }),
            l && null != t.stepLabel
                ? (0, r.jsx)(w.E, { variant: "text-xs/normal", color: "text-overlay-light", children: t.stepLabel })
                : null,
        ],
    });
}
function ub(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: a } = e,
        i = null != t && null != n && n === l,
        o = (0, f.bG)([uh.A], () => (i ? uh.A.getLiveReload(t) : null), [i, t]),
        u = (0, H.A)(n, a)?.id ?? null,
        d = o?.phase ?? null,
        c = (function (e, t) {
            let n = (0, up.dv)(e),
                [l, a] = s.useState(null),
                [i, r] = s.useState(n);
            i !== n && (r(n), a(null == n ? (0, up.QP)(e, i) : null));
            let o = (0, f.bG)(
                    [tP.A],
                    () => {
                        let e = tP.A.getFrame(t);
                        return (0, tz.x1)(e) && e.data.proxyTicketRefreshing;
                    },
                    [t],
                ),
                u = s.useRef(o),
                d = s.useRef(!1);
            return (
                s.useEffect(() => {
                    ((u.current = o), o && (d.current = !0));
                }, [o]),
                s.useEffect(() => {
                    if (null == l) return;
                    function e() {
                        return a(null);
                    }
                    function n(n) {
                        null != n.target && n.target === (0, uf.o)(null, t) && e();
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
        m = (0, up.h_)(d, o?.step ?? null, c);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(A.A, { tag: "div", role: "status", "aria-live": "polite", children: m?.title ?? "" }),
            null != m
                ? (0, r.jsx)("div", {
                      className: ug.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, r.jsx)(ux, { progress: m }),
                  })
                : null,
        ],
    });
}
var uv = n(343030),
    uy = n(317608),
    uj = n(206600),
    uw = n(742023),
    uk = n(347927);
function uC(e) {
    let { title: t, body: n, wide: l = !1, children: a } = e;
    return (0, r.jsxs)("div", {
        className: u()(uk.Bf, l && uk.Qx),
        children: [
            (0, r.jsxs)("div", {
                className: uk.Ux,
                children: [
                    (0, r.jsx)(P.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, r.jsx)(w.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                ],
            }),
            a,
        ],
    });
}
var uA = n(957272);
function uN(e) {
    let { applicationId: t, surface: n, frameOverlay: l } = e,
        { frame: a, state: i } = (0, uj.A)({ applicationId: t, surface: n }),
        o = (0, tz.VA)(t, n);
    switch (
        (s.useEffect(
            () => (
                !(function (e) {
                    let t = tP.A.getFrame(e);
                    if (null == t || tM.A.getWindowOpen(ej.MLl.ACTIVITY_POPOUT)) return;
                    let n = tP.A.getMainFrame()?.id === e;
                    t.intent === tz.sV.MAIN
                        ? (n || B.A.promoteFrame(e), B.A.resetFrameLayoutModes(e))
                        : n && B.A.clearMainFrameSlot();
                })(o),
                () => {
                    let e;
                    null != (e = tP.A.getFrame(o)) &&
                        ((0, tz.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        uw.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === tz.sV.INLINE && B.A.promoteFrame(o),
                              B.A.updateFrameLayoutMode({ frameId: o, layoutMode: tz.y0.PIP }))
                            : e.intent === tz.sV.MAIN && B.A.demoteMainFrame(o));
                }
            ),
            [o],
        ),
        i)
    ) {
        case uj.n.Launched:
            return (0, r.jsx)(uy.A, { frameId: a.id, level: uv.A.WithinAppContent, className: uA.Z7, overlay: l });
        case uj.n.RenderingElsewhere:
            return (0, r.jsx)("div", {
                className: uA.qs,
                children: (0, r.jsx)(uC, {
                    title: em.intl.string(ec.default["9kpdo7"]),
                    body: em.intl.string(ec.default.iIA8Nj),
                }),
            });
        case uj.n.NoApplication:
            return (0, r.jsx)(um, { className: uA.qs });
        case uj.n.DoesNotSupportSurface:
            return (0, r.jsx)("div", {
                className: uA.qs,
                children: (0, r.jsx)(uC, {
                    title: em.intl.string(ec.default["7k4GyN"]),
                    body: em.intl.string(ec.default.zdIy3R),
                }),
            });
        case uj.n.Error:
            return (0, r.jsxs)("div", {
                className: uA.qs,
                children: [
                    (0, r.jsx)(P.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: em.intl.string(ec.default.lTPbnG),
                    }),
                    (0, r.jsx)(w.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: uA.tj,
                        children: em.intl.string(ec.default.e6GiAZ),
                    }),
                ],
            });
        case uj.n.AwaitingLaunch:
        case uj.n.Loading:
            return (0, r.jsx)("div", { className: uA.qs, children: (0, r.jsx)(N.y, {}) });
    }
}
var uS = n(334738),
    uE = n(688438),
    uI = n(355622),
    uT = n(531685),
    uP = n(365971),
    uM = n(703462);
function u_(e) {
    let { message: t } = e;
    return (0, r.jsxs)("div", {
        className: uM.f,
        children: [
            (0, r.jsx)(aT.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, r.jsx)(w.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function uR() {
    return (0, r.jsx)("div", { className: uM.f, children: (0, r.jsx)(N.y, {}) });
}
function uL(e) {
    let t,
        n,
        { previewApplicationId: l } = e,
        { data: a, isLoading: i } = (0, U.YY)(l),
        o = a?.bot?.id ?? null,
        u = (0, f.bG)([J.A], () => {
            if (null == o) return null;
            let e = J.A.getDMFromUserId(o);
            return null != e ? J.A.getChannel(e) : null;
        });
    ((t = u?.id ?? null),
        s.useEffect(() => {
            null != t && nz.A.preload(ej.ME, t);
        }, [t]),
        (n = (0, f.bG)([uT.A], () => uT.A.isFocused())),
        s.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, uP.Xg)();
            return (
                (0, uS.yl)(t, e),
                () => {
                    (0, uS.dm)(t, e);
                }
            );
        }, [t, n]));
    let [d, c] = s.useState(null),
        m = null != o && d === o;
    return (s.useEffect(() => {
        if (null == o || null != u) return;
        let e = !1;
        return (
            nz.A.openPrivateChannel({ recipientIds: o, navigateToChannel: !1 }).catch(() => {
                e || c(o);
            }),
            () => {
                e = !0;
            }
        );
    }, [o, u]),
    i && null == a)
        ? (0, r.jsx)(uR, {})
        : null == o || m
          ? (0, r.jsx)(u_, { message: em.intl.string(ec.default["VP/O8s"]) })
          : null == u
            ? (0, r.jsx)(uR, {})
            : (0, r.jsx)("div", {
                  className: uM.g,
                  children: (0, r.jsx)(uE.A, { channel: u, guild: null, chatInputType: uI.oU.SIDEBAR }, u.id),
              });
}
var uD = n(887909),
    uO = n(570962),
    uF = n(998475);
function uz(e) {
    let {
        label: t,
        title: n,
        subtitle: l,
        header: a,
        body: i,
        actions: s,
        nextStep: o,
        appDetails: d,
        hasContentBackground: c,
        noPadding: m,
        obscured: f,
    } = (0, uD.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, r.jsxs)("section", {
        className: uF.Nr,
        "aria-label": t,
        children: [
            (0, r.jsx)("div", {
                className: uF.rf,
                children: (0, r.jsx)(uO.A, {
                    obscured: !0 === f,
                    children: (0, r.jsxs)("div", {
                        className: uF.Gq,
                        children: [
                            null != n
                                ? (0, r.jsxs)("div", {
                                      className: uF.z3,
                                      children: [
                                          (0, r.jsx)(P.D, {
                                              variant: "heading-lg/bold",
                                              color: "text-strong",
                                              children: n,
                                          }),
                                          null != l
                                              ? (0, r.jsx)(w.E, {
                                                    variant: "text-md/normal",
                                                    color: "text-default",
                                                    children: l,
                                                })
                                              : null,
                                      ],
                                  })
                                : null,
                            a,
                            (0, r.jsxs)("div", {
                                className: u()(uF.Qs, c ? uF.cw : null, m ? uF.pN : null),
                                children: [i, null == o ? d : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != s && s.length > 0
                ? (0, r.jsx)("div", {
                      className: uF.o1,
                      children: s.map((e, t) => (0, r.jsx)(S.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var uG = n(409478),
    uU = n(652227);
function uq(e) {
    let {
            applicationId: t,
            previewApplicationId: n,
            surface: l,
            previewReady: a,
            previewGate: i,
            availability: o,
            activeMode: u,
            widgetApplicationId: d,
            frameOverlay: c,
        } = e,
        m = (0, H.A)(t, l),
        { data: f, isLoading: h } = (0, U.YY)(t ?? void 0);
    if (
        (s.useEffect(() => {
            i?.type === "permissions" && null != m && (0, nx.A)().leaveFrame(m.id);
        }, [m, i?.type]),
        i?.type === "checking")
    )
        return (0, r.jsx)("div", { className: uU.q, children: (0, r.jsx)(N.y, {}) });
    if (i?.type === "permissions")
        return (0, r.jsx)("div", {
            className: uU.q,
            children: null == i.authorizeProps ? (0, r.jsx)(N.y, {}) : (0, r.jsx)(uz, { ...i.authorizeProps }),
        });
    if (!a) return (0, r.jsx)(um, { className: uU.q });
    if (null == t) return null;
    if (h && null == f) return (0, r.jsx)("div", { className: uU.q, children: (0, r.jsx)(N.y, {}) });
    let p = o.showModeSwitch && null != u ? { role: "tabpanel", id: (0, tq.z3)(u), "aria-label": (0, tq.kZ)(u) } : {};
    return (0, r.jsxs)("div", {
        className: uU.R,
        ...p,
        children: [
            (0, tC.yf)(o, u) ? (0, r.jsx)(uN, { applicationId: t, surface: l, frameOverlay: c }) : null,
            "widget" === u && null != d
                ? "unavailable-authorization-revoked" === o.profileState
                    ? (0, r.jsx)("div", {
                          className: uU.q,
                          children: (0, r.jsx)(uC, {
                              wide: !0,
                              title: em.intl.string(ec.default["08U+YO"]),
                              body: em.intl.string(ec.default.pKBfrc),
                          }),
                      })
                    : (0, r.jsx)(uG.A, { applicationId: d })
                : null,
            "bot" === u && null != n ? (0, r.jsx)(uL, { previewApplicationId: n }) : null,
        ],
    });
}
var u$ = n(175841),
    uB = n(750506),
    uH = n(867193),
    uV = n(417760);
function uW(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function uK(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function uX(e) {
    let { phase: t, projectId: n, onOpenPublishedApp: l, compact: a } = e,
        { stop: i, stopping: o } = (function (e) {
            let t = (0, f.bG)([tX.Ay], () => null != e && tX.Ay.isThinking(e)),
                [n, l] = s.useState(!1),
                [a, i] = s.useState(t);
            (t !== a && (i(t), t || l(!1)),
                s.useEffect(() => {
                    if (!n) return;
                    let e = setTimeout(() => l(!1), 5e3);
                    return () => clearTimeout(e);
                }, [n]));
            let r = s.useCallback(() => {
                null != e && (l(!0), (0, er.fu)(e));
            }, [e]);
            return { stop: t ? r : null, stopping: n };
        })(n),
        d = (0, tw.CU)(n),
        c = "controlling" === t,
        m = em.intl.string(c ? (d ? ec.default["VJW/5P"] : ec.default["+hD2Iz"]) : ec.default["h+i1r9"]),
        h =
            null != l
                ? (0, r.jsx)(S.$, {
                      variant: "overlay-secondary",
                      size: "sm",
                      text: em.intl.string(ec.default["1NcO7H"]),
                      onClick: l,
                  })
                : null,
        p =
            null != i
                ? (0, r.jsx)(S.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: em.intl.string(ec.default.oU59sU),
                      loading: o,
                      onClick: i,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return a
        ? (0, r.jsxs)("div", {
              className: u()(uV.M0, uV.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  c
                      ? (0, r.jsx)(r9.i, { size: 12, color: "currentColor" })
                      : (0, r.jsx)(u$.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, r.jsx)(w.E, { variant: "text-sm/semibold", color: "none", className: uV.ID, children: m }),
                  c ? (0, r.jsx)(A.A, { children: em.intl.string(ec.default.fg1sor) }) : null,
                  c ? (0, r.jsxs)("div", { className: uV.lC, children: [h, p] }) : null,
              ],
          })
        : (0, r.jsxs)("div", {
              className: uV.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, r.jsxs)("div", {
                      className: uV.sp,
                      children: [
                          (0, r.jsx)(u$.SparklesIcon, { size: "sm", color: "currentColor" }),
                          c ? (0, r.jsx)(r9.i, { size: 12, color: "currentColor" }) : null,
                          (0, r.jsxs)("div", {
                              className: uV.f4,
                              children: [
                                  (0, r.jsx)(w.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: uV.w9,
                                      children: m,
                                  }),
                                  c
                                      ? (0, r.jsx)(w.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: uV.Rb,
                                            children: em.intl.string(ec.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  c ? (0, r.jsxs)("div", { className: uV.lC, children: [h, p] }) : null,
              ],
          });
}
function uY(e) {
    let {
            projectId: t,
            applicationId: n,
            previewApplicationId: l,
            resolveTarget: a,
            frameId: i,
            onOpenPublishedApp: o = null,
        } = e,
        u = (0, tw.Zv)(null != n && n === l ? t : null),
        d = (function (e) {
            let [t, n] = s.useState(e),
                [l, a] = s.useState(!1);
            return (e !== t && (n(e), a(!e)),
            s.useEffect(() => {
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
        c = (0, eA.useHasAnyModalOpen)(),
        m = tF(i);
    s.useEffect(() => {
        u &&
            m &&
            null != i &&
            (function (e) {
                if (!tD(e)) return;
                let t = tL(e);
                null != t && (0, t_.sP)(t);
            })(i);
    }, [u, m, i]);
    let [f, h] = s.useState(null),
        [p, g] = s.useState(null),
        [x, b] = s.useState(null),
        v = "idle" !== d;
    s.useEffect(() => {
        if (!v) return;
        function e() {
            let e = uW(a());
            h((t) => (uK(t, e) ? t : e));
            let t = null == p ? null : uW(p);
            (b((e) => (uK(e, t) ? e : t)), null != p && (0, uH.C)(p.getBoundingClientRect().height));
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
                    null != p && (0, uH.C)(0));
            }
        );
    }, [v, a, p]);
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
            let [e] = s.useContext(uB.uY),
                [t] = s.useState(() => document.createElement("div"));
            return (
                s.useLayoutEffect(() => {
                    if (null != e) return (e.prepend(t), () => t.remove());
                }, [e, t]),
                null == e ? document.body : t
            );
        })();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            y
                ? (0, r.jsx)("div", {
                      ref: g,
                      className: uV.D,
                      "data-phase": d,
                      children: (0, r.jsx)("div", {
                          className: uV.QF,
                          children: (0, r.jsx)(uX, { phase: d, projectId: t, onOpenPublishedApp: o, compact: w }),
                      }),
                  })
                : null,
            (0, oV.createPortal)(
                (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)("div", {
                        className: uV.y4,
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-control-announcer",
                        children:
                            "controlling" === d
                                ? em.intl.string(ec.default.oWcemF)
                                : "handoff" === d
                                  ? em.intl.string(ec.default["h+i1r9"])
                                  : "",
                    }),
                }),
                document.body,
            ),
            j
                ? (0, oV.createPortal)(
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", {
                                  className: uV.ys,
                                  style: C,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, r.jsx)("div", {
                                  className: uV.om,
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
var uJ = n(399503),
    uQ = n(853555),
    uZ = n(591335),
    u0 = n(873727),
    u2 = n(147248),
    u1 = n(418842),
    u6 = n(363195),
    u9 = n(818023);
let u3 = null;
var u5 = n(602853),
    u4 = n(517461),
    u7 = n(487336);
function u8(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: a } = e,
        i = (0, u5.r)(z.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = s.useRef(null),
        [u, d] = (0, u4.V)("VibegrationsChatSidebarWidth", 460),
        [c, m] = s.useState(u ?? 460),
        f = (0, al.clamp)(c, 360, n);
    s.useLayoutEffect(() => {
        l(t ? f + i : 0);
    }, [f, t, i, l]);
    let h = (0, or.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: m,
            onElementResizeEnd: d,
            orientation: or.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        p = s.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), h(e));
            },
            [h],
        );
    return (0, r.jsxs)("div", {
        className: u7.pz,
        hidden: !t,
        children: [
            (0, r.jsx)("div", { className: u7.Di, onPointerDown: p }),
            (0, r.jsx)("div", { ref: o, className: u7.kL, style: { width: f }, children: a }),
        ],
    });
}
var de = n(541940);
function dt(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: a,
            surface: i,
            header: o,
            mainClassName: d,
            content: c,
            sidebar: m,
            onOpenPublishedApp: h,
            showsFrame: p,
        } = e,
        [g, x] = s.useState(null),
        b = (0, H.A)(l, i),
        v = b?.id ?? null;
    (!(function (e, t) {
        let n = (0, f.bG)([u6.A], () => (0, u0.x4)(u6.A.theme)),
            l = (0, f.bG)([u2.A], () => u2.A.gradientPreset),
            {
                reducedMotion: a,
                fontScale: i,
                highContrast: r,
                forcedColors: o,
                underlineLinks: u,
            } = (0, f.cf)([iz.Ay], () => ({
                reducedMotion: iz.Ay.useReducedMotion,
                fontScale: (0, u0.U0)(),
                highContrast: iz.Ay.isHighContrastModeEnabled,
                forcedColors: iz.Ay.useForcedColors,
                underlineLinks: iz.Ay.alwaysShowLinkDecorations,
            })),
            d = Y.hH.useSetting(),
            c = (0, u1.C)(),
            m = s.useRef(!1),
            h = s.useRef(!1),
            p = s.useRef(0),
            g = s.useRef(null),
            x = s.useCallback(() => {
                let l = (0, uf.o)(e, t);
                if (null == l) return;
                g.current = l;
                let s = {
                    revision: ++p.current,
                    baseTheme: n,
                    customTheme: (0, u0.Lq)(),
                    uiDensity: c,
                    messageDisplayCompact: d,
                    fontScale: i,
                    reducedMotion: a,
                    highContrast: r,
                    forcedColors: o,
                    underlineLinks: u,
                };
                (0, o2.W)(l, "set-env", s, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, o, i, t, r, d, e, a, c, u]),
            b = s.useRef(x);
        s.useLayoutEffect(() => {
            b.current = x;
        });
        let v = s.useCallback(() => {
            m.current ||
                ((m.current = !0),
                queueMicrotask(() => {
                    ((m.current = !1), h.current || b.current());
                }));
        }, []);
        (s.useEffect(
            () => (
                (h.current = !1),
                () => {
                    h.current = !0;
                }
            ),
            [],
        ),
            s.useEffect(() => {
                v();
            }, [l, v]),
            s.useLayoutEffect(() => {
                (x(), v());
            }, [v, x]),
            s.useLayoutEffect(() => {
                let n = (0, uf.o)(e, t);
                null != n && n !== g.current && v();
            }),
            s.useEffect(() => {
                function n(n) {
                    n.target === (0, uf.o)(e, t) && ((g.current = null), v());
                }
                return (document.addEventListener("load", n, !0), () => document.removeEventListener("load", n, !0));
            }, [t, e, v]),
            s.useEffect(() => {
                let e = new MutationObserver(v);
                return (
                    e.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }),
                    e.observe(document.head, { childList: !0, subtree: !0, characterData: !0 }),
                    () => e.disconnect()
                );
            }, [v]));
    })(g, v),
        s.useEffect(() => {
            if (null != t) return (0, uQ.Ng)(t, () => (0, uf.o)(g, v));
        }, [t, g, v]));
    let y = s.useCallback(() => (0, uf.o)(g, v), [g, v]),
        j = s.useCallback(() => (p ? (0, uf.o)(g, v) : g), [p, g, v]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: u()(de.Mh, d),
                children: [
                    o,
                    (0, r.jsx)(uY, {
                        projectId: t ?? null,
                        applicationId: l,
                        previewApplicationId: a,
                        resolveTarget: j,
                        frameId: v,
                        onOpenPublishedApp: h,
                    }),
                    (0, r.jsx)("div", { ref: x, className: de.fm, children: c }),
                ],
            }),
            m,
            (0, r.jsx)(ue, {
                projectId: t ?? null,
                applicationId: l,
                previewApplicationId: a,
                resolveIframe: y,
                toggleRef: n,
            }),
        ],
    });
}
function dn(e) {
    let {
        projectId: t,
        designFeedbackToggleRef: n,
        applicationId: l,
        previewApplicationId: a,
        surface: i,
        header: o,
        chatOpen: d,
        onCloseChat: c,
        chatHeaderAction: m,
        onRestoreVersion: h,
        onImportProject: p,
        debugOpen: g = !1,
        onCloseDebug: x,
        restoreState: b,
        previewReady: v,
        previewGate: y,
        availability: j,
        activeMode: w,
        widgetApplicationId: k,
        onOpenPublishedApp: C = null,
    } = e;
    ((0, uJ.k)(t, k),
        (function (e) {
            let { mobile: t, landscape: n } = (0, f.cf)([tj.A], () => ({
                mobile: tj.A.isBuilderPreviewMobile(),
                landscape: tj.A.isBuilderPreviewLandscape(),
            }));
            s.useEffect(() => {
                let l;
                if (null != e) {
                    if (t) ((l = n ? u9.aX.LANDSCAPE : u9.aX.PORTRAIT), (u3 = e));
                    else {
                        if (u3 !== e) return;
                        ((l = u9.aX.UNHANDLED), (u3 = null));
                    }
                    nP.h.dispatch({
                        type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE",
                        screenOrientation: l,
                        applicationId: e,
                    });
                }
            }, [e, t, n]);
        })(i.type === n9.U.MAIN ? l : null));
    let A = s.useRef(null),
        [N, S] = s.useState(0);
    (s.useLayoutEffect(() => {
        if (i.type === n9.U.MAIN) return ((0, e_.HV)(l), () => (0, e_.HV)(null));
    }, [l, i.type]),
        s.useEffect(() => {
            null != t && ((0, er.Hc)(t), (0, uZ.$)());
        }, [t]),
        s.useLayoutEffect(() => {
            let e = A.current;
            if (null == e) return;
            function t() {
                null != e && S(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return (n.observe(e), () => n.disconnect());
        }, []),
        s.useLayoutEffect(() => () => (0, e_.Zq)(0), []));
    let E = Math.max(360, N - 320),
        I = d || i.type === n9.U.MAIN;
    return (0, r.jsx)("div", {
        ref: A,
        className: de.LB,
        children: (0, r.jsx)(dt, {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: a,
            surface: i,
            header: o,
            onOpenPublishedApp: C,
            showsFrame: (0, tC.yf)(j, w),
            mainClassName: null == o ? void 0 : u()(de.ez, { [de.zt]: d }),
            content: (0, r.jsx)(uq, {
                applicationId: l,
                previewApplicationId: a,
                surface: i,
                previewReady: v,
                previewGate: y,
                availability: j,
                activeMode: w,
                widgetApplicationId: k,
                frameOverlay: (0, r.jsx)(ub, { projectId: t, applicationId: l, previewApplicationId: a, surface: i }),
            }),
            sidebar:
                null != t && I
                    ? (0, r.jsx)(u8, {
                          open: d,
                          maxWidth: E,
                          onWidthChange: e_.Zq,
                          children: (0, r.jsx)("div", {
                              className: de.cO,
                              children: g
                                  ? (0, r.jsx)(oH, { projectId: t, onClose: x ?? (() => {}) }, t)
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(uo.A, { projectId: t }),
                                            (0, r.jsx)(n3.Ay, {
                                                "aria-label": em.intl.string(em.t["/VQax8"]),
                                                toolbar: (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        m,
                                                        null == c
                                                            ? null
                                                            : (0, r.jsx)(n3.Ay.Icon, {
                                                                  icon: O.P,
                                                                  tooltip: em.intl.string(ec.default.JD6Oit),
                                                                  onClick: c,
                                                              }),
                                                    ],
                                                }),
                                                children: (0, r.jsx)(n3.Ay.Title, {
                                                    children: em.intl.string(em.t["/VQax8"]),
                                                }),
                                            }),
                                            (0, r.jsx)("div", {
                                                className: de.cb,
                                                children: (0, r.jsx)(
                                                    sh,
                                                    {
                                                        projectId: t,
                                                        restoreState: b,
                                                        onRestoreVersion: h,
                                                        onImportProject: p,
                                                    },
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
var dl = n(631417);
function da(e) {
    let { title: t, actions: n, breadcrumb: l } = e;
    return (0, r.jsx)(W.A, {
        hideSearch: !0,
        toolbar: n,
        className: dl.wx,
        "aria-label": t,
        children: (0, r.jsxs)("div", {
            className: dl.QF,
            children: [
                (0, r.jsx)(F.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: z.A.colors.TEXT_STRONG,
                    className: dl.Kk,
                }),
                null != l
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(W.A.Title, { onClick: l.onClick, children: l.title }),
                              (0, r.jsx)(W.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, r.jsx)(W.A.Title, { className: dl.Qw, wrapperClassName: dl.DD, children: t }),
            ],
        }),
    });
}
var di = n(683071);
let dr = "conjuring-help";
var ds = n(173114);
function du() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: n,
            } = (0, f.cf)([tW.default, Z.A, nR.Ay, ry.A], () => {
                let e = tW.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of Z.A.getGuildsArray()) {
                    if (!t.features.has(ej.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let n = nR.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, q.m1)(t, tW.default, ry.A) === dr;
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
        t = s.useCallback(() => {
            null != e &&
                ("channel" === e.kind
                    ? (0, K.pX)(ej.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, na.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, r.jsx)("div", {
              className: ds.l,
              children: (0, r.jsx)(di.w, {
                  type: "info",
                  iconAlign: "center",
                  children: em.intl.format(ec.default["6anmu1"], { channel: dr, onNavigate: t }),
              }),
          });
}
var dd = n(323140);
function dc(e) {
    return (0, r.jsx)(p.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function dm(e) {
    return (0, r.jsx)(g.u, { ...e, size: "custom", width: 20, height: 20 });
}
function df(e) {
    return (0, r.jsx)(x.k, { ...e, size: "custom", width: 20, height: 20 });
}
function dh(e) {
    return (0, r.jsx)(b.H, { ...e, size: "custom", width: 20, height: 20 });
}
let dp = {
    showPublishBlocked: function (e) {
        (0, eA.openModal)((t) => (0, r.jsx)(n0, { ...t, reason: e }));
    },
    openPublishNotes: n2.A,
    showError: (e) => (0, v.P)((0, y.o)(e, j.Ck.FAILURE)),
    openProfile: (e) => {
        (0, X.openUserProfileModal)({ userId: e });
    },
    openAutomodSettings: (e) => {
        Promise.resolve()
            .then(n.bind(n, 468689))
            .then((t) => {
                let { default: n } = t;
                return n.open(e, ej.BEX.GUILD_AUTOMOD);
            })
            .catch(() => {});
    },
};
function dg(e) {
    var t;
    let n,
        l,
        a,
        i,
        o,
        d,
        p,
        g,
        x,
        b,
        { project: S, guildId: E, onSelect: I, onRemix: T, shared: P = !1 } = e,
        M =
            ((n = S.id),
            (l = S.name),
            (a = s.useRef(!1)),
            (i = s.useCallback(() => {
                a.current ||
                    ((a.current = !0),
                    (0, v.P)((0, y.o)(em.intl.formatToPlainString(ec.default.aN2JdD, { name: l }), j.Ck.MESSAGE)),
                    ep(n, l)
                        .catch((e) => {
                            let t;
                            (console.error("[vibegrations] project export failed", n, e),
                                (0, v.P)(
                                    (0, y.o)(
                                        409 === (t = e instanceof er.xE ? e.status : null)
                                            ? em.intl.string(ec.default["9oqbEw"])
                                            : 404 === t
                                              ? em.intl.string(ec.default["0W8uLq"])
                                              : em.intl.string(ec.default.N8753A),
                                        j.Ck.FAILURE,
                                    ),
                                ));
                        })
                        .finally(() => {
                            a.current = !1;
                        }));
            }, [n, l])),
            {
                onExport: i,
                onImport: (o = eg(
                    s.useCallback(
                        (e) => {
                            let t = eh(e);
                            null != t
                                ? (0, v.P)((0, y.o)(t, j.Ck.FAILURE))
                                : (0, h.A)({
                                      title: em.intl.formatToPlainString(ec.default["Gm+u1+"], { name: l }),
                                      subtitle: em.intl.string(ec.default.M7H3sJ),
                                      confirmText: em.intl.string(ec.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, K.pX)(ej.BVt.CHANNEL(E, ew.VV.CONJURE, n));
                                          try {
                                              await ef(n, e, em.intl.string(ec.default.Owerd3));
                                          } catch {
                                              (0, v.P)((0, y.o)(em.intl.string(ec.default["Q+l4Hv"]), j.Ck.FAILURE));
                                          }
                                      },
                                  });
                        },
                        [n, l, E],
                    ),
                )).open,
                importInput: o.input,
            }),
        _ =
            null == S.updated_at
                ? null
                : em.intl.formatToPlainString(ec.default.AXydi3, { time: c()(S.updated_at).fromNow() }),
        R = (0, tV.wu)(S),
        L =
            (0, f.bG)([Z.A], () => (null == R ? null : (Z.A.getGuild(R)?.name ?? null)), [R]) ??
            em.intl.string(ec.default["3QFps8"]),
        D = (0, f.bG)([eR.Ay], () => eR.Ay.isProjectDeleting(S.id), [S.id]),
        O =
            ((t = P ? S : null),
            (d = t?.id),
            (p = t?.owner_user_id),
            (g = (0, f.yK)(
                [tX.Ay],
                () =>
                    null == d
                        ? []
                        : [
                              ...new Set(
                                  tX.Ay.getMessages(d)
                                      .flatMap((e) => (null != e.user_id && e.user_id !== p ? [e.user_id] : []))
                                      .reverse(),
                              ),
                          ],
                [d, p],
            )),
            s.useEffect(() => {
                null != p && (t0(p), g.forEach(t0));
            }, [p, g]),
            (x = (0, f.bG)([tW.default], () => (null == p ? null : tW.default.getUser(p)), [p])),
            (b = (0, f.yK)([tW.default], () => g.map((e) => tW.default.getUser(e)).filter((e) => null != e), [g])),
            s.useMemo(
                () =>
                    null == x
                        ? null
                        : {
                              creator: x,
                              collaborators: b,
                              label: (function (e, t) {
                                  let n;
                                  return 0 === t.length
                                      ? em.intl.formatToPlainString(ec.default.t5RWBS, { creator: e })
                                      : em.intl.formatToPlainString(ec.default["b5uCe/"], {
                                            creator: e,
                                            collaborators:
                                                0 === (n = void 0 ?? t.length)
                                                    ? ""
                                                    : 1 === n
                                                      ? em.intl.formatToPlainString(em.t["8s9z8P"], { first: t[0] })
                                                      : 2 === n
                                                        ? em.intl.formatToPlainString(em.t["i0K/dw"], {
                                                              first: t[0],
                                                              second: t[1],
                                                          })
                                                        : 3 === n
                                                          ? em.intl.formatToPlainString(em.t["/KSOKY"], {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                            })
                                                          : em.intl.formatToPlainString(em.t.xpU76u, {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                                count: n - 3,
                                                            }),
                                        });
                              })(
                                  (0, tK.mG)(x),
                                  b.map((e) => (0, tK.mG)(e)),
                              ),
                          },
                [x, b],
            )),
        F = s.useId(),
        z = (0, r.jsx)(w.E, { variant: "text-md/semibold", color: "text-strong", className: dd.j1, children: S.name }),
        U = (0, eI.oF)(S.id),
        q = {
            projectId: S.id,
            projectName: S.name,
            guildId: E,
            projectGuildId: S.guild_id,
            isOwner: (0, eR.PV)(S),
            canRemix: (0, eR.H_)(S),
            onRemix: T,
            onExport: M.onExport,
            onImport: M.onImport,
        };
    return (0, r.jsxs)("div", {
        className: u()(dd.OY, { [dd.Wy]: D }),
        "aria-busy": D,
        children: [
            (0, r.jsx)(ts.Ay, { projectId: S.id }),
            null == U || D ? null : (0, r.jsx)("div", { className: dd.SB, "aria-hidden": !0 }),
            (0, r.jsxs)(k.D, {
                className: dd.W6,
                onClick: D ? void 0 : I,
                onContextMenu: function (e) {
                    D || (0, G.jA)(e, () => (0, r.jsx)(nc, { ...q, onCloseMenu: G.Z_ }));
                },
                tabIndex: D ? -1 : void 0,
                "aria-describedby": null != O ? F : void 0,
                children: [
                    (0, r.jsx)(nf.A, { project: S, size: "md", className: dd.VJ }),
                    (0, r.jsxs)("div", {
                        className: dd.MM,
                        children: [
                            (0, r.jsxs)("div", {
                                className: dd.Ub,
                                children: [
                                    null != O ? (0, r.jsx)(C.m, { text: O.label, ariaHidden: !0, children: z }) : z,
                                    null == O || D ? null : (0, r.jsx)(ng, { creator: O, className: dd.rb }),
                                    U !== m.I.NEEDS_INPUT || D
                                        ? null
                                        : (0, r.jsxs)("div", {
                                              className: dd.fs,
                                              children: [
                                                  (0, r.jsx)(V.A, { mentionsCount: 1 }),
                                                  (0, r.jsx)(A.A, { children: em.intl.string(ec.default.hfIuc7) }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: dd.h3,
                                children: [
                                    (0, r.jsx)(w.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: dd.Wb,
                                        children: D ? em.intl.string(ec.default.Yh5pAc) : L,
                                    }),
                                    null == _ || D
                                        ? null
                                        : (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)("span", {
                                                      className: dd.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, r.jsx)(w.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: dd.zM,
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
            null != O ? (0, r.jsx)(A.A, { id: F, children: O.label }) : null,
            (0, r.jsx)("div", {
                className: dd.M2,
                children: D
                    ? (0, r.jsx)(N.y, { type: N.t.SPINNING_CIRCLE_SIMPLE })
                    : (0, r.jsxs)("div", {
                          className: dd.Pl,
                          children: [(0, r.jsx)(nm, { ...q, trigger: "iconButton" }), M.importInput],
                      }),
            }),
        ],
    });
}
function dx(e) {
    var t;
    let { project: l, projectsLoaded: a, onBack: i, guildId: o } = e,
        [u, d] = s.useState(!0),
        [c, m] = s.useState(!1),
        p = Y.Q_.useSetting(),
        [g, x] = s.useState(null),
        [b, k] = s.useState(null),
        A = l?.id ?? null,
        N = s.useRef(A),
        M = s.useRef(!0),
        _ = s.useRef(!1),
        R = s.useRef(null);
    ((N.current = A),
        s.useEffect(
            () => (
                (M.current = !0),
                () => {
                    M.current = !1;
                }
            ),
            [],
        ));
    let L = (0, f.bG)([eR.Ay], () => (null == A ? null : eR.Ay.getIntegrationStatus(A)), [A]),
        { data: D, isLoading: O } = (0, U.YY)(l?.preview_application_id ?? void 0),
        F = null != A && b !== A,
        z = L?.preview_ready === !0,
        G = L?.has_activity === !0,
        {
            availability: V,
            activeMode: X,
            setMode: Q,
            widgetApplicationId: Z,
        } = (function (e) {
            let {
                    applicationId: t,
                    previewApplicationId: n,
                    declaredActivity: l,
                    installScope: a,
                    ownerAuthorizationRevoked: i,
                    mainCardOnly: r = !1,
                } = e,
                [o, u] = s.useState(null),
                [d, c] = s.useState(t);
            d !== t && (c(t), u(null));
            let m = null != n && n === t ? n : null,
                h = (0, f.bG)([tE.default], () => tE.default.getId()),
                { applicationWidgetConfig: p } = (0, tN.A)(h, m ?? void 0),
                g = p?.surfaces,
                x = (0, tC.yZ)({
                    widgetTop: g?.[tA.m.WIDGET_TOP] != null,
                    widgetBottom: g?.[tA.m.WIDGET_BOTTOM] != null,
                    miniProfile: g?.[tA.m.MINI_PROFILE] != null,
                }),
                b = null != m && (r ? x.hasMainCard : x.hasAny),
                { data: v } = (0, U.YY)(n ?? void 0),
                y = null != n && v?.bot?.id != null,
                { data: j, isLoading: w } = (0, U.YY)(t ?? void 0),
                k = l || (0, tS.X)(j),
                C = null != t && w && null == j,
                A = (0, tC.Xm)({
                    installScope: a,
                    hasFrame: k,
                    hasProfileWidget: b,
                    hasBotDm: y,
                    ownerAuthorizationRevoked: i,
                });
            return {
                availability: A,
                isResolving: C,
                activeMode: C ? null : (0, tC.Qs)(o, A),
                setMode: u,
                widgetApplicationId: m,
            };
        })({
            applicationId: l?.preview_application_id ?? null,
            previewApplicationId: l?.preview_application_id ?? null,
            declaredActivity: G,
            installScope: l?.install_scope ?? null,
            ownerAuthorizationRevoked: L?.owner_authorization_revoked === !0,
        });
    (0, tk.x)(A, (e) => {
        V.modes.includes(e) && Q(e);
    });
    let ee = V.modes.includes("frame"),
        et = (0, tC.Qg)({
            installScope: l?.install_scope ?? null,
            previewReady: z,
            integrationInstalled: L?.integration_installed ?? null,
            botPermissionsChanged: L?.bot_permissions_changed === !0,
        }),
        en = u && !c,
        el = em.intl.string(en ? ec.default.JD6Oit : ec.default.xjJAQm),
        ea = s.useCallback(() => {
            if (c) {
                (m(!1), d(!0));
                return;
            }
            d((e) => !e);
        }, [c]),
        ei = s.useCallback(() => d(!1), []),
        { active: es } = tr(A);
    s.useEffect(() => {
        null != A && es && !ee && tn(A);
    }, [A, es, ee]);
    let eo = s.useRef(null),
        eu = (0, tw.Zv)(A),
        ed = em.intl.string(eu ? ec.default.Sme0T0 : es ? ec.default.vn5Rzu : ec.default["cl/Jyl"]),
        ep = s.useCallback(() => {
            if (null != A) {
                let e;
                if (es) return void tn(A);
                (m(!1), d(!0), (e = te(A)).active || tt(A, { ...e, active: !0 }));
            }
        }, [A, es]),
        ex = s.useCallback(() => {
            m((e) => !e && (d(!0), !0));
        }, []),
        eb = s.useCallback(() => m(!1), []),
        ev = s.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (null == l || _.current) return;
                let a = l.id;
                function i() {
                    return M.current && N.current === a;
                }
                ((_.current = !0),
                    m(!1),
                    d(!0),
                    x({ entry: e, status: "restoring" }),
                    (0, er.oB)(a, e.sha)
                        .then(
                            async () => {
                                if (
                                    (n &&
                                        i() &&
                                        (0, v.P)(
                                            (0, y.o)(
                                                em.intl.formatToPlainString(ec.default.Z4n6LX, {
                                                    title: (0, to.T4)(e.subject).short,
                                                }),
                                                j.Ck.SUCCESS,
                                            ),
                                        ),
                                    null != t)
                                ) {
                                    let e = await (0, tu.c)(a, t);
                                    null != e && (0, v.P)((0, y.o)(e, j.Ck.FAILURE));
                                }
                                i() && x({ entry: e, status: "restored" });
                            },
                            (t) => {
                                i() &&
                                    (x({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", a, t),
                                    (0, v.P)((0, y.o)(em.intl.string(ec.default["PSdo+w"]), j.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            i() && (_.current = !1);
                        }));
            },
            [l],
        ),
        ey = (0, f.bG)([tj.A], () => tj.A.isBuilderPreviewMobile()),
        ek = em.intl.string(ey ? ec.default.tKGF0Q : ec.default.peqEOY),
        eC = s.useCallback(() => (0, e_.GG)(!ey), [ey]),
        eN = (0, f.bG)([tj.A], () => tj.A.isBuilderPreviewLandscape()),
        eS = em.intl.string(eN ? ec.default.tunI2l : ec.default.DoNdjA),
        eE = s.useCallback(() => (0, e_.Lw)(!eN), [eN]),
        eI = (0, H.A)(l?.preview_application_id ?? null, tz.sd),
        eT = (0, tz.x1)(eI) && eI.data.proxyTicketRefreshing,
        eP = s.useCallback(() => {
            null == eI || eT || B.A.refreshProxyTicket(eI.id);
        }, [eI, eT]),
        eM = s.useCallback(() => {
            var e, t;
            (null != l && ((e = l.id), (t = eI?.id), (0, er.Bn)(e), (0, nx.A)().leaveFrame(t)), i());
        }, [l, eI?.id, i]),
        eL = s.useCallback(() => {
            null != l && (d(!0), (0, er.dv)(l.id, em.intl.string(ec.default.oU20rd)));
        }, [l]),
        eD = eg(
            s.useCallback(
                (e) => {
                    if (null == l) return;
                    let t = l.id,
                        n = eh(e);
                    null != n
                        ? (0, v.P)((0, y.o)(n, j.Ck.FAILURE))
                        : (0, h.A)({
                              title: em.intl.formatToPlainString(ec.default["Gm+u1+"], { name: l.name }),
                              subtitle: em.intl.string(ec.default.M7H3sJ),
                              confirmText: em.intl.string(ec.default.gFHykw),
                              variant: "critical",
                              onConfirm: async () => {
                                  d(!0);
                                  try {
                                      await ef(t, e, em.intl.string(ec.default.Owerd3));
                                  } catch {
                                      (0, v.P)((0, y.o)(em.intl.string(ec.default["Q+l4Hv"]), j.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [l],
            ),
        ),
        eO = s.useCallback(() => {
            null != l && (0, n1.A)(l, o);
        }, [l, o]),
        eF = s.useCallback(async () => {
            if (null == A || N.current !== A) return;
            R.current?.abort();
            let e = new AbortController();
            ((R.current = e), k(null));
            try {
                await (0, e_.U1)(A, e.signal);
            } catch {
            } finally {
                e.signal.aborted || R.current !== e || N.current !== A || k(A);
            }
        }, [A]);
    s.useEffect(
        () => (
            eF(),
            () => {
                (R.current?.abort(), (R.current = null));
            }
        ),
        [eF],
    );
    let ez = nI(l ?? null, L ?? null, o),
        eG = ((t = l?.application_id ?? null), (0, f.bG)([nR.Ay], () => (null == t ? null : (0, nb.i8)(o, t)), [o, t])),
        eU = s.useMemo(() => (null == eG ? null : () => (0, K.pX)(ej.BVt.CHANNEL(o, eG))), [o, eG]),
        eq = s.useCallback(async () => {
            null != l && (await nT(l, ez));
        }, [ez, l]),
        e$ = s.useCallback(async () => {
            try {
                await eq();
            } catch {}
            await eF();
        }, [eF, eq]),
        eB = s.useMemo(() => {
            let e = l?.preview_application_id;
            return null == e || O || F
                ? null
                : {
                      ...(0, tH.i)({ applicationId: e, application: D ?? null, guildId: ez }),
                      onClose: () => {
                          e$();
                      },
                  };
        }, [F, e$, ez, O, D, l?.preview_application_id]),
        eH = et ? { type: "permissions", authorizeProps: eB } : F && null == L ? { type: "checking" } : void 0,
        eV = (0, f.bG)([eR.Ay], () => null != A && eR.Ay.isProjectDeleting(A), [A]);
    s.useEffect(() => {
        ((null == l && a) || eV) && (0, K.bG)(ej.BVt.CHANNEL(o, ew.VV.CONJURE));
    }, [o, l, a, eV]);
    let eW = s.useMemo(() => ({ guildId: o, platform: dp, busy: F || O }), [o, F, O]),
        eK = nQ(A, eW),
        eX = eK?.intent === "open" && "channel" === eK.destination ? eK.appChannelId : null,
        eY = (0, f.bG)([J.A], () => (null == eX ? null : J.A.getChannel(eX)), [eX]),
        eJ = (0, q.Ay)(eY),
        eQ = (0, $.gU)(eY),
        eZ =
            null != eJ && null != eQ
                ? em.intl.format(ec.default.gR7PUV, {
                      channel: eJ,
                      channelIconHook: (e, t) =>
                          (0, r.jsx)(eQ, { size: "xs", color: "currentColor", className: dd.Y2 }, t),
                  })
                : eK?.label,
        e0 = eK?.upToDate === !0 ? em.intl.string(ec.default.X0kGp2) : (eK?.disabledReason ?? null),
        e2 =
            null == eK
                ? null
                : (0, r.jsx)("div", {
                      className: dd.As,
                      children: (0, r.jsx)(C.m, {
                          text: e0,
                          asContainer: !0,
                          children: (0, r.jsx)(S.$, {
                              size: "sm",
                              variant: eK.upToDate ? "secondary" : "primary",
                              loading: eK.publishing,
                              disabled: eK.disabled,
                              onClick: () => eK.run("header"),
                              text: eZ,
                          }),
                      }),
                  }),
        e1 = (0, r.jsx)(da, {
            title: l?.name ?? em.intl.string(ec.default.G1WwgK),
            breadcrumb: { title: em.intl.string(ec.default.uk6jhJ), onClick: i },
            actions:
                null == l
                    ? null
                    : (0, r.jsxs)("div", {
                          className: dd.FO,
                          children: [
                              V.showModeSwitch ? (0, r.jsx)(tB, { modes: V.modes, mode: X, onChange: Q }) : null,
                              ee
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(W.A.Icon, {
                                                icon: ey ? df : dm,
                                                tooltip: ek,
                                                "aria-label": ek,
                                                selected: ey,
                                                onClick: eC,
                                            }),
                                            ey
                                                ? (0, r.jsx)(W.A.Icon, {
                                                      icon: dh,
                                                      tooltip: eS,
                                                      "aria-label": eS,
                                                      selected: eN,
                                                      onClick: eE,
                                                  })
                                                : null,
                                            (0, r.jsx)(W.A.Icon, {
                                                ref: eo,
                                                icon: E.x,
                                                iconClassName: dd.D8,
                                                tooltip: ed,
                                                "aria-label": ed,
                                                selected: es,
                                                disabled: eu,
                                                onClick: ep,
                                            }),
                                        ],
                                    })
                                  : null,
                              "frame" === X ? (0, r.jsx)(tG, { frame: eI, controlProjectId: l.id }) : null,
                              (0, r.jsx)("div", { className: dd.YJ }),
                              p
                                  ? (0, r.jsx)(W.A.Icon, {
                                        icon: I.BugIcon,
                                        tooltip: em.intl.string(ec.default.Mt5k9d),
                                        "aria-label": em.intl.string(ec.default.Mt5k9d),
                                        selected: c,
                                        onClick: ex,
                                    })
                                  : null,
                              (0, r.jsx)(W.A.Icon, {
                                  icon: T.SettingsIcon,
                                  tooltip: em.intl.string(ec.default.I2XSKe),
                                  "aria-label": em.intl.string(ec.default.I2XSKe),
                                  onClick: () => (0, nr.A)(l.id, { guildId: o, isPreview: !0 }),
                              }),
                              (0, r.jsx)(nm, {
                                  projectId: l.id,
                                  projectName: l.name,
                                  guildId: o,
                                  projectGuildId: l.guild_id,
                                  isOwner: (0, eR.PV)(l),
                                  canRemix: (0, eR.H_)(l),
                                  onRefresh: (0, tz.x1)(eI) ? eP : void 0,
                                  isRefreshing: eT,
                                  onClose: eM,
                                  onExport: eL,
                                  onImport: eD.open,
                                  onRemix: eO,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = l.id),
                                          void (0, eA.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("834460"),
                                                  n.e("960521"),
                                              ]).then(n.bind(n, 699760));
                                              return (n) => (0, r.jsx)(t, { ...n, projectId: e });
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
                                              onRestoreVersion: (e, t) => ev(e, t, !0),
                                          }),
                                          void (0, eA.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("323079"),
                                                  n.e("437655"),
                                                  n.e("620019"),
                                                  n.e("586467"),
                                                  n.e("231782"),
                                                  n.e("551087"),
                                              ]).then(n.bind(n, 438834));
                                              return (n) => (0, r.jsx)(t, { ...n, ...e });
                                          })
                                      );
                                  },
                                  refreshApplicationId:
                                      V.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== V.profileState
                                          ? Z
                                          : null,
                                  previewProjectId: l.id,
                              }),
                              en
                                  ? null
                                  : (0, r.jsx)(W.A.Icon, { icon: dc, tooltip: el, "aria-label": el, onClick: ea }),
                          ],
                      }),
        });
    return (0, r.jsxs)("div", {
        className: dd.nj,
        children: [
            eD.input,
            (0, r.jsx)("main", {
                className: dd.JX,
                children:
                    null == l
                        ? (0, r.jsxs)("div", {
                              className: dd.j5,
                              children: [
                                  e1,
                                  (0, r.jsxs)("div", {
                                      className: dd.sD,
                                      children: [
                                          (0, r.jsx)(P.D, {
                                              variant: "heading-lg/semibold",
                                              children: em.intl.string(ec.default.G1WwgK),
                                          }),
                                          (0, r.jsx)(w.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: em.intl.string(ec.default.fINulo),
                                          }),
                                          (0, r.jsx)(S.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: em.intl.string(ec.default["WFJ/vb"]),
                                              onClick: () => (0, e_.hF)(o),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, r.jsx)(nU.Provider, {
                              value: eW,
                              children: (0, r.jsx)(
                                  dn,
                                  {
                                      projectId: l.id,
                                      designFeedbackToggleRef: eo,
                                      applicationId: l.preview_application_id,
                                      previewApplicationId: l.preview_application_id,
                                      surface: tz.sd,
                                      header: e1,
                                      chatOpen: u,
                                      onCloseChat: ei,
                                      chatHeaderAction: e2,
                                      debugOpen: p && c,
                                      onCloseDebug: eb,
                                      onRestoreVersion: ev,
                                      onImportProject: (0, eR.PV)(l) ? eD.open : void 0,
                                      restoreState: g,
                                      previewReady: z,
                                      previewGate: eH,
                                      availability: V,
                                      activeMode: X,
                                      widgetApplicationId: Z,
                                      onOpenPublishedApp: eU,
                                  },
                                  l.id,
                              ),
                          }),
            }),
        ],
    });
}
function db(e) {
    let {
            projects: t,
            idea: l,
            guildId: a,
            submitting: i,
            createError: o,
            createDisabled: d,
            conjureTarget: c,
            onConjureTargetChange: m,
            nativeAppChannels: h,
            onNativeAppChannelsChange: p,
            eligibleGuilds: g,
            modelSettings: x,
            onModelSettingsChange: b,
            onSelectProject: k,
            onIdeaChange: C,
            onCreate: A,
            onCreateFromTemplate: E,
            onStartTemplate: I,
            onSubmitTemplate: T,
            onCancelTemplate: P,
            onSkipTemplate: G,
            onImportNewProject: U,
            importing: q,
        } = e,
        [$, B] = s.useState(() => ({ guildId: a, filter: nw(a) })),
        H = ($.guildId === a ? $.filter : nw(a)) ?? a,
        V = s.useCallback(
            (e) => {
                (nj.set(a, e), B({ guildId: a, filter: e }));
            },
            [a],
        ),
        K = (0, f.yK)(
            [Z.A],
            () =>
                (function (e, t) {
                    let n = new Set([t]);
                    for (let t of e)
                        (null != t.guild_id && n.add(t.guild_id),
                            null != t.preview_guild_id && n.add(t.preview_guild_id));
                    let l = [];
                    for (let e of n) {
                        let t = Z.A.getGuild(e);
                        null != t && l.push(t);
                    }
                    return l.sort((e, t) => e.name.localeCompare(t.name));
                })(t, a),
            [t, a],
        ),
        X = s.useMemo(
            () => [
                { id: "conjure-filter-all", value: "all", leading: F.D, label: em.intl.string(ec.default["Xi/oIC"]) },
                {
                    id: "conjure-filter-user",
                    value: nv,
                    leading: ex.UserIcon,
                    label: em.intl.string(ec.default.kCSgmG),
                },
                {
                    id: "conjure-filter-no-server",
                    value: ny,
                    leading: eb.R,
                    label: em.intl.string(ec.default["3QFps8"]),
                },
                ...K.map((e) => ({
                    id: `conjure-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, r.jsx)(eJ.Ay, { guild: e, size: eJ.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [K],
        ),
        Y = (0, f.yK)(
            [eR.Ay, Z.A],
            () => {
                let e = nk(H);
                if (null != e) return eR.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(Z.A.getGuilds()))
                    eR.Ay.hasFetchedGuildProjects(e.id) && t.push(...eR.Ay.getSharedProjects(e.id));
                return t;
            },
            [H],
        );
    s.useEffect(() => {
        let e = nk(H);
        null == e || eR.Ay.hasFetchedGuildProjects(e) || (0, e_.hF)(e);
    }, [H]);
    let J = s.useMemo(
            () =>
                Y.filter((e) => nC(e, H)).sort((e, t) =>
                    null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                ),
            [Y, H],
        ),
        Q = s.useMemo(
            () => [
                {
                    label: em.intl.string(ec.default.NyVn6T),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: eQ,
                            label: em.intl.string(ec.default.UPLaGM),
                            leading: ex.UserIcon,
                        },
                        ...g.map((e) => ({
                            id: `conjure-target-${e.id}`,
                            value: e.id,
                            label: e.name,
                            leading: (0, r.jsx)(eJ.Ay, { guild: e, size: eJ.Ay.Sizes.MINI, active: !0 }),
                        })),
                    ],
                },
            ],
            [g],
        ),
        ee = s.useMemo(
            () =>
                t
                    .filter((e) => nC(e, H))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, H],
        ),
        en = s.useCallback(
            (e) => {
                "user" === e.install_scope || (0, nb.Ot)(e, a)
                    ? k(e.id)
                    : (0, v.P)((0, y.o)(em.intl.string(ec.default["XUl/cs"]), j.Ck.MESSAGE));
            },
            [a, k],
        ),
        el = em.intl.string(ec.default.ab1sMf),
        ea = [
            em.intl.string(ec.default["9w+Chc"]),
            em.intl.string(ec.default.WAvmdq),
            em.intl.string(ec.default.SKsrzl),
        ],
        ei = [
            {
                id: "moderation-bot",
                name: em.intl.string(ec.default.lGLnE8),
                description: em.intl.string(ec.default["pAC6k/"]),
                wizard: !0,
            },
            {
                id: "feature-showcase",
                name: em.intl.string(ec.default.uJKQTs),
                description: em.intl.string(ec.default["+dKy/B"]),
            },
            {
                id: "rust-sphere",
                name: em.intl.string(ec.default.iF5Oru),
                description: em.intl.string(ec.default.NbDDO6),
            },
        ],
        er = s.useCallback(
            (e) => {
                if (null != e.wizard) {
                    var t;
                    return void ((t = {
                        template: e,
                        guildId: a,
                        eligibleGuilds: g,
                        onStart: (t) => I(e.name, t),
                        onSubmit: (t, n, l) => T(e, t, n, l),
                        onCancel: P,
                        onSkip: G,
                    }),
                    (0, eA.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([n.e("881965"), n.e("166781")]).then(
                                n.bind(n, 790028),
                            );
                            return (n) => (0, r.jsx)(e, { ...n, ...t });
                        },
                        { modalKey: "ConjureTemplateWizardModal" },
                    ));
                }
                E(e);
            },
            [g, a, P, E, G, I, T],
        ),
        es = em.intl.string(ec.default.zzYLlW),
        eo =
            (s.useEffect(() => {
                (0, e_.b8)();
            }, []),
            (0, f.bG)([eR.Ay], () => {
                let e = eR.Ay.getMaxProjects();
                return null != e && eR.Ay.hasFetchedOwnedProjects()
                    ? Math.max(0, e - eR.Ay.getOwnedProjects().length)
                    : null;
            })),
        eu = em.intl.string(ec.default["2XcV3x"]),
        ed = s.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), d || A());
            },
            [d, A],
        ),
        ef = nk(H) ?? a,
        eh = (0, f.bG)([eR.Ay], () => eR.Ay.getGuildProjectsFetchState(ef), [ef]),
        ep = (0, f.bG)([eR.Ay], () => eR.Ay.getGuildProjectsFetchState(a), [a]),
        [eg, ev] = s.useState(nS),
        ej = s.useMemo(() => nA.w.get(nE(a)) ?? !1, [a]),
        ew = "success" === ep,
        ek = (0, f.yK)([eR.Ay], () => eR.Ay.getSharedProjects(a), [a]).length > 0 || t.some((e) => nC(e, a)),
        eC = eg ?? (!!ek || "error" === ep || (!ew && ej));
    s.useEffect(() => {
        ew && nA.w.set(nE(a), ek);
    }, [ew, ek, a]);
    let eN = s.useCallback((e) => {
            (nA.w.set(nN, e), ev(e));
        }, []),
        eS = s.useCallback(() => eN(!eC), [eN, eC]),
        eI = s.useCallback(() => eN(!1), [eN]),
        eT = em.intl.string(ec.default.kar7jh),
        eM = eC ? eT : em.intl.string(ec.default.WSc5Y2);
    return (0, r.jsx)("div", {
        className: u()(dd.nj, dd.a0),
        children: (0, r.jsxs)("div", {
            className: dd.Yo,
            children: [
                (0, r.jsxs)("main", {
                    className: dd.ps,
                    children: [
                        (0, r.jsx)(da, {
                            title: em.intl.string(ec.default.uk6jhJ),
                            actions: (0, r.jsx)(W.A.Icon, {
                                icon: M.Z,
                                tooltip: eM,
                                "aria-label": eM,
                                selected: eC,
                                onClick: eS,
                            }),
                        }),
                        (0, r.jsx)(_.Ip, {
                            className: dd.Yy,
                            children: (0, r.jsx)("div", {
                                className: dd.Mo,
                                children: (0, r.jsxs)("section", {
                                    className: u()(dd.Qs, dd.Ix),
                                    children: [
                                        (0, r.jsx)(du, {}),
                                        (0, r.jsx)(eY, {}),
                                        (0, r.jsxs)("section", {
                                            className: dd.WI,
                                            "aria-label": es,
                                            children: [
                                                (0, r.jsxs)("div", {
                                                    className: dd.G9,
                                                    children: [
                                                        (0, r.jsx)(w.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: es,
                                                        }),
                                                        (0, r.jsx)(w.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: em.intl.string(ec.default["N88+Ld"]),
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsx)(eG, {
                                                    listClassName: dd.Aw,
                                                    radius: eF,
                                                    children: ei.map((e) =>
                                                        (0, r.jsx)(
                                                            "li",
                                                            {
                                                                className: dd.EA,
                                                                children: (0, r.jsxs)(eL, {
                                                                    disabled: i,
                                                                    ariaLabel: em.intl.formatToPlainString(
                                                                        ec.default.jGyR6p,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: u()(dd.nx, dd.rz),
                                                                    onClick: () => er(e),
                                                                    children: [
                                                                        (0, r.jsx)(w.E, {
                                                                            className: dd.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, r.jsx)(w.E, {
                                                                            className: dd.BK,
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
                                        (0, r.jsxs)("section", {
                                            className: dd.WI,
                                            "aria-label": eu,
                                            children: [
                                                (0, r.jsxs)("div", {
                                                    className: dd.G9,
                                                    children: [
                                                        (0, r.jsx)(w.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: eu,
                                                        }),
                                                        (0, r.jsx)(w.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: em.intl.string(ec.default.JnJOAn),
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsx)(eG, {
                                                    listClassName: dd.Aw,
                                                    radius: ez,
                                                    children: ea.map((e) =>
                                                        (0, r.jsx)(
                                                            "li",
                                                            {
                                                                className: dd.EA,
                                                                children: (0, r.jsx)(eL, {
                                                                    disabled: i,
                                                                    className: dd.nx,
                                                                    onClick: () => A(e),
                                                                    children: (0, r.jsx)(w.E, {
                                                                        variant: "text-md/semibold",
                                                                        color: "text-strong",
                                                                        className: dd.un,
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
                                        (0, r.jsx)(eE, {}),
                                    ],
                                }),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: dd.Yl,
                            children: (0, r.jsxs)("div", {
                                className: u()(dd.Qs, dd.DA),
                                children: [
                                    (0, r.jsx)(R.f, {
                                        label: el,
                                        hideLabel: !0,
                                        rows: 3,
                                        value: l,
                                        placeholder: el,
                                        error: o,
                                        onChange: C,
                                        onKeyDown: ed,
                                    }),
                                    null != h
                                        ? (0, r.jsx)(L.S, {
                                              checked: h,
                                              disabled: i,
                                              onChange: () => p(!h),
                                              label: em.intl.string(ec.default.qfAk5B),
                                              description: em.intl.string(ec.default["mq+Pml"]),
                                          })
                                        : null,
                                    (0, r.jsxs)("div", {
                                        className: dd.VP,
                                        children: [
                                            (0, r.jsx)("div", {
                                                className: dd.gH,
                                                children: (0, r.jsx)(D.l, {
                                                    selectionMode: "single",
                                                    label: em.intl.string(ec.default.NyVn6T),
                                                    hideLabel: !0,
                                                    placeholder: em.intl.string(ec.default.NyVn6T),
                                                    options: Q,
                                                    value: c,
                                                    onSelectionChange: m,
                                                    disabled: i,
                                                }),
                                            }),
                                            null != eo
                                                ? (0, r.jsx)(w.E, {
                                                      variant: "text-sm/medium",
                                                      color: 0 === eo ? "text-feedback-warning" : "text-subtle",
                                                      children:
                                                          0 === eo
                                                              ? em.intl.string(ec.default.s28pGG)
                                                              : em.intl.formatToPlainString(ec.default.Wy5aK4, {
                                                                    count: eo,
                                                                }),
                                                  })
                                                : null,
                                            (0, r.jsx)(ty, {
                                                settings: x ?? et.A4,
                                                tiers: et.lO,
                                                choices: (0, eP.b)()
                                                    ? {
                                                          main: [...et.vC.main, ...et.XE.main],
                                                          subagent: [...et.vC.subagent, ...et.XE.subagent],
                                                          thinking: et.vC.thinking,
                                                      }
                                                    : et.vC,
                                                disabled: i,
                                                onChange: b,
                                            }),
                                            (0, r.jsx)(S.$, {
                                                variant: "primary",
                                                size: "md",
                                                text: em.intl.string(em.t.CumH4u),
                                                disabled: d,
                                                loading: i,
                                                onClick: () => A(),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("aside", {
                    className: dd.pA,
                    hidden: !eC,
                    "aria-label": em.intl.string(ec.default.dWgSAa),
                    children: [
                        (0, r.jsxs)("div", {
                            className: dd.IR,
                            children: [
                                (0, r.jsx)(w.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: dd.RM,
                                    children: em.intl.string(ec.default.dWgSAa),
                                }),
                                (0, r.jsxs)("div", {
                                    className: dd.Ss,
                                    children: [
                                        (0, r.jsx)(ey, { importing: q, onImport: U }),
                                        (0, r.jsx)(W.A.Icon, { icon: O.P, tooltip: eT, "aria-label": eT, onClick: eI }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsxs)(_.Ip, {
                            className: dd.xe,
                            children: [
                                (0, r.jsx)("div", {
                                    className: dd.Vw,
                                    children: (0, r.jsx)(D.l, {
                                        selectionMode: "single",
                                        label: em.intl.string(ec.default.U6TqU9),
                                        hideLabel: !0,
                                        options: X,
                                        value: H,
                                        onSelectionChange: V,
                                    }),
                                }),
                                (0, r.jsx)(w.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: dd.wE,
                                    children: em.intl.string(ec.default.JQpNkh),
                                }),
                                ("unattempted" === eh || "loading" === eh) && 0 === ee.length
                                    ? (0, r.jsx)("div", { className: dd.E8, children: (0, r.jsx)(N.y, {}) })
                                    : "error" === eh && 0 === ee.length
                                      ? (0, r.jsxs)("div", {
                                            className: dd.E8,
                                            children: [
                                                (0, r.jsx)(w.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: dd.JS,
                                                    children: em.intl.string(ec.default.DJAPMO),
                                                }),
                                                (0, r.jsx)(S.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: em.intl.string(ec.default["WFJ/vb"]),
                                                    onClick: () => (0, e_.hF)(ef),
                                                }),
                                            ],
                                        })
                                      : 0 === ee.length
                                        ? (0, r.jsx)("div", {
                                              className: dd.D1,
                                              children: (0, r.jsxs)("div", {
                                                  className: dd.ST,
                                                  children: [
                                                      (0, r.jsx)(F.D, { size: "lg", color: z.A.colors.TEXT_SUBTLE }),
                                                      (0, r.jsx)(w.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: dd.sI,
                                                          children: em.intl.string(ec.default["9/5sLV"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, r.jsx)("div", {
                                              className: dd.Dq,
                                              children: ee.map((e) =>
                                                  (0, r.jsx)(
                                                      dg,
                                                      {
                                                          project: e,
                                                          guildId: a,
                                                          onSelect: () => en(e),
                                                          onRemix: () => (0, n1.A)(e, a),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          }),
                                J.length > 0
                                    ? (0, r.jsxs)("div", {
                                          className: dd.qx,
                                          children: [
                                              (0, r.jsxs)("div", {
                                                  className: dd.uc,
                                                  children: [
                                                      (0, r.jsx)(w.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-strong",
                                                          children: em.intl.string(ec.default["wFi8+o"]),
                                                      }),
                                                      (0, r.jsx)(w.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          children: em.intl.string(ec.default.dQ3U1J),
                                                      }),
                                                  ],
                                              }),
                                              (0, r.jsx)("div", {
                                                  className: dd.Dq,
                                                  children: J.map((e) =>
                                                      (0, r.jsx)(
                                                          dg,
                                                          {
                                                              project: e,
                                                              guildId: a,
                                                              onSelect: () => en(e),
                                                              onRemix: () => (0, n1.A)(e, a),
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
function dv(e) {
    let t,
        { guildId: n, projectId: l } = e,
        a = (0, f.yK)([eR.Ay], () => eR.Ay.getOwnedProjects()),
        i = (0, f.yK)([Q.Ay], () => Q.Ay.getSelfMember(n)?.roles ?? [], [n]),
        o = (0, f.bG)(
            [Z.A, ee.A],
            () => {
                let e = Z.A.getGuild(n);
                return null != e && ee.A.can(ej.xBc.MANAGE_GUILD, e);
            },
            [n],
        ),
        [u, d] = s.useState(""),
        c = l ?? null,
        [m, h] = s.useState(!1),
        [p, g] = s.useState(null),
        x = (0, t2.z)("VibegrationsScreen"),
        [b, w] = s.useState(null);
    s.useEffect(() => {
        w(null);
    }, [n]);
    let k = s.useMemo(() => (x.some((e) => e.id === n) ? n : eQ), [x, n]),
        C = b ?? k,
        A = C === eQ ? "user" : "guild",
        N = C === eQ ? n : C,
        [S, E] = s.useState(!0),
        [I, T] = s.useState(null);
    (s.useEffect(() => {
        (0, e_.hF)(n);
    }, [n, i, o]),
        s.useEffect(() => {
            (0, e_.dm)(n, c);
        }, [n, c]));
    let P = s.useCallback(
            async (e, t, n) => {
                let l = await (0, e_.gA)({ guild_id: t, install_scope: n, flags: (0, et.wo)("guild" === n && S) });
                ((0, er.Hc)(l),
                    (0, er.r2)(l, I ?? et.A4),
                    e(l),
                    (0, K.pX)(ej.BVt.CHANNEL(t, ew.VV.CONJURE, l)),
                    d(""),
                    T(null));
            },
            [S, I],
        ),
        M = s.useCallback(
            async (e) => {
                let t = (e ?? u).trim(),
                    n = eM({ idea: t, installScope: A, submitting: m });
                if ("idea" !== n && "submitting" !== n) {
                    (null != e && d(e), h(!0), g(null));
                    try {
                        await P((e) => (0, er.dv)(e, t), N, A);
                    } catch (e) {
                        g((0, eT.mG)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [P, A, N, u, m],
        ),
        _ = s.useCallback(
            async (e) => {
                if (!m) {
                    (h(!0), g(null));
                    try {
                        await P(
                            (t) => {
                                var n;
                                (0, er.dv)(
                                    t,
                                    ((n = e.name),
                                    em.intl.formatToPlainString(ec.default["0PQip6"], { templateName: n })),
                                    void 0,
                                    { templateId: e.id },
                                );
                            },
                            N,
                            A,
                        );
                    } catch (e) {
                        g((0, eT.mG)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [P, A, N, m],
        ),
        R = s.useCallback(
            async (e, t) => {
                let n = await (0, e_.gA)({ guild_id: t, install_scope: "guild", flags: (0, et.wo)(S) });
                return ((0, er.Hc)(n), (0, er.r2)(n, I ?? et.A4), (0, er.dv)(n, (0, n6.Wl)(e)), n);
            },
            [S, I],
        ),
        L = s.useCallback(async (e, t, n, l) => {
            if (eR.Ay.getProject(t)?.guild_id !== n) {
                let e = await (0, e_.M7)(t, { guild_id: n, preview_guild_id: n });
                if (!e.ok) throw new eT.DS((0, eT.hj)(e), e.status);
            }
            ((0, er.dv)(t, l, void 0, { templateId: e.id }), (0, K.pX)(ej.BVt.CHANNEL(n, ew.VV.CONJURE, t)), T(null));
        }, []),
        D = s.useCallback((e) => {
            (0, e_.xx)(e).catch(() => void 0);
        }, []),
        O = s.useCallback(
            (e) => {
                let t = eR.Ay.getProject(e)?.guild_id ?? n;
                ((0, K.pX)(ej.BVt.CHANNEL(t, ew.VV.CONJURE, e)), T(null));
            },
            [n],
        ),
        [F, z] = s.useState(!1),
        G = s.useCallback(
            async (e, t) => {
                let l = eh(e);
                if (null != l) return void (0, v.P)((0, y.o)(l, j.Ck.FAILURE));
                z(!0);
                let a = null;
                try {
                    ((a = await (0, e_.gA)({ guild_id: n, install_scope: t, flags: (0, et.wo)("guild" === t && S) })),
                        (0, er.Hc)(a),
                        (0, er.r2)(a, I ?? et.A4),
                        await ef(a, e, em.intl.string(ec.default["LUc7/5"])),
                        (0, K.pX)(ej.BVt.CHANNEL(n, ew.VV.CONJURE, a)),
                        T(null));
                } catch {
                    (null != a && (await (0, e_.xx)(a).catch(() => void 0)),
                        (0, v.P)((0, y.o)(em.intl.string(ec.default["Q+l4Hv"]), j.Ck.FAILURE)));
                } finally {
                    z(!1);
                }
            },
            [n, S, I],
        ),
        U = s.useCallback(
            (e) => {
                (0, K.pX)(ej.BVt.CHANNEL(n, ew.VV.CONJURE, e));
            },
            [n],
        ),
        q = s.useCallback(() => {
            (0, K.pX)(ej.BVt.CHANNEL(n, ew.VV.CONJURE));
        }, [n]),
        $ = s.useCallback((e) => {
            (d(e), g(null));
        }, []),
        B = (0, f.bG)(
            [eR.Ay],
            () => {
                if (null == c) return null;
                let e = eR.Ay.getProject(c);
                return null == e || (0, eR.PV)(e) || e.guild_id === n ? e : null;
            },
            [c, n],
        ),
        H = (0, f.bG)([eR.Ay], () => eR.Ay.hasFetchedGuildProjects(n), [n]);
    return null != c
        ? (0, r.jsx)(dx, { project: B, projectsLoaded: H, onBack: q, guildId: n }, c)
        : (0, r.jsx)(db, {
              projects: a,
              modelSettings: I,
              onModelSettingsChange: T,
              idea: u,
              guildId: n,
              submitting: m,
              createError: p,
              createDisabled: "idea" === (t = eM({ idea: u, installScope: A, submitting: m })) || "submitting" === t,
              onSelectProject: U,
              onIdeaChange: $,
              onCreate: M,
              onCreateFromTemplate: _,
              onStartTemplate: R,
              onSubmitTemplate: L,
              onCancelTemplate: D,
              onSkipTemplate: O,
              onImportNewProject: G,
              importing: F,
              conjureTarget: C,
              onConjureTargetChange: w,
              nativeAppChannels: "guild" === A ? S : null,
              onNativeAppChannelsChange: E,
              eligibleGuilds: x,
          });
}
