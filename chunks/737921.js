(l.r(t), l.d(t, { default: () => dX }), l(321073));
var n,
    a,
    r = l(477900),
    i = l(582128),
    s = l(503698),
    o = l.n(s),
    u = l(536637),
    c = l.n(u),
    d = l(478104),
    m = l(17928),
    f = l(314116),
    h = l(534890),
    g = l(646270),
    x = l(31300),
    p = l(831453),
    v = l(376357),
    j = l(834730),
    b = l(939249),
    y = l(866665),
    k = l(140735),
    w = l(289873),
    N = l(821609),
    A = l(604525),
    S = l(92446),
    C = l(625903),
    E = l(297264),
    I = l(97893),
    M = l(364522),
    T = l(103557),
    _ = l(691885),
    P = l(789645),
    R = l(152367),
    L = l(661531),
    D = l(442433),
    $ = l(458518),
    F = l(627363),
    z = l(47167),
    O = l(713654),
    G = l(625180),
    U = l(672929),
    q = l(775946),
    H = l(742589),
    B = l(976860),
    K = l(402860),
    V = l(885386),
    W = l(734057),
    X = l(696451),
    J = l(71393),
    Q = l(576705),
    Y = l(164892),
    Z = l(922016),
    ee = l(980707),
    et = l(477782),
    el = l(81369),
    en = l(712808);
(l(323874), l(14289), l(35956));
var ea = l(77729),
    er = l(723702),
    ei = l(264572).Buffer;
async function es(e, t) {
    if (er.isPlatformEmbedded) {
        let l = ei.from(await e.arrayBuffer());
        if ("function" == typeof ea.A.fileManager.saveWithDialog2) await ea.A.fileManager.saveWithDialog2(l, t);
        else
            try {
                await ea.A.fileManager.saveWithDialog(l, t);
            } catch {}
        return;
    }
    let l = URL.createObjectURL(e);
    try {
        let e = document.createElement("a");
        ((e.href = l), (e.download = t), (e.rel = "noopener"), e.click());
    } finally {
        window.setTimeout(() => URL.revokeObjectURL(l), 0);
    }
}
var eo = l(248675),
    eu = l(660183);
async function ec(e, t, l) {
    (0, en.Hc)(e);
    let n = await (0, en.vX)(e, t);
    (0, en.dv)(e, l, [n]);
}
function ed(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, Y.Oq)(e.size, t)
        ? null
        : eu.intl.formatToPlainString(eo.default.ThxcOX, { size: (0, Y.sM)((0, Y.Ju)(t)) });
}
async function em(e, t) {
    let l,
        n =
            ((l = t
                .normalize("NFKD")
                .replace(/[^a-zA-Z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "")
                .slice(0, 64)
                .replace(/-+$/g, "")
                .toLowerCase()),
            `${"" === l ? "vibegration" : l}.zip`),
        a = await (0, en.cS)(e, n);
    await es(a, n);
}
function ef(e) {
    let t = i.useRef(null),
        l = i.useCallback(
            (t) => {
                let l = t.target.files?.[0] ?? null;
                ((t.target.value = ""), null != l && e(l));
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
            onChange: l,
        }),
    };
}
var eh = l(950305),
    eg = l(664121);
let ex = [
    { value: "user", icon: eh.UserIcon, nameMessage: eo.default.s1TsXl },
    { value: "guild", icon: eg.R, nameMessage: eo.default.LlLIJw },
];
function ep(e) {
    let { importing: t, onImport: l } = e,
        n = i.useRef(null),
        a = ef(i.useCallback((e) => l(e, "user"), [l])),
        s = ef(i.useCallback((e) => l(e, "guild"), [l])),
        o = { user: a.open, guild: s.open };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(Z.Y, {
                targetElementRef: n,
                position: "bottom",
                align: "right",
                animation: Z.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsx)(ee.W, {
                        "data-menu-migrated": !0,
                        navId: "conjure-import-scope",
                        "aria-label": eu.intl.string(eo.default.soVyD1),
                        onClose: t,
                        onSelect: t,
                        children: (0, r.jsx)(et.rX, {
                            label: eu.intl.string(eo.default.NyVn6T),
                            children: ex
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: eu.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, r.jsx)(
                                        et.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: o[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, l) => {
                    let { isShown: a } = l;
                    return (0, r.jsx)(N.$, {
                        ...e,
                        buttonRef: n,
                        variant: "secondary",
                        size: "sm",
                        icon: el.H,
                        text: eu.intl.string(eo.default.NJGZA3),
                        loading: t,
                        disabled: t,
                        "aria-haspopup": "menu",
                        "aria-expanded": a,
                    });
                },
            }),
            a.input,
            s.input,
        ],
    });
}
var ev = l(652215),
    ej = l(746080),
    eb = l(245179),
    ey = l(404373),
    ek = l(639519),
    ew = l(361504);
function eN(e) {
    let { idea: t, installScope: l, submitting: n } = e;
    return n ? "submitting" : "" === t.trim() ? "idea" : null == l ? "scope" : null;
}
var eA = l(371169),
    eS = l(260498);
function eC(e) {
    let { className: t, ariaLabel: l, disabled: n, onClick: a, children: i } = e;
    return (0, r.jsx)(b.D, { "aria-disabled": n, "aria-label": l, className: t, onClick: n ? void 0 : a, children: i });
}
var eE = l(865665),
    eI = l(373913);
let eM = { x: 5, y: 7 },
    eT = { x: 5, y: 4 };
function e_(e) {
    let { listClassName: t, radius: l, children: n } = e,
        [a, s] = i.useState(!1);
    return (0, r.jsxs)("div", {
        className: eI.n,
        onMouseEnter: () => s(!0),
        onMouseLeave: () => s(!1),
        children: [
            (0, r.jsx)("ol", { className: t, children: n }),
            a ? (0, r.jsx)(eE.C, { area: 64, radius: l, color: L.A.colors.TEXT_BRAND }) : null,
        ],
    });
}
var eP = l(864970),
    eR = l(707554),
    eL = l(770178),
    eD = l(765548),
    e$ = l(595528),
    eF = l(885576),
    ez = l(662429);
let eO = "heading-xxl/semibold",
    eG = !1;
function eU() {
    let e = i.useRef(null),
        [t, l] = i.useState(!0),
        n = (0, eD.A)((e) => {
            l(e.target.clientWidth >= 500);
        }),
        a = (0, eL.w)(n, [], { fireOnMount: !0 }),
        s = (0, m.bG)([e$.A], () => e$.A.isConnected());
    i.useEffect(() => {
        if (!s || !t || eG) return;
        let l = !1,
            n = 0;
        function a() {
            l ||
                (n = window.setTimeout(() => {
                    ((eG = !0), e.current?.play());
                }, 400));
        }
        let r = document.fonts;
        return (
            null == r ? a() : r.load("16px 'AI Visual Identity Glyphs'", "123456789ABC").then(a, a),
            () => {
                ((l = !0), window.clearTimeout(n));
            }
        );
    }, [s, t]);
    let o = (0, m.bG)([eF.A], () => eF.A.isIdle()),
        u = i.useRef(o);
    i.useEffect(() => {
        let t = u.current && !o;
        ((u.current = o), t && eG && (e.current?.stop(), e.current?.play()));
    }, [o]);
    let c = eu.intl.string(eo.default["+5XyCR"]);
    return (0, r.jsx)("div", {
        ref: a,
        className: ez.x,
        children: t
            ? (0, r.jsx)(eR.H, { children: (0, r.jsx)(eP.o, { ref: e, text: c, variant: eO, delay: null }) })
            : (0, r.jsx)(E.D, { variant: eO, children: c }),
    });
}
var eq = l(548118);
let eH = "user",
    eB = Object.freeze({ x: 0.5, y: 0.5 });
function eK(e) {
    return "" !== e.trim();
}
function eV(e) {
    let t = e.name.trim(),
        l = (function (e) {
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
    return null == l
        ? "" === t
            ? { kind: "" !== e.role ? e.role : e.tag, name: "" }
            : { kind: "", name: t }
        : { kind: l, name: t };
}
function eW(e) {
    let { kind: t, name: l } = eV(e);
    return [t, l].filter((e) => "" !== e).join(" ");
}
function eX(e) {
    let t = [`<${e.tag}>`];
    "" !== e.role && t.push(`role=${e.role}`);
    let l = e.name.trim();
    return (
        "" !== l && t.push(`name="${l}"`),
        null != e.value && "" !== e.value && t.push(`value="${e.value}"`),
        null != e.path && "" !== e.path && t.push(`path="${e.path}"`),
        null != e.marker && t.push(`marker="${e.marker}"`),
        t.push(`at x=${e.rect.x} y=${e.rect.y}`),
        t.push(`size ${e.rect.width}x${e.rect.height}`),
        t.push(`ref=${e.ref}`),
        t.join(" ")
    );
}
let eJ = "[vibegrations:selected] ",
    eQ = " \u2014 ";
function eY(e) {
    if (!e.startsWith(eJ)) return null;
    let t = e.indexOf("\n"),
        l = -1 === t ? e : e.slice(0, t),
        n = -1 === t ? "" : e.slice(t + 1),
        a = l.slice(eJ.length),
        r = a.indexOf(eQ),
        i = (-1 === r ? a : a.slice(0, r)).trim();
    return "" === i ? null : { label: i, body: n };
}
let eZ = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    e0 = new Map(),
    e1 = new Set();
function e2(e) {
    return e0.get(e) ?? eZ;
}
function e3(e, t) {
    for (let l of (t.active || 0 !== t.annotations.length ? e0.set(e, t) : e0.delete(e), [...e1]))
        try {
            l();
        } catch (e) {
            console.error("[vibegrations] design feedback subscriber threw", e);
        }
}
function e4(e) {
    e0.has(e) && e3(e, eZ);
}
function e6(e, t) {
    let l = e2(e);
    l.active && e3(e, { ...l, context: t });
}
function e7(e, t) {
    return null != t && e.authorId === t;
}
function e5(e) {
    return (
        e1.add(e),
        () => {
            e1.delete(e);
        }
    );
}
function e8(e) {
    let t = i.useCallback(() => (null == e ? eZ : e2(e)), [e]);
    return i.useSyncExternalStore(e5, t, t);
}
var e9 = l(192308),
    te = l(855793),
    tt = l(128761),
    tl = l(967008),
    tn = l(900797),
    ta = l(320448),
    tr = l(783977),
    ti = l(344587),
    ts = l(534554),
    to = l(837984),
    tu = l(359589),
    tc = l(254575);
function td(e) {
    let [t, l] = i.useState(e),
        [n, a] = i.useState(!1),
        [r, s] = i.useState(e);
    return (
        r !== e && (s(e), e ? l(!0) : a(!1)),
        i.useEffect(() => {
            if (e || !t) return;
            let n = setTimeout(() => l(!1), 150);
            return () => clearTimeout(n);
        }, [e, t]),
        i.useEffect(() => {
            if (!t || !e) return;
            let l = 0,
                n = requestAnimationFrame(() => {
                    l = requestAnimationFrame(() => a(!0));
                });
            return () => {
                (cancelAnimationFrame(n), cancelAnimationFrame(l));
            };
        }, [t, e]),
        { mounted: t, entered: n }
    );
}
function tm(e) {
    let { settings: t, tiers: l, choices: n, disabled: a, onChange: s, placement: u, open: c, entered: d } = e,
        [m, f] = i.useState(!1),
        h = td(m),
        g = Y.PY.indexOf(t.tier),
        x = m ? tn.t : ta._,
        p = Y.PY.map(ts.D0),
        v = (0, ts.Tc)(t.tier),
        { text: b, phase: y } = (0, ti.Q)(v);
    return (0, r.jsx)("div", {
        className: tc.qd,
        "data-placement": u ?? void 0,
        children: (0, r.jsxs)("div", {
            className: o()(tc.t$, { [tc.Zr]: c && d, [tc.GF]: !c }),
            role: "dialog",
            "aria-label": eu.intl.string(eo.default["3E7Yc0"]),
            children: [
                h.mounted
                    ? (0, r.jsx)("div", {
                          className: o()(tc.Nr, tc.uO, { [tc.Zr]: m && h.entered, [tc.GF]: !m }),
                          children: (0, r.jsx)(tu.bR, { settings: t, tiers: l, choices: n, disabled: a, onChange: s }),
                      })
                    : null,
                (0, r.jsxs)("div", {
                    className: `${tc.Nr} ${tc.rF}`,
                    children: [
                        (0, r.jsxs)("div", {
                            className: tc.wx,
                            children: [
                                (0, r.jsxs)("button", {
                                    type: "button",
                                    className: tc.y6,
                                    "aria-expanded": m,
                                    "aria-label": eu.intl.string(eo.default.eGqPbV),
                                    onClick: () => f((e) => !e),
                                    children: [
                                        (0, r.jsx)(j.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: eu.intl.string(eo.default.aBPQxX),
                                        }),
                                        (0, r.jsx)(x, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: tc.vg,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(j.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: o()(tc.Z, { [tc.xQ]: "exit" === y, [tc.lm]: "enter" === y }),
                                    children: b,
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: tc.hs,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: tc.Nb,
                                    children: [
                                        (0, r.jsx)(j.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: eu.intl.string(eo.default["/tlOR5"]),
                                        }),
                                        (0, r.jsx)(j.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: eu.intl.string(eo.default.FxoUwB),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(to.A, {
                                    activeIndex: g,
                                    stops: p,
                                    ariaLabel: eu.intl.string(eo.default.aBPQxX),
                                    disabled: a,
                                    onSelect: function (e) {
                                        let l = Y.PY[e];
                                        null != l && l !== t.tier && s((0, ts.CM)((0, ts.j6)(t, l)));
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
function tf(e) {
    let { settings: t, tiers: l, choices: n, disabled: a, onChange: s, className: o, icon: u } = e,
        c = i.useRef(null),
        [d, m] = (0, tu.FT)(t, s),
        [f, h] = i.useState(!1),
        { mounted: g, entered: x } = td(f);
    return (0, r.jsx)(Z.Y, {
        targetElementRef: c,
        position: "top",
        align: "right",
        shouldShow: g,
        onRequestClose: () => h(!1),
        animation: Z.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, r.jsx)(tm, {
                settings: d,
                tiers: l ?? null,
                choices: n,
                disabled: a,
                onChange: m,
                placement: t,
                open: f,
                entered: x,
            });
        },
        children: (e, t) => {
            let { isShown: l } = t;
            return (0, r.jsx)(y.m, {
                text: eu.intl.string(eo.default["k2JN/p"]),
                shouldShow: !l,
                ariaHidden: !0,
                children: (0, r.jsx)(b.D, {
                    innerRef: c,
                    className: o ?? tc.hZ,
                    "aria-label": eu.intl.string(eo.default["k2JN/p"]),
                    ...e,
                    onClick: () => h((e) => !e),
                    "aria-expanded": f,
                    children: u ?? (0, r.jsx)(tr.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
var th = l(111534);
let tg = { width: 320, height: 240 };
var tx = l(573083),
    tp = l(855859),
    tv = l(238490),
    tj = l(754027),
    tb = l(696645);
function ty(e) {
    return "frame" === e.mode ? `frame-${e.surface}` : e.mode;
}
function tk(e) {
    switch (e.mode) {
        case "frame":
            return (0, tb.XV)(e.surface);
        case "widget":
            return eu.intl.string(eo.default.y5GiL1);
        case "overlay":
            return eu.intl.string(eo.default["2940LX"]);
        case "bot":
            return eu.intl.string(eo.default.tjpaGN);
    }
}
var tw = l(598748),
    tN = l(294323),
    tA = l(457827),
    tS = l(25451),
    tC = l(280450),
    tE = l(373677),
    tI = l(86147),
    tM = l(729475),
    tT = l(91242),
    t_ = l(869146),
    tP = l(475815),
    tR = l(621466);
function tL(e) {
    return null == e ? null : document.querySelector(`[data-frame-id="${CSS.escape(e)}"]`);
}
function tD(e) {
    let t, l;
    return (
        null != e &&
        ((l =
            (t = document).fullscreenElement ??
            t.webkitFullscreenElement ??
            t.mozFullScreenElement ??
            t.msFullscreenElement ??
            null),
        ((0, tR.vq)(l, Element) ? l.getAttribute("data-frame-id") : null) === e)
    );
}
function t$(e) {
    return (0, tP.a3)(document, e);
}
function tF(e) {
    return i.useSyncExternalStore(t$, () => tD(e));
}
var tz = l(165610);
function tO(e) {
    let { frame: t, controlProjectId: l } = e,
        n = tF(t?.id ?? null),
        a = (0, tx.Zv)(l),
        i = (0, m.bG)(
            [t_.A, tT.A],
            () => null != t && t_.A.getWindowOpen(ev.MLl.ACTIVITY_POPOUT) && tT.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, tz.x1)(t) || i || a) return null;
    let s = tL(t.id);
    if (null == s || !(0, tP.Ub)(s)) return null;
    let o = eu.intl.string(n ? eu.t.Z7MyNB : eu.t.OIDkcp);
    return (0, r.jsx)(H.A.Icon, {
        tooltip: o,
        icon: n ? tI.z : tM.T,
        "aria-label": o,
        role: "switch",
        "aria-checked": n,
        selected: n,
        onClick: () => {
            var e;
            let l;
            null != (l = tL((e = t.id))) && (0, tP.Ub)(l) && (tD(e) ? (0, tP.sP)(l) : (0, tP.tl)(l));
        },
    });
}
var tG = l(559106),
    tU = l(847374),
    tq = l(704745);
function tH(e) {
    let { targets: t, target: l, onChange: n } = e,
        [a, s] = i.useState(!1),
        o = null != l && t.length > 1;
    a && !o && s(!1);
    let u = i.useCallback(() => s(!1), []),
        c = i.useCallback(() => s((e) => !e), []),
        d = i.useRef(null);
    if (!o) return null;
    let m = eu.intl.string(eo.default.I2ucou);
    return (0, r.jsx)(Z.Y, {
        targetElementRef: d,
        shouldShow: a,
        onRequestClose: u,
        position: "bottom",
        align: "right",
        animation: Z.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, r.jsx)(ee.W, {
                "data-menu-migrated": !0,
                navId: "conjure-preview-target",
                "aria-label": m,
                onClose: a,
                onSelect: a,
                children: (0, r.jsx)(et.rX, {
                    label: m,
                    children: t.map((e) => {
                        let t = ty(e);
                        return (0, r.jsx)(
                            et.iD,
                            {
                                id: `preview-target-${t}`,
                                group: "conjure-preview-target",
                                label: tk(e),
                                checked: t === ty(l),
                                action: () => n(e),
                            },
                            t,
                        );
                    }),
                }),
            });
        },
        children: (e, t) => {
            let { onClick: n, ...a } = e,
                { isShown: i } = t;
            return (0, r.jsx)(tG.vN, {
                children: (0, r.jsxs)("button", {
                    ...a,
                    ref: d,
                    type: "button",
                    className: tq.h,
                    "aria-haspopup": "menu",
                    "aria-expanded": i,
                    onClick: c,
                    children: [
                        (0, r.jsx)(j.E, {
                            tag: "span",
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: eu.intl.string(eo.default["N+VA1J"]),
                        }),
                        (0, r.jsx)(j.E, {
                            tag: "span",
                            variant: "text-sm/medium",
                            color: "none",
                            lineClamp: 1,
                            children: tk(l),
                        }),
                        (0, r.jsx)(tU.a, { size: "xs", color: "currentColor" }),
                    ],
                }),
            });
        },
    });
}
var tB = l(226178),
    tK = l(434279),
    tV = l(941985),
    tW = l(287809),
    tX = l(427262),
    tJ = l(803306);
let tQ = new Set(),
    tY = new Map();
function tZ(e, t, l) {
    return null == e ? (l ?? null) : (t ?? null);
}
function t0(e) {
    if (null == e || tQ.has(e) || null != tW.default.getUser(e)) return;
    let t = tY.get(e) ?? 0;
    t >= 3 ||
        (tY.set(e, t + 1),
        tQ.add(e),
        tJ
            .wz(e)
            .finally(() => tQ.delete(e))
            .catch(() => {}));
}
var t1 = l(16619),
    t2 = l(782603),
    t3 = l(780338),
    t4 = l(663417),
    t6 = l(70688),
    t7 = l(173936),
    t5 = l(473935),
    t8 = l(408278),
    t9 = l(365199),
    le = l(7437),
    lt = l(147036),
    ll = l(957565),
    ln = l(785389),
    la = l(123917);
let lr = new Set();
var li = l(289106),
    ls = l(616334),
    lo = l(189714),
    lu = l(435558),
    lc = l.n(lu),
    ld = l(587895),
    lm = l(321191),
    lf = l(808728),
    lh = l(994500),
    lg = l(426035);
function lx(e) {
    let { channelNames: t } = e;
    return t.map((e) => ({ key: `channel:${e}`, kind: "channel", label: `#${e}` }));
}
var lp = l(189213),
    lv = l(331322),
    lj = l(150934),
    lb = l(323384),
    ly = l(430392),
    lk = l(678708),
    lw = l(709066),
    lN = l(319725);
function lA(e, t) {
    return eu.intl.format(e, {
        app: (0, r.jsxs)(
            "span",
            {
                className: lN.Kh,
                children: [t, " ", (0, r.jsx)("span", { className: lN.Tc, children: (0, r.jsx)(lw.A, {}) })],
            },
            "app",
        ),
    });
}
function lS(e) {
    let { kind: t } = e;
    switch (t) {
        case "channel":
            return (0, r.jsx)(lb.k, { size: "sm", color: "currentColor", "aria-hidden": !0 });
        case "app":
            return (0, r.jsx)(ly.RobotIcon, { size: "sm", color: "currentColor", "aria-hidden": !0 });
        case "project":
            return (0, r.jsx)(lk.FolderIcon, { size: "sm", color: "currentColor", "aria-hidden": !0 });
    }
}
function lC(e) {
    let { items: t } = e;
    return (0, r.jsxs)(lv.B, {
        gap: 8,
        children: [
            (0, r.jsx)(j.E, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: eu.intl.string(eo.default["+E2PqP"]),
            }),
            (0, r.jsx)("div", {
                className: lN.aP,
                children: t.map((e) =>
                    (0, r.jsxs)(
                        "div",
                        {
                            className: lN.nM,
                            children: [
                                (0, r.jsx)(lS, { kind: e.kind }),
                                (0, r.jsx)(j.E, { variant: "text-sm/medium", color: "text-subtle", children: e.label }),
                            ],
                        },
                        e.key,
                    ),
                ),
            }),
        ],
    });
}
function lE(e) {
    let t,
        { project: l, target: n, action: a, ...s } = e,
        [o, u] = i.useState(!0),
        [c, d] = i.useState(!1),
        [m, f] = i.useState(null),
        h = "delete" === a,
        g = h
            ? ((t = [{ key: "project", kind: "project", label: n.projectName }]).push(...lx(n)),
              null != n.previewAppName && t.push({ key: "preview-app", kind: "app", label: n.previewAppName }),
              t)
            : lx(n),
        x = h
            ? eu.intl.formatToPlainString(eo.default.CJBhb2, { name: n.projectName })
            : eu.intl.formatToPlainString(eo.default.x6FvsZ, { app: n.appName });
    async function p() {
        (d(!0), f(null));
        let e = h ? (0, eA.xx)(l.id) : (0, eA.YI)(l.id, { alsoRemovePreviewBot: o }),
            t = await e.catch(() => null);
        (d(!1), t?.ok !== !0)
            ? f(eu.intl.string(h ? eo.default["0XDHob"] : eo.default.PJ2Fkn))
            : (h ||
                  (0, v.P0)(
                      (0, v.ox)(
                          (function (e) {
                              let { appName: t, guildName: l } = e;
                              return eu.intl.formatToPlainString(eo.default.SNFGxP, { app: t, server: l });
                          })(n),
                          v.Ck.SUCCESS,
                      ),
                  ),
              s.onClose());
    }
    return (0, r.jsx)(lp.a, {
        ...s,
        role: "alertdialog",
        title: h ? x : lA(eo.default.x6FvsZ, n.appName),
        subtitle: h
            ? (function (e) {
                  let { appName: t, guildName: l } = e;
                  return eu.intl.formatToPlainString(eo.default["9CvVB9"], { app: t, server: l });
              })(n)
            : eu.intl.string(eo.default["8OKM1N"]),
        "aria-label": x,
        notice: null == m ? void 0 : { message: m, type: "critical" },
        actions: [
            { text: eu.intl.string(eu.t["ETE/oC"]), variant: "secondary", onClick: s.onClose },
            {
                text: eu.intl.string(h ? eo.default.aC42bN : eo.default.BGF8VT),
                variant: "critical-primary",
                loading: c,
                disabled: c,
                onClick: () => {
                    p().catch(() => {});
                },
            },
        ],
        children: (0, r.jsxs)(lv.B, {
            gap: 12,
            children: [
                g.length > 0 ? (0, r.jsx)(lC, { items: g }) : null,
                h || null == n.previewAppName
                    ? null
                    : (0, r.jsx)(lj.S, { checked: o, onChange: u, label: lA(eo.default["87CtcA"], n.previewAppName) }),
            ],
        }),
    });
}
function lI(e) {
    (0, e9.openModal)((t) => (0, r.jsx)(lE, { ...t, ...e }));
}
var lM = l(552821);
let lT = [];
function l_(e) {
    (0, v.P0)((0, v.ox)(e, v.Ck.FAILURE));
}
function lP(e) {
    let {
            projectId: t,
            projectName: l,
            guildId: n,
            projectGuildId: a,
            isOwner: s,
            canRemix: o,
            onExport: u,
            onImport: c,
            onRemix: d,
            onConnectTool: h,
            onHistory: g,
            onRefresh: x,
            isRefreshing: p = !1,
            onClose: j,
            refreshApplicationId: b,
            previewProjectId: y,
            onCloseMenu: k,
        } = e,
        w = (0, lo.iI)(t),
        N = i.useContext(li.bI),
        { pending: A, refresh: S } = (0, le.A)(b ?? null),
        { pending: E, connect: I } = (function (e, t) {
            let [l, n] = i.useState(lr),
                a = i.useRef(lr),
                r = i.useCallback((e) => {
                    ((a.current = (0, ln.Q6)(a.current, e)), n(a.current));
                }, []);
            return {
                pending: l,
                connect: i.useCallback(
                    (l) => {
                        if (null == e) return;
                        let i = (0, ln.K9)(a.current, l.type);
                        async function s() {
                            let n = await (0, en.JI)(e, l.type);
                            (r(l.type), "url" === n.type)
                                ? (0, la.h)({ href: n.url, trusted: !1 })
                                : t(
                                      "setup" === (0, ln.rq)(n.error)
                                          ? eu.intl.string(eo.default["jCQ/1B"])
                                          : eu.intl.string(eo.default.POxkSh),
                                  );
                        }
                        null != i && ((a.current = i), n(i), s().catch(() => r(l.type)));
                    },
                    [t, e, r],
                ),
            };
        })(y ?? null, l_),
        M = (0, m.bG)([en.Ay], () => (null == y ? lT : en.Ay.getDeclaredConnections(y))),
        T = i.useMemo(() => (0, ln.Xl)(M), [M]),
        _ = (0, m.bG)(
            [eS.Ay, J.A, lf.Ay, lm.A, ld.A, tW.default, lh.A],
            () => {
                let e,
                    l = null == t ? null : eS.Ay.getProject(t);
                return null == l
                    ? null
                    : null != (e = null == l.guild_id ? null : J.A.getGuild(l.guild_id)) &&
                        (0, eS.jf)(l) &&
                        "in_server" === (0, lg.kF)(l)
                      ? {
                            projectName: l.name,
                            appName: ld.A.getApplication(l.application_id)?.name ?? l.name,
                            previewAppName:
                                null == l.preview_application_id
                                    ? null
                                    : (ld.A.getApplication(l.preview_application_id)?.name ?? `${l.name} (Preview)`),
                            guildName: e.name,
                            channelNames: (0, lg.xI)(e.id, l.application_id).map((e) => (0, z.m1)(e, tW.default, lh.A)),
                        }
                      : null;
            },
            [t],
            lu.isEqual,
        ),
        P = (function (e) {
            let { canRefresh: t, refreshPending: l, offers: n, connectPending: a } = e,
                r = [];
            for (let { connection: e, offer: i } of (t &&
                r.push({
                    id: "preview-refresh",
                    label: eu.intl.string(eo.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: l,
                }),
            n))
                r.push(
                    "authorize" === i
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
            return r;
        })({ canRefresh: null != b, refreshPending: A, offers: T, connectPending: E }),
        R = i.useMemo(() => new Map(M.map((e) => [e.type, e])), [M]),
        L = null != d && o,
        D = s && null != c,
        $ = L || null != u || D || null != h || null != g,
        F = ll.p5 && null != n,
        O = ll.p5,
        G = w ? t2.BellIcon : t3.BellSlashIcon;
    return (0, r.jsxs)(ee.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": eu.intl.string(eu.t.ogxXGq),
        onClose: k,
        onSelect: k,
        children: [
            null != x || null != j
                ? (0, r.jsxs)(et.rX, {
                      children: [
                          null != x
                              ? (0, r.jsx)(et.Dr, {
                                    id: "refresh",
                                    icon: t4.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: t4.RefreshIcon },
                                    label: eu.intl.string(eo.default["p4B/7M"]),
                                    disabled: p,
                                    action: x,
                                })
                              : null,
                          null != j
                              ? (0, r.jsx)(et.Dr, {
                                    id: "close",
                                    icon: t6.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: t6.DoorExitIcon },
                                    label: eu.intl.string(eo.default["/TlGcK"]),
                                    action: j,
                                })
                              : null,
                      ],
                  })
                : null,
            P.length > 0
                ? (0, r.jsx)(et.rX, {
                      children: P.map((e) =>
                          (0, r.jsx)(
                              et.Dr,
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
            (0, r.jsx)(et.rX, {
                children: (0, r.jsx)(et.Dr, {
                    id: "mute",
                    label: eu.intl.string(w ? eo.default.s9rCuH : eo.default["a+i/As"]),
                    icon: G,
                    leadingAccessory: { type: "icon", icon: G },
                    action: () => (0, lo.$L)(t, !w),
                }),
            }),
            $
                ? (0, r.jsxs)(et.rX, {
                      children: [
                          L
                              ? (0, r.jsx)(et.Dr, { id: "remix", label: eu.intl.string(eo.default.XWgAfc), action: d })
                              : null,
                          null != u
                              ? (0, r.jsx)(et.Dr, { id: "export", label: eu.intl.string(eo.default.WsEEP7), action: u })
                              : null,
                          D
                              ? (0, r.jsx)(et.Dr, { id: "import", label: eu.intl.string(eo.default.rWGY3e), action: c })
                              : null,
                          null != h
                              ? (0, r.jsx)(et.Dr, {
                                    id: "connect-tool",
                                    label: eu.intl.string(eo.default.yOIql5),
                                    action: h,
                                })
                              : null,
                          null != g
                              ? (0, r.jsx)(et.Dr, {
                                    id: "history",
                                    label: eu.intl.string(eo.default["3hIVou"]),
                                    action: g,
                                })
                              : null,
                      ],
                  })
                : null,
            O
                ? (0, r.jsxs)(et.rX, {
                      children: [
                          F
                              ? (0, r.jsx)(et.Dr, {
                                    id: "copy-link",
                                    label: eu.intl.string(eu.t.WqhZss),
                                    icon: t7.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: t7.LinkIcon },
                                    action: () =>
                                        (0, ll.C)((0, lt.n)(n, ej.VV.CONJURE, t), () =>
                                            (0, v.P0)((0, v.ox)(eu.intl.string(eu.t["L/PwZf"]), v.Ck.SUCCESS)),
                                        ),
                                })
                              : null,
                          (0, r.jsx)(et.Dr, {
                              id: "copy-project-id",
                              label: eu.intl.string(eo.default["nm/zuU"]),
                              icon: t5.L,
                              leadingAccessory: { type: "icon", icon: t5.L },
                              action: () =>
                                  (0, ll.C)(t, () =>
                                      (0, v.P0)((0, v.ox)(eu.intl.string(eo.default.CmfaZG), v.Ck.SUCCESS)),
                                  ),
                          }),
                      ],
                  })
                : null,
            s || null != _
                ? (0, r.jsxs)(et.rX, {
                      children: [
                          s
                              ? (0, r.jsx)(et.Dr, {
                                    id: "settings",
                                    label: eu.intl.string(eo.default.FzfmQ8),
                                    icon: C.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: C.SettingsIcon },
                                    action: () =>
                                        (0, ls.A)(t, {
                                            guildId: a ?? n,
                                            initialTab: "project",
                                            isPreview: !0,
                                            publishOptions: N,
                                        }),
                                })
                              : null,
                          null != _
                              ? (0, r.jsx)(et.Dr, {
                                    id: "remove-from-server",
                                    label: eu.intl.formatToPlainString(eo.default["3gKG2j"], { server: _.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let e = eS.Ay.getProject(t);
                                        null != e && lI({ project: e, target: _, action: "remove" });
                                    },
                                })
                              : null,
                          s
                              ? (0, r.jsx)(et.Dr, {
                                    id: "delete",
                                    label: eu.intl.string(eu.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let e = eS.Ay.getProject(t);
                                        if (null != e && null != _) lI({ project: e, target: _, action: "delete" });
                                        else
                                            (0, f.A)({
                                                title: eu.intl.formatToPlainString(eo.default.CJBhb2, { name: l }),
                                                subtitle: eu.intl.string(eo.default["0OmrVn"]),
                                                confirmText: eu.intl.string(eu.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, eA.K)(t, () =>
                                                        (0, v.P0)(
                                                            (0, v.ox)(
                                                                eu.intl.string(eo.default["0XDHob"]),
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
function lR(e) {
    let { trigger: t = "header", ...l } = e,
        n = i.useRef(null);
    return (0, r.jsx)(Z.Y, {
        targetElementRef: n,
        position: "bottom",
        align: "right",
        animation: Z.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(lP, { ...l, onCloseMenu: t });
        },
        children: (e, l) => {
            let { onClick: a } = e,
                { isShown: i } = l;
            return (0, r.jsx)("div", {
                ref: n,
                className: lM.h,
                children:
                    "iconButton" === t
                        ? (0, r.jsx)(y.m, {
                              text: eu.intl.string(eu.t["UKOtz+"]),
                              children: (0, r.jsx)(t8.K, {
                                  icon: t9.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": eu.intl.string(eu.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": i,
                                  onClick: a,
                              }),
                          })
                        : (0, r.jsx)(H.A.Icon, {
                              icon: t9.MoreHorizontalIcon,
                              tooltip: eu.intl.string(eu.t["UKOtz+"]),
                              "aria-label": eu.intl.string(eu.t["UKOtz+"]),
                              "aria-haspopup": "menu",
                              "aria-expanded": i,
                              selected: i,
                              onClick: a,
                          }),
            });
        },
    });
}
var lL = l(497183),
    lD = l(104171),
    l$ = l(286739);
function lF(e) {
    let { creator: t, className: l } = e;
    return (0, r.jsx)("div", {
        className: o()(l$.c, l),
        "aria-hidden": !0,
        children: (0, r.jsx)(lD.Ay, { users: [t.creator, ...t.collaborators], max: 3, size: lD.DN.SIZE_16 }),
    });
}
var lz = l(246338);
let lO = "user",
    lG = "no-server",
    lU = new Map();
function lq(e) {
    return lU.get(e) ?? null;
}
function lH(e) {
    switch (e) {
        case "all":
        case lO:
        case lG:
            return null;
        default:
            return e;
    }
}
function lB(e, t) {
    switch (t) {
        case "all":
            return !0;
        case lO:
            return "user" === e.install_scope;
        case lG:
            return null == (0, tK.wu)(e);
        default:
            return e.guild_id === t || e.preview_guild_id === t;
    }
}
var lK = l(506774);
let lV = "VibegrationsProjectsPanelOpen";
function lW() {
    return lK.w.get(lV) ?? null;
}
function lX(e) {
    return `VibegrationsProjectsPanel:${e}`;
}
var lJ = l(803101),
    lQ = l(516288);
function lY(e) {
    let { reason: t, transitionState: l, onClose: n } = e,
        a = t === lQ.k.PERMISSIONS;
    return (0, r.jsx)(lp.a, {
        transitionState: l,
        onClose: n,
        title: eu.intl.string(a ? eo.default.wQ4UyJ : eo.default.ZNGLFE),
        subtitle: eu.intl.string(a ? eo.default.Agqmbt : eo.default.ffxKGK),
        size: "sm",
        actions: [{ text: eu.intl.string(a ? eu.t.BddRzS : eo.default["/omTNx"]), variant: "primary", onClick: n }],
    });
}
var lZ = l(951465),
    l0 = l(95264),
    l1 = l(952644),
    l2 = l(991690),
    l3 = l(58736),
    l4 = l(689175),
    l6 = l(65593),
    l7 = l(115982);
function l5(e) {
    return !(0, eb.BL)(e) && !0 !== e.stopRequested;
}
var l8 = l(104317),
    l9 = l(643278),
    ne = l(566424),
    nt = l(683063),
    nl = l(138212);
function nn(e) {
    let { title: t, trailing: l, children: n, className: a, headerClassName: i, ...s } = e;
    return (0, r.jsxs)("section", {
        className: o()(nl.Nr, a),
        ...s,
        children: [
            (0, r.jsxs)("header", {
                className: o()(nl.wx, null != l && nl.o5, i),
                children: [
                    (0, r.jsx)(j.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    l,
                ],
            }),
            n,
        ],
    });
}
var na = l(148590);
function nr(e) {
    let { children: t } = e;
    return (0, r.jsx)(j.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function ni(e) {
    let {
            title: t,
            meta: l,
            superseded: n = !1,
            showLabel: a,
            hideLabel: s,
            bodyClassName: u,
            beforeBody: c,
            children: d,
            ...m
        } = e,
        f = i.useId(),
        [h, g] = i.useState(!n),
        [x, p] = i.useState(n);
    x !== n && (p(n), g(!n));
    let v = i.useCallback(() => g((e) => !e), []),
        j = h ? tU.a : ta._,
        y = null != l || n;
    return (0, r.jsxs)(nn, {
        ...m,
        title: t,
        trailing: y
            ? (0, r.jsxs)("span", {
                  className: na.ZY,
                  children: [
                      l,
                      n
                          ? (0, r.jsx)(b.D, {
                                className: na.L$,
                                onClick: v,
                                "aria-expanded": h,
                                "aria-controls": f,
                                "aria-label": h ? s : a,
                                children: (0, r.jsx)(j, { size: "xs", color: "currentColor" }),
                            })
                          : null,
                  ],
              })
            : void 0,
        headerClassName: h ? void 0 : na.RG,
        "data-superseded": n ? "true" : void 0,
        children: [c, (0, r.jsx)("div", { id: f, className: o()(na.rf, u), hidden: !h, children: d })],
    });
}
var ns = l(883646);
let no = [];
function nu(e) {
    let { status: t } = e;
    return (0, r.jsxs)("span", {
        className: o()(ns.xL, {
            [ns.Vb]: "in_progress" === t,
            [ns.cT]: "completed" === t,
            [ns.GZ]: "unfinished" === t,
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
            (0, r.jsx)(w.y, {
                type: w.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: ns.Qd,
                itemClassName: ns.xB,
                "aria-hidden": !0,
            }),
            (0, r.jsx)("svg", {
                className: ns.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, r.jsx)("path", { className: ns.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function nc(e) {
    let { agents: t, active: l } = e,
        n = i.useMemo(() => (l ? t : no), [l, t]),
        a = i.useMemo(() => new Set(n.map((e) => e.key)), [n]),
        s = n.map((e) => e.key).join("\0"),
        [o, u] = i.useState(n),
        [c, d] = i.useState(s),
        [m, f] = i.useState(!1);
    c !== s && (d(s), u([...n, ...o.filter((e) => !a.has(e.key))]), 0 === n.length && f(!1));
    let h = o.some((e) => !a.has(e.key));
    if (
        (i.useEffect(() => {
            if (!h) return;
            let e = setTimeout(() => u(n), l ? 200 : 250);
            return () => clearTimeout(e);
        }, [h, n, l]),
        i.useEffect(() => {
            if (!l || 0 === o.length) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => f(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [l, o.length]),
        0 === o.length)
    )
        return null;
    let g = o.slice(0, 3),
        x = o.length - g.length;
    return (0, r.jsxs)("span", {
        className: ns.X6,
        "data-shown": l && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: l, name: n, task: i } = e,
                    { Illocon: s } = l;
                return (0, r.jsx)(
                    nt.u,
                    {
                        asset: (0, r.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: n,
                        body: i,
                        position: "top",
                        children: (0, r.jsx)("span", {
                            className: ns.MA,
                            "data-leaving": a.has(t) ? void 0 : "true",
                            children: (0, r.jsx)(s, { size: 16, alt: n, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            x > 0
                ? (0, r.jsx)(j.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: ns.qA,
                      children: `+${x}`,
                  })
                : null,
        ],
    });
}
function nd(e) {
    let t,
        { todos: l, provisional: n, agents: a, live: s = !0 } = e,
        u = (function (e) {
            let t = e.join("\0"),
                [l, n] = i.useState(() => new Set(e)),
                [a, r] = i.useState(t),
                [s, o] = i.useState(() => new Set());
            return (
                a !== t && (r(t), n(new Set(e)), o(0 === l.size ? new Set() : new Set(e.filter((e) => !l.has(e))))),
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
        })(i.useMemo(() => l.map((e) => e.id), [l])),
        c =
            ((t = (a ?? no).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            i.useMemo(() => {
                let e = new Map();
                for (let t of a ?? no) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let l = e.get(t.todoId);
                    null != l ? l.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, r.jsxs)("ul", {
        className: ns.p_,
        children: [
            l.map((e) => {
                var t;
                let l = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, r.jsxs)(
                    "li",
                    {
                        className: o()(ns.AS, { [ns.J1]: "completed" === l }),
                        "data-arriving": u.has(e.id) ? "true" : void 0,
                        children: [
                            (0, r.jsx)(nu, { status: l }),
                            (0, r.jsx)(j.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === l || "pending" === l ? "text-default" : "text-subtle",
                                tag: "span",
                                className: ns.iV,
                                selectable: !0,
                                children: (0, r.jsx)("span", {
                                    className: ns.Qq,
                                    children:
                                        "in_progress" === l && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, r.jsx)(nc, { agents: c.get(e.id) ?? no, active: "completed" !== l }),
                        ],
                    },
                    e.id,
                );
            }),
            null != n
                ? (0, r.jsxs)("li", {
                      className: ns.AS,
                      "data-provisional": !0,
                      children: [
                          (0, r.jsx)(nu, { status: "pending" }),
                          (0, r.jsx)(j.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: ns.iV,
                              selectable: !0,
                              children: (0, r.jsx)("span", { className: ns.Qq, children: n }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function nm(e) {
    let { todos: t, provisional: l, agents: n, announceProgress: a = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let c = eu.intl.formatToPlainString(eo.default["P/I+JW"], { completed: o, total: u }),
        d = eu.intl.formatToPlainString(eo.default["7tzwKB"], { completed: o, total: u });
    return (0, r.jsx)(ni, {
        title: eu.intl.string(eo.default.RtzECX),
        meta: (0, r.jsx)(nr, { children: c }),
        superseded: s,
        showLabel: eu.intl.string(eo.default.RKyN9q),
        hideLabel: eu.intl.string(eo.default.xydHoj),
        className: ns.Nr,
        bodyClassName: ns.rf,
        beforeBody: a && !s ? (0, r.jsx)(k.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, r.jsx)(nd, { todos: t, provisional: l, agents: n, live: i }),
    });
}
var nf = l(308665),
    nh = l(59678),
    ng = l(903847);
function nx(e) {
    let { line: t, placement: l, todos: n, todosLive: a = !0, provisionalTodo: s, agents: u, onJumpToActivity: c } = e,
        d = null != l,
        [m, f] = i.useState(l ?? "top"),
        [h, g] = i.useState(d),
        [x, p] = i.useState(!1),
        [v, j] = i.useState(!1),
        [k, w] = i.useState(d);
    (k !== d && (w(d), null != l ? (f(l), g(!0)) : (p(!1), j(!1))),
        i.useEffect(() => {
            if (d || !h) return;
            let e = setTimeout(() => g(!1), 150);
            return () => clearTimeout(e);
        }, [d, h]),
        i.useEffect(() => {
            if (!h || !d) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => p(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [h, d]));
    let [N, A] = i.useState(!1),
        [S, C] = i.useState(!1),
        [E, I] = i.useState(v);
    (E !== v && (I(v), v ? A(!0) : C(!1)),
        i.useEffect(() => {
            if (v || !N) return;
            let e = setTimeout(() => A(!1), 150);
            return () => clearTimeout(e);
        }, [v, N]),
        i.useEffect(() => {
            if (!N || !v) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => C(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [N, v]));
    let M = null != n && n.length > 0,
        T = i.useCallback(() => j((e) => !e), []);
    return h
        ? (0, r.jsxs)("div", {
              className: ng.qd,
              "data-placement": m,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, r.jsxs)("div", {
                      className: o()(ng.vK, { [ng.ho]: x && d, [ng.ET]: !d }),
                      children: [
                          null == c
                              ? (0, r.jsx)("ol", {
                                    className: o()(ng.Rk, nh.pj),
                                    "data-live": "true",
                                    children: (0, r.jsx)(ne.A, {
                                        glyph: (0, r.jsx)(nf.Ay, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, r.jsx)(b.D, {
                                    className: ng.pZ,
                                    onClick: c,
                                    "aria-label": eu.intl.string(eo.default.hEK6qu),
                                    children: (0, r.jsx)("ol", {
                                        className: o()(ng.Rk, nh.pj),
                                        "data-live": "true",
                                        children: (0, r.jsx)(ne.A, {
                                            glyph: (0, r.jsx)(nf.Ay, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          M
                              ? (0, r.jsx)(y.m, {
                                    text: eu.intl.string(eo.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, r.jsx)(b.D, {
                                        className: ng.BO,
                                        onClick: T,
                                        "aria-expanded": v,
                                        "aria-label": eu.intl.string(eo.default.RtzECX),
                                        children: (0, r.jsx)(l9.ClipboardListIcon, {
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
                  N && M
                      ? (0, r.jsx)("div", {
                            className: o()(ng.vB, { [ng.pg]: v && S, [ng.ui]: !v }),
                            children: (0, r.jsx)(nm, {
                                todos: n,
                                provisional: s,
                                agents: u,
                                live: a,
                                announceProgress: !1,
                            }),
                        })
                      : null,
              ],
          })
        : null;
}
var np = l(658675),
    nv = l(22231),
    nj = l(826745),
    nb = l(123292),
    ny = l(155078);
function nk(e) {
    return e.options.some((e) => null != e.image);
}
let nw = [];
function nN(e, t) {
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
var nA = l(87221),
    nS = l(144228),
    nC = l(241326),
    nE = l(26430),
    nI = l(750943),
    nM = l(95477),
    nT = l(256905),
    n_ = l(73153),
    nP = l(839214);
let nR = [],
    nL = 1,
    nD = (0, nP.D)(() => ({ draftsByProject: {} }));
function n$(e, t, l) {
    return e.draftsByProject[t]?.[l] ?? nR;
}
function nF(e, t) {
    return n$(nD.getState(), e, t);
}
function nz(e, t, l) {
    let { draftsByProject: n } = nD.getState();
    nD.setState({ draftsByProject: { ...n, [e]: { ...n[e], [t]: l } } });
}
function nO(e, t, l, n) {
    let a = nF(e, t);
    return (
        !!a.some((e) => e.localId === l) &&
        (nz(
            e,
            t,
            a.map((e) => (e.localId === l ? { ...e, ...n } : e)),
        ),
        !0)
    );
}
function nG(e, t) {
    (0, en.Vm)(e, t).catch((e) => {
        console.error("[vibegrations] attachment cleanup failed", e);
    });
}
function nU(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && nG(e, t.ref.id));
}
function nq(e, t) {
    let { deleteFromWorker: l } = t,
        { draftsByProject: n } = nD.getState(),
        a = n[e];
    if (null == a) return;
    for (let t of Object.values(a))
        for (let n of t ?? nR) l ? nU(e, n) : null != n.previewUrl && URL.revokeObjectURL(n.previewUrl);
    let { [e]: r, ...i } = n;
    nD.setState({ draftsByProject: i });
}
function nH(e) {
    return eu.intl.formatToPlainString(eo.default.JZ59Bo, { size: (0, Y.sM)((0, Y.Ju)(e)) });
}
function nB(e, t) {
    let l = nF(e, t);
    if (0 !== l.length) {
        for (let t of l) nU(e, t);
        nz(e, t, nR);
    }
}
function nK(e, t) {
    let l = nF(e, t);
    if (0 === l.length) return [];
    for (let e of l) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (nz(e, t, nR), l.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function nV(e, t) {
    let { clarificationAnswers: l, attachments: n = [] } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = nF(e, "chat"),
        r = a.length > 0 && a.every((e) => "ready" === e.status) ? nK(e, "chat") : [];
    (0, en.dv)(e, t, [...n, ...r], { clarificationAnswers: l });
}
function nW(e, t) {
    let [l, n] = i.useState(null),
        [a, r] = i.useState(!1),
        [s, o] = i.useState(0);
    return (
        i.useEffect(() => {
            let l = !1;
            return (
                (0, en.PK)(e, t).then(
                    (e) => {
                        l || n(e);
                    },
                    () => {
                        l || (0 === s ? o(1) : r(!0));
                    },
                ),
                () => {
                    l = !0;
                }
            );
        }, [e, t, s]),
        {
            src: l,
            gone: a,
            handleError: i.useCallback(() => {
                (n(null),
                    (0, en.n6)(e, t).then(
                        (e) => {
                            e && 0 === s ? o(1) : r(!0);
                        },
                        () => r(!0),
                    ));
            }, [e, t, s]),
        }
    );
}
(n_.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(nD.getState().draftsByProject)) nq(e, { deleteFromWorker: !0 });
}),
    n_.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        nq(t, { deleteFromWorker: !1 });
    }));
var nX = l(907702);
function nJ(e) {
    let { projectId: t, attachmentId: l, alt: n, onMeasured: a } = e,
        { src: s, gone: u, handleError: c } = nW(t, l),
        [d, m] = i.useState(null),
        f = null != s && d === s;
    return u
        ? (0, r.jsxs)("span", {
              className: o()(nX.Gt, nX.b6),
              children: [
                  (0, r.jsx)(nA.D, { size: "md", color: "currentColor" }),
                  (0, r.jsx)(j.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: eu.intl.string(eo.default.lhgD88),
                  }),
              ],
          })
        : (0, r.jsx)("span", {
              className: o()(nX.Gt, { [nX.iP]: !f }),
              children:
                  null != s
                      ? (0, r.jsx)("img", {
                            src: s,
                            alt: n,
                            className: nX.Sl,
                            onLoad: (e) => {
                                m(s);
                                let { naturalWidth: t, naturalHeight: l } = e.currentTarget;
                                t > 0 && l > 0 && a({ width: t, height: l });
                            },
                            onError: c,
                            draggable: !1,
                        })
                      : null,
          });
}
function nQ(e) {
    let t,
        l,
        {
            projectId: n,
            option: a,
            multi: i,
            selected: s,
            disabled: u,
            reachable: c,
            tabbable: d,
            onPick: m,
            onView: f,
            onArrow: h,
            onMeasured: g,
            onRemove: x,
        } = e,
        p = eu.intl.formatToPlainString(eo.default.JGjZMs, { answer: a.label });
    return (0, r.jsxs)("div", {
        className: o()(nX.Vs, { [nX.Q9]: s, [nX.RX]: u }),
        "data-conjure-clarification-option": a.id,
        children: [
            (0, r.jsxs)(b.D, {
                className: nX.Up,
                "data-conjure-image-option-pick": !0,
                onClick: u ? void 0 : () => m(a),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), h(a, t));
                },
                role: i ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": eu.intl.formatToPlainString(eo.default.AQbxhf, { answer: a.label }),
                "aria-disabled": u,
                tabIndex: c && d ? 0 : -1,
                children: [
                    (0, r.jsxs)("span", {
                        className: nX.$_,
                        children: [
                            null != a.image
                                ? (0, r.jsx)(nJ, {
                                      projectId: n,
                                      attachmentId: a.image.attachment_id,
                                      alt: a.label,
                                      onMeasured: g,
                                  })
                                : (0, r.jsx)("span", { className: nX.Gt }),
                            (0, r.jsx)("span", {
                                className: nX.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, r.jsx)(np.P, { checked: s, disabled: u })
                                    : (0, r.jsx)(nS.T, { checked: s, disabled: u }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(j.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: nX.pG,
                        children:
                            "" !== (l = null != (t = a.image?.page_url ?? a.image?.url) ? (0, ny.E)(t) : "")
                                ? (function (e) {
                                      let t = e.toLowerCase().split(".");
                                      if (t.length < 2 || /^\d+$/.test(t[t.length - 1]) || e.includes(":")) return e;
                                      let [l, n] = t.slice(-2),
                                          a = t.length > 2 && 2 === n.length && l.length <= 3;
                                      return t.slice(a ? -3 : -2).join(".");
                                  })(l)
                                : a.label,
                    }),
                ],
            }),
            null != x
                ? (0, r.jsx)("span", {
                      className: nX.B4,
                      children: (0, r.jsx)(y.m, {
                          text: eu.intl.string(eo.default.HQEXJM),
                          children: (0, r.jsx)(t8.K, {
                              icon: nC.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: x,
                              disabled: u,
                              "aria-label": eu.intl.string(eo.default.HQEXJM),
                              tabIndex: c ? 0 : -1,
                          }),
                      }),
                  })
                : null != a.image
                  ? (0, r.jsx)("span", {
                        className: nX.B4,
                        children: (0, r.jsx)(y.m, {
                            text: eu.intl.string(eo.default["4/eeDD"]),
                            children: (0, r.jsx)(t8.K, {
                                icon: nE._,
                                size: "sm",
                                variant: "overlay-secondary",
                                onClick: () => f(a),
                                "aria-label": p,
                                tabIndex: c && d ? 0 : -1,
                            }),
                        }),
                    })
                  : null,
        ],
    });
}
function nY(e) {
    var t;
    let { projectId: l, question: n, selectedIds: a, disabled: s, reachable: u = !0, onPick: c, own: d } = e,
        m = !0 === n.multi_select,
        { options: f } = n,
        h = f.length > 4 ? "gallery" : "row",
        g = i.useRef(null),
        x = i.useRef(new Map()),
        [p, v] = i.useState(null),
        j = null != p && f.some((e) => e.id === p) ? p : (f.find((e) => a.includes(e.id)) ?? f[0])?.id,
        b = i.useCallback(
            (e) => {
                let t = f.flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    n = t.findIndex((t) => t.id === e.id);
                n < 0 ||
                    Promise.all(t.map((e) => (0, en.PK)(l, e.image.attachment_id))).then(
                        (e) => {
                            (0, nT.R)({
                                items: e.map((e, l) => {
                                    let n,
                                        a = x.current.get(t[l].id);
                                    return {
                                        type: "IMAGE",
                                        url: e,
                                        original: e,
                                        alt: t[l].label,
                                        ...(null != a
                                            ? ((n = Math.max(1, 480 / Math.max(a.width, a.height))),
                                              { width: Math.round(a.width * n), height: Math.round(a.height * n) })
                                            : {}),
                                    };
                                }),
                                startingIndex: n,
                                shouldHideMediaOptions: !0,
                                location: "VibegrationsClarificationImageOptions",
                            });
                        },
                        () => {},
                    );
            },
            [f, l],
        ),
        y = i.useCallback(
            (e, t) => {
                let l = (f.findIndex((t) => t.id === e.id) + t + f.length) % f.length,
                    n = f[l];
                (v(n.id), g.current?.querySelectorAll("[data-conjure-image-option-pick]")[l]?.focus(), m || s || c(n));
            },
            [s, m, c, f],
        ),
        k =
            null == d.image
                ? null
                : ((t = d.image),
                  {
                      id: `own:${t.attachment.id}`,
                      label: eu.intl.string(eo.default.SUdqCQ),
                      image: { attachment_id: t.attachment.id },
                  });
    return (0, r.jsxs)("div", {
        className: nX.Nz,
        "data-conjure-image-options": !0,
        children: [
            (0, r.jsxs)("div", {
                ref: g,
                className: o()(nX.fF, "gallery" === h ? nX.nV : nX.nM, { [nX.m3]: m }),
                role: m ? "group" : "radiogroup",
                "aria-labelledby": `${n.id}-label`,
                "data-layout": h,
                "data-count": f.length,
                children: [
                    f.map((e) =>
                        (0, r.jsx)(
                            nQ,
                            {
                                projectId: l,
                                option: e,
                                multi: m,
                                selected: a.includes(e.id),
                                disabled: s,
                                reachable: u,
                                tabbable: m || e.id === j,
                                onPick: (e) => {
                                    (v(e.id), c(e));
                                },
                                onView: b,
                                onArrow: y,
                                onMeasured: (t) => x.current.set(e.id, t),
                            },
                            e.id,
                        ),
                    ),
                    null != k
                        ? (0, r.jsx)(
                              nQ,
                              {
                                  projectId: l,
                                  option: k,
                                  multi: m,
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
            (0, r.jsx)(nZ, {
                projectId: l,
                own: d,
                disabled: s,
                reachable: u,
                uploadText: eu.intl.string(/\bicons?\b/i.test(n.question) ? eo.default.qU4WN6 : eo.default.cbMDDB),
            }),
        ],
    });
}
function nZ(e) {
    let { projectId: t, own: l, disabled: n, reachable: a, uploadText: s } = e,
        o = i.useRef(null),
        [u, c] = i.useState(!1),
        [d, m] = i.useState(""),
        f = a ? 0 : -1,
        h = l.busy;
    function g() {
        "" !== d.trim() &&
            null == h &&
            l.onLink(d.trim()).then(
                (e) => {
                    e && (c(!1), m(""));
                },
                () => void 0,
            );
    }
    return (0, r.jsxs)("div", {
        className: nX.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, r.jsxs)("div", {
                className: nX.QJ,
                children: [
                    (0, r.jsx)(N.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: nI.X,
                        text: s,
                        loading: "upload" === h,
                        disabled: n || "link" === h,
                        onClick: () => o.current?.click(),
                        tabIndex: f,
                        "data-conjure-own-image-upload": !0,
                    }),
                    u
                        ? null
                        : (0, r.jsx)(N.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: t7.LinkIcon,
                              text: eu.intl.string(eo.default["1TgOO+"]),
                              disabled: n || "upload" === h,
                              onClick: () => c(!0),
                              tabIndex: f,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, r.jsx)("input", {
                        ref: o,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: nX.Fg,
                        tabIndex: -1,
                        "aria-hidden": !0,
                        onChange: (e) => {
                            var n, a;
                            let r = e.currentTarget.files?.[0];
                            ((e.currentTarget.value = ""),
                                null != r &&
                                    l.onUpload(
                                        ((n = r.name),
                                        (a = r.type),
                                        (0, Y.Oq)(r.size, a)
                                            ? (0, en.c9)(t, r, n, a)
                                            : Promise.resolve({ errorText: nH(a) })),
                                    ));
                        },
                    }),
                ],
            }),
            u
                ? (0, r.jsxs)("div", {
                      className: nX.vG,
                      children: [
                          (0, r.jsx)("div", {
                              className: nX.Hs,
                              children: (0, r.jsx)(nM.k, {
                                  label: eu.intl.string(eo.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: eu.intl.string(eo.default.AVhvn8),
                                  value: d,
                                  onChange: (e) => m(e),
                                  onKeyDown: (e) => {
                                      "Enter" === e.key
                                          ? (e.preventDefault(), g())
                                          : "Escape" === e.key && (e.stopPropagation(), c(!1));
                                  },
                                  autoFocus: !0,
                                  type: "url",
                                  error: null == h && l.error?.source === "link" ? l.error.text : null,
                                  disabled: n,
                                  "data-conjure-own-image-link-input": !0,
                              }),
                          }),
                          (0, r.jsxs)("div", {
                              className: nX.gd,
                              children: [
                                  (0, r.jsx)(N.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: eu.intl.string(eo.default.FbRbeM),
                                      loading: "link" === h,
                                      disabled: n || "" === d.trim(),
                                      onClick: g,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, r.jsx)(nb.Q, {
                                      variant: "secondary",
                                      textVariant: "text-sm/medium",
                                      text: eu.intl.string(eo.default.eXZL4X),
                                      onClick: () => c(!1),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
            l.error?.source === "upload"
                ? (0, r.jsx)(j.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      "data-conjure-own-image-error": !0,
                      children: l.error.text,
                  })
                : null,
        ],
    });
}
var n0 = l(29073),
    n1 = l(384017);
function n2(e) {
    let { option: t, position: l, disabled: n, onPick: a, reachable: s = !0, selected: u } = e,
        c = i.useId(),
        d = !0 === t.recommended,
        m = null != t.detail && "" !== t.detail;
    return (0, r.jsxs)(b.D, {
        className: o()(n1.uK, { [n1.ue]: n, [n1.h4]: !0 === u }),
        onClick: n ? void 0 : () => a(t),
        "aria-label": eu.intl.formatToPlainString(d ? eo.default["2p6UFz"] : eo.default.AQbxhf, { answer: t.label }),
        "aria-describedby": m ? c : void 0,
        "aria-disabled": n,
        role: null != u ? "checkbox" : void 0,
        "aria-checked": u,
        tabIndex: s ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            null != u
                ? (0, r.jsx)("span", { className: n1.dy, children: (0, r.jsx)(np.P, { checked: u, disabled: n }) })
                : (0, r.jsx)("span", { className: n1.Gy, "aria-hidden": !0, children: l }),
            (0, r.jsxs)("span", {
                className: n1.qO,
                children: [
                    (0, r.jsx)("span", {
                        className: n1.l8,
                        children: (0, r.jsx)(j.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: n1.ed,
                            children: t.label,
                        }),
                    }),
                    m
                        ? (0, r.jsx)(j.E, {
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
                ? (0, r.jsx)(j.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: n1.rM,
                      children: eu.intl.string(eo.default.zku6r1),
                  })
                : null,
        ],
    });
}
function n3(e) {
    let { projectId: t, question: l, selected: n, disabled: a, reachable: i = !0, onPick: s, own: o } = e,
        u = !0 === l.multi_select;
    return nk(l)
        ? (0, r.jsx)(nY, { projectId: t, question: l, selectedIds: n, disabled: a, reachable: i, onPick: s, own: o })
        : (0, r.jsx)(r.Fragment, {
              children: l.options.map((e, t) =>
                  (0, r.jsx)(
                      n2,
                      {
                          option: e,
                          position: t + 1,
                          disabled: a,
                          selected: u ? n.includes(e.id) : void 0,
                          onPick: s,
                          reachable: i,
                      },
                      e.id,
                  ),
              ),
          });
}
let n4 = [];
function n6(e) {
    let {
            projectId: t,
            question: l,
            draft: n,
            selected: a,
            direction: i,
            disabled: s,
            ownImage: u,
            ownSelected: c,
        } = e,
        d = "" === n.trim() ? null : n,
        m = !0 === l.multi_select;
    return (0, r.jsxs)("div", {
        className: o()(n1.Ge, n1.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            m
                ? (0, r.jsx)(j.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: n1.aK,
                      children: eu.intl.string(eo.default.tE8qbz),
                  })
                : null,
            (0, r.jsx)(n3, {
                projectId: t,
                question: l,
                selected: a,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: nN(u, c),
            }),
            nk(l)
                ? null
                : (0, r.jsxs)("div", {
                      className: n1.Xy,
                      children: [
                          (0, r.jsx)("span", {
                              className: n1.Gy,
                              "aria-hidden": !0,
                              children: (0, r.jsx)(nv.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == d ? null : (0, r.jsx)("span", { className: o()(n1.Pu, n1.es), children: d }),
                      ],
                  }),
        ],
    });
}
function n7(e) {
    var t;
    let { projectId: l, clarification: n, onSubmit: a, onDismiss: s } = e,
        [u, c] = i.useState({}),
        [d, m] = i.useState({}),
        [f, h] = i.useState({}),
        [g, x] = i.useState(0),
        [p, v] = i.useState(null),
        [k, w] = i.useState(null),
        [A, S] = i.useState(null),
        [C, E] = i.useState(!1),
        I = i.useRef(null),
        [M, T] = i.useState(null),
        _ = i.useRef(null),
        R = i.useRef(0),
        L = null == a,
        D = n.questions.length,
        $ = Math.min(g, D - 1),
        F = n.questions[$],
        [z, O] = i.useState({ id: F.id, expanded: !1 }),
        G = z.id === F.id && z.expanded,
        [U, q] = i.useState(null),
        H = d[F.id] ?? "",
        B = !0 === F.multi_select,
        K = nk(F),
        V = B ? (f[F.id] ?? n4) : ((t = u[F.id]), t?.kind === "option" ? [t.optionId] : nw),
        W = (function (e, t, l) {
            let [n, a] = i.useState({}),
                [r, s] = i.useState({}),
                [o, u] = i.useState({}),
                c = eu.intl.string(eo.default.wTsP5l),
                d = i.useCallback((e) => n[e] ?? null, [n]),
                m = i.useCallback(
                    (e) => null != n[e.id] && (!0 === e.multi_select ? !0 === o[e.id] : t[e.id]?.kind === "image"),
                    [t, n, o],
                ),
                f = i.useCallback(
                    (e) => {
                        let t = n[e.id];
                        return null != t && !0 === o[e.id] ? { attachment: t.attachment, text: c } : void 0;
                    },
                    [c, n, o],
                ),
                h = i.useCallback(
                    (i, o) => {
                        let d = i.id,
                            f = !0 === i.multi_select,
                            h = n[d] ?? null;
                        if (o) return nN(h, m(i));
                        function g(e) {
                            return s((t) => ({ ...t, [d]: e }));
                        }
                        function x(e) {
                            return { kind: "image", attachment: e.attachment, text: c };
                        }
                        let p = t[d];
                        function v(t) {
                            (a((l) => {
                                let n = l[d];
                                return (
                                    null != n && (0, en.Vm)(e, n.attachment.id).catch(() => void 0), { ...l, [d]: t }
                                );
                            }),
                                g({ busy: null, error: null }),
                                f ? u((e) => ({ ...e, [d]: !0 })) : l((e) => (e[d] === p ? { ...e, [d]: x(t) } : e)));
                        }
                        return {
                            image: h,
                            selected: m(i),
                            busy: r[d]?.busy ?? null,
                            error: r[d]?.error ?? null,
                            onPick: () => {
                                null != h &&
                                    (f ? u((e) => ({ ...e, [d]: !0 !== e[d] })) : l((e) => ({ ...e, [d]: x(h) })));
                            },
                            onRemove: () => {
                                null != h &&
                                    ((0, en.Vm)(e, h.attachment.id).catch(() => void 0),
                                    a((e) => {
                                        let { [d]: t, ...l } = e;
                                        return l;
                                    }),
                                    u((e) => ({ ...e, [d]: !1 })),
                                    l((e) => {
                                        if (e[d]?.kind !== "image") return e;
                                        let { [d]: t, ...l } = e;
                                        return l;
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
                                                error: { source: "upload", text: eu.intl.string(eo.default["kUw/b1"]) },
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
                                                        : eu.intl.string(eo.default.l79PMc),
                                            },
                                        }),
                                        !1
                                    ),
                                )
                            ),
                        };
                    },
                    [c, t, n, e, m, l, r],
                );
            return { imageFor: d, selectedFor: m, multiPartFor: f, controlsFor: h };
        })(l, u, c),
        X = W.imageFor(F.id),
        J = W.selectedFor(F),
        { text: Q, phase: Y } = (0, ti.Q)(F.question),
        Z = Q === F.question,
        ee = Z && U?.id === F.id && U.truncated;
    i.useLayoutEffect(() => {
        if (null == M || G || !Z) return;
        function e() {
            if (null == M) return;
            let e = M.scrollHeight > M.clientHeight + 1;
            q((t) => (t?.id === F.id && t.truncated === e ? t : { id: F.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(M), () => t.disconnect());
    }, [Z, M, F.id, G]);
    let et = eu.intl.string(G ? eu.t.iTcuma : eu.t.dcl9MQ),
        el = i.useCallback(
            (e) => {
                if (null == a) return;
                let t = n.questions
                    .map((t, l) => ({ question: t, index: l, answer: e[t.id] }))
                    .filter((e) => null != e.answer && "" !== e.answer.text.trim())
                    .map((e) => {
                        let { question: t, index: l, answer: n } = e;
                        return `${l + 1}. ${t.question} \u{2192} ${n.text.trim()}`;
                    })
                    .join("\n");
                if ("" !== t) {
                    let l;
                    a(
                        t,
                        (l = n.questions.flatMap((t) => {
                            let l = e[t.id];
                            if (null == l || "" === l.text.trim()) return [];
                            let n = "option" === l.kind ? [l.optionId] : "multi" === l.kind ? l.optionIds : [],
                                a = "custom" === l.kind ? l.text.trim() : "multi" === l.kind ? l.custom : void 0,
                                r = "image" === l.kind || "multi" === l.kind ? l.attachment : void 0;
                            return [
                                {
                                    question_id: t.id,
                                    option_ids: n,
                                    ...(null != a && "" !== a ? { custom: a } : {}),
                                    ...(null != r ? { attachment_id: r.id } : {}),
                                },
                            ];
                        })).length > 0
                            ? { clarification_id: n.id, answers: l }
                            : null,
                        n.questions.flatMap((t) => {
                            let l = e[t.id];
                            return null == l || "" === l.text.trim()
                                ? []
                                : "image" === l.kind || ("multi" === l.kind && null != l.attachment)
                                  ? [l.attachment]
                                  : [];
                        }),
                    );
                }
            },
            [n, a],
        ),
        ea = i.useCallback(
            (e, t) => {
                R.current += 1;
                let l = R.current;
                (v({ direction: t, moves: l }),
                    w({ question: F, draft: H, selected: V, ownImage: X, ownSelected: J, direction: t, moves: l }),
                    E(!0),
                    x(e));
            },
            [H, X, J, F, V],
        ),
        er = i.useCallback(() => {
            let e = I.current,
                t = _.current;
            null != e && null != t && S({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    i.useLayoutEffect(() => {
        let e = I.current,
            t = _.current;
        if (null == e || null == t) return;
        er();
        let l = new ResizeObserver(er);
        return (l.observe(e), l.observe(t), () => l.disconnect());
    }, [er]);
    let ei = p?.moves;
    i.useEffect(() => {
        if (null == ei) return;
        let e = setTimeout(() => w(null), 400),
            t = setTimeout(() => E(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [ei]);
    let es = i.useCallback(
            (e) => {
                if (L) return;
                let t = { ...u, [F.id]: e };
                c(t);
                let l =
                    $ < n.questions.length - 1
                        ? $ + 1
                        : (function (e, t, l) {
                              let { questions: n } = e;
                              for (let e = 1; e <= n.length; e++) {
                                  let a = (l + e) % n.length,
                                      r = t[n[a].id];
                                  if (null == r || "" === r.text.trim()) return a;
                              }
                              return null;
                          })(n, t, $);
                null == l ? el(t) : ea(l, l < $ ? "back" : "forward");
            },
            [u, n, L, $, F.id, el, ea],
        ),
        ec = i.useCallback(() => {
            L || 0 === $ || ea($ - 1, "back");
        }, [L, $, ea]),
        ed = $ > 0 && !L,
        em = i.useCallback(
            (e) => {
                m((e) => ({ ...e, [F.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                K ? L || c((e) => ({ ...e, [F.id]: t })) : es(t);
            },
            [L, K, F.id, es],
        ),
        { multiPartFor: ef } = W,
        eh = i.useMemo(() => {
            var e;
            let t, l;
            return B
                ? ((e = ef(F)),
                  (t = H.trim()),
                  (l = F.options.filter((e) => V.includes(e.id)).map((e) => e.label)),
                  {
                      kind: "multi",
                      optionIds: V,
                      ...("" === t ? {} : { custom: t }),
                      ...(null == e ? {} : { attachment: e.attachment }),
                      text: [...l, ...(null == e ? [] : [e.text]), ...("" === t ? [] : [t])].join(", "),
                  })
                : null;
        }, [H, B, ef, F, V]),
        eg = W.controlsFor(F, L),
        ex = i.useCallback(() => {
            if (null != eh) {
                "" !== eh.text && es(eh);
                return;
            }
            let e = H.trim();
            "" !== e && es({ kind: "custom", text: e });
        }, [H, eh, es]),
        [ep, ev] = i.useState(!1),
        [ej, eb] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => ev(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let ey = i.useCallback(() => {
            null != s && (eb(!0), setTimeout(s, 150));
        }, [s]),
        ek = i.useMemo(
            () =>
                null != eh
                    ? "" !== eh.text
                        ? eh
                        : null
                    : "" !== H.trim()
                      ? { kind: "custom", text: H.trim() }
                      : (u[F.id] ?? null),
            [u, H, eh, F.id],
        ),
        ew = null != ek && !L,
        eN = $ === D - 1,
        eA = i.useCallback(() => {
            null == ek || L || es(ek);
        }, [L, ek, es]),
        eS = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, tR.vq)(e.target, HTMLTextAreaElement) ||
                    (0, tR.vq)(e.target, HTMLInputElement) ||
                    ((!(0, tR.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && ed
                            ? (e.preventDefault(), ec())
                            : "ArrowRight" === e.key && ew && (e.preventDefault(), eA())));
            },
            [ed, ew, ec, eA],
        );
    return (0, r.jsxs)("section", {
        className: o()(n1.$O, { [n1.fI]: ep && !ej, [n1.Oh]: ej }),
        role: "dialog",
        "aria-label": F.question,
        "data-conjure-clarification": n.id,
        "data-state": L ? "inert" : "open",
        "data-question-expanded": G ? "true" : void 0,
        "data-step": $,
        tabIndex: -1,
        onKeyDown: eS,
        children: [
            (0, r.jsxs)("div", {
                className: n1.rf,
                style: null == A ? void 0 : { height: A.heading + A.rows },
                "data-moving": C ? "" : void 0,
                children: [
                    (0, r.jsxs)("div", {
                        ref: I,
                        className: n1.wx,
                        children: [
                            (0, r.jsx)(j.E, {
                                ref: T,
                                tag: "span",
                                id: `${F.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: G ? void 0 : 5,
                                className: o()(n0.TK, n1.R_, { [n1.TB]: "exit" === Y, [n1.JU]: "enter" === Y }),
                                children: Q,
                            }),
                            ee || G
                                ? (0, r.jsx)("div", {
                                      className: n0.Q7,
                                      children: (0, r.jsx)(y.m, {
                                          text: et,
                                          children: (0, r.jsx)(t8.K, {
                                              icon: G ? tn.t : tU.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => O({ id: F.id, expanded: !G }),
                                              "aria-label": et,
                                              "aria-controls": `${F.id}-label`,
                                              "aria-expanded": G,
                                          }),
                                      }),
                                  })
                                : null,
                            null == s
                                ? null
                                : (0, r.jsx)(b.D, {
                                      className: o()(n0.gb, n0.Q7),
                                      onClick: ey,
                                      "aria-label": eu.intl.string(eo.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, r.jsx)(P.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: n1.Cg,
                        style: null == A ? void 0 : { insetBlockStart: A.heading },
                        children: (0, r.jsxs)("div", {
                            className: n1.I,
                            children: [
                                (0, r.jsxs)("div", {
                                    ref: _,
                                    className: n1.Ge,
                                    role: "group",
                                    "aria-labelledby": `${F.id}-label`,
                                    "data-direction": p?.direction,
                                    "data-parity": null == p ? void 0 : p.moves % 2,
                                    children: [
                                        B
                                            ? (0, r.jsx)(j.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: n1.aK,
                                                  children: eu.intl.string(eo.default.tE8qbz),
                                              })
                                            : null,
                                        (0, r.jsx)(n3, {
                                            projectId: l,
                                            question: F,
                                            selected: V,
                                            disabled: L,
                                            onPick: (e) =>
                                                B
                                                    ? h((t) => {
                                                          var l, n;
                                                          let a;
                                                          return {
                                                              ...t,
                                                              [F.id]:
                                                                  ((l = t[F.id] ?? n4),
                                                                  (n = e.id),
                                                                  (a = l.includes(n)
                                                                      ? l.filter((e) => e !== n)
                                                                      : [...l, n]),
                                                                  F.options
                                                                      .filter((e) => a.includes(e.id))
                                                                      .map((e) => e.id)),
                                                          };
                                                      })
                                                    : em(e),
                                            own: eg,
                                        }),
                                        K
                                            ? null
                                            : (0, r.jsxs)("div", {
                                                  className: n1.Xy,
                                                  children: [
                                                      (0, r.jsx)("span", {
                                                          className: n1.Gy,
                                                          "aria-hidden": !0,
                                                          children: (0, r.jsx)(nv.PencilIcon, {
                                                              size: "custom",
                                                              width: 20,
                                                              height: 20,
                                                              color: "currentColor",
                                                          }),
                                                      }),
                                                      (0, r.jsx)(nj.y, {
                                                          value: H,
                                                          onChange: (e) => {
                                                              let { value: t } = e.currentTarget;
                                                              m((e) => ({ ...e, [F.id]: t }));
                                                          },
                                                          onKeyDown: (e) => {
                                                              "Enter" !== e.key ||
                                                                  e.shiftKey ||
                                                                  e.nativeEvent.isComposing ||
                                                                  (e.preventDefault(), ex());
                                                          },
                                                          placeholder: eu.intl.string(eo.default["tOC+tn"]),
                                                          "aria-label": eu.intl.formatToPlainString(
                                                              eo.default["4JeYPB"],
                                                              { question: F.question },
                                                          ),
                                                          disabled: L,
                                                          rows: 1,
                                                          className: n1.Pu,
                                                          "data-conjure-clarification-other": F.id,
                                                      }),
                                                  ],
                                              }),
                                    ],
                                }),
                                null == k
                                    ? null
                                    : (0, r.jsx)(
                                          n6,
                                          {
                                              projectId: l,
                                              question: k.question,
                                              draft: k.draft,
                                              selected: k.selected,
                                              ownImage: k.ownImage,
                                              ownSelected: k.ownSelected,
                                              direction: k.direction,
                                              disabled: L,
                                          },
                                          k.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            D > 1 || B || K
                ? (0, r.jsxs)("div", {
                      className: n0.qr,
                      children: [
                          (0, r.jsx)(j.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  D > 1
                                      ? eu.intl.formatToPlainString(eo.default.yzYUjq, { index: $ + 1, total: D })
                                      : null,
                          }),
                          (0, r.jsxs)("div", {
                              className: n0.zt,
                              children: [
                                  ed
                                      ? (0, r.jsx)(nb.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: eu.intl.string(eo.default.Pk5lfA),
                                            onClick: ec,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  (0, r.jsx)(N.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: eu.intl.string(eN ? eu.t.geKm7t : eo.default.w1nRmT),
                                      disabled: !ew,
                                      onClick: eA,
                                      "data-conjure-clarification-next": !0,
                                      "data-submits": eN ? "true" : void 0,
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var n5 = l(957764),
    n8 = l(411236);
function n9(e) {
    let { projectId: t, request: l, onDismiss: n } = e,
        a = null != l.note && "" !== l.note ? l.note : eu.intl.string(eo.default.XuOf5s);
    return (0, r.jsx)(n5.A, {
        projectId: t,
        scopeKeys: l.keys,
        notifyAgent: !0,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: l, saving: i, submit: s } = e;
            function u(e) {
                (e.preventDefault(), s());
            }
            let c = (0, r.jsx)(N.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: i,
                disabled: !l,
                text: eu.intl.string(eo.default.A7dQd9),
            });
            return null == n
                ? (0, r.jsxs)("form", {
                      className: n8.Mk,
                      onSubmit: u,
                      children: [
                          (0, r.jsx)(j.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: eu.intl.string(eo.default["jZjP+I"]),
                          }),
                          (0, r.jsx)(j.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              selectable: !0,
                              children: a,
                          }),
                          t,
                          (0, r.jsx)("div", { className: n8.p0, children: c }),
                      ],
                  })
                : (0, r.jsxs)("form", {
                      className: o()(n0.nd, n0.jx),
                      "aria-label": eu.intl.string(eo.default["jZjP+I"]),
                      onSubmit: u,
                      children: [
                          (0, r.jsxs)("div", {
                              className: n0.wx,
                              children: [
                                  (0, r.jsx)(j.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: n0.TK,
                                      children: eu.intl.string(eo.default["jZjP+I"]),
                                  }),
                                  (0, r.jsx)(b.D, {
                                      className: o()(n0.gb, n0.Q7),
                                      onClick: n,
                                      "aria-label": eu.intl.string(eo.default["iq+Pte"]),
                                      children: (0, r.jsx)(P.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: n8.DQ,
                              children: [
                                  (0, r.jsx)(j.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      selectable: !0,
                                      children: a,
                                  }),
                                  t,
                              ],
                          }),
                          (0, r.jsx)("div", {
                              className: n0.qr,
                              children: (0, r.jsx)("div", { className: n0.zt, children: c }),
                          }),
                      ],
                  });
        },
    });
}
var ae = l(935208);
let at = "VibegrationsComposerDrafts";
function al() {
    return lK.w.get(at) ?? {};
}
let an = new Map(),
    aa = lc().throttle(() => {
        if (0 === an.size) return;
        let e = al();
        for (let [t, l] of an) "" === l ? delete e[t] : (e[t] = l);
        (an.clear(), lK.w.set(at, e));
    }, 1e3);
class ar extends m.Ay.Store {
    getDraft(e) {
        let t = an.get(e);
        return null != t ? t : (al()[e] ?? "");
    }
}
let ai = new ar(n_.h, {
    LOGOUT: function () {
        return (an.clear(), aa.cancel(), lK.w.remove(at), !1);
    },
    CONJURE_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: l } = e;
        return (an.set(t, l), aa(), "" === l && aa.flush(), !1);
    },
});
function as(e) {
    return "" !== ai.getDraft(e).trim();
}
var ao = l(29080),
    au = l(46054),
    ac = l(615839);
function ad(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : eu.intl.string(eo.default.KcFvbo);
}
function am(e) {
    var t;
    let l,
        n,
        { steps: a, content: r, hasProposal: i, hasAttachments: s } = e,
        o = (0, l7.B4)(a),
        u = o.filter((e) => "message" === e.type).at(-1),
        c =
            !i &&
            null != u &&
            ((t = u.content),
            (l = t.trim()),
            (n = r.trim()),
            "" !== l && "" !== n && (l === n || (t.length >= 16e3 && n.startsWith(l))))
                ? u
                : null,
        d = o.filter((e) => e !== c),
        m = d.filter((e) => "message" === e.type).at(-1),
        f = !i && "" !== r.trim();
    return {
        streamed: d,
        lastStreamedMessage: m,
        replyKey: c?.key,
        showsClosingMessage: f,
        closingContent: f ? r.trim() : "",
        attachmentsHost: (function (e) {
            let { hasAttachments: t, showsClosingMessage: l, endsOnStreamedMessage: n } = e;
            return t ? (l ? "closing" : n ? "streamed" : "standalone") : "none";
        })({ hasAttachments: s, showsClosingMessage: f, endsOnStreamedMessage: (0, l7.Lf)(a) }),
    };
}
(l(134528), l(947204));
var af = l(62617);
let ah = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    ag = {
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
    ax = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, af.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, af.Z)(),
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": n,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        goat: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, af.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, af.Z)(),
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": n,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-orange-40)",
        },
        frog: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, af.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, af.Z)(),
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": n,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-green-40)",
        },
        bunny: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, af.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, af.Z)(),
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": n,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-pink-40)",
        },
        cat: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, af.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, af.Z)(),
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": n,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-pink-40)",
        },
        caterpillar: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, af.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, af.Z)(),
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": n,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-green-40)",
        },
        butterfly: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, af.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, af.Z)(),
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": n,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
        dog: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, af.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, af.Z)(),
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": n,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        spider: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, af.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, af.Z)(),
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": n,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-orange-40)",
        },
        bee: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, af.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, af.Z)(),
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": n,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        bot: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, af.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
                    className: (0, af.Z)(),
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": n,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
    };
function ap(e) {
    return { ...ax[e], name: eu.intl.string(ag[e]()) };
}
function av(e) {
    return ah.includes(e) ? ap(e) : void 0;
}
function aj(e) {
    let t = new Map();
    for (let [l, n] of (function (e) {
        let t = 0,
            l = e[0] ?? "";
        for (let e = 0; e < l.length; e++) t = (31 * t + l.charCodeAt(e)) % ah.length;
        let n = new Map();
        return (
            e.forEach((e, l) => {
                n.set(e, ah[(t + l) % ah.length]);
            }),
            n
        );
    })(e))
        t.set(l, ap(n));
    return t;
}
var ab = l(60160),
    ay = l(16634);
function ak(e) {
    let { projectId: t, lane: l, Illocon: n, tint: a, name: i, connectsDown: s } = e,
        o = l.task,
        u = "running" === o.status,
        c = (0, l7.SY)(l.steps),
        d = u
            ? null != c
                ? (0, l7.WQ)(c)
                : ad(o)
            : (function (e) {
                  let t = (function (e) {
                      let [t, l] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || l !== l.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(ad(e));
                  switch (e.status) {
                      case "failed":
                          return eu.intl.formatToPlainString(eo.default.YrVgOf, { task: t });
                      case "cancelled":
                          return eu.intl.formatToPlainString(eo.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return eu.intl.formatToPlainString(eo.default["++9woZ"], {
                                  task: t,
                                  duration: (0, ac.MB)(e.durationMs),
                              });
                          return eu.intl.formatToPlainString(eo.default.nmI9Uh, { task: t });
                      default:
                          return eu.intl.formatToPlainString(eo.default.nmI9Uh, { task: t });
                  }
              })(o),
        m = u ? c : void 0,
        f =
            o.detail.length > 0 ||
            l.steps.some((e) => {
                var t;
                return e !== m || (t = e).detail.length > 0 || t.screenshots.length > 0 || t.attachments.length > 0;
            })
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          l.steps.length > 0
                              ? (0, r.jsx)("ol", {
                                    className: nh.dO,
                                    children: l.steps.map((e) =>
                                        (0, r.jsx)(
                                            ay.A,
                                            { projectId: t, node: e, presentation: "detail", active: u && e === c },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          o.detail.map((e, t) =>
                              (0, r.jsx)(
                                  "div",
                                  {
                                      className: nh.iq,
                                      children: (0, r.jsx)(ab.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, r.jsx)(ne.A, {
        glyph: (0, r.jsx)(nt.u, {
            asset: (0, r.jsx)(n, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: ad(o),
            position: "left",
            children: (0, r.jsx)("span", {
                className: nh.nC,
                children: (0, r.jsx)(n, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: d,
        live: u,
        settled: !u,
        tint: a,
        detail: f,
        connected: !0,
        connectsDown: s,
    });
}
var aw = l(998445),
    aN = l(643210),
    aA = l(648127),
    aS = l(372795),
    aC = l(163897);
let aE = "conjure-browser-viewer";
function aI(e) {
    let { projectId: t, sessionIds: l } = e,
        n = (0, m.yK)(
            [aN.A],
            () =>
                l.flatMap((e) => {
                    let l = aN.A.getTab(t, e);
                    return null == l ? [] : [l];
                }),
            [t, l],
        );
    if (0 === n.length) return null;
    let a = n.map((e) => {
        let { session: t } = e;
        return t.id;
    });
    return (0, r.jsx)("ul", {
        className: aC.kR,
        "aria-label": eu.intl.string(eo.default.Uvkr1G),
        children: n.map((e) =>
            (0, r.jsx)("li", { children: (0, r.jsx)(aM, { projectId: t, tab: e, sessionIds: a }) }, e.session.id),
        ),
    });
}
function aM(e) {
    let { projectId: t, tab: n, sessionIds: a } = e,
        [s, u] = (function () {
            let [e, t] = i.useState(null),
                [l, n] = i.useState(!1);
            return (
                i.useEffect(() => {
                    if (null == e) return;
                    let t = new IntersectionObserver(
                        (e) => {
                            let [t] = e;
                            return n(t?.isIntersecting ?? !1);
                        },
                        { rootMargin: "200px" },
                    );
                    return (t.observe(e), () => t.disconnect());
                }, [e]),
                [t, l]
            );
        })(),
        c = (0, e9.useHasModalOpen)(aE),
        [d, m] = i.useState(!1),
        f = i.useCallback((e, t) => m(t), []),
        { ended: h } = n,
        g = (0, aA.i)(n.session);
    return (0, r.jsxs)(b.D, {
        innerRef: s,
        className: o()(aC.Nr, h && aC.Xj),
        onClick: () => {
            var e;
            return (
                (e = n.session.id),
                void (0, e9.openModalLazy)(
                    async () => {
                        let { default: n } = await Promise.all([
                            l.e("459368"),
                            l.e("513843"),
                            l.e("501962"),
                            l.e("531527"),
                        ]).then(l.bind(l, 273594));
                        return (l) => (0, r.jsx)(n, { ...l, projectId: t, sessionId: e, sessionIds: a });
                    },
                    { modalKey: aE },
                )
            );
        },
        "aria-label": eu.intl.formatToPlainString(eo.default.G3a822, { title: g }),
        children: [
            (0, r.jsxs)("div", {
                className: aC.Gt,
                children: [
                    (0, r.jsx)(aS.A, {
                        projectId: t,
                        sessionId: n.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !u || c || h,
                        className: aC.Ji,
                        "aria-label": eu.intl.formatToPlainString(eo.default.rnwqXb, { name: g }),
                        onStateChange: f,
                    }),
                    d
                        ? null
                        : (0, r.jsx)("div", {
                              className: aC.qf,
                              children: (0, r.jsx)(aw.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    h
                        ? (0, r.jsx)("div", {
                              className: aC.HS,
                              children: (0, r.jsx)(j.E, {
                                  variant: "text-xs/medium",
                                  color: "text-strong",
                                  children: eu.intl.string(eo.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
            (0, r.jsxs)("span", {
                className: aC.pG,
                children: [
                    (0, r.jsx)("span", { className: o()(aC.W9, h && aC.oM) }),
                    (0, r.jsx)(j.E, {
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
var aT = l(268409);
let a_ = new WeakMap(),
    aP = new WeakMap();
function aR(e) {
    let { projectId: t, steps: l, tree: n, segment: a } = e,
        s = i.useMemo(
            () =>
                (function (e, t) {
                    let l = new Map();
                    for (let t of [...e.steps, ...e.tasks.flatMap((e) => e.steps)])
                        for (let e of t.browserSessions) l.has(e) || l.set(e, t.segment);
                    return [...l]
                        .filter((e) => {
                            let [, l] = e;
                            return null == t || l === t;
                        })
                        .map((e) => {
                            let [t] = e;
                            return t;
                        });
                })(n, a),
            [n, a],
        ),
        o = (0, m.yK)(
            [eb.Ay],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = a_.get(e);
                    if (null != t) return t;
                    let l = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = aP.get(e);
                            if (null == t) {
                                let l = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) l.push(e);
                                ((t = l), aP.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            l.set(e, t.steps);
                    return (a_.set(e, l), l);
                })(eb.Ay.getMessages(t));
                return s.filter((t) => e.get(t) === l);
            },
            [s, t, l],
        );
    return 0 === o.length
        ? null
        : (0, r.jsx)("li", { className: aT.h, children: (0, r.jsx)(aI, { projectId: t, sessionIds: o }) });
}
var aL = l(469393);
function aD(e) {
    let { proposal: t, onRestore: l } = e,
        n = (0, tt.lG)(t.authored_at);
    return (0, r.jsx)(nn, {
        title: eu.intl.string(eo.default["t+b0rz"]),
        children: (0, r.jsxs)("div", {
            className: aL.r,
            children: [
                (0, r.jsxs)("div", {
                    className: aL.z,
                    children: [
                        (0, r.jsx)(j.E, { variant: "text-md/medium", children: t.subject }),
                        null != n.relative
                            ? (0, r.jsx)(j.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  title: n.absolute ?? void 0,
                                  children: n.relative,
                              })
                            : null,
                    ],
                }),
                null != l
                    ? (0, r.jsx)(N.$, {
                          variant: "secondary",
                          size: "sm",
                          text: eu.intl.string(eo.default.H8Jfhu),
                          onClick: l,
                      })
                    : null,
            ],
        }),
    });
}
var a$ = l(231483),
    aF = l(687966),
    az = l(632015),
    aO = l(633018),
    aG = l(885574);
let aU = {
    automod: eo.default.DnWMLj,
    overlay: eo.default.liTNf3,
    widget: eo.default["EswAi+"],
    activity: eu.t.IC5Ann,
    commands: eo.default.w7JaEP,
    chat_bot: eo.default["5QSvrP"],
    bot: eo.default.VFWfz1,
};
var aq = l(176999),
    aH = (((n = {}).IMAGE = "image"), n),
    aB = (((a = {}).PRIVATE = "private"), (a.PUBLIC = "public"), a),
    aK = l(773669);
let aV = [],
    aW = {};
function aX(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function aJ(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: aH.IMAGE,
        visibility: aB.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var aQ = l(127258),
    aY = l(320095),
    aZ = l(963852),
    a0 = l(95701),
    a1 = l(889227),
    a2 = l(155718);
let a3 = ["command", "user_command", "message_command", "message"],
    a4 = new Set([a2.kc.CHAT, a2.kc.USER, a2.kc.MESSAGE]);
function a6(e) {
    return e.type ?? a2.kc.CHAT;
}
function a7(e) {
    return "launch" !== e.kind && a4.has(a6(e));
}
function a5(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function a8(e, t) {
    let l = a3.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        n = [...l.filter((e) => !a5(e)), ...l.filter(a5)].slice(0, 3);
    for (let a of t || 1 === l.length ? e : []) {
        if (n.length >= 3) break;
        n.includes(a) || a5(a) || n.push(a);
    }
    return a3.flatMap((t) => e.filter((e) => e.kind === t && n.includes(e)));
}
let a9 = new a0.nA({ id: "1337", guild_id: "1337", type: ev.rbe.GUILD_TEXT, name: "preview" });
function re(e, t) {
    let {
            bot: l = !1,
            discriminator: n = "0000",
            enabled: a = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = (0, m.bG)([tW.default], () => tW.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            a && r?.username !== t && (0, tJ.nj)(new a1.A({ id: e, username: t, discriminator: n, bot: l }));
        }, [a, r, e, t, n, l]),
        r
    );
}
let rt = /^@\S+/;
var rl = l(628284),
    rn = l(97808),
    ra = l(778712),
    rr = l(809115),
    ri = l(486020),
    rs = l(200700);
let ro = {
        alert: { label: () => eu.intl.string(eo.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => eu.intl.string(eo.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => eu.intl.string(eo.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => eu.intl.string(eo.default.RGzFNK), blockedStyle: !1 },
    },
    ru = {
        blocked: { label: () => eu.intl.string(eo.default.YdnZ8q), tone: "red" },
        alert: { label: () => eu.intl.string(eo.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => eu.intl.string(eo.default.RGzFNK), tone: "green" },
    },
    rc = ["blocked", "alert", "allowed"],
    rd = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
var rm = l(984097),
    rf = l(13673);
let rh = { blocked: a$.ShieldIcon, alert: t2.BellIcon, allowed: rl.y },
    rg = {
        blurple: { text: "text-brand", icon: L.A.colors.TEXT_BRAND },
        red: { text: "text-feedback-critical", icon: L.A.colors.TEXT_FEEDBACK_CRITICAL },
        green: { text: "text-feedback-positive", icon: L.A.colors.TEXT_FEEDBACK_POSITIVE },
    };
function rx(e) {
    var t, l;
    let n,
        a,
        { example: i } = e,
        s =
            "" ===
            (a = [
                "timeout" !== (t = i).outcome || null == t.timeout_seconds
                    ? null
                    : eu.intl.formatToPlainString(eu.t["3LYql6"], {
                          duration:
                              ((l = t.timeout_seconds),
                              null != (n = (0, rs.getFriendlyDurationString)(l))
                                  ? n
                                  : l % 604800 == 0
                                    ? eu.intl.formatToPlainString(eu.t.EmoBD2, { weeks: l / 604800 })
                                    : l % 86400 == 0
                                      ? eu.intl.formatToPlainString(eu.t["k2UNz+"], { days: l / 86400 })
                                      : l % 3600 == 0
                                        ? eu.intl.formatToPlainString(eu.t.xCjYxK, { hours: l / 3600 })
                                        : l % 60 == 0
                                          ? eu.intl.formatToPlainString(eu.t.opVZ9q, { mins: l / 60 })
                                          : eu.intl.formatToPlainString(eu.t["4zv/jq"], { secs: l })),
                      }),
                i.reason,
            ]
                .filter((e) => null != e && "" !== e)
                .join(" "))
                ? null
                : a;
    return null == s
        ? null
        : (0, r.jsx)(j.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              lineClamp: 2,
              selectable: !0,
              children: s,
          });
}
function rp(e) {
    var t;
    let { example: l } = e,
        { label: n, blockedStyle: a } = ro[l.outcome];
    return (0, r.jsxs)("li", {
        className: o()(rm.nM, { [o()(rm.HV, rf.DX)]: a }),
        children: [
            (0, r.jsx)(k.A, { children: `${n()}: ` }),
            (0, r.jsx)("span", {
                className: rm.my,
                children: (0, r.jsx)(rn.eu, {
                    src: (0, ri.AE)(void 0, void 0),
                    size: ra._3.SIZE_24,
                    "aria-label": eu.intl.string(eo.default["1yI0xV"]),
                }),
            }),
            (0, r.jsxs)("div", {
                className: rm.fw,
                children: [
                    (0, r.jsx)(j.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = l.content), au.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    (0, r.jsx)(rx, { example: l }),
                ],
            }),
        ],
    });
}
function rv(e) {
    let { group: t } = e,
        l = i.useId(),
        n = ru[t.section],
        a = rh[t.section],
        s = rg[n.tone];
    return (0, r.jsxs)("div", {
        className: rm.uW,
        children: [
            (0, r.jsxs)("div", {
                className: rm.bV,
                children: [
                    (0, r.jsx)(a, { size: "xs", color: s.icon, "aria-hidden": !0 }),
                    (0, r.jsx)(j.E, {
                        id: l,
                        variant: "text-xs/semibold",
                        color: s.text,
                        className: rm.a9,
                        children: n.label(),
                    }),
                ],
            }),
            (0, r.jsx)("ul", {
                className: rm.Ge,
                "aria-labelledby": l,
                children: t.examples.map((e, t) => (0, r.jsx)(rp, { example: e }, t)),
            }),
        ],
    });
}
function rj() {
    let { avatarSrc: e, eventHandlers: t } = (0, rr.a)(!0);
    return (0, r.jsx)("span", {
        className: rm.Gy,
        ...t,
        children: (0, r.jsx)(rn.eu, { src: e, size: ra._3.SIZE_16, "aria-label": eu.intl.string(eu.t.hG1StD) }),
    });
}
function rb(e) {
    var t;
    let { automod: l } = e;
    return (0, r.jsx)("div", {
        className: rm.K1,
        children: ((t = l.examples),
        rc
            .map((e) => ({ section: e, examples: t.filter((t) => rd[t.outcome] === e) }))
            .filter((e) => e.examples.length > 0)).map((e) => (0, r.jsx)(rv, { group: e }, e.section)),
    });
}
var ry = l(460905),
    rk = l(110384),
    rw = l(763754),
    rN = l(217424),
    rA = l(194085),
    rS = l(20851),
    rC = l(692508),
    rE = l(798819);
function rI(e) {
    let { item: t } = e,
        { iconLeft: l, icon: n } = t;
    return (0, r.jsxs)("div", {
        className: o()(rE.item, rE.labelContainer, rE.colorDefault, {
            [rE.focused]: !0 === t.highlighted,
            [rE.disabled]: !0 === t.muted,
        }),
        children: [
            null != l
                ? (0, r.jsx)("div", {
                      className: rE.iconContainerLeft,
                      children: (0, r.jsx)(l, { color: "currentColor", className: rE.icon }),
                  })
                : null,
            (0, r.jsx)("div", { className: o()(rE.label, rC.Gy), children: t.label }),
            null != n
                ? (0, r.jsx)("div", {
                      className: rE.iconContainer,
                      children: (0, r.jsx)(n, { color: "currentColor", className: rE.icon }),
                  })
                : null,
        ],
    });
}
function rM(e) {
    let { target: t, commandName: l, appIconSrc: n } = e,
        a = i.useMemo(
            () =>
                null != n
                    ? (e) => {
                          let { className: t } = e;
                          return (0, r.jsx)("img", { src: n, alt: "", className: o()(t, rC.ak) });
                      }
                    : void 0,
            [n],
        ),
        s =
            "message" === t
                ? { label: eu.intl.string(eu.t["5IEsGx"]), icon: rk.W, muted: !0 }
                : { label: eu.intl.string(eu.t.LYju5J), muted: !0 };
    return (0, r.jsx)("div", {
        className: o()(rE.menu, rC.MK),
        "aria-hidden": !0,
        children: (0, r.jsxs)("div", {
            className: rE.scroller,
            children: [
                (0, r.jsx)(rI, { item: s }),
                (0, r.jsx)("div", { className: rE.separator }),
                (0, r.jsx)(rI, { item: { label: l, iconLeft: a, highlighted: !0 } }),
            ],
        }),
    });
}
var rT = l(381941);
function r_() {}
function rP(e) {
    let t,
        l,
        n,
        a,
        s,
        u,
        c,
        d,
        f,
        h,
        g,
        { projectId: x, exchanges: p } = e,
        {
            items: v,
            botIcon: j,
            appIconSrc: b,
        } = ((t = (0, m.bG)([tW.default], () => tW.default.getCurrentUser())),
        (l = (0, m.bG)([eS.Ay], () => eS.Ay.getProject(x))),
        (n = l?.application_id),
        (a = (0, m.bG)([ld.A], () => ld.A.getApplication(n)?.getIconURL(80) ?? null, [n])),
        (s = l?.name ?? eu.intl.string(eo.default.JEYq8M)),
        (u = (0, m.bG)([tW.default], () => (null != n ? tW.default.getUser(n) : void 0), [n])),
        (d = re("31337", s, { bot: !0, enabled: !(c = u?.bot === !0) })),
        (f = c ? u : d),
        (h = re("31338", eu.intl.string(eo.default["9iAOsw"]), { discriminator: "0003" })),
        (g = re("31339", (0, tX.mG)(t) ?? "", { enabled: null != t })),
        {
            items: i.useMemo(
                () =>
                    null == t || null == g || null == f || null == h
                        ? []
                        : (function (e, t, l) {
                              var n, a, r;
                              let { bot: i, currentUser: s, viewer: o, member: u } = t,
                                  c = [];
                              function d(e, t) {
                                  let {
                                          interactionName: l,
                                          messageType: n,
                                          menu: a,
                                      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                      r = String(c.length + 1),
                                      i = (0, aY.rh)({
                                          ...(0, aZ.Ay)({
                                              channelId: a9.id,
                                              content: e,
                                              author: t,
                                              type: n ?? ev.lAJ.DEFAULT,
                                          }),
                                          id: r,
                                          state: ev.cmJ.SENT,
                                          ...(null != l
                                              ? {
                                                    interaction: {
                                                        id: r,
                                                        name: l,
                                                        type: aQ.G.APPLICATION_COMMAND,
                                                        user: (0, aZ.Vi)(s),
                                                    },
                                                }
                                              : {}),
                                      });
                                  c.push({ key: r, record: i, isCommandReply: null != l, menu: a });
                              }
                              for (let t of e)
                                  switch (t.kind) {
                                      case "command":
                                          d(t.bot, i, {
                                              interactionName: t.user.trim().replace(/^\//, "").split(/\s+/)[0] ?? "",
                                              messageType: ev.lAJ.CHAT_INPUT_COMMAND,
                                          });
                                          break;
                                      case "user_command":
                                      case "message_command": {
                                          let e = "user_command" === t.kind;
                                          (d(e ? l.memberMessage : l.targetMessage, e ? u : s, {
                                              menu: { target: e ? "user" : "message", commandName: t.user },
                                          }),
                                              d(t.bot, i, {
                                                  interactionName: t.user,
                                                  messageType: ev.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((n = t.user), n.trim().replace(rt, `<@${i.id}>`)), s),
                                              d(((a = t.bot), a.includes("<@") ? a : `<@${o.id}> ${a}`), i));
                                          break;
                                      case "event":
                                          d(((r = t.bot), r.split(`@${u.username}`).join(`<@${u.id}>`)), i);
                                  }
                              return c;
                          })(
                              p,
                              { bot: f, currentUser: t, viewer: g, member: h },
                              {
                                  targetMessage: eu.intl.string(eo.default["y+QYes"]),
                                  memberMessage: eu.intl.string(eo.default.BUTRDc),
                              },
                          ),
                [p, f, t, g, h],
            ),
            botIcon: a,
            appIconSrc: a ?? f?.getAvatarURL(void 0, 80),
        });
    return 0 === v.length
        ? null
        : (0, r.jsx)("ol", {
              className: o()(rC.TE, `group-spacing-${rT.ES}`),
              children: v.map((e) => {
                  let { key: t, record: l, isCommandReply: n, menu: a } = e;
                  return (0, r.jsxs)(
                      "li",
                      {
                          className: null != a ? rC.Rz : void 0,
                          children: [
                              (0, r.jsx)(rS.A, {
                                  message: l,
                                  channel: a9,
                                  author: (0, rw.FT)(l.author, a9),
                                  isGroupStart: !0,
                                  avatarOverride: l.author.bot ? (j ?? void 0) : void 0,
                                  childrenExecutedCommand: n ? (0, r.jsx)(rN.A, { message: l, channel: a9 }) : void 0,
                                  usernameClassName: a?.target === "user" ? rC.Ct : void 0,
                                  disableInteraction: !0,
                              }),
                              a?.target === "message"
                                  ? (0, r.jsx)("div", {
                                        className: rC.S3,
                                        inert: !0,
                                        "aria-hidden": !0,
                                        children: (0, r.jsxs)(rA.Ay, {
                                            children: [
                                                (0, r.jsx)(rA.qv, {
                                                    label: eu.intl.string(eu.t.lfIHs4),
                                                    icon: ry.n,
                                                    onClick: r_,
                                                }),
                                                (0, r.jsx)(rA.qv, {
                                                    label: eu.intl.string(eu.t["5IEsGx"]),
                                                    icon: rk.W,
                                                    onClick: r_,
                                                }),
                                                (0, r.jsx)(rA.qv, {
                                                    label: eu.intl.string(eu.t["UKOtz+"]),
                                                    icon: t9.MoreHorizontalIcon,
                                                    selected: !0,
                                                    onClick: r_,
                                                }),
                                            ],
                                        }),
                                    })
                                  : null,
                              null != a
                                  ? (0, r.jsx)("div", {
                                        className: "user" === a.target ? rC.ET : rC.je,
                                        inert: !0,
                                        children: (0, r.jsx)(rM, {
                                            target: a.target,
                                            commandName: a.commandName,
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
var rR = l(633075),
    rL = l(946356),
    rD = l(58216),
    r$ = l(27399);
function rF(e) {
    let { applicationId: t, rendererProps: l } = e,
        n = (0, m.bG)([tW.default], () => tW.default.getCurrentUser()),
        a = i.useMemo(() => new rR.R({ applicationId: t }), [t]);
    return null == n
        ? null
        : (0, r.jsx)("div", {
              className: r$.H,
              children: (0, r.jsx)(rL.A.Overlay, {
                  className: r$.w,
                  children: (0, r.jsx)(rD.A, {
                      user: n,
                      widget: a,
                      allowEditing: !1,
                      disableInteraction: !0,
                      interactiveLinks: !0,
                      disableCTA: !0,
                      rendererProps: l,
                  }),
              }),
          });
}
var rz = l(443863);
let rO = {
    automod: a$.ShieldIcon,
    overlay: aF.GameControllerIcon,
    widget: az.f,
    activity: lb.k,
    commands: aO.k,
    chat_bot: h.ChatIcon,
    bot: ly.RobotIcon,
};
function rG(e) {
    let { label: t, icon: l, info: n, children: a } = e;
    return (0, r.jsxs)("section", {
        className: rz.uW,
        children: [
            (0, r.jsxs)("span", {
                className: rz.a9,
                children: [
                    l,
                    (0, r.jsx)(j.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }),
                    n,
                ],
            }),
            a,
        ],
    });
}
function rU(e) {
    let { text: t, label: l } = e;
    return (0, r.jsx)(y.m, {
        text: t,
        children: (0, r.jsx)(b.D, {
            className: rz.bk,
            "aria-label": l,
            children: (0, r.jsx)(aG.CircleInformationIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
function rq(e) {
    let { label: t, names: l } = e;
    return 0 === l.length
        ? null
        : (0, r.jsx)(rG, {
              label: t,
              children: (0, r.jsx)("div", {
                  className: rz.Ip,
                  children: l.map((e) =>
                      (0, r.jsx)(
                          "span",
                          {
                              className: rz.jw,
                              children: (0, r.jsx)(j.E, {
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
function rH(e) {
    let { tags: t } = e;
    return (0, r.jsx)("span", {
        className: rz.K2,
        children: t.map((e) => {
            let t = rO[e];
            return (0, r.jsxs)(
                "span",
                {
                    className: rz.L6,
                    children: [
                        (0, r.jsx)(t, {
                            size: "custom",
                            width: 16,
                            height: 16,
                            color: "currentColor",
                            "aria-hidden": !0,
                        }),
                        (0, r.jsx)(j.E, {
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            tag: "span",
                            children: eu.intl.string(aU[e]),
                        }),
                    ],
                },
                e,
            );
        }),
    });
}
function rB(e) {
    let { projectId: t, design: l } = e,
        { id: n } = l,
        { src: a, gone: s, handleError: o } = nW(t, n),
        u = eu.intl.string(eo.default["3/aHX6"]),
        c = i.useCallback(() => {
            (0, en.PK)(t, n).then(
                (e) => {
                    (0, nT.R)({
                        items: [{ type: "IMAGE", url: e, alt: u }],
                        startingIndex: 0,
                        shouldHideMediaOptions: !0,
                        location: "VibegrationsChat",
                    });
                },
                () => {},
            );
        }, [t, n, u]);
    return s
        ? null
        : (0, r.jsx)(rG, {
              label: eu.intl.string(eo.default.X15LLY),
              info: (0, r.jsx)(rU, {
                  text: eu.intl.string(eo.default.nR4B8P),
                  label: eu.intl.string(eo.default.nc0SNY),
              }),
              children: (0, r.jsx)(b.D, {
                  className: rz.xX,
                  onClick: c,
                  "aria-label": eu.intl.string(eo.default.TvAPIm),
                  children: null != a ? (0, r.jsx)("img", { src: a, alt: u, className: rz.sN, onError: o }) : null,
              }),
          });
}
function rK(e) {
    let t,
        l,
        { projectId: n, proposal: a, version: s, onApprove: o } = e,
        { automod: u } = a,
        { botInteraction: c, botExchanges: d } =
            ((t = (function (e) {
                if (null != e.bot) return e.bot.interaction;
                let t = e.commands.some(a7),
                    l = e.privileged_intents?.includes("MESSAGE_CONTENT") === !0;
                return t && l
                    ? "both"
                    : t
                      ? "commands"
                      : l
                        ? "messages"
                        : !0 === e.is_activity || null != e.automod || null != e.widget_config
                          ? null
                          : "events";
            })(a)),
            (l = i.useMemo(
                () =>
                    null == t
                        ? []
                        : (function (e, t, l) {
                              let n = e.bot?.example_exchanges ?? [],
                                  a = { kind: "event", user: "", bot: l.event };
                              if ("events" === t) {
                                  let e = n.slice(0, 3).map((e) => {
                                      let { bot: t } = e;
                                      return "" !== t.trim() ? { ...a, bot: t } : a;
                                  });
                                  return e.length > 0 ? e : [a];
                              }
                              let r = n.flatMap((e) => {
                                      let { user: l, bot: n } = e;
                                      return "" === l.trim()
                                          ? []
                                          : [
                                                {
                                                    kind:
                                                        "messages" !== t && l.trimStart().startsWith("/")
                                                            ? "command"
                                                            : "message",
                                                    user: l,
                                                    bot: n,
                                                },
                                            ];
                                  }),
                                  i = { kind: "message", user: l.message, bot: l.reply };
                              if ("messages" === t && 0 === r.length) return [i];
                              let s = e.commands.filter(a7).map((e) =>
                                      (function (e, t) {
                                          let l = e.description?.trim() ?? "",
                                              n = "" !== l ? l : t.reply;
                                          switch (a6(e)) {
                                              case a2.kc.USER:
                                                  return { kind: "user_command", user: e.name, bot: n };
                                              case a2.kc.MESSAGE:
                                                  return { kind: "message_command", user: e.name, bot: n };
                                              default:
                                                  return { kind: "command", user: `/${e.name}`, bot: n };
                                          }
                                      })(e, l),
                                  ),
                                  o = "messages" === t ? [] : s.filter(a5),
                                  u = r.length > 0 ? a8([...r, ...o], !0) : a8("both" === t ? [...s, i] : s, !1);
                              return u.length > 0 ? u : [a];
                          })(a, t, {
                              message: eu.intl.string(eo.default.J7qggf),
                              reply: eu.intl.string(eo.default.nqYtiy),
                              event: eu.intl.string(eo.default["05lU9W"]),
                          }),
                [a, t],
            )),
            { botInteraction: t, botExchanges: l }),
        f = (function (e, t) {
            let { widget_config: l, widget_preview: n } = t,
                a = (0, m.bG)([aK.default], () => aK.default.locale),
                r = (0, m.bG)([eS.Ay], () => {
                    let t = eS.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [l, n] = i.useState(aW);
                    return (
                        i.useEffect(() => {
                            let l = Object.entries(t ?? {});
                            if (0 === l.length) return;
                            let a = !1;
                            return (
                                Promise.all(
                                    l.map((t) => {
                                        let [l, n] = t;
                                        return (0, en.PK)(e, n.id).then(
                                            (e) => [l, e],
                                            () => null,
                                        );
                                    }),
                                ).then(
                                    (e) => {
                                        a || n(Object.fromEntries(e.filter((e) => null != e)));
                                    },
                                    () => {},
                                ),
                                () => {
                                    a = !0;
                                }
                            );
                        }, [e, t]),
                        l
                    );
                })(e, n?.images),
                o = i.useMemo(
                    () =>
                        null == l || null == n
                            ? null
                            : (function (e, t, l, n) {
                                  let a = {};
                                  for (let [t, l] of Object.entries(e.surfaces))
                                      null != l &&
                                          (a[t] = (function (e) {
                                              let t = {};
                                              for (let [l, n] of Object.entries(e.components)) {
                                                  let e = {};
                                                  for (let [t, l] of Object.entries(n.fields))
                                                      e[t] = {
                                                          ...aX(l),
                                                          ...(null != l.fallback ? { fallback: aX(l.fallback) } : {}),
                                                      };
                                                  t[l] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(l));
                                  let r = aq.uW.safeParse(a);
                                  if (!r.success) return null;
                                  let i = r.data;
                                  return null == i[tw.m.WIDGET_TOP] || null == i[tw.m.WIDGET_BOTTOM]
                                      ? null
                                      : {
                                            locale: n,
                                            surfaceConfigs: i,
                                            isLoading: !1,
                                            hasIdentity: !0,
                                            resolutionContext: {
                                                data: (function (e, t, l) {
                                                    let n = (function (e) {
                                                            let t = new Map();
                                                            for (let l of Object.values(e.surfaces))
                                                                for (let e of Object.values(l?.components ?? {}))
                                                                    for (let l of Object.values(e.fields))
                                                                        "data" !== l.value_type ||
                                                                            t.has(l.value) ||
                                                                            t.set(l.value, l.presentation_type);
                                                            return t;
                                                        })(e),
                                                        a = {};
                                                    for (let [e, r] of Object.entries(t.sample_data ?? {}))
                                                        if ("image" === n.get(e)) {
                                                            let t = l[String(r)];
                                                            null != t &&
                                                                (a[e] = {
                                                                    type: aq.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof r
                                                                ? (a[e] = { type: aq.oG.NUMBER, value: r })
                                                                : (a[e] = { type: aq.oG.STRING, value: r });
                                                    return a;
                                                })(e, t, l),
                                                applicationAssets: Object.keys(l).map(aJ),
                                                getApplicationAssetUrl: (e) => l[e.key] ?? "",
                                                localizedStrings: aV,
                                            },
                                        };
                              })(l, n, s, a),
                    [l, n, s, a],
                );
            return i.useMemo(() => (null == r || null == o ? null : { applicationId: r, rendererProps: o }), [r, o]);
        })(n, a),
        h = s?.superseded === !0,
        g = a.what_changed?.trim() ?? "";
    return (0, r.jsxs)(ni, {
        title:
            h && null != s
                ? eu.intl.formatToPlainString(eo.default.YZ3qJs, { version: s.version })
                : eu.intl.string(eo.default["3b6e7o"]),
        meta: h
            ? (0, r.jsx)(nr, { children: eu.intl.string(eo.default.hF2c41) })
            : (0, r.jsx)(rH, {
                  tags: (function (e, t) {
                      if (null != e.automod) return ["automod"];
                      let l = [];
                      return (e.supported_surfaces?.includes(Y.q7.OVERLAY) === !0 && l.push("overlay"),
                      null != e.widget_config && l.push("widget"),
                      !0 === e.is_activity)
                          ? [...l, "activity"]
                          : null == t
                            ? [...l, "bot"]
                            : (("commands" === t || "both" === t) && l.push("commands"),
                              "commands" !== t && l.push("chat_bot"),
                              l);
                  })(a, c),
              }),
        superseded: h,
        showLabel: eu.intl.string(eo.default.yD8EJS),
        hideLabel: eu.intl.string(eo.default.nSPGNb),
        bodyClassName: rz.rf,
        "data-conjure-plan-card": !0,
        children: [
            "" !== g
                ? (0, r.jsx)(rG, {
                      label: eu.intl.string(eo.default.iNS4dl),
                      children: (0, r.jsx)(j.E, {
                          variant: "experimental/body-md/normal",
                          color: "text-default",
                          selectable: !0,
                          children: g,
                      }),
                  })
                : null,
            (0, r.jsx)(j.E, {
                variant: "experimental/body-md/normal",
                color: "text-default",
                selectable: !0,
                children: a.summary,
            }),
            null != u && u.examples.length > 0
                ? (0, r.jsx)(rG, {
                      label: eu.intl.string(eo.default.z4ZKYG),
                      icon: (0, r.jsx)(rj, {}),
                      info: (0, r.jsx)(rU, {
                          text: eu.intl.string(eo.default.bo4MOx),
                          label: eu.intl.string(eo.default.VPLNot),
                      }),
                      children: (0, r.jsx)(rb, { automod: u }),
                  })
                : null,
            null == u && null != a.design_image ? (0, r.jsx)(rB, { projectId: n, design: a.design_image }) : null,
            d.length > 0
                ? (0, r.jsx)(rG, {
                      label: eu.intl.string(eo.default.sA1lTv),
                      info: (0, r.jsx)(rU, {
                          text: eu.intl.string(eo.default.NnmbJu),
                          label: eu.intl.string(eo.default.KsqQJX),
                      }),
                      children: (0, r.jsx)(rP, { projectId: n, exchanges: d }),
                  })
                : null,
            null == u && null != f
                ? (0, r.jsx)(rG, {
                      label: eu.intl.string(eo.default.ove4zH),
                      info: (0, r.jsx)(rU, {
                          text: eu.intl.string(eo.default.XcIrHx),
                          label: eu.intl.string(eo.default["TwT+ht"]),
                      }),
                      children: (0, r.jsx)(rF, { ...f }),
                  })
                : null,
            a.changes.length > 0
                ? (0, r.jsx)(rG, {
                      label: eu.intl.string(eo.default["5+mG1z"]),
                      children: (0, r.jsx)("ul", {
                          className: rz.p_,
                          children: a.changes.map((e, t) =>
                              (0, r.jsx)(
                                  "li",
                                  {
                                      className: rz.Aw,
                                      children: (0, r.jsx)(j.E, {
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
            a.commands.length > 0
                ? (0, r.jsx)(rG, {
                      label: eu.intl.string(eu.t["0hKkS+"]),
                      children: (0, r.jsx)("ul", {
                          className: rz.p_,
                          children: a.commands.map((e, t) =>
                              (0, r.jsxs)(
                                  "li",
                                  {
                                      className: rz.uX,
                                      children: [
                                          (0, r.jsxs)(j.E, {
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
                                          (0, r.jsx)(j.E, {
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
            (0, r.jsx)(rq, { label: eu.intl.string(eo.default["2UbW6r"]), names: a.bot_permissions ?? [] }),
            (0, r.jsx)(rq, { label: eu.intl.string(eo.default["7TKfpj"]), names: a.privileged_intents ?? [] }),
            null == o || h
                ? null
                : (0, r.jsxs)("div", {
                      className: rz.o1,
                      children: [
                          (0, r.jsx)(N.$, {
                              variant: "primary",
                              size: "sm",
                              text: eu.intl.string(eo.default["6S+wRM"]),
                              onClick: o,
                          }),
                          (0, r.jsx)(j.E, {
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
function rV(e) {
    return null != e && e.status?.state === "unpublished";
}
let rW = new WeakMap();
function rX(e) {
    let { publish: t } = e,
        l = t.guildId,
        n = (0, m.bG)([J.A], () => (null == l ? null : J.A.getGuild(l)));
    return (0, r.jsx)(lv.B, {
        gap: 8,
        align: "start",
        children: (0, r.jsxs)(lv.B, {
            direction: "horizontal",
            gap: 8,
            align: "center",
            children: [
                (0, r.jsx)(y.m, {
                    text: t.disabledReason,
                    asContainer: !0,
                    children: (0, r.jsx)(N.$, {
                        variant: "primary",
                        size: "sm",
                        loading: t.publishing,
                        disabled: t.disabled,
                        onClick: () => t.run("card"),
                        text: t.label,
                    }),
                }),
                null != n
                    ? (0, r.jsxs)(lv.B, {
                          direction: "horizontal",
                          gap: 4,
                          align: "center",
                          children: [
                              (0, r.jsx)(j.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: eu.intl.string(eo.default["+HGTlC"]),
                              }),
                              (0, r.jsx)(eq.Ay, { guild: n, size: eq.Ay.Sizes.SMOL }),
                              (0, r.jsx)(j.E, {
                                  variant: "text-sm/medium",
                                  color: "text-default",
                                  lineClamp: 1,
                                  children: (function (e) {
                                      let t = Array.from(e);
                                      if (t.length <= 24) return e;
                                      let l = t.slice(0, 23).join("");
                                      return `${l.trimEnd()}\u{2026}`;
                                  })(n.name),
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    });
}
function rJ(e) {
    let { projectId: t } = e,
        l = (0, li.Ay)(t);
    return null != l && rV(l) ? (0, r.jsx)(rX, { publish: l }) : null;
}
var rQ = l(478016),
    rY = l(989271);
function rZ(e) {
    let { idea: t, selected: l, onPick: n } = e,
        a = i.useId(),
        s = null == n;
    return (0, r.jsxs)(b.D, {
        className: o()(rY.nM, { [rY.f1]: s, [rY.CZ]: l }),
        onClick: s ? void 0 : () => n(t),
        "aria-label": eu.intl.formatToPlainString(eo.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : a,
        "aria-disabled": s,
        "aria-pressed": l,
        children: [
            (0, r.jsxs)("div", {
                className: rY.jo,
                children: [
                    l
                        ? (0, r.jsx)(rQ.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: rY.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, r.jsx)(j.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: rY.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, r.jsx)(j.E, {
                      tag: "div",
                      id: a,
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function r0(e) {
    let { ideas: t, pickedIdeaIds: l, onPick: n } = e,
        [a, s] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), n?.(e));
            },
            [n],
        );
    return (0, r.jsx)(nn, {
        title: eu.intl.string(eo.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, r.jsx)(
                rZ,
                { idea: e, selected: a.has(e.id) || l?.has(e.id) === !0, onPick: null == n ? void 0 : o },
                e.id,
            ),
        ),
    });
}
function r1(e) {
    let { onAsk: t } = e;
    return (0, r.jsx)(lv.B, {
        align: "start",
        "data-conjure-ideas-offer": !0,
        children: (0, r.jsx)(N.$, {
            variant: "secondary",
            size: "sm",
            disabled: null == t,
            onClick: t,
            text: eu.intl.string(eo.default["U/bLzU"]),
        }),
    });
}
var r2 = l(530557),
    r3 = l(872162);
function r4(e, t) {
    return { cardId: e, status: "pending" === t ? null : t };
}
var r6 = l(202723);
function r7(e) {
    let { projectId: t, cardId: n, request: a, status: s, awaiting: u } = e,
        c = i.useCallback(() => {
            (0, e9.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("291953"), l.e("408337")]).then(l.bind(l, 789864));
                return (l) => (0, r.jsx)(e, { ...l, projectId: t, request: a });
            });
        }, [t, a]),
        d = i.useMemo(() => a.fields.map((e) => ({ id: e.name, label: e.label, icon: r2.R })), [a.fields]),
        m = (function (e, t) {
            let [l, n] = i.useState(() => r4(e, t));
            return l.cardId !== e || (null == l.status && "pending" !== t)
                ? (n(r4(e, t)), !1)
                : null != l.status && t !== l.status;
        })(n, s),
        f = o()(r6.Lo, { [r6.jY]: m });
    return "superseded" === s
        ? (0, r.jsx)(
              "article",
              {
                  className: f,
                  children: (0, r.jsx)(j.E, {
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      tag: "span",
                      children: eu.intl.string(eo.default.CTxtdV),
                  }),
              },
              s,
          )
        : "inactive" === s
          ? (0, r.jsxs)(
                "article",
                {
                    className: f,
                    children: [
                        (0, r.jsx)(j.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            tag: "span",
                            children: eu.intl.string(eo.default.HCQvpO),
                        }),
                        (0, r.jsx)(r3.C, { label: eu.intl.string(eo.default.HCQvpO), size: "xs", items: d }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, r.jsx)(
                  "article",
                  {
                      className: r6.Lo,
                      children: (0, r.jsx)(r3.C, { label: eu.intl.string(eo.default.HCQvpO), size: "xs", items: d }),
                  },
                  s,
              )
            : "received" === s
              ? (0, r.jsxs)(
                    "article",
                    {
                        className: f,
                        children: [
                            (0, r.jsxs)("div", {
                                className: r6.$h,
                                children: [
                                    (0, r.jsx)("span", {
                                        className: r6.c9,
                                        "aria-hidden": !0,
                                        children: (0, r.jsx)(rl.y, {
                                            size: "xs",
                                            color: L.A.colors.ICON_FEEDBACK_POSITIVE,
                                        }),
                                    }),
                                    (0, r.jsx)(j.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-feedback-positive",
                                        tag: "span",
                                        children: eu.intl.string(eo.default.sfp7Up),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(r3.C, { label: eu.intl.string(eo.default.sfp7Up), size: "xs", items: d }),
                        ],
                    },
                    s,
                )
              : (0, r.jsxs)("article", {
                    className: r6.Lo,
                    children: [
                        (0, r.jsx)(j.E, {
                            variant: "text-xs/semibold",
                            color: null != u ? "text-brand" : "text-muted",
                            tag: "span",
                            children: eu.intl.string(null != u ? eo.default.O0QIqj : eo.default.HCQvpO),
                        }),
                        (0, r.jsx)(j.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            selectable: !0,
                            children: null != a.note && "" !== a.note ? a.note : eu.intl.string(eo.default.MPGSHL),
                        }),
                        (0, r.jsx)(r3.C, { label: eu.intl.string(eo.default.HCQvpO), size: "xs", items: d }),
                        (0, r.jsx)("div", {
                            className: r6.sq,
                            children: (0, r.jsx)(N.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: c,
                                text: eu.intl.string(eo.default.EK8tKY),
                            }),
                        }),
                    ],
                });
}
var r5 = l(919790),
    r8 = l(971824),
    r9 = l(162052),
    ie = l(165648);
function it(e) {
    let t = aj(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let l = null != e.task.helperMark ? av(e.task.helperMark) : void 0,
            n = l ?? t.get(e.taskId);
        return null == n
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: n,
                      name: null != l && null != e.task.helperName ? e.task.helperName : n.name,
                      task: ad(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function il(e) {
    let {
            projectId: t,
            steps: l,
            active: n = !1,
            turnActive: a = n,
            checklistSuperseded: s = !1,
            durationMs: o,
            interrupted: u = !1,
            todos: c,
            provisionalTodo: d,
            segment: m,
            hostsChecklist: f = !0,
            reportsDuration: h = !0,
            closed: g = !1,
            segmentDurationMs: x,
        } = e,
        p = i.useMemo(() => (0, l7.Jf)(l, n), [l, n]),
        v = i.useMemo(
            () =>
                null == m
                    ? p
                    : {
                          ...p,
                          steps: p.steps.filter((e) => e.segment === m),
                          tasks: p.tasks.filter((e) => e.task.segment === m),
                      },
            [p, m],
        );
    if (u)
        return (0, r.jsx)("ol", {
            className: nh.pj,
            "data-live": !1,
            children: (0, r.jsx)(ne.A, {
                glyph: (0, r.jsx)(ao.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: eu.intl.string(eo.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = n ? void 0 : (x ?? (h ? (p.turn?.durationMs ?? o) : void 0)),
        b = f ? ((0, l7.lt)(l) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = aj(k.map((e) => e.taskId)),
        N = !g && (n || k.some((e) => "running" === e.task.status)),
        A = it(k);
    return (0, r.jsxs)("ol", {
        className: nh.pj,
        "data-live": N,
        children: [
            (0, r.jsx)(l8.A, {
                projectId: t,
                steps: v.steps,
                fallbackLabel: k.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                live: n,
                closed: g,
                durationMs: j,
                connectsDown: k.length > 0,
                tier: p.turn?.tier,
            }),
            k.map((e, l) => {
                let n = null != e.task.helperMark ? av(e.task.helperMark) : void 0,
                    a = n ?? w.get(e.taskId);
                return null == a
                    ? null
                    : (0, r.jsx)(
                          ak,
                          {
                              projectId: t,
                              lane: e,
                              Illocon: a.Illocon,
                              tint: a.tint,
                              name: null != n && null != e.task.helperName ? e.task.helperName : a.name,
                              connectsDown: l < k.length - 1,
                          },
                          e.taskId,
                      );
            }),
            (0, r.jsx)(aR, { projectId: t, steps: l, tree: p, segment: m }),
            y
                ? (0, r.jsx)("li", {
                      className: nh.YO,
                      children: (0, r.jsx)(nm, { todos: b, provisional: d, agents: A, live: a, superseded: s }),
                  })
                : null,
        ],
    });
}
function ia(e) {
    let {
            projectId: t,
            steps: l,
            content: n,
            proposal: a,
            planVersion: s,
            ideas: u,
            attachments: c,
            secretRequest: d,
            secretRequestId: m,
            secretRequestAwaiting: f,
            secretRequestStatus: h = "open",
            settingsRequest: g,
            publishCta: x,
            onPickIdea: p,
            pickedIdeaIds: v,
            onApprovePlan: b,
            sideReply: y = !1,
            sideReplyAcknowledges: k,
            hoistedProse: w = !1,
            hoistedAttachmentsHost: N,
            restoreProposal: A,
            onRestoreProposal: S,
        } = e,
        C = i.useMemo(
            () => am({ steps: l, content: n, hasProposal: null != a, hasAttachments: null != c && c.length > 0 }),
            [l, n, a, c],
        ),
        { streamed: E, lastStreamedMessage: I, showsClosingMessage: M, closingContent: T } = C,
        _ = (w ? N : void 0) ?? C.attachmentsHost,
        P = M && !w,
        R = null == c ? null : (0, r.jsx)(r5.A, { projectId: t, attachments: c }),
        L = null == R ? null : (0, r.jsx)("div", { className: nh.MT, children: R }),
        D = y
            ? (0, r.jsx)(j.E, {
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
                  })(k),
              })
            : null;
    return (0, r.jsxs)("div", {
        className: nh.ue,
        children: [
            E.length > 0 && !w
                ? (0, r.jsx)("ol", {
                      className: nh.dO,
                      children: E.filter((e) => "todos" !== e.type).map((e) =>
                          (0, r.jsxs)(
                              "li",
                              {
                                  className: nh.DV,
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: ie.PT,
                                          children: au.A.parse(e.content, !0, {
                                              allowList: !0,
                                              allowHeading: !0,
                                              allowLinks: !0,
                                          }),
                                      }),
                                      "streamed" === _ && e === I ? L : null,
                                  ],
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            null != a
                ? (0, r.jsx)(rK, { projectId: t, proposal: a, version: s, onApprove: b })
                : P
                  ? (0, r.jsxs)("div", {
                        className: o()(nh.ky, r9.XR),
                        children: [
                            (0, r.jsx)("div", {
                                className: o()(ie.PT, nh.cW),
                                children: au.A.parse(T, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === _ ? L : null,
                            D,
                        ],
                    })
                  : null,
            null != d
                ? (0, r.jsx)("div", {
                      className: o()(nh.ky, r9.XR, { [r8.O]: null != f && "open" === h }),
                      children: (0, r.jsx)(r7, {
                          projectId: t,
                          cardId: m ?? "",
                          request: d,
                          status: h,
                          awaiting: "open" === h ? f : void 0,
                      }),
                  })
                : null,
            null != g
                ? (0, r.jsx)("div", {
                      className: o()(nh.ky, r9.XR),
                      children: (0, r.jsx)(n9, { projectId: t, request: g }),
                  })
                : null,
            "standalone" !== _ && ("closing" !== _ || P) ? null : R,
            null != x ? (0, r.jsx)(rJ, { projectId: t }) : null,
            null != u && u.length > 0 ? (0, r.jsx)(r0, { ideas: u, pickedIdeaIds: v, onPick: p }) : null,
            null != A ? (0, r.jsx)(aD, { proposal: A, onRestore: S }) : null,
            P ? null : D,
        ],
    });
}
var ir = l(146806),
    ii = l(477262),
    is = l(432017),
    io = l(475358),
    iu = l(717400),
    ic = l(663341),
    id = l(559647),
    im = l(775602),
    ih = l(234320),
    ig = l(285796),
    ix = l(922329);
async function ip(e) {
    let t = new Worker(new URL("/assets/" + l.u("638664"), l.b));
    try {
        let l = await new Promise((l) => {
            (t.addEventListener("message", (e) => {
                let { data: t } = e;
                return l(t);
            }),
                t.addEventListener("error", () => l(null)),
                t.addEventListener("messageerror", () => l(null)),
                t.postMessage(e));
        });
        if (null == l) return null;
        return new File([l], `${e.name.replace(/\.png$/i, "")}.webp`, {
            type: "image/webp",
            lastModified: e.lastModified,
        });
    } finally {
        t.terminate();
    }
}
var iv = l(153171);
let ij = Y.lN;
function ib(e, t, l, n) {
    let a = nF(e, t).length;
    !(function (e, t, l) {
        if (0 === l.length) return;
        let n = l.map((e) => {
            let { draft: t, upload: l } = e;
            return { draft: { ...t, localId: nL++ }, upload: l };
        });
        for (let { draft: l, upload: a } of (nz(e, t, [
            ...nF(e, t),
            ...n.map((e) => {
                let { draft: t } = e;
                return t;
            }),
        ]),
        n))
            a?.().then(
                (n) => {
                    if ("errorText" in n) return void nO(e, t, l.localId, { status: "error", errorText: n.errorText });
                    let { converted: a, ...r } = n;
                    nO(e, t, l.localId, { ...a, status: "ready", ref: r })
                        ? setTimeout(
                              () =>
                                  nO(e, t, l.localId, {
                                      status: "error",
                                      errorText: eu.intl.string(eo.default.E7dS5n),
                                  }),
                              Y.o2 - 3e5,
                          )
                        : nG(e, r.id);
                },
                (n) => {
                    (console.error("[vibegrations] attachment upload failed", n),
                        nO(e, t, l.localId, { status: "error", errorText: eu.intl.string(eo.default["kUw/b1"]) }));
                },
            );
    })(
        e,
        t,
        l.map((e) => {
            let t = "" === e.type ? "application/octet-stream" : e.type,
                l = { name: e.name, contentType: t };
            if (a++ >= ij)
                return {
                    draft: {
                        ...l,
                        status: "error",
                        errorText: eu.intl.formatToPlainString(eo.default.Q0aCVZ, { count: ij }),
                    },
                };
            if (!(0, Y.Oq)(e.size, t))
                return "image/png" === t && e.size <= Y.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas
                    ? {
                          draft: { ...l, status: "uploading", previewUrl: URL.createObjectURL(e) },
                          upload: async () => {
                              let l = await ip(e).catch(() => null);
                              return null != l && (0, Y.Oq)(l.size, l.type)
                                  ? { ...(await n(l)), converted: { name: l.name, contentType: l.type } }
                                  : { errorText: nH(t) };
                          },
                      }
                    : { draft: { ...l, status: "error", errorText: nH(t) } };
            let r = Y.XB.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...l, status: "uploading", previewUrl: r }, upload: () => n(e) };
        }),
    );
}
function iy(e) {
    let { projectId: t, surface: l, onUploadFile: n } = e,
        a = nD.useState((e) => n$(e, t, l)),
        r = i.useCallback((e) => ib(t, l, e, n), [t, l, n]),
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
                let n, a;
                null != (a = (n = nF(t, l)).find((t) => t.localId === e)) &&
                    (nU(t, a),
                    nz(
                        t,
                        l,
                        n.filter((t) => t.localId !== e),
                    ));
            },
            [t, l],
        ),
        u = i.useCallback(() => nK(t, l), [t, l]);
    return {
        drafts: a,
        addFiles: r,
        pasteFiles: s,
        removeDraft: o,
        settled: a.every((e) => "ready" === e.status),
        takeRefs: u,
    };
}
function ik(e) {
    let { draft: t, onRemove: l } = e;
    return (0, r.jsxs)(ix.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, r.jsx)(j.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, r.jsx)(w.y, { type: w.t.SPINNING_CIRCLE_SIMPLE, className: iv.Rk }) : null,
            (0, r.jsx)("button", {
                type: "button",
                className: iv.o1,
                onClick: () => l(t.localId),
                "aria-label": eu.intl.string(eo.default.Slam9g),
                children: (0, r.jsx)(ig.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var iw = l(497437);
let iN = [
        {
            id: "add-images-videos",
            label: eo.default["51+9lc"],
            icon: ii.s,
            accept: "image/*,video/*,.png,.jpg,.jpeg,.gif,.webp,.avif,.heic,.heif,.svg,.bmp,.mp4,.m4v,.mov,.webm,.mkv,.avi",
        },
        {
            id: "add-sounds",
            label: eo.default["10ljr2"],
            icon: is.T,
            accept: "audio/*,.mp3,.wav,.ogg,.oga,.opus,.m4a,.aac,.flac,.weba,.webm,.aif,.aiff,.mid,.midi",
        },
        { id: "add-other-files", label: eo.default.aotDee, icon: el.H, accept: "" },
    ],
    iA = "text-md/normal",
    iS = null;
function iC(e) {
    let { text: t, offering: l, typed: n } = e,
        [a, s] = i.useState(t),
        u = i.useRef(null),
        c = i.useRef(null),
        d = i.useRef(0),
        [f, h] = i.useState(0),
        [g, x] = i.useState(0),
        [p, v] = i.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
    (i.useLayoutEffect(() => {
        let e = u.current,
            t = e?.parentElement;
        if (null == e || null == t) return;
        let l = d.current;
        function n() {
            let e = u.current,
                t = e?.parentElement;
            if (null == e || null == t) return;
            let n = c.current;
            if (null == n) return;
            let a = parseFloat(getComputedStyle(t).columnGap),
                r = Number.isNaN(a) ? 0 : a,
                i = e.offsetWidth,
                s = n.offsetWidth + r;
            (x(i + r), h(s));
            let o = s + i,
                d = Math.max(l, n.offsetWidth) + r + i,
                m = 0 === d ? 1 : s / d,
                f = 0 === d ? 1 : o / d;
            v({
                frontFrom: 1e3 * (0, ir._R)(m),
                frontTo: 1e3 * (0, ir._R)(f),
                backFrom: 1e3 * (0, ir.T)(m),
                backTo: 1e3 * (0, ir.T)(f),
            });
        }
        let a = new ResizeObserver(n);
        return (n(), a.observe(e), a.observe(t), null != c.current && a.observe(c.current), () => a.disconnect());
    }, [t]),
        i.useEffect(() => {
            d.current = c.current?.offsetWidth ?? 0;
        }, [t]));
    let [b, y] = i.useState(0),
        [k, w] = i.useState(null),
        N = i.useRef(!1),
        A = i.useCallback(() => {
            (w(N.current ? (l ? "through" : "out") : l ? "in" : null), y((e) => e + 1));
        }, [l]);
    i.useEffect(() => {
        N.current = l;
    }, [l, t]);
    let S = "in" === k ? p.backFrom : p.frontFrom,
        C = "out" === k ? p.frontTo : p.backTo,
        E = (0, m.bG)([im.Ay], () => im.Ay.useReducedMotion),
        I = t === eu.intl.string(eo.default.Zc7gML),
        M = a === t && I;
    function T(e, t, l) {
        let n = null != l;
        return (0, r.jsx)("span", {
            ref: l,
            className: o()(iw.VT, { [iw.qk]: n }),
            style: n
                ? {
                      insetInlineStart: f,
                      "--custom-cap-wipe-delay": `${S}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, C - S)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": n && b > 0 && null != k ? b % 2 : void 0,
            "data-wipe-kind": n ? (k ?? void 0) : void 0,
            children: (0, r.jsx)(io.e, { shortcut: "tab", className: iw.xT, keyClassName: e }),
        });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eP.o, {
                text: t,
                variant: iA,
                delay: null,
                duration: 1e3,
                trailingWidth: g,
                className: o()(iw.xM, { [iw.s2]: n }),
                onStart: A,
                onComplete: () => s(t),
            }),
            T(iw.IS, l || (!E && "out" === k), u),
            (0, r.jsx)("span", {
                ref: c,
                className: iw.QI,
                "aria-hidden": !0,
                children: (0, r.jsx)(j.E, { variant: iA, tag: "span", children: t }),
            }),
            M
                ? (0, r.jsxs)("span", {
                      className: iw.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, r.jsx)(j.E, { variant: iA, tag: "span", className: iw.xM, children: t }),
                          T(iw.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let iE = i.memo(function (e) {
        let {
                projectId: t,
                canSend: l,
                stopped: n,
                running: a,
                restoring: s = !1,
                onSend: o,
                onInterrupt: u,
                onUploadFile: c,
                onApprove: d,
                onImport: f,
                suggestion: h,
                questionOpen: g = !1,
                hasPendingContext: x = !1,
                onDraftHasTextChange: p,
                modelSettings: v,
                onModelSettingsChange: j,
            } = e,
            [b, w] = i.useState(() => ai.getDraft(t)),
            N = i.useCallback(
                (e) => {
                    ((0, eA.I$)(t, e), w(e));
                },
                [t],
            ),
            A = "" !== b.trim();
        i.useEffect(() => p?.(A), [A, p]);
        let [S, C] = i.useState(t);
        S !== t && (C(t), w(ai.getDraft(t)));
        let E = (0, m.bG)([im.Ay], () => im.Ay.isSubmitButtonEnabled),
            [I, M] = i.useState(!1);
        i.useEffect(() => {
            a || M(!1);
        }, [a]);
        let T = i.useRef(null),
            {
                drafts: _,
                addFiles: P,
                pasteFiles: R,
                removeDraft: L,
                settled: D,
                takeRefs: $,
            } = iy({ projectId: t, surface: "chat", onUploadFile: c }),
            F = "" !== b.trim() || _.length > 0 || x,
            z = l && F && D,
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
                if (!z) return;
                let e = $();
                o(b, e.length > 0 ? e : void 0);
                let t = (function (e, t, l) {
                    let n,
                        a,
                        r = l.split("\n", 1)[0] ?? "";
                    if (null == e || "" === r) return r;
                    null == iS && (iS = document.createElement("canvas").getContext("2d"));
                    let i = iS;
                    if (null == i) return r;
                    let s = getComputedStyle(e);
                    i.font = "" !== s.font ? s.font : `${s.fontWeight} ${s.fontSize} ${s.fontFamily}`;
                    let o =
                        t > 0
                            ? t
                            : ((n = parseFloat(s.paddingInlineStart)),
                              (a = parseFloat(s.paddingInlineEnd)),
                              e.clientWidth - (Number.isNaN(n) ? 0 : n) - (Number.isNaN(a) ? 0 : a));
                    if (o <= 0 || i.measureText(r).width <= o) return r;
                    let u = 0,
                        c = r.length;
                    for (; u < c;) {
                        let e = Math.ceil((u + c) / 2);
                        i.measureText(r.slice(0, e)).width <= o ? (u = e) : (c = e - 1);
                    }
                    let d = r.slice(0, u),
                        m = d.lastIndexOf(" ");
                    return (m > 0 ? d.slice(0, m) : d).trimEnd();
                })(X.current?.querySelector("textarea") ?? null, ec.current, b);
                ("" !== t && G(t), N(""));
            }, [z, b, o, $, N]),
            q = i.useCallback(
                (e) => {
                    (e.preventDefault(), U());
                },
                [U],
            ),
            H = i.useCallback(() => {
                null == u || I || (M(!0), u());
            }, [u, I]),
            B = null == h || "" !== b || !l || n || s || x ? null : h,
            K = i.useCallback(
                (e) => {
                    if ("Escape" === e.key && a && null != u && !I) {
                        (e.preventDefault(), e.stopPropagation(), H());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != B) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), N(B));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != d && (e.preventDefault(), d());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), U());
                },
                [U, d, a, u, I, H, B, N],
            ),
            V = i.useCallback(
                (e) => {
                    l && R(e);
                },
                [l, R],
            );
        (0, ih.Vo)({
            event: ev.jej.GLOBAL_CLIPBOARD_PASTE,
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
            Q = i.useCallback((e) => {
                let t = T.current;
                null != t && ((t.accept = e), t.click());
            }, []),
            [Y, el] = i.useState(0),
            [en, ea] = i.useState(!1);
        i.useEffect(() => {
            if (0 === b.length) return void ea(!1);
            let e = X.current?.querySelector("textarea");
            if (null != e) {
                let t = iT(e);
                null != t && el(t);
            }
            ea(!0);
            let t = setTimeout(() => ea(!1), iI);
            return () => clearTimeout(t);
        }, [b]);
        let er = i.useMemo(() => ({ "--custom-glow-x": `${Y}px` }), [Y]),
            ei = en ? ` ${iw.EB}` : "",
            es = s
                ? eu.intl.string(eo.default.qqlUiW)
                : n
                  ? eu.intl.string(eo.default.mPB3eo)
                  : l
                    ? x
                        ? eu.intl.string(eo.default.knUjL3)
                        : g
                          ? eu.intl.string(eo.default.IevBEw)
                          : eu.intl.string(a ? eo.default["0BJa/0"] : eo.default.TEeU7z)
                    : eu.intl.string(eo.default.zZ9NgM),
            ec = i.useRef(0),
            ed = i.useRef(null),
            em = i.useCallback((e) => {
                if ((ed.current?.disconnect(), null == e)) return;
                ec.current = e.clientWidth;
                let t = new ResizeObserver(() => {
                    ec.current = e.clientWidth;
                });
                (t.observe(e), (ed.current = t));
            }, []),
            ef = i.useId(),
            eh = null != B,
            eg = O ?? B ?? es,
            ex = "" === b && "" !== eg;
        return (0, r.jsxs)("form", {
            onSubmit: q,
            className: iw.DA,
            children: [
                _.length > 0
                    ? (0, r.jsx)("div", {
                          className: iw.lN,
                          children: _.map((e) => (0, r.jsx)(ik, { draft: e, onRemove: L }, e.localId)),
                      })
                    : null,
                (0, r.jsx)("span", { className: `${iw.wg} ${iw.LP}${ei}`, style: er, "aria-hidden": !0 }),
                (0, r.jsx)("span", { className: `${iw.wg} ${iw.L3}${ei}`, style: er, "aria-hidden": !0 }),
                (0, r.jsxs)("div", {
                    className: iw.VA,
                    ref: X,
                    children: [
                        (0, r.jsx)("input", {
                            ref: T,
                            type: "file",
                            multiple: !0,
                            onChange: W,
                            className: iw.nY,
                            tabIndex: -1,
                            "aria-hidden": !0,
                        }),
                        (0, r.jsx)(Z.Y, {
                            targetElementRef: J,
                            position: "top",
                            align: "left",
                            animation: Z.Y.Animation.NONE,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, r.jsx)(ee.W, {
                                    "data-menu-migrated": !0,
                                    navId: "conjure-composer-attach",
                                    "aria-label": eu.intl.string(eu.t.d56gCa),
                                    onClose: t,
                                    onSelect: t,
                                    children: (0, r.jsxs)(et.rX, {
                                        children: [
                                            iN.map((e) =>
                                                (0, r.jsx)(
                                                    et.Dr,
                                                    {
                                                        id: e.id,
                                                        label: eu.intl.string(e.label),
                                                        iconLeft: e.icon,
                                                        leadingAccessory: { type: "icon", icon: e.icon },
                                                        action: () => Q(e.accept),
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                            null != f
                                                ? (0, r.jsx)(et.Dr, {
                                                      id: "import-project",
                                                      label: eu.intl.string(eo.default["p/k5i7"]),
                                                      iconLeft: iu.q,
                                                      leadingAccessory: { type: "icon", icon: iu.q },
                                                      action: f,
                                                  })
                                                : null,
                                        ],
                                    }),
                                });
                            },
                            children: (e, t) => {
                                let { isShown: n } = t;
                                return (0, r.jsx)("button", {
                                    ...e,
                                    ref: J,
                                    type: "button",
                                    className: `${iw.Y0} ${iw.nu}`,
                                    disabled: !l,
                                    "aria-label": eu.intl.string(eu.t.d56gCa),
                                    "aria-haspopup": "menu",
                                    "aria-expanded": n,
                                    children: (0, r.jsx)(ic.PlusLargeIcon, {
                                        size: "refresh_sm",
                                        color: "currentColor",
                                        className: iw.Qu,
                                    }),
                                });
                            },
                        }),
                        ex
                            ? (0, r.jsx)("div", {
                                  ref: em,
                                  className: iw.ar,
                                  "aria-hidden": "true",
                                  children: (0, r.jsx)(iC, { text: eg, offering: eh && null == O, typed: null != O }),
                              })
                            : null,
                        (0, r.jsx)(nj.y, {
                            value: b,
                            onChange: (e) => N(e.currentTarget.value),
                            onKeyDown: K,
                            onPaste: V,
                            placeholder: ex ? "" : es,
                            disabled: !l,
                            "aria-label": eu.intl.string(eo.default.ldNl9x),
                            "aria-describedby": ex ? ef : void 0,
                            rows: 1,
                            className: iw.jp,
                        }),
                        ex ? (0, r.jsx)(k.A, { id: ef, children: es }) : null,
                        (0, r.jsx)("div", {
                            className: iw.Sz,
                            children:
                                a && null != u
                                    ? (0, r.jsx)(y.m, {
                                          text: eu.intl.string(eo.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, r.jsx)("button", {
                                              type: "button",
                                              className: `${iw.Y0} ${iw.$E}`,
                                              disabled: I,
                                              onClick: H,
                                              "aria-label": eu.intl.string(eo.default.wiguT0),
                                              children: (0, r.jsx)(ao.w, {
                                                  size: "custom",
                                                  width: 20,
                                                  height: 20,
                                                  color: "currentColor",
                                              }),
                                          }),
                                      })
                                    : v?.tierSettings != null && null != j
                                      ? (0, r.jsx)(tf, {
                                            settings: v.tierSettings,
                                            tiers: v.tiers,
                                            choices: v.choices,
                                            disabled: !l,
                                            onChange: j,
                                            className: `${iw.Y0} ${iw.$E}`,
                                            icon: (0, r.jsx)(tr.R, {
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
                                  className: iw.fF,
                                  children: [
                                      (0, r.jsx)("div", { className: iw.MT }),
                                      (0, r.jsx)("button", {
                                          type: "submit",
                                          className: iw.rt,
                                          disabled: !z,
                                          "aria-label": eu.intl.string(eo.default.rxW2cl),
                                          children: (0, r.jsx)(id.SendMessageIcon, {
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
    iI = 1500,
    iM = [
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
function iT(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = iT.mirror;
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
                (iT.mirror = t),
                t
            );
        })(),
        l = window.getComputedStyle(e);
    for (let e of iM) t.style.setProperty(e, l.getPropertyValue(e));
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let n = document.createElement("span");
    ((n.textContent = "\u200B"), t.appendChild(n));
    let a = n.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + a - e.scrollLeft);
}
iT.mirror = null;
var i_ = l(52133),
    iP = l(531685),
    iR = l(155899),
    iL = l(148087);
let iD = [6e4, 18e4, 6e5],
    i$ = [
        {
            key: "outdated",
            priority: 2,
            idleDelayMs: 6e4,
            backoffDelaysMs: iD,
            clock: "persistent",
            eligible: (e) => {
                var t;
                let { publish: l, draftTyped: n, outdatedUpdating: a } = e;
                return a
                    ? l?.isUpdate === !0
                    : !n && null != (t = l) && t.isUpdate && null == t.disabledReason && !0 !== t.publishing;
            },
        },
        {
            key: "ideas",
            priority: 1,
            idleDelayMs: 6e4,
            clock: "visit",
            eligible: (e) => {
                var t;
                let { turn: l, publish: n, draftHasText: a } = e;
                return (
                    !a &&
                    n?.publishing !== !0 &&
                    "plan_implemented" === (t = l).kind &&
                    (0, eb.BL)(t) &&
                    !(null != l.publishCta && rV(n))
                );
            },
        },
    ];
function iF(e, t) {
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
let iz = new Map();
function iO(e) {
    return (0, m.bG)([eS.Ay, ld.A], () => {
        let t = eS.Ay.getProject(e);
        return null == t ? "" : (ld.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
function iG(e) {
    let { projectId: t, notice: l } = e;
    return "outdated" === l ? (0, r.jsx)(iq, { projectId: t }) : (0, r.jsx)(iU, { projectId: t, notice: l });
}
function iU(e) {
    let { projectId: t, notice: l } = e,
        n = i.useContext(li.bI),
        a = iO(t),
        s = i.useCallback(() => {
            null != n && (0, li.ub)(t, n);
        }, [n, t]);
    return (0, r.jsx)(j.E, {
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
            })(l),
            { name: a, onOpen: s },
        ),
    });
}
function iq(e) {
    let { projectId: t } = e,
        l = (0, li.Ay)(t),
        [n, a] = i.useState(!1);
    return null == l
        ? null
        : n && (l.publishing || !l.isUpdate)
          ? (0, r.jsx)(iH, {})
          : (0, r.jsx)(j.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: eu.intl.format(eo.default.X8tdbS, {
                    action: l.label,
                    onUpdate: () => {
                        (a(!0), iz.get(t)?.forEach((e) => e()), l.run("outdated_notice"));
                    },
                }),
            });
}
function iH() {
    let e = eu.intl.string(eo.default.lexcBN),
        t = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = (0, m.bG)([im.Ay], () => im.Ay.useReducedMotion),
                [l, n] = i.useState(1);
            return (
                i.useEffect(() => {
                    if (t || e) return;
                    let l = setInterval(() => n((e) => (e % 3) + 1), 400);
                    return () => clearInterval(l);
                }, [t, e]),
                ".".repeat(t ? 3 : l)
            );
        })(!(0, iL.A)());
    return (0, r.jsxs)(j.E, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: [e, (0, r.jsx)("span", { "aria-hidden": !0, children: t })],
    });
}
var iB = l(248798);
function iK(e, t) {
    e.style.height = `${t.offsetHeight}px`;
}
function iV(e) {
    let { reminder: t, renderReminder: l } = e,
        n = (function (e) {
            let t,
                [l, n] = i.useState([]);
            (l.find((e) => !e.leaving)?.key ?? null) !== e &&
                n(
                    ((t = l.filter((t) => t.key !== e).map((e) => ({ ...e, leaving: !0 }))),
                    null != e ? [...t, { key: e, leaving: !1 }] : t),
                );
            let a = l.some((e) => e.leaving);
            return (
                i.useEffect(() => {
                    if (!a) return;
                    let e = setTimeout(() => n((e) => e.filter((e) => !e.leaving)), 180);
                    return () => clearTimeout(e);
                }, [a, l]),
                l
            );
        })(t),
        a = n.find((e) => !e.leaving)?.key ?? null,
        s = null == a && n.length > 0,
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
            iK(e, t);
            let l = new ResizeObserver(() => iK(e, t));
            return (l.observe(t), () => l.disconnect());
        }, [a, s]),
        (0, r.jsx)("div", {
            ref: u,
            className: o()(iB.NI, { [iB.Jg]: null == a }),
            "aria-live": "polite",
            children: (0, r.jsx)("div", {
                className: iB.t$,
                children: n.map((e) =>
                    (0, r.jsx)(
                        "div",
                        {
                            ref: e.leaving ? void 0 : c,
                            "aria-hidden": e.leaving || void 0,
                            className: o()(iB.qd, e.leaving ? iB.cu : iB.We),
                            children: l(e.key),
                        },
                        e.key,
                    ),
                ),
            }),
        })
    );
}
var iW = l(521981),
    iX = l(491182),
    iJ = l(438729),
    iQ = l(622868),
    iY = l(448368),
    iZ = l(837528),
    i0 = l(439762),
    i1 = l(715628),
    i2 = l(752636),
    i3 = l(9842),
    i4 = l(589022),
    i6 = l(967198),
    i7 = l(7584);
let i5 = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function i8(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function i9(e, t) {
    if (t <= 0) return;
    let l = e.charCodeAt(t - 1);
    if (l >= 56320 && l <= 57343 && t >= 2) {
        let n = e.charCodeAt(t - 2);
        if (n >= 55296 && n <= 56319) return (n - 55296) * 1024 + (l - 56320) + 65536;
    }
    return l;
}
function se(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let l = e.charCodeAt(t - 1),
        n = e.charCodeAt(t);
    if (l >= 55296 && l <= 56319 && n >= 56320 && n <= 57343) return !0;
    let a = i9(e, t),
        r = e.codePointAt(t);
    if (
        (null != r &&
            (8205 === r ||
                (r >= 65024 && r <= 65039) ||
                (r >= 127995 && r <= 127999) ||
                (r >= 768 && r <= 879) ||
                (r >= 8400 && r <= 8447) ||
                (r >= 65056 && r <= 65071) ||
                (r >= 917536 && r <= 917631))) ||
        8205 === a
    )
        return !0;
    if (i8(a) && i8(r)) {
        let l = 0,
            n = t;
        for (; l < 32 && i8(i9(e, n));) (l++, (n -= 2));
        return l % 2 == 1;
    }
    return !1;
}
function st(e, t) {
    let { streaming: l } = t,
        n = (0, m.bG)([im.Ay], () => im.Ay.useReducedMotion),
        a = l && !n,
        [r, s] = i.useState(() => ({ target: e, length: e.length })),
        o = r;
    (o.target !== e &&
        (o = {
            target: e,
            length: a
                ? (function (e, t, l) {
                      let n = Math.min(Math.max(l, 0), e.length);
                      if (0 === n) return 0;
                      if (t.length >= n && t.startsWith(e.slice(0, n))) return n;
                      let a = Math.min(n, t.length),
                          r = 0;
                      for (; r < a && e.charCodeAt(r) === t.charCodeAt(r);) r++;
                      for (; r > 0 && se(t, r);) r--;
                      return r;
                  })(o.target, e, o.length)
                : e.length,
        }),
        a || o.length === e.length || (o = { target: e, length: e.length }),
        o !== r && s(o));
    let u = a && o.length < e.length,
        c = i.useRef(o);
    i.useLayoutEffect(() => {
        c.current = o;
    });
    let d = i.useRef(0),
        f = i.useRef(0);
    (i.useEffect(() => {
        if (u)
            return (
                (f.current = 0),
                (d.current = requestAnimationFrame(function e(t) {
                    let l = 0 === f.current ? 32 : t - f.current;
                    if (l >= 32) {
                        f.current = t;
                        let e = c.current,
                            n = (function (e) {
                                let { target: t, revealed: l, elapsedMs: n } = e,
                                    a = Math.min(Math.max(l, 0), t.length),
                                    r = t.length - a;
                                if (r <= 0) return a;
                                if (r > 900) return t.length;
                                let i = Math.min(
                                    120,
                                    Math.max(1, Math.round(Math.max(0.16, r / 280) * Math.max(n, 0))),
                                );
                                var s = (function (e, t, l) {
                                    if (l >= e.length) return l;
                                    let n = l;
                                    for (; n > t + 1 && l - n < 12 && i5.has(e.charAt(n - 1));) n--;
                                    return i5.has(e.charAt(n - 1)) ? l : n;
                                })(t, a, Math.min(t.length, a + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && se(t, o);) o++;
                                return o;
                            })({ target: e.target, revealed: e.length, elapsedMs: l });
                        n !== e.length && s({ target: e.target, length: n });
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
    return { text: h >= e.length ? e : e.slice(0, h), revealing: a && h < e.length };
}
var sl = l(565645),
    sn = l(981879);
function sa(e) {
    let { emoji: t, label: l } = e;
    return (0, r.jsx)("div", {
        className: sn.H,
        children: (0, r.jsx)(sl.A, { emojiName: t, alt: l, size: "reaction" }),
    });
}
var sr = l(624479),
    si = l(890377),
    ss = l(744898),
    so = l(180227);
function su(e) {
    let { groupStart: t, actions: l } = e;
    return 0 === l.length
        ? null
        : (0, r.jsx)("div", {
              className: o()(so.QE, { [so.Rn]: t }),
              children: (0, r.jsx)(rA.Ay, {
                  children: l.map((e) =>
                      (0, r.jsx)(
                          rA.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function sc(e) {
    return ll.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: eu.intl.string(eu.t.JrGD7E), icon: sr.CopyIcon, onClick: () => (0, ll.C)(e) }]
        : [];
}
function sd(e) {
    let { content: t, groupStart: l, onQueuedAction: n } = e,
        a =
            null == n
                ? []
                : [
                      {
                          id: "steer",
                          label: eu.intl.string(eo.default.CXtLD2),
                          tooltip: eu.intl.string(eo.default.DOb1HM),
                          icon: si.V,
                          onClick: () => n("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: eu.intl.string(eo.default.urZwpN),
                          icon: P.P,
                          onClick: () => n("cancel"),
                      },
                  ];
    return (0, r.jsx)(su, { groupStart: l, actions: [...a, ...sc(t)] });
}
function sm(e) {
    let { content: t, groupStart: l, onRestoreVersion: n } = e,
        a =
            null == n
                ? []
                : [{ id: "restore-version", label: eu.intl.string(eo.default.H8Jfhu), icon: ss.e, onClick: n }];
    return (0, r.jsx)(su, { groupStart: l, actions: [...a, ...sc(t)] });
}
let sf = (0, a0.createChannelRecord)({ id: "conjure-builder", type: ev.rbe.DM }),
    sh = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function sg(e, t) {
    return null == e ? e : (0, r.jsx)("div", { className: o()(so.Yq, { [so.x1]: t }), children: e });
}
function sx(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function sp(e, t, l) {
    let { content: n } = (0, i0.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        a = i.useMemo(() => ({ message: e, channel: sf, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != l
          ? (0, r.jsx)(iJ.Ay, { className: l, message: e, content: n, compact: !1 })
          : (0, i1.A)(a, n);
}
function sv(e) {
    let [t, l] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        n = i.useCallback((e) => l((t) => ({ ...t, ...e })), []),
        a = i.useCallback(() => l({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, iZ.m)(e, sf, t.usernameProfile, n),
        o = (0, iZ.Jo)(t.avatarProfile, n),
        u = (0, m.bG)([i6.A], () => i6.A.getGuildId()),
        c = (0, m.bG)([tW.default], () => tW.default.getCurrentUser()),
        d = i.useCallback(
            (t) => {
                let l = tW.default.getUser(e.author.id) ?? e.author;
                return null == c ? null : (0, r.jsx)(i4.A, { ...t, user: l, currentUser: c, guildId: u ?? void 0 });
            },
            [c, u, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: o,
        onClickUsername: s,
        onPopoutRequestClose: a,
        renderPopout: d,
        guildId: u ?? void 0,
    };
}
function sj(e) {
    let { baseMessage: t, referenced: l, selected: n, onJumpToReplied: a } = e,
        s = i.useMemo(() => {
            let e = "" !== l.content ? (0, iW.Ay)(l, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == n
                ? e
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)("span", {
                              className: so.GV,
                              children: [
                                  (0, r.jsx)(A.x, {
                                      className: so.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 14,
                                      height: 14,
                                  }),
                                  n,
                              ],
                          }),
                          e,
                      ],
                  });
        }, [l, n]),
        { isReplyAuthorBlocked: o, isReplyAuthorIgnored: u } = (0, m.cf)(
            [lh.A],
            () => ({
                isReplyAuthorBlocked: lh.A.isBlockedForMessage(l),
                isReplyAuthorIgnored: lh.A.isIgnoredForMessage(l),
            }),
            [l],
        ),
        c = (0, rw.X4)(l),
        d = (0, rw.X4)(t),
        f = sv(l);
    return (0, r.jsx)(iY.A, {
        repliedAuthor: c,
        baseAuthor: d,
        baseMessage: t,
        channel: sf,
        referencedMessage: { state: i3.a.LOADED, message: l },
        content: s,
        compact: !1,
        isReplyAuthorBlocked: o,
        isReplyAuthorIgnored: u,
        isReplySpineClickable: null != a,
        showReplySpine: !0,
        renderPopout: f.renderPopout,
        showAvatarPopout: f.showAvatarPopout,
        showUsernamePopout: f.showUsernamePopout,
        onClickAvatar: f.onClickAvatar,
        onClickUsername: f.onClickUsername,
        onClickReply: a,
        onPopoutRequestClose: f.onPopoutRequestClose,
    });
}
function sb(e) {
    let { message: t, author: l } = e,
        n = sv(t);
    return (0, r.jsx)(iQ.Ay, {
        message: t,
        channel: sf,
        author: l,
        guildId: n.guildId,
        subscribeToGroupId: t.id,
        renderPopout: n.renderPopout,
        showAvatarPopout: n.showAvatarPopout,
        showUsernamePopout: n.showUsernamePopout,
        onClickAvatar: n.onClickAvatar,
        onClickUsername: n.onClickUsername,
        onPopoutRequestClose: n.onPopoutRequestClose,
    });
}
function sy(e) {
    let { content: t, createdAt: l, userId: n, accessories: a, agentReaction: s, groupStart: o, onQueuedAction: u } = e;
    i.useEffect(() => t0(n), [n]);
    let c = (0, m.bG)(
            [tW.default],
            () => tZ(n, null != n ? tW.default.getUser(n) : null, tW.default.getCurrentUser()),
            [n],
        ),
        d = i.useMemo(() => (0, rw.FT)(c, null), [c]),
        f = i.useMemo(() => eY(t), [t]),
        h = f?.body ?? t,
        g = i.useMemo(() => {
            if (null == c) return null;
            let e = (0, aZ.Ay)({ channelId: sf.id, content: h, author: c });
            return (0, aY.rh)({ ...e, timestamp: sx(l, e.timestamp), state: ev.cmJ.SENT });
        }, [h, c, l]),
        x = (function (e) {
            if (null == e || "" === e) return null;
            let t = i7.Ay.convertSurrogateToName(e, !1);
            return "" === t ? null : eu.intl.formatToPlainString(eo.default.lxXLho, { emojiName: t });
        })(s);
    return null == g
        ? null
        : (0, r.jsx)(sk, {
              message: g,
              author: d,
              content: h,
              selected: f?.label,
              accessories:
                  null != s && null != x
                      ? (0, r.jsxs)(r.Fragment, { children: [a, (0, r.jsx)(sa, { emoji: s, label: x })] })
                      : a,
              groupStart: o,
              onQueuedAction: u,
          });
}
function sk(e) {
    let { message: t, author: l, content: n, selected: a, accessories: i, groupStart: s = !0, onQueuedAction: o } = e,
        u = sp(t, n);
    return (0, r.jsx)(iX.A, {
        className: so.yE,
        author: l,
        childrenHeader: s ? (0, r.jsx)(sb, { message: t, author: l }) : void 0,
        childrenMessageContent:
            null == a
                ? u
                : (0, r.jsxs)("div", {
                      className: so.zq,
                      children: [
                          (0, r.jsxs)("span", {
                              className: so.GV,
                              children: [
                                  (0, r.jsx)(A.x, {
                                      className: so.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  a,
                              ],
                          }),
                          (0, r.jsx)("span", { className: so.WO, children: u }),
                      ],
                  }),
        childrenAccessories: sg(i, "" !== n),
        childrenButtons: (0, r.jsx)(sd, { content: n, groupStart: s, onQueuedAction: o }),
    });
}
function sw(e) {
    let {
            content: t,
            createdAt: l,
            accessories: n,
            replyTo: a,
            onJumpToReplied: s,
            groupStart: o = !0,
            streaming: u = !1,
            buttons: c,
        } = e,
        { text: d, revealing: f } = st(t, { streaming: (0, m.bG)([iP.A], () => u && iP.A.isFocused(), [u]) }),
        h = i.useMemo(() => (0, rw.FT)(null, null), []),
        g = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        x = a?.userId,
        p = (0, m.bG)(
            [tW.default],
            () => tZ(x, null != x ? tW.default.getUser(x) : null, tW.default.getCurrentUser()),
            [x],
        ),
        v = i.useMemo(() => (null == a ? null : eY(a.content)), [a]),
        j = i.useMemo(() => {
            if (null == a || null == p) return null;
            let e = (0, aZ.Ay)({ channelId: sf.id, content: v?.body ?? a.content, author: p });
            return (0, aY.rh)({ ...e, id: a.id, timestamp: sx(a.createdAt, e.timestamp), state: ev.cmJ.SENT });
        }, [a, v, p]),
        b = i.useMemo(() => (null == a ? void 0 : { channel_id: sf.id, message_id: a.id }), [a]),
        [y] = i.useState(() => (0, aZ.Ay)({ channelId: sf.id, content: "", author: sh })),
        k = i.useMemo(
            () =>
                (0, aY.rh)({
                    ...y,
                    timestamp: sx(l, y.timestamp),
                    state: ev.cmJ.SENT,
                    ...(null != b ? { type: ev.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, l, b],
        ),
        w = i.useMemo(() => k.set("content", d), [k, d]),
        N = i.useMemo(
            () => (0, i2.A)({ message: k, channel: sf, author: g, guildId: void 0, isGroupStart: o }),
            [k, g, o],
        ),
        A = sp(w, d, so.OS);
    return (0, r.jsxs)("div", {
        className: so.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": f ? "true" : void 0,
        children: [
            (0, r.jsx)(iX.A, {
                className: so.yE,
                author: g,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, r.jsx)(sj, { baseMessage: k, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: N,
                childrenMessageContent: A,
                childrenAccessories: sg(n, "" !== d),
                disableInteraction: !0,
            }),
            c,
            o
                ? (0, r.jsx)("span", {
                      className: so.st,
                      "aria-hidden": "true",
                      children: (0, r.jsx)(lb.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
let sN = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    sA = new WeakMap();
var sS = l(288539);
function sC(e, t, l) {
    return (0, r.jsx)(sS.A, { userId: e, content: `@${t}` }, l);
}
function sE(e) {
    let { projectId: t, event: l } = e,
        n = (function (e, t, l) {
            let n = t.actor_user_id;
            i.useEffect(() => t0(n), [n]);
            let a = (0, m.bG)([tW.default], () => (null == n ? null : tW.default.getUser(n)), [n]),
                r = (0, tX.tx)(a),
                s = iO(e),
                o =
                    (0, m.bG)([J.A], () => (null == t.guild_id ? null : J.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ?? eu.intl.string(eo.default.R1tPlP),
                u = null == a || null == r ? null : { user: r, userHook: (e, t) => l(a.id, r, t) };
            switch (t.type) {
                case "app_removed":
                    return null == u
                        ? eu.intl.format(eo.default.Lwsrhg, { app: s, server: o })
                        : eu.intl.format(eo.default.qqePfT, { app: s, server: o, ...u });
                case "bot_removed":
                    return null == u
                        ? eu.intl.format(eo.default.mT7EQG, { app: s, server: o })
                        : eu.intl.format(eo.default["lA/crI"], { app: s, server: o, ...u });
                case "preview_bot_removed":
                    return null == u
                        ? eu.intl.format(eo.default["4LVIeo"], { app: s, server: o })
                        : eu.intl.format(eo.default.YJOV6D, { app: s, server: o, ...u });
                case "app_channel_deleted": {
                    let e = t.channel_name ?? "";
                    return null == u
                        ? eu.intl.format(eo.default["4VQfid"], { channel: e, server: o })
                        : eu.intl.format(eo.default.RlMIJN, { channel: e, server: o, ...u });
                }
            }
        })(t, l, sC);
    return (0, r.jsx)(j.E, { variant: "text-md/normal", color: "text-default", children: n });
}
function sI(e) {
    let { onSelect: t, onClose: l = D.Z_, onRestoreVersion: n } = e;
    return (0, r.jsx)(ee.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: l,
        "aria-label": eu.intl.string(eu.t.ogxXGq),
        onSelect: t,
        children: (0, r.jsx)(et.rX, {
            children: (0, r.jsx)(et.Dr, {
                id: "restore-version",
                label: eu.intl.string(eo.default.H8Jfhu),
                icon: ss.e,
                action: n,
            }),
        }),
    });
}
function sM(e, t, l) {
    let n = Math.max(0, Math.min(e.length, l)),
        a = Math.max(0, Math.min(n, t));
    return { start: a, end: n, startKey: e[a] ?? null, endKey: n >= e.length ? null : (e[n - 1] ?? null) };
}
function sT(e, t, l) {
    if (null == t) return l;
    let n = e.indexOf(t);
    return -1 === n ? l : n;
}
var s_ = l(986109);
let sP = i.createContext(null);
function sR(e, t) {
    (0, iR.F)({ onConfirm: () => t(e) });
}
let sL = i.memo(function (e) {
        let {
                projectId: t,
                messages: l,
                emptyState: n,
                onPickIdea: a,
                onAskForIdeas: s,
                draftHasText: u,
                onApprovePlan: c,
                floatingSettingsMessageId: d,
                onRestoreVersion: f,
                scrollerRef: h,
                stickToBottomRef: g,
                pinned: x,
                onUnpin: p,
                handleRef: v,
                onShowsLatestChange: b,
            } = e,
            y = i.useRef(null),
            [k, N] = i.useState(null),
            A = i.useCallback((e) => {
                ((y.current = e), N(e));
            }, []),
            [S, C] = i.useState(null),
            E = i.useRef(0);
        i.useEffect(() => () => window.clearTimeout(E.current), []);
        let I = i.useCallback((e) => {
                (C(e), window.clearTimeout(E.current), (E.current = window.setTimeout(() => C(null), 1600)));
            }, []),
            M = (0, m.bG)([eS.Ay], () => eS.Ay.getPublishStatus(t)?.state ?? null),
            T = (0, m.bG)([tW.default], () => tW.default.getCurrentUser()?.id),
            _ = i.useMemo(() => {
                let e;
                return (function (e) {
                    let t = [],
                        l = (function (e) {
                            let t = new Set(),
                                l = !1;
                            for (let n = e.length - 1; n >= 0; n--) {
                                let a = e[n];
                                null != a &&
                                    null !=
                                        (function (e) {
                                            if ("assistant" !== e.role) return null;
                                            let t = (0, l7.lt)(e.steps);
                                            return null != t
                                                ? t
                                                : null != e.todos && e.todos.length > 0
                                                  ? e.todos
                                                  : null;
                                        })(a) &&
                                    (l && t.add(a.render_id), (l = !0));
                            }
                            return t;
                        })(e);
                    for (let n of e) {
                        let e = l.has(n.render_id),
                            a = sA.get(n);
                        if (null != a && a.superseded === e) {
                            t.push(...a.planned);
                            continue;
                        }
                        let r = (function (e, t) {
                            let l = [];
                            function n(e, t) {
                                l.push({ row: e, groupable: { key: e.key, ...t } });
                            }
                            if ("user" === e.role)
                                return (
                                    n(
                                        { kind: "user", key: e.render_id, message: e, groupStart: !1 },
                                        { actor: "user", authorId: e.user_id, boundary: void 0 },
                                    ),
                                    l
                                );
                            if ("publish_notice" === e.kind) {
                                let t = `${e.render_id}:publish`;
                                return (
                                    n(
                                        { kind: "publishNotice", key: t, message: e, groupStart: !1 },
                                        { actor: "assistant", boundary: t },
                                    ),
                                    l
                                );
                            }
                            if ("project_event" === e.kind) {
                                let t = `${e.render_id}:projectEvent`;
                                return (
                                    n(
                                        { kind: "projectEvent", key: t, message: e, groupStart: !1 },
                                        { actor: "assistant", boundary: t },
                                    ),
                                    l
                                );
                            }
                            let a = !(0, eb.BL)(e),
                                r = am({
                                    steps: e.steps,
                                    content: e.content,
                                    hasProposal: null != e.proposal,
                                    hasAttachments: (e.attachments?.length ?? 0) > 0,
                                }),
                                i = r.lastStreamedMessage?.key,
                                s = (0, l7.C6)(e.steps, { turnActive: a }),
                                { lastWork: o, open: u } = (0, l7.CT)(s, { turnActive: a }),
                                c = s.at(-1)?.index,
                                d = !1;
                            for (let l of s) {
                                if (null != l.prose && sN.test(l.prose.content)) d = !0;
                                else if (null != l.prose && l.prose.key !== r.replyKey) {
                                    let t = `${e.render_id}:${l.key}`;
                                    n(
                                        {
                                            kind: "prose",
                                            key: t,
                                            message: e,
                                            groupStart: !1,
                                            content: l.prose.content,
                                            hostsAttachments:
                                                "streamed" === r.attachmentsHost &&
                                                l.prose.key === i &&
                                                null != e.attachments,
                                            streaming: a && l.index === c && !l.hasWork,
                                        },
                                        { actor: "assistant", boundary: t },
                                    );
                                }
                                (l.hasWork || l.hasTodos) &&
                                    n(
                                        {
                                            kind: "activity",
                                            key: `${e.render_id}:work-${l.index}`,
                                            message: e,
                                            groupStart: !1,
                                            segment: l.index,
                                            active: l.index === u,
                                            closed: l.index !== u,
                                            ...(null != l.durationMs ? { segmentDurationMs: l.durationMs } : {}),
                                            reportsDuration: l.index === o,
                                            hostsChecklist: l.hasTodos,
                                            turnActive: l5(e),
                                            checklistSuperseded: l.hasTodos && t,
                                        },
                                        { actor: null, boundary: void 0 },
                                    );
                            }
                            let m = sN.test(e.content ?? "");
                            if (
                                (!0 === e.interrupted || d || m
                                    ? n(
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
                                      n(
                                          {
                                              kind: "legacyTodos",
                                              key: `${e.render_id}:todos`,
                                              message: e,
                                              groupStart: !1,
                                              checklistSuperseded: t,
                                          },
                                          { actor: null, boundary: void 0 },
                                      ),
                                (r.showsClosingMessage && !m) ||
                                    null != e.proposal ||
                                    null != e.clarification ||
                                    null != e.restoreProposal ||
                                    (!a &&
                                        (null != e.ideas ||
                                            null != e.publishCta ||
                                            null != e.secretRequest ||
                                            null != e.settingsRequest)) ||
                                    "standalone" === r.attachmentsHost)
                            ) {
                                let t = `${e.render_id}:closing`;
                                n(
                                    {
                                        kind: "closing",
                                        key: t,
                                        message: e,
                                        groupStart: !1,
                                        active: a,
                                        attachmentsHost: r.attachmentsHost,
                                        content: r.closingContent,
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
                            return l;
                        })(n, e);
                        (sA.set(n, { superseded: e, planned: r }), t.push(...r));
                    }
                    let n = (function (e) {
                        let t,
                            l,
                            n = [],
                            a = null,
                            r = !1,
                            i = !1;
                        for (let s of e) {
                            if (null == s.actor) {
                                (n.push(!1), (a = null), (t = void 0), (r = !1), (i = !1), (l = void 0));
                                continue;
                            }
                            let e =
                                !r || a !== s.actor || t !== s.authorId || s.boundary !== l || !0 === s.separate || i;
                            (e &&
                                ((a = s.actor), (t = s.authorId), (r = !0), (i = !0 === s.separate), (l = s.boundary)),
                                n.push(e));
                        }
                        return n;
                    })(t.map((e) => e.groupable));
                    return t.map((e, t) => ({ ...e.row, groupStart: n[t] ?? !0 }));
                })(
                    ((e = (function (e, t) {
                        if ("unpublished" !== t) return null;
                        for (let t = e.length - 1; t >= 0; t--) if (null != e[t].publishCta) return e[t].id;
                        return null;
                    })(l, M)),
                    l.every((t) => null == t.publishCta || t.id === e)
                        ? l
                        : l.map((t) => {
                              if (null == t.publishCta || t.id === e) return t;
                              let l = rW.get(t);
                              return (null == l && ((l = { ...t, publishCta: null }), rW.set(t, l)), l);
                          })),
                );
            }, [l, M]),
            P = i.useMemo(() => _.map((e) => e.key), [_]),
            [R, L] = i.useState(null),
            D = (function (e, t, l) {
                if (null == t) return sM(e, e.length - 60, e.length);
                let n = null == t.endKey,
                    a = n ? e.length : sT(e, t.endKey, t.end - 1) + 1,
                    r = sT(e, t.startKey, t.start);
                return (n && l && a - r > 120 && (r = a - 60), sM(e, r, a));
            })(P, R, x),
            $ = i.useRef(D),
            F = i.useRef(P),
            z = i.useRef(_),
            O = i.useRef(null),
            G = i.useRef(null),
            U = i.useRef(new Set()),
            q = i.useCallback(() => {
                let e = h.current?.getScrollerNode(),
                    t = y.current;
                if (null == e || null == t) return;
                let l = e.getBoundingClientRect().top,
                    n = t.querySelectorAll("[data-conjure-row-key]"),
                    a = 0,
                    r = n.length - 1,
                    i = null;
                for (; a <= r;) {
                    let e = (a + r) >> 1;
                    n[e].getBoundingClientRect().bottom > l ? ((i = n[e]), (r = e - 1)) : (a = e + 1);
                }
                let s = i?.dataset.conjureRowKey;
                O.current = null != i && null != s ? { key: s, offset: i.getBoundingClientRect().top - l } : null;
            }, [h]),
            H = i.useCallback(() => {
                let e = h.current?.getScrollerNode();
                if (null == e) return;
                let l = (function (e, t, l) {
                    let { nearTop: n, nearBottom: a, pinned: r } = l;
                    if (a && null != t.endKey) {
                        let l;
                        return ((l = Math.min(e.length, t.end + 30)), sM(e, Math.max(t.start, l - 120), l));
                    }
                    if (!n) return null;
                    if (0 === t.start) return "older";
                    if (!r && !a) {
                        let l, n;
                        return ((l = t.start - 30), (n = Math.min(t.end, Math.max(l, 0) + 120)), sM(e, l, n));
                    }
                    let i = Math.max(t.start - 30, t.end - 120);
                    return i < t.start ? sM(e, i, t.end) : null;
                })(F.current, $.current, {
                    nearTop: e.scrollTop < 600,
                    nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                    pinned: g.current,
                });
                "older" === l ? (0, en.P6)(t) : null != l && L(l);
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
                        H());
                },
                recordAnchor: q,
                showLatest(e) {
                    ((G.current = e ?? null), L(null));
                },
            }),
            [q, H],
        );
        let B = i.useRef(null),
            K = i.useCallback(
                (e) => {
                    var l;
                    let n;
                    B.current = null;
                    let a = y.current?.querySelector(`[data-conjure-message="${e}"]`);
                    if (null != a) {
                        (p(), L($.current), a.scrollIntoView({ block: "center", behavior: "smooth" }), I(e));
                        return;
                    }
                    let r = z.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                    if (-1 === r) {
                        (0, en.P6)(t) && (B.current = e);
                        return;
                    }
                    (p(),
                        (G.current = () => {
                            (y.current
                                ?.querySelector(`[data-conjure-message="${e}"]`)
                                ?.scrollIntoView({ block: "center" }),
                                I(e));
                        }),
                        L(((l = F.current), sM(l, (n = Math.max(0, r - 30)), n + 60))));
                },
                [I, p, t],
            );
        (i.useEffect(() => {
            let e = B.current;
            null != e && K(e);
        }, [_, K]),
            i.useLayoutEffect(() => {
                if (null == k) return;
                let e = k.getBoundingClientRect().height,
                    t = new ResizeObserver((t) => {
                        let [l] = t,
                            n = l?.contentRect.height;
                        null != n && n !== e && ((e = n), g.current ? h.current?.scrollToBottom() : q());
                    });
                return (t.observe(k), () => t.disconnect());
            }, [k, q, h, g]));
        let V = null == D.endKey;
        (i.useEffect(() => b?.(V), [V, b]),
            i.useLayoutEffect(() => {
                (($.current = D), (F.current = P), (z.current = _));
            }),
            i.useLayoutEffect(() => {
                let e = h.current?.getScrollerNode(),
                    t = y.current;
                if (null != e && null != t) {
                    let l = O.current;
                    if (g.current) h.current?.scrollToBottom();
                    else if (null != l) {
                        let n = Array.from(t.querySelectorAll("[data-conjure-row-key]")).find(
                                (e) => e.dataset.conjureRowKey === l.key,
                            ),
                            a =
                                null == n
                                    ? 0
                                    : n.getBoundingClientRect().top - e.getBoundingClientRect().top - l.offset;
                        0 !== a && (e.scrollTop += a);
                    }
                    let n = G.current;
                    ((G.current = null), n?.(), q(), H());
                }
                U.current = new Set(P);
            }, [_, P, D.start, D.end, h, g, q, H]));
        let W = l.at(-1),
            X = (function (e, t, l) {
                var n;
                let a = (0, li.Ay)(e),
                    r = (0, iL.A)(),
                    s = (function (e) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let l = e[t];
                            if ("publish_notice" !== l.kind && "project_event" !== l.kind) {
                                if ("user" === l.role) return null;
                                if ((0, eb.BL)(l)) return l;
                                if (!(0, eb.B0)(e, t)) break;
                            }
                        }
                        return null;
                    })(t),
                    o = t.at(-1),
                    u = {
                        projectId: e,
                        draftHasText: l,
                        publishing: a?.publishing === !0,
                        drift: a?.isUpdate === !0,
                        messageAt: null != o ? Math.max(o.created_at, o.finished_at ?? 0, o.settled_at ?? 0) : null,
                        visible: r,
                    },
                    [c, d] = i.useState(() => iF(u, Date.now())),
                    m = (function (e, t, l) {
                        if (e.projectId !== t.projectId) return iF(t, l());
                        if (
                            e.draftHasText === t.draftHasText &&
                            e.publishing === t.publishing &&
                            e.drift === t.drift &&
                            e.messageAt === t.messageAt &&
                            e.visible === t.visible
                        )
                            return e;
                        let n = l(),
                            a = { ...e, now: n };
                        if (
                            (e.draftHasText !== t.draftHasText &&
                                (a = {
                                    ...a,
                                    draftHasText: t.draftHasText,
                                    draftTyped: t.draftHasText,
                                    lastActivityAt: n,
                                    outdatedUpdating: t.publishing && a.outdatedUpdating,
                                }),
                            e.publishing !== t.publishing)
                        ) {
                            let e = a.outdatedUpdating && (t.publishing || t.drift);
                            a = {
                                ...a,
                                publishing: t.publishing,
                                lastActivityAt: e ? a.lastActivityAt : n,
                                outdatedShown: !1,
                                outdatedBackoff: 0,
                                outdatedUpdating: t.publishing && a.outdatedUpdating,
                            };
                        }
                        if (
                            (e.drift !== t.drift &&
                                ((a = { ...a, drift: t.drift }),
                                t.drift || (a = { ...a, outdatedShown: !1, outdatedBackoff: 0 })),
                            e.messageAt !== t.messageAt)
                        ) {
                            let l = null == t.messageAt ? null : Math.min(t.messageAt, n);
                            ((a = (function (e) {
                                if (!e.outdatedShown || e.publishing) return e;
                                let t = Math.min(e.outdatedBackoff + 1, iD.length - 1);
                                return { ...e, outdatedShown: !1, outdatedBackoff: t };
                            })({ ...a, messageAt: t.messageAt, lastMessageAt: l })).publishing ||
                                (a = { ...a, outdatedUpdating: !1 }),
                                t.visible || null == e.messageAt || (a = { ...a, unseen: !0 }));
                        }
                        return (
                            e.visible !== t.visible &&
                                ((a = { ...a, visible: t.visible }),
                                t.visible
                                    ? (n - (e.hiddenAt ?? n) >= 6e5
                                          ? (a = { ...a, visitStartedAt: n })
                                          : a.unseen && (a = { ...a, seenAt: n }),
                                      (a = { ...a, hiddenAt: null, unseen: !1 }))
                                    : (a = { ...a, hiddenAt: n, unseen: !1 })),
                            a
                        );
                    })(c, u, Date.now),
                    f =
                        null == s ||
                        null != (n = s).awaitingUser ||
                        null != n.secretRequest ||
                        null != n.settingsRequest ||
                        (n.intake?.questions.length ?? 0) > 0
                            ? null
                            : {
                                  turn: s,
                                  publish: a,
                                  draftHasText: l,
                                  draftTyped: m.draftTyped && l,
                                  outdatedUpdating: m.outdatedUpdating,
                              },
                    { shown: h, nextDueAt: g } = (function (e, t) {
                        var l;
                        let n;
                        if (t.unseen) return { shown: null, nextDueAt: null };
                        let a = e.filter((e) => e.eligible).sort((e, t) => t.priority - e.priority)[0];
                        if (null == a) return { shown: null, nextDueAt: null };
                        let r =
                            ((n = Math.max(
                                0,
                                t.now -
                                    ((l = a.clock),
                                    Math.max(
                                        t.lastMessageAt ?? -1 / 0,
                                        t.lastActivityAt ?? -1 / 0,
                                        t.seenAt ?? -1 / 0,
                                        "visit" === l ? t.visitStartedAt : -1 / 0,
                                    )),
                            )),
                            t.now + Math.max(0, a.idleDelayMs - n));
                        return r <= t.now ? { shown: a.key, nextDueAt: null } : { shown: null, nextDueAt: r };
                    })(
                        i$.map((e) => ({
                            ...e,
                            idleDelayMs:
                                "outdated" === e.key && m.outdatedUpdating
                                    ? 0
                                    : (e.backoffDelaysMs?.[m.outdatedBackoff] ?? e.idleDelayMs),
                            eligible: null != f && e.eligible(f),
                        })),
                        m,
                    );
                return (
                    "outdated" !== h || m.outdatedShown ? m !== c && d(m) : d({ ...m, outdatedShown: !0 }),
                    i.useEffect(() => {
                        function t() {
                            d((e) => ({ ...e, outdatedUpdating: !0 }));
                        }
                        let l = iz.get(e) ?? new Set();
                        return (
                            iz.set(e, l),
                            l.add(t),
                            () => {
                                (l.delete(t), 0 === l.size && iz.delete(e));
                            }
                        );
                    }, [e]),
                    i.useEffect(() => {
                        if (null == g) return;
                        let e = setTimeout(() => d((e) => ({ ...e, now: Date.now() })), Math.max(0, g - Date.now()));
                        return () => clearTimeout(e);
                    }, [g, m.now]),
                    h
                );
            })(t, l, !0 === u),
            J = i.useCallback(
                (e) => {
                    switch (e) {
                        case "outdated":
                            return (0, r.jsx)(sw, {
                                groupStart: !1,
                                content: "",
                                accessories: (0, r.jsx)(iG, { projectId: t, notice: "outdated" }),
                            });
                        case "ideas":
                            return (0, r.jsx)("div", {
                                className: s_.u$,
                                children: (0, r.jsx)(sw, {
                                    content: eu.intl.string(eo.default.s96AWB),
                                    accessories: (0, r.jsx)(r1, { onAsk: s }),
                                }),
                            });
                    }
                },
                [t, s],
            ),
            Q = i.useMemo(
                () =>
                    (function (e) {
                        if (e.at(-1)?.role !== "assistant") return null;
                        for (let t = e.length - 1; t >= 0; t--) {
                            let l = e[t];
                            if ("assistant" === l.role) {
                                if (!(0, eb.BL)(l) || "plan_implemented" === l.kind) return null;
                                if (null != l.proposal) return l.render_id;
                            }
                        }
                        return null;
                    })(l),
                [l],
            ),
            Y = i.useMemo(
                () =>
                    (function (e) {
                        let t = new Map(),
                            l = null,
                            n = 0;
                        for (let a of e)
                            if ("assistant" === a.role) {
                                if ("plan_implemented" === a.kind) {
                                    ((l = null), (n = 0));
                                    continue;
                                }
                                null != a.proposal &&
                                    (null != l && t.set(l, { version: n, superseded: !0 }),
                                    (n += 1),
                                    t.set(a.render_id, { version: n, superseded: !1 }),
                                    (l = a.render_id));
                            }
                        return t;
                    })(l),
                [l],
            ),
            Z = i.useMemo(
                () =>
                    (function (e) {
                        let t = new Map(),
                            l = new Set();
                        for (let n = e.length - 1; n >= 0; n--) {
                            let a = e[n];
                            if ("user" === a.role) {
                                l.add(a.content.trim());
                                continue;
                            }
                            if (null == a.ideas) continue;
                            let r = new Set();
                            for (let e of a.ideas) l.has(e.implementation_prompt.trim()) && r.add(e.id);
                            t.set(a.render_id, r);
                        }
                        return t;
                    })(l),
                [l],
            ),
            ee = i.useMemo(
                () =>
                    (function (e) {
                        let t = new Map();
                        for (let l of e)
                            "user" !== l.role ||
                                t.has(l.id) ||
                                t.set(l.id, {
                                    id: l.id,
                                    content: l.content,
                                    ...(null != l.user_id ? { userId: l.user_id } : {}),
                                    createdAt: l.created_at,
                                });
                        return t;
                    })(l),
                [l],
            ),
            et =
                (W?.role !== "assistant" || null == W.awaitingUser || null == W.secretRequest
                    ? null
                    : (0, eb.BL)(W)
                      ? W.awaitingUser
                      : null) ?? void 0,
            el = (0, m.bG)([en.Ay], () => en.Ay.getSettings(t)?.secrets, [t]),
            ea = i.useMemo(
                () =>
                    (function (e, t) {
                        let l = null != t ? new Set(t.filter((e) => e.set).map((e) => e.name)) : null,
                            n = new Map(),
                            a = new Set(),
                            r = !1,
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
                                            t === eu.intl.string(eo.default.UGqnoV) ||
                                            t === eu.intl.string(eo.default.sMQt5O)
                                        );
                                    })(s);
                                continue;
                            }
                            let o = s.secretRequest?.fields ?? [];
                            if (0 === o.length || !(0, eb.BL)(s)) continue;
                            let u = i;
                            for (let e of (u && null == l
                                ? n.set(s.render_id, "pending")
                                : u && null != l && o.every((e) => l.has(e.name))
                                  ? n.set(s.render_id, "received")
                                  : r
                                    ? n.set(s.render_id, o.some((e) => a.has(e.name)) ? "superseded" : "inactive")
                                    : n.set(s.render_id, "open"),
                            o))
                                a.add(e.name);
                            ((r = !0), (i = !1));
                        }
                        return n;
                    })(l, el),
                [l, el],
            );
        if (0 === l.length) {
            if ("loading" === n)
                return (0, r.jsx)("ol", {
                    className: o()(s_.x7, s_.jH),
                    "aria-busy": !0,
                    children: (0, r.jsx)("li", { className: s_.Ub, children: (0, r.jsx)(w.y, {}) }),
                });
            let e = "unavailable" === n ? eo.default.Td4Sf4 : eo.default.V1QiNz;
            return (0, r.jsx)("ol", {
                className: s_.x7,
                children: (0, r.jsx)(sz, {
                    role: "assistant",
                    children: (0, r.jsx)(sw, { content: eu.intl.string(e) }),
                }),
            });
        }
        return (0, r.jsx)(sP.Provider, {
            value: U,
            children: (0, r.jsxs)("ol", {
                ref: A,
                className: s_.x7,
                children: [
                    _.slice(D.start, D.end).map((e) => {
                        let l = e.message;
                        if ("closing" !== e.kind)
                            return (0, r.jsx)(
                                sD,
                                {
                                    row: e,
                                    projectId: t,
                                    highlighted: "user" === e.kind && S === l.id,
                                    currentUserId: "user" === e.kind ? T : void 0,
                                },
                                e.key,
                            );
                        let n = l === W;
                        return (0, r.jsx)(
                            sD,
                            {
                                row: e,
                                projectId: t,
                                highlighted: !1,
                                replyTo: null != l.in_reply_to ? ee.get(l.in_reply_to) : void 0,
                                onJumpTo: K,
                                planVersion: Y.get(l.render_id),
                                pickedIdeaIds: Z.get(l.render_id),
                                secretRequestAwaiting: n ? et : void 0,
                                secretRequestStatus: ea.get(l.render_id),
                                settingsFloating: l.id === d,
                                isNewest: n,
                                onPickIdea: a,
                                onApprovePlan: l.render_id === Q ? c : void 0,
                                onRestoreVersion: f,
                            },
                            e.key,
                        );
                    }),
                    null != et && V
                        ? (0, r.jsx)(sz, {
                              role: "assistant",
                              continuation: !0,
                              children: (0, r.jsx)(sw, {
                                  groupStart: !1,
                                  content: "",
                                  accessories: (0, r.jsx)(j.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: eu.intl.string(eo.default.YR8A2v),
                                  }),
                              }),
                          })
                        : null,
                    V
                        ? (0, r.jsx)("li", {
                              role: "none",
                              className: s_.q3,
                              children: (0, r.jsx)(iV, { reminder: X, renderReminder: J }),
                          })
                        : null,
                ],
            }),
        });
    }),
    sD = i.memo(
        function (e) {
            let { row: t, projectId: l, highlighted: n, currentUserId: a, ...i } = e,
                s = t.message;
            switch (t.kind) {
                case "user": {
                    let e = null != s.attachments && s.attachments.length > 0 ? s.attachments : null;
                    return (0, r.jsx)(sz, {
                        rowKey: t.key,
                        role: "user",
                        anchorId: s.id,
                        highlighted: n,
                        continuation: !t.groupStart,
                        children: (0, r.jsx)(sy, {
                            groupStart: t.groupStart,
                            content: s.content,
                            createdAt: s.created_at,
                            userId: s.user_id,
                            agentReaction: s.agentReaction,
                            accessories: null != e ? (0, r.jsx)(r5.A, { projectId: l, attachments: e }) : void 0,
                            onQueuedAction: (function (e, t, l) {
                                if (
                                    "user" === t.role &&
                                    "queued" === t.disposition &&
                                    null != t.user_id &&
                                    t.user_id === l
                                )
                                    return (l) => (0, en.tp)(e, t.id, l);
                            })(l, s, a),
                        }),
                    });
                }
                case "prose":
                    return (0, r.jsx)(sz, {
                        rowKey: t.key,
                        role: "assistant",
                        continuation: !t.groupStart,
                        children: (0, r.jsx)(sw, {
                            groupStart: t.groupStart,
                            content: t.content,
                            streaming: t.streaming,
                            createdAt: s.created_at,
                            accessories:
                                t.hostsAttachments && null != s.attachments
                                    ? (0, r.jsx)(r5.A, { projectId: l, attachments: s.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, r.jsx)(sz, {
                        rowKey: t.key,
                        role: "assistant",
                        children: (0, r.jsx)(il, {
                            projectId: l,
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
                    return (0, r.jsx)(sz, {
                        rowKey: t.key,
                        role: "assistant",
                        continuation: !t.groupStart,
                        children: (0, r.jsx)(sw, {
                            groupStart: t.groupStart,
                            content: null == s.publishNotice ? s.content : "",
                            createdAt: s.created_at,
                            accessories:
                                null == s.publishNotice
                                    ? void 0
                                    : (0, r.jsx)(iG, { projectId: l, notice: s.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, r.jsx)(sz, {
                        rowKey: t.key,
                        role: "assistant",
                        continuation: !t.groupStart,
                        children: (0, r.jsx)(sw, {
                            groupStart: t.groupStart,
                            content: null == s.projectEvent ? s.content : "",
                            createdAt: s.created_at,
                            accessories:
                                null == s.projectEvent
                                    ? void 0
                                    : (0, r.jsx)(sE, { projectId: l, event: s.projectEvent }),
                        }),
                    });
                case "interrupted":
                    return (0, r.jsx)(sz, {
                        rowKey: t.key,
                        role: "assistant",
                        children: (0, r.jsx)(il, { projectId: l, interrupted: !0, steps: s.steps }),
                    });
                case "legacyTodos":
                    return (0, r.jsx)(sz, {
                        rowKey: t.key,
                        role: "assistant",
                        children: (0, r.jsx)(il, {
                            projectId: l,
                            steps: s$,
                            active: !1,
                            checklistSuperseded: t.checklistSuperseded,
                            todos: s.todos,
                            provisionalTodo: s.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, r.jsx)(sF, { row: t, projectId: l, ...i });
            }
        },
        function (e, t) {
            return (
                (0, i_.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, i_.A)(e.row, t.row, ["message"]) &&
                e.row.kind === t.row.kind &&
                (function (e, t, l) {
                    if (t === l) return !0;
                    switch (e) {
                        case "user":
                            return (
                                t.id === l.id &&
                                t.content === l.content &&
                                t.created_at === l.created_at &&
                                t.user_id === l.user_id &&
                                t.agentReaction === l.agentReaction &&
                                t.attachments === l.attachments &&
                                t.disposition === l.disposition
                            );
                        case "prose":
                            return t.created_at === l.created_at && t.attachments === l.attachments;
                        case "publishNotice":
                            return (
                                t.content === l.content &&
                                t.created_at === l.created_at &&
                                t.publishNotice === l.publishNotice
                            );
                        case "projectEvent":
                            return (
                                t.content === l.content &&
                                t.created_at === l.created_at &&
                                t.projectEvent === l.projectEvent
                            );
                        default:
                            return !1;
                    }
                })(e.row.kind, e.row.message, t.row.message) &&
                (0, i_.A)(e.replyTo, t.replyTo) &&
                (0, i_.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let l of e) if (!t.has(l)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    s$ = [];
function sF(e) {
    let {
            row: t,
            projectId: l,
            replyTo: n,
            onJumpTo: a,
            planVersion: i,
            pickedIdeaIds: s,
            secretRequestAwaiting: o,
            secretRequestStatus: u,
            settingsFloating: c = !1,
            isNewest: d = !1,
            onPickIdea: m,
            onApprovePlan: f,
            onRestoreVersion: h,
        } = e,
        g = t.message,
        x =
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
        p = null != x && null != h ? () => sR(x, h) : void 0,
        v = g.in_reply_to,
        j = g.restoreProposal;
    return (0, r.jsx)(sz, {
        rowKey: t.key,
        role: "assistant",
        continuation: !t.groupStart,
        onContextMenu:
            null != p
                ? (e) => {
                      (0, D.jA)(e, (e) => (0, r.jsx)(sI, { ...e, onRestoreVersion: p }));
                  }
                : void 0,
        children: (0, r.jsx)(sw, {
            groupStart: t.groupStart,
            buttons: (0, r.jsx)(sm, { groupStart: t.groupStart, content: t.content, onRestoreVersion: p }),
            content: t.content,
            createdAt: g.created_at,
            replyTo: n,
            onJumpToReplied: null != v && null != a ? () => a(v) : void 0,
            accessories: (0, r.jsx)(ia, {
                projectId: l,
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
                onPickIdea: m,
                onApprovePlan: f,
                restoreProposal: j,
                onRestoreProposal:
                    null != j && null != h && d
                        ? () =>
                              sR(
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
function sz(e) {
    let {
            role: t,
            children: l,
            rowKey: n,
            anchorId: a,
            highlighted: s = !1,
            continuation: u = !1,
            onContextMenu: c,
        } = e,
        d = i.useContext(sP),
        [m] = i.useState(() => !iP.A.isFocused() || (null != n && d?.current.has(n) === !0));
    return (0, r.jsx)("li", {
        onContextMenu: c,
        "data-role": t,
        "data-conjure-message": a,
        "data-conjure-row-key": n,
        className: o()(s_.xk, { [s_.g5]: m, [s_.Qo]: s, [s_.q3]: u }),
        children: l,
    });
}
let sO = [eo.default["AX+5lk"], eo.default.VAU6A7, eo.default["1emysd"], eo.default.EXHX3L, eo.default.ChslmX];
function sG(e) {
    return sO.some((t) => eu.intl.string(t) === e);
}
function sU(e) {
    switch (e) {
        case "connecting":
            return eu.intl.string(eo.default["ECl+Dx"]);
        case "closed":
            return eu.intl.string(eo.default.mQZSp1);
        case "failed":
            return eu.intl.string(eo.default.xzJSZ6);
    }
}
var sq = l(823376),
    sH = l(187447);
function sB(e) {
    let { activity: t, id: l } = e,
        n = (0, iL.A)(),
        { text: a, revealing: s } = st(t?.text ?? "", { streaming: n && null != t && "end" !== t.phase }),
        u = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            u.current?.scrollToBottom();
        }, [a]),
        (0, r.jsx)("div", {
            id: l,
            role: "tooltip",
            className: sH.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, r.jsx)(l4.Ch, {
                ref: u,
                className: sH.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, r.jsx)("div", {
                    className: o()(ie.PT, sH.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: au.A.parse(a, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var sK = l(53659);
function sV(e) {
    let {
            activity: t,
            compacting: l = !1,
            saving: n = !1,
            restoring: a = !1,
            recalling: s = !1,
            controlling: u = !1,
            spoken: c,
            onSpokenChange: d,
        } = e,
        m = i.useRef(null),
        f = i.useId(),
        [h, g] = i.useState(null),
        x = (function (e) {
            let {
                    activity: t,
                    compacting: l = !1,
                    saving: n = !1,
                    restoring: a = !1,
                    recalling: r = !1,
                    controlling: i = !1,
                } = e,
                s = null != t && "end" !== t.phase;
            return i
                ? eo.default["1jqaAc"]
                : a
                  ? eo.default.M4KI5F
                  : r
                    ? sO[0]
                    : n
                      ? eo.default.mKK6wB
                      : l
                        ? eo.default.xnCAaP
                        : s
                          ? eo.default.izrt52
                          : eo.default.L9EDub;
        })({ activity: t, compacting: l, saving: n, restoring: a, recalling: s, controlling: u }),
        p = eu.intl.string(x),
        v = x === sO["0"],
        [y, k] = i.useState(c ?? p),
        w = (0, iL.A)();
    (!n && (w || v)) || y === p || k(p);
    let N = i.useRef(p);
    (i.useEffect(() => {
        N.current = p;
    }, [p]),
        i.useEffect(() => {
            d?.(y);
        }, [y, d]));
    let A = i.useRef(null),
        S = i.useRef(y);
    i.useEffect(() => {
        S.current = y;
    }, [y]);
    let C = i.useRef(v),
        E = i.useRef(0);
    (i.useEffect(() => {
        ((C.current = v), !v && sG(S.current) && k(N.current));
    }, [v]),
        i.useEffect(() => {
            if (!w) return;
            let e = 0,
                t = 0;
            function l() {
                if (C.current) {
                    var e;
                    ((E.current = sG(S.current) ? E.current + 1 : 0),
                        k(((e = E.current), eu.intl.string(sO[e % sO.length]))));
                } else N.current !== S.current ? k(N.current) : A.current?.play();
            }
            return (
                (e = window.setTimeout(() => {
                    (l(), (t = window.setInterval(l, 2400)));
                }, 1800)),
                () => {
                    (window.clearTimeout(e), window.clearInterval(t));
                }
            );
        }, [w]));
    let I = null != t && "" !== t.text,
        M = t?.session ?? null,
        T = I && null != M && h === M,
        _ = i.useCallback(() => {
            I && null != M && g((e) => (e === M ? null : M));
        }, [I, M]),
        P = i.useCallback(() => g(null), []);
    return (0, r.jsx)(Z.Y, {
        targetElementRef: m,
        position: "top",
        align: "left",
        shouldShow: T,
        onRequestClose: P,
        renderPopout: () => (0, r.jsx)(sB, { id: f, activity: t }),
        children: () =>
            (0, r.jsxs)(b.D, {
                innerRef: m,
                className: o()(sK.hF, I && sK.Xd),
                "aria-label": eu.intl.string(a ? eo.default.qqlUiW : v ? sO["0"] : eo.default["Uuj/gh"]),
                "aria-expanded": T,
                "aria-describedby": T ? f : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": eu.intl.string(x),
                onClick: _,
                children: [
                    (0, r.jsx)("span", {
                        className: sK.bl,
                        children: (0, r.jsx)(sq.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, r.jsx)("span", {
                        className: sK.xu,
                        "aria-hidden": !!u || !!v || void 0,
                        children: w
                            ? (0, r.jsx)(eP.o, {
                                  ref: A,
                                  text: y,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  duration: 1e3,
                                  delay: null,
                                  className: sK.yE,
                              })
                            : (0, r.jsx)(j.E, {
                                  tag: "span",
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  className: sK.yE,
                                  children: y,
                              }),
                    }),
                ],
            }),
    });
}
let sW = { second: 1e3, minute: 6e4 };
function sX(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [l, n] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let l;
            if (null == e) return;
            let a = sW[t];
            return (
                !(function t() {
                    let r = Date.now();
                    (n(r), (l = setTimeout(t, a - ((((r - e) % a) + a) % a))));
                })(),
                () => clearTimeout(l)
            );
        }, [e, t]),
        null == e ? void 0 : Math.max(0, l - e)
    );
}
var sJ = l(719374);
function sQ(e) {
    let { startedAt: t } = e,
        l = sX(t);
    return (0, r.jsx)(j.E, {
        tag: "span",
        variant: "text-xs/medium",
        color: "text-muted",
        "aria-hidden": !0,
        className: sJ.$,
        "data-conjure-turn-timer": !0,
        children: (0, ac.C7)(l),
    });
}
function sY(e) {
    let { startedAt: t } = e,
        l = sX(t, "minute");
    return (0, r.jsx)(k.A, { role: "timer", children: (0, ac.Us)(l) });
}
var sZ = l(436804);
function s0(e) {
    return e.toLocaleString();
}
function s1(e) {
    let { label: t, usage: l, cached: n = !0 } = e;
    return (0, r.jsxs)("div", {
        className: sZ.Q$,
        children: [
            (0, r.jsxs)("div", {
                className: sZ.mf,
                children: [
                    (0, r.jsx)(j.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, r.jsxs)(j.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [s0((0, Y.aM)(l)), " tokens"],
                    }),
                ],
            }),
            (0, r.jsxs)(j.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    s0(l.input_tokens),
                    " in \xb7 ",
                    s0(l.output_tokens),
                    " out",
                    n
                        ? ` \xb7 ${s0(l.cache_creation_input_tokens)} cache write \xb7 ${s0(l.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function s2(e) {
    let { project: t } = e,
        l = (0, Y.wU)(t.compaction),
        n = (0, Y.wU)(t.classifier),
        a = (0, Y.wV)(t.orchestrator, t.codegen),
        i = (0, Y.wV)(a, l);
    return (0, r.jsxs)("div", {
        className: sZ.si,
        role: "dialog",
        "aria-label": eu.intl.string(eo.default.p5EGzq),
        children: [
            (0, r.jsx)("div", {
                className: sZ.Q$,
                children: (0, r.jsxs)("div", {
                    className: sZ.mf,
                    children: [
                        (0, r.jsxs)(j.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [s0((0, Y.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, r.jsxs)(j.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(s1, { label: eu.intl.string(eo.default["9Sj3SX"]), usage: a }),
            (0, r.jsx)(s1, { label: eu.intl.string(eo.default.ANCEo3), usage: l }),
            (0, r.jsx)(s1, { label: eu.intl.string(eo.default.ugL6D4), usage: n, cached: !1 }),
            (0, r.jsxs)("div", {
                className: sZ.mf,
                children: [
                    (0, r.jsx)(j.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: eu.intl.string(eo.default["8OUg09"]),
                    }),
                    (0, r.jsx)(j.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, Y.sj)(i) ? "\u2014" : `${Math.round(100 * (0, Y.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function s3(e) {
    let { project: t } = e,
        l = i.useRef(null);
    return (0, r.jsx)(Z.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, r.jsx)(s2, { project: t }),
        children: (e) =>
            (0, r.jsx)(b.D, {
                innerRef: l,
                className: sZ.Y$,
                "aria-label": eu.intl.string(eo.default.Z96gxQ),
                ...e,
                children: (0, r.jsx)(aG.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var s4 = l(997421);
function s6(e) {
    let t,
        {
            projectId: l,
            thinking: n,
            turnStartedAt: a,
            restoring: s = !1,
            recalling: o = !1,
            thinkingActivity: u,
            compacting: c,
            saving: d,
            projectUsage: m,
            connState: f,
        } = e,
        h = (0, tx.Zv)(l),
        [g, x] = i.useState(null),
        p = i.useCallback((e) => x(sG(e) || e === eu.intl.string(eo.default.mKK6wB) ? null : e), []),
        v =
            null == m
                ? null
                : ((t = (0, Y.a7)(m.cost_usd)),
                  {
                      text: eu.intl.formatToPlainString(eo.default.gMuw5d, { runes: t.toLocaleString() }),
                      aria: eu.intl.formatToPlainString(eo.default.Z4LvGa, { runes: t, turns: m.turns }),
                  }),
        b = n && null != a;
    return (0, r.jsxs)("div", {
        className: s4.jf,
        children: [
            (0, r.jsxs)("div", {
                className: s4.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    n || s || o || h || !0 === d
                        ? (0, r.jsx)(sV, {
                              activity: u,
                              compacting: c,
                              saving: d,
                              restoring: s,
                              recalling: o,
                              controlling: h,
                              spoken: g,
                              onSpokenChange: p,
                          })
                        : null,
                    b ? (0, r.jsx)(sQ, { startedAt: a }) : null,
                ],
            }),
            b ? (0, r.jsx)(sY, { startedAt: a }) : null,
            null == m || null == v
                ? null
                : (0, r.jsxs)("span", {
                      className: s4.BP,
                      children: [
                          (0, r.jsx)(j.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": v.aria,
                              children: v.text,
                          }),
                          (0, r.jsx)(s3, { project: m }),
                      ],
                  }),
            "open" === f
                ? null
                : (0, r.jsx)(j.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === f ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": eu.intl.formatToPlainString(eo.default["tCo+ZM"], { status: sU(f) }),
                      "data-conjure-conn": !0,
                      "data-state": f,
                      className: s4.XF,
                      children: sU(f),
                  }),
        ],
    });
}
let s7 = ["wheel", "touchstart", "pointerdown", "keydown"];
var s5 = l(698638),
    s8 = l(608711);
let s9 = [eu.intl.string(eo.default["9w+Chc"]), eu.intl.string(eo.default.WAvmdq), eu.intl.string(eo.default.SKsrzl)];
function oe(e) {
    var t;
    let { projectId: l, restoreState: n, onRestoreVersion: a, onImportProject: s } = e,
        o = (0, m.bG)([eb.Ay], () => eb.Ay.getMessages(l), [l]),
        u = (0, m.bG)([en.Ay], () => en.Ay.getConnState(l), [l]),
        c = (0, m.bG)([en.Ay], () => en.Ay.isChatStopped(l), [l]),
        d = (0, m.bG)([eb.Ay], () => eb.Ay.getProjectUsage(l), [l]),
        f = (0, m.bG)([eb.Ay], () => eb.Ay.getThinkingActivity(l), [l]),
        h = (0, m.bG)([eb.Ay], () => eb.Ay.isCompacting(l), [l]),
        g = (0, m.bG)([eb.Ay], () => eb.Ay.isSaving(l), [l]),
        x = (0, m.bG)([en.Ay], () => en.Ay.getModelSettings(l), [l]),
        p = i.useRef(null),
        v = i.useRef(null),
        b = i.useRef(null),
        {
            stickToBottomRef: y,
            pinned: k,
            atBottom: w,
            unpin: A,
            releasePinHold: S,
            showsLatest: C,
            showsLatestRef: E,
            handleShowsLatestChange: I,
            updatePin: M,
        } = (function (e) {
            let t = i.useRef(!0),
                [l, n] = i.useState(!0),
                [a, r] = i.useState(!0),
                s = i.useRef(!1),
                o = i.useCallback(() => {
                    ((s.current = !0), (t.current = !1), n(!1));
                }, []),
                u = i.useCallback(() => {
                    s.current = !1;
                }, []),
                [c, d] = i.useState(!0),
                m = i.useRef(!0),
                f = i.useCallback((e) => {
                    ((m.current = e), d(e));
                }, []);
            i.useLayoutEffect(() => {
                let t = e.current?.getScrollerNode();
                if (null != t) {
                    for (let e of s7) t.addEventListener(e, u, { passive: !0 });
                    return () => {
                        for (let e of s7) t.removeEventListener(e, u);
                    };
                }
            }, [e, u]);
            let h = i.useCallback(() => {
                let l = e.current;
                if (null == l) return;
                let a = l.getDistanceFromBottom(),
                    i = !s.current && a < 32 && m.current;
                t.current = i;
                let o = a > 1 || !m.current;
                (r((e) => (!o === e ? e : !o)), n((e) => (e === i ? e : i)));
            }, [e]);
            return {
                stickToBottomRef: t,
                pinned: l,
                atBottom: a,
                unpin: o,
                releasePinHold: u,
                showsLatest: c,
                showsLatestRef: m,
                handleShowsLatestChange: f,
                updatePin: h,
            };
        })(v),
        T = i.useCallback(() => {
            function e() {
                let e = p.current;
                if (null == e) return;
                let t = e.querySelector('[data-conjure-turn-status="true"][data-live="true"]'),
                    l = e.querySelectorAll('[data-conjure-turn-status="true"]'),
                    n = t ?? l[l.length - 1];
                if (null == n) return;
                let a = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
                n.scrollIntoView({ block: "center", behavior: a ? "auto" : "smooth" });
            }
            (S(), E.current ? e() : b.current?.showLatest(e));
        }, [S, E]),
        _ = i.useCallback(() => {
            (M(), b.current?.handleScroll());
        }, [M]);
    (i.useLayoutEffect(() => {
        let e = p.current;
        if (null == e) return;
        let t = v.current?.getScrollerNode(),
            l = e.getBoundingClientRect().width,
            n = t?.getBoundingClientRect().height,
            a = new ResizeObserver((t) => {
                let a = !1;
                for (let r of t)
                    if (r.target === e) {
                        let e = r.contentRect.width;
                        if (e === l) continue;
                        ((l = e), (a = !0));
                    } else {
                        let e = r.contentRect.height;
                        if (e === n) continue;
                        ((n = e), (a = !0));
                    }
                a && (y.current ? v.current?.scrollToBottom() : b.current?.recordAnchor());
            });
        return (a.observe(e), null != t && a.observe(t), () => a.disconnect());
    }, [y]),
        i.useEffect(() => {
            (0, en.Hc)(l);
        }, [l]),
        (0, ey.E1)(l));
    let P = e8(l),
        R = i.useCallback(
            (e, t) => {
                (0, en.dv)(l, e, t);
            },
            [l],
        ),
        L = i.useCallback(
            (e, t) => {
                0 === P.annotations.length
                    ? R(e, t)
                    : (R(
                          (function (e) {
                              let { annotations: t, metaComment: l, context: n } = e,
                                  a = t.filter((e) => eK(e.comment)),
                                  r = [];
                              if (
                                  (r.push(
                                      `My design feedback: ${1 === a.length ? "1 comment" : `${a.length} comments`} on the app.`,
                                  ),
                                  null != n)
                              ) {
                                  let e = n.title.trim(),
                                      t = "" !== e ? `${e} (${n.url})` : n.url;
                                  (r.push(`Page: ${t}, viewport ${n.viewport.width}x${n.viewport.height}.`),
                                      r.push(
                                          "Element coordinates below are viewport coordinates in that frame. The refs come from one snapshot taken when this feedback was collected, so re-snapshot before acting on them.",
                                      ));
                              }
                              a.forEach((e, t) => {
                                  let l;
                                  (r.push(""),
                                      r.push(`${t + 1}. ${eX(e.target)}`),
                                      r.push(
                                          `   Feedback: ${(l = e.comment.trim()).length <= 1e3 ? l : `${l.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let i = l.trim();
                              return ("" !== i && (r.push(""), r.push(`Note for the whole batch: ${i}`)), r.join("\n"));
                          })({ annotations: P.annotations, metaComment: e, context: P.context }),
                          t,
                      ),
                      e4(l));
            },
            [P, R, l],
        ),
        D = i.useCallback(() => (0, en.fu)(l), [l]),
        $ = i.useCallback((e) => nV(l, e.implementation_prompt), [l]),
        [F, z] = (function (e) {
            let [t, l] = i.useState(() => as(e)),
                [n, a] = i.useState(e),
                r = n !== e,
                s = r ? as(e) : t;
            return (r && (a(e), l(s)), [s, l]);
        })(l),
        O = i.useCallback(() => R(eu.intl.string(eo.default["t5CN3+"])), [R]),
        G = i.useCallback((e, t, n) => nV(l, e, { clarificationAnswers: t, attachments: n }), [l]),
        U = i.useCallback((e) => (0, en.XZ)(l, e), [l]),
        q = i.useCallback((e) => (0, en.vX)(l, e), [l]),
        H = i.useCallback((e) => ib(l, "chat", Array.from(e), q), [l, q]),
        B = i.useCallback(() => nV(l, eu.intl.string(eo.default.Zc7gML)), [l]),
        K = n?.status === "restoring",
        V = "open" === u && !c && !K,
        W = o[o.length - 1],
        X = null != W && "assistant" === W.role && null != W.proposal,
        [J, Q] = i.useState(null),
        Y = W?.clarification != null && W.clarification.id !== J ? W.clarification : null,
        Z = i.useCallback(() => {
            null != Y && Q(Y.id);
        }, [Y]),
        ee = (0, m.bG)([en.Ay], () => en.Ay.getSettings(l), [l]),
        [et, el] = i.useState(null),
        ea =
            null != W &&
            "assistant" === W.role &&
            null != W.settingsRequest &&
            (0, eb.BL)(W) &&
            W.id !== et &&
            ((t = W.settingsRequest),
            null != ee &&
                (t.keys ?? []).some((e) => {
                    let t = ee.schema.find((t) => t.key === e);
                    if (null == t) return !1;
                    if ("secret" === t.type) return ee.secrets.find((t) => t.name === e)?.set !== !0;
                    let l = ee.values[e];
                    return null == l || "" === l;
                }))
                ? W
                : null,
        er = ea?.settingsRequest ?? null,
        ei = i.useCallback(() => {
            null != ea && el(ea.id);
        }, [ea]),
        es = null != er,
        ec = (function (e) {
            let { historyLoaded: t, historyUnavailable: l, connState: n } = e;
            return l ? "unavailable" : t ? "greeting" : "failed" === n || "closed" === n ? "unavailable" : "loading";
        })({
            historyLoaded: (0, m.bG)([eb.Ay], () => eb.Ay.hasLoadedHistory(l), [l]),
            historyUnavailable: (0, m.bG)([eb.Ay], () => eb.Ay.isHistoryUnavailable(l), [l]),
            connState: u,
        }),
        ed = "loading" === ec && 0 === o.length,
        em = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < l.length; t++) e = (31 * e + l.charCodeAt(t)) % 0x7fffffff;
            return s9[e % s9.length];
        }, [l]),
        ef = X ? eu.intl.string(eo.default.Zc7gML) : "greeting" === ec && 0 === o.length ? em : null,
        eh = i.useMemo(() => {
            for (let e = o.length - 1; e >= 0; e--) {
                let t = o[e];
                if ("assistant" === t.role && !(0, eb.BL)(t)) return t;
            }
        }, [o]),
        eg = null != eh,
        ex =
            null != eh
                ? (function (e) {
                      let t = e.turn_id ?? e.steps.find((e) => null != e.turn_id)?.turn_id;
                      if (null != t && /^\d+$/.test(t)) {
                          let e = ae.default.extractTimestamp(t);
                          if (Number.isFinite(e) && e > 0) return e;
                      }
                      return e.created_at;
                  })(eh)
                : void 0,
        ep = X && V ? B : void 0,
        ev = i.useCallback(() => nV(l, eu.intl.string(eo.default.EMgIuY)), [l]),
        [ej, ek] = i.useState(null),
        [ew, eN] = i.useState(eg);
    (ew !== eg && (eN(eg), eg || ek(null)),
        i.useEffect(() => {
            if (!eg) return;
            let e = v.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let l = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? ek(null)
                        : ek(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (l.observe(t), () => l.disconnect());
        }, [eg, eh?.steps, C]));
    let eA = C ? ej : "bottom",
        eS = i.useMemo(() => (null != eh ? (0, l8.b)(eh.steps) : ""), [eh]),
        eC = i.useMemo(() => (null != eh ? ((0, l7.lt)(eh.steps) ?? eh.todos) : void 0), [eh]),
        eE = eh?.provisionalTodo,
        eI = null != eh && l5(eh),
        eM = i.useMemo(() => {
            var e;
            return null != eh ? ((e = eh.steps), it((0, l7.Jf)(e, !0).tasks)) : void 0;
        }, [eh]);
    return (0, r.jsxs)("section", {
        ref: p,
        "data-conjure-chat": !0,
        className: s8.TE,
        children: [
            V
                ? (0, r.jsx)(l6.A, {
                      title: eu.intl.string(eo.default.gy7byi),
                      description: eu.intl.string(eo.default["dkv/WO"]),
                      icons: s5.ir,
                      onDrop: H,
                  })
                : null,
            (0, r.jsx)(nx, {
                onJumpToActivity: T,
                line: eS,
                placement: eg && "top" === eA ? "top" : null,
                todos: eC,
                todosLive: eI,
                provisionalTodo: eE,
                agents: eM,
            }),
            (0, r.jsxs)("div", {
                className: s8.JX,
                children: [
                    (0, r.jsx)(l4.Ch, {
                        ref: v,
                        onScroll: _,
                        scrollbarGutter: ed ? "both-edges" : "stable",
                        className: [s8.N$, w ? null : s8.hB, es ? s8.J9 : null].filter(Boolean).join(" "),
                        children: (0, r.jsx)(sL, {
                            projectId: l,
                            messages: o,
                            emptyState: ec,
                            floatingSettingsMessageId: ea?.id,
                            onPickIdea: V ? $ : void 0,
                            onAskForIdeas: V ? O : void 0,
                            draftHasText: F,
                            onApprovePlan: V ? ev : void 0,
                            onRestoreVersion: K || eg ? void 0 : a,
                            scrollerRef: v,
                            stickToBottomRef: y,
                            pinned: k,
                            onUnpin: A,
                            handleRef: b,
                            onShowsLatestChange: I,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: s8.NJ,
                        children: (0, r.jsx)(s6, {
                            projectId: l,
                            thinking: eg,
                            turnStartedAt: ex,
                            restoring: K,
                            recalling: ed,
                            thinkingActivity: f,
                            compacting: h,
                            saving: g,
                            projectUsage: d,
                            connState: u,
                        }),
                    }),
                    null == Y
                        ? null
                        : (0, r.jsx)("div", {
                              className: es ? `${s8.B5} ${s8.J9}` : s8.B5,
                              children: (0, r.jsx)(
                                  n7,
                                  { projectId: l, clarification: Y, onSubmit: V ? G : void 0, onDismiss: Z },
                                  Y.id,
                              ),
                          }),
                    null == er
                        ? null
                        : (0, r.jsx)("div", {
                              className: s8.B5,
                              children: (0, r.jsx)(n9, { projectId: l, request: er, onDismiss: ei }, ea?.id),
                          }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: s8.Jx,
                children: [
                    (0, r.jsx)(nx, {
                        onJumpToActivity: T,
                        line: eS,
                        placement: eg && "bottom" === eA ? "bottom" : null,
                        todos: eC,
                        todosLive: eI,
                        provisionalTodo: eE,
                        agents: eM,
                    }),
                    0 === P.annotations.length
                        ? null
                        : (0, r.jsxs)("div", {
                              className: s8.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, r.jsx)(j.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: eu.intl.formatToPlainString(eo.default["7b49dS"], {
                                          count: P.annotations.length,
                                      }),
                                  }),
                                  (0, r.jsx)(j.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: eu.intl.string(eo.default["5zG+CR"]),
                                  }),
                                  (0, r.jsx)(N.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: eu.intl.string(eo.default["/zOv9+"]),
                                      onClick: () => e4(l),
                                  }),
                              ],
                          }),
                    (0, r.jsx)(iE, {
                        projectId: l,
                        canSend: V,
                        stopped: c,
                        running: eg,
                        restoring: K,
                        onSend: L,
                        hasPendingContext: P.annotations.length > 0,
                        onInterrupt: V ? D : void 0,
                        onUploadFile: q,
                        onImport: s,
                        onApprove: ep,
                        suggestion: ef,
                        questionOpen: null != Y || null != er,
                        modelSettings: x,
                        onModelSettingsChange: U,
                        onDraftHasTextChange: z,
                    }),
                ],
            }),
        ],
    });
}
var ot = l(761508),
    ol = l(540999),
    on = l(278359);
function oa(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function or(e) {
    if (e < 1e3) return String(e);
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function oi(e) {
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
var os = l(536113);
let oo = { started: os.Vf, ok: os.mo, error: os.Sr };
function ou(e) {
    let { status: t } = e;
    return (0, r.jsx)("span", {
        className: `${os.Om} ${oo[t] ?? os.Vf}`,
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
function oc(e, t) {
    return String(e).padStart(t, "0");
}
function od(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let l = Date.parse(e);
    if (Number.isNaN(l)) return null;
    let n = new Date(l),
        a = `${oc(n.getHours(), 2)}:${oc(n.getMinutes(), 2)}:${oc(n.getSeconds(), 2)}`;
    return "millis" === t ? `${a}.${oc(n.getMilliseconds(), 3)}` : a;
}
let om = ["op", "model", "tool", "setup", "worktree", "sandbox", "build", "platform", "other"],
    of = {
        op: "op",
        ws: "op",
        turn: "op",
        alarm: "op",
        side_chat: "op",
        session: "op",
        step: "op",
        model: "model",
        version_note: "model",
        tool: "tool",
        mcp: "tool",
        sandbox: "sandbox",
        worktree: "worktree",
        build: "build",
        deps: "build",
        api: "platform",
        state: "platform",
        publish: "platform",
        preview: "platform",
        healthcheck: "platform",
        usage: "platform",
        live: "platform",
        replay: "platform",
        template: "setup",
        workspace: "setup",
        declarations: "setup",
        manifest: "setup",
        storage: "setup",
        conversation: "setup",
        runtime: "setup",
        attachments: "setup",
        upstream: "setup",
        remix: "setup",
        repo: "setup",
    };
function oh(e) {
    return e.spans.find((e) => null == e.parent) ?? null;
}
function og(e) {
    return { collapsed: oy(e, (e) => e.depth > 0 && !e.children.some((e) => e.significant)), revealed: new Set() };
}
function ox(e, t) {
    let l = null;
    return (
        oj(e, (e) => {
            e.key === t && (l = e);
        }),
        l
    );
}
function op(e) {
    return null == e
        ? ""
        : Object.entries(e)
              .map((e) => {
                  let [t, l] = e;
                  return !0 === l ? t : `${t}=${String(l)}`;
              })
              .join(" ");
}
function ov(e) {
    return e.count > 1 ? e.totalMs : e.end - e.start;
}
function oj(e, t) {
    for (let l of (t(e), e.children)) oj(l, t);
}
function ob(e) {
    let t = e.name.search(/[.:]/),
        l = -1 === t ? e.name : e.name.slice(0, t),
        n = (-1 === t ? "" : e.name.slice(t + 1))
            .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
            .replace(/_/g, " ")
            .toLowerCase(),
        a = e.attrs?.cmd ?? e.attrs?.model;
    return {
        service: l,
        operation: "string" == typeof a && "" !== a ? `${n} \xb7 ${a}` : n,
        category: of[l] ?? "other",
    };
}
function oy(e, t) {
    let l = new Set();
    return (
        !(function e(n) {
            for (let a of (n.children.length > 0 && t(n) && l.add(n.key), n.children)) e(a);
        })(e),
        l
    );
}
function ok(e) {
    return `${e.name} ${op(e.attrs)}`;
}
function ow(e) {
    let t = new Map();
    for (let l of e.spans) {
        let e = t.get(l.parent) ?? [];
        (e.push(l), t.set(l.parent, e));
    }
    for (let e of t.values()) e.sort((e, t) => e.start - t.start);
    return t;
}
function oN(e, t) {
    return t.end ?? e.reported_at;
}
function oA(e, t, l, n) {
    let a = t
            .map((t) => [Math.max(t.start, l), Math.min(oN(e, t), n)])
            .filter((e) => {
                let [t, l] = e;
                return l > t;
            })
            .sort((e, t) => e[0] - t[0]),
        r = 0,
        i = -1 / 0;
    for (let [e, t] of a) t <= i || ((r += t - Math.max(e, i)), (i = t));
    return r;
}
let oS = {
    op: "Operation",
    model: "Model",
    tool: "Tool",
    setup: "Setup",
    worktree: "Git worktree",
    sandbox: "Sandbox",
    build: "Build",
    platform: "Platform",
    other: "Other",
};
function oC(e) {
    return oa(Math.round(e));
}
function oE(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function oI(e) {
    return oC(e.count > 1 ? e.totalMs : e.end - e.start);
}
function oM(e) {
    let t = oh(e)?.end;
    return null == t ? null : oa(t);
}
function oT(e) {
    return [od(new Date(e.started_at).toISOString()) ?? "", oE(e.spans.length), op(oh(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
var o_ = l(738188),
    oP = l(430993),
    oR = l(364840),
    oL = l(224640),
    oD = l(20742);
let o$ = { collapsed: new Set(), revealed: new Set() };
var oF = l(872892);
let oz = {
    op: oF.Q,
    model: oF.i3,
    tool: oF.dH,
    setup: oF.kc,
    worktree: oF.Qx,
    sandbox: oF.QH,
    build: oF.F1,
    platform: oF.Op,
    other: oF.fv,
};
function oO(e) {
    return `conjure-perf-trace-${e}`;
}
function oG(e) {
    let { start: t, end: l, extent: n, barClass: a, duration: i } = e,
        s = (t / n) * 100,
        o = ((l - t) / n) * 100;
    return (0, r.jsxs)("div", {
        className: oF.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(o) },
        children: [
            (0, r.jsx)("div", { className: a }),
            (0, r.jsx)(j.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${oF.p0} ${s + o > 85 ? oF.EU : oF.jh}`,
                children: i,
            }),
        ],
    });
}
function oU(e) {
    let { node: t, extent: l, collapsed: n, selected: a, onSelect: s, onToggle: o, onExpandSubtree: u } = e,
        c = t.children.length > 0,
        d = n ? ta._ : tU.a,
        m = i.useCallback(
            (e) => {
                (e.shiftKey && u(t.key), s(t.key));
            },
            [t.key, u, s],
        ),
        f = i.useCallback(
            (e) => {
                (e.stopPropagation(), e.shiftKey ? u(t.key) : o(t.key));
            },
            [t.key, u, o],
        );
    return (0, r.jsxs)(b.D, {
        tag: "div",
        role: "treeitem",
        id: oO(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !n : void 0,
        "aria-selected": a,
        className: `${oF.$y} ${a ? oF.wQ : ""}`,
        onClick: m,
        children: [
            (0, r.jsxs)("div", {
                className: oF.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, r.jsx)(b.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: oF.ai,
                              onClick: f,
                              children: (0, r.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, r.jsx)("span", { className: oF.YJ }),
                    (0, r.jsx)(j.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: oF.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, r.jsx)("span", { className: `${oF.nf} ${oz[t.category]}` }),
                    (0, r.jsx)(j.E, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        className: oF.eu,
                        children: t.service,
                    }),
                    (0, r.jsx)(j.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: oF.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, r.jsx)(j.E, {
                              variant: "text-xs/semibold",
                              color: "text-default",
                              className: oF.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, r.jsx)(o_.WarningIcon, { size: "xs", color: "currentColor", className: oF.ik })
                        : null,
                ],
            }),
            (0, r.jsx)(oG, {
                start: t.start,
                end: t.end,
                extent: l,
                barClass: t.failed
                    ? `${oF.M0} ${oF.Nh}`
                    : t.running
                      ? `${oF.M0} ${oF.rF}`
                      : `${oF.M0} ${oz[t.category]}`,
                duration: oI(t),
            }),
        ],
    });
}
function oq(e) {
    let { row: t, extent: l, selected: n, onReveal: a } = e;
    return (0, r.jsxs)(b.D, {
        tag: "div",
        role: "treeitem",
        id: oO(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": n,
        className: `${oF.$y} ${n ? oF.wQ : ""}`,
        onClick: () => a(t.parentKey),
        children: [
            (0, r.jsxs)("div", {
                className: oF.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, r.jsx)("span", {
                        className: oF.ai,
                        children: (0, r.jsx)(ta._, { size: "xs", color: "currentColor" }),
                    }),
                    (0, r.jsx)("span", { className: oF.U9 }),
                    (0, r.jsx)("span", { className: `${oF.nf} ${oF.dL}` }),
                    (0, r.jsx)(j.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: oF.MQ,
                        children: oE(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, r.jsx)(oG, {
                start: t.start,
                end: t.end,
                extent: l,
                barClass: `${oF.M0} ${oF.ab} ${oF.dL}`,
                duration: oC(t.totalMs),
            }),
        ],
    });
}
function oH(e) {
    let { node: t } = e;
    return null == t
        ? (0, r.jsx)(j.E, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, r.jsxs)("div", {
              className: oF._0,
              children: [
                  (0, r.jsxs)("div", {
                      className: oF.TQ,
                      children: [
                          (0, r.jsx)("span", { className: `${oF.nf} ${oz[t.category]}` }),
                          (0, r.jsx)(j.E, { variant: "text-sm/semibold", color: "text-strong", children: t.service }),
                          (0, r.jsx)(j.E, { variant: "text-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [
                          { label: "Start", value: `+${oC(e.start)}` },
                          { label: "Duration", value: oI(e) },
                      ];
                      for (let [l, n] of (e.count > 1
                          ? t.push(
                                { label: "Calls", value: String(e.count) },
                                { label: "Longest call", value: oC(e.maxMs) },
                                { label: "Spread over", value: oC(e.end - e.start) },
                            )
                          : e.children.length > 0 && t.push({ label: "Self time", value: oC(e.selfMs) }),
                      Object.entries(e.span.attrs ?? {})))
                          t.push({ label: l, value: String(n) });
                      let l = e.span.waits_on;
                      null != l && t.push({ label: "Waited on", value: `${l.span_name} in ${l.trace_name}` });
                      let n = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      return (
                          n.length > 0 && t.push({ label: "Notes", value: n.join(", ") }),
                          null != e.span.error && t.push({ label: "Error", value: e.span.error }),
                          t
                      );
                  })(t).map((e) => {
                      let { label: t, value: l } = e;
                      return (0, r.jsxs)(
                          i.Fragment,
                          {
                              children: [
                                  (0, r.jsx)(j.E, { variant: "text-xs/semibold", color: "text-muted", children: t }),
                                  (0, r.jsx)(j.E, {
                                      variant: "text-xs/normal",
                                      color: "text-default",
                                      tabularNumbers: !0,
                                      children: l,
                                  }),
                              ],
                          },
                          t,
                      );
                  }),
              ],
          });
}
function oB(e) {
    let { trace: t } = e,
        l = (function (e) {
            let t = i.useMemo(
                    () =>
                        null == e
                            ? null
                            : (function (e) {
                                  let t = ow(e);
                                  function l(e) {
                                      return !t.has(e.id) && null != e.end && null == e.error;
                                  }
                                  let n = oh(e);
                                  if (null == n) return null;
                                  let a = (function n(a, r, i, s) {
                                          let o = a[0],
                                              u = Math.min(...a.map((e) => e.start)),
                                              c = Math.max(...a.map((t) => oN(e, t))),
                                              d = a.map((t) => oN(e, t) - t.start),
                                              m = 1 === a.length ? (t.get(o.id) ?? []) : [],
                                              f = {
                                                  key: 1 === a.length ? `span-${o.id}` : `fold-${o.id}`,
                                                  depth: r,
                                                  span: o,
                                                  count: a.length,
                                                  start: u,
                                                  end: c,
                                                  totalMs: d.reduce((e, t) => e + t, 0),
                                                  maxMs: Math.max(...d),
                                                  selfMs: c - u - oA(e, m, u, c),
                                                  running: null == o.end,
                                                  failed: null != o.error,
                                                  parallel: a.some((t) =>
                                                      i.some((l) => {
                                                          var n, r, i;
                                                          return (
                                                              !a.includes(l) &&
                                                              ((n = e),
                                                              (r = t),
                                                              (i = l),
                                                              r.start < oN(n, i) && i.start < oN(n, r))
                                                          );
                                                      }),
                                                  ),
                                                  outlivedParent: c > s,
                                                  ...ob(o),
                                                  significant: !1,
                                                  children: [],
                                                  descendants: 0,
                                              },
                                              h = new Map();
                                          for (let e of m) l(e) && h.set(ok(e), (h.get(ok(e)) ?? 0) + 1);
                                          let g = new Set();
                                          for (let e of m) {
                                              let t = ok(e);
                                              if (l(e) && (h.get(t) ?? 0) >= 4) {
                                                  if (g.has(t)) continue;
                                                  g.add(t);
                                                  let e = m.filter((e) => l(e) && ok(e) === t);
                                                  f.children.push(n(e, r + 1, m, c));
                                              } else f.children.push(n([e], r + 1, m, c));
                                          }
                                          return (
                                              (f.descendants = f.children.reduce(
                                                  (e, t) => e + t.count + t.descendants,
                                                  0,
                                              )),
                                              f
                                          );
                                      })([n], 0, [], 1 / 0),
                                      r = 0.1 * (a.end - a.start);
                                  return (
                                      oj(a, (e) => {
                                          e.significant = ov(e) >= r;
                                      }),
                                      a
                                  );
                              })(e),
                    [e],
                ),
                [l, n] = i.useState(() => (null == t ? o$ : og(t))),
                [a, r] = i.useState(null),
                s = i.useMemo(() => {
                    let e;
                    return null == t
                        ? []
                        : ((e = []),
                          !(function t(n) {
                              if ((e.push({ kind: "node", key: n.key, node: n }), l.collapsed.has(n.key))) return;
                              let a = l.revealed.has(n.key),
                                  r = [];
                              function i() {
                                  (1 === r.length
                                      ? t(r[0])
                                      : r.length > 1 &&
                                        e.push({
                                            kind: "smaller",
                                            key: `smaller-${r[0].key}`,
                                            parentKey: n.key,
                                            depth: n.depth + 1,
                                            count: r.reduce((e, t) => e + t.count, 0),
                                            start: Math.min(...r.map((e) => e.start)),
                                            end: Math.max(...r.map((e) => e.end)),
                                            totalMs: r.reduce((e, t) => e + ov(t), 0),
                                        }),
                                      (r = []));
                              }
                              for (let e of n.children) a || e.significant ? (i(), t(e)) : r.push(e);
                              i();
                          })(t),
                          e);
                }, [t, l]),
                o = i.useCallback(
                    (e) => {
                        let l = null == t ? null : ox(t, e);
                        null != l &&
                            n((e) =>
                                (function (e, t) {
                                    if (!e.collapsed.has(t.key))
                                        return { ...e, collapsed: new Set(e.collapsed).add(t.key) };
                                    let l = new Set(e.collapsed);
                                    return (
                                        l.delete(t.key),
                                        {
                                            collapsed: l,
                                            revealed: t.children.some((e) => e.significant)
                                                ? e.revealed
                                                : new Set(e.revealed).add(t.key),
                                        }
                                    );
                                })(e, l),
                            );
                    },
                    [t],
                ),
                u = i.useCallback((e) => {
                    n((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                c = i.useCallback(
                    (e) => {
                        let l = null == t ? null : ox(t, e);
                        null != l &&
                            n((e) => {
                                let t, n;
                                return (
                                    (t = new Set(e.collapsed)),
                                    (n = new Set(e.revealed)),
                                    oj(l, (e) => {
                                        (t.delete(e.key), n.add(e.key));
                                    }),
                                    { collapsed: t, revealed: n }
                                );
                            });
                    },
                    [t],
                ),
                d = i.useCallback(() => {
                    null != t && n({ collapsed: new Set(), revealed: oy(t, () => !0) });
                }, [t]),
                m = i.useCallback(() => {
                    null != t && n({ collapsed: oy(t, (e) => e.depth > 0), revealed: new Set() });
                }, [t]),
                f = i.useCallback(() => {
                    null != t && n(og(t));
                }, [t]),
                h = s.find((e) => e.key === a);
            return {
                rows: s,
                collapsed: l.collapsed,
                selectedKey: a,
                selected: h?.kind === "node" ? h.node : null,
                toggle: o,
                reveal: u,
                expandSubtree: c,
                select: r,
                expandAll: d,
                collapseAll: m,
                reset: f,
            };
        })(t),
        { rows: n, collapsed: a, selected: s, selectedKey: o, select: u, toggle: c, reveal: d, expandSubtree: m } = l,
        f = Math.max(1, ...t.spans.map((e) => oN(t, e))),
        h = i.useMemo(
            () =>
                (function (e) {
                    let t = e / 6,
                        l = 10 ** Math.floor(Math.log10(t)),
                        n = [1, 2, 5, 10].map((e) => e * l).find((e) => e >= t) ?? t,
                        a = [];
                    for (let t = 0; t <= e; t += n) a.push(t);
                    return a;
                })(f),
            [f],
        ),
        g = i.useMemo(
            () =>
                (function (e) {
                    let t = ow(e),
                        l = new Map();
                    for (let n of e.spans) {
                        if (null == n.parent) continue;
                        let a = oN(e, n),
                            r = a - n.start - oA(e, t.get(n.id) ?? [], n.start, a),
                            { service: i, operation: s } = ob(n),
                            o = `${i} ${s}`;
                        l.set(o, (l.get(o) ?? 0) + r);
                    }
                    return [...l.entries()]
                        .map((e) => {
                            let [t, l] = e;
                            return { name: t, ms: l };
                        })
                        .sort((e, t) => t.ms - e.ms)
                        .slice(0, 6);
                })(t),
            [t],
        ),
        x = h.length > 1 ? ((h[1] - h[0]) / f) * 100 : 100,
        p = i.useCallback(
            (e) => {
                let t,
                    l = n.findIndex((e) => e.key === o),
                    r = n[l];
                if ("ArrowDown" === e.key) t = n[Math.min(n.length - 1, l + 1)];
                else if ("ArrowUp" === e.key) t = n[Math.max(0, l - 1)];
                else if (null == r) return;
                else if ("smaller" === r.kind && ("ArrowRight" === e.key || "Enter" === e.key)) d(r.parentKey);
                else if ("node" === r.kind && "ArrowRight" === e.key && e.shiftKey) m(r.key);
                else if ("node" === r.kind && "ArrowRight" === e.key && a.has(r.key)) c(r.key);
                else {
                    if ("node" !== r.kind || "ArrowLeft" !== e.key || !(r.node.children.length > 0) || a.has(r.key))
                        return;
                    c(r.key);
                }
                (e.preventDefault(),
                    null != t && (u(t.key), document.getElementById(oO(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [a, m, d, n, u, o, c],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(oP.c, {
                children: [
                    (0, r.jsxs)("div", {
                        className: oF.z,
                        children: [
                            (0, r.jsx)(j.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: oM(t) ?? "still running",
                            }),
                            (0, r.jsx)(j.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: oT(t),
                            }),
                            null == t.started_by
                                ? null
                                : (0, r.jsx)(j.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: `Started by ${t.started_by.trace_name}`,
                                  }),
                            0 === t.dropped
                                ? null
                                : (0, r.jsx)(j.E, {
                                      variant: "text-sm/normal",
                                      color: "text-feedback-warning",
                                      children: `${oE(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: oF.KE,
                        children: [
                            (0, r.jsx)(N.$, { size: "sm", variant: "secondary", text: "Time sinks", onClick: l.reset }),
                            (0, r.jsx)(N.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Expand all",
                                onClick: l.expandAll,
                            }),
                            (0, r.jsx)(N.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Collapse all",
                                onClick: l.collapseAll,
                            }),
                            (0, r.jsx)(j.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: "Shift-click a span to expand everything under it.",
                            }),
                            (0, r.jsx)("div", {
                                className: oF.o1,
                                children: om.map((e) =>
                                    (0, r.jsxs)(
                                        "span",
                                        {
                                            className: oF.fI,
                                            children: [
                                                (0, r.jsx)("span", { className: `${oF.nf} ${oz[e]}` }),
                                                (0, r.jsx)(j.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: oS[e],
                                                }),
                                            ],
                                        },
                                        e,
                                    ),
                                ),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        role: "tree",
                        tabIndex: 0,
                        "aria-label": "Spans",
                        "aria-activedescendant": null == o ? void 0 : oO(o),
                        className: oF.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(x) },
                        onKeyDown: p,
                        children: [
                            (0, r.jsxs)("div", {
                                className: oF.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: oF.So,
                                        children: (0, r.jsx)(j.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, r.jsx)("div", {
                                        className: oF.c1,
                                        children: h.map((e) =>
                                            (0, r.jsx)(
                                                j.E,
                                                {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${oF.io} ${(e / f) * 100 > 85 ? oF.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / f) * 100),
                                                    },
                                                    children: 0 === e ? "0" : oC(e),
                                                },
                                                e,
                                            ),
                                        ),
                                    }),
                                ],
                            }),
                            n.map((e) =>
                                "node" === e.kind
                                    ? (0, r.jsx)(
                                          oU,
                                          {
                                              node: e.node,
                                              extent: f,
                                              collapsed: a.has(e.key),
                                              selected: e.key === o,
                                              onSelect: u,
                                              onToggle: c,
                                              onExpandSubtree: m,
                                          },
                                          e.key,
                                      )
                                    : (0, r.jsx)(oq, { row: e, extent: f, selected: e.key === o, onReveal: d }, e.key),
                            ),
                        ],
                    }),
                    0 === g.length
                        ? null
                        : (0, r.jsxs)("div", {
                              className: oF.xZ,
                              children: [
                                  (0, r.jsx)(j.E, {
                                      variant: "text-sm/semibold",
                                      color: "text-default",
                                      children: "Most time",
                                  }),
                                  g.map((e) => {
                                      let { name: t, ms: l } = e;
                                      return (0, r.jsx)(
                                          j.E,
                                          {
                                              variant: "text-sm/normal",
                                              color: "text-muted",
                                              tabularNumbers: !0,
                                              children: `${t} ${oC(l)}`,
                                          },
                                          t,
                                      );
                                  }),
                              ],
                          }),
                ],
            }),
            (0, r.jsx)(oR.j, { children: (0, r.jsx)(oH, { node: s }) }),
        ],
    });
}
function oK(e) {
    let { transitionState: t, onClose: l, projectId: n, traceId: a } = e,
        i = (0, m.bG)([on.A], () => on.A.getTimingTrace(n, a), [n, a]),
        s = i?.name ?? "Perf Trace";
    return (0, r.jsxs)(oL.d, {
        transitionState: t,
        onClose: l,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, r.jsx)(oD.rQ, { title: s }),
            null == i
                ? (0, r.jsx)(oP.c, {
                      children: (0, r.jsx)(j.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, r.jsx)(oB, { trace: i }),
        ],
    });
}
function oV(e) {
    let { projectId: t, trace: l } = e,
        n = l.spans.find((e) => null != e.error)?.error,
        a = i.useCallback(() => {
            (0, e9.openModal)((e) => (0, r.jsx)(oK, { ...e, projectId: t, traceId: l.id }));
        }, [t, l.id]);
    return (0, r.jsxs)(b.D, {
        className: oF.nM,
        onClick: a,
        children: [
            (0, r.jsxs)("div", {
                className: oF.sU,
                children: [
                    (0, r.jsx)(ou, {
                        status:
                            l.spans.some((e) => null != e.error) || oh(l)?.attrs?.ok === !1
                                ? "error"
                                : l.spans.some((e) => null == e.end)
                                  ? "started"
                                  : "ok",
                    }),
                    (0, r.jsx)(j.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        className: oF._k,
                        children: l.name,
                    }),
                    (0, r.jsx)(j.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: oM(l) ?? "still running",
                    }),
                ],
            }),
            (0, r.jsx)(j.E, { variant: "text-xs/normal", color: "text-muted", tabularNumbers: !0, children: oT(l) }),
            null == n
                ? null
                : (0, r.jsx)(j.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: n }),
        ],
    });
}
function oW(e) {
    let { projectId: t } = e,
        l = (0, m.yK)([on.A], () => on.A.getTimingTraces(t), [t]),
        n = i.useMemo(() => [...l].reverse(), [l]);
    return 0 === l.length
        ? (0, r.jsxs)("div", {
              className: oF.Ie,
              children: [
                  (0, r.jsx)(j.E, { variant: "text-sm/medium", color: "text-default", children: "No perf traces yet" }),
                  (0, r.jsx)(j.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: "Turns and project operations over 100ms record a timing trace here when they finish.",
                  }),
              ],
          })
        : (0, r.jsx)("div", {
              className: oF.nd,
              children: (0, r.jsx)(l4.Ch, {
                  className: oF.XG,
                  children: (0, r.jsx)("ul", {
                      className: oF.p_,
                      "aria-label": "Perf traces",
                      children: n.map((e) =>
                          (0, r.jsx)("li", { children: (0, r.jsx)(oV, { projectId: t, trace: e }) }, e.id),
                      ),
                  }),
              }),
          });
}
function oX(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let l = t / 1024;
    if (l < 1024) return `${l >= 100 ? Math.round(l) : l.toFixed(1)} MB`;
    let n = l / 1024;
    return `${n >= 100 ? Math.round(n) : n.toFixed(1)} GB`;
}
function oJ(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function oQ(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function oY(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = String(t.getHours()).padStart(2, "0"),
        n = String(t.getMinutes()).padStart(2, "0"),
        a = String(t.getSeconds()).padStart(2, "0");
    return `${l}:${n}:${a}`;
}
function oZ(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = new Date();
    return t.getFullYear() === l.getFullYear() && t.getMonth() === l.getMonth() && t.getDate() === l.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function o0(e) {
    let t = e.split("/").filter((e) => "" !== e),
        l = t[t.length - 1] ?? e;
    return l.length > 12 ? l.slice(0, 12) : l;
}
function o1(e) {
    return eu.intl.string("preview" === e ? eo.default["2yLYlG"] : eo.default.eiAi57);
}
let o2 = ["all", "preview", "stable", "web"],
    o3 = new Set(["error", "aborted", "length"]);
function o4(e) {
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
function o6(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : eu.intl.formatToPlainString(eo.default["XO/bN4"], {
              p50: oX(e.memory_p50_bytes ?? 0),
              p999: oX(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let o7 = {
    db: () => eo.default["7l+DFG"],
    db_preview: () => eo.default.FAuffi,
    runtime: () => eo.default["Gkl+ab"],
    runtime_preview: () => eo.default.ynpJzv,
    bot: () => eo.default["5/i0cj"],
    bot_preview: () => eo.default.m2jsnw,
};
var o5 = l(911608),
    o8 = l(177427);
function o9(e) {
    let { generatedAt: t, fetchState: l, onRefresh: n } = e;
    return (0, r.jsxs)("div", {
        className: o8.KE,
        children: [
            (0, r.jsx)("div", {
                className: o8.IQ,
                children:
                    "loading" === l
                        ? (0, r.jsx)(w.y, { type: w.t.PULSING_ELLIPSIS })
                        : "failed" === l
                          ? (0, r.jsx)(j.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: eu.intl.string(eo.default.ZVByPX),
                            })
                          : null != t
                            ? (0, r.jsx)(j.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: eu.intl.formatToPlainString(eo.default.INVO50, { time: oZ(t) }),
                              })
                            : null,
            }),
            (0, r.jsx)(N.$, { variant: "secondary", size: "sm", text: eu.intl.string(eo.default.oKEgiu), onClick: n }),
        ],
    });
}
function ue(e) {
    let { title: t, children: l } = e;
    return (0, r.jsxs)("section", {
        className: o8.uW,
        "aria-label": t,
        children: [
            (0, r.jsx)(j.E, { variant: "text-xs/semibold", color: "text-muted", className: o8.Gf, children: t }),
            l,
        ],
    });
}
function ut(e) {
    let { label: t, value: l, hint: n, critical: a = !1 } = e;
    return (0, r.jsxs)("div", {
        className: o8.N8,
        children: [
            (0, r.jsxs)("div", {
                className: o8.x7,
                children: [
                    (0, r.jsx)(j.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, r.jsx)(j.E, {
                        variant: "text-sm/medium",
                        color: a ? "text-feedback-critical" : "text-default",
                        children: l,
                    }),
                ],
            }),
            null != n && (0, r.jsx)(j.E, { variant: "text-xs/normal", color: "text-muted", children: n }),
        ],
    });
}
function ul(e) {
    let { label: t, used: l, max: n, formatValue: a } = e,
        i = n > 0 ? Math.min(1, Math.max(0, l / n)) : 0,
        s = i >= 0.9;
    return (0, r.jsxs)("div", {
        className: o8.N8,
        children: [
            (0, r.jsxs)("div", {
                className: o8.x7,
                children: [
                    (0, r.jsx)(j.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, r.jsx)(j.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${a(l)} / ${a(n)}`,
                    }),
                ],
            }),
            (0, r.jsx)(o5.z, {
                value: 100 * i,
                valueLabel: `${a(l)} of ${a(n)}`,
                "aria-label": t,
                className: s ? o8.dh : void 0,
            }),
        ],
    });
}
function un(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, r.jsx)(ut, {
            label: eu.intl.string(eo.default.SXP7pD),
            value: eu.intl.string(eo.default.E5hKVi),
            hint: o4(t),
        });
    let l = t.objects?.find((e) => "agent" === e.role);
    if (null == l)
        return (0, r.jsx)(ut, {
            label: eu.intl.string(eo.default.SXP7pD),
            value: "\u2014",
            hint: eu.intl.string(eo.default.AGvoMJ),
        });
    let n = o6(l);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ut, { label: eu.intl.string(eo.default["H/X+FI"]), value: oJ(l.cpu_ms) }),
            null != n && (0, r.jsx)(ut, { label: eu.intl.string(eo.default.lmFmMO), value: n }),
        ],
    });
}
function ua(e) {
    let { analytics: t } = e,
        l = eu.intl.string(eo.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, r.jsx)(ue, {
            title: l,
            children: (0, r.jsx)(j.E, { variant: "text-sm/normal", color: "text-muted", children: o4(t) }),
        });
    let n = (t.objects ?? [])
        .map((e) => {
            var t;
            let l;
            return {
                object: e,
                label: null != (l = "agent" !== (t = e.role) ? o7[t] : null) ? eu.intl.string(l()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, r.jsx)(ue, {
        title: l,
        children:
            0 === n.length
                ? (0, r.jsx)(j.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: eu.intl.string(eo.default.AGvoMJ),
                  })
                : n.map((e) => {
                      let { object: t, label: l } = e;
                      return (0, r.jsx)(
                          ut,
                          {
                              label: l,
                              value: eu.intl.formatToPlainString(eo.default["w/2voO"], { cpu: oJ(t.cpu_ms) }),
                              hint: o6(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var ur = l(400154);
let ui = [];
function us(e) {
    let t,
        { call: l } = e,
        { text: n, bad: a } =
            ((t = null != l.stopReason && o3.has(l.stopReason)),
            {
                text: [
                    null != l.durationMs ? oJ(l.durationMs) : null,
                    `${oQ(l.inputTokens + l.cacheReadTokens + l.cacheWriteTokens)} \u{2192} ${oQ(l.outputTokens)}`,
                    t ? l.stopReason : null,
                ]
                    .filter((e) => null != e)
                    .join(" \xb7 "),
                bad: t,
            });
    return (0, r.jsxs)("div", {
        className: ur.p5,
        children: [
            (0, r.jsx)(j.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: ur.Q5,
                children: oY(l.observedAt),
            }),
            (0, r.jsxs)(j.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-default",
                className: ur.qN,
                children: [l.role, " \xb7 ", l.model],
            }),
            (0, r.jsx)(j.E, {
                tag: "span",
                variant: "text-xs/medium",
                color: a ? "text-feedback-critical" : "text-muted",
                children: n,
            }),
        ],
    });
}
function uo(e, t) {
    return (0, r.jsx)(ut, {
        label: e,
        value: eu.intl.formatToPlainString(eo.default.yHJxuP, { count: oQ((0, Y.aM)(t)) }),
        hint: `${oQ(t.input_tokens)} in \xb7 ${oQ(t.output_tokens)} out \xb7 ${oQ(t.cache_read_input_tokens)} cache read`,
    });
}
function uu(e) {
    let { projectId: t, status: l, fetchState: n, onRefresh: a, traceVisible: s = !1 } = e,
        o = (0, m.bG)([on.A], () => on.A.getLastTurnUsage(t), [t]),
        u = (0, m.bG)([on.A], () => on.A.getLastCompaction(t), [t]),
        c = (0, m.bG)([on.A], () => on.A.getLastCompactionDecline(t), [t]),
        d = (0, m.bG)([on.A], () => on.A.getForceCompactionState(t), [t]),
        f = i.useCallback(() => (0, en.Lj)(t), [t]),
        h = i.useCallback(() => (0, en.Lj)(t, !0), [t]),
        g = (0, m.bG)([on.A], () => (s ? ui : on.A.getModelCalls(t)), [t, s]),
        x = l?.agent?.lifetime ?? null,
        p = l?.agent?.limits ?? null,
        v = l?.agent?.session ?? null,
        b = u?.promptCeiling ?? p?.context_window_tokens ?? null;
    return (0, r.jsxs)("div", {
        className: ur.Mf,
        children: [
            (0, r.jsx)(o9, { generatedAt: l?.generated_at ?? null, fetchState: n, onRefresh: a }),
            (0, r.jsx)(ue, {
                title: eu.intl.string(eo.default.JghNal),
                children:
                    null == x
                        ? (0, r.jsx)(j.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: eu.intl.string(eo.default.s0U5Fv),
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(ut, {
                                      label: eu.intl.string(eo.default["9nqym2"]),
                                      value: oQ((0, Y.a7)(x.cost_usd)),
                                      hint: eu.intl.formatToPlainString(eo.default.NCdUIh, { count: oQ(x.turns) }),
                                  }),
                                  uo(eu.intl.string(eo.default.xtxP0e), x.orchestrator),
                                  uo(eu.intl.string(eo.default["9Sj3SX"]), x.codegen),
                                  uo(eu.intl.string(eo.default.ANCEo3), (0, Y.wU)(x.compaction)),
                                  l?.agent?.outcomes != null &&
                                      Object.keys(l.agent.outcomes).length > 0 &&
                                      (0, r.jsx)(ut, {
                                          label: eu.intl.string(eo.default.SQHm7C),
                                          value: Object.entries(l.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, l] = e,
                                                      [, n] = t;
                                                  return n - l;
                                              })
                                              .map((e) => {
                                                  let [t, l] = e;
                                                  return `${oQ(l)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, r.jsx)(ue, {
                title: eu.intl.string(eo.default.dZHPE5),
                children:
                    null == o
                        ? (0, r.jsx)(j.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: eu.intl.string(eo.default.DfVjal),
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  uo(eu.intl.string(eo.default["7X3i9d"]), o.total),
                                  (0, r.jsx)(ut, {
                                      label: eu.intl.string(eo.default["8OUg09"]),
                                      value: `${Math.round((o.cache_hit_rate ?? (0, Y.CA)(o.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, r.jsxs)(ue, {
                title: eu.intl.string(eo.default.NbRk9a),
                children: [
                    null != u && null != b
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(ul, {
                                      label: eu.intl.string(eo.default.Kw5wiQ),
                                      used: u.tokensAfter,
                                      max: b,
                                      formatValue: oQ,
                                  }),
                                  (0, r.jsx)(ut, {
                                      label: eu.intl.string(eo.default.mRbSns),
                                      value: `${oQ(u.tokensBefore)} \u{2192} ${oQ(u.tokensAfter)}`,
                                      hint: eu.intl.formatToPlainString(eo.default.Vq3skS, {
                                          count: oQ(u.retainedMessages),
                                          time: oZ(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, r.jsx)(j.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != b
                                      ? eu.intl.formatToPlainString(eo.default.GMLCNv, { ceiling: oQ(b) })
                                      : eu.intl.string(eo.default.s0U5Fv),
                          }),
                    null != c &&
                        (0, r.jsx)(ut, {
                            label: eu.intl.string(eo.default["4BX5KK"]),
                            value: `${oQ(c.projected)} / ${oQ(c.threshold)}`,
                            critical: !0,
                            hint: eu.intl.formatToPlainString(eo.default["6ngCax"], { time: oZ(c.observedAt) }),
                        }),
                    (0, r.jsxs)("div", {
                        className: ur.Lj,
                        children: [
                            (0, r.jsx)(N.$, {
                                variant: "secondary",
                                size: "sm",
                                text: eu.intl.string(eo.default["1EiJeb"]),
                                disabled: "pending" === d,
                                onClick: f,
                            }),
                            (0, r.jsx)(j.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof d && "compacted" !== d.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return eu.intl.string(eo.default.wox6Ev);
                                    if ("pending" === e) return eu.intl.string(eo.default.OcPHQ1);
                                    let t = oZ(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return eu.intl.formatToPlainString(eo.default.BhRjZZ, { time: t });
                                    let l =
                                        "declined" === e.outcome
                                            ? eo.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? eo.default.YZb4hK
                                              : eo.default.ZoUSVK;
                                    return eu.intl.formatToPlainString(l, {
                                        reason: e.reason ?? "no reason given",
                                        time: t,
                                    });
                                })(d),
                            }),
                            "object" == typeof d &&
                                !0 === d.pendingTurn &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(N.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: eu.intl.string(eo.default.ZxG2AI),
                                            onClick: h,
                                        }),
                                        (0, r.jsx)(j.E, {
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
                (0, r.jsx)(ue, {
                    title: eu.intl.string(eo.default.TkTRdW),
                    children:
                        0 === g.length
                            ? (0, r.jsx)(j.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: eu.intl.string(eo.default["r3/FhI"]),
                              })
                            : (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      g
                                          .slice(-30)
                                          .reverse()
                                          .map((e) => (0, r.jsx)(us, { call: e }, e.id)),
                                      g.length > 30 &&
                                          (0, r.jsx)(j.E, {
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              children: eu.intl.formatToPlainString(eo.default["uZ9P/O"], {
                                                  shown: 30,
                                                  total: g.length,
                                              }),
                                          }),
                                  ],
                              }),
                }),
            (null != v || l?.analytics != null) &&
                (0, r.jsxs)(ue, {
                    title: eu.intl.string(eo.default.EsSzCS),
                    children: [
                        null != v &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(ut, {
                                        label: eu.intl.string(eo.default.CLXHAs),
                                        value: oZ(v.instance_since),
                                        hint: eu.intl.string(eo.default.UCwUEX),
                                    }),
                                    (0, r.jsx)(ut, {
                                        label: eu.intl.string(eo.default["8V8e1Z"]),
                                        value: oQ(v.sockets),
                                    }),
                                    (0, r.jsx)(ut, {
                                        label: eu.intl.string(eo.default["4pBzYW"]),
                                        value: v.turn_inflight
                                            ? eu.intl.string(eo.default.Wv025I)
                                            : eu.intl.string(eo.default["7/lsFY"]),
                                    }),
                                    v.queued_messages > 0 &&
                                        (0, r.jsx)(ut, {
                                            label: eu.intl.string(eo.default["3oUYnv"]),
                                            value: oQ(v.queued_messages),
                                        }),
                                ],
                            }),
                        l?.analytics != null && (0, r.jsx)(un, { analytics: l.analytics }),
                    ],
                }),
            null != p &&
                (0, r.jsxs)(ue, {
                    title: eu.intl.string(eo.default["LEIhp/"]),
                    children: [
                        (0, r.jsx)(ut, {
                            label: eu.intl.string(eo.default.IlDBN3),
                            value: oQ(p.max_subagent_iterations),
                        }),
                        (0, r.jsx)(ut, {
                            label: eu.intl.string(eo.default["ZdzKR+"]),
                            value: eu.intl.formatToPlainString(eo.default.yHJxuP, {
                                count: oQ(p.context_window_tokens),
                            }),
                        }),
                        (0, r.jsx)(ut, {
                            label: eu.intl.string(eo.default.cIhN2W),
                            value: eu.intl.formatToPlainString(eo.default.yHJxuP, {
                                count: oQ(p.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, r.jsx)(ut, {
                            label: eu.intl.string(eo.default["+fOn/q"]),
                            value: oQ(p.max_user_message_chars),
                        }),
                        (0, r.jsx)(ut, { label: eu.intl.string(eo.default.kIHga0), value: oQ(p.max_build_attempts) }),
                        (0, r.jsx)(ut, { label: eu.intl.string(eo.default.Iw03yW), value: oQ(p.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var uc = l(237528),
    ud = l(629584),
    um = l(683438),
    uf = l(531893);
function uh(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, r.jsx)("div", {
              className: uf.ut,
              children: (0, r.jsx)(j.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: eu.intl.string(eo.default.h1SE6R),
              }),
          });
}
function ug(e) {
    let { state: t, emptyTitle: l, emptyBody: n } = e;
    return "failed" === t.status
        ? (0, r.jsxs)("div", {
              className: uf.qf,
              children: [
                  (0, r.jsx)(j.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: eu.intl.string(eo.default.h1SE6R),
                  }),
                  (0, r.jsx)(j.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: eu.intl.string(eo.default["8SErdg"]),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: uf.qf,
              children: [
                  (0, r.jsx)(j.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                  (0, r.jsx)(j.E, { variant: "text-xs/normal", color: "text-muted", children: n }),
              ],
          });
}
function ux(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, r.jsx)("div", {
              className: uf.ps,
              children: (0, r.jsx)(j.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: eu.intl.string(eo.default.V7Ri8H),
              }),
          })
        : null;
}
var up = l(109079);
let uv = i.memo(function (e) {
    var t;
    let { entry: l, showSource: n } = e,
        [a, s] = i.useState(!1),
        o = i.useId(),
        u = i.useMemo(
            () =>
                (function (e) {
                    let t;
                    if (e.length > 16e3) return null;
                    let l = e.indexOf("{"),
                        n = e.indexOf("["),
                        a = -1 === l ? n : -1 === n ? l : Math.min(l, n);
                    if (-1 === a) return null;
                    let r = e.slice(a).trim();
                    if (r.length < 2) return null;
                    try {
                        t = JSON.parse(r);
                    } catch {
                        return null;
                    }
                    if ("object" != typeof t || null == t) return null;
                    let i = e.slice(0, a).trim(),
                        s = JSON.stringify(t, null, 2);
                    return Array.isArray(t)
                        ? { prefix: i, pretty: s, marker: "[\u2026]", size: t.length }
                        : { prefix: i, pretty: s, marker: "{\u2026}", size: Object.keys(t).length };
                })(l.message),
            [l.message],
        ),
        c = "error" === l.level ? "text-feedback-critical" : "text-default";
    return (0, r.jsxs)("div", {
        className: up.vK,
        children: [
            (0, r.jsx)(j.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: up.Mt,
                selectable: !0,
                children: oY(l.ts),
            }),
            (0, r.jsx)(j.E, {
                tag: "span",
                variant: "text-xxs/semibold",
                color:
                    "error" === (t = l.level)
                        ? "text-feedback-critical"
                        : "warn" === t
                          ? "text-feedback-warning"
                          : "text-muted",
                className: up.dm,
                children: l.level,
            }),
            (0, r.jsxs)("div", {
                className: up.t4,
                children: [
                    n &&
                        null != l.source &&
                        (0, r.jsx)("span", { className: up.Cq, children: (0, r.jsx)(uc.v, { text: l.source }) }),
                    null != l.kind &&
                        (0, r.jsx)("span", {
                            className: up.Cq,
                            title: l.build ?? void 0,
                            children: (0, r.jsx)(uc.v, {
                                text: eu.intl.string(eo.default.TrC9c8),
                                variant: "redLight",
                            }),
                        }),
                    null != u
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  "" !== u.prefix &&
                                      (0, r.jsxs)(j.E, {
                                          tag: "span",
                                          variant: "text-xs/normal",
                                          color: c,
                                          selectable: !0,
                                          children: [u.prefix, " "],
                                      }),
                                  (0, r.jsxs)(b.D, {
                                      className: up.Pq,
                                      "aria-expanded": a,
                                      "aria-controls": o,
                                      "aria-label": eu.intl.string(eo.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          a
                                              ? (0, r.jsx)(tU.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, r.jsx)(ta._, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, r.jsxs)(j.E, {
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
                                  a &&
                                      (0, r.jsx)(j.E, {
                                          tag: "div",
                                          variant: "text-xs/normal",
                                          color: c,
                                          className: up.dF,
                                          selectable: !0,
                                          id: o,
                                          children: u.pretty,
                                      }),
                              ],
                          })
                        : (0, r.jsx)(j.E, {
                              tag: "span",
                              variant: "text-xs/normal",
                              color: c,
                              selectable: !0,
                              children: l.message,
                          }),
                ],
            }),
        ],
    });
});
function uj(e) {
    let { projectId: t } = e,
        l = (0, m.bG)([eS.Ay], () => eS.Ay.getLogs(t), [t]),
        n = (0, m.bG)([eS.Ay], () => eS.Ay.getHistoryState(t, "logs")),
        [a, s] = i.useState("all"),
        [o, u] = i.useState(""),
        c = i.useMemo(() => {
            let e = o.trim().toLowerCase();
            return l.filter((t) => {
                var l, n;
                return (
                    "string" == typeof (l = t.log).message &&
                    "string" == typeof l.level &&
                    "string" == typeof l.ts &&
                    ("all" === a ||
                        ("preview" === (n = t.log.source) || "stable" === n || "web" === n ? n : "other") === a) &&
                    ("" === e ||
                        t.log.message.toLowerCase().includes(e) ||
                        t.log.level.includes(e) ||
                        (t.log.source?.toLowerCase().includes(e) ?? !1))
                );
            });
        }, [l, a, o]),
        d = i.useRef(null),
        f = i.useRef(!0);
    i.useEffect(() => {
        f.current && d.current?.scrollToBottom();
    }, [c]);
    let h = i.useCallback(() => {
            let e = d.current;
            null != e && (f.current = 32 > e.getDistanceFromBottom());
        }, []),
        g = i.useMemo(
            () =>
                o2.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return o1(e);
                            case "web":
                                return eu.intl.string(eo.default.IVzfVV);
                            default:
                                return eu.intl.string(eo.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, r.jsxs)("div", {
        className: up.$F,
        children: [
            (0, r.jsxs)("div", {
                className: up.y4,
                children: [
                    (0, r.jsx)(ud.I, {
                        look: "pill",
                        "aria-label": eu.intl.string(eo.default.MhvyUU),
                        options: g,
                        value: a,
                        onChange: (e) => s(e.value),
                    }),
                    (0, r.jsx)("div", {
                        className: up.KT,
                        children: (0, r.jsx)(um.I, {
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
            l.length > 0 && (0, r.jsx)(uh, { state: n }),
            (0, r.jsxs)(l4.Ch, {
                ref: d,
                onScroll: h,
                overflow: "auto",
                className: up.sx,
                children: [
                    (0, r.jsx)(ux, { state: n }),
                    0 === l.length
                        ? (0, r.jsx)(ug, {
                              state: n,
                              emptyTitle: eu.intl.string(eo.default.S7qlPG),
                              emptyBody: eu.intl.string(eo.default.nD0S9z),
                          })
                        : 0 === c.length
                          ? (0, r.jsx)(j.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: eu.intl.string(eo.default["4SIdrX"]),
                            })
                          : c.map((e) => (0, r.jsx)(uv, { entry: e.log, showSource: "all" === a }, e.key)),
                ],
            }),
        ],
    });
}
function ub(e) {
    let { title: t, preview: l, stable: n, renderEnv: a } = e,
        s = [];
    return (
        null != l && s.push((0, r.jsx)(i.Fragment, { children: a("preview", l) }, "preview")),
        null != n && s.push((0, r.jsx)(i.Fragment, { children: a("stable", n) }, "stable")),
        (0, r.jsx)(ue, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, r.jsx)(j.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: eu.intl.string(eo.default.umcjif),
                      }),
        })
    );
}
function uy(e) {
    var t;
    let { env: l, bot: n } = e;
    return n.ever_started
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(ut, {
                      label: eu.intl.formatToPlainString(eo.default["01ZMS4"], { env: o1(l) }),
                      value: ((t = n.connected), eu.intl.string(t ? eo.default.Wv025I : eo.default["7/lsFY"])),
                      critical: !n.connected && null != n.fatal_reason,
                      hint: n.fatal_reason ?? (n.connected ? void 0 : (n.last_start_reason ?? void 0)),
                  }),
                  (0, r.jsx)(ut, {
                      label: eu.intl.string(eo.default["z1dh+F"]),
                      value: oQ(n.events_received),
                      hint:
                          null != n.last_event_type && null != n.last_event_at
                              ? `${n.last_event_type} \xb7 ${oZ(n.last_event_at)}`
                              : void 0,
                  }),
                  (0, r.jsx)(ut, { label: eu.intl.string(eo.default.Iz5GnJ), value: oQ(n.guild_count) }),
                  (0, r.jsx)(ut, {
                      label: eu.intl.string(eo.default["7UqtNv"]),
                      value: oQ(n.reconnects),
                      hint:
                          null != n.last_close_code && null != n.last_close_at
                              ? eu.intl.formatToPlainString(eo.default.MasSly, {
                                    code: n.last_close_code,
                                    time: oZ(n.last_close_at),
                                })
                              : void 0,
                  }),
                  n.dispatch_errors > 0 &&
                      (0, r.jsx)(ut, {
                          label: eu.intl.string(eo.default["x3+JXJ"]),
                          value: oQ(n.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, r.jsx)(ut, { label: o1(l), value: eu.intl.string(eo.default.lTHQss) });
}
function uk(e) {
    let { env: t, metrics: l } = e,
        n = l.status_4xx + l.status_5xx;
    return (0, r.jsx)(ut, {
        label: o1(t),
        value: eu.intl.formatToPlainString(eo.default["Xq+wHT"], {
            requests: oQ(l.requests),
            failures: oQ(n + l.errors),
        }),
        critical: l.errors + l.status_5xx > 0,
        hint:
            null != l.last_failure
                ? eu.intl.formatToPlainString(eo.default["o/ZBm4"], {
                      host: l.last_failure.host,
                      status: l.last_failure.status ?? "network",
                      time: oZ(l.last_failure.at),
                  })
                : eu.intl.formatToPlainString(eo.default["7KlGT6"], { time: oZ(l.since) }),
    });
}
function uw(e) {
    let { env: t, runtime: l } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ut, {
                label: eu.intl.formatToPlainString(eo.default["92gVTm"], { env: o1(t) }),
                value: oQ(l.connections),
            }),
            l.schedules.map((e) =>
                (0, r.jsx)(
                    ut,
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
                                  ? eu.intl.formatToPlainString(eo.default.wxAWNv, { time: oZ(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function uN(e) {
    let { env: t, metrics: l } = e;
    return (0, r.jsx)(ut, {
        label: o1(t),
        value: eu.intl.formatToPlainString(eo.default.suAOj9, { calls: oQ(l.calls), errors: oQ(l.errors) }),
        critical: l.errors > 0,
        hint: l.last_model,
    });
}
function uA(e) {
    let { title: t, metrics: l, limits: n } = e;
    if (null == l || 0 === l.requests)
        return (0, r.jsx)(ue, {
            title: t,
            children: (0, r.jsx)(j.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: eu.intl.string(eo.default["Noami/"]),
            }),
        });
    let a = l.cpu_ms_total / l.requests,
        i = l.cpu_ms_total > 0;
    return (0, r.jsxs)(ue, {
        title: t,
        children: [
            (0, r.jsx)(ut, {
                label: eu.intl.string(eo.default.xtD4Zp),
                value: oQ(l.requests),
                hint: eu.intl.formatToPlainString(eo.default["7KlGT6"], { time: oZ(l.since) }),
            }),
            (0, r.jsx)(ut, { label: eu.intl.string(eo.default.gfRhR3), value: oQ(l.errors), critical: l.errors > 0 }),
            i
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(ul, {
                              label: eu.intl.string(eo.default.LEJ5r3),
                              used: l.cpu_ms_max,
                              max: n.cpu_ms_per_request,
                              formatValue: oJ,
                          }),
                          (0, r.jsx)(ut, {
                              label: eu.intl.string(eo.default.mSKImM),
                              value: oJ(a),
                              hint: eu.intl.formatToPlainString(eo.default.JqMU05, {
                                  total: oJ(l.cpu_ms_total),
                                  wall: oJ(l.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, r.jsx)(ut, {
                      label: eu.intl.string(eo.default.LEJ5r3),
                      value: eu.intl.string(eo.default["2Ekb2b"]),
                      hint: eu.intl.string(eo.default.G0aq7i),
                  }),
            !i &&
                l.wall_ms_total > 0 &&
                (0, r.jsx)(ut, { label: eu.intl.string(eo.default.xvmL1D), value: oJ(l.wall_ms_total) }),
            l.exceeded_cpu > 0 &&
                (0, r.jsx)(ut, {
                    label: eu.intl.string(eo.default["4sQYwH"]),
                    value: oQ(l.exceeded_cpu),
                    critical: !0,
                }),
            (0, r.jsx)(ut, {
                label: eu.intl.string(eo.default.bQenOy),
                value: oQ(l.exceeded_memory),
                critical: l.exceeded_memory > 0,
                hint: eu.intl.formatToPlainString(eo.default["5jIZwv"], { limit: `${n.memory_mb} MB` }),
            }),
            null != l.build && (0, r.jsx)(ut, { label: eu.intl.string(eo.default.xgpn4Y), value: o0(l.build) }),
        ],
    });
}
function uS(e) {
    let { status: t } = e,
        { stable: l, preview: n, shared_data: a } = t.storage,
        s = t.worker.limits,
        o = a
            ? [{ key: "shared", label: eu.intl.string(eo.default.V5kbaH), metrics: l }]
            : [
                  { key: "preview", label: eu.intl.string(eo.default["2yLYlG"]), metrics: n },
                  { key: "stable", label: eu.intl.string(eo.default.eiAi57), metrics: l },
              ];
    return (0, r.jsx)(ue, {
        title: eu.intl.string(eo.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: l, metrics: n } = e;
            return null == n
                ? (0, r.jsx)(ut, { label: l, value: "\u2014" }, t)
                : (0, r.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, r.jsx)(ut, {
                                  label: eu.intl.formatToPlainString(eo.default.u7kJJ4, { env: l }),
                                  value: oX(n.r2_bytes),
                                  hint: eu.intl.formatToPlainString(
                                      n.r2_truncated ? eo.default.lH0oQw : eo.default.m9h02S,
                                      { count: oQ(n.r2_objects) },
                                  ),
                              }),
                              null != n.db_bytes &&
                                  (0, r.jsx)(ul, {
                                      label: eu.intl.formatToPlainString(eo.default.mnbPqt, { env: l }),
                                      used: n.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: oX,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function uC(e) {
    let { status: t, fetchState: l, onRefresh: n } = e;
    return (0, r.jsxs)("div", {
        className: ur.Mf,
        children: [
            (0, r.jsx)(o9, { generatedAt: t?.generated_at ?? null, fetchState: l, onRefresh: n }),
            null != t &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(uA, {
                            title: eu.intl.string(eo.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, r.jsx)(uA, {
                            title: eu.intl.string(eo.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, r.jsx)(uS, { status: t }),
                        null != t.bot &&
                            (0, r.jsx)(ub, {
                                title: eu.intl.string(eo.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, r.jsx)(uy, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, r.jsx)(ub, {
                                title: eu.intl.string(eo.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, r.jsx)(uk, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, r.jsx)(ub, {
                                title: eu.intl.string(eo.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, r.jsx)(uw, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, r.jsx)(ub, {
                                title: eu.intl.string(eo.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, r.jsx)(uN, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, r.jsx)(ua, { analytics: t.analytics }),
                        (0, r.jsxs)(ue, {
                            title: eu.intl.string(eo.default.fQMpFp),
                            children: [
                                (0, r.jsx)(ut, {
                                    label: eu.intl.string(eo.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? o0(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, r.jsx)(ut, {
                                    label: eu.intl.string(eo.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? o0(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var uE = l(761929),
    uI = l(382541);
let uM = new Map(),
    uT = new Map(),
    u_ = 0,
    uP = 0;
async function uR(e, t, l) {
    let n = u_,
        a = uM.get(t);
    if (null != a) return { status: "loaded", rich: a };
    if (Date.now() < uP) return { status: "forbidden" };
    let r = uT.get(t);
    if (null != r) return r;
    let i = (async () => {
        try {
            let a,
                { ticket: r, baseUrl: i } = await (0, uI.d)(e),
                s = await fetch(
                    ((a = new URL(`${i}/agent/trace-detail`)).searchParams.set("ticket", r),
                    a.searchParams.set("id", t),
                    a.toString()),
                    { method: "GET", credentials: "omit" },
                );
            if (403 === s.status) return ((uP = Date.now() + 6e4), { status: "forbidden" });
            if (!s.ok) return { status: "failed" };
            let o = await s.json();
            if (!0 !== o.available || null == o.rich) return { status: "unavailable" };
            if (n !== u_) return { status: "failed" };
            var l = o.rich;
            for (uM.set(t, l); uM.size > 100;) {
                let e = uM.keys().next();
                if (!0 === e.done) break;
                uM.delete(e.value);
            }
            return { status: "loaded", rich: o.rich };
        } catch {
            return { status: "failed" };
        }
    })();
    uT.set(t, i);
    let s = await i;
    return (uT.get(t) === i && uT.delete(t), l?.aborted === !0 ? { status: "failed" } : s);
}
function uL() {
    ((u_ += 1), uM.clear(), uT.clear(), (uP = 0));
}
function uD(e) {
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
let u$ = ["model", "tool", "subagent", "delegated", "context"];
function uF(e, t) {
    let l = t.trim().toLowerCase();
    return "" === l
        ? e
        : e.filter((e) => {
              let t;
              return ((t =
                  "model" === e.kind
                      ? [e.model, e.agent, e.stopReason ?? "", e.error ?? ""]
                      : [e.tool, e.agent, e.summary ?? "", e.error ?? ""]).push(uD(e)),
              t.join(" ").toLowerCase()).includes(l);
          });
}
function uz(e, t) {
    return null == t ? null : (e.find((e) => e.id === t) ?? null);
}
let uO = {
    model: "blurpleLight",
    subagent: "greenLight",
    context: "grayLight",
    tool: "grayMedium",
    delegated: "orangeLight",
};
function uG(e) {
    let { category: t } = e;
    return (0, r.jsx)(uc.v, { text: oi(t), variant: uO[t] });
}
var uU = l(28863);
let uq = ["arguments", "result", "usage", "diagnostics"];
function uH(e) {
    let { label: t, value: l } = e;
    return (0, r.jsxs)("div", {
        className: os.wV,
        children: [
            (0, r.jsx)(j.E, { variant: "text-xs/medium", color: "text-muted", className: os.D6, children: t }),
            (0, r.jsx)("div", { className: os.zL, children: l }),
        ],
    });
}
function uB(e) {
    let { label: t, value: l } = e;
    return (0, r.jsx)(uH, {
        label: t,
        value: (0, r.jsx)(j.E, { variant: "text-xs/normal", color: "text-default", selectable: !0, children: l }),
    });
}
function uK(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: os.WA, children: t });
}
function uV(e) {
    let { title: t, children: l } = e,
        n = i.useId();
    return (0, r.jsxs)("section", {
        "aria-labelledby": n,
        className: os.xd,
        children: [
            (0, r.jsx)(j.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                id: n,
                className: os.Hm,
                children: t,
            }),
            l,
        ],
    });
}
function uW(e) {
    let { title: t, children: l } = e;
    return (0, r.jsxs)("details", {
        className: os.XK,
        children: [
            (0, r.jsxs)("summary", {
                className: os.It,
                children: [
                    (0, r.jsx)(ta._, { className: os.k, size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    (0, r.jsx)(j.E, { variant: "text-xs/semibold", color: "none", children: t }),
                ],
            }),
            (0, r.jsx)("div", { className: os.bG, children: l }),
        ],
    });
}
function uX(e) {
    let { field: t } = e;
    if (null != t.value)
        return (0, r.jsx)(uH, {
            label: t.key,
            value: (0, r.jsx)(j.E, {
                variant: "text-xs/normal",
                color: "text-default",
                selectable: !0,
                children: t.value,
            }),
        });
    let l =
        null != t.chars
            ? eu.intl.formatToPlainString(eo.default.ib7All, { count: t.chars })
            : null != t.items
              ? eu.intl.formatToPlainString(eo.default.cIqKbA, { count: t.items })
              : null;
    return (0, r.jsx)(uH, {
        label: t.key,
        value: (0, r.jsxs)("div", {
            className: os.Kv,
            children: [
                (0, r.jsx)(j.E, {
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
                null == l
                    ? null
                    : (0, r.jsx)(j.E, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          tabularNumbers: !0,
                          children: l,
                      }),
            ],
        }),
    });
}
function uJ(e) {
    let { entries: t } = e;
    return 0 === t.length
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", {
                      className: os.QR,
                      children: (0, r.jsx)(uc.v, { text: eu.intl.string(eo.default.LRIpHQ), variant: "orangeLight" }),
                  }),
                  t.map((e) =>
                      (0, r.jsx)(
                          uH,
                          {
                              label: e.key,
                              value: (0, r.jsxs)("div", {
                                  className: os.TY,
                                  children: [
                                      null == e.value
                                          ? null
                                          : (0, r.jsx)(j.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                className: os.Px,
                                                selectable: !0,
                                                children: e.value,
                                            }),
                                      !0 !== e.scrubbed
                                          ? null
                                          : (0, r.jsx)(j.E, {
                                                variant: "text-xs/normal",
                                                color: "text-feedback-warning",
                                                children: eu.intl.string(eo.default["+kQ+K3"]),
                                            }),
                                      !0 !== e.truncated
                                          ? null
                                          : (0, r.jsx)(j.E, {
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
function uQ(e) {
    let { detail: t } = e,
        l =
            null == t || "loaded" === t.status || "forbidden" === t.status
                ? null
                : eu.intl.string(
                      "loading" === t.status
                          ? eo.default.SKbSyo
                          : "unavailable" === t.status
                            ? eo.default.tdq5Zn
                            : eo.default["Dw1JW/"],
                  );
    return null == l
        ? null
        : (0, r.jsx)(j.E, { variant: "text-xs/normal", color: "text-subtle", className: os.E7, children: l });
}
function uY(e) {
    let { projectId: t, entry: l, onClose: n, parent: a, onSelect: s, childCount: o } = e,
        u = (function (e) {
            let { childCount: t = 0, hasParent: l = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = new Set();
            if ("tool" === e.kind)
                (((null != e.fields && e.fields.length > 0) || null != e.detailId) && n.add("arguments"),
                    "started" !== e.status && n.add("result"));
            else
                (null != e.promptTokens ||
                    null != e.inputTokens ||
                    null != e.outputTokens ||
                    null != e.cacheReadTokens ||
                    null != e.costUsd ||
                    null != e.stopReason) &&
                    n.add("usage");
            return (
                (l || t > 0 || null != e.turnId || "" !== e.startedAt || "" !== e.id) && n.add("diagnostics"),
                uq.filter((e) => n.has(e))
            );
        })(l, { childCount: o, hasParent: null != a }),
        c = (function (e, t) {
            let [l, n] = i.useState(null);
            if (
                (i.useEffect(() => {
                    if (null == t || null != uM.get(t)) return;
                    let l = new AbortController();
                    return (
                        uR(e, t, l.signal).then((e) => {
                            l.signal.aborted || n({ detailId: t, detail: e });
                        }),
                        () => l.abort()
                    );
                }, [e, t]),
                null == t)
            )
                return null;
            let a = uM.get(t);
            return null != a ? { status: "loaded", rich: a } : l?.detailId === t ? l.detail : { status: "loading" };
        })(t, "tool" === l.kind ? l.detailId : void 0),
        d = "model" === l.kind ? l.model : l.tool,
        m = od(l.startedAt, "millis"),
        f = uD(l),
        h = i.useCallback(
            (e) => {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), n());
            },
            [n],
        );
    return (0, r.jsxs)(l4.Ch, {
        className: os._0,
        onKeyDown: h,
        role: "region",
        "aria-label": eu.intl.formatToPlainString(eo.default.Qiaeyz, { name: d }),
        children: [
            (0, r.jsx)("div", {
                className: os.sy,
                children: (0, r.jsxs)("div", {
                    className: os.HI,
                    children: [
                        (0, r.jsx)(ou, { status: l.status }),
                        (0, r.jsx)(uG, { category: f }),
                        (0, r.jsx)(j.E, {
                            variant: "text-sm/semibold",
                            color: "text-strong",
                            className: os.kc,
                            children: d,
                        }),
                        (0, r.jsx)(j.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            tabularNumbers: !0,
                            className: os.l5,
                            children: null == l.durationMs ? eu.intl.string(eo.default["2wyRDK"]) : oa(l.durationMs),
                        }),
                    ],
                }),
            }),
            null == l.error
                ? null
                : (0, r.jsx)(j.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: os.Um,
                      selectable: !0,
                      children: l.error,
                  }),
            u.includes("arguments") && "tool" === l.kind
                ? (0, r.jsxs)(uV, {
                      title: eu.intl.string(eo.default["G/4JST"]),
                      children: [
                          (l.fields ?? []).map((e) => (0, r.jsx)(uX, { field: e }, e.key)),
                          c?.status === "loaded" && null != c.rich.args
                              ? (0, r.jsx)(uJ, { entries: c.rich.args })
                              : null,
                          (0, r.jsx)(uQ, { detail: c }),
                      ],
                  })
                : null,
            u.includes("result") && "tool" === l.kind
                ? (0, r.jsxs)(uV, {
                      title: eu.intl.string(eo.default.Dgg25Y),
                      children: [
                          (0, r.jsx)(uB, {
                              label: eu.intl.string(eo.default["U+OQCo"]),
                              value: eu.intl.formatToPlainString(eo.default.ib7All, { count: l.resultChars ?? 0 }),
                          }),
                          null == l.resultAdded
                              ? null
                              : (0, r.jsx)(uB, {
                                    label: eu.intl.string(eo.default["MQYS+n"]),
                                    value: `+${l.resultAdded} \u{2212}${l.resultRemoved ?? 0}`,
                                }),
                          !0 !== l.resultTruncated
                              ? null
                              : (0, r.jsx)(uH, {
                                    label: eu.intl.string(eo.default.t7GJFc),
                                    value: (0, r.jsx)(j.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        children: eu.intl.string(eo.default.ijkkUh),
                                    }),
                                }),
                          c?.status === "loaded" && null != c.rich.result
                              ? (0, r.jsx)(uJ, { entries: c.rich.result })
                              : null,
                      ],
                  })
                : null,
            u.includes("usage") && "model" === l.kind
                ? (0, r.jsxs)(uV, {
                      title: eu.intl.string(eo.default.NXmRw1),
                      children: [
                          (0, r.jsxs)(uK, {
                              children: [
                                  null == l.promptTokens
                                      ? null
                                      : (0, r.jsx)(uB, {
                                            label: eu.intl.string(eo.default.iq3T1q),
                                            value: eu.intl.formatToPlainString(eo.default["6GQUgQ"], {
                                                tokens: or(l.promptTokens),
                                            }),
                                        }),
                                  null == l.systemTokens
                                      ? null
                                      : (0, r.jsx)(uB, {
                                            label: eu.intl.string(eo.default.ZELAZn),
                                            value: eu.intl.formatToPlainString(eo.default.Te7mPn, {
                                                system: or(l.systemTokens),
                                                tools: or(l.toolsTokens ?? 0),
                                                toolCount: l.tools ?? 0,
                                                messages: or(l.messagesTokens ?? 0),
                                                messageCount: l.messages ?? 0,
                                            }),
                                        }),
                                  null == l.inputTokens
                                      ? null
                                      : (0, r.jsx)(uB, {
                                            label: eu.intl.string(eo.default["LENc/T"]),
                                            value: String(l.inputTokens),
                                        }),
                                  null == l.outputTokens
                                      ? null
                                      : (0, r.jsx)(uB, {
                                            label: eu.intl.string(eo.default.ewRHwx),
                                            value: String(l.outputTokens),
                                        }),
                                  null == l.cacheReadTokens
                                      ? null
                                      : (0, r.jsx)(uB, {
                                            label: eu.intl.string(eo.default.heVFQD),
                                            value: eu.intl.formatToPlainString(eo.default.VO3gdd, {
                                                read: l.cacheReadTokens,
                                                write: l.cacheWriteTokens ?? 0,
                                            }),
                                        }),
                                  null == l.costUsd
                                      ? null
                                      : (0, r.jsx)(uB, {
                                            label: eu.intl.string(eo.default.aBw2Vm),
                                            value: `$${l.costUsd.toFixed(4)}`,
                                        }),
                              ],
                          }),
                          (0, r.jsx)(j.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              className: os.E7,
                              children: eu.intl.string(eo.default["foF/Bc"]),
                          }),
                      ],
                  })
                : null,
            u.includes("arguments") || u.includes("result")
                ? (0, r.jsx)(j.E, {
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: os.E7,
                      children: eu.intl.string(eo.default.o24IFK),
                  })
                : null,
            u.includes("diagnostics")
                ? (0, r.jsx)(uW, {
                      title: eu.intl.string(eo.default["dix/W4"]),
                      children: (0, r.jsxs)(uK, {
                          children: [
                              null == a
                                  ? null
                                  : (0, r.jsx)(uH, {
                                        label: eu.intl.string(eo.default.soPsOJ),
                                        value: (0, r.jsx)(uU.Anchor, {
                                            onClick: () => s(a.id),
                                            children: (0, r.jsx)(j.E, {
                                                tag: "span",
                                                variant: "text-xs/normal",
                                                color: "none",
                                                children: "model" === a.kind ? a.model : a.tool,
                                            }),
                                        }),
                                    }),
                              0 === o
                                  ? null
                                  : (0, r.jsx)(uB, {
                                        label: eu.intl.string(eo.default.kNZBxr),
                                        value: eu.intl.formatToPlainString(eo.default["6LoCUh"], { count: o }),
                                    }),
                              null == l.turnId
                                  ? null
                                  : (0, r.jsx)(uB, { label: eu.intl.string(eo.default.bL1r5J), value: l.turnId }),
                              (0, r.jsx)(uB, { label: eu.intl.string(eo.default.Ndwr7X), value: l.id }),
                              null == m ? null : (0, r.jsx)(uB, { label: eu.intl.string(eo.default.sO8ghW), value: m }),
                              "model" !== l.kind || null == l.stopReason
                                  ? null
                                  : (0, r.jsx)(uB, { label: eu.intl.string(eo.default.VfYxPF), value: l.stopReason }),
                              "tool" !== l.kind || null == l.schema || 0 === l.schema.length
                                  ? null
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(j.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                className: os.Hm,
                                                children: eu.intl.string(eo.default.mSm8iy),
                                            }),
                                            l.schema.map((e) =>
                                                (0, r.jsx)(
                                                    uB,
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
            (0, r.jsx)(j.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: os.E7,
                children: eu.intl.string(eo.default.FloyTQ),
            }),
        ],
    });
}
let uZ = { model: os.WI, subagent: os.uM, context: os.eH, tool: os.pw, delegated: os.C8 };
function u0(e) {
    let { entries: t } = e,
        l = i.useMemo(
            () =>
                (function (e) {
                    let t = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 },
                        l = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 };
                    for (let n of e) {
                        let e = uD(n);
                        ((t[e] += n.durationMs ?? 0), (l[e] += 1));
                    }
                    return u$.map((e) => ({ category: e, ms: t[e], calls: l[e] }));
                })(t),
            [t],
        ),
        n = l.reduce((e, t) => e + t.ms, 0);
    return (0, r.jsxs)("div", {
        className: os.M0,
        children: [
            (0, r.jsx)("div", {
                className: os.pZ,
                "aria-hidden": !0,
                children:
                    0 === n
                        ? null
                        : l.map((e) => {
                              let { category: t, ms: l } = e;
                              return 0 === l
                                  ? null
                                  : (0, r.jsx)(
                                        "div",
                                        {
                                            className: `${os.dL} ${uZ[t]}`,
                                            style: { "--custom-conjure-trace-segment-weight": String(l) },
                                        },
                                        t,
                                    );
                          }),
            }),
            (0, r.jsx)("div", {
                className: os.z4,
                role: "group",
                "aria-label": eu.intl.string(eo.default["Gioq+C"]),
                children: u$.map((e) => {
                    let t = l.find((t) => t.category === e),
                        a = t?.ms ?? 0,
                        i = t?.calls ?? 0,
                        s = 0 === n ? 0 : Math.round((a / n) * 100);
                    return (0, r.jsxs)(
                        "div",
                        {
                            className: os.fI,
                            children: [
                                (0, r.jsx)("span", { className: `${os.A9} ${uZ[e]}`, "aria-hidden": !0 }),
                                (0, r.jsx)(j.E, { variant: "text-xs/normal", color: "text-muted", children: oi(e) }),
                                (0, r.jsx)(j.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: eu.intl.formatToPlainString(eo.default["3dQ1ly"], { percent: s }),
                                }),
                                (0, r.jsx)(j.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: eu.intl.formatToPlainString(eo.default.Ow0k34, { count: i }),
                                }),
                                0 === a
                                    ? null
                                    : (0, r.jsx)(j.E, {
                                          variant: "text-xs/normal",
                                          color: "text-subtle",
                                          tabularNumbers: !0,
                                          children: oa(a),
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
function u1(e) {
    let { entry: t, selected: l, tabbable: n, onSelect: a, onKeyDown: i, nested: s } = e,
        o = uD(t),
        u = "model" === t.kind ? t.model : t.tool,
        c =
            "model" === t.kind && null != t.promptTokens
                ? eu.intl.formatToPlainString(eo.default["6GQUgQ"], { tokens: or(t.promptTokens) })
                : null != t.durationMs
                  ? oa(t.durationMs)
                  : null;
    return (0, r.jsxs)(b.D, {
        tag: "div",
        role: "option",
        "aria-selected": l,
        tabIndex: n ? 0 : -1,
        id: `trace-${t.id}`,
        className: `${os.nM} ${s ? os.A5 : ""} ${"error" === t.status ? os.Cr : ""} ${l ? os.CZ : ""}`,
        onKeyDown: i,
        onClick: () => a(t.id),
        children: [
            (0, r.jsxs)("div", {
                className: os.sU,
                children: [
                    (0, r.jsx)(ou, { status: t.status }),
                    (0, r.jsx)(uG, { category: o }),
                    (0, r.jsx)(j.E, {
                        variant: "text-xs/semibold",
                        color: "text-default",
                        className: os.G9,
                        children: u,
                    }),
                    null == c
                        ? null
                        : (0, r.jsx)(j.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              tabularNumbers: !0,
                              className: os.j2,
                              children: c,
                          }),
                ],
            }),
            "tool" === t.kind && null != t.summary
                ? (0, r.jsx)(j.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: os.Ne,
                      children: t.summary,
                  })
                : null,
            null == t.error
                ? null
                : (0, r.jsx)(j.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: os.Xu,
                      children: t.error,
                  }),
        ],
    });
}
function u2(e) {
    var t;
    let { projectId: l, query: n } = e,
        a = (0, m.yK)([eS.Ay], () => eS.Ay.getTrace(l), [l]),
        s = (0, m.bG)([eS.Ay], () => eS.Ay.getHistoryState(l, "trace"));
    i.useEffect(() => uL, [l]);
    let [o, u] = i.useState(null),
        [c, d] = i.useState(40),
        [f, h] = i.useState(!1),
        g = i.useRef(null),
        x = i.useRef(null),
        p = i.useRef(null),
        v = i.useRef(null),
        b = i.useId(),
        y = i.useCallback((e) => {
            null != e && document.getElementById(`trace-${e}`)?.focus();
        }, []),
        k = i.useCallback((e) => u((t) => (t === e ? null : e)), []),
        w = i.useCallback((e) => {
            let t = g.current?.offsetHeight ?? 0;
            return 0 === t ? 40 : (0, lu.clamp)((e / t) * 100, 25, 75);
        }, []),
        N = i.useCallback((e) => {
            let t = g.current?.offsetHeight ?? 0;
            return 0 === t ? e : (0, lu.clamp)(e, (25 * t) / 100, (75 * t) / 100);
        }, []),
        A = (0, uE.A)({
            resizableDomNodeRef: x,
            orientation: uE.R.VERTICAL_TOP,
            getClampedValue: N,
            onElementResize: (e) => d(w(e)),
            onElementResizeStart: () => h(!0),
            onElementResizeEnd: () => h(!1),
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        S = i.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), A(e));
            },
            [A],
        ),
        C = i.useCallback((e) => {
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
            null != t && (e.preventDefault(), d((e) => (0, lu.clamp)(e + t, 25, 75)));
        }, []),
        E = i.useCallback(() => {
            (u(null), y(o));
        }, [o, y]),
        I = i.useMemo(() => uF(a, n), [a, n]),
        M = i.useMemo(
            () =>
                (function (e) {
                    let t = [],
                        l = null;
                    for (let n of e) {
                        let e = n.turnId ?? null;
                        ((null == l || l.turnId !== e) &&
                            ((l = { turnId: e, entries: [] }),
                            t.push({ turnId: e, entries: l.entries, startedAt: n.startedAt, spanMs: null })),
                            l.entries.push(n));
                    }
                    return t.map((e) => ({
                        ...e,
                        spanMs: (function (e) {
                            let t = 1 / 0,
                                l = -1 / 0;
                            for (let n of e) {
                                let e = Date.parse(n.startedAt);
                                Number.isNaN(e) ||
                                    ((t = Math.min(t, e)), null != n.durationMs && (l = Math.max(l, e + n.durationMs)));
                            }
                            return Number.isFinite(t) && Number.isFinite(l) ? Math.max(0, l - t) : null;
                        })(e.entries),
                    }));
                })(a)
                    .map((e, t) => ({ ...e, index: t, entries: uF(e.entries, n) }))
                    .filter((e) => e.entries.length > 0),
            [a, n],
        ),
        T = uz(I, o),
        _ = T?.kind === "tool" ? uz(a, T.parentId ?? null) : null,
        P = null == T ? 0 : ((t = T.id), a.filter((e) => "tool" === e.kind && e.parentId === t)).length,
        R = I[I.length - 1];
    i.useLayoutEffect(() => {
        if (null != o) return;
        let e = p.current?.getScrollerNode();
        null != e && (e.scrollTop = e.scrollHeight);
    }, [R, o]);
    let L = i.useCallback(
        (e) => {
            if (0 === I.length) return;
            let t = I.findIndex((e) => e.id === o);
            function l(t) {
                e.preventDefault();
                let l = Math.max(0, Math.min(I.length - 1, t));
                (u(I[l].id), document.getElementById(`trace-${I[l].id}`)?.scrollIntoView({ block: "nearest" }));
            }
            "ArrowDown" === e.key
                ? l(t + 1)
                : "ArrowUp" === e.key
                  ? l(-1 === t ? I.length - 1 : t - 1)
                  : "Home" === e.key
                    ? l(0)
                    : "End" === e.key
                      ? l(I.length - 1)
                      : "Escape" === e.key && null != o && (e.preventDefault(), u(null), y(o));
        },
        [I, o, y],
    );
    return 0 === a.length
        ? (0, r.jsx)("div", {
              className: os.uP,
              ref: g,
              children: (0, r.jsx)(ug, {
                  state: s,
                  emptyTitle: eu.intl.string(eo.default["Tpvy/s"]),
                  emptyBody: eu.intl.string(eo.default.J0WcVA),
              }),
          })
        : (0, r.jsxs)("div", {
              className: `${os.uP} ${f ? os.F4 : ""}`,
              ref: g,
              children: [
                  (0, r.jsxs)("div", {
                      className: os.DK,
                      children: [
                          (0, r.jsx)(u0, { entries: a }),
                          (0, r.jsx)(uh, { state: s }),
                          0 === I.length
                              ? (0, r.jsx)("div", {
                                    className: os.Ie,
                                    children: (0, r.jsx)(j.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children: eu.intl.string(eo.default.tDB4lC),
                                    }),
                                })
                              : (0, r.jsxs)(l4.Ch, {
                                    ref: p,
                                    className: os.Ns,
                                    children: [
                                        (0, r.jsx)(ux, { state: s }),
                                        (0, r.jsx)("div", {
                                            ref: v,
                                            id: b,
                                            role: "listbox",
                                            "aria-label": eu.intl.string(eo.default.SGbiNE),
                                            className: os.p_,
                                            children: M.map((e) => {
                                                let t = od(e.startedAt),
                                                    l = eu.intl.formatToPlainString(eo.default.gPwGYA, {
                                                        number: e.index + 1,
                                                    });
                                                return (0, r.jsxs)(
                                                    "div",
                                                    {
                                                        role: "presentation",
                                                        children: [
                                                            (0, r.jsxs)("div", {
                                                                className: os.mf,
                                                                children: [
                                                                    (0, r.jsx)(j.E, {
                                                                        variant: "text-xs/semibold",
                                                                        color: "text-muted",
                                                                        children: l,
                                                                    }),
                                                                    (0, r.jsx)(j.E, {
                                                                        variant: "text-xs/normal",
                                                                        color: "text-subtle",
                                                                        tabularNumbers: !0,
                                                                        children: t ?? "",
                                                                    }),
                                                                    null == e.spanMs
                                                                        ? null
                                                                        : (0, r.jsx)(j.E, {
                                                                              variant: "text-xs/normal",
                                                                              color: "text-subtle",
                                                                              tabularNumbers: !0,
                                                                              children: oa(e.spanMs),
                                                                          }),
                                                                ],
                                                            }),
                                                            (0, r.jsx)("div", {
                                                                role: "group",
                                                                "aria-label": l,
                                                                className: os.M5,
                                                                children: e.entries.map((e) =>
                                                                    (0, r.jsx)(
                                                                        u1,
                                                                        {
                                                                            entry: e,
                                                                            selected: e.id === o,
                                                                            tabbable: e.id === (o ?? I[0]?.id),
                                                                            onSelect: k,
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
                  null == T
                      ? null
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("div", {
                                    role: "separator",
                                    "aria-orientation": "horizontal",
                                    "aria-label": eu.intl.string(eo.default.DtSORy),
                                    "aria-valuenow": Math.round(c),
                                    "aria-valuemin": 25,
                                    "aria-valuemax": 75,
                                    tabIndex: 0,
                                    className: os.b1,
                                    onPointerDown: S,
                                    onKeyDown: C,
                                }),
                                (0, r.jsx)("div", {
                                    ref: x,
                                    className: os.Or,
                                    style: { "--custom-conjure-trace-detail-share": String(c) },
                                    children: (0, r.jsx)(uY, {
                                        projectId: l,
                                        entry: T,
                                        parent: _,
                                        childCount: P,
                                        onSelect: u,
                                        onClose: E,
                                    }),
                                }),
                            ],
                        }),
              ],
          });
}
function u3(e) {
    let { projectId: t, query: l, onQueryChange: n } = e,
        a = (0, m.yK)([eS.Ay], () => eS.Ay.getTrace(t), [t]),
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
                className: os.ED,
                children: (0, r.jsx)(um.I, {
                    query: l,
                    onChange: n,
                    onClear: () => n(""),
                    size: "sm",
                    placeholder: eu.intl.string(eo.default["EY8/Mt"]),
                    "aria-label": eu.intl.string(eo.default["EY8/Mt"]),
                }),
            }),
            (0, r.jsx)(Z.Y, {
                targetElementRef: s,
                position: "bottom",
                align: "right",
                animation: Z.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, r.jsx)(ee.W, {
                        "data-menu-migrated": !0,
                        navId: `conjure-trace-actions-${t}`,
                        "aria-label": eu.intl.string(eu.t.ogxXGq),
                        onClose: l,
                        onSelect: l,
                        children: (0, r.jsx)(et.rX, {
                            children: (0, r.jsx)(et.Dr, {
                                id: "export",
                                label: eu.intl.string(eo.default.WXrPRZ),
                                disabled: 0 === a.length,
                                action: o,
                            }),
                        }),
                    });
                },
                children: (e, t) => {
                    let { isShown: l } = t;
                    return (0, r.jsx)(t8.K, {
                        ...e,
                        buttonRef: s,
                        icon: t9.MoreHorizontalIcon,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": eu.intl.string(eu.t["UKOtz+"]),
                        "aria-haspopup": "menu",
                        "aria-expanded": l,
                    });
                },
            }),
        ],
    });
}
var u4 = l(592465);
function u6(e) {
    let { projectId: t, onClose: l } = e,
        [n, a] = i.useState("logs"),
        [s, o] = i.useState(""),
        u = (0, m.bG)([ol.A], () => ol.A.isDeveloper),
        c = (0, m.bG)([on.A], () => on.A.getStatus(t), [t]),
        d = (0, m.bG)([on.A], () => on.A.getFetchState(t), [t]);
    (i.useEffect(() => {
        (0, en.R7)(t);
    }, [t]),
        i.useEffect(() => (0, en.Rw)(t), [t]));
    let f = i.useCallback(() => (0, en.R7)(t), [t]),
        h = i.useCallback(() => {
            (0, ll.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: on.A.getStatus(t),
                        last_turn_usage: on.A.getLastTurnUsage(t),
                        last_compaction: on.A.getLastCompaction(t),
                        last_compaction_decline: on.A.getLastCompactionDecline(t),
                        model_calls: on.A.getModelCalls(t),
                        logs: eS.Ay.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, v.P0)((0, v.ox)(eu.intl.string(eo.default.wI6fhl), v.Ck.SUCCESS)),
            );
        }, [t]),
        g = eu.intl.string(eo.default["Q4FN+H"]);
    return (0, r.jsxs)("section", {
        className: u4.nd,
        "aria-label": g,
        children: [
            (0, r.jsxs)(l3.Ay, {
                "aria-label": g,
                toolbar: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l3.Ay.Icon, {
                            icon: sr.CopyIcon,
                            tooltip: eu.intl.string(eo.default.TkHqy2),
                            onClick: h,
                        }),
                        (0, r.jsx)(l3.Ay.Icon, { icon: P.P, tooltip: eu.intl.string(eu.t.cpT0Cq), onClick: l }),
                    ],
                }),
                children: [
                    (0, r.jsx)(l3.Ay.ChannelIcon, { icon: S.BugIcon, "aria-hidden": !0 }),
                    (0, r.jsx)(l3.Ay.Title, { children: g }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: u4.rf,
                children: [
                    (0, r.jsxs)(ot.V, {
                        selectedItem: n,
                        type: "top",
                        onItemSelect: (e) => a(e),
                        "aria-label": eu.intl.string(eo.default.RvvWIh),
                        className: u4.vR,
                        children: [
                            (0, r.jsx)(ot.V.Item, { id: "logs", children: eu.intl.string(eo.default["+VRYCm"]) }),
                            (0, r.jsx)(ot.V.Item, { id: "worker", children: eu.intl.string(eo.default["50D0FZ"]) }),
                            (0, r.jsx)(ot.V.Item, { id: "agent", children: eu.intl.string(eo.default.UkbTK1) }),
                            u
                                ? (0, r.jsx)(ot.V.Item, { id: "trace", children: eu.intl.string(eo.default.O6nNjP) })
                                : null,
                            u ? (0, r.jsx)(ot.V.Item, { id: "perf", children: "Perf Trace" }) : null,
                        ],
                    }),
                    "logs" === n
                        ? (0, r.jsx)(uj, { projectId: t })
                        : "worker" === n
                          ? (0, r.jsx)(uC, { status: c, fetchState: d, onRefresh: f })
                          : "trace" === n && u
                            ? (0, r.jsxs)("div", {
                                  className: u4.uP,
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: u4.XH,
                                          children: (0, r.jsx)(u3, { projectId: t, query: s, onQueryChange: o }),
                                      }),
                                      (0, r.jsx)(u2, { projectId: t, query: s }),
                                  ],
                              })
                            : "perf" === n && u
                              ? (0, r.jsx)(oW, { projectId: t })
                              : (0, r.jsx)(uu, {
                                    projectId: t,
                                    status: c,
                                    fetchState: d,
                                    onRefresh: f,
                                    traceVisible: u,
                                }),
                ],
            }),
        ],
    });
}
var u7 = l(333007),
    u5 = l(365912),
    u8 = l(775121),
    u9 = l(873715);
function ce(e) {
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
    let l = {
        ref: e.ref,
        role: "string" == typeof e.role ? e.role : "",
        name: "string" == typeof e.name ? e.name : "",
        tag: e.tag,
        rect: { x: t.x, y: t.y, width: t.width, height: t.height },
    };
    return (
        "string" == typeof e.value && (l.value = e.value),
        "string" == typeof e.path && "" !== e.path && (l.path = e.path),
        "string" == typeof e.marker && (l.marker = e.marker),
        l
    );
}
l(884868);
let ct = Object.freeze({ x: -1, y: -1 });
function cl(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = ce(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var cn = l(470779);
function ca(e) {
    let {
            projectId: t,
            at: l,
            bounds: n,
            kind: a,
            value: s,
            onChange: u,
            onSubmit: c,
            onDismiss: d,
            canSubmit: m,
            closing: f,
            onUploadFile: h,
        } = e,
        {
            drafts: g,
            addFiles: x,
            pasteFiles: p,
            removeDraft: v,
            settled: j,
            takeRefs: b,
        } = iy({ projectId: t, surface: "design", onUploadFile: h }),
        k = i.useRef(null),
        w = (m || g.length > 0) && j && !f,
        N = i.useCallback(() => {
            if (!w) return;
            let e = b();
            c(e.length > 0 ? e : void 0);
        }, [w, b, c]),
        [A, S] = i.useState(!1);
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
        T = n.left + 8,
        _ = n.top + 8,
        P = Math.max(l.x, T),
        R = Math.min(Math.max(l.y + 32 + 4, _), Math.max(_, n.top + n.height - M - 8));
    return (0, r.jsxs)("div", {
        ref: C,
        className: o()(cn.M0, { [cn.ho]: A && !f, [cn.ET]: f }),
        style: { left: P, top: R },
        "data-testid": "conjure-design-compose-bar",
        children: [
            (0, r.jsx)("input", {
                ref: k,
                type: "file",
                multiple: !0,
                className: cn.Fg,
                tabIndex: -1,
                "aria-hidden": !0,
                onChange: (e) => {
                    (x(Array.from(e.target.files ?? [])), (e.target.value = ""));
                },
            }),
            (0, r.jsx)(y.m, {
                position: "bottom",
                text: eu.intl.string(eo.default.lgvqSB),
                ariaHidden: !0,
                children: (0, r.jsx)("button", {
                    type: "button",
                    className: cn.tY,
                    onClick: () => k.current?.click(),
                    "aria-label": eu.intl.string(eo.default.lgvqSB),
                    children: (0, r.jsx)(el.H, { size: "custom", color: "currentColor", className: cn.WW }),
                }),
            }),
            (0, r.jsx)(nj.y, {
                autoFocus: !0,
                rows: 1,
                className: cn.hF,
                value: s,
                placeholder: "" === a ? eu.intl.string(eo.default.MPPV1Q) : `Edit ${a}`,
                "aria-label": eu.intl.string(eo.default.KCYqWL),
                onChange: (e) => u(e.target.value),
                onPaste: f ? void 0 : p,
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), e.stopPropagation(), d());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), N());
                },
            }),
            g.length > 0
                ? (0, r.jsx)("div", {
                      className: cn.ZO,
                      children: g.map((e) => (0, r.jsx)(ik, { draft: e, onRemove: v }, e.localId)),
                  })
                : null,
        ],
    });
}
var cr = l(192888);
function ci(e, t) {
    return (0, cr.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(cl, () => ({ status: "failed" }));
}
var cs = l(108308);
let co = { x: 25, y: 21 };
function cu(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function cc(e, t, l) {
    return {
        left: t.left + e.rect.x * l,
        top: t.top + e.rect.y * l,
        width: Math.max(e.rect.width * l, 1),
        height: Math.max(e.rect.height * l, 1),
    };
}
function cd(e, t, l, n) {
    let a = cc(e, l, n);
    return { x: a.left + a.width * t.x, y: a.top + a.height * t.y };
}
function cm(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function cf(e) {
    let t = e.snapshot ?? e.results.find((e) => null != e.snapshot)?.snapshot;
    if (null == t || !Array.isArray(t.elements)) return null;
    let l = t.viewport?.width,
        n = t.viewport?.height;
    return "number" != typeof l || "number" != typeof n || l < 1
        ? null
        : {
              elements: t.elements,
              viewport: { width: l, height: n },
              url: "string" == typeof t.url ? t.url : "",
              title: "string" == typeof t.title ? t.title : "",
          };
}
function ch(e) {
    let { projectId: t, applicationId: l, previewApplicationId: n, resolveIframe: a, toggleRef: s } = e,
        o = null != l && l === n ? t : null,
        { active: u, annotations: c } = e8(o),
        d = (0, tx.Zv)(o),
        f = (0, e9.useHasAnyModalOpen)(),
        h = (0, m.bG)([tW.default], () => tW.default.getCurrentUser()),
        g = h?.id ?? null,
        [x, p] = i.useState(null),
        [v, b] = i.useState(null),
        [y, k] = i.useState(!1),
        [w, A] = i.useState(!1),
        [S, C] = i.useState(null),
        [E, I] = i.useState(!1),
        M = i.useRef(null),
        _ = i.useRef(null),
        P = i.useRef(null),
        [R, L] = i.useState(null),
        [D, $] = i.useState(!1),
        [F, z] = i.useState(null),
        [O, G] = i.useState(null),
        U = i.useRef(!1),
        [q, H] = i.useState(!1),
        [B, K] = i.useState(null),
        V = u && !d && !f;
    null == F || (V && F.projectId === o) || z(null);
    let W = F?.projectId ?? null;
    (i.useEffect(() => {
        if (null != W) return () => nB(W, "design");
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
                })(a());
                p((t) => (cu(t, e) ? t : e));
            }
            e();
            let t = window.setInterval(e, 250);
            return (
                window.addEventListener("resize", e),
                () => {
                    (window.clearInterval(t), window.removeEventListener("resize", e));
                }
            );
        }, [V, a]),
        i.useEffect(() => {
            if (!V || null == o) return;
            let e = !0,
                t = a();
            if (null == t) return void A(!0);
            (k(!0), A(!1));
            let l = `design-feedback-${crypto.randomUUID()}`;
            return (
                (0, u9.J)(t, l, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                    (t) => {
                        if (!e) return;
                        k(!1);
                        let l = "completed" === t.status ? cf(t.response) : null;
                        null == l ? A(!0) : (b(l), e6(o, { url: l.url, title: l.title, viewport: l.viewport }));
                    },
                    () => {
                        e && (k(!1), A(!0));
                    },
                ),
                () => {
                    e = !1;
                }
            );
        }, [V, a, o]));
    let X = i.useRef(null);
    (i.useEffect(() => {
        if (!V || null == x || null == o) return;
        if (null == v) {
            X.current = x;
            return;
        }
        if (cu(X.current, x)) return;
        let e = window.setTimeout(() => {
            let e = a();
            if (null == e) return;
            X.current = x;
            let t = [];
            for (let e = 0; e < c.length; e += 24) t.push(c.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, l) => {
                    let n = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, u9.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: n.length > 0 ? n : [{ action: "snapshot" }],
                        snapshot: 0 === l && n.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let l;
                        if ("completed" !== e.status || !Z.current) return;
                        let n = cf(e.response);
                        null != n && (b(n), e6(o, { url: n.url, title: n.title, viewport: n.viewport }));
                        let a = new Map();
                        (e.response.results.forEach((e, l) => {
                            let n = t[l];
                            if (null == n || "locate" !== e.action || !e.ok) return;
                            let r = ce(e.element);
                            null != r && a.set(n.id, r);
                        }),
                            (l = e2(o)).active &&
                                0 !== a.size &&
                                e3(o, {
                                    ...l,
                                    annotations: l.annotations.map((e) => {
                                        let t = a.get(e.id);
                                        return null == t ? e : { ...e, target: t };
                                    }),
                                }));
                    });
                }));
        }, 200);
        return () => window.clearTimeout(e);
    }, [V, x, v, c, o, a]),
        i.useEffect(() => {
            if (!V)
                return () => {
                    (C(null), z(null), K(null), b(null));
                };
        }, [V]));
    let J = i.useRef(null),
        Q = i.useRef(null),
        Y = i.useRef(!1),
        Z = i.useRef(!1);
    i.useEffect(() => {
        ((Z.current = V), V || ((J.current = null), (Q.current = null), (P.current = null), I(!1)));
    }, [V]);
    let ee = i.useCallback(
            function e() {
                if (Y.current) return;
                let t = J.current;
                if (null == t) return;
                J.current = null;
                let l = a();
                null != l &&
                    ((Y.current = !0),
                    ci(l, t).then((t) => {
                        if (((Y.current = !1), Z.current)) {
                            if ("picked" !== t.status || cb(t.target, ei.current.rect, ei.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? C(null)
                                    : "unsupported" === t.status && $(!0);
                            else {
                                let e = eV(t.target);
                                (L((t) => (cj(t, e) ? t : e)),
                                    C((e) => {
                                        var l;
                                        return ((l = t.target),
                                        null == e || null == l
                                            ? e === l
                                            : e.ref === l.ref &&
                                              e.rect.x === l.rect.x &&
                                              e.rect.y === l.rect.y &&
                                              e.rect.width === l.rect.width &&
                                              e.rect.height === l.rect.height)
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
        et = i.useCallback(() => {
            if (null == F) return;
            let e = !U.current;
            (G({ at: F.at, label: F.label, draft: F.draft, instant: e }), H(e), z(null));
        }, [F]);
    (i.useEffect(() => {
        if (!q) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => H(!1));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [q]),
        i.useEffect(() => {
            if (null == O) return;
            let e = setTimeout(() => G(null), cp);
            return () => clearTimeout(e);
        }, [O]));
    let el = null == v || null == x || v.viewport.width < 1 ? 1 : x.width / v.viewport.width,
        ea = null != v || w,
        er = i.useMemo(() => v?.elements ?? [], [v]),
        ei = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        ei.current = { rect: x, scale: el };
    }, [x, el]);
    let es = i.useCallback(
            (e, t, l) => {
                null != o &&
                    (nB(o, "design"),
                    K(null),
                    (U.current = !1),
                    z({ projectId: o, target: e, anchor: t, draft: "", at: l, label: eV(e) }));
            },
            [o],
        ),
        ec = i.useCallback((e, t) => ({ x: (e.clientX - t.left) / el, y: (e.clientY - t.top) / el }), [el]),
        ed = i.useCallback(() => {
            let e = P.current;
            if (null == e) return;
            let t = M.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let l = _.current;
            null != l && (l.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    i.useLayoutEffect(ed);
    let em = i.useCallback(
            (e) => {
                if (null == x || null != B) return;
                if (((P.current = { x: e.clientX, y: e.clientY }), ed(), I(!0), null != F)) {
                    (Math.abs(e.clientX - F.at.x) > cv || Math.abs(e.clientY - F.at.y) > cv) && (U.current = !0);
                    return;
                }
                if (!ea) return void C(null);
                let t = ec(e, x);
                if (D) {
                    let e = (function (e, t, l) {
                            let n = null,
                                a = 1 / 0;
                            for (let r of e) {
                                let { x: e, y: i, width: s, height: o } = r.rect;
                                if (s < 1 || o < 1 || t < e || l < i || t > e + s || l > i + o) continue;
                                let u = s * o;
                                u < a && ((n = r), (a = u));
                            }
                            return n;
                        })(er, t.x, t.y),
                        l = null != e && cb(e, x, el) ? null : e;
                    if (null != l) {
                        let e = eV(l);
                        L((t) => (cj(t, e) ? t : e));
                    }
                    C((e) => (e?.ref === l?.ref ? e : l));
                    return;
                }
                let l = { x: Math.round(t.x), y: Math.round(t.y) },
                    n = Q.current;
                (null == n || n.x !== l.x || n.y !== l.y) && ((Q.current = l), (J.current = l), ee());
            },
            [x, el, ea, ec, D, er, F, B, ed, ee],
        ),
        ef = null == B ? null : c.find((e) => e.id === B.id),
        eh = V && (E || F?.target.marker != null || ef?.target.marker != null);
    i.useEffect(() => {
        if (eh)
            return () => {
                let e = a();
                null != e && ci(e, ct);
            };
    }, [eh, a]);
    let eg = i.useCallback(() => {
        (I(!1), C(null), (Q.current = null), (J.current = null));
    }, []);
    i.useEffect(() => {
        if (!V || !E || !ea || D || null != F || null != B) return;
        let e = P.current,
            { rect: t, scale: l } = ei.current;
        if (null == e || null == t) return;
        let n = { x: Math.round((e.x - t.left) / l), y: Math.round((e.y - t.top) / l) };
        ((Q.current = n), (J.current = n), ee());
    }, [V, E, ea, D, F, B, ee]);
    let ex = i.useCallback(
            (e) => {
                if (null != F || null != B) {
                    (et(), K(null));
                    return;
                }
                if (null == S || null == x) return;
                let t = ec(e, x);
                es(
                    S,
                    (function (e, t, l) {
                        let { x: n, y: a, width: r, height: i } = e.rect;
                        return r < 1 || i < 1
                            ? eB
                            : { x: Math.min(1, Math.max(0, (t - n) / r)), y: Math.min(1, Math.max(0, (l - a) / i)) };
                    })(S, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [S, x, ec, F, B, es, et],
        ),
        ep = i.useCallback(() => {
            null != o && (C(null), e4(o));
        }, [o]),
        ev = i.useCallback(() => {
            null != o &&
                (null != F
                    ? et()
                    : B?.confirmingRemove === !0
                      ? K({ ...B, confirmingRemove: !1 })
                      : null != B
                        ? K(null)
                        : ep());
        }, [o, F, B, et, ep]),
        ej = i.useRef(ev),
        eb = i.useRef(ep);
    i.useLayoutEffect(() => {
        ((ej.current = ev), (eb.current = ep));
    });
    let ey = i.useRef(null);
    i.useEffect(() => {
        if (V)
            return (
                u8.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        u8.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), ej.current());
        }
        function t(e) {
            let t = e.target;
            (0, tR.vq)(t) &&
                ey.current?.contains(t) !== !0 &&
                s?.current?.contains(t) !== !0 &&
                !(function (e) {
                    try {
                        return ((0, u5.J$)(e), !0);
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
                if (null != F || null != B || 0 === er.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    l = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || l) {
                    e.preventDefault();
                    let l = null == S ? -1 : er.findIndex((e) => e.ref === S.ref);
                    C(er[(l + (t ? 1 : -1) + er.length) % er.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != S &&
                    (e.preventDefault(),
                    es(S, eB, { x: (x?.left ?? 0) + S.rect.x * el, y: (x?.top ?? 0) + S.rect.y * el }));
            },
            [o, F, B, er, S, es, ev, x, el],
        ),
        ew = i.useCallback(
            (e) => {
                null == o ||
                    null == F ||
                    ((eK(F.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, en.dv)(
                            o,
                            (function (e, t) {
                                let { kind: l, name: n } = eV(e),
                                    a = [l, n].filter((e) => "" !== e).join(": ");
                                return `${eJ}${a}${eQ}${eX(e)}
${t.trim()}`;
                            })(F.target, F.draft),
                            e,
                        ),
                        et(),
                        C(null)));
            },
            [o, F, et],
        ),
        eN = i.useCallback((e) => (null == o ? Promise.reject(Error("no project")) : (0, en.vX)(o, e)), [o]),
        eA = i.useCallback(() => {
            if (null != o && null != B && null != g && eK(B.draft)) {
                var e, t;
                let l, n;
                ((e = B.id),
                    (t = B.draft.trim()),
                    null != (n = (l = e2(o)).annotations.find((t) => t.id === e)) &&
                        e7(n, g) &&
                        e3(o, { ...l, annotations: l.annotations.map((l) => (l.id === e ? { ...l, comment: t } : l)) }),
                    K({ ...B, editing: !1 }));
            }
        }, [o, B, g]),
        eS = i.useCallback(() => {
            if (null != o && null != B && null != g) {
                var e;
                let t, l;
                ((e = B.id),
                    null != (l = (t = e2(o)).annotations.find((t) => t.id === e)) &&
                        e7(l, g) &&
                        e3(o, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    K(null));
            }
        }, [o, B, g]),
        eC = u
            ? y
                ? eu.intl.string(eo.default["Eb/YV9"])
                : w
                  ? eu.intl.string(eo.default.FD30bh)
                  : eu.intl.formatToPlainString(eo.default.dTSqLF, { count: c.length })
            : "",
        eE = V && null != x,
        eI = E && null == B,
        eM = F?.target ?? ef?.target ?? null,
        eT = F ?? O,
        e_ = F ?? (O?.instant === !0 ? null : O),
        eP =
            null != ef && null != x
                ? (function (e, t) {
                      let { left: l, top: n } = cm(e, t);
                      return { x: l + 12, y: n + 12 };
                  })(cd(ef.target, ef.anchor, x, el), x)
                : null;
    return (
        i.useEffect(() => {
            let e = a();
            if (ef?.target.marker == null || null == e) return;
            let { target: t, anchor: l } = ef;
            ci(e, { x: Math.round(t.rect.x + t.rect.width * l.x), y: Math.round(t.rect.y + t.rect.height * l.y) });
        }, [ef, a]),
        (0, u7.createPortal)(
            (0, r.jsxs)("div", {
                ref: ey,
                className: cs.Li,
                children: [
                    (0, r.jsx)("div", {
                        className: cs.y4,
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-design-announcer",
                        children: eC,
                    }),
                    eE
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)("div", {
                                      className: cs.MT,
                                      style: { left: x.left, top: x.top, width: x.width, height: x.height },
                                      "data-plain-cursor": eI ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": eu.intl.string(eo.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: em,
                                      onMouseLeave: eg,
                                      onClick: ex,
                                      onKeyDown: ek,
                                  }),
                                  null != S && null == S.marker && null == F && null == B
                                      ? (0, r.jsx)(cy, { box: cc(S, x, el) })
                                      : null,
                                  (0, r.jsx)("div", {
                                      ref: M,
                                      className: cs.aZ,
                                      children: (0, r.jsx)("div", {
                                          className: cs.xz,
                                          "data-shown": null != S && null == B && null == F ? "" : void 0,
                                          "data-instant": q ? "" : void 0,
                                          children: (0, r.jsxs)(j.E, {
                                              variant: "text-xs/medium",
                                              className: cs.Ux,
                                              children: [
                                                  null == R
                                                      ? null
                                                      : (0, r.jsx)("span", { className: cs.Tl, children: R.kind }),
                                                  null == R || "" === R.name
                                                      ? null
                                                      : (0, r.jsxs)("span", {
                                                            className: cs.kh,
                                                            children: [" ", R.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, r.jsx)("div", {
                                      ref: _,
                                      className: cs.Y,
                                      children: eI ? (0, r.jsx)("div", { className: cs.u }) : null,
                                  }),
                                  null == e_
                                      ? null
                                      : (0, r.jsx)("div", {
                                            className: cs.aZ,
                                            style: {
                                                transform: `translate3d(${e_.at.x + 20}px, ${e_.at.y + 20}px, 0)`,
                                            },
                                            children: (0, r.jsx)("div", {
                                                className: cs.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == F ? "" : void 0,
                                                children: (0, r.jsxs)(j.E, {
                                                    variant: "text-xs/medium",
                                                    className: cs.Ux,
                                                    children: [
                                                        (0, r.jsx)("span", {
                                                            className: cs.Tl,
                                                            children: e_.label.kind,
                                                        }),
                                                        "" === e_.label.name
                                                            ? null
                                                            : (0, r.jsxs)("span", {
                                                                  className: cs.kh,
                                                                  children: [" ", e_.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eM && null == eM.marker
                                      ? (0, r.jsx)("div", { className: cs.D0, style: cc(eM, x, el), "aria-hidden": !0 })
                                      : null,
                                  c.map((e, t) => {
                                      let l = cd(e.target, e.anchor, x, el),
                                          n = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, r.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: cs.xL,
                                              style: { ...cm(l, x), width: 24, height: 24 },
                                              "aria-label": eu.intl.formatToPlainString(eo.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: eW(e.target),
                                              }),
                                              "aria-expanded": B?.id === e.id,
                                              "data-testid": "conjure-design-marker",
                                              onMouseEnter: () => {
                                                  null == F && K(n);
                                              },
                                              onFocus: () => {
                                                  null == F && K(n);
                                              },
                                              onClick: (e) => {
                                                  (e.stopPropagation(), et(), K(n));
                                              },
                                              children: (0, r.jsx)(cg, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eT || null == o
                                      ? null
                                      : (0, r.jsx)(ca, {
                                            projectId: o,
                                            at: { x: eT.at.x + 20, y: eT.at.y + 20 },
                                            bounds: x,
                                            kind: eT.label.kind,
                                            value: eT.draft,
                                            canSubmit: null != F && eK(eT.draft),
                                            onChange: (e) => {
                                                null != F && z({ ...F, draft: e });
                                            },
                                            onSubmit: ew,
                                            onDismiss: et,
                                            onUploadFile: eN,
                                            closing: null == F,
                                        }),
                                  null != ef && null != B && null != eP
                                      ? (0, r.jsxs)(cx, {
                                            point: eP,
                                            frame: x,
                                            authorId: ef.authorId,
                                            title: eW(ef.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                B.confirmingRemove ? K({ ...B, confirmingRemove: !1 }) : K(null);
                                            },
                                            onMouseLeave: () => {
                                                B.editing || B.confirmingRemove || K(null);
                                            },
                                            children: [
                                                B.editing
                                                    ? (0, r.jsx)(T.f, {
                                                          autoFocus: !0,
                                                          label: eu.intl.string(eo.default.KCYqWL),
                                                          hideLabel: !0,
                                                          value: B.draft,
                                                          maxLength: 1e3,
                                                          rows: 3,
                                                          onChange: (e) => K({ ...B, draft: e }),
                                                          onKeyDown: (e) => {
                                                              "Enter" !== e.key ||
                                                                  e.shiftKey ||
                                                                  (e.preventDefault(), eA());
                                                          },
                                                      })
                                                    : (0, r.jsx)(j.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-default",
                                                          className: cs.aC,
                                                          children: ef.comment,
                                                      }),
                                                e7(ef, g)
                                                    ? (0, r.jsx)("div", {
                                                          className: cs.eB,
                                                          children: B.confirmingRemove
                                                              ? (0, r.jsxs)(r.Fragment, {
                                                                    children: [
                                                                        (0, r.jsx)(j.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: cs.nv,
                                                                            children: eu.intl.string(eo.default.wOHvts),
                                                                        }),
                                                                        (0, r.jsx)(N.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: eu.intl.string(eo.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                K({ ...B, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, r.jsx)(N.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: eu.intl.string(eo.default.friIzR),
                                                                            "data-testid":
                                                                                "conjure-design-remove-confirm",
                                                                            onClick: eS,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, r.jsxs)(r.Fragment, {
                                                                    children: [
                                                                        (0, r.jsx)(N.$, {
                                                                            variant: "critical-secondary",
                                                                            size: "sm",
                                                                            text: eu.intl.string(eo.default.friIzR),
                                                                            onClick: () =>
                                                                                K({
                                                                                    ...B,
                                                                                    editing: !1,
                                                                                    confirmingRemove: !0,
                                                                                }),
                                                                        }),
                                                                        B.editing
                                                                            ? (0, r.jsx)(N.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !eK(B.draft),
                                                                                  text: eu.intl.string(
                                                                                      eo.default.iicRP9,
                                                                                  ),
                                                                                  onClick: eA,
                                                                              })
                                                                            : (0, r.jsx)(N.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: eu.intl.string(
                                                                                      eo.default["6eW9lg"],
                                                                                  ),
                                                                                  onClick: () =>
                                                                                      K({
                                                                                          ...B,
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
function cg(e) {
    let { authorId: t } = e,
        l = (0, m.bG)([tW.default], () => tW.default.getUser(t), [t]);
    return (0, r.jsx)(rn.eu, {
        src: null == l ? null : ri.Ay.getUserAvatarURL(l),
        size: ra._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function cx(e) {
    let t,
        l,
        n,
        a,
        s,
        o,
        { point: u, frame: c, authorId: d, title: m, testId: f, onDismiss: h, onMouseLeave: g, children: x } = e,
        p = i.useRef(null),
        v = i.useRef(null),
        [b, y] = i.useState(co);
    i.useLayoutEffect(() => {
        let e = p.current?.getBoundingClientRect(),
            t = v.current?.getBoundingClientRect();
        if (null == e || null == t || e.width < 1 || t.width < 1) return;
        let l = { x: t.left + t.width / 2 - e.left, y: t.top + t.height / 2 - e.top };
        y((e) => (0.5 > Math.abs(e.x - l.x) && 0.5 > Math.abs(e.y - l.y) ? e : l));
    }, []);
    let {
            left: k,
            top: w,
            originX: N,
            originY: A,
        } = ((l = Math.max((t = c.left + 8), c.left + c.width - 300 - 8)),
        (a = Math.max((n = c.top + 8), c.top + c.height - 160 - 8)),
        (s = Math.min(Math.max(u.x - b.x, t), l)),
        { left: s, top: (o = Math.min(Math.max(u.y - b.y, n), a)), originX: u.x - s, originY: u.y - o }),
        S = { left: k, top: w, "--custom-conjure-card-origin-x": `${N}px`, "--custom-conjure-card-origin-y": `${A}px` };
    return (0, r.jsxs)("div", {
        ref: p,
        className: cs.Nr,
        style: S,
        "data-testid": f,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, r.jsxs)("div", {
                className: cs.MY,
                children: [
                    (0, r.jsx)("span", { ref: v, className: cs.ip, children: (0, r.jsx)(cg, { authorId: d }) }),
                    (0, r.jsx)(j.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: cs.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: cs.zI, children: x }),
        ],
    });
}
let cp = 300,
    cv = 2;
function cj(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function cb(e, t, l) {
    if (null == t || l <= 0) return !1;
    let n = t.width / l,
        a = t.height / l;
    return !(n < 1) && !(a < 1) && e.rect.width >= 0.98 * n && e.rect.height >= 0.98 * a;
}
function cy(e) {
    let { box: t } = e;
    return (0, r.jsx)("div", { className: cs.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var ck = l(659723),
    cw = l(697744),
    cN = l(130324);
function cA(e) {
    let t = (0, cw.c)(),
        { events: l, getDuration: n } = t;
    i.useEffect(() => {
        let e = null,
            t = 0;
        return (
            (e = requestAnimationFrame(function a() {
                ((e = null), null != n()) ? l.onMouseEnter() : t++ < 120 && (e = requestAnimationFrame(a));
            })),
            () => {
                null != e && cancelAnimationFrame(e);
            }
        );
    }, [l, n]);
    let a = (0, iL.A)();
    return (
        i.useEffect(() => {
            if (!a) return;
            let t = setInterval(l.onMouseEnter, e);
            return () => clearInterval(t);
        }, [l, e, a]),
        t
    );
}
function cS(e) {
    let { className: t } = e,
        { Component: l, events: n } = cA(3e4);
    return (0, r.jsxs)("div", {
        className: t,
        onMouseEnter: n.onMouseEnter,
        onMouseLeave: n.onMouseLeave,
        children: [
            (0, r.jsx)(l, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, r.jsx)(j.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: cN.o,
                children: eu.intl.string(eo.default.AyiQEp),
            }),
        ],
    });
}
var cC = l(251363),
    cE = l(944142),
    cI = l(532247),
    cM = l(501628);
function cT(e) {
    let { progress: t } = e,
        { Component: l } = cA(1500),
        n = V.Q_.useSetting();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, r.jsx)(j.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, r.jsx)("div", {
                className: cM.Ci,
                children: Array.from({ length: t.stepCount }, (e, l) =>
                    (0, r.jsx)(
                        "span",
                        {
                            className: cM.PM,
                            "data-state": l < t.stepIndex ? "done" : l === t.stepIndex ? "current" : "todo",
                        },
                        l,
                    ),
                ),
            }),
            n && null != t.stepLabel
                ? (0, r.jsx)(j.E, { variant: "text-xs/normal", color: "text-overlay-light", children: t.stepLabel })
                : null,
        ],
    });
}
function c_(e) {
    let { projectId: t, applicationId: l, previewApplicationId: n, surface: a } = e,
        s = null != t && null != l && l === n,
        o = (0, m.bG)([cE.A], () => (s ? cE.A.getLiveReload(t) : null), [s, t]),
        u = (0, U.A)(l, a)?.id ?? null,
        c = o?.phase ?? null,
        d = (function (e, t) {
            let l = (0, cI.dv)(e),
                [n, a] = i.useState(null),
                [r, s] = i.useState(l);
            r !== l && (s(l), a(null == l ? (0, cI.QP)(e, r) : null));
            let o = (0, m.bG)(
                    [tT.A],
                    () => {
                        let e = tT.A.getFrame(t);
                        return (0, tz.x1)(e) && e.data.proxyTicketRefreshing;
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
                    if (null == n) return;
                    function e() {
                        return a(null);
                    }
                    function l(l) {
                        null != l.target && l.target === (0, cC.o)(null, t) && e();
                    }
                    ((c.current = u.current), document.addEventListener("load", l, !0));
                    let r = window.setTimeout(() => {
                            c.current || e();
                        }, 4e3),
                        i = window.setTimeout(e, 15e3);
                    return () => {
                        (document.removeEventListener("load", l, !0), window.clearTimeout(r), window.clearTimeout(i));
                    };
                }, [n, t]),
                n
            );
        })(c, u),
        f = (0, cI.h_)(c, o?.step ?? null, d);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(k.A, { tag: "div", role: "status", "aria-live": "polite", children: f?.title ?? "" }),
            null != f
                ? (0, r.jsx)("div", {
                      className: cM.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, r.jsx)(cT, { progress: f }),
                  })
                : null,
        ],
    });
}
var cP = l(343030),
    cR = l(317608),
    cL = l(338941),
    cD = l(964404);
let c$ = { width: 1 / 0, height: 1 / 0 };
function cF(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c$;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var cz = l(702083);
function cO(e) {
    let { children: t } = e,
        { mobile: l, landscape: n } = (0, m.cf)([th.A], () => ({
            mobile: th.A.isBuilderPreviewMobile(),
            landscape: th.A.isBuilderPreviewLandscape(),
        })),
        a = i.useRef(null),
        [s, u] = i.useState(null);
    i.useLayoutEffect(() => {
        let e = a.current;
        if (null == e) return;
        function t() {
            if (null == e) return;
            let t = { width: e.clientWidth, height: e.clientHeight };
            u((e) => (e?.width === t.width && e.height === t.height ? e : t));
        }
        t();
        let l = new ResizeObserver(t);
        return (l.observe(e), () => l.disconnect());
    }, []);
    let c = null != s && s.width > 0 ? s : null,
        d = l ? cF(n, c ?? void 0) : null;
    return (0, r.jsx)("div", {
        ref: a,
        className: o()(cz.dw, { [cz.PQ]: null != d }),
        children: (0, r.jsx)("div", { className: o()(cz.R9, { [cz.Vg]: null != d }), style: d ?? void 0, children: t }),
    });
}
var cG = l(347927);
function cU(e) {
    let { title: t, body: l, wide: n = !1, children: a } = e;
    return (0, r.jsxs)("div", {
        className: o()(cG.Bf, n && cG.Qx),
        children: [
            (0, r.jsxs)("div", {
                className: cG.Ux,
                children: [
                    (0, r.jsx)(E.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, r.jsx)(j.E, { variant: "text-md/medium", color: "text-subtle", children: l }),
                ],
            }),
            a,
        ],
    });
}
var cq = l(957272);
function cH(e) {
    let { applicationId: t, surface: l, frameOverlay: n } = e,
        { frame: a, state: s } = (0, cL.A)({ applicationId: t, surface: l }),
        o = (0, tz.VA)(t, l);
    if (
        (i.useEffect(
            () => (
                !(function (e) {
                    let t = tT.A.getFrame(e);
                    if (null == t || t_.A.getWindowOpen(ev.MLl.ACTIVITY_POPOUT)) return;
                    let l = tT.A.getMainFrame()?.id === e;
                    t.intent === tz.sV.MAIN
                        ? (l || G.A.promoteFrame(e), G.A.resetFrameLayoutModes(e))
                        : l && G.A.clearMainFrameSlot();
                })(o),
                () => {
                    let e;
                    null != (e = tT.A.getFrame(o)) &&
                        ((0, tz.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        cD.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === tz.sV.INLINE && G.A.promoteFrame(o),
                              G.A.updateFrameLayoutMode({ frameId: o, layoutMode: tz.y0.PIP }))
                            : e.intent === tz.sV.MAIN && G.A.demoteMainFrame(o));
                }
            ),
            [o],
        ),
        s === cL.n.Launched)
    ) {
        let e = (0, r.jsx)(cR.A, { frameId: a.id, level: cP.A.WithinAppContent, className: cq.Z7, overlay: n });
        return (0, tj.Q5)(l) ? (0, r.jsx)(cO, { children: e }) : e;
    }
    return (0, r.jsx)(cB, { state: s });
}
function cB(e) {
    let { state: t } = e;
    switch (t) {
        case cL.n.RenderingElsewhere:
            return (0, r.jsx)("div", {
                className: cq.qs,
                children: (0, r.jsx)(cU, {
                    title: eu.intl.string(eo.default["9kpdo7"]),
                    body: eu.intl.string(eo.default.iIA8Nj),
                }),
            });
        case cL.n.NoApplication:
            return (0, r.jsx)(cS, { className: cq.qs });
        case cL.n.DoesNotSupportSurface:
            return (0, r.jsx)("div", {
                className: cq.qs,
                children: (0, r.jsx)(cU, {
                    title: eu.intl.string(eo.default["7k4GyN"]),
                    body: eu.intl.string(eo.default.zdIy3R),
                }),
            });
        case cL.n.Error:
            return (0, r.jsxs)("div", {
                className: cq.qs,
                children: [
                    (0, r.jsx)(E.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: eu.intl.string(eo.default.lTPbnG),
                    }),
                    (0, r.jsx)(j.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: cq.tj,
                        children: eu.intl.string(eo.default.e6GiAZ),
                    }),
                ],
            });
        case cL.n.AwaitingLaunch:
        case cL.n.Loading:
            return (0, r.jsx)("div", { className: cq.qs, children: (0, r.jsx)(w.y, {}) });
    }
}
var cK = l(308528),
    cV = l(334738),
    cW = l(688438),
    cX = l(355622),
    cJ = l(365971),
    cQ = l(703462);
function cY(e) {
    let { message: t } = e;
    return (0, r.jsxs)("div", {
        className: cQ.f,
        children: [
            (0, r.jsx)(lb.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, r.jsx)(j.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function cZ() {
    return (0, r.jsx)("div", { className: cQ.f, children: (0, r.jsx)(w.y, {}) });
}
function c0(e) {
    let t,
        l,
        { previewApplicationId: n } = e,
        { data: a, isLoading: s } = (0, F.YY)(n),
        o = a?.bot?.id ?? null,
        u = (0, m.bG)([W.A], () => {
            if (null == o) return null;
            let e = W.A.getDMFromUserId(o);
            return null != e ? W.A.getChannel(e) : null;
        });
    ((t = u?.id ?? null),
        i.useEffect(() => {
            null != t && cK.A.preload(ev.ME, t);
        }, [t]),
        (l = (0, m.bG)([iP.A], () => iP.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !l) return;
            let e = (0, cJ.Xg)();
            return (
                (0, cV.yl)(t, e),
                () => {
                    (0, cV.dm)(t, e);
                }
            );
        }, [t, l]));
    let [c, d] = i.useState(null),
        f = null != o && c === o;
    return (i.useEffect(() => {
        if (null == o || null != u) return;
        let e = !1;
        return (
            cK.A.openPrivateChannel({ recipientIds: o, navigateToChannel: !1 }).catch(() => {
                e || d(o);
            }),
            () => {
                e = !0;
            }
        );
    }, [o, u]),
    s && null == a)
        ? (0, r.jsx)(cZ, {})
        : null == o || f
          ? (0, r.jsx)(cY, { message: eu.intl.string(eo.default["VP/O8s"]) })
          : null == u
            ? (0, r.jsx)(cZ, {})
            : (0, r.jsx)("div", {
                  className: cQ.g,
                  children: (0, r.jsx)(cW.A, { channel: u, guild: null, chatInputType: cX.oU.SIDEBAR }, u.id),
              });
}
var c1 = l(887909),
    c2 = l(570962),
    c3 = l(998475);
function c4(e) {
    let {
        label: t,
        title: l,
        subtitle: n,
        header: a,
        body: i,
        actions: s,
        nextStep: u,
        appDetails: c,
        hasContentBackground: d,
        noPadding: m,
        obscured: f,
    } = (0, c1.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, r.jsxs)("section", {
        className: c3.Nr,
        "aria-label": t,
        children: [
            (0, r.jsx)("div", {
                className: c3.rf,
                children: (0, r.jsx)(c2.A, {
                    obscured: !0 === f,
                    children: (0, r.jsxs)("div", {
                        className: c3.Gq,
                        children: [
                            null != l
                                ? (0, r.jsxs)("div", {
                                      className: c3.z3,
                                      children: [
                                          (0, r.jsx)(E.D, {
                                              variant: "heading-lg/bold",
                                              color: "text-strong",
                                              children: l,
                                          }),
                                          null != n
                                              ? (0, r.jsx)(j.E, {
                                                    variant: "text-md/normal",
                                                    color: "text-default",
                                                    children: n,
                                                })
                                              : null,
                                      ],
                                  })
                                : null,
                            a,
                            (0, r.jsxs)("div", {
                                className: o()(c3.Qs, d ? c3.cw : null, m ? c3.pN : null),
                                children: [i, null == u ? c : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != s && s.length > 0
                ? (0, r.jsx)("div", {
                      className: c3.o1,
                      children: s.map((e, t) => (0, r.jsx)(N.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var c6 = l(765671),
    c7 = l(269094),
    c5 = l(582063);
function c8(e) {
    let { applicationId: t, size: l } = e,
        n = (0, cL.A)({ applicationId: t, surface: tz.ZN });
    return (i.useEffect(() => {
        let e = (0, tz.VA)(t, tz.ZN);
        return () => (0, tA.r)(e);
    }, [t]),
    n.state !== cL.n.Launched)
        ? (0, r.jsx)(cB, { state: n.state })
        : n.frame.data.proxyTicketRefreshing
          ? (0, r.jsx)(cB, { state: cL.n.Loading })
          : (0, r.jsx)(c9, { lifecycle: n, size: l });
}
function c9(e) {
    let { lifecycle: t, size: l } = e,
        { ref: n, width: a, height: i } = (0, c6.Ay)(),
        s = (function (e, t) {
            let { width: l, height: n } = e;
            return null == l || null == n || l <= 0 || n <= 0 ? 1 : Math.min(1, l / t.width, n / t.height);
        })({ width: a, height: i }, l);
    return (0, r.jsxs)("div", {
        className: c5.JH,
        children: [
            (0, r.jsx)("div", { className: c5.LO, "aria-hidden": !0 }),
            (0, r.jsx)("div", {
                ref: n,
                className: c5.dw,
                children: (0, r.jsx)("div", {
                    className: c5.HL,
                    style: {
                        "--custom-conjure-overlay-widget-width": `${l.width}px`,
                        "--custom-conjure-overlay-widget-height": `${l.height}px`,
                        "--custom-conjure-overlay-widget-scale": String(s),
                    },
                    children: (0, r.jsx)(c7.A, { frame: t.frame, application: t.application, className: c5.Gt }),
                }),
            }),
        ],
    });
}
var de = l(409478),
    dt = l(652227);
function dl(e) {
    let {
        applicationId: t,
        previewApplicationId: l,
        surface: n,
        previewReady: a,
        previewGate: i,
        availability: s,
        activeMode: o,
        widgetApplicationId: u,
        overlayWidgetSize: c = tg,
        frameOverlay: d,
    } = e;
    return i?.type === "checking"
        ? (0, r.jsx)("div", { className: dt.q, children: (0, r.jsx)(w.y, {}) })
        : i?.type === "permissions"
          ? (0, r.jsx)("div", {
                className: dt.q,
                children: null == i.authorizeProps ? (0, r.jsx)(w.y, {}) : (0, r.jsx)(c4, { ...i.authorizeProps }),
            })
          : a
            ? null == t
                ? null
                : (0, r.jsxs)("div", {
                      className: dt.R,
                      children: [
                          (0, tv.yf)(s, o) ? (0, r.jsx)(cH, { applicationId: t, surface: n, frameOverlay: d }) : null,
                          "widget" === o && null != u
                              ? "unavailable-authorization-revoked" === s.profileState
                                  ? (0, r.jsx)("div", {
                                        className: dt.q,
                                        children: (0, r.jsx)(cU, {
                                            wide: !0,
                                            title: eu.intl.string(eo.default["08U+YO"]),
                                            body: eu.intl.string(eo.default.pKBfrc),
                                        }),
                                    })
                                  : (0, r.jsx)(de.A, { applicationId: u })
                              : null,
                          "overlay" === o && s.modes.includes("overlay")
                              ? (0, r.jsx)(c8, { applicationId: t, size: c })
                              : null,
                          "bot" === o && null != l ? (0, r.jsx)(c0, { previewApplicationId: l }) : null,
                      ],
                  })
            : (0, r.jsx)(cS, { className: dt.q });
}
var dn = l(175841),
    da = l(750506),
    dr = l(867193),
    di = l(417760);
function ds(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function du(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function dc(e) {
    let { phase: t, projectId: l, onOpenPublishedApp: n, compact: a } = e,
        { stop: s, stopping: u } = (function (e) {
            let t = (0, m.bG)([eb.Ay], () => null != e && eb.Ay.isThinking(e)),
                [l, n] = i.useState(!1),
                [a, r] = i.useState(t);
            (t !== a && (r(t), t || n(!1)),
                i.useEffect(() => {
                    if (!l) return;
                    let e = setTimeout(() => n(!1), 5e3);
                    return () => clearTimeout(e);
                }, [l]));
            let s = i.useCallback(() => {
                null != e && (n(!0), (0, en.fu)(e));
            }, [e]);
            return { stop: t ? s : null, stopping: l };
        })(l),
        c = (0, tx.CU)(l),
        d = "controlling" === t,
        f = eu.intl.string(d ? (c ? eo.default["VJW/5P"] : eo.default["+hD2Iz"]) : eo.default["h+i1r9"]),
        h =
            null != n
                ? (0, r.jsx)(N.$, {
                      variant: "overlay-secondary",
                      size: "sm",
                      text: eu.intl.string(eo.default["1NcO7H"]),
                      onClick: n,
                  })
                : null,
        g =
            null != s
                ? (0, r.jsx)(N.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: eu.intl.string(eo.default.oU59sU),
                      loading: u,
                      onClick: s,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return a
        ? (0, r.jsxs)("div", {
              className: o()(di.M0, di.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  d
                      ? (0, r.jsx)(sq.i, { size: 12, color: "currentColor" })
                      : (0, r.jsx)(dn.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, r.jsx)(j.E, { variant: "text-sm/semibold", color: "none", className: di.ID, children: f }),
                  d ? (0, r.jsx)(k.A, { children: eu.intl.string(eo.default.fg1sor) }) : null,
                  d ? (0, r.jsxs)("div", { className: di.lC, children: [h, g] }) : null,
              ],
          })
        : (0, r.jsxs)("div", {
              className: di.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, r.jsxs)("div", {
                      className: di.sp,
                      children: [
                          (0, r.jsx)(dn.SparklesIcon, { size: "sm", color: "currentColor" }),
                          d ? (0, r.jsx)(sq.i, { size: 12, color: "currentColor" }) : null,
                          (0, r.jsxs)("div", {
                              className: di.f4,
                              children: [
                                  (0, r.jsx)(j.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: di.w9,
                                      children: f,
                                  }),
                                  d
                                      ? (0, r.jsx)(j.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: di.Rb,
                                            children: eu.intl.string(eo.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  d ? (0, r.jsxs)("div", { className: di.lC, children: [h, g] }) : null,
              ],
          });
}
function dd(e) {
    let {
            projectId: t,
            applicationId: l,
            previewApplicationId: n,
            resolveTarget: a,
            frameId: s,
            onOpenPublishedApp: o = null,
        } = e,
        u = (0, tx.Zv)(null != l && l === n ? t : null),
        c = (function (e) {
            let [t, l] = i.useState(e),
                [n, a] = i.useState(!1);
            return (e !== t && (l(e), a(!e)),
            i.useEffect(() => {
                if (!n) return;
                let e = setTimeout(() => a(!1), 2400);
                return () => clearTimeout(e);
            }, [n]),
            e)
                ? "controlling"
                : n
                  ? "handoff"
                  : "idle";
        })(u),
        d = (0, e9.useHasAnyModalOpen)(),
        m = tF(s);
    i.useEffect(() => {
        u &&
            m &&
            null != s &&
            (function (e) {
                if (!tD(e)) return;
                let t = tL(e);
                null != t && (0, tP.sP)(t);
            })(s);
    }, [u, m, s]);
    let [f, h] = i.useState(null),
        [g, x] = i.useState(null),
        [p, v] = i.useState(null),
        j = "idle" !== c;
    i.useEffect(() => {
        if (!j) return;
        function e() {
            let e = ds(a());
            h((t) => (du(t, e) ? t : e));
            let t = null == g ? null : ds(g);
            (v((e) => (du(e, t) ? e : t)), null != g && (0, dr.C)(g.getBoundingClientRect().height));
        }
        e();
        let t = window.setInterval(e, 250);
        window.addEventListener("resize", e);
        let l = null == g ? null : new ResizeObserver(e);
        return (
            null != g && l?.observe(g),
            () => {
                (window.clearInterval(t),
                    window.removeEventListener("resize", e),
                    l?.disconnect(),
                    null != g && (0, dr.C)(0));
            }
        );
    }, [j, a, g]);
    let b = "idle" !== c && null != f,
        y = b && "controlling" === c && !d,
        k = null != f && f.width < 420,
        w = null == f ? void 0 : { left: f.left, top: f.top, width: f.width, height: f.height },
        N =
            null == f
                ? void 0
                : (function (e, t) {
                      if (null == t) return { left: e.left, top: e.top, width: e.width, height: e.height };
                      let l = Math.min(e.left, t.left),
                          n = Math.min(e.top, t.top);
                      return {
                          left: l,
                          top: n,
                          width: Math.max(e.left + e.width, t.left + t.width) - l,
                          height: Math.max(e.top + e.height, t.top + t.height) - n,
                      };
                  })(f, p),
        A = (function () {
            let [e] = i.useContext(da.uY),
                [t] = i.useState(() => document.createElement("div"));
            return (
                i.useLayoutEffect(() => {
                    if (null != e) return (e.prepend(t), () => t.remove());
                }, [e, t]),
                null == e ? document.body : t
            );
        })();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            b
                ? (0, r.jsx)("div", {
                      ref: x,
                      className: di.D,
                      "data-phase": c,
                      children: (0, r.jsx)("div", {
                          className: di.QF,
                          children: (0, r.jsx)(dc, { phase: c, projectId: t, onOpenPublishedApp: o, compact: k }),
                      }),
                  })
                : null,
            (0, u7.createPortal)(
                (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)("div", {
                        className: di.y4,
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-control-announcer",
                        children:
                            "controlling" === c
                                ? eu.intl.string(eo.default.oWcemF)
                                : "handoff" === c
                                  ? eu.intl.string(eo.default["h+i1r9"])
                                  : "",
                    }),
                }),
                document.body,
            ),
            y
                ? (0, u7.createPortal)(
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", {
                                  className: di.ys,
                                  style: N,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, r.jsx)("div", {
                                  className: di.om,
                                  style: w,
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
var dm = l(399503),
    df = l(853555),
    dh = l(558960),
    dg = l(187645);
let dx = new Map(),
    dp = !1;
function dv() {
    let e = new Map();
    for (let t of new Set([...eb.Ay.getActivityOrderedProjectIds(), ...(0, tx.T7)()])) {
        if (!eb.Ay.isThinking(t) && !(0, tx.wK)(t)) continue;
        let l = (function (e) {
            let t = eS.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let l = (0, tj.Rc)(t);
            return (0, tz.x1)(l) ? l.id : null;
        })(t);
        null != l && e.set(t, l);
    }
    for (let [n, a] of [...dx]) {
        var t, l;
        e.get(n) !== a.frameId &&
            ((t = n),
            (l = a),
            dx.delete(t),
            l.unregisterLookup(),
            dh.A.removeFrameTarget(l.frameId, l.element),
            l.element.remove());
    }
    for (let [t, l] of e)
        dx.has(t) ||
            (function (e, t) {
                let l = document.createElement("div");
                ((l.className = dg.t),
                    l.setAttribute("inert", ""),
                    l.setAttribute("aria-hidden", "true"),
                    dj(l),
                    document.body.appendChild(l));
                let n = { frameId: t, element: l, unregisterLookup: () => {} };
                (dx.set(e, n),
                    (n.unregisterLookup = (0, df.Ng)(e, () => (0, cC.o)(l, t))),
                    dh.A.registerFrameTarget(t, l, cP.A.Backstage, void 0));
            })(t, l);
    for (let e of dx.values()) dj(e.element);
}
function dj(e) {
    let t = th.A.isBuilderPreviewMobile();
    e.classList.toggle(dg.L, !t);
    let l = t ? cF(th.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != l ? `${l.width}px` : ""), (e.style.height = null != l ? `${l.height}px` : ""));
}
var db = l(873727),
    dy = l(147248),
    dk = l(418842),
    dw = l(363195),
    dN = l(818023);
let dA = null;
var dS = l(602853),
    dC = l(517461),
    dE = l(487336);
function dI(e) {
    let { open: t, maxWidth: l, onWidthChange: n, children: a } = e,
        s = (0, dS.r)(L.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = i.useRef(null),
        [u, c] = (0, dC.V)("VibegrationsChatSidebarWidth", 460),
        [d, m] = i.useState(u ?? 460),
        f = (0, lu.clamp)(d, 360, l);
    i.useLayoutEffect(() => {
        n(t ? f + s : 0);
    }, [f, t, s, n]);
    let h = (0, uE.A)({
            minDimension: 360,
            maxDimension: l,
            resizableDomNodeRef: o,
            onElementResize: m,
            onElementResizeEnd: c,
            orientation: uE.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        g = i.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), h(e));
            },
            [h],
        );
    return (0, r.jsxs)("div", {
        className: dE.pz,
        hidden: !t,
        children: [
            (0, r.jsx)("div", { className: dE.Di, onPointerDown: g }),
            (0, r.jsx)("div", { ref: o, className: dE.kL, style: { width: f }, children: a }),
        ],
    });
}
var dM = l(541940);
function dT(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: n,
            previewApplicationId: a,
            surface: s,
            header: u,
            mainClassName: c,
            content: d,
            sidebar: f,
            onOpenPublishedApp: h,
            showsFrame: g,
        } = e,
        [x, p] = i.useState(null),
        v = (0, U.A)(n, s),
        j = v?.id ?? null;
    (!(function (e, t) {
        let l = (0, m.bG)([dw.A], () => (0, db.x4)(dw.A.theme)),
            n = (0, m.bG)([dy.A], () => dy.A.gradientPreset),
            {
                reducedMotion: a,
                fontScale: r,
                highContrast: s,
                forcedColors: o,
                underlineLinks: u,
            } = (0, m.cf)([im.Ay], () => ({
                reducedMotion: im.Ay.useReducedMotion,
                fontScale: (0, db.U0)(),
                highContrast: im.Ay.isHighContrastModeEnabled,
                forcedColors: im.Ay.useForcedColors,
                underlineLinks: im.Ay.alwaysShowLinkDecorations,
            })),
            c = V.hH.useSetting(),
            d = (0, dk.C)(),
            f = i.useRef(!1),
            h = i.useRef(!1),
            g = i.useRef(0),
            x = i.useRef(null),
            p = i.useCallback(() => {
                let n = (0, cC.o)(e, t);
                if (null == n) return;
                x.current = n;
                let i = {
                    revision: ++g.current,
                    baseTheme: l,
                    customTheme: (0, db.Lq)(),
                    uiDensity: d,
                    messageDisplayCompact: c,
                    fontScale: r,
                    reducedMotion: a,
                    highContrast: s,
                    forcedColors: o,
                    underlineLinks: u,
                };
                (0, cr.W)(n, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [l, o, r, t, s, c, e, a, d, u]),
            v = i.useRef(p);
        i.useLayoutEffect(() => {
            v.current = p;
        });
        let j = i.useCallback(() => {
            f.current ||
                ((f.current = !0),
                queueMicrotask(() => {
                    ((f.current = !1), h.current || v.current());
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
            }, [n, j]),
            i.useLayoutEffect(() => {
                (p(), j());
            }, [j, p]),
            i.useLayoutEffect(() => {
                let l = (0, cC.o)(e, t);
                null != l && l !== x.current && j();
            }),
            i.useEffect(() => {
                function l(l) {
                    l.target === (0, cC.o)(e, t) && ((x.current = null), j());
                }
                return (document.addEventListener("load", l, !0), () => document.removeEventListener("load", l, !0));
            }, [t, e, j]),
            i.useEffect(() => {
                let e = new MutationObserver(j);
                return (
                    e.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }),
                    e.observe(document.head, { childList: !0, subtree: !0, characterData: !0 }),
                    () => e.disconnect()
                );
            }, [j]));
    })(x, j),
        i.useEffect(() => {
            if (null != t) return (0, df.Ng)(t, () => (0, cC.o)(x, j));
        }, [t, x, j]));
    let b = i.useCallback(() => (0, cC.o)(x, j), [x, j]),
        y = i.useCallback(() => (g ? (0, cC.o)(x, j) : x), [g, x, j]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: o()(dM.Mh, c),
                children: [
                    u,
                    (0, r.jsx)(dd, {
                        projectId: t ?? null,
                        applicationId: n,
                        previewApplicationId: a,
                        resolveTarget: y,
                        frameId: j,
                        onOpenPublishedApp: h,
                    }),
                    (0, r.jsx)("div", { ref: p, className: dM.fm, children: d }),
                ],
            }),
            f,
            (0, r.jsx)(ch, {
                projectId: t ?? null,
                applicationId: n,
                previewApplicationId: a,
                resolveIframe: b,
                toggleRef: l,
            }),
        ],
    });
}
function d_(e) {
    let {
        projectId: t,
        designFeedbackToggleRef: l,
        applicationId: n,
        previewApplicationId: a,
        surface: s,
        header: u,
        chatOpen: c,
        onCloseChat: d,
        chatHeaderAction: f,
        onRestoreVersion: h,
        onImportProject: g,
        debugOpen: x = !1,
        onCloseDebug: p,
        restoreState: v,
        previewReady: j,
        previewGate: b,
        availability: y,
        activeMode: k,
        widgetApplicationId: w,
        overlayWidgetSize: N,
        onOpenPublishedApp: A = null,
    } = e;
    (0, dm.k)(t, w);
    let S = s.type === l2.U.MAIN || (0, tj.Q5)(s);
    !(function (e) {
        let { mobile: t, landscape: l } = (0, m.cf)([th.A], () => ({
            mobile: th.A.isBuilderPreviewMobile(),
            landscape: th.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let n;
            if (null != e) {
                if (t) ((n = l ? dN.aX.LANDSCAPE : dN.aX.PORTRAIT), (dA = e));
                else {
                    if (dA !== e) return;
                    ((n = dN.aX.UNHANDLED), (dA = null));
                }
                n_.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: n, applicationId: e });
            }
        }, [e, t, l]);
    })(S ? n : null);
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
            if (S) return ((0, eA.HV)(n), () => (0, eA.HV)(null));
        }, [n, S]),
        i.useEffect(() => {
            null != t &&
                ((0, en.Hc)(t),
                dp ||
                    ((dp = !0),
                    eb.Ay.addChangeListener(dv),
                    eS.Ay.addChangeListener(dv),
                    tT.A.addChangeListener(dv),
                    th.A.addChangeListener(dv),
                    (0, tx.W3)(dv),
                    dv()));
        }, [t]),
        i.useLayoutEffect(() => {
            let e = C.current;
            if (null == e) return;
            function t() {
                null != e && I(e.getBoundingClientRect().width);
            }
            t();
            let l = new ResizeObserver(t);
            return (l.observe(e), () => l.disconnect());
        }, []),
        i.useLayoutEffect(() => () => (0, eA.Zq)(0), []));
    let M = Math.max(360, E - 320),
        T = c || S;
    return (0, r.jsx)("div", {
        ref: C,
        className: dM.LB,
        children: (0, r.jsx)(dT, {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: n,
            previewApplicationId: a,
            surface: s,
            header: u,
            onOpenPublishedApp: A,
            showsFrame: (0, tv.yf)(y, k),
            mainClassName: null == u ? void 0 : o()(dM.ez, { [dM.zt]: c }),
            content: (0, r.jsx)(dl, {
                applicationId: n,
                previewApplicationId: a,
                surface: s,
                previewReady: j,
                previewGate: b,
                availability: y,
                activeMode: k,
                widgetApplicationId: w,
                overlayWidgetSize: N,
                frameOverlay: (0, r.jsx)(c_, { projectId: t, applicationId: n, previewApplicationId: a, surface: s }),
            }),
            sidebar:
                null != t && T
                    ? (0, r.jsx)(dI, {
                          open: c,
                          maxWidth: M,
                          onWidthChange: eA.Zq,
                          children: (0, r.jsx)("div", {
                              className: dM.cO,
                              children: x
                                  ? (0, r.jsx)(u6, { projectId: t, onClose: p ?? (() => {}) }, t)
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(ck.A, { projectId: t }),
                                            (0, r.jsx)(l3.Ay, {
                                                "aria-label": eu.intl.string(eu.t["/VQax8"]),
                                                toolbar: (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        f,
                                                        null == d
                                                            ? null
                                                            : (0, r.jsx)(l3.Ay.Icon, {
                                                                  icon: P.P,
                                                                  tooltip: eu.intl.string(eo.default.JD6Oit),
                                                                  onClick: d,
                                                              }),
                                                    ],
                                                }),
                                                children: (0, r.jsx)(l3.Ay.Title, {
                                                    children: eu.intl.string(eu.t["/VQax8"]),
                                                }),
                                            }),
                                            (0, r.jsx)("div", {
                                                className: dM.cb,
                                                children: (0, r.jsx)(
                                                    oe,
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
var dP = l(631417);
function dR(e) {
    let { title: t, actions: l, breadcrumb: n, project: a, onOpenProjectSettings: i } = e,
        s = eu.intl.string(eo.default.FzfmQ8);
    return (0, r.jsx)(H.A, {
        hideSearch: !0,
        toolbar: l,
        className: dP.wx,
        "aria-label": t,
        children: (0, r.jsxs)("div", {
            className: dP.QF,
            children: [
                (0, r.jsx)(R.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: L.A.colors.TEXT_STRONG,
                    className: dP.Kk,
                }),
                null != n
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(H.A.Title, { onClick: n.onClick, children: n.title }),
                              (0, r.jsx)(H.A.Caret, {}),
                          ],
                      })
                    : null,
                null != a && null != i
                    ? (0, r.jsx)(y.m, {
                          asContainer: !0,
                          text: s,
                          position: "bottom",
                          children: (0, r.jsx)(b.D, {
                              className: dP.FF,
                              onClick: i,
                              "aria-label": s,
                              children: (0, r.jsx)(lL.A, { project: a, size: "header" }),
                          }),
                      })
                    : null,
                (0, r.jsx)(H.A.Title, { className: dP.Qw, wrapperClassName: dP.DD, children: t }),
            ],
        }),
    });
}
var dL = l(683071);
let dD = "conjuring-help";
var d$ = l(173114);
function dF() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: l,
            } = (0, m.cf)([tW.default, J.A, lf.Ay, lh.A], () => {
                let e = tW.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of J.A.getGuildsArray()) {
                    if (!t.features.has(ev.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let l = lf.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, z.m1)(t, tW.default, lh.A) === dD;
                    });
                    if (null != l) return { isStaff: e, guildId: t.id, channelId: l.channel.id };
                }
                return { isStaff: e, guildId: null, channelId: null };
            });
            return e
                ? null != t && null != l
                    ? { kind: "channel", guildId: t, channelId: l }
                    : { kind: "url", url: "https://i.dis.gd/conjuring-access" }
                : null;
        })(),
        t = i.useCallback(() => {
            null != e &&
                ("channel" === e.kind
                    ? (0, B.pX)(ev.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, la.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, r.jsx)("div", {
              className: d$.l,
              children: (0, r.jsx)(dL.w, {
                  type: "info",
                  iconAlign: "center",
                  message: eu.intl.format(eo.default["6anmu1"], { channel: dD, onNavigate: t }),
                  role: "static",
              }),
          });
}
var dz = l(606128),
    dO = l(323140);
function dG(e) {
    return (0, r.jsx)(h.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function dU(e) {
    return (0, r.jsx)(g.u, { ...e, size: "custom", width: 20, height: 20 });
}
function dq(e) {
    return (0, r.jsx)(x.k, { ...e, size: "custom", width: 20, height: 20 });
}
function dH(e) {
    return (0, r.jsx)(p.H, { ...e, size: "custom", width: 20, height: 20 });
}
let dB = {
    showPublishBlocked: function (e) {
        (0, e9.openModal)((t) => (0, r.jsx)(lY, { ...t, reason: e }));
    },
    openPublishNotes: lZ.A,
    showError: (e) => (0, v.P0)((0, v.ox)(e, v.Ck.FAILURE)),
    openProfile: (e) => {
        (0, K.openUserProfileModal)({ userId: e });
    },
    openAutomodSettings: (e) => {
        Promise.resolve()
            .then(l.bind(l, 468689))
            .then((t) => {
                let { default: l } = t;
                return l.open(e, ev.BEX.GUILD_AUTOMOD);
            })
            .catch(() => {});
    },
};
function dK(e) {
    var t;
    let l,
        n,
        a,
        s,
        u,
        h,
        g,
        x,
        p,
        N,
        { project: A, guildId: S, onSelect: C, onRemix: E, shared: I = !1 } = e,
        M =
            ((l = A.id),
            (n = A.name),
            (a = i.useRef(!1)),
            (s = i.useCallback(() => {
                a.current ||
                    ((a.current = !0),
                    (0, v.P0)((0, v.ox)(eu.intl.formatToPlainString(eo.default.aN2JdD, { name: n }), v.Ck.MESSAGE)),
                    em(l, n)
                        .catch((e) => {
                            let t;
                            (console.error("[vibegrations] project export failed", l, e),
                                (0, v.P0)(
                                    (0, v.ox)(
                                        409 === (t = e instanceof en.xE ? e.status : null)
                                            ? eu.intl.string(eo.default["9oqbEw"])
                                            : 404 === t
                                              ? eu.intl.string(eo.default["0W8uLq"])
                                              : eu.intl.string(eo.default.N8753A),
                                        v.Ck.FAILURE,
                                    ),
                                ));
                        })
                        .finally(() => {
                            a.current = !1;
                        }));
            }, [l, n])),
            {
                onExport: s,
                onImport: (u = ef(
                    i.useCallback(
                        (e) => {
                            let t = ed(e);
                            null != t
                                ? (0, v.P0)((0, v.ox)(t, v.Ck.FAILURE))
                                : (0, f.A)({
                                      title: eu.intl.formatToPlainString(eo.default["Gm+u1+"], { name: n }),
                                      subtitle: eu.intl.string(eo.default.M7H3sJ),
                                      confirmText: eu.intl.string(eo.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, B.pX)(ev.BVt.CHANNEL(S, ej.VV.CONJURE, l));
                                          try {
                                              await ec(l, e, eu.intl.string(eo.default.Owerd3));
                                          } catch {
                                              (0, v.P0)((0, v.ox)(eu.intl.string(eo.default["Q+l4Hv"]), v.Ck.FAILURE));
                                          }
                                      },
                                  });
                        },
                        [l, n, S],
                    ),
                )).open,
                importInput: u.input,
            }),
        T =
            null == A.updated_at
                ? null
                : eu.intl.formatToPlainString(eo.default.AXydi3, { time: c()(A.updated_at).fromNow() }),
        _ = (0, tK.wu)(A),
        P =
            (0, m.bG)([J.A], () => (null == _ ? null : (J.A.getGuild(_)?.name ?? null)), [_]) ??
            eu.intl.string(eo.default["3QFps8"]),
        R = (0, m.bG)([eS.Ay], () => eS.Ay.isProjectDeleting(A.id), [A.id]),
        L =
            ((t = I ? A : null),
            (h = t?.id),
            (g = t?.owner_user_id),
            (x = (0, m.yK)(
                [eb.Ay],
                () =>
                    null == h
                        ? []
                        : [
                              ...new Set(
                                  eb.Ay.getMessages(h)
                                      .flatMap((e) => (null != e.user_id && e.user_id !== g ? [e.user_id] : []))
                                      .reverse(),
                              ),
                          ],
                [h, g],
            )),
            i.useEffect(() => {
                null != g && (t0(g), x.forEach(t0));
            }, [g, x]),
            (p = (0, m.bG)([tW.default], () => (null == g ? null : tW.default.getUser(g)), [g])),
            (N = (0, m.yK)([tW.default], () => x.map((e) => tW.default.getUser(e)).filter((e) => null != e), [x])),
            i.useMemo(
                () =>
                    null == p
                        ? null
                        : {
                              creator: p,
                              collaborators: N,
                              label: (function (e, t) {
                                  let l;
                                  return 0 === t.length
                                      ? eu.intl.formatToPlainString(eo.default.t5RWBS, { creator: e })
                                      : eu.intl.formatToPlainString(eo.default["b5uCe/"], {
                                            creator: e,
                                            collaborators:
                                                0 === (l = void 0 ?? t.length)
                                                    ? ""
                                                    : 1 === l
                                                      ? eu.intl.formatToPlainString(eu.t["8s9z8P"], { first: t[0] })
                                                      : 2 === l
                                                        ? eu.intl.formatToPlainString(eu.t["i0K/dw"], {
                                                              first: t[0],
                                                              second: t[1],
                                                          })
                                                        : 3 === l
                                                          ? eu.intl.formatToPlainString(eu.t["/KSOKY"], {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                            })
                                                          : eu.intl.formatToPlainString(eu.t.xpU76u, {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                                count: l - 3,
                                                            }),
                                        });
                              })(
                                  (0, tX.mG)(p),
                                  N.map((e) => (0, tX.mG)(e)),
                              ),
                          },
                [p, N],
            )),
        $ = i.useId(),
        F = (0, r.jsx)(j.E, { variant: "text-md/semibold", color: "text-strong", className: dO.j1, children: A.name }),
        z = (0, ey.oF)(A.id),
        O = {
            projectId: A.id,
            projectName: A.name,
            guildId: S,
            projectGuildId: A.guild_id,
            isOwner: (0, eS.PV)(A),
            canRemix: (0, eS.H_)(A),
            onRemix: E,
            onExport: M.onExport,
            onImport: M.onImport,
        };
    return (0, r.jsxs)("div", {
        className: o()(dO.OY, { [dO.Wy]: R }),
        "aria-busy": R,
        children: [
            (0, r.jsx)(te.Ay, { projectId: A.id }),
            null == z || R ? null : (0, r.jsx)("div", { className: dO.SB, "aria-hidden": !0 }),
            (0, r.jsxs)(b.D, {
                className: dO.W6,
                onClick: R ? void 0 : C,
                onContextMenu: function (e) {
                    R || (0, D.jA)(e, () => (0, r.jsx)(lP, { ...O, onCloseMenu: D.Z_ }));
                },
                tabIndex: R ? -1 : void 0,
                "aria-describedby": null != L ? $ : void 0,
                children: [
                    (0, r.jsx)(lL.A, { project: A, size: "card", className: dO.VJ }),
                    (0, r.jsxs)("div", {
                        className: dO.MM,
                        children: [
                            (0, r.jsxs)("div", {
                                className: dO.Ub,
                                children: [
                                    null != L ? (0, r.jsx)(y.m, { text: L.label, ariaHidden: !0, children: F }) : F,
                                    null == L || R ? null : (0, r.jsx)(lF, { creator: L, className: dO.rb }),
                                    z !== d.I.NEEDS_INPUT || R
                                        ? null
                                        : (0, r.jsxs)("div", {
                                              className: dO.fs,
                                              children: [
                                                  (0, r.jsx)(q.A, { mentionsCount: 1 }),
                                                  (0, r.jsx)(k.A, { children: eu.intl.string(eo.default.hfIuc7) }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: dO.h3,
                                children: [
                                    (0, r.jsx)(j.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: dO.Wb,
                                        children: R ? eu.intl.string(eo.default.Yh5pAc) : P,
                                    }),
                                    null == T || R
                                        ? null
                                        : (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)("span", {
                                                      className: dO.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, r.jsx)(j.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: dO.zM,
                                                      children: T,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            null != L ? (0, r.jsx)(k.A, { id: $, children: L.label }) : null,
            (0, r.jsx)("div", {
                className: dO.M2,
                children: R
                    ? (0, r.jsx)(w.y, { type: w.t.SPINNING_CIRCLE_SIMPLE })
                    : (0, r.jsxs)("div", {
                          className: dO.Pl,
                          children: [(0, r.jsx)(lR, { ...O, trigger: "iconButton" }), M.importInput],
                      }),
            }),
        ],
    });
}
function dV(e) {
    var t, n;
    let a,
        { project: s, projectsLoaded: u, onBack: c, guildId: d } = e,
        [h, g] = i.useState(!0),
        [x, p] = i.useState(!1),
        b = V.Q_.useSetting(),
        [k, w] = i.useState(null),
        [I, M] = i.useState(null),
        T = s?.id ?? null,
        _ = i.useRef(T),
        P = i.useRef(!0),
        R = i.useRef(!1),
        L = i.useRef(null);
    ((_.current = T),
        i.useEffect(
            () => (
                (P.current = !0),
                () => {
                    P.current = !1;
                }
            ),
            [],
        ));
    let D = (0, m.bG)([eS.Ay], () => (null == T ? null : eS.Ay.getIntegrationStatus(T)), [T]),
        { data: $, isLoading: q } = (0, F.YY)(s?.preview_application_id ?? void 0),
        K = null != T && I !== T,
        X = D?.preview_ready === !0,
        J = D?.has_activity === !0,
        {
            availability: Q,
            activeMode: Z,
            setMode: ee,
            frameSurface: et,
            frameSurfaceOptions: el,
            setFrameSurface: ea,
            widgetApplicationId: er,
        } = (function (e) {
            let {
                    applicationId: t,
                    previewApplicationId: l,
                    declaredActivity: n,
                    previewSupportedSurfaces: a,
                    installScope: r,
                    ownerAuthorizationRevoked: s,
                    mainCardOnly: o = !1,
                    supportsOverlay: u = !1,
                } = e,
                [c, d] = i.useState(null),
                [f, h] = i.useState(null),
                [g, x] = i.useState(t);
            g !== t && (x(t), d(null), h(null));
            let p = null != l && l === t ? l : null,
                v = (0, m.bG)([tC.default], () => tC.default.getId()),
                { applicationWidgetConfig: j } = (0, tN.A)(v, p ?? void 0),
                b = j?.surfaces,
                y = (0, tv.yZ)({
                    widgetTop: b?.[tw.m.WIDGET_TOP] != null,
                    widgetBottom: b?.[tw.m.WIDGET_BOTTOM] != null,
                    miniProfile: b?.[tw.m.MINI_PROFILE] != null,
                }),
                k = null != p && (o ? y.hasMainCard : y.hasAny),
                { data: w } = (0, F.YY)(l ?? void 0),
                N = null != l && w?.bot?.id != null,
                { data: A, isLoading: S } = (0, F.YY)(t ?? void 0),
                C = n || (0, tS.X)(A),
                E = null != t && S && null == A,
                I = (0, tv.P5)(a, {
                    legacy: { hasFrame: C, hasProfileWidget: k, hasBotDm: N },
                    widgetResolvable: null != p,
                    botDmResolvable: N,
                }),
                M = (0, tv.Xm)({ installScope: r, ...I, hasOverlay: u, ownerAuthorizationRevoked: s }),
                T = i.useMemo(() => (0, tE.hR)(a), [a]),
                _ = (0, tE.PH)(f, T);
            return (
                i.useEffect(() => {
                    if (null != t) for (let e of (0, tj.Mm)(t)) e.surface.type !== (0, tE.BR)(_) && (0, tA.r)(e.id);
                }, [t, _]),
                {
                    availability: M,
                    isResolving: E,
                    activeMode: E ? null : (0, tv.Qs)(c, M),
                    setMode: d,
                    frameSurface: _,
                    frameSurfaceOptions: T,
                    setFrameSurface: h,
                    widgetApplicationId: p,
                }
            );
        })({
            applicationId: s?.preview_application_id ?? null,
            previewApplicationId: s?.preview_application_id ?? null,
            declaredActivity: J,
            previewSupportedSurfaces: s?.preview_supported_surfaces,
            installScope: s?.install_scope ?? null,
            ownerAuthorizationRevoked: D?.owner_authorization_revoked === !0,
            supportsOverlay: s?.preview_supported_surfaces?.includes(Y.q7.OVERLAY) === !0,
        }),
        ei =
            ((t = (0, m.bG)(
                [eb.Ay],
                () =>
                    null == T
                        ? null
                        : (function (e) {
                              for (let t = e.length - 1; t >= 0; t--) {
                                  let l = e[t].proposal?.overlay_widget;
                                  if (null != l) return l;
                              }
                              return null;
                          })(eb.Ay.getMessages(T)),
                [T],
            )),
            null != (a = t?.default_size) &&
            Number.isFinite(a.width) &&
            Number.isFinite(a.height) &&
            a.width > 0 &&
            a.height > 0
                ? a
                : tg);
    (0, tp.x)(T, (e) => {
        Q.modes.includes(e) && ee(e);
    });
    let es = Q.modes.includes("frame"),
        em = i.useMemo(() => {
            var e;
            return (
                (e = Q.modes),
                e.flatMap((e) => ("frame" === e ? el.map((t) => ({ mode: e, surface: t })) : [{ mode: e }]))
            );
        }, [Q.modes, el]),
        eh = i.useCallback(
            (e) => {
                ("frame" === e.mode && ea(e.surface), ee(e.mode));
            },
            [ea, ee],
        ),
        eg = (0, tv.Qg)({
            installScope: s?.install_scope ?? null,
            previewReady: X,
            integrationInstalled: D?.integration_installed ?? null,
            botPermissionsChanged: D?.bot_permissions_changed === !0,
        }),
        ex = h && !x,
        ep = eu.intl.string(ex ? eo.default.JD6Oit : eo.default.xjJAQm),
        ey = i.useCallback(() => {
            if (x) {
                (p(!1), g(!0));
                return;
            }
            g((e) => !e);
        }, [x]),
        ek = i.useCallback(() => g(!1), []),
        { active: ew } = e8(T);
    i.useEffect(() => {
        null != T && ew && !es && e4(T);
    }, [T, ew, es]);
    let eN = i.useRef(null),
        eC = (0, tx.Zv)(T),
        eE = eu.intl.string(eC ? eo.default.Sme0T0 : ew ? eo.default.vn5Rzu : eo.default["cl/Jyl"]),
        eI = i.useCallback(() => {
            if (null != T) {
                let e;
                if (ew) return void e4(T);
                (p(!1), g(!0), (e = e2(T)).active || e3(T, { ...e, active: !0 }));
            }
        }, [T, ew]),
        eM = i.useCallback(() => {
            p((e) => !e && (g(!0), !0));
        }, []),
        eT = i.useCallback(() => p(!1), []),
        e_ = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (null == s || R.current) return;
                let n = s.id;
                function a() {
                    return P.current && _.current === n;
                }
                ((R.current = !0),
                    p(!1),
                    g(!0),
                    w({ entry: e, status: "restoring" }),
                    (0, en.oB)(n, e.sha)
                        .then(
                            async () => {
                                if (
                                    (l &&
                                        a() &&
                                        (0, v.P0)(
                                            (0, v.ox)(
                                                eu.intl.formatToPlainString(eo.default.Z4n6LX, {
                                                    title: (0, tt.T4)(e.subject).short,
                                                }),
                                                v.Ck.SUCCESS,
                                            ),
                                        ),
                                    null != t)
                                ) {
                                    let e = await (0, tl.c)(n, t);
                                    null != e && (0, v.P0)((0, v.ox)(e, v.Ck.FAILURE));
                                }
                                a() && w({ entry: e, status: "restored" });
                            },
                            (t) => {
                                a() &&
                                    (w({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", n, t),
                                    (0, v.P0)((0, v.ox)(eu.intl.string(eo.default["PSdo+w"]), v.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            a() && (R.current = !1);
                        }));
            },
            [s],
        ),
        eP = (0, m.bG)([th.A], () => th.A.isBuilderPreviewMobile()),
        eR = eu.intl.string(eP ? eo.default.tKGF0Q : eo.default.peqEOY),
        eL = i.useCallback(() => (0, eA.GG)(!eP), [eP]),
        eD = (0, m.bG)([th.A], () => th.A.isBuilderPreviewLandscape()),
        e$ = eu.intl.string(eD ? eo.default.tunI2l : eo.default.DoNdjA),
        eF = i.useCallback(() => (0, eA.Lw)(!eD), [eD]),
        ez = (0, tj.jS)(s),
        eO = i.useMemo(() => (0, tj.Op)(ez, et), [ez, et]),
        eG = (0, U.A)(s?.preview_application_id ?? null, eO),
        eU = (0, tz.x1)(eG) && eG.data.proxyTicketRefreshing,
        eq = i.useCallback(() => {
            null == eG || eU || G.A.refreshProxyTicket(eG.id);
        }, [eG, eU]),
        eH = i.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = eG?.id), (0, en.Bn)(e), (0, tA.r)(t)), c());
        }, [s, eG?.id, c]),
        eB = i.useCallback(() => {
            null != s && (g(!0), (0, en.dv)(s.id, eu.intl.string(eo.default.oU20rd)));
        }, [s]),
        eK = ef(
            i.useCallback(
                (e) => {
                    if (null == s) return;
                    let t = s.id,
                        l = ed(e);
                    null != l
                        ? (0, v.P0)((0, v.ox)(l, v.Ck.FAILURE))
                        : (0, f.A)({
                              title: eu.intl.formatToPlainString(eo.default["Gm+u1+"], { name: s.name }),
                              subtitle: eu.intl.string(eo.default.M7H3sJ),
                              confirmText: eu.intl.string(eo.default.gFHykw),
                              variant: "critical",
                              onConfirm: async () => {
                                  g(!0);
                                  try {
                                      await ec(t, e, eu.intl.string(eo.default.Owerd3));
                                  } catch {
                                      (0, v.P0)((0, v.ox)(eu.intl.string(eo.default["Q+l4Hv"]), v.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [s],
            ),
        ),
        eV = i.useCallback(() => {
            null != s && (0, l0.A)(s, d);
        }, [s, d]),
        eW = i.useCallback(async () => {
            if (null == T || _.current !== T) return;
            L.current?.abort();
            let e = new AbortController();
            ((L.current = e), M(null));
            try {
                await (0, eA.U1)(T, e.signal);
            } catch {
            } finally {
                e.signal.aborted || L.current !== e || _.current !== T || M(T);
            }
        }, [T]);
    i.useEffect(
        () => (
            eW(),
            () => {
                (L.current?.abort(), (L.current = null));
            }
        ),
        [eW],
    );
    let eX = (0, lJ.a)(s ?? null, D ?? null, d),
        eJ = ((n = s?.application_id ?? null), (0, m.bG)([lf.Ay], () => (null == n ? null : (0, lz.i8)(d, n)), [d, n])),
        eQ = i.useMemo(() => (null == eJ ? null : () => (0, B.pX)(ev.BVt.CHANNEL(d, eJ))), [d, eJ]),
        eY = i.useCallback(async () => {
            null != s && (await (0, lJ.$)(s, eX));
        }, [eX, s]),
        eZ = i.useCallback(async () => {
            try {
                await eY();
            } catch {}
            await eW();
        }, [eW, eY]),
        e0 = i.useMemo(() => {
            let e = s?.preview_application_id;
            return null == e || q || K
                ? null
                : {
                      ...(0, tB.i)({ applicationId: e, application: $ ?? null, guildId: eX }),
                      onClose: () => {
                          eZ();
                      },
                  };
        }, [K, eZ, eX, q, $, s?.preview_application_id]),
        e1 = (0, tv.JR)(Z, eg)
            ? { type: "permissions", authorizeProps: e0 }
            : K && null == D
              ? { type: "checking" }
              : void 0,
        e6 = (0, m.bG)([eS.Ay], () => null != T && eS.Ay.isProjectDeleting(T), [T]);
    i.useEffect(() => {
        ((null == s && u) || e6) && (0, B.bG)(ev.BVt.CHANNEL(d, ej.VV.CONJURE));
    }, [d, s, u, e6]);
    let e7 = i.useMemo(() => ({ guildId: d, platform: dB, busy: K || q }), [d, K, q]),
        e5 = (0, li.Ay)(T, e7),
        te = e5?.intent === "open" && "channel" === e5.destination ? e5.appChannelId : null,
        tn = (0, m.bG)([W.A], () => (null == te ? null : W.A.getChannel(te)), [te]),
        ta = (0, z.Ay)(tn),
        tr = (0, O.gU)(tn),
        ti =
            null != ta && null != tr
                ? eu.intl.format(eo.default.gR7PUV, {
                      channel: ta,
                      channelIconHook: (e, t) =>
                          (0, r.jsx)(tr, { size: "xs", color: "currentColor", className: dO.Y2 }, t),
                  })
                : e5?.label,
        ts = e5?.upToDate === !0 ? eu.intl.string(eo.default.X0kGp2) : (e5?.disabledReason ?? null),
        to =
            null == e5
                ? null
                : (0, r.jsx)("div", {
                      className: dO.As,
                      children: (0, r.jsx)(y.m, {
                          text: ts,
                          asContainer: !0,
                          children: (0, r.jsx)(N.$, {
                              size: "sm",
                              variant: e5.upToDate ? "secondary" : "primary",
                              loading: e5.publishing,
                              disabled: e5.disabled,
                              onClick: () => e5.run("header"),
                              text: ti,
                          }),
                      }),
                  }),
        tu = null == s ? void 0 : () => (0, ls.A)(s.id, { guildId: d, isPreview: !0, publishOptions: e7 }),
        tc = (0, r.jsx)(dR, {
            title: s?.name ?? eu.intl.string(eo.default.G1WwgK),
            breadcrumb: { title: eu.intl.string(eo.default.uk6jhJ), onClick: c },
            project: s,
            onOpenProjectSettings: tu,
            actions:
                null == s
                    ? null
                    : (0, r.jsxs)("div", {
                          className: dO.FO,
                          children: [
                              (0, r.jsx)(tH, {
                                  targets: em,
                                  target: null == Z ? null : "frame" === Z ? { mode: Z, surface: et } : { mode: Z },
                                  onChange: eh,
                              }),
                              es
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            "overlay" === Z
                                                ? null
                                                : (0, r.jsx)(H.A.Icon, {
                                                      icon: eP ? dq : dU,
                                                      tooltip: eR,
                                                      "aria-label": eR,
                                                      selected: eP,
                                                      onClick: eL,
                                                  }),
                                            eP && "overlay" !== Z
                                                ? (0, r.jsx)(H.A.Icon, {
                                                      icon: dH,
                                                      tooltip: e$,
                                                      "aria-label": e$,
                                                      selected: eD,
                                                      onClick: eF,
                                                  })
                                                : null,
                                            (0, r.jsx)(H.A.Icon, {
                                                ref: eN,
                                                icon: A.x,
                                                iconClassName: dO.D8,
                                                tooltip: eE,
                                                "aria-label": eE,
                                                selected: ew,
                                                disabled: eC,
                                                onClick: eI,
                                            }),
                                        ],
                                    })
                                  : null,
                              "frame" === Z ? (0, r.jsx)(tO, { frame: eG, controlProjectId: s.id }) : null,
                              (0, r.jsx)("div", { className: dO.YJ }),
                              b
                                  ? (0, r.jsx)(H.A.Icon, {
                                        icon: S.BugIcon,
                                        tooltip: eu.intl.string(eo.default.Mt5k9d),
                                        "aria-label": eu.intl.string(eo.default.Mt5k9d),
                                        selected: x,
                                        onClick: eM,
                                    })
                                  : null,
                              (0, r.jsx)(H.A.Icon, {
                                  icon: C.SettingsIcon,
                                  tooltip: eu.intl.string(eo.default.I2XSKe),
                                  "aria-label": eu.intl.string(eo.default.I2XSKe),
                                  onClick: tu,
                              }),
                              (0, r.jsx)(lR, {
                                  projectId: s.id,
                                  projectName: s.name,
                                  guildId: d,
                                  projectGuildId: s.guild_id,
                                  isOwner: (0, eS.PV)(s),
                                  canRemix: (0, eS.H_)(s),
                                  onRefresh: (0, tz.x1)(eG) ? eq : void 0,
                                  isRefreshing: eU,
                                  onClose: eH,
                                  onExport: eB,
                                  onImport: eK.open,
                                  onRemix: eV,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = s.id),
                                          void (0, e9.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  l.e("834460"),
                                                  l.e("960521"),
                                              ]).then(l.bind(l, 699760));
                                              return (l) => (0, r.jsx)(t, { ...l, projectId: e });
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
                                          void (0, e9.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  l.e("323079"),
                                                  l.e("437655"),
                                                  l.e("620019"),
                                                  l.e("586467"),
                                                  l.e("231782"),
                                                  l.e("551087"),
                                              ]).then(l.bind(l, 438834));
                                              return (l) => (0, r.jsx)(t, { ...l, ...e });
                                          })
                                      );
                                  },
                                  refreshApplicationId:
                                      Q.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== Q.profileState
                                          ? er
                                          : null,
                                  previewProjectId: s.id,
                              }),
                              ex
                                  ? null
                                  : (0, r.jsx)(H.A.Icon, { icon: dG, tooltip: ep, "aria-label": ep, onClick: ey }),
                          ],
                      }),
        });
    return (0, r.jsxs)("div", {
        className: o()(dO.nj, dz.T),
        children: [
            eK.input,
            (0, r.jsx)("main", {
                className: dO.JX,
                children:
                    null == s
                        ? (0, r.jsxs)("div", {
                              className: dO.j5,
                              children: [
                                  tc,
                                  (0, r.jsxs)("div", {
                                      className: dO.sD,
                                      children: [
                                          (0, r.jsx)(E.D, {
                                              variant: "heading-lg/semibold",
                                              children: eu.intl.string(eo.default.G1WwgK),
                                          }),
                                          (0, r.jsx)(j.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: eu.intl.string(eo.default.fINulo),
                                          }),
                                          (0, r.jsx)(N.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: eu.intl.string(eo.default["WFJ/vb"]),
                                              onClick: () => (0, eA.hF)(d),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, r.jsx)(li.bI.Provider, {
                              value: e7,
                              children: (0, r.jsx)(
                                  d_,
                                  {
                                      projectId: s.id,
                                      designFeedbackToggleRef: eN,
                                      applicationId: s.preview_application_id,
                                      previewApplicationId: s.preview_application_id,
                                      surface: eO,
                                      header: tc,
                                      chatOpen: h,
                                      onCloseChat: ek,
                                      chatHeaderAction: to,
                                      debugOpen: b && x,
                                      onCloseDebug: eT,
                                      onRestoreVersion: e_,
                                      onImportProject: (0, eS.PV)(s) ? eK.open : void 0,
                                      restoreState: k,
                                      previewReady: X,
                                      previewGate: e1,
                                      availability: Q,
                                      activeMode: Z,
                                      widgetApplicationId: er,
                                      overlayWidgetSize: ei,
                                      onOpenPublishedApp: eQ,
                                  },
                                  s.id,
                              ),
                          }),
            }),
        ],
    });
}
function dW(e) {
    let {
            projects: t,
            idea: n,
            guildId: a,
            submitting: s,
            createError: u,
            createDisabled: c,
            conjureTarget: d,
            onConjureTargetChange: f,
            eligibleGuilds: h,
            modelSettings: g,
            onModelSettingsChange: x,
            onSelectProject: p,
            onIdeaChange: b,
            onCreate: y,
            onCreateFromTemplate: k,
            onStartTemplate: A,
            onSubmitTemplate: S,
            onCancelTemplate: C,
            onSkipTemplate: E,
            onImportNewProject: D,
            importing: $,
        } = e,
        [F, z] = i.useState(() => ({ guildId: a, filter: lq(a) })),
        O = (F.guildId === a ? F.filter : lq(a)) ?? a,
        G = i.useCallback(
            (e) => {
                (lU.set(a, e), z({ guildId: a, filter: e }));
            },
            [a],
        ),
        U = (0, m.yK)(
            [J.A],
            () =>
                (function (e, t) {
                    let l = new Set([t]);
                    for (let t of e)
                        (null != t.guild_id && l.add(t.guild_id),
                            null != t.preview_guild_id && l.add(t.preview_guild_id));
                    let n = [];
                    for (let e of l) {
                        let t = J.A.getGuild(e);
                        null != t && n.push(t);
                    }
                    return n.sort((e, t) => e.name.localeCompare(t.name));
                })(t, a),
            [t, a],
        ),
        q = i.useMemo(
            () => [
                { id: "conjure-filter-all", value: "all", leading: R.D, label: eu.intl.string(eo.default["Xi/oIC"]) },
                {
                    id: "conjure-filter-user",
                    value: lO,
                    leading: eh.UserIcon,
                    label: eu.intl.string(eo.default.kCSgmG),
                },
                {
                    id: "conjure-filter-no-server",
                    value: lG,
                    leading: eg.R,
                    label: eu.intl.string(eo.default["3QFps8"]),
                },
                ...U.map((e) => ({
                    id: `conjure-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, r.jsx)(eq.Ay, { guild: e, size: eq.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [U],
        ),
        B = (0, m.yK)(
            [eS.Ay, J.A],
            () => {
                let e = lH(O);
                if (null != e) return eS.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(J.A.getGuilds()))
                    eS.Ay.hasFetchedGuildProjects(e.id) && t.push(...eS.Ay.getSharedProjects(e.id));
                return t;
            },
            [O],
        );
    i.useEffect(() => {
        let e = lH(O);
        null == e || eS.Ay.hasFetchedGuildProjects(e) || (0, eA.hF)(e);
    }, [O]);
    let K = i.useMemo(
            () =>
                B.filter((e) => lB(e, O)).sort((e, t) =>
                    null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                ),
            [B, O],
        ),
        V = i.useMemo(
            () => [
                {
                    label: eu.intl.string(eo.default.NyVn6T),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: eH,
                            label: eu.intl.string(eo.default.UPLaGM),
                            leading: eh.UserIcon,
                        },
                        ...h.map((e) => ({
                            id: `conjure-target-${e.id}`,
                            value: e.id,
                            label: e.name,
                            leading: (0, r.jsx)(eq.Ay, { guild: e, size: eq.Ay.Sizes.MINI, active: !0 }),
                        })),
                    ],
                },
            ],
            [h],
        ),
        W = i.useMemo(
            () =>
                t
                    .filter((e) => lB(e, O))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, O],
        ),
        X = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, lz.Ot)(e, a)
                    ? p(e.id)
                    : (0, v.P0)((0, v.ox)(eu.intl.string(eo.default["XUl/cs"]), v.Ck.MESSAGE));
            },
            [a, p],
        ),
        Q = eu.intl.string(eo.default.ab1sMf),
        Z = [
            eu.intl.string(eo.default["9w+Chc"]),
            eu.intl.string(eo.default.WAvmdq),
            eu.intl.string(eo.default.SKsrzl),
        ],
        ee = [
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
        et = i.useCallback(
            (e) => {
                if (null != e.wizard) {
                    var t;
                    return void ((t = {
                        template: e,
                        guildId: a,
                        eligibleGuilds: h,
                        onStart: (t) => A(e.name, t),
                        onSubmit: (t, l, n) => S(e, t, l, n),
                        onCancel: C,
                        onSkip: E,
                    }),
                    (0, e9.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([l.e("881965"), l.e("166781")]).then(
                                l.bind(l, 790028),
                            );
                            return (l) => (0, r.jsx)(e, { ...l, ...t });
                        },
                        { modalKey: "ConjureTemplateWizardModal" },
                    ));
                }
                k(e);
            },
            [h, a, C, k, E, A, S],
        ),
        el = eu.intl.string(eo.default.zzYLlW),
        en =
            (i.useEffect(() => {
                (0, eA.b8)();
            }, []),
            (0, m.bG)([eS.Ay], () => {
                let e = eS.Ay.getMaxProjects();
                return null != e && eS.Ay.hasFetchedOwnedProjects()
                    ? Math.max(0, e - eS.Ay.getOwnedProjects().length)
                    : null;
            })),
        ea = eu.intl.string(eo.default["2XcV3x"]),
        er = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), c || y());
            },
            [c, y],
        ),
        ei = lH(O) ?? a,
        es = (0, m.bG)([eS.Ay], () => eS.Ay.getGuildProjectsFetchState(ei), [ei]),
        ec = (0, m.bG)([eS.Ay], () => eS.Ay.getGuildProjectsFetchState(a), [a]),
        [ed, em] = i.useState(lW),
        ef = i.useMemo(() => lK.w.get(lX(a)) ?? !1, [a]),
        ex = "success" === ec,
        ev = (0, m.yK)([eS.Ay], () => eS.Ay.getSharedProjects(a), [a]).length > 0 || t.some((e) => lB(e, a)),
        ej = ed ?? (!!ev || "error" === ec || (!ex && ef));
    i.useEffect(() => {
        ex && lK.w.set(lX(a), ev);
    }, [ex, ev, a]);
    let eb = i.useCallback((e) => {
            (lK.w.set(lV, e), em(e));
        }, []),
        ey = i.useCallback(() => eb(!ej), [eb, ej]),
        ek = i.useCallback(() => eb(!1), [eb]),
        eN = eu.intl.string(eo.default.kar7jh),
        eE = ej ? eN : eu.intl.string(eo.default.WSc5Y2);
    return (0, r.jsx)("div", {
        className: o()(dO.nj, dO.a0, dz.T),
        children: (0, r.jsxs)("div", {
            className: dO.Yo,
            children: [
                (0, r.jsxs)("main", {
                    className: dO.ps,
                    children: [
                        (0, r.jsx)(dR, {
                            title: eu.intl.string(eo.default.uk6jhJ),
                            actions: (0, r.jsx)(H.A.Icon, {
                                icon: I.Z,
                                tooltip: eE,
                                "aria-label": eE,
                                selected: ej,
                                onClick: ey,
                            }),
                        }),
                        (0, r.jsx)(M.Ip, {
                            className: dO.Yy,
                            children: (0, r.jsx)("div", {
                                className: dO.Mo,
                                children: (0, r.jsxs)("section", {
                                    className: o()(dO.Qs, dO.Ix),
                                    children: [
                                        (0, r.jsx)(dF, {}),
                                        (0, r.jsx)(eU, {}),
                                        (0, r.jsxs)("section", {
                                            className: dO.WI,
                                            "aria-label": el,
                                            children: [
                                                (0, r.jsxs)("div", {
                                                    className: dO.G9,
                                                    children: [
                                                        (0, r.jsx)(j.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: el,
                                                        }),
                                                        (0, r.jsx)(j.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: eu.intl.string(eo.default["N88+Ld"]),
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsx)(e_, {
                                                    listClassName: dO.Aw,
                                                    radius: eM,
                                                    children: ee.map((e) =>
                                                        (0, r.jsx)(
                                                            "li",
                                                            {
                                                                className: dO.EA,
                                                                children: (0, r.jsxs)(eC, {
                                                                    disabled: s,
                                                                    ariaLabel: eu.intl.formatToPlainString(
                                                                        eo.default.jGyR6p,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: o()(dO.nx, dO.rz),
                                                                    onClick: () => et(e),
                                                                    children: [
                                                                        (0, r.jsx)(j.E, {
                                                                            className: dO.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, r.jsx)(j.E, {
                                                                            className: dO.BK,
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
                                            className: dO.WI,
                                            "aria-label": ea,
                                            children: [
                                                (0, r.jsxs)("div", {
                                                    className: dO.G9,
                                                    children: [
                                                        (0, r.jsx)(j.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: ea,
                                                        }),
                                                        (0, r.jsx)(j.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: eu.intl.string(eo.default.JnJOAn),
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsx)(e_, {
                                                    listClassName: dO.Aw,
                                                    radius: eT,
                                                    children: Z.map((e) =>
                                                        (0, r.jsx)(
                                                            "li",
                                                            {
                                                                className: dO.EA,
                                                                children: (0, r.jsx)(eC, {
                                                                    disabled: s,
                                                                    className: dO.nx,
                                                                    onClick: () => y(e),
                                                                    children: (0, r.jsx)(j.E, {
                                                                        variant: "text-md/semibold",
                                                                        color: "text-strong",
                                                                        className: dO.un,
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
                        (0, r.jsx)("div", {
                            className: dO.Yl,
                            children: (0, r.jsxs)("div", {
                                className: o()(dO.Qs, dO.DA),
                                children: [
                                    (0, r.jsx)(T.f, {
                                        label: Q,
                                        hideLabel: !0,
                                        rows: 3,
                                        value: n,
                                        placeholder: Q,
                                        error: u,
                                        onChange: b,
                                        onKeyDown: er,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: dO.VP,
                                        children: [
                                            (0, r.jsx)("div", {
                                                className: dO.gH,
                                                children: (0, r.jsx)(_.l, {
                                                    selectionMode: "single",
                                                    label: eu.intl.string(eo.default.NyVn6T),
                                                    hideLabel: !0,
                                                    placeholder: eu.intl.string(eo.default.NyVn6T),
                                                    options: V,
                                                    value: d,
                                                    onSelectionChange: f,
                                                    disabled: s,
                                                }),
                                            }),
                                            null != en
                                                ? (0, r.jsx)(j.E, {
                                                      variant: "text-sm/medium",
                                                      color: 0 === en ? "text-feedback-warning" : "text-subtle",
                                                      children:
                                                          0 === en
                                                              ? eu.intl.string(eo.default.s28pGG)
                                                              : eu.intl.formatToPlainString(eo.default.Wy5aK4, {
                                                                    count: en,
                                                                }),
                                                  })
                                                : null,
                                            (0, r.jsx)(tf, {
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
                                                onChange: x,
                                            }),
                                            (0, r.jsx)(N.$, {
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
                (0, r.jsxs)("aside", {
                    className: dO.pA,
                    hidden: !ej,
                    "aria-label": eu.intl.string(eo.default.dWgSAa),
                    children: [
                        (0, r.jsxs)("div", {
                            className: dO.IR,
                            children: [
                                (0, r.jsx)(j.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: dO.RM,
                                    children: eu.intl.string(eo.default.dWgSAa),
                                }),
                                (0, r.jsxs)("div", {
                                    className: dO.Ss,
                                    children: [
                                        (0, r.jsx)(ep, { importing: $, onImport: D }),
                                        (0, r.jsx)(H.A.Icon, { icon: P.P, tooltip: eN, "aria-label": eN, onClick: ek }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsxs)(M.Ip, {
                            className: dO.xe,
                            children: [
                                (0, r.jsx)("div", {
                                    className: dO.Vw,
                                    children: (0, r.jsx)(_.l, {
                                        selectionMode: "single",
                                        label: eu.intl.string(eo.default.U6TqU9),
                                        hideLabel: !0,
                                        options: q,
                                        value: O,
                                        onSelectionChange: G,
                                    }),
                                }),
                                (0, r.jsx)(j.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: dO.wE,
                                    children: eu.intl.string(eo.default.JQpNkh),
                                }),
                                ("unattempted" === es || "loading" === es) && 0 === W.length
                                    ? (0, r.jsx)("div", { className: dO.E8, children: (0, r.jsx)(w.y, {}) })
                                    : "error" === es && 0 === W.length
                                      ? (0, r.jsxs)("div", {
                                            className: dO.E8,
                                            children: [
                                                (0, r.jsx)(j.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: dO.JS,
                                                    children: eu.intl.string(eo.default.DJAPMO),
                                                }),
                                                (0, r.jsx)(N.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: eu.intl.string(eo.default["WFJ/vb"]),
                                                    onClick: () => (0, eA.hF)(ei),
                                                }),
                                            ],
                                        })
                                      : 0 === W.length
                                        ? (0, r.jsx)("div", {
                                              className: dO.D1,
                                              children: (0, r.jsxs)("div", {
                                                  className: dO.ST,
                                                  children: [
                                                      (0, r.jsx)(R.D, { size: "lg", color: L.A.colors.TEXT_SUBTLE }),
                                                      (0, r.jsx)(j.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: dO.sI,
                                                          children: eu.intl.string(eo.default["9/5sLV"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, r.jsx)("div", {
                                              className: dO.Dq,
                                              children: W.map((e) =>
                                                  (0, r.jsx)(
                                                      dK,
                                                      {
                                                          project: e,
                                                          guildId: a,
                                                          onSelect: () => X(e),
                                                          onRemix: () => (0, l0.A)(e, a),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          }),
                                K.length > 0
                                    ? (0, r.jsxs)("div", {
                                          className: dO.qx,
                                          children: [
                                              (0, r.jsxs)("div", {
                                                  className: dO.uc,
                                                  children: [
                                                      (0, r.jsx)(j.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-strong",
                                                          children: eu.intl.string(eo.default["wFi8+o"]),
                                                      }),
                                                      (0, r.jsx)(j.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          children: eu.intl.string(eo.default.dQ3U1J),
                                                      }),
                                                  ],
                                              }),
                                              (0, r.jsx)("div", {
                                                  className: dO.Dq,
                                                  children: K.map((e) =>
                                                      (0, r.jsx)(
                                                          dK,
                                                          {
                                                              project: e,
                                                              guildId: a,
                                                              onSelect: () => X(e),
                                                              onRemix: () => (0, l0.A)(e, a),
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
function dX(e) {
    let t,
        { guildId: l, projectId: n } = e,
        a = (0, m.yK)([eS.Ay], () => eS.Ay.getOwnedProjects()),
        s = (0, m.yK)([X.Ay], () => X.Ay.getSelfMember(l)?.roles ?? [], [l]),
        o = (0, m.bG)(
            [J.A, Q.A],
            () => {
                let e = J.A.getGuild(l);
                return null != e && Q.A.can(ev.xBc.MANAGE_GUILD, e);
            },
            [l],
        ),
        [u, c] = i.useState(""),
        d = n ?? null,
        [f, h] = i.useState(!1),
        [g, x] = i.useState(null),
        p = (0, t1.z9)("VibegrationsScreen"),
        [j, b] = i.useState(null),
        y = (0, $.o)().get(tV.f_) === eH;
    i.useEffect(() => {
        b(null);
    }, [l, y]);
    let k = i.useMemo(() => (!y && p.some((e) => e.id === l) ? l : eH), [p, l, y]),
        w = j ?? k,
        N = w === eH ? "user" : "guild",
        A = w === eH ? l : w,
        [S, C] = i.useState(null);
    (i.useEffect(() => {
        (0, eA.hF)(l);
    }, [l, s, o]),
        i.useEffect(() => {
            (0, eA.dm)(l, d);
        }, [l, d]));
    let E = i.useCallback(
            async (e, t, l) => {
                let n = await (0, eA.gA)({ guild_id: t, install_scope: l });
                ((0, en.Hc)(n),
                    (0, en.r2)(n, S ?? Y.A4),
                    e(n),
                    (0, B.pX)(ev.BVt.CHANNEL(t, ej.VV.CONJURE, n)),
                    c(""),
                    C(null));
            },
            [S],
        ),
        I = i.useCallback(
            async (e) => {
                let t = (e ?? u).trim(),
                    l = eN({ idea: t, installScope: N, submitting: f });
                if ("idea" !== l && "submitting" !== l) {
                    (null != e && c(e), h(!0), x(null));
                    try {
                        await E((e) => (0, en.dv)(e, t), A, N);
                    } catch (e) {
                        x((0, ek.mG)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [E, N, A, u, f],
        ),
        M = i.useCallback(
            async (e) => {
                if (!f) {
                    (h(!0), x(null));
                    try {
                        await E(
                            (t) => {
                                var l;
                                (0, en.dv)(
                                    t,
                                    ((l = e.name),
                                    eu.intl.formatToPlainString(eo.default["0PQip6"], { templateName: l })),
                                    void 0,
                                    { templateId: e.id },
                                );
                            },
                            A,
                            N,
                        );
                    } catch (e) {
                        x((0, ek.mG)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [E, N, A, f],
        ),
        T = i.useCallback(
            async (e, t) => {
                let l = await (0, eA.gA)({ guild_id: t, install_scope: "guild" });
                return ((0, en.Hc)(l), (0, en.r2)(l, S ?? Y.A4), (0, en.dv)(l, (0, l1.Wl)(e)), l);
            },
            [S],
        ),
        _ = i.useCallback(async (e, t, l, n) => {
            if (eS.Ay.getProject(t)?.guild_id !== l) {
                let e = await (0, eA.M7)(t, { guild_id: l, preview_guild_id: l });
                if (!e.ok) throw new ek.DS((0, ek.hj)(e), e.status);
            }
            ((0, en.dv)(t, n, void 0, { templateId: e.id }), (0, B.pX)(ev.BVt.CHANNEL(l, ej.VV.CONJURE, t)), C(null));
        }, []),
        P = i.useCallback((e) => {
            (0, eA.xx)(e).catch(() => void 0);
        }, []),
        R = i.useCallback(
            (e) => {
                let t = eS.Ay.getProject(e)?.guild_id ?? l;
                ((0, B.pX)(ev.BVt.CHANNEL(t, ej.VV.CONJURE, e)), C(null));
            },
            [l],
        ),
        [L, D] = i.useState(!1),
        F = i.useCallback(
            async (e, t) => {
                let n = ed(e);
                if (null != n) return void (0, v.P0)((0, v.ox)(n, v.Ck.FAILURE));
                D(!0);
                let a = null;
                try {
                    ((a = await (0, eA.gA)({ guild_id: l, install_scope: t })),
                        (0, en.Hc)(a),
                        (0, en.r2)(a, S ?? Y.A4),
                        await ec(a, e, eu.intl.string(eo.default["LUc7/5"])),
                        (0, B.pX)(ev.BVt.CHANNEL(l, ej.VV.CONJURE, a)),
                        C(null));
                } catch {
                    (null != a && (await (0, eA.xx)(a).catch(() => void 0)),
                        (0, v.P0)((0, v.ox)(eu.intl.string(eo.default["Q+l4Hv"]), v.Ck.FAILURE)));
                } finally {
                    D(!1);
                }
            },
            [l, S],
        ),
        z = i.useCallback(
            (e) => {
                (0, B.pX)(ev.BVt.CHANNEL(l, ej.VV.CONJURE, e));
            },
            [l],
        ),
        O = i.useCallback(() => {
            (0, B.pX)(ev.BVt.CHANNEL(l, ej.VV.CONJURE));
        }, [l]),
        G = i.useCallback((e) => {
            (c(e), x(null));
        }, []),
        U = (0, m.bG)(
            [eS.Ay],
            () => {
                if (null == d) return null;
                let e = eS.Ay.getProject(d);
                return null == e || (0, eS.PV)(e) || e.guild_id === l ? e : null;
            },
            [d, l],
        ),
        q = (0, m.bG)([eS.Ay], () => eS.Ay.hasFetchedGuildProjects(l), [l]);
    return null != d
        ? (0, r.jsx)(dV, { project: U, projectsLoaded: q, onBack: O, guildId: l }, d)
        : (0, r.jsx)(dW, {
              projects: a,
              modelSettings: S,
              onModelSettingsChange: C,
              idea: u,
              guildId: l,
              submitting: f,
              createError: g,
              createDisabled: "idea" === (t = eN({ idea: u, installScope: N, submitting: f })) || "submitting" === t,
              onSelectProject: z,
              onIdeaChange: G,
              onCreate: I,
              onCreateFromTemplate: M,
              onStartTemplate: T,
              onSubmitTemplate: _,
              onCancelTemplate: P,
              onSkipTemplate: R,
              onImportNewProject: F,
              importing: L,
              conjureTarget: w,
              onConjureTargetChange: b,
              eligibleGuilds: p,
          });
}
