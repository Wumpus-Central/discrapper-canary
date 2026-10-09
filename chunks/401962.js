(n.r(t), n.d(t, { default: () => db }), n(321073));
var l,
    r,
    a = n(477900),
    i = n(582128),
    s = n(503698),
    u = n.n(s),
    o = n(536637),
    c = n.n(o),
    d = n(478104),
    f = n(17928),
    m = n(314116),
    h = n(534890),
    g = n(646270),
    p = n(31300),
    x = n(831453),
    v = n(858899),
    j = n(834730),
    b = n(939249),
    y = n(866665),
    w = n(140735),
    k = n(289873),
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
    z = n(627363),
    F = n(47167),
    O = n(713654),
    G = n(625180),
    U = n(672929),
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
    eu = n(660183);
async function eo(e, t, n) {
    (0, en.Hc)(e);
    let l = await (0, en.vX)(e, t);
    (0, en.dv)(e, n, [l]);
}
function ec(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, Y.Oq)(e.size, t)
        ? null
        : eu.intl.formatToPlainString(es.default.ThxcOX, { size: (0, Y.sM)((0, Y.Ju)(t)) });
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
        u = { user: r.open, guild: s.open };
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
                        "aria-label": eu.intl.string(es.default.soVyD1),
                        onClose: t,
                        onSelect: t,
                        children: (0, a.jsx)(ee.rX, {
                            label: eu.intl.string(es.default.NyVn6T),
                            children: eg
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: eu.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, a.jsx)(
                                        ee.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: u[e.scope] },
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
                        text: eu.intl.string(es.default.NJGZA3),
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
    ew = n(361504);
function ek(e) {
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
    ez = n(662429);
let eF = "heading-xxl/semibold",
    eO = !1;
function eG() {
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
    let u = (0, f.bG)([e$.A], () => e$.A.isIdle()),
        o = i.useRef(u);
    i.useEffect(() => {
        let t = o.current && !u;
        ((o.current = u), t && eO && (e.current?.stop(), e.current?.play()));
    }, [u]);
    let c = eu.intl.string(es.default["+5XyCR"]);
    return (0, a.jsx)("div", {
        ref: r,
        className: ez.x,
        children: t
            ? (0, a.jsx)(eP.H, { children: (0, a.jsx)(eT.o, { ref: e, text: c, variant: eF, delay: null }) })
            : (0, a.jsx)(E.D, { variant: eF, children: c }),
    });
}
var eU = n(548118);
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
    tu = n(534554),
    to = n(837984),
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
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: s, placement: o, open: c, entered: d } = e,
        [f, m] = i.useState(!1),
        h = tf(f),
        g = Y.PY.indexOf(t.tier),
        p = f ? tr.t : ta._,
        x = Y.PY.map(tu.D0),
        v = (0, tu.Tc)(t.tier),
        { text: b, phase: y } = (0, ts.Q)(v);
    return (0, a.jsx)("div", {
        className: td.qd,
        "data-placement": o ?? void 0,
        children: (0, a.jsxs)("div", {
            className: u()(td.t$, { [td.Zr]: c && d, [td.GF]: !c }),
            role: "dialog",
            "aria-label": eu.intl.string(es.default["3E7Yc0"]),
            children: [
                h.mounted
                    ? (0, a.jsx)("div", {
                          className: u()(td.Nr, td.uO, { [td.Zr]: f && h.entered, [td.GF]: !f }),
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
                                    "aria-label": eu.intl.string(es.default.eGqPbV),
                                    onClick: () => m((e) => !e),
                                    children: [
                                        (0, a.jsx)(j.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: eu.intl.string(es.default.aBPQxX),
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
                                    className: u()(td.Z, { [td.xQ]: "exit" === y, [td.lm]: "enter" === y }),
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
                                            children: eu.intl.string(es.default["/tlOR5"]),
                                        }),
                                        (0, a.jsx)(j.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: eu.intl.string(es.default.FxoUwB),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(to.A, {
                                    activeIndex: g,
                                    stops: x,
                                    ariaLabel: eu.intl.string(es.default.aBPQxX),
                                    disabled: r,
                                    onSelect: function (e) {
                                        let n = Y.PY[e];
                                        null != n && n !== t.tier && s((0, tu.CM)((0, tu.j6)(t, n)));
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
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: s, className: u, icon: o } = e,
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
                text: eu.intl.string(es.default["k2JN/p"]),
                shouldShow: !n,
                ariaHidden: !0,
                children: (0, a.jsx)(b.D, {
                    innerRef: c,
                    className: u ?? td.hZ,
                    "aria-label": eu.intl.string(es.default["k2JN/p"]),
                    ...e,
                    onClick: () => h((e) => !e),
                    "aria-expanded": m,
                    children: o ?? (0, a.jsx)(ti.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
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
function tw(e) {
    return "frame" === e.mode ? `frame-${e.surface}` : e.mode;
}
function tk(e) {
    switch (e.mode) {
        case "frame":
            return (0, ty.XV)(e.surface);
        case "widget":
            return eu.intl.string(es.default.y5GiL1);
        case "overlay":
            return eu.intl.string(es.default["2940LX"]);
        case "bot":
            return eu.intl.string(es.default.tjpaGN);
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
function tz(e) {
    return (0, tR.a3)(document, e);
}
function tF(e) {
    return i.useSyncExternalStore(tz, () => t$(e));
}
var tO = n(165610);
function tG(e) {
    let { frame: t, controlProjectId: n } = e,
        l = tF(t?.id ?? null),
        r = (0, tx.Zv)(n),
        i = (0, f.bG)(
            [tP.A, tT.A],
            () => null != t && tP.A.getWindowOpen(ex.MLl.ACTIVITY_POPOUT) && tT.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, tO.x1)(t) || i || r) return null;
    let s = tD(t.id);
    if (null == s || !(0, tR.Ub)(s)) return null;
    let u = eu.intl.string(l ? eu.t.Z7MyNB : eu.t.OIDkcp);
    return (0, a.jsx)(B.A.Icon, {
        tooltip: u,
        icon: l ? tM.z : t_.T,
        "aria-label": u,
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
var tU = n(559106),
    tq = n(847374),
    tB = n(704745);
function tH(e) {
    let { targets: t, target: n, onChange: l } = e,
        [r, s] = i.useState(!1),
        u = null != n && t.length > 1;
    r && !u && s(!1);
    let o = i.useCallback(() => s(!1), []),
        c = i.useCallback(() => s((e) => !e), []),
        d = i.useRef(null);
    if (!u) return null;
    let f = eu.intl.string(es.default.I2ucou);
    return (0, a.jsx)(Q.Y, {
        targetElementRef: d,
        shouldShow: r,
        onRequestClose: o,
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
                        let t = tw(e);
                        return (0, a.jsx)(
                            ee.iD,
                            {
                                id: `preview-target-${t}`,
                                group: "conjure-preview-target",
                                label: tk(e),
                                checked: t === tw(n),
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
            return (0, a.jsx)(tU.vN, {
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
                            children: eu.intl.string(es.default["N+VA1J"]),
                        }),
                        (0, a.jsx)(j.E, {
                            tag: "span",
                            variant: "text-sm/medium",
                            color: "none",
                            lineClamp: 1,
                            children: tk(n),
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
    nu = n(616334),
    no = n(189714),
    nc = n(733791),
    nd = n(189213),
    nf = n(331322),
    nm = n(150934),
    nh = n(706935);
function ng(e) {
    let { project: t, target: n, action: l, ...r } = e,
        [s, u] = i.useState(n.canRemovePreviewBot),
        [o, c] = i.useState(!1),
        [d, f] = i.useState(null),
        m = "delete" === l,
        h = m ? (0, nc.fI)(n) : (0, nc.Kd)(n),
        g = m ? null : (0, nc.Mi)(n),
        p = m
            ? eu.intl.formatToPlainString(es.default.CJBhb2, { name: n.projectName })
            : eu.intl.formatToPlainString(es.default.x6FvsZ, { app: n.appName });
    async function x() {
        (c(!0), f(null));
        let e = m ? (0, eA.xx)(t.id) : (0, eA.YI)(t.id, { alsoRemovePreviewBot: s }),
            l = await e.catch(() => null);
        (c(!1), l?.ok !== !0)
            ? f(eu.intl.string(m ? es.default["0XDHob"] : es.default.PJ2Fkn))
            : (m || (0, v.P0)({ text: (0, nc.p_)(n), variant: "success" }), r.onClose());
    }
    return (0, a.jsx)(nd.a, {
        ...r,
        role: "alertdialog",
        title: m ? p : (0, nc.WX)((0, nh.tb)(es.default.x6FvsZ, n.appName)),
        subtitle: m ? (0, nc.J)(n) : eu.intl.string(es.default["8OKM1N"]),
        "aria-label": p,
        notice: null == d ? void 0 : { message: d, type: "critical" },
        actions: [
            { text: eu.intl.string(eu.t["ETE/oC"]), variant: "secondary", onClick: r.onClose },
            {
                text: eu.intl.string(m ? es.default.aC42bN : es.default.BGF8VT),
                variant: "critical-primary",
                loading: o,
                disabled: o,
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
                          onChange: u,
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
    (0, v.P0)({ text: e, variant: "critical" });
}
function nb(e) {
    let {
            projectId: t,
            projectName: n,
            guildId: l,
            projectGuildId: r,
            isOwner: s,
            canRemix: u,
            onExport: o,
            onImport: c,
            onRemix: d,
            onConnectTool: h,
            onHistory: g,
            onRefresh: p,
            isRefreshing: x = !1,
            onClose: j,
            refreshApplicationId: b,
            previewProjectId: y,
            onCloseMenu: w,
        } = e,
        k = (0, no.iI)(t),
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
                                          ? eu.intl.string(es.default["jCQ/1B"])
                                          : eu.intl.string(es.default.POxkSh),
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
                    label: eu.intl.string(es.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            l))
                a.push(
                    "authorize" === i
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: eu.intl.formatToPlainString(es.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: r.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: eu.intl.formatToPlainString(es.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return a;
        })({ canRefresh: null != b, refreshPending: N, offers: _, connectPending: E }),
        R = i.useMemo(() => new Map(M.map((e) => [e.type, e])), [M]),
        L = null != d && u,
        D = s && null != c,
        $ = L || null != o || D || null != h || null != g,
        z = nl.p5 && null != l,
        F = nl.p5,
        O = k ? t3.BellIcon : t4.BellSlashIcon;
    return (0, a.jsxs)(Z.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": eu.intl.string(eu.t.ogxXGq),
        onClose: w,
        onSelect: w,
        children: [
            null != p || null != j
                ? (0, a.jsxs)(ee.rX, {
                      children: [
                          null != p
                              ? (0, a.jsx)(ee.Dr, {
                                    id: "refresh",
                                    icon: t6.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: t6.RefreshIcon },
                                    label: eu.intl.string(es.default["p4B/7M"]),
                                    disabled: x,
                                    action: p,
                                })
                              : null,
                          null != j
                              ? (0, a.jsx)(ee.Dr, {
                                    id: "close",
                                    icon: t7.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: t7.DoorExitIcon },
                                    label: eu.intl.string(es.default["/TlGcK"]),
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
                    label: eu.intl.string(k ? es.default.s9rCuH : es.default["a+i/As"]),
                    icon: O,
                    leadingAccessory: { type: "icon", icon: O },
                    action: () => (0, no.$L)(t, !k),
                }),
            }),
            $
                ? (0, a.jsxs)(ee.rX, {
                      children: [
                          L
                              ? (0, a.jsx)(ee.Dr, { id: "remix", label: eu.intl.string(es.default.XWgAfc), action: d })
                              : null,
                          null != o
                              ? (0, a.jsx)(ee.Dr, { id: "export", label: eu.intl.string(es.default.WsEEP7), action: o })
                              : null,
                          D
                              ? (0, a.jsx)(ee.Dr, { id: "import", label: eu.intl.string(es.default.rWGY3e), action: c })
                              : null,
                          null != h
                              ? (0, a.jsx)(ee.Dr, {
                                    id: "connect-tool",
                                    label: eu.intl.string(es.default.yOIql5),
                                    action: h,
                                })
                              : null,
                          null != g
                              ? (0, a.jsx)(ee.Dr, {
                                    id: "history",
                                    label: eu.intl.string(es.default["3hIVou"]),
                                    action: g,
                                })
                              : null,
                      ],
                  })
                : null,
            F
                ? (0, a.jsxs)(ee.rX, {
                      children: [
                          z
                              ? (0, a.jsx)(ee.Dr, {
                                    id: "copy-link",
                                    label: eu.intl.string(eu.t.WqhZss),
                                    icon: t5.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: t5.LinkIcon },
                                    action: () =>
                                        (0, nl.C)((0, nn.n)(l, ev.VV.CONJURE, t), () =>
                                            (0, v.P0)({ text: eu.intl.string(eu.t["L/PwZf"]), variant: "success" }),
                                        ),
                                })
                              : null,
                          (0, a.jsx)(ee.Dr, {
                              id: "copy-project-id",
                              label: eu.intl.string(es.default["nm/zuU"]),
                              icon: t8.L,
                              leadingAccessory: { type: "icon", icon: t8.L },
                              action: () =>
                                  (0, nl.C)(t, () =>
                                      (0, v.P0)({ text: eu.intl.string(es.default.CmfaZG), variant: "success" }),
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
                                    label: eu.intl.string(es.default.FzfmQ8),
                                    icon: C.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: C.SettingsIcon },
                                    action: () =>
                                        (0, nu.A)(t, {
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
                                    label: eu.intl.formatToPlainString(es.default["3gKG2j"], { server: T.guildName }),
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
                                    label: eu.intl.string(eu.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let e = eN.Ay.getProject(t);
                                        if (null != e && null != T) np({ project: e, target: T, action: "delete" });
                                        else
                                            (0, m.A)({
                                                title: eu.intl.formatToPlainString(es.default.CJBhb2, { name: n }),
                                                subtitle: eu.intl.string(es.default["0OmrVn"]),
                                                confirmText: eu.intl.string(eu.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, eA.K)(t, () =>
                                                        (0, v.P0)({
                                                            text: eu.intl.string(es.default["0XDHob"]),
                                                            variant: "critical",
                                                        }),
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
                              text: eu.intl.string(eu.t["UKOtz+"]),
                              children: (0, a.jsx)(t9.K, {
                                  icon: ne.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": eu.intl.string(eu.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": i,
                                  onClick: r,
                              }),
                          })
                        : (0, a.jsx)(B.A.Icon, {
                              icon: ne.MoreHorizontalIcon,
                              tooltip: eu.intl.string(eu.t["UKOtz+"]),
                              "aria-label": eu.intl.string(eu.t["UKOtz+"]),
                              "aria-haspopup": "menu",
                              "aria-expanded": i,
                              selected: i,
                              onClick: r,
                          }),
            });
        },
    });
}
var nw = n(497183),
    nk = n(104171),
    nA = n(286739);
function nN(e) {
    let { creator: t, className: n } = e;
    return (0, a.jsx)("div", {
        className: u()(nA.c, n),
        "aria-hidden": !0,
        children: (0, a.jsx)(nk.Ay, { users: [t.creator, ...t.collaborators], max: 3, size: nk.DN.SIZE_16 }),
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
    nz = n(808728),
    nF = n(516288);
function nO(e) {
    let { reason: t, message: n, onConfirm: l, transitionState: r, onClose: i } = e,
        s = (0, nF.t)(t, n);
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
var nG = n(951465),
    nU = n(95264),
    nq = n(952644),
    nB = n(991690),
    nH = n(58736),
    nK = n(689175),
    nV = n(683071),
    nW = n(65593),
    nX = n(115982);
function nJ(e) {
    return !(0, ej.BL)(e) && !0 !== e.stopRequested;
}
var nY = n(104317),
    nQ = n(643278),
    nZ = n(566424),
    n0 = n(683063),
    n1 = n(138212);
function n2(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: i, ...s } = e;
    return (0, a.jsxs)("section", {
        className: u()(n1.Nr, r),
        ...s,
        children: [
            (0, a.jsxs)("header", {
                className: u()(n1.wx, null != n && n1.o5, i),
                children: [
                    (0, a.jsx)(j.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var n3 = n(148590);
function n4(e) {
    let { children: t } = e;
    return (0, a.jsx)(j.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function n6(e) {
    let {
            title: t,
            meta: n,
            superseded: l = !1,
            showLabel: r,
            hideLabel: s,
            bodyClassName: o,
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
    return (0, a.jsxs)(n2, {
        ...f,
        title: t,
        trailing: y
            ? (0, a.jsxs)("span", {
                  className: n3.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(b.D, {
                                className: n3.L$,
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
        headerClassName: h ? void 0 : n3.RG,
        "data-superseded": l ? "true" : void 0,
        children: [c, (0, a.jsx)("div", { id: m, className: u()(n3.rf, o), hidden: !h, children: d })],
    });
}
var n7 = n(883646);
let n5 = [];
function n8(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: u()(n7.xL, {
            [n7.Vb]: "in_progress" === t,
            [n7.cT]: "completed" === t,
            [n7.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return eu.intl.string(es.default.KvBdun);
                case "in_progress":
                    return eu.intl.string(es.default["m5G9+S"]);
                case "unfinished":
                    return eu.intl.string(es.default.lRpwhD);
                default:
                    return eu.intl.string(es.default.sPGeWi);
            }
        })(t),
        children: [
            (0, a.jsx)(k.y, {
                type: k.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: n7.Qd,
                itemClassName: n7.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: n7.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: n7.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function n9(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : n5), [n, t]),
        r = i.useMemo(() => new Set(l.map((e) => e.key)), [l]),
        s = l.map((e) => e.key).join("\0"),
        [u, o] = i.useState(l),
        [c, d] = i.useState(s),
        [f, m] = i.useState(!1);
    c !== s && (d(s), o([...l, ...u.filter((e) => !r.has(e.key))]), 0 === l.length && m(!1));
    let h = u.some((e) => !r.has(e.key));
    if (
        (i.useEffect(() => {
            if (!h) return;
            let e = setTimeout(() => o(l), n ? 200 : 250);
            return () => clearTimeout(e);
        }, [h, l, n]),
        i.useEffect(() => {
            if (!n || 0 === u.length) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => m(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [n, u.length]),
        0 === u.length)
    )
        return null;
    let g = u.slice(0, 3),
        p = u.length - g.length;
    return (0, a.jsxs)("span", {
        className: n7.X6,
        "data-shown": n && f ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    n0.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: n7.MA,
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
                      className: n7.qA,
                      children: `+${p}`,
                  })
                : null,
        ],
    });
}
function le(e) {
    let t,
        { todos: n, provisional: l, agents: r, live: s = !0 } = e,
        o = (function (e) {
            let t = e.join("\0"),
                [n, l] = i.useState(() => new Set(e)),
                [r, a] = i.useState(t),
                [s, u] = i.useState(() => new Set());
            return (
                r !== t && (a(t), l(new Set(e)), u(0 === n.size ? new Set() : new Set(e.filter((e) => !n.has(e))))),
                i.useEffect(() => {
                    if (0 === s.size) return;
                    let e = 0,
                        t = requestAnimationFrame(() => {
                            e = requestAnimationFrame(() => u(new Set()));
                        });
                    return () => {
                        (cancelAnimationFrame(t), cancelAnimationFrame(e));
                    };
                }, [s]),
                s
            );
        })(i.useMemo(() => n.map((e) => e.id), [n])),
        c =
            ((t = (r ?? n5).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            i.useMemo(() => {
                let e = new Map();
                for (let t of r ?? n5) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let n = e.get(t.todoId);
                    null != n ? n.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, a.jsxs)("ul", {
        className: n7.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: u()(n7.AS, { [n7.J1]: "completed" === n }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(n8, { status: n }),
                            (0, a.jsx)(j.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: n7.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: n7.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(n9, { agents: c.get(e.id) ?? n5, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: n7.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(n8, { status: "pending" }),
                          (0, a.jsx)(j.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: n7.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: n7.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function lt(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: u, total: o } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === o) return null;
    let c = eu.intl.formatToPlainString(es.default["P/I+JW"], { completed: u, total: o }),
        d = eu.intl.formatToPlainString(es.default["7tzwKB"], { completed: u, total: o });
    return (0, a.jsx)(n6, {
        title: eu.intl.string(es.default.RtzECX),
        meta: (0, a.jsx)(n4, { children: c }),
        superseded: s,
        showLabel: eu.intl.string(es.default.RKyN9q),
        hideLabel: eu.intl.string(es.default.xydHoj),
        className: n7.Nr,
        bodyClassName: n7.rf,
        beforeBody: r && !s ? (0, a.jsx)(w.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(le, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var ln = n(308665),
    ll = n(59678),
    lr = n(903847);
function la(e) {
    let { line: t, placement: n, todos: l, todosLive: r = !0, provisionalTodo: s, agents: o, onJumpToActivity: c } = e,
        d = null != n,
        [f, m] = i.useState(n ?? "top"),
        [h, g] = i.useState(d),
        [p, x] = i.useState(!1),
        [v, j] = i.useState(!1),
        [w, k] = i.useState(d);
    (w !== d && (k(d), null != n ? (m(n), g(!0)) : (x(!1), j(!1))),
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
              className: lr.qd,
              "data-placement": f,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: u()(lr.vK, { [lr.ho]: p && d, [lr.ET]: !d }),
                      children: [
                          null == c
                              ? (0, a.jsx)("ol", {
                                    className: u()(lr.Rk, ll.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(nZ.A, {
                                        glyph: (0, a.jsx)(ln.Ay, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(b.D, {
                                    className: lr.pZ,
                                    onClick: c,
                                    "aria-label": eu.intl.string(es.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: u()(lr.Rk, ll.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(nZ.A, {
                                            glyph: (0, a.jsx)(ln.Ay, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          M
                              ? (0, a.jsx)(y.m, {
                                    text: eu.intl.string(es.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(b.D, {
                                        className: lr.BO,
                                        onClick: _,
                                        "aria-expanded": v,
                                        "aria-label": eu.intl.string(es.default.RtzECX),
                                        children: (0, a.jsx)(nQ.ClipboardListIcon, {
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
                            className: u()(lr.vB, { [lr.pg]: v && S, [lr.ui]: !v }),
                            children: (0, a.jsx)(lt, {
                                todos: l,
                                provisional: s,
                                agents: o,
                                live: r,
                                announceProgress: !1,
                            }),
                        })
                      : null,
              ],
          })
        : null;
}
var li = n(658675),
    ls = n(22231),
    lu = n(826745),
    lo = n(123292);
let lc = {
        [ex.rbe.GUILD_TEXT]: "text",
        [ex.rbe.GUILD_VOICE]: "voice",
        [ex.rbe.GUILD_ANNOUNCEMENT]: "announcement",
        [ex.rbe.GUILD_STAGE_VOICE]: "stage",
        [ex.rbe.GUILD_FORUM]: "forum",
        [ex.rbe.GUILD_MEDIA]: "media",
    },
    ld = { channel: "#", role: "@", user: "@" };
var lf = n(155078);
function lm(e) {
    return e.options.some((e) => null != e.image);
}
let lh = [];
function lg(e, t) {
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
var lp = n(890497),
    lx = n(300344),
    lv = n(614733),
    lj = n(904363),
    lb = n(950902),
    ly = n(384017);
function lw(e) {
    let {
            guildId: t,
            question: n,
            value: l,
            disabled: r,
            onChange: i,
            onFocus: s,
            onBlur: u,
            options: o,
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
            name: o.find((t) => t.value === e)?.label ?? l.find((t) => t.id === e)?.name ?? e,
            ...(function (e, t) {
                if ("channel" === e) {
                    var n;
                    let l = null == (n = V.A.getChannel(t)?.type) ? void 0 : lc[n];
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
        options: o,
        placeholder: c,
        disabled: r,
        onQueryChange: d,
        matchSorterOptions: f,
        onFocus: s,
        onBlur: u,
        fullWidth: !0,
        maxOptionsVisible: 4,
        label: n.question,
        hideLabel: !0,
    };
    return (0, a.jsx)("div", {
        className: ly.YX,
        "data-conjure-clarification-picker": n.input,
        children: m
            ? (0, a.jsx)(lp.Z, {
                  ...p,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => i(g(e), t),
              })
            : (0, a.jsx)(lp.Z, {
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
function lA(e, t) {
    return eu.intl.string(lk[e][+!!t]);
}
function lN(e) {
    let { guildId: t, fallback: n, ...l } = e,
        r = (0, lx.A)(t, l.question.channel_filter);
    return null == r
        ? n
        : (0, a.jsx)(lw, { ...l, guildId: t, options: r, placeholder: lA("channel", !0 === l.question.multi_select) });
}
function lS(e) {
    let { guildId: t, ...n } = e,
        l = (0, lj.A)(t);
    return (0, a.jsx)(lw, { ...n, guildId: t, options: l, placeholder: lA("role", !0 === n.question.multi_select) });
}
function lC(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: i } = (0, lv.A)(t);
    return (0, a.jsx)(lw, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: i,
        placeholder: lA("user", !0 === n.question.multi_select),
    });
}
function lE(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, lb.Tj)(t, !0);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, a.jsx)(lN, { guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, a.jsx)(lS, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, a.jsx)(lC, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var lI = n(87221),
    lM = n(144228),
    l_ = n(241326),
    lT = n(26430),
    lP = n(750943),
    lR = n(95477),
    lL = n(256905),
    lD = n(73153),
    l$ = n(839214);
let lz = [],
    lF = 1,
    lO = (0, l$.D)(() => ({ draftsByProject: {} }));
function lG(e, t, n) {
    return e.draftsByProject[t]?.[n] ?? lz;
}
function lU(e, t) {
    return lG(lO.getState(), e, t);
}
function lq(e, t, n) {
    let { draftsByProject: l } = lO.getState();
    lO.setState({ draftsByProject: { ...l, [e]: { ...l[e], [t]: n } } });
}
function lB(e, t, n, l) {
    let r = lU(e, t);
    return (
        !!r.some((e) => e.localId === n) &&
        (lq(
            e,
            t,
            r.map((e) => (e.localId === n ? { ...e, ...l } : e)),
        ),
        !0)
    );
}
function lH(e, t) {
    (0, en.Vm)(e, t).catch((e) => {
        console.error("[vibegrations] attachment cleanup failed", e);
    });
}
function lK(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && lH(e, t.ref.id));
}
function lV(e, t) {
    let { deleteFromWorker: n } = t,
        { draftsByProject: l } = lO.getState(),
        r = l[e];
    if (null == r) return;
    for (let t of Object.values(r))
        for (let l of t ?? lz) n ? lK(e, l) : null != l.previewUrl && URL.revokeObjectURL(l.previewUrl);
    let { [e]: a, ...i } = l;
    lO.setState({ draftsByProject: i });
}
function lW(e) {
    return eu.intl.formatToPlainString(es.default.JZ59Bo, { size: (0, Y.sM)((0, Y.Ju)(e)) });
}
function lX(e, t) {
    let n = lU(e, t);
    if (0 !== n.length) {
        for (let t of n) lK(e, t);
        lq(e, t, lz);
    }
}
function lJ(e, t) {
    let n = lU(e, t);
    if (0 === n.length) return [];
    for (let e of n) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (lq(e, t, lz), n.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function lY(e, t) {
    let { clarificationAnswers: n, attachments: l = [] } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = lU(e, "chat"),
        a = r.length > 0 && r.every((e) => "ready" === e.status) ? lJ(e, "chat") : [];
    (0, en.dv)(e, t, [...l, ...a], { clarificationAnswers: n });
}
function lQ(e, t) {
    let [n, l] = i.useState(null),
        [r, a] = i.useState(!1),
        [s, u] = i.useState(0);
    return (
        i.useEffect(() => {
            let n = !1;
            return (
                (0, en.PK)(e, t).then(
                    (e) => {
                        n || l(e);
                    },
                    () => {
                        n || (0 === s ? u(1) : a(!0));
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
                            e && 0 === s ? u(1) : a(!0);
                        },
                        () => a(!0),
                    ));
            }, [e, t, s]),
        }
    );
}
(lD.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(lO.getState().draftsByProject)) lV(e, { deleteFromWorker: !0 });
}),
    lD.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        lV(t, { deleteFromWorker: !1 });
    }));
var lZ = n(907702);
function l0(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: o, handleError: c } = lQ(t, n),
        [d, f] = i.useState(null),
        m = null != s && d === s;
    return o
        ? (0, a.jsxs)("span", {
              className: u()(lZ.Gt, lZ.b6),
              children: [
                  (0, a.jsx)(lI.D, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(j.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: eu.intl.string(es.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: u()(lZ.Gt, { [lZ.iP]: !m }),
              children:
                  null != s
                      ? (0, a.jsx)("img", {
                            src: s,
                            alt: l,
                            className: lZ.Sl,
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
function l1(e) {
    let t,
        n,
        {
            projectId: l,
            option: r,
            multi: i,
            selected: s,
            disabled: o,
            reachable: c,
            tabbable: d,
            onPick: f,
            onView: m,
            onArrow: h,
            onMeasured: g,
            onRemove: p,
        } = e,
        x = eu.intl.formatToPlainString(es.default.JGjZMs, { answer: r.label });
    return (0, a.jsxs)("div", {
        className: u()(lZ.Vs, { [lZ.Q9]: s, [lZ.RX]: o }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, a.jsxs)(b.D, {
                className: lZ.Up,
                "data-conjure-image-option-pick": !0,
                onClick: o ? void 0 : () => f(r),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), h(r, t));
                },
                role: i ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": eu.intl.formatToPlainString(es.default.AQbxhf, { answer: r.label }),
                "aria-disabled": o,
                tabIndex: c && d ? 0 : -1,
                children: [
                    (0, a.jsxs)("span", {
                        className: lZ.$_,
                        children: [
                            null != r.image
                                ? (0, a.jsx)(l0, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: g,
                                  })
                                : (0, a.jsx)("span", { className: lZ.Gt }),
                            (0, a.jsx)("span", {
                                className: lZ.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, a.jsx)(li.P, { checked: s, disabled: o })
                                    : (0, a.jsx)(lM.T, { checked: s, disabled: o }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(j.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: lZ.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, lf.E)(t) : "")
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
                      className: lZ.B4,
                      children: (0, a.jsx)(y.m, {
                          text: eu.intl.string(es.default.HQEXJM),
                          children: (0, a.jsx)(t9.K, {
                              icon: l_.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: p,
                              disabled: o,
                              "aria-label": eu.intl.string(es.default.HQEXJM),
                              tabIndex: c ? 0 : -1,
                          }),
                      }),
                  })
                : null != r.image
                  ? (0, a.jsx)("span", {
                        className: lZ.B4,
                        children: (0, a.jsx)(y.m, {
                            text: eu.intl.string(es.default["4/eeDD"]),
                            children: (0, a.jsx)(t9.K, {
                                icon: lT._,
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
function l2(e) {
    var t;
    let { projectId: n, question: l, selectedIds: r, disabled: s, reachable: o = !0, onPick: c, own: d } = e,
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
                            (0, lL.R)({
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
        w =
            null == d.image
                ? null
                : ((t = d.image),
                  {
                      id: `own:${t.attachment.id}`,
                      label: eu.intl.string(es.default.SUdqCQ),
                      image: { attachment_id: t.attachment.id },
                  });
    return (0, a.jsxs)("div", {
        className: lZ.Nz,
        "data-conjure-image-options": !0,
        children: [
            (0, a.jsxs)("div", {
                ref: g,
                className: u()(lZ.fF, "gallery" === h ? lZ.nV : lZ.nM, { [lZ.m3]: f }),
                role: f ? "group" : "radiogroup",
                "aria-labelledby": `${l.id}-label`,
                "data-layout": h,
                "data-count": m.length,
                children: [
                    m.map((e) =>
                        (0, a.jsx)(
                            l1,
                            {
                                projectId: n,
                                option: e,
                                multi: f,
                                selected: r.includes(e.id),
                                disabled: s,
                                reachable: o,
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
                    null != w
                        ? (0, a.jsx)(
                              l1,
                              {
                                  projectId: n,
                                  option: w,
                                  multi: f,
                                  selected: d.selected,
                                  disabled: s,
                                  reachable: o,
                                  tabbable: !0,
                                  onPick: d.onPick,
                                  onView: () => void 0,
                                  onArrow: () => void 0,
                                  onMeasured: () => void 0,
                                  onRemove: d.onRemove,
                              },
                              w.id,
                          )
                        : null,
                ],
            }),
            (0, a.jsx)(l3, {
                projectId: n,
                own: d,
                disabled: s,
                reachable: o,
                uploadText: eu.intl.string(/\bicons?\b/i.test(l.question) ? es.default.qU4WN6 : es.default.cbMDDB),
            }),
        ],
    });
}
function l3(e) {
    let { projectId: t, own: n, disabled: l, reachable: r, uploadText: s } = e,
        u = i.useRef(null),
        [o, c] = i.useState(!1),
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
        className: lZ.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, a.jsxs)("div", {
                className: lZ.QJ,
                children: [
                    (0, a.jsx)(A.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: lP.X,
                        text: s,
                        loading: "upload" === h,
                        disabled: l || "link" === h,
                        onClick: () => u.current?.click(),
                        tabIndex: m,
                        "data-conjure-own-image-upload": !0,
                    }),
                    o
                        ? null
                        : (0, a.jsx)(A.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: t5.LinkIcon,
                              text: eu.intl.string(es.default["1TgOO+"]),
                              disabled: l || "upload" === h,
                              onClick: () => c(!0),
                              tabIndex: m,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, a.jsx)("input", {
                        ref: u,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: lZ.Fg,
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
                                            : Promise.resolve({ errorText: lW(r) })),
                                    ));
                        },
                    }),
                ],
            }),
            o
                ? (0, a.jsxs)("div", {
                      className: lZ.vG,
                      children: [
                          (0, a.jsx)("div", {
                              className: lZ.Hs,
                              children: (0, a.jsx)(lR.k, {
                                  label: eu.intl.string(es.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: eu.intl.string(es.default.AVhvn8),
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
                              className: lZ.gd,
                              children: [
                                  (0, a.jsx)(A.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: eu.intl.string(es.default.FbRbeM),
                                      loading: "link" === h,
                                      disabled: l || "" === d.trim(),
                                      onClick: g,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, a.jsx)(lo.Q, {
                                      variant: "secondary",
                                      textVariant: "text-sm/medium",
                                      text: eu.intl.string(es.default.eXZL4X),
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
var l4 = n(29073);
function l6(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: o } = e,
        c = i.useId(),
        d = !0 === t.recommended,
        f = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(b.D, {
        className: u()(ly.uK, { [ly.ue]: l, [ly.h4]: !0 === o }),
        onClick: l ? void 0 : () => r(t),
        "aria-label": eu.intl.formatToPlainString(d ? es.default["2p6UFz"] : es.default.AQbxhf, { answer: t.label }),
        "aria-describedby": f ? c : void 0,
        "aria-disabled": l,
        role: null != o ? "checkbox" : void 0,
        "aria-checked": o,
        tabIndex: s ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            null != o
                ? (0, a.jsx)("span", { className: ly.dy, children: (0, a.jsx)(li.P, { checked: o, disabled: l }) })
                : (0, a.jsx)("span", { className: ly.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: ly.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: ly.l8,
                        children: (0, a.jsx)(j.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: ly.ed,
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
                      className: ly.rM,
                      children: eu.intl.string(es.default.zku6r1),
                  })
                : null,
        ],
    });
}
function l7(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: i = !0, onPick: s, own: u } = e,
        o = !0 === n.multi_select;
    return lm(n)
        ? (0, a.jsx)(l2, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: i, onPick: s, own: u })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      l6,
                      {
                          option: e,
                          position: t + 1,
                          disabled: r,
                          selected: o ? l.includes(e.id) : void 0,
                          onPick: s,
                          reachable: i,
                      },
                      e.id,
                  ),
              ),
          });
}
let l5 = [],
    l8 = [];
function l9(e) {
    let {
            projectId: t,
            question: n,
            draft: l,
            selected: r,
            direction: i,
            disabled: s,
            ownImage: o,
            ownSelected: c,
        } = e,
        d = "" === l.trim() ? null : l,
        f = !0 === n.multi_select;
    return (0, a.jsxs)("div", {
        className: u()(ly.Ge, ly.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            f
                ? (0, a.jsx)(j.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: ly.aK,
                      children: eu.intl.string(es.default.tE8qbz),
                  })
                : null,
            (0, a.jsx)(l7, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: lg(o, c),
            }),
            lm(n) || !1 === n.allow_custom
                ? null
                : (0, a.jsxs)("div", {
                      className: ly.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: ly.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(ls.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == d ? null : (0, a.jsx)("span", { className: u()(ly.Pu, ly.es), children: d }),
                      ],
                  }),
        ],
    });
}
function re(e) {
    var t;
    let { projectId: n, clarification: l, onSubmit: r, onDismiss: s } = e,
        [o, c] = i.useState({}),
        [d, f] = i.useState({}),
        [m, h] = i.useState({}),
        [g, p] = i.useState({}),
        [x, v] = i.useState({}),
        [w, k] = i.useState(!1),
        [N, S] = i.useState(0),
        [C, E] = i.useState(null),
        [I, M] = i.useState(null),
        [_, T] = i.useState(null),
        [R, L] = i.useState(!1),
        D = i.useRef(null),
        [$, z] = i.useState(null),
        F = i.useRef(null),
        O = i.useRef(0),
        G = null == r,
        U = l.questions.length,
        q = Math.min(N, U - 1),
        B = l.questions[q],
        [H, K] = i.useState({ id: B.id, expanded: !1 }),
        V = H.id === B.id && H.expanded,
        [W, X] = i.useState(null),
        J = d[B.id] ?? "",
        Y = !0 === B.multi_select,
        Q = lm(B),
        Z = Y ? (m[B.id] ?? l5) : ((t = o[B.id]), t?.kind === "option" ? [t.optionId] : lh),
        ee = (function (e, t, n) {
            let [l, r] = i.useState({}),
                [a, s] = i.useState({}),
                [u, o] = i.useState({}),
                c = eu.intl.string(es.default.wTsP5l),
                d = i.useCallback((e) => l[e] ?? null, [l]),
                f = i.useCallback(
                    (e) => null != l[e.id] && (!0 === e.multi_select ? !0 === u[e.id] : t[e.id]?.kind === "image"),
                    [t, l, u],
                ),
                m = i.useCallback(
                    (e) => {
                        let t = l[e.id];
                        return null != t && !0 === u[e.id] ? { attachment: t.attachment, text: c } : void 0;
                    },
                    [c, l, u],
                ),
                h = i.useCallback(
                    (i, u) => {
                        let d = i.id,
                            m = !0 === i.multi_select,
                            h = l[d] ?? null;
                        if (u) return lg(h, f(i));
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
                                m ? o((e) => ({ ...e, [d]: !0 })) : n((e) => (e[d] === x ? { ...e, [d]: p(t) } : e)));
                        }
                        return {
                            image: h,
                            selected: f(i),
                            busy: a[d]?.busy ?? null,
                            error: a[d]?.error ?? null,
                            onPick: () => {
                                null != h &&
                                    (m ? o((e) => ({ ...e, [d]: !0 !== e[d] })) : n((e) => ({ ...e, [d]: p(h) })));
                            },
                            onRemove: () => {
                                null != h &&
                                    ((0, en.Vm)(e, h.attachment.id).catch(() => void 0),
                                    r((e) => {
                                        let { [d]: t, ...n } = e;
                                        return n;
                                    }),
                                    o((e) => ({ ...e, [d]: !1 })),
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
                                                error: { source: "upload", text: eu.intl.string(es.default["kUw/b1"]) },
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
                                                        : eu.intl.string(es.default.l79PMc),
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
        })(n, o, c),
        et = ee.imageFor(B.id),
        el = ee.selectedFor(B),
        { text: er, phase: ea } = (0, ts.Q)(B.question),
        ei = er === B.question,
        eo = ei && W?.id === B.id && W.truncated;
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
    let ec = eu.intl.string(V ? eu.t.iTcuma : eu.t.dcl9MQ),
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
                t = F.current;
            null != e && null != t && T({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    i.useLayoutEffect(() => {
        let e = D.current,
            t = F.current;
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
                if (G) return;
                let t = { ...o, [B.id]: e };
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
            [o, l, G, q, B.id, ed, ef],
        ),
        ep = i.useCallback(() => {
            G || 0 === q || ef(q - 1, "back");
        }, [G, q, ef]),
        ex = q > 0 && !G,
        ev = i.useCallback(
            (e) => {
                f((e) => ({ ...e, [B.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                Q ? G || c((e) => ({ ...e, [B.id]: t })) : eg(t);
            },
            [G, Q, B.id, eg],
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
        ey = g[B.id] ?? l8,
        ew = i.useMemo(() => {
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
                      text: [...ey.map((t) => `${ld[e]}${t.name}`), ...("" === n ? [] : [n])].join(", "),
                  })
                : null;
        }, [J, x, ey, B.id, B.input]),
        ek = i.useCallback(
            (e, t) => {
                (p((t) => ({ ...t, [B.id]: e })), v((e) => ({ ...e, [B.id]: t })));
            },
            [B.id],
        ),
        eA = i.useCallback(() => k(!0), []),
        eN = i.useCallback(() => k(!1), []),
        eS = ee.controlsFor(B, G),
        eC = i.useCallback(() => {
            if (null != ew) {
                "" !== ew.text && eg(ew);
                return;
            }
            if (null != eb) {
                "" !== eb.text && eg(eb);
                return;
            }
            let e = J.trim();
            "" !== e && eg({ kind: "custom", text: e });
        }, [J, eb, ew, eg]),
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
                null != ew
                    ? "" !== ew.text
                        ? ew
                        : null
                    : null != eb
                      ? "" !== eb.text
                          ? eb
                          : null
                      : "" !== J.trim()
                        ? { kind: "custom", text: J.trim() }
                        : (o[B.id] ?? null),
            [o, J, eb, ew, B.id],
        ),
        eR = null != eP && !G,
        eL = q === U - 1,
        eD = i.useCallback(() => {
            null == eP || G || eg(eP);
        }, [G, eP, eg]),
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
        ez = Q
            ? null
            : (0, a.jsxs)("div", {
                  className: ly.Xy,
                  children: [
                      (0, a.jsx)("span", {
                          className: ly.Gy,
                          "aria-hidden": !0,
                          children: (0, a.jsx)(ls.PencilIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                          }),
                      }),
                      (0, a.jsx)(lu.y, {
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
                          placeholder: eu.intl.string(es.default["tOC+tn"]),
                          "aria-label": eu.intl.formatToPlainString(es.default["4JeYPB"], { question: B.question }),
                          disabled: G,
                          rows: 1,
                          className: ly.Pu,
                          "data-conjure-clarification-other": B.id,
                      }),
                  ],
              });
    return (0, a.jsxs)("section", {
        className: u()(ly.$O, { [ly.fI]: eE && !eM, [ly.Oh]: eM }),
        role: "dialog",
        "aria-label": B.question,
        "data-conjure-clarification": l.id,
        "data-state": G ? "inert" : "open",
        "data-question-expanded": V ? "true" : void 0,
        "data-picker-open": w && !R ? "true" : void 0,
        "data-step": q,
        tabIndex: -1,
        onKeyDown: e$,
        children: [
            (0, a.jsxs)("div", {
                className: ly.rf,
                style: null == _ ? void 0 : { height: _.heading + _.rows },
                "data-moving": R ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: D,
                        className: ly.wx,
                        children: [
                            (0, a.jsx)(j.E, {
                                ref: z,
                                tag: "span",
                                id: `${B.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: V ? void 0 : 5,
                                className: u()(l4.TK, ly.R_, { [ly.TB]: "exit" === ea, [ly.JU]: "enter" === ea }),
                                children: er,
                            }),
                            eo || V
                                ? (0, a.jsx)("div", {
                                      className: l4.Q7,
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
                                      className: u()(l4.gb, l4.Q7),
                                      onClick: eT,
                                      "aria-label": eu.intl.string(es.default.qVXlk0),
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
                        className: ly.Cg,
                        style: null == _ ? void 0 : { insetBlockStart: _.heading },
                        children: (0, a.jsxs)("div", {
                            className: ly.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: F,
                                    className: ly.Ge,
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
                                                  className: ly.aK,
                                                  children: eu.intl.string(es.default.tE8qbz),
                                              })
                                            : null,
                                        (0, a.jsx)(l7, {
                                            projectId: n,
                                            question: B,
                                            selected: Z,
                                            disabled: G,
                                            onPick: (e) =>
                                                Y
                                                    ? h((t) => {
                                                          var n, l;
                                                          let r;
                                                          return {
                                                              ...t,
                                                              [B.id]:
                                                                  ((n = t[B.id] ?? l5),
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
                                            ? (0, a.jsx)(lE, {
                                                  projectId: n,
                                                  question: B,
                                                  value: ey,
                                                  disabled: G,
                                                  onChange: ek,
                                                  onFocus: eA,
                                                  onBlur: eN,
                                                  fallback: !1 === B.allow_custom ? ez : null,
                                              })
                                            : null,
                                        !1 === B.allow_custom ? null : ez,
                                    ],
                                }),
                                null == I
                                    ? null
                                    : (0, a.jsx)(
                                          l9,
                                          {
                                              projectId: n,
                                              question: I.question,
                                              draft: I.draft,
                                              selected: I.selected,
                                              ownImage: I.ownImage,
                                              ownSelected: I.ownSelected,
                                              direction: I.direction,
                                              disabled: G,
                                          },
                                          I.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            U > 1 || Y || Q || null != B.input
                ? (0, a.jsxs)("div", {
                      className: l4.qr,
                      children: [
                          (0, a.jsx)(j.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  U > 1
                                      ? eu.intl.formatToPlainString(es.default.yzYUjq, { index: q + 1, total: U })
                                      : null,
                          }),
                          (0, a.jsxs)("div", {
                              className: l4.zt,
                              children: [
                                  ex
                                      ? (0, a.jsx)(lo.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: eu.intl.string(es.default.Pk5lfA),
                                            onClick: ep,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  (0, a.jsx)(A.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: eu.intl.string(eL ? eu.t.geKm7t : es.default.w1nRmT),
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
var rt = n(572253),
    rn = n(411236);
function rl(e) {
    let { projectId: t, request: n, onDismiss: l } = e,
        r = null != n.note && "" !== n.note ? n.note : eu.intl.string(es.default.XuOf5s);
    return (0, a.jsx)(rt.A, {
        projectId: t,
        scopeKeys: n.keys,
        notifyAgent: !0,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: n, saving: i, submit: s } = e;
            function o(e) {
                (e.preventDefault(), s());
            }
            let c = (0, a.jsx)(A.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: i,
                disabled: !n,
                text: eu.intl.string(es.default.A7dQd9),
            });
            return null == l
                ? (0, a.jsxs)("form", {
                      className: rn.Mk,
                      onSubmit: o,
                      children: [
                          (0, a.jsx)(j.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: eu.intl.string(es.default["jZjP+I"]),
                          }),
                          (0, a.jsx)(j.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              selectable: !0,
                              children: r,
                          }),
                          t,
                          (0, a.jsx)("div", { className: rn.p0, children: c }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: u()(l4.nd, l4.jx),
                      "aria-label": eu.intl.string(es.default["jZjP+I"]),
                      onSubmit: o,
                      children: [
                          (0, a.jsxs)("div", {
                              className: l4.wx,
                              children: [
                                  (0, a.jsx)(j.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: l4.TK,
                                      children: eu.intl.string(es.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(b.D, {
                                      className: u()(l4.gb, l4.Q7),
                                      onClick: l,
                                      "aria-label": eu.intl.string(es.default["iq+Pte"]),
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
                              className: rn.DQ,
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
                              className: l4.qr,
                              children: (0, a.jsx)("div", { className: l4.zt, children: c }),
                          }),
                      ],
                  });
        },
    });
}
var rr = n(935208),
    ra = n(435558),
    ri = n.n(ra);
let rs = "VibegrationsComposerDrafts";
function ru() {
    return nP.w.get(rs) ?? {};
}
let ro = new Map(),
    rc = ri().throttle(() => {
        if (0 === ro.size) return;
        let e = ru();
        for (let [t, n] of ro) "" === n ? delete e[t] : (e[t] = n);
        (ro.clear(), nP.w.set(rs, e));
    }, 1e3);
class rd extends f.Ay.Store {
    getDraft(e) {
        let t = ro.get(e);
        return null != t ? t : (ru()[e] ?? "");
    }
}
let rf = new rd(lD.h, {
    LOGOUT: function () {
        return (ro.clear(), rc.cancel(), nP.w.remove(rs), !1);
    },
    CONJURE_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: n } = e;
        return (ro.set(t, n), rc(), "" === n && rc.flush(), !1);
    },
});
function rm(e) {
    return "" !== rf.getDraft(e).trim();
}
var rh = n(29080),
    rg = n(46054),
    rp = n(615839);
function rx(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : eu.intl.string(es.default.KcFvbo);
}
function rv(e) {
    var t;
    let n,
        l,
        { steps: r, content: a, hasProposal: i, hasAttachments: s } = e,
        u = (0, nX.B4)(r),
        o = u.filter((e) => "message" === e.type).at(-1),
        c =
            !i &&
            null != o &&
            ((t = o.content),
            (n = t.trim()),
            (l = a.trim()),
            "" !== n && "" !== l && (n === l || (t.length >= 16e3 && l.startsWith(n))))
                ? o
                : null,
        d = u.filter((e) => e !== c),
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
        })({ hasAttachments: s, showsClosingMessage: m, endsOnStreamedMessage: (0, nX.Lf)(r) }),
    };
}
(n(134528), n(947204));
var rj = n(62617);
let rb = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    ry = {
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
    rw = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    u = i.useMemo(
                        () => (0, rj.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, rj.Z)(),
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
                    u = i.useMemo(
                        () => (0, rj.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, rj.Z)(),
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
                    u = i.useMemo(
                        () => (0, rj.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, rj.Z)(),
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
                    u = i.useMemo(
                        () => (0, rj.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, rj.Z)(),
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
                    u = i.useMemo(
                        () => (0, rj.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, rj.Z)(),
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
                    u = i.useMemo(
                        () => (0, rj.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, rj.Z)(),
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
                    u = i.useMemo(
                        () => (0, rj.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, rj.Z)(),
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
                    u = i.useMemo(
                        () => (0, rj.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, rj.Z)(),
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
                    u = i.useMemo(
                        () => (0, rj.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, rj.Z)(),
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
                    u = i.useMemo(
                        () => (0, rj.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, rj.Z)(),
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
                    u = i.useMemo(
                        () => (0, rj.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
                    className: (0, rj.Z)(),
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
    return { ...rw[e], name: eu.intl.string(ry[e]()) };
}
function rA(e) {
    return rb.includes(e) ? rk(e) : void 0;
}
function rN(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % rb.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, rb[(t + n) % rb.length]);
            }),
            l
        );
    })(e))
        t.set(n, rk(l));
    return t;
}
var rS = n(60160),
    rC = n(16634);
function rE(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        u = n.task,
        o = "running" === u.status,
        c = (0, nX.SY)(n.steps),
        d = o
            ? null != c
                ? (0, nX.WQ)(c)
                : rx(u)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(rx(e));
                  switch (e.status) {
                      case "failed":
                          return eu.intl.formatToPlainString(es.default.YrVgOf, { task: t });
                      case "cancelled":
                          return eu.intl.formatToPlainString(es.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return eu.intl.formatToPlainString(es.default["++9woZ"], {
                                  task: t,
                                  duration: (0, rp.MB)(e.durationMs),
                              });
                          return eu.intl.formatToPlainString(es.default.nmI9Uh, { task: t });
                      default:
                          return eu.intl.formatToPlainString(es.default.nmI9Uh, { task: t });
                  }
              })(u),
        f = o ? c : void 0,
        m =
            u.detail.length > 0 ||
            n.steps.some((e) => {
                var t;
                return e !== f || (t = e).detail.length > 0 || t.screenshots.length > 0 || t.attachments.length > 0;
            })
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          n.steps.length > 0
                              ? (0, a.jsx)("ol", {
                                    className: ll.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            rC.A,
                                            { projectId: t, node: e, presentation: "detail", active: o && e === c },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          u.detail.map((e, t) =>
                              (0, a.jsx)(
                                  "div",
                                  {
                                      className: ll.iq,
                                      children: (0, a.jsx)(rS.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(nZ.A, {
        glyph: (0, a.jsx)(n0.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: rx(u),
            position: "left",
            children: (0, a.jsx)("span", {
                className: ll.nC,
                children: (0, a.jsx)(l, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: d,
        live: o,
        settled: !o,
        tint: r,
        detail: m,
        connected: !0,
        connectsDown: s,
    });
}
var rI = n(998445),
    rM = n(643210),
    r_ = n(648127),
    rT = n(372795),
    rP = n(163897);
let rR = "conjure-browser-viewer";
function rL(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, f.yK)(
            [rM.A],
            () =>
                n.flatMap((e) => {
                    let n = rM.A.getTab(t, e);
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
        className: rP.kR,
        "aria-label": eu.intl.string(es.default.Uvkr1G),
        children: l.map((e) =>
            (0, a.jsx)("li", { children: (0, a.jsx)(rD, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function rD(e) {
    let { projectId: t, tab: l, sessionIds: r } = e,
        [s, o] = (function () {
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
        c = (0, te.useHasModalOpen)(rR),
        [d, f] = i.useState(!1),
        m = i.useCallback((e, t) => f(t), []),
        { ended: h } = l,
        g = (0, r_.i)(l.session);
    return (0, a.jsxs)(b.D, {
        innerRef: s,
        className: u()(rP.Nr, h && rP.Xj),
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
                    { modalKey: rR },
                )
            );
        },
        "aria-label": eu.intl.formatToPlainString(es.default.G3a822, { title: g }),
        children: [
            (0, a.jsxs)("div", {
                className: rP.Gt,
                children: [
                    (0, a.jsx)(rT.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !o || c || h,
                        className: rP.Ji,
                        "aria-label": eu.intl.formatToPlainString(es.default.rnwqXb, { name: g }),
                        onStateChange: m,
                    }),
                    d
                        ? null
                        : (0, a.jsx)("div", {
                              className: rP.qf,
                              children: (0, a.jsx)(rI.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    h
                        ? (0, a.jsx)("div", {
                              className: rP.HS,
                              children: (0, a.jsx)(j.E, {
                                  variant: "text-xs/medium",
                                  color: "text-strong",
                                  children: eu.intl.string(es.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsxs)("span", {
                className: rP.pG,
                children: [
                    (0, a.jsx)("span", { className: u()(rP.W9, h && rP.oM) }),
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
var r$ = n(268409);
let rz = new WeakMap(),
    rF = new WeakMap();
function rO(e) {
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
        u = (0, f.yK)(
            [ej.Ay],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = rz.get(e);
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
                    return (rz.set(e, n), n);
                })(ej.Ay.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === u.length
        ? null
        : (0, a.jsx)("li", { className: r$.h, children: (0, a.jsx)(rL, { projectId: t, sessionIds: u }) });
}
var rG = n(469393);
function rU(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, tn.lG)(t.authored_at);
    return (0, a.jsx)(n2, {
        title: eu.intl.string(es.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: rG.r,
            children: [
                (0, a.jsxs)("div", {
                    className: rG.z,
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
                          text: eu.intl.string(es.default.H8Jfhu),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
var rq = n(231483),
    rB = n(687966),
    rH = n(632015),
    rK = n(323384),
    rV = n(633018),
    rW = n(430392),
    rX = n(885574);
let rJ = {
    automod: es.default.DnWMLj,
    overlay: es.default.liTNf3,
    widget: es.default["EswAi+"],
    activity: eu.t.IC5Ann,
    commands: es.default.w7JaEP,
    chat_bot: es.default["5QSvrP"],
    bot: es.default.VFWfz1,
};
var rY = n(176999),
    rQ = (((l = {}).IMAGE = "image"), l),
    rZ = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    r0 = n(773669);
let r1 = [],
    r2 = {};
function r3(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function r4(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: rQ.IMAGE,
        visibility: rZ.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var r6 = n(127258),
    r7 = n(587895),
    r5 = n(320095),
    r8 = n(963852),
    r9 = n(95701),
    ae = n(889227),
    at = n(155718);
let an = ["command", "user_command", "message_command", "message"],
    al = new Set([at.kc.CHAT, at.kc.USER, at.kc.MESSAGE]);
function ar(e) {
    return e.type ?? at.kc.CHAT;
}
function aa(e) {
    return "launch" !== e.kind && al.has(ar(e));
}
function ai(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function as(e, t) {
    let n = an.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !ai(e)), ...n.filter(ai)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || ai(r) || l.push(r);
    }
    return an.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
let au = new r9.nA({ id: "1337", guild_id: "1337", type: ex.rbe.GUILD_TEXT, name: "preview" });
function ao(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, f.bG)([tX.default], () => tX.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, tY.nj)(new ae.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let ac = /^@\S+/;
var ad = n(628284),
    af = n(97808),
    am = n(778712),
    ah = n(809115),
    ag = n(486020),
    ap = n(200700);
let ax = {
        alert: { label: () => eu.intl.string(es.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => eu.intl.string(es.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => eu.intl.string(es.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => eu.intl.string(es.default.RGzFNK), blockedStyle: !1 },
    },
    av = {
        blocked: { label: () => eu.intl.string(es.default.YdnZ8q), tone: "red" },
        alert: { label: () => eu.intl.string(es.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => eu.intl.string(es.default.RGzFNK), tone: "green" },
    },
    aj = ["blocked", "alert", "allowed"],
    ab = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
var ay = n(984097),
    aw = n(13673);
let ak = { blocked: rq.ShieldIcon, alert: t3.BellIcon, allowed: ad.y },
    aA = {
        blurple: { text: "text-brand", icon: L.A.colors.TEXT_BRAND },
        red: { text: "text-feedback-critical", icon: L.A.colors.TEXT_FEEDBACK_CRITICAL },
        green: { text: "text-feedback-positive", icon: L.A.colors.TEXT_FEEDBACK_POSITIVE },
    };
function aN(e) {
    var t, n;
    let l,
        r,
        { example: i } = e,
        s =
            "" ===
            (r = [
                "timeout" !== (t = i).outcome || null == t.timeout_seconds
                    ? null
                    : eu.intl.formatToPlainString(eu.t["3LYql6"], {
                          duration:
                              ((n = t.timeout_seconds),
                              null != (l = (0, ap.getFriendlyDurationString)(n))
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
function aS(e) {
    var t;
    let { example: n } = e,
        { label: l, blockedStyle: r } = ax[n.outcome];
    return (0, a.jsxs)("li", {
        className: u()(ay.nM, { [u()(ay.HV, aw.DX)]: r }),
        children: [
            (0, a.jsx)(w.A, { children: `${l()}: ` }),
            (0, a.jsx)("span", {
                className: ay.my,
                children: (0, a.jsx)(af.eu, {
                    src: (0, ag.AE)(void 0, void 0),
                    size: am._3.SIZE_24,
                    "aria-label": eu.intl.string(es.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: ay.fw,
                children: [
                    (0, a.jsx)(j.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), rg.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    (0, a.jsx)(aN, { example: n }),
                ],
            }),
        ],
    });
}
function aC(e) {
    let { group: t } = e,
        n = i.useId(),
        l = av[t.section],
        r = ak[t.section],
        s = aA[l.tone];
    return (0, a.jsxs)("div", {
        className: ay.uW,
        children: [
            (0, a.jsxs)("div", {
                className: ay.bV,
                children: [
                    (0, a.jsx)(r, { size: "xs", color: s.icon, "aria-hidden": !0 }),
                    (0, a.jsx)(j.E, {
                        id: n,
                        variant: "text-xs/semibold",
                        color: s.text,
                        className: ay.a9,
                        children: l.label(),
                    }),
                ],
            }),
            (0, a.jsx)("ul", {
                className: ay.Ge,
                "aria-labelledby": n,
                children: t.examples.map((e, t) => (0, a.jsx)(aS, { example: e }, t)),
            }),
        ],
    });
}
function aE() {
    let { avatarSrc: e, eventHandlers: t } = (0, ah.a)(!0);
    return (0, a.jsx)("span", {
        className: ay.Gy,
        ...t,
        children: (0, a.jsx)(af.eu, { src: e, size: am._3.SIZE_16, "aria-label": eu.intl.string(eu.t.hG1StD) }),
    });
}
function aI(e) {
    var t;
    let { automod: n } = e;
    return (0, a.jsx)("div", {
        className: ay.K1,
        children: ((t = n.examples),
        aj
            .map((e) => ({ section: e, examples: t.filter((t) => ab[t.outcome] === e) }))
            .filter((e) => e.examples.length > 0)).map((e) => (0, a.jsx)(aC, { group: e }, e.section)),
    });
}
var aM = n(460905),
    a_ = n(110384),
    aT = n(763754),
    aP = n(217424),
    aR = n(194085),
    aL = n(20851),
    aD = n(692508),
    a$ = n(798819);
function az(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, a.jsxs)("div", {
        className: u()(a$.item, a$.labelContainer, a$.colorDefault, {
            [a$.focused]: !0 === t.highlighted,
            [a$.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, a.jsx)("div", {
                      className: a$.iconContainerLeft,
                      children: (0, a.jsx)(n, { color: "currentColor", className: a$.icon }),
                  })
                : null,
            (0, a.jsx)("div", { className: u()(a$.label, aD.Gy), children: t.label }),
            null != l
                ? (0, a.jsx)("div", {
                      className: a$.iconContainer,
                      children: (0, a.jsx)(l, { color: "currentColor", className: a$.icon }),
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
                          return (0, a.jsx)("img", { src: l, alt: "", className: u()(t, aD.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: eu.intl.string(eu.t["5IEsGx"]), icon: a_.W, muted: !0 }
                : { label: eu.intl.string(eu.t.LYju5J), muted: !0 };
    return (0, a.jsx)("div", {
        className: u()(a$.menu, aD.MK),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: a$.scroller,
            children: [
                (0, a.jsx)(az, { item: s }),
                (0, a.jsx)("div", { className: a$.separator }),
                (0, a.jsx)(az, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
var aO = n(381941);
function aG() {}
function aU(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
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
        (r = (0, f.bG)([r7.A], () => r7.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? eu.intl.string(es.default.JEYq8M)),
        (o = (0, f.bG)([tX.default], () => (null != l ? tX.default.getUser(l) : void 0), [l])),
        (d = ao("31337", s, { bot: !0, enabled: !(c = o?.bot === !0) })),
        (m = c ? o : d),
        (h = ao("31338", eu.intl.string(es.default["9iAOsw"]), { discriminator: "0003" })),
        (g = ao("31339", (0, tJ.mG)(t) ?? "", { enabled: null != t })),
        {
            items: i.useMemo(
                () =>
                    null == t || null == g || null == m || null == h
                        ? []
                        : (function (e, t, n) {
                              var l, r, a;
                              let { bot: i, currentUser: s, viewer: u, member: o } = t,
                                  c = [];
                              function d(e, t) {
                                  let {
                                          interactionName: n,
                                          messageType: l,
                                          menu: r,
                                      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                      a = String(c.length + 1),
                                      i = (0, r5.rh)({
                                          ...(0, r8.Ay)({
                                              channelId: au.id,
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
                                                        type: r6.G.APPLICATION_COMMAND,
                                                        user: (0, r8.Vi)(s),
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
                                          (d(e ? n.memberMessage : n.targetMessage, e ? o : s, {
                                              menu: { target: e ? "user" : "message", commandName: t.user },
                                          }),
                                              d(t.bot, i, {
                                                  interactionName: t.user,
                                                  messageType: ex.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((l = t.user), l.trim().replace(ac, `<@${i.id}>`)), s),
                                              d(((r = t.bot), r.includes("<@") ? r : `<@${u.id}> ${r}`), i));
                                          break;
                                      case "event":
                                          d(((a = t.bot), a.split(`@${o.username}`).join(`<@${o.id}>`)), i);
                                  }
                              return c;
                          })(
                              x,
                              { bot: m, currentUser: t, viewer: g, member: h },
                              {
                                  targetMessage: eu.intl.string(es.default["y+QYes"]),
                                  memberMessage: eu.intl.string(es.default.BUTRDc),
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
              className: u()(aD.TE, `group-spacing-${aO.ES}`),
              children: v.map((e) => {
                  let { key: t, record: n, isCommandReply: l, menu: r } = e;
                  return (0, a.jsxs)(
                      "li",
                      {
                          className: null != r ? aD.Rz : void 0,
                          children: [
                              (0, a.jsx)(aL.A, {
                                  message: n,
                                  channel: au,
                                  author: (0, aT.FT)(n.author, au),
                                  isGroupStart: !0,
                                  avatarOverride: n.author.bot ? (j ?? void 0) : void 0,
                                  childrenExecutedCommand: l ? (0, a.jsx)(aP.A, { message: n, channel: au }) : void 0,
                                  usernameClassName: r?.target === "user" ? aD.Ct : void 0,
                                  disableInteraction: !0,
                              }),
                              r?.target === "message"
                                  ? (0, a.jsx)("div", {
                                        className: aD.S3,
                                        inert: !0,
                                        "aria-hidden": !0,
                                        children: (0, a.jsxs)(aR.Ay, {
                                            children: [
                                                (0, a.jsx)(aR.qv, {
                                                    label: eu.intl.string(eu.t.lfIHs4),
                                                    icon: aM.n,
                                                    onClick: aG,
                                                }),
                                                (0, a.jsx)(aR.qv, {
                                                    label: eu.intl.string(eu.t["5IEsGx"]),
                                                    icon: a_.W,
                                                    onClick: aG,
                                                }),
                                                (0, a.jsx)(aR.qv, {
                                                    label: eu.intl.string(eu.t["UKOtz+"]),
                                                    icon: ne.MoreHorizontalIcon,
                                                    selected: !0,
                                                    onClick: aG,
                                                }),
                                            ],
                                        }),
                                    })
                                  : null,
                              null != r
                                  ? (0, a.jsx)("div", {
                                        className: "user" === r.target ? aD.ET : aD.je,
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
var aq = n(633075),
    aB = n(946356),
    aH = n(58216),
    aK = n(27399);
function aV(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, f.bG)([tX.default], () => tX.default.getCurrentUser()),
        r = i.useMemo(() => new aq.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: aK.H,
              children: (0, a.jsx)(aB.A.Overlay, {
                  className: aK.w,
                  children: (0, a.jsx)(aH.A, {
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
var aW = n(443863);
let aX = {
    automod: rq.ShieldIcon,
    overlay: rB.GameControllerIcon,
    widget: rH.f,
    activity: rK.k,
    commands: rV.k,
    chat_bot: h.ChatIcon,
    bot: rW.RobotIcon,
};
function aJ(e) {
    let { label: t, icon: n, info: l, children: r } = e;
    return (0, a.jsxs)("section", {
        className: aW.uW,
        children: [
            (0, a.jsxs)("span", {
                className: aW.a9,
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
function aY(e) {
    let { text: t, label: n } = e;
    return (0, a.jsx)(y.m, {
        text: t,
        children: (0, a.jsx)(b.D, {
            className: aW.bk,
            "aria-label": n,
            children: (0, a.jsx)(rX.CircleInformationIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
function aQ(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)(aJ, {
              label: t,
              children: (0, a.jsx)("div", {
                  className: aW.Ip,
                  children: n.map((e) =>
                      (0, a.jsx)(
                          "span",
                          {
                              className: aW.jw,
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
function aZ(e) {
    let { tags: t } = e;
    return (0, a.jsx)("span", {
        className: aW.K2,
        children: t.map((e) => {
            let t = aX[e];
            return (0, a.jsxs)(
                "span",
                {
                    className: aW.L6,
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
                            children: eu.intl.string(rJ[e]),
                        }),
                    ],
                },
                e,
            );
        }),
    });
}
function a0(e) {
    let { projectId: t, design: n } = e,
        { id: l } = n,
        { src: r, gone: s, handleError: u } = lQ(t, l),
        o = eu.intl.string(es.default["3/aHX6"]),
        c = i.useCallback(() => {
            (0, en.PK)(t, l).then(
                (e) => {
                    (0, lL.R)({
                        items: [{ type: "IMAGE", url: e, alt: o }],
                        startingIndex: 0,
                        shouldHideMediaOptions: !0,
                        location: "VibegrationsChat",
                    });
                },
                () => {},
            );
        }, [t, l, o]);
    return s
        ? null
        : (0, a.jsx)(aJ, {
              label: eu.intl.string(es.default.X15LLY),
              info: (0, a.jsx)(aY, {
                  text: eu.intl.string(es.default.nR4B8P),
                  label: eu.intl.string(es.default.nc0SNY),
              }),
              children: (0, a.jsx)(b.D, {
                  className: aW.xX,
                  onClick: c,
                  "aria-label": eu.intl.string(es.default.TvAPIm),
                  children: null != r ? (0, a.jsx)("img", { src: r, alt: o, className: aW.sN, onError: u }) : null,
              }),
          });
}
function a1(e) {
    let t,
        n,
        { projectId: l, proposal: r, version: s, onApprove: u } = e,
        { automod: o } = r,
        { botInteraction: c, botExchanges: d } =
            ((t = (function (e) {
                if (null != e.bot) return e.bot.interaction;
                let t = e.commands.some(aa),
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
                              let s = e.commands.filter(aa).map((e) =>
                                      (function (e, t) {
                                          let n = e.description?.trim() ?? "",
                                              l = "" !== n ? n : t.reply;
                                          switch (ar(e)) {
                                              case at.kc.USER:
                                                  return { kind: "user_command", user: e.name, bot: l };
                                              case at.kc.MESSAGE:
                                                  return { kind: "message_command", user: e.name, bot: l };
                                              default:
                                                  return { kind: "command", user: `/${e.name}`, bot: l };
                                          }
                                      })(e, n),
                                  ),
                                  u = "messages" === t ? [] : s.filter(ai),
                                  o = a.length > 0 ? as([...a, ...u], !0) : as("both" === t ? [...s, i] : s, !1);
                              return o.length > 0 ? o : [r];
                          })(r, t, {
                              message: eu.intl.string(es.default.J7qggf),
                              reply: eu.intl.string(es.default.nqYtiy),
                              event: eu.intl.string(es.default["05lU9W"]),
                          }),
                [r, t],
            )),
            { botInteraction: t, botExchanges: n }),
        m = (function (e, t) {
            let { widget_config: n, widget_preview: l } = t,
                r = (0, f.bG)([r0.default], () => r0.default.locale),
                a = (0, f.bG)([eN.Ay], () => {
                    let t = eN.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = i.useState(r2);
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
                u = i.useMemo(
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
                                                          ...r3(n),
                                                          ...(null != n.fallback ? { fallback: r3(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let a = rY.uW.safeParse(r);
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
                                                                    type: rY.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof a
                                                                ? (r[e] = { type: rY.oG.NUMBER, value: a })
                                                                : (r[e] = { type: rY.oG.STRING, value: a });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(r4),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: r1,
                                            },
                                        };
                              })(n, l, s, r),
                    [n, l, s, r],
                );
            return i.useMemo(() => (null == a || null == u ? null : { applicationId: a, rendererProps: u }), [a, u]);
        })(l, r),
        h = s?.superseded === !0,
        g = r.what_changed?.trim() ?? "";
    return (0, a.jsxs)(n6, {
        title:
            h && null != s
                ? eu.intl.formatToPlainString(es.default.YZ3qJs, { version: s.version })
                : eu.intl.string(es.default["3b6e7o"]),
        meta: h
            ? (0, a.jsx)(n4, { children: eu.intl.string(es.default.hF2c41) })
            : (0, a.jsx)(aZ, {
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
        showLabel: eu.intl.string(es.default.yD8EJS),
        hideLabel: eu.intl.string(es.default.nSPGNb),
        bodyClassName: aW.rf,
        "data-conjure-plan-card": !0,
        children: [
            "" !== g
                ? (0, a.jsx)(aJ, {
                      label: eu.intl.string(es.default.iNS4dl),
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
            null != o && o.examples.length > 0
                ? (0, a.jsx)(aJ, {
                      label: eu.intl.string(es.default.z4ZKYG),
                      icon: (0, a.jsx)(aE, {}),
                      info: (0, a.jsx)(aY, {
                          text: eu.intl.string(es.default.bo4MOx),
                          label: eu.intl.string(es.default.VPLNot),
                      }),
                      children: (0, a.jsx)(aI, { automod: o }),
                  })
                : null,
            null == o && null != r.design_image ? (0, a.jsx)(a0, { projectId: l, design: r.design_image }) : null,
            d.length > 0
                ? (0, a.jsx)(aJ, {
                      label: eu.intl.string(es.default.sA1lTv),
                      info: (0, a.jsx)(aY, {
                          text: eu.intl.string(es.default.NnmbJu),
                          label: eu.intl.string(es.default.KsqQJX),
                      }),
                      children: (0, a.jsx)(aU, { projectId: l, exchanges: d }),
                  })
                : null,
            null == o && null != m
                ? (0, a.jsx)(aJ, {
                      label: eu.intl.string(es.default.ove4zH),
                      info: (0, a.jsx)(aY, {
                          text: eu.intl.string(es.default.XcIrHx),
                          label: eu.intl.string(es.default["TwT+ht"]),
                      }),
                      children: (0, a.jsx)(aV, { ...m }),
                  })
                : null,
            r.changes.length > 0
                ? (0, a.jsx)(aJ, {
                      label: eu.intl.string(es.default["5+mG1z"]),
                      children: (0, a.jsx)("ul", {
                          className: aW.p_,
                          children: r.changes.map((e, t) =>
                              (0, a.jsx)(
                                  "li",
                                  {
                                      className: aW.Aw,
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
                ? (0, a.jsx)(aJ, {
                      label: eu.intl.string(eu.t["0hKkS+"]),
                      children: (0, a.jsx)("ul", {
                          className: aW.p_,
                          children: r.commands.map((e, t) =>
                              (0, a.jsxs)(
                                  "li",
                                  {
                                      className: aW.uX,
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
            (0, a.jsx)(aQ, { label: eu.intl.string(es.default["2UbW6r"]), names: r.bot_permissions ?? [] }),
            (0, a.jsx)(aQ, { label: eu.intl.string(es.default["7TKfpj"]), names: r.privileged_intents ?? [] }),
            null == u || h
                ? null
                : (0, a.jsxs)("div", {
                      className: aW.o1,
                      children: [
                          (0, a.jsx)(A.$, {
                              variant: "primary",
                              size: "sm",
                              text: eu.intl.string(es.default["6S+wRM"]),
                              onClick: u,
                          }),
                          (0, a.jsx)(j.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              tag: "span",
                              children: eu.intl.string(es.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
function a2(e) {
    return null != e && e.status?.state === "unpublished";
}
let a3 = new WeakMap();
function a4(e) {
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
                                  children: eu.intl.string(es.default["+HGTlC"]),
                              }),
                              (0, a.jsx)(eU.Ay, { guild: l, size: eU.Ay.Sizes.SMOL }),
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
function a6(e) {
    let { projectId: t } = e,
        n = (0, ns.Ay)(t);
    return null != n && a2(n) ? (0, a.jsx)(a4, { publish: n }) : null;
}
var a7 = n(478016),
    a5 = n(989271);
function a8(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        s = null == l;
    return (0, a.jsxs)(b.D, {
        className: u()(a5.nM, { [a5.f1]: s, [a5.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": eu.intl.formatToPlainString(es.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: a5.jo,
                children: [
                    n
                        ? (0, a.jsx)(a7.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: a5.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(j.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: a5.G9,
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
function a9(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        u = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(n2, {
        title: eu.intl.string(es.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                a8,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : u },
                e.id,
            ),
        ),
    });
}
function ie(e) {
    let { onAsk: t } = e;
    return (0, a.jsx)(nf.B, {
        align: "start",
        "data-conjure-ideas-offer": !0,
        children: (0, a.jsx)(A.$, {
            variant: "secondary",
            size: "sm",
            disabled: null == t,
            onClick: t,
            text: eu.intl.string(es.default["U/bLzU"]),
        }),
    });
}
var it = n(530557),
    il = n(872162);
function ir(e, t) {
    return { cardId: e, status: "pending" === t ? null : t };
}
var ia = n(202723);
function ii(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: o } = e,
        c = i.useCallback(() => {
            (0, te.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("291953"), n.e("408337")]).then(n.bind(n, 789864));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        d = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: it.R })), [r.fields]),
        f = (function (e, t) {
            let [n, l] = i.useState(() => ir(e, t));
            return n.cardId !== e || (null == n.status && "pending" !== t)
                ? (l(ir(e, t)), !1)
                : null != n.status && t !== n.status;
        })(l, s),
        m = u()(ia.Lo, { [ia.jY]: f });
    return "superseded" === s
        ? (0, a.jsx)(
              "article",
              {
                  className: m,
                  children: (0, a.jsx)(j.E, {
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      tag: "span",
                      children: eu.intl.string(es.default.CTxtdV),
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
                            children: eu.intl.string(es.default.HCQvpO),
                        }),
                        (0, a.jsx)(il.C, { label: eu.intl.string(es.default.HCQvpO), size: "xs", items: d }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, a.jsx)(
                  "article",
                  {
                      className: ia.Lo,
                      children: (0, a.jsx)(il.C, { label: eu.intl.string(es.default.HCQvpO), size: "xs", items: d }),
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
                                className: ia.$h,
                                children: [
                                    (0, a.jsx)("span", {
                                        className: ia.c9,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(ad.y, {
                                            size: "xs",
                                            color: L.A.colors.ICON_FEEDBACK_POSITIVE,
                                        }),
                                    }),
                                    (0, a.jsx)(j.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-feedback-positive",
                                        tag: "span",
                                        children: eu.intl.string(es.default.sfp7Up),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(il.C, { label: eu.intl.string(es.default.sfp7Up), size: "xs", items: d }),
                        ],
                    },
                    s,
                )
              : (0, a.jsxs)("article", {
                    className: ia.Lo,
                    children: [
                        (0, a.jsx)(j.E, {
                            variant: "text-xs/semibold",
                            color: null != o ? "text-brand" : "text-muted",
                            tag: "span",
                            children: eu.intl.string(null != o ? es.default.O0QIqj : es.default.HCQvpO),
                        }),
                        (0, a.jsx)(j.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            selectable: !0,
                            children: null != r.note && "" !== r.note ? r.note : eu.intl.string(es.default.MPGSHL),
                        }),
                        (0, a.jsx)(il.C, { label: eu.intl.string(es.default.HCQvpO), size: "xs", items: d }),
                        (0, a.jsx)("div", {
                            className: ia.sq,
                            children: (0, a.jsx)(A.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: c,
                                text: eu.intl.string(es.default.EK8tKY),
                            }),
                        }),
                    ],
                });
}
var is = n(919790),
    iu = n(971824),
    io = n(162052),
    ic = n(165648);
function id(e) {
    let t = rN(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? rA(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: rx(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function im(e) {
    let {
            projectId: t,
            steps: n,
            active: l = !1,
            turnActive: r = l,
            checklistSuperseded: s = !1,
            durationMs: u,
            interrupted: o = !1,
            todos: c,
            provisionalTodo: d,
            segment: f,
            hostsChecklist: m = !0,
            reportsDuration: h = !0,
            closed: g = !1,
            segmentDurationMs: p,
        } = e,
        x = i.useMemo(() => (0, nX.Jf)(n, l), [n, l]),
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
    if (o)
        return (0, a.jsx)("ol", {
            className: ll.pj,
            "data-live": !1,
            children: (0, a.jsx)(nZ.A, {
                glyph: (0, a.jsx)(rh.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: eu.intl.string(es.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (p ?? (h ? (x.turn?.durationMs ?? u) : void 0)),
        b = m ? ((0, nX.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let w = v.tasks,
        k = rN(w.map((e) => e.taskId)),
        A = !g && (l || w.some((e) => "running" === e.task.status)),
        N = id(w);
    return (0, a.jsxs)("ol", {
        className: ll.pj,
        "data-live": A,
        children: [
            (0, a.jsx)(nY.A, {
                projectId: t,
                steps: v.steps,
                fallbackLabel: w.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                live: l,
                closed: g,
                durationMs: j,
                connectsDown: w.length > 0,
                tier: x.turn?.tier,
            }),
            w.map((e, n) => {
                let l = null != e.task.helperMark ? rA(e.task.helperMark) : void 0,
                    r = l ?? k.get(e.taskId);
                return null == r
                    ? null
                    : (0, a.jsx)(
                          rE,
                          {
                              projectId: t,
                              lane: e,
                              Illocon: r.Illocon,
                              tint: r.tint,
                              name: null != l && null != e.task.helperName ? e.task.helperName : r.name,
                              connectsDown: n < w.length - 1,
                          },
                          e.taskId,
                      );
            }),
            (0, a.jsx)(rO, { projectId: t, steps: n, tree: x, segment: f }),
            y
                ? (0, a.jsx)("li", {
                      className: ll.YO,
                      children: (0, a.jsx)(lt, { todos: b, provisional: d, agents: N, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function ih(e) {
    let {
            projectId: t,
            steps: n,
            content: l,
            proposal: r,
            planVersion: s,
            ideas: o,
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
            sideReplyAcknowledges: w,
            hoistedProse: k = !1,
            hoistedAttachmentsHost: A,
            restoreProposal: N,
            onRestoreProposal: S,
        } = e,
        C = i.useMemo(
            () => rv({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != c && c.length > 0 }),
            [n, l, r, c],
        ),
        { streamed: E, lastStreamedMessage: I, showsClosingMessage: M, closingContent: _ } = C,
        T = (k ? A : void 0) ?? C.attachmentsHost,
        P = M && !k,
        R = null == c ? null : (0, a.jsx)(is.A, { projectId: t, attachments: c }),
        L = null == R ? null : (0, a.jsx)("div", { className: ll.MT, children: R }),
        D = y
            ? (0, a.jsx)(j.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return eu.intl.string(es.default.Mv5OmK);
                          case "queued":
                              return eu.intl.string(es.default["Po/2mi"]);
                          case "restarting":
                              return eu.intl.string(es.default.Vj0woh);
                          default:
                              return eu.intl.string(es.default.gY3L8p);
                      }
                  })(w),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: ll.ue,
        children: [
            E.length > 0 && !k
                ? (0, a.jsx)("ol", {
                      className: ll.dO,
                      children: E.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: ll.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: ic.PT,
                                          children: rg.A.parse(e.content, !0, {
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
                ? (0, a.jsx)(a1, { projectId: t, proposal: r, version: s, onApprove: b })
                : P
                  ? (0, a.jsxs)("div", {
                        className: u()(ll.ky, io.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: u()(ic.PT, ll.cW),
                                children: rg.A.parse(_, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === T ? L : null,
                            D,
                        ],
                    })
                  : null,
            null != d
                ? (0, a.jsx)("div", {
                      className: u()(ll.ky, io.XR, { [iu.O]: null != m && "open" === h }),
                      children: (0, a.jsx)(ii, {
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
                      className: u()(ll.ky, io.XR),
                      children: (0, a.jsx)(rl, { projectId: t, request: g }),
                  })
                : null,
            "standalone" !== T && ("closing" !== T || P) ? null : R,
            null != p ? (0, a.jsx)(a6, { projectId: t }) : null,
            null != o && o.length > 0 ? (0, a.jsx)(a9, { ideas: o, pickedIdeaIds: v, onPick: x }) : null,
            null != N ? (0, a.jsx)(rU, { proposal: N, onRestore: S }) : null,
            P ? null : D,
        ],
    });
}
var ig = n(146806),
    ip = n(477262),
    ix = n(432017),
    iv = n(475358),
    ij = n(717400),
    ib = n(663341),
    iy = n(559647),
    iw = n(775602),
    ik = n(234320),
    iA = n(285796),
    iN = n(922329);
async function iS(e) {
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
var iC = n(153171);
let iE = Y.lN;
function iI(e, t, n, l) {
    let r = lU(e, t).length;
    !(function (e, t, n) {
        if (0 === n.length) return;
        let l = n.map((e) => {
            let { draft: t, upload: n } = e;
            return { draft: { ...t, localId: lF++ }, upload: n };
        });
        for (let { draft: n, upload: r } of (lq(e, t, [
            ...lU(e, t),
            ...l.map((e) => {
                let { draft: t } = e;
                return t;
            }),
        ]),
        l))
            r?.().then(
                (l) => {
                    if ("errorText" in l) return void lB(e, t, n.localId, { status: "error", errorText: l.errorText });
                    let { converted: r, ...a } = l;
                    lB(e, t, n.localId, { ...r, status: "ready", ref: a })
                        ? setTimeout(
                              () =>
                                  lB(e, t, n.localId, {
                                      status: "error",
                                      errorText: eu.intl.string(es.default.E7dS5n),
                                  }),
                              Y.o2 - 3e5,
                          )
                        : lH(e, a.id);
                },
                (l) => {
                    (console.error("[vibegrations] attachment upload failed", l),
                        lB(e, t, n.localId, { status: "error", errorText: eu.intl.string(es.default["kUw/b1"]) }));
                },
            );
    })(
        e,
        t,
        n.map((e) => {
            let t = "" === e.type ? "application/octet-stream" : e.type,
                n = { name: e.name, contentType: t };
            if (r++ >= iE)
                return {
                    draft: {
                        ...n,
                        status: "error",
                        errorText: eu.intl.formatToPlainString(es.default.Q0aCVZ, { count: iE }),
                    },
                };
            if (!(0, Y.Oq)(e.size, t))
                return "image/png" === t && e.size <= Y.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas
                    ? {
                          draft: { ...n, status: "uploading", previewUrl: URL.createObjectURL(e) },
                          upload: async () => {
                              let n = await iS(e).catch(() => null);
                              return null != n && (0, Y.Oq)(n.size, n.type)
                                  ? { ...(await l(n)), converted: { name: n.name, contentType: n.type } }
                                  : { errorText: lW(t) };
                          },
                      }
                    : { draft: { ...n, status: "error", errorText: lW(t) } };
            let a = Y.XB.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...n, status: "uploading", previewUrl: a }, upload: () => l(e) };
        }),
    );
}
function iM(e) {
    let { projectId: t, surface: n, onUploadFile: l } = e,
        r = lO.useState((e) => lG(e, t, n)),
        a = i.useCallback((e) => iI(t, n, e, l), [t, n, l]),
        s = i.useCallback(
            (e) => {
                if (e.defaultPrevented) return;
                let t = Array.from(e.clipboardData?.files ?? []);
                0 !== t.length && (e.preventDefault(), a(t));
            },
            [a],
        ),
        u = i.useCallback(
            (e) => {
                let l, r;
                null != (r = (l = lU(t, n)).find((t) => t.localId === e)) &&
                    (lK(t, r),
                    lq(
                        t,
                        n,
                        l.filter((t) => t.localId !== e),
                    ));
            },
            [t, n],
        ),
        o = i.useCallback(() => lJ(t, n), [t, n]);
    return {
        drafts: r,
        addFiles: a,
        pasteFiles: s,
        removeDraft: u,
        settled: r.every((e) => "ready" === e.status),
        takeRefs: o,
    };
}
function i_(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(iN.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(j.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(k.y, { type: k.t.SPINNING_CIRCLE_SIMPLE, className: iC.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: iC.o1,
                onClick: () => n(t.localId),
                "aria-label": eu.intl.string(es.default.Slam9g),
                children: (0, a.jsx)(iA.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var iT = n(497437);
let iP = [
        {
            id: "add-images-videos",
            label: es.default["51+9lc"],
            icon: ip.s,
            accept: "image/*,video/*,.png,.jpg,.jpeg,.gif,.webp,.avif,.heic,.heif,.svg,.bmp,.mp4,.m4v,.mov,.webm,.mkv,.avi",
        },
        {
            id: "add-sounds",
            label: es.default["10ljr2"],
            icon: ix.T,
            accept: "audio/*,.mp3,.wav,.ogg,.oga,.opus,.m4a,.aac,.flac,.weba,.webm,.aif,.aiff,.mid,.midi",
        },
        { id: "add-other-files", label: es.default.aotDee, icon: et.H, accept: "" },
    ],
    iR = "text-md/normal",
    iL = null;
function iD(e) {
    let { text: t, offering: n, typed: l } = e,
        [r, s] = i.useState(t),
        o = i.useRef(null),
        c = i.useRef(null),
        d = i.useRef(0),
        [m, h] = i.useState(0),
        [g, p] = i.useState(0),
        [x, v] = i.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
    (i.useLayoutEffect(() => {
        let e = o.current,
            t = e?.parentElement;
        if (null == e || null == t) return;
        let n = d.current;
        function l() {
            let e = o.current,
                t = e?.parentElement;
            if (null == e || null == t) return;
            let l = c.current;
            if (null == l) return;
            let r = parseFloat(getComputedStyle(t).columnGap),
                a = Number.isNaN(r) ? 0 : r,
                i = e.offsetWidth,
                s = l.offsetWidth + a;
            (p(i + a), h(s));
            let u = s + i,
                d = Math.max(n, l.offsetWidth) + a + i,
                f = 0 === d ? 1 : s / d,
                m = 0 === d ? 1 : u / d;
            v({
                frontFrom: 1e3 * (0, ig._R)(f),
                frontTo: 1e3 * (0, ig._R)(m),
                backFrom: 1e3 * (0, ig.T)(f),
                backTo: 1e3 * (0, ig.T)(m),
            });
        }
        let r = new ResizeObserver(l);
        return (l(), r.observe(e), r.observe(t), null != c.current && r.observe(c.current), () => r.disconnect());
    }, [t]),
        i.useEffect(() => {
            d.current = c.current?.offsetWidth ?? 0;
        }, [t]));
    let [b, y] = i.useState(0),
        [w, k] = i.useState(null),
        A = i.useRef(!1),
        N = i.useCallback(() => {
            (k(A.current ? (n ? "through" : "out") : n ? "in" : null), y((e) => e + 1));
        }, [n]);
    i.useEffect(() => {
        A.current = n;
    }, [n, t]);
    let S = "in" === w ? x.backFrom : x.frontFrom,
        C = "out" === w ? x.frontTo : x.backTo,
        E = (0, f.bG)([iw.Ay], () => iw.Ay.useReducedMotion),
        I = t === eu.intl.string(es.default.Zc7gML),
        M = r === t && I;
    function _(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: u()(iT.VT, { [iT.qk]: l }),
            style: l
                ? {
                      insetInlineStart: m,
                      "--custom-cap-wipe-delay": `${S}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, C - S)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": l && b > 0 && null != w ? b % 2 : void 0,
            "data-wipe-kind": l ? (w ?? void 0) : void 0,
            children: (0, a.jsx)(iv.e, { shortcut: "tab", className: iT.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(eT.o, {
                text: t,
                variant: iR,
                delay: null,
                duration: 1e3,
                trailingWidth: g,
                className: u()(iT.xM, { [iT.s2]: l }),
                onStart: N,
                onComplete: () => s(t),
            }),
            _(iT.IS, n || (!E && "out" === w), o),
            (0, a.jsx)("span", {
                ref: c,
                className: iT.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(j.E, { variant: iR, tag: "span", children: t }),
            }),
            M
                ? (0, a.jsxs)("span", {
                      className: iT.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(j.E, { variant: iR, tag: "span", className: iT.xM, children: t }),
                          _(iT.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let i$ = i.memo(function (e) {
        let {
                projectId: t,
                canSend: n,
                stopped: l,
                running: r,
                restoring: s = !1,
                onSend: u,
                onInterrupt: o,
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
            [b, k] = i.useState(() => rf.getDraft(t)),
            A = i.useCallback(
                (e) => {
                    ((0, eA.I$)(t, e), k(e));
                },
                [t],
            ),
            N = "" !== b.trim();
        i.useEffect(() => x?.(N), [N, x]);
        let [S, C] = i.useState(t);
        S !== t && (C(t), k(rf.getDraft(t)));
        let E = (0, f.bG)([iw.Ay], () => iw.Ay.isSubmitButtonEnabled),
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
            } = iM({ projectId: t, surface: "chat", onUploadFile: c }),
            z = "" !== b.trim() || T.length > 0 || p,
            F = n && z && D,
            [O, G] = i.useState(null);
        i.useEffect(() => {
            if (null == O) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => G(null));
                });
            return () => {
                (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
            };
        }, [O]);
        let U = i.useCallback(() => {
                if (!F) return;
                let e = $();
                u(b, e.length > 0 ? e : void 0);
                let t = (function (e, t, n) {
                    let l,
                        r,
                        a = n.split("\n", 1)[0] ?? "";
                    if (null == e || "" === a) return a;
                    null == iL && (iL = document.createElement("canvas").getContext("2d"));
                    let i = iL;
                    if (null == i) return a;
                    let s = getComputedStyle(e);
                    i.font = "" !== s.font ? s.font : `${s.fontWeight} ${s.fontSize} ${s.fontFamily}`;
                    let u =
                        t > 0
                            ? t
                            : ((l = parseFloat(s.paddingInlineStart)),
                              (r = parseFloat(s.paddingInlineEnd)),
                              e.clientWidth - (Number.isNaN(l) ? 0 : l) - (Number.isNaN(r) ? 0 : r));
                    if (u <= 0 || i.measureText(a).width <= u) return a;
                    let o = 0,
                        c = a.length;
                    for (; o < c;) {
                        let e = Math.ceil((o + c) / 2);
                        i.measureText(a.slice(0, e)).width <= u ? (o = e) : (c = e - 1);
                    }
                    let d = a.slice(0, o),
                        f = d.lastIndexOf(" ");
                    return (f > 0 ? d.slice(0, f) : d).trimEnd();
                })(X.current?.querySelector("textarea") ?? null, ec.current, b);
                ("" !== t && G(t), A(""));
            }, [F, b, u, $, A]),
            q = i.useCallback(
                (e) => {
                    (e.preventDefault(), U());
                },
                [U],
            ),
            B = i.useCallback(() => {
                null == o || I || (M(!0), o());
            }, [o, I]),
            H = null == h || "" !== b || !n || l || s || p ? null : h,
            K = i.useCallback(
                (e) => {
                    if ("Escape" === e.key && r && null != o && !I) {
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
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), U());
                },
                [U, d, r, o, I, B, H, A],
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
                let t = iO(e);
                null != t && en(t);
            }
            er(!0);
            let t = setTimeout(() => er(!1), iz);
            return () => clearTimeout(t);
        }, [b]);
        let ea = i.useMemo(() => ({ "--custom-glow-x": `${et}px` }), [et]),
            ei = el ? ` ${iT.EB}` : "",
            eo = s
                ? eu.intl.string(es.default.qqlUiW)
                : l
                  ? eu.intl.string(es.default.mPB3eo)
                  : n
                    ? p
                        ? eu.intl.string(es.default.knUjL3)
                        : g
                          ? eu.intl.string(es.default.IevBEw)
                          : eu.intl.string(r ? es.default["0BJa/0"] : es.default.TEeU7z)
                    : eu.intl.string(es.default.zZ9NgM),
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
            eg = O ?? H ?? eo,
            ep = "" === b && "" !== eg;
        return (0, a.jsxs)("form", {
            onSubmit: q,
            className: iT.DA,
            children: [
                T.length > 0
                    ? (0, a.jsx)("div", {
                          className: iT.lN,
                          children: T.map((e) => (0, a.jsx)(i_, { draft: e, onRemove: L }, e.localId)),
                      })
                    : null,
                (0, a.jsx)("span", { className: `${iT.wg} ${iT.LP}${ei}`, style: ea, "aria-hidden": !0 }),
                (0, a.jsx)("span", { className: `${iT.wg} ${iT.L3}${ei}`, style: ea, "aria-hidden": !0 }),
                (0, a.jsxs)("div", {
                    className: iT.VA,
                    ref: X,
                    children: [
                        (0, a.jsx)("input", {
                            ref: _,
                            type: "file",
                            multiple: !0,
                            onChange: W,
                            className: iT.nY,
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
                                    "aria-label": eu.intl.string(eu.t.d56gCa),
                                    onClose: t,
                                    onSelect: t,
                                    children: (0, a.jsxs)(ee.rX, {
                                        children: [
                                            iP.map((e) =>
                                                (0, a.jsx)(
                                                    ee.Dr,
                                                    {
                                                        id: e.id,
                                                        label: eu.intl.string(e.label),
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
                                                      label: eu.intl.string(es.default["p/k5i7"]),
                                                      iconLeft: ij.q,
                                                      leadingAccessory: { type: "icon", icon: ij.q },
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
                                    className: `${iT.Y0} ${iT.nu}`,
                                    disabled: !n,
                                    "aria-label": eu.intl.string(eu.t.d56gCa),
                                    "aria-haspopup": "menu",
                                    "aria-expanded": l,
                                    children: (0, a.jsx)(ib.PlusLargeIcon, {
                                        size: "refresh_sm",
                                        color: "currentColor",
                                        className: iT.Qu,
                                    }),
                                });
                            },
                        }),
                        ep
                            ? (0, a.jsx)("div", {
                                  ref: ef,
                                  className: iT.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(iD, { text: eg, offering: eh && null == O, typed: null != O }),
                              })
                            : null,
                        (0, a.jsx)(lu.y, {
                            value: b,
                            onChange: (e) => A(e.currentTarget.value),
                            onKeyDown: K,
                            onPaste: V,
                            placeholder: ep ? "" : eo,
                            disabled: !n,
                            "aria-label": eu.intl.string(es.default.ldNl9x),
                            "aria-describedby": ep ? em : void 0,
                            rows: 1,
                            className: iT.jp,
                        }),
                        ep ? (0, a.jsx)(w.A, { id: em, children: eo }) : null,
                        (0, a.jsx)("div", {
                            className: iT.Sz,
                            children:
                                r && null != o
                                    ? (0, a.jsx)(y.m, {
                                          text: eu.intl.string(es.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, a.jsx)("button", {
                                              type: "button",
                                              className: `${iT.Y0} ${iT.$E}`,
                                              disabled: I,
                                              onClick: B,
                                              "aria-label": eu.intl.string(es.default.wiguT0),
                                              children: (0, a.jsx)(rh.w, {
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
                                            className: `${iT.Y0} ${iT.$E}`,
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
                                  className: iT.fF,
                                  children: [
                                      (0, a.jsx)("div", { className: iT.MT }),
                                      (0, a.jsx)("button", {
                                          type: "submit",
                                          className: iT.rt,
                                          disabled: !F,
                                          "aria-label": eu.intl.string(es.default.rxW2cl),
                                          children: (0, a.jsx)(iy.SendMessageIcon, {
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
    iz = 1500,
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
function iO(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = iO.mirror;
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
                (iO.mirror = t),
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
iO.mirror = null;
var iG = n(52133),
    iU = n(531685),
    iq = n(155899),
    iB = n(148087);
let iH = [6e4, 18e4, 6e5],
    iK = [
        {
            key: "outdated",
            priority: 2,
            idleDelayMs: 6e4,
            backoffDelaysMs: iH,
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
                    !(null != n.publishCta && a2(l))
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
        outdatedUpdating: !1,
    };
}
let iW = new Map();
function iX(e) {
    return (0, f.bG)([eN.Ay, r7.A], () => {
        let t = eN.Ay.getProject(e);
        return null == t ? "" : (r7.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
function iJ(e) {
    let { projectId: t, notice: n } = e;
    return "outdated" === n ? (0, a.jsx)(iQ, { projectId: t }) : (0, a.jsx)(iY, { projectId: t, notice: n });
}
function iY(e) {
    let { projectId: t, notice: n } = e,
        l = i.useContext(ns.bI),
        r = iX(t),
        s = (0, f.bG)([eN.Ay, X.A], () => {
            let e = eN.Ay.getProject(t);
            return null == e || "user" === e.install_scope || null == e.guild_id
                ? null
                : (X.A.getGuild(e.guild_id)?.name ?? null);
        }),
        u = i.useCallback(() => {
            null != l && (0, ns.ub)(t, l);
        }, [l, t]);
    return (0, a.jsx)(j.E, {
        variant: "text-md/normal",
        color: "text-default",
        children: eu.intl.format(
            (function (e, t) {
                if (!0 === e.channel_skipped) return es.default.ev23Cw;
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
            { name: r, server: s ?? "", onOpen: u },
        ),
    });
}
function iQ(e) {
    let { projectId: t } = e,
        n = (0, ns.Ay)(t),
        [l, r] = i.useState(!1);
    return null == n
        ? null
        : l && (n.publishing || !n.isUpdate)
          ? (0, a.jsx)(iZ, {})
          : (0, a.jsx)(j.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: eu.intl.format(es.default.X8tdbS, {
                    action: n.label,
                    onUpdate: () => {
                        (r(!0), iW.get(t)?.forEach((e) => e()), n.run("outdated_notice"));
                    },
                }),
            });
}
function iZ() {
    let e = eu.intl.string(es.default.lexcBN),
        t = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = (0, f.bG)([iw.Ay], () => iw.Ay.useReducedMotion),
                [n, l] = i.useState(1);
            return (
                i.useEffect(() => {
                    if (t || e) return;
                    let n = setInterval(() => l((e) => (e % 3) + 1), 400);
                    return () => clearInterval(n);
                }, [t, e]),
                ".".repeat(t ? 3 : n)
            );
        })(!(0, iB.A)());
    return (0, a.jsxs)(j.E, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: [e, (0, a.jsx)("span", { "aria-hidden": !0, children: t })],
    });
}
var i0 = n(248798);
function i1(e, t) {
    e.style.height = `${t.offsetHeight}px`;
}
function i2(e) {
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
        o = i.useRef(null),
        c = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            let e = o.current;
            if (null == e || s) return;
            e.getBoundingClientRect();
            let t = c.current;
            if (null == t) {
                e.style.height = "0px";
                return;
            }
            i1(e, t);
            let n = new ResizeObserver(() => i1(e, t));
            return (n.observe(t), () => n.disconnect());
        }, [r, s]),
        (0, a.jsx)("div", {
            ref: o,
            className: u()(i0.NI, { [i0.Jg]: null == r }),
            "aria-live": "polite",
            children: (0, a.jsx)("div", {
                className: i0.t$,
                children: l.map((e) =>
                    (0, a.jsx)(
                        "div",
                        {
                            ref: e.leaving ? void 0 : c,
                            "aria-hidden": e.leaving || void 0,
                            className: u()(i0.qd, e.leaving ? i0.cu : i0.We),
                            children: n(e.key),
                        },
                        e.key,
                    ),
                ),
            }),
        })
    );
}
var i3 = n(521981),
    i4 = n(491182),
    i6 = n(438729),
    i7 = n(622868),
    i5 = n(448368),
    i8 = n(837528),
    i9 = n(470964),
    se = n(715628),
    st = n(752636),
    sn = n(9842),
    sl = n(589022),
    sr = n(994500),
    sa = n(967198),
    si = n(7584);
let ss = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function su(e) {
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
function sc(e, t) {
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
    if (su(r) && su(a)) {
        let n = 0,
            l = t;
        for (; n < 32 && su(so(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function sd(e, t) {
    let { streaming: n } = t,
        l = (0, f.bG)([iw.Ay], () => iw.Ay.useReducedMotion),
        r = n && !l,
        [a, s] = i.useState(() => ({ target: e, length: e.length })),
        u = a;
    (u.target !== e &&
        (u = {
            target: e,
            length: r
                ? (function (e, t, n) {
                      let l = Math.min(Math.max(n, 0), e.length);
                      if (0 === l) return 0;
                      if (t.length >= l && t.startsWith(e.slice(0, l))) return l;
                      let r = Math.min(l, t.length),
                          a = 0;
                      for (; a < r && e.charCodeAt(a) === t.charCodeAt(a);) a++;
                      for (; a > 0 && sc(t, a);) a--;
                      return a;
                  })(u.target, e, u.length)
                : e.length,
        }),
        r || u.length === e.length || (u = { target: e, length: e.length }),
        u !== a && s(u));
    let o = r && u.length < e.length,
        c = i.useRef(u);
    i.useLayoutEffect(() => {
        c.current = u;
    });
    let d = i.useRef(0),
        m = i.useRef(0);
    (i.useEffect(() => {
        if (o)
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
                                    for (; l > t + 1 && n - l < 12 && ss.has(e.charAt(l - 1));) l--;
                                    return ss.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + i));
                                let u = s;
                                for (; u < t.length && u - s < 32 && sc(t, u);) u++;
                                return u;
                            })({ target: e.target, revealed: e.length, elapsedMs: n });
                        l !== e.length && s({ target: e.target, length: l });
                    }
                    d.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(d.current)
            );
    }, [o]),
        i.useEffect(() => {
            if (o)
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
        }, [o]));
    let h = Math.min(u.length, e.length);
    return { text: h >= e.length ? e : e.slice(0, h), revealing: r && h < e.length };
}
var sf = n(565645),
    sm = n(981879);
function sh(e) {
    let { emoji: t, label: n } = e;
    return (0, a.jsx)("div", {
        className: sm.H,
        children: (0, a.jsx)(sf.A, { emojiName: t, alt: n, size: "reaction" }),
    });
}
var sg = n(624479),
    sp = n(890377),
    sx = n(744898),
    sv = n(180227);
function sj(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: u()(sv.QE, { [sv.Rn]: t }),
              children: (0, a.jsx)(aR.Ay, {
                  children: n.map((e) =>
                      (0, a.jsx)(
                          aR.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function sb(e) {
    return nl.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: eu.intl.string(eu.t.JrGD7E), icon: sg.CopyIcon, onClick: () => (0, nl.C)(e) }]
        : [];
}
function sy(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: eu.intl.string(es.default.CXtLD2),
                          tooltip: eu.intl.string(es.default.DOb1HM),
                          icon: sp.V,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: eu.intl.string(es.default.urZwpN),
                          icon: P.P,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, a.jsx)(sj, { groupStart: n, actions: [...r, ...sb(t)] });
}
function sw(e) {
    let { content: t, groupStart: n, onRestoreVersion: l } = e,
        r =
            null == l
                ? []
                : [{ id: "restore-version", label: eu.intl.string(es.default.H8Jfhu), icon: sx.e, onClick: l }];
    return (0, a.jsx)(sj, { groupStart: n, actions: [...r, ...sb(t)] });
}
let sk = (0, r9.createChannelRecord)({ id: "conjure-builder", type: ex.rbe.DM }),
    sA = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function sN(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: u()(sv.Yq, { [sv.x1]: t }), children: e });
}
function sS(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function sC(e, t, n) {
    let { content: l } = (0, i9.A)(e, {
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
          ? (0, a.jsx)(i6.Ay, { className: n, message: e, content: l, compact: !1 })
          : (0, se.A)(r, l);
}
function sE(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, i8.m)(e, sk, t.usernameProfile, l),
        u = (0, i8.Jo)(t.avatarProfile, l),
        o = (0, f.bG)([sa.A], () => sa.A.getGuildId()),
        c = (0, f.bG)([tX.default], () => tX.default.getCurrentUser()),
        d = i.useCallback(
            (t) => {
                let n = tX.default.getUser(e.author.id) ?? e.author;
                return null == c ? null : (0, a.jsx)(sl.A, { ...t, user: n, currentUser: c, guildId: o ?? void 0 });
            },
            [c, o, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: u,
        onClickUsername: s,
        onPopoutRequestClose: r,
        renderPopout: d,
        guildId: o ?? void 0,
    };
}
function sI(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        s = i.useMemo(() => {
            let e = "" !== n.content ? (0, i3.Ay)(n, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == l
                ? e
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: sv.GV,
                              children: [
                                  (0, a.jsx)(N.x, {
                                      className: sv.Rj,
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
        { isReplyAuthorBlocked: u, isReplyAuthorIgnored: o } = (0, f.cf)(
            [sr.A],
            () => ({
                isReplyAuthorBlocked: sr.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: sr.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        c = (0, aT.X4)(n),
        d = (0, aT.X4)(t),
        m = sE(n);
    return (0, a.jsx)(i5.A, {
        repliedAuthor: c,
        baseAuthor: d,
        baseMessage: t,
        channel: sk,
        referencedMessage: { state: sn.a.LOADED, message: n },
        content: s,
        compact: !1,
        isReplyAuthorBlocked: u,
        isReplyAuthorIgnored: o,
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
function sM(e) {
    let { message: t, author: n } = e,
        l = sE(t);
    return (0, a.jsx)(i7.Ay, {
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
function s_(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, agentReaction: s, groupStart: u, onQueuedAction: o } = e;
    i.useEffect(() => t1(l), [l]);
    let c = (0, f.bG)(
            [tX.default],
            () => t0(l, null != l ? tX.default.getUser(l) : null, tX.default.getCurrentUser()),
            [l],
        ),
        d = i.useMemo(() => (0, aT.FT)(c, null), [c]),
        m = i.useMemo(() => eZ(t), [t]),
        h = m?.body ?? t,
        g = i.useMemo(() => {
            if (null == c) return null;
            let e = (0, r8.Ay)({ channelId: sk.id, content: h, author: c });
            return (0, r5.rh)({ ...e, timestamp: sS(n, e.timestamp), state: ex.cmJ.SENT });
        }, [h, c, n]),
        p = (function (e) {
            if (null == e || "" === e) return null;
            let t = si.Ay.convertSurrogateToName(e, !1);
            return "" === t ? null : eu.intl.formatToPlainString(es.default.lxXLho, { emojiName: t });
        })(s);
    return null == g
        ? null
        : (0, a.jsx)(sT, {
              message: g,
              author: d,
              content: h,
              selected: m?.label,
              accessories:
                  null != s && null != p
                      ? (0, a.jsxs)(a.Fragment, { children: [r, (0, a.jsx)(sh, { emoji: s, label: p })] })
                      : r,
              groupStart: u,
              onQueuedAction: o,
          });
}
function sT(e) {
    let { message: t, author: n, content: l, selected: r, accessories: i, groupStart: s = !0, onQueuedAction: u } = e,
        o = sC(t, l);
    return (0, a.jsx)(i4.A, {
        className: sv.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(sM, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? o
                : (0, a.jsxs)("div", {
                      className: sv.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: sv.GV,
                              children: [
                                  (0, a.jsx)(N.x, {
                                      className: sv.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, a.jsx)("span", { className: sv.WO, children: o }),
                      ],
                  }),
        childrenAccessories: sN(i, "" !== l),
        childrenButtons: (0, a.jsx)(sy, { content: l, groupStart: s, onQueuedAction: u }),
    });
}
function sP(e) {
    let {
            content: t,
            createdAt: n,
            accessories: l,
            replyTo: r,
            onJumpToReplied: s,
            groupStart: u = !0,
            streaming: o = !1,
            buttons: c,
        } = e,
        { text: d, revealing: m } = sd(t, { streaming: (0, f.bG)([iU.A], () => o && iU.A.isFocused(), [o]) }),
        h = i.useMemo(() => (0, aT.FT)(null, null), []),
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
            let e = (0, r8.Ay)({ channelId: sk.id, content: v?.body ?? r.content, author: x });
            return (0, r5.rh)({ ...e, id: r.id, timestamp: sS(r.createdAt, e.timestamp), state: ex.cmJ.SENT });
        }, [r, v, x]),
        b = i.useMemo(() => (null == r ? void 0 : { channel_id: sk.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, r8.Ay)({ channelId: sk.id, content: "", author: sA })),
        w = i.useMemo(
            () =>
                (0, r5.rh)({
                    ...y,
                    timestamp: sS(n, y.timestamp),
                    state: ex.cmJ.SENT,
                    ...(null != b ? { type: ex.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        k = i.useMemo(() => w.set("content", d), [w, d]),
        A = i.useMemo(
            () => (0, st.A)({ message: w, channel: sk, author: g, guildId: void 0, isGroupStart: u }),
            [w, g, u],
        ),
        N = sC(k, d, sv.OS);
    return (0, a.jsxs)("div", {
        className: sv.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": m ? "true" : void 0,
        children: [
            (0, a.jsx)(i4.A, {
                className: sv.yE,
                author: g,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, a.jsx)(sI, { baseMessage: w, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: A,
                childrenMessageContent: N,
                childrenAccessories: sN(l, "" !== d),
                disableInteraction: !0,
            }),
            c,
            u
                ? (0, a.jsx)("span", {
                      className: sv.st,
                      "aria-hidden": "true",
                      children: (0, a.jsx)(rK.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
let sR = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    sL = new WeakMap();
var sD = n(288539);
function s$(e, t, n) {
    return (0, a.jsx)(sD.A, { userId: e, content: `@${t}` }, n);
}
function sz(e) {
    let { projectId: t, event: n } = e,
        l = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => t1(l), [l]);
            let r = (0, f.bG)([tX.default], () => (null == l ? null : tX.default.getUser(l)), [l]),
                a = (0, tJ.tx)(r),
                s = iX(e),
                u =
                    (0, f.bG)([X.A], () => (null == t.guild_id ? null : X.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ?? eu.intl.string(es.default.R1tPlP),
                o = null == r || null == a ? null : { user: a, userHook: (e, t) => n(r.id, a, t) };
            switch (t.type) {
                case "app_removed":
                    return null == o
                        ? eu.intl.format(es.default.Lwsrhg, { app: s, server: u })
                        : eu.intl.format(es.default.qqePfT, { app: s, server: u, ...o });
                case "bot_removed":
                    return null == o
                        ? eu.intl.format(es.default.mT7EQG, { app: s, server: u })
                        : eu.intl.format(es.default["lA/crI"], { app: s, server: u, ...o });
                case "preview_bot_removed":
                    return null == o
                        ? eu.intl.format(es.default["4LVIeo"], { app: s, server: u })
                        : eu.intl.format(es.default.YJOV6D, { app: s, server: u, ...o });
                case "app_channel_deleted": {
                    let e = t.channel_name ?? "";
                    return null == o
                        ? eu.intl.format(es.default["4VQfid"], { channel: e, server: u })
                        : eu.intl.format(es.default.RlMIJN, { channel: e, server: u, ...o });
                }
            }
        })(t, n, s$);
    return (0, a.jsx)(j.E, { variant: "text-md/normal", color: "text-default", children: l });
}
function sF(e) {
    let { onSelect: t, onClose: n = D.Z_, onRestoreVersion: l } = e;
    return (0, a.jsx)(Z.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": eu.intl.string(eu.t.ogxXGq),
        onSelect: t,
        children: (0, a.jsx)(ee.rX, {
            children: (0, a.jsx)(ee.Dr, {
                id: "restore-version",
                label: eu.intl.string(es.default.H8Jfhu),
                icon: sx.e,
                action: l,
            }),
        }),
    });
}
function sO(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function sG(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
var sU = n(986109);
let sq = i.createContext(null);
function sB(e, t) {
    (0, iq.F)({ onConfirm: () => t(e) });
}
let sH = i.memo(function (e) {
        let {
                projectId: t,
                messages: n,
                emptyState: l,
                onPickIdea: r,
                onAskForIdeas: s,
                draftHasText: o,
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
            [w, A] = i.useState(null),
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
                                            let t = (0, nX.lt)(e.steps);
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
                            r = sL.get(l);
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
                                a = rv({
                                    steps: e.steps,
                                    content: e.content,
                                    hasProposal: null != e.proposal,
                                    hasAttachments: (e.attachments?.length ?? 0) > 0,
                                }),
                                i = a.lastStreamedMessage?.key,
                                s = (0, nX.C6)(e.steps, { turnActive: r }),
                                { lastWork: u, open: o } = (0, nX.CT)(s, { turnActive: r }),
                                c = s.at(-1)?.index,
                                d = !1;
                            for (let n of s) {
                                if (null != n.prose && sR.test(n.prose.content)) d = !0;
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
                                            active: n.index === o,
                                            closed: n.index !== o,
                                            ...(null != n.durationMs ? { segmentDurationMs: n.durationMs } : {}),
                                            reportsDuration: n.index === u,
                                            hostsChecklist: n.hasTodos,
                                            turnActive: nJ(e),
                                            checklistSuperseded: n.hasTodos && t,
                                        },
                                        { actor: null, boundary: void 0 },
                                    );
                            }
                            let f = sR.test(e.content ?? "");
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
                        (sL.set(l, { superseded: e, planned: a }), t.push(...a));
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
                              let n = a3.get(t);
                              return (null == n && ((n = { ...t, publishCta: null }), a3.set(t, n)), n);
                          })),
                );
            }, [n, M]),
            P = i.useMemo(() => T.map((e) => e.key), [T]),
            [R, L] = i.useState(null),
            D = (function (e, t, n) {
                if (null == t) return sO(e, e.length - 60, e.length);
                let l = null == t.endKey,
                    r = l ? e.length : sG(e, t.endKey, t.end - 1) + 1,
                    a = sG(e, t.startKey, t.start);
                return (l && n && r - a > 120 && (a = r - 60), sO(e, a, r));
            })(P, R, p),
            $ = i.useRef(D),
            z = i.useRef(P),
            F = i.useRef(T),
            O = i.useRef(null),
            G = i.useRef(null),
            U = i.useRef(new Set()),
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
                        return ((n = Math.min(e.length, t.end + 30)), sO(e, Math.max(t.start, n - 120), n));
                    }
                    if (!l) return null;
                    if (0 === t.start) return "older";
                    if (!a && !r) {
                        let n, l;
                        return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), sO(e, n, l));
                    }
                    let i = Math.max(t.start - 30, t.end - 120);
                    return i < t.start ? sO(e, i, t.end) : null;
                })(z.current, $.current, {
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
                    ((G.current = e ?? null), L(null));
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
                    let a = F.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                    if (-1 === a) {
                        (0, en.P6)(t) && (H.current = e);
                        return;
                    }
                    (x(),
                        (G.current = () => {
                            (y.current
                                ?.querySelector(`[data-conjure-message="${e}"]`)
                                ?.scrollIntoView({ block: "center" }),
                                I(e));
                        }),
                        L(((n = z.current), sO(n, (l = Math.max(0, a - 30)), l + 60))));
                },
                [I, x, t],
            );
        (i.useEffect(() => {
            let e = H.current;
            null != e && K(e);
        }, [T, K]),
            i.useLayoutEffect(() => {
                if (null == w) return;
                let e = w.getBoundingClientRect().height,
                    t = new ResizeObserver((t) => {
                        let [n] = t,
                            l = n?.contentRect.height;
                        null != l && l !== e && ((e = l), g.current ? h.current?.scrollToBottom() : q());
                    });
                return (t.observe(w), () => t.disconnect());
            }, [w, q, h, g]));
        let V = null == D.endKey;
        (i.useEffect(() => b?.(V), [V, b]),
            i.useLayoutEffect(() => {
                (($.current = D), (z.current = P), (F.current = T));
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
                    let l = G.current;
                    ((G.current = null), l?.(), q(), B());
                }
                U.current = new Set(P);
            }, [T, P, D.start, D.end, h, g, q, B]));
        let W = n.at(-1),
            X = (function (e, t, n) {
                var l;
                let r = (0, ns.Ay)(e),
                    a = (0, iB.A)(),
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
                    u = t.at(-1),
                    o = {
                        projectId: e,
                        draftHasText: n,
                        publishing: r?.publishing === !0,
                        drift: r?.isUpdate === !0,
                        messageAt: null != u ? Math.max(u.created_at, u.finished_at ?? 0, u.settled_at ?? 0) : null,
                        visible: a,
                    },
                    [c, d] = i.useState(() => iV(o, Date.now())),
                    f = (function (e, t, n) {
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
                                let t = Math.min(e.outdatedBackoff + 1, iH.length - 1);
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
                    })(c, o, Date.now),
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
                        iK.map((e) => ({
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
                        if (null == g) return;
                        let e = setTimeout(() => d((e) => ({ ...e, now: Date.now() })), Math.max(0, g - Date.now()));
                        return () => clearTimeout(e);
                    }, [g, f.now]),
                    h
                );
            })(t, n, !0 === o),
            J = i.useCallback(
                (e) => {
                    switch (e) {
                        case "outdated":
                            return (0, a.jsx)(sP, {
                                groupStart: !1,
                                content: "",
                                accessories: (0, a.jsx)(iJ, { projectId: t, notice: "outdated" }),
                            });
                        case "ideas":
                            return (0, a.jsx)("div", {
                                className: sU.u$,
                                children: (0, a.jsx)(sP, {
                                    content: eu.intl.string(es.default.s96AWB),
                                    accessories: (0, a.jsx)(ie, { onAsk: s }),
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
                                            t === eu.intl.string(es.default.UGqnoV) ||
                                            t === eu.intl.string(es.default.sMQt5O)
                                        );
                                    })(s);
                                continue;
                            }
                            let u = s.secretRequest?.fields ?? [];
                            if (0 === u.length || !(0, ej.BL)(s)) continue;
                            let o = i;
                            for (let e of (o && null == n
                                ? l.set(s.render_id, "pending")
                                : o && null != n && u.every((e) => n.has(e.name))
                                  ? l.set(s.render_id, "received")
                                  : a
                                    ? l.set(s.render_id, u.some((e) => r.has(e.name)) ? "superseded" : "inactive")
                                    : l.set(s.render_id, "open"),
                            u))
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
                    className: u()(sU.x7, sU.jH),
                    "aria-busy": !0,
                    children: (0, a.jsx)("li", { className: sU.Ub, children: (0, a.jsx)(k.y, {}) }),
                });
            let e = "unavailable" === l ? es.default.Td4Sf4 : es.default.V1QiNz;
            return (0, a.jsx)("ol", {
                className: sU.x7,
                children: (0, a.jsx)(sX, {
                    role: "assistant",
                    children: (0, a.jsx)(sP, { content: eu.intl.string(e) }),
                }),
            });
        }
        return (0, a.jsx)(sq.Provider, {
            value: U,
            children: (0, a.jsxs)("ol", {
                ref: N,
                className: sU.x7,
                children: [
                    T.slice(D.start, D.end).map((e) => {
                        let n = e.message;
                        if ("closing" !== e.kind)
                            return (0, a.jsx)(
                                sK,
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
                            sK,
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
                        ? (0, a.jsx)(sX, {
                              role: "assistant",
                              continuation: !0,
                              children: (0, a.jsx)(sP, {
                                  groupStart: !1,
                                  content: "",
                                  accessories: (0, a.jsx)(j.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: eu.intl.string(es.default.YR8A2v),
                                  }),
                              }),
                          })
                        : null,
                    V
                        ? (0, a.jsx)("li", {
                              role: "none",
                              className: sU.q3,
                              children: (0, a.jsx)(i2, { reminder: X, renderReminder: J }),
                          })
                        : null,
                ],
            }),
        });
    }),
    sK = i.memo(
        function (e) {
            let { row: t, projectId: n, highlighted: l, currentUserId: r, ...i } = e,
                s = t.message;
            switch (t.kind) {
                case "user": {
                    let e = null != s.attachments && s.attachments.length > 0 ? s.attachments : null;
                    return (0, a.jsx)(sX, {
                        rowKey: t.key,
                        role: "user",
                        anchorId: s.id,
                        highlighted: l,
                        continuation: !t.groupStart,
                        children: (0, a.jsx)(s_, {
                            groupStart: t.groupStart,
                            content: s.content,
                            createdAt: s.created_at,
                            userId: s.user_id,
                            agentReaction: s.agentReaction,
                            accessories: null != e ? (0, a.jsx)(is.A, { projectId: n, attachments: e }) : void 0,
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
                    return (0, a.jsx)(sX, {
                        rowKey: t.key,
                        role: "assistant",
                        continuation: !t.groupStart,
                        children: (0, a.jsx)(sP, {
                            groupStart: t.groupStart,
                            content: t.content,
                            streaming: t.streaming,
                            createdAt: s.created_at,
                            accessories:
                                t.hostsAttachments && null != s.attachments
                                    ? (0, a.jsx)(is.A, { projectId: n, attachments: s.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, a.jsx)(sX, {
                        rowKey: t.key,
                        role: "assistant",
                        children: (0, a.jsx)(im, {
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
                    return (0, a.jsx)(sX, {
                        rowKey: t.key,
                        role: "assistant",
                        continuation: !t.groupStart,
                        children: (0, a.jsx)(sP, {
                            groupStart: t.groupStart,
                            content: null == s.publishNotice ? s.content : "",
                            createdAt: s.created_at,
                            accessories:
                                null == s.publishNotice
                                    ? void 0
                                    : (0, a.jsx)(iJ, { projectId: n, notice: s.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, a.jsx)(sX, {
                        rowKey: t.key,
                        role: "assistant",
                        continuation: !t.groupStart,
                        children: (0, a.jsx)(sP, {
                            groupStart: t.groupStart,
                            content: null == s.projectEvent ? s.content : "",
                            createdAt: s.created_at,
                            accessories:
                                null == s.projectEvent
                                    ? void 0
                                    : (0, a.jsx)(sz, { projectId: n, event: s.projectEvent }),
                        }),
                    });
                case "interrupted":
                    return (0, a.jsx)(sX, {
                        rowKey: t.key,
                        role: "assistant",
                        children: (0, a.jsx)(im, { projectId: n, interrupted: !0, steps: s.steps }),
                    });
                case "legacyTodos":
                    return (0, a.jsx)(sX, {
                        rowKey: t.key,
                        role: "assistant",
                        children: (0, a.jsx)(im, {
                            projectId: n,
                            steps: sV,
                            active: !1,
                            checklistSuperseded: t.checklistSuperseded,
                            todos: s.todos,
                            provisionalTodo: s.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, a.jsx)(sW, { row: t, projectId: n, ...i });
            }
        },
        function (e, t) {
            return (
                (0, iG.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, iG.A)(e.row, t.row, ["message"]) &&
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
                (0, iG.A)(e.replyTo, t.replyTo) &&
                (0, iG.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    sV = [];
function sW(e) {
    let {
            row: t,
            projectId: n,
            replyTo: l,
            onJumpTo: r,
            planVersion: i,
            pickedIdeaIds: s,
            secretRequestAwaiting: u,
            secretRequestStatus: o,
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
        x = null != p && null != h ? () => sB(p, h) : void 0,
        v = g.in_reply_to,
        j = g.restoreProposal;
    return (0, a.jsx)(sX, {
        rowKey: t.key,
        role: "assistant",
        continuation: !t.groupStart,
        onContextMenu:
            null != x
                ? (e) => {
                      (0, D.jA)(e, (e) => (0, a.jsx)(sF, { ...e, onRestoreVersion: x }));
                  }
                : void 0,
        children: (0, a.jsx)(sP, {
            groupStart: t.groupStart,
            buttons: (0, a.jsx)(sw, { groupStart: t.groupStart, content: t.content, onRestoreVersion: x }),
            content: t.content,
            createdAt: g.created_at,
            replyTo: l,
            onJumpToReplied: null != v && null != r ? () => r(v) : void 0,
            accessories: (0, a.jsx)(ih, {
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
                secretRequestAwaiting: u,
                secretRequestStatus: o,
                settingsRequest: t.active || c ? void 0 : g.settingsRequest,
                publishCta: t.active ? null : g.publishCta,
                onPickIdea: f,
                onApprovePlan: m,
                restoreProposal: j,
                onRestoreProposal:
                    null != j && null != h && d
                        ? () =>
                              sB(
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
function sX(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: o = !1,
            onContextMenu: c,
        } = e,
        d = i.useContext(sq),
        [f] = i.useState(() => !iU.A.isFocused() || (null != l && d?.current.has(l) === !0));
    return (0, a.jsx)("li", {
        onContextMenu: c,
        "data-role": t,
        "data-conjure-message": r,
        "data-conjure-row-key": l,
        className: u()(sU.xk, { [sU.g5]: f, [sU.Qo]: s, [sU.q3]: o }),
        children: n,
    });
}
let sJ = [es.default["AX+5lk"], es.default.VAU6A7, es.default["1emysd"], es.default.EXHX3L, es.default.ChslmX];
function sY(e) {
    return sJ.some((t) => eu.intl.string(t) === e);
}
function sQ(e) {
    switch (e) {
        case "connecting":
            return eu.intl.string(es.default["ECl+Dx"]);
        case "closed":
            return eu.intl.string(es.default.mQZSp1);
        case "failed":
            return eu.intl.string(es.default.xzJSZ6);
    }
}
var sZ = n(823376),
    s0 = n(187447);
function s1(e) {
    let { activity: t, id: n } = e,
        l = (0, iB.A)(),
        { text: r, revealing: s } = sd(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        o = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [r]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: s0.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(nK.Ch, {
                ref: o,
                className: s0.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: u()(ic.PT, s0.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: rg.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var s2 = n(53659);
function s3(e) {
    let {
            activity: t,
            compacting: n = !1,
            saving: l = !1,
            restoring: r = !1,
            recalling: s = !1,
            controlling: o = !1,
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
                    ? sJ[0]
                    : l
                      ? es.default.mKK6wB
                      : n
                        ? es.default.xnCAaP
                        : s
                          ? es.default.izrt52
                          : es.default.L9EDub;
        })({ activity: t, compacting: n, saving: l, restoring: r, recalling: s, controlling: o }),
        x = eu.intl.string(p),
        v = p === sJ["0"],
        [y, w] = i.useState(c ?? x),
        k = (0, iB.A)();
    (!l && (k || v)) || y === x || w(x);
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
        ((C.current = v), !v && sY(S.current) && w(A.current));
    }, [v]),
        i.useEffect(() => {
            if (!k) return;
            let e = 0,
                t = 0;
            function n() {
                if (C.current) {
                    var e;
                    ((E.current = sY(S.current) ? E.current + 1 : 0),
                        w(((e = E.current), eu.intl.string(sJ[e % sJ.length]))));
                } else A.current !== S.current ? w(A.current) : N.current?.play();
            }
            return (
                (e = window.setTimeout(() => {
                    (n(), (t = window.setInterval(n, 2400)));
                }, 1800)),
                () => {
                    (window.clearTimeout(e), window.clearInterval(t));
                }
            );
        }, [k]));
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
        renderPopout: () => (0, a.jsx)(s1, { id: m, activity: t }),
        children: () =>
            (0, a.jsxs)(b.D, {
                innerRef: f,
                className: u()(s2.hF, I && s2.Xd),
                "aria-label": eu.intl.string(r ? es.default.qqlUiW : v ? sJ["0"] : es.default["Uuj/gh"]),
                "aria-expanded": _,
                "aria-describedby": _ ? m : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": eu.intl.string(p),
                onClick: T,
                children: [
                    (0, a.jsx)("span", {
                        className: s2.bl,
                        children: (0, a.jsx)(sZ.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: s2.xu,
                        "aria-hidden": !!o || !!v || void 0,
                        children: k
                            ? (0, a.jsx)(eT.o, {
                                  ref: N,
                                  text: y,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  duration: 1e3,
                                  delay: null,
                                  className: s2.yE,
                              })
                            : (0, a.jsx)(j.E, {
                                  tag: "span",
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  className: s2.yE,
                                  children: y,
                              }),
                    }),
                ],
            }),
    });
}
let s4 = { second: 1e3, minute: 6e4 };
function s6(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let n;
            if (null == e) return;
            let r = s4[t];
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
var s7 = n(719374);
function s5(e) {
    let { startedAt: t } = e,
        n = s6(t);
    return (0, a.jsx)(j.E, {
        tag: "span",
        variant: "text-xs/medium",
        color: "text-muted",
        "aria-hidden": !0,
        className: s7.$,
        "data-conjure-turn-timer": !0,
        children: (0, rp.C7)(n),
    });
}
function s8(e) {
    let { startedAt: t } = e,
        n = s6(t, "minute");
    return (0, a.jsx)(w.A, { role: "timer", children: (0, rp.Us)(n) });
}
var s9 = n(436804);
function ue(e) {
    return e.toLocaleString();
}
function ut(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: s9.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: s9.mf,
                children: [
                    (0, a.jsx)(j.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(j.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [ue((0, Y.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(j.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    ue(n.input_tokens),
                    " in \xb7 ",
                    ue(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${ue(n.cache_creation_input_tokens)} cache write \xb7 ${ue(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function un(e) {
    let { project: t } = e,
        n = (0, Y.wU)(t.compaction),
        l = (0, Y.wU)(t.classifier),
        r = (0, Y.wV)(t.orchestrator, t.codegen),
        i = (0, Y.wV)(r, n);
    return (0, a.jsxs)("div", {
        className: s9.si,
        role: "dialog",
        "aria-label": eu.intl.string(es.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: s9.Q$,
                children: (0, a.jsxs)("div", {
                    className: s9.mf,
                    children: [
                        (0, a.jsxs)(j.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [ue((0, Y.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(j.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(ut, { label: eu.intl.string(es.default["9Sj3SX"]), usage: r }),
            (0, a.jsx)(ut, { label: eu.intl.string(es.default.ANCEo3), usage: n }),
            (0, a.jsx)(ut, { label: eu.intl.string(es.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsxs)("div", {
                className: s9.mf,
                children: [
                    (0, a.jsx)(j.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: eu.intl.string(es.default["8OUg09"]),
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
function ul(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(Q.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(un, { project: t }),
        children: (e) =>
            (0, a.jsx)(b.D, {
                innerRef: n,
                className: s9.Y$,
                "aria-label": eu.intl.string(es.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(rX.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var ur = n(997421);
function ua(e) {
    let t,
        {
            projectId: n,
            thinking: l,
            turnStartedAt: r,
            restoring: s = !1,
            recalling: u = !1,
            thinkingActivity: o,
            compacting: c,
            saving: d,
            projectUsage: f,
            connState: m,
        } = e,
        h = (0, tx.Zv)(n),
        [g, p] = i.useState(null),
        x = i.useCallback((e) => p(sY(e) || e === eu.intl.string(es.default.mKK6wB) ? null : e), []),
        v =
            null == f
                ? null
                : ((t = (0, Y.a7)(f.cost_usd)),
                  {
                      text: eu.intl.formatToPlainString(es.default.gMuw5d, { runes: t.toLocaleString() }),
                      aria: eu.intl.formatToPlainString(es.default.Z4LvGa, { runes: t, turns: f.turns }),
                  }),
        b = l && null != r;
    return (0, a.jsxs)("div", {
        className: ur.jf,
        children: [
            (0, a.jsxs)("div", {
                className: ur.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    l || s || u || h || !0 === d
                        ? (0, a.jsx)(s3, {
                              activity: o,
                              compacting: c,
                              saving: d,
                              restoring: s,
                              recalling: u,
                              controlling: h,
                              spoken: g,
                              onSpokenChange: x,
                          })
                        : null,
                    b ? (0, a.jsx)(s5, { startedAt: r }) : null,
                ],
            }),
            b ? (0, a.jsx)(s8, { startedAt: r }) : null,
            null == f || null == v
                ? null
                : (0, a.jsxs)("span", {
                      className: ur.BP,
                      children: [
                          (0, a.jsx)(j.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": v.aria,
                              children: v.text,
                          }),
                          (0, a.jsx)(ul, { project: f }),
                      ],
                  }),
            "open" === m
                ? null
                : (0, a.jsx)(j.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === m ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": eu.intl.formatToPlainString(es.default["tCo+ZM"], { status: sQ(m) }),
                      "data-conjure-conn": !0,
                      "data-state": m,
                      className: ur.XF,
                      children: sQ(m),
                  }),
        ],
    });
}
let ui = ["wheel", "touchstart", "pointerdown", "keydown"];
var us = n(698638),
    uu = n(608711);
let uo = [eu.intl.string(es.default["9w+Chc"]), eu.intl.string(es.default.WAvmdq), eu.intl.string(es.default.SKsrzl)];
function uc(e) {
    var t;
    let { projectId: n, restoreState: l, onRestoreVersion: r, onImportProject: s } = e,
        u = (0, f.bG)([ej.Ay], () => ej.Ay.getMessages(n), [n]),
        o = (0, f.bG)([en.Ay], () => en.Ay.getConnState(n), [n]),
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
            stickToBottomRef: w,
            pinned: k,
            atBottom: N,
            unpin: S,
            releasePinHold: C,
            showsLatest: E,
            showsLatestRef: I,
            handleShowsLatestChange: M,
            updatePin: _,
        } = (function (e) {
            let t = i.useRef(!0),
                [n, l] = i.useState(!0),
                [r, a] = i.useState(!0),
                s = i.useRef(!1),
                u = i.useCallback(() => {
                    ((s.current = !0), (t.current = !1), l(!1));
                }, []),
                o = i.useCallback(() => {
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
                    for (let e of ui) t.addEventListener(e, o, { passive: !0 });
                    return () => {
                        for (let e of ui) t.removeEventListener(e, o);
                    };
                }
            }, [e, o]);
            let h = i.useCallback(() => {
                let n = e.current;
                if (null == n) return;
                let r = n.getDistanceFromBottom(),
                    i = !s.current && r < 32 && f.current;
                t.current = i;
                let u = r > 1 || !f.current;
                (a((e) => (!u === e ? e : !u)), l((e) => (e === i ? e : i)));
            }, [e]);
            return {
                stickToBottomRef: t,
                pinned: n,
                atBottom: r,
                unpin: u,
                releasePinHold: o,
                showsLatest: c,
                showsLatestRef: f,
                handleShowsLatestChange: m,
                updatePin: h,
            };
        })(v),
        T = i.useCallback(() => {
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
            (C(), I.current ? e() : b.current?.showLatest(e));
        }, [C, I]),
        R = i.useCallback(() => {
            (_(), b.current?.handleScroll());
        }, [_]);
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
                r && (w.current ? v.current?.scrollToBottom() : b.current?.recordAnchor());
            });
        return (r.observe(e), null != t && r.observe(t), () => r.disconnect());
    }, [w]),
        i.useEffect(() => {
            (0, en.Hc)(n);
        }, [n]),
        (0, eb.E1)(n));
    let L = e9(n),
        D = (function (e) {
            let t = (0, ns.Ay)(e),
                n = t?.guildId ?? null,
                l = (0, f.bG)([X.A], () => (null == n ? null : (X.A.getGuild(n)?.name ?? null))),
                [r, a] = i.useState(null),
                s = t?.missingSurface ?? null;
            return null == s || r === e
                ? null
                : {
                      message: eu.intl.format("channel" === s ? es.default["1cm4fj"] : es.default.Lm7IRC, {
                          server: l ?? "",
                      }),
                      onDismiss: () => a(e),
                  };
        })(n),
        $ = i.useCallback(
            (e, t) => {
                (0, en.dv)(n, e, t);
            },
            [n],
        ),
        z = i.useCallback(
            (e, t) => {
                0 === L.annotations.length
                    ? $(e, t)
                    : ($(
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
                          })({ annotations: L.annotations, metaComment: e, context: L.context }),
                          t,
                      ),
                      e6(n));
            },
            [L, $, n],
        ),
        F = i.useCallback(() => (0, en.fu)(n), [n]),
        O = i.useCallback((e) => lY(n, e.implementation_prompt), [n]),
        [G, U] = (function (e) {
            let [t, n] = i.useState(() => rm(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? rm(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(n),
        q = i.useCallback(() => $(eu.intl.string(es.default["t5CN3+"])), [$]),
        B = i.useCallback((e, t, l) => lY(n, e, { clarificationAnswers: t, attachments: l }), [n]),
        H = i.useCallback((e) => (0, en.XZ)(n, e), [n]),
        K = i.useCallback((e) => (0, en.vX)(n, e), [n]),
        V = i.useCallback((e) => iI(n, "chat", Array.from(e), K), [n, K]),
        W = i.useCallback(() => lY(n, eu.intl.string(es.default.Zc7gML)), [n]),
        J = l?.status === "restoring",
        Y = "open" === o && !c && !J,
        Q = u[u.length - 1],
        Z = null != Q && "assistant" === Q.role && null != Q.proposal,
        [ee, et] = i.useState(null),
        el = Q?.clarification != null && Q.clarification.id !== ee ? Q.clarification : null,
        er = i.useCallback(() => {
            null != el && et(el.id);
        }, [el]),
        ea = (0, f.bG)([en.Ay], () => en.Ay.getSettings(n), [n]),
        [ei, eo] = i.useState(null),
        ec =
            null != Q &&
            "assistant" === Q.role &&
            null != Q.settingsRequest &&
            (0, ej.BL)(Q) &&
            Q.id !== ei &&
            ((t = Q.settingsRequest),
            null != ea &&
                (t.keys ?? []).some((e) => {
                    let t = ea.schema.find((t) => t.key === e);
                    if (null == t) return !1;
                    if ("secret" === t.type) return ea.secrets.find((t) => t.name === e)?.set !== !0;
                    let n = ea.values[e];
                    return null == n || "" === n;
                }))
                ? Q
                : null,
        ed = ec?.settingsRequest ?? null,
        ef = i.useCallback(() => {
            null != ec && eo(ec.id);
        }, [ec]),
        em = null != ed,
        eh = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: (0, f.bG)([ej.Ay], () => ej.Ay.hasLoadedHistory(n), [n]),
            historyUnavailable: (0, f.bG)([ej.Ay], () => ej.Ay.isHistoryUnavailable(n), [n]),
            connState: o,
        }),
        eg = "loading" === eh && 0 === u.length,
        ep = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < n.length; t++) e = (31 * e + n.charCodeAt(t)) % 0x7fffffff;
            return uo[e % uo.length];
        }, [n]),
        ex = Z ? eu.intl.string(es.default.Zc7gML) : "greeting" === eh && 0 === u.length ? ep : null,
        ev = i.useMemo(() => {
            for (let e = u.length - 1; e >= 0; e--) {
                let t = u[e];
                if ("assistant" === t.role && !(0, ej.BL)(t)) return t;
            }
        }, [u]),
        ey = null != ev,
        ew =
            null != ev
                ? (function (e) {
                      let t = e.turn_id ?? e.steps.find((e) => null != e.turn_id)?.turn_id;
                      if (null != t && /^\d+$/.test(t)) {
                          let e = rr.default.extractTimestamp(t);
                          if (Number.isFinite(e) && e > 0) return e;
                      }
                      return e.created_at;
                  })(ev)
                : void 0,
        ek = Z && Y ? W : void 0,
        eA = i.useCallback(() => lY(n, eu.intl.string(es.default.EMgIuY)), [n]),
        [eN, eS] = i.useState(null),
        [eC, eE] = i.useState(ey);
    (eC !== ey && (eE(ey), ey || eS(null)),
        i.useEffect(() => {
            if (!ey) return;
            let e = v.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? eS(null)
                        : eS(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (n.observe(t), () => n.disconnect());
        }, [ey, ev?.steps, E]));
    let eI = E ? eN : "bottom",
        eM = i.useMemo(() => (null != ev ? (0, nY.b)(ev.steps) : ""), [ev]),
        e_ = i.useMemo(() => (null != ev ? ((0, nX.lt)(ev.steps) ?? ev.todos) : void 0), [ev]),
        eT = ev?.provisionalTodo,
        eP = null != ev && nJ(ev),
        eR = i.useMemo(() => {
            var e;
            return null != ev ? ((e = ev.steps), id((0, nX.Jf)(e, !0).tasks)) : void 0;
        }, [ev]);
    return (0, a.jsxs)("section", {
        ref: x,
        "data-conjure-chat": !0,
        className: uu.TE,
        children: [
            Y
                ? (0, a.jsx)(nW.A, {
                      title: eu.intl.string(es.default.gy7byi),
                      description: eu.intl.string(es.default["dkv/WO"]),
                      icons: us.ir,
                      onDrop: V,
                  })
                : null,
            (0, a.jsx)(la, {
                onJumpToActivity: T,
                line: eM,
                placement: ey && "top" === eI ? "top" : null,
                todos: e_,
                todosLive: eP,
                provisionalTodo: eT,
                agents: eR,
            }),
            (0, a.jsxs)("div", {
                className: uu.JX,
                children: [
                    (0, a.jsx)(nK.Ch, {
                        ref: v,
                        onScroll: R,
                        scrollbarGutter: eg ? "both-edges" : "stable",
                        className: [uu.N$, N ? null : uu.hB, em ? uu.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(sH, {
                            projectId: n,
                            messages: u,
                            emptyState: eh,
                            floatingSettingsMessageId: ec?.id,
                            onPickIdea: Y ? O : void 0,
                            onAskForIdeas: Y ? q : void 0,
                            draftHasText: G,
                            onApprovePlan: Y ? eA : void 0,
                            onRestoreVersion: J || ey ? void 0 : r,
                            scrollerRef: v,
                            stickToBottomRef: w,
                            pinned: k,
                            onUnpin: S,
                            handleRef: b,
                            onShowsLatestChange: M,
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: uu.NJ,
                        children: (0, a.jsx)(ua, {
                            projectId: n,
                            thinking: ey,
                            turnStartedAt: ew,
                            restoring: J,
                            recalling: eg,
                            thinkingActivity: m,
                            compacting: h,
                            saving: g,
                            projectUsage: d,
                            connState: o,
                        }),
                    }),
                    null == el
                        ? null
                        : (0, a.jsx)("div", {
                              className: em ? `${uu.B5} ${uu.J9}` : uu.B5,
                              children: (0, a.jsx)(
                                  re,
                                  { projectId: n, clarification: el, onSubmit: Y ? B : void 0, onDismiss: er },
                                  el.id,
                              ),
                          }),
                    null == ed
                        ? null
                        : (0, a.jsx)("div", {
                              className: uu.B5,
                              children: (0, a.jsx)(rl, { projectId: n, request: ed, onDismiss: ef }, ec?.id),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: uu.Jx,
                children: [
                    (0, a.jsx)(la, {
                        onJumpToActivity: T,
                        line: eM,
                        placement: ey && "bottom" === eI ? "bottom" : null,
                        todos: e_,
                        todosLive: eP,
                        provisionalTodo: eT,
                        agents: eR,
                    }),
                    0 === L.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: uu.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, a.jsx)(j.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: eu.intl.formatToPlainString(es.default["7b49dS"], {
                                          count: L.annotations.length,
                                      }),
                                  }),
                                  (0, a.jsx)(j.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: eu.intl.string(es.default["5zG+CR"]),
                                  }),
                                  (0, a.jsx)(A.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: eu.intl.string(es.default["/zOv9+"]),
                                      onClick: () => e6(n),
                                  }),
                              ],
                          }),
                    null == D
                        ? null
                        : (0, a.jsxs)("div", {
                              className: uu.Db,
                              children: [
                                  (0, a.jsx)(nV.w, { type: "warning", role: "status", message: D.message }),
                                  (0, a.jsx)("div", {
                                      className: uu.jU,
                                      children: (0, a.jsx)(y.m, {
                                          text: eu.intl.string(eu.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, a.jsx)(t9.K, {
                                              "aria-label": eu.intl.string(eu.t.WAI6xu),
                                              icon: P.P,
                                              variant: "color-mix",
                                              size: "md",
                                              onClick: D.onDismiss,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                    (0, a.jsx)(i$, {
                        projectId: n,
                        canSend: Y,
                        stopped: c,
                        running: ey,
                        restoring: J,
                        onSend: z,
                        hasPendingContext: L.annotations.length > 0,
                        onInterrupt: Y ? F : void 0,
                        onUploadFile: K,
                        onImport: s,
                        onApprove: ek,
                        suggestion: ex,
                        questionOpen: null != el || null != ed,
                        modelSettings: p,
                        onModelSettingsChange: H,
                        onDraftHasTextChange: U,
                    }),
                ],
            }),
        ],
    });
}
var ud = n(761508),
    uf = n(616e3),
    um = n(683438);
function uh(e, t) {
    return String(e).padStart(t, "0");
}
var ug = n(667931);
let up = {
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
    ux = { running: "Running", ok: "Done", error: "Failed" };
function uv(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function uj(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function ub(e) {
    return uv(Math.round(e));
}
function uy(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function uw(e) {
    return ub(e.count > 1 ? e.totalMs : e.end - e.start);
}
let uk = ["Arguments", "Result", "Usage", "Details"];
function uA(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function uN(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function uS(e) {
    let t = (0, ug.bM)(e)?.end;
    return null != t ? uv(t) : (0, ug.lp)(e) ? "interrupted" : "still running";
}
function uC(e) {
    return [
        (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
            if (e.length > 64) return null;
            let n = Date.parse(e);
            if (Number.isNaN(n)) return null;
            let l = new Date(n),
                r = `${uh(l.getHours(), 2)}:${uh(l.getMinutes(), 2)}:${uh(l.getSeconds(), 2)}`;
            return "millis" === t ? `${r}.${uh(l.getMilliseconds(), 3)}` : r;
        })(new Date(e.started_at).toISOString()) ?? "",
        uy(e.spans.length),
        (0, ug.Sj)((0, ug.bM)(e)?.attrs),
    ]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function uE(e) {
    let t = (0, ug.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, ug.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += uI(r, "in")),
                (l.output += uI(r, "out")),
                (l.cacheRead += uI(r, "cache_read")),
                (l.cacheWrite += uI(r, "cache_write")),
                (l.costUsd += uI(r, "cost_usd"))));
    }
    let r = ug.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function uI(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var uM = n(738188),
    u_ = n(430993),
    uT = n(364840),
    uP = n(224640),
    uR = n(20742);
let uL = { collapsed: new Set(), revealed: new Set() };
var uD = n(872892);
let u$ = {
    op: uD.Q,
    model: uD.i3,
    tool: uD.dH,
    setup: uD.kc,
    worktree: uD.Qx,
    sandbox: uD.QH,
    build: uD.F1,
    platform: uD.Op,
    other: uD.fv,
};
function uz(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      uy(t.calls, "model call"),
                      `${uj(t.input)} in`,
                      `${uj(t.output)} out`,
                      `${uj(t.cacheRead)} cache read`,
                      `${uj(t.cacheWrite)} cache write`,
                      uN(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: uD.M1,
        children: [
            (0, a.jsx)("div", {
                className: uD.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${uD.DJ} ${u$[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: uD.o1,
                children: ug.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${ub(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: uD.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${uD.nf} ${u$[e]}` }),
                                (0, a.jsx)(j.E, { variant: "text-xs/normal", color: "text-muted", children: up[e] }),
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
function uF(e) {
    return `conjure-perf-trace-${e}`;
}
function uO(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        u = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: uD.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(u) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(j.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${uD.p0} ${s + u > 85 ? uD.EU : uD.jh}`,
                children: i,
            }),
        ],
    });
}
function uG(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: u, onExpandSubtree: o } = e,
        c = t.children.length > 0,
        d = l ? ta._ : tq.a,
        f = i.useCallback(
            (e) => {
                (e.shiftKey && o(t.key), s(t.key));
            },
            [t.key, o, s],
        ),
        m = i.useCallback(
            (e) => {
                (e.stopPropagation(), e.shiftKey ? o(t.key) : u(t.key));
            },
            [t.key, o, u],
        );
    return (0, a.jsxs)(b.D, {
        tag: "div",
        role: "treeitem",
        id: uF(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${uD.$y} ${r ? uD.wQ : ""}`,
        onClick: f,
        children: [
            (0, a.jsxs)("div", {
                className: uD.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, a.jsx)(b.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: uD.ai,
                              onClick: m,
                              children: (0, a.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: uD.YJ }),
                    (0, a.jsx)(j.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: uD.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${uD.nf} ${u$[t.category]}` }),
                    (0, a.jsx)(j.E, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        className: uD.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(j.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: uD.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(j.E, {
                              variant: "text-xs/semibold",
                              color: "text-default",
                              className: uD.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(uM.WarningIcon, { size: "xs", color: "currentColor", className: uD.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(uO, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${uD.M0} ${uD.Nh}`
                    : t.running
                      ? `${uD.M0} ${uD.rF}`
                      : `${uD.M0} ${u$[t.category]}`,
                duration: uw(t),
            }),
        ],
    });
}
function uU(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(b.D, {
        tag: "div",
        role: "treeitem",
        id: uF(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${uD.$y} ${l ? uD.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, a.jsxs)("div", {
                className: uD.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: uD.ai,
                        children: (0, a.jsx)(ta._, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: uD.U9 }),
                    (0, a.jsx)("span", { className: `${uD.nf} ${uD.dL}` }),
                    (0, a.jsx)(j.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: uD.MQ,
                        children: uy(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(uO, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${uD.M0} ${uD.ab} ${uD.dL}`,
                duration: ub(t.totalMs),
            }),
        ],
    });
}
function uq(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(j.E, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: uD._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: uD.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${uD.nf} ${u$[t.category]}` }),
                          (0, a.jsx)(j.E, { variant: "text-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(j.E, { variant: "text-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [uA("Start", `+${ub(e.start)}`), uA("Duration", uw(e))];
                      e.count > 1
                          ? t.push(
                                uA("Calls", String(e.count)),
                                uA("Longest call", ub(e.maxMs)),
                                uA("Spread over", ub(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(uA("Self time", ub(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(uA("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(uA("Notes", l.join(", "))),
                          null != e.span.error && t.push(uA("Error", e.span.error)));
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
                              s = "cost_usd" === t ? uN(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), uA(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...uk.flatMap((e) => {
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
                                            className: uD.xd,
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
                                                            className: uD.vl,
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
function uB(e) {
    let { trace: t } = e,
        n = i.useMemo(() => uE(t), [t]);
    return (0, a.jsx)(uz, { stats: n });
}
function uH(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, ug.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? uL : (0, ug.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, ug.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, ug.x7)(t)), l((n) => (0, ug._0)(n, t, e)));
            }, [t]);
            let u = i.useMemo(() => (null == t ? [] : (0, ug.wu)(t, n)), [t, n]),
                o = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, ug.IE)(t, e);
                        null != n && l((e) => (0, ug.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, ug.IE)(t, e);
                        null != n && l((e) => (0, ug.H$)(e, n));
                    },
                    [t],
                ),
                f = i.useCallback(() => {
                    null != t && l((0, ug.vH)(t));
                }, [t]),
                m = i.useCallback(() => {
                    null != t && l((0, ug.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, ug.hB)(t));
                }, [t]),
                g = u.find((e) => e.key === r);
            return {
                rows: u,
                collapsed: n.collapsed,
                selectedKey: r,
                selected: g?.kind === "node" ? g.node : null,
                toggle: o,
                reveal: c,
                expandSubtree: d,
                select: a,
                expandAll: f,
                collapseAll: m,
                reset: h,
            };
        })(t),
        { rows: l, collapsed: r, selected: s, selectedKey: u, select: o, toggle: c, reveal: d, expandSubtree: f } = n,
        m = (0, ug.dj)(t),
        h = i.useMemo(() => (0, ug.nF)(m), [m]),
        g = h.length > 1 ? ((h[1] - h[0]) / m) * 100 : 100,
        p = i.useCallback(
            (e) => {
                let t,
                    n = l.findIndex((e) => e.key === u),
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
                    null != t && (o(t.key), document.getElementById(uF(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, f, d, l, o, u, c],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(u_.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: uD.z,
                        children: [
                            (0, a.jsx)(j.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: uS(t),
                            }),
                            (0, a.jsx)(j.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: uC(t),
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
                                      children: `${uy(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(uB, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: uD.KE,
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
                        "aria-activedescendant": null == u ? void 0 : uF(u),
                        className: uD.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(g) },
                        onKeyDown: p,
                        children: [
                            (0, a.jsxs)("div", {
                                className: uD.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: uD.So,
                                        children: (0, a.jsx)(j.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: uD.c1,
                                        children: h.map((e) =>
                                            (0, a.jsx)(
                                                j.E,
                                                {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${uD.io} ${(e / m) * 100 > 85 ? uD.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / m) * 100),
                                                    },
                                                    children: 0 === e ? "0" : ub(e),
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
                                          uG,
                                          {
                                              node: e.node,
                                              extent: m,
                                              collapsed: r.has(e.key),
                                              selected: e.key === u,
                                              onSelect: o,
                                              onToggle: c,
                                              onExpandSubtree: f,
                                          },
                                          e.key,
                                      )
                                    : (0, a.jsx)(uU, { row: e, extent: m, selected: e.key === u, onReveal: d }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(uT.j, { children: (0, a.jsx)(uq, { node: s }) }),
        ],
    });
}
function uK(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, f.bG)([uf.A], () => uf.A.getTimingTrace(l, r), [l, r]),
        s = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(uP.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, a.jsx)(uR.rQ, { title: s }),
            null == i
                ? (0, a.jsx)(u_.c, {
                      children: (0, a.jsx)(j.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(uH, { trace: i }),
        ],
    });
}
let uV = { running: uD.Vf, ok: uD.mo, error: uD.Sr };
function uW(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${uD.Om} ${uV[t]}`, role: "img", "aria-label": ux[t] });
}
function uX(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => {
            (0, te.openModal)((e) => (0, a.jsx)(uK, { ...e, projectId: t, traceId: n.id }));
        }, [t, n.id]);
    return (0, a.jsxs)(b.D, {
        className: uD.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: uD.sU,
                children: [
                    (0, a.jsx)(uW, { status: (0, ug.lQ)(n) }),
                    (0, a.jsx)(j.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        className: uD._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(j.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: uS(n),
                    }),
                ],
            }),
            (0, a.jsx)(j.E, { variant: "text-xs/normal", color: "text-muted", tabularNumbers: !0, children: uC(n) }),
            null == l
                ? null
                : (0, a.jsx)(j.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function uJ(e) {
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
function uY(e) {
    let { projectId: t } = e,
        n = (0, f.yK)([uf.A], () => uf.A.getTimingTraces(t), [t]),
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
        u = i.useMemo(() => [...s].reverse(), [s]),
        o = i.useMemo(
            () =>
                (function (e) {
                    let t = e.map(uE);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: ug.BF.map((e) => ({
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
              className: uD.Ie,
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
              className: uD.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: uD.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: uD.fH,
                              children: (0, a.jsx)(um.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(uJ, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, a.jsxs)(nK.Ch, {
                      className: uD.XG,
                      children: [
                          (0, a.jsx)(uz, { stats: o }),
                          0 === u.length
                              ? (0, a.jsx)(j.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: uD.p_,
                                    "aria-label": "Traces",
                                    children: u.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            { children: (0, a.jsx)(uX, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function uQ(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function uZ(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function u0(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function u1(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function u2(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function u3(e) {
    return eu.intl.string("preview" === e ? es.default["2yLYlG"] : es.default.eiAi57);
}
let u4 = ["all", "preview", "stable", "web"];
function u6(e) {
    switch (e.reason) {
        case "local":
            return eu.intl.string(es.default.mUeKML);
        case "unconfigured":
            return eu.intl.string(es.default.bGefb5);
        case "unauthorized":
            return eu.intl.string(es.default.KLx6Bb);
        default:
            return null != e.detail
                ? eu.intl.formatToPlainString(es.default.t09Q6q, { detail: e.detail })
                : eu.intl.string(es.default["t+tG59"]);
    }
}
function u7(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : eu.intl.formatToPlainString(es.default["XO/bN4"], {
              p50: uQ(e.memory_p50_bytes ?? 0),
              p999: uQ(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let u5 = {
    db: () => es.default["7l+DFG"],
    db_preview: () => es.default.FAuffi,
    runtime: () => es.default["Gkl+ab"],
    runtime_preview: () => es.default.ynpJzv,
    bot: () => es.default["5/i0cj"],
    bot_preview: () => es.default.m2jsnw,
};
var u8 = n(911608),
    u9 = n(177427);
function oe(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: u9.KE,
        children: [
            (0, a.jsx)("div", {
                className: u9.IQ,
                children:
                    "loading" === n
                        ? (0, a.jsx)(k.y, { type: k.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, a.jsx)(j.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: eu.intl.string(es.default.ZVByPX),
                            })
                          : null != t
                            ? (0, a.jsx)(j.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: eu.intl.formatToPlainString(es.default.INVO50, { time: u1(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(A.$, { variant: "secondary", size: "sm", text: eu.intl.string(es.default.oKEgiu), onClick: l }),
        ],
    });
}
function ot(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: u9.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(j.E, { variant: "text-xs/semibold", color: "text-muted", className: u9.Gf, children: t }),
            n,
        ],
    });
}
function on(e) {
    let { label: t, value: n, hint: l, critical: r = !1 } = e;
    return (0, a.jsxs)("div", {
        className: u9.N8,
        children: [
            (0, a.jsxs)("div", {
                className: u9.x7,
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
function ol(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: u9.N8,
        children: [
            (0, a.jsxs)("div", {
                className: u9.x7,
                children: [
                    (0, a.jsx)(j.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(j.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(u8.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? u9.dh : void 0,
            }),
        ],
    });
}
function or(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(on, {
            label: eu.intl.string(es.default.SXP7pD),
            value: eu.intl.string(es.default.E5hKVi),
            hint: u6(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(on, {
            label: eu.intl.string(es.default.SXP7pD),
            value: "\u2014",
            hint: eu.intl.string(es.default.AGvoMJ),
        });
    let l = u7(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(on, { label: eu.intl.string(es.default["H/X+FI"]), value: uZ(n.cpu_ms) }),
            null != l && (0, a.jsx)(on, { label: eu.intl.string(es.default.lmFmMO), value: l }),
        ],
    });
}
function oa(e) {
    let { analytics: t } = e,
        n = eu.intl.string(es.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(ot, {
            title: n,
            children: (0, a.jsx)(j.E, { variant: "text-sm/normal", color: "text-muted", children: u6(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? u5[t] : null) ? eu.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(ot, {
        title: n,
        children:
            0 === l.length
                ? (0, a.jsx)(j.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: eu.intl.string(es.default.AGvoMJ),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, a.jsx)(
                          on,
                          {
                              label: n,
                              value: eu.intl.formatToPlainString(es.default["w/2voO"], { cpu: uZ(t.cpu_ms) }),
                              hint: u7(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var oi = n(400154);
function os(e, t) {
    return (0, a.jsx)(on, {
        label: e,
        value: eu.intl.formatToPlainString(es.default.yHJxuP, { count: u0((0, Y.aM)(t)) }),
        hint: `${u0(t.input_tokens)} in \xb7 ${u0(t.output_tokens)} out \xb7 ${u0(t.cache_read_input_tokens)} cache read`,
    });
}
function ou(e) {
    let { projectId: t, status: n, fetchState: l, onRefresh: r } = e,
        s = (0, f.bG)([uf.A], () => uf.A.getLastTurnUsage(t), [t]),
        u = (0, f.bG)([uf.A], () => uf.A.getLastCompaction(t), [t]),
        o = (0, f.bG)([uf.A], () => uf.A.getLastCompactionDecline(t), [t]),
        c = (0, f.bG)([uf.A], () => uf.A.getForceCompactionState(t), [t]),
        d = i.useCallback(() => (0, en.Lj)(t), [t]),
        m = i.useCallback(() => (0, en.Lj)(t, !0), [t]),
        h = n?.agent?.lifetime ?? null,
        g = n?.agent?.limits ?? null,
        p = n?.agent?.session ?? null,
        x = u?.promptCeiling ?? g?.context_window_tokens ?? null;
    return (0, a.jsxs)("div", {
        className: oi.Mf,
        children: [
            (0, a.jsx)(oe, { generatedAt: n?.generated_at ?? null, fetchState: l, onRefresh: r }),
            (0, a.jsx)(ot, {
                title: eu.intl.string(es.default.JghNal),
                children:
                    null == h
                        ? (0, a.jsx)(j.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: eu.intl.string(es.default.s0U5Fv),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(on, {
                                      label: eu.intl.string(es.default["9nqym2"]),
                                      value: u0((0, Y.a7)(h.cost_usd)),
                                      hint: eu.intl.formatToPlainString(es.default.NCdUIh, { count: u0(h.turns) }),
                                  }),
                                  os(eu.intl.string(es.default.xtxP0e), h.orchestrator),
                                  os(eu.intl.string(es.default["9Sj3SX"]), h.codegen),
                                  os(eu.intl.string(es.default.ANCEo3), (0, Y.wU)(h.compaction)),
                                  n?.agent?.outcomes != null &&
                                      Object.keys(n.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(on, {
                                          label: eu.intl.string(es.default.SQHm7C),
                                          value: Object.entries(n.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${u0(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(ot, {
                title: eu.intl.string(es.default.dZHPE5),
                children:
                    null == s
                        ? (0, a.jsx)(j.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: eu.intl.string(es.default.DfVjal),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  os(eu.intl.string(es.default["7X3i9d"]), s.total),
                                  (0, a.jsx)(on, {
                                      label: eu.intl.string(es.default["8OUg09"]),
                                      value: `${Math.round((s.cache_hit_rate ?? (0, Y.CA)(s.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(ot, {
                title: eu.intl.string(es.default.NbRk9a),
                children: [
                    null != u && null != x
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(ol, {
                                      label: eu.intl.string(es.default.Kw5wiQ),
                                      used: u.tokensAfter,
                                      max: x,
                                      formatValue: u0,
                                  }),
                                  (0, a.jsx)(on, {
                                      label: eu.intl.string(es.default.mRbSns),
                                      value: `${u0(u.tokensBefore)} \u{2192} ${u0(u.tokensAfter)}`,
                                      hint: eu.intl.formatToPlainString(es.default.Vq3skS, {
                                          count: u0(u.retainedMessages),
                                          time: u1(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(j.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != x
                                      ? eu.intl.formatToPlainString(es.default.GMLCNv, { ceiling: u0(x) })
                                      : eu.intl.string(es.default.s0U5Fv),
                          }),
                    null != o &&
                        (0, a.jsx)(on, {
                            label: eu.intl.string(es.default["4BX5KK"]),
                            value: `${u0(o.projected)} / ${u0(o.threshold)}`,
                            critical: !0,
                            hint: eu.intl.formatToPlainString(es.default["6ngCax"], { time: u1(o.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: oi.Lj,
                        children: [
                            (0, a.jsx)(A.$, {
                                variant: "secondary",
                                size: "sm",
                                text: eu.intl.string(es.default["1EiJeb"]),
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
                                    if ("idle" === e) return eu.intl.string(es.default.wox6Ev);
                                    if ("pending" === e) return eu.intl.string(es.default.OcPHQ1);
                                    let t = u1(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return eu.intl.formatToPlainString(es.default.BhRjZZ, { time: t });
                                    let n =
                                        "declined" === e.outcome
                                            ? es.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? es.default.YZb4hK
                                              : es.default.ZoUSVK;
                                    return eu.intl.formatToPlainString(n, {
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
                                            text: eu.intl.string(es.default.ZxG2AI),
                                            onClick: m,
                                        }),
                                        (0, a.jsx)(j.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: eu.intl.string(es.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (null != p || n?.analytics != null) &&
                (0, a.jsxs)(ot, {
                    title: eu.intl.string(es.default.EsSzCS),
                    children: [
                        null != p &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(on, {
                                        label: eu.intl.string(es.default.CLXHAs),
                                        value: u1(p.instance_since),
                                        hint: eu.intl.string(es.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(on, {
                                        label: eu.intl.string(es.default["8V8e1Z"]),
                                        value: u0(p.sockets),
                                    }),
                                    (0, a.jsx)(on, {
                                        label: eu.intl.string(es.default["4pBzYW"]),
                                        value: p.turn_inflight
                                            ? eu.intl.string(es.default.Wv025I)
                                            : eu.intl.string(es.default["7/lsFY"]),
                                    }),
                                    p.queued_messages > 0 &&
                                        (0, a.jsx)(on, {
                                            label: eu.intl.string(es.default["3oUYnv"]),
                                            value: u0(p.queued_messages),
                                        }),
                                ],
                            }),
                        n?.analytics != null && (0, a.jsx)(or, { analytics: n.analytics }),
                    ],
                }),
            null != g &&
                (0, a.jsxs)(ot, {
                    title: eu.intl.string(es.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(on, {
                            label: eu.intl.string(es.default.IlDBN3),
                            value: u0(g.max_subagent_iterations),
                        }),
                        (0, a.jsx)(on, {
                            label: eu.intl.string(es.default["ZdzKR+"]),
                            value: eu.intl.formatToPlainString(es.default.yHJxuP, {
                                count: u0(g.context_window_tokens),
                            }),
                        }),
                        (0, a.jsx)(on, {
                            label: eu.intl.string(es.default.cIhN2W),
                            value: eu.intl.formatToPlainString(es.default.yHJxuP, {
                                count: u0(g.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(on, {
                            label: eu.intl.string(es.default["+fOn/q"]),
                            value: u0(g.max_user_message_chars),
                        }),
                        (0, a.jsx)(on, { label: eu.intl.string(es.default.kIHga0), value: u0(g.max_build_attempts) }),
                        (0, a.jsx)(on, { label: eu.intl.string(es.default.Iw03yW), value: u0(g.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var oo = n(237528),
    oc = n(629584),
    od = n(531893);
function of(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: od.ut,
              children: (0, a.jsx)(j.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: eu.intl.string(es.default.h1SE6R),
              }),
          });
}
function om(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: od.qf,
              children: [
                  (0, a.jsx)(j.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: eu.intl.string(es.default.h1SE6R),
                  }),
                  (0, a.jsx)(j.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: eu.intl.string(es.default["8SErdg"]),
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: od.qf,
              children: [
                  (0, a.jsx)(j.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(j.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function oh(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: od.ps,
              children: (0, a.jsx)(j.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: eu.intl.string(es.default.V7Ri8H),
              }),
          })
        : null;
}
var og = n(109079);
let op = i.memo(function (e) {
    var t;
    let { entry: n, showSource: l } = e,
        [r, s] = i.useState(!1),
        u = i.useId(),
        o = i.useMemo(
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
        className: og.vK,
        children: [
            (0, a.jsx)(j.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: og.Mt,
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
                className: og.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: og.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: og.Cq, children: (0, a.jsx)(oo.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: og.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(oo.v, {
                                text: eu.intl.string(es.default.TrC9c8),
                                variant: "redLight",
                            }),
                        }),
                    null != o
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  "" !== o.prefix &&
                                      (0, a.jsxs)(j.E, {
                                          tag: "span",
                                          variant: "text-xs/normal",
                                          color: c,
                                          selectable: !0,
                                          children: [o.prefix, " "],
                                      }),
                                  (0, a.jsxs)(b.D, {
                                      className: og.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": u,
                                      "aria-label": eu.intl.string(es.default["9CTzyV"]),
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
                                                  o.marker,
                                                  " ",
                                                  eu.intl.formatToPlainString(
                                                      "[\u2026]" === o.marker
                                                          ? es.default.kUhyUv
                                                          : es.default["N+fphl"],
                                                      { count: o.size },
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
                                          className: og.dF,
                                          selectable: !0,
                                          id: u,
                                          children: o.pretty,
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
function ox(e) {
    let { projectId: t } = e,
        n = (0, f.bG)([eN.Ay], () => eN.Ay.getLogs(t), [t]),
        l = (0, f.bG)([eN.Ay], () => eN.Ay.getHistoryState(t, "logs")),
        [r, s] = i.useState("all"),
        [u, o] = i.useState(""),
        c = i.useMemo(() => {
            let e = u.trim().toLowerCase();
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
        }, [n, r, u]),
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
                u4.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return u3(e);
                            case "web":
                                return eu.intl.string(es.default.IVzfVV);
                            default:
                                return eu.intl.string(es.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, a.jsxs)("div", {
        className: og.$F,
        children: [
            (0, a.jsxs)("div", {
                className: og.y4,
                children: [
                    (0, a.jsx)(oc.I, {
                        look: "pill",
                        "aria-label": eu.intl.string(es.default.MhvyUU),
                        options: g,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: og.KT,
                        children: (0, a.jsx)(um.I, {
                            query: u,
                            onChange: o,
                            onClear: () => o(""),
                            size: "sm",
                            placeholder: eu.intl.string(es.default["m2+37Y"]),
                            "aria-label": eu.intl.string(es.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, a.jsx)(of, { state: l }),
            (0, a.jsxs)(nK.Ch, {
                ref: d,
                onScroll: h,
                overflow: "auto",
                className: og.sx,
                children: [
                    (0, a.jsx)(oh, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(om, {
                              state: l,
                              emptyTitle: eu.intl.string(es.default.S7qlPG),
                              emptyBody: eu.intl.string(es.default.nD0S9z),
                          })
                        : 0 === c.length
                          ? (0, a.jsx)(j.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: eu.intl.string(es.default["4SIdrX"]),
                            })
                          : c.map((e) => (0, a.jsx)(op, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function ov(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(ot, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, a.jsx)(j.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: eu.intl.string(es.default.umcjif),
                      }),
        })
    );
}
function oj(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(on, {
                      label: eu.intl.formatToPlainString(es.default["01ZMS4"], { env: u3(n) }),
                      value: ((t = l.connected), eu.intl.string(t ? es.default.Wv025I : es.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(on, {
                      label: eu.intl.string(es.default["z1dh+F"]),
                      value: u0(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${u1(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(on, { label: eu.intl.string(es.default.Iz5GnJ), value: u0(l.guild_count) }),
                  (0, a.jsx)(on, {
                      label: eu.intl.string(es.default["7UqtNv"]),
                      value: u0(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? eu.intl.formatToPlainString(es.default.MasSly, {
                                    code: l.last_close_code,
                                    time: u1(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(on, {
                          label: eu.intl.string(es.default["x3+JXJ"]),
                          value: u0(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(on, { label: u3(n), value: eu.intl.string(es.default.lTHQss) });
}
function ob(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(on, {
        label: u3(t),
        value: eu.intl.formatToPlainString(es.default["Xq+wHT"], {
            requests: u0(n.requests),
            failures: u0(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? eu.intl.formatToPlainString(es.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: u1(n.last_failure.at),
                  })
                : eu.intl.formatToPlainString(es.default["7KlGT6"], { time: u1(n.since) }),
    });
}
function oy(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(on, {
                label: eu.intl.formatToPlainString(es.default["92gVTm"], { env: u3(t) }),
                value: u0(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    on,
                    {
                        label: eu.intl.formatToPlainString(es.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? eu.intl.formatToPlainString(es.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? eu.intl.formatToPlainString(es.default.wxAWNv, { time: u1(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function ow(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(on, {
        label: u3(t),
        value: eu.intl.formatToPlainString(es.default.suAOj9, { calls: u0(n.calls), errors: u0(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function ok(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(ot, {
            title: t,
            children: (0, a.jsx)(j.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: eu.intl.string(es.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(ot, {
        title: t,
        children: [
            (0, a.jsx)(on, {
                label: eu.intl.string(es.default.xtD4Zp),
                value: u0(n.requests),
                hint: eu.intl.formatToPlainString(es.default["7KlGT6"], { time: u1(n.since) }),
            }),
            (0, a.jsx)(on, { label: eu.intl.string(es.default.gfRhR3), value: u0(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(ol, {
                              label: eu.intl.string(es.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: uZ,
                          }),
                          (0, a.jsx)(on, {
                              label: eu.intl.string(es.default.mSKImM),
                              value: uZ(r),
                              hint: eu.intl.formatToPlainString(es.default.JqMU05, {
                                  total: uZ(n.cpu_ms_total),
                                  wall: uZ(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(on, {
                      label: eu.intl.string(es.default.LEJ5r3),
                      value: eu.intl.string(es.default["2Ekb2b"]),
                      hint: eu.intl.string(es.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(on, { label: eu.intl.string(es.default.xvmL1D), value: uZ(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(on, {
                    label: eu.intl.string(es.default["4sQYwH"]),
                    value: u0(n.exceeded_cpu),
                    critical: !0,
                }),
            (0, a.jsx)(on, {
                label: eu.intl.string(es.default.bQenOy),
                value: u0(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: eu.intl.formatToPlainString(es.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(on, { label: eu.intl.string(es.default.xgpn4Y), value: u2(n.build) }),
        ],
    });
}
function oA(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        u = r
            ? [{ key: "shared", label: eu.intl.string(es.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: eu.intl.string(es.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: eu.intl.string(es.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(ot, {
        title: eu.intl.string(es.default.mRt7MW),
        children: u.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(on, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(on, {
                                  label: eu.intl.formatToPlainString(es.default.u7kJJ4, { env: n }),
                                  value: uQ(l.r2_bytes),
                                  hint: eu.intl.formatToPlainString(
                                      l.r2_truncated ? es.default.lH0oQw : es.default.m9h02S,
                                      { count: u0(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(ol, {
                                      label: eu.intl.formatToPlainString(es.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: uQ,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function oN(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: oi.Mf,
        children: [
            (0, a.jsx)(oe, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(ok, {
                            title: eu.intl.string(es.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(ok, {
                            title: eu.intl.string(es.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(oA, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(ov, {
                                title: eu.intl.string(es.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(oj, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(ov, {
                                title: eu.intl.string(es.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(ob, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(ov, {
                                title: eu.intl.string(es.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(oy, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(ov, {
                                title: eu.intl.string(es.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(ow, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(oa, { analytics: t.analytics }),
                        (0, a.jsxs)(ot, {
                            title: eu.intl.string(es.default.fQMpFp),
                            children: [
                                (0, a.jsx)(on, {
                                    label: eu.intl.string(es.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? u2(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(on, {
                                    label: eu.intl.string(es.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? u2(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var oS = n(592465);
function oC(e) {
    let { projectId: t, onClose: n } = e,
        [l, r] = i.useState("logs"),
        s = (0, f.bG)([eH.A], () => eH.A.isDeveloper) || !1,
        u = (0, f.bG)([uf.A], () => uf.A.getStatus(t), [t]),
        o = (0, f.bG)([uf.A], () => uf.A.getFetchState(t), [t]);
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
                        status: uf.A.getStatus(t),
                        last_turn_usage: uf.A.getLastTurnUsage(t),
                        last_compaction: uf.A.getLastCompaction(t),
                        last_compaction_decline: uf.A.getLastCompactionDecline(t),
                        timing_traces: uf.A.getTimingTraces(t),
                        logs: eN.Ay.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, v.P0)({ text: eu.intl.string(es.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        m = eu.intl.string(es.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: oS.nd,
        "aria-label": m,
        children: [
            (0, a.jsxs)(nH.Ay, {
                "aria-label": m,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(nH.Ay.Icon, {
                            icon: sg.CopyIcon,
                            tooltip: eu.intl.string(es.default.TkHqy2),
                            onClick: d,
                        }),
                        (0, a.jsx)(nH.Ay.Icon, { icon: P.P, tooltip: eu.intl.string(eu.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(nH.Ay.ChannelIcon, { icon: S.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(nH.Ay.Title, { children: m }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: oS.rf,
                children: [
                    (0, a.jsxs)(ud.V, {
                        selectedItem: l,
                        type: "top",
                        onItemSelect: (e) => r(e),
                        "aria-label": eu.intl.string(es.default.RvvWIh),
                        className: oS.vR,
                        children: [
                            (0, a.jsx)(ud.V.Item, { id: "logs", children: eu.intl.string(es.default["+VRYCm"]) }),
                            (0, a.jsx)(ud.V.Item, { id: "worker", children: eu.intl.string(es.default["50D0FZ"]) }),
                            (0, a.jsx)(ud.V.Item, { id: "agent", children: eu.intl.string(es.default.UkbTK1) }),
                            s ? (0, a.jsx)(ud.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === l
                        ? (0, a.jsx)(ox, { projectId: t })
                        : "worker" === l
                          ? (0, a.jsx)(oN, { status: u, fetchState: o, onRefresh: c })
                          : "trace" === l && s
                            ? (0, a.jsx)(uY, { projectId: t })
                            : (0, a.jsx)(ou, { projectId: t, status: u, fetchState: o, onRefresh: c }),
                ],
            }),
        ],
    });
}
var oE = n(333007),
    oI = n(365912),
    oM = n(775121),
    o_ = n(873715);
function oT(e) {
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
let oP = Object.freeze({ x: -1, y: -1 });
function oR(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = oT(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var oL = n(470779);
function oD(e) {
    let {
            projectId: t,
            at: n,
            bounds: l,
            kind: r,
            value: s,
            onChange: o,
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
        } = iM({ projectId: t, surface: "design", onUploadFile: h }),
        w = i.useRef(null),
        k = (f || g.length > 0) && j && !m,
        A = i.useCallback(() => {
            if (!k) return;
            let e = b();
            c(e.length > 0 ? e : void 0);
        }, [k, b, c]),
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
        className: u()(oL.M0, { [oL.ho]: N && !m, [oL.ET]: m }),
        style: { left: P, top: R },
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
                    (p(Array.from(e.target.files ?? [])), (e.target.value = ""));
                },
            }),
            (0, a.jsx)(y.m, {
                position: "bottom",
                text: eu.intl.string(es.default.lgvqSB),
                ariaHidden: !0,
                children: (0, a.jsx)("button", {
                    type: "button",
                    className: oL.tY,
                    onClick: () => w.current?.click(),
                    "aria-label": eu.intl.string(es.default.lgvqSB),
                    children: (0, a.jsx)(et.H, { size: "custom", color: "currentColor", className: oL.WW }),
                }),
            }),
            (0, a.jsx)(lu.y, {
                autoFocus: !0,
                rows: 1,
                className: oL.hF,
                value: s,
                placeholder: "" === r ? eu.intl.string(es.default.MPPV1Q) : `Edit ${r}`,
                "aria-label": eu.intl.string(es.default.KCYqWL),
                onChange: (e) => o(e.target.value),
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
                      className: oL.ZO,
                      children: g.map((e) => (0, a.jsx)(i_, { draft: e, onRemove: v }, e.localId)),
                  })
                : null,
        ],
    });
}
var o$ = n(192888);
function oz(e, t) {
    return (0, o$.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(oR, () => ({ status: "failed" }));
}
var oF = n(108308);
let oO = { x: 25, y: 21 };
function oG(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function oU(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function oq(e, t, n, l) {
    let r = oU(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function oB(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function oH(e) {
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
function oK(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        u = null != n && n === l ? t : null,
        { active: o, annotations: c } = e9(u),
        d = (0, tx.Zv)(u),
        m = (0, te.useHasAnyModalOpen)(),
        h = (0, f.bG)([tX.default], () => tX.default.getCurrentUser()),
        g = h?.id ?? null,
        [p, x] = i.useState(null),
        [v, b] = i.useState(null),
        [y, w] = i.useState(!1),
        [k, N] = i.useState(!1),
        [S, C] = i.useState(null),
        [E, I] = i.useState(!1),
        M = i.useRef(null),
        T = i.useRef(null),
        P = i.useRef(null),
        [R, L] = i.useState(null),
        [D, $] = i.useState(!1),
        [z, F] = i.useState(null),
        [O, G] = i.useState(null),
        U = i.useRef(!1),
        [q, B] = i.useState(!1),
        [H, K] = i.useState(null),
        V = o && !d && !m;
    null == z || (V && z.projectId === u) || F(null);
    let W = z?.projectId ?? null;
    (i.useEffect(() => {
        if (null != W) return () => lX(W, "design");
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
                x((t) => (oG(t, e) ? t : e));
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
            if (!V || null == u) return;
            let e = !0,
                t = r();
            if (null == t) return void N(!0);
            (w(!0), N(!1));
            let n = `design-feedback-${crypto.randomUUID()}`;
            return (
                (0, o_.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                    (t) => {
                        if (!e) return;
                        w(!1);
                        let n = "completed" === t.status ? oH(t.response) : null;
                        null == n ? N(!0) : (b(n), e7(u, { url: n.url, title: n.title, viewport: n.viewport }));
                    },
                    () => {
                        e && (w(!1), N(!0));
                    },
                ),
                () => {
                    e = !1;
                }
            );
        }, [V, r, u]));
    let X = i.useRef(null);
    (i.useEffect(() => {
        if (!V || null == p || null == u) return;
        if (null == v) {
            X.current = p;
            return;
        }
        if (oG(X.current, p)) return;
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
                    (0, o_.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !Z.current) return;
                        let l = oH(e.response);
                        null != l && (b(l), e7(u, { url: l.url, title: l.title, viewport: l.viewport }));
                        let r = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let a = oT(e.element);
                            null != a && r.set(l.id, a);
                        }),
                            (n = e3(u)).active &&
                                0 !== r.size &&
                                e4(u, {
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
    }, [V, p, v, c, u, r]),
        i.useEffect(() => {
            if (!V)
                return () => {
                    (C(null), F(null), K(null), b(null));
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
                    oz(n, t).then((t) => {
                        if (((Q.current = !1), Z.current)) {
                            if ("picked" !== t.status || oQ(t.target, ei.current.rect, ei.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? C(null)
                                    : "unsupported" === t.status && $(!0);
                            else {
                                let e = eW(t.target);
                                (L((t) => (oY(t, e) ? t : e)),
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
            if (null == z) return;
            let e = !U.current;
            (G({ at: z.at, label: z.label, draft: z.draft, instant: e }), B(e), F(null));
        }, [z]);
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
            let e = setTimeout(() => G(null), oX);
            return () => clearTimeout(e);
        }, [O]));
    let el = null == v || null == p || v.viewport.width < 1 ? 1 : p.width / v.viewport.width,
        er = null != v || k,
        ea = i.useMemo(() => v?.elements ?? [], [v]),
        ei = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        ei.current = { rect: p, scale: el };
    }, [p, el]);
    let eo = i.useCallback(
            (e, t, n) => {
                null != u &&
                    (lX(u, "design"),
                    K(null),
                    (U.current = !1),
                    F({ projectId: u, target: e, anchor: t, draft: "", at: n, label: eW(e) }));
            },
            [u],
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
                if (((P.current = { x: e.clientX, y: e.clientY }), ed(), I(!0), null != z)) {
                    (Math.abs(e.clientX - z.at.x) > oJ || Math.abs(e.clientY - z.at.y) > oJ) && (U.current = !0);
                    return;
                }
                if (!er) return void C(null);
                let t = ec(e, p);
                if (D) {
                    let e = (function (e, t, n) {
                            let l = null,
                                r = 1 / 0;
                            for (let a of e) {
                                let { x: e, y: i, width: s, height: u } = a.rect;
                                if (s < 1 || u < 1 || t < e || n < i || t > e + s || n > i + u) continue;
                                let o = s * u;
                                o < r && ((l = a), (r = o));
                            }
                            return l;
                        })(ea, t.x, t.y),
                        n = null != e && oQ(e, p, el) ? null : e;
                    if (null != n) {
                        let e = eW(n);
                        L((t) => (oY(t, e) ? t : e));
                    }
                    C((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = Y.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((Y.current = n), (J.current = n), ee());
            },
            [p, el, er, ec, D, ea, z, H, ed, ee],
        ),
        em = null == H ? null : c.find((e) => e.id === H.id),
        eh = V && (E || z?.target.marker != null || em?.target.marker != null);
    i.useEffect(() => {
        if (eh)
            return () => {
                let e = r();
                null != e && oz(e, oP);
            };
    }, [eh, r]);
    let eg = i.useCallback(() => {
        (I(!1), C(null), (Y.current = null), (J.current = null));
    }, []);
    i.useEffect(() => {
        if (!V || !E || !er || D || null != z || null != H) return;
        let e = P.current,
            { rect: t, scale: n } = ei.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((Y.current = l), (J.current = l), ee());
    }, [V, E, er, D, z, H, ee]);
    let ep = i.useCallback(
            (e) => {
                if (null != z || null != H) {
                    (et(), K(null));
                    return;
                }
                if (null == S || null == p) return;
                let t = ec(e, p);
                eo(
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
            [S, p, ec, z, H, eo, et],
        ),
        ex = i.useCallback(() => {
            null != u && (C(null), e6(u));
        }, [u]),
        ev = i.useCallback(() => {
            null != u &&
                (null != z
                    ? et()
                    : H?.confirmingRemove === !0
                      ? K({ ...H, confirmingRemove: !1 })
                      : null != H
                        ? K(null)
                        : ex());
        }, [u, z, H, et, ex]),
        ej = i.useRef(ev),
        eb = i.useRef(ex);
    i.useLayoutEffect(() => {
        ((ej.current = ev), (eb.current = ex));
    });
    let ey = i.useRef(null);
    i.useEffect(() => {
        if (V)
            return (
                oM.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        oM.A.enable());
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
                        return ((0, oI.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) &&
                eb.current();
        }
    }, [V, s]);
    let ew = i.useCallback(
            (e) => {
                if (null == u) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), ev());
                    return;
                }
                if (null != z || null != H || 0 === ea.length) return;
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
                    eo(S, eK, { x: (p?.left ?? 0) + S.rect.x * el, y: (p?.top ?? 0) + S.rect.y * el }));
            },
            [u, z, H, ea, S, eo, ev, p, el],
        ),
        ek = i.useCallback(
            (e) => {
                null == u ||
                    null == z ||
                    ((eV(z.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, en.dv)(
                            u,
                            (function (e, t) {
                                let { kind: n, name: l } = eW(e),
                                    r = [n, l].filter((e) => "" !== e).join(": ");
                                return `${eY}${r}${eQ}${eJ(e)}
${t.trim()}`;
                            })(z.target, z.draft),
                            e,
                        ),
                        et(),
                        C(null)));
            },
            [u, z, et],
        ),
        eA = i.useCallback((e) => (null == u ? Promise.reject(Error("no project")) : (0, en.vX)(u, e)), [u]),
        eN = i.useCallback(() => {
            if (null != u && null != H && null != g && eV(H.draft)) {
                var e, t;
                let n, l;
                ((e = H.id),
                    (t = H.draft.trim()),
                    null != (l = (n = e3(u)).annotations.find((t) => t.id === e)) &&
                        e5(l, g) &&
                        e4(u, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    K({ ...H, editing: !1 }));
            }
        }, [u, H, g]),
        eS = i.useCallback(() => {
            if (null != u && null != H && null != g) {
                var e;
                let t, n;
                ((e = H.id),
                    null != (n = (t = e3(u)).annotations.find((t) => t.id === e)) &&
                        e5(n, g) &&
                        e4(u, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    K(null));
            }
        }, [u, H, g]),
        eC = o
            ? y
                ? eu.intl.string(es.default["Eb/YV9"])
                : k
                  ? eu.intl.string(es.default.FD30bh)
                  : eu.intl.formatToPlainString(es.default.dTSqLF, { count: c.length })
            : "",
        eE = V && null != p,
        eI = E && null == H,
        eM = z?.target ?? em?.target ?? null,
        e_ = z ?? O,
        eT = z ?? (O?.instant === !0 ? null : O),
        eP =
            null != em && null != p
                ? (function (e, t) {
                      let { left: n, top: l } = oB(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(oq(em.target, em.anchor, p, el), p)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (em?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = em;
            oz(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [em, r]),
        (0, oE.createPortal)(
            (0, a.jsxs)("div", {
                ref: ey,
                className: oF.Li,
                children: [
                    (0, a.jsx)("div", {
                        className: oF.y4,
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-design-announcer",
                        children: eC,
                    }),
                    eE
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)("div", {
                                      className: oF.MT,
                                      style: { left: p.left, top: p.top, width: p.width, height: p.height },
                                      "data-plain-cursor": eI ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": eu.intl.string(es.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: ef,
                                      onMouseLeave: eg,
                                      onClick: ep,
                                      onKeyDown: ew,
                                  }),
                                  null != S && null == S.marker && null == z && null == H
                                      ? (0, a.jsx)(oZ, { box: oU(S, p, el) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: M,
                                      className: oF.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: oF.xz,
                                          "data-shown": null != S && null == H && null == z ? "" : void 0,
                                          "data-instant": q ? "" : void 0,
                                          children: (0, a.jsxs)(j.E, {
                                              variant: "text-xs/medium",
                                              className: oF.Ux,
                                              children: [
                                                  null == R
                                                      ? null
                                                      : (0, a.jsx)("span", { className: oF.Tl, children: R.kind }),
                                                  null == R || "" === R.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: oF.kh,
                                                            children: [" ", R.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: T,
                                      className: oF.Y,
                                      children: eI ? (0, a.jsx)("div", { className: oF.u }) : null,
                                  }),
                                  null == eT
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: oF.aZ,
                                            style: {
                                                transform: `translate3d(${eT.at.x + 20}px, ${eT.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: oF.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == z ? "" : void 0,
                                                children: (0, a.jsxs)(j.E, {
                                                    variant: "text-xs/medium",
                                                    className: oF.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: oF.Tl,
                                                            children: eT.label.kind,
                                                        }),
                                                        "" === eT.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: oF.kh,
                                                                  children: [" ", eT.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eM && null == eM.marker
                                      ? (0, a.jsx)("div", { className: oF.D0, style: oU(eM, p, el), "aria-hidden": !0 })
                                      : null,
                                  c.map((e, t) => {
                                      let n = oq(e.target, e.anchor, p, el),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: oF.xL,
                                              style: { ...oB(n, p), width: 24, height: 24 },
                                              "aria-label": eu.intl.formatToPlainString(es.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: eX(e.target),
                                              }),
                                              "aria-expanded": H?.id === e.id,
                                              "data-testid": "conjure-design-marker",
                                              onMouseEnter: () => {
                                                  null == z && K(l);
                                              },
                                              onFocus: () => {
                                                  null == z && K(l);
                                              },
                                              onClick: (e) => {
                                                  (e.stopPropagation(), et(), K(l));
                                              },
                                              children: (0, a.jsx)(oV, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == e_ || null == u
                                      ? null
                                      : (0, a.jsx)(oD, {
                                            projectId: u,
                                            at: { x: e_.at.x + 20, y: e_.at.y + 20 },
                                            bounds: p,
                                            kind: e_.label.kind,
                                            value: e_.draft,
                                            canSubmit: null != z && eV(e_.draft),
                                            onChange: (e) => {
                                                null != z && F({ ...z, draft: e });
                                            },
                                            onSubmit: ek,
                                            onDismiss: et,
                                            onUploadFile: eA,
                                            closing: null == z,
                                        }),
                                  null != em && null != H && null != eP
                                      ? (0, a.jsxs)(oW, {
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
                                                          label: eu.intl.string(es.default.KCYqWL),
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
                                                          className: oF.aC,
                                                          children: em.comment,
                                                      }),
                                                e5(em, g)
                                                    ? (0, a.jsx)("div", {
                                                          className: oF.eB,
                                                          children: H.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(j.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: oF.nv,
                                                                            children: eu.intl.string(es.default.wOHvts),
                                                                        }),
                                                                        (0, a.jsx)(A.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: eu.intl.string(es.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                K({ ...H, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, a.jsx)(A.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: eu.intl.string(es.default.friIzR),
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
                                                                            text: eu.intl.string(es.default.friIzR),
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
                                                                                  text: eu.intl.string(
                                                                                      es.default.iicRP9,
                                                                                  ),
                                                                                  onClick: eN,
                                                                              })
                                                                            : (0, a.jsx)(A.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: eu.intl.string(
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
function oV(e) {
    let { authorId: t } = e,
        n = (0, f.bG)([tX.default], () => tX.default.getUser(t), [t]);
    return (0, a.jsx)(af.eu, {
        src: null == n ? null : ag.Ay.getUserAvatarURL(n),
        size: am._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function oW(e) {
    let t,
        n,
        l,
        r,
        s,
        u,
        { point: o, frame: c, authorId: d, title: f, testId: m, onDismiss: h, onMouseLeave: g, children: p } = e,
        x = i.useRef(null),
        v = i.useRef(null),
        [b, y] = i.useState(oO);
    i.useLayoutEffect(() => {
        let e = x.current?.getBoundingClientRect(),
            t = v.current?.getBoundingClientRect();
        if (null == e || null == t || e.width < 1 || t.width < 1) return;
        let n = { x: t.left + t.width / 2 - e.left, y: t.top + t.height / 2 - e.top };
        y((e) => (0.5 > Math.abs(e.x - n.x) && 0.5 > Math.abs(e.y - n.y) ? e : n));
    }, []);
    let {
            left: w,
            top: k,
            originX: A,
            originY: N,
        } = ((n = Math.max((t = c.left + 8), c.left + c.width - 300 - 8)),
        (r = Math.max((l = c.top + 8), c.top + c.height - 160 - 8)),
        (s = Math.min(Math.max(o.x - b.x, t), n)),
        { left: s, top: (u = Math.min(Math.max(o.y - b.y, l), r)), originX: o.x - s, originY: o.y - u }),
        S = { left: w, top: k, "--custom-conjure-card-origin-x": `${A}px`, "--custom-conjure-card-origin-y": `${N}px` };
    return (0, a.jsxs)("div", {
        ref: x,
        className: oF.Nr,
        style: S,
        "data-testid": m,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, a.jsxs)("div", {
                className: oF.MY,
                children: [
                    (0, a.jsx)("span", { ref: v, className: oF.ip, children: (0, a.jsx)(oV, { authorId: d }) }),
                    (0, a.jsx)(j.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: oF.Qc,
                        children: f,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: oF.zI, children: p }),
        ],
    });
}
let oX = 300,
    oJ = 2;
function oY(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function oQ(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function oZ(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: oF.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var o0 = n(659723),
    o1 = n(697744),
    o2 = n(130324);
function o3(e) {
    let t = (0, o1.c)(),
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
    let r = (0, iB.A)();
    return (
        i.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function o4(e) {
    let { className: t } = e,
        { Component: n, events: l } = o3(3e4);
    return (0, a.jsxs)("div", {
        className: t,
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(j.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: o2.o,
                children: eu.intl.string(es.default.AyiQEp),
            }),
        ],
    });
}
var o6 = n(251363),
    o7 = n(944142),
    o5 = n(532247),
    o8 = n(501628);
function o9(e) {
    let { progress: t } = e,
        { Component: n } = o3(1500),
        l = eB.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(j.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
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
                ? (0, a.jsx)(j.E, { variant: "text-xs/normal", color: "text-overlay-light", children: t.stepLabel })
                : null,
        ],
    });
}
function ce(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        u = (0, f.bG)([o7.A], () => (s ? o7.A.getLiveReload(t) : null), [s, t]),
        o = (0, U.A)(n, r)?.id ?? null,
        c = u?.phase ?? null,
        d = (function (e, t) {
            let n = (0, o5.dv)(e),
                [l, r] = i.useState(null),
                [a, s] = i.useState(n);
            a !== n && (s(n), r(null == n ? (0, o5.QP)(e, a) : null));
            let u = (0, f.bG)(
                    [tT.A],
                    () => {
                        let e = tT.A.getFrame(t);
                        return (0, tO.x1)(e) && e.data.proxyTicketRefreshing;
                    },
                    [t],
                ),
                o = i.useRef(u),
                c = i.useRef(!1);
            return (
                i.useEffect(() => {
                    ((o.current = u), u && (c.current = !0));
                }, [u]),
                i.useEffect(() => {
                    if (null == l) return;
                    function e() {
                        return r(null);
                    }
                    function n(n) {
                        null != n.target && n.target === (0, o6.o)(null, t) && e();
                    }
                    ((c.current = o.current), document.addEventListener("load", n, !0));
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
        })(c, o),
        m = (0, o5.h_)(c, u?.step ?? null, d);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(w.A, { tag: "div", role: "status", "aria-live": "polite", children: m?.title ?? "" }),
            null != m
                ? (0, a.jsx)("div", {
                      className: o8.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(o9, { progress: m }),
                  })
                : null,
        ],
    });
}
var ct = n(343030),
    cn = n(317608),
    cl = n(338941),
    cr = n(964404);
let ca = { width: 1 / 0, height: 1 / 0 };
function ci(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ca;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var cs = n(702083);
function cu(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, f.cf)([tg.A], () => ({
            mobile: tg.A.isBuilderPreviewMobile(),
            landscape: tg.A.isBuilderPreviewLandscape(),
        })),
        r = i.useRef(null),
        [s, o] = i.useState(null);
    i.useLayoutEffect(() => {
        let e = r.current;
        if (null == e) return;
        function t() {
            if (null == e) return;
            let t = { width: e.clientWidth, height: e.clientHeight };
            o((e) => (e?.width === t.width && e.height === t.height ? e : t));
        }
        t();
        let n = new ResizeObserver(t);
        return (n.observe(e), () => n.disconnect());
    }, []);
    let c = null != s && s.width > 0 ? s : null,
        d = n ? ci(l, c ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: u()(cs.dw, { [cs.PQ]: null != d }),
        children: (0, a.jsx)("div", { className: u()(cs.R9, { [cs.Vg]: null != d }), style: d ?? void 0, children: t }),
    });
}
var co = n(347927);
function cc(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: u()(co.Bf, l && co.Qx),
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
var cd = n(957272);
function cf(e) {
    let { applicationId: t, surface: n, frameOverlay: l } = e,
        { frame: r, state: s } = (0, cl.A)({ applicationId: t, surface: n }),
        u = (0, tO.VA)(t, n);
    if (
        (i.useEffect(
            () => (
                !(function (e) {
                    let t = tT.A.getFrame(e);
                    if (null == t || tP.A.getWindowOpen(ex.MLl.ACTIVITY_POPOUT)) return;
                    let n = tT.A.getMainFrame()?.id === e;
                    t.intent === tO.sV.MAIN
                        ? (n || G.A.promoteFrame(e), G.A.resetFrameLayoutModes(e))
                        : n && G.A.clearMainFrameSlot();
                })(u),
                () => {
                    let e;
                    null != (e = tT.A.getFrame(u)) &&
                        ((0, tO.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        cr.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === tO.sV.INLINE && G.A.promoteFrame(u),
                              G.A.updateFrameLayoutMode({ frameId: u, layoutMode: tO.y0.PIP }))
                            : e.intent === tO.sV.MAIN && G.A.demoteMainFrame(u));
                }
            ),
            [u],
        ),
        s === cl.n.Launched)
    ) {
        let e = (0, a.jsx)(cn.A, { frameId: r.id, level: ct.A.WithinAppContent, className: cd.Z7, overlay: l });
        return (0, tb.Q5)(n) ? (0, a.jsx)(cu, { children: e }) : e;
    }
    return (0, a.jsx)(cm, { state: s });
}
function cm(e) {
    let { state: t } = e;
    switch (t) {
        case cl.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: cd.qs,
                children: (0, a.jsx)(cc, {
                    title: eu.intl.string(es.default["9kpdo7"]),
                    body: eu.intl.string(es.default.iIA8Nj),
                }),
            });
        case cl.n.NoApplication:
            return (0, a.jsx)(o4, { className: cd.qs });
        case cl.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: cd.qs,
                children: (0, a.jsx)(cc, {
                    title: eu.intl.string(es.default["7k4GyN"]),
                    body: eu.intl.string(es.default.zdIy3R),
                }),
            });
        case cl.n.Error:
            return (0, a.jsxs)("div", {
                className: cd.qs,
                children: [
                    (0, a.jsx)(E.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: eu.intl.string(es.default.lTPbnG),
                    }),
                    (0, a.jsx)(j.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: cd.tj,
                        children: eu.intl.string(es.default.e6GiAZ),
                    }),
                ],
            });
        case cl.n.AwaitingLaunch:
        case cl.n.Loading:
            return (0, a.jsx)("div", { className: cd.qs, children: (0, a.jsx)(k.y, {}) });
    }
}
var ch = n(308528),
    cg = n(334738),
    cp = n(688438),
    cx = n(355622),
    cv = n(365971),
    cj = n(703462);
function cb(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: cj.f,
        children: [
            (0, a.jsx)(rK.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(j.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function cy() {
    return (0, a.jsx)("div", { className: cj.f, children: (0, a.jsx)(k.y, {}) });
}
function cw(e) {
    let t,
        n,
        { previewApplicationId: l } = e,
        { data: r, isLoading: s } = (0, z.YY)(l),
        u = r?.bot?.id ?? null,
        o = (0, f.bG)([V.A], () => {
            if (null == u) return null;
            let e = V.A.getDMFromUserId(u);
            return null != e ? V.A.getChannel(e) : null;
        });
    ((t = o?.id ?? null),
        i.useEffect(() => {
            null != t && ch.A.preload(ex.ME, t);
        }, [t]),
        (n = (0, f.bG)([iU.A], () => iU.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, cv.Xg)();
            return (
                (0, cg.yl)(t, e),
                () => {
                    (0, cg.dm)(t, e);
                }
            );
        }, [t, n]));
    let [c, d] = i.useState(null),
        m = null != u && c === u;
    return (i.useEffect(() => {
        if (null == u || null != o) return;
        let e = !1;
        return (
            ch.A.openPrivateChannel({ recipientIds: u, navigateToChannel: !1 }).catch(() => {
                e || d(u);
            }),
            () => {
                e = !0;
            }
        );
    }, [u, o]),
    s && null == r)
        ? (0, a.jsx)(cy, {})
        : null == u || m
          ? (0, a.jsx)(cb, { message: eu.intl.string(es.default["VP/O8s"]) })
          : null == o
            ? (0, a.jsx)(cy, {})
            : (0, a.jsx)("div", {
                  className: cj.g,
                  children: (0, a.jsx)(cp.A, { channel: o, guild: null, chatInputType: cx.oU.SIDEBAR }, o.id),
              });
}
var ck = n(887909),
    cA = n(570962),
    cN = n(998475);
function cS(e) {
    let {
        label: t,
        title: n,
        subtitle: l,
        header: r,
        body: i,
        actions: s,
        nextStep: o,
        appDetails: c,
        hasContentBackground: d,
        noPadding: f,
        obscured: m,
    } = (0, ck.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, a.jsxs)("section", {
        className: cN.Nr,
        "aria-label": t,
        children: [
            (0, a.jsx)("div", {
                className: cN.rf,
                children: (0, a.jsx)(cA.A, {
                    obscured: !0 === m,
                    children: (0, a.jsxs)("div", {
                        className: cN.Gq,
                        children: [
                            null != n
                                ? (0, a.jsxs)("div", {
                                      className: cN.z3,
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
                                className: u()(cN.Qs, d ? cN.cw : null, f ? cN.pN : null),
                                children: [i, null == o ? c : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != s && s.length > 0
                ? (0, a.jsx)("div", {
                      className: cN.o1,
                      children: s.map((e, t) => (0, a.jsx)(A.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var cC = n(765671),
    cE = n(269094),
    cI = n(582063);
function cM(e) {
    let { applicationId: t, size: n } = e,
        l = (0, cl.A)({ applicationId: t, surface: tO.ZN });
    return (i.useEffect(() => {
        let e = (0, tO.VA)(t, tO.ZN);
        return () => (0, tS.r)(e);
    }, [t]),
    l.state !== cl.n.Launched)
        ? (0, a.jsx)(cm, { state: l.state })
        : l.frame.data.proxyTicketRefreshing
          ? (0, a.jsx)(cm, { state: cl.n.Loading })
          : (0, a.jsx)(c_, { lifecycle: l, size: n });
}
function c_(e) {
    let { lifecycle: t, size: n } = e,
        { ref: l, width: r, height: i } = (0, cC.Ay)(),
        s = (function (e, t) {
            let { width: n, height: l } = e;
            return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
        })({ width: r, height: i }, n);
    return (0, a.jsxs)("div", {
        className: cI.JH,
        children: [
            (0, a.jsx)("div", { className: cI.LO, "aria-hidden": !0 }),
            (0, a.jsx)("div", {
                ref: l,
                className: cI.dw,
                children: (0, a.jsx)("div", {
                    className: cI.HL,
                    style: {
                        "--custom-conjure-overlay-widget-width": `${n.width}px`,
                        "--custom-conjure-overlay-widget-height": `${n.height}px`,
                        "--custom-conjure-overlay-widget-scale": String(s),
                    },
                    children: (0, a.jsx)(cE.A, { frame: t.frame, application: t.application, className: cI.Gt }),
                }),
            }),
        ],
    });
}
var cT = n(409478),
    cP = n(652227);
function cR(e) {
    let {
        applicationId: t,
        previewApplicationId: n,
        surface: l,
        previewReady: r,
        previewGate: i,
        availability: s,
        activeMode: u,
        widgetApplicationId: o,
        overlayWidgetSize: c = tp,
        frameOverlay: d,
    } = e;
    return i?.type === "checking"
        ? (0, a.jsx)("div", { className: cP.q, children: (0, a.jsx)(k.y, {}) })
        : i?.type === "permissions" && null != i.onAddPreviewBot
          ? (0, a.jsx)("div", {
                className: cP.q,
                children: (0, a.jsx)(cc, {
                    title: eu.intl.string(es.default.SWXbpN),
                    children: (0, a.jsx)(A.$, {
                        size: "md",
                        text: eu.intl.string(es.default.FH2Udn),
                        onClick: i.onAddPreviewBot,
                    }),
                }),
            })
          : i?.type === "permissions"
            ? (0, a.jsx)("div", {
                  className: cP.q,
                  children: null == i.authorizeProps ? (0, a.jsx)(k.y, {}) : (0, a.jsx)(cS, { ...i.authorizeProps }),
              })
            : r
              ? null == t
                  ? null
                  : (0, a.jsxs)("div", {
                        className: cP.R,
                        children: [
                            (0, tj.yf)(s, u) ? (0, a.jsx)(cf, { applicationId: t, surface: l, frameOverlay: d }) : null,
                            "widget" === u && null != o
                                ? "unavailable-authorization-revoked" === s.profileState
                                    ? (0, a.jsx)("div", {
                                          className: cP.q,
                                          children: (0, a.jsx)(cc, {
                                              wide: !0,
                                              title: eu.intl.string(es.default["08U+YO"]),
                                              body: eu.intl.string(es.default.pKBfrc),
                                          }),
                                      })
                                    : (0, a.jsx)(cT.A, { applicationId: o })
                                : null,
                            "overlay" === u && s.modes.includes("overlay")
                                ? (0, a.jsx)(cM, { applicationId: t, size: c })
                                : null,
                            "bot" === u && null != n ? (0, a.jsx)(cw, { previewApplicationId: n }) : null,
                        ],
                    })
              : (0, a.jsx)(o4, { className: cP.q });
}
var cL = n(175841),
    cD = n(750506),
    c$ = n(867193),
    cz = n(539197),
    cF = n(977020);
function cO(e) {
    let { projectId: t } = e,
        n = (0, cz.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, cz.Ie)(e);
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
    let { left: r, top: s, width: o, height: c, scale: d } = l;
    function f(e, t) {
        return { "--custom-conjure-cursor-x": `${e * d}px`, "--custom-conjure-cursor-y": `${t * d}px` };
    }
    return (0, a.jsxs)("div", {
        className: cF.$Q,
        style: { left: r, top: s, width: o, height: c, "--custom-conjure-cursor-scale": d },
        "aria-hidden": !0,
        [cz.t$]: "",
        children: [
            n.presses > 0
                ? (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)("div", { className: u()(cF.hN, cF.vW), style: f(n.pressX, n.pressY) }),
                              (0, a.jsx)("div", { className: u()(cF.hN, cF.A7), style: f(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, a.jsx)("svg", {
                className: u()(cF.UE, { [cF.SP]: n.shown, [cF.Vq]: n.pressed, [cF.GP]: n.dipping }),
                style: f(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, a.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var cG = n(417760);
function cU(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function cq(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function cB(e) {
    let { phase: t, projectId: n, onOpenPublishedApp: l, compact: r } = e,
        { stop: s, stopping: o } = (function (e) {
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
        m = eu.intl.string(d ? (c ? es.default["VJW/5P"] : es.default["+hD2Iz"]) : es.default["h+i1r9"]),
        h =
            null != l
                ? (0, a.jsx)(A.$, {
                      variant: "overlay-secondary",
                      size: "sm",
                      text: eu.intl.string(es.default["1NcO7H"]),
                      onClick: l,
                  })
                : null,
        g =
            null != s
                ? (0, a.jsx)(A.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: eu.intl.string(es.default.oU59sU),
                      loading: o,
                      onClick: s,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return r
        ? (0, a.jsxs)("div", {
              className: u()(cG.M0, cG.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  d
                      ? (0, a.jsx)(sZ.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(cL.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(j.E, { variant: "text-sm/semibold", color: "none", className: cG.ID, children: m }),
                  d ? (0, a.jsx)(w.A, { children: eu.intl.string(es.default.fg1sor) }) : null,
                  d ? (0, a.jsxs)("div", { className: cG.lC, children: [h, g] }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: cG.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: cG.sp,
                      children: [
                          (0, a.jsx)(cL.SparklesIcon, { size: "sm", color: "currentColor" }),
                          d ? (0, a.jsx)(sZ.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: cG.f4,
                              children: [
                                  (0, a.jsx)(j.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: cG.w9,
                                      children: m,
                                  }),
                                  d
                                      ? (0, a.jsx)(j.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: cG.Rb,
                                            children: eu.intl.string(es.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  d ? (0, a.jsxs)("div", { className: cG.lC, children: [h, g] }) : null,
              ],
          });
}
function cH(e) {
    let {
            projectId: t,
            applicationId: n,
            previewApplicationId: l,
            resolveTarget: r,
            frameId: s,
            onOpenPublishedApp: u = null,
        } = e,
        o = (0, tx.Zv)(null != n && n === l ? t : null),
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
        })(o),
        d = (0, te.useHasAnyModalOpen)(),
        f = tF(s);
    i.useEffect(() => {
        o &&
            f &&
            null != s &&
            (function (e) {
                if (!t$(e)) return;
                let t = tD(e);
                null != t && (0, tR.sP)(t);
            })(s);
    }, [o, f, s]);
    let [m, h] = i.useState(null),
        [g, p] = i.useState(null),
        [x, v] = i.useState(null),
        j = "idle" !== c;
    i.useEffect(() => {
        if (!j) return;
        function e() {
            let e = cU(r());
            h((t) => (cq(t, e) ? t : e));
            let t = null == g ? null : cU(g);
            (v((e) => (cq(e, t) ? e : t)), null != g && (0, c$.C)(g.getBoundingClientRect().height));
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
                    null != g && (0, c$.C)(0));
            }
        );
    }, [j, r, g]);
    let b = "idle" !== c && null != m,
        y = b && "controlling" === c && !d,
        w = null != m && m.width < 420,
        k = null == m ? void 0 : { left: m.left, top: m.top, width: m.width, height: m.height },
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
            let [e] = i.useContext(cD.uY),
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
                      className: cG.D,
                      "data-phase": c,
                      children: (0, a.jsx)("div", {
                          className: cG.QF,
                          children: (0, a.jsx)(cB, { phase: c, projectId: t, onOpenPublishedApp: u, compact: w }),
                      }),
                  })
                : null,
            (0, oE.createPortal)(
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("div", {
                        className: cG.y4,
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-control-announcer",
                        children:
                            "controlling" === c
                                ? eu.intl.string(es.default.oWcemF)
                                : "handoff" === c
                                  ? eu.intl.string(es.default["h+i1r9"])
                                  : "",
                    }),
                }),
                document.body,
            ),
            y
                ? (0, oE.createPortal)(
                      (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: cG.ys,
                                  style: A,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: cG.om,
                                  style: k,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(cO, { projectId: t }),
                          ],
                      }),
                      N,
                  )
                : null,
        ],
    });
}
var cK = n(399503),
    cV = n(853555),
    cW = n(558960),
    cX = n(187645);
let cJ = new Map(),
    cY = !1;
function cQ() {
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
    for (let [l, r] of [...cJ]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            cJ.delete(t),
            n.unregisterLookup(),
            cW.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove());
    }
    for (let [t, n] of e)
        cJ.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = cX.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    cZ(n),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (cJ.set(e, l),
                    (l.unregisterLookup = (0, cV.Ng)(e, () => (0, o6.o)(n, t))),
                    cW.A.registerFrameTarget(t, n, ct.A.Backstage, void 0));
            })(t, n);
    for (let e of cJ.values()) cZ(e.element);
}
function cZ(e) {
    let t = tg.A.isBuilderPreviewMobile();
    e.classList.toggle(cX.L, !t);
    let n = t ? ci(tg.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != n ? `${n.width}px` : ""), (e.style.height = null != n ? `${n.height}px` : ""));
}
var c0 = n(873727),
    c1 = n(147248),
    c2 = n(418842),
    c3 = n(363195),
    c4 = n(818023);
let c6 = null;
var c7 = n(602853),
    c5 = n(517461),
    c8 = n(761929),
    c9 = n(487336);
function de(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: r } = e,
        s = (0, c7.r)(L.A.modules.chat.RESIZE_HANDLE_WIDTH),
        u = i.useRef(null),
        [o, c] = (0, c5.V)("VibegrationsChatSidebarWidth", 460),
        [d, f] = i.useState(o ?? 460),
        m = (0, ra.clamp)(d, 360, n);
    i.useLayoutEffect(() => {
        l(t ? m + s : 0);
    }, [m, t, s, l]);
    let h = (0, c8.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: u,
            onElementResize: f,
            onElementResizeEnd: c,
            orientation: c8.R.HORIZONTAL_LEFT,
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
        className: c9.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: c9.Di, onPointerDown: g }),
            (0, a.jsx)("div", { ref: u, className: c9.kL, style: { width: m }, children: r }),
        ],
    });
}
var dt = n(541940);
function dn(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: o,
            mainClassName: c,
            content: d,
            sidebar: m,
            onOpenPublishedApp: h,
            showsFrame: g,
        } = e,
        [p, x] = i.useState(null),
        v = (0, U.A)(l, s),
        j = v?.id ?? null;
    (!(function (e, t) {
        let n = (0, f.bG)([c3.A], () => (0, c0.x4)(c3.A.theme)),
            l = (0, f.bG)([c1.A], () => c1.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: s,
                forcedColors: u,
                underlineLinks: o,
            } = (0, f.cf)([iw.Ay], () => ({
                reducedMotion: iw.Ay.useReducedMotion,
                fontScale: (0, c0.U0)(),
                highContrast: iw.Ay.isHighContrastModeEnabled,
                forcedColors: iw.Ay.useForcedColors,
                underlineLinks: iw.Ay.alwaysShowLinkDecorations,
            })),
            c = eB.hH.useSetting(),
            d = (0, c2.C)(),
            m = i.useRef(!1),
            h = i.useRef(!1),
            g = i.useRef(0),
            p = i.useRef(null),
            x = i.useCallback(() => {
                let l = (0, o6.o)(e, t);
                if (null == l) return;
                p.current = l;
                let i = {
                    revision: ++g.current,
                    baseTheme: n,
                    customTheme: (0, c0.Lq)(),
                    uiDensity: d,
                    messageDisplayCompact: c,
                    fontScale: a,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: u,
                    underlineLinks: o,
                };
                (0, o$.W)(l, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, u, a, t, s, c, e, r, d, o]),
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
                let n = (0, o6.o)(e, t);
                null != n && n !== p.current && j();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, o6.o)(e, t) && ((p.current = null), j());
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
            if (null != t) return (0, cV.Ng)(t, () => (0, o6.o)(p, j));
        }, [t, p, j]));
    let b = i.useCallback(() => (0, o6.o)(p, j), [p, j]),
        y = i.useCallback(() => (g ? (0, o6.o)(p, j) : p), [g, p, j]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: u()(dt.Mh, c),
                children: [
                    o,
                    (0, a.jsx)(cH, {
                        projectId: t ?? null,
                        applicationId: l,
                        previewApplicationId: r,
                        resolveTarget: y,
                        frameId: j,
                        onOpenPublishedApp: h,
                    }),
                    (0, a.jsx)("div", { ref: x, className: dt.fm, children: d }),
                ],
            }),
            m,
            (0, a.jsx)(oK, {
                projectId: t ?? null,
                applicationId: l,
                previewApplicationId: r,
                resolveIframe: b,
                toggleRef: n,
            }),
        ],
    });
}
function dl(e) {
    let {
        projectId: t,
        designFeedbackToggleRef: n,
        applicationId: l,
        previewApplicationId: r,
        surface: s,
        header: o,
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
        activeMode: w,
        widgetApplicationId: k,
        overlayWidgetSize: A,
        onOpenPublishedApp: N = null,
    } = e;
    (0, cK.k)(t, k);
    let S = s.type === nB.U.MAIN || (0, tb.Q5)(s);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, f.cf)([tg.A], () => ({
            mobile: tg.A.isBuilderPreviewMobile(),
            landscape: tg.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? c4.aX.LANDSCAPE : c4.aX.PORTRAIT), (c6 = e));
                else {
                    if (c6 !== e) return;
                    ((l = c4.aX.UNHANDLED), (c6 = null));
                }
                lD.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
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
                cY ||
                    ((cY = !0),
                    ej.Ay.addChangeListener(cQ),
                    eN.Ay.addChangeListener(cQ),
                    tT.A.addChangeListener(cQ),
                    tg.A.addChangeListener(cQ),
                    (0, tx.W3)(cQ),
                    cQ()));
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
        className: dt.LB,
        children: (0, a.jsx)(dn, {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: o,
            onOpenPublishedApp: N,
            showsFrame: (0, tj.yf)(y, w),
            mainClassName: null == o ? void 0 : u()(dt.ez, { [dt.zt]: c }),
            content: (0, a.jsx)(cR, {
                applicationId: l,
                previewApplicationId: r,
                surface: s,
                previewReady: j,
                previewGate: b,
                availability: y,
                activeMode: w,
                widgetApplicationId: k,
                overlayWidgetSize: A,
                frameOverlay: (0, a.jsx)(ce, { projectId: t, applicationId: l, previewApplicationId: r, surface: s }),
            }),
            sidebar:
                null != t && _
                    ? (0, a.jsx)(de, {
                          open: c,
                          maxWidth: M,
                          onWidthChange: eA.Zq,
                          children: (0, a.jsx)("div", {
                              className: dt.cO,
                              children: p
                                  ? (0, a.jsx)(oC, { projectId: t, onClose: x ?? (() => {}) }, t)
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(o0.A, { projectId: t }),
                                            (0, a.jsx)(nH.Ay, {
                                                "aria-label": eu.intl.string(eu.t["/VQax8"]),
                                                toolbar: (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        m,
                                                        null == d
                                                            ? null
                                                            : (0, a.jsx)(nH.Ay.Icon, {
                                                                  icon: P.P,
                                                                  tooltip: eu.intl.string(es.default.JD6Oit),
                                                                  onClick: d,
                                                              }),
                                                    ],
                                                }),
                                                children: (0, a.jsx)(nH.Ay.Title, {
                                                    children: eu.intl.string(eu.t["/VQax8"]),
                                                }),
                                            }),
                                            (0, a.jsx)("div", {
                                                className: dt.cb,
                                                children: (0, a.jsx)(
                                                    uc,
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
var dr = n(631417);
function da(e) {
    let { title: t, actions: n, breadcrumb: l, project: r, onOpenProjectSettings: i } = e,
        s = eu.intl.string(es.default.FzfmQ8);
    return (0, a.jsx)(B.A, {
        hideSearch: !0,
        toolbar: n,
        className: dr.wx,
        "aria-label": t,
        children: (0, a.jsxs)("div", {
            className: dr.QF,
            children: [
                (0, a.jsx)(R.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: L.A.colors.TEXT_STRONG,
                    className: dr.Kk,
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
                              className: dr.FF,
                              onClick: i,
                              "aria-label": s,
                              children: (0, a.jsx)(nw.A, { project: r, size: "header" }),
                          }),
                      })
                    : null,
                (0, a.jsx)(B.A.Title, { className: dr.Qw, wrapperClassName: dr.DD, children: t }),
            ],
        }),
    });
}
let di = "conjuring-help";
var ds = n(173114);
function du() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: n,
            } = (0, f.cf)([tX.default, X.A, nz.Ay, sr.A], () => {
                let e = tX.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of X.A.getGuildsArray()) {
                    if (!t.features.has(ex.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let n = nz.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, F.m1)(t, tX.default, sr.A) === di;
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
              children: (0, a.jsx)(nV.w, {
                  type: "info",
                  iconAlign: "center",
                  message: eu.intl.format(es.default["6anmu1"], { channel: di, onNavigate: t }),
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
    openPublishNotes: nG.A,
    showError: (e) => (0, v.P0)({ text: e, variant: "critical" }),
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
        o,
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
                    (0, v.P0)({ text: eu.intl.formatToPlainString(es.default.aN2JdD, { name: l }) }),
                    ed(n, l)
                        .catch((e) => {
                            let t;
                            (console.error("[vibegrations] project export failed", n, e),
                                (0, v.P0)({
                                    text:
                                        409 === (t = e instanceof en.xE ? e.status : null)
                                            ? eu.intl.string(es.default["9oqbEw"])
                                            : 404 === t
                                              ? eu.intl.string(es.default["0W8uLq"])
                                              : eu.intl.string(es.default.N8753A),
                                    variant: "critical",
                                }));
                        })
                        .finally(() => {
                            r.current = !1;
                        }));
            }, [n, l])),
            {
                onExport: s,
                onImport: (o = ef(
                    i.useCallback(
                        (e) => {
                            let t = ec(e);
                            null != t
                                ? (0, v.P0)({ text: t, variant: "critical" })
                                : (0, m.A)({
                                      title: eu.intl.formatToPlainString(es.default["Gm+u1+"], { name: l }),
                                      subtitle: eu.intl.string(es.default.M7H3sJ),
                                      confirmText: eu.intl.string(es.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, H.pX)(ex.BVt.CHANNEL(S, ev.VV.CONJURE, n));
                                          try {
                                              await eo(n, e, eu.intl.string(es.default.Owerd3));
                                          } catch {
                                              (0, v.P0)({
                                                  text: eu.intl.string(es.default["Q+l4Hv"]),
                                                  variant: "critical",
                                              });
                                          }
                                      },
                                  });
                        },
                        [n, l, S],
                    ),
                )).open,
                importInput: o.input,
            }),
        _ =
            null == N.updated_at
                ? null
                : eu.intl.formatToPlainString(es.default.AXydi3, { time: c()(N.updated_at).fromNow() }),
        T = (0, tV.wu)(N),
        P =
            (0, f.bG)([X.A], () => (null == T ? null : (X.A.getGuild(T)?.name ?? null)), [T]) ??
            eu.intl.string(es.default["3QFps8"]),
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
                                      ? eu.intl.formatToPlainString(es.default.t5RWBS, { creator: e })
                                      : eu.intl.formatToPlainString(es.default["b5uCe/"], {
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
                                  (0, tJ.mG)(x),
                                  A.map((e) => (0, tJ.mG)(e)),
                              ),
                          },
                [x, A],
            )),
        $ = i.useId(),
        z = (0, a.jsx)(j.E, { variant: "text-md/semibold", color: "text-strong", className: dd.j1, children: N.name }),
        F = (0, eb.oF)(N.id),
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
        className: u()(dd.OY, { [dd.Wy]: R }),
        "aria-busy": R,
        children: [
            (0, a.jsx)(tt.Ay, { projectId: N.id }),
            null == F || R ? null : (0, a.jsx)("div", { className: dd.SB, "aria-hidden": !0 }),
            (0, a.jsxs)(b.D, {
                className: dd.W6,
                onClick: R ? void 0 : C,
                onContextMenu: function (e) {
                    R || (0, D.jA)(e, () => (0, a.jsx)(nb, { ...O, onCloseMenu: D.Z_ }));
                },
                tabIndex: R ? -1 : void 0,
                "aria-describedby": null != L ? $ : void 0,
                children: [
                    (0, a.jsx)(nw.A, { project: N, size: "card", className: dd.VJ }),
                    (0, a.jsxs)("div", {
                        className: dd.MM,
                        children: [
                            (0, a.jsxs)("div", {
                                className: dd.Ub,
                                children: [
                                    null != L ? (0, a.jsx)(y.m, { text: L.label, ariaHidden: !0, children: z }) : z,
                                    null == L || R ? null : (0, a.jsx)(nN, { creator: L, className: dd.rb }),
                                    F !== d.I.NEEDS_INPUT || R
                                        ? null
                                        : (0, a.jsxs)("div", {
                                              className: dd.fs,
                                              children: [
                                                  (0, a.jsx)(q.A, { mentionsCount: 1 }),
                                                  (0, a.jsx)(w.A, { children: eu.intl.string(es.default.hfIuc7) }),
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
                                        children: R ? eu.intl.string(es.default.Yh5pAc) : P,
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
            null != L ? (0, a.jsx)(w.A, { id: $, children: L.label }) : null,
            (0, a.jsx)("div", {
                className: dd.M2,
                children: R
                    ? (0, a.jsx)(k.y, { type: k.t.SPINNING_CIRCLE_SIMPLE })
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
        { project: s, projectsLoaded: o, onBack: c, guildId: d } = e,
        [h, g] = i.useState(!0),
        [p, x] = i.useState(!1),
        b = eB.Q_.useSetting() || !1,
        [w, k] = i.useState(null),
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
        { data: $, isLoading: q } = (0, z.YY)(s?.preview_application_id ?? void 0),
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
                    mainCardOnly: u = !1,
                    supportsOverlay: o = !1,
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
                w = null != x && (u ? y.hasMainCard : y.hasAny),
                { data: k } = (0, z.YY)(n ?? void 0),
                A = null != n && k?.bot?.id != null,
                { data: N, isLoading: S } = (0, z.YY)(t ?? void 0),
                C = l || (0, tC.X)(N),
                E = null != t && S && null == N,
                I = (0, tj.P5)(r, {
                    legacy: { hasFrame: C, hasProfileWidget: w, hasBotDm: A },
                    widgetResolvable: null != x,
                    botDmResolvable: A,
                }),
                M = (0, tj.Xm)({ installScope: a, ...I, hasOverlay: o, ownerAuthorizationRevoked: s }),
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
        ep = eu.intl.string(eg ? es.default.JD6Oit : es.default.xjJAQm),
        eb = i.useCallback(() => {
            if (p) {
                (x(!1), g(!0));
                return;
            }
            g((e) => !e);
        }, [p]),
        ey = i.useCallback(() => g(!1), []),
        { active: ew } = e9(_);
    i.useEffect(() => {
        null != _ && ew && !ei && e6(_);
    }, [_, ew, ei]);
    let ek = i.useRef(null),
        eS = (0, tx.Zv)(_),
        eC = eu.intl.string(eS ? es.default.Sme0T0 : ew ? es.default.vn5Rzu : es.default["cl/Jyl"]),
        eE = i.useCallback(() => {
            if (null != _) {
                let e;
                if (ew) return void e6(_);
                (x(!1), g(!0), (e = e3(_)).active || e4(_, { ...e, active: !0 }));
            }
        }, [_, ew]),
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
                    k({ entry: e, status: "restoring" }),
                    (0, en.oB)(l, e.sha)
                        .then(
                            async () => {
                                if (
                                    (n &&
                                        r() &&
                                        (0, v.P0)({
                                            text: eu.intl.formatToPlainString(es.default.Z4n6LX, {
                                                title: (0, tn.T4)(e.subject).short,
                                            }),
                                            variant: "success",
                                        }),
                                    null != t)
                                ) {
                                    let e = await (0, tl.c)(l, t);
                                    null != e && (0, v.P0)({ text: e, variant: "critical" });
                                }
                                r() && k({ entry: e, status: "restored" });
                            },
                            (t) => {
                                r() &&
                                    (k({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", l, t),
                                    (0, v.P0)({ text: eu.intl.string(es.default["PSdo+w"]), variant: "critical" }));
                            },
                        )
                        .finally(() => {
                            r() && (R.current = !1);
                        }));
            },
            [s],
        ),
        eT = (0, f.bG)([tg.A], () => tg.A.isBuilderPreviewMobile()),
        eP = eu.intl.string(eT ? es.default.tKGF0Q : es.default.peqEOY),
        eR = i.useCallback(() => (0, eA.GG)(!eT), [eT]),
        eL = (0, f.bG)([tg.A], () => tg.A.isBuilderPreviewLandscape()),
        eD = eu.intl.string(eL ? es.default.tunI2l : es.default.DoNdjA),
        e$ = i.useCallback(() => (0, eA.Lw)(!eL), [eL]),
        ez = (0, tb.jS)(s),
        eF = i.useMemo(() => (0, tb.Op)(ez, ee), [ez, ee]),
        eO = (0, U.A)(s?.preview_application_id ?? null, eF),
        eG = (0, tO.x1)(eO) && eO.data.proxyTicketRefreshing,
        eU = i.useCallback(() => {
            null == eO || eG || G.A.refreshProxyTicket(eO.id);
        }, [eO, eG]),
        eq = i.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = eO?.id), (0, en.Bn)(e), (0, tS.r)(t)), c());
        }, [s, eO?.id, c]),
        eH = i.useCallback(() => {
            null != s && (g(!0), (0, en.dv)(s.id, eu.intl.string(es.default.oU20rd)));
        }, [s]),
        eK = ef(
            i.useCallback(
                (e) => {
                    if (null == s) return;
                    let t = s.id,
                        n = ec(e);
                    null != n
                        ? (0, v.P0)({ text: n, variant: "critical" })
                        : (0, m.A)({
                              title: eu.intl.formatToPlainString(es.default["Gm+u1+"], { name: s.name }),
                              subtitle: eu.intl.string(es.default.M7H3sJ),
                              confirmText: eu.intl.string(es.default.gFHykw),
                              variant: "critical",
                              onConfirm: async () => {
                                  g(!0);
                                  try {
                                      await eo(t, e, eu.intl.string(es.default.Owerd3));
                                  } catch {
                                      (0, v.P0)({ text: eu.intl.string(es.default["Q+l4Hv"]), variant: "critical" });
                                  }
                              },
                          });
                },
                [s],
            ),
        ),
        eV = i.useCallback(() => {
            null != s && (0, nU.A)(s, d);
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
        eJ = ((l = s?.application_id ?? null), (0, f.bG)([nz.Ay], () => (null == l ? null : (0, nS.i8)(d, l)), [d, l])),
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
        ((null == s && o) || e5) && (0, H.bG)(ex.BVt.CHANNEL(d, ev.VV.CONJURE));
    }, [d, s, o, e5]);
    let e8 = i.useMemo(() => ({ guildId: d, platform: dp, busy: K || q }), [d, K, q]),
        tt = (0, ns.Ay)(_, e8),
        tr = tt?.intent === "open" && "channel" === tt.destination ? tt.appChannelId : null,
        ta = (0, f.bG)([V.A], () => (null == tr ? null : V.A.getChannel(tr)), [tr]),
        ti = (0, F.Ay)(ta),
        ts = (0, O.gU)(ta),
        tu =
            null != ti && null != ts
                ? eu.intl.format(es.default.gR7PUV, {
                      channel: ti,
                      channelIconHook: (e, t) =>
                          (0, a.jsx)(ts, { size: "xs", color: "currentColor", className: dd.Y2 }, t),
                  })
                : tt?.label,
        to = tt?.upToDate === !0 ? eu.intl.string(es.default.X0kGp2) : null,
        tc =
            null == tt
                ? null
                : (0, a.jsx)("div", {
                      className: dd.As,
                      children: (0, a.jsx)(y.m, {
                          text: to,
                          asContainer: !0,
                          children: (0, a.jsx)(A.$, {
                              size: "sm",
                              variant: tt.upToDate ? "secondary" : "primary",
                              loading: tt.publishing,
                              disabled: tt.disabled,
                              onClick: () => tt.run("header"),
                              text: tu,
                          }),
                      }),
                  }),
        td = null == s ? void 0 : () => (0, nu.A)(s.id, { guildId: d, isPreview: !0, publishOptions: e8 }),
        tf = (0, a.jsx)(da, {
            title: s?.name ?? eu.intl.string(es.default.G1WwgK),
            breadcrumb: { title: eu.intl.string(es.default.uk6jhJ), onClick: c },
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
                                                ref: ek,
                                                icon: N.x,
                                                iconClassName: dd.D8,
                                                tooltip: eC,
                                                "aria-label": eC,
                                                selected: ew,
                                                disabled: eS,
                                                onClick: eE,
                                            }),
                                        ],
                                    })
                                  : null,
                              "frame" === Q ? (0, a.jsx)(tG, { frame: eO, controlProjectId: s.id }) : null,
                              (0, a.jsx)("div", { className: dd.YJ }),
                              b
                                  ? (0, a.jsx)(B.A.Icon, {
                                        icon: S.BugIcon,
                                        tooltip: eu.intl.string(es.default.Mt5k9d),
                                        "aria-label": eu.intl.string(es.default.Mt5k9d),
                                        selected: p,
                                        onClick: eI,
                                    })
                                  : null,
                              (0, a.jsx)(B.A.Icon, {
                                  icon: C.SettingsIcon,
                                  tooltip: eu.intl.string(es.default.I2XSKe),
                                  "aria-label": eu.intl.string(es.default.I2XSKe),
                                  onClick: td,
                              }),
                              (0, a.jsx)(ny, {
                                  projectId: s.id,
                                  projectName: s.name,
                                  guildId: d,
                                  projectGuildId: s.guild_id,
                                  isOwner: (0, eN.PV)(s),
                                  canRemix: (0, eN.H_)(s),
                                  onRefresh: (0, tO.x1)(eO) ? eU : void 0,
                                  isRefreshing: eG,
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
                                              restoreDisabled: w?.status === "restoring",
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
        className: u()(dd.nj, dc.T),
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
                                              children: eu.intl.string(es.default.G1WwgK),
                                          }),
                                          (0, a.jsx)(j.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: eu.intl.string(es.default.fINulo),
                                          }),
                                          (0, a.jsx)(A.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: eu.intl.string(es.default["WFJ/vb"]),
                                              onClick: () => (0, eA.hF)(d),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(ns.bI.Provider, {
                              value: e8,
                              children: (0, a.jsx)(
                                  dl,
                                  {
                                      projectId: s.id,
                                      designFeedbackToggleRef: ek,
                                      applicationId: s.preview_application_id,
                                      previewApplicationId: s.preview_application_id,
                                      surface: eF,
                                      header: tf,
                                      chatOpen: h,
                                      onCloseChat: ey,
                                      chatHeaderAction: tc,
                                      debugOpen: b && p,
                                      onCloseDebug: eM,
                                      onRestoreVersion: e_,
                                      onImportProject: (0, eN.PV)(s) ? eK.open : void 0,
                                      restoreState: w,
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
            createError: o,
            createDisabled: c,
            conjureTarget: d,
            onConjureTargetChange: m,
            eligibleGuilds: h,
            modelSettings: g,
            onModelSettingsChange: p,
            onSelectProject: x,
            onIdeaChange: b,
            onCreate: y,
            onCreateFromTemplate: w,
            onStartTemplate: N,
            onSubmitTemplate: S,
            onCancelTemplate: C,
            onSkipTemplate: E,
            onImportNewProject: D,
            importing: $,
        } = e,
        [z, F] = i.useState(() => ({ guildId: r, filter: nM(r) })),
        O = (z.guildId === r ? z.filter : nM(r)) ?? r,
        G = i.useCallback(
            (e) => {
                (nI.set(r, e), F({ guildId: r, filter: e }));
            },
            [r],
        ),
        U = (0, f.yK)(
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
                { id: "conjure-filter-all", value: "all", leading: R.D, label: eu.intl.string(es.default["Xi/oIC"]) },
                {
                    id: "conjure-filter-user",
                    value: nC,
                    leading: em.UserIcon,
                    label: eu.intl.string(es.default.kCSgmG),
                },
                {
                    id: "conjure-filter-no-server",
                    value: nE,
                    leading: eh.R,
                    label: eu.intl.string(es.default["3QFps8"]),
                },
                ...U.map((e) => ({
                    id: `conjure-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, a.jsx)(eU.Ay, { guild: e, size: eU.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [U],
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
                    label: eu.intl.string(es.default.NyVn6T),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: eq,
                            label: eu.intl.string(es.default.UPLaGM),
                            leading: em.UserIcon,
                        },
                        ...h.map((e) => ({
                            id: `conjure-target-${e.id}`,
                            value: e.id,
                            label: e.name,
                            leading: (0, a.jsx)(eU.Ay, { guild: e, size: eU.Ay.Sizes.MINI, active: !0 }),
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
                    : (0, v.P0)({ text: eu.intl.string(es.default["XUl/cs"]) });
            },
            [r, x],
        ),
        Q = eu.intl.string(es.default.ab1sMf),
        Z = [
            eu.intl.string(es.default["9w+Chc"]),
            eu.intl.string(es.default.WAvmdq),
            eu.intl.string(es.default.SKsrzl),
        ],
        ee = [
            {
                id: "moderation-bot",
                name: eu.intl.string(es.default.lGLnE8),
                description: eu.intl.string(es.default["pAC6k/"]),
                wizard: !0,
            },
            {
                id: "feature-showcase",
                name: eu.intl.string(es.default.uJKQTs),
                description: eu.intl.string(es.default["+dKy/B"]),
            },
            {
                id: "rust-sphere",
                name: eu.intl.string(es.default.iF5Oru),
                description: eu.intl.string(es.default.NbDDO6),
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
                w(e);
            },
            [h, r, C, w, E, N, S],
        ),
        en = eu.intl.string(es.default.zzYLlW),
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
        er = eu.intl.string(es.default["2XcV3x"]),
        ea = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), c || y());
            },
            [c, y],
        ),
        ei = n_(O) ?? r,
        eo = (0, f.bG)([eN.Ay], () => eN.Ay.getGuildProjectsFetchState(ei), [ei]),
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
        ek = i.useCallback(() => eb(!1), [eb]),
        eC = eu.intl.string(es.default.kar7jh),
        eE = ej ? eC : eu.intl.string(es.default.WSc5Y2);
    return (0, a.jsx)("div", {
        className: u()(dd.nj, dd.a0, dc.T),
        children: (0, a.jsxs)("div", {
            className: dd.Yo,
            children: [
                (0, a.jsxs)("main", {
                    className: dd.ps,
                    children: [
                        (0, a.jsx)(da, {
                            title: eu.intl.string(es.default.uk6jhJ),
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
                                    className: u()(dd.Qs, dd.Ix),
                                    children: [
                                        (0, a.jsx)(du, {}),
                                        (0, a.jsx)(eG, {}),
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
                                                            children: eu.intl.string(es.default["N88+Ld"]),
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
                                                                    ariaLabel: eu.intl.formatToPlainString(
                                                                        es.default.jGyR6p,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: u()(dd.nx, dd.rz),
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
                                                            children: eu.intl.string(es.default.JnJOAn),
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
                                className: u()(dd.Qs, dd.DA),
                                children: [
                                    (0, a.jsx)(_.f, {
                                        label: Q,
                                        hideLabel: !0,
                                        rows: 3,
                                        value: l,
                                        placeholder: Q,
                                        error: o,
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
                                                    label: eu.intl.string(es.default.NyVn6T),
                                                    hideLabel: !0,
                                                    placeholder: eu.intl.string(es.default.NyVn6T),
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
                                                              ? eu.intl.string(es.default.s28pGG)
                                                              : eu.intl.formatToPlainString(es.default.Wy5aK4, {
                                                                    count: el,
                                                                }),
                                                  })
                                                : null,
                                            (0, a.jsx)(th, {
                                                settings: g ?? Y.A4,
                                                tiers: Y.lO,
                                                choices: (0, ew.b)()
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
                                                text: eu.intl.string(eu.t.CumH4u),
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
                    "aria-label": eu.intl.string(es.default.dWgSAa),
                    children: [
                        (0, a.jsxs)("div", {
                            className: dd.IR,
                            children: [
                                (0, a.jsx)(j.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: dd.RM,
                                    children: eu.intl.string(es.default.dWgSAa),
                                }),
                                (0, a.jsxs)("div", {
                                    className: dd.Ss,
                                    children: [
                                        (0, a.jsx)(ep, { importing: $, onImport: D }),
                                        (0, a.jsx)(B.A.Icon, { icon: P.P, tooltip: eC, "aria-label": eC, onClick: ek }),
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
                                        label: eu.intl.string(es.default.U6TqU9),
                                        hideLabel: !0,
                                        options: q,
                                        value: O,
                                        onSelectionChange: G,
                                    }),
                                }),
                                (0, a.jsx)(j.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: dd.wE,
                                    children: eu.intl.string(es.default.JQpNkh),
                                }),
                                ("unattempted" === eo || "loading" === eo) && 0 === W.length
                                    ? (0, a.jsx)("div", { className: dd.E8, children: (0, a.jsx)(k.y, {}) })
                                    : "error" === eo && 0 === W.length
                                      ? (0, a.jsxs)("div", {
                                            className: dd.E8,
                                            children: [
                                                (0, a.jsx)(j.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: dd.JS,
                                                    children: eu.intl.string(es.default.DJAPMO),
                                                }),
                                                (0, a.jsx)(A.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: eu.intl.string(es.default["WFJ/vb"]),
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
                                                          children: eu.intl.string(es.default["9/5sLV"]),
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
                                                          onRemix: () => (0, nU.A)(e, r),
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
                                                          children: eu.intl.string(es.default["wFi8+o"]),
                                                      }),
                                                      (0, a.jsx)(j.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          children: eu.intl.string(es.default.dQ3U1J),
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
                                                              onRemix: () => (0, nU.A)(e, r),
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
        u = (0, f.bG)(
            [X.A, J.A],
            () => {
                let e = X.A.getGuild(n);
                return null != e && J.A.can(ex.xBc.MANAGE_GUILD, e);
            },
            [n],
        ),
        [o, c] = i.useState(""),
        d = l ?? null,
        [m, h] = i.useState(!1),
        [g, p] = i.useState(null),
        x = (0, t2.z9)("VibegrationsScreen"),
        [j, b] = i.useState(null),
        y = (0, $.o)().get(tW.f_) === eq;
    i.useEffect(() => {
        b(null);
    }, [n, y]);
    let w = i.useMemo(() => (!y && x.some((e) => e.id === n) ? n : eq), [x, n, y]),
        k = j ?? w,
        A = k === eq ? "user" : "guild",
        N = k === eq ? n : k,
        [S, C] = i.useState(null);
    (i.useEffect(() => {
        (0, eA.hF)(n);
    }, [n, s, u]),
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
                let t = (e ?? o).trim(),
                    n = ek({ idea: t, installScope: A, submitting: m });
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
            [E, A, N, o, m],
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
                                    eu.intl.formatToPlainString(es.default["0PQip6"], { templateName: n })),
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
        z = i.useCallback(
            async (e, t) => {
                let l = ec(e);
                if (null != l) return void (0, v.P0)({ text: l, variant: "critical" });
                D(!0);
                let r = null;
                try {
                    ((r = await (0, eA.gA)({ guild_id: n, install_scope: t })),
                        (0, en.Hc)(r),
                        (0, en.r2)(r, S ?? Y.A4),
                        await eo(r, e, eu.intl.string(es.default["LUc7/5"])),
                        (0, H.pX)(ex.BVt.CHANNEL(n, ev.VV.CONJURE, r)),
                        C(null));
                } catch {
                    (null != r && (await (0, eA.xx)(r).catch(() => void 0)),
                        (0, v.P0)({ text: eu.intl.string(es.default["Q+l4Hv"]), variant: "critical" }));
                } finally {
                    D(!1);
                }
            },
            [n, S],
        ),
        F = i.useCallback(
            (e) => {
                (0, H.pX)(ex.BVt.CHANNEL(n, ev.VV.CONJURE, e));
            },
            [n],
        ),
        O = i.useCallback(() => {
            (0, H.pX)(ex.BVt.CHANNEL(n, ev.VV.CONJURE));
        }, [n]),
        G = i.useCallback((e) => {
            (c(e), p(null));
        }, []),
        U = (0, f.bG)(
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
        ? (0, a.jsx)(dv, { project: U, projectsLoaded: q, onBack: O, guildId: n }, d)
        : (0, a.jsx)(dj, {
              projects: r,
              modelSettings: S,
              onModelSettingsChange: C,
              idea: o,
              guildId: n,
              submitting: m,
              createError: g,
              createDisabled: "idea" === (t = ek({ idea: o, installScope: A, submitting: m })) || "submitting" === t,
              onSelectProject: F,
              onIdeaChange: G,
              onCreate: I,
              onCreateFromTemplate: M,
              onStartTemplate: _,
              onSubmitTemplate: T,
              onCancelTemplate: P,
              onSkipTemplate: R,
              onImportNewProject: z,
              importing: L,
              conjureTarget: k,
              onConjureTargetChange: b,
              eligibleGuilds: x,
          });
}
