(n.r(t), n.d(t, { default: () => db }), n(321073));
var l,
    r,
    a = n(477900),
    i = n(582128),
    s = n(503698),
    o = n.n(s),
    u = n(536637),
    c = n.n(u),
    d = n(478104),
    f = n(17928),
    m = n(314116),
    h = n(534890),
    g = n(646270),
    p = n(31300),
    x = n(831453),
    v = n(376357),
    j = n(834730),
    b = n(939249),
    y = n(866665),
    k = n(140735),
    w = n(289873),
    A = n(821609),
    N = n(604525),
    S = n(92446),
    C = n(625903),
    E = n(297264),
    I = n(97893),
    M = n(364522),
    _ = n(103557),
    T = n(691885),
    P = n(789645),
    R = n(152367),
    L = n(661531),
    D = n(442433),
    $ = n(458518),
    F = n(627363),
    z = n(47167),
    O = n(713654),
    U = n(625180),
    G = n(672929),
    q = n(775946),
    B = n(742589),
    H = n(976860),
    K = n(402860),
    V = n(734057),
    W = n(696451),
    X = n(71393),
    J = n(576705),
    Y = n(164892),
    Q = n(922016),
    Z = n(980707),
    ee = n(477782),
    et = n(81369),
    en = n(712808);
(n(323874), n(14289), n(35956));
var el = n(77729),
    er = n(723702),
    ea = n(264572).Buffer;
async function ei(e, t) {
    if (er.isPlatformEmbedded) {
        let n = ea.from(await e.arrayBuffer());
        if ("function" == typeof el.A.fileManager.saveWithDialog2) await el.A.fileManager.saveWithDialog2(n, t);
        else
            try {
                await el.A.fileManager.saveWithDialog(n, t);
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
var es = n(248675),
    eo = n(660183);
async function eu(e, t, n) {
    (0, en.Hc)(e);
    let l = await (0, en.vX)(e, t);
    (0, en.dv)(e, n, [l]);
}
function ec(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, Y.Oq)(e.size, t)
        ? null
        : eo.intl.formatToPlainString(es.default.ThxcOX, { size: (0, Y.sM)((0, Y.Ju)(t)) });
}
async function ed(e, t) {
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
        r = await (0, en.cS)(e, l);
    await ei(r, l);
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
var em = n(950305),
    eh = n(664121);
let eg = [
    { value: "user", icon: em.UserIcon, nameMessage: es.default.s1TsXl },
    { value: "guild", icon: eh.R, nameMessage: es.default.LlLIJw },
];
function ep(e) {
    let { importing: t, onImport: n } = e,
        l = i.useRef(null),
        r = ef(i.useCallback((e) => n(e, "user"), [n])),
        s = ef(i.useCallback((e) => n(e, "guild"), [n])),
        o = { user: r.open, guild: s.open };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(Q.Y, {
                targetElementRef: l,
                position: "bottom",
                align: "right",
                animation: Q.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, a.jsx)(Z.W, {
                        "data-menu-migrated": !0,
                        navId: "conjure-import-scope",
                        "aria-label": eo.intl.string(es.default.soVyD1),
                        onClose: t,
                        onSelect: t,
                        children: (0, a.jsx)(ee.rX, {
                            label: eo.intl.string(es.default.NyVn6T),
                            children: eg
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: eo.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, a.jsx)(
                                        ee.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: o[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, n) => {
                    let { isShown: r } = n;
                    return (0, a.jsx)(A.$, {
                        ...e,
                        buttonRef: l,
                        variant: "secondary",
                        size: "sm",
                        icon: et.H,
                        text: eo.intl.string(es.default.NJGZA3),
                        loading: t,
                        disabled: t,
                        "aria-haspopup": "menu",
                        "aria-expanded": r,
                    });
                },
            }),
            r.input,
            s.input,
        ],
    });
}
var ex = n(652215),
    ev = n(746080),
    ej = n(245179),
    eb = n(404373),
    ey = n(639519),
    ek = n(361504);
function ew(e) {
    let { idea: t, installScope: n, submitting: l } = e;
    return l ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
}
var eA = n(371169),
    eN = n(42766);
function eS(e) {
    let { className: t, ariaLabel: n, disabled: l, onClick: r, children: i } = e;
    return (0, a.jsx)(b.D, { "aria-disabled": l, "aria-label": n, className: t, onClick: l ? void 0 : r, children: i });
}
var eC = n(865665),
    eE = n(373913);
let eI = { x: 5, y: 7 },
    eM = { x: 5, y: 4 };
function e_(e) {
    let { listClassName: t, radius: n, children: l } = e,
        [r, s] = i.useState(!1);
    return (0, a.jsxs)("div", {
        className: eE.n,
        onMouseEnter: () => s(!0),
        onMouseLeave: () => s(!1),
        children: [
            (0, a.jsx)("ol", { className: t, children: l }),
            r ? (0, a.jsx)(eC.C, { area: 64, radius: n, color: L.A.colors.TEXT_BRAND }) : null,
        ],
    });
}
var eT = n(864970),
    eP = n(707554),
    eR = n(770178),
    eL = n(765548),
    eD = n(595528),
    e$ = n(885576),
    eF = n(662429);
let ez = "heading-xxl/semibold",
    eO = !1;
function eU() {
    let e = i.useRef(null),
        [t, n] = i.useState(!0),
        l = (0, eL.A)((e) => {
            n(e.target.clientWidth >= 500);
        }),
        r = (0, eR.w)(l, [], { fireOnMount: !0 }),
        s = (0, f.bG)([eD.A], () => eD.A.isConnected());
    i.useEffect(() => {
        if (!s || !t || eO) return;
        let n = !1,
            l = 0;
        function r() {
            n ||
                (l = window.setTimeout(() => {
                    ((eO = !0), e.current?.play());
                }, 400));
        }
        let a = document.fonts;
        return (
            null == a ? r() : a.load("16px 'AI Visual Identity Glyphs'", "123456789ABC").then(r, r),
            () => {
                ((n = !0), window.clearTimeout(l));
            }
        );
    }, [s, t]);
    let o = (0, f.bG)([e$.A], () => e$.A.isIdle()),
        u = i.useRef(o);
    i.useEffect(() => {
        let t = u.current && !o;
        ((u.current = o), t && eO && (e.current?.stop(), e.current?.play()));
    }, [o]);
    let c = eo.intl.string(es.default["+5XyCR"]);
    return (0, a.jsx)("div", {
        ref: r,
        className: eF.x,
        children: t
            ? (0, a.jsx)(eP.H, { children: (0, a.jsx)(eT.o, { ref: e, text: c, variant: ez, delay: null }) })
            : (0, a.jsx)(E.D, { variant: ez, children: c }),
    });
}
var eG = n(548118);
let eq = "user";
var eB = n(885386),
    eH = n(540999);
let eK = Object.freeze({ x: 0.5, y: 0.5 });
function eV(e) {
    return "" !== e.trim();
}
function eW(e) {
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
function eX(e) {
    let { kind: t, name: n } = eW(e);
    return [t, n].filter((e) => "" !== e).join(" ");
}
function eJ(e) {
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
let eY = "[vibegrations:selected] ",
    eQ = " \u2014 ";
function eZ(e) {
    if (!e.startsWith(eY)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        r = n.slice(eY.length),
        a = r.indexOf(eQ),
        i = (-1 === a ? r : r.slice(0, a)).trim();
    return "" === i ? null : { label: i, body: l };
}
let e0 = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    e1 = new Map(),
    e2 = new Set();
function e3(e) {
    return e1.get(e) ?? e0;
}
function e4(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? e1.set(e, t) : e1.delete(e), [...e2]))
        try {
            n();
        } catch (e) {
            console.error("[vibegrations] design feedback subscriber threw", e);
        }
}
function e6(e) {
    e1.has(e) && e4(e, e0);
}
function e7(e, t) {
    let n = e3(e);
    n.active && e4(e, { ...n, context: t });
}
function e5(e, t) {
    return null != t && e.authorId === t;
}
function e8(e) {
    return (
        e2.add(e),
        () => {
            e2.delete(e);
        }
    );
}
function e9(e) {
    let t = i.useCallback(() => (null == e ? e0 : e3(e)), [e]);
    return i.useSyncExternalStore(e8, t, t);
}
var te = n(192308),
    tt = n(855793),
    tn = n(128761),
    tl = n(967008),
    tr = n(900797),
    ta = n(320448),
    ti = n(783977),
    ts = n(344587),
    to = n(534554),
    tu = n(837984),
    tc = n(359589),
    td = n(254575);
function tf(e) {
    let [t, n] = i.useState(e),
        [l, r] = i.useState(!1),
        [a, s] = i.useState(e);
    return (
        a !== e && (s(e), e ? n(!0) : r(!1)),
        i.useEffect(() => {
            if (e || !t) return;
            let l = setTimeout(() => n(!1), 150);
            return () => clearTimeout(l);
        }, [e, t]),
        i.useEffect(() => {
            if (!t || !e) return;
            let n = 0,
                l = requestAnimationFrame(() => {
                    n = requestAnimationFrame(() => r(!0));
                });
            return () => {
                (cancelAnimationFrame(l), cancelAnimationFrame(n));
            };
        }, [t, e]),
        { mounted: t, entered: l }
    );
}
function tm(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: s, placement: u, open: c, entered: d } = e,
        [f, m] = i.useState(!1),
        h = tf(f),
        g = Y.PY.indexOf(t.tier),
        p = f ? tr.t : ta._,
        x = Y.PY.map(to.D0),
        v = (0, to.Tc)(t.tier),
        { text: b, phase: y } = (0, ts.Q)(v);
    return (0, a.jsx)("div", {
        className: td.qd,
        "data-placement": u ?? void 0,
        children: (0, a.jsxs)("div", {
            className: o()(td.t$, { [td.Zr]: c && d, [td.GF]: !c }),
            role: "dialog",
            "aria-label": eo.intl.string(es.default["3E7Yc0"]),
            children: [
                h.mounted
                    ? (0, a.jsx)("div", {
                          className: o()(td.Nr, td.uO, { [td.Zr]: f && h.entered, [td.GF]: !f }),
                          children: (0, a.jsx)(tc.bR, { settings: t, tiers: n, choices: l, disabled: r, onChange: s }),
                      })
                    : null,
                (0, a.jsxs)("div", {
                    className: `${td.Nr} ${td.rF}`,
                    children: [
                        (0, a.jsxs)("div", {
                            className: td.wx,
                            children: [
                                (0, a.jsxs)("button", {
                                    type: "button",
                                    className: td.y6,
                                    "aria-expanded": f,
                                    "aria-label": eo.intl.string(es.default.eGqPbV),
                                    onClick: () => m((e) => !e),
                                    children: [
                                        (0, a.jsx)(j.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: eo.intl.string(es.default.aBPQxX),
                                        }),
                                        (0, a.jsx)(p, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: td.vg,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(j.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: o()(td.Z, { [td.xQ]: "exit" === y, [td.lm]: "enter" === y }),
                                    children: b,
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: td.hs,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: td.Nb,
                                    children: [
                                        (0, a.jsx)(j.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: eo.intl.string(es.default["/tlOR5"]),
                                        }),
                                        (0, a.jsx)(j.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: eo.intl.string(es.default.FxoUwB),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(tu.A, {
                                    activeIndex: g,
                                    stops: x,
                                    ariaLabel: eo.intl.string(es.default.aBPQxX),
                                    disabled: r,
                                    onSelect: function (e) {
                                        let n = Y.PY[e];
                                        null != n && n !== t.tier && s((0, to.CM)((0, to.j6)(t, n)));
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
function th(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: s, className: o, icon: u } = e,
        c = i.useRef(null),
        [d, f] = (0, tc.FT)(t, s),
        [m, h] = i.useState(!1),
        { mounted: g, entered: p } = tf(m);
    return (0, a.jsx)(Q.Y, {
        targetElementRef: c,
        position: "top",
        align: "right",
        shouldShow: g,
        onRequestClose: () => h(!1),
        animation: Q.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, a.jsx)(tm, {
                settings: d,
                tiers: n ?? null,
                choices: l,
                disabled: r,
                onChange: f,
                placement: t,
                open: m,
                entered: p,
            });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, a.jsx)(y.m, {
                text: eo.intl.string(es.default["k2JN/p"]),
                shouldShow: !n,
                ariaHidden: !0,
                children: (0, a.jsx)(b.D, {
                    innerRef: c,
                    className: o ?? td.hZ,
                    "aria-label": eo.intl.string(es.default["k2JN/p"]),
                    ...e,
                    onClick: () => h((e) => !e),
                    "aria-expanded": m,
                    children: u ?? (0, a.jsx)(ti.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
var tg = n(111534);
let tp = { width: 320, height: 240 };
var tx = n(573083),
    tv = n(855859),
    tj = n(238490),
    tb = n(754027),
    ty = n(696645);
function tk(e) {
    return "frame" === e.mode ? `frame-${e.surface}` : e.mode;
}
function tw(e) {
    switch (e.mode) {
        case "frame":
            return (0, ty.XV)(e.surface);
        case "widget":
            return eo.intl.string(es.default.y5GiL1);
        case "overlay":
            return eo.intl.string(es.default["2940LX"]);
        case "bot":
            return eo.intl.string(es.default.tjpaGN);
    }
}
var tA = n(598748),
    tN = n(294323),
    tS = n(457827),
    tC = n(25451),
    tE = n(280450),
    tI = n(373677),
    tM = n(86147),
    t_ = n(729475),
    tT = n(91242),
    tP = n(869146),
    tR = n(475815),
    tL = n(621466);
function tD(e) {
    return null == e ? null : document.querySelector(`[data-frame-id="${CSS.escape(e)}"]`);
}
function t$(e) {
    let t, n;
    return (
        null != e &&
        ((n =
            (t = document).fullscreenElement ??
            t.webkitFullscreenElement ??
            t.mozFullScreenElement ??
            t.msFullscreenElement ??
            null),
        ((0, tL.vq)(n, Element) ? n.getAttribute("data-frame-id") : null) === e)
    );
}
function tF(e) {
    return (0, tR.a3)(document, e);
}
function tz(e) {
    return i.useSyncExternalStore(tF, () => t$(e));
}
var tO = n(165610);
function tU(e) {
    let { frame: t, controlProjectId: n } = e,
        l = tz(t?.id ?? null),
        r = (0, tx.Zv)(n),
        i = (0, f.bG)(
            [tP.A, tT.A],
            () => null != t && tP.A.getWindowOpen(ex.MLl.ACTIVITY_POPOUT) && tT.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, tO.x1)(t) || i || r) return null;
    let s = tD(t.id);
    if (null == s || !(0, tR.Ub)(s)) return null;
    let o = eo.intl.string(l ? eo.t.Z7MyNB : eo.t.OIDkcp);
    return (0, a.jsx)(B.A.Icon, {
        tooltip: o,
        icon: l ? tM.z : t_.T,
        "aria-label": o,
        role: "switch",
        "aria-checked": l,
        selected: l,
        onClick: () => {
            var e;
            let n;
            null != (n = tD((e = t.id))) && (0, tR.Ub)(n) && (t$(e) ? (0, tR.sP)(n) : (0, tR.tl)(n));
        },
    });
}
var tG = n(559106),
    tq = n(847374),
    tB = n(704745);
function tH(e) {
    let { targets: t, target: n, onChange: l } = e,
        [r, s] = i.useState(!1),
        o = null != n && t.length > 1;
    r && !o && s(!1);
    let u = i.useCallback(() => s(!1), []),
        c = i.useCallback(() => s((e) => !e), []),
        d = i.useRef(null);
    if (!o) return null;
    let f = eo.intl.string(es.default.I2ucou);
    return (0, a.jsx)(Q.Y, {
        targetElementRef: d,
        shouldShow: r,
        onRequestClose: u,
        position: "bottom",
        align: "right",
        animation: Q.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, a.jsx)(Z.W, {
                "data-menu-migrated": !0,
                navId: "conjure-preview-target",
                "aria-label": f,
                onClose: r,
                onSelect: r,
                children: (0, a.jsx)(ee.rX, {
                    label: f,
                    children: t.map((e) => {
                        let t = tk(e);
                        return (0, a.jsx)(
                            ee.iD,
                            {
                                id: `preview-target-${t}`,
                                group: "conjure-preview-target",
                                label: tw(e),
                                checked: t === tk(n),
                                action: () => l(e),
                            },
                            t,
                        );
                    }),
                }),
            });
        },
        children: (e, t) => {
            let { onClick: l, ...r } = e,
                { isShown: i } = t;
            return (0, a.jsx)(tG.vN, {
                children: (0, a.jsxs)("button", {
                    ...r,
                    ref: d,
                    type: "button",
                    className: tB.h,
                    "aria-haspopup": "menu",
                    "aria-expanded": i,
                    onClick: c,
                    children: [
                        (0, a.jsx)(j.E, {
                            tag: "span",
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: eo.intl.string(es.default["N+VA1J"]),
                        }),
                        (0, a.jsx)(j.E, {
                            tag: "span",
                            variant: "text-sm/medium",
                            color: "none",
                            lineClamp: 1,
                            children: tw(n),
                        }),
                        (0, a.jsx)(tq.a, { size: "xs", color: "currentColor" }),
                    ],
                }),
            });
        },
    });
}
var tK = n(226178),
    tV = n(434279),
    tW = n(941985),
    tX = n(287809),
    tJ = n(427262),
    tY = n(803306);
let tQ = new Set(),
    tZ = new Map();
function t0(e, t, n) {
    return null == e ? (n ?? null) : (t ?? null);
}
function t1(e) {
    if (null == e || tQ.has(e) || null != tX.default.getUser(e)) return;
    let t = tZ.get(e) ?? 0;
    t >= 3 ||
        (tZ.set(e, t + 1),
        tQ.add(e),
        tY
            .wz(e)
            .finally(() => tQ.delete(e))
            .catch(() => {}));
}
var t2 = n(16619),
    t3 = n(782603),
    t4 = n(780338),
    t6 = n(663417),
    t7 = n(70688),
    t5 = n(173936),
    t8 = n(473935),
    t9 = n(408278),
    ne = n(365199),
    nt = n(7437),
    nn = n(147036),
    nl = n(957565),
    nr = n(785389),
    na = n(123917);
let ni = new Set();
var ns = n(289106),
    no = n(616334),
    nu = n(189714),
    nc = n(733791),
    nd = n(189213),
    nf = n(331322),
    nm = n(150934),
    nh = n(706935);
function ng(e) {
    let { project: t, target: n, action: l, ...r } = e,
        [s, o] = i.useState(n.canRemovePreviewBot),
        [u, c] = i.useState(!1),
        [d, f] = i.useState(null),
        m = "delete" === l,
        h = m ? (0, nc.fI)(n) : (0, nc.Kd)(n),
        g = m ? null : (0, nc.Mi)(n),
        p = m
            ? eo.intl.formatToPlainString(es.default.CJBhb2, { name: n.projectName })
            : eo.intl.formatToPlainString(es.default.x6FvsZ, { app: n.appName });
    async function x() {
        (c(!0), f(null));
        let e = m ? (0, eA.xx)(t.id) : (0, eA.YI)(t.id, { alsoRemovePreviewBot: s }),
            l = await e.catch(() => null);
        (c(!1), l?.ok !== !0)
            ? f(eo.intl.string(m ? es.default["0XDHob"] : es.default.PJ2Fkn))
            : (m || (0, v.P0)((0, v.ox)((0, nc.p_)(n), v.Ck.SUCCESS)), r.onClose());
    }
    return (0, a.jsx)(nd.a, {
        ...r,
        role: "alertdialog",
        title: m ? p : (0, nc.WX)((0, nh.tb)(es.default.x6FvsZ, n.appName)),
        subtitle: m ? (0, nc.J)(n) : eo.intl.string(es.default["8OKM1N"]),
        "aria-label": p,
        notice: null == d ? void 0 : { message: d, type: "critical" },
        actions: [
            { text: eo.intl.string(eo.t["ETE/oC"]), variant: "secondary", onClick: r.onClose },
            {
                text: eo.intl.string(m ? es.default.aC42bN : es.default.BGF8VT),
                variant: "critical-primary",
                loading: u,
                disabled: u,
                onClick: () => {
                    x().catch(() => {});
                },
            },
        ],
        children: (0, a.jsxs)(nf.B, {
            gap: 12,
            children: [
                h.length > 0 ? (0, a.jsx)(nh.Ay, { items: h }) : null,
                null != g ? (0, a.jsx)(j.E, { variant: "text-sm/normal", color: "text-muted", children: g }) : null,
                m || null == n.previewAppName
                    ? null
                    : (0, a.jsx)(nm.S, {
                          checked: s,
                          onChange: o,
                          disabled: !n.canRemovePreviewBot,
                          label: (0, nh.tb)(es.default["87CtcA"], n.previewAppName),
                      }),
            ],
        }),
    });
}
function np(e) {
    (0, te.openModal)((t) => (0, a.jsx)(ng, { ...t, ...e }));
}
var nx = n(552821);
let nv = [];
function nj(e) {
    (0, v.P0)((0, v.ox)(e, v.Ck.FAILURE));
}
function nb(e) {
    let {
            projectId: t,
            projectName: n,
            guildId: l,
            projectGuildId: r,
            isOwner: s,
            canRemix: o,
            onExport: u,
            onImport: c,
            onRemix: d,
            onConnectTool: h,
            onHistory: g,
            onRefresh: p,
            isRefreshing: x = !1,
            onClose: j,
            refreshApplicationId: b,
            previewProjectId: y,
            onCloseMenu: k,
        } = e,
        w = (0, nu.iI)(t),
        A = i.useContext(ns.bI),
        { pending: N, refresh: S } = (0, nt.A)(b ?? null),
        { pending: E, connect: I } = (function (e, t) {
            let [n, l] = i.useState(ni),
                r = i.useRef(ni),
                a = i.useCallback((e) => {
                    ((r.current = (0, nr.Q6)(r.current, e)), l(r.current));
                }, []);
            return {
                pending: n,
                connect: i.useCallback(
                    (n) => {
                        if (null == e) return;
                        let i = (0, nr.K9)(r.current, n.type);
                        async function s() {
                            let l = await (0, en.JI)(e, n.type);
                            (a(n.type), "url" === l.type)
                                ? (0, na.h)({ href: l.url, trusted: !1 })
                                : t(
                                      "setup" === (0, nr.rq)(l.error)
                                          ? eo.intl.string(es.default["jCQ/1B"])
                                          : eo.intl.string(es.default.POxkSh),
                                  );
                        }
                        null != i && ((r.current = i), l(i), s().catch(() => a(n.type)));
                    },
                    [t, e, a],
                ),
            };
        })(y ?? null, nj),
        M = (0, f.bG)([en.Ay], () => (null == y ? nv : en.Ay.getDeclaredConnections(y))),
        _ = i.useMemo(() => (0, nr.Xl)(M), [M]),
        T = (0, nc.Bs)(t),
        P = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: l, connectPending: r } = e,
                a = [];
            for (let { connection: e, offer: i } of (t &&
                a.push({
                    id: "preview-refresh",
                    label: eo.intl.string(es.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            l))
                a.push(
                    "authorize" === i
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: eo.intl.formatToPlainString(es.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: r.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: eo.intl.formatToPlainString(es.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return a;
        })({ canRefresh: null != b, refreshPending: N, offers: _, connectPending: E }),
        R = i.useMemo(() => new Map(M.map((e) => [e.type, e])), [M]),
        L = null != d && o,
        D = s && null != c,
        $ = L || null != u || D || null != h || null != g,
        F = nl.p5 && null != l,
        z = nl.p5,
        O = w ? t3.BellIcon : t4.BellSlashIcon;
    return (0, a.jsxs)(Z.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": eo.intl.string(eo.t.ogxXGq),
        onClose: k,
        onSelect: k,
        children: [
            null != p || null != j
                ? (0, a.jsxs)(ee.rX, {
                      children: [
                          null != p
                              ? (0, a.jsx)(ee.Dr, {
                                    id: "refresh",
                                    icon: t6.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: t6.RefreshIcon },
                                    label: eo.intl.string(es.default["p4B/7M"]),
                                    disabled: x,
                                    action: p,
                                })
                              : null,
                          null != j
                              ? (0, a.jsx)(ee.Dr, {
                                    id: "close",
                                    icon: t7.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: t7.DoorExitIcon },
                                    label: eo.intl.string(es.default["/TlGcK"]),
                                    action: j,
                                })
                              : null,
                      ],
                  })
                : null,
            P.length > 0
                ? (0, a.jsx)(ee.rX, {
                      children: P.map((e) =>
                          (0, a.jsx)(
                              ee.Dr,
                              {
                                  id: e.id,
                                  label: e.label,
                                  disabled: e.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === e.kind) return void S();
                                      let t = null == e.connectionType ? null : R.get(e.connectionType);
                                      null != t && I(t);
                                  },
                              },
                              e.id,
                          ),
                      ),
                  })
                : null,
            (0, a.jsx)(ee.rX, {
                children: (0, a.jsx)(ee.Dr, {
                    id: "mute",
                    label: eo.intl.string(w ? es.default.s9rCuH : es.default["a+i/As"]),
                    icon: O,
                    leadingAccessory: { type: "icon", icon: O },
                    action: () => (0, nu.$L)(t, !w),
                }),
            }),
            $
                ? (0, a.jsxs)(ee.rX, {
                      children: [
                          L
                              ? (0, a.jsx)(ee.Dr, { id: "remix", label: eo.intl.string(es.default.XWgAfc), action: d })
                              : null,
                          null != u
                              ? (0, a.jsx)(ee.Dr, { id: "export", label: eo.intl.string(es.default.WsEEP7), action: u })
                              : null,
                          D
                              ? (0, a.jsx)(ee.Dr, { id: "import", label: eo.intl.string(es.default.rWGY3e), action: c })
                              : null,
                          null != h
                              ? (0, a.jsx)(ee.Dr, {
                                    id: "connect-tool",
                                    label: eo.intl.string(es.default.yOIql5),
                                    action: h,
                                })
                              : null,
                          null != g
                              ? (0, a.jsx)(ee.Dr, {
                                    id: "history",
                                    label: eo.intl.string(es.default["3hIVou"]),
                                    action: g,
                                })
                              : null,
                      ],
                  })
                : null,
            z
                ? (0, a.jsxs)(ee.rX, {
                      children: [
                          F
                              ? (0, a.jsx)(ee.Dr, {
                                    id: "copy-link",
                                    label: eo.intl.string(eo.t.WqhZss),
                                    icon: t5.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: t5.LinkIcon },
                                    action: () =>
                                        (0, nl.C)((0, nn.n)(l, ev.VV.CONJURE, t), () =>
                                            (0, v.P0)((0, v.ox)(eo.intl.string(eo.t["L/PwZf"]), v.Ck.SUCCESS)),
                                        ),
                                })
                              : null,
                          (0, a.jsx)(ee.Dr, {
                              id: "copy-project-id",
                              label: eo.intl.string(es.default["nm/zuU"]),
                              icon: t8.L,
                              leadingAccessory: { type: "icon", icon: t8.L },
                              action: () =>
                                  (0, nl.C)(t, () =>
                                      (0, v.P0)((0, v.ox)(eo.intl.string(es.default.CmfaZG), v.Ck.SUCCESS)),
                                  ),
                          }),
                      ],
                  })
                : null,
            s || T?.canRemoveBot === !0
                ? (0, a.jsxs)(ee.rX, {
                      children: [
                          s
                              ? (0, a.jsx)(ee.Dr, {
                                    id: "settings",
                                    label: eo.intl.string(es.default.FzfmQ8),
                                    icon: C.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: C.SettingsIcon },
                                    action: () =>
                                        (0, no.A)(t, {
                                            guildId: r ?? l,
                                            initialTab: "project",
                                            isPreview: !0,
                                            publishOptions: A,
                                        }),
                                })
                              : null,
                          T?.canRemoveBot === !0
                              ? (0, a.jsx)(ee.Dr, {
                                    id: "remove-from-server",
                                    label: eo.intl.formatToPlainString(es.default["3gKG2j"], { server: T.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let e = eN.Ay.getProject(t);
                                        null != e && np({ project: e, target: T, action: "remove" });
                                    },
                                })
                              : null,
                          s
                              ? (0, a.jsx)(ee.Dr, {
                                    id: "delete",
                                    label: eo.intl.string(eo.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let e = eN.Ay.getProject(t);
                                        if (null != e && null != T) np({ project: e, target: T, action: "delete" });
                                        else
                                            (0, m.A)({
                                                title: eo.intl.formatToPlainString(es.default.CJBhb2, { name: n }),
                                                subtitle: eo.intl.string(es.default["0OmrVn"]),
                                                confirmText: eo.intl.string(eo.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, eA.K)(t, () =>
                                                        (0, v.P0)(
                                                            (0, v.ox)(
                                                                eo.intl.string(es.default["0XDHob"]),
                                                                v.Ck.FAILURE,
                                                            ),
                                                        ),
                                                    );
                                                },
                                            });
                                    },
                                })
                              : null,
                      ],
                  })
                : null,
        ],
    });
}
function ny(e) {
    let { trigger: t = "header", ...n } = e,
        l = i.useRef(null);
    return (0, a.jsx)(Q.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: Q.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(nb, { ...n, onCloseMenu: t });
        },
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: i } = n;
            return (0, a.jsx)("div", {
                ref: l,
                className: nx.h,
                children:
                    "iconButton" === t
                        ? (0, a.jsx)(y.m, {
                              text: eo.intl.string(eo.t["UKOtz+"]),
                              children: (0, a.jsx)(t9.K, {
                                  icon: ne.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": eo.intl.string(eo.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": i,
                                  onClick: r,
                              }),
                          })
                        : (0, a.jsx)(B.A.Icon, {
                              icon: ne.MoreHorizontalIcon,
                              tooltip: eo.intl.string(eo.t["UKOtz+"]),
                              "aria-label": eo.intl.string(eo.t["UKOtz+"]),
                              "aria-haspopup": "menu",
                              "aria-expanded": i,
                              selected: i,
                              onClick: r,
                          }),
            });
        },
    });
}
var nk = n(497183),
    nw = n(104171),
    nA = n(286739);
function nN(e) {
    let { creator: t, className: n } = e;
    return (0, a.jsx)("div", {
        className: o()(nA.c, n),
        "aria-hidden": !0,
        children: (0, a.jsx)(nw.Ay, { users: [t.creator, ...t.collaborators], max: 3, size: nw.DN.SIZE_16 }),
    });
}
var nS = n(246338);
let nC = "user",
    nE = "no-server",
    nI = new Map();
function nM(e) {
    return nI.get(e) ?? null;
}
function n_(e) {
    switch (e) {
        case "all":
        case nC:
        case nE:
            return null;
        default:
            return e;
    }
}
function nT(e, t) {
    switch (t) {
        case "all":
            return !0;
        case nC:
            return "user" === e.install_scope;
        case nE:
            return null == (0, tV.wu)(e);
        default:
            return e.guild_id === t || e.preview_guild_id === t;
    }
}
var nP = n(506774);
let nR = "VibegrationsProjectsPanelOpen";
function nL() {
    return nP.w.get(nR) ?? null;
}
function nD(e) {
    return `VibegrationsProjectsPanel:${e}`;
}
var n$ = n(803101),
    nF = n(808728),
    nz = n(516288);
function nO(e) {
    let { reason: t, message: n, onConfirm: l, transitionState: r, onClose: i } = e,
        s = (0, nz.t)(t, n);
    return (0, a.jsx)(nd.a, {
        transitionState: r,
        onClose: i,
        title: s.title,
        subtitle: s.body,
        size: "sm",
        actions:
            null == s.cancel
                ? [{ text: s.action, variant: "primary", onClick: i }]
                : [
                      { text: s.cancel, variant: "secondary", onClick: i },
                      {
                          text: s.action,
                          variant: "primary",
                          onClick: () => {
                              (i(), l?.());
                          },
                      },
                  ],
    });
}
var nU = n(951465),
    nG = n(95264),
    nq = n(952644),
    nB = n(991690),
    nH = n(58736),
    nK = n(689175),
    nV = n(65593),
    nW = n(115982);
function nX(e) {
    return !(0, ej.BL)(e) && !0 !== e.stopRequested;
}
var nJ = n(104317),
    nY = n(643278),
    nQ = n(566424),
    nZ = n(683063),
    n0 = n(138212);
function n1(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: i, ...s } = e;
    return (0, a.jsxs)("section", {
        className: o()(n0.Nr, r),
        ...s,
        children: [
            (0, a.jsxs)("header", {
                className: o()(n0.wx, null != n && n0.o5, i),
                children: [
                    (0, a.jsx)(j.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var n2 = n(148590);
function n3(e) {
    let { children: t } = e;
    return (0, a.jsx)(j.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function n4(e) {
    let {
            title: t,
            meta: n,
            superseded: l = !1,
            showLabel: r,
            hideLabel: s,
            bodyClassName: u,
            beforeBody: c,
            children: d,
            ...f
        } = e,
        m = i.useId(),
        [h, g] = i.useState(!l),
        [p, x] = i.useState(l);
    p !== l && (x(l), g(!l));
    let v = i.useCallback(() => g((e) => !e), []),
        j = h ? tq.a : ta._,
        y = null != n || l;
    return (0, a.jsxs)(n1, {
        ...f,
        title: t,
        trailing: y
            ? (0, a.jsxs)("span", {
                  className: n2.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(b.D, {
                                className: n2.L$,
                                onClick: v,
                                "aria-expanded": h,
                                "aria-controls": m,
                                "aria-label": h ? s : r,
                                children: (0, a.jsx)(j, { size: "xs", color: "currentColor" }),
                            })
                          : null,
                  ],
              })
            : void 0,
        headerClassName: h ? void 0 : n2.RG,
        "data-superseded": l ? "true" : void 0,
        children: [c, (0, a.jsx)("div", { id: m, className: o()(n2.rf, u), hidden: !h, children: d })],
    });
}
var n6 = n(883646);
let n7 = [];
function n5(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: o()(n6.xL, {
            [n6.Vb]: "in_progress" === t,
            [n6.cT]: "completed" === t,
            [n6.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return eo.intl.string(es.default.KvBdun);
                case "in_progress":
                    return eo.intl.string(es.default["m5G9+S"]);
                case "unfinished":
                    return eo.intl.string(es.default.lRpwhD);
                default:
                    return eo.intl.string(es.default.sPGeWi);
            }
        })(t),
        children: [
            (0, a.jsx)(w.y, {
                type: w.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: n6.Qd,
                itemClassName: n6.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: n6.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: n6.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function n8(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : n7), [n, t]),
        r = i.useMemo(() => new Set(l.map((e) => e.key)), [l]),
        s = l.map((e) => e.key).join("\0"),
        [o, u] = i.useState(l),
        [c, d] = i.useState(s),
        [f, m] = i.useState(!1);
    c !== s && (d(s), u([...l, ...o.filter((e) => !r.has(e.key))]), 0 === l.length && m(!1));
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
                    e = requestAnimationFrame(() => m(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [n, o.length]),
        0 === o.length)
    )
        return null;
    let g = o.slice(0, 3),
        p = o.length - g.length;
    return (0, a.jsxs)("span", {
        className: n6.X6,
        "data-shown": n && f ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    nZ.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: n6.MA,
                            "data-leaving": r.has(t) ? void 0 : "true",
                            children: (0, a.jsx)(s, { size: 16, alt: l, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            p > 0
                ? (0, a.jsx)(j.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: n6.qA,
                      children: `+${p}`,
                  })
                : null,
        ],
    });
}
function n9(e) {
    let t,
        { todos: n, provisional: l, agents: r, live: s = !0 } = e,
        u = (function (e) {
            let t = e.join("\0"),
                [n, l] = i.useState(() => new Set(e)),
                [r, a] = i.useState(t),
                [s, o] = i.useState(() => new Set());
            return (
                r !== t && (a(t), l(new Set(e)), o(0 === n.size ? new Set() : new Set(e.filter((e) => !n.has(e))))),
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
        c =
            ((t = (r ?? n7).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            i.useMemo(() => {
                let e = new Map();
                for (let t of r ?? n7) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let n = e.get(t.todoId);
                    null != n ? n.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, a.jsxs)("ul", {
        className: n6.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: o()(n6.AS, { [n6.J1]: "completed" === n }),
                        "data-arriving": u.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(n5, { status: n }),
                            (0, a.jsx)(j.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: n6.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: n6.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(n8, { agents: c.get(e.id) ?? n7, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: n6.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(n5, { status: "pending" }),
                          (0, a.jsx)(j.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: n6.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: n6.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function le(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let c = eo.intl.formatToPlainString(es.default["P/I+JW"], { completed: o, total: u }),
        d = eo.intl.formatToPlainString(es.default["7tzwKB"], { completed: o, total: u });
    return (0, a.jsx)(n4, {
        title: eo.intl.string(es.default.RtzECX),
        meta: (0, a.jsx)(n3, { children: c }),
        superseded: s,
        showLabel: eo.intl.string(es.default.RKyN9q),
        hideLabel: eo.intl.string(es.default.xydHoj),
        className: n6.Nr,
        bodyClassName: n6.rf,
        beforeBody: r && !s ? (0, a.jsx)(k.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(n9, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var lt = n(308665),
    ln = n(59678),
    ll = n(903847);
function lr(e) {
    let { line: t, placement: n, todos: l, todosLive: r = !0, provisionalTodo: s, agents: u, onJumpToActivity: c } = e,
        d = null != n,
        [f, m] = i.useState(n ?? "top"),
        [h, g] = i.useState(d),
        [p, x] = i.useState(!1),
        [v, j] = i.useState(!1),
        [k, w] = i.useState(d);
    (k !== d && (w(d), null != n ? (m(n), g(!0)) : (x(!1), j(!1))),
        i.useEffect(() => {
            if (d || !h) return;
            let e = setTimeout(() => g(!1), 150);
            return () => clearTimeout(e);
        }, [d, h]),
        i.useEffect(() => {
            if (!h || !d) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => x(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [h, d]));
    let [A, N] = i.useState(!1),
        [S, C] = i.useState(!1),
        [E, I] = i.useState(v);
    (E !== v && (I(v), v ? N(!0) : C(!1)),
        i.useEffect(() => {
            if (v || !A) return;
            let e = setTimeout(() => N(!1), 150);
            return () => clearTimeout(e);
        }, [v, A]),
        i.useEffect(() => {
            if (!A || !v) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => C(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [A, v]));
    let M = null != l && l.length > 0,
        _ = i.useCallback(() => j((e) => !e), []);
    return h
        ? (0, a.jsxs)("div", {
              className: ll.qd,
              "data-placement": f,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: o()(ll.vK, { [ll.ho]: p && d, [ll.ET]: !d }),
                      children: [
                          null == c
                              ? (0, a.jsx)("ol", {
                                    className: o()(ll.Rk, ln.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(nQ.A, {
                                        glyph: (0, a.jsx)(lt.Ay, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(b.D, {
                                    className: ll.pZ,
                                    onClick: c,
                                    "aria-label": eo.intl.string(es.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: o()(ll.Rk, ln.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(nQ.A, {
                                            glyph: (0, a.jsx)(lt.Ay, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          M
                              ? (0, a.jsx)(y.m, {
                                    text: eo.intl.string(es.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(b.D, {
                                        className: ll.BO,
                                        onClick: _,
                                        "aria-expanded": v,
                                        "aria-label": eo.intl.string(es.default.RtzECX),
                                        children: (0, a.jsx)(nY.ClipboardListIcon, {
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
                  A && M
                      ? (0, a.jsx)("div", {
                            className: o()(ll.vB, { [ll.pg]: v && S, [ll.ui]: !v }),
                            children: (0, a.jsx)(le, {
                                todos: l,
                                provisional: s,
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
var la = n(658675),
    li = n(22231),
    ls = n(826745),
    lo = n(123292);
let lu = {
        [ex.rbe.GUILD_TEXT]: "text",
        [ex.rbe.GUILD_VOICE]: "voice",
        [ex.rbe.GUILD_ANNOUNCEMENT]: "announcement",
        [ex.rbe.GUILD_STAGE_VOICE]: "stage",
        [ex.rbe.GUILD_FORUM]: "forum",
        [ex.rbe.GUILD_MEDIA]: "media",
    },
    lc = { channel: "#", role: "@", user: "@" };
var ld = n(155078);
function lf(e) {
    return e.options.some((e) => null != e.image);
}
let lm = [];
function lh(e, t) {
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
var lg = n(890497),
    lp = n(300344),
    lx = n(614733),
    lv = n(904363),
    lj = n(950902),
    lb = n(384017);
function ly(e) {
    let {
            guildId: t,
            question: n,
            value: l,
            disabled: r,
            onChange: i,
            onFocus: s,
            onBlur: o,
            options: u,
            placeholder: c,
            onQueryChange: d,
            matchSorterOptions: f,
        } = e,
        m = !0 === n.multi_select,
        h = l.map((e) => e.id);
    function g(e) {
        let t = n.input ?? "channel";
        return e.slice(0, 10).map((e) => ({
            id: e,
            name: u.find((t) => t.value === e)?.label ?? l.find((t) => t.id === e)?.name ?? e,
            ...(function (e, t) {
                if ("channel" === e) {
                    var n;
                    let l = null == (n = V.A.getChannel(t)?.type) ? void 0 : lu[n];
                    return { kind: e, ...(null == l ? {} : { channel_type: l }) };
                }
                if ("user" === e) {
                    let n = tX.default.getUser(t)?.username;
                    return { kind: e, ...(null == n ? {} : { username: n }) };
                }
                return { kind: e };
            })(t, e),
        }));
    }
    let p = {
        options: u,
        placeholder: c,
        disabled: r,
        onQueryChange: d,
        matchSorterOptions: f,
        onFocus: s,
        onBlur: o,
        fullWidth: !0,
        maxOptionsVisible: 4,
        label: n.question,
        hideLabel: !0,
    };
    return (0, a.jsx)("div", {
        className: lb.YX,
        "data-conjure-clarification-picker": n.input,
        children: m
            ? (0, a.jsx)(lg.Z, {
                  ...p,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => i(g(e), t),
              })
            : (0, a.jsx)(lg.Z, {
                  ...p,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => i(null == e ? [] : g([e]), t),
              }),
    });
}
let lk = {
    channel: [es.default["9+dfPT"], es.default.pGSJqE],
    role: [es.default["2VkCoD"], es.default.c8YlX8],
    user: [es.default.GZIAxl, es.default["4bptbQ"]],
};
function lw(e, t) {
    return eo.intl.string(lk[e][+!!t]);
}
function lA(e) {
    let { guildId: t, fallback: n, ...l } = e,
        r = (0, lp.A)(t, l.question.channel_filter);
    return null == r
        ? n
        : (0, a.jsx)(ly, { ...l, guildId: t, options: r, placeholder: lw("channel", !0 === l.question.multi_select) });
}
function lN(e) {
    let { guildId: t, ...n } = e,
        l = (0, lv.A)(t);
    return (0, a.jsx)(ly, { ...n, guildId: t, options: l, placeholder: lw("role", !0 === n.question.multi_select) });
}
function lS(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: i } = (0, lx.A)(t);
    return (0, a.jsx)(ly, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: i,
        placeholder: lw("user", !0 === n.question.multi_select),
    });
}
function lC(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, lj.Tj)(t, !0);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, a.jsx)(lA, { guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, a.jsx)(lN, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, a.jsx)(lS, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var lE = n(87221),
    lI = n(144228),
    lM = n(241326),
    l_ = n(26430),
    lT = n(750943),
    lP = n(95477),
    lR = n(256905),
    lL = n(73153),
    lD = n(839214);
let l$ = [],
    lF = 1,
    lz = (0, lD.D)(() => ({ draftsByProject: {} }));
function lO(e, t, n) {
    return e.draftsByProject[t]?.[n] ?? l$;
}
function lU(e, t) {
    return lO(lz.getState(), e, t);
}
function lG(e, t, n) {
    let { draftsByProject: l } = lz.getState();
    lz.setState({ draftsByProject: { ...l, [e]: { ...l[e], [t]: n } } });
}
function lq(e, t, n, l) {
    let r = lU(e, t);
    return (
        !!r.some((e) => e.localId === n) &&
        (lG(
            e,
            t,
            r.map((e) => (e.localId === n ? { ...e, ...l } : e)),
        ),
        !0)
    );
}
function lB(e, t) {
    (0, en.Vm)(e, t).catch((e) => {
        console.error("[vibegrations] attachment cleanup failed", e);
    });
}
function lH(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && lB(e, t.ref.id));
}
function lK(e, t) {
    let { deleteFromWorker: n } = t,
        { draftsByProject: l } = lz.getState(),
        r = l[e];
    if (null == r) return;
    for (let t of Object.values(r))
        for (let l of t ?? l$) n ? lH(e, l) : null != l.previewUrl && URL.revokeObjectURL(l.previewUrl);
    let { [e]: a, ...i } = l;
    lz.setState({ draftsByProject: i });
}
function lV(e) {
    return eo.intl.formatToPlainString(es.default.JZ59Bo, { size: (0, Y.sM)((0, Y.Ju)(e)) });
}
function lW(e, t) {
    let n = lU(e, t);
    if (0 !== n.length) {
        for (let t of n) lH(e, t);
        lG(e, t, l$);
    }
}
function lX(e, t) {
    let n = lU(e, t);
    if (0 === n.length) return [];
    for (let e of n) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (lG(e, t, l$), n.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function lJ(e, t) {
    let { clarificationAnswers: n, attachments: l = [] } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = lU(e, "chat"),
        a = r.length > 0 && r.every((e) => "ready" === e.status) ? lX(e, "chat") : [];
    (0, en.dv)(e, t, [...l, ...a], { clarificationAnswers: n });
}
function lY(e, t) {
    let [n, l] = i.useState(null),
        [r, a] = i.useState(!1),
        [s, o] = i.useState(0);
    return (
        i.useEffect(() => {
            let n = !1;
            return (
                (0, en.PK)(e, t).then(
                    (e) => {
                        n || l(e);
                    },
                    () => {
                        n || (0 === s ? o(1) : a(!0));
                    },
                ),
                () => {
                    n = !0;
                }
            );
        }, [e, t, s]),
        {
            src: n,
            gone: r,
            handleError: i.useCallback(() => {
                (l(null),
                    (0, en.n6)(e, t).then(
                        (e) => {
                            e && 0 === s ? o(1) : a(!0);
                        },
                        () => a(!0),
                    ));
            }, [e, t, s]),
        }
    );
}
(lL.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(lz.getState().draftsByProject)) lK(e, { deleteFromWorker: !0 });
}),
    lL.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        lK(t, { deleteFromWorker: !1 });
    }));
var lQ = n(907702);
function lZ(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: u, handleError: c } = lY(t, n),
        [d, f] = i.useState(null),
        m = null != s && d === s;
    return u
        ? (0, a.jsxs)("span", {
              className: o()(lQ.Gt, lQ.b6),
              children: [
                  (0, a.jsx)(lE.D, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(j.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: eo.intl.string(es.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: o()(lQ.Gt, { [lQ.iP]: !m }),
              children:
                  null != s
                      ? (0, a.jsx)("img", {
                            src: s,
                            alt: l,
                            className: lQ.Sl,
                            onLoad: (e) => {
                                f(s);
                                let { naturalWidth: t, naturalHeight: n } = e.currentTarget;
                                t > 0 && n > 0 && r({ width: t, height: n });
                            },
                            onError: c,
                            draggable: !1,
                        })
                      : null,
          });
}
function l0(e) {
    let t,
        n,
        {
            projectId: l,
            option: r,
            multi: i,
            selected: s,
            disabled: u,
            reachable: c,
            tabbable: d,
            onPick: f,
            onView: m,
            onArrow: h,
            onMeasured: g,
            onRemove: p,
        } = e,
        x = eo.intl.formatToPlainString(es.default.JGjZMs, { answer: r.label });
    return (0, a.jsxs)("div", {
        className: o()(lQ.Vs, { [lQ.Q9]: s, [lQ.RX]: u }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, a.jsxs)(b.D, {
                className: lQ.Up,
                "data-conjure-image-option-pick": !0,
                onClick: u ? void 0 : () => f(r),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), h(r, t));
                },
                role: i ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": eo.intl.formatToPlainString(es.default.AQbxhf, { answer: r.label }),
                "aria-disabled": u,
                tabIndex: c && d ? 0 : -1,
                children: [
                    (0, a.jsxs)("span", {
                        className: lQ.$_,
                        children: [
                            null != r.image
                                ? (0, a.jsx)(lZ, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: g,
                                  })
                                : (0, a.jsx)("span", { className: lQ.Gt }),
                            (0, a.jsx)("span", {
                                className: lQ.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, a.jsx)(la.P, { checked: s, disabled: u })
                                    : (0, a.jsx)(lI.T, { checked: s, disabled: u }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(j.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: lQ.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, ld.E)(t) : "")
                                ? (function (e) {
                                      let t = e.toLowerCase().split(".");
                                      if (t.length < 2 || /^\d+$/.test(t[t.length - 1]) || e.includes(":")) return e;
                                      let [n, l] = t.slice(-2),
                                          r = t.length > 2 && 2 === l.length && n.length <= 3;
                                      return t.slice(r ? -3 : -2).join(".");
                                  })(n)
                                : r.label,
                    }),
                ],
            }),
            null != p
                ? (0, a.jsx)("span", {
                      className: lQ.B4,
                      children: (0, a.jsx)(y.m, {
                          text: eo.intl.string(es.default.HQEXJM),
                          children: (0, a.jsx)(t9.K, {
                              icon: lM.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: p,
                              disabled: u,
                              "aria-label": eo.intl.string(es.default.HQEXJM),
                              tabIndex: c ? 0 : -1,
                          }),
                      }),
                  })
                : null != r.image
                  ? (0, a.jsx)("span", {
                        className: lQ.B4,
                        children: (0, a.jsx)(y.m, {
                            text: eo.intl.string(es.default["4/eeDD"]),
                            children: (0, a.jsx)(t9.K, {
                                icon: l_._,
                                size: "sm",
                                variant: "overlay-secondary",
                                onClick: () => m(r),
                                "aria-label": x,
                                tabIndex: c && d ? 0 : -1,
                            }),
                        }),
                    })
                  : null,
        ],
    });
}
function l1(e) {
    var t;
    let { projectId: n, question: l, selectedIds: r, disabled: s, reachable: u = !0, onPick: c, own: d } = e,
        f = !0 === l.multi_select,
        { options: m } = l,
        h = m.length > 4 ? "gallery" : "row",
        g = i.useRef(null),
        p = i.useRef(new Map()),
        [x, v] = i.useState(null),
        j = null != x && m.some((e) => e.id === x) ? x : (m.find((e) => r.includes(e.id)) ?? m[0])?.id,
        b = i.useCallback(
            (e) => {
                let t = m.flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    l = t.findIndex((t) => t.id === e.id);
                l < 0 ||
                    Promise.all(t.map((e) => (0, en.PK)(n, e.image.attachment_id))).then(
                        (e) => {
                            (0, lR.R)({
                                items: e.map((e, n) => {
                                    let l,
                                        r = p.current.get(t[n].id);
                                    return {
                                        type: "IMAGE",
                                        url: e,
                                        original: e,
                                        alt: t[n].label,
                                        ...(null != r
                                            ? ((l = Math.max(1, 480 / Math.max(r.width, r.height))),
                                              { width: Math.round(r.width * l), height: Math.round(r.height * l) })
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
            [m, n],
        ),
        y = i.useCallback(
            (e, t) => {
                let n = (m.findIndex((t) => t.id === e.id) + t + m.length) % m.length,
                    l = m[n];
                (v(l.id), g.current?.querySelectorAll("[data-conjure-image-option-pick]")[n]?.focus(), f || s || c(l));
            },
            [s, f, c, m],
        ),
        k =
            null == d.image
                ? null
                : ((t = d.image),
                  {
                      id: `own:${t.attachment.id}`,
                      label: eo.intl.string(es.default.SUdqCQ),
                      image: { attachment_id: t.attachment.id },
                  });
    return (0, a.jsxs)("div", {
        className: lQ.Nz,
        "data-conjure-image-options": !0,
        children: [
            (0, a.jsxs)("div", {
                ref: g,
                className: o()(lQ.fF, "gallery" === h ? lQ.nV : lQ.nM, { [lQ.m3]: f }),
                role: f ? "group" : "radiogroup",
                "aria-labelledby": `${l.id}-label`,
                "data-layout": h,
                "data-count": m.length,
                children: [
                    m.map((e) =>
                        (0, a.jsx)(
                            l0,
                            {
                                projectId: n,
                                option: e,
                                multi: f,
                                selected: r.includes(e.id),
                                disabled: s,
                                reachable: u,
                                tabbable: f || e.id === j,
                                onPick: (e) => {
                                    (v(e.id), c(e));
                                },
                                onView: b,
                                onArrow: y,
                                onMeasured: (t) => p.current.set(e.id, t),
                            },
                            e.id,
                        ),
                    ),
                    null != k
                        ? (0, a.jsx)(
                              l0,
                              {
                                  projectId: n,
                                  option: k,
                                  multi: f,
                                  selected: d.selected,
                                  disabled: s,
                                  reachable: u,
                                  tabbable: !0,
                                  onPick: d.onPick,
                                  onView: () => void 0,
                                  onArrow: () => void 0,
                                  onMeasured: () => void 0,
                                  onRemove: d.onRemove,
                              },
                              k.id,
                          )
                        : null,
                ],
            }),
            (0, a.jsx)(l2, {
                projectId: n,
                own: d,
                disabled: s,
                reachable: u,
                uploadText: eo.intl.string(/\bicons?\b/i.test(l.question) ? es.default.qU4WN6 : es.default.cbMDDB),
            }),
        ],
    });
}
function l2(e) {
    let { projectId: t, own: n, disabled: l, reachable: r, uploadText: s } = e,
        o = i.useRef(null),
        [u, c] = i.useState(!1),
        [d, f] = i.useState(""),
        m = r ? 0 : -1,
        h = n.busy;
    function g() {
        "" !== d.trim() &&
            null == h &&
            n.onLink(d.trim()).then(
                (e) => {
                    e && (c(!1), f(""));
                },
                () => void 0,
            );
    }
    return (0, a.jsxs)("div", {
        className: lQ.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, a.jsxs)("div", {
                className: lQ.QJ,
                children: [
                    (0, a.jsx)(A.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: lT.X,
                        text: s,
                        loading: "upload" === h,
                        disabled: l || "link" === h,
                        onClick: () => o.current?.click(),
                        tabIndex: m,
                        "data-conjure-own-image-upload": !0,
                    }),
                    u
                        ? null
                        : (0, a.jsx)(A.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: t5.LinkIcon,
                              text: eo.intl.string(es.default["1TgOO+"]),
                              disabled: l || "upload" === h,
                              onClick: () => c(!0),
                              tabIndex: m,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, a.jsx)("input", {
                        ref: o,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: lQ.Fg,
                        tabIndex: -1,
                        "aria-hidden": !0,
                        onChange: (e) => {
                            var l, r;
                            let a = e.currentTarget.files?.[0];
                            ((e.currentTarget.value = ""),
                                null != a &&
                                    n.onUpload(
                                        ((l = a.name),
                                        (r = a.type),
                                        (0, Y.Oq)(a.size, r)
                                            ? (0, en.c9)(t, a, l, r)
                                            : Promise.resolve({ errorText: lV(r) })),
                                    ));
                        },
                    }),
                ],
            }),
            u
                ? (0, a.jsxs)("div", {
                      className: lQ.vG,
                      children: [
                          (0, a.jsx)("div", {
                              className: lQ.Hs,
                              children: (0, a.jsx)(lP.k, {
                                  label: eo.intl.string(es.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: eo.intl.string(es.default.AVhvn8),
                                  value: d,
                                  onChange: (e) => f(e),
                                  onKeyDown: (e) => {
                                      "Enter" === e.key
                                          ? (e.preventDefault(), g())
                                          : "Escape" === e.key && (e.stopPropagation(), c(!1));
                                  },
                                  autoFocus: !0,
                                  type: "url",
                                  error: null == h && n.error?.source === "link" ? n.error.text : null,
                                  disabled: l,
                                  "data-conjure-own-image-link-input": !0,
                              }),
                          }),
                          (0, a.jsxs)("div", {
                              className: lQ.gd,
                              children: [
                                  (0, a.jsx)(A.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: eo.intl.string(es.default.FbRbeM),
                                      loading: "link" === h,
                                      disabled: l || "" === d.trim(),
                                      onClick: g,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, a.jsx)(lo.Q, {
                                      variant: "secondary",
                                      textVariant: "text-sm/medium",
                                      text: eo.intl.string(es.default.eXZL4X),
                                      onClick: () => c(!1),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
            n.error?.source === "upload"
                ? (0, a.jsx)(j.E, {
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
var l3 = n(29073);
function l4(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: u } = e,
        c = i.useId(),
        d = !0 === t.recommended,
        f = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(b.D, {
        className: o()(lb.uK, { [lb.ue]: l, [lb.h4]: !0 === u }),
        onClick: l ? void 0 : () => r(t),
        "aria-label": eo.intl.formatToPlainString(d ? es.default["2p6UFz"] : es.default.AQbxhf, { answer: t.label }),
        "aria-describedby": f ? c : void 0,
        "aria-disabled": l,
        role: null != u ? "checkbox" : void 0,
        "aria-checked": u,
        tabIndex: s ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            null != u
                ? (0, a.jsx)("span", { className: lb.dy, children: (0, a.jsx)(la.P, { checked: u, disabled: l }) })
                : (0, a.jsx)("span", { className: lb.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: lb.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: lb.l8,
                        children: (0, a.jsx)(j.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: lb.ed,
                            children: t.label,
                        }),
                    }),
                    f
                        ? (0, a.jsx)(j.E, {
                              tag: "span",
                              id: c,
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: t.detail,
                          })
                        : null,
                ],
            }),
            d
                ? (0, a.jsx)(j.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: lb.rM,
                      children: eo.intl.string(es.default.zku6r1),
                  })
                : null,
        ],
    });
}
function l6(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: i = !0, onPick: s, own: o } = e,
        u = !0 === n.multi_select;
    return lf(n)
        ? (0, a.jsx)(l1, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: i, onPick: s, own: o })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      l4,
                      {
                          option: e,
                          position: t + 1,
                          disabled: r,
                          selected: u ? l.includes(e.id) : void 0,
                          onPick: s,
                          reachable: i,
                      },
                      e.id,
                  ),
              ),
          });
}
let l7 = [],
    l5 = [];
function l8(e) {
    let {
            projectId: t,
            question: n,
            draft: l,
            selected: r,
            direction: i,
            disabled: s,
            ownImage: u,
            ownSelected: c,
        } = e,
        d = "" === l.trim() ? null : l,
        f = !0 === n.multi_select;
    return (0, a.jsxs)("div", {
        className: o()(lb.Ge, lb.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            f
                ? (0, a.jsx)(j.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: lb.aK,
                      children: eo.intl.string(es.default.tE8qbz),
                  })
                : null,
            (0, a.jsx)(l6, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: lh(u, c),
            }),
            lf(n) || !1 === n.allow_custom
                ? null
                : (0, a.jsxs)("div", {
                      className: lb.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: lb.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(li.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == d ? null : (0, a.jsx)("span", { className: o()(lb.Pu, lb.es), children: d }),
                      ],
                  }),
        ],
    });
}
function l9(e) {
    var t;
    let { projectId: n, clarification: l, onSubmit: r, onDismiss: s } = e,
        [u, c] = i.useState({}),
        [d, f] = i.useState({}),
        [m, h] = i.useState({}),
        [g, p] = i.useState({}),
        [x, v] = i.useState({}),
        [k, w] = i.useState(!1),
        [N, S] = i.useState(0),
        [C, E] = i.useState(null),
        [I, M] = i.useState(null),
        [_, T] = i.useState(null),
        [R, L] = i.useState(!1),
        D = i.useRef(null),
        [$, F] = i.useState(null),
        z = i.useRef(null),
        O = i.useRef(0),
        U = null == r,
        G = l.questions.length,
        q = Math.min(N, G - 1),
        B = l.questions[q],
        [H, K] = i.useState({ id: B.id, expanded: !1 }),
        V = H.id === B.id && H.expanded,
        [W, X] = i.useState(null),
        J = d[B.id] ?? "",
        Y = !0 === B.multi_select,
        Q = lf(B),
        Z = Y ? (m[B.id] ?? l7) : ((t = u[B.id]), t?.kind === "option" ? [t.optionId] : lm),
        ee = (function (e, t, n) {
            let [l, r] = i.useState({}),
                [a, s] = i.useState({}),
                [o, u] = i.useState({}),
                c = eo.intl.string(es.default.wTsP5l),
                d = i.useCallback((e) => l[e] ?? null, [l]),
                f = i.useCallback(
                    (e) => null != l[e.id] && (!0 === e.multi_select ? !0 === o[e.id] : t[e.id]?.kind === "image"),
                    [t, l, o],
                ),
                m = i.useCallback(
                    (e) => {
                        let t = l[e.id];
                        return null != t && !0 === o[e.id] ? { attachment: t.attachment, text: c } : void 0;
                    },
                    [c, l, o],
                ),
                h = i.useCallback(
                    (i, o) => {
                        let d = i.id,
                            m = !0 === i.multi_select,
                            h = l[d] ?? null;
                        if (o) return lh(h, f(i));
                        function g(e) {
                            return s((t) => ({ ...t, [d]: e }));
                        }
                        function p(e) {
                            return { kind: "image", attachment: e.attachment, text: c };
                        }
                        let x = t[d];
                        function v(t) {
                            (r((n) => {
                                let l = n[d];
                                return (
                                    null != l && (0, en.Vm)(e, l.attachment.id).catch(() => void 0), { ...n, [d]: t }
                                );
                            }),
                                g({ busy: null, error: null }),
                                m ? u((e) => ({ ...e, [d]: !0 })) : n((e) => (e[d] === x ? { ...e, [d]: p(t) } : e)));
                        }
                        return {
                            image: h,
                            selected: f(i),
                            busy: a[d]?.busy ?? null,
                            error: a[d]?.error ?? null,
                            onPick: () => {
                                null != h &&
                                    (m ? u((e) => ({ ...e, [d]: !0 !== e[d] })) : n((e) => ({ ...e, [d]: p(h) })));
                            },
                            onRemove: () => {
                                null != h &&
                                    ((0, en.Vm)(e, h.attachment.id).catch(() => void 0),
                                    r((e) => {
                                        let { [d]: t, ...n } = e;
                                        return n;
                                    }),
                                    u((e) => ({ ...e, [d]: !1 })),
                                    n((e) => {
                                        if (e[d]?.kind !== "image") return e;
                                        let { [d]: t, ...n } = e;
                                        return n;
                                    }));
                            },
                            onUpload: (e) => {
                                (g({ busy: "upload", error: null }),
                                    e.then(
                                        (e) => {
                                            "errorText" in e
                                                ? g({ busy: null, error: { source: "upload", text: e.errorText } })
                                                : v({ attachment: e });
                                        },
                                        () =>
                                            g({
                                                busy: null,
                                                error: { source: "upload", text: eo.intl.string(es.default["kUw/b1"]) },
                                            }),
                                    ));
                            },
                            onLink: (t) => (
                                g({ busy: "link", error: null }),
                                (0, en.gm)(e, t).then(
                                    (e) => (v({ attachment: e }), !0),
                                    (e) => (
                                        g({
                                            busy: null,
                                            error: {
                                                source: "link",
                                                text:
                                                    e instanceof Error && "" !== e.message
                                                        ? e.message
                                                        : eo.intl.string(es.default.l79PMc),
                                            },
                                        }),
                                        !1
                                    ),
                                )
                            ),
                        };
                    },
                    [c, t, l, e, f, n, a],
                );
            return { imageFor: d, selectedFor: f, multiPartFor: m, controlsFor: h };
        })(n, u, c),
        et = ee.imageFor(B.id),
        el = ee.selectedFor(B),
        { text: er, phase: ea } = (0, ts.Q)(B.question),
        ei = er === B.question,
        eu = ei && W?.id === B.id && W.truncated;
    i.useLayoutEffect(() => {
        if (null == $ || V || !ei) return;
        function e() {
            if (null == $) return;
            let e = $.scrollHeight > $.clientHeight + 1;
            X((t) => (t?.id === B.id && t.truncated === e ? t : { id: B.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe($), () => t.disconnect());
    }, [ei, $, B.id, V]);
    let ec = eo.intl.string(V ? eo.t.iTcuma : eo.t.dcl9MQ),
        ed = i.useCallback(
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
                                r =
                                    "custom" === n.kind
                                        ? n.text.trim()
                                        : "multi" === n.kind || "entities" === n.kind
                                          ? n.custom
                                          : void 0,
                                a = "entities" === n.kind ? n.entities : [],
                                i = "entities" === n.kind && a.length > 0 ? n.guildId : void 0,
                                s = "image" === n.kind || "multi" === n.kind ? n.attachment : void 0;
                            return [
                                {
                                    question_id: t.id,
                                    option_ids: l,
                                    ...(null != r && "" !== r ? { custom: r } : {}),
                                    ...(null != s ? { attachment_id: s.id } : {}),
                                    ...(a.length > 0 ? { entities: a } : {}),
                                    ...(null != i ? { guild_id: i } : {}),
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
        ef = i.useCallback(
            (e, t) => {
                O.current += 1;
                let n = O.current;
                (E({ direction: t, moves: n }),
                    M({ question: B, draft: J, selected: Z, ownImage: et, ownSelected: el, direction: t, moves: n }),
                    L(!0),
                    S(e));
            },
            [J, et, el, B, Z],
        ),
        em = i.useCallback(() => {
            let e = D.current,
                t = z.current;
            null != e && null != t && T({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    i.useLayoutEffect(() => {
        let e = D.current,
            t = z.current;
        if (null == e || null == t) return;
        em();
        let n = new ResizeObserver(em);
        return (n.observe(e), n.observe(t), () => n.disconnect());
    }, [em]);
    let eh = C?.moves;
    i.useEffect(() => {
        if (null == eh) return;
        let e = setTimeout(() => M(null), 400),
            t = setTimeout(() => L(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [eh]);
    let eg = i.useCallback(
            (e) => {
                if (U) return;
                let t = { ...u, [B.id]: e };
                c(t);
                let n =
                    q < l.questions.length - 1
                        ? q + 1
                        : (function (e, t, n) {
                              let { questions: l } = e;
                              for (let e = 1; e <= l.length; e++) {
                                  let r = (n + e) % l.length,
                                      a = t[l[r].id];
                                  if (null == a || "" === a.text.trim()) return r;
                              }
                              return null;
                          })(l, t, q);
                null == n ? ed(t) : ef(n, n < q ? "back" : "forward");
            },
            [u, l, U, q, B.id, ed, ef],
        ),
        ep = i.useCallback(() => {
            U || 0 === q || ef(q - 1, "back");
        }, [U, q, ef]),
        ex = q > 0 && !U,
        ev = i.useCallback(
            (e) => {
                f((e) => ({ ...e, [B.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                Q ? U || c((e) => ({ ...e, [B.id]: t })) : eg(t);
            },
            [U, Q, B.id, eg],
        ),
        { multiPartFor: ej } = ee,
        eb = i.useMemo(() => {
            var e;
            let t, n;
            return Y
                ? ((e = ej(B)),
                  (t = J.trim()),
                  (n = B.options.filter((e) => Z.includes(e.id)).map((e) => e.label)),
                  {
                      kind: "multi",
                      optionIds: Z,
                      ...("" === t ? {} : { custom: t }),
                      ...(null == e ? {} : { attachment: e.attachment }),
                      text: [...n, ...(null == e ? [] : [e.text]), ...("" === t ? [] : [t])].join(", "),
                  })
                : null;
        }, [J, Y, ej, B, Z]),
        ey = g[B.id] ?? l5,
        ek = i.useMemo(() => {
            var e, t;
            let n;
            return null != B.input
                ? ((e = B.input),
                  (t = x[B.id]),
                  (n = J.trim()),
                  {
                      kind: "entities",
                      entities: ey,
                      ...(null == t ? {} : { guildId: t }),
                      ...("" === n ? {} : { custom: n }),
                      text: [...ey.map((t) => `${lc[e]}${t.name}`), ...("" === n ? [] : [n])].join(", "),
                  })
                : null;
        }, [J, x, ey, B.id, B.input]),
        ew = i.useCallback(
            (e, t) => {
                (p((t) => ({ ...t, [B.id]: e })), v((e) => ({ ...e, [B.id]: t })));
            },
            [B.id],
        ),
        eA = i.useCallback(() => w(!0), []),
        eN = i.useCallback(() => w(!1), []),
        eS = ee.controlsFor(B, U),
        eC = i.useCallback(() => {
            if (null != ek) {
                "" !== ek.text && eg(ek);
                return;
            }
            if (null != eb) {
                "" !== eb.text && eg(eb);
                return;
            }
            let e = J.trim();
            "" !== e && eg({ kind: "custom", text: e });
        }, [J, eb, ek, eg]),
        [eE, eI] = i.useState(!1),
        [eM, e_] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => eI(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let eT = i.useCallback(() => {
            null != s && (e_(!0), setTimeout(s, 150));
        }, [s]),
        eP = i.useMemo(
            () =>
                null != ek
                    ? "" !== ek.text
                        ? ek
                        : null
                    : null != eb
                      ? "" !== eb.text
                          ? eb
                          : null
                      : "" !== J.trim()
                        ? { kind: "custom", text: J.trim() }
                        : (u[B.id] ?? null),
            [u, J, eb, ek, B.id],
        ),
        eR = null != eP && !U,
        eL = q === G - 1,
        eD = i.useCallback(() => {
            null == eP || U || eg(eP);
        }, [U, eP, eg]),
        e$ = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, tL.vq)(e.target, HTMLTextAreaElement) ||
                    (0, tL.vq)(e.target, HTMLInputElement) ||
                    ((!(0, tL.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && ex
                            ? (e.preventDefault(), ep())
                            : "ArrowRight" === e.key && eR && (e.preventDefault(), eD())));
            },
            [ex, eR, ep, eD],
        ),
        eF = Q
            ? null
            : (0, a.jsxs)("div", {
                  className: lb.Xy,
                  children: [
                      (0, a.jsx)("span", {
                          className: lb.Gy,
                          "aria-hidden": !0,
                          children: (0, a.jsx)(li.PencilIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                          }),
                      }),
                      (0, a.jsx)(ls.y, {
                          value: J,
                          onChange: (e) => {
                              let { value: t } = e.currentTarget;
                              f((e) => ({ ...e, [B.id]: t }));
                          },
                          onKeyDown: (e) => {
                              "Enter" !== e.key ||
                                  e.shiftKey ||
                                  e.nativeEvent.isComposing ||
                                  (e.preventDefault(), eC());
                          },
                          placeholder: eo.intl.string(es.default["tOC+tn"]),
                          "aria-label": eo.intl.formatToPlainString(es.default["4JeYPB"], { question: B.question }),
                          disabled: U,
                          rows: 1,
                          className: lb.Pu,
                          "data-conjure-clarification-other": B.id,
                      }),
                  ],
              });
    return (0, a.jsxs)("section", {
        className: o()(lb.$O, { [lb.fI]: eE && !eM, [lb.Oh]: eM }),
        role: "dialog",
        "aria-label": B.question,
        "data-conjure-clarification": l.id,
        "data-state": U ? "inert" : "open",
        "data-question-expanded": V ? "true" : void 0,
        "data-picker-open": k && !R ? "true" : void 0,
        "data-step": q,
        tabIndex: -1,
        onKeyDown: e$,
        children: [
            (0, a.jsxs)("div", {
                className: lb.rf,
                style: null == _ ? void 0 : { height: _.heading + _.rows },
                "data-moving": R ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: D,
                        className: lb.wx,
                        children: [
                            (0, a.jsx)(j.E, {
                                ref: F,
                                tag: "span",
                                id: `${B.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: V ? void 0 : 5,
                                className: o()(l3.TK, lb.R_, { [lb.TB]: "exit" === ea, [lb.JU]: "enter" === ea }),
                                children: er,
                            }),
                            eu || V
                                ? (0, a.jsx)("div", {
                                      className: l3.Q7,
                                      children: (0, a.jsx)(y.m, {
                                          text: ec,
                                          children: (0, a.jsx)(t9.K, {
                                              icon: V ? tr.t : tq.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => K({ id: B.id, expanded: !V }),
                                              "aria-label": ec,
                                              "aria-controls": `${B.id}-label`,
                                              "aria-expanded": V,
                                          }),
                                      }),
                                  })
                                : null,
                            null == s
                                ? null
                                : (0, a.jsx)(b.D, {
                                      className: o()(l3.gb, l3.Q7),
                                      onClick: eT,
                                      "aria-label": eo.intl.string(es.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, a.jsx)(P.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: lb.Cg,
                        style: null == _ ? void 0 : { insetBlockStart: _.heading },
                        children: (0, a.jsxs)("div", {
                            className: lb.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: z,
                                    className: lb.Ge,
                                    role: "group",
                                    "aria-labelledby": `${B.id}-label`,
                                    "data-direction": C?.direction,
                                    "data-parity": null == C ? void 0 : C.moves % 2,
                                    children: [
                                        Y
                                            ? (0, a.jsx)(j.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: lb.aK,
                                                  children: eo.intl.string(es.default.tE8qbz),
                                              })
                                            : null,
                                        (0, a.jsx)(l6, {
                                            projectId: n,
                                            question: B,
                                            selected: Z,
                                            disabled: U,
                                            onPick: (e) =>
                                                Y
                                                    ? h((t) => {
                                                          var n, l;
                                                          let r;
                                                          return {
                                                              ...t,
                                                              [B.id]:
                                                                  ((n = t[B.id] ?? l7),
                                                                  (l = e.id),
                                                                  (r = n.includes(l)
                                                                      ? n.filter((e) => e !== l)
                                                                      : [...n, l]),
                                                                  B.options
                                                                      .filter((e) => r.includes(e.id))
                                                                      .map((e) => e.id)),
                                                          };
                                                      })
                                                    : ev(e),
                                            own: eS,
                                        }),
                                        null != B.input
                                            ? (0, a.jsx)(lC, {
                                                  projectId: n,
                                                  question: B,
                                                  value: ey,
                                                  disabled: U,
                                                  onChange: ew,
                                                  onFocus: eA,
                                                  onBlur: eN,
                                                  fallback: !1 === B.allow_custom ? eF : null,
                                              })
                                            : null,
                                        !1 === B.allow_custom ? null : eF,
                                    ],
                                }),
                                null == I
                                    ? null
                                    : (0, a.jsx)(
                                          l8,
                                          {
                                              projectId: n,
                                              question: I.question,
                                              draft: I.draft,
                                              selected: I.selected,
                                              ownImage: I.ownImage,
                                              ownSelected: I.ownSelected,
                                              direction: I.direction,
                                              disabled: U,
                                          },
                                          I.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            G > 1 || Y || Q || null != B.input
                ? (0, a.jsxs)("div", {
                      className: l3.qr,
                      children: [
                          (0, a.jsx)(j.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  G > 1
                                      ? eo.intl.formatToPlainString(es.default.yzYUjq, { index: q + 1, total: G })
                                      : null,
                          }),
                          (0, a.jsxs)("div", {
                              className: l3.zt,
                              children: [
                                  ex
                                      ? (0, a.jsx)(lo.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: eo.intl.string(es.default.Pk5lfA),
                                            onClick: ep,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  (0, a.jsx)(A.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: eo.intl.string(eL ? eo.t.geKm7t : es.default.w1nRmT),
                                      disabled: !eR,
                                      onClick: eD,
                                      "data-conjure-clarification-next": !0,
                                      "data-submits": eL ? "true" : void 0,
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var re = n(572253),
    rt = n(411236);
function rn(e) {
    let { projectId: t, request: n, onDismiss: l } = e,
        r = null != n.note && "" !== n.note ? n.note : eo.intl.string(es.default.XuOf5s);
    return (0, a.jsx)(re.A, {
        projectId: t,
        scopeKeys: n.keys,
        notifyAgent: !0,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: n, saving: i, submit: s } = e;
            function u(e) {
                (e.preventDefault(), s());
            }
            let c = (0, a.jsx)(A.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: i,
                disabled: !n,
                text: eo.intl.string(es.default.A7dQd9),
            });
            return null == l
                ? (0, a.jsxs)("form", {
                      className: rt.Mk,
                      onSubmit: u,
                      children: [
                          (0, a.jsx)(j.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: eo.intl.string(es.default["jZjP+I"]),
                          }),
                          (0, a.jsx)(j.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              selectable: !0,
                              children: r,
                          }),
                          t,
                          (0, a.jsx)("div", { className: rt.p0, children: c }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: o()(l3.nd, l3.jx),
                      "aria-label": eo.intl.string(es.default["jZjP+I"]),
                      onSubmit: u,
                      children: [
                          (0, a.jsxs)("div", {
                              className: l3.wx,
                              children: [
                                  (0, a.jsx)(j.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: l3.TK,
                                      children: eo.intl.string(es.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(b.D, {
                                      className: o()(l3.gb, l3.Q7),
                                      onClick: l,
                                      "aria-label": eo.intl.string(es.default["iq+Pte"]),
                                      children: (0, a.jsx)(P.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: rt.DQ,
                              children: [
                                  (0, a.jsx)(j.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      selectable: !0,
                                      children: r,
                                  }),
                                  t,
                              ],
                          }),
                          (0, a.jsx)("div", {
                              className: l3.qr,
                              children: (0, a.jsx)("div", { className: l3.zt, children: c }),
                          }),
                      ],
                  });
        },
    });
}
var rl = n(935208),
    rr = n(435558),
    ra = n.n(rr);
let ri = "VibegrationsComposerDrafts";
function rs() {
    return nP.w.get(ri) ?? {};
}
let ro = new Map(),
    ru = ra().throttle(() => {
        if (0 === ro.size) return;
        let e = rs();
        for (let [t, n] of ro) "" === n ? delete e[t] : (e[t] = n);
        (ro.clear(), nP.w.set(ri, e));
    }, 1e3);
class rc extends f.Ay.Store {
    getDraft(e) {
        let t = ro.get(e);
        return null != t ? t : (rs()[e] ?? "");
    }
}
let rd = new rc(lL.h, {
    LOGOUT: function () {
        return (ro.clear(), ru.cancel(), nP.w.remove(ri), !1);
    },
    CONJURE_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: n } = e;
        return (ro.set(t, n), ru(), "" === n && ru.flush(), !1);
    },
});
function rf(e) {
    return "" !== rd.getDraft(e).trim();
}
var rm = n(29080),
    rh = n(46054),
    rg = n(615839);
function rp(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : eo.intl.string(es.default.KcFvbo);
}
function rx(e) {
    var t;
    let n,
        l,
        { steps: r, content: a, hasProposal: i, hasAttachments: s } = e,
        o = (0, nW.B4)(r),
        u = o.filter((e) => "message" === e.type).at(-1),
        c =
            !i &&
            null != u &&
            ((t = u.content),
            (n = t.trim()),
            (l = a.trim()),
            "" !== n && "" !== l && (n === l || (t.length >= 16e3 && l.startsWith(n))))
                ? u
                : null,
        d = o.filter((e) => e !== c),
        f = d.filter((e) => "message" === e.type).at(-1),
        m = !i && "" !== a.trim();
    return {
        streamed: d,
        lastStreamedMessage: f,
        replyKey: c?.key,
        showsClosingMessage: m,
        closingContent: m ? a.trim() : "",
        attachmentsHost: (function (e) {
            let { hasAttachments: t, showsClosingMessage: n, endsOnStreamedMessage: l } = e;
            return t ? (n ? "closing" : l ? "streamed" : "standalone") : "none";
        })({ hasAttachments: s, showsClosingMessage: m, endsOnStreamedMessage: (0, nW.Lf)(r) }),
    };
}
(n(134528), n(947204));
var rv = n(62617);
let rj = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    rb = {
        snail: () => es.default.ABeVsS,
        goat: () => es.default.dhXay8,
        frog: () => es.default.SHeweG,
        bunny: () => es.default.FytFE1,
        cat: () => es.default["5c+sHs"],
        caterpillar: () => es.default["/FYcne"],
        butterfly: () => es.default["Ib/AxK"],
        dog: () => es.default.zDjBR1,
        spider: () => es.default["6sxyrN"],
        bee: () => es.default.cVtefg,
        bot: () => es.default.MjCw0v,
    },
    ry = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, rv.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, rv.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        goat: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, rv.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, rv.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-orange-40)",
        },
        frog: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, rv.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, rv.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-green-40)",
        },
        bunny: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, rv.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, rv.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-pink-40)",
        },
        cat: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, rv.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, rv.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-pink-40)",
        },
        caterpillar: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, rv.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, rv.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-green-40)",
        },
        butterfly: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, rv.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, rv.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
        dog: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, rv.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, rv.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        spider: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, rv.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, rv.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-orange-40)",
        },
        bee: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, rv.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, rv.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        bot: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, rv.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
                    className: (0, rv.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
    };
function rk(e) {
    return { ...ry[e], name: eo.intl.string(rb[e]()) };
}
function rw(e) {
    return rj.includes(e) ? rk(e) : void 0;
}
function rA(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % rj.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, rj[(t + n) % rj.length]);
            }),
            l
        );
    })(e))
        t.set(n, rk(l));
    return t;
}
var rN = n(60160),
    rS = n(16634);
function rC(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        c = (0, nW.SY)(n.steps),
        d = u
            ? null != c
                ? (0, nW.WQ)(c)
                : rp(o)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(rp(e));
                  switch (e.status) {
                      case "failed":
                          return eo.intl.formatToPlainString(es.default.YrVgOf, { task: t });
                      case "cancelled":
                          return eo.intl.formatToPlainString(es.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return eo.intl.formatToPlainString(es.default["++9woZ"], {
                                  task: t,
                                  duration: (0, rg.MB)(e.durationMs),
                              });
                          return eo.intl.formatToPlainString(es.default.nmI9Uh, { task: t });
                      default:
                          return eo.intl.formatToPlainString(es.default.nmI9Uh, { task: t });
                  }
              })(o),
        f = u ? c : void 0,
        m =
            o.detail.length > 0 ||
            n.steps.some((e) => {
                var t;
                return e !== f || (t = e).detail.length > 0 || t.screenshots.length > 0 || t.attachments.length > 0;
            })
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          n.steps.length > 0
                              ? (0, a.jsx)("ol", {
                                    className: ln.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            rS.A,
                                            { projectId: t, node: e, presentation: "detail", active: u && e === c },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          o.detail.map((e, t) =>
                              (0, a.jsx)(
                                  "div",
                                  {
                                      className: ln.iq,
                                      children: (0, a.jsx)(rN.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(nQ.A, {
        glyph: (0, a.jsx)(nZ.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: rp(o),
            position: "left",
            children: (0, a.jsx)("span", {
                className: ln.nC,
                children: (0, a.jsx)(l, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: d,
        live: u,
        settled: !u,
        tint: r,
        detail: m,
        connected: !0,
        connectsDown: s,
    });
}
var rE = n(998445),
    rI = n(643210),
    rM = n(648127),
    r_ = n(372795),
    rT = n(163897);
let rP = "conjure-browser-viewer";
function rR(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, f.yK)(
            [rI.A],
            () =>
                n.flatMap((e) => {
                    let n = rI.A.getTab(t, e);
                    return null == n ? [] : [n];
                }),
            [t, n],
        );
    if (0 === l.length) return null;
    let r = l.map((e) => {
        let { session: t } = e;
        return t.id;
    });
    return (0, a.jsx)("ul", {
        className: rT.kR,
        "aria-label": eo.intl.string(es.default.Uvkr1G),
        children: l.map((e) =>
            (0, a.jsx)("li", { children: (0, a.jsx)(rL, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function rL(e) {
    let { projectId: t, tab: l, sessionIds: r } = e,
        [s, u] = (function () {
            let [e, t] = i.useState(null),
                [n, l] = i.useState(!1);
            return (
                i.useEffect(() => {
                    if (null == e) return;
                    let t = new IntersectionObserver(
                        (e) => {
                            let [t] = e;
                            return l(t?.isIntersecting ?? !1);
                        },
                        { rootMargin: "200px" },
                    );
                    return (t.observe(e), () => t.disconnect());
                }, [e]),
                [t, n]
            );
        })(),
        c = (0, te.useHasModalOpen)(rP),
        [d, f] = i.useState(!1),
        m = i.useCallback((e, t) => f(t), []),
        { ended: h } = l,
        g = (0, rM.i)(l.session);
    return (0, a.jsxs)(b.D, {
        innerRef: s,
        className: o()(rT.Nr, h && rT.Xj),
        onClick: () => {
            var e;
            return (
                (e = l.session.id),
                void (0, te.openModalLazy)(
                    async () => {
                        let { default: l } = await Promise.all([
                            n.e("459368"),
                            n.e("513843"),
                            n.e("501962"),
                            n.e("531527"),
                        ]).then(n.bind(n, 273594));
                        return (n) => (0, a.jsx)(l, { ...n, projectId: t, sessionId: e, sessionIds: r });
                    },
                    { modalKey: rP },
                )
            );
        },
        "aria-label": eo.intl.formatToPlainString(es.default.G3a822, { title: g }),
        children: [
            (0, a.jsxs)("div", {
                className: rT.Gt,
                children: [
                    (0, a.jsx)(r_.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !u || c || h,
                        className: rT.Ji,
                        "aria-label": eo.intl.formatToPlainString(es.default.rnwqXb, { name: g }),
                        onStateChange: m,
                    }),
                    d
                        ? null
                        : (0, a.jsx)("div", {
                              className: rT.qf,
                              children: (0, a.jsx)(rE.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    h
                        ? (0, a.jsx)("div", {
                              className: rT.HS,
                              children: (0, a.jsx)(j.E, {
                                  variant: "text-xs/medium",
                                  color: "text-strong",
                                  children: eo.intl.string(es.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsxs)("span", {
                className: rT.pG,
                children: [
                    (0, a.jsx)("span", { className: o()(rT.W9, h && rT.oM) }),
                    (0, a.jsx)(j.E, {
                        tag: "span",
                        variant: "text-sm/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: g,
                    }),
                ],
            }),
        ],
    });
}
var rD = n(268409);
let r$ = new WeakMap(),
    rF = new WeakMap();
function rz(e) {
    let { projectId: t, steps: n, tree: l, segment: r } = e,
        s = i.useMemo(
            () =>
                (function (e, t) {
                    let n = new Map();
                    for (let t of [...e.steps, ...e.tasks.flatMap((e) => e.steps)])
                        for (let e of t.browserSessions) n.has(e) || n.set(e, t.segment);
                    return [...n]
                        .filter((e) => {
                            let [, n] = e;
                            return null == t || n === t;
                        })
                        .map((e) => {
                            let [t] = e;
                            return t;
                        });
                })(l, r),
            [l, r],
        ),
        o = (0, f.yK)(
            [ej.Ay],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = r$.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = rF.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), rF.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (r$.set(e, n), n);
                })(ej.Ay.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === o.length
        ? null
        : (0, a.jsx)("li", { className: rD.h, children: (0, a.jsx)(rR, { projectId: t, sessionIds: o }) });
}
var rO = n(469393);
function rU(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, tn.lG)(t.authored_at);
    return (0, a.jsx)(n1, {
        title: eo.intl.string(es.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: rO.r,
            children: [
                (0, a.jsxs)("div", {
                    className: rO.z,
                    children: [
                        (0, a.jsx)(j.E, { variant: "text-md/medium", children: t.subject }),
                        null != l.relative
                            ? (0, a.jsx)(j.E, {
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
                          text: eo.intl.string(es.default.H8Jfhu),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
var rG = n(231483),
    rq = n(687966),
    rB = n(632015),
    rH = n(323384),
    rK = n(633018),
    rV = n(430392),
    rW = n(885574);
let rX = {
    automod: es.default.DnWMLj,
    overlay: es.default.liTNf3,
    widget: es.default["EswAi+"],
    activity: eo.t.IC5Ann,
    commands: es.default.w7JaEP,
    chat_bot: es.default["5QSvrP"],
    bot: es.default.VFWfz1,
};
var rJ = n(176999),
    rY = (((l = {}).IMAGE = "image"), l),
    rQ = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    rZ = n(773669);
let r0 = [],
    r1 = {};
function r2(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function r3(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: rY.IMAGE,
        visibility: rQ.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var r4 = n(127258),
    r6 = n(587895),
    r7 = n(320095),
    r5 = n(963852),
    r8 = n(95701),
    r9 = n(889227),
    ae = n(155718);
let at = ["command", "user_command", "message_command", "message"],
    an = new Set([ae.kc.CHAT, ae.kc.USER, ae.kc.MESSAGE]);
function al(e) {
    return e.type ?? ae.kc.CHAT;
}
function ar(e) {
    return "launch" !== e.kind && an.has(al(e));
}
function aa(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function ai(e, t) {
    let n = at.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !aa(e)), ...n.filter(aa)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || aa(r) || l.push(r);
    }
    return at.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
let as = new r8.nA({ id: "1337", guild_id: "1337", type: ex.rbe.GUILD_TEXT, name: "preview" });
function ao(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, f.bG)([tX.default], () => tX.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, tY.nj)(new r9.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let au = /^@\S+/;
var ac = n(628284),
    ad = n(97808),
    af = n(778712),
    am = n(809115),
    ah = n(486020),
    ag = n(200700);
let ap = {
        alert: { label: () => eo.intl.string(es.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => eo.intl.string(es.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => eo.intl.string(es.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => eo.intl.string(es.default.RGzFNK), blockedStyle: !1 },
    },
    ax = {
        blocked: { label: () => eo.intl.string(es.default.YdnZ8q), tone: "red" },
        alert: { label: () => eo.intl.string(es.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => eo.intl.string(es.default.RGzFNK), tone: "green" },
    },
    av = ["blocked", "alert", "allowed"],
    aj = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
var ab = n(984097),
    ay = n(13673);
let ak = { blocked: rG.ShieldIcon, alert: t3.BellIcon, allowed: ac.y },
    aw = {
        blurple: { text: "text-brand", icon: L.A.colors.TEXT_BRAND },
        red: { text: "text-feedback-critical", icon: L.A.colors.TEXT_FEEDBACK_CRITICAL },
        green: { text: "text-feedback-positive", icon: L.A.colors.TEXT_FEEDBACK_POSITIVE },
    };
function aA(e) {
    var t, n;
    let l,
        r,
        { example: i } = e,
        s =
            "" ===
            (r = [
                "timeout" !== (t = i).outcome || null == t.timeout_seconds
                    ? null
                    : eo.intl.formatToPlainString(eo.t["3LYql6"], {
                          duration:
                              ((n = t.timeout_seconds),
                              null != (l = (0, ag.getFriendlyDurationString)(n))
                                  ? l
                                  : n % 604800 == 0
                                    ? eo.intl.formatToPlainString(eo.t.EmoBD2, { weeks: n / 604800 })
                                    : n % 86400 == 0
                                      ? eo.intl.formatToPlainString(eo.t["k2UNz+"], { days: n / 86400 })
                                      : n % 3600 == 0
                                        ? eo.intl.formatToPlainString(eo.t.xCjYxK, { hours: n / 3600 })
                                        : n % 60 == 0
                                          ? eo.intl.formatToPlainString(eo.t.opVZ9q, { mins: n / 60 })
                                          : eo.intl.formatToPlainString(eo.t["4zv/jq"], { secs: n })),
                      }),
                i.reason,
            ]
                .filter((e) => null != e && "" !== e)
                .join(" "))
                ? null
                : r;
    return null == s
        ? null
        : (0, a.jsx)(j.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              lineClamp: 2,
              selectable: !0,
              children: s,
          });
}
function aN(e) {
    var t;
    let { example: n } = e,
        { label: l, blockedStyle: r } = ap[n.outcome];
    return (0, a.jsxs)("li", {
        className: o()(ab.nM, { [o()(ab.HV, ay.DX)]: r }),
        children: [
            (0, a.jsx)(k.A, { children: `${l()}: ` }),
            (0, a.jsx)("span", {
                className: ab.my,
                children: (0, a.jsx)(ad.eu, {
                    src: (0, ah.AE)(void 0, void 0),
                    size: af._3.SIZE_24,
                    "aria-label": eo.intl.string(es.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: ab.fw,
                children: [
                    (0, a.jsx)(j.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), rh.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    (0, a.jsx)(aA, { example: n }),
                ],
            }),
        ],
    });
}
function aS(e) {
    let { group: t } = e,
        n = i.useId(),
        l = ax[t.section],
        r = ak[t.section],
        s = aw[l.tone];
    return (0, a.jsxs)("div", {
        className: ab.uW,
        children: [
            (0, a.jsxs)("div", {
                className: ab.bV,
                children: [
                    (0, a.jsx)(r, { size: "xs", color: s.icon, "aria-hidden": !0 }),
                    (0, a.jsx)(j.E, {
                        id: n,
                        variant: "text-xs/semibold",
                        color: s.text,
                        className: ab.a9,
                        children: l.label(),
                    }),
                ],
            }),
            (0, a.jsx)("ul", {
                className: ab.Ge,
                "aria-labelledby": n,
                children: t.examples.map((e, t) => (0, a.jsx)(aN, { example: e }, t)),
            }),
        ],
    });
}
function aC() {
    let { avatarSrc: e, eventHandlers: t } = (0, am.a)(!0);
    return (0, a.jsx)("span", {
        className: ab.Gy,
        ...t,
        children: (0, a.jsx)(ad.eu, { src: e, size: af._3.SIZE_16, "aria-label": eo.intl.string(eo.t.hG1StD) }),
    });
}
function aE(e) {
    var t;
    let { automod: n } = e;
    return (0, a.jsx)("div", {
        className: ab.K1,
        children: ((t = n.examples),
        av
            .map((e) => ({ section: e, examples: t.filter((t) => aj[t.outcome] === e) }))
            .filter((e) => e.examples.length > 0)).map((e) => (0, a.jsx)(aS, { group: e }, e.section)),
    });
}
var aI = n(460905),
    aM = n(110384),
    a_ = n(763754),
    aT = n(217424),
    aP = n(194085),
    aR = n(20851),
    aL = n(692508),
    aD = n(798819);
function a$(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, a.jsxs)("div", {
        className: o()(aD.item, aD.labelContainer, aD.colorDefault, {
            [aD.focused]: !0 === t.highlighted,
            [aD.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, a.jsx)("div", {
                      className: aD.iconContainerLeft,
                      children: (0, a.jsx)(n, { color: "currentColor", className: aD.icon }),
                  })
                : null,
            (0, a.jsx)("div", { className: o()(aD.label, aL.Gy), children: t.label }),
            null != l
                ? (0, a.jsx)("div", {
                      className: aD.iconContainer,
                      children: (0, a.jsx)(l, { color: "currentColor", className: aD.icon }),
                  })
                : null,
        ],
    });
}
function aF(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = i.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, a.jsx)("img", { src: l, alt: "", className: o()(t, aL.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: eo.intl.string(eo.t["5IEsGx"]), icon: aM.W, muted: !0 }
                : { label: eo.intl.string(eo.t.LYju5J), muted: !0 };
    return (0, a.jsx)("div", {
        className: o()(aD.menu, aL.MK),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: aD.scroller,
            children: [
                (0, a.jsx)(a$, { item: s }),
                (0, a.jsx)("div", { className: aD.separator }),
                (0, a.jsx)(a$, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
var az = n(381941);
function aO() {}
function aU(e) {
    let t,
        n,
        l,
        r,
        s,
        u,
        c,
        d,
        m,
        h,
        g,
        { projectId: p, exchanges: x } = e,
        {
            items: v,
            botIcon: j,
            appIconSrc: b,
        } = ((t = (0, f.bG)([tX.default], () => tX.default.getCurrentUser())),
        (n = (0, f.bG)([eN.Ay], () => eN.Ay.getProject(p))),
        (l = n?.application_id),
        (r = (0, f.bG)([r6.A], () => r6.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? eo.intl.string(es.default.JEYq8M)),
        (u = (0, f.bG)([tX.default], () => (null != l ? tX.default.getUser(l) : void 0), [l])),
        (d = ao("31337", s, { bot: !0, enabled: !(c = u?.bot === !0) })),
        (m = c ? u : d),
        (h = ao("31338", eo.intl.string(es.default["9iAOsw"]), { discriminator: "0003" })),
        (g = ao("31339", (0, tJ.mG)(t) ?? "", { enabled: null != t })),
        {
            items: i.useMemo(
                () =>
                    null == t || null == g || null == m || null == h
                        ? []
                        : (function (e, t, n) {
                              var l, r, a;
                              let { bot: i, currentUser: s, viewer: o, member: u } = t,
                                  c = [];
                              function d(e, t) {
                                  let {
                                          interactionName: n,
                                          messageType: l,
                                          menu: r,
                                      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                      a = String(c.length + 1),
                                      i = (0, r7.rh)({
                                          ...(0, r5.Ay)({
                                              channelId: as.id,
                                              content: e,
                                              author: t,
                                              type: l ?? ex.lAJ.DEFAULT,
                                          }),
                                          id: a,
                                          state: ex.cmJ.SENT,
                                          ...(null != n
                                              ? {
                                                    interaction: {
                                                        id: a,
                                                        name: n,
                                                        type: r4.G.APPLICATION_COMMAND,
                                                        user: (0, r5.Vi)(s),
                                                    },
                                                }
                                              : {}),
                                      });
                                  c.push({ key: a, record: i, isCommandReply: null != n, menu: r });
                              }
                              for (let t of e)
                                  switch (t.kind) {
                                      case "command":
                                          d(t.bot, i, {
                                              interactionName: t.user.trim().replace(/^\//, "").split(/\s+/)[0] ?? "",
                                              messageType: ex.lAJ.CHAT_INPUT_COMMAND,
                                          });
                                          break;
                                      case "user_command":
                                      case "message_command": {
                                          let e = "user_command" === t.kind;
                                          (d(e ? n.memberMessage : n.targetMessage, e ? u : s, {
                                              menu: { target: e ? "user" : "message", commandName: t.user },
                                          }),
                                              d(t.bot, i, {
                                                  interactionName: t.user,
                                                  messageType: ex.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((l = t.user), l.trim().replace(au, `<@${i.id}>`)), s),
                                              d(((r = t.bot), r.includes("<@") ? r : `<@${o.id}> ${r}`), i));
                                          break;
                                      case "event":
                                          d(((a = t.bot), a.split(`@${u.username}`).join(`<@${u.id}>`)), i);
                                  }
                              return c;
                          })(
                              x,
                              { bot: m, currentUser: t, viewer: g, member: h },
                              {
                                  targetMessage: eo.intl.string(es.default["y+QYes"]),
                                  memberMessage: eo.intl.string(es.default.BUTRDc),
                              },
                          ),
                [x, m, t, g, h],
            ),
            botIcon: r,
            appIconSrc: r ?? m?.getAvatarURL(void 0, 80),
        });
    return 0 === v.length
        ? null
        : (0, a.jsx)("ol", {
              className: o()(aL.TE, `group-spacing-${az.ES}`),
              children: v.map((e) => {
                  let { key: t, record: n, isCommandReply: l, menu: r } = e;
                  return (0, a.jsxs)(
                      "li",
                      {
                          className: null != r ? aL.Rz : void 0,
                          children: [
                              (0, a.jsx)(aR.A, {
                                  message: n,
                                  channel: as,
                                  author: (0, a_.FT)(n.author, as),
                                  isGroupStart: !0,
                                  avatarOverride: n.author.bot ? (j ?? void 0) : void 0,
                                  childrenExecutedCommand: l ? (0, a.jsx)(aT.A, { message: n, channel: as }) : void 0,
                                  usernameClassName: r?.target === "user" ? aL.Ct : void 0,
                                  disableInteraction: !0,
                              }),
                              r?.target === "message"
                                  ? (0, a.jsx)("div", {
                                        className: aL.S3,
                                        inert: !0,
                                        "aria-hidden": !0,
                                        children: (0, a.jsxs)(aP.Ay, {
                                            children: [
                                                (0, a.jsx)(aP.qv, {
                                                    label: eo.intl.string(eo.t.lfIHs4),
                                                    icon: aI.n,
                                                    onClick: aO,
                                                }),
                                                (0, a.jsx)(aP.qv, {
                                                    label: eo.intl.string(eo.t["5IEsGx"]),
                                                    icon: aM.W,
                                                    onClick: aO,
                                                }),
                                                (0, a.jsx)(aP.qv, {
                                                    label: eo.intl.string(eo.t["UKOtz+"]),
                                                    icon: ne.MoreHorizontalIcon,
                                                    selected: !0,
                                                    onClick: aO,
                                                }),
                                            ],
                                        }),
                                    })
                                  : null,
                              null != r
                                  ? (0, a.jsx)("div", {
                                        className: "user" === r.target ? aL.ET : aL.je,
                                        inert: !0,
                                        children: (0, a.jsx)(aF, {
                                            target: r.target,
                                            commandName: r.commandName,
                                            appIconSrc: b,
                                        }),
                                    })
                                  : null,
                          ],
                      },
                      t,
                  );
              }),
          });
}
var aG = n(633075),
    aq = n(946356),
    aB = n(58216),
    aH = n(27399);
function aK(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, f.bG)([tX.default], () => tX.default.getCurrentUser()),
        r = i.useMemo(() => new aG.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: aH.H,
              children: (0, a.jsx)(aq.A.Overlay, {
                  className: aH.w,
                  children: (0, a.jsx)(aB.A, {
                      user: l,
                      widget: r,
                      allowEditing: !1,
                      disableInteraction: !0,
                      interactiveLinks: !0,
                      disableCTA: !0,
                      rendererProps: n,
                  }),
              }),
          });
}
var aV = n(443863);
let aW = {
    automod: rG.ShieldIcon,
    overlay: rq.GameControllerIcon,
    widget: rB.f,
    activity: rH.k,
    commands: rK.k,
    chat_bot: h.ChatIcon,
    bot: rV.RobotIcon,
};
function aX(e) {
    let { label: t, icon: n, info: l, children: r } = e;
    return (0, a.jsxs)("section", {
        className: aV.uW,
        children: [
            (0, a.jsxs)("span", {
                className: aV.a9,
                children: [
                    n,
                    (0, a.jsx)(j.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }),
                    l,
                ],
            }),
            r,
        ],
    });
}
function aJ(e) {
    let { text: t, label: n } = e;
    return (0, a.jsx)(y.m, {
        text: t,
        children: (0, a.jsx)(b.D, {
            className: aV.bk,
            "aria-label": n,
            children: (0, a.jsx)(rW.CircleInformationIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
function aY(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)(aX, {
              label: t,
              children: (0, a.jsx)("div", {
                  className: aV.Ip,
                  children: n.map((e) =>
                      (0, a.jsx)(
                          "span",
                          {
                              className: aV.jw,
                              children: (0, a.jsx)(j.E, {
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
function aQ(e) {
    let { tags: t } = e;
    return (0, a.jsx)("span", {
        className: aV.K2,
        children: t.map((e) => {
            let t = aW[e];
            return (0, a.jsxs)(
                "span",
                {
                    className: aV.L6,
                    children: [
                        (0, a.jsx)(t, {
                            size: "custom",
                            width: 16,
                            height: 16,
                            color: "currentColor",
                            "aria-hidden": !0,
                        }),
                        (0, a.jsx)(j.E, {
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            tag: "span",
                            children: eo.intl.string(rX[e]),
                        }),
                    ],
                },
                e,
            );
        }),
    });
}
function aZ(e) {
    let { projectId: t, design: n } = e,
        { id: l } = n,
        { src: r, gone: s, handleError: o } = lY(t, l),
        u = eo.intl.string(es.default["3/aHX6"]),
        c = i.useCallback(() => {
            (0, en.PK)(t, l).then(
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
        : (0, a.jsx)(aX, {
              label: eo.intl.string(es.default.X15LLY),
              info: (0, a.jsx)(aJ, {
                  text: eo.intl.string(es.default.nR4B8P),
                  label: eo.intl.string(es.default.nc0SNY),
              }),
              children: (0, a.jsx)(b.D, {
                  className: aV.xX,
                  onClick: c,
                  "aria-label": eo.intl.string(es.default.TvAPIm),
                  children: null != r ? (0, a.jsx)("img", { src: r, alt: u, className: aV.sN, onError: o }) : null,
              }),
          });
}
function a0(e) {
    let t,
        n,
        { projectId: l, proposal: r, version: s, onApprove: o } = e,
        { automod: u } = r,
        { botInteraction: c, botExchanges: d } =
            ((t = (function (e) {
                if (null != e.bot) return e.bot.interaction;
                let t = e.commands.some(ar),
                    n = e.privileged_intents?.includes("MESSAGE_CONTENT") === !0;
                return t && n
                    ? "both"
                    : t
                      ? "commands"
                      : n
                        ? "messages"
                        : !0 === e.is_activity || null != e.automod || null != e.widget_config
                          ? null
                          : "events";
            })(r)),
            (n = i.useMemo(
                () =>
                    null == t
                        ? []
                        : (function (e, t, n) {
                              let l = e.bot?.example_exchanges ?? [],
                                  r = { kind: "event", user: "", bot: n.event };
                              if ("events" === t) {
                                  let e = l.slice(0, 3).map((e) => {
                                      let { bot: t } = e;
                                      return "" !== t.trim() ? { ...r, bot: t } : r;
                                  });
                                  return e.length > 0 ? e : [r];
                              }
                              let a = l.flatMap((e) => {
                                      let { user: n, bot: l } = e;
                                      return "" === n.trim()
                                          ? []
                                          : [
                                                {
                                                    kind:
                                                        "messages" !== t && n.trimStart().startsWith("/")
                                                            ? "command"
                                                            : "message",
                                                    user: n,
                                                    bot: l,
                                                },
                                            ];
                                  }),
                                  i = { kind: "message", user: n.message, bot: n.reply };
                              if ("messages" === t && 0 === a.length) return [i];
                              let s = e.commands.filter(ar).map((e) =>
                                      (function (e, t) {
                                          let n = e.description?.trim() ?? "",
                                              l = "" !== n ? n : t.reply;
                                          switch (al(e)) {
                                              case ae.kc.USER:
                                                  return { kind: "user_command", user: e.name, bot: l };
                                              case ae.kc.MESSAGE:
                                                  return { kind: "message_command", user: e.name, bot: l };
                                              default:
                                                  return { kind: "command", user: `/${e.name}`, bot: l };
                                          }
                                      })(e, n),
                                  ),
                                  o = "messages" === t ? [] : s.filter(aa),
                                  u = a.length > 0 ? ai([...a, ...o], !0) : ai("both" === t ? [...s, i] : s, !1);
                              return u.length > 0 ? u : [r];
                          })(r, t, {
                              message: eo.intl.string(es.default.J7qggf),
                              reply: eo.intl.string(es.default.nqYtiy),
                              event: eo.intl.string(es.default["05lU9W"]),
                          }),
                [r, t],
            )),
            { botInteraction: t, botExchanges: n }),
        m = (function (e, t) {
            let { widget_config: n, widget_preview: l } = t,
                r = (0, f.bG)([rZ.default], () => rZ.default.locale),
                a = (0, f.bG)([eN.Ay], () => {
                    let t = eN.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = i.useState(r1);
                    return (
                        i.useEffect(() => {
                            let n = Object.entries(t ?? {});
                            if (0 === n.length) return;
                            let r = !1;
                            return (
                                Promise.all(
                                    n.map((t) => {
                                        let [n, l] = t;
                                        return (0, en.PK)(e, l.id).then(
                                            (e) => [n, e],
                                            () => null,
                                        );
                                    }),
                                ).then(
                                    (e) => {
                                        r || l(Object.fromEntries(e.filter((e) => null != e)));
                                    },
                                    () => {},
                                ),
                                () => {
                                    r = !0;
                                }
                            );
                        }, [e, t]),
                        n
                    );
                })(e, l?.images),
                o = i.useMemo(
                    () =>
                        null == n || null == l
                            ? null
                            : (function (e, t, n, l) {
                                  let r = {};
                                  for (let [t, n] of Object.entries(e.surfaces))
                                      null != n &&
                                          (r[t] = (function (e) {
                                              let t = {};
                                              for (let [n, l] of Object.entries(e.components)) {
                                                  let e = {};
                                                  for (let [t, n] of Object.entries(l.fields))
                                                      e[t] = {
                                                          ...r2(n),
                                                          ...(null != n.fallback ? { fallback: r2(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let a = rJ.uW.safeParse(r);
                                  if (!a.success) return null;
                                  let i = a.data;
                                  return null == i[tA.m.WIDGET_TOP] || null == i[tA.m.WIDGET_BOTTOM]
                                      ? null
                                      : {
                                            locale: l,
                                            surfaceConfigs: i,
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
                                                        r = {};
                                                    for (let [e, a] of Object.entries(t.sample_data ?? {}))
                                                        if ("image" === l.get(e)) {
                                                            let t = n[String(a)];
                                                            null != t &&
                                                                (r[e] = {
                                                                    type: rJ.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof a
                                                                ? (r[e] = { type: rJ.oG.NUMBER, value: a })
                                                                : (r[e] = { type: rJ.oG.STRING, value: a });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(r3),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: r0,
                                            },
                                        };
                              })(n, l, s, r),
                    [n, l, s, r],
                );
            return i.useMemo(() => (null == a || null == o ? null : { applicationId: a, rendererProps: o }), [a, o]);
        })(l, r),
        h = s?.superseded === !0,
        g = r.what_changed?.trim() ?? "";
    return (0, a.jsxs)(n4, {
        title:
            h && null != s
                ? eo.intl.formatToPlainString(es.default.YZ3qJs, { version: s.version })
                : eo.intl.string(es.default["3b6e7o"]),
        meta: h
            ? (0, a.jsx)(n3, { children: eo.intl.string(es.default.hF2c41) })
            : (0, a.jsx)(aQ, {
                  tags: (function (e, t) {
                      if (null != e.automod) return ["automod"];
                      let n = [];
                      return (e.supported_surfaces?.includes(Y.q7.OVERLAY) === !0 && n.push("overlay"),
                      null != e.widget_config && n.push("widget"),
                      !0 === e.is_activity)
                          ? [...n, "activity"]
                          : null == t
                            ? [...n, "bot"]
                            : (("commands" === t || "both" === t) && n.push("commands"),
                              "commands" !== t && n.push("chat_bot"),
                              n);
                  })(r, c),
              }),
        superseded: h,
        showLabel: eo.intl.string(es.default.yD8EJS),
        hideLabel: eo.intl.string(es.default.nSPGNb),
        bodyClassName: aV.rf,
        "data-conjure-plan-card": !0,
        children: [
            "" !== g
                ? (0, a.jsx)(aX, {
                      label: eo.intl.string(es.default.iNS4dl),
                      children: (0, a.jsx)(j.E, {
                          variant: "experimental/body-md/normal",
                          color: "text-default",
                          selectable: !0,
                          children: g,
                      }),
                  })
                : null,
            (0, a.jsx)(j.E, {
                variant: "experimental/body-md/normal",
                color: "text-default",
                selectable: !0,
                children: r.summary,
            }),
            null != u && u.examples.length > 0
                ? (0, a.jsx)(aX, {
                      label: eo.intl.string(es.default.z4ZKYG),
                      icon: (0, a.jsx)(aC, {}),
                      info: (0, a.jsx)(aJ, {
                          text: eo.intl.string(es.default.bo4MOx),
                          label: eo.intl.string(es.default.VPLNot),
                      }),
                      children: (0, a.jsx)(aE, { automod: u }),
                  })
                : null,
            null == u && null != r.design_image ? (0, a.jsx)(aZ, { projectId: l, design: r.design_image }) : null,
            d.length > 0
                ? (0, a.jsx)(aX, {
                      label: eo.intl.string(es.default.sA1lTv),
                      info: (0, a.jsx)(aJ, {
                          text: eo.intl.string(es.default.NnmbJu),
                          label: eo.intl.string(es.default.KsqQJX),
                      }),
                      children: (0, a.jsx)(aU, { projectId: l, exchanges: d }),
                  })
                : null,
            null == u && null != m
                ? (0, a.jsx)(aX, {
                      label: eo.intl.string(es.default.ove4zH),
                      info: (0, a.jsx)(aJ, {
                          text: eo.intl.string(es.default.XcIrHx),
                          label: eo.intl.string(es.default["TwT+ht"]),
                      }),
                      children: (0, a.jsx)(aK, { ...m }),
                  })
                : null,
            r.changes.length > 0
                ? (0, a.jsx)(aX, {
                      label: eo.intl.string(es.default["5+mG1z"]),
                      children: (0, a.jsx)("ul", {
                          className: aV.p_,
                          children: r.changes.map((e, t) =>
                              (0, a.jsx)(
                                  "li",
                                  {
                                      className: aV.Aw,
                                      children: (0, a.jsx)(j.E, {
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
            r.commands.length > 0
                ? (0, a.jsx)(aX, {
                      label: eo.intl.string(eo.t["0hKkS+"]),
                      children: (0, a.jsx)("ul", {
                          className: aV.p_,
                          children: r.commands.map((e, t) =>
                              (0, a.jsxs)(
                                  "li",
                                  {
                                      className: aV.uX,
                                      children: [
                                          (0, a.jsxs)(j.E, {
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
                                          (0, a.jsx)(j.E, {
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
            (0, a.jsx)(aY, { label: eo.intl.string(es.default["2UbW6r"]), names: r.bot_permissions ?? [] }),
            (0, a.jsx)(aY, { label: eo.intl.string(es.default["7TKfpj"]), names: r.privileged_intents ?? [] }),
            null == o || h
                ? null
                : (0, a.jsxs)("div", {
                      className: aV.o1,
                      children: [
                          (0, a.jsx)(A.$, {
                              variant: "primary",
                              size: "sm",
                              text: eo.intl.string(es.default["6S+wRM"]),
                              onClick: o,
                          }),
                          (0, a.jsx)(j.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              tag: "span",
                              children: eo.intl.string(es.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
function a1(e) {
    return null != e && e.status?.state === "unpublished";
}
let a2 = new WeakMap();
function a3(e) {
    let { publish: t } = e,
        n = t.guildId,
        l = (0, f.bG)([X.A], () => (null == n ? null : X.A.getGuild(n)));
    return (0, a.jsx)(nf.B, {
        gap: 8,
        align: "start",
        children: (0, a.jsxs)(nf.B, {
            direction: "horizontal",
            gap: 8,
            align: "center",
            children: [
                (0, a.jsx)(A.$, {
                    variant: "primary",
                    size: "sm",
                    loading: t.publishing,
                    disabled: t.disabled,
                    onClick: () => t.run("card"),
                    text: t.label,
                }),
                null != l
                    ? (0, a.jsxs)(nf.B, {
                          direction: "horizontal",
                          gap: 4,
                          align: "center",
                          children: [
                              (0, a.jsx)(j.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: eo.intl.string(es.default["+HGTlC"]),
                              }),
                              (0, a.jsx)(eG.Ay, { guild: l, size: eG.Ay.Sizes.SMOL }),
                              (0, a.jsx)(j.E, {
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
function a4(e) {
    let { projectId: t } = e,
        n = (0, ns.Ay)(t);
    return null != n && a1(n) ? (0, a.jsx)(a3, { publish: n }) : null;
}
var a6 = n(478016),
    a7 = n(989271);
function a5(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        s = null == l;
    return (0, a.jsxs)(b.D, {
        className: o()(a7.nM, { [a7.f1]: s, [a7.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": eo.intl.formatToPlainString(es.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: a7.jo,
                children: [
                    n
                        ? (0, a.jsx)(a6.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: a7.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(j.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: a7.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, a.jsx)(j.E, {
                      tag: "div",
                      id: r,
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function a8(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(n1, {
        title: eo.intl.string(es.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                a5,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
function a9(e) {
    let { onAsk: t } = e;
    return (0, a.jsx)(nf.B, {
        align: "start",
        "data-conjure-ideas-offer": !0,
        children: (0, a.jsx)(A.$, {
            variant: "secondary",
            size: "sm",
            disabled: null == t,
            onClick: t,
            text: eo.intl.string(es.default["U/bLzU"]),
        }),
    });
}
var ie = n(530557),
    it = n(872162);
function il(e, t) {
    return { cardId: e, status: "pending" === t ? null : t };
}
var ir = n(202723);
function ia(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: u } = e,
        c = i.useCallback(() => {
            (0, te.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("291953"), n.e("408337")]).then(n.bind(n, 789864));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        d = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: ie.R })), [r.fields]),
        f = (function (e, t) {
            let [n, l] = i.useState(() => il(e, t));
            return n.cardId !== e || (null == n.status && "pending" !== t)
                ? (l(il(e, t)), !1)
                : null != n.status && t !== n.status;
        })(l, s),
        m = o()(ir.Lo, { [ir.jY]: f });
    return "superseded" === s
        ? (0, a.jsx)(
              "article",
              {
                  className: m,
                  children: (0, a.jsx)(j.E, {
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      tag: "span",
                      children: eo.intl.string(es.default.CTxtdV),
                  }),
              },
              s,
          )
        : "inactive" === s
          ? (0, a.jsxs)(
                "article",
                {
                    className: m,
                    children: [
                        (0, a.jsx)(j.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            tag: "span",
                            children: eo.intl.string(es.default.HCQvpO),
                        }),
                        (0, a.jsx)(it.C, { label: eo.intl.string(es.default.HCQvpO), size: "xs", items: d }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, a.jsx)(
                  "article",
                  {
                      className: ir.Lo,
                      children: (0, a.jsx)(it.C, { label: eo.intl.string(es.default.HCQvpO), size: "xs", items: d }),
                  },
                  s,
              )
            : "received" === s
              ? (0, a.jsxs)(
                    "article",
                    {
                        className: m,
                        children: [
                            (0, a.jsxs)("div", {
                                className: ir.$h,
                                children: [
                                    (0, a.jsx)("span", {
                                        className: ir.c9,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(ac.y, {
                                            size: "xs",
                                            color: L.A.colors.ICON_FEEDBACK_POSITIVE,
                                        }),
                                    }),
                                    (0, a.jsx)(j.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-feedback-positive",
                                        tag: "span",
                                        children: eo.intl.string(es.default.sfp7Up),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(it.C, { label: eo.intl.string(es.default.sfp7Up), size: "xs", items: d }),
                        ],
                    },
                    s,
                )
              : (0, a.jsxs)("article", {
                    className: ir.Lo,
                    children: [
                        (0, a.jsx)(j.E, {
                            variant: "text-xs/semibold",
                            color: null != u ? "text-brand" : "text-muted",
                            tag: "span",
                            children: eo.intl.string(null != u ? es.default.O0QIqj : es.default.HCQvpO),
                        }),
                        (0, a.jsx)(j.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            selectable: !0,
                            children: null != r.note && "" !== r.note ? r.note : eo.intl.string(es.default.MPGSHL),
                        }),
                        (0, a.jsx)(it.C, { label: eo.intl.string(es.default.HCQvpO), size: "xs", items: d }),
                        (0, a.jsx)("div", {
                            className: ir.sq,
                            children: (0, a.jsx)(A.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: c,
                                text: eo.intl.string(es.default.EK8tKY),
                            }),
                        }),
                    ],
                });
}
var ii = n(919790),
    is = n(971824),
    io = n(162052),
    iu = n(165648);
function ic(e) {
    let t = rA(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? rw(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: rp(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function id(e) {
    let {
            projectId: t,
            steps: n,
            active: l = !1,
            turnActive: r = l,
            checklistSuperseded: s = !1,
            durationMs: o,
            interrupted: u = !1,
            todos: c,
            provisionalTodo: d,
            segment: f,
            hostsChecklist: m = !0,
            reportsDuration: h = !0,
            closed: g = !1,
            segmentDurationMs: p,
        } = e,
        x = i.useMemo(() => (0, nW.Jf)(n, l), [n, l]),
        v = i.useMemo(
            () =>
                null == f
                    ? x
                    : {
                          ...x,
                          steps: x.steps.filter((e) => e.segment === f),
                          tasks: x.tasks.filter((e) => e.task.segment === f),
                      },
            [x, f],
        );
    if (u)
        return (0, a.jsx)("ol", {
            className: ln.pj,
            "data-live": !1,
            children: (0, a.jsx)(nQ.A, {
                glyph: (0, a.jsx)(rm.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: eo.intl.string(es.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (p ?? (h ? (x.turn?.durationMs ?? o) : void 0)),
        b = m ? ((0, nW.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = rA(k.map((e) => e.taskId)),
        A = !g && (l || k.some((e) => "running" === e.task.status)),
        N = ic(k);
    return (0, a.jsxs)("ol", {
        className: ln.pj,
        "data-live": A,
        children: [
            (0, a.jsx)(nJ.A, {
                projectId: t,
                steps: v.steps,
                fallbackLabel: k.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                live: l,
                closed: g,
                durationMs: j,
                connectsDown: k.length > 0,
                tier: x.turn?.tier,
            }),
            k.map((e, n) => {
                let l = null != e.task.helperMark ? rw(e.task.helperMark) : void 0,
                    r = l ?? w.get(e.taskId);
                return null == r
                    ? null
                    : (0, a.jsx)(
                          rC,
                          {
                              projectId: t,
                              lane: e,
                              Illocon: r.Illocon,
                              tint: r.tint,
                              name: null != l && null != e.task.helperName ? e.task.helperName : r.name,
                              connectsDown: n < k.length - 1,
                          },
                          e.taskId,
                      );
            }),
            (0, a.jsx)(rz, { projectId: t, steps: n, tree: x, segment: f }),
            y
                ? (0, a.jsx)("li", {
                      className: ln.YO,
                      children: (0, a.jsx)(le, { todos: b, provisional: d, agents: N, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function im(e) {
    let {
            projectId: t,
            steps: n,
            content: l,
            proposal: r,
            planVersion: s,
            ideas: u,
            attachments: c,
            secretRequest: d,
            secretRequestId: f,
            secretRequestAwaiting: m,
            secretRequestStatus: h = "open",
            settingsRequest: g,
            publishCta: p,
            onPickIdea: x,
            pickedIdeaIds: v,
            onApprovePlan: b,
            sideReply: y = !1,
            sideReplyAcknowledges: k,
            hoistedProse: w = !1,
            hoistedAttachmentsHost: A,
            restoreProposal: N,
            onRestoreProposal: S,
        } = e,
        C = i.useMemo(
            () => rx({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != c && c.length > 0 }),
            [n, l, r, c],
        ),
        { streamed: E, lastStreamedMessage: I, showsClosingMessage: M, closingContent: _ } = C,
        T = (w ? A : void 0) ?? C.attachmentsHost,
        P = M && !w,
        R = null == c ? null : (0, a.jsx)(ii.A, { projectId: t, attachments: c }),
        L = null == R ? null : (0, a.jsx)("div", { className: ln.MT, children: R }),
        D = y
            ? (0, a.jsx)(j.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return eo.intl.string(es.default.Mv5OmK);
                          case "queued":
                              return eo.intl.string(es.default["Po/2mi"]);
                          case "restarting":
                              return eo.intl.string(es.default.Vj0woh);
                          default:
                              return eo.intl.string(es.default.gY3L8p);
                      }
                  })(k),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: ln.ue,
        children: [
            E.length > 0 && !w
                ? (0, a.jsx)("ol", {
                      className: ln.dO,
                      children: E.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: ln.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: iu.PT,
                                          children: rh.A.parse(e.content, !0, {
                                              allowList: !0,
                                              allowHeading: !0,
                                              allowLinks: !0,
                                          }),
                                      }),
                                      "streamed" === T && e === I ? L : null,
                                  ],
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            null != r
                ? (0, a.jsx)(a0, { projectId: t, proposal: r, version: s, onApprove: b })
                : P
                  ? (0, a.jsxs)("div", {
                        className: o()(ln.ky, io.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: o()(iu.PT, ln.cW),
                                children: rh.A.parse(_, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === T ? L : null,
                            D,
                        ],
                    })
                  : null,
            null != d
                ? (0, a.jsx)("div", {
                      className: o()(ln.ky, io.XR, { [is.O]: null != m && "open" === h }),
                      children: (0, a.jsx)(ia, {
                          projectId: t,
                          cardId: f ?? "",
                          request: d,
                          status: h,
                          awaiting: "open" === h ? m : void 0,
                      }),
                  })
                : null,
            null != g
                ? (0, a.jsx)("div", {
                      className: o()(ln.ky, io.XR),
                      children: (0, a.jsx)(rn, { projectId: t, request: g }),
                  })
                : null,
            "standalone" !== T && ("closing" !== T || P) ? null : R,
            null != p ? (0, a.jsx)(a4, { projectId: t }) : null,
            null != u && u.length > 0 ? (0, a.jsx)(a8, { ideas: u, pickedIdeaIds: v, onPick: x }) : null,
            null != N ? (0, a.jsx)(rU, { proposal: N, onRestore: S }) : null,
            P ? null : D,
        ],
    });
}
var ih = n(146806),
    ig = n(477262),
    ip = n(432017),
    ix = n(475358),
    iv = n(717400),
    ij = n(663341),
    ib = n(559647),
    iy = n(775602),
    ik = n(234320),
    iw = n(285796),
    iA = n(922329);
async function iN(e) {
    let t = new Worker(new URL("/assets/" + n.u("638664"), n.b));
    try {
        let n = await new Promise((n) => {
            (t.addEventListener("message", (e) => {
                let { data: t } = e;
                return n(t);
            }),
                t.addEventListener("error", () => n(null)),
                t.addEventListener("messageerror", () => n(null)),
                t.postMessage(e));
        });
        if (null == n) return null;
        return new File([n], `${e.name.replace(/\.png$/i, "")}.webp`, {
            type: "image/webp",
            lastModified: e.lastModified,
        });
    } finally {
        t.terminate();
    }
}
var iS = n(153171);
let iC = Y.lN;
function iE(e, t, n, l) {
    let r = lU(e, t).length;
    !(function (e, t, n) {
        if (0 === n.length) return;
        let l = n.map((e) => {
            let { draft: t, upload: n } = e;
            return { draft: { ...t, localId: lF++ }, upload: n };
        });
        for (let { draft: n, upload: r } of (lG(e, t, [
            ...lU(e, t),
            ...l.map((e) => {
                let { draft: t } = e;
                return t;
            }),
        ]),
        l))
            r?.().then(
                (l) => {
                    if ("errorText" in l) return void lq(e, t, n.localId, { status: "error", errorText: l.errorText });
                    let { converted: r, ...a } = l;
                    lq(e, t, n.localId, { ...r, status: "ready", ref: a })
                        ? setTimeout(
                              () =>
                                  lq(e, t, n.localId, {
                                      status: "error",
                                      errorText: eo.intl.string(es.default.E7dS5n),
                                  }),
                              Y.o2 - 3e5,
                          )
                        : lB(e, a.id);
                },
                (l) => {
                    (console.error("[vibegrations] attachment upload failed", l),
                        lq(e, t, n.localId, { status: "error", errorText: eo.intl.string(es.default["kUw/b1"]) }));
                },
            );
    })(
        e,
        t,
        n.map((e) => {
            let t = "" === e.type ? "application/octet-stream" : e.type,
                n = { name: e.name, contentType: t };
            if (r++ >= iC)
                return {
                    draft: {
                        ...n,
                        status: "error",
                        errorText: eo.intl.formatToPlainString(es.default.Q0aCVZ, { count: iC }),
                    },
                };
            if (!(0, Y.Oq)(e.size, t))
                return "image/png" === t && e.size <= Y.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas
                    ? {
                          draft: { ...n, status: "uploading", previewUrl: URL.createObjectURL(e) },
                          upload: async () => {
                              let n = await iN(e).catch(() => null);
                              return null != n && (0, Y.Oq)(n.size, n.type)
                                  ? { ...(await l(n)), converted: { name: n.name, contentType: n.type } }
                                  : { errorText: lV(t) };
                          },
                      }
                    : { draft: { ...n, status: "error", errorText: lV(t) } };
            let a = Y.XB.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...n, status: "uploading", previewUrl: a }, upload: () => l(e) };
        }),
    );
}
function iI(e) {
    let { projectId: t, surface: n, onUploadFile: l } = e,
        r = lz.useState((e) => lO(e, t, n)),
        a = i.useCallback((e) => iE(t, n, e, l), [t, n, l]),
        s = i.useCallback(
            (e) => {
                if (e.defaultPrevented) return;
                let t = Array.from(e.clipboardData?.files ?? []);
                0 !== t.length && (e.preventDefault(), a(t));
            },
            [a],
        ),
        o = i.useCallback(
            (e) => {
                let l, r;
                null != (r = (l = lU(t, n)).find((t) => t.localId === e)) &&
                    (lH(t, r),
                    lG(
                        t,
                        n,
                        l.filter((t) => t.localId !== e),
                    ));
            },
            [t, n],
        ),
        u = i.useCallback(() => lX(t, n), [t, n]);
    return {
        drafts: r,
        addFiles: a,
        pasteFiles: s,
        removeDraft: o,
        settled: r.every((e) => "ready" === e.status),
        takeRefs: u,
    };
}
function iM(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(iA.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(j.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(w.y, { type: w.t.SPINNING_CIRCLE_SIMPLE, className: iS.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: iS.o1,
                onClick: () => n(t.localId),
                "aria-label": eo.intl.string(es.default.Slam9g),
                children: (0, a.jsx)(iw.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var i_ = n(497437);
let iT = [
        {
            id: "add-images-videos",
            label: es.default["51+9lc"],
            icon: ig.s,
            accept: "image/*,video/*,.png,.jpg,.jpeg,.gif,.webp,.avif,.heic,.heif,.svg,.bmp,.mp4,.m4v,.mov,.webm,.mkv,.avi",
        },
        {
            id: "add-sounds",
            label: es.default["10ljr2"],
            icon: ip.T,
            accept: "audio/*,.mp3,.wav,.ogg,.oga,.opus,.m4a,.aac,.flac,.weba,.webm,.aif,.aiff,.mid,.midi",
        },
        { id: "add-other-files", label: es.default.aotDee, icon: et.H, accept: "" },
    ],
    iP = "text-md/normal",
    iR = null;
function iL(e) {
    let { text: t, offering: n, typed: l } = e,
        [r, s] = i.useState(t),
        u = i.useRef(null),
        c = i.useRef(null),
        d = i.useRef(0),
        [m, h] = i.useState(0),
        [g, p] = i.useState(0),
        [x, v] = i.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
    (i.useLayoutEffect(() => {
        let e = u.current,
            t = e?.parentElement;
        if (null == e || null == t) return;
        let n = d.current;
        function l() {
            let e = u.current,
                t = e?.parentElement;
            if (null == e || null == t) return;
            let l = c.current;
            if (null == l) return;
            let r = parseFloat(getComputedStyle(t).columnGap),
                a = Number.isNaN(r) ? 0 : r,
                i = e.offsetWidth,
                s = l.offsetWidth + a;
            (p(i + a), h(s));
            let o = s + i,
                d = Math.max(n, l.offsetWidth) + a + i,
                f = 0 === d ? 1 : s / d,
                m = 0 === d ? 1 : o / d;
            v({
                frontFrom: 1e3 * (0, ih._R)(f),
                frontTo: 1e3 * (0, ih._R)(m),
                backFrom: 1e3 * (0, ih.T)(f),
                backTo: 1e3 * (0, ih.T)(m),
            });
        }
        let r = new ResizeObserver(l);
        return (l(), r.observe(e), r.observe(t), null != c.current && r.observe(c.current), () => r.disconnect());
    }, [t]),
        i.useEffect(() => {
            d.current = c.current?.offsetWidth ?? 0;
        }, [t]));
    let [b, y] = i.useState(0),
        [k, w] = i.useState(null),
        A = i.useRef(!1),
        N = i.useCallback(() => {
            (w(A.current ? (n ? "through" : "out") : n ? "in" : null), y((e) => e + 1));
        }, [n]);
    i.useEffect(() => {
        A.current = n;
    }, [n, t]);
    let S = "in" === k ? x.backFrom : x.frontFrom,
        C = "out" === k ? x.frontTo : x.backTo,
        E = (0, f.bG)([iy.Ay], () => iy.Ay.useReducedMotion),
        I = t === eo.intl.string(es.default.Zc7gML),
        M = r === t && I;
    function _(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: o()(i_.VT, { [i_.qk]: l }),
            style: l
                ? {
                      insetInlineStart: m,
                      "--custom-cap-wipe-delay": `${S}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, C - S)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": l && b > 0 && null != k ? b % 2 : void 0,
            "data-wipe-kind": l ? (k ?? void 0) : void 0,
            children: (0, a.jsx)(ix.e, { shortcut: "tab", className: i_.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(eT.o, {
                text: t,
                variant: iP,
                delay: null,
                duration: 1e3,
                trailingWidth: g,
                className: o()(i_.xM, { [i_.s2]: l }),
                onStart: N,
                onComplete: () => s(t),
            }),
            _(i_.IS, n || (!E && "out" === k), u),
            (0, a.jsx)("span", {
                ref: c,
                className: i_.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(j.E, { variant: iP, tag: "span", children: t }),
            }),
            M
                ? (0, a.jsxs)("span", {
                      className: i_.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(j.E, { variant: iP, tag: "span", className: i_.xM, children: t }),
                          _(i_.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let iD = i.memo(function (e) {
        let {
                projectId: t,
                canSend: n,
                stopped: l,
                running: r,
                restoring: s = !1,
                onSend: o,
                onInterrupt: u,
                onUploadFile: c,
                onApprove: d,
                onImport: m,
                suggestion: h,
                questionOpen: g = !1,
                hasPendingContext: p = !1,
                onDraftHasTextChange: x,
                modelSettings: v,
                onModelSettingsChange: j,
            } = e,
            [b, w] = i.useState(() => rd.getDraft(t)),
            A = i.useCallback(
                (e) => {
                    ((0, eA.I$)(t, e), w(e));
                },
                [t],
            ),
            N = "" !== b.trim();
        i.useEffect(() => x?.(N), [N, x]);
        let [S, C] = i.useState(t);
        S !== t && (C(t), w(rd.getDraft(t)));
        let E = (0, f.bG)([iy.Ay], () => iy.Ay.isSubmitButtonEnabled),
            [I, M] = i.useState(!1);
        i.useEffect(() => {
            r || M(!1);
        }, [r]);
        let _ = i.useRef(null),
            {
                drafts: T,
                addFiles: P,
                pasteFiles: R,
                removeDraft: L,
                settled: D,
                takeRefs: $,
            } = iI({ projectId: t, surface: "chat", onUploadFile: c }),
            F = "" !== b.trim() || T.length > 0 || p,
            z = n && F && D,
            [O, U] = i.useState(null);
        i.useEffect(() => {
            if (null == O) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => U(null));
                });
            return () => {
                (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
            };
        }, [O]);
        let G = i.useCallback(() => {
                if (!z) return;
                let e = $();
                o(b, e.length > 0 ? e : void 0);
                let t = (function (e, t, n) {
                    let l,
                        r,
                        a = n.split("\n", 1)[0] ?? "";
                    if (null == e || "" === a) return a;
                    null == iR && (iR = document.createElement("canvas").getContext("2d"));
                    let i = iR;
                    if (null == i) return a;
                    let s = getComputedStyle(e);
                    i.font = "" !== s.font ? s.font : `${s.fontWeight} ${s.fontSize} ${s.fontFamily}`;
                    let o =
                        t > 0
                            ? t
                            : ((l = parseFloat(s.paddingInlineStart)),
                              (r = parseFloat(s.paddingInlineEnd)),
                              e.clientWidth - (Number.isNaN(l) ? 0 : l) - (Number.isNaN(r) ? 0 : r));
                    if (o <= 0 || i.measureText(a).width <= o) return a;
                    let u = 0,
                        c = a.length;
                    for (; u < c;) {
                        let e = Math.ceil((u + c) / 2);
                        i.measureText(a.slice(0, e)).width <= o ? (u = e) : (c = e - 1);
                    }
                    let d = a.slice(0, u),
                        f = d.lastIndexOf(" ");
                    return (f > 0 ? d.slice(0, f) : d).trimEnd();
                })(X.current?.querySelector("textarea") ?? null, ec.current, b);
                ("" !== t && U(t), A(""));
            }, [z, b, o, $, A]),
            q = i.useCallback(
                (e) => {
                    (e.preventDefault(), G());
                },
                [G],
            ),
            B = i.useCallback(() => {
                null == u || I || (M(!0), u());
            }, [u, I]),
            H = null == h || "" !== b || !n || l || s || p ? null : h,
            K = i.useCallback(
                (e) => {
                    if ("Escape" === e.key && r && null != u && !I) {
                        (e.preventDefault(), e.stopPropagation(), B());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != H) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), A(H));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != d && (e.preventDefault(), d());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), G());
                },
                [G, d, r, u, I, B, H, A],
            ),
            V = i.useCallback(
                (e) => {
                    n && R(e);
                },
                [n, R],
            );
        (0, ik.Vo)({
            event: ex.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return V(t);
            },
        });
        let W = i.useCallback(
                (e) => {
                    (P(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
                },
                [P],
            ),
            X = i.useRef(null),
            J = i.useRef(null),
            Y = i.useCallback((e) => {
                let t = _.current;
                null != t && ((t.accept = e), t.click());
            }, []),
            [et, en] = i.useState(0),
            [el, er] = i.useState(!1);
        i.useEffect(() => {
            if (0 === b.length) return void er(!1);
            let e = X.current?.querySelector("textarea");
            if (null != e) {
                let t = iz(e);
                null != t && en(t);
            }
            er(!0);
            let t = setTimeout(() => er(!1), i$);
            return () => clearTimeout(t);
        }, [b]);
        let ea = i.useMemo(() => ({ "--custom-glow-x": `${et}px` }), [et]),
            ei = el ? ` ${i_.EB}` : "",
            eu = s
                ? eo.intl.string(es.default.qqlUiW)
                : l
                  ? eo.intl.string(es.default.mPB3eo)
                  : n
                    ? p
                        ? eo.intl.string(es.default.knUjL3)
                        : g
                          ? eo.intl.string(es.default.IevBEw)
                          : eo.intl.string(r ? es.default["0BJa/0"] : es.default.TEeU7z)
                    : eo.intl.string(es.default.zZ9NgM),
            ec = i.useRef(0),
            ed = i.useRef(null),
            ef = i.useCallback((e) => {
                if ((ed.current?.disconnect(), null == e)) return;
                ec.current = e.clientWidth;
                let t = new ResizeObserver(() => {
                    ec.current = e.clientWidth;
                });
                (t.observe(e), (ed.current = t));
            }, []),
            em = i.useId(),
            eh = null != H,
            eg = O ?? H ?? eu,
            ep = "" === b && "" !== eg;
        return (0, a.jsxs)("form", {
            onSubmit: q,
            className: i_.DA,
            children: [
                T.length > 0
                    ? (0, a.jsx)("div", {
                          className: i_.lN,
                          children: T.map((e) => (0, a.jsx)(iM, { draft: e, onRemove: L }, e.localId)),
                      })
                    : null,
                (0, a.jsx)("span", { className: `${i_.wg} ${i_.LP}${ei}`, style: ea, "aria-hidden": !0 }),
                (0, a.jsx)("span", { className: `${i_.wg} ${i_.L3}${ei}`, style: ea, "aria-hidden": !0 }),
                (0, a.jsxs)("div", {
                    className: i_.VA,
                    ref: X,
                    children: [
                        (0, a.jsx)("input", {
                            ref: _,
                            type: "file",
                            multiple: !0,
                            onChange: W,
                            className: i_.nY,
                            tabIndex: -1,
                            "aria-hidden": !0,
                        }),
                        (0, a.jsx)(Q.Y, {
                            targetElementRef: J,
                            position: "top",
                            align: "left",
                            animation: Q.Y.Animation.NONE,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, a.jsx)(Z.W, {
                                    "data-menu-migrated": !0,
                                    navId: "conjure-composer-attach",
                                    "aria-label": eo.intl.string(eo.t.d56gCa),
                                    onClose: t,
                                    onSelect: t,
                                    children: (0, a.jsxs)(ee.rX, {
                                        children: [
                                            iT.map((e) =>
                                                (0, a.jsx)(
                                                    ee.Dr,
                                                    {
                                                        id: e.id,
                                                        label: eo.intl.string(e.label),
                                                        iconLeft: e.icon,
                                                        leadingAccessory: { type: "icon", icon: e.icon },
                                                        action: () => Y(e.accept),
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                            null != m
                                                ? (0, a.jsx)(ee.Dr, {
                                                      id: "import-project",
                                                      label: eo.intl.string(es.default["p/k5i7"]),
                                                      iconLeft: iv.q,
                                                      leadingAccessory: { type: "icon", icon: iv.q },
                                                      action: m,
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
                                    ref: J,
                                    type: "button",
                                    className: `${i_.Y0} ${i_.nu}`,
                                    disabled: !n,
                                    "aria-label": eo.intl.string(eo.t.d56gCa),
                                    "aria-haspopup": "menu",
                                    "aria-expanded": l,
                                    children: (0, a.jsx)(ij.PlusLargeIcon, {
                                        size: "refresh_sm",
                                        color: "currentColor",
                                        className: i_.Qu,
                                    }),
                                });
                            },
                        }),
                        ep
                            ? (0, a.jsx)("div", {
                                  ref: ef,
                                  className: i_.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(iL, { text: eg, offering: eh && null == O, typed: null != O }),
                              })
                            : null,
                        (0, a.jsx)(ls.y, {
                            value: b,
                            onChange: (e) => A(e.currentTarget.value),
                            onKeyDown: K,
                            onPaste: V,
                            placeholder: ep ? "" : eu,
                            disabled: !n,
                            "aria-label": eo.intl.string(es.default.ldNl9x),
                            "aria-describedby": ep ? em : void 0,
                            rows: 1,
                            className: i_.jp,
                        }),
                        ep ? (0, a.jsx)(k.A, { id: em, children: eu }) : null,
                        (0, a.jsx)("div", {
                            className: i_.Sz,
                            children:
                                r && null != u
                                    ? (0, a.jsx)(y.m, {
                                          text: eo.intl.string(es.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, a.jsx)("button", {
                                              type: "button",
                                              className: `${i_.Y0} ${i_.$E}`,
                                              disabled: I,
                                              onClick: B,
                                              "aria-label": eo.intl.string(es.default.wiguT0),
                                              children: (0, a.jsx)(rm.w, {
                                                  size: "custom",
                                                  width: 20,
                                                  height: 20,
                                                  color: "currentColor",
                                              }),
                                          }),
                                      })
                                    : v?.tierSettings != null && null != j
                                      ? (0, a.jsx)(th, {
                                            settings: v.tierSettings,
                                            tiers: v.tiers,
                                            choices: v.choices,
                                            disabled: !n,
                                            onChange: j,
                                            className: `${i_.Y0} ${i_.$E}`,
                                            icon: (0, a.jsx)(ti.R, {
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
                                  className: i_.fF,
                                  children: [
                                      (0, a.jsx)("div", { className: i_.MT }),
                                      (0, a.jsx)("button", {
                                          type: "submit",
                                          className: i_.rt,
                                          disabled: !z,
                                          "aria-label": eo.intl.string(es.default.rxW2cl),
                                          children: (0, a.jsx)(ib.SendMessageIcon, {
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
    }),
    i$ = 1500,
    iF = [
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
function iz(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = iz.mirror;
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
                (iz.mirror = t),
                t
            );
        })(),
        n = window.getComputedStyle(e);
    for (let e of iF) t.style.setProperty(e, n.getPropertyValue(e));
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let l = document.createElement("span");
    ((l.textContent = "\u200B"), t.appendChild(l));
    let r = l.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + r - e.scrollLeft);
}
iz.mirror = null;
var iO = n(52133),
    iU = n(531685),
    iG = n(155899),
    iq = n(148087);
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
                let { publish: n, draftTyped: l, outdatedUpdating: r } = e;
                return r
                    ? n?.isUpdate === !0
                    : !l && null != (t = n) && t.isUpdate && null == t.disabledReason && !0 !== t.publishing;
            },
        },
        {
            key: "ideas",
            priority: 1,
            idleDelayMs: 6e4,
            clock: "visit",
            eligible: (e) => {
                var t;
                let { turn: n, publish: l, draftHasText: r } = e;
                return (
                    !r &&
                    l?.publishing !== !0 &&
                    "plan_implemented" === (t = n).kind &&
                    (0, ej.BL)(t) &&
                    !(null != n.publishCta && a1(l))
                );
            },
        },
    ];
function iK(e, t) {
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
        outdatedUpdating: !1,
    };
}
let iV = new Map();
function iW(e) {
    return (0, f.bG)([eN.Ay, r6.A], () => {
        let t = eN.Ay.getProject(e);
        return null == t ? "" : (r6.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
function iX(e) {
    let { projectId: t, notice: n } = e;
    return "outdated" === n ? (0, a.jsx)(iY, { projectId: t }) : (0, a.jsx)(iJ, { projectId: t, notice: n });
}
function iJ(e) {
    let { projectId: t, notice: n } = e,
        l = i.useContext(ns.bI),
        r = iW(t),
        s = (0, f.bG)([eN.Ay, X.A], () => {
            let e = eN.Ay.getProject(t);
            return null == e || "user" === e.install_scope || null == e.guild_id
                ? null
                : (X.A.getGuild(e.guild_id)?.name ?? null);
        }),
        o = i.useCallback(() => {
            null != l && (0, ns.ub)(t, l);
        }, [l, t]);
    return (0, a.jsx)(j.E, {
        variant: "text-md/normal",
        color: "text-default",
        children: eo.intl.format(
            (function (e, t) {
                if (!e.update) return null == t ? es.default.MOrR29 : es.default["/npn7F"];
                switch (e.surface) {
                    case "bot":
                        return es.default.zfpeIL;
                    case "widget":
                        return es.default.DxCfTh;
                    case "automod":
                        return es.default["8ytGC3"];
                    case "activity":
                    case null:
                        return es.default.WSmpBT;
                }
            })(n, s),
            { name: r, server: s ?? "", onOpen: o },
        ),
    });
}
function iY(e) {
    let { projectId: t } = e,
        n = (0, ns.Ay)(t),
        [l, r] = i.useState(!1);
    return null == n
        ? null
        : l && (n.publishing || !n.isUpdate)
          ? (0, a.jsx)(iQ, {})
          : (0, a.jsx)(j.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: eo.intl.format(es.default.X8tdbS, {
                    action: n.label,
                    onUpdate: () => {
                        (r(!0), iV.get(t)?.forEach((e) => e()), n.run("outdated_notice"));
                    },
                }),
            });
}
function iQ() {
    let e = eo.intl.string(es.default.lexcBN),
        t = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = (0, f.bG)([iy.Ay], () => iy.Ay.useReducedMotion),
                [n, l] = i.useState(1);
            return (
                i.useEffect(() => {
                    if (t || e) return;
                    let n = setInterval(() => l((e) => (e % 3) + 1), 400);
                    return () => clearInterval(n);
                }, [t, e]),
                ".".repeat(t ? 3 : n)
            );
        })(!(0, iq.A)());
    return (0, a.jsxs)(j.E, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: [e, (0, a.jsx)("span", { "aria-hidden": !0, children: t })],
    });
}
var iZ = n(248798);
function i0(e, t) {
    e.style.height = `${t.offsetHeight}px`;
}
function i1(e) {
    let { reminder: t, renderReminder: n } = e,
        l = (function (e) {
            let t,
                [n, l] = i.useState([]);
            (n.find((e) => !e.leaving)?.key ?? null) !== e &&
                l(
                    ((t = n.filter((t) => t.key !== e).map((e) => ({ ...e, leaving: !0 }))),
                    null != e ? [...t, { key: e, leaving: !1 }] : t),
                );
            let r = n.some((e) => e.leaving);
            return (
                i.useEffect(() => {
                    if (!r) return;
                    let e = setTimeout(() => l((e) => e.filter((e) => !e.leaving)), 180);
                    return () => clearTimeout(e);
                }, [r, n]),
                n
            );
        })(t),
        r = l.find((e) => !e.leaving)?.key ?? null,
        s = null == r && l.length > 0,
        u = i.useRef(null),
        c = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            let e = u.current;
            if (null == e || s) return;
            e.getBoundingClientRect();
            let t = c.current;
            if (null == t) {
                e.style.height = "0px";
                return;
            }
            i0(e, t);
            let n = new ResizeObserver(() => i0(e, t));
            return (n.observe(t), () => n.disconnect());
        }, [r, s]),
        (0, a.jsx)("div", {
            ref: u,
            className: o()(iZ.NI, { [iZ.Jg]: null == r }),
            "aria-live": "polite",
            children: (0, a.jsx)("div", {
                className: iZ.t$,
                children: l.map((e) =>
                    (0, a.jsx)(
                        "div",
                        {
                            ref: e.leaving ? void 0 : c,
                            "aria-hidden": e.leaving || void 0,
                            className: o()(iZ.qd, e.leaving ? iZ.cu : iZ.We),
                            children: n(e.key),
                        },
                        e.key,
                    ),
                ),
            }),
        })
    );
}
var i2 = n(521981),
    i3 = n(491182),
    i4 = n(438729),
    i6 = n(622868),
    i7 = n(448368),
    i5 = n(837528),
    i8 = n(470964),
    i9 = n(715628),
    se = n(752636),
    st = n(9842),
    sn = n(589022),
    sl = n(994500),
    sr = n(967198),
    sa = n(7584);
let si = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function ss(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function so(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function su(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = so(e, t),
        a = e.codePointAt(t);
    if (
        (null != a &&
            (8205 === a ||
                (a >= 65024 && a <= 65039) ||
                (a >= 127995 && a <= 127999) ||
                (a >= 768 && a <= 879) ||
                (a >= 8400 && a <= 8447) ||
                (a >= 65056 && a <= 65071) ||
                (a >= 917536 && a <= 917631))) ||
        8205 === r
    )
        return !0;
    if (ss(r) && ss(a)) {
        let n = 0,
            l = t;
        for (; n < 32 && ss(so(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function sc(e, t) {
    let { streaming: n } = t,
        l = (0, f.bG)([iy.Ay], () => iy.Ay.useReducedMotion),
        r = n && !l,
        [a, s] = i.useState(() => ({ target: e, length: e.length })),
        o = a;
    (o.target !== e &&
        (o = {
            target: e,
            length: r
                ? (function (e, t, n) {
                      let l = Math.min(Math.max(n, 0), e.length);
                      if (0 === l) return 0;
                      if (t.length >= l && t.startsWith(e.slice(0, l))) return l;
                      let r = Math.min(l, t.length),
                          a = 0;
                      for (; a < r && e.charCodeAt(a) === t.charCodeAt(a);) a++;
                      for (; a > 0 && su(t, a);) a--;
                      return a;
                  })(o.target, e, o.length)
                : e.length,
        }),
        r || o.length === e.length || (o = { target: e, length: e.length }),
        o !== a && s(o));
    let u = r && o.length < e.length,
        c = i.useRef(o);
    i.useLayoutEffect(() => {
        c.current = o;
    });
    let d = i.useRef(0),
        m = i.useRef(0);
    (i.useEffect(() => {
        if (u)
            return (
                (m.current = 0),
                (d.current = requestAnimationFrame(function e(t) {
                    let n = 0 === m.current ? 32 : t - m.current;
                    if (n >= 32) {
                        m.current = t;
                        let e = c.current,
                            l = (function (e) {
                                let { target: t, revealed: n, elapsedMs: l } = e,
                                    r = Math.min(Math.max(n, 0), t.length),
                                    a = t.length - r;
                                if (a <= 0) return r;
                                if (a > 900) return t.length;
                                let i = Math.min(
                                    120,
                                    Math.max(1, Math.round(Math.max(0.16, a / 280) * Math.max(l, 0))),
                                );
                                var s = (function (e, t, n) {
                                    if (n >= e.length) return n;
                                    let l = n;
                                    for (; l > t + 1 && n - l < 12 && si.has(e.charAt(l - 1));) l--;
                                    return si.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && su(t, o);) o++;
                                return o;
                            })({ target: e.target, revealed: e.length, elapsedMs: n });
                        l !== e.length && s({ target: e.target, length: l });
                    }
                    d.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(d.current)
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
                let { target: e } = c.current;
                s({ target: e, length: e.length });
            }
        }, [u]));
    let h = Math.min(o.length, e.length);
    return { text: h >= e.length ? e : e.slice(0, h), revealing: r && h < e.length };
}
var sd = n(565645),
    sf = n(981879);
function sm(e) {
    let { emoji: t, label: n } = e;
    return (0, a.jsx)("div", {
        className: sf.H,
        children: (0, a.jsx)(sd.A, { emojiName: t, alt: n, size: "reaction" }),
    });
}
var sh = n(624479),
    sg = n(890377),
    sp = n(744898),
    sx = n(180227);
function sv(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: o()(sx.QE, { [sx.Rn]: t }),
              children: (0, a.jsx)(aP.Ay, {
                  children: n.map((e) =>
                      (0, a.jsx)(
                          aP.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function sj(e) {
    return nl.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: eo.intl.string(eo.t.JrGD7E), icon: sh.CopyIcon, onClick: () => (0, nl.C)(e) }]
        : [];
}
function sb(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: eo.intl.string(es.default.CXtLD2),
                          tooltip: eo.intl.string(es.default.DOb1HM),
                          icon: sg.V,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: eo.intl.string(es.default.urZwpN),
                          icon: P.P,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, a.jsx)(sv, { groupStart: n, actions: [...r, ...sj(t)] });
}
function sy(e) {
    let { content: t, groupStart: n, onRestoreVersion: l } = e,
        r =
            null == l
                ? []
                : [{ id: "restore-version", label: eo.intl.string(es.default.H8Jfhu), icon: sp.e, onClick: l }];
    return (0, a.jsx)(sv, { groupStart: n, actions: [...r, ...sj(t)] });
}
let sk = (0, r8.createChannelRecord)({ id: "conjure-builder", type: ex.rbe.DM }),
    sw = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function sA(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: o()(sx.Yq, { [sx.x1]: t }), children: e });
}
function sN(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function sS(e, t, n) {
    let { content: l } = (0, i8.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        r = i.useMemo(() => ({ message: e, channel: sk, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(i4.Ay, { className: n, message: e, content: l, compact: !1 })
          : (0, i9.A)(r, l);
}
function sC(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, i5.m)(e, sk, t.usernameProfile, l),
        o = (0, i5.Jo)(t.avatarProfile, l),
        u = (0, f.bG)([sr.A], () => sr.A.getGuildId()),
        c = (0, f.bG)([tX.default], () => tX.default.getCurrentUser()),
        d = i.useCallback(
            (t) => {
                let n = tX.default.getUser(e.author.id) ?? e.author;
                return null == c ? null : (0, a.jsx)(sn.A, { ...t, user: n, currentUser: c, guildId: u ?? void 0 });
            },
            [c, u, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: o,
        onClickUsername: s,
        onPopoutRequestClose: r,
        renderPopout: d,
        guildId: u ?? void 0,
    };
}
function sE(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        s = i.useMemo(() => {
            let e = "" !== n.content ? (0, i2.Ay)(n, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == l
                ? e
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: sx.GV,
                              children: [
                                  (0, a.jsx)(N.x, {
                                      className: sx.Rj,
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
            [sl.A],
            () => ({
                isReplyAuthorBlocked: sl.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: sl.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        c = (0, a_.X4)(n),
        d = (0, a_.X4)(t),
        m = sC(n);
    return (0, a.jsx)(i7.A, {
        repliedAuthor: c,
        baseAuthor: d,
        baseMessage: t,
        channel: sk,
        referencedMessage: { state: st.a.LOADED, message: n },
        content: s,
        compact: !1,
        isReplyAuthorBlocked: o,
        isReplyAuthorIgnored: u,
        isReplySpineClickable: null != r,
        showReplySpine: !0,
        renderPopout: m.renderPopout,
        showAvatarPopout: m.showAvatarPopout,
        showUsernamePopout: m.showUsernamePopout,
        onClickAvatar: m.onClickAvatar,
        onClickUsername: m.onClickUsername,
        onClickReply: r,
        onPopoutRequestClose: m.onPopoutRequestClose,
    });
}
function sI(e) {
    let { message: t, author: n } = e,
        l = sC(t);
    return (0, a.jsx)(i6.Ay, {
        message: t,
        channel: sk,
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
function sM(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, agentReaction: s, groupStart: o, onQueuedAction: u } = e;
    i.useEffect(() => t1(l), [l]);
    let c = (0, f.bG)(
            [tX.default],
            () => t0(l, null != l ? tX.default.getUser(l) : null, tX.default.getCurrentUser()),
            [l],
        ),
        d = i.useMemo(() => (0, a_.FT)(c, null), [c]),
        m = i.useMemo(() => eZ(t), [t]),
        h = m?.body ?? t,
        g = i.useMemo(() => {
            if (null == c) return null;
            let e = (0, r5.Ay)({ channelId: sk.id, content: h, author: c });
            return (0, r7.rh)({ ...e, timestamp: sN(n, e.timestamp), state: ex.cmJ.SENT });
        }, [h, c, n]),
        p = (function (e) {
            if (null == e || "" === e) return null;
            let t = sa.Ay.convertSurrogateToName(e, !1);
            return "" === t ? null : eo.intl.formatToPlainString(es.default.lxXLho, { emojiName: t });
        })(s);
    return null == g
        ? null
        : (0, a.jsx)(s_, {
              message: g,
              author: d,
              content: h,
              selected: m?.label,
              accessories:
                  null != s && null != p
                      ? (0, a.jsxs)(a.Fragment, { children: [r, (0, a.jsx)(sm, { emoji: s, label: p })] })
                      : r,
              groupStart: o,
              onQueuedAction: u,
          });
}
function s_(e) {
    let { message: t, author: n, content: l, selected: r, accessories: i, groupStart: s = !0, onQueuedAction: o } = e,
        u = sS(t, l);
    return (0, a.jsx)(i3.A, {
        className: sx.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(sI, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? u
                : (0, a.jsxs)("div", {
                      className: sx.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: sx.GV,
                              children: [
                                  (0, a.jsx)(N.x, {
                                      className: sx.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, a.jsx)("span", { className: sx.WO, children: u }),
                      ],
                  }),
        childrenAccessories: sA(i, "" !== l),
        childrenButtons: (0, a.jsx)(sb, { content: l, groupStart: s, onQueuedAction: o }),
    });
}
function sT(e) {
    let {
            content: t,
            createdAt: n,
            accessories: l,
            replyTo: r,
            onJumpToReplied: s,
            groupStart: o = !0,
            streaming: u = !1,
            buttons: c,
        } = e,
        { text: d, revealing: m } = sc(t, { streaming: (0, f.bG)([iU.A], () => u && iU.A.isFocused(), [u]) }),
        h = i.useMemo(() => (0, a_.FT)(null, null), []),
        g = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        p = r?.userId,
        x = (0, f.bG)(
            [tX.default],
            () => t0(p, null != p ? tX.default.getUser(p) : null, tX.default.getCurrentUser()),
            [p],
        ),
        v = i.useMemo(() => (null == r ? null : eZ(r.content)), [r]),
        j = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, r5.Ay)({ channelId: sk.id, content: v?.body ?? r.content, author: x });
            return (0, r7.rh)({ ...e, id: r.id, timestamp: sN(r.createdAt, e.timestamp), state: ex.cmJ.SENT });
        }, [r, v, x]),
        b = i.useMemo(() => (null == r ? void 0 : { channel_id: sk.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, r5.Ay)({ channelId: sk.id, content: "", author: sw })),
        k = i.useMemo(
            () =>
                (0, r7.rh)({
                    ...y,
                    timestamp: sN(n, y.timestamp),
                    state: ex.cmJ.SENT,
                    ...(null != b ? { type: ex.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        w = i.useMemo(() => k.set("content", d), [k, d]),
        A = i.useMemo(
            () => (0, se.A)({ message: k, channel: sk, author: g, guildId: void 0, isGroupStart: o }),
            [k, g, o],
        ),
        N = sS(w, d, sx.OS);
    return (0, a.jsxs)("div", {
        className: sx.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": m ? "true" : void 0,
        children: [
            (0, a.jsx)(i3.A, {
                className: sx.yE,
                author: g,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, a.jsx)(sE, { baseMessage: k, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: A,
                childrenMessageContent: N,
                childrenAccessories: sA(l, "" !== d),
                disableInteraction: !0,
            }),
            c,
            o
                ? (0, a.jsx)("span", {
                      className: sx.st,
                      "aria-hidden": "true",
                      children: (0, a.jsx)(rH.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
let sP = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    sR = new WeakMap();
var sL = n(288539);
function sD(e, t, n) {
    return (0, a.jsx)(sL.A, { userId: e, content: `@${t}` }, n);
}
function s$(e) {
    let { projectId: t, event: n } = e,
        l = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => t1(l), [l]);
            let r = (0, f.bG)([tX.default], () => (null == l ? null : tX.default.getUser(l)), [l]),
                a = (0, tJ.tx)(r),
                s = iW(e),
                o =
                    (0, f.bG)([X.A], () => (null == t.guild_id ? null : X.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ?? eo.intl.string(es.default.R1tPlP),
                u = null == r || null == a ? null : { user: a, userHook: (e, t) => n(r.id, a, t) };
            switch (t.type) {
                case "app_removed":
                    return null == u
                        ? eo.intl.format(es.default.Lwsrhg, { app: s, server: o })
                        : eo.intl.format(es.default.qqePfT, { app: s, server: o, ...u });
                case "bot_removed":
                    return null == u
                        ? eo.intl.format(es.default.mT7EQG, { app: s, server: o })
                        : eo.intl.format(es.default["lA/crI"], { app: s, server: o, ...u });
                case "preview_bot_removed":
                    return null == u
                        ? eo.intl.format(es.default["4LVIeo"], { app: s, server: o })
                        : eo.intl.format(es.default.YJOV6D, { app: s, server: o, ...u });
                case "app_channel_deleted": {
                    let e = t.channel_name ?? "";
                    return null == u
                        ? eo.intl.format(es.default["4VQfid"], { channel: e, server: o })
                        : eo.intl.format(es.default.RlMIJN, { channel: e, server: o, ...u });
                }
            }
        })(t, n, sD);
    return (0, a.jsx)(j.E, { variant: "text-md/normal", color: "text-default", children: l });
}
function sF(e) {
    let { onSelect: t, onClose: n = D.Z_, onRestoreVersion: l } = e;
    return (0, a.jsx)(Z.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": eo.intl.string(eo.t.ogxXGq),
        onSelect: t,
        children: (0, a.jsx)(ee.rX, {
            children: (0, a.jsx)(ee.Dr, {
                id: "restore-version",
                label: eo.intl.string(es.default.H8Jfhu),
                icon: sp.e,
                action: l,
            }),
        }),
    });
}
function sz(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function sO(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
var sU = n(986109);
let sG = i.createContext(null);
function sq(e, t) {
    (0, iG.F)({ onConfirm: () => t(e) });
}
let sB = i.memo(function (e) {
        let {
                projectId: t,
                messages: n,
                emptyState: l,
                onPickIdea: r,
                onAskForIdeas: s,
                draftHasText: u,
                onApprovePlan: c,
                floatingSettingsMessageId: d,
                onRestoreVersion: m,
                scrollerRef: h,
                stickToBottomRef: g,
                pinned: p,
                onUnpin: x,
                handleRef: v,
                onShowsLatestChange: b,
            } = e,
            y = i.useRef(null),
            [k, A] = i.useState(null),
            N = i.useCallback((e) => {
                ((y.current = e), A(e));
            }, []),
            [S, C] = i.useState(null),
            E = i.useRef(0);
        i.useEffect(() => () => window.clearTimeout(E.current), []);
        let I = i.useCallback((e) => {
                (C(e), window.clearTimeout(E.current), (E.current = window.setTimeout(() => C(null), 1600)));
            }, []),
            M = (0, f.bG)([eN.Ay], () => eN.Ay.getPublishStatus(t)?.state ?? null),
            _ = (0, f.bG)([tX.default], () => tX.default.getCurrentUser()?.id),
            T = i.useMemo(() => {
                let e;
                return (function (e) {
                    let t = [],
                        n = (function (e) {
                            let t = new Set(),
                                n = !1;
                            for (let l = e.length - 1; l >= 0; l--) {
                                let r = e[l];
                                null != r &&
                                    null !=
                                        (function (e) {
                                            if ("assistant" !== e.role) return null;
                                            let t = (0, nW.lt)(e.steps);
                                            return null != t
                                                ? t
                                                : null != e.todos && e.todos.length > 0
                                                  ? e.todos
                                                  : null;
                                        })(r) &&
                                    (n && t.add(r.render_id), (n = !0));
                            }
                            return t;
                        })(e);
                    for (let l of e) {
                        let e = n.has(l.render_id),
                            r = sR.get(l);
                        if (null != r && r.superseded === e) {
                            t.push(...r.planned);
                            continue;
                        }
                        let a = (function (e, t) {
                            let n = [];
                            function l(e, t) {
                                n.push({ row: e, groupable: { key: e.key, ...t } });
                            }
                            if ("user" === e.role)
                                return (
                                    l(
                                        { kind: "user", key: e.render_id, message: e, groupStart: !1 },
                                        { actor: "user", authorId: e.user_id, boundary: void 0 },
                                    ),
                                    n
                                );
                            if ("publish_notice" === e.kind) {
                                let t = `${e.render_id}:publish`;
                                return (
                                    l(
                                        { kind: "publishNotice", key: t, message: e, groupStart: !1 },
                                        { actor: "assistant", boundary: t },
                                    ),
                                    n
                                );
                            }
                            if ("project_event" === e.kind) {
                                let t = `${e.render_id}:projectEvent`;
                                return (
                                    l(
                                        { kind: "projectEvent", key: t, message: e, groupStart: !1 },
                                        { actor: "assistant", boundary: t },
                                    ),
                                    n
                                );
                            }
                            let r = !(0, ej.BL)(e),
                                a = rx({
                                    steps: e.steps,
                                    content: e.content,
                                    hasProposal: null != e.proposal,
                                    hasAttachments: (e.attachments?.length ?? 0) > 0,
                                }),
                                i = a.lastStreamedMessage?.key,
                                s = (0, nW.C6)(e.steps, { turnActive: r }),
                                { lastWork: o, open: u } = (0, nW.CT)(s, { turnActive: r }),
                                c = s.at(-1)?.index,
                                d = !1;
                            for (let n of s) {
                                if (null != n.prose && sP.test(n.prose.content)) d = !0;
                                else if (null != n.prose && n.prose.key !== a.replyKey) {
                                    let t = `${e.render_id}:${n.key}`;
                                    l(
                                        {
                                            kind: "prose",
                                            key: t,
                                            message: e,
                                            groupStart: !1,
                                            content: n.prose.content,
                                            hostsAttachments:
                                                "streamed" === a.attachmentsHost &&
                                                n.prose.key === i &&
                                                null != e.attachments,
                                            streaming: r && n.index === c && !n.hasWork,
                                        },
                                        { actor: "assistant", boundary: t },
                                    );
                                }
                                (n.hasWork || n.hasTodos) &&
                                    l(
                                        {
                                            kind: "activity",
                                            key: `${e.render_id}:work-${n.index}`,
                                            message: e,
                                            groupStart: !1,
                                            segment: n.index,
                                            active: n.index === u,
                                            closed: n.index !== u,
                                            ...(null != n.durationMs ? { segmentDurationMs: n.durationMs } : {}),
                                            reportsDuration: n.index === o,
                                            hostsChecklist: n.hasTodos,
                                            turnActive: nX(e),
                                            checklistSuperseded: n.hasTodos && t,
                                        },
                                        { actor: null, boundary: void 0 },
                                    );
                            }
                            let f = sP.test(e.content ?? "");
                            if (
                                (!0 === e.interrupted || d || f
                                    ? l(
                                          {
                                              kind: "interrupted",
                                              key: `${e.render_id}:interrupted`,
                                              message: e,
                                              groupStart: !1,
                                          },
                                          { actor: null, boundary: void 0 },
                                      )
                                    : s.every((e) => !e.hasTodos) &&
                                      (e.todos?.length ?? 0) > 0 &&
                                      l(
                                          {
                                              kind: "legacyTodos",
                                              key: `${e.render_id}:todos`,
                                              message: e,
                                              groupStart: !1,
                                              checklistSuperseded: t,
                                          },
                                          { actor: null, boundary: void 0 },
                                      ),
                                (a.showsClosingMessage && !f) ||
                                    null != e.proposal ||
                                    null != e.clarification ||
                                    null != e.restoreProposal ||
                                    (!r &&
                                        (null != e.ideas ||
                                            null != e.publishCta ||
                                            null != e.secretRequest ||
                                            null != e.settingsRequest)) ||
                                    "standalone" === a.attachmentsHost)
                            ) {
                                let t = `${e.render_id}:closing`;
                                l(
                                    {
                                        kind: "closing",
                                        key: t,
                                        message: e,
                                        groupStart: !1,
                                        active: r,
                                        attachmentsHost: a.attachmentsHost,
                                        content: a.closingContent,
                                        sideReply: "side_reply" === e.kind,
                                    },
                                    {
                                        actor: "assistant",
                                        boundary: t,
                                        separate:
                                            null != e.proposal || null != e.clarification || "side_reply" === e.kind,
                                    },
                                );
                            }
                            return n;
                        })(l, e);
                        (sR.set(l, { superseded: e, planned: a }), t.push(...a));
                    }
                    let l = (function (e) {
                        let t,
                            n,
                            l = [],
                            r = null,
                            a = !1,
                            i = !1;
                        for (let s of e) {
                            if (null == s.actor) {
                                (l.push(!1), (r = null), (t = void 0), (a = !1), (i = !1), (n = void 0));
                                continue;
                            }
                            let e =
                                !a || r !== s.actor || t !== s.authorId || s.boundary !== n || !0 === s.separate || i;
                            (e &&
                                ((r = s.actor), (t = s.authorId), (a = !0), (i = !0 === s.separate), (n = s.boundary)),
                                l.push(e));
                        }
                        return l;
                    })(t.map((e) => e.groupable));
                    return t.map((e, t) => ({ ...e.row, groupStart: l[t] ?? !0 }));
                })(
                    ((e = (function (e, t) {
                        if ("unpublished" !== t) return null;
                        for (let t = e.length - 1; t >= 0; t--) if (null != e[t].publishCta) return e[t].id;
                        return null;
                    })(n, M)),
                    n.every((t) => null == t.publishCta || t.id === e)
                        ? n
                        : n.map((t) => {
                              if (null == t.publishCta || t.id === e) return t;
                              let n = a2.get(t);
                              return (null == n && ((n = { ...t, publishCta: null }), a2.set(t, n)), n);
                          })),
                );
            }, [n, M]),
            P = i.useMemo(() => T.map((e) => e.key), [T]),
            [R, L] = i.useState(null),
            D = (function (e, t, n) {
                if (null == t) return sz(e, e.length - 60, e.length);
                let l = null == t.endKey,
                    r = l ? e.length : sO(e, t.endKey, t.end - 1) + 1,
                    a = sO(e, t.startKey, t.start);
                return (l && n && r - a > 120 && (a = r - 60), sz(e, a, r));
            })(P, R, p),
            $ = i.useRef(D),
            F = i.useRef(P),
            z = i.useRef(T),
            O = i.useRef(null),
            U = i.useRef(null),
            G = i.useRef(new Set()),
            q = i.useCallback(() => {
                let e = h.current?.getScrollerNode(),
                    t = y.current;
                if (null == e || null == t) return;
                let n = e.getBoundingClientRect().top,
                    l = t.querySelectorAll("[data-conjure-row-key]"),
                    r = 0,
                    a = l.length - 1,
                    i = null;
                for (; r <= a;) {
                    let e = (r + a) >> 1;
                    l[e].getBoundingClientRect().bottom > n ? ((i = l[e]), (a = e - 1)) : (r = e + 1);
                }
                let s = i?.dataset.conjureRowKey;
                O.current = null != i && null != s ? { key: s, offset: i.getBoundingClientRect().top - n } : null;
            }, [h]),
            B = i.useCallback(() => {
                let e = h.current?.getScrollerNode();
                if (null == e) return;
                let n = (function (e, t, n) {
                    let { nearTop: l, nearBottom: r, pinned: a } = n;
                    if (r && null != t.endKey) {
                        let n;
                        return ((n = Math.min(e.length, t.end + 30)), sz(e, Math.max(t.start, n - 120), n));
                    }
                    if (!l) return null;
                    if (0 === t.start) return "older";
                    if (!a && !r) {
                        let n, l;
                        return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), sz(e, n, l));
                    }
                    let i = Math.max(t.start - 30, t.end - 120);
                    return i < t.start ? sz(e, i, t.end) : null;
                })(F.current, $.current, {
                    nearTop: e.scrollTop < 600,
                    nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                    pinned: g.current,
                });
                "older" === n ? (0, en.P6)(t) : null != n && L(n);
            }, [h, g, t]);
        i.useImperativeHandle(
            v,
            () => ({
                handleScroll() {
                    (q(),
                        L((e) => {
                            let t = $.current;
                            return null != e && e.startKey === t.startKey && e.endKey === t.endKey ? e : t;
                        }),
                        B());
                },
                recordAnchor: q,
                showLatest(e) {
                    ((U.current = e ?? null), L(null));
                },
            }),
            [q, B],
        );
        let H = i.useRef(null),
            K = i.useCallback(
                (e) => {
                    var n;
                    let l;
                    H.current = null;
                    let r = y.current?.querySelector(`[data-conjure-message="${e}"]`);
                    if (null != r) {
                        (x(), L($.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), I(e));
                        return;
                    }
                    let a = z.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                    if (-1 === a) {
                        (0, en.P6)(t) && (H.current = e);
                        return;
                    }
                    (x(),
                        (U.current = () => {
                            (y.current
                                ?.querySelector(`[data-conjure-message="${e}"]`)
                                ?.scrollIntoView({ block: "center" }),
                                I(e));
                        }),
                        L(((n = F.current), sz(n, (l = Math.max(0, a - 30)), l + 60))));
                },
                [I, x, t],
            );
        (i.useEffect(() => {
            let e = H.current;
            null != e && K(e);
        }, [T, K]),
            i.useLayoutEffect(() => {
                if (null == k) return;
                let e = k.getBoundingClientRect().height,
                    t = new ResizeObserver((t) => {
                        let [n] = t,
                            l = n?.contentRect.height;
                        null != l && l !== e && ((e = l), g.current ? h.current?.scrollToBottom() : q());
                    });
                return (t.observe(k), () => t.disconnect());
            }, [k, q, h, g]));
        let V = null == D.endKey;
        (i.useEffect(() => b?.(V), [V, b]),
            i.useLayoutEffect(() => {
                (($.current = D), (F.current = P), (z.current = T));
            }),
            i.useLayoutEffect(() => {
                let e = h.current?.getScrollerNode(),
                    t = y.current;
                if (null != e && null != t) {
                    let n = O.current;
                    if (g.current) h.current?.scrollToBottom();
                    else if (null != n) {
                        let l = Array.from(t.querySelectorAll("[data-conjure-row-key]")).find(
                                (e) => e.dataset.conjureRowKey === n.key,
                            ),
                            r =
                                null == l
                                    ? 0
                                    : l.getBoundingClientRect().top - e.getBoundingClientRect().top - n.offset;
                        0 !== r && (e.scrollTop += r);
                    }
                    let l = U.current;
                    ((U.current = null), l?.(), q(), B());
                }
                G.current = new Set(P);
            }, [T, P, D.start, D.end, h, g, q, B]));
        let W = n.at(-1),
            X = (function (e, t, n) {
                var l;
                let r = (0, ns.Ay)(e),
                    a = (0, iq.A)(),
                    s = (function (e) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let n = e[t];
                            if ("publish_notice" !== n.kind && "project_event" !== n.kind) {
                                if ("user" === n.role) return null;
                                if ((0, ej.BL)(n)) return n;
                                if (!(0, ej.B0)(e, t)) break;
                            }
                        }
                        return null;
                    })(t),
                    o = t.at(-1),
                    u = {
                        projectId: e,
                        draftHasText: n,
                        publishing: r?.publishing === !0,
                        drift: r?.isUpdate === !0,
                        messageAt: null != o ? Math.max(o.created_at, o.finished_at ?? 0, o.settled_at ?? 0) : null,
                        visible: a,
                    },
                    [c, d] = i.useState(() => iK(u, Date.now())),
                    f = (function (e, t, n) {
                        if (e.projectId !== t.projectId) return iK(t, n());
                        if (
                            e.draftHasText === t.draftHasText &&
                            e.publishing === t.publishing &&
                            e.drift === t.drift &&
                            e.messageAt === t.messageAt &&
                            e.visible === t.visible
                        )
                            return e;
                        let l = n(),
                            r = { ...e, now: l };
                        if (
                            (e.draftHasText !== t.draftHasText &&
                                (r = {
                                    ...r,
                                    draftHasText: t.draftHasText,
                                    draftTyped: t.draftHasText,
                                    lastActivityAt: l,
                                    outdatedUpdating: t.publishing && r.outdatedUpdating,
                                }),
                            e.publishing !== t.publishing)
                        ) {
                            let e = r.outdatedUpdating && (t.publishing || t.drift);
                            r = {
                                ...r,
                                publishing: t.publishing,
                                lastActivityAt: e ? r.lastActivityAt : l,
                                outdatedShown: !1,
                                outdatedBackoff: 0,
                                outdatedUpdating: t.publishing && r.outdatedUpdating,
                            };
                        }
                        if (
                            (e.drift !== t.drift &&
                                ((r = { ...r, drift: t.drift }),
                                t.drift || (r = { ...r, outdatedShown: !1, outdatedBackoff: 0 })),
                            e.messageAt !== t.messageAt)
                        ) {
                            let n = null == t.messageAt ? null : Math.min(t.messageAt, l);
                            ((r = (function (e) {
                                if (!e.outdatedShown || e.publishing) return e;
                                let t = Math.min(e.outdatedBackoff + 1, iB.length - 1);
                                return { ...e, outdatedShown: !1, outdatedBackoff: t };
                            })({ ...r, messageAt: t.messageAt, lastMessageAt: n })).publishing ||
                                (r = { ...r, outdatedUpdating: !1 }),
                                t.visible || null == e.messageAt || (r = { ...r, unseen: !0 }));
                        }
                        return (
                            e.visible !== t.visible &&
                                ((r = { ...r, visible: t.visible }),
                                t.visible
                                    ? (l - (e.hiddenAt ?? l) >= 6e5
                                          ? (r = { ...r, visitStartedAt: l })
                                          : r.unseen && (r = { ...r, seenAt: l }),
                                      (r = { ...r, hiddenAt: null, unseen: !1 }))
                                    : (r = { ...r, hiddenAt: l, unseen: !1 })),
                            r
                        );
                    })(c, u, Date.now),
                    m =
                        null == s ||
                        null != (l = s).awaitingUser ||
                        null != l.secretRequest ||
                        null != l.settingsRequest ||
                        (l.intake?.questions.length ?? 0) > 0
                            ? null
                            : {
                                  turn: s,
                                  publish: r,
                                  draftHasText: n,
                                  draftTyped: f.draftTyped && n,
                                  outdatedUpdating: f.outdatedUpdating,
                              },
                    { shown: h, nextDueAt: g } = (function (e, t) {
                        var n;
                        let l;
                        if (t.unseen) return { shown: null, nextDueAt: null };
                        let r = e.filter((e) => e.eligible).sort((e, t) => t.priority - e.priority)[0];
                        if (null == r) return { shown: null, nextDueAt: null };
                        let a =
                            ((l = Math.max(
                                0,
                                t.now -
                                    ((n = r.clock),
                                    Math.max(
                                        t.lastMessageAt ?? -1 / 0,
                                        t.lastActivityAt ?? -1 / 0,
                                        t.seenAt ?? -1 / 0,
                                        "visit" === n ? t.visitStartedAt : -1 / 0,
                                    )),
                            )),
                            t.now + Math.max(0, r.idleDelayMs - l));
                        return a <= t.now ? { shown: r.key, nextDueAt: null } : { shown: null, nextDueAt: a };
                    })(
                        iH.map((e) => ({
                            ...e,
                            idleDelayMs:
                                "outdated" === e.key && f.outdatedUpdating
                                    ? 0
                                    : (e.backoffDelaysMs?.[f.outdatedBackoff] ?? e.idleDelayMs),
                            eligible: null != m && e.eligible(m),
                        })),
                        f,
                    );
                return (
                    "outdated" !== h || f.outdatedShown ? f !== c && d(f) : d({ ...f, outdatedShown: !0 }),
                    i.useEffect(() => {
                        function t() {
                            d((e) => ({ ...e, outdatedUpdating: !0 }));
                        }
                        let n = iV.get(e) ?? new Set();
                        return (
                            iV.set(e, n),
                            n.add(t),
                            () => {
                                (n.delete(t), 0 === n.size && iV.delete(e));
                            }
                        );
                    }, [e]),
                    i.useEffect(() => {
                        if (null == g) return;
                        let e = setTimeout(() => d((e) => ({ ...e, now: Date.now() })), Math.max(0, g - Date.now()));
                        return () => clearTimeout(e);
                    }, [g, f.now]),
                    h
                );
            })(t, n, !0 === u),
            J = i.useCallback(
                (e) => {
                    switch (e) {
                        case "outdated":
                            return (0, a.jsx)(sT, {
                                groupStart: !1,
                                content: "",
                                accessories: (0, a.jsx)(iX, { projectId: t, notice: "outdated" }),
                            });
                        case "ideas":
                            return (0, a.jsx)("div", {
                                className: sU.u$,
                                children: (0, a.jsx)(sT, {
                                    content: eo.intl.string(es.default.s96AWB),
                                    accessories: (0, a.jsx)(a9, { onAsk: s }),
                                }),
                            });
                    }
                },
                [t, s],
            ),
            Y = i.useMemo(
                () =>
                    (function (e) {
                        if (e.at(-1)?.role !== "assistant") return null;
                        for (let t = e.length - 1; t >= 0; t--) {
                            let n = e[t];
                            if ("assistant" === n.role) {
                                if (!(0, ej.BL)(n) || "plan_implemented" === n.kind) return null;
                                if (null != n.proposal) return n.render_id;
                            }
                        }
                        return null;
                    })(n),
                [n],
            ),
            Q = i.useMemo(
                () =>
                    (function (e) {
                        let t = new Map(),
                            n = null,
                            l = 0;
                        for (let r of e)
                            if ("assistant" === r.role) {
                                if ("plan_implemented" === r.kind) {
                                    ((n = null), (l = 0));
                                    continue;
                                }
                                null != r.proposal &&
                                    (null != n && t.set(n, { version: l, superseded: !0 }),
                                    (l += 1),
                                    t.set(r.render_id, { version: l, superseded: !1 }),
                                    (n = r.render_id));
                            }
                        return t;
                    })(n),
                [n],
            ),
            Z = i.useMemo(
                () =>
                    (function (e) {
                        let t = new Map(),
                            n = new Set();
                        for (let l = e.length - 1; l >= 0; l--) {
                            let r = e[l];
                            if ("user" === r.role) {
                                n.add(r.content.trim());
                                continue;
                            }
                            if (null == r.ideas) continue;
                            let a = new Set();
                            for (let e of r.ideas) n.has(e.implementation_prompt.trim()) && a.add(e.id);
                            t.set(r.render_id, a);
                        }
                        return t;
                    })(n),
                [n],
            ),
            ee = i.useMemo(
                () =>
                    (function (e) {
                        let t = new Map();
                        for (let n of e)
                            "user" !== n.role ||
                                t.has(n.id) ||
                                t.set(n.id, {
                                    id: n.id,
                                    content: n.content,
                                    ...(null != n.user_id ? { userId: n.user_id } : {}),
                                    createdAt: n.created_at,
                                });
                        return t;
                    })(n),
                [n],
            ),
            et =
                (W?.role !== "assistant" || null == W.awaitingUser || null == W.secretRequest
                    ? null
                    : (0, ej.BL)(W)
                      ? W.awaitingUser
                      : null) ?? void 0,
            el = (0, f.bG)([en.Ay], () => en.Ay.getSettings(t)?.secrets, [t]),
            er = i.useMemo(
                () =>
                    (function (e, t) {
                        let n = null != t ? new Set(t.filter((e) => e.set).map((e) => e.name)) : null,
                            l = new Map(),
                            r = new Set(),
                            a = !1,
                            i = !1;
                        for (let t = e.length - 1; t >= 0; t--) {
                            let s = e[t];
                            if (null == s) continue;
                            if ("user" === s.role) {
                                i =
                                    i ||
                                    (function (e) {
                                        let t = e.content.trim();
                                        return (
                                            t === eo.intl.string(es.default.UGqnoV) ||
                                            t === eo.intl.string(es.default.sMQt5O)
                                        );
                                    })(s);
                                continue;
                            }
                            let o = s.secretRequest?.fields ?? [];
                            if (0 === o.length || !(0, ej.BL)(s)) continue;
                            let u = i;
                            for (let e of (u && null == n
                                ? l.set(s.render_id, "pending")
                                : u && null != n && o.every((e) => n.has(e.name))
                                  ? l.set(s.render_id, "received")
                                  : a
                                    ? l.set(s.render_id, o.some((e) => r.has(e.name)) ? "superseded" : "inactive")
                                    : l.set(s.render_id, "open"),
                            o))
                                r.add(e.name);
                            ((a = !0), (i = !1));
                        }
                        return l;
                    })(n, el),
                [n, el],
            );
        if (0 === n.length) {
            if ("loading" === l)
                return (0, a.jsx)("ol", {
                    className: o()(sU.x7, sU.jH),
                    "aria-busy": !0,
                    children: (0, a.jsx)("li", { className: sU.Ub, children: (0, a.jsx)(w.y, {}) }),
                });
            let e = "unavailable" === l ? es.default.Td4Sf4 : es.default.V1QiNz;
            return (0, a.jsx)("ol", {
                className: sU.x7,
                children: (0, a.jsx)(sW, {
                    role: "assistant",
                    children: (0, a.jsx)(sT, { content: eo.intl.string(e) }),
                }),
            });
        }
        return (0, a.jsx)(sG.Provider, {
            value: G,
            children: (0, a.jsxs)("ol", {
                ref: N,
                className: sU.x7,
                children: [
                    T.slice(D.start, D.end).map((e) => {
                        let n = e.message;
                        if ("closing" !== e.kind)
                            return (0, a.jsx)(
                                sH,
                                {
                                    row: e,
                                    projectId: t,
                                    highlighted: "user" === e.kind && S === n.id,
                                    currentUserId: "user" === e.kind ? _ : void 0,
                                },
                                e.key,
                            );
                        let l = n === W;
                        return (0, a.jsx)(
                            sH,
                            {
                                row: e,
                                projectId: t,
                                highlighted: !1,
                                replyTo: null != n.in_reply_to ? ee.get(n.in_reply_to) : void 0,
                                onJumpTo: K,
                                planVersion: Q.get(n.render_id),
                                pickedIdeaIds: Z.get(n.render_id),
                                secretRequestAwaiting: l ? et : void 0,
                                secretRequestStatus: er.get(n.render_id),
                                settingsFloating: n.id === d,
                                isNewest: l,
                                onPickIdea: r,
                                onApprovePlan: n.render_id === Y ? c : void 0,
                                onRestoreVersion: m,
                            },
                            e.key,
                        );
                    }),
                    null != et && V
                        ? (0, a.jsx)(sW, {
                              role: "assistant",
                              continuation: !0,
                              children: (0, a.jsx)(sT, {
                                  groupStart: !1,
                                  content: "",
                                  accessories: (0, a.jsx)(j.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: eo.intl.string(es.default.YR8A2v),
                                  }),
                              }),
                          })
                        : null,
                    V
                        ? (0, a.jsx)("li", {
                              role: "none",
                              className: sU.q3,
                              children: (0, a.jsx)(i1, { reminder: X, renderReminder: J }),
                          })
                        : null,
                ],
            }),
        });
    }),
    sH = i.memo(
        function (e) {
            let { row: t, projectId: n, highlighted: l, currentUserId: r, ...i } = e,
                s = t.message;
            switch (t.kind) {
                case "user": {
                    let e = null != s.attachments && s.attachments.length > 0 ? s.attachments : null;
                    return (0, a.jsx)(sW, {
                        rowKey: t.key,
                        role: "user",
                        anchorId: s.id,
                        highlighted: l,
                        continuation: !t.groupStart,
                        children: (0, a.jsx)(sM, {
                            groupStart: t.groupStart,
                            content: s.content,
                            createdAt: s.created_at,
                            userId: s.user_id,
                            agentReaction: s.agentReaction,
                            accessories: null != e ? (0, a.jsx)(ii.A, { projectId: n, attachments: e }) : void 0,
                            onQueuedAction: (function (e, t, n) {
                                if (
                                    "user" === t.role &&
                                    "queued" === t.disposition &&
                                    null != t.user_id &&
                                    t.user_id === n
                                )
                                    return (n) => (0, en.tp)(e, t.id, n);
                            })(n, s, r),
                        }),
                    });
                }
                case "prose":
                    return (0, a.jsx)(sW, {
                        rowKey: t.key,
                        role: "assistant",
                        continuation: !t.groupStart,
                        children: (0, a.jsx)(sT, {
                            groupStart: t.groupStart,
                            content: t.content,
                            streaming: t.streaming,
                            createdAt: s.created_at,
                            accessories:
                                t.hostsAttachments && null != s.attachments
                                    ? (0, a.jsx)(ii.A, { projectId: n, attachments: s.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, a.jsx)(sW, {
                        rowKey: t.key,
                        role: "assistant",
                        children: (0, a.jsx)(id, {
                            projectId: n,
                            steps: s.steps,
                            segment: t.segment,
                            active: t.active,
                            closed: t.closed,
                            segmentDurationMs: t.segmentDurationMs,
                            reportsDuration: t.reportsDuration,
                            hostsChecklist: t.hostsChecklist,
                            turnActive: t.turnActive,
                            checklistSuperseded: t.checklistSuperseded,
                            durationMs: null != s.finished_at ? s.finished_at - s.created_at : void 0,
                            todos: s.todos,
                            provisionalTodo: s.provisionalTodo,
                        }),
                    });
                case "publishNotice":
                    return (0, a.jsx)(sW, {
                        rowKey: t.key,
                        role: "assistant",
                        continuation: !t.groupStart,
                        children: (0, a.jsx)(sT, {
                            groupStart: t.groupStart,
                            content: null == s.publishNotice ? s.content : "",
                            createdAt: s.created_at,
                            accessories:
                                null == s.publishNotice
                                    ? void 0
                                    : (0, a.jsx)(iX, { projectId: n, notice: s.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, a.jsx)(sW, {
                        rowKey: t.key,
                        role: "assistant",
                        continuation: !t.groupStart,
                        children: (0, a.jsx)(sT, {
                            groupStart: t.groupStart,
                            content: null == s.projectEvent ? s.content : "",
                            createdAt: s.created_at,
                            accessories:
                                null == s.projectEvent
                                    ? void 0
                                    : (0, a.jsx)(s$, { projectId: n, event: s.projectEvent }),
                        }),
                    });
                case "interrupted":
                    return (0, a.jsx)(sW, {
                        rowKey: t.key,
                        role: "assistant",
                        children: (0, a.jsx)(id, { projectId: n, interrupted: !0, steps: s.steps }),
                    });
                case "legacyTodos":
                    return (0, a.jsx)(sW, {
                        rowKey: t.key,
                        role: "assistant",
                        children: (0, a.jsx)(id, {
                            projectId: n,
                            steps: sK,
                            active: !1,
                            checklistSuperseded: t.checklistSuperseded,
                            todos: s.todos,
                            provisionalTodo: s.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, a.jsx)(sV, { row: t, projectId: n, ...i });
            }
        },
        function (e, t) {
            return (
                (0, iO.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, iO.A)(e.row, t.row, ["message"]) &&
                e.row.kind === t.row.kind &&
                (function (e, t, n) {
                    if (t === n) return !0;
                    switch (e) {
                        case "user":
                            return (
                                t.id === n.id &&
                                t.content === n.content &&
                                t.created_at === n.created_at &&
                                t.user_id === n.user_id &&
                                t.agentReaction === n.agentReaction &&
                                t.attachments === n.attachments &&
                                t.disposition === n.disposition
                            );
                        case "prose":
                            return t.created_at === n.created_at && t.attachments === n.attachments;
                        case "publishNotice":
                            return (
                                t.content === n.content &&
                                t.created_at === n.created_at &&
                                t.publishNotice === n.publishNotice
                            );
                        case "projectEvent":
                            return (
                                t.content === n.content &&
                                t.created_at === n.created_at &&
                                t.projectEvent === n.projectEvent
                            );
                        default:
                            return !1;
                    }
                })(e.row.kind, e.row.message, t.row.message) &&
                (0, iO.A)(e.replyTo, t.replyTo) &&
                (0, iO.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    sK = [];
function sV(e) {
    let {
            row: t,
            projectId: n,
            replyTo: l,
            onJumpTo: r,
            planVersion: i,
            pickedIdeaIds: s,
            secretRequestAwaiting: o,
            secretRequestStatus: u,
            settingsFloating: c = !1,
            isNewest: d = !1,
            onPickIdea: f,
            onApprovePlan: m,
            onRestoreVersion: h,
        } = e,
        g = t.message,
        p =
            null != h
                ? "assistant" !== g.role || null == g.sourceSha
                    ? null
                    : {
                          sha: g.sourceSha,
                          authorName: "",
                          authorEmail: "",
                          authoredAt: new Date(g.created_at).toISOString(),
                          subject: g.content,
                      }
                : null,
        x = null != p && null != h ? () => sq(p, h) : void 0,
        v = g.in_reply_to,
        j = g.restoreProposal;
    return (0, a.jsx)(sW, {
        rowKey: t.key,
        role: "assistant",
        continuation: !t.groupStart,
        onContextMenu:
            null != x
                ? (e) => {
                      (0, D.jA)(e, (e) => (0, a.jsx)(sF, { ...e, onRestoreVersion: x }));
                  }
                : void 0,
        children: (0, a.jsx)(sT, {
            groupStart: t.groupStart,
            buttons: (0, a.jsx)(sy, { groupStart: t.groupStart, content: t.content, onRestoreVersion: x }),
            content: t.content,
            createdAt: g.created_at,
            replyTo: l,
            onJumpToReplied: null != v && null != r ? () => r(v) : void 0,
            accessories: (0, a.jsx)(im, {
                projectId: n,
                steps: g.steps,
                content: "",
                proposal: g.proposal,
                planVersion: i,
                interrupted: !0 === g.interrupted,
                hoistedProse: !0,
                hoistedAttachmentsHost: t.attachmentsHost,
                sideReply: t.sideReply,
                sideReplyAcknowledges: g.acknowledges,
                active: t.active,
                ideas: t.active ? void 0 : g.ideas,
                pickedIdeaIds: null == g.ideas ? void 0 : s,
                attachments: g.attachments,
                secretRequest: t.active ? void 0 : g.secretRequest,
                secretRequestId: g.render_id,
                secretRequestAwaiting: o,
                secretRequestStatus: u,
                settingsRequest: t.active || c ? void 0 : g.settingsRequest,
                publishCta: t.active ? null : g.publishCta,
                onPickIdea: f,
                onApprovePlan: m,
                restoreProposal: j,
                onRestoreProposal:
                    null != j && null != h && d
                        ? () =>
                              sq(
                                  {
                                      sha: j.sha,
                                      authorName: "",
                                      authorEmail: "",
                                      authoredAt: j.authored_at,
                                      subject: j.subject,
                                  },
                                  h,
                              )
                        : void 0,
            }),
        }),
    });
}
function sW(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: u = !1,
            onContextMenu: c,
        } = e,
        d = i.useContext(sG),
        [f] = i.useState(() => !iU.A.isFocused() || (null != l && d?.current.has(l) === !0));
    return (0, a.jsx)("li", {
        onContextMenu: c,
        "data-role": t,
        "data-conjure-message": r,
        "data-conjure-row-key": l,
        className: o()(sU.xk, { [sU.g5]: f, [sU.Qo]: s, [sU.q3]: u }),
        children: n,
    });
}
let sX = [es.default["AX+5lk"], es.default.VAU6A7, es.default["1emysd"], es.default.EXHX3L, es.default.ChslmX];
function sJ(e) {
    return sX.some((t) => eo.intl.string(t) === e);
}
function sY(e) {
    switch (e) {
        case "connecting":
            return eo.intl.string(es.default["ECl+Dx"]);
        case "closed":
            return eo.intl.string(es.default.mQZSp1);
        case "failed":
            return eo.intl.string(es.default.xzJSZ6);
    }
}
var sQ = n(823376),
    sZ = n(187447);
function s0(e) {
    let { activity: t, id: n } = e,
        l = (0, iq.A)(),
        { text: r, revealing: s } = sc(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        u = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            u.current?.scrollToBottom();
        }, [r]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: sZ.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(nK.Ch, {
                ref: u,
                className: sZ.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: o()(iu.PT, sZ.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: rh.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var s1 = n(53659);
function s2(e) {
    let {
            activity: t,
            compacting: n = !1,
            saving: l = !1,
            restoring: r = !1,
            recalling: s = !1,
            controlling: u = !1,
            spoken: c,
            onSpokenChange: d,
        } = e,
        f = i.useRef(null),
        m = i.useId(),
        [h, g] = i.useState(null),
        p = (function (e) {
            let {
                    activity: t,
                    compacting: n = !1,
                    saving: l = !1,
                    restoring: r = !1,
                    recalling: a = !1,
                    controlling: i = !1,
                } = e,
                s = null != t && "end" !== t.phase;
            return i
                ? es.default["1jqaAc"]
                : r
                  ? es.default.M4KI5F
                  : a
                    ? sX[0]
                    : l
                      ? es.default.mKK6wB
                      : n
                        ? es.default.xnCAaP
                        : s
                          ? es.default.izrt52
                          : es.default.L9EDub;
        })({ activity: t, compacting: n, saving: l, restoring: r, recalling: s, controlling: u }),
        x = eo.intl.string(p),
        v = p === sX["0"],
        [y, k] = i.useState(c ?? x),
        w = (0, iq.A)();
    (!l && (w || v)) || y === x || k(x);
    let A = i.useRef(x);
    (i.useEffect(() => {
        A.current = x;
    }, [x]),
        i.useEffect(() => {
            d?.(y);
        }, [y, d]));
    let N = i.useRef(null),
        S = i.useRef(y);
    i.useEffect(() => {
        S.current = y;
    }, [y]);
    let C = i.useRef(v),
        E = i.useRef(0);
    (i.useEffect(() => {
        ((C.current = v), !v && sJ(S.current) && k(A.current));
    }, [v]),
        i.useEffect(() => {
            if (!w) return;
            let e = 0,
                t = 0;
            function n() {
                if (C.current) {
                    var e;
                    ((E.current = sJ(S.current) ? E.current + 1 : 0),
                        k(((e = E.current), eo.intl.string(sX[e % sX.length]))));
                } else A.current !== S.current ? k(A.current) : N.current?.play();
            }
            return (
                (e = window.setTimeout(() => {
                    (n(), (t = window.setInterval(n, 2400)));
                }, 1800)),
                () => {
                    (window.clearTimeout(e), window.clearInterval(t));
                }
            );
        }, [w]));
    let I = null != t && "" !== t.text,
        M = t?.session ?? null,
        _ = I && null != M && h === M,
        T = i.useCallback(() => {
            I && null != M && g((e) => (e === M ? null : M));
        }, [I, M]),
        P = i.useCallback(() => g(null), []);
    return (0, a.jsx)(Q.Y, {
        targetElementRef: f,
        position: "top",
        align: "left",
        shouldShow: _,
        onRequestClose: P,
        renderPopout: () => (0, a.jsx)(s0, { id: m, activity: t }),
        children: () =>
            (0, a.jsxs)(b.D, {
                innerRef: f,
                className: o()(s1.hF, I && s1.Xd),
                "aria-label": eo.intl.string(r ? es.default.qqlUiW : v ? sX["0"] : es.default["Uuj/gh"]),
                "aria-expanded": _,
                "aria-describedby": _ ? m : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": eo.intl.string(p),
                onClick: T,
                children: [
                    (0, a.jsx)("span", {
                        className: s1.bl,
                        children: (0, a.jsx)(sQ.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: s1.xu,
                        "aria-hidden": !!u || !!v || void 0,
                        children: w
                            ? (0, a.jsx)(eT.o, {
                                  ref: N,
                                  text: y,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  duration: 1e3,
                                  delay: null,
                                  className: s1.yE,
                              })
                            : (0, a.jsx)(j.E, {
                                  tag: "span",
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  className: s1.yE,
                                  children: y,
                              }),
                    }),
                ],
            }),
    });
}
let s3 = { second: 1e3, minute: 6e4 };
function s4(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let n;
            if (null == e) return;
            let r = s3[t];
            return (
                !(function t() {
                    let a = Date.now();
                    (l(a), (n = setTimeout(t, r - ((((a - e) % r) + r) % r))));
                })(),
                () => clearTimeout(n)
            );
        }, [e, t]),
        null == e ? void 0 : Math.max(0, n - e)
    );
}
var s6 = n(719374);
function s7(e) {
    let { startedAt: t } = e,
        n = s4(t);
    return (0, a.jsx)(j.E, {
        tag: "span",
        variant: "text-xs/medium",
        color: "text-muted",
        "aria-hidden": !0,
        className: s6.$,
        "data-conjure-turn-timer": !0,
        children: (0, rg.C7)(n),
    });
}
function s5(e) {
    let { startedAt: t } = e,
        n = s4(t, "minute");
    return (0, a.jsx)(k.A, { role: "timer", children: (0, rg.Us)(n) });
}
var s8 = n(436804);
function s9(e) {
    return e.toLocaleString();
}
function oe(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: s8.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: s8.mf,
                children: [
                    (0, a.jsx)(j.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(j.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [s9((0, Y.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(j.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    s9(n.input_tokens),
                    " in \xb7 ",
                    s9(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${s9(n.cache_creation_input_tokens)} cache write \xb7 ${s9(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function ot(e) {
    let { project: t } = e,
        n = (0, Y.wU)(t.compaction),
        l = (0, Y.wU)(t.classifier),
        r = (0, Y.wV)(t.orchestrator, t.codegen),
        i = (0, Y.wV)(r, n);
    return (0, a.jsxs)("div", {
        className: s8.si,
        role: "dialog",
        "aria-label": eo.intl.string(es.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: s8.Q$,
                children: (0, a.jsxs)("div", {
                    className: s8.mf,
                    children: [
                        (0, a.jsxs)(j.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [s9((0, Y.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(j.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(oe, { label: eo.intl.string(es.default["9Sj3SX"]), usage: r }),
            (0, a.jsx)(oe, { label: eo.intl.string(es.default.ANCEo3), usage: n }),
            (0, a.jsx)(oe, { label: eo.intl.string(es.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsxs)("div", {
                className: s8.mf,
                children: [
                    (0, a.jsx)(j.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: eo.intl.string(es.default["8OUg09"]),
                    }),
                    (0, a.jsx)(j.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, Y.sj)(i) ? "\u2014" : `${Math.round(100 * (0, Y.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function on(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(Q.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(ot, { project: t }),
        children: (e) =>
            (0, a.jsx)(b.D, {
                innerRef: n,
                className: s8.Y$,
                "aria-label": eo.intl.string(es.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(rW.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var ol = n(997421);
function or(e) {
    let t,
        {
            projectId: n,
            thinking: l,
            turnStartedAt: r,
            restoring: s = !1,
            recalling: o = !1,
            thinkingActivity: u,
            compacting: c,
            saving: d,
            projectUsage: f,
            connState: m,
        } = e,
        h = (0, tx.Zv)(n),
        [g, p] = i.useState(null),
        x = i.useCallback((e) => p(sJ(e) || e === eo.intl.string(es.default.mKK6wB) ? null : e), []),
        v =
            null == f
                ? null
                : ((t = (0, Y.a7)(f.cost_usd)),
                  {
                      text: eo.intl.formatToPlainString(es.default.gMuw5d, { runes: t.toLocaleString() }),
                      aria: eo.intl.formatToPlainString(es.default.Z4LvGa, { runes: t, turns: f.turns }),
                  }),
        b = l && null != r;
    return (0, a.jsxs)("div", {
        className: ol.jf,
        children: [
            (0, a.jsxs)("div", {
                className: ol.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    l || s || o || h || !0 === d
                        ? (0, a.jsx)(s2, {
                              activity: u,
                              compacting: c,
                              saving: d,
                              restoring: s,
                              recalling: o,
                              controlling: h,
                              spoken: g,
                              onSpokenChange: x,
                          })
                        : null,
                    b ? (0, a.jsx)(s7, { startedAt: r }) : null,
                ],
            }),
            b ? (0, a.jsx)(s5, { startedAt: r }) : null,
            null == f || null == v
                ? null
                : (0, a.jsxs)("span", {
                      className: ol.BP,
                      children: [
                          (0, a.jsx)(j.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": v.aria,
                              children: v.text,
                          }),
                          (0, a.jsx)(on, { project: f }),
                      ],
                  }),
            "open" === m
                ? null
                : (0, a.jsx)(j.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === m ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": eo.intl.formatToPlainString(es.default["tCo+ZM"], { status: sY(m) }),
                      "data-conjure-conn": !0,
                      "data-state": m,
                      className: ol.XF,
                      children: sY(m),
                  }),
        ],
    });
}
let oa = ["wheel", "touchstart", "pointerdown", "keydown"];
var oi = n(698638),
    os = n(608711);
let oo = [eo.intl.string(es.default["9w+Chc"]), eo.intl.string(es.default.WAvmdq), eo.intl.string(es.default.SKsrzl)];
function ou(e) {
    var t;
    let { projectId: n, restoreState: l, onRestoreVersion: r, onImportProject: s } = e,
        o = (0, f.bG)([ej.Ay], () => ej.Ay.getMessages(n), [n]),
        u = (0, f.bG)([en.Ay], () => en.Ay.getConnState(n), [n]),
        c = (0, f.bG)([en.Ay], () => en.Ay.isChatStopped(n), [n]),
        d = (0, f.bG)([ej.Ay], () => ej.Ay.getProjectUsage(n), [n]),
        m = (0, f.bG)([ej.Ay], () => ej.Ay.getThinkingActivity(n), [n]),
        h = (0, f.bG)([ej.Ay], () => ej.Ay.isCompacting(n), [n]),
        g = (0, f.bG)([ej.Ay], () => ej.Ay.isSaving(n), [n]),
        p = (0, f.bG)([en.Ay], () => en.Ay.getModelSettings(n), [n]),
        x = i.useRef(null),
        v = i.useRef(null),
        b = i.useRef(null),
        {
            stickToBottomRef: y,
            pinned: k,
            atBottom: w,
            unpin: N,
            releasePinHold: S,
            showsLatest: C,
            showsLatestRef: E,
            handleShowsLatestChange: I,
            updatePin: M,
        } = (function (e) {
            let t = i.useRef(!0),
                [n, l] = i.useState(!0),
                [r, a] = i.useState(!0),
                s = i.useRef(!1),
                o = i.useCallback(() => {
                    ((s.current = !0), (t.current = !1), l(!1));
                }, []),
                u = i.useCallback(() => {
                    s.current = !1;
                }, []),
                [c, d] = i.useState(!0),
                f = i.useRef(!0),
                m = i.useCallback((e) => {
                    ((f.current = e), d(e));
                }, []);
            i.useLayoutEffect(() => {
                let t = e.current?.getScrollerNode();
                if (null != t) {
                    for (let e of oa) t.addEventListener(e, u, { passive: !0 });
                    return () => {
                        for (let e of oa) t.removeEventListener(e, u);
                    };
                }
            }, [e, u]);
            let h = i.useCallback(() => {
                let n = e.current;
                if (null == n) return;
                let r = n.getDistanceFromBottom(),
                    i = !s.current && r < 32 && f.current;
                t.current = i;
                let o = r > 1 || !f.current;
                (a((e) => (!o === e ? e : !o)), l((e) => (e === i ? e : i)));
            }, [e]);
            return {
                stickToBottomRef: t,
                pinned: n,
                atBottom: r,
                unpin: o,
                releasePinHold: u,
                showsLatest: c,
                showsLatestRef: f,
                handleShowsLatestChange: m,
                updatePin: h,
            };
        })(v),
        _ = i.useCallback(() => {
            function e() {
                let e = x.current;
                if (null == e) return;
                let t = e.querySelector('[data-conjure-turn-status="true"][data-live="true"]'),
                    n = e.querySelectorAll('[data-conjure-turn-status="true"]'),
                    l = t ?? n[n.length - 1];
                if (null == l) return;
                let r = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
                l.scrollIntoView({ block: "center", behavior: r ? "auto" : "smooth" });
            }
            (S(), E.current ? e() : b.current?.showLatest(e));
        }, [S, E]),
        T = i.useCallback(() => {
            (M(), b.current?.handleScroll());
        }, [M]);
    (i.useLayoutEffect(() => {
        let e = x.current;
        if (null == e) return;
        let t = v.current?.getScrollerNode(),
            n = e.getBoundingClientRect().width,
            l = t?.getBoundingClientRect().height,
            r = new ResizeObserver((t) => {
                let r = !1;
                for (let a of t)
                    if (a.target === e) {
                        let e = a.contentRect.width;
                        if (e === n) continue;
                        ((n = e), (r = !0));
                    } else {
                        let e = a.contentRect.height;
                        if (e === l) continue;
                        ((l = e), (r = !0));
                    }
                r && (y.current ? v.current?.scrollToBottom() : b.current?.recordAnchor());
            });
        return (r.observe(e), null != t && r.observe(t), () => r.disconnect());
    }, [y]),
        i.useEffect(() => {
            (0, en.Hc)(n);
        }, [n]),
        (0, eb.E1)(n));
    let P = e9(n),
        R = i.useCallback(
            (e, t) => {
                (0, en.dv)(n, e, t);
            },
            [n],
        ),
        L = i.useCallback(
            (e, t) => {
                0 === P.annotations.length
                    ? R(e, t)
                    : (R(
                          (function (e) {
                              let { annotations: t, metaComment: n, context: l } = e,
                                  r = t.filter((e) => eV(e.comment)),
                                  a = [];
                              if (
                                  (a.push(
                                      `My design feedback: ${1 === r.length ? "1 comment" : `${r.length} comments`} on the app.`,
                                  ),
                                  null != l)
                              ) {
                                  let e = l.title.trim(),
                                      t = "" !== e ? `${e} (${l.url})` : l.url;
                                  (a.push(`Page: ${t}, viewport ${l.viewport.width}x${l.viewport.height}.`),
                                      a.push(
                                          "Element coordinates below are viewport coordinates in that frame. The refs come from one snapshot taken when this feedback was collected, so re-snapshot before acting on them.",
                                      ));
                              }
                              r.forEach((e, t) => {
                                  let n;
                                  (a.push(""),
                                      a.push(`${t + 1}. ${eJ(e.target)}`),
                                      a.push(
                                          `   Feedback: ${(n = e.comment.trim()).length <= 1e3 ? n : `${n.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let i = n.trim();
                              return ("" !== i && (a.push(""), a.push(`Note for the whole batch: ${i}`)), a.join("\n"));
                          })({ annotations: P.annotations, metaComment: e, context: P.context }),
                          t,
                      ),
                      e6(n));
            },
            [P, R, n],
        ),
        D = i.useCallback(() => (0, en.fu)(n), [n]),
        $ = i.useCallback((e) => lJ(n, e.implementation_prompt), [n]),
        [F, z] = (function (e) {
            let [t, n] = i.useState(() => rf(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? rf(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(n),
        O = i.useCallback(() => R(eo.intl.string(es.default["t5CN3+"])), [R]),
        U = i.useCallback((e, t, l) => lJ(n, e, { clarificationAnswers: t, attachments: l }), [n]),
        G = i.useCallback((e) => (0, en.XZ)(n, e), [n]),
        q = i.useCallback((e) => (0, en.vX)(n, e), [n]),
        B = i.useCallback((e) => iE(n, "chat", Array.from(e), q), [n, q]),
        H = i.useCallback(() => lJ(n, eo.intl.string(es.default.Zc7gML)), [n]),
        K = l?.status === "restoring",
        V = "open" === u && !c && !K,
        W = o[o.length - 1],
        X = null != W && "assistant" === W.role && null != W.proposal,
        [J, Y] = i.useState(null),
        Q = W?.clarification != null && W.clarification.id !== J ? W.clarification : null,
        Z = i.useCallback(() => {
            null != Q && Y(Q.id);
        }, [Q]),
        ee = (0, f.bG)([en.Ay], () => en.Ay.getSettings(n), [n]),
        [et, el] = i.useState(null),
        er =
            null != W &&
            "assistant" === W.role &&
            null != W.settingsRequest &&
            (0, ej.BL)(W) &&
            W.id !== et &&
            ((t = W.settingsRequest),
            null != ee &&
                (t.keys ?? []).some((e) => {
                    let t = ee.schema.find((t) => t.key === e);
                    if (null == t) return !1;
                    if ("secret" === t.type) return ee.secrets.find((t) => t.name === e)?.set !== !0;
                    let n = ee.values[e];
                    return null == n || "" === n;
                }))
                ? W
                : null,
        ea = er?.settingsRequest ?? null,
        ei = i.useCallback(() => {
            null != er && el(er.id);
        }, [er]),
        eu = null != ea,
        ec = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: (0, f.bG)([ej.Ay], () => ej.Ay.hasLoadedHistory(n), [n]),
            historyUnavailable: (0, f.bG)([ej.Ay], () => ej.Ay.isHistoryUnavailable(n), [n]),
            connState: u,
        }),
        ed = "loading" === ec && 0 === o.length,
        ef = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < n.length; t++) e = (31 * e + n.charCodeAt(t)) % 0x7fffffff;
            return oo[e % oo.length];
        }, [n]),
        em = X ? eo.intl.string(es.default.Zc7gML) : "greeting" === ec && 0 === o.length ? ef : null,
        eh = i.useMemo(() => {
            for (let e = o.length - 1; e >= 0; e--) {
                let t = o[e];
                if ("assistant" === t.role && !(0, ej.BL)(t)) return t;
            }
        }, [o]),
        eg = null != eh,
        ep =
            null != eh
                ? (function (e) {
                      let t = e.turn_id ?? e.steps.find((e) => null != e.turn_id)?.turn_id;
                      if (null != t && /^\d+$/.test(t)) {
                          let e = rl.default.extractTimestamp(t);
                          if (Number.isFinite(e) && e > 0) return e;
                      }
                      return e.created_at;
                  })(eh)
                : void 0,
        ex = X && V ? H : void 0,
        ev = i.useCallback(() => lJ(n, eo.intl.string(es.default.EMgIuY)), [n]),
        [ey, ek] = i.useState(null),
        [ew, eA] = i.useState(eg);
    (ew !== eg && (eA(eg), eg || ek(null)),
        i.useEffect(() => {
            if (!eg) return;
            let e = v.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? ek(null)
                        : ek(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (n.observe(t), () => n.disconnect());
        }, [eg, eh?.steps, C]));
    let eN = C ? ey : "bottom",
        eS = i.useMemo(() => (null != eh ? (0, nJ.b)(eh.steps) : ""), [eh]),
        eC = i.useMemo(() => (null != eh ? ((0, nW.lt)(eh.steps) ?? eh.todos) : void 0), [eh]),
        eE = eh?.provisionalTodo,
        eI = null != eh && nX(eh),
        eM = i.useMemo(() => {
            var e;
            return null != eh ? ((e = eh.steps), ic((0, nW.Jf)(e, !0).tasks)) : void 0;
        }, [eh]);
    return (0, a.jsxs)("section", {
        ref: x,
        "data-conjure-chat": !0,
        className: os.TE,
        children: [
            V
                ? (0, a.jsx)(nV.A, {
                      title: eo.intl.string(es.default.gy7byi),
                      description: eo.intl.string(es.default["dkv/WO"]),
                      icons: oi.ir,
                      onDrop: B,
                  })
                : null,
            (0, a.jsx)(lr, {
                onJumpToActivity: _,
                line: eS,
                placement: eg && "top" === eN ? "top" : null,
                todos: eC,
                todosLive: eI,
                provisionalTodo: eE,
                agents: eM,
            }),
            (0, a.jsxs)("div", {
                className: os.JX,
                children: [
                    (0, a.jsx)(nK.Ch, {
                        ref: v,
                        onScroll: T,
                        scrollbarGutter: ed ? "both-edges" : "stable",
                        className: [os.N$, w ? null : os.hB, eu ? os.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(sB, {
                            projectId: n,
                            messages: o,
                            emptyState: ec,
                            floatingSettingsMessageId: er?.id,
                            onPickIdea: V ? $ : void 0,
                            onAskForIdeas: V ? O : void 0,
                            draftHasText: F,
                            onApprovePlan: V ? ev : void 0,
                            onRestoreVersion: K || eg ? void 0 : r,
                            scrollerRef: v,
                            stickToBottomRef: y,
                            pinned: k,
                            onUnpin: N,
                            handleRef: b,
                            onShowsLatestChange: I,
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: os.NJ,
                        children: (0, a.jsx)(or, {
                            projectId: n,
                            thinking: eg,
                            turnStartedAt: ep,
                            restoring: K,
                            recalling: ed,
                            thinkingActivity: m,
                            compacting: h,
                            saving: g,
                            projectUsage: d,
                            connState: u,
                        }),
                    }),
                    null == Q
                        ? null
                        : (0, a.jsx)("div", {
                              className: eu ? `${os.B5} ${os.J9}` : os.B5,
                              children: (0, a.jsx)(
                                  l9,
                                  { projectId: n, clarification: Q, onSubmit: V ? U : void 0, onDismiss: Z },
                                  Q.id,
                              ),
                          }),
                    null == ea
                        ? null
                        : (0, a.jsx)("div", {
                              className: os.B5,
                              children: (0, a.jsx)(rn, { projectId: n, request: ea, onDismiss: ei }, er?.id),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: os.Jx,
                children: [
                    (0, a.jsx)(lr, {
                        onJumpToActivity: _,
                        line: eS,
                        placement: eg && "bottom" === eN ? "bottom" : null,
                        todos: eC,
                        todosLive: eI,
                        provisionalTodo: eE,
                        agents: eM,
                    }),
                    0 === P.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: os.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, a.jsx)(j.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: eo.intl.formatToPlainString(es.default["7b49dS"], {
                                          count: P.annotations.length,
                                      }),
                                  }),
                                  (0, a.jsx)(j.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: eo.intl.string(es.default["5zG+CR"]),
                                  }),
                                  (0, a.jsx)(A.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: eo.intl.string(es.default["/zOv9+"]),
                                      onClick: () => e6(n),
                                  }),
                              ],
                          }),
                    (0, a.jsx)(iD, {
                        projectId: n,
                        canSend: V,
                        stopped: c,
                        running: eg,
                        restoring: K,
                        onSend: L,
                        hasPendingContext: P.annotations.length > 0,
                        onInterrupt: V ? D : void 0,
                        onUploadFile: q,
                        onImport: s,
                        onApprove: ex,
                        suggestion: em,
                        questionOpen: null != Q || null != ea,
                        modelSettings: p,
                        onModelSettingsChange: G,
                        onDraftHasTextChange: z,
                    }),
                ],
            }),
        ],
    });
}
var oc = n(761508),
    od = n(616e3),
    of = n(683438);
function om(e, t) {
    return String(e).padStart(t, "0");
}
var oh = n(667931);
let og = {
        op: "Operation",
        model: "Model",
        tool: "Tool",
        setup: "Setup",
        worktree: "Git worktree",
        sandbox: "Sandbox",
        build: "Build",
        platform: "Platform",
        other: "Other",
    },
    op = { running: "Running", ok: "Done", error: "Failed" };
function ox(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function ov(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function oj(e) {
    return ox(Math.round(e));
}
function ob(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function oy(e) {
    return oj(e.count > 1 ? e.totalMs : e.end - e.start);
}
let ok = ["Arguments", "Result", "Usage", "Details"];
function ow(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function oA(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function oN(e) {
    let t = (0, oh.bM)(e)?.end;
    return null != t ? ox(t) : (0, oh.lp)(e) ? "interrupted" : "still running";
}
function oS(e) {
    return [
        (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
            if (e.length > 64) return null;
            let n = Date.parse(e);
            if (Number.isNaN(n)) return null;
            let l = new Date(n),
                r = `${om(l.getHours(), 2)}:${om(l.getMinutes(), 2)}:${om(l.getSeconds(), 2)}`;
            return "millis" === t ? `${r}.${om(l.getMilliseconds(), 3)}` : r;
        })(new Date(e.started_at).toISOString()) ?? "",
        ob(e.spans.length),
        (0, oh.Sj)((0, oh.bM)(e)?.attrs),
    ]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function oC(e) {
    let t = (0, oh.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, oh.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += oE(r, "in")),
                (l.output += oE(r, "out")),
                (l.cacheRead += oE(r, "cache_read")),
                (l.cacheWrite += oE(r, "cache_write")),
                (l.costUsd += oE(r, "cost_usd"))));
    }
    let r = oh.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function oE(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var oI = n(738188),
    oM = n(430993),
    o_ = n(364840),
    oT = n(224640),
    oP = n(20742);
let oR = { collapsed: new Set(), revealed: new Set() };
var oL = n(872892);
let oD = {
    op: oL.Q,
    model: oL.i3,
    tool: oL.dH,
    setup: oL.kc,
    worktree: oL.Qx,
    sandbox: oL.QH,
    build: oL.F1,
    platform: oL.Op,
    other: oL.fv,
};
function o$(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      ob(t.calls, "model call"),
                      `${ov(t.input)} in`,
                      `${ov(t.output)} out`,
                      `${ov(t.cacheRead)} cache read`,
                      `${ov(t.cacheWrite)} cache write`,
                      oA(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: oL.M1,
        children: [
            (0, a.jsx)("div", {
                className: oL.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${oL.DJ} ${oD[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: oL.o1,
                children: oh.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${oj(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: oL.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${oL.nf} ${oD[e]}` }),
                                (0, a.jsx)(j.E, { variant: "text-xs/normal", color: "text-muted", children: og[e] }),
                                null == l
                                    ? null
                                    : (0, a.jsx)(j.E, {
                                          variant: "text-xs/normal",
                                          color: "text-subtle",
                                          tabularNumbers: !0,
                                          children: l,
                                      }),
                            ],
                        },
                        e,
                    );
                }),
            }),
            null == n
                ? null
                : (0, a.jsx)(j.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      tabularNumbers: !0,
                      children: n,
                  }),
        ],
    });
}
function oF(e) {
    return `conjure-perf-trace-${e}`;
}
function oz(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        o = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: oL.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(o) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(j.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${oL.p0} ${s + o > 85 ? oL.EU : oL.jh}`,
                children: i,
            }),
        ],
    });
}
function oO(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: o, onExpandSubtree: u } = e,
        c = t.children.length > 0,
        d = l ? ta._ : tq.a,
        f = i.useCallback(
            (e) => {
                (e.shiftKey && u(t.key), s(t.key));
            },
            [t.key, u, s],
        ),
        m = i.useCallback(
            (e) => {
                (e.stopPropagation(), e.shiftKey ? u(t.key) : o(t.key));
            },
            [t.key, u, o],
        );
    return (0, a.jsxs)(b.D, {
        tag: "div",
        role: "treeitem",
        id: oF(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${oL.$y} ${r ? oL.wQ : ""}`,
        onClick: f,
        children: [
            (0, a.jsxs)("div", {
                className: oL.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, a.jsx)(b.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: oL.ai,
                              onClick: m,
                              children: (0, a.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: oL.YJ }),
                    (0, a.jsx)(j.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: oL.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${oL.nf} ${oD[t.category]}` }),
                    (0, a.jsx)(j.E, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        className: oL.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(j.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: oL.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(j.E, {
                              variant: "text-xs/semibold",
                              color: "text-default",
                              className: oL.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(oI.WarningIcon, { size: "xs", color: "currentColor", className: oL.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(oz, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${oL.M0} ${oL.Nh}`
                    : t.running
                      ? `${oL.M0} ${oL.rF}`
                      : `${oL.M0} ${oD[t.category]}`,
                duration: oy(t),
            }),
        ],
    });
}
function oU(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(b.D, {
        tag: "div",
        role: "treeitem",
        id: oF(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${oL.$y} ${l ? oL.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, a.jsxs)("div", {
                className: oL.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: oL.ai,
                        children: (0, a.jsx)(ta._, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: oL.U9 }),
                    (0, a.jsx)("span", { className: `${oL.nf} ${oL.dL}` }),
                    (0, a.jsx)(j.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: oL.MQ,
                        children: ob(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(oz, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${oL.M0} ${oL.ab} ${oL.dL}`,
                duration: oj(t.totalMs),
            }),
        ],
    });
}
function oG(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(j.E, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: oL._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: oL.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${oL.nf} ${oD[t.category]}` }),
                          (0, a.jsx)(j.E, { variant: "text-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(j.E, { variant: "text-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [ow("Start", `+${oj(e.start)}`), ow("Duration", oy(e))];
                      e.count > 1
                          ? t.push(
                                ow("Calls", String(e.count)),
                                ow("Longest call", oj(e.maxMs)),
                                ow("Spread over", oj(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(ow("Self time", oj(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(ow("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(ow("Notes", l.join(", "))),
                          null != e.span.error && t.push(ow("Error", e.span.error)));
                      let r = new Map();
                      for (let [t, n] of Object.entries({
                          ...e.span.attrs,
                          ...(1 === e.count ? e.span.details : null),
                      })) {
                          var a, i;
                          let l =
                                  ((a = e),
                                  "args" === (i = t) || i.startsWith("arg ")
                                      ? "Arguments"
                                      : "result" === i || "result_chars" === i
                                        ? "Result"
                                        : "model" === a.service
                                          ? "Usage"
                                          : "Details"),
                              s = "cost_usd" === t ? oA(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), ow(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...ok.flatMap((e) => {
                              let t = r.get(e);
                              return null == t ? [] : [{ title: e, rows: t }];
                          }),
                      ];
                  })(t).map((e) => {
                      let { title: t, rows: n } = e;
                      return (0, a.jsxs)(
                          i.Fragment,
                          {
                              children: [
                                  null == t
                                      ? null
                                      : (0, a.jsx)(j.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-strong",
                                            className: oL.xd,
                                            children: t,
                                        }),
                                  n.map((e) => {
                                      let { label: t, value: n, block: l } = e;
                                      return (0, a.jsxs)(
                                          i.Fragment,
                                          {
                                              children: [
                                                  (0, a.jsx)(j.E, {
                                                      variant: "text-xs/semibold",
                                                      color: "text-muted",
                                                      children: t,
                                                  }),
                                                  l
                                                      ? (0, a.jsx)(j.E, {
                                                            variant: "code",
                                                            color: "text-default",
                                                            selectable: !0,
                                                            className: oL.vl,
                                                            children: n,
                                                        })
                                                      : (0, a.jsx)(j.E, {
                                                            variant: "text-xs/normal",
                                                            color: "text-default",
                                                            tabularNumbers: !0,
                                                            selectable: !0,
                                                            children: n,
                                                        }),
                                              ],
                                          },
                                          t,
                                      );
                                  }),
                              ],
                          },
                          t ?? "timing",
                      );
                  }),
              ],
          });
}
function oq(e) {
    let { trace: t } = e,
        n = i.useMemo(() => oC(t), [t]);
    return (0, a.jsx)(o$, { stats: n });
}
function oB(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, oh.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? oR : (0, oh.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, oh.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, oh.x7)(t)), l((n) => (0, oh._0)(n, t, e)));
            }, [t]);
            let o = i.useMemo(() => (null == t ? [] : (0, oh.wu)(t, n)), [t, n]),
                u = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, oh.IE)(t, e);
                        null != n && l((e) => (0, oh.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, oh.IE)(t, e);
                        null != n && l((e) => (0, oh.H$)(e, n));
                    },
                    [t],
                ),
                f = i.useCallback(() => {
                    null != t && l((0, oh.vH)(t));
                }, [t]),
                m = i.useCallback(() => {
                    null != t && l((0, oh.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, oh.hB)(t));
                }, [t]),
                g = o.find((e) => e.key === r);
            return {
                rows: o,
                collapsed: n.collapsed,
                selectedKey: r,
                selected: g?.kind === "node" ? g.node : null,
                toggle: u,
                reveal: c,
                expandSubtree: d,
                select: a,
                expandAll: f,
                collapseAll: m,
                reset: h,
            };
        })(t),
        { rows: l, collapsed: r, selected: s, selectedKey: o, select: u, toggle: c, reveal: d, expandSubtree: f } = n,
        m = (0, oh.dj)(t),
        h = i.useMemo(() => (0, oh.nF)(m), [m]),
        g = h.length > 1 ? ((h[1] - h[0]) / m) * 100 : 100,
        p = i.useCallback(
            (e) => {
                let t,
                    n = l.findIndex((e) => e.key === o),
                    a = l[n];
                if ("ArrowDown" === e.key) t = l[Math.min(l.length - 1, n + 1)];
                else if ("ArrowUp" === e.key) t = l[Math.max(0, n - 1)];
                else if (null == a) return;
                else if ("smaller" === a.kind && ("ArrowRight" === e.key || "Enter" === e.key)) d(a.parentKey);
                else if ("node" === a.kind && "ArrowRight" === e.key && e.shiftKey) f(a.key);
                else if ("node" === a.kind && "ArrowRight" === e.key && r.has(a.key)) c(a.key);
                else {
                    if ("node" !== a.kind || "ArrowLeft" !== e.key || !(a.node.children.length > 0) || r.has(a.key))
                        return;
                    c(a.key);
                }
                (e.preventDefault(),
                    null != t && (u(t.key), document.getElementById(oF(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, f, d, l, u, o, c],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(oM.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: oL.z,
                        children: [
                            (0, a.jsx)(j.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: oN(t),
                            }),
                            (0, a.jsx)(j.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: oS(t),
                            }),
                            null == t.started_by
                                ? null
                                : (0, a.jsx)(j.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: `Started by ${t.started_by.trace_name}`,
                                  }),
                            0 === t.dropped
                                ? null
                                : (0, a.jsx)(j.E, {
                                      variant: "text-sm/normal",
                                      color: "text-feedback-warning",
                                      children: `${ob(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(oq, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: oL.KE,
                        children: [
                            (0, a.jsx)(A.$, { size: "sm", variant: "secondary", text: "Time sinks", onClick: n.reset }),
                            (0, a.jsx)(A.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Expand all",
                                onClick: n.expandAll,
                            }),
                            (0, a.jsx)(A.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Collapse all",
                                onClick: n.collapseAll,
                            }),
                            (0, a.jsx)(j.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: "Shift-click a span to expand everything under it.",
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        role: "tree",
                        tabIndex: 0,
                        "aria-label": "Spans",
                        "aria-activedescendant": null == o ? void 0 : oF(o),
                        className: oL.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(g) },
                        onKeyDown: p,
                        children: [
                            (0, a.jsxs)("div", {
                                className: oL.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: oL.So,
                                        children: (0, a.jsx)(j.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: oL.c1,
                                        children: h.map((e) =>
                                            (0, a.jsx)(
                                                j.E,
                                                {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${oL.io} ${(e / m) * 100 > 85 ? oL.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / m) * 100),
                                                    },
                                                    children: 0 === e ? "0" : oj(e),
                                                },
                                                e,
                                            ),
                                        ),
                                    }),
                                ],
                            }),
                            l.map((e) =>
                                "node" === e.kind
                                    ? (0, a.jsx)(
                                          oO,
                                          {
                                              node: e.node,
                                              extent: m,
                                              collapsed: r.has(e.key),
                                              selected: e.key === o,
                                              onSelect: u,
                                              onToggle: c,
                                              onExpandSubtree: f,
                                          },
                                          e.key,
                                      )
                                    : (0, a.jsx)(oU, { row: e, extent: m, selected: e.key === o, onReveal: d }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(o_.j, { children: (0, a.jsx)(oG, { node: s }) }),
        ],
    });
}
function oH(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, f.bG)([od.A], () => od.A.getTimingTrace(l, r), [l, r]),
        s = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(oT.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, a.jsx)(oP.rQ, { title: s }),
            null == i
                ? (0, a.jsx)(oM.c, {
                      children: (0, a.jsx)(j.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(oB, { trace: i }),
        ],
    });
}
let oK = { running: oL.Vf, ok: oL.mo, error: oL.Sr };
function oV(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${oL.Om} ${oK[t]}`, role: "img", "aria-label": op[t] });
}
function oW(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => {
            (0, te.openModal)((e) => (0, a.jsx)(oH, { ...e, projectId: t, traceId: n.id }));
        }, [t, n.id]);
    return (0, a.jsxs)(b.D, {
        className: oL.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: oL.sU,
                children: [
                    (0, a.jsx)(oV, { status: (0, oh.lQ)(n) }),
                    (0, a.jsx)(j.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        className: oL._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(j.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: oN(n),
                    }),
                ],
            }),
            (0, a.jsx)(j.E, { variant: "text-xs/normal", color: "text-muted", tabularNumbers: !0, children: oS(n) }),
            null == l
                ? null
                : (0, a.jsx)(j.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function oX(e) {
    let { projectId: t, traces: n } = e,
        l = i.useRef(null),
        r = i.useCallback(() => {
            ei(
                new Blob(
                    [
                        JSON.stringify({
                            kind: "conjure.timing_traces",
                            version: 1,
                            project_id: t,
                            exported_at: new Date().toISOString(),
                            traces: n,
                        }),
                    ],
                    { type: "application/json" },
                ),
                `conjure-traces-${t}.json`,
            ).catch((e) => {
                console.error("[vibegrations] trace export failed", t, e);
            });
        }, [t, n]);
    return (0, a.jsx)(Q.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: Q.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, a.jsx)(Z.W, {
                "data-menu-migrated": !0,
                navId: `conjure-traces-${t}`,
                "aria-label": "Trace actions",
                onClose: l,
                onSelect: l,
                children: (0, a.jsx)(ee.rX, {
                    children: (0, a.jsx)(ee.Dr, {
                        id: "export",
                        label: "Export as JSON",
                        disabled: 0 === n.length,
                        action: r,
                    }),
                }),
            });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, a.jsx)(t9.K, {
                ...e,
                buttonRef: l,
                icon: ne.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function oJ(e) {
    let { projectId: t } = e,
        n = (0, f.yK)([od.A], () => od.A.getTimingTraces(t), [t]),
        [l, r] = i.useState(""),
        s = i.useMemo(() => {
            let e;
            return "" === (e = l.trim().toLowerCase())
                ? n
                : n.filter((t) =>
                      (function (e) {
                          let t = [e.name];
                          for (let n of e.spans)
                              for (let e of (t.push(n.name, n.error ?? ""),
                              [...Object.values(n.attrs ?? {}), ...Object.values(n.details ?? {})]))
                                  t.push(String(e));
                          return t.join(" ").toLowerCase();
                      })(t).includes(e),
                  );
        }, [n, l]),
        o = i.useMemo(() => [...s].reverse(), [s]),
        u = i.useMemo(
            () =>
                (function (e) {
                    let t = e.map(oC);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: oh.BF.map((e) => ({
                            category: e,
                            ms: n((t) => t.categories.find((t) => t.category === e)?.ms ?? 0),
                        })),
                        busyMs: n((e) => e.busyMs),
                        model: {
                            calls: n((e) => e.model.calls),
                            input: n((e) => e.model.input),
                            output: n((e) => e.model.output),
                            cacheRead: n((e) => e.model.cacheRead),
                            cacheWrite: n((e) => e.model.cacheWrite),
                            costUsd: n((e) => e.model.costUsd),
                        },
                    };
                })(s),
            [s],
        );
    return 0 === n.length
        ? (0, a.jsxs)("div", {
              className: oL.Ie,
              children: [
                  (0, a.jsx)(j.E, { variant: "text-sm/medium", color: "text-default", children: "No traces yet" }),
                  (0, a.jsx)(j.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: "Turns and project operations over 100ms show up here as they run.",
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: oL.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: oL.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: oL.fH,
                              children: (0, a.jsx)(of.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(oX, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, a.jsxs)(nK.Ch, {
                      className: oL.XG,
                      children: [
                          (0, a.jsx)(o$, { stats: u }),
                          0 === o.length
                              ? (0, a.jsx)(j.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: oL.p_,
                                    "aria-label": "Traces",
                                    children: o.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            { children: (0, a.jsx)(oW, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function oY(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function oQ(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function oZ(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function o0(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function o1(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function o2(e) {
    return eo.intl.string("preview" === e ? es.default["2yLYlG"] : es.default.eiAi57);
}
let o3 = ["all", "preview", "stable", "web"];
function o4(e) {
    switch (e.reason) {
        case "local":
            return eo.intl.string(es.default.mUeKML);
        case "unconfigured":
            return eo.intl.string(es.default.bGefb5);
        case "unauthorized":
            return eo.intl.string(es.default.KLx6Bb);
        default:
            return null != e.detail
                ? eo.intl.formatToPlainString(es.default.t09Q6q, { detail: e.detail })
                : eo.intl.string(es.default["t+tG59"]);
    }
}
function o6(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : eo.intl.formatToPlainString(es.default["XO/bN4"], {
              p50: oY(e.memory_p50_bytes ?? 0),
              p999: oY(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let o7 = {
    db: () => es.default["7l+DFG"],
    db_preview: () => es.default.FAuffi,
    runtime: () => es.default["Gkl+ab"],
    runtime_preview: () => es.default.ynpJzv,
    bot: () => es.default["5/i0cj"],
    bot_preview: () => es.default.m2jsnw,
};
var o5 = n(911608),
    o8 = n(177427);
function o9(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: o8.KE,
        children: [
            (0, a.jsx)("div", {
                className: o8.IQ,
                children:
                    "loading" === n
                        ? (0, a.jsx)(w.y, { type: w.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, a.jsx)(j.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: eo.intl.string(es.default.ZVByPX),
                            })
                          : null != t
                            ? (0, a.jsx)(j.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: eo.intl.formatToPlainString(es.default.INVO50, { time: o0(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(A.$, { variant: "secondary", size: "sm", text: eo.intl.string(es.default.oKEgiu), onClick: l }),
        ],
    });
}
function ue(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: o8.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(j.E, { variant: "text-xs/semibold", color: "text-muted", className: o8.Gf, children: t }),
            n,
        ],
    });
}
function ut(e) {
    let { label: t, value: n, hint: l, critical: r = !1 } = e;
    return (0, a.jsxs)("div", {
        className: o8.N8,
        children: [
            (0, a.jsxs)("div", {
                className: o8.x7,
                children: [
                    (0, a.jsx)(j.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(j.E, {
                        variant: "text-sm/medium",
                        color: r ? "text-feedback-critical" : "text-default",
                        children: n,
                    }),
                ],
            }),
            null != l && (0, a.jsx)(j.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
        ],
    });
}
function un(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: o8.N8,
        children: [
            (0, a.jsxs)("div", {
                className: o8.x7,
                children: [
                    (0, a.jsx)(j.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(j.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(o5.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? o8.dh : void 0,
            }),
        ],
    });
}
function ul(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(ut, {
            label: eo.intl.string(es.default.SXP7pD),
            value: eo.intl.string(es.default.E5hKVi),
            hint: o4(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(ut, {
            label: eo.intl.string(es.default.SXP7pD),
            value: "\u2014",
            hint: eo.intl.string(es.default.AGvoMJ),
        });
    let l = o6(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(ut, { label: eo.intl.string(es.default["H/X+FI"]), value: oQ(n.cpu_ms) }),
            null != l && (0, a.jsx)(ut, { label: eo.intl.string(es.default.lmFmMO), value: l }),
        ],
    });
}
function ur(e) {
    let { analytics: t } = e,
        n = eo.intl.string(es.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(ue, {
            title: n,
            children: (0, a.jsx)(j.E, { variant: "text-sm/normal", color: "text-muted", children: o4(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? o7[t] : null) ? eo.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(ue, {
        title: n,
        children:
            0 === l.length
                ? (0, a.jsx)(j.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: eo.intl.string(es.default.AGvoMJ),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, a.jsx)(
                          ut,
                          {
                              label: n,
                              value: eo.intl.formatToPlainString(es.default["w/2voO"], { cpu: oQ(t.cpu_ms) }),
                              hint: o6(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var ua = n(400154);
function ui(e, t) {
    return (0, a.jsx)(ut, {
        label: e,
        value: eo.intl.formatToPlainString(es.default.yHJxuP, { count: oZ((0, Y.aM)(t)) }),
        hint: `${oZ(t.input_tokens)} in \xb7 ${oZ(t.output_tokens)} out \xb7 ${oZ(t.cache_read_input_tokens)} cache read`,
    });
}
function us(e) {
    let { projectId: t, status: n, fetchState: l, onRefresh: r } = e,
        s = (0, f.bG)([od.A], () => od.A.getLastTurnUsage(t), [t]),
        o = (0, f.bG)([od.A], () => od.A.getLastCompaction(t), [t]),
        u = (0, f.bG)([od.A], () => od.A.getLastCompactionDecline(t), [t]),
        c = (0, f.bG)([od.A], () => od.A.getForceCompactionState(t), [t]),
        d = i.useCallback(() => (0, en.Lj)(t), [t]),
        m = i.useCallback(() => (0, en.Lj)(t, !0), [t]),
        h = n?.agent?.lifetime ?? null,
        g = n?.agent?.limits ?? null,
        p = n?.agent?.session ?? null,
        x = o?.promptCeiling ?? g?.context_window_tokens ?? null;
    return (0, a.jsxs)("div", {
        className: ua.Mf,
        children: [
            (0, a.jsx)(o9, { generatedAt: n?.generated_at ?? null, fetchState: l, onRefresh: r }),
            (0, a.jsx)(ue, {
                title: eo.intl.string(es.default.JghNal),
                children:
                    null == h
                        ? (0, a.jsx)(j.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: eo.intl.string(es.default.s0U5Fv),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(ut, {
                                      label: eo.intl.string(es.default["9nqym2"]),
                                      value: oZ((0, Y.a7)(h.cost_usd)),
                                      hint: eo.intl.formatToPlainString(es.default.NCdUIh, { count: oZ(h.turns) }),
                                  }),
                                  ui(eo.intl.string(es.default.xtxP0e), h.orchestrator),
                                  ui(eo.intl.string(es.default["9Sj3SX"]), h.codegen),
                                  ui(eo.intl.string(es.default.ANCEo3), (0, Y.wU)(h.compaction)),
                                  n?.agent?.outcomes != null &&
                                      Object.keys(n.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(ut, {
                                          label: eo.intl.string(es.default.SQHm7C),
                                          value: Object.entries(n.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${oZ(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(ue, {
                title: eo.intl.string(es.default.dZHPE5),
                children:
                    null == s
                        ? (0, a.jsx)(j.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: eo.intl.string(es.default.DfVjal),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  ui(eo.intl.string(es.default["7X3i9d"]), s.total),
                                  (0, a.jsx)(ut, {
                                      label: eo.intl.string(es.default["8OUg09"]),
                                      value: `${Math.round((s.cache_hit_rate ?? (0, Y.CA)(s.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(ue, {
                title: eo.intl.string(es.default.NbRk9a),
                children: [
                    null != o && null != x
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(un, {
                                      label: eo.intl.string(es.default.Kw5wiQ),
                                      used: o.tokensAfter,
                                      max: x,
                                      formatValue: oZ,
                                  }),
                                  (0, a.jsx)(ut, {
                                      label: eo.intl.string(es.default.mRbSns),
                                      value: `${oZ(o.tokensBefore)} \u{2192} ${oZ(o.tokensAfter)}`,
                                      hint: eo.intl.formatToPlainString(es.default.Vq3skS, {
                                          count: oZ(o.retainedMessages),
                                          time: o0(o.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(j.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != x
                                      ? eo.intl.formatToPlainString(es.default.GMLCNv, { ceiling: oZ(x) })
                                      : eo.intl.string(es.default.s0U5Fv),
                          }),
                    null != u &&
                        (0, a.jsx)(ut, {
                            label: eo.intl.string(es.default["4BX5KK"]),
                            value: `${oZ(u.projected)} / ${oZ(u.threshold)}`,
                            critical: !0,
                            hint: eo.intl.formatToPlainString(es.default["6ngCax"], { time: o0(u.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: ua.Lj,
                        children: [
                            (0, a.jsx)(A.$, {
                                variant: "secondary",
                                size: "sm",
                                text: eo.intl.string(es.default["1EiJeb"]),
                                disabled: "pending" === c,
                                onClick: d,
                            }),
                            (0, a.jsx)(j.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof c && "compacted" !== c.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return eo.intl.string(es.default.wox6Ev);
                                    if ("pending" === e) return eo.intl.string(es.default.OcPHQ1);
                                    let t = o0(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return eo.intl.formatToPlainString(es.default.BhRjZZ, { time: t });
                                    let n =
                                        "declined" === e.outcome
                                            ? es.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? es.default.YZb4hK
                                              : es.default.ZoUSVK;
                                    return eo.intl.formatToPlainString(n, {
                                        reason: e.reason ?? "no reason given",
                                        time: t,
                                    });
                                })(c),
                            }),
                            "object" == typeof c &&
                                !0 === c.pendingTurn &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(A.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: eo.intl.string(es.default.ZxG2AI),
                                            onClick: m,
                                        }),
                                        (0, a.jsx)(j.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: eo.intl.string(es.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (null != p || n?.analytics != null) &&
                (0, a.jsxs)(ue, {
                    title: eo.intl.string(es.default.EsSzCS),
                    children: [
                        null != p &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(ut, {
                                        label: eo.intl.string(es.default.CLXHAs),
                                        value: o0(p.instance_since),
                                        hint: eo.intl.string(es.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(ut, {
                                        label: eo.intl.string(es.default["8V8e1Z"]),
                                        value: oZ(p.sockets),
                                    }),
                                    (0, a.jsx)(ut, {
                                        label: eo.intl.string(es.default["4pBzYW"]),
                                        value: p.turn_inflight
                                            ? eo.intl.string(es.default.Wv025I)
                                            : eo.intl.string(es.default["7/lsFY"]),
                                    }),
                                    p.queued_messages > 0 &&
                                        (0, a.jsx)(ut, {
                                            label: eo.intl.string(es.default["3oUYnv"]),
                                            value: oZ(p.queued_messages),
                                        }),
                                ],
                            }),
                        n?.analytics != null && (0, a.jsx)(ul, { analytics: n.analytics }),
                    ],
                }),
            null != g &&
                (0, a.jsxs)(ue, {
                    title: eo.intl.string(es.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(ut, {
                            label: eo.intl.string(es.default.IlDBN3),
                            value: oZ(g.max_subagent_iterations),
                        }),
                        (0, a.jsx)(ut, {
                            label: eo.intl.string(es.default["ZdzKR+"]),
                            value: eo.intl.formatToPlainString(es.default.yHJxuP, {
                                count: oZ(g.context_window_tokens),
                            }),
                        }),
                        (0, a.jsx)(ut, {
                            label: eo.intl.string(es.default.cIhN2W),
                            value: eo.intl.formatToPlainString(es.default.yHJxuP, {
                                count: oZ(g.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(ut, {
                            label: eo.intl.string(es.default["+fOn/q"]),
                            value: oZ(g.max_user_message_chars),
                        }),
                        (0, a.jsx)(ut, { label: eo.intl.string(es.default.kIHga0), value: oZ(g.max_build_attempts) }),
                        (0, a.jsx)(ut, { label: eo.intl.string(es.default.Iw03yW), value: oZ(g.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var uo = n(237528),
    uu = n(629584),
    uc = n(531893);
function ud(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: uc.ut,
              children: (0, a.jsx)(j.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: eo.intl.string(es.default.h1SE6R),
              }),
          });
}
function uf(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: uc.qf,
              children: [
                  (0, a.jsx)(j.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: eo.intl.string(es.default.h1SE6R),
                  }),
                  (0, a.jsx)(j.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: eo.intl.string(es.default["8SErdg"]),
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: uc.qf,
              children: [
                  (0, a.jsx)(j.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(j.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function um(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: uc.ps,
              children: (0, a.jsx)(j.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: eo.intl.string(es.default.V7Ri8H),
              }),
          })
        : null;
}
var uh = n(109079);
let ug = i.memo(function (e) {
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
                        r = -1 === n ? l : -1 === l ? n : Math.min(n, l);
                    if (-1 === r) return null;
                    let a = e.slice(r).trim();
                    if (a.length < 2) return null;
                    try {
                        t = JSON.parse(a);
                    } catch {
                        return null;
                    }
                    if ("object" != typeof t || null == t) return null;
                    let i = e.slice(0, r).trim(),
                        s = JSON.stringify(t, null, 2);
                    return Array.isArray(t)
                        ? { prefix: i, pretty: s, marker: "[\u2026]", size: t.length }
                        : { prefix: i, pretty: s, marker: "{\u2026}", size: Object.keys(t).length };
                })(n.message),
            [n.message],
        ),
        c = "error" === n.level ? "text-feedback-critical" : "text-default";
    return (0, a.jsxs)("div", {
        className: uh.vK,
        children: [
            (0, a.jsx)(j.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: uh.Mt,
                selectable: !0,
                children: (function (e) {
                    let t = new Date(e);
                    if (Number.isNaN(t.getTime())) return e;
                    let n = String(t.getHours()).padStart(2, "0"),
                        l = String(t.getMinutes()).padStart(2, "0"),
                        r = String(t.getSeconds()).padStart(2, "0");
                    return `${n}:${l}:${r}`;
                })(n.ts),
            }),
            (0, a.jsx)(j.E, {
                tag: "span",
                variant: "text-xxs/semibold",
                color:
                    "error" === (t = n.level)
                        ? "text-feedback-critical"
                        : "warn" === t
                          ? "text-feedback-warning"
                          : "text-muted",
                className: uh.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: uh.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: uh.Cq, children: (0, a.jsx)(uo.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: uh.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(uo.v, {
                                text: eo.intl.string(es.default.TrC9c8),
                                variant: "redLight",
                            }),
                        }),
                    null != u
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  "" !== u.prefix &&
                                      (0, a.jsxs)(j.E, {
                                          tag: "span",
                                          variant: "text-xs/normal",
                                          color: c,
                                          selectable: !0,
                                          children: [u.prefix, " "],
                                      }),
                                  (0, a.jsxs)(b.D, {
                                      className: uh.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": o,
                                      "aria-label": eo.intl.string(es.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, a.jsx)(tq.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, a.jsx)(ta._, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, a.jsxs)(j.E, {
                                              tag: "span",
                                              variant: "text-xs/medium",
                                              color: "none",
                                              children: [
                                                  u.marker,
                                                  " ",
                                                  eo.intl.formatToPlainString(
                                                      "[\u2026]" === u.marker
                                                          ? es.default.kUhyUv
                                                          : es.default["N+fphl"],
                                                      { count: u.size },
                                                  ),
                                              ],
                                          }),
                                      ],
                                  }),
                                  r &&
                                      (0, a.jsx)(j.E, {
                                          tag: "div",
                                          variant: "text-xs/normal",
                                          color: c,
                                          className: uh.dF,
                                          selectable: !0,
                                          id: o,
                                          children: u.pretty,
                                      }),
                              ],
                          })
                        : (0, a.jsx)(j.E, {
                              tag: "span",
                              variant: "text-xs/normal",
                              color: c,
                              selectable: !0,
                              children: n.message,
                          }),
                ],
            }),
        ],
    });
});
function up(e) {
    let { projectId: t } = e,
        n = (0, f.bG)([eN.Ay], () => eN.Ay.getLogs(t), [t]),
        l = (0, f.bG)([eN.Ay], () => eN.Ay.getHistoryState(t, "logs")),
        [r, s] = i.useState("all"),
        [o, u] = i.useState(""),
        c = i.useMemo(() => {
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
        d = i.useRef(null),
        m = i.useRef(!0);
    i.useEffect(() => {
        m.current && d.current?.scrollToBottom();
    }, [c]);
    let h = i.useCallback(() => {
            let e = d.current;
            null != e && (m.current = 32 > e.getDistanceFromBottom());
        }, []),
        g = i.useMemo(
            () =>
                o3.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return o2(e);
                            case "web":
                                return eo.intl.string(es.default.IVzfVV);
                            default:
                                return eo.intl.string(es.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, a.jsxs)("div", {
        className: uh.$F,
        children: [
            (0, a.jsxs)("div", {
                className: uh.y4,
                children: [
                    (0, a.jsx)(uu.I, {
                        look: "pill",
                        "aria-label": eo.intl.string(es.default.MhvyUU),
                        options: g,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: uh.KT,
                        children: (0, a.jsx)(of.I, {
                            query: o,
                            onChange: u,
                            onClear: () => u(""),
                            size: "sm",
                            placeholder: eo.intl.string(es.default["m2+37Y"]),
                            "aria-label": eo.intl.string(es.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, a.jsx)(ud, { state: l }),
            (0, a.jsxs)(nK.Ch, {
                ref: d,
                onScroll: h,
                overflow: "auto",
                className: uh.sx,
                children: [
                    (0, a.jsx)(um, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(uf, {
                              state: l,
                              emptyTitle: eo.intl.string(es.default.S7qlPG),
                              emptyBody: eo.intl.string(es.default.nD0S9z),
                          })
                        : 0 === c.length
                          ? (0, a.jsx)(j.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: eo.intl.string(es.default["4SIdrX"]),
                            })
                          : c.map((e) => (0, a.jsx)(ug, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function ux(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(ue, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, a.jsx)(j.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: eo.intl.string(es.default.umcjif),
                      }),
        })
    );
}
function uv(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(ut, {
                      label: eo.intl.formatToPlainString(es.default["01ZMS4"], { env: o2(n) }),
                      value: ((t = l.connected), eo.intl.string(t ? es.default.Wv025I : es.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(ut, {
                      label: eo.intl.string(es.default["z1dh+F"]),
                      value: oZ(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${o0(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(ut, { label: eo.intl.string(es.default.Iz5GnJ), value: oZ(l.guild_count) }),
                  (0, a.jsx)(ut, {
                      label: eo.intl.string(es.default["7UqtNv"]),
                      value: oZ(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? eo.intl.formatToPlainString(es.default.MasSly, {
                                    code: l.last_close_code,
                                    time: o0(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(ut, {
                          label: eo.intl.string(es.default["x3+JXJ"]),
                          value: oZ(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(ut, { label: o2(n), value: eo.intl.string(es.default.lTHQss) });
}
function uj(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(ut, {
        label: o2(t),
        value: eo.intl.formatToPlainString(es.default["Xq+wHT"], {
            requests: oZ(n.requests),
            failures: oZ(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? eo.intl.formatToPlainString(es.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: o0(n.last_failure.at),
                  })
                : eo.intl.formatToPlainString(es.default["7KlGT6"], { time: o0(n.since) }),
    });
}
function ub(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(ut, {
                label: eo.intl.formatToPlainString(es.default["92gVTm"], { env: o2(t) }),
                value: oZ(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    ut,
                    {
                        label: eo.intl.formatToPlainString(es.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? eo.intl.formatToPlainString(es.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? eo.intl.formatToPlainString(es.default.wxAWNv, { time: o0(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function uy(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(ut, {
        label: o2(t),
        value: eo.intl.formatToPlainString(es.default.suAOj9, { calls: oZ(n.calls), errors: oZ(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function uk(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(ue, {
            title: t,
            children: (0, a.jsx)(j.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: eo.intl.string(es.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(ue, {
        title: t,
        children: [
            (0, a.jsx)(ut, {
                label: eo.intl.string(es.default.xtD4Zp),
                value: oZ(n.requests),
                hint: eo.intl.formatToPlainString(es.default["7KlGT6"], { time: o0(n.since) }),
            }),
            (0, a.jsx)(ut, { label: eo.intl.string(es.default.gfRhR3), value: oZ(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(un, {
                              label: eo.intl.string(es.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: oQ,
                          }),
                          (0, a.jsx)(ut, {
                              label: eo.intl.string(es.default.mSKImM),
                              value: oQ(r),
                              hint: eo.intl.formatToPlainString(es.default.JqMU05, {
                                  total: oQ(n.cpu_ms_total),
                                  wall: oQ(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(ut, {
                      label: eo.intl.string(es.default.LEJ5r3),
                      value: eo.intl.string(es.default["2Ekb2b"]),
                      hint: eo.intl.string(es.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(ut, { label: eo.intl.string(es.default.xvmL1D), value: oQ(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(ut, {
                    label: eo.intl.string(es.default["4sQYwH"]),
                    value: oZ(n.exceeded_cpu),
                    critical: !0,
                }),
            (0, a.jsx)(ut, {
                label: eo.intl.string(es.default.bQenOy),
                value: oZ(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: eo.intl.formatToPlainString(es.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(ut, { label: eo.intl.string(es.default.xgpn4Y), value: o1(n.build) }),
        ],
    });
}
function uw(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        o = r
            ? [{ key: "shared", label: eo.intl.string(es.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: eo.intl.string(es.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: eo.intl.string(es.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(ue, {
        title: eo.intl.string(es.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(ut, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(ut, {
                                  label: eo.intl.formatToPlainString(es.default.u7kJJ4, { env: n }),
                                  value: oY(l.r2_bytes),
                                  hint: eo.intl.formatToPlainString(
                                      l.r2_truncated ? es.default.lH0oQw : es.default.m9h02S,
                                      { count: oZ(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(un, {
                                      label: eo.intl.formatToPlainString(es.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: oY,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function uA(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: ua.Mf,
        children: [
            (0, a.jsx)(o9, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(uk, {
                            title: eo.intl.string(es.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(uk, {
                            title: eo.intl.string(es.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(uw, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(ux, {
                                title: eo.intl.string(es.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(uv, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(ux, {
                                title: eo.intl.string(es.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(uj, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(ux, {
                                title: eo.intl.string(es.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(ub, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(ux, {
                                title: eo.intl.string(es.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(uy, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(ur, { analytics: t.analytics }),
                        (0, a.jsxs)(ue, {
                            title: eo.intl.string(es.default.fQMpFp),
                            children: [
                                (0, a.jsx)(ut, {
                                    label: eo.intl.string(es.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? o1(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(ut, {
                                    label: eo.intl.string(es.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? o1(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var uN = n(592465);
function uS(e) {
    let { projectId: t, onClose: n } = e,
        [l, r] = i.useState("logs"),
        s = (0, f.bG)([eH.A], () => eH.A.isDeveloper) || !1,
        o = (0, f.bG)([od.A], () => od.A.getStatus(t), [t]),
        u = (0, f.bG)([od.A], () => od.A.getFetchState(t), [t]);
    (i.useEffect(() => {
        (0, en.R7)(t);
    }, [t]),
        i.useEffect(() => (0, en.Rw)(t), [t]));
    let c = i.useCallback(() => (0, en.R7)(t), [t]),
        d = i.useCallback(() => {
            (0, nl.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: od.A.getStatus(t),
                        last_turn_usage: od.A.getLastTurnUsage(t),
                        last_compaction: od.A.getLastCompaction(t),
                        last_compaction_decline: od.A.getLastCompactionDecline(t),
                        timing_traces: od.A.getTimingTraces(t),
                        logs: eN.Ay.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, v.P0)((0, v.ox)(eo.intl.string(es.default.wI6fhl), v.Ck.SUCCESS)),
            );
        }, [t]),
        m = eo.intl.string(es.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: uN.nd,
        "aria-label": m,
        children: [
            (0, a.jsxs)(nH.Ay, {
                "aria-label": m,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(nH.Ay.Icon, {
                            icon: sh.CopyIcon,
                            tooltip: eo.intl.string(es.default.TkHqy2),
                            onClick: d,
                        }),
                        (0, a.jsx)(nH.Ay.Icon, { icon: P.P, tooltip: eo.intl.string(eo.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(nH.Ay.ChannelIcon, { icon: S.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(nH.Ay.Title, { children: m }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: uN.rf,
                children: [
                    (0, a.jsxs)(oc.V, {
                        selectedItem: l,
                        type: "top",
                        onItemSelect: (e) => r(e),
                        "aria-label": eo.intl.string(es.default.RvvWIh),
                        className: uN.vR,
                        children: [
                            (0, a.jsx)(oc.V.Item, { id: "logs", children: eo.intl.string(es.default["+VRYCm"]) }),
                            (0, a.jsx)(oc.V.Item, { id: "worker", children: eo.intl.string(es.default["50D0FZ"]) }),
                            (0, a.jsx)(oc.V.Item, { id: "agent", children: eo.intl.string(es.default.UkbTK1) }),
                            s ? (0, a.jsx)(oc.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === l
                        ? (0, a.jsx)(up, { projectId: t })
                        : "worker" === l
                          ? (0, a.jsx)(uA, { status: o, fetchState: u, onRefresh: c })
                          : "trace" === l && s
                            ? (0, a.jsx)(oJ, { projectId: t })
                            : (0, a.jsx)(us, { projectId: t, status: o, fetchState: u, onRefresh: c }),
                ],
            }),
        ],
    });
}
var uC = n(333007),
    uE = n(365912),
    uI = n(775121),
    uM = n(873715);
function u_(e) {
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
let uT = Object.freeze({ x: -1, y: -1 });
function uP(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = u_(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var uR = n(470779);
function uL(e) {
    let {
            projectId: t,
            at: n,
            bounds: l,
            kind: r,
            value: s,
            onChange: u,
            onSubmit: c,
            onDismiss: d,
            canSubmit: f,
            closing: m,
            onUploadFile: h,
        } = e,
        {
            drafts: g,
            addFiles: p,
            pasteFiles: x,
            removeDraft: v,
            settled: j,
            takeRefs: b,
        } = iI({ projectId: t, surface: "design", onUploadFile: h }),
        k = i.useRef(null),
        w = (f || g.length > 0) && j && !m,
        A = i.useCallback(() => {
            if (!w) return;
            let e = b();
            c(e.length > 0 ? e : void 0);
        }, [w, b, c]),
        [N, S] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => S(!0));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, []);
    let C = i.useRef(null),
        [E, I] = i.useState(null);
    i.useLayoutEffect(() => {
        let e = C.current;
        if (null == e || "u" < typeof ResizeObserver) return;
        let t = new ResizeObserver(() => I({ height: e.offsetHeight }));
        return (t.observe(e), () => t.disconnect());
    }, []);
    let M = E?.height ?? 44,
        _ = l.left + 8,
        T = l.top + 8,
        P = Math.max(n.x, _),
        R = Math.min(Math.max(n.y + 32 + 4, T), Math.max(T, l.top + l.height - M - 8));
    return (0, a.jsxs)("div", {
        ref: C,
        className: o()(uR.M0, { [uR.ho]: N && !m, [uR.ET]: m }),
        style: { left: P, top: R },
        "data-testid": "conjure-design-compose-bar",
        children: [
            (0, a.jsx)("input", {
                ref: k,
                type: "file",
                multiple: !0,
                className: uR.Fg,
                tabIndex: -1,
                "aria-hidden": !0,
                onChange: (e) => {
                    (p(Array.from(e.target.files ?? [])), (e.target.value = ""));
                },
            }),
            (0, a.jsx)(y.m, {
                position: "bottom",
                text: eo.intl.string(es.default.lgvqSB),
                ariaHidden: !0,
                children: (0, a.jsx)("button", {
                    type: "button",
                    className: uR.tY,
                    onClick: () => k.current?.click(),
                    "aria-label": eo.intl.string(es.default.lgvqSB),
                    children: (0, a.jsx)(et.H, { size: "custom", color: "currentColor", className: uR.WW }),
                }),
            }),
            (0, a.jsx)(ls.y, {
                autoFocus: !0,
                rows: 1,
                className: uR.hF,
                value: s,
                placeholder: "" === r ? eo.intl.string(es.default.MPPV1Q) : `Edit ${r}`,
                "aria-label": eo.intl.string(es.default.KCYqWL),
                onChange: (e) => u(e.target.value),
                onPaste: m ? void 0 : x,
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), e.stopPropagation(), d());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), A());
                },
            }),
            g.length > 0
                ? (0, a.jsx)("div", {
                      className: uR.ZO,
                      children: g.map((e) => (0, a.jsx)(iM, { draft: e, onRemove: v }, e.localId)),
                  })
                : null,
        ],
    });
}
var uD = n(192888);
function u$(e, t) {
    return (0, uD.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(uP, () => ({ status: "failed" }));
}
var uF = n(108308);
let uz = { x: 25, y: 21 };
function uO(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function uU(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function uG(e, t, n, l) {
    let r = uU(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function uq(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function uB(e) {
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
function uH(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        o = null != n && n === l ? t : null,
        { active: u, annotations: c } = e9(o),
        d = (0, tx.Zv)(o),
        m = (0, te.useHasAnyModalOpen)(),
        h = (0, f.bG)([tX.default], () => tX.default.getCurrentUser()),
        g = h?.id ?? null,
        [p, x] = i.useState(null),
        [v, b] = i.useState(null),
        [y, k] = i.useState(!1),
        [w, N] = i.useState(!1),
        [S, C] = i.useState(null),
        [E, I] = i.useState(!1),
        M = i.useRef(null),
        T = i.useRef(null),
        P = i.useRef(null),
        [R, L] = i.useState(null),
        [D, $] = i.useState(!1),
        [F, z] = i.useState(null),
        [O, U] = i.useState(null),
        G = i.useRef(!1),
        [q, B] = i.useState(!1),
        [H, K] = i.useState(null),
        V = u && !d && !m;
    null == F || (V && F.projectId === o) || z(null);
    let W = F?.projectId ?? null;
    (i.useEffect(() => {
        if (null != W) return () => lW(W, "design");
    }, [W]),
        i.useEffect(() => {
            if (!V) return;
            function e() {
                let e = (function (e) {
                    if (null == e) return null;
                    let t = e.getBoundingClientRect();
                    return t.width < 1 || t.height < 1
                        ? null
                        : { left: t.left, top: t.top, width: t.width, height: t.height };
                })(r());
                x((t) => (uO(t, e) ? t : e));
            }
            e();
            let t = window.setInterval(e, 250);
            return (
                window.addEventListener("resize", e),
                () => {
                    (window.clearInterval(t), window.removeEventListener("resize", e));
                }
            );
        }, [V, r]),
        i.useEffect(() => {
            if (!V || null == o) return;
            let e = !0,
                t = r();
            if (null == t) return void N(!0);
            (k(!0), N(!1));
            let n = `design-feedback-${crypto.randomUUID()}`;
            return (
                (0, uM.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                    (t) => {
                        if (!e) return;
                        k(!1);
                        let n = "completed" === t.status ? uB(t.response) : null;
                        null == n ? N(!0) : (b(n), e7(o, { url: n.url, title: n.title, viewport: n.viewport }));
                    },
                    () => {
                        e && (k(!1), N(!0));
                    },
                ),
                () => {
                    e = !1;
                }
            );
        }, [V, r, o]));
    let X = i.useRef(null);
    (i.useEffect(() => {
        if (!V || null == p || null == o) return;
        if (null == v) {
            X.current = p;
            return;
        }
        if (uO(X.current, p)) return;
        let e = window.setTimeout(() => {
            let e = r();
            if (null == e) return;
            X.current = p;
            let t = [];
            for (let e = 0; e < c.length; e += 24) t.push(c.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, n) => {
                    let l = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, uM.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !Z.current) return;
                        let l = uB(e.response);
                        null != l && (b(l), e7(o, { url: l.url, title: l.title, viewport: l.viewport }));
                        let r = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let a = u_(e.element);
                            null != a && r.set(l.id, a);
                        }),
                            (n = e3(o)).active &&
                                0 !== r.size &&
                                e4(o, {
                                    ...n,
                                    annotations: n.annotations.map((e) => {
                                        let t = r.get(e.id);
                                        return null == t ? e : { ...e, target: t };
                                    }),
                                }));
                    });
                }));
        }, 200);
        return () => window.clearTimeout(e);
    }, [V, p, v, c, o, r]),
        i.useEffect(() => {
            if (!V)
                return () => {
                    (C(null), z(null), K(null), b(null));
                };
        }, [V]));
    let J = i.useRef(null),
        Y = i.useRef(null),
        Q = i.useRef(!1),
        Z = i.useRef(!1);
    i.useEffect(() => {
        ((Z.current = V), V || ((J.current = null), (Y.current = null), (P.current = null), I(!1)));
    }, [V]);
    let ee = i.useCallback(
            function e() {
                if (Q.current) return;
                let t = J.current;
                if (null == t) return;
                J.current = null;
                let n = r();
                null != n &&
                    ((Q.current = !0),
                    u$(n, t).then((t) => {
                        if (((Q.current = !1), Z.current)) {
                            if ("picked" !== t.status || uY(t.target, ei.current.rect, ei.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? C(null)
                                    : "unsupported" === t.status && $(!0);
                            else {
                                let e = eW(t.target);
                                (L((t) => (uJ(t, e) ? t : e)),
                                    C((e) => {
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
            let e = !G.current;
            (U({ at: F.at, label: F.label, draft: F.draft, instant: e }), B(e), z(null));
        }, [F]);
    (i.useEffect(() => {
        if (!q) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => B(!1));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [q]),
        i.useEffect(() => {
            if (null == O) return;
            let e = setTimeout(() => U(null), uW);
            return () => clearTimeout(e);
        }, [O]));
    let el = null == v || null == p || v.viewport.width < 1 ? 1 : p.width / v.viewport.width,
        er = null != v || w,
        ea = i.useMemo(() => v?.elements ?? [], [v]),
        ei = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        ei.current = { rect: p, scale: el };
    }, [p, el]);
    let eu = i.useCallback(
            (e, t, n) => {
                null != o &&
                    (lW(o, "design"),
                    K(null),
                    (G.current = !1),
                    z({ projectId: o, target: e, anchor: t, draft: "", at: n, label: eW(e) }));
            },
            [o],
        ),
        ec = i.useCallback((e, t) => ({ x: (e.clientX - t.left) / el, y: (e.clientY - t.top) / el }), [el]),
        ed = i.useCallback(() => {
            let e = P.current;
            if (null == e) return;
            let t = M.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let n = T.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    i.useLayoutEffect(ed);
    let ef = i.useCallback(
            (e) => {
                if (null == p || null != H) return;
                if (((P.current = { x: e.clientX, y: e.clientY }), ed(), I(!0), null != F)) {
                    (Math.abs(e.clientX - F.at.x) > uX || Math.abs(e.clientY - F.at.y) > uX) && (G.current = !0);
                    return;
                }
                if (!er) return void C(null);
                let t = ec(e, p);
                if (D) {
                    let e = (function (e, t, n) {
                            let l = null,
                                r = 1 / 0;
                            for (let a of e) {
                                let { x: e, y: i, width: s, height: o } = a.rect;
                                if (s < 1 || o < 1 || t < e || n < i || t > e + s || n > i + o) continue;
                                let u = s * o;
                                u < r && ((l = a), (r = u));
                            }
                            return l;
                        })(ea, t.x, t.y),
                        n = null != e && uY(e, p, el) ? null : e;
                    if (null != n) {
                        let e = eW(n);
                        L((t) => (uJ(t, e) ? t : e));
                    }
                    C((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = Y.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((Y.current = n), (J.current = n), ee());
            },
            [p, el, er, ec, D, ea, F, H, ed, ee],
        ),
        em = null == H ? null : c.find((e) => e.id === H.id),
        eh = V && (E || F?.target.marker != null || em?.target.marker != null);
    i.useEffect(() => {
        if (eh)
            return () => {
                let e = r();
                null != e && u$(e, uT);
            };
    }, [eh, r]);
    let eg = i.useCallback(() => {
        (I(!1), C(null), (Y.current = null), (J.current = null));
    }, []);
    i.useEffect(() => {
        if (!V || !E || !er || D || null != F || null != H) return;
        let e = P.current,
            { rect: t, scale: n } = ei.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((Y.current = l), (J.current = l), ee());
    }, [V, E, er, D, F, H, ee]);
    let ep = i.useCallback(
            (e) => {
                if (null != F || null != H) {
                    (et(), K(null));
                    return;
                }
                if (null == S || null == p) return;
                let t = ec(e, p);
                eu(
                    S,
                    (function (e, t, n) {
                        let { x: l, y: r, width: a, height: i } = e.rect;
                        return a < 1 || i < 1
                            ? eK
                            : { x: Math.min(1, Math.max(0, (t - l) / a)), y: Math.min(1, Math.max(0, (n - r) / i)) };
                    })(S, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [S, p, ec, F, H, eu, et],
        ),
        ex = i.useCallback(() => {
            null != o && (C(null), e6(o));
        }, [o]),
        ev = i.useCallback(() => {
            null != o &&
                (null != F
                    ? et()
                    : H?.confirmingRemove === !0
                      ? K({ ...H, confirmingRemove: !1 })
                      : null != H
                        ? K(null)
                        : ex());
        }, [o, F, H, et, ex]),
        ej = i.useRef(ev),
        eb = i.useRef(ex);
    i.useLayoutEffect(() => {
        ((ej.current = ev), (eb.current = ex));
    });
    let ey = i.useRef(null);
    i.useEffect(() => {
        if (V)
            return (
                uI.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        uI.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), ej.current());
        }
        function t(e) {
            let t = e.target;
            (0, tL.vq)(t) &&
                ey.current?.contains(t) !== !0 &&
                s?.current?.contains(t) !== !0 &&
                !(function (e) {
                    try {
                        return ((0, uE.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) &&
                eb.current();
        }
    }, [V, s]);
    let ek = i.useCallback(
            (e) => {
                if (null == o) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), ev());
                    return;
                }
                if (null != F || null != H || 0 === ea.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    n = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || n) {
                    e.preventDefault();
                    let n = null == S ? -1 : ea.findIndex((e) => e.ref === S.ref);
                    C(ea[(n + (t ? 1 : -1) + ea.length) % ea.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != S &&
                    (e.preventDefault(),
                    eu(S, eK, { x: (p?.left ?? 0) + S.rect.x * el, y: (p?.top ?? 0) + S.rect.y * el }));
            },
            [o, F, H, ea, S, eu, ev, p, el],
        ),
        ew = i.useCallback(
            (e) => {
                null == o ||
                    null == F ||
                    ((eV(F.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, en.dv)(
                            o,
                            (function (e, t) {
                                let { kind: n, name: l } = eW(e),
                                    r = [n, l].filter((e) => "" !== e).join(": ");
                                return `${eY}${r}${eQ}${eJ(e)}
${t.trim()}`;
                            })(F.target, F.draft),
                            e,
                        ),
                        et(),
                        C(null)));
            },
            [o, F, et],
        ),
        eA = i.useCallback((e) => (null == o ? Promise.reject(Error("no project")) : (0, en.vX)(o, e)), [o]),
        eN = i.useCallback(() => {
            if (null != o && null != H && null != g && eV(H.draft)) {
                var e, t;
                let n, l;
                ((e = H.id),
                    (t = H.draft.trim()),
                    null != (l = (n = e3(o)).annotations.find((t) => t.id === e)) &&
                        e5(l, g) &&
                        e4(o, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    K({ ...H, editing: !1 }));
            }
        }, [o, H, g]),
        eS = i.useCallback(() => {
            if (null != o && null != H && null != g) {
                var e;
                let t, n;
                ((e = H.id),
                    null != (n = (t = e3(o)).annotations.find((t) => t.id === e)) &&
                        e5(n, g) &&
                        e4(o, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    K(null));
            }
        }, [o, H, g]),
        eC = u
            ? y
                ? eo.intl.string(es.default["Eb/YV9"])
                : w
                  ? eo.intl.string(es.default.FD30bh)
                  : eo.intl.formatToPlainString(es.default.dTSqLF, { count: c.length })
            : "",
        eE = V && null != p,
        eI = E && null == H,
        eM = F?.target ?? em?.target ?? null,
        e_ = F ?? O,
        eT = F ?? (O?.instant === !0 ? null : O),
        eP =
            null != em && null != p
                ? (function (e, t) {
                      let { left: n, top: l } = uq(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(uG(em.target, em.anchor, p, el), p)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (em?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = em;
            u$(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [em, r]),
        (0, uC.createPortal)(
            (0, a.jsxs)("div", {
                ref: ey,
                className: uF.Li,
                children: [
                    (0, a.jsx)("div", {
                        className: uF.y4,
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-design-announcer",
                        children: eC,
                    }),
                    eE
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)("div", {
                                      className: uF.MT,
                                      style: { left: p.left, top: p.top, width: p.width, height: p.height },
                                      "data-plain-cursor": eI ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": eo.intl.string(es.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: ef,
                                      onMouseLeave: eg,
                                      onClick: ep,
                                      onKeyDown: ek,
                                  }),
                                  null != S && null == S.marker && null == F && null == H
                                      ? (0, a.jsx)(uQ, { box: uU(S, p, el) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: M,
                                      className: uF.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: uF.xz,
                                          "data-shown": null != S && null == H && null == F ? "" : void 0,
                                          "data-instant": q ? "" : void 0,
                                          children: (0, a.jsxs)(j.E, {
                                              variant: "text-xs/medium",
                                              className: uF.Ux,
                                              children: [
                                                  null == R
                                                      ? null
                                                      : (0, a.jsx)("span", { className: uF.Tl, children: R.kind }),
                                                  null == R || "" === R.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: uF.kh,
                                                            children: [" ", R.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: T,
                                      className: uF.Y,
                                      children: eI ? (0, a.jsx)("div", { className: uF.u }) : null,
                                  }),
                                  null == eT
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: uF.aZ,
                                            style: {
                                                transform: `translate3d(${eT.at.x + 20}px, ${eT.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: uF.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == F ? "" : void 0,
                                                children: (0, a.jsxs)(j.E, {
                                                    variant: "text-xs/medium",
                                                    className: uF.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: uF.Tl,
                                                            children: eT.label.kind,
                                                        }),
                                                        "" === eT.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: uF.kh,
                                                                  children: [" ", eT.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eM && null == eM.marker
                                      ? (0, a.jsx)("div", { className: uF.D0, style: uU(eM, p, el), "aria-hidden": !0 })
                                      : null,
                                  c.map((e, t) => {
                                      let n = uG(e.target, e.anchor, p, el),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: uF.xL,
                                              style: { ...uq(n, p), width: 24, height: 24 },
                                              "aria-label": eo.intl.formatToPlainString(es.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: eX(e.target),
                                              }),
                                              "aria-expanded": H?.id === e.id,
                                              "data-testid": "conjure-design-marker",
                                              onMouseEnter: () => {
                                                  null == F && K(l);
                                              },
                                              onFocus: () => {
                                                  null == F && K(l);
                                              },
                                              onClick: (e) => {
                                                  (e.stopPropagation(), et(), K(l));
                                              },
                                              children: (0, a.jsx)(uK, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == e_ || null == o
                                      ? null
                                      : (0, a.jsx)(uL, {
                                            projectId: o,
                                            at: { x: e_.at.x + 20, y: e_.at.y + 20 },
                                            bounds: p,
                                            kind: e_.label.kind,
                                            value: e_.draft,
                                            canSubmit: null != F && eV(e_.draft),
                                            onChange: (e) => {
                                                null != F && z({ ...F, draft: e });
                                            },
                                            onSubmit: ew,
                                            onDismiss: et,
                                            onUploadFile: eA,
                                            closing: null == F,
                                        }),
                                  null != em && null != H && null != eP
                                      ? (0, a.jsxs)(uV, {
                                            point: eP,
                                            frame: p,
                                            authorId: em.authorId,
                                            title: eX(em.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                H.confirmingRemove ? K({ ...H, confirmingRemove: !1 }) : K(null);
                                            },
                                            onMouseLeave: () => {
                                                H.editing || H.confirmingRemove || K(null);
                                            },
                                            children: [
                                                H.editing
                                                    ? (0, a.jsx)(_.f, {
                                                          autoFocus: !0,
                                                          label: eo.intl.string(es.default.KCYqWL),
                                                          hideLabel: !0,
                                                          value: H.draft,
                                                          maxLength: 1e3,
                                                          rows: 3,
                                                          onChange: (e) => K({ ...H, draft: e }),
                                                          onKeyDown: (e) => {
                                                              "Enter" !== e.key ||
                                                                  e.shiftKey ||
                                                                  (e.preventDefault(), eN());
                                                          },
                                                      })
                                                    : (0, a.jsx)(j.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-default",
                                                          className: uF.aC,
                                                          children: em.comment,
                                                      }),
                                                e5(em, g)
                                                    ? (0, a.jsx)("div", {
                                                          className: uF.eB,
                                                          children: H.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(j.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: uF.nv,
                                                                            children: eo.intl.string(es.default.wOHvts),
                                                                        }),
                                                                        (0, a.jsx)(A.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: eo.intl.string(es.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                K({ ...H, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, a.jsx)(A.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: eo.intl.string(es.default.friIzR),
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
                                                                            text: eo.intl.string(es.default.friIzR),
                                                                            onClick: () =>
                                                                                K({
                                                                                    ...H,
                                                                                    editing: !1,
                                                                                    confirmingRemove: !0,
                                                                                }),
                                                                        }),
                                                                        H.editing
                                                                            ? (0, a.jsx)(A.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !eV(H.draft),
                                                                                  text: eo.intl.string(
                                                                                      es.default.iicRP9,
                                                                                  ),
                                                                                  onClick: eN,
                                                                              })
                                                                            : (0, a.jsx)(A.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: eo.intl.string(
                                                                                      es.default["6eW9lg"],
                                                                                  ),
                                                                                  onClick: () =>
                                                                                      K({
                                                                                          ...H,
                                                                                          editing: !0,
                                                                                          draft: em.comment,
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
function uK(e) {
    let { authorId: t } = e,
        n = (0, f.bG)([tX.default], () => tX.default.getUser(t), [t]);
    return (0, a.jsx)(ad.eu, {
        src: null == n ? null : ah.Ay.getUserAvatarURL(n),
        size: af._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function uV(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        { point: u, frame: c, authorId: d, title: f, testId: m, onDismiss: h, onMouseLeave: g, children: p } = e,
        x = i.useRef(null),
        v = i.useRef(null),
        [b, y] = i.useState(uz);
    i.useLayoutEffect(() => {
        let e = x.current?.getBoundingClientRect(),
            t = v.current?.getBoundingClientRect();
        if (null == e || null == t || e.width < 1 || t.width < 1) return;
        let n = { x: t.left + t.width / 2 - e.left, y: t.top + t.height / 2 - e.top };
        y((e) => (0.5 > Math.abs(e.x - n.x) && 0.5 > Math.abs(e.y - n.y) ? e : n));
    }, []);
    let {
            left: k,
            top: w,
            originX: A,
            originY: N,
        } = ((n = Math.max((t = c.left + 8), c.left + c.width - 300 - 8)),
        (r = Math.max((l = c.top + 8), c.top + c.height - 160 - 8)),
        (s = Math.min(Math.max(u.x - b.x, t), n)),
        { left: s, top: (o = Math.min(Math.max(u.y - b.y, l), r)), originX: u.x - s, originY: u.y - o }),
        S = { left: k, top: w, "--custom-conjure-card-origin-x": `${A}px`, "--custom-conjure-card-origin-y": `${N}px` };
    return (0, a.jsxs)("div", {
        ref: x,
        className: uF.Nr,
        style: S,
        "data-testid": m,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, a.jsxs)("div", {
                className: uF.MY,
                children: [
                    (0, a.jsx)("span", { ref: v, className: uF.ip, children: (0, a.jsx)(uK, { authorId: d }) }),
                    (0, a.jsx)(j.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: uF.Qc,
                        children: f,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: uF.zI, children: p }),
        ],
    });
}
let uW = 300,
    uX = 2;
function uJ(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function uY(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function uQ(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: uF.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var uZ = n(659723),
    u0 = n(697744),
    u1 = n(130324);
function u2(e) {
    let t = (0, u0.c)(),
        { events: n, getDuration: l } = t;
    i.useEffect(() => {
        let e = null,
            t = 0;
        return (
            (e = requestAnimationFrame(function r() {
                ((e = null), null != l()) ? n.onMouseEnter() : t++ < 120 && (e = requestAnimationFrame(r));
            })),
            () => {
                null != e && cancelAnimationFrame(e);
            }
        );
    }, [n, l]);
    let r = (0, iq.A)();
    return (
        i.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function u3(e) {
    let { className: t } = e,
        { Component: n, events: l } = u2(3e4);
    return (0, a.jsxs)("div", {
        className: t,
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(j.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: u1.o,
                children: eo.intl.string(es.default.AyiQEp),
            }),
        ],
    });
}
var u4 = n(251363),
    u6 = n(944142),
    u7 = n(532247),
    u5 = n(501628);
function u8(e) {
    let { progress: t } = e,
        { Component: n } = u2(1500),
        l = eB.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(j.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: u5.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: u5.PM,
                            "data-state": n < t.stepIndex ? "done" : n === t.stepIndex ? "current" : "todo",
                        },
                        n,
                    ),
                ),
            }),
            l && null != t.stepLabel
                ? (0, a.jsx)(j.E, { variant: "text-xs/normal", color: "text-overlay-light", children: t.stepLabel })
                : null,
        ],
    });
}
function u9(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        o = (0, f.bG)([u6.A], () => (s ? u6.A.getLiveReload(t) : null), [s, t]),
        u = (0, G.A)(n, r)?.id ?? null,
        c = o?.phase ?? null,
        d = (function (e, t) {
            let n = (0, u7.dv)(e),
                [l, r] = i.useState(null),
                [a, s] = i.useState(n);
            a !== n && (s(n), r(null == n ? (0, u7.QP)(e, a) : null));
            let o = (0, f.bG)(
                    [tT.A],
                    () => {
                        let e = tT.A.getFrame(t);
                        return (0, tO.x1)(e) && e.data.proxyTicketRefreshing;
                    },
                    [t],
                ),
                u = i.useRef(o),
                c = i.useRef(!1);
            return (
                i.useEffect(() => {
                    ((u.current = o), o && (c.current = !0));
                }, [o]),
                i.useEffect(() => {
                    if (null == l) return;
                    function e() {
                        return r(null);
                    }
                    function n(n) {
                        null != n.target && n.target === (0, u4.o)(null, t) && e();
                    }
                    ((c.current = u.current), document.addEventListener("load", n, !0));
                    let a = window.setTimeout(() => {
                            c.current || e();
                        }, 4e3),
                        i = window.setTimeout(e, 15e3);
                    return () => {
                        (document.removeEventListener("load", n, !0), window.clearTimeout(a), window.clearTimeout(i));
                    };
                }, [l, t]),
                l
            );
        })(c, u),
        m = (0, u7.h_)(c, o?.step ?? null, d);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(k.A, { tag: "div", role: "status", "aria-live": "polite", children: m?.title ?? "" }),
            null != m
                ? (0, a.jsx)("div", {
                      className: u5.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(u8, { progress: m }),
                  })
                : null,
        ],
    });
}
var ce = n(343030),
    ct = n(317608),
    cn = n(338941),
    cl = n(964404);
let cr = { width: 1 / 0, height: 1 / 0 };
function ca(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cr;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var ci = n(702083);
function cs(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, f.cf)([tg.A], () => ({
            mobile: tg.A.isBuilderPreviewMobile(),
            landscape: tg.A.isBuilderPreviewLandscape(),
        })),
        r = i.useRef(null),
        [s, u] = i.useState(null);
    i.useLayoutEffect(() => {
        let e = r.current;
        if (null == e) return;
        function t() {
            if (null == e) return;
            let t = { width: e.clientWidth, height: e.clientHeight };
            u((e) => (e?.width === t.width && e.height === t.height ? e : t));
        }
        t();
        let n = new ResizeObserver(t);
        return (n.observe(e), () => n.disconnect());
    }, []);
    let c = null != s && s.width > 0 ? s : null,
        d = n ? ca(l, c ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: o()(ci.dw, { [ci.PQ]: null != d }),
        children: (0, a.jsx)("div", { className: o()(ci.R9, { [ci.Vg]: null != d }), style: d ?? void 0, children: t }),
    });
}
var co = n(347927);
function cu(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: o()(co.Bf, l && co.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: co.Ux,
                children: [
                    (0, a.jsx)(E.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    null != n
                        ? (0, a.jsx)(j.E, { variant: "text-md/medium", color: "text-subtle", children: n })
                        : null,
                ],
            }),
            r,
        ],
    });
}
var cc = n(957272);
function cd(e) {
    let { applicationId: t, surface: n, frameOverlay: l } = e,
        { frame: r, state: s } = (0, cn.A)({ applicationId: t, surface: n }),
        o = (0, tO.VA)(t, n);
    if (
        (i.useEffect(
            () => (
                !(function (e) {
                    let t = tT.A.getFrame(e);
                    if (null == t || tP.A.getWindowOpen(ex.MLl.ACTIVITY_POPOUT)) return;
                    let n = tT.A.getMainFrame()?.id === e;
                    t.intent === tO.sV.MAIN
                        ? (n || U.A.promoteFrame(e), U.A.resetFrameLayoutModes(e))
                        : n && U.A.clearMainFrameSlot();
                })(o),
                () => {
                    let e;
                    null != (e = tT.A.getFrame(o)) &&
                        ((0, tO.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        cl.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === tO.sV.INLINE && U.A.promoteFrame(o),
                              U.A.updateFrameLayoutMode({ frameId: o, layoutMode: tO.y0.PIP }))
                            : e.intent === tO.sV.MAIN && U.A.demoteMainFrame(o));
                }
            ),
            [o],
        ),
        s === cn.n.Launched)
    ) {
        let e = (0, a.jsx)(ct.A, { frameId: r.id, level: ce.A.WithinAppContent, className: cc.Z7, overlay: l });
        return (0, tb.Q5)(n) ? (0, a.jsx)(cs, { children: e }) : e;
    }
    return (0, a.jsx)(cf, { state: s });
}
function cf(e) {
    let { state: t } = e;
    switch (t) {
        case cn.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: cc.qs,
                children: (0, a.jsx)(cu, {
                    title: eo.intl.string(es.default["9kpdo7"]),
                    body: eo.intl.string(es.default.iIA8Nj),
                }),
            });
        case cn.n.NoApplication:
            return (0, a.jsx)(u3, { className: cc.qs });
        case cn.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: cc.qs,
                children: (0, a.jsx)(cu, {
                    title: eo.intl.string(es.default["7k4GyN"]),
                    body: eo.intl.string(es.default.zdIy3R),
                }),
            });
        case cn.n.Error:
            return (0, a.jsxs)("div", {
                className: cc.qs,
                children: [
                    (0, a.jsx)(E.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: eo.intl.string(es.default.lTPbnG),
                    }),
                    (0, a.jsx)(j.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: cc.tj,
                        children: eo.intl.string(es.default.e6GiAZ),
                    }),
                ],
            });
        case cn.n.AwaitingLaunch:
        case cn.n.Loading:
            return (0, a.jsx)("div", { className: cc.qs, children: (0, a.jsx)(w.y, {}) });
    }
}
var cm = n(308528),
    ch = n(334738),
    cg = n(688438),
    cp = n(355622),
    cx = n(365971),
    cv = n(703462);
function cj(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: cv.f,
        children: [
            (0, a.jsx)(rH.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(j.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function cb() {
    return (0, a.jsx)("div", { className: cv.f, children: (0, a.jsx)(w.y, {}) });
}
function cy(e) {
    let t,
        n,
        { previewApplicationId: l } = e,
        { data: r, isLoading: s } = (0, F.YY)(l),
        o = r?.bot?.id ?? null,
        u = (0, f.bG)([V.A], () => {
            if (null == o) return null;
            let e = V.A.getDMFromUserId(o);
            return null != e ? V.A.getChannel(e) : null;
        });
    ((t = u?.id ?? null),
        i.useEffect(() => {
            null != t && cm.A.preload(ex.ME, t);
        }, [t]),
        (n = (0, f.bG)([iU.A], () => iU.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, cx.Xg)();
            return (
                (0, ch.yl)(t, e),
                () => {
                    (0, ch.dm)(t, e);
                }
            );
        }, [t, n]));
    let [c, d] = i.useState(null),
        m = null != o && c === o;
    return (i.useEffect(() => {
        if (null == o || null != u) return;
        let e = !1;
        return (
            cm.A.openPrivateChannel({ recipientIds: o, navigateToChannel: !1 }).catch(() => {
                e || d(o);
            }),
            () => {
                e = !0;
            }
        );
    }, [o, u]),
    s && null == r)
        ? (0, a.jsx)(cb, {})
        : null == o || m
          ? (0, a.jsx)(cj, { message: eo.intl.string(es.default["VP/O8s"]) })
          : null == u
            ? (0, a.jsx)(cb, {})
            : (0, a.jsx)("div", {
                  className: cv.g,
                  children: (0, a.jsx)(cg.A, { channel: u, guild: null, chatInputType: cp.oU.SIDEBAR }, u.id),
              });
}
var ck = n(887909),
    cw = n(570962),
    cA = n(998475);
function cN(e) {
    let {
        label: t,
        title: n,
        subtitle: l,
        header: r,
        body: i,
        actions: s,
        nextStep: u,
        appDetails: c,
        hasContentBackground: d,
        noPadding: f,
        obscured: m,
    } = (0, ck.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, a.jsxs)("section", {
        className: cA.Nr,
        "aria-label": t,
        children: [
            (0, a.jsx)("div", {
                className: cA.rf,
                children: (0, a.jsx)(cw.A, {
                    obscured: !0 === m,
                    children: (0, a.jsxs)("div", {
                        className: cA.Gq,
                        children: [
                            null != n
                                ? (0, a.jsxs)("div", {
                                      className: cA.z3,
                                      children: [
                                          (0, a.jsx)(E.D, {
                                              variant: "heading-lg/bold",
                                              color: "text-strong",
                                              children: n,
                                          }),
                                          null != l
                                              ? (0, a.jsx)(j.E, {
                                                    variant: "text-md/normal",
                                                    color: "text-default",
                                                    children: l,
                                                })
                                              : null,
                                      ],
                                  })
                                : null,
                            r,
                            (0, a.jsxs)("div", {
                                className: o()(cA.Qs, d ? cA.cw : null, f ? cA.pN : null),
                                children: [i, null == u ? c : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != s && s.length > 0
                ? (0, a.jsx)("div", {
                      className: cA.o1,
                      children: s.map((e, t) => (0, a.jsx)(A.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var cS = n(765671),
    cC = n(269094),
    cE = n(582063);
function cI(e) {
    let { applicationId: t, size: n } = e,
        l = (0, cn.A)({ applicationId: t, surface: tO.ZN });
    return (i.useEffect(() => {
        let e = (0, tO.VA)(t, tO.ZN);
        return () => (0, tS.r)(e);
    }, [t]),
    l.state !== cn.n.Launched)
        ? (0, a.jsx)(cf, { state: l.state })
        : l.frame.data.proxyTicketRefreshing
          ? (0, a.jsx)(cf, { state: cn.n.Loading })
          : (0, a.jsx)(cM, { lifecycle: l, size: n });
}
function cM(e) {
    let { lifecycle: t, size: n } = e,
        { ref: l, width: r, height: i } = (0, cS.Ay)(),
        s = (function (e, t) {
            let { width: n, height: l } = e;
            return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
        })({ width: r, height: i }, n);
    return (0, a.jsxs)("div", {
        className: cE.JH,
        children: [
            (0, a.jsx)("div", { className: cE.LO, "aria-hidden": !0 }),
            (0, a.jsx)("div", {
                ref: l,
                className: cE.dw,
                children: (0, a.jsx)("div", {
                    className: cE.HL,
                    style: {
                        "--custom-conjure-overlay-widget-width": `${n.width}px`,
                        "--custom-conjure-overlay-widget-height": `${n.height}px`,
                        "--custom-conjure-overlay-widget-scale": String(s),
                    },
                    children: (0, a.jsx)(cC.A, { frame: t.frame, application: t.application, className: cE.Gt }),
                }),
            }),
        ],
    });
}
var c_ = n(409478),
    cT = n(652227);
function cP(e) {
    let {
        applicationId: t,
        previewApplicationId: n,
        surface: l,
        previewReady: r,
        previewGate: i,
        availability: s,
        activeMode: o,
        widgetApplicationId: u,
        overlayWidgetSize: c = tp,
        frameOverlay: d,
    } = e;
    return i?.type === "checking"
        ? (0, a.jsx)("div", { className: cT.q, children: (0, a.jsx)(w.y, {}) })
        : i?.type === "permissions" && null != i.onAddPreviewBot
          ? (0, a.jsx)("div", {
                className: cT.q,
                children: (0, a.jsx)(cu, {
                    title: eo.intl.string(es.default.SWXbpN),
                    children: (0, a.jsx)(A.$, {
                        size: "md",
                        text: eo.intl.string(es.default.FH2Udn),
                        onClick: i.onAddPreviewBot,
                    }),
                }),
            })
          : i?.type === "permissions"
            ? (0, a.jsx)("div", {
                  className: cT.q,
                  children: null == i.authorizeProps ? (0, a.jsx)(w.y, {}) : (0, a.jsx)(cN, { ...i.authorizeProps }),
              })
            : r
              ? null == t
                  ? null
                  : (0, a.jsxs)("div", {
                        className: cT.R,
                        children: [
                            (0, tj.yf)(s, o) ? (0, a.jsx)(cd, { applicationId: t, surface: l, frameOverlay: d }) : null,
                            "widget" === o && null != u
                                ? "unavailable-authorization-revoked" === s.profileState
                                    ? (0, a.jsx)("div", {
                                          className: cT.q,
                                          children: (0, a.jsx)(cu, {
                                              wide: !0,
                                              title: eo.intl.string(es.default["08U+YO"]),
                                              body: eo.intl.string(es.default.pKBfrc),
                                          }),
                                      })
                                    : (0, a.jsx)(c_.A, { applicationId: u })
                                : null,
                            "overlay" === o && s.modes.includes("overlay")
                                ? (0, a.jsx)(cI, { applicationId: t, size: c })
                                : null,
                            "bot" === o && null != n ? (0, a.jsx)(cy, { previewApplicationId: n }) : null,
                        ],
                    })
              : (0, a.jsx)(u3, { className: cT.q });
}
var cR = n(175841),
    cL = n(750506),
    cD = n(867193),
    c$ = n(539197),
    cF = n(977020);
function cz(e) {
    let { projectId: t } = e,
        n = (0, c$.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, c$.Ie)(e);
                        n((e) =>
                            null != e &&
                            e.left === t.left &&
                            e.top === t.top &&
                            e.width === t.width &&
                            e.height === t.height
                                ? e
                                : t,
                        );
                    }
                    t();
                    let l = window.setInterval(t, 250);
                    return (
                        window.addEventListener("resize", t),
                        () => {
                            (window.clearInterval(l), window.removeEventListener("resize", t));
                        }
                    );
                }, [e]),
                null == e ? null : t
            );
        })(n?.iframe ?? null);
    if (null == n || null == l) return null;
    let { left: r, top: s, width: u, height: c, scale: d } = l;
    function f(e, t) {
        return { "--custom-conjure-cursor-x": `${e * d}px`, "--custom-conjure-cursor-y": `${t * d}px` };
    }
    return (0, a.jsxs)("div", {
        className: cF.$Q,
        style: { left: r, top: s, width: u, height: c, "--custom-conjure-cursor-scale": d },
        "aria-hidden": !0,
        [c$.t$]: "",
        children: [
            n.presses > 0
                ? (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)("div", { className: o()(cF.hN, cF.vW), style: f(n.pressX, n.pressY) }),
                              (0, a.jsx)("div", { className: o()(cF.hN, cF.A7), style: f(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, a.jsx)("svg", {
                className: o()(cF.UE, { [cF.SP]: n.shown, [cF.Vq]: n.pressed, [cF.GP]: n.dipping }),
                style: f(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, a.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var cO = n(417760);
function cU(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function cG(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function cq(e) {
    let { phase: t, projectId: n, onOpenPublishedApp: l, compact: r } = e,
        { stop: s, stopping: u } = (function (e) {
            let t = (0, f.bG)([ej.Ay], () => null != e && ej.Ay.isThinking(e)),
                [n, l] = i.useState(!1),
                [r, a] = i.useState(t);
            (t !== r && (a(t), t || l(!1)),
                i.useEffect(() => {
                    if (!n) return;
                    let e = setTimeout(() => l(!1), 5e3);
                    return () => clearTimeout(e);
                }, [n]));
            let s = i.useCallback(() => {
                null != e && (l(!0), (0, en.fu)(e));
            }, [e]);
            return { stop: t ? s : null, stopping: n };
        })(n),
        c = (0, tx.CU)(n),
        d = "controlling" === t,
        m = eo.intl.string(d ? (c ? es.default["VJW/5P"] : es.default["+hD2Iz"]) : es.default["h+i1r9"]),
        h =
            null != l
                ? (0, a.jsx)(A.$, {
                      variant: "overlay-secondary",
                      size: "sm",
                      text: eo.intl.string(es.default["1NcO7H"]),
                      onClick: l,
                  })
                : null,
        g =
            null != s
                ? (0, a.jsx)(A.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: eo.intl.string(es.default.oU59sU),
                      loading: u,
                      onClick: s,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return r
        ? (0, a.jsxs)("div", {
              className: o()(cO.M0, cO.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  d
                      ? (0, a.jsx)(sQ.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(cR.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(j.E, { variant: "text-sm/semibold", color: "none", className: cO.ID, children: m }),
                  d ? (0, a.jsx)(k.A, { children: eo.intl.string(es.default.fg1sor) }) : null,
                  d ? (0, a.jsxs)("div", { className: cO.lC, children: [h, g] }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: cO.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: cO.sp,
                      children: [
                          (0, a.jsx)(cR.SparklesIcon, { size: "sm", color: "currentColor" }),
                          d ? (0, a.jsx)(sQ.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: cO.f4,
                              children: [
                                  (0, a.jsx)(j.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: cO.w9,
                                      children: m,
                                  }),
                                  d
                                      ? (0, a.jsx)(j.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: cO.Rb,
                                            children: eo.intl.string(es.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  d ? (0, a.jsxs)("div", { className: cO.lC, children: [h, g] }) : null,
              ],
          });
}
function cB(e) {
    let {
            projectId: t,
            applicationId: n,
            previewApplicationId: l,
            resolveTarget: r,
            frameId: s,
            onOpenPublishedApp: o = null,
        } = e,
        u = (0, tx.Zv)(null != n && n === l ? t : null),
        c = (function (e) {
            let [t, n] = i.useState(e),
                [l, r] = i.useState(!1);
            return (e !== t && (n(e), r(!e)),
            i.useEffect(() => {
                if (!l) return;
                let e = setTimeout(() => r(!1), 2400);
                return () => clearTimeout(e);
            }, [l]),
            e)
                ? "controlling"
                : l
                  ? "handoff"
                  : "idle";
        })(u),
        d = (0, te.useHasAnyModalOpen)(),
        f = tz(s);
    i.useEffect(() => {
        u &&
            f &&
            null != s &&
            (function (e) {
                if (!t$(e)) return;
                let t = tD(e);
                null != t && (0, tR.sP)(t);
            })(s);
    }, [u, f, s]);
    let [m, h] = i.useState(null),
        [g, p] = i.useState(null),
        [x, v] = i.useState(null),
        j = "idle" !== c;
    i.useEffect(() => {
        if (!j) return;
        function e() {
            let e = cU(r());
            h((t) => (cG(t, e) ? t : e));
            let t = null == g ? null : cU(g);
            (v((e) => (cG(e, t) ? e : t)), null != g && (0, cD.C)(g.getBoundingClientRect().height));
        }
        e();
        let t = window.setInterval(e, 250);
        window.addEventListener("resize", e);
        let n = null == g ? null : new ResizeObserver(e);
        return (
            null != g && n?.observe(g),
            () => {
                (window.clearInterval(t),
                    window.removeEventListener("resize", e),
                    n?.disconnect(),
                    null != g && (0, cD.C)(0));
            }
        );
    }, [j, r, g]);
    let b = "idle" !== c && null != m,
        y = b && "controlling" === c && !d,
        k = null != m && m.width < 420,
        w = null == m ? void 0 : { left: m.left, top: m.top, width: m.width, height: m.height },
        A =
            null == m
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
                  })(m, x),
        N = (function () {
            let [e] = i.useContext(cL.uY),
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
            b
                ? (0, a.jsx)("div", {
                      ref: p,
                      className: cO.D,
                      "data-phase": c,
                      children: (0, a.jsx)("div", {
                          className: cO.QF,
                          children: (0, a.jsx)(cq, { phase: c, projectId: t, onOpenPublishedApp: o, compact: k }),
                      }),
                  })
                : null,
            (0, uC.createPortal)(
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("div", {
                        className: cO.y4,
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-control-announcer",
                        children:
                            "controlling" === c
                                ? eo.intl.string(es.default.oWcemF)
                                : "handoff" === c
                                  ? eo.intl.string(es.default["h+i1r9"])
                                  : "",
                    }),
                }),
                document.body,
            ),
            y
                ? (0, uC.createPortal)(
                      (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: cO.ys,
                                  style: A,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: cO.om,
                                  style: w,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(cz, { projectId: t }),
                          ],
                      }),
                      N,
                  )
                : null,
        ],
    });
}
var cH = n(399503),
    cK = n(853555),
    cV = n(558960),
    cW = n(187645);
let cX = new Map(),
    cJ = !1;
function cY() {
    let e = new Map();
    for (let t of new Set([...ej.Ay.getActivityOrderedProjectIds(), ...(0, tx.T7)()])) {
        if (!ej.Ay.isThinking(t) && !(0, tx.wK)(t)) continue;
        let n = (function (e) {
            let t = eN.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = (0, tb.Rc)(t);
            return (0, tO.x1)(n) ? n.id : null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, r] of [...cX]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            cX.delete(t),
            n.unregisterLookup(),
            cV.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove());
    }
    for (let [t, n] of e)
        cX.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = cW.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    cQ(n),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (cX.set(e, l),
                    (l.unregisterLookup = (0, cK.Ng)(e, () => (0, u4.o)(n, t))),
                    cV.A.registerFrameTarget(t, n, ce.A.Backstage, void 0));
            })(t, n);
    for (let e of cX.values()) cQ(e.element);
}
function cQ(e) {
    let t = tg.A.isBuilderPreviewMobile();
    e.classList.toggle(cW.L, !t);
    let n = t ? ca(tg.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != n ? `${n.width}px` : ""), (e.style.height = null != n ? `${n.height}px` : ""));
}
var cZ = n(873727),
    c0 = n(147248),
    c1 = n(418842),
    c2 = n(363195),
    c3 = n(818023);
let c4 = null;
var c6 = n(602853),
    c7 = n(517461),
    c5 = n(761929),
    c8 = n(487336);
function c9(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: r } = e,
        s = (0, c6.r)(L.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = i.useRef(null),
        [u, c] = (0, c7.V)("VibegrationsChatSidebarWidth", 460),
        [d, f] = i.useState(u ?? 460),
        m = (0, rr.clamp)(d, 360, n);
    i.useLayoutEffect(() => {
        l(t ? m + s : 0);
    }, [m, t, s, l]);
    let h = (0, c5.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: f,
            onElementResizeEnd: c,
            orientation: c5.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        g = i.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), h(e));
            },
            [h],
        );
    return (0, a.jsxs)("div", {
        className: c8.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: c8.Di, onPointerDown: g }),
            (0, a.jsx)("div", { ref: o, className: c8.kL, style: { width: m }, children: r }),
        ],
    });
}
var de = n(541940);
function dt(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: u,
            mainClassName: c,
            content: d,
            sidebar: m,
            onOpenPublishedApp: h,
            showsFrame: g,
        } = e,
        [p, x] = i.useState(null),
        v = (0, G.A)(l, s),
        j = v?.id ?? null;
    (!(function (e, t) {
        let n = (0, f.bG)([c2.A], () => (0, cZ.x4)(c2.A.theme)),
            l = (0, f.bG)([c0.A], () => c0.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: s,
                forcedColors: o,
                underlineLinks: u,
            } = (0, f.cf)([iy.Ay], () => ({
                reducedMotion: iy.Ay.useReducedMotion,
                fontScale: (0, cZ.U0)(),
                highContrast: iy.Ay.isHighContrastModeEnabled,
                forcedColors: iy.Ay.useForcedColors,
                underlineLinks: iy.Ay.alwaysShowLinkDecorations,
            })),
            c = eB.hH.useSetting(),
            d = (0, c1.C)(),
            m = i.useRef(!1),
            h = i.useRef(!1),
            g = i.useRef(0),
            p = i.useRef(null),
            x = i.useCallback(() => {
                let l = (0, u4.o)(e, t);
                if (null == l) return;
                p.current = l;
                let i = {
                    revision: ++g.current,
                    baseTheme: n,
                    customTheme: (0, cZ.Lq)(),
                    uiDensity: d,
                    messageDisplayCompact: c,
                    fontScale: a,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: o,
                    underlineLinks: u,
                };
                (0, uD.W)(l, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, o, a, t, s, c, e, r, d, u]),
            v = i.useRef(x);
        i.useLayoutEffect(() => {
            v.current = x;
        });
        let j = i.useCallback(() => {
            m.current ||
                ((m.current = !0),
                queueMicrotask(() => {
                    ((m.current = !1), h.current || v.current());
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
                j();
            }, [l, j]),
            i.useLayoutEffect(() => {
                (x(), j());
            }, [j, x]),
            i.useLayoutEffect(() => {
                let n = (0, u4.o)(e, t);
                null != n && n !== p.current && j();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, u4.o)(e, t) && ((p.current = null), j());
                }
                return (document.addEventListener("load", n, !0), () => document.removeEventListener("load", n, !0));
            }, [t, e, j]),
            i.useEffect(() => {
                let e = new MutationObserver(j);
                return (
                    e.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }),
                    e.observe(document.head, { childList: !0, subtree: !0, characterData: !0 }),
                    () => e.disconnect()
                );
            }, [j]));
    })(p, j),
        i.useEffect(() => {
            if (null != t) return (0, cK.Ng)(t, () => (0, u4.o)(p, j));
        }, [t, p, j]));
    let b = i.useCallback(() => (0, u4.o)(p, j), [p, j]),
        y = i.useCallback(() => (g ? (0, u4.o)(p, j) : p), [g, p, j]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: o()(de.Mh, c),
                children: [
                    u,
                    (0, a.jsx)(cB, {
                        projectId: t ?? null,
                        applicationId: l,
                        previewApplicationId: r,
                        resolveTarget: y,
                        frameId: j,
                        onOpenPublishedApp: h,
                    }),
                    (0, a.jsx)("div", { ref: x, className: de.fm, children: d }),
                ],
            }),
            m,
            (0, a.jsx)(uH, {
                projectId: t ?? null,
                applicationId: l,
                previewApplicationId: r,
                resolveIframe: b,
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
        previewApplicationId: r,
        surface: s,
        header: u,
        chatOpen: c,
        onCloseChat: d,
        chatHeaderAction: m,
        onRestoreVersion: h,
        onImportProject: g,
        debugOpen: p = !1,
        onCloseDebug: x,
        restoreState: v,
        previewReady: j,
        previewGate: b,
        availability: y,
        activeMode: k,
        widgetApplicationId: w,
        overlayWidgetSize: A,
        onOpenPublishedApp: N = null,
    } = e;
    (0, cH.k)(t, w);
    let S = s.type === nB.U.MAIN || (0, tb.Q5)(s);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, f.cf)([tg.A], () => ({
            mobile: tg.A.isBuilderPreviewMobile(),
            landscape: tg.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? c3.aX.LANDSCAPE : c3.aX.PORTRAIT), (c4 = e));
                else {
                    if (c4 !== e) return;
                    ((l = c3.aX.UNHANDLED), (c4 = null));
                }
                lL.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(S ? l : null);
    let C = i.useRef(null),
        [E, I] = i.useState(0);
    (i.useEffect(() => {
        if (null == t) return;
        (0, en.TP)(t);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, en.TP)(t);
        }, 3e3);
        return () => clearInterval(e);
    }, [t]),
        i.useLayoutEffect(() => {
            if (S) return ((0, eA.HV)(l), () => (0, eA.HV)(null));
        }, [l, S]),
        i.useEffect(() => {
            null != t &&
                ((0, en.Hc)(t),
                cJ ||
                    ((cJ = !0),
                    ej.Ay.addChangeListener(cY),
                    eN.Ay.addChangeListener(cY),
                    tT.A.addChangeListener(cY),
                    tg.A.addChangeListener(cY),
                    (0, tx.W3)(cY),
                    cY()));
        }, [t]),
        i.useLayoutEffect(() => {
            let e = C.current;
            if (null == e) return;
            function t() {
                null != e && I(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return (n.observe(e), () => n.disconnect());
        }, []),
        i.useLayoutEffect(() => () => (0, eA.Zq)(0), []));
    let M = Math.max(360, E - 320),
        _ = c || S;
    return (0, a.jsx)("div", {
        ref: C,
        className: de.LB,
        children: (0, a.jsx)(dt, {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: u,
            onOpenPublishedApp: N,
            showsFrame: (0, tj.yf)(y, k),
            mainClassName: null == u ? void 0 : o()(de.ez, { [de.zt]: c }),
            content: (0, a.jsx)(cP, {
                applicationId: l,
                previewApplicationId: r,
                surface: s,
                previewReady: j,
                previewGate: b,
                availability: y,
                activeMode: k,
                widgetApplicationId: w,
                overlayWidgetSize: A,
                frameOverlay: (0, a.jsx)(u9, { projectId: t, applicationId: l, previewApplicationId: r, surface: s }),
            }),
            sidebar:
                null != t && _
                    ? (0, a.jsx)(c9, {
                          open: c,
                          maxWidth: M,
                          onWidthChange: eA.Zq,
                          children: (0, a.jsx)("div", {
                              className: de.cO,
                              children: p
                                  ? (0, a.jsx)(uS, { projectId: t, onClose: x ?? (() => {}) }, t)
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(uZ.A, { projectId: t }),
                                            (0, a.jsx)(nH.Ay, {
                                                "aria-label": eo.intl.string(eo.t["/VQax8"]),
                                                toolbar: (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        m,
                                                        null == d
                                                            ? null
                                                            : (0, a.jsx)(nH.Ay.Icon, {
                                                                  icon: P.P,
                                                                  tooltip: eo.intl.string(es.default.JD6Oit),
                                                                  onClick: d,
                                                              }),
                                                    ],
                                                }),
                                                children: (0, a.jsx)(nH.Ay.Title, {
                                                    children: eo.intl.string(eo.t["/VQax8"]),
                                                }),
                                            }),
                                            (0, a.jsx)("div", {
                                                className: de.cb,
                                                children: (0, a.jsx)(
                                                    ou,
                                                    {
                                                        projectId: t,
                                                        restoreState: v,
                                                        onRestoreVersion: h,
                                                        onImportProject: g,
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
function dr(e) {
    let { title: t, actions: n, breadcrumb: l, project: r, onOpenProjectSettings: i } = e,
        s = eo.intl.string(es.default.FzfmQ8);
    return (0, a.jsx)(B.A, {
        hideSearch: !0,
        toolbar: n,
        className: dl.wx,
        "aria-label": t,
        children: (0, a.jsxs)("div", {
            className: dl.QF,
            children: [
                (0, a.jsx)(R.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: L.A.colors.TEXT_STRONG,
                    className: dl.Kk,
                }),
                null != l
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(B.A.Title, { onClick: l.onClick, children: l.title }),
                              (0, a.jsx)(B.A.Caret, {}),
                          ],
                      })
                    : null,
                null != r && null != i
                    ? (0, a.jsx)(y.m, {
                          asContainer: !0,
                          text: s,
                          position: "bottom",
                          children: (0, a.jsx)(b.D, {
                              className: dl.FF,
                              onClick: i,
                              "aria-label": s,
                              children: (0, a.jsx)(nk.A, { project: r, size: "header" }),
                          }),
                      })
                    : null,
                (0, a.jsx)(B.A.Title, { className: dl.Qw, wrapperClassName: dl.DD, children: t }),
            ],
        }),
    });
}
var da = n(683071);
let di = "conjuring-help";
var ds = n(173114);
function du() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: n,
            } = (0, f.cf)([tX.default, X.A, nF.Ay, sl.A], () => {
                let e = tX.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of X.A.getGuildsArray()) {
                    if (!t.features.has(ex.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let n = nF.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, z.m1)(t, tX.default, sl.A) === di;
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
                    ? (0, H.pX)(ex.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, na.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, a.jsx)("div", {
              className: ds.l,
              children: (0, a.jsx)(da.w, {
                  type: "info",
                  iconAlign: "center",
                  message: eo.intl.format(es.default["6anmu1"], { channel: di, onNavigate: t }),
                  role: "static",
              }),
          });
}
var dc = n(606128),
    dd = n(323140);
function df(e) {
    return (0, a.jsx)(h.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function dm(e) {
    return (0, a.jsx)(g.u, { ...e, size: "custom", width: 20, height: 20 });
}
function dh(e) {
    return (0, a.jsx)(p.k, { ...e, size: "custom", width: 20, height: 20 });
}
function dg(e) {
    return (0, a.jsx)(x.H, { ...e, size: "custom", width: 20, height: 20 });
}
let dp = {
    showPublishBlocked: function (e, t, n) {
        (0, te.openModal)((l) => (0, a.jsx)(nO, { ...l, reason: e, message: t, onConfirm: n }));
    },
    openPublishNotes: nU.A,
    showError: (e) => (0, v.P0)((0, v.ox)(e, v.Ck.FAILURE)),
    openProfile: (e) => {
        (0, K.openUserProfileModal)({ userId: e });
    },
    openAutomodSettings: (e) => {
        Promise.resolve()
            .then(n.bind(n, 468689))
            .then((t) => {
                let { default: n } = t;
                return n.open(e, ex.BEX.GUILD_AUTOMOD);
            })
            .catch(() => {});
    },
};
function dx(e) {
    var t;
    let n,
        l,
        r,
        s,
        u,
        h,
        g,
        p,
        x,
        A,
        { project: N, guildId: S, onSelect: C, onRemix: E, shared: I = !1 } = e,
        M =
            ((n = N.id),
            (l = N.name),
            (r = i.useRef(!1)),
            (s = i.useCallback(() => {
                r.current ||
                    ((r.current = !0),
                    (0, v.P0)((0, v.ox)(eo.intl.formatToPlainString(es.default.aN2JdD, { name: l }), v.Ck.MESSAGE)),
                    ed(n, l)
                        .catch((e) => {
                            let t;
                            (console.error("[vibegrations] project export failed", n, e),
                                (0, v.P0)(
                                    (0, v.ox)(
                                        409 === (t = e instanceof en.xE ? e.status : null)
                                            ? eo.intl.string(es.default["9oqbEw"])
                                            : 404 === t
                                              ? eo.intl.string(es.default["0W8uLq"])
                                              : eo.intl.string(es.default.N8753A),
                                        v.Ck.FAILURE,
                                    ),
                                ));
                        })
                        .finally(() => {
                            r.current = !1;
                        }));
            }, [n, l])),
            {
                onExport: s,
                onImport: (u = ef(
                    i.useCallback(
                        (e) => {
                            let t = ec(e);
                            null != t
                                ? (0, v.P0)((0, v.ox)(t, v.Ck.FAILURE))
                                : (0, m.A)({
                                      title: eo.intl.formatToPlainString(es.default["Gm+u1+"], { name: l }),
                                      subtitle: eo.intl.string(es.default.M7H3sJ),
                                      confirmText: eo.intl.string(es.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, H.pX)(ex.BVt.CHANNEL(S, ev.VV.CONJURE, n));
                                          try {
                                              await eu(n, e, eo.intl.string(es.default.Owerd3));
                                          } catch {
                                              (0, v.P0)((0, v.ox)(eo.intl.string(es.default["Q+l4Hv"]), v.Ck.FAILURE));
                                          }
                                      },
                                  });
                        },
                        [n, l, S],
                    ),
                )).open,
                importInput: u.input,
            }),
        _ =
            null == N.updated_at
                ? null
                : eo.intl.formatToPlainString(es.default.AXydi3, { time: c()(N.updated_at).fromNow() }),
        T = (0, tV.wu)(N),
        P =
            (0, f.bG)([X.A], () => (null == T ? null : (X.A.getGuild(T)?.name ?? null)), [T]) ??
            eo.intl.string(es.default["3QFps8"]),
        R = (0, f.bG)([eN.Ay], () => eN.Ay.isProjectDeleting(N.id), [N.id]),
        L =
            ((t = I ? N : null),
            (h = t?.id),
            (g = t?.owner_user_id),
            (p = (0, f.yK)(
                [ej.Ay],
                () =>
                    null == h
                        ? []
                        : [
                              ...new Set(
                                  ej.Ay.getMessages(h)
                                      .flatMap((e) => (null != e.user_id && e.user_id !== g ? [e.user_id] : []))
                                      .reverse(),
                              ),
                          ],
                [h, g],
            )),
            i.useEffect(() => {
                null != g && (t1(g), p.forEach(t1));
            }, [g, p]),
            (x = (0, f.bG)([tX.default], () => (null == g ? null : tX.default.getUser(g)), [g])),
            (A = (0, f.yK)([tX.default], () => p.map((e) => tX.default.getUser(e)).filter((e) => null != e), [p])),
            i.useMemo(
                () =>
                    null == x
                        ? null
                        : {
                              creator: x,
                              collaborators: A,
                              label: (function (e, t) {
                                  let n;
                                  return 0 === t.length
                                      ? eo.intl.formatToPlainString(es.default.t5RWBS, { creator: e })
                                      : eo.intl.formatToPlainString(es.default["b5uCe/"], {
                                            creator: e,
                                            collaborators:
                                                0 === (n = void 0 ?? t.length)
                                                    ? ""
                                                    : 1 === n
                                                      ? eo.intl.formatToPlainString(eo.t["8s9z8P"], { first: t[0] })
                                                      : 2 === n
                                                        ? eo.intl.formatToPlainString(eo.t["i0K/dw"], {
                                                              first: t[0],
                                                              second: t[1],
                                                          })
                                                        : 3 === n
                                                          ? eo.intl.formatToPlainString(eo.t["/KSOKY"], {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                            })
                                                          : eo.intl.formatToPlainString(eo.t.xpU76u, {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                                count: n - 3,
                                                            }),
                                        });
                              })(
                                  (0, tJ.mG)(x),
                                  A.map((e) => (0, tJ.mG)(e)),
                              ),
                          },
                [x, A],
            )),
        $ = i.useId(),
        F = (0, a.jsx)(j.E, { variant: "text-md/semibold", color: "text-strong", className: dd.j1, children: N.name }),
        z = (0, eb.oF)(N.id),
        O = {
            projectId: N.id,
            projectName: N.name,
            guildId: S,
            projectGuildId: N.guild_id,
            isOwner: (0, eN.PV)(N),
            canRemix: (0, eN.H_)(N),
            onRemix: E,
            onExport: M.onExport,
            onImport: M.onImport,
        };
    return (0, a.jsxs)("div", {
        className: o()(dd.OY, { [dd.Wy]: R }),
        "aria-busy": R,
        children: [
            (0, a.jsx)(tt.Ay, { projectId: N.id }),
            null == z || R ? null : (0, a.jsx)("div", { className: dd.SB, "aria-hidden": !0 }),
            (0, a.jsxs)(b.D, {
                className: dd.W6,
                onClick: R ? void 0 : C,
                onContextMenu: function (e) {
                    R || (0, D.jA)(e, () => (0, a.jsx)(nb, { ...O, onCloseMenu: D.Z_ }));
                },
                tabIndex: R ? -1 : void 0,
                "aria-describedby": null != L ? $ : void 0,
                children: [
                    (0, a.jsx)(nk.A, { project: N, size: "card", className: dd.VJ }),
                    (0, a.jsxs)("div", {
                        className: dd.MM,
                        children: [
                            (0, a.jsxs)("div", {
                                className: dd.Ub,
                                children: [
                                    null != L ? (0, a.jsx)(y.m, { text: L.label, ariaHidden: !0, children: F }) : F,
                                    null == L || R ? null : (0, a.jsx)(nN, { creator: L, className: dd.rb }),
                                    z !== d.I.NEEDS_INPUT || R
                                        ? null
                                        : (0, a.jsxs)("div", {
                                              className: dd.fs,
                                              children: [
                                                  (0, a.jsx)(q.A, { mentionsCount: 1 }),
                                                  (0, a.jsx)(k.A, { children: eo.intl.string(es.default.hfIuc7) }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: dd.h3,
                                children: [
                                    (0, a.jsx)(j.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: dd.Wb,
                                        children: R ? eo.intl.string(es.default.Yh5pAc) : P,
                                    }),
                                    null == _ || R
                                        ? null
                                        : (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                  (0, a.jsx)("span", {
                                                      className: dd.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, a.jsx)(j.E, {
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
            null != L ? (0, a.jsx)(k.A, { id: $, children: L.label }) : null,
            (0, a.jsx)("div", {
                className: dd.M2,
                children: R
                    ? (0, a.jsx)(w.y, { type: w.t.SPINNING_CIRCLE_SIMPLE })
                    : (0, a.jsxs)("div", {
                          className: dd.Pl,
                          children: [(0, a.jsx)(ny, { ...O, trigger: "iconButton" }), M.importInput],
                      }),
            }),
        ],
    });
}
function dv(e) {
    var t, l;
    let r,
        { project: s, projectsLoaded: u, onBack: c, guildId: d } = e,
        [h, g] = i.useState(!0),
        [p, x] = i.useState(!1),
        b = eB.Q_.useSetting() || !1,
        [k, w] = i.useState(null),
        [I, M] = i.useState(null),
        _ = s?.id ?? null,
        T = i.useRef(_),
        P = i.useRef(!0),
        R = i.useRef(!1),
        L = i.useRef(null);
    ((T.current = _),
        i.useEffect(
            () => (
                (P.current = !0),
                () => {
                    P.current = !1;
                }
            ),
            [],
        ));
    let D = (0, f.bG)([eN.Ay], () => (null == _ ? null : eN.Ay.getIntegrationStatus(_)), [_]),
        { data: $, isLoading: q } = (0, F.YY)(s?.preview_application_id ?? void 0),
        K = null != _ && I !== _,
        W = D?.preview_ready === !0,
        X = D?.has_activity === !0,
        {
            availability: J,
            activeMode: Q,
            setMode: Z,
            frameSurface: ee,
            frameSurfaceOptions: et,
            setFrameSurface: el,
            widgetApplicationId: er,
        } = (function (e) {
            let {
                    applicationId: t,
                    previewApplicationId: n,
                    declaredActivity: l,
                    previewSupportedSurfaces: r,
                    installScope: a,
                    ownerAuthorizationRevoked: s,
                    mainCardOnly: o = !1,
                    supportsOverlay: u = !1,
                } = e,
                [c, d] = i.useState(null),
                [m, h] = i.useState(null),
                [g, p] = i.useState(t);
            g !== t && (p(t), d(null), h(null));
            let x = null != n && n === t ? n : null,
                v = (0, f.bG)([tE.default], () => tE.default.getId()),
                { applicationWidgetConfig: j } = (0, tN.A)(v, x ?? void 0),
                b = j?.surfaces,
                y = (0, tj.yZ)({
                    widgetTop: b?.[tA.m.WIDGET_TOP] != null,
                    widgetBottom: b?.[tA.m.WIDGET_BOTTOM] != null,
                    miniProfile: b?.[tA.m.MINI_PROFILE] != null,
                }),
                k = null != x && (o ? y.hasMainCard : y.hasAny),
                { data: w } = (0, F.YY)(n ?? void 0),
                A = null != n && w?.bot?.id != null,
                { data: N, isLoading: S } = (0, F.YY)(t ?? void 0),
                C = l || (0, tC.X)(N),
                E = null != t && S && null == N,
                I = (0, tj.P5)(r, {
                    legacy: { hasFrame: C, hasProfileWidget: k, hasBotDm: A },
                    widgetResolvable: null != x,
                    botDmResolvable: A,
                }),
                M = (0, tj.Xm)({ installScope: a, ...I, hasOverlay: u, ownerAuthorizationRevoked: s }),
                _ = i.useMemo(() => (0, tI.hR)(r), [r]),
                T = (0, tI.PH)(m, _);
            return (
                i.useEffect(() => {
                    if (null != t) for (let e of (0, tb.Mm)(t)) e.surface.type !== (0, tI.BR)(T) && (0, tS.r)(e.id);
                }, [t, T]),
                {
                    availability: M,
                    isResolving: E,
                    activeMode: E ? null : (0, tj.Qs)(c, M),
                    setMode: d,
                    frameSurface: T,
                    frameSurfaceOptions: _,
                    setFrameSurface: h,
                    widgetApplicationId: x,
                }
            );
        })({
            applicationId: s?.preview_application_id ?? null,
            previewApplicationId: s?.preview_application_id ?? null,
            declaredActivity: X,
            previewSupportedSurfaces: s?.preview_supported_surfaces,
            installScope: s?.install_scope ?? null,
            ownerAuthorizationRevoked: D?.owner_authorization_revoked === !0,
            supportsOverlay: s?.preview_supported_surfaces?.includes(Y.q7.OVERLAY) === !0,
        }),
        ea =
            ((t = (0, f.bG)(
                [ej.Ay],
                () =>
                    null == _
                        ? null
                        : (function (e) {
                              for (let t = e.length - 1; t >= 0; t--) {
                                  let n = e[t].proposal?.overlay_widget;
                                  if (null != n) return n;
                              }
                              return null;
                          })(ej.Ay.getMessages(_)),
                [_],
            )),
            null != (r = t?.default_size) &&
            Number.isFinite(r.width) &&
            Number.isFinite(r.height) &&
            r.width > 0 &&
            r.height > 0
                ? r
                : tp);
    (0, tv.x)(_, (e) => {
        J.modes.includes(e) && Z(e);
    });
    let ei = J.modes.includes("frame"),
        ed = i.useMemo(() => {
            var e;
            return (
                (e = J.modes),
                e.flatMap((e) => ("frame" === e ? et.map((t) => ({ mode: e, surface: t })) : [{ mode: e }]))
            );
        }, [J.modes, et]),
        em = i.useCallback(
            (e) => {
                ("frame" === e.mode && el(e.surface), Z(e.mode));
            },
            [el, Z],
        ),
        eh = (0, tj.Qg)({
            installScope: s?.install_scope ?? null,
            previewReady: W,
            integrationInstalled: D?.integration_installed ?? null,
            botPermissionsChanged: D?.bot_permissions_changed === !0,
        }),
        eg = h && !p,
        ep = eo.intl.string(eg ? es.default.JD6Oit : es.default.xjJAQm),
        eb = i.useCallback(() => {
            if (p) {
                (x(!1), g(!0));
                return;
            }
            g((e) => !e);
        }, [p]),
        ey = i.useCallback(() => g(!1), []),
        { active: ek } = e9(_);
    i.useEffect(() => {
        null != _ && ek && !ei && e6(_);
    }, [_, ek, ei]);
    let ew = i.useRef(null),
        eS = (0, tx.Zv)(_),
        eC = eo.intl.string(eS ? es.default.Sme0T0 : ek ? es.default.vn5Rzu : es.default["cl/Jyl"]),
        eE = i.useCallback(() => {
            if (null != _) {
                let e;
                if (ek) return void e6(_);
                (x(!1), g(!0), (e = e3(_)).active || e4(_, { ...e, active: !0 }));
            }
        }, [_, ek]),
        eI = i.useCallback(() => {
            x((e) => !e && (g(!0), !0));
        }, []),
        eM = i.useCallback(() => x(!1), []),
        e_ = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (null == s || R.current) return;
                let l = s.id;
                function r() {
                    return P.current && T.current === l;
                }
                ((R.current = !0),
                    x(!1),
                    g(!0),
                    w({ entry: e, status: "restoring" }),
                    (0, en.oB)(l, e.sha)
                        .then(
                            async () => {
                                if (
                                    (n &&
                                        r() &&
                                        (0, v.P0)(
                                            (0, v.ox)(
                                                eo.intl.formatToPlainString(es.default.Z4n6LX, {
                                                    title: (0, tn.T4)(e.subject).short,
                                                }),
                                                v.Ck.SUCCESS,
                                            ),
                                        ),
                                    null != t)
                                ) {
                                    let e = await (0, tl.c)(l, t);
                                    null != e && (0, v.P0)((0, v.ox)(e, v.Ck.FAILURE));
                                }
                                r() && w({ entry: e, status: "restored" });
                            },
                            (t) => {
                                r() &&
                                    (w({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", l, t),
                                    (0, v.P0)((0, v.ox)(eo.intl.string(es.default["PSdo+w"]), v.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            r() && (R.current = !1);
                        }));
            },
            [s],
        ),
        eT = (0, f.bG)([tg.A], () => tg.A.isBuilderPreviewMobile()),
        eP = eo.intl.string(eT ? es.default.tKGF0Q : es.default.peqEOY),
        eR = i.useCallback(() => (0, eA.GG)(!eT), [eT]),
        eL = (0, f.bG)([tg.A], () => tg.A.isBuilderPreviewLandscape()),
        eD = eo.intl.string(eL ? es.default.tunI2l : es.default.DoNdjA),
        e$ = i.useCallback(() => (0, eA.Lw)(!eL), [eL]),
        eF = (0, tb.jS)(s),
        ez = i.useMemo(() => (0, tb.Op)(eF, ee), [eF, ee]),
        eO = (0, G.A)(s?.preview_application_id ?? null, ez),
        eU = (0, tO.x1)(eO) && eO.data.proxyTicketRefreshing,
        eG = i.useCallback(() => {
            null == eO || eU || U.A.refreshProxyTicket(eO.id);
        }, [eO, eU]),
        eq = i.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = eO?.id), (0, en.Bn)(e), (0, tS.r)(t)), c());
        }, [s, eO?.id, c]),
        eH = i.useCallback(() => {
            null != s && (g(!0), (0, en.dv)(s.id, eo.intl.string(es.default.oU20rd)));
        }, [s]),
        eK = ef(
            i.useCallback(
                (e) => {
                    if (null == s) return;
                    let t = s.id,
                        n = ec(e);
                    null != n
                        ? (0, v.P0)((0, v.ox)(n, v.Ck.FAILURE))
                        : (0, m.A)({
                              title: eo.intl.formatToPlainString(es.default["Gm+u1+"], { name: s.name }),
                              subtitle: eo.intl.string(es.default.M7H3sJ),
                              confirmText: eo.intl.string(es.default.gFHykw),
                              variant: "critical",
                              onConfirm: async () => {
                                  g(!0);
                                  try {
                                      await eu(t, e, eo.intl.string(es.default.Owerd3));
                                  } catch {
                                      (0, v.P0)((0, v.ox)(eo.intl.string(es.default["Q+l4Hv"]), v.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [s],
            ),
        ),
        eV = i.useCallback(() => {
            null != s && (0, nG.A)(s, d);
        }, [s, d]),
        eW = i.useCallback(async () => {
            if (null == _ || T.current !== _) return;
            L.current?.abort();
            let e = new AbortController();
            ((L.current = e), M(null));
            try {
                await (0, eA.U1)(_, e.signal);
            } catch {
            } finally {
                e.signal.aborted || L.current !== e || T.current !== _ || M(_);
            }
        }, [_]);
    i.useEffect(
        () => (
            eW(),
            () => {
                (L.current?.abort(), (L.current = null));
            }
        ),
        [eW],
    );
    let eX = (0, n$.a)(s ?? null, D ?? null, d),
        eJ = ((l = s?.application_id ?? null), (0, f.bG)([nF.Ay], () => (null == l ? null : (0, nS.i8)(d, l)), [d, l])),
        eY = i.useMemo(() => (null == eJ ? null : () => (0, H.pX)(ex.BVt.CHANNEL(d, eJ))), [d, eJ]),
        eQ = i.useCallback(async () => {
            null != s && (await (0, n$.$)(s, eX));
        }, [eX, s]),
        eZ = i.useCallback(async () => {
            try {
                await eQ();
            } catch {}
            await eW();
        }, [eW, eQ]),
        e0 = i.useMemo(() => {
            let e = s?.preview_application_id;
            return null == e || q || K
                ? null
                : {
                      ...(0, tK.i)({ applicationId: e, application: $ ?? null, guildId: eX }),
                      onClose: () => {
                          eZ();
                      },
                  };
        }, [K, eZ, eX, q, $, s?.preview_application_id]),
        e1 = D?.integration_installed === !1,
        e2 = i.useCallback(() => {
            null != s && (0, ns.vL)(s.id, d).catch(() => {});
        }, [d, s]),
        e7 = (0, tj.JR)(Q, eh)
            ? { type: "permissions", authorizeProps: e0, onAddPreviewBot: e1 ? e2 : void 0 }
            : K && null == D
              ? { type: "checking" }
              : void 0,
        e5 = (0, f.bG)([eN.Ay], () => null != _ && eN.Ay.isProjectDeleting(_), [_]);
    i.useEffect(() => {
        ((null == s && u) || e5) && (0, H.bG)(ex.BVt.CHANNEL(d, ev.VV.CONJURE));
    }, [d, s, u, e5]);
    let e8 = i.useMemo(() => ({ guildId: d, platform: dp, busy: K || q }), [d, K, q]),
        tt = (0, ns.Ay)(_, e8),
        tr = tt?.intent === "open" && "channel" === tt.destination ? tt.appChannelId : null,
        ta = (0, f.bG)([V.A], () => (null == tr ? null : V.A.getChannel(tr)), [tr]),
        ti = (0, z.Ay)(ta),
        ts = (0, O.gU)(ta),
        to =
            null != ti && null != ts
                ? eo.intl.format(es.default.gR7PUV, {
                      channel: ti,
                      channelIconHook: (e, t) =>
                          (0, a.jsx)(ts, { size: "xs", color: "currentColor", className: dd.Y2 }, t),
                  })
                : tt?.label,
        tu = tt?.upToDate === !0 ? eo.intl.string(es.default.X0kGp2) : null,
        tc =
            null == tt
                ? null
                : (0, a.jsx)("div", {
                      className: dd.As,
                      children: (0, a.jsx)(y.m, {
                          text: tu,
                          asContainer: !0,
                          children: (0, a.jsx)(A.$, {
                              size: "sm",
                              variant: tt.upToDate ? "secondary" : "primary",
                              loading: tt.publishing,
                              disabled: tt.disabled,
                              onClick: () => tt.run("header"),
                              text: to,
                          }),
                      }),
                  }),
        td = null == s ? void 0 : () => (0, no.A)(s.id, { guildId: d, isPreview: !0, publishOptions: e8 }),
        tf = (0, a.jsx)(dr, {
            title: s?.name ?? eo.intl.string(es.default.G1WwgK),
            breadcrumb: { title: eo.intl.string(es.default.uk6jhJ), onClick: c },
            project: s,
            onOpenProjectSettings: td,
            actions:
                null == s
                    ? null
                    : (0, a.jsxs)("div", {
                          className: dd.FO,
                          children: [
                              (0, a.jsx)(tH, {
                                  targets: ed,
                                  target: null == Q ? null : "frame" === Q ? { mode: Q, surface: ee } : { mode: Q },
                                  onChange: em,
                              }),
                              ei
                                  ? (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            "overlay" === Q
                                                ? null
                                                : (0, a.jsx)(B.A.Icon, {
                                                      icon: eT ? dh : dm,
                                                      tooltip: eP,
                                                      "aria-label": eP,
                                                      selected: eT,
                                                      onClick: eR,
                                                  }),
                                            eT && "overlay" !== Q
                                                ? (0, a.jsx)(B.A.Icon, {
                                                      icon: dg,
                                                      tooltip: eD,
                                                      "aria-label": eD,
                                                      selected: eL,
                                                      onClick: e$,
                                                  })
                                                : null,
                                            (0, a.jsx)(B.A.Icon, {
                                                ref: ew,
                                                icon: N.x,
                                                iconClassName: dd.D8,
                                                tooltip: eC,
                                                "aria-label": eC,
                                                selected: ek,
                                                disabled: eS,
                                                onClick: eE,
                                            }),
                                        ],
                                    })
                                  : null,
                              "frame" === Q ? (0, a.jsx)(tU, { frame: eO, controlProjectId: s.id }) : null,
                              (0, a.jsx)("div", { className: dd.YJ }),
                              b
                                  ? (0, a.jsx)(B.A.Icon, {
                                        icon: S.BugIcon,
                                        tooltip: eo.intl.string(es.default.Mt5k9d),
                                        "aria-label": eo.intl.string(es.default.Mt5k9d),
                                        selected: p,
                                        onClick: eI,
                                    })
                                  : null,
                              (0, a.jsx)(B.A.Icon, {
                                  icon: C.SettingsIcon,
                                  tooltip: eo.intl.string(es.default.I2XSKe),
                                  "aria-label": eo.intl.string(es.default.I2XSKe),
                                  onClick: td,
                              }),
                              (0, a.jsx)(ny, {
                                  projectId: s.id,
                                  projectName: s.name,
                                  guildId: d,
                                  projectGuildId: s.guild_id,
                                  isOwner: (0, eN.PV)(s),
                                  canRemix: (0, eN.H_)(s),
                                  onRefresh: (0, tO.x1)(eO) ? eG : void 0,
                                  isRefreshing: eU,
                                  onClose: eq,
                                  onExport: eH,
                                  onImport: eK.open,
                                  onRemix: eV,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = s.id),
                                          void (0, te.openModalLazy)(async () => {
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
                                              projectId: s.id,
                                              installScope: s.install_scope,
                                              restoreDisabled: k?.status === "restoring",
                                              onRestoreVersion: (e, t) => e_(e, t, !0),
                                          }),
                                          void (0, te.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("323079"),
                                                  n.e("437655"),
                                                  n.e("620019"),
                                                  n.e("586467"),
                                                  n.e("231782"),
                                                  n.e("526192"),
                                                  n.e("551087"),
                                              ]).then(n.bind(n, 438834));
                                              return (n) => (0, a.jsx)(t, { ...n, ...e });
                                          })
                                      );
                                  },
                                  refreshApplicationId:
                                      J.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== J.profileState
                                          ? er
                                          : null,
                                  previewProjectId: s.id,
                              }),
                              eg
                                  ? null
                                  : (0, a.jsx)(B.A.Icon, { icon: df, tooltip: ep, "aria-label": ep, onClick: eb }),
                          ],
                      }),
        });
    return (0, a.jsxs)("div", {
        className: o()(dd.nj, dc.T),
        children: [
            eK.input,
            (0, a.jsx)("main", {
                className: dd.JX,
                children:
                    null == s
                        ? (0, a.jsxs)("div", {
                              className: dd.j5,
                              children: [
                                  tf,
                                  (0, a.jsxs)("div", {
                                      className: dd.sD,
                                      children: [
                                          (0, a.jsx)(E.D, {
                                              variant: "heading-lg/semibold",
                                              children: eo.intl.string(es.default.G1WwgK),
                                          }),
                                          (0, a.jsx)(j.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: eo.intl.string(es.default.fINulo),
                                          }),
                                          (0, a.jsx)(A.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: eo.intl.string(es.default["WFJ/vb"]),
                                              onClick: () => (0, eA.hF)(d),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(ns.bI.Provider, {
                              value: e8,
                              children: (0, a.jsx)(
                                  dn,
                                  {
                                      projectId: s.id,
                                      designFeedbackToggleRef: ew,
                                      applicationId: s.preview_application_id,
                                      previewApplicationId: s.preview_application_id,
                                      surface: ez,
                                      header: tf,
                                      chatOpen: h,
                                      onCloseChat: ey,
                                      chatHeaderAction: tc,
                                      debugOpen: b && p,
                                      onCloseDebug: eM,
                                      onRestoreVersion: e_,
                                      onImportProject: (0, eN.PV)(s) ? eK.open : void 0,
                                      restoreState: k,
                                      previewReady: W,
                                      previewGate: e7,
                                      availability: J,
                                      activeMode: Q,
                                      widgetApplicationId: er,
                                      overlayWidgetSize: ea,
                                      onOpenPublishedApp: eY,
                                  },
                                  s.id,
                              ),
                          }),
            }),
        ],
    });
}
function dj(e) {
    let {
            projects: t,
            idea: l,
            guildId: r,
            submitting: s,
            createError: u,
            createDisabled: c,
            conjureTarget: d,
            onConjureTargetChange: m,
            eligibleGuilds: h,
            modelSettings: g,
            onModelSettingsChange: p,
            onSelectProject: x,
            onIdeaChange: b,
            onCreate: y,
            onCreateFromTemplate: k,
            onStartTemplate: N,
            onSubmitTemplate: S,
            onCancelTemplate: C,
            onSkipTemplate: E,
            onImportNewProject: D,
            importing: $,
        } = e,
        [F, z] = i.useState(() => ({ guildId: r, filter: nM(r) })),
        O = (F.guildId === r ? F.filter : nM(r)) ?? r,
        U = i.useCallback(
            (e) => {
                (nI.set(r, e), z({ guildId: r, filter: e }));
            },
            [r],
        ),
        G = (0, f.yK)(
            [X.A],
            () =>
                (function (e, t) {
                    let n = new Set([t]);
                    for (let t of e)
                        (null != t.guild_id && n.add(t.guild_id),
                            null != t.preview_guild_id && n.add(t.preview_guild_id));
                    let l = [];
                    for (let e of n) {
                        let t = X.A.getGuild(e);
                        null != t && l.push(t);
                    }
                    return l.sort((e, t) => e.name.localeCompare(t.name));
                })(t, r),
            [t, r],
        ),
        q = i.useMemo(
            () => [
                { id: "conjure-filter-all", value: "all", leading: R.D, label: eo.intl.string(es.default["Xi/oIC"]) },
                {
                    id: "conjure-filter-user",
                    value: nC,
                    leading: em.UserIcon,
                    label: eo.intl.string(es.default.kCSgmG),
                },
                {
                    id: "conjure-filter-no-server",
                    value: nE,
                    leading: eh.R,
                    label: eo.intl.string(es.default["3QFps8"]),
                },
                ...G.map((e) => ({
                    id: `conjure-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, a.jsx)(eG.Ay, { guild: e, size: eG.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [G],
        ),
        H = (0, f.yK)(
            [eN.Ay, X.A],
            () => {
                let e = n_(O);
                if (null != e) return eN.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(X.A.getGuilds()))
                    eN.Ay.hasFetchedGuildProjects(e.id) && t.push(...eN.Ay.getSharedProjects(e.id));
                return t;
            },
            [O],
        );
    i.useEffect(() => {
        let e = n_(O);
        null == e || eN.Ay.hasFetchedGuildProjects(e) || (0, eA.hF)(e);
    }, [O]);
    let K = i.useMemo(
            () =>
                H.filter((e) => nT(e, O)).sort((e, t) =>
                    null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                ),
            [H, O],
        ),
        V = i.useMemo(
            () => [
                {
                    label: eo.intl.string(es.default.NyVn6T),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: eq,
                            label: eo.intl.string(es.default.UPLaGM),
                            leading: em.UserIcon,
                        },
                        ...h.map((e) => ({
                            id: `conjure-target-${e.id}`,
                            value: e.id,
                            label: e.name,
                            leading: (0, a.jsx)(eG.Ay, { guild: e, size: eG.Ay.Sizes.MINI, active: !0 }),
                        })),
                    ],
                },
            ],
            [h],
        ),
        W = i.useMemo(
            () =>
                t
                    .filter((e) => nT(e, O))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, O],
        ),
        J = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, nS.Ot)(e, r)
                    ? x(e.id)
                    : (0, v.P0)((0, v.ox)(eo.intl.string(es.default["XUl/cs"]), v.Ck.MESSAGE));
            },
            [r, x],
        ),
        Q = eo.intl.string(es.default.ab1sMf),
        Z = [
            eo.intl.string(es.default["9w+Chc"]),
            eo.intl.string(es.default.WAvmdq),
            eo.intl.string(es.default.SKsrzl),
        ],
        ee = [
            {
                id: "moderation-bot",
                name: eo.intl.string(es.default.lGLnE8),
                description: eo.intl.string(es.default["pAC6k/"]),
                wizard: !0,
            },
            {
                id: "feature-showcase",
                name: eo.intl.string(es.default.uJKQTs),
                description: eo.intl.string(es.default["+dKy/B"]),
            },
            {
                id: "rust-sphere",
                name: eo.intl.string(es.default.iF5Oru),
                description: eo.intl.string(es.default.NbDDO6),
            },
        ],
        et = i.useCallback(
            (e) => {
                if (null != e.wizard) {
                    var t;
                    return void ((t = {
                        template: e,
                        guildId: r,
                        eligibleGuilds: h,
                        onStart: (t) => N(e.name, t),
                        onSubmit: (t, n, l) => S(e, t, n, l),
                        onCancel: C,
                        onSkip: E,
                    }),
                    (0, te.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([n.e("881965"), n.e("166781")]).then(
                                n.bind(n, 790028),
                            );
                            return (n) => (0, a.jsx)(e, { ...n, ...t });
                        },
                        { modalKey: "ConjureTemplateWizardModal" },
                    ));
                }
                k(e);
            },
            [h, r, C, k, E, N, S],
        ),
        en = eo.intl.string(es.default.zzYLlW),
        el =
            (i.useEffect(() => {
                (0, eA.b8)();
            }, []),
            (0, f.bG)([eN.Ay], () => {
                let e = eN.Ay.getMaxProjects();
                return null != e && eN.Ay.hasFetchedOwnedProjects()
                    ? Math.max(0, e - eN.Ay.getOwnedProjects().length)
                    : null;
            })),
        er = eo.intl.string(es.default["2XcV3x"]),
        ea = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), c || y());
            },
            [c, y],
        ),
        ei = n_(O) ?? r,
        eu = (0, f.bG)([eN.Ay], () => eN.Ay.getGuildProjectsFetchState(ei), [ei]),
        ec = (0, f.bG)([eN.Ay], () => eN.Ay.getGuildProjectsFetchState(r), [r]),
        [ed, ef] = i.useState(nL),
        eg = i.useMemo(() => nP.w.get(nD(r)) ?? !1, [r]),
        ex = "success" === ec,
        ev = (0, f.yK)([eN.Ay], () => eN.Ay.getSharedProjects(r), [r]).length > 0 || t.some((e) => nT(e, r)),
        ej = ed ?? (!!ev || "error" === ec || (!ex && eg));
    i.useEffect(() => {
        ex && nP.w.set(nD(r), ev);
    }, [ex, ev, r]);
    let eb = i.useCallback((e) => {
            (nP.w.set(nR, e), ef(e));
        }, []),
        ey = i.useCallback(() => eb(!ej), [eb, ej]),
        ew = i.useCallback(() => eb(!1), [eb]),
        eC = eo.intl.string(es.default.kar7jh),
        eE = ej ? eC : eo.intl.string(es.default.WSc5Y2);
    return (0, a.jsx)("div", {
        className: o()(dd.nj, dd.a0, dc.T),
        children: (0, a.jsxs)("div", {
            className: dd.Yo,
            children: [
                (0, a.jsxs)("main", {
                    className: dd.ps,
                    children: [
                        (0, a.jsx)(dr, {
                            title: eo.intl.string(es.default.uk6jhJ),
                            actions: (0, a.jsx)(B.A.Icon, {
                                icon: I.Z,
                                tooltip: eE,
                                "aria-label": eE,
                                selected: ej,
                                onClick: ey,
                            }),
                        }),
                        (0, a.jsx)(M.Ip, {
                            className: dd.Yy,
                            children: (0, a.jsx)("div", {
                                className: dd.Mo,
                                children: (0, a.jsxs)("section", {
                                    className: o()(dd.Qs, dd.Ix),
                                    children: [
                                        (0, a.jsx)(du, {}),
                                        (0, a.jsx)(eU, {}),
                                        (0, a.jsxs)("section", {
                                            className: dd.WI,
                                            "aria-label": en,
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: dd.G9,
                                                    children: [
                                                        (0, a.jsx)(j.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: en,
                                                        }),
                                                        (0, a.jsx)(j.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: eo.intl.string(es.default["N88+Ld"]),
                                                        }),
                                                    ],
                                                }),
                                                (0, a.jsx)(e_, {
                                                    listClassName: dd.Aw,
                                                    radius: eI,
                                                    children: ee.map((e) =>
                                                        (0, a.jsx)(
                                                            "li",
                                                            {
                                                                className: dd.EA,
                                                                children: (0, a.jsxs)(eS, {
                                                                    disabled: s,
                                                                    ariaLabel: eo.intl.formatToPlainString(
                                                                        es.default.jGyR6p,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: o()(dd.nx, dd.rz),
                                                                    onClick: () => et(e),
                                                                    children: [
                                                                        (0, a.jsx)(j.E, {
                                                                            className: dd.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, a.jsx)(j.E, {
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
                                        (0, a.jsxs)("section", {
                                            className: dd.WI,
                                            "aria-label": er,
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: dd.G9,
                                                    children: [
                                                        (0, a.jsx)(j.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: er,
                                                        }),
                                                        (0, a.jsx)(j.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: eo.intl.string(es.default.JnJOAn),
                                                        }),
                                                    ],
                                                }),
                                                (0, a.jsx)(e_, {
                                                    listClassName: dd.Aw,
                                                    radius: eM,
                                                    children: Z.map((e) =>
                                                        (0, a.jsx)(
                                                            "li",
                                                            {
                                                                className: dd.EA,
                                                                children: (0, a.jsx)(eS, {
                                                                    disabled: s,
                                                                    className: dd.nx,
                                                                    onClick: () => y(e),
                                                                    children: (0, a.jsx)(j.E, {
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
                                    ],
                                }),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: dd.Yl,
                            children: (0, a.jsxs)("div", {
                                className: o()(dd.Qs, dd.DA),
                                children: [
                                    (0, a.jsx)(_.f, {
                                        label: Q,
                                        hideLabel: !0,
                                        rows: 3,
                                        value: l,
                                        placeholder: Q,
                                        error: u,
                                        onChange: b,
                                        onKeyDown: ea,
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: dd.VP,
                                        children: [
                                            (0, a.jsx)("div", {
                                                className: dd.gH,
                                                children: (0, a.jsx)(T.l, {
                                                    selectionMode: "single",
                                                    label: eo.intl.string(es.default.NyVn6T),
                                                    hideLabel: !0,
                                                    placeholder: eo.intl.string(es.default.NyVn6T),
                                                    options: V,
                                                    value: d,
                                                    onSelectionChange: m,
                                                    disabled: s,
                                                }),
                                            }),
                                            null != el
                                                ? (0, a.jsx)(j.E, {
                                                      variant: "text-sm/medium",
                                                      color: 0 === el ? "text-feedback-warning" : "text-subtle",
                                                      children:
                                                          0 === el
                                                              ? eo.intl.string(es.default.s28pGG)
                                                              : eo.intl.formatToPlainString(es.default.Wy5aK4, {
                                                                    count: el,
                                                                }),
                                                  })
                                                : null,
                                            (0, a.jsx)(th, {
                                                settings: g ?? Y.A4,
                                                tiers: Y.lO,
                                                choices: (0, ek.b)()
                                                    ? {
                                                          main: [...Y.vC.main, ...Y.XE.main],
                                                          subagent: [...Y.vC.subagent, ...Y.XE.subagent],
                                                          thinking: Y.vC.thinking,
                                                      }
                                                    : Y.vC,
                                                disabled: s,
                                                onChange: p,
                                            }),
                                            (0, a.jsx)(A.$, {
                                                variant: "primary",
                                                size: "md",
                                                text: eo.intl.string(eo.t.CumH4u),
                                                disabled: c,
                                                loading: s,
                                                onClick: () => y(),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)("aside", {
                    className: dd.pA,
                    hidden: !ej,
                    "aria-label": eo.intl.string(es.default.dWgSAa),
                    children: [
                        (0, a.jsxs)("div", {
                            className: dd.IR,
                            children: [
                                (0, a.jsx)(j.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: dd.RM,
                                    children: eo.intl.string(es.default.dWgSAa),
                                }),
                                (0, a.jsxs)("div", {
                                    className: dd.Ss,
                                    children: [
                                        (0, a.jsx)(ep, { importing: $, onImport: D }),
                                        (0, a.jsx)(B.A.Icon, { icon: P.P, tooltip: eC, "aria-label": eC, onClick: ew }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsxs)(M.Ip, {
                            className: dd.xe,
                            children: [
                                (0, a.jsx)("div", {
                                    className: dd.Vw,
                                    children: (0, a.jsx)(T.l, {
                                        selectionMode: "single",
                                        label: eo.intl.string(es.default.U6TqU9),
                                        hideLabel: !0,
                                        options: q,
                                        value: O,
                                        onSelectionChange: U,
                                    }),
                                }),
                                (0, a.jsx)(j.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: dd.wE,
                                    children: eo.intl.string(es.default.JQpNkh),
                                }),
                                ("unattempted" === eu || "loading" === eu) && 0 === W.length
                                    ? (0, a.jsx)("div", { className: dd.E8, children: (0, a.jsx)(w.y, {}) })
                                    : "error" === eu && 0 === W.length
                                      ? (0, a.jsxs)("div", {
                                            className: dd.E8,
                                            children: [
                                                (0, a.jsx)(j.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: dd.JS,
                                                    children: eo.intl.string(es.default.DJAPMO),
                                                }),
                                                (0, a.jsx)(A.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: eo.intl.string(es.default["WFJ/vb"]),
                                                    onClick: () => (0, eA.hF)(ei),
                                                }),
                                            ],
                                        })
                                      : 0 === W.length
                                        ? (0, a.jsx)("div", {
                                              className: dd.D1,
                                              children: (0, a.jsxs)("div", {
                                                  className: dd.ST,
                                                  children: [
                                                      (0, a.jsx)(R.D, { size: "lg", color: L.A.colors.TEXT_SUBTLE }),
                                                      (0, a.jsx)(j.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: dd.sI,
                                                          children: eo.intl.string(es.default["9/5sLV"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, a.jsx)("div", {
                                              className: dd.Dq,
                                              children: W.map((e) =>
                                                  (0, a.jsx)(
                                                      dx,
                                                      {
                                                          project: e,
                                                          guildId: r,
                                                          onSelect: () => J(e),
                                                          onRemix: () => (0, nG.A)(e, r),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          }),
                                K.length > 0
                                    ? (0, a.jsxs)("div", {
                                          className: dd.qx,
                                          children: [
                                              (0, a.jsxs)("div", {
                                                  className: dd.uc,
                                                  children: [
                                                      (0, a.jsx)(j.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-strong",
                                                          children: eo.intl.string(es.default["wFi8+o"]),
                                                      }),
                                                      (0, a.jsx)(j.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          children: eo.intl.string(es.default.dQ3U1J),
                                                      }),
                                                  ],
                                              }),
                                              (0, a.jsx)("div", {
                                                  className: dd.Dq,
                                                  children: K.map((e) =>
                                                      (0, a.jsx)(
                                                          dx,
                                                          {
                                                              project: e,
                                                              guildId: r,
                                                              onSelect: () => J(e),
                                                              onRemix: () => (0, nG.A)(e, r),
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
function db(e) {
    let t,
        { guildId: n, projectId: l } = e,
        r = (0, f.yK)([eN.Ay], () => eN.Ay.getOwnedProjects()),
        s = (0, f.yK)([W.Ay], () => W.Ay.getSelfMember(n)?.roles ?? [], [n]),
        o = (0, f.bG)(
            [X.A, J.A],
            () => {
                let e = X.A.getGuild(n);
                return null != e && J.A.can(ex.xBc.MANAGE_GUILD, e);
            },
            [n],
        ),
        [u, c] = i.useState(""),
        d = l ?? null,
        [m, h] = i.useState(!1),
        [g, p] = i.useState(null),
        x = (0, t2.z9)("VibegrationsScreen"),
        [j, b] = i.useState(null),
        y = (0, $.o)().get(tW.f_) === eq;
    i.useEffect(() => {
        b(null);
    }, [n, y]);
    let k = i.useMemo(() => (!y && x.some((e) => e.id === n) ? n : eq), [x, n, y]),
        w = j ?? k,
        A = w === eq ? "user" : "guild",
        N = w === eq ? n : w,
        [S, C] = i.useState(null);
    (i.useEffect(() => {
        (0, eA.hF)(n);
    }, [n, s, o]),
        i.useEffect(() => {
            (0, eA.dm)(n, d);
        }, [n, d]));
    let E = i.useCallback(
            async (e, t, n) => {
                let l = await (0, eA.gA)({ guild_id: t, install_scope: n });
                ((0, en.Hc)(l),
                    (0, en.r2)(l, S ?? Y.A4),
                    e(l),
                    (0, H.pX)(ex.BVt.CHANNEL(t, ev.VV.CONJURE, l)),
                    c(""),
                    C(null));
            },
            [S],
        ),
        I = i.useCallback(
            async (e) => {
                let t = (e ?? u).trim(),
                    n = ew({ idea: t, installScope: A, submitting: m });
                if ("idea" !== n && "submitting" !== n) {
                    (null != e && c(e), h(!0), p(null));
                    try {
                        await E((e) => (0, en.dv)(e, t), N, A);
                    } catch (e) {
                        p((0, ey.mG)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [E, A, N, u, m],
        ),
        M = i.useCallback(
            async (e) => {
                if (!m) {
                    (h(!0), p(null));
                    try {
                        await E(
                            (t) => {
                                var n;
                                (0, en.dv)(
                                    t,
                                    ((n = e.name),
                                    eo.intl.formatToPlainString(es.default["0PQip6"], { templateName: n })),
                                    void 0,
                                    { templateId: e.id },
                                );
                            },
                            N,
                            A,
                        );
                    } catch (e) {
                        p((0, ey.mG)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [E, A, N, m],
        ),
        _ = i.useCallback(
            async (e, t) => {
                let n = await (0, eA.gA)({ guild_id: t, install_scope: "guild" });
                return ((0, en.Hc)(n), (0, en.r2)(n, S ?? Y.A4), (0, en.dv)(n, (0, nq.Wl)(e)), n);
            },
            [S],
        ),
        T = i.useCallback(async (e, t, n, l) => {
            if (eN.Ay.getProject(t)?.guild_id !== n) {
                let e = await (0, eA.M7)(t, { guild_id: n, preview_guild_id: n });
                if (!e.ok) throw new ey.DS((0, ey.hj)(e), e.status);
            }
            ((0, en.dv)(t, l, void 0, { templateId: e.id }), (0, H.pX)(ex.BVt.CHANNEL(n, ev.VV.CONJURE, t)), C(null));
        }, []),
        P = i.useCallback((e) => {
            (0, eA.xx)(e).catch(() => void 0);
        }, []),
        R = i.useCallback(
            (e) => {
                let t = eN.Ay.getProject(e)?.guild_id ?? n;
                ((0, H.pX)(ex.BVt.CHANNEL(t, ev.VV.CONJURE, e)), C(null));
            },
            [n],
        ),
        [L, D] = i.useState(!1),
        F = i.useCallback(
            async (e, t) => {
                let l = ec(e);
                if (null != l) return void (0, v.P0)((0, v.ox)(l, v.Ck.FAILURE));
                D(!0);
                let r = null;
                try {
                    ((r = await (0, eA.gA)({ guild_id: n, install_scope: t })),
                        (0, en.Hc)(r),
                        (0, en.r2)(r, S ?? Y.A4),
                        await eu(r, e, eo.intl.string(es.default["LUc7/5"])),
                        (0, H.pX)(ex.BVt.CHANNEL(n, ev.VV.CONJURE, r)),
                        C(null));
                } catch {
                    (null != r && (await (0, eA.xx)(r).catch(() => void 0)),
                        (0, v.P0)((0, v.ox)(eo.intl.string(es.default["Q+l4Hv"]), v.Ck.FAILURE)));
                } finally {
                    D(!1);
                }
            },
            [n, S],
        ),
        z = i.useCallback(
            (e) => {
                (0, H.pX)(ex.BVt.CHANNEL(n, ev.VV.CONJURE, e));
            },
            [n],
        ),
        O = i.useCallback(() => {
            (0, H.pX)(ex.BVt.CHANNEL(n, ev.VV.CONJURE));
        }, [n]),
        U = i.useCallback((e) => {
            (c(e), p(null));
        }, []),
        G = (0, f.bG)(
            [eN.Ay],
            () => {
                if (null == d) return null;
                let e = eN.Ay.getProject(d);
                return null == e || (0, eN.PV)(e) || e.guild_id === n ? e : null;
            },
            [d, n],
        ),
        q = (0, f.bG)([eN.Ay], () => eN.Ay.hasFetchedGuildProjects(n), [n]);
    return null != d
        ? (0, a.jsx)(dv, { project: G, projectsLoaded: q, onBack: O, guildId: n }, d)
        : (0, a.jsx)(dj, {
              projects: r,
              modelSettings: S,
              onModelSettingsChange: C,
              idea: u,
              guildId: n,
              submitting: m,
              createError: g,
              createDisabled: "idea" === (t = ew({ idea: u, installScope: A, submitting: m })) || "submitting" === t,
              onSelectProject: z,
              onIdeaChange: U,
              onCreate: I,
              onCreateFromTemplate: M,
              onStartTemplate: _,
              onSubmitTemplate: T,
              onCancelTemplate: P,
              onSkipTemplate: R,
              onImportNewProject: F,
              importing: L,
              conjureTarget: w,
              onConjureTargetChange: b,
              eligibleGuilds: x,
          });
}
