(n.r(t), n.d(t, { default: () => dy }), n(321073));
var l,
    r,
    a = n(477900),
    i = n(582128),
    s = n(503698),
    u = n.n(s),
    o = n(536637),
    c = n.n(o),
    d = n(17928),
    f = n(314116),
    m = n(534890),
    h = n(646270),
    g = n(31300),
    p = n(831453),
    x = n(858899),
    v = n(834730),
    j = n(939249),
    b = n(866665),
    y = n(140735),
    k = n(289873),
    w = n(821609),
    A = n(604525),
    N = n(92446),
    S = n(625903),
    C = n(297264),
    E = n(97893),
    I = n(364522),
    M = n(103557),
    _ = n(691885),
    T = n(789645),
    P = n(152367),
    R = n(661531),
    L = n(442433),
    D = n(458518),
    $ = n(627363),
    O = n(47167),
    z = n(713654),
    F = n(625180),
    G = n(672929),
    q = n(742589),
    U = n(976860),
    B = n(402860),
    H = n(734057),
    K = n(696451),
    V = n(71393),
    W = n(576705),
    X = n(164892),
    J = n(922016),
    Y = n(980707),
    Q = n(477782),
    Z = n(81369),
    ee = n(712808);
(n(323874), n(14289), n(35956));
var et = n(77729),
    en = n(723702),
    el = n(264572).Buffer;
async function er(e, t) {
    if (en.isPlatformEmbedded) {
        let n = el.from(await e.arrayBuffer());
        if ("function" == typeof et.A.fileManager.saveWithDialog2) await et.A.fileManager.saveWithDialog2(n, t);
        else
            try {
                await et.A.fileManager.saveWithDialog(n, t);
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
var ea = n(248675),
    ei = n(660183);
async function es(e, t, n) {
    (0, ee.Hc)(e);
    let l = await (0, ee.vX)(e, t);
    (0, ee.dv)(e, n, [l]);
}
function eu(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, X.Oq)(e.size, t)
        ? null
        : ei.intl.formatToPlainString(ea.default.ThxcOX, { size: (0, X.sM)((0, X.Ju)(t)) });
}
async function eo(e, t) {
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
        r = await (0, ee.cS)(e, l);
    await er(r, l);
}
function ec(e) {
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
var ed = n(950305),
    ef = n(664121);
let em = [
    { value: "user", icon: ed.UserIcon, nameMessage: ea.default.s1TsXl },
    { value: "guild", icon: ef.R, nameMessage: ea.default.LlLIJw },
];
function eh(e) {
    let { importing: t, onImport: n } = e,
        l = i.useRef(null),
        r = ec(i.useCallback((e) => n(e, "user"), [n])),
        s = ec(i.useCallback((e) => n(e, "guild"), [n])),
        u = { user: r.open, guild: s.open };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(J.Y, {
                targetElementRef: l,
                position: "bottom",
                align: "right",
                animation: J.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, a.jsx)(Y.W, {
                        "data-menu-migrated": !0,
                        navId: "conjure-import-scope",
                        "aria-label": ei.intl.string(ea.default.soVyD1),
                        onClose: t,
                        onSelect: t,
                        children: (0, a.jsx)(Q.rX, {
                            label: ei.intl.string(ea.default.NyVn6T),
                            children: em
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: ei.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, a.jsx)(
                                        Q.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: u[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, n) => {
                    let { isShown: r } = n;
                    return (0, a.jsx)(w.$, {
                        ...e,
                        buttonRef: l,
                        variant: "secondary",
                        size: "sm",
                        icon: Z.H,
                        text: ei.intl.string(ea.default.NJGZA3),
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
var eg = n(652215),
    ep = n(746080),
    ex = n(245179),
    ev = n(639519),
    ej = n(361504);
function eb(e) {
    let { idea: t, installScope: n, submitting: l } = e;
    return l ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
}
var ey = n(371169),
    ek = n(42766);
function ew(e) {
    let { className: t, ariaLabel: n, disabled: l, onClick: r, children: i } = e;
    return (0, a.jsx)(j.D, { "aria-disabled": l, "aria-label": n, className: t, onClick: l ? void 0 : r, children: i });
}
var eA = n(865665),
    eN = n(373913);
let eS = { x: 5, y: 7 },
    eC = { x: 5, y: 4 };
function eE(e) {
    let { listClassName: t, radius: n, children: l } = e,
        [r, s] = i.useState(!1);
    return (0, a.jsxs)("div", {
        className: eN.n,
        onMouseEnter: () => s(!0),
        onMouseLeave: () => s(!1),
        children: [
            (0, a.jsx)("ol", { className: t, children: l }),
            r ? (0, a.jsx)(eA.C, { area: 64, radius: n, color: R.A.colors.TEXT_BRAND }) : null,
        ],
    });
}
var eI = n(864970),
    eM = n(707554),
    e_ = n(770178),
    eT = n(765548),
    eP = n(595528),
    eR = n(885576),
    eL = n(662429);
let eD = "heading-xxl/semibold",
    e$ = !1;
function eO() {
    let e = i.useRef(null),
        [t, n] = i.useState(!0),
        l = (0, eT.A)((e) => {
            n(e.target.clientWidth >= 500);
        }),
        r = (0, e_.w)(l, [], { fireOnMount: !0 }),
        s = (0, d.bG)([eP.A], () => eP.A.isConnected());
    i.useEffect(() => {
        if (!s || !t || e$) return;
        let n = !1,
            l = 0;
        function r() {
            n ||
                (l = window.setTimeout(() => {
                    ((e$ = !0), e.current?.play());
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
    let u = (0, d.bG)([eR.A], () => eR.A.isIdle()),
        o = i.useRef(u);
    i.useEffect(() => {
        let t = o.current && !u;
        ((o.current = u), t && e$ && (e.current?.stop(), e.current?.play()));
    }, [u]);
    let c = ei.intl.string(ea.default["+5XyCR"]);
    return (0, a.jsx)("div", {
        ref: r,
        className: eL.x,
        children: t
            ? (0, a.jsx)(eM.H, { children: (0, a.jsx)(eI.o, { ref: e, text: c, variant: eD, delay: null }) })
            : (0, a.jsx)(C.D, { variant: eD, children: c }),
    });
}
var ez = n(548118);
let eF = "user";
var eG = n(885386),
    eq = n(540999);
let eU = Object.freeze({ x: 0.5, y: 0.5 });
function eB(e) {
    return "" !== e.trim();
}
function eH(e) {
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
function eK(e) {
    let { kind: t, name: n } = eH(e);
    return [t, n].filter((e) => "" !== e).join(" ");
}
function eV(e) {
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
let eW = "[vibegrations:selected] ",
    eX = " \u2014 ";
function eJ(e) {
    if (!e.startsWith(eW)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        r = n.slice(eW.length),
        a = r.indexOf(eX),
        i = (-1 === a ? r : r.slice(0, a)).trim();
    return "" === i ? null : { label: i, body: l };
}
let eY = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    eQ = new Map(),
    eZ = new Set();
function e0(e) {
    return eQ.get(e) ?? eY;
}
function e1(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? eQ.set(e, t) : eQ.delete(e), [...eZ]))
        try {
            n();
        } catch (e) {
            console.error("[vibegrations] design feedback subscriber threw", e);
        }
}
function e2(e) {
    eQ.has(e) && e1(e, eY);
}
function e3(e, t) {
    let n = e0(e);
    n.active && e1(e, { ...n, context: t });
}
function e4(e, t) {
    return null != t && e.authorId === t;
}
function e6(e) {
    return (
        eZ.add(e),
        () => {
            eZ.delete(e);
        }
    );
}
function e7(e) {
    let t = i.useCallback(() => (null == e ? eY : e0(e)), [e]);
    return i.useSyncExternalStore(e6, t, t);
}
var e5 = n(192308),
    e8 = n(855793),
    e9 = n(128761),
    te = n(967008),
    tt = n(900797),
    tn = n(320448),
    tl = n(783977),
    tr = n(344587),
    ta = n(534554),
    ti = n(837984),
    ts = n(359589),
    tu = n(254575);
function to(e) {
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
function tc(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: s, placement: o, open: c, entered: d } = e,
        [f, m] = i.useState(!1),
        h = to(f),
        g = X.PY.indexOf(t.tier),
        p = f ? tt.t : tn._,
        x = X.PY.map(ta.D0),
        j = (0, ta.Tc)(t.tier),
        { text: b, phase: y } = (0, tr.Q)(j);
    return (0, a.jsx)("div", {
        className: tu.qd,
        "data-placement": o ?? void 0,
        children: (0, a.jsxs)("div", {
            className: u()(tu.t$, { [tu.Zr]: c && d, [tu.GF]: !c }),
            role: "dialog",
            "aria-label": ei.intl.string(ea.default["3E7Yc0"]),
            children: [
                h.mounted
                    ? (0, a.jsx)("div", {
                          className: u()(tu.Nr, tu.uO, { [tu.Zr]: f && h.entered, [tu.GF]: !f }),
                          children: (0, a.jsx)(ts.bR, { settings: t, tiers: n, choices: l, disabled: r, onChange: s }),
                      })
                    : null,
                (0, a.jsxs)("div", {
                    className: `${tu.Nr} ${tu.rF}`,
                    children: [
                        (0, a.jsxs)("div", {
                            className: tu.wx,
                            children: [
                                (0, a.jsxs)("button", {
                                    type: "button",
                                    className: tu.y6,
                                    "aria-expanded": f,
                                    "aria-label": ei.intl.string(ea.default.eGqPbV),
                                    onClick: () => m((e) => !e),
                                    children: [
                                        (0, a.jsx)(v.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: ei.intl.string(ea.default.aBPQxX),
                                        }),
                                        (0, a.jsx)(p, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: tu.vg,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(v.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: u()(tu.Z, { [tu.xQ]: "exit" === y, [tu.lm]: "enter" === y }),
                                    children: b,
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: tu.hs,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: tu.Nb,
                                    children: [
                                        (0, a.jsx)(v.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: ei.intl.string(ea.default["/tlOR5"]),
                                        }),
                                        (0, a.jsx)(v.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: ei.intl.string(ea.default.FxoUwB),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(ti.A, {
                                    activeIndex: g,
                                    stops: x,
                                    ariaLabel: ei.intl.string(ea.default.aBPQxX),
                                    disabled: r,
                                    onSelect: function (e) {
                                        let n = X.PY[e];
                                        null != n && n !== t.tier && s((0, ta.CM)((0, ta.j6)(t, n)));
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
function td(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: s, className: u, icon: o } = e,
        c = i.useRef(null),
        [d, f] = (0, ts.FT)(t, s),
        [m, h] = i.useState(!1),
        { mounted: g, entered: p } = to(m);
    return (0, a.jsx)(J.Y, {
        targetElementRef: c,
        position: "top",
        align: "right",
        shouldShow: g,
        onRequestClose: () => h(!1),
        animation: J.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, a.jsx)(tc, {
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
            return (0, a.jsx)(b.m, {
                text: ei.intl.string(ea.default["k2JN/p"]),
                shouldShow: !n,
                ariaHidden: !0,
                children: (0, a.jsx)(j.D, {
                    innerRef: c,
                    className: u ?? tu.hZ,
                    "aria-label": ei.intl.string(ea.default["k2JN/p"]),
                    ...e,
                    onClick: () => h((e) => !e),
                    "aria-expanded": m,
                    children: o ?? (0, a.jsx)(tl.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
var tf = n(111534);
let tm = { width: 320, height: 240 };
var th = n(573083),
    tg = n(855859),
    tp = n(238490),
    tx = n(754027),
    tv = n(696645);
function tj(e) {
    return "frame" === e.mode ? `frame-${e.surface}` : e.mode;
}
function tb(e) {
    switch (e.mode) {
        case "frame":
            return (0, tv.XV)(e.surface);
        case "widget":
            return ei.intl.string(ea.default.y5GiL1);
        case "overlay":
            return ei.intl.string(ea.default["2940LX"]);
        case "bot":
            return ei.intl.string(ea.default.tjpaGN);
    }
}
var ty = n(598748),
    tk = n(294323),
    tw = n(457827),
    tA = n(25451),
    tN = n(280450),
    tS = n(373677),
    tC = n(86147),
    tE = n(729475),
    tI = n(91242),
    tM = n(869146),
    t_ = n(475815),
    tT = n(621466);
function tP(e) {
    return null == e ? null : document.querySelector(`[data-frame-id="${CSS.escape(e)}"]`);
}
function tR(e) {
    let t, n;
    return (
        null != e &&
        ((n =
            (t = document).fullscreenElement ??
            t.webkitFullscreenElement ??
            t.mozFullScreenElement ??
            t.msFullscreenElement ??
            null),
        ((0, tT.vq)(n, Element) ? n.getAttribute("data-frame-id") : null) === e)
    );
}
function tL(e) {
    return (0, t_.a3)(document, e);
}
function tD(e) {
    return i.useSyncExternalStore(tL, () => tR(e));
}
var t$ = n(165610);
function tO(e) {
    let { frame: t, controlProjectId: n } = e,
        l = tD(t?.id ?? null),
        r = (0, th.Zv)(n),
        i = (0, d.bG)(
            [tM.A, tI.A],
            () => null != t && tM.A.getWindowOpen(eg.MLl.ACTIVITY_POPOUT) && tI.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, t$.x1)(t) || i || r) return null;
    let s = tP(t.id);
    if (null == s || !(0, t_.Ub)(s)) return null;
    let u = ei.intl.string(l ? ei.t.Z7MyNB : ei.t.OIDkcp);
    return (0, a.jsx)(q.A.Icon, {
        tooltip: u,
        icon: l ? tC.z : tE.T,
        "aria-label": u,
        role: "switch",
        "aria-checked": l,
        selected: l,
        onClick: () => {
            var e;
            let n;
            null != (n = tP((e = t.id))) && (0, t_.Ub)(n) && (tR(e) ? (0, t_.sP)(n) : (0, t_.tl)(n));
        },
    });
}
var tz = n(559106),
    tF = n(847374),
    tG = n(704745);
function tq(e) {
    let { targets: t, target: n, onChange: l } = e,
        [r, s] = i.useState(!1),
        u = null != n && t.length > 1;
    r && !u && s(!1);
    let o = i.useCallback(() => s(!1), []),
        c = i.useCallback(() => s((e) => !e), []),
        d = i.useRef(null);
    if (!u) return null;
    let f = ei.intl.string(ea.default.I2ucou);
    return (0, a.jsx)(J.Y, {
        targetElementRef: d,
        shouldShow: r,
        onRequestClose: o,
        position: "bottom",
        align: "right",
        animation: J.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, a.jsx)(Y.W, {
                "data-menu-migrated": !0,
                navId: "conjure-preview-target",
                "aria-label": f,
                onClose: r,
                onSelect: r,
                children: (0, a.jsx)(Q.rX, {
                    label: f,
                    children: t.map((e) => {
                        let t = tj(e);
                        return (0, a.jsx)(
                            Q.iD,
                            {
                                id: `preview-target-${t}`,
                                group: "conjure-preview-target",
                                label: tb(e),
                                checked: t === tj(n),
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
            return (0, a.jsx)(tz.vN, {
                children: (0, a.jsxs)("button", {
                    ...r,
                    ref: d,
                    type: "button",
                    className: tG.h,
                    "aria-haspopup": "menu",
                    "aria-expanded": i,
                    onClick: c,
                    children: [
                        (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: ei.intl.string(ea.default["N+VA1J"]),
                        }),
                        (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-sm/medium",
                            color: "none",
                            lineClamp: 1,
                            children: tb(n),
                        }),
                        (0, a.jsx)(tF.a, { size: "xs", color: "currentColor" }),
                    ],
                }),
            });
        },
    });
}
var tU = n(226178),
    tB = n(434279),
    tH = n(941985),
    tK = n(287809),
    tV = n(427262),
    tW = n(803306);
let tX = new Set(),
    tJ = new Map();
function tY(e, t, n) {
    return null == e ? (n ?? null) : (t ?? null);
}
function tQ(e) {
    if (null == e || tX.has(e) || null != tK.default.getUser(e)) return;
    let t = tJ.get(e) ?? 0;
    t >= 3 ||
        (tJ.set(e, t + 1),
        tX.add(e),
        tW
            .wz(e)
            .finally(() => tX.delete(e))
            .catch(() => {}));
}
var tZ = n(16619),
    t0 = n(782603),
    t1 = n(780338),
    t2 = n(663417),
    t3 = n(70688),
    t4 = n(173936),
    t6 = n(473935),
    t7 = n(408278),
    t5 = n(365199),
    t8 = n(7437),
    t9 = n(147036),
    ne = n(957565),
    nt = n(785389),
    nn = n(123917);
let nl = new Set();
var nr = n(289106),
    na = n(616334),
    ni = n(189714),
    ns = n(733791),
    nu = n(189213),
    no = n(331322),
    nc = n(706935);
function nd(e) {
    let { project: t, target: n, action: l, ...r } = e,
        [s, u] = i.useState(n.canRemovePreviewBot),
        [o, c] = i.useState(!1),
        [d, f] = i.useState(null),
        m = "delete" === l,
        h = m ? (0, ns.fI)(n) : (0, ns.Kd)(n),
        g = m ? null : (0, ns.L4)(n),
        p = (0, ns.Mi)(n),
        j = m
            ? ei.intl.formatToPlainString(ea.default.CJBhb2, { name: n.projectName })
            : ei.intl.formatToPlainString(ea.default.x6FvsZ, { app: n.appName });
    async function b() {
        (c(!0), f(null));
        let e = m ? (0, ey.xx)(t.id) : (0, ey.YI)(t.id, { alsoRemovePreviewBot: s }),
            l = await e.catch(() => null);
        (c(!1), l?.ok !== !0)
            ? f(ei.intl.string(m ? ea.default["0XDHob"] : ea.default.PJ2Fkn))
            : (m || (0, x.P0)({ text: (0, ns.p_)(n), variant: "success" }), r.onClose());
    }
    return (0, a.jsx)(nu.a, {
        ...r,
        role: "alertdialog",
        title: m ? j : (0, ns.WX)((0, nc.tb)(ea.default.x6FvsZ, n.appName)),
        subtitle: m ? (0, ns.J)(n) : ei.intl.string(ea.default["8OKM1N"]),
        "aria-label": j,
        notice: null == d ? void 0 : { message: d, type: "critical" },
        actions: [
            { text: ei.intl.string(ei.t["ETE/oC"]), variant: "secondary", onClick: r.onClose },
            {
                text: ei.intl.string(m ? ea.default.aC42bN : ea.default.BGF8VT),
                variant: "critical-primary",
                loading: o,
                disabled: o,
                onClick: () => {
                    b().catch(() => {});
                },
            },
        ],
        children: (0, a.jsxs)(no.B, {
            gap: 12,
            children: [
                h.length > 0 || null != g
                    ? (0, a.jsx)(nc.Ay, {
                          items: h,
                          optionalItem:
                              null == g
                                  ? void 0
                                  : { item: g, checked: s, onChange: u, disabled: !n.canRemovePreviewBot },
                      })
                    : null,
                null != p ? (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: p }) : null,
            ],
        }),
    });
}
function nf(e) {
    (0, e5.openModal)((t) => (0, a.jsx)(nd, { ...t, ...e }));
}
var nm = n(552821);
let nh = [];
function ng(e) {
    (0, x.P0)({ text: e, variant: "critical" });
}
function np(e) {
    let {
            projectId: t,
            projectName: n,
            guildId: l,
            projectGuildId: r,
            isOwner: s,
            canRemix: u,
            onExport: o,
            onImport: c,
            onRemix: m,
            onConnectTool: h,
            onHistory: g,
            onRefresh: p,
            isRefreshing: v = !1,
            onClose: j,
            refreshApplicationId: b,
            previewProjectId: y,
            onCloseMenu: k,
        } = e,
        w = (0, ni.iI)(t),
        A = i.useContext(nr.bI),
        { pending: N, refresh: C } = (0, t8.A)(b ?? null),
        { pending: E, connect: I } = (function (e, t) {
            let [n, l] = i.useState(nl),
                r = i.useRef(nl),
                a = i.useCallback((e) => {
                    ((r.current = (0, nt.Q6)(r.current, e)), l(r.current));
                }, []);
            return {
                pending: n,
                connect: i.useCallback(
                    (n) => {
                        if (null == e) return;
                        let i = (0, nt.K9)(r.current, n.type);
                        async function s() {
                            let l = await (0, ee.JI)(e, n.type);
                            (a(n.type), "url" === l.type)
                                ? (0, nn.h)({ href: l.url, trusted: !1 })
                                : t(
                                      "setup" === (0, nt.rq)(l.error)
                                          ? ei.intl.string(ea.default["jCQ/1B"])
                                          : ei.intl.string(ea.default.POxkSh),
                                  );
                        }
                        null != i && ((r.current = i), l(i), s().catch(() => a(n.type)));
                    },
                    [t, e, a],
                ),
            };
        })(y ?? null, ng),
        M = (0, d.bG)([ee.Ay], () => (null == y ? nh : ee.Ay.getDeclaredConnections(y))),
        _ = i.useMemo(() => (0, nt.Xl)(M), [M]),
        T = (0, ns.Bs)(t),
        P = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: l, connectPending: r } = e,
                a = [];
            for (let { connection: e, offer: i } of (t &&
                a.push({
                    id: "preview-refresh",
                    label: ei.intl.string(ea.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            l))
                a.push(
                    "authorize" === i
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: ei.intl.formatToPlainString(ea.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: r.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: ei.intl.formatToPlainString(ea.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return a;
        })({ canRefresh: null != b, refreshPending: N, offers: _, connectPending: E }),
        R = i.useMemo(() => new Map(M.map((e) => [e.type, e])), [M]),
        L = null != m && u,
        D = s && null != c,
        $ = L || null != o || D || null != h || null != g,
        O = ne.p5 && null != l,
        z = ne.p5,
        F = w ? t0.BellIcon : t1.BellSlashIcon;
    return (0, a.jsxs)(Y.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": ei.intl.string(ei.t.ogxXGq),
        onClose: k,
        onSelect: k,
        children: [
            null != p || null != j
                ? (0, a.jsxs)(Q.rX, {
                      children: [
                          null != p
                              ? (0, a.jsx)(Q.Dr, {
                                    id: "refresh",
                                    icon: t2.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: t2.RefreshIcon },
                                    label: ei.intl.string(ea.default["p4B/7M"]),
                                    disabled: v,
                                    action: p,
                                })
                              : null,
                          null != j
                              ? (0, a.jsx)(Q.Dr, {
                                    id: "close",
                                    icon: t3.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: t3.DoorExitIcon },
                                    label: ei.intl.string(ea.default["/TlGcK"]),
                                    action: j,
                                })
                              : null,
                      ],
                  })
                : null,
            P.length > 0
                ? (0, a.jsx)(Q.rX, {
                      children: P.map((e) =>
                          (0, a.jsx)(
                              Q.Dr,
                              {
                                  id: e.id,
                                  label: e.label,
                                  disabled: e.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === e.kind) return void C();
                                      let t = null == e.connectionType ? null : R.get(e.connectionType);
                                      null != t && I(t);
                                  },
                              },
                              e.id,
                          ),
                      ),
                  })
                : null,
            (0, a.jsx)(Q.rX, {
                children: (0, a.jsx)(Q.Dr, {
                    id: "mute",
                    label: ei.intl.string(w ? ea.default.s9rCuH : ea.default["a+i/As"]),
                    icon: F,
                    leadingAccessory: { type: "icon", icon: F },
                    action: () => (0, ni.$L)(t, !w),
                }),
            }),
            $
                ? (0, a.jsxs)(Q.rX, {
                      children: [
                          L
                              ? (0, a.jsx)(Q.Dr, { id: "remix", label: ei.intl.string(ea.default.XWgAfc), action: m })
                              : null,
                          null != o
                              ? (0, a.jsx)(Q.Dr, { id: "export", label: ei.intl.string(ea.default.WsEEP7), action: o })
                              : null,
                          D
                              ? (0, a.jsx)(Q.Dr, { id: "import", label: ei.intl.string(ea.default.rWGY3e), action: c })
                              : null,
                          null != h
                              ? (0, a.jsx)(Q.Dr, {
                                    id: "connect-tool",
                                    label: ei.intl.string(ea.default.yOIql5),
                                    action: h,
                                })
                              : null,
                          null != g
                              ? (0, a.jsx)(Q.Dr, {
                                    id: "history",
                                    label: ei.intl.string(ea.default["3hIVou"]),
                                    action: g,
                                })
                              : null,
                      ],
                  })
                : null,
            z
                ? (0, a.jsxs)(Q.rX, {
                      children: [
                          O
                              ? (0, a.jsx)(Q.Dr, {
                                    id: "copy-link",
                                    label: ei.intl.string(ei.t.WqhZss),
                                    icon: t4.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: t4.LinkIcon },
                                    action: () =>
                                        (0, ne.C)((0, t9.n)(l, ep.VV.CONJURE, t), () =>
                                            (0, x.P0)({ text: ei.intl.string(ei.t["L/PwZf"]), variant: "success" }),
                                        ),
                                })
                              : null,
                          (0, a.jsx)(Q.Dr, {
                              id: "copy-project-id",
                              label: ei.intl.string(ea.default["nm/zuU"]),
                              icon: t6.L,
                              leadingAccessory: { type: "icon", icon: t6.L },
                              action: () =>
                                  (0, ne.C)(t, () =>
                                      (0, x.P0)({ text: ei.intl.string(ea.default.CmfaZG), variant: "success" }),
                                  ),
                          }),
                      ],
                  })
                : null,
            s || T?.canRemoveBot === !0
                ? (0, a.jsxs)(Q.rX, {
                      children: [
                          s
                              ? (0, a.jsx)(Q.Dr, {
                                    id: "settings",
                                    label: ei.intl.string(ea.default.FzfmQ8),
                                    icon: S.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: S.SettingsIcon },
                                    action: () =>
                                        (0, na.A)(t, {
                                            guildId: r ?? l,
                                            initialTab: "project",
                                            isPreview: !0,
                                            publishOptions: A,
                                        }),
                                })
                              : null,
                          T?.canRemoveBot === !0
                              ? (0, a.jsx)(Q.Dr, {
                                    id: "remove-from-server",
                                    label: ei.intl.formatToPlainString(ea.default["3gKG2j"], { server: T.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let e = ek.Ay.getProject(t);
                                        null != e && nf({ project: e, target: T, action: "remove" });
                                    },
                                })
                              : null,
                          s
                              ? (0, a.jsx)(Q.Dr, {
                                    id: "delete",
                                    label: ei.intl.string(ei.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let e = ek.Ay.getProject(t);
                                        if (null != e && null != T) nf({ project: e, target: T, action: "delete" });
                                        else
                                            (0, f.A)({
                                                title: ei.intl.formatToPlainString(ea.default.CJBhb2, { name: n }),
                                                subtitle: ei.intl.string(ea.default["0OmrVn"]),
                                                confirmText: ei.intl.string(ei.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, ey.K)(t, () =>
                                                        (0, x.P0)({
                                                            text: ei.intl.string(ea.default["0XDHob"]),
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
function nx(e) {
    let { trigger: t = "header", ...n } = e,
        l = i.useRef(null);
    return (0, a.jsx)(J.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: J.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(np, { ...n, onCloseMenu: t });
        },
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: i } = n;
            return (0, a.jsx)("div", {
                ref: l,
                className: nm.h,
                children:
                    "iconButton" === t
                        ? (0, a.jsx)(b.m, {
                              text: ei.intl.string(ei.t["UKOtz+"]),
                              children: (0, a.jsx)(t7.K, {
                                  icon: t5.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": ei.intl.string(ei.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": i,
                                  onClick: r,
                              }),
                          })
                        : (0, a.jsx)(q.A.Icon, {
                              icon: t5.MoreHorizontalIcon,
                              tooltip: ei.intl.string(ei.t["UKOtz+"]),
                              "aria-label": ei.intl.string(ei.t["UKOtz+"]),
                              "aria-haspopup": "menu",
                              "aria-expanded": i,
                              selected: i,
                              onClick: r,
                          }),
            });
        },
    });
}
var nv = n(497183),
    nj = n(104171),
    nb = n(286739);
function ny(e) {
    let { creator: t, className: n } = e;
    return (0, a.jsx)("div", {
        className: u()(nb.c, n),
        "aria-hidden": !0,
        children: (0, a.jsx)(nj.Ay, { users: [t.creator, ...t.collaborators], max: 3, size: nj.DN.SIZE_16 }),
    });
}
var nk = n(217846),
    nw = n(246338);
let nA = "user",
    nN = "no-server",
    nS = new Map();
function nC(e) {
    return nS.get(e) ?? null;
}
function nE(e) {
    switch (e) {
        case "all":
        case nA:
        case nN:
            return null;
        default:
            return e;
    }
}
function nI(e, t) {
    switch (t) {
        case "all":
            return !0;
        case nA:
            return "user" === e.install_scope;
        case nN:
            return null == (0, tB.wu)(e);
        default:
            return e.guild_id === t || e.preview_guild_id === t;
    }
}
var nM = n(506774);
let n_ = "VibegrationsProjectsPanelOpen";
function nT() {
    return nM.w.get(n_) ?? null;
}
function nP(e) {
    return `VibegrationsProjectsPanel:${e}`;
}
var nR = n(803101),
    nL = n(808728),
    nD = n(516288);
function n$(e) {
    let { reason: t, message: n, onConfirm: l, transitionState: r, onClose: i } = e,
        s = (0, nD.t)(t, n);
    return (0, a.jsx)(nu.a, {
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
var nO = n(951465),
    nz = n(95264),
    nF = n(952644),
    nG = n(991690),
    nq = n(58736),
    nU = n(689175),
    nB = n(683071),
    nH = n(65593),
    nK = n(115982);
function nV(e) {
    return !(0, ex.BL)(e) && !0 !== e.stopRequested;
}
var nW = n(104317),
    nX = n(643278),
    nJ = n(566424),
    nY = n(683063),
    nQ = n(138212);
function nZ(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: i, ...s } = e;
    return (0, a.jsxs)("section", {
        className: u()(nQ.Nr, r),
        ...s,
        children: [
            (0, a.jsxs)("header", {
                className: u()(nQ.wx, null != n && nQ.o5, i),
                children: [
                    (0, a.jsx)(v.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var n0 = n(148590);
function n1(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function n2(e) {
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
        b = h ? tF.a : tn._,
        y = null != n || l;
    return (0, a.jsxs)(nZ, {
        ...f,
        title: t,
        trailing: y
            ? (0, a.jsxs)("span", {
                  className: n0.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(j.D, {
                                className: n0.L$,
                                onClick: v,
                                "aria-expanded": h,
                                "aria-controls": m,
                                "aria-label": h ? s : r,
                                children: (0, a.jsx)(b, { size: "xs", color: "currentColor" }),
                            })
                          : null,
                  ],
              })
            : void 0,
        headerClassName: h ? void 0 : n0.RG,
        "data-superseded": l ? "true" : void 0,
        children: [c, (0, a.jsx)("div", { id: m, className: u()(n0.rf, o), hidden: !h, children: d })],
    });
}
var n3 = n(883646);
let n4 = [];
function n6(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: u()(n3.xL, {
            [n3.Vb]: "in_progress" === t,
            [n3.cT]: "completed" === t,
            [n3.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return ei.intl.string(ea.default.KvBdun);
                case "in_progress":
                    return ei.intl.string(ea.default["m5G9+S"]);
                case "unfinished":
                    return ei.intl.string(ea.default.lRpwhD);
                default:
                    return ei.intl.string(ea.default.sPGeWi);
            }
        })(t),
        children: [
            (0, a.jsx)(k.y, {
                type: k.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: n3.Qd,
                itemClassName: n3.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: n3.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: n3.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function n7(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : n4), [n, t]),
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
        className: n3.X6,
        "data-shown": n && f ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    nY.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: n3.MA,
                            "data-leaving": r.has(t) ? void 0 : "true",
                            children: (0, a.jsx)(s, { size: 16, alt: l, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            p > 0
                ? (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: n3.qA,
                      children: `+${p}`,
                  })
                : null,
        ],
    });
}
function n5(e) {
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
            ((t = (r ?? n4).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            i.useMemo(() => {
                let e = new Map();
                for (let t of r ?? n4) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let n = e.get(t.todoId);
                    null != n ? n.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, a.jsxs)("ul", {
        className: n3.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: u()(n3.AS, { [n3.J1]: "completed" === n }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(n6, { status: n }),
                            (0, a.jsx)(v.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: n3.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: n3.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(n7, { agents: c.get(e.id) ?? n4, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: n3.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(n6, { status: "pending" }),
                          (0, a.jsx)(v.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: n3.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: n3.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function n8(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: u, total: o } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === o) return null;
    let c = ei.intl.formatToPlainString(ea.default["P/I+JW"], { completed: u, total: o }),
        d = ei.intl.formatToPlainString(ea.default["7tzwKB"], { completed: u, total: o });
    return (0, a.jsx)(n2, {
        title: ei.intl.string(ea.default.RtzECX),
        meta: (0, a.jsx)(n1, { children: c }),
        superseded: s,
        showLabel: ei.intl.string(ea.default.RKyN9q),
        hideLabel: ei.intl.string(ea.default.xydHoj),
        className: n3.Nr,
        bodyClassName: n3.rf,
        beforeBody: r && !s ? (0, a.jsx)(y.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(n5, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var n9 = n(308665),
    le = n(59678),
    lt = n(903847);
function ln(e) {
    let { line: t, placement: n, todos: l, todosLive: r = !0, provisionalTodo: s, agents: o, onJumpToActivity: c } = e,
        d = null != n,
        [f, m] = i.useState(n ?? "top"),
        [h, g] = i.useState(d),
        [p, x] = i.useState(!1),
        [v, y] = i.useState(!1),
        [k, w] = i.useState(d);
    (k !== d && (w(d), null != n ? (m(n), g(!0)) : (x(!1), y(!1))),
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
        _ = i.useCallback(() => y((e) => !e), []);
    return h
        ? (0, a.jsxs)("div", {
              className: lt.qd,
              "data-placement": f,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: u()(lt.vK, { [lt.ho]: p && d, [lt.ET]: !d }),
                      children: [
                          null == c
                              ? (0, a.jsx)("ol", {
                                    className: u()(lt.Rk, le.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(nJ.A, {
                                        glyph: (0, a.jsx)(n9.Ay, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(j.D, {
                                    className: lt.pZ,
                                    onClick: c,
                                    "aria-label": ei.intl.string(ea.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: u()(lt.Rk, le.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(nJ.A, {
                                            glyph: (0, a.jsx)(n9.Ay, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          M
                              ? (0, a.jsx)(b.m, {
                                    text: ei.intl.string(ea.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(j.D, {
                                        className: lt.BO,
                                        onClick: _,
                                        "aria-expanded": v,
                                        "aria-label": ei.intl.string(ea.default.RtzECX),
                                        children: (0, a.jsx)(nX.ClipboardListIcon, {
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
                            className: u()(lt.vB, { [lt.pg]: v && S, [lt.ui]: !v }),
                            children: (0, a.jsx)(n8, {
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
var ll = n(658675),
    lr = n(22231),
    la = n(826745),
    li = n(123292);
let ls = {
        [eg.rbe.GUILD_TEXT]: "text",
        [eg.rbe.GUILD_VOICE]: "voice",
        [eg.rbe.GUILD_ANNOUNCEMENT]: "announcement",
        [eg.rbe.GUILD_STAGE_VOICE]: "stage",
        [eg.rbe.GUILD_FORUM]: "forum",
        [eg.rbe.GUILD_MEDIA]: "media",
    },
    lu = { channel: "#", role: "@", user: "@" },
    lo = {
        channel: [ea.default["9+dfPT"], ea.default.pGSJqE],
        role: [ea.default["2VkCoD"], ea.default.c8YlX8],
        user: [ea.default.GZIAxl, ea.default["4bptbQ"]],
    };
function lc(e, t) {
    return ei.intl.string(lo[e][+!!t]);
}
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
            onBlur: u,
            options: o,
            placeholder: c,
            onQueryChange: d,
            matchSorterOptions: f,
        } = e,
        m = !0 === n.multi_select,
        h = l.map((e) => e.id);
    function g(e) {
        var t, r;
        return (
            (t = n.input ?? "channel"),
            (r = (e) => o.find((t) => t.value === e)?.label),
            e.slice(0, 10).map((e) => ({
                id: e,
                name: r(e) ?? l.find((t) => t.id === e)?.name ?? e,
                ...(function (e, t) {
                    if ("channel" === e) {
                        var n;
                        let l = null == (n = H.A.getChannel(t)?.type) ? void 0 : ls[n];
                        return { kind: e, ...(null == l ? {} : { channel_type: l }) };
                    }
                    if ("user" === e) {
                        let n = tK.default.getUser(t)?.username;
                        return { kind: e, ...(null == n ? {} : { username: n }) };
                    }
                    return { kind: e };
                })(t, e),
            }))
        );
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
function lk(e) {
    let { guildId: t, fallback: n, ...l } = e,
        r = (0, lp.A)(t, l.question.channel_filter);
    return null == r
        ? n
        : (0, a.jsx)(ly, { ...l, guildId: t, options: r, placeholder: lc("channel", !0 === l.question.multi_select) });
}
function lw(e) {
    let { guildId: t, ...n } = e,
        l = (0, lv.A)(t);
    return (0, a.jsx)(ly, { ...n, guildId: t, options: l, placeholder: lc("role", !0 === n.question.multi_select) });
}
function lA(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: i } = (0, lx.A)(t);
    return (0, a.jsx)(ly, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: i,
        placeholder: lc("user", !0 === n.question.multi_select),
    });
}
function lN(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, lj.Tj)(t, !0);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, a.jsx)(lk, { guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, a.jsx)(lw, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, a.jsx)(lA, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var lS = n(87221),
    lC = n(144228),
    lE = n(241326),
    lI = n(26430),
    lM = n(750943),
    l_ = n(95477),
    lT = n(256905),
    lP = n(73153),
    lR = n(839214);
let lL = [],
    lD = 1,
    l$ = (0, lR.D)(() => ({ draftsByProject: {} }));
function lO(e, t, n) {
    return e.draftsByProject[t]?.[n] ?? lL;
}
function lz(e, t) {
    return lO(l$.getState(), e, t);
}
function lF(e, t, n) {
    let { draftsByProject: l } = l$.getState();
    l$.setState({ draftsByProject: { ...l, [e]: { ...l[e], [t]: n } } });
}
function lG(e, t, n, l) {
    let r = lz(e, t);
    return (
        !!r.some((e) => e.localId === n) &&
        (lF(
            e,
            t,
            r.map((e) => (e.localId === n ? { ...e, ...l } : e)),
        ),
        !0)
    );
}
function lq(e, t) {
    (0, ee.Vm)(e, t).catch((e) => {
        console.error("[vibegrations] attachment cleanup failed", e);
    });
}
function lU(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && lq(e, t.ref.id));
}
function lB(e, t) {
    let { deleteFromWorker: n } = t,
        { draftsByProject: l } = l$.getState(),
        r = l[e];
    if (null == r) return;
    for (let t of Object.values(r))
        for (let l of t ?? lL) n ? lU(e, l) : null != l.previewUrl && URL.revokeObjectURL(l.previewUrl);
    let { [e]: a, ...i } = l;
    l$.setState({ draftsByProject: i });
}
function lH(e) {
    return ei.intl.formatToPlainString(ea.default.JZ59Bo, { size: (0, X.sM)((0, X.Ju)(e)) });
}
function lK(e, t) {
    let n = lz(e, t);
    if (0 !== n.length) {
        for (let t of n) lU(e, t);
        lF(e, t, lL);
    }
}
function lV(e, t) {
    let n = lz(e, t);
    if (0 === n.length) return [];
    for (let e of n) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (lF(e, t, lL), n.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function lW(e, t) {
    let { clarificationAnswers: n, attachments: l = [] } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = lz(e, "chat"),
        a = r.length > 0 && r.every((e) => "ready" === e.status) ? lV(e, "chat") : [];
    (0, ee.dv)(e, t, [...l, ...a], { clarificationAnswers: n });
}
function lX(e, t) {
    let [n, l] = i.useState(null),
        [r, a] = i.useState(!1),
        [s, u] = i.useState(0);
    return (
        i.useEffect(() => {
            let n = !1;
            return (
                (0, ee.PK)(e, t).then(
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
                    (0, ee.n6)(e, t).then(
                        (e) => {
                            e && 0 === s ? u(1) : a(!0);
                        },
                        () => a(!0),
                    ));
            }, [e, t, s]),
        }
    );
}
(lP.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(l$.getState().draftsByProject)) lB(e, { deleteFromWorker: !0 });
}),
    lP.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        lB(t, { deleteFromWorker: !1 });
    }));
var lJ = n(907702);
function lY(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: o, handleError: c } = lX(t, n),
        [d, f] = i.useState(null),
        m = null != s && d === s;
    return o
        ? (0, a.jsxs)("span", {
              className: u()(lJ.Gt, lJ.b6),
              children: [
                  (0, a.jsx)(lS.D, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: ei.intl.string(ea.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: u()(lJ.Gt, { [lJ.iP]: !m }),
              children:
                  null != s
                      ? (0, a.jsx)("img", {
                            src: s,
                            alt: l,
                            className: lJ.Sl,
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
function lQ(e) {
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
        x = ei.intl.formatToPlainString(ea.default.JGjZMs, { answer: r.label });
    return (0, a.jsxs)("div", {
        className: u()(lJ.Vs, { [lJ.Q9]: s, [lJ.RX]: o }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, a.jsxs)(j.D, {
                className: lJ.Up,
                "data-conjure-image-option-pick": !0,
                onClick: o ? void 0 : () => f(r),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), h(r, t));
                },
                role: i ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": ei.intl.formatToPlainString(ea.default.AQbxhf, { answer: r.label }),
                "aria-disabled": o,
                tabIndex: c && d ? 0 : -1,
                children: [
                    (0, a.jsxs)("span", {
                        className: lJ.$_,
                        children: [
                            null != r.image
                                ? (0, a.jsx)(lY, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: g,
                                  })
                                : (0, a.jsx)("span", { className: lJ.Gt }),
                            (0, a.jsx)("span", {
                                className: lJ.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, a.jsx)(ll.P, { checked: s, disabled: o })
                                    : (0, a.jsx)(lC.T, { checked: s, disabled: o }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: lJ.pG,
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
                      className: lJ.B4,
                      children: (0, a.jsx)(b.m, {
                          text: ei.intl.string(ea.default.HQEXJM),
                          children: (0, a.jsx)(t7.K, {
                              icon: lE.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: p,
                              disabled: o,
                              "aria-label": ei.intl.string(ea.default.HQEXJM),
                              tabIndex: c ? 0 : -1,
                          }),
                      }),
                  })
                : null != r.image
                  ? (0, a.jsx)("span", {
                        className: lJ.B4,
                        children: (0, a.jsx)(b.m, {
                            text: ei.intl.string(ea.default["4/eeDD"]),
                            children: (0, a.jsx)(t7.K, {
                                icon: lI._,
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
function lZ(e) {
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
                    Promise.all(t.map((e) => (0, ee.PK)(n, e.image.attachment_id))).then(
                        (e) => {
                            (0, lT.R)({
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
                      label: ei.intl.string(ea.default.SUdqCQ),
                      image: { attachment_id: t.attachment.id },
                  });
    return (0, a.jsxs)("div", {
        className: lJ.Nz,
        "data-conjure-image-options": !0,
        children: [
            (0, a.jsxs)("div", {
                ref: g,
                className: u()(lJ.fF, "gallery" === h ? lJ.nV : lJ.nM, { [lJ.m3]: f }),
                role: f ? "group" : "radiogroup",
                "aria-labelledby": `${l.id}-label`,
                "data-layout": h,
                "data-count": m.length,
                children: [
                    m.map((e) =>
                        (0, a.jsx)(
                            lQ,
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
                    null != k
                        ? (0, a.jsx)(
                              lQ,
                              {
                                  projectId: n,
                                  option: k,
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
                              k.id,
                          )
                        : null,
                ],
            }),
            (0, a.jsx)(l0, {
                projectId: n,
                own: d,
                disabled: s,
                reachable: o,
                uploadText: ei.intl.string(/\bicons?\b/i.test(l.question) ? ea.default.qU4WN6 : ea.default.cbMDDB),
            }),
        ],
    });
}
function l0(e) {
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
        className: lJ.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, a.jsxs)("div", {
                className: lJ.QJ,
                children: [
                    (0, a.jsx)(w.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: lM.X,
                        text: s,
                        loading: "upload" === h,
                        disabled: l || "link" === h,
                        onClick: () => u.current?.click(),
                        tabIndex: m,
                        "data-conjure-own-image-upload": !0,
                    }),
                    o
                        ? null
                        : (0, a.jsx)(w.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: t4.LinkIcon,
                              text: ei.intl.string(ea.default["1TgOO+"]),
                              disabled: l || "upload" === h,
                              onClick: () => c(!0),
                              tabIndex: m,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, a.jsx)("input", {
                        ref: u,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: lJ.Fg,
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
                                        (0, X.Oq)(a.size, r)
                                            ? (0, ee.c9)(t, a, l, r)
                                            : Promise.resolve({ errorText: lH(r) })),
                                    ));
                        },
                    }),
                ],
            }),
            o
                ? (0, a.jsxs)("div", {
                      className: lJ.vG,
                      children: [
                          (0, a.jsx)("div", {
                              className: lJ.Hs,
                              children: (0, a.jsx)(l_.k, {
                                  label: ei.intl.string(ea.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: ei.intl.string(ea.default.AVhvn8),
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
                              className: lJ.gd,
                              children: [
                                  (0, a.jsx)(w.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: ei.intl.string(ea.default.FbRbeM),
                                      loading: "link" === h,
                                      disabled: l || "" === d.trim(),
                                      onClick: g,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, a.jsx)(li.Q, {
                                      variant: "secondary",
                                      textVariant: "text-sm/medium",
                                      text: ei.intl.string(ea.default.eXZL4X),
                                      onClick: () => c(!1),
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
var l1 = n(29073);
function l2(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: o } = e,
        c = i.useId(),
        d = !0 === t.recommended,
        f = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(j.D, {
        className: u()(lb.uK, { [lb.ue]: l, [lb.h4]: !0 === o }),
        onClick: l ? void 0 : () => r(t),
        "aria-label": ei.intl.formatToPlainString(d ? ea.default["2p6UFz"] : ea.default.AQbxhf, { answer: t.label }),
        "aria-describedby": f ? c : void 0,
        "aria-disabled": l,
        role: null != o ? "checkbox" : void 0,
        "aria-checked": o,
        tabIndex: s ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            null != o
                ? (0, a.jsx)("span", { className: lb.dy, children: (0, a.jsx)(ll.P, { checked: o, disabled: l }) })
                : (0, a.jsx)("span", { className: lb.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: lb.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: lb.l8,
                        children: (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: lb.ed,
                            children: t.label,
                        }),
                    }),
                    f
                        ? (0, a.jsx)(v.E, {
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
                ? (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: lb.rM,
                      children: ei.intl.string(ea.default.zku6r1),
                  })
                : null,
        ],
    });
}
function l3(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: i = !0, onPick: s, own: u } = e,
        o = !0 === n.multi_select;
    return lf(n)
        ? (0, a.jsx)(lZ, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: i, onPick: s, own: u })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      l2,
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
let l4 = [],
    l6 = [];
function l7(e) {
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
        className: u()(lb.Ge, lb.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            f
                ? (0, a.jsx)(v.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: lb.aK,
                      children: ei.intl.string(ea.default.tE8qbz),
                  })
                : null,
            (0, a.jsx)(l3, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: lh(o, c),
            }),
            lf(n) || !1 === n.allow_custom
                ? null
                : (0, a.jsxs)("div", {
                      className: lb.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: lb.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(lr.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == d ? null : (0, a.jsx)("span", { className: u()(lb.Pu, lb.es), children: d }),
                      ],
                  }),
        ],
    });
}
function l5(e) {
    var t;
    let { projectId: n, clarification: l, onSubmit: r, onDismiss: s } = e,
        [o, c] = i.useState({}),
        [d, f] = i.useState({}),
        [m, h] = i.useState({}),
        [g, p] = i.useState({}),
        [x, y] = i.useState({}),
        [k, A] = i.useState(!1),
        [N, S] = i.useState(0),
        [C, E] = i.useState(null),
        [I, M] = i.useState(null),
        [_, P] = i.useState(null),
        [R, L] = i.useState(!1),
        D = i.useRef(null),
        [$, O] = i.useState(null),
        z = i.useRef(null),
        F = i.useRef(0),
        G = null == r,
        q = l.questions.length,
        U = Math.min(N, q - 1),
        B = l.questions[U],
        [H, K] = i.useState({ id: B.id, expanded: !1 }),
        V = H.id === B.id && H.expanded,
        [W, X] = i.useState(null),
        J = d[B.id] ?? "",
        Y = !0 === B.multi_select,
        Q = lf(B),
        Z = Y ? (m[B.id] ?? l4) : ((t = o[B.id]), t?.kind === "option" ? [t.optionId] : lm),
        et = (function (e, t, n) {
            let [l, r] = i.useState({}),
                [a, s] = i.useState({}),
                [u, o] = i.useState({}),
                c = ei.intl.string(ea.default.wTsP5l),
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
                        if (u) return lh(h, f(i));
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
                                    null != l && (0, ee.Vm)(e, l.attachment.id).catch(() => void 0), { ...n, [d]: t }
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
                                    ((0, ee.Vm)(e, h.attachment.id).catch(() => void 0),
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
                                                error: { source: "upload", text: ei.intl.string(ea.default["kUw/b1"]) },
                                            }),
                                    ));
                            },
                            onLink: (t) => (
                                g({ busy: "link", error: null }),
                                (0, ee.gm)(e, t).then(
                                    (e) => (v({ attachment: e }), !0),
                                    (e) => (
                                        g({
                                            busy: null,
                                            error: {
                                                source: "link",
                                                text:
                                                    e instanceof Error && "" !== e.message
                                                        ? e.message
                                                        : ei.intl.string(ea.default.l79PMc),
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
        en = et.imageFor(B.id),
        el = et.selectedFor(B),
        { text: er, phase: es } = (0, tr.Q)(B.question),
        eu = er === B.question,
        eo = eu && W?.id === B.id && W.truncated;
    i.useLayoutEffect(() => {
        if (null == $ || V || !eu) return;
        function e() {
            if (null == $) return;
            let e = $.scrollHeight > $.clientHeight + 1;
            X((t) => (t?.id === B.id && t.truncated === e ? t : { id: B.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe($), () => t.disconnect());
    }, [eu, $, B.id, V]);
    let ec = ei.intl.string(V ? ei.t.iTcuma : ei.t.dcl9MQ),
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
                F.current += 1;
                let n = F.current;
                (E({ direction: t, moves: n }),
                    M({ question: B, draft: J, selected: Z, ownImage: en, ownSelected: el, direction: t, moves: n }),
                    L(!0),
                    S(e));
            },
            [J, en, el, B, Z],
        ),
        em = i.useCallback(() => {
            let e = D.current,
                t = z.current;
            null != e && null != t && P({ heading: e.offsetHeight, rows: t.offsetHeight });
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
                if (G) return;
                let t = { ...o, [B.id]: e };
                c(t);
                let n =
                    U < l.questions.length - 1
                        ? U + 1
                        : (function (e, t, n) {
                              let { questions: l } = e;
                              for (let e = 1; e <= l.length; e++) {
                                  let r = (n + e) % l.length,
                                      a = t[l[r].id];
                                  if (null == a || "" === a.text.trim()) return r;
                              }
                              return null;
                          })(l, t, U);
                null == n ? ed(t) : ef(n, n < U ? "back" : "forward");
            },
            [o, l, G, U, B.id, ed, ef],
        ),
        ep = i.useCallback(() => {
            G || 0 === U || ef(U - 1, "back");
        }, [G, U, ef]),
        ex = U > 0 && !G,
        ev = i.useCallback(
            (e) => {
                f((e) => ({ ...e, [B.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                Q ? G || c((e) => ({ ...e, [B.id]: t })) : eg(t);
            },
            [G, Q, B.id, eg],
        ),
        { multiPartFor: ej } = et,
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
        ey = g[B.id] ?? l6,
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
                      text: [
                          ...ey.map((t) => (t.name.startsWith(lu[e]) ? t.name : `${lu[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [J, x, ey, B.id, B.input]),
        ew = i.useCallback(
            (e, t) => {
                (p((t) => ({ ...t, [B.id]: e })), y((e) => ({ ...e, [B.id]: t })));
            },
            [B.id],
        ),
        eA = i.useCallback(() => A(!0), []),
        eN = i.useCallback(() => A(!1), []),
        eS = et.controlsFor(B, G),
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
                        : (o[B.id] ?? null),
            [o, J, eb, ek, B.id],
        ),
        eR = null != eP && !G,
        eL = U === q - 1,
        eD = i.useCallback(() => {
            null == eP || G || eg(eP);
        }, [G, eP, eg]),
        e$ = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, tT.vq)(e.target, HTMLTextAreaElement) ||
                    (0, tT.vq)(e.target, HTMLInputElement) ||
                    ((!(0, tT.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && ex
                            ? (e.preventDefault(), ep())
                            : "ArrowRight" === e.key && eR && (e.preventDefault(), eD())));
            },
            [ex, eR, ep, eD],
        ),
        eO = Q
            ? null
            : (0, a.jsxs)("div", {
                  className: lb.Xy,
                  children: [
                      (0, a.jsx)("span", {
                          className: lb.Gy,
                          "aria-hidden": !0,
                          children: (0, a.jsx)(lr.PencilIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                          }),
                      }),
                      (0, a.jsx)(la.y, {
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
                          placeholder: ei.intl.string(ea.default["tOC+tn"]),
                          "aria-label": ei.intl.formatToPlainString(ea.default["4JeYPB"], { question: B.question }),
                          disabled: G,
                          rows: 1,
                          className: lb.Pu,
                          "data-conjure-clarification-other": B.id,
                      }),
                  ],
              });
    return (0, a.jsxs)("section", {
        className: u()(lb.$O, { [lb.fI]: eE && !eM, [lb.Oh]: eM }),
        role: "dialog",
        "aria-label": B.question,
        "data-conjure-clarification": l.id,
        "data-state": G ? "inert" : "open",
        "data-question-expanded": V ? "true" : void 0,
        "data-picker-open": k && !R ? "true" : void 0,
        "data-step": U,
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
                            (0, a.jsx)(v.E, {
                                ref: O,
                                tag: "span",
                                id: `${B.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: V ? void 0 : 5,
                                className: u()(l1.TK, lb.R_, { [lb.TB]: "exit" === es, [lb.JU]: "enter" === es }),
                                children: er,
                            }),
                            eo || V
                                ? (0, a.jsx)("div", {
                                      className: l1.Q7,
                                      children: (0, a.jsx)(b.m, {
                                          text: ec,
                                          children: (0, a.jsx)(t7.K, {
                                              icon: V ? tt.t : tF.a,
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
                                : (0, a.jsx)(j.D, {
                                      className: u()(l1.gb, l1.Q7),
                                      onClick: eT,
                                      "aria-label": ei.intl.string(ea.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, a.jsx)(T.P, {
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
                                            ? (0, a.jsx)(v.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: lb.aK,
                                                  children: ei.intl.string(ea.default.tE8qbz),
                                              })
                                            : null,
                                        (0, a.jsx)(l3, {
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
                                                                  ((n = t[B.id] ?? l4),
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
                                            ? (0, a.jsx)(lN, {
                                                  projectId: n,
                                                  question: B,
                                                  value: ey,
                                                  disabled: G,
                                                  onChange: ew,
                                                  onFocus: eA,
                                                  onBlur: eN,
                                                  fallback: !1 === B.allow_custom ? eO : null,
                                              })
                                            : null,
                                        !1 === B.allow_custom ? null : eO,
                                    ],
                                }),
                                null == I
                                    ? null
                                    : (0, a.jsx)(
                                          l7,
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
            q > 1 || Y || Q || null != B.input
                ? (0, a.jsxs)("div", {
                      className: l1.qr,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  q > 1
                                      ? ei.intl.formatToPlainString(ea.default.yzYUjq, { index: U + 1, total: q })
                                      : null,
                          }),
                          (0, a.jsxs)("div", {
                              className: l1.zt,
                              children: [
                                  ex
                                      ? (0, a.jsx)(li.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: ei.intl.string(ea.default.Pk5lfA),
                                            onClick: ep,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  (0, a.jsx)(w.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: ei.intl.string(eL ? ei.t.geKm7t : ea.default.w1nRmT),
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
var l8 = n(572253),
    l9 = n(411236);
function re(e) {
    let { projectId: t, request: n, onDismiss: l } = e,
        r = null != n.note && "" !== n.note ? n.note : ei.intl.string(ea.default.XuOf5s);
    return (0, a.jsx)(l8.A, {
        projectId: t,
        scopeKeys: n.keys,
        notifyAgent: !0,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: n, saving: i, submit: s } = e;
            function o(e) {
                (e.preventDefault(), s());
            }
            let c = (0, a.jsx)(w.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: i,
                disabled: !n,
                text: ei.intl.string(ea.default.A7dQd9),
            });
            return null == l
                ? (0, a.jsxs)("form", {
                      className: l9.Mk,
                      onSubmit: o,
                      children: [
                          (0, a.jsx)(v.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: ei.intl.string(ea.default["jZjP+I"]),
                          }),
                          (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              selectable: !0,
                              children: r,
                          }),
                          t,
                          (0, a.jsx)("div", { className: l9.p0, children: c }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: u()(l1.nd, l1.jx),
                      "aria-label": ei.intl.string(ea.default["jZjP+I"]),
                      onSubmit: o,
                      children: [
                          (0, a.jsxs)("div", {
                              className: l1.wx,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: l1.TK,
                                      children: ei.intl.string(ea.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(j.D, {
                                      className: u()(l1.gb, l1.Q7),
                                      onClick: l,
                                      "aria-label": ei.intl.string(ea.default["iq+Pte"]),
                                      children: (0, a.jsx)(T.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: l9.DQ,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      selectable: !0,
                                      children: r,
                                  }),
                                  t,
                              ],
                          }),
                          (0, a.jsx)("div", {
                              className: l1.qr,
                              children: (0, a.jsx)("div", { className: l1.zt, children: c }),
                          }),
                      ],
                  });
        },
    });
}
var rt = n(935208),
    rn = n(404373),
    rl = n(435558),
    rr = n.n(rl);
let ra = "VibegrationsComposerDrafts";
function ri() {
    return nM.w.get(ra) ?? {};
}
let rs = new Map(),
    ru = rr().throttle(() => {
        if (0 === rs.size) return;
        let e = ri();
        for (let [t, n] of rs) "" === n ? delete e[t] : (e[t] = n);
        (rs.clear(), nM.w.set(ra, e));
    }, 1e3);
class ro extends d.Ay.Store {
    getDraft(e) {
        let t = rs.get(e);
        return null != t ? t : (ri()[e] ?? "");
    }
}
let rc = new ro(lP.h, {
    LOGOUT: function () {
        return (rs.clear(), ru.cancel(), nM.w.remove(ra), !1);
    },
    CONJURE_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: n } = e;
        return (rs.set(t, n), ru(), "" === n && ru.flush(), !1);
    },
});
function rd(e) {
    return "" !== rc.getDraft(e).trim();
}
var rf = n(29080),
    rm = n(46054),
    rh = n(615839);
function rg(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : ei.intl.string(ea.default.KcFvbo);
}
function rp(e) {
    var t;
    let n,
        l,
        { steps: r, content: a, hasProposal: i, hasLiveClarification: s = !1, hasAttachments: u } = e,
        o = (0, nK.B4)(r),
        c = o.filter((e) => "message" === e.type).at(-1),
        d =
            !i &&
            null != c &&
            ((t = c.content),
            (n = t.trim()),
            (l = a.trim()),
            "" !== n && "" !== l && (n === l || (t.length >= 16e3 && l.startsWith(n))))
                ? c
                : null,
        f = o.filter((e) => e !== d),
        m = f.filter((e) => "message" === e.type).at(-1),
        h = !i && !s && "" !== a.trim();
    return {
        streamed: f,
        lastStreamedMessage: m,
        replyKey: d?.key,
        showsClosingMessage: h,
        closingContent: h ? a.trim() : "",
        attachmentsHost: (function (e) {
            let { hasAttachments: t, showsClosingMessage: n, endsOnStreamedMessage: l } = e;
            return t ? (n ? "closing" : l ? "streamed" : "standalone") : "none";
        })({ hasAttachments: u, showsClosingMessage: h, endsOnStreamedMessage: (0, nK.Lf)(r) }),
    };
}
(n(134528), n(947204));
var rx = n(62617);
let rv = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    rj = {
        snail: () => ea.default.ABeVsS,
        goat: () => ea.default.dhXay8,
        frog: () => ea.default.SHeweG,
        bunny: () => ea.default.FytFE1,
        cat: () => ea.default["5c+sHs"],
        caterpillar: () => ea.default["/FYcne"],
        butterfly: () => ea.default["Ib/AxK"],
        dog: () => ea.default.zDjBR1,
        spider: () => ea.default["6sxyrN"],
        bee: () => ea.default.cVtefg,
        bot: () => ea.default.MjCw0v,
    },
    rb = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    u = i.useMemo(
                        () => (0, rx.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, rx.Z)(),
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
                        () => (0, rx.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, rx.Z)(),
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
                        () => (0, rx.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, rx.Z)(),
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
                        () => (0, rx.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, rx.Z)(),
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
                        () => (0, rx.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, rx.Z)(),
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
                        () => (0, rx.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, rx.Z)(),
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
                        () => (0, rx.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, rx.Z)(),
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
                        () => (0, rx.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, rx.Z)(),
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
                        () => (0, rx.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, rx.Z)(),
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
                        () => (0, rx.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, rx.Z)(),
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
                        () => (0, rx.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
                    className: (0, rx.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
    };
function ry(e) {
    return { ...rb[e], name: ei.intl.string(rj[e]()) };
}
function rk(e) {
    return rv.includes(e) ? ry(e) : void 0;
}
function rw(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % rv.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, rv[(t + n) % rv.length]);
            }),
            l
        );
    })(e))
        t.set(n, ry(l));
    return t;
}
var rA = n(60160),
    rN = n(16634);
function rS(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        u = n.task,
        o = "running" === u.status,
        c = (0, nK.SY)(n.steps),
        d = o
            ? null != c
                ? (0, nK.WQ)(c)
                : rg(u)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(rg(e));
                  switch (e.status) {
                      case "failed":
                          return ei.intl.formatToPlainString(ea.default.YrVgOf, { task: t });
                      case "cancelled":
                          return ei.intl.formatToPlainString(ea.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return ei.intl.formatToPlainString(ea.default["++9woZ"], {
                                  task: t,
                                  duration: (0, rh.MB)(e.durationMs),
                              });
                          return ei.intl.formatToPlainString(ea.default.nmI9Uh, { task: t });
                      default:
                          return ei.intl.formatToPlainString(ea.default.nmI9Uh, { task: t });
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
                                    className: le.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            rN.A,
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
                                      className: le.iq,
                                      children: (0, a.jsx)(rA.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(nJ.A, {
        glyph: (0, a.jsx)(nY.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: rg(u),
            position: "left",
            children: (0, a.jsx)("span", {
                className: le.nC,
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
var rC = n(998445),
    rE = n(643210),
    rI = n(648127),
    rM = n(372795),
    r_ = n(163897);
let rT = "conjure-browser-viewer";
function rP(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, d.yK)(
            [rE.A],
            () =>
                n.flatMap((e) => {
                    let n = rE.A.getTab(t, e);
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
        className: r_.kR,
        "aria-label": ei.intl.string(ea.default.Uvkr1G),
        children: l.map((e) =>
            (0, a.jsx)("li", { children: (0, a.jsx)(rR, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function rR(e) {
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
        c = (0, e5.useHasModalOpen)(rT),
        [d, f] = i.useState(!1),
        m = i.useCallback((e, t) => f(t), []),
        { ended: h } = l,
        g = (0, rI.i)(l.session);
    return (0, a.jsxs)(j.D, {
        innerRef: s,
        className: u()(r_.Nr, h && r_.Xj),
        onClick: () => {
            var e;
            return (
                (e = l.session.id),
                void (0, e5.openModalLazy)(
                    async () => {
                        let { default: l } = await Promise.all([
                            n.e("459368"),
                            n.e("513843"),
                            n.e("501962"),
                            n.e("531527"),
                        ]).then(n.bind(n, 273594));
                        return (n) => (0, a.jsx)(l, { ...n, projectId: t, sessionId: e, sessionIds: r });
                    },
                    { modalKey: rT },
                )
            );
        },
        "aria-label": ei.intl.formatToPlainString(ea.default.G3a822, { title: g }),
        children: [
            (0, a.jsxs)("div", {
                className: r_.Gt,
                children: [
                    (0, a.jsx)(rM.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !o || c || h,
                        className: r_.Ji,
                        "aria-label": ei.intl.formatToPlainString(ea.default.rnwqXb, { name: g }),
                        onStateChange: m,
                    }),
                    d
                        ? null
                        : (0, a.jsx)("div", {
                              className: r_.qf,
                              children: (0, a.jsx)(rC.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    h
                        ? (0, a.jsx)("div", {
                              className: r_.HS,
                              children: (0, a.jsx)(v.E, {
                                  variant: "text-xs/medium",
                                  color: "text-strong",
                                  children: ei.intl.string(ea.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsxs)("span", {
                className: r_.pG,
                children: [
                    (0, a.jsx)("span", { className: u()(r_.W9, h && r_.oM) }),
                    (0, a.jsx)(v.E, {
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
var rL = n(268409);
let rD = new WeakMap(),
    r$ = new WeakMap();
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
        u = (0, d.yK)(
            [ex.Ay],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = rD.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = r$.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), r$.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (rD.set(e, n), n);
                })(ex.Ay.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === u.length
        ? null
        : (0, a.jsx)("li", { className: rL.h, children: (0, a.jsx)(rP, { projectId: t, sessionIds: u }) });
}
var rz = n(469393);
function rF(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, e9.lG)(t.authored_at);
    return (0, a.jsx)(nZ, {
        title: ei.intl.string(ea.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: rz.r,
            children: [
                (0, a.jsxs)("div", {
                    className: rz.z,
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
                    ? (0, a.jsx)(w.$, {
                          variant: "secondary",
                          size: "sm",
                          text: ei.intl.string(ea.default.H8Jfhu),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
var rG = n(323384),
    rq = n(983851),
    rU = n(794083),
    rB = n(687966),
    rH = n(632015),
    rK = n(231483),
    rV = n(430392),
    rW = n(633018),
    rX = n(885574);
let rJ = {
    [X.q7.APP_CHANNEL]: ea.default.zrk93C,
    [X.q7.VOICE_CHANNEL]: ea.default.r5Ra0p,
    [X.q7.ACTIVITY]: ei.t.IC5Ann,
    [X.q7.OVERLAY]: ea.default.liTNf3,
    [X.q7.PROFILE_WIDGET]: ea.default["EswAi+"],
    [X.q7.AUTOMOD]: ea.default.DnWMLj,
    [X.q7.BOT]: ea.default.VFWfz1,
    [X.q7.APPLICATION_COMMANDS]: ea.default.w7JaEP,
};
function rY(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
var rQ = n(176999),
    rZ = (((l = {}).IMAGE = "image"), l),
    r0 = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    r1 = n(773669);
let r2 = [],
    r3 = {};
function r4(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function r6(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: rZ.IMAGE,
        visibility: r0.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var r7 = n(127258),
    r5 = n(587895),
    r8 = n(320095),
    r9 = n(963852),
    ae = n(95701),
    at = n(889227),
    an = n(155718);
let al = ["command", "user_command", "message_command", "message"],
    ar = new Set([an.kc.CHAT, an.kc.USER, an.kc.MESSAGE]);
function aa(e) {
    return e.type ?? an.kc.CHAT;
}
function ai(e) {
    return "launch" !== e.kind && ar.has(aa(e));
}
function as(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function au(e, t) {
    let n = al.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !as(e)), ...n.filter(as)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || as(r) || l.push(r);
    }
    return al.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
let ao = new ae.nA({ id: "1337", guild_id: "1337", type: eg.rbe.GUILD_TEXT, name: "preview" });
function ac(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, d.bG)([tK.default], () => tK.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, tW.nj)(new at.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let ad = /^@\S+/;
var af = n(628284),
    am = n(97808),
    ah = n(778712),
    ag = n(809115),
    ap = n(486020),
    ax = n(200700);
let av = {
        alert: { label: () => ei.intl.string(ea.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => ei.intl.string(ea.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => ei.intl.string(ea.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => ei.intl.string(ea.default.RGzFNK), blockedStyle: !1 },
    },
    aj = {
        blocked: { label: () => ei.intl.string(ea.default.YdnZ8q), tone: "red" },
        alert: { label: () => ei.intl.string(ea.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => ei.intl.string(ea.default.RGzFNK), tone: "green" },
    },
    ab = ["blocked", "alert", "allowed"],
    ay = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
var ak = n(984097),
    aw = n(13673);
let aA = { blocked: rK.ShieldIcon, alert: t0.BellIcon, allowed: af.y },
    aN = {
        blurple: { text: "text-brand", icon: R.A.colors.TEXT_BRAND },
        red: { text: "text-feedback-critical", icon: R.A.colors.TEXT_FEEDBACK_CRITICAL },
        green: { text: "text-feedback-positive", icon: R.A.colors.TEXT_FEEDBACK_POSITIVE },
    };
function aS(e) {
    var t, n;
    let l,
        r,
        { example: i } = e,
        s =
            "" ===
            (r = [
                "timeout" !== (t = i).outcome || null == t.timeout_seconds
                    ? null
                    : ei.intl.formatToPlainString(ei.t["3LYql6"], {
                          duration:
                              ((n = t.timeout_seconds),
                              null != (l = (0, ax.getFriendlyDurationString)(n))
                                  ? l
                                  : n % 604800 == 0
                                    ? ei.intl.formatToPlainString(ei.t.EmoBD2, { weeks: n / 604800 })
                                    : n % 86400 == 0
                                      ? ei.intl.formatToPlainString(ei.t["k2UNz+"], { days: n / 86400 })
                                      : n % 3600 == 0
                                        ? ei.intl.formatToPlainString(ei.t.xCjYxK, { hours: n / 3600 })
                                        : n % 60 == 0
                                          ? ei.intl.formatToPlainString(ei.t.opVZ9q, { mins: n / 60 })
                                          : ei.intl.formatToPlainString(ei.t["4zv/jq"], { secs: n })),
                      }),
                i.reason,
            ]
                .filter((e) => null != e && "" !== e)
                .join(" "))
                ? null
                : r;
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
function aC(e) {
    var t;
    let { example: n } = e,
        { label: l, blockedStyle: r } = av[n.outcome];
    return (0, a.jsxs)("li", {
        className: u()(ak.nM, { [u()(ak.HV, aw.DX)]: r }),
        children: [
            (0, a.jsx)(y.A, { children: `${l()}: ` }),
            (0, a.jsx)("span", {
                className: ak.my,
                children: (0, a.jsx)(am.eu, {
                    src: (0, ap.AE)(void 0, void 0),
                    size: ah._3.SIZE_24,
                    "aria-label": ei.intl.string(ea.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: ak.fw,
                children: [
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), rm.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    (0, a.jsx)(aS, { example: n }),
                ],
            }),
        ],
    });
}
function aE(e) {
    let { group: t } = e,
        n = i.useId(),
        l = aj[t.section],
        r = aA[t.section],
        s = aN[l.tone];
    return (0, a.jsxs)("div", {
        className: ak.uW,
        children: [
            (0, a.jsxs)("div", {
                className: ak.bV,
                children: [
                    (0, a.jsx)(r, { size: "xs", color: s.icon, "aria-hidden": !0 }),
                    (0, a.jsx)(v.E, {
                        id: n,
                        variant: "text-xs/semibold",
                        color: s.text,
                        className: ak.a9,
                        children: l.label(),
                    }),
                ],
            }),
            (0, a.jsx)("ul", {
                className: ak.Ge,
                "aria-labelledby": n,
                children: t.examples.map((e, t) => (0, a.jsx)(aC, { example: e }, t)),
            }),
        ],
    });
}
function aI() {
    let { avatarSrc: e, eventHandlers: t } = (0, ag.a)(!0);
    return (0, a.jsx)("span", {
        className: ak.Gy,
        ...t,
        children: (0, a.jsx)(am.eu, { src: e, size: ah._3.SIZE_16, "aria-label": ei.intl.string(ei.t.hG1StD) }),
    });
}
function aM(e) {
    var t;
    let { automod: n } = e;
    return (0, a.jsx)("div", {
        className: ak.K1,
        children: ((t = n.examples),
        ab
            .map((e) => ({ section: e, examples: t.filter((t) => ay[t.outcome] === e) }))
            .filter((e) => e.examples.length > 0)).map((e) => (0, a.jsx)(aE, { group: e }, e.section)),
    });
}
var a_ = n(460905),
    aT = n(110384),
    aP = n(763754),
    aR = n(217424),
    aL = n(194085),
    aD = n(20851),
    a$ = n(692508),
    aO = n(798819);
function az(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, a.jsxs)("div", {
        className: u()(aO.item, aO.labelContainer, aO.colorDefault, {
            [aO.focused]: !0 === t.highlighted,
            [aO.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, a.jsx)("div", {
                      className: aO.iconContainerLeft,
                      children: (0, a.jsx)(n, { color: "currentColor", className: aO.icon }),
                  })
                : null,
            (0, a.jsx)("div", { className: u()(aO.label, a$.Gy), children: t.label }),
            null != l
                ? (0, a.jsx)("div", {
                      className: aO.iconContainer,
                      children: (0, a.jsx)(l, { color: "currentColor", className: aO.icon }),
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
                          return (0, a.jsx)("img", { src: l, alt: "", className: u()(t, a$.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: ei.intl.string(ei.t["5IEsGx"]), icon: aT.W, muted: !0 }
                : { label: ei.intl.string(ei.t.LYju5J), muted: !0 };
    return (0, a.jsx)("div", {
        className: u()(aO.menu, a$.MK),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: aO.scroller,
            children: [
                (0, a.jsx)(az, { item: s }),
                (0, a.jsx)("div", { className: aO.separator }),
                (0, a.jsx)(az, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
var aG = n(381941);
function aq() {}
function aU(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        c,
        f,
        m,
        h,
        g,
        { projectId: p, exchanges: x } = e,
        {
            items: v,
            botIcon: j,
            appIconSrc: b,
        } = ((t = (0, d.bG)([tK.default], () => tK.default.getCurrentUser())),
        (n = (0, d.bG)([ek.Ay], () => ek.Ay.getProject(p))),
        (l = n?.application_id),
        (r = (0, d.bG)([r5.A], () => r5.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? ei.intl.string(ea.default.JEYq8M)),
        (o = (0, d.bG)([tK.default], () => (null != l ? tK.default.getUser(l) : void 0), [l])),
        (f = ac("31337", s, { bot: !0, enabled: !(c = o?.bot === !0) })),
        (m = c ? o : f),
        (h = ac("31338", ei.intl.string(ea.default["9iAOsw"]), { discriminator: "0003" })),
        (g = ac("31339", (0, tV.mG)(t) ?? "", { enabled: null != t })),
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
                                      i = (0, r8.rh)({
                                          ...(0, r9.Ay)({
                                              channelId: ao.id,
                                              content: e,
                                              author: t,
                                              type: l ?? eg.lAJ.DEFAULT,
                                          }),
                                          id: a,
                                          state: eg.cmJ.SENT,
                                          ...(null != n
                                              ? {
                                                    interaction: {
                                                        id: a,
                                                        name: n,
                                                        type: r7.G.APPLICATION_COMMAND,
                                                        user: (0, r9.Vi)(s),
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
                                              messageType: eg.lAJ.CHAT_INPUT_COMMAND,
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
                                                  messageType: eg.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((l = t.user), l.trim().replace(ad, `<@${i.id}>`)), s),
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
                                  targetMessage: ei.intl.string(ea.default["y+QYes"]),
                                  memberMessage: ei.intl.string(ea.default.BUTRDc),
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
              className: u()(a$.TE, `group-spacing-${aG.ES}`),
              children: v.map((e) => {
                  let { key: t, record: n, isCommandReply: l, menu: r } = e;
                  return (0, a.jsxs)(
                      "li",
                      {
                          className: null != r ? a$.Rz : void 0,
                          children: [
                              (0, a.jsx)(aD.A, {
                                  message: n,
                                  channel: ao,
                                  author: (0, aP.FT)(n.author, ao),
                                  isGroupStart: !0,
                                  avatarOverride: n.author.bot ? (j ?? void 0) : void 0,
                                  childrenExecutedCommand: l ? (0, a.jsx)(aR.A, { message: n, channel: ao }) : void 0,
                                  usernameClassName: r?.target === "user" ? a$.Ct : void 0,
                                  disableInteraction: !0,
                              }),
                              r?.target === "message"
                                  ? (0, a.jsx)("div", {
                                        className: a$.S3,
                                        inert: !0,
                                        "aria-hidden": !0,
                                        children: (0, a.jsxs)(aL.Ay, {
                                            children: [
                                                (0, a.jsx)(aL.qv, {
                                                    label: ei.intl.string(ei.t.lfIHs4),
                                                    icon: a_.n,
                                                    onClick: aq,
                                                }),
                                                (0, a.jsx)(aL.qv, {
                                                    label: ei.intl.string(ei.t["5IEsGx"]),
                                                    icon: aT.W,
                                                    onClick: aq,
                                                }),
                                                (0, a.jsx)(aL.qv, {
                                                    label: ei.intl.string(ei.t["UKOtz+"]),
                                                    icon: t5.MoreHorizontalIcon,
                                                    selected: !0,
                                                    onClick: aq,
                                                }),
                                            ],
                                        }),
                                    })
                                  : null,
                              null != r
                                  ? (0, a.jsx)("div", {
                                        className: "user" === r.target ? a$.ET : a$.je,
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
var aB = n(633075),
    aH = n(946356),
    aK = n(58216),
    aV = n(27399);
function aW(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, d.bG)([tK.default], () => tK.default.getCurrentUser()),
        r = i.useMemo(() => new aB.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: aV.H,
              children: (0, a.jsx)(aH.A.Overlay, {
                  className: aV.w,
                  children: (0, a.jsx)(aK.A, {
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
var aX = n(443863);
let aJ = {
    [X.q7.APP_CHANNEL]: rG.k,
    [X.q7.VOICE_CHANNEL]: rq.H,
    [X.q7.ACTIVITY]: rU.b,
    [X.q7.OVERLAY]: rB.GameControllerIcon,
    [X.q7.PROFILE_WIDGET]: rH.f,
    [X.q7.AUTOMOD]: rK.ShieldIcon,
    [X.q7.BOT]: rV.RobotIcon,
    [X.q7.APPLICATION_COMMANDS]: rW.k,
};
function aY(e) {
    let { label: t, icon: n, info: l, children: r } = e;
    return (0, a.jsxs)("section", {
        className: aX.uW,
        children: [
            (0, a.jsxs)("span", {
                className: aX.a9,
                children: [
                    n,
                    (0, a.jsx)(v.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }),
                    l,
                ],
            }),
            r,
        ],
    });
}
function aQ(e) {
    let { text: t, label: n } = e;
    return (0, a.jsx)(b.m, {
        text: t,
        children: (0, a.jsx)(j.D, {
            className: aX.bk,
            "aria-label": n,
            children: (0, a.jsx)(rX.CircleInformationIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
function aZ(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)(aY, {
              label: t,
              children: (0, a.jsx)("div", {
                  className: aX.Ip,
                  children: n.map((e) =>
                      (0, a.jsx)(
                          "span",
                          {
                              className: aX.jw,
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
function a0(e) {
    let { tags: t } = e;
    return (0, a.jsx)("span", {
        className: aX.K2,
        children: t
            .filter((e) => e in aJ)
            .map((e) => {
                let t = aJ[e];
                return (0, a.jsxs)(
                    "span",
                    {
                        className: aX.L6,
                        children: [
                            (0, a.jsx)(t, {
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
                                children: ei.intl.string(rJ[e]),
                            }),
                        ],
                    },
                    e,
                );
            }),
    });
}
function a1(e) {
    let { projectId: t, design: n } = e,
        { id: l } = n,
        { src: r, gone: s, handleError: u } = lX(t, l),
        o = ei.intl.string(ea.default["3/aHX6"]),
        c = i.useCallback(() => {
            (0, ee.PK)(t, l).then(
                (e) => {
                    (0, lT.R)({
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
        : (0, a.jsx)(aY, {
              label: ei.intl.string(ea.default.X15LLY),
              info: (0, a.jsx)(aQ, {
                  text: ei.intl.string(ea.default.nR4B8P),
                  label: ei.intl.string(ea.default.nc0SNY),
              }),
              children: (0, a.jsx)(j.D, {
                  className: aX.xX,
                  onClick: c,
                  "aria-label": ei.intl.string(ea.default.TvAPIm),
                  children: null != r ? (0, a.jsx)("img", { src: r, alt: o, className: aX.sN, onError: u }) : null,
              }),
          });
}
function a2(e) {
    let t,
        n,
        l,
        { projectId: r, proposal: s, version: u, onApprove: o } = e,
        c = rY(s, X.q7.AUTOMOD) ? s.automod : null,
        { botExchanges: f } =
            ((t = rY(s, X.q7.APPLICATION_COMMANDS)),
            (n =
                rY(s, X.q7.BOT) || t
                    ? null != s.bot
                        ? s.bot.interaction
                        : t && s.commands.some(ai)
                          ? "commands"
                          : null
                    : null),
            (l = i.useMemo(
                () =>
                    null == n
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
                              let s = e.commands.filter(ai).map((e) =>
                                      (function (e, t) {
                                          let n = e.description?.trim() ?? "",
                                              l = "" !== n ? n : t.reply;
                                          switch (aa(e)) {
                                              case an.kc.USER:
                                                  return { kind: "user_command", user: e.name, bot: l };
                                              case an.kc.MESSAGE:
                                                  return { kind: "message_command", user: e.name, bot: l };
                                              default:
                                                  return { kind: "command", user: `/${e.name}`, bot: l };
                                          }
                                      })(e, n),
                                  ),
                                  u = "messages" === t ? [] : s.filter(as),
                                  o = a.length > 0 ? au([...a, ...u], !0) : au("both" === t ? [...s, i] : s, !1);
                              return o.length > 0 ? o : [r];
                          })(s, n, {
                              message: ei.intl.string(ea.default.J7qggf),
                              reply: ei.intl.string(ea.default.nqYtiy),
                              event: ei.intl.string(ea.default["05lU9W"]),
                          }),
                [s, n],
            )),
            { botInteraction: n, botExchanges: l }),
        m = (function (e, t) {
            let { widget_config: n, widget_preview: l } = t,
                r = (0, d.bG)([r1.default], () => r1.default.locale),
                a = (0, d.bG)([ek.Ay], () => {
                    let t = ek.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = i.useState(r3);
                    return (
                        i.useEffect(() => {
                            let n = Object.entries(t ?? {});
                            if (0 === n.length) return;
                            let r = !1;
                            return (
                                Promise.all(
                                    n.map((t) => {
                                        let [n, l] = t;
                                        return (0, ee.PK)(e, l.id).then(
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
                                                          ...r4(n),
                                                          ...(null != n.fallback ? { fallback: r4(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let a = rQ.uW.safeParse(r);
                                  if (!a.success) return null;
                                  let i = a.data;
                                  return null == i[ty.m.WIDGET_TOP] || null == i[ty.m.WIDGET_BOTTOM]
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
                                                                    type: rQ.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof a
                                                                ? (r[e] = { type: rQ.oG.NUMBER, value: a })
                                                                : (r[e] = { type: rQ.oG.STRING, value: a });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(r6),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: r2,
                                            },
                                        };
                              })(n, l, s, r),
                    [n, l, s, r],
                );
            return i.useMemo(() => (null == a || null == u ? null : { applicationId: a, rendererProps: u }), [a, u]);
        })(r, s),
        h = rY(s, X.q7.PROFILE_WIDGET) ? m : null,
        g = u?.superseded === !0,
        p = s.what_changed?.trim() ?? "";
    return (0, a.jsxs)(n2, {
        title:
            g && null != u
                ? ei.intl.formatToPlainString(ea.default.YZ3qJs, { version: u.version })
                : ei.intl.string(ea.default["3b6e7o"]),
        meta: g
            ? (0, a.jsx)(n1, { children: ei.intl.string(ea.default.hF2c41) })
            : (0, a.jsx)(a0, { tags: s.supported_surfaces ?? [] }),
        superseded: g,
        showLabel: ei.intl.string(ea.default.yD8EJS),
        hideLabel: ei.intl.string(ea.default.nSPGNb),
        bodyClassName: aX.rf,
        "data-conjure-plan-card": !0,
        children: [
            "" !== p
                ? (0, a.jsx)(aY, {
                      label: ei.intl.string(ea.default.iNS4dl),
                      children: (0, a.jsx)(v.E, {
                          variant: "experimental/body-md/normal",
                          color: "text-default",
                          selectable: !0,
                          children: p,
                      }),
                  })
                : null,
            (0, a.jsx)(v.E, {
                variant: "experimental/body-md/normal",
                color: "text-default",
                selectable: !0,
                children: s.summary,
            }),
            null != c && c.examples.length > 0
                ? (0, a.jsx)(aY, {
                      label: ei.intl.string(ea.default.z4ZKYG),
                      icon: (0, a.jsx)(aI, {}),
                      info: (0, a.jsx)(aQ, {
                          text: ei.intl.string(ea.default.bo4MOx),
                          label: ei.intl.string(ea.default.VPLNot),
                      }),
                      children: (0, a.jsx)(aM, { automod: c }),
                  })
                : null,
            null != s.design_image ? (0, a.jsx)(a1, { projectId: r, design: s.design_image }) : null,
            f.length > 0
                ? (0, a.jsx)(aY, {
                      label: ei.intl.string(ea.default.sA1lTv),
                      info: (0, a.jsx)(aQ, {
                          text: ei.intl.string(ea.default.NnmbJu),
                          label: ei.intl.string(ea.default.KsqQJX),
                      }),
                      children: (0, a.jsx)(aU, { projectId: r, exchanges: f }),
                  })
                : null,
            null != h
                ? (0, a.jsx)(aY, {
                      label: ei.intl.string(ea.default.ove4zH),
                      info: (0, a.jsx)(aQ, {
                          text: ei.intl.string(ea.default.XcIrHx),
                          label: ei.intl.string(ea.default["TwT+ht"]),
                      }),
                      children: (0, a.jsx)(aW, { ...h }),
                  })
                : null,
            s.changes.length > 0
                ? (0, a.jsx)(aY, {
                      label: ei.intl.string(ea.default["5+mG1z"]),
                      children: (0, a.jsx)("ul", {
                          className: aX.p_,
                          children: s.changes.map((e, t) =>
                              (0, a.jsx)(
                                  "li",
                                  {
                                      className: aX.Aw,
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
            s.commands.length > 0
                ? (0, a.jsx)(aY, {
                      label: ei.intl.string(ei.t["0hKkS+"]),
                      children: (0, a.jsx)("ul", {
                          className: aX.p_,
                          children: s.commands.map((e, t) =>
                              (0, a.jsxs)(
                                  "li",
                                  {
                                      className: aX.uX,
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
            (0, a.jsx)(aZ, { label: ei.intl.string(ea.default["2UbW6r"]), names: s.bot_permissions ?? [] }),
            (0, a.jsx)(aZ, { label: ei.intl.string(ea.default["7TKfpj"]), names: s.privileged_intents ?? [] }),
            null == o || g
                ? null
                : (0, a.jsxs)("div", {
                      className: aX.o1,
                      children: [
                          (0, a.jsx)(w.$, {
                              variant: "primary",
                              size: "sm",
                              text: ei.intl.string(ea.default["6S+wRM"]),
                              onClick: o,
                          }),
                          (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              tag: "span",
                              children: ei.intl.string(ea.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
function a3(e) {
    return null != e && e.status?.state === "unpublished";
}
let a4 = new WeakMap();
function a6(e) {
    let { publish: t } = e,
        n = t.guildId,
        l = (0, d.bG)([V.A], () => (null == n ? null : V.A.getGuild(n)));
    return (0, a.jsx)(no.B, {
        gap: 8,
        align: "start",
        children: (0, a.jsxs)(no.B, {
            direction: "horizontal",
            gap: 8,
            align: "center",
            children: [
                (0, a.jsx)(w.$, {
                    variant: "primary",
                    size: "sm",
                    loading: t.publishing,
                    disabled: t.disabled,
                    onClick: () => t.run("card"),
                    text: t.label,
                }),
                null != l
                    ? (0, a.jsxs)(no.B, {
                          direction: "horizontal",
                          gap: 4,
                          align: "center",
                          children: [
                              (0, a.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: ei.intl.string(ea.default["+HGTlC"]),
                              }),
                              (0, a.jsx)(ez.Ay, { guild: l, size: ez.Ay.Sizes.SMOL }),
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
function a7(e) {
    let { projectId: t } = e,
        n = (0, nr.Ay)(t);
    return null != n && a3(n) ? (0, a.jsx)(a6, { publish: n }) : null;
}
var a5 = n(478016),
    a8 = n(989271);
function a9(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        s = null == l;
    return (0, a.jsxs)(j.D, {
        className: u()(a8.nM, { [a8.f1]: s, [a8.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": ei.intl.formatToPlainString(ea.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: a8.jo,
                children: [
                    n
                        ? (0, a.jsx)(a5.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: a8.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(v.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: a8.G9,
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
function ie(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        u = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(nZ, {
        title: ei.intl.string(ea.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                a9,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : u },
                e.id,
            ),
        ),
    });
}
function it(e) {
    let { onAsk: t } = e;
    return (0, a.jsx)(no.B, {
        align: "start",
        "data-conjure-ideas-offer": !0,
        children: (0, a.jsx)(w.$, {
            variant: "secondary",
            size: "sm",
            disabled: null == t,
            onClick: t,
            text: ei.intl.string(ea.default["U/bLzU"]),
        }),
    });
}
var il = n(530557),
    ir = n(872162);
function ia(e, t) {
    return { cardId: e, status: "pending" === t ? null : t };
}
var ii = n(202723);
function is(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: o } = e,
        c = i.useCallback(() => {
            (0, e5.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("291953"), n.e("408337")]).then(n.bind(n, 789864));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        d = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: il.R })), [r.fields]),
        f = (function (e, t) {
            let [n, l] = i.useState(() => ia(e, t));
            return n.cardId !== e || (null == n.status && "pending" !== t)
                ? (l(ia(e, t)), !1)
                : null != n.status && t !== n.status;
        })(l, s),
        m = u()(ii.Lo, { [ii.jY]: f });
    return "superseded" === s
        ? (0, a.jsx)(
              "article",
              {
                  className: m,
                  children: (0, a.jsx)(v.E, {
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      tag: "span",
                      children: ei.intl.string(ea.default.CTxtdV),
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
                        (0, a.jsx)(v.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            tag: "span",
                            children: ei.intl.string(ea.default.HCQvpO),
                        }),
                        (0, a.jsx)(ir.C, { label: ei.intl.string(ea.default.HCQvpO), size: "xs", items: d }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, a.jsx)(
                  "article",
                  {
                      className: ii.Lo,
                      children: (0, a.jsx)(ir.C, { label: ei.intl.string(ea.default.HCQvpO), size: "xs", items: d }),
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
                                className: ii.$h,
                                children: [
                                    (0, a.jsx)("span", {
                                        className: ii.c9,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(af.y, {
                                            size: "xs",
                                            color: R.A.colors.ICON_FEEDBACK_POSITIVE,
                                        }),
                                    }),
                                    (0, a.jsx)(v.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-feedback-positive",
                                        tag: "span",
                                        children: ei.intl.string(ea.default.sfp7Up),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(ir.C, { label: ei.intl.string(ea.default.sfp7Up), size: "xs", items: d }),
                        ],
                    },
                    s,
                )
              : (0, a.jsxs)("article", {
                    className: ii.Lo,
                    children: [
                        (0, a.jsx)(v.E, {
                            variant: "text-xs/semibold",
                            color: null != o ? "text-brand" : "text-muted",
                            tag: "span",
                            children: ei.intl.string(null != o ? ea.default.O0QIqj : ea.default.HCQvpO),
                        }),
                        (0, a.jsx)(v.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            selectable: !0,
                            children: null != r.note && "" !== r.note ? r.note : ei.intl.string(ea.default.MPGSHL),
                        }),
                        (0, a.jsx)(ir.C, { label: ei.intl.string(ea.default.HCQvpO), size: "xs", items: d }),
                        (0, a.jsx)("div", {
                            className: ii.sq,
                            children: (0, a.jsx)(w.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: c,
                                text: ei.intl.string(ea.default.EK8tKY),
                            }),
                        }),
                    ],
                });
}
var iu = n(919790),
    io = n(971824),
    ic = n(162052),
    id = n(165648);
function im(e) {
    let t = rw(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? rk(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: rg(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function ih(e) {
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
        x = i.useMemo(() => (0, nK.Jf)(n, l), [n, l]),
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
            className: le.pj,
            "data-live": !1,
            children: (0, a.jsx)(nJ.A, {
                glyph: (0, a.jsx)(rf.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: ei.intl.string(ea.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (p ?? (h ? (x.turn?.durationMs ?? u) : void 0)),
        b = m ? ((0, nK.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = rw(k.map((e) => e.taskId)),
        A = !g && (l || k.some((e) => "running" === e.task.status)),
        N = im(k);
    return (0, a.jsxs)("ol", {
        className: le.pj,
        "data-live": A,
        children: [
            (0, a.jsx)(nW.A, {
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
                let l = null != e.task.helperMark ? rk(e.task.helperMark) : void 0,
                    r = l ?? w.get(e.taskId);
                return null == r
                    ? null
                    : (0, a.jsx)(
                          rS,
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
            (0, a.jsx)(rO, { projectId: t, steps: n, tree: x, segment: f }),
            y
                ? (0, a.jsx)("li", {
                      className: le.YO,
                      children: (0, a.jsx)(n8, { todos: b, provisional: d, agents: N, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function ig(e) {
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
            pickedIdeaIds: j,
            onApprovePlan: b,
            sideReply: y = !1,
            sideReplyAcknowledges: k,
            hoistedProse: w = !1,
            hoistedAttachmentsHost: A,
            restoreProposal: N,
            onRestoreProposal: S,
        } = e,
        C = i.useMemo(
            () => rp({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != c && c.length > 0 }),
            [n, l, r, c],
        ),
        { streamed: E, lastStreamedMessage: I, showsClosingMessage: M, closingContent: _ } = C,
        T = (w ? A : void 0) ?? C.attachmentsHost,
        P = M && !w,
        R = null == c ? null : (0, a.jsx)(iu.A, { projectId: t, attachments: c }),
        L = null == R ? null : (0, a.jsx)("div", { className: le.MT, children: R }),
        D = y
            ? (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return ei.intl.string(ea.default.Mv5OmK);
                          case "queued":
                              return ei.intl.string(ea.default["Po/2mi"]);
                          case "restarting":
                              return ei.intl.string(ea.default.Vj0woh);
                          default:
                              return ei.intl.string(ea.default.gY3L8p);
                      }
                  })(k),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: le.ue,
        children: [
            E.length > 0 && !w
                ? (0, a.jsx)("ol", {
                      className: le.dO,
                      children: E.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: le.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: id.PT,
                                          children: rm.A.parse(e.content, !0, {
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
                ? (0, a.jsx)(a2, { projectId: t, proposal: r, version: s, onApprove: b })
                : P
                  ? (0, a.jsxs)("div", {
                        className: u()(le.ky, ic.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: u()(id.PT, le.cW),
                                children: rm.A.parse(_, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === T ? L : null,
                            D,
                        ],
                    })
                  : null,
            null != d
                ? (0, a.jsx)("div", {
                      className: u()(le.ky, ic.XR, { [io.O]: null != m && "open" === h }),
                      children: (0, a.jsx)(is, {
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
                      className: u()(le.ky, ic.XR),
                      children: (0, a.jsx)(re, { projectId: t, request: g }),
                  })
                : null,
            "standalone" !== T && ("closing" !== T || P) ? null : R,
            null != p ? (0, a.jsx)(a7, { projectId: t }) : null,
            null != o && o.length > 0 ? (0, a.jsx)(ie, { ideas: o, pickedIdeaIds: j, onPick: x }) : null,
            null != N ? (0, a.jsx)(rF, { proposal: N, onRestore: S }) : null,
            P ? null : D,
        ],
    });
}
var ip = n(146806),
    ix = n(477262),
    iv = n(432017),
    ij = n(475358),
    ib = n(717400),
    iy = n(663341),
    ik = n(559647),
    iw = n(775602),
    iA = n(234320),
    iN = n(285796),
    iS = n(922329);
async function iC(e) {
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
var iE = n(153171);
let iI = X.lN;
function iM(e, t, n, l) {
    let r = lz(e, t).length;
    !(function (e, t, n) {
        if (0 === n.length) return;
        let l = n.map((e) => {
            let { draft: t, upload: n } = e;
            return { draft: { ...t, localId: lD++ }, upload: n };
        });
        for (let { draft: n, upload: r } of (lF(e, t, [
            ...lz(e, t),
            ...l.map((e) => {
                let { draft: t } = e;
                return t;
            }),
        ]),
        l))
            r?.().then(
                (l) => {
                    if ("errorText" in l) return void lG(e, t, n.localId, { status: "error", errorText: l.errorText });
                    let { converted: r, ...a } = l;
                    lG(e, t, n.localId, { ...r, status: "ready", ref: a })
                        ? setTimeout(
                              () =>
                                  lG(e, t, n.localId, {
                                      status: "error",
                                      errorText: ei.intl.string(ea.default.E7dS5n),
                                  }),
                              X.o2 - 3e5,
                          )
                        : lq(e, a.id);
                },
                (l) => {
                    (console.error("[vibegrations] attachment upload failed", l),
                        lG(e, t, n.localId, { status: "error", errorText: ei.intl.string(ea.default["kUw/b1"]) }));
                },
            );
    })(
        e,
        t,
        n.map((e) => {
            let t = "" === e.type ? "application/octet-stream" : e.type,
                n = { name: e.name, contentType: t };
            if (r++ >= iI)
                return {
                    draft: {
                        ...n,
                        status: "error",
                        errorText: ei.intl.formatToPlainString(ea.default.Q0aCVZ, { count: iI }),
                    },
                };
            if (!(0, X.Oq)(e.size, t))
                return "image/png" === t && e.size <= X.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas
                    ? {
                          draft: { ...n, status: "uploading", previewUrl: URL.createObjectURL(e) },
                          upload: async () => {
                              let n = await iC(e).catch(() => null);
                              return null != n && (0, X.Oq)(n.size, n.type)
                                  ? { ...(await l(n)), converted: { name: n.name, contentType: n.type } }
                                  : { errorText: lH(t) };
                          },
                      }
                    : { draft: { ...n, status: "error", errorText: lH(t) } };
            let a = X.XB.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...n, status: "uploading", previewUrl: a }, upload: () => l(e) };
        }),
    );
}
function i_(e) {
    let { projectId: t, surface: n, onUploadFile: l } = e,
        r = l$.useState((e) => lO(e, t, n)),
        a = i.useCallback((e) => iM(t, n, e, l), [t, n, l]),
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
                null != (r = (l = lz(t, n)).find((t) => t.localId === e)) &&
                    (lU(t, r),
                    lF(
                        t,
                        n,
                        l.filter((t) => t.localId !== e),
                    ));
            },
            [t, n],
        ),
        o = i.useCallback(() => lV(t, n), [t, n]);
    return {
        drafts: r,
        addFiles: a,
        pasteFiles: s,
        removeDraft: u,
        settled: r.every((e) => "ready" === e.status),
        takeRefs: o,
    };
}
function iT(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(iS.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(k.y, { type: k.t.SPINNING_CIRCLE_SIMPLE, className: iE.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: iE.o1,
                onClick: () => n(t.localId),
                "aria-label": ei.intl.string(ea.default.Slam9g),
                children: (0, a.jsx)(iN.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var iP = n(497437);
let iR = [
        {
            id: "add-images-videos",
            label: ea.default["51+9lc"],
            icon: ix.s,
            accept: "image/*,video/*,.png,.jpg,.jpeg,.gif,.webp,.avif,.heic,.heif,.svg,.bmp,.mp4,.m4v,.mov,.webm,.mkv,.avi",
        },
        {
            id: "add-sounds",
            label: ea.default["10ljr2"],
            icon: iv.T,
            accept: "audio/*,.mp3,.wav,.ogg,.oga,.opus,.m4a,.aac,.flac,.weba,.webm,.aif,.aiff,.mid,.midi",
        },
        { id: "add-other-files", label: ea.default.aotDee, icon: Z.H, accept: "" },
    ],
    iL = "text-md/normal",
    iD = null;
function i$(e) {
    let { text: t, offering: n, typed: l } = e,
        [r, s] = i.useState(t),
        o = i.useRef(null),
        c = i.useRef(null),
        f = i.useRef(0),
        [m, h] = i.useState(0),
        [g, p] = i.useState(0),
        [x, j] = i.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
    (i.useLayoutEffect(() => {
        let e = o.current,
            t = e?.parentElement;
        if (null == e || null == t) return;
        let n = f.current;
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
            j({
                frontFrom: 1e3 * (0, ip._R)(f),
                frontTo: 1e3 * (0, ip._R)(m),
                backFrom: 1e3 * (0, ip.T)(f),
                backTo: 1e3 * (0, ip.T)(m),
            });
        }
        let r = new ResizeObserver(l);
        return (l(), r.observe(e), r.observe(t), null != c.current && r.observe(c.current), () => r.disconnect());
    }, [t]),
        i.useEffect(() => {
            f.current = c.current?.offsetWidth ?? 0;
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
        E = (0, d.bG)([iw.Ay], () => iw.Ay.useReducedMotion),
        I = t === ei.intl.string(ea.default.Zc7gML),
        M = r === t && I;
    function _(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: u()(iP.VT, { [iP.qk]: l }),
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
            children: (0, a.jsx)(ij.e, { shortcut: "tab", className: iP.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(eI.o, {
                text: t,
                variant: iL,
                delay: null,
                duration: 1e3,
                trailingWidth: g,
                className: u()(iP.xM, { [iP.s2]: l }),
                onStart: N,
                onComplete: () => s(t),
            }),
            _(iP.IS, n || (!E && "out" === k), o),
            (0, a.jsx)("span", {
                ref: c,
                className: iP.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(v.E, { variant: iL, tag: "span", children: t }),
            }),
            M
                ? (0, a.jsxs)("span", {
                      className: iP.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(v.E, { variant: iL, tag: "span", className: iP.xM, children: t }),
                          _(iP.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let iO = i.memo(function (e) {
        let {
                projectId: t,
                canSend: n,
                stopped: l,
                running: r,
                restoring: s = !1,
                onSend: u,
                onInterrupt: o,
                onUploadFile: c,
                onApprove: f,
                onImport: m,
                suggestion: h,
                questionOpen: g = !1,
                hasPendingContext: p = !1,
                onDraftHasTextChange: x,
                modelSettings: v,
                onModelSettingsChange: j,
            } = e,
            [k, w] = i.useState(() => rc.getDraft(t)),
            A = i.useCallback(
                (e) => {
                    ((0, ey.I$)(t, e), w(e));
                },
                [t],
            ),
            N = "" !== k.trim();
        i.useEffect(() => x?.(N), [N, x]);
        let [S, C] = i.useState(t);
        S !== t && (C(t), w(rc.getDraft(t)));
        let E = (0, d.bG)([iw.Ay], () => iw.Ay.isSubmitButtonEnabled),
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
            } = i_({ projectId: t, surface: "chat", onUploadFile: c }),
            O = "" !== k.trim() || T.length > 0 || p,
            z = n && O && D,
            [F, G] = i.useState(null);
        i.useEffect(() => {
            if (null == F) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => G(null));
                });
            return () => {
                (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
            };
        }, [F]);
        let q = i.useCallback(() => {
                if (!z) return;
                let e = $();
                u(k, e.length > 0 ? e : void 0);
                let t = (function (e, t, n) {
                    let l,
                        r,
                        a = n.split("\n", 1)[0] ?? "";
                    if (null == e || "" === a) return a;
                    null == iD && (iD = document.createElement("canvas").getContext("2d"));
                    let i = iD;
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
                })(X.current?.querySelector("textarea") ?? null, ec.current, k);
                ("" !== t && G(t), A(""));
            }, [z, k, u, $, A]),
            U = i.useCallback(
                (e) => {
                    (e.preventDefault(), q());
                },
                [q],
            ),
            B = i.useCallback(() => {
                null == o || I || (M(!0), o());
            }, [o, I]),
            H = null == h || "" !== k || !n || l || s || p ? null : h,
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
                        null != f && (e.preventDefault(), f());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), q());
                },
                [q, f, r, o, I, B, H, A],
            ),
            V = i.useCallback(
                (e) => {
                    n && R(e);
                },
                [n, R],
            );
        (0, iA.Vo)({
            event: eg.jej.GLOBAL_CLIPBOARD_PASTE,
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
            Z = i.useRef(null),
            ee = i.useCallback((e) => {
                let t = _.current;
                null != t && ((t.accept = e), t.click());
            }, []),
            [et, en] = i.useState(0),
            [el, er] = i.useState(!1);
        i.useEffect(() => {
            if (0 === k.length) return void er(!1);
            let e = X.current?.querySelector("textarea");
            if (null != e) {
                let t = iG(e);
                null != t && en(t);
            }
            er(!0);
            let t = setTimeout(() => er(!1), iz);
            return () => clearTimeout(t);
        }, [k]);
        let es = i.useMemo(() => ({ "--custom-glow-x": `${et}px` }), [et]),
            eu = el ? ` ${iP.EB}` : "",
            eo = s
                ? ei.intl.string(ea.default.qqlUiW)
                : l
                  ? ei.intl.string(ea.default.mPB3eo)
                  : n
                    ? p
                        ? ei.intl.string(ea.default.knUjL3)
                        : g
                          ? ei.intl.string(ea.default.IevBEw)
                          : ei.intl.string(r ? ea.default["0BJa/0"] : ea.default.TEeU7z)
                    : ei.intl.string(ea.default.zZ9NgM),
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
            ep = F ?? H ?? eo,
            ex = "" === k && "" !== ep;
        return (0, a.jsxs)("form", {
            onSubmit: U,
            className: iP.DA,
            children: [
                T.length > 0
                    ? (0, a.jsx)("div", {
                          className: iP.lN,
                          children: T.map((e) => (0, a.jsx)(iT, { draft: e, onRemove: L }, e.localId)),
                      })
                    : null,
                (0, a.jsx)("span", { className: `${iP.wg} ${iP.LP}${eu}`, style: es, "aria-hidden": !0 }),
                (0, a.jsx)("span", { className: `${iP.wg} ${iP.L3}${eu}`, style: es, "aria-hidden": !0 }),
                (0, a.jsxs)("div", {
                    className: iP.VA,
                    ref: X,
                    children: [
                        (0, a.jsx)("input", {
                            ref: _,
                            type: "file",
                            multiple: !0,
                            onChange: W,
                            className: iP.nY,
                            tabIndex: -1,
                            "aria-hidden": !0,
                        }),
                        (0, a.jsx)(J.Y, {
                            targetElementRef: Z,
                            position: "top",
                            align: "left",
                            animation: J.Y.Animation.NONE,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, a.jsx)(Y.W, {
                                    "data-menu-migrated": !0,
                                    navId: "conjure-composer-attach",
                                    "aria-label": ei.intl.string(ei.t.d56gCa),
                                    onClose: t,
                                    onSelect: t,
                                    children: (0, a.jsxs)(Q.rX, {
                                        children: [
                                            iR.map((e) =>
                                                (0, a.jsx)(
                                                    Q.Dr,
                                                    {
                                                        id: e.id,
                                                        label: ei.intl.string(e.label),
                                                        iconLeft: e.icon,
                                                        leadingAccessory: { type: "icon", icon: e.icon },
                                                        action: () => ee(e.accept),
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                            null != m
                                                ? (0, a.jsx)(Q.Dr, {
                                                      id: "import-project",
                                                      label: ei.intl.string(ea.default["p/k5i7"]),
                                                      iconLeft: ib.q,
                                                      leadingAccessory: { type: "icon", icon: ib.q },
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
                                    ref: Z,
                                    type: "button",
                                    className: `${iP.Y0} ${iP.nu}`,
                                    disabled: !n,
                                    "aria-label": ei.intl.string(ei.t.d56gCa),
                                    "aria-haspopup": "menu",
                                    "aria-expanded": l,
                                    children: (0, a.jsx)(iy.PlusLargeIcon, {
                                        size: "refresh_sm",
                                        color: "currentColor",
                                        className: iP.Qu,
                                    }),
                                });
                            },
                        }),
                        ex
                            ? (0, a.jsx)("div", {
                                  ref: ef,
                                  className: iP.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(i$, { text: ep, offering: eh && null == F, typed: null != F }),
                              })
                            : null,
                        (0, a.jsx)(la.y, {
                            value: k,
                            onChange: (e) => A(e.currentTarget.value),
                            onKeyDown: K,
                            onPaste: V,
                            placeholder: ex ? "" : eo,
                            disabled: !n,
                            "aria-label": ei.intl.string(ea.default.ldNl9x),
                            "aria-describedby": ex ? em : void 0,
                            rows: 1,
                            className: iP.jp,
                        }),
                        ex ? (0, a.jsx)(y.A, { id: em, children: eo }) : null,
                        (0, a.jsx)("div", {
                            className: iP.Sz,
                            children:
                                r && null != o
                                    ? (0, a.jsx)(b.m, {
                                          text: ei.intl.string(ea.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, a.jsx)("button", {
                                              type: "button",
                                              className: `${iP.Y0} ${iP.$E}`,
                                              disabled: I,
                                              onClick: B,
                                              "aria-label": ei.intl.string(ea.default.wiguT0),
                                              children: (0, a.jsx)(rf.w, {
                                                  size: "custom",
                                                  width: 20,
                                                  height: 20,
                                                  color: "currentColor",
                                              }),
                                          }),
                                      })
                                    : v?.tierSettings != null && null != j
                                      ? (0, a.jsx)(td, {
                                            settings: v.tierSettings,
                                            tiers: v.tiers,
                                            choices: v.choices,
                                            disabled: !n,
                                            onChange: j,
                                            className: `${iP.Y0} ${iP.$E}`,
                                            icon: (0, a.jsx)(tl.R, {
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
                                  className: iP.fF,
                                  children: [
                                      (0, a.jsx)("div", { className: iP.MT }),
                                      (0, a.jsx)("button", {
                                          type: "submit",
                                          className: iP.rt,
                                          disabled: !z,
                                          "aria-label": ei.intl.string(ea.default.rxW2cl),
                                          children: (0, a.jsx)(ik.SendMessageIcon, {
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
    for (let e of iF) t.style.setProperty(e, n.getPropertyValue(e));
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let l = document.createElement("span");
    ((l.textContent = "\u200B"), t.appendChild(l));
    let r = l.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + r - e.scrollLeft);
}
iG.mirror = null;
var iq = n(52133),
    iU = n(155899),
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
                    (0, ex.BL)(t) &&
                    !(null != n.publishCta && a3(l))
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
    return (0, d.bG)([ek.Ay, r5.A], () => {
        let t = ek.Ay.getProject(e);
        return null == t ? "" : (r5.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
function iJ(e) {
    let { projectId: t, notice: n } = e;
    return "outdated" === n ? (0, a.jsx)(iQ, { projectId: t }) : (0, a.jsx)(iY, { projectId: t, notice: n });
}
function iY(e) {
    let { projectId: t, notice: n } = e,
        l = i.useContext(nr.bI),
        r = iX(t),
        s = (0, d.bG)([ek.Ay, V.A], () => {
            let e = ek.Ay.getProject(t);
            return null == e || "user" === e.install_scope || null == e.guild_id
                ? null
                : (V.A.getGuild(e.guild_id)?.name ?? null);
        }),
        u = i.useCallback(() => {
            null != l && (0, nr.ub)(t, l);
        }, [l, t]);
    return (0, a.jsx)(v.E, {
        variant: "text-md/normal",
        color: "text-default",
        children: ei.intl.format(
            (function (e, t) {
                if (!0 === e.channel_skipped) return ea.default.ev23Cw;
                if (!e.update) return null == t ? ea.default.MOrR29 : ea.default["/npn7F"];
                switch (e.surface) {
                    case "bot":
                        return ea.default.zfpeIL;
                    case "widget":
                        return ea.default.DxCfTh;
                    case "automod":
                        return ea.default["8ytGC3"];
                    case "activity":
                    case null:
                        return ea.default.WSmpBT;
                }
            })(n, s),
            { name: r, server: s ?? "", onOpen: u },
        ),
    });
}
function iQ(e) {
    let { projectId: t } = e,
        n = (0, nr.Ay)(t),
        [l, r] = i.useState(!1);
    return null == n
        ? null
        : l && (n.publishing || !n.isUpdate)
          ? (0, a.jsx)(iZ, {})
          : (0, a.jsx)(v.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: ei.intl.format(ea.default.X8tdbS, {
                    action: n.label,
                    onUpdate: () => {
                        (r(!0), iW.get(t)?.forEach((e) => e()), n.run("outdated_notice"));
                    },
                }),
            });
}
function iZ() {
    let e = ei.intl.string(ea.default.lexcBN),
        t = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = (0, d.bG)([iw.Ay], () => iw.Ay.useReducedMotion),
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
    return (0, a.jsxs)(v.E, {
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
                            "data-conjure-entrance": !0,
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
    si = n(531685),
    ss = n(7584);
let su = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function so(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function sc(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function sd(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = sc(e, t),
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
    if (so(r) && so(a)) {
        let n = 0,
            l = t;
        for (; n < 32 && so(sc(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function sf(e, t) {
    let { streaming: n } = t,
        l = (0, d.bG)([iw.Ay], () => iw.Ay.useReducedMotion),
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
                      for (; a > 0 && sd(t, a);) a--;
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
    let f = i.useRef(0),
        m = i.useRef(0);
    (i.useEffect(() => {
        if (o)
            return (
                (m.current = 0),
                (f.current = requestAnimationFrame(function e(t) {
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
                                    for (; l > t + 1 && n - l < 12 && su.has(e.charAt(l - 1));) l--;
                                    return su.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + i));
                                let u = s;
                                for (; u < t.length && u - s < 32 && sd(t, u);) u++;
                                return u;
                            })({ target: e.target, revealed: e.length, elapsedMs: n });
                        l !== e.length && s({ target: e.target, length: l });
                    }
                    f.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(f.current)
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
var sm = n(565645),
    sh = n(981879);
function sg(e) {
    let { emoji: t, label: n } = e;
    return (0, a.jsx)("div", {
        className: sh.H,
        children: (0, a.jsx)(sm.A, { emojiName: t, alt: n, size: "reaction" }),
    });
}
var sp = n(624479),
    sx = n(890377),
    sv = n(744898),
    sj = n(180227);
function sb(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: u()(sj.QE, { [sj.Rn]: t }),
              children: (0, a.jsx)(aL.Ay, {
                  children: n.map((e) =>
                      (0, a.jsx)(
                          aL.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function sy(e) {
    return ne.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: ei.intl.string(ei.t.JrGD7E), icon: sp.CopyIcon, onClick: () => (0, ne.C)(e) }]
        : [];
}
function sk(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: ei.intl.string(ea.default.CXtLD2),
                          tooltip: ei.intl.string(ea.default.DOb1HM),
                          icon: sx.V,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: ei.intl.string(ea.default.urZwpN),
                          icon: T.P,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, a.jsx)(sb, { groupStart: n, actions: [...r, ...sy(t)] });
}
function sw(e) {
    let { content: t, groupStart: n, onRestoreVersion: l } = e,
        r =
            null == l
                ? []
                : [{ id: "restore-version", label: ei.intl.string(ea.default.H8Jfhu), icon: sv.e, onClick: l }];
    return (0, a.jsx)(sb, { groupStart: n, actions: [...r, ...sy(t)] });
}
let sA = (0, ae.createChannelRecord)({ id: "conjure-builder", type: eg.rbe.DM }),
    sN = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function sS(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: u()(sj.Yq, { [sj.x1]: t }), children: e });
}
function sC(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function sE(e, t, n) {
    let { content: l } = (0, i9.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        r = i.useMemo(() => ({ message: e, channel: sA, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(i6.Ay, { className: n, message: e, content: l, compact: !1 })
          : (0, se.A)(r, l);
}
function sI(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, i8.m)(e, sA, t.usernameProfile, l),
        u = (0, i8.Jo)(t.avatarProfile, l),
        o = (0, d.bG)([sa.A], () => sa.A.getGuildId()),
        c = (0, d.bG)([tK.default], () => tK.default.getCurrentUser()),
        f = i.useCallback(
            (t) => {
                let n = tK.default.getUser(e.author.id) ?? e.author;
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
        renderPopout: f,
        guildId: o ?? void 0,
    };
}
function sM(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        s = i.useMemo(() => {
            let e = "" !== n.content ? (0, i3.Ay)(n, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == l
                ? e
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: sj.GV,
                              children: [
                                  (0, a.jsx)(A.x, {
                                      className: sj.Rj,
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
        { isReplyAuthorBlocked: u, isReplyAuthorIgnored: o } = (0, d.cf)(
            [sr.A],
            () => ({
                isReplyAuthorBlocked: sr.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: sr.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        c = (0, aP.X4)(n),
        f = (0, aP.X4)(t),
        m = sI(n);
    return (0, a.jsx)(i5.A, {
        repliedAuthor: c,
        baseAuthor: f,
        baseMessage: t,
        channel: sA,
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
function s_(e) {
    let { message: t, author: n } = e,
        l = sI(t);
    return (0, a.jsx)(i7.Ay, {
        message: t,
        channel: sA,
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
function sT(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, agentReaction: s, groupStart: u, onQueuedAction: o } = e;
    i.useEffect(() => tQ(l), [l]);
    let c = (0, d.bG)(
            [tK.default],
            () => tY(l, null != l ? tK.default.getUser(l) : null, tK.default.getCurrentUser()),
            [l],
        ),
        f = i.useMemo(() => (0, aP.FT)(c, null), [c]),
        m = i.useMemo(() => eJ(t), [t]),
        h = m?.body ?? t,
        g = i.useMemo(() => {
            if (null == c) return null;
            let e = (0, r9.Ay)({ channelId: sA.id, content: h, author: c });
            return (0, r8.rh)({ ...e, timestamp: sC(n, e.timestamp), state: eg.cmJ.SENT });
        }, [h, c, n]),
        p = (function (e) {
            if (null == e || "" === e) return null;
            let t = ss.Ay.convertSurrogateToName(e, !1);
            return "" === t ? null : ei.intl.formatToPlainString(ea.default.lxXLho, { emojiName: t });
        })(s);
    return null == g
        ? null
        : (0, a.jsx)(sP, {
              message: g,
              author: f,
              content: h,
              selected: m?.label,
              accessories:
                  null != s && null != p
                      ? (0, a.jsxs)(a.Fragment, { children: [r, (0, a.jsx)(sg, { emoji: s, label: p })] })
                      : r,
              groupStart: u,
              onQueuedAction: o,
          });
}
function sP(e) {
    let { message: t, author: n, content: l, selected: r, accessories: i, groupStart: s = !0, onQueuedAction: u } = e,
        o = sE(t, l);
    return (0, a.jsx)(i4.A, {
        className: sj.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(s_, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? o
                : (0, a.jsxs)("div", {
                      className: sj.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: sj.GV,
                              children: [
                                  (0, a.jsx)(A.x, {
                                      className: sj.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, a.jsx)("span", { className: sj.WO, children: o }),
                      ],
                  }),
        childrenAccessories: sS(i, "" !== l),
        childrenButtons: (0, a.jsx)(sk, { content: l, groupStart: s, onQueuedAction: u }),
    });
}
function sR(e) {
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
        { text: f, revealing: m } = sf(t, { streaming: (0, d.bG)([si.A], () => o && si.A.isFocused(), [o]) }),
        h = i.useMemo(() => (0, aP.FT)(null, null), []),
        g = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        p = r?.userId,
        x = (0, d.bG)(
            [tK.default],
            () => tY(p, null != p ? tK.default.getUser(p) : null, tK.default.getCurrentUser()),
            [p],
        ),
        v = i.useMemo(() => (null == r ? null : eJ(r.content)), [r]),
        j = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, r9.Ay)({ channelId: sA.id, content: v?.body ?? r.content, author: x });
            return (0, r8.rh)({ ...e, id: r.id, timestamp: sC(r.createdAt, e.timestamp), state: eg.cmJ.SENT });
        }, [r, v, x]),
        b = i.useMemo(() => (null == r ? void 0 : { channel_id: sA.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, r9.Ay)({ channelId: sA.id, content: "", author: sN })),
        k = i.useMemo(
            () =>
                (0, r8.rh)({
                    ...y,
                    timestamp: sC(n, y.timestamp),
                    state: eg.cmJ.SENT,
                    ...(null != b ? { type: eg.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        w = i.useMemo(() => k.set("content", f), [k, f]),
        A = i.useMemo(
            () => (0, st.A)({ message: k, channel: sA, author: g, guildId: void 0, isGroupStart: u }),
            [k, g, u],
        ),
        N = sE(w, f, sj.OS);
    return (0, a.jsxs)("div", {
        className: sj.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": m ? "true" : void 0,
        children: [
            (0, a.jsx)(i4.A, {
                className: sj.yE,
                author: g,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, a.jsx)(sM, { baseMessage: k, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: A,
                childrenMessageContent: N,
                childrenAccessories: sS(l, "" !== f),
                disableInteraction: !0,
            }),
            c,
            u
                ? (0, a.jsx)("span", {
                      className: sj.st,
                      "aria-hidden": "true",
                      children: (0, a.jsx)(rG.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
let sL = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    sD = new WeakMap();
var s$ = n(288539);
function sO(e, t, n) {
    return (0, a.jsx)(s$.A, { userId: e, content: `@${t}` }, n);
}
function sz(e) {
    let { projectId: t, event: n } = e,
        l = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => tQ(l), [l]);
            let r = (0, d.bG)([tK.default], () => (null == l ? null : tK.default.getUser(l)), [l]),
                a = (0, tV.tx)(r),
                s = iX(e),
                u =
                    (0, d.bG)([V.A], () => (null == t.guild_id ? null : V.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ?? ei.intl.string(ea.default.R1tPlP),
                o = null == r || null == a ? null : { user: a, userHook: (e, t) => n(r.id, a, t) };
            switch (t.type) {
                case "app_removed":
                    return null == o
                        ? ei.intl.format(ea.default.Lwsrhg, { app: s, server: u })
                        : ei.intl.format(ea.default.qqePfT, { app: s, server: u, ...o });
                case "bot_removed":
                    return null == o
                        ? ei.intl.format(ea.default.mT7EQG, { app: s, server: u })
                        : ei.intl.format(ea.default["lA/crI"], { app: s, server: u, ...o });
                case "preview_bot_removed":
                    return null == o
                        ? ei.intl.format(ea.default["4LVIeo"], { app: s, server: u })
                        : ei.intl.format(ea.default.YJOV6D, { app: s, server: u, ...o });
                case "app_channel_deleted": {
                    let e = t.channel_name ?? "";
                    return null == o
                        ? ei.intl.format(ea.default["4VQfid"], { channel: e, server: u })
                        : ei.intl.format(ea.default.RlMIJN, { channel: e, server: u, ...o });
                }
            }
        })(t, n, sO);
    return (0, a.jsx)(v.E, { variant: "text-md/normal", color: "text-default", children: l });
}
function sF(e) {
    let { onSelect: t, onClose: n = L.Z_, onRestoreVersion: l } = e;
    return (0, a.jsx)(Y.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": ei.intl.string(ei.t.ogxXGq),
        onSelect: t,
        children: (0, a.jsx)(Q.rX, {
            children: (0, a.jsx)(Q.Dr, {
                id: "restore-version",
                label: ei.intl.string(ea.default.H8Jfhu),
                icon: sv.e,
                action: l,
            }),
        }),
    });
}
function sG(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function sq(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
var sU = n(986109);
let sB = i.createContext(null);
function sH(e, t) {
    (0, iU.F)({ onConfirm: () => t(e) });
}
let sK = i.memo(function (e) {
        let {
                projectId: t,
                messages: n,
                emptyState: l,
                onPickIdea: r,
                onAskForIdeas: s,
                draftHasText: o,
                onApprovePlan: c,
                floatingSettingsMessageId: f,
                liveClarificationId: m,
                onRestoreVersion: h,
                scrollerRef: g,
                stickToBottomRef: p,
                pinned: x,
                onUnpin: j,
                handleRef: b,
                onShowsLatestChange: y,
            } = e,
            w = i.useRef(null),
            [A, N] = i.useState(null),
            S = i.useCallback((e) => {
                ((w.current = e), N(e));
            }, []),
            [C, E] = i.useState(null),
            I = i.useRef(0);
        i.useEffect(() => () => window.clearTimeout(I.current), []);
        let M = i.useCallback((e) => {
                (E(e), window.clearTimeout(I.current), (I.current = window.setTimeout(() => E(null), 1600)));
            }, []),
            _ = (0, d.bG)([ek.Ay], () => ek.Ay.getPublishStatus(t)?.state ?? null),
            T = (0, d.bG)([tK.default], () => tK.default.getCurrentUser()?.id),
            P = i.useMemo(() => {
                let e;
                return (function (e, t) {
                    let n = [],
                        l = (function (e) {
                            let t = new Set(),
                                n = !1;
                            for (let l = e.length - 1; l >= 0; l--) {
                                let r = e[l];
                                null != r &&
                                    null !=
                                        (function (e) {
                                            if ("assistant" !== e.role) return null;
                                            let t = (0, nK.lt)(e.steps);
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
                    for (let r of e) {
                        let e = l.has(r.render_id),
                            a = null != r.clarification && r.clarification.id === t,
                            i = sD.get(r);
                        if (null != i && i.superseded === e && i.liveCard === a) {
                            n.push(...i.planned);
                            continue;
                        }
                        let s = (function (e, t, n) {
                            let l = [];
                            function r(e, t) {
                                l.push({ row: e, groupable: { key: e.key, ...t } });
                            }
                            if ("user" === e.role)
                                return (
                                    r(
                                        { kind: "user", key: e.render_id, message: e, groupStart: !1 },
                                        { actor: "user", authorId: e.user_id, boundary: void 0 },
                                    ),
                                    l
                                );
                            if ("publish_notice" === e.kind) {
                                let t = `${e.render_id}:publish`;
                                return (
                                    r(
                                        { kind: "publishNotice", key: t, message: e, groupStart: !1 },
                                        { actor: "assistant", boundary: t },
                                    ),
                                    l
                                );
                            }
                            if ("project_event" === e.kind) {
                                let t = `${e.render_id}:projectEvent`;
                                return (
                                    r(
                                        { kind: "projectEvent", key: t, message: e, groupStart: !1 },
                                        { actor: "assistant", boundary: t },
                                    ),
                                    l
                                );
                            }
                            let a = !(0, ex.BL)(e),
                                i = rp({
                                    steps: e.steps,
                                    content: e.content,
                                    hasProposal: null != e.proposal,
                                    hasLiveClarification: n,
                                    hasAttachments: (e.attachments?.length ?? 0) > 0,
                                }),
                                s = i.lastStreamedMessage?.key,
                                u = (0, nK.C6)(e.steps, { turnActive: a }),
                                { lastWork: o, open: c } = (0, nK.CT)(u, { turnActive: a }),
                                d = u.at(-1)?.index,
                                f = !1;
                            for (let n of u) {
                                if (null != n.prose && sL.test(n.prose.content)) f = !0;
                                else if (null != n.prose && n.prose.key !== i.replyKey) {
                                    let t = `${e.render_id}:${n.key}`;
                                    r(
                                        {
                                            kind: "prose",
                                            key: t,
                                            message: e,
                                            groupStart: !1,
                                            content: n.prose.content,
                                            hostsAttachments:
                                                "streamed" === i.attachmentsHost &&
                                                n.prose.key === s &&
                                                null != e.attachments,
                                            streaming: a && n.index === d && !n.hasWork,
                                        },
                                        { actor: "assistant", boundary: t },
                                    );
                                }
                                (n.hasWork || n.hasTodos) &&
                                    r(
                                        {
                                            kind: "activity",
                                            key: `${e.render_id}:work-${n.index}`,
                                            message: e,
                                            groupStart: !1,
                                            segment: n.index,
                                            active: n.index === c,
                                            closed: n.index !== c,
                                            ...(null != n.durationMs ? { segmentDurationMs: n.durationMs } : {}),
                                            reportsDuration: n.index === o,
                                            hostsChecklist: n.hasTodos,
                                            turnActive: nV(e),
                                            checklistSuperseded: n.hasTodos && t,
                                        },
                                        { actor: null, boundary: void 0 },
                                    );
                            }
                            let m = sL.test(e.content ?? "");
                            if (
                                (!0 === e.interrupted || f || m
                                    ? r(
                                          {
                                              kind: "interrupted",
                                              key: `${e.render_id}:interrupted`,
                                              message: e,
                                              groupStart: !1,
                                          },
                                          { actor: null, boundary: void 0 },
                                      )
                                    : u.every((e) => !e.hasTodos) &&
                                      (e.todos?.length ?? 0) > 0 &&
                                      r(
                                          {
                                              kind: "legacyTodos",
                                              key: `${e.render_id}:todos`,
                                              message: e,
                                              groupStart: !1,
                                              checklistSuperseded: t,
                                          },
                                          { actor: null, boundary: void 0 },
                                      ),
                                (i.showsClosingMessage && !m) ||
                                    null != e.proposal ||
                                    (null != e.clarification && !n) ||
                                    null != e.restoreProposal ||
                                    (!a &&
                                        (null != e.ideas ||
                                            null != e.publishCta ||
                                            null != e.secretRequest ||
                                            null != e.settingsRequest)) ||
                                    "standalone" === i.attachmentsHost)
                            ) {
                                let t = `${e.render_id}:closing`;
                                r(
                                    {
                                        kind: "closing",
                                        key: t,
                                        message: e,
                                        groupStart: !1,
                                        active: a,
                                        attachmentsHost: i.attachmentsHost,
                                        content: i.closingContent,
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
                        })(r, e, a);
                        (sD.set(r, { superseded: e, liveCard: a, planned: s }), n.push(...s));
                    }
                    let r = (function (e) {
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
                    })(n.map((e) => e.groupable));
                    return n.map((e, t) => ({ ...e.row, groupStart: r[t] ?? !0 }));
                })(
                    ((e = (function (e, t) {
                        if ("unpublished" !== t) return null;
                        for (let t = e.length - 1; t >= 0; t--) if (null != e[t].publishCta) return e[t].id;
                        return null;
                    })(n, _)),
                    n.every((t) => null == t.publishCta || t.id === e)
                        ? n
                        : n.map((t) => {
                              if (null == t.publishCta || t.id === e) return t;
                              let n = a4.get(t);
                              return (null == n && ((n = { ...t, publishCta: null }), a4.set(t, n)), n);
                          })),
                    m,
                );
            }, [n, _, m]),
            R = i.useMemo(() => P.map((e) => e.key), [P]),
            [L, D] = i.useState(null),
            $ = (function (e, t, n) {
                if (null == t) return sG(e, e.length - 60, e.length);
                let l = null == t.endKey,
                    r = l ? e.length : sq(e, t.endKey, t.end - 1) + 1,
                    a = sq(e, t.startKey, t.start);
                return (l && n && r - a > 120 && (a = r - 60), sG(e, a, r));
            })(R, L, x),
            O = i.useRef($),
            z = i.useRef(R),
            F = i.useRef(P),
            G = i.useRef(null),
            q = i.useRef(null),
            U = i.useRef(new Set()),
            B = i.useCallback(() => {
                let e = g.current?.getScrollerNode(),
                    t = w.current;
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
                G.current = null != i && null != s ? { key: s, offset: i.getBoundingClientRect().top - n } : null;
            }, [g]),
            H = i.useCallback(() => {
                let e = g.current?.getScrollerNode();
                if (null == e) return;
                let n = (function (e, t, n) {
                    let { nearTop: l, nearBottom: r, pinned: a } = n;
                    if (r && null != t.endKey) {
                        let n;
                        return ((n = Math.min(e.length, t.end + 30)), sG(e, Math.max(t.start, n - 120), n));
                    }
                    if (!l) return null;
                    if (0 === t.start) return "older";
                    if (!a && !r) {
                        let n, l;
                        return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), sG(e, n, l));
                    }
                    let i = Math.max(t.start - 30, t.end - 120);
                    return i < t.start ? sG(e, i, t.end) : null;
                })(z.current, O.current, {
                    nearTop: e.scrollTop < 600,
                    nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                    pinned: p.current,
                });
                "older" === n ? (0, ee.P6)(t) : null != n && D(n);
            }, [g, p, t]);
        i.useImperativeHandle(
            b,
            () => ({
                handleScroll() {
                    (B(),
                        D((e) => {
                            let t = O.current;
                            return null != e && e.startKey === t.startKey && e.endKey === t.endKey ? e : t;
                        }),
                        H());
                },
                recordAnchor: B,
                showLatest(e) {
                    ((q.current = e ?? null), D(null));
                },
            }),
            [B, H],
        );
        let K = i.useRef(null),
            V = i.useCallback(
                (e) => {
                    var n;
                    let l;
                    K.current = null;
                    let r = w.current?.querySelector(`[data-conjure-message="${e}"]`);
                    if (null != r) {
                        (j(), D(O.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), M(e));
                        return;
                    }
                    let a = F.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                    if (-1 === a) {
                        (0, ee.P6)(t) && (K.current = e);
                        return;
                    }
                    (j(),
                        (q.current = () => {
                            (w.current
                                ?.querySelector(`[data-conjure-message="${e}"]`)
                                ?.scrollIntoView({ block: "center" }),
                                M(e));
                        }),
                        D(((n = z.current), sG(n, (l = Math.max(0, a - 30)), l + 60))));
                },
                [M, j, t],
            );
        (i.useEffect(() => {
            let e = K.current;
            null != e && V(e);
        }, [P, V]),
            i.useLayoutEffect(() => {
                if (null == A) return;
                let e = A.getBoundingClientRect().height,
                    t = new ResizeObserver((t) => {
                        let [n] = t,
                            l = n?.contentRect.height;
                        null != l && l !== e && ((e = l), p.current ? g.current?.scrollToBottom() : B());
                    });
                return (t.observe(A), () => t.disconnect());
            }, [A, B, g, p]));
        let W = null == $.endKey;
        (i.useEffect(() => y?.(W), [W, y]),
            i.useLayoutEffect(() => {
                ((O.current = $), (z.current = R), (F.current = P));
            }),
            i.useLayoutEffect(() => {
                let e = g.current?.getScrollerNode(),
                    t = w.current;
                if (null != e && null != t) {
                    let n = G.current;
                    if (p.current) g.current?.scrollToBottom();
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
                    let l = q.current;
                    ((q.current = null), l?.(), B(), H());
                }
                U.current = new Set(R);
            }, [P, R, $.start, $.end, g, p, B, H]));
        let X = n.at(-1),
            J = (function (e, t, n) {
                var l;
                let r = (0, nr.Ay)(e),
                    a = (0, iB.A)(),
                    s = (function (e) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let n = e[t];
                            if ("publish_notice" !== n.kind && "project_event" !== n.kind) {
                                if ("user" === n.role) return null;
                                if ((0, ex.BL)(n)) return n;
                                if (!(0, ex.B0)(e, t)) break;
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
            Y = i.useCallback(
                (e) => {
                    switch (e) {
                        case "outdated":
                            return (0, a.jsx)(sR, {
                                groupStart: !1,
                                content: "",
                                accessories: (0, a.jsx)(iJ, { projectId: t, notice: "outdated" }),
                            });
                        case "ideas":
                            return (0, a.jsx)("div", {
                                className: sU.u$,
                                children: (0, a.jsx)(sR, {
                                    content: ei.intl.string(ea.default.s96AWB),
                                    accessories: (0, a.jsx)(it, { onAsk: s }),
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
                            let n = e[t];
                            if ("assistant" === n.role) {
                                if (!(0, ex.BL)(n) || "plan_implemented" === n.kind) return null;
                                if (null != n.proposal) return n.render_id;
                            }
                        }
                        return null;
                    })(n),
                [n],
            ),
            Z = i.useMemo(
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
            et = i.useMemo(
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
            en = i.useMemo(
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
            el =
                (X?.role !== "assistant" || null == X.awaitingUser || null == X.secretRequest
                    ? null
                    : (0, ex.BL)(X)
                      ? X.awaitingUser
                      : null) ?? void 0,
            er = (0, d.bG)([ee.Ay], () => ee.Ay.getSettings(t)?.secrets, [t]),
            es = i.useMemo(
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
                                            t === ei.intl.string(ea.default.UGqnoV) ||
                                            t === ei.intl.string(ea.default.sMQt5O)
                                        );
                                    })(s);
                                continue;
                            }
                            let u = s.secretRequest?.fields ?? [];
                            if (0 === u.length || !(0, ex.BL)(s)) continue;
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
                    })(n, er),
                [n, er],
            );
        if (0 === n.length) {
            if ("loading" === l)
                return (0, a.jsx)("ol", {
                    className: u()(sU.x7, sU.jH),
                    "aria-busy": !0,
                    children: (0, a.jsx)("li", { className: sU.Ub, children: (0, a.jsx)(k.y, {}) }),
                });
            let e = "unavailable" === l ? ea.default.Td4Sf4 : ea.default.V1QiNz;
            return (0, a.jsx)("ol", {
                className: sU.x7,
                children: (0, a.jsx)(sJ, {
                    role: "assistant",
                    children: (0, a.jsx)(sR, { content: ei.intl.string(e) }),
                }),
            });
        }
        return (0, a.jsx)(sB.Provider, {
            value: U,
            children: (0, a.jsxs)("ol", {
                ref: S,
                className: sU.x7,
                children: [
                    P.slice($.start, $.end).map((e) => {
                        let n = e.message;
                        if ("closing" !== e.kind)
                            return (0, a.jsx)(
                                sV,
                                {
                                    row: e,
                                    projectId: t,
                                    highlighted: "user" === e.kind && C === n.id,
                                    currentUserId: "user" === e.kind ? T : void 0,
                                },
                                e.key,
                            );
                        let l = n === X;
                        return (0, a.jsx)(
                            sV,
                            {
                                row: e,
                                projectId: t,
                                highlighted: !1,
                                replyTo: null != n.in_reply_to ? en.get(n.in_reply_to) : void 0,
                                onJumpTo: V,
                                planVersion: Z.get(n.render_id),
                                pickedIdeaIds: et.get(n.render_id),
                                secretRequestAwaiting: l ? el : void 0,
                                secretRequestStatus: es.get(n.render_id),
                                settingsFloating: n.id === f,
                                isNewest: l,
                                onPickIdea: r,
                                onApprovePlan: n.render_id === Q ? c : void 0,
                                onRestoreVersion: h,
                            },
                            e.key,
                        );
                    }),
                    null != el && W
                        ? (0, a.jsx)(sJ, {
                              role: "assistant",
                              continuation: !0,
                              children: (0, a.jsx)(sR, {
                                  groupStart: !1,
                                  content: "",
                                  accessories: (0, a.jsx)(v.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: ei.intl.string(ea.default.YR8A2v),
                                  }),
                              }),
                          })
                        : null,
                    W
                        ? (0, a.jsx)("li", {
                              role: "none",
                              className: sU.q3,
                              children: (0, a.jsx)(i2, { reminder: J, renderReminder: Y }),
                          })
                        : null,
                ],
            }),
        });
    }),
    sV = i.memo(
        function (e) {
            let { row: t, projectId: n, highlighted: l, currentUserId: r, ...i } = e,
                s = t.message;
            switch (t.kind) {
                case "user": {
                    let e = null != s.attachments && s.attachments.length > 0 ? s.attachments : null;
                    return (0, a.jsx)(sJ, {
                        rowKey: t.key,
                        role: "user",
                        anchorId: s.id,
                        highlighted: l,
                        continuation: !t.groupStart,
                        children: (0, a.jsx)(sT, {
                            groupStart: t.groupStart,
                            content: s.content,
                            createdAt: s.created_at,
                            userId: s.user_id,
                            agentReaction: s.agentReaction,
                            accessories: null != e ? (0, a.jsx)(iu.A, { projectId: n, attachments: e }) : void 0,
                            onQueuedAction: (function (e, t, n) {
                                if (
                                    "user" === t.role &&
                                    "queued" === t.disposition &&
                                    null != t.user_id &&
                                    t.user_id === n
                                )
                                    return (n) => (0, ee.tp)(e, t.id, n);
                            })(n, s, r),
                        }),
                    });
                }
                case "prose":
                    return (0, a.jsx)(sJ, {
                        rowKey: t.key,
                        role: "assistant",
                        continuation: !t.groupStart,
                        children: (0, a.jsx)(sR, {
                            groupStart: t.groupStart,
                            content: t.content,
                            streaming: t.streaming,
                            createdAt: s.created_at,
                            accessories:
                                t.hostsAttachments && null != s.attachments
                                    ? (0, a.jsx)(iu.A, { projectId: n, attachments: s.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, a.jsx)(sJ, {
                        rowKey: t.key,
                        role: "assistant",
                        children: (0, a.jsx)(ih, {
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
                    return (0, a.jsx)(sJ, {
                        rowKey: t.key,
                        role: "assistant",
                        continuation: !t.groupStart,
                        children: (0, a.jsx)(sR, {
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
                    return (0, a.jsx)(sJ, {
                        rowKey: t.key,
                        role: "assistant",
                        continuation: !t.groupStart,
                        children: (0, a.jsx)(sR, {
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
                    return (0, a.jsx)(sJ, {
                        rowKey: t.key,
                        role: "assistant",
                        children: (0, a.jsx)(ih, { projectId: n, interrupted: !0, steps: s.steps }),
                    });
                case "legacyTodos":
                    return (0, a.jsx)(sJ, {
                        rowKey: t.key,
                        role: "assistant",
                        children: (0, a.jsx)(ih, {
                            projectId: n,
                            steps: sW,
                            active: !1,
                            checklistSuperseded: t.checklistSuperseded,
                            todos: s.todos,
                            provisionalTodo: s.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, a.jsx)(sX, { row: t, projectId: n, ...i });
            }
        },
        function (e, t) {
            return (
                (0, iq.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, iq.A)(e.row, t.row, ["message"]) &&
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
                (0, iq.A)(e.replyTo, t.replyTo) &&
                (0, iq.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    sW = [];
function sX(e) {
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
        x = null != p && null != h ? () => sH(p, h) : void 0,
        v = g.in_reply_to,
        j = g.restoreProposal;
    return (0, a.jsx)(sJ, {
        rowKey: t.key,
        role: "assistant",
        continuation: !t.groupStart,
        onContextMenu:
            null != x
                ? (e) => {
                      (0, L.jA)(e, (e) => (0, a.jsx)(sF, { ...e, onRestoreVersion: x }));
                  }
                : void 0,
        children: (0, a.jsx)(sR, {
            groupStart: t.groupStart,
            buttons: (0, a.jsx)(sw, { groupStart: t.groupStart, content: t.content, onRestoreVersion: x }),
            content: t.content,
            createdAt: g.created_at,
            replyTo: l,
            onJumpToReplied: null != v && null != r ? () => r(v) : void 0,
            accessories: (0, a.jsx)(ig, {
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
                              sH(
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
function sJ(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: o = !1,
            onContextMenu: c,
        } = e,
        d = i.useContext(sB),
        [f, m] = i.useState(() => iw.Ay.useReducedMotion || (null != l && d?.current.has(l) === !0)),
        h = i.useCallback((e) => {
            e.target === e.currentTarget && m(!0);
        }, []);
    return (0, a.jsx)("li", {
        onContextMenu: c,
        onAnimationEnd: f ? void 0 : h,
        "data-conjure-entrance": !0,
        "data-role": t,
        "data-conjure-message": r,
        "data-conjure-row-key": l,
        className: u()(sU.xk, { [sU.g5]: f, [sU.Qo]: s, [sU.q3]: o }),
        children: n,
    });
}
let sY = [ea.default["AX+5lk"], ea.default.VAU6A7, ea.default["1emysd"], ea.default.EXHX3L, ea.default.ChslmX];
function sQ(e) {
    return sY.some((t) => ei.intl.string(t) === e);
}
function sZ(e) {
    switch (e) {
        case "connecting":
            return ei.intl.string(ea.default["ECl+Dx"]);
        case "closed":
            return ei.intl.string(ea.default.mQZSp1);
        case "failed":
            return ei.intl.string(ea.default.xzJSZ6);
    }
}
var s0 = n(823376),
    s1 = n(187447);
function s2(e) {
    let { activity: t, id: n } = e,
        l = (0, iB.A)(),
        { text: r, revealing: s } = sf(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        o = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [r]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: s1.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(nU.Ch, {
                ref: o,
                className: s1.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: u()(id.PT, s1.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: rm.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var s3 = n(53659);
function s4(e) {
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
                ? ea.default["1jqaAc"]
                : r
                  ? ea.default.M4KI5F
                  : a
                    ? sY[0]
                    : l
                      ? ea.default.mKK6wB
                      : n
                        ? ea.default.xnCAaP
                        : s
                          ? ea.default.izrt52
                          : ea.default.L9EDub;
        })({ activity: t, compacting: n, saving: l, restoring: r, recalling: s, controlling: o }),
        x = ei.intl.string(p),
        b = p === sY["0"],
        [y, k] = i.useState(c ?? x),
        w = (0, iB.A)();
    (!l && (w || b)) || y === x || k(x);
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
    let C = i.useRef(b),
        E = i.useRef(0);
    (i.useEffect(() => {
        ((C.current = b), !b && sQ(S.current) && k(A.current));
    }, [b]),
        i.useEffect(() => {
            if (!w) return;
            let e = 0,
                t = 0;
            function n() {
                if (C.current) {
                    var e;
                    ((E.current = sQ(S.current) ? E.current + 1 : 0),
                        k(((e = E.current), ei.intl.string(sY[e % sY.length]))));
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
    return (0, a.jsx)(J.Y, {
        targetElementRef: f,
        position: "top",
        align: "left",
        shouldShow: _,
        onRequestClose: P,
        renderPopout: () => (0, a.jsx)(s2, { id: m, activity: t }),
        children: () =>
            (0, a.jsxs)(j.D, {
                innerRef: f,
                className: u()(s3.hF, I && s3.Xd),
                "aria-label": ei.intl.string(r ? ea.default.qqlUiW : b ? sY["0"] : ea.default["Uuj/gh"]),
                "aria-expanded": _,
                "aria-describedby": _ ? m : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": ei.intl.string(p),
                onClick: T,
                children: [
                    (0, a.jsx)("span", {
                        className: s3.bl,
                        children: (0, a.jsx)(s0.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: s3.xu,
                        "aria-hidden": !!o || !!b || void 0,
                        children: w
                            ? (0, a.jsx)(eI.o, {
                                  ref: N,
                                  text: y,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  duration: 1e3,
                                  delay: null,
                                  className: s3.yE,
                              })
                            : (0, a.jsx)(v.E, {
                                  tag: "span",
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  className: s3.yE,
                                  children: y,
                              }),
                    }),
                ],
            }),
    });
}
let s6 = { second: 1e3, minute: 6e4 };
function s7(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let n;
            if (null == e) return;
            let r = s6[t];
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
var s5 = n(719374);
function s8(e) {
    let { startedAt: t } = e,
        n = s7(t);
    return (0, a.jsx)(v.E, {
        tag: "span",
        variant: "text-xs/medium",
        color: "text-muted",
        "aria-hidden": !0,
        className: s5.$,
        "data-conjure-turn-timer": !0,
        children: (0, rh.C7)(n),
    });
}
function s9(e) {
    let { startedAt: t } = e,
        n = s7(t, "minute");
    return (0, a.jsx)(y.A, { role: "timer", children: (0, rh.Us)(n) });
}
var ue = n(436804);
function ut(e) {
    return e.toLocaleString();
}
function un(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: ue.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: ue.mf,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [ut((0, X.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(v.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    ut(n.input_tokens),
                    " in \xb7 ",
                    ut(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${ut(n.cache_creation_input_tokens)} cache write \xb7 ${ut(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function ul(e) {
    let { project: t } = e,
        n = (0, X.wU)(t.compaction),
        l = (0, X.wU)(t.classifier),
        r = (0, X.wV)(t.orchestrator, t.codegen),
        i = (0, X.wV)(r, n);
    return (0, a.jsxs)("div", {
        className: ue.si,
        role: "dialog",
        "aria-label": ei.intl.string(ea.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: ue.Q$,
                children: (0, a.jsxs)("div", {
                    className: ue.mf,
                    children: [
                        (0, a.jsxs)(v.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [ut((0, X.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(un, { label: ei.intl.string(ea.default["9Sj3SX"]), usage: r }),
            (0, a.jsx)(un, { label: ei.intl.string(ea.default.ANCEo3), usage: n }),
            (0, a.jsx)(un, { label: ei.intl.string(ea.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsxs)("div", {
                className: ue.mf,
                children: [
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: ei.intl.string(ea.default["8OUg09"]),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, X.sj)(i) ? "\u2014" : `${Math.round(100 * (0, X.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function ur(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(J.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(ul, { project: t }),
        children: (e) =>
            (0, a.jsx)(j.D, {
                innerRef: n,
                className: ue.Y$,
                "aria-label": ei.intl.string(ea.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(rX.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var ua = n(997421);
function ui(e) {
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
        h = (0, th.Zv)(n),
        [g, p] = i.useState(null),
        x = i.useCallback((e) => p(sQ(e) || e === ei.intl.string(ea.default.mKK6wB) ? null : e), []),
        j =
            null == f
                ? null
                : ((t = (0, X.a7)(f.cost_usd)),
                  {
                      text: ei.intl.formatToPlainString(ea.default.gMuw5d, { runes: t.toLocaleString() }),
                      aria: ei.intl.formatToPlainString(ea.default.Z4LvGa, { runes: t, turns: f.turns }),
                  }),
        b = l && null != r;
    return (0, a.jsxs)("div", {
        className: ua.jf,
        children: [
            (0, a.jsxs)("div", {
                className: ua.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    l || s || u || h || !0 === d
                        ? (0, a.jsx)(s4, {
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
                    b ? (0, a.jsx)(s8, { startedAt: r }) : null,
                ],
            }),
            b ? (0, a.jsx)(s9, { startedAt: r }) : null,
            null == f || null == j
                ? null
                : (0, a.jsxs)("span", {
                      className: ua.BP,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": j.aria,
                              children: j.text,
                          }),
                          (0, a.jsx)(ur, { project: f }),
                      ],
                  }),
            "open" === m
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === m ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": ei.intl.formatToPlainString(ea.default["tCo+ZM"], { status: sZ(m) }),
                      "data-conjure-conn": !0,
                      "data-state": m,
                      className: ua.XF,
                      children: sZ(m),
                  }),
        ],
    });
}
let us = ["wheel", "touchstart", "pointerdown", "keydown"];
var uu = n(698638),
    uo = n(608711);
let uc = [ei.intl.string(ea.default["9w+Chc"]), ei.intl.string(ea.default.WAvmdq), ei.intl.string(ea.default.SKsrzl)];
function ud(e) {
    var t;
    let { projectId: n, restoreState: l, onRestoreVersion: r, onImportProject: s } = e,
        u = (0, d.bG)([ex.Ay], () => ex.Ay.getMessages(n), [n]),
        o = (0, d.bG)([ee.Ay], () => ee.Ay.getConnState(n), [n]),
        c = (0, d.bG)([ee.Ay], () => ee.Ay.isChatStopped(n), [n]),
        f = (0, d.bG)([ex.Ay], () => ex.Ay.getProjectUsage(n), [n]),
        m = (0, d.bG)([ex.Ay], () => ex.Ay.getThinkingActivity(n), [n]),
        h = (0, d.bG)([ex.Ay], () => ex.Ay.isCompacting(n), [n]),
        g = (0, d.bG)([ex.Ay], () => ex.Ay.isSaving(n), [n]),
        p = (0, d.bG)([ee.Ay], () => ee.Ay.getModelSettings(n), [n]),
        x = i.useRef(null),
        j = i.useRef(null),
        y = i.useRef(null),
        {
            stickToBottomRef: k,
            pinned: A,
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
                    for (let e of us) t.addEventListener(e, o, { passive: !0 });
                    return () => {
                        for (let e of us) t.removeEventListener(e, o);
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
        })(j),
        P = i.useCallback(() => {
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
            (C(), I.current ? e() : y.current?.showLatest(e));
        }, [C, I]),
        R = i.useCallback(() => {
            (_(), y.current?.handleScroll());
        }, [_]);
    (i.useLayoutEffect(() => {
        let e = x.current;
        if (null == e) return;
        let t = j.current?.getScrollerNode(),
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
                r && (k.current ? j.current?.scrollToBottom() : y.current?.recordAnchor());
            });
        return (r.observe(e), null != t && r.observe(t), () => r.disconnect());
    }, [k]),
        i.useEffect(() => {
            (0, ee.Hc)(n);
        }, [n]),
        (0, rn.E1)(n));
    let L = e7(n),
        D = (function (e) {
            let t = (0, nr.Ay)(e),
                n = t?.guildId ?? null,
                l = (0, d.bG)([V.A], () => (null == n ? null : (V.A.getGuild(n)?.name ?? null))),
                [r, a] = i.useState(null),
                s = t?.missingSurface ?? null;
            return null == s || r === e
                ? null
                : {
                      message: ei.intl.format("channel" === s ? ea.default["1cm4fj"] : ea.default.Lm7IRC, {
                          server: l ?? "",
                      }),
                      onDismiss: () => a(e),
                  };
        })(n),
        $ = i.useCallback(
            (e, t) => {
                (0, ee.dv)(n, e, t);
            },
            [n],
        ),
        O = i.useCallback(
            (e, t) => {
                0 === L.annotations.length
                    ? $(e, t)
                    : ($(
                          (function (e) {
                              let { annotations: t, metaComment: n, context: l } = e,
                                  r = t.filter((e) => eB(e.comment)),
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
                                      a.push(`${t + 1}. ${eV(e.target)}`),
                                      a.push(
                                          `   Feedback: ${(n = e.comment.trim()).length <= 1e3 ? n : `${n.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let i = n.trim();
                              return ("" !== i && (a.push(""), a.push(`Note for the whole batch: ${i}`)), a.join("\n"));
                          })({ annotations: L.annotations, metaComment: e, context: L.context }),
                          t,
                      ),
                      e2(n));
            },
            [L, $, n],
        ),
        z = i.useCallback(() => (0, ee.fu)(n), [n]),
        F = i.useCallback((e) => lW(n, e.implementation_prompt), [n]),
        [G, q] = (function (e) {
            let [t, n] = i.useState(() => rd(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? rd(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(n),
        U = i.useCallback(() => $(ei.intl.string(ea.default["t5CN3+"])), [$]),
        B = i.useCallback((e, t, l) => lW(n, e, { clarificationAnswers: t, attachments: l }), [n]),
        H = i.useCallback((e) => (0, ee.XZ)(n, e), [n]),
        K = i.useCallback((e) => (0, ee.vX)(n, e), [n]),
        W = i.useCallback((e) => iM(n, "chat", Array.from(e), K), [n, K]),
        X = i.useCallback(() => lW(n, ei.intl.string(ea.default.Zc7gML)), [n]),
        J = l?.status === "restoring",
        Y = "open" === o && !c && !J,
        Q = u[u.length - 1],
        Z = null != Q && "assistant" === Q.role && null != Q.proposal,
        [et, en] = i.useState(null),
        el = Q?.clarification != null && Q.clarification.id !== et ? Q.clarification : null,
        er = i.useCallback(() => {
            null != el && en(el.id);
        }, [el]),
        es = (0, d.bG)([ee.Ay], () => ee.Ay.getSettings(n), [n]),
        [eu, eo] = i.useState(null),
        ec =
            null != Q &&
            "assistant" === Q.role &&
            null != Q.settingsRequest &&
            (0, ex.BL)(Q) &&
            Q.id !== eu &&
            ((t = Q.settingsRequest),
            null != es &&
                (t.keys ?? []).some((e) => {
                    let t = es.schema.find((t) => t.key === e);
                    if (null == t) return !1;
                    if ("secret" === t.type) return es.secrets.find((t) => t.name === e)?.set !== !0;
                    let n = es.values[e];
                    return null == n || "" === n;
                }))
                ? Q
                : null,
        ed = ec?.settingsRequest ?? null,
        ef = i.useCallback(() => {
            null != ec && eo(ec.id);
        }, [ec]),
        em = null != ed,
        [eh, eg] = i.useState(null),
        ep = el?.id ?? ec?.id;
    i.useLayoutEffect(() => {
        let e = j.current?.getScrollerNode(),
            t = eh?.firstElementChild;
        if (null == eh || null == e || !(0, tT.vq)(t, HTMLElement) || null == ep) return;
        function n() {
            k.current && j.current?.scrollToBottom();
        }
        let l = new ResizeObserver(() => {
            let l = e.getBoundingClientRect().bottom - eh.getBoundingClientRect().top - t.offsetTop;
            (e.style.setProperty("--custom-conjure-docked-card-inset", `${Math.max(0, Math.round(l))}px`), n());
        });
        return (
            l.observe(t),
            l.observe(e, { box: "border-box" }),
            () => {
                (l.disconnect(), e.style.removeProperty("--custom-conjure-docked-card-inset"), n());
            }
        );
    }, [eh, ep, j, k]);
    let ev = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: (0, d.bG)([ex.Ay], () => ex.Ay.hasLoadedHistory(n), [n]),
            historyUnavailable: (0, d.bG)([ex.Ay], () => ex.Ay.isHistoryUnavailable(n), [n]),
            connState: o,
        }),
        ej = "loading" === ev && 0 === u.length,
        eb = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < n.length; t++) e = (31 * e + n.charCodeAt(t)) % 0x7fffffff;
            return uc[e % uc.length];
        }, [n]),
        ey = Z ? ei.intl.string(ea.default.Zc7gML) : "greeting" === ev && 0 === u.length ? eb : null,
        ek = i.useMemo(() => {
            for (let e = u.length - 1; e >= 0; e--) {
                let t = u[e];
                if ("assistant" === t.role && !(0, ex.BL)(t)) return t;
            }
        }, [u]),
        ew = null != ek,
        eA =
            null != ek
                ? (function (e) {
                      let t = e.turn_id ?? e.steps.find((e) => null != e.turn_id)?.turn_id;
                      if (null != t && /^\d+$/.test(t)) {
                          let e = rt.default.extractTimestamp(t);
                          if (Number.isFinite(e) && e > 0) return e;
                      }
                      return e.created_at;
                  })(ek)
                : void 0,
        eN = Z && Y ? X : void 0,
        eS = i.useCallback(() => lW(n, ei.intl.string(ea.default.EMgIuY)), [n]),
        [eC, eE] = i.useState(null),
        [eI, eM] = i.useState(ew);
    (eI !== ew && (eM(ew), ew || eE(null)),
        i.useEffect(() => {
            if (!ew) return;
            let e = j.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? eE(null)
                        : eE(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (n.observe(t), () => n.disconnect());
        }, [ew, ek?.steps, E]));
    let e_ = E ? eC : "bottom",
        eT = i.useMemo(() => (null != ek ? (0, nW.b)(ek.steps) : ""), [ek]),
        eP = i.useMemo(() => (null != ek ? ((0, nK.lt)(ek.steps) ?? ek.todos) : void 0), [ek]),
        eR = ek?.provisionalTodo,
        eL = null != ek && nV(ek),
        eD = i.useMemo(() => {
            var e;
            return null != ek ? ((e = ek.steps), im((0, nK.Jf)(e, !0).tasks)) : void 0;
        }, [ek]);
    return (0, a.jsxs)("section", {
        ref: x,
        "data-conjure-chat": !0,
        className: uo.TE,
        children: [
            Y
                ? (0, a.jsx)(nH.A, {
                      title: ei.intl.string(ea.default.gy7byi),
                      description: ei.intl.string(ea.default["dkv/WO"]),
                      icons: uu.ir,
                      onDrop: W,
                  })
                : null,
            (0, a.jsx)(ln, {
                onJumpToActivity: P,
                line: eT,
                placement: ew && "top" === e_ ? "top" : null,
                todos: eP,
                todosLive: eL,
                provisionalTodo: eR,
                agents: eD,
            }),
            (0, a.jsxs)("div", {
                className: uo.JX,
                children: [
                    (0, a.jsx)(nU.Ch, {
                        ref: j,
                        onScroll: R,
                        scrollbarGutter: ej ? "both-edges" : "stable",
                        className: [uo.N$, N ? null : uo.hB, em ? uo.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(sK, {
                            projectId: n,
                            messages: u,
                            emptyState: ev,
                            floatingSettingsMessageId: ec?.id,
                            liveClarificationId: el?.id,
                            onPickIdea: Y ? F : void 0,
                            onAskForIdeas: Y ? U : void 0,
                            draftHasText: G,
                            onApprovePlan: Y ? eS : void 0,
                            onRestoreVersion: J || ew ? void 0 : r,
                            scrollerRef: j,
                            stickToBottomRef: k,
                            pinned: A,
                            onUnpin: S,
                            handleRef: y,
                            onShowsLatestChange: M,
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: uo.NJ,
                        children: (0, a.jsx)(ui, {
                            projectId: n,
                            thinking: ew,
                            turnStartedAt: eA,
                            restoring: J,
                            recalling: ej,
                            thinkingActivity: m,
                            compacting: h,
                            saving: g,
                            projectUsage: f,
                            connState: o,
                        }),
                    }),
                    null == el
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eg,
                              className: em ? `${uo.B5} ${uo.J9}` : uo.B5,
                              children: (0, a.jsx)(
                                  l5,
                                  { projectId: n, clarification: el, onSubmit: Y ? B : void 0, onDismiss: er },
                                  el.id,
                              ),
                          }),
                    null == ed
                        ? null
                        : (0, a.jsx)("div", {
                              ref: null == el ? eg : void 0,
                              className: uo.B5,
                              children: (0, a.jsx)(re, { projectId: n, request: ed, onDismiss: ef }, ec?.id),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: uo.Jx,
                children: [
                    (0, a.jsx)(ln, {
                        onJumpToActivity: P,
                        line: eT,
                        placement: ew && "bottom" === e_ ? "bottom" : null,
                        todos: eP,
                        todosLive: eL,
                        provisionalTodo: eR,
                        agents: eD,
                    }),
                    0 === L.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: uo.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: ei.intl.formatToPlainString(ea.default["7b49dS"], {
                                          count: L.annotations.length,
                                      }),
                                  }),
                                  (0, a.jsx)(v.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: ei.intl.string(ea.default["5zG+CR"]),
                                  }),
                                  (0, a.jsx)(w.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: ei.intl.string(ea.default["/zOv9+"]),
                                      onClick: () => e2(n),
                                  }),
                              ],
                          }),
                    null == D
                        ? null
                        : (0, a.jsxs)("div", {
                              className: uo.Db,
                              children: [
                                  (0, a.jsx)(nB.w, { type: "warning", role: "status", message: D.message }),
                                  (0, a.jsx)("div", {
                                      className: uo.jU,
                                      children: (0, a.jsx)(b.m, {
                                          text: ei.intl.string(ei.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, a.jsx)(t7.K, {
                                              "aria-label": ei.intl.string(ei.t.WAI6xu),
                                              icon: T.P,
                                              variant: "color-mix",
                                              size: "md",
                                              onClick: D.onDismiss,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                    (0, a.jsx)(iO, {
                        projectId: n,
                        canSend: Y,
                        stopped: c,
                        running: ew,
                        restoring: J,
                        onSend: O,
                        hasPendingContext: L.annotations.length > 0,
                        onInterrupt: Y ? z : void 0,
                        onUploadFile: K,
                        onImport: s,
                        onApprove: eN,
                        suggestion: ey,
                        questionOpen: null != el || null != ed,
                        modelSettings: p,
                        onModelSettingsChange: H,
                        onDraftHasTextChange: q,
                    }),
                ],
            }),
        ],
    });
}
var uf = n(761508),
    um = n(616e3),
    uh = n(683438);
function ug(e, t) {
    return String(e).padStart(t, "0");
}
var up = n(667931);
let ux = {
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
    uv = { running: "Running", ok: "Done", error: "Failed" };
function uj(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function ub(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function uy(e) {
    return uj(Math.round(e));
}
function uk(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function uw(e) {
    return uy(e.count > 1 ? e.totalMs : e.end - e.start);
}
let uA = ["Arguments", "Result", "Usage", "Details"];
function uN(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function uS(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function uC(e) {
    let t = (0, up.bM)(e)?.end;
    return null != t ? uj(t) : (0, up.lp)(e) ? "interrupted" : "still running";
}
function uE(e) {
    return [
        (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
            if (e.length > 64) return null;
            let n = Date.parse(e);
            if (Number.isNaN(n)) return null;
            let l = new Date(n),
                r = `${ug(l.getHours(), 2)}:${ug(l.getMinutes(), 2)}:${ug(l.getSeconds(), 2)}`;
            return "millis" === t ? `${r}.${ug(l.getMilliseconds(), 3)}` : r;
        })(new Date(e.started_at).toISOString()) ?? "",
        uk(e.spans.length),
        (0, up.Sj)((0, up.bM)(e)?.attrs),
    ]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function uI(e) {
    let t = (0, up.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, up.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += uM(r, "in")),
                (l.output += uM(r, "out")),
                (l.cacheRead += uM(r, "cache_read")),
                (l.cacheWrite += uM(r, "cache_write")),
                (l.costUsd += uM(r, "cost_usd"))));
    }
    let r = up.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function uM(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var u_ = n(738188),
    uT = n(430993),
    uP = n(364840),
    uR = n(224640),
    uL = n(20742);
let uD = { collapsed: new Set(), revealed: new Set() };
var u$ = n(872892);
let uO = {
    op: u$.Q,
    model: u$.i3,
    tool: u$.dH,
    setup: u$.kc,
    worktree: u$.Qx,
    sandbox: u$.QH,
    build: u$.F1,
    platform: u$.Op,
    other: u$.fv,
};
function uz(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      uk(t.calls, "model call"),
                      `${ub(t.input)} in`,
                      `${ub(t.output)} out`,
                      `${ub(t.cacheRead)} cache read`,
                      `${ub(t.cacheWrite)} cache write`,
                      uS(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: u$.M1,
        children: [
            (0, a.jsx)("div", {
                className: u$.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${u$.DJ} ${uO[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: u$.o1,
                children: up.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${uy(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: u$.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${u$.nf} ${uO[e]}` }),
                                (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: ux[e] }),
                                null == l
                                    ? null
                                    : (0, a.jsx)(v.E, {
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
                : (0, a.jsx)(v.E, {
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
function uG(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        u = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: u$.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(u) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(v.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${u$.p0} ${s + u > 85 ? u$.EU : u$.jh}`,
                children: i,
            }),
        ],
    });
}
function uq(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: u, onExpandSubtree: o } = e,
        c = t.children.length > 0,
        d = l ? tn._ : tF.a,
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
    return (0, a.jsxs)(j.D, {
        tag: "div",
        role: "treeitem",
        id: uF(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${u$.$y} ${r ? u$.wQ : ""}`,
        onClick: f,
        children: [
            (0, a.jsxs)("div", {
                className: u$.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, a.jsx)(j.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: u$.ai,
                              onClick: m,
                              children: (0, a.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: u$.YJ }),
                    (0, a.jsx)(v.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: u$.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${u$.nf} ${uO[t.category]}` }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        className: u$.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: u$.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(v.E, {
                              variant: "text-xs/semibold",
                              color: "text-default",
                              className: u$.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(u_.WarningIcon, { size: "xs", color: "currentColor", className: u$.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(uG, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${u$.M0} ${u$.Nh}`
                    : t.running
                      ? `${u$.M0} ${u$.rF}`
                      : `${u$.M0} ${uO[t.category]}`,
                duration: uw(t),
            }),
        ],
    });
}
function uU(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(j.D, {
        tag: "div",
        role: "treeitem",
        id: uF(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${u$.$y} ${l ? u$.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, a.jsxs)("div", {
                className: u$.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: u$.ai,
                        children: (0, a.jsx)(tn._, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: u$.U9 }),
                    (0, a.jsx)("span", { className: `${u$.nf} ${u$.dL}` }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: u$.MQ,
                        children: uk(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(uG, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${u$.M0} ${u$.ab} ${u$.dL}`,
                duration: uy(t.totalMs),
            }),
        ],
    });
}
function uB(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(v.E, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: u$._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: u$.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${u$.nf} ${uO[t.category]}` }),
                          (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [uN("Start", `+${uy(e.start)}`), uN("Duration", uw(e))];
                      e.count > 1
                          ? t.push(
                                uN("Calls", String(e.count)),
                                uN("Longest call", uy(e.maxMs)),
                                uN("Spread over", uy(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(uN("Self time", uy(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(uN("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(uN("Notes", l.join(", "))),
                          null != e.span.error && t.push(uN("Error", e.span.error)));
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
                              s = "cost_usd" === t ? uS(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), uN(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...uA.flatMap((e) => {
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
                                      : (0, a.jsx)(v.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-strong",
                                            className: u$.xd,
                                            children: t,
                                        }),
                                  n.map((e) => {
                                      let { label: t, value: n, block: l } = e;
                                      return (0, a.jsxs)(
                                          i.Fragment,
                                          {
                                              children: [
                                                  (0, a.jsx)(v.E, {
                                                      variant: "text-xs/semibold",
                                                      color: "text-muted",
                                                      children: t,
                                                  }),
                                                  l
                                                      ? (0, a.jsx)(v.E, {
                                                            variant: "code",
                                                            color: "text-default",
                                                            selectable: !0,
                                                            className: u$.vl,
                                                            children: n,
                                                        })
                                                      : (0, a.jsx)(v.E, {
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
function uH(e) {
    let { trace: t } = e,
        n = i.useMemo(() => uI(t), [t]);
    return (0, a.jsx)(uz, { stats: n });
}
function uK(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, up.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? uD : (0, up.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, up.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, up.x7)(t)), l((n) => (0, up._0)(n, t, e)));
            }, [t]);
            let u = i.useMemo(() => (null == t ? [] : (0, up.wu)(t, n)), [t, n]),
                o = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, up.IE)(t, e);
                        null != n && l((e) => (0, up.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, up.IE)(t, e);
                        null != n && l((e) => (0, up.H$)(e, n));
                    },
                    [t],
                ),
                f = i.useCallback(() => {
                    null != t && l((0, up.vH)(t));
                }, [t]),
                m = i.useCallback(() => {
                    null != t && l((0, up.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, up.hB)(t));
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
        m = (0, up.dj)(t),
        h = i.useMemo(() => (0, up.nF)(m), [m]),
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
            (0, a.jsxs)(uT.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: u$.z,
                        children: [
                            (0, a.jsx)(v.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: uC(t),
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: uE(t),
                            }),
                            null == t.started_by
                                ? null
                                : (0, a.jsx)(v.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: `Started by ${t.started_by.trace_name}`,
                                  }),
                            0 === t.dropped
                                ? null
                                : (0, a.jsx)(v.E, {
                                      variant: "text-sm/normal",
                                      color: "text-feedback-warning",
                                      children: `${uk(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(uH, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: u$.KE,
                        children: [
                            (0, a.jsx)(w.$, { size: "sm", variant: "secondary", text: "Time sinks", onClick: n.reset }),
                            (0, a.jsx)(w.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Expand all",
                                onClick: n.expandAll,
                            }),
                            (0, a.jsx)(w.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Collapse all",
                                onClick: n.collapseAll,
                            }),
                            (0, a.jsx)(v.E, {
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
                        className: u$.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(g) },
                        onKeyDown: p,
                        children: [
                            (0, a.jsxs)("div", {
                                className: u$.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: u$.So,
                                        children: (0, a.jsx)(v.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: u$.c1,
                                        children: h.map((e) =>
                                            (0, a.jsx)(
                                                v.E,
                                                {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${u$.io} ${(e / m) * 100 > 85 ? u$.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / m) * 100),
                                                    },
                                                    children: 0 === e ? "0" : uy(e),
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
                                          uq,
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
            (0, a.jsx)(uP.j, { children: (0, a.jsx)(uB, { node: s }) }),
        ],
    });
}
function uV(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, d.bG)([um.A], () => um.A.getTimingTrace(l, r), [l, r]),
        s = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(uR.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, a.jsx)(uL.rQ, { title: s }),
            null == i
                ? (0, a.jsx)(uT.c, {
                      children: (0, a.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(uK, { trace: i }),
        ],
    });
}
let uW = { running: u$.Vf, ok: u$.mo, error: u$.Sr };
function uX(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${u$.Om} ${uW[t]}`, role: "img", "aria-label": uv[t] });
}
function uJ(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => {
            (0, e5.openModal)((e) => (0, a.jsx)(uV, { ...e, projectId: t, traceId: n.id }));
        }, [t, n.id]);
    return (0, a.jsxs)(j.D, {
        className: u$.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: u$.sU,
                children: [
                    (0, a.jsx)(uX, { status: (0, up.lQ)(n) }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        className: u$._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: uC(n),
                    }),
                ],
            }),
            (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", tabularNumbers: !0, children: uE(n) }),
            null == l
                ? null
                : (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function uY(e) {
    let { projectId: t, traces: n } = e,
        l = i.useRef(null),
        r = i.useCallback(() => {
            er(
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
    return (0, a.jsx)(J.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: J.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, a.jsx)(Y.W, {
                "data-menu-migrated": !0,
                navId: `conjure-traces-${t}`,
                "aria-label": "Trace actions",
                onClose: l,
                onSelect: l,
                children: (0, a.jsx)(Q.rX, {
                    children: (0, a.jsx)(Q.Dr, {
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
            return (0, a.jsx)(t7.K, {
                ...e,
                buttonRef: l,
                icon: t5.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function uQ(e) {
    let { projectId: t } = e,
        n = (0, d.yK)([um.A], () => um.A.getTimingTraces(t), [t]),
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
                    let t = e.map(uI);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: up.BF.map((e) => ({
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
              className: u$.Ie,
              children: [
                  (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: "No traces yet" }),
                  (0, a.jsx)(v.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: "Turns and project operations over 100ms show up here as they run.",
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: u$.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: u$.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: u$.fH,
                              children: (0, a.jsx)(uh.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(uY, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, a.jsxs)(nU.Ch, {
                      className: u$.XG,
                      children: [
                          (0, a.jsx)(uz, { stats: o }),
                          0 === u.length
                              ? (0, a.jsx)(v.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: u$.p_,
                                    "aria-label": "Traces",
                                    children: u.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            { children: (0, a.jsx)(uJ, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function uZ(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function u0(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function u1(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function u2(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function u3(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function u4(e) {
    return ei.intl.string("preview" === e ? ea.default["2yLYlG"] : ea.default.eiAi57);
}
let u6 = ["all", "preview", "stable", "web"];
function u7(e) {
    switch (e.reason) {
        case "local":
            return ei.intl.string(ea.default.mUeKML);
        case "unconfigured":
            return ei.intl.string(ea.default.bGefb5);
        case "unauthorized":
            return ei.intl.string(ea.default.KLx6Bb);
        default:
            return null != e.detail
                ? ei.intl.formatToPlainString(ea.default.t09Q6q, { detail: e.detail })
                : ei.intl.string(ea.default["t+tG59"]);
    }
}
function u5(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : ei.intl.formatToPlainString(ea.default["XO/bN4"], {
              p50: uZ(e.memory_p50_bytes ?? 0),
              p999: uZ(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let u8 = {
    db: () => ea.default["7l+DFG"],
    db_preview: () => ea.default.FAuffi,
    runtime: () => ea.default["Gkl+ab"],
    runtime_preview: () => ea.default.ynpJzv,
    bot: () => ea.default["5/i0cj"],
    bot_preview: () => ea.default.m2jsnw,
};
var u9 = n(911608),
    oe = n(177427);
function ot(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: oe.KE,
        children: [
            (0, a.jsx)("div", {
                className: oe.IQ,
                children:
                    "loading" === n
                        ? (0, a.jsx)(k.y, { type: k.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, a.jsx)(v.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: ei.intl.string(ea.default.ZVByPX),
                            })
                          : null != t
                            ? (0, a.jsx)(v.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: ei.intl.formatToPlainString(ea.default.INVO50, { time: u2(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(w.$, { variant: "secondary", size: "sm", text: ei.intl.string(ea.default.oKEgiu), onClick: l }),
        ],
    });
}
function on(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: oe.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(v.E, { variant: "text-xs/semibold", color: "text-muted", className: oe.Gf, children: t }),
            n,
        ],
    });
}
function ol(e) {
    let { label: t, value: n, hint: l, critical: r = !1 } = e;
    return (0, a.jsxs)("div", {
        className: oe.N8,
        children: [
            (0, a.jsxs)("div", {
                className: oe.x7,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: r ? "text-feedback-critical" : "text-default",
                        children: n,
                    }),
                ],
            }),
            null != l && (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
        ],
    });
}
function or(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: oe.N8,
        children: [
            (0, a.jsxs)("div", {
                className: oe.x7,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(u9.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? oe.dh : void 0,
            }),
        ],
    });
}
function oa(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(ol, {
            label: ei.intl.string(ea.default.SXP7pD),
            value: ei.intl.string(ea.default.E5hKVi),
            hint: u7(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(ol, {
            label: ei.intl.string(ea.default.SXP7pD),
            value: "\u2014",
            hint: ei.intl.string(ea.default.AGvoMJ),
        });
    let l = u5(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(ol, { label: ei.intl.string(ea.default["H/X+FI"]), value: u0(n.cpu_ms) }),
            null != l && (0, a.jsx)(ol, { label: ei.intl.string(ea.default.lmFmMO), value: l }),
        ],
    });
}
function oi(e) {
    let { analytics: t } = e,
        n = ei.intl.string(ea.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(on, {
            title: n,
            children: (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: u7(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? u8[t] : null) ? ei.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(on, {
        title: n,
        children:
            0 === l.length
                ? (0, a.jsx)(v.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: ei.intl.string(ea.default.AGvoMJ),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, a.jsx)(
                          ol,
                          {
                              label: n,
                              value: ei.intl.formatToPlainString(ea.default["w/2voO"], { cpu: u0(t.cpu_ms) }),
                              hint: u5(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var os = n(400154);
function ou(e, t) {
    return (0, a.jsx)(ol, {
        label: e,
        value: ei.intl.formatToPlainString(ea.default.yHJxuP, { count: u1((0, X.aM)(t)) }),
        hint: `${u1(t.input_tokens)} in \xb7 ${u1(t.output_tokens)} out \xb7 ${u1(t.cache_read_input_tokens)} cache read`,
    });
}
function oo(e) {
    let { projectId: t, status: n, fetchState: l, onRefresh: r } = e,
        s = (0, d.bG)([um.A], () => um.A.getLastTurnUsage(t), [t]),
        u = (0, d.bG)([um.A], () => um.A.getLastCompaction(t), [t]),
        o = (0, d.bG)([um.A], () => um.A.getLastCompactionDecline(t), [t]),
        c = (0, d.bG)([um.A], () => um.A.getForceCompactionState(t), [t]),
        f = i.useCallback(() => (0, ee.Lj)(t), [t]),
        m = i.useCallback(() => (0, ee.Lj)(t, !0), [t]),
        h = (0, d.bG)([um.A], () => um.A.getSandboxRestartState(t), [t]),
        g = (0, d.bG)([ex.Ay], () => ex.Ay.isThinking(t), [t]),
        p = i.useCallback(() => (0, ee.bq)(t), [t]),
        x = n?.agent?.lifetime ?? null,
        j = n?.agent?.limits ?? null,
        b = n?.agent?.session ?? null,
        y = u?.promptCeiling ?? j?.context_window_tokens ?? null;
    return (0, a.jsxs)("div", {
        className: os.Mf,
        children: [
            (0, a.jsx)(ot, { generatedAt: n?.generated_at ?? null, fetchState: l, onRefresh: r }),
            (0, a.jsx)(on, {
                title: ei.intl.string(ea.default.JghNal),
                children:
                    null == x
                        ? (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: ei.intl.string(ea.default.s0U5Fv),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(ol, {
                                      label: ei.intl.string(ea.default["9nqym2"]),
                                      value: u1((0, X.a7)(x.cost_usd)),
                                      hint: ei.intl.formatToPlainString(ea.default.NCdUIh, { count: u1(x.turns) }),
                                  }),
                                  ou(ei.intl.string(ea.default.xtxP0e), x.orchestrator),
                                  ou(ei.intl.string(ea.default["9Sj3SX"]), x.codegen),
                                  ou(ei.intl.string(ea.default.ANCEo3), (0, X.wU)(x.compaction)),
                                  n?.agent?.outcomes != null &&
                                      Object.keys(n.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(ol, {
                                          label: ei.intl.string(ea.default.SQHm7C),
                                          value: Object.entries(n.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${u1(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(on, {
                title: ei.intl.string(ea.default.dZHPE5),
                children:
                    null == s
                        ? (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: ei.intl.string(ea.default.DfVjal),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  ou(ei.intl.string(ea.default["7X3i9d"]), s.total),
                                  (0, a.jsx)(ol, {
                                      label: ei.intl.string(ea.default["8OUg09"]),
                                      value: `${Math.round((s.cache_hit_rate ?? (0, X.CA)(s.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(on, {
                title: ei.intl.string(ea.default.NbRk9a),
                children: [
                    null != u && null != y
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(or, {
                                      label: ei.intl.string(ea.default.Kw5wiQ),
                                      used: u.tokensAfter,
                                      max: y,
                                      formatValue: u1,
                                  }),
                                  (0, a.jsx)(ol, {
                                      label: ei.intl.string(ea.default.mRbSns),
                                      value: `${u1(u.tokensBefore)} \u{2192} ${u1(u.tokensAfter)}`,
                                      hint: ei.intl.formatToPlainString(ea.default.Vq3skS, {
                                          count: u1(u.retainedMessages),
                                          time: u2(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != y
                                      ? ei.intl.formatToPlainString(ea.default.GMLCNv, { ceiling: u1(y) })
                                      : ei.intl.string(ea.default.s0U5Fv),
                          }),
                    null != o &&
                        (0, a.jsx)(ol, {
                            label: ei.intl.string(ea.default["4BX5KK"]),
                            value: `${u1(o.projected)} / ${u1(o.threshold)}`,
                            critical: !0,
                            hint: ei.intl.formatToPlainString(ea.default["6ngCax"], { time: u2(o.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: os.Lj,
                        children: [
                            (0, a.jsx)(w.$, {
                                variant: "secondary",
                                size: "sm",
                                text: ei.intl.string(ea.default["1EiJeb"]),
                                disabled: "pending" === c,
                                onClick: f,
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof c && "compacted" !== c.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return ei.intl.string(ea.default.wox6Ev);
                                    if ("pending" === e) return ei.intl.string(ea.default.OcPHQ1);
                                    let t = u2(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return ei.intl.formatToPlainString(ea.default.BhRjZZ, { time: t });
                                    let n =
                                        "declined" === e.outcome
                                            ? ea.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? ea.default.YZb4hK
                                              : ea.default.ZoUSVK;
                                    return ei.intl.formatToPlainString(n, {
                                        reason: e.reason ?? "no reason given",
                                        time: t,
                                    });
                                })(c),
                            }),
                            "object" == typeof c &&
                                !0 === c.pendingTurn &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(w.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: ei.intl.string(ea.default.ZxG2AI),
                                            onClick: m,
                                        }),
                                        (0, a.jsx)(v.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: ei.intl.string(ea.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: os.Lj,
                        children: [
                            (0, a.jsx)(w.$, {
                                variant: "secondary",
                                size: "sm",
                                text: ei.intl.string(ea.default["5qCjBu"]),
                                loading: "pending" === h,
                                disabled: "pending" === h || g,
                                onClick: p,
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof h && "restarted" !== h.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return ei.intl.string(ea.default.mlok8D);
                                    if ("pending" === e) return ei.intl.string(ea.default["1ugSyK"]);
                                    let t = u2(e.observedAt);
                                    return ei.intl.formatToPlainString(
                                        "restarted" === e.outcome ? ea.default["76mfqO"] : ea.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(h),
                            }),
                        ],
                    }),
                ],
            }),
            (null != b || n?.analytics != null) &&
                (0, a.jsxs)(on, {
                    title: ei.intl.string(ea.default.EsSzCS),
                    children: [
                        null != b &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(ol, {
                                        label: ei.intl.string(ea.default.CLXHAs),
                                        value: u2(b.instance_since),
                                        hint: ei.intl.string(ea.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(ol, {
                                        label: ei.intl.string(ea.default["8V8e1Z"]),
                                        value: u1(b.sockets),
                                    }),
                                    (0, a.jsx)(ol, {
                                        label: ei.intl.string(ea.default["4pBzYW"]),
                                        value: b.turn_inflight
                                            ? ei.intl.string(ea.default.Wv025I)
                                            : ei.intl.string(ea.default["7/lsFY"]),
                                    }),
                                    b.queued_messages > 0 &&
                                        (0, a.jsx)(ol, {
                                            label: ei.intl.string(ea.default["3oUYnv"]),
                                            value: u1(b.queued_messages),
                                        }),
                                ],
                            }),
                        n?.analytics != null && (0, a.jsx)(oa, { analytics: n.analytics }),
                    ],
                }),
            null != j &&
                (0, a.jsxs)(on, {
                    title: ei.intl.string(ea.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(ol, {
                            label: ei.intl.string(ea.default.IlDBN3),
                            value: u1(j.max_subagent_iterations),
                        }),
                        (0, a.jsx)(ol, {
                            label: ei.intl.string(ea.default["ZdzKR+"]),
                            value: ei.intl.formatToPlainString(ea.default.yHJxuP, {
                                count: u1(j.context_window_tokens),
                            }),
                        }),
                        (0, a.jsx)(ol, {
                            label: ei.intl.string(ea.default.cIhN2W),
                            value: ei.intl.formatToPlainString(ea.default.yHJxuP, {
                                count: u1(j.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(ol, {
                            label: ei.intl.string(ea.default["+fOn/q"]),
                            value: u1(j.max_user_message_chars),
                        }),
                        (0, a.jsx)(ol, { label: ei.intl.string(ea.default.kIHga0), value: u1(j.max_build_attempts) }),
                        (0, a.jsx)(ol, { label: ei.intl.string(ea.default.Iw03yW), value: u1(j.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var oc = n(237528),
    od = n(629584),
    of = n(531893);
function om(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: of.ut,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: ei.intl.string(ea.default.h1SE6R),
              }),
          });
}
function oh(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: of.qf,
              children: [
                  (0, a.jsx)(v.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: ei.intl.string(ea.default.h1SE6R),
                  }),
                  (0, a.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: ei.intl.string(ea.default["8SErdg"]),
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: of.qf,
              children: [
                  (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function og(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: of.ps,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: ei.intl.string(ea.default.V7Ri8H),
              }),
          })
        : null;
}
var op = n(109079);
let ox = i.memo(function (e) {
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
        className: op.vK,
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: op.Mt,
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
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: "text-xxs/semibold",
                color:
                    "error" === (t = n.level)
                        ? "text-feedback-critical"
                        : "warn" === t
                          ? "text-feedback-warning"
                          : "text-muted",
                className: op.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: op.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: op.Cq, children: (0, a.jsx)(oc.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: op.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(oc.v, {
                                text: ei.intl.string(ea.default.TrC9c8),
                                variant: "redLight",
                            }),
                        }),
                    null != o
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  "" !== o.prefix &&
                                      (0, a.jsxs)(v.E, {
                                          tag: "span",
                                          variant: "text-xs/normal",
                                          color: c,
                                          selectable: !0,
                                          children: [o.prefix, " "],
                                      }),
                                  (0, a.jsxs)(j.D, {
                                      className: op.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": u,
                                      "aria-label": ei.intl.string(ea.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, a.jsx)(tF.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, a.jsx)(tn._, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, a.jsxs)(v.E, {
                                              tag: "span",
                                              variant: "text-xs/medium",
                                              color: "none",
                                              children: [
                                                  o.marker,
                                                  " ",
                                                  ei.intl.formatToPlainString(
                                                      "[\u2026]" === o.marker
                                                          ? ea.default.kUhyUv
                                                          : ea.default["N+fphl"],
                                                      { count: o.size },
                                                  ),
                                              ],
                                          }),
                                      ],
                                  }),
                                  r &&
                                      (0, a.jsx)(v.E, {
                                          tag: "div",
                                          variant: "text-xs/normal",
                                          color: c,
                                          className: op.dF,
                                          selectable: !0,
                                          id: u,
                                          children: o.pretty,
                                      }),
                              ],
                          })
                        : (0, a.jsx)(v.E, {
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
function ov(e) {
    let { projectId: t } = e,
        n = (0, d.bG)([ek.Ay], () => ek.Ay.getLogs(t), [t]),
        l = (0, d.bG)([ek.Ay], () => ek.Ay.getHistoryState(t, "logs")),
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
        f = i.useRef(null),
        m = i.useRef(!0);
    i.useEffect(() => {
        m.current && f.current?.scrollToBottom();
    }, [c]);
    let h = i.useCallback(() => {
            let e = f.current;
            null != e && (m.current = 32 > e.getDistanceFromBottom());
        }, []),
        g = i.useMemo(
            () =>
                u6.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return u4(e);
                            case "web":
                                return ei.intl.string(ea.default.IVzfVV);
                            default:
                                return ei.intl.string(ea.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, a.jsxs)("div", {
        className: op.$F,
        children: [
            (0, a.jsxs)("div", {
                className: op.y4,
                children: [
                    (0, a.jsx)(od.I, {
                        look: "pill",
                        "aria-label": ei.intl.string(ea.default.MhvyUU),
                        options: g,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: op.KT,
                        children: (0, a.jsx)(uh.I, {
                            query: u,
                            onChange: o,
                            onClear: () => o(""),
                            size: "sm",
                            placeholder: ei.intl.string(ea.default["m2+37Y"]),
                            "aria-label": ei.intl.string(ea.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, a.jsx)(om, { state: l }),
            (0, a.jsxs)(nU.Ch, {
                ref: f,
                onScroll: h,
                overflow: "auto",
                className: op.sx,
                children: [
                    (0, a.jsx)(og, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(oh, {
                              state: l,
                              emptyTitle: ei.intl.string(ea.default.S7qlPG),
                              emptyBody: ei.intl.string(ea.default.nD0S9z),
                          })
                        : 0 === c.length
                          ? (0, a.jsx)(v.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: ei.intl.string(ea.default["4SIdrX"]),
                            })
                          : c.map((e) => (0, a.jsx)(ox, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function oj(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(on, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, a.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: ei.intl.string(ea.default.umcjif),
                      }),
        })
    );
}
function ob(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(ol, {
                      label: ei.intl.formatToPlainString(ea.default["01ZMS4"], { env: u4(n) }),
                      value: ((t = l.connected), ei.intl.string(t ? ea.default.Wv025I : ea.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(ol, {
                      label: ei.intl.string(ea.default["z1dh+F"]),
                      value: u1(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${u2(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(ol, { label: ei.intl.string(ea.default.Iz5GnJ), value: u1(l.guild_count) }),
                  (0, a.jsx)(ol, {
                      label: ei.intl.string(ea.default["7UqtNv"]),
                      value: u1(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? ei.intl.formatToPlainString(ea.default.MasSly, {
                                    code: l.last_close_code,
                                    time: u2(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(ol, {
                          label: ei.intl.string(ea.default["x3+JXJ"]),
                          value: u1(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(ol, { label: u4(n), value: ei.intl.string(ea.default.lTHQss) });
}
function oy(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(ol, {
        label: u4(t),
        value: ei.intl.formatToPlainString(ea.default["Xq+wHT"], {
            requests: u1(n.requests),
            failures: u1(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? ei.intl.formatToPlainString(ea.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: u2(n.last_failure.at),
                  })
                : ei.intl.formatToPlainString(ea.default["7KlGT6"], { time: u2(n.since) }),
    });
}
function ok(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(ol, {
                label: ei.intl.formatToPlainString(ea.default["92gVTm"], { env: u4(t) }),
                value: u1(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    ol,
                    {
                        label: ei.intl.formatToPlainString(ea.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? ei.intl.formatToPlainString(ea.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? ei.intl.formatToPlainString(ea.default.wxAWNv, { time: u2(e.next_run_at) })
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
    return (0, a.jsx)(ol, {
        label: u4(t),
        value: ei.intl.formatToPlainString(ea.default.suAOj9, { calls: u1(n.calls), errors: u1(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function oA(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(on, {
            title: t,
            children: (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: ei.intl.string(ea.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(on, {
        title: t,
        children: [
            (0, a.jsx)(ol, {
                label: ei.intl.string(ea.default.xtD4Zp),
                value: u1(n.requests),
                hint: ei.intl.formatToPlainString(ea.default["7KlGT6"], { time: u2(n.since) }),
            }),
            (0, a.jsx)(ol, { label: ei.intl.string(ea.default.gfRhR3), value: u1(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(or, {
                              label: ei.intl.string(ea.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: u0,
                          }),
                          (0, a.jsx)(ol, {
                              label: ei.intl.string(ea.default.mSKImM),
                              value: u0(r),
                              hint: ei.intl.formatToPlainString(ea.default.JqMU05, {
                                  total: u0(n.cpu_ms_total),
                                  wall: u0(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(ol, {
                      label: ei.intl.string(ea.default.LEJ5r3),
                      value: ei.intl.string(ea.default["2Ekb2b"]),
                      hint: ei.intl.string(ea.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(ol, { label: ei.intl.string(ea.default.xvmL1D), value: u0(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(ol, {
                    label: ei.intl.string(ea.default["4sQYwH"]),
                    value: u1(n.exceeded_cpu),
                    critical: !0,
                }),
            (0, a.jsx)(ol, {
                label: ei.intl.string(ea.default.bQenOy),
                value: u1(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: ei.intl.formatToPlainString(ea.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(ol, { label: ei.intl.string(ea.default.xgpn4Y), value: u3(n.build) }),
        ],
    });
}
function oN(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        u = r
            ? [{ key: "shared", label: ei.intl.string(ea.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: ei.intl.string(ea.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: ei.intl.string(ea.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(on, {
        title: ei.intl.string(ea.default.mRt7MW),
        children: u.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(ol, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(ol, {
                                  label: ei.intl.formatToPlainString(ea.default.u7kJJ4, { env: n }),
                                  value: uZ(l.r2_bytes),
                                  hint: ei.intl.formatToPlainString(
                                      l.r2_truncated ? ea.default.lH0oQw : ea.default.m9h02S,
                                      { count: u1(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(or, {
                                      label: ei.intl.formatToPlainString(ea.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: uZ,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function oS(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: os.Mf,
        children: [
            (0, a.jsx)(ot, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(oA, {
                            title: ei.intl.string(ea.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(oA, {
                            title: ei.intl.string(ea.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(oN, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(oj, {
                                title: ei.intl.string(ea.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(ob, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(oj, {
                                title: ei.intl.string(ea.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(oy, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(oj, {
                                title: ei.intl.string(ea.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(ok, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(oj, {
                                title: ei.intl.string(ea.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(ow, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(oi, { analytics: t.analytics }),
                        (0, a.jsxs)(on, {
                            title: ei.intl.string(ea.default.fQMpFp),
                            children: [
                                (0, a.jsx)(ol, {
                                    label: ei.intl.string(ea.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? u3(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(ol, {
                                    label: ei.intl.string(ea.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? u3(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var oC = n(592465);
function oE(e) {
    let { projectId: t, onClose: n } = e,
        [l, r] = i.useState("logs"),
        s = (0, d.bG)([eq.A], () => eq.A.isDeveloper) || !1,
        u = (0, d.bG)([um.A], () => um.A.getStatus(t), [t]),
        o = (0, d.bG)([um.A], () => um.A.getFetchState(t), [t]);
    (i.useEffect(() => {
        (0, ee.R7)(t);
    }, [t]),
        i.useEffect(() => (0, ee.Rw)(t), [t]));
    let c = i.useCallback(() => (0, ee.R7)(t), [t]),
        f = i.useCallback(() => {
            (0, ne.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: um.A.getStatus(t),
                        last_turn_usage: um.A.getLastTurnUsage(t),
                        last_compaction: um.A.getLastCompaction(t),
                        last_compaction_decline: um.A.getLastCompactionDecline(t),
                        timing_traces: um.A.getTimingTraces(t),
                        logs: ek.Ay.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, x.P0)({ text: ei.intl.string(ea.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        m = ei.intl.string(ea.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: oC.nd,
        "aria-label": m,
        children: [
            (0, a.jsxs)(nq.Ay, {
                "aria-label": m,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(nq.Ay.Icon, {
                            icon: sp.CopyIcon,
                            tooltip: ei.intl.string(ea.default.TkHqy2),
                            onClick: f,
                        }),
                        (0, a.jsx)(nq.Ay.Icon, { icon: T.P, tooltip: ei.intl.string(ei.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(nq.Ay.ChannelIcon, { icon: N.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(nq.Ay.Title, { children: m }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: oC.rf,
                children: [
                    (0, a.jsxs)(uf.V, {
                        selectedItem: l,
                        type: "top",
                        onItemSelect: (e) => r(e),
                        "aria-label": ei.intl.string(ea.default.RvvWIh),
                        className: oC.vR,
                        children: [
                            (0, a.jsx)(uf.V.Item, { id: "logs", children: ei.intl.string(ea.default["+VRYCm"]) }),
                            (0, a.jsx)(uf.V.Item, { id: "worker", children: ei.intl.string(ea.default["50D0FZ"]) }),
                            (0, a.jsx)(uf.V.Item, { id: "agent", children: ei.intl.string(ea.default.UkbTK1) }),
                            s ? (0, a.jsx)(uf.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === l
                        ? (0, a.jsx)(ov, { projectId: t })
                        : "worker" === l
                          ? (0, a.jsx)(oS, { status: u, fetchState: o, onRefresh: c })
                          : "trace" === l && s
                            ? (0, a.jsx)(uQ, { projectId: t })
                            : (0, a.jsx)(oo, { projectId: t, status: u, fetchState: o, onRefresh: c }),
                ],
            }),
        ],
    });
}
var oI = n(333007),
    oM = n(365912),
    o_ = n(775121),
    oT = n(873715);
function oP(e) {
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
let oR = Object.freeze({ x: -1, y: -1 });
function oL(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = oP(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var oD = n(470779);
function o$(e) {
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
            takeRefs: y,
        } = i_({ projectId: t, surface: "design", onUploadFile: h }),
        k = i.useRef(null),
        w = (f || g.length > 0) && j && !m,
        A = i.useCallback(() => {
            if (!w) return;
            let e = y();
            c(e.length > 0 ? e : void 0);
        }, [w, y, c]),
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
        className: u()(oD.M0, { [oD.ho]: N && !m, [oD.ET]: m }),
        style: { left: P, top: R },
        "data-testid": "conjure-design-compose-bar",
        children: [
            (0, a.jsx)("input", {
                ref: k,
                type: "file",
                multiple: !0,
                className: oD.Fg,
                tabIndex: -1,
                "aria-hidden": !0,
                onChange: (e) => {
                    (p(Array.from(e.target.files ?? [])), (e.target.value = ""));
                },
            }),
            (0, a.jsx)(b.m, {
                position: "bottom",
                text: ei.intl.string(ea.default.lgvqSB),
                ariaHidden: !0,
                children: (0, a.jsx)("button", {
                    type: "button",
                    className: oD.tY,
                    onClick: () => k.current?.click(),
                    "aria-label": ei.intl.string(ea.default.lgvqSB),
                    children: (0, a.jsx)(Z.H, { size: "custom", color: "currentColor", className: oD.WW }),
                }),
            }),
            (0, a.jsx)(la.y, {
                autoFocus: !0,
                rows: 1,
                className: oD.hF,
                value: s,
                placeholder: "" === r ? ei.intl.string(ea.default.MPPV1Q) : `Edit ${r}`,
                "aria-label": ei.intl.string(ea.default.KCYqWL),
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
                      className: oD.ZO,
                      children: g.map((e) => (0, a.jsx)(iT, { draft: e, onRemove: v }, e.localId)),
                  })
                : null,
        ],
    });
}
var oO = n(192888);
function oz(e, t) {
    return (0, oO.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(oL, () => ({ status: "failed" }));
}
var oF = n(108308);
let oG = { x: 25, y: 21 };
function oq(e, t) {
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
function oB(e, t, n, l) {
    let r = oU(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function oH(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function oK(e) {
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
function oV(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        u = null != n && n === l ? t : null,
        { active: o, annotations: c } = e7(u),
        f = (0, th.Zv)(u),
        m = (0, e5.useHasAnyModalOpen)(),
        h = (0, d.bG)([tK.default], () => tK.default.getCurrentUser()),
        g = h?.id ?? null,
        [p, x] = i.useState(null),
        [j, b] = i.useState(null),
        [y, k] = i.useState(!1),
        [A, N] = i.useState(!1),
        [S, C] = i.useState(null),
        [E, I] = i.useState(!1),
        _ = i.useRef(null),
        T = i.useRef(null),
        P = i.useRef(null),
        [R, L] = i.useState(null),
        [D, $] = i.useState(!1),
        [O, z] = i.useState(null),
        [F, G] = i.useState(null),
        q = i.useRef(!1),
        [U, B] = i.useState(!1),
        [H, K] = i.useState(null),
        V = o && !f && !m;
    null == O || (V && O.projectId === u) || z(null);
    let W = O?.projectId ?? null;
    (i.useEffect(() => {
        if (null != W) return () => lK(W, "design");
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
        }, [V, r]),
        i.useEffect(() => {
            if (!V || null == u) return;
            let e = !0,
                t = r();
            if (null == t) return void N(!0);
            (k(!0), N(!1));
            let n = `design-feedback-${crypto.randomUUID()}`;
            return (
                (0, oT.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                    (t) => {
                        if (!e) return;
                        k(!1);
                        let n = "completed" === t.status ? oK(t.response) : null;
                        null == n ? N(!0) : (b(n), e3(u, { url: n.url, title: n.title, viewport: n.viewport }));
                    },
                    () => {
                        e && (k(!1), N(!0));
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
        if (null == j) {
            X.current = p;
            return;
        }
        if (oq(X.current, p)) return;
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
                    (0, oT.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !Z.current) return;
                        let l = oK(e.response);
                        null != l && (b(l), e3(u, { url: l.url, title: l.title, viewport: l.viewport }));
                        let r = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let a = oP(e.element);
                            null != a && r.set(l.id, a);
                        }),
                            (n = e0(u)).active &&
                                0 !== r.size &&
                                e1(u, {
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
    }, [V, p, j, c, u, r]),
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
    let et = i.useCallback(
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
                            if ("picked" !== t.status || oZ(t.target, eu.current.rect, eu.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? C(null)
                                    : "unsupported" === t.status && $(!0);
                            else {
                                let e = eH(t.target);
                                (L((t) => (oQ(t, e) ? t : e)),
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
        en = i.useCallback(() => {
            if (null == O) return;
            let e = !q.current;
            (G({ at: O.at, label: O.label, draft: O.draft, instant: e }), B(e), z(null));
        }, [O]);
    (i.useEffect(() => {
        if (!U) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => B(!1));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [U]),
        i.useEffect(() => {
            if (null == F) return;
            let e = setTimeout(() => G(null), oJ);
            return () => clearTimeout(e);
        }, [F]));
    let el = null == j || null == p || j.viewport.width < 1 ? 1 : p.width / j.viewport.width,
        er = null != j || A,
        es = i.useMemo(() => j?.elements ?? [], [j]),
        eu = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        eu.current = { rect: p, scale: el };
    }, [p, el]);
    let eo = i.useCallback(
            (e, t, n) => {
                null != u &&
                    (lK(u, "design"),
                    K(null),
                    (q.current = !1),
                    z({ projectId: u, target: e, anchor: t, draft: "", at: n, label: eH(e) }));
            },
            [u],
        ),
        ec = i.useCallback((e, t) => ({ x: (e.clientX - t.left) / el, y: (e.clientY - t.top) / el }), [el]),
        ed = i.useCallback(() => {
            let e = P.current;
            if (null == e) return;
            let t = _.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let n = T.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    i.useLayoutEffect(ed);
    let ef = i.useCallback(
            (e) => {
                if (null == p || null != H) return;
                if (((P.current = { x: e.clientX, y: e.clientY }), ed(), I(!0), null != O)) {
                    (Math.abs(e.clientX - O.at.x) > oY || Math.abs(e.clientY - O.at.y) > oY) && (q.current = !0);
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
                        })(es, t.x, t.y),
                        n = null != e && oZ(e, p, el) ? null : e;
                    if (null != n) {
                        let e = eH(n);
                        L((t) => (oQ(t, e) ? t : e));
                    }
                    C((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = Y.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((Y.current = n), (J.current = n), et());
            },
            [p, el, er, ec, D, es, O, H, ed, et],
        ),
        em = null == H ? null : c.find((e) => e.id === H.id),
        eh = V && (E || O?.target.marker != null || em?.target.marker != null);
    i.useEffect(() => {
        if (eh)
            return () => {
                let e = r();
                null != e && oz(e, oR);
            };
    }, [eh, r]);
    let eg = i.useCallback(() => {
        (I(!1), C(null), (Y.current = null), (J.current = null));
    }, []);
    i.useEffect(() => {
        if (!V || !E || !er || D || null != O || null != H) return;
        let e = P.current,
            { rect: t, scale: n } = eu.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((Y.current = l), (J.current = l), et());
    }, [V, E, er, D, O, H, et]);
    let ep = i.useCallback(
            (e) => {
                if (null != O || null != H) {
                    (en(), K(null));
                    return;
                }
                if (null == S || null == p) return;
                let t = ec(e, p);
                eo(
                    S,
                    (function (e, t, n) {
                        let { x: l, y: r, width: a, height: i } = e.rect;
                        return a < 1 || i < 1
                            ? eU
                            : { x: Math.min(1, Math.max(0, (t - l) / a)), y: Math.min(1, Math.max(0, (n - r) / i)) };
                    })(S, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [S, p, ec, O, H, eo, en],
        ),
        ex = i.useCallback(() => {
            null != u && (C(null), e2(u));
        }, [u]),
        ev = i.useCallback(() => {
            null != u &&
                (null != O
                    ? en()
                    : H?.confirmingRemove === !0
                      ? K({ ...H, confirmingRemove: !1 })
                      : null != H
                        ? K(null)
                        : ex());
        }, [u, O, H, en, ex]),
        ej = i.useRef(ev),
        eb = i.useRef(ex);
    i.useLayoutEffect(() => {
        ((ej.current = ev), (eb.current = ex));
    });
    let ey = i.useRef(null);
    i.useEffect(() => {
        if (V)
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
            "Escape" === e.key && (e.preventDefault(), ej.current());
        }
        function t(e) {
            let t = e.target;
            (0, tT.vq)(t) &&
                ey.current?.contains(t) !== !0 &&
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
    }, [V, s]);
    let ek = i.useCallback(
            (e) => {
                if (null == u) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), ev());
                    return;
                }
                if (null != O || null != H || 0 === es.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    n = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || n) {
                    e.preventDefault();
                    let n = null == S ? -1 : es.findIndex((e) => e.ref === S.ref);
                    C(es[(n + (t ? 1 : -1) + es.length) % es.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != S &&
                    (e.preventDefault(),
                    eo(S, eU, { x: (p?.left ?? 0) + S.rect.x * el, y: (p?.top ?? 0) + S.rect.y * el }));
            },
            [u, O, H, es, S, eo, ev, p, el],
        ),
        ew = i.useCallback(
            (e) => {
                null == u ||
                    null == O ||
                    ((eB(O.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, ee.dv)(
                            u,
                            (function (e, t) {
                                let { kind: n, name: l } = eH(e),
                                    r = [n, l].filter((e) => "" !== e).join(": ");
                                return `${eW}${r}${eX}${eV(e)}
${t.trim()}`;
                            })(O.target, O.draft),
                            e,
                        ),
                        en(),
                        C(null)));
            },
            [u, O, en],
        ),
        eA = i.useCallback((e) => (null == u ? Promise.reject(Error("no project")) : (0, ee.vX)(u, e)), [u]),
        eN = i.useCallback(() => {
            if (null != u && null != H && null != g && eB(H.draft)) {
                var e, t;
                let n, l;
                ((e = H.id),
                    (t = H.draft.trim()),
                    null != (l = (n = e0(u)).annotations.find((t) => t.id === e)) &&
                        e4(l, g) &&
                        e1(u, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    K({ ...H, editing: !1 }));
            }
        }, [u, H, g]),
        eS = i.useCallback(() => {
            if (null != u && null != H && null != g) {
                var e;
                let t, n;
                ((e = H.id),
                    null != (n = (t = e0(u)).annotations.find((t) => t.id === e)) &&
                        e4(n, g) &&
                        e1(u, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    K(null));
            }
        }, [u, H, g]),
        eC = o
            ? y
                ? ei.intl.string(ea.default["Eb/YV9"])
                : A
                  ? ei.intl.string(ea.default.FD30bh)
                  : ei.intl.formatToPlainString(ea.default.dTSqLF, { count: c.length })
            : "",
        eE = V && null != p,
        eI = E && null == H,
        eM = O?.target ?? em?.target ?? null,
        e_ = O ?? F,
        eT = O ?? (F?.instant === !0 ? null : F),
        eP =
            null != em && null != p
                ? (function (e, t) {
                      let { left: n, top: l } = oH(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(oB(em.target, em.anchor, p, el), p)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (em?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = em;
            oz(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [em, r]),
        (0, oI.createPortal)(
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
                                      "aria-label": ei.intl.string(ea.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: ef,
                                      onMouseLeave: eg,
                                      onClick: ep,
                                      onKeyDown: ek,
                                  }),
                                  null != S && null == S.marker && null == O && null == H
                                      ? (0, a.jsx)(o0, { box: oU(S, p, el) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: _,
                                      className: oF.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: oF.xz,
                                          "data-shown": null != S && null == H && null == O ? "" : void 0,
                                          "data-instant": U ? "" : void 0,
                                          children: (0, a.jsxs)(v.E, {
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
                                                "data-closing": null == O ? "" : void 0,
                                                children: (0, a.jsxs)(v.E, {
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
                                      let n = oB(e.target, e.anchor, p, el),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: oF.xL,
                                              style: { ...oH(n, p), width: 24, height: 24 },
                                              "aria-label": ei.intl.formatToPlainString(ea.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: eK(e.target),
                                              }),
                                              "aria-expanded": H?.id === e.id,
                                              "data-testid": "conjure-design-marker",
                                              onMouseEnter: () => {
                                                  null == O && K(l);
                                              },
                                              onFocus: () => {
                                                  null == O && K(l);
                                              },
                                              onClick: (e) => {
                                                  (e.stopPropagation(), en(), K(l));
                                              },
                                              children: (0, a.jsx)(oW, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == e_ || null == u
                                      ? null
                                      : (0, a.jsx)(o$, {
                                            projectId: u,
                                            at: { x: e_.at.x + 20, y: e_.at.y + 20 },
                                            bounds: p,
                                            kind: e_.label.kind,
                                            value: e_.draft,
                                            canSubmit: null != O && eB(e_.draft),
                                            onChange: (e) => {
                                                null != O && z({ ...O, draft: e });
                                            },
                                            onSubmit: ew,
                                            onDismiss: en,
                                            onUploadFile: eA,
                                            closing: null == O,
                                        }),
                                  null != em && null != H && null != eP
                                      ? (0, a.jsxs)(oX, {
                                            point: eP,
                                            frame: p,
                                            authorId: em.authorId,
                                            title: eK(em.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                H.confirmingRemove ? K({ ...H, confirmingRemove: !1 }) : K(null);
                                            },
                                            onMouseLeave: () => {
                                                H.editing || H.confirmingRemove || K(null);
                                            },
                                            children: [
                                                H.editing
                                                    ? (0, a.jsx)(M.f, {
                                                          autoFocus: !0,
                                                          label: ei.intl.string(ea.default.KCYqWL),
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
                                                    : (0, a.jsx)(v.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-default",
                                                          className: oF.aC,
                                                          children: em.comment,
                                                      }),
                                                e4(em, g)
                                                    ? (0, a.jsx)("div", {
                                                          className: oF.eB,
                                                          children: H.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(v.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: oF.nv,
                                                                            children: ei.intl.string(ea.default.wOHvts),
                                                                        }),
                                                                        (0, a.jsx)(w.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: ei.intl.string(ea.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                K({ ...H, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, a.jsx)(w.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: ei.intl.string(ea.default.friIzR),
                                                                            "data-testid":
                                                                                "conjure-design-remove-confirm",
                                                                            onClick: eS,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(w.$, {
                                                                            variant: "critical-secondary",
                                                                            size: "sm",
                                                                            text: ei.intl.string(ea.default.friIzR),
                                                                            onClick: () =>
                                                                                K({
                                                                                    ...H,
                                                                                    editing: !1,
                                                                                    confirmingRemove: !0,
                                                                                }),
                                                                        }),
                                                                        H.editing
                                                                            ? (0, a.jsx)(w.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !eB(H.draft),
                                                                                  text: ei.intl.string(
                                                                                      ea.default.iicRP9,
                                                                                  ),
                                                                                  onClick: eN,
                                                                              })
                                                                            : (0, a.jsx)(w.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: ei.intl.string(
                                                                                      ea.default["6eW9lg"],
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
function oW(e) {
    let { authorId: t } = e,
        n = (0, d.bG)([tK.default], () => tK.default.getUser(t), [t]);
    return (0, a.jsx)(am.eu, {
        src: null == n ? null : ap.Ay.getUserAvatarURL(n),
        size: ah._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function oX(e) {
    let t,
        n,
        l,
        r,
        s,
        u,
        { point: o, frame: c, authorId: d, title: f, testId: m, onDismiss: h, onMouseLeave: g, children: p } = e,
        x = i.useRef(null),
        j = i.useRef(null),
        [b, y] = i.useState(oG);
    i.useLayoutEffect(() => {
        let e = x.current?.getBoundingClientRect(),
            t = j.current?.getBoundingClientRect();
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
        (s = Math.min(Math.max(o.x - b.x, t), n)),
        { left: s, top: (u = Math.min(Math.max(o.y - b.y, l), r)), originX: o.x - s, originY: o.y - u }),
        S = { left: k, top: w, "--custom-conjure-card-origin-x": `${A}px`, "--custom-conjure-card-origin-y": `${N}px` };
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
                    (0, a.jsx)("span", { ref: j, className: oF.ip, children: (0, a.jsx)(oW, { authorId: d }) }),
                    (0, a.jsx)(v.E, {
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
let oJ = 300,
    oY = 2;
function oQ(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function oZ(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function o0(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: oF.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var o1 = n(659723),
    o2 = n(697744),
    o3 = n(130324);
function o4(e) {
    let t = (0, o2.c)(),
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
function o6(e) {
    let { className: t } = e,
        { Component: n, events: l } = o4(3e4);
    return (0, a.jsxs)("div", {
        className: t,
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: o3.o,
                children: ei.intl.string(ea.default.AyiQEp),
            }),
        ],
    });
}
var o7 = n(251363),
    o5 = n(944142),
    o8 = n(532247),
    o9 = n(501628);
function ce(e) {
    let { progress: t } = e,
        { Component: n } = o4(1500),
        l = eG.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: o9.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: o9.PM,
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
function ct(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        u = (0, d.bG)([o5.A], () => (s ? o5.A.getLiveReload(t) : null), [s, t]),
        o = (0, G.A)(n, r)?.id ?? null,
        c = u?.phase ?? null,
        f = (function (e, t) {
            let n = (0, o8.dv)(e),
                [l, r] = i.useState(null),
                [a, s] = i.useState(n);
            a !== n && (s(n), r(null == n ? (0, o8.QP)(e, a) : null));
            let u = (0, d.bG)(
                    [tI.A],
                    () => {
                        let e = tI.A.getFrame(t);
                        return (0, t$.x1)(e) && e.data.proxyTicketRefreshing;
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
                        null != n.target && n.target === (0, o7.o)(null, t) && e();
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
        m = (0, o8.h_)(c, u?.step ?? null, f);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(y.A, { tag: "div", role: "status", "aria-live": "polite", children: m?.title ?? "" }),
            null != m
                ? (0, a.jsx)("div", {
                      className: o9.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(ce, { progress: m }),
                  })
                : null,
        ],
    });
}
var cn = n(343030),
    cl = n(317608),
    cr = n(338941),
    ca = n(964404);
let ci = { width: 1 / 0, height: 1 / 0 };
function cs(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ci;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var cu = n(702083);
function co(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, d.cf)([tf.A], () => ({
            mobile: tf.A.isBuilderPreviewMobile(),
            landscape: tf.A.isBuilderPreviewLandscape(),
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
        f = n ? cs(l, c ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: u()(cu.dw, { [cu.PQ]: null != f }),
        children: (0, a.jsx)("div", { className: u()(cu.R9, { [cu.Vg]: null != f }), style: f ?? void 0, children: t }),
    });
}
var cc = n(347927);
function cd(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: u()(cc.Bf, l && cc.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: cc.Ux,
                children: [
                    (0, a.jsx)(C.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    null != n
                        ? (0, a.jsx)(v.E, { variant: "text-md/medium", color: "text-subtle", children: n })
                        : null,
                ],
            }),
            r,
        ],
    });
}
var cf = n(957272);
function cm(e) {
    let { applicationId: t, surface: n, frameOverlay: l } = e,
        { frame: r, state: s } = (0, cr.A)({ applicationId: t, surface: n }),
        u = (0, t$.VA)(t, n);
    if (
        (i.useEffect(
            () => (
                !(function (e) {
                    let t = tI.A.getFrame(e);
                    if (null == t || tM.A.getWindowOpen(eg.MLl.ACTIVITY_POPOUT)) return;
                    let n = tI.A.getMainFrame()?.id === e;
                    t.intent === t$.sV.MAIN
                        ? (n || F.A.promoteFrame(e), F.A.resetFrameLayoutModes(e))
                        : n && F.A.clearMainFrameSlot();
                })(u),
                () => {
                    let e;
                    null != (e = tI.A.getFrame(u)) &&
                        ((0, t$.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        ca.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === t$.sV.INLINE && F.A.promoteFrame(u),
                              F.A.updateFrameLayoutMode({ frameId: u, layoutMode: t$.y0.PIP }))
                            : e.intent === t$.sV.MAIN && F.A.demoteMainFrame(u));
                }
            ),
            [u],
        ),
        s === cr.n.Launched)
    ) {
        let e = (0, a.jsx)(cl.A, { frameId: r.id, level: cn.A.WithinAppContent, className: cf.Z7, overlay: l });
        return (0, tx.Q5)(n) ? (0, a.jsx)(co, { children: e }) : e;
    }
    return (0, a.jsx)(ch, { state: s });
}
function ch(e) {
    let { state: t } = e;
    switch (t) {
        case cr.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: cf.qs,
                children: (0, a.jsx)(cd, {
                    title: ei.intl.string(ea.default["9kpdo7"]),
                    body: ei.intl.string(ea.default.iIA8Nj),
                }),
            });
        case cr.n.NoApplication:
            return (0, a.jsx)(o6, { className: cf.qs });
        case cr.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: cf.qs,
                children: (0, a.jsx)(cd, {
                    title: ei.intl.string(ea.default["7k4GyN"]),
                    body: ei.intl.string(ea.default.zdIy3R),
                }),
            });
        case cr.n.Error:
            return (0, a.jsxs)("div", {
                className: cf.qs,
                children: [
                    (0, a.jsx)(C.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: ei.intl.string(ea.default.lTPbnG),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: cf.tj,
                        children: ei.intl.string(ea.default.e6GiAZ),
                    }),
                ],
            });
        case cr.n.AwaitingLaunch:
        case cr.n.Loading:
            return (0, a.jsx)("div", { className: cf.qs, children: (0, a.jsx)(k.y, {}) });
    }
}
var cg = n(308528),
    cp = n(334738),
    cx = n(688438),
    cv = n(355622),
    cj = n(365971),
    cb = n(703462);
function cy(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: cb.f,
        children: [
            (0, a.jsx)(rG.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function ck() {
    return (0, a.jsx)("div", { className: cb.f, children: (0, a.jsx)(k.y, {}) });
}
function cw(e) {
    let t,
        n,
        { previewApplicationId: l } = e,
        { data: r, isLoading: s } = (0, $.YY)(l),
        u = r?.bot?.id ?? null,
        o = (0, d.bG)([H.A], () => {
            if (null == u) return null;
            let e = H.A.getDMFromUserId(u);
            return null != e ? H.A.getChannel(e) : null;
        });
    ((t = o?.id ?? null),
        i.useEffect(() => {
            null != t && cg.A.preload(eg.ME, t);
        }, [t]),
        (n = (0, d.bG)([si.A], () => si.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, cj.Xg)();
            return (
                (0, cp.yl)(t, e),
                () => {
                    (0, cp.dm)(t, e);
                }
            );
        }, [t, n]));
    let [c, f] = i.useState(null),
        m = null != u && c === u;
    return (i.useEffect(() => {
        if (null == u || null != o) return;
        let e = !1;
        return (
            cg.A.openPrivateChannel({ recipientIds: u, navigateToChannel: !1 }).catch(() => {
                e || f(u);
            }),
            () => {
                e = !0;
            }
        );
    }, [u, o]),
    s && null == r)
        ? (0, a.jsx)(ck, {})
        : null == u || m
          ? (0, a.jsx)(cy, { message: ei.intl.string(ea.default["VP/O8s"]) })
          : null == o
            ? (0, a.jsx)(ck, {})
            : (0, a.jsx)("div", {
                  className: cb.g,
                  children: (0, a.jsx)(cx.A, { channel: o, guild: null, chatInputType: cv.oU.SIDEBAR }, o.id),
              });
}
var cA = n(887909),
    cN = n(570962),
    cS = n(998475);
function cC(e) {
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
    } = (0, cA.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, a.jsxs)("section", {
        className: cS.Nr,
        "aria-label": t,
        children: [
            (0, a.jsx)("div", {
                className: cS.rf,
                children: (0, a.jsx)(cN.A, {
                    obscured: !0 === m,
                    children: (0, a.jsxs)("div", {
                        className: cS.Gq,
                        children: [
                            null != n
                                ? (0, a.jsxs)("div", {
                                      className: cS.z3,
                                      children: [
                                          (0, a.jsx)(C.D, {
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
                            r,
                            (0, a.jsxs)("div", {
                                className: u()(cS.Qs, d ? cS.cw : null, f ? cS.pN : null),
                                children: [i, null == o ? c : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != s && s.length > 0
                ? (0, a.jsx)("div", {
                      className: cS.o1,
                      children: s.map((e, t) => (0, a.jsx)(w.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var cE = n(765671),
    cI = n(269094),
    cM = n(582063);
function c_(e) {
    let { applicationId: t, size: n } = e,
        l = (0, cr.A)({ applicationId: t, surface: t$.ZN });
    return (i.useEffect(() => {
        let e = (0, t$.VA)(t, t$.ZN);
        return () => (0, tw.r)(e);
    }, [t]),
    l.state !== cr.n.Launched)
        ? (0, a.jsx)(ch, { state: l.state })
        : l.frame.data.proxyTicketRefreshing
          ? (0, a.jsx)(ch, { state: cr.n.Loading })
          : (0, a.jsx)(cT, { lifecycle: l, size: n });
}
function cT(e) {
    let { lifecycle: t, size: n } = e,
        { ref: l, width: r, height: i } = (0, cE.Ay)(),
        s = (function (e, t) {
            let { width: n, height: l } = e;
            return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
        })({ width: r, height: i }, n);
    return (0, a.jsxs)("div", {
        className: cM.JH,
        children: [
            (0, a.jsx)("div", { className: cM.LO, "aria-hidden": !0 }),
            (0, a.jsx)("div", {
                ref: l,
                className: cM.dw,
                children: (0, a.jsx)("div", {
                    className: cM.HL,
                    style: {
                        "--custom-conjure-overlay-widget-width": `${n.width}px`,
                        "--custom-conjure-overlay-widget-height": `${n.height}px`,
                        "--custom-conjure-overlay-widget-scale": String(s),
                    },
                    children: (0, a.jsx)(cI.A, { frame: t.frame, application: t.application, className: cM.Gt }),
                }),
            }),
        ],
    });
}
var cP = n(409478),
    cR = n(652227);
function cL(e) {
    let {
        applicationId: t,
        previewApplicationId: n,
        surface: l,
        previewReady: r,
        previewGate: i,
        availability: s,
        activeMode: u,
        widgetApplicationId: o,
        overlayWidgetSize: c = tm,
        frameOverlay: d,
    } = e;
    return i?.type === "checking"
        ? (0, a.jsx)("div", { className: cR.q, children: (0, a.jsx)(k.y, {}) })
        : i?.type === "permissions" && null != i.onAddPreviewBot
          ? (0, a.jsx)("div", {
                className: cR.q,
                children: (0, a.jsx)(cd, {
                    title: ei.intl.string(ea.default.SWXbpN),
                    children: (0, a.jsx)(w.$, {
                        size: "md",
                        text: ei.intl.string(ea.default.FH2Udn),
                        onClick: i.onAddPreviewBot,
                    }),
                }),
            })
          : i?.type === "permissions"
            ? (0, a.jsx)("div", {
                  className: cR.q,
                  children: null == i.authorizeProps ? (0, a.jsx)(k.y, {}) : (0, a.jsx)(cC, { ...i.authorizeProps }),
              })
            : r
              ? null == t
                  ? null
                  : (0, a.jsxs)("div", {
                        className: cR.R,
                        children: [
                            (0, tp.yf)(s, u) ? (0, a.jsx)(cm, { applicationId: t, surface: l, frameOverlay: d }) : null,
                            "widget" === u && null != o
                                ? "unavailable-authorization-revoked" === s.profileState
                                    ? (0, a.jsx)("div", {
                                          className: cR.q,
                                          children: (0, a.jsx)(cd, {
                                              wide: !0,
                                              title: ei.intl.string(ea.default["08U+YO"]),
                                              body: ei.intl.string(ea.default.pKBfrc),
                                          }),
                                      })
                                    : (0, a.jsx)(cP.A, { applicationId: o })
                                : null,
                            "overlay" === u && s.modes.includes("overlay")
                                ? (0, a.jsx)(c_, { applicationId: t, size: c })
                                : null,
                            "bot" === u && null != n ? (0, a.jsx)(cw, { previewApplicationId: n }) : null,
                        ],
                    })
              : (0, a.jsx)(o6, { className: cR.q });
}
var cD = n(175841),
    c$ = n(750506),
    cO = n(867193),
    cz = n(539197),
    cF = n(977020);
function cG(e) {
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
var cq = n(417760);
function cU(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function cB(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function cH(e) {
    let { phase: t, projectId: n, onOpenPublishedApp: l, compact: r } = e,
        { stop: s, stopping: o } = (function (e) {
            let t = (0, d.bG)([ex.Ay], () => null != e && ex.Ay.isThinking(e)),
                [n, l] = i.useState(!1),
                [r, a] = i.useState(t);
            (t !== r && (a(t), t || l(!1)),
                i.useEffect(() => {
                    if (!n) return;
                    let e = setTimeout(() => l(!1), 5e3);
                    return () => clearTimeout(e);
                }, [n]));
            let s = i.useCallback(() => {
                null != e && (l(!0), (0, ee.fu)(e));
            }, [e]);
            return { stop: t ? s : null, stopping: n };
        })(n),
        c = (0, th.CU)(n),
        f = "controlling" === t,
        m = ei.intl.string(f ? (c ? ea.default["VJW/5P"] : ea.default["+hD2Iz"]) : ea.default["h+i1r9"]),
        h =
            null != l
                ? (0, a.jsx)(w.$, {
                      variant: "overlay-secondary",
                      size: "sm",
                      text: ei.intl.string(ea.default["1NcO7H"]),
                      onClick: l,
                  })
                : null,
        g =
            null != s
                ? (0, a.jsx)(w.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: ei.intl.string(ea.default.oU59sU),
                      loading: o,
                      onClick: s,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return r
        ? (0, a.jsxs)("div", {
              className: u()(cq.M0, cq.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  f
                      ? (0, a.jsx)(s0.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(cD.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "none", className: cq.ID, children: m }),
                  f ? (0, a.jsx)(y.A, { children: ei.intl.string(ea.default.fg1sor) }) : null,
                  f ? (0, a.jsxs)("div", { className: cq.lC, children: [h, g] }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: cq.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: cq.sp,
                      children: [
                          (0, a.jsx)(cD.SparklesIcon, { size: "sm", color: "currentColor" }),
                          f ? (0, a.jsx)(s0.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: cq.f4,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: cq.w9,
                                      children: m,
                                  }),
                                  f
                                      ? (0, a.jsx)(v.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: cq.Rb,
                                            children: ei.intl.string(ea.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  f ? (0, a.jsxs)("div", { className: cq.lC, children: [h, g] }) : null,
              ],
          });
}
function cK(e) {
    let {
            projectId: t,
            applicationId: n,
            previewApplicationId: l,
            resolveTarget: r,
            frameId: s,
            onOpenPublishedApp: u = null,
        } = e,
        o = (0, th.Zv)(null != n && n === l ? t : null),
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
        d = (0, e5.useHasAnyModalOpen)(),
        f = tD(s);
    i.useEffect(() => {
        o &&
            f &&
            null != s &&
            (function (e) {
                if (!tR(e)) return;
                let t = tP(e);
                null != t && (0, t_.sP)(t);
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
            h((t) => (cB(t, e) ? t : e));
            let t = null == g ? null : cU(g);
            (v((e) => (cB(e, t) ? e : t)), null != g && (0, cO.C)(g.getBoundingClientRect().height));
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
                    null != g && (0, cO.C)(0));
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
            let [e] = i.useContext(c$.uY),
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
                      className: cq.D,
                      "data-phase": c,
                      children: (0, a.jsx)("div", {
                          className: cq.QF,
                          children: (0, a.jsx)(cH, { phase: c, projectId: t, onOpenPublishedApp: u, compact: k }),
                      }),
                  })
                : null,
            (0, oI.createPortal)(
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("div", {
                        className: cq.y4,
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-control-announcer",
                        children:
                            "controlling" === c
                                ? ei.intl.string(ea.default.oWcemF)
                                : "handoff" === c
                                  ? ei.intl.string(ea.default["h+i1r9"])
                                  : "",
                    }),
                }),
                document.body,
            ),
            y
                ? (0, oI.createPortal)(
                      (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: cq.ys,
                                  style: A,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: cq.om,
                                  style: w,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(cG, { projectId: t }),
                          ],
                      }),
                      N,
                  )
                : null,
        ],
    });
}
var cV = n(399503),
    cW = n(853555),
    cX = n(558960),
    cJ = n(187645);
let cY = new Map(),
    cQ = !1;
function cZ() {
    let e = new Map();
    for (let t of new Set([...ex.Ay.getActivityOrderedProjectIds(), ...(0, th.T7)()])) {
        if (!ex.Ay.isThinking(t) && !(0, th.wK)(t)) continue;
        let n = (function (e) {
            let t = ek.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = (0, tx.Rc)(t);
            return (0, t$.x1)(n) ? n.id : null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, r] of [...cY]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            cY.delete(t),
            n.unregisterLookup(),
            cX.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove());
    }
    for (let [t, n] of e)
        cY.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = cJ.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    c0(n),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (cY.set(e, l),
                    (l.unregisterLookup = (0, cW.Ng)(e, () => (0, o7.o)(n, t))),
                    cX.A.registerFrameTarget(t, n, cn.A.Backstage, void 0));
            })(t, n);
    for (let e of cY.values()) c0(e.element);
}
function c0(e) {
    let t = tf.A.isBuilderPreviewMobile();
    e.classList.toggle(cJ.L, !t);
    let n = t ? cs(tf.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != n ? `${n.width}px` : ""), (e.style.height = null != n ? `${n.height}px` : ""));
}
var c1 = n(873727),
    c2 = n(147248),
    c3 = n(418842),
    c4 = n(363195),
    c6 = n(818023);
let c7 = null;
var c5 = n(602853),
    c8 = n(517461),
    c9 = n(761929),
    de = n(487336);
function dt(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: r } = e,
        s = (0, c5.r)(R.A.modules.chat.RESIZE_HANDLE_WIDTH),
        u = i.useRef(null),
        [o, c] = (0, c8.V)("VibegrationsChatSidebarWidth", 460),
        [d, f] = i.useState(o ?? 460),
        m = (0, rl.clamp)(d, 360, n);
    i.useLayoutEffect(() => {
        l(t ? m + s : 0);
    }, [m, t, s, l]);
    let h = (0, c9.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: u,
            onElementResize: f,
            onElementResizeEnd: c,
            orientation: c9.R.HORIZONTAL_LEFT,
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
        className: de.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: de.Di, onPointerDown: g }),
            (0, a.jsx)("div", { ref: u, className: de.kL, style: { width: m }, children: r }),
        ],
    });
}
var dn = n(541940);
function dl(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: o,
            mainClassName: c,
            content: f,
            sidebar: m,
            onOpenPublishedApp: h,
            showsFrame: g,
        } = e,
        [p, x] = i.useState(null),
        v = (0, G.A)(l, s),
        j = v?.id ?? null;
    (!(function (e, t) {
        let n = (0, d.bG)([c4.A], () => (0, c1.x4)(c4.A.theme)),
            l = (0, d.bG)([c2.A], () => c2.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: s,
                forcedColors: u,
                underlineLinks: o,
            } = (0, d.cf)([iw.Ay], () => ({
                reducedMotion: iw.Ay.useReducedMotion,
                fontScale: (0, c1.U0)(),
                highContrast: iw.Ay.isHighContrastModeEnabled,
                forcedColors: iw.Ay.useForcedColors,
                underlineLinks: iw.Ay.alwaysShowLinkDecorations,
            })),
            c = eG.hH.useSetting(),
            f = (0, c3.C)(),
            m = i.useRef(!1),
            h = i.useRef(!1),
            g = i.useRef(0),
            p = i.useRef(null),
            x = i.useCallback(() => {
                let l = (0, o7.o)(e, t);
                if (null == l) return;
                p.current = l;
                let i = {
                    revision: ++g.current,
                    baseTheme: n,
                    customTheme: (0, c1.Lq)(),
                    uiDensity: f,
                    messageDisplayCompact: c,
                    fontScale: a,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: u,
                    underlineLinks: o,
                };
                (0, oO.W)(l, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, u, a, t, s, c, e, r, f, o]),
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
                let n = (0, o7.o)(e, t);
                null != n && n !== p.current && j();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, o7.o)(e, t) && ((p.current = null), j());
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
            if (null != t) return (0, cW.Ng)(t, () => (0, o7.o)(p, j));
        }, [t, p, j]));
    let b = i.useCallback(() => (0, o7.o)(p, j), [p, j]),
        y = i.useCallback(() => (g ? (0, o7.o)(p, j) : p), [g, p, j]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: u()(dn.Mh, c),
                children: [
                    o,
                    (0, a.jsx)(cK, {
                        projectId: t ?? null,
                        applicationId: l,
                        previewApplicationId: r,
                        resolveTarget: y,
                        frameId: j,
                        onOpenPublishedApp: h,
                    }),
                    (0, a.jsx)("div", { ref: x, className: dn.fm, children: f }),
                ],
            }),
            m,
            (0, a.jsx)(oV, {
                projectId: t ?? null,
                applicationId: l,
                previewApplicationId: r,
                resolveIframe: b,
                toggleRef: n,
            }),
        ],
    });
}
function dr(e) {
    let {
        projectId: t,
        designFeedbackToggleRef: n,
        applicationId: l,
        previewApplicationId: r,
        surface: s,
        header: o,
        chatOpen: c,
        onCloseChat: f,
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
    (0, cV.k)(t, w);
    let S = s.type === nG.U.MAIN || (0, tx.Q5)(s);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, d.cf)([tf.A], () => ({
            mobile: tf.A.isBuilderPreviewMobile(),
            landscape: tf.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? c6.aX.LANDSCAPE : c6.aX.PORTRAIT), (c7 = e));
                else {
                    if (c7 !== e) return;
                    ((l = c6.aX.UNHANDLED), (c7 = null));
                }
                lP.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(S ? l : null);
    let C = i.useRef(null),
        [E, I] = i.useState(0);
    (i.useEffect(() => {
        if (null == t) return;
        (0, ee.TP)(t);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, ee.TP)(t);
        }, 3e3);
        return () => clearInterval(e);
    }, [t]),
        i.useLayoutEffect(() => {
            if (S) return ((0, ey.HV)(l), () => (0, ey.HV)(null));
        }, [l, S]),
        i.useEffect(() => {
            null != t &&
                ((0, ee.Hc)(t),
                cQ ||
                    ((cQ = !0),
                    ex.Ay.addChangeListener(cZ),
                    ek.Ay.addChangeListener(cZ),
                    tI.A.addChangeListener(cZ),
                    tf.A.addChangeListener(cZ),
                    (0, th.W3)(cZ),
                    cZ()));
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
        i.useLayoutEffect(() => () => (0, ey.Zq)(0), []));
    let M = Math.max(360, E - 320),
        _ = c || S;
    return (0, a.jsx)("div", {
        ref: C,
        className: dn.LB,
        children: (0, a.jsx)(dl, {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: o,
            onOpenPublishedApp: N,
            showsFrame: (0, tp.yf)(y, k),
            mainClassName: null == o ? void 0 : u()(dn.ez, { [dn.zt]: c }),
            content: (0, a.jsx)(cL, {
                applicationId: l,
                previewApplicationId: r,
                surface: s,
                previewReady: j,
                previewGate: b,
                availability: y,
                activeMode: k,
                widgetApplicationId: w,
                overlayWidgetSize: A,
                frameOverlay: (0, a.jsx)(ct, { projectId: t, applicationId: l, previewApplicationId: r, surface: s }),
            }),
            sidebar:
                null != t && _
                    ? (0, a.jsx)(dt, {
                          open: c,
                          maxWidth: M,
                          onWidthChange: ey.Zq,
                          children: (0, a.jsx)("div", {
                              className: dn.cO,
                              children: p
                                  ? (0, a.jsx)(oE, { projectId: t, onClose: x ?? (() => {}) }, t)
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(o1.A, { projectId: t }),
                                            (0, a.jsx)(nq.Ay, {
                                                "aria-label": ei.intl.string(ei.t["/VQax8"]),
                                                toolbar: (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        m,
                                                        null == f
                                                            ? null
                                                            : (0, a.jsx)(nq.Ay.Icon, {
                                                                  icon: T.P,
                                                                  tooltip: ei.intl.string(ea.default.JD6Oit),
                                                                  onClick: f,
                                                              }),
                                                    ],
                                                }),
                                                children: (0, a.jsx)(nq.Ay.Title, {
                                                    children: ei.intl.string(ei.t["/VQax8"]),
                                                }),
                                            }),
                                            (0, a.jsx)("div", {
                                                className: dn.cb,
                                                children: (0, a.jsx)(
                                                    ud,
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
var da = n(631417);
function di(e) {
    let { title: t, actions: n, breadcrumb: l, project: r, onOpenProjectSettings: i } = e,
        s = ei.intl.string(ea.default.FzfmQ8);
    return (0, a.jsx)(q.A, {
        hideSearch: !0,
        toolbar: n,
        className: da.wx,
        "aria-label": t,
        children: (0, a.jsxs)("div", {
            className: da.QF,
            children: [
                (0, a.jsx)(P.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: R.A.colors.TEXT_STRONG,
                    className: da.Kk,
                }),
                null != l
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(q.A.Title, { onClick: l.onClick, children: l.title }),
                              (0, a.jsx)(q.A.Caret, {}),
                          ],
                      })
                    : null,
                null != r && null != i
                    ? (0, a.jsx)(b.m, {
                          asContainer: !0,
                          text: s,
                          position: "bottom",
                          children: (0, a.jsx)(j.D, {
                              className: da.FF,
                              onClick: i,
                              "aria-label": s,
                              children: (0, a.jsx)(nv.A, { project: r, size: "header" }),
                          }),
                      })
                    : null,
                (0, a.jsx)(q.A.Title, { className: da.Qw, wrapperClassName: da.DD, children: t }),
            ],
        }),
    });
}
let ds = "conjuring-help";
var du = n(173114);
function dc() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: n,
            } = (0, d.cf)([tK.default, V.A, nL.Ay, sr.A], () => {
                let e = tK.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of V.A.getGuildsArray()) {
                    if (!t.features.has(eg.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let n = nL.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, O.m1)(t, tK.default, sr.A) === ds;
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
                    ? (0, U.pX)(eg.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, nn.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, a.jsx)("div", {
              className: du.l,
              children: (0, a.jsx)(nB.w, {
                  type: "info",
                  iconAlign: "center",
                  message: ei.intl.format(ea.default["6anmu1"], { channel: ds, onNavigate: t }),
                  role: "static",
              }),
          });
}
var dd = n(606128),
    df = n(323140);
function dm(e) {
    return (0, a.jsx)(m.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function dh(e) {
    return (0, a.jsx)(h.u, { ...e, size: "custom", width: 20, height: 20 });
}
function dg(e) {
    return (0, a.jsx)(g.k, { ...e, size: "custom", width: 20, height: 20 });
}
function dp(e) {
    return (0, a.jsx)(p.H, { ...e, size: "custom", width: 20, height: 20 });
}
let dx = {
    showPublishBlocked: function (e, t, n) {
        (0, e5.openModal)((l) => (0, a.jsx)(n$, { ...l, reason: e, message: t, onConfirm: n }));
    },
    openPublishNotes: nO.A,
    showError: (e) => (0, x.P0)({ text: e, variant: "critical" }),
    openProfile: (e) => {
        (0, B.openUserProfileModal)({ userId: e });
    },
    openAutomodSettings: (e) => {
        Promise.resolve()
            .then(n.bind(n, 468689))
            .then((t) => {
                let { default: n } = t;
                return n.open(e, eg.BEX.GUILD_AUTOMOD);
            })
            .catch(() => {});
    },
};
function dv(e) {
    var t;
    let n,
        l,
        r,
        s,
        o,
        m,
        h,
        g,
        p,
        w,
        { project: A, guildId: N, onSelect: S, onRemix: C, shared: E = !1 } = e,
        I =
            ((n = A.id),
            (l = A.name),
            (r = i.useRef(!1)),
            (s = i.useCallback(() => {
                r.current ||
                    ((r.current = !0),
                    (0, x.P0)({ text: ei.intl.formatToPlainString(ea.default.aN2JdD, { name: l }) }),
                    eo(n, l)
                        .catch((e) => {
                            let t;
                            (console.error("[vibegrations] project export failed", n, e),
                                (0, x.P0)({
                                    text:
                                        409 === (t = e instanceof ee.xE ? e.status : null)
                                            ? ei.intl.string(ea.default["9oqbEw"])
                                            : 404 === t
                                              ? ei.intl.string(ea.default["0W8uLq"])
                                              : ei.intl.string(ea.default.N8753A),
                                    variant: "critical",
                                }));
                        })
                        .finally(() => {
                            r.current = !1;
                        }));
            }, [n, l])),
            {
                onExport: s,
                onImport: (o = ec(
                    i.useCallback(
                        (e) => {
                            let t = eu(e);
                            null != t
                                ? (0, x.P0)({ text: t, variant: "critical" })
                                : (0, f.A)({
                                      title: ei.intl.formatToPlainString(ea.default["Gm+u1+"], { name: l }),
                                      subtitle: ei.intl.string(ea.default.M7H3sJ),
                                      confirmText: ei.intl.string(ea.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, U.pX)(eg.BVt.CHANNEL(N, ep.VV.CONJURE, n));
                                          try {
                                              await es(n, e, ei.intl.string(ea.default.Owerd3));
                                          } catch {
                                              (0, x.P0)({
                                                  text: ei.intl.string(ea.default["Q+l4Hv"]),
                                                  variant: "critical",
                                              });
                                          }
                                      },
                                  });
                        },
                        [n, l, N],
                    ),
                )).open,
                importInput: o.input,
            }),
        M =
            null == A.updated_at
                ? null
                : ei.intl.formatToPlainString(ea.default.AXydi3, { time: c()(A.updated_at).fromNow() }),
        _ = (0, tB.wu)(A),
        T =
            (0, d.bG)([V.A], () => (null == _ ? null : (V.A.getGuild(_)?.name ?? null)), [_]) ??
            ei.intl.string(ea.default["3QFps8"]),
        P = (0, d.bG)([ek.Ay], () => ek.Ay.isProjectDeleting(A.id), [A.id]),
        R =
            ((t = E ? A : null),
            (m = t?.id),
            (h = t?.owner_user_id),
            (g = (0, d.yK)(
                [ex.Ay],
                () =>
                    null == m
                        ? []
                        : [
                              ...new Set(
                                  ex.Ay.getMessages(m)
                                      .flatMap((e) => (null != e.user_id && e.user_id !== h ? [e.user_id] : []))
                                      .reverse(),
                              ),
                          ],
                [m, h],
            )),
            i.useEffect(() => {
                null != h && (tQ(h), g.forEach(tQ));
            }, [h, g]),
            (p = (0, d.bG)([tK.default], () => (null == h ? null : tK.default.getUser(h)), [h])),
            (w = (0, d.yK)([tK.default], () => g.map((e) => tK.default.getUser(e)).filter((e) => null != e), [g])),
            i.useMemo(
                () =>
                    null == p
                        ? null
                        : {
                              creator: p,
                              collaborators: w,
                              label: (function (e, t) {
                                  let n;
                                  return 0 === t.length
                                      ? ei.intl.formatToPlainString(ea.default.t5RWBS, { creator: e })
                                      : ei.intl.formatToPlainString(ea.default["b5uCe/"], {
                                            creator: e,
                                            collaborators:
                                                0 === (n = void 0 ?? t.length)
                                                    ? ""
                                                    : 1 === n
                                                      ? ei.intl.formatToPlainString(ei.t["8s9z8P"], { first: t[0] })
                                                      : 2 === n
                                                        ? ei.intl.formatToPlainString(ei.t["i0K/dw"], {
                                                              first: t[0],
                                                              second: t[1],
                                                          })
                                                        : 3 === n
                                                          ? ei.intl.formatToPlainString(ei.t["/KSOKY"], {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                            })
                                                          : ei.intl.formatToPlainString(ei.t.xpU76u, {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                                count: n - 3,
                                                            }),
                                        });
                              })(
                                  (0, tV.mG)(p),
                                  w.map((e) => (0, tV.mG)(e)),
                              ),
                          },
                [p, w],
            )),
        D = i.useId(),
        $ = (0, a.jsx)(v.E, { variant: "text-md/semibold", color: "text-strong", className: df.j1, children: A.name }),
        O = {
            projectId: A.id,
            projectName: A.name,
            guildId: N,
            projectGuildId: A.guild_id,
            isOwner: (0, ek.PV)(A),
            canRemix: (0, ek.H_)(A),
            onRemix: C,
            onExport: I.onExport,
            onImport: I.onImport,
        };
    return (0, a.jsxs)("div", {
        className: u()(df.OY, { [df.Wy]: P }),
        "aria-busy": P,
        children: [
            (0, a.jsx)(e8.Ay, { projectId: A.id }),
            P ? null : (0, a.jsx)(nk.a, { projectId: A.id }),
            (0, a.jsxs)(j.D, {
                className: df.W6,
                onClick: P ? void 0 : S,
                onContextMenu: function (e) {
                    P || (0, L.jA)(e, () => (0, a.jsx)(np, { ...O, onCloseMenu: L.Z_ }));
                },
                tabIndex: P ? -1 : void 0,
                "aria-describedby": null != R ? D : void 0,
                children: [
                    (0, a.jsx)(nv.A, { project: A, size: "card", className: df.VJ }),
                    (0, a.jsxs)("div", {
                        className: df.MM,
                        children: [
                            (0, a.jsxs)("div", {
                                className: df.Ub,
                                children: [
                                    null != R ? (0, a.jsx)(b.m, { text: R.label, ariaHidden: !0, children: $ }) : $,
                                    null == R || P ? null : (0, a.jsx)(ny, { creator: R, className: df.rb }),
                                    P ? null : (0, a.jsx)(nk.n, { projectId: A.id, className: df.fs }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: df.h3,
                                children: [
                                    (0, a.jsx)(v.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: df.Wb,
                                        children: P ? ei.intl.string(ea.default.Yh5pAc) : T,
                                    }),
                                    null == M || P
                                        ? null
                                        : (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                  (0, a.jsx)("span", {
                                                      className: df.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, a.jsx)(v.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: df.zM,
                                                      children: M,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            null != R ? (0, a.jsx)(y.A, { id: D, children: R.label }) : null,
            (0, a.jsx)("div", {
                className: df.M2,
                children: P
                    ? (0, a.jsx)(k.y, { type: k.t.SPINNING_CIRCLE_SIMPLE })
                    : (0, a.jsxs)("div", {
                          className: df.Pl,
                          children: [(0, a.jsx)(nx, { ...O, trigger: "iconButton" }), I.importInput],
                      }),
            }),
        ],
    });
}
function dj(e) {
    var t, l;
    let r,
        { project: s, projectsLoaded: o, onBack: c, guildId: m } = e,
        [h, g] = i.useState(!0),
        [p, j] = i.useState(!1),
        y = eG.Q_.useSetting() || !1,
        [k, E] = i.useState(null),
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
    let D = (0, d.bG)([ek.Ay], () => (null == _ ? null : ek.Ay.getIntegrationStatus(_)), [_]),
        { data: B, isLoading: K } = (0, $.YY)(s?.preview_application_id ?? void 0),
        V = null != _ && I !== _,
        W = D?.preview_ready === !0,
        J = D?.has_activity === !0,
        {
            availability: Y,
            activeMode: Q,
            setMode: Z,
            frameSurface: et,
            frameSurfaceOptions: en,
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
                [c, f] = i.useState(null),
                [m, h] = i.useState(null),
                [g, p] = i.useState(t);
            g !== t && (p(t), f(null), h(null));
            let x = null != n && n === t ? n : null,
                v = (0, d.bG)([tN.default], () => tN.default.getId()),
                { applicationWidgetConfig: j } = (0, tk.A)(v, x ?? void 0),
                b = j?.surfaces,
                y = (0, tp.yZ)({
                    widgetTop: b?.[ty.m.WIDGET_TOP] != null,
                    widgetBottom: b?.[ty.m.WIDGET_BOTTOM] != null,
                    miniProfile: b?.[ty.m.MINI_PROFILE] != null,
                }),
                k = null != x && (u ? y.hasMainCard : y.hasAny),
                { data: w } = (0, $.YY)(n ?? void 0),
                A = null != n && w?.bot?.id != null,
                { data: N, isLoading: S } = (0, $.YY)(t ?? void 0),
                C = l || (0, tA.X)(N),
                E = null != t && S && null == N,
                I = (0, tp.P5)(r, {
                    legacy: { hasFrame: C, hasProfileWidget: k, hasBotDm: A },
                    widgetResolvable: null != x,
                    botDmResolvable: A,
                }),
                M = (0, tp.Xm)({ installScope: a, ...I, hasOverlay: o, ownerAuthorizationRevoked: s }),
                _ = i.useMemo(() => (0, tS.hR)(r), [r]),
                T = (0, tS.PH)(m, _);
            return (
                i.useEffect(() => {
                    if (null != t) for (let e of (0, tx.Mm)(t)) e.surface.type !== (0, tS.BR)(T) && (0, tw.r)(e.id);
                }, [t, T]),
                {
                    availability: M,
                    isResolving: E,
                    activeMode: E ? null : (0, tp.Qs)(c, M),
                    setMode: f,
                    frameSurface: T,
                    frameSurfaceOptions: _,
                    setFrameSurface: h,
                    widgetApplicationId: x,
                }
            );
        })({
            applicationId: s?.preview_application_id ?? null,
            previewApplicationId: s?.preview_application_id ?? null,
            declaredActivity: J,
            previewSupportedSurfaces: s?.preview_supported_surfaces,
            installScope: s?.install_scope ?? null,
            ownerAuthorizationRevoked: D?.owner_authorization_revoked === !0,
            supportsOverlay: s?.preview_supported_surfaces?.includes(X.q7.OVERLAY) === !0,
        }),
        eo =
            ((t = (0, d.bG)(
                [ex.Ay],
                () =>
                    null == _
                        ? null
                        : (function (e) {
                              for (let t = e.length - 1; t >= 0; t--) {
                                  let n = e[t].proposal?.overlay_widget;
                                  if (null != n) return n;
                              }
                              return null;
                          })(ex.Ay.getMessages(_)),
                [_],
            )),
            null != (r = t?.default_size) &&
            Number.isFinite(r.width) &&
            Number.isFinite(r.height) &&
            r.width > 0 &&
            r.height > 0
                ? r
                : tm);
    (0, tg.x)(_, (e) => {
        Y.modes.includes(e) && Z(e);
    });
    let ed = Y.modes.includes("frame"),
        ef = i.useMemo(() => {
            var e;
            return (
                (e = Y.modes),
                e.flatMap((e) => ("frame" === e ? en.map((t) => ({ mode: e, surface: t })) : [{ mode: e }]))
            );
        }, [Y.modes, en]),
        em = i.useCallback(
            (e) => {
                ("frame" === e.mode && el(e.surface), Z(e.mode));
            },
            [el, Z],
        ),
        eh = (0, tp.Qg)({
            installScope: s?.install_scope ?? null,
            previewReady: W,
            integrationInstalled: D?.integration_installed ?? null,
            botPermissionsChanged: D?.bot_permissions_changed === !0,
        }),
        ev = h && !p,
        ej = ei.intl.string(ev ? ea.default.JD6Oit : ea.default.xjJAQm),
        eb = i.useCallback(() => {
            if (p) {
                (j(!1), g(!0));
                return;
            }
            g((e) => !e);
        }, [p]),
        ew = i.useCallback(() => g(!1), []),
        { active: eA } = e7(_);
    i.useEffect(() => {
        null != _ && eA && !ed && e2(_);
    }, [_, eA, ed]);
    let eN = i.useRef(null),
        eS = (0, th.Zv)(_),
        eC = ei.intl.string(eS ? ea.default.Sme0T0 : eA ? ea.default.vn5Rzu : ea.default["cl/Jyl"]),
        eE = i.useCallback(() => {
            if (null != _) {
                let e;
                if (eA) return void e2(_);
                (j(!1), g(!0), (e = e0(_)).active || e1(_, { ...e, active: !0 }));
            }
        }, [_, eA]),
        eI = i.useCallback(() => {
            j((e) => !e && (g(!0), !0));
        }, []),
        eM = i.useCallback(() => j(!1), []),
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
                    j(!1),
                    g(!0),
                    E({ entry: e, status: "restoring" }),
                    (0, ee.oB)(l, e.sha)
                        .then(
                            async () => {
                                if (
                                    (n &&
                                        r() &&
                                        (0, x.P0)({
                                            text: ei.intl.formatToPlainString(ea.default.Z4n6LX, {
                                                title: (0, e9.T4)(e.subject).short,
                                            }),
                                            variant: "success",
                                        }),
                                    null != t)
                                ) {
                                    let e = await (0, te.c)(l, t);
                                    null != e && (0, x.P0)({ text: e, variant: "critical" });
                                }
                                r() && E({ entry: e, status: "restored" });
                            },
                            (t) => {
                                r() &&
                                    (E({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", l, t),
                                    (0, x.P0)({ text: ei.intl.string(ea.default["PSdo+w"]), variant: "critical" }));
                            },
                        )
                        .finally(() => {
                            r() && (R.current = !1);
                        }));
            },
            [s],
        ),
        eT = (0, d.bG)([tf.A], () => tf.A.isBuilderPreviewMobile()),
        eP = ei.intl.string(eT ? ea.default.tKGF0Q : ea.default.peqEOY),
        eR = i.useCallback(() => (0, ey.GG)(!eT), [eT]),
        eL = (0, d.bG)([tf.A], () => tf.A.isBuilderPreviewLandscape()),
        eD = ei.intl.string(eL ? ea.default.tunI2l : ea.default.DoNdjA),
        e$ = i.useCallback(() => (0, ey.Lw)(!eL), [eL]),
        eO = (0, tx.jS)(s),
        ez = i.useMemo(() => (0, tx.Op)(eO, et), [eO, et]),
        eF = (0, G.A)(s?.preview_application_id ?? null, ez),
        eq = (0, t$.x1)(eF) && eF.data.proxyTicketRefreshing,
        eU = i.useCallback(() => {
            null == eF || eq || F.A.refreshProxyTicket(eF.id);
        }, [eF, eq]),
        eB = i.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = eF?.id), (0, ee.Bn)(e), (0, tw.r)(t)), c());
        }, [s, eF?.id, c]),
        eH = i.useCallback(() => {
            null != s && (g(!0), (0, ee.dv)(s.id, ei.intl.string(ea.default.oU20rd)));
        }, [s]),
        eK = ec(
            i.useCallback(
                (e) => {
                    if (null == s) return;
                    let t = s.id,
                        n = eu(e);
                    null != n
                        ? (0, x.P0)({ text: n, variant: "critical" })
                        : (0, f.A)({
                              title: ei.intl.formatToPlainString(ea.default["Gm+u1+"], { name: s.name }),
                              subtitle: ei.intl.string(ea.default.M7H3sJ),
                              confirmText: ei.intl.string(ea.default.gFHykw),
                              variant: "critical",
                              onConfirm: async () => {
                                  g(!0);
                                  try {
                                      await es(t, e, ei.intl.string(ea.default.Owerd3));
                                  } catch {
                                      (0, x.P0)({ text: ei.intl.string(ea.default["Q+l4Hv"]), variant: "critical" });
                                  }
                              },
                          });
                },
                [s],
            ),
        ),
        eV = i.useCallback(() => {
            null != s && (0, nz.A)(s, m);
        }, [s, m]),
        eW = i.useCallback(async () => {
            if (null == _ || T.current !== _) return;
            L.current?.abort();
            let e = new AbortController();
            ((L.current = e), M(null));
            try {
                await (0, ey.U1)(_, e.signal);
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
    let eX = (0, nR.a)(s ?? null, D ?? null, m),
        eJ = ((l = s?.application_id ?? null), (0, d.bG)([nL.Ay], () => (null == l ? null : (0, nw.i8)(m, l)), [m, l])),
        eY = i.useMemo(() => (null == eJ ? null : () => (0, U.pX)(eg.BVt.CHANNEL(m, eJ))), [m, eJ]),
        eQ = i.useCallback(async () => {
            null != s && (await (0, nR.$)(s, eX));
        }, [eX, s]),
        eZ = i.useCallback(async () => {
            try {
                await eQ();
            } catch {}
            await eW();
        }, [eW, eQ]),
        e3 = i.useMemo(() => {
            let e = s?.preview_application_id;
            return null == e || K || V
                ? null
                : {
                      ...(0, tU.i)({ applicationId: e, application: B ?? null, guildId: eX }),
                      onClose: () => {
                          eZ();
                      },
                  };
        }, [V, eZ, eX, K, B, s?.preview_application_id]),
        e4 = D?.integration_installed === !1,
        e6 = i.useCallback(() => {
            null != s && (0, nr.vL)(s.id, m).catch(() => {});
        }, [m, s]),
        e8 = (0, tp.JR)(Q, eh)
            ? { type: "permissions", authorizeProps: e3, onAddPreviewBot: e4 ? e6 : void 0 }
            : V && null == D
              ? { type: "checking" }
              : void 0,
        tt = (0, d.bG)([ek.Ay], () => null != _ && ek.Ay.isProjectDeleting(_), [_]);
    i.useEffect(() => {
        ((null == s && o) || tt) && (0, U.bG)(eg.BVt.CHANNEL(m, ep.VV.CONJURE));
    }, [m, s, o, tt]);
    let tn = i.useMemo(() => ({ guildId: m, platform: dx, busy: V || K }), [m, V, K]),
        tl = (0, nr.Ay)(_, tn),
        tr = tl?.intent === "open" && "channel" === tl.destination ? tl.appChannelId : null,
        ta = (0, d.bG)([H.A], () => (null == tr ? null : H.A.getChannel(tr)), [tr]),
        ti = (0, O.Ay)(ta),
        ts = (0, z.gU)(ta),
        tu =
            null != ti && null != ts
                ? ei.intl.format(ea.default.gR7PUV, {
                      channel: ti,
                      channelIconHook: (e, t) =>
                          (0, a.jsx)(ts, { size: "xs", color: "currentColor", className: df.Y2 }, t),
                  })
                : tl?.label,
        to = tl?.upToDate === !0 ? ei.intl.string(ea.default.X0kGp2) : null,
        tc =
            null == tl
                ? null
                : (0, a.jsx)("div", {
                      className: df.As,
                      children: (0, a.jsx)(b.m, {
                          text: to,
                          asContainer: !0,
                          children: (0, a.jsx)(w.$, {
                              size: "sm",
                              variant: tl.upToDate ? "secondary" : "primary",
                              loading: tl.publishing,
                              disabled: tl.disabled,
                              onClick: () => tl.run("header"),
                              text: tu,
                          }),
                      }),
                  }),
        td = null == s ? void 0 : () => (0, na.A)(s.id, { guildId: m, isPreview: !0, publishOptions: tn }),
        tv = (0, a.jsx)(di, {
            title: s?.name ?? ei.intl.string(ea.default.G1WwgK),
            breadcrumb: { title: ei.intl.string(ea.default.uk6jhJ), onClick: c },
            project: s,
            onOpenProjectSettings: td,
            actions:
                null == s
                    ? null
                    : (0, a.jsxs)("div", {
                          className: df.FO,
                          children: [
                              (0, a.jsx)(tq, {
                                  targets: ef,
                                  target: null == Q ? null : "frame" === Q ? { mode: Q, surface: et } : { mode: Q },
                                  onChange: em,
                              }),
                              ed
                                  ? (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            "overlay" === Q
                                                ? null
                                                : (0, a.jsx)(q.A.Icon, {
                                                      icon: eT ? dg : dh,
                                                      tooltip: eP,
                                                      "aria-label": eP,
                                                      selected: eT,
                                                      onClick: eR,
                                                  }),
                                            eT && "overlay" !== Q
                                                ? (0, a.jsx)(q.A.Icon, {
                                                      icon: dp,
                                                      tooltip: eD,
                                                      "aria-label": eD,
                                                      selected: eL,
                                                      onClick: e$,
                                                  })
                                                : null,
                                            (0, a.jsx)(q.A.Icon, {
                                                ref: eN,
                                                icon: A.x,
                                                iconClassName: df.D8,
                                                tooltip: eC,
                                                "aria-label": eC,
                                                selected: eA,
                                                disabled: eS,
                                                onClick: eE,
                                            }),
                                        ],
                                    })
                                  : null,
                              "frame" === Q ? (0, a.jsx)(tO, { frame: eF, controlProjectId: s.id }) : null,
                              (0, a.jsx)("div", { className: df.YJ }),
                              y
                                  ? (0, a.jsx)(q.A.Icon, {
                                        icon: N.BugIcon,
                                        tooltip: ei.intl.string(ea.default.Mt5k9d),
                                        "aria-label": ei.intl.string(ea.default.Mt5k9d),
                                        selected: p,
                                        onClick: eI,
                                    })
                                  : null,
                              (0, a.jsx)(q.A.Icon, {
                                  icon: S.SettingsIcon,
                                  tooltip: ei.intl.string(ea.default.I2XSKe),
                                  "aria-label": ei.intl.string(ea.default.I2XSKe),
                                  onClick: td,
                              }),
                              (0, a.jsx)(nx, {
                                  projectId: s.id,
                                  projectName: s.name,
                                  guildId: m,
                                  projectGuildId: s.guild_id,
                                  isOwner: (0, ek.PV)(s),
                                  canRemix: (0, ek.H_)(s),
                                  onRefresh: (0, t$.x1)(eF) ? eU : void 0,
                                  isRefreshing: eq,
                                  onClose: eB,
                                  onExport: eH,
                                  onImport: eK.open,
                                  onRemix: eV,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = s.id),
                                          void (0, e5.openModalLazy)(async () => {
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
                                          void (0, e5.openModalLazy)(async () => {
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
                                      Y.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== Y.profileState
                                          ? er
                                          : null,
                                  previewProjectId: s.id,
                              }),
                              ev
                                  ? null
                                  : (0, a.jsx)(q.A.Icon, { icon: dm, tooltip: ej, "aria-label": ej, onClick: eb }),
                          ],
                      }),
        });
    return (0, a.jsxs)("div", {
        className: u()(df.nj, dd.T),
        children: [
            eK.input,
            (0, a.jsx)("main", {
                className: df.JX,
                children:
                    null == s
                        ? (0, a.jsxs)("div", {
                              className: df.j5,
                              children: [
                                  tv,
                                  (0, a.jsxs)("div", {
                                      className: df.sD,
                                      children: [
                                          (0, a.jsx)(C.D, {
                                              variant: "heading-lg/semibold",
                                              children: ei.intl.string(ea.default.G1WwgK),
                                          }),
                                          (0, a.jsx)(v.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: ei.intl.string(ea.default.fINulo),
                                          }),
                                          (0, a.jsx)(w.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: ei.intl.string(ea.default["WFJ/vb"]),
                                              onClick: () => (0, ey.hF)(m),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(nr.bI.Provider, {
                              value: tn,
                              children: (0, a.jsx)(
                                  dr,
                                  {
                                      projectId: s.id,
                                      designFeedbackToggleRef: eN,
                                      applicationId: s.preview_application_id,
                                      previewApplicationId: s.preview_application_id,
                                      surface: ez,
                                      header: tv,
                                      chatOpen: h,
                                      onCloseChat: ew,
                                      chatHeaderAction: tc,
                                      debugOpen: y && p,
                                      onCloseDebug: eM,
                                      onRestoreVersion: e_,
                                      onImportProject: (0, ek.PV)(s) ? eK.open : void 0,
                                      restoreState: k,
                                      previewReady: W,
                                      previewGate: e8,
                                      availability: Y,
                                      activeMode: Q,
                                      widgetApplicationId: er,
                                      overlayWidgetSize: eo,
                                      onOpenPublishedApp: eY,
                                  },
                                  s.id,
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
            guildId: r,
            submitting: s,
            createError: o,
            createDisabled: c,
            conjureTarget: f,
            onConjureTargetChange: m,
            eligibleGuilds: h,
            modelSettings: g,
            onModelSettingsChange: p,
            onSelectProject: j,
            onIdeaChange: b,
            onCreate: y,
            onCreateFromTemplate: A,
            onStartTemplate: N,
            onSubmitTemplate: S,
            onCancelTemplate: C,
            onSkipTemplate: L,
            onImportNewProject: D,
            importing: $,
        } = e,
        [O, z] = i.useState(() => ({ guildId: r, filter: nC(r) })),
        F = (O.guildId === r ? O.filter : nC(r)) ?? r,
        G = i.useCallback(
            (e) => {
                (nS.set(r, e), z({ guildId: r, filter: e }));
            },
            [r],
        ),
        U = (0, d.yK)(
            [V.A],
            () =>
                (function (e, t) {
                    let n = new Set([t]);
                    for (let t of e)
                        (null != t.guild_id && n.add(t.guild_id),
                            null != t.preview_guild_id && n.add(t.preview_guild_id));
                    let l = [];
                    for (let e of n) {
                        let t = V.A.getGuild(e);
                        null != t && l.push(t);
                    }
                    return l.sort((e, t) => e.name.localeCompare(t.name));
                })(t, r),
            [t, r],
        ),
        B = i.useMemo(
            () => [
                { id: "conjure-filter-all", value: "all", leading: P.D, label: ei.intl.string(ea.default["Xi/oIC"]) },
                {
                    id: "conjure-filter-user",
                    value: nA,
                    leading: ed.UserIcon,
                    label: ei.intl.string(ea.default.kCSgmG),
                },
                {
                    id: "conjure-filter-no-server",
                    value: nN,
                    leading: ef.R,
                    label: ei.intl.string(ea.default["3QFps8"]),
                },
                ...U.map((e) => ({
                    id: `conjure-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, a.jsx)(ez.Ay, { guild: e, size: ez.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [U],
        ),
        H = (0, d.yK)(
            [ek.Ay, V.A],
            () => {
                let e = nE(F);
                if (null != e) return ek.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(V.A.getGuilds()))
                    ek.Ay.hasFetchedGuildProjects(e.id) && t.push(...ek.Ay.getSharedProjects(e.id));
                return t;
            },
            [F],
        );
    i.useEffect(() => {
        let e = nE(F);
        null == e || ek.Ay.hasFetchedGuildProjects(e) || (0, ey.hF)(e);
    }, [F]);
    let K = i.useMemo(
            () =>
                H.filter((e) => nI(e, F)).sort((e, t) =>
                    null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                ),
            [H, F],
        ),
        W = i.useMemo(
            () => [
                {
                    label: ei.intl.string(ea.default.NyVn6T),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: eF,
                            label: ei.intl.string(ea.default.UPLaGM),
                            leading: ed.UserIcon,
                        },
                        ...h.map((e) => ({
                            id: `conjure-target-${e.id}`,
                            value: e.id,
                            label: e.name,
                            leading: (0, a.jsx)(ez.Ay, { guild: e, size: ez.Ay.Sizes.MINI, active: !0 }),
                        })),
                    ],
                },
            ],
            [h],
        ),
        J = i.useMemo(
            () =>
                t
                    .filter((e) => nI(e, F))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, F],
        ),
        Y = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, nw.Ot)(e, r)
                    ? j(e.id)
                    : (0, x.P0)({ text: ei.intl.string(ea.default["XUl/cs"]) });
            },
            [r, j],
        ),
        Q = ei.intl.string(ea.default.ab1sMf),
        Z = [
            ei.intl.string(ea.default["9w+Chc"]),
            ei.intl.string(ea.default.WAvmdq),
            ei.intl.string(ea.default.SKsrzl),
        ],
        ee = [
            {
                id: "moderation-bot",
                name: ei.intl.string(ea.default.lGLnE8),
                description: ei.intl.string(ea.default["pAC6k/"]),
                wizard: !0,
            },
            {
                id: "feature-showcase",
                name: ei.intl.string(ea.default.uJKQTs),
                description: ei.intl.string(ea.default["+dKy/B"]),
            },
            {
                id: "rust-sphere",
                name: ei.intl.string(ea.default.iF5Oru),
                description: ei.intl.string(ea.default.NbDDO6),
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
                        onSkip: L,
                    }),
                    (0, e5.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([n.e("881965"), n.e("166781")]).then(
                                n.bind(n, 790028),
                            );
                            return (n) => (0, a.jsx)(e, { ...n, ...t });
                        },
                        { modalKey: "ConjureTemplateWizardModal" },
                    ));
                }
                A(e);
            },
            [h, r, C, A, L, N, S],
        ),
        en = ei.intl.string(ea.default.zzYLlW),
        el =
            (i.useEffect(() => {
                (0, ey.b8)();
            }, []),
            (0, d.bG)([ek.Ay], () => {
                let e = ek.Ay.getMaxProjects();
                return null != e && ek.Ay.hasFetchedOwnedProjects()
                    ? Math.max(0, e - ek.Ay.getOwnedProjects().length)
                    : null;
            })),
        er = ei.intl.string(ea.default["2XcV3x"]),
        es = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), c || y());
            },
            [c, y],
        ),
        eu = nE(F) ?? r,
        eo = (0, d.bG)([ek.Ay], () => ek.Ay.getGuildProjectsFetchState(eu), [eu]),
        ec = (0, d.bG)([ek.Ay], () => ek.Ay.getGuildProjectsFetchState(r), [r]),
        [em, eg] = i.useState(nT),
        ep = i.useMemo(() => nM.w.get(nP(r)) ?? !1, [r]),
        ex = "success" === ec,
        ev = (0, d.yK)([ek.Ay], () => ek.Ay.getSharedProjects(r), [r]).length > 0 || t.some((e) => nI(e, r)),
        eb = em ?? (!!ev || "error" === ec || (!ex && ep));
    i.useEffect(() => {
        ex && nM.w.set(nP(r), ev);
    }, [ex, ev, r]);
    let eA = i.useCallback((e) => {
            (nM.w.set(n_, e), eg(e));
        }, []),
        eN = i.useCallback(() => eA(!eb), [eA, eb]),
        eI = i.useCallback(() => eA(!1), [eA]),
        eM = ei.intl.string(ea.default.kar7jh),
        e_ = eb ? eM : ei.intl.string(ea.default.WSc5Y2);
    return (0, a.jsx)("div", {
        className: u()(df.nj, df.a0, dd.T),
        children: (0, a.jsxs)("div", {
            className: df.Yo,
            children: [
                (0, a.jsxs)("main", {
                    className: df.ps,
                    children: [
                        (0, a.jsx)(di, {
                            title: ei.intl.string(ea.default.uk6jhJ),
                            actions: (0, a.jsx)(q.A.Icon, {
                                icon: E.Z,
                                tooltip: e_,
                                "aria-label": e_,
                                selected: eb,
                                onClick: eN,
                            }),
                        }),
                        (0, a.jsx)(I.Ip, {
                            className: df.Yy,
                            children: (0, a.jsx)("div", {
                                className: df.Mo,
                                children: (0, a.jsxs)("section", {
                                    className: u()(df.Qs, df.Ix),
                                    children: [
                                        (0, a.jsx)(dc, {}),
                                        (0, a.jsx)(eO, {}),
                                        (0, a.jsxs)("section", {
                                            className: df.WI,
                                            "aria-label": en,
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: df.G9,
                                                    children: [
                                                        (0, a.jsx)(v.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: en,
                                                        }),
                                                        (0, a.jsx)(v.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: ei.intl.string(ea.default["N88+Ld"]),
                                                        }),
                                                    ],
                                                }),
                                                (0, a.jsx)(eE, {
                                                    listClassName: df.Aw,
                                                    radius: eS,
                                                    children: ee.map((e) =>
                                                        (0, a.jsx)(
                                                            "li",
                                                            {
                                                                className: df.EA,
                                                                children: (0, a.jsxs)(ew, {
                                                                    disabled: s,
                                                                    ariaLabel: ei.intl.formatToPlainString(
                                                                        ea.default.jGyR6p,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: u()(df.nx, df.rz),
                                                                    onClick: () => et(e),
                                                                    children: [
                                                                        (0, a.jsx)(v.E, {
                                                                            className: df.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, a.jsx)(v.E, {
                                                                            className: df.BK,
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
                                            className: df.WI,
                                            "aria-label": er,
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: df.G9,
                                                    children: [
                                                        (0, a.jsx)(v.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: er,
                                                        }),
                                                        (0, a.jsx)(v.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: ei.intl.string(ea.default.JnJOAn),
                                                        }),
                                                    ],
                                                }),
                                                (0, a.jsx)(eE, {
                                                    listClassName: df.Aw,
                                                    radius: eC,
                                                    children: Z.map((e) =>
                                                        (0, a.jsx)(
                                                            "li",
                                                            {
                                                                className: df.EA,
                                                                children: (0, a.jsx)(ew, {
                                                                    disabled: s,
                                                                    className: df.nx,
                                                                    onClick: () => y(e),
                                                                    children: (0, a.jsx)(v.E, {
                                                                        variant: "text-md/semibold",
                                                                        color: "text-strong",
                                                                        className: df.un,
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
                            className: df.Yl,
                            children: (0, a.jsxs)("div", {
                                className: u()(df.Qs, df.DA),
                                children: [
                                    (0, a.jsx)(M.f, {
                                        label: Q,
                                        hideLabel: !0,
                                        rows: 3,
                                        value: l,
                                        placeholder: Q,
                                        error: o,
                                        onChange: b,
                                        onKeyDown: es,
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: df.VP,
                                        children: [
                                            (0, a.jsx)("div", {
                                                className: df.gH,
                                                children: (0, a.jsx)(_.l, {
                                                    selectionMode: "single",
                                                    label: ei.intl.string(ea.default.NyVn6T),
                                                    hideLabel: !0,
                                                    placeholder: ei.intl.string(ea.default.NyVn6T),
                                                    options: W,
                                                    value: f,
                                                    onSelectionChange: m,
                                                    disabled: s,
                                                }),
                                            }),
                                            null != el
                                                ? (0, a.jsx)(v.E, {
                                                      variant: "text-sm/medium",
                                                      color: 0 === el ? "text-feedback-warning" : "text-subtle",
                                                      children:
                                                          0 === el
                                                              ? ei.intl.string(ea.default.s28pGG)
                                                              : ei.intl.formatToPlainString(ea.default.Wy5aK4, {
                                                                    count: el,
                                                                }),
                                                  })
                                                : null,
                                            (0, a.jsx)(td, {
                                                settings: g ?? X.A4,
                                                tiers: X.lO,
                                                choices: (0, ej.b)()
                                                    ? {
                                                          main: [...X.vC.main, ...X.XE.main],
                                                          subagent: [...X.vC.subagent, ...X.XE.subagent],
                                                          thinking: X.vC.thinking,
                                                      }
                                                    : X.vC,
                                                disabled: s,
                                                onChange: p,
                                            }),
                                            (0, a.jsx)(w.$, {
                                                variant: "primary",
                                                size: "md",
                                                text: ei.intl.string(ei.t.CumH4u),
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
                    className: df.pA,
                    hidden: !eb,
                    "aria-label": ei.intl.string(ea.default.dWgSAa),
                    children: [
                        (0, a.jsxs)("div", {
                            className: df.IR,
                            children: [
                                (0, a.jsx)(v.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: df.RM,
                                    children: ei.intl.string(ea.default.dWgSAa),
                                }),
                                (0, a.jsxs)("div", {
                                    className: df.Ss,
                                    children: [
                                        (0, a.jsx)(eh, { importing: $, onImport: D }),
                                        (0, a.jsx)(q.A.Icon, { icon: T.P, tooltip: eM, "aria-label": eM, onClick: eI }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsxs)(I.Ip, {
                            className: df.xe,
                            children: [
                                (0, a.jsx)("div", {
                                    className: df.Vw,
                                    children: (0, a.jsx)(_.l, {
                                        selectionMode: "single",
                                        label: ei.intl.string(ea.default.U6TqU9),
                                        hideLabel: !0,
                                        options: B,
                                        value: F,
                                        onSelectionChange: G,
                                    }),
                                }),
                                (0, a.jsx)(v.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: df.wE,
                                    children: ei.intl.string(ea.default.JQpNkh),
                                }),
                                ("unattempted" === eo || "loading" === eo) && 0 === J.length
                                    ? (0, a.jsx)("div", { className: df.E8, children: (0, a.jsx)(k.y, {}) })
                                    : "error" === eo && 0 === J.length
                                      ? (0, a.jsxs)("div", {
                                            className: df.E8,
                                            children: [
                                                (0, a.jsx)(v.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: df.JS,
                                                    children: ei.intl.string(ea.default.DJAPMO),
                                                }),
                                                (0, a.jsx)(w.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: ei.intl.string(ea.default["WFJ/vb"]),
                                                    onClick: () => (0, ey.hF)(eu),
                                                }),
                                            ],
                                        })
                                      : 0 === J.length
                                        ? (0, a.jsx)("div", {
                                              className: df.D1,
                                              children: (0, a.jsxs)("div", {
                                                  className: df.ST,
                                                  children: [
                                                      (0, a.jsx)(P.D, { size: "lg", color: R.A.colors.TEXT_SUBTLE }),
                                                      (0, a.jsx)(v.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: df.sI,
                                                          children: ei.intl.string(ea.default["9/5sLV"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, a.jsx)("div", {
                                              className: df.Dq,
                                              children: J.map((e) =>
                                                  (0, a.jsx)(
                                                      dv,
                                                      {
                                                          project: e,
                                                          guildId: r,
                                                          onSelect: () => Y(e),
                                                          onRemix: () => (0, nz.A)(e, r),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          }),
                                K.length > 0
                                    ? (0, a.jsxs)("div", {
                                          className: df.qx,
                                          children: [
                                              (0, a.jsxs)("div", {
                                                  className: df.uc,
                                                  children: [
                                                      (0, a.jsx)(v.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-strong",
                                                          children: ei.intl.string(ea.default["wFi8+o"]),
                                                      }),
                                                      (0, a.jsx)(v.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          children: ei.intl.string(ea.default.dQ3U1J),
                                                      }),
                                                  ],
                                              }),
                                              (0, a.jsx)("div", {
                                                  className: df.Dq,
                                                  children: K.map((e) =>
                                                      (0, a.jsx)(
                                                          dv,
                                                          {
                                                              project: e,
                                                              guildId: r,
                                                              onSelect: () => Y(e),
                                                              onRemix: () => (0, nz.A)(e, r),
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
function dy(e) {
    let t,
        { guildId: n, projectId: l } = e,
        r = (0, d.yK)([ek.Ay], () => ek.Ay.getOwnedProjects()),
        s = (0, d.yK)([K.Ay], () => K.Ay.getSelfMember(n)?.roles ?? [], [n]),
        u = (0, d.bG)(
            [V.A, W.A],
            () => {
                let e = V.A.getGuild(n);
                return null != e && W.A.can(eg.xBc.MANAGE_GUILD, e);
            },
            [n],
        ),
        [o, c] = i.useState(""),
        f = l ?? null,
        [m, h] = i.useState(!1),
        [g, p] = i.useState(null),
        v = (0, tZ.z9)("VibegrationsScreen"),
        [j, b] = i.useState(null),
        y = (0, D.o)().get(tH.f_) === eF;
    i.useEffect(() => {
        b(null);
    }, [n, y]);
    let k = i.useMemo(() => (!y && v.some((e) => e.id === n) ? n : eF), [v, n, y]),
        w = j ?? k,
        A = w === eF ? "user" : "guild",
        N = w === eF ? n : w,
        [S, C] = i.useState(null);
    (i.useEffect(() => {
        (0, ey.hF)(n);
    }, [n, s, u]),
        i.useEffect(() => {
            (0, ey.dm)(n, f);
        }, [n, f]));
    let E = i.useCallback(
            async (e, t, n) => {
                let l = await (0, ey.gA)({ guild_id: t, install_scope: n });
                ((0, ee.Hc)(l),
                    (0, ee.r2)(l, S ?? X.A4),
                    e(l),
                    (0, U.pX)(eg.BVt.CHANNEL(t, ep.VV.CONJURE, l)),
                    c(""),
                    C(null));
            },
            [S],
        ),
        I = i.useCallback(
            async (e) => {
                let t = (e ?? o).trim(),
                    n = eb({ idea: t, installScope: A, submitting: m });
                if ("idea" !== n && "submitting" !== n) {
                    (null != e && c(e), h(!0), p(null));
                    try {
                        await E((e) => (0, ee.dv)(e, t), N, A);
                    } catch (e) {
                        p((0, ev.mG)(e));
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
                                (0, ee.dv)(
                                    t,
                                    ((n = e.name),
                                    ei.intl.formatToPlainString(ea.default["0PQip6"], { templateName: n })),
                                    void 0,
                                    { templateId: e.id },
                                );
                            },
                            N,
                            A,
                        );
                    } catch (e) {
                        p((0, ev.mG)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [E, A, N, m],
        ),
        _ = i.useCallback(
            async (e, t) => {
                let n = await (0, ey.gA)({ guild_id: t, install_scope: "guild" });
                return ((0, ee.Hc)(n), (0, ee.r2)(n, S ?? X.A4), (0, ee.dv)(n, (0, nF.Wl)(e)), n);
            },
            [S],
        ),
        T = i.useCallback(async (e, t, n, l) => {
            if (ek.Ay.getProject(t)?.guild_id !== n) {
                let e = await (0, ey.M7)(t, { guild_id: n, preview_guild_id: n });
                if (!e.ok) throw new ev.DS((0, ev.hj)(e), e.status);
            }
            ((0, ee.dv)(t, l, void 0, { templateId: e.id }), (0, U.pX)(eg.BVt.CHANNEL(n, ep.VV.CONJURE, t)), C(null));
        }, []),
        P = i.useCallback((e) => {
            (0, ey.xx)(e).catch(() => void 0);
        }, []),
        R = i.useCallback(
            (e) => {
                let t = ek.Ay.getProject(e)?.guild_id ?? n;
                ((0, U.pX)(eg.BVt.CHANNEL(t, ep.VV.CONJURE, e)), C(null));
            },
            [n],
        ),
        [L, $] = i.useState(!1),
        O = i.useCallback(
            async (e, t) => {
                let l = eu(e);
                if (null != l) return void (0, x.P0)({ text: l, variant: "critical" });
                $(!0);
                let r = null;
                try {
                    ((r = await (0, ey.gA)({ guild_id: n, install_scope: t })),
                        (0, ee.Hc)(r),
                        (0, ee.r2)(r, S ?? X.A4),
                        await es(r, e, ei.intl.string(ea.default["LUc7/5"])),
                        (0, U.pX)(eg.BVt.CHANNEL(n, ep.VV.CONJURE, r)),
                        C(null));
                } catch {
                    (null != r && (await (0, ey.xx)(r).catch(() => void 0)),
                        (0, x.P0)({ text: ei.intl.string(ea.default["Q+l4Hv"]), variant: "critical" }));
                } finally {
                    $(!1);
                }
            },
            [n, S],
        ),
        z = i.useCallback(
            (e) => {
                (0, U.pX)(eg.BVt.CHANNEL(n, ep.VV.CONJURE, e));
            },
            [n],
        ),
        F = i.useCallback(() => {
            (0, U.pX)(eg.BVt.CHANNEL(n, ep.VV.CONJURE));
        }, [n]),
        G = i.useCallback((e) => {
            (c(e), p(null));
        }, []),
        q = (0, d.bG)(
            [ek.Ay],
            () => {
                if (null == f) return null;
                let e = ek.Ay.getProject(f);
                return null == e || (0, ek.PV)(e) || e.guild_id === n ? e : null;
            },
            [f, n],
        ),
        B = (0, d.bG)([ek.Ay], () => ek.Ay.hasFetchedGuildProjects(n), [n]);
    return null != f
        ? (0, a.jsx)(dj, { project: q, projectsLoaded: B, onBack: F, guildId: n }, f)
        : (0, a.jsx)(db, {
              projects: r,
              modelSettings: S,
              onModelSettingsChange: C,
              idea: o,
              guildId: n,
              submitting: m,
              createError: g,
              createDisabled: "idea" === (t = eb({ idea: o, installScope: A, submitting: m })) || "submitting" === t,
              onSelectProject: z,
              onIdeaChange: G,
              onCreate: I,
              onCreateFromTemplate: M,
              onStartTemplate: _,
              onSubmitTemplate: T,
              onCancelTemplate: P,
              onSkipTemplate: R,
              onImportNewProject: O,
              importing: L,
              conjureTarget: w,
              onConjureTargetChange: b,
              eligibleGuilds: v,
          });
}
