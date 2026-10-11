(n.r(t), n.d(t, { default: () => d4 }), n(321073));
var l,
    a,
    r = n(477900),
    i = n(582128),
    s = n(503698),
    o = n.n(s),
    u = n(536637),
    c = n.n(u),
    d = n(17928),
    m = n(314116),
    f = n(289873),
    h = n(534890),
    g = n(646270),
    x = n(31300),
    p = n(831453),
    v = n(858899),
    j = n(834730),
    b = n(939249),
    y = n(866665),
    k = n(140735),
    w = n(821609),
    A = n(478016),
    N = n(604525),
    C = n(92446),
    S = n(625903),
    E = n(297264),
    I = n(97893),
    M = n(364522),
    _ = n(103557),
    T = n(691885),
    P = n(789645),
    R = n(152367),
    L = n(661531),
    $ = n(442433),
    D = n(458518),
    O = n(627363),
    F = n(625180),
    z = n(672929),
    q = n(742589),
    G = n(976860),
    U = n(696451),
    B = n(71393),
    H = n(576705),
    V = n(164892),
    K = n(922016),
    W = n(980707),
    X = n(477782),
    Y = n(81369),
    J = n(712808);
(n(323874), n(14289), n(35956));
var Q = n(77729),
    Z = n(723702),
    ee = n(264572).Buffer;
async function et(e, t) {
    if (Z.isPlatformEmbedded) {
        let n = ee.from(await e.arrayBuffer());
        if ("function" == typeof Q.A.fileManager.saveWithDialog2) await Q.A.fileManager.saveWithDialog2(n, t);
        else
            try {
                await Q.A.fileManager.saveWithDialog(n, t);
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
var en = n(248675),
    el = n(660183);
async function ea(e, t, n) {
    (0, J.Hc)(e);
    let l = await (0, J.vX)(e, t);
    (0, J.dv)(e, n, [l]);
}
function er(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, V.Oq)(e.size, t)
        ? null
        : el.intl.formatToPlainString(en.default.ThxcOX, { size: (0, V.sM)((0, V.Ju)(t)) });
}
async function ei(e, t) {
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
        a = await (0, J.cS)(e, l);
    await et(a, l);
}
function es(e) {
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
var eo = n(950305),
    eu = n(664121);
let ec = [
    { value: "user", icon: eo.UserIcon, nameMessage: en.default.s1TsXl },
    { value: "guild", icon: eu.R, nameMessage: en.default.LlLIJw },
];
function ed(e) {
    let { importing: t, onImport: n } = e,
        l = i.useRef(null),
        a = es(i.useCallback((e) => n(e, "user"), [n])),
        s = es(i.useCallback((e) => n(e, "guild"), [n])),
        o = { user: a.open, guild: s.open };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(K.Y, {
                targetElementRef: l,
                position: "bottom",
                align: "right",
                animation: K.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsx)(W.W, {
                        "data-menu-migrated": !0,
                        navId: "conjure-import-scope",
                        "aria-label": el.intl.string(en.default.soVyD1),
                        onClose: t,
                        onSelect: t,
                        children: (0, r.jsx)(X.rX, {
                            label: el.intl.string(en.default.NyVn6T),
                            children: ec
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: el.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, r.jsx)(
                                        X.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: o[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, n) => {
                    let { isShown: a } = n;
                    return (0, r.jsx)(w.$, {
                        ...e,
                        buttonRef: l,
                        variant: "secondary",
                        size: "sm",
                        icon: Y.H,
                        text: el.intl.string(en.default.NJGZA3),
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
var em = n(652215),
    ef = n(746080),
    eh = n(245179),
    eg = n(639519),
    ex = n(361504);
function ep(e) {
    let { idea: t, installScope: n, submitting: l } = e;
    return l ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
}
var ev = n(371169),
    ej = n(42766);
function eb(e) {
    let { className: t, ariaLabel: n, disabled: l, onClick: a, children: i } = e;
    return (0, r.jsx)(b.D, { "aria-disabled": l, "aria-label": n, className: t, onClick: l ? void 0 : a, children: i });
}
var ey = n(865665),
    ek = n(373913);
let ew = { x: 5, y: 7 },
    eA = { x: 5, y: 4 };
function eN(e) {
    let { listClassName: t, radius: n, children: l } = e,
        [a, s] = i.useState(!1);
    return (0, r.jsxs)("div", {
        className: ek.n,
        onMouseEnter: () => s(!0),
        onMouseLeave: () => s(!1),
        children: [
            (0, r.jsx)("ol", { className: t, children: l }),
            a ? (0, r.jsx)(ey.C, { area: 64, radius: n, color: L.A.colors.TEXT_BRAND }) : null,
        ],
    });
}
var eC = n(864970),
    eS = n(707554),
    eE = n(770178),
    eI = n(765548),
    eM = n(595528),
    e_ = n(885576),
    eT = n(662429);
let eP = "heading-xxl/semibold",
    eR = !1;
function eL() {
    let e = i.useRef(null),
        [t, n] = i.useState(!0),
        l = (0, eI.A)((e) => {
            n(e.target.clientWidth >= 500);
        }),
        a = (0, eE.w)(l, [], { fireOnMount: !0 }),
        s = (0, d.bG)([eM.A], () => eM.A.isConnected());
    i.useEffect(() => {
        if (!s || !t || eR) return;
        let n = !1,
            l = 0;
        function a() {
            n ||
                (l = window.setTimeout(() => {
                    ((eR = !0), e.current?.play());
                }, 400));
        }
        let r = document.fonts;
        return (
            null == r ? a() : r.load("16px 'AI Visual Identity Glyphs'", "123456789ABC").then(a, a),
            () => {
                ((n = !0), window.clearTimeout(l));
            }
        );
    }, [s, t]);
    let o = (0, d.bG)([e_.A], () => e_.A.isIdle()),
        u = i.useRef(o);
    i.useEffect(() => {
        let t = u.current && !o;
        ((u.current = o), t && eR && (e.current?.stop(), e.current?.play()));
    }, [o]);
    let c = el.intl.string(en.default["+5XyCR"]);
    return (0, r.jsx)("div", {
        ref: a,
        className: eT.x,
        children: t
            ? (0, r.jsx)(eS.H, { children: (0, r.jsx)(eC.o, { ref: e, text: c, variant: eP, delay: null }) })
            : (0, r.jsx)(E.D, { variant: eP, children: c }),
    });
}
var e$ = n(548118);
let eD = "user",
    eO = new Set(),
    eF = null;
function ez(e, t) {
    let n = i.useRef(t);
    (i.useLayoutEffect(() => {
        n.current = t;
    }),
        i.useEffect(() => {
            if (null == e) return;
            let t = (t) => {
                t === e && n.current();
            };
            return (
                eO.add(t),
                () => {
                    eO.delete(t);
                }
            );
        }, [e]));
}
var eq = n(885386);
function eG() {
    return eq.Q_.useSetting() || !1;
}
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
function eV(e) {
    let { kind: t, name: n } = eH(e);
    return [t, n].filter((e) => "" !== e).join(" ");
}
function eK(e) {
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
function eY(e) {
    if (!e.startsWith(eW)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        a = n.slice(eW.length),
        r = a.indexOf(eX),
        i = (-1 === r ? a : a.slice(0, r)).trim();
    return "" === i ? null : { label: i, body: l };
}
let eJ = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    eQ = new Map(),
    eZ = new Set();
function e0(e) {
    return eQ.get(e) ?? eJ;
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
    eQ.has(e) && e1(e, eJ);
}
function e3(e, t) {
    let n = e0(e);
    n.active && e1(e, { ...n, context: t });
}
function e7(e, t) {
    return null != t && e.authorId === t;
}
function e4(e) {
    return (
        eZ.add(e),
        () => {
            eZ.delete(e);
        }
    );
}
function e6(e) {
    let t = i.useCallback(() => (null == e ? eJ : e0(e)), [e]);
    return i.useSyncExternalStore(e4, t, t);
}
var e5 = n(192308),
    e8 = n(855793),
    e9 = n(128761),
    te = n(967008),
    tt = n(900797),
    tn = n(320448),
    tl = n(783977),
    ta = n(344587),
    tr = n(534554),
    ti = n(837984),
    ts = n(359589),
    to = n(254575);
function tu(e) {
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
function tc(e) {
    let { settings: t, tiers: n, choices: l, disabled: a, onChange: s, placement: u, open: c, entered: d } = e,
        [m, f] = i.useState(!1),
        h = tu(m),
        g = V.PY.indexOf(t.tier),
        x = m ? tt.t : tn._,
        p = V.PY.map(tr.D0),
        v = (0, tr.Tc)(t.tier),
        { text: b, phase: y } = (0, ta.Q)(v);
    return (0, r.jsx)("div", {
        className: to.qd,
        "data-placement": u ?? void 0,
        children: (0, r.jsxs)("div", {
            className: o()(to.t$, { [to.Zr]: c && d, [to.GF]: !c }),
            role: "dialog",
            "aria-label": el.intl.string(en.default["3E7Yc0"]),
            children: [
                h.mounted
                    ? (0, r.jsx)("div", {
                          className: o()(to.Nr, to.uO, { [to.Zr]: m && h.entered, [to.GF]: !m }),
                          children: (0, r.jsx)(ts.bR, { settings: t, tiers: n, choices: l, disabled: a, onChange: s }),
                      })
                    : null,
                (0, r.jsxs)("div", {
                    className: `${to.Nr} ${to.rF}`,
                    children: [
                        (0, r.jsxs)("div", {
                            className: to.wx,
                            children: [
                                (0, r.jsxs)("button", {
                                    type: "button",
                                    className: to.y6,
                                    "aria-expanded": m,
                                    "aria-label": el.intl.string(en.default.eGqPbV),
                                    onClick: () => f((e) => !e),
                                    children: [
                                        (0, r.jsx)(j.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: el.intl.string(en.default.aBPQxX),
                                        }),
                                        (0, r.jsx)(x, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: to.vg,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(j.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: o()(to.Z, { [to.xQ]: "exit" === y, [to.lm]: "enter" === y }),
                                    children: b,
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: to.hs,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: to.Nb,
                                    children: [
                                        (0, r.jsx)(j.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: el.intl.string(en.default["/tlOR5"]),
                                        }),
                                        (0, r.jsx)(j.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: el.intl.string(en.default.FxoUwB),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(ti.A, {
                                    activeIndex: g,
                                    stops: p,
                                    ariaLabel: el.intl.string(en.default.aBPQxX),
                                    disabled: a,
                                    onSelect: function (e) {
                                        let n = V.PY[e];
                                        null != n && n !== t.tier && s((0, tr.CM)((0, tr.j6)(t, n)));
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
    let { settings: t, tiers: n, choices: l, disabled: a, onChange: s, className: o, icon: u } = e,
        c = i.useRef(null),
        [d, m] = (0, ts.FT)(t, s),
        [f, h] = i.useState(!1),
        { mounted: g, entered: x } = tu(f);
    return (0, r.jsx)(K.Y, {
        targetElementRef: c,
        position: "top",
        align: "right",
        shouldShow: g,
        onRequestClose: () => h(!1),
        animation: K.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, r.jsx)(tc, {
                settings: d,
                tiers: n ?? null,
                choices: l,
                disabled: a,
                onChange: m,
                placement: t,
                open: f,
                entered: x,
            });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, r.jsx)(y.m, {
                text: el.intl.string(en.default["k2JN/p"]),
                shouldShow: !n,
                ariaHidden: !0,
                children: (0, r.jsx)(b.D, {
                    innerRef: c,
                    className: o ?? to.hZ,
                    "aria-label": el.intl.string(en.default["k2JN/p"]),
                    ...e,
                    onClick: () => h((e) => !e),
                    "aria-expanded": f,
                    children: u ?? (0, r.jsx)(tl.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
var tm = n(111534);
let tf = { width: 320, height: 240 };
var th = n(573083),
    tg = n(855859),
    tx = n(238490),
    tp = n(754027),
    tv = n(991690),
    tj = n(696645);
function tb(e) {
    return "frame" !== e.mode
        ? e.mode
        : null == e.appChannel
          ? `frame-${e.surface}`
          : `frame-${e.surface}-${e.appChannel}`;
}
function ty(e) {
    switch (e.mode) {
        case "frame":
            return null == e.appChannel
                ? (0, tj.XV)(e.surface)
                : el.intl.formatToPlainString(en.default["6xVl+N"], {
                      surface: (0, tj.XV)(e.surface),
                      channel: e.appChannel,
                  });
        case "widget":
            return el.intl.string(en.default.y5GiL1);
        case "overlay":
            return el.intl.string(en.default["2940LX"]);
        case "bot":
            return el.intl.string(en.default.tjpaGN);
    }
}
var tk = n(598748),
    tw = n(294323),
    tA = n(457827),
    tN = n(25451),
    tC = n(280450),
    tS = n(373677),
    tE = n(165610);
let tI = [];
var tM = n(86147),
    t_ = n(729475),
    tT = n(91242),
    tP = n(869146),
    tR = n(475815),
    tL = n(621466);
function t$(e) {
    return null == e ? null : document.querySelector(`[data-frame-id="${CSS.escape(e)}"]`);
}
function tD(e) {
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
function tO(e) {
    return (0, tR.a3)(document, e);
}
function tF(e) {
    return i.useSyncExternalStore(tO, () => tD(e));
}
function tz(e) {
    let { frame: t, controlProjectId: n } = e,
        l = tF(t?.id ?? null),
        a = (0, th.Zv)(n),
        i = (0, d.bG)(
            [tP.A, tT.A],
            () => null != t && tP.A.getWindowOpen(em.MLl.ACTIVITY_POPOUT) && tT.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, tE.x1)(t) || i || a) return null;
    let s = t$(t.id);
    if (null == s || !(0, tR.Ub)(s)) return null;
    let o = el.intl.string(l ? el.t.Z7MyNB : el.t.OIDkcp);
    return (0, r.jsx)(q.A.Icon, {
        tooltip: o,
        icon: l ? tM.z : t_.T,
        "aria-label": o,
        role: "switch",
        "aria-checked": l,
        selected: l,
        onClick: () => {
            var e;
            let n;
            null != (n = t$((e = t.id))) && (0, tR.Ub)(n) && (tD(e) ? (0, tR.sP)(n) : (0, tR.tl)(n));
        },
    });
}
var tq = n(559106),
    tG = n(847374),
    tU = n(704745);
function tB(e) {
    let { targets: t, target: n, onChange: l } = e,
        [a, s] = i.useState(!1),
        o = null != n && t.length > 1;
    a && !o && s(!1);
    let u = i.useCallback(() => s(!1), []),
        c = i.useCallback(() => s((e) => !e), []),
        d = i.useRef(null);
    if (!o) return null;
    let m = el.intl.string(en.default.I2ucou);
    return (0, r.jsx)(K.Y, {
        targetElementRef: d,
        shouldShow: a,
        onRequestClose: u,
        position: "bottom",
        align: "right",
        animation: K.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, r.jsx)(W.W, {
                "data-menu-migrated": !0,
                navId: "conjure-preview-target",
                "aria-label": m,
                onClose: a,
                onSelect: a,
                children: (0, r.jsx)(X.rX, {
                    label: m,
                    children: t.map((e) => {
                        let t = tb(e);
                        return (0, r.jsx)(
                            X.iD,
                            {
                                id: `preview-target-${t}`,
                                group: "conjure-preview-target",
                                label: ty(e),
                                checked: t === tb(n),
                                action: () => {
                                    (l(e), u());
                                },
                            },
                            t,
                        );
                    }),
                }),
            });
        },
        children: (e, t) => {
            let { onClick: l, ...a } = e,
                { isShown: i } = t;
            return (0, r.jsx)(tq.vN, {
                children: (0, r.jsxs)("button", {
                    ...a,
                    ref: d,
                    type: "button",
                    className: tU.h,
                    "aria-haspopup": "menu",
                    "aria-expanded": i,
                    onClick: c,
                    children: [
                        (0, r.jsx)(j.E, {
                            tag: "span",
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: el.intl.string(en.default["N+VA1J"]),
                        }),
                        (0, r.jsx)(j.E, {
                            tag: "span",
                            variant: "text-sm/medium",
                            color: "none",
                            lineClamp: 1,
                            children: ty(n),
                        }),
                        (0, r.jsx)(tG.a, { size: "xs", color: "currentColor" }),
                    ],
                }),
            });
        },
    });
}
var tH = n(226178),
    tV = n(434279),
    tK = n(941985),
    tW = n(287809),
    tX = n(427262),
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
var t1 = n(16619),
    t2 = n(782603),
    t3 = n(780338),
    t7 = n(663417),
    t4 = n(70688),
    t6 = n(173936),
    t5 = n(473935),
    t8 = n(408278),
    t9 = n(365199),
    ne = n(7437),
    nt = n(147036),
    nn = n(957565),
    nl = n(785389),
    na = n(123917);
let nr = new Set();
var ni = n(329356),
    ns = n(616334),
    no = n(189714),
    nu = n(733791),
    nc = n(189213),
    nd = n(331322),
    nm = n(706935);
function nf(e) {
    let { project: t, target: n, action: l, ...a } = e,
        [s, o] = i.useState(n.canRemovePreviewBot),
        [u, c] = i.useState(!1),
        [d, m] = i.useState(null),
        f = "delete" === l,
        h = f ? (0, nu.fI)(n) : (0, nu.Kd)(n),
        g = f ? null : (0, nu.L4)(n),
        x = (0, nu.Mi)(n),
        p = f
            ? el.intl.formatToPlainString(en.default.CJBhb2, { name: n.projectName })
            : el.intl.formatToPlainString(en.default.x6FvsZ, { app: n.appName });
    async function b() {
        (c(!0), m(null));
        let e = f ? (0, ev.xx)(t.id) : (0, ev.YI)(t.id, { alsoRemovePreviewBot: s }),
            l = await e.catch(() => null);
        (c(!1), l?.ok !== !0)
            ? m(el.intl.string(f ? en.default["0XDHob"] : en.default.PJ2Fkn))
            : (f || (0, v.P0)({ text: (0, nu.p_)(n), variant: "success" }), a.onClose());
    }
    return (0, r.jsx)(nc.a, {
        ...a,
        role: "alertdialog",
        title: f ? p : (0, nu.WX)((0, nm.tb)(en.default.x6FvsZ, n.appName)),
        subtitle: f ? (0, nu.J)(n) : el.intl.string(en.default["8OKM1N"]),
        "aria-label": p,
        notice: null == d ? void 0 : { message: d, type: "critical" },
        actions: [
            { text: el.intl.string(el.t["ETE/oC"]), variant: "secondary", onClick: a.onClose },
            {
                text: el.intl.string(f ? en.default.aC42bN : en.default.BGF8VT),
                variant: "critical-primary",
                loading: u,
                disabled: u,
                onClick: () => {
                    b().catch(() => {});
                },
            },
        ],
        children: (0, r.jsxs)(nd.B, {
            gap: 12,
            children: [
                h.length > 0 || null != g
                    ? (0, r.jsx)(nm.Ay, {
                          items: h,
                          optionalItem:
                              null == g
                                  ? void 0
                                  : { item: g, checked: s, onChange: o, disabled: !n.canRemovePreviewBot },
                      })
                    : null,
                null != x ? (0, r.jsx)(j.E, { variant: "text-sm/normal", color: "text-muted", children: x }) : null,
            ],
        }),
    });
}
function nh(e) {
    (0, e5.openModal)((t) => (0, r.jsx)(nf, { ...t, ...e }));
}
var ng = n(552821);
let nx = [];
function np(e) {
    (0, v.P0)({ text: e, variant: "critical" });
}
function nv(e) {
    let {
            projectId: t,
            projectName: n,
            guildId: l,
            projectGuildId: a,
            isOwner: s,
            canRemix: o,
            onExport: u,
            onImport: c,
            onRemix: f,
            onConnectTool: h,
            onHistory: g,
            onRefresh: x,
            isRefreshing: p = !1,
            onClose: j,
            refreshApplicationId: b,
            previewProjectId: y,
            onCloseMenu: k,
        } = e,
        w = (0, no.iI)(t),
        A = i.useContext(ni.bI),
        { pending: N, refresh: C } = (0, ne.A)(b ?? null),
        { pending: E, connect: I } = (function (e, t) {
            let [n, l] = i.useState(nr),
                a = i.useRef(nr),
                r = i.useCallback((e) => {
                    ((a.current = (0, nl.Q6)(a.current, e)), l(a.current));
                }, []);
            return {
                pending: n,
                connect: i.useCallback(
                    (n) => {
                        if (null == e) return;
                        let i = (0, nl.K9)(a.current, n.type);
                        async function s() {
                            let l = await (0, J.JI)(e, n.type);
                            (r(n.type), "url" === l.type)
                                ? (0, na.h)({ href: l.url, trusted: !1 })
                                : t(
                                      "setup" === (0, nl.rq)(l.error)
                                          ? el.intl.string(en.default["jCQ/1B"])
                                          : el.intl.string(en.default.POxkSh),
                                  );
                        }
                        null != i && ((a.current = i), l(i), s().catch(() => r(n.type)));
                    },
                    [t, e, r],
                ),
            };
        })(y ?? null, np),
        M = (0, d.bG)([J.Ay], () => (null == y ? nx : J.Ay.getDeclaredConnections(y))),
        _ = i.useMemo(() => (0, nl.Xl)(M), [M]),
        T = (0, nu.Bs)(t),
        P = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: l, connectPending: a } = e,
                r = [];
            for (let { connection: e, offer: i } of (t &&
                r.push({
                    id: "preview-refresh",
                    label: el.intl.string(en.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            l))
                r.push(
                    "authorize" === i
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: el.intl.formatToPlainString(en.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: a.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: el.intl.formatToPlainString(en.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return r;
        })({ canRefresh: null != b, refreshPending: N, offers: _, connectPending: E }),
        R = i.useMemo(() => new Map(M.map((e) => [e.type, e])), [M]),
        L = null != f && o,
        $ = s && null != c,
        D = L || null != u || $ || null != h || null != g,
        O = nn.p5 && null != l,
        F = nn.p5,
        z = w ? t2.BellIcon : t3.BellSlashIcon;
    return (0, r.jsxs)(W.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": el.intl.string(el.t.ogxXGq),
        onClose: k,
        onSelect: k,
        children: [
            null != x || null != j
                ? (0, r.jsxs)(X.rX, {
                      children: [
                          null != x
                              ? (0, r.jsx)(X.Dr, {
                                    id: "refresh",
                                    icon: t7.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: t7.RefreshIcon },
                                    label: el.intl.string(en.default["p4B/7M"]),
                                    disabled: p,
                                    action: x,
                                })
                              : null,
                          null != j
                              ? (0, r.jsx)(X.Dr, {
                                    id: "close",
                                    icon: t4.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: t4.DoorExitIcon },
                                    label: el.intl.string(en.default["/TlGcK"]),
                                    action: j,
                                })
                              : null,
                      ],
                  })
                : null,
            P.length > 0
                ? (0, r.jsx)(X.rX, {
                      children: P.map((e) =>
                          (0, r.jsx)(
                              X.Dr,
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
            (0, r.jsx)(X.rX, {
                children: (0, r.jsx)(X.Dr, {
                    id: "mute",
                    label: el.intl.string(w ? en.default.s9rCuH : en.default["a+i/As"]),
                    icon: z,
                    leadingAccessory: { type: "icon", icon: z },
                    action: () => (0, no.$L)(t, !w),
                }),
            }),
            D
                ? (0, r.jsxs)(X.rX, {
                      children: [
                          L
                              ? (0, r.jsx)(X.Dr, { id: "remix", label: el.intl.string(en.default.XWgAfc), action: f })
                              : null,
                          null != u
                              ? (0, r.jsx)(X.Dr, { id: "export", label: el.intl.string(en.default.WsEEP7), action: u })
                              : null,
                          $
                              ? (0, r.jsx)(X.Dr, { id: "import", label: el.intl.string(en.default.rWGY3e), action: c })
                              : null,
                          null != h
                              ? (0, r.jsx)(X.Dr, {
                                    id: "connect-tool",
                                    label: el.intl.string(en.default.yOIql5),
                                    action: h,
                                })
                              : null,
                          null != g
                              ? (0, r.jsx)(X.Dr, {
                                    id: "history",
                                    label: el.intl.string(en.default["3hIVou"]),
                                    action: g,
                                })
                              : null,
                      ],
                  })
                : null,
            F
                ? (0, r.jsxs)(X.rX, {
                      children: [
                          O
                              ? (0, r.jsx)(X.Dr, {
                                    id: "copy-link",
                                    label: el.intl.string(el.t.WqhZss),
                                    icon: t6.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: t6.LinkIcon },
                                    action: () =>
                                        (0, nn.C)((0, nt.n)(l, ef.VV.CONJURE, t), () =>
                                            (0, v.P0)({ text: el.intl.string(el.t["L/PwZf"]), variant: "success" }),
                                        ),
                                })
                              : null,
                          (0, r.jsx)(X.Dr, {
                              id: "copy-project-id",
                              label: el.intl.string(en.default["nm/zuU"]),
                              icon: t5.L,
                              leadingAccessory: { type: "icon", icon: t5.L },
                              action: () =>
                                  (0, nn.C)(t, () =>
                                      (0, v.P0)({ text: el.intl.string(en.default.CmfaZG), variant: "success" }),
                                  ),
                          }),
                      ],
                  })
                : null,
            s || T?.canRemoveBot === !0
                ? (0, r.jsxs)(X.rX, {
                      children: [
                          s
                              ? (0, r.jsx)(X.Dr, {
                                    id: "settings",
                                    label: el.intl.string(en.default.FzfmQ8),
                                    icon: S.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: S.SettingsIcon },
                                    action: () =>
                                        (0, ns.A)(t, {
                                            guildId: a ?? l,
                                            initialTab: "project",
                                            isPreview: !0,
                                            publishOptions: A,
                                        }),
                                })
                              : null,
                          T?.canRemoveBot === !0
                              ? (0, r.jsx)(X.Dr, {
                                    id: "remove-from-server",
                                    label: el.intl.formatToPlainString(en.default["3gKG2j"], { server: T.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let e = ej.Ay.getProject(t);
                                        null != e && nh({ project: e, target: T, action: "remove" });
                                    },
                                })
                              : null,
                          s
                              ? (0, r.jsx)(X.Dr, {
                                    id: "delete",
                                    label: el.intl.string(el.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let e = ej.Ay.getProject(t);
                                        if (null != e && null != T) nh({ project: e, target: T, action: "delete" });
                                        else
                                            (0, m.A)({
                                                title: el.intl.formatToPlainString(en.default.CJBhb2, { name: n }),
                                                subtitle: el.intl.string(en.default["0OmrVn"]),
                                                confirmText: el.intl.string(el.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, ev.K)(t, () =>
                                                        (0, v.P0)({
                                                            text: el.intl.string(en.default["0XDHob"]),
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
function nj(e) {
    let { trigger: t = "header", ...n } = e,
        l = i.useRef(null);
    return (0, r.jsx)(K.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: K.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(nv, { ...n, onCloseMenu: t });
        },
        children: (e, n) => {
            let { onClick: a } = e,
                { isShown: i } = n;
            return (0, r.jsx)("div", {
                ref: l,
                className: ng.h,
                children:
                    "iconButton" === t
                        ? (0, r.jsx)(y.m, {
                              text: el.intl.string(el.t["UKOtz+"]),
                              children: (0, r.jsx)(t8.K, {
                                  icon: t9.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": el.intl.string(el.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": i,
                                  onClick: a,
                              }),
                          })
                        : (0, r.jsx)(q.A.Icon, {
                              icon: t9.MoreHorizontalIcon,
                              tooltip: el.intl.string(el.t["UKOtz+"]),
                              "aria-label": el.intl.string(el.t["UKOtz+"]),
                              "aria-haspopup": "menu",
                              "aria-expanded": i,
                              selected: i,
                              onClick: a,
                          }),
            });
        },
    });
}
var nb = n(497183),
    ny = n(104171),
    nk = n(286739);
function nw(e) {
    let { creator: t, className: n } = e;
    return (0, r.jsx)("div", {
        className: o()(nk.c, n),
        "aria-hidden": !0,
        children: (0, r.jsx)(ny.Ay, { users: [t.creator, ...t.collaborators], max: 3, size: ny.DN.SIZE_16 }),
    });
}
var nA = n(217846),
    nN = n(246338);
let nC = "user",
    nS = "no-server",
    nE = new Map();
function nI(e) {
    return nE.get(e) ?? null;
}
function nM(e) {
    switch (e) {
        case "all":
        case nC:
        case nS:
            return null;
        default:
            return e;
    }
}
function n_(e, t) {
    switch (t) {
        case "all":
            return !0;
        case nC:
            return "user" === e.install_scope;
        case nS:
            return null == (0, tV.wu)(e);
        default:
            return e.guild_id === t || e.preview_guild_id === t;
    }
}
var nT = n(506774);
let nP = "VibegrationsProjectsPanelOpen";
function nR() {
    return nT.w.get(nP) ?? null;
}
function nL(e) {
    return `VibegrationsProjectsPanel:${e}`;
}
var n$ = n(803101),
    nD = n(949616),
    nO = n(535466),
    nF = n(321032),
    nz = n(277085);
function nq(e) {
    let { projectId: t, name: n, description: l, onDone: a, transitionState: s, onClose: o } = e,
        { iconURL: u } = (0, nO.Ay)(t),
        [c, d] = i.useState(n),
        [m, f] = i.useState(l),
        [h, g] = i.useState(null),
        [x, p] = i.useState(null),
        [v, b] = i.useState(!1),
        y = c.trim(),
        k = y === n ? null : (0, nz.p)(y),
        w = h ?? u,
        A = m.trim();
    function N() {
        (a(), o());
    }
    async function C(e) {
        if ((e.preventDefault(), v || null != k)) return;
        (b(!0), p(null));
        let a = await (0, ni.$l)(t, { name: y, icon: h, description: m }, { name: n, description: l });
        (b(!1), a) ? N() : p(el.intl.string(en.default.Fi7boI));
    }
    let S = "" === y ? n : y;
    return (0, r.jsx)("form", {
        onSubmit: C,
        children: (0, r.jsx)(nc.a, {
            transitionState: s,
            onClose: o,
            title: el.intl.string(en.default.OmOWDq),
            subtitle: el.intl.string(en.default.Gzmlyg),
            size: "sm",
            preview: (0, r.jsx)(nF.w, { iconURL: w, name: S, description: A }),
            actions: [
                { text: el.intl.string(en.default["bz/M68"]), variant: "secondary", onClick: N, disabled: v },
                {
                    text: el.intl.string(en.default.dyIV6M),
                    variant: "primary",
                    type: "submit",
                    loading: v,
                    disabled: null != k,
                },
            ],
            children: (0, r.jsxs)(nd.B, {
                gap: 24,
                children: [
                    (0, r.jsx)(nF.r, {
                        iconURL: w,
                        canRemove: null != h,
                        onIconChange: (e) => {
                            (g(e), p(null));
                        },
                        name: c,
                        nameError: k,
                        onNameChange: d,
                        description: m,
                        onDescriptionChange: f,
                        previewName: S,
                        inlinePreview: !1,
                        disabled: v,
                    }),
                    null != x
                        ? (0, r.jsx)(j.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: x })
                        : null,
                ],
            }),
        }),
    });
}
var nG = n(516288);
function nU(e) {
    let { reason: t, message: n, onConfirm: l, transitionState: a, onClose: i } = e,
        s = (0, nG.t)(t, n);
    return (0, r.jsx)(nc.a, {
        transitionState: a,
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
var nB = n(951465),
    nH = n(95264),
    nV = n(952644),
    nK = n(58736),
    nW = n(689175),
    nX = n(683071),
    nY = n(65593),
    nJ = n(115982);
function nQ(e) {
    return !(0, eh.BL)(e) && !0 !== e.stopRequested;
}
var nZ = n(104317),
    n0 = n(643278),
    n1 = n(566424),
    n2 = n(683063),
    n3 = n(138212);
function n7(e) {
    let { title: t, trailing: n, children: l, className: a, headerClassName: i, ...s } = e;
    return (0, r.jsxs)("section", {
        className: o()(n3.Nr, a),
        ...s,
        children: [
            (0, r.jsxs)("header", {
                className: o()(n3.wx, null != n && n3.o5, i),
                children: [
                    (0, r.jsx)(j.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var n4 = n(148590);
function n6(e) {
    let { children: t } = e;
    return (0, r.jsx)(j.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function n5(e) {
    let {
            title: t,
            meta: n,
            superseded: l = !1,
            showLabel: a,
            hideLabel: s,
            bodyClassName: u,
            beforeBody: c,
            children: d,
            ...m
        } = e,
        f = i.useId(),
        [h, g] = i.useState(!l),
        [x, p] = i.useState(l);
    x !== l && (p(l), g(!l));
    let v = i.useCallback(() => g((e) => !e), []),
        j = h ? tG.a : tn._,
        y = null != n || l;
    return (0, r.jsxs)(n7, {
        ...m,
        title: t,
        trailing: y
            ? (0, r.jsxs)("span", {
                  className: n4.ZY,
                  children: [
                      n,
                      l
                          ? (0, r.jsx)(b.D, {
                                className: n4.L$,
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
        headerClassName: h ? void 0 : n4.RG,
        "data-superseded": l ? "true" : void 0,
        children: [c, (0, r.jsx)("div", { id: f, className: o()(n4.rf, u), hidden: !h, children: d })],
    });
}
var n8 = n(883646);
let n9 = [];
function le(e) {
    let { status: t } = e;
    return (0, r.jsxs)("span", {
        className: o()(n8.xL, {
            [n8.Vb]: "in_progress" === t,
            [n8.cT]: "completed" === t,
            [n8.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return el.intl.string(en.default.KvBdun);
                case "in_progress":
                    return el.intl.string(en.default["m5G9+S"]);
                case "unfinished":
                    return el.intl.string(en.default.lRpwhD);
                default:
                    return el.intl.string(en.default.sPGeWi);
            }
        })(t),
        children: [
            (0, r.jsx)(f.y, {
                type: f.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: n8.Qd,
                itemClassName: n8.xB,
                "aria-hidden": !0,
            }),
            (0, r.jsx)("svg", {
                className: n8.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, r.jsx)("path", { className: n8.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function lt(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : n9), [n, t]),
        a = i.useMemo(() => new Set(l.map((e) => e.key)), [l]),
        s = l.map((e) => e.key).join("\0"),
        [o, u] = i.useState(l),
        [c, d] = i.useState(s),
        [m, f] = i.useState(!1);
    c !== s && (d(s), u([...l, ...o.filter((e) => !a.has(e.key))]), 0 === l.length && f(!1));
    let h = o.some((e) => !a.has(e.key));
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
    let g = o.slice(0, 3),
        x = o.length - g.length;
    return (0, r.jsxs)("span", {
        className: n8.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, r.jsx)(
                    n2.u,
                    {
                        asset: (0, r.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, r.jsx)("span", {
                            className: n8.MA,
                            "data-leaving": a.has(t) ? void 0 : "true",
                            children: (0, r.jsx)(s, { size: 16, alt: l, ariaHidden: !0 }),
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
                      className: n8.qA,
                      children: `+${x}`,
                  })
                : null,
        ],
    });
}
function ln(e) {
    let t,
        { todos: n, provisional: l, agents: a, live: s = !0 } = e,
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
        c =
            ((t = (a ?? n9).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            i.useMemo(() => {
                let e = new Map();
                for (let t of a ?? n9) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let n = e.get(t.todoId);
                    null != n ? n.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, r.jsxs)("ul", {
        className: n8.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, r.jsxs)(
                    "li",
                    {
                        className: o()(n8.AS, { [n8.J1]: "completed" === n }),
                        "data-arriving": u.has(e.id) ? "true" : void 0,
                        children: [
                            (0, r.jsx)(le, { status: n }),
                            (0, r.jsx)(j.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: n8.iV,
                                selectable: !0,
                                children: (0, r.jsx)("span", {
                                    className: n8.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, r.jsx)(lt, { agents: c.get(e.id) ?? n9, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, r.jsxs)("li", {
                      className: n8.AS,
                      "data-provisional": !0,
                      children: [
                          (0, r.jsx)(le, { status: "pending" }),
                          (0, r.jsx)(j.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: n8.iV,
                              selectable: !0,
                              children: (0, r.jsx)("span", { className: n8.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function ll(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: a = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let c = el.intl.formatToPlainString(en.default["P/I+JW"], { completed: o, total: u }),
        d = el.intl.formatToPlainString(en.default["7tzwKB"], { completed: o, total: u });
    return (0, r.jsx)(n5, {
        title: el.intl.string(en.default.RtzECX),
        meta: (0, r.jsx)(n6, { children: c }),
        superseded: s,
        showLabel: el.intl.string(en.default.RKyN9q),
        hideLabel: el.intl.string(en.default.xydHoj),
        className: n8.Nr,
        bodyClassName: n8.rf,
        beforeBody: a && !s ? (0, r.jsx)(k.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, r.jsx)(ln, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var la = n(308665),
    lr = n(59678),
    li = n(903847);
function ls(e) {
    let { line: t, placement: n, todos: l, todosLive: a = !0, provisionalTodo: s, agents: u, onJumpToActivity: c } = e,
        d = null != n,
        [m, f] = i.useState(n ?? "top"),
        [h, g] = i.useState(d),
        [x, p] = i.useState(!1),
        [v, j] = i.useState(!1),
        [k, w] = i.useState(d);
    (k !== d && (w(d), null != n ? (f(n), g(!0)) : (p(!1), j(!1))),
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
    let [A, N] = i.useState(!1),
        [C, S] = i.useState(!1),
        [E, I] = i.useState(v);
    (E !== v && (I(v), v ? N(!0) : S(!1)),
        i.useEffect(() => {
            if (v || !A) return;
            let e = setTimeout(() => N(!1), 150);
            return () => clearTimeout(e);
        }, [v, A]),
        i.useEffect(() => {
            if (!A || !v) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => S(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [A, v]));
    let M = null != l && l.length > 0,
        _ = i.useCallback(() => j((e) => !e), []);
    return h
        ? (0, r.jsxs)("div", {
              className: li.qd,
              "data-placement": m,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, r.jsxs)("div", {
                      className: o()(li.vK, { [li.ho]: x && d, [li.ET]: !d }),
                      children: [
                          null == c
                              ? (0, r.jsx)("ol", {
                                    className: o()(li.Rk, lr.pj),
                                    "data-live": "true",
                                    children: (0, r.jsx)(n1.A, {
                                        glyph: (0, r.jsx)(la.Ay, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, r.jsx)(b.D, {
                                    className: li.pZ,
                                    onClick: c,
                                    "aria-label": el.intl.string(en.default.hEK6qu),
                                    children: (0, r.jsx)("ol", {
                                        className: o()(li.Rk, lr.pj),
                                        "data-live": "true",
                                        children: (0, r.jsx)(n1.A, {
                                            glyph: (0, r.jsx)(la.Ay, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          M
                              ? (0, r.jsx)(y.m, {
                                    text: el.intl.string(en.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, r.jsx)(b.D, {
                                        className: li.BO,
                                        onClick: _,
                                        "aria-expanded": v,
                                        "aria-label": el.intl.string(en.default.RtzECX),
                                        children: (0, r.jsx)(n0.ClipboardListIcon, {
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
                      ? (0, r.jsx)("div", {
                            className: o()(li.vB, { [li.pg]: v && C, [li.ui]: !v }),
                            children: (0, r.jsx)(ll, {
                                todos: l,
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
var lo = n(658675),
    lu = n(22231),
    lc = n(826745),
    ld = n(123292),
    lm = n(734057);
let lf = {
        [em.rbe.GUILD_TEXT]: "text",
        [em.rbe.GUILD_VOICE]: "voice",
        [em.rbe.GUILD_ANNOUNCEMENT]: "announcement",
        [em.rbe.GUILD_STAGE_VOICE]: "stage",
        [em.rbe.GUILD_FORUM]: "forum",
        [em.rbe.GUILD_MEDIA]: "media",
    },
    lh = { channel: "#", role: "@", user: "@" },
    lg = {
        channel: [en.default["9+dfPT"], en.default.pGSJqE],
        role: [en.default["2VkCoD"], en.default.c8YlX8],
        user: [en.default.GZIAxl, en.default["4bptbQ"]],
    };
function lx(e, t) {
    return el.intl.string(lg[e][+!!t]);
}
var lp = n(155078);
function lv(e) {
    return e.options.some((e) => null != e.image);
}
let lj = [];
function lb(e, t) {
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
var ly = n(890497),
    lk = n(300344),
    lw = n(614733),
    lA = n(904363),
    lN = n(950902),
    lC = n(384017);
function lS(e) {
    let {
            guildId: t,
            question: n,
            value: l,
            disabled: a,
            onChange: i,
            onFocus: s,
            onBlur: o,
            options: u,
            placeholder: c,
            onQueryChange: d,
            matchSorterOptions: m,
        } = e,
        f = !0 === n.multi_select,
        h = l.map((e) => e.id);
    function g(e) {
        var t, a;
        return (
            (t = n.input ?? "channel"),
            (a = (e) => u.find((t) => t.value === e)?.label),
            e.slice(0, 10).map((e) => ({
                id: e,
                name: a(e) ?? l.find((t) => t.id === e)?.name ?? e,
                ...(function (e, t) {
                    if ("channel" === e) {
                        var n;
                        let l = null == (n = lm.A.getChannel(t)?.type) ? void 0 : lf[n];
                        return { kind: e, ...(null == l ? {} : { channel_type: l }) };
                    }
                    if ("user" === e) {
                        let n = tW.default.getUser(t)?.username;
                        return { kind: e, ...(null == n ? {} : { username: n }) };
                    }
                    return { kind: e };
                })(t, e),
            }))
        );
    }
    let x = {
        options: u,
        placeholder: c,
        disabled: a,
        onQueryChange: d,
        matchSorterOptions: m,
        onFocus: s,
        onBlur: o,
        fullWidth: !0,
        maxOptionsVisible: 4,
        label: n.question,
        hideLabel: !0,
    };
    return (0, r.jsx)("div", {
        className: lC.YX,
        "data-conjure-clarification-picker": n.input,
        children: f
            ? (0, r.jsx)(ly.Z, {
                  ...x,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => i(g(e), t),
              })
            : (0, r.jsx)(ly.Z, {
                  ...x,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => i(null == e ? [] : g([e]), t),
              }),
    });
}
function lE(e) {
    let { guildId: t, fallback: n, ...l } = e,
        a = (0, lk.A)(t, l.question.channel_filter);
    return null == a
        ? n
        : (0, r.jsx)(lS, { ...l, guildId: t, options: a, placeholder: lx("channel", !0 === l.question.multi_select) });
}
function lI(e) {
    let { guildId: t, ...n } = e,
        l = (0, lA.A)(t);
    return (0, r.jsx)(lS, { ...n, guildId: t, options: l, placeholder: lx("role", !0 === n.question.multi_select) });
}
function lM(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: a, matchSorterOptions: i } = (0, lw.A)(t);
    return (0, r.jsx)(lS, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: a,
        matchSorterOptions: i,
        placeholder: lx("user", !0 === n.question.multi_select),
    });
}
function l_(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        a = (0, lN.Tj)(t, !0);
    if (null == a) return n;
    switch (l.question.input) {
        case "channel":
            return (0, r.jsx)(lE, { guildId: a, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, r.jsx)(lI, { guildId: a, ...l }, l.question.id);
        case "user":
            return (0, r.jsx)(lM, { guildId: a, ...l }, l.question.id);
        default:
            return n;
    }
}
var lT = n(87221),
    lP = n(144228),
    lR = n(241326),
    lL = n(26430),
    l$ = n(750943),
    lD = n(95477),
    lO = n(256905),
    lF = n(73153),
    lz = n(839214);
let lq = [],
    lG = 1,
    lU = (0, lz.D)(() => ({ draftsByProject: {} }));
function lB(e, t, n) {
    return e.draftsByProject[t]?.[n] ?? lq;
}
function lH(e, t) {
    return lB(lU.getState(), e, t);
}
function lV(e, t, n) {
    let { draftsByProject: l } = lU.getState();
    lU.setState({ draftsByProject: { ...l, [e]: { ...l[e], [t]: n } } });
}
function lK(e, t, n, l) {
    let a = lH(e, t);
    return (
        !!a.some((e) => e.localId === n) &&
        (lV(
            e,
            t,
            a.map((e) => (e.localId === n ? { ...e, ...l } : e)),
        ),
        !0)
    );
}
function lW(e, t) {
    (0, J.Vm)(e, t).catch((e) => {
        console.error("[vibegrations] attachment cleanup failed", e);
    });
}
function lX(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && lW(e, t.ref.id));
}
function lY(e, t) {
    let { deleteFromWorker: n } = t,
        { draftsByProject: l } = lU.getState(),
        a = l[e];
    if (null == a) return;
    for (let t of Object.values(a))
        for (let l of t ?? lq) n ? lX(e, l) : null != l.previewUrl && URL.revokeObjectURL(l.previewUrl);
    let { [e]: r, ...i } = l;
    lU.setState({ draftsByProject: i });
}
function lJ(e) {
    return el.intl.formatToPlainString(en.default.JZ59Bo, { size: (0, V.sM)((0, V.Ju)(e)) });
}
function lQ(e, t) {
    let n = lH(e, t);
    if (0 !== n.length) {
        for (let t of n) lX(e, t);
        lV(e, t, lq);
    }
}
function lZ(e, t) {
    let n = lH(e, t);
    if (0 === n.length) return [];
    for (let e of n) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (lV(e, t, lq), n.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function l0(e, t) {
    let { clarificationAnswers: n, attachments: l = [] } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = lH(e, "chat"),
        r = a.length > 0 && a.every((e) => "ready" === e.status) ? lZ(e, "chat") : [];
    (0, J.dv)(e, t, [...l, ...r], { clarificationAnswers: n });
}
function l1(e, t) {
    let [n, l] = i.useState(null),
        [a, r] = i.useState(!1),
        [s, o] = i.useState(0);
    return (
        i.useEffect(() => {
            let n = !1;
            return (
                (0, J.PK)(e, t).then(
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
                    (0, J.n6)(e, t).then(
                        (e) => {
                            e && 0 === s ? o(1) : r(!0);
                        },
                        () => r(!0),
                    ));
            }, [e, t, s]),
        }
    );
}
(lF.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(lU.getState().draftsByProject)) lY(e, { deleteFromWorker: !0 });
}),
    lF.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        lY(t, { deleteFromWorker: !1 });
    }));
var l2 = n(907702);
function l3(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: a } = e,
        { src: s, gone: u, handleError: c } = l1(t, n),
        [d, m] = i.useState(null),
        f = null != s && d === s;
    return u
        ? (0, r.jsxs)("span", {
              className: o()(l2.Gt, l2.b6),
              children: [
                  (0, r.jsx)(lT.D, { size: "md", color: "currentColor" }),
                  (0, r.jsx)(j.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: el.intl.string(en.default.lhgD88),
                  }),
              ],
          })
        : (0, r.jsx)("span", {
              className: o()(l2.Gt, { [l2.iP]: !f }),
              children:
                  null != s
                      ? (0, r.jsx)("img", {
                            src: s,
                            alt: l,
                            className: l2.Sl,
                            onLoad: (e) => {
                                m(s);
                                let { naturalWidth: t, naturalHeight: n } = e.currentTarget;
                                t > 0 && n > 0 && a({ width: t, height: n });
                            },
                            onError: c,
                            draggable: !1,
                        })
                      : null,
          });
}
function l7(e) {
    let t,
        n,
        {
            projectId: l,
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
        p = el.intl.formatToPlainString(en.default.JGjZMs, { answer: a.label });
    return (0, r.jsxs)("div", {
        className: o()(l2.Vs, { [l2.Q9]: s, [l2.RX]: u }),
        "data-conjure-clarification-option": a.id,
        children: [
            (0, r.jsxs)(b.D, {
                className: l2.Up,
                "data-conjure-image-option-pick": !0,
                onClick: u ? void 0 : () => m(a),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), h(a, t));
                },
                role: i ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": el.intl.formatToPlainString(en.default.AQbxhf, { answer: a.label }),
                "aria-disabled": u,
                tabIndex: c && d ? 0 : -1,
                children: [
                    (0, r.jsxs)("span", {
                        className: l2.$_,
                        children: [
                            null != a.image
                                ? (0, r.jsx)(l3, {
                                      projectId: l,
                                      attachmentId: a.image.attachment_id,
                                      alt: a.label,
                                      onMeasured: g,
                                  })
                                : (0, r.jsx)("span", { className: l2.Gt }),
                            (0, r.jsx)("span", {
                                className: l2.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, r.jsx)(lo.P, { checked: s, disabled: u })
                                    : (0, r.jsx)(lP.T, { checked: s, disabled: u }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(j.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: l2.pG,
                        children:
                            "" !== (n = null != (t = a.image?.page_url ?? a.image?.url) ? (0, lp.E)(t) : "")
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
            null != x
                ? (0, r.jsx)("span", {
                      className: l2.B4,
                      children: (0, r.jsx)(y.m, {
                          text: el.intl.string(en.default.HQEXJM),
                          children: (0, r.jsx)(t8.K, {
                              icon: lR.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: x,
                              disabled: u,
                              "aria-label": el.intl.string(en.default.HQEXJM),
                              tabIndex: c ? 0 : -1,
                          }),
                      }),
                  })
                : null != a.image
                  ? (0, r.jsx)("span", {
                        className: l2.B4,
                        children: (0, r.jsx)(y.m, {
                            text: el.intl.string(en.default["4/eeDD"]),
                            children: (0, r.jsx)(t8.K, {
                                icon: lL._,
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
function l4(e) {
    var t;
    let { projectId: n, question: l, selectedIds: a, disabled: s, reachable: u = !0, onPick: c, own: d } = e,
        m = !0 === l.multi_select,
        { options: f } = l,
        h = f.length > 4 ? "gallery" : "row",
        g = i.useRef(null),
        x = i.useRef(new Map()),
        [p, v] = i.useState(null),
        j = null != p && f.some((e) => e.id === p) ? p : (f.find((e) => a.includes(e.id)) ?? f[0])?.id,
        b = i.useCallback(
            (e) => {
                let t = f.flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    l = t.findIndex((t) => t.id === e.id);
                l < 0 ||
                    Promise.all(t.map((e) => (0, J.PK)(n, e.image.attachment_id))).then(
                        (e) => {
                            (0, lO.R)({
                                items: e.map((e, n) => {
                                    let l,
                                        a = x.current.get(t[n].id);
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
                (v(l.id), g.current?.querySelectorAll("[data-conjure-image-option-pick]")[n]?.focus(), m || s || c(l));
            },
            [s, m, c, f],
        ),
        k =
            null == d.image
                ? null
                : ((t = d.image),
                  {
                      id: `own:${t.attachment.id}`,
                      label: el.intl.string(en.default.SUdqCQ),
                      image: { attachment_id: t.attachment.id },
                  });
    return (0, r.jsxs)("div", {
        className: l2.Nz,
        "data-conjure-image-options": !0,
        children: [
            (0, r.jsxs)("div", {
                ref: g,
                className: o()(l2.fF, "gallery" === h ? l2.nV : l2.nM, { [l2.m3]: m }),
                role: m ? "group" : "radiogroup",
                "aria-labelledby": `${l.id}-label`,
                "data-layout": h,
                "data-count": f.length,
                children: [
                    f.map((e) =>
                        (0, r.jsx)(
                            l7,
                            {
                                projectId: n,
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
                              l7,
                              {
                                  projectId: n,
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
            (0, r.jsx)(l6, {
                projectId: n,
                own: d,
                disabled: s,
                reachable: u,
                uploadText: el.intl.string(/\bicons?\b/i.test(l.question) ? en.default.qU4WN6 : en.default.cbMDDB),
            }),
        ],
    });
}
function l6(e) {
    let { projectId: t, own: n, disabled: l, reachable: a, uploadText: s } = e,
        o = i.useRef(null),
        [u, c] = i.useState(!1),
        [d, m] = i.useState(""),
        f = a ? 0 : -1,
        h = n.busy;
    function g() {
        "" !== d.trim() &&
            null == h &&
            n.onLink(d.trim()).then(
                (e) => {
                    e && (c(!1), m(""));
                },
                () => void 0,
            );
    }
    return (0, r.jsxs)("div", {
        className: l2.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, r.jsxs)("div", {
                className: l2.QJ,
                children: [
                    (0, r.jsx)(w.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: l$.X,
                        text: s,
                        loading: "upload" === h,
                        disabled: l || "link" === h,
                        onClick: () => o.current?.click(),
                        tabIndex: f,
                        "data-conjure-own-image-upload": !0,
                    }),
                    u
                        ? null
                        : (0, r.jsx)(w.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: t6.LinkIcon,
                              text: el.intl.string(en.default["1TgOO+"]),
                              disabled: l || "upload" === h,
                              onClick: () => c(!0),
                              tabIndex: f,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, r.jsx)("input", {
                        ref: o,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: l2.Fg,
                        tabIndex: -1,
                        "aria-hidden": !0,
                        onChange: (e) => {
                            var l, a;
                            let r = e.currentTarget.files?.[0];
                            ((e.currentTarget.value = ""),
                                null != r &&
                                    n.onUpload(
                                        ((l = r.name),
                                        (a = r.type),
                                        (0, V.Oq)(r.size, a)
                                            ? (0, J.c9)(t, r, l, a)
                                            : Promise.resolve({ errorText: lJ(a) })),
                                    ));
                        },
                    }),
                ],
            }),
            u
                ? (0, r.jsxs)("div", {
                      className: l2.vG,
                      children: [
                          (0, r.jsx)("div", {
                              className: l2.Hs,
                              children: (0, r.jsx)(lD.k, {
                                  label: el.intl.string(en.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: el.intl.string(en.default.AVhvn8),
                                  value: d,
                                  onChange: (e) => m(e),
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
                          (0, r.jsxs)("div", {
                              className: l2.gd,
                              children: [
                                  (0, r.jsx)(w.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: el.intl.string(en.default.FbRbeM),
                                      loading: "link" === h,
                                      disabled: l || "" === d.trim(),
                                      onClick: g,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, r.jsx)(ld.Q, {
                                      variant: "secondary",
                                      textVariant: "text-sm/medium",
                                      text: el.intl.string(en.default.eXZL4X),
                                      onClick: () => c(!1),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
            n.error?.source === "upload"
                ? (0, r.jsx)(j.E, {
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
var l5 = n(29073);
function l8(e) {
    let { option: t, position: n, disabled: l, onPick: a, reachable: s = !0, selected: u } = e,
        c = i.useId(),
        d = !0 === t.recommended,
        m = null != t.detail && "" !== t.detail;
    return (0, r.jsxs)(b.D, {
        className: o()(lC.uK, { [lC.ue]: l, [lC.h4]: !0 === u }),
        onClick: l ? void 0 : () => a(t),
        "aria-label": el.intl.formatToPlainString(d ? en.default["2p6UFz"] : en.default.AQbxhf, { answer: t.label }),
        "aria-describedby": m ? c : void 0,
        "aria-disabled": l,
        role: null != u ? "checkbox" : void 0,
        "aria-checked": u,
        tabIndex: s ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            null != u
                ? (0, r.jsx)("span", { className: lC.dy, children: (0, r.jsx)(lo.P, { checked: u, disabled: l }) })
                : (0, r.jsx)("span", { className: lC.Gy, "aria-hidden": !0, children: n }),
            (0, r.jsxs)("span", {
                className: lC.qO,
                children: [
                    (0, r.jsx)("span", {
                        className: lC.l8,
                        children: (0, r.jsx)(j.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: lC.ed,
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
                      className: lC.rM,
                      children: el.intl.string(en.default.zku6r1),
                  })
                : null,
        ],
    });
}
function l9(e) {
    let { projectId: t, question: n, selected: l, disabled: a, reachable: i = !0, onPick: s, own: o } = e,
        u = !0 === n.multi_select;
    return lv(n)
        ? (0, r.jsx)(l4, { projectId: t, question: n, selectedIds: l, disabled: a, reachable: i, onPick: s, own: o })
        : (0, r.jsx)(r.Fragment, {
              children: n.options.map((e, t) =>
                  (0, r.jsx)(
                      l8,
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
let ae = [],
    at = [];
function an(e) {
    let {
            projectId: t,
            question: n,
            draft: l,
            selected: a,
            direction: i,
            disabled: s,
            ownImage: u,
            ownSelected: c,
        } = e,
        d = "" === l.trim() ? null : l,
        m = !0 === n.multi_select;
    return (0, r.jsxs)("div", {
        className: o()(lC.Ge, lC.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            m
                ? (0, r.jsx)(j.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: lC.aK,
                      children: el.intl.string(en.default.tE8qbz),
                  })
                : null,
            (0, r.jsx)(l9, {
                projectId: t,
                question: n,
                selected: a,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: lb(u, c),
            }),
            lv(n) || !1 === n.allow_custom
                ? null
                : (0, r.jsxs)("div", {
                      className: lC.Xy,
                      children: [
                          (0, r.jsx)("span", {
                              className: lC.Gy,
                              "aria-hidden": !0,
                              children: (0, r.jsx)(lu.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == d ? null : (0, r.jsx)("span", { className: o()(lC.Pu, lC.es), children: d }),
                      ],
                  }),
        ],
    });
}
function al(e) {
    var t;
    let { projectId: n, clarification: l, onSubmit: a, onDismiss: s } = e,
        [u, c] = i.useState({}),
        [d, m] = i.useState({}),
        [f, h] = i.useState({}),
        [g, x] = i.useState({}),
        [p, v] = i.useState({}),
        [k, A] = i.useState(!1),
        [N, C] = i.useState(0),
        [S, E] = i.useState(null),
        [I, M] = i.useState(null),
        [_, T] = i.useState(null),
        [R, L] = i.useState(!1),
        $ = i.useRef(null),
        [D, O] = i.useState(null),
        F = i.useRef(null),
        z = i.useRef(0),
        q = null == a,
        G = l.questions.length,
        U = Math.min(N, G - 1),
        B = l.questions[U],
        [H, V] = i.useState({ id: B.id, expanded: !1 }),
        K = H.id === B.id && H.expanded,
        [W, X] = i.useState(null),
        Y = d[B.id] ?? "",
        Q = !0 === B.multi_select,
        Z = lv(B),
        ee = Q ? (f[B.id] ?? ae) : ((t = u[B.id]), t?.kind === "option" ? [t.optionId] : lj),
        et = (function (e, t, n) {
            let [l, a] = i.useState({}),
                [r, s] = i.useState({}),
                [o, u] = i.useState({}),
                c = el.intl.string(en.default.wTsP5l),
                d = i.useCallback((e) => l[e] ?? null, [l]),
                m = i.useCallback(
                    (e) => null != l[e.id] && (!0 === e.multi_select ? !0 === o[e.id] : t[e.id]?.kind === "image"),
                    [t, l, o],
                ),
                f = i.useCallback(
                    (e) => {
                        let t = l[e.id];
                        return null != t && !0 === o[e.id] ? { attachment: t.attachment, text: c } : void 0;
                    },
                    [c, l, o],
                ),
                h = i.useCallback(
                    (i, o) => {
                        let d = i.id,
                            f = !0 === i.multi_select,
                            h = l[d] ?? null;
                        if (o) return lb(h, m(i));
                        function g(e) {
                            return s((t) => ({ ...t, [d]: e }));
                        }
                        function x(e) {
                            return { kind: "image", attachment: e.attachment, text: c };
                        }
                        let p = t[d];
                        function v(t) {
                            (a((n) => {
                                let l = n[d];
                                return (
                                    null != l && (0, J.Vm)(e, l.attachment.id).catch(() => void 0), { ...n, [d]: t }
                                );
                            }),
                                g({ busy: null, error: null }),
                                f ? u((e) => ({ ...e, [d]: !0 })) : n((e) => (e[d] === p ? { ...e, [d]: x(t) } : e)));
                        }
                        return {
                            image: h,
                            selected: m(i),
                            busy: r[d]?.busy ?? null,
                            error: r[d]?.error ?? null,
                            onPick: () => {
                                null != h &&
                                    (f ? u((e) => ({ ...e, [d]: !0 !== e[d] })) : n((e) => ({ ...e, [d]: x(h) })));
                            },
                            onRemove: () => {
                                null != h &&
                                    ((0, J.Vm)(e, h.attachment.id).catch(() => void 0),
                                    a((e) => {
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
                                                error: { source: "upload", text: el.intl.string(en.default["kUw/b1"]) },
                                            }),
                                    ));
                            },
                            onLink: (t) => (
                                g({ busy: "link", error: null }),
                                (0, J.gm)(e, t).then(
                                    (e) => (v({ attachment: e }), !0),
                                    (e) => (
                                        g({
                                            busy: null,
                                            error: {
                                                source: "link",
                                                text:
                                                    e instanceof Error && "" !== e.message
                                                        ? e.message
                                                        : el.intl.string(en.default.l79PMc),
                                            },
                                        }),
                                        !1
                                    ),
                                )
                            ),
                        };
                    },
                    [c, t, l, e, m, n, r],
                );
            return { imageFor: d, selectedFor: m, multiPartFor: f, controlsFor: h };
        })(n, u, c),
        ea = et.imageFor(B.id),
        er = et.selectedFor(B),
        { text: ei, phase: es } = (0, ta.Q)(B.question),
        eo = ei === B.question,
        eu = eo && W?.id === B.id && W.truncated;
    i.useLayoutEffect(() => {
        if (null == D || K || !eo) return;
        function e() {
            if (null == D) return;
            let e = D.scrollHeight > D.clientHeight + 1;
            X((t) => (t?.id === B.id && t.truncated === e ? t : { id: B.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(D), () => t.disconnect());
    }, [eo, D, B.id, K]);
    let ec = el.intl.string(K ? el.t.iTcuma : el.t.dcl9MQ),
        ed = i.useCallback(
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
                                a =
                                    "custom" === n.kind
                                        ? n.text.trim()
                                        : "multi" === n.kind || "entities" === n.kind
                                          ? n.custom
                                          : void 0,
                                r = "entities" === n.kind ? n.entities : [],
                                i = "entities" === n.kind && r.length > 0 ? n.guildId : void 0,
                                s = "image" === n.kind || "multi" === n.kind ? n.attachment : void 0;
                            return [
                                {
                                    question_id: t.id,
                                    option_ids: l,
                                    ...(null != a && "" !== a ? { custom: a } : {}),
                                    ...(null != s ? { attachment_id: s.id } : {}),
                                    ...(r.length > 0 ? { entities: r } : {}),
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
            [l, a],
        ),
        em = i.useCallback(
            (e, t) => {
                z.current += 1;
                let n = z.current;
                (E({ direction: t, moves: n }),
                    M({ question: B, draft: Y, selected: ee, ownImage: ea, ownSelected: er, direction: t, moves: n }),
                    L(!0),
                    C(e));
            },
            [Y, ea, er, B, ee],
        ),
        ef = i.useCallback(() => {
            let e = $.current,
                t = F.current;
            null != e && null != t && T({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    i.useLayoutEffect(() => {
        let e = $.current,
            t = F.current;
        if (null == e || null == t) return;
        ef();
        let n = new ResizeObserver(ef);
        return (n.observe(e), n.observe(t), () => n.disconnect());
    }, [ef]);
    let eh = S?.moves;
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
                if (q) return;
                let t = { ...u, [B.id]: e };
                c(t);
                let n =
                    U < l.questions.length - 1
                        ? U + 1
                        : (function (e, t, n) {
                              let { questions: l } = e;
                              for (let e = 1; e <= l.length; e++) {
                                  let a = (n + e) % l.length,
                                      r = t[l[a].id];
                                  if (null == r || "" === r.text.trim()) return a;
                              }
                              return null;
                          })(l, t, U);
                null == n ? ed(t) : em(n, n < U ? "back" : "forward");
            },
            [u, l, q, U, B.id, ed, em],
        ),
        ex = i.useCallback(() => {
            q || 0 === U || em(U - 1, "back");
        }, [q, U, em]),
        ep = U > 0 && !q,
        ev = i.useCallback(
            (e) => {
                m((e) => ({ ...e, [B.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                Z ? q || c((e) => ({ ...e, [B.id]: t })) : eg(t);
            },
            [q, Z, B.id, eg],
        ),
        { multiPartFor: ej } = et,
        eb = i.useMemo(() => {
            var e;
            let t, n;
            return Q
                ? ((e = ej(B)),
                  (t = Y.trim()),
                  (n = B.options.filter((e) => ee.includes(e.id)).map((e) => e.label)),
                  {
                      kind: "multi",
                      optionIds: ee,
                      ...("" === t ? {} : { custom: t }),
                      ...(null == e ? {} : { attachment: e.attachment }),
                      text: [...n, ...(null == e ? [] : [e.text]), ...("" === t ? [] : [t])].join(", "),
                  })
                : null;
        }, [Y, Q, ej, B, ee]),
        ey = g[B.id] ?? at,
        ek = i.useMemo(() => {
            var e, t;
            let n;
            return null != B.input
                ? ((e = B.input),
                  (t = p[B.id]),
                  (n = Y.trim()),
                  {
                      kind: "entities",
                      entities: ey,
                      ...(null == t ? {} : { guildId: t }),
                      ...("" === n ? {} : { custom: n }),
                      text: [
                          ...ey.map((t) => (t.name.startsWith(lh[e]) ? t.name : `${lh[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [Y, p, ey, B.id, B.input]),
        ew = i.useCallback(
            (e, t) => {
                (x((t) => ({ ...t, [B.id]: e })), v((e) => ({ ...e, [B.id]: t })));
            },
            [B.id],
        ),
        eA = i.useCallback(() => A(!0), []),
        eN = i.useCallback(() => A(!1), []),
        eC = et.controlsFor(B, q),
        eS = i.useCallback(() => {
            if (null != ek) {
                "" !== ek.text && eg(ek);
                return;
            }
            if (null != eb) {
                "" !== eb.text && eg(eb);
                return;
            }
            let e = Y.trim();
            "" !== e && eg({ kind: "custom", text: e });
        }, [Y, eb, ek, eg]),
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
                      : "" !== Y.trim()
                        ? { kind: "custom", text: Y.trim() }
                        : (u[B.id] ?? null),
            [u, Y, eb, ek, B.id],
        ),
        eR = null != eP && !q,
        eL = U === G - 1,
        e$ = i.useCallback(() => {
            null == eP || q || eg(eP);
        }, [q, eP, eg]),
        eD = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, tL.vq)(e.target, HTMLTextAreaElement) ||
                    (0, tL.vq)(e.target, HTMLInputElement) ||
                    ((!(0, tL.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && ep
                            ? (e.preventDefault(), ex())
                            : "ArrowRight" === e.key && eR && (e.preventDefault(), e$())));
            },
            [ep, eR, ex, e$],
        ),
        eO = Z
            ? null
            : (0, r.jsxs)("div", {
                  className: lC.Xy,
                  children: [
                      (0, r.jsx)("span", {
                          className: lC.Gy,
                          "aria-hidden": !0,
                          children: (0, r.jsx)(lu.PencilIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                          }),
                      }),
                      (0, r.jsx)(lc.y, {
                          value: Y,
                          onChange: (e) => {
                              let { value: t } = e.currentTarget;
                              m((e) => ({ ...e, [B.id]: t }));
                          },
                          onKeyDown: (e) => {
                              "Enter" !== e.key ||
                                  e.shiftKey ||
                                  e.nativeEvent.isComposing ||
                                  (e.preventDefault(), eS());
                          },
                          placeholder: el.intl.string(en.default["tOC+tn"]),
                          "aria-label": el.intl.formatToPlainString(en.default["4JeYPB"], { question: B.question }),
                          disabled: q,
                          rows: 1,
                          className: lC.Pu,
                          "data-conjure-clarification-other": B.id,
                      }),
                  ],
              });
    return (0, r.jsxs)("section", {
        className: o()(lC.$O, { [lC.fI]: eE && !eM, [lC.Oh]: eM }),
        role: "dialog",
        "aria-label": B.question,
        "data-conjure-clarification": l.id,
        "data-state": q ? "inert" : "open",
        "data-question-expanded": K ? "true" : void 0,
        "data-picker-open": k && !R ? "true" : void 0,
        "data-step": U,
        tabIndex: -1,
        onKeyDown: eD,
        children: [
            (0, r.jsxs)("div", {
                className: lC.rf,
                style: null == _ ? void 0 : { height: _.heading + _.rows },
                "data-moving": R ? "" : void 0,
                children: [
                    (0, r.jsxs)("div", {
                        ref: $,
                        className: lC.wx,
                        children: [
                            (0, r.jsx)(j.E, {
                                ref: O,
                                tag: "span",
                                id: `${B.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: K ? void 0 : 5,
                                className: o()(l5.TK, lC.R_, { [lC.TB]: "exit" === es, [lC.JU]: "enter" === es }),
                                children: ei,
                            }),
                            eu || K
                                ? (0, r.jsx)("div", {
                                      className: l5.Q7,
                                      children: (0, r.jsx)(y.m, {
                                          text: ec,
                                          children: (0, r.jsx)(t8.K, {
                                              icon: K ? tt.t : tG.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => V({ id: B.id, expanded: !K }),
                                              "aria-label": ec,
                                              "aria-controls": `${B.id}-label`,
                                              "aria-expanded": K,
                                          }),
                                      }),
                                  })
                                : null,
                            null == s
                                ? null
                                : (0, r.jsx)(b.D, {
                                      className: o()(l5.gb, l5.Q7),
                                      onClick: eT,
                                      "aria-label": el.intl.string(en.default.qVXlk0),
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
                        className: lC.Cg,
                        style: null == _ ? void 0 : { insetBlockStart: _.heading },
                        children: (0, r.jsxs)("div", {
                            className: lC.I,
                            children: [
                                (0, r.jsxs)("div", {
                                    ref: F,
                                    className: lC.Ge,
                                    role: "group",
                                    "aria-labelledby": `${B.id}-label`,
                                    "data-direction": S?.direction,
                                    "data-parity": null == S ? void 0 : S.moves % 2,
                                    children: [
                                        Q
                                            ? (0, r.jsx)(j.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: lC.aK,
                                                  children: el.intl.string(en.default.tE8qbz),
                                              })
                                            : null,
                                        (0, r.jsx)(l9, {
                                            projectId: n,
                                            question: B,
                                            selected: ee,
                                            disabled: q,
                                            onPick: (e) =>
                                                Q
                                                    ? h((t) => {
                                                          var n, l;
                                                          let a;
                                                          return {
                                                              ...t,
                                                              [B.id]:
                                                                  ((n = t[B.id] ?? ae),
                                                                  (l = e.id),
                                                                  (a = n.includes(l)
                                                                      ? n.filter((e) => e !== l)
                                                                      : [...n, l]),
                                                                  B.options
                                                                      .filter((e) => a.includes(e.id))
                                                                      .map((e) => e.id)),
                                                          };
                                                      })
                                                    : ev(e),
                                            own: eC,
                                        }),
                                        null != B.input
                                            ? (0, r.jsx)(l_, {
                                                  projectId: n,
                                                  question: B,
                                                  value: ey,
                                                  disabled: q,
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
                                    : (0, r.jsx)(
                                          an,
                                          {
                                              projectId: n,
                                              question: I.question,
                                              draft: I.draft,
                                              selected: I.selected,
                                              ownImage: I.ownImage,
                                              ownSelected: I.ownSelected,
                                              direction: I.direction,
                                              disabled: q,
                                          },
                                          I.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            G > 1 || Q || Z || null != B.input
                ? (0, r.jsxs)("div", {
                      className: l5.qr,
                      children: [
                          (0, r.jsx)(j.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  G > 1
                                      ? el.intl.formatToPlainString(en.default.yzYUjq, { index: U + 1, total: G })
                                      : null,
                          }),
                          (0, r.jsxs)("div", {
                              className: l5.zt,
                              children: [
                                  ep
                                      ? (0, r.jsx)(ld.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: el.intl.string(en.default.Pk5lfA),
                                            onClick: ex,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  (0, r.jsx)(w.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: el.intl.string(eL ? el.t.geKm7t : en.default.w1nRmT),
                                      disabled: !eR,
                                      onClick: e$,
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
var aa = n(572253),
    ar = n(411236);
function ai(e) {
    let { projectId: t, request: n, onDismiss: l } = e,
        a = null != n.note && "" !== n.note ? n.note : el.intl.string(en.default.XuOf5s);
    return (0, r.jsx)(aa.A, {
        projectId: t,
        scopeKeys: n.keys,
        notifyAgent: !0,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: n, saving: i, submit: s } = e;
            function u(e) {
                (e.preventDefault(), s());
            }
            let c = (0, r.jsx)(w.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: i,
                disabled: !n,
                text: el.intl.string(en.default.A7dQd9),
            });
            return null == l
                ? (0, r.jsxs)("form", {
                      className: ar.Mk,
                      onSubmit: u,
                      children: [
                          (0, r.jsx)(j.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: el.intl.string(en.default["jZjP+I"]),
                          }),
                          (0, r.jsx)(j.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              selectable: !0,
                              children: a,
                          }),
                          t,
                          (0, r.jsx)("div", { className: ar.p0, children: c }),
                      ],
                  })
                : (0, r.jsxs)("form", {
                      className: o()(l5.nd, l5.jx),
                      "aria-label": el.intl.string(en.default["jZjP+I"]),
                      onSubmit: u,
                      children: [
                          (0, r.jsxs)("div", {
                              className: l5.wx,
                              children: [
                                  (0, r.jsx)(j.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: l5.TK,
                                      children: el.intl.string(en.default["jZjP+I"]),
                                  }),
                                  (0, r.jsx)(b.D, {
                                      className: o()(l5.gb, l5.Q7),
                                      onClick: l,
                                      "aria-label": el.intl.string(en.default["iq+Pte"]),
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
                              className: ar.DQ,
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
                              className: l5.qr,
                              children: (0, r.jsx)("div", { className: l5.zt, children: c }),
                          }),
                      ],
                  });
        },
    });
}
var as = n(874421),
    ao = n(404373),
    au = n(435558),
    ac = n.n(au);
let ad = "VibegrationsComposerDrafts";
function am() {
    return nT.w.get(ad) ?? {};
}
let af = new Map(),
    ah = ac().throttle(() => {
        if (0 === af.size) return;
        let e = am();
        for (let [t, n] of af) "" === n ? delete e[t] : (e[t] = n);
        (af.clear(), nT.w.set(ad, e));
    }, 1e3);
class ag extends d.Ay.Store {
    getDraft(e) {
        let t = af.get(e);
        return null != t ? t : (am()[e] ?? "");
    }
}
let ax = new ag(lF.h, {
    LOGOUT: function () {
        return (af.clear(), ah.cancel(), nT.w.remove(ad), !1);
    },
    CONJURE_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: n } = e;
        return (af.set(t, n), ah(), "" === n && ah.flush(), !1);
    },
});
function ap(e) {
    return "" !== ax.getDraft(e).trim();
}
var av = n(29080),
    aj = n(46054),
    ab = n(615839);
function ay(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : el.intl.string(en.default.KcFvbo);
}
function ak(e) {
    var t;
    let n,
        l,
        { steps: a, content: r, hasProposal: i, hasLiveClarification: s = !1, hasAttachments: o } = e,
        u = (0, nJ.B4)(a),
        c = u.filter((e) => "message" === e.type).at(-1),
        d =
            !i &&
            null != c &&
            ((t = c.content),
            (n = t.trim()),
            (l = r.trim()),
            "" !== n && "" !== l && (n === l || (t.length >= 16e3 && l.startsWith(n))))
                ? c
                : null,
        m = u.filter((e) => e !== d),
        f = m.filter((e) => "message" === e.type).at(-1),
        h = !i && !s && "" !== r.trim();
    return {
        streamed: m,
        lastStreamedMessage: f,
        replyKey: d?.key,
        showsClosingMessage: h,
        closingContent: h ? r.trim() : "",
        attachmentsHost: (function (e) {
            let { hasAttachments: t, showsClosingMessage: n, endsOnStreamedMessage: l } = e;
            return t ? (n ? "closing" : l ? "streamed" : "standalone") : "none";
        })({ hasAttachments: o, showsClosingMessage: h, endsOnStreamedMessage: (0, nJ.Lf)(a) }),
    };
}
(n(134528), n(947204));
var aw = n(62617);
let aA = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    aN = {
        snail: () => en.default.ABeVsS,
        goat: () => en.default.dhXay8,
        frog: () => en.default.SHeweG,
        bunny: () => en.default.FytFE1,
        cat: () => en.default["5c+sHs"],
        caterpillar: () => en.default["/FYcne"],
        butterfly: () => en.default["Ib/AxK"],
        dog: () => en.default.zDjBR1,
        spider: () => en.default["6sxyrN"],
        bee: () => en.default.cVtefg,
        bot: () => en.default.MjCw0v,
    },
    aC = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: a, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, aw.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, aw.Z)(),
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
                let { alt: t, ariaLabel: n, ariaHidden: l, role: a, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, aw.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, aw.Z)(),
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
                let { alt: t, ariaLabel: n, ariaHidden: l, role: a, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, aw.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, aw.Z)(),
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
                let { alt: t, ariaLabel: n, ariaHidden: l, role: a, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, aw.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, aw.Z)(),
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
                let { alt: t, ariaLabel: n, ariaHidden: l, role: a, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, aw.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, aw.Z)(),
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
                let { alt: t, ariaLabel: n, ariaHidden: l, role: a, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, aw.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, aw.Z)(),
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
                let { alt: t, ariaLabel: n, ariaHidden: l, role: a, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, aw.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, aw.Z)(),
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
                let { alt: t, ariaLabel: n, ariaHidden: l, role: a, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, aw.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, aw.Z)(),
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
                let { alt: t, ariaLabel: n, ariaHidden: l, role: a, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, aw.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, aw.Z)(),
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
                let { alt: t, ariaLabel: n, ariaHidden: l, role: a, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, aw.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, aw.Z)(),
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
                let { alt: t, ariaLabel: n, ariaHidden: l, role: a, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, aw.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
                    className: (0, aw.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
    };
function aS(e) {
    return { ...aC[e], name: el.intl.string(aN[e]()) };
}
function aE(e) {
    return aA.includes(e) ? aS(e) : void 0;
}
function aI(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % aA.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, aA[(t + n) % aA.length]);
            }),
            l
        );
    })(e))
        t.set(n, aS(l));
    return t;
}
var aM = n(60160),
    a_ = n(16634);
function aT(e) {
    let { projectId: t, lane: n, Illocon: l, tint: a, name: i, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        c = (0, nJ.SY)(n.steps),
        d = u
            ? null != c
                ? (0, nJ.WQ)(c)
                : ay(o)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(ay(e));
                  switch (e.status) {
                      case "failed":
                          return el.intl.formatToPlainString(en.default.YrVgOf, { task: t });
                      case "cancelled":
                          return el.intl.formatToPlainString(en.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return el.intl.formatToPlainString(en.default["++9woZ"], {
                                  task: t,
                                  duration: (0, ab.MB)(e.durationMs),
                              });
                          return el.intl.formatToPlainString(en.default.nmI9Uh, { task: t });
                      default:
                          return el.intl.formatToPlainString(en.default.nmI9Uh, { task: t });
                  }
              })(o),
        m = u ? c : void 0,
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
                                    className: lr.dO,
                                    children: n.steps.map((e) =>
                                        (0, r.jsx)(
                                            a_.A,
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
                                      className: lr.iq,
                                      children: (0, r.jsx)(aM.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, r.jsx)(n1.A, {
        glyph: (0, r.jsx)(n2.u, {
            asset: (0, r.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: ay(o),
            position: "left",
            children: (0, r.jsx)("span", {
                className: lr.nC,
                children: (0, r.jsx)(l, { size: 24, alt: "", ariaHidden: !0 }),
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
var aP = n(998445),
    aR = n(643210),
    aL = n(648127),
    a$ = n(372795),
    aD = n(163897);
let aO = "conjure-browser-viewer";
function aF(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, d.yK)(
            [aR.A],
            () =>
                n.flatMap((e) => {
                    let n = aR.A.getTab(t, e);
                    return null == n ? [] : [n];
                }),
            [t, n],
        );
    if (0 === l.length) return null;
    let a = l.map((e) => {
        let { session: t } = e;
        return t.id;
    });
    return (0, r.jsx)("ul", {
        className: aD.kR,
        "aria-label": el.intl.string(en.default.Uvkr1G),
        children: l.map((e) =>
            (0, r.jsx)("li", { children: (0, r.jsx)(az, { projectId: t, tab: e, sessionIds: a }) }, e.session.id),
        ),
    });
}
function az(e) {
    let { projectId: t, tab: l, sessionIds: a } = e,
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
        c = (0, e5.useHasModalOpen)(aO),
        [d, m] = i.useState(!1),
        f = i.useCallback((e, t) => m(t), []),
        { ended: h } = l,
        g = (0, aL.i)(l.session);
    return (0, r.jsxs)(b.D, {
        innerRef: s,
        className: o()(aD.Nr, h && aD.Xj),
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
                        return (n) => (0, r.jsx)(l, { ...n, projectId: t, sessionId: e, sessionIds: a });
                    },
                    { modalKey: aO },
                )
            );
        },
        "aria-label": el.intl.formatToPlainString(en.default.G3a822, { title: g }),
        children: [
            (0, r.jsxs)("div", {
                className: aD.Gt,
                children: [
                    (0, r.jsx)(a$.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !u || c || h,
                        className: aD.Ji,
                        "aria-label": el.intl.formatToPlainString(en.default.rnwqXb, { name: g }),
                        onStateChange: f,
                    }),
                    d
                        ? null
                        : (0, r.jsx)("div", {
                              className: aD.qf,
                              children: (0, r.jsx)(aP.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    h
                        ? (0, r.jsx)("div", {
                              className: aD.HS,
                              children: (0, r.jsx)(j.E, {
                                  variant: "text-xs/medium",
                                  color: "text-strong",
                                  children: el.intl.string(en.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
            (0, r.jsxs)("span", {
                className: aD.pG,
                children: [
                    (0, r.jsx)("span", { className: o()(aD.W9, h && aD.oM) }),
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
var aq = n(268409);
let aG = new WeakMap(),
    aU = new WeakMap();
function aB(e) {
    let { projectId: t, steps: n, tree: l, segment: a } = e,
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
                })(l, a),
            [l, a],
        ),
        o = (0, d.yK)(
            [eh.Ay],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = aG.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = aU.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), aU.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (aG.set(e, n), n);
                })(eh.Ay.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === o.length
        ? null
        : (0, r.jsx)("li", { className: aq.h, children: (0, r.jsx)(aF, { projectId: t, sessionIds: o }) });
}
var aH = n(469393);
function aV(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, e9.lG)(t.authored_at);
    return (0, r.jsx)(n7, {
        title: el.intl.string(en.default["t+b0rz"]),
        children: (0, r.jsxs)("div", {
            className: aH.r,
            children: [
                (0, r.jsxs)("div", {
                    className: aH.z,
                    children: [
                        (0, r.jsx)(j.E, { variant: "text-md/medium", children: t.subject }),
                        null != l.relative
                            ? (0, r.jsx)(j.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  title: l.absolute ?? void 0,
                                  children: l.relative,
                              })
                            : null,
                    ],
                }),
                null != n
                    ? (0, r.jsx)(w.$, {
                          variant: "secondary",
                          size: "sm",
                          text: el.intl.string(en.default.H8Jfhu),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
var aK = n(323384),
    aW = n(983851),
    aX = n(794083),
    aY = n(687966),
    aJ = n(632015),
    aQ = n(231483),
    aZ = n(430392),
    a0 = n(633018),
    a1 = n(885574);
let a2 = {
    [V.q7.APP_CHANNEL]: en.default.zrk93C,
    [V.q7.VOICE_CHANNEL]: en.default.r5Ra0p,
    [V.q7.ACTIVITY]: el.t.IC5Ann,
    [V.q7.OVERLAY]: en.default.liTNf3,
    [V.q7.PROFILE_WIDGET]: en.default["EswAi+"],
    [V.q7.AUTOMOD]: en.default.DnWMLj,
    [V.q7.BOT]: en.default.VFWfz1,
    [V.q7.APPLICATION_COMMANDS]: en.default.w7JaEP,
};
function a3(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let a7 = {
        [V.q7.APP_CHANNEL]: en.default["3/aHX6"],
        [V.q7.VOICE_CHANNEL]: en.default["3/aHX6"],
        [V.q7.ACTIVITY]: en.default["3/aHX6"],
        [V.q7.OVERLAY]: en.default["rPpf5/"],
        [V.q7.PROFILE_WIDGET]: null,
        [V.q7.AUTOMOD]: null,
        [V.q7.BOT]: null,
        [V.q7.APPLICATION_COMMANDS]: null,
    },
    a4 = [V.q7.OVERLAY, V.q7.ACTIVITY, V.q7.APP_CHANNEL, V.q7.VOICE_CHANNEL];
var a6 = n(176999),
    a5 = (((l = {}).IMAGE = "image"), l),
    a8 = (((a = {}).PRIVATE = "private"), (a.PUBLIC = "public"), a),
    a9 = n(773669);
let re = [],
    rt = {};
function rn(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function rl(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: a5.IMAGE,
        visibility: a8.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var ra = n(127258),
    rr = n(587895),
    ri = n(320095),
    rs = n(963852),
    ro = n(95701),
    ru = n(889227),
    rc = n(155718);
let rd = ["command", "user_command", "message_command", "message"],
    rm = new Set([rc.kc.CHAT, rc.kc.USER, rc.kc.MESSAGE]);
function rf(e) {
    return e.type ?? rc.kc.CHAT;
}
function rh(e) {
    return "launch" !== e.kind && rm.has(rf(e));
}
function rg(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function rx(e, t) {
    let n = rd.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !rg(e)), ...n.filter(rg)].slice(0, 3);
    for (let a of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(a) || rg(a) || l.push(a);
    }
    return rd.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
let rp = new ro.nA({ id: "1337", guild_id: "1337", type: em.rbe.GUILD_TEXT, name: "preview" });
function rv(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: a = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = (0, d.bG)([tW.default], () => tW.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            a && r?.username !== t && (0, tY.nj)(new ru.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [a, r, e, t, l, n]),
        r
    );
}
let rj = /^@\S+/;
var rb = n(628284),
    ry = n(97808),
    rk = n(778712),
    rw = n(809115),
    rA = n(486020),
    rN = n(200700);
let rC = {
        alert: { label: () => el.intl.string(en.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => el.intl.string(en.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => el.intl.string(en.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => el.intl.string(en.default.RGzFNK), blockedStyle: !1 },
    },
    rS = {
        blocked: { label: () => el.intl.string(en.default.YdnZ8q), tone: "red" },
        alert: { label: () => el.intl.string(en.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => el.intl.string(en.default.RGzFNK), tone: "green" },
    },
    rE = ["blocked", "alert", "allowed"],
    rI = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
var rM = n(984097),
    r_ = n(13673);
let rT = { blocked: aQ.ShieldIcon, alert: t2.BellIcon, allowed: rb.y },
    rP = {
        blurple: { text: "text-brand", icon: L.A.colors.TEXT_BRAND },
        red: { text: "text-feedback-critical", icon: L.A.colors.TEXT_FEEDBACK_CRITICAL },
        green: { text: "text-feedback-positive", icon: L.A.colors.TEXT_FEEDBACK_POSITIVE },
    };
function rR(e) {
    var t, n;
    let l,
        a,
        { example: i } = e,
        s =
            "" ===
            (a = [
                "timeout" !== (t = i).outcome || null == t.timeout_seconds
                    ? null
                    : el.intl.formatToPlainString(el.t["3LYql6"], {
                          duration:
                              ((n = t.timeout_seconds),
                              null != (l = (0, rN.getFriendlyDurationString)(n))
                                  ? l
                                  : n % 604800 == 0
                                    ? el.intl.formatToPlainString(el.t.EmoBD2, { weeks: n / 604800 })
                                    : n % 86400 == 0
                                      ? el.intl.formatToPlainString(el.t["k2UNz+"], { days: n / 86400 })
                                      : n % 3600 == 0
                                        ? el.intl.formatToPlainString(el.t.xCjYxK, { hours: n / 3600 })
                                        : n % 60 == 0
                                          ? el.intl.formatToPlainString(el.t.opVZ9q, { mins: n / 60 })
                                          : el.intl.formatToPlainString(el.t["4zv/jq"], { secs: n })),
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
function rL(e) {
    var t;
    let { example: n } = e,
        { label: l, blockedStyle: a } = rC[n.outcome];
    return (0, r.jsxs)("li", {
        className: o()(rM.nM, { [o()(rM.HV, r_.DX)]: a }),
        children: [
            (0, r.jsx)(k.A, { children: `${l()}: ` }),
            (0, r.jsx)("span", {
                className: rM.my,
                children: (0, r.jsx)(ry.eu, {
                    src: (0, rA.AE)(void 0, void 0),
                    size: rk._3.SIZE_24,
                    "aria-label": el.intl.string(en.default["1yI0xV"]),
                }),
            }),
            (0, r.jsxs)("div", {
                className: rM.fw,
                children: [
                    (0, r.jsx)(j.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), aj.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    (0, r.jsx)(rR, { example: n }),
                ],
            }),
        ],
    });
}
function r$(e) {
    let { group: t } = e,
        n = i.useId(),
        l = rS[t.section],
        a = rT[t.section],
        s = rP[l.tone];
    return (0, r.jsxs)("div", {
        className: rM.uW,
        children: [
            (0, r.jsxs)("div", {
                className: rM.bV,
                children: [
                    (0, r.jsx)(a, { size: "xs", color: s.icon, "aria-hidden": !0 }),
                    (0, r.jsx)(j.E, {
                        id: n,
                        variant: "text-xs/semibold",
                        color: s.text,
                        className: rM.a9,
                        children: l.label(),
                    }),
                ],
            }),
            (0, r.jsx)("ul", {
                className: rM.Ge,
                "aria-labelledby": n,
                children: t.examples.map((e, t) => (0, r.jsx)(rL, { example: e }, t)),
            }),
        ],
    });
}
function rD() {
    let { avatarSrc: e, eventHandlers: t } = (0, rw.a)(!0);
    return (0, r.jsx)("span", {
        className: rM.Gy,
        ...t,
        children: (0, r.jsx)(ry.eu, { src: e, size: rk._3.SIZE_16, "aria-label": el.intl.string(el.t.hG1StD) }),
    });
}
function rO(e) {
    var t;
    let { automod: n } = e;
    return (0, r.jsx)("div", {
        className: rM.K1,
        children: ((t = n.examples),
        rE
            .map((e) => ({ section: e, examples: t.filter((t) => rI[t.outcome] === e) }))
            .filter((e) => e.examples.length > 0)).map((e) => (0, r.jsx)(r$, { group: e }, e.section)),
    });
}
var rF = n(460905),
    rz = n(110384),
    rq = n(763754),
    rG = n(217424),
    rU = n(194085),
    rB = n(20851),
    rH = n(692508),
    rV = n(798819);
function rK(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, r.jsxs)("div", {
        className: o()(rV.item, rV.labelContainer, rV.colorDefault, {
            [rV.focused]: !0 === t.highlighted,
            [rV.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, r.jsx)("div", {
                      className: rV.iconContainerLeft,
                      children: (0, r.jsx)(n, { color: "currentColor", className: rV.icon }),
                  })
                : null,
            (0, r.jsx)("div", { className: o()(rV.label, rH.Gy), children: t.label }),
            null != l
                ? (0, r.jsx)("div", {
                      className: rV.iconContainer,
                      children: (0, r.jsx)(l, { color: "currentColor", className: rV.icon }),
                  })
                : null,
        ],
    });
}
function rW(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        a = i.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, r.jsx)("img", { src: l, alt: "", className: o()(t, rH.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: el.intl.string(el.t["5IEsGx"]), icon: rz.W, muted: !0 }
                : { label: el.intl.string(el.t.LYju5J), muted: !0 };
    return (0, r.jsx)("div", {
        className: o()(rV.menu, rH.MK),
        "aria-hidden": !0,
        children: (0, r.jsxs)("div", {
            className: rV.scroller,
            children: [
                (0, r.jsx)(rK, { item: s }),
                (0, r.jsx)("div", { className: rV.separator }),
                (0, r.jsx)(rK, { item: { label: n, iconLeft: a, highlighted: !0 } }),
            ],
        }),
    });
}
var rX = n(381941);
function rY() {}
function rJ(e) {
    let t,
        n,
        l,
        a,
        s,
        u,
        c,
        m,
        f,
        h,
        g,
        { projectId: x, exchanges: p } = e,
        {
            items: v,
            botIcon: j,
            appIconSrc: b,
        } = ((t = (0, d.bG)([tW.default], () => tW.default.getCurrentUser())),
        (n = (0, d.bG)([ej.Ay], () => ej.Ay.getProject(x))),
        (l = n?.application_id),
        (a = (0, d.bG)([rr.A], () => rr.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? el.intl.string(en.default.JEYq8M)),
        (u = (0, d.bG)([tW.default], () => (null != l ? tW.default.getUser(l) : void 0), [l])),
        (m = rv("31337", s, { bot: !0, enabled: !(c = u?.bot === !0) })),
        (f = c ? u : m),
        (h = rv("31338", el.intl.string(en.default["9iAOsw"]), { discriminator: "0003" })),
        (g = rv("31339", (0, tX.mG)(t) ?? "", { enabled: null != t })),
        {
            items: i.useMemo(
                () =>
                    null == t || null == g || null == f || null == h
                        ? []
                        : (function (e, t, n) {
                              var l, a, r;
                              let { bot: i, currentUser: s, viewer: o, member: u } = t,
                                  c = [];
                              function d(e, t) {
                                  let {
                                          interactionName: n,
                                          messageType: l,
                                          menu: a,
                                      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                      r = String(c.length + 1),
                                      i = (0, ri.rh)({
                                          ...(0, rs.Ay)({
                                              channelId: rp.id,
                                              content: e,
                                              author: t,
                                              type: l ?? em.lAJ.DEFAULT,
                                          }),
                                          id: r,
                                          state: em.cmJ.SENT,
                                          ...(null != n
                                              ? {
                                                    interaction: {
                                                        id: r,
                                                        name: n,
                                                        type: ra.G.APPLICATION_COMMAND,
                                                        user: (0, rs.Vi)(s),
                                                    },
                                                }
                                              : {}),
                                      });
                                  c.push({ key: r, record: i, isCommandReply: null != n, menu: a });
                              }
                              for (let t of e)
                                  switch (t.kind) {
                                      case "command":
                                          d(t.bot, i, {
                                              interactionName: t.user.trim().replace(/^\//, "").split(/\s+/)[0] ?? "",
                                              messageType: em.lAJ.CHAT_INPUT_COMMAND,
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
                                                  messageType: em.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((l = t.user), l.trim().replace(rj, `<@${i.id}>`)), s),
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
                                  targetMessage: el.intl.string(en.default["y+QYes"]),
                                  memberMessage: el.intl.string(en.default.BUTRDc),
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
              className: o()(rH.TE, `group-spacing-${rX.ES}`),
              children: v.map((e) => {
                  let { key: t, record: n, isCommandReply: l, menu: a } = e;
                  return (0, r.jsxs)(
                      "li",
                      {
                          className: null != a ? rH.Rz : void 0,
                          children: [
                              (0, r.jsx)(rB.A, {
                                  message: n,
                                  channel: rp,
                                  author: (0, rq.FT)(n.author, rp),
                                  isGroupStart: !0,
                                  avatarOverride: n.author.bot ? (j ?? void 0) : void 0,
                                  childrenExecutedCommand: l ? (0, r.jsx)(rG.A, { message: n, channel: rp }) : void 0,
                                  usernameClassName: a?.target === "user" ? rH.Ct : void 0,
                                  disableInteraction: !0,
                              }),
                              a?.target === "message"
                                  ? (0, r.jsx)("div", {
                                        className: rH.S3,
                                        inert: !0,
                                        "aria-hidden": !0,
                                        children: (0, r.jsxs)(rU.Ay, {
                                            children: [
                                                (0, r.jsx)(rU.qv, {
                                                    label: el.intl.string(el.t.lfIHs4),
                                                    icon: rF.n,
                                                    onClick: rY,
                                                }),
                                                (0, r.jsx)(rU.qv, {
                                                    label: el.intl.string(el.t["5IEsGx"]),
                                                    icon: rz.W,
                                                    onClick: rY,
                                                }),
                                                (0, r.jsx)(rU.qv, {
                                                    label: el.intl.string(el.t["UKOtz+"]),
                                                    icon: t9.MoreHorizontalIcon,
                                                    selected: !0,
                                                    onClick: rY,
                                                }),
                                            ],
                                        }),
                                    })
                                  : null,
                              null != a
                                  ? (0, r.jsx)("div", {
                                        className: "user" === a.target ? rH.ET : rH.je,
                                        inert: !0,
                                        children: (0, r.jsx)(rW, {
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
var rQ = n(633075),
    rZ = n(946356),
    r0 = n(58216),
    r1 = n(27399);
function r2(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, d.bG)([tW.default], () => tW.default.getCurrentUser()),
        a = i.useMemo(() => new rQ.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, r.jsx)("div", {
              className: r1.H,
              children: (0, r.jsx)(rZ.A.Overlay, {
                  className: r1.w,
                  children: (0, r.jsx)(r0.A, {
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
var r3 = n(443863);
let r7 = {
    [V.q7.APP_CHANNEL]: aK.k,
    [V.q7.VOICE_CHANNEL]: aW.H,
    [V.q7.ACTIVITY]: aX.b,
    [V.q7.OVERLAY]: aY.GameControllerIcon,
    [V.q7.PROFILE_WIDGET]: aJ.f,
    [V.q7.AUTOMOD]: aQ.ShieldIcon,
    [V.q7.BOT]: aZ.RobotIcon,
    [V.q7.APPLICATION_COMMANDS]: a0.k,
};
function r4(e) {
    let { label: t, icon: n, info: l, children: a } = e;
    return (0, r.jsxs)("section", {
        className: r3.uW,
        children: [
            (0, r.jsxs)("span", {
                className: r3.a9,
                children: [
                    n,
                    (0, r.jsx)(j.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }),
                    l,
                ],
            }),
            a,
        ],
    });
}
function r6(e) {
    let { text: t, label: n } = e;
    return (0, r.jsx)(y.m, {
        text: t,
        children: (0, r.jsx)(b.D, {
            className: r3.bk,
            "aria-label": n,
            children: (0, r.jsx)(a1.CircleInformationIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
function r5(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, r.jsx)(r4, {
              label: t,
              children: (0, r.jsx)("div", {
                  className: r3.Ip,
                  children: n.map((e) =>
                      (0, r.jsx)(
                          "span",
                          {
                              className: r3.jw,
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
function r8(e) {
    let { tags: t } = e;
    return (0, r.jsx)("span", {
        className: r3.K2,
        children: t
            .filter((e) => e in r7)
            .map((e) => {
                let t = r7[e];
                return (0, r.jsxs)(
                    "span",
                    {
                        className: r3.L6,
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
                                children: el.intl.string(a2[e]),
                            }),
                        ],
                    },
                    e,
                );
            }),
    });
}
function r9(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: a } = n,
        { src: s, gone: o, handleError: u } = l1(t, a),
        c = i.useCallback(() => {
            (0, J.PK)(t, a).then(
                (e) => {
                    (0, lO.R)({
                        items: [{ type: "IMAGE", url: e, alt: l }],
                        startingIndex: 0,
                        shouldHideMediaOptions: !0,
                        location: "VibegrationsChat",
                    });
                },
                () => {},
            );
        }, [t, a, l]);
    return o
        ? null
        : (0, r.jsx)(r4, {
              label: el.intl.string(en.default.X15LLY),
              info: (0, r.jsx)(r6, {
                  text: el.intl.string(en.default.nR4B8P),
                  label: el.intl.string(en.default.nc0SNY),
              }),
              children: (0, r.jsx)(b.D, {
                  className: r3.xX,
                  onClick: c,
                  "aria-label": el.intl.string(en.default.TvAPIm),
                  children: null != s ? (0, r.jsx)("img", { src: s, alt: l, className: r3.sN, onError: u }) : null,
              }),
          });
}
function ie(e) {
    let t,
        n,
        l,
        a,
        { projectId: s, proposal: o, version: u, onApprove: c } = e,
        m = a3(o, V.q7.AUTOMOD) ? o.automod : null,
        { botExchanges: f } =
            ((t = a3(o, V.q7.APPLICATION_COMMANDS)),
            (n =
                a3(o, V.q7.BOT) || t
                    ? null != o.bot
                        ? o.bot.interaction
                        : t && o.commands.some(rh)
                          ? "commands"
                          : null
                    : null),
            (l = i.useMemo(
                () =>
                    null == n
                        ? []
                        : (function (e, t, n) {
                              let l = e.bot?.example_exchanges ?? [],
                                  a = { kind: "event", user: "", bot: n.event };
                              if ("events" === t) {
                                  let e = l.slice(0, 3).map((e) => {
                                      let { bot: t } = e;
                                      return "" !== t.trim() ? { ...a, bot: t } : a;
                                  });
                                  return e.length > 0 ? e : [a];
                              }
                              let r = l.flatMap((e) => {
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
                              if ("messages" === t && 0 === r.length) return [i];
                              let s = e.commands.filter(rh).map((e) =>
                                      (function (e, t) {
                                          let n = e.description?.trim() ?? "",
                                              l = "" !== n ? n : t.reply;
                                          switch (rf(e)) {
                                              case rc.kc.USER:
                                                  return { kind: "user_command", user: e.name, bot: l };
                                              case rc.kc.MESSAGE:
                                                  return { kind: "message_command", user: e.name, bot: l };
                                              default:
                                                  return { kind: "command", user: `/${e.name}`, bot: l };
                                          }
                                      })(e, n),
                                  ),
                                  o = "messages" === t ? [] : s.filter(rg),
                                  u = r.length > 0 ? rx([...r, ...o], !0) : rx("both" === t ? [...s, i] : s, !1);
                              return u.length > 0 ? u : [a];
                          })(o, n, {
                              message: el.intl.string(en.default.J7qggf),
                              reply: el.intl.string(en.default.nqYtiy),
                              event: el.intl.string(en.default["05lU9W"]),
                          }),
                [o, n],
            )),
            { botInteraction: n, botExchanges: l }),
        h = (function (e, t) {
            let { widget_config: n, widget_preview: l } = t,
                a = (0, d.bG)([a9.default], () => a9.default.locale),
                r = (0, d.bG)([ej.Ay], () => {
                    let t = ej.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = i.useState(rt);
                    return (
                        i.useEffect(() => {
                            let n = Object.entries(t ?? {});
                            if (0 === n.length) return;
                            let a = !1;
                            return (
                                Promise.all(
                                    n.map((t) => {
                                        let [n, l] = t;
                                        return (0, J.PK)(e, l.id).then(
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
                o = i.useMemo(
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
                                                          ...rn(n),
                                                          ...(null != n.fallback ? { fallback: rn(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let r = a6.uW.safeParse(a);
                                  if (!r.success) return null;
                                  let i = r.data;
                                  return null == i[tk.m.WIDGET_TOP] || null == i[tk.m.WIDGET_BOTTOM]
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
                                                        a = {};
                                                    for (let [e, r] of Object.entries(t.sample_data ?? {}))
                                                        if ("image" === l.get(e)) {
                                                            let t = n[String(r)];
                                                            null != t &&
                                                                (a[e] = {
                                                                    type: a6.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof r
                                                                ? (a[e] = { type: a6.oG.NUMBER, value: r })
                                                                : (a[e] = { type: a6.oG.STRING, value: r });
                                                    return a;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(rl),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: re,
                                            },
                                        };
                              })(n, l, s, a),
                    [n, l, s, a],
                );
            return i.useMemo(() => (null == r || null == o ? null : { applicationId: r, rendererProps: o }), [r, o]);
        })(s, o),
        g = a3(o, V.q7.PROFILE_WIDGET) ? h : null,
        x = u?.superseded === !0,
        p = o.what_changed?.trim() ?? "";
    return (0, r.jsxs)(n5, {
        title:
            x && null != u
                ? el.intl.formatToPlainString(en.default.YZ3qJs, { version: u.version })
                : el.intl.string(en.default["3b6e7o"]),
        meta: x
            ? (0, r.jsx)(n6, { children: el.intl.string(en.default.hF2c41) })
            : (0, r.jsx)(r8, { tags: o.supported_surfaces ?? [] }),
        superseded: x,
        showLabel: el.intl.string(en.default.yD8EJS),
        hideLabel: el.intl.string(en.default.nSPGNb),
        bodyClassName: r3.rf,
        "data-conjure-plan-card": !0,
        children: [
            "" !== p
                ? (0, r.jsx)(r4, {
                      label: el.intl.string(en.default.iNS4dl),
                      children: (0, r.jsx)(j.E, {
                          variant: "experimental/body-md/normal",
                          color: "text-default",
                          selectable: !0,
                          children: p,
                      }),
                  })
                : null,
            (0, r.jsx)(j.E, {
                variant: "experimental/body-md/normal",
                color: "text-default",
                selectable: !0,
                children: o.summary,
            }),
            null != m && m.examples.length > 0
                ? (0, r.jsx)(r4, {
                      label: el.intl.string(en.default.z4ZKYG),
                      icon: (0, r.jsx)(rD, {}),
                      info: (0, r.jsx)(r6, {
                          text: el.intl.string(en.default.bo4MOx),
                          label: el.intl.string(en.default.VPLNot),
                      }),
                      children: (0, r.jsx)(rO, { automod: m }),
                  })
                : null,
            null != o.design_image
                ? (0, r.jsx)(r9, {
                      projectId: s,
                      design: o.design_image,
                      alt: el.intl.string(null == (a = a4.find((e) => a3(o, e))) ? en.default["3/aHX6"] : a7[a]),
                  })
                : null,
            f.length > 0
                ? (0, r.jsx)(r4, {
                      label: el.intl.string(en.default.sA1lTv),
                      info: (0, r.jsx)(r6, {
                          text: el.intl.string(en.default.NnmbJu),
                          label: el.intl.string(en.default.KsqQJX),
                      }),
                      children: (0, r.jsx)(rJ, { projectId: s, exchanges: f }),
                  })
                : null,
            null != g
                ? (0, r.jsx)(r4, {
                      label: el.intl.string(en.default.ove4zH),
                      info: (0, r.jsx)(r6, {
                          text: el.intl.string(en.default.XcIrHx),
                          label: el.intl.string(en.default["TwT+ht"]),
                      }),
                      children: (0, r.jsx)(r2, { ...g }),
                  })
                : null,
            o.changes.length > 0
                ? (0, r.jsx)(r4, {
                      label: el.intl.string(en.default["5+mG1z"]),
                      children: (0, r.jsx)("ul", {
                          className: r3.p_,
                          children: o.changes.map((e, t) =>
                              (0, r.jsx)(
                                  "li",
                                  {
                                      className: r3.Aw,
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
            o.commands.length > 0
                ? (0, r.jsx)(r4, {
                      label: el.intl.string(el.t["0hKkS+"]),
                      children: (0, r.jsx)("ul", {
                          className: r3.p_,
                          children: o.commands.map((e, t) =>
                              (0, r.jsxs)(
                                  "li",
                                  {
                                      className: r3.uX,
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
            (0, r.jsx)(r5, { label: el.intl.string(en.default["2UbW6r"]), names: o.bot_permissions ?? [] }),
            (0, r.jsx)(r5, { label: el.intl.string(en.default["7TKfpj"]), names: o.privileged_intents ?? [] }),
            null == c || x
                ? null
                : (0, r.jsxs)("div", {
                      className: r3.o1,
                      children: [
                          (0, r.jsx)(w.$, {
                              variant: "primary",
                              size: "sm",
                              text: el.intl.string(en.default["6S+wRM"]),
                              onClick: c,
                          }),
                          (0, r.jsx)(j.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              tag: "span",
                              children: el.intl.string(en.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
function it(e) {
    return null != e && e.status?.state === "unpublished";
}
let il = new WeakMap();
function ia(e) {
    let { publish: t } = e,
        n = t.guildId,
        l = (0, d.bG)([B.A], () => (null == n ? null : B.A.getGuild(n)));
    return (0, r.jsx)(nd.B, {
        gap: 8,
        align: "start",
        children: (0, r.jsxs)(nd.B, {
            direction: "horizontal",
            gap: 8,
            align: "center",
            children: [
                (0, r.jsx)(w.$, {
                    variant: "primary",
                    size: "sm",
                    loading: t.publishing,
                    disabled: t.disabled,
                    onClick: () => t.run("card"),
                    text: t.label,
                }),
                null != l
                    ? (0, r.jsxs)(nd.B, {
                          direction: "horizontal",
                          gap: 4,
                          align: "center",
                          children: [
                              (0, r.jsx)(j.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: el.intl.string(en.default["+HGTlC"]),
                              }),
                              (0, r.jsx)(e$.Ay, { guild: l, size: e$.Ay.Sizes.SMOL }),
                              (0, r.jsx)(j.E, {
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
function ir(e) {
    let { projectId: t } = e,
        n = (0, ni.Ay)(t);
    return null != n && it(n) ? (0, r.jsx)(ia, { publish: n }) : null;
}
var ii = n(989271);
function is(e) {
    let { idea: t, selected: n, onPick: l } = e,
        a = i.useId(),
        s = null == l;
    return (0, r.jsxs)(b.D, {
        className: o()(ii.nM, { [ii.f1]: s, [ii.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": el.intl.formatToPlainString(en.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : a,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, r.jsxs)("div", {
                className: ii.jo,
                children: [
                    n
                        ? (0, r.jsx)(A.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: ii.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, r.jsx)(j.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: ii.G9,
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
function io(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [a, s] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, r.jsx)(n7, {
        title: el.intl.string(en.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, r.jsx)(
                is,
                { idea: e, selected: a.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
function iu(e) {
    let { onAsk: t } = e;
    return (0, r.jsx)(nd.B, {
        align: "start",
        "data-conjure-ideas-offer": !0,
        children: (0, r.jsx)(w.$, {
            variant: "secondary",
            size: "sm",
            disabled: null == t,
            onClick: t,
            text: el.intl.string(en.default["U/bLzU"]),
        }),
    });
}
var ic = n(530557),
    id = n(872162);
function im(e, t) {
    return { cardId: e, status: "pending" === t ? null : t };
}
var ih = n(202723);
function ig(e) {
    let { projectId: t, cardId: l, request: a, status: s, awaiting: u } = e,
        c = i.useCallback(() => {
            (0, e5.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("291953"), n.e("408337")]).then(n.bind(n, 789864));
                return (n) => (0, r.jsx)(e, { ...n, projectId: t, request: a });
            });
        }, [t, a]),
        d = i.useMemo(() => a.fields.map((e) => ({ id: e.name, label: e.label, icon: ic.R })), [a.fields]),
        m = (function (e, t) {
            let [n, l] = i.useState(() => im(e, t));
            return n.cardId !== e || (null == n.status && "pending" !== t)
                ? (l(im(e, t)), !1)
                : null != n.status && t !== n.status;
        })(l, s),
        f = o()(ih.Lo, { [ih.jY]: m });
    return "superseded" === s
        ? (0, r.jsx)(
              "article",
              {
                  className: f,
                  children: (0, r.jsx)(j.E, {
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      tag: "span",
                      children: el.intl.string(en.default.CTxtdV),
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
                            children: el.intl.string(en.default.HCQvpO),
                        }),
                        (0, r.jsx)(id.C, { label: el.intl.string(en.default.HCQvpO), size: "xs", items: d }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, r.jsx)(
                  "article",
                  {
                      className: ih.Lo,
                      children: (0, r.jsx)(id.C, { label: el.intl.string(en.default.HCQvpO), size: "xs", items: d }),
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
                                className: ih.$h,
                                children: [
                                    (0, r.jsx)("span", {
                                        className: ih.c9,
                                        "aria-hidden": !0,
                                        children: (0, r.jsx)(rb.y, {
                                            size: "xs",
                                            color: L.A.colors.ICON_FEEDBACK_POSITIVE,
                                        }),
                                    }),
                                    (0, r.jsx)(j.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-feedback-positive",
                                        tag: "span",
                                        children: el.intl.string(en.default.sfp7Up),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(id.C, { label: el.intl.string(en.default.sfp7Up), size: "xs", items: d }),
                        ],
                    },
                    s,
                )
              : (0, r.jsxs)("article", {
                    className: ih.Lo,
                    children: [
                        (0, r.jsx)(j.E, {
                            variant: "text-xs/semibold",
                            color: null != u ? "text-brand" : "text-muted",
                            tag: "span",
                            children: el.intl.string(null != u ? en.default.O0QIqj : en.default.HCQvpO),
                        }),
                        (0, r.jsx)(j.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            selectable: !0,
                            children: null != a.note && "" !== a.note ? a.note : el.intl.string(en.default.MPGSHL),
                        }),
                        (0, r.jsx)(id.C, { label: el.intl.string(en.default.HCQvpO), size: "xs", items: d }),
                        (0, r.jsx)("div", {
                            className: ih.sq,
                            children: (0, r.jsx)(w.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: c,
                                text: el.intl.string(en.default.EK8tKY),
                            }),
                        }),
                    ],
                });
}
var ix = n(919790),
    ip = n(971824),
    iv = n(162052),
    ij = n(165648);
function ib(e) {
    let t = aI(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? aE(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: ay(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function iy(e) {
    let {
            projectId: t,
            steps: n,
            active: l = !1,
            turnActive: a = l,
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
        p = i.useMemo(() => (0, nJ.Jf)(n, l), [n, l]),
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
            className: lr.pj,
            "data-live": !1,
            children: (0, r.jsx)(n1.A, {
                glyph: (0, r.jsx)(av.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: el.intl.string(en.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (x ?? (h ? (p.turn?.durationMs ?? o) : void 0)),
        b = f ? ((0, nJ.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = aI(k.map((e) => e.taskId)),
        A = !g && (l || k.some((e) => "running" === e.task.status)),
        N = ib(k);
    return (0, r.jsxs)("ol", {
        className: lr.pj,
        "data-live": A,
        children: [
            (0, r.jsx)(nZ.Ay, {
                projectId: t,
                steps: v.steps,
                fallbackLabel: k.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                live: l,
                closed: g,
                durationMs: j,
                connectsDown: k.length > 0,
                tier: p.turn?.tier,
            }),
            k.map((e, n) => {
                let l = null != e.task.helperMark ? aE(e.task.helperMark) : void 0,
                    a = l ?? w.get(e.taskId);
                return null == a
                    ? null
                    : (0, r.jsx)(
                          aT,
                          {
                              projectId: t,
                              lane: e,
                              Illocon: a.Illocon,
                              tint: a.tint,
                              name: null != l && null != e.task.helperName ? e.task.helperName : a.name,
                              connectsDown: n < k.length - 1,
                          },
                          e.taskId,
                      );
            }),
            (0, r.jsx)(aB, { projectId: t, steps: n, tree: p, segment: m }),
            y
                ? (0, r.jsx)("li", {
                      className: lr.YO,
                      children: (0, r.jsx)(ll, { todos: b, provisional: d, agents: N, live: a, superseded: s }),
                  })
                : null,
        ],
    });
}
function ik(e) {
    let {
            projectId: t,
            steps: n,
            content: l,
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
            hoistedAttachmentsHost: A,
            restoreProposal: N,
            onRestoreProposal: C,
        } = e,
        S = i.useMemo(
            () => ak({ steps: n, content: l, hasProposal: null != a, hasAttachments: null != c && c.length > 0 }),
            [n, l, a, c],
        ),
        { streamed: E, lastStreamedMessage: I, showsClosingMessage: M, closingContent: _ } = S,
        T = (w ? A : void 0) ?? S.attachmentsHost,
        P = M && !w,
        R = null == c ? null : (0, r.jsx)(ix.A, { projectId: t, attachments: c }),
        L = null == R ? null : (0, r.jsx)("div", { className: lr.MT, children: R }),
        $ = y
            ? (0, r.jsx)(j.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return el.intl.string(en.default.Mv5OmK);
                          case "queued":
                              return el.intl.string(en.default["Po/2mi"]);
                          case "restarting":
                              return el.intl.string(en.default.Vj0woh);
                          default:
                              return el.intl.string(en.default.gY3L8p);
                      }
                  })(k),
              })
            : null;
    return (0, r.jsxs)("div", {
        className: lr.ue,
        children: [
            E.length > 0 && !w
                ? (0, r.jsx)("ol", {
                      className: lr.dO,
                      children: E.filter((e) => "todos" !== e.type).map((e) =>
                          (0, r.jsxs)(
                              "li",
                              {
                                  className: lr.DV,
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: ij.PT,
                                          children: aj.A.parse(e.content, !0, {
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
            null != a
                ? (0, r.jsx)(ie, { projectId: t, proposal: a, version: s, onApprove: b })
                : P
                  ? (0, r.jsxs)("div", {
                        className: o()(lr.ky, iv.XR),
                        children: [
                            (0, r.jsx)("div", {
                                className: o()(ij.PT, lr.cW),
                                children: aj.A.parse(_, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === T ? L : null,
                            $,
                        ],
                    })
                  : null,
            null != d
                ? (0, r.jsx)("div", {
                      className: o()(lr.ky, iv.XR, { [ip.O]: null != f && "open" === h }),
                      children: (0, r.jsx)(ig, {
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
                      className: o()(lr.ky, iv.XR),
                      children: (0, r.jsx)(ai, { projectId: t, request: g }),
                  })
                : null,
            "standalone" !== T && ("closing" !== T || P) ? null : R,
            null != x ? (0, r.jsx)(ir, { projectId: t }) : null,
            null != u && u.length > 0 ? (0, r.jsx)(io, { ideas: u, pickedIdeaIds: v, onPick: p }) : null,
            null != N ? (0, r.jsx)(aV, { proposal: N, onRestore: C }) : null,
            P ? null : $,
        ],
    });
}
var iw = n(146806),
    iA = n(477262),
    iN = n(432017),
    iC = n(475358),
    iS = n(717400),
    iE = n(663341),
    iI = n(559647),
    iM = n(775602),
    i_ = n(234320),
    iT = n(285796),
    iP = n(922329);
async function iR(e) {
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
var iL = n(153171);
let i$ = V.lN;
function iD(e, t, n, l) {
    let a = lH(e, t).length;
    !(function (e, t, n) {
        if (0 === n.length) return;
        let l = n.map((e) => {
            let { draft: t, upload: n } = e;
            return { draft: { ...t, localId: lG++ }, upload: n };
        });
        for (let { draft: n, upload: a } of (lV(e, t, [
            ...lH(e, t),
            ...l.map((e) => {
                let { draft: t } = e;
                return t;
            }),
        ]),
        l))
            a?.().then(
                (l) => {
                    if ("errorText" in l) return void lK(e, t, n.localId, { status: "error", errorText: l.errorText });
                    let { converted: a, ...r } = l;
                    lK(e, t, n.localId, { ...a, status: "ready", ref: r })
                        ? setTimeout(
                              () =>
                                  lK(e, t, n.localId, {
                                      status: "error",
                                      errorText: el.intl.string(en.default.E7dS5n),
                                  }),
                              V.o2 - 3e5,
                          )
                        : lW(e, r.id);
                },
                (l) => {
                    (console.error("[vibegrations] attachment upload failed", l),
                        lK(e, t, n.localId, { status: "error", errorText: el.intl.string(en.default["kUw/b1"]) }));
                },
            );
    })(
        e,
        t,
        n.map((e) => {
            let t = "" === e.type ? "application/octet-stream" : e.type,
                n = { name: e.name, contentType: t };
            if (a++ >= i$)
                return {
                    draft: {
                        ...n,
                        status: "error",
                        errorText: el.intl.formatToPlainString(en.default.Q0aCVZ, { count: i$ }),
                    },
                };
            if (!(0, V.Oq)(e.size, t))
                return "image/png" === t && e.size <= V.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas
                    ? {
                          draft: { ...n, status: "uploading", previewUrl: URL.createObjectURL(e) },
                          upload: async () => {
                              let n = await iR(e).catch(() => null);
                              return null != n && (0, V.Oq)(n.size, n.type)
                                  ? { ...(await l(n)), converted: { name: n.name, contentType: n.type } }
                                  : { errorText: lJ(t) };
                          },
                      }
                    : { draft: { ...n, status: "error", errorText: lJ(t) } };
            let r = V.XB.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...n, status: "uploading", previewUrl: r }, upload: () => l(e) };
        }),
    );
}
function iO(e) {
    let { projectId: t, surface: n, onUploadFile: l } = e,
        a = lU.useState((e) => lB(e, t, n)),
        r = i.useCallback((e) => iD(t, n, e, l), [t, n, l]),
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
                null != (a = (l = lH(t, n)).find((t) => t.localId === e)) &&
                    (lX(t, a),
                    lV(
                        t,
                        n,
                        l.filter((t) => t.localId !== e),
                    ));
            },
            [t, n],
        ),
        u = i.useCallback(() => lZ(t, n), [t, n]);
    return {
        drafts: a,
        addFiles: r,
        pasteFiles: s,
        removeDraft: o,
        settled: a.every((e) => "ready" === e.status),
        takeRefs: u,
    };
}
function iF(e) {
    let { draft: t, onRemove: n } = e;
    return (0, r.jsxs)(iP.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, r.jsx)(j.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, r.jsx)(f.y, { type: f.t.SPINNING_CIRCLE_SIMPLE, className: iL.Rk }) : null,
            (0, r.jsx)("button", {
                type: "button",
                className: iL.o1,
                onClick: () => n(t.localId),
                "aria-label": el.intl.string(en.default.Slam9g),
                children: (0, r.jsx)(iT.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var iz = n(497437);
let iq = [
        {
            id: "add-images-videos",
            label: en.default["51+9lc"],
            icon: iA.s,
            accept: "image/*,video/*,.png,.jpg,.jpeg,.gif,.webp,.avif,.heic,.heif,.svg,.bmp,.mp4,.m4v,.mov,.webm,.mkv,.avi",
        },
        {
            id: "add-sounds",
            label: en.default["10ljr2"],
            icon: iN.T,
            accept: "audio/*,.mp3,.wav,.ogg,.oga,.opus,.m4a,.aac,.flac,.weba,.webm,.aif,.aiff,.mid,.midi",
        },
        { id: "add-other-files", label: en.default.aotDee, icon: Y.H, accept: "" },
    ],
    iG = "text-md/normal",
    iU = null;
function iB(e) {
    let { text: t, offering: n, typed: l } = e,
        [a, s] = i.useState(t),
        u = i.useRef(null),
        c = i.useRef(null),
        m = i.useRef(0),
        [f, h] = i.useState(0),
        [g, x] = i.useState(0),
        [p, v] = i.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
    (i.useLayoutEffect(() => {
        let e = u.current,
            t = e?.parentElement;
        if (null == e || null == t) return;
        let n = m.current;
        function l() {
            let e = u.current,
                t = e?.parentElement;
            if (null == e || null == t) return;
            let l = c.current;
            if (null == l) return;
            let a = parseFloat(getComputedStyle(t).columnGap),
                r = Number.isNaN(a) ? 0 : a,
                i = e.offsetWidth,
                s = l.offsetWidth + r;
            (x(i + r), h(s));
            let o = s + i,
                d = Math.max(n, l.offsetWidth) + r + i,
                m = 0 === d ? 1 : s / d,
                f = 0 === d ? 1 : o / d;
            v({
                frontFrom: 1e3 * (0, iw._R)(m),
                frontTo: 1e3 * (0, iw._R)(f),
                backFrom: 1e3 * (0, iw.T)(m),
                backTo: 1e3 * (0, iw.T)(f),
            });
        }
        let a = new ResizeObserver(l);
        return (l(), a.observe(e), a.observe(t), null != c.current && a.observe(c.current), () => a.disconnect());
    }, [t]),
        i.useEffect(() => {
            m.current = c.current?.offsetWidth ?? 0;
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
    let C = "in" === k ? p.backFrom : p.frontFrom,
        S = "out" === k ? p.frontTo : p.backTo,
        E = (0, d.bG)([iM.Ay], () => iM.Ay.useReducedMotion),
        I = t === el.intl.string(en.default.Zc7gML),
        M = a === t && I;
    function _(e, t, n) {
        let l = null != n;
        return (0, r.jsx)("span", {
            ref: n,
            className: o()(iz.VT, { [iz.qk]: l }),
            style: l
                ? {
                      insetInlineStart: f,
                      "--custom-cap-wipe-delay": `${C}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, S - C)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": l && b > 0 && null != k ? b % 2 : void 0,
            "data-wipe-kind": l ? (k ?? void 0) : void 0,
            children: (0, r.jsx)(iC.e, { shortcut: "tab", className: iz.xT, keyClassName: e }),
        });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eC.o, {
                text: t,
                variant: iG,
                delay: null,
                duration: 1e3,
                trailingWidth: g,
                className: o()(iz.xM, { [iz.s2]: l }),
                onStart: N,
                onComplete: () => s(t),
            }),
            _(iz.IS, n || (!E && "out" === k), u),
            (0, r.jsx)("span", {
                ref: c,
                className: iz.QI,
                "aria-hidden": !0,
                children: (0, r.jsx)(j.E, { variant: iG, tag: "span", children: t }),
            }),
            M
                ? (0, r.jsxs)("span", {
                      className: iz.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, r.jsx)(j.E, { variant: iG, tag: "span", className: iz.xM, children: t }),
                          _(iz.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let iH = i.memo(function (e) {
        let {
                projectId: t,
                canSend: n,
                stopped: l,
                running: a,
                restoring: s = !1,
                onSend: o,
                onInterrupt: u,
                onUploadFile: c,
                onApprove: m,
                onImport: f,
                suggestion: h,
                questionOpen: g = !1,
                hasPendingContext: x = !1,
                onDraftHasTextChange: p,
                modelSettings: v,
                onModelSettingsChange: j,
            } = e,
            [b, w] = i.useState(() => ax.getDraft(t)),
            A = i.useCallback(
                (e) => {
                    ((0, ev.I$)(t, e), w(e));
                },
                [t],
            ),
            N = "" !== b.trim();
        i.useEffect(() => p?.(N), [N, p]);
        let [C, S] = i.useState(t);
        C !== t && (S(t), w(ax.getDraft(t)));
        let E = (0, d.bG)([iM.Ay], () => iM.Ay.isSubmitButtonEnabled),
            [I, M] = i.useState(!1);
        i.useEffect(() => {
            a || M(!1);
        }, [a]);
        let _ = i.useRef(null),
            {
                drafts: T,
                addFiles: P,
                pasteFiles: R,
                removeDraft: L,
                settled: $,
                takeRefs: D,
            } = iO({ projectId: t, surface: "chat", onUploadFile: c }),
            O = "" !== b.trim() || T.length > 0 || x,
            F = n && O && $,
            [z, q] = i.useState(null);
        i.useEffect(() => {
            if (null == z) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => q(null));
                });
            return () => {
                (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
            };
        }, [z]);
        let G = i.useCallback(() => {
                if (!F) return;
                let e = D();
                o(b, e.length > 0 ? e : void 0);
                let t = (function (e, t, n) {
                    let l,
                        a,
                        r = n.split("\n", 1)[0] ?? "";
                    if (null == e || "" === r) return r;
                    null == iU && (iU = document.createElement("canvas").getContext("2d"));
                    let i = iU;
                    if (null == i) return r;
                    let s = getComputedStyle(e);
                    i.font = "" !== s.font ? s.font : `${s.fontWeight} ${s.fontSize} ${s.fontFamily}`;
                    let o =
                        t > 0
                            ? t
                            : ((l = parseFloat(s.paddingInlineStart)),
                              (a = parseFloat(s.paddingInlineEnd)),
                              e.clientWidth - (Number.isNaN(l) ? 0 : l) - (Number.isNaN(a) ? 0 : a));
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
                })(Q.current?.querySelector("textarea") ?? null, ec.current, b);
                ("" !== t && q(t), A(""));
            }, [F, b, o, D, A]),
            U = i.useCallback(
                (e) => {
                    (e.preventDefault(), G());
                },
                [G],
            ),
            B = i.useCallback(() => {
                null == u || I || (M(!0), u());
            }, [u, I]),
            H = null == h || "" !== b || !n || l || s || x ? null : h,
            V = i.useCallback(
                (e) => {
                    if ("Escape" === e.key && a && null != u && !I) {
                        (e.preventDefault(), e.stopPropagation(), B());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != H) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), A(H));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != m && (e.preventDefault(), m());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), G());
                },
                [G, m, a, u, I, B, H, A],
            ),
            Y = i.useCallback(
                (e) => {
                    n && R(e);
                },
                [n, R],
            );
        (0, i_.Vo)({
            event: em.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return Y(t);
            },
        });
        let J = i.useCallback(
                (e) => {
                    (P(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
                },
                [P],
            ),
            Q = i.useRef(null),
            Z = i.useRef(null),
            ee = i.useCallback((e) => {
                let t = _.current;
                null != t && ((t.accept = e), t.click());
            }, []),
            [et, ea] = i.useState(0),
            [er, ei] = i.useState(!1);
        i.useEffect(() => {
            if (0 === b.length) return void ei(!1);
            let e = Q.current?.querySelector("textarea");
            if (null != e) {
                let t = iW(e);
                null != t && ea(t);
            }
            ei(!0);
            let t = setTimeout(() => ei(!1), iV);
            return () => clearTimeout(t);
        }, [b]);
        let es = i.useMemo(() => ({ "--custom-glow-x": `${et}px` }), [et]),
            eo = er ? ` ${iz.EB}` : "",
            eu = s
                ? el.intl.string(en.default.qqlUiW)
                : l
                  ? el.intl.string(en.default.mPB3eo)
                  : n
                    ? x
                        ? el.intl.string(en.default.knUjL3)
                        : g
                          ? el.intl.string(en.default.IevBEw)
                          : el.intl.string(a ? en.default["0BJa/0"] : en.default.TEeU7z)
                    : el.intl.string(en.default.zZ9NgM),
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
            eh = i.useId(),
            eg = null != H,
            ex = z ?? H ?? eu,
            ep = "" === b && "" !== ex;
        return (0, r.jsxs)("form", {
            onSubmit: U,
            className: iz.DA,
            children: [
                T.length > 0
                    ? (0, r.jsx)("div", {
                          className: iz.lN,
                          children: T.map((e) => (0, r.jsx)(iF, { draft: e, onRemove: L }, e.localId)),
                      })
                    : null,
                (0, r.jsx)("span", { className: `${iz.wg} ${iz.LP}${eo}`, style: es, "aria-hidden": !0 }),
                (0, r.jsx)("span", { className: `${iz.wg} ${iz.L3}${eo}`, style: es, "aria-hidden": !0 }),
                (0, r.jsxs)("div", {
                    className: iz.VA,
                    ref: Q,
                    children: [
                        (0, r.jsx)("input", {
                            ref: _,
                            type: "file",
                            multiple: !0,
                            onChange: J,
                            className: iz.nY,
                            tabIndex: -1,
                            "aria-hidden": !0,
                        }),
                        (0, r.jsx)(K.Y, {
                            targetElementRef: Z,
                            position: "top",
                            align: "left",
                            animation: K.Y.Animation.NONE,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, r.jsx)(W.W, {
                                    "data-menu-migrated": !0,
                                    navId: "conjure-composer-attach",
                                    "aria-label": el.intl.string(el.t.d56gCa),
                                    onClose: t,
                                    onSelect: t,
                                    children: (0, r.jsxs)(X.rX, {
                                        children: [
                                            iq.map((e) =>
                                                (0, r.jsx)(
                                                    X.Dr,
                                                    {
                                                        id: e.id,
                                                        label: el.intl.string(e.label),
                                                        iconLeft: e.icon,
                                                        leadingAccessory: { type: "icon", icon: e.icon },
                                                        action: () => ee(e.accept),
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                            null != f
                                                ? (0, r.jsx)(X.Dr, {
                                                      id: "import-project",
                                                      label: el.intl.string(en.default["p/k5i7"]),
                                                      iconLeft: iS.q,
                                                      leadingAccessory: { type: "icon", icon: iS.q },
                                                      action: f,
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
                                    ref: Z,
                                    type: "button",
                                    className: `${iz.Y0} ${iz.nu}`,
                                    disabled: !n,
                                    "aria-label": el.intl.string(el.t.d56gCa),
                                    "aria-haspopup": "menu",
                                    "aria-expanded": l,
                                    children: (0, r.jsx)(iE.PlusLargeIcon, {
                                        size: "refresh_sm",
                                        color: "currentColor",
                                        className: iz.Qu,
                                    }),
                                });
                            },
                        }),
                        ep
                            ? (0, r.jsx)("div", {
                                  ref: ef,
                                  className: iz.ar,
                                  "aria-hidden": "true",
                                  children: (0, r.jsx)(iB, { text: ex, offering: eg && null == z, typed: null != z }),
                              })
                            : null,
                        (0, r.jsx)(lc.y, {
                            value: b,
                            onChange: (e) => A(e.currentTarget.value),
                            onKeyDown: V,
                            onPaste: Y,
                            placeholder: ep ? "" : eu,
                            disabled: !n,
                            "aria-label": el.intl.string(en.default.ldNl9x),
                            "aria-describedby": ep ? eh : void 0,
                            rows: 1,
                            className: iz.jp,
                        }),
                        ep ? (0, r.jsx)(k.A, { id: eh, children: eu }) : null,
                        (0, r.jsx)("div", {
                            className: iz.Sz,
                            children:
                                a && null != u
                                    ? (0, r.jsx)(y.m, {
                                          text: el.intl.string(en.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, r.jsx)("button", {
                                              type: "button",
                                              className: `${iz.Y0} ${iz.$E}`,
                                              disabled: I,
                                              onClick: B,
                                              "aria-label": el.intl.string(en.default.wiguT0),
                                              children: (0, r.jsx)(av.w, {
                                                  size: "custom",
                                                  width: 20,
                                                  height: 20,
                                                  color: "currentColor",
                                              }),
                                          }),
                                      })
                                    : v?.tierSettings != null && null != j
                                      ? (0, r.jsx)(td, {
                                            settings: v.tierSettings,
                                            tiers: v.tiers,
                                            choices: v.choices,
                                            disabled: !n,
                                            onChange: j,
                                            className: `${iz.Y0} ${iz.$E}`,
                                            icon: (0, r.jsx)(tl.R, {
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
                                  className: iz.fF,
                                  children: [
                                      (0, r.jsx)("div", { className: iz.MT }),
                                      (0, r.jsx)("button", {
                                          type: "submit",
                                          className: iz.rt,
                                          disabled: !F,
                                          "aria-label": el.intl.string(en.default.rxW2cl),
                                          children: (0, r.jsx)(iI.SendMessageIcon, {
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
    iV = 1500,
    iK = [
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
function iW(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = iW.mirror;
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
                (iW.mirror = t),
                t
            );
        })(),
        n = window.getComputedStyle(e);
    for (let e of iK) t.style.setProperty(e, n.getPropertyValue(e));
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let l = document.createElement("span");
    ((l.textContent = "\u200B"), t.appendChild(l));
    let a = l.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + a - e.scrollLeft);
}
iW.mirror = null;
var iX = n(52133),
    iY = n(732159),
    iJ = n(888366),
    iQ = n(862026);
n(775443);
var iZ = n(616e3),
    i0 = n(155899),
    i1 = n(148087);
let i2 = [6e4, 18e4, 6e5],
    i3 = [
        {
            key: "outdated",
            priority: 2,
            idleDelayMs: 6e4,
            backoffDelaysMs: i2,
            clock: "persistent",
            eligible: (e) => {
                var t;
                let { publish: n, draftTyped: l, outdatedUpdating: a } = e;
                return a
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
                let { turn: n, publish: l, draftHasText: a } = e;
                return (
                    !a &&
                    l?.publishing !== !0 &&
                    "plan_implemented" === (t = n).kind &&
                    (0, eh.BL)(t) &&
                    !(null != n.publishCta && it(l))
                );
            },
        },
    ];
function i7(e, t) {
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
let i4 = new Map();
function i6(e) {
    return (0, d.bG)([ej.Ay, rr.A], () => {
        let t = ej.Ay.getProject(e);
        return null == t ? "" : (rr.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
function i5(e) {
    let { projectId: t, notice: n } = e;
    return "outdated" === n ? (0, r.jsx)(i9, { projectId: t }) : (0, r.jsx)(i8, { projectId: t, notice: n });
}
function i8(e) {
    let { projectId: t, notice: n } = e,
        l = i6(t),
        a = (0, d.bG)([ej.Ay, B.A], () => {
            let e = ej.Ay.getProject(t);
            return null == e || "user" === e.install_scope || null == e.guild_id
                ? null
                : (B.A.getGuild(e.guild_id)?.name ?? null);
        });
    return (0, r.jsx)(j.E, {
        variant: "text-md/normal",
        color: "text-default",
        children: el.intl.format(
            (function (e, t) {
                if (!0 === e.channel_skipped) return en.default.ev23Cw;
                if (!e.update) return null == t ? en.default.MOrR29 : en.default["/npn7F"];
                switch (e.surface) {
                    case "bot":
                        return en.default.zfpeIL;
                    case "widget":
                        return en.default.DxCfTh;
                    case "automod":
                        return en.default["8ytGC3"];
                    case "activity":
                    case null:
                        return en.default.WSmpBT;
                }
            })(n, a),
            { name: l, server: a ?? "" },
        ),
    });
}
function i9(e) {
    let { projectId: t } = e,
        n = (0, ni.Ay)(t),
        [l, a] = i.useState(!1);
    return null == n
        ? null
        : l && (n.publishing || !n.isUpdate)
          ? (0, r.jsx)(se, {})
          : (0, r.jsx)(j.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: el.intl.format(en.default.X8tdbS, {
                    action: n.label,
                    onUpdate: () => {
                        (a(!0), i4.get(t)?.forEach((e) => e()), n.run("outdated_notice"));
                    },
                }),
            });
}
function se() {
    let e = el.intl.string(en.default.lexcBN),
        t = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = (0, d.bG)([iM.Ay], () => iM.Ay.useReducedMotion),
                [n, l] = i.useState(1);
            return (
                i.useEffect(() => {
                    if (t || e) return;
                    let n = setInterval(() => l((e) => (e % 3) + 1), 400);
                    return () => clearInterval(n);
                }, [t, e]),
                ".".repeat(t ? 3 : n)
            );
        })(!(0, i1.A)());
    return (0, r.jsxs)(j.E, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: [e, (0, r.jsx)("span", { "aria-hidden": !0, children: t })],
    });
}
var st = n(248798);
function sn(e, t) {
    e.style.height = `${t.offsetHeight}px`;
}
function sl(e) {
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
        a = l.find((e) => !e.leaving)?.key ?? null,
        s = null == a && l.length > 0,
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
            sn(e, t);
            let n = new ResizeObserver(() => sn(e, t));
            return (n.observe(t), () => n.disconnect());
        }, [a, s]),
        (0, r.jsx)("div", {
            ref: u,
            className: o()(st.NI, { [st.Jg]: null == a }),
            "aria-live": "polite",
            children: (0, r.jsx)("div", {
                className: st.t$,
                children: l.map((e) =>
                    (0, r.jsx)(
                        "div",
                        {
                            ref: e.leaving ? void 0 : c,
                            "aria-hidden": e.leaving || void 0,
                            "data-conjure-entrance": !0,
                            className: o()(st.qd, e.leaving ? st.cu : st.We),
                            children: n(e.key),
                        },
                        e.key,
                    ),
                ),
            }),
        })
    );
}
var sa = n(521981),
    sr = n(491182),
    si = n(438729),
    ss = n(622868),
    so = n(448368),
    su = n(837528),
    sc = n(470964),
    sd = n(715628),
    sm = n(752636),
    sf = n(9842),
    sh = n(589022),
    sg = n(994500),
    sx = n(967198),
    sp = n(531685);
let sv = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function sj(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function sb(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function sy(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let a = sb(e, t),
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
    if (sj(a) && sj(r)) {
        let n = 0,
            l = t;
        for (; n < 32 && sj(sb(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function sk(e, t) {
    let { streaming: n } = t,
        l = (0, d.bG)([iM.Ay], () => iM.Ay.useReducedMotion),
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
                          r = 0;
                      for (; r < a && e.charCodeAt(r) === t.charCodeAt(r);) r++;
                      for (; r > 0 && sy(t, r);) r--;
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
                        let e = c.current,
                            l = (function (e) {
                                let { target: t, revealed: n, elapsedMs: l } = e,
                                    a = Math.min(Math.max(n, 0), t.length),
                                    r = t.length - a;
                                if (r <= 0) return a;
                                if (r > 900) return t.length;
                                let i = Math.min(
                                    120,
                                    Math.max(1, Math.round(Math.max(0.16, r / 280) * Math.max(l, 0))),
                                );
                                var s = (function (e, t, n) {
                                    if (n >= e.length) return n;
                                    let l = n;
                                    for (; l > t + 1 && n - l < 12 && sv.has(e.charAt(l - 1));) l--;
                                    return sv.has(e.charAt(l - 1)) ? n : l;
                                })(t, a, Math.min(t.length, a + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && sy(t, o);) o++;
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
                let { target: e } = c.current;
                s({ target: e, length: e.length });
            }
        }, [u]));
    let h = Math.min(o.length, e.length);
    return { text: h >= e.length ? e : e.slice(0, h), revealing: a && h < e.length };
}
var sw = n(624479),
    sA = n(890377),
    sN = n(744898),
    sC = n(180227);
function sS(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, r.jsx)("div", {
              className: o()(sC.QE, { [sC.Rn]: t }),
              children: (0, r.jsx)(rU.Ay, {
                  children: n.map((e) =>
                      (0, r.jsx)(
                          rU.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function sE(e) {
    return nn.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: el.intl.string(el.t.JrGD7E), icon: sw.CopyIcon, onClick: () => (0, nn.C)(e) }]
        : [];
}
function sI(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        a =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: el.intl.string(en.default.CXtLD2),
                          tooltip: el.intl.string(en.default.DOb1HM),
                          icon: sA.V,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: el.intl.string(en.default.urZwpN),
                          icon: P.P,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, r.jsx)(sS, { groupStart: n, actions: [...a, ...sE(t)] });
}
function sM(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: a } = e,
        i =
            null == l
                ? []
                : [{ id: "restore-version", label: el.intl.string(en.default.H8Jfhu), icon: sN.e, onClick: l }],
        s = null == a ? [] : [{ id: "view-trace", label: "View Trace", icon: C.BugIcon, onClick: a }];
    return (0, r.jsx)(sS, { groupStart: n, actions: [...i, ...sE(t), ...s] });
}
let s_ = (0, ro.createChannelRecord)({ id: "conjure-builder", type: em.rbe.DM }),
    sT = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function sP(e, t) {
    return null == e ? e : (0, r.jsx)("div", { className: o()(sC.Yq, { [sC.x1]: t }), children: e });
}
function sR(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function sL(e, t, n) {
    let { content: l } = (0, sc.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        a = i.useMemo(() => ({ message: e, channel: s_, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, r.jsx)(si.Ay, { className: n, message: e, content: l, compact: !1 })
          : (0, sd.A)(a, l);
}
function s$(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        a = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, su.m)(e, s_, t.usernameProfile, l),
        o = (0, su.Jo)(t.avatarProfile, l),
        u = (0, d.bG)([sx.A], () => sx.A.getGuildId()),
        c = (0, d.bG)([tW.default], () => tW.default.getCurrentUser()),
        m = i.useCallback(
            (t) => {
                let n = tW.default.getUser(e.author.id) ?? e.author;
                return null == c ? null : (0, r.jsx)(sh.A, { ...t, user: n, currentUser: c, guildId: u ?? void 0 });
            },
            [c, u, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: o,
        onClickUsername: s,
        onPopoutRequestClose: a,
        renderPopout: m,
        guildId: u ?? void 0,
    };
}
function sD(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: a } = e,
        s = i.useMemo(() => {
            let e = "" !== n.content ? (0, sa.Ay)(n, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == l
                ? e
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)("span", {
                              className: sC.GV,
                              children: [
                                  (0, r.jsx)(N.x, {
                                      className: sC.Rj,
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
        { isReplyAuthorBlocked: o, isReplyAuthorIgnored: u } = (0, d.cf)(
            [sg.A],
            () => ({
                isReplyAuthorBlocked: sg.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: sg.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        c = (0, rq.X4)(n),
        m = (0, rq.X4)(t),
        f = s$(n);
    return (0, r.jsx)(so.A, {
        repliedAuthor: c,
        baseAuthor: m,
        baseMessage: t,
        channel: s_,
        referencedMessage: { state: sf.a.LOADED, message: n },
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
function sO(e) {
    let { message: t, author: n } = e,
        l = s$(t);
    return (0, r.jsx)(ss.Ay, {
        message: t,
        channel: s_,
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
function sF(e) {
    let { content: t, createdAt: n, userId: l, accessories: a, groupStart: s, onQueuedAction: o } = e;
    i.useEffect(() => t0(l), [l]);
    let u = (0, d.bG)(
            [tW.default],
            () => tZ(l, null != l ? tW.default.getUser(l) : null, tW.default.getCurrentUser()),
            [l],
        ),
        c = i.useMemo(() => (0, rq.FT)(u, null), [u]),
        m = i.useMemo(() => eY(t), [t]),
        f = m?.body ?? t,
        h = i.useMemo(() => {
            if (null == u) return null;
            let e = (0, rs.Ay)({ channelId: s_.id, content: f, author: u });
            return (0, ri.rh)({ ...e, timestamp: sR(n, e.timestamp), state: em.cmJ.SENT });
        }, [f, u, n]);
    return null == h
        ? null
        : (0, r.jsx)(sz, {
              message: h,
              author: c,
              content: f,
              selected: m?.label,
              accessories: a,
              groupStart: s,
              onQueuedAction: o,
          });
}
function sz(e) {
    let { message: t, author: n, content: l, selected: a, accessories: i, groupStart: s = !0, onQueuedAction: o } = e,
        u = sL(t, l);
    return (0, r.jsx)(sr.A, {
        className: sC.yE,
        author: n,
        childrenHeader: s ? (0, r.jsx)(sO, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == a
                ? u
                : (0, r.jsxs)("div", {
                      className: sC.zq,
                      children: [
                          (0, r.jsxs)("span", {
                              className: sC.GV,
                              children: [
                                  (0, r.jsx)(N.x, {
                                      className: sC.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  a,
                              ],
                          }),
                          (0, r.jsx)("span", { className: sC.WO, children: u }),
                      ],
                  }),
        childrenAccessories: sP(i, "" !== l),
        childrenButtons: (0, r.jsx)(sI, { content: l, groupStart: s, onQueuedAction: o }),
    });
}
function sq(e) {
    let {
            content: t,
            createdAt: n,
            accessories: l,
            replyTo: a,
            onJumpToReplied: s,
            groupStart: o = !0,
            streaming: u = !1,
            buttons: c,
        } = e,
        { text: m, revealing: f } = sk(t, { streaming: (0, d.bG)([sp.A], () => u && sp.A.isFocused(), [u]) }),
        h = i.useMemo(() => (0, rq.FT)(null, null), []),
        g = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        x = a?.userId,
        p = (0, d.bG)(
            [tW.default],
            () => tZ(x, null != x ? tW.default.getUser(x) : null, tW.default.getCurrentUser()),
            [x],
        ),
        v = i.useMemo(() => (null == a ? null : eY(a.content)), [a]),
        j = i.useMemo(() => {
            if (null == a || null == p) return null;
            let e = (0, rs.Ay)({ channelId: s_.id, content: v?.body ?? a.content, author: p });
            return (0, ri.rh)({ ...e, id: a.id, timestamp: sR(a.createdAt, e.timestamp), state: em.cmJ.SENT });
        }, [a, v, p]),
        b = i.useMemo(() => (null == a ? void 0 : { channel_id: s_.id, message_id: a.id }), [a]),
        [y] = i.useState(() => (0, rs.Ay)({ channelId: s_.id, content: "", author: sT })),
        k = i.useMemo(
            () =>
                (0, ri.rh)({
                    ...y,
                    timestamp: sR(n, y.timestamp),
                    state: em.cmJ.SENT,
                    ...(null != b ? { type: em.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        w = i.useMemo(() => k.set("content", m), [k, m]),
        A = i.useMemo(
            () => (0, sm.A)({ message: k, channel: s_, author: g, guildId: void 0, isGroupStart: o }),
            [k, g, o],
        ),
        N = sL(w, m, sC.OS);
    return (0, r.jsxs)("div", {
        className: sC.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": f ? "true" : void 0,
        children: [
            (0, r.jsx)(sr.A, {
                className: sC.yE,
                author: g,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, r.jsx)(sD, { baseMessage: k, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: A,
                childrenMessageContent: N,
                childrenAccessories: sP(l, "" !== m),
                disableInteraction: !0,
            }),
            c,
            o
                ? (0, r.jsx)("span", {
                      className: sC.st,
                      "aria-hidden": "true",
                      children: (0, r.jsx)(aK.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
let sG = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    sU = new WeakMap();
var sB = n(288539);
function sH(e, t, n) {
    return (0, r.jsx)(sB.A, { userId: e, content: `@${t}` }, n);
}
function sV(e) {
    let { projectId: t, event: n } = e,
        l = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => t0(l), [l]);
            let a = (0, d.bG)([tW.default], () => (null == l ? null : tW.default.getUser(l)), [l]),
                r = (0, tX.tx)(a),
                s = i6(e),
                o =
                    (0, d.bG)([B.A], () => (null == t.guild_id ? null : B.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ?? el.intl.string(en.default.R1tPlP),
                u = null == a || null == r ? null : { user: r, userHook: (e, t) => n(a.id, r, t) };
            switch (t.type) {
                case "app_removed":
                    return null == u
                        ? el.intl.format(en.default.Lwsrhg, { app: s, server: o })
                        : el.intl.format(en.default.qqePfT, { app: s, server: o, ...u });
                case "bot_removed":
                    return null == u
                        ? el.intl.format(en.default.mT7EQG, { app: s, server: o })
                        : el.intl.format(en.default["lA/crI"], { app: s, server: o, ...u });
                case "preview_bot_removed":
                    return null == u
                        ? el.intl.format(en.default["4LVIeo"], { app: s, server: o })
                        : el.intl.format(en.default.YJOV6D, { app: s, server: o, ...u });
                case "app_channel_deleted": {
                    let e = t.channel_name ?? "";
                    return null == u
                        ? el.intl.format(en.default["4VQfid"], { channel: e, server: o })
                        : el.intl.format(en.default.RlMIJN, { channel: e, server: o, ...u });
                }
            }
        })(t, n, sH);
    return (0, r.jsx)(j.E, { variant: "text-md/normal", color: "text-default", children: l });
}
function sK(e) {
    let { onSelect: t, onClose: n = $.Z_, onRestoreVersion: l, onViewTrace: a } = e;
    return (0, r.jsx)(W.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": el.intl.string(el.t.ogxXGq),
        onSelect: t,
        children: (0, r.jsxs)(X.rX, {
            children: [
                null != l
                    ? (0, r.jsx)(X.Dr, {
                          id: "restore-version",
                          label: el.intl.string(en.default.H8Jfhu),
                          icon: sN.e,
                          action: l,
                      })
                    : null,
                null != a
                    ? (0, r.jsx)(X.Dr, { id: "view-trace", label: "View Trace", icon: C.BugIcon, action: a })
                    : null,
            ],
        }),
    });
}
function sW(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        a = Math.max(0, Math.min(l, t));
    return { start: a, end: l, startKey: e[a] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function sX(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
var sY = n(986109);
let sJ = i.createContext(null);
function sQ(e, t) {
    (0, i0.F)({ onConfirm: () => t(e) });
}
let sZ = i.memo(function (e) {
        let {
                projectId: t,
                messages: n,
                emptyState: l,
                onPickIdea: a,
                onAskForIdeas: s,
                draftHasText: u,
                onApprovePlan: c,
                floatingSettingsMessageId: m,
                liveClarificationId: h,
                onRestoreVersion: g,
                scrollerRef: x,
                stickToBottomRef: p,
                pinned: v,
                onUnpin: b,
                handleRef: y,
                onShowsLatestChange: k,
            } = e,
            w = i.useRef(null),
            [A, N] = i.useState(null),
            C = i.useCallback((e) => {
                ((w.current = e), N(e));
            }, []),
            [S, E] = i.useState(null),
            I = i.useRef(0);
        i.useEffect(() => () => window.clearTimeout(I.current), []);
        let M = i.useCallback((e) => {
                (E(e), window.clearTimeout(I.current), (I.current = window.setTimeout(() => E(null), 1600)));
            }, []),
            _ = (0, d.bG)([ej.Ay], () => ej.Ay.getPublishStatus(t)?.state ?? null),
            T = (0, d.bG)([tW.default], () => tW.default.getCurrentUser()?.id),
            P = i.useMemo(() => {
                let e;
                return (function (e, t) {
                    let n = [],
                        l = (function (e) {
                            let t = new Set(),
                                n = !1;
                            for (let l = e.length - 1; l >= 0; l--) {
                                let a = e[l];
                                null != a &&
                                    null !=
                                        (function (e) {
                                            if ("assistant" !== e.role) return null;
                                            let t = (0, nJ.lt)(e.steps);
                                            return null != t
                                                ? t
                                                : null != e.todos && e.todos.length > 0
                                                  ? e.todos
                                                  : null;
                                        })(a) &&
                                    (n && t.add(a.render_id), (n = !0));
                            }
                            return t;
                        })(e);
                    for (let a of e) {
                        let e = l.has(a.render_id),
                            r = null != a.clarification && a.clarification.id === t,
                            i = sU.get(a);
                        if (null != i && i.superseded === e && i.liveCard === r) {
                            n.push(...i.planned);
                            continue;
                        }
                        let s = (function (e, t, n) {
                            let l = [];
                            function a(e, t) {
                                l.push({ row: e, groupable: { key: e.key, ...t } });
                            }
                            if ("user" === e.role)
                                return (
                                    a(
                                        { kind: "user", key: e.render_id, message: e, groupStart: !1 },
                                        { actor: "user", authorId: e.user_id, boundary: void 0 },
                                    ),
                                    l
                                );
                            if ("publish_notice" === e.kind) {
                                let t = `${e.render_id}:publish`;
                                return (
                                    a(
                                        { kind: "publishNotice", key: t, message: e, groupStart: !1 },
                                        { actor: "assistant", boundary: t },
                                    ),
                                    l
                                );
                            }
                            if ("context_boundary" === e.kind) {
                                let t = `${e.render_id}:contextBoundary`;
                                return (
                                    a(
                                        { kind: "contextBoundary", key: t, message: e, groupStart: !1 },
                                        { actor: null, boundary: t },
                                    ),
                                    l
                                );
                            }
                            if ("project_event" === e.kind) {
                                let t = `${e.render_id}:projectEvent`;
                                return (
                                    a(
                                        { kind: "projectEvent", key: t, message: e, groupStart: !1 },
                                        { actor: "assistant", boundary: t },
                                    ),
                                    l
                                );
                            }
                            let r = !(0, eh.BL)(e),
                                i = ak({
                                    steps: e.steps,
                                    content: e.content,
                                    hasProposal: null != e.proposal,
                                    hasLiveClarification: n,
                                    hasAttachments: (e.attachments?.length ?? 0) > 0,
                                }),
                                s = i.lastStreamedMessage?.key,
                                o = (0, nJ.C6)(e.steps, { turnActive: r }),
                                { lastWork: u, open: c } = (0, nJ.CT)(o, { turnActive: r }),
                                d = o.at(-1)?.index,
                                m = !1;
                            for (let n of o) {
                                if (null != n.prose && sG.test(n.prose.content)) m = !0;
                                else if (null != n.prose && n.prose.key !== i.replyKey) {
                                    let t = `${e.render_id}:${n.key}`;
                                    a(
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
                                            streaming: r && n.index === d && !n.hasWork,
                                        },
                                        { actor: "assistant", boundary: t },
                                    );
                                }
                                (n.hasWork || n.hasTodos) &&
                                    a(
                                        {
                                            kind: "activity",
                                            key: `${e.render_id}:work-${n.index}`,
                                            message: e,
                                            groupStart: !1,
                                            segment: n.index,
                                            active: n.index === c,
                                            closed: n.index !== c,
                                            ...(null != n.durationMs ? { segmentDurationMs: n.durationMs } : {}),
                                            reportsDuration: n.index === u,
                                            hostsChecklist: n.hasTodos,
                                            turnActive: nQ(e),
                                            checklistSuperseded: n.hasTodos && t,
                                        },
                                        { actor: null, boundary: void 0 },
                                    );
                            }
                            let f = sG.test(e.content ?? "");
                            if (
                                (!0 === e.interrupted || m || f
                                    ? a(
                                          {
                                              kind: "interrupted",
                                              key: `${e.render_id}:interrupted`,
                                              message: e,
                                              groupStart: !1,
                                          },
                                          { actor: null, boundary: void 0 },
                                      )
                                    : o.every((e) => !e.hasTodos) &&
                                      (e.todos?.length ?? 0) > 0 &&
                                      a(
                                          {
                                              kind: "legacyTodos",
                                              key: `${e.render_id}:todos`,
                                              message: e,
                                              groupStart: !1,
                                              checklistSuperseded: t,
                                          },
                                          { actor: null, boundary: void 0 },
                                      ),
                                (i.showsClosingMessage && !f) ||
                                    null != e.proposal ||
                                    (null != e.clarification && !n) ||
                                    null != e.restoreProposal ||
                                    (!r &&
                                        (null != e.ideas ||
                                            null != e.publishCta ||
                                            null != e.secretRequest ||
                                            null != e.settingsRequest)) ||
                                    "standalone" === i.attachmentsHost)
                            ) {
                                let t = `${e.render_id}:closing`;
                                a(
                                    {
                                        kind: "closing",
                                        key: t,
                                        message: e,
                                        groupStart: !1,
                                        active: r,
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
                        })(a, e, r);
                        (sU.set(a, { superseded: e, liveCard: r, planned: s }), n.push(...s));
                    }
                    let a = (function (e) {
                        let t,
                            n,
                            l = [],
                            a = null,
                            r = !1,
                            i = !1;
                        for (let s of e) {
                            if (null == s.actor) {
                                (l.push(!1), (a = null), (t = void 0), (r = !1), (i = !1), (n = void 0));
                                continue;
                            }
                            let e =
                                !r || a !== s.actor || t !== s.authorId || s.boundary !== n || !0 === s.separate || i;
                            (e &&
                                ((a = s.actor), (t = s.authorId), (r = !0), (i = !0 === s.separate), (n = s.boundary)),
                                l.push(e));
                        }
                        return l;
                    })(n.map((e) => e.groupable));
                    return n.map((e, t) => ({ ...e.row, groupStart: a[t] ?? !0 }));
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
                              let n = il.get(t);
                              return (null == n && ((n = { ...t, publishCta: null }), il.set(t, n)), n);
                          })),
                    h,
                );
            }, [n, _, h]),
            R = i.useMemo(() => P.map((e) => e.key), [P]),
            [L, $] = i.useState(null),
            D = (function (e, t, n) {
                if (null == t) return sW(e, e.length - 60, e.length);
                let l = null == t.endKey,
                    a = l ? e.length : sX(e, t.endKey, t.end - 1) + 1,
                    r = sX(e, t.startKey, t.start);
                return (l && n && a - r > 120 && (r = a - 60), sW(e, r, a));
            })(R, L, v),
            O = i.useRef(D),
            F = i.useRef(R),
            z = i.useRef(P),
            q = i.useRef(null),
            G = i.useRef(null),
            U = i.useRef(new Set()),
            B = i.useCallback(() => {
                let e = x.current?.getScrollerNode(),
                    t = w.current;
                if (null == e || null == t) return;
                let n = e.getBoundingClientRect().top,
                    l = t.querySelectorAll("[data-conjure-row-key]"),
                    a = 0,
                    r = l.length - 1,
                    i = null;
                for (; a <= r;) {
                    let e = (a + r) >> 1;
                    l[e].getBoundingClientRect().bottom > n ? ((i = l[e]), (r = e - 1)) : (a = e + 1);
                }
                let s = i?.dataset.conjureRowKey;
                q.current = null != i && null != s ? { key: s, offset: i.getBoundingClientRect().top - n } : null;
            }, [x]),
            H = i.useCallback(() => {
                let e = x.current?.getScrollerNode();
                if (null == e) return;
                let n = (function (e, t, n) {
                    let { nearTop: l, nearBottom: a, pinned: r } = n;
                    if (a && null != t.endKey) {
                        let n;
                        return ((n = Math.min(e.length, t.end + 30)), sW(e, Math.max(t.start, n - 120), n));
                    }
                    if (!l) return null;
                    if (0 === t.start) return "older";
                    if (!r && !a) {
                        let n, l;
                        return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), sW(e, n, l));
                    }
                    let i = Math.max(t.start - 30, t.end - 120);
                    return i < t.start ? sW(e, i, t.end) : null;
                })(F.current, O.current, {
                    nearTop: e.scrollTop < 600,
                    nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                    pinned: p.current,
                });
                "older" === n ? (0, J.P6)(t) : null != n && $(n);
            }, [x, p, t]);
        i.useImperativeHandle(
            y,
            () => ({
                handleScroll() {
                    (B(),
                        $((e) => {
                            let t = O.current;
                            return null != e && e.startKey === t.startKey && e.endKey === t.endKey ? e : t;
                        }),
                        H());
                },
                recordAnchor: B,
                showLatest(e) {
                    ((G.current = e ?? null), $(null));
                },
            }),
            [B, H],
        );
        let V = i.useRef(null),
            K = i.useCallback(
                (e) => {
                    var n;
                    let l;
                    V.current = null;
                    let a = w.current?.querySelector(`[data-conjure-message="${e}"]`);
                    if (null != a) {
                        (b(), $(O.current), a.scrollIntoView({ block: "center", behavior: "smooth" }), M(e));
                        return;
                    }
                    let r = z.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                    if (-1 === r) {
                        (0, J.P6)(t) && (V.current = e);
                        return;
                    }
                    (b(),
                        (G.current = () => {
                            (w.current
                                ?.querySelector(`[data-conjure-message="${e}"]`)
                                ?.scrollIntoView({ block: "center" }),
                                M(e));
                        }),
                        $(((n = F.current), sW(n, (l = Math.max(0, r - 30)), l + 60))));
                },
                [M, b, t],
            );
        (i.useEffect(() => {
            let e = V.current;
            null != e && K(e);
        }, [P, K]),
            i.useLayoutEffect(() => {
                if (null == A) return;
                let e = A.getBoundingClientRect().height,
                    t = new ResizeObserver((t) => {
                        let [n] = t,
                            l = n?.contentRect.height;
                        null != l && l !== e && ((e = l), p.current ? x.current?.scrollToBottom() : B());
                    });
                return (t.observe(A), () => t.disconnect());
            }, [A, B, x, p]));
        let W = null == D.endKey;
        (i.useEffect(() => k?.(W), [W, k]),
            i.useLayoutEffect(() => {
                ((O.current = D), (F.current = R), (z.current = P));
            }),
            i.useLayoutEffect(() => {
                let e = x.current?.getScrollerNode(),
                    t = w.current;
                if (null != e && null != t) {
                    let n = q.current;
                    if (p.current) x.current?.scrollToBottom();
                    else if (null != n) {
                        let l = Array.from(t.querySelectorAll("[data-conjure-row-key]")).find(
                                (e) => e.dataset.conjureRowKey === n.key,
                            ),
                            a =
                                null == l
                                    ? 0
                                    : l.getBoundingClientRect().top - e.getBoundingClientRect().top - n.offset;
                        0 !== a && (e.scrollTop += a);
                    }
                    let l = G.current;
                    ((G.current = null), l?.(), B(), H());
                }
                U.current = new Set(R);
            }, [P, R, D.start, D.end, x, p, B, H]));
        let X = n.at(-1),
            Y = (function (e, t, n) {
                var l;
                let a = (0, ni.Ay)(e),
                    r = (0, i1.A)(),
                    s = (function (e) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let n = e[t];
                            if (
                                "publish_notice" !== n.kind &&
                                "project_event" !== n.kind &&
                                "context_boundary" !== n.kind
                            ) {
                                if ("user" === n.role) return null;
                                if ((0, eh.BL)(n)) return n;
                                if (!(0, eh.B0)(e, t)) break;
                            }
                        }
                        return null;
                    })(t),
                    o = t.at(-1),
                    u = {
                        projectId: e,
                        draftHasText: n,
                        publishing: a?.publishing === !0,
                        drift: a?.isUpdate === !0,
                        messageAt: null != o ? Math.max(o.created_at, o.finished_at ?? 0, o.settled_at ?? 0) : null,
                        visible: r,
                    },
                    [c, d] = i.useState(() => i7(u, Date.now())),
                    m = (function (e, t, n) {
                        if (e.projectId !== t.projectId) return i7(t, n());
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
                                (a = {
                                    ...a,
                                    draftHasText: t.draftHasText,
                                    draftTyped: t.draftHasText,
                                    lastActivityAt: l,
                                    outdatedUpdating: t.publishing && a.outdatedUpdating,
                                }),
                            e.publishing !== t.publishing)
                        ) {
                            let e = a.outdatedUpdating && (t.publishing || t.drift);
                            a = {
                                ...a,
                                publishing: t.publishing,
                                lastActivityAt: e ? a.lastActivityAt : l,
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
                            let n = null == t.messageAt ? null : Math.min(t.messageAt, l);
                            ((a = (function (e) {
                                if (!e.outdatedShown || e.publishing) return e;
                                let t = Math.min(e.outdatedBackoff + 1, i2.length - 1);
                                return { ...e, outdatedShown: !1, outdatedBackoff: t };
                            })({ ...a, messageAt: t.messageAt, lastMessageAt: n })).publishing ||
                                (a = { ...a, outdatedUpdating: !1 }),
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
                    })(c, u, Date.now),
                    f =
                        null == s ||
                        null != (l = s).awaitingUser ||
                        null != l.secretRequest ||
                        null != l.settingsRequest ||
                        (l.intake?.questions.length ?? 0) > 0
                            ? null
                            : {
                                  turn: s,
                                  publish: a,
                                  draftHasText: n,
                                  draftTyped: m.draftTyped && n,
                                  outdatedUpdating: m.outdatedUpdating,
                              },
                    { shown: h, nextDueAt: g } = (function (e, t) {
                        var n;
                        let l;
                        if (t.unseen) return { shown: null, nextDueAt: null };
                        let a = e.filter((e) => e.eligible).sort((e, t) => t.priority - e.priority)[0];
                        if (null == a) return { shown: null, nextDueAt: null };
                        let r =
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
                        return r <= t.now ? { shown: a.key, nextDueAt: null } : { shown: null, nextDueAt: r };
                    })(
                        i3.map((e) => ({
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
                        let n = i4.get(e) ?? new Set();
                        return (
                            i4.set(e, n),
                            n.add(t),
                            () => {
                                (n.delete(t), 0 === n.size && i4.delete(e));
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
            })(t, n, !0 === u),
            Q = i.useCallback(
                (e) => {
                    switch (e) {
                        case "outdated":
                            return (0, r.jsx)(sq, {
                                groupStart: !1,
                                content: "",
                                accessories: (0, r.jsx)(i5, { projectId: t, notice: "outdated" }),
                            });
                        case "ideas":
                            return (0, r.jsx)("div", {
                                className: sY.u$,
                                children: (0, r.jsx)(sq, {
                                    content: el.intl.string(en.default.s96AWB),
                                    accessories: (0, r.jsx)(iu, { onAsk: s }),
                                }),
                            });
                    }
                },
                [t, s],
            ),
            Z = i.useMemo(
                () =>
                    (function (e) {
                        if (e.at(-1)?.role !== "assistant") return null;
                        for (let t = e.length - 1; t >= 0; t--) {
                            let n = e[t];
                            if ("assistant" === n.role) {
                                if (!(0, eh.BL)(n) || "plan_implemented" === n.kind) return null;
                                if (null != n.proposal) return n.render_id;
                            }
                        }
                        return null;
                    })(n),
                [n],
            ),
            ee = i.useMemo(
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
            et = i.useMemo(
                () =>
                    (function (e) {
                        let t = new Map(),
                            n = new Set();
                        for (let l = e.length - 1; l >= 0; l--) {
                            let a = e[l];
                            if ("user" === a.role) {
                                n.add(a.content.trim());
                                continue;
                            }
                            if (null == a.ideas) continue;
                            let r = new Set();
                            for (let e of a.ideas) n.has(e.implementation_prompt.trim()) && r.add(e.id);
                            t.set(a.render_id, r);
                        }
                        return t;
                    })(n),
                [n],
            ),
            ea = i.useMemo(
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
            er =
                (X?.role !== "assistant" || null == X.awaitingUser || null == X.secretRequest
                    ? null
                    : (0, eh.BL)(X)
                      ? X.awaitingUser
                      : null) ?? void 0,
            ei = (0, d.bG)([J.Ay], () => J.Ay.getSettings(t)?.secrets, [t]),
            es = i.useMemo(
                () =>
                    (function (e, t) {
                        let n = null != t ? new Set(t.filter((e) => e.set).map((e) => e.name)) : null,
                            l = new Map(),
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
                                            t === el.intl.string(en.default.UGqnoV) ||
                                            t === el.intl.string(en.default.sMQt5O)
                                        );
                                    })(s);
                                continue;
                            }
                            let o = s.secretRequest?.fields ?? [];
                            if (0 === o.length || !(0, eh.BL)(s)) continue;
                            let u = i;
                            for (let e of (u && null == n
                                ? l.set(s.render_id, "pending")
                                : u && null != n && o.every((e) => n.has(e.name))
                                  ? l.set(s.render_id, "received")
                                  : r
                                    ? l.set(s.render_id, o.some((e) => a.has(e.name)) ? "superseded" : "inactive")
                                    : l.set(s.render_id, "open"),
                            o))
                                a.add(e.name);
                            ((r = !0), (i = !1));
                        }
                        return l;
                    })(n, ei),
                [n, ei],
            );
        if (0 === n.length) {
            if ("loading" === l)
                return (0, r.jsx)("ol", {
                    className: o()(sY.x7, sY.jH),
                    "aria-busy": !0,
                    children: (0, r.jsx)("li", { className: sY.Ub, children: (0, r.jsx)(f.y, {}) }),
                });
            let e = "unavailable" === l ? en.default.Td4Sf4 : en.default.V1QiNz;
            return (0, r.jsx)("ol", {
                className: sY.x7,
                children: (0, r.jsx)(s3, {
                    role: "assistant",
                    children: (0, r.jsx)(sq, { content: el.intl.string(e) }),
                }),
            });
        }
        return (0, r.jsx)(sJ.Provider, {
            value: U,
            children: (0, r.jsxs)("ol", {
                ref: C,
                className: sY.x7,
                children: [
                    P.slice(D.start, D.end).map((e) => {
                        let n = e.message;
                        if ("closing" !== e.kind)
                            return (0, r.jsx)(
                                s0,
                                {
                                    row: e,
                                    projectId: t,
                                    highlighted: "user" === e.kind && S === n.id,
                                    currentUserId: "user" === e.kind ? T : void 0,
                                },
                                e.key,
                            );
                        let l = n === X;
                        return (0, r.jsx)(
                            s0,
                            {
                                row: e,
                                projectId: t,
                                highlighted: !1,
                                replyTo: null != n.in_reply_to ? ea.get(n.in_reply_to) : void 0,
                                onJumpTo: K,
                                planVersion: ee.get(n.render_id),
                                pickedIdeaIds: et.get(n.render_id),
                                secretRequestAwaiting: l ? er : void 0,
                                secretRequestStatus: es.get(n.render_id),
                                settingsFloating: n.id === m,
                                isNewest: l,
                                onPickIdea: a,
                                onApprovePlan: n.render_id === Z ? c : void 0,
                                onRestoreVersion: g,
                            },
                            e.key,
                        );
                    }),
                    null != er && W
                        ? (0, r.jsx)(s3, {
                              role: "assistant",
                              continuation: !0,
                              children: (0, r.jsx)(sq, {
                                  groupStart: !1,
                                  content: "",
                                  accessories: (0, r.jsx)(j.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: el.intl.string(en.default.YR8A2v),
                                  }),
                              }),
                          })
                        : null,
                    W
                        ? (0, r.jsx)("li", {
                              role: "none",
                              className: sY.q3,
                              children: (0, r.jsx)(sl, { reminder: Y, renderReminder: Q }),
                          })
                        : null,
                ],
            }),
        });
    }),
    s0 = i.memo(
        function (e) {
            let { row: t, projectId: n, highlighted: l, currentUserId: a, ...i } = e,
                s = t.message;
            switch (t.kind) {
                case "user": {
                    let e = null != s.attachments && s.attachments.length > 0 ? s.attachments : null;
                    return (0, r.jsx)(s3, {
                        rowKey: t.key,
                        role: "user",
                        anchorId: s.id,
                        highlighted: l,
                        continuation: !t.groupStart,
                        children: (0, r.jsx)(sF, {
                            groupStart: t.groupStart,
                            content: s.content,
                            createdAt: s.created_at,
                            userId: s.user_id,
                            accessories: null != e ? (0, r.jsx)(ix.A, { projectId: n, attachments: e }) : void 0,
                            onQueuedAction: (function (e, t, n) {
                                if (
                                    "user" === t.role &&
                                    "queued" === t.disposition &&
                                    null != t.user_id &&
                                    t.user_id === n
                                )
                                    return (n) => (0, J.tp)(e, t.id, n);
                            })(n, s, a),
                        }),
                    });
                }
                case "prose":
                    return (0, r.jsx)(s3, {
                        rowKey: t.key,
                        role: "assistant",
                        continuation: !t.groupStart,
                        children: (0, r.jsx)(sq, {
                            groupStart: t.groupStart,
                            content: t.content,
                            streaming: t.streaming,
                            createdAt: s.created_at,
                            accessories:
                                t.hostsAttachments && null != s.attachments
                                    ? (0, r.jsx)(ix.A, { projectId: n, attachments: s.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, r.jsx)(s3, {
                        rowKey: t.key,
                        role: "assistant",
                        children: (0, r.jsx)(iy, {
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
                    return (0, r.jsx)(s3, {
                        rowKey: t.key,
                        role: "assistant",
                        continuation: !t.groupStart,
                        children: (0, r.jsx)(sq, {
                            groupStart: t.groupStart,
                            content: null == s.publishNotice ? s.content : "",
                            createdAt: s.created_at,
                            accessories:
                                null == s.publishNotice
                                    ? void 0
                                    : (0, r.jsx)(i5, { projectId: n, notice: s.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, r.jsx)(s3, {
                        rowKey: t.key,
                        role: "assistant",
                        continuation: !t.groupStart,
                        children: (0, r.jsx)(sq, {
                            groupStart: t.groupStart,
                            content: null == s.projectEvent ? s.content : "",
                            createdAt: s.created_at,
                            accessories:
                                null == s.projectEvent
                                    ? void 0
                                    : (0, r.jsx)(sV, { projectId: n, event: s.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, r.jsx)(s3, {
                        rowKey: t.key,
                        role: "assistant",
                        children:
                            null == s.contextSwitch
                                ? null
                                : (0, r.jsx)(s7, { projectId: n, contextSwitch: s.contextSwitch }),
                    });
                case "interrupted":
                    return (0, r.jsx)(s3, {
                        rowKey: t.key,
                        role: "assistant",
                        children: (0, r.jsx)(iy, { projectId: n, interrupted: !0, steps: s.steps }),
                    });
                case "legacyTodos":
                    return (0, r.jsx)(s3, {
                        rowKey: t.key,
                        role: "assistant",
                        children: (0, r.jsx)(iy, {
                            projectId: n,
                            steps: s1,
                            active: !1,
                            checklistSuperseded: t.checklistSuperseded,
                            todos: s.todos,
                            provisionalTodo: s.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, r.jsx)(s2, { row: t, projectId: n, ...i });
            }
        },
        function (e, t) {
            return (
                (0, iX.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, iX.A)(e.row, t.row, ["message"]) &&
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
                        case "contextBoundary":
                            return t.contextSwitch === n.contextSwitch;
                        default:
                            return !1;
                    }
                })(e.row.kind, e.row.message, t.row.message) &&
                (0, iX.A)(e.replyTo, t.replyTo) &&
                (0, iX.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    s1 = [];
function s2(e) {
    let t,
        {
            row: n,
            projectId: l,
            replyTo: a,
            onJumpTo: i,
            planVersion: s,
            pickedIdeaIds: o,
            secretRequestAwaiting: u,
            secretRequestStatus: c,
            settingsFloating: m = !1,
            isNewest: f = !1,
            onPickIdea: h,
            onApprovePlan: g,
            onRestoreVersion: x,
        } = e,
        p = n.message,
        v =
            null != x
                ? "assistant" !== p.role || null == p.sourceSha
                    ? null
                    : {
                          sha: p.sourceSha,
                          authorName: "",
                          authorEmail: "",
                          authoredAt: new Date(p.created_at).toISOString(),
                          subject: p.content,
                      }
                : null,
        j = null != v && null != x ? () => sQ(v, x) : void 0,
        b =
            ((t =
                eG() && "assistant" === p.role && (0, eh.BL)(p)
                    ? (p.turn_id ?? p.steps.find((e) => null != e.turn_id)?.turn_id ?? p.id.replace(/^turn:/, ""))
                    : null),
            (0, d.bG)(
                [iZ.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : iZ.A.getTimingTraces(l).findLast((e) => {
                                  let { name: n, spans: l } = e;
                                  return "turn" === n && l.find((e) => null == e.parent)?.attrs?.turn_id === t;
                              });
                    return null == e || e.live ? null : e.id;
                },
                [l, t],
            )),
        y =
            null != b
                ? () =>
                      (function (e, t) {
                          for (let n of ((eF = { projectId: e, traceId: t }), [...eO])) n(e);
                      })(l, b)
                : void 0,
        k = p.in_reply_to,
        w = p.restoreProposal;
    return (0, r.jsx)(s3, {
        rowKey: n.key,
        role: "assistant",
        continuation: !n.groupStart,
        onContextMenu:
            null != j || null != y
                ? (e) => {
                      (0, $.jA)(e, (e) => (0, r.jsx)(sK, { ...e, onRestoreVersion: j, onViewTrace: y }));
                  }
                : void 0,
        children: (0, r.jsx)(sq, {
            groupStart: n.groupStart,
            buttons: (0, r.jsx)(sM, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: j,
                onViewTrace: y,
            }),
            content: n.content,
            createdAt: p.created_at,
            replyTo: a,
            onJumpToReplied: null != k && null != i ? () => i(k) : void 0,
            accessories: (0, r.jsx)(ik, {
                projectId: l,
                steps: p.steps,
                content: "",
                proposal: p.proposal,
                planVersion: s,
                interrupted: !0 === p.interrupted,
                hoistedProse: !0,
                hoistedAttachmentsHost: n.attachmentsHost,
                sideReply: n.sideReply,
                sideReplyAcknowledges: p.acknowledges,
                active: n.active,
                ideas: n.active ? void 0 : p.ideas,
                pickedIdeaIds: null == p.ideas ? void 0 : o,
                attachments: p.attachments,
                secretRequest: n.active ? void 0 : p.secretRequest,
                secretRequestId: p.render_id,
                secretRequestAwaiting: u,
                secretRequestStatus: c,
                settingsRequest: n.active || m ? void 0 : p.settingsRequest,
                publishCta: n.active ? null : p.publishCta,
                onPickIdea: h,
                onApprovePlan: g,
                restoreProposal: w,
                onRestoreProposal:
                    null != w && null != x && f
                        ? () =>
                              sQ(
                                  {
                                      sha: w.sha,
                                      authorName: "",
                                      authorEmail: "",
                                      authoredAt: w.authored_at,
                                      subject: w.subject,
                                  },
                                  x,
                              )
                        : void 0,
            }),
        }),
    });
}
function s3(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: a,
            highlighted: s = !1,
            continuation: u = !1,
            onContextMenu: c,
        } = e,
        d = i.useContext(sJ),
        [m, f] = i.useState(() => iM.Ay.useReducedMotion || (null != l && d?.current.has(l) === !0)),
        h = i.useCallback((e) => {
            e.target === e.currentTarget && f(!0);
        }, []);
    return (0, r.jsx)("li", {
        onContextMenu: c,
        onAnimationEnd: m ? void 0 : h,
        "data-conjure-entrance": !0,
        "data-role": t,
        "data-conjure-message": a,
        "data-conjure-row-key": l,
        className: o()(sY.xk, { [sY.g5]: m, [sY.Qo]: s, [sY.q3]: u }),
        children: n,
    });
}
function s7(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = i.useId(),
        a = (0, iQ.L)(t, n);
    if (null == a) return null;
    let { action: s } = a;
    return (0, r.jsxs)("div", {
        className: sY.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, r.jsxs)("div", {
                className: sY.Sp,
                children: [
                    (0, r.jsx)("span", { className: sY.ZF }),
                    (0, r.jsxs)("span", {
                        className: sY.g8,
                        children: [
                            (0, r.jsx)(iJ.g, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, r.jsx)(j.E, {
                                id: l,
                                tag: "span",
                                variant: "text-xs/semibold",
                                color: "text-default",
                                children: a.label,
                            }),
                        ],
                    }),
                    (0, r.jsx)("span", { className: sY.ZF }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: sY.nM,
                role: "status",
                children: [
                    (0, r.jsxs)(j.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: [
                            a.body,
                            null != s
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          " ",
                                          (0, r.jsx)(ld.Q, {
                                              text: s.text,
                                              textVariant: "text-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, e5.openModalLazy)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, r.jsx)(iY.u, {
                                                                    ...t,
                                                                    title: el.intl.string(en.default["i+xjZM"]),
                                                                    subtitle: el.intl.string(en.default.fMBZmD),
                                                                    confirmText: el.intl.string(en.default.i5f3Uo),
                                                                    onConfirm: e,
                                                                }),
                                                            ),
                                                        ))
                                                      : s.onPress();
                                              },
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    }),
                    null != a.note
                        ? (0, r.jsx)(j.E, { variant: "text-xs/normal", color: "text-muted", children: a.note })
                        : null,
                ],
            }),
        ],
    });
}
var s4 = n(731084),
    s6 = n(823376),
    s5 = n(187447);
function s8(e) {
    let { activity: t, id: n } = e,
        l = (0, i1.A)(),
        { text: a, revealing: s } = sk(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        u = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            u.current?.scrollToBottom();
        }, [a]),
        (0, r.jsx)("div", {
            id: n,
            role: "tooltip",
            className: s5.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, r.jsx)(nW.Ch, {
                ref: u,
                className: s5.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, r.jsx)("div", {
                    className: o()(ij.PT, s5.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: aj.A.parse(a, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var s9 = n(53659);
function oe(e) {
    let {
            activity: t,
            compacting: n = !1,
            saving: l = !1,
            restoring: a = !1,
            recalling: s = !1,
            controlling: u = !1,
            publishPending: c = !1,
            spoken: d,
            onSpokenChange: m,
        } = e,
        f = i.useRef(null),
        h = i.useId(),
        [g, x] = i.useState(null),
        p = (0, s4.xu)({
            activity: t,
            compacting: n,
            saving: l,
            restoring: a,
            recalling: s,
            controlling: u,
            publishPending: c,
        }),
        v = el.intl.string(p),
        y = p === s4.kx["0"],
        [k, w] = i.useState(d ?? v),
        A = (0, i1.A)();
    (l || (0, s4.E4)(v, k) || (!A && !y)) && k !== v && w(v);
    let N = i.useRef(v);
    (i.useEffect(() => {
        N.current = v;
    }, [v]),
        i.useEffect(() => {
            m?.(k);
        }, [k, m]));
    let C = i.useRef(null),
        S = i.useRef(k);
    i.useEffect(() => {
        S.current = k;
    }, [k]);
    let E = i.useRef(y),
        I = i.useRef(0);
    (i.useEffect(() => {
        ((E.current = y), !y && (0, s4.E8)(S.current) && w(N.current));
    }, [y]),
        i.useEffect(() => {
            if (!A) return;
            let e = 0,
                t = 0;
            function n() {
                E.current
                    ? ((I.current = (0, s4.E8)(S.current) ? I.current + 1 : 0), w((0, s4.Ov)(I.current)))
                    : N.current !== S.current
                      ? w(N.current)
                      : C.current?.play();
            }
            return (
                (e = window.setTimeout(() => {
                    (n(), (t = window.setInterval(n, 2400)));
                }, s4.FZ)),
                () => {
                    (window.clearTimeout(e), window.clearInterval(t));
                }
            );
        }, [A]));
    let M = null != t && "" !== t.text,
        _ = t?.session ?? null,
        T = M && null != _ && g === _,
        P = i.useCallback(() => {
            M && null != _ && x((e) => (e === _ ? null : _));
        }, [M, _]),
        R = i.useCallback(() => x(null), []);
    return (0, r.jsx)(K.Y, {
        targetElementRef: f,
        position: "top",
        align: "left",
        shouldShow: T,
        onRequestClose: R,
        renderPopout: () => (0, r.jsx)(s8, { id: h, activity: t }),
        children: () =>
            (0, r.jsxs)(b.D, {
                innerRef: f,
                className: o()(s9.hF, M && s9.Xd),
                "aria-label": el.intl.string(a ? en.default.qqlUiW : y ? s4.kx["0"] : en.default["Uuj/gh"]),
                "aria-expanded": T,
                "aria-describedby": T ? h : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": el.intl.string(p),
                onClick: P,
                children: [
                    (0, r.jsx)("span", {
                        className: s9.bl,
                        children: (0, r.jsx)(s6.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, r.jsx)("span", {
                        className: s9.xu,
                        "aria-hidden": !!u || !!y || void 0,
                        children: A
                            ? (0, r.jsx)(eC.o, {
                                  ref: C,
                                  text: k,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  duration: s4.vg,
                                  delay: null,
                                  className: s9.yE,
                              })
                            : (0, r.jsx)(j.E, {
                                  tag: "span",
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  className: s9.yE,
                                  children: k,
                              }),
                    }),
                ],
            }),
    });
}
var ot = n(85428),
    on = n(436804);
function ol(e) {
    return e.toLocaleString();
}
function oa(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, r.jsxs)("div", {
        className: on.Q$,
        children: [
            (0, r.jsxs)("div", {
                className: on.mf,
                children: [
                    (0, r.jsx)(j.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, r.jsxs)(j.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [ol((0, V.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, r.jsxs)(j.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    ol(n.input_tokens),
                    " in \xb7 ",
                    ol(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${ol(n.cache_creation_input_tokens)} cache write \xb7 ${ol(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function or(e) {
    let { project: t } = e,
        n = (0, V.wU)(t.compaction),
        l = (0, V.wU)(t.classifier),
        a = (0, V.wV)(t.orchestrator, t.codegen),
        i = (0, V.wV)(a, n);
    return (0, r.jsxs)("div", {
        className: on.si,
        role: "dialog",
        "aria-label": el.intl.string(en.default.p5EGzq),
        children: [
            (0, r.jsx)("div", {
                className: on.Q$,
                children: (0, r.jsxs)("div", {
                    className: on.mf,
                    children: [
                        (0, r.jsxs)(j.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [ol((0, V.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, r.jsxs)(j.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(oa, { label: el.intl.string(en.default["9Sj3SX"]), usage: a }),
            (0, r.jsx)(oa, { label: el.intl.string(en.default.ANCEo3), usage: n }),
            (0, r.jsx)(oa, { label: el.intl.string(en.default.ugL6D4), usage: l, cached: !1 }),
            (0, r.jsxs)("div", {
                className: on.mf,
                children: [
                    (0, r.jsx)(j.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: el.intl.string(en.default["8OUg09"]),
                    }),
                    (0, r.jsx)(j.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, V.sj)(i) ? "\u2014" : `${Math.round(100 * (0, V.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function oi(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, r.jsx)(K.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, r.jsx)(or, { project: t }),
        children: (e) =>
            (0, r.jsx)(b.D, {
                innerRef: n,
                className: on.Y$,
                "aria-label": el.intl.string(en.default.Z96gxQ),
                ...e,
                children: (0, r.jsx)(a1.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var os = n(997421);
function oo(e) {
    let {
            projectId: t,
            thinking: n,
            turnStartedAt: l,
            restoring: a = !1,
            recalling: s = !1,
            thinkingActivity: o,
            compacting: u,
            saving: c,
            projectUsage: m,
            connState: f,
        } = e,
        h = (0, th.Zv)(t),
        g = (0, d.bG)([ej.Ay], () => ej.Ay.getPublishStatus(t)?.publishing === !0, [t]),
        [x, p] = i.useState(null),
        v = i.useCallback((e) => p((0, s4.E8)(e) || e === el.intl.string(en.default.mKK6wB) ? null : e), []),
        b = null == m ? null : (0, s4.uc)(m),
        y = n && null != l;
    return (0, r.jsxs)("div", {
        className: os.jf,
        children: [
            (0, r.jsxs)("div", {
                className: os.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    n || a || s || h || !0 === c
                        ? (0, r.jsx)(oe, {
                              activity: o,
                              compacting: u,
                              saving: c,
                              restoring: a,
                              recalling: s,
                              controlling: h,
                              publishPending: g,
                              spoken: x,
                              onSpokenChange: v,
                          })
                        : null,
                    y ? (0, r.jsx)(ot.A, { startedAt: l }) : null,
                ],
            }),
            y ? (0, r.jsx)(ot.L, { startedAt: l }) : null,
            null == m || null == b
                ? null
                : (0, r.jsxs)("span", {
                      className: os.BP,
                      children: [
                          (0, r.jsx)(j.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": b.aria,
                              children: b.text,
                          }),
                          (0, r.jsx)(oi, { project: m }),
                      ],
                  }),
            "open" === f
                ? null
                : (0, r.jsx)(j.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === f ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": el.intl.formatToPlainString(en.default["tCo+ZM"], { status: (0, s4.Db)(f) }),
                      "data-conjure-conn": !0,
                      "data-state": f,
                      className: os.XF,
                      children: (0, s4.Db)(f),
                  }),
        ],
    });
}
let ou = ["wheel", "touchstart", "pointerdown", "keydown"];
var oc = n(698638),
    od = n(608711);
let om = [el.intl.string(en.default["9w+Chc"]), el.intl.string(en.default.WAvmdq), el.intl.string(en.default.SKsrzl)];
function of(e) {
    var t;
    let { projectId: n, restoreState: l, onRestoreVersion: a, onImportProject: s } = e,
        o = (0, d.bG)([eh.Ay], () => eh.Ay.getMessages(n), [n]),
        u = (0, d.bG)([J.Ay], () => J.Ay.getConnState(n), [n]),
        c = (0, d.bG)([J.Ay], () => J.Ay.isChatStopped(n), [n]),
        m = (0, d.bG)([eh.Ay], () => eh.Ay.getProjectUsage(n), [n]),
        f = (0, d.bG)([eh.Ay], () => eh.Ay.getThinkingActivity(n), [n]),
        h = (0, d.bG)([eh.Ay], () => eh.Ay.isCompacting(n), [n]),
        g = (0, d.bG)([eh.Ay], () => eh.Ay.isSaving(n), [n]),
        x = (0, d.bG)([J.Ay], () => J.Ay.getModelSettings(n), [n]),
        p = i.useRef(null),
        v = i.useRef(null),
        b = i.useRef(null),
        {
            stickToBottomRef: k,
            pinned: A,
            atBottom: N,
            unpin: C,
            releasePinHold: S,
            showsLatest: E,
            showsLatestRef: I,
            handleShowsLatestChange: M,
            updatePin: _,
        } = (function (e) {
            let t = i.useRef(!0),
                [n, l] = i.useState(!0),
                [a, r] = i.useState(!0),
                s = i.useRef(!1),
                o = i.useCallback(() => {
                    ((s.current = !0), (t.current = !1), l(!1));
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
                    for (let e of ou) t.addEventListener(e, u, { passive: !0 });
                    return () => {
                        for (let e of ou) t.removeEventListener(e, u);
                    };
                }
            }, [e, u]);
            let h = i.useCallback(() => {
                let n = e.current;
                if (null == n) return;
                let a = n.getDistanceFromBottom(),
                    i = !s.current && a < 32 && m.current;
                t.current = i;
                let o = a > 1 || !m.current;
                (r((e) => (!o === e ? e : !o)), l((e) => (e === i ? e : i)));
            }, [e]);
            return {
                stickToBottomRef: t,
                pinned: n,
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
                    n = e.querySelectorAll('[data-conjure-turn-status="true"]'),
                    l = t ?? n[n.length - 1];
                if (null == l) return;
                let a = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
                l.scrollIntoView({ block: "center", behavior: a ? "auto" : "smooth" });
            }
            (S(), I.current ? e() : b.current?.showLatest(e));
        }, [S, I]),
        R = i.useCallback(() => {
            (_(), b.current?.handleScroll());
        }, [_]);
    (i.useLayoutEffect(() => {
        let e = p.current;
        if (null == e) return;
        let t = v.current?.getScrollerNode(),
            n = e.getBoundingClientRect().width,
            l = t?.getBoundingClientRect().height,
            a = new ResizeObserver((t) => {
                let a = !1;
                for (let r of t)
                    if (r.target === e) {
                        let e = r.contentRect.width;
                        if (e === n) continue;
                        ((n = e), (a = !0));
                    } else {
                        let e = r.contentRect.height;
                        if (e === l) continue;
                        ((l = e), (a = !0));
                    }
                a && (k.current ? v.current?.scrollToBottom() : b.current?.recordAnchor());
            });
        return (a.observe(e), null != t && a.observe(t), () => a.disconnect());
    }, [k]),
        i.useEffect(() => {
            (0, J.Hc)(n);
        }, [n]),
        (0, ao.E1)(n));
    let L = e6(n),
        $ = (function (e) {
            let t = (0, ni.Ay)(e),
                n = t?.guildId ?? null,
                l = (0, d.bG)([B.A], () => (null == n ? null : (B.A.getGuild(n)?.name ?? null))),
                [a, r] = i.useState(null),
                s = t?.missingSurface ?? null;
            return null == s || a === e
                ? null
                : {
                      message: el.intl.format("channel" === s ? en.default["1cm4fj"] : en.default.Lm7IRC, {
                          server: l ?? "",
                      }),
                      onDismiss: () => r(e),
                  };
        })(n),
        D = i.useCallback(
            (e, t) => {
                (0, J.dv)(n, e, t);
            },
            [n],
        ),
        O = i.useCallback(
            (e, t) => {
                0 === L.annotations.length
                    ? D(e, t)
                    : (D(
                          (function (e) {
                              let { annotations: t, metaComment: n, context: l } = e,
                                  a = t.filter((e) => eB(e.comment)),
                                  r = [];
                              if (
                                  (r.push(
                                      `My design feedback: ${1 === a.length ? "1 comment" : `${a.length} comments`} on the app.`,
                                  ),
                                  null != l)
                              ) {
                                  let e = l.title.trim(),
                                      t = "" !== e ? `${e} (${l.url})` : l.url;
                                  (r.push(`Page: ${t}, viewport ${l.viewport.width}x${l.viewport.height}.`),
                                      r.push(
                                          "Element coordinates below are viewport coordinates in that frame. The refs come from one snapshot taken when this feedback was collected, so re-snapshot before acting on them.",
                                      ));
                              }
                              a.forEach((e, t) => {
                                  let n;
                                  (r.push(""),
                                      r.push(`${t + 1}. ${eK(e.target)}`),
                                      r.push(
                                          `   Feedback: ${(n = e.comment.trim()).length <= 1e3 ? n : `${n.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let i = n.trim();
                              return ("" !== i && (r.push(""), r.push(`Note for the whole batch: ${i}`)), r.join("\n"));
                          })({ annotations: L.annotations, metaComment: e, context: L.context }),
                          t,
                      ),
                      e2(n));
            },
            [L, D, n],
        ),
        F = i.useCallback(() => (0, J.fu)(n), [n]),
        z = i.useCallback((e) => l0(n, e.implementation_prompt), [n]),
        [q, G] = (function (e) {
            let [t, n] = i.useState(() => ap(e)),
                [l, a] = i.useState(e),
                r = l !== e,
                s = r ? ap(e) : t;
            return (r && (a(e), n(s)), [s, n]);
        })(n),
        U = i.useCallback(() => D(el.intl.string(en.default["t5CN3+"])), [D]),
        H = i.useCallback((e, t, l) => l0(n, e, { clarificationAnswers: t, attachments: l }), [n]),
        V = i.useCallback((e) => (0, J.XZ)(n, e), [n]),
        K = i.useCallback((e) => (0, J.vX)(n, e), [n]),
        W = i.useCallback((e) => iD(n, "chat", Array.from(e), K), [n, K]),
        X = i.useCallback(() => l0(n, el.intl.string(en.default.Zc7gML)), [n]),
        Y = l?.status === "restoring",
        Q = "open" === u && !c && !Y,
        Z = o[o.length - 1],
        ee = null != Z && "assistant" === Z.role && null != Z.proposal,
        [et, ea] = i.useState(null),
        er = Z?.clarification != null && Z.clarification.id !== et ? Z.clarification : null,
        ei = i.useCallback(() => {
            null != er && ea(er.id);
        }, [er]),
        es = (0, d.bG)([J.Ay], () => J.Ay.getSettings(n), [n]),
        [eo, eu] = i.useState(null),
        ec =
            null != Z &&
            "assistant" === Z.role &&
            null != Z.settingsRequest &&
            (0, eh.BL)(Z) &&
            Z.id !== eo &&
            ((t = Z.settingsRequest),
            null != es &&
                (t.keys ?? []).some((e) => {
                    let t = es.schema.find((t) => t.key === e);
                    if (null == t) return !1;
                    if ("secret" === t.type) return es.secrets.find((t) => t.name === e)?.set !== !0;
                    let n = es.values[e];
                    return null == n || "" === n;
                }))
                ? Z
                : null,
        ed = ec?.settingsRequest ?? null,
        em = i.useCallback(() => {
            null != ec && eu(ec.id);
        }, [ec]),
        ef = null != ed,
        [eg, ex] = i.useState(null),
        ep = er?.id ?? ec?.id;
    i.useLayoutEffect(() => {
        let e = v.current?.getScrollerNode(),
            t = eg?.firstElementChild;
        if (null == eg || null == e || !(0, tL.vq)(t, HTMLElement) || null == ep) return;
        function n() {
            k.current && v.current?.scrollToBottom();
        }
        let l = new ResizeObserver(() => {
            let l = e.getBoundingClientRect().bottom - eg.getBoundingClientRect().top - t.offsetTop;
            (e.style.setProperty("--custom-conjure-docked-card-inset", `${Math.max(0, Math.round(l))}px`), n());
        });
        return (
            l.observe(t),
            l.observe(e, { box: "border-box" }),
            () => {
                (l.disconnect(), e.style.removeProperty("--custom-conjure-docked-card-inset"), n());
            }
        );
    }, [eg, ep, v, k]);
    let ev = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: (0, d.bG)([eh.Ay], () => eh.Ay.hasLoadedHistory(n), [n]),
            historyUnavailable: (0, d.bG)([eh.Ay], () => eh.Ay.isHistoryUnavailable(n), [n]),
            connState: u,
        }),
        ej = "loading" === ev && 0 === o.length,
        eb = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < n.length; t++) e = (31 * e + n.charCodeAt(t)) % 0x7fffffff;
            return om[e % om.length];
        }, [n]),
        ey = ee ? el.intl.string(en.default.Zc7gML) : "greeting" === ev && 0 === o.length ? eb : null,
        ek = i.useMemo(() => {
            for (let e = o.length - 1; e >= 0; e--) {
                let t = o[e];
                if ("assistant" === t.role && !(0, eh.BL)(t)) return t;
            }
        }, [o]),
        ew = null != ek,
        eA = null != ek ? (0, as.S)(ek) : void 0,
        eN = ee && Q ? X : void 0,
        eC = i.useCallback(() => l0(n, el.intl.string(en.default.EMgIuY)), [n]),
        [eS, eE] = i.useState(null),
        [eI, eM] = i.useState(ew);
    (eI !== ew && (eM(ew), ew || eE(null)),
        i.useEffect(() => {
            if (!ew) return;
            let e = v.current?.getScrollerNode(),
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
    let e_ = E ? eS : "bottom",
        eT = i.useMemo(() => (null != ek ? (0, nZ.b9)(ek.steps) : ""), [ek]),
        eP = i.useMemo(() => (null != ek ? ((0, nJ.lt)(ek.steps) ?? ek.todos) : void 0), [ek]),
        eR = ek?.provisionalTodo,
        eL = null != ek && nQ(ek),
        e$ = i.useMemo(() => {
            var e;
            return null != ek ? ((e = ek.steps), ib((0, nJ.Jf)(e, !0).tasks)) : void 0;
        }, [ek]);
    return (0, r.jsxs)("section", {
        ref: p,
        "data-conjure-chat": !0,
        className: od.TE,
        children: [
            Q
                ? (0, r.jsx)(nY.A, {
                      title: el.intl.string(en.default.gy7byi),
                      description: el.intl.string(en.default["dkv/WO"]),
                      icons: oc.ir,
                      onDrop: W,
                  })
                : null,
            (0, r.jsx)(ls, {
                onJumpToActivity: T,
                line: eT,
                placement: ew && "top" === e_ ? "top" : null,
                todos: eP,
                todosLive: eL,
                provisionalTodo: eR,
                agents: e$,
            }),
            (0, r.jsxs)("div", {
                className: od.JX,
                children: [
                    (0, r.jsx)(nW.Ch, {
                        ref: v,
                        onScroll: R,
                        scrollbarGutter: ej ? "both-edges" : "stable",
                        className: [od.N$, N ? null : od.hB, ef ? od.J9 : null].filter(Boolean).join(" "),
                        children: (0, r.jsx)(sZ, {
                            projectId: n,
                            messages: o,
                            emptyState: ev,
                            floatingSettingsMessageId: ec?.id,
                            liveClarificationId: er?.id,
                            onPickIdea: Q ? z : void 0,
                            onAskForIdeas: Q ? U : void 0,
                            draftHasText: q,
                            onApprovePlan: Q ? eC : void 0,
                            onRestoreVersion: Y || ew ? void 0 : a,
                            scrollerRef: v,
                            stickToBottomRef: k,
                            pinned: A,
                            onUnpin: C,
                            handleRef: b,
                            onShowsLatestChange: M,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: od.NJ,
                        children: (0, r.jsx)(oo, {
                            projectId: n,
                            thinking: ew,
                            turnStartedAt: eA,
                            restoring: Y,
                            recalling: ej,
                            thinkingActivity: f,
                            compacting: h,
                            saving: g,
                            projectUsage: m,
                            connState: u,
                        }),
                    }),
                    null == er
                        ? null
                        : (0, r.jsx)("div", {
                              ref: ex,
                              className: ef ? `${od.B5} ${od.J9}` : od.B5,
                              children: (0, r.jsx)(
                                  al,
                                  { projectId: n, clarification: er, onSubmit: Q ? H : void 0, onDismiss: ei },
                                  er.id,
                              ),
                          }),
                    null == ed
                        ? null
                        : (0, r.jsx)("div", {
                              ref: null == er ? ex : void 0,
                              className: od.B5,
                              children: (0, r.jsx)(ai, { projectId: n, request: ed, onDismiss: em }, ec?.id),
                          }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: od.Jx,
                children: [
                    (0, r.jsx)(ls, {
                        onJumpToActivity: T,
                        line: eT,
                        placement: ew && "bottom" === e_ ? "bottom" : null,
                        todos: eP,
                        todosLive: eL,
                        provisionalTodo: eR,
                        agents: e$,
                    }),
                    0 === L.annotations.length
                        ? null
                        : (0, r.jsxs)("div", {
                              className: od.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, r.jsx)(j.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: el.intl.formatToPlainString(en.default["7b49dS"], {
                                          count: L.annotations.length,
                                      }),
                                  }),
                                  (0, r.jsx)(j.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: el.intl.string(en.default["5zG+CR"]),
                                  }),
                                  (0, r.jsx)(w.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: el.intl.string(en.default["/zOv9+"]),
                                      onClick: () => e2(n),
                                  }),
                              ],
                          }),
                    null == $
                        ? null
                        : (0, r.jsxs)("div", {
                              className: od.Db,
                              children: [
                                  (0, r.jsx)(nX.w, { type: "warning", role: "status", message: $.message }),
                                  (0, r.jsx)("div", {
                                      className: od.jU,
                                      children: (0, r.jsx)(y.m, {
                                          text: el.intl.string(el.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, r.jsx)(t8.K, {
                                              "aria-label": el.intl.string(el.t.WAI6xu),
                                              icon: P.P,
                                              variant: "color-mix",
                                              size: "md",
                                              onClick: $.onDismiss,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                    (0, r.jsx)(iH, {
                        projectId: n,
                        canSend: Q,
                        stopped: c,
                        running: ew,
                        restoring: Y,
                        onSend: O,
                        hasPendingContext: L.annotations.length > 0,
                        onInterrupt: Q ? F : void 0,
                        onUploadFile: K,
                        onImport: s,
                        onApprove: eN,
                        suggestion: ey,
                        questionOpen: null != er || null != ed,
                        modelSettings: x,
                        onModelSettingsChange: V,
                        onDraftHasTextChange: G,
                    }),
                ],
            }),
        ],
    });
}
var oh = n(761508),
    og = n(683438);
function ox(e, t) {
    return String(e).padStart(t, "0");
}
var op = n(667931);
let ov = {
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
    oj = { running: "Running", ok: "Done", error: "Failed" };
function ob(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function oy(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function ok(e) {
    return ob(Math.round(e));
}
function ow(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function oA(e) {
    return ok(e.count > 1 ? e.totalMs : e.end - e.start);
}
let oN = ["Arguments", "Result", "Usage", "Details"];
function oC(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function oS(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function oE(e) {
    let t = (0, op.bM)(e)?.end;
    return null != t ? ob(t) : (0, op.lp)(e) ? "interrupted" : "still running";
}
function oI(e) {
    return [
        (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
            if (e.length > 64) return null;
            let n = Date.parse(e);
            if (Number.isNaN(n)) return null;
            let l = new Date(n),
                a = `${ox(l.getHours(), 2)}:${ox(l.getMinutes(), 2)}:${ox(l.getSeconds(), 2)}`;
            return "millis" === t ? `${a}.${ox(l.getMilliseconds(), 3)}` : a;
        })(new Date(e.started_at).toISOString()) ?? "",
        ow(e.spans.length),
        (0, op.Sj)((0, op.bM)(e)?.attrs),
    ]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function oM(e) {
    let t = (0, op.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let a of e.spans) {
        let { service: e, category: r } = (0, op.N5)(a);
        (n.set(r, (n.get(r) ?? 0) + (t.get(a.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += o_(a, "in")),
                (l.output += o_(a, "out")),
                (l.cacheRead += o_(a, "cache_read")),
                (l.cacheWrite += o_(a, "cache_write")),
                (l.costUsd += o_(a, "cost_usd"))));
    }
    let a = op.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: a, busyMs: a.reduce((e, t) => e + t.ms, 0), model: l };
}
function o_(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var oT = n(738188),
    oP = n(430993),
    oR = n(364840),
    oL = n(224640),
    o$ = n(20742);
let oD = { collapsed: new Set(), revealed: new Set() };
var oO = n(872892);
let oF = {
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
function oz(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      ow(t.calls, "model call"),
                      `${oy(t.input)} in`,
                      `${oy(t.output)} out`,
                      `${oy(t.cacheRead)} cache read`,
                      `${oy(t.cacheWrite)} cache write`,
                      oS(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, r.jsxs)("div", {
        className: oO.M1,
        children: [
            (0, r.jsx)("div", {
                className: oO.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, r.jsx)(
                              "div",
                              {
                                  className: `${oO.DJ} ${oF[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, r.jsx)("div", {
                className: oO.o1,
                children: op.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${ok(n)}`;
                    return (0, r.jsxs)(
                        "span",
                        {
                            className: oO.fI,
                            children: [
                                (0, r.jsx)("span", { className: `${oO.nf} ${oF[e]}` }),
                                (0, r.jsx)(j.E, { variant: "text-xs/normal", color: "text-muted", children: ov[e] }),
                                null == l
                                    ? null
                                    : (0, r.jsx)(j.E, {
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
                : (0, r.jsx)(j.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      tabularNumbers: !0,
                      children: n,
                  }),
        ],
    });
}
function oq(e) {
    return `conjure-perf-trace-${e}`;
}
function oG(e) {
    let { start: t, end: n, extent: l, barClass: a, duration: i } = e,
        s = (t / l) * 100,
        o = ((n - t) / l) * 100;
    return (0, r.jsxs)("div", {
        className: oO.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(o) },
        children: [
            (0, r.jsx)("div", { className: a }),
            (0, r.jsx)(j.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${oO.p0} ${s + o > 85 ? oO.EU : oO.jh}`,
                children: i,
            }),
        ],
    });
}
function oU(e) {
    let { node: t, extent: n, collapsed: l, selected: a, onSelect: s, onToggle: o, onExpandSubtree: u } = e,
        c = t.children.length > 0,
        d = l ? tn._ : tG.a,
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
        id: oq(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": a,
        className: `${oO.$y} ${a ? oO.wQ : ""}`,
        onClick: m,
        children: [
            (0, r.jsxs)("div", {
                className: oO.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, r.jsx)(b.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: oO.ai,
                              onClick: f,
                              children: (0, r.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, r.jsx)("span", { className: oO.YJ }),
                    (0, r.jsx)(j.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: oO.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, r.jsx)("span", { className: `${oO.nf} ${oF[t.category]}` }),
                    (0, r.jsx)(j.E, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        className: oO.eu,
                        children: t.service,
                    }),
                    (0, r.jsx)(j.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: oO.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, r.jsx)(j.E, {
                              variant: "text-xs/semibold",
                              color: "text-default",
                              className: oO.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, r.jsx)(oT.WarningIcon, { size: "xs", color: "currentColor", className: oO.ik })
                        : null,
                ],
            }),
            (0, r.jsx)(oG, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${oO.M0} ${oO.Nh}`
                    : t.running
                      ? `${oO.M0} ${oO.rF}`
                      : `${oO.M0} ${oF[t.category]}`,
                duration: oA(t),
            }),
        ],
    });
}
function oB(e) {
    let { row: t, extent: n, selected: l, onReveal: a } = e;
    return (0, r.jsxs)(b.D, {
        tag: "div",
        role: "treeitem",
        id: oq(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${oO.$y} ${l ? oO.wQ : ""}`,
        onClick: () => a(t.parentKey),
        children: [
            (0, r.jsxs)("div", {
                className: oO.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, r.jsx)("span", {
                        className: oO.ai,
                        children: (0, r.jsx)(tn._, { size: "xs", color: "currentColor" }),
                    }),
                    (0, r.jsx)("span", { className: oO.U9 }),
                    (0, r.jsx)("span", { className: `${oO.nf} ${oO.dL}` }),
                    (0, r.jsx)(j.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: oO.MQ,
                        children: ow(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, r.jsx)(oG, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${oO.M0} ${oO.ab} ${oO.dL}`,
                duration: ok(t.totalMs),
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
              className: oO._0,
              children: [
                  (0, r.jsxs)("div", {
                      className: oO.TQ,
                      children: [
                          (0, r.jsx)("span", { className: `${oO.nf} ${oF[t.category]}` }),
                          (0, r.jsx)(j.E, { variant: "text-sm/semibold", color: "text-strong", children: t.service }),
                          (0, r.jsx)(j.E, { variant: "text-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [oC("Start", `+${ok(e.start)}`), oC("Duration", oA(e))];
                      e.count > 1
                          ? t.push(
                                oC("Calls", String(e.count)),
                                oC("Longest call", ok(e.maxMs)),
                                oC("Spread over", ok(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(oC("Self time", ok(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(oC("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(oC("Notes", l.join(", "))),
                          null != e.span.error && t.push(oC("Error", e.span.error)));
                      let a = new Map();
                      for (let [t, n] of Object.entries({
                          ...e.span.attrs,
                          ...(1 === e.count ? e.span.details : null),
                      })) {
                          var r, i;
                          let l =
                                  ((r = e),
                                  "args" === (i = t) || i.startsWith("arg ")
                                      ? "Arguments"
                                      : "result" === i || "result_chars" === i
                                        ? "Result"
                                        : "model" === r.service
                                          ? "Usage"
                                          : "Details"),
                              s = "cost_usd" === t ? oS(Number(n)) : String(n);
                          a.set(l, [...(a.get(l) ?? []), oC(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...oN.flatMap((e) => {
                              let t = a.get(e);
                              return null == t ? [] : [{ title: e, rows: t }];
                          }),
                      ];
                  })(t).map((e) => {
                      let { title: t, rows: n } = e;
                      return (0, r.jsxs)(
                          i.Fragment,
                          {
                              children: [
                                  null == t
                                      ? null
                                      : (0, r.jsx)(j.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-strong",
                                            className: oO.xd,
                                            children: t,
                                        }),
                                  n.map((e) => {
                                      let { label: t, value: n, block: l } = e;
                                      return (0, r.jsxs)(
                                          i.Fragment,
                                          {
                                              children: [
                                                  (0, r.jsx)(j.E, {
                                                      variant: "text-xs/semibold",
                                                      color: "text-muted",
                                                      children: t,
                                                  }),
                                                  l
                                                      ? (0, r.jsx)(j.E, {
                                                            variant: "code",
                                                            color: "text-default",
                                                            selectable: !0,
                                                            className: oO.vl,
                                                            children: n,
                                                        })
                                                      : (0, r.jsx)(j.E, {
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
function oV(e) {
    let { trace: t } = e,
        n = i.useMemo(() => oM(t), [t]);
    return (0, r.jsx)(oz, { stats: n });
}
function oK(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, op.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? oD : (0, op.hB)(t))),
                [a, r] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, op.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, op.x7)(t)), l((n) => (0, op._0)(n, t, e)));
            }, [t]);
            let o = i.useMemo(() => (null == t ? [] : (0, op.wu)(t, n)), [t, n]),
                u = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, op.IE)(t, e);
                        null != n && l((e) => (0, op.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, op.IE)(t, e);
                        null != n && l((e) => (0, op.H$)(e, n));
                    },
                    [t],
                ),
                m = i.useCallback(() => {
                    null != t && l((0, op.vH)(t));
                }, [t]),
                f = i.useCallback(() => {
                    null != t && l((0, op.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, op.hB)(t));
                }, [t]),
                g = o.find((e) => e.key === a);
            return {
                rows: o,
                collapsed: n.collapsed,
                selectedKey: a,
                selected: g?.kind === "node" ? g.node : null,
                toggle: u,
                reveal: c,
                expandSubtree: d,
                select: r,
                expandAll: m,
                collapseAll: f,
                reset: h,
            };
        })(t),
        { rows: l, collapsed: a, selected: s, selectedKey: o, select: u, toggle: c, reveal: d, expandSubtree: m } = n,
        f = (0, op.dj)(t),
        h = i.useMemo(() => (0, op.nF)(f), [f]),
        g = h.length > 1 ? ((h[1] - h[0]) / f) * 100 : 100,
        x = i.useCallback(
            (e) => {
                let t,
                    n = l.findIndex((e) => e.key === o),
                    r = l[n];
                if ("ArrowDown" === e.key) t = l[Math.min(l.length - 1, n + 1)];
                else if ("ArrowUp" === e.key) t = l[Math.max(0, n - 1)];
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
                    null != t && (u(t.key), document.getElementById(oq(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [a, m, d, l, u, o, c],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(oP.c, {
                children: [
                    (0, r.jsxs)("div", {
                        className: oO.z,
                        children: [
                            (0, r.jsx)(j.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: oE(t),
                            }),
                            (0, r.jsx)(j.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: oI(t),
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
                                      children: `${ow(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, r.jsx)(oV, { trace: t }),
                    (0, r.jsxs)("div", {
                        className: oO.KE,
                        children: [
                            (0, r.jsx)(w.$, { size: "sm", variant: "secondary", text: "Time sinks", onClick: n.reset }),
                            (0, r.jsx)(w.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Expand all",
                                onClick: n.expandAll,
                            }),
                            (0, r.jsx)(w.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Collapse all",
                                onClick: n.collapseAll,
                            }),
                            (0, r.jsx)(j.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: "Shift-click a span to expand everything under it.",
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        role: "tree",
                        tabIndex: 0,
                        "aria-label": "Spans",
                        "aria-activedescendant": null == o ? void 0 : oq(o),
                        className: oO.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(g) },
                        onKeyDown: x,
                        children: [
                            (0, r.jsxs)("div", {
                                className: oO.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: oO.So,
                                        children: (0, r.jsx)(j.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, r.jsx)("div", {
                                        className: oO.c1,
                                        children: h.map((e) =>
                                            (0, r.jsx)(
                                                j.E,
                                                {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${oO.io} ${(e / f) * 100 > 85 ? oO.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / f) * 100),
                                                    },
                                                    children: 0 === e ? "0" : ok(e),
                                                },
                                                e,
                                            ),
                                        ),
                                    }),
                                ],
                            }),
                            l.map((e) =>
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
                                    : (0, r.jsx)(oB, { row: e, extent: f, selected: e.key === o, onReveal: d }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(oR.j, { children: (0, r.jsx)(oH, { node: s }) }),
        ],
    });
}
function oW(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: a } = e,
        i = (0, d.bG)([iZ.A], () => iZ.A.getTimingTrace(l, a), [l, a]),
        s = i?.name ?? "Perf Trace";
    return (0, r.jsxs)(oL.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, r.jsx)(o$.rQ, { title: s }),
            null == i
                ? (0, r.jsx)(oP.c, {
                      children: (0, r.jsx)(j.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, r.jsx)(oK, { trace: i }),
        ],
    });
}
let oX = { running: oO.Vf, ok: oO.mo, error: oO.Sr };
function oY(e) {
    let { status: t } = e;
    return (0, r.jsx)("span", { className: `${oO.Om} ${oX[t]}`, role: "img", "aria-label": oj[t] });
}
function oJ(e, t) {
    (0, e5.openModal)((n) => (0, r.jsx)(oW, { ...n, projectId: e, traceId: t }));
}
function oQ(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        a = i.useCallback(() => oJ(t, n.id), [t, n.id]);
    return (0, r.jsxs)(b.D, {
        className: oO.nM,
        onClick: a,
        children: [
            (0, r.jsxs)("div", {
                className: oO.sU,
                children: [
                    (0, r.jsx)(oY, { status: (0, op.lQ)(n) }),
                    (0, r.jsx)(j.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        className: oO._k,
                        children: n.name,
                    }),
                    (0, r.jsx)(j.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: oE(n),
                    }),
                ],
            }),
            (0, r.jsx)(j.E, { variant: "text-xs/normal", color: "text-muted", tabularNumbers: !0, children: oI(n) }),
            null == l
                ? null
                : (0, r.jsx)(j.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function oZ(e) {
    let { projectId: t, traces: n } = e,
        l = i.useRef(null),
        a = i.useCallback(() => {
            et(
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
    return (0, r.jsx)(K.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: K.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, r.jsx)(W.W, {
                "data-menu-migrated": !0,
                navId: `conjure-traces-${t}`,
                "aria-label": "Trace actions",
                onClose: l,
                onSelect: l,
                children: (0, r.jsx)(X.rX, {
                    children: (0, r.jsx)(X.Dr, {
                        id: "export",
                        label: "Export as JSON",
                        disabled: 0 === n.length,
                        action: a,
                    }),
                }),
            });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, r.jsx)(t8.K, {
                ...e,
                buttonRef: l,
                icon: t9.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function o0(e) {
    let { projectId: t } = e,
        n = (0, d.yK)([iZ.A], () => iZ.A.getTimingTraces(t), [t]),
        [l, a] = i.useState(""),
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
                    let t = e.map(oM);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: op.BF.map((e) => ({
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
        ? (0, r.jsxs)("div", {
              className: oO.Ie,
              children: [
                  (0, r.jsx)(j.E, { variant: "text-sm/medium", color: "text-default", children: "No traces yet" }),
                  (0, r.jsx)(j.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: "Turns and project operations over 100ms show up here as they run.",
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: oO.nd,
              children: [
                  (0, r.jsxs)("div", {
                      className: oO.Ko,
                      children: [
                          (0, r.jsx)("div", {
                              className: oO.fH,
                              children: (0, r.jsx)(og.I, {
                                  query: l,
                                  onChange: a,
                                  onClear: () => a(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, r.jsx)(oZ, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, r.jsxs)(nW.Ch, {
                      className: oO.XG,
                      children: [
                          (0, r.jsx)(oz, { stats: u }),
                          0 === o.length
                              ? (0, r.jsx)(j.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, r.jsx)("ul", {
                                    className: oO.p_,
                                    "aria-label": "Traces",
                                    children: o.map((e) =>
                                        (0, r.jsx)(
                                            "li",
                                            { children: (0, r.jsx)(oQ, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function o1(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function o2(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function o3(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function o7(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function o4(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function o6(e) {
    return el.intl.string("preview" === e ? en.default["2yLYlG"] : en.default.eiAi57);
}
let o5 = ["all", "preview", "stable", "web"];
function o8(e) {
    switch (e.reason) {
        case "local":
            return el.intl.string(en.default.mUeKML);
        case "unconfigured":
            return el.intl.string(en.default.bGefb5);
        case "unauthorized":
            return el.intl.string(en.default.KLx6Bb);
        default:
            return null != e.detail
                ? el.intl.formatToPlainString(en.default.t09Q6q, { detail: e.detail })
                : el.intl.string(en.default["t+tG59"]);
    }
}
function o9(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : el.intl.formatToPlainString(en.default["XO/bN4"], {
              p50: o1(e.memory_p50_bytes ?? 0),
              p999: o1(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let ue = {
    db: () => en.default["7l+DFG"],
    db_preview: () => en.default.FAuffi,
    runtime: () => en.default["Gkl+ab"],
    runtime_preview: () => en.default.ynpJzv,
    bot: () => en.default["5/i0cj"],
    bot_preview: () => en.default.m2jsnw,
};
var ut = n(911608),
    un = n(177427);
function ul(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, r.jsxs)("div", {
        className: un.KE,
        children: [
            (0, r.jsx)("div", {
                className: un.IQ,
                children:
                    "loading" === n
                        ? (0, r.jsx)(f.y, { type: f.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, r.jsx)(j.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: el.intl.string(en.default.ZVByPX),
                            })
                          : null != t
                            ? (0, r.jsx)(j.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: el.intl.formatToPlainString(en.default.INVO50, { time: o7(t) }),
                              })
                            : null,
            }),
            (0, r.jsx)(w.$, { variant: "secondary", size: "sm", text: el.intl.string(en.default.oKEgiu), onClick: l }),
        ],
    });
}
function ua(e) {
    let { title: t, children: n } = e;
    return (0, r.jsxs)("section", {
        className: un.uW,
        "aria-label": t,
        children: [
            (0, r.jsx)(j.E, { variant: "text-xs/semibold", color: "text-muted", className: un.Gf, children: t }),
            n,
        ],
    });
}
function ur(e) {
    let { label: t, value: n, hint: l, critical: a = !1, icon: i, state: s } = e;
    return (0, r.jsxs)("div", {
        className: un.N8,
        children: [
            (0, r.jsxs)("div", {
                className: un.x7,
                children: [
                    (0, r.jsxs)("span", {
                        className: un.kS,
                        children: [i, (0, r.jsx)(j.E, { variant: "text-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, r.jsxs)("span", {
                        className: un.kS,
                        children: [
                            s,
                            (0, r.jsx)(j.E, {
                                variant: "text-sm/medium",
                                color: a ? "text-feedback-critical" : "text-default",
                                children: n,
                            }),
                        ],
                    }),
                ],
            }),
            null != l && (0, r.jsx)(j.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
        ],
    });
}
function ui(e) {
    let { label: t, used: n, max: l, formatValue: a } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, r.jsxs)("div", {
        className: un.N8,
        children: [
            (0, r.jsxs)("div", {
                className: un.x7,
                children: [
                    (0, r.jsx)(j.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, r.jsx)(j.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${a(n)} / ${a(l)}`,
                    }),
                ],
            }),
            (0, r.jsx)(ut.z, {
                value: 100 * i,
                valueLabel: `${a(n)} of ${a(l)}`,
                "aria-label": t,
                className: s ? un.dh : void 0,
            }),
        ],
    });
}
function us(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, r.jsx)(ur, {
            label: el.intl.string(en.default.SXP7pD),
            value: el.intl.string(en.default.E5hKVi),
            hint: o8(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, r.jsx)(ur, {
            label: el.intl.string(en.default.SXP7pD),
            value: "\u2014",
            hint: el.intl.string(en.default.AGvoMJ),
        });
    let l = o9(n);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ur, { label: el.intl.string(en.default["H/X+FI"]), value: o2(n.cpu_ms) }),
            null != l && (0, r.jsx)(ur, { label: el.intl.string(en.default.lmFmMO), value: l }),
        ],
    });
}
function uo(e) {
    let { analytics: t } = e,
        n = el.intl.string(en.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, r.jsx)(ua, {
            title: n,
            children: (0, r.jsx)(j.E, { variant: "text-sm/normal", color: "text-muted", children: o8(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? ue[t] : null) ? el.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, r.jsx)(ua, {
        title: n,
        children:
            0 === l.length
                ? (0, r.jsx)(j.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: el.intl.string(en.default.AGvoMJ),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, r.jsx)(
                          ur,
                          {
                              label: n,
                              value: el.intl.formatToPlainString(en.default["w/2voO"], { cpu: o2(t.cpu_ms) }),
                              hint: o9(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var uu = n(678708),
    uc = n(414499),
    ud = n(714800),
    um = n(81466),
    uf = n(424383),
    uh = n(816943),
    ug = n(268791),
    ux = n(514042),
    up = n(872351),
    uv = n(708988),
    uj = n(150934),
    ub = n(417270);
let uy = "Restart Agent",
    uk = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function uw(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function uA(e, t) {
    return { label: e, value: null != t && "" !== t ? o7(t) : "Unknown", icon: "calendar" };
}
function uN(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function uC(e, t, n, l) {
    let [a, r] = uk[n.status];
    return { label: e, value: `${uN(n.bytes)} of ${uN(n.max)} \xb7 ${a}`, hint: l, icon: t, state: r };
}
function uS(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = o7(e.at);
    return e.ok
        ? { label: "Last Save", value: `OK (${e.status ?? "saved"})`, hint: t, icon: "save", state: "ok" }
        : {
              label: "Last Save",
              value: "Failed",
              hint: null != e.error ? `${t} \xb7 ${e.error}` : t,
              icon: "save",
              state: "error",
          };
}
let uE = { main: "Main vs Remote", wip: "WIP vs Remote" };
function uI(e) {
    let t = `container ${uw(e.local)} \xb7 remote ${uw(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        a = { label: uE[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...a, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...a, value: `${o3(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...a, value: `${o3(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...a, value: `Diverged (${o3(n)} Ahead, ${o3(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...a, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...a, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...a, value: "Missing in Container", state: "warning" };
    }
}
let uM = ["main", "wip"];
var u_ = n(400154);
let uT = {
        checkout: uu.FolderIcon,
        edit: lu.PencilIcon,
        remote: uc.h,
        commits: ud.e,
        calendar: um.CalendarIcon,
        save: uf.L,
        objects: eu.R,
        download: uh.$,
        size: ug.$,
        file: ux.FileIcon,
    },
    uP = {
        ok: [rb.y, L.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [oT.WarningIcon, L.A.colors.ICON_FEEDBACK_WARNING],
        error: [iT.a, L.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [up.z, L.A.colors.ICON_MUTED],
        behind: [uv.M, L.A.colors.ICON_MUTED],
    };
function uR(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, d.bG)([iZ.A], () => iZ.A.getGitInfoState(t), [t]),
            load: i.useCallback(() => (0, J.DK)(t), [t]),
        },
        l = (function (e) {
            let { pending: t, error: n, info: l, observedAt: a } = e;
            if (t) return { line: "Reading the repository", critical: !1 };
            if (null != n) return { line: n, critical: !0 };
            if (null == a) return { line: "", critical: !1 };
            let r = [];
            if (null != l) {
                l.running
                    ? null != l.localError
                        ? r.push([`Workspace unreadable: ${l.localError}`, !0])
                        : null != l.localWarning && r.push(["Read stopped early; some rows were not read", !0])
                    : r.push(["Workspace not running", !1]);
                let { status: e, error: t } = l.remote;
                ("missing" === e && r.push(["Remote repository missing", !0]),
                    "error" === e && r.push([`Remote read failed: ${t ?? "unknown error"}`, !0]),
                    "disabled" === e && r.push(["Source repositories are off", !1]));
            }
            return {
                line: [
                    `Updated ${o7(a)}`,
                    ...r.map((e) => {
                        let [t] = e;
                        return t;
                    }),
                ].join(" \xb7 "),
                critical: r.some((e) => {
                    let [, t] = e;
                    return t;
                }),
            };
        })(n);
    return (0, r.jsxs)(ua, {
        title: "Git",
        children: [
            (0, r.jsx)("div", {
                className: u_.Lj,
                children:
                    "" !== l.line &&
                    (0, r.jsx)(j.E, {
                        variant: "text-xs/normal",
                        role: "status",
                        color: l.critical ? "text-feedback-critical" : "text-muted",
                        children: l.line,
                    }),
            }),
            null != n.info &&
                (function (e) {
                    var t;
                    let n;
                    if (!e.running || null != e.localError) return [uS(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            uS(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : o3(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let a = uM.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (a.length > 0
                        ? l.push(...a.map(uI))
                        : l.push(
                              { label: "Main", value: uw(e.heads.main), icon: "remote" },
                              { label: "WIP", value: uw(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? o3(e.commits) : "Unknown", icon: "commits" },
                            uA("Oldest Commit", e.oldest),
                            uA("Newest Commit", e.newest),
                            uS(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${o3(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${o3(t.loose)} loose (${o1(t.looseBytes)}) \xb7 ${o3(t.packed)} packed in ${n} (${o1(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${o3(t.garbage)} garbage files` : void 0,
                                    icon: "objects",
                                }),
                            ));
                    let r = (function (e) {
                        if (null == e.partialClone) return null;
                        let t = { label: "Partial Clone", icon: "download" };
                        return e.partialClone
                            ? null == e.missingObjects
                                ? { ...t, value: "Yes", hint: "Counting objects not downloaded didn't finish in time." }
                                : {
                                      ...t,
                                      value: `Yes \xb7 ${o3(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != r && l.push(r),
                        null != e.localBytes &&
                            l.push(
                                uC(
                                    "Repository Size",
                                    "size",
                                    e.localBytes,
                                    "Local copy: every commit, but only the file versions this container has read.",
                                ),
                            ),
                        null === e.largestFile
                            ? l.push({
                                  label: "Largest File",
                                  value: "Unknown",
                                  hint: "The scan for it didn't finish in time.",
                                  icon: "file",
                              })
                            : null != e.largestFile &&
                              l.push(
                                  uC("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: a, state: i } = e,
                        s = uT[a],
                        [o, u] = null != i ? uP[i] : [null, void 0];
                    return (0, r.jsx)(
                        ur,
                        {
                            label: t,
                            value: n,
                            hint: l,
                            critical: "error" === i,
                            icon: (0, r.jsx)(s, { size: "xs", color: L.A.colors.ICON_MUTED }),
                            state: null != o ? (0, r.jsx)(o, { size: "xs", color: u }) : void 0,
                        },
                        t,
                    );
                }),
        ],
    });
}
function uL(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: a,
            setClearAlarm: s,
            confirmCopy: o,
            restart: u,
        } = (function (e) {
            let t = (0, d.bG)([iZ.A], () => iZ.A.getRestartAgentState(e), [e]),
                [n, l] = i.useState(!1),
                a = "restarting" === t.phase ? t.startedAt : null,
                r = "restarted" === t.phase ? t.instanceSince : null,
                s = i.useRef(r);
            (i.useEffect(() => {
                null != r && r !== s.current && ((s.current = r), (0, J.DK)(e));
            }, [e, r]),
                i.useEffect(() => {
                    if (null == a) return;
                    function t() {
                        let t = iZ.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, J.gX)(e);
                    }
                    t();
                    let n = setInterval(t, 2e3),
                        l = setTimeout(
                            () =>
                                lF.h.dispatch({
                                    type: "CONJURE_RESTART_AGENT_RESULT",
                                    projectId: e,
                                    outcome: "timed_out",
                                    reason: "No new agent instance answered within 60 s",
                                    observedAt: new Date().toISOString(),
                                }),
                            Math.max(5e3, a + 6e4 - Date.now()),
                        );
                    return () => {
                        (clearInterval(n), clearTimeout(l));
                    };
                }, [e, a]));
            let o = i.useCallback(() => (0, J.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: uy,
                },
                restart: o,
            };
        })(t),
        c = i.useCallback(() => {
            (0, m.A)({ title: o.title, subtitle: o.body, confirmText: o.confirm, variant: "critical", onConfirm: u });
        }, [o, u]);
    return (0, r.jsxs)("div", {
        className: u_.Lj,
        children: [
            (0, r.jsxs)("div", {
                className: u_.nM,
                children: [
                    (0, r.jsx)(uj.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: a,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, r.jsx)(w.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: ub.RetryIcon,
                        text: uy,
                        loading: l,
                        disabled: l,
                        onClick: c,
                    }),
                ],
            }),
            (0, r.jsx)(j.E, {
                variant: "text-xs/normal",
                role: "status",
                color: "failed" === n.phase ? "text-feedback-critical" : "text-muted",
                children: (function (e) {
                    switch (e.phase) {
                        case "idle":
                            return "Starts a new agent instance; the container keeps running.";
                        case "pending":
                            return "Asking the worker to restart.";
                        case "restarting":
                            return "Restarting; waiting for a new instance to answer.";
                        case "restarted":
                            return `Restarted \xb7 new instance since ${o7(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${o7(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function u$(e, t) {
    return (0, r.jsx)(ur, {
        label: e,
        value: el.intl.formatToPlainString(en.default.yHJxuP, { count: o3((0, V.aM)(t)) }),
        hint: `${o3(t.input_tokens)} in \xb7 ${o3(t.output_tokens)} out \xb7 ${o3(t.cache_read_input_tokens)} cache read`,
    });
}
function uD(e) {
    let { projectId: t, status: n, fetchState: l, onRefresh: a } = e,
        s = (0, d.bG)([iZ.A], () => iZ.A.getLastTurnUsage(t), [t]),
        o = (0, d.bG)([iZ.A], () => iZ.A.getLastCompaction(t), [t]),
        u = (0, d.bG)([iZ.A], () => iZ.A.getLastCompactionDecline(t), [t]),
        c = (0, d.bG)([iZ.A], () => iZ.A.getForceCompactionState(t), [t]),
        m = i.useCallback(() => (0, J.Lj)(t), [t]),
        f = i.useCallback(() => (0, J.Lj)(t, !0), [t]),
        h = (0, d.bG)([iZ.A], () => iZ.A.getSandboxRestartState(t), [t]),
        g = (0, d.bG)([eh.Ay], () => eh.Ay.isThinking(t), [t]),
        x = i.useCallback(() => (0, J.bq)(t), [t]),
        p = n?.agent?.lifetime ?? null,
        v = n?.agent?.limits ?? null,
        b = n?.agent?.session ?? null,
        y = o?.promptCeiling ?? v?.context_window_tokens ?? null;
    return (0, r.jsxs)("div", {
        className: u_.Mf,
        children: [
            (0, r.jsx)(ul, { generatedAt: n?.generated_at ?? null, fetchState: l, onRefresh: a }),
            (0, r.jsx)(ua, {
                title: el.intl.string(en.default.JghNal),
                children:
                    null == p
                        ? (0, r.jsx)(j.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: el.intl.string(en.default.s0U5Fv),
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(ur, {
                                      label: el.intl.string(en.default["9nqym2"]),
                                      value: o3((0, V.a7)(p.cost_usd)),
                                      hint: el.intl.formatToPlainString(en.default.NCdUIh, { count: o3(p.turns) }),
                                  }),
                                  u$(el.intl.string(en.default.xtxP0e), p.orchestrator),
                                  u$(el.intl.string(en.default["9Sj3SX"]), p.codegen),
                                  u$(el.intl.string(en.default.ANCEo3), (0, V.wU)(p.compaction)),
                                  n?.agent?.outcomes != null &&
                                      Object.keys(n.agent.outcomes).length > 0 &&
                                      (0, r.jsx)(ur, {
                                          label: el.intl.string(en.default.SQHm7C),
                                          value: Object.entries(n.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${o3(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, r.jsx)(ua, {
                title: el.intl.string(en.default.dZHPE5),
                children:
                    null == s
                        ? (0, r.jsx)(j.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: el.intl.string(en.default.DfVjal),
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  u$(el.intl.string(en.default["7X3i9d"]), s.total),
                                  (0, r.jsx)(ur, {
                                      label: el.intl.string(en.default["8OUg09"]),
                                      value: `${Math.round((s.cache_hit_rate ?? (0, V.CA)(s.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, r.jsxs)(ua, {
                title: el.intl.string(en.default.NbRk9a),
                children: [
                    null != o && null != y
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(ui, {
                                      label: el.intl.string(en.default.Kw5wiQ),
                                      used: o.tokensAfter,
                                      max: y,
                                      formatValue: o3,
                                  }),
                                  (0, r.jsx)(ur, {
                                      label: el.intl.string(en.default.mRbSns),
                                      value: `${o3(o.tokensBefore)} \u{2192} ${o3(o.tokensAfter)}`,
                                      hint: el.intl.formatToPlainString(en.default.Vq3skS, {
                                          count: o3(o.retainedMessages),
                                          time: o7(o.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, r.jsx)(j.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != y
                                      ? el.intl.formatToPlainString(en.default.GMLCNv, { ceiling: o3(y) })
                                      : el.intl.string(en.default.s0U5Fv),
                          }),
                    null != u &&
                        (0, r.jsx)(ur, {
                            label: el.intl.string(en.default["4BX5KK"]),
                            value: `${o3(u.projected)} / ${o3(u.threshold)}`,
                            critical: !0,
                            hint: el.intl.formatToPlainString(en.default["6ngCax"], { time: o7(u.observedAt) }),
                        }),
                    (0, r.jsxs)("div", {
                        className: u_.Lj,
                        children: [
                            (0, r.jsx)(w.$, {
                                variant: "secondary",
                                size: "sm",
                                text: el.intl.string(en.default["1EiJeb"]),
                                disabled: "pending" === c,
                                onClick: m,
                            }),
                            (0, r.jsx)(j.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof c && "compacted" !== c.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return el.intl.string(en.default.wox6Ev);
                                    if ("pending" === e) return el.intl.string(en.default.OcPHQ1);
                                    let t = o7(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return el.intl.formatToPlainString(en.default.BhRjZZ, { time: t });
                                    let n =
                                        "declined" === e.outcome
                                            ? en.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? en.default.YZb4hK
                                              : en.default.ZoUSVK;
                                    return el.intl.formatToPlainString(n, {
                                        reason: e.reason ?? "no reason given",
                                        time: t,
                                    });
                                })(c),
                            }),
                            "object" == typeof c &&
                                !0 === c.pendingTurn &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(w.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: el.intl.string(en.default.ZxG2AI),
                                            onClick: f,
                                        }),
                                        (0, r.jsx)(j.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: el.intl.string(en.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: u_.Lj,
                        children: [
                            (0, r.jsx)(w.$, {
                                variant: "secondary",
                                size: "sm",
                                text: el.intl.string(en.default["5qCjBu"]),
                                loading: "pending" === h,
                                disabled: "pending" === h || g,
                                onClick: x,
                            }),
                            (0, r.jsx)(j.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof h && "restarted" !== h.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return el.intl.string(en.default.mlok8D);
                                    if ("pending" === e) return el.intl.string(en.default["1ugSyK"]);
                                    let t = o7(e.observedAt);
                                    return el.intl.formatToPlainString(
                                        "restarted" === e.outcome ? en.default["76mfqO"] : en.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(h),
                            }),
                        ],
                    }),
                    (0, r.jsx)(uL, { projectId: t }),
                ],
            }),
            (0, r.jsx)(uR, { projectId: t }),
            (null != b || n?.analytics != null) &&
                (0, r.jsxs)(ua, {
                    title: el.intl.string(en.default.EsSzCS),
                    children: [
                        null != b &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(ur, {
                                        label: el.intl.string(en.default.CLXHAs),
                                        value: o7(b.instance_since),
                                        hint: el.intl.string(en.default.UCwUEX),
                                    }),
                                    (0, r.jsx)(ur, {
                                        label: el.intl.string(en.default["8V8e1Z"]),
                                        value: o3(b.sockets),
                                    }),
                                    (0, r.jsx)(ur, {
                                        label: el.intl.string(en.default["4pBzYW"]),
                                        value: b.turn_inflight
                                            ? el.intl.string(en.default.Wv025I)
                                            : el.intl.string(en.default["7/lsFY"]),
                                    }),
                                    b.queued_messages > 0 &&
                                        (0, r.jsx)(ur, {
                                            label: el.intl.string(en.default["3oUYnv"]),
                                            value: o3(b.queued_messages),
                                        }),
                                ],
                            }),
                        n?.analytics != null && (0, r.jsx)(us, { analytics: n.analytics }),
                    ],
                }),
            null != v &&
                (0, r.jsxs)(ua, {
                    title: el.intl.string(en.default["LEIhp/"]),
                    children: [
                        (0, r.jsx)(ur, {
                            label: el.intl.string(en.default.IlDBN3),
                            value: o3(v.max_subagent_iterations),
                        }),
                        (0, r.jsx)(ur, {
                            label: el.intl.string(en.default["ZdzKR+"]),
                            value: el.intl.formatToPlainString(en.default.yHJxuP, {
                                count: o3(v.context_window_tokens),
                            }),
                        }),
                        (0, r.jsx)(ur, {
                            label: el.intl.string(en.default.cIhN2W),
                            value: el.intl.formatToPlainString(en.default.yHJxuP, {
                                count: o3(v.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, r.jsx)(ur, {
                            label: el.intl.string(en.default["+fOn/q"]),
                            value: o3(v.max_user_message_chars),
                        }),
                        (0, r.jsx)(ur, { label: el.intl.string(en.default.kIHga0), value: o3(v.max_build_attempts) }),
                        (0, r.jsx)(ur, { label: el.intl.string(en.default.Iw03yW), value: o3(v.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var uO = n(237528),
    uF = n(629584),
    uz = n(531893);
function uq(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, r.jsx)("div", {
              className: uz.ut,
              children: (0, r.jsx)(j.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: el.intl.string(en.default.h1SE6R),
              }),
          });
}
function uG(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, r.jsxs)("div", {
              className: uz.qf,
              children: [
                  (0, r.jsx)(j.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: el.intl.string(en.default.h1SE6R),
                  }),
                  (0, r.jsx)(j.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: el.intl.string(en.default["8SErdg"]),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: uz.qf,
              children: [
                  (0, r.jsx)(j.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                  (0, r.jsx)(j.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function uU(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, r.jsx)("div", {
              className: uz.ps,
              children: (0, r.jsx)(j.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: el.intl.string(en.default.V7Ri8H),
              }),
          })
        : null;
}
var uB = n(109079);
let uH = i.memo(function (e) {
    var t;
    let { entry: n, showSource: l } = e,
        [a, s] = i.useState(!1),
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
                })(n.message),
            [n.message],
        ),
        c = "error" === n.level ? "text-feedback-critical" : "text-default";
    return (0, r.jsxs)("div", {
        className: uB.vK,
        children: [
            (0, r.jsx)(j.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: uB.Mt,
                selectable: !0,
                children: (function (e) {
                    let t = new Date(e);
                    if (Number.isNaN(t.getTime())) return e;
                    let n = String(t.getHours()).padStart(2, "0"),
                        l = String(t.getMinutes()).padStart(2, "0"),
                        a = String(t.getSeconds()).padStart(2, "0");
                    return `${n}:${l}:${a}`;
                })(n.ts),
            }),
            (0, r.jsx)(j.E, {
                tag: "span",
                variant: "text-xxs/semibold",
                color:
                    "error" === (t = n.level)
                        ? "text-feedback-critical"
                        : "warn" === t
                          ? "text-feedback-warning"
                          : "text-muted",
                className: uB.dm,
                children: n.level,
            }),
            (0, r.jsxs)("div", {
                className: uB.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, r.jsx)("span", { className: uB.Cq, children: (0, r.jsx)(uO.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, r.jsx)("span", {
                            className: uB.Cq,
                            title: n.build ?? void 0,
                            children: (0, r.jsx)(uO.v, {
                                text: el.intl.string(en.default.TrC9c8),
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
                                      className: uB.Pq,
                                      "aria-expanded": a,
                                      "aria-controls": o,
                                      "aria-label": el.intl.string(en.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          a
                                              ? (0, r.jsx)(tG.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, r.jsx)(tn._, {
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
                                                  el.intl.formatToPlainString(
                                                      "[\u2026]" === u.marker
                                                          ? en.default.kUhyUv
                                                          : en.default["N+fphl"],
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
                                          className: uB.dF,
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
                              children: n.message,
                          }),
                ],
            }),
        ],
    });
});
function uV(e) {
    let { projectId: t } = e,
        n = (0, d.bG)([ej.Ay], () => ej.Ay.getLogs(t), [t]),
        l = (0, d.bG)([ej.Ay], () => ej.Ay.getHistoryState(t, "logs")),
        [a, s] = i.useState("all"),
        [o, u] = i.useState(""),
        c = i.useMemo(() => {
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
        m = i.useRef(null),
        f = i.useRef(!0);
    i.useEffect(() => {
        f.current && m.current?.scrollToBottom();
    }, [c]);
    let h = i.useCallback(() => {
            let e = m.current;
            null != e && (f.current = 32 > e.getDistanceFromBottom());
        }, []),
        g = i.useMemo(
            () =>
                o5.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return o6(e);
                            case "web":
                                return el.intl.string(en.default.IVzfVV);
                            default:
                                return el.intl.string(en.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, r.jsxs)("div", {
        className: uB.$F,
        children: [
            (0, r.jsxs)("div", {
                className: uB.y4,
                children: [
                    (0, r.jsx)(uF.I, {
                        look: "pill",
                        "aria-label": el.intl.string(en.default.MhvyUU),
                        options: g,
                        value: a,
                        onChange: (e) => s(e.value),
                    }),
                    (0, r.jsx)("div", {
                        className: uB.KT,
                        children: (0, r.jsx)(og.I, {
                            query: o,
                            onChange: u,
                            onClear: () => u(""),
                            size: "sm",
                            placeholder: el.intl.string(en.default["m2+37Y"]),
                            "aria-label": el.intl.string(en.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, r.jsx)(uq, { state: l }),
            (0, r.jsxs)(nW.Ch, {
                ref: m,
                onScroll: h,
                overflow: "auto",
                className: uB.sx,
                children: [
                    (0, r.jsx)(uU, { state: l }),
                    0 === n.length
                        ? (0, r.jsx)(uG, {
                              state: l,
                              emptyTitle: el.intl.string(en.default.S7qlPG),
                              emptyBody: el.intl.string(en.default.nD0S9z),
                          })
                        : 0 === c.length
                          ? (0, r.jsx)(j.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: el.intl.string(en.default["4SIdrX"]),
                            })
                          : c.map((e) => (0, r.jsx)(uH, { entry: e.log, showSource: "all" === a }, e.key)),
                ],
            }),
        ],
    });
}
function uK(e) {
    let { title: t, preview: n, stable: l, renderEnv: a } = e,
        s = [];
    return (
        null != n && s.push((0, r.jsx)(i.Fragment, { children: a("preview", n) }, "preview")),
        null != l && s.push((0, r.jsx)(i.Fragment, { children: a("stable", l) }, "stable")),
        (0, r.jsx)(ua, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, r.jsx)(j.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: el.intl.string(en.default.umcjif),
                      }),
        })
    );
}
function uW(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(ur, {
                      label: el.intl.formatToPlainString(en.default["01ZMS4"], { env: o6(n) }),
                      value: ((t = l.connected), el.intl.string(t ? en.default.Wv025I : en.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, r.jsx)(ur, {
                      label: el.intl.string(en.default["z1dh+F"]),
                      value: o3(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${o7(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, r.jsx)(ur, { label: el.intl.string(en.default.Iz5GnJ), value: o3(l.guild_count) }),
                  (0, r.jsx)(ur, {
                      label: el.intl.string(en.default["7UqtNv"]),
                      value: o3(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? el.intl.formatToPlainString(en.default.MasSly, {
                                    code: l.last_close_code,
                                    time: o7(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, r.jsx)(ur, {
                          label: el.intl.string(en.default["x3+JXJ"]),
                          value: o3(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, r.jsx)(ur, { label: o6(n), value: el.intl.string(en.default.lTHQss) });
}
function uX(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, r.jsx)(ur, {
        label: o6(t),
        value: el.intl.formatToPlainString(en.default["Xq+wHT"], {
            requests: o3(n.requests),
            failures: o3(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? el.intl.formatToPlainString(en.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: o7(n.last_failure.at),
                  })
                : el.intl.formatToPlainString(en.default["7KlGT6"], { time: o7(n.since) }),
    });
}
function uY(e) {
    let { env: t, runtime: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ur, {
                label: el.intl.formatToPlainString(en.default["92gVTm"], { env: o6(t) }),
                value: o3(n.connections),
            }),
            n.schedules.map((e) =>
                (0, r.jsx)(
                    ur,
                    {
                        label: el.intl.formatToPlainString(en.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? el.intl.formatToPlainString(en.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? el.intl.formatToPlainString(en.default.wxAWNv, { time: o7(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function uJ(e) {
    let { env: t, metrics: n } = e;
    return (0, r.jsx)(ur, {
        label: o6(t),
        value: el.intl.formatToPlainString(en.default.suAOj9, { calls: o3(n.calls), errors: o3(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function uQ(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, r.jsx)(ua, {
            title: t,
            children: (0, r.jsx)(j.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: el.intl.string(en.default["Noami/"]),
            }),
        });
    let a = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, r.jsxs)(ua, {
        title: t,
        children: [
            (0, r.jsx)(ur, {
                label: el.intl.string(en.default.xtD4Zp),
                value: o3(n.requests),
                hint: el.intl.formatToPlainString(en.default["7KlGT6"], { time: o7(n.since) }),
            }),
            (0, r.jsx)(ur, { label: el.intl.string(en.default.gfRhR3), value: o3(n.errors), critical: n.errors > 0 }),
            i
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(ui, {
                              label: el.intl.string(en.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: o2,
                          }),
                          (0, r.jsx)(ur, {
                              label: el.intl.string(en.default.mSKImM),
                              value: o2(a),
                              hint: el.intl.formatToPlainString(en.default.JqMU05, {
                                  total: o2(n.cpu_ms_total),
                                  wall: o2(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, r.jsx)(ur, {
                      label: el.intl.string(en.default.LEJ5r3),
                      value: el.intl.string(en.default["2Ekb2b"]),
                      hint: el.intl.string(en.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, r.jsx)(ur, { label: el.intl.string(en.default.xvmL1D), value: o2(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, r.jsx)(ur, {
                    label: el.intl.string(en.default["4sQYwH"]),
                    value: o3(n.exceeded_cpu),
                    critical: !0,
                }),
            (0, r.jsx)(ur, {
                label: el.intl.string(en.default.bQenOy),
                value: o3(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: el.intl.formatToPlainString(en.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, r.jsx)(ur, { label: el.intl.string(en.default.xgpn4Y), value: o4(n.build) }),
        ],
    });
}
function uZ(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: a } = t.storage,
        s = t.worker.limits,
        o = a
            ? [{ key: "shared", label: el.intl.string(en.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: el.intl.string(en.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: el.intl.string(en.default.eiAi57), metrics: n },
              ];
    return (0, r.jsx)(ua, {
        title: el.intl.string(en.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, r.jsx)(ur, { label: n, value: "\u2014" }, t)
                : (0, r.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, r.jsx)(ur, {
                                  label: el.intl.formatToPlainString(en.default.u7kJJ4, { env: n }),
                                  value: o1(l.r2_bytes),
                                  hint: el.intl.formatToPlainString(
                                      l.r2_truncated ? en.default.lH0oQw : en.default.m9h02S,
                                      { count: o3(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, r.jsx)(ui, {
                                      label: el.intl.formatToPlainString(en.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: o1,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function u0(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, r.jsxs)("div", {
        className: u_.Mf,
        children: [
            (0, r.jsx)(ul, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(uQ, {
                            title: el.intl.string(en.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, r.jsx)(uQ, {
                            title: el.intl.string(en.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, r.jsx)(uZ, { status: t }),
                        null != t.bot &&
                            (0, r.jsx)(uK, {
                                title: el.intl.string(en.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, r.jsx)(uW, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, r.jsx)(uK, {
                                title: el.intl.string(en.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, r.jsx)(uX, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, r.jsx)(uK, {
                                title: el.intl.string(en.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, r.jsx)(uY, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, r.jsx)(uK, {
                                title: el.intl.string(en.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, r.jsx)(uJ, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, r.jsx)(uo, { analytics: t.analytics }),
                        (0, r.jsxs)(ua, {
                            title: el.intl.string(en.default.fQMpFp),
                            children: [
                                (0, r.jsx)(ur, {
                                    label: el.intl.string(en.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? o4(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, r.jsx)(ur, {
                                    label: el.intl.string(en.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? o4(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var u1 = n(592465);
function u2(e) {
    let { projectId: t, onClose: n } = e,
        l = eG(),
        [a, s] = i.useState(() => (l && eF?.projectId === t ? "trace" : "logs")),
        o = (0, d.bG)([iZ.A], () => iZ.A.getStatus(t), [t]),
        u = (0, d.bG)([iZ.A], () => iZ.A.getFetchState(t), [t]),
        c = i.useCallback(() => {
            ((0, J.R7)(t), (0, J.DK)(t));
        }, [t]);
    (i.useEffect(() => c(), [c]), i.useEffect(() => (0, J.Rw)(t), [t]));
    let m = i.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == eF || eF.projectId !== e) return null;
            let { traceId: t } = eF;
            return ((eF = null), t);
        })(t);
        return null != e && (oJ(t, e), !0);
    }, [t, l]);
    (i.useEffect(() => {
        m();
    }, [m]),
        ez(t, () => {
            m() && s("trace");
        }));
    let f = i.useCallback(() => {
            (0, nn.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: iZ.A.getStatus(t),
                        last_turn_usage: iZ.A.getLastTurnUsage(t),
                        last_compaction: iZ.A.getLastCompaction(t),
                        last_compaction_decline: iZ.A.getLastCompactionDecline(t),
                        timing_traces: iZ.A.getTimingTraces(t),
                        logs: ej.Ay.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, v.P0)({ text: el.intl.string(en.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        h = el.intl.string(en.default["Q4FN+H"]);
    return (0, r.jsxs)("section", {
        className: u1.nd,
        "aria-label": h,
        children: [
            (0, r.jsxs)(nK.Ay, {
                "aria-label": h,
                toolbar: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(nK.Ay.Icon, {
                            icon: sw.CopyIcon,
                            tooltip: el.intl.string(en.default.TkHqy2),
                            onClick: f,
                        }),
                        (0, r.jsx)(nK.Ay.Icon, { icon: P.P, tooltip: el.intl.string(el.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, r.jsx)(nK.Ay.ChannelIcon, { icon: C.BugIcon, "aria-hidden": !0 }),
                    (0, r.jsx)(nK.Ay.Title, { children: h }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: u1.rf,
                children: [
                    (0, r.jsxs)(oh.V, {
                        selectedItem: a,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": el.intl.string(en.default.RvvWIh),
                        className: u1.vR,
                        children: [
                            (0, r.jsx)(oh.V.Item, { id: "logs", children: el.intl.string(en.default["+VRYCm"]) }),
                            (0, r.jsx)(oh.V.Item, { id: "worker", children: el.intl.string(en.default["50D0FZ"]) }),
                            (0, r.jsx)(oh.V.Item, { id: "agent", children: el.intl.string(en.default.UkbTK1) }),
                            l ? (0, r.jsx)(oh.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === a
                        ? (0, r.jsx)(uV, { projectId: t })
                        : "worker" === a
                          ? (0, r.jsx)(u0, { status: o, fetchState: u, onRefresh: c })
                          : "trace" === a && l
                            ? (0, r.jsx)(o0, { projectId: t })
                            : (0, r.jsx)(uD, { projectId: t, status: o, fetchState: u, onRefresh: c }),
                ],
            }),
        ],
    });
}
var u3 = n(333007),
    u7 = n(365912),
    u4 = n(775121),
    u6 = n(873715);
function u5(e) {
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
let u8 = Object.freeze({ x: -1, y: -1 });
function u9(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = u5(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var ce = n(470779);
function ct(e) {
    let {
            projectId: t,
            at: n,
            bounds: l,
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
        } = iO({ projectId: t, surface: "design", onUploadFile: h }),
        k = i.useRef(null),
        w = (m || g.length > 0) && j && !f,
        A = i.useCallback(() => {
            if (!w) return;
            let e = b();
            c(e.length > 0 ? e : void 0);
        }, [w, b, c]),
        [N, C] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => C(!0));
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
    let M = E?.height ?? 44,
        _ = l.left + 8,
        T = l.top + 8,
        P = Math.max(n.x, _),
        R = Math.min(Math.max(n.y + 32 + 4, T), Math.max(T, l.top + l.height - M - 8));
    return (0, r.jsxs)("div", {
        ref: S,
        className: o()(ce.M0, { [ce.ho]: N && !f, [ce.ET]: f }),
        style: { left: P, top: R },
        "data-testid": "conjure-design-compose-bar",
        children: [
            (0, r.jsx)("input", {
                ref: k,
                type: "file",
                multiple: !0,
                className: ce.Fg,
                tabIndex: -1,
                "aria-hidden": !0,
                onChange: (e) => {
                    (x(Array.from(e.target.files ?? [])), (e.target.value = ""));
                },
            }),
            (0, r.jsx)(y.m, {
                position: "bottom",
                text: el.intl.string(en.default.lgvqSB),
                ariaHidden: !0,
                children: (0, r.jsx)("button", {
                    type: "button",
                    className: ce.tY,
                    onClick: () => k.current?.click(),
                    "aria-label": el.intl.string(en.default.lgvqSB),
                    children: (0, r.jsx)(Y.H, { size: "custom", color: "currentColor", className: ce.WW }),
                }),
            }),
            (0, r.jsx)(lc.y, {
                autoFocus: !0,
                rows: 1,
                className: ce.hF,
                value: s,
                placeholder: "" === a ? el.intl.string(en.default.MPPV1Q) : `Edit ${a}`,
                "aria-label": el.intl.string(en.default.KCYqWL),
                onChange: (e) => u(e.target.value),
                onPaste: f ? void 0 : p,
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), e.stopPropagation(), d());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), A());
                },
            }),
            g.length > 0
                ? (0, r.jsx)("div", {
                      className: ce.ZO,
                      children: g.map((e) => (0, r.jsx)(iF, { draft: e, onRemove: v }, e.localId)),
                  })
                : null,
        ],
    });
}
var cn = n(192888);
function cl(e, t) {
    return (0, cn.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(u9, () => ({ status: "failed" }));
}
var ca = n(108308);
let cr = { x: 25, y: 21 };
function ci(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function cs(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function co(e, t, n, l) {
    let a = cs(e, n, l);
    return { x: a.left + a.width * t.x, y: a.top + a.height * t.y };
}
function cu(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function cc(e) {
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
function cd(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: a, toggleRef: s } = e,
        o = null != n && n === l ? t : null,
        { active: u, annotations: c } = e6(o),
        m = (0, th.Zv)(o),
        f = (0, e5.useHasAnyModalOpen)(),
        h = (0, d.bG)([tW.default], () => tW.default.getCurrentUser()),
        g = h?.id ?? null,
        [x, p] = i.useState(null),
        [v, b] = i.useState(null),
        [y, k] = i.useState(!1),
        [A, N] = i.useState(!1),
        [C, S] = i.useState(null),
        [E, I] = i.useState(!1),
        M = i.useRef(null),
        T = i.useRef(null),
        P = i.useRef(null),
        [R, L] = i.useState(null),
        [$, D] = i.useState(!1),
        [O, F] = i.useState(null),
        [z, q] = i.useState(null),
        G = i.useRef(!1),
        [U, B] = i.useState(!1),
        [H, V] = i.useState(null),
        K = u && !m && !f;
    null == O || (K && O.projectId === o) || F(null);
    let W = O?.projectId ?? null;
    (i.useEffect(() => {
        if (null != W) return () => lQ(W, "design");
    }, [W]),
        i.useEffect(() => {
            if (!K) return;
            function e() {
                let e = (function (e) {
                    if (null == e) return null;
                    let t = e.getBoundingClientRect();
                    return t.width < 1 || t.height < 1
                        ? null
                        : { left: t.left, top: t.top, width: t.width, height: t.height };
                })(a());
                p((t) => (ci(t, e) ? t : e));
            }
            e();
            let t = window.setInterval(e, 250);
            return (
                window.addEventListener("resize", e),
                () => {
                    (window.clearInterval(t), window.removeEventListener("resize", e));
                }
            );
        }, [K, a]),
        i.useEffect(() => {
            if (!K || null == o) return;
            let e = !0,
                t = a();
            if (null == t) return void N(!0);
            (k(!0), N(!1));
            let n = `design-feedback-${crypto.randomUUID()}`;
            return (
                (0, u6.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                    (t) => {
                        if (!e) return;
                        k(!1);
                        let n = "completed" === t.status ? cc(t.response) : null;
                        null == n ? N(!0) : (b(n), e3(o, { url: n.url, title: n.title, viewport: n.viewport }));
                    },
                    () => {
                        e && (k(!1), N(!0));
                    },
                ),
                () => {
                    e = !1;
                }
            );
        }, [K, a, o]));
    let X = i.useRef(null);
    (i.useEffect(() => {
        if (!K || null == x || null == o) return;
        if (null == v) {
            X.current = x;
            return;
        }
        if (ci(X.current, x)) return;
        let e = window.setTimeout(() => {
            let e = a();
            if (null == e) return;
            X.current = x;
            let t = [];
            for (let e = 0; e < c.length; e += 24) t.push(c.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, n) => {
                    let l = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, u6.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !ee.current) return;
                        let l = cc(e.response);
                        null != l && (b(l), e3(o, { url: l.url, title: l.title, viewport: l.viewport }));
                        let a = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let r = u5(e.element);
                            null != r && a.set(l.id, r);
                        }),
                            (n = e0(o)).active &&
                                0 !== a.size &&
                                e1(o, {
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
    }, [K, x, v, c, o, a]),
        i.useEffect(() => {
            if (!K)
                return () => {
                    (S(null), F(null), V(null), b(null));
                };
        }, [K]));
    let Y = i.useRef(null),
        Q = i.useRef(null),
        Z = i.useRef(!1),
        ee = i.useRef(!1);
    i.useEffect(() => {
        ((ee.current = K), K || ((Y.current = null), (Q.current = null), (P.current = null), I(!1)));
    }, [K]);
    let et = i.useCallback(
            function e() {
                if (Z.current) return;
                let t = Y.current;
                if (null == t) return;
                Y.current = null;
                let n = a();
                null != n &&
                    ((Z.current = !0),
                    cl(n, t).then((t) => {
                        if (((Z.current = !1), ee.current)) {
                            if ("picked" !== t.status || cp(t.target, eo.current.rect, eo.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? S(null)
                                    : "unsupported" === t.status && D(!0);
                            else {
                                let e = eH(t.target);
                                (L((t) => (cx(t, e) ? t : e)),
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
            [a],
        ),
        ea = i.useCallback(() => {
            if (null == O) return;
            let e = !G.current;
            (q({ at: O.at, label: O.label, draft: O.draft, instant: e }), B(e), F(null));
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
            if (null == z) return;
            let e = setTimeout(() => q(null), ch);
            return () => clearTimeout(e);
        }, [z]));
    let er = null == v || null == x || v.viewport.width < 1 ? 1 : x.width / v.viewport.width,
        ei = null != v || A,
        es = i.useMemo(() => v?.elements ?? [], [v]),
        eo = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        eo.current = { rect: x, scale: er };
    }, [x, er]);
    let eu = i.useCallback(
            (e, t, n) => {
                null != o &&
                    (lQ(o, "design"),
                    V(null),
                    (G.current = !1),
                    F({ projectId: o, target: e, anchor: t, draft: "", at: n, label: eH(e) }));
            },
            [o],
        ),
        ec = i.useCallback((e, t) => ({ x: (e.clientX - t.left) / er, y: (e.clientY - t.top) / er }), [er]),
        ed = i.useCallback(() => {
            let e = P.current;
            if (null == e) return;
            let t = M.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let n = T.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    i.useLayoutEffect(ed);
    let em = i.useCallback(
            (e) => {
                if (null == x || null != H) return;
                if (((P.current = { x: e.clientX, y: e.clientY }), ed(), I(!0), null != O)) {
                    (Math.abs(e.clientX - O.at.x) > cg || Math.abs(e.clientY - O.at.y) > cg) && (G.current = !0);
                    return;
                }
                if (!ei) return void S(null);
                let t = ec(e, x);
                if ($) {
                    let e = (function (e, t, n) {
                            let l = null,
                                a = 1 / 0;
                            for (let r of e) {
                                let { x: e, y: i, width: s, height: o } = r.rect;
                                if (s < 1 || o < 1 || t < e || n < i || t > e + s || n > i + o) continue;
                                let u = s * o;
                                u < a && ((l = r), (a = u));
                            }
                            return l;
                        })(es, t.x, t.y),
                        n = null != e && cp(e, x, er) ? null : e;
                    if (null != n) {
                        let e = eH(n);
                        L((t) => (cx(t, e) ? t : e));
                    }
                    S((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = Q.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((Q.current = n), (Y.current = n), et());
            },
            [x, er, ei, ec, $, es, O, H, ed, et],
        ),
        ef = null == H ? null : c.find((e) => e.id === H.id),
        eh = K && (E || O?.target.marker != null || ef?.target.marker != null);
    i.useEffect(() => {
        if (eh)
            return () => {
                let e = a();
                null != e && cl(e, u8);
            };
    }, [eh, a]);
    let eg = i.useCallback(() => {
        (I(!1), S(null), (Q.current = null), (Y.current = null));
    }, []);
    i.useEffect(() => {
        if (!K || !E || !ei || $ || null != O || null != H) return;
        let e = P.current,
            { rect: t, scale: n } = eo.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((Q.current = l), (Y.current = l), et());
    }, [K, E, ei, $, O, H, et]);
    let ex = i.useCallback(
            (e) => {
                if (null != O || null != H) {
                    (ea(), V(null));
                    return;
                }
                if (null == C || null == x) return;
                let t = ec(e, x);
                eu(
                    C,
                    (function (e, t, n) {
                        let { x: l, y: a, width: r, height: i } = e.rect;
                        return r < 1 || i < 1
                            ? eU
                            : { x: Math.min(1, Math.max(0, (t - l) / r)), y: Math.min(1, Math.max(0, (n - a) / i)) };
                    })(C, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [C, x, ec, O, H, eu, ea],
        ),
        ep = i.useCallback(() => {
            null != o && (S(null), e2(o));
        }, [o]),
        ev = i.useCallback(() => {
            null != o &&
                (null != O
                    ? ea()
                    : H?.confirmingRemove === !0
                      ? V({ ...H, confirmingRemove: !1 })
                      : null != H
                        ? V(null)
                        : ep());
        }, [o, O, H, ea, ep]),
        ej = i.useRef(ev),
        eb = i.useRef(ep);
    i.useLayoutEffect(() => {
        ((ej.current = ev), (eb.current = ep));
    });
    let ey = i.useRef(null);
    i.useEffect(() => {
        if (K)
            return (
                u4.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        u4.A.enable());
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
                        return ((0, u7.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) &&
                eb.current();
        }
    }, [K, s]);
    let ek = i.useCallback(
            (e) => {
                if (null == o) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), ev());
                    return;
                }
                if (null != O || null != H || 0 === es.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    n = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || n) {
                    e.preventDefault();
                    let n = null == C ? -1 : es.findIndex((e) => e.ref === C.ref);
                    S(es[(n + (t ? 1 : -1) + es.length) % es.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != C &&
                    (e.preventDefault(),
                    eu(C, eU, { x: (x?.left ?? 0) + C.rect.x * er, y: (x?.top ?? 0) + C.rect.y * er }));
            },
            [o, O, H, es, C, eu, ev, x, er],
        ),
        ew = i.useCallback(
            (e) => {
                null == o ||
                    null == O ||
                    ((eB(O.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, J.dv)(
                            o,
                            (function (e, t) {
                                let { kind: n, name: l } = eH(e),
                                    a = [n, l].filter((e) => "" !== e).join(": ");
                                return `${eW}${a}${eX}${eK(e)}
${t.trim()}`;
                            })(O.target, O.draft),
                            e,
                        ),
                        ea(),
                        S(null)));
            },
            [o, O, ea],
        ),
        eA = i.useCallback((e) => (null == o ? Promise.reject(Error("no project")) : (0, J.vX)(o, e)), [o]),
        eN = i.useCallback(() => {
            if (null != o && null != H && null != g && eB(H.draft)) {
                var e, t;
                let n, l;
                ((e = H.id),
                    (t = H.draft.trim()),
                    null != (l = (n = e0(o)).annotations.find((t) => t.id === e)) &&
                        e7(l, g) &&
                        e1(o, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    V({ ...H, editing: !1 }));
            }
        }, [o, H, g]),
        eC = i.useCallback(() => {
            if (null != o && null != H && null != g) {
                var e;
                let t, n;
                ((e = H.id),
                    null != (n = (t = e0(o)).annotations.find((t) => t.id === e)) &&
                        e7(n, g) &&
                        e1(o, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    V(null));
            }
        }, [o, H, g]),
        eS = u
            ? y
                ? el.intl.string(en.default["Eb/YV9"])
                : A
                  ? el.intl.string(en.default.FD30bh)
                  : el.intl.formatToPlainString(en.default.dTSqLF, { count: c.length })
            : "",
        eE = K && null != x,
        eI = E && null == H,
        eM = O?.target ?? ef?.target ?? null,
        e_ = O ?? z,
        eT = O ?? (z?.instant === !0 ? null : z),
        eP =
            null != ef && null != x
                ? (function (e, t) {
                      let { left: n, top: l } = cu(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(co(ef.target, ef.anchor, x, er), x)
                : null;
    return (
        i.useEffect(() => {
            let e = a();
            if (ef?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = ef;
            cl(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [ef, a]),
        (0, u3.createPortal)(
            (0, r.jsxs)("div", {
                ref: ey,
                className: ca.Li,
                children: [
                    (0, r.jsx)("div", {
                        className: ca.y4,
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-design-announcer",
                        children: eS,
                    }),
                    eE
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)("div", {
                                      className: ca.MT,
                                      style: { left: x.left, top: x.top, width: x.width, height: x.height },
                                      "data-plain-cursor": eI ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": el.intl.string(en.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: em,
                                      onMouseLeave: eg,
                                      onClick: ex,
                                      onKeyDown: ek,
                                  }),
                                  null != C && null == C.marker && null == O && null == H
                                      ? (0, r.jsx)(cv, { box: cs(C, x, er) })
                                      : null,
                                  (0, r.jsx)("div", {
                                      ref: M,
                                      className: ca.aZ,
                                      children: (0, r.jsx)("div", {
                                          className: ca.xz,
                                          "data-shown": null != C && null == H && null == O ? "" : void 0,
                                          "data-instant": U ? "" : void 0,
                                          children: (0, r.jsxs)(j.E, {
                                              variant: "text-xs/medium",
                                              className: ca.Ux,
                                              children: [
                                                  null == R
                                                      ? null
                                                      : (0, r.jsx)("span", { className: ca.Tl, children: R.kind }),
                                                  null == R || "" === R.name
                                                      ? null
                                                      : (0, r.jsxs)("span", {
                                                            className: ca.kh,
                                                            children: [" ", R.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, r.jsx)("div", {
                                      ref: T,
                                      className: ca.Y,
                                      children: eI ? (0, r.jsx)("div", { className: ca.u }) : null,
                                  }),
                                  null == eT
                                      ? null
                                      : (0, r.jsx)("div", {
                                            className: ca.aZ,
                                            style: {
                                                transform: `translate3d(${eT.at.x + 20}px, ${eT.at.y + 20}px, 0)`,
                                            },
                                            children: (0, r.jsx)("div", {
                                                className: ca.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == O ? "" : void 0,
                                                children: (0, r.jsxs)(j.E, {
                                                    variant: "text-xs/medium",
                                                    className: ca.Ux,
                                                    children: [
                                                        (0, r.jsx)("span", {
                                                            className: ca.Tl,
                                                            children: eT.label.kind,
                                                        }),
                                                        "" === eT.label.name
                                                            ? null
                                                            : (0, r.jsxs)("span", {
                                                                  className: ca.kh,
                                                                  children: [" ", eT.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eM && null == eM.marker
                                      ? (0, r.jsx)("div", { className: ca.D0, style: cs(eM, x, er), "aria-hidden": !0 })
                                      : null,
                                  c.map((e, t) => {
                                      let n = co(e.target, e.anchor, x, er),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, r.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: ca.xL,
                                              style: { ...cu(n, x), width: 24, height: 24 },
                                              "aria-label": el.intl.formatToPlainString(en.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: eV(e.target),
                                              }),
                                              "aria-expanded": H?.id === e.id,
                                              "data-testid": "conjure-design-marker",
                                              onMouseEnter: () => {
                                                  null == O && V(l);
                                              },
                                              onFocus: () => {
                                                  null == O && V(l);
                                              },
                                              onClick: (e) => {
                                                  (e.stopPropagation(), ea(), V(l));
                                              },
                                              children: (0, r.jsx)(cm, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == e_ || null == o
                                      ? null
                                      : (0, r.jsx)(ct, {
                                            projectId: o,
                                            at: { x: e_.at.x + 20, y: e_.at.y + 20 },
                                            bounds: x,
                                            kind: e_.label.kind,
                                            value: e_.draft,
                                            canSubmit: null != O && eB(e_.draft),
                                            onChange: (e) => {
                                                null != O && F({ ...O, draft: e });
                                            },
                                            onSubmit: ew,
                                            onDismiss: ea,
                                            onUploadFile: eA,
                                            closing: null == O,
                                        }),
                                  null != ef && null != H && null != eP
                                      ? (0, r.jsxs)(cf, {
                                            point: eP,
                                            frame: x,
                                            authorId: ef.authorId,
                                            title: eV(ef.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                H.confirmingRemove ? V({ ...H, confirmingRemove: !1 }) : V(null);
                                            },
                                            onMouseLeave: () => {
                                                H.editing || H.confirmingRemove || V(null);
                                            },
                                            children: [
                                                H.editing
                                                    ? (0, r.jsx)(_.f, {
                                                          autoFocus: !0,
                                                          label: el.intl.string(en.default.KCYqWL),
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
                                                    : (0, r.jsx)(j.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-default",
                                                          className: ca.aC,
                                                          children: ef.comment,
                                                      }),
                                                e7(ef, g)
                                                    ? (0, r.jsx)("div", {
                                                          className: ca.eB,
                                                          children: H.confirmingRemove
                                                              ? (0, r.jsxs)(r.Fragment, {
                                                                    children: [
                                                                        (0, r.jsx)(j.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: ca.nv,
                                                                            children: el.intl.string(en.default.wOHvts),
                                                                        }),
                                                                        (0, r.jsx)(w.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: el.intl.string(en.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                V({ ...H, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, r.jsx)(w.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: el.intl.string(en.default.friIzR),
                                                                            "data-testid":
                                                                                "conjure-design-remove-confirm",
                                                                            onClick: eC,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, r.jsxs)(r.Fragment, {
                                                                    children: [
                                                                        (0, r.jsx)(w.$, {
                                                                            variant: "critical-secondary",
                                                                            size: "sm",
                                                                            text: el.intl.string(en.default.friIzR),
                                                                            onClick: () =>
                                                                                V({
                                                                                    ...H,
                                                                                    editing: !1,
                                                                                    confirmingRemove: !0,
                                                                                }),
                                                                        }),
                                                                        H.editing
                                                                            ? (0, r.jsx)(w.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !eB(H.draft),
                                                                                  text: el.intl.string(
                                                                                      en.default.iicRP9,
                                                                                  ),
                                                                                  onClick: eN,
                                                                              })
                                                                            : (0, r.jsx)(w.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: el.intl.string(
                                                                                      en.default["6eW9lg"],
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
function cm(e) {
    let { authorId: t } = e,
        n = (0, d.bG)([tW.default], () => tW.default.getUser(t), [t]);
    return (0, r.jsx)(ry.eu, {
        src: null == n ? null : rA.Ay.getUserAvatarURL(n),
        size: rk._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function cf(e) {
    let t,
        n,
        l,
        a,
        s,
        o,
        { point: u, frame: c, authorId: d, title: m, testId: f, onDismiss: h, onMouseLeave: g, children: x } = e,
        p = i.useRef(null),
        v = i.useRef(null),
        [b, y] = i.useState(cr);
    i.useLayoutEffect(() => {
        let e = p.current?.getBoundingClientRect(),
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
        (a = Math.max((l = c.top + 8), c.top + c.height - 160 - 8)),
        (s = Math.min(Math.max(u.x - b.x, t), n)),
        { left: s, top: (o = Math.min(Math.max(u.y - b.y, l), a)), originX: u.x - s, originY: u.y - o }),
        C = { left: k, top: w, "--custom-conjure-card-origin-x": `${A}px`, "--custom-conjure-card-origin-y": `${N}px` };
    return (0, r.jsxs)("div", {
        ref: p,
        className: ca.Nr,
        style: C,
        "data-testid": f,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, r.jsxs)("div", {
                className: ca.MY,
                children: [
                    (0, r.jsx)("span", { ref: v, className: ca.ip, children: (0, r.jsx)(cm, { authorId: d }) }),
                    (0, r.jsx)(j.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: ca.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: ca.zI, children: x }),
        ],
    });
}
let ch = 300,
    cg = 2;
function cx(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function cp(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        a = t.height / n;
    return !(l < 1) && !(a < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * a;
}
function cv(e) {
    let { box: t } = e;
    return (0, r.jsx)("div", { className: ca.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var cj = n(659723),
    cb = n(697744),
    cy = n(130324);
function ck(e) {
    let t = (0, cb.c)(),
        { events: n, getDuration: l } = t;
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
    }, [n, l]);
    let a = (0, i1.A)();
    return (
        i.useEffect(() => {
            if (!a) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, a]),
        t
    );
}
function cw(e) {
    let { className: t } = e,
        { Component: n, events: l } = ck(3e4);
    return (0, r.jsxs)("div", {
        className: t,
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, r.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, r.jsx)(j.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: cy.o,
                children: el.intl.string(en.default.AyiQEp),
            }),
        ],
    });
}
var cA = n(251363),
    cN = n(944142),
    cC = n(532247),
    cS = n(501628);
function cE(e) {
    let { progress: t } = e,
        { Component: n } = ck(1500),
        l = eq.Q_.useSetting();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, r.jsx)(j.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, r.jsx)("div", {
                className: cS.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, r.jsx)(
                        "span",
                        {
                            className: cS.PM,
                            "data-state": n < t.stepIndex ? "done" : n === t.stepIndex ? "current" : "todo",
                        },
                        n,
                    ),
                ),
            }),
            l && null != t.stepLabel
                ? (0, r.jsx)(j.E, { variant: "text-xs/normal", color: "text-overlay-light", children: t.stepLabel })
                : null,
        ],
    });
}
function cI(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: a } = e,
        s = null != t && null != n && n === l,
        o = (0, d.bG)([cN.A], () => (s ? cN.A.getLiveReload(t) : null), [s, t]),
        u = (0, z.A)(n, a)?.id ?? null,
        c = o?.phase ?? null,
        m = (function (e, t) {
            let n = (0, cC.dv)(e),
                [l, a] = i.useState(null),
                [r, s] = i.useState(n);
            r !== n && (s(n), a(null == n ? (0, cC.QP)(e, r) : null));
            let o = (0, d.bG)(
                    [tT.A],
                    () => {
                        let e = tT.A.getFrame(t);
                        return (0, tE.x1)(e) && e.data.proxyTicketRefreshing;
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
                        return a(null);
                    }
                    function n(n) {
                        null != n.target && n.target === (0, cA.o)(null, t) && e();
                    }
                    ((c.current = u.current), document.addEventListener("load", n, !0));
                    let r = window.setTimeout(() => {
                            c.current || e();
                        }, 4e3),
                        i = window.setTimeout(e, 15e3);
                    return () => {
                        (document.removeEventListener("load", n, !0), window.clearTimeout(r), window.clearTimeout(i));
                    };
                }, [l, t]),
                l
            );
        })(c, u),
        f = (0, cC.h_)(c, o?.step ?? null, m);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(k.A, { tag: "div", role: "status", "aria-live": "polite", children: f?.title ?? "" }),
            null != f
                ? (0, r.jsx)("div", {
                      className: cS.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, r.jsx)(cE, { progress: f }),
                  })
                : null,
        ],
    });
}
var cM = n(343030),
    c_ = n(317608),
    cT = n(338941),
    cP = n(964404);
let cR = { width: 1 / 0, height: 1 / 0 };
function cL(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cR;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var c$ = n(702083);
function cD(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, d.cf)([tm.A], () => ({
            mobile: tm.A.isBuilderPreviewMobile(),
            landscape: tm.A.isBuilderPreviewLandscape(),
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
        let n = new ResizeObserver(t);
        return (n.observe(e), () => n.disconnect());
    }, []);
    let c = null != s && s.width > 0 ? s : null,
        m = n ? cL(l, c ?? void 0) : null;
    return (0, r.jsx)("div", {
        ref: a,
        className: o()(c$.dw, { [c$.PQ]: null != m }),
        children: (0, r.jsx)("div", { className: o()(c$.R9, { [c$.Vg]: null != m }), style: m ?? void 0, children: t }),
    });
}
var cO = n(347927);
function cF(e) {
    let { title: t, body: n, wide: l = !1, children: a } = e;
    return (0, r.jsxs)("div", {
        className: o()(cO.Bf, l && cO.Qx),
        children: [
            (0, r.jsxs)("div", {
                className: cO.Ux,
                children: [
                    (0, r.jsx)(E.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    null != n
                        ? (0, r.jsx)(j.E, { variant: "text-md/medium", color: "text-subtle", children: n })
                        : null,
                ],
            }),
            a,
        ],
    });
}
var cz = n(957272);
function cq(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: a } = e,
        { frame: s, state: o } = (0, cT.A)({ applicationId: t, surface: n, launch: l }),
        u = (0, tE.VA)(t, n);
    if (
        (i.useEffect(
            () => (
                !(function (e) {
                    let t = tT.A.getFrame(e);
                    if (null == t || tP.A.getWindowOpen(em.MLl.ACTIVITY_POPOUT)) return;
                    let n = tT.A.getMainFrame()?.id === e;
                    t.intent === tE.sV.MAIN
                        ? (n || F.A.promoteFrame(e), F.A.resetFrameLayoutModes(e))
                        : n && F.A.clearMainFrameSlot();
                })(u),
                () => {
                    let e;
                    null != (e = tT.A.getFrame(u)) &&
                        ((0, tE.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        cP.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === tE.sV.INLINE && F.A.promoteFrame(u),
                              F.A.updateFrameLayoutMode({ frameId: u, layoutMode: tE.y0.PIP }))
                            : e.intent === tE.sV.MAIN && F.A.demoteMainFrame(u));
                }
            ),
            [u],
        ),
        o === cT.n.Launched)
    ) {
        let e = (0, r.jsx)(c_.A, { frameId: s.id, level: cM.A.WithinAppContent, className: cz.Z7, overlay: a });
        return (0, tp.Q5)(n) ? (0, r.jsx)(cD, { children: e }) : e;
    }
    return (0, r.jsx)(cG, { state: o });
}
function cG(e) {
    let { state: t } = e;
    switch (t) {
        case cT.n.RenderingElsewhere:
            return (0, r.jsx)("div", {
                className: cz.qs,
                children: (0, r.jsx)(cF, {
                    title: el.intl.string(en.default["9kpdo7"]),
                    body: el.intl.string(en.default.iIA8Nj),
                }),
            });
        case cT.n.NoApplication:
            return (0, r.jsx)(cw, { className: cz.qs });
        case cT.n.DoesNotSupportSurface:
            return (0, r.jsx)("div", {
                className: cz.qs,
                children: (0, r.jsx)(cF, {
                    title: el.intl.string(en.default["7k4GyN"]),
                    body: el.intl.string(en.default.zdIy3R),
                }),
            });
        case cT.n.Error:
            return (0, r.jsxs)("div", {
                className: cz.qs,
                children: [
                    (0, r.jsx)(E.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: el.intl.string(en.default.lTPbnG),
                    }),
                    (0, r.jsx)(j.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: cz.tj,
                        children: el.intl.string(en.default.e6GiAZ),
                    }),
                ],
            });
        case cT.n.AwaitingLaunch:
        case cT.n.Loading:
            return (0, r.jsx)("div", { className: cz.qs, children: (0, r.jsx)(f.y, {}) });
    }
}
var cU = n(308528),
    cB = n(334738),
    cH = n(688438),
    cV = n(355622),
    cK = n(365971),
    cW = n(703462);
function cX(e) {
    let { message: t } = e;
    return (0, r.jsxs)("div", {
        className: cW.f,
        children: [
            (0, r.jsx)(aK.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, r.jsx)(j.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function cY() {
    return (0, r.jsx)("div", { className: cW.f, children: (0, r.jsx)(f.y, {}) });
}
function cJ(e) {
    let t,
        n,
        { previewApplicationId: l } = e,
        { data: a, isLoading: s } = (0, O.YY)(l),
        o = a?.bot?.id ?? null,
        u = (0, d.bG)([lm.A], () => {
            if (null == o) return null;
            let e = lm.A.getDMFromUserId(o);
            return null != e ? lm.A.getChannel(e) : null;
        });
    ((t = u?.id ?? null),
        i.useEffect(() => {
            null != t && cU.A.preload(em.ME, t);
        }, [t]),
        (n = (0, d.bG)([sp.A], () => sp.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, cK.Xg)();
            return (
                (0, cB.yl)(t, e),
                () => {
                    (0, cB.dm)(t, e);
                }
            );
        }, [t, n]));
    let [c, m] = i.useState(null),
        f = null != o && c === o;
    return (i.useEffect(() => {
        if (null == o || null != u) return;
        let e = !1;
        return (
            cU.A.openPrivateChannel({ recipientIds: o, navigateToChannel: !1 }).catch(() => {
                e || m(o);
            }),
            () => {
                e = !0;
            }
        );
    }, [o, u]),
    s && null == a)
        ? (0, r.jsx)(cY, {})
        : null == o || f
          ? (0, r.jsx)(cX, { message: el.intl.string(en.default["VP/O8s"]) })
          : null == u
            ? (0, r.jsx)(cY, {})
            : (0, r.jsx)("div", {
                  className: cW.g,
                  children: (0, r.jsx)(cH.A, { channel: u, guild: null, chatInputType: cV.oU.SIDEBAR }, u.id),
              });
}
var cQ = n(887909),
    cZ = n(570962),
    c0 = n(998475);
function c1(e) {
    let {
        label: t,
        title: n,
        subtitle: l,
        header: a,
        body: i,
        actions: s,
        nextStep: u,
        appDetails: c,
        hasContentBackground: d,
        noPadding: m,
        obscured: f,
    } = (0, cQ.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, r.jsxs)("section", {
        className: c0.Nr,
        "aria-label": t,
        children: [
            (0, r.jsx)("div", {
                className: c0.rf,
                children: (0, r.jsx)(cZ.A, {
                    obscured: !0 === f,
                    children: (0, r.jsxs)("div", {
                        className: c0.Gq,
                        children: [
                            null != n
                                ? (0, r.jsxs)("div", {
                                      className: c0.z3,
                                      children: [
                                          (0, r.jsx)(E.D, {
                                              variant: "heading-lg/bold",
                                              color: "text-strong",
                                              children: n,
                                          }),
                                          null != l
                                              ? (0, r.jsx)(j.E, {
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
                                className: o()(c0.Qs, d ? c0.cw : null, m ? c0.pN : null),
                                children: [i, null == u ? c : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != s && s.length > 0
                ? (0, r.jsx)("div", {
                      className: c0.o1,
                      children: s.map((e, t) => (0, r.jsx)(w.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var c2 = n(765671),
    c3 = n(269094),
    c7 = n(714917),
    c4 = n(582063);
let c6 = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function c5() {
    (0, v.P0)({ text: el.intl.string(en.default.jj3abP), variant: "critical" });
}
function c8(e) {
    let { projectId: t } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        a = el.intl.string(en.default["xd/1IW"]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(K.Y, {
                targetElementRef: n,
                align: "left",
                position: "bottom",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, r.jsx)(c9, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, r.jsx)("div", {
                        ref: n,
                        className: c4.m2,
                        children: (0, r.jsx)(y.m, {
                            position: "bottom",
                            text: a,
                            asContainer: !0,
                            children: (0, r.jsx)(t8.K, {
                                "aria-label": a,
                                icon: S.SettingsIcon,
                                variant: "overlay-secondary",
                                size: "sm",
                                onClick: t,
                            }),
                        }),
                    });
                },
            }),
            (0, r.jsx)("input", {
                ref: l,
                type: "file",
                accept: c6.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (c6.includes(n.type)
                                ? n.size > V.aI
                                    ? (0, v.P0)({ text: el.intl.string(en.default.T8Spiu), variant: "critical" })
                                    : (0, J.M$)(t, n).catch(c5)
                                : (0, v.P0)({ text: el.intl.string(en.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function c9(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        a = (0, d.bG)([c7.A], () => c7.A.getBackground(t)),
        i = a?.blur === !0,
        s = a?.imageEtag ?? null;
    return (0, r.jsxs)(W.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": el.intl.string(en.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, r.jsxs)(X.rX, {
                children: [
                    (0, r.jsx)(X.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: el.intl.string(en.default.uQpDky),
                        icon: l$.X,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, r.jsx)(X.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: el.intl.string(en.default.AiAz8J),
                        icon: ub.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, J.Og)(t).catch(c5));
                        },
                    }),
                ],
            }),
            (0, r.jsx)(X.rX, {
                children: (0, r.jsx)(X.fP, {
                    id: "conjure-overlay-background-blur",
                    label: el.intl.string(en.default["hyN+kc"]),
                    checked: i,
                    action: () => {
                        (0, J.Y1)(t, !i) || c5();
                    },
                }),
            }),
        ],
    });
}
let de = "/assets/7cec34541705c795.webp";
function dt(e) {
    let { applicationId: t, projectId: n, size: l } = e,
        a = (0, cT.A)({ applicationId: t, surface: tE.ZN });
    return (i.useEffect(() => {
        let e = (0, tE.VA)(t, tE.ZN);
        return () => (0, tA.r)(e);
    }, [t]),
    a.state !== cT.n.Launched)
        ? (0, r.jsx)(cG, { state: a.state })
        : a.frame.data.proxyTicketRefreshing
          ? (0, r.jsx)(cG, { state: cT.n.Loading })
          : (0, r.jsx)(dn, { lifecycle: a, projectId: n, size: l });
}
function dn(e) {
    let { lifecycle: t, projectId: n, size: l } = e,
        { ref: a, width: i, height: s } = (0, c2.Ay)(),
        o = (function (e, t) {
            let { width: n, height: l } = e;
            return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
        })({ width: i, height: s }, l);
    return (0, r.jsxs)("div", {
        className: c4.JH,
        children: [
            (0, r.jsx)(dl, { projectId: n }),
            (0, r.jsx)("div", {
                ref: a,
                className: c4.dw,
                children: (0, r.jsx)("div", {
                    className: c4.HL,
                    style: {
                        "--custom-conjure-overlay-widget-width": `${l.width}px`,
                        "--custom-conjure-overlay-widget-height": `${l.height}px`,
                        "--custom-conjure-overlay-widget-scale": String(o),
                    },
                    children: (0, r.jsx)(c3.A, { frame: t.frame, application: t.application, className: c4.Gt }),
                }),
            }),
            null != n ? (0, r.jsx)(c8, { projectId: n }) : null,
        ],
    });
}
function dl(e) {
    let { projectId: t } = e,
        n = (0, d.bG)([c7.A], () => (null != t ? c7.A.getBackground(t) : null)),
        l = n?.imageEtag ?? null,
        [a, s] = i.useState(null),
        [u, c] = i.useState(null),
        [m, f] = i.useState(!1);
    (i.useEffect(() => {
        if (null != n) return;
        let e = setTimeout(() => f(!0), 2e3);
        return () => clearTimeout(e);
    }, [n]),
        i.useEffect(() => {
            if (null == t || null == l) return;
            let e = !1;
            return (
                (0, J.Mg)(t, l).then(
                    (t) => {
                        e || s(t);
                    },
                    () => {
                        e || s(de);
                    },
                ),
                () => {
                    e = !0;
                }
            );
        }, [t, l]));
    let h = null != l ? a : null,
        g = null == l || (null != h && h === u) ? de : h;
    return null != g && (null == t || null != n || m)
        ? (0, r.jsx)("img", {
              className: o()(c4.LO, { [c4.Ty]: n?.blur === !0 }),
              src: g,
              alt: "",
              "aria-hidden": !0,
              onError: () => {
                  g === h && c(h);
              },
          })
        : null;
}
var da = n(409478),
    dr = n(652227);
function di(e) {
    let {
        applicationId: t,
        previewApplicationId: n,
        surface: l,
        frameLaunchParams: a,
        previewReady: i,
        previewGate: s,
        availability: o,
        activeMode: u,
        widgetApplicationId: c,
        overlayWidgetSize: d = tf,
        projectId: m,
        frameOverlay: h,
    } = e;
    return s?.type === "checking"
        ? (0, r.jsx)("div", { className: dr.q, children: (0, r.jsx)(f.y, {}) })
        : s?.type === "permissions"
          ? (0, r.jsx)("div", {
                className: dr.q,
                children: null == s.authorizeProps ? (0, r.jsx)(f.y, {}) : (0, r.jsx)(c1, { ...s.authorizeProps }),
            })
          : i
            ? null == t
                ? null
                : (0, r.jsxs)("div", {
                      className: dr.R,
                      children: [
                          (0, tx.yf)(o, u)
                              ? (0, r.jsx)(cq, { applicationId: t, surface: l, launch: a, frameOverlay: h })
                              : null,
                          "widget" === u && null != c
                              ? "unavailable-authorization-revoked" === o.profileState
                                  ? (0, r.jsx)("div", {
                                        className: dr.q,
                                        children: (0, r.jsx)(cF, {
                                            wide: !0,
                                            title: el.intl.string(en.default["08U+YO"]),
                                            body: el.intl.string(en.default.pKBfrc),
                                        }),
                                    })
                                  : (0, r.jsx)(da.A, { applicationId: c })
                              : null,
                          "overlay" === u && o.modes.includes("overlay")
                              ? (0, r.jsx)(dt, { applicationId: t, projectId: m, size: d })
                              : null,
                          "bot" === u && null != n ? (0, r.jsx)(cJ, { previewApplicationId: n }) : null,
                      ],
                  })
            : (0, r.jsx)(cw, { className: dr.q });
}
var ds = n(175841),
    du = n(750506),
    dc = n(867193),
    dd = n(539197),
    dm = n(977020);
function df(e) {
    let { projectId: t } = e,
        n = (0, dd.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, dd.Ie)(e);
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
    let { left: a, top: s, width: u, height: c, scale: d } = l;
    function m(e, t) {
        return { "--custom-conjure-cursor-x": `${e * d}px`, "--custom-conjure-cursor-y": `${t * d}px` };
    }
    return (0, r.jsxs)("div", {
        className: dm.$Q,
        style: { left: a, top: s, width: u, height: c, "--custom-conjure-cursor-scale": d },
        "aria-hidden": !0,
        [dd.t$]: "",
        children: [
            n.presses > 0
                ? (0, r.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, r.jsx)("div", { className: o()(dm.hN, dm.vW), style: m(n.pressX, n.pressY) }),
                              (0, r.jsx)("div", { className: o()(dm.hN, dm.A7), style: m(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, r.jsx)("svg", {
                className: o()(dm.UE, { [dm.SP]: n.shown, [dm.Vq]: n.pressed, [dm.GP]: n.dipping }),
                style: m(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, r.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var dh = n(417760);
function dg(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function dx(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function dp(e) {
    let { phase: t, projectId: n, compact: l } = e,
        { stop: a, stopping: s } = (function (e) {
            let t = (0, d.bG)([eh.Ay], () => null != e && eh.Ay.isThinking(e)),
                [n, l] = i.useState(!1),
                [a, r] = i.useState(t);
            (t !== a && (r(t), t || l(!1)),
                i.useEffect(() => {
                    if (!n) return;
                    let e = setTimeout(() => l(!1), 5e3);
                    return () => clearTimeout(e);
                }, [n]));
            let s = i.useCallback(() => {
                null != e && (l(!0), (0, J.fu)(e));
            }, [e]);
            return { stop: t ? s : null, stopping: n };
        })(n),
        u = (0, th.CU)(n),
        c = "controlling" === t,
        m = el.intl.string(c ? (u ? en.default["VJW/5P"] : en.default["+hD2Iz"]) : en.default["h+i1r9"]),
        f =
            null != a
                ? (0, r.jsx)(w.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: el.intl.string(en.default.oU59sU),
                      loading: s,
                      onClick: a,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return l
        ? (0, r.jsxs)("div", {
              className: o()(dh.M0, dh.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  c
                      ? (0, r.jsx)(s6.i, { size: 12, color: "currentColor" })
                      : (0, r.jsx)(ds.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, r.jsx)(j.E, { variant: "text-sm/semibold", color: "none", className: dh.ID, children: m }),
                  c ? (0, r.jsx)(k.A, { children: el.intl.string(en.default.fg1sor) }) : null,
                  c ? (0, r.jsx)("div", { className: dh.lC, children: f }) : null,
              ],
          })
        : (0, r.jsxs)("div", {
              className: dh.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, r.jsxs)("div", {
                      className: dh.sp,
                      children: [
                          (0, r.jsx)(ds.SparklesIcon, { size: "sm", color: "currentColor" }),
                          c ? (0, r.jsx)(s6.i, { size: 12, color: "currentColor" }) : null,
                          (0, r.jsxs)("div", {
                              className: dh.f4,
                              children: [
                                  (0, r.jsx)(j.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: dh.w9,
                                      children: m,
                                  }),
                                  c
                                      ? (0, r.jsx)(j.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: dh.Rb,
                                            children: el.intl.string(en.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  c ? (0, r.jsx)("div", { className: dh.lC, children: f }) : null,
              ],
          });
}
function dv(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveTarget: a, frameId: s } = e,
        o = (0, th.Zv)(null != n && n === l ? t : null),
        u = (function (e) {
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
        })(o),
        c = (0, e5.useHasAnyModalOpen)(),
        d = tF(s);
    i.useEffect(() => {
        o &&
            d &&
            null != s &&
            (function (e) {
                if (!tD(e)) return;
                let t = t$(e);
                null != t && (0, tR.sP)(t);
            })(s);
    }, [o, d, s]);
    let [m, f] = i.useState(null),
        [h, g] = i.useState(null),
        [x, p] = i.useState(null),
        v = "idle" !== u;
    i.useEffect(() => {
        if (!v) return;
        function e() {
            let e = dg(a());
            f((t) => (dx(t, e) ? t : e));
            let t = null == h ? null : dg(h);
            (p((e) => (dx(e, t) ? e : t)), null != h && (0, dc.C)(h.getBoundingClientRect().height));
        }
        e();
        let t = window.setInterval(e, 250);
        window.addEventListener("resize", e);
        let n = null == h ? null : new ResizeObserver(e);
        return (
            null != h && n?.observe(h),
            () => {
                (window.clearInterval(t),
                    window.removeEventListener("resize", e),
                    n?.disconnect(),
                    null != h && (0, dc.C)(0));
            }
        );
    }, [v, a, h]);
    let j = "idle" !== u && null != m,
        b = j && "controlling" === u && !c,
        y = null != m && m.width < 420,
        k = null == m ? void 0 : { left: m.left, top: m.top, width: m.width, height: m.height },
        w =
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
        A = (function () {
            let [e] = i.useContext(du.uY),
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
            j
                ? (0, r.jsx)("div", {
                      ref: g,
                      className: dh.D,
                      "data-phase": u,
                      children: (0, r.jsx)("div", {
                          className: dh.QF,
                          children: (0, r.jsx)(dp, { phase: u, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, u3.createPortal)(
                (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)("div", {
                        className: dh.y4,
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-control-announcer",
                        children:
                            "controlling" === u
                                ? el.intl.string(en.default.oWcemF)
                                : "handoff" === u
                                  ? el.intl.string(en.default["h+i1r9"])
                                  : "",
                    }),
                }),
                document.body,
            ),
            b
                ? (0, u3.createPortal)(
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", {
                                  className: dh.ys,
                                  style: w,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, r.jsx)("div", {
                                  className: dh.om,
                                  style: k,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, r.jsx)(df, { projectId: t }),
                          ],
                      }),
                      A,
                  )
                : null,
        ],
    });
}
var dj = n(399503),
    db = n(853555),
    dy = n(558960),
    dk = n(187645);
let dw = new Map(),
    dA = !1;
function dN() {
    let e = new Map();
    for (let t of new Set([...eh.Ay.getActivityOrderedProjectIds(), ...(0, th.T7)()])) {
        if (!eh.Ay.isThinking(t) && !(0, th.wK)(t)) continue;
        let n = (function (e) {
            let t = ej.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = (0, tp.Rc)(t);
            return (0, tE.x1)(n) ? n.id : null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, a] of [...dw]) {
        var t, n;
        e.get(l) !== a.frameId &&
            ((t = l),
            (n = a),
            dw.delete(t),
            n.unregisterLookup(),
            dy.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove());
    }
    for (let [t, n] of e)
        dw.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = dk.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    dC(n),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (dw.set(e, l),
                    (l.unregisterLookup = (0, db.Ng)(e, () => (0, cA.o)(n, t))),
                    dy.A.registerFrameTarget(t, n, cM.A.Backstage, void 0));
            })(t, n);
    for (let e of dw.values()) dC(e.element);
}
function dC(e) {
    let t = tm.A.isBuilderPreviewMobile();
    e.classList.toggle(dk.L, !t);
    let n = t ? cL(tm.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != n ? `${n.width}px` : ""), (e.style.height = null != n ? `${n.height}px` : ""));
}
var dS = n(873727),
    dE = n(147248),
    dI = n(418842),
    dM = n(363195),
    d_ = n(818023);
let dT = null;
var dP = n(602853),
    dR = n(517461),
    dL = n(761929),
    d$ = n(487336);
function dD(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: a } = e,
        s = (0, dP.r)(L.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = i.useRef(null),
        [u, c] = (0, dR.V)("VibegrationsChatSidebarWidth", 460),
        [d, m] = i.useState(u ?? 460),
        f = (0, au.clamp)(d, 360, n);
    i.useLayoutEffect(() => {
        l(t ? f + s : 0);
    }, [f, t, s, l]);
    let h = (0, dL.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: m,
            onElementResizeEnd: c,
            orientation: dL.R.HORIZONTAL_LEFT,
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
        className: d$.pz,
        hidden: !t,
        children: [
            (0, r.jsx)("div", { className: d$.Di, onPointerDown: g }),
            (0, r.jsx)("div", { ref: o, className: d$.kL, style: { width: f }, children: a }),
        ],
    });
}
var dO = n(541940);
function dF(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: a,
            surface: s,
            header: u,
            mainClassName: c,
            content: m,
            sidebar: f,
            showsFrame: h,
        } = e,
        [g, x] = i.useState(null),
        p = (0, z.A)(l, s),
        v = p?.id ?? null;
    (!(function (e, t) {
        let n = (0, d.bG)([dM.A], () => (0, dS.x4)(dM.A.theme)),
            l = (0, d.bG)([dE.A], () => dE.A.gradientPreset),
            {
                reducedMotion: a,
                fontScale: r,
                highContrast: s,
                forcedColors: o,
                underlineLinks: u,
            } = (0, d.cf)([iM.Ay], () => ({
                reducedMotion: iM.Ay.useReducedMotion,
                fontScale: (0, dS.U0)(),
                highContrast: iM.Ay.isHighContrastModeEnabled,
                forcedColors: iM.Ay.useForcedColors,
                underlineLinks: iM.Ay.alwaysShowLinkDecorations,
            })),
            c = eq.hH.useSetting(),
            m = (0, dI.C)(),
            f = i.useRef(!1),
            h = i.useRef(!1),
            g = i.useRef(0),
            x = i.useRef(null),
            p = i.useCallback(() => {
                let l = (0, cA.o)(e, t);
                if (null == l) return;
                x.current = l;
                let i = {
                    revision: ++g.current,
                    baseTheme: n,
                    customTheme: (0, dS.Lq)(),
                    uiDensity: m,
                    messageDisplayCompact: c,
                    fontScale: r,
                    reducedMotion: a,
                    highContrast: s,
                    forcedColors: o,
                    underlineLinks: u,
                };
                (0, cn.W)(l, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, o, r, t, s, c, e, a, m, u]),
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
            }, [l, j]),
            i.useLayoutEffect(() => {
                (p(), j());
            }, [j, p]),
            i.useLayoutEffect(() => {
                let n = (0, cA.o)(e, t);
                null != n && n !== x.current && j();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, cA.o)(e, t) && ((x.current = null), j());
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
    })(g, v),
        i.useEffect(() => {
            if (null != t) return (0, db.Ng)(t, () => (0, cA.o)(g, v));
        }, [t, g, v]));
    let j = i.useCallback(() => (0, cA.o)(g, v), [g, v]),
        b = i.useCallback(() => (h ? (0, cA.o)(g, v) : g), [h, g, v]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: o()(dO.Mh, c),
                children: [
                    u,
                    (0, r.jsx)(dv, {
                        projectId: t ?? null,
                        applicationId: l,
                        previewApplicationId: a,
                        resolveTarget: b,
                        frameId: v,
                    }),
                    (0, r.jsx)("div", { ref: x, className: dO.fm, children: m }),
                ],
            }),
            f,
            (0, r.jsx)(cd, {
                projectId: t ?? null,
                applicationId: l,
                previewApplicationId: a,
                resolveIframe: j,
                toggleRef: n,
            }),
        ],
    });
}
function dz(e) {
    let {
        projectId: t,
        designFeedbackToggleRef: n,
        applicationId: l,
        previewApplicationId: a,
        surface: s,
        frameLaunchParams: u,
        header: c,
        chatOpen: m,
        onCloseChat: f,
        chatHeaderAction: h,
        onRestoreVersion: g,
        onImportProject: x,
        debugOpen: p = !1,
        onCloseDebug: v,
        restoreState: j,
        previewReady: b,
        previewGate: y,
        availability: k,
        activeMode: w,
        widgetApplicationId: A,
        overlayWidgetSize: N,
    } = e;
    (0, dj.k)(t, A);
    let C = s.type === tv.U.MAIN || (0, tp.Q5)(s);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, d.cf)([tm.A], () => ({
            mobile: tm.A.isBuilderPreviewMobile(),
            landscape: tm.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? d_.aX.LANDSCAPE : d_.aX.PORTRAIT), (dT = e));
                else {
                    if (dT !== e) return;
                    ((l = d_.aX.UNHANDLED), (dT = null));
                }
                lF.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(C ? l : null);
    let S = i.useRef(null),
        [E, I] = i.useState(0);
    (i.useEffect(() => {
        if (null == t) return;
        (0, J.TP)(t);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, J.TP)(t);
        }, 3e3);
        return () => clearInterval(e);
    }, [t]),
        i.useLayoutEffect(() => {
            if (C) return ((0, ev.HV)(l), () => (0, ev.HV)(null));
        }, [l, C]),
        i.useEffect(() => {
            null != t &&
                ((0, J.Hc)(t),
                dA ||
                    ((dA = !0),
                    eh.Ay.addChangeListener(dN),
                    ej.Ay.addChangeListener(dN),
                    tT.A.addChangeListener(dN),
                    tm.A.addChangeListener(dN),
                    (0, th.W3)(dN),
                    dN()));
        }, [t]),
        i.useLayoutEffect(() => {
            let e = S.current;
            if (null == e) return;
            function t() {
                null != e && I(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return (n.observe(e), () => n.disconnect());
        }, []),
        i.useLayoutEffect(() => () => (0, ev.Zq)(0), []));
    let M = Math.max(360, E - 320),
        _ = m || C;
    return (0, r.jsx)("div", {
        ref: S,
        className: dO.LB,
        children: (0, r.jsx)(dF, {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: a,
            surface: s,
            header: c,
            showsFrame: (0, tx.yf)(k, w),
            mainClassName: null == c ? void 0 : o()(dO.ez, { [dO.zt]: m }),
            content: (0, r.jsx)(di, {
                applicationId: l,
                previewApplicationId: a,
                surface: s,
                frameLaunchParams: u,
                previewReady: b,
                previewGate: y,
                availability: k,
                activeMode: w,
                widgetApplicationId: A,
                overlayWidgetSize: N,
                projectId: t,
                frameOverlay: (0, r.jsx)(cI, { projectId: t, applicationId: l, previewApplicationId: a, surface: s }),
            }),
            sidebar:
                null != t && _
                    ? (0, r.jsx)(dD, {
                          open: m,
                          maxWidth: M,
                          onWidthChange: ev.Zq,
                          children: (0, r.jsx)("div", {
                              className: dO.cO,
                              children: p
                                  ? (0, r.jsx)(u2, { projectId: t, onClose: v ?? (() => {}) }, t)
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(cj.A, { projectId: t }),
                                            (0, r.jsx)(nK.Ay, {
                                                "aria-label": el.intl.string(el.t["/VQax8"]),
                                                toolbar: (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        h,
                                                        null == f
                                                            ? null
                                                            : (0, r.jsx)(nK.Ay.Icon, {
                                                                  icon: P.P,
                                                                  tooltip: el.intl.string(en.default.JD6Oit),
                                                                  onClick: f,
                                                              }),
                                                    ],
                                                }),
                                                children: (0, r.jsx)(nK.Ay.Title, {
                                                    children: el.intl.string(el.t["/VQax8"]),
                                                }),
                                            }),
                                            (0, r.jsx)("div", {
                                                className: dO.cb,
                                                children: (0, r.jsx)(
                                                    of,
                                                    {
                                                        projectId: t,
                                                        restoreState: j,
                                                        onRestoreVersion: g,
                                                        onImportProject: x,
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
var dq = n(631417);
function dG(e) {
    let { title: t, actions: n, breadcrumb: l, project: a, onOpenProjectSettings: i } = e,
        s = el.intl.string(en.default.FzfmQ8);
    return (0, r.jsx)(q.A, {
        hideSearch: !0,
        toolbar: n,
        className: dq.wx,
        "aria-label": t,
        children: (0, r.jsxs)("div", {
            className: dq.QF,
            children: [
                (0, r.jsx)(R.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: L.A.colors.TEXT_STRONG,
                    className: dq.Kk,
                }),
                null != l
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(q.A.Title, { onClick: l.onClick, children: l.title }),
                              (0, r.jsx)(q.A.Caret, {}),
                          ],
                      })
                    : null,
                null != a && null != i
                    ? (0, r.jsx)(y.m, {
                          asContainer: !0,
                          text: s,
                          position: "bottom",
                          children: (0, r.jsx)(b.D, {
                              className: dq.FF,
                              onClick: i,
                              "aria-label": s,
                              children: (0, r.jsx)(nb.A, { project: a, size: "header" }),
                          }),
                      })
                    : null,
                (0, r.jsx)(q.A.Title, { className: dq.Qw, wrapperClassName: dq.DD, children: t }),
            ],
        }),
    });
}
var dU = n(47167),
    dB = n(808728);
let dH = "conjuring-help";
var dV = n(173114);
function dK() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: n,
            } = (0, d.cf)([tW.default, B.A, dB.Ay, sg.A], () => {
                let e = tW.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of B.A.getGuildsArray()) {
                    if (!t.features.has(em.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let n = dB.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, dU.m1)(t, tW.default, sg.A) === dH;
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
                    ? (0, G.pX)(em.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, na.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, r.jsx)("div", {
              className: dV.l,
              children: (0, r.jsx)(nX.w, {
                  type: "info",
                  iconAlign: "center",
                  message: el.intl.format(en.default["6anmu1"], { channel: dH, onNavigate: t }),
                  role: "static",
              }),
          });
}
var dW = n(606128),
    dX = n(323140);
function dY() {
    return (0, r.jsx)(f.y, { type: f.t.SPINNING_CIRCLE_SIMPLE, className: dX.Hv, itemClassName: dX.C5 });
}
function dJ(e) {
    return (0, r.jsx)(h.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function dQ(e) {
    return (0, r.jsx)(g.u, { ...e, size: "custom", width: 20, height: 20 });
}
function dZ(e) {
    return (0, r.jsx)(x.k, { ...e, size: "custom", width: 20, height: 20 });
}
function d0(e) {
    return (0, r.jsx)(p.H, { ...e, size: "custom", width: 20, height: 20 });
}
let d1 = {
    showPublishBlocked: function (e, t, n) {
        (0, e5.openModal)((l) => (0, r.jsx)(nU, { ...l, reason: e, message: t, onConfirm: n }));
    },
    promptFirstPublish: (e) =>
        new Promise((t) => {
            let n = !1;
            (0, e5.openModal)(
                (t) =>
                    (0, r.jsx)(nq, {
                        ...t,
                        ...e,
                        onDone: () => {
                            n = !0;
                        },
                    }),
                { onCloseCallback: () => t(n) },
            );
        }),
    openPublishNotes: nB.A,
    showError: (e) => (0, v.P0)({ text: e, variant: "critical" }),
};
function d2(e) {
    var t;
    let n,
        l,
        a,
        s,
        u,
        h,
        g,
        x,
        p,
        w,
        { project: A, guildId: N, onSelect: C, onRemix: S, shared: E = !1 } = e,
        I =
            ((n = A.id),
            (l = A.name),
            (a = i.useRef(!1)),
            (s = i.useCallback(() => {
                a.current ||
                    ((a.current = !0),
                    (0, v.P0)({ text: el.intl.formatToPlainString(en.default.aN2JdD, { name: l }) }),
                    ei(n, l)
                        .catch((e) => {
                            let t;
                            (console.error("[vibegrations] project export failed", n, e),
                                (0, v.P0)({
                                    text:
                                        409 === (t = e instanceof J.xE ? e.status : null)
                                            ? el.intl.string(en.default["9oqbEw"])
                                            : 404 === t
                                              ? el.intl.string(en.default["0W8uLq"])
                                              : el.intl.string(en.default.N8753A),
                                    variant: "critical",
                                }));
                        })
                        .finally(() => {
                            a.current = !1;
                        }));
            }, [n, l])),
            {
                onExport: s,
                onImport: (u = es(
                    i.useCallback(
                        (e) => {
                            let t = er(e);
                            null != t
                                ? (0, v.P0)({ text: t, variant: "critical" })
                                : (0, m.A)({
                                      title: el.intl.formatToPlainString(en.default["Gm+u1+"], { name: l }),
                                      subtitle: el.intl.string(en.default.M7H3sJ),
                                      confirmText: el.intl.string(en.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, G.pX)(em.BVt.CHANNEL(N, ef.VV.CONJURE, n));
                                          try {
                                              await ea(n, e, el.intl.string(en.default.Owerd3));
                                          } catch {
                                              (0, v.P0)({
                                                  text: el.intl.string(en.default["Q+l4Hv"]),
                                                  variant: "critical",
                                              });
                                          }
                                      },
                                  });
                        },
                        [n, l, N],
                    ),
                )).open,
                importInput: u.input,
            }),
        M =
            null == A.updated_at
                ? null
                : el.intl.formatToPlainString(en.default.AXydi3, { time: c()(A.updated_at).fromNow() }),
        _ = (0, tV.wu)(A),
        T =
            (0, d.bG)([B.A], () => (null == _ ? null : (B.A.getGuild(_)?.name ?? null)), [_]) ??
            el.intl.string(en.default["3QFps8"]),
        P = (0, d.bG)([ej.Ay], () => ej.Ay.isProjectDeleting(A.id), [A.id]),
        R =
            ((t = E ? A : null),
            (h = t?.id),
            (g = t?.owner_user_id),
            (x = (0, d.yK)(
                [eh.Ay],
                () =>
                    null == h
                        ? []
                        : [
                              ...new Set(
                                  eh.Ay.getMessages(h)
                                      .flatMap((e) => (null != e.user_id && e.user_id !== g ? [e.user_id] : []))
                                      .reverse(),
                              ),
                          ],
                [h, g],
            )),
            i.useEffect(() => {
                null != g && (t0(g), x.forEach(t0));
            }, [g, x]),
            (p = (0, d.bG)([tW.default], () => (null == g ? null : tW.default.getUser(g)), [g])),
            (w = (0, d.yK)([tW.default], () => x.map((e) => tW.default.getUser(e)).filter((e) => null != e), [x])),
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
                                      ? el.intl.formatToPlainString(en.default.t5RWBS, { creator: e })
                                      : el.intl.formatToPlainString(en.default["b5uCe/"], {
                                            creator: e,
                                            collaborators:
                                                0 === (n = void 0 ?? t.length)
                                                    ? ""
                                                    : 1 === n
                                                      ? el.intl.formatToPlainString(el.t["8s9z8P"], { first: t[0] })
                                                      : 2 === n
                                                        ? el.intl.formatToPlainString(el.t["i0K/dw"], {
                                                              first: t[0],
                                                              second: t[1],
                                                          })
                                                        : 3 === n
                                                          ? el.intl.formatToPlainString(el.t["/KSOKY"], {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                            })
                                                          : el.intl.formatToPlainString(el.t.xpU76u, {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                                count: n - 3,
                                                            }),
                                        });
                              })(
                                  (0, tX.mG)(p),
                                  w.map((e) => (0, tX.mG)(e)),
                              ),
                          },
                [p, w],
            )),
        L = i.useId(),
        D = (0, r.jsx)(j.E, { variant: "text-md/semibold", color: "text-strong", className: dX.j1, children: A.name }),
        O = {
            projectId: A.id,
            projectName: A.name,
            guildId: N,
            projectGuildId: A.guild_id,
            isOwner: (0, ej.PV)(A),
            canRemix: (0, ej.H_)(A),
            onRemix: S,
            onExport: I.onExport,
            onImport: I.onImport,
        };
    return (0, r.jsxs)("div", {
        className: o()(dX.OY, { [dX.Wy]: P }),
        "aria-busy": P,
        children: [
            (0, r.jsx)(e8.Ay, { projectId: A.id }),
            P ? null : (0, r.jsx)(nA.a, { projectId: A.id }),
            (0, r.jsxs)(b.D, {
                className: dX.W6,
                onClick: P ? void 0 : C,
                onContextMenu: function (e) {
                    P || (0, $.jA)(e, () => (0, r.jsx)(nv, { ...O, onCloseMenu: $.Z_ }));
                },
                tabIndex: P ? -1 : void 0,
                "aria-describedby": null != R ? L : void 0,
                children: [
                    (0, r.jsx)(nb.A, { project: A, size: "card", className: dX.VJ }),
                    (0, r.jsxs)("div", {
                        className: dX.MM,
                        children: [
                            (0, r.jsxs)("div", {
                                className: dX.Ub,
                                children: [
                                    null != R ? (0, r.jsx)(y.m, { text: R.label, ariaHidden: !0, children: D }) : D,
                                    null == R || P ? null : (0, r.jsx)(nw, { creator: R, className: dX.rb }),
                                    P ? null : (0, r.jsx)(nA.n, { projectId: A.id, className: dX.fs }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: dX.h3,
                                children: [
                                    (0, r.jsx)(j.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: dX.Wb,
                                        children: P ? el.intl.string(en.default.Yh5pAc) : T,
                                    }),
                                    null == M || P
                                        ? null
                                        : (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)("span", {
                                                      className: dX.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, r.jsx)(j.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: dX.zM,
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
            null != R ? (0, r.jsx)(k.A, { id: L, children: R.label }) : null,
            (0, r.jsx)("div", {
                className: dX.M2,
                children: P
                    ? (0, r.jsx)(f.y, { type: f.t.SPINNING_CIRCLE_SIMPLE })
                    : (0, r.jsxs)("div", {
                          className: dX.Pl,
                          children: [(0, r.jsx)(nj, { ...O, trigger: "iconButton" }), I.importInput],
                      }),
            }),
        ],
    });
}
function d3(e) {
    var t;
    let l,
        { project: a, projectsLoaded: s, onBack: u, guildId: c } = e,
        [f, h] = i.useState(!0),
        [g, x] = i.useState(!1),
        p = eG(),
        [b, k] = i.useState(null),
        [I, M] = i.useState(null),
        _ = a?.id ?? null,
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
    let $ = (0, d.bG)([ej.Ay], () => (null == _ ? null : ej.Ay.getIntegrationStatus(_)), [_]),
        { data: D, isLoading: U } = (0, O.YY)(a?.preview_application_id ?? void 0),
        B = null != _ && I !== _,
        H = $?.preview_ready === !0,
        K = $?.has_activity === !0,
        W = (0, d.bG)([ej.Ay], () => (null == _ ? void 0 : ej.Ay.getPublishStatus(_)?.previewAppChannels), [_]),
        {
            availability: X,
            activeMode: Y,
            setMode: Q,
            frameSurface: Z,
            frameSurfaceOptions: ee,
            setFrameSurface: et,
            appChannel: ei,
            setAppChannel: eo,
            frameLaunchParams: eu,
            widgetApplicationId: ec,
        } = (function (e) {
            var t, n, l;
            let {
                    applicationId: a,
                    previewApplicationId: r,
                    declaredActivity: s,
                    previewSupportedSurfaces: o,
                    installScope: u,
                    ownerAuthorizationRevoked: c,
                    mainCardOnly: m = !1,
                    supportsOverlay: f = !1,
                    previewAppChannels: h = tI,
                } = e,
                [g, x] = i.useState(null),
                [p, v] = i.useState(null),
                [j, b] = i.useState(null),
                [y, k] = i.useState(a);
            y !== a && (k(a), x(null), v(null), b(null));
            let w = null != r && r === a ? r : null,
                A = (0, d.bG)([tC.default], () => tC.default.getId()),
                { applicationWidgetConfig: N } = (0, tw.A)(A, w ?? void 0),
                C = N?.surfaces,
                S = (0, tx.yZ)({
                    widgetTop: C?.[tk.m.WIDGET_TOP] != null,
                    widgetBottom: C?.[tk.m.WIDGET_BOTTOM] != null,
                    miniProfile: C?.[tk.m.MINI_PROFILE] != null,
                }),
                E = null != w && (m ? S.hasMainCard : S.hasAny),
                { data: I } = (0, O.YY)(r ?? void 0),
                M = null != r && I?.bot?.id != null,
                { data: _, isLoading: T } = (0, O.YY)(a ?? void 0),
                P = s || (0, tN.X)(_),
                R = null != a && T && null == _,
                L = (0, tx.P5)(o, {
                    legacy: { hasFrame: P, hasProfileWidget: E, hasBotDm: M },
                    widgetResolvable: null != w,
                    botDmResolvable: M,
                }),
                $ = (0, tx.Xm)({ installScope: u, ...L, hasOverlay: f, ownerAuthorizationRevoked: c }),
                D = i.useMemo(() => (0, tS.hR)(o), [o]),
                F = (0, tS.PH)(p, D),
                z =
                    ((t = j),
                    (n = F),
                    (l = h),
                    n !== tv.U.APP_CHANNEL || l.length < 2 ? null : null != t && l.includes(t) ? t : l[0]),
                q = i.useMemo(() => (null == z ? void 0 : { customId: z }), [z]);
            return (
                i.useEffect(() => {
                    if (null != a)
                        for (let e of (0, tp.Mm)(a)) {
                            let t = e.surface.type !== (0, tS.BR)(F),
                                n = (((0, tE.x1)(e) ? e.data.launch.customId : e.launch?.customId) ?? null) !== z;
                            (t || n) && (0, tA.r)(e.id);
                        }
                }, [a, F, z]),
                {
                    availability: $,
                    isResolving: R,
                    activeMode: R ? null : (0, tx.Qs)(g, $),
                    setMode: x,
                    frameSurface: F,
                    frameSurfaceOptions: D,
                    setFrameSurface: v,
                    appChannel: z,
                    setAppChannel: b,
                    frameLaunchParams: q,
                    widgetApplicationId: w,
                }
            );
        })({
            applicationId: a?.preview_application_id ?? null,
            previewApplicationId: a?.preview_application_id ?? null,
            declaredActivity: K,
            previewSupportedSurfaces: a?.preview_supported_surfaces,
            installScope: a?.install_scope ?? null,
            ownerAuthorizationRevoked: $?.owner_authorization_revoked === !0,
            supportsOverlay: a?.preview_supported_surfaces?.includes(V.q7.OVERLAY) === !0,
            previewAppChannels: W,
        }),
        ed =
            ((t = (0, d.bG)(
                [eh.Ay],
                () =>
                    null == _
                        ? null
                        : (function (e) {
                              for (let t = e.length - 1; t >= 0; t--) {
                                  let n = e[t].proposal?.overlay_widget;
                                  if (null != n) return n;
                              }
                              return null;
                          })(eh.Ay.getMessages(_)),
                [_],
            )),
            null != (l = t?.default_size) &&
            Number.isFinite(l.width) &&
            Number.isFinite(l.height) &&
            l.width > 0 &&
            l.height > 0
                ? l
                : tf);
    ((0, tg.x)(_, (e) => {
        X.modes.includes(e) && Q(e);
    }),
        ez(_, () => {
            (h(!0), x(!0));
        }));
    let eg = X.modes.includes("frame"),
        ex = i.useMemo(
            () =>
                (function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    return e.flatMap((e) =>
                        "frame" === e
                            ? t.flatMap((t) =>
                                  t === tv.U.APP_CHANNEL && n.length > 1
                                      ? n.map((n) => ({ mode: e, surface: t, appChannel: n }))
                                      : [{ mode: e, surface: t }],
                              )
                            : [{ mode: e }],
                    );
                })(X.modes, ee, W),
            [X.modes, ee, W],
        ),
        ep = i.useCallback(
            (e) => {
                ("frame" === e.mode && (et(e.surface), null != e.appChannel && eo?.(e.appChannel)), Q(e.mode));
            },
            [eo, et, Q],
        ),
        eb = (0, tx.Qg)({
            installScope: a?.install_scope ?? null,
            previewReady: H,
            integrationInstalled: $?.integration_installed ?? null,
            botPermissionsChanged: $?.bot_permissions_changed === !0,
        }),
        ey = f && !g,
        ek = el.intl.string(ey ? en.default.JD6Oit : en.default.xjJAQm),
        ew = i.useCallback(() => {
            if (g) {
                (x(!1), h(!0));
                return;
            }
            h((e) => !e);
        }, [g]),
        eA = i.useCallback(() => h(!1), []),
        { active: eN } = e6(_);
    i.useEffect(() => {
        null != _ && eN && !eg && e2(_);
    }, [_, eN, eg]);
    let eC = i.useRef(null),
        eS = (0, th.Zv)(_),
        eE = el.intl.string(eS ? en.default.Sme0T0 : eN ? en.default.vn5Rzu : en.default["cl/Jyl"]),
        eI = i.useCallback(() => {
            if (null != _) {
                let e;
                if (eN) return void e2(_);
                (x(!1), h(!0), (e = e0(_)).active || e1(_, { ...e, active: !0 }));
            }
        }, [_, eN]),
        eM = i.useCallback(() => {
            x((e) => !e && (h(!0), !0));
        }, []),
        e_ = i.useCallback(() => x(!1), []),
        eT = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (null == a || R.current) return;
                let l = a.id;
                function r() {
                    return P.current && T.current === l;
                }
                ((R.current = !0),
                    x(!1),
                    h(!0),
                    k({ entry: e, status: "restoring" }),
                    (0, J.oB)(l, e.sha)
                        .then(
                            async () => {
                                if (
                                    (n &&
                                        r() &&
                                        (0, v.P0)({
                                            text: el.intl.formatToPlainString(en.default.Z4n6LX, {
                                                title: (0, e9.T4)(e.subject).short,
                                            }),
                                            variant: "success",
                                        }),
                                    null != t)
                                ) {
                                    let e = await (0, te.c)(l, t);
                                    null != e && (0, v.P0)({ text: e, variant: "critical" });
                                }
                                r() && k({ entry: e, status: "restored" });
                            },
                            (t) => {
                                r() &&
                                    (k({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", l, t),
                                    (0, v.P0)({ text: el.intl.string(en.default["PSdo+w"]), variant: "critical" }));
                            },
                        )
                        .finally(() => {
                            r() && (R.current = !1);
                        }));
            },
            [a],
        ),
        eP = (0, d.bG)([tm.A], () => tm.A.isBuilderPreviewMobile()),
        eR = el.intl.string(eP ? en.default.tKGF0Q : en.default.peqEOY),
        eL = i.useCallback(() => (0, ev.GG)(!eP), [eP]),
        e$ = (0, d.bG)([tm.A], () => tm.A.isBuilderPreviewLandscape()),
        eD = el.intl.string(e$ ? en.default.tunI2l : en.default.DoNdjA),
        eO = i.useCallback(() => (0, ev.Lw)(!e$), [e$]),
        eF = (0, tp.jS)(a),
        eq = i.useMemo(() => (0, tp.Op)(eF, Z), [eF, Z]),
        eU = (0, z.A)(a?.preview_application_id ?? null, eq),
        eB = (0, tE.x1)(eU) && eU.data.proxyTicketRefreshing,
        eH = i.useCallback(() => {
            null == eU || eB || F.A.refreshProxyTicket(eU.id);
        }, [eU, eB]),
        eV = i.useCallback(() => {
            var e, t;
            (null != a && ((e = a.id), (t = eU?.id), (0, J.Bn)(e), (0, tA.r)(t)), u());
        }, [a, eU?.id, u]),
        eK = i.useCallback(() => {
            null != a && (h(!0), (0, J.dv)(a.id, el.intl.string(en.default.oU20rd)));
        }, [a]),
        eW = es(
            i.useCallback(
                (e) => {
                    if (null == a) return;
                    let t = a.id,
                        n = er(e);
                    null != n
                        ? (0, v.P0)({ text: n, variant: "critical" })
                        : (0, m.A)({
                              title: el.intl.formatToPlainString(en.default["Gm+u1+"], { name: a.name }),
                              subtitle: el.intl.string(en.default.M7H3sJ),
                              confirmText: el.intl.string(en.default.gFHykw),
                              variant: "critical",
                              onConfirm: async () => {
                                  h(!0);
                                  try {
                                      await ea(t, e, el.intl.string(en.default.Owerd3));
                                  } catch {
                                      (0, v.P0)({ text: el.intl.string(en.default["Q+l4Hv"]), variant: "critical" });
                                  }
                              },
                          });
                },
                [a],
            ),
        ),
        eX = i.useCallback(() => {
            null != a && (0, nH.A)(a, c);
        }, [a, c]),
        eY = i.useCallback(async () => {
            if (null == _ || T.current !== _) return;
            L.current?.abort();
            let e = new AbortController();
            ((L.current = e), M(null));
            try {
                await (0, ev.U1)(_, e.signal);
            } catch {
            } finally {
                e.signal.aborted || L.current !== e || T.current !== _ || M(_);
            }
        }, [_]);
    i.useEffect(
        () => (
            eY(),
            () => {
                (L.current?.abort(), (L.current = null));
            }
        ),
        [eY],
    );
    let eJ = (0, n$.a)(a ?? null, $ ?? null, c),
        eQ = i.useCallback(async () => {
            null != a && (await (0, n$.$)(a, eJ));
        }, [eJ, a]),
        eZ = i.useCallback(async () => {
            try {
                await eQ();
            } catch {}
            await eY();
        }, [eY, eQ]),
        e3 = i.useMemo(() => {
            let e = a?.preview_application_id;
            return null == e || U || B
                ? null
                : {
                      ...(0, tH.i)({ applicationId: e, application: D ?? null, guildId: eJ }),
                      onClose: () => {
                          eZ();
                      },
                  };
        }, [B, eZ, eJ, U, D, a?.preview_application_id]),
        e7 = (0, tx.JR)(Y, eb)
            ? { type: "permissions", authorizeProps: e3 }
            : B && null == $
              ? { type: "checking" }
              : void 0,
        e4 = (0, d.bG)([ej.Ay], () => null != _ && ej.Ay.isProjectDeleting(_), [_]);
    i.useEffect(() => {
        ((null == a && s) || e4) && (0, G.bG)(em.BVt.CHANNEL(c, ef.VV.CONJURE));
    }, [c, a, s, e4]);
    let [e8, tt] = i.useState(null),
        tn = i.useRef(null),
        tl = i.useCallback(() => {
            (null != tn.current && window.clearTimeout(tn.current), (tn.current = null));
        }, []);
    i.useEffect(() => tl, [tl]);
    let ta = i.useMemo(
            () => ({
                ...d1,
                showConfirmation: (e) => {
                    (tl(),
                        tt(e),
                        (tn.current = window.setTimeout(() => {
                            ((tn.current = null), tt(null));
                        }, 1500)));
                },
            }),
            [tl],
        ),
        tr = i.useMemo(() => ({ guildId: c, platform: ta, busy: B || U }), [c, ta, B, U]),
        ti = (0, ni.Ay)(_, tr),
        ts = ti?.publishing === !0;
    i.useEffect(() => {
        ts && (tl(), tt(null));
    }, [ts, tl]);
    let to = ts ? null : e8,
        tu = (0, nD.L)(ti?.status ?? null),
        tc =
            null == ti
                ? null
                : (0, r.jsx)("div", {
                      className: dX.As,
                      children: (0, r.jsx)(y.m, {
                          text: tu,
                          asContainer: !0,
                          children: (0, r.jsx)(w.$, {
                              size: "sm",
                              variant: "primary",
                              icon: ts ? dY : null != to ? A.U : void 0,
                              disabled: ti.disabled,
                              onClick: () => ti.run("header"),
                              text: to ?? ti.label,
                          }),
                      }),
                  }),
        td = null == a ? void 0 : () => (0, ns.A)(a.id, { guildId: c, isPreview: !0, publishOptions: tr }),
        tj = (0, r.jsx)(dG, {
            title: a?.name ?? el.intl.string(en.default.G1WwgK),
            breadcrumb: { title: el.intl.string(en.default.uk6jhJ), onClick: u },
            project: a,
            onOpenProjectSettings: td,
            actions:
                null == a
                    ? null
                    : (0, r.jsxs)("div", {
                          className: dX.FO,
                          children: [
                              (0, r.jsx)(tB, {
                                  targets: ex,
                                  target: (function (e, t) {
                                      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                                      return null == e
                                          ? null
                                          : "frame" !== e
                                            ? { mode: e }
                                            : null == n
                                              ? { mode: e, surface: t }
                                              : { mode: e, surface: t, appChannel: n };
                                  })(Y, Z, ei),
                                  onChange: ep,
                              }),
                              eg
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            "overlay" === Y
                                                ? null
                                                : (0, r.jsx)(q.A.Icon, {
                                                      icon: eP ? dZ : dQ,
                                                      tooltip: eR,
                                                      "aria-label": eR,
                                                      selected: eP,
                                                      onClick: eL,
                                                  }),
                                            eP && "overlay" !== Y
                                                ? (0, r.jsx)(q.A.Icon, {
                                                      icon: d0,
                                                      tooltip: eD,
                                                      "aria-label": eD,
                                                      selected: e$,
                                                      onClick: eO,
                                                  })
                                                : null,
                                            (0, r.jsx)(q.A.Icon, {
                                                ref: eC,
                                                icon: N.x,
                                                iconClassName: dX.D8,
                                                tooltip: eE,
                                                "aria-label": eE,
                                                selected: eN,
                                                disabled: eS,
                                                onClick: eI,
                                            }),
                                        ],
                                    })
                                  : null,
                              "frame" === Y ? (0, r.jsx)(tz, { frame: eU, controlProjectId: a.id }) : null,
                              (0, r.jsx)("div", { className: dX.YJ }),
                              p
                                  ? (0, r.jsx)(q.A.Icon, {
                                        icon: C.BugIcon,
                                        tooltip: el.intl.string(en.default.Mt5k9d),
                                        "aria-label": el.intl.string(en.default.Mt5k9d),
                                        selected: g,
                                        onClick: eM,
                                    })
                                  : null,
                              (0, r.jsx)(q.A.Icon, {
                                  icon: S.SettingsIcon,
                                  tooltip: el.intl.string(en.default.I2XSKe),
                                  "aria-label": el.intl.string(en.default.I2XSKe),
                                  onClick: td,
                              }),
                              (0, r.jsx)(nj, {
                                  projectId: a.id,
                                  projectName: a.name,
                                  guildId: c,
                                  projectGuildId: a.guild_id,
                                  isOwner: (0, ej.PV)(a),
                                  canRemix: (0, ej.H_)(a),
                                  onRefresh: (0, tE.x1)(eU) ? eH : void 0,
                                  isRefreshing: eB,
                                  onClose: eV,
                                  onExport: eK,
                                  onImport: eW.open,
                                  onRemix: eX,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = a.id),
                                          void (0, e5.openModalLazy)(async () => {
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
                                              projectId: a.id,
                                              installScope: a.install_scope,
                                              restoreDisabled: b?.status === "restoring",
                                              onRestoreVersion: (e, t) => eT(e, t, !0),
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
                                              return (n) => (0, r.jsx)(t, { ...n, ...e });
                                          })
                                      );
                                  },
                                  refreshApplicationId:
                                      X.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== X.profileState
                                          ? ec
                                          : null,
                                  previewProjectId: a.id,
                              }),
                              ey
                                  ? null
                                  : (0, r.jsx)(q.A.Icon, { icon: dJ, tooltip: ek, "aria-label": ek, onClick: ew }),
                          ],
                      }),
        });
    return (0, r.jsxs)("div", {
        className: o()(dX.nj, dW.T),
        children: [
            eW.input,
            (0, r.jsx)("main", {
                className: dX.JX,
                children:
                    null == a
                        ? (0, r.jsxs)("div", {
                              className: dX.j5,
                              children: [
                                  tj,
                                  (0, r.jsxs)("div", {
                                      className: dX.sD,
                                      children: [
                                          (0, r.jsx)(E.D, {
                                              variant: "heading-lg/semibold",
                                              children: el.intl.string(en.default.G1WwgK),
                                          }),
                                          (0, r.jsx)(j.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: el.intl.string(en.default.fINulo),
                                          }),
                                          (0, r.jsx)(w.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: el.intl.string(en.default["WFJ/vb"]),
                                              onClick: () => (0, ev.hF)(c),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, r.jsx)(ni.bI.Provider, {
                              value: tr,
                              children: (0, r.jsx)(
                                  dz,
                                  {
                                      projectId: a.id,
                                      designFeedbackToggleRef: eC,
                                      applicationId: a.preview_application_id,
                                      previewApplicationId: a.preview_application_id,
                                      surface: eq,
                                      frameLaunchParams: eu,
                                      header: tj,
                                      chatOpen: f,
                                      onCloseChat: eA,
                                      chatHeaderAction: tc,
                                      debugOpen: p && g,
                                      onCloseDebug: e_,
                                      onRestoreVersion: eT,
                                      onImportProject: (0, ej.PV)(a) ? eW.open : void 0,
                                      restoreState: b,
                                      previewReady: H,
                                      previewGate: e7,
                                      availability: X,
                                      activeMode: Y,
                                      widgetApplicationId: ec,
                                      overlayWidgetSize: ed,
                                  },
                                  a.id,
                              ),
                          }),
            }),
        ],
    });
}
function d7(e) {
    let {
            projects: t,
            idea: l,
            guildId: a,
            submitting: s,
            createError: u,
            createDisabled: c,
            conjureTarget: m,
            onConjureTargetChange: h,
            eligibleGuilds: g,
            modelSettings: x,
            onModelSettingsChange: p,
            onSelectProject: b,
            onIdeaChange: y,
            onCreate: k,
            onCreateFromTemplate: A,
            onStartTemplate: N,
            onSubmitTemplate: C,
            onCancelTemplate: S,
            onSkipTemplate: E,
            onImportNewProject: $,
            importing: D,
        } = e,
        [O, F] = i.useState(() => ({ guildId: a, filter: nI(a) })),
        z = (O.guildId === a ? O.filter : nI(a)) ?? a,
        G = i.useCallback(
            (e) => {
                (nE.set(a, e), F({ guildId: a, filter: e }));
            },
            [a],
        ),
        U = (0, d.yK)(
            [B.A],
            () =>
                (function (e, t) {
                    let n = new Set([t]);
                    for (let t of e)
                        (null != t.guild_id && n.add(t.guild_id),
                            null != t.preview_guild_id && n.add(t.preview_guild_id));
                    let l = [];
                    for (let e of n) {
                        let t = B.A.getGuild(e);
                        null != t && l.push(t);
                    }
                    return l.sort((e, t) => e.name.localeCompare(t.name));
                })(t, a),
            [t, a],
        ),
        H = i.useMemo(
            () => [
                { id: "conjure-filter-all", value: "all", leading: R.D, label: el.intl.string(en.default["Xi/oIC"]) },
                {
                    id: "conjure-filter-user",
                    value: nC,
                    leading: eo.UserIcon,
                    label: el.intl.string(en.default.kCSgmG),
                },
                {
                    id: "conjure-filter-no-server",
                    value: nS,
                    leading: eu.R,
                    label: el.intl.string(en.default["3QFps8"]),
                },
                ...U.map((e) => ({
                    id: `conjure-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, r.jsx)(e$.Ay, { guild: e, size: e$.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [U],
        ),
        K = (0, d.yK)(
            [ej.Ay, B.A],
            () => {
                let e = nM(z);
                if (null != e) return ej.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(B.A.getGuilds()))
                    ej.Ay.hasFetchedGuildProjects(e.id) && t.push(...ej.Ay.getSharedProjects(e.id));
                return t;
            },
            [z],
        );
    i.useEffect(() => {
        let e = nM(z);
        null == e || ej.Ay.hasFetchedGuildProjects(e) || (0, ev.hF)(e);
    }, [z]);
    let W = i.useMemo(
            () =>
                K.filter((e) => n_(e, z)).sort((e, t) =>
                    null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                ),
            [K, z],
        ),
        X = i.useMemo(
            () => [
                {
                    label: el.intl.string(en.default.NyVn6T),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: eD,
                            label: el.intl.string(en.default.UPLaGM),
                            leading: eo.UserIcon,
                        },
                        ...g.map((e) => ({
                            id: `conjure-target-${e.id}`,
                            value: e.id,
                            label: e.name,
                            leading: (0, r.jsx)(e$.Ay, { guild: e, size: e$.Ay.Sizes.MINI, active: !0 }),
                        })),
                    ],
                },
            ],
            [g],
        ),
        Y = i.useMemo(
            () =>
                t
                    .filter((e) => n_(e, z))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, z],
        ),
        J = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, nN.Ot)(e, a)
                    ? b(e.id)
                    : (0, v.P0)({ text: el.intl.string(en.default["XUl/cs"]) });
            },
            [a, b],
        ),
        Q = el.intl.string(en.default.ab1sMf),
        Z = [
            el.intl.string(en.default["9w+Chc"]),
            el.intl.string(en.default.WAvmdq),
            el.intl.string(en.default.SKsrzl),
        ],
        ee = [
            {
                id: "moderation-bot",
                name: el.intl.string(en.default.lGLnE8),
                description: el.intl.string(en.default["pAC6k/"]),
                wizard: !0,
            },
            {
                id: "feature-showcase",
                name: el.intl.string(en.default.uJKQTs),
                description: el.intl.string(en.default["+dKy/B"]),
            },
            {
                id: "rust-sphere",
                name: el.intl.string(en.default.iF5Oru),
                description: el.intl.string(en.default.NbDDO6),
            },
        ],
        et = i.useCallback(
            (e) => {
                if (null != e.wizard) {
                    var t;
                    return void ((t = {
                        template: e,
                        guildId: a,
                        eligibleGuilds: g,
                        onStart: (t) => N(e.name, t),
                        onSubmit: (t, n, l) => C(e, t, n, l),
                        onCancel: S,
                        onSkip: E,
                    }),
                    (0, e5.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([n.e("881965"), n.e("166781")]).then(
                                n.bind(n, 790028),
                            );
                            return (n) => (0, r.jsx)(e, { ...n, ...t });
                        },
                        { modalKey: "ConjureTemplateWizardModal" },
                    ));
                }
                A(e);
            },
            [g, a, S, A, E, N, C],
        ),
        ea = el.intl.string(en.default.zzYLlW),
        er =
            (i.useEffect(() => {
                (0, ev.b8)();
            }, []),
            (0, d.bG)([ej.Ay], () => {
                let e = ej.Ay.getMaxProjects();
                return null != e && ej.Ay.hasFetchedOwnedProjects()
                    ? Math.max(0, e - ej.Ay.getOwnedProjects().length)
                    : null;
            })),
        ei = el.intl.string(en.default["2XcV3x"]),
        es = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), c || k());
            },
            [c, k],
        ),
        ec = nM(z) ?? a,
        em = (0, d.bG)([ej.Ay], () => ej.Ay.getGuildProjectsFetchState(ec), [ec]),
        ef = (0, d.bG)([ej.Ay], () => ej.Ay.getGuildProjectsFetchState(a), [a]),
        [eh, eg] = i.useState(nR),
        ep = i.useMemo(() => nT.w.get(nL(a)) ?? !1, [a]),
        ey = "success" === ef,
        ek = (0, d.yK)([ej.Ay], () => ej.Ay.getSharedProjects(a), [a]).length > 0 || t.some((e) => n_(e, a)),
        eC = eh ?? (!!ek || "error" === ef || (!ey && ep));
    i.useEffect(() => {
        ey && nT.w.set(nL(a), ek);
    }, [ey, ek, a]);
    let eS = i.useCallback((e) => {
            (nT.w.set(nP, e), eg(e));
        }, []),
        eE = i.useCallback(() => eS(!eC), [eS, eC]),
        eI = i.useCallback(() => eS(!1), [eS]),
        eM = el.intl.string(en.default.kar7jh),
        e_ = eC ? eM : el.intl.string(en.default.WSc5Y2);
    return (0, r.jsx)("div", {
        className: o()(dX.nj, dX.a0, dW.T),
        children: (0, r.jsxs)("div", {
            className: dX.Yo,
            children: [
                (0, r.jsxs)("main", {
                    className: dX.ps,
                    children: [
                        (0, r.jsx)(dG, {
                            title: el.intl.string(en.default.uk6jhJ),
                            actions: (0, r.jsx)(q.A.Icon, {
                                icon: I.Z,
                                tooltip: e_,
                                "aria-label": e_,
                                selected: eC,
                                onClick: eE,
                            }),
                        }),
                        (0, r.jsx)(M.Ip, {
                            className: dX.Yy,
                            children: (0, r.jsx)("div", {
                                className: dX.Mo,
                                children: (0, r.jsxs)("section", {
                                    className: o()(dX.Qs, dX.Ix),
                                    children: [
                                        (0, r.jsx)(dK, {}),
                                        (0, r.jsx)(eL, {}),
                                        (0, r.jsxs)("section", {
                                            className: dX.WI,
                                            "aria-label": ea,
                                            children: [
                                                (0, r.jsxs)("div", {
                                                    className: dX.G9,
                                                    children: [
                                                        (0, r.jsx)(j.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: ea,
                                                        }),
                                                        (0, r.jsx)(j.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: el.intl.string(en.default["N88+Ld"]),
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsx)(eN, {
                                                    listClassName: dX.Aw,
                                                    radius: ew,
                                                    children: ee.map((e) =>
                                                        (0, r.jsx)(
                                                            "li",
                                                            {
                                                                className: dX.EA,
                                                                children: (0, r.jsxs)(eb, {
                                                                    disabled: s,
                                                                    ariaLabel: el.intl.formatToPlainString(
                                                                        en.default.jGyR6p,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: o()(dX.nx, dX.rz),
                                                                    onClick: () => et(e),
                                                                    children: [
                                                                        (0, r.jsx)(j.E, {
                                                                            className: dX.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, r.jsx)(j.E, {
                                                                            className: dX.BK,
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
                                            className: dX.WI,
                                            "aria-label": ei,
                                            children: [
                                                (0, r.jsxs)("div", {
                                                    className: dX.G9,
                                                    children: [
                                                        (0, r.jsx)(j.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: ei,
                                                        }),
                                                        (0, r.jsx)(j.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: el.intl.string(en.default.JnJOAn),
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsx)(eN, {
                                                    listClassName: dX.Aw,
                                                    radius: eA,
                                                    children: Z.map((e) =>
                                                        (0, r.jsx)(
                                                            "li",
                                                            {
                                                                className: dX.EA,
                                                                children: (0, r.jsx)(eb, {
                                                                    disabled: s,
                                                                    className: dX.nx,
                                                                    onClick: () => k(e),
                                                                    children: (0, r.jsx)(j.E, {
                                                                        variant: "text-md/semibold",
                                                                        color: "text-strong",
                                                                        className: dX.un,
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
                            className: dX.Yl,
                            children: (0, r.jsxs)("div", {
                                className: o()(dX.Qs, dX.DA),
                                children: [
                                    (0, r.jsx)(_.f, {
                                        label: Q,
                                        hideLabel: !0,
                                        rows: 3,
                                        value: l,
                                        placeholder: Q,
                                        error: u,
                                        onChange: y,
                                        onKeyDown: es,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: dX.VP,
                                        children: [
                                            (0, r.jsx)("div", {
                                                className: dX.gH,
                                                children: (0, r.jsx)(T.l, {
                                                    selectionMode: "single",
                                                    label: el.intl.string(en.default.NyVn6T),
                                                    hideLabel: !0,
                                                    placeholder: el.intl.string(en.default.NyVn6T),
                                                    options: X,
                                                    value: m,
                                                    onSelectionChange: h,
                                                    disabled: s,
                                                }),
                                            }),
                                            null != er
                                                ? (0, r.jsx)(j.E, {
                                                      variant: "text-sm/medium",
                                                      color: 0 === er ? "text-feedback-warning" : "text-subtle",
                                                      children:
                                                          0 === er
                                                              ? el.intl.string(en.default.s28pGG)
                                                              : el.intl.formatToPlainString(en.default.Wy5aK4, {
                                                                    count: er,
                                                                }),
                                                  })
                                                : null,
                                            (0, r.jsx)(td, {
                                                settings: x ?? V.A4,
                                                tiers: V.lO,
                                                choices: (0, ex.b)()
                                                    ? {
                                                          main: [...V.vC.main, ...V.XE.main],
                                                          subagent: [...V.vC.subagent, ...V.XE.subagent],
                                                          thinking: V.vC.thinking,
                                                      }
                                                    : V.vC,
                                                disabled: s,
                                                onChange: p,
                                            }),
                                            (0, r.jsx)(w.$, {
                                                variant: "primary",
                                                size: "md",
                                                text: el.intl.string(el.t.CumH4u),
                                                disabled: c,
                                                loading: s,
                                                onClick: () => k(),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("aside", {
                    className: dX.pA,
                    hidden: !eC,
                    "aria-label": el.intl.string(en.default.dWgSAa),
                    children: [
                        (0, r.jsxs)("div", {
                            className: dX.IR,
                            children: [
                                (0, r.jsx)(j.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: dX.RM,
                                    children: el.intl.string(en.default.dWgSAa),
                                }),
                                (0, r.jsxs)("div", {
                                    className: dX.Ss,
                                    children: [
                                        (0, r.jsx)(ed, { importing: D, onImport: $ }),
                                        (0, r.jsx)(q.A.Icon, { icon: P.P, tooltip: eM, "aria-label": eM, onClick: eI }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsxs)(M.Ip, {
                            className: dX.xe,
                            children: [
                                (0, r.jsx)("div", {
                                    className: dX.Vw,
                                    children: (0, r.jsx)(T.l, {
                                        selectionMode: "single",
                                        label: el.intl.string(en.default.U6TqU9),
                                        hideLabel: !0,
                                        options: H,
                                        value: z,
                                        onSelectionChange: G,
                                    }),
                                }),
                                (0, r.jsx)(j.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: dX.wE,
                                    children: el.intl.string(en.default.JQpNkh),
                                }),
                                ("unattempted" === em || "loading" === em) && 0 === Y.length
                                    ? (0, r.jsx)("div", { className: dX.E8, children: (0, r.jsx)(f.y, {}) })
                                    : "error" === em && 0 === Y.length
                                      ? (0, r.jsxs)("div", {
                                            className: dX.E8,
                                            children: [
                                                (0, r.jsx)(j.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: dX.JS,
                                                    children: el.intl.string(en.default.DJAPMO),
                                                }),
                                                (0, r.jsx)(w.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: el.intl.string(en.default["WFJ/vb"]),
                                                    onClick: () => (0, ev.hF)(ec),
                                                }),
                                            ],
                                        })
                                      : 0 === Y.length
                                        ? (0, r.jsx)("div", {
                                              className: dX.D1,
                                              children: (0, r.jsxs)("div", {
                                                  className: dX.ST,
                                                  children: [
                                                      (0, r.jsx)(R.D, { size: "lg", color: L.A.colors.TEXT_SUBTLE }),
                                                      (0, r.jsx)(j.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: dX.sI,
                                                          children: el.intl.string(en.default["9/5sLV"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, r.jsx)("div", {
                                              className: dX.Dq,
                                              children: Y.map((e) =>
                                                  (0, r.jsx)(
                                                      d2,
                                                      {
                                                          project: e,
                                                          guildId: a,
                                                          onSelect: () => J(e),
                                                          onRemix: () => (0, nH.A)(e, a),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          }),
                                W.length > 0
                                    ? (0, r.jsxs)("div", {
                                          className: dX.qx,
                                          children: [
                                              (0, r.jsxs)("div", {
                                                  className: dX.uc,
                                                  children: [
                                                      (0, r.jsx)(j.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-strong",
                                                          children: el.intl.string(en.default["wFi8+o"]),
                                                      }),
                                                      (0, r.jsx)(j.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          children: el.intl.string(en.default.dQ3U1J),
                                                      }),
                                                  ],
                                              }),
                                              (0, r.jsx)("div", {
                                                  className: dX.Dq,
                                                  children: W.map((e) =>
                                                      (0, r.jsx)(
                                                          d2,
                                                          {
                                                              project: e,
                                                              guildId: a,
                                                              onSelect: () => J(e),
                                                              onRemix: () => (0, nH.A)(e, a),
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
function d4(e) {
    let t,
        { guildId: n, projectId: l } = e,
        a = (0, d.yK)([ej.Ay], () => ej.Ay.getOwnedProjects()),
        s = (0, d.yK)([U.Ay], () => U.Ay.getSelfMember(n)?.roles ?? [], [n]),
        o = (0, d.bG)(
            [B.A, H.A],
            () => {
                let e = B.A.getGuild(n);
                return null != e && H.A.can(em.xBc.MANAGE_GUILD, e);
            },
            [n],
        ),
        [u, c] = i.useState(""),
        m = l ?? null,
        [f, h] = i.useState(!1),
        [g, x] = i.useState(null),
        p = (0, t1.z9)("VibegrationsScreen"),
        [j, b] = i.useState(null),
        y = (0, D.o)().get(tK.f_) === eD;
    i.useEffect(() => {
        b(null);
    }, [n, y]);
    let k = i.useMemo(() => (!y && p.some((e) => e.id === n) ? n : eD), [p, n, y]),
        w = j ?? k,
        A = w === eD ? "user" : "guild",
        N = w === eD ? n : w,
        [C, S] = i.useState(null);
    (i.useEffect(() => {
        (0, ev.hF)(n);
    }, [n, s, o]),
        i.useEffect(() => {
            (0, ev.dm)(n, m);
        }, [n, m]));
    let E = i.useCallback(
            async (e, t, n) => {
                let l = await (0, ev.gA)({ guild_id: t, install_scope: n });
                ((0, J.Hc)(l),
                    (0, J.r2)(l, C ?? V.A4),
                    e(l),
                    (0, G.pX)(em.BVt.CHANNEL(t, ef.VV.CONJURE, l)),
                    c(""),
                    S(null));
            },
            [C],
        ),
        I = i.useCallback(
            async (e) => {
                let t = (e ?? u).trim(),
                    n = ep({ idea: t, installScope: A, submitting: f });
                if ("idea" !== n && "submitting" !== n) {
                    (null != e && c(e), h(!0), x(null));
                    try {
                        await E((e) => (0, J.dv)(e, t), N, A);
                    } catch (e) {
                        x((0, eg.mG)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [E, A, N, u, f],
        ),
        M = i.useCallback(
            async (e) => {
                if (!f) {
                    (h(!0), x(null));
                    try {
                        await E(
                            (t) => {
                                var n;
                                (0, J.dv)(
                                    t,
                                    ((n = e.name),
                                    el.intl.formatToPlainString(en.default["0PQip6"], { templateName: n })),
                                    void 0,
                                    { templateId: e.id },
                                );
                            },
                            N,
                            A,
                        );
                    } catch (e) {
                        x((0, eg.mG)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [E, A, N, f],
        ),
        _ = i.useCallback(
            async (e, t) => {
                let n = await (0, ev.gA)({ guild_id: t, install_scope: "guild" });
                return ((0, J.Hc)(n), (0, J.r2)(n, C ?? V.A4), (0, J.dv)(n, (0, nV.Wl)(e)), n);
            },
            [C],
        ),
        T = i.useCallback(async (e, t, n, l) => {
            if (ej.Ay.getProject(t)?.guild_id !== n) {
                let e = await (0, ev.M7)(t, { guild_id: n, preview_guild_id: n });
                if (!e.ok) throw new eg.DS((0, eg.hj)(e), e.status);
            }
            ((0, J.dv)(t, l, void 0, { templateId: e.id }), (0, G.pX)(em.BVt.CHANNEL(n, ef.VV.CONJURE, t)), S(null));
        }, []),
        P = i.useCallback((e) => {
            (0, ev.xx)(e).catch(() => void 0);
        }, []),
        R = i.useCallback(
            (e) => {
                let t = ej.Ay.getProject(e)?.guild_id ?? n;
                ((0, G.pX)(em.BVt.CHANNEL(t, ef.VV.CONJURE, e)), S(null));
            },
            [n],
        ),
        [L, $] = i.useState(!1),
        O = i.useCallback(
            async (e, t) => {
                let l = er(e);
                if (null != l) return void (0, v.P0)({ text: l, variant: "critical" });
                $(!0);
                let a = null;
                try {
                    ((a = await (0, ev.gA)({ guild_id: n, install_scope: t })),
                        (0, J.Hc)(a),
                        (0, J.r2)(a, C ?? V.A4),
                        await ea(a, e, el.intl.string(en.default["LUc7/5"])),
                        (0, G.pX)(em.BVt.CHANNEL(n, ef.VV.CONJURE, a)),
                        S(null));
                } catch {
                    (null != a && (await (0, ev.xx)(a).catch(() => void 0)),
                        (0, v.P0)({ text: el.intl.string(en.default["Q+l4Hv"]), variant: "critical" }));
                } finally {
                    $(!1);
                }
            },
            [n, C],
        ),
        F = i.useCallback(
            (e) => {
                (0, G.pX)(em.BVt.CHANNEL(n, ef.VV.CONJURE, e));
            },
            [n],
        ),
        z = i.useCallback(() => {
            (0, G.pX)(em.BVt.CHANNEL(n, ef.VV.CONJURE));
        }, [n]),
        q = i.useCallback((e) => {
            (c(e), x(null));
        }, []),
        K = (0, d.bG)(
            [ej.Ay],
            () => {
                if (null == m) return null;
                let e = ej.Ay.getProject(m);
                return null == e || (0, ej.PV)(e) || e.guild_id === n ? e : null;
            },
            [m, n],
        ),
        W = (0, d.bG)([ej.Ay], () => ej.Ay.hasFetchedGuildProjects(n), [n]);
    return null != m
        ? (0, r.jsx)(d3, { project: K, projectsLoaded: W, onBack: z, guildId: n }, m)
        : (0, r.jsx)(d7, {
              projects: a,
              modelSettings: C,
              onModelSettingsChange: S,
              idea: u,
              guildId: n,
              submitting: f,
              createError: g,
              createDisabled: "idea" === (t = ep({ idea: u, installScope: A, submitting: f })) || "submitting" === t,
              onSelectProject: F,
              onIdeaChange: q,
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
              eligibleGuilds: p,
          });
}
