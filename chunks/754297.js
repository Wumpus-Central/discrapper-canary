(n.r(t), n.d(t, { default: () => dj }), n(321073));
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
    U = n(458518),
    q = n(627363),
    $ = n(47167),
    B = n(713654),
    H = n(625180),
    V = n(672929),
    W = n(775946),
    K = n(742589),
    X = n(976860),
    Y = n(402860),
    J = n(885386),
    Q = n(734057),
    Z = n(696451),
    ee = n(71393),
    et = n(576705),
    en = n(164892),
    el = n(922016),
    ea = n(980707),
    ei = n(477782),
    er = n(81369),
    es = n(712808);
(n(323874), n(14289), n(35956));
var eo = n(77729),
    eu = n(723702),
    ed = n(264572).Buffer;
async function ec(e, t) {
    if (eu.isPlatformEmbedded) {
        let n = ed.from(await e.arrayBuffer());
        if ("function" == typeof eo.A.fileManager.saveWithDialog2) await eo.A.fileManager.saveWithDialog2(n, t);
        else
            try {
                await eo.A.fileManager.saveWithDialog(n, t);
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
var em = n(248675),
    ef = n(375708);
async function eh(e, t, n) {
    (0, es.Hc)(e);
    let l = await (0, es.vX)(e, t);
    (0, es.dv)(e, n, [l]);
}
function ep(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, en.Oq)(e.size, t)
        ? null
        : ef.intl.formatToPlainString(em.default.ThxcOX, { size: (0, en.sM)((0, en.Ju)(t)) });
}
async function eg(e, t) {
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
        a = await (0, es.cS)(e, l);
    await ec(a, l);
}
function ex(e) {
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
var eb = n(950305),
    ev = n(664121);
let ey = [
    { value: "user", icon: eb.UserIcon, nameMessage: em.default.s1TsXl },
    { value: "guild", icon: ev.R, nameMessage: em.default.LlLIJw },
];
function ej(e) {
    let { importing: t, onImport: n } = e,
        l = s.useRef(null),
        a = ex(s.useCallback((e) => n(e, "user"), [n])),
        i = ex(s.useCallback((e) => n(e, "guild"), [n])),
        o = { user: a.open, guild: i.open };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(el.Y, {
                targetElementRef: l,
                position: "bottom",
                align: "right",
                animation: el.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsx)(ea.W, {
                        "data-menu-migrated": !0,
                        navId: "conjure-import-scope",
                        "aria-label": ef.intl.string(em.default.soVyD1),
                        onClose: t,
                        onSelect: t,
                        children: (0, r.jsx)(ei.rX, {
                            label: ef.intl.string(em.default.NyVn6T),
                            children: ey
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: ef.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, r.jsx)(
                                        ei.Dr,
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
                        icon: er.H,
                        text: ef.intl.string(em.default.NJGZA3),
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
var ew = n(652215),
    ek = n(746080),
    eC = n(58703),
    eA = n(757704),
    eN = n(192308);
function eS() {
    (0, eN.openModalLazy)(
        async () => {
            let { default: e } = await n.e("492663").then(n.bind(n, 839914));
            return (t) => (0, r.jsx)(e, { ...t });
        },
        { modalKey: "conjure-changelog" },
    );
}
var eE = n(335520);
function eI() {
    let e = (0, eA.Kk)("desktop");
    if (0 === e.length) return null;
    let t = ef.intl.string(em.default.bTBUeX);
    return (0, r.jsxs)("section", {
        className: eE.rN,
        "aria-label": t,
        children: [
            (0, r.jsxs)("div", {
                className: eE.bZ,
                children: [
                    (0, r.jsx)(w.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                    (0, r.jsx)(w.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: ef.intl.string(em.default["ZM/VB/"]),
                    }),
                ],
            }),
            (0, r.jsx)("ol", {
                className: eE.V,
                children: e.map((e) =>
                    (0, r.jsxs)(
                        "li",
                        {
                            className: eE.S3,
                            children: [
                                (0, r.jsxs)(w.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: eE.VO,
                                    children: [
                                        (0, eC.i$)(c()(e.date, "YYYY-MM-DD"), "LL"),
                                        (0, eA.t9)(e) ? ` \xb7 ${ef.intl.string(em.default.cW5XHD)}` : null,
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
            (0, eA.ug)("desktop")
                ? (0, r.jsx)(S.$, {
                      variant: "secondary",
                      size: "sm",
                      text: ef.intl.string(em.default.EwU5zF),
                      onClick: eS,
                  })
                : null,
        ],
    });
}
var eT = n(404373),
    eP = n(639519),
    eM = n(361504);
function e_(e) {
    let { idea: t, installScope: n, submitting: l } = e;
    return l ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
}
var eR = n(371169),
    eL = n(260498);
function eD(e) {
    let { className: t, ariaLabel: n, disabled: l, onClick: a, children: i } = e;
    return (0, r.jsx)(k.D, { "aria-disabled": l, "aria-label": n, className: t, onClick: l ? void 0 : a, children: i });
}
var eO = n(865665),
    eF = n(373913);
let ez = { x: 5, y: 7 },
    eG = { x: 5, y: 4 };
function eU(e) {
    let { listClassName: t, radius: n, children: l } = e,
        [a, i] = s.useState(!1);
    return (0, r.jsxs)("div", {
        className: eF.n,
        onMouseEnter: () => i(!0),
        onMouseLeave: () => i(!1),
        children: [
            (0, r.jsx)("ol", { className: t, children: l }),
            a ? (0, r.jsx)(eO.C, { area: 64, radius: n, color: z.A.colors.TEXT_BRAND }) : null,
        ],
    });
}
var eq = n(864970),
    e$ = n(707554),
    eB = n(770178),
    eH = n(765548),
    eV = n(595528),
    eW = n(885576),
    eK = n(662429);
let eX = "heading-xxl/semibold",
    eY = !1;
function eJ() {
    let e = s.useRef(null),
        [t, n] = s.useState(!0),
        l = (0, eH.A)((e) => {
            n(e.target.clientWidth >= 500);
        }),
        a = (0, eB.w)(l, [], { fireOnMount: !0 }),
        i = (0, f.bG)([eV.A], () => eV.A.isConnected());
    s.useEffect(() => {
        if (!i || !t || eY) return;
        let n = !1,
            l = 0;
        function a() {
            n ||
                (l = window.setTimeout(() => {
                    ((eY = !0), e.current?.play());
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
    let o = (0, f.bG)([eW.A], () => eW.A.isIdle()),
        u = s.useRef(o);
    s.useEffect(() => {
        let t = u.current && !o;
        ((u.current = o), t && eY && (e.current?.stop(), e.current?.play()));
    }, [o]);
    let d = ef.intl.string(em.default["+5XyCR"]);
    return (0, r.jsx)("div", {
        ref: a,
        className: eK.x,
        children: t
            ? (0, r.jsx)(e$.H, { children: (0, r.jsx)(eq.o, { ref: e, text: d, variant: eX, delay: null }) })
            : (0, r.jsx)(P.D, { variant: eX, children: d }),
    });
}
var eQ = n(548118);
let eZ = "user",
    e0 = Object.freeze({ x: 0.5, y: 0.5 });
function e2(e) {
    return "" !== e.trim();
}
function e1(e) {
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
function e6(e) {
    let { kind: t, name: n } = e1(e);
    return [t, n].filter((e) => "" !== e).join(" ");
}
function e9(e) {
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
let e3 = "[vibegrations:selected] ",
    e5 = " \u2014 ";
function e4(e) {
    if (!e.startsWith(e3)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        a = n.slice(e3.length),
        i = a.indexOf(e5),
        r = (-1 === i ? a : a.slice(0, i)).trim();
    return "" === r ? null : { label: r, body: l };
}
let e7 = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    e8 = new Map(),
    te = new Set();
function tt(e) {
    return e8.get(e) ?? e7;
}
function tn(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? e8.set(e, t) : e8.delete(e), [...te]))
        try {
            n();
        } catch (e) {
            console.error("[vibegrations] design feedback subscriber threw", e);
        }
}
function tl(e) {
    e8.has(e) && tn(e, e7);
}
function ta(e, t) {
    let n = tt(e);
    n.active && tn(e, { ...n, context: t });
}
function ti(e, t) {
    return null != t && e.authorId === t;
}
function tr(e) {
    return (
        te.add(e),
        () => {
            te.delete(e);
        }
    );
}
function ts(e) {
    let t = s.useCallback(() => (null == e ? e7 : tt(e)), [e]);
    return s.useSyncExternalStore(tr, t, t);
}
var to = n(855793),
    tu = n(128761),
    td = n(967008),
    tc = n(900797),
    tm = n(320448),
    tf = n(783977),
    th = n(344587),
    tp = n(534554),
    tg = n(837984),
    tx = n(359589),
    tb = n(254575);
function tv(e) {
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
function ty(e) {
    let { settings: t, tiers: n, choices: l, disabled: a, onChange: i, placement: o, open: d, entered: c } = e,
        [m, f] = s.useState(!1),
        h = tv(m),
        p = en.PY.indexOf(t.tier),
        g = m ? tc.t : tm._,
        x = en.PY.map(tp.D0),
        b = (0, tp.Tc)(t.tier),
        { text: v, phase: y } = (0, th.Q)(b);
    return (0, r.jsx)("div", {
        className: tb.qd,
        "data-placement": o ?? void 0,
        children: (0, r.jsxs)("div", {
            className: u()(tb.t$, { [tb.Zr]: d && c, [tb.GF]: !d }),
            role: "dialog",
            "aria-label": ef.intl.string(em.default["3E7Yc0"]),
            children: [
                h.mounted
                    ? (0, r.jsx)("div", {
                          className: u()(tb.Nr, tb.uO, { [tb.Zr]: m && h.entered, [tb.GF]: !m }),
                          children: (0, r.jsx)(tx.bR, { settings: t, tiers: n, choices: l, disabled: a, onChange: i }),
                      })
                    : null,
                (0, r.jsxs)("div", {
                    className: `${tb.Nr} ${tb.rF}`,
                    children: [
                        (0, r.jsxs)("div", {
                            className: tb.wx,
                            children: [
                                (0, r.jsxs)("button", {
                                    type: "button",
                                    className: tb.y6,
                                    "aria-expanded": m,
                                    "aria-label": ef.intl.string(em.default.eGqPbV),
                                    onClick: () => f((e) => !e),
                                    children: [
                                        (0, r.jsx)(w.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: ef.intl.string(em.default.aBPQxX),
                                        }),
                                        (0, r.jsx)(g, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: tb.vg,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(w.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: u()(tb.Z, { [tb.xQ]: "exit" === y, [tb.lm]: "enter" === y }),
                                    children: v,
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: tb.hs,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: tb.Nb,
                                    children: [
                                        (0, r.jsx)(w.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: ef.intl.string(em.default["/tlOR5"]),
                                        }),
                                        (0, r.jsx)(w.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: ef.intl.string(em.default.FxoUwB),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(tg.A, {
                                    activeIndex: p,
                                    stops: x,
                                    ariaLabel: ef.intl.string(em.default.aBPQxX),
                                    disabled: a,
                                    onSelect: function (e) {
                                        let n = en.PY[e];
                                        null != n && n !== t.tier && i((0, tp.CM)((0, tp.j6)(t, n)));
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
function tj(e) {
    let { settings: t, tiers: n, choices: l, disabled: a, onChange: i, className: o, icon: u } = e,
        d = s.useRef(null),
        [c, m] = (0, tx.FT)(t, i),
        [f, h] = s.useState(!1),
        { mounted: p, entered: g } = tv(f);
    return (0, r.jsx)(el.Y, {
        targetElementRef: d,
        position: "top",
        align: "right",
        shouldShow: p,
        onRequestClose: () => h(!1),
        animation: el.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, r.jsx)(ty, {
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
                text: ef.intl.string(em.default["k2JN/p"]),
                shouldShow: !n,
                ariaHidden: !0,
                children: (0, r.jsx)(k.D, {
                    innerRef: d,
                    className: o ?? tb.hZ,
                    "aria-label": ef.intl.string(em.default["k2JN/p"]),
                    ...e,
                    onClick: () => h((e) => !e),
                    "aria-expanded": f,
                    children: u ?? (0, r.jsx)(tf.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
var tw = n(111534),
    tk = n(573083),
    tC = n(855859),
    tA = n(238490),
    tN = n(598748),
    tS = n(294323),
    tE = n(25451),
    tI = n(280450),
    tT = n(86147),
    tP = n(729475),
    tM = n(91242),
    t_ = n(869146),
    tR = n(475815),
    tL = n(621466);
function tD(e) {
    return null == e ? null : document.querySelector(`[data-frame-id="${CSS.escape(e)}"]`);
}
function tO(e) {
    let t;
    return (
        null != e &&
        ((t =
            document.fullscreenElement ??
            document.webkitFullscreenElement ??
            document.mozFullScreenElement ??
            document.msFullscreenElement ??
            null),
        ((0, tL.vq)(t, Element) ? t.getAttribute("data-frame-id") : null) === e)
    );
}
function tF(e) {
    return (0, tR.a3)(document, e);
}
function tz(e) {
    return s.useSyncExternalStore(tF, () => tO(e));
}
var tG = n(165610);
function tU(e) {
    let { frame: t, controlProjectId: n } = e,
        l = tz(t?.id ?? null),
        a = (0, tk.Zv)(n),
        i = (0, f.bG)(
            [t_.A, tM.A],
            () => null != t && t_.A.getWindowOpen(ew.MLl.ACTIVITY_POPOUT) && tM.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, tG.x1)(t) || i || a) return null;
    let s = tD(t.id);
    if (null == s || !(0, tR.Ub)(s)) return null;
    let o = ef.intl.string(l ? ef.t.Z7MyNB : ef.t.OIDkcp);
    return (0, r.jsx)(K.A.Icon, {
        tooltip: o,
        icon: l ? tT.z : tP.T,
        "aria-label": o,
        role: "switch",
        "aria-checked": l,
        selected: l,
        onClick: () => {
            var e;
            let n;
            null != (n = tD((e = t.id))) && (0, tR.Ub)(n) && (tO(e) ? (0, tR.sP)(n) : (0, tR.tl)(n));
        },
    });
}
var tq = n(629584),
    t$ = n(696645),
    tB = n(861899);
function tH(e) {
    let { modes: t, mode: n, onChange: l, className: a } = e,
        i = s.useMemo(() => t.map((e) => ({ value: e, name: (0, t$.kZ)(e), "aria-controls": (0, t$.z3)(e) })), [t]),
        o = s.useCallback(
            (e) => {
                l(e.value);
            },
            [l],
        );
    return null == n
        ? null
        : (0, r.jsx)(tq.I, {
              role: "tablist",
              look: "pill",
              className: u()(tB.b, a),
              optionClassName: tB.u,
              options: i,
              value: n,
              onChange: o,
          });
}
var tV = n(226178),
    tW = n(434279),
    tK = n(941985),
    tX = n(287809),
    tY = n(427262),
    tJ = n(245179),
    tQ = n(803306);
let tZ = new Set(),
    t0 = new Map();
function t2(e, t, n) {
    return null == e ? (n ?? null) : (t ?? null);
}
function t1(e) {
    if (null == e || tZ.has(e) || null != tX.default.getUser(e)) return;
    let t = t0.get(e) ?? 0;
    t >= 3 ||
        (t0.set(e, t + 1),
        tZ.add(e),
        tQ
            .wz(e)
            .finally(() => tZ.delete(e))
            .catch(() => {}));
}
var t6 = n(16619),
    t9 = n(782603),
    t3 = n(780338),
    t5 = n(663417),
    t4 = n(70688),
    t7 = n(173936),
    t8 = n(473935),
    ne = n(408278),
    nt = n(365199),
    nn = n(7437),
    nl = n(147036),
    na = n(957565),
    ni = n(785389),
    nr = n(123917);
let ns = new Set();
var no = n(616334),
    nu = n(189714),
    nd = n(552821);
let nc = [];
function nm(e) {
    (0, v.P)((0, y.o)(e, j.Ck.FAILURE));
}
function nf(e) {
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
        A = (0, nu.iI)(t),
        { pending: N, refresh: S } = (0, nn.A)(w ?? null),
        { pending: E, connect: I } = (function (e, t) {
            let [n, l] = s.useState(ns),
                a = s.useRef(ns),
                i = s.useCallback((e) => {
                    ((a.current = (0, ni.Q6)(a.current, e)), l(a.current));
                }, []);
            return {
                pending: n,
                connect: s.useCallback(
                    (n) => {
                        if (null == e) return;
                        let r = (0, ni.K9)(a.current, n.type);
                        async function s() {
                            let l = await (0, es.JI)(e, n.type);
                            (i(n.type), "url" === l.type)
                                ? (0, nr.h)({ href: l.url, trusted: !1 })
                                : t(
                                      "setup" === (0, ni.rq)(l.error)
                                          ? ef.intl.string(em.default["jCQ/1B"])
                                          : ef.intl.string(em.default.POxkSh),
                                  );
                        }
                        null != r && ((a.current = r), l(r), s().catch(() => i(n.type)));
                    },
                    [t, e, i],
                ),
            };
        })(k ?? null, nm),
        P = (0, f.bG)([es.Ay], () => (null == k ? nc : es.Ay.getDeclaredConnections(k))),
        M = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: l, connectPending: a } = e,
                i = [];
            for (let { connection: e, offer: r } of (t &&
                i.push({
                    id: "preview-refresh",
                    label: ef.intl.string(em.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            l))
                i.push(
                    "authorize" === r
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: ef.intl.formatToPlainString(em.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: a.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: ef.intl.formatToPlainString(em.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return i;
        })({
            canRefresh: null != w,
            refreshPending: N,
            offers: s.useMemo(() => (0, ni.Xl)(P), [P]),
            connectPending: E,
        }),
        _ = s.useMemo(() => new Map(P.map((e) => [e.type, e])), [P]),
        R = null != c && o,
        L = i && null != d,
        D = R || null != u || L || null != m || null != p,
        O = na.p5 && null != l,
        F = na.p5,
        z = A ? t9.BellIcon : t3.BellSlashIcon;
    return (0, r.jsxs)(ea.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": ef.intl.string(ef.t.ogxXGq),
        onClose: C,
        onSelect: C,
        children: [
            null != g || null != b
                ? (0, r.jsxs)(ei.rX, {
                      children: [
                          null != g
                              ? (0, r.jsx)(ei.Dr, {
                                    id: "refresh",
                                    icon: t5.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: t5.RefreshIcon },
                                    label: ef.intl.string(em.default["p4B/7M"]),
                                    disabled: x,
                                    action: g,
                                })
                              : null,
                          null != b
                              ? (0, r.jsx)(ei.Dr, {
                                    id: "close",
                                    icon: t4.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: t4.DoorExitIcon },
                                    label: ef.intl.string(em.default["/TlGcK"]),
                                    action: b,
                                })
                              : null,
                      ],
                  })
                : null,
            M.length > 0
                ? (0, r.jsx)(ei.rX, {
                      children: M.map((e) =>
                          (0, r.jsx)(
                              ei.Dr,
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
            (0, r.jsx)(ei.rX, {
                children: (0, r.jsx)(ei.Dr, {
                    id: "mute",
                    label: ef.intl.string(A ? em.default.s9rCuH : em.default["a+i/As"]),
                    icon: z,
                    leadingAccessory: { type: "icon", icon: z },
                    action: () => (0, nu.$L)(t, !A),
                }),
            }),
            D
                ? (0, r.jsxs)(ei.rX, {
                      children: [
                          R
                              ? (0, r.jsx)(ei.Dr, { id: "remix", label: ef.intl.string(em.default.XWgAfc), action: c })
                              : null,
                          null != u
                              ? (0, r.jsx)(ei.Dr, { id: "export", label: ef.intl.string(em.default.WsEEP7), action: u })
                              : null,
                          L
                              ? (0, r.jsx)(ei.Dr, { id: "import", label: ef.intl.string(em.default.rWGY3e), action: d })
                              : null,
                          null != m
                              ? (0, r.jsx)(ei.Dr, {
                                    id: "connect-tool",
                                    label: ef.intl.string(em.default.yOIql5),
                                    action: m,
                                })
                              : null,
                          null != p
                              ? (0, r.jsx)(ei.Dr, {
                                    id: "history",
                                    label: ef.intl.string(em.default["3hIVou"]),
                                    action: p,
                                })
                              : null,
                      ],
                  })
                : null,
            F
                ? (0, r.jsxs)(ei.rX, {
                      children: [
                          O
                              ? (0, r.jsx)(ei.Dr, {
                                    id: "copy-link",
                                    label: ef.intl.string(ef.t.WqhZss),
                                    icon: t7.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: t7.LinkIcon },
                                    action: () =>
                                        (0, na.C)((0, nl.n)(l, ek.VV.CONJURE, t), () =>
                                            (0, v.P)((0, y.o)(ef.intl.string(ef.t["L/PwZf"]), j.Ck.SUCCESS)),
                                        ),
                                })
                              : null,
                          (0, r.jsx)(ei.Dr, {
                              id: "copy-project-id",
                              label: ef.intl.string(em.default["nm/zuU"]),
                              icon: t8.L,
                              leadingAccessory: { type: "icon", icon: t8.L },
                              action: () =>
                                  (0, na.C)(t, () =>
                                      (0, v.P)((0, y.o)(ef.intl.string(em.default.CmfaZG), j.Ck.SUCCESS)),
                                  ),
                          }),
                      ],
                  })
                : null,
            i
                ? (0, r.jsxs)(ei.rX, {
                      children: [
                          (0, r.jsx)(ei.Dr, {
                              id: "settings",
                              label: ef.intl.string(em.default.FzfmQ8),
                              icon: T.SettingsIcon,
                              leadingAccessory: { type: "icon", icon: T.SettingsIcon },
                              action: () => (0, no.A)(t, { guildId: a ?? l, initialTab: "project", isPreview: !0 }),
                          }),
                          (0, r.jsx)(ei.Dr, {
                              id: "delete",
                              label: ef.intl.string(ef.t.oyYWHE),
                              color: "danger",
                              action: () => {
                                  (0, h.A)({
                                      title: ef.intl.formatToPlainString(em.default.CJBhb2, { name: n }),
                                      subtitle: ef.intl.string(em.default["0OmrVn"]),
                                      confirmText: ef.intl.string(ef.t.oyYWHE),
                                      variant: "critical",
                                      onConfirm: () => {
                                          (0, eR.K)(t, () =>
                                              (0, v.P)((0, y.o)(ef.intl.string(em.default["0XDHob"]), j.Ck.FAILURE)),
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
function nh(e) {
    let { trigger: t = "header", ...n } = e,
        l = s.useRef(null);
    return (0, r.jsx)(el.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: el.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(nf, { ...n, onCloseMenu: t });
        },
        children: (e, n) => {
            let { onClick: a } = e,
                { isShown: i } = n;
            return (0, r.jsx)("div", {
                ref: l,
                className: nd.h,
                children:
                    "iconButton" === t
                        ? (0, r.jsx)(C.m, {
                              text: ef.intl.string(ef.t["UKOtz+"]),
                              children: (0, r.jsx)(ne.K, {
                                  icon: nt.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": ef.intl.string(ef.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": i,
                                  onClick: a,
                              }),
                          })
                        : (0, r.jsx)(K.A.Icon, {
                              icon: nt.MoreHorizontalIcon,
                              tooltip: ef.intl.string(ef.t["UKOtz+"]),
                              "aria-label": ef.intl.string(ef.t["UKOtz+"]),
                              "aria-haspopup": "menu",
                              "aria-expanded": i,
                              selected: i,
                              onClick: a,
                          }),
            });
        },
    });
}
var np = n(845079),
    ng = n(104171),
    nx = n(286739);
function nb(e) {
    let { creator: t, className: n } = e;
    return (0, r.jsx)("div", {
        className: u()(nx.c, n),
        "aria-hidden": !0,
        children: (0, r.jsx)(ng.Ay, { users: [t.creator, ...t.collaborators], max: 3, size: ng.DN.SIZE_16 }),
    });
}
var nv = n(580954),
    ny = n(246338);
let nj = "user",
    nw = "no-server",
    nk = new Map();
function nC(e) {
    return nk.get(e) ?? null;
}
function nA(e) {
    switch (e) {
        case "all":
        case nj:
        case nw:
            return null;
        default:
            return e;
    }
}
function nN(e, t) {
    switch (t) {
        case "all":
            return !0;
        case nj:
            return "user" === e.install_scope;
        case nw:
            return null == (0, tW.wu)(e);
        default:
            return e.guild_id === t || e.preview_guild_id === t;
    }
}
var nS = n(506774);
let nE = "VibegrationsProjectsPanelOpen";
function nI() {
    return nS.w.get(nE) ?? null;
}
function nT(e) {
    return `VibegrationsProjectsPanel:${e}`;
}
function nP(e, t, n) {
    return t?.integration_installed === !0 && e?.guild_id != null ? e.guild_id : n;
}
async function nM(e, t) {
    (e.guild_id !== t || e.preview_guild_id !== t) && (await (0, eR.M7)(e.id, { guild_id: t, preview_guild_id: t }));
}
var n_ = n(73153),
    nR = n(587895),
    nL = n(321191),
    nD = n(808728),
    nO = n(385081),
    nF = n(645070);
function nz(e) {
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
                                    update: ef.intl.string(em.default.JpDnbE),
                                    open: ef.intl.string(em.default.NNIwRu),
                                    destination: "dm",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "activity":
                                return {
                                    update: ef.intl.string(em.default.QesMDC),
                                    open: ef.intl.string(em.default.iyQTsb),
                                    destination: "launch",
                                    navigatesOnFirstPublish: !1,
                                    navigatesOnUpdate: !1,
                                };
                            case "widget":
                                return {
                                    update: ef.intl.string(em.default["LUi/55"]),
                                    open: ef.intl.string(em.default.TXUK1g),
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
                        let l = ef.intl.formatToPlainString(em.default.fTgw6C, { server: t });
                        switch (e) {
                            case "bot":
                                return {
                                    update: ef.intl.string(em.default.JpDnbE),
                                    open: l,
                                    destination: "guild",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "activity":
                                return {
                                    update: ef.intl.string(em.default.QesMDC),
                                    open:
                                        null == n ? l : ef.intl.formatToPlainString(em.default.l9xGQD, { channel: n }),
                                    destination: "channel",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "automod":
                                return {
                                    update: ef.intl.string(em.default.bwBMMn),
                                    open: ef.intl.string(em.default.KjbLum),
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
                ? ef.intl.formatToPlainString(em.default["4sqXfg"], o)
                : r
                  ? ef.intl.formatToPlainString(em.default.N4NkyR, o)
                  : s
                    ? ef.intl.formatToPlainString(em.default.PxtHIV, o)
                    : null;
        })(e),
        d = (0, tA.Qg)({
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
            label: ef.intl.string(em.default["tUeY/h"]),
            action: "review_permissions",
            navigatesOnPublish: f,
        };
    let h = s?.update ?? ef.intl.string(em.default.QesMDC);
    return { ...m, label: c ? h : ef.intl.string(em.default["120EFN"]), action: "publish", navigatesOnPublish: f };
}
var nG = (((l = {}).NO_PREVIEW = "no-preview"), (l.PERMISSIONS = "permissions"), l),
    nU = n(308528),
    nq = n(345942);
let n$ = s.createContext(null);
function nB(e) {
    return nR.A.getApplication(e.application_id)?.bot?.id ?? e.application_id;
}
function nH(e, t) {
    let n = eL.Ay.getProject(e);
    if (null == n) return null;
    let l = "user" === n.install_scope ? null : (n.guild_id ?? t),
        a = null == l ? null : (0, ny.i8)(l, n.application_id),
        i = null == l ? null : ee.A.getGuild(l);
    return {
        project: n,
        guildId: l,
        appChannelId: a,
        input: {
            installScope: n.install_scope,
            status: eL.Ay.getPublishStatus(e),
            integrationStatus: eL.Ay.getIntegrationStatus(e),
            guildName: i?.name ?? null,
            appChannelName: null == a ? null : (Q.A.getChannel(a)?.name ?? null),
            appChannelPending: eL.Ay.isAppChannelPending(e),
            canManageGuild: null == i ? null : et.A.can(ew.xBc.MANAGE_GUILD, i),
            canManageChannels: null == i ? null : et.A.can(ew.xBc.MANAGE_CHANNELS, i),
            usesNativeAppChannels: (0, en.KQ)(n),
            botInGuild: (function (e, t) {
                if (null == t) return null;
                let n = nL.A.getMutualGuilds(nB(e));
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
function nV(e, t, n) {
    return (function (e, t) {
        let n,
            { applicationId: l, guildId: a, appChannelId: i, openProfile: r, openAutomodSettings: s } = t;
        switch (e) {
            case "launch":
                if ((0, tE.X)(nR.A.getApplication(l)))
                    return (H.A.launchFrame({ applicationId: l, surface: tG.sd }).catch(() => {}), Promise.resolve());
                break;
            case "profile": {
                let e = tX.default.getCurrentUser()?.id;
                if (null != e) return (r(e), Promise.resolve());
                break;
            }
            case "channel":
                if (null != a && null != i) return ((0, X.pX)(ew.BVt.CHANNEL(a, i)), Promise.resolve());
                break;
            case "automod":
                if (null != a && null != s) return (s(a), Promise.resolve());
        }
        if ("dm" !== e && null != a) {
            let e;
            return (
                null != (e = nD.Ay.getDefaultChannel(a)?.id) ? (0, X.pX)(ew.BVt.CHANNEL(a, e)) : (0, nq.u)(a),
                Promise.resolve()
            );
        }
        return ((n = nR.A.getApplication(l)?.bot?.id ?? l), nU.A.openPrivateChannel({ recipientIds: n }));
    })(t, {
        applicationId: e.project.application_id,
        guildId: e.guildId,
        appChannelId: e.appChannelId,
        openProfile: n.openProfile,
        openAutomodSettings: n.openAutomodSettings,
    });
}
async function nW(e, t) {
    let n = eL.Ay.getProject(e),
        l = n?.preview_application_id;
    if (null == n || null == l) return;
    let a = nP(n, eL.Ay.getIntegrationStatus(e), t);
    (null == nR.A.getApplication(l) && (await (0, q.TA)(l).catch(() => {})),
        await new Promise((e) => {
            nF.A.openConjureAppInstallModal({
                applicationId: l,
                application: nR.A.getApplication(l) ?? null,
                guildId: a,
                onClose: e,
            });
        }),
        await nM(n, a).catch(() => {}),
        await (0, eR.U1)(e).catch(() => {}));
}
function nK(e, t, n) {
    let { project: l } = e,
        { platform: a, guildId: i } = n,
        r = l.id,
        s = t.navigatesOnPublish ? t.destination : null,
        o = "user" === l.install_scope || null != s ? null : (0, es.$C)(r);
    (o?.catch(() => {}), "channel" === s && nX(r, !0));
    let u = (0, es.TV)(r).then((e) => {
            if (!0 !== e.ok) {
                let t;
                throw Error(
                    null != (t = e.detail?.trim()) && "" !== t
                        ? ef.intl.formatToPlainString(em.default["7ZsIF1"], { reason: t })
                        : ef.intl.string(em.default.gMWZeG),
                );
            }
            return e;
        }),
        d = u.then(
            () =>
                (0, eR.tZ)(r, { isPreview: !1 }).catch((e) => {
                    console.error("[vibegrations] post-publish refresh failed", r, e);
                }),
            () => {},
        );
    if (
        (u.then(
            () => {
                (null != e.guildId && nJ(l),
                    null != s &&
                        d
                            .then(() => ("channel" === s ? nY(r, i) : void 0))
                            .finally(() => nX(r, !1))
                            .then(() => nV(nH(r, i) ?? e, s, a))
                            .catch(() => {}));
            },
            (e) => {
                (nX(r, !1), a.showError(e instanceof Error ? e.message : ef.intl.string(em.default.gMWZeG)));
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
function nX(e, t) {
    n_.h.dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: e, pending: t });
}
async function nY(e, t) {
    let n = Date.now() + 5e3;
    for (; nH(e, t)?.appChannelId == null && Date.now() < n;) await new Promise((e) => setTimeout(e, 250));
}
function nJ(e) {
    (0, tQ.eO)(nB(e), { withMutualGuilds: !0 }).catch(() => {});
}
let nQ = new Set();
async function nZ(e, t, n) {
    let { guildId: l, platform: a } = n;
    if (!0 === n.busy || nQ.has(e)) return;
    let i = nH(e, l);
    if (null == i || eL.Ay.isProjectPublishing(e)) return;
    let r = nz(i.input);
    if (null != r) {
        if (
            ((0, nO.yJ)(e, {
                entryPoint: t,
                publishState: i.input.status?.state ?? null,
                surface: i.input.status?.surface ?? null,
                installScope: i.project.install_scope,
                action: r.action,
            }),
            "open" === r.intent)
        ) {
            null != r.destination && nV(i, r.destination, a).catch(() => {});
            return;
        }
        if (null == r.disabledReason) {
            if (i.input.integrationStatus?.preview_ready !== !0) return void a.showPublishBlocked(nG.NO_PREVIEW);
            if ("consent_then_publish" === r.intent) {
                nQ.add(e);
                try {
                    await (a.requestConsent ?? ((e) => nW(e, l)))(e);
                } finally {
                    nQ.delete(e);
                }
                if (eL.Ay.isProjectPublishing(e)) return;
                let t = nH(e, l),
                    i = t?.input.integrationStatus ?? null;
                if (
                    null == t ||
                    (0, tA.Qg)({
                        installScope: t.project.install_scope,
                        previewReady: i?.preview_ready === !0,
                        integrationInstalled: i?.integration_installed ?? null,
                        botPermissionsChanged: i?.bot_permissions_changed === !0,
                    })
                )
                    return;
                nK(t, r, n);
                return;
            }
            nK(i, r, n);
        }
    }
}
function n0(e, t) {
    let n = s.useContext(n$),
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
            [eL.Ay, ee.A, nD.Ay, Q.A, et.A, nL.A, nR.A],
            () => {
                let t = null == e || null == a ? null : nH(e, a);
                return {
                    canPublish: null != t && (0, eL.jf)(t.project),
                    project: t?.project ?? null,
                    guildId: t?.guildId ?? null,
                    appChannelId: t?.appChannelId ?? null,
                    publishing: null != e && eL.Ay.isProjectPublishing(e),
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
        null != o && null != u && C && null != k && "unpublished" !== k && nJ(o);
    }, [o?.id, u, C, k]);
    let A = s.useMemo(() => (null == w ? null : nz(w)), [w]),
        N = s.useCallback(
            (t) => {
                null != e &&
                    null != l &&
                    nZ(e, t, l).catch((t) => {
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
var n2 = n(189213);
function n1(e) {
    let { reason: t, transitionState: n, onClose: l } = e,
        a = t === nG.PERMISSIONS;
    return (0, r.jsx)(n2.a, {
        transitionState: n,
        onClose: l,
        title: ef.intl.string(a ? em.default.wQ4UyJ : em.default.ZNGLFE),
        subtitle: ef.intl.string(a ? em.default.Agqmbt : em.default.ffxKGK),
        size: "sm",
        actions: [{ text: ef.intl.string(a ? ef.t.BddRzS : em.default["/omTNx"]), variant: "primary", onClick: l }],
    });
}
var n6 = n(951465),
    n9 = n(95264),
    n3 = n(952644),
    n5 = n(991690),
    n4 = n(58736),
    n7 = n(689175),
    n8 = n(65593),
    le = n(115982);
function lt(e) {
    return !(0, tJ.BL)(e) && !0 !== e.stopRequested;
}
var ln = n(104317),
    ll = n(643278),
    la = n(566424),
    li = n(683063),
    lr = n(847374),
    ls = n(138212);
function lo(e) {
    let { title: t, trailing: n, children: l, className: a, headerClassName: i, ...s } = e;
    return (0, r.jsxs)("section", {
        className: u()(ls.Nr, a),
        ...s,
        children: [
            (0, r.jsxs)("header", {
                className: u()(ls.wx, null != n && ls.o5, i),
                children: [
                    (0, r.jsx)(w.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var lu = n(148590);
function ld(e) {
    let { children: t } = e;
    return (0, r.jsx)(w.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function lc(e) {
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
        v = h ? lr.a : tm._,
        y = null != n || l;
    return (0, r.jsxs)(lo, {
        ...m,
        title: t,
        trailing: y
            ? (0, r.jsxs)("span", {
                  className: lu.ZY,
                  children: [
                      n,
                      l
                          ? (0, r.jsx)(k.D, {
                                className: lu.L$,
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
        headerClassName: h ? void 0 : lu.RG,
        "data-superseded": l ? "true" : void 0,
        children: [d, (0, r.jsx)("div", { id: f, className: u()(lu.rf, o), hidden: !h, children: c })],
    });
}
var lm = n(883646);
let lf = [];
function lh(e) {
    let { status: t } = e;
    return (0, r.jsxs)("span", {
        className: u()(lm.xL, {
            [lm.Vb]: "in_progress" === t,
            [lm.cT]: "completed" === t,
            [lm.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return ef.intl.string(em.default.KvBdun);
                case "in_progress":
                    return ef.intl.string(em.default["m5G9+S"]);
                case "unfinished":
                    return ef.intl.string(em.default.lRpwhD);
                default:
                    return ef.intl.string(em.default.sPGeWi);
            }
        })(t),
        children: [
            (0, r.jsx)(N.y, {
                type: N.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: lm.Qd,
                itemClassName: lm.xB,
                "aria-hidden": !0,
            }),
            (0, r.jsx)("svg", {
                className: lm.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, r.jsx)("path", { className: lm.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function lp(e) {
    let { agents: t, active: n } = e,
        l = s.useMemo(() => (n ? t : lf), [n, t]),
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
        className: lm.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            p.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, r.jsx)(
                    li.u,
                    {
                        asset: (0, r.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, r.jsx)("span", {
                            className: lm.MA,
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
                      className: lm.qA,
                      children: `+${g}`,
                  })
                : null,
        ],
    });
}
function lg(e) {
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
            ((t = (a ?? lf).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            s.useMemo(() => {
                let e = new Map();
                for (let t of a ?? lf) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let n = e.get(t.todoId);
                    null != n ? n.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, r.jsxs)("ul", {
        className: lm.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || i ? t : "unfinished");
                return (0, r.jsxs)(
                    "li",
                    {
                        className: u()(lm.AS, { [lm.J1]: "completed" === n }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, r.jsx)(lh, { status: n }),
                            (0, r.jsx)(w.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: lm.iV,
                                selectable: !0,
                                children: (0, r.jsx)("span", {
                                    className: lm.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, r.jsx)(lp, { agents: d.get(e.id) ?? lf, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, r.jsxs)("li", {
                      className: lm.AS,
                      "data-provisional": !0,
                      children: [
                          (0, r.jsx)(lh, { status: "pending" }),
                          (0, r.jsx)(w.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: lm.iV,
                              selectable: !0,
                              children: (0, r.jsx)("span", { className: lm.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function lx(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: a = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let d = ef.intl.formatToPlainString(em.default["P/I+JW"], { completed: o, total: u }),
        c = ef.intl.formatToPlainString(em.default["7tzwKB"], { completed: o, total: u });
    return (0, r.jsx)(lc, {
        title: ef.intl.string(em.default.RtzECX),
        meta: (0, r.jsx)(ld, { children: d }),
        superseded: s,
        showLabel: ef.intl.string(em.default.RKyN9q),
        hideLabel: ef.intl.string(em.default.xydHoj),
        className: lm.Nr,
        bodyClassName: lm.rf,
        beforeBody: a && !s ? (0, r.jsx)(A.A, { role: "status", "aria-live": "polite", children: c }) : null,
        "data-conjure-todo-card": !0,
        children: (0, r.jsx)(lg, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var lb = n(308665),
    lv = n(59678),
    ly = n(903847);
function lj(e) {
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
              className: ly.qd,
              "data-placement": m,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, r.jsxs)("div", {
                      className: u()(ly.vK, { [ly.ho]: g && c, [ly.ET]: !c }),
                      children: [
                          null == d
                              ? (0, r.jsx)("ol", {
                                    className: u()(ly.Rk, lv.pj),
                                    "data-live": "true",
                                    children: (0, r.jsx)(la.A, {
                                        glyph: (0, r.jsx)(lb.Ay, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, r.jsx)(k.D, {
                                    className: ly.pZ,
                                    onClick: d,
                                    "aria-label": ef.intl.string(em.default.hEK6qu),
                                    children: (0, r.jsx)("ol", {
                                        className: u()(ly.Rk, lv.pj),
                                        "data-live": "true",
                                        children: (0, r.jsx)(la.A, {
                                            glyph: (0, r.jsx)(lb.Ay, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          T
                              ? (0, r.jsx)(C.m, {
                                    text: ef.intl.string(em.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, r.jsx)(k.D, {
                                        className: ly.BO,
                                        onClick: P,
                                        "aria-expanded": b,
                                        "aria-label": ef.intl.string(em.default.RtzECX),
                                        children: (0, r.jsx)(ll.ClipboardListIcon, {
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
                            className: u()(ly.vB, { [ly.pg]: b && N, [ly.ui]: !b }),
                            children: (0, r.jsx)(lx, {
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
var lw = n(658675),
    lk = n(22231),
    lC = n(826745),
    lA = n(123292),
    lN = n(155078);
function lS(e) {
    return e.options.some((e) => null != e.image);
}
let lE = [];
function lI(e, t) {
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
var lT = n(87221),
    lP = n(144228),
    lM = n(241326),
    l_ = n(26430),
    lR = n(750943),
    lL = n(95477),
    lD = n(256905),
    lO = n(839214);
let lF = [],
    lz = 1,
    lG = (0, lO.D)(() => ({ draftsByProject: {} }));
function lU(e, t, n) {
    return e.draftsByProject[t]?.[n] ?? lF;
}
function lq(e, t) {
    return lU(lG.getState(), e, t);
}
function l$(e, t, n) {
    let { draftsByProject: l } = lG.getState();
    lG.setState({ draftsByProject: { ...l, [e]: { ...l[e], [t]: n } } });
}
function lB(e, t, n, l) {
    let a = lq(e, t);
    return (
        !!a.some((e) => e.localId === n) &&
        (l$(
            e,
            t,
            a.map((e) => (e.localId === n ? { ...e, ...l } : e)),
        ),
        !0)
    );
}
function lH(e, t) {
    (0, es.Vm)(e, t).catch((e) => {
        console.error("[vibegrations] attachment cleanup failed", e);
    });
}
function lV(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && lH(e, t.ref.id));
}
function lW(e, t) {
    let { deleteFromWorker: n } = t,
        { draftsByProject: l } = lG.getState(),
        a = l[e];
    if (null == a) return;
    for (let t of Object.values(a))
        for (let l of t ?? lF) n ? lV(e, l) : null != l.previewUrl && URL.revokeObjectURL(l.previewUrl);
    let { [e]: i, ...r } = l;
    lG.setState({ draftsByProject: r });
}
function lK(e) {
    return ef.intl.formatToPlainString(em.default.JZ59Bo, { size: (0, en.sM)((0, en.Ju)(e)) });
}
function lX(e, t) {
    let n = lq(e, t);
    if (0 !== n.length) {
        for (let t of n) lV(e, t);
        l$(e, t, lF);
    }
}
function lY(e, t) {
    let n = lq(e, t);
    if (0 === n.length) return [];
    for (let e of n) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (l$(e, t, lF), n.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function lJ(e, t) {
    let { clarificationAnswers: n, attachments: l = [] } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = lq(e, "chat"),
        i = a.length > 0 && a.every((e) => "ready" === e.status) ? lY(e, "chat") : [];
    (0, es.dv)(e, t, [...l, ...i], { clarificationAnswers: n });
}
function lQ(e, t) {
    let [n, l] = s.useState(null),
        [a, i] = s.useState(!1),
        [r, o] = s.useState(0);
    return (
        s.useEffect(() => {
            let n = !1;
            return (
                (0, es.PK)(e, t).then(
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
                    (0, es.n6)(e, t).then(
                        (e) => {
                            e && 0 === r ? o(1) : i(!0);
                        },
                        () => i(!0),
                    ));
            }, [e, t, r]),
        }
    );
}
(n_.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(lG.getState().draftsByProject)) lW(e, { deleteFromWorker: !0 });
}),
    n_.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        lW(t, { deleteFromWorker: !1 });
    }));
var lZ = n(907702);
function l0(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: a } = e,
        { src: i, gone: o, handleError: d } = lQ(t, n),
        [c, m] = s.useState(null),
        f = null != i && c === i;
    return o
        ? (0, r.jsxs)("span", {
              className: u()(lZ.Gt, lZ.b6),
              children: [
                  (0, r.jsx)(lT.D, { size: "md", color: "currentColor" }),
                  (0, r.jsx)(w.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: ef.intl.string(em.default.lhgD88),
                  }),
              ],
          })
        : (0, r.jsx)("span", {
              className: u()(lZ.Gt, { [lZ.iP]: !f }),
              children:
                  null != i
                      ? (0, r.jsx)("img", {
                            src: i,
                            alt: l,
                            className: lZ.Sl,
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
function l2(e) {
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
        x = ef.intl.formatToPlainString(em.default.JGjZMs, { answer: a.label });
    return (0, r.jsxs)("div", {
        className: u()(lZ.Vs, { [lZ.Q9]: s, [lZ.RX]: o }),
        "data-conjure-clarification-option": a.id,
        children: [
            (0, r.jsxs)(k.D, {
                className: lZ.Up,
                "data-conjure-image-option-pick": !0,
                onClick: o ? void 0 : () => m(a),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), h(a, t));
                },
                role: i ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": ef.intl.formatToPlainString(em.default.AQbxhf, { answer: a.label }),
                "aria-disabled": o,
                tabIndex: d && c ? 0 : -1,
                children: [
                    (0, r.jsxs)("span", {
                        className: lZ.$_,
                        children: [
                            null != a.image
                                ? (0, r.jsx)(l0, {
                                      projectId: l,
                                      attachmentId: a.image.attachment_id,
                                      alt: a.label,
                                      onMeasured: p,
                                  })
                                : (0, r.jsx)("span", { className: lZ.Gt }),
                            (0, r.jsx)("span", {
                                className: lZ.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, r.jsx)(lw.P, { checked: s, disabled: o })
                                    : (0, r.jsx)(lP.T, { checked: s, disabled: o }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(w.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: lZ.pG,
                        children:
                            "" !== (n = null != (t = a.image?.page_url ?? a.image?.url) ? (0, lN.E)(t) : "")
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
                      className: lZ.B4,
                      children: (0, r.jsx)(C.m, {
                          text: ef.intl.string(em.default.HQEXJM),
                          children: (0, r.jsx)(ne.K, {
                              icon: lM.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: g,
                              disabled: o,
                              "aria-label": ef.intl.string(em.default.HQEXJM),
                              tabIndex: d ? 0 : -1,
                          }),
                      }),
                  })
                : null != a.image
                  ? (0, r.jsx)("span", {
                        className: lZ.B4,
                        children: (0, r.jsx)(C.m, {
                            text: ef.intl.string(em.default["4/eeDD"]),
                            children: (0, r.jsx)(ne.K, {
                                icon: l_._,
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
function l1(e) {
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
                    Promise.all(t.map((e) => (0, es.PK)(n, e.image.attachment_id))).then(
                        (e) => {
                            (0, lD.R)({
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
                      label: ef.intl.string(em.default.SUdqCQ),
                      image: { attachment_id: t.attachment.id },
                  });
    return (0, r.jsxs)("div", {
        className: lZ.Nz,
        "data-conjure-image-options": !0,
        children: [
            (0, r.jsxs)("div", {
                ref: p,
                className: u()(lZ.fF, "gallery" === h ? lZ.nV : lZ.nM, { [lZ.m3]: m }),
                role: m ? "group" : "radiogroup",
                "aria-labelledby": `${l.id}-label`,
                "data-layout": h,
                "data-count": f.length,
                children: [
                    f.map((e) =>
                        (0, r.jsx)(
                            l2,
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
                              l2,
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
            (0, r.jsx)(l6, {
                projectId: n,
                own: c,
                disabled: i,
                reachable: o,
                uploadText: ef.intl.string(/\bicons?\b/i.test(l.question) ? em.default.qU4WN6 : em.default.cbMDDB),
            }),
        ],
    });
}
function l6(e) {
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
        className: lZ.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, r.jsxs)("div", {
                className: lZ.QJ,
                children: [
                    (0, r.jsx)(S.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: lR.X,
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
                              icon: t7.LinkIcon,
                              text: ef.intl.string(em.default["1TgOO+"]),
                              disabled: l || "upload" === h,
                              onClick: () => d(!0),
                              tabIndex: f,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, r.jsx)("input", {
                        ref: o,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: lZ.Fg,
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
                                        (0, en.Oq)(i.size, a)
                                            ? (0, es.c9)(t, i, l, a)
                                            : Promise.resolve({ errorText: lK(a) })),
                                    ));
                        },
                    }),
                ],
            }),
            u
                ? (0, r.jsxs)("div", {
                      className: lZ.vG,
                      children: [
                          (0, r.jsx)("div", {
                              className: lZ.Hs,
                              children: (0, r.jsx)(lL.k, {
                                  label: ef.intl.string(em.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: ef.intl.string(em.default.AVhvn8),
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
                              className: lZ.gd,
                              children: [
                                  (0, r.jsx)(S.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: ef.intl.string(em.default.FbRbeM),
                                      loading: "link" === h,
                                      disabled: l || "" === c.trim(),
                                      onClick: p,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, r.jsx)(lA.Q, {
                                      variant: "secondary",
                                      textVariant: "text-sm/medium",
                                      text: ef.intl.string(em.default.eXZL4X),
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
var l9 = n(29073),
    l3 = n(384017);
function l5(e) {
    let { option: t, position: n, disabled: l, onPick: a, reachable: i = !0, selected: o } = e,
        d = s.useId(),
        c = !0 === t.recommended,
        m = null != t.detail && "" !== t.detail;
    return (0, r.jsxs)(k.D, {
        className: u()(l3.uK, { [l3.ue]: l, [l3.h4]: !0 === o }),
        onClick: l ? void 0 : () => a(t),
        "aria-label": ef.intl.formatToPlainString(c ? em.default["2p6UFz"] : em.default.AQbxhf, { answer: t.label }),
        "aria-describedby": m ? d : void 0,
        "aria-disabled": l,
        role: null != o ? "checkbox" : void 0,
        "aria-checked": o,
        tabIndex: i ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": c ? "true" : void 0,
        children: [
            null != o
                ? (0, r.jsx)("span", { className: l3.dy, children: (0, r.jsx)(lw.P, { checked: o, disabled: l }) })
                : (0, r.jsx)("span", { className: l3.Gy, "aria-hidden": !0, children: n }),
            (0, r.jsxs)("span", {
                className: l3.qO,
                children: [
                    (0, r.jsx)("span", {
                        className: l3.l8,
                        children: (0, r.jsx)(w.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: l3.ed,
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
                      className: l3.rM,
                      children: ef.intl.string(em.default.zku6r1),
                  })
                : null,
        ],
    });
}
function l4(e) {
    let { projectId: t, question: n, selected: l, disabled: a, reachable: i = !0, onPick: s, own: o } = e,
        u = !0 === n.multi_select;
    return lS(n)
        ? (0, r.jsx)(l1, { projectId: t, question: n, selectedIds: l, disabled: a, reachable: i, onPick: s, own: o })
        : (0, r.jsx)(r.Fragment, {
              children: n.options.map((e, t) =>
                  (0, r.jsx)(
                      l5,
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
let l7 = [];
function l8(e) {
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
        className: u()(l3.Ge, l3.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            m
                ? (0, r.jsx)(w.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: l3.aK,
                      children: ef.intl.string(em.default.tE8qbz),
                  })
                : null,
            (0, r.jsx)(l4, {
                projectId: t,
                question: n,
                selected: a,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: lI(o, d),
            }),
            lS(n)
                ? null
                : (0, r.jsxs)("div", {
                      className: l3.Xy,
                      children: [
                          (0, r.jsx)("span", {
                              className: l3.Gy,
                              "aria-hidden": !0,
                              children: (0, r.jsx)(lk.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == c ? null : (0, r.jsx)("span", { className: u()(l3.Pu, l3.es), children: c }),
                      ],
                  }),
        ],
    });
}
function ae(e) {
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
        V = lS(F),
        W = H ? (f[F.id] ?? l7) : ((t = o[F.id]), t?.kind === "option" ? [t.optionId] : lE),
        K = (function (e, t, n) {
            let [l, a] = s.useState({}),
                [i, r] = s.useState({}),
                [o, u] = s.useState({}),
                d = ef.intl.string(em.default.wTsP5l),
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
                        if (o) return lI(h, m(s));
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
                                    null != l && (0, es.Vm)(e, l.attachment.id).catch(() => void 0), { ...n, [c]: t }
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
                                    ((0, es.Vm)(e, h.attachment.id).catch(() => void 0),
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
                                                error: { source: "upload", text: ef.intl.string(em.default["kUw/b1"]) },
                                            }),
                                    ));
                            },
                            onLink: (t) => (
                                p({ busy: "link", error: null }),
                                (0, es.gm)(e, t).then(
                                    (e) => (b({ attachment: e }), !0),
                                    (e) => (
                                        p({
                                            busy: null,
                                            error: {
                                                source: "link",
                                                text:
                                                    e instanceof Error && "" !== e.message
                                                        ? e.message
                                                        : ef.intl.string(em.default.l79PMc),
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
        { text: J, phase: Q } = (0, th.Q)(F.question),
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
    let et = ef.intl.string(U ? ef.t.iTcuma : ef.t.dcl9MQ),
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
    let er = s.useCallback(
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
                V ? R || d((e) => ({ ...e, [F.id]: t })) : er(t);
            },
            [R, V, F.id, er],
        ),
        { multiPartFor: ec } = K,
        eh = s.useMemo(() => {
            var e;
            let t, n;
            return H
                ? ((e = ec(F)),
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
        }, [B, H, ec, F, W]),
        ep = K.controlsFor(F, R),
        eg = s.useCallback(() => {
            if (null != eh) {
                "" !== eh.text && er(eh);
                return;
            }
            let e = B.trim();
            "" !== e && er({ kind: "custom", text: e });
        }, [B, eh, er]),
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
            null == ew || R || er(ew);
        }, [R, ew, er]),
        eN = s.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, tL.vq)(e.target, HTMLTextAreaElement) ||
                    (0, tL.vq)(e.target, HTMLInputElement) ||
                    ((!(0, tL.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && eu
                            ? (e.preventDefault(), eo())
                            : "ArrowRight" === e.key && ek && (e.preventDefault(), eA())));
            },
            [eu, ek, eo, eA],
        );
    return (0, r.jsxs)("section", {
        className: u()(l3.$O, { [l3.fI]: ex && !ev, [l3.Oh]: ev }),
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
                className: l3.rf,
                style: null == j ? void 0 : { height: j.heading + j.rows },
                "data-moving": N ? "" : void 0,
                children: [
                    (0, r.jsxs)("div", {
                        ref: I,
                        className: l3.wx,
                        children: [
                            (0, r.jsx)(w.E, {
                                ref: P,
                                tag: "span",
                                id: `${F.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: U ? void 0 : 5,
                                className: u()(l9.TK, l3.R_, { [l3.TB]: "exit" === Q, [l3.JU]: "enter" === Q }),
                                children: J,
                            }),
                            ee || U
                                ? (0, r.jsx)("div", {
                                      className: l9.Q7,
                                      children: (0, r.jsx)(C.m, {
                                          text: et,
                                          children: (0, r.jsx)(ne.K, {
                                              icon: U ? tc.t : lr.a,
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
                                      className: u()(l9.gb, l9.Q7),
                                      onClick: ej,
                                      "aria-label": ef.intl.string(em.default.qVXlk0),
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
                        className: l3.Cg,
                        style: null == j ? void 0 : { insetBlockStart: j.heading },
                        children: (0, r.jsxs)("div", {
                            className: l3.I,
                            children: [
                                (0, r.jsxs)("div", {
                                    ref: M,
                                    className: l3.Ge,
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
                                                  className: l3.aK,
                                                  children: ef.intl.string(em.default.tE8qbz),
                                              })
                                            : null,
                                        (0, r.jsx)(l4, {
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
                                                                  ((n = t[F.id] ?? l7),
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
                                                  className: l3.Xy,
                                                  children: [
                                                      (0, r.jsx)("span", {
                                                          className: l3.Gy,
                                                          "aria-hidden": !0,
                                                          children: (0, r.jsx)(lk.PencilIcon, {
                                                              size: "custom",
                                                              width: 20,
                                                              height: 20,
                                                              color: "currentColor",
                                                          }),
                                                      }),
                                                      (0, r.jsx)(lC.y, {
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
                                                          placeholder: ef.intl.string(em.default["tOC+tn"]),
                                                          "aria-label": ef.intl.formatToPlainString(
                                                              em.default["4JeYPB"],
                                                              { question: F.question },
                                                          ),
                                                          disabled: R,
                                                          rows: 1,
                                                          className: l3.Pu,
                                                          "data-conjure-clarification-other": F.id,
                                                      }),
                                                  ],
                                              }),
                                    ],
                                }),
                                null == v
                                    ? null
                                    : (0, r.jsx)(
                                          l8,
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
                      className: l9.qr,
                      children: [
                          (0, r.jsx)(w.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  L > 1
                                      ? ef.intl.formatToPlainString(em.default.yzYUjq, { index: D + 1, total: L })
                                      : null,
                          }),
                          (0, r.jsxs)("div", {
                              className: l9.zt,
                              children: [
                                  eu
                                      ? (0, r.jsx)(lA.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: ef.intl.string(em.default.Pk5lfA),
                                            onClick: eo,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  (0, r.jsx)(S.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: ef.intl.string(eC ? ef.t.geKm7t : em.default.w1nRmT),
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
var at = n(856059),
    an = n(411236);
function al(e) {
    let { projectId: t, request: n, onDismiss: l } = e,
        a = null != n.note && "" !== n.note ? n.note : ef.intl.string(em.default.XuOf5s);
    return (0, r.jsx)(at.A, {
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
                text: ef.intl.string(em.default.A7dQd9),
            });
            return null == l
                ? (0, r.jsxs)("form", {
                      className: an.Mk,
                      onSubmit: o,
                      children: [
                          (0, r.jsx)(w.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: ef.intl.string(em.default["jZjP+I"]),
                          }),
                          (0, r.jsx)(w.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              selectable: !0,
                              children: a,
                          }),
                          t,
                          (0, r.jsx)("div", { className: an.p0, children: d }),
                      ],
                  })
                : (0, r.jsxs)("form", {
                      className: u()(l9.nd, l9.jx),
                      "aria-label": ef.intl.string(em.default["jZjP+I"]),
                      onSubmit: o,
                      children: [
                          (0, r.jsxs)("div", {
                              className: l9.wx,
                              children: [
                                  (0, r.jsx)(w.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: l9.TK,
                                      children: ef.intl.string(em.default["jZjP+I"]),
                                  }),
                                  (0, r.jsx)(k.D, {
                                      className: u()(l9.gb, l9.Q7),
                                      onClick: l,
                                      "aria-label": ef.intl.string(em.default["iq+Pte"]),
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
                              className: an.DQ,
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
                              className: l9.qr,
                              children: (0, r.jsx)("div", { className: l9.zt, children: d }),
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
    return nS.w.get(as) ?? {};
}
let au = new Map(),
    ad = ar().throttle(() => {
        if (0 === au.size) return;
        let e = ao();
        for (let [t, n] of au) "" === n ? delete e[t] : (e[t] = n);
        (au.clear(), nS.w.set(as, e));
    }, 1e3);
class ac extends f.Ay.Store {
    getDraft(e) {
        let t = au.get(e);
        return null != t ? t : (ao()[e] ?? "");
    }
}
let am = new ac(n_.h, {
    LOGOUT: function () {
        return (au.clear(), ad.cancel(), nS.w.remove(as), !1);
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
    return null != e.labelText && "" !== e.labelText ? e.labelText : ef.intl.string(em.default.KcFvbo);
}
function ab(e) {
    var t;
    let n,
        l,
        { steps: a, content: i, hasProposal: r, hasAttachments: s } = e,
        o = (0, le.B4)(a),
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
        })({ hasAttachments: s, showsClosingMessage: f, endsOnStreamedMessage: (0, le.Lf)(a) }),
    };
}
(n(134528), n(947204));
let av = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    ay = {
        snail: () => em.default.ABeVsS,
        goat: () => em.default.dhXay8,
        frog: () => em.default.SHeweG,
        bunny: () => em.default.FytFE1,
        cat: () => em.default["5c+sHs"],
        caterpillar: () => em.default["/FYcne"],
        butterfly: () => em.default["Ib/AxK"],
        dog: () => em.default.zDjBR1,
        spider: () => em.default["6sxyrN"],
        bee: () => em.default.cVtefg,
        bot: () => em.default.MjCw0v,
    },
    aj = {
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
function aw(e) {
    return { ...aj[e], name: ef.intl.string(ay[e]()) };
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
    let { projectId: t, lane: n, Illocon: l, tint: a, name: i, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        d = (0, le.SY)(n.steps),
        c = u
            ? null != d
                ? (0, le.WQ)(d)
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
                          return ef.intl.formatToPlainString(em.default.YrVgOf, { task: t });
                      case "cancelled":
                          return ef.intl.formatToPlainString(em.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return ef.intl.formatToPlainString(em.default["++9woZ"], {
                                  task: t,
                                  duration: (0, ag.MB)(e.durationMs),
                              });
                          return ef.intl.formatToPlainString(em.default.nmI9Uh, { task: t });
                      default:
                          return ef.intl.formatToPlainString(em.default.nmI9Uh, { task: t });
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
                                    className: lv.dO,
                                    children: n.steps.map((e) =>
                                        (0, r.jsx)(
                                            aN.A,
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
                                      className: lv.iq,
                                      children: (0, r.jsx)(aA.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, r.jsx)(la.A, {
        glyph: (0, r.jsx)(li.u, {
            asset: (0, r.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: ax(o),
            position: "left",
            children: (0, r.jsx)("span", {
                className: lv.nC,
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
var aE = n(469393);
function aI(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, tu.lG)(t.authored_at);
    return (0, r.jsx)(lo, {
        title: ef.intl.string(em.default["t+b0rz"]),
        children: (0, r.jsxs)("div", {
            className: aE.r,
            children: [
                (0, r.jsxs)("div", {
                    className: aE.z,
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
                          text: ef.intl.string(em.default.H8Jfhu),
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
    aL = n(176999),
    aD = (((a = {}).IMAGE = "image"), a),
    aO = (((i = {}).PRIVATE = "private"), (i.PUBLIC = "public"), i),
    aF = n(773669);
let az = [],
    aG = {};
function aU(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function aq(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: aD.IMAGE,
        visibility: aO.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var a$ = n(628284),
    aB = n(97808),
    aH = n(778712),
    aV = n(809115),
    aW = n(486020),
    aK = n(200700);
let aX = {
        alert: { label: () => ef.intl.string(em.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => ef.intl.string(em.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => ef.intl.string(em.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => ef.intl.string(em.default.RGzFNK), blockedStyle: !1 },
    },
    aY = {
        blocked: { label: () => ef.intl.string(em.default.YdnZ8q), tone: "red" },
        alert: { label: () => ef.intl.string(em.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => ef.intl.string(em.default.RGzFNK), tone: "green" },
    },
    aJ = ["blocked", "alert", "allowed"],
    aQ = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
var aZ = n(984097),
    a0 = n(13673);
let a2 = { blocked: aP.ShieldIcon, alert: t9.BellIcon, allowed: a$.y },
    a1 = {
        blurple: { text: "text-brand", icon: z.A.colors.TEXT_BRAND },
        red: { text: "text-feedback-critical", icon: z.A.colors.TEXT_FEEDBACK_CRITICAL },
        green: { text: "text-feedback-positive", icon: z.A.colors.TEXT_FEEDBACK_POSITIVE },
    };
function a6(e) {
    var t, n;
    let l,
        a,
        { example: i } = e,
        s =
            "" ===
            (a = [
                "timeout" !== (t = i).outcome || null == t.timeout_seconds
                    ? null
                    : ef.intl.formatToPlainString(ef.t["3LYql6"], {
                          duration:
                              ((n = t.timeout_seconds),
                              null != (l = (0, aK.getFriendlyDurationString)(n))
                                  ? l
                                  : n % 604800 == 0
                                    ? ef.intl.formatToPlainString(ef.t.EmoBD2, { weeks: n / 604800 })
                                    : n % 86400 == 0
                                      ? ef.intl.formatToPlainString(ef.t["k2UNz+"], { days: n / 86400 })
                                      : n % 3600 == 0
                                        ? ef.intl.formatToPlainString(ef.t.xCjYxK, { hours: n / 3600 })
                                        : n % 60 == 0
                                          ? ef.intl.formatToPlainString(ef.t.opVZ9q, { mins: n / 60 })
                                          : ef.intl.formatToPlainString(ef.t["4zv/jq"], { secs: n })),
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
function a9(e) {
    var t;
    let { example: n } = e,
        { label: l, blockedStyle: a } = aX[n.outcome];
    return (0, r.jsxs)("li", {
        className: u()(aZ.nM, { [u()(aZ.HV, a0.DX)]: a }),
        children: [
            (0, r.jsx)(A.A, { children: `${l()}: ` }),
            (0, r.jsx)("span", {
                className: aZ.my,
                children: (0, r.jsx)(aB.eu, {
                    src: (0, aW.AE)(void 0, void 0),
                    size: aH._3.SIZE_24,
                    "aria-label": ef.intl.string(em.default["1yI0xV"]),
                }),
            }),
            (0, r.jsxs)("div", {
                className: aZ.fw,
                children: [
                    (0, r.jsx)(w.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), ap.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    (0, r.jsx)(a6, { example: n }),
                ],
            }),
        ],
    });
}
function a3(e) {
    let { group: t } = e,
        n = s.useId(),
        l = aY[t.section],
        a = a2[t.section],
        i = a1[l.tone];
    return (0, r.jsxs)("div", {
        className: aZ.uW,
        children: [
            (0, r.jsxs)("div", {
                className: aZ.bV,
                children: [
                    (0, r.jsx)(a, { size: "xs", color: i.icon, "aria-hidden": !0 }),
                    (0, r.jsx)(w.E, {
                        id: n,
                        variant: "text-xs/semibold",
                        color: i.text,
                        className: aZ.a9,
                        children: l.label(),
                    }),
                ],
            }),
            (0, r.jsx)("ul", {
                className: aZ.Ge,
                "aria-labelledby": n,
                children: t.examples.map((e, t) => (0, r.jsx)(a9, { example: e }, t)),
            }),
        ],
    });
}
function a5() {
    let { avatarSrc: e, eventHandlers: t } = (0, aV.a)(!0);
    return (0, r.jsx)("span", {
        className: aZ.Gy,
        ...t,
        children: (0, r.jsx)(aB.eu, { src: e, size: aH._3.SIZE_16, "aria-label": ef.intl.string(ef.t.hG1StD) }),
    });
}
function a4(e) {
    var t;
    let { automod: n } = e;
    return (0, r.jsx)("div", {
        className: aZ.K1,
        children: ((t = n.examples),
        aJ
            .map((e) => ({ section: e, examples: t.filter((t) => aQ[t.outcome] === e) }))
            .filter((e) => e.examples.length > 0)).map((e) => (0, r.jsx)(a3, { group: e }, e.section)),
    });
}
var a7 = n(633075),
    a8 = n(946356),
    ie = n(58216),
    it = n(27399);
function il(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, f.bG)([tX.default], () => tX.default.getCurrentUser()),
        a = s.useMemo(() => new a7.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, r.jsx)("div", {
              className: it.H,
              children: (0, r.jsx)(a8.A.Overlay, {
                  className: it.w,
                  children: (0, r.jsx)(ie.A, {
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
var ia = n(443863);
function ii(e) {
    let { label: t, icon: n, info: l, children: a } = e;
    return (0, r.jsxs)("section", {
        className: ia.uW,
        children: [
            (0, r.jsxs)("span", {
                className: ia.a9,
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
function ir(e) {
    let { text: t, label: n } = e;
    return (0, r.jsx)(C.m, {
        text: t,
        children: (0, r.jsx)(k.D, {
            className: ia.bk,
            "aria-label": n,
            children: (0, r.jsx)(aT.CircleInformationIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
function is(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, r.jsx)(ii, {
              label: t,
              children: (0, r.jsx)("div", {
                  className: ia.Ip,
                  children: n.map((e) =>
                      (0, r.jsx)(
                          "span",
                          {
                              className: ia.jw,
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
function io() {
    return (0, r.jsxs)("span", {
        className: ia.L6,
        children: [
            (0, r.jsx)(aP.ShieldIcon, {
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
                children: ef.intl.string(em.default.DnWMLj),
            }),
        ],
    });
}
function iu(e) {
    let { isActivity: t, hasWidget: n } = e,
        l = t ? aM.k : a_.RobotIcon;
    return (0, r.jsxs)("span", {
        className: ia.K2,
        children: [
            n
                ? (0, r.jsxs)("span", {
                      className: ia.L6,
                      children: [
                          (0, r.jsx)(aR.f, {
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
                              children: ef.intl.string(em.default["EswAi+"]),
                          }),
                      ],
                  })
                : null,
            (0, r.jsxs)("span", {
                className: ia.L6,
                children: [
                    (0, r.jsx)(l, { size: "custom", width: 16, height: 16, color: "currentColor", "aria-hidden": !0 }),
                    (0, r.jsx)(w.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        tag: "span",
                        children: ef.intl.string(t ? ef.t.IC5Ann : em.default.VFWfz1),
                    }),
                ],
            }),
        ],
    });
}
function id(e) {
    let { projectId: t, design: n } = e,
        { id: l } = n,
        { src: a, gone: i, handleError: o } = lQ(t, l),
        u = ef.intl.string(em.default["3/aHX6"]),
        d = s.useCallback(() => {
            (0, es.PK)(t, l).then(
                (e) => {
                    (0, lD.R)({
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
        : (0, r.jsx)(ii, {
              label: ef.intl.string(em.default.X15LLY),
              info: (0, r.jsx)(ir, {
                  text: ef.intl.string(em.default.nR4B8P),
                  label: ef.intl.string(em.default.nc0SNY),
              }),
              children: (0, r.jsx)(k.D, {
                  className: ia.xX,
                  onClick: d,
                  "aria-label": ef.intl.string(em.default.TvAPIm),
                  children: null != a ? (0, r.jsx)("img", { src: a, alt: u, className: ia.sN, onError: o }) : null,
              }),
          });
}
function ic(e) {
    let { projectId: t, proposal: n, version: l, onApprove: a } = e,
        { automod: i } = n,
        o = (function (e, t) {
            let { widget_config: n, widget_preview: l } = t,
                a = (0, f.bG)([aF.default], () => aF.default.locale),
                i = (0, f.bG)([eL.Ay], () => {
                    let t = eL.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                r = (function (e, t) {
                    let [n, l] = s.useState(aG);
                    return (
                        s.useEffect(() => {
                            let n = Object.entries(t ?? {});
                            if (0 === n.length) return;
                            let a = !1;
                            return (
                                Promise.all(
                                    n.map((t) => {
                                        let [n, l] = t;
                                        return (0, es.PK)(e, l.id).then(
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
                                                          ...aU(n),
                                                          ...(null != n.fallback ? { fallback: aU(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let i = aL.uW.safeParse(a);
                                  if (!i.success) return null;
                                  let r = i.data;
                                  return null == r[tN.m.WIDGET_TOP] || null == r[tN.m.WIDGET_BOTTOM]
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
                                                                    type: aL.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof i
                                                                ? (a[e] = { type: aL.oG.NUMBER, value: i })
                                                                : (a[e] = { type: aL.oG.STRING, value: i });
                                                    return a;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(aq),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: az,
                                            },
                                        };
                              })(n, l, r, a),
                    [n, l, r, a],
                );
            return s.useMemo(() => (null == i || null == o ? null : { applicationId: i, rendererProps: o }), [i, o]);
        })(t, n),
        u = l?.superseded === !0,
        d = n.what_changed?.trim() ?? "";
    return (0, r.jsxs)(lc, {
        title:
            u && null != l
                ? ef.intl.formatToPlainString(em.default.YZ3qJs, { version: l.version })
                : ef.intl.string(em.default["3b6e7o"]),
        meta: u
            ? (0, r.jsx)(ld, { children: ef.intl.string(em.default.hF2c41) })
            : null != i
              ? (0, r.jsx)(io, {})
              : (0, r.jsx)(iu, { isActivity: !0 === n.is_activity, hasWidget: null != n.widget_config }),
        superseded: u,
        showLabel: ef.intl.string(em.default.yD8EJS),
        hideLabel: ef.intl.string(em.default.nSPGNb),
        bodyClassName: ia.rf,
        "data-conjure-plan-card": !0,
        children: [
            "" !== d
                ? (0, r.jsx)(ii, {
                      label: ef.intl.string(em.default.iNS4dl),
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
                ? (0, r.jsx)(ii, {
                      label: ef.intl.string(em.default.z4ZKYG),
                      icon: (0, r.jsx)(a5, {}),
                      info: (0, r.jsx)(ir, {
                          text: ef.intl.string(em.default.bo4MOx),
                          label: ef.intl.string(em.default.VPLNot),
                      }),
                      children: (0, r.jsx)(a4, { automod: i }),
                  })
                : null,
            null == i && null != n.design_image ? (0, r.jsx)(id, { projectId: t, design: n.design_image }) : null,
            null == i && null != o
                ? (0, r.jsx)(ii, {
                      label: ef.intl.string(em.default.ove4zH),
                      info: (0, r.jsx)(ir, {
                          text: ef.intl.string(em.default.XcIrHx),
                          label: ef.intl.string(em.default["TwT+ht"]),
                      }),
                      children: (0, r.jsx)(il, { ...o }),
                  })
                : null,
            n.changes.length > 0
                ? (0, r.jsx)(ii, {
                      label: ef.intl.string(em.default["5+mG1z"]),
                      children: (0, r.jsx)("ul", {
                          className: ia.p_,
                          children: n.changes.map((e, t) =>
                              (0, r.jsx)(
                                  "li",
                                  {
                                      className: ia.Aw,
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
                ? (0, r.jsx)(ii, {
                      label: ef.intl.string(ef.t["0hKkS+"]),
                      children: (0, r.jsx)("ul", {
                          className: ia.p_,
                          children: n.commands.map((e, t) =>
                              (0, r.jsxs)(
                                  "li",
                                  {
                                      className: ia.uX,
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
            (0, r.jsx)(is, { label: ef.intl.string(em.default["2UbW6r"]), names: n.bot_permissions ?? [] }),
            (0, r.jsx)(is, { label: ef.intl.string(em.default["7TKfpj"]), names: n.privileged_intents ?? [] }),
            null == a || u
                ? null
                : (0, r.jsxs)("div", {
                      className: ia.o1,
                      children: [
                          (0, r.jsx)(S.$, {
                              variant: "primary",
                              size: "sm",
                              text: ef.intl.string(em.default["6S+wRM"]),
                              onClick: a,
                          }),
                          (0, r.jsx)(w.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              tag: "span",
                              children: ef.intl.string(em.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
var im = n(331322);
function ih(e) {
    return null != e && e.status?.state === "unpublished";
}
function ip(e) {
    let { publish: t } = e,
        n = t.guildId,
        l = (0, f.bG)([ee.A], () => (null == n ? null : ee.A.getGuild(n)));
    return (0, r.jsx)(im.B, {
        gap: 8,
        align: "start",
        children: (0, r.jsxs)(im.B, {
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
                    ? (0, r.jsxs)(im.B, {
                          direction: "horizontal",
                          gap: 4,
                          align: "center",
                          children: [
                              (0, r.jsx)(w.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: ef.intl.string(em.default["+HGTlC"]),
                              }),
                              (0, r.jsx)(eQ.Ay, { guild: l, size: eQ.Ay.Sizes.SMOL }),
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
function ig(e) {
    let { projectId: t } = e,
        n = n0(t);
    return null != n && ih(n) ? (0, r.jsx)(ip, { publish: n }) : null;
}
var ix = n(478016),
    ib = n(989271);
function iv(e) {
    let { idea: t, selected: n, onPick: l } = e,
        a = s.useId(),
        i = null == l;
    return (0, r.jsxs)(k.D, {
        className: u()(ib.nM, { [ib.f1]: i, [ib.CZ]: n }),
        onClick: i ? void 0 : () => l(t),
        "aria-label": ef.intl.formatToPlainString(em.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : a,
        "aria-disabled": i,
        "aria-pressed": n,
        children: [
            (0, r.jsxs)("div", {
                className: ib.jo,
                children: [
                    n
                        ? (0, r.jsx)(ix.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: ib.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, r.jsx)(w.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: ib.G9,
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
function iy(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [a, i] = s.useState(() => new Set()),
        o = s.useCallback(
            (e) => {
                (i((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, r.jsx)(lo, {
        title: ef.intl.string(em.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, r.jsx)(
                iv,
                { idea: e, selected: a.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
function ij(e) {
    let { onAsk: t } = e;
    return (0, r.jsx)(im.B, {
        align: "start",
        "data-conjure-ideas-offer": !0,
        children: (0, r.jsx)(S.$, {
            variant: "secondary",
            size: "sm",
            disabled: null == t,
            onClick: t,
            text: ef.intl.string(em.default["U/bLzU"]),
        }),
    });
}
var iw = n(530557),
    ik = n(872162);
function iC(e, t) {
    return { cardId: e, status: "pending" === t ? null : t };
}
var iA = n(202723);
function iN(e) {
    let { projectId: t, cardId: l, request: a, status: i, awaiting: o } = e,
        d = s.useCallback(() => {
            (0, eN.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("291953"), n.e("408337")]).then(n.bind(n, 789864));
                return (n) => (0, r.jsx)(e, { ...n, projectId: t, request: a });
            });
        }, [t, a]),
        c = s.useMemo(() => a.fields.map((e) => ({ id: e.name, label: e.label, icon: iw.R })), [a.fields]),
        m = (function (e, t) {
            let [n, l] = s.useState(() => iC(e, t));
            return n.cardId !== e || (null == n.status && "pending" !== t)
                ? (l(iC(e, t)), !1)
                : null != n.status && t !== n.status;
        })(l, i),
        f = u()(iA.Lo, { [iA.jY]: m });
    return "superseded" === i
        ? (0, r.jsx)(
              "article",
              {
                  className: f,
                  children: (0, r.jsx)(w.E, {
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      tag: "span",
                      children: ef.intl.string(em.default.CTxtdV),
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
                            children: ef.intl.string(em.default.HCQvpO),
                        }),
                        (0, r.jsx)(ik.C, { label: ef.intl.string(em.default.HCQvpO), size: "xs", items: c }),
                    ],
                },
                i,
            )
          : "pending" === i
            ? (0, r.jsx)(
                  "article",
                  {
                      className: iA.Lo,
                      children: (0, r.jsx)(ik.C, { label: ef.intl.string(em.default.HCQvpO), size: "xs", items: c }),
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
                                className: iA.$h,
                                children: [
                                    (0, r.jsx)("span", {
                                        className: iA.c9,
                                        "aria-hidden": !0,
                                        children: (0, r.jsx)(a$.y, {
                                            size: "xs",
                                            color: z.A.colors.ICON_FEEDBACK_POSITIVE,
                                        }),
                                    }),
                                    (0, r.jsx)(w.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-feedback-positive",
                                        tag: "span",
                                        children: ef.intl.string(em.default.sfp7Up),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(ik.C, { label: ef.intl.string(em.default.sfp7Up), size: "xs", items: c }),
                        ],
                    },
                    i,
                )
              : (0, r.jsxs)("article", {
                    className: iA.Lo,
                    children: [
                        (0, r.jsx)(w.E, {
                            variant: "text-xs/semibold",
                            color: null != o ? "text-brand" : "text-muted",
                            tag: "span",
                            children: ef.intl.string(null != o ? em.default.O0QIqj : em.default.HCQvpO),
                        }),
                        (0, r.jsx)(w.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            selectable: !0,
                            children: null != a.note && "" !== a.note ? a.note : ef.intl.string(em.default.MPGSHL),
                        }),
                        (0, r.jsx)(ik.C, { label: ef.intl.string(em.default.HCQvpO), size: "xs", items: c }),
                        (0, r.jsx)("div", {
                            className: iA.sq,
                            children: (0, r.jsx)(S.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: d,
                                text: ef.intl.string(em.default.EK8tKY),
                            }),
                        }),
                    ],
                });
}
var iS = n(919790),
    iE = n(971824),
    iI = n(162052),
    iT = n(165648);
function iP(e) {
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
function iM(e) {
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
        x = s.useMemo(() => (0, le.GO)(n, { turnActive: l }), [n, l]),
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
            className: lv.pj,
            "data-live": !1,
            children: (0, r.jsx)(la.A, {
                glyph: (0, r.jsx)(ah.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: ef.intl.string(em.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let v = l ? void 0 : (g ?? (h ? (x.turn?.durationMs ?? o) : void 0)),
        y = f ? ((0, le.lt)(n) ?? d ?? null) : null,
        j = null != y && y.length > 0;
    if (0 === b.steps.length && 0 === b.tasks.length && !j) return null;
    let w = b.tasks,
        k = aC(w.map((e) => e.taskId)),
        C = !p && (l || w.some((e) => "running" === e.task.status)),
        A = iP(w);
    return (0, r.jsx)(la.E.Provider, {
        value: w.length,
        children: (0, r.jsxs)("ol", {
            className: lv.pj,
            "data-live": C,
            children: [
                (0, r.jsx)(ln.A, {
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
                        a = l ?? k.get(e.taskId);
                    return null == a
                        ? null
                        : (0, r.jsx)(
                              aS,
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
                          className: lv.YO,
                          children: (0, r.jsx)(lx, { todos: y, provisional: c, agents: A, live: a, superseded: i }),
                      })
                    : null,
            ],
        }),
    });
}
function i_(e) {
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
            () => ab({ steps: n, content: l, hasProposal: null != a, hasAttachments: null != d && d.length > 0 }),
            [n, l, a, d],
        ),
        { streamed: E, lastStreamedMessage: I, showsClosingMessage: T, closingContent: P } = S,
        M = (k ? C : void 0) ?? S.attachmentsHost,
        _ = T && !k,
        R = null == d ? null : (0, r.jsx)(iS.A, { projectId: t, attachments: d }),
        L = null == R ? null : (0, r.jsx)("div", { className: lv.MT, children: R }),
        D = y
            ? (0, r.jsx)(w.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return ef.intl.string(em.default.Mv5OmK);
                          case "queued":
                              return ef.intl.string(em.default["Po/2mi"]);
                          case "restarting":
                              return ef.intl.string(em.default.Vj0woh);
                          default:
                              return ef.intl.string(em.default.gY3L8p);
                      }
                  })(j),
              })
            : null;
    return (0, r.jsxs)("div", {
        className: lv.ue,
        children: [
            E.length > 0 && !k
                ? (0, r.jsx)("ol", {
                      className: lv.dO,
                      children: E.filter((e) => "todos" !== e.type).map((e) =>
                          (0, r.jsxs)(
                              "li",
                              {
                                  className: lv.DV,
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: iT.PT,
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
            null != a
                ? (0, r.jsx)(ic, { projectId: t, proposal: a, version: i, onApprove: v })
                : _
                  ? (0, r.jsxs)("div", {
                        className: u()(lv.ky, iI.XR),
                        children: [
                            (0, r.jsx)("div", {
                                className: u()(iT.PT, lv.cW),
                                children: ap.A.parse(P, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === M ? L : null,
                            D,
                        ],
                    })
                  : null,
            null != c
                ? (0, r.jsx)("div", {
                      className: u()(lv.ky, iI.XR, { [iE.O]: null != f && "open" === h }),
                      children: (0, r.jsx)(iN, {
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
                      className: u()(lv.ky, iI.XR),
                      children: (0, r.jsx)(al, { projectId: t, request: p }),
                  })
                : null,
            "standalone" !== M && ("closing" !== M || _) ? null : R,
            null != g ? (0, r.jsx)(ig, { projectId: t }) : null,
            null != o && o.length > 0 ? (0, r.jsx)(iy, { ideas: o, pickedIdeaIds: b, onPick: x }) : null,
            null != A ? (0, r.jsx)(aI, { proposal: A, onRestore: N }) : null,
            _ ? null : D,
        ],
    });
}
var iR = n(146806),
    iL = n(477262),
    iD = n(432017),
    iO = n(475358),
    iF = n(717400),
    iz = n(663341),
    iG = n(559647),
    iU = n(775602),
    iq = n(234320),
    i$ = n(285796),
    iB = n(922329),
    iH = n(153171);
let iV = en.lN;
function iW(e, t, n, l) {
    let a = lq(e, t).length;
    !(function (e, t, n) {
        if (0 === n.length) return;
        let l = n.map((e) => {
            let { draft: t, upload: n } = e;
            return { draft: { ...t, localId: lz++ }, upload: n };
        });
        for (let { draft: n, upload: a } of (l$(e, t, [
            ...lq(e, t),
            ...l.map((e) => {
                let { draft: t } = e;
                return t;
            }),
        ]),
        l))
            a?.().then(
                (l) => {
                    "errorText" in l
                        ? lB(e, t, n.localId, { status: "error", errorText: l.errorText })
                        : lB(e, t, n.localId, { status: "ready", ref: l })
                          ? setTimeout(
                                () =>
                                    lB(e, t, n.localId, {
                                        status: "error",
                                        errorText: ef.intl.string(em.default.E7dS5n),
                                    }),
                                en.o2 - 3e5,
                            )
                          : lH(e, l.id);
                },
                (l) => {
                    (console.error("[vibegrations] attachment upload failed", l),
                        lB(e, t, n.localId, { status: "error", errorText: ef.intl.string(em.default["kUw/b1"]) }));
                },
            );
    })(
        e,
        t,
        n.map((e) => {
            let t = "" === e.type ? "application/octet-stream" : e.type,
                n = { name: e.name, contentType: t };
            if (a++ >= iV)
                return {
                    draft: {
                        ...n,
                        status: "error",
                        errorText: ef.intl.formatToPlainString(em.default.Q0aCVZ, { count: iV }),
                    },
                };
            if (!(0, en.Oq)(e.size, t)) return { draft: { ...n, status: "error", errorText: lK(t) } };
            let i = en.XB.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...n, status: "uploading", previewUrl: i }, upload: () => l(e) };
        }),
    );
}
function iK(e) {
    let { projectId: t, surface: n, onUploadFile: l } = e,
        a = lG.useState((e) => lU(e, t, n)),
        i = s.useCallback((e) => iW(t, n, e, l), [t, n, l]),
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
                null != (a = (l = lq(t, n)).find((t) => t.localId === e)) &&
                    (lV(t, a),
                    l$(
                        t,
                        n,
                        l.filter((t) => t.localId !== e),
                    ));
            },
            [t, n],
        ),
        u = s.useCallback(() => lY(t, n), [t, n]);
    return {
        drafts: a,
        addFiles: i,
        pasteFiles: r,
        removeDraft: o,
        settled: a.every((e) => "ready" === e.status),
        takeRefs: u,
    };
}
function iX(e) {
    let { draft: t, onRemove: n } = e;
    return (0, r.jsxs)(iB.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, r.jsx)(w.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, r.jsx)(N.y, { type: N.t.SPINNING_CIRCLE_SIMPLE, className: iH.Rk }) : null,
            (0, r.jsx)("button", {
                type: "button",
                className: iH.o1,
                onClick: () => n(t.localId),
                "aria-label": ef.intl.string(em.default.Slam9g),
                children: (0, r.jsx)(i$.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var iY = n(497437);
let iJ = [
        {
            id: "add-images-videos",
            label: em.default["51+9lc"],
            icon: iL.s,
            accept: "image/*,video/*,.png,.jpg,.jpeg,.gif,.webp,.avif,.heic,.heif,.svg,.bmp,.mp4,.m4v,.mov,.webm,.mkv,.avi",
        },
        {
            id: "add-sounds",
            label: em.default["10ljr2"],
            icon: iD.T,
            accept: "audio/*,.mp3,.wav,.ogg,.oga,.opus,.m4a,.aac,.flac,.weba,.webm,.aif,.aiff,.mid,.midi",
        },
        { id: "add-other-files", label: em.default.aotDee, icon: er.H, accept: "" },
    ],
    iQ = "text-md/normal",
    iZ = null;
function i0(e) {
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
                frontFrom: 1e3 * (0, iR._R)(m),
                frontTo: 1e3 * (0, iR._R)(f),
                backFrom: 1e3 * (0, iR.T)(m),
                backTo: 1e3 * (0, iR.T)(f),
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
        E = (0, f.bG)([iU.Ay], () => iU.Ay.useReducedMotion),
        I = t === ef.intl.string(em.default.Zc7gML),
        T = a === t && I;
    function P(e, t, n) {
        let l = null != n;
        return (0, r.jsx)("span", {
            ref: n,
            className: u()(iY.VT, { [iY.qk]: l }),
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
            children: (0, r.jsx)(iO.e, { shortcut: "tab", className: iY.xT, keyClassName: e }),
        });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eq.o, {
                text: t,
                variant: iQ,
                delay: null,
                duration: 1e3,
                trailingWidth: p,
                className: u()(iY.xM, { [iY.s2]: l }),
                onStart: A,
                onComplete: () => i(t),
            }),
            P(iY.IS, n || (!E && "out" === j), o),
            (0, r.jsx)("span", {
                ref: d,
                className: iY.QI,
                "aria-hidden": !0,
                children: (0, r.jsx)(w.E, { variant: iQ, tag: "span", children: t }),
            }),
            T
                ? (0, r.jsxs)("span", {
                      className: iY.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, r.jsx)(w.E, { variant: iQ, tag: "span", className: iY.xM, children: t }),
                          P(iY.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
function i2(e) {
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
        [y, j] = s.useState(() => am.getDraft(t)),
        w = s.useCallback(
            (e) => {
                ((0, eR.I$)(t, e), j(e));
            },
            [t],
        ),
        k = "" !== y.trim();
    s.useEffect(() => x?.(k), [k, x]);
    let [N, S] = s.useState(t);
    N !== t && (S(t), j(am.getDraft(t)));
    let E = (0, f.bG)([iU.Ay], () => iU.Ay.isSubmitButtonEnabled),
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
        } = iK({ projectId: t, surface: "chat", onUploadFile: d }),
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
                null == iZ && (iZ = document.createElement("canvas").getContext("2d"));
                let r = iZ;
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
    (0, iq.Vo)({
        event: ew.jej.GLOBAL_CLIPBOARD_PASTE,
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
            let t = i9(e);
            null != t && Z(t);
        }
        et(!0);
        let t = setTimeout(() => et(!1), i1);
        return () => clearTimeout(t);
    }, [y]);
    let en = s.useMemo(() => ({ "--custom-glow-x": `${Q}px` }), [Q]),
        er = ee ? ` ${iY.EB}` : "",
        es = i
            ? ef.intl.string(em.default.qqlUiW)
            : l
              ? ef.intl.string(em.default.mPB3eo)
              : n
                ? g
                    ? ef.intl.string(em.default.knUjL3)
                    : p
                      ? ef.intl.string(em.default.IevBEw)
                      : ef.intl.string(a ? em.default["0BJa/0"] : em.default.TEeU7z)
                : ef.intl.string(em.default.zZ9NgM),
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
        ec = s.useId(),
        eh = null != H,
        ep = G ?? H ?? es,
        eg = "" === y && "" !== ep;
    return (0, r.jsxs)("form", {
        onSubmit: $,
        className: iY.DA,
        children: [
            M.length > 0
                ? (0, r.jsx)("div", {
                      className: iY.lN,
                      children: M.map((e) => (0, r.jsx)(iX, { draft: e, onRemove: L }, e.localId)),
                  })
                : null,
            (0, r.jsx)("span", { className: `${iY.wg} ${iY.LP}${er}`, style: en, "aria-hidden": !0 }),
            (0, r.jsx)("span", { className: `${iY.wg} ${iY.L3}${er}`, style: en, "aria-hidden": !0 }),
            (0, r.jsxs)("div", {
                className: iY.VA,
                ref: X,
                children: [
                    (0, r.jsx)("input", {
                        ref: P,
                        type: "file",
                        multiple: !0,
                        onChange: K,
                        className: iY.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    (0, r.jsx)(el.Y, {
                        targetElementRef: Y,
                        position: "top",
                        align: "left",
                        animation: el.Y.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, r.jsx)(ea.W, {
                                "data-menu-migrated": !0,
                                navId: "conjure-composer-attach",
                                "aria-label": ef.intl.string(ef.t.d56gCa),
                                onClose: t,
                                onSelect: t,
                                children: (0, r.jsxs)(ei.rX, {
                                    children: [
                                        iJ.map((e) =>
                                            (0, r.jsx)(
                                                ei.Dr,
                                                {
                                                    id: e.id,
                                                    label: ef.intl.string(e.label),
                                                    iconLeft: e.icon,
                                                    leadingAccessory: { type: "icon", icon: e.icon },
                                                    action: () => J(e.accept),
                                                },
                                                e.id,
                                            ),
                                        ),
                                        null != m
                                            ? (0, r.jsx)(ei.Dr, {
                                                  id: "import-project",
                                                  label: ef.intl.string(em.default["p/k5i7"]),
                                                  iconLeft: iF.q,
                                                  leadingAccessory: { type: "icon", icon: iF.q },
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
                                className: `${iY.Y0} ${iY.nu}`,
                                disabled: !n,
                                "aria-label": ef.intl.string(ef.t.d56gCa),
                                "aria-haspopup": "menu",
                                "aria-expanded": l,
                                children: (0, r.jsx)(iz.PlusLargeIcon, {
                                    size: "refresh_sm",
                                    color: "currentColor",
                                    className: iY.Qu,
                                }),
                            });
                        },
                    }),
                    eg
                        ? (0, r.jsx)("div", {
                              ref: ed,
                              className: iY.ar,
                              "aria-hidden": "true",
                              children: (0, r.jsx)(i0, { text: ep, offering: eh && null == G, typed: null != G }),
                          })
                        : null,
                    (0, r.jsx)(lC.y, {
                        value: y,
                        onChange: (e) => w(e.currentTarget.value),
                        onKeyDown: V,
                        onPaste: W,
                        placeholder: eg ? "" : es,
                        disabled: !n,
                        "aria-label": ef.intl.string(em.default.ldNl9x),
                        "aria-describedby": eg ? ec : void 0,
                        rows: 1,
                        className: iY.jp,
                    }),
                    eg ? (0, r.jsx)(A.A, { id: ec, children: es }) : null,
                    (0, r.jsx)("div", {
                        className: iY.Sz,
                        children:
                            a && null != u
                                ? (0, r.jsx)(C.m, {
                                      text: ef.intl.string(em.default.wiguT0),
                                      ariaHidden: !0,
                                      children: (0, r.jsx)("button", {
                                          type: "button",
                                          className: `${iY.Y0} ${iY.$E}`,
                                          disabled: I,
                                          onClick: B,
                                          "aria-label": ef.intl.string(em.default.wiguT0),
                                          children: (0, r.jsx)(ah.w, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : b?.tierSettings != null && null != v
                                  ? (0, r.jsx)(tj, {
                                        settings: b.tierSettings,
                                        tiers: b.tiers,
                                        choices: b.choices,
                                        disabled: !n,
                                        onChange: v,
                                        className: `${iY.Y0} ${iY.$E}`,
                                        icon: (0, r.jsx)(tf.R, {
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
                              className: iY.fF,
                              children: [
                                  (0, r.jsx)("div", { className: iY.MT }),
                                  (0, r.jsx)("button", {
                                      type: "submit",
                                      className: iY.rt,
                                      disabled: !z,
                                      "aria-label": ef.intl.string(em.default.rxW2cl),
                                      children: (0, r.jsx)(iG.SendMessageIcon, {
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
let i1 = 1500,
    i6 = [
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
function i9(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = i9.mirror;
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
                (i9.mirror = t),
                t
            );
        })(),
        n = window.getComputedStyle(e);
    for (let e of i6) t.style.setProperty(e, n.getPropertyValue(e));
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let l = document.createElement("span");
    ((l.textContent = "\u200B"), t.appendChild(l));
    let a = l.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + a - e.scrollLeft);
}
i9.mirror = null;
var i3 = n(155899),
    i5 = n(148087);
let i4 = [6e4, 18e4, 6e5],
    i7 = [
        {
            key: "outdated",
            priority: 2,
            idleDelayMs: 6e4,
            backoffDelaysMs: i4,
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
                    (0, tJ.BL)(t) &&
                    !(null != n.publishCta && ih(l))
                );
            },
        },
    ];
function i8(e, t) {
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
let re = new Map();
function rt(e) {
    let { projectId: t, notice: n } = e;
    return "outdated" === n ? (0, r.jsx)(rl, { projectId: t }) : (0, r.jsx)(rn, { projectId: t, notice: n });
}
function rn(e) {
    let { projectId: t, notice: n } = e,
        l = s.useContext(n$),
        a = (0, f.bG)([eL.Ay, nR.A], () => {
            let e = eL.Ay.getProject(t);
            return null == e ? "" : (nR.A.getApplication(e.application_id)?.name ?? e.name);
        }),
        i = s.useCallback(() => {
            null != l &&
                (function (e, t) {
                    let n = nH(e, t.guildId);
                    if (null == n) return;
                    let l = nz({
                        ...n.input,
                        status: null == n.input.status ? null : { ...n.input.status, state: "up_to_date" },
                    })?.destination;
                    null != l && nV(n, l, t.platform).catch(() => {});
                })(t, l);
        }, [l, t]);
    return (0, r.jsx)(w.E, {
        variant: "text-md/normal",
        color: "text-default",
        children: ef.intl.format(
            (function (e) {
                if (!e.update) return em.default.MOrR29;
                switch (e.surface) {
                    case "bot":
                        return em.default.zfpeIL;
                    case "widget":
                        return em.default.DxCfTh;
                    case "automod":
                        return em.default["8ytGC3"];
                    case "activity":
                    case null:
                        return em.default.WSmpBT;
                }
            })(n),
            { name: a, onOpen: i },
        ),
    });
}
function rl(e) {
    let { projectId: t } = e,
        n = n0(t);
    return null == n
        ? null
        : (0, r.jsx)(w.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: ef.intl.format(em.default.X8tdbS, {
                  action: n.label,
                  onUpdate: () => {
                      (re.get(t)?.forEach((e) => e()), n.run("outdated_notice"));
                  },
              }),
          });
}
var ra = n(248798);
function ri(e, t) {
    e.style.height = `${t.offsetHeight}px`;
}
function rr(e) {
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
            ri(e, t);
            let n = new ResizeObserver(() => ri(e, t));
            return (n.observe(t), () => n.disconnect());
        }, [a, i]),
        (0, r.jsx)("div", {
            ref: o,
            className: u()(ra.NI, { [ra.Jg]: null == a }),
            "aria-live": "polite",
            children: (0, r.jsx)("div", {
                className: ra.t$,
                children: l.map((e) =>
                    (0, r.jsx)(
                        "div",
                        {
                            ref: e.leaving ? void 0 : d,
                            "aria-hidden": e.leaving || void 0,
                            className: u()(ra.qd, e.leaving ? ra.cu : ra.We),
                            children: n(e.key),
                        },
                        e.key,
                    ),
                ),
            }),
        })
    );
}
var rs = n(320095),
    ro = n(963852),
    ru = n(521981),
    rd = n(763754),
    rc = n(491182),
    rm = n(438729),
    rf = n(622868),
    rh = n(448368),
    rp = n(837528),
    rg = n(439762),
    rx = n(715628),
    rb = n(752636),
    rv = n(9842),
    ry = n(589022),
    rj = n(95701),
    rw = n(994500),
    rk = n(967198),
    rC = n(7584);
let rA = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function rN(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function rS(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function rE(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let a = rS(e, t),
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
    if (rN(a) && rN(i)) {
        let n = 0,
            l = t;
        for (; n < 32 && rN(rS(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function rI(e, t) {
    let { streaming: n } = t,
        l = (0, f.bG)([iU.Ay], () => iU.Ay.useReducedMotion),
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
                      for (; i > 0 && rE(t, i);) i--;
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
                                    for (; l > t + 1 && n - l < 12 && rA.has(e.charAt(l - 1));) l--;
                                    return rA.has(e.charAt(l - 1)) ? n : l;
                                })(t, a, Math.min(t.length, a + r));
                                let o = s;
                                for (; o < t.length && o - s < 32 && rE(t, o);) o++;
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
var rT = n(565645),
    rP = n(981879);
function rM(e) {
    let { emoji: t, label: n } = e;
    return (0, r.jsx)("div", {
        className: rP.H,
        children: (0, r.jsx)(rT.A, { emojiName: t, alt: n, size: "reaction" }),
    });
}
var r_ = n(194085),
    rR = n(734495),
    rL = n(180227);
function rD(e) {
    let { message: t, onClose: n } = e,
        l = (0, rR.A)(t);
    return (0, r.jsx)(ea.W, {
        navId: "conjure-message-actions",
        "aria-label": ef.intl.string(ef.t.Lv7LxN),
        onClose: n,
        onSelect: n,
        children: (0, r.jsx)(ei.rX, { children: l }),
    });
}
function rO(e) {
    let { groupStart: t, renderMenu: n } = e,
        [l, a] = s.useState(!1),
        i = s.useRef(null),
        o = s.useCallback(() => a((e) => !e), []),
        d = s.useCallback(() => a(!1), []);
    return (0, r.jsx)("div", {
        className: u()(rL.QE, { [rL.Rn]: t, [rL.vg]: l }),
        children: (0, r.jsx)(r_.Ay, {
            children: (0, r.jsx)(el.Y, {
                targetElementRef: i,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return n(t);
                },
                shouldShow: l,
                onRequestClose: d,
                position: "left",
                align: "top",
                animation: el.Y.Animation.NONE,
                children: (e, t) => {
                    let { onClick: n, ...l } = e,
                        { isShown: a } = t;
                    return (0, r.jsx)(r_.qv, {
                        ref: i,
                        label: ef.intl.string(ef.t["UKOtz+"]),
                        icon: nt.MoreHorizontalIcon,
                        selected: a,
                        onClick: o,
                        ...l,
                    });
                },
            }),
        }),
    });
}
function rF(e) {
    let { message: t, groupStart: n } = e,
        l = s.useCallback((e) => (0, r.jsx)(rD, { message: t, onClose: e }), [t]);
    return null == (0, rR.A)(t) ? null : (0, r.jsx)(rO, { groupStart: n, renderMenu: l });
}
let rz = (0, rj.createChannelRecord)({ id: "conjure-builder", type: ew.rbe.DM }),
    rG = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function rU(e, t) {
    return null == e ? e : (0, r.jsx)("div", { className: u()(rL.Yq, { [rL.x1]: t }), children: e });
}
function rq(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function r$(e, t, n) {
    let { content: l } = (0, rg.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        a = s.useMemo(() => ({ message: e, channel: rz, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, r.jsx)(rm.Ay, { className: n, message: e, content: l, compact: !1 })
          : (0, rx.A)(a, l);
}
function rB(e) {
    let [t, n] = s.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = s.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        a = s.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        i = (0, rp.m)(e, rz, t.usernameProfile, l),
        o = (0, rp.Jo)(t.avatarProfile, l),
        u = (0, f.bG)([rk.A], () => rk.A.getGuildId()),
        d = (0, f.bG)([tX.default], () => tX.default.getCurrentUser()),
        c = s.useCallback(
            (t) => {
                let n = tX.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, r.jsx)(ry.A, { ...t, user: n, currentUser: d, guildId: u ?? void 0 });
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
function rH(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: a } = e,
        i = s.useMemo(() => {
            let e = "" !== n.content ? (0, ru.Ay)(n, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == l
                ? e
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)("span", {
                              className: rL.GV,
                              children: [
                                  (0, r.jsx)(E.x, {
                                      className: rL.Rj,
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
            [rw.A],
            () => ({
                isReplyAuthorBlocked: rw.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: rw.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        d = (0, rd.X4)(n),
        c = (0, rd.X4)(t),
        m = rB(n);
    return (0, r.jsx)(rh.A, {
        repliedAuthor: d,
        baseAuthor: c,
        baseMessage: t,
        channel: rz,
        referencedMessage: { state: rv.a.LOADED, message: n },
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
function rV(e) {
    let { message: t, author: n } = e,
        l = rB(t);
    return (0, r.jsx)(rf.Ay, {
        message: t,
        channel: rz,
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
function rW(e) {
    let { content: t, createdAt: n, userId: l, accessories: a, agentReaction: i, groupStart: o } = e;
    s.useEffect(() => t1(l), [l]);
    let u = (0, f.bG)(
            [tX.default],
            () => t2(l, null != l ? tX.default.getUser(l) : null, tX.default.getCurrentUser()),
            [l],
        ),
        d = s.useMemo(() => (0, rd.FT)(u, null), [u]),
        c = s.useMemo(() => e4(t), [t]),
        m = c?.body ?? t,
        h = s.useMemo(() => {
            if (null == u) return null;
            let e = (0, ro.Ay)({ channelId: rz.id, content: m, author: u });
            return (0, rs.rh)({ ...e, timestamp: rq(n, e.timestamp), state: ew.cmJ.SENT });
        }, [m, u, n]),
        p = (function (e) {
            if (null == e || "" === e) return null;
            let t = rC.Ay.convertSurrogateToName(e, !1);
            return "" === t ? null : ef.intl.formatToPlainString(em.default.lxXLho, { emojiName: t });
        })(i);
    return null == h
        ? null
        : (0, r.jsx)(rK, {
              message: h,
              author: d,
              content: m,
              selected: c?.label,
              accessories:
                  null != i && null != p
                      ? (0, r.jsxs)(r.Fragment, { children: [a, (0, r.jsx)(rM, { emoji: i, label: p })] })
                      : a,
              groupStart: o,
          });
}
function rK(e) {
    let { message: t, author: n, content: l, selected: a, accessories: i, groupStart: s = !0 } = e,
        o = r$(t, l);
    return (0, r.jsx)(rc.A, {
        className: rL.yE,
        author: n,
        childrenHeader: s ? (0, r.jsx)(rV, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == a
                ? o
                : (0, r.jsxs)("div", {
                      className: rL.zq,
                      children: [
                          (0, r.jsxs)("span", {
                              className: rL.GV,
                              children: [
                                  (0, r.jsx)(E.x, {
                                      className: rL.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  a,
                              ],
                          }),
                          (0, r.jsx)("span", { className: rL.WO, children: o }),
                      ],
                  }),
        childrenAccessories: rU(i, "" !== l),
        childrenButtons: (0, r.jsx)(rF, { message: t, groupStart: s }),
    });
}
function rX(e) {
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
        { text: c, revealing: m } = rI(t, { streaming: u }),
        h = s.useMemo(() => (0, rd.FT)(null, null), []),
        p = s.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        g = a?.userId,
        x = (0, f.bG)(
            [tX.default],
            () => t2(g, null != g ? tX.default.getUser(g) : null, tX.default.getCurrentUser()),
            [g],
        ),
        b = s.useMemo(() => (null == a ? null : e4(a.content)), [a]),
        v = s.useMemo(() => {
            if (null == a || null == x) return null;
            let e = (0, ro.Ay)({ channelId: rz.id, content: b?.body ?? a.content, author: x });
            return (0, rs.rh)({ ...e, id: a.id, timestamp: rq(a.createdAt, e.timestamp), state: ew.cmJ.SENT });
        }, [a, b, x]),
        y = s.useMemo(() => (null == a ? void 0 : { channel_id: rz.id, message_id: a.id }), [a]),
        j = s.useMemo(() => {
            let e = (0, ro.Ay)({ channelId: rz.id, content: c, author: rG });
            return (0, rs.rh)({
                ...e,
                timestamp: rq(n, e.timestamp),
                state: ew.cmJ.SENT,
                ...(null != y ? { type: ew.lAJ.REPLY, message_reference: y } : {}),
            });
        }, [c, n, y]),
        w = r$(j, c, rL.OS);
    return (0, r.jsxs)("div", {
        className: rL.$4,
        "data-replying": null != v ? "true" : void 0,
        "data-conjure-revealing": m ? "true" : void 0,
        children: [
            (0, r.jsx)(rc.A, {
                className: rL.yE,
                author: p,
                childrenRepliedMessage:
                    null == v
                        ? null
                        : (0, r.jsx)(rH, { baseMessage: j, referenced: v, selected: b?.label, onJumpToReplied: i }),
                childrenHeader: (0, rb.A)({ message: j, channel: rz, author: p, guildId: void 0, isGroupStart: o }),
                childrenMessageContent: w,
                childrenAccessories: rU(l, "" !== c),
                disableInteraction: !0,
            }),
            d,
            o
                ? (0, r.jsx)("span", {
                      className: rL.st,
                      "aria-hidden": "true",
                      children: (0, r.jsx)(aM.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
let rY = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i;
var rJ = n(744898);
function rQ(e) {
    let { onSelect: t, onClose: n = G.Z_, onRestoreVersion: l } = e;
    return (0, r.jsx)(ea.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": ef.intl.string(ef.t.ogxXGq),
        onSelect: t,
        children: (0, r.jsx)(ei.rX, {
            children: (0, r.jsx)(ei.Dr, {
                id: "restore-version",
                label: ef.intl.string(em.default.H8Jfhu),
                icon: rJ.e,
                action: l,
            }),
        }),
    });
}
var rZ = n(986109);
function r0(e, t) {
    (0, i3.F)({ onConfirm: () => t(e) });
}
function r2(e) {
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
        j = (0, f.bG)([eL.Ay], () => eL.Ay.getPublishStatus(t)?.state ?? null),
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
                                        let t = (0, le.lt)(e.steps);
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
                    let e = !(0, tJ.BL)(t),
                        a = ab({
                            steps: t.steps,
                            content: t.content,
                            hasProposal: null != t.proposal,
                            hasAttachments: (t.attachments?.length ?? 0) > 0,
                        }),
                        i = a.lastStreamedMessage?.key,
                        r = (0, le.C6)(t.steps, { turnActive: e }),
                        { lastWork: s, open: o } = (0, le.CT)(r, { turnActive: e }),
                        u = r.at(-1)?.index,
                        d = !1;
                    for (let c of r) {
                        if (null != c.prose && rY.test(c.prose.content)) d = !0;
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
                                    turnActive: lt(t),
                                    checklistSuperseded: c.hasTodos && n.has(t.render_id),
                                },
                                { actor: null, boundary: void 0 },
                            );
                    }
                    let c = rY.test(t.content ?? "");
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
            let a = n0(e),
                i = (0, i5.A)(),
                r = (function (e) {
                    for (let t = e.length - 1; t >= 0; t--) {
                        let n = e[t];
                        if ("publish_notice" !== n.kind) {
                            if ("user" === n.role) return null;
                            if ((0, tJ.BL)(n)) return n;
                            if (!(0, tJ.B0)(e, t)) break;
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
                [d, c] = s.useState(() => i8(u, Date.now())),
                m = (function (e, t, n) {
                    if (e.projectId !== t.projectId) return i8(t, n());
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
                            let t = Math.min(e.outdatedBackoff + 1, i4.length - 1);
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
                    i7.map((e) => ({
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
                    let n = re.get(e) ?? new Set();
                    return (
                        re.set(e, n),
                        n.add(t),
                        () => {
                            (n.delete(t), 0 === n.size && re.delete(e));
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
                        return (0, r.jsx)(rX, {
                            groupStart: !1,
                            content: "",
                            accessories: (0, r.jsx)(rt, { projectId: t, notice: "outdated" }),
                        });
                    case "ideas":
                        return (0, r.jsx)("div", {
                            className: rZ.u$,
                            children: (0, r.jsx)(rX, {
                                content: ef.intl.string(em.default.s96AWB),
                                accessories: (0, r.jsx)(ij, { onAsk: o }),
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
                            if (!(0, tJ.BL)(n) || "plan_implemented" === n.kind) return null;
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
                : (0, tJ.BL)(C)
                  ? C.awaitingUser
                  : null) ?? void 0,
        P = (0, f.bG)([es.Ay], () => es.Ay.getSettings(t)?.secrets, [t]),
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
                                        t === ef.intl.string(em.default.UGqnoV) ||
                                        t === ef.intl.string(em.default.sMQt5O)
                                    );
                                })(s);
                            continue;
                        }
                        let o = s.secretRequest?.fields ?? [];
                        if (0 === o.length || !(0, tJ.BL)(s)) continue;
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
                className: u()(rZ.x7, rZ.jH),
                "aria-busy": !0,
                children: (0, r.jsx)("li", { className: rZ.Ub, children: (0, r.jsx)(N.y, {}) }),
            });
        let e = "unavailable" === l ? em.default.Td4Sf4 : em.default.V1QiNz;
        return (0, r.jsx)("ol", {
            ref: a,
            className: rZ.x7,
            children: (0, r.jsx)(r1, { role: "assistant", children: (0, r.jsx)(rX, { content: ef.intl.string(e) }) }),
        });
    }
    return (0, r.jsxs)("ol", {
        ref: g,
        className: rZ.x7,
        children: [
            k.map((e) => {
                let l = e.message;
                switch (e.kind) {
                    case "user": {
                        let n = null != l.attachments && l.attachments.length > 0 ? l.attachments : null;
                        return (0, r.jsx)(
                            r1,
                            {
                                role: "user",
                                anchorId: l.id,
                                highlighted: x === l.id,
                                continuation: !e.groupStart,
                                children: (0, r.jsx)(rW, {
                                    groupStart: e.groupStart,
                                    content: l.content,
                                    createdAt: l.created_at,
                                    userId: l.user_id,
                                    agentReaction: l.agentReaction,
                                    accessories:
                                        null != n ? (0, r.jsx)(iS.A, { projectId: t, attachments: n }) : void 0,
                                }),
                            },
                            e.key,
                        );
                    }
                    case "prose":
                        return (0, r.jsx)(
                            r1,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                children: (0, r.jsx)(rX, {
                                    groupStart: e.groupStart,
                                    content: e.content,
                                    streaming: e.streaming,
                                    createdAt: l.created_at,
                                    accessories:
                                        e.hostsAttachments && null != l.attachments
                                            ? (0, r.jsx)(iS.A, { projectId: t, attachments: l.attachments })
                                            : void 0,
                                }),
                            },
                            e.key,
                        );
                    case "activity":
                        return (0, r.jsx)(
                            r1,
                            {
                                role: "assistant",
                                children: (0, r.jsx)(iM, {
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
                            r1,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                children: (0, r.jsx)(rX, {
                                    groupStart: e.groupStart,
                                    content: null == l.publishNotice ? l.content : "",
                                    createdAt: l.created_at,
                                    accessories:
                                        null == l.publishNotice
                                            ? void 0
                                            : (0, r.jsx)(rt, { projectId: t, notice: l.publishNotice }),
                                }),
                            },
                            e.key,
                        );
                    case "interrupted":
                        return (0, r.jsx)(
                            r1,
                            {
                                role: "assistant",
                                children: (0, r.jsx)(iM, { projectId: t, interrupted: !0, steps: l.steps }),
                            },
                            e.key,
                        );
                    case "legacyTodos":
                        return (0, r.jsx)(
                            r1,
                            {
                                role: "assistant",
                                children: (0, r.jsx)(iM, {
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
                            s = null != a && null != h ? () => r0(a, h) : void 0,
                            o = l.restoreProposal;
                        return (0, r.jsx)(
                            r1,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                onContextMenu:
                                    null != s
                                        ? (e) => {
                                              (0, G.jA)(e, (e) => (0, r.jsx)(rQ, { ...e, onRestoreVersion: s }));
                                          }
                                        : void 0,
                                children: (0, r.jsx)(rX, {
                                    groupStart: e.groupStart,
                                    buttons:
                                        null != s
                                            ? (0, r.jsx)(rO, {
                                                  groupStart: e.groupStart,
                                                  renderMenu: (e) =>
                                                      (0, r.jsx)(rQ, { onClose: e, onSelect: e, onRestoreVersion: s }),
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
                                    accessories: (0, r.jsx)(i_, {
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
                                                      r0(
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
                ? (0, r.jsx)(r1, {
                      role: "assistant",
                      continuation: !0,
                      children: (0, r.jsx)(rX, {
                          groupStart: !1,
                          content: "",
                          accessories: (0, r.jsx)(w.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: ef.intl.string(em.default.YR8A2v),
                          }),
                      }),
                  })
                : null,
            (0, r.jsx)("li", {
                role: "none",
                className: rZ.q3,
                children: (0, r.jsx)(rr, { reminder: A, renderReminder: S }),
            }),
        ],
    });
}
function r1(e) {
    let { role: t, children: n, anchorId: l, highlighted: a = !1, continuation: i = !1, onContextMenu: s } = e;
    return (0, r.jsx)("li", {
        onContextMenu: s,
        "data-role": t,
        "data-conjure-message": l,
        className: u()(rZ.xk, { [rZ.Qo]: a, [rZ.q3]: i }),
        children: n,
    });
}
let r6 = [em.default["AX+5lk"], em.default.VAU6A7, em.default["1emysd"], em.default.EXHX3L, em.default.ChslmX];
function r9(e) {
    return r6.some((t) => ef.intl.string(t) === e);
}
function r3(e) {
    switch (e) {
        case "connecting":
            return ef.intl.string(em.default["ECl+Dx"]);
        case "closed":
            return ef.intl.string(em.default.mQZSp1);
        case "failed":
            return ef.intl.string(em.default.xzJSZ6);
    }
}
var r5 = n(823376),
    r4 = n(187447);
function r7(e) {
    let { activity: t, id: n } = e,
        { text: l, revealing: a } = rI(t?.text ?? "", { streaming: null != t && "end" !== t.phase }),
        i = s.useRef(null);
    return (
        s.useLayoutEffect(() => {
            i.current?.scrollToBottom();
        }, [l]),
        (0, r.jsx)("div", {
            id: n,
            role: "tooltip",
            className: r4.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, r.jsx)(n7.Ch, {
                ref: i,
                className: r4.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, r.jsx)("div", {
                    className: u()(iT.PT, r4.bb),
                    "data-conjure-revealing": a ? "true" : void 0,
                    children: ap.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var r8 = n(53659);
function se(e) {
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
                ? em.default["1jqaAc"]
                : l
                  ? em.default.M4KI5F
                  : a
                    ? r6[0]
                    : n
                      ? em.default.xnCAaP
                      : r
                        ? em.default.izrt52
                        : em.default.L9EDub;
        })({ activity: t, compacting: n, restoring: l, recalling: a, controlling: i }),
        g = ef.intl.string(p),
        x = p === r6["0"],
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
        ((C.current = x), !x && r9(w.current) && v(y.current));
    }, [x]),
        s.useEffect(() => {
            let e = 0,
                t = 0;
            function n() {
                if (C.current) {
                    var e;
                    ((A.current = r9(w.current) ? A.current + 1 : 0),
                        v(((e = A.current), ef.intl.string(r6[e % r6.length]))));
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
    return (0, r.jsx)(el.Y, {
        targetElementRef: c,
        position: "top",
        align: "left",
        shouldShow: E,
        onRequestClose: T,
        renderPopout: () => (0, r.jsx)(r7, { id: m, activity: t }),
        children: () =>
            (0, r.jsxs)(k.D, {
                innerRef: c,
                className: u()(r8.hF, N && r8.Xd),
                "aria-label": ef.intl.string(l ? em.default.qqlUiW : x ? r6["0"] : em.default["Uuj/gh"]),
                "aria-expanded": E,
                "aria-describedby": E ? m : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": ef.intl.string(p),
                onClick: I,
                children: [
                    (0, r.jsx)("span", {
                        className: r8.bl,
                        children: (0, r.jsx)(r5.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, r.jsx)("span", {
                        className: r8.xu,
                        "aria-hidden": !!i || !!x || void 0,
                        children: (0, r.jsx)(eq.o, {
                            ref: j,
                            text: b,
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            duration: 1e3,
                            delay: null,
                            className: r8.yE,
                        }),
                    }),
                ],
            }),
    });
}
let st = { second: 1e3, minute: 6e4 };
function sn(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = s.useState(() => Date.now());
    return (
        s.useEffect(() => {
            let n;
            if (null == e) return;
            let a = st[t];
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
var sl = n(719374);
function sa(e) {
    let { startedAt: t } = e,
        n = sn(t);
    return (0, r.jsx)(w.E, {
        tag: "span",
        variant: "text-xs/medium",
        color: "text-muted",
        "aria-hidden": !0,
        className: sl.$,
        "data-conjure-turn-timer": !0,
        children: (0, ag.C7)(n),
    });
}
function si(e) {
    let { startedAt: t } = e,
        n = sn(t, "minute");
    return (0, r.jsx)(A.A, { role: "timer", children: (0, ag.Us)(n) });
}
var sr = n(436804);
function ss(e) {
    return e.toLocaleString();
}
function so(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, r.jsxs)("div", {
        className: sr.Q$,
        children: [
            (0, r.jsxs)("div", {
                className: sr.mf,
                children: [
                    (0, r.jsx)(w.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, r.jsxs)(w.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [ss((0, en.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, r.jsxs)(w.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    ss(n.input_tokens),
                    " in \xb7 ",
                    ss(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${ss(n.cache_creation_input_tokens)} cache write \xb7 ${ss(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function su(e) {
    let { project: t } = e,
        n = (0, en.wU)(t.compaction),
        l = (0, en.wU)(t.classifier),
        a = (0, en.wV)(t.orchestrator, t.codegen),
        i = (0, en.wV)(a, n);
    return (0, r.jsxs)("div", {
        className: sr.si,
        role: "dialog",
        "aria-label": ef.intl.string(em.default.p5EGzq),
        children: [
            (0, r.jsx)("div", {
                className: sr.Q$,
                children: (0, r.jsxs)("div", {
                    className: sr.mf,
                    children: [
                        (0, r.jsxs)(w.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [ss((0, en.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, r.jsxs)(w.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(so, { label: ef.intl.string(em.default["9Sj3SX"]), usage: a }),
            (0, r.jsx)(so, { label: ef.intl.string(em.default.ANCEo3), usage: n }),
            (0, r.jsx)(so, { label: ef.intl.string(em.default.ugL6D4), usage: l, cached: !1 }),
            (0, r.jsxs)("div", {
                className: sr.mf,
                children: [
                    (0, r.jsx)(w.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: ef.intl.string(em.default["8OUg09"]),
                    }),
                    (0, r.jsx)(w.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, en.sj)(i) ? "\u2014" : `${Math.round(100 * (0, en.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function sd(e) {
    let { project: t } = e,
        n = s.useRef(null);
    return (0, r.jsx)(el.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, r.jsx)(su, { project: t }),
        children: (e) =>
            (0, r.jsx)(k.D, {
                innerRef: n,
                className: sr.Y$,
                "aria-label": ef.intl.string(em.default.Z96gxQ),
                ...e,
                children: (0, r.jsx)(aT.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var sc = n(997421);
function sm(e) {
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
        f = (0, tk.Zv)(n),
        [h, p] = s.useState(null),
        g = s.useCallback((e) => p(r9(e) ? null : e), []),
        x =
            null == c
                ? null
                : ((t = (0, en.a7)(c.cost_usd)),
                  {
                      text: ef.intl.formatToPlainString(em.default.gMuw5d, { runes: t.toLocaleString() }),
                      aria: ef.intl.formatToPlainString(em.default.Z4LvGa, { runes: t, turns: c.turns }),
                  }),
        b = l && null != a;
    return (0, r.jsxs)("div", {
        className: sc.jf,
        children: [
            (0, r.jsxs)("div", {
                className: sc.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    l || i || o || f
                        ? (0, r.jsx)(se, {
                              activity: u,
                              compacting: d,
                              restoring: i,
                              recalling: o,
                              controlling: f,
                              spoken: h,
                              onSpokenChange: g,
                          })
                        : null,
                    b ? (0, r.jsx)(sa, { startedAt: a }) : null,
                ],
            }),
            b ? (0, r.jsx)(si, { startedAt: a }) : null,
            null == c || null == x
                ? null
                : (0, r.jsxs)("span", {
                      className: sc.BP,
                      children: [
                          (0, r.jsx)(w.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": x.aria,
                              children: x.text,
                          }),
                          (0, r.jsx)(sd, { project: c }),
                      ],
                  }),
            "open" === m
                ? null
                : (0, r.jsx)(w.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === m ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": ef.intl.formatToPlainString(em.default["tCo+ZM"], { status: r3(m) }),
                      "data-conjure-conn": !0,
                      "data-state": m,
                      className: sc.XF,
                      children: r3(m),
                  }),
        ],
    });
}
var sf = n(698638),
    sh = n(608711);
let sp = [ef.intl.string(em.default["9w+Chc"]), ef.intl.string(em.default.WAvmdq), ef.intl.string(em.default.SKsrzl)];
function sg(e) {
    var t;
    let { projectId: n, restoreState: l, onRestoreVersion: a, onImportProject: i } = e,
        o = (0, f.bG)([tJ.Ay], () => tJ.Ay.getMessages(n), [n]),
        u = (0, f.bG)([es.Ay], () => es.Ay.getConnState(n), [n]),
        d = (0, f.bG)([es.Ay], () => es.Ay.isChatStopped(n), [n]),
        c = (0, f.bG)([tJ.Ay], () => tJ.Ay.getProjectUsage(n), [n]),
        m = (0, f.bG)([tJ.Ay], () => tJ.Ay.getThinkingActivity(n), [n]),
        h = (0, f.bG)([tJ.Ay], () => tJ.Ay.isCompacting(n), [n]),
        p = (0, f.bG)([es.Ay], () => es.Ay.getModelSettings(n), [n]),
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
            (0, es.Hc)(n);
        }, [n]),
        (0, eT.E1)(n));
    let A = ts(n),
        N = s.useCallback(
            (e, t) => {
                (0, es.dv)(n, e, t);
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
                                  a = t.filter((e) => e2(e.comment)),
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
                                      i.push(`${t + 1}. ${e9(e.target)}`),
                                      i.push(
                                          `   Feedback: ${(n = e.comment.trim()).length <= 1e3 ? n : `${n.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let r = n.trim();
                              return ("" !== r && (i.push(""), i.push(`Note for the whole batch: ${r}`)), i.join("\n"));
                          })({ annotations: A.annotations, metaComment: e, context: A.context }),
                          t,
                      ),
                      tl(n));
            },
            [A, N, n],
        ),
        I = s.useCallback(() => (0, es.fu)(n), [n]),
        T = s.useCallback((e) => lJ(n, e.implementation_prompt), [n]),
        [P, M] = (function (e) {
            let [t, n] = s.useState(() => af(e)),
                [l, a] = s.useState(e),
                i = l !== e,
                r = i ? af(e) : t;
            return (i && (a(e), n(r)), [r, n]);
        })(n),
        _ = s.useCallback(() => N(ef.intl.string(em.default["t5CN3+"])), [N]),
        R = s.useCallback((e, t, l) => lJ(n, e, { clarificationAnswers: t, attachments: l }), [n]),
        L = s.useCallback((e) => (0, es.XZ)(n, e), [n]),
        D = s.useCallback((e) => (0, es.vX)(n, e), [n]),
        O = s.useCallback((e) => iW(n, "chat", Array.from(e), D), [n, D]),
        F = s.useCallback(() => lJ(n, ef.intl.string(em.default.Zc7gML)), [n]),
        z = l?.status === "restoring",
        G = "open" === u && !d && !z,
        U = o[o.length - 1],
        q = null != U && "assistant" === U.role && null != U.proposal,
        [$, B] = s.useState(null),
        H = U?.clarification != null && U.clarification.id !== $ ? U.clarification : null,
        V = s.useCallback(() => {
            null != H && B(H.id);
        }, [H]),
        W = (0, f.bG)([es.Ay], () => es.Ay.getSettings(n), [n]),
        [K, X] = s.useState(null),
        Y =
            null != U &&
            "assistant" === U.role &&
            null != U.settingsRequest &&
            (0, tJ.BL)(U) &&
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
            historyLoaded: (0, f.bG)([tJ.Ay], () => tJ.Ay.hasLoadedHistory(n), [n]),
            historyUnavailable: (0, f.bG)([tJ.Ay], () => tJ.Ay.isHistoryUnavailable(n), [n]),
            connState: u,
        }),
        et = "loading" === ee && 0 === o.length,
        en = s.useMemo(() => {
            let e = 0;
            for (let t = 0; t < n.length; t++) e = (31 * e + n.charCodeAt(t)) % 0x7fffffff;
            return sp[e % sp.length];
        }, [n]),
        el = q ? ef.intl.string(em.default.Zc7gML) : "greeting" === ee && 0 === o.length ? en : null,
        ea = s.useMemo(() => {
            for (let e = o.length - 1; e >= 0; e--) {
                let t = o[e];
                if ("assistant" === t.role && !(0, tJ.BL)(t)) return t;
            }
        }, [o]),
        ei = null != ea,
        er =
            null != ea
                ? (function (e) {
                      let t = e.turn_id ?? e.steps.find((e) => null != e.turn_id)?.turn_id;
                      if (null != t && /^\d+$/.test(t)) {
                          let e = aa.default.extractTimestamp(t);
                          if (Number.isFinite(e) && e > 0) return e;
                      }
                      return e.created_at;
                  })(ea)
                : void 0,
        eo = q && G ? F : void 0,
        eu = s.useCallback(() => lJ(n, ef.intl.string(em.default.EMgIuY)), [n]),
        [ed, ec] = s.useState(null),
        [eh, ep] = s.useState(ei);
    (eh !== ei && (ep(ei), ei || ec(null)),
        s.useEffect(() => {
            if (!ei) return;
            let e = x.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? ec(null)
                        : ec(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (n.observe(t), () => n.disconnect());
        }, [ei, ea?.steps]));
    let eg = s.useMemo(() => (null != ea ? (0, ln.b)(ea.steps) : ""), [ea]),
        ex = s.useMemo(() => (null != ea ? ((0, le.lt)(ea.steps) ?? ea.todos) : void 0), [ea]),
        eb = ea?.provisionalTodo,
        ev = null != ea && lt(ea),
        ey = s.useMemo(() => {
            var e;
            return null != ea ? ((e = ea.steps), iP((0, le.GO)(e, { turnActive: !0 }).tasks)) : void 0;
        }, [ea]);
    return (0, r.jsxs)("section", {
        ref: g,
        "data-conjure-chat": !0,
        className: sh.TE,
        children: [
            G
                ? (0, r.jsx)(n8.A, {
                      title: ef.intl.string(em.default.gy7byi),
                      description: ef.intl.string(em.default["dkv/WO"]),
                      icons: sf.ir,
                      onDrop: O,
                  })
                : null,
            (0, r.jsx)(lj, {
                onJumpToActivity: k,
                line: eg,
                placement: ei && "top" === ed ? "top" : null,
                todos: ex,
                todosLive: ev,
                provisionalTodo: eb,
                agents: ey,
            }),
            (0, r.jsxs)("div", {
                className: sh.JX,
                children: [
                    (0, r.jsx)(n7.Ch, {
                        ref: x,
                        onScroll: C,
                        scrollbarGutter: et ? "both-edges" : "stable",
                        className: [sh.N$, y ? null : sh.hB, Z ? sh.J9 : null].filter(Boolean).join(" "),
                        children: (0, r.jsx)(r2, {
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
                        className: sh.NJ,
                        children: (0, r.jsx)(sm, {
                            projectId: n,
                            thinking: ei,
                            turnStartedAt: er,
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
                              className: Z ? `${sh.B5} ${sh.J9}` : sh.B5,
                              children: (0, r.jsx)(
                                  ae,
                                  { projectId: n, clarification: H, onSubmit: G ? R : void 0, onDismiss: V },
                                  H.id,
                              ),
                          }),
                    null == J
                        ? null
                        : (0, r.jsx)("div", {
                              className: sh.B5,
                              children: (0, r.jsx)(al, { projectId: n, request: J, onDismiss: Q }, Y?.id),
                          }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: sh.Jx,
                children: [
                    (0, r.jsx)(lj, {
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
                              className: sh.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, r.jsx)(w.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: ef.intl.formatToPlainString(em.default["7b49dS"], {
                                          count: A.annotations.length,
                                      }),
                                  }),
                                  (0, r.jsx)(w.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: ef.intl.string(em.default["5zG+CR"]),
                                  }),
                                  (0, r.jsx)(S.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: ef.intl.string(em.default["/zOv9+"]),
                                      onClick: () => tl(n),
                                  }),
                              ],
                          }),
                    (0, r.jsx)(i2, {
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
var sx = n(624479),
    sb = n(761508),
    sv = n(540999);
let sy = [],
    sj = new Map(),
    sw = new Map(),
    sk = new Map(),
    sC = new Map(),
    sA = new Map(),
    sN = new Map(),
    sS = new Map();
class sE extends f.Ay.Store {
    getStatus(e) {
        return sj.get(e) ?? null;
    }
    getFetchState(e) {
        return sw.get(e) ?? "idle";
    }
    getLastCompaction(e) {
        return sC.get(e) ?? null;
    }
    getLastTurnUsage(e) {
        return sN.get(e) ?? null;
    }
    getLastCompactionDecline(e) {
        return sA.get(e) ?? null;
    }
    getModelCalls(e) {
        return sS.get(e) ?? sy;
    }
    getForceCompactionState(e) {
        return sk.get(e) ?? "idle";
    }
}
let sI = new sE(n_.h, {
    LOGOUT: function () {
        if (
            0 === sj.size &&
            0 === sw.size &&
            0 === sk.size &&
            0 === sC.size &&
            0 === sA.size &&
            0 === sN.size &&
            0 === sS.size
        )
            return !1;
        (sj.clear(), sw.clear(), sk.clear(), sC.clear(), sA.clear(), sN.clear(), sS.clear());
    },
    CONJURE_DEBUG_STATUS_REQUESTED: function (e) {
        let { projectId: t } = e;
        sw.set(t, "loading");
    },
    CONJURE_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if ("open" === n) return !1;
        let l = "pending" === sk.get(t);
        l &&
            sk.set(t, {
                outcome: "failed",
                reason: "Connection lost before the worker answered",
                observedAt: new Date().toISOString(),
            });
        let a = "loading" === sw.get(t);
        if ((a && sw.set(t, "failed"), !l && !a)) return !1;
    },
    CONJURE_DEBUG_STATUS_SET: function (e) {
        let { projectId: t, status: n, failed: l } = e;
        l || null == n ? sw.set(t, "failed") : (sj.set(t, n), sw.set(t, "loaded"));
    },
    CONJURE_DEBUG_COMPACTION_REPORT: function (e) {
        sC.set(e.projectId, {
            tokensBefore: e.tokensBefore,
            tokensAfter: e.tokensAfter,
            retainedMessages: e.retainedMessages,
            promptCeiling: e.promptCeiling,
            observedAt: e.observedAt,
        });
    },
    CONJURE_DEBUG_COMPACTION_DECLINED: function (e) {
        sA.set(e.projectId, {
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
        sk.set(t, "pending");
    },
    CONJURE_DEBUG_FORCE_COMPACTION_RESULT: function (e) {
        sk.set(e.projectId, {
            outcome: e.outcome,
            reason: e.reason,
            ...(!0 === e.pendingTurn ? { pendingTurn: !0 } : {}),
            observedAt: e.observedAt,
        });
    },
    CONJURE_DEBUG_MODEL_CALL: function (e) {
        let t = sS.get(e.projectId);
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
        sS.set(e.projectId, l.length > 200 ? l.slice(-200) : l);
    },
    CONJURE_CHAT_USAGE_SET: function (e) {
        let { projectId: t, turn: n } = e;
        if (0 === (0, en.aM)(n.total)) return !1;
        sN.set(t, n);
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        (sj.delete(t), sw.delete(t), sk.delete(t), sC.delete(t), sA.delete(t), sN.delete(t), sS.delete(t));
    },
});
function sT(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function sP(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function sM(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function s_(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = String(t.getHours()).padStart(2, "0"),
        l = String(t.getMinutes()).padStart(2, "0"),
        a = String(t.getSeconds()).padStart(2, "0");
    return `${n}:${l}:${a}`;
}
function sR(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function sL(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function sD(e) {
    return ef.intl.string("preview" === e ? em.default["2yLYlG"] : em.default.eiAi57);
}
let sO = ["all", "preview", "stable", "web"],
    sF = new Set(["error", "aborted", "length"]);
function sz(e) {
    switch (e.reason) {
        case "local":
            return ef.intl.string(em.default.mUeKML);
        case "unconfigured":
            return ef.intl.string(em.default.bGefb5);
        case "unauthorized":
            return ef.intl.string(em.default.KLx6Bb);
        default:
            return null != e.detail
                ? ef.intl.formatToPlainString(em.default.t09Q6q, { detail: e.detail })
                : ef.intl.string(em.default["t+tG59"]);
    }
}
function sG(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : ef.intl.formatToPlainString(em.default["XO/bN4"], {
              p50: sT(e.memory_p50_bytes ?? 0),
              p999: sT(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let sU = {
    db: () => em.default["7l+DFG"],
    db_preview: () => em.default.FAuffi,
    runtime: () => em.default["Gkl+ab"],
    runtime_preview: () => em.default.ynpJzv,
    bot: () => em.default["5/i0cj"],
    bot_preview: () => em.default.m2jsnw,
};
var sq = n(911608),
    s$ = n(177427);
function sB(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, r.jsxs)("div", {
        className: s$.KE,
        children: [
            (0, r.jsx)("div", {
                className: s$.IQ,
                children:
                    "loading" === n
                        ? (0, r.jsx)(N.y, { type: N.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, r.jsx)(w.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: ef.intl.string(em.default.ZVByPX),
                            })
                          : null != t
                            ? (0, r.jsx)(w.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: ef.intl.formatToPlainString(em.default.INVO50, { time: sR(t) }),
                              })
                            : null,
            }),
            (0, r.jsx)(S.$, { variant: "secondary", size: "sm", text: ef.intl.string(em.default.oKEgiu), onClick: l }),
        ],
    });
}
function sH(e) {
    let { title: t, children: n } = e;
    return (0, r.jsxs)("section", {
        className: s$.uW,
        "aria-label": t,
        children: [
            (0, r.jsx)(w.E, { variant: "text-xs/semibold", color: "text-muted", className: s$.Gf, children: t }),
            n,
        ],
    });
}
function sV(e) {
    let { label: t, value: n, hint: l, critical: a = !1 } = e;
    return (0, r.jsxs)("div", {
        className: s$.N8,
        children: [
            (0, r.jsxs)("div", {
                className: s$.x7,
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
function sW(e) {
    let { label: t, used: n, max: l, formatValue: a } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, r.jsxs)("div", {
        className: s$.N8,
        children: [
            (0, r.jsxs)("div", {
                className: s$.x7,
                children: [
                    (0, r.jsx)(w.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, r.jsx)(w.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${a(n)} / ${a(l)}`,
                    }),
                ],
            }),
            (0, r.jsx)(sq.z, {
                value: 100 * i,
                valueLabel: `${a(n)} of ${a(l)}`,
                "aria-label": t,
                className: s ? s$.dh : void 0,
            }),
        ],
    });
}
function sK(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, r.jsx)(sV, {
            label: ef.intl.string(em.default.SXP7pD),
            value: ef.intl.string(em.default.E5hKVi),
            hint: sz(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, r.jsx)(sV, {
            label: ef.intl.string(em.default.SXP7pD),
            value: "\u2014",
            hint: ef.intl.string(em.default.AGvoMJ),
        });
    let l = sG(n);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(sV, { label: ef.intl.string(em.default["H/X+FI"]), value: sP(n.cpu_ms) }),
            null != l && (0, r.jsx)(sV, { label: ef.intl.string(em.default.lmFmMO), value: l }),
        ],
    });
}
function sX(e) {
    let { analytics: t } = e,
        n = ef.intl.string(em.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, r.jsx)(sH, {
            title: n,
            children: (0, r.jsx)(w.E, { variant: "text-sm/normal", color: "text-muted", children: sz(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? sU[t] : null) ? ef.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, r.jsx)(sH, {
        title: n,
        children:
            0 === l.length
                ? (0, r.jsx)(w.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: ef.intl.string(em.default.AGvoMJ),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, r.jsx)(
                          sV,
                          {
                              label: n,
                              value: ef.intl.formatToPlainString(em.default["w/2voO"], { cpu: sP(t.cpu_ms) }),
                              hint: sG(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var sY = n(400154);
let sJ = [];
function sQ(e) {
    let t,
        { call: n } = e,
        { text: l, bad: a } =
            ((t = null != n.stopReason && sF.has(n.stopReason)),
            {
                text: [
                    null != n.durationMs ? sP(n.durationMs) : null,
                    `${sM(n.inputTokens + n.cacheReadTokens + n.cacheWriteTokens)} \u{2192} ${sM(n.outputTokens)}`,
                    t ? n.stopReason : null,
                ]
                    .filter((e) => null != e)
                    .join(" \xb7 "),
                bad: t,
            });
    return (0, r.jsxs)("div", {
        className: sY.p5,
        children: [
            (0, r.jsx)(w.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: sY.Q5,
                children: s_(n.observedAt),
            }),
            (0, r.jsxs)(w.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-default",
                className: sY.qN,
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
function sZ(e, t) {
    return (0, r.jsx)(sV, {
        label: e,
        value: ef.intl.formatToPlainString(em.default.yHJxuP, { count: sM((0, en.aM)(t)) }),
        hint: `${sM(t.input_tokens)} in \xb7 ${sM(t.output_tokens)} out \xb7 ${sM(t.cache_read_input_tokens)} cache read`,
    });
}
function s0(e) {
    let { projectId: t, status: n, fetchState: l, onRefresh: a, traceVisible: i = !1 } = e,
        o = (0, f.bG)([sI], () => sI.getLastTurnUsage(t), [t]),
        u = (0, f.bG)([sI], () => sI.getLastCompaction(t), [t]),
        d = (0, f.bG)([sI], () => sI.getLastCompactionDecline(t), [t]),
        c = (0, f.bG)([sI], () => sI.getForceCompactionState(t), [t]),
        m = s.useCallback(() => (0, es.Lj)(t), [t]),
        h = s.useCallback(() => (0, es.Lj)(t, !0), [t]),
        p = (0, f.bG)([sI], () => (i ? sJ : sI.getModelCalls(t)), [t, i]),
        g = n?.agent?.lifetime ?? null,
        x = n?.agent?.limits ?? null,
        b = n?.agent?.session ?? null,
        v = u?.promptCeiling ?? x?.context_window_tokens ?? null;
    return (0, r.jsxs)("div", {
        className: sY.Mf,
        children: [
            (0, r.jsx)(sB, { generatedAt: n?.generated_at ?? null, fetchState: l, onRefresh: a }),
            (0, r.jsx)(sH, {
                title: ef.intl.string(em.default.JghNal),
                children:
                    null == g
                        ? (0, r.jsx)(w.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: ef.intl.string(em.default.s0U5Fv),
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(sV, {
                                      label: ef.intl.string(em.default["9nqym2"]),
                                      value: sM((0, en.a7)(g.cost_usd)),
                                      hint: ef.intl.formatToPlainString(em.default.NCdUIh, { count: sM(g.turns) }),
                                  }),
                                  sZ(ef.intl.string(em.default.xtxP0e), g.orchestrator),
                                  sZ(ef.intl.string(em.default["9Sj3SX"]), g.codegen),
                                  sZ(ef.intl.string(em.default.ANCEo3), (0, en.wU)(g.compaction)),
                                  n?.agent?.outcomes != null &&
                                      Object.keys(n.agent.outcomes).length > 0 &&
                                      (0, r.jsx)(sV, {
                                          label: ef.intl.string(em.default.SQHm7C),
                                          value: Object.entries(n.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${sM(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, r.jsx)(sH, {
                title: ef.intl.string(em.default.dZHPE5),
                children:
                    null == o
                        ? (0, r.jsx)(w.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: ef.intl.string(em.default.DfVjal),
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  sZ(ef.intl.string(em.default["7X3i9d"]), o.total),
                                  (0, r.jsx)(sV, {
                                      label: ef.intl.string(em.default["8OUg09"]),
                                      value: `${Math.round((o.cache_hit_rate ?? (0, en.CA)(o.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, r.jsxs)(sH, {
                title: ef.intl.string(em.default.NbRk9a),
                children: [
                    null != u && null != v
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(sW, {
                                      label: ef.intl.string(em.default.Kw5wiQ),
                                      used: u.tokensAfter,
                                      max: v,
                                      formatValue: sM,
                                  }),
                                  (0, r.jsx)(sV, {
                                      label: ef.intl.string(em.default.mRbSns),
                                      value: `${sM(u.tokensBefore)} \u{2192} ${sM(u.tokensAfter)}`,
                                      hint: ef.intl.formatToPlainString(em.default.Vq3skS, {
                                          count: sM(u.retainedMessages),
                                          time: sR(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, r.jsx)(w.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != v
                                      ? ef.intl.formatToPlainString(em.default.GMLCNv, { ceiling: sM(v) })
                                      : ef.intl.string(em.default.s0U5Fv),
                          }),
                    null != d &&
                        (0, r.jsx)(sV, {
                            label: ef.intl.string(em.default["4BX5KK"]),
                            value: `${sM(d.projected)} / ${sM(d.threshold)}`,
                            critical: !0,
                            hint: ef.intl.formatToPlainString(em.default["6ngCax"], { time: sR(d.observedAt) }),
                        }),
                    (0, r.jsxs)("div", {
                        className: sY.Lj,
                        children: [
                            (0, r.jsx)(S.$, {
                                variant: "secondary",
                                size: "sm",
                                text: ef.intl.string(em.default["1EiJeb"]),
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
                                    if ("idle" === e) return ef.intl.string(em.default.wox6Ev);
                                    if ("pending" === e) return ef.intl.string(em.default.OcPHQ1);
                                    let t = sR(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return ef.intl.formatToPlainString(em.default.BhRjZZ, { time: t });
                                    let n =
                                        "declined" === e.outcome
                                            ? em.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? em.default.YZb4hK
                                              : em.default.ZoUSVK;
                                    return ef.intl.formatToPlainString(n, {
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
                                            text: ef.intl.string(em.default.ZxG2AI),
                                            onClick: h,
                                        }),
                                        (0, r.jsx)(w.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: ef.intl.string(em.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            !i &&
                (0, r.jsx)(sH, {
                    title: ef.intl.string(em.default.TkTRdW),
                    children:
                        0 === p.length
                            ? (0, r.jsx)(w.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: ef.intl.string(em.default["r3/FhI"]),
                              })
                            : (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      p
                                          .slice(-30)
                                          .reverse()
                                          .map((e) => (0, r.jsx)(sQ, { call: e }, e.id)),
                                      p.length > 30 &&
                                          (0, r.jsx)(w.E, {
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              children: ef.intl.formatToPlainString(em.default["uZ9P/O"], {
                                                  shown: 30,
                                                  total: p.length,
                                              }),
                                          }),
                                  ],
                              }),
                }),
            (null != b || n?.analytics != null) &&
                (0, r.jsxs)(sH, {
                    title: ef.intl.string(em.default.EsSzCS),
                    children: [
                        null != b &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(sV, {
                                        label: ef.intl.string(em.default.CLXHAs),
                                        value: sR(b.instance_since),
                                        hint: ef.intl.string(em.default.UCwUEX),
                                    }),
                                    (0, r.jsx)(sV, {
                                        label: ef.intl.string(em.default["8V8e1Z"]),
                                        value: sM(b.sockets),
                                    }),
                                    (0, r.jsx)(sV, {
                                        label: ef.intl.string(em.default["4pBzYW"]),
                                        value: b.turn_inflight
                                            ? ef.intl.string(em.default.Wv025I)
                                            : ef.intl.string(em.default["7/lsFY"]),
                                    }),
                                    b.queued_messages > 0 &&
                                        (0, r.jsx)(sV, {
                                            label: ef.intl.string(em.default["3oUYnv"]),
                                            value: sM(b.queued_messages),
                                        }),
                                ],
                            }),
                        n?.analytics != null && (0, r.jsx)(sK, { analytics: n.analytics }),
                    ],
                }),
            null != x &&
                (0, r.jsxs)(sH, {
                    title: ef.intl.string(em.default["LEIhp/"]),
                    children: [
                        (0, r.jsx)(sV, {
                            label: ef.intl.string(em.default.IlDBN3),
                            value: sM(x.max_subagent_iterations),
                        }),
                        (0, r.jsx)(sV, {
                            label: ef.intl.string(em.default["ZdzKR+"]),
                            value: ef.intl.formatToPlainString(em.default.yHJxuP, {
                                count: sM(x.context_window_tokens),
                            }),
                        }),
                        (0, r.jsx)(sV, {
                            label: ef.intl.string(em.default.cIhN2W),
                            value: ef.intl.formatToPlainString(em.default.yHJxuP, {
                                count: sM(x.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, r.jsx)(sV, {
                            label: ef.intl.string(em.default["+fOn/q"]),
                            value: sM(x.max_user_message_chars),
                        }),
                        (0, r.jsx)(sV, { label: ef.intl.string(em.default.kIHga0), value: sM(x.max_build_attempts) }),
                        (0, r.jsx)(sV, { label: ef.intl.string(em.default.Iw03yW), value: sM(x.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var s2 = n(237528),
    s1 = n(683438),
    s6 = n(531893);
function s9(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, r.jsx)("div", {
              className: s6.ut,
              children: (0, r.jsx)(w.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: ef.intl.string(em.default.h1SE6R),
              }),
          });
}
function s3(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, r.jsxs)("div", {
              className: s6.qf,
              children: [
                  (0, r.jsx)(w.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: ef.intl.string(em.default.h1SE6R),
                  }),
                  (0, r.jsx)(w.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: ef.intl.string(em.default["8SErdg"]),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: s6.qf,
              children: [
                  (0, r.jsx)(w.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                  (0, r.jsx)(w.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function s5(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, r.jsx)("div", {
              className: s6.ps,
              children: (0, r.jsx)(w.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: ef.intl.string(em.default.V7Ri8H),
              }),
          })
        : null;
}
var s4 = n(109079);
let s7 = s.memo(function (e) {
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
        className: s4.vK,
        children: [
            (0, r.jsx)(w.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: s4.Mt,
                selectable: !0,
                children: s_(n.ts),
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
                className: s4.dm,
                children: n.level,
            }),
            (0, r.jsxs)("div", {
                className: s4.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, r.jsx)("span", { className: s4.Cq, children: (0, r.jsx)(s2.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, r.jsx)("span", {
                            className: s4.Cq,
                            title: n.build ?? void 0,
                            children: (0, r.jsx)(s2.v, {
                                text: ef.intl.string(em.default.TrC9c8),
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
                                      className: s4.Pq,
                                      "aria-expanded": a,
                                      "aria-controls": o,
                                      "aria-label": ef.intl.string(em.default["9CTzyV"]),
                                      onClick: () => i((e) => !e),
                                      children: [
                                          a
                                              ? (0, r.jsx)(lr.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, r.jsx)(tm._, {
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
                                                  ef.intl.formatToPlainString(
                                                      "[\u2026]" === u.marker
                                                          ? em.default.kUhyUv
                                                          : em.default["N+fphl"],
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
                                          className: s4.dF,
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
function s8(e) {
    let { projectId: t } = e,
        n = (0, f.bG)([eL.Ay], () => eL.Ay.getLogs(t), [t]),
        l = (0, f.bG)([eL.Ay], () => eL.Ay.getHistoryState(t, "logs")),
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
                sO.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return sD(e);
                            case "web":
                                return ef.intl.string(em.default.IVzfVV);
                            default:
                                return ef.intl.string(em.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, r.jsxs)("div", {
        className: s4.$F,
        children: [
            (0, r.jsxs)("div", {
                className: s4.y4,
                children: [
                    (0, r.jsx)(tq.I, {
                        look: "pill",
                        "aria-label": ef.intl.string(em.default.MhvyUU),
                        options: p,
                        value: a,
                        onChange: (e) => i(e.value),
                    }),
                    (0, r.jsx)("div", {
                        className: s4.KT,
                        children: (0, r.jsx)(s1.I, {
                            query: o,
                            onChange: u,
                            onClear: () => u(""),
                            size: "sm",
                            placeholder: ef.intl.string(em.default["m2+37Y"]),
                            "aria-label": ef.intl.string(em.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, r.jsx)(s9, { state: l }),
            (0, r.jsxs)(n7.Ch, {
                ref: c,
                onScroll: h,
                overflow: "auto",
                className: s4.sx,
                children: [
                    (0, r.jsx)(s5, { state: l }),
                    0 === n.length
                        ? (0, r.jsx)(s3, {
                              state: l,
                              emptyTitle: ef.intl.string(em.default.S7qlPG),
                              emptyBody: ef.intl.string(em.default.nD0S9z),
                          })
                        : 0 === d.length
                          ? (0, r.jsx)(w.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: ef.intl.string(em.default["4SIdrX"]),
                            })
                          : d.map((e) => (0, r.jsx)(s7, { entry: e.log, showSource: "all" === a }, e.key)),
                ],
            }),
        ],
    });
}
function oe(e) {
    let { title: t, preview: n, stable: l, renderEnv: a } = e,
        i = [];
    return (
        null != n && i.push((0, r.jsx)(s.Fragment, { children: a("preview", n) }, "preview")),
        null != l && i.push((0, r.jsx)(s.Fragment, { children: a("stable", l) }, "stable")),
        (0, r.jsx)(sH, {
            title: t,
            children:
                i.length > 0
                    ? i
                    : (0, r.jsx)(w.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: ef.intl.string(em.default.umcjif),
                      }),
        })
    );
}
function ot(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(sV, {
                      label: ef.intl.formatToPlainString(em.default["01ZMS4"], { env: sD(n) }),
                      value: ((t = l.connected), ef.intl.string(t ? em.default.Wv025I : em.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, r.jsx)(sV, {
                      label: ef.intl.string(em.default["z1dh+F"]),
                      value: sM(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${sR(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, r.jsx)(sV, { label: ef.intl.string(em.default.Iz5GnJ), value: sM(l.guild_count) }),
                  (0, r.jsx)(sV, {
                      label: ef.intl.string(em.default["7UqtNv"]),
                      value: sM(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? ef.intl.formatToPlainString(em.default.MasSly, {
                                    code: l.last_close_code,
                                    time: sR(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, r.jsx)(sV, {
                          label: ef.intl.string(em.default["x3+JXJ"]),
                          value: sM(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, r.jsx)(sV, { label: sD(n), value: ef.intl.string(em.default.lTHQss) });
}
function on(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, r.jsx)(sV, {
        label: sD(t),
        value: ef.intl.formatToPlainString(em.default["Xq+wHT"], {
            requests: sM(n.requests),
            failures: sM(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? ef.intl.formatToPlainString(em.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: sR(n.last_failure.at),
                  })
                : ef.intl.formatToPlainString(em.default["7KlGT6"], { time: sR(n.since) }),
    });
}
function ol(e) {
    let { env: t, runtime: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(sV, {
                label: ef.intl.formatToPlainString(em.default["92gVTm"], { env: sD(t) }),
                value: sM(n.connections),
            }),
            n.schedules.map((e) =>
                (0, r.jsx)(
                    sV,
                    {
                        label: ef.intl.formatToPlainString(em.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? ef.intl.formatToPlainString(em.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? ef.intl.formatToPlainString(em.default.wxAWNv, { time: sR(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function oa(e) {
    let { env: t, metrics: n } = e;
    return (0, r.jsx)(sV, {
        label: sD(t),
        value: ef.intl.formatToPlainString(em.default.suAOj9, { calls: sM(n.calls), errors: sM(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function oi(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, r.jsx)(sH, {
            title: t,
            children: (0, r.jsx)(w.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: ef.intl.string(em.default["Noami/"]),
            }),
        });
    let a = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, r.jsxs)(sH, {
        title: t,
        children: [
            (0, r.jsx)(sV, {
                label: ef.intl.string(em.default.xtD4Zp),
                value: sM(n.requests),
                hint: ef.intl.formatToPlainString(em.default["7KlGT6"], { time: sR(n.since) }),
            }),
            (0, r.jsx)(sV, { label: ef.intl.string(em.default.gfRhR3), value: sM(n.errors), critical: n.errors > 0 }),
            i
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(sW, {
                              label: ef.intl.string(em.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: sP,
                          }),
                          (0, r.jsx)(sV, {
                              label: ef.intl.string(em.default.mSKImM),
                              value: sP(a),
                              hint: ef.intl.formatToPlainString(em.default.JqMU05, {
                                  total: sP(n.cpu_ms_total),
                                  wall: sP(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, r.jsx)(sV, {
                      label: ef.intl.string(em.default.LEJ5r3),
                      value: ef.intl.string(em.default["2Ekb2b"]),
                      hint: ef.intl.string(em.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, r.jsx)(sV, { label: ef.intl.string(em.default.xvmL1D), value: sP(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, r.jsx)(sV, {
                    label: ef.intl.string(em.default["4sQYwH"]),
                    value: sM(n.exceeded_cpu),
                    critical: !0,
                }),
            (0, r.jsx)(sV, {
                label: ef.intl.string(em.default.bQenOy),
                value: sM(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: ef.intl.formatToPlainString(em.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, r.jsx)(sV, { label: ef.intl.string(em.default.xgpn4Y), value: sL(n.build) }),
        ],
    });
}
function or(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: a } = t.storage,
        i = t.worker.limits,
        o = a
            ? [{ key: "shared", label: ef.intl.string(em.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: ef.intl.string(em.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: ef.intl.string(em.default.eiAi57), metrics: n },
              ];
    return (0, r.jsx)(sH, {
        title: ef.intl.string(em.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, r.jsx)(sV, { label: n, value: "\u2014" }, t)
                : (0, r.jsxs)(
                      s.Fragment,
                      {
                          children: [
                              (0, r.jsx)(sV, {
                                  label: ef.intl.formatToPlainString(em.default.u7kJJ4, { env: n }),
                                  value: sT(l.r2_bytes),
                                  hint: ef.intl.formatToPlainString(
                                      l.r2_truncated ? em.default.lH0oQw : em.default.m9h02S,
                                      { count: sM(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, r.jsx)(sW, {
                                      label: ef.intl.formatToPlainString(em.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: i.db_bytes,
                                      formatValue: sT,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function os(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, r.jsxs)("div", {
        className: sY.Mf,
        children: [
            (0, r.jsx)(sB, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(oi, {
                            title: ef.intl.string(em.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, r.jsx)(oi, {
                            title: ef.intl.string(em.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, r.jsx)(or, { status: t }),
                        null != t.bot &&
                            (0, r.jsx)(oe, {
                                title: ef.intl.string(em.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, r.jsx)(ot, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, r.jsx)(oe, {
                                title: ef.intl.string(em.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, r.jsx)(on, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, r.jsx)(oe, {
                                title: ef.intl.string(em.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, r.jsx)(ol, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, r.jsx)(oe, {
                                title: ef.intl.string(em.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, r.jsx)(oa, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, r.jsx)(sX, { analytics: t.analytics }),
                        (0, r.jsxs)(sH, {
                            title: ef.intl.string(em.default.fQMpFp),
                            children: [
                                (0, r.jsx)(sV, {
                                    label: ef.intl.string(em.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? sL(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, r.jsx)(sV, {
                                    label: ef.intl.string(em.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? sL(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var oo = n(761929);
function ou(e, t) {
    return String(e).padStart(t, "0");
}
function od(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        a = `${ou(l.getHours(), 2)}:${ou(l.getMinutes(), 2)}:${ou(l.getSeconds(), 2)}`;
    return "millis" === t ? `${a}.${ou(l.getMilliseconds(), 3)}` : a;
}
var oc = n(382541);
let om = new Map(),
    of = new Map(),
    oh = 0,
    op = 0;
async function og(e, t, n) {
    let l = oh,
        a = om.get(t);
    if (null != a) return { status: "loaded", rich: a };
    if (Date.now() < op) return { status: "forbidden" };
    let i = of.get(t);
    if (null != i) return i;
    let r = (async () => {
        try {
            let a,
                { ticket: i, baseUrl: r } = await (0, oc.d)(e),
                s = await fetch(
                    ((a = new URL(`${r}/agent/trace-detail`)).searchParams.set("ticket", i),
                    a.searchParams.set("id", t),
                    a.toString()),
                    { method: "GET", credentials: "omit" },
                );
            if (403 === s.status) return ((op = Date.now() + 6e4), { status: "forbidden" });
            if (!s.ok) return { status: "failed" };
            let o = await s.json();
            if (!0 !== o.available || null == o.rich) return { status: "unavailable" };
            if (l !== oh) return { status: "failed" };
            var n = o.rich;
            for (om.set(t, n); om.size > 100;) {
                let e = om.keys().next();
                if (!0 === e.done) break;
                om.delete(e.value);
            }
            return { status: "loaded", rich: o.rich };
        } catch {
            return { status: "failed" };
        }
    })();
    of.set(t, r);
    let s = await r;
    return (of.get(t) === r && of.delete(t), n?.aborted === !0 ? { status: "failed" } : s);
}
function ox() {
    ((oh += 1), om.clear(), of.clear(), (op = 0));
}
function ob(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function ov(e) {
    if (e < 1e3) return String(e);
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function oy(e) {
    switch (e) {
        case "subagent":
            return ef.intl.string(em.default.PbKt9r);
        case "context":
            return ef.intl.string(em.default["tNk/P2"]);
        case "tool":
            return ef.intl.string(em.default.NBOJcw);
        case "delegated":
            return ef.intl.string(em.default.QgrFdt);
        default:
            return ef.intl.string(em.default.LsLVUy);
    }
}
function oj(e) {
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
let ow = ["model", "tool", "subagent", "delegated", "context"];
function ok(e, t) {
    let n = t.trim().toLowerCase();
    return "" === n
        ? e
        : e.filter((e) => {
              let t;
              return ((t =
                  "model" === e.kind
                      ? [e.model, e.agent, e.stopReason ?? "", e.error ?? ""]
                      : [e.tool, e.agent, e.summary ?? "", e.error ?? ""]).push(oj(e)),
              t.join(" ").toLowerCase()).includes(n);
          });
}
function oC(e, t) {
    return null == t ? null : (e.find((e) => e.id === t) ?? null);
}
let oA = {
    model: "blurpleLight",
    subagent: "greenLight",
    context: "grayLight",
    tool: "grayMedium",
    delegated: "orangeLight",
};
function oN(e) {
    let { category: t } = e;
    return (0, r.jsx)(s2.v, { text: oy(t), variant: oA[t] });
}
var oS = n(28863);
let oE = ["arguments", "result", "usage", "diagnostics"];
var oI = n(536113);
let oT = { started: oI.Vf, ok: oI.mo, error: oI.Sr };
function oP(e) {
    let { status: t } = e;
    return (0, r.jsx)("span", {
        className: `${oI.Om} ${oT[t] ?? oI.Vf}`,
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "started":
                    return ef.intl.string(em.default["2wyRDK"]);
                case "error":
                    return ef.intl.string(em.default["2Cu8n+"]);
                default:
                    return ef.intl.string(em.default["6kgw6D"]);
            }
        })(t),
    });
}
function oM(e) {
    let { label: t, value: n } = e;
    return (0, r.jsxs)("div", {
        className: oI.wV,
        children: [
            (0, r.jsx)(w.E, { variant: "text-xs/medium", color: "text-muted", className: oI.D6, children: t }),
            (0, r.jsx)("div", { className: oI.zL, children: n }),
        ],
    });
}
function o_(e) {
    let { label: t, value: n } = e;
    return (0, r.jsx)(oM, {
        label: t,
        value: (0, r.jsx)(w.E, { variant: "text-xs/normal", color: "text-default", selectable: !0, children: n }),
    });
}
function oR(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: oI.WA, children: t });
}
function oL(e) {
    let { title: t, children: n } = e,
        l = s.useId();
    return (0, r.jsxs)("section", {
        "aria-labelledby": l,
        className: oI.xd,
        children: [
            (0, r.jsx)(w.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                id: l,
                className: oI.Hm,
                children: t,
            }),
            n,
        ],
    });
}
function oD(e) {
    let { title: t, children: n } = e;
    return (0, r.jsxs)("details", {
        className: oI.XK,
        children: [
            (0, r.jsxs)("summary", {
                className: oI.It,
                children: [
                    (0, r.jsx)(tm._, { className: oI.k, size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    (0, r.jsx)(w.E, { variant: "text-xs/semibold", color: "none", children: t }),
                ],
            }),
            (0, r.jsx)("div", { className: oI.bG, children: n }),
        ],
    });
}
function oO(e) {
    let { field: t } = e;
    if (null != t.value)
        return (0, r.jsx)(oM, {
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
            ? ef.intl.formatToPlainString(em.default.ib7All, { count: t.chars })
            : null != t.items
              ? ef.intl.formatToPlainString(em.default.cIqKbA, { count: t.items })
              : null;
    return (0, r.jsx)(oM, {
        label: t.key,
        value: (0, r.jsxs)("div", {
            className: oI.Kv,
            children: [
                (0, r.jsx)(w.E, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    children: (function (e) {
                        switch (e) {
                            case "prose":
                                return ef.intl.string(em.default["6oDpz5"]);
                            case "content":
                                return ef.intl.string(em.default.kSGhxQ);
                            default:
                                return ef.intl.string(em.default.JwGtRz);
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
function oF(e) {
    let { entries: t } = e;
    return 0 === t.length
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", {
                      className: oI.QR,
                      children: (0, r.jsx)(s2.v, { text: ef.intl.string(em.default.LRIpHQ), variant: "orangeLight" }),
                  }),
                  t.map((e) =>
                      (0, r.jsx)(
                          oM,
                          {
                              label: e.key,
                              value: (0, r.jsxs)("div", {
                                  className: oI.TY,
                                  children: [
                                      null == e.value
                                          ? null
                                          : (0, r.jsx)(w.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                className: oI.Px,
                                                selectable: !0,
                                                children: e.value,
                                            }),
                                      !0 !== e.scrubbed
                                          ? null
                                          : (0, r.jsx)(w.E, {
                                                variant: "text-xs/normal",
                                                color: "text-feedback-warning",
                                                children: ef.intl.string(em.default["+kQ+K3"]),
                                            }),
                                      !0 !== e.truncated
                                          ? null
                                          : (0, r.jsx)(w.E, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children:
                                                    null == e.chars
                                                        ? ef.intl.string(em.default.ijkkUh)
                                                        : ef.intl.formatToPlainString(em.default.PRt8I0, {
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
function oz(e) {
    let { detail: t } = e,
        n =
            null == t || "loaded" === t.status || "forbidden" === t.status
                ? null
                : ef.intl.string(
                      "loading" === t.status
                          ? em.default.SKbSyo
                          : "unavailable" === t.status
                            ? em.default.tdq5Zn
                            : em.default["Dw1JW/"],
                  );
    return null == n
        ? null
        : (0, r.jsx)(w.E, { variant: "text-xs/normal", color: "text-subtle", className: oI.E7, children: n });
}
function oG(e) {
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
                oE.filter((e) => l.has(e))
            );
        })(n, { childCount: o, hasParent: null != a }),
        d = (function (e, t) {
            let [n, l] = s.useState(null);
            if (
                (s.useEffect(() => {
                    if (null == t || null != om.get(t)) return;
                    let n = new AbortController();
                    return (
                        og(e, t, n.signal).then((e) => {
                            n.signal.aborted || l({ detailId: t, detail: e });
                        }),
                        () => n.abort()
                    );
                }, [e, t]),
                null == t)
            )
                return null;
            let a = om.get(t);
            return null != a ? { status: "loaded", rich: a } : n?.detailId === t ? n.detail : { status: "loading" };
        })(t, "tool" === n.kind ? n.detailId : void 0),
        c = "model" === n.kind ? n.model : n.tool,
        m = od(n.startedAt, "millis"),
        f = oj(n),
        h = s.useCallback(
            (e) => {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), l());
            },
            [l],
        );
    return (0, r.jsxs)(n7.Ch, {
        className: oI._0,
        onKeyDown: h,
        role: "region",
        "aria-label": ef.intl.formatToPlainString(em.default.Qiaeyz, { name: c }),
        children: [
            (0, r.jsx)("div", {
                className: oI.sy,
                children: (0, r.jsxs)("div", {
                    className: oI.HI,
                    children: [
                        (0, r.jsx)(oP, { status: n.status }),
                        (0, r.jsx)(oN, { category: f }),
                        (0, r.jsx)(w.E, {
                            variant: "text-sm/semibold",
                            color: "text-strong",
                            className: oI.kc,
                            children: c,
                        }),
                        (0, r.jsx)(w.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            tabularNumbers: !0,
                            className: oI.l5,
                            children: null == n.durationMs ? ef.intl.string(em.default["2wyRDK"]) : ob(n.durationMs),
                        }),
                    ],
                }),
            }),
            null == n.error
                ? null
                : (0, r.jsx)(w.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: oI.Um,
                      selectable: !0,
                      children: n.error,
                  }),
            u.includes("arguments") && "tool" === n.kind
                ? (0, r.jsxs)(oL, {
                      title: ef.intl.string(em.default["G/4JST"]),
                      children: [
                          (n.fields ?? []).map((e) => (0, r.jsx)(oO, { field: e }, e.key)),
                          d?.status === "loaded" && null != d.rich.args
                              ? (0, r.jsx)(oF, { entries: d.rich.args })
                              : null,
                          (0, r.jsx)(oz, { detail: d }),
                      ],
                  })
                : null,
            u.includes("result") && "tool" === n.kind
                ? (0, r.jsxs)(oL, {
                      title: ef.intl.string(em.default.Dgg25Y),
                      children: [
                          (0, r.jsx)(o_, {
                              label: ef.intl.string(em.default["U+OQCo"]),
                              value: ef.intl.formatToPlainString(em.default.ib7All, { count: n.resultChars ?? 0 }),
                          }),
                          null == n.resultAdded
                              ? null
                              : (0, r.jsx)(o_, {
                                    label: ef.intl.string(em.default["MQYS+n"]),
                                    value: `+${n.resultAdded} \u{2212}${n.resultRemoved ?? 0}`,
                                }),
                          !0 !== n.resultTruncated
                              ? null
                              : (0, r.jsx)(oM, {
                                    label: ef.intl.string(em.default.t7GJFc),
                                    value: (0, r.jsx)(w.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        children: ef.intl.string(em.default.ijkkUh),
                                    }),
                                }),
                          d?.status === "loaded" && null != d.rich.result
                              ? (0, r.jsx)(oF, { entries: d.rich.result })
                              : null,
                      ],
                  })
                : null,
            u.includes("usage") && "model" === n.kind
                ? (0, r.jsxs)(oL, {
                      title: ef.intl.string(em.default.NXmRw1),
                      children: [
                          (0, r.jsxs)(oR, {
                              children: [
                                  null == n.promptTokens
                                      ? null
                                      : (0, r.jsx)(o_, {
                                            label: ef.intl.string(em.default.iq3T1q),
                                            value: ef.intl.formatToPlainString(em.default["6GQUgQ"], {
                                                tokens: ov(n.promptTokens),
                                            }),
                                        }),
                                  null == n.systemTokens
                                      ? null
                                      : (0, r.jsx)(o_, {
                                            label: ef.intl.string(em.default.ZELAZn),
                                            value: ef.intl.formatToPlainString(em.default.Te7mPn, {
                                                system: ov(n.systemTokens),
                                                tools: ov(n.toolsTokens ?? 0),
                                                toolCount: n.tools ?? 0,
                                                messages: ov(n.messagesTokens ?? 0),
                                                messageCount: n.messages ?? 0,
                                            }),
                                        }),
                                  null == n.inputTokens
                                      ? null
                                      : (0, r.jsx)(o_, {
                                            label: ef.intl.string(em.default["LENc/T"]),
                                            value: String(n.inputTokens),
                                        }),
                                  null == n.outputTokens
                                      ? null
                                      : (0, r.jsx)(o_, {
                                            label: ef.intl.string(em.default.ewRHwx),
                                            value: String(n.outputTokens),
                                        }),
                                  null == n.cacheReadTokens
                                      ? null
                                      : (0, r.jsx)(o_, {
                                            label: ef.intl.string(em.default.heVFQD),
                                            value: ef.intl.formatToPlainString(em.default.VO3gdd, {
                                                read: n.cacheReadTokens,
                                                write: n.cacheWriteTokens ?? 0,
                                            }),
                                        }),
                                  null == n.costUsd
                                      ? null
                                      : (0, r.jsx)(o_, {
                                            label: ef.intl.string(em.default.aBw2Vm),
                                            value: `$${n.costUsd.toFixed(4)}`,
                                        }),
                              ],
                          }),
                          (0, r.jsx)(w.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              className: oI.E7,
                              children: ef.intl.string(em.default["foF/Bc"]),
                          }),
                      ],
                  })
                : null,
            u.includes("arguments") || u.includes("result")
                ? (0, r.jsx)(w.E, {
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: oI.E7,
                      children: ef.intl.string(em.default.o24IFK),
                  })
                : null,
            u.includes("diagnostics")
                ? (0, r.jsx)(oD, {
                      title: ef.intl.string(em.default["dix/W4"]),
                      children: (0, r.jsxs)(oR, {
                          children: [
                              null == a
                                  ? null
                                  : (0, r.jsx)(oM, {
                                        label: ef.intl.string(em.default.soPsOJ),
                                        value: (0, r.jsx)(oS.Anchor, {
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
                                  : (0, r.jsx)(o_, {
                                        label: ef.intl.string(em.default.kNZBxr),
                                        value: ef.intl.formatToPlainString(em.default["6LoCUh"], { count: o }),
                                    }),
                              null == n.turnId
                                  ? null
                                  : (0, r.jsx)(o_, { label: ef.intl.string(em.default.bL1r5J), value: n.turnId }),
                              (0, r.jsx)(o_, { label: ef.intl.string(em.default.Ndwr7X), value: n.id }),
                              null == m ? null : (0, r.jsx)(o_, { label: ef.intl.string(em.default.sO8ghW), value: m }),
                              "model" !== n.kind || null == n.stopReason
                                  ? null
                                  : (0, r.jsx)(o_, { label: ef.intl.string(em.default.VfYxPF), value: n.stopReason }),
                              "tool" !== n.kind || null == n.schema || 0 === n.schema.length
                                  ? null
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(w.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                className: oI.Hm,
                                                children: ef.intl.string(em.default.mSm8iy),
                                            }),
                                            n.schema.map((e) =>
                                                (0, r.jsx)(
                                                    o_,
                                                    {
                                                        label: e.name,
                                                        value: e.required
                                                            ? ef.intl.formatToPlainString(em.default["6aSRPA"], {
                                                                  type: e.type,
                                                              })
                                                            : ef.intl.formatToPlainString(em.default.q2B975, {
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
                className: oI.E7,
                children: ef.intl.string(em.default.FloyTQ),
            }),
        ],
    });
}
let oU = { model: oI.WI, subagent: oI.uM, context: oI.eH, tool: oI.pw, delegated: oI.C8 };
function oq(e) {
    let { entries: t } = e,
        n = s.useMemo(
            () =>
                (function (e) {
                    let t = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 },
                        n = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 };
                    for (let l of e) {
                        let e = oj(l);
                        ((t[e] += l.durationMs ?? 0), (n[e] += 1));
                    }
                    return ow.map((e) => ({ category: e, ms: t[e], calls: n[e] }));
                })(t),
            [t],
        ),
        l = n.reduce((e, t) => e + t.ms, 0);
    return (0, r.jsxs)("div", {
        className: oI.M0,
        children: [
            (0, r.jsx)("div", {
                className: oI.pZ,
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
                                            className: `${oI.dL} ${oU[t]}`,
                                            style: { "--custom-conjure-trace-segment-weight": String(n) },
                                        },
                                        t,
                                    );
                          }),
            }),
            (0, r.jsx)("div", {
                className: oI.z4,
                role: "group",
                "aria-label": ef.intl.string(em.default["Gioq+C"]),
                children: ow.map((e) => {
                    let t = n.find((t) => t.category === e),
                        a = t?.ms ?? 0,
                        i = t?.calls ?? 0,
                        s = 0 === l ? 0 : Math.round((a / l) * 100);
                    return (0, r.jsxs)(
                        "div",
                        {
                            className: oI.fI,
                            children: [
                                (0, r.jsx)("span", { className: `${oI.A9} ${oU[e]}`, "aria-hidden": !0 }),
                                (0, r.jsx)(w.E, { variant: "text-xs/normal", color: "text-muted", children: oy(e) }),
                                (0, r.jsx)(w.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: ef.intl.formatToPlainString(em.default["3dQ1ly"], { percent: s }),
                                }),
                                (0, r.jsx)(w.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: ef.intl.formatToPlainString(em.default.Ow0k34, { count: i }),
                                }),
                                0 === a
                                    ? null
                                    : (0, r.jsx)(w.E, {
                                          variant: "text-xs/normal",
                                          color: "text-subtle",
                                          tabularNumbers: !0,
                                          children: ob(a),
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
function o$(e) {
    let { entry: t, selected: n, tabbable: l, onSelect: a, onKeyDown: i, nested: s } = e,
        o = oj(t),
        u = "model" === t.kind ? t.model : t.tool,
        d =
            "model" === t.kind && null != t.promptTokens
                ? ef.intl.formatToPlainString(em.default["6GQUgQ"], { tokens: ov(t.promptTokens) })
                : null != t.durationMs
                  ? ob(t.durationMs)
                  : null;
    return (0, r.jsxs)(k.D, {
        tag: "div",
        role: "option",
        "aria-selected": n,
        tabIndex: l ? 0 : -1,
        id: `trace-${t.id}`,
        className: `${oI.nM} ${s ? oI.A5 : ""} ${"error" === t.status ? oI.Cr : ""} ${n ? oI.CZ : ""}`,
        onKeyDown: i,
        onClick: () => a(t.id),
        children: [
            (0, r.jsxs)("div", {
                className: oI.sU,
                children: [
                    (0, r.jsx)(oP, { status: t.status }),
                    (0, r.jsx)(oN, { category: o }),
                    (0, r.jsx)(w.E, {
                        variant: "text-xs/semibold",
                        color: "text-default",
                        className: oI.G9,
                        children: u,
                    }),
                    null == d
                        ? null
                        : (0, r.jsx)(w.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              tabularNumbers: !0,
                              className: oI.j2,
                              children: d,
                          }),
                ],
            }),
            "tool" === t.kind && null != t.summary
                ? (0, r.jsx)(w.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: oI.Ne,
                      children: t.summary,
                  })
                : null,
            null == t.error
                ? null
                : (0, r.jsx)(w.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: oI.Xu,
                      children: t.error,
                  }),
        ],
    });
}
function oB(e) {
    var t;
    let { projectId: n, query: l } = e,
        a = (0, f.yK)([eL.Ay], () => eL.Ay.getTrace(n), [n]),
        i = (0, f.bG)([eL.Ay], () => eL.Ay.getHistoryState(n, "trace"));
    s.useEffect(() => ox, [n]);
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
            return 0 === t ? 40 : (0, ai.clamp)((e / t) * 100, 25, 75);
        }, []),
        C = s.useCallback((e) => {
            let t = p.current?.offsetHeight ?? 0;
            return 0 === t ? e : (0, ai.clamp)(e, (25 * t) / 100, (75 * t) / 100);
        }, []),
        A = (0, oo.A)({
            resizableDomNodeRef: g,
            orientation: oo.R.VERTICAL_TOP,
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
            null != t && (e.preventDefault(), c((e) => (0, ai.clamp)(e + t, 25, 75)));
        }, []),
        E = s.useCallback(() => {
            (u(null), y(o));
        }, [o, y]),
        I = s.useMemo(() => ok(a, l), [a, l]),
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
                    .map((e, t) => ({ ...e, index: t, entries: ok(e.entries, l) }))
                    .filter((e) => e.entries.length > 0),
            [a, l],
        ),
        P = oC(I, o),
        M = P?.kind === "tool" ? oC(a, P.parentId ?? null) : null,
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
              className: oI.uP,
              ref: p,
              children: (0, r.jsx)(s3, {
                  state: i,
                  emptyTitle: ef.intl.string(em.default["Tpvy/s"]),
                  emptyBody: ef.intl.string(em.default.J0WcVA),
              }),
          })
        : (0, r.jsxs)("div", {
              className: `${oI.uP} ${m ? oI.F4 : ""}`,
              ref: p,
              children: [
                  (0, r.jsxs)("div", {
                      className: oI.DK,
                      children: [
                          (0, r.jsx)(oq, { entries: a }),
                          (0, r.jsx)(s9, { state: i }),
                          0 === I.length
                              ? (0, r.jsx)("div", {
                                    className: oI.Ie,
                                    children: (0, r.jsx)(w.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children: ef.intl.string(em.default.tDB4lC),
                                    }),
                                })
                              : (0, r.jsxs)(n7.Ch, {
                                    ref: x,
                                    className: oI.Ns,
                                    children: [
                                        (0, r.jsx)(s5, { state: i }),
                                        (0, r.jsx)("div", {
                                            ref: b,
                                            id: v,
                                            role: "listbox",
                                            "aria-label": ef.intl.string(em.default.SGbiNE),
                                            className: oI.p_,
                                            children: T.map((e) => {
                                                let t = od(e.startedAt),
                                                    n = ef.intl.formatToPlainString(em.default.gPwGYA, {
                                                        number: e.index + 1,
                                                    });
                                                return (0, r.jsxs)(
                                                    "div",
                                                    {
                                                        role: "presentation",
                                                        children: [
                                                            (0, r.jsxs)("div", {
                                                                className: oI.mf,
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
                                                                              children: ob(e.spanMs),
                                                                          }),
                                                                ],
                                                            }),
                                                            (0, r.jsx)("div", {
                                                                role: "group",
                                                                "aria-label": n,
                                                                className: oI.M5,
                                                                children: e.entries.map((e) =>
                                                                    (0, r.jsx)(
                                                                        o$,
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
                                    "aria-label": ef.intl.string(em.default.DtSORy),
                                    "aria-valuenow": Math.round(d),
                                    "aria-valuemin": 25,
                                    "aria-valuemax": 75,
                                    tabIndex: 0,
                                    className: oI.b1,
                                    onPointerDown: N,
                                    onKeyDown: S,
                                }),
                                (0, r.jsx)("div", {
                                    ref: g,
                                    className: oI.Or,
                                    style: { "--custom-conjure-trace-detail-share": String(d) },
                                    children: (0, r.jsx)(oG, {
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
function oH(e) {
    let { projectId: t, query: n, onQueryChange: l } = e,
        a = (0, f.yK)([eL.Ay], () => eL.Ay.getTrace(t), [t]),
        i = s.useRef(null),
        o = s.useCallback(() => {
            ec(
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
                className: oI.ED,
                children: (0, r.jsx)(s1.I, {
                    query: n,
                    onChange: l,
                    onClear: () => l(""),
                    size: "sm",
                    placeholder: ef.intl.string(em.default["EY8/Mt"]),
                    "aria-label": ef.intl.string(em.default["EY8/Mt"]),
                }),
            }),
            (0, r.jsx)(el.Y, {
                targetElementRef: i,
                position: "bottom",
                align: "right",
                animation: el.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, r.jsx)(ea.W, {
                        "data-menu-migrated": !0,
                        navId: `conjure-trace-actions-${t}`,
                        "aria-label": ef.intl.string(ef.t.ogxXGq),
                        onClose: n,
                        onSelect: n,
                        children: (0, r.jsx)(ei.rX, {
                            children: (0, r.jsx)(ei.Dr, {
                                id: "export",
                                label: ef.intl.string(em.default.WXrPRZ),
                                disabled: 0 === a.length,
                                action: o,
                            }),
                        }),
                    });
                },
                children: (e, t) => {
                    let { isShown: n } = t;
                    return (0, r.jsx)(ne.K, {
                        ...e,
                        buttonRef: i,
                        icon: nt.MoreHorizontalIcon,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": ef.intl.string(ef.t["UKOtz+"]),
                        "aria-haspopup": "menu",
                        "aria-expanded": n,
                    });
                },
            }),
        ],
    });
}
var oV = n(592465);
function oW(e) {
    let { projectId: t, onClose: n } = e,
        [l, a] = s.useState("logs"),
        [i, o] = s.useState(""),
        u = (0, f.bG)([sv.A], () => sv.A.isDeveloper),
        d = (0, f.bG)([sI], () => sI.getStatus(t), [t]),
        c = (0, f.bG)([sI], () => sI.getFetchState(t), [t]);
    s.useEffect(() => {
        (0, es.R7)(t);
    }, [t]);
    let m = s.useCallback(() => (0, es.R7)(t), [t]),
        h = s.useCallback(() => {
            (0, na.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: sI.getStatus(t),
                        last_turn_usage: sI.getLastTurnUsage(t),
                        last_compaction: sI.getLastCompaction(t),
                        last_compaction_decline: sI.getLastCompactionDecline(t),
                        model_calls: sI.getModelCalls(t),
                        logs: eL.Ay.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, v.P)((0, y.o)(ef.intl.string(em.default.wI6fhl), j.Ck.SUCCESS)),
            );
        }, [t]),
        p = ef.intl.string(em.default["Q4FN+H"]);
    return (0, r.jsxs)("section", {
        className: oV.nd,
        "aria-label": p,
        children: [
            (0, r.jsxs)(n4.Ay, {
                "aria-label": p,
                toolbar: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(n4.Ay.Icon, {
                            icon: sx.CopyIcon,
                            tooltip: ef.intl.string(em.default.TkHqy2),
                            onClick: h,
                        }),
                        (0, r.jsx)(n4.Ay.Icon, { icon: O.P, tooltip: ef.intl.string(ef.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, r.jsx)(n4.Ay.ChannelIcon, { icon: I.BugIcon, "aria-hidden": !0 }),
                    (0, r.jsx)(n4.Ay.Title, { children: p }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: oV.rf,
                children: [
                    (0, r.jsxs)(sb.V, {
                        selectedItem: l,
                        type: "top",
                        onItemSelect: (e) => a(e),
                        "aria-label": ef.intl.string(em.default.RvvWIh),
                        className: oV.vR,
                        children: [
                            (0, r.jsx)(sb.V.Item, { id: "logs", children: ef.intl.string(em.default["+VRYCm"]) }),
                            (0, r.jsx)(sb.V.Item, { id: "worker", children: ef.intl.string(em.default["50D0FZ"]) }),
                            (0, r.jsx)(sb.V.Item, { id: "agent", children: ef.intl.string(em.default.UkbTK1) }),
                            u
                                ? (0, r.jsx)(sb.V.Item, { id: "trace", children: ef.intl.string(em.default.O6nNjP) })
                                : null,
                        ],
                    }),
                    "logs" === l
                        ? (0, r.jsx)(s8, { projectId: t })
                        : "worker" === l
                          ? (0, r.jsx)(os, { status: d, fetchState: c, onRefresh: m })
                          : "trace" === l && u
                            ? (0, r.jsxs)("div", {
                                  className: oV.uP,
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: oV.XH,
                                          children: (0, r.jsx)(oH, { projectId: t, query: i, onQueryChange: o }),
                                      }),
                                      (0, r.jsx)(oB, { projectId: t, query: i }),
                                  ],
                              })
                            : (0, r.jsx)(s0, { projectId: t, status: d, fetchState: c, onRefresh: m, traceVisible: u }),
                ],
            }),
        ],
    });
}
var oK = n(333007),
    oX = n(365912),
    oY = n(775121),
    oJ = n(873715);
function oQ(e) {
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
let oZ = Object.freeze({ x: -1, y: -1 });
function o0(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = oQ(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var o2 = n(470779);
function o1(e) {
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
        } = iK({ projectId: t, surface: "design", onUploadFile: h }),
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
        className: u()(o2.M0, { [o2.ho]: A && !f, [o2.ET]: f }),
        style: { left: _, top: R },
        "data-testid": "conjure-design-compose-bar",
        children: [
            (0, r.jsx)("input", {
                ref: j,
                type: "file",
                multiple: !0,
                className: o2.Fg,
                tabIndex: -1,
                "aria-hidden": !0,
                onChange: (e) => {
                    (g(Array.from(e.target.files ?? [])), (e.target.value = ""));
                },
            }),
            (0, r.jsx)(C.m, {
                position: "bottom",
                text: ef.intl.string(em.default.lgvqSB),
                ariaHidden: !0,
                children: (0, r.jsx)("button", {
                    type: "button",
                    className: o2.tY,
                    onClick: () => j.current?.click(),
                    "aria-label": ef.intl.string(em.default.lgvqSB),
                    children: (0, r.jsx)(er.H, { size: "custom", color: "currentColor", className: o2.WW }),
                }),
            }),
            (0, r.jsx)(lC.y, {
                autoFocus: !0,
                rows: 1,
                className: o2.hF,
                value: i,
                placeholder: "" === a ? ef.intl.string(em.default.MPPV1Q) : `Edit ${a}`,
                "aria-label": ef.intl.string(em.default.KCYqWL),
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
                      className: o2.ZO,
                      children: p.map((e) => (0, r.jsx)(iX, { draft: e, onRemove: b }, e.localId)),
                  })
                : null,
        ],
    });
}
var o6 = n(192888);
function o9(e, t) {
    return (0, o6.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(o0, () => ({ status: "failed" }));
}
var o3 = n(108308);
let o5 = { x: 25, y: 21 };
function o4(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function o7(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function o8(e, t, n, l) {
    let a = o7(e, n, l);
    return { x: a.left + a.width * t.x, y: a.top + a.height * t.y };
}
function ue(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function ut(e) {
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
function un(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: a, toggleRef: i } = e,
        o = null != n && n === l ? t : null,
        { active: u, annotations: d } = ts(o),
        c = (0, tk.Zv)(o),
        m = (0, eN.useHasAnyModalOpen)(),
        h = (0, f.bG)([tX.default], () => tX.default.getCurrentUser()),
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
        if (null != K) return () => lX(K, "design");
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
                x((t) => (o4(t, e) ? t : e));
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
                (0, oJ.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                    (t) => {
                        if (!e) return;
                        j(!1);
                        let n = "completed" === t.status ? ut(t.response) : null;
                        null == n ? C(!0) : (v(n), ta(o, { url: n.url, title: n.title, viewport: n.viewport }));
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
        if (o4(X.current, g)) return;
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
                    (0, oJ.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !Z.current) return;
                        let l = ut(e.response);
                        null != l && (v(l), ta(o, { url: l.url, title: l.title, viewport: l.viewport }));
                        let a = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let i = oQ(e.element);
                            null != i && a.set(l.id, i);
                        }),
                            (n = tt(o)).active &&
                                0 !== a.size &&
                                tn(o, {
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
                    o9(n, t).then((t) => {
                        if (((Q.current = !1), Z.current)) {
                            if ("picked" !== t.status || uo(t.target, ei.current.rect, ei.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? N(null)
                                    : "unsupported" === t.status && O(!0);
                            else {
                                let e = e1(t.target);
                                (L((t) => (us(t, e) ? t : e)),
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
            let e = setTimeout(() => U(null), ui);
            return () => clearTimeout(e);
        }, [G]));
    let en = null == b || null == g || b.viewport.width < 1 ? 1 : g.width / b.viewport.width,
        el = null != b || k,
        ea = s.useMemo(() => b?.elements ?? [], [b]),
        ei = s.useRef({ rect: null, scale: 1 });
    s.useLayoutEffect(() => {
        ei.current = { rect: g, scale: en };
    }, [g, en]);
    let er = s.useCallback(
            (e, t, n) => {
                null != o &&
                    (lX(o, "design"),
                    V(null),
                    (q.current = !1),
                    z({ projectId: o, target: e, anchor: t, draft: "", at: n, label: e1(e) }));
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
                    (Math.abs(e.clientX - F.at.x) > ur || Math.abs(e.clientY - F.at.y) > ur) && (q.current = !0);
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
                        n = null != e && uo(e, g, en) ? null : e;
                    if (null != n) {
                        let e = e1(n);
                        L((t) => (us(t, e) ? t : e));
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
        ec = null == H ? null : d.find((e) => e.id === H.id),
        eh = W && (E || F?.target.marker != null || ec?.target.marker != null);
    s.useEffect(() => {
        if (eh)
            return () => {
                let e = a();
                null != e && o9(e, oZ);
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
                er(
                    A,
                    (function (e, t, n) {
                        let { x: l, y: a, width: i, height: r } = e.rect;
                        return i < 1 || r < 1
                            ? e0
                            : { x: Math.min(1, Math.max(0, (t - l) / i)), y: Math.min(1, Math.max(0, (n - a) / r)) };
                    })(A, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [A, g, eo, F, H, er, et],
        ),
        ex = s.useCallback(() => {
            null != o && (N(null), tl(o));
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
                oY.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        oY.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), ev.current());
        }
        function t(e) {
            let t = e.target;
            (0, tL.vq)(t) &&
                ej.current?.contains(t) !== !0 &&
                i?.current?.contains(t) !== !0 &&
                !(function (e) {
                    try {
                        return ((0, oX.J$)(e), !0);
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
                    er(A, e0, { x: (g?.left ?? 0) + A.rect.x * en, y: (g?.top ?? 0) + A.rect.y * en }));
            },
            [o, F, H, ea, A, er, eb, g, en],
        ),
        ek = s.useCallback(
            (e) => {
                null == o ||
                    null == F ||
                    ((e2(F.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, es.dv)(
                            o,
                            (function (e, t) {
                                let { kind: n, name: l } = e1(e),
                                    a = [n, l].filter((e) => "" !== e).join(": ");
                                return `${e3}${a}${e5}${e9(e)}
${t.trim()}`;
                            })(F.target, F.draft),
                            e,
                        ),
                        et(),
                        N(null)));
            },
            [o, F, et],
        ),
        eC = s.useCallback((e) => (null == o ? Promise.reject(Error("no project")) : (0, es.vX)(o, e)), [o]),
        eA = s.useCallback(() => {
            if (null != o && null != H && null != p && e2(H.draft)) {
                var e, t;
                let n, l;
                ((e = H.id),
                    (t = H.draft.trim()),
                    null != (l = (n = tt(o)).annotations.find((t) => t.id === e)) &&
                        ti(l, p) &&
                        tn(o, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    V({ ...H, editing: !1 }));
            }
        }, [o, H, p]),
        eS = s.useCallback(() => {
            if (null != o && null != H && null != p) {
                var e;
                let t, n;
                ((e = H.id),
                    null != (n = (t = tt(o)).annotations.find((t) => t.id === e)) &&
                        ti(n, p) &&
                        tn(o, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    V(null));
            }
        }, [o, H, p]),
        eE = u
            ? y
                ? ef.intl.string(em.default["Eb/YV9"])
                : k
                  ? ef.intl.string(em.default.FD30bh)
                  : ef.intl.formatToPlainString(em.default.dTSqLF, { count: d.length })
            : "",
        eI = W && null != g,
        eT = E && null == H,
        eP = F?.target ?? ec?.target ?? null,
        eM = F ?? G,
        e_ = F ?? (G?.instant === !0 ? null : G),
        eR =
            null != ec && null != g
                ? (function (e, t) {
                      let { left: n, top: l } = ue(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(o8(ec.target, ec.anchor, g, en), g)
                : null;
    return (
        s.useEffect(() => {
            let e = a();
            if (ec?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = ec;
            o9(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [ec, a]),
        (0, oK.createPortal)(
            (0, r.jsxs)("div", {
                ref: ej,
                className: o3.Li,
                children: [
                    (0, r.jsx)("div", {
                        className: o3.y4,
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-design-announcer",
                        children: eE,
                    }),
                    eI
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)("div", {
                                      className: o3.MT,
                                      style: { left: g.left, top: g.top, width: g.width, height: g.height },
                                      "data-plain-cursor": eT ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": ef.intl.string(em.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: ed,
                                      onMouseLeave: ep,
                                      onClick: eg,
                                      onKeyDown: ew,
                                  }),
                                  null != A && null == A.marker && null == F && null == H
                                      ? (0, r.jsx)(uu, { box: o7(A, g, en) })
                                      : null,
                                  (0, r.jsx)("div", {
                                      ref: T,
                                      className: o3.aZ,
                                      children: (0, r.jsx)("div", {
                                          className: o3.xz,
                                          "data-shown": null != A && null == H && null == F ? "" : void 0,
                                          "data-instant": $ ? "" : void 0,
                                          children: (0, r.jsxs)(w.E, {
                                              variant: "text-xs/medium",
                                              className: o3.Ux,
                                              children: [
                                                  null == _
                                                      ? null
                                                      : (0, r.jsx)("span", { className: o3.Tl, children: _.kind }),
                                                  null == _ || "" === _.name
                                                      ? null
                                                      : (0, r.jsxs)("span", {
                                                            className: o3.kh,
                                                            children: [" ", _.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, r.jsx)("div", {
                                      ref: P,
                                      className: o3.Y,
                                      children: eT ? (0, r.jsx)("div", { className: o3.u }) : null,
                                  }),
                                  null == e_
                                      ? null
                                      : (0, r.jsx)("div", {
                                            className: o3.aZ,
                                            style: {
                                                transform: `translate3d(${e_.at.x + 20}px, ${e_.at.y + 20}px, 0)`,
                                            },
                                            children: (0, r.jsx)("div", {
                                                className: o3.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == F ? "" : void 0,
                                                children: (0, r.jsxs)(w.E, {
                                                    variant: "text-xs/medium",
                                                    className: o3.Ux,
                                                    children: [
                                                        (0, r.jsx)("span", {
                                                            className: o3.Tl,
                                                            children: e_.label.kind,
                                                        }),
                                                        "" === e_.label.name
                                                            ? null
                                                            : (0, r.jsxs)("span", {
                                                                  className: o3.kh,
                                                                  children: [" ", e_.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eP && null == eP.marker
                                      ? (0, r.jsx)("div", { className: o3.D0, style: o7(eP, g, en), "aria-hidden": !0 })
                                      : null,
                                  d.map((e, t) => {
                                      let n = o8(e.target, e.anchor, g, en),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, r.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: o3.xL,
                                              style: { ...ue(n, g), width: 24, height: 24 },
                                              "aria-label": ef.intl.formatToPlainString(em.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: e6(e.target),
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
                                              children: (0, r.jsx)(ul, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eM || null == o
                                      ? null
                                      : (0, r.jsx)(o1, {
                                            projectId: o,
                                            at: { x: eM.at.x + 20, y: eM.at.y + 20 },
                                            bounds: g,
                                            kind: eM.label.kind,
                                            value: eM.draft,
                                            canSubmit: null != F && e2(eM.draft),
                                            onChange: (e) => {
                                                null != F && z({ ...F, draft: e });
                                            },
                                            onSubmit: ek,
                                            onDismiss: et,
                                            onUploadFile: eC,
                                            closing: null == F,
                                        }),
                                  null != ec && null != H && null != eR
                                      ? (0, r.jsxs)(ua, {
                                            point: eR,
                                            frame: g,
                                            authorId: ec.authorId,
                                            title: e6(ec.target),
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
                                                          label: ef.intl.string(em.default.KCYqWL),
                                                          hideLabel: !0,
                                                          value: H.draft,
                                                          maxLength: 1e3,
                                                          rows: 3,
                                                          onChange: (e) => V({ ...H, draft: e }),
                                                          onKeyDown: (e) => {
                                                              "Enter" !== e.key ||
                                                                  e.shiftKey ||
                                                                  (e.preventDefault(), eA());
                                                          },
                                                      })
                                                    : (0, r.jsx)(w.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-default",
                                                          className: o3.aC,
                                                          children: ec.comment,
                                                      }),
                                                ti(ec, p)
                                                    ? (0, r.jsx)("div", {
                                                          className: o3.eB,
                                                          children: H.confirmingRemove
                                                              ? (0, r.jsxs)(r.Fragment, {
                                                                    children: [
                                                                        (0, r.jsx)(w.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: o3.nv,
                                                                            children: ef.intl.string(em.default.wOHvts),
                                                                        }),
                                                                        (0, r.jsx)(S.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: ef.intl.string(em.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                V({ ...H, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, r.jsx)(S.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: ef.intl.string(em.default.friIzR),
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
                                                                            text: ef.intl.string(em.default.friIzR),
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
                                                                                  disabled: !e2(H.draft),
                                                                                  text: ef.intl.string(
                                                                                      em.default.iicRP9,
                                                                                  ),
                                                                                  onClick: eA,
                                                                              })
                                                                            : (0, r.jsx)(S.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: ef.intl.string(
                                                                                      em.default["6eW9lg"],
                                                                                  ),
                                                                                  onClick: () =>
                                                                                      V({
                                                                                          ...H,
                                                                                          editing: !0,
                                                                                          draft: ec.comment,
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
function ul(e) {
    let { authorId: t } = e,
        n = (0, f.bG)([tX.default], () => tX.default.getUser(t), [t]);
    return (0, r.jsx)(aB.eu, {
        src: null == n ? null : aW.Ay.getUserAvatarURL(n),
        size: aH._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function ua(e) {
    let t,
        n,
        l,
        a,
        i,
        o,
        { point: u, frame: d, authorId: c, title: m, testId: f, onDismiss: h, onMouseLeave: p, children: g } = e,
        x = s.useRef(null),
        b = s.useRef(null),
        [v, y] = s.useState(o5);
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
        className: o3.Nr,
        style: N,
        "data-testid": f,
        onMouseLeave: p,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, r.jsxs)("div", {
                className: o3.MY,
                children: [
                    (0, r.jsx)("span", { ref: b, className: o3.ip, children: (0, r.jsx)(ul, { authorId: c }) }),
                    (0, r.jsx)(w.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: o3.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: o3.zI, children: g }),
        ],
    });
}
let ui = 300,
    ur = 2;
function us(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function uo(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        a = t.height / n;
    return !(l < 1) && !(a < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * a;
}
function uu(e) {
    let { box: t } = e;
    return (0, r.jsx)("div", { className: o3.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var ud = n(659723),
    uc = n(697744),
    um = n(130324);
function uf(e) {
    let t = (0, uc.c)(),
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
function uh(e) {
    let { className: t } = e,
        { Component: n, events: l } = uf(3e4);
    return (0, r.jsxs)("div", {
        className: t,
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, r.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, r.jsx)(w.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: um.o,
                children: ef.intl.string(em.default.AyiQEp),
            }),
        ],
    });
}
var up = n(251363),
    ug = n(944142),
    ux = n(532247),
    ub = n(501628);
function uv(e) {
    let { progress: t } = e,
        { Component: n } = uf(1500),
        l = J.Q_.useSetting();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, r.jsx)(w.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, r.jsx)("div", {
                className: ub.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, r.jsx)(
                        "span",
                        {
                            className: ub.PM,
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
function uy(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: a } = e,
        i = null != t && null != n && n === l,
        o = (0, f.bG)([ug.A], () => (i ? ug.A.getLiveReload(t) : null), [i, t]),
        u = (0, V.A)(n, a)?.id ?? null,
        d = o?.phase ?? null,
        c = (function (e, t) {
            let n = (0, ux.dv)(e),
                [l, a] = s.useState(null),
                [i, r] = s.useState(n);
            i !== n && (r(n), a(null == n ? (0, ux.QP)(e, i) : null));
            let o = (0, f.bG)(
                    [tM.A],
                    () => {
                        let e = tM.A.getFrame(t);
                        return (0, tG.x1)(e) && e.data.proxyTicketRefreshing;
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
                        null != n.target && n.target === (0, up.o)(null, t) && e();
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
        m = (0, ux.h_)(d, o?.step ?? null, c);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(A.A, { tag: "div", role: "status", "aria-live": "polite", children: m?.title ?? "" }),
            null != m
                ? (0, r.jsx)("div", {
                      className: ub.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, r.jsx)(uv, { progress: m }),
                  })
                : null,
        ],
    });
}
var uj = n(343030),
    uw = n(317608),
    uk = n(206600),
    uC = n(742023),
    uA = n(347927);
function uN(e) {
    let { title: t, body: n, wide: l = !1, children: a } = e;
    return (0, r.jsxs)("div", {
        className: u()(uA.Bf, l && uA.Qx),
        children: [
            (0, r.jsxs)("div", {
                className: uA.Ux,
                children: [
                    (0, r.jsx)(P.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, r.jsx)(w.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                ],
            }),
            a,
        ],
    });
}
var uS = n(957272);
function uE(e) {
    let { applicationId: t, surface: n, frameOverlay: l } = e,
        { frame: a, state: i } = (0, uk.A)({ applicationId: t, surface: n }),
        o = (0, tG.VA)(t, n);
    switch (
        (s.useEffect(
            () => (
                !(function (e) {
                    let t = tM.A.getFrame(e);
                    if (null == t || t_.A.getWindowOpen(ew.MLl.ACTIVITY_POPOUT)) return;
                    let n = tM.A.getMainFrame()?.id === e;
                    t.intent === tG.sV.MAIN
                        ? (n || H.A.promoteFrame(e), H.A.resetFrameLayoutModes(e))
                        : n && H.A.clearMainFrameSlot();
                })(o),
                () => {
                    let e;
                    null != (e = tM.A.getFrame(o)) &&
                        ((0, tG.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        uC.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === tG.sV.INLINE && H.A.promoteFrame(o),
                              H.A.updateFrameLayoutMode({ frameId: o, layoutMode: tG.y0.PIP }))
                            : e.intent === tG.sV.MAIN && H.A.demoteMainFrame(o));
                }
            ),
            [o],
        ),
        i)
    ) {
        case uk.n.Launched:
            return (0, r.jsx)(uw.A, { frameId: a.id, level: uj.A.WithinAppContent, className: uS.Z7, overlay: l });
        case uk.n.RenderingElsewhere:
            return (0, r.jsx)("div", {
                className: uS.qs,
                children: (0, r.jsx)(uN, {
                    title: ef.intl.string(em.default["9kpdo7"]),
                    body: ef.intl.string(em.default.iIA8Nj),
                }),
            });
        case uk.n.NoApplication:
            return (0, r.jsx)(uh, { className: uS.qs });
        case uk.n.DoesNotSupportSurface:
            return (0, r.jsx)("div", {
                className: uS.qs,
                children: (0, r.jsx)(uN, {
                    title: ef.intl.string(em.default["7k4GyN"]),
                    body: ef.intl.string(em.default.zdIy3R),
                }),
            });
        case uk.n.Error:
            return (0, r.jsxs)("div", {
                className: uS.qs,
                children: [
                    (0, r.jsx)(P.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: ef.intl.string(em.default.lTPbnG),
                    }),
                    (0, r.jsx)(w.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: uS.tj,
                        children: ef.intl.string(em.default.e6GiAZ),
                    }),
                ],
            });
        case uk.n.AwaitingLaunch:
        case uk.n.Loading:
            return (0, r.jsx)("div", { className: uS.qs, children: (0, r.jsx)(N.y, {}) });
    }
}
var uI = n(334738),
    uT = n(688438),
    uP = n(355622),
    uM = n(531685),
    u_ = n(365971),
    uR = n(703462);
function uL(e) {
    let { message: t } = e;
    return (0, r.jsxs)("div", {
        className: uR.f,
        children: [
            (0, r.jsx)(aM.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, r.jsx)(w.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function uD() {
    return (0, r.jsx)("div", { className: uR.f, children: (0, r.jsx)(N.y, {}) });
}
function uO(e) {
    let t,
        n,
        { previewApplicationId: l } = e,
        { data: a, isLoading: i } = (0, q.YY)(l),
        o = a?.bot?.id ?? null,
        u = (0, f.bG)([Q.A], () => {
            if (null == o) return null;
            let e = Q.A.getDMFromUserId(o);
            return null != e ? Q.A.getChannel(e) : null;
        });
    ((t = u?.id ?? null),
        s.useEffect(() => {
            null != t && nU.A.preload(ew.ME, t);
        }, [t]),
        (n = (0, f.bG)([uM.A], () => uM.A.isFocused())),
        s.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, u_.Xg)();
            return (
                (0, uI.yl)(t, e),
                () => {
                    (0, uI.dm)(t, e);
                }
            );
        }, [t, n]));
    let [d, c] = s.useState(null),
        m = null != o && d === o;
    return (s.useEffect(() => {
        if (null == o || null != u) return;
        let e = !1;
        return (
            nU.A.openPrivateChannel({ recipientIds: o, navigateToChannel: !1 }).catch(() => {
                e || c(o);
            }),
            () => {
                e = !0;
            }
        );
    }, [o, u]),
    i && null == a)
        ? (0, r.jsx)(uD, {})
        : null == o || m
          ? (0, r.jsx)(uL, { message: ef.intl.string(em.default["VP/O8s"]) })
          : null == u
            ? (0, r.jsx)(uD, {})
            : (0, r.jsx)("div", {
                  className: uR.g,
                  children: (0, r.jsx)(uT.A, { channel: u, guild: null, chatInputType: uP.oU.SIDEBAR }, u.id),
              });
}
var uF = n(887909),
    uz = n(570962),
    uG = n(998475);
function uU(e) {
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
    } = (0, uF.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, r.jsxs)("section", {
        className: uG.Nr,
        "aria-label": t,
        children: [
            (0, r.jsx)("div", {
                className: uG.rf,
                children: (0, r.jsx)(uz.A, {
                    obscured: !0 === f,
                    children: (0, r.jsxs)("div", {
                        className: uG.Gq,
                        children: [
                            null != n
                                ? (0, r.jsxs)("div", {
                                      className: uG.z3,
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
                                className: u()(uG.Qs, c ? uG.cw : null, m ? uG.pN : null),
                                children: [i, null == o ? d : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != s && s.length > 0
                ? (0, r.jsx)("div", {
                      className: uG.o1,
                      children: s.map((e, t) => (0, r.jsx)(S.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var uq = n(409478),
    u$ = n(652227);
function uB(e) {
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
        m = (0, V.A)(t, l),
        { data: f, isLoading: h } = (0, q.YY)(t ?? void 0);
    if (
        (s.useEffect(() => {
            i?.type === "permissions" && null != m && (0, nv.A)().leaveFrame(m.id);
        }, [m, i?.type]),
        i?.type === "checking")
    )
        return (0, r.jsx)("div", { className: u$.q, children: (0, r.jsx)(N.y, {}) });
    if (i?.type === "permissions")
        return (0, r.jsx)("div", {
            className: u$.q,
            children: null == i.authorizeProps ? (0, r.jsx)(N.y, {}) : (0, r.jsx)(uU, { ...i.authorizeProps }),
        });
    if (!a) return (0, r.jsx)(uh, { className: u$.q });
    if (null == t) return null;
    if (h && null == f) return (0, r.jsx)("div", { className: u$.q, children: (0, r.jsx)(N.y, {}) });
    let p = o.showModeSwitch && null != u ? { role: "tabpanel", id: (0, t$.z3)(u), "aria-label": (0, t$.kZ)(u) } : {};
    return (0, r.jsxs)("div", {
        className: u$.R,
        ...p,
        children: [
            (0, tA.yf)(o, u) ? (0, r.jsx)(uE, { applicationId: t, surface: l, frameOverlay: c }) : null,
            "widget" === u && null != d
                ? "unavailable-authorization-revoked" === o.profileState
                    ? (0, r.jsx)("div", {
                          className: u$.q,
                          children: (0, r.jsx)(uN, {
                              wide: !0,
                              title: ef.intl.string(em.default["08U+YO"]),
                              body: ef.intl.string(em.default.pKBfrc),
                          }),
                      })
                    : (0, r.jsx)(uq.A, { applicationId: d })
                : null,
            "bot" === u && null != n ? (0, r.jsx)(uO, { previewApplicationId: n }) : null,
        ],
    });
}
var uH = n(175841),
    uV = n(750506),
    uW = n(867193),
    uK = n(417760);
function uX(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function uY(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function uJ(e) {
    let { phase: t, projectId: n, onOpenPublishedApp: l, compact: a } = e,
        { stop: i, stopping: o } = (function (e) {
            let t = (0, f.bG)([tJ.Ay], () => null != e && tJ.Ay.isThinking(e)),
                [n, l] = s.useState(!1),
                [a, i] = s.useState(t);
            (t !== a && (i(t), t || l(!1)),
                s.useEffect(() => {
                    if (!n) return;
                    let e = setTimeout(() => l(!1), 5e3);
                    return () => clearTimeout(e);
                }, [n]));
            let r = s.useCallback(() => {
                null != e && (l(!0), (0, es.fu)(e));
            }, [e]);
            return { stop: t ? r : null, stopping: n };
        })(n),
        d = (0, tk.CU)(n),
        c = "controlling" === t,
        m = ef.intl.string(c ? (d ? em.default["VJW/5P"] : em.default["+hD2Iz"]) : em.default["h+i1r9"]),
        h =
            null != l
                ? (0, r.jsx)(S.$, {
                      variant: "overlay-secondary",
                      size: "sm",
                      text: ef.intl.string(em.default["1NcO7H"]),
                      onClick: l,
                  })
                : null,
        p =
            null != i
                ? (0, r.jsx)(S.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: ef.intl.string(em.default.oU59sU),
                      loading: o,
                      onClick: i,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return a
        ? (0, r.jsxs)("div", {
              className: u()(uK.M0, uK.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  c
                      ? (0, r.jsx)(r5.i, { size: 12, color: "currentColor" })
                      : (0, r.jsx)(uH.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, r.jsx)(w.E, { variant: "text-sm/semibold", color: "none", className: uK.ID, children: m }),
                  c ? (0, r.jsx)(A.A, { children: ef.intl.string(em.default.fg1sor) }) : null,
                  c ? (0, r.jsxs)("div", { className: uK.lC, children: [h, p] }) : null,
              ],
          })
        : (0, r.jsxs)("div", {
              className: uK.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, r.jsxs)("div", {
                      className: uK.sp,
                      children: [
                          (0, r.jsx)(uH.SparklesIcon, { size: "sm", color: "currentColor" }),
                          c ? (0, r.jsx)(r5.i, { size: 12, color: "currentColor" }) : null,
                          (0, r.jsxs)("div", {
                              className: uK.f4,
                              children: [
                                  (0, r.jsx)(w.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: uK.w9,
                                      children: m,
                                  }),
                                  c
                                      ? (0, r.jsx)(w.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: uK.Rb,
                                            children: ef.intl.string(em.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  c ? (0, r.jsxs)("div", { className: uK.lC, children: [h, p] }) : null,
              ],
          });
}
function uQ(e) {
    let {
            projectId: t,
            applicationId: n,
            previewApplicationId: l,
            resolveTarget: a,
            frameId: i,
            onOpenPublishedApp: o = null,
        } = e,
        u = (0, tk.Zv)(null != n && n === l ? t : null),
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
        c = (0, eN.useHasAnyModalOpen)(),
        m = tz(i);
    s.useEffect(() => {
        u &&
            m &&
            null != i &&
            (function (e) {
                if (!tO(e)) return;
                let t = tD(e);
                null != t && (0, tR.sP)(t);
            })(i);
    }, [u, m, i]);
    let [f, h] = s.useState(null),
        [p, g] = s.useState(null),
        [x, b] = s.useState(null),
        v = "idle" !== d;
    s.useEffect(() => {
        if (!v) return;
        function e() {
            let e = uX(a());
            h((t) => (uY(t, e) ? t : e));
            let t = null == p ? null : uX(p);
            (b((e) => (uY(e, t) ? e : t)), null != p && (0, uW.C)(p.getBoundingClientRect().height));
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
                    null != p && (0, uW.C)(0));
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
            let [e] = s.useContext(uV.uY),
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
                      className: uK.D,
                      "data-phase": d,
                      children: (0, r.jsx)("div", {
                          className: uK.QF,
                          children: (0, r.jsx)(uJ, { phase: d, projectId: t, onOpenPublishedApp: o, compact: w }),
                      }),
                  })
                : null,
            (0, oK.createPortal)(
                (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)("div", {
                        className: uK.y4,
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-control-announcer",
                        children:
                            "controlling" === d
                                ? ef.intl.string(em.default.oWcemF)
                                : "handoff" === d
                                  ? ef.intl.string(em.default["h+i1r9"])
                                  : "",
                    }),
                }),
                document.body,
            ),
            j
                ? (0, oK.createPortal)(
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", {
                                  className: uK.ys,
                                  style: C,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, r.jsx)("div", {
                                  className: uK.om,
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
var uZ = n(399503),
    u0 = n(853555),
    u2 = n(591335),
    u1 = n(873727),
    u6 = n(147248),
    u9 = n(418842),
    u3 = n(363195),
    u5 = n(818023);
let u4 = null;
var u7 = n(602853),
    u8 = n(517461),
    de = n(487336);
function dt(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: a } = e,
        i = (0, u7.r)(z.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = s.useRef(null),
        [u, d] = (0, u8.V)("VibegrationsChatSidebarWidth", 460),
        [c, m] = s.useState(u ?? 460),
        f = (0, ai.clamp)(c, 360, n);
    s.useLayoutEffect(() => {
        l(t ? f + i : 0);
    }, [f, t, i, l]);
    let h = (0, oo.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: m,
            onElementResizeEnd: d,
            orientation: oo.R.HORIZONTAL_LEFT,
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
        className: de.pz,
        hidden: !t,
        children: [
            (0, r.jsx)("div", { className: de.Di, onPointerDown: p }),
            (0, r.jsx)("div", { ref: o, className: de.kL, style: { width: f }, children: a }),
        ],
    });
}
var dn = n(541940);
function dl(e) {
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
        b = (0, V.A)(l, i),
        v = b?.id ?? null;
    (!(function (e, t) {
        let n = (0, f.bG)([u3.A], () => (0, u1.x4)(u3.A.theme)),
            l = (0, f.bG)([u6.A], () => u6.A.gradientPreset),
            {
                reducedMotion: a,
                fontScale: i,
                highContrast: r,
                forcedColors: o,
                underlineLinks: u,
            } = (0, f.cf)([iU.Ay], () => ({
                reducedMotion: iU.Ay.useReducedMotion,
                fontScale: (0, u1.U0)(),
                highContrast: iU.Ay.isHighContrastModeEnabled,
                forcedColors: iU.Ay.useForcedColors,
                underlineLinks: iU.Ay.alwaysShowLinkDecorations,
            })),
            d = J.hH.useSetting(),
            c = (0, u9.C)(),
            m = s.useRef(!1),
            h = s.useRef(!1),
            p = s.useRef(0),
            g = s.useRef(null),
            x = s.useCallback(() => {
                let l = (0, up.o)(e, t);
                if (null == l) return;
                g.current = l;
                let s = {
                    revision: ++p.current,
                    baseTheme: n,
                    customTheme: (0, u1.Lq)(),
                    uiDensity: c,
                    messageDisplayCompact: d,
                    fontScale: i,
                    reducedMotion: a,
                    highContrast: r,
                    forcedColors: o,
                    underlineLinks: u,
                };
                (0, o6.W)(l, "set-env", s, {
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
                let n = (0, up.o)(e, t);
                null != n && n !== g.current && v();
            }),
            s.useEffect(() => {
                function n(n) {
                    n.target === (0, up.o)(e, t) && ((g.current = null), v());
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
            if (null != t) return (0, u0.Ng)(t, () => (0, up.o)(g, v));
        }, [t, g, v]));
    let y = s.useCallback(() => (0, up.o)(g, v), [g, v]),
        j = s.useCallback(() => (p ? (0, up.o)(g, v) : g), [p, g, v]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: u()(dn.Mh, d),
                children: [
                    o,
                    (0, r.jsx)(uQ, {
                        projectId: t ?? null,
                        applicationId: l,
                        previewApplicationId: a,
                        resolveTarget: j,
                        frameId: v,
                        onOpenPublishedApp: h,
                    }),
                    (0, r.jsx)("div", { ref: x, className: dn.fm, children: c }),
                ],
            }),
            m,
            (0, r.jsx)(un, {
                projectId: t ?? null,
                applicationId: l,
                previewApplicationId: a,
                resolveIframe: y,
                toggleRef: n,
            }),
        ],
    });
}
function da(e) {
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
    ((0, uZ.k)(t, k),
        (function (e) {
            let { mobile: t, landscape: n } = (0, f.cf)([tw.A], () => ({
                mobile: tw.A.isBuilderPreviewMobile(),
                landscape: tw.A.isBuilderPreviewLandscape(),
            }));
            s.useEffect(() => {
                let l;
                if (null != e) {
                    if (t) ((l = n ? u5.aX.LANDSCAPE : u5.aX.PORTRAIT), (u4 = e));
                    else {
                        if (u4 !== e) return;
                        ((l = u5.aX.UNHANDLED), (u4 = null));
                    }
                    n_.h.dispatch({
                        type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE",
                        screenOrientation: l,
                        applicationId: e,
                    });
                }
            }, [e, t, n]);
        })(i.type === n5.U.MAIN ? l : null));
    let A = s.useRef(null),
        [N, S] = s.useState(0);
    (s.useLayoutEffect(() => {
        if (i.type === n5.U.MAIN) return ((0, eR.HV)(l), () => (0, eR.HV)(null));
    }, [l, i.type]),
        s.useEffect(() => {
            null != t && ((0, es.Hc)(t), (0, u2.$)());
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
        s.useLayoutEffect(() => () => (0, eR.Zq)(0), []));
    let E = Math.max(360, N - 320),
        I = d || i.type === n5.U.MAIN;
    return (0, r.jsx)("div", {
        ref: A,
        className: dn.LB,
        children: (0, r.jsx)(dl, {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: a,
            surface: i,
            header: o,
            onOpenPublishedApp: C,
            showsFrame: (0, tA.yf)(j, w),
            mainClassName: null == o ? void 0 : u()(dn.ez, { [dn.zt]: d }),
            content: (0, r.jsx)(uB, {
                applicationId: l,
                previewApplicationId: a,
                surface: i,
                previewReady: v,
                previewGate: y,
                availability: j,
                activeMode: w,
                widgetApplicationId: k,
                frameOverlay: (0, r.jsx)(uy, { projectId: t, applicationId: l, previewApplicationId: a, surface: i }),
            }),
            sidebar:
                null != t && I
                    ? (0, r.jsx)(dt, {
                          open: d,
                          maxWidth: E,
                          onWidthChange: eR.Zq,
                          children: (0, r.jsx)("div", {
                              className: dn.cO,
                              children: g
                                  ? (0, r.jsx)(oW, { projectId: t, onClose: x ?? (() => {}) }, t)
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(ud.A, { projectId: t }),
                                            (0, r.jsx)(n4.Ay, {
                                                "aria-label": ef.intl.string(ef.t["/VQax8"]),
                                                toolbar: (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        m,
                                                        null == c
                                                            ? null
                                                            : (0, r.jsx)(n4.Ay.Icon, {
                                                                  icon: O.P,
                                                                  tooltip: ef.intl.string(em.default.JD6Oit),
                                                                  onClick: c,
                                                              }),
                                                    ],
                                                }),
                                                children: (0, r.jsx)(n4.Ay.Title, {
                                                    children: ef.intl.string(ef.t["/VQax8"]),
                                                }),
                                            }),
                                            (0, r.jsx)("div", {
                                                className: dn.cb,
                                                children: (0, r.jsx)(
                                                    sg,
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
var di = n(631417);
function dr(e) {
    let { title: t, actions: n, breadcrumb: l } = e;
    return (0, r.jsx)(K.A, {
        hideSearch: !0,
        toolbar: n,
        className: di.wx,
        "aria-label": t,
        children: (0, r.jsxs)("div", {
            className: di.QF,
            children: [
                (0, r.jsx)(F.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: z.A.colors.TEXT_STRONG,
                    className: di.Kk,
                }),
                null != l
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(K.A.Title, { onClick: l.onClick, children: l.title }),
                              (0, r.jsx)(K.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, r.jsx)(K.A.Title, { className: di.Qw, wrapperClassName: di.DD, children: t }),
            ],
        }),
    });
}
var ds = n(683071);
let du = "conjuring-help";
var dd = n(173114);
function dc() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: n,
            } = (0, f.cf)([tX.default, ee.A, nD.Ay, rw.A], () => {
                let e = tX.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of ee.A.getGuildsArray()) {
                    if (!t.features.has(ew.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let n = nD.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, $.m1)(t, tX.default, rw.A) === du;
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
                    ? (0, X.pX)(ew.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, nr.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, r.jsx)("div", {
              className: dd.l,
              children: (0, r.jsx)(ds.w, {
                  type: "info",
                  iconAlign: "center",
                  children: ef.intl.format(em.default["6anmu1"], { channel: du, onNavigate: t }),
              }),
          });
}
var dm = n(323140);
function df(e) {
    return (0, r.jsx)(p.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function dh(e) {
    return (0, r.jsx)(g.u, { ...e, size: "custom", width: 20, height: 20 });
}
function dp(e) {
    return (0, r.jsx)(x.k, { ...e, size: "custom", width: 20, height: 20 });
}
function dg(e) {
    return (0, r.jsx)(b.H, { ...e, size: "custom", width: 20, height: 20 });
}
let dx = {
    showPublishBlocked: function (e) {
        (0, eN.openModal)((t) => (0, r.jsx)(n1, { ...t, reason: e }));
    },
    openPublishNotes: n6.A,
    showError: (e) => (0, v.P)((0, y.o)(e, j.Ck.FAILURE)),
    openProfile: (e) => {
        (0, Y.openUserProfileModal)({ userId: e });
    },
    openAutomodSettings: (e) => {
        Promise.resolve()
            .then(n.bind(n, 468689))
            .then((t) => {
                let { default: n } = t;
                return n.open(e, ew.BEX.GUILD_AUTOMOD);
            })
            .catch(() => {});
    },
};
function db(e) {
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
                    (0, v.P)((0, y.o)(ef.intl.formatToPlainString(em.default.aN2JdD, { name: l }), j.Ck.MESSAGE)),
                    eg(n, l)
                        .catch((e) => {
                            let t;
                            (console.error("[vibegrations] project export failed", n, e),
                                (0, v.P)(
                                    (0, y.o)(
                                        409 === (t = e instanceof es.xE ? e.status : null)
                                            ? ef.intl.string(em.default["9oqbEw"])
                                            : 404 === t
                                              ? ef.intl.string(em.default["0W8uLq"])
                                              : ef.intl.string(em.default.N8753A),
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
                onImport: (o = ex(
                    s.useCallback(
                        (e) => {
                            let t = ep(e);
                            null != t
                                ? (0, v.P)((0, y.o)(t, j.Ck.FAILURE))
                                : (0, h.A)({
                                      title: ef.intl.formatToPlainString(em.default["Gm+u1+"], { name: l }),
                                      subtitle: ef.intl.string(em.default.M7H3sJ),
                                      confirmText: ef.intl.string(em.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, X.pX)(ew.BVt.CHANNEL(E, ek.VV.CONJURE, n));
                                          try {
                                              await eh(n, e, ef.intl.string(em.default.Owerd3));
                                          } catch {
                                              (0, v.P)((0, y.o)(ef.intl.string(em.default["Q+l4Hv"]), j.Ck.FAILURE));
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
                : ef.intl.formatToPlainString(em.default.AXydi3, { time: c()(S.updated_at).fromNow() }),
        R = (0, tW.wu)(S),
        L =
            (0, f.bG)([ee.A], () => (null == R ? null : (ee.A.getGuild(R)?.name ?? null)), [R]) ??
            ef.intl.string(em.default["3QFps8"]),
        D = (0, f.bG)([eL.Ay], () => eL.Ay.isProjectDeleting(S.id), [S.id]),
        O =
            ((t = P ? S : null),
            (d = t?.id),
            (p = t?.owner_user_id),
            (g = (0, f.yK)(
                [tJ.Ay],
                () =>
                    null == d
                        ? []
                        : [
                              ...new Set(
                                  tJ.Ay.getMessages(d)
                                      .flatMap((e) => (null != e.user_id && e.user_id !== p ? [e.user_id] : []))
                                      .reverse(),
                              ),
                          ],
                [d, p],
            )),
            s.useEffect(() => {
                null != p && (t1(p), g.forEach(t1));
            }, [p, g]),
            (x = (0, f.bG)([tX.default], () => (null == p ? null : tX.default.getUser(p)), [p])),
            (b = (0, f.yK)([tX.default], () => g.map((e) => tX.default.getUser(e)).filter((e) => null != e), [g])),
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
                                      ? ef.intl.formatToPlainString(em.default.t5RWBS, { creator: e })
                                      : ef.intl.formatToPlainString(em.default["b5uCe/"], {
                                            creator: e,
                                            collaborators:
                                                0 === (n = void 0 ?? t.length)
                                                    ? ""
                                                    : 1 === n
                                                      ? ef.intl.formatToPlainString(ef.t["8s9z8P"], { first: t[0] })
                                                      : 2 === n
                                                        ? ef.intl.formatToPlainString(ef.t["i0K/dw"], {
                                                              first: t[0],
                                                              second: t[1],
                                                          })
                                                        : 3 === n
                                                          ? ef.intl.formatToPlainString(ef.t["/KSOKY"], {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                            })
                                                          : ef.intl.formatToPlainString(ef.t.xpU76u, {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                                count: n - 3,
                                                            }),
                                        });
                              })(
                                  (0, tY.mG)(x),
                                  b.map((e) => (0, tY.mG)(e)),
                              ),
                          },
                [x, b],
            )),
        F = s.useId(),
        z = (0, r.jsx)(w.E, { variant: "text-md/semibold", color: "text-strong", className: dm.j1, children: S.name }),
        U = (0, eT.oF)(S.id),
        q = {
            projectId: S.id,
            projectName: S.name,
            guildId: E,
            projectGuildId: S.guild_id,
            isOwner: (0, eL.PV)(S),
            canRemix: (0, eL.H_)(S),
            onRemix: T,
            onExport: M.onExport,
            onImport: M.onImport,
        };
    return (0, r.jsxs)("div", {
        className: u()(dm.OY, { [dm.Wy]: D }),
        "aria-busy": D,
        children: [
            (0, r.jsx)(to.Ay, { projectId: S.id }),
            null == U || D ? null : (0, r.jsx)("div", { className: dm.SB, "aria-hidden": !0 }),
            (0, r.jsxs)(k.D, {
                className: dm.W6,
                onClick: D ? void 0 : I,
                onContextMenu: function (e) {
                    D || (0, G.jA)(e, () => (0, r.jsx)(nf, { ...q, onCloseMenu: G.Z_ }));
                },
                tabIndex: D ? -1 : void 0,
                "aria-describedby": null != O ? F : void 0,
                children: [
                    (0, r.jsx)(np.A, { project: S, size: "md", className: dm.VJ }),
                    (0, r.jsxs)("div", {
                        className: dm.MM,
                        children: [
                            (0, r.jsxs)("div", {
                                className: dm.Ub,
                                children: [
                                    null != O ? (0, r.jsx)(C.m, { text: O.label, ariaHidden: !0, children: z }) : z,
                                    null == O || D ? null : (0, r.jsx)(nb, { creator: O, className: dm.rb }),
                                    U !== m.I.NEEDS_INPUT || D
                                        ? null
                                        : (0, r.jsxs)("div", {
                                              className: dm.fs,
                                              children: [
                                                  (0, r.jsx)(W.A, { mentionsCount: 1 }),
                                                  (0, r.jsx)(A.A, { children: ef.intl.string(em.default.hfIuc7) }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: dm.h3,
                                children: [
                                    (0, r.jsx)(w.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: dm.Wb,
                                        children: D ? ef.intl.string(em.default.Yh5pAc) : L,
                                    }),
                                    null == _ || D
                                        ? null
                                        : (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)("span", {
                                                      className: dm.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, r.jsx)(w.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: dm.zM,
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
                className: dm.M2,
                children: D
                    ? (0, r.jsx)(N.y, { type: N.t.SPINNING_CIRCLE_SIMPLE })
                    : (0, r.jsxs)("div", {
                          className: dm.Pl,
                          children: [(0, r.jsx)(nh, { ...q, trigger: "iconButton" }), M.importInput],
                      }),
            }),
        ],
    });
}
function dv(e) {
    var t;
    let { project: l, projectsLoaded: a, onBack: i, guildId: o } = e,
        [u, d] = s.useState(!0),
        [c, m] = s.useState(!1),
        p = J.Q_.useSetting(),
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
    let L = (0, f.bG)([eL.Ay], () => (null == A ? null : eL.Ay.getIntegrationStatus(A)), [A]),
        { data: D, isLoading: O } = (0, q.YY)(l?.preview_application_id ?? void 0),
        F = null != A && b !== A,
        z = L?.preview_ready === !0,
        G = L?.has_activity === !0,
        {
            availability: U,
            activeMode: W,
            setMode: Y,
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
                h = (0, f.bG)([tI.default], () => tI.default.getId()),
                { applicationWidgetConfig: p } = (0, tS.A)(h, m ?? void 0),
                g = p?.surfaces,
                x = (0, tA.yZ)({
                    widgetTop: g?.[tN.m.WIDGET_TOP] != null,
                    widgetBottom: g?.[tN.m.WIDGET_BOTTOM] != null,
                    miniProfile: g?.[tN.m.MINI_PROFILE] != null,
                }),
                b = null != m && (r ? x.hasMainCard : x.hasAny),
                { data: v } = (0, q.YY)(n ?? void 0),
                y = null != n && v?.bot?.id != null,
                { data: j, isLoading: w } = (0, q.YY)(t ?? void 0),
                k = l || (0, tE.X)(j),
                C = null != t && w && null == j,
                A = (0, tA.Xm)({
                    installScope: a,
                    hasFrame: k,
                    hasProfileWidget: b,
                    hasBotDm: y,
                    ownerAuthorizationRevoked: i,
                });
            return {
                availability: A,
                isResolving: C,
                activeMode: C ? null : (0, tA.Qs)(o, A),
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
    (0, tC.x)(A, (e) => {
        U.modes.includes(e) && Y(e);
    });
    let ee = U.modes.includes("frame"),
        et = (0, tA.Qg)({
            installScope: l?.install_scope ?? null,
            previewReady: z,
            integrationInstalled: L?.integration_installed ?? null,
            botPermissionsChanged: L?.bot_permissions_changed === !0,
        }),
        en = u && !c,
        el = ef.intl.string(en ? em.default.JD6Oit : em.default.xjJAQm),
        ea = s.useCallback(() => {
            if (c) {
                (m(!1), d(!0));
                return;
            }
            d((e) => !e);
        }, [c]),
        ei = s.useCallback(() => d(!1), []),
        { active: er } = ts(A);
    s.useEffect(() => {
        null != A && er && !ee && tl(A);
    }, [A, er, ee]);
    let eo = s.useRef(null),
        eu = (0, tk.Zv)(A),
        ed = ef.intl.string(eu ? em.default.Sme0T0 : er ? em.default.vn5Rzu : em.default["cl/Jyl"]),
        ec = s.useCallback(() => {
            if (null != A) {
                let e;
                if (er) return void tl(A);
                (m(!1), d(!0), (e = tt(A)).active || tn(A, { ...e, active: !0 }));
            }
        }, [A, er]),
        eg = s.useCallback(() => {
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
                    (0, es.oB)(a, e.sha)
                        .then(
                            async () => {
                                if (
                                    (n &&
                                        i() &&
                                        (0, v.P)(
                                            (0, y.o)(
                                                ef.intl.formatToPlainString(em.default.Z4n6LX, {
                                                    title: (0, tu.T4)(e.subject).short,
                                                }),
                                                j.Ck.SUCCESS,
                                            ),
                                        ),
                                    null != t)
                                ) {
                                    let e = await (0, td.c)(a, t);
                                    null != e && (0, v.P)((0, y.o)(e, j.Ck.FAILURE));
                                }
                                i() && x({ entry: e, status: "restored" });
                            },
                            (t) => {
                                i() &&
                                    (x({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", a, t),
                                    (0, v.P)((0, y.o)(ef.intl.string(em.default["PSdo+w"]), j.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            i() && (_.current = !1);
                        }));
            },
            [l],
        ),
        ey = (0, f.bG)([tw.A], () => tw.A.isBuilderPreviewMobile()),
        ej = ef.intl.string(ey ? em.default.tKGF0Q : em.default.peqEOY),
        eC = s.useCallback(() => (0, eR.GG)(!ey), [ey]),
        eA = (0, f.bG)([tw.A], () => tw.A.isBuilderPreviewLandscape()),
        eS = ef.intl.string(eA ? em.default.tunI2l : em.default.DoNdjA),
        eE = s.useCallback(() => (0, eR.Lw)(!eA), [eA]),
        eI = (0, V.A)(l?.preview_application_id ?? null, tG.sd),
        eT = (0, tG.x1)(eI) && eI.data.proxyTicketRefreshing,
        eP = s.useCallback(() => {
            null == eI || eT || H.A.refreshProxyTicket(eI.id);
        }, [eI, eT]),
        eM = s.useCallback(() => {
            var e, t;
            (null != l && ((e = l.id), (t = eI?.id), (0, es.Bn)(e), (0, nv.A)().leaveFrame(t)), i());
        }, [l, eI?.id, i]),
        e_ = s.useCallback(() => {
            null != l && (d(!0), (0, es.dv)(l.id, ef.intl.string(em.default.oU20rd)));
        }, [l]),
        eD = ex(
            s.useCallback(
                (e) => {
                    if (null == l) return;
                    let t = l.id,
                        n = ep(e);
                    null != n
                        ? (0, v.P)((0, y.o)(n, j.Ck.FAILURE))
                        : (0, h.A)({
                              title: ef.intl.formatToPlainString(em.default["Gm+u1+"], { name: l.name }),
                              subtitle: ef.intl.string(em.default.M7H3sJ),
                              confirmText: ef.intl.string(em.default.gFHykw),
                              variant: "critical",
                              onConfirm: async () => {
                                  d(!0);
                                  try {
                                      await eh(t, e, ef.intl.string(em.default.Owerd3));
                                  } catch {
                                      (0, v.P)((0, y.o)(ef.intl.string(em.default["Q+l4Hv"]), j.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [l],
            ),
        ),
        eO = s.useCallback(() => {
            null != l && (0, n9.A)(l, o);
        }, [l, o]),
        eF = s.useCallback(async () => {
            if (null == A || N.current !== A) return;
            R.current?.abort();
            let e = new AbortController();
            ((R.current = e), k(null));
            try {
                await (0, eR.U1)(A, e.signal);
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
    let ez = nP(l ?? null, L ?? null, o),
        eG = ((t = l?.application_id ?? null), (0, f.bG)([nD.Ay], () => (null == t ? null : (0, ny.i8)(o, t)), [o, t])),
        eU = s.useMemo(() => (null == eG ? null : () => (0, X.pX)(ew.BVt.CHANNEL(o, eG))), [o, eG]),
        eq = s.useCallback(async () => {
            null != l && (await nM(l, ez));
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
                      ...(0, tV.i)({ applicationId: e, application: D ?? null, guildId: ez }),
                      onClose: () => {
                          e$();
                      },
                  };
        }, [F, e$, ez, O, D, l?.preview_application_id]),
        eH = et ? { type: "permissions", authorizeProps: eB } : F && null == L ? { type: "checking" } : void 0,
        eV = (0, f.bG)([eL.Ay], () => null != A && eL.Ay.isProjectDeleting(A), [A]);
    s.useEffect(() => {
        ((null == l && a) || eV) && (0, X.bG)(ew.BVt.CHANNEL(o, ek.VV.CONJURE));
    }, [o, l, a, eV]);
    let eW = s.useMemo(() => ({ guildId: o, platform: dx, busy: F || O }), [o, F, O]),
        eK = n0(A, eW),
        eX = eK?.intent === "open" && "channel" === eK.destination ? eK.appChannelId : null,
        eY = (0, f.bG)([Q.A], () => (null == eX ? null : Q.A.getChannel(eX)), [eX]),
        eJ = (0, $.Ay)(eY),
        eQ = (0, B.gU)(eY),
        eZ =
            null != eJ && null != eQ
                ? ef.intl.format(em.default.gR7PUV, {
                      channel: eJ,
                      channelIconHook: (e, t) =>
                          (0, r.jsx)(eQ, { size: "xs", color: "currentColor", className: dm.Y2 }, t),
                  })
                : eK?.label,
        e0 = eK?.upToDate === !0 ? ef.intl.string(em.default.X0kGp2) : (eK?.disabledReason ?? null),
        e2 =
            null == eK
                ? null
                : (0, r.jsx)("div", {
                      className: dm.As,
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
        e1 = (0, r.jsx)(dr, {
            title: l?.name ?? ef.intl.string(em.default.G1WwgK),
            breadcrumb: { title: ef.intl.string(em.default.uk6jhJ), onClick: i },
            actions:
                null == l
                    ? null
                    : (0, r.jsxs)("div", {
                          className: dm.FO,
                          children: [
                              U.showModeSwitch ? (0, r.jsx)(tH, { modes: U.modes, mode: W, onChange: Y }) : null,
                              ee
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(K.A.Icon, {
                                                icon: ey ? dp : dh,
                                                tooltip: ej,
                                                "aria-label": ej,
                                                selected: ey,
                                                onClick: eC,
                                            }),
                                            ey
                                                ? (0, r.jsx)(K.A.Icon, {
                                                      icon: dg,
                                                      tooltip: eS,
                                                      "aria-label": eS,
                                                      selected: eA,
                                                      onClick: eE,
                                                  })
                                                : null,
                                            (0, r.jsx)(K.A.Icon, {
                                                ref: eo,
                                                icon: E.x,
                                                iconClassName: dm.D8,
                                                tooltip: ed,
                                                "aria-label": ed,
                                                selected: er,
                                                disabled: eu,
                                                onClick: ec,
                                            }),
                                        ],
                                    })
                                  : null,
                              "frame" === W ? (0, r.jsx)(tU, { frame: eI, controlProjectId: l.id }) : null,
                              (0, r.jsx)("div", { className: dm.YJ }),
                              p
                                  ? (0, r.jsx)(K.A.Icon, {
                                        icon: I.BugIcon,
                                        tooltip: ef.intl.string(em.default.Mt5k9d),
                                        "aria-label": ef.intl.string(em.default.Mt5k9d),
                                        selected: c,
                                        onClick: eg,
                                    })
                                  : null,
                              (0, r.jsx)(K.A.Icon, {
                                  icon: T.SettingsIcon,
                                  tooltip: ef.intl.string(em.default.I2XSKe),
                                  "aria-label": ef.intl.string(em.default.I2XSKe),
                                  onClick: () => (0, no.A)(l.id, { guildId: o, isPreview: !0 }),
                              }),
                              (0, r.jsx)(nh, {
                                  projectId: l.id,
                                  projectName: l.name,
                                  guildId: o,
                                  projectGuildId: l.guild_id,
                                  isOwner: (0, eL.PV)(l),
                                  canRemix: (0, eL.H_)(l),
                                  onRefresh: (0, tG.x1)(eI) ? eP : void 0,
                                  isRefreshing: eT,
                                  onClose: eM,
                                  onExport: e_,
                                  onImport: eD.open,
                                  onRemix: eO,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = l.id),
                                          void (0, eN.openModalLazy)(async () => {
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
                                          void (0, eN.openModalLazy)(async () => {
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
                                      U.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== U.profileState
                                          ? Z
                                          : null,
                                  previewProjectId: l.id,
                              }),
                              en
                                  ? null
                                  : (0, r.jsx)(K.A.Icon, { icon: df, tooltip: el, "aria-label": el, onClick: ea }),
                          ],
                      }),
        });
    return (0, r.jsxs)("div", {
        className: dm.nj,
        children: [
            eD.input,
            (0, r.jsx)("main", {
                className: dm.JX,
                children:
                    null == l
                        ? (0, r.jsxs)("div", {
                              className: dm.j5,
                              children: [
                                  e1,
                                  (0, r.jsxs)("div", {
                                      className: dm.sD,
                                      children: [
                                          (0, r.jsx)(P.D, {
                                              variant: "heading-lg/semibold",
                                              children: ef.intl.string(em.default.G1WwgK),
                                          }),
                                          (0, r.jsx)(w.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: ef.intl.string(em.default.fINulo),
                                          }),
                                          (0, r.jsx)(S.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: ef.intl.string(em.default["WFJ/vb"]),
                                              onClick: () => (0, eR.hF)(o),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, r.jsx)(n$.Provider, {
                              value: eW,
                              children: (0, r.jsx)(
                                  da,
                                  {
                                      projectId: l.id,
                                      designFeedbackToggleRef: eo,
                                      applicationId: l.preview_application_id,
                                      previewApplicationId: l.preview_application_id,
                                      surface: tG.sd,
                                      header: e1,
                                      chatOpen: u,
                                      onCloseChat: ei,
                                      chatHeaderAction: e2,
                                      debugOpen: p && c,
                                      onCloseDebug: eb,
                                      onRestoreVersion: ev,
                                      onImportProject: (0, eL.PV)(l) ? eD.open : void 0,
                                      restoreState: g,
                                      previewReady: z,
                                      previewGate: eH,
                                      availability: U,
                                      activeMode: W,
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
function dy(e) {
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
        [$, B] = s.useState(() => ({ guildId: a, filter: nC(a) })),
        H = ($.guildId === a ? $.filter : nC(a)) ?? a,
        V = s.useCallback(
            (e) => {
                (nk.set(a, e), B({ guildId: a, filter: e }));
            },
            [a],
        ),
        W = (0, f.yK)(
            [ee.A],
            () =>
                (function (e, t) {
                    let n = new Set([t]);
                    for (let t of e)
                        (null != t.guild_id && n.add(t.guild_id),
                            null != t.preview_guild_id && n.add(t.preview_guild_id));
                    let l = [];
                    for (let e of n) {
                        let t = ee.A.getGuild(e);
                        null != t && l.push(t);
                    }
                    return l.sort((e, t) => e.name.localeCompare(t.name));
                })(t, a),
            [t, a],
        ),
        X = s.useMemo(
            () => [
                { id: "conjure-filter-all", value: "all", leading: F.D, label: ef.intl.string(em.default["Xi/oIC"]) },
                {
                    id: "conjure-filter-user",
                    value: nj,
                    leading: eb.UserIcon,
                    label: ef.intl.string(em.default.kCSgmG),
                },
                {
                    id: "conjure-filter-no-server",
                    value: nw,
                    leading: ev.R,
                    label: ef.intl.string(em.default["3QFps8"]),
                },
                ...W.map((e) => ({
                    id: `conjure-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, r.jsx)(eQ.Ay, { guild: e, size: eQ.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [W],
        ),
        Y = (0, f.yK)(
            [eL.Ay, ee.A],
            () => {
                let e = nA(H);
                if (null != e) return eL.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(ee.A.getGuilds()))
                    eL.Ay.hasFetchedGuildProjects(e.id) && t.push(...eL.Ay.getSharedProjects(e.id));
                return t;
            },
            [H],
        );
    s.useEffect(() => {
        let e = nA(H);
        null == e || eL.Ay.hasFetchedGuildProjects(e) || (0, eR.hF)(e);
    }, [H]);
    let J = s.useMemo(
            () =>
                Y.filter((e) => nN(e, H)).sort((e, t) =>
                    null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                ),
            [Y, H],
        ),
        Q = s.useMemo(
            () => [
                {
                    label: ef.intl.string(em.default.NyVn6T),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: eZ,
                            label: ef.intl.string(em.default.UPLaGM),
                            leading: eb.UserIcon,
                        },
                        ...g.map((e) => ({
                            id: `conjure-target-${e.id}`,
                            value: e.id,
                            label: e.name,
                            leading: (0, r.jsx)(eQ.Ay, { guild: e, size: eQ.Ay.Sizes.MINI, active: !0 }),
                        })),
                    ],
                },
            ],
            [g],
        ),
        Z = s.useMemo(
            () =>
                t
                    .filter((e) => nN(e, H))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, H],
        ),
        et = s.useCallback(
            (e) => {
                "user" === e.install_scope || (0, ny.Ot)(e, a)
                    ? k(e.id)
                    : (0, v.P)((0, y.o)(ef.intl.string(em.default["XUl/cs"]), j.Ck.MESSAGE));
            },
            [a, k],
        ),
        el = ef.intl.string(em.default.ab1sMf),
        ea = [
            ef.intl.string(em.default["9w+Chc"]),
            ef.intl.string(em.default.WAvmdq),
            ef.intl.string(em.default.SKsrzl),
        ],
        ei = [
            {
                id: "moderation-bot",
                name: ef.intl.string(em.default.lGLnE8),
                description: ef.intl.string(em.default["pAC6k/"]),
                wizard: !0,
            },
            {
                id: "feature-showcase",
                name: ef.intl.string(em.default.uJKQTs),
                description: ef.intl.string(em.default["+dKy/B"]),
            },
            {
                id: "rust-sphere",
                name: ef.intl.string(em.default.iF5Oru),
                description: ef.intl.string(em.default.NbDDO6),
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
                    (0, eN.openModalLazy)(
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
        es = ef.intl.string(em.default.zzYLlW),
        eo =
            (s.useEffect(() => {
                (0, eR.b8)();
            }, []),
            (0, f.bG)([eL.Ay], () => {
                let e = eL.Ay.getMaxProjects();
                return null != e && eL.Ay.hasFetchedOwnedProjects()
                    ? Math.max(0, e - eL.Ay.getOwnedProjects().length)
                    : null;
            })),
        eu = ef.intl.string(em.default["2XcV3x"]),
        ed = s.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), d || A());
            },
            [d, A],
        ),
        ec = nA(H) ?? a,
        eh = (0, f.bG)([eL.Ay], () => eL.Ay.getGuildProjectsFetchState(ec), [ec]),
        ep = (0, f.bG)([eL.Ay], () => eL.Ay.getGuildProjectsFetchState(a), [a]),
        [eg, ex] = s.useState(nI),
        ey = s.useMemo(() => nS.w.get(nT(a)) ?? !1, [a]),
        ew = "success" === ep,
        ek = (0, f.yK)([eL.Ay], () => eL.Ay.getSharedProjects(a), [a]).length > 0 || t.some((e) => nN(e, a)),
        eC = eg ?? (!!ek || "error" === ep || (!ew && ey));
    s.useEffect(() => {
        ew && nS.w.set(nT(a), ek);
    }, [ew, ek, a]);
    let eA = s.useCallback((e) => {
            (nS.w.set(nE, e), ex(e));
        }, []),
        eS = s.useCallback(() => eA(!eC), [eA, eC]),
        eE = s.useCallback(() => eA(!1), [eA]),
        eT = ef.intl.string(em.default.kar7jh),
        eP = eC ? eT : ef.intl.string(em.default.WSc5Y2);
    return (0, r.jsx)("div", {
        className: u()(dm.nj, dm.a0),
        children: (0, r.jsxs)("div", {
            className: dm.Yo,
            children: [
                (0, r.jsxs)("main", {
                    className: dm.ps,
                    children: [
                        (0, r.jsx)(dr, {
                            title: ef.intl.string(em.default.uk6jhJ),
                            actions: (0, r.jsx)(K.A.Icon, {
                                icon: M.Z,
                                tooltip: eP,
                                "aria-label": eP,
                                selected: eC,
                                onClick: eS,
                            }),
                        }),
                        (0, r.jsx)(_.Ip, {
                            className: dm.Yy,
                            children: (0, r.jsx)("div", {
                                className: dm.Mo,
                                children: (0, r.jsxs)("section", {
                                    className: u()(dm.Qs, dm.Ix),
                                    children: [
                                        (0, r.jsx)(dc, {}),
                                        (0, r.jsx)(eJ, {}),
                                        (0, r.jsxs)("section", {
                                            className: dm.WI,
                                            "aria-label": es,
                                            children: [
                                                (0, r.jsxs)("div", {
                                                    className: dm.G9,
                                                    children: [
                                                        (0, r.jsx)(w.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: es,
                                                        }),
                                                        (0, r.jsx)(w.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: ef.intl.string(em.default["N88+Ld"]),
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsx)(eU, {
                                                    listClassName: dm.Aw,
                                                    radius: ez,
                                                    children: ei.map((e) =>
                                                        (0, r.jsx)(
                                                            "li",
                                                            {
                                                                className: dm.EA,
                                                                children: (0, r.jsxs)(eD, {
                                                                    disabled: i,
                                                                    ariaLabel: ef.intl.formatToPlainString(
                                                                        em.default.jGyR6p,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: u()(dm.nx, dm.rz),
                                                                    onClick: () => er(e),
                                                                    children: [
                                                                        (0, r.jsx)(w.E, {
                                                                            className: dm.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, r.jsx)(w.E, {
                                                                            className: dm.BK,
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
                                            className: dm.WI,
                                            "aria-label": eu,
                                            children: [
                                                (0, r.jsxs)("div", {
                                                    className: dm.G9,
                                                    children: [
                                                        (0, r.jsx)(w.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: eu,
                                                        }),
                                                        (0, r.jsx)(w.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: ef.intl.string(em.default.JnJOAn),
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsx)(eU, {
                                                    listClassName: dm.Aw,
                                                    radius: eG,
                                                    children: ea.map((e) =>
                                                        (0, r.jsx)(
                                                            "li",
                                                            {
                                                                className: dm.EA,
                                                                children: (0, r.jsx)(eD, {
                                                                    disabled: i,
                                                                    className: dm.nx,
                                                                    onClick: () => A(e),
                                                                    children: (0, r.jsx)(w.E, {
                                                                        variant: "text-md/semibold",
                                                                        color: "text-strong",
                                                                        className: dm.un,
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
                                        (0, r.jsx)(eI, {}),
                                    ],
                                }),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: dm.Yl,
                            children: (0, r.jsxs)("div", {
                                className: u()(dm.Qs, dm.DA),
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
                                              label: ef.intl.string(em.default.qfAk5B),
                                              description: ef.intl.string(em.default["mq+Pml"]),
                                          })
                                        : null,
                                    (0, r.jsxs)("div", {
                                        className: dm.VP,
                                        children: [
                                            (0, r.jsx)("div", {
                                                className: dm.gH,
                                                children: (0, r.jsx)(D.l, {
                                                    selectionMode: "single",
                                                    label: ef.intl.string(em.default.NyVn6T),
                                                    hideLabel: !0,
                                                    placeholder: ef.intl.string(em.default.NyVn6T),
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
                                                              ? ef.intl.string(em.default.s28pGG)
                                                              : ef.intl.formatToPlainString(em.default.Wy5aK4, {
                                                                    count: eo,
                                                                }),
                                                  })
                                                : null,
                                            (0, r.jsx)(tj, {
                                                settings: x ?? en.A4,
                                                tiers: en.lO,
                                                choices: (0, eM.b)()
                                                    ? {
                                                          main: [...en.vC.main, ...en.XE.main],
                                                          subagent: [...en.vC.subagent, ...en.XE.subagent],
                                                          thinking: en.vC.thinking,
                                                      }
                                                    : en.vC,
                                                disabled: i,
                                                onChange: b,
                                            }),
                                            (0, r.jsx)(S.$, {
                                                variant: "primary",
                                                size: "md",
                                                text: ef.intl.string(ef.t.CumH4u),
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
                    className: dm.pA,
                    hidden: !eC,
                    "aria-label": ef.intl.string(em.default.dWgSAa),
                    children: [
                        (0, r.jsxs)("div", {
                            className: dm.IR,
                            children: [
                                (0, r.jsx)(w.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: dm.RM,
                                    children: ef.intl.string(em.default.dWgSAa),
                                }),
                                (0, r.jsxs)("div", {
                                    className: dm.Ss,
                                    children: [
                                        (0, r.jsx)(ej, { importing: q, onImport: U }),
                                        (0, r.jsx)(K.A.Icon, { icon: O.P, tooltip: eT, "aria-label": eT, onClick: eE }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsxs)(_.Ip, {
                            className: dm.xe,
                            children: [
                                (0, r.jsx)("div", {
                                    className: dm.Vw,
                                    children: (0, r.jsx)(D.l, {
                                        selectionMode: "single",
                                        label: ef.intl.string(em.default.U6TqU9),
                                        hideLabel: !0,
                                        options: X,
                                        value: H,
                                        onSelectionChange: V,
                                    }),
                                }),
                                (0, r.jsx)(w.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: dm.wE,
                                    children: ef.intl.string(em.default.JQpNkh),
                                }),
                                ("unattempted" === eh || "loading" === eh) && 0 === Z.length
                                    ? (0, r.jsx)("div", { className: dm.E8, children: (0, r.jsx)(N.y, {}) })
                                    : "error" === eh && 0 === Z.length
                                      ? (0, r.jsxs)("div", {
                                            className: dm.E8,
                                            children: [
                                                (0, r.jsx)(w.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: dm.JS,
                                                    children: ef.intl.string(em.default.DJAPMO),
                                                }),
                                                (0, r.jsx)(S.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: ef.intl.string(em.default["WFJ/vb"]),
                                                    onClick: () => (0, eR.hF)(ec),
                                                }),
                                            ],
                                        })
                                      : 0 === Z.length
                                        ? (0, r.jsx)("div", {
                                              className: dm.D1,
                                              children: (0, r.jsxs)("div", {
                                                  className: dm.ST,
                                                  children: [
                                                      (0, r.jsx)(F.D, { size: "lg", color: z.A.colors.TEXT_SUBTLE }),
                                                      (0, r.jsx)(w.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: dm.sI,
                                                          children: ef.intl.string(em.default["9/5sLV"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, r.jsx)("div", {
                                              className: dm.Dq,
                                              children: Z.map((e) =>
                                                  (0, r.jsx)(
                                                      db,
                                                      {
                                                          project: e,
                                                          guildId: a,
                                                          onSelect: () => et(e),
                                                          onRemix: () => (0, n9.A)(e, a),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          }),
                                J.length > 0
                                    ? (0, r.jsxs)("div", {
                                          className: dm.qx,
                                          children: [
                                              (0, r.jsxs)("div", {
                                                  className: dm.uc,
                                                  children: [
                                                      (0, r.jsx)(w.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-strong",
                                                          children: ef.intl.string(em.default["wFi8+o"]),
                                                      }),
                                                      (0, r.jsx)(w.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          children: ef.intl.string(em.default.dQ3U1J),
                                                      }),
                                                  ],
                                              }),
                                              (0, r.jsx)("div", {
                                                  className: dm.Dq,
                                                  children: J.map((e) =>
                                                      (0, r.jsx)(
                                                          db,
                                                          {
                                                              project: e,
                                                              guildId: a,
                                                              onSelect: () => et(e),
                                                              onRemix: () => (0, n9.A)(e, a),
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
function dj(e) {
    let t,
        { guildId: n, projectId: l } = e,
        a = (0, f.yK)([eL.Ay], () => eL.Ay.getOwnedProjects()),
        i = (0, f.yK)([Z.Ay], () => Z.Ay.getSelfMember(n)?.roles ?? [], [n]),
        o = (0, f.bG)(
            [ee.A, et.A],
            () => {
                let e = ee.A.getGuild(n);
                return null != e && et.A.can(ew.xBc.MANAGE_GUILD, e);
            },
            [n],
        ),
        [u, d] = s.useState(""),
        c = l ?? null,
        [m, h] = s.useState(!1),
        [p, g] = s.useState(null),
        x = (0, t6.z9)("VibegrationsScreen"),
        [b, w] = s.useState(null),
        k = (0, U.o)().get(tK.f_) === eZ;
    s.useEffect(() => {
        w(null);
    }, [n, k]);
    let C = s.useMemo(() => (!k && x.some((e) => e.id === n) ? n : eZ), [x, n, k]),
        A = b ?? C,
        N = A === eZ ? "user" : "guild",
        S = A === eZ ? n : A,
        [E, I] = s.useState(!0),
        [T, P] = s.useState(null);
    (s.useEffect(() => {
        (0, eR.hF)(n);
    }, [n, i, o]),
        s.useEffect(() => {
            (0, eR.dm)(n, c);
        }, [n, c]));
    let M = s.useCallback(
            async (e, t, n) => {
                let l = await (0, eR.gA)({ guild_id: t, install_scope: n, flags: (0, en.wo)("guild" === n && E) });
                ((0, es.Hc)(l),
                    (0, es.r2)(l, T ?? en.A4),
                    e(l),
                    (0, X.pX)(ew.BVt.CHANNEL(t, ek.VV.CONJURE, l)),
                    d(""),
                    P(null));
            },
            [E, T],
        ),
        _ = s.useCallback(
            async (e) => {
                let t = (e ?? u).trim(),
                    n = e_({ idea: t, installScope: N, submitting: m });
                if ("idea" !== n && "submitting" !== n) {
                    (null != e && d(e), h(!0), g(null));
                    try {
                        await M((e) => (0, es.dv)(e, t), S, N);
                    } catch (e) {
                        g((0, eP.mG)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [M, N, S, u, m],
        ),
        R = s.useCallback(
            async (e) => {
                if (!m) {
                    (h(!0), g(null));
                    try {
                        await M(
                            (t) => {
                                var n;
                                (0, es.dv)(
                                    t,
                                    ((n = e.name),
                                    ef.intl.formatToPlainString(em.default["0PQip6"], { templateName: n })),
                                    void 0,
                                    { templateId: e.id },
                                );
                            },
                            S,
                            N,
                        );
                    } catch (e) {
                        g((0, eP.mG)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [M, N, S, m],
        ),
        L = s.useCallback(
            async (e, t) => {
                let n = await (0, eR.gA)({ guild_id: t, install_scope: "guild", flags: (0, en.wo)(E) });
                return ((0, es.Hc)(n), (0, es.r2)(n, T ?? en.A4), (0, es.dv)(n, (0, n3.Wl)(e)), n);
            },
            [E, T],
        ),
        D = s.useCallback(async (e, t, n, l) => {
            if (eL.Ay.getProject(t)?.guild_id !== n) {
                let e = await (0, eR.M7)(t, { guild_id: n, preview_guild_id: n });
                if (!e.ok) throw new eP.DS((0, eP.hj)(e), e.status);
            }
            ((0, es.dv)(t, l, void 0, { templateId: e.id }), (0, X.pX)(ew.BVt.CHANNEL(n, ek.VV.CONJURE, t)), P(null));
        }, []),
        O = s.useCallback((e) => {
            (0, eR.xx)(e).catch(() => void 0);
        }, []),
        F = s.useCallback(
            (e) => {
                let t = eL.Ay.getProject(e)?.guild_id ?? n;
                ((0, X.pX)(ew.BVt.CHANNEL(t, ek.VV.CONJURE, e)), P(null));
            },
            [n],
        ),
        [z, G] = s.useState(!1),
        q = s.useCallback(
            async (e, t) => {
                let l = ep(e);
                if (null != l) return void (0, v.P)((0, y.o)(l, j.Ck.FAILURE));
                G(!0);
                let a = null;
                try {
                    ((a = await (0, eR.gA)({ guild_id: n, install_scope: t, flags: (0, en.wo)("guild" === t && E) })),
                        (0, es.Hc)(a),
                        (0, es.r2)(a, T ?? en.A4),
                        await eh(a, e, ef.intl.string(em.default["LUc7/5"])),
                        (0, X.pX)(ew.BVt.CHANNEL(n, ek.VV.CONJURE, a)),
                        P(null));
                } catch {
                    (null != a && (await (0, eR.xx)(a).catch(() => void 0)),
                        (0, v.P)((0, y.o)(ef.intl.string(em.default["Q+l4Hv"]), j.Ck.FAILURE)));
                } finally {
                    G(!1);
                }
            },
            [n, E, T],
        ),
        $ = s.useCallback(
            (e) => {
                (0, X.pX)(ew.BVt.CHANNEL(n, ek.VV.CONJURE, e));
            },
            [n],
        ),
        B = s.useCallback(() => {
            (0, X.pX)(ew.BVt.CHANNEL(n, ek.VV.CONJURE));
        }, [n]),
        H = s.useCallback((e) => {
            (d(e), g(null));
        }, []),
        V = (0, f.bG)(
            [eL.Ay],
            () => {
                if (null == c) return null;
                let e = eL.Ay.getProject(c);
                return null == e || (0, eL.PV)(e) || e.guild_id === n ? e : null;
            },
            [c, n],
        ),
        W = (0, f.bG)([eL.Ay], () => eL.Ay.hasFetchedGuildProjects(n), [n]);
    return null != c
        ? (0, r.jsx)(dv, { project: V, projectsLoaded: W, onBack: B, guildId: n }, c)
        : (0, r.jsx)(dy, {
              projects: a,
              modelSettings: T,
              onModelSettingsChange: P,
              idea: u,
              guildId: n,
              submitting: m,
              createError: p,
              createDisabled: "idea" === (t = e_({ idea: u, installScope: N, submitting: m })) || "submitting" === t,
              onSelectProject: $,
              onIdeaChange: H,
              onCreate: _,
              onCreateFromTemplate: R,
              onStartTemplate: L,
              onSubmitTemplate: D,
              onCancelTemplate: O,
              onSkipTemplate: F,
              onImportNewProject: q,
              importing: z,
              conjureTarget: A,
              onConjureTargetChange: w,
              nativeAppChannels: "guild" === N ? E : null,
              onNativeAppChannelsChange: I,
              eligibleGuilds: x,
          });
}
