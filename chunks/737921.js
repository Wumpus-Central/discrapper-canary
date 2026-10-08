(l.r(t), l.d(t, { default: () => dQ }), l(321073));
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
    v = l(739187),
    j = l(857250),
    b = l(97483),
    y = l(834730),
    k = l(939249),
    w = l(866665),
    N = l(140735),
    A = l(289873),
    S = l(821609),
    C = l(604525),
    E = l(92446),
    I = l(625903),
    M = l(297264),
    T = l(97893),
    _ = l(364522),
    P = l(103557),
    R = l(691885),
    L = l(789645),
    D = l(152367),
    $ = l(661531),
    F = l(442433),
    z = l(458518),
    O = l(627363),
    G = l(47167),
    U = l(713654),
    q = l(625180),
    H = l(672929),
    B = l(775946),
    K = l(742589),
    V = l(976860),
    W = l(402860),
    X = l(885386),
    J = l(734057),
    Q = l(696451),
    Y = l(71393),
    Z = l(576705),
    ee = l(164892),
    et = l(922016),
    el = l(980707),
    en = l(477782),
    ea = l(81369),
    er = l(712808);
(l(323874), l(14289), l(35956));
var ei = l(77729),
    es = l(723702),
    eo = l(264572).Buffer;
async function eu(e, t) {
    if (es.isPlatformEmbedded) {
        let l = eo.from(await e.arrayBuffer());
        if ("function" == typeof ei.A.fileManager.saveWithDialog2) await ei.A.fileManager.saveWithDialog2(l, t);
        else
            try {
                await ei.A.fileManager.saveWithDialog(l, t);
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
var ec = l(248675),
    ed = l(660183);
async function em(e, t, l) {
    (0, er.Hc)(e);
    let n = await (0, er.vX)(e, t);
    (0, er.dv)(e, l, [n]);
}
function ef(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, ee.Oq)(e.size, t)
        ? null
        : ed.intl.formatToPlainString(ec.default.ThxcOX, { size: (0, ee.sM)((0, ee.Ju)(t)) });
}
async function eh(e, t) {
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
        a = await (0, er.cS)(e, n);
    await eu(a, n);
}
function eg(e) {
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
var ex = l(950305),
    ep = l(664121);
let ev = [
    { value: "user", icon: ex.UserIcon, nameMessage: ec.default.s1TsXl },
    { value: "guild", icon: ep.R, nameMessage: ec.default.LlLIJw },
];
function ej(e) {
    let { importing: t, onImport: l } = e,
        n = i.useRef(null),
        a = eg(i.useCallback((e) => l(e, "user"), [l])),
        s = eg(i.useCallback((e) => l(e, "guild"), [l])),
        o = { user: a.open, guild: s.open };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(et.Y, {
                targetElementRef: n,
                position: "bottom",
                align: "right",
                animation: et.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsx)(el.W, {
                        "data-menu-migrated": !0,
                        navId: "conjure-import-scope",
                        "aria-label": ed.intl.string(ec.default.soVyD1),
                        onClose: t,
                        onSelect: t,
                        children: (0, r.jsx)(en.rX, {
                            label: ed.intl.string(ec.default.NyVn6T),
                            children: ev
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: ed.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, r.jsx)(
                                        en.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: o[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, l) => {
                    let { isShown: a } = l;
                    return (0, r.jsx)(S.$, {
                        ...e,
                        buttonRef: n,
                        variant: "secondary",
                        size: "sm",
                        icon: ea.H,
                        text: ed.intl.string(ec.default.NJGZA3),
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
var eb = l(652215),
    ey = l(746080),
    ek = l(245179),
    ew = l(404373),
    eN = l(639519),
    eA = l(361504);
function eS(e) {
    let { idea: t, installScope: l, submitting: n } = e;
    return n ? "submitting" : "" === t.trim() ? "idea" : null == l ? "scope" : null;
}
var eC = l(371169),
    eE = l(260498);
function eI(e) {
    let { className: t, ariaLabel: l, disabled: n, onClick: a, children: i } = e;
    return (0, r.jsx)(k.D, { "aria-disabled": n, "aria-label": l, className: t, onClick: n ? void 0 : a, children: i });
}
var eM = l(865665),
    eT = l(373913);
let e_ = { x: 5, y: 7 },
    eP = { x: 5, y: 4 };
function eR(e) {
    let { listClassName: t, radius: l, children: n } = e,
        [a, s] = i.useState(!1);
    return (0, r.jsxs)("div", {
        className: eT.n,
        onMouseEnter: () => s(!0),
        onMouseLeave: () => s(!1),
        children: [
            (0, r.jsx)("ol", { className: t, children: n }),
            a ? (0, r.jsx)(eM.C, { area: 64, radius: l, color: $.A.colors.TEXT_BRAND }) : null,
        ],
    });
}
var eL = l(864970),
    eD = l(707554),
    e$ = l(770178),
    eF = l(765548),
    ez = l(595528),
    eO = l(885576),
    eG = l(662429);
let eU = "heading-xxl/semibold",
    eq = !1;
function eH() {
    let e = i.useRef(null),
        [t, l] = i.useState(!0),
        n = (0, eF.A)((e) => {
            l(e.target.clientWidth >= 500);
        }),
        a = (0, e$.w)(n, [], { fireOnMount: !0 }),
        s = (0, m.bG)([ez.A], () => ez.A.isConnected());
    i.useEffect(() => {
        if (!s || !t || eq) return;
        let l = !1,
            n = 0;
        function a() {
            l ||
                (n = window.setTimeout(() => {
                    ((eq = !0), e.current?.play());
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
    let o = (0, m.bG)([eO.A], () => eO.A.isIdle()),
        u = i.useRef(o);
    i.useEffect(() => {
        let t = u.current && !o;
        ((u.current = o), t && eq && (e.current?.stop(), e.current?.play()));
    }, [o]);
    let c = ed.intl.string(ec.default["+5XyCR"]);
    return (0, r.jsx)("div", {
        ref: a,
        className: eG.x,
        children: t
            ? (0, r.jsx)(eD.H, { children: (0, r.jsx)(eL.o, { ref: e, text: c, variant: eU, delay: null }) })
            : (0, r.jsx)(M.D, { variant: eU, children: c }),
    });
}
var eB = l(548118);
let eK = "user",
    eV = Object.freeze({ x: 0.5, y: 0.5 });
function eW(e) {
    return "" !== e.trim();
}
function eX(e) {
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
function eJ(e) {
    let { kind: t, name: l } = eX(e);
    return [t, l].filter((e) => "" !== e).join(" ");
}
function eQ(e) {
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
let eY = "[vibegrations:selected] ",
    eZ = " \u2014 ";
function e0(e) {
    if (!e.startsWith(eY)) return null;
    let t = e.indexOf("\n"),
        l = -1 === t ? e : e.slice(0, t),
        n = -1 === t ? "" : e.slice(t + 1),
        a = l.slice(eY.length),
        r = a.indexOf(eZ),
        i = (-1 === r ? a : a.slice(0, r)).trim();
    return "" === i ? null : { label: i, body: n };
}
let e1 = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    e2 = new Map(),
    e3 = new Set();
function e4(e) {
    return e2.get(e) ?? e1;
}
function e6(e, t) {
    for (let l of (t.active || 0 !== t.annotations.length ? e2.set(e, t) : e2.delete(e), [...e3]))
        try {
            l();
        } catch (e) {
            console.error("[vibegrations] design feedback subscriber threw", e);
        }
}
function e7(e) {
    e2.has(e) && e6(e, e1);
}
function e5(e, t) {
    let l = e4(e);
    l.active && e6(e, { ...l, context: t });
}
function e8(e, t) {
    return null != t && e.authorId === t;
}
function e9(e) {
    return (
        e3.add(e),
        () => {
            e3.delete(e);
        }
    );
}
function te(e) {
    let t = i.useCallback(() => (null == e ? e1 : e4(e)), [e]);
    return i.useSyncExternalStore(e9, t, t);
}
var tt = l(192308),
    tl = l(855793),
    tn = l(128761),
    ta = l(967008),
    tr = l(900797),
    ti = l(320448),
    ts = l(783977),
    to = l(344587),
    tu = l(534554),
    tc = l(837984),
    td = l(359589),
    tm = l(254575);
function tf(e) {
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
function th(e) {
    let { settings: t, tiers: l, choices: n, disabled: a, onChange: s, placement: u, open: c, entered: d } = e,
        [m, f] = i.useState(!1),
        h = tf(m),
        g = ee.PY.indexOf(t.tier),
        x = m ? tr.t : ti._,
        p = ee.PY.map(tu.D0),
        v = (0, tu.Tc)(t.tier),
        { text: j, phase: b } = (0, to.Q)(v);
    return (0, r.jsx)("div", {
        className: tm.qd,
        "data-placement": u ?? void 0,
        children: (0, r.jsxs)("div", {
            className: o()(tm.t$, { [tm.Zr]: c && d, [tm.GF]: !c }),
            role: "dialog",
            "aria-label": ed.intl.string(ec.default["3E7Yc0"]),
            children: [
                h.mounted
                    ? (0, r.jsx)("div", {
                          className: o()(tm.Nr, tm.uO, { [tm.Zr]: m && h.entered, [tm.GF]: !m }),
                          children: (0, r.jsx)(td.bR, { settings: t, tiers: l, choices: n, disabled: a, onChange: s }),
                      })
                    : null,
                (0, r.jsxs)("div", {
                    className: `${tm.Nr} ${tm.rF}`,
                    children: [
                        (0, r.jsxs)("div", {
                            className: tm.wx,
                            children: [
                                (0, r.jsxs)("button", {
                                    type: "button",
                                    className: tm.y6,
                                    "aria-expanded": m,
                                    "aria-label": ed.intl.string(ec.default.eGqPbV),
                                    onClick: () => f((e) => !e),
                                    children: [
                                        (0, r.jsx)(y.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: ed.intl.string(ec.default.aBPQxX),
                                        }),
                                        (0, r.jsx)(x, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: tm.vg,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(y.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: o()(tm.Z, { [tm.xQ]: "exit" === b, [tm.lm]: "enter" === b }),
                                    children: j,
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: tm.hs,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: tm.Nb,
                                    children: [
                                        (0, r.jsx)(y.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: ed.intl.string(ec.default["/tlOR5"]),
                                        }),
                                        (0, r.jsx)(y.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: ed.intl.string(ec.default.FxoUwB),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(tc.A, {
                                    activeIndex: g,
                                    stops: p,
                                    ariaLabel: ed.intl.string(ec.default.aBPQxX),
                                    disabled: a,
                                    onSelect: function (e) {
                                        let l = ee.PY[e];
                                        null != l && l !== t.tier && s((0, tu.CM)((0, tu.j6)(t, l)));
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
function tg(e) {
    let { settings: t, tiers: l, choices: n, disabled: a, onChange: s, className: o, icon: u } = e,
        c = i.useRef(null),
        [d, m] = (0, td.FT)(t, s),
        [f, h] = i.useState(!1),
        { mounted: g, entered: x } = tf(f);
    return (0, r.jsx)(et.Y, {
        targetElementRef: c,
        position: "top",
        align: "right",
        shouldShow: g,
        onRequestClose: () => h(!1),
        animation: et.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, r.jsx)(th, {
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
            return (0, r.jsx)(w.m, {
                text: ed.intl.string(ec.default["k2JN/p"]),
                shouldShow: !l,
                ariaHidden: !0,
                children: (0, r.jsx)(k.D, {
                    innerRef: c,
                    className: o ?? tm.hZ,
                    "aria-label": ed.intl.string(ec.default["k2JN/p"]),
                    ...e,
                    onClick: () => h((e) => !e),
                    "aria-expanded": f,
                    children: u ?? (0, r.jsx)(ts.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
var tx = l(111534);
let tp = { width: 320, height: 240 };
var tv = l(573083),
    tj = l(855859),
    tb = l(238490),
    ty = l(754027),
    tk = l(696645);
function tw(e) {
    return "frame" === e.mode ? `frame-${e.surface}` : e.mode;
}
function tN(e) {
    switch (e.mode) {
        case "frame":
            return (0, tk.XV)(e.surface);
        case "widget":
            return ed.intl.string(ec.default.y5GiL1);
        case "overlay":
            return ed.intl.string(ec.default["2940LX"]);
        case "bot":
            return ed.intl.string(ec.default.tjpaGN);
    }
}
var tA = l(598748),
    tS = l(294323),
    tC = l(457827),
    tE = l(25451),
    tI = l(280450),
    tM = l(373677),
    tT = l(86147),
    t_ = l(729475),
    tP = l(91242),
    tR = l(869146),
    tL = l(475815),
    tD = l(621466);
function t$(e) {
    return null == e ? null : document.querySelector(`[data-frame-id="${CSS.escape(e)}"]`);
}
function tF(e) {
    let t, l;
    return (
        null != e &&
        ((l =
            (t = document).fullscreenElement ??
            t.webkitFullscreenElement ??
            t.mozFullScreenElement ??
            t.msFullscreenElement ??
            null),
        ((0, tD.vq)(l, Element) ? l.getAttribute("data-frame-id") : null) === e)
    );
}
function tz(e) {
    return (0, tL.a3)(document, e);
}
function tO(e) {
    return i.useSyncExternalStore(tz, () => tF(e));
}
var tG = l(165610);
function tU(e) {
    let { frame: t, controlProjectId: l } = e,
        n = tO(t?.id ?? null),
        a = (0, tv.Zv)(l),
        i = (0, m.bG)(
            [tR.A, tP.A],
            () => null != t && tR.A.getWindowOpen(eb.MLl.ACTIVITY_POPOUT) && tP.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, tG.x1)(t) || i || a) return null;
    let s = t$(t.id);
    if (null == s || !(0, tL.Ub)(s)) return null;
    let o = ed.intl.string(n ? ed.t.Z7MyNB : ed.t.OIDkcp);
    return (0, r.jsx)(K.A.Icon, {
        tooltip: o,
        icon: n ? tT.z : t_.T,
        "aria-label": o,
        role: "switch",
        "aria-checked": n,
        selected: n,
        onClick: () => {
            var e;
            let l;
            null != (l = t$((e = t.id))) && (0, tL.Ub)(l) && (tF(e) ? (0, tL.sP)(l) : (0, tL.tl)(l));
        },
    });
}
var tq = l(559106),
    tH = l(847374),
    tB = l(704745);
function tK(e) {
    let { targets: t, target: l, onChange: n } = e,
        [a, s] = i.useState(!1),
        o = null != l && t.length > 1;
    a && !o && s(!1);
    let u = i.useCallback(() => s(!1), []),
        c = i.useCallback(() => s((e) => !e), []),
        d = i.useRef(null);
    if (!o) return null;
    let m = ed.intl.string(ec.default.I2ucou);
    return (0, r.jsx)(et.Y, {
        targetElementRef: d,
        shouldShow: a,
        onRequestClose: u,
        position: "bottom",
        align: "right",
        animation: et.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, r.jsx)(el.W, {
                "data-menu-migrated": !0,
                navId: "conjure-preview-target",
                "aria-label": m,
                onClose: a,
                onSelect: a,
                children: (0, r.jsx)(en.rX, {
                    label: m,
                    children: t.map((e) => {
                        let t = tw(e);
                        return (0, r.jsx)(
                            en.iD,
                            {
                                id: `preview-target-${t}`,
                                group: "conjure-preview-target",
                                label: tN(e),
                                checked: t === tw(l),
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
            return (0, r.jsx)(tq.vN, {
                children: (0, r.jsxs)("button", {
                    ...a,
                    ref: d,
                    type: "button",
                    className: tB.h,
                    "aria-haspopup": "menu",
                    "aria-expanded": i,
                    onClick: c,
                    children: [
                        (0, r.jsx)(y.E, {
                            tag: "span",
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: ed.intl.string(ec.default["N+VA1J"]),
                        }),
                        (0, r.jsx)(y.E, {
                            tag: "span",
                            variant: "text-sm/medium",
                            color: "none",
                            lineClamp: 1,
                            children: tN(l),
                        }),
                        (0, r.jsx)(tH.a, { size: "xs", color: "currentColor" }),
                    ],
                }),
            });
        },
    });
}
var tV = l(226178),
    tW = l(434279),
    tX = l(941985),
    tJ = l(287809),
    tQ = l(427262),
    tY = l(803306);
let tZ = new Set(),
    t0 = new Map();
function t1(e, t, l) {
    return null == e ? (l ?? null) : (t ?? null);
}
function t2(e) {
    if (null == e || tZ.has(e) || null != tJ.default.getUser(e)) return;
    let t = t0.get(e) ?? 0;
    t >= 3 ||
        (t0.set(e, t + 1),
        tZ.add(e),
        tY
            .wz(e)
            .finally(() => tZ.delete(e))
            .catch(() => {}));
}
var t3 = l(16619),
    t4 = l(782603),
    t6 = l(780338),
    t7 = l(663417),
    t5 = l(70688),
    t8 = l(173936),
    t9 = l(473935),
    le = l(408278),
    lt = l(365199),
    ll = l(7437),
    ln = l(147036),
    la = l(957565),
    lr = l(785389),
    li = l(123917);
let ls = new Set();
var lo = l(289106),
    lu = l(616334),
    lc = l(189714),
    ld = l(435558),
    lm = l.n(ld),
    lf = l(587895),
    lh = l(321191),
    lg = l(808728),
    lx = l(994500),
    lp = l(426035);
function lv(e) {
    let { channelNames: t } = e;
    return t.map((e) => ({ key: `channel:${e}`, kind: "channel", label: `#${e}` }));
}
var lj = l(189213),
    lb = l(331322),
    ly = l(150934),
    lk = l(323384),
    lw = l(430392),
    lN = l(678708),
    lA = l(709066),
    lS = l(319725);
function lC(e, t) {
    return ed.intl.format(e, {
        app: (0, r.jsxs)(
            "span",
            {
                className: lS.Kh,
                children: [t, " ", (0, r.jsx)("span", { className: lS.Tc, children: (0, r.jsx)(lA.A, {}) })],
            },
            "app",
        ),
    });
}
function lE(e) {
    let { kind: t } = e;
    switch (t) {
        case "channel":
            return (0, r.jsx)(lk.k, { size: "sm", color: "currentColor", "aria-hidden": !0 });
        case "app":
            return (0, r.jsx)(lw.RobotIcon, { size: "sm", color: "currentColor", "aria-hidden": !0 });
        case "project":
            return (0, r.jsx)(lN.FolderIcon, { size: "sm", color: "currentColor", "aria-hidden": !0 });
    }
}
function lI(e) {
    let { items: t } = e;
    return (0, r.jsxs)(lb.B, {
        gap: 8,
        children: [
            (0, r.jsx)(y.E, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: ed.intl.string(ec.default["+E2PqP"]),
            }),
            (0, r.jsx)("div", {
                className: lS.aP,
                children: t.map((e) =>
                    (0, r.jsxs)(
                        "div",
                        {
                            className: lS.nM,
                            children: [
                                (0, r.jsx)(lE, { kind: e.kind }),
                                (0, r.jsx)(y.E, { variant: "text-sm/medium", color: "text-subtle", children: e.label }),
                            ],
                        },
                        e.key,
                    ),
                ),
            }),
        ],
    });
}
function lM(e) {
    let t,
        { project: l, target: n, action: a, ...s } = e,
        [o, u] = i.useState(!0),
        [c, d] = i.useState(!1),
        [m, f] = i.useState(null),
        h = "delete" === a,
        g = h
            ? ((t = [{ key: "project", kind: "project", label: n.projectName }]).push(...lv(n)),
              null != n.previewAppName && t.push({ key: "preview-app", kind: "app", label: n.previewAppName }),
              t)
            : lv(n),
        x = h
            ? ed.intl.formatToPlainString(ec.default.CJBhb2, { name: n.projectName })
            : ed.intl.formatToPlainString(ec.default.x6FvsZ, { app: n.appName });
    async function p() {
        (d(!0), f(null));
        let e = h ? (0, eC.xx)(l.id) : (0, eC.YI)(l.id, { alsoRemovePreviewBot: o }),
            t = await e.catch(() => null);
        (d(!1), t?.ok !== !0)
            ? f(ed.intl.string(h ? ec.default["0XDHob"] : ec.default.PJ2Fkn))
            : (h ||
                  (0, v.P)(
                      (0, j.o)(
                          (function (e) {
                              let { appName: t, guildName: l } = e;
                              return ed.intl.formatToPlainString(ec.default.SNFGxP, { app: t, server: l });
                          })(n),
                          b.Ck.SUCCESS,
                      ),
                  ),
              s.onClose());
    }
    return (0, r.jsx)(lj.a, {
        ...s,
        role: "alertdialog",
        title: h ? x : lC(ec.default.x6FvsZ, n.appName),
        subtitle: h
            ? (function (e) {
                  let { appName: t, guildName: l } = e;
                  return ed.intl.formatToPlainString(ec.default["9CvVB9"], { app: t, server: l });
              })(n)
            : ed.intl.string(ec.default["8OKM1N"]),
        "aria-label": x,
        notice: null == m ? void 0 : { message: m, type: "critical" },
        actions: [
            { text: ed.intl.string(ed.t["ETE/oC"]), variant: "secondary", onClick: s.onClose },
            {
                text: ed.intl.string(h ? ec.default.aC42bN : ec.default.BGF8VT),
                variant: "critical-primary",
                loading: c,
                disabled: c,
                onClick: () => {
                    p().catch(() => {});
                },
            },
        ],
        children: (0, r.jsxs)(lb.B, {
            gap: 12,
            children: [
                g.length > 0 ? (0, r.jsx)(lI, { items: g }) : null,
                h || null == n.previewAppName
                    ? null
                    : (0, r.jsx)(ly.S, { checked: o, onChange: u, label: lC(ec.default["87CtcA"], n.previewAppName) }),
            ],
        }),
    });
}
function lT(e) {
    (0, tt.openModal)((t) => (0, r.jsx)(lM, { ...t, ...e }));
}
var l_ = l(552821);
let lP = [];
function lR(e) {
    (0, v.P)((0, j.o)(e, b.Ck.FAILURE));
}
function lL(e) {
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
            onClose: y,
            refreshApplicationId: k,
            previewProjectId: w,
            onCloseMenu: N,
        } = e,
        A = (0, lc.iI)(t),
        S = i.useContext(lo.bI),
        { pending: C, refresh: E } = (0, ll.A)(k ?? null),
        { pending: M, connect: T } = (function (e, t) {
            let [l, n] = i.useState(ls),
                a = i.useRef(ls),
                r = i.useCallback((e) => {
                    ((a.current = (0, lr.Q6)(a.current, e)), n(a.current));
                }, []);
            return {
                pending: l,
                connect: i.useCallback(
                    (l) => {
                        if (null == e) return;
                        let i = (0, lr.K9)(a.current, l.type);
                        async function s() {
                            let n = await (0, er.JI)(e, l.type);
                            (r(l.type), "url" === n.type)
                                ? (0, li.h)({ href: n.url, trusted: !1 })
                                : t(
                                      "setup" === (0, lr.rq)(n.error)
                                          ? ed.intl.string(ec.default["jCQ/1B"])
                                          : ed.intl.string(ec.default.POxkSh),
                                  );
                        }
                        null != i && ((a.current = i), n(i), s().catch(() => r(l.type)));
                    },
                    [t, e, r],
                ),
            };
        })(w ?? null, lR),
        _ = (0, m.bG)([er.Ay], () => (null == w ? lP : er.Ay.getDeclaredConnections(w))),
        P = i.useMemo(() => (0, lr.Xl)(_), [_]),
        R = (0, m.bG)(
            [eE.Ay, Y.A, lg.Ay, lh.A, lf.A, tJ.default, lx.A],
            () => {
                let e,
                    l = null == t ? null : eE.Ay.getProject(t);
                return null == l
                    ? null
                    : null != (e = null == l.guild_id ? null : Y.A.getGuild(l.guild_id)) &&
                        (0, eE.jf)(l) &&
                        "in_server" === (0, lp.kF)(l)
                      ? {
                            projectName: l.name,
                            appName: lf.A.getApplication(l.application_id)?.name ?? l.name,
                            previewAppName:
                                null == l.preview_application_id
                                    ? null
                                    : (lf.A.getApplication(l.preview_application_id)?.name ?? `${l.name} (Preview)`),
                            guildName: e.name,
                            channelNames: (0, lp.xI)(e.id, l.application_id).map((e) => (0, G.m1)(e, tJ.default, lx.A)),
                        }
                      : null;
            },
            [t],
            ld.isEqual,
        ),
        L = (function (e) {
            let { canRefresh: t, refreshPending: l, offers: n, connectPending: a } = e,
                r = [];
            for (let { connection: e, offer: i } of (t &&
                r.push({
                    id: "preview-refresh",
                    label: ed.intl.string(ec.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: l,
                }),
            n))
                r.push(
                    "authorize" === i
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: ed.intl.formatToPlainString(ec.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: a.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: ed.intl.formatToPlainString(ec.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return r;
        })({ canRefresh: null != k, refreshPending: C, offers: P, connectPending: M }),
        D = i.useMemo(() => new Map(_.map((e) => [e.type, e])), [_]),
        $ = null != d && o,
        F = s && null != c,
        z = $ || null != u || F || null != h || null != g,
        O = la.p5 && null != n,
        U = la.p5,
        q = A ? t4.BellIcon : t6.BellSlashIcon;
    return (0, r.jsxs)(el.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": ed.intl.string(ed.t.ogxXGq),
        onClose: N,
        onSelect: N,
        children: [
            null != x || null != y
                ? (0, r.jsxs)(en.rX, {
                      children: [
                          null != x
                              ? (0, r.jsx)(en.Dr, {
                                    id: "refresh",
                                    icon: t7.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: t7.RefreshIcon },
                                    label: ed.intl.string(ec.default["p4B/7M"]),
                                    disabled: p,
                                    action: x,
                                })
                              : null,
                          null != y
                              ? (0, r.jsx)(en.Dr, {
                                    id: "close",
                                    icon: t5.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: t5.DoorExitIcon },
                                    label: ed.intl.string(ec.default["/TlGcK"]),
                                    action: y,
                                })
                              : null,
                      ],
                  })
                : null,
            L.length > 0
                ? (0, r.jsx)(en.rX, {
                      children: L.map((e) =>
                          (0, r.jsx)(
                              en.Dr,
                              {
                                  id: e.id,
                                  label: e.label,
                                  disabled: e.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === e.kind) return void E();
                                      let t = null == e.connectionType ? null : D.get(e.connectionType);
                                      null != t && T(t);
                                  },
                              },
                              e.id,
                          ),
                      ),
                  })
                : null,
            (0, r.jsx)(en.rX, {
                children: (0, r.jsx)(en.Dr, {
                    id: "mute",
                    label: ed.intl.string(A ? ec.default.s9rCuH : ec.default["a+i/As"]),
                    icon: q,
                    leadingAccessory: { type: "icon", icon: q },
                    action: () => (0, lc.$L)(t, !A),
                }),
            }),
            z
                ? (0, r.jsxs)(en.rX, {
                      children: [
                          $
                              ? (0, r.jsx)(en.Dr, { id: "remix", label: ed.intl.string(ec.default.XWgAfc), action: d })
                              : null,
                          null != u
                              ? (0, r.jsx)(en.Dr, { id: "export", label: ed.intl.string(ec.default.WsEEP7), action: u })
                              : null,
                          F
                              ? (0, r.jsx)(en.Dr, { id: "import", label: ed.intl.string(ec.default.rWGY3e), action: c })
                              : null,
                          null != h
                              ? (0, r.jsx)(en.Dr, {
                                    id: "connect-tool",
                                    label: ed.intl.string(ec.default.yOIql5),
                                    action: h,
                                })
                              : null,
                          null != g
                              ? (0, r.jsx)(en.Dr, {
                                    id: "history",
                                    label: ed.intl.string(ec.default["3hIVou"]),
                                    action: g,
                                })
                              : null,
                      ],
                  })
                : null,
            U
                ? (0, r.jsxs)(en.rX, {
                      children: [
                          O
                              ? (0, r.jsx)(en.Dr, {
                                    id: "copy-link",
                                    label: ed.intl.string(ed.t.WqhZss),
                                    icon: t8.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: t8.LinkIcon },
                                    action: () =>
                                        (0, la.C)((0, ln.n)(n, ey.VV.CONJURE, t), () =>
                                            (0, v.P)((0, j.o)(ed.intl.string(ed.t["L/PwZf"]), b.Ck.SUCCESS)),
                                        ),
                                })
                              : null,
                          (0, r.jsx)(en.Dr, {
                              id: "copy-project-id",
                              label: ed.intl.string(ec.default["nm/zuU"]),
                              icon: t9.L,
                              leadingAccessory: { type: "icon", icon: t9.L },
                              action: () =>
                                  (0, la.C)(t, () =>
                                      (0, v.P)((0, j.o)(ed.intl.string(ec.default.CmfaZG), b.Ck.SUCCESS)),
                                  ),
                          }),
                      ],
                  })
                : null,
            s || null != R
                ? (0, r.jsxs)(en.rX, {
                      children: [
                          s
                              ? (0, r.jsx)(en.Dr, {
                                    id: "settings",
                                    label: ed.intl.string(ec.default.FzfmQ8),
                                    icon: I.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: I.SettingsIcon },
                                    action: () =>
                                        (0, lu.A)(t, {
                                            guildId: a ?? n,
                                            initialTab: "project",
                                            isPreview: !0,
                                            publishOptions: S,
                                        }),
                                })
                              : null,
                          null != R
                              ? (0, r.jsx)(en.Dr, {
                                    id: "remove-from-server",
                                    label: ed.intl.formatToPlainString(ec.default["3gKG2j"], { server: R.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let e = eE.Ay.getProject(t);
                                        null != e && lT({ project: e, target: R, action: "remove" });
                                    },
                                })
                              : null,
                          s
                              ? (0, r.jsx)(en.Dr, {
                                    id: "delete",
                                    label: ed.intl.string(ed.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let e = eE.Ay.getProject(t);
                                        if (null != e && null != R) lT({ project: e, target: R, action: "delete" });
                                        else
                                            (0, f.A)({
                                                title: ed.intl.formatToPlainString(ec.default.CJBhb2, { name: l }),
                                                subtitle: ed.intl.string(ec.default["0OmrVn"]),
                                                confirmText: ed.intl.string(ed.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, eC.K)(t, () =>
                                                        (0, v.P)(
                                                            (0, j.o)(
                                                                ed.intl.string(ec.default["0XDHob"]),
                                                                b.Ck.FAILURE,
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
function lD(e) {
    let { trigger: t = "header", ...l } = e,
        n = i.useRef(null);
    return (0, r.jsx)(et.Y, {
        targetElementRef: n,
        position: "bottom",
        align: "right",
        animation: et.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(lL, { ...l, onCloseMenu: t });
        },
        children: (e, l) => {
            let { onClick: a } = e,
                { isShown: i } = l;
            return (0, r.jsx)("div", {
                ref: n,
                className: l_.h,
                children:
                    "iconButton" === t
                        ? (0, r.jsx)(w.m, {
                              text: ed.intl.string(ed.t["UKOtz+"]),
                              children: (0, r.jsx)(le.K, {
                                  icon: lt.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": ed.intl.string(ed.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": i,
                                  onClick: a,
                              }),
                          })
                        : (0, r.jsx)(K.A.Icon, {
                              icon: lt.MoreHorizontalIcon,
                              tooltip: ed.intl.string(ed.t["UKOtz+"]),
                              "aria-label": ed.intl.string(ed.t["UKOtz+"]),
                              "aria-haspopup": "menu",
                              "aria-expanded": i,
                              selected: i,
                              onClick: a,
                          }),
            });
        },
    });
}
var l$ = l(497183),
    lF = l(104171),
    lz = l(286739);
function lO(e) {
    let { creator: t, className: l } = e;
    return (0, r.jsx)("div", {
        className: o()(lz.c, l),
        "aria-hidden": !0,
        children: (0, r.jsx)(lF.Ay, { users: [t.creator, ...t.collaborators], max: 3, size: lF.DN.SIZE_16 }),
    });
}
var lG = l(246338);
let lU = "user",
    lq = "no-server",
    lH = new Map();
function lB(e) {
    return lH.get(e) ?? null;
}
function lK(e) {
    switch (e) {
        case "all":
        case lU:
        case lq:
            return null;
        default:
            return e;
    }
}
function lV(e, t) {
    switch (t) {
        case "all":
            return !0;
        case lU:
            return "user" === e.install_scope;
        case lq:
            return null == (0, tW.wu)(e);
        default:
            return e.guild_id === t || e.preview_guild_id === t;
    }
}
var lW = l(506774);
let lX = "VibegrationsProjectsPanelOpen";
function lJ() {
    return lW.w.get(lX) ?? null;
}
function lQ(e) {
    return `VibegrationsProjectsPanel:${e}`;
}
var lY = l(803101),
    lZ = l(516288);
function l0(e) {
    let { reason: t, transitionState: l, onClose: n } = e,
        a = t === lZ.k.PERMISSIONS;
    return (0, r.jsx)(lj.a, {
        transitionState: l,
        onClose: n,
        title: ed.intl.string(a ? ec.default.wQ4UyJ : ec.default.ZNGLFE),
        subtitle: ed.intl.string(a ? ec.default.Agqmbt : ec.default.ffxKGK),
        size: "sm",
        actions: [{ text: ed.intl.string(a ? ed.t.BddRzS : ec.default["/omTNx"]), variant: "primary", onClick: n }],
    });
}
var l1 = l(951465),
    l2 = l(95264),
    l3 = l(952644),
    l4 = l(991690),
    l6 = l(58736),
    l7 = l(689175),
    l5 = l(65593),
    l8 = l(115982);
function l9(e) {
    return !(0, ek.BL)(e) && !0 !== e.stopRequested;
}
var ne = l(104317),
    nt = l(643278),
    nl = l(566424),
    nn = l(683063),
    na = l(138212);
function nr(e) {
    let { title: t, trailing: l, children: n, className: a, headerClassName: i, ...s } = e;
    return (0, r.jsxs)("section", {
        className: o()(na.Nr, a),
        ...s,
        children: [
            (0, r.jsxs)("header", {
                className: o()(na.wx, null != l && na.o5, i),
                children: [
                    (0, r.jsx)(y.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    l,
                ],
            }),
            n,
        ],
    });
}
var ni = l(148590);
function ns(e) {
    let { children: t } = e;
    return (0, r.jsx)(y.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function no(e) {
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
        j = h ? tH.a : ti._,
        b = null != l || n;
    return (0, r.jsxs)(nr, {
        ...m,
        title: t,
        trailing: b
            ? (0, r.jsxs)("span", {
                  className: ni.ZY,
                  children: [
                      l,
                      n
                          ? (0, r.jsx)(k.D, {
                                className: ni.L$,
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
        headerClassName: h ? void 0 : ni.RG,
        "data-superseded": n ? "true" : void 0,
        children: [c, (0, r.jsx)("div", { id: f, className: o()(ni.rf, u), hidden: !h, children: d })],
    });
}
var nu = l(883646);
let nc = [];
function nd(e) {
    let { status: t } = e;
    return (0, r.jsxs)("span", {
        className: o()(nu.xL, {
            [nu.Vb]: "in_progress" === t,
            [nu.cT]: "completed" === t,
            [nu.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return ed.intl.string(ec.default.KvBdun);
                case "in_progress":
                    return ed.intl.string(ec.default["m5G9+S"]);
                case "unfinished":
                    return ed.intl.string(ec.default.lRpwhD);
                default:
                    return ed.intl.string(ec.default.sPGeWi);
            }
        })(t),
        children: [
            (0, r.jsx)(A.y, {
                type: A.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: nu.Qd,
                itemClassName: nu.xB,
                "aria-hidden": !0,
            }),
            (0, r.jsx)("svg", {
                className: nu.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, r.jsx)("path", { className: nu.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function nm(e) {
    let { agents: t, active: l } = e,
        n = i.useMemo(() => (l ? t : nc), [l, t]),
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
        className: nu.X6,
        "data-shown": l && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: l, name: n, task: i } = e,
                    { Illocon: s } = l;
                return (0, r.jsx)(
                    nn.u,
                    {
                        asset: (0, r.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: n,
                        body: i,
                        position: "top",
                        children: (0, r.jsx)("span", {
                            className: nu.MA,
                            "data-leaving": a.has(t) ? void 0 : "true",
                            children: (0, r.jsx)(s, { size: 16, alt: n, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            x > 0
                ? (0, r.jsx)(y.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: nu.qA,
                      children: `+${x}`,
                  })
                : null,
        ],
    });
}
function nf(e) {
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
            ((t = (a ?? nc).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            i.useMemo(() => {
                let e = new Map();
                for (let t of a ?? nc) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let l = e.get(t.todoId);
                    null != l ? l.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, r.jsxs)("ul", {
        className: nu.p_,
        children: [
            l.map((e) => {
                var t;
                let l = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, r.jsxs)(
                    "li",
                    {
                        className: o()(nu.AS, { [nu.J1]: "completed" === l }),
                        "data-arriving": u.has(e.id) ? "true" : void 0,
                        children: [
                            (0, r.jsx)(nd, { status: l }),
                            (0, r.jsx)(y.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === l || "pending" === l ? "text-default" : "text-subtle",
                                tag: "span",
                                className: nu.iV,
                                selectable: !0,
                                children: (0, r.jsx)("span", {
                                    className: nu.Qq,
                                    children:
                                        "in_progress" === l && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, r.jsx)(nm, { agents: c.get(e.id) ?? nc, active: "completed" !== l }),
                        ],
                    },
                    e.id,
                );
            }),
            null != n
                ? (0, r.jsxs)("li", {
                      className: nu.AS,
                      "data-provisional": !0,
                      children: [
                          (0, r.jsx)(nd, { status: "pending" }),
                          (0, r.jsx)(y.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: nu.iV,
                              selectable: !0,
                              children: (0, r.jsx)("span", { className: nu.Qq, children: n }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function nh(e) {
    let { todos: t, provisional: l, agents: n, announceProgress: a = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let c = ed.intl.formatToPlainString(ec.default["P/I+JW"], { completed: o, total: u }),
        d = ed.intl.formatToPlainString(ec.default["7tzwKB"], { completed: o, total: u });
    return (0, r.jsx)(no, {
        title: ed.intl.string(ec.default.RtzECX),
        meta: (0, r.jsx)(ns, { children: c }),
        superseded: s,
        showLabel: ed.intl.string(ec.default.RKyN9q),
        hideLabel: ed.intl.string(ec.default.xydHoj),
        className: nu.Nr,
        bodyClassName: nu.rf,
        beforeBody: a && !s ? (0, r.jsx)(N.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, r.jsx)(nf, { todos: t, provisional: l, agents: n, live: i }),
    });
}
var ng = l(308665),
    nx = l(59678),
    np = l(903847);
function nv(e) {
    let { line: t, placement: l, todos: n, todosLive: a = !0, provisionalTodo: s, agents: u, onJumpToActivity: c } = e,
        d = null != l,
        [m, f] = i.useState(l ?? "top"),
        [h, g] = i.useState(d),
        [x, p] = i.useState(!1),
        [v, j] = i.useState(!1),
        [b, y] = i.useState(d);
    (b !== d && (y(d), null != l ? (f(l), g(!0)) : (p(!1), j(!1))),
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
              className: np.qd,
              "data-placement": m,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, r.jsxs)("div", {
                      className: o()(np.vK, { [np.ho]: x && d, [np.ET]: !d }),
                      children: [
                          null == c
                              ? (0, r.jsx)("ol", {
                                    className: o()(np.Rk, nx.pj),
                                    "data-live": "true",
                                    children: (0, r.jsx)(nl.A, {
                                        glyph: (0, r.jsx)(ng.Ay, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, r.jsx)(k.D, {
                                    className: np.pZ,
                                    onClick: c,
                                    "aria-label": ed.intl.string(ec.default.hEK6qu),
                                    children: (0, r.jsx)("ol", {
                                        className: o()(np.Rk, nx.pj),
                                        "data-live": "true",
                                        children: (0, r.jsx)(nl.A, {
                                            glyph: (0, r.jsx)(ng.Ay, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          M
                              ? (0, r.jsx)(w.m, {
                                    text: ed.intl.string(ec.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, r.jsx)(k.D, {
                                        className: np.BO,
                                        onClick: T,
                                        "aria-expanded": v,
                                        "aria-label": ed.intl.string(ec.default.RtzECX),
                                        children: (0, r.jsx)(nt.ClipboardListIcon, {
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
                            className: o()(np.vB, { [np.pg]: v && S, [np.ui]: !v }),
                            children: (0, r.jsx)(nh, {
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
var nj = l(658675),
    nb = l(22231),
    ny = l(826745),
    nk = l(123292),
    nw = l(155078);
function nN(e) {
    return e.options.some((e) => null != e.image);
}
let nA = [];
function nS(e, t) {
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
var nC = l(87221),
    nE = l(144228),
    nI = l(241326),
    nM = l(26430),
    nT = l(750943),
    n_ = l(95477),
    nP = l(256905),
    nR = l(73153),
    nL = l(839214);
let nD = [],
    n$ = 1,
    nF = (0, nL.D)(() => ({ draftsByProject: {} }));
function nz(e, t, l) {
    return e.draftsByProject[t]?.[l] ?? nD;
}
function nO(e, t) {
    return nz(nF.getState(), e, t);
}
function nG(e, t, l) {
    let { draftsByProject: n } = nF.getState();
    nF.setState({ draftsByProject: { ...n, [e]: { ...n[e], [t]: l } } });
}
function nU(e, t, l, n) {
    let a = nO(e, t);
    return (
        !!a.some((e) => e.localId === l) &&
        (nG(
            e,
            t,
            a.map((e) => (e.localId === l ? { ...e, ...n } : e)),
        ),
        !0)
    );
}
function nq(e, t) {
    (0, er.Vm)(e, t).catch((e) => {
        console.error("[vibegrations] attachment cleanup failed", e);
    });
}
function nH(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && nq(e, t.ref.id));
}
function nB(e, t) {
    let { deleteFromWorker: l } = t,
        { draftsByProject: n } = nF.getState(),
        a = n[e];
    if (null == a) return;
    for (let t of Object.values(a))
        for (let n of t ?? nD) l ? nH(e, n) : null != n.previewUrl && URL.revokeObjectURL(n.previewUrl);
    let { [e]: r, ...i } = n;
    nF.setState({ draftsByProject: i });
}
function nK(e) {
    return ed.intl.formatToPlainString(ec.default.JZ59Bo, { size: (0, ee.sM)((0, ee.Ju)(e)) });
}
function nV(e, t) {
    let l = nO(e, t);
    if (0 !== l.length) {
        for (let t of l) nH(e, t);
        nG(e, t, nD);
    }
}
function nW(e, t) {
    let l = nO(e, t);
    if (0 === l.length) return [];
    for (let e of l) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (nG(e, t, nD), l.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function nX(e, t) {
    let { clarificationAnswers: l, attachments: n = [] } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = nO(e, "chat"),
        r = a.length > 0 && a.every((e) => "ready" === e.status) ? nW(e, "chat") : [];
    (0, er.dv)(e, t, [...n, ...r], { clarificationAnswers: l });
}
function nJ(e, t) {
    let [l, n] = i.useState(null),
        [a, r] = i.useState(!1),
        [s, o] = i.useState(0);
    return (
        i.useEffect(() => {
            let l = !1;
            return (
                (0, er.PK)(e, t).then(
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
                    (0, er.n6)(e, t).then(
                        (e) => {
                            e && 0 === s ? o(1) : r(!0);
                        },
                        () => r(!0),
                    ));
            }, [e, t, s]),
        }
    );
}
(nR.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(nF.getState().draftsByProject)) nB(e, { deleteFromWorker: !0 });
}),
    nR.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        nB(t, { deleteFromWorker: !1 });
    }));
var nQ = l(907702);
function nY(e) {
    let { projectId: t, attachmentId: l, alt: n, onMeasured: a } = e,
        { src: s, gone: u, handleError: c } = nJ(t, l),
        [d, m] = i.useState(null),
        f = null != s && d === s;
    return u
        ? (0, r.jsxs)("span", {
              className: o()(nQ.Gt, nQ.b6),
              children: [
                  (0, r.jsx)(nC.D, { size: "md", color: "currentColor" }),
                  (0, r.jsx)(y.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: ed.intl.string(ec.default.lhgD88),
                  }),
              ],
          })
        : (0, r.jsx)("span", {
              className: o()(nQ.Gt, { [nQ.iP]: !f }),
              children:
                  null != s
                      ? (0, r.jsx)("img", {
                            src: s,
                            alt: n,
                            className: nQ.Sl,
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
function nZ(e) {
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
        p = ed.intl.formatToPlainString(ec.default.JGjZMs, { answer: a.label });
    return (0, r.jsxs)("div", {
        className: o()(nQ.Vs, { [nQ.Q9]: s, [nQ.RX]: u }),
        "data-conjure-clarification-option": a.id,
        children: [
            (0, r.jsxs)(k.D, {
                className: nQ.Up,
                "data-conjure-image-option-pick": !0,
                onClick: u ? void 0 : () => m(a),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), h(a, t));
                },
                role: i ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": ed.intl.formatToPlainString(ec.default.AQbxhf, { answer: a.label }),
                "aria-disabled": u,
                tabIndex: c && d ? 0 : -1,
                children: [
                    (0, r.jsxs)("span", {
                        className: nQ.$_,
                        children: [
                            null != a.image
                                ? (0, r.jsx)(nY, {
                                      projectId: n,
                                      attachmentId: a.image.attachment_id,
                                      alt: a.label,
                                      onMeasured: g,
                                  })
                                : (0, r.jsx)("span", { className: nQ.Gt }),
                            (0, r.jsx)("span", {
                                className: nQ.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, r.jsx)(nj.P, { checked: s, disabled: u })
                                    : (0, r.jsx)(nE.T, { checked: s, disabled: u }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(y.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: nQ.pG,
                        children:
                            "" !== (l = null != (t = a.image?.page_url ?? a.image?.url) ? (0, nw.E)(t) : "")
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
                      className: nQ.B4,
                      children: (0, r.jsx)(w.m, {
                          text: ed.intl.string(ec.default.HQEXJM),
                          children: (0, r.jsx)(le.K, {
                              icon: nI.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: x,
                              disabled: u,
                              "aria-label": ed.intl.string(ec.default.HQEXJM),
                              tabIndex: c ? 0 : -1,
                          }),
                      }),
                  })
                : null != a.image
                  ? (0, r.jsx)("span", {
                        className: nQ.B4,
                        children: (0, r.jsx)(w.m, {
                            text: ed.intl.string(ec.default["4/eeDD"]),
                            children: (0, r.jsx)(le.K, {
                                icon: nM._,
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
function n0(e) {
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
                    Promise.all(t.map((e) => (0, er.PK)(l, e.image.attachment_id))).then(
                        (e) => {
                            (0, nP.R)({
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
                      label: ed.intl.string(ec.default.SUdqCQ),
                      image: { attachment_id: t.attachment.id },
                  });
    return (0, r.jsxs)("div", {
        className: nQ.Nz,
        "data-conjure-image-options": !0,
        children: [
            (0, r.jsxs)("div", {
                ref: g,
                className: o()(nQ.fF, "gallery" === h ? nQ.nV : nQ.nM, { [nQ.m3]: m }),
                role: m ? "group" : "radiogroup",
                "aria-labelledby": `${n.id}-label`,
                "data-layout": h,
                "data-count": f.length,
                children: [
                    f.map((e) =>
                        (0, r.jsx)(
                            nZ,
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
                              nZ,
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
            (0, r.jsx)(n1, {
                projectId: l,
                own: d,
                disabled: s,
                reachable: u,
                uploadText: ed.intl.string(/\bicons?\b/i.test(n.question) ? ec.default.qU4WN6 : ec.default.cbMDDB),
            }),
        ],
    });
}
function n1(e) {
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
        className: nQ.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, r.jsxs)("div", {
                className: nQ.QJ,
                children: [
                    (0, r.jsx)(S.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: nT.X,
                        text: s,
                        loading: "upload" === h,
                        disabled: n || "link" === h,
                        onClick: () => o.current?.click(),
                        tabIndex: f,
                        "data-conjure-own-image-upload": !0,
                    }),
                    u
                        ? null
                        : (0, r.jsx)(S.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: t8.LinkIcon,
                              text: ed.intl.string(ec.default["1TgOO+"]),
                              disabled: n || "upload" === h,
                              onClick: () => c(!0),
                              tabIndex: f,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, r.jsx)("input", {
                        ref: o,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: nQ.Fg,
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
                                        (0, ee.Oq)(r.size, a)
                                            ? (0, er.c9)(t, r, n, a)
                                            : Promise.resolve({ errorText: nK(a) })),
                                    ));
                        },
                    }),
                ],
            }),
            u
                ? (0, r.jsxs)("div", {
                      className: nQ.vG,
                      children: [
                          (0, r.jsx)("div", {
                              className: nQ.Hs,
                              children: (0, r.jsx)(n_.k, {
                                  label: ed.intl.string(ec.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: ed.intl.string(ec.default.AVhvn8),
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
                              className: nQ.gd,
                              children: [
                                  (0, r.jsx)(S.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: ed.intl.string(ec.default.FbRbeM),
                                      loading: "link" === h,
                                      disabled: n || "" === d.trim(),
                                      onClick: g,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, r.jsx)(nk.Q, {
                                      variant: "secondary",
                                      textVariant: "text-sm/medium",
                                      text: ed.intl.string(ec.default.eXZL4X),
                                      onClick: () => c(!1),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
            l.error?.source === "upload"
                ? (0, r.jsx)(y.E, {
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
var n2 = l(29073),
    n3 = l(384017);
function n4(e) {
    let { option: t, position: l, disabled: n, onPick: a, reachable: s = !0, selected: u } = e,
        c = i.useId(),
        d = !0 === t.recommended,
        m = null != t.detail && "" !== t.detail;
    return (0, r.jsxs)(k.D, {
        className: o()(n3.uK, { [n3.ue]: n, [n3.h4]: !0 === u }),
        onClick: n ? void 0 : () => a(t),
        "aria-label": ed.intl.formatToPlainString(d ? ec.default["2p6UFz"] : ec.default.AQbxhf, { answer: t.label }),
        "aria-describedby": m ? c : void 0,
        "aria-disabled": n,
        role: null != u ? "checkbox" : void 0,
        "aria-checked": u,
        tabIndex: s ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            null != u
                ? (0, r.jsx)("span", { className: n3.dy, children: (0, r.jsx)(nj.P, { checked: u, disabled: n }) })
                : (0, r.jsx)("span", { className: n3.Gy, "aria-hidden": !0, children: l }),
            (0, r.jsxs)("span", {
                className: n3.qO,
                children: [
                    (0, r.jsx)("span", {
                        className: n3.l8,
                        children: (0, r.jsx)(y.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: n3.ed,
                            children: t.label,
                        }),
                    }),
                    m
                        ? (0, r.jsx)(y.E, {
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
                ? (0, r.jsx)(y.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: n3.rM,
                      children: ed.intl.string(ec.default.zku6r1),
                  })
                : null,
        ],
    });
}
function n6(e) {
    let { projectId: t, question: l, selected: n, disabled: a, reachable: i = !0, onPick: s, own: o } = e,
        u = !0 === l.multi_select;
    return nN(l)
        ? (0, r.jsx)(n0, { projectId: t, question: l, selectedIds: n, disabled: a, reachable: i, onPick: s, own: o })
        : (0, r.jsx)(r.Fragment, {
              children: l.options.map((e, t) =>
                  (0, r.jsx)(
                      n4,
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
let n7 = [];
function n5(e) {
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
        className: o()(n3.Ge, n3.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            m
                ? (0, r.jsx)(y.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: n3.aK,
                      children: ed.intl.string(ec.default.tE8qbz),
                  })
                : null,
            (0, r.jsx)(n6, {
                projectId: t,
                question: l,
                selected: a,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: nS(u, c),
            }),
            nN(l)
                ? null
                : (0, r.jsxs)("div", {
                      className: n3.Xy,
                      children: [
                          (0, r.jsx)("span", {
                              className: n3.Gy,
                              "aria-hidden": !0,
                              children: (0, r.jsx)(nb.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == d ? null : (0, r.jsx)("span", { className: o()(n3.Pu, n3.es), children: d }),
                      ],
                  }),
        ],
    });
}
function n8(e) {
    var t;
    let { projectId: l, clarification: n, onSubmit: a, onDismiss: s } = e,
        [u, c] = i.useState({}),
        [d, m] = i.useState({}),
        [f, h] = i.useState({}),
        [g, x] = i.useState(0),
        [p, v] = i.useState(null),
        [j, b] = i.useState(null),
        [N, A] = i.useState(null),
        [C, E] = i.useState(!1),
        I = i.useRef(null),
        [M, T] = i.useState(null),
        _ = i.useRef(null),
        P = i.useRef(0),
        R = null == a,
        D = n.questions.length,
        $ = Math.min(g, D - 1),
        F = n.questions[$],
        [z, O] = i.useState({ id: F.id, expanded: !1 }),
        G = z.id === F.id && z.expanded,
        [U, q] = i.useState(null),
        H = d[F.id] ?? "",
        B = !0 === F.multi_select,
        K = nN(F),
        V = B ? (f[F.id] ?? n7) : ((t = u[F.id]), t?.kind === "option" ? [t.optionId] : nA),
        W = (function (e, t, l) {
            let [n, a] = i.useState({}),
                [r, s] = i.useState({}),
                [o, u] = i.useState({}),
                c = ed.intl.string(ec.default.wTsP5l),
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
                        if (o) return nS(h, m(i));
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
                                    null != n && (0, er.Vm)(e, n.attachment.id).catch(() => void 0), { ...l, [d]: t }
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
                                    ((0, er.Vm)(e, h.attachment.id).catch(() => void 0),
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
                                                error: { source: "upload", text: ed.intl.string(ec.default["kUw/b1"]) },
                                            }),
                                    ));
                            },
                            onLink: (t) => (
                                g({ busy: "link", error: null }),
                                (0, er.gm)(e, t).then(
                                    (e) => (v({ attachment: e }), !0),
                                    (e) => (
                                        g({
                                            busy: null,
                                            error: {
                                                source: "link",
                                                text:
                                                    e instanceof Error && "" !== e.message
                                                        ? e.message
                                                        : ed.intl.string(ec.default.l79PMc),
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
        { text: Q, phase: Y } = (0, to.Q)(F.question),
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
    let et = ed.intl.string(G ? ed.t.iTcuma : ed.t.dcl9MQ),
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
        en = i.useCallback(
            (e, t) => {
                P.current += 1;
                let l = P.current;
                (v({ direction: t, moves: l }),
                    b({ question: F, draft: H, selected: V, ownImage: X, ownSelected: J, direction: t, moves: l }),
                    E(!0),
                    x(e));
            },
            [H, X, J, F, V],
        ),
        ea = i.useCallback(() => {
            let e = I.current,
                t = _.current;
            null != e && null != t && A({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    i.useLayoutEffect(() => {
        let e = I.current,
            t = _.current;
        if (null == e || null == t) return;
        ea();
        let l = new ResizeObserver(ea);
        return (l.observe(e), l.observe(t), () => l.disconnect());
    }, [ea]);
    let ei = p?.moves;
    i.useEffect(() => {
        if (null == ei) return;
        let e = setTimeout(() => b(null), 400),
            t = setTimeout(() => E(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [ei]);
    let es = i.useCallback(
            (e) => {
                if (R) return;
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
                null == l ? el(t) : en(l, l < $ ? "back" : "forward");
            },
            [u, n, R, $, F.id, el, en],
        ),
        eo = i.useCallback(() => {
            R || 0 === $ || en($ - 1, "back");
        }, [R, $, en]),
        eu = $ > 0 && !R,
        em = i.useCallback(
            (e) => {
                m((e) => ({ ...e, [F.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                K ? R || c((e) => ({ ...e, [F.id]: t })) : es(t);
            },
            [R, K, F.id, es],
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
        eg = W.controlsFor(F, R),
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
        ew = null != ek && !R,
        eN = $ === D - 1,
        eA = i.useCallback(() => {
            null == ek || R || es(ek);
        }, [R, ek, es]),
        eS = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, tD.vq)(e.target, HTMLTextAreaElement) ||
                    (0, tD.vq)(e.target, HTMLInputElement) ||
                    ((!(0, tD.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && eu
                            ? (e.preventDefault(), eo())
                            : "ArrowRight" === e.key && ew && (e.preventDefault(), eA())));
            },
            [eu, ew, eo, eA],
        );
    return (0, r.jsxs)("section", {
        className: o()(n3.$O, { [n3.fI]: ep && !ej, [n3.Oh]: ej }),
        role: "dialog",
        "aria-label": F.question,
        "data-conjure-clarification": n.id,
        "data-state": R ? "inert" : "open",
        "data-question-expanded": G ? "true" : void 0,
        "data-step": $,
        tabIndex: -1,
        onKeyDown: eS,
        children: [
            (0, r.jsxs)("div", {
                className: n3.rf,
                style: null == N ? void 0 : { height: N.heading + N.rows },
                "data-moving": C ? "" : void 0,
                children: [
                    (0, r.jsxs)("div", {
                        ref: I,
                        className: n3.wx,
                        children: [
                            (0, r.jsx)(y.E, {
                                ref: T,
                                tag: "span",
                                id: `${F.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: G ? void 0 : 5,
                                className: o()(n2.TK, n3.R_, { [n3.TB]: "exit" === Y, [n3.JU]: "enter" === Y }),
                                children: Q,
                            }),
                            ee || G
                                ? (0, r.jsx)("div", {
                                      className: n2.Q7,
                                      children: (0, r.jsx)(w.m, {
                                          text: et,
                                          children: (0, r.jsx)(le.K, {
                                              icon: G ? tr.t : tH.a,
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
                                : (0, r.jsx)(k.D, {
                                      className: o()(n2.gb, n2.Q7),
                                      onClick: ey,
                                      "aria-label": ed.intl.string(ec.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, r.jsx)(L.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: n3.Cg,
                        style: null == N ? void 0 : { insetBlockStart: N.heading },
                        children: (0, r.jsxs)("div", {
                            className: n3.I,
                            children: [
                                (0, r.jsxs)("div", {
                                    ref: _,
                                    className: n3.Ge,
                                    role: "group",
                                    "aria-labelledby": `${F.id}-label`,
                                    "data-direction": p?.direction,
                                    "data-parity": null == p ? void 0 : p.moves % 2,
                                    children: [
                                        B
                                            ? (0, r.jsx)(y.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: n3.aK,
                                                  children: ed.intl.string(ec.default.tE8qbz),
                                              })
                                            : null,
                                        (0, r.jsx)(n6, {
                                            projectId: l,
                                            question: F,
                                            selected: V,
                                            disabled: R,
                                            onPick: (e) =>
                                                B
                                                    ? h((t) => {
                                                          var l, n;
                                                          let a;
                                                          return {
                                                              ...t,
                                                              [F.id]:
                                                                  ((l = t[F.id] ?? n7),
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
                                                  className: n3.Xy,
                                                  children: [
                                                      (0, r.jsx)("span", {
                                                          className: n3.Gy,
                                                          "aria-hidden": !0,
                                                          children: (0, r.jsx)(nb.PencilIcon, {
                                                              size: "custom",
                                                              width: 20,
                                                              height: 20,
                                                              color: "currentColor",
                                                          }),
                                                      }),
                                                      (0, r.jsx)(ny.y, {
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
                                                          placeholder: ed.intl.string(ec.default["tOC+tn"]),
                                                          "aria-label": ed.intl.formatToPlainString(
                                                              ec.default["4JeYPB"],
                                                              { question: F.question },
                                                          ),
                                                          disabled: R,
                                                          rows: 1,
                                                          className: n3.Pu,
                                                          "data-conjure-clarification-other": F.id,
                                                      }),
                                                  ],
                                              }),
                                    ],
                                }),
                                null == j
                                    ? null
                                    : (0, r.jsx)(
                                          n5,
                                          {
                                              projectId: l,
                                              question: j.question,
                                              draft: j.draft,
                                              selected: j.selected,
                                              ownImage: j.ownImage,
                                              ownSelected: j.ownSelected,
                                              direction: j.direction,
                                              disabled: R,
                                          },
                                          j.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            D > 1 || B || K
                ? (0, r.jsxs)("div", {
                      className: n2.qr,
                      children: [
                          (0, r.jsx)(y.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  D > 1
                                      ? ed.intl.formatToPlainString(ec.default.yzYUjq, { index: $ + 1, total: D })
                                      : null,
                          }),
                          (0, r.jsxs)("div", {
                              className: n2.zt,
                              children: [
                                  eu
                                      ? (0, r.jsx)(nk.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: ed.intl.string(ec.default.Pk5lfA),
                                            onClick: eo,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  (0, r.jsx)(S.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: ed.intl.string(eN ? ed.t.geKm7t : ec.default.w1nRmT),
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
var n9 = l(957764),
    ae = l(411236);
function at(e) {
    let { projectId: t, request: l, onDismiss: n } = e,
        a = null != l.note && "" !== l.note ? l.note : ed.intl.string(ec.default.XuOf5s);
    return (0, r.jsx)(n9.A, {
        projectId: t,
        scopeKeys: l.keys,
        notifyAgent: !0,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: l, saving: i, submit: s } = e;
            function u(e) {
                (e.preventDefault(), s());
            }
            let c = (0, r.jsx)(S.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: i,
                disabled: !l,
                text: ed.intl.string(ec.default.A7dQd9),
            });
            return null == n
                ? (0, r.jsxs)("form", {
                      className: ae.Mk,
                      onSubmit: u,
                      children: [
                          (0, r.jsx)(y.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: ed.intl.string(ec.default["jZjP+I"]),
                          }),
                          (0, r.jsx)(y.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              selectable: !0,
                              children: a,
                          }),
                          t,
                          (0, r.jsx)("div", { className: ae.p0, children: c }),
                      ],
                  })
                : (0, r.jsxs)("form", {
                      className: o()(n2.nd, n2.jx),
                      "aria-label": ed.intl.string(ec.default["jZjP+I"]),
                      onSubmit: u,
                      children: [
                          (0, r.jsxs)("div", {
                              className: n2.wx,
                              children: [
                                  (0, r.jsx)(y.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: n2.TK,
                                      children: ed.intl.string(ec.default["jZjP+I"]),
                                  }),
                                  (0, r.jsx)(k.D, {
                                      className: o()(n2.gb, n2.Q7),
                                      onClick: n,
                                      "aria-label": ed.intl.string(ec.default["iq+Pte"]),
                                      children: (0, r.jsx)(L.P, {
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
                                  (0, r.jsx)(y.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      selectable: !0,
                                      children: a,
                                  }),
                                  t,
                              ],
                          }),
                          (0, r.jsx)("div", {
                              className: n2.qr,
                              children: (0, r.jsx)("div", { className: n2.zt, children: c }),
                          }),
                      ],
                  });
        },
    });
}
var al = l(935208);
let an = "VibegrationsComposerDrafts";
function aa() {
    return lW.w.get(an) ?? {};
}
let ar = new Map(),
    ai = lm().throttle(() => {
        if (0 === ar.size) return;
        let e = aa();
        for (let [t, l] of ar) "" === l ? delete e[t] : (e[t] = l);
        (ar.clear(), lW.w.set(an, e));
    }, 1e3);
class as extends m.Ay.Store {
    getDraft(e) {
        let t = ar.get(e);
        return null != t ? t : (aa()[e] ?? "");
    }
}
let ao = new as(nR.h, {
    LOGOUT: function () {
        return (ar.clear(), ai.cancel(), lW.w.remove(an), !1);
    },
    CONJURE_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: l } = e;
        return (ar.set(t, l), ai(), "" === l && ai.flush(), !1);
    },
});
function au(e) {
    return "" !== ao.getDraft(e).trim();
}
var ac = l(29080),
    ad = l(46054),
    am = l(615839);
function af(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : ed.intl.string(ec.default.KcFvbo);
}
function ah(e) {
    var t;
    let l,
        n,
        { steps: a, content: r, hasProposal: i, hasAttachments: s } = e,
        o = (0, l8.B4)(a),
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
        })({ hasAttachments: s, showsClosingMessage: f, endsOnStreamedMessage: (0, l8.Lf)(a) }),
    };
}
(l(134528), l(947204));
var ag = l(62617);
let ax = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    ap = {
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
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, ag.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, ag.Z)(),
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
                        () => (0, ag.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, ag.Z)(),
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
                        () => (0, ag.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, ag.Z)(),
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
                        () => (0, ag.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, ag.Z)(),
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
                        () => (0, ag.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, ag.Z)(),
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
                        () => (0, ag.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, ag.Z)(),
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
                        () => (0, ag.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, ag.Z)(),
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
                        () => (0, ag.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, ag.Z)(),
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
                        () => (0, ag.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, ag.Z)(),
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
                        () => (0, ag.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, ag.Z)(),
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
                        () => (0, ag.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
                    className: (0, ag.Z)(),
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": n,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
    };
function aj(e) {
    return { ...av[e], name: ed.intl.string(ap[e]()) };
}
function ab(e) {
    return ax.includes(e) ? aj(e) : void 0;
}
function ay(e) {
    let t = new Map();
    for (let [l, n] of (function (e) {
        let t = 0,
            l = e[0] ?? "";
        for (let e = 0; e < l.length; e++) t = (31 * t + l.charCodeAt(e)) % ax.length;
        let n = new Map();
        return (
            e.forEach((e, l) => {
                n.set(e, ax[(t + l) % ax.length]);
            }),
            n
        );
    })(e))
        t.set(l, aj(n));
    return t;
}
var ak = l(60160),
    aw = l(16634);
function aN(e) {
    let { projectId: t, lane: l, Illocon: n, tint: a, name: i, connectsDown: s } = e,
        o = l.task,
        u = "running" === o.status,
        c = (0, l8.SY)(l.steps),
        d = u
            ? null != c
                ? (0, l8.WQ)(c)
                : af(o)
            : (function (e) {
                  let t = (function (e) {
                      let [t, l] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || l !== l.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(af(e));
                  switch (e.status) {
                      case "failed":
                          return ed.intl.formatToPlainString(ec.default.YrVgOf, { task: t });
                      case "cancelled":
                          return ed.intl.formatToPlainString(ec.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return ed.intl.formatToPlainString(ec.default["++9woZ"], {
                                  task: t,
                                  duration: (0, am.MB)(e.durationMs),
                              });
                          return ed.intl.formatToPlainString(ec.default.nmI9Uh, { task: t });
                      default:
                          return ed.intl.formatToPlainString(ec.default.nmI9Uh, { task: t });
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
                                    className: nx.dO,
                                    children: l.steps.map((e) =>
                                        (0, r.jsx)(
                                            aw.A,
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
                                      className: nx.iq,
                                      children: (0, r.jsx)(ak.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, r.jsx)(nl.A, {
        glyph: (0, r.jsx)(nn.u, {
            asset: (0, r.jsx)(n, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: af(o),
            position: "left",
            children: (0, r.jsx)("span", {
                className: nx.nC,
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
var aA = l(998445),
    aS = l(643210),
    aC = l(648127),
    aE = l(372795),
    aI = l(163897);
let aM = "conjure-browser-viewer";
function aT(e) {
    let { projectId: t, sessionIds: l } = e,
        n = (0, m.yK)(
            [aS.A],
            () =>
                l.flatMap((e) => {
                    let l = aS.A.getTab(t, e);
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
        className: aI.kR,
        "aria-label": ed.intl.string(ec.default.Uvkr1G),
        children: n.map((e) =>
            (0, r.jsx)("li", { children: (0, r.jsx)(a_, { projectId: t, tab: e, sessionIds: a }) }, e.session.id),
        ),
    });
}
function a_(e) {
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
        c = (0, tt.useHasModalOpen)(aM),
        [d, m] = i.useState(!1),
        f = i.useCallback((e, t) => m(t), []),
        { ended: h } = n,
        g = (0, aC.i)(n.session);
    return (0, r.jsxs)(k.D, {
        innerRef: s,
        className: o()(aI.Nr, h && aI.Xj),
        onClick: () => {
            var e;
            return (
                (e = n.session.id),
                void (0, tt.openModalLazy)(
                    async () => {
                        let { default: n } = await Promise.all([
                            l.e("459368"),
                            l.e("513843"),
                            l.e("501962"),
                            l.e("531527"),
                        ]).then(l.bind(l, 273594));
                        return (l) => (0, r.jsx)(n, { ...l, projectId: t, sessionId: e, sessionIds: a });
                    },
                    { modalKey: aM },
                )
            );
        },
        "aria-label": ed.intl.formatToPlainString(ec.default.G3a822, { title: g }),
        children: [
            (0, r.jsxs)("div", {
                className: aI.Gt,
                children: [
                    (0, r.jsx)(aE.A, {
                        projectId: t,
                        sessionId: n.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !u || c || h,
                        className: aI.Ji,
                        "aria-label": ed.intl.formatToPlainString(ec.default.rnwqXb, { name: g }),
                        onStateChange: f,
                    }),
                    d
                        ? null
                        : (0, r.jsx)("div", {
                              className: aI.qf,
                              children: (0, r.jsx)(aA.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    h
                        ? (0, r.jsx)("div", {
                              className: aI.HS,
                              children: (0, r.jsx)(y.E, {
                                  variant: "text-xs/medium",
                                  color: "text-strong",
                                  children: ed.intl.string(ec.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
            (0, r.jsxs)("span", {
                className: aI.pG,
                children: [
                    (0, r.jsx)("span", { className: o()(aI.W9, h && aI.oM) }),
                    (0, r.jsx)(y.E, {
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
var aP = l(268409);
let aR = new WeakMap(),
    aL = new WeakMap();
function aD(e) {
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
            [ek.Ay],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = aR.get(e);
                    if (null != t) return t;
                    let l = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = aL.get(e);
                            if (null == t) {
                                let l = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) l.push(e);
                                ((t = l), aL.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            l.set(e, t.steps);
                    return (aR.set(e, l), l);
                })(ek.Ay.getMessages(t));
                return s.filter((t) => e.get(t) === l);
            },
            [s, t, l],
        );
    return 0 === o.length
        ? null
        : (0, r.jsx)("li", { className: aP.h, children: (0, r.jsx)(aT, { projectId: t, sessionIds: o }) });
}
var a$ = l(469393);
function aF(e) {
    let { proposal: t, onRestore: l } = e,
        n = (0, tn.lG)(t.authored_at);
    return (0, r.jsx)(nr, {
        title: ed.intl.string(ec.default["t+b0rz"]),
        children: (0, r.jsxs)("div", {
            className: a$.r,
            children: [
                (0, r.jsxs)("div", {
                    className: a$.z,
                    children: [
                        (0, r.jsx)(y.E, { variant: "text-md/medium", children: t.subject }),
                        null != n.relative
                            ? (0, r.jsx)(y.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  title: n.absolute ?? void 0,
                                  children: n.relative,
                              })
                            : null,
                    ],
                }),
                null != l
                    ? (0, r.jsx)(S.$, {
                          variant: "secondary",
                          size: "sm",
                          text: ed.intl.string(ec.default.H8Jfhu),
                          onClick: l,
                      })
                    : null,
            ],
        }),
    });
}
var az = l(231483),
    aO = l(687966),
    aG = l(632015),
    aU = l(633018),
    aq = l(885574);
let aH = {
    automod: ec.default.DnWMLj,
    overlay: ec.default.liTNf3,
    widget: ec.default["EswAi+"],
    activity: ed.t.IC5Ann,
    commands: ec.default.w7JaEP,
    chat_bot: ec.default["5QSvrP"],
    bot: ec.default.VFWfz1,
};
var aB = l(176999),
    aK = (((n = {}).IMAGE = "image"), n),
    aV = (((a = {}).PRIVATE = "private"), (a.PUBLIC = "public"), a),
    aW = l(773669);
let aX = [],
    aJ = {};
function aQ(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function aY(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: aK.IMAGE,
        visibility: aV.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var aZ = l(127258),
    a0 = l(320095),
    a1 = l(963852),
    a2 = l(95701),
    a3 = l(889227),
    a4 = l(155718);
let a6 = ["command", "user_command", "message_command", "message"],
    a7 = new Set([a4.kc.CHAT, a4.kc.USER, a4.kc.MESSAGE]);
function a5(e) {
    return e.type ?? a4.kc.CHAT;
}
function a8(e) {
    return "launch" !== e.kind && a7.has(a5(e));
}
function a9(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function re(e, t) {
    let l = a6.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        n = [...l.filter((e) => !a9(e)), ...l.filter(a9)].slice(0, 3);
    for (let a of t || 1 === l.length ? e : []) {
        if (n.length >= 3) break;
        n.includes(a) || a9(a) || n.push(a);
    }
    return a6.flatMap((t) => e.filter((e) => e.kind === t && n.includes(e)));
}
let rt = new a2.nA({ id: "1337", guild_id: "1337", type: eb.rbe.GUILD_TEXT, name: "preview" });
function rl(e, t) {
    let {
            bot: l = !1,
            discriminator: n = "0000",
            enabled: a = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = (0, m.bG)([tJ.default], () => tJ.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            a && r?.username !== t && (0, tY.nj)(new a3.A({ id: e, username: t, discriminator: n, bot: l }));
        }, [a, r, e, t, n, l]),
        r
    );
}
let rn = /^@\S+/;
var ra = l(628284),
    rr = l(97808),
    ri = l(778712),
    rs = l(809115),
    ro = l(486020),
    ru = l(200700);
let rc = {
        alert: { label: () => ed.intl.string(ec.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => ed.intl.string(ec.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => ed.intl.string(ec.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => ed.intl.string(ec.default.RGzFNK), blockedStyle: !1 },
    },
    rd = {
        blocked: { label: () => ed.intl.string(ec.default.YdnZ8q), tone: "red" },
        alert: { label: () => ed.intl.string(ec.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => ed.intl.string(ec.default.RGzFNK), tone: "green" },
    },
    rm = ["blocked", "alert", "allowed"],
    rf = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
var rh = l(984097),
    rg = l(13673);
let rx = { blocked: az.ShieldIcon, alert: t4.BellIcon, allowed: ra.y },
    rp = {
        blurple: { text: "text-brand", icon: $.A.colors.TEXT_BRAND },
        red: { text: "text-feedback-critical", icon: $.A.colors.TEXT_FEEDBACK_CRITICAL },
        green: { text: "text-feedback-positive", icon: $.A.colors.TEXT_FEEDBACK_POSITIVE },
    };
function rv(e) {
    var t, l;
    let n,
        a,
        { example: i } = e,
        s =
            "" ===
            (a = [
                "timeout" !== (t = i).outcome || null == t.timeout_seconds
                    ? null
                    : ed.intl.formatToPlainString(ed.t["3LYql6"], {
                          duration:
                              ((l = t.timeout_seconds),
                              null != (n = (0, ru.getFriendlyDurationString)(l))
                                  ? n
                                  : l % 604800 == 0
                                    ? ed.intl.formatToPlainString(ed.t.EmoBD2, { weeks: l / 604800 })
                                    : l % 86400 == 0
                                      ? ed.intl.formatToPlainString(ed.t["k2UNz+"], { days: l / 86400 })
                                      : l % 3600 == 0
                                        ? ed.intl.formatToPlainString(ed.t.xCjYxK, { hours: l / 3600 })
                                        : l % 60 == 0
                                          ? ed.intl.formatToPlainString(ed.t.opVZ9q, { mins: l / 60 })
                                          : ed.intl.formatToPlainString(ed.t["4zv/jq"], { secs: l })),
                      }),
                i.reason,
            ]
                .filter((e) => null != e && "" !== e)
                .join(" "))
                ? null
                : a;
    return null == s
        ? null
        : (0, r.jsx)(y.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              lineClamp: 2,
              selectable: !0,
              children: s,
          });
}
function rj(e) {
    var t;
    let { example: l } = e,
        { label: n, blockedStyle: a } = rc[l.outcome];
    return (0, r.jsxs)("li", {
        className: o()(rh.nM, { [o()(rh.HV, rg.DX)]: a }),
        children: [
            (0, r.jsx)(N.A, { children: `${n()}: ` }),
            (0, r.jsx)("span", {
                className: rh.my,
                children: (0, r.jsx)(rr.eu, {
                    src: (0, ro.AE)(void 0, void 0),
                    size: ri._3.SIZE_24,
                    "aria-label": ed.intl.string(ec.default["1yI0xV"]),
                }),
            }),
            (0, r.jsxs)("div", {
                className: rh.fw,
                children: [
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = l.content), ad.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    (0, r.jsx)(rv, { example: l }),
                ],
            }),
        ],
    });
}
function rb(e) {
    let { group: t } = e,
        l = i.useId(),
        n = rd[t.section],
        a = rx[t.section],
        s = rp[n.tone];
    return (0, r.jsxs)("div", {
        className: rh.uW,
        children: [
            (0, r.jsxs)("div", {
                className: rh.bV,
                children: [
                    (0, r.jsx)(a, { size: "xs", color: s.icon, "aria-hidden": !0 }),
                    (0, r.jsx)(y.E, {
                        id: l,
                        variant: "text-xs/semibold",
                        color: s.text,
                        className: rh.a9,
                        children: n.label(),
                    }),
                ],
            }),
            (0, r.jsx)("ul", {
                className: rh.Ge,
                "aria-labelledby": l,
                children: t.examples.map((e, t) => (0, r.jsx)(rj, { example: e }, t)),
            }),
        ],
    });
}
function ry() {
    let { avatarSrc: e, eventHandlers: t } = (0, rs.a)(!0);
    return (0, r.jsx)("span", {
        className: rh.Gy,
        ...t,
        children: (0, r.jsx)(rr.eu, { src: e, size: ri._3.SIZE_16, "aria-label": ed.intl.string(ed.t.hG1StD) }),
    });
}
function rk(e) {
    var t;
    let { automod: l } = e;
    return (0, r.jsx)("div", {
        className: rh.K1,
        children: ((t = l.examples),
        rm
            .map((e) => ({ section: e, examples: t.filter((t) => rf[t.outcome] === e) }))
            .filter((e) => e.examples.length > 0)).map((e) => (0, r.jsx)(rb, { group: e }, e.section)),
    });
}
var rw = l(460905),
    rN = l(110384),
    rA = l(763754),
    rS = l(217424),
    rC = l(194085),
    rE = l(20851),
    rI = l(692508),
    rM = l(798819);
function rT(e) {
    let { item: t } = e,
        { iconLeft: l, icon: n } = t;
    return (0, r.jsxs)("div", {
        className: o()(rM.item, rM.labelContainer, rM.colorDefault, {
            [rM.focused]: !0 === t.highlighted,
            [rM.disabled]: !0 === t.muted,
        }),
        children: [
            null != l
                ? (0, r.jsx)("div", {
                      className: rM.iconContainerLeft,
                      children: (0, r.jsx)(l, { color: "currentColor", className: rM.icon }),
                  })
                : null,
            (0, r.jsx)("div", { className: o()(rM.label, rI.Gy), children: t.label }),
            null != n
                ? (0, r.jsx)("div", {
                      className: rM.iconContainer,
                      children: (0, r.jsx)(n, { color: "currentColor", className: rM.icon }),
                  })
                : null,
        ],
    });
}
function r_(e) {
    let { target: t, commandName: l, appIconSrc: n } = e,
        a = i.useMemo(
            () =>
                null != n
                    ? (e) => {
                          let { className: t } = e;
                          return (0, r.jsx)("img", { src: n, alt: "", className: o()(t, rI.ak) });
                      }
                    : void 0,
            [n],
        ),
        s =
            "message" === t
                ? { label: ed.intl.string(ed.t["5IEsGx"]), icon: rN.W, muted: !0 }
                : { label: ed.intl.string(ed.t.LYju5J), muted: !0 };
    return (0, r.jsx)("div", {
        className: o()(rM.menu, rI.MK),
        "aria-hidden": !0,
        children: (0, r.jsxs)("div", {
            className: rM.scroller,
            children: [
                (0, r.jsx)(rT, { item: s }),
                (0, r.jsx)("div", { className: rM.separator }),
                (0, r.jsx)(rT, { item: { label: l, iconLeft: a, highlighted: !0 } }),
            ],
        }),
    });
}
var rP = l(381941);
function rR() {}
function rL(e) {
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
        } = ((t = (0, m.bG)([tJ.default], () => tJ.default.getCurrentUser())),
        (l = (0, m.bG)([eE.Ay], () => eE.Ay.getProject(x))),
        (n = l?.application_id),
        (a = (0, m.bG)([lf.A], () => lf.A.getApplication(n)?.getIconURL(80) ?? null, [n])),
        (s = l?.name ?? ed.intl.string(ec.default.JEYq8M)),
        (u = (0, m.bG)([tJ.default], () => (null != n ? tJ.default.getUser(n) : void 0), [n])),
        (d = rl("31337", s, { bot: !0, enabled: !(c = u?.bot === !0) })),
        (f = c ? u : d),
        (h = rl("31338", ed.intl.string(ec.default["9iAOsw"]), { discriminator: "0003" })),
        (g = rl("31339", (0, tQ.mG)(t) ?? "", { enabled: null != t })),
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
                                      i = (0, a0.rh)({
                                          ...(0, a1.Ay)({
                                              channelId: rt.id,
                                              content: e,
                                              author: t,
                                              type: n ?? eb.lAJ.DEFAULT,
                                          }),
                                          id: r,
                                          state: eb.cmJ.SENT,
                                          ...(null != l
                                              ? {
                                                    interaction: {
                                                        id: r,
                                                        name: l,
                                                        type: aZ.G.APPLICATION_COMMAND,
                                                        user: (0, a1.Vi)(s),
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
                                              messageType: eb.lAJ.CHAT_INPUT_COMMAND,
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
                                                  messageType: eb.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((n = t.user), n.trim().replace(rn, `<@${i.id}>`)), s),
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
                                  targetMessage: ed.intl.string(ec.default["y+QYes"]),
                                  memberMessage: ed.intl.string(ec.default.BUTRDc),
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
              className: o()(rI.TE, `group-spacing-${rP.ES}`),
              children: v.map((e) => {
                  let { key: t, record: l, isCommandReply: n, menu: a } = e;
                  return (0, r.jsxs)(
                      "li",
                      {
                          className: null != a ? rI.Rz : void 0,
                          children: [
                              (0, r.jsx)(rE.A, {
                                  message: l,
                                  channel: rt,
                                  author: (0, rA.FT)(l.author, rt),
                                  isGroupStart: !0,
                                  avatarOverride: l.author.bot ? (j ?? void 0) : void 0,
                                  childrenExecutedCommand: n ? (0, r.jsx)(rS.A, { message: l, channel: rt }) : void 0,
                                  usernameClassName: a?.target === "user" ? rI.Ct : void 0,
                                  disableInteraction: !0,
                              }),
                              a?.target === "message"
                                  ? (0, r.jsx)("div", {
                                        className: rI.S3,
                                        inert: !0,
                                        "aria-hidden": !0,
                                        children: (0, r.jsxs)(rC.Ay, {
                                            children: [
                                                (0, r.jsx)(rC.qv, {
                                                    label: ed.intl.string(ed.t.lfIHs4),
                                                    icon: rw.n,
                                                    onClick: rR,
                                                }),
                                                (0, r.jsx)(rC.qv, {
                                                    label: ed.intl.string(ed.t["5IEsGx"]),
                                                    icon: rN.W,
                                                    onClick: rR,
                                                }),
                                                (0, r.jsx)(rC.qv, {
                                                    label: ed.intl.string(ed.t["UKOtz+"]),
                                                    icon: lt.MoreHorizontalIcon,
                                                    selected: !0,
                                                    onClick: rR,
                                                }),
                                            ],
                                        }),
                                    })
                                  : null,
                              null != a
                                  ? (0, r.jsx)("div", {
                                        className: "user" === a.target ? rI.ET : rI.je,
                                        inert: !0,
                                        children: (0, r.jsx)(r_, {
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
var rD = l(633075),
    r$ = l(946356),
    rF = l(58216),
    rz = l(27399);
function rO(e) {
    let { applicationId: t, rendererProps: l } = e,
        n = (0, m.bG)([tJ.default], () => tJ.default.getCurrentUser()),
        a = i.useMemo(() => new rD.R({ applicationId: t }), [t]);
    return null == n
        ? null
        : (0, r.jsx)("div", {
              className: rz.H,
              children: (0, r.jsx)(r$.A.Overlay, {
                  className: rz.w,
                  children: (0, r.jsx)(rF.A, {
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
var rG = l(443863);
let rU = {
    automod: az.ShieldIcon,
    overlay: aO.GameControllerIcon,
    widget: aG.f,
    activity: lk.k,
    commands: aU.k,
    chat_bot: h.ChatIcon,
    bot: lw.RobotIcon,
};
function rq(e) {
    let { label: t, icon: l, info: n, children: a } = e;
    return (0, r.jsxs)("section", {
        className: rG.uW,
        children: [
            (0, r.jsxs)("span", {
                className: rG.a9,
                children: [
                    l,
                    (0, r.jsx)(y.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }),
                    n,
                ],
            }),
            a,
        ],
    });
}
function rH(e) {
    let { text: t, label: l } = e;
    return (0, r.jsx)(w.m, {
        text: t,
        children: (0, r.jsx)(k.D, {
            className: rG.bk,
            "aria-label": l,
            children: (0, r.jsx)(aq.CircleInformationIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
function rB(e) {
    let { label: t, names: l } = e;
    return 0 === l.length
        ? null
        : (0, r.jsx)(rq, {
              label: t,
              children: (0, r.jsx)("div", {
                  className: rG.Ip,
                  children: l.map((e) =>
                      (0, r.jsx)(
                          "span",
                          {
                              className: rG.jw,
                              children: (0, r.jsx)(y.E, {
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
function rK(e) {
    let { tags: t } = e;
    return (0, r.jsx)("span", {
        className: rG.K2,
        children: t.map((e) => {
            let t = rU[e];
            return (0, r.jsxs)(
                "span",
                {
                    className: rG.L6,
                    children: [
                        (0, r.jsx)(t, {
                            size: "custom",
                            width: 16,
                            height: 16,
                            color: "currentColor",
                            "aria-hidden": !0,
                        }),
                        (0, r.jsx)(y.E, {
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            tag: "span",
                            children: ed.intl.string(aH[e]),
                        }),
                    ],
                },
                e,
            );
        }),
    });
}
function rV(e) {
    let { projectId: t, design: l } = e,
        { id: n } = l,
        { src: a, gone: s, handleError: o } = nJ(t, n),
        u = ed.intl.string(ec.default["3/aHX6"]),
        c = i.useCallback(() => {
            (0, er.PK)(t, n).then(
                (e) => {
                    (0, nP.R)({
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
        : (0, r.jsx)(rq, {
              label: ed.intl.string(ec.default.X15LLY),
              info: (0, r.jsx)(rH, {
                  text: ed.intl.string(ec.default.nR4B8P),
                  label: ed.intl.string(ec.default.nc0SNY),
              }),
              children: (0, r.jsx)(k.D, {
                  className: rG.xX,
                  onClick: c,
                  "aria-label": ed.intl.string(ec.default.TvAPIm),
                  children: null != a ? (0, r.jsx)("img", { src: a, alt: u, className: rG.sN, onError: o }) : null,
              }),
          });
}
function rW(e) {
    let t,
        l,
        { projectId: n, proposal: a, version: s, onApprove: o } = e,
        { automod: u } = a,
        { botInteraction: c, botExchanges: d } =
            ((t = (function (e) {
                if (null != e.bot) return e.bot.interaction;
                let t = e.commands.some(a8),
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
                              let s = e.commands.filter(a8).map((e) =>
                                      (function (e, t) {
                                          let l = e.description?.trim() ?? "",
                                              n = "" !== l ? l : t.reply;
                                          switch (a5(e)) {
                                              case a4.kc.USER:
                                                  return { kind: "user_command", user: e.name, bot: n };
                                              case a4.kc.MESSAGE:
                                                  return { kind: "message_command", user: e.name, bot: n };
                                              default:
                                                  return { kind: "command", user: `/${e.name}`, bot: n };
                                          }
                                      })(e, l),
                                  ),
                                  o = "messages" === t ? [] : s.filter(a9),
                                  u = r.length > 0 ? re([...r, ...o], !0) : re("both" === t ? [...s, i] : s, !1);
                              return u.length > 0 ? u : [a];
                          })(a, t, {
                              message: ed.intl.string(ec.default.J7qggf),
                              reply: ed.intl.string(ec.default.nqYtiy),
                              event: ed.intl.string(ec.default["05lU9W"]),
                          }),
                [a, t],
            )),
            { botInteraction: t, botExchanges: l }),
        f = (function (e, t) {
            let { widget_config: l, widget_preview: n } = t,
                a = (0, m.bG)([aW.default], () => aW.default.locale),
                r = (0, m.bG)([eE.Ay], () => {
                    let t = eE.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [l, n] = i.useState(aJ);
                    return (
                        i.useEffect(() => {
                            let l = Object.entries(t ?? {});
                            if (0 === l.length) return;
                            let a = !1;
                            return (
                                Promise.all(
                                    l.map((t) => {
                                        let [l, n] = t;
                                        return (0, er.PK)(e, n.id).then(
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
                                                          ...aQ(l),
                                                          ...(null != l.fallback ? { fallback: aQ(l.fallback) } : {}),
                                                      };
                                                  t[l] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(l));
                                  let r = aB.uW.safeParse(a);
                                  if (!r.success) return null;
                                  let i = r.data;
                                  return null == i[tA.m.WIDGET_TOP] || null == i[tA.m.WIDGET_BOTTOM]
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
                                                                    type: aB.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof r
                                                                ? (a[e] = { type: aB.oG.NUMBER, value: r })
                                                                : (a[e] = { type: aB.oG.STRING, value: r });
                                                    return a;
                                                })(e, t, l),
                                                applicationAssets: Object.keys(l).map(aY),
                                                getApplicationAssetUrl: (e) => l[e.key] ?? "",
                                                localizedStrings: aX,
                                            },
                                        };
                              })(l, n, s, a),
                    [l, n, s, a],
                );
            return i.useMemo(() => (null == r || null == o ? null : { applicationId: r, rendererProps: o }), [r, o]);
        })(n, a),
        h = s?.superseded === !0,
        g = a.what_changed?.trim() ?? "";
    return (0, r.jsxs)(no, {
        title:
            h && null != s
                ? ed.intl.formatToPlainString(ec.default.YZ3qJs, { version: s.version })
                : ed.intl.string(ec.default["3b6e7o"]),
        meta: h
            ? (0, r.jsx)(ns, { children: ed.intl.string(ec.default.hF2c41) })
            : (0, r.jsx)(rK, {
                  tags: (function (e, t) {
                      if (null != e.automod) return ["automod"];
                      let l = [];
                      return (e.supported_surfaces?.includes(ee.q7.OVERLAY) === !0 && l.push("overlay"),
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
        showLabel: ed.intl.string(ec.default.yD8EJS),
        hideLabel: ed.intl.string(ec.default.nSPGNb),
        bodyClassName: rG.rf,
        "data-conjure-plan-card": !0,
        children: [
            "" !== g
                ? (0, r.jsx)(rq, {
                      label: ed.intl.string(ec.default.iNS4dl),
                      children: (0, r.jsx)(y.E, {
                          variant: "experimental/body-md/normal",
                          color: "text-default",
                          selectable: !0,
                          children: g,
                      }),
                  })
                : null,
            (0, r.jsx)(y.E, {
                variant: "experimental/body-md/normal",
                color: "text-default",
                selectable: !0,
                children: a.summary,
            }),
            null != u && u.examples.length > 0
                ? (0, r.jsx)(rq, {
                      label: ed.intl.string(ec.default.z4ZKYG),
                      icon: (0, r.jsx)(ry, {}),
                      info: (0, r.jsx)(rH, {
                          text: ed.intl.string(ec.default.bo4MOx),
                          label: ed.intl.string(ec.default.VPLNot),
                      }),
                      children: (0, r.jsx)(rk, { automod: u }),
                  })
                : null,
            null == u && null != a.design_image ? (0, r.jsx)(rV, { projectId: n, design: a.design_image }) : null,
            d.length > 0
                ? (0, r.jsx)(rq, {
                      label: ed.intl.string(ec.default.sA1lTv),
                      info: (0, r.jsx)(rH, {
                          text: ed.intl.string(ec.default.NnmbJu),
                          label: ed.intl.string(ec.default.KsqQJX),
                      }),
                      children: (0, r.jsx)(rL, { projectId: n, exchanges: d }),
                  })
                : null,
            null == u && null != f
                ? (0, r.jsx)(rq, {
                      label: ed.intl.string(ec.default.ove4zH),
                      info: (0, r.jsx)(rH, {
                          text: ed.intl.string(ec.default.XcIrHx),
                          label: ed.intl.string(ec.default["TwT+ht"]),
                      }),
                      children: (0, r.jsx)(rO, { ...f }),
                  })
                : null,
            a.changes.length > 0
                ? (0, r.jsx)(rq, {
                      label: ed.intl.string(ec.default["5+mG1z"]),
                      children: (0, r.jsx)("ul", {
                          className: rG.p_,
                          children: a.changes.map((e, t) =>
                              (0, r.jsx)(
                                  "li",
                                  {
                                      className: rG.Aw,
                                      children: (0, r.jsx)(y.E, {
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
                ? (0, r.jsx)(rq, {
                      label: ed.intl.string(ed.t["0hKkS+"]),
                      children: (0, r.jsx)("ul", {
                          className: rG.p_,
                          children: a.commands.map((e, t) =>
                              (0, r.jsxs)(
                                  "li",
                                  {
                                      className: rG.uX,
                                      children: [
                                          (0, r.jsxs)(y.E, {
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
                                          (0, r.jsx)(y.E, {
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
            (0, r.jsx)(rB, { label: ed.intl.string(ec.default["2UbW6r"]), names: a.bot_permissions ?? [] }),
            (0, r.jsx)(rB, { label: ed.intl.string(ec.default["7TKfpj"]), names: a.privileged_intents ?? [] }),
            null == o || h
                ? null
                : (0, r.jsxs)("div", {
                      className: rG.o1,
                      children: [
                          (0, r.jsx)(S.$, {
                              variant: "primary",
                              size: "sm",
                              text: ed.intl.string(ec.default["6S+wRM"]),
                              onClick: o,
                          }),
                          (0, r.jsx)(y.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              tag: "span",
                              children: ed.intl.string(ec.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
function rX(e) {
    return null != e && e.status?.state === "unpublished";
}
let rJ = new WeakMap();
function rQ(e) {
    let { publish: t } = e,
        l = t.guildId,
        n = (0, m.bG)([Y.A], () => (null == l ? null : Y.A.getGuild(l)));
    return (0, r.jsx)(lb.B, {
        gap: 8,
        align: "start",
        children: (0, r.jsxs)(lb.B, {
            direction: "horizontal",
            gap: 8,
            align: "center",
            children: [
                (0, r.jsx)(w.m, {
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
                null != n
                    ? (0, r.jsxs)(lb.B, {
                          direction: "horizontal",
                          gap: 4,
                          align: "center",
                          children: [
                              (0, r.jsx)(y.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: ed.intl.string(ec.default["+HGTlC"]),
                              }),
                              (0, r.jsx)(eB.Ay, { guild: n, size: eB.Ay.Sizes.SMOL }),
                              (0, r.jsx)(y.E, {
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
function rY(e) {
    let { projectId: t } = e,
        l = (0, lo.Ay)(t);
    return null != l && rX(l) ? (0, r.jsx)(rQ, { publish: l }) : null;
}
var rZ = l(478016),
    r0 = l(989271);
function r1(e) {
    let { idea: t, selected: l, onPick: n } = e,
        a = i.useId(),
        s = null == n;
    return (0, r.jsxs)(k.D, {
        className: o()(r0.nM, { [r0.f1]: s, [r0.CZ]: l }),
        onClick: s ? void 0 : () => n(t),
        "aria-label": ed.intl.formatToPlainString(ec.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : a,
        "aria-disabled": s,
        "aria-pressed": l,
        children: [
            (0, r.jsxs)("div", {
                className: r0.jo,
                children: [
                    l
                        ? (0, r.jsx)(rZ.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: r0.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, r.jsx)(y.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: r0.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, r.jsx)(y.E, {
                      tag: "div",
                      id: a,
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function r2(e) {
    let { ideas: t, pickedIdeaIds: l, onPick: n } = e,
        [a, s] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), n?.(e));
            },
            [n],
        );
    return (0, r.jsx)(nr, {
        title: ed.intl.string(ec.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, r.jsx)(
                r1,
                { idea: e, selected: a.has(e.id) || l?.has(e.id) === !0, onPick: null == n ? void 0 : o },
                e.id,
            ),
        ),
    });
}
function r3(e) {
    let { onAsk: t } = e;
    return (0, r.jsx)(lb.B, {
        align: "start",
        "data-conjure-ideas-offer": !0,
        children: (0, r.jsx)(S.$, {
            variant: "secondary",
            size: "sm",
            disabled: null == t,
            onClick: t,
            text: ed.intl.string(ec.default["U/bLzU"]),
        }),
    });
}
var r4 = l(530557),
    r6 = l(872162);
function r7(e, t) {
    return { cardId: e, status: "pending" === t ? null : t };
}
var r5 = l(202723);
function r8(e) {
    let { projectId: t, cardId: n, request: a, status: s, awaiting: u } = e,
        c = i.useCallback(() => {
            (0, tt.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("291953"), l.e("408337")]).then(l.bind(l, 789864));
                return (l) => (0, r.jsx)(e, { ...l, projectId: t, request: a });
            });
        }, [t, a]),
        d = i.useMemo(() => a.fields.map((e) => ({ id: e.name, label: e.label, icon: r4.R })), [a.fields]),
        m = (function (e, t) {
            let [l, n] = i.useState(() => r7(e, t));
            return l.cardId !== e || (null == l.status && "pending" !== t)
                ? (n(r7(e, t)), !1)
                : null != l.status && t !== l.status;
        })(n, s),
        f = o()(r5.Lo, { [r5.jY]: m });
    return "superseded" === s
        ? (0, r.jsx)(
              "article",
              {
                  className: f,
                  children: (0, r.jsx)(y.E, {
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      tag: "span",
                      children: ed.intl.string(ec.default.CTxtdV),
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
                        (0, r.jsx)(y.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            tag: "span",
                            children: ed.intl.string(ec.default.HCQvpO),
                        }),
                        (0, r.jsx)(r6.C, { label: ed.intl.string(ec.default.HCQvpO), size: "xs", items: d }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, r.jsx)(
                  "article",
                  {
                      className: r5.Lo,
                      children: (0, r.jsx)(r6.C, { label: ed.intl.string(ec.default.HCQvpO), size: "xs", items: d }),
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
                                className: r5.$h,
                                children: [
                                    (0, r.jsx)("span", {
                                        className: r5.c9,
                                        "aria-hidden": !0,
                                        children: (0, r.jsx)(ra.y, {
                                            size: "xs",
                                            color: $.A.colors.ICON_FEEDBACK_POSITIVE,
                                        }),
                                    }),
                                    (0, r.jsx)(y.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-feedback-positive",
                                        tag: "span",
                                        children: ed.intl.string(ec.default.sfp7Up),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(r6.C, { label: ed.intl.string(ec.default.sfp7Up), size: "xs", items: d }),
                        ],
                    },
                    s,
                )
              : (0, r.jsxs)("article", {
                    className: r5.Lo,
                    children: [
                        (0, r.jsx)(y.E, {
                            variant: "text-xs/semibold",
                            color: null != u ? "text-brand" : "text-muted",
                            tag: "span",
                            children: ed.intl.string(null != u ? ec.default.O0QIqj : ec.default.HCQvpO),
                        }),
                        (0, r.jsx)(y.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            selectable: !0,
                            children: null != a.note && "" !== a.note ? a.note : ed.intl.string(ec.default.MPGSHL),
                        }),
                        (0, r.jsx)(r6.C, { label: ed.intl.string(ec.default.HCQvpO), size: "xs", items: d }),
                        (0, r.jsx)("div", {
                            className: r5.sq,
                            children: (0, r.jsx)(S.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: c,
                                text: ed.intl.string(ec.default.EK8tKY),
                            }),
                        }),
                    ],
                });
}
var r9 = l(919790),
    ie = l(971824),
    it = l(162052),
    il = l(165648);
function ia(e) {
    let t = ay(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let l = null != e.task.helperMark ? ab(e.task.helperMark) : void 0,
            n = l ?? t.get(e.taskId);
        return null == n
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: n,
                      name: null != l && null != e.task.helperName ? e.task.helperName : n.name,
                      task: af(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function ir(e) {
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
        p = i.useMemo(() => (0, l8.Jf)(l, n), [l, n]),
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
            className: nx.pj,
            "data-live": !1,
            children: (0, r.jsx)(nl.A, {
                glyph: (0, r.jsx)(ac.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: ed.intl.string(ec.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = n ? void 0 : (x ?? (h ? (p.turn?.durationMs ?? o) : void 0)),
        b = f ? ((0, l8.lt)(l) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = ay(k.map((e) => e.taskId)),
        N = !g && (n || k.some((e) => "running" === e.task.status)),
        A = ia(k);
    return (0, r.jsxs)("ol", {
        className: nx.pj,
        "data-live": N,
        children: [
            (0, r.jsx)(ne.A, {
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
                let n = null != e.task.helperMark ? ab(e.task.helperMark) : void 0,
                    a = n ?? w.get(e.taskId);
                return null == a
                    ? null
                    : (0, r.jsx)(
                          aN,
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
            (0, r.jsx)(aD, { projectId: t, steps: l, tree: p, segment: m }),
            y
                ? (0, r.jsx)("li", {
                      className: nx.YO,
                      children: (0, r.jsx)(nh, { todos: b, provisional: d, agents: A, live: a, superseded: s }),
                  })
                : null,
        ],
    });
}
function ii(e) {
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
            onApprovePlan: j,
            sideReply: b = !1,
            sideReplyAcknowledges: k,
            hoistedProse: w = !1,
            hoistedAttachmentsHost: N,
            restoreProposal: A,
            onRestoreProposal: S,
        } = e,
        C = i.useMemo(
            () => ah({ steps: l, content: n, hasProposal: null != a, hasAttachments: null != c && c.length > 0 }),
            [l, n, a, c],
        ),
        { streamed: E, lastStreamedMessage: I, showsClosingMessage: M, closingContent: T } = C,
        _ = (w ? N : void 0) ?? C.attachmentsHost,
        P = M && !w,
        R = null == c ? null : (0, r.jsx)(r9.A, { projectId: t, attachments: c }),
        L = null == R ? null : (0, r.jsx)("div", { className: nx.MT, children: R }),
        D = b
            ? (0, r.jsx)(y.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return ed.intl.string(ec.default.Mv5OmK);
                          case "queued":
                              return ed.intl.string(ec.default["Po/2mi"]);
                          case "restarting":
                              return ed.intl.string(ec.default.Vj0woh);
                          default:
                              return ed.intl.string(ec.default.gY3L8p);
                      }
                  })(k),
              })
            : null;
    return (0, r.jsxs)("div", {
        className: nx.ue,
        children: [
            E.length > 0 && !w
                ? (0, r.jsx)("ol", {
                      className: nx.dO,
                      children: E.filter((e) => "todos" !== e.type).map((e) =>
                          (0, r.jsxs)(
                              "li",
                              {
                                  className: nx.DV,
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: il.PT,
                                          children: ad.A.parse(e.content, !0, {
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
                ? (0, r.jsx)(rW, { projectId: t, proposal: a, version: s, onApprove: j })
                : P
                  ? (0, r.jsxs)("div", {
                        className: o()(nx.ky, it.XR),
                        children: [
                            (0, r.jsx)("div", {
                                className: o()(il.PT, nx.cW),
                                children: ad.A.parse(T, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === _ ? L : null,
                            D,
                        ],
                    })
                  : null,
            null != d
                ? (0, r.jsx)("div", {
                      className: o()(nx.ky, it.XR, { [ie.O]: null != f && "open" === h }),
                      children: (0, r.jsx)(r8, {
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
                      className: o()(nx.ky, it.XR),
                      children: (0, r.jsx)(at, { projectId: t, request: g }),
                  })
                : null,
            "standalone" !== _ && ("closing" !== _ || P) ? null : R,
            null != x ? (0, r.jsx)(rY, { projectId: t }) : null,
            null != u && u.length > 0 ? (0, r.jsx)(r2, { ideas: u, pickedIdeaIds: v, onPick: p }) : null,
            null != A ? (0, r.jsx)(aF, { proposal: A, onRestore: S }) : null,
            P ? null : D,
        ],
    });
}
var is = l(146806),
    io = l(477262),
    iu = l(432017),
    ic = l(475358),
    id = l(717400),
    im = l(663341),
    ih = l(559647),
    ig = l(775602),
    ix = l(234320),
    ip = l(285796),
    iv = l(922329);
async function ij(e) {
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
var ib = l(153171);
let iy = ee.lN;
function ik(e, t, l, n) {
    let a = nO(e, t).length;
    !(function (e, t, l) {
        if (0 === l.length) return;
        let n = l.map((e) => {
            let { draft: t, upload: l } = e;
            return { draft: { ...t, localId: n$++ }, upload: l };
        });
        for (let { draft: l, upload: a } of (nG(e, t, [
            ...nO(e, t),
            ...n.map((e) => {
                let { draft: t } = e;
                return t;
            }),
        ]),
        n))
            a?.().then(
                (n) => {
                    if ("errorText" in n) return void nU(e, t, l.localId, { status: "error", errorText: n.errorText });
                    let { converted: a, ...r } = n;
                    nU(e, t, l.localId, { ...a, status: "ready", ref: r })
                        ? setTimeout(
                              () =>
                                  nU(e, t, l.localId, {
                                      status: "error",
                                      errorText: ed.intl.string(ec.default.E7dS5n),
                                  }),
                              ee.o2 - 3e5,
                          )
                        : nq(e, r.id);
                },
                (n) => {
                    (console.error("[vibegrations] attachment upload failed", n),
                        nU(e, t, l.localId, { status: "error", errorText: ed.intl.string(ec.default["kUw/b1"]) }));
                },
            );
    })(
        e,
        t,
        l.map((e) => {
            let t = "" === e.type ? "application/octet-stream" : e.type,
                l = { name: e.name, contentType: t };
            if (a++ >= iy)
                return {
                    draft: {
                        ...l,
                        status: "error",
                        errorText: ed.intl.formatToPlainString(ec.default.Q0aCVZ, { count: iy }),
                    },
                };
            if (!(0, ee.Oq)(e.size, t))
                return "image/png" === t && e.size <= ee.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas
                    ? {
                          draft: { ...l, status: "uploading", previewUrl: URL.createObjectURL(e) },
                          upload: async () => {
                              let l = await ij(e).catch(() => null);
                              return null != l && (0, ee.Oq)(l.size, l.type)
                                  ? { ...(await n(l)), converted: { name: l.name, contentType: l.type } }
                                  : { errorText: nK(t) };
                          },
                      }
                    : { draft: { ...l, status: "error", errorText: nK(t) } };
            let r = ee.XB.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...l, status: "uploading", previewUrl: r }, upload: () => n(e) };
        }),
    );
}
function iw(e) {
    let { projectId: t, surface: l, onUploadFile: n } = e,
        a = nF.useState((e) => nz(e, t, l)),
        r = i.useCallback((e) => ik(t, l, e, n), [t, l, n]),
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
                null != (a = (n = nO(t, l)).find((t) => t.localId === e)) &&
                    (nH(t, a),
                    nG(
                        t,
                        l,
                        n.filter((t) => t.localId !== e),
                    ));
            },
            [t, l],
        ),
        u = i.useCallback(() => nW(t, l), [t, l]);
    return {
        drafts: a,
        addFiles: r,
        pasteFiles: s,
        removeDraft: o,
        settled: a.every((e) => "ready" === e.status),
        takeRefs: u,
    };
}
function iN(e) {
    let { draft: t, onRemove: l } = e;
    return (0, r.jsxs)(iv.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, r.jsx)(A.y, { type: A.t.SPINNING_CIRCLE_SIMPLE, className: ib.Rk }) : null,
            (0, r.jsx)("button", {
                type: "button",
                className: ib.o1,
                onClick: () => l(t.localId),
                "aria-label": ed.intl.string(ec.default.Slam9g),
                children: (0, r.jsx)(ip.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var iA = l(497437);
let iS = [
        {
            id: "add-images-videos",
            label: ec.default["51+9lc"],
            icon: io.s,
            accept: "image/*,video/*,.png,.jpg,.jpeg,.gif,.webp,.avif,.heic,.heif,.svg,.bmp,.mp4,.m4v,.mov,.webm,.mkv,.avi",
        },
        {
            id: "add-sounds",
            label: ec.default["10ljr2"],
            icon: iu.T,
            accept: "audio/*,.mp3,.wav,.ogg,.oga,.opus,.m4a,.aac,.flac,.weba,.webm,.aif,.aiff,.mid,.midi",
        },
        { id: "add-other-files", label: ec.default.aotDee, icon: ea.H, accept: "" },
    ],
    iC = "text-md/normal",
    iE = null;
function iI(e) {
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
                frontFrom: 1e3 * (0, is._R)(m),
                frontTo: 1e3 * (0, is._R)(f),
                backFrom: 1e3 * (0, is.T)(m),
                backTo: 1e3 * (0, is.T)(f),
            });
        }
        let a = new ResizeObserver(n);
        return (n(), a.observe(e), a.observe(t), null != c.current && a.observe(c.current), () => a.disconnect());
    }, [t]),
        i.useEffect(() => {
            d.current = c.current?.offsetWidth ?? 0;
        }, [t]));
    let [j, b] = i.useState(0),
        [k, w] = i.useState(null),
        N = i.useRef(!1),
        A = i.useCallback(() => {
            (w(N.current ? (l ? "through" : "out") : l ? "in" : null), b((e) => e + 1));
        }, [l]);
    i.useEffect(() => {
        N.current = l;
    }, [l, t]);
    let S = "in" === k ? p.backFrom : p.frontFrom,
        C = "out" === k ? p.frontTo : p.backTo,
        E = (0, m.bG)([ig.Ay], () => ig.Ay.useReducedMotion),
        I = t === ed.intl.string(ec.default.Zc7gML),
        M = a === t && I;
    function T(e, t, l) {
        let n = null != l;
        return (0, r.jsx)("span", {
            ref: l,
            className: o()(iA.VT, { [iA.qk]: n }),
            style: n
                ? {
                      insetInlineStart: f,
                      "--custom-cap-wipe-delay": `${S}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, C - S)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": n && j > 0 && null != k ? j % 2 : void 0,
            "data-wipe-kind": n ? (k ?? void 0) : void 0,
            children: (0, r.jsx)(ic.e, { shortcut: "tab", className: iA.xT, keyClassName: e }),
        });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eL.o, {
                text: t,
                variant: iC,
                delay: null,
                duration: 1e3,
                trailingWidth: g,
                className: o()(iA.xM, { [iA.s2]: n }),
                onStart: A,
                onComplete: () => s(t),
            }),
            T(iA.IS, l || (!E && "out" === k), u),
            (0, r.jsx)("span", {
                ref: c,
                className: iA.QI,
                "aria-hidden": !0,
                children: (0, r.jsx)(y.E, { variant: iC, tag: "span", children: t }),
            }),
            M
                ? (0, r.jsxs)("span", {
                      className: iA.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, r.jsx)(y.E, { variant: iC, tag: "span", className: iA.xM, children: t }),
                          T(iA.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let iM = i.memo(function (e) {
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
            [b, y] = i.useState(() => ao.getDraft(t)),
            k = i.useCallback(
                (e) => {
                    ((0, eC.I$)(t, e), y(e));
                },
                [t],
            ),
            A = "" !== b.trim();
        i.useEffect(() => p?.(A), [A, p]);
        let [S, C] = i.useState(t);
        S !== t && (C(t), y(ao.getDraft(t)));
        let E = (0, m.bG)([ig.Ay], () => ig.Ay.isSubmitButtonEnabled),
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
            } = iw({ projectId: t, surface: "chat", onUploadFile: c }),
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
                    null == iE && (iE = document.createElement("canvas").getContext("2d"));
                    let i = iE;
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
                })(X.current?.querySelector("textarea") ?? null, eo.current, b);
                ("" !== t && G(t), k(""));
            }, [z, b, o, $, k]),
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
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), k(B));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != d && (e.preventDefault(), d());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), U());
                },
                [U, d, a, u, I, H, B, k],
            ),
            V = i.useCallback(
                (e) => {
                    l && R(e);
                },
                [l, R],
            );
        (0, ix.Vo)({
            event: eb.jej.GLOBAL_CLIPBOARD_PASTE,
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
            [Y, Z] = i.useState(0),
            [ee, ea] = i.useState(!1);
        i.useEffect(() => {
            if (0 === b.length) return void ea(!1);
            let e = X.current?.querySelector("textarea");
            if (null != e) {
                let t = iP(e);
                null != t && Z(t);
            }
            ea(!0);
            let t = setTimeout(() => ea(!1), iT);
            return () => clearTimeout(t);
        }, [b]);
        let er = i.useMemo(() => ({ "--custom-glow-x": `${Y}px` }), [Y]),
            ei = ee ? ` ${iA.EB}` : "",
            es = s
                ? ed.intl.string(ec.default.qqlUiW)
                : n
                  ? ed.intl.string(ec.default.mPB3eo)
                  : l
                    ? x
                        ? ed.intl.string(ec.default.knUjL3)
                        : g
                          ? ed.intl.string(ec.default.IevBEw)
                          : ed.intl.string(a ? ec.default["0BJa/0"] : ec.default.TEeU7z)
                    : ed.intl.string(ec.default.zZ9NgM),
            eo = i.useRef(0),
            eu = i.useRef(null),
            em = i.useCallback((e) => {
                if ((eu.current?.disconnect(), null == e)) return;
                eo.current = e.clientWidth;
                let t = new ResizeObserver(() => {
                    eo.current = e.clientWidth;
                });
                (t.observe(e), (eu.current = t));
            }, []),
            ef = i.useId(),
            eh = null != B,
            eg = O ?? B ?? es,
            ex = "" === b && "" !== eg;
        return (0, r.jsxs)("form", {
            onSubmit: q,
            className: iA.DA,
            children: [
                _.length > 0
                    ? (0, r.jsx)("div", {
                          className: iA.lN,
                          children: _.map((e) => (0, r.jsx)(iN, { draft: e, onRemove: L }, e.localId)),
                      })
                    : null,
                (0, r.jsx)("span", { className: `${iA.wg} ${iA.LP}${ei}`, style: er, "aria-hidden": !0 }),
                (0, r.jsx)("span", { className: `${iA.wg} ${iA.L3}${ei}`, style: er, "aria-hidden": !0 }),
                (0, r.jsxs)("div", {
                    className: iA.VA,
                    ref: X,
                    children: [
                        (0, r.jsx)("input", {
                            ref: T,
                            type: "file",
                            multiple: !0,
                            onChange: W,
                            className: iA.nY,
                            tabIndex: -1,
                            "aria-hidden": !0,
                        }),
                        (0, r.jsx)(et.Y, {
                            targetElementRef: J,
                            position: "top",
                            align: "left",
                            animation: et.Y.Animation.NONE,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, r.jsx)(el.W, {
                                    "data-menu-migrated": !0,
                                    navId: "conjure-composer-attach",
                                    "aria-label": ed.intl.string(ed.t.d56gCa),
                                    onClose: t,
                                    onSelect: t,
                                    children: (0, r.jsxs)(en.rX, {
                                        children: [
                                            iS.map((e) =>
                                                (0, r.jsx)(
                                                    en.Dr,
                                                    {
                                                        id: e.id,
                                                        label: ed.intl.string(e.label),
                                                        iconLeft: e.icon,
                                                        leadingAccessory: { type: "icon", icon: e.icon },
                                                        action: () => Q(e.accept),
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                            null != f
                                                ? (0, r.jsx)(en.Dr, {
                                                      id: "import-project",
                                                      label: ed.intl.string(ec.default["p/k5i7"]),
                                                      iconLeft: id.q,
                                                      leadingAccessory: { type: "icon", icon: id.q },
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
                                    className: `${iA.Y0} ${iA.nu}`,
                                    disabled: !l,
                                    "aria-label": ed.intl.string(ed.t.d56gCa),
                                    "aria-haspopup": "menu",
                                    "aria-expanded": n,
                                    children: (0, r.jsx)(im.PlusLargeIcon, {
                                        size: "refresh_sm",
                                        color: "currentColor",
                                        className: iA.Qu,
                                    }),
                                });
                            },
                        }),
                        ex
                            ? (0, r.jsx)("div", {
                                  ref: em,
                                  className: iA.ar,
                                  "aria-hidden": "true",
                                  children: (0, r.jsx)(iI, { text: eg, offering: eh && null == O, typed: null != O }),
                              })
                            : null,
                        (0, r.jsx)(ny.y, {
                            value: b,
                            onChange: (e) => k(e.currentTarget.value),
                            onKeyDown: K,
                            onPaste: V,
                            placeholder: ex ? "" : es,
                            disabled: !l,
                            "aria-label": ed.intl.string(ec.default.ldNl9x),
                            "aria-describedby": ex ? ef : void 0,
                            rows: 1,
                            className: iA.jp,
                        }),
                        ex ? (0, r.jsx)(N.A, { id: ef, children: es }) : null,
                        (0, r.jsx)("div", {
                            className: iA.Sz,
                            children:
                                a && null != u
                                    ? (0, r.jsx)(w.m, {
                                          text: ed.intl.string(ec.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, r.jsx)("button", {
                                              type: "button",
                                              className: `${iA.Y0} ${iA.$E}`,
                                              disabled: I,
                                              onClick: H,
                                              "aria-label": ed.intl.string(ec.default.wiguT0),
                                              children: (0, r.jsx)(ac.w, {
                                                  size: "custom",
                                                  width: 20,
                                                  height: 20,
                                                  color: "currentColor",
                                              }),
                                          }),
                                      })
                                    : v?.tierSettings != null && null != j
                                      ? (0, r.jsx)(tg, {
                                            settings: v.tierSettings,
                                            tiers: v.tiers,
                                            choices: v.choices,
                                            disabled: !l,
                                            onChange: j,
                                            className: `${iA.Y0} ${iA.$E}`,
                                            icon: (0, r.jsx)(ts.R, {
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
                                  className: iA.fF,
                                  children: [
                                      (0, r.jsx)("div", { className: iA.MT }),
                                      (0, r.jsx)("button", {
                                          type: "submit",
                                          className: iA.rt,
                                          disabled: !z,
                                          "aria-label": ed.intl.string(ec.default.rxW2cl),
                                          children: (0, r.jsx)(ih.SendMessageIcon, {
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
    iT = 1500,
    i_ = [
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
function iP(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = iP.mirror;
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
                (iP.mirror = t),
                t
            );
        })(),
        l = window.getComputedStyle(e);
    for (let e of i_) t.style.setProperty(e, l.getPropertyValue(e));
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let n = document.createElement("span");
    ((n.textContent = "\u200B"), t.appendChild(n));
    let a = n.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + a - e.scrollLeft);
}
iP.mirror = null;
var iR = l(52133),
    iL = l(531685),
    iD = l(155899),
    i$ = l(148087);
let iF = [6e4, 18e4, 6e5],
    iz = [
        {
            key: "outdated",
            priority: 2,
            idleDelayMs: 6e4,
            backoffDelaysMs: iF,
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
                    (0, ek.BL)(t) &&
                    !(null != l.publishCta && rX(n))
                );
            },
        },
    ];
function iO(e, t) {
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
let iG = new Map();
function iU(e) {
    return (0, m.bG)([eE.Ay, lf.A], () => {
        let t = eE.Ay.getProject(e);
        return null == t ? "" : (lf.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
function iq(e) {
    let { projectId: t, notice: l } = e;
    return "outdated" === l ? (0, r.jsx)(iB, { projectId: t }) : (0, r.jsx)(iH, { projectId: t, notice: l });
}
function iH(e) {
    let { projectId: t, notice: l } = e,
        n = i.useContext(lo.bI),
        a = iU(t),
        s = i.useCallback(() => {
            null != n && (0, lo.ub)(t, n);
        }, [n, t]);
    return (0, r.jsx)(y.E, {
        variant: "text-md/normal",
        color: "text-default",
        children: ed.intl.format(
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
            })(l),
            { name: a, onOpen: s },
        ),
    });
}
function iB(e) {
    let { projectId: t } = e,
        l = (0, lo.Ay)(t),
        [n, a] = i.useState(!1);
    return null == l
        ? null
        : n && (l.publishing || !l.isUpdate)
          ? (0, r.jsx)(iK, {})
          : (0, r.jsx)(y.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: ed.intl.format(ec.default.X8tdbS, {
                    action: l.label,
                    onUpdate: () => {
                        (a(!0), iG.get(t)?.forEach((e) => e()), l.run("outdated_notice"));
                    },
                }),
            });
}
function iK() {
    let e = ed.intl.string(ec.default.lexcBN),
        t = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = (0, m.bG)([ig.Ay], () => ig.Ay.useReducedMotion),
                [l, n] = i.useState(1);
            return (
                i.useEffect(() => {
                    if (t || e) return;
                    let l = setInterval(() => n((e) => (e % 3) + 1), 400);
                    return () => clearInterval(l);
                }, [t, e]),
                ".".repeat(t ? 3 : l)
            );
        })(!(0, i$.A)());
    return (0, r.jsxs)(y.E, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: [e, (0, r.jsx)("span", { "aria-hidden": !0, children: t })],
    });
}
var iV = l(248798);
function iW(e, t) {
    e.style.height = `${t.offsetHeight}px`;
}
function iX(e) {
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
            iW(e, t);
            let l = new ResizeObserver(() => iW(e, t));
            return (l.observe(t), () => l.disconnect());
        }, [a, s]),
        (0, r.jsx)("div", {
            ref: u,
            className: o()(iV.NI, { [iV.Jg]: null == a }),
            "aria-live": "polite",
            children: (0, r.jsx)("div", {
                className: iV.t$,
                children: n.map((e) =>
                    (0, r.jsx)(
                        "div",
                        {
                            ref: e.leaving ? void 0 : c,
                            "aria-hidden": e.leaving || void 0,
                            className: o()(iV.qd, e.leaving ? iV.cu : iV.We),
                            children: l(e.key),
                        },
                        e.key,
                    ),
                ),
            }),
        })
    );
}
var iJ = l(521981),
    iQ = l(491182),
    iY = l(438729),
    iZ = l(622868),
    i0 = l(448368),
    i1 = l(837528),
    i2 = l(439762),
    i3 = l(715628),
    i4 = l(752636),
    i6 = l(9842),
    i7 = l(589022),
    i5 = l(967198),
    i8 = l(7584);
let i9 = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function se(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function st(e, t) {
    if (t <= 0) return;
    let l = e.charCodeAt(t - 1);
    if (l >= 56320 && l <= 57343 && t >= 2) {
        let n = e.charCodeAt(t - 2);
        if (n >= 55296 && n <= 56319) return (n - 55296) * 1024 + (l - 56320) + 65536;
    }
    return l;
}
function sl(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let l = e.charCodeAt(t - 1),
        n = e.charCodeAt(t);
    if (l >= 55296 && l <= 56319 && n >= 56320 && n <= 57343) return !0;
    let a = st(e, t),
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
    if (se(a) && se(r)) {
        let l = 0,
            n = t;
        for (; l < 32 && se(st(e, n));) (l++, (n -= 2));
        return l % 2 == 1;
    }
    return !1;
}
function sn(e, t) {
    let { streaming: l } = t,
        n = (0, m.bG)([ig.Ay], () => ig.Ay.useReducedMotion),
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
                      for (; r > 0 && sl(t, r);) r--;
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
                                    for (; n > t + 1 && l - n < 12 && i9.has(e.charAt(n - 1));) n--;
                                    return i9.has(e.charAt(n - 1)) ? l : n;
                                })(t, a, Math.min(t.length, a + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && sl(t, o);) o++;
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
var sa = l(565645),
    sr = l(981879);
function si(e) {
    let { emoji: t, label: l } = e;
    return (0, r.jsx)("div", {
        className: sr.H,
        children: (0, r.jsx)(sa.A, { emojiName: t, alt: l, size: "reaction" }),
    });
}
var ss = l(624479),
    so = l(890377),
    su = l(744898),
    sc = l(180227);
function sd(e) {
    let { groupStart: t, actions: l } = e;
    return 0 === l.length
        ? null
        : (0, r.jsx)("div", {
              className: o()(sc.QE, { [sc.Rn]: t }),
              children: (0, r.jsx)(rC.Ay, {
                  children: l.map((e) =>
                      (0, r.jsx)(
                          rC.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function sm(e) {
    return la.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: ed.intl.string(ed.t.JrGD7E), icon: ss.CopyIcon, onClick: () => (0, la.C)(e) }]
        : [];
}
function sf(e) {
    let { content: t, groupStart: l, onQueuedAction: n } = e,
        a =
            null == n
                ? []
                : [
                      {
                          id: "steer",
                          label: ed.intl.string(ec.default.CXtLD2),
                          tooltip: ed.intl.string(ec.default.DOb1HM),
                          icon: so.V,
                          onClick: () => n("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: ed.intl.string(ec.default.urZwpN),
                          icon: L.P,
                          onClick: () => n("cancel"),
                      },
                  ];
    return (0, r.jsx)(sd, { groupStart: l, actions: [...a, ...sm(t)] });
}
function sh(e) {
    let { content: t, groupStart: l, onRestoreVersion: n } = e,
        a =
            null == n
                ? []
                : [{ id: "restore-version", label: ed.intl.string(ec.default.H8Jfhu), icon: su.e, onClick: n }];
    return (0, r.jsx)(sd, { groupStart: l, actions: [...a, ...sm(t)] });
}
let sg = (0, a2.createChannelRecord)({ id: "conjure-builder", type: eb.rbe.DM }),
    sx = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function sp(e, t) {
    return null == e ? e : (0, r.jsx)("div", { className: o()(sc.Yq, { [sc.x1]: t }), children: e });
}
function sv(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function sj(e, t, l) {
    let { content: n } = (0, i2.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        a = i.useMemo(() => ({ message: e, channel: sg, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != l
          ? (0, r.jsx)(iY.Ay, { className: l, message: e, content: n, compact: !1 })
          : (0, i3.A)(a, n);
}
function sb(e) {
    let [t, l] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        n = i.useCallback((e) => l((t) => ({ ...t, ...e })), []),
        a = i.useCallback(() => l({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, i1.m)(e, sg, t.usernameProfile, n),
        o = (0, i1.Jo)(t.avatarProfile, n),
        u = (0, m.bG)([i5.A], () => i5.A.getGuildId()),
        c = (0, m.bG)([tJ.default], () => tJ.default.getCurrentUser()),
        d = i.useCallback(
            (t) => {
                let l = tJ.default.getUser(e.author.id) ?? e.author;
                return null == c ? null : (0, r.jsx)(i7.A, { ...t, user: l, currentUser: c, guildId: u ?? void 0 });
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
function sy(e) {
    let { baseMessage: t, referenced: l, selected: n, onJumpToReplied: a } = e,
        s = i.useMemo(() => {
            let e = "" !== l.content ? (0, iJ.Ay)(l, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == n
                ? e
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)("span", {
                              className: sc.GV,
                              children: [
                                  (0, r.jsx)(C.x, {
                                      className: sc.Rj,
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
            [lx.A],
            () => ({
                isReplyAuthorBlocked: lx.A.isBlockedForMessage(l),
                isReplyAuthorIgnored: lx.A.isIgnoredForMessage(l),
            }),
            [l],
        ),
        c = (0, rA.X4)(l),
        d = (0, rA.X4)(t),
        f = sb(l);
    return (0, r.jsx)(i0.A, {
        repliedAuthor: c,
        baseAuthor: d,
        baseMessage: t,
        channel: sg,
        referencedMessage: { state: i6.a.LOADED, message: l },
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
function sk(e) {
    let { message: t, author: l } = e,
        n = sb(t);
    return (0, r.jsx)(iZ.Ay, {
        message: t,
        channel: sg,
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
function sw(e) {
    let { content: t, createdAt: l, userId: n, accessories: a, agentReaction: s, groupStart: o, onQueuedAction: u } = e;
    i.useEffect(() => t2(n), [n]);
    let c = (0, m.bG)(
            [tJ.default],
            () => t1(n, null != n ? tJ.default.getUser(n) : null, tJ.default.getCurrentUser()),
            [n],
        ),
        d = i.useMemo(() => (0, rA.FT)(c, null), [c]),
        f = i.useMemo(() => e0(t), [t]),
        h = f?.body ?? t,
        g = i.useMemo(() => {
            if (null == c) return null;
            let e = (0, a1.Ay)({ channelId: sg.id, content: h, author: c });
            return (0, a0.rh)({ ...e, timestamp: sv(l, e.timestamp), state: eb.cmJ.SENT });
        }, [h, c, l]),
        x = (function (e) {
            if (null == e || "" === e) return null;
            let t = i8.Ay.convertSurrogateToName(e, !1);
            return "" === t ? null : ed.intl.formatToPlainString(ec.default.lxXLho, { emojiName: t });
        })(s);
    return null == g
        ? null
        : (0, r.jsx)(sN, {
              message: g,
              author: d,
              content: h,
              selected: f?.label,
              accessories:
                  null != s && null != x
                      ? (0, r.jsxs)(r.Fragment, { children: [a, (0, r.jsx)(si, { emoji: s, label: x })] })
                      : a,
              groupStart: o,
              onQueuedAction: u,
          });
}
function sN(e) {
    let { message: t, author: l, content: n, selected: a, accessories: i, groupStart: s = !0, onQueuedAction: o } = e,
        u = sj(t, n);
    return (0, r.jsx)(iQ.A, {
        className: sc.yE,
        author: l,
        childrenHeader: s ? (0, r.jsx)(sk, { message: t, author: l }) : void 0,
        childrenMessageContent:
            null == a
                ? u
                : (0, r.jsxs)("div", {
                      className: sc.zq,
                      children: [
                          (0, r.jsxs)("span", {
                              className: sc.GV,
                              children: [
                                  (0, r.jsx)(C.x, {
                                      className: sc.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  a,
                              ],
                          }),
                          (0, r.jsx)("span", { className: sc.WO, children: u }),
                      ],
                  }),
        childrenAccessories: sp(i, "" !== n),
        childrenButtons: (0, r.jsx)(sf, { content: n, groupStart: s, onQueuedAction: o }),
    });
}
function sA(e) {
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
        { text: d, revealing: f } = sn(t, { streaming: (0, m.bG)([iL.A], () => u && iL.A.isFocused(), [u]) }),
        h = i.useMemo(() => (0, rA.FT)(null, null), []),
        g = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        x = a?.userId,
        p = (0, m.bG)(
            [tJ.default],
            () => t1(x, null != x ? tJ.default.getUser(x) : null, tJ.default.getCurrentUser()),
            [x],
        ),
        v = i.useMemo(() => (null == a ? null : e0(a.content)), [a]),
        j = i.useMemo(() => {
            if (null == a || null == p) return null;
            let e = (0, a1.Ay)({ channelId: sg.id, content: v?.body ?? a.content, author: p });
            return (0, a0.rh)({ ...e, id: a.id, timestamp: sv(a.createdAt, e.timestamp), state: eb.cmJ.SENT });
        }, [a, v, p]),
        b = i.useMemo(() => (null == a ? void 0 : { channel_id: sg.id, message_id: a.id }), [a]),
        [y] = i.useState(() => (0, a1.Ay)({ channelId: sg.id, content: "", author: sx })),
        k = i.useMemo(
            () =>
                (0, a0.rh)({
                    ...y,
                    timestamp: sv(l, y.timestamp),
                    state: eb.cmJ.SENT,
                    ...(null != b ? { type: eb.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, l, b],
        ),
        w = i.useMemo(() => k.set("content", d), [k, d]),
        N = i.useMemo(
            () => (0, i4.A)({ message: k, channel: sg, author: g, guildId: void 0, isGroupStart: o }),
            [k, g, o],
        ),
        A = sj(w, d, sc.OS);
    return (0, r.jsxs)("div", {
        className: sc.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": f ? "true" : void 0,
        children: [
            (0, r.jsx)(iQ.A, {
                className: sc.yE,
                author: g,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, r.jsx)(sy, { baseMessage: k, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: N,
                childrenMessageContent: A,
                childrenAccessories: sp(n, "" !== d),
                disableInteraction: !0,
            }),
            c,
            o
                ? (0, r.jsx)("span", {
                      className: sc.st,
                      "aria-hidden": "true",
                      children: (0, r.jsx)(lk.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
let sS = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    sC = new WeakMap();
var sE = l(288539);
function sI(e, t, l) {
    return (0, r.jsx)(sE.A, { userId: e, content: `@${t}` }, l);
}
function sM(e) {
    let { projectId: t, event: l } = e,
        n = (function (e, t, l) {
            let n = t.actor_user_id;
            i.useEffect(() => t2(n), [n]);
            let a = (0, m.bG)([tJ.default], () => (null == n ? null : tJ.default.getUser(n)), [n]),
                r = (0, tQ.tx)(a),
                s = iU(e),
                o =
                    (0, m.bG)([Y.A], () => (null == t.guild_id ? null : Y.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ?? ed.intl.string(ec.default.R1tPlP),
                u = null == a || null == r ? null : { user: r, userHook: (e, t) => l(a.id, r, t) };
            switch (t.type) {
                case "app_removed":
                    return null == u
                        ? ed.intl.format(ec.default.Lwsrhg, { app: s, server: o })
                        : ed.intl.format(ec.default.qqePfT, { app: s, server: o, ...u });
                case "bot_removed":
                    return null == u
                        ? ed.intl.format(ec.default.mT7EQG, { app: s, server: o })
                        : ed.intl.format(ec.default["lA/crI"], { app: s, server: o, ...u });
                case "preview_bot_removed":
                    return null == u
                        ? ed.intl.format(ec.default["4LVIeo"], { app: s, server: o })
                        : ed.intl.format(ec.default.YJOV6D, { app: s, server: o, ...u });
                case "app_channel_deleted": {
                    let e = t.channel_name ?? "";
                    return null == u
                        ? ed.intl.format(ec.default["4VQfid"], { channel: e, server: o })
                        : ed.intl.format(ec.default.RlMIJN, { channel: e, server: o, ...u });
                }
            }
        })(t, l, sI);
    return (0, r.jsx)(y.E, { variant: "text-md/normal", color: "text-default", children: n });
}
function sT(e) {
    let { onSelect: t, onClose: l = F.Z_, onRestoreVersion: n } = e;
    return (0, r.jsx)(el.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: l,
        "aria-label": ed.intl.string(ed.t.ogxXGq),
        onSelect: t,
        children: (0, r.jsx)(en.rX, {
            children: (0, r.jsx)(en.Dr, {
                id: "restore-version",
                label: ed.intl.string(ec.default.H8Jfhu),
                icon: su.e,
                action: n,
            }),
        }),
    });
}
function s_(e, t, l) {
    let n = Math.max(0, Math.min(e.length, l)),
        a = Math.max(0, Math.min(n, t));
    return { start: a, end: n, startKey: e[a] ?? null, endKey: n >= e.length ? null : (e[n - 1] ?? null) };
}
function sP(e, t, l) {
    if (null == t) return l;
    let n = e.indexOf(t);
    return -1 === n ? l : n;
}
var sR = l(986109);
let sL = i.createContext(null);
function sD(e, t) {
    (0, iD.F)({ onConfirm: () => t(e) });
}
let s$ = i.memo(function (e) {
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
                onShowsLatestChange: j,
            } = e,
            b = i.useRef(null),
            [k, w] = i.useState(null),
            N = i.useCallback((e) => {
                ((b.current = e), w(e));
            }, []),
            [S, C] = i.useState(null),
            E = i.useRef(0);
        i.useEffect(() => () => window.clearTimeout(E.current), []);
        let I = i.useCallback((e) => {
                (C(e), window.clearTimeout(E.current), (E.current = window.setTimeout(() => C(null), 1600)));
            }, []),
            M = (0, m.bG)([eE.Ay], () => eE.Ay.getPublishStatus(t)?.state ?? null),
            T = (0, m.bG)([tJ.default], () => tJ.default.getCurrentUser()?.id),
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
                                            let t = (0, l8.lt)(e.steps);
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
                            a = sC.get(n);
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
                            let a = !(0, ek.BL)(e),
                                r = ah({
                                    steps: e.steps,
                                    content: e.content,
                                    hasProposal: null != e.proposal,
                                    hasAttachments: (e.attachments?.length ?? 0) > 0,
                                }),
                                i = r.lastStreamedMessage?.key,
                                s = (0, l8.C6)(e.steps, { turnActive: a }),
                                { lastWork: o, open: u } = (0, l8.CT)(s, { turnActive: a }),
                                c = s.at(-1)?.index,
                                d = !1;
                            for (let l of s) {
                                if (null != l.prose && sS.test(l.prose.content)) d = !0;
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
                                            turnActive: l9(e),
                                            checklistSuperseded: l.hasTodos && t,
                                        },
                                        { actor: null, boundary: void 0 },
                                    );
                            }
                            let m = sS.test(e.content ?? "");
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
                        (sC.set(n, { superseded: e, planned: r }), t.push(...r));
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
                              let l = rJ.get(t);
                              return (null == l && ((l = { ...t, publishCta: null }), rJ.set(t, l)), l);
                          })),
                );
            }, [l, M]),
            P = i.useMemo(() => _.map((e) => e.key), [_]),
            [R, L] = i.useState(null),
            D = (function (e, t, l) {
                if (null == t) return s_(e, e.length - 60, e.length);
                let n = null == t.endKey,
                    a = n ? e.length : sP(e, t.endKey, t.end - 1) + 1,
                    r = sP(e, t.startKey, t.start);
                return (n && l && a - r > 120 && (r = a - 60), s_(e, r, a));
            })(P, R, x),
            $ = i.useRef(D),
            F = i.useRef(P),
            z = i.useRef(_),
            O = i.useRef(null),
            G = i.useRef(null),
            U = i.useRef(new Set()),
            q = i.useCallback(() => {
                let e = h.current?.getScrollerNode(),
                    t = b.current;
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
                        return ((l = Math.min(e.length, t.end + 30)), s_(e, Math.max(t.start, l - 120), l));
                    }
                    if (!n) return null;
                    if (0 === t.start) return "older";
                    if (!r && !a) {
                        let l, n;
                        return ((l = t.start - 30), (n = Math.min(t.end, Math.max(l, 0) + 120)), s_(e, l, n));
                    }
                    let i = Math.max(t.start - 30, t.end - 120);
                    return i < t.start ? s_(e, i, t.end) : null;
                })(F.current, $.current, {
                    nearTop: e.scrollTop < 600,
                    nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                    pinned: g.current,
                });
                "older" === l ? (0, er.P6)(t) : null != l && L(l);
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
                    let a = b.current?.querySelector(`[data-conjure-message="${e}"]`);
                    if (null != a) {
                        (p(), L($.current), a.scrollIntoView({ block: "center", behavior: "smooth" }), I(e));
                        return;
                    }
                    let r = z.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                    if (-1 === r) {
                        (0, er.P6)(t) && (B.current = e);
                        return;
                    }
                    (p(),
                        (G.current = () => {
                            (b.current
                                ?.querySelector(`[data-conjure-message="${e}"]`)
                                ?.scrollIntoView({ block: "center" }),
                                I(e));
                        }),
                        L(((l = F.current), s_(l, (n = Math.max(0, r - 30)), n + 60))));
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
        (i.useEffect(() => j?.(V), [V, j]),
            i.useLayoutEffect(() => {
                (($.current = D), (F.current = P), (z.current = _));
            }),
            i.useLayoutEffect(() => {
                let e = h.current?.getScrollerNode(),
                    t = b.current;
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
                let a = (0, lo.Ay)(e),
                    r = (0, i$.A)(),
                    s = (function (e) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let l = e[t];
                            if ("publish_notice" !== l.kind && "project_event" !== l.kind) {
                                if ("user" === l.role) return null;
                                if ((0, ek.BL)(l)) return l;
                                if (!(0, ek.B0)(e, t)) break;
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
                    [c, d] = i.useState(() => iO(u, Date.now())),
                    m = (function (e, t, l) {
                        if (e.projectId !== t.projectId) return iO(t, l());
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
                                let t = Math.min(e.outdatedBackoff + 1, iF.length - 1);
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
                        iz.map((e) => ({
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
                        let l = iG.get(e) ?? new Set();
                        return (
                            iG.set(e, l),
                            l.add(t),
                            () => {
                                (l.delete(t), 0 === l.size && iG.delete(e));
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
                            return (0, r.jsx)(sA, {
                                groupStart: !1,
                                content: "",
                                accessories: (0, r.jsx)(iq, { projectId: t, notice: "outdated" }),
                            });
                        case "ideas":
                            return (0, r.jsx)("div", {
                                className: sR.u$,
                                children: (0, r.jsx)(sA, {
                                    content: ed.intl.string(ec.default.s96AWB),
                                    accessories: (0, r.jsx)(r3, { onAsk: s }),
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
                                if (!(0, ek.BL)(l) || "plan_implemented" === l.kind) return null;
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
                    : (0, ek.BL)(W)
                      ? W.awaitingUser
                      : null) ?? void 0,
            el = (0, m.bG)([er.Ay], () => er.Ay.getSettings(t)?.secrets, [t]),
            en = i.useMemo(
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
                                            t === ed.intl.string(ec.default.UGqnoV) ||
                                            t === ed.intl.string(ec.default.sMQt5O)
                                        );
                                    })(s);
                                continue;
                            }
                            let o = s.secretRequest?.fields ?? [];
                            if (0 === o.length || !(0, ek.BL)(s)) continue;
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
                    className: o()(sR.x7, sR.jH),
                    "aria-busy": !0,
                    children: (0, r.jsx)("li", { className: sR.Ub, children: (0, r.jsx)(A.y, {}) }),
                });
            let e = "unavailable" === n ? ec.default.Td4Sf4 : ec.default.V1QiNz;
            return (0, r.jsx)("ol", {
                className: sR.x7,
                children: (0, r.jsx)(sG, {
                    role: "assistant",
                    children: (0, r.jsx)(sA, { content: ed.intl.string(e) }),
                }),
            });
        }
        return (0, r.jsx)(sL.Provider, {
            value: U,
            children: (0, r.jsxs)("ol", {
                ref: N,
                className: sR.x7,
                children: [
                    _.slice(D.start, D.end).map((e) => {
                        let l = e.message;
                        if ("closing" !== e.kind)
                            return (0, r.jsx)(
                                sF,
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
                            sF,
                            {
                                row: e,
                                projectId: t,
                                highlighted: !1,
                                replyTo: null != l.in_reply_to ? ee.get(l.in_reply_to) : void 0,
                                onJumpTo: K,
                                planVersion: Y.get(l.render_id),
                                pickedIdeaIds: Z.get(l.render_id),
                                secretRequestAwaiting: n ? et : void 0,
                                secretRequestStatus: en.get(l.render_id),
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
                        ? (0, r.jsx)(sG, {
                              role: "assistant",
                              continuation: !0,
                              children: (0, r.jsx)(sA, {
                                  groupStart: !1,
                                  content: "",
                                  accessories: (0, r.jsx)(y.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: ed.intl.string(ec.default.YR8A2v),
                                  }),
                              }),
                          })
                        : null,
                    V
                        ? (0, r.jsx)("li", {
                              role: "none",
                              className: sR.q3,
                              children: (0, r.jsx)(iX, { reminder: X, renderReminder: J }),
                          })
                        : null,
                ],
            }),
        });
    }),
    sF = i.memo(
        function (e) {
            let { row: t, projectId: l, highlighted: n, currentUserId: a, ...i } = e,
                s = t.message;
            switch (t.kind) {
                case "user": {
                    let e = null != s.attachments && s.attachments.length > 0 ? s.attachments : null;
                    return (0, r.jsx)(sG, {
                        rowKey: t.key,
                        role: "user",
                        anchorId: s.id,
                        highlighted: n,
                        continuation: !t.groupStart,
                        children: (0, r.jsx)(sw, {
                            groupStart: t.groupStart,
                            content: s.content,
                            createdAt: s.created_at,
                            userId: s.user_id,
                            agentReaction: s.agentReaction,
                            accessories: null != e ? (0, r.jsx)(r9.A, { projectId: l, attachments: e }) : void 0,
                            onQueuedAction: (function (e, t, l) {
                                if (
                                    "user" === t.role &&
                                    "queued" === t.disposition &&
                                    null != t.user_id &&
                                    t.user_id === l
                                )
                                    return (l) => (0, er.tp)(e, t.id, l);
                            })(l, s, a),
                        }),
                    });
                }
                case "prose":
                    return (0, r.jsx)(sG, {
                        rowKey: t.key,
                        role: "assistant",
                        continuation: !t.groupStart,
                        children: (0, r.jsx)(sA, {
                            groupStart: t.groupStart,
                            content: t.content,
                            streaming: t.streaming,
                            createdAt: s.created_at,
                            accessories:
                                t.hostsAttachments && null != s.attachments
                                    ? (0, r.jsx)(r9.A, { projectId: l, attachments: s.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, r.jsx)(sG, {
                        rowKey: t.key,
                        role: "assistant",
                        children: (0, r.jsx)(ir, {
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
                    return (0, r.jsx)(sG, {
                        rowKey: t.key,
                        role: "assistant",
                        continuation: !t.groupStart,
                        children: (0, r.jsx)(sA, {
                            groupStart: t.groupStart,
                            content: null == s.publishNotice ? s.content : "",
                            createdAt: s.created_at,
                            accessories:
                                null == s.publishNotice
                                    ? void 0
                                    : (0, r.jsx)(iq, { projectId: l, notice: s.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, r.jsx)(sG, {
                        rowKey: t.key,
                        role: "assistant",
                        continuation: !t.groupStart,
                        children: (0, r.jsx)(sA, {
                            groupStart: t.groupStart,
                            content: null == s.projectEvent ? s.content : "",
                            createdAt: s.created_at,
                            accessories:
                                null == s.projectEvent
                                    ? void 0
                                    : (0, r.jsx)(sM, { projectId: l, event: s.projectEvent }),
                        }),
                    });
                case "interrupted":
                    return (0, r.jsx)(sG, {
                        rowKey: t.key,
                        role: "assistant",
                        children: (0, r.jsx)(ir, { projectId: l, interrupted: !0, steps: s.steps }),
                    });
                case "legacyTodos":
                    return (0, r.jsx)(sG, {
                        rowKey: t.key,
                        role: "assistant",
                        children: (0, r.jsx)(ir, {
                            projectId: l,
                            steps: sz,
                            active: !1,
                            checklistSuperseded: t.checklistSuperseded,
                            todos: s.todos,
                            provisionalTodo: s.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, r.jsx)(sO, { row: t, projectId: l, ...i });
            }
        },
        function (e, t) {
            return (
                (0, iR.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, iR.A)(e.row, t.row, ["message"]) &&
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
                (0, iR.A)(e.replyTo, t.replyTo) &&
                (0, iR.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let l of e) if (!t.has(l)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    sz = [];
function sO(e) {
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
        p = null != x && null != h ? () => sD(x, h) : void 0,
        v = g.in_reply_to,
        j = g.restoreProposal;
    return (0, r.jsx)(sG, {
        rowKey: t.key,
        role: "assistant",
        continuation: !t.groupStart,
        onContextMenu:
            null != p
                ? (e) => {
                      (0, F.jA)(e, (e) => (0, r.jsx)(sT, { ...e, onRestoreVersion: p }));
                  }
                : void 0,
        children: (0, r.jsx)(sA, {
            groupStart: t.groupStart,
            buttons: (0, r.jsx)(sh, { groupStart: t.groupStart, content: t.content, onRestoreVersion: p }),
            content: t.content,
            createdAt: g.created_at,
            replyTo: n,
            onJumpToReplied: null != v && null != a ? () => a(v) : void 0,
            accessories: (0, r.jsx)(ii, {
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
                              sD(
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
function sG(e) {
    let {
            role: t,
            children: l,
            rowKey: n,
            anchorId: a,
            highlighted: s = !1,
            continuation: u = !1,
            onContextMenu: c,
        } = e,
        d = i.useContext(sL),
        [m] = i.useState(() => !iL.A.isFocused() || (null != n && d?.current.has(n) === !0));
    return (0, r.jsx)("li", {
        onContextMenu: c,
        "data-role": t,
        "data-conjure-message": a,
        "data-conjure-row-key": n,
        className: o()(sR.xk, { [sR.g5]: m, [sR.Qo]: s, [sR.q3]: u }),
        children: l,
    });
}
let sU = [ec.default["AX+5lk"], ec.default.VAU6A7, ec.default["1emysd"], ec.default.EXHX3L, ec.default.ChslmX];
function sq(e) {
    return sU.some((t) => ed.intl.string(t) === e);
}
function sH(e) {
    switch (e) {
        case "connecting":
            return ed.intl.string(ec.default["ECl+Dx"]);
        case "closed":
            return ed.intl.string(ec.default.mQZSp1);
        case "failed":
            return ed.intl.string(ec.default.xzJSZ6);
    }
}
var sB = l(823376),
    sK = l(187447);
function sV(e) {
    let { activity: t, id: l } = e,
        n = (0, i$.A)(),
        { text: a, revealing: s } = sn(t?.text ?? "", { streaming: n && null != t && "end" !== t.phase }),
        u = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            u.current?.scrollToBottom();
        }, [a]),
        (0, r.jsx)("div", {
            id: l,
            role: "tooltip",
            className: sK.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, r.jsx)(l7.Ch, {
                ref: u,
                className: sK.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, r.jsx)("div", {
                    className: o()(il.PT, sK.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: ad.A.parse(a, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var sW = l(53659);
function sX(e) {
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
                ? ec.default["1jqaAc"]
                : a
                  ? ec.default.M4KI5F
                  : r
                    ? sU[0]
                    : n
                      ? ec.default.mKK6wB
                      : l
                        ? ec.default.xnCAaP
                        : s
                          ? ec.default.izrt52
                          : ec.default.L9EDub;
        })({ activity: t, compacting: l, saving: n, restoring: a, recalling: s, controlling: u }),
        p = ed.intl.string(x),
        v = x === sU["0"],
        [j, b] = i.useState(c ?? p),
        w = (0, i$.A)();
    (!n && (w || v)) || j === p || b(p);
    let N = i.useRef(p);
    (i.useEffect(() => {
        N.current = p;
    }, [p]),
        i.useEffect(() => {
            d?.(j);
        }, [j, d]));
    let A = i.useRef(null),
        S = i.useRef(j);
    i.useEffect(() => {
        S.current = j;
    }, [j]);
    let C = i.useRef(v),
        E = i.useRef(0);
    (i.useEffect(() => {
        ((C.current = v), !v && sq(S.current) && b(N.current));
    }, [v]),
        i.useEffect(() => {
            if (!w) return;
            let e = 0,
                t = 0;
            function l() {
                if (C.current) {
                    var e;
                    ((E.current = sq(S.current) ? E.current + 1 : 0),
                        b(((e = E.current), ed.intl.string(sU[e % sU.length]))));
                } else N.current !== S.current ? b(N.current) : A.current?.play();
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
    return (0, r.jsx)(et.Y, {
        targetElementRef: m,
        position: "top",
        align: "left",
        shouldShow: T,
        onRequestClose: P,
        renderPopout: () => (0, r.jsx)(sV, { id: f, activity: t }),
        children: () =>
            (0, r.jsxs)(k.D, {
                innerRef: m,
                className: o()(sW.hF, I && sW.Xd),
                "aria-label": ed.intl.string(a ? ec.default.qqlUiW : v ? sU["0"] : ec.default["Uuj/gh"]),
                "aria-expanded": T,
                "aria-describedby": T ? f : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": ed.intl.string(x),
                onClick: _,
                children: [
                    (0, r.jsx)("span", {
                        className: sW.bl,
                        children: (0, r.jsx)(sB.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, r.jsx)("span", {
                        className: sW.xu,
                        "aria-hidden": !!u || !!v || void 0,
                        children: w
                            ? (0, r.jsx)(eL.o, {
                                  ref: A,
                                  text: j,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  duration: 1e3,
                                  delay: null,
                                  className: sW.yE,
                              })
                            : (0, r.jsx)(y.E, {
                                  tag: "span",
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  className: sW.yE,
                                  children: j,
                              }),
                    }),
                ],
            }),
    });
}
let sJ = { second: 1e3, minute: 6e4 };
function sQ(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [l, n] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let l;
            if (null == e) return;
            let a = sJ[t];
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
var sY = l(719374);
function sZ(e) {
    let { startedAt: t } = e,
        l = sQ(t);
    return (0, r.jsx)(y.E, {
        tag: "span",
        variant: "text-xs/medium",
        color: "text-muted",
        "aria-hidden": !0,
        className: sY.$,
        "data-conjure-turn-timer": !0,
        children: (0, am.C7)(l),
    });
}
function s0(e) {
    let { startedAt: t } = e,
        l = sQ(t, "minute");
    return (0, r.jsx)(N.A, { role: "timer", children: (0, am.Us)(l) });
}
var s1 = l(436804);
function s2(e) {
    return e.toLocaleString();
}
function s3(e) {
    let { label: t, usage: l, cached: n = !0 } = e;
    return (0, r.jsxs)("div", {
        className: s1.Q$,
        children: [
            (0, r.jsxs)("div", {
                className: s1.mf,
                children: [
                    (0, r.jsx)(y.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, r.jsxs)(y.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [s2((0, ee.aM)(l)), " tokens"],
                    }),
                ],
            }),
            (0, r.jsxs)(y.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    s2(l.input_tokens),
                    " in \xb7 ",
                    s2(l.output_tokens),
                    " out",
                    n
                        ? ` \xb7 ${s2(l.cache_creation_input_tokens)} cache write \xb7 ${s2(l.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function s4(e) {
    let { project: t } = e,
        l = (0, ee.wU)(t.compaction),
        n = (0, ee.wU)(t.classifier),
        a = (0, ee.wV)(t.orchestrator, t.codegen),
        i = (0, ee.wV)(a, l);
    return (0, r.jsxs)("div", {
        className: s1.si,
        role: "dialog",
        "aria-label": ed.intl.string(ec.default.p5EGzq),
        children: [
            (0, r.jsx)("div", {
                className: s1.Q$,
                children: (0, r.jsxs)("div", {
                    className: s1.mf,
                    children: [
                        (0, r.jsxs)(y.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [s2((0, ee.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, r.jsxs)(y.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(s3, { label: ed.intl.string(ec.default["9Sj3SX"]), usage: a }),
            (0, r.jsx)(s3, { label: ed.intl.string(ec.default.ANCEo3), usage: l }),
            (0, r.jsx)(s3, { label: ed.intl.string(ec.default.ugL6D4), usage: n, cached: !1 }),
            (0, r.jsxs)("div", {
                className: s1.mf,
                children: [
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: ed.intl.string(ec.default["8OUg09"]),
                    }),
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, ee.sj)(i) ? "\u2014" : `${Math.round(100 * (0, ee.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function s6(e) {
    let { project: t } = e,
        l = i.useRef(null);
    return (0, r.jsx)(et.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, r.jsx)(s4, { project: t }),
        children: (e) =>
            (0, r.jsx)(k.D, {
                innerRef: l,
                className: s1.Y$,
                "aria-label": ed.intl.string(ec.default.Z96gxQ),
                ...e,
                children: (0, r.jsx)(aq.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var s7 = l(997421);
function s5(e) {
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
        h = (0, tv.Zv)(l),
        [g, x] = i.useState(null),
        p = i.useCallback((e) => x(sq(e) || e === ed.intl.string(ec.default.mKK6wB) ? null : e), []),
        v =
            null == m
                ? null
                : ((t = (0, ee.a7)(m.cost_usd)),
                  {
                      text: ed.intl.formatToPlainString(ec.default.gMuw5d, { runes: t.toLocaleString() }),
                      aria: ed.intl.formatToPlainString(ec.default.Z4LvGa, { runes: t, turns: m.turns }),
                  }),
        j = n && null != a;
    return (0, r.jsxs)("div", {
        className: s7.jf,
        children: [
            (0, r.jsxs)("div", {
                className: s7.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    n || s || o || h || !0 === d
                        ? (0, r.jsx)(sX, {
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
                    j ? (0, r.jsx)(sZ, { startedAt: a }) : null,
                ],
            }),
            j ? (0, r.jsx)(s0, { startedAt: a }) : null,
            null == m || null == v
                ? null
                : (0, r.jsxs)("span", {
                      className: s7.BP,
                      children: [
                          (0, r.jsx)(y.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": v.aria,
                              children: v.text,
                          }),
                          (0, r.jsx)(s6, { project: m }),
                      ],
                  }),
            "open" === f
                ? null
                : (0, r.jsx)(y.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === f ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": ed.intl.formatToPlainString(ec.default["tCo+ZM"], { status: sH(f) }),
                      "data-conjure-conn": !0,
                      "data-state": f,
                      className: s7.XF,
                      children: sH(f),
                  }),
        ],
    });
}
let s8 = ["wheel", "touchstart", "pointerdown", "keydown"];
var s9 = l(698638),
    oe = l(608711);
let ot = [ed.intl.string(ec.default["9w+Chc"]), ed.intl.string(ec.default.WAvmdq), ed.intl.string(ec.default.SKsrzl)];
function ol(e) {
    var t;
    let { projectId: l, restoreState: n, onRestoreVersion: a, onImportProject: s } = e,
        o = (0, m.bG)([ek.Ay], () => ek.Ay.getMessages(l), [l]),
        u = (0, m.bG)([er.Ay], () => er.Ay.getConnState(l), [l]),
        c = (0, m.bG)([er.Ay], () => er.Ay.isChatStopped(l), [l]),
        d = (0, m.bG)([ek.Ay], () => ek.Ay.getProjectUsage(l), [l]),
        f = (0, m.bG)([ek.Ay], () => ek.Ay.getThinkingActivity(l), [l]),
        h = (0, m.bG)([ek.Ay], () => ek.Ay.isCompacting(l), [l]),
        g = (0, m.bG)([ek.Ay], () => ek.Ay.isSaving(l), [l]),
        x = (0, m.bG)([er.Ay], () => er.Ay.getModelSettings(l), [l]),
        p = i.useRef(null),
        v = i.useRef(null),
        j = i.useRef(null),
        {
            stickToBottomRef: b,
            pinned: k,
            atBottom: w,
            unpin: N,
            releasePinHold: A,
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
                    for (let e of s8) t.addEventListener(e, u, { passive: !0 });
                    return () => {
                        for (let e of s8) t.removeEventListener(e, u);
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
            (A(), E.current ? e() : j.current?.showLatest(e));
        }, [A, E]),
        _ = i.useCallback(() => {
            (M(), j.current?.handleScroll());
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
                a && (b.current ? v.current?.scrollToBottom() : j.current?.recordAnchor());
            });
        return (a.observe(e), null != t && a.observe(t), () => a.disconnect());
    }, [b]),
        i.useEffect(() => {
            (0, er.Hc)(l);
        }, [l]),
        (0, ew.E1)(l));
    let P = te(l),
        R = i.useCallback(
            (e, t) => {
                (0, er.dv)(l, e, t);
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
                                  a = t.filter((e) => eW(e.comment)),
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
                                      r.push(`${t + 1}. ${eQ(e.target)}`),
                                      r.push(
                                          `   Feedback: ${(l = e.comment.trim()).length <= 1e3 ? l : `${l.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let i = l.trim();
                              return ("" !== i && (r.push(""), r.push(`Note for the whole batch: ${i}`)), r.join("\n"));
                          })({ annotations: P.annotations, metaComment: e, context: P.context }),
                          t,
                      ),
                      e7(l));
            },
            [P, R, l],
        ),
        D = i.useCallback(() => (0, er.fu)(l), [l]),
        $ = i.useCallback((e) => nX(l, e.implementation_prompt), [l]),
        [F, z] = (function (e) {
            let [t, l] = i.useState(() => au(e)),
                [n, a] = i.useState(e),
                r = n !== e,
                s = r ? au(e) : t;
            return (r && (a(e), l(s)), [s, l]);
        })(l),
        O = i.useCallback(() => R(ed.intl.string(ec.default["t5CN3+"])), [R]),
        G = i.useCallback((e, t, n) => nX(l, e, { clarificationAnswers: t, attachments: n }), [l]),
        U = i.useCallback((e) => (0, er.XZ)(l, e), [l]),
        q = i.useCallback((e) => (0, er.vX)(l, e), [l]),
        H = i.useCallback((e) => ik(l, "chat", Array.from(e), q), [l, q]),
        B = i.useCallback(() => nX(l, ed.intl.string(ec.default.Zc7gML)), [l]),
        K = n?.status === "restoring",
        V = "open" === u && !c && !K,
        W = o[o.length - 1],
        X = null != W && "assistant" === W.role && null != W.proposal,
        [J, Q] = i.useState(null),
        Y = W?.clarification != null && W.clarification.id !== J ? W.clarification : null,
        Z = i.useCallback(() => {
            null != Y && Q(Y.id);
        }, [Y]),
        ee = (0, m.bG)([er.Ay], () => er.Ay.getSettings(l), [l]),
        [et, el] = i.useState(null),
        en =
            null != W &&
            "assistant" === W.role &&
            null != W.settingsRequest &&
            (0, ek.BL)(W) &&
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
        ea = en?.settingsRequest ?? null,
        ei = i.useCallback(() => {
            null != en && el(en.id);
        }, [en]),
        es = null != ea,
        eo = (function (e) {
            let { historyLoaded: t, historyUnavailable: l, connState: n } = e;
            return l ? "unavailable" : t ? "greeting" : "failed" === n || "closed" === n ? "unavailable" : "loading";
        })({
            historyLoaded: (0, m.bG)([ek.Ay], () => ek.Ay.hasLoadedHistory(l), [l]),
            historyUnavailable: (0, m.bG)([ek.Ay], () => ek.Ay.isHistoryUnavailable(l), [l]),
            connState: u,
        }),
        eu = "loading" === eo && 0 === o.length,
        em = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < l.length; t++) e = (31 * e + l.charCodeAt(t)) % 0x7fffffff;
            return ot[e % ot.length];
        }, [l]),
        ef = X ? ed.intl.string(ec.default.Zc7gML) : "greeting" === eo && 0 === o.length ? em : null,
        eh = i.useMemo(() => {
            for (let e = o.length - 1; e >= 0; e--) {
                let t = o[e];
                if ("assistant" === t.role && !(0, ek.BL)(t)) return t;
            }
        }, [o]),
        eg = null != eh,
        ex =
            null != eh
                ? (function (e) {
                      let t = e.turn_id ?? e.steps.find((e) => null != e.turn_id)?.turn_id;
                      if (null != t && /^\d+$/.test(t)) {
                          let e = al.default.extractTimestamp(t);
                          if (Number.isFinite(e) && e > 0) return e;
                      }
                      return e.created_at;
                  })(eh)
                : void 0,
        ep = X && V ? B : void 0,
        ev = i.useCallback(() => nX(l, ed.intl.string(ec.default.EMgIuY)), [l]),
        [ej, eb] = i.useState(null),
        [ey, eN] = i.useState(eg);
    (ey !== eg && (eN(eg), eg || eb(null)),
        i.useEffect(() => {
            if (!eg) return;
            let e = v.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let l = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? eb(null)
                        : eb(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (l.observe(t), () => l.disconnect());
        }, [eg, eh?.steps, C]));
    let eA = C ? ej : "bottom",
        eS = i.useMemo(() => (null != eh ? (0, ne.b)(eh.steps) : ""), [eh]),
        eC = i.useMemo(() => (null != eh ? ((0, l8.lt)(eh.steps) ?? eh.todos) : void 0), [eh]),
        eE = eh?.provisionalTodo,
        eI = null != eh && l9(eh),
        eM = i.useMemo(() => {
            var e;
            return null != eh ? ((e = eh.steps), ia((0, l8.Jf)(e, !0).tasks)) : void 0;
        }, [eh]);
    return (0, r.jsxs)("section", {
        ref: p,
        "data-conjure-chat": !0,
        className: oe.TE,
        children: [
            V
                ? (0, r.jsx)(l5.A, {
                      title: ed.intl.string(ec.default.gy7byi),
                      description: ed.intl.string(ec.default["dkv/WO"]),
                      icons: s9.ir,
                      onDrop: H,
                  })
                : null,
            (0, r.jsx)(nv, {
                onJumpToActivity: T,
                line: eS,
                placement: eg && "top" === eA ? "top" : null,
                todos: eC,
                todosLive: eI,
                provisionalTodo: eE,
                agents: eM,
            }),
            (0, r.jsxs)("div", {
                className: oe.JX,
                children: [
                    (0, r.jsx)(l7.Ch, {
                        ref: v,
                        onScroll: _,
                        scrollbarGutter: eu ? "both-edges" : "stable",
                        className: [oe.N$, w ? null : oe.hB, es ? oe.J9 : null].filter(Boolean).join(" "),
                        children: (0, r.jsx)(s$, {
                            projectId: l,
                            messages: o,
                            emptyState: eo,
                            floatingSettingsMessageId: en?.id,
                            onPickIdea: V ? $ : void 0,
                            onAskForIdeas: V ? O : void 0,
                            draftHasText: F,
                            onApprovePlan: V ? ev : void 0,
                            onRestoreVersion: K || eg ? void 0 : a,
                            scrollerRef: v,
                            stickToBottomRef: b,
                            pinned: k,
                            onUnpin: N,
                            handleRef: j,
                            onShowsLatestChange: I,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: oe.NJ,
                        children: (0, r.jsx)(s5, {
                            projectId: l,
                            thinking: eg,
                            turnStartedAt: ex,
                            restoring: K,
                            recalling: eu,
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
                              className: es ? `${oe.B5} ${oe.J9}` : oe.B5,
                              children: (0, r.jsx)(
                                  n8,
                                  { projectId: l, clarification: Y, onSubmit: V ? G : void 0, onDismiss: Z },
                                  Y.id,
                              ),
                          }),
                    null == ea
                        ? null
                        : (0, r.jsx)("div", {
                              className: oe.B5,
                              children: (0, r.jsx)(at, { projectId: l, request: ea, onDismiss: ei }, en?.id),
                          }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: oe.Jx,
                children: [
                    (0, r.jsx)(nv, {
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
                              className: oe.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, r.jsx)(y.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: ed.intl.formatToPlainString(ec.default["7b49dS"], {
                                          count: P.annotations.length,
                                      }),
                                  }),
                                  (0, r.jsx)(y.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: ed.intl.string(ec.default["5zG+CR"]),
                                  }),
                                  (0, r.jsx)(S.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: ed.intl.string(ec.default["/zOv9+"]),
                                      onClick: () => e7(l),
                                  }),
                              ],
                          }),
                    (0, r.jsx)(iM, {
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
                        questionOpen: null != Y || null != ea,
                        modelSettings: x,
                        onModelSettingsChange: U,
                        onDraftHasTextChange: z,
                    }),
                ],
            }),
        ],
    });
}
var on = l(761508),
    oa = l(540999),
    or = l(278359);
function oi(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function os(e) {
    if (e < 1e3) return String(e);
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function oo(e) {
    switch (e) {
        case "subagent":
            return ed.intl.string(ec.default.PbKt9r);
        case "context":
            return ed.intl.string(ec.default["tNk/P2"]);
        case "tool":
            return ed.intl.string(ec.default.NBOJcw);
        case "delegated":
            return ed.intl.string(ec.default.QgrFdt);
        default:
            return ed.intl.string(ec.default.LsLVUy);
    }
}
var ou = l(536113);
let oc = { started: ou.Vf, ok: ou.mo, error: ou.Sr };
function od(e) {
    let { status: t } = e;
    return (0, r.jsx)("span", {
        className: `${ou.Om} ${oc[t] ?? ou.Vf}`,
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "started":
                    return ed.intl.string(ec.default["2wyRDK"]);
                case "error":
                    return ed.intl.string(ec.default["2Cu8n+"]);
                default:
                    return ed.intl.string(ec.default["6kgw6D"]);
            }
        })(t),
    });
}
function om(e, t) {
    return String(e).padStart(t, "0");
}
function of(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let l = Date.parse(e);
    if (Number.isNaN(l)) return null;
    let n = new Date(l),
        a = `${om(n.getHours(), 2)}:${om(n.getMinutes(), 2)}:${om(n.getSeconds(), 2)}`;
    return "millis" === t ? `${a}.${om(n.getMilliseconds(), 3)}` : a;
}
let oh = ["op", "model", "tool", "setup", "worktree", "sandbox", "build", "platform", "other"],
    og = {
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
function ox(e) {
    return e.spans.find((e) => null == e.parent) ?? null;
}
function op(e) {
    return { collapsed: ow(e, (e) => e.depth > 0 && !e.children.some((e) => e.significant)), revealed: new Set() };
}
function ov(e, t) {
    let l = null;
    return (
        oy(e, (e) => {
            e.key === t && (l = e);
        }),
        l
    );
}
function oj(e) {
    return null == e
        ? ""
        : Object.entries(e)
              .map((e) => {
                  let [t, l] = e;
                  return !0 === l ? t : `${t}=${String(l)}`;
              })
              .join(" ");
}
function ob(e) {
    return e.count > 1 ? e.totalMs : e.end - e.start;
}
function oy(e, t) {
    for (let l of (t(e), e.children)) oy(l, t);
}
function ok(e) {
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
        category: og[l] ?? "other",
    };
}
function ow(e, t) {
    let l = new Set();
    return (
        !(function e(n) {
            for (let a of (n.children.length > 0 && t(n) && l.add(n.key), n.children)) e(a);
        })(e),
        l
    );
}
function oN(e) {
    return `${e.name} ${oj(e.attrs)}`;
}
function oA(e) {
    let t = new Map();
    for (let l of e.spans) {
        let e = t.get(l.parent) ?? [];
        (e.push(l), t.set(l.parent, e));
    }
    for (let e of t.values()) e.sort((e, t) => e.start - t.start);
    return t;
}
function oS(e, t) {
    return t.end ?? e.reported_at;
}
function oC(e, t, l, n) {
    let a = t
            .map((t) => [Math.max(t.start, l), Math.min(oS(e, t), n)])
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
let oE = {
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
function oI(e) {
    return oi(Math.round(e));
}
function oM(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function oT(e) {
    return oI(e.count > 1 ? e.totalMs : e.end - e.start);
}
function o_(e) {
    let t = ox(e)?.end;
    return null == t ? null : oi(t);
}
function oP(e) {
    return [of(new Date(e.started_at).toISOString()) ?? "", oM(e.spans.length), oj(ox(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
var oR = l(738188),
    oL = l(430993),
    oD = l(364840),
    o$ = l(224640),
    oF = l(20742);
let oz = { collapsed: new Set(), revealed: new Set() };
var oO = l(872892);
let oG = {
    op: oO.Q,
    model: oO.i3,
    tool: oO.dH,
    setup: oO.kc,
    worktree: oO.Qx,
    sandbox: oO.QH,
    build: oO.F1,
    platform: oO.Op,
    other: oO.fv,
};
function oU(e) {
    return `conjure-perf-trace-${e}`;
}
function oq(e) {
    let { start: t, end: l, extent: n, barClass: a, duration: i } = e,
        s = (t / n) * 100,
        o = ((l - t) / n) * 100;
    return (0, r.jsxs)("div", {
        className: oO.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(o) },
        children: [
            (0, r.jsx)("div", { className: a }),
            (0, r.jsx)(y.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${oO.p0} ${s + o > 85 ? oO.EU : oO.jh}`,
                children: i,
            }),
        ],
    });
}
function oH(e) {
    let { node: t, extent: l, collapsed: n, selected: a, onSelect: s, onToggle: o, onExpandSubtree: u } = e,
        c = t.children.length > 0,
        d = n ? ti._ : tH.a,
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
    return (0, r.jsxs)(k.D, {
        tag: "div",
        role: "treeitem",
        id: oU(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !n : void 0,
        "aria-selected": a,
        className: `${oO.$y} ${a ? oO.wQ : ""}`,
        onClick: m,
        children: [
            (0, r.jsxs)("div", {
                className: oO.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, r.jsx)(k.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: oO.ai,
                              onClick: f,
                              children: (0, r.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, r.jsx)("span", { className: oO.YJ }),
                    (0, r.jsx)(y.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: oO.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, r.jsx)("span", { className: `${oO.nf} ${oG[t.category]}` }),
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        className: oO.eu,
                        children: t.service,
                    }),
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: oO.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, r.jsx)(y.E, {
                              variant: "text-xs/semibold",
                              color: "text-default",
                              className: oO.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, r.jsx)(oR.WarningIcon, { size: "xs", color: "currentColor", className: oO.ik })
                        : null,
                ],
            }),
            (0, r.jsx)(oq, {
                start: t.start,
                end: t.end,
                extent: l,
                barClass: t.failed
                    ? `${oO.M0} ${oO.Nh}`
                    : t.running
                      ? `${oO.M0} ${oO.rF}`
                      : `${oO.M0} ${oG[t.category]}`,
                duration: oT(t),
            }),
        ],
    });
}
function oB(e) {
    let { row: t, extent: l, selected: n, onReveal: a } = e;
    return (0, r.jsxs)(k.D, {
        tag: "div",
        role: "treeitem",
        id: oU(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": n,
        className: `${oO.$y} ${n ? oO.wQ : ""}`,
        onClick: () => a(t.parentKey),
        children: [
            (0, r.jsxs)("div", {
                className: oO.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, r.jsx)("span", {
                        className: oO.ai,
                        children: (0, r.jsx)(ti._, { size: "xs", color: "currentColor" }),
                    }),
                    (0, r.jsx)("span", { className: oO.U9 }),
                    (0, r.jsx)("span", { className: `${oO.nf} ${oO.dL}` }),
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: oO.MQ,
                        children: oM(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, r.jsx)(oq, {
                start: t.start,
                end: t.end,
                extent: l,
                barClass: `${oO.M0} ${oO.ab} ${oO.dL}`,
                duration: oI(t.totalMs),
            }),
        ],
    });
}
function oK(e) {
    let { node: t } = e;
    return null == t
        ? (0, r.jsx)(y.E, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, r.jsxs)("div", {
              className: oO._0,
              children: [
                  (0, r.jsxs)("div", {
                      className: oO.TQ,
                      children: [
                          (0, r.jsx)("span", { className: `${oO.nf} ${oG[t.category]}` }),
                          (0, r.jsx)(y.E, { variant: "text-sm/semibold", color: "text-strong", children: t.service }),
                          (0, r.jsx)(y.E, { variant: "text-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [
                          { label: "Start", value: `+${oI(e.start)}` },
                          { label: "Duration", value: oT(e) },
                      ];
                      for (let [l, n] of (e.count > 1
                          ? t.push(
                                { label: "Calls", value: String(e.count) },
                                { label: "Longest call", value: oI(e.maxMs) },
                                { label: "Spread over", value: oI(e.end - e.start) },
                            )
                          : e.children.length > 0 && t.push({ label: "Self time", value: oI(e.selfMs) }),
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
                                  (0, r.jsx)(y.E, { variant: "text-xs/semibold", color: "text-muted", children: t }),
                                  (0, r.jsx)(y.E, {
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
function oV(e) {
    let { trace: t } = e,
        l = (function (e) {
            let t = i.useMemo(
                    () =>
                        null == e
                            ? null
                            : (function (e) {
                                  let t = oA(e);
                                  function l(e) {
                                      return !t.has(e.id) && null != e.end && null == e.error;
                                  }
                                  let n = ox(e);
                                  if (null == n) return null;
                                  let a = (function n(a, r, i, s) {
                                          let o = a[0],
                                              u = Math.min(...a.map((e) => e.start)),
                                              c = Math.max(...a.map((t) => oS(e, t))),
                                              d = a.map((t) => oS(e, t) - t.start),
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
                                                  selfMs: c - u - oC(e, m, u, c),
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
                                                              r.start < oS(n, i) && i.start < oS(n, r))
                                                          );
                                                      }),
                                                  ),
                                                  outlivedParent: c > s,
                                                  ...ok(o),
                                                  significant: !1,
                                                  children: [],
                                                  descendants: 0,
                                              },
                                              h = new Map();
                                          for (let e of m) l(e) && h.set(oN(e), (h.get(oN(e)) ?? 0) + 1);
                                          let g = new Set();
                                          for (let e of m) {
                                              let t = oN(e);
                                              if (l(e) && (h.get(t) ?? 0) >= 4) {
                                                  if (g.has(t)) continue;
                                                  g.add(t);
                                                  let e = m.filter((e) => l(e) && oN(e) === t);
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
                                      oy(a, (e) => {
                                          e.significant = ob(e) >= r;
                                      }),
                                      a
                                  );
                              })(e),
                    [e],
                ),
                [l, n] = i.useState(() => (null == t ? oz : op(t))),
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
                                            totalMs: r.reduce((e, t) => e + ob(t), 0),
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
                        let l = null == t ? null : ov(t, e);
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
                        let l = null == t ? null : ov(t, e);
                        null != l &&
                            n((e) => {
                                let t, n;
                                return (
                                    (t = new Set(e.collapsed)),
                                    (n = new Set(e.revealed)),
                                    oy(l, (e) => {
                                        (t.delete(e.key), n.add(e.key));
                                    }),
                                    { collapsed: t, revealed: n }
                                );
                            });
                    },
                    [t],
                ),
                d = i.useCallback(() => {
                    null != t && n({ collapsed: new Set(), revealed: ow(t, () => !0) });
                }, [t]),
                m = i.useCallback(() => {
                    null != t && n({ collapsed: ow(t, (e) => e.depth > 0), revealed: new Set() });
                }, [t]),
                f = i.useCallback(() => {
                    null != t && n(op(t));
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
        f = Math.max(1, ...t.spans.map((e) => oS(t, e))),
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
                    let t = oA(e),
                        l = new Map();
                    for (let n of e.spans) {
                        if (null == n.parent) continue;
                        let a = oS(e, n),
                            r = a - n.start - oC(e, t.get(n.id) ?? [], n.start, a),
                            { service: i, operation: s } = ok(n),
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
                    null != t && (u(t.key), document.getElementById(oU(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [a, m, d, n, u, o, c],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(oL.c, {
                children: [
                    (0, r.jsxs)("div", {
                        className: oO.z,
                        children: [
                            (0, r.jsx)(y.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: o_(t) ?? "still running",
                            }),
                            (0, r.jsx)(y.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: oP(t),
                            }),
                            null == t.started_by
                                ? null
                                : (0, r.jsx)(y.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: `Started by ${t.started_by.trace_name}`,
                                  }),
                            0 === t.dropped
                                ? null
                                : (0, r.jsx)(y.E, {
                                      variant: "text-sm/normal",
                                      color: "text-feedback-warning",
                                      children: `${oM(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: oO.KE,
                        children: [
                            (0, r.jsx)(S.$, { size: "sm", variant: "secondary", text: "Time sinks", onClick: l.reset }),
                            (0, r.jsx)(S.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Expand all",
                                onClick: l.expandAll,
                            }),
                            (0, r.jsx)(S.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Collapse all",
                                onClick: l.collapseAll,
                            }),
                            (0, r.jsx)(y.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: "Shift-click a span to expand everything under it.",
                            }),
                            (0, r.jsx)("div", {
                                className: oO.o1,
                                children: oh.map((e) =>
                                    (0, r.jsxs)(
                                        "span",
                                        {
                                            className: oO.fI,
                                            children: [
                                                (0, r.jsx)("span", { className: `${oO.nf} ${oG[e]}` }),
                                                (0, r.jsx)(y.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: oE[e],
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
                        "aria-activedescendant": null == o ? void 0 : oU(o),
                        className: oO.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(x) },
                        onKeyDown: p,
                        children: [
                            (0, r.jsxs)("div", {
                                className: oO.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: oO.So,
                                        children: (0, r.jsx)(y.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, r.jsx)("div", {
                                        className: oO.c1,
                                        children: h.map((e) =>
                                            (0, r.jsx)(
                                                y.E,
                                                {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${oO.io} ${(e / f) * 100 > 85 ? oO.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / f) * 100),
                                                    },
                                                    children: 0 === e ? "0" : oI(e),
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
                                          oH,
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
                                    : (0, r.jsx)(oB, { row: e, extent: f, selected: e.key === o, onReveal: d }, e.key),
                            ),
                        ],
                    }),
                    0 === g.length
                        ? null
                        : (0, r.jsxs)("div", {
                              className: oO.xZ,
                              children: [
                                  (0, r.jsx)(y.E, {
                                      variant: "text-sm/semibold",
                                      color: "text-default",
                                      children: "Most time",
                                  }),
                                  g.map((e) => {
                                      let { name: t, ms: l } = e;
                                      return (0, r.jsx)(
                                          y.E,
                                          {
                                              variant: "text-sm/normal",
                                              color: "text-muted",
                                              tabularNumbers: !0,
                                              children: `${t} ${oI(l)}`,
                                          },
                                          t,
                                      );
                                  }),
                              ],
                          }),
                ],
            }),
            (0, r.jsx)(oD.j, { children: (0, r.jsx)(oK, { node: s }) }),
        ],
    });
}
function oW(e) {
    let { transitionState: t, onClose: l, projectId: n, traceId: a } = e,
        i = (0, m.bG)([or.A], () => or.A.getTimingTrace(n, a), [n, a]),
        s = i?.name ?? "Perf Trace";
    return (0, r.jsxs)(o$.d, {
        transitionState: t,
        onClose: l,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, r.jsx)(oF.rQ, { title: s }),
            null == i
                ? (0, r.jsx)(oL.c, {
                      children: (0, r.jsx)(y.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, r.jsx)(oV, { trace: i }),
        ],
    });
}
function oX(e) {
    let { projectId: t, trace: l } = e,
        n = l.spans.find((e) => null != e.error)?.error,
        a = i.useCallback(() => {
            (0, tt.openModal)((e) => (0, r.jsx)(oW, { ...e, projectId: t, traceId: l.id }));
        }, [t, l.id]);
    return (0, r.jsxs)(k.D, {
        className: oO.nM,
        onClick: a,
        children: [
            (0, r.jsxs)("div", {
                className: oO.sU,
                children: [
                    (0, r.jsx)(od, {
                        status:
                            l.spans.some((e) => null != e.error) || ox(l)?.attrs?.ok === !1
                                ? "error"
                                : l.spans.some((e) => null == e.end)
                                  ? "started"
                                  : "ok",
                    }),
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        className: oO._k,
                        children: l.name,
                    }),
                    (0, r.jsx)(y.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: o_(l) ?? "still running",
                    }),
                ],
            }),
            (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-muted", tabularNumbers: !0, children: oP(l) }),
            null == n
                ? null
                : (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: n }),
        ],
    });
}
function oJ(e) {
    let { projectId: t } = e,
        l = (0, m.yK)([or.A], () => or.A.getTimingTraces(t), [t]),
        n = i.useMemo(() => [...l].reverse(), [l]);
    return 0 === l.length
        ? (0, r.jsxs)("div", {
              className: oO.Ie,
              children: [
                  (0, r.jsx)(y.E, { variant: "text-sm/medium", color: "text-default", children: "No perf traces yet" }),
                  (0, r.jsx)(y.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: "Turns and project operations over 100ms record a timing trace here when they finish.",
                  }),
              ],
          })
        : (0, r.jsx)("div", {
              className: oO.nd,
              children: (0, r.jsx)(l7.Ch, {
                  className: oO.XG,
                  children: (0, r.jsx)("ul", {
                      className: oO.p_,
                      "aria-label": "Perf traces",
                      children: n.map((e) =>
                          (0, r.jsx)("li", { children: (0, r.jsx)(oX, { projectId: t, trace: e }) }, e.id),
                      ),
                  }),
              }),
          });
}
function oQ(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let l = t / 1024;
    if (l < 1024) return `${l >= 100 ? Math.round(l) : l.toFixed(1)} MB`;
    let n = l / 1024;
    return `${n >= 100 ? Math.round(n) : n.toFixed(1)} GB`;
}
function oY(e) {
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
    let l = String(t.getHours()).padStart(2, "0"),
        n = String(t.getMinutes()).padStart(2, "0"),
        a = String(t.getSeconds()).padStart(2, "0");
    return `${l}:${n}:${a}`;
}
function o1(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = new Date();
    return t.getFullYear() === l.getFullYear() && t.getMonth() === l.getMonth() && t.getDate() === l.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function o2(e) {
    let t = e.split("/").filter((e) => "" !== e),
        l = t[t.length - 1] ?? e;
    return l.length > 12 ? l.slice(0, 12) : l;
}
function o3(e) {
    return ed.intl.string("preview" === e ? ec.default["2yLYlG"] : ec.default.eiAi57);
}
let o4 = ["all", "preview", "stable", "web"],
    o6 = new Set(["error", "aborted", "length"]);
function o7(e) {
    switch (e.reason) {
        case "local":
            return ed.intl.string(ec.default.mUeKML);
        case "unconfigured":
            return ed.intl.string(ec.default.bGefb5);
        case "unauthorized":
            return ed.intl.string(ec.default.KLx6Bb);
        default:
            return null != e.detail
                ? ed.intl.formatToPlainString(ec.default.t09Q6q, { detail: e.detail })
                : ed.intl.string(ec.default["t+tG59"]);
    }
}
function o5(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : ed.intl.formatToPlainString(ec.default["XO/bN4"], {
              p50: oQ(e.memory_p50_bytes ?? 0),
              p999: oQ(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let o8 = {
    db: () => ec.default["7l+DFG"],
    db_preview: () => ec.default.FAuffi,
    runtime: () => ec.default["Gkl+ab"],
    runtime_preview: () => ec.default.ynpJzv,
    bot: () => ec.default["5/i0cj"],
    bot_preview: () => ec.default.m2jsnw,
};
var o9 = l(911608),
    ue = l(177427);
function ut(e) {
    let { generatedAt: t, fetchState: l, onRefresh: n } = e;
    return (0, r.jsxs)("div", {
        className: ue.KE,
        children: [
            (0, r.jsx)("div", {
                className: ue.IQ,
                children:
                    "loading" === l
                        ? (0, r.jsx)(A.y, { type: A.t.PULSING_ELLIPSIS })
                        : "failed" === l
                          ? (0, r.jsx)(y.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: ed.intl.string(ec.default.ZVByPX),
                            })
                          : null != t
                            ? (0, r.jsx)(y.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: ed.intl.formatToPlainString(ec.default.INVO50, { time: o1(t) }),
                              })
                            : null,
            }),
            (0, r.jsx)(S.$, { variant: "secondary", size: "sm", text: ed.intl.string(ec.default.oKEgiu), onClick: n }),
        ],
    });
}
function ul(e) {
    let { title: t, children: l } = e;
    return (0, r.jsxs)("section", {
        className: ue.uW,
        "aria-label": t,
        children: [
            (0, r.jsx)(y.E, { variant: "text-xs/semibold", color: "text-muted", className: ue.Gf, children: t }),
            l,
        ],
    });
}
function un(e) {
    let { label: t, value: l, hint: n, critical: a = !1 } = e;
    return (0, r.jsxs)("div", {
        className: ue.N8,
        children: [
            (0, r.jsxs)("div", {
                className: ue.x7,
                children: [
                    (0, r.jsx)(y.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/medium",
                        color: a ? "text-feedback-critical" : "text-default",
                        children: l,
                    }),
                ],
            }),
            null != n && (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-muted", children: n }),
        ],
    });
}
function ua(e) {
    let { label: t, used: l, max: n, formatValue: a } = e,
        i = n > 0 ? Math.min(1, Math.max(0, l / n)) : 0,
        s = i >= 0.9;
    return (0, r.jsxs)("div", {
        className: ue.N8,
        children: [
            (0, r.jsxs)("div", {
                className: ue.x7,
                children: [
                    (0, r.jsx)(y.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${a(l)} / ${a(n)}`,
                    }),
                ],
            }),
            (0, r.jsx)(o9.z, {
                value: 100 * i,
                valueLabel: `${a(l)} of ${a(n)}`,
                "aria-label": t,
                className: s ? ue.dh : void 0,
            }),
        ],
    });
}
function ur(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, r.jsx)(un, {
            label: ed.intl.string(ec.default.SXP7pD),
            value: ed.intl.string(ec.default.E5hKVi),
            hint: o7(t),
        });
    let l = t.objects?.find((e) => "agent" === e.role);
    if (null == l)
        return (0, r.jsx)(un, {
            label: ed.intl.string(ec.default.SXP7pD),
            value: "\u2014",
            hint: ed.intl.string(ec.default.AGvoMJ),
        });
    let n = o5(l);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(un, { label: ed.intl.string(ec.default["H/X+FI"]), value: oY(l.cpu_ms) }),
            null != n && (0, r.jsx)(un, { label: ed.intl.string(ec.default.lmFmMO), value: n }),
        ],
    });
}
function ui(e) {
    let { analytics: t } = e,
        l = ed.intl.string(ec.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, r.jsx)(ul, {
            title: l,
            children: (0, r.jsx)(y.E, { variant: "text-sm/normal", color: "text-muted", children: o7(t) }),
        });
    let n = (t.objects ?? [])
        .map((e) => {
            var t;
            let l;
            return {
                object: e,
                label: null != (l = "agent" !== (t = e.role) ? o8[t] : null) ? ed.intl.string(l()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, r.jsx)(ul, {
        title: l,
        children:
            0 === n.length
                ? (0, r.jsx)(y.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: ed.intl.string(ec.default.AGvoMJ),
                  })
                : n.map((e) => {
                      let { object: t, label: l } = e;
                      return (0, r.jsx)(
                          un,
                          {
                              label: l,
                              value: ed.intl.formatToPlainString(ec.default["w/2voO"], { cpu: oY(t.cpu_ms) }),
                              hint: o5(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var us = l(400154);
let uo = [];
function uu(e) {
    let t,
        { call: l } = e,
        { text: n, bad: a } =
            ((t = null != l.stopReason && o6.has(l.stopReason)),
            {
                text: [
                    null != l.durationMs ? oY(l.durationMs) : null,
                    `${oZ(l.inputTokens + l.cacheReadTokens + l.cacheWriteTokens)} \u{2192} ${oZ(l.outputTokens)}`,
                    t ? l.stopReason : null,
                ]
                    .filter((e) => null != e)
                    .join(" \xb7 "),
                bad: t,
            });
    return (0, r.jsxs)("div", {
        className: us.p5,
        children: [
            (0, r.jsx)(y.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: us.Q5,
                children: o0(l.observedAt),
            }),
            (0, r.jsxs)(y.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-default",
                className: us.qN,
                children: [l.role, " \xb7 ", l.model],
            }),
            (0, r.jsx)(y.E, {
                tag: "span",
                variant: "text-xs/medium",
                color: a ? "text-feedback-critical" : "text-muted",
                children: n,
            }),
        ],
    });
}
function uc(e, t) {
    return (0, r.jsx)(un, {
        label: e,
        value: ed.intl.formatToPlainString(ec.default.yHJxuP, { count: oZ((0, ee.aM)(t)) }),
        hint: `${oZ(t.input_tokens)} in \xb7 ${oZ(t.output_tokens)} out \xb7 ${oZ(t.cache_read_input_tokens)} cache read`,
    });
}
function ud(e) {
    let { projectId: t, status: l, fetchState: n, onRefresh: a, traceVisible: s = !1 } = e,
        o = (0, m.bG)([or.A], () => or.A.getLastTurnUsage(t), [t]),
        u = (0, m.bG)([or.A], () => or.A.getLastCompaction(t), [t]),
        c = (0, m.bG)([or.A], () => or.A.getLastCompactionDecline(t), [t]),
        d = (0, m.bG)([or.A], () => or.A.getForceCompactionState(t), [t]),
        f = i.useCallback(() => (0, er.Lj)(t), [t]),
        h = i.useCallback(() => (0, er.Lj)(t, !0), [t]),
        g = (0, m.bG)([or.A], () => (s ? uo : or.A.getModelCalls(t)), [t, s]),
        x = l?.agent?.lifetime ?? null,
        p = l?.agent?.limits ?? null,
        v = l?.agent?.session ?? null,
        j = u?.promptCeiling ?? p?.context_window_tokens ?? null;
    return (0, r.jsxs)("div", {
        className: us.Mf,
        children: [
            (0, r.jsx)(ut, { generatedAt: l?.generated_at ?? null, fetchState: n, onRefresh: a }),
            (0, r.jsx)(ul, {
                title: ed.intl.string(ec.default.JghNal),
                children:
                    null == x
                        ? (0, r.jsx)(y.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: ed.intl.string(ec.default.s0U5Fv),
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(un, {
                                      label: ed.intl.string(ec.default["9nqym2"]),
                                      value: oZ((0, ee.a7)(x.cost_usd)),
                                      hint: ed.intl.formatToPlainString(ec.default.NCdUIh, { count: oZ(x.turns) }),
                                  }),
                                  uc(ed.intl.string(ec.default.xtxP0e), x.orchestrator),
                                  uc(ed.intl.string(ec.default["9Sj3SX"]), x.codegen),
                                  uc(ed.intl.string(ec.default.ANCEo3), (0, ee.wU)(x.compaction)),
                                  l?.agent?.outcomes != null &&
                                      Object.keys(l.agent.outcomes).length > 0 &&
                                      (0, r.jsx)(un, {
                                          label: ed.intl.string(ec.default.SQHm7C),
                                          value: Object.entries(l.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, l] = e,
                                                      [, n] = t;
                                                  return n - l;
                                              })
                                              .map((e) => {
                                                  let [t, l] = e;
                                                  return `${oZ(l)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, r.jsx)(ul, {
                title: ed.intl.string(ec.default.dZHPE5),
                children:
                    null == o
                        ? (0, r.jsx)(y.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: ed.intl.string(ec.default.DfVjal),
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  uc(ed.intl.string(ec.default["7X3i9d"]), o.total),
                                  (0, r.jsx)(un, {
                                      label: ed.intl.string(ec.default["8OUg09"]),
                                      value: `${Math.round((o.cache_hit_rate ?? (0, ee.CA)(o.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, r.jsxs)(ul, {
                title: ed.intl.string(ec.default.NbRk9a),
                children: [
                    null != u && null != j
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(ua, {
                                      label: ed.intl.string(ec.default.Kw5wiQ),
                                      used: u.tokensAfter,
                                      max: j,
                                      formatValue: oZ,
                                  }),
                                  (0, r.jsx)(un, {
                                      label: ed.intl.string(ec.default.mRbSns),
                                      value: `${oZ(u.tokensBefore)} \u{2192} ${oZ(u.tokensAfter)}`,
                                      hint: ed.intl.formatToPlainString(ec.default.Vq3skS, {
                                          count: oZ(u.retainedMessages),
                                          time: o1(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, r.jsx)(y.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != j
                                      ? ed.intl.formatToPlainString(ec.default.GMLCNv, { ceiling: oZ(j) })
                                      : ed.intl.string(ec.default.s0U5Fv),
                          }),
                    null != c &&
                        (0, r.jsx)(un, {
                            label: ed.intl.string(ec.default["4BX5KK"]),
                            value: `${oZ(c.projected)} / ${oZ(c.threshold)}`,
                            critical: !0,
                            hint: ed.intl.formatToPlainString(ec.default["6ngCax"], { time: o1(c.observedAt) }),
                        }),
                    (0, r.jsxs)("div", {
                        className: us.Lj,
                        children: [
                            (0, r.jsx)(S.$, {
                                variant: "secondary",
                                size: "sm",
                                text: ed.intl.string(ec.default["1EiJeb"]),
                                disabled: "pending" === d,
                                onClick: f,
                            }),
                            (0, r.jsx)(y.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof d && "compacted" !== d.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return ed.intl.string(ec.default.wox6Ev);
                                    if ("pending" === e) return ed.intl.string(ec.default.OcPHQ1);
                                    let t = o1(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return ed.intl.formatToPlainString(ec.default.BhRjZZ, { time: t });
                                    let l =
                                        "declined" === e.outcome
                                            ? ec.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? ec.default.YZb4hK
                                              : ec.default.ZoUSVK;
                                    return ed.intl.formatToPlainString(l, {
                                        reason: e.reason ?? "no reason given",
                                        time: t,
                                    });
                                })(d),
                            }),
                            "object" == typeof d &&
                                !0 === d.pendingTurn &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(S.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: ed.intl.string(ec.default.ZxG2AI),
                                            onClick: h,
                                        }),
                                        (0, r.jsx)(y.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: ed.intl.string(ec.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            !s &&
                (0, r.jsx)(ul, {
                    title: ed.intl.string(ec.default.TkTRdW),
                    children:
                        0 === g.length
                            ? (0, r.jsx)(y.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: ed.intl.string(ec.default["r3/FhI"]),
                              })
                            : (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      g
                                          .slice(-30)
                                          .reverse()
                                          .map((e) => (0, r.jsx)(uu, { call: e }, e.id)),
                                      g.length > 30 &&
                                          (0, r.jsx)(y.E, {
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              children: ed.intl.formatToPlainString(ec.default["uZ9P/O"], {
                                                  shown: 30,
                                                  total: g.length,
                                              }),
                                          }),
                                  ],
                              }),
                }),
            (null != v || l?.analytics != null) &&
                (0, r.jsxs)(ul, {
                    title: ed.intl.string(ec.default.EsSzCS),
                    children: [
                        null != v &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(un, {
                                        label: ed.intl.string(ec.default.CLXHAs),
                                        value: o1(v.instance_since),
                                        hint: ed.intl.string(ec.default.UCwUEX),
                                    }),
                                    (0, r.jsx)(un, {
                                        label: ed.intl.string(ec.default["8V8e1Z"]),
                                        value: oZ(v.sockets),
                                    }),
                                    (0, r.jsx)(un, {
                                        label: ed.intl.string(ec.default["4pBzYW"]),
                                        value: v.turn_inflight
                                            ? ed.intl.string(ec.default.Wv025I)
                                            : ed.intl.string(ec.default["7/lsFY"]),
                                    }),
                                    v.queued_messages > 0 &&
                                        (0, r.jsx)(un, {
                                            label: ed.intl.string(ec.default["3oUYnv"]),
                                            value: oZ(v.queued_messages),
                                        }),
                                ],
                            }),
                        l?.analytics != null && (0, r.jsx)(ur, { analytics: l.analytics }),
                    ],
                }),
            null != p &&
                (0, r.jsxs)(ul, {
                    title: ed.intl.string(ec.default["LEIhp/"]),
                    children: [
                        (0, r.jsx)(un, {
                            label: ed.intl.string(ec.default.IlDBN3),
                            value: oZ(p.max_subagent_iterations),
                        }),
                        (0, r.jsx)(un, {
                            label: ed.intl.string(ec.default["ZdzKR+"]),
                            value: ed.intl.formatToPlainString(ec.default.yHJxuP, {
                                count: oZ(p.context_window_tokens),
                            }),
                        }),
                        (0, r.jsx)(un, {
                            label: ed.intl.string(ec.default.cIhN2W),
                            value: ed.intl.formatToPlainString(ec.default.yHJxuP, {
                                count: oZ(p.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, r.jsx)(un, {
                            label: ed.intl.string(ec.default["+fOn/q"]),
                            value: oZ(p.max_user_message_chars),
                        }),
                        (0, r.jsx)(un, { label: ed.intl.string(ec.default.kIHga0), value: oZ(p.max_build_attempts) }),
                        (0, r.jsx)(un, { label: ed.intl.string(ec.default.Iw03yW), value: oZ(p.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var um = l(237528),
    uf = l(629584),
    uh = l(683438),
    ug = l(531893);
function ux(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, r.jsx)("div", {
              className: ug.ut,
              children: (0, r.jsx)(y.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: ed.intl.string(ec.default.h1SE6R),
              }),
          });
}
function up(e) {
    let { state: t, emptyTitle: l, emptyBody: n } = e;
    return "failed" === t.status
        ? (0, r.jsxs)("div", {
              className: ug.qf,
              children: [
                  (0, r.jsx)(y.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: ed.intl.string(ec.default.h1SE6R),
                  }),
                  (0, r.jsx)(y.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: ed.intl.string(ec.default["8SErdg"]),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: ug.qf,
              children: [
                  (0, r.jsx)(y.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                  (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-muted", children: n }),
              ],
          });
}
function uv(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, r.jsx)("div", {
              className: ug.ps,
              children: (0, r.jsx)(y.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: ed.intl.string(ec.default.V7Ri8H),
              }),
          })
        : null;
}
var uj = l(109079);
let ub = i.memo(function (e) {
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
        className: uj.vK,
        children: [
            (0, r.jsx)(y.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: uj.Mt,
                selectable: !0,
                children: o0(l.ts),
            }),
            (0, r.jsx)(y.E, {
                tag: "span",
                variant: "text-xxs/semibold",
                color:
                    "error" === (t = l.level)
                        ? "text-feedback-critical"
                        : "warn" === t
                          ? "text-feedback-warning"
                          : "text-muted",
                className: uj.dm,
                children: l.level,
            }),
            (0, r.jsxs)("div", {
                className: uj.t4,
                children: [
                    n &&
                        null != l.source &&
                        (0, r.jsx)("span", { className: uj.Cq, children: (0, r.jsx)(um.v, { text: l.source }) }),
                    null != l.kind &&
                        (0, r.jsx)("span", {
                            className: uj.Cq,
                            title: l.build ?? void 0,
                            children: (0, r.jsx)(um.v, {
                                text: ed.intl.string(ec.default.TrC9c8),
                                variant: "redLight",
                            }),
                        }),
                    null != u
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  "" !== u.prefix &&
                                      (0, r.jsxs)(y.E, {
                                          tag: "span",
                                          variant: "text-xs/normal",
                                          color: c,
                                          selectable: !0,
                                          children: [u.prefix, " "],
                                      }),
                                  (0, r.jsxs)(k.D, {
                                      className: uj.Pq,
                                      "aria-expanded": a,
                                      "aria-controls": o,
                                      "aria-label": ed.intl.string(ec.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          a
                                              ? (0, r.jsx)(tH.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, r.jsx)(ti._, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, r.jsxs)(y.E, {
                                              tag: "span",
                                              variant: "text-xs/medium",
                                              color: "none",
                                              children: [
                                                  u.marker,
                                                  " ",
                                                  ed.intl.formatToPlainString(
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
                                      (0, r.jsx)(y.E, {
                                          tag: "div",
                                          variant: "text-xs/normal",
                                          color: c,
                                          className: uj.dF,
                                          selectable: !0,
                                          id: o,
                                          children: u.pretty,
                                      }),
                              ],
                          })
                        : (0, r.jsx)(y.E, {
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
function uy(e) {
    let { projectId: t } = e,
        l = (0, m.bG)([eE.Ay], () => eE.Ay.getLogs(t), [t]),
        n = (0, m.bG)([eE.Ay], () => eE.Ay.getHistoryState(t, "logs")),
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
                o4.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return o3(e);
                            case "web":
                                return ed.intl.string(ec.default.IVzfVV);
                            default:
                                return ed.intl.string(ec.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, r.jsxs)("div", {
        className: uj.$F,
        children: [
            (0, r.jsxs)("div", {
                className: uj.y4,
                children: [
                    (0, r.jsx)(uf.I, {
                        look: "pill",
                        "aria-label": ed.intl.string(ec.default.MhvyUU),
                        options: g,
                        value: a,
                        onChange: (e) => s(e.value),
                    }),
                    (0, r.jsx)("div", {
                        className: uj.KT,
                        children: (0, r.jsx)(uh.I, {
                            query: o,
                            onChange: u,
                            onClear: () => u(""),
                            size: "sm",
                            placeholder: ed.intl.string(ec.default["m2+37Y"]),
                            "aria-label": ed.intl.string(ec.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            l.length > 0 && (0, r.jsx)(ux, { state: n }),
            (0, r.jsxs)(l7.Ch, {
                ref: d,
                onScroll: h,
                overflow: "auto",
                className: uj.sx,
                children: [
                    (0, r.jsx)(uv, { state: n }),
                    0 === l.length
                        ? (0, r.jsx)(up, {
                              state: n,
                              emptyTitle: ed.intl.string(ec.default.S7qlPG),
                              emptyBody: ed.intl.string(ec.default.nD0S9z),
                          })
                        : 0 === c.length
                          ? (0, r.jsx)(y.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: ed.intl.string(ec.default["4SIdrX"]),
                            })
                          : c.map((e) => (0, r.jsx)(ub, { entry: e.log, showSource: "all" === a }, e.key)),
                ],
            }),
        ],
    });
}
function uk(e) {
    let { title: t, preview: l, stable: n, renderEnv: a } = e,
        s = [];
    return (
        null != l && s.push((0, r.jsx)(i.Fragment, { children: a("preview", l) }, "preview")),
        null != n && s.push((0, r.jsx)(i.Fragment, { children: a("stable", n) }, "stable")),
        (0, r.jsx)(ul, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, r.jsx)(y.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: ed.intl.string(ec.default.umcjif),
                      }),
        })
    );
}
function uw(e) {
    var t;
    let { env: l, bot: n } = e;
    return n.ever_started
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(un, {
                      label: ed.intl.formatToPlainString(ec.default["01ZMS4"], { env: o3(l) }),
                      value: ((t = n.connected), ed.intl.string(t ? ec.default.Wv025I : ec.default["7/lsFY"])),
                      critical: !n.connected && null != n.fatal_reason,
                      hint: n.fatal_reason ?? (n.connected ? void 0 : (n.last_start_reason ?? void 0)),
                  }),
                  (0, r.jsx)(un, {
                      label: ed.intl.string(ec.default["z1dh+F"]),
                      value: oZ(n.events_received),
                      hint:
                          null != n.last_event_type && null != n.last_event_at
                              ? `${n.last_event_type} \xb7 ${o1(n.last_event_at)}`
                              : void 0,
                  }),
                  (0, r.jsx)(un, { label: ed.intl.string(ec.default.Iz5GnJ), value: oZ(n.guild_count) }),
                  (0, r.jsx)(un, {
                      label: ed.intl.string(ec.default["7UqtNv"]),
                      value: oZ(n.reconnects),
                      hint:
                          null != n.last_close_code && null != n.last_close_at
                              ? ed.intl.formatToPlainString(ec.default.MasSly, {
                                    code: n.last_close_code,
                                    time: o1(n.last_close_at),
                                })
                              : void 0,
                  }),
                  n.dispatch_errors > 0 &&
                      (0, r.jsx)(un, {
                          label: ed.intl.string(ec.default["x3+JXJ"]),
                          value: oZ(n.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, r.jsx)(un, { label: o3(l), value: ed.intl.string(ec.default.lTHQss) });
}
function uN(e) {
    let { env: t, metrics: l } = e,
        n = l.status_4xx + l.status_5xx;
    return (0, r.jsx)(un, {
        label: o3(t),
        value: ed.intl.formatToPlainString(ec.default["Xq+wHT"], {
            requests: oZ(l.requests),
            failures: oZ(n + l.errors),
        }),
        critical: l.errors + l.status_5xx > 0,
        hint:
            null != l.last_failure
                ? ed.intl.formatToPlainString(ec.default["o/ZBm4"], {
                      host: l.last_failure.host,
                      status: l.last_failure.status ?? "network",
                      time: o1(l.last_failure.at),
                  })
                : ed.intl.formatToPlainString(ec.default["7KlGT6"], { time: o1(l.since) }),
    });
}
function uA(e) {
    let { env: t, runtime: l } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(un, {
                label: ed.intl.formatToPlainString(ec.default["92gVTm"], { env: o3(t) }),
                value: oZ(l.connections),
            }),
            l.schedules.map((e) =>
                (0, r.jsx)(
                    un,
                    {
                        label: ed.intl.formatToPlainString(ec.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? ed.intl.formatToPlainString(ec.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? ed.intl.formatToPlainString(ec.default.wxAWNv, { time: o1(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function uS(e) {
    let { env: t, metrics: l } = e;
    return (0, r.jsx)(un, {
        label: o3(t),
        value: ed.intl.formatToPlainString(ec.default.suAOj9, { calls: oZ(l.calls), errors: oZ(l.errors) }),
        critical: l.errors > 0,
        hint: l.last_model,
    });
}
function uC(e) {
    let { title: t, metrics: l, limits: n } = e;
    if (null == l || 0 === l.requests)
        return (0, r.jsx)(ul, {
            title: t,
            children: (0, r.jsx)(y.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: ed.intl.string(ec.default["Noami/"]),
            }),
        });
    let a = l.cpu_ms_total / l.requests,
        i = l.cpu_ms_total > 0;
    return (0, r.jsxs)(ul, {
        title: t,
        children: [
            (0, r.jsx)(un, {
                label: ed.intl.string(ec.default.xtD4Zp),
                value: oZ(l.requests),
                hint: ed.intl.formatToPlainString(ec.default["7KlGT6"], { time: o1(l.since) }),
            }),
            (0, r.jsx)(un, { label: ed.intl.string(ec.default.gfRhR3), value: oZ(l.errors), critical: l.errors > 0 }),
            i
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(ua, {
                              label: ed.intl.string(ec.default.LEJ5r3),
                              used: l.cpu_ms_max,
                              max: n.cpu_ms_per_request,
                              formatValue: oY,
                          }),
                          (0, r.jsx)(un, {
                              label: ed.intl.string(ec.default.mSKImM),
                              value: oY(a),
                              hint: ed.intl.formatToPlainString(ec.default.JqMU05, {
                                  total: oY(l.cpu_ms_total),
                                  wall: oY(l.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, r.jsx)(un, {
                      label: ed.intl.string(ec.default.LEJ5r3),
                      value: ed.intl.string(ec.default["2Ekb2b"]),
                      hint: ed.intl.string(ec.default.G0aq7i),
                  }),
            !i &&
                l.wall_ms_total > 0 &&
                (0, r.jsx)(un, { label: ed.intl.string(ec.default.xvmL1D), value: oY(l.wall_ms_total) }),
            l.exceeded_cpu > 0 &&
                (0, r.jsx)(un, {
                    label: ed.intl.string(ec.default["4sQYwH"]),
                    value: oZ(l.exceeded_cpu),
                    critical: !0,
                }),
            (0, r.jsx)(un, {
                label: ed.intl.string(ec.default.bQenOy),
                value: oZ(l.exceeded_memory),
                critical: l.exceeded_memory > 0,
                hint: ed.intl.formatToPlainString(ec.default["5jIZwv"], { limit: `${n.memory_mb} MB` }),
            }),
            null != l.build && (0, r.jsx)(un, { label: ed.intl.string(ec.default.xgpn4Y), value: o2(l.build) }),
        ],
    });
}
function uE(e) {
    let { status: t } = e,
        { stable: l, preview: n, shared_data: a } = t.storage,
        s = t.worker.limits,
        o = a
            ? [{ key: "shared", label: ed.intl.string(ec.default.V5kbaH), metrics: l }]
            : [
                  { key: "preview", label: ed.intl.string(ec.default["2yLYlG"]), metrics: n },
                  { key: "stable", label: ed.intl.string(ec.default.eiAi57), metrics: l },
              ];
    return (0, r.jsx)(ul, {
        title: ed.intl.string(ec.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: l, metrics: n } = e;
            return null == n
                ? (0, r.jsx)(un, { label: l, value: "\u2014" }, t)
                : (0, r.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, r.jsx)(un, {
                                  label: ed.intl.formatToPlainString(ec.default.u7kJJ4, { env: l }),
                                  value: oQ(n.r2_bytes),
                                  hint: ed.intl.formatToPlainString(
                                      n.r2_truncated ? ec.default.lH0oQw : ec.default.m9h02S,
                                      { count: oZ(n.r2_objects) },
                                  ),
                              }),
                              null != n.db_bytes &&
                                  (0, r.jsx)(ua, {
                                      label: ed.intl.formatToPlainString(ec.default.mnbPqt, { env: l }),
                                      used: n.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: oQ,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function uI(e) {
    let { status: t, fetchState: l, onRefresh: n } = e;
    return (0, r.jsxs)("div", {
        className: us.Mf,
        children: [
            (0, r.jsx)(ut, { generatedAt: t?.generated_at ?? null, fetchState: l, onRefresh: n }),
            null != t &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(uC, {
                            title: ed.intl.string(ec.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, r.jsx)(uC, {
                            title: ed.intl.string(ec.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, r.jsx)(uE, { status: t }),
                        null != t.bot &&
                            (0, r.jsx)(uk, {
                                title: ed.intl.string(ec.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, r.jsx)(uw, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, r.jsx)(uk, {
                                title: ed.intl.string(ec.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, r.jsx)(uN, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, r.jsx)(uk, {
                                title: ed.intl.string(ec.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, r.jsx)(uA, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, r.jsx)(uk, {
                                title: ed.intl.string(ec.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, r.jsx)(uS, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, r.jsx)(ui, { analytics: t.analytics }),
                        (0, r.jsxs)(ul, {
                            title: ed.intl.string(ec.default.fQMpFp),
                            children: [
                                (0, r.jsx)(un, {
                                    label: ed.intl.string(ec.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? o2(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, r.jsx)(un, {
                                    label: ed.intl.string(ec.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? o2(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var uM = l(761929),
    uT = l(382541);
let u_ = new Map(),
    uP = new Map(),
    uR = 0,
    uL = 0;
async function uD(e, t, l) {
    let n = uR,
        a = u_.get(t);
    if (null != a) return { status: "loaded", rich: a };
    if (Date.now() < uL) return { status: "forbidden" };
    let r = uP.get(t);
    if (null != r) return r;
    let i = (async () => {
        try {
            let a,
                { ticket: r, baseUrl: i } = await (0, uT.d)(e),
                s = await fetch(
                    ((a = new URL(`${i}/agent/trace-detail`)).searchParams.set("ticket", r),
                    a.searchParams.set("id", t),
                    a.toString()),
                    { method: "GET", credentials: "omit" },
                );
            if (403 === s.status) return ((uL = Date.now() + 6e4), { status: "forbidden" });
            if (!s.ok) return { status: "failed" };
            let o = await s.json();
            if (!0 !== o.available || null == o.rich) return { status: "unavailable" };
            if (n !== uR) return { status: "failed" };
            var l = o.rich;
            for (u_.set(t, l); u_.size > 100;) {
                let e = u_.keys().next();
                if (!0 === e.done) break;
                u_.delete(e.value);
            }
            return { status: "loaded", rich: o.rich };
        } catch {
            return { status: "failed" };
        }
    })();
    uP.set(t, i);
    let s = await i;
    return (uP.get(t) === i && uP.delete(t), l?.aborted === !0 ? { status: "failed" } : s);
}
function u$() {
    ((uR += 1), u_.clear(), uP.clear(), (uL = 0));
}
function uF(e) {
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
let uz = ["model", "tool", "subagent", "delegated", "context"];
function uO(e, t) {
    let l = t.trim().toLowerCase();
    return "" === l
        ? e
        : e.filter((e) => {
              let t;
              return ((t =
                  "model" === e.kind
                      ? [e.model, e.agent, e.stopReason ?? "", e.error ?? ""]
                      : [e.tool, e.agent, e.summary ?? "", e.error ?? ""]).push(uF(e)),
              t.join(" ").toLowerCase()).includes(l);
          });
}
function uG(e, t) {
    return null == t ? null : (e.find((e) => e.id === t) ?? null);
}
let uU = {
    model: "blurpleLight",
    subagent: "greenLight",
    context: "grayLight",
    tool: "grayMedium",
    delegated: "orangeLight",
};
function uq(e) {
    let { category: t } = e;
    return (0, r.jsx)(um.v, { text: oo(t), variant: uU[t] });
}
var uH = l(28863);
let uB = ["arguments", "result", "usage", "diagnostics"];
function uK(e) {
    let { label: t, value: l } = e;
    return (0, r.jsxs)("div", {
        className: ou.wV,
        children: [
            (0, r.jsx)(y.E, { variant: "text-xs/medium", color: "text-muted", className: ou.D6, children: t }),
            (0, r.jsx)("div", { className: ou.zL, children: l }),
        ],
    });
}
function uV(e) {
    let { label: t, value: l } = e;
    return (0, r.jsx)(uK, {
        label: t,
        value: (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-default", selectable: !0, children: l }),
    });
}
function uW(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: ou.WA, children: t });
}
function uX(e) {
    let { title: t, children: l } = e,
        n = i.useId();
    return (0, r.jsxs)("section", {
        "aria-labelledby": n,
        className: ou.xd,
        children: [
            (0, r.jsx)(y.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                id: n,
                className: ou.Hm,
                children: t,
            }),
            l,
        ],
    });
}
function uJ(e) {
    let { title: t, children: l } = e;
    return (0, r.jsxs)("details", {
        className: ou.XK,
        children: [
            (0, r.jsxs)("summary", {
                className: ou.It,
                children: [
                    (0, r.jsx)(ti._, { className: ou.k, size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    (0, r.jsx)(y.E, { variant: "text-xs/semibold", color: "none", children: t }),
                ],
            }),
            (0, r.jsx)("div", { className: ou.bG, children: l }),
        ],
    });
}
function uQ(e) {
    let { field: t } = e;
    if (null != t.value)
        return (0, r.jsx)(uK, {
            label: t.key,
            value: (0, r.jsx)(y.E, {
                variant: "text-xs/normal",
                color: "text-default",
                selectable: !0,
                children: t.value,
            }),
        });
    let l =
        null != t.chars
            ? ed.intl.formatToPlainString(ec.default.ib7All, { count: t.chars })
            : null != t.items
              ? ed.intl.formatToPlainString(ec.default.cIqKbA, { count: t.items })
              : null;
    return (0, r.jsx)(uK, {
        label: t.key,
        value: (0, r.jsxs)("div", {
            className: ou.Kv,
            children: [
                (0, r.jsx)(y.E, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    children: (function (e) {
                        switch (e) {
                            case "prose":
                                return ed.intl.string(ec.default["6oDpz5"]);
                            case "content":
                                return ed.intl.string(ec.default.kSGhxQ);
                            default:
                                return ed.intl.string(ec.default.JwGtRz);
                        }
                    })(t.omitted ?? "content"),
                }),
                null == l
                    ? null
                    : (0, r.jsx)(y.E, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          tabularNumbers: !0,
                          children: l,
                      }),
            ],
        }),
    });
}
function uY(e) {
    let { entries: t } = e;
    return 0 === t.length
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", {
                      className: ou.QR,
                      children: (0, r.jsx)(um.v, { text: ed.intl.string(ec.default.LRIpHQ), variant: "orangeLight" }),
                  }),
                  t.map((e) =>
                      (0, r.jsx)(
                          uK,
                          {
                              label: e.key,
                              value: (0, r.jsxs)("div", {
                                  className: ou.TY,
                                  children: [
                                      null == e.value
                                          ? null
                                          : (0, r.jsx)(y.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                className: ou.Px,
                                                selectable: !0,
                                                children: e.value,
                                            }),
                                      !0 !== e.scrubbed
                                          ? null
                                          : (0, r.jsx)(y.E, {
                                                variant: "text-xs/normal",
                                                color: "text-feedback-warning",
                                                children: ed.intl.string(ec.default["+kQ+K3"]),
                                            }),
                                      !0 !== e.truncated
                                          ? null
                                          : (0, r.jsx)(y.E, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children:
                                                    null == e.chars
                                                        ? ed.intl.string(ec.default.ijkkUh)
                                                        : ed.intl.formatToPlainString(ec.default.PRt8I0, {
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
function uZ(e) {
    let { detail: t } = e,
        l =
            null == t || "loaded" === t.status || "forbidden" === t.status
                ? null
                : ed.intl.string(
                      "loading" === t.status
                          ? ec.default.SKbSyo
                          : "unavailable" === t.status
                            ? ec.default.tdq5Zn
                            : ec.default["Dw1JW/"],
                  );
    return null == l
        ? null
        : (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-subtle", className: ou.E7, children: l });
}
function u0(e) {
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
                uB.filter((e) => n.has(e))
            );
        })(l, { childCount: o, hasParent: null != a }),
        c = (function (e, t) {
            let [l, n] = i.useState(null);
            if (
                (i.useEffect(() => {
                    if (null == t || null != u_.get(t)) return;
                    let l = new AbortController();
                    return (
                        uD(e, t, l.signal).then((e) => {
                            l.signal.aborted || n({ detailId: t, detail: e });
                        }),
                        () => l.abort()
                    );
                }, [e, t]),
                null == t)
            )
                return null;
            let a = u_.get(t);
            return null != a ? { status: "loaded", rich: a } : l?.detailId === t ? l.detail : { status: "loading" };
        })(t, "tool" === l.kind ? l.detailId : void 0),
        d = "model" === l.kind ? l.model : l.tool,
        m = of(l.startedAt, "millis"),
        f = uF(l),
        h = i.useCallback(
            (e) => {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), n());
            },
            [n],
        );
    return (0, r.jsxs)(l7.Ch, {
        className: ou._0,
        onKeyDown: h,
        role: "region",
        "aria-label": ed.intl.formatToPlainString(ec.default.Qiaeyz, { name: d }),
        children: [
            (0, r.jsx)("div", {
                className: ou.sy,
                children: (0, r.jsxs)("div", {
                    className: ou.HI,
                    children: [
                        (0, r.jsx)(od, { status: l.status }),
                        (0, r.jsx)(uq, { category: f }),
                        (0, r.jsx)(y.E, {
                            variant: "text-sm/semibold",
                            color: "text-strong",
                            className: ou.kc,
                            children: d,
                        }),
                        (0, r.jsx)(y.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            tabularNumbers: !0,
                            className: ou.l5,
                            children: null == l.durationMs ? ed.intl.string(ec.default["2wyRDK"]) : oi(l.durationMs),
                        }),
                    ],
                }),
            }),
            null == l.error
                ? null
                : (0, r.jsx)(y.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: ou.Um,
                      selectable: !0,
                      children: l.error,
                  }),
            u.includes("arguments") && "tool" === l.kind
                ? (0, r.jsxs)(uX, {
                      title: ed.intl.string(ec.default["G/4JST"]),
                      children: [
                          (l.fields ?? []).map((e) => (0, r.jsx)(uQ, { field: e }, e.key)),
                          c?.status === "loaded" && null != c.rich.args
                              ? (0, r.jsx)(uY, { entries: c.rich.args })
                              : null,
                          (0, r.jsx)(uZ, { detail: c }),
                      ],
                  })
                : null,
            u.includes("result") && "tool" === l.kind
                ? (0, r.jsxs)(uX, {
                      title: ed.intl.string(ec.default.Dgg25Y),
                      children: [
                          (0, r.jsx)(uV, {
                              label: ed.intl.string(ec.default["U+OQCo"]),
                              value: ed.intl.formatToPlainString(ec.default.ib7All, { count: l.resultChars ?? 0 }),
                          }),
                          null == l.resultAdded
                              ? null
                              : (0, r.jsx)(uV, {
                                    label: ed.intl.string(ec.default["MQYS+n"]),
                                    value: `+${l.resultAdded} \u{2212}${l.resultRemoved ?? 0}`,
                                }),
                          !0 !== l.resultTruncated
                              ? null
                              : (0, r.jsx)(uK, {
                                    label: ed.intl.string(ec.default.t7GJFc),
                                    value: (0, r.jsx)(y.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        children: ed.intl.string(ec.default.ijkkUh),
                                    }),
                                }),
                          c?.status === "loaded" && null != c.rich.result
                              ? (0, r.jsx)(uY, { entries: c.rich.result })
                              : null,
                      ],
                  })
                : null,
            u.includes("usage") && "model" === l.kind
                ? (0, r.jsxs)(uX, {
                      title: ed.intl.string(ec.default.NXmRw1),
                      children: [
                          (0, r.jsxs)(uW, {
                              children: [
                                  null == l.promptTokens
                                      ? null
                                      : (0, r.jsx)(uV, {
                                            label: ed.intl.string(ec.default.iq3T1q),
                                            value: ed.intl.formatToPlainString(ec.default["6GQUgQ"], {
                                                tokens: os(l.promptTokens),
                                            }),
                                        }),
                                  null == l.systemTokens
                                      ? null
                                      : (0, r.jsx)(uV, {
                                            label: ed.intl.string(ec.default.ZELAZn),
                                            value: ed.intl.formatToPlainString(ec.default.Te7mPn, {
                                                system: os(l.systemTokens),
                                                tools: os(l.toolsTokens ?? 0),
                                                toolCount: l.tools ?? 0,
                                                messages: os(l.messagesTokens ?? 0),
                                                messageCount: l.messages ?? 0,
                                            }),
                                        }),
                                  null == l.inputTokens
                                      ? null
                                      : (0, r.jsx)(uV, {
                                            label: ed.intl.string(ec.default["LENc/T"]),
                                            value: String(l.inputTokens),
                                        }),
                                  null == l.outputTokens
                                      ? null
                                      : (0, r.jsx)(uV, {
                                            label: ed.intl.string(ec.default.ewRHwx),
                                            value: String(l.outputTokens),
                                        }),
                                  null == l.cacheReadTokens
                                      ? null
                                      : (0, r.jsx)(uV, {
                                            label: ed.intl.string(ec.default.heVFQD),
                                            value: ed.intl.formatToPlainString(ec.default.VO3gdd, {
                                                read: l.cacheReadTokens,
                                                write: l.cacheWriteTokens ?? 0,
                                            }),
                                        }),
                                  null == l.costUsd
                                      ? null
                                      : (0, r.jsx)(uV, {
                                            label: ed.intl.string(ec.default.aBw2Vm),
                                            value: `$${l.costUsd.toFixed(4)}`,
                                        }),
                              ],
                          }),
                          (0, r.jsx)(y.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              className: ou.E7,
                              children: ed.intl.string(ec.default["foF/Bc"]),
                          }),
                      ],
                  })
                : null,
            u.includes("arguments") || u.includes("result")
                ? (0, r.jsx)(y.E, {
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: ou.E7,
                      children: ed.intl.string(ec.default.o24IFK),
                  })
                : null,
            u.includes("diagnostics")
                ? (0, r.jsx)(uJ, {
                      title: ed.intl.string(ec.default["dix/W4"]),
                      children: (0, r.jsxs)(uW, {
                          children: [
                              null == a
                                  ? null
                                  : (0, r.jsx)(uK, {
                                        label: ed.intl.string(ec.default.soPsOJ),
                                        value: (0, r.jsx)(uH.Anchor, {
                                            onClick: () => s(a.id),
                                            children: (0, r.jsx)(y.E, {
                                                tag: "span",
                                                variant: "text-xs/normal",
                                                color: "none",
                                                children: "model" === a.kind ? a.model : a.tool,
                                            }),
                                        }),
                                    }),
                              0 === o
                                  ? null
                                  : (0, r.jsx)(uV, {
                                        label: ed.intl.string(ec.default.kNZBxr),
                                        value: ed.intl.formatToPlainString(ec.default["6LoCUh"], { count: o }),
                                    }),
                              null == l.turnId
                                  ? null
                                  : (0, r.jsx)(uV, { label: ed.intl.string(ec.default.bL1r5J), value: l.turnId }),
                              (0, r.jsx)(uV, { label: ed.intl.string(ec.default.Ndwr7X), value: l.id }),
                              null == m ? null : (0, r.jsx)(uV, { label: ed.intl.string(ec.default.sO8ghW), value: m }),
                              "model" !== l.kind || null == l.stopReason
                                  ? null
                                  : (0, r.jsx)(uV, { label: ed.intl.string(ec.default.VfYxPF), value: l.stopReason }),
                              "tool" !== l.kind || null == l.schema || 0 === l.schema.length
                                  ? null
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(y.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                className: ou.Hm,
                                                children: ed.intl.string(ec.default.mSm8iy),
                                            }),
                                            l.schema.map((e) =>
                                                (0, r.jsx)(
                                                    uV,
                                                    {
                                                        label: e.name,
                                                        value: e.required
                                                            ? ed.intl.formatToPlainString(ec.default["6aSRPA"], {
                                                                  type: e.type,
                                                              })
                                                            : ed.intl.formatToPlainString(ec.default.q2B975, {
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
            (0, r.jsx)(y.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: ou.E7,
                children: ed.intl.string(ec.default.FloyTQ),
            }),
        ],
    });
}
let u1 = { model: ou.WI, subagent: ou.uM, context: ou.eH, tool: ou.pw, delegated: ou.C8 };
function u2(e) {
    let { entries: t } = e,
        l = i.useMemo(
            () =>
                (function (e) {
                    let t = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 },
                        l = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 };
                    for (let n of e) {
                        let e = uF(n);
                        ((t[e] += n.durationMs ?? 0), (l[e] += 1));
                    }
                    return uz.map((e) => ({ category: e, ms: t[e], calls: l[e] }));
                })(t),
            [t],
        ),
        n = l.reduce((e, t) => e + t.ms, 0);
    return (0, r.jsxs)("div", {
        className: ou.M0,
        children: [
            (0, r.jsx)("div", {
                className: ou.pZ,
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
                                            className: `${ou.dL} ${u1[t]}`,
                                            style: { "--custom-conjure-trace-segment-weight": String(l) },
                                        },
                                        t,
                                    );
                          }),
            }),
            (0, r.jsx)("div", {
                className: ou.z4,
                role: "group",
                "aria-label": ed.intl.string(ec.default["Gioq+C"]),
                children: uz.map((e) => {
                    let t = l.find((t) => t.category === e),
                        a = t?.ms ?? 0,
                        i = t?.calls ?? 0,
                        s = 0 === n ? 0 : Math.round((a / n) * 100);
                    return (0, r.jsxs)(
                        "div",
                        {
                            className: ou.fI,
                            children: [
                                (0, r.jsx)("span", { className: `${ou.A9} ${u1[e]}`, "aria-hidden": !0 }),
                                (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-muted", children: oo(e) }),
                                (0, r.jsx)(y.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: ed.intl.formatToPlainString(ec.default["3dQ1ly"], { percent: s }),
                                }),
                                (0, r.jsx)(y.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: ed.intl.formatToPlainString(ec.default.Ow0k34, { count: i }),
                                }),
                                0 === a
                                    ? null
                                    : (0, r.jsx)(y.E, {
                                          variant: "text-xs/normal",
                                          color: "text-subtle",
                                          tabularNumbers: !0,
                                          children: oi(a),
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
function u3(e) {
    let { entry: t, selected: l, tabbable: n, onSelect: a, onKeyDown: i, nested: s } = e,
        o = uF(t),
        u = "model" === t.kind ? t.model : t.tool,
        c =
            "model" === t.kind && null != t.promptTokens
                ? ed.intl.formatToPlainString(ec.default["6GQUgQ"], { tokens: os(t.promptTokens) })
                : null != t.durationMs
                  ? oi(t.durationMs)
                  : null;
    return (0, r.jsxs)(k.D, {
        tag: "div",
        role: "option",
        "aria-selected": l,
        tabIndex: n ? 0 : -1,
        id: `trace-${t.id}`,
        className: `${ou.nM} ${s ? ou.A5 : ""} ${"error" === t.status ? ou.Cr : ""} ${l ? ou.CZ : ""}`,
        onKeyDown: i,
        onClick: () => a(t.id),
        children: [
            (0, r.jsxs)("div", {
                className: ou.sU,
                children: [
                    (0, r.jsx)(od, { status: t.status }),
                    (0, r.jsx)(uq, { category: o }),
                    (0, r.jsx)(y.E, {
                        variant: "text-xs/semibold",
                        color: "text-default",
                        className: ou.G9,
                        children: u,
                    }),
                    null == c
                        ? null
                        : (0, r.jsx)(y.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              tabularNumbers: !0,
                              className: ou.j2,
                              children: c,
                          }),
                ],
            }),
            "tool" === t.kind && null != t.summary
                ? (0, r.jsx)(y.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: ou.Ne,
                      children: t.summary,
                  })
                : null,
            null == t.error
                ? null
                : (0, r.jsx)(y.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: ou.Xu,
                      children: t.error,
                  }),
        ],
    });
}
function u4(e) {
    var t;
    let { projectId: l, query: n } = e,
        a = (0, m.yK)([eE.Ay], () => eE.Ay.getTrace(l), [l]),
        s = (0, m.bG)([eE.Ay], () => eE.Ay.getHistoryState(l, "trace"));
    i.useEffect(() => u$, [l]);
    let [o, u] = i.useState(null),
        [c, d] = i.useState(40),
        [f, h] = i.useState(!1),
        g = i.useRef(null),
        x = i.useRef(null),
        p = i.useRef(null),
        v = i.useRef(null),
        j = i.useId(),
        b = i.useCallback((e) => {
            null != e && document.getElementById(`trace-${e}`)?.focus();
        }, []),
        k = i.useCallback((e) => u((t) => (t === e ? null : e)), []),
        w = i.useCallback((e) => {
            let t = g.current?.offsetHeight ?? 0;
            return 0 === t ? 40 : (0, ld.clamp)((e / t) * 100, 25, 75);
        }, []),
        N = i.useCallback((e) => {
            let t = g.current?.offsetHeight ?? 0;
            return 0 === t ? e : (0, ld.clamp)(e, (25 * t) / 100, (75 * t) / 100);
        }, []),
        A = (0, uM.A)({
            resizableDomNodeRef: x,
            orientation: uM.R.VERTICAL_TOP,
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
            null != t && (e.preventDefault(), d((e) => (0, ld.clamp)(e + t, 25, 75)));
        }, []),
        E = i.useCallback(() => {
            (u(null), b(o));
        }, [o, b]),
        I = i.useMemo(() => uO(a, n), [a, n]),
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
                    .map((e, t) => ({ ...e, index: t, entries: uO(e.entries, n) }))
                    .filter((e) => e.entries.length > 0),
            [a, n],
        ),
        T = uG(I, o),
        _ = T?.kind === "tool" ? uG(a, T.parentId ?? null) : null,
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
                      : "Escape" === e.key && null != o && (e.preventDefault(), u(null), b(o));
        },
        [I, o, b],
    );
    return 0 === a.length
        ? (0, r.jsx)("div", {
              className: ou.uP,
              ref: g,
              children: (0, r.jsx)(up, {
                  state: s,
                  emptyTitle: ed.intl.string(ec.default["Tpvy/s"]),
                  emptyBody: ed.intl.string(ec.default.J0WcVA),
              }),
          })
        : (0, r.jsxs)("div", {
              className: `${ou.uP} ${f ? ou.F4 : ""}`,
              ref: g,
              children: [
                  (0, r.jsxs)("div", {
                      className: ou.DK,
                      children: [
                          (0, r.jsx)(u2, { entries: a }),
                          (0, r.jsx)(ux, { state: s }),
                          0 === I.length
                              ? (0, r.jsx)("div", {
                                    className: ou.Ie,
                                    children: (0, r.jsx)(y.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children: ed.intl.string(ec.default.tDB4lC),
                                    }),
                                })
                              : (0, r.jsxs)(l7.Ch, {
                                    ref: p,
                                    className: ou.Ns,
                                    children: [
                                        (0, r.jsx)(uv, { state: s }),
                                        (0, r.jsx)("div", {
                                            ref: v,
                                            id: j,
                                            role: "listbox",
                                            "aria-label": ed.intl.string(ec.default.SGbiNE),
                                            className: ou.p_,
                                            children: M.map((e) => {
                                                let t = of(e.startedAt),
                                                    l = ed.intl.formatToPlainString(ec.default.gPwGYA, {
                                                        number: e.index + 1,
                                                    });
                                                return (0, r.jsxs)(
                                                    "div",
                                                    {
                                                        role: "presentation",
                                                        children: [
                                                            (0, r.jsxs)("div", {
                                                                className: ou.mf,
                                                                children: [
                                                                    (0, r.jsx)(y.E, {
                                                                        variant: "text-xs/semibold",
                                                                        color: "text-muted",
                                                                        children: l,
                                                                    }),
                                                                    (0, r.jsx)(y.E, {
                                                                        variant: "text-xs/normal",
                                                                        color: "text-subtle",
                                                                        tabularNumbers: !0,
                                                                        children: t ?? "",
                                                                    }),
                                                                    null == e.spanMs
                                                                        ? null
                                                                        : (0, r.jsx)(y.E, {
                                                                              variant: "text-xs/normal",
                                                                              color: "text-subtle",
                                                                              tabularNumbers: !0,
                                                                              children: oi(e.spanMs),
                                                                          }),
                                                                ],
                                                            }),
                                                            (0, r.jsx)("div", {
                                                                role: "group",
                                                                "aria-label": l,
                                                                className: ou.M5,
                                                                children: e.entries.map((e) =>
                                                                    (0, r.jsx)(
                                                                        u3,
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
                                    "aria-label": ed.intl.string(ec.default.DtSORy),
                                    "aria-valuenow": Math.round(c),
                                    "aria-valuemin": 25,
                                    "aria-valuemax": 75,
                                    tabIndex: 0,
                                    className: ou.b1,
                                    onPointerDown: S,
                                    onKeyDown: C,
                                }),
                                (0, r.jsx)("div", {
                                    ref: x,
                                    className: ou.Or,
                                    style: { "--custom-conjure-trace-detail-share": String(c) },
                                    children: (0, r.jsx)(u0, {
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
function u6(e) {
    let { projectId: t, query: l, onQueryChange: n } = e,
        a = (0, m.yK)([eE.Ay], () => eE.Ay.getTrace(t), [t]),
        s = i.useRef(null),
        o = i.useCallback(() => {
            eu(
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
                className: ou.ED,
                children: (0, r.jsx)(uh.I, {
                    query: l,
                    onChange: n,
                    onClear: () => n(""),
                    size: "sm",
                    placeholder: ed.intl.string(ec.default["EY8/Mt"]),
                    "aria-label": ed.intl.string(ec.default["EY8/Mt"]),
                }),
            }),
            (0, r.jsx)(et.Y, {
                targetElementRef: s,
                position: "bottom",
                align: "right",
                animation: et.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, r.jsx)(el.W, {
                        "data-menu-migrated": !0,
                        navId: `conjure-trace-actions-${t}`,
                        "aria-label": ed.intl.string(ed.t.ogxXGq),
                        onClose: l,
                        onSelect: l,
                        children: (0, r.jsx)(en.rX, {
                            children: (0, r.jsx)(en.Dr, {
                                id: "export",
                                label: ed.intl.string(ec.default.WXrPRZ),
                                disabled: 0 === a.length,
                                action: o,
                            }),
                        }),
                    });
                },
                children: (e, t) => {
                    let { isShown: l } = t;
                    return (0, r.jsx)(le.K, {
                        ...e,
                        buttonRef: s,
                        icon: lt.MoreHorizontalIcon,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": ed.intl.string(ed.t["UKOtz+"]),
                        "aria-haspopup": "menu",
                        "aria-expanded": l,
                    });
                },
            }),
        ],
    });
}
var u7 = l(592465);
function u5(e) {
    let { projectId: t, onClose: l } = e,
        [n, a] = i.useState("logs"),
        [s, o] = i.useState(""),
        u = (0, m.bG)([oa.A], () => oa.A.isDeveloper),
        c = (0, m.bG)([or.A], () => or.A.getStatus(t), [t]),
        d = (0, m.bG)([or.A], () => or.A.getFetchState(t), [t]);
    (i.useEffect(() => {
        (0, er.R7)(t);
    }, [t]),
        i.useEffect(() => (0, er.Rw)(t), [t]));
    let f = i.useCallback(() => (0, er.R7)(t), [t]),
        h = i.useCallback(() => {
            (0, la.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: or.A.getStatus(t),
                        last_turn_usage: or.A.getLastTurnUsage(t),
                        last_compaction: or.A.getLastCompaction(t),
                        last_compaction_decline: or.A.getLastCompactionDecline(t),
                        model_calls: or.A.getModelCalls(t),
                        logs: eE.Ay.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, v.P)((0, j.o)(ed.intl.string(ec.default.wI6fhl), b.Ck.SUCCESS)),
            );
        }, [t]),
        g = ed.intl.string(ec.default["Q4FN+H"]);
    return (0, r.jsxs)("section", {
        className: u7.nd,
        "aria-label": g,
        children: [
            (0, r.jsxs)(l6.Ay, {
                "aria-label": g,
                toolbar: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l6.Ay.Icon, {
                            icon: ss.CopyIcon,
                            tooltip: ed.intl.string(ec.default.TkHqy2),
                            onClick: h,
                        }),
                        (0, r.jsx)(l6.Ay.Icon, { icon: L.P, tooltip: ed.intl.string(ed.t.cpT0Cq), onClick: l }),
                    ],
                }),
                children: [
                    (0, r.jsx)(l6.Ay.ChannelIcon, { icon: E.BugIcon, "aria-hidden": !0 }),
                    (0, r.jsx)(l6.Ay.Title, { children: g }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: u7.rf,
                children: [
                    (0, r.jsxs)(on.V, {
                        selectedItem: n,
                        type: "top",
                        onItemSelect: (e) => a(e),
                        "aria-label": ed.intl.string(ec.default.RvvWIh),
                        className: u7.vR,
                        children: [
                            (0, r.jsx)(on.V.Item, { id: "logs", children: ed.intl.string(ec.default["+VRYCm"]) }),
                            (0, r.jsx)(on.V.Item, { id: "worker", children: ed.intl.string(ec.default["50D0FZ"]) }),
                            (0, r.jsx)(on.V.Item, { id: "agent", children: ed.intl.string(ec.default.UkbTK1) }),
                            u
                                ? (0, r.jsx)(on.V.Item, { id: "trace", children: ed.intl.string(ec.default.O6nNjP) })
                                : null,
                            u ? (0, r.jsx)(on.V.Item, { id: "perf", children: "Perf Trace" }) : null,
                        ],
                    }),
                    "logs" === n
                        ? (0, r.jsx)(uy, { projectId: t })
                        : "worker" === n
                          ? (0, r.jsx)(uI, { status: c, fetchState: d, onRefresh: f })
                          : "trace" === n && u
                            ? (0, r.jsxs)("div", {
                                  className: u7.uP,
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: u7.XH,
                                          children: (0, r.jsx)(u6, { projectId: t, query: s, onQueryChange: o }),
                                      }),
                                      (0, r.jsx)(u4, { projectId: t, query: s }),
                                  ],
                              })
                            : "perf" === n && u
                              ? (0, r.jsx)(oJ, { projectId: t })
                              : (0, r.jsx)(ud, {
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
var u8 = l(333007),
    u9 = l(365912),
    ce = l(775121),
    ct = l(873715);
function cl(e) {
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
let cn = Object.freeze({ x: -1, y: -1 });
function ca(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = cl(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var cr = l(470779);
function ci(e) {
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
        } = iw({ projectId: t, surface: "design", onUploadFile: h }),
        y = i.useRef(null),
        k = (m || g.length > 0) && j && !f,
        N = i.useCallback(() => {
            if (!k) return;
            let e = b();
            c(e.length > 0 ? e : void 0);
        }, [k, b, c]),
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
        className: o()(cr.M0, { [cr.ho]: A && !f, [cr.ET]: f }),
        style: { left: P, top: R },
        "data-testid": "conjure-design-compose-bar",
        children: [
            (0, r.jsx)("input", {
                ref: y,
                type: "file",
                multiple: !0,
                className: cr.Fg,
                tabIndex: -1,
                "aria-hidden": !0,
                onChange: (e) => {
                    (x(Array.from(e.target.files ?? [])), (e.target.value = ""));
                },
            }),
            (0, r.jsx)(w.m, {
                position: "bottom",
                text: ed.intl.string(ec.default.lgvqSB),
                ariaHidden: !0,
                children: (0, r.jsx)("button", {
                    type: "button",
                    className: cr.tY,
                    onClick: () => y.current?.click(),
                    "aria-label": ed.intl.string(ec.default.lgvqSB),
                    children: (0, r.jsx)(ea.H, { size: "custom", color: "currentColor", className: cr.WW }),
                }),
            }),
            (0, r.jsx)(ny.y, {
                autoFocus: !0,
                rows: 1,
                className: cr.hF,
                value: s,
                placeholder: "" === a ? ed.intl.string(ec.default.MPPV1Q) : `Edit ${a}`,
                "aria-label": ed.intl.string(ec.default.KCYqWL),
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
                      className: cr.ZO,
                      children: g.map((e) => (0, r.jsx)(iN, { draft: e, onRemove: v }, e.localId)),
                  })
                : null,
        ],
    });
}
var cs = l(192888);
function co(e, t) {
    return (0, cs.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(ca, () => ({ status: "failed" }));
}
var cu = l(108308);
let cc = { x: 25, y: 21 };
function cd(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function cm(e, t, l) {
    return {
        left: t.left + e.rect.x * l,
        top: t.top + e.rect.y * l,
        width: Math.max(e.rect.width * l, 1),
        height: Math.max(e.rect.height * l, 1),
    };
}
function cf(e, t, l, n) {
    let a = cm(e, l, n);
    return { x: a.left + a.width * t.x, y: a.top + a.height * t.y };
}
function ch(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function cg(e) {
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
function cx(e) {
    let { projectId: t, applicationId: l, previewApplicationId: n, resolveIframe: a, toggleRef: s } = e,
        o = null != l && l === n ? t : null,
        { active: u, annotations: c } = te(o),
        d = (0, tv.Zv)(o),
        f = (0, tt.useHasAnyModalOpen)(),
        h = (0, m.bG)([tJ.default], () => tJ.default.getCurrentUser()),
        g = h?.id ?? null,
        [x, p] = i.useState(null),
        [v, j] = i.useState(null),
        [b, k] = i.useState(!1),
        [w, N] = i.useState(!1),
        [A, C] = i.useState(null),
        [E, I] = i.useState(!1),
        M = i.useRef(null),
        T = i.useRef(null),
        _ = i.useRef(null),
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
        if (null != W) return () => nV(W, "design");
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
                p((t) => (cd(t, e) ? t : e));
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
            if (null == t) return void N(!0);
            (k(!0), N(!1));
            let l = `design-feedback-${crypto.randomUUID()}`;
            return (
                (0, ct.J)(t, l, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                    (t) => {
                        if (!e) return;
                        k(!1);
                        let l = "completed" === t.status ? cg(t.response) : null;
                        null == l ? N(!0) : (j(l), e5(o, { url: l.url, title: l.title, viewport: l.viewport }));
                    },
                    () => {
                        e && (k(!1), N(!0));
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
        if (cd(X.current, x)) return;
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
                    (0, ct.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: n.length > 0 ? n : [{ action: "snapshot" }],
                        snapshot: 0 === l && n.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let l;
                        if ("completed" !== e.status || !Z.current) return;
                        let n = cg(e.response);
                        null != n && (j(n), e5(o, { url: n.url, title: n.title, viewport: n.viewport }));
                        let a = new Map();
                        (e.response.results.forEach((e, l) => {
                            let n = t[l];
                            if (null == n || "locate" !== e.action || !e.ok) return;
                            let r = cl(e.element);
                            null != r && a.set(n.id, r);
                        }),
                            (l = e4(o)).active &&
                                0 !== a.size &&
                                e6(o, {
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
                    (C(null), z(null), K(null), j(null));
                };
        }, [V]));
    let J = i.useRef(null),
        Q = i.useRef(null),
        Y = i.useRef(!1),
        Z = i.useRef(!1);
    i.useEffect(() => {
        ((Z.current = V), V || ((J.current = null), (Q.current = null), (_.current = null), I(!1)));
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
                    co(l, t).then((t) => {
                        if (((Y.current = !1), Z.current)) {
                            if ("picked" !== t.status || ck(t.target, ei.current.rect, ei.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? C(null)
                                    : "unsupported" === t.status && $(!0);
                            else {
                                let e = eX(t.target);
                                (L((t) => (cy(t, e) ? t : e)),
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
            let e = setTimeout(() => G(null), cj);
            return () => clearTimeout(e);
        }, [O]));
    let el = null == v || null == x || v.viewport.width < 1 ? 1 : x.width / v.viewport.width,
        en = null != v || w,
        ea = i.useMemo(() => v?.elements ?? [], [v]),
        ei = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        ei.current = { rect: x, scale: el };
    }, [x, el]);
    let es = i.useCallback(
            (e, t, l) => {
                null != o &&
                    (nV(o, "design"),
                    K(null),
                    (U.current = !1),
                    z({ projectId: o, target: e, anchor: t, draft: "", at: l, label: eX(e) }));
            },
            [o],
        ),
        eo = i.useCallback((e, t) => ({ x: (e.clientX - t.left) / el, y: (e.clientY - t.top) / el }), [el]),
        eu = i.useCallback(() => {
            let e = _.current;
            if (null == e) return;
            let t = M.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let l = T.current;
            null != l && (l.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    i.useLayoutEffect(eu);
    let em = i.useCallback(
            (e) => {
                if (null == x || null != B) return;
                if (((_.current = { x: e.clientX, y: e.clientY }), eu(), I(!0), null != F)) {
                    (Math.abs(e.clientX - F.at.x) > cb || Math.abs(e.clientY - F.at.y) > cb) && (U.current = !0);
                    return;
                }
                if (!en) return void C(null);
                let t = eo(e, x);
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
                        })(ea, t.x, t.y),
                        l = null != e && ck(e, x, el) ? null : e;
                    if (null != l) {
                        let e = eX(l);
                        L((t) => (cy(t, e) ? t : e));
                    }
                    C((e) => (e?.ref === l?.ref ? e : l));
                    return;
                }
                let l = { x: Math.round(t.x), y: Math.round(t.y) },
                    n = Q.current;
                (null == n || n.x !== l.x || n.y !== l.y) && ((Q.current = l), (J.current = l), ee());
            },
            [x, el, en, eo, D, ea, F, B, eu, ee],
        ),
        ef = null == B ? null : c.find((e) => e.id === B.id),
        eh = V && (E || F?.target.marker != null || ef?.target.marker != null);
    i.useEffect(() => {
        if (eh)
            return () => {
                let e = a();
                null != e && co(e, cn);
            };
    }, [eh, a]);
    let eg = i.useCallback(() => {
        (I(!1), C(null), (Q.current = null), (J.current = null));
    }, []);
    i.useEffect(() => {
        if (!V || !E || !en || D || null != F || null != B) return;
        let e = _.current,
            { rect: t, scale: l } = ei.current;
        if (null == e || null == t) return;
        let n = { x: Math.round((e.x - t.left) / l), y: Math.round((e.y - t.top) / l) };
        ((Q.current = n), (J.current = n), ee());
    }, [V, E, en, D, F, B, ee]);
    let ex = i.useCallback(
            (e) => {
                if (null != F || null != B) {
                    (et(), K(null));
                    return;
                }
                if (null == A || null == x) return;
                let t = eo(e, x);
                es(
                    A,
                    (function (e, t, l) {
                        let { x: n, y: a, width: r, height: i } = e.rect;
                        return r < 1 || i < 1
                            ? eV
                            : { x: Math.min(1, Math.max(0, (t - n) / r)), y: Math.min(1, Math.max(0, (l - a) / i)) };
                    })(A, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [A, x, eo, F, B, es, et],
        ),
        ep = i.useCallback(() => {
            null != o && (C(null), e7(o));
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
                ce.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        ce.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), ej.current());
        }
        function t(e) {
            let t = e.target;
            (0, tD.vq)(t) &&
                ey.current?.contains(t) !== !0 &&
                s?.current?.contains(t) !== !0 &&
                !(function (e) {
                    try {
                        return ((0, u9.J$)(e), !0);
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
                if (null != F || null != B || 0 === ea.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    l = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || l) {
                    e.preventDefault();
                    let l = null == A ? -1 : ea.findIndex((e) => e.ref === A.ref);
                    C(ea[(l + (t ? 1 : -1) + ea.length) % ea.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != A &&
                    (e.preventDefault(),
                    es(A, eV, { x: (x?.left ?? 0) + A.rect.x * el, y: (x?.top ?? 0) + A.rect.y * el }));
            },
            [o, F, B, ea, A, es, ev, x, el],
        ),
        ew = i.useCallback(
            (e) => {
                null == o ||
                    null == F ||
                    ((eW(F.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, er.dv)(
                            o,
                            (function (e, t) {
                                let { kind: l, name: n } = eX(e),
                                    a = [l, n].filter((e) => "" !== e).join(": ");
                                return `${eY}${a}${eZ}${eQ(e)}
${t.trim()}`;
                            })(F.target, F.draft),
                            e,
                        ),
                        et(),
                        C(null)));
            },
            [o, F, et],
        ),
        eN = i.useCallback((e) => (null == o ? Promise.reject(Error("no project")) : (0, er.vX)(o, e)), [o]),
        eA = i.useCallback(() => {
            if (null != o && null != B && null != g && eW(B.draft)) {
                var e, t;
                let l, n;
                ((e = B.id),
                    (t = B.draft.trim()),
                    null != (n = (l = e4(o)).annotations.find((t) => t.id === e)) &&
                        e8(n, g) &&
                        e6(o, { ...l, annotations: l.annotations.map((l) => (l.id === e ? { ...l, comment: t } : l)) }),
                    K({ ...B, editing: !1 }));
            }
        }, [o, B, g]),
        eS = i.useCallback(() => {
            if (null != o && null != B && null != g) {
                var e;
                let t, l;
                ((e = B.id),
                    null != (l = (t = e4(o)).annotations.find((t) => t.id === e)) &&
                        e8(l, g) &&
                        e6(o, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    K(null));
            }
        }, [o, B, g]),
        eC = u
            ? b
                ? ed.intl.string(ec.default["Eb/YV9"])
                : w
                  ? ed.intl.string(ec.default.FD30bh)
                  : ed.intl.formatToPlainString(ec.default.dTSqLF, { count: c.length })
            : "",
        eE = V && null != x,
        eI = E && null == B,
        eM = F?.target ?? ef?.target ?? null,
        eT = F ?? O,
        e_ = F ?? (O?.instant === !0 ? null : O),
        eP =
            null != ef && null != x
                ? (function (e, t) {
                      let { left: l, top: n } = ch(e, t);
                      return { x: l + 12, y: n + 12 };
                  })(cf(ef.target, ef.anchor, x, el), x)
                : null;
    return (
        i.useEffect(() => {
            let e = a();
            if (ef?.target.marker == null || null == e) return;
            let { target: t, anchor: l } = ef;
            co(e, { x: Math.round(t.rect.x + t.rect.width * l.x), y: Math.round(t.rect.y + t.rect.height * l.y) });
        }, [ef, a]),
        (0, u8.createPortal)(
            (0, r.jsxs)("div", {
                ref: ey,
                className: cu.Li,
                children: [
                    (0, r.jsx)("div", {
                        className: cu.y4,
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-design-announcer",
                        children: eC,
                    }),
                    eE
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)("div", {
                                      className: cu.MT,
                                      style: { left: x.left, top: x.top, width: x.width, height: x.height },
                                      "data-plain-cursor": eI ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": ed.intl.string(ec.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: em,
                                      onMouseLeave: eg,
                                      onClick: ex,
                                      onKeyDown: ek,
                                  }),
                                  null != A && null == A.marker && null == F && null == B
                                      ? (0, r.jsx)(cw, { box: cm(A, x, el) })
                                      : null,
                                  (0, r.jsx)("div", {
                                      ref: M,
                                      className: cu.aZ,
                                      children: (0, r.jsx)("div", {
                                          className: cu.xz,
                                          "data-shown": null != A && null == B && null == F ? "" : void 0,
                                          "data-instant": q ? "" : void 0,
                                          children: (0, r.jsxs)(y.E, {
                                              variant: "text-xs/medium",
                                              className: cu.Ux,
                                              children: [
                                                  null == R
                                                      ? null
                                                      : (0, r.jsx)("span", { className: cu.Tl, children: R.kind }),
                                                  null == R || "" === R.name
                                                      ? null
                                                      : (0, r.jsxs)("span", {
                                                            className: cu.kh,
                                                            children: [" ", R.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, r.jsx)("div", {
                                      ref: T,
                                      className: cu.Y,
                                      children: eI ? (0, r.jsx)("div", { className: cu.u }) : null,
                                  }),
                                  null == e_
                                      ? null
                                      : (0, r.jsx)("div", {
                                            className: cu.aZ,
                                            style: {
                                                transform: `translate3d(${e_.at.x + 20}px, ${e_.at.y + 20}px, 0)`,
                                            },
                                            children: (0, r.jsx)("div", {
                                                className: cu.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == F ? "" : void 0,
                                                children: (0, r.jsxs)(y.E, {
                                                    variant: "text-xs/medium",
                                                    className: cu.Ux,
                                                    children: [
                                                        (0, r.jsx)("span", {
                                                            className: cu.Tl,
                                                            children: e_.label.kind,
                                                        }),
                                                        "" === e_.label.name
                                                            ? null
                                                            : (0, r.jsxs)("span", {
                                                                  className: cu.kh,
                                                                  children: [" ", e_.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eM && null == eM.marker
                                      ? (0, r.jsx)("div", { className: cu.D0, style: cm(eM, x, el), "aria-hidden": !0 })
                                      : null,
                                  c.map((e, t) => {
                                      let l = cf(e.target, e.anchor, x, el),
                                          n = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, r.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: cu.xL,
                                              style: { ...ch(l, x), width: 24, height: 24 },
                                              "aria-label": ed.intl.formatToPlainString(ec.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: eJ(e.target),
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
                                              children: (0, r.jsx)(cp, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eT || null == o
                                      ? null
                                      : (0, r.jsx)(ci, {
                                            projectId: o,
                                            at: { x: eT.at.x + 20, y: eT.at.y + 20 },
                                            bounds: x,
                                            kind: eT.label.kind,
                                            value: eT.draft,
                                            canSubmit: null != F && eW(eT.draft),
                                            onChange: (e) => {
                                                null != F && z({ ...F, draft: e });
                                            },
                                            onSubmit: ew,
                                            onDismiss: et,
                                            onUploadFile: eN,
                                            closing: null == F,
                                        }),
                                  null != ef && null != B && null != eP
                                      ? (0, r.jsxs)(cv, {
                                            point: eP,
                                            frame: x,
                                            authorId: ef.authorId,
                                            title: eJ(ef.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                B.confirmingRemove ? K({ ...B, confirmingRemove: !1 }) : K(null);
                                            },
                                            onMouseLeave: () => {
                                                B.editing || B.confirmingRemove || K(null);
                                            },
                                            children: [
                                                B.editing
                                                    ? (0, r.jsx)(P.f, {
                                                          autoFocus: !0,
                                                          label: ed.intl.string(ec.default.KCYqWL),
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
                                                    : (0, r.jsx)(y.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-default",
                                                          className: cu.aC,
                                                          children: ef.comment,
                                                      }),
                                                e8(ef, g)
                                                    ? (0, r.jsx)("div", {
                                                          className: cu.eB,
                                                          children: B.confirmingRemove
                                                              ? (0, r.jsxs)(r.Fragment, {
                                                                    children: [
                                                                        (0, r.jsx)(y.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: cu.nv,
                                                                            children: ed.intl.string(ec.default.wOHvts),
                                                                        }),
                                                                        (0, r.jsx)(S.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: ed.intl.string(ec.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                K({ ...B, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, r.jsx)(S.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: ed.intl.string(ec.default.friIzR),
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
                                                                            text: ed.intl.string(ec.default.friIzR),
                                                                            onClick: () =>
                                                                                K({
                                                                                    ...B,
                                                                                    editing: !1,
                                                                                    confirmingRemove: !0,
                                                                                }),
                                                                        }),
                                                                        B.editing
                                                                            ? (0, r.jsx)(S.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !eW(B.draft),
                                                                                  text: ed.intl.string(
                                                                                      ec.default.iicRP9,
                                                                                  ),
                                                                                  onClick: eA,
                                                                              })
                                                                            : (0, r.jsx)(S.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: ed.intl.string(
                                                                                      ec.default["6eW9lg"],
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
function cp(e) {
    let { authorId: t } = e,
        l = (0, m.bG)([tJ.default], () => tJ.default.getUser(t), [t]);
    return (0, r.jsx)(rr.eu, {
        src: null == l ? null : ro.Ay.getUserAvatarURL(l),
        size: ri._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function cv(e) {
    let t,
        l,
        n,
        a,
        s,
        o,
        { point: u, frame: c, authorId: d, title: m, testId: f, onDismiss: h, onMouseLeave: g, children: x } = e,
        p = i.useRef(null),
        v = i.useRef(null),
        [j, b] = i.useState(cc);
    i.useLayoutEffect(() => {
        let e = p.current?.getBoundingClientRect(),
            t = v.current?.getBoundingClientRect();
        if (null == e || null == t || e.width < 1 || t.width < 1) return;
        let l = { x: t.left + t.width / 2 - e.left, y: t.top + t.height / 2 - e.top };
        b((e) => (0.5 > Math.abs(e.x - l.x) && 0.5 > Math.abs(e.y - l.y) ? e : l));
    }, []);
    let {
            left: k,
            top: w,
            originX: N,
            originY: A,
        } = ((l = Math.max((t = c.left + 8), c.left + c.width - 300 - 8)),
        (a = Math.max((n = c.top + 8), c.top + c.height - 160 - 8)),
        (s = Math.min(Math.max(u.x - j.x, t), l)),
        { left: s, top: (o = Math.min(Math.max(u.y - j.y, n), a)), originX: u.x - s, originY: u.y - o }),
        S = { left: k, top: w, "--custom-conjure-card-origin-x": `${N}px`, "--custom-conjure-card-origin-y": `${A}px` };
    return (0, r.jsxs)("div", {
        ref: p,
        className: cu.Nr,
        style: S,
        "data-testid": f,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, r.jsxs)("div", {
                className: cu.MY,
                children: [
                    (0, r.jsx)("span", { ref: v, className: cu.ip, children: (0, r.jsx)(cp, { authorId: d }) }),
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: cu.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: cu.zI, children: x }),
        ],
    });
}
let cj = 300,
    cb = 2;
function cy(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function ck(e, t, l) {
    if (null == t || l <= 0) return !1;
    let n = t.width / l,
        a = t.height / l;
    return !(n < 1) && !(a < 1) && e.rect.width >= 0.98 * n && e.rect.height >= 0.98 * a;
}
function cw(e) {
    let { box: t } = e;
    return (0, r.jsx)("div", { className: cu.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var cN = l(659723),
    cA = l(697744),
    cS = l(130324);
function cC(e) {
    let t = (0, cA.c)(),
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
    let a = (0, i$.A)();
    return (
        i.useEffect(() => {
            if (!a) return;
            let t = setInterval(l.onMouseEnter, e);
            return () => clearInterval(t);
        }, [l, e, a]),
        t
    );
}
function cE(e) {
    let { className: t } = e,
        { Component: l, events: n } = cC(3e4);
    return (0, r.jsxs)("div", {
        className: t,
        onMouseEnter: n.onMouseEnter,
        onMouseLeave: n.onMouseLeave,
        children: [
            (0, r.jsx)(l, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, r.jsx)(y.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: cS.o,
                children: ed.intl.string(ec.default.AyiQEp),
            }),
        ],
    });
}
var cI = l(251363),
    cM = l(944142),
    cT = l(532247),
    c_ = l(501628);
function cP(e) {
    let { progress: t } = e,
        { Component: l } = cC(1500),
        n = X.Q_.useSetting();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, r.jsx)(y.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, r.jsx)("div", {
                className: c_.Ci,
                children: Array.from({ length: t.stepCount }, (e, l) =>
                    (0, r.jsx)(
                        "span",
                        {
                            className: c_.PM,
                            "data-state": l < t.stepIndex ? "done" : l === t.stepIndex ? "current" : "todo",
                        },
                        l,
                    ),
                ),
            }),
            n && null != t.stepLabel
                ? (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-overlay-light", children: t.stepLabel })
                : null,
        ],
    });
}
function cR(e) {
    let { projectId: t, applicationId: l, previewApplicationId: n, surface: a } = e,
        s = null != t && null != l && l === n,
        o = (0, m.bG)([cM.A], () => (s ? cM.A.getLiveReload(t) : null), [s, t]),
        u = (0, H.A)(l, a)?.id ?? null,
        c = o?.phase ?? null,
        d = (function (e, t) {
            let l = (0, cT.dv)(e),
                [n, a] = i.useState(null),
                [r, s] = i.useState(l);
            r !== l && (s(l), a(null == l ? (0, cT.QP)(e, r) : null));
            let o = (0, m.bG)(
                    [tP.A],
                    () => {
                        let e = tP.A.getFrame(t);
                        return (0, tG.x1)(e) && e.data.proxyTicketRefreshing;
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
                        null != l.target && l.target === (0, cI.o)(null, t) && e();
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
        f = (0, cT.h_)(c, o?.step ?? null, d);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(N.A, { tag: "div", role: "status", "aria-live": "polite", children: f?.title ?? "" }),
            null != f
                ? (0, r.jsx)("div", {
                      className: c_.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, r.jsx)(cP, { progress: f }),
                  })
                : null,
        ],
    });
}
var cL = l(343030),
    cD = l(317608),
    c$ = l(338941),
    cF = l(964404);
let cz = { width: 1 / 0, height: 1 / 0 };
function cO(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cz;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var cG = l(702083);
function cU(e) {
    let { children: t } = e,
        { mobile: l, landscape: n } = (0, m.cf)([tx.A], () => ({
            mobile: tx.A.isBuilderPreviewMobile(),
            landscape: tx.A.isBuilderPreviewLandscape(),
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
        d = l ? cO(n, c ?? void 0) : null;
    return (0, r.jsx)("div", {
        ref: a,
        className: o()(cG.dw, { [cG.PQ]: null != d }),
        children: (0, r.jsx)("div", { className: o()(cG.R9, { [cG.Vg]: null != d }), style: d ?? void 0, children: t }),
    });
}
var cq = l(347927);
function cH(e) {
    let { title: t, body: l, wide: n = !1, children: a } = e;
    return (0, r.jsxs)("div", {
        className: o()(cq.Bf, n && cq.Qx),
        children: [
            (0, r.jsxs)("div", {
                className: cq.Ux,
                children: [
                    (0, r.jsx)(M.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, r.jsx)(y.E, { variant: "text-md/medium", color: "text-subtle", children: l }),
                ],
            }),
            a,
        ],
    });
}
var cB = l(957272);
function cK(e) {
    let { applicationId: t, surface: l, frameOverlay: n } = e,
        { frame: a, state: s } = (0, c$.A)({ applicationId: t, surface: l }),
        o = (0, tG.VA)(t, l);
    if (
        (i.useEffect(
            () => (
                !(function (e) {
                    let t = tP.A.getFrame(e);
                    if (null == t || tR.A.getWindowOpen(eb.MLl.ACTIVITY_POPOUT)) return;
                    let l = tP.A.getMainFrame()?.id === e;
                    t.intent === tG.sV.MAIN
                        ? (l || q.A.promoteFrame(e), q.A.resetFrameLayoutModes(e))
                        : l && q.A.clearMainFrameSlot();
                })(o),
                () => {
                    let e;
                    null != (e = tP.A.getFrame(o)) &&
                        ((0, tG.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        cF.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === tG.sV.INLINE && q.A.promoteFrame(o),
                              q.A.updateFrameLayoutMode({ frameId: o, layoutMode: tG.y0.PIP }))
                            : e.intent === tG.sV.MAIN && q.A.demoteMainFrame(o));
                }
            ),
            [o],
        ),
        s === c$.n.Launched)
    ) {
        let e = (0, r.jsx)(cD.A, { frameId: a.id, level: cL.A.WithinAppContent, className: cB.Z7, overlay: n });
        return (0, ty.Q5)(l) ? (0, r.jsx)(cU, { children: e }) : e;
    }
    return (0, r.jsx)(cV, { state: s });
}
function cV(e) {
    let { state: t } = e;
    switch (t) {
        case c$.n.RenderingElsewhere:
            return (0, r.jsx)("div", {
                className: cB.qs,
                children: (0, r.jsx)(cH, {
                    title: ed.intl.string(ec.default["9kpdo7"]),
                    body: ed.intl.string(ec.default.iIA8Nj),
                }),
            });
        case c$.n.NoApplication:
            return (0, r.jsx)(cE, { className: cB.qs });
        case c$.n.DoesNotSupportSurface:
            return (0, r.jsx)("div", {
                className: cB.qs,
                children: (0, r.jsx)(cH, {
                    title: ed.intl.string(ec.default["7k4GyN"]),
                    body: ed.intl.string(ec.default.zdIy3R),
                }),
            });
        case c$.n.Error:
            return (0, r.jsxs)("div", {
                className: cB.qs,
                children: [
                    (0, r.jsx)(M.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: ed.intl.string(ec.default.lTPbnG),
                    }),
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: cB.tj,
                        children: ed.intl.string(ec.default.e6GiAZ),
                    }),
                ],
            });
        case c$.n.AwaitingLaunch:
        case c$.n.Loading:
            return (0, r.jsx)("div", { className: cB.qs, children: (0, r.jsx)(A.y, {}) });
    }
}
var cW = l(308528),
    cX = l(334738),
    cJ = l(688438),
    cQ = l(355622),
    cY = l(365971),
    cZ = l(703462);
function c0(e) {
    let { message: t } = e;
    return (0, r.jsxs)("div", {
        className: cZ.f,
        children: [
            (0, r.jsx)(lk.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, r.jsx)(y.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function c1() {
    return (0, r.jsx)("div", { className: cZ.f, children: (0, r.jsx)(A.y, {}) });
}
function c2(e) {
    let t,
        l,
        { previewApplicationId: n } = e,
        { data: a, isLoading: s } = (0, O.YY)(n),
        o = a?.bot?.id ?? null,
        u = (0, m.bG)([J.A], () => {
            if (null == o) return null;
            let e = J.A.getDMFromUserId(o);
            return null != e ? J.A.getChannel(e) : null;
        });
    ((t = u?.id ?? null),
        i.useEffect(() => {
            null != t && cW.A.preload(eb.ME, t);
        }, [t]),
        (l = (0, m.bG)([iL.A], () => iL.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !l) return;
            let e = (0, cY.Xg)();
            return (
                (0, cX.yl)(t, e),
                () => {
                    (0, cX.dm)(t, e);
                }
            );
        }, [t, l]));
    let [c, d] = i.useState(null),
        f = null != o && c === o;
    return (i.useEffect(() => {
        if (null == o || null != u) return;
        let e = !1;
        return (
            cW.A.openPrivateChannel({ recipientIds: o, navigateToChannel: !1 }).catch(() => {
                e || d(o);
            }),
            () => {
                e = !0;
            }
        );
    }, [o, u]),
    s && null == a)
        ? (0, r.jsx)(c1, {})
        : null == o || f
          ? (0, r.jsx)(c0, { message: ed.intl.string(ec.default["VP/O8s"]) })
          : null == u
            ? (0, r.jsx)(c1, {})
            : (0, r.jsx)("div", {
                  className: cZ.g,
                  children: (0, r.jsx)(cJ.A, { channel: u, guild: null, chatInputType: cQ.oU.SIDEBAR }, u.id),
              });
}
var c3 = l(887909),
    c4 = l(570962),
    c6 = l(998475);
function c7(e) {
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
    } = (0, c3.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, r.jsxs)("section", {
        className: c6.Nr,
        "aria-label": t,
        children: [
            (0, r.jsx)("div", {
                className: c6.rf,
                children: (0, r.jsx)(c4.A, {
                    obscured: !0 === f,
                    children: (0, r.jsxs)("div", {
                        className: c6.Gq,
                        children: [
                            null != l
                                ? (0, r.jsxs)("div", {
                                      className: c6.z3,
                                      children: [
                                          (0, r.jsx)(M.D, {
                                              variant: "heading-lg/bold",
                                              color: "text-strong",
                                              children: l,
                                          }),
                                          null != n
                                              ? (0, r.jsx)(y.E, {
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
                                className: o()(c6.Qs, d ? c6.cw : null, m ? c6.pN : null),
                                children: [i, null == u ? c : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != s && s.length > 0
                ? (0, r.jsx)("div", {
                      className: c6.o1,
                      children: s.map((e, t) => (0, r.jsx)(S.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var c5 = l(765671),
    c8 = l(269094),
    c9 = l(582063);
function de(e) {
    let { applicationId: t, size: l } = e,
        n = (0, c$.A)({ applicationId: t, surface: tG.ZN });
    return (i.useEffect(() => {
        let e = (0, tG.VA)(t, tG.ZN);
        return () => (0, tC.r)(e);
    }, [t]),
    n.state !== c$.n.Launched)
        ? (0, r.jsx)(cV, { state: n.state })
        : n.frame.data.proxyTicketRefreshing
          ? (0, r.jsx)(cV, { state: c$.n.Loading })
          : (0, r.jsx)(dt, { lifecycle: n, size: l });
}
function dt(e) {
    let { lifecycle: t, size: l } = e,
        { ref: n, width: a, height: i } = (0, c5.Ay)(),
        s = (function (e, t) {
            let { width: l, height: n } = e;
            return null == l || null == n || l <= 0 || n <= 0 ? 1 : Math.min(1, l / t.width, n / t.height);
        })({ width: a, height: i }, l);
    return (0, r.jsxs)("div", {
        className: c9.JH,
        children: [
            (0, r.jsx)("div", { className: c9.LO, "aria-hidden": !0 }),
            (0, r.jsx)("div", {
                ref: n,
                className: c9.dw,
                children: (0, r.jsx)("div", {
                    className: c9.HL,
                    style: {
                        "--custom-conjure-overlay-widget-width": `${l.width}px`,
                        "--custom-conjure-overlay-widget-height": `${l.height}px`,
                        "--custom-conjure-overlay-widget-scale": String(s),
                    },
                    children: (0, r.jsx)(c8.A, { frame: t.frame, application: t.application, className: c9.Gt }),
                }),
            }),
        ],
    });
}
var dl = l(409478),
    dn = l(652227);
function da(e) {
    let {
        applicationId: t,
        previewApplicationId: l,
        surface: n,
        previewReady: a,
        previewGate: i,
        availability: s,
        activeMode: o,
        widgetApplicationId: u,
        overlayWidgetSize: c = tp,
        frameOverlay: d,
    } = e;
    return i?.type === "checking"
        ? (0, r.jsx)("div", { className: dn.q, children: (0, r.jsx)(A.y, {}) })
        : i?.type === "permissions"
          ? (0, r.jsx)("div", {
                className: dn.q,
                children: null == i.authorizeProps ? (0, r.jsx)(A.y, {}) : (0, r.jsx)(c7, { ...i.authorizeProps }),
            })
          : a
            ? null == t
                ? null
                : (0, r.jsxs)("div", {
                      className: dn.R,
                      children: [
                          (0, tb.yf)(s, o) ? (0, r.jsx)(cK, { applicationId: t, surface: n, frameOverlay: d }) : null,
                          "widget" === o && null != u
                              ? "unavailable-authorization-revoked" === s.profileState
                                  ? (0, r.jsx)("div", {
                                        className: dn.q,
                                        children: (0, r.jsx)(cH, {
                                            wide: !0,
                                            title: ed.intl.string(ec.default["08U+YO"]),
                                            body: ed.intl.string(ec.default.pKBfrc),
                                        }),
                                    })
                                  : (0, r.jsx)(dl.A, { applicationId: u })
                              : null,
                          "overlay" === o && s.modes.includes("overlay")
                              ? (0, r.jsx)(de, { applicationId: t, size: c })
                              : null,
                          "bot" === o && null != l ? (0, r.jsx)(c2, { previewApplicationId: l }) : null,
                      ],
                  })
            : (0, r.jsx)(cE, { className: dn.q });
}
var dr = l(175841),
    di = l(750506),
    ds = l(867193),
    du = l(417760);
function dc(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function dd(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function dm(e) {
    let { phase: t, projectId: l, onOpenPublishedApp: n, compact: a } = e,
        { stop: s, stopping: u } = (function (e) {
            let t = (0, m.bG)([ek.Ay], () => null != e && ek.Ay.isThinking(e)),
                [l, n] = i.useState(!1),
                [a, r] = i.useState(t);
            (t !== a && (r(t), t || n(!1)),
                i.useEffect(() => {
                    if (!l) return;
                    let e = setTimeout(() => n(!1), 5e3);
                    return () => clearTimeout(e);
                }, [l]));
            let s = i.useCallback(() => {
                null != e && (n(!0), (0, er.fu)(e));
            }, [e]);
            return { stop: t ? s : null, stopping: l };
        })(l),
        c = (0, tv.CU)(l),
        d = "controlling" === t,
        f = ed.intl.string(d ? (c ? ec.default["VJW/5P"] : ec.default["+hD2Iz"]) : ec.default["h+i1r9"]),
        h =
            null != n
                ? (0, r.jsx)(S.$, {
                      variant: "overlay-secondary",
                      size: "sm",
                      text: ed.intl.string(ec.default["1NcO7H"]),
                      onClick: n,
                  })
                : null,
        g =
            null != s
                ? (0, r.jsx)(S.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: ed.intl.string(ec.default.oU59sU),
                      loading: u,
                      onClick: s,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return a
        ? (0, r.jsxs)("div", {
              className: o()(du.M0, du.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  d
                      ? (0, r.jsx)(sB.i, { size: 12, color: "currentColor" })
                      : (0, r.jsx)(dr.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, r.jsx)(y.E, { variant: "text-sm/semibold", color: "none", className: du.ID, children: f }),
                  d ? (0, r.jsx)(N.A, { children: ed.intl.string(ec.default.fg1sor) }) : null,
                  d ? (0, r.jsxs)("div", { className: du.lC, children: [h, g] }) : null,
              ],
          })
        : (0, r.jsxs)("div", {
              className: du.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, r.jsxs)("div", {
                      className: du.sp,
                      children: [
                          (0, r.jsx)(dr.SparklesIcon, { size: "sm", color: "currentColor" }),
                          d ? (0, r.jsx)(sB.i, { size: 12, color: "currentColor" }) : null,
                          (0, r.jsxs)("div", {
                              className: du.f4,
                              children: [
                                  (0, r.jsx)(y.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: du.w9,
                                      children: f,
                                  }),
                                  d
                                      ? (0, r.jsx)(y.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: du.Rb,
                                            children: ed.intl.string(ec.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  d ? (0, r.jsxs)("div", { className: du.lC, children: [h, g] }) : null,
              ],
          });
}
function df(e) {
    let {
            projectId: t,
            applicationId: l,
            previewApplicationId: n,
            resolveTarget: a,
            frameId: s,
            onOpenPublishedApp: o = null,
        } = e,
        u = (0, tv.Zv)(null != l && l === n ? t : null),
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
        d = (0, tt.useHasAnyModalOpen)(),
        m = tO(s);
    i.useEffect(() => {
        u &&
            m &&
            null != s &&
            (function (e) {
                if (!tF(e)) return;
                let t = t$(e);
                null != t && (0, tL.sP)(t);
            })(s);
    }, [u, m, s]);
    let [f, h] = i.useState(null),
        [g, x] = i.useState(null),
        [p, v] = i.useState(null),
        j = "idle" !== c;
    i.useEffect(() => {
        if (!j) return;
        function e() {
            let e = dc(a());
            h((t) => (dd(t, e) ? t : e));
            let t = null == g ? null : dc(g);
            (v((e) => (dd(e, t) ? e : t)), null != g && (0, ds.C)(g.getBoundingClientRect().height));
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
                    null != g && (0, ds.C)(0));
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
            let [e] = i.useContext(di.uY),
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
                      className: du.D,
                      "data-phase": c,
                      children: (0, r.jsx)("div", {
                          className: du.QF,
                          children: (0, r.jsx)(dm, { phase: c, projectId: t, onOpenPublishedApp: o, compact: k }),
                      }),
                  })
                : null,
            (0, u8.createPortal)(
                (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)("div", {
                        className: du.y4,
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-control-announcer",
                        children:
                            "controlling" === c
                                ? ed.intl.string(ec.default.oWcemF)
                                : "handoff" === c
                                  ? ed.intl.string(ec.default["h+i1r9"])
                                  : "",
                    }),
                }),
                document.body,
            ),
            y
                ? (0, u8.createPortal)(
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", {
                                  className: du.ys,
                                  style: N,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, r.jsx)("div", {
                                  className: du.om,
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
var dh = l(399503),
    dg = l(853555),
    dx = l(558960),
    dp = l(187645);
let dv = new Map(),
    dj = !1;
function db() {
    let e = new Map();
    for (let t of new Set([...ek.Ay.getActivityOrderedProjectIds(), ...(0, tv.T7)()])) {
        if (!ek.Ay.isThinking(t) && !(0, tv.wK)(t)) continue;
        let l = (function (e) {
            let t = eE.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let l = (0, ty.Rc)(t);
            return (0, tG.x1)(l) ? l.id : null;
        })(t);
        null != l && e.set(t, l);
    }
    for (let [n, a] of [...dv]) {
        var t, l;
        e.get(n) !== a.frameId &&
            ((t = n),
            (l = a),
            dv.delete(t),
            l.unregisterLookup(),
            dx.A.removeFrameTarget(l.frameId, l.element),
            l.element.remove());
    }
    for (let [t, l] of e)
        dv.has(t) ||
            (function (e, t) {
                let l = document.createElement("div");
                ((l.className = dp.t),
                    l.setAttribute("inert", ""),
                    l.setAttribute("aria-hidden", "true"),
                    dy(l),
                    document.body.appendChild(l));
                let n = { frameId: t, element: l, unregisterLookup: () => {} };
                (dv.set(e, n),
                    (n.unregisterLookup = (0, dg.Ng)(e, () => (0, cI.o)(l, t))),
                    dx.A.registerFrameTarget(t, l, cL.A.Backstage, void 0));
            })(t, l);
    for (let e of dv.values()) dy(e.element);
}
function dy(e) {
    let t = tx.A.isBuilderPreviewMobile();
    e.classList.toggle(dp.L, !t);
    let l = t ? cO(tx.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != l ? `${l.width}px` : ""), (e.style.height = null != l ? `${l.height}px` : ""));
}
var dk = l(873727),
    dw = l(147248),
    dN = l(418842),
    dA = l(363195),
    dS = l(818023);
let dC = null;
var dE = l(602853),
    dI = l(517461),
    dM = l(487336);
function dT(e) {
    let { open: t, maxWidth: l, onWidthChange: n, children: a } = e,
        s = (0, dE.r)($.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = i.useRef(null),
        [u, c] = (0, dI.V)("VibegrationsChatSidebarWidth", 460),
        [d, m] = i.useState(u ?? 460),
        f = (0, ld.clamp)(d, 360, l);
    i.useLayoutEffect(() => {
        n(t ? f + s : 0);
    }, [f, t, s, n]);
    let h = (0, uM.A)({
            minDimension: 360,
            maxDimension: l,
            resizableDomNodeRef: o,
            onElementResize: m,
            onElementResizeEnd: c,
            orientation: uM.R.HORIZONTAL_LEFT,
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
        className: dM.pz,
        hidden: !t,
        children: [
            (0, r.jsx)("div", { className: dM.Di, onPointerDown: g }),
            (0, r.jsx)("div", { ref: o, className: dM.kL, style: { width: f }, children: a }),
        ],
    });
}
var d_ = l(541940);
function dP(e) {
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
        v = (0, H.A)(n, s),
        j = v?.id ?? null;
    (!(function (e, t) {
        let l = (0, m.bG)([dA.A], () => (0, dk.x4)(dA.A.theme)),
            n = (0, m.bG)([dw.A], () => dw.A.gradientPreset),
            {
                reducedMotion: a,
                fontScale: r,
                highContrast: s,
                forcedColors: o,
                underlineLinks: u,
            } = (0, m.cf)([ig.Ay], () => ({
                reducedMotion: ig.Ay.useReducedMotion,
                fontScale: (0, dk.U0)(),
                highContrast: ig.Ay.isHighContrastModeEnabled,
                forcedColors: ig.Ay.useForcedColors,
                underlineLinks: ig.Ay.alwaysShowLinkDecorations,
            })),
            c = X.hH.useSetting(),
            d = (0, dN.C)(),
            f = i.useRef(!1),
            h = i.useRef(!1),
            g = i.useRef(0),
            x = i.useRef(null),
            p = i.useCallback(() => {
                let n = (0, cI.o)(e, t);
                if (null == n) return;
                x.current = n;
                let i = {
                    revision: ++g.current,
                    baseTheme: l,
                    customTheme: (0, dk.Lq)(),
                    uiDensity: d,
                    messageDisplayCompact: c,
                    fontScale: r,
                    reducedMotion: a,
                    highContrast: s,
                    forcedColors: o,
                    underlineLinks: u,
                };
                (0, cs.W)(n, "set-env", i, {
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
                let l = (0, cI.o)(e, t);
                null != l && l !== x.current && j();
            }),
            i.useEffect(() => {
                function l(l) {
                    l.target === (0, cI.o)(e, t) && ((x.current = null), j());
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
            if (null != t) return (0, dg.Ng)(t, () => (0, cI.o)(x, j));
        }, [t, x, j]));
    let b = i.useCallback(() => (0, cI.o)(x, j), [x, j]),
        y = i.useCallback(() => (g ? (0, cI.o)(x, j) : x), [g, x, j]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: o()(d_.Mh, c),
                children: [
                    u,
                    (0, r.jsx)(df, {
                        projectId: t ?? null,
                        applicationId: n,
                        previewApplicationId: a,
                        resolveTarget: y,
                        frameId: j,
                        onOpenPublishedApp: h,
                    }),
                    (0, r.jsx)("div", { ref: p, className: d_.fm, children: d }),
                ],
            }),
            f,
            (0, r.jsx)(cx, {
                projectId: t ?? null,
                applicationId: n,
                previewApplicationId: a,
                resolveIframe: b,
                toggleRef: l,
            }),
        ],
    });
}
function dR(e) {
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
    (0, dh.k)(t, w);
    let S = s.type === l4.U.MAIN || (0, ty.Q5)(s);
    !(function (e) {
        let { mobile: t, landscape: l } = (0, m.cf)([tx.A], () => ({
            mobile: tx.A.isBuilderPreviewMobile(),
            landscape: tx.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let n;
            if (null != e) {
                if (t) ((n = l ? dS.aX.LANDSCAPE : dS.aX.PORTRAIT), (dC = e));
                else {
                    if (dC !== e) return;
                    ((n = dS.aX.UNHANDLED), (dC = null));
                }
                nR.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: n, applicationId: e });
            }
        }, [e, t, l]);
    })(S ? n : null);
    let C = i.useRef(null),
        [E, I] = i.useState(0);
    (i.useEffect(() => {
        if (null == t) return;
        (0, er.TP)(t);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, er.TP)(t);
        }, 3e3);
        return () => clearInterval(e);
    }, [t]),
        i.useLayoutEffect(() => {
            if (S) return ((0, eC.HV)(n), () => (0, eC.HV)(null));
        }, [n, S]),
        i.useEffect(() => {
            null != t &&
                ((0, er.Hc)(t),
                dj ||
                    ((dj = !0),
                    ek.Ay.addChangeListener(db),
                    eE.Ay.addChangeListener(db),
                    tP.A.addChangeListener(db),
                    tx.A.addChangeListener(db),
                    (0, tv.W3)(db),
                    db()));
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
        i.useLayoutEffect(() => () => (0, eC.Zq)(0), []));
    let M = Math.max(360, E - 320),
        T = c || S;
    return (0, r.jsx)("div", {
        ref: C,
        className: d_.LB,
        children: (0, r.jsx)(dP, {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: n,
            previewApplicationId: a,
            surface: s,
            header: u,
            onOpenPublishedApp: A,
            showsFrame: (0, tb.yf)(y, k),
            mainClassName: null == u ? void 0 : o()(d_.ez, { [d_.zt]: c }),
            content: (0, r.jsx)(da, {
                applicationId: n,
                previewApplicationId: a,
                surface: s,
                previewReady: j,
                previewGate: b,
                availability: y,
                activeMode: k,
                widgetApplicationId: w,
                overlayWidgetSize: N,
                frameOverlay: (0, r.jsx)(cR, { projectId: t, applicationId: n, previewApplicationId: a, surface: s }),
            }),
            sidebar:
                null != t && T
                    ? (0, r.jsx)(dT, {
                          open: c,
                          maxWidth: M,
                          onWidthChange: eC.Zq,
                          children: (0, r.jsx)("div", {
                              className: d_.cO,
                              children: x
                                  ? (0, r.jsx)(u5, { projectId: t, onClose: p ?? (() => {}) }, t)
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(cN.A, { projectId: t }),
                                            (0, r.jsx)(l6.Ay, {
                                                "aria-label": ed.intl.string(ed.t["/VQax8"]),
                                                toolbar: (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        f,
                                                        null == d
                                                            ? null
                                                            : (0, r.jsx)(l6.Ay.Icon, {
                                                                  icon: L.P,
                                                                  tooltip: ed.intl.string(ec.default.JD6Oit),
                                                                  onClick: d,
                                                              }),
                                                    ],
                                                }),
                                                children: (0, r.jsx)(l6.Ay.Title, {
                                                    children: ed.intl.string(ed.t["/VQax8"]),
                                                }),
                                            }),
                                            (0, r.jsx)("div", {
                                                className: d_.cb,
                                                children: (0, r.jsx)(
                                                    ol,
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
var dL = l(631417);
function dD(e) {
    let { title: t, actions: l, breadcrumb: n, project: a, onOpenProjectSettings: i } = e,
        s = ed.intl.string(ec.default.FzfmQ8);
    return (0, r.jsx)(K.A, {
        hideSearch: !0,
        toolbar: l,
        className: dL.wx,
        "aria-label": t,
        children: (0, r.jsxs)("div", {
            className: dL.QF,
            children: [
                (0, r.jsx)(D.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: $.A.colors.TEXT_STRONG,
                    className: dL.Kk,
                }),
                null != n
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(K.A.Title, { onClick: n.onClick, children: n.title }),
                              (0, r.jsx)(K.A.Caret, {}),
                          ],
                      })
                    : null,
                null != a && null != i
                    ? (0, r.jsx)(w.m, {
                          asContainer: !0,
                          text: s,
                          position: "bottom",
                          children: (0, r.jsx)(k.D, {
                              className: dL.FF,
                              onClick: i,
                              "aria-label": s,
                              children: (0, r.jsx)(l$.A, { project: a, size: "header" }),
                          }),
                      })
                    : null,
                (0, r.jsx)(K.A.Title, { className: dL.Qw, wrapperClassName: dL.DD, children: t }),
            ],
        }),
    });
}
var d$ = l(683071);
let dF = "conjuring-help";
var dz = l(173114);
function dO() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: l,
            } = (0, m.cf)([tJ.default, Y.A, lg.Ay, lx.A], () => {
                let e = tJ.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of Y.A.getGuildsArray()) {
                    if (!t.features.has(eb.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let l = lg.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, G.m1)(t, tJ.default, lx.A) === dF;
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
                    ? (0, V.pX)(eb.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, li.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, r.jsx)("div", {
              className: dz.l,
              children: (0, r.jsx)(d$.w, {
                  type: "info",
                  iconAlign: "center",
                  message: ed.intl.format(ec.default["6anmu1"], { channel: dF, onNavigate: t }),
                  role: "static",
              }),
          });
}
var dG = l(606128),
    dU = l(323140);
function dq(e) {
    return (0, r.jsx)(h.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function dH(e) {
    return (0, r.jsx)(g.u, { ...e, size: "custom", width: 20, height: 20 });
}
function dB(e) {
    return (0, r.jsx)(x.k, { ...e, size: "custom", width: 20, height: 20 });
}
function dK(e) {
    return (0, r.jsx)(p.H, { ...e, size: "custom", width: 20, height: 20 });
}
let dV = {
    showPublishBlocked: function (e) {
        (0, tt.openModal)((t) => (0, r.jsx)(l0, { ...t, reason: e }));
    },
    openPublishNotes: l1.A,
    showError: (e) => (0, v.P)((0, j.o)(e, b.Ck.FAILURE)),
    openProfile: (e) => {
        (0, W.openUserProfileModal)({ userId: e });
    },
    openAutomodSettings: (e) => {
        Promise.resolve()
            .then(l.bind(l, 468689))
            .then((t) => {
                let { default: l } = t;
                return l.open(e, eb.BEX.GUILD_AUTOMOD);
            })
            .catch(() => {});
    },
};
function dW(e) {
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
        S,
        { project: C, guildId: E, onSelect: I, onRemix: M, shared: T = !1 } = e,
        _ =
            ((l = C.id),
            (n = C.name),
            (a = i.useRef(!1)),
            (s = i.useCallback(() => {
                a.current ||
                    ((a.current = !0),
                    (0, v.P)((0, j.o)(ed.intl.formatToPlainString(ec.default.aN2JdD, { name: n }), b.Ck.MESSAGE)),
                    eh(l, n)
                        .catch((e) => {
                            let t;
                            (console.error("[vibegrations] project export failed", l, e),
                                (0, v.P)(
                                    (0, j.o)(
                                        409 === (t = e instanceof er.xE ? e.status : null)
                                            ? ed.intl.string(ec.default["9oqbEw"])
                                            : 404 === t
                                              ? ed.intl.string(ec.default["0W8uLq"])
                                              : ed.intl.string(ec.default.N8753A),
                                        b.Ck.FAILURE,
                                    ),
                                ));
                        })
                        .finally(() => {
                            a.current = !1;
                        }));
            }, [l, n])),
            {
                onExport: s,
                onImport: (u = eg(
                    i.useCallback(
                        (e) => {
                            let t = ef(e);
                            null != t
                                ? (0, v.P)((0, j.o)(t, b.Ck.FAILURE))
                                : (0, f.A)({
                                      title: ed.intl.formatToPlainString(ec.default["Gm+u1+"], { name: n }),
                                      subtitle: ed.intl.string(ec.default.M7H3sJ),
                                      confirmText: ed.intl.string(ec.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, V.pX)(eb.BVt.CHANNEL(E, ey.VV.CONJURE, l));
                                          try {
                                              await em(l, e, ed.intl.string(ec.default.Owerd3));
                                          } catch {
                                              (0, v.P)((0, j.o)(ed.intl.string(ec.default["Q+l4Hv"]), b.Ck.FAILURE));
                                          }
                                      },
                                  });
                        },
                        [l, n, E],
                    ),
                )).open,
                importInput: u.input,
            }),
        P =
            null == C.updated_at
                ? null
                : ed.intl.formatToPlainString(ec.default.AXydi3, { time: c()(C.updated_at).fromNow() }),
        R = (0, tW.wu)(C),
        L =
            (0, m.bG)([Y.A], () => (null == R ? null : (Y.A.getGuild(R)?.name ?? null)), [R]) ??
            ed.intl.string(ec.default["3QFps8"]),
        D = (0, m.bG)([eE.Ay], () => eE.Ay.isProjectDeleting(C.id), [C.id]),
        $ =
            ((t = T ? C : null),
            (h = t?.id),
            (g = t?.owner_user_id),
            (x = (0, m.yK)(
                [ek.Ay],
                () =>
                    null == h
                        ? []
                        : [
                              ...new Set(
                                  ek.Ay.getMessages(h)
                                      .flatMap((e) => (null != e.user_id && e.user_id !== g ? [e.user_id] : []))
                                      .reverse(),
                              ),
                          ],
                [h, g],
            )),
            i.useEffect(() => {
                null != g && (t2(g), x.forEach(t2));
            }, [g, x]),
            (p = (0, m.bG)([tJ.default], () => (null == g ? null : tJ.default.getUser(g)), [g])),
            (S = (0, m.yK)([tJ.default], () => x.map((e) => tJ.default.getUser(e)).filter((e) => null != e), [x])),
            i.useMemo(
                () =>
                    null == p
                        ? null
                        : {
                              creator: p,
                              collaborators: S,
                              label: (function (e, t) {
                                  let l;
                                  return 0 === t.length
                                      ? ed.intl.formatToPlainString(ec.default.t5RWBS, { creator: e })
                                      : ed.intl.formatToPlainString(ec.default["b5uCe/"], {
                                            creator: e,
                                            collaborators:
                                                0 === (l = void 0 ?? t.length)
                                                    ? ""
                                                    : 1 === l
                                                      ? ed.intl.formatToPlainString(ed.t["8s9z8P"], { first: t[0] })
                                                      : 2 === l
                                                        ? ed.intl.formatToPlainString(ed.t["i0K/dw"], {
                                                              first: t[0],
                                                              second: t[1],
                                                          })
                                                        : 3 === l
                                                          ? ed.intl.formatToPlainString(ed.t["/KSOKY"], {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                            })
                                                          : ed.intl.formatToPlainString(ed.t.xpU76u, {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                                count: l - 3,
                                                            }),
                                        });
                              })(
                                  (0, tQ.mG)(p),
                                  S.map((e) => (0, tQ.mG)(e)),
                              ),
                          },
                [p, S],
            )),
        z = i.useId(),
        O = (0, r.jsx)(y.E, { variant: "text-md/semibold", color: "text-strong", className: dU.j1, children: C.name }),
        G = (0, ew.oF)(C.id),
        U = {
            projectId: C.id,
            projectName: C.name,
            guildId: E,
            projectGuildId: C.guild_id,
            isOwner: (0, eE.PV)(C),
            canRemix: (0, eE.H_)(C),
            onRemix: M,
            onExport: _.onExport,
            onImport: _.onImport,
        };
    return (0, r.jsxs)("div", {
        className: o()(dU.OY, { [dU.Wy]: D }),
        "aria-busy": D,
        children: [
            (0, r.jsx)(tl.Ay, { projectId: C.id }),
            null == G || D ? null : (0, r.jsx)("div", { className: dU.SB, "aria-hidden": !0 }),
            (0, r.jsxs)(k.D, {
                className: dU.W6,
                onClick: D ? void 0 : I,
                onContextMenu: function (e) {
                    D || (0, F.jA)(e, () => (0, r.jsx)(lL, { ...U, onCloseMenu: F.Z_ }));
                },
                tabIndex: D ? -1 : void 0,
                "aria-describedby": null != $ ? z : void 0,
                children: [
                    (0, r.jsx)(l$.A, { project: C, size: "card", className: dU.VJ }),
                    (0, r.jsxs)("div", {
                        className: dU.MM,
                        children: [
                            (0, r.jsxs)("div", {
                                className: dU.Ub,
                                children: [
                                    null != $ ? (0, r.jsx)(w.m, { text: $.label, ariaHidden: !0, children: O }) : O,
                                    null == $ || D ? null : (0, r.jsx)(lO, { creator: $, className: dU.rb }),
                                    G !== d.I.NEEDS_INPUT || D
                                        ? null
                                        : (0, r.jsxs)("div", {
                                              className: dU.fs,
                                              children: [
                                                  (0, r.jsx)(B.A, { mentionsCount: 1 }),
                                                  (0, r.jsx)(N.A, { children: ed.intl.string(ec.default.hfIuc7) }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: dU.h3,
                                children: [
                                    (0, r.jsx)(y.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: dU.Wb,
                                        children: D ? ed.intl.string(ec.default.Yh5pAc) : L,
                                    }),
                                    null == P || D
                                        ? null
                                        : (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)("span", {
                                                      className: dU.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, r.jsx)(y.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: dU.zM,
                                                      children: P,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            null != $ ? (0, r.jsx)(N.A, { id: z, children: $.label }) : null,
            (0, r.jsx)("div", {
                className: dU.M2,
                children: D
                    ? (0, r.jsx)(A.y, { type: A.t.SPINNING_CIRCLE_SIMPLE })
                    : (0, r.jsxs)("div", {
                          className: dU.Pl,
                          children: [(0, r.jsx)(lD, { ...U, trigger: "iconButton" }), _.importInput],
                      }),
            }),
        ],
    });
}
function dX(e) {
    var t, n;
    let a,
        { project: s, projectsLoaded: u, onBack: c, guildId: d } = e,
        [h, g] = i.useState(!0),
        [x, p] = i.useState(!1),
        k = X.Q_.useSetting(),
        [N, A] = i.useState(null),
        [T, _] = i.useState(null),
        P = s?.id ?? null,
        R = i.useRef(P),
        L = i.useRef(!0),
        D = i.useRef(!1),
        $ = i.useRef(null);
    ((R.current = P),
        i.useEffect(
            () => (
                (L.current = !0),
                () => {
                    L.current = !1;
                }
            ),
            [],
        ));
    let F = (0, m.bG)([eE.Ay], () => (null == P ? null : eE.Ay.getIntegrationStatus(P)), [P]),
        { data: z, isLoading: B } = (0, O.YY)(s?.preview_application_id ?? void 0),
        W = null != P && T !== P,
        Q = F?.preview_ready === !0,
        Y = F?.has_activity === !0,
        {
            availability: Z,
            activeMode: et,
            setMode: el,
            frameSurface: en,
            frameSurfaceOptions: ea,
            setFrameSurface: ei,
            widgetApplicationId: es,
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
                v = (0, m.bG)([tI.default], () => tI.default.getId()),
                { applicationWidgetConfig: j } = (0, tS.A)(v, p ?? void 0),
                b = j?.surfaces,
                y = (0, tb.yZ)({
                    widgetTop: b?.[tA.m.WIDGET_TOP] != null,
                    widgetBottom: b?.[tA.m.WIDGET_BOTTOM] != null,
                    miniProfile: b?.[tA.m.MINI_PROFILE] != null,
                }),
                k = null != p && (o ? y.hasMainCard : y.hasAny),
                { data: w } = (0, O.YY)(l ?? void 0),
                N = null != l && w?.bot?.id != null,
                { data: A, isLoading: S } = (0, O.YY)(t ?? void 0),
                C = n || (0, tE.X)(A),
                E = null != t && S && null == A,
                I = (0, tb.P5)(a, {
                    legacy: { hasFrame: C, hasProfileWidget: k, hasBotDm: N },
                    widgetResolvable: null != p,
                    botDmResolvable: N,
                }),
                M = (0, tb.Xm)({ installScope: r, ...I, hasOverlay: u, ownerAuthorizationRevoked: s }),
                T = i.useMemo(() => (0, tM.hR)(a), [a]),
                _ = (0, tM.PH)(f, T);
            return (
                i.useEffect(() => {
                    if (null != t) for (let e of (0, ty.Mm)(t)) e.surface.type !== (0, tM.BR)(_) && (0, tC.r)(e.id);
                }, [t, _]),
                {
                    availability: M,
                    isResolving: E,
                    activeMode: E ? null : (0, tb.Qs)(c, M),
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
            declaredActivity: Y,
            previewSupportedSurfaces: s?.preview_supported_surfaces,
            installScope: s?.install_scope ?? null,
            ownerAuthorizationRevoked: F?.owner_authorization_revoked === !0,
            supportsOverlay: s?.preview_supported_surfaces?.includes(ee.q7.OVERLAY) === !0,
        }),
        eo =
            ((t = (0, m.bG)(
                [ek.Ay],
                () =>
                    null == P
                        ? null
                        : (function (e) {
                              for (let t = e.length - 1; t >= 0; t--) {
                                  let l = e[t].proposal?.overlay_widget;
                                  if (null != l) return l;
                              }
                              return null;
                          })(ek.Ay.getMessages(P)),
                [P],
            )),
            null != (a = t?.default_size) &&
            Number.isFinite(a.width) &&
            Number.isFinite(a.height) &&
            a.width > 0 &&
            a.height > 0
                ? a
                : tp);
    (0, tj.x)(P, (e) => {
        Z.modes.includes(e) && el(e);
    });
    let eu = Z.modes.includes("frame"),
        eh = i.useMemo(() => {
            var e;
            return (
                (e = Z.modes),
                e.flatMap((e) => ("frame" === e ? ea.map((t) => ({ mode: e, surface: t })) : [{ mode: e }]))
            );
        }, [Z.modes, ea]),
        ex = i.useCallback(
            (e) => {
                ("frame" === e.mode && ei(e.surface), el(e.mode));
            },
            [ei, el],
        ),
        ep = (0, tb.Qg)({
            installScope: s?.install_scope ?? null,
            previewReady: Q,
            integrationInstalled: F?.integration_installed ?? null,
            botPermissionsChanged: F?.bot_permissions_changed === !0,
        }),
        ev = h && !x,
        ej = ed.intl.string(ev ? ec.default.JD6Oit : ec.default.xjJAQm),
        ew = i.useCallback(() => {
            if (x) {
                (p(!1), g(!0));
                return;
            }
            g((e) => !e);
        }, [x]),
        eN = i.useCallback(() => g(!1), []),
        { active: eA } = te(P);
    i.useEffect(() => {
        null != P && eA && !eu && e7(P);
    }, [P, eA, eu]);
    let eS = i.useRef(null),
        eI = (0, tv.Zv)(P),
        eM = ed.intl.string(eI ? ec.default.Sme0T0 : eA ? ec.default.vn5Rzu : ec.default["cl/Jyl"]),
        eT = i.useCallback(() => {
            if (null != P) {
                let e;
                if (eA) return void e7(P);
                (p(!1), g(!0), (e = e4(P)).active || e6(P, { ...e, active: !0 }));
            }
        }, [P, eA]),
        e_ = i.useCallback(() => {
            p((e) => !e && (g(!0), !0));
        }, []),
        eP = i.useCallback(() => p(!1), []),
        eR = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (null == s || D.current) return;
                let n = s.id;
                function a() {
                    return L.current && R.current === n;
                }
                ((D.current = !0),
                    p(!1),
                    g(!0),
                    A({ entry: e, status: "restoring" }),
                    (0, er.oB)(n, e.sha)
                        .then(
                            async () => {
                                if (
                                    (l &&
                                        a() &&
                                        (0, v.P)(
                                            (0, j.o)(
                                                ed.intl.formatToPlainString(ec.default.Z4n6LX, {
                                                    title: (0, tn.T4)(e.subject).short,
                                                }),
                                                b.Ck.SUCCESS,
                                            ),
                                        ),
                                    null != t)
                                ) {
                                    let e = await (0, ta.c)(n, t);
                                    null != e && (0, v.P)((0, j.o)(e, b.Ck.FAILURE));
                                }
                                a() && A({ entry: e, status: "restored" });
                            },
                            (t) => {
                                a() &&
                                    (A({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", n, t),
                                    (0, v.P)((0, j.o)(ed.intl.string(ec.default["PSdo+w"]), b.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            a() && (D.current = !1);
                        }));
            },
            [s],
        ),
        eL = (0, m.bG)([tx.A], () => tx.A.isBuilderPreviewMobile()),
        eD = ed.intl.string(eL ? ec.default.tKGF0Q : ec.default.peqEOY),
        e$ = i.useCallback(() => (0, eC.GG)(!eL), [eL]),
        eF = (0, m.bG)([tx.A], () => tx.A.isBuilderPreviewLandscape()),
        ez = ed.intl.string(eF ? ec.default.tunI2l : ec.default.DoNdjA),
        eO = i.useCallback(() => (0, eC.Lw)(!eF), [eF]),
        eG = (0, ty.jS)(s),
        eU = i.useMemo(() => (0, ty.Op)(eG, en), [eG, en]),
        eq = (0, H.A)(s?.preview_application_id ?? null, eU),
        eH = (0, tG.x1)(eq) && eq.data.proxyTicketRefreshing,
        eB = i.useCallback(() => {
            null == eq || eH || q.A.refreshProxyTicket(eq.id);
        }, [eq, eH]),
        eK = i.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = eq?.id), (0, er.Bn)(e), (0, tC.r)(t)), c());
        }, [s, eq?.id, c]),
        eV = i.useCallback(() => {
            null != s && (g(!0), (0, er.dv)(s.id, ed.intl.string(ec.default.oU20rd)));
        }, [s]),
        eW = eg(
            i.useCallback(
                (e) => {
                    if (null == s) return;
                    let t = s.id,
                        l = ef(e);
                    null != l
                        ? (0, v.P)((0, j.o)(l, b.Ck.FAILURE))
                        : (0, f.A)({
                              title: ed.intl.formatToPlainString(ec.default["Gm+u1+"], { name: s.name }),
                              subtitle: ed.intl.string(ec.default.M7H3sJ),
                              confirmText: ed.intl.string(ec.default.gFHykw),
                              variant: "critical",
                              onConfirm: async () => {
                                  g(!0);
                                  try {
                                      await em(t, e, ed.intl.string(ec.default.Owerd3));
                                  } catch {
                                      (0, v.P)((0, j.o)(ed.intl.string(ec.default["Q+l4Hv"]), b.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [s],
            ),
        ),
        eX = i.useCallback(() => {
            null != s && (0, l2.A)(s, d);
        }, [s, d]),
        eJ = i.useCallback(async () => {
            if (null == P || R.current !== P) return;
            $.current?.abort();
            let e = new AbortController();
            (($.current = e), _(null));
            try {
                await (0, eC.U1)(P, e.signal);
            } catch {
            } finally {
                e.signal.aborted || $.current !== e || R.current !== P || _(P);
            }
        }, [P]);
    i.useEffect(
        () => (
            eJ(),
            () => {
                ($.current?.abort(), ($.current = null));
            }
        ),
        [eJ],
    );
    let eQ = (0, lY.a)(s ?? null, F ?? null, d),
        eY = ((n = s?.application_id ?? null), (0, m.bG)([lg.Ay], () => (null == n ? null : (0, lG.i8)(d, n)), [d, n])),
        eZ = i.useMemo(() => (null == eY ? null : () => (0, V.pX)(eb.BVt.CHANNEL(d, eY))), [d, eY]),
        e0 = i.useCallback(async () => {
            null != s && (await (0, lY.$)(s, eQ));
        }, [eQ, s]),
        e1 = i.useCallback(async () => {
            try {
                await e0();
            } catch {}
            await eJ();
        }, [eJ, e0]),
        e2 = i.useMemo(() => {
            let e = s?.preview_application_id;
            return null == e || B || W
                ? null
                : {
                      ...(0, tV.i)({ applicationId: e, application: z ?? null, guildId: eQ }),
                      onClose: () => {
                          e1();
                      },
                  };
        }, [W, e1, eQ, B, z, s?.preview_application_id]),
        e3 = (0, tb.JR)(et, ep)
            ? { type: "permissions", authorizeProps: e2 }
            : W && null == F
              ? { type: "checking" }
              : void 0,
        e5 = (0, m.bG)([eE.Ay], () => null != P && eE.Ay.isProjectDeleting(P), [P]);
    i.useEffect(() => {
        ((null == s && u) || e5) && (0, V.bG)(eb.BVt.CHANNEL(d, ey.VV.CONJURE));
    }, [d, s, u, e5]);
    let e8 = i.useMemo(() => ({ guildId: d, platform: dV, busy: W || B }), [d, W, B]),
        e9 = (0, lo.Ay)(P, e8),
        tl = e9?.intent === "open" && "channel" === e9.destination ? e9.appChannelId : null,
        tr = (0, m.bG)([J.A], () => (null == tl ? null : J.A.getChannel(tl)), [tl]),
        ti = (0, G.Ay)(tr),
        ts = (0, U.gU)(tr),
        to =
            null != ti && null != ts
                ? ed.intl.format(ec.default.gR7PUV, {
                      channel: ti,
                      channelIconHook: (e, t) =>
                          (0, r.jsx)(ts, { size: "xs", color: "currentColor", className: dU.Y2 }, t),
                  })
                : e9?.label,
        tu = e9?.upToDate === !0 ? ed.intl.string(ec.default.X0kGp2) : (e9?.disabledReason ?? null),
        tc =
            null == e9
                ? null
                : (0, r.jsx)("div", {
                      className: dU.As,
                      children: (0, r.jsx)(w.m, {
                          text: tu,
                          asContainer: !0,
                          children: (0, r.jsx)(S.$, {
                              size: "sm",
                              variant: e9.upToDate ? "secondary" : "primary",
                              loading: e9.publishing,
                              disabled: e9.disabled,
                              onClick: () => e9.run("header"),
                              text: to,
                          }),
                      }),
                  }),
        td = null == s ? void 0 : () => (0, lu.A)(s.id, { guildId: d, isPreview: !0, publishOptions: e8 }),
        tm = (0, r.jsx)(dD, {
            title: s?.name ?? ed.intl.string(ec.default.G1WwgK),
            breadcrumb: { title: ed.intl.string(ec.default.uk6jhJ), onClick: c },
            project: s,
            onOpenProjectSettings: td,
            actions:
                null == s
                    ? null
                    : (0, r.jsxs)("div", {
                          className: dU.FO,
                          children: [
                              (0, r.jsx)(tK, {
                                  targets: eh,
                                  target: null == et ? null : "frame" === et ? { mode: et, surface: en } : { mode: et },
                                  onChange: ex,
                              }),
                              eu
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            "overlay" === et
                                                ? null
                                                : (0, r.jsx)(K.A.Icon, {
                                                      icon: eL ? dB : dH,
                                                      tooltip: eD,
                                                      "aria-label": eD,
                                                      selected: eL,
                                                      onClick: e$,
                                                  }),
                                            eL && "overlay" !== et
                                                ? (0, r.jsx)(K.A.Icon, {
                                                      icon: dK,
                                                      tooltip: ez,
                                                      "aria-label": ez,
                                                      selected: eF,
                                                      onClick: eO,
                                                  })
                                                : null,
                                            (0, r.jsx)(K.A.Icon, {
                                                ref: eS,
                                                icon: C.x,
                                                iconClassName: dU.D8,
                                                tooltip: eM,
                                                "aria-label": eM,
                                                selected: eA,
                                                disabled: eI,
                                                onClick: eT,
                                            }),
                                        ],
                                    })
                                  : null,
                              "frame" === et ? (0, r.jsx)(tU, { frame: eq, controlProjectId: s.id }) : null,
                              (0, r.jsx)("div", { className: dU.YJ }),
                              k
                                  ? (0, r.jsx)(K.A.Icon, {
                                        icon: E.BugIcon,
                                        tooltip: ed.intl.string(ec.default.Mt5k9d),
                                        "aria-label": ed.intl.string(ec.default.Mt5k9d),
                                        selected: x,
                                        onClick: e_,
                                    })
                                  : null,
                              (0, r.jsx)(K.A.Icon, {
                                  icon: I.SettingsIcon,
                                  tooltip: ed.intl.string(ec.default.I2XSKe),
                                  "aria-label": ed.intl.string(ec.default.I2XSKe),
                                  onClick: td,
                              }),
                              (0, r.jsx)(lD, {
                                  projectId: s.id,
                                  projectName: s.name,
                                  guildId: d,
                                  projectGuildId: s.guild_id,
                                  isOwner: (0, eE.PV)(s),
                                  canRemix: (0, eE.H_)(s),
                                  onRefresh: (0, tG.x1)(eq) ? eB : void 0,
                                  isRefreshing: eH,
                                  onClose: eK,
                                  onExport: eV,
                                  onImport: eW.open,
                                  onRemix: eX,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = s.id),
                                          void (0, tt.openModalLazy)(async () => {
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
                                              restoreDisabled: N?.status === "restoring",
                                              onRestoreVersion: (e, t) => eR(e, t, !0),
                                          }),
                                          void (0, tt.openModalLazy)(async () => {
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
                                      Z.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== Z.profileState
                                          ? es
                                          : null,
                                  previewProjectId: s.id,
                              }),
                              ev
                                  ? null
                                  : (0, r.jsx)(K.A.Icon, { icon: dq, tooltip: ej, "aria-label": ej, onClick: ew }),
                          ],
                      }),
        });
    return (0, r.jsxs)("div", {
        className: o()(dU.nj, dG.T),
        children: [
            eW.input,
            (0, r.jsx)("main", {
                className: dU.JX,
                children:
                    null == s
                        ? (0, r.jsxs)("div", {
                              className: dU.j5,
                              children: [
                                  tm,
                                  (0, r.jsxs)("div", {
                                      className: dU.sD,
                                      children: [
                                          (0, r.jsx)(M.D, {
                                              variant: "heading-lg/semibold",
                                              children: ed.intl.string(ec.default.G1WwgK),
                                          }),
                                          (0, r.jsx)(y.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: ed.intl.string(ec.default.fINulo),
                                          }),
                                          (0, r.jsx)(S.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: ed.intl.string(ec.default["WFJ/vb"]),
                                              onClick: () => (0, eC.hF)(d),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, r.jsx)(lo.bI.Provider, {
                              value: e8,
                              children: (0, r.jsx)(
                                  dR,
                                  {
                                      projectId: s.id,
                                      designFeedbackToggleRef: eS,
                                      applicationId: s.preview_application_id,
                                      previewApplicationId: s.preview_application_id,
                                      surface: eU,
                                      header: tm,
                                      chatOpen: h,
                                      onCloseChat: eN,
                                      chatHeaderAction: tc,
                                      debugOpen: k && x,
                                      onCloseDebug: eP,
                                      onRestoreVersion: eR,
                                      onImportProject: (0, eE.PV)(s) ? eW.open : void 0,
                                      restoreState: N,
                                      previewReady: Q,
                                      previewGate: e3,
                                      availability: Z,
                                      activeMode: et,
                                      widgetApplicationId: es,
                                      overlayWidgetSize: eo,
                                      onOpenPublishedApp: eZ,
                                  },
                                  s.id,
                              ),
                          }),
            }),
        ],
    });
}
function dJ(e) {
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
            onIdeaChange: k,
            onCreate: w,
            onCreateFromTemplate: N,
            onStartTemplate: C,
            onSubmitTemplate: E,
            onCancelTemplate: I,
            onSkipTemplate: M,
            onImportNewProject: F,
            importing: z,
        } = e,
        [O, G] = i.useState(() => ({ guildId: a, filter: lB(a) })),
        U = (O.guildId === a ? O.filter : lB(a)) ?? a,
        q = i.useCallback(
            (e) => {
                (lH.set(a, e), G({ guildId: a, filter: e }));
            },
            [a],
        ),
        H = (0, m.yK)(
            [Y.A],
            () =>
                (function (e, t) {
                    let l = new Set([t]);
                    for (let t of e)
                        (null != t.guild_id && l.add(t.guild_id),
                            null != t.preview_guild_id && l.add(t.preview_guild_id));
                    let n = [];
                    for (let e of l) {
                        let t = Y.A.getGuild(e);
                        null != t && n.push(t);
                    }
                    return n.sort((e, t) => e.name.localeCompare(t.name));
                })(t, a),
            [t, a],
        ),
        B = i.useMemo(
            () => [
                { id: "conjure-filter-all", value: "all", leading: D.D, label: ed.intl.string(ec.default["Xi/oIC"]) },
                {
                    id: "conjure-filter-user",
                    value: lU,
                    leading: ex.UserIcon,
                    label: ed.intl.string(ec.default.kCSgmG),
                },
                {
                    id: "conjure-filter-no-server",
                    value: lq,
                    leading: ep.R,
                    label: ed.intl.string(ec.default["3QFps8"]),
                },
                ...H.map((e) => ({
                    id: `conjure-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, r.jsx)(eB.Ay, { guild: e, size: eB.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [H],
        ),
        V = (0, m.yK)(
            [eE.Ay, Y.A],
            () => {
                let e = lK(U);
                if (null != e) return eE.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(Y.A.getGuilds()))
                    eE.Ay.hasFetchedGuildProjects(e.id) && t.push(...eE.Ay.getSharedProjects(e.id));
                return t;
            },
            [U],
        );
    i.useEffect(() => {
        let e = lK(U);
        null == e || eE.Ay.hasFetchedGuildProjects(e) || (0, eC.hF)(e);
    }, [U]);
    let W = i.useMemo(
            () =>
                V.filter((e) => lV(e, U)).sort((e, t) =>
                    null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                ),
            [V, U],
        ),
        X = i.useMemo(
            () => [
                {
                    label: ed.intl.string(ec.default.NyVn6T),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: eK,
                            label: ed.intl.string(ec.default.UPLaGM),
                            leading: ex.UserIcon,
                        },
                        ...h.map((e) => ({
                            id: `conjure-target-${e.id}`,
                            value: e.id,
                            label: e.name,
                            leading: (0, r.jsx)(eB.Ay, { guild: e, size: eB.Ay.Sizes.MINI, active: !0 }),
                        })),
                    ],
                },
            ],
            [h],
        ),
        J = i.useMemo(
            () =>
                t
                    .filter((e) => lV(e, U))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, U],
        ),
        Q = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, lG.Ot)(e, a)
                    ? p(e.id)
                    : (0, v.P)((0, j.o)(ed.intl.string(ec.default["XUl/cs"]), b.Ck.MESSAGE));
            },
            [a, p],
        ),
        Z = ed.intl.string(ec.default.ab1sMf),
        et = [
            ed.intl.string(ec.default["9w+Chc"]),
            ed.intl.string(ec.default.WAvmdq),
            ed.intl.string(ec.default.SKsrzl),
        ],
        el = [
            {
                id: "moderation-bot",
                name: ed.intl.string(ec.default.lGLnE8),
                description: ed.intl.string(ec.default["pAC6k/"]),
                wizard: !0,
            },
            {
                id: "feature-showcase",
                name: ed.intl.string(ec.default.uJKQTs),
                description: ed.intl.string(ec.default["+dKy/B"]),
            },
            {
                id: "rust-sphere",
                name: ed.intl.string(ec.default.iF5Oru),
                description: ed.intl.string(ec.default.NbDDO6),
            },
        ],
        en = i.useCallback(
            (e) => {
                if (null != e.wizard) {
                    var t;
                    return void ((t = {
                        template: e,
                        guildId: a,
                        eligibleGuilds: h,
                        onStart: (t) => C(e.name, t),
                        onSubmit: (t, l, n) => E(e, t, l, n),
                        onCancel: I,
                        onSkip: M,
                    }),
                    (0, tt.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([l.e("881965"), l.e("166781")]).then(
                                l.bind(l, 790028),
                            );
                            return (l) => (0, r.jsx)(e, { ...l, ...t });
                        },
                        { modalKey: "ConjureTemplateWizardModal" },
                    ));
                }
                N(e);
            },
            [h, a, I, N, M, C, E],
        ),
        ea = ed.intl.string(ec.default.zzYLlW),
        er =
            (i.useEffect(() => {
                (0, eC.b8)();
            }, []),
            (0, m.bG)([eE.Ay], () => {
                let e = eE.Ay.getMaxProjects();
                return null != e && eE.Ay.hasFetchedOwnedProjects()
                    ? Math.max(0, e - eE.Ay.getOwnedProjects().length)
                    : null;
            })),
        ei = ed.intl.string(ec.default["2XcV3x"]),
        es = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), c || w());
            },
            [c, w],
        ),
        eo = lK(U) ?? a,
        eu = (0, m.bG)([eE.Ay], () => eE.Ay.getGuildProjectsFetchState(eo), [eo]),
        em = (0, m.bG)([eE.Ay], () => eE.Ay.getGuildProjectsFetchState(a), [a]),
        [ef, eh] = i.useState(lJ),
        eg = i.useMemo(() => lW.w.get(lQ(a)) ?? !1, [a]),
        ev = "success" === em,
        eb = (0, m.yK)([eE.Ay], () => eE.Ay.getSharedProjects(a), [a]).length > 0 || t.some((e) => lV(e, a)),
        ey = ef ?? (!!eb || "error" === em || (!ev && eg));
    i.useEffect(() => {
        ev && lW.w.set(lQ(a), eb);
    }, [ev, eb, a]);
    let ek = i.useCallback((e) => {
            (lW.w.set(lX, e), eh(e));
        }, []),
        ew = i.useCallback(() => ek(!ey), [ek, ey]),
        eN = i.useCallback(() => ek(!1), [ek]),
        eS = ed.intl.string(ec.default.kar7jh),
        eM = ey ? eS : ed.intl.string(ec.default.WSc5Y2);
    return (0, r.jsx)("div", {
        className: o()(dU.nj, dU.a0, dG.T),
        children: (0, r.jsxs)("div", {
            className: dU.Yo,
            children: [
                (0, r.jsxs)("main", {
                    className: dU.ps,
                    children: [
                        (0, r.jsx)(dD, {
                            title: ed.intl.string(ec.default.uk6jhJ),
                            actions: (0, r.jsx)(K.A.Icon, {
                                icon: T.Z,
                                tooltip: eM,
                                "aria-label": eM,
                                selected: ey,
                                onClick: ew,
                            }),
                        }),
                        (0, r.jsx)(_.Ip, {
                            className: dU.Yy,
                            children: (0, r.jsx)("div", {
                                className: dU.Mo,
                                children: (0, r.jsxs)("section", {
                                    className: o()(dU.Qs, dU.Ix),
                                    children: [
                                        (0, r.jsx)(dO, {}),
                                        (0, r.jsx)(eH, {}),
                                        (0, r.jsxs)("section", {
                                            className: dU.WI,
                                            "aria-label": ea,
                                            children: [
                                                (0, r.jsxs)("div", {
                                                    className: dU.G9,
                                                    children: [
                                                        (0, r.jsx)(y.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: ea,
                                                        }),
                                                        (0, r.jsx)(y.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: ed.intl.string(ec.default["N88+Ld"]),
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsx)(eR, {
                                                    listClassName: dU.Aw,
                                                    radius: e_,
                                                    children: el.map((e) =>
                                                        (0, r.jsx)(
                                                            "li",
                                                            {
                                                                className: dU.EA,
                                                                children: (0, r.jsxs)(eI, {
                                                                    disabled: s,
                                                                    ariaLabel: ed.intl.formatToPlainString(
                                                                        ec.default.jGyR6p,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: o()(dU.nx, dU.rz),
                                                                    onClick: () => en(e),
                                                                    children: [
                                                                        (0, r.jsx)(y.E, {
                                                                            className: dU.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, r.jsx)(y.E, {
                                                                            className: dU.BK,
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
                                            className: dU.WI,
                                            "aria-label": ei,
                                            children: [
                                                (0, r.jsxs)("div", {
                                                    className: dU.G9,
                                                    children: [
                                                        (0, r.jsx)(y.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: ei,
                                                        }),
                                                        (0, r.jsx)(y.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: ed.intl.string(ec.default.JnJOAn),
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsx)(eR, {
                                                    listClassName: dU.Aw,
                                                    radius: eP,
                                                    children: et.map((e) =>
                                                        (0, r.jsx)(
                                                            "li",
                                                            {
                                                                className: dU.EA,
                                                                children: (0, r.jsx)(eI, {
                                                                    disabled: s,
                                                                    className: dU.nx,
                                                                    onClick: () => w(e),
                                                                    children: (0, r.jsx)(y.E, {
                                                                        variant: "text-md/semibold",
                                                                        color: "text-strong",
                                                                        className: dU.un,
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
                            className: dU.Yl,
                            children: (0, r.jsxs)("div", {
                                className: o()(dU.Qs, dU.DA),
                                children: [
                                    (0, r.jsx)(P.f, {
                                        label: Z,
                                        hideLabel: !0,
                                        rows: 3,
                                        value: n,
                                        placeholder: Z,
                                        error: u,
                                        onChange: k,
                                        onKeyDown: es,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: dU.VP,
                                        children: [
                                            (0, r.jsx)("div", {
                                                className: dU.gH,
                                                children: (0, r.jsx)(R.l, {
                                                    selectionMode: "single",
                                                    label: ed.intl.string(ec.default.NyVn6T),
                                                    hideLabel: !0,
                                                    placeholder: ed.intl.string(ec.default.NyVn6T),
                                                    options: X,
                                                    value: d,
                                                    onSelectionChange: f,
                                                    disabled: s,
                                                }),
                                            }),
                                            null != er
                                                ? (0, r.jsx)(y.E, {
                                                      variant: "text-sm/medium",
                                                      color: 0 === er ? "text-feedback-warning" : "text-subtle",
                                                      children:
                                                          0 === er
                                                              ? ed.intl.string(ec.default.s28pGG)
                                                              : ed.intl.formatToPlainString(ec.default.Wy5aK4, {
                                                                    count: er,
                                                                }),
                                                  })
                                                : null,
                                            (0, r.jsx)(tg, {
                                                settings: g ?? ee.A4,
                                                tiers: ee.lO,
                                                choices: (0, eA.b)()
                                                    ? {
                                                          main: [...ee.vC.main, ...ee.XE.main],
                                                          subagent: [...ee.vC.subagent, ...ee.XE.subagent],
                                                          thinking: ee.vC.thinking,
                                                      }
                                                    : ee.vC,
                                                disabled: s,
                                                onChange: x,
                                            }),
                                            (0, r.jsx)(S.$, {
                                                variant: "primary",
                                                size: "md",
                                                text: ed.intl.string(ed.t.CumH4u),
                                                disabled: c,
                                                loading: s,
                                                onClick: () => w(),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("aside", {
                    className: dU.pA,
                    hidden: !ey,
                    "aria-label": ed.intl.string(ec.default.dWgSAa),
                    children: [
                        (0, r.jsxs)("div", {
                            className: dU.IR,
                            children: [
                                (0, r.jsx)(y.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: dU.RM,
                                    children: ed.intl.string(ec.default.dWgSAa),
                                }),
                                (0, r.jsxs)("div", {
                                    className: dU.Ss,
                                    children: [
                                        (0, r.jsx)(ej, { importing: z, onImport: F }),
                                        (0, r.jsx)(K.A.Icon, { icon: L.P, tooltip: eS, "aria-label": eS, onClick: eN }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsxs)(_.Ip, {
                            className: dU.xe,
                            children: [
                                (0, r.jsx)("div", {
                                    className: dU.Vw,
                                    children: (0, r.jsx)(R.l, {
                                        selectionMode: "single",
                                        label: ed.intl.string(ec.default.U6TqU9),
                                        hideLabel: !0,
                                        options: B,
                                        value: U,
                                        onSelectionChange: q,
                                    }),
                                }),
                                (0, r.jsx)(y.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: dU.wE,
                                    children: ed.intl.string(ec.default.JQpNkh),
                                }),
                                ("unattempted" === eu || "loading" === eu) && 0 === J.length
                                    ? (0, r.jsx)("div", { className: dU.E8, children: (0, r.jsx)(A.y, {}) })
                                    : "error" === eu && 0 === J.length
                                      ? (0, r.jsxs)("div", {
                                            className: dU.E8,
                                            children: [
                                                (0, r.jsx)(y.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: dU.JS,
                                                    children: ed.intl.string(ec.default.DJAPMO),
                                                }),
                                                (0, r.jsx)(S.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: ed.intl.string(ec.default["WFJ/vb"]),
                                                    onClick: () => (0, eC.hF)(eo),
                                                }),
                                            ],
                                        })
                                      : 0 === J.length
                                        ? (0, r.jsx)("div", {
                                              className: dU.D1,
                                              children: (0, r.jsxs)("div", {
                                                  className: dU.ST,
                                                  children: [
                                                      (0, r.jsx)(D.D, { size: "lg", color: $.A.colors.TEXT_SUBTLE }),
                                                      (0, r.jsx)(y.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: dU.sI,
                                                          children: ed.intl.string(ec.default["9/5sLV"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, r.jsx)("div", {
                                              className: dU.Dq,
                                              children: J.map((e) =>
                                                  (0, r.jsx)(
                                                      dW,
                                                      {
                                                          project: e,
                                                          guildId: a,
                                                          onSelect: () => Q(e),
                                                          onRemix: () => (0, l2.A)(e, a),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          }),
                                W.length > 0
                                    ? (0, r.jsxs)("div", {
                                          className: dU.qx,
                                          children: [
                                              (0, r.jsxs)("div", {
                                                  className: dU.uc,
                                                  children: [
                                                      (0, r.jsx)(y.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-strong",
                                                          children: ed.intl.string(ec.default["wFi8+o"]),
                                                      }),
                                                      (0, r.jsx)(y.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          children: ed.intl.string(ec.default.dQ3U1J),
                                                      }),
                                                  ],
                                              }),
                                              (0, r.jsx)("div", {
                                                  className: dU.Dq,
                                                  children: W.map((e) =>
                                                      (0, r.jsx)(
                                                          dW,
                                                          {
                                                              project: e,
                                                              guildId: a,
                                                              onSelect: () => Q(e),
                                                              onRemix: () => (0, l2.A)(e, a),
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
function dQ(e) {
    let t,
        { guildId: l, projectId: n } = e,
        a = (0, m.yK)([eE.Ay], () => eE.Ay.getOwnedProjects()),
        s = (0, m.yK)([Q.Ay], () => Q.Ay.getSelfMember(l)?.roles ?? [], [l]),
        o = (0, m.bG)(
            [Y.A, Z.A],
            () => {
                let e = Y.A.getGuild(l);
                return null != e && Z.A.can(eb.xBc.MANAGE_GUILD, e);
            },
            [l],
        ),
        [u, c] = i.useState(""),
        d = n ?? null,
        [f, h] = i.useState(!1),
        [g, x] = i.useState(null),
        p = (0, t3.z9)("VibegrationsScreen"),
        [y, k] = i.useState(null),
        w = (0, z.o)().get(tX.f_) === eK;
    i.useEffect(() => {
        k(null);
    }, [l, w]);
    let N = i.useMemo(() => (!w && p.some((e) => e.id === l) ? l : eK), [p, l, w]),
        A = y ?? N,
        S = A === eK ? "user" : "guild",
        C = A === eK ? l : A,
        [E, I] = i.useState(null);
    (i.useEffect(() => {
        (0, eC.hF)(l);
    }, [l, s, o]),
        i.useEffect(() => {
            (0, eC.dm)(l, d);
        }, [l, d]));
    let M = i.useCallback(
            async (e, t, l) => {
                let n = await (0, eC.gA)({ guild_id: t, install_scope: l });
                ((0, er.Hc)(n),
                    (0, er.r2)(n, E ?? ee.A4),
                    e(n),
                    (0, V.pX)(eb.BVt.CHANNEL(t, ey.VV.CONJURE, n)),
                    c(""),
                    I(null));
            },
            [E],
        ),
        T = i.useCallback(
            async (e) => {
                let t = (e ?? u).trim(),
                    l = eS({ idea: t, installScope: S, submitting: f });
                if ("idea" !== l && "submitting" !== l) {
                    (null != e && c(e), h(!0), x(null));
                    try {
                        await M((e) => (0, er.dv)(e, t), C, S);
                    } catch (e) {
                        x((0, eN.mG)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [M, S, C, u, f],
        ),
        _ = i.useCallback(
            async (e) => {
                if (!f) {
                    (h(!0), x(null));
                    try {
                        await M(
                            (t) => {
                                var l;
                                (0, er.dv)(
                                    t,
                                    ((l = e.name),
                                    ed.intl.formatToPlainString(ec.default["0PQip6"], { templateName: l })),
                                    void 0,
                                    { templateId: e.id },
                                );
                            },
                            C,
                            S,
                        );
                    } catch (e) {
                        x((0, eN.mG)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [M, S, C, f],
        ),
        P = i.useCallback(
            async (e, t) => {
                let l = await (0, eC.gA)({ guild_id: t, install_scope: "guild" });
                return ((0, er.Hc)(l), (0, er.r2)(l, E ?? ee.A4), (0, er.dv)(l, (0, l3.Wl)(e)), l);
            },
            [E],
        ),
        R = i.useCallback(async (e, t, l, n) => {
            if (eE.Ay.getProject(t)?.guild_id !== l) {
                let e = await (0, eC.M7)(t, { guild_id: l, preview_guild_id: l });
                if (!e.ok) throw new eN.DS((0, eN.hj)(e), e.status);
            }
            ((0, er.dv)(t, n, void 0, { templateId: e.id }), (0, V.pX)(eb.BVt.CHANNEL(l, ey.VV.CONJURE, t)), I(null));
        }, []),
        L = i.useCallback((e) => {
            (0, eC.xx)(e).catch(() => void 0);
        }, []),
        D = i.useCallback(
            (e) => {
                let t = eE.Ay.getProject(e)?.guild_id ?? l;
                ((0, V.pX)(eb.BVt.CHANNEL(t, ey.VV.CONJURE, e)), I(null));
            },
            [l],
        ),
        [$, F] = i.useState(!1),
        O = i.useCallback(
            async (e, t) => {
                let n = ef(e);
                if (null != n) return void (0, v.P)((0, j.o)(n, b.Ck.FAILURE));
                F(!0);
                let a = null;
                try {
                    ((a = await (0, eC.gA)({ guild_id: l, install_scope: t })),
                        (0, er.Hc)(a),
                        (0, er.r2)(a, E ?? ee.A4),
                        await em(a, e, ed.intl.string(ec.default["LUc7/5"])),
                        (0, V.pX)(eb.BVt.CHANNEL(l, ey.VV.CONJURE, a)),
                        I(null));
                } catch {
                    (null != a && (await (0, eC.xx)(a).catch(() => void 0)),
                        (0, v.P)((0, j.o)(ed.intl.string(ec.default["Q+l4Hv"]), b.Ck.FAILURE)));
                } finally {
                    F(!1);
                }
            },
            [l, E],
        ),
        G = i.useCallback(
            (e) => {
                (0, V.pX)(eb.BVt.CHANNEL(l, ey.VV.CONJURE, e));
            },
            [l],
        ),
        U = i.useCallback(() => {
            (0, V.pX)(eb.BVt.CHANNEL(l, ey.VV.CONJURE));
        }, [l]),
        q = i.useCallback((e) => {
            (c(e), x(null));
        }, []),
        H = (0, m.bG)(
            [eE.Ay],
            () => {
                if (null == d) return null;
                let e = eE.Ay.getProject(d);
                return null == e || (0, eE.PV)(e) || e.guild_id === l ? e : null;
            },
            [d, l],
        ),
        B = (0, m.bG)([eE.Ay], () => eE.Ay.hasFetchedGuildProjects(l), [l]);
    return null != d
        ? (0, r.jsx)(dX, { project: H, projectsLoaded: B, onBack: U, guildId: l }, d)
        : (0, r.jsx)(dJ, {
              projects: a,
              modelSettings: E,
              onModelSettingsChange: I,
              idea: u,
              guildId: l,
              submitting: f,
              createError: g,
              createDisabled: "idea" === (t = eS({ idea: u, installScope: S, submitting: f })) || "submitting" === t,
              onSelectProject: G,
              onIdeaChange: q,
              onCreate: T,
              onCreateFromTemplate: _,
              onStartTemplate: P,
              onSubmitTemplate: R,
              onCancelTemplate: L,
              onSkipTemplate: D,
              onImportNewProject: O,
              importing: $,
              conjureTarget: A,
              onConjureTargetChange: k,
              eligibleGuilds: p,
          });
}
