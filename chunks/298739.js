(n.r(t), n.d(t, { default: () => ft }), n(321073));
var l,
    r,
    a = n(477900),
    i = n(582128),
    s = n(503698),
    o = n.n(s),
    u = n(536637),
    c = n.n(u),
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
    C = n(625903),
    S = n(297264),
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
    F = n(713654),
    z = n(625180),
    q = n(672929),
    G = n(742589),
    U = n(976860),
    B = n(402860),
    H = n(734057),
    V = n(696451),
    K = n(71393),
    W = n(576705),
    X = n(164892),
    Y = n(922016),
    J = n(980707),
    Z = n(477782),
    Q = n(81369),
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
function eo(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, X.Oq)(e.size, t)
        ? null
        : ei.intl.formatToPlainString(ea.default.ThxcOX, { size: (0, X.sM)((0, X.Ju)(t)) });
}
async function eu(e, t) {
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
        o = { user: r.open, guild: s.open };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(Y.Y, {
                targetElementRef: l,
                position: "bottom",
                align: "right",
                animation: Y.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, a.jsx)(J.W, {
                        "data-menu-migrated": !0,
                        navId: "conjure-import-scope",
                        "aria-label": ei.intl.string(ea.default.soVyD1),
                        onClose: t,
                        onSelect: t,
                        children: (0, a.jsx)(Z.rX, {
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
                                        Z.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: o[e.scope] },
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
                        icon: Q.H,
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
let eC = { x: 5, y: 7 },
    eS = { x: 5, y: 4 };
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
    let o = (0, d.bG)([eR.A], () => eR.A.isIdle()),
        u = i.useRef(o);
    i.useEffect(() => {
        let t = u.current && !o;
        ((u.current = o), t && e$ && (e.current?.stop(), e.current?.play()));
    }, [o]);
    let c = ei.intl.string(ea.default["+5XyCR"]);
    return (0, a.jsx)("div", {
        ref: r,
        className: eL.x,
        children: t
            ? (0, a.jsx)(eM.H, { children: (0, a.jsx)(eI.o, { ref: e, text: c, variant: eD, delay: null }) })
            : (0, a.jsx)(S.D, { variant: eD, children: c }),
    });
}
var eF = n(548118);
let ez = "user",
    eq = new Set(),
    eG = null;
function eU(e, t) {
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
                eq.add(t),
                () => {
                    eq.delete(t);
                }
            );
        }, [e]));
}
var eB = n(885386);
function eH() {
    return eB.Q_.useSetting() || !1;
}
let eV = Object.freeze({ x: 0.5, y: 0.5 });
function eK(e) {
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
function eY(e) {
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
let eJ = "[vibegrations:selected] ",
    eZ = " \u2014 ";
function eQ(e) {
    if (!e.startsWith(eJ)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        r = n.slice(eJ.length),
        a = r.indexOf(eZ),
        i = (-1 === a ? r : r.slice(0, a)).trim();
    return "" === i ? null : { label: i, body: l };
}
let e0 = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    e1 = new Map(),
    e2 = new Set();
function e3(e) {
    return e1.get(e) ?? e0;
}
function e7(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? e1.set(e, t) : e1.delete(e), [...e2]))
        try {
            n();
        } catch (e) {
            console.error("[vibegrations] design feedback subscriber threw", e);
        }
}
function e4(e) {
    e1.has(e) && e7(e, e0);
}
function e6(e, t) {
    let n = e3(e);
    n.active && e7(e, { ...n, context: t });
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
        g = X.PY.indexOf(t.tier),
        p = f ? tr.t : ta._,
        x = X.PY.map(to.D0),
        j = (0, to.Tc)(t.tier),
        { text: b, phase: y } = (0, ts.Q)(j);
    return (0, a.jsx)("div", {
        className: td.qd,
        "data-placement": u ?? void 0,
        children: (0, a.jsxs)("div", {
            className: o()(td.t$, { [td.Zr]: c && d, [td.GF]: !c }),
            role: "dialog",
            "aria-label": ei.intl.string(ea.default["3E7Yc0"]),
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
                                            className: td.vg,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(v.E, {
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
                                (0, a.jsx)(tu.A, {
                                    activeIndex: g,
                                    stops: x,
                                    ariaLabel: ei.intl.string(ea.default.aBPQxX),
                                    disabled: r,
                                    onSelect: function (e) {
                                        let n = X.PY[e];
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
    return (0, a.jsx)(Y.Y, {
        targetElementRef: c,
        position: "top",
        align: "right",
        shouldShow: g,
        onRequestClose: () => h(!1),
        animation: Y.Y.Animation.NONE,
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
            return (0, a.jsx)(b.m, {
                text: ei.intl.string(ea.default["k2JN/p"]),
                shouldShow: !n,
                ariaHidden: !0,
                children: (0, a.jsx)(j.D, {
                    innerRef: c,
                    className: o ?? td.hZ,
                    "aria-label": ei.intl.string(ea.default["k2JN/p"]),
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
    ty = n(991690),
    tk = n(696645);
function tw(e) {
    return "frame" !== e.mode
        ? e.mode
        : null == e.appChannel
          ? `frame-${e.surface}`
          : `frame-${e.surface}-${e.appChannel}`;
}
function tA(e) {
    switch (e.mode) {
        case "frame":
            return null == e.appChannel
                ? (0, tk.XV)(e.surface)
                : ei.intl.formatToPlainString(ea.default["6xVl+N"], {
                      surface: (0, tk.XV)(e.surface),
                      channel: e.appChannel,
                  });
        case "widget":
            return ei.intl.string(ea.default.y5GiL1);
        case "overlay":
            return ei.intl.string(ea.default["2940LX"]);
        case "bot":
            return ei.intl.string(ea.default.tjpaGN);
    }
}
var tN = n(598748),
    tC = n(294323),
    tS = n(457827),
    tE = n(25451),
    tI = n(280450),
    tM = n(373677),
    t_ = n(165610);
let tT = [];
var tP = n(86147),
    tR = n(729475),
    tL = n(91242),
    tD = n(869146),
    t$ = n(475815),
    tO = n(621466);
function tF(e) {
    return null == e ? null : document.querySelector(`[data-frame-id="${CSS.escape(e)}"]`);
}
function tz(e) {
    let t, n;
    return (
        null != e &&
        ((n =
            (t = document).fullscreenElement ??
            t.webkitFullscreenElement ??
            t.mozFullScreenElement ??
            t.msFullscreenElement ??
            null),
        ((0, tO.vq)(n, Element) ? n.getAttribute("data-frame-id") : null) === e)
    );
}
function tq(e) {
    return (0, t$.a3)(document, e);
}
function tG(e) {
    return i.useSyncExternalStore(tq, () => tz(e));
}
function tU(e) {
    let { frame: t, controlProjectId: n } = e,
        l = tG(t?.id ?? null),
        r = (0, tx.Zv)(n),
        i = (0, d.bG)(
            [tD.A, tL.A],
            () => null != t && tD.A.getWindowOpen(eg.MLl.ACTIVITY_POPOUT) && tL.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, t_.x1)(t) || i || r) return null;
    let s = tF(t.id);
    if (null == s || !(0, t$.Ub)(s)) return null;
    let o = ei.intl.string(l ? ei.t.Z7MyNB : ei.t.OIDkcp);
    return (0, a.jsx)(G.A.Icon, {
        tooltip: o,
        icon: l ? tP.z : tR.T,
        "aria-label": o,
        role: "switch",
        "aria-checked": l,
        selected: l,
        onClick: () => {
            var e;
            let n;
            null != (n = tF((e = t.id))) && (0, t$.Ub)(n) && (tz(e) ? (0, t$.sP)(n) : (0, t$.tl)(n));
        },
    });
}
var tB = n(559106),
    tH = n(847374),
    tV = n(704745);
function tK(e) {
    let { targets: t, target: n, onChange: l } = e,
        [r, s] = i.useState(!1),
        o = null != n && t.length > 1;
    r && !o && s(!1);
    let u = i.useCallback(() => s(!1), []),
        c = i.useCallback(() => s((e) => !e), []),
        d = i.useRef(null);
    if (!o) return null;
    let f = ei.intl.string(ea.default.I2ucou);
    return (0, a.jsx)(Y.Y, {
        targetElementRef: d,
        shouldShow: r,
        onRequestClose: u,
        position: "bottom",
        align: "right",
        animation: Y.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, a.jsx)(J.W, {
                "data-menu-migrated": !0,
                navId: "conjure-preview-target",
                "aria-label": f,
                onClose: r,
                onSelect: r,
                children: (0, a.jsx)(Z.rX, {
                    label: f,
                    children: t.map((e) => {
                        let t = tw(e);
                        return (0, a.jsx)(
                            Z.iD,
                            {
                                id: `preview-target-${t}`,
                                group: "conjure-preview-target",
                                label: tA(e),
                                checked: t === tw(n),
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
            let { onClick: l, ...r } = e,
                { isShown: i } = t;
            return (0, a.jsx)(tB.vN, {
                children: (0, a.jsxs)("button", {
                    ...r,
                    ref: d,
                    type: "button",
                    className: tV.h,
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
                            children: tA(n),
                        }),
                        (0, a.jsx)(tH.a, { size: "xs", color: "currentColor" }),
                    ],
                }),
            });
        },
    });
}
var tW = n(226178),
    tX = n(434279),
    tY = n(941985),
    tJ = n(287809),
    tZ = n(427262),
    tQ = n(803306);
let t0 = new Set(),
    t1 = new Map();
function t2(e, t, n) {
    return null == e ? (n ?? null) : (t ?? null);
}
function t3(e) {
    if (null == e || t0.has(e) || null != tJ.default.getUser(e)) return;
    let t = t1.get(e) ?? 0;
    t >= 3 ||
        (t1.set(e, t + 1),
        t0.add(e),
        tQ
            .wz(e)
            .finally(() => t0.delete(e))
            .catch(() => {}));
}
var t7 = n(16619),
    t4 = n(782603),
    t6 = n(780338),
    t5 = n(663417),
    t8 = n(70688),
    t9 = n(173936),
    ne = n(473935),
    nt = n(408278),
    nn = n(365199),
    nl = n(7437),
    nr = n(147036),
    na = n(957565),
    ni = n(785389),
    ns = n(123917);
let no = new Set();
var nu = n(289106),
    nc = n(616334),
    nd = n(189714),
    nf = n(733791),
    nm = n(189213),
    nh = n(331322),
    ng = n(706935);
function np(e) {
    let { project: t, target: n, action: l, ...r } = e,
        [s, o] = i.useState(n.canRemovePreviewBot),
        [u, c] = i.useState(!1),
        [d, f] = i.useState(null),
        m = "delete" === l,
        h = m ? (0, nf.fI)(n) : (0, nf.Kd)(n),
        g = m ? null : (0, nf.L4)(n),
        p = (0, nf.Mi)(n),
        j = m
            ? ei.intl.formatToPlainString(ea.default.CJBhb2, { name: n.projectName })
            : ei.intl.formatToPlainString(ea.default.x6FvsZ, { app: n.appName });
    async function b() {
        (c(!0), f(null));
        let e = m ? (0, ey.xx)(t.id) : (0, ey.YI)(t.id, { alsoRemovePreviewBot: s }),
            l = await e.catch(() => null);
        (c(!1), l?.ok !== !0)
            ? f(ei.intl.string(m ? ea.default["0XDHob"] : ea.default.PJ2Fkn))
            : (m || (0, x.P0)({ text: (0, nf.p_)(n), variant: "success" }), r.onClose());
    }
    return (0, a.jsx)(nm.a, {
        ...r,
        role: "alertdialog",
        title: m ? j : (0, nf.WX)((0, ng.tb)(ea.default.x6FvsZ, n.appName)),
        subtitle: m ? (0, nf.J)(n) : ei.intl.string(ea.default["8OKM1N"]),
        "aria-label": j,
        notice: null == d ? void 0 : { message: d, type: "critical" },
        actions: [
            { text: ei.intl.string(ei.t["ETE/oC"]), variant: "secondary", onClick: r.onClose },
            {
                text: ei.intl.string(m ? ea.default.aC42bN : ea.default.BGF8VT),
                variant: "critical-primary",
                loading: u,
                disabled: u,
                onClick: () => {
                    b().catch(() => {});
                },
            },
        ],
        children: (0, a.jsxs)(nh.B, {
            gap: 12,
            children: [
                h.length > 0 || null != g
                    ? (0, a.jsx)(ng.Ay, {
                          items: h,
                          optionalItem:
                              null == g
                                  ? void 0
                                  : { item: g, checked: s, onChange: o, disabled: !n.canRemovePreviewBot },
                      })
                    : null,
                null != p ? (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: p }) : null,
            ],
        }),
    });
}
function nx(e) {
    (0, te.openModal)((t) => (0, a.jsx)(np, { ...t, ...e }));
}
var nv = n(552821);
let nj = [];
function nb(e) {
    (0, x.P0)({ text: e, variant: "critical" });
}
function ny(e) {
    let {
            projectId: t,
            projectName: n,
            guildId: l,
            projectGuildId: r,
            isOwner: s,
            canRemix: o,
            onExport: u,
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
        w = (0, nd.iI)(t),
        A = i.useContext(nu.bI),
        { pending: N, refresh: S } = (0, nl.A)(b ?? null),
        { pending: E, connect: I } = (function (e, t) {
            let [n, l] = i.useState(no),
                r = i.useRef(no),
                a = i.useCallback((e) => {
                    ((r.current = (0, ni.Q6)(r.current, e)), l(r.current));
                }, []);
            return {
                pending: n,
                connect: i.useCallback(
                    (n) => {
                        if (null == e) return;
                        let i = (0, ni.K9)(r.current, n.type);
                        async function s() {
                            let l = await (0, ee.JI)(e, n.type);
                            (a(n.type), "url" === l.type)
                                ? (0, ns.h)({ href: l.url, trusted: !1 })
                                : t(
                                      "setup" === (0, ni.rq)(l.error)
                                          ? ei.intl.string(ea.default["jCQ/1B"])
                                          : ei.intl.string(ea.default.POxkSh),
                                  );
                        }
                        null != i && ((r.current = i), l(i), s().catch(() => a(n.type)));
                    },
                    [t, e, a],
                ),
            };
        })(y ?? null, nb),
        M = (0, d.bG)([ee.Ay], () => (null == y ? nj : ee.Ay.getDeclaredConnections(y))),
        _ = i.useMemo(() => (0, ni.Xl)(M), [M]),
        T = (0, nf.Bs)(t),
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
        L = null != m && o,
        D = s && null != c,
        $ = L || null != u || D || null != h || null != g,
        O = na.p5 && null != l,
        F = na.p5,
        z = w ? t4.BellIcon : t6.BellSlashIcon;
    return (0, a.jsxs)(J.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": ei.intl.string(ei.t.ogxXGq),
        onClose: k,
        onSelect: k,
        children: [
            null != p || null != j
                ? (0, a.jsxs)(Z.rX, {
                      children: [
                          null != p
                              ? (0, a.jsx)(Z.Dr, {
                                    id: "refresh",
                                    icon: t5.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: t5.RefreshIcon },
                                    label: ei.intl.string(ea.default["p4B/7M"]),
                                    disabled: v,
                                    action: p,
                                })
                              : null,
                          null != j
                              ? (0, a.jsx)(Z.Dr, {
                                    id: "close",
                                    icon: t8.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: t8.DoorExitIcon },
                                    label: ei.intl.string(ea.default["/TlGcK"]),
                                    action: j,
                                })
                              : null,
                      ],
                  })
                : null,
            P.length > 0
                ? (0, a.jsx)(Z.rX, {
                      children: P.map((e) =>
                          (0, a.jsx)(
                              Z.Dr,
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
            (0, a.jsx)(Z.rX, {
                children: (0, a.jsx)(Z.Dr, {
                    id: "mute",
                    label: ei.intl.string(w ? ea.default.s9rCuH : ea.default["a+i/As"]),
                    icon: z,
                    leadingAccessory: { type: "icon", icon: z },
                    action: () => (0, nd.$L)(t, !w),
                }),
            }),
            $
                ? (0, a.jsxs)(Z.rX, {
                      children: [
                          L
                              ? (0, a.jsx)(Z.Dr, { id: "remix", label: ei.intl.string(ea.default.XWgAfc), action: m })
                              : null,
                          null != u
                              ? (0, a.jsx)(Z.Dr, { id: "export", label: ei.intl.string(ea.default.WsEEP7), action: u })
                              : null,
                          D
                              ? (0, a.jsx)(Z.Dr, { id: "import", label: ei.intl.string(ea.default.rWGY3e), action: c })
                              : null,
                          null != h
                              ? (0, a.jsx)(Z.Dr, {
                                    id: "connect-tool",
                                    label: ei.intl.string(ea.default.yOIql5),
                                    action: h,
                                })
                              : null,
                          null != g
                              ? (0, a.jsx)(Z.Dr, {
                                    id: "history",
                                    label: ei.intl.string(ea.default["3hIVou"]),
                                    action: g,
                                })
                              : null,
                      ],
                  })
                : null,
            F
                ? (0, a.jsxs)(Z.rX, {
                      children: [
                          O
                              ? (0, a.jsx)(Z.Dr, {
                                    id: "copy-link",
                                    label: ei.intl.string(ei.t.WqhZss),
                                    icon: t9.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: t9.LinkIcon },
                                    action: () =>
                                        (0, na.C)((0, nr.n)(l, ep.VV.CONJURE, t), () =>
                                            (0, x.P0)({ text: ei.intl.string(ei.t["L/PwZf"]), variant: "success" }),
                                        ),
                                })
                              : null,
                          (0, a.jsx)(Z.Dr, {
                              id: "copy-project-id",
                              label: ei.intl.string(ea.default["nm/zuU"]),
                              icon: ne.L,
                              leadingAccessory: { type: "icon", icon: ne.L },
                              action: () =>
                                  (0, na.C)(t, () =>
                                      (0, x.P0)({ text: ei.intl.string(ea.default.CmfaZG), variant: "success" }),
                                  ),
                          }),
                      ],
                  })
                : null,
            s || T?.canRemoveBot === !0
                ? (0, a.jsxs)(Z.rX, {
                      children: [
                          s
                              ? (0, a.jsx)(Z.Dr, {
                                    id: "settings",
                                    label: ei.intl.string(ea.default.FzfmQ8),
                                    icon: C.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: C.SettingsIcon },
                                    action: () =>
                                        (0, nc.A)(t, {
                                            guildId: r ?? l,
                                            initialTab: "project",
                                            isPreview: !0,
                                            publishOptions: A,
                                        }),
                                })
                              : null,
                          T?.canRemoveBot === !0
                              ? (0, a.jsx)(Z.Dr, {
                                    id: "remove-from-server",
                                    label: ei.intl.formatToPlainString(ea.default["3gKG2j"], { server: T.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let e = ek.Ay.getProject(t);
                                        null != e && nx({ project: e, target: T, action: "remove" });
                                    },
                                })
                              : null,
                          s
                              ? (0, a.jsx)(Z.Dr, {
                                    id: "delete",
                                    label: ei.intl.string(ei.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let e = ek.Ay.getProject(t);
                                        if (null != e && null != T) nx({ project: e, target: T, action: "delete" });
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
function nk(e) {
    let { trigger: t = "header", ...n } = e,
        l = i.useRef(null);
    return (0, a.jsx)(Y.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: Y.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(ny, { ...n, onCloseMenu: t });
        },
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: i } = n;
            return (0, a.jsx)("div", {
                ref: l,
                className: nv.h,
                children:
                    "iconButton" === t
                        ? (0, a.jsx)(b.m, {
                              text: ei.intl.string(ei.t["UKOtz+"]),
                              children: (0, a.jsx)(nt.K, {
                                  icon: nn.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": ei.intl.string(ei.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": i,
                                  onClick: r,
                              }),
                          })
                        : (0, a.jsx)(G.A.Icon, {
                              icon: nn.MoreHorizontalIcon,
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
var nw = n(497183),
    nA = n(104171),
    nN = n(286739);
function nC(e) {
    let { creator: t, className: n } = e;
    return (0, a.jsx)("div", {
        className: o()(nN.c, n),
        "aria-hidden": !0,
        children: (0, a.jsx)(nA.Ay, { users: [t.creator, ...t.collaborators], max: 3, size: nA.DN.SIZE_16 }),
    });
}
var nS = n(217846),
    nE = n(246338);
let nI = "user",
    nM = "no-server",
    n_ = new Map();
function nT(e) {
    return n_.get(e) ?? null;
}
function nP(e) {
    switch (e) {
        case "all":
        case nI:
        case nM:
            return null;
        default:
            return e;
    }
}
function nR(e, t) {
    switch (t) {
        case "all":
            return !0;
        case nI:
            return "user" === e.install_scope;
        case nM:
            return null == (0, tX.wu)(e);
        default:
            return e.guild_id === t || e.preview_guild_id === t;
    }
}
var nL = n(506774);
let nD = "VibegrationsProjectsPanelOpen";
function n$() {
    return nL.w.get(nD) ?? null;
}
function nO(e) {
    return `VibegrationsProjectsPanel:${e}`;
}
var nF = n(803101),
    nz = n(808728),
    nq = n(535466),
    nG = n(321032),
    nU = n(277085);
function nB(e) {
    let { projectId: t, name: n, description: l, onDone: r, transitionState: s, onClose: o } = e,
        { iconURL: u } = (0, nq.Ay)(t),
        [c, d] = i.useState(n),
        [f, m] = i.useState(l),
        [h, g] = i.useState(null),
        [p, x] = i.useState(null),
        [j, b] = i.useState(!1),
        y = c.trim(),
        k = y === n ? null : (0, nU.p)(y),
        w = h ?? u,
        A = f.trim();
    function N() {
        (r(), o());
    }
    async function C(e) {
        if ((e.preventDefault(), j || null != k)) return;
        (b(!0), x(null));
        let r = await (0, nu.$l)(t, { name: y, icon: h, description: f }, { name: n, description: l });
        (b(!1), r) ? N() : x(ei.intl.string(ea.default.Fi7boI));
    }
    let S = "" === y ? n : y;
    return (0, a.jsx)("form", {
        onSubmit: C,
        children: (0, a.jsx)(nm.a, {
            transitionState: s,
            onClose: o,
            title: ei.intl.string(ea.default.OmOWDq),
            subtitle: ei.intl.string(ea.default.Gzmlyg),
            size: "sm",
            preview: (0, a.jsx)(nG.w, { iconURL: w, name: S, description: A }),
            actions: [
                { text: ei.intl.string(ea.default["bz/M68"]), variant: "secondary", onClick: N, disabled: j },
                {
                    text: ei.intl.string(ea.default.dyIV6M),
                    variant: "primary",
                    type: "submit",
                    loading: j,
                    disabled: null != k,
                },
            ],
            children: (0, a.jsxs)(nh.B, {
                gap: 24,
                children: [
                    (0, a.jsx)(nG.r, {
                        iconURL: w,
                        canRemove: null != h,
                        onIconChange: (e) => {
                            (g(e), x(null));
                        },
                        name: c,
                        nameError: k,
                        onNameChange: d,
                        description: f,
                        onDescriptionChange: m,
                        previewName: S,
                        inlinePreview: !1,
                        disabled: j,
                    }),
                    null != p
                        ? (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: p })
                        : null,
                ],
            }),
        }),
    });
}
var nH = n(516288);
function nV(e) {
    let { reason: t, message: n, onConfirm: l, transitionState: r, onClose: i } = e,
        s = (0, nH.t)(t, n);
    return (0, a.jsx)(nm.a, {
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
var nK = n(951465),
    nW = n(95264),
    nX = n(952644),
    nY = n(58736),
    nJ = n(689175),
    nZ = n(683071),
    nQ = n(65593),
    n0 = n(115982);
function n1(e) {
    return !(0, ex.BL)(e) && !0 !== e.stopRequested;
}
var n2 = n(104317),
    n3 = n(643278),
    n7 = n(566424),
    n4 = n(683063),
    n6 = n(138212);
function n5(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: i, ...s } = e;
    return (0, a.jsxs)("section", {
        className: o()(n6.Nr, r),
        ...s,
        children: [
            (0, a.jsxs)("header", {
                className: o()(n6.wx, null != n && n6.o5, i),
                children: [
                    (0, a.jsx)(v.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var n8 = n(148590);
function n9(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function le(e) {
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
        b = h ? tH.a : ta._,
        y = null != n || l;
    return (0, a.jsxs)(n5, {
        ...f,
        title: t,
        trailing: y
            ? (0, a.jsxs)("span", {
                  className: n8.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(j.D, {
                                className: n8.L$,
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
        headerClassName: h ? void 0 : n8.RG,
        "data-superseded": l ? "true" : void 0,
        children: [c, (0, a.jsx)("div", { id: m, className: o()(n8.rf, u), hidden: !h, children: d })],
    });
}
var lt = n(883646);
let ln = [];
function ll(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: o()(lt.xL, {
            [lt.Vb]: "in_progress" === t,
            [lt.cT]: "completed" === t,
            [lt.GZ]: "unfinished" === t,
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
                className: lt.Qd,
                itemClassName: lt.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: lt.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: lt.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function lr(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : ln), [n, t]),
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
        className: lt.X6,
        "data-shown": n && f ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    n4.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: lt.MA,
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
                      className: lt.qA,
                      children: `+${p}`,
                  })
                : null,
        ],
    });
}
function la(e) {
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
            ((t = (r ?? ln).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            i.useMemo(() => {
                let e = new Map();
                for (let t of r ?? ln) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let n = e.get(t.todoId);
                    null != n ? n.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, a.jsxs)("ul", {
        className: lt.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: o()(lt.AS, { [lt.J1]: "completed" === n }),
                        "data-arriving": u.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(ll, { status: n }),
                            (0, a.jsx)(v.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: lt.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: lt.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(lr, { agents: c.get(e.id) ?? ln, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: lt.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(ll, { status: "pending" }),
                          (0, a.jsx)(v.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: lt.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: lt.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function li(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let c = ei.intl.formatToPlainString(ea.default["P/I+JW"], { completed: o, total: u }),
        d = ei.intl.formatToPlainString(ea.default["7tzwKB"], { completed: o, total: u });
    return (0, a.jsx)(le, {
        title: ei.intl.string(ea.default.RtzECX),
        meta: (0, a.jsx)(n9, { children: c }),
        superseded: s,
        showLabel: ei.intl.string(ea.default.RKyN9q),
        hideLabel: ei.intl.string(ea.default.xydHoj),
        className: lt.Nr,
        bodyClassName: lt.rf,
        beforeBody: r && !s ? (0, a.jsx)(y.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(la, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var ls = n(308665),
    lo = n(59678),
    lu = n(903847);
function lc(e) {
    let { line: t, placement: n, todos: l, todosLive: r = !0, provisionalTodo: s, agents: u, onJumpToActivity: c } = e,
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
        _ = i.useCallback(() => y((e) => !e), []);
    return h
        ? (0, a.jsxs)("div", {
              className: lu.qd,
              "data-placement": f,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: o()(lu.vK, { [lu.ho]: p && d, [lu.ET]: !d }),
                      children: [
                          null == c
                              ? (0, a.jsx)("ol", {
                                    className: o()(lu.Rk, lo.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(n7.A, {
                                        glyph: (0, a.jsx)(ls.Ay, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(j.D, {
                                    className: lu.pZ,
                                    onClick: c,
                                    "aria-label": ei.intl.string(ea.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: o()(lu.Rk, lo.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(n7.A, {
                                            glyph: (0, a.jsx)(ls.Ay, {}),
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
                                        className: lu.BO,
                                        onClick: _,
                                        "aria-expanded": v,
                                        "aria-label": ei.intl.string(ea.default.RtzECX),
                                        children: (0, a.jsx)(n3.ClipboardListIcon, {
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
                            className: o()(lu.vB, { [lu.pg]: v && C, [lu.ui]: !v }),
                            children: (0, a.jsx)(li, {
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
var ld = n(658675),
    lf = n(22231),
    lm = n(826745),
    lh = n(123292);
let lg = {
        [eg.rbe.GUILD_TEXT]: "text",
        [eg.rbe.GUILD_VOICE]: "voice",
        [eg.rbe.GUILD_ANNOUNCEMENT]: "announcement",
        [eg.rbe.GUILD_STAGE_VOICE]: "stage",
        [eg.rbe.GUILD_FORUM]: "forum",
        [eg.rbe.GUILD_MEDIA]: "media",
    },
    lp = { channel: "#", role: "@", user: "@" },
    lx = {
        channel: [ea.default["9+dfPT"], ea.default.pGSJqE],
        role: [ea.default["2VkCoD"], ea.default.c8YlX8],
        user: [ea.default.GZIAxl, ea.default["4bptbQ"]],
    };
function lv(e, t) {
    return ei.intl.string(lx[e][+!!t]);
}
var lj = n(155078);
function lb(e) {
    return e.options.some((e) => null != e.image);
}
let ly = [];
function lk(e, t) {
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
var lw = n(890497),
    lA = n(300344),
    lN = n(614733),
    lC = n(904363),
    lS = n(950902),
    lE = n(384017);
function lI(e) {
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
        var t, r;
        return (
            (t = n.input ?? "channel"),
            (r = (e) => u.find((t) => t.value === e)?.label),
            e.slice(0, 10).map((e) => ({
                id: e,
                name: r(e) ?? l.find((t) => t.id === e)?.name ?? e,
                ...(function (e, t) {
                    if ("channel" === e) {
                        var n;
                        let l = null == (n = H.A.getChannel(t)?.type) ? void 0 : lg[n];
                        return { kind: e, ...(null == l ? {} : { channel_type: l }) };
                    }
                    if ("user" === e) {
                        let n = tJ.default.getUser(t)?.username;
                        return { kind: e, ...(null == n ? {} : { username: n }) };
                    }
                    return { kind: e };
                })(t, e),
            }))
        );
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
        className: lE.YX,
        "data-conjure-clarification-picker": n.input,
        children: m
            ? (0, a.jsx)(lw.Z, {
                  ...p,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => i(g(e), t),
              })
            : (0, a.jsx)(lw.Z, {
                  ...p,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => i(null == e ? [] : g([e]), t),
              }),
    });
}
function lM(e) {
    let { guildId: t, fallback: n, ...l } = e,
        r = (0, lA.A)(t, l.question.channel_filter);
    return null == r
        ? n
        : (0, a.jsx)(lI, { ...l, guildId: t, options: r, placeholder: lv("channel", !0 === l.question.multi_select) });
}
function l_(e) {
    let { guildId: t, ...n } = e,
        l = (0, lC.A)(t);
    return (0, a.jsx)(lI, { ...n, guildId: t, options: l, placeholder: lv("role", !0 === n.question.multi_select) });
}
function lT(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: i } = (0, lN.A)(t);
    return (0, a.jsx)(lI, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: i,
        placeholder: lv("user", !0 === n.question.multi_select),
    });
}
function lP(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, lS.Tj)(t, !0);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, a.jsx)(lM, { guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, a.jsx)(l_, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, a.jsx)(lT, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var lR = n(87221),
    lL = n(144228),
    lD = n(241326),
    l$ = n(26430),
    lO = n(750943),
    lF = n(95477),
    lz = n(256905),
    lq = n(73153),
    lG = n(839214);
let lU = [],
    lB = 1,
    lH = (0, lG.D)(() => ({ draftsByProject: {} }));
function lV(e, t, n) {
    return e.draftsByProject[t]?.[n] ?? lU;
}
function lK(e, t) {
    return lV(lH.getState(), e, t);
}
function lW(e, t, n) {
    let { draftsByProject: l } = lH.getState();
    lH.setState({ draftsByProject: { ...l, [e]: { ...l[e], [t]: n } } });
}
function lX(e, t, n, l) {
    let r = lK(e, t);
    return (
        !!r.some((e) => e.localId === n) &&
        (lW(
            e,
            t,
            r.map((e) => (e.localId === n ? { ...e, ...l } : e)),
        ),
        !0)
    );
}
function lY(e, t) {
    (0, ee.Vm)(e, t).catch((e) => {
        console.error("[vibegrations] attachment cleanup failed", e);
    });
}
function lJ(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && lY(e, t.ref.id));
}
function lZ(e, t) {
    let { deleteFromWorker: n } = t,
        { draftsByProject: l } = lH.getState(),
        r = l[e];
    if (null == r) return;
    for (let t of Object.values(r))
        for (let l of t ?? lU) n ? lJ(e, l) : null != l.previewUrl && URL.revokeObjectURL(l.previewUrl);
    let { [e]: a, ...i } = l;
    lH.setState({ draftsByProject: i });
}
function lQ(e) {
    return ei.intl.formatToPlainString(ea.default.JZ59Bo, { size: (0, X.sM)((0, X.Ju)(e)) });
}
function l0(e, t) {
    let n = lK(e, t);
    if (0 !== n.length) {
        for (let t of n) lJ(e, t);
        lW(e, t, lU);
    }
}
function l1(e, t) {
    let n = lK(e, t);
    if (0 === n.length) return [];
    for (let e of n) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (lW(e, t, lU), n.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function l2(e, t) {
    let { clarificationAnswers: n, attachments: l = [] } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = lK(e, "chat"),
        a = r.length > 0 && r.every((e) => "ready" === e.status) ? l1(e, "chat") : [];
    (0, ee.dv)(e, t, [...l, ...a], { clarificationAnswers: n });
}
function l3(e, t) {
    let [n, l] = i.useState(null),
        [r, a] = i.useState(!1),
        [s, o] = i.useState(0);
    return (
        i.useEffect(() => {
            let n = !1;
            return (
                (0, ee.PK)(e, t).then(
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
                    (0, ee.n6)(e, t).then(
                        (e) => {
                            e && 0 === s ? o(1) : a(!0);
                        },
                        () => a(!0),
                    ));
            }, [e, t, s]),
        }
    );
}
(lq.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(lH.getState().draftsByProject)) lZ(e, { deleteFromWorker: !0 });
}),
    lq.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        lZ(t, { deleteFromWorker: !1 });
    }));
var l7 = n(907702);
function l4(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: u, handleError: c } = l3(t, n),
        [d, f] = i.useState(null),
        m = null != s && d === s;
    return u
        ? (0, a.jsxs)("span", {
              className: o()(l7.Gt, l7.b6),
              children: [
                  (0, a.jsx)(lR.D, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: ei.intl.string(ea.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: o()(l7.Gt, { [l7.iP]: !m }),
              children:
                  null != s
                      ? (0, a.jsx)("img", {
                            src: s,
                            alt: l,
                            className: l7.Sl,
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
function l6(e) {
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
        x = ei.intl.formatToPlainString(ea.default.JGjZMs, { answer: r.label });
    return (0, a.jsxs)("div", {
        className: o()(l7.Vs, { [l7.Q9]: s, [l7.RX]: u }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, a.jsxs)(j.D, {
                className: l7.Up,
                "data-conjure-image-option-pick": !0,
                onClick: u ? void 0 : () => f(r),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), h(r, t));
                },
                role: i ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": ei.intl.formatToPlainString(ea.default.AQbxhf, { answer: r.label }),
                "aria-disabled": u,
                tabIndex: c && d ? 0 : -1,
                children: [
                    (0, a.jsxs)("span", {
                        className: l7.$_,
                        children: [
                            null != r.image
                                ? (0, a.jsx)(l4, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: g,
                                  })
                                : (0, a.jsx)("span", { className: l7.Gt }),
                            (0, a.jsx)("span", {
                                className: l7.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, a.jsx)(ld.P, { checked: s, disabled: u })
                                    : (0, a.jsx)(lL.T, { checked: s, disabled: u }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: l7.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, lj.E)(t) : "")
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
                      className: l7.B4,
                      children: (0, a.jsx)(b.m, {
                          text: ei.intl.string(ea.default.HQEXJM),
                          children: (0, a.jsx)(nt.K, {
                              icon: lD.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: p,
                              disabled: u,
                              "aria-label": ei.intl.string(ea.default.HQEXJM),
                              tabIndex: c ? 0 : -1,
                          }),
                      }),
                  })
                : null != r.image
                  ? (0, a.jsx)("span", {
                        className: l7.B4,
                        children: (0, a.jsx)(b.m, {
                            text: ei.intl.string(ea.default["4/eeDD"]),
                            children: (0, a.jsx)(nt.K, {
                                icon: l$._,
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
function l5(e) {
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
                    Promise.all(t.map((e) => (0, ee.PK)(n, e.image.attachment_id))).then(
                        (e) => {
                            (0, lz.R)({
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
        className: l7.Nz,
        "data-conjure-image-options": !0,
        children: [
            (0, a.jsxs)("div", {
                ref: g,
                className: o()(l7.fF, "gallery" === h ? l7.nV : l7.nM, { [l7.m3]: f }),
                role: f ? "group" : "radiogroup",
                "aria-labelledby": `${l.id}-label`,
                "data-layout": h,
                "data-count": m.length,
                children: [
                    m.map((e) =>
                        (0, a.jsx)(
                            l6,
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
                              l6,
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
            (0, a.jsx)(l8, {
                projectId: n,
                own: d,
                disabled: s,
                reachable: u,
                uploadText: ei.intl.string(/\bicons?\b/i.test(l.question) ? ea.default.qU4WN6 : ea.default.cbMDDB),
            }),
        ],
    });
}
function l8(e) {
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
        className: l7.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, a.jsxs)("div", {
                className: l7.QJ,
                children: [
                    (0, a.jsx)(w.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: lO.X,
                        text: s,
                        loading: "upload" === h,
                        disabled: l || "link" === h,
                        onClick: () => o.current?.click(),
                        tabIndex: m,
                        "data-conjure-own-image-upload": !0,
                    }),
                    u
                        ? null
                        : (0, a.jsx)(w.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: t9.LinkIcon,
                              text: ei.intl.string(ea.default["1TgOO+"]),
                              disabled: l || "upload" === h,
                              onClick: () => c(!0),
                              tabIndex: m,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, a.jsx)("input", {
                        ref: o,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: l7.Fg,
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
                                            : Promise.resolve({ errorText: lQ(r) })),
                                    ));
                        },
                    }),
                ],
            }),
            u
                ? (0, a.jsxs)("div", {
                      className: l7.vG,
                      children: [
                          (0, a.jsx)("div", {
                              className: l7.Hs,
                              children: (0, a.jsx)(lF.k, {
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
                              className: l7.gd,
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
                                  (0, a.jsx)(lh.Q, {
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
var l9 = n(29073);
function re(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: u } = e,
        c = i.useId(),
        d = !0 === t.recommended,
        f = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(j.D, {
        className: o()(lE.uK, { [lE.ue]: l, [lE.h4]: !0 === u }),
        onClick: l ? void 0 : () => r(t),
        "aria-label": ei.intl.formatToPlainString(d ? ea.default["2p6UFz"] : ea.default.AQbxhf, { answer: t.label }),
        "aria-describedby": f ? c : void 0,
        "aria-disabled": l,
        role: null != u ? "checkbox" : void 0,
        "aria-checked": u,
        tabIndex: s ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            null != u
                ? (0, a.jsx)("span", { className: lE.dy, children: (0, a.jsx)(ld.P, { checked: u, disabled: l }) })
                : (0, a.jsx)("span", { className: lE.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: lE.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: lE.l8,
                        children: (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: lE.ed,
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
                      className: lE.rM,
                      children: ei.intl.string(ea.default.zku6r1),
                  })
                : null,
        ],
    });
}
function rt(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: i = !0, onPick: s, own: o } = e,
        u = !0 === n.multi_select;
    return lb(n)
        ? (0, a.jsx)(l5, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: i, onPick: s, own: o })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      re,
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
let rn = [],
    rl = [];
function rr(e) {
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
        className: o()(lE.Ge, lE.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            f
                ? (0, a.jsx)(v.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: lE.aK,
                      children: ei.intl.string(ea.default.tE8qbz),
                  })
                : null,
            (0, a.jsx)(rt, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: lk(u, c),
            }),
            lb(n) || !1 === n.allow_custom
                ? null
                : (0, a.jsxs)("div", {
                      className: lE.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: lE.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(lf.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == d ? null : (0, a.jsx)("span", { className: o()(lE.Pu, lE.es), children: d }),
                      ],
                  }),
        ],
    });
}
function ra(e) {
    var t;
    let { projectId: n, clarification: l, onSubmit: r, onDismiss: s } = e,
        [u, c] = i.useState({}),
        [d, f] = i.useState({}),
        [m, h] = i.useState({}),
        [g, p] = i.useState({}),
        [x, y] = i.useState({}),
        [k, A] = i.useState(!1),
        [N, C] = i.useState(0),
        [S, E] = i.useState(null),
        [I, M] = i.useState(null),
        [_, P] = i.useState(null),
        [R, L] = i.useState(!1),
        D = i.useRef(null),
        [$, O] = i.useState(null),
        F = i.useRef(null),
        z = i.useRef(0),
        q = null == r,
        G = l.questions.length,
        U = Math.min(N, G - 1),
        B = l.questions[U],
        [H, V] = i.useState({ id: B.id, expanded: !1 }),
        K = H.id === B.id && H.expanded,
        [W, X] = i.useState(null),
        Y = d[B.id] ?? "",
        J = !0 === B.multi_select,
        Z = lb(B),
        Q = J ? (m[B.id] ?? rn) : ((t = u[B.id]), t?.kind === "option" ? [t.optionId] : ly),
        et = (function (e, t, n) {
            let [l, r] = i.useState({}),
                [a, s] = i.useState({}),
                [o, u] = i.useState({}),
                c = ei.intl.string(ea.default.wTsP5l),
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
                        if (o) return lk(h, f(i));
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
                                    ((0, ee.Vm)(e, h.attachment.id).catch(() => void 0),
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
        })(n, u, c),
        en = et.imageFor(B.id),
        el = et.selectedFor(B),
        { text: er, phase: es } = (0, ts.Q)(B.question),
        eo = er === B.question,
        eu = eo && W?.id === B.id && W.truncated;
    i.useLayoutEffect(() => {
        if (null == $ || K || !eo) return;
        function e() {
            if (null == $) return;
            let e = $.scrollHeight > $.clientHeight + 1;
            X((t) => (t?.id === B.id && t.truncated === e ? t : { id: B.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe($), () => t.disconnect());
    }, [eo, $, B.id, K]);
    let ec = ei.intl.string(K ? ei.t.iTcuma : ei.t.dcl9MQ),
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
                z.current += 1;
                let n = z.current;
                (E({ direction: t, moves: n }),
                    M({ question: B, draft: Y, selected: Q, ownImage: en, ownSelected: el, direction: t, moves: n }),
                    L(!0),
                    C(e));
            },
            [Y, en, el, B, Q],
        ),
        em = i.useCallback(() => {
            let e = D.current,
                t = F.current;
            null != e && null != t && P({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    i.useLayoutEffect(() => {
        let e = D.current,
            t = F.current;
        if (null == e || null == t) return;
        em();
        let n = new ResizeObserver(em);
        return (n.observe(e), n.observe(t), () => n.disconnect());
    }, [em]);
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
                                  let r = (n + e) % l.length,
                                      a = t[l[r].id];
                                  if (null == a || "" === a.text.trim()) return r;
                              }
                              return null;
                          })(l, t, U);
                null == n ? ed(t) : ef(n, n < U ? "back" : "forward");
            },
            [u, l, q, U, B.id, ed, ef],
        ),
        ep = i.useCallback(() => {
            q || 0 === U || ef(U - 1, "back");
        }, [q, U, ef]),
        ex = U > 0 && !q,
        ev = i.useCallback(
            (e) => {
                f((e) => ({ ...e, [B.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                Z ? q || c((e) => ({ ...e, [B.id]: t })) : eg(t);
            },
            [q, Z, B.id, eg],
        ),
        { multiPartFor: ej } = et,
        eb = i.useMemo(() => {
            var e;
            let t, n;
            return J
                ? ((e = ej(B)),
                  (t = Y.trim()),
                  (n = B.options.filter((e) => Q.includes(e.id)).map((e) => e.label)),
                  {
                      kind: "multi",
                      optionIds: Q,
                      ...("" === t ? {} : { custom: t }),
                      ...(null == e ? {} : { attachment: e.attachment }),
                      text: [...n, ...(null == e ? [] : [e.text]), ...("" === t ? [] : [t])].join(", "),
                  })
                : null;
        }, [Y, J, ej, B, Q]),
        ey = g[B.id] ?? rl,
        ek = i.useMemo(() => {
            var e, t;
            let n;
            return null != B.input
                ? ((e = B.input),
                  (t = x[B.id]),
                  (n = Y.trim()),
                  {
                      kind: "entities",
                      entities: ey,
                      ...(null == t ? {} : { guildId: t }),
                      ...("" === n ? {} : { custom: n }),
                      text: [
                          ...ey.map((t) => (t.name.startsWith(lp[e]) ? t.name : `${lp[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [Y, x, ey, B.id, B.input]),
        ew = i.useCallback(
            (e, t) => {
                (p((t) => ({ ...t, [B.id]: e })), y((e) => ({ ...e, [B.id]: t })));
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
        eD = i.useCallback(() => {
            null == eP || q || eg(eP);
        }, [q, eP, eg]),
        e$ = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, tO.vq)(e.target, HTMLTextAreaElement) ||
                    (0, tO.vq)(e.target, HTMLInputElement) ||
                    ((!(0, tO.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && ex
                            ? (e.preventDefault(), ep())
                            : "ArrowRight" === e.key && eR && (e.preventDefault(), eD())));
            },
            [ex, eR, ep, eD],
        ),
        eO = Z
            ? null
            : (0, a.jsxs)("div", {
                  className: lE.Xy,
                  children: [
                      (0, a.jsx)("span", {
                          className: lE.Gy,
                          "aria-hidden": !0,
                          children: (0, a.jsx)(lf.PencilIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                          }),
                      }),
                      (0, a.jsx)(lm.y, {
                          value: Y,
                          onChange: (e) => {
                              let { value: t } = e.currentTarget;
                              f((e) => ({ ...e, [B.id]: t }));
                          },
                          onKeyDown: (e) => {
                              "Enter" !== e.key ||
                                  e.shiftKey ||
                                  e.nativeEvent.isComposing ||
                                  (e.preventDefault(), eS());
                          },
                          placeholder: ei.intl.string(ea.default["tOC+tn"]),
                          "aria-label": ei.intl.formatToPlainString(ea.default["4JeYPB"], { question: B.question }),
                          disabled: q,
                          rows: 1,
                          className: lE.Pu,
                          "data-conjure-clarification-other": B.id,
                      }),
                  ],
              });
    return (0, a.jsxs)("section", {
        className: o()(lE.$O, { [lE.fI]: eE && !eM, [lE.Oh]: eM }),
        role: "dialog",
        "aria-label": B.question,
        "data-conjure-clarification": l.id,
        "data-state": q ? "inert" : "open",
        "data-question-expanded": K ? "true" : void 0,
        "data-picker-open": k && !R ? "true" : void 0,
        "data-step": U,
        tabIndex: -1,
        onKeyDown: e$,
        children: [
            (0, a.jsxs)("div", {
                className: lE.rf,
                style: null == _ ? void 0 : { height: _.heading + _.rows },
                "data-moving": R ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: D,
                        className: lE.wx,
                        children: [
                            (0, a.jsx)(v.E, {
                                ref: O,
                                tag: "span",
                                id: `${B.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: K ? void 0 : 5,
                                className: o()(l9.TK, lE.R_, { [lE.TB]: "exit" === es, [lE.JU]: "enter" === es }),
                                children: er,
                            }),
                            eu || K
                                ? (0, a.jsx)("div", {
                                      className: l9.Q7,
                                      children: (0, a.jsx)(b.m, {
                                          text: ec,
                                          children: (0, a.jsx)(nt.K, {
                                              icon: K ? tr.t : tH.a,
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
                                : (0, a.jsx)(j.D, {
                                      className: o()(l9.gb, l9.Q7),
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
                        className: lE.Cg,
                        style: null == _ ? void 0 : { insetBlockStart: _.heading },
                        children: (0, a.jsxs)("div", {
                            className: lE.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: F,
                                    className: lE.Ge,
                                    role: "group",
                                    "aria-labelledby": `${B.id}-label`,
                                    "data-direction": S?.direction,
                                    "data-parity": null == S ? void 0 : S.moves % 2,
                                    children: [
                                        J
                                            ? (0, a.jsx)(v.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: lE.aK,
                                                  children: ei.intl.string(ea.default.tE8qbz),
                                              })
                                            : null,
                                        (0, a.jsx)(rt, {
                                            projectId: n,
                                            question: B,
                                            selected: Q,
                                            disabled: q,
                                            onPick: (e) =>
                                                J
                                                    ? h((t) => {
                                                          var n, l;
                                                          let r;
                                                          return {
                                                              ...t,
                                                              [B.id]:
                                                                  ((n = t[B.id] ?? rn),
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
                                            own: eC,
                                        }),
                                        null != B.input
                                            ? (0, a.jsx)(lP, {
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
                                    : (0, a.jsx)(
                                          rr,
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
            G > 1 || J || Z || null != B.input
                ? (0, a.jsxs)("div", {
                      className: l9.qr,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  G > 1
                                      ? ei.intl.formatToPlainString(ea.default.yzYUjq, { index: U + 1, total: G })
                                      : null,
                          }),
                          (0, a.jsxs)("div", {
                              className: l9.zt,
                              children: [
                                  ex
                                      ? (0, a.jsx)(lh.Q, {
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
var ri = n(572253),
    rs = n(411236);
function ro(e) {
    let { projectId: t, request: n, onDismiss: l } = e,
        r = null != n.note && "" !== n.note ? n.note : ei.intl.string(ea.default.XuOf5s);
    return (0, a.jsx)(ri.A, {
        projectId: t,
        scopeKeys: n.keys,
        notifyAgent: !0,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: n, saving: i, submit: s } = e;
            function u(e) {
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
                      className: rs.Mk,
                      onSubmit: u,
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
                          (0, a.jsx)("div", { className: rs.p0, children: c }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: o()(l9.nd, l9.jx),
                      "aria-label": ei.intl.string(ea.default["jZjP+I"]),
                      onSubmit: u,
                      children: [
                          (0, a.jsxs)("div", {
                              className: l9.wx,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: l9.TK,
                                      children: ei.intl.string(ea.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(j.D, {
                                      className: o()(l9.gb, l9.Q7),
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
                              className: rs.DQ,
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
                              className: l9.qr,
                              children: (0, a.jsx)("div", { className: l9.zt, children: c }),
                          }),
                      ],
                  });
        },
    });
}
var ru = n(935208),
    rc = n(404373),
    rd = n(435558),
    rf = n.n(rd);
let rm = "VibegrationsComposerDrafts";
function rh() {
    return nL.w.get(rm) ?? {};
}
let rg = new Map(),
    rp = rf().throttle(() => {
        if (0 === rg.size) return;
        let e = rh();
        for (let [t, n] of rg) "" === n ? delete e[t] : (e[t] = n);
        (rg.clear(), nL.w.set(rm, e));
    }, 1e3);
class rx extends d.Ay.Store {
    getDraft(e) {
        let t = rg.get(e);
        return null != t ? t : (rh()[e] ?? "");
    }
}
let rv = new rx(lq.h, {
    LOGOUT: function () {
        return (rg.clear(), rp.cancel(), nL.w.remove(rm), !1);
    },
    CONJURE_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: n } = e;
        return (rg.set(t, n), rp(), "" === n && rp.flush(), !1);
    },
});
function rj(e) {
    return "" !== rv.getDraft(e).trim();
}
var rb = n(29080),
    ry = n(46054),
    rk = n(615839);
function rw(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : ei.intl.string(ea.default.KcFvbo);
}
function rA(e) {
    var t;
    let n,
        l,
        { steps: r, content: a, hasProposal: i, hasLiveClarification: s = !1, hasAttachments: o } = e,
        u = (0, n0.B4)(r),
        c = u.filter((e) => "message" === e.type).at(-1),
        d =
            !i &&
            null != c &&
            ((t = c.content),
            (n = t.trim()),
            (l = a.trim()),
            "" !== n && "" !== l && (n === l || (t.length >= 16e3 && l.startsWith(n))))
                ? c
                : null,
        f = u.filter((e) => e !== d),
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
        })({ hasAttachments: o, showsClosingMessage: h, endsOnStreamedMessage: (0, n0.Lf)(r) }),
    };
}
(n(134528), n(947204));
var rN = n(62617);
let rC = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    rS = {
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
    rE = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, rN.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, rN.Z)(),
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
                        () => (0, rN.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, rN.Z)(),
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
                        () => (0, rN.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, rN.Z)(),
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
                        () => (0, rN.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, rN.Z)(),
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
                        () => (0, rN.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, rN.Z)(),
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
                        () => (0, rN.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, rN.Z)(),
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
                        () => (0, rN.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, rN.Z)(),
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
                        () => (0, rN.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, rN.Z)(),
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
                        () => (0, rN.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, rN.Z)(),
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
                        () => (0, rN.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, rN.Z)(),
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
                        () => (0, rN.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
                    className: (0, rN.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
    };
function rI(e) {
    return { ...rE[e], name: ei.intl.string(rS[e]()) };
}
function rM(e) {
    return rC.includes(e) ? rI(e) : void 0;
}
function r_(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % rC.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, rC[(t + n) % rC.length]);
            }),
            l
        );
    })(e))
        t.set(n, rI(l));
    return t;
}
var rT = n(60160),
    rP = n(16634);
function rR(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        c = (0, n0.SY)(n.steps),
        d = u
            ? null != c
                ? (0, n0.WQ)(c)
                : rw(o)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(rw(e));
                  switch (e.status) {
                      case "failed":
                          return ei.intl.formatToPlainString(ea.default.YrVgOf, { task: t });
                      case "cancelled":
                          return ei.intl.formatToPlainString(ea.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return ei.intl.formatToPlainString(ea.default["++9woZ"], {
                                  task: t,
                                  duration: (0, rk.MB)(e.durationMs),
                              });
                          return ei.intl.formatToPlainString(ea.default.nmI9Uh, { task: t });
                      default:
                          return ei.intl.formatToPlainString(ea.default.nmI9Uh, { task: t });
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
                                    className: lo.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            rP.A,
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
                                      className: lo.iq,
                                      children: (0, a.jsx)(rT.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(n7.A, {
        glyph: (0, a.jsx)(n4.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: rw(o),
            position: "left",
            children: (0, a.jsx)("span", {
                className: lo.nC,
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
var rL = n(998445),
    rD = n(643210),
    r$ = n(648127),
    rO = n(372795),
    rF = n(163897);
let rz = "conjure-browser-viewer";
function rq(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, d.yK)(
            [rD.A],
            () =>
                n.flatMap((e) => {
                    let n = rD.A.getTab(t, e);
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
        className: rF.kR,
        "aria-label": ei.intl.string(ea.default.Uvkr1G),
        children: l.map((e) =>
            (0, a.jsx)("li", { children: (0, a.jsx)(rG, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function rG(e) {
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
        c = (0, te.useHasModalOpen)(rz),
        [d, f] = i.useState(!1),
        m = i.useCallback((e, t) => f(t), []),
        { ended: h } = l,
        g = (0, r$.i)(l.session);
    return (0, a.jsxs)(j.D, {
        innerRef: s,
        className: o()(rF.Nr, h && rF.Xj),
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
                    { modalKey: rz },
                )
            );
        },
        "aria-label": ei.intl.formatToPlainString(ea.default.G3a822, { title: g }),
        children: [
            (0, a.jsxs)("div", {
                className: rF.Gt,
                children: [
                    (0, a.jsx)(rO.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !u || c || h,
                        className: rF.Ji,
                        "aria-label": ei.intl.formatToPlainString(ea.default.rnwqXb, { name: g }),
                        onStateChange: m,
                    }),
                    d
                        ? null
                        : (0, a.jsx)("div", {
                              className: rF.qf,
                              children: (0, a.jsx)(rL.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    h
                        ? (0, a.jsx)("div", {
                              className: rF.HS,
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
                className: rF.pG,
                children: [
                    (0, a.jsx)("span", { className: o()(rF.W9, h && rF.oM) }),
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
var rU = n(268409);
let rB = new WeakMap(),
    rH = new WeakMap();
function rV(e) {
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
        o = (0, d.yK)(
            [ex.Ay],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = rB.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = rH.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), rH.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (rB.set(e, n), n);
                })(ex.Ay.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === o.length
        ? null
        : (0, a.jsx)("li", { className: rU.h, children: (0, a.jsx)(rq, { projectId: t, sessionIds: o }) });
}
var rK = n(469393);
function rW(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, tn.lG)(t.authored_at);
    return (0, a.jsx)(n5, {
        title: ei.intl.string(ea.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: rK.r,
            children: [
                (0, a.jsxs)("div", {
                    className: rK.z,
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
var rX = n(323384),
    rY = n(983851),
    rJ = n(794083),
    rZ = n(687966),
    rQ = n(632015),
    r0 = n(231483),
    r1 = n(430392),
    r2 = n(633018),
    r3 = n(885574);
let r7 = {
    [X.q7.APP_CHANNEL]: ea.default.zrk93C,
    [X.q7.VOICE_CHANNEL]: ea.default.r5Ra0p,
    [X.q7.ACTIVITY]: ei.t.IC5Ann,
    [X.q7.OVERLAY]: ea.default.liTNf3,
    [X.q7.PROFILE_WIDGET]: ea.default["EswAi+"],
    [X.q7.AUTOMOD]: ea.default.DnWMLj,
    [X.q7.BOT]: ea.default.VFWfz1,
    [X.q7.APPLICATION_COMMANDS]: ea.default.w7JaEP,
};
function r4(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let r6 = {
        [X.q7.APP_CHANNEL]: ea.default["3/aHX6"],
        [X.q7.VOICE_CHANNEL]: ea.default["3/aHX6"],
        [X.q7.ACTIVITY]: ea.default["3/aHX6"],
        [X.q7.OVERLAY]: ea.default["rPpf5/"],
        [X.q7.PROFILE_WIDGET]: null,
        [X.q7.AUTOMOD]: null,
        [X.q7.BOT]: null,
        [X.q7.APPLICATION_COMMANDS]: null,
    },
    r5 = [X.q7.OVERLAY, X.q7.ACTIVITY, X.q7.APP_CHANNEL, X.q7.VOICE_CHANNEL];
var r8 = n(176999),
    r9 = (((l = {}).IMAGE = "image"), l),
    ae = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    at = n(773669);
let an = [],
    al = {};
function ar(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function aa(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: r9.IMAGE,
        visibility: ae.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var ai = n(127258),
    as = n(587895),
    ao = n(320095),
    au = n(963852),
    ac = n(95701),
    ad = n(889227),
    af = n(155718);
let am = ["command", "user_command", "message_command", "message"],
    ah = new Set([af.kc.CHAT, af.kc.USER, af.kc.MESSAGE]);
function ag(e) {
    return e.type ?? af.kc.CHAT;
}
function ap(e) {
    return "launch" !== e.kind && ah.has(ag(e));
}
function ax(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function av(e, t) {
    let n = am.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !ax(e)), ...n.filter(ax)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || ax(r) || l.push(r);
    }
    return am.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
let aj = new ac.nA({ id: "1337", guild_id: "1337", type: eg.rbe.GUILD_TEXT, name: "preview" });
function ab(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, d.bG)([tJ.default], () => tJ.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, tQ.nj)(new ad.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let ay = /^@\S+/;
var ak = n(628284),
    aw = n(97808),
    aA = n(778712),
    aN = n(809115),
    aC = n(486020),
    aS = n(200700);
let aE = {
        alert: { label: () => ei.intl.string(ea.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => ei.intl.string(ea.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => ei.intl.string(ea.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => ei.intl.string(ea.default.RGzFNK), blockedStyle: !1 },
    },
    aI = {
        blocked: { label: () => ei.intl.string(ea.default.YdnZ8q), tone: "red" },
        alert: { label: () => ei.intl.string(ea.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => ei.intl.string(ea.default.RGzFNK), tone: "green" },
    },
    aM = ["blocked", "alert", "allowed"],
    a_ = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
var aT = n(984097),
    aP = n(13673);
let aR = { blocked: r0.ShieldIcon, alert: t4.BellIcon, allowed: ak.y },
    aL = {
        blurple: { text: "text-brand", icon: R.A.colors.TEXT_BRAND },
        red: { text: "text-feedback-critical", icon: R.A.colors.TEXT_FEEDBACK_CRITICAL },
        green: { text: "text-feedback-positive", icon: R.A.colors.TEXT_FEEDBACK_POSITIVE },
    };
function aD(e) {
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
                              null != (l = (0, aS.getFriendlyDurationString)(n))
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
function a$(e) {
    var t;
    let { example: n } = e,
        { label: l, blockedStyle: r } = aE[n.outcome];
    return (0, a.jsxs)("li", {
        className: o()(aT.nM, { [o()(aT.HV, aP.DX)]: r }),
        children: [
            (0, a.jsx)(y.A, { children: `${l()}: ` }),
            (0, a.jsx)("span", {
                className: aT.my,
                children: (0, a.jsx)(aw.eu, {
                    src: (0, aC.AE)(void 0, void 0),
                    size: aA._3.SIZE_24,
                    "aria-label": ei.intl.string(ea.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: aT.fw,
                children: [
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), ry.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    (0, a.jsx)(aD, { example: n }),
                ],
            }),
        ],
    });
}
function aO(e) {
    let { group: t } = e,
        n = i.useId(),
        l = aI[t.section],
        r = aR[t.section],
        s = aL[l.tone];
    return (0, a.jsxs)("div", {
        className: aT.uW,
        children: [
            (0, a.jsxs)("div", {
                className: aT.bV,
                children: [
                    (0, a.jsx)(r, { size: "xs", color: s.icon, "aria-hidden": !0 }),
                    (0, a.jsx)(v.E, {
                        id: n,
                        variant: "text-xs/semibold",
                        color: s.text,
                        className: aT.a9,
                        children: l.label(),
                    }),
                ],
            }),
            (0, a.jsx)("ul", {
                className: aT.Ge,
                "aria-labelledby": n,
                children: t.examples.map((e, t) => (0, a.jsx)(a$, { example: e }, t)),
            }),
        ],
    });
}
function aF() {
    let { avatarSrc: e, eventHandlers: t } = (0, aN.a)(!0);
    return (0, a.jsx)("span", {
        className: aT.Gy,
        ...t,
        children: (0, a.jsx)(aw.eu, { src: e, size: aA._3.SIZE_16, "aria-label": ei.intl.string(ei.t.hG1StD) }),
    });
}
function az(e) {
    var t;
    let { automod: n } = e;
    return (0, a.jsx)("div", {
        className: aT.K1,
        children: ((t = n.examples),
        aM
            .map((e) => ({ section: e, examples: t.filter((t) => a_[t.outcome] === e) }))
            .filter((e) => e.examples.length > 0)).map((e) => (0, a.jsx)(aO, { group: e }, e.section)),
    });
}
var aq = n(460905),
    aG = n(110384),
    aU = n(763754),
    aB = n(217424),
    aH = n(194085),
    aV = n(20851),
    aK = n(692508),
    aW = n(798819);
function aX(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, a.jsxs)("div", {
        className: o()(aW.item, aW.labelContainer, aW.colorDefault, {
            [aW.focused]: !0 === t.highlighted,
            [aW.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, a.jsx)("div", {
                      className: aW.iconContainerLeft,
                      children: (0, a.jsx)(n, { color: "currentColor", className: aW.icon }),
                  })
                : null,
            (0, a.jsx)("div", { className: o()(aW.label, aK.Gy), children: t.label }),
            null != l
                ? (0, a.jsx)("div", {
                      className: aW.iconContainer,
                      children: (0, a.jsx)(l, { color: "currentColor", className: aW.icon }),
                  })
                : null,
        ],
    });
}
function aY(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = i.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, a.jsx)("img", { src: l, alt: "", className: o()(t, aK.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: ei.intl.string(ei.t["5IEsGx"]), icon: aG.W, muted: !0 }
                : { label: ei.intl.string(ei.t.LYju5J), muted: !0 };
    return (0, a.jsx)("div", {
        className: o()(aW.menu, aK.MK),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: aW.scroller,
            children: [
                (0, a.jsx)(aX, { item: s }),
                (0, a.jsx)("div", { className: aW.separator }),
                (0, a.jsx)(aX, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
var aJ = n(381941);
function aZ() {}
function aQ(e) {
    let t,
        n,
        l,
        r,
        s,
        u,
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
        } = ((t = (0, d.bG)([tJ.default], () => tJ.default.getCurrentUser())),
        (n = (0, d.bG)([ek.Ay], () => ek.Ay.getProject(p))),
        (l = n?.application_id),
        (r = (0, d.bG)([as.A], () => as.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? ei.intl.string(ea.default.JEYq8M)),
        (u = (0, d.bG)([tJ.default], () => (null != l ? tJ.default.getUser(l) : void 0), [l])),
        (f = ab("31337", s, { bot: !0, enabled: !(c = u?.bot === !0) })),
        (m = c ? u : f),
        (h = ab("31338", ei.intl.string(ea.default["9iAOsw"]), { discriminator: "0003" })),
        (g = ab("31339", (0, tZ.mG)(t) ?? "", { enabled: null != t })),
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
                                      i = (0, ao.rh)({
                                          ...(0, au.Ay)({
                                              channelId: aj.id,
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
                                                        type: ai.G.APPLICATION_COMMAND,
                                                        user: (0, au.Vi)(s),
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
                                          (d(e ? n.memberMessage : n.targetMessage, e ? u : s, {
                                              menu: { target: e ? "user" : "message", commandName: t.user },
                                          }),
                                              d(t.bot, i, {
                                                  interactionName: t.user,
                                                  messageType: eg.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((l = t.user), l.trim().replace(ay, `<@${i.id}>`)), s),
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
              className: o()(aK.TE, `group-spacing-${aJ.ES}`),
              children: v.map((e) => {
                  let { key: t, record: n, isCommandReply: l, menu: r } = e;
                  return (0, a.jsxs)(
                      "li",
                      {
                          className: null != r ? aK.Rz : void 0,
                          children: [
                              (0, a.jsx)(aV.A, {
                                  message: n,
                                  channel: aj,
                                  author: (0, aU.FT)(n.author, aj),
                                  isGroupStart: !0,
                                  avatarOverride: n.author.bot ? (j ?? void 0) : void 0,
                                  childrenExecutedCommand: l ? (0, a.jsx)(aB.A, { message: n, channel: aj }) : void 0,
                                  usernameClassName: r?.target === "user" ? aK.Ct : void 0,
                                  disableInteraction: !0,
                              }),
                              r?.target === "message"
                                  ? (0, a.jsx)("div", {
                                        className: aK.S3,
                                        inert: !0,
                                        "aria-hidden": !0,
                                        children: (0, a.jsxs)(aH.Ay, {
                                            children: [
                                                (0, a.jsx)(aH.qv, {
                                                    label: ei.intl.string(ei.t.lfIHs4),
                                                    icon: aq.n,
                                                    onClick: aZ,
                                                }),
                                                (0, a.jsx)(aH.qv, {
                                                    label: ei.intl.string(ei.t["5IEsGx"]),
                                                    icon: aG.W,
                                                    onClick: aZ,
                                                }),
                                                (0, a.jsx)(aH.qv, {
                                                    label: ei.intl.string(ei.t["UKOtz+"]),
                                                    icon: nn.MoreHorizontalIcon,
                                                    selected: !0,
                                                    onClick: aZ,
                                                }),
                                            ],
                                        }),
                                    })
                                  : null,
                              null != r
                                  ? (0, a.jsx)("div", {
                                        className: "user" === r.target ? aK.ET : aK.je,
                                        inert: !0,
                                        children: (0, a.jsx)(aY, {
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
var a0 = n(633075),
    a1 = n(946356),
    a2 = n(58216),
    a3 = n(27399);
function a7(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, d.bG)([tJ.default], () => tJ.default.getCurrentUser()),
        r = i.useMemo(() => new a0.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: a3.H,
              children: (0, a.jsx)(a1.A.Overlay, {
                  className: a3.w,
                  children: (0, a.jsx)(a2.A, {
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
var a4 = n(443863);
let a6 = {
    [X.q7.APP_CHANNEL]: rX.k,
    [X.q7.VOICE_CHANNEL]: rY.H,
    [X.q7.ACTIVITY]: rJ.b,
    [X.q7.OVERLAY]: rZ.GameControllerIcon,
    [X.q7.PROFILE_WIDGET]: rQ.f,
    [X.q7.AUTOMOD]: r0.ShieldIcon,
    [X.q7.BOT]: r1.RobotIcon,
    [X.q7.APPLICATION_COMMANDS]: r2.k,
};
function a5(e) {
    let { label: t, icon: n, info: l, children: r } = e;
    return (0, a.jsxs)("section", {
        className: a4.uW,
        children: [
            (0, a.jsxs)("span", {
                className: a4.a9,
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
function a8(e) {
    let { text: t, label: n } = e;
    return (0, a.jsx)(b.m, {
        text: t,
        children: (0, a.jsx)(j.D, {
            className: a4.bk,
            "aria-label": n,
            children: (0, a.jsx)(r3.CircleInformationIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
function a9(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)(a5, {
              label: t,
              children: (0, a.jsx)("div", {
                  className: a4.Ip,
                  children: n.map((e) =>
                      (0, a.jsx)(
                          "span",
                          {
                              className: a4.jw,
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
function ie(e) {
    let { tags: t } = e;
    return (0, a.jsx)("span", {
        className: a4.K2,
        children: t
            .filter((e) => e in a6)
            .map((e) => {
                let t = a6[e];
                return (0, a.jsxs)(
                    "span",
                    {
                        className: a4.L6,
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
                                children: ei.intl.string(r7[e]),
                            }),
                        ],
                    },
                    e,
                );
            }),
    });
}
function it(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: s, gone: o, handleError: u } = l3(t, r),
        c = i.useCallback(() => {
            (0, ee.PK)(t, r).then(
                (e) => {
                    (0, lz.R)({
                        items: [{ type: "IMAGE", url: e, alt: l }],
                        startingIndex: 0,
                        shouldHideMediaOptions: !0,
                        location: "VibegrationsChat",
                    });
                },
                () => {},
            );
        }, [t, r, l]);
    return o
        ? null
        : (0, a.jsx)(a5, {
              label: ei.intl.string(ea.default.X15LLY),
              info: (0, a.jsx)(a8, {
                  text: ei.intl.string(ea.default.nR4B8P),
                  label: ei.intl.string(ea.default.nc0SNY),
              }),
              children: (0, a.jsx)(j.D, {
                  className: a4.xX,
                  onClick: c,
                  "aria-label": ei.intl.string(ea.default.TvAPIm),
                  children: null != s ? (0, a.jsx)("img", { src: s, alt: l, className: a4.sN, onError: u }) : null,
              }),
          });
}
function il(e) {
    let t,
        n,
        l,
        r,
        { projectId: s, proposal: o, version: u, onApprove: c } = e,
        f = r4(o, X.q7.AUTOMOD) ? o.automod : null,
        { botExchanges: m } =
            ((t = r4(o, X.q7.APPLICATION_COMMANDS)),
            (n =
                r4(o, X.q7.BOT) || t
                    ? null != o.bot
                        ? o.bot.interaction
                        : t && o.commands.some(ap)
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
                              let s = e.commands.filter(ap).map((e) =>
                                      (function (e, t) {
                                          let n = e.description?.trim() ?? "",
                                              l = "" !== n ? n : t.reply;
                                          switch (ag(e)) {
                                              case af.kc.USER:
                                                  return { kind: "user_command", user: e.name, bot: l };
                                              case af.kc.MESSAGE:
                                                  return { kind: "message_command", user: e.name, bot: l };
                                              default:
                                                  return { kind: "command", user: `/${e.name}`, bot: l };
                                          }
                                      })(e, n),
                                  ),
                                  o = "messages" === t ? [] : s.filter(ax),
                                  u = a.length > 0 ? av([...a, ...o], !0) : av("both" === t ? [...s, i] : s, !1);
                              return u.length > 0 ? u : [r];
                          })(o, n, {
                              message: ei.intl.string(ea.default.J7qggf),
                              reply: ei.intl.string(ea.default.nqYtiy),
                              event: ei.intl.string(ea.default["05lU9W"]),
                          }),
                [o, n],
            )),
            { botInteraction: n, botExchanges: l }),
        h = (function (e, t) {
            let { widget_config: n, widget_preview: l } = t,
                r = (0, d.bG)([at.default], () => at.default.locale),
                a = (0, d.bG)([ek.Ay], () => {
                    let t = ek.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = i.useState(al);
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
                                                          ...ar(n),
                                                          ...(null != n.fallback ? { fallback: ar(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let a = r8.uW.safeParse(r);
                                  if (!a.success) return null;
                                  let i = a.data;
                                  return null == i[tN.m.WIDGET_TOP] || null == i[tN.m.WIDGET_BOTTOM]
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
                                                                    type: r8.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof a
                                                                ? (r[e] = { type: r8.oG.NUMBER, value: a })
                                                                : (r[e] = { type: r8.oG.STRING, value: a });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(aa),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: an,
                                            },
                                        };
                              })(n, l, s, r),
                    [n, l, s, r],
                );
            return i.useMemo(() => (null == a || null == o ? null : { applicationId: a, rendererProps: o }), [a, o]);
        })(s, o),
        g = r4(o, X.q7.PROFILE_WIDGET) ? h : null,
        p = u?.superseded === !0,
        x = o.what_changed?.trim() ?? "";
    return (0, a.jsxs)(le, {
        title:
            p && null != u
                ? ei.intl.formatToPlainString(ea.default.YZ3qJs, { version: u.version })
                : ei.intl.string(ea.default["3b6e7o"]),
        meta: p
            ? (0, a.jsx)(n9, { children: ei.intl.string(ea.default.hF2c41) })
            : (0, a.jsx)(ie, { tags: o.supported_surfaces ?? [] }),
        superseded: p,
        showLabel: ei.intl.string(ea.default.yD8EJS),
        hideLabel: ei.intl.string(ea.default.nSPGNb),
        bodyClassName: a4.rf,
        "data-conjure-plan-card": !0,
        children: [
            "" !== x
                ? (0, a.jsx)(a5, {
                      label: ei.intl.string(ea.default.iNS4dl),
                      children: (0, a.jsx)(v.E, {
                          variant: "experimental/body-md/normal",
                          color: "text-default",
                          selectable: !0,
                          children: x,
                      }),
                  })
                : null,
            (0, a.jsx)(v.E, {
                variant: "experimental/body-md/normal",
                color: "text-default",
                selectable: !0,
                children: o.summary,
            }),
            null != f && f.examples.length > 0
                ? (0, a.jsx)(a5, {
                      label: ei.intl.string(ea.default.z4ZKYG),
                      icon: (0, a.jsx)(aF, {}),
                      info: (0, a.jsx)(a8, {
                          text: ei.intl.string(ea.default.bo4MOx),
                          label: ei.intl.string(ea.default.VPLNot),
                      }),
                      children: (0, a.jsx)(az, { automod: f }),
                  })
                : null,
            null != o.design_image
                ? (0, a.jsx)(it, {
                      projectId: s,
                      design: o.design_image,
                      alt: ei.intl.string(null == (r = r5.find((e) => r4(o, e))) ? ea.default["3/aHX6"] : r6[r]),
                  })
                : null,
            m.length > 0
                ? (0, a.jsx)(a5, {
                      label: ei.intl.string(ea.default.sA1lTv),
                      info: (0, a.jsx)(a8, {
                          text: ei.intl.string(ea.default.NnmbJu),
                          label: ei.intl.string(ea.default.KsqQJX),
                      }),
                      children: (0, a.jsx)(aQ, { projectId: s, exchanges: m }),
                  })
                : null,
            null != g
                ? (0, a.jsx)(a5, {
                      label: ei.intl.string(ea.default.ove4zH),
                      info: (0, a.jsx)(a8, {
                          text: ei.intl.string(ea.default.XcIrHx),
                          label: ei.intl.string(ea.default["TwT+ht"]),
                      }),
                      children: (0, a.jsx)(a7, { ...g }),
                  })
                : null,
            o.changes.length > 0
                ? (0, a.jsx)(a5, {
                      label: ei.intl.string(ea.default["5+mG1z"]),
                      children: (0, a.jsx)("ul", {
                          className: a4.p_,
                          children: o.changes.map((e, t) =>
                              (0, a.jsx)(
                                  "li",
                                  {
                                      className: a4.Aw,
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
            o.commands.length > 0
                ? (0, a.jsx)(a5, {
                      label: ei.intl.string(ei.t["0hKkS+"]),
                      children: (0, a.jsx)("ul", {
                          className: a4.p_,
                          children: o.commands.map((e, t) =>
                              (0, a.jsxs)(
                                  "li",
                                  {
                                      className: a4.uX,
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
            (0, a.jsx)(a9, { label: ei.intl.string(ea.default["2UbW6r"]), names: o.bot_permissions ?? [] }),
            (0, a.jsx)(a9, { label: ei.intl.string(ea.default["7TKfpj"]), names: o.privileged_intents ?? [] }),
            null == c || p
                ? null
                : (0, a.jsxs)("div", {
                      className: a4.o1,
                      children: [
                          (0, a.jsx)(w.$, {
                              variant: "primary",
                              size: "sm",
                              text: ei.intl.string(ea.default["6S+wRM"]),
                              onClick: c,
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
function ir(e) {
    return null != e && e.status?.state === "unpublished";
}
let ia = new WeakMap();
function ii(e) {
    let { publish: t } = e,
        n = t.guildId,
        l = (0, d.bG)([K.A], () => (null == n ? null : K.A.getGuild(n)));
    return (0, a.jsx)(nh.B, {
        gap: 8,
        align: "start",
        children: (0, a.jsxs)(nh.B, {
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
                    ? (0, a.jsxs)(nh.B, {
                          direction: "horizontal",
                          gap: 4,
                          align: "center",
                          children: [
                              (0, a.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: ei.intl.string(ea.default["+HGTlC"]),
                              }),
                              (0, a.jsx)(eF.Ay, { guild: l, size: eF.Ay.Sizes.SMOL }),
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
function is(e) {
    let { projectId: t } = e,
        n = (0, nu.Ay)(t);
    return null != n && ir(n) ? (0, a.jsx)(ii, { publish: n }) : null;
}
var io = n(478016),
    iu = n(989271);
function ic(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        s = null == l;
    return (0, a.jsxs)(j.D, {
        className: o()(iu.nM, { [iu.f1]: s, [iu.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": ei.intl.formatToPlainString(ea.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: iu.jo,
                children: [
                    n
                        ? (0, a.jsx)(io.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: iu.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(v.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: iu.G9,
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
function id(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(n5, {
        title: ei.intl.string(ea.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                ic,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
function im(e) {
    let { onAsk: t } = e;
    return (0, a.jsx)(nh.B, {
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
var ih = n(530557),
    ig = n(872162);
function ip(e, t) {
    return { cardId: e, status: "pending" === t ? null : t };
}
var ix = n(202723);
function iv(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: u } = e,
        c = i.useCallback(() => {
            (0, te.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("291953"), n.e("408337")]).then(n.bind(n, 789864));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        d = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: ih.R })), [r.fields]),
        f = (function (e, t) {
            let [n, l] = i.useState(() => ip(e, t));
            return n.cardId !== e || (null == n.status && "pending" !== t)
                ? (l(ip(e, t)), !1)
                : null != n.status && t !== n.status;
        })(l, s),
        m = o()(ix.Lo, { [ix.jY]: f });
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
                        (0, a.jsx)(ig.C, { label: ei.intl.string(ea.default.HCQvpO), size: "xs", items: d }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, a.jsx)(
                  "article",
                  {
                      className: ix.Lo,
                      children: (0, a.jsx)(ig.C, { label: ei.intl.string(ea.default.HCQvpO), size: "xs", items: d }),
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
                                className: ix.$h,
                                children: [
                                    (0, a.jsx)("span", {
                                        className: ix.c9,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(ak.y, {
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
                            (0, a.jsx)(ig.C, { label: ei.intl.string(ea.default.sfp7Up), size: "xs", items: d }),
                        ],
                    },
                    s,
                )
              : (0, a.jsxs)("article", {
                    className: ix.Lo,
                    children: [
                        (0, a.jsx)(v.E, {
                            variant: "text-xs/semibold",
                            color: null != u ? "text-brand" : "text-muted",
                            tag: "span",
                            children: ei.intl.string(null != u ? ea.default.O0QIqj : ea.default.HCQvpO),
                        }),
                        (0, a.jsx)(v.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            selectable: !0,
                            children: null != r.note && "" !== r.note ? r.note : ei.intl.string(ea.default.MPGSHL),
                        }),
                        (0, a.jsx)(ig.C, { label: ei.intl.string(ea.default.HCQvpO), size: "xs", items: d }),
                        (0, a.jsx)("div", {
                            className: ix.sq,
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
var ij = n(919790),
    ib = n(971824),
    iy = n(162052),
    ik = n(165648);
function iw(e) {
    let t = r_(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? rM(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: rw(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function iA(e) {
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
        x = i.useMemo(() => (0, n0.Jf)(n, l), [n, l]),
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
            className: lo.pj,
            "data-live": !1,
            children: (0, a.jsx)(n7.A, {
                glyph: (0, a.jsx)(rb.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: ei.intl.string(ea.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (p ?? (h ? (x.turn?.durationMs ?? o) : void 0)),
        b = m ? ((0, n0.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = r_(k.map((e) => e.taskId)),
        A = !g && (l || k.some((e) => "running" === e.task.status)),
        N = iw(k);
    return (0, a.jsxs)("ol", {
        className: lo.pj,
        "data-live": A,
        children: [
            (0, a.jsx)(n2.A, {
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
                let l = null != e.task.helperMark ? rM(e.task.helperMark) : void 0,
                    r = l ?? w.get(e.taskId);
                return null == r
                    ? null
                    : (0, a.jsx)(
                          rR,
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
            (0, a.jsx)(rV, { projectId: t, steps: n, tree: x, segment: f }),
            y
                ? (0, a.jsx)("li", {
                      className: lo.YO,
                      children: (0, a.jsx)(li, { todos: b, provisional: d, agents: N, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function iN(e) {
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
            pickedIdeaIds: j,
            onApprovePlan: b,
            sideReply: y = !1,
            sideReplyAcknowledges: k,
            hoistedProse: w = !1,
            hoistedAttachmentsHost: A,
            restoreProposal: N,
            onRestoreProposal: C,
        } = e,
        S = i.useMemo(
            () => rA({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != c && c.length > 0 }),
            [n, l, r, c],
        ),
        { streamed: E, lastStreamedMessage: I, showsClosingMessage: M, closingContent: _ } = S,
        T = (w ? A : void 0) ?? S.attachmentsHost,
        P = M && !w,
        R = null == c ? null : (0, a.jsx)(ij.A, { projectId: t, attachments: c }),
        L = null == R ? null : (0, a.jsx)("div", { className: lo.MT, children: R }),
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
        className: lo.ue,
        children: [
            E.length > 0 && !w
                ? (0, a.jsx)("ol", {
                      className: lo.dO,
                      children: E.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: lo.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: ik.PT,
                                          children: ry.A.parse(e.content, !0, {
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
                ? (0, a.jsx)(il, { projectId: t, proposal: r, version: s, onApprove: b })
                : P
                  ? (0, a.jsxs)("div", {
                        className: o()(lo.ky, iy.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: o()(ik.PT, lo.cW),
                                children: ry.A.parse(_, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === T ? L : null,
                            D,
                        ],
                    })
                  : null,
            null != d
                ? (0, a.jsx)("div", {
                      className: o()(lo.ky, iy.XR, { [ib.O]: null != m && "open" === h }),
                      children: (0, a.jsx)(iv, {
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
                      className: o()(lo.ky, iy.XR),
                      children: (0, a.jsx)(ro, { projectId: t, request: g }),
                  })
                : null,
            "standalone" !== T && ("closing" !== T || P) ? null : R,
            null != p ? (0, a.jsx)(is, { projectId: t }) : null,
            null != u && u.length > 0 ? (0, a.jsx)(id, { ideas: u, pickedIdeaIds: j, onPick: x }) : null,
            null != N ? (0, a.jsx)(rW, { proposal: N, onRestore: C }) : null,
            P ? null : D,
        ],
    });
}
var iC = n(146806),
    iS = n(477262),
    iE = n(432017),
    iI = n(475358),
    iM = n(717400),
    i_ = n(663341),
    iT = n(559647),
    iP = n(775602),
    iR = n(234320),
    iL = n(285796),
    iD = n(922329);
async function i$(e) {
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
var iO = n(153171);
let iF = X.lN;
function iz(e, t, n, l) {
    let r = lK(e, t).length;
    !(function (e, t, n) {
        if (0 === n.length) return;
        let l = n.map((e) => {
            let { draft: t, upload: n } = e;
            return { draft: { ...t, localId: lB++ }, upload: n };
        });
        for (let { draft: n, upload: r } of (lW(e, t, [
            ...lK(e, t),
            ...l.map((e) => {
                let { draft: t } = e;
                return t;
            }),
        ]),
        l))
            r?.().then(
                (l) => {
                    if ("errorText" in l) return void lX(e, t, n.localId, { status: "error", errorText: l.errorText });
                    let { converted: r, ...a } = l;
                    lX(e, t, n.localId, { ...r, status: "ready", ref: a })
                        ? setTimeout(
                              () =>
                                  lX(e, t, n.localId, {
                                      status: "error",
                                      errorText: ei.intl.string(ea.default.E7dS5n),
                                  }),
                              X.o2 - 3e5,
                          )
                        : lY(e, a.id);
                },
                (l) => {
                    (console.error("[vibegrations] attachment upload failed", l),
                        lX(e, t, n.localId, { status: "error", errorText: ei.intl.string(ea.default["kUw/b1"]) }));
                },
            );
    })(
        e,
        t,
        n.map((e) => {
            let t = "" === e.type ? "application/octet-stream" : e.type,
                n = { name: e.name, contentType: t };
            if (r++ >= iF)
                return {
                    draft: {
                        ...n,
                        status: "error",
                        errorText: ei.intl.formatToPlainString(ea.default.Q0aCVZ, { count: iF }),
                    },
                };
            if (!(0, X.Oq)(e.size, t))
                return "image/png" === t && e.size <= X.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas
                    ? {
                          draft: { ...n, status: "uploading", previewUrl: URL.createObjectURL(e) },
                          upload: async () => {
                              let n = await i$(e).catch(() => null);
                              return null != n && (0, X.Oq)(n.size, n.type)
                                  ? { ...(await l(n)), converted: { name: n.name, contentType: n.type } }
                                  : { errorText: lQ(t) };
                          },
                      }
                    : { draft: { ...n, status: "error", errorText: lQ(t) } };
            let a = X.XB.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...n, status: "uploading", previewUrl: a }, upload: () => l(e) };
        }),
    );
}
function iq(e) {
    let { projectId: t, surface: n, onUploadFile: l } = e,
        r = lH.useState((e) => lV(e, t, n)),
        a = i.useCallback((e) => iz(t, n, e, l), [t, n, l]),
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
                null != (r = (l = lK(t, n)).find((t) => t.localId === e)) &&
                    (lJ(t, r),
                    lW(
                        t,
                        n,
                        l.filter((t) => t.localId !== e),
                    ));
            },
            [t, n],
        ),
        u = i.useCallback(() => l1(t, n), [t, n]);
    return {
        drafts: r,
        addFiles: a,
        pasteFiles: s,
        removeDraft: o,
        settled: r.every((e) => "ready" === e.status),
        takeRefs: u,
    };
}
function iG(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(iD.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(k.y, { type: k.t.SPINNING_CIRCLE_SIMPLE, className: iO.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: iO.o1,
                onClick: () => n(t.localId),
                "aria-label": ei.intl.string(ea.default.Slam9g),
                children: (0, a.jsx)(iL.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var iU = n(497437);
let iB = [
        {
            id: "add-images-videos",
            label: ea.default["51+9lc"],
            icon: iS.s,
            accept: "image/*,video/*,.png,.jpg,.jpeg,.gif,.webp,.avif,.heic,.heif,.svg,.bmp,.mp4,.m4v,.mov,.webm,.mkv,.avi",
        },
        {
            id: "add-sounds",
            label: ea.default["10ljr2"],
            icon: iE.T,
            accept: "audio/*,.mp3,.wav,.ogg,.oga,.opus,.m4a,.aac,.flac,.weba,.webm,.aif,.aiff,.mid,.midi",
        },
        { id: "add-other-files", label: ea.default.aotDee, icon: Q.H, accept: "" },
    ],
    iH = "text-md/normal",
    iV = null;
function iK(e) {
    let { text: t, offering: n, typed: l } = e,
        [r, s] = i.useState(t),
        u = i.useRef(null),
        c = i.useRef(null),
        f = i.useRef(0),
        [m, h] = i.useState(0),
        [g, p] = i.useState(0),
        [x, j] = i.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
    (i.useLayoutEffect(() => {
        let e = u.current,
            t = e?.parentElement;
        if (null == e || null == t) return;
        let n = f.current;
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
            j({
                frontFrom: 1e3 * (0, iC._R)(f),
                frontTo: 1e3 * (0, iC._R)(m),
                backFrom: 1e3 * (0, iC.T)(f),
                backTo: 1e3 * (0, iC.T)(m),
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
    let C = "in" === k ? x.backFrom : x.frontFrom,
        S = "out" === k ? x.frontTo : x.backTo,
        E = (0, d.bG)([iP.Ay], () => iP.Ay.useReducedMotion),
        I = t === ei.intl.string(ea.default.Zc7gML),
        M = r === t && I;
    function _(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: o()(iU.VT, { [iU.qk]: l }),
            style: l
                ? {
                      insetInlineStart: m,
                      "--custom-cap-wipe-delay": `${C}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, S - C)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": l && b > 0 && null != k ? b % 2 : void 0,
            "data-wipe-kind": l ? (k ?? void 0) : void 0,
            children: (0, a.jsx)(iI.e, { shortcut: "tab", className: iU.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(eI.o, {
                text: t,
                variant: iH,
                delay: null,
                duration: 1e3,
                trailingWidth: g,
                className: o()(iU.xM, { [iU.s2]: l }),
                onStart: N,
                onComplete: () => s(t),
            }),
            _(iU.IS, n || (!E && "out" === k), u),
            (0, a.jsx)("span", {
                ref: c,
                className: iU.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(v.E, { variant: iH, tag: "span", children: t }),
            }),
            M
                ? (0, a.jsxs)("span", {
                      className: iU.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(v.E, { variant: iH, tag: "span", className: iU.xM, children: t }),
                          _(iU.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let iW = i.memo(function (e) {
        let {
                projectId: t,
                canSend: n,
                stopped: l,
                running: r,
                restoring: s = !1,
                onSend: o,
                onInterrupt: u,
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
            [k, w] = i.useState(() => rv.getDraft(t)),
            A = i.useCallback(
                (e) => {
                    ((0, ey.I$)(t, e), w(e));
                },
                [t],
            ),
            N = "" !== k.trim();
        i.useEffect(() => x?.(N), [N, x]);
        let [C, S] = i.useState(t);
        C !== t && (S(t), w(rv.getDraft(t)));
        let E = (0, d.bG)([iP.Ay], () => iP.Ay.isSubmitButtonEnabled),
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
            } = iq({ projectId: t, surface: "chat", onUploadFile: c }),
            O = "" !== k.trim() || T.length > 0 || p,
            F = n && O && D,
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
                let e = $();
                o(k, e.length > 0 ? e : void 0);
                let t = (function (e, t, n) {
                    let l,
                        r,
                        a = n.split("\n", 1)[0] ?? "";
                    if (null == e || "" === a) return a;
                    null == iV && (iV = document.createElement("canvas").getContext("2d"));
                    let i = iV;
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
                })(X.current?.querySelector("textarea") ?? null, ec.current, k);
                ("" !== t && q(t), A(""));
            }, [F, k, o, $, A]),
            U = i.useCallback(
                (e) => {
                    (e.preventDefault(), G());
                },
                [G],
            ),
            B = i.useCallback(() => {
                null == u || I || (M(!0), u());
            }, [u, I]),
            H = null == h || "" !== k || !n || l || s || p ? null : h,
            V = i.useCallback(
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
                        null != f && (e.preventDefault(), f());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), G());
                },
                [G, f, r, u, I, B, H, A],
            ),
            K = i.useCallback(
                (e) => {
                    n && R(e);
                },
                [n, R],
            );
        (0, iR.Vo)({
            event: eg.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return K(t);
            },
        });
        let W = i.useCallback(
                (e) => {
                    (P(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
                },
                [P],
            ),
            X = i.useRef(null),
            Q = i.useRef(null),
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
                let t = iJ(e);
                null != t && en(t);
            }
            er(!0);
            let t = setTimeout(() => er(!1), iX);
            return () => clearTimeout(t);
        }, [k]);
        let es = i.useMemo(() => ({ "--custom-glow-x": `${et}px` }), [et]),
            eo = el ? ` ${iU.EB}` : "",
            eu = s
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
            ep = z ?? H ?? eu,
            ex = "" === k && "" !== ep;
        return (0, a.jsxs)("form", {
            onSubmit: U,
            className: iU.DA,
            children: [
                T.length > 0
                    ? (0, a.jsx)("div", {
                          className: iU.lN,
                          children: T.map((e) => (0, a.jsx)(iG, { draft: e, onRemove: L }, e.localId)),
                      })
                    : null,
                (0, a.jsx)("span", { className: `${iU.wg} ${iU.LP}${eo}`, style: es, "aria-hidden": !0 }),
                (0, a.jsx)("span", { className: `${iU.wg} ${iU.L3}${eo}`, style: es, "aria-hidden": !0 }),
                (0, a.jsxs)("div", {
                    className: iU.VA,
                    ref: X,
                    children: [
                        (0, a.jsx)("input", {
                            ref: _,
                            type: "file",
                            multiple: !0,
                            onChange: W,
                            className: iU.nY,
                            tabIndex: -1,
                            "aria-hidden": !0,
                        }),
                        (0, a.jsx)(Y.Y, {
                            targetElementRef: Q,
                            position: "top",
                            align: "left",
                            animation: Y.Y.Animation.NONE,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, a.jsx)(J.W, {
                                    "data-menu-migrated": !0,
                                    navId: "conjure-composer-attach",
                                    "aria-label": ei.intl.string(ei.t.d56gCa),
                                    onClose: t,
                                    onSelect: t,
                                    children: (0, a.jsxs)(Z.rX, {
                                        children: [
                                            iB.map((e) =>
                                                (0, a.jsx)(
                                                    Z.Dr,
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
                                                ? (0, a.jsx)(Z.Dr, {
                                                      id: "import-project",
                                                      label: ei.intl.string(ea.default["p/k5i7"]),
                                                      iconLeft: iM.q,
                                                      leadingAccessory: { type: "icon", icon: iM.q },
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
                                    ref: Q,
                                    type: "button",
                                    className: `${iU.Y0} ${iU.nu}`,
                                    disabled: !n,
                                    "aria-label": ei.intl.string(ei.t.d56gCa),
                                    "aria-haspopup": "menu",
                                    "aria-expanded": l,
                                    children: (0, a.jsx)(i_.PlusLargeIcon, {
                                        size: "refresh_sm",
                                        color: "currentColor",
                                        className: iU.Qu,
                                    }),
                                });
                            },
                        }),
                        ex
                            ? (0, a.jsx)("div", {
                                  ref: ef,
                                  className: iU.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(iK, { text: ep, offering: eh && null == z, typed: null != z }),
                              })
                            : null,
                        (0, a.jsx)(lm.y, {
                            value: k,
                            onChange: (e) => A(e.currentTarget.value),
                            onKeyDown: V,
                            onPaste: K,
                            placeholder: ex ? "" : eu,
                            disabled: !n,
                            "aria-label": ei.intl.string(ea.default.ldNl9x),
                            "aria-describedby": ex ? em : void 0,
                            rows: 1,
                            className: iU.jp,
                        }),
                        ex ? (0, a.jsx)(y.A, { id: em, children: eu }) : null,
                        (0, a.jsx)("div", {
                            className: iU.Sz,
                            children:
                                r && null != u
                                    ? (0, a.jsx)(b.m, {
                                          text: ei.intl.string(ea.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, a.jsx)("button", {
                                              type: "button",
                                              className: `${iU.Y0} ${iU.$E}`,
                                              disabled: I,
                                              onClick: B,
                                              "aria-label": ei.intl.string(ea.default.wiguT0),
                                              children: (0, a.jsx)(rb.w, {
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
                                            className: `${iU.Y0} ${iU.$E}`,
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
                                  className: iU.fF,
                                  children: [
                                      (0, a.jsx)("div", { className: iU.MT }),
                                      (0, a.jsx)("button", {
                                          type: "submit",
                                          className: iU.rt,
                                          disabled: !F,
                                          "aria-label": ei.intl.string(ea.default.rxW2cl),
                                          children: (0, a.jsx)(iT.SendMessageIcon, {
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
    iX = 1500,
    iY = [
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
function iJ(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = iJ.mirror;
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
                (iJ.mirror = t),
                t
            );
        })(),
        n = window.getComputedStyle(e);
    for (let e of iY) t.style.setProperty(e, n.getPropertyValue(e));
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let l = document.createElement("span");
    ((l.textContent = "\u200B"), t.appendChild(l));
    let r = l.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + r - e.scrollLeft);
}
iJ.mirror = null;
var iZ = n(52133),
    iQ = n(732159),
    i0 = n(888366),
    i1 = n(862026);
n(775443);
var i2 = n(616e3),
    i3 = n(155899),
    i7 = n(148087);
let i4 = [6e4, 18e4, 6e5],
    i6 = [
        {
            key: "outdated",
            priority: 2,
            idleDelayMs: 6e4,
            backoffDelaysMs: i4,
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
                    !(null != n.publishCta && ir(l))
                );
            },
        },
    ];
function i5(e, t) {
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
let i8 = new Map();
function i9(e) {
    return (0, d.bG)([ek.Ay, as.A], () => {
        let t = ek.Ay.getProject(e);
        return null == t ? "" : (as.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
function se(e) {
    let { projectId: t, notice: n } = e;
    return "outdated" === n ? (0, a.jsx)(sn, { projectId: t }) : (0, a.jsx)(st, { projectId: t, notice: n });
}
function st(e) {
    let { projectId: t, notice: n } = e,
        l = i.useContext(nu.bI),
        r = i9(t),
        s = (0, d.bG)([ek.Ay, K.A], () => {
            let e = ek.Ay.getProject(t);
            return null == e || "user" === e.install_scope || null == e.guild_id
                ? null
                : (K.A.getGuild(e.guild_id)?.name ?? null);
        }),
        o = i.useCallback(() => {
            null != l && (0, nu.ub)(t, l);
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
            { name: r, server: s ?? "", onOpen: o },
        ),
    });
}
function sn(e) {
    let { projectId: t } = e,
        n = (0, nu.Ay)(t),
        [l, r] = i.useState(!1);
    return null == n
        ? null
        : l && (n.publishing || !n.isUpdate)
          ? (0, a.jsx)(sl, {})
          : (0, a.jsx)(v.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: ei.intl.format(ea.default.X8tdbS, {
                    action: n.label,
                    onUpdate: () => {
                        (r(!0), i8.get(t)?.forEach((e) => e()), n.run("outdated_notice"));
                    },
                }),
            });
}
function sl() {
    let e = ei.intl.string(ea.default.lexcBN),
        t = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = (0, d.bG)([iP.Ay], () => iP.Ay.useReducedMotion),
                [n, l] = i.useState(1);
            return (
                i.useEffect(() => {
                    if (t || e) return;
                    let n = setInterval(() => l((e) => (e % 3) + 1), 400);
                    return () => clearInterval(n);
                }, [t, e]),
                ".".repeat(t ? 3 : n)
            );
        })(!(0, i7.A)());
    return (0, a.jsxs)(v.E, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: [e, (0, a.jsx)("span", { "aria-hidden": !0, children: t })],
    });
}
var sr = n(248798);
function sa(e, t) {
    e.style.height = `${t.offsetHeight}px`;
}
function si(e) {
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
            sa(e, t);
            let n = new ResizeObserver(() => sa(e, t));
            return (n.observe(t), () => n.disconnect());
        }, [r, s]),
        (0, a.jsx)("div", {
            ref: u,
            className: o()(sr.NI, { [sr.Jg]: null == r }),
            "aria-live": "polite",
            children: (0, a.jsx)("div", {
                className: sr.t$,
                children: l.map((e) =>
                    (0, a.jsx)(
                        "div",
                        {
                            ref: e.leaving ? void 0 : c,
                            "aria-hidden": e.leaving || void 0,
                            "data-conjure-entrance": !0,
                            className: o()(sr.qd, e.leaving ? sr.cu : sr.We),
                            children: n(e.key),
                        },
                        e.key,
                    ),
                ),
            }),
        })
    );
}
var ss = n(521981),
    so = n(491182),
    su = n(438729),
    sc = n(622868),
    sd = n(448368),
    sf = n(837528),
    sm = n(470964),
    sh = n(715628),
    sg = n(752636),
    sp = n(9842),
    sx = n(589022),
    sv = n(994500),
    sj = n(967198),
    sb = n(531685);
let sy = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function sk(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function sw(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function sA(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = sw(e, t),
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
    if (sk(r) && sk(a)) {
        let n = 0,
            l = t;
        for (; n < 32 && sk(sw(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function sN(e, t) {
    let { streaming: n } = t,
        l = (0, d.bG)([iP.Ay], () => iP.Ay.useReducedMotion),
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
                      for (; a > 0 && sA(t, a);) a--;
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
    let f = i.useRef(0),
        m = i.useRef(0);
    (i.useEffect(() => {
        if (u)
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
                                    for (; l > t + 1 && n - l < 12 && sy.has(e.charAt(l - 1));) l--;
                                    return sy.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && sA(t, o);) o++;
                                return o;
                            })({ target: e.target, revealed: e.length, elapsedMs: n });
                        l !== e.length && s({ target: e.target, length: l });
                    }
                    f.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(f.current)
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
var sC = n(624479),
    sS = n(890377),
    sE = n(744898),
    sI = n(180227);
function sM(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: o()(sI.QE, { [sI.Rn]: t }),
              children: (0, a.jsx)(aH.Ay, {
                  children: n.map((e) =>
                      (0, a.jsx)(
                          aH.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function s_(e) {
    return na.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: ei.intl.string(ei.t.JrGD7E), icon: sC.CopyIcon, onClick: () => (0, na.C)(e) }]
        : [];
}
function sT(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: ei.intl.string(ea.default.CXtLD2),
                          tooltip: ei.intl.string(ea.default.DOb1HM),
                          icon: sS.V,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: ei.intl.string(ea.default.urZwpN),
                          icon: T.P,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, a.jsx)(sM, { groupStart: n, actions: [...r, ...s_(t)] });
}
function sP(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        i =
            null == l
                ? []
                : [{ id: "restore-version", label: ei.intl.string(ea.default.H8Jfhu), icon: sE.e, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: N.BugIcon, onClick: r }];
    return (0, a.jsx)(sM, { groupStart: n, actions: [...i, ...s_(t), ...s] });
}
let sR = (0, ac.createChannelRecord)({ id: "conjure-builder", type: eg.rbe.DM }),
    sL = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function sD(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: o()(sI.Yq, { [sI.x1]: t }), children: e });
}
function s$(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function sO(e, t, n) {
    let { content: l } = (0, sm.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        r = i.useMemo(() => ({ message: e, channel: sR, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(su.Ay, { className: n, message: e, content: l, compact: !1 })
          : (0, sh.A)(r, l);
}
function sF(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, sf.m)(e, sR, t.usernameProfile, l),
        o = (0, sf.Jo)(t.avatarProfile, l),
        u = (0, d.bG)([sj.A], () => sj.A.getGuildId()),
        c = (0, d.bG)([tJ.default], () => tJ.default.getCurrentUser()),
        f = i.useCallback(
            (t) => {
                let n = tJ.default.getUser(e.author.id) ?? e.author;
                return null == c ? null : (0, a.jsx)(sx.A, { ...t, user: n, currentUser: c, guildId: u ?? void 0 });
            },
            [c, u, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: o,
        onClickUsername: s,
        onPopoutRequestClose: r,
        renderPopout: f,
        guildId: u ?? void 0,
    };
}
function sz(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        s = i.useMemo(() => {
            let e = "" !== n.content ? (0, ss.Ay)(n, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == l
                ? e
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: sI.GV,
                              children: [
                                  (0, a.jsx)(A.x, {
                                      className: sI.Rj,
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
            [sv.A],
            () => ({
                isReplyAuthorBlocked: sv.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: sv.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        c = (0, aU.X4)(n),
        f = (0, aU.X4)(t),
        m = sF(n);
    return (0, a.jsx)(sd.A, {
        repliedAuthor: c,
        baseAuthor: f,
        baseMessage: t,
        channel: sR,
        referencedMessage: { state: sp.a.LOADED, message: n },
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
function sq(e) {
    let { message: t, author: n } = e,
        l = sF(t);
    return (0, a.jsx)(sc.Ay, {
        message: t,
        channel: sR,
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
function sG(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s, onQueuedAction: o } = e;
    i.useEffect(() => t3(l), [l]);
    let u = (0, d.bG)(
            [tJ.default],
            () => t2(l, null != l ? tJ.default.getUser(l) : null, tJ.default.getCurrentUser()),
            [l],
        ),
        c = i.useMemo(() => (0, aU.FT)(u, null), [u]),
        f = i.useMemo(() => eQ(t), [t]),
        m = f?.body ?? t,
        h = i.useMemo(() => {
            if (null == u) return null;
            let e = (0, au.Ay)({ channelId: sR.id, content: m, author: u });
            return (0, ao.rh)({ ...e, timestamp: s$(n, e.timestamp), state: eg.cmJ.SENT });
        }, [m, u, n]);
    return null == h
        ? null
        : (0, a.jsx)(sU, {
              message: h,
              author: c,
              content: m,
              selected: f?.label,
              accessories: r,
              groupStart: s,
              onQueuedAction: o,
          });
}
function sU(e) {
    let { message: t, author: n, content: l, selected: r, accessories: i, groupStart: s = !0, onQueuedAction: o } = e,
        u = sO(t, l);
    return (0, a.jsx)(so.A, {
        className: sI.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(sq, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? u
                : (0, a.jsxs)("div", {
                      className: sI.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: sI.GV,
                              children: [
                                  (0, a.jsx)(A.x, {
                                      className: sI.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, a.jsx)("span", { className: sI.WO, children: u }),
                      ],
                  }),
        childrenAccessories: sD(i, "" !== l),
        childrenButtons: (0, a.jsx)(sT, { content: l, groupStart: s, onQueuedAction: o }),
    });
}
function sB(e) {
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
        { text: f, revealing: m } = sN(t, { streaming: (0, d.bG)([sb.A], () => u && sb.A.isFocused(), [u]) }),
        h = i.useMemo(() => (0, aU.FT)(null, null), []),
        g = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        p = r?.userId,
        x = (0, d.bG)(
            [tJ.default],
            () => t2(p, null != p ? tJ.default.getUser(p) : null, tJ.default.getCurrentUser()),
            [p],
        ),
        v = i.useMemo(() => (null == r ? null : eQ(r.content)), [r]),
        j = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, au.Ay)({ channelId: sR.id, content: v?.body ?? r.content, author: x });
            return (0, ao.rh)({ ...e, id: r.id, timestamp: s$(r.createdAt, e.timestamp), state: eg.cmJ.SENT });
        }, [r, v, x]),
        b = i.useMemo(() => (null == r ? void 0 : { channel_id: sR.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, au.Ay)({ channelId: sR.id, content: "", author: sL })),
        k = i.useMemo(
            () =>
                (0, ao.rh)({
                    ...y,
                    timestamp: s$(n, y.timestamp),
                    state: eg.cmJ.SENT,
                    ...(null != b ? { type: eg.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        w = i.useMemo(() => k.set("content", f), [k, f]),
        A = i.useMemo(
            () => (0, sg.A)({ message: k, channel: sR, author: g, guildId: void 0, isGroupStart: o }),
            [k, g, o],
        ),
        N = sO(w, f, sI.OS);
    return (0, a.jsxs)("div", {
        className: sI.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": m ? "true" : void 0,
        children: [
            (0, a.jsx)(so.A, {
                className: sI.yE,
                author: g,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, a.jsx)(sz, { baseMessage: k, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: A,
                childrenMessageContent: N,
                childrenAccessories: sD(l, "" !== f),
                disableInteraction: !0,
            }),
            c,
            o
                ? (0, a.jsx)("span", {
                      className: sI.st,
                      "aria-hidden": "true",
                      children: (0, a.jsx)(rX.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
let sH = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    sV = new WeakMap();
var sK = n(288539);
function sW(e, t, n) {
    return (0, a.jsx)(sK.A, { userId: e, content: `@${t}` }, n);
}
function sX(e) {
    let { projectId: t, event: n } = e,
        l = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => t3(l), [l]);
            let r = (0, d.bG)([tJ.default], () => (null == l ? null : tJ.default.getUser(l)), [l]),
                a = (0, tZ.tx)(r),
                s = i9(e),
                o =
                    (0, d.bG)([K.A], () => (null == t.guild_id ? null : K.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ?? ei.intl.string(ea.default.R1tPlP),
                u = null == r || null == a ? null : { user: a, userHook: (e, t) => n(r.id, a, t) };
            switch (t.type) {
                case "app_removed":
                    return null == u
                        ? ei.intl.format(ea.default.Lwsrhg, { app: s, server: o })
                        : ei.intl.format(ea.default.qqePfT, { app: s, server: o, ...u });
                case "bot_removed":
                    return null == u
                        ? ei.intl.format(ea.default.mT7EQG, { app: s, server: o })
                        : ei.intl.format(ea.default["lA/crI"], { app: s, server: o, ...u });
                case "preview_bot_removed":
                    return null == u
                        ? ei.intl.format(ea.default["4LVIeo"], { app: s, server: o })
                        : ei.intl.format(ea.default.YJOV6D, { app: s, server: o, ...u });
                case "app_channel_deleted": {
                    let e = t.channel_name ?? "";
                    return null == u
                        ? ei.intl.format(ea.default["4VQfid"], { channel: e, server: o })
                        : ei.intl.format(ea.default.RlMIJN, { channel: e, server: o, ...u });
                }
            }
        })(t, n, sW);
    return (0, a.jsx)(v.E, { variant: "text-md/normal", color: "text-default", children: l });
}
function sY(e) {
    let { onSelect: t, onClose: n = L.Z_, onRestoreVersion: l, onViewTrace: r } = e;
    return (0, a.jsx)(J.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": ei.intl.string(ei.t.ogxXGq),
        onSelect: t,
        children: (0, a.jsxs)(Z.rX, {
            children: [
                null != l
                    ? (0, a.jsx)(Z.Dr, {
                          id: "restore-version",
                          label: ei.intl.string(ea.default.H8Jfhu),
                          icon: sE.e,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, a.jsx)(Z.Dr, { id: "view-trace", label: "View Trace", icon: N.BugIcon, action: r })
                    : null,
            ],
        }),
    });
}
function sJ(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function sZ(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
var sQ = n(986109);
let s0 = i.createContext(null);
function s1(e, t) {
    (0, i3.F)({ onConfirm: () => t(e) });
}
let s2 = i.memo(function (e) {
        let {
                projectId: t,
                messages: n,
                emptyState: l,
                onPickIdea: r,
                onAskForIdeas: s,
                draftHasText: u,
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
            C = i.useCallback((e) => {
                ((w.current = e), N(e));
            }, []),
            [S, E] = i.useState(null),
            I = i.useRef(0);
        i.useEffect(() => () => window.clearTimeout(I.current), []);
        let M = i.useCallback((e) => {
                (E(e), window.clearTimeout(I.current), (I.current = window.setTimeout(() => E(null), 1600)));
            }, []),
            _ = (0, d.bG)([ek.Ay], () => ek.Ay.getPublishStatus(t)?.state ?? null),
            T = (0, d.bG)([tJ.default], () => tJ.default.getCurrentUser()?.id),
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
                                            let t = (0, n0.lt)(e.steps);
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
                            i = sV.get(r);
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
                            if ("context_boundary" === e.kind) {
                                let t = `${e.render_id}:contextBoundary`;
                                return (
                                    r(
                                        { kind: "contextBoundary", key: t, message: e, groupStart: !1 },
                                        { actor: null, boundary: t },
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
                                i = rA({
                                    steps: e.steps,
                                    content: e.content,
                                    hasProposal: null != e.proposal,
                                    hasLiveClarification: n,
                                    hasAttachments: (e.attachments?.length ?? 0) > 0,
                                }),
                                s = i.lastStreamedMessage?.key,
                                o = (0, n0.C6)(e.steps, { turnActive: a }),
                                { lastWork: u, open: c } = (0, n0.CT)(o, { turnActive: a }),
                                d = o.at(-1)?.index,
                                f = !1;
                            for (let n of o) {
                                if (null != n.prose && sH.test(n.prose.content)) f = !0;
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
                                            reportsDuration: n.index === u,
                                            hostsChecklist: n.hasTodos,
                                            turnActive: n1(e),
                                            checklistSuperseded: n.hasTodos && t,
                                        },
                                        { actor: null, boundary: void 0 },
                                    );
                            }
                            let m = sH.test(e.content ?? "");
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
                                    : o.every((e) => !e.hasTodos) &&
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
                        (sV.set(r, { superseded: e, liveCard: a, planned: s }), n.push(...s));
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
                              let n = ia.get(t);
                              return (null == n && ((n = { ...t, publishCta: null }), ia.set(t, n)), n);
                          })),
                    m,
                );
            }, [n, _, m]),
            R = i.useMemo(() => P.map((e) => e.key), [P]),
            [L, D] = i.useState(null),
            $ = (function (e, t, n) {
                if (null == t) return sJ(e, e.length - 60, e.length);
                let l = null == t.endKey,
                    r = l ? e.length : sZ(e, t.endKey, t.end - 1) + 1,
                    a = sZ(e, t.startKey, t.start);
                return (l && n && r - a > 120 && (a = r - 60), sJ(e, a, r));
            })(R, L, x),
            O = i.useRef($),
            F = i.useRef(R),
            z = i.useRef(P),
            q = i.useRef(null),
            G = i.useRef(null),
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
                q.current = null != i && null != s ? { key: s, offset: i.getBoundingClientRect().top - n } : null;
            }, [g]),
            H = i.useCallback(() => {
                let e = g.current?.getScrollerNode();
                if (null == e) return;
                let n = (function (e, t, n) {
                    let { nearTop: l, nearBottom: r, pinned: a } = n;
                    if (r && null != t.endKey) {
                        let n;
                        return ((n = Math.min(e.length, t.end + 30)), sJ(e, Math.max(t.start, n - 120), n));
                    }
                    if (!l) return null;
                    if (0 === t.start) return "older";
                    if (!a && !r) {
                        let n, l;
                        return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), sJ(e, n, l));
                    }
                    let i = Math.max(t.start - 30, t.end - 120);
                    return i < t.start ? sJ(e, i, t.end) : null;
                })(F.current, O.current, {
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
                    ((G.current = e ?? null), D(null));
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
                    let r = w.current?.querySelector(`[data-conjure-message="${e}"]`);
                    if (null != r) {
                        (j(), D(O.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), M(e));
                        return;
                    }
                    let a = z.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                    if (-1 === a) {
                        (0, ee.P6)(t) && (V.current = e);
                        return;
                    }
                    (j(),
                        (G.current = () => {
                            (w.current
                                ?.querySelector(`[data-conjure-message="${e}"]`)
                                ?.scrollIntoView({ block: "center" }),
                                M(e));
                        }),
                        D(((n = F.current), sJ(n, (l = Math.max(0, a - 30)), l + 60))));
                },
                [M, j, t],
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
                        null != l && l !== e && ((e = l), p.current ? g.current?.scrollToBottom() : B());
                    });
                return (t.observe(A), () => t.disconnect());
            }, [A, B, g, p]));
        let W = null == $.endKey;
        (i.useEffect(() => y?.(W), [W, y]),
            i.useLayoutEffect(() => {
                ((O.current = $), (F.current = R), (z.current = P));
            }),
            i.useLayoutEffect(() => {
                let e = g.current?.getScrollerNode(),
                    t = w.current;
                if (null != e && null != t) {
                    let n = q.current;
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
                    let l = G.current;
                    ((G.current = null), l?.(), B(), H());
                }
                U.current = new Set(R);
            }, [P, R, $.start, $.end, g, p, B, H]));
        let X = n.at(-1),
            Y = (function (e, t, n) {
                var l;
                let r = (0, nu.Ay)(e),
                    a = (0, i7.A)(),
                    s = (function (e) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let n = e[t];
                            if (
                                "publish_notice" !== n.kind &&
                                "project_event" !== n.kind &&
                                "context_boundary" !== n.kind
                            ) {
                                if ("user" === n.role) return null;
                                if ((0, ex.BL)(n)) return n;
                                if (!(0, ex.B0)(e, t)) break;
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
                    [c, d] = i.useState(() => i5(u, Date.now())),
                    f = (function (e, t, n) {
                        if (e.projectId !== t.projectId) return i5(t, n());
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
                                let t = Math.min(e.outdatedBackoff + 1, i4.length - 1);
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
                        i6.map((e) => ({
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
                        let n = i8.get(e) ?? new Set();
                        return (
                            i8.set(e, n),
                            n.add(t),
                            () => {
                                (n.delete(t), 0 === n.size && i8.delete(e));
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
                            return (0, a.jsx)(sB, {
                                groupStart: !1,
                                content: "",
                                accessories: (0, a.jsx)(se, { projectId: t, notice: "outdated" }),
                            });
                        case "ideas":
                            return (0, a.jsx)("div", {
                                className: sQ.u$,
                                children: (0, a.jsx)(sB, {
                                    content: ei.intl.string(ea.default.s96AWB),
                                    accessories: (0, a.jsx)(im, { onAsk: s }),
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
                                if (!(0, ex.BL)(n) || "plan_implemented" === n.kind) return null;
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
                            let o = s.secretRequest?.fields ?? [];
                            if (0 === o.length || !(0, ex.BL)(s)) continue;
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
                    })(n, er),
                [n, er],
            );
        if (0 === n.length) {
            if ("loading" === l)
                return (0, a.jsx)("ol", {
                    className: o()(sQ.x7, sQ.jH),
                    "aria-busy": !0,
                    children: (0, a.jsx)("li", { className: sQ.Ub, children: (0, a.jsx)(k.y, {}) }),
                });
            let e = "unavailable" === l ? ea.default.Td4Sf4 : ea.default.V1QiNz;
            return (0, a.jsx)("ol", {
                className: sQ.x7,
                children: (0, a.jsx)(s6, {
                    role: "assistant",
                    children: (0, a.jsx)(sB, { content: ei.intl.string(e) }),
                }),
            });
        }
        return (0, a.jsx)(s0.Provider, {
            value: U,
            children: (0, a.jsxs)("ol", {
                ref: C,
                className: sQ.x7,
                children: [
                    P.slice($.start, $.end).map((e) => {
                        let n = e.message;
                        if ("closing" !== e.kind)
                            return (0, a.jsx)(
                                s3,
                                {
                                    row: e,
                                    projectId: t,
                                    highlighted: "user" === e.kind && S === n.id,
                                    currentUserId: "user" === e.kind ? T : void 0,
                                },
                                e.key,
                            );
                        let l = n === X;
                        return (0, a.jsx)(
                            s3,
                            {
                                row: e,
                                projectId: t,
                                highlighted: !1,
                                replyTo: null != n.in_reply_to ? en.get(n.in_reply_to) : void 0,
                                onJumpTo: K,
                                planVersion: Q.get(n.render_id),
                                pickedIdeaIds: et.get(n.render_id),
                                secretRequestAwaiting: l ? el : void 0,
                                secretRequestStatus: es.get(n.render_id),
                                settingsFloating: n.id === f,
                                isNewest: l,
                                onPickIdea: r,
                                onApprovePlan: n.render_id === Z ? c : void 0,
                                onRestoreVersion: h,
                            },
                            e.key,
                        );
                    }),
                    null != el && W
                        ? (0, a.jsx)(s6, {
                              role: "assistant",
                              continuation: !0,
                              children: (0, a.jsx)(sB, {
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
                              className: sQ.q3,
                              children: (0, a.jsx)(si, { reminder: Y, renderReminder: J }),
                          })
                        : null,
                ],
            }),
        });
    }),
    s3 = i.memo(
        function (e) {
            let { row: t, projectId: n, highlighted: l, currentUserId: r, ...i } = e,
                s = t.message;
            switch (t.kind) {
                case "user": {
                    let e = null != s.attachments && s.attachments.length > 0 ? s.attachments : null;
                    return (0, a.jsx)(s6, {
                        rowKey: t.key,
                        role: "user",
                        anchorId: s.id,
                        highlighted: l,
                        continuation: !t.groupStart,
                        children: (0, a.jsx)(sG, {
                            groupStart: t.groupStart,
                            content: s.content,
                            createdAt: s.created_at,
                            userId: s.user_id,
                            accessories: null != e ? (0, a.jsx)(ij.A, { projectId: n, attachments: e }) : void 0,
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
                    return (0, a.jsx)(s6, {
                        rowKey: t.key,
                        role: "assistant",
                        continuation: !t.groupStart,
                        children: (0, a.jsx)(sB, {
                            groupStart: t.groupStart,
                            content: t.content,
                            streaming: t.streaming,
                            createdAt: s.created_at,
                            accessories:
                                t.hostsAttachments && null != s.attachments
                                    ? (0, a.jsx)(ij.A, { projectId: n, attachments: s.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, a.jsx)(s6, {
                        rowKey: t.key,
                        role: "assistant",
                        children: (0, a.jsx)(iA, {
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
                    return (0, a.jsx)(s6, {
                        rowKey: t.key,
                        role: "assistant",
                        continuation: !t.groupStart,
                        children: (0, a.jsx)(sB, {
                            groupStart: t.groupStart,
                            content: null == s.publishNotice ? s.content : "",
                            createdAt: s.created_at,
                            accessories:
                                null == s.publishNotice
                                    ? void 0
                                    : (0, a.jsx)(se, { projectId: n, notice: s.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, a.jsx)(s6, {
                        rowKey: t.key,
                        role: "assistant",
                        continuation: !t.groupStart,
                        children: (0, a.jsx)(sB, {
                            groupStart: t.groupStart,
                            content: null == s.projectEvent ? s.content : "",
                            createdAt: s.created_at,
                            accessories:
                                null == s.projectEvent
                                    ? void 0
                                    : (0, a.jsx)(sX, { projectId: n, event: s.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, a.jsx)(s6, {
                        rowKey: t.key,
                        role: "assistant",
                        children:
                            null == s.contextSwitch
                                ? null
                                : (0, a.jsx)(s5, { projectId: n, contextSwitch: s.contextSwitch }),
                    });
                case "interrupted":
                    return (0, a.jsx)(s6, {
                        rowKey: t.key,
                        role: "assistant",
                        children: (0, a.jsx)(iA, { projectId: n, interrupted: !0, steps: s.steps }),
                    });
                case "legacyTodos":
                    return (0, a.jsx)(s6, {
                        rowKey: t.key,
                        role: "assistant",
                        children: (0, a.jsx)(iA, {
                            projectId: n,
                            steps: s7,
                            active: !1,
                            checklistSuperseded: t.checklistSuperseded,
                            todos: s.todos,
                            provisionalTodo: s.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, a.jsx)(s4, { row: t, projectId: n, ...i });
            }
        },
        function (e, t) {
            return (
                (0, iZ.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, iZ.A)(e.row, t.row, ["message"]) &&
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
                (0, iZ.A)(e.replyTo, t.replyTo) &&
                (0, iZ.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    s7 = [];
function s4(e) {
    let t,
        {
            row: n,
            projectId: l,
            replyTo: r,
            onJumpTo: i,
            planVersion: s,
            pickedIdeaIds: o,
            secretRequestAwaiting: u,
            secretRequestStatus: c,
            settingsFloating: f = !1,
            isNewest: m = !1,
            onPickIdea: h,
            onApprovePlan: g,
            onRestoreVersion: p,
        } = e,
        x = n.message,
        v =
            null != p
                ? "assistant" !== x.role || null == x.sourceSha
                    ? null
                    : {
                          sha: x.sourceSha,
                          authorName: "",
                          authorEmail: "",
                          authoredAt: new Date(x.created_at).toISOString(),
                          subject: x.content,
                      }
                : null,
        j = null != v && null != p ? () => s1(v, p) : void 0,
        b =
            ((t =
                eH() && "assistant" === x.role && (0, ex.BL)(x)
                    ? (x.turn_id ?? x.steps.find((e) => null != e.turn_id)?.turn_id ?? x.id.replace(/^turn:/, ""))
                    : null),
            (0, d.bG)(
                [i2.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : i2.A.getTimingTraces(l).findLast((e) => {
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
                          for (let n of ((eG = { projectId: e, traceId: t }), [...eq])) n(e);
                      })(l, b)
                : void 0,
        k = x.in_reply_to,
        w = x.restoreProposal;
    return (0, a.jsx)(s6, {
        rowKey: n.key,
        role: "assistant",
        continuation: !n.groupStart,
        onContextMenu:
            null != j || null != y
                ? (e) => {
                      (0, L.jA)(e, (e) => (0, a.jsx)(sY, { ...e, onRestoreVersion: j, onViewTrace: y }));
                  }
                : void 0,
        children: (0, a.jsx)(sB, {
            groupStart: n.groupStart,
            buttons: (0, a.jsx)(sP, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: j,
                onViewTrace: y,
            }),
            content: n.content,
            createdAt: x.created_at,
            replyTo: r,
            onJumpToReplied: null != k && null != i ? () => i(k) : void 0,
            accessories: (0, a.jsx)(iN, {
                projectId: l,
                steps: x.steps,
                content: "",
                proposal: x.proposal,
                planVersion: s,
                interrupted: !0 === x.interrupted,
                hoistedProse: !0,
                hoistedAttachmentsHost: n.attachmentsHost,
                sideReply: n.sideReply,
                sideReplyAcknowledges: x.acknowledges,
                active: n.active,
                ideas: n.active ? void 0 : x.ideas,
                pickedIdeaIds: null == x.ideas ? void 0 : o,
                attachments: x.attachments,
                secretRequest: n.active ? void 0 : x.secretRequest,
                secretRequestId: x.render_id,
                secretRequestAwaiting: u,
                secretRequestStatus: c,
                settingsRequest: n.active || f ? void 0 : x.settingsRequest,
                publishCta: n.active ? null : x.publishCta,
                onPickIdea: h,
                onApprovePlan: g,
                restoreProposal: w,
                onRestoreProposal:
                    null != w && null != p && m
                        ? () =>
                              s1(
                                  {
                                      sha: w.sha,
                                      authorName: "",
                                      authorEmail: "",
                                      authoredAt: w.authored_at,
                                      subject: w.subject,
                                  },
                                  p,
                              )
                        : void 0,
            }),
        }),
    });
}
function s6(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: u = !1,
            onContextMenu: c,
        } = e,
        d = i.useContext(s0),
        [f, m] = i.useState(() => iP.Ay.useReducedMotion || (null != l && d?.current.has(l) === !0)),
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
        className: o()(sQ.xk, { [sQ.g5]: f, [sQ.Qo]: s, [sQ.q3]: u }),
        children: n,
    });
}
function s5(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = i.useId(),
        r = (0, i1.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, a.jsxs)("div", {
        className: sQ.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, a.jsxs)("div", {
                className: sQ.Sp,
                children: [
                    (0, a.jsx)("span", { className: sQ.ZF }),
                    (0, a.jsxs)("span", {
                        className: sQ.g8,
                        children: [
                            (0, a.jsx)(i0.g, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(v.E, {
                                id: l,
                                tag: "span",
                                variant: "text-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, a.jsx)("span", { className: sQ.ZF }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: sQ.nM,
                role: "status",
                children: [
                    (0, a.jsxs)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: [
                            r.body,
                            null != s
                                ? (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          " ",
                                          (0, a.jsx)(lh.Q, {
                                              text: s.text,
                                              textVariant: "text-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, te.openModalLazy)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, a.jsx)(iQ.u, {
                                                                    ...t,
                                                                    title: ei.intl.string(ea.default["i+xjZM"]),
                                                                    subtitle: ei.intl.string(ea.default.fMBZmD),
                                                                    confirmText: ei.intl.string(ea.default.i5f3Uo),
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
                    null != r.note
                        ? (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: r.note })
                        : null,
                ],
            }),
        ],
    });
}
let s8 = [ea.default["AX+5lk"], ea.default.VAU6A7, ea.default["1emysd"], ea.default.EXHX3L, ea.default.ChslmX];
function s9(e) {
    return s8.some((t) => ei.intl.string(t) === e);
}
function oe(e) {
    switch (e) {
        case "connecting":
            return ei.intl.string(ea.default["ECl+Dx"]);
        case "closed":
            return ei.intl.string(ea.default.mQZSp1);
        case "failed":
            return ei.intl.string(ea.default.xzJSZ6);
    }
}
var ot = n(823376),
    on = n(187447);
function ol(e) {
    let { activity: t, id: n } = e,
        l = (0, i7.A)(),
        { text: r, revealing: s } = sN(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        u = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            u.current?.scrollToBottom();
        }, [r]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: on.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(nJ.Ch, {
                ref: u,
                className: on.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: o()(ik.PT, on.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: ry.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var or = n(53659);
function oa(e) {
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
                ? ea.default["1jqaAc"]
                : r
                  ? ea.default.M4KI5F
                  : a
                    ? s8[0]
                    : l
                      ? ea.default.mKK6wB
                      : n
                        ? ea.default.xnCAaP
                        : s
                          ? ea.default.izrt52
                          : ea.default.L9EDub;
        })({ activity: t, compacting: n, saving: l, restoring: r, recalling: s, controlling: u }),
        x = ei.intl.string(p),
        b = p === s8["0"],
        [y, k] = i.useState(c ?? x),
        w = (0, i7.A)();
    (!l && (w || b)) || y === x || k(x);
    let A = i.useRef(x);
    (i.useEffect(() => {
        A.current = x;
    }, [x]),
        i.useEffect(() => {
            d?.(y);
        }, [y, d]));
    let N = i.useRef(null),
        C = i.useRef(y);
    i.useEffect(() => {
        C.current = y;
    }, [y]);
    let S = i.useRef(b),
        E = i.useRef(0);
    (i.useEffect(() => {
        ((S.current = b), !b && s9(C.current) && k(A.current));
    }, [b]),
        i.useEffect(() => {
            if (!w) return;
            let e = 0,
                t = 0;
            function n() {
                if (S.current) {
                    var e;
                    ((E.current = s9(C.current) ? E.current + 1 : 0),
                        k(((e = E.current), ei.intl.string(s8[e % s8.length]))));
                } else A.current !== C.current ? k(A.current) : N.current?.play();
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
    return (0, a.jsx)(Y.Y, {
        targetElementRef: f,
        position: "top",
        align: "left",
        shouldShow: _,
        onRequestClose: P,
        renderPopout: () => (0, a.jsx)(ol, { id: m, activity: t }),
        children: () =>
            (0, a.jsxs)(j.D, {
                innerRef: f,
                className: o()(or.hF, I && or.Xd),
                "aria-label": ei.intl.string(r ? ea.default.qqlUiW : b ? s8["0"] : ea.default["Uuj/gh"]),
                "aria-expanded": _,
                "aria-describedby": _ ? m : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": ei.intl.string(p),
                onClick: T,
                children: [
                    (0, a.jsx)("span", {
                        className: or.bl,
                        children: (0, a.jsx)(ot.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: or.xu,
                        "aria-hidden": !!u || !!b || void 0,
                        children: w
                            ? (0, a.jsx)(eI.o, {
                                  ref: N,
                                  text: y,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  duration: 1e3,
                                  delay: null,
                                  className: or.yE,
                              })
                            : (0, a.jsx)(v.E, {
                                  tag: "span",
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  className: or.yE,
                                  children: y,
                              }),
                    }),
                ],
            }),
    });
}
let oi = { second: 1e3, minute: 6e4 };
function os(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let n;
            if (null == e) return;
            let r = oi[t];
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
var oo = n(719374);
function ou(e) {
    let { startedAt: t } = e,
        n = os(t);
    return (0, a.jsx)(v.E, {
        tag: "span",
        variant: "text-xs/medium",
        color: "text-muted",
        "aria-hidden": !0,
        className: oo.$,
        "data-conjure-turn-timer": !0,
        children: (0, rk.C7)(n),
    });
}
function oc(e) {
    let { startedAt: t } = e,
        n = os(t, "minute");
    return (0, a.jsx)(y.A, { role: "timer", children: (0, rk.Us)(n) });
}
var od = n(436804);
function of(e) {
    return e.toLocaleString();
}
function om(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: od.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: od.mf,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [of((0, X.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(v.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    of(n.input_tokens),
                    " in \xb7 ",
                    of(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${of(n.cache_creation_input_tokens)} cache write \xb7 ${of(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function oh(e) {
    let { project: t } = e,
        n = (0, X.wU)(t.compaction),
        l = (0, X.wU)(t.classifier),
        r = (0, X.wV)(t.orchestrator, t.codegen),
        i = (0, X.wV)(r, n);
    return (0, a.jsxs)("div", {
        className: od.si,
        role: "dialog",
        "aria-label": ei.intl.string(ea.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: od.Q$,
                children: (0, a.jsxs)("div", {
                    className: od.mf,
                    children: [
                        (0, a.jsxs)(v.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [of((0, X.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(om, { label: ei.intl.string(ea.default["9Sj3SX"]), usage: r }),
            (0, a.jsx)(om, { label: ei.intl.string(ea.default.ANCEo3), usage: n }),
            (0, a.jsx)(om, { label: ei.intl.string(ea.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsxs)("div", {
                className: od.mf,
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
function og(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(Y.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(oh, { project: t }),
        children: (e) =>
            (0, a.jsx)(j.D, {
                innerRef: n,
                className: od.Y$,
                "aria-label": ei.intl.string(ea.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(r3.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var op = n(997421);
function ox(e) {
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
        x = i.useCallback((e) => p(s9(e) || e === ei.intl.string(ea.default.mKK6wB) ? null : e), []),
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
        className: op.jf,
        children: [
            (0, a.jsxs)("div", {
                className: op.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    l || s || o || h || !0 === d
                        ? (0, a.jsx)(oa, {
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
                    b ? (0, a.jsx)(ou, { startedAt: r }) : null,
                ],
            }),
            b ? (0, a.jsx)(oc, { startedAt: r }) : null,
            null == f || null == j
                ? null
                : (0, a.jsxs)("span", {
                      className: op.BP,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": j.aria,
                              children: j.text,
                          }),
                          (0, a.jsx)(og, { project: f }),
                      ],
                  }),
            "open" === m
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === m ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": ei.intl.formatToPlainString(ea.default["tCo+ZM"], { status: oe(m) }),
                      "data-conjure-conn": !0,
                      "data-state": m,
                      className: op.XF,
                      children: oe(m),
                  }),
        ],
    });
}
let ov = ["wheel", "touchstart", "pointerdown", "keydown"];
var oj = n(698638),
    ob = n(608711);
let oy = [ei.intl.string(ea.default["9w+Chc"]), ei.intl.string(ea.default.WAvmdq), ei.intl.string(ea.default.SKsrzl)];
function ok(e) {
    var t;
    let { projectId: n, restoreState: l, onRestoreVersion: r, onImportProject: s } = e,
        o = (0, d.bG)([ex.Ay], () => ex.Ay.getMessages(n), [n]),
        u = (0, d.bG)([ee.Ay], () => ee.Ay.getConnState(n), [n]),
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
            unpin: C,
            releasePinHold: S,
            showsLatest: E,
            showsLatestRef: I,
            handleShowsLatestChange: M,
            updatePin: _,
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
                    for (let e of ov) t.addEventListener(e, u, { passive: !0 });
                    return () => {
                        for (let e of ov) t.removeEventListener(e, u);
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
            (S(), I.current ? e() : y.current?.showLatest(e));
        }, [S, I]),
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
        (0, rc.E1)(n));
    let L = e9(n),
        D = (function (e) {
            let t = (0, nu.Ay)(e),
                n = t?.guildId ?? null,
                l = (0, d.bG)([K.A], () => (null == n ? null : (K.A.getGuild(n)?.name ?? null))),
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
                                  r = t.filter((e) => eK(e.comment)),
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
                                      a.push(`${t + 1}. ${eY(e.target)}`),
                                      a.push(
                                          `   Feedback: ${(n = e.comment.trim()).length <= 1e3 ? n : `${n.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let i = n.trim();
                              return ("" !== i && (a.push(""), a.push(`Note for the whole batch: ${i}`)), a.join("\n"));
                          })({ annotations: L.annotations, metaComment: e, context: L.context }),
                          t,
                      ),
                      e4(n));
            },
            [L, $, n],
        ),
        F = i.useCallback(() => (0, ee.fu)(n), [n]),
        z = i.useCallback((e) => l2(n, e.implementation_prompt), [n]),
        [q, G] = (function (e) {
            let [t, n] = i.useState(() => rj(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? rj(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(n),
        U = i.useCallback(() => $(ei.intl.string(ea.default["t5CN3+"])), [$]),
        B = i.useCallback((e, t, l) => l2(n, e, { clarificationAnswers: t, attachments: l }), [n]),
        H = i.useCallback((e) => (0, ee.XZ)(n, e), [n]),
        V = i.useCallback((e) => (0, ee.vX)(n, e), [n]),
        W = i.useCallback((e) => iz(n, "chat", Array.from(e), V), [n, V]),
        X = i.useCallback(() => l2(n, ei.intl.string(ea.default.Zc7gML)), [n]),
        Y = l?.status === "restoring",
        J = "open" === u && !c && !Y,
        Z = o[o.length - 1],
        Q = null != Z && "assistant" === Z.role && null != Z.proposal,
        [et, en] = i.useState(null),
        el = Z?.clarification != null && Z.clarification.id !== et ? Z.clarification : null,
        er = i.useCallback(() => {
            null != el && en(el.id);
        }, [el]),
        es = (0, d.bG)([ee.Ay], () => ee.Ay.getSettings(n), [n]),
        [eo, eu] = i.useState(null),
        ec =
            null != Z &&
            "assistant" === Z.role &&
            null != Z.settingsRequest &&
            (0, ex.BL)(Z) &&
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
        ef = i.useCallback(() => {
            null != ec && eu(ec.id);
        }, [ec]),
        em = null != ed,
        [eh, eg] = i.useState(null),
        ep = el?.id ?? ec?.id;
    i.useLayoutEffect(() => {
        let e = j.current?.getScrollerNode(),
            t = eh?.firstElementChild;
        if (null == eh || null == e || !(0, tO.vq)(t, HTMLElement) || null == ep) return;
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
            connState: u,
        }),
        ej = "loading" === ev && 0 === o.length,
        eb = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < n.length; t++) e = (31 * e + n.charCodeAt(t)) % 0x7fffffff;
            return oy[e % oy.length];
        }, [n]),
        ey = Q ? ei.intl.string(ea.default.Zc7gML) : "greeting" === ev && 0 === o.length ? eb : null,
        ek = i.useMemo(() => {
            for (let e = o.length - 1; e >= 0; e--) {
                let t = o[e];
                if ("assistant" === t.role && !(0, ex.BL)(t)) return t;
            }
        }, [o]),
        ew = null != ek,
        eA =
            null != ek
                ? (function (e) {
                      let t = e.turn_id ?? e.steps.find((e) => null != e.turn_id)?.turn_id;
                      if (null != t && /^\d+$/.test(t)) {
                          let e = ru.default.extractTimestamp(t);
                          if (Number.isFinite(e) && e > 0) return e;
                      }
                      return e.created_at;
                  })(ek)
                : void 0,
        eN = Q && J ? X : void 0,
        eC = i.useCallback(() => l2(n, ei.intl.string(ea.default.EMgIuY)), [n]),
        [eS, eE] = i.useState(null),
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
    let e_ = E ? eS : "bottom",
        eT = i.useMemo(() => (null != ek ? (0, n2.b)(ek.steps) : ""), [ek]),
        eP = i.useMemo(() => (null != ek ? ((0, n0.lt)(ek.steps) ?? ek.todos) : void 0), [ek]),
        eR = ek?.provisionalTodo,
        eL = null != ek && n1(ek),
        eD = i.useMemo(() => {
            var e;
            return null != ek ? ((e = ek.steps), iw((0, n0.Jf)(e, !0).tasks)) : void 0;
        }, [ek]);
    return (0, a.jsxs)("section", {
        ref: x,
        "data-conjure-chat": !0,
        className: ob.TE,
        children: [
            J
                ? (0, a.jsx)(nQ.A, {
                      title: ei.intl.string(ea.default.gy7byi),
                      description: ei.intl.string(ea.default["dkv/WO"]),
                      icons: oj.ir,
                      onDrop: W,
                  })
                : null,
            (0, a.jsx)(lc, {
                onJumpToActivity: P,
                line: eT,
                placement: ew && "top" === e_ ? "top" : null,
                todos: eP,
                todosLive: eL,
                provisionalTodo: eR,
                agents: eD,
            }),
            (0, a.jsxs)("div", {
                className: ob.JX,
                children: [
                    (0, a.jsx)(nJ.Ch, {
                        ref: j,
                        onScroll: R,
                        scrollbarGutter: ej ? "both-edges" : "stable",
                        className: [ob.N$, N ? null : ob.hB, em ? ob.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(s2, {
                            projectId: n,
                            messages: o,
                            emptyState: ev,
                            floatingSettingsMessageId: ec?.id,
                            liveClarificationId: el?.id,
                            onPickIdea: J ? z : void 0,
                            onAskForIdeas: J ? U : void 0,
                            draftHasText: q,
                            onApprovePlan: J ? eC : void 0,
                            onRestoreVersion: Y || ew ? void 0 : r,
                            scrollerRef: j,
                            stickToBottomRef: k,
                            pinned: A,
                            onUnpin: C,
                            handleRef: y,
                            onShowsLatestChange: M,
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: ob.NJ,
                        children: (0, a.jsx)(ox, {
                            projectId: n,
                            thinking: ew,
                            turnStartedAt: eA,
                            restoring: Y,
                            recalling: ej,
                            thinkingActivity: m,
                            compacting: h,
                            saving: g,
                            projectUsage: f,
                            connState: u,
                        }),
                    }),
                    null == el
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eg,
                              className: em ? `${ob.B5} ${ob.J9}` : ob.B5,
                              children: (0, a.jsx)(
                                  ra,
                                  { projectId: n, clarification: el, onSubmit: J ? B : void 0, onDismiss: er },
                                  el.id,
                              ),
                          }),
                    null == ed
                        ? null
                        : (0, a.jsx)("div", {
                              ref: null == el ? eg : void 0,
                              className: ob.B5,
                              children: (0, a.jsx)(ro, { projectId: n, request: ed, onDismiss: ef }, ec?.id),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: ob.Jx,
                children: [
                    (0, a.jsx)(lc, {
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
                              className: ob.g0,
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
                                      onClick: () => e4(n),
                                  }),
                              ],
                          }),
                    null == D
                        ? null
                        : (0, a.jsxs)("div", {
                              className: ob.Db,
                              children: [
                                  (0, a.jsx)(nZ.w, { type: "warning", role: "status", message: D.message }),
                                  (0, a.jsx)("div", {
                                      className: ob.jU,
                                      children: (0, a.jsx)(b.m, {
                                          text: ei.intl.string(ei.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, a.jsx)(nt.K, {
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
                    (0, a.jsx)(iW, {
                        projectId: n,
                        canSend: J,
                        stopped: c,
                        running: ew,
                        restoring: Y,
                        onSend: O,
                        hasPendingContext: L.annotations.length > 0,
                        onInterrupt: J ? F : void 0,
                        onUploadFile: V,
                        onImport: s,
                        onApprove: eN,
                        suggestion: ey,
                        questionOpen: null != el || null != ed,
                        modelSettings: p,
                        onModelSettingsChange: H,
                        onDraftHasTextChange: G,
                    }),
                ],
            }),
        ],
    });
}
var ow = n(761508),
    oA = n(683438);
function oN(e, t) {
    return String(e).padStart(t, "0");
}
var oC = n(667931);
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
    },
    oE = { running: "Running", ok: "Done", error: "Failed" };
function oI(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function oM(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function o_(e) {
    return oI(Math.round(e));
}
function oT(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function oP(e) {
    return o_(e.count > 1 ? e.totalMs : e.end - e.start);
}
let oR = ["Arguments", "Result", "Usage", "Details"];
function oL(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function oD(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function o$(e) {
    let t = (0, oC.bM)(e)?.end;
    return null != t ? oI(t) : (0, oC.lp)(e) ? "interrupted" : "still running";
}
function oO(e) {
    return [
        (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
            if (e.length > 64) return null;
            let n = Date.parse(e);
            if (Number.isNaN(n)) return null;
            let l = new Date(n),
                r = `${oN(l.getHours(), 2)}:${oN(l.getMinutes(), 2)}:${oN(l.getSeconds(), 2)}`;
            return "millis" === t ? `${r}.${oN(l.getMilliseconds(), 3)}` : r;
        })(new Date(e.started_at).toISOString()) ?? "",
        oT(e.spans.length),
        (0, oC.Sj)((0, oC.bM)(e)?.attrs),
    ]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function oF(e) {
    let t = (0, oC.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, oC.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += oz(r, "in")),
                (l.output += oz(r, "out")),
                (l.cacheRead += oz(r, "cache_read")),
                (l.cacheWrite += oz(r, "cache_write")),
                (l.costUsd += oz(r, "cost_usd"))));
    }
    let r = oC.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function oz(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var oq = n(738188),
    oG = n(430993),
    oU = n(364840),
    oB = n(224640),
    oH = n(20742);
let oV = { collapsed: new Set(), revealed: new Set() };
var oK = n(872892);
let oW = {
    op: oK.Q,
    model: oK.i3,
    tool: oK.dH,
    setup: oK.kc,
    worktree: oK.Qx,
    sandbox: oK.QH,
    build: oK.F1,
    platform: oK.Op,
    other: oK.fv,
};
function oX(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      oT(t.calls, "model call"),
                      `${oM(t.input)} in`,
                      `${oM(t.output)} out`,
                      `${oM(t.cacheRead)} cache read`,
                      `${oM(t.cacheWrite)} cache write`,
                      oD(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: oK.M1,
        children: [
            (0, a.jsx)("div", {
                className: oK.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${oK.DJ} ${oW[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: oK.o1,
                children: oC.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${o_(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: oK.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${oK.nf} ${oW[e]}` }),
                                (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: oS[e] }),
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
function oY(e) {
    return `conjure-perf-trace-${e}`;
}
function oJ(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        o = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: oK.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(o) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(v.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${oK.p0} ${s + o > 85 ? oK.EU : oK.jh}`,
                children: i,
            }),
        ],
    });
}
function oZ(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: o, onExpandSubtree: u } = e,
        c = t.children.length > 0,
        d = l ? ta._ : tH.a,
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
    return (0, a.jsxs)(j.D, {
        tag: "div",
        role: "treeitem",
        id: oY(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${oK.$y} ${r ? oK.wQ : ""}`,
        onClick: f,
        children: [
            (0, a.jsxs)("div", {
                className: oK.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, a.jsx)(j.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: oK.ai,
                              onClick: m,
                              children: (0, a.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: oK.YJ }),
                    (0, a.jsx)(v.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: oK.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${oK.nf} ${oW[t.category]}` }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        className: oK.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: oK.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(v.E, {
                              variant: "text-xs/semibold",
                              color: "text-default",
                              className: oK.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(oq.WarningIcon, { size: "xs", color: "currentColor", className: oK.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(oJ, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${oK.M0} ${oK.Nh}`
                    : t.running
                      ? `${oK.M0} ${oK.rF}`
                      : `${oK.M0} ${oW[t.category]}`,
                duration: oP(t),
            }),
        ],
    });
}
function oQ(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(j.D, {
        tag: "div",
        role: "treeitem",
        id: oY(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${oK.$y} ${l ? oK.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, a.jsxs)("div", {
                className: oK.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: oK.ai,
                        children: (0, a.jsx)(ta._, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: oK.U9 }),
                    (0, a.jsx)("span", { className: `${oK.nf} ${oK.dL}` }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: oK.MQ,
                        children: oT(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(oJ, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${oK.M0} ${oK.ab} ${oK.dL}`,
                duration: o_(t.totalMs),
            }),
        ],
    });
}
function o0(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(v.E, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: oK._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: oK.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${oK.nf} ${oW[t.category]}` }),
                          (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [oL("Start", `+${o_(e.start)}`), oL("Duration", oP(e))];
                      e.count > 1
                          ? t.push(
                                oL("Calls", String(e.count)),
                                oL("Longest call", o_(e.maxMs)),
                                oL("Spread over", o_(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(oL("Self time", o_(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(oL("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(oL("Notes", l.join(", "))),
                          null != e.span.error && t.push(oL("Error", e.span.error)));
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
                              s = "cost_usd" === t ? oD(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), oL(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...oR.flatMap((e) => {
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
                                            className: oK.xd,
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
                                                            className: oK.vl,
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
function o1(e) {
    let { trace: t } = e,
        n = i.useMemo(() => oF(t), [t]);
    return (0, a.jsx)(oX, { stats: n });
}
function o2(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, oC.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? oV : (0, oC.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, oC.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, oC.x7)(t)), l((n) => (0, oC._0)(n, t, e)));
            }, [t]);
            let o = i.useMemo(() => (null == t ? [] : (0, oC.wu)(t, n)), [t, n]),
                u = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, oC.IE)(t, e);
                        null != n && l((e) => (0, oC.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, oC.IE)(t, e);
                        null != n && l((e) => (0, oC.H$)(e, n));
                    },
                    [t],
                ),
                f = i.useCallback(() => {
                    null != t && l((0, oC.vH)(t));
                }, [t]),
                m = i.useCallback(() => {
                    null != t && l((0, oC.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, oC.hB)(t));
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
        m = (0, oC.dj)(t),
        h = i.useMemo(() => (0, oC.nF)(m), [m]),
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
                    null != t && (u(t.key), document.getElementById(oY(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, f, d, l, u, o, c],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(oG.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: oK.z,
                        children: [
                            (0, a.jsx)(v.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: o$(t),
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: oO(t),
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
                                      children: `${oT(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(o1, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: oK.KE,
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
                        "aria-activedescendant": null == o ? void 0 : oY(o),
                        className: oK.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(g) },
                        onKeyDown: p,
                        children: [
                            (0, a.jsxs)("div", {
                                className: oK.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: oK.So,
                                        children: (0, a.jsx)(v.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: oK.c1,
                                        children: h.map((e) =>
                                            (0, a.jsx)(
                                                v.E,
                                                {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${oK.io} ${(e / m) * 100 > 85 ? oK.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / m) * 100),
                                                    },
                                                    children: 0 === e ? "0" : o_(e),
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
                                          oZ,
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
                                    : (0, a.jsx)(oQ, { row: e, extent: m, selected: e.key === o, onReveal: d }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(oU.j, { children: (0, a.jsx)(o0, { node: s }) }),
        ],
    });
}
function o3(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, d.bG)([i2.A], () => i2.A.getTimingTrace(l, r), [l, r]),
        s = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(oB.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, a.jsx)(oH.rQ, { title: s }),
            null == i
                ? (0, a.jsx)(oG.c, {
                      children: (0, a.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(o2, { trace: i }),
        ],
    });
}
let o7 = { running: oK.Vf, ok: oK.mo, error: oK.Sr };
function o4(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${oK.Om} ${o7[t]}`, role: "img", "aria-label": oE[t] });
}
function o6(e, t) {
    (0, te.openModal)((n) => (0, a.jsx)(o3, { ...n, projectId: e, traceId: t }));
}
function o5(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => o6(t, n.id), [t, n.id]);
    return (0, a.jsxs)(j.D, {
        className: oK.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: oK.sU,
                children: [
                    (0, a.jsx)(o4, { status: (0, oC.lQ)(n) }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        className: oK._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: o$(n),
                    }),
                ],
            }),
            (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", tabularNumbers: !0, children: oO(n) }),
            null == l
                ? null
                : (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function o8(e) {
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
    return (0, a.jsx)(Y.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: Y.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, a.jsx)(J.W, {
                "data-menu-migrated": !0,
                navId: `conjure-traces-${t}`,
                "aria-label": "Trace actions",
                onClose: l,
                onSelect: l,
                children: (0, a.jsx)(Z.rX, {
                    children: (0, a.jsx)(Z.Dr, {
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
            return (0, a.jsx)(nt.K, {
                ...e,
                buttonRef: l,
                icon: nn.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function o9(e) {
    let { projectId: t } = e,
        n = (0, d.yK)([i2.A], () => i2.A.getTimingTraces(t), [t]),
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
                    let t = e.map(oF);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: oC.BF.map((e) => ({
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
              className: oK.Ie,
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
              className: oK.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: oK.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: oK.fH,
                              children: (0, a.jsx)(oA.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(o8, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, a.jsxs)(nJ.Ch, {
                      className: oK.XG,
                      children: [
                          (0, a.jsx)(oX, { stats: u }),
                          0 === o.length
                              ? (0, a.jsx)(v.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: oK.p_,
                                    "aria-label": "Traces",
                                    children: o.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            { children: (0, a.jsx)(o5, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function ue(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function ut(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function un(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function ul(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function ur(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function ua(e) {
    return ei.intl.string("preview" === e ? ea.default["2yLYlG"] : ea.default.eiAi57);
}
let ui = ["all", "preview", "stable", "web"];
function us(e) {
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
function uo(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : ei.intl.formatToPlainString(ea.default["XO/bN4"], {
              p50: ue(e.memory_p50_bytes ?? 0),
              p999: ue(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let uu = {
    db: () => ea.default["7l+DFG"],
    db_preview: () => ea.default.FAuffi,
    runtime: () => ea.default["Gkl+ab"],
    runtime_preview: () => ea.default.ynpJzv,
    bot: () => ea.default["5/i0cj"],
    bot_preview: () => ea.default.m2jsnw,
};
var uc = n(911608),
    ud = n(177427);
function uf(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: ud.KE,
        children: [
            (0, a.jsx)("div", {
                className: ud.IQ,
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
                                  children: ei.intl.formatToPlainString(ea.default.INVO50, { time: ul(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(w.$, { variant: "secondary", size: "sm", text: ei.intl.string(ea.default.oKEgiu), onClick: l }),
        ],
    });
}
function um(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: ud.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(v.E, { variant: "text-xs/semibold", color: "text-muted", className: ud.Gf, children: t }),
            n,
        ],
    });
}
function uh(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: i, state: s } = e;
    return (0, a.jsxs)("div", {
        className: ud.N8,
        children: [
            (0, a.jsxs)("div", {
                className: ud.x7,
                children: [
                    (0, a.jsxs)("span", {
                        className: ud.kS,
                        children: [i, (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, a.jsxs)("span", {
                        className: ud.kS,
                        children: [
                            s,
                            (0, a.jsx)(v.E, {
                                variant: "text-sm/medium",
                                color: r ? "text-feedback-critical" : "text-default",
                                children: n,
                            }),
                        ],
                    }),
                ],
            }),
            null != l && (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
        ],
    });
}
function ug(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: ud.N8,
        children: [
            (0, a.jsxs)("div", {
                className: ud.x7,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(uc.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? ud.dh : void 0,
            }),
        ],
    });
}
function up(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(uh, {
            label: ei.intl.string(ea.default.SXP7pD),
            value: ei.intl.string(ea.default.E5hKVi),
            hint: us(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(uh, {
            label: ei.intl.string(ea.default.SXP7pD),
            value: "\u2014",
            hint: ei.intl.string(ea.default.AGvoMJ),
        });
    let l = uo(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(uh, { label: ei.intl.string(ea.default["H/X+FI"]), value: ut(n.cpu_ms) }),
            null != l && (0, a.jsx)(uh, { label: ei.intl.string(ea.default.lmFmMO), value: l }),
        ],
    });
}
function ux(e) {
    let { analytics: t } = e,
        n = ei.intl.string(ea.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(um, {
            title: n,
            children: (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: us(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? uu[t] : null) ? ei.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(um, {
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
                          uh,
                          {
                              label: n,
                              value: ei.intl.formatToPlainString(ea.default["w/2voO"], { cpu: ut(t.cpu_ms) }),
                              hint: uo(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var uv = n(678708),
    uj = n(414499),
    ub = n(714800),
    uy = n(81466),
    uk = n(424383),
    uw = n(816943),
    uA = n(268791),
    uN = n(514042),
    uC = n(872351),
    uS = n(708988),
    uE = n(150934),
    uI = n(417270);
let uM = "Restart Agent",
    u_ = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function uT(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function uP(e, t) {
    return { label: e, value: null != t && "" !== t ? ul(t) : "Unknown", icon: "calendar" };
}
function uR(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function uL(e, t, n, l) {
    let [r, a] = u_[n.status];
    return { label: e, value: `${uR(n.bytes)} of ${uR(n.max)} \xb7 ${r}`, hint: l, icon: t, state: a };
}
function uD(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = ul(e.at);
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
let u$ = { main: "Main vs Remote", wip: "WIP vs Remote" };
function uO(e) {
    let t = `container ${uT(e.local)} \xb7 remote ${uT(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: u$[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${un(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${un(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${un(n)} Ahead, ${un(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let uF = ["main", "wip"];
var uz = n(400154);
let uq = {
        checkout: uv.FolderIcon,
        edit: lf.PencilIcon,
        remote: uj.h,
        commits: ub.e,
        calendar: uy.CalendarIcon,
        save: uk.L,
        objects: ef.R,
        download: uw.$,
        size: uA.$,
        file: uN.FileIcon,
    },
    uG = {
        ok: [ak.y, R.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [oq.WarningIcon, R.A.colors.ICON_FEEDBACK_WARNING],
        error: [iL.a, R.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [uC.z, R.A.colors.ICON_MUTED],
        behind: [uS.M, R.A.colors.ICON_MUTED],
    };
function uU(e) {
    let { projectId: t } = e,
        { state: n, load: l } = {
            state: (0, d.bG)([i2.A], () => i2.A.getGitInfoState(t), [t]),
            load: i.useCallback(() => (0, ee.DK)(t), [t]),
        },
        r = (function (e) {
            let { pending: t, error: n, info: l, observedAt: r } = e;
            if (t) return { line: "Reading the repository", critical: !1 };
            if (null != n) return { line: n, critical: !0 };
            if (null == r) return { line: "", critical: !1 };
            let a = [];
            if (null != l) {
                l.running
                    ? null != l.localError
                        ? a.push([`Workspace unreadable: ${l.localError}`, !0])
                        : null != l.localWarning && a.push(["Read stopped early; some rows were not read", !0])
                    : a.push(["Workspace not running", !1]);
                let { status: e, error: t } = l.remote;
                ("missing" === e && a.push(["Remote repository missing", !0]),
                    "error" === e && a.push([`Remote read failed: ${t ?? "unknown error"}`, !0]),
                    "disabled" === e && a.push(["Source repositories are off", !1]));
            }
            return {
                line: [
                    `Updated ${ul(r)}`,
                    ...a.map((e) => {
                        let [t] = e;
                        return t;
                    }),
                ].join(" \xb7 "),
                critical: a.some((e) => {
                    let [, t] = e;
                    return t;
                }),
            };
        })(n);
    return (0, a.jsxs)(um, {
        title: "Git",
        children: [
            (0, a.jsxs)("div", {
                className: uz.Lj,
                children: [
                    (0, a.jsx)(w.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: t5.RefreshIcon,
                        text: null != n.info ? "Refresh" : "Load Git Info",
                        loading: n.pending,
                        disabled: n.pending,
                        onClick: l,
                    }),
                    "" !== r.line &&
                        (0, a.jsx)(v.E, {
                            variant: "text-xs/normal",
                            role: "status",
                            color: r.critical ? "text-feedback-critical" : "text-muted",
                            children: r.line,
                        }),
                ],
            }),
            null != n.info &&
                (function (e) {
                    var t;
                    let n;
                    if (!e.running || null != e.localError) return [uD(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            uD(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : un(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = uF.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(uO))
                        : l.push(
                              { label: "Main", value: uT(e.heads.main), icon: "remote" },
                              { label: "WIP", value: uT(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? un(e.commits) : "Unknown", icon: "commits" },
                            uP("Oldest Commit", e.oldest),
                            uP("Newest Commit", e.newest),
                            uD(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${un(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${un(t.loose)} loose (${ue(t.looseBytes)}) \xb7 ${un(t.packed)} packed in ${n} (${ue(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${un(t.garbage)} garbage files` : void 0,
                                    icon: "objects",
                                }),
                            ));
                    let a = (function (e) {
                        if (null == e.partialClone) return null;
                        let t = { label: "Partial Clone", icon: "download" };
                        return e.partialClone
                            ? null == e.missingObjects
                                ? { ...t, value: "Yes", hint: "Counting objects not downloaded didn't finish in time." }
                                : {
                                      ...t,
                                      value: `Yes \xb7 ${un(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != a && l.push(a),
                        null != e.localBytes &&
                            l.push(
                                uL(
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
                                  uL("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: i } = e,
                        s = uq[r],
                        [o, u] = null != i ? uG[i] : [null, void 0];
                    return (0, a.jsx)(
                        uh,
                        {
                            label: t,
                            value: n,
                            hint: l,
                            critical: "error" === i,
                            icon: (0, a.jsx)(s, { size: "xs", color: R.A.colors.ICON_MUTED }),
                            state: null != o ? (0, a.jsx)(o, { size: "xs", color: u }) : void 0,
                        },
                        t,
                    );
                }),
        ],
    });
}
function uB(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: o,
            restart: u,
        } = (function (e) {
            let t = (0, d.bG)([i2.A], () => i2.A.getRestartAgentState(e), [e]),
                [n, l] = i.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                a = "restarted" === t.phase ? t.instanceSince : null,
                s = i.useRef(a);
            (i.useEffect(() => {
                null != a && a !== s.current && ((s.current = a), (0, ee.DK)(e));
            }, [e, a]),
                i.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = i2.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, ee.gX)(e);
                    }
                    t();
                    let n = setInterval(t, 2e3),
                        l = setTimeout(
                            () =>
                                lq.h.dispatch({
                                    type: "CONJURE_RESTART_AGENT_RESULT",
                                    projectId: e,
                                    outcome: "timed_out",
                                    reason: "No new agent instance answered within 60 s",
                                    observedAt: new Date().toISOString(),
                                }),
                            Math.max(5e3, r + 6e4 - Date.now()),
                        );
                    return () => {
                        (clearInterval(n), clearTimeout(l));
                    };
                }, [e, r]));
            let o = i.useCallback(() => (0, ee.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: uM,
                },
                restart: o,
            };
        })(t),
        c = i.useCallback(() => {
            (0, f.A)({ title: o.title, subtitle: o.body, confirmText: o.confirm, variant: "critical", onConfirm: u });
        }, [o, u]);
    return (0, a.jsxs)("div", {
        className: uz.Lj,
        children: [
            (0, a.jsxs)("div", {
                className: uz.nM,
                children: [
                    (0, a.jsx)(uE.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, a.jsx)(w.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: uI.RetryIcon,
                        text: uM,
                        loading: l,
                        disabled: l,
                        onClick: c,
                    }),
                ],
            }),
            (0, a.jsx)(v.E, {
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
                            return `Restarted \xb7 new instance since ${ul(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${ul(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function uH(e, t) {
    return (0, a.jsx)(uh, {
        label: e,
        value: ei.intl.formatToPlainString(ea.default.yHJxuP, { count: un((0, X.aM)(t)) }),
        hint: `${un(t.input_tokens)} in \xb7 ${un(t.output_tokens)} out \xb7 ${un(t.cache_read_input_tokens)} cache read`,
    });
}
function uV(e) {
    let { projectId: t, status: n, fetchState: l, onRefresh: r } = e,
        s = (0, d.bG)([i2.A], () => i2.A.getLastTurnUsage(t), [t]),
        o = (0, d.bG)([i2.A], () => i2.A.getLastCompaction(t), [t]),
        u = (0, d.bG)([i2.A], () => i2.A.getLastCompactionDecline(t), [t]),
        c = (0, d.bG)([i2.A], () => i2.A.getForceCompactionState(t), [t]),
        f = i.useCallback(() => (0, ee.Lj)(t), [t]),
        m = i.useCallback(() => (0, ee.Lj)(t, !0), [t]),
        h = (0, d.bG)([i2.A], () => i2.A.getSandboxRestartState(t), [t]),
        g = (0, d.bG)([ex.Ay], () => ex.Ay.isThinking(t), [t]),
        p = i.useCallback(() => (0, ee.bq)(t), [t]),
        x = n?.agent?.lifetime ?? null,
        j = n?.agent?.limits ?? null,
        b = n?.agent?.session ?? null,
        y = o?.promptCeiling ?? j?.context_window_tokens ?? null;
    return (0, a.jsxs)("div", {
        className: uz.Mf,
        children: [
            (0, a.jsx)(uf, { generatedAt: n?.generated_at ?? null, fetchState: l, onRefresh: r }),
            (0, a.jsx)(um, {
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
                                  (0, a.jsx)(uh, {
                                      label: ei.intl.string(ea.default["9nqym2"]),
                                      value: un((0, X.a7)(x.cost_usd)),
                                      hint: ei.intl.formatToPlainString(ea.default.NCdUIh, { count: un(x.turns) }),
                                  }),
                                  uH(ei.intl.string(ea.default.xtxP0e), x.orchestrator),
                                  uH(ei.intl.string(ea.default["9Sj3SX"]), x.codegen),
                                  uH(ei.intl.string(ea.default.ANCEo3), (0, X.wU)(x.compaction)),
                                  n?.agent?.outcomes != null &&
                                      Object.keys(n.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(uh, {
                                          label: ei.intl.string(ea.default.SQHm7C),
                                          value: Object.entries(n.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${un(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(um, {
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
                                  uH(ei.intl.string(ea.default["7X3i9d"]), s.total),
                                  (0, a.jsx)(uh, {
                                      label: ei.intl.string(ea.default["8OUg09"]),
                                      value: `${Math.round((s.cache_hit_rate ?? (0, X.CA)(s.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(um, {
                title: ei.intl.string(ea.default.NbRk9a),
                children: [
                    null != o && null != y
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(ug, {
                                      label: ei.intl.string(ea.default.Kw5wiQ),
                                      used: o.tokensAfter,
                                      max: y,
                                      formatValue: un,
                                  }),
                                  (0, a.jsx)(uh, {
                                      label: ei.intl.string(ea.default.mRbSns),
                                      value: `${un(o.tokensBefore)} \u{2192} ${un(o.tokensAfter)}`,
                                      hint: ei.intl.formatToPlainString(ea.default.Vq3skS, {
                                          count: un(o.retainedMessages),
                                          time: ul(o.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != y
                                      ? ei.intl.formatToPlainString(ea.default.GMLCNv, { ceiling: un(y) })
                                      : ei.intl.string(ea.default.s0U5Fv),
                          }),
                    null != u &&
                        (0, a.jsx)(uh, {
                            label: ei.intl.string(ea.default["4BX5KK"]),
                            value: `${un(u.projected)} / ${un(u.threshold)}`,
                            critical: !0,
                            hint: ei.intl.formatToPlainString(ea.default["6ngCax"], { time: ul(u.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: uz.Lj,
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
                                    let t = ul(e.observedAt);
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
                        className: uz.Lj,
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
                                    let t = ul(e.observedAt);
                                    return ei.intl.formatToPlainString(
                                        "restarted" === e.outcome ? ea.default["76mfqO"] : ea.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(h),
                            }),
                        ],
                    }),
                    (0, a.jsx)(uB, { projectId: t }),
                ],
            }),
            (0, a.jsx)(uU, { projectId: t }),
            (null != b || n?.analytics != null) &&
                (0, a.jsxs)(um, {
                    title: ei.intl.string(ea.default.EsSzCS),
                    children: [
                        null != b &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(uh, {
                                        label: ei.intl.string(ea.default.CLXHAs),
                                        value: ul(b.instance_since),
                                        hint: ei.intl.string(ea.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(uh, {
                                        label: ei.intl.string(ea.default["8V8e1Z"]),
                                        value: un(b.sockets),
                                    }),
                                    (0, a.jsx)(uh, {
                                        label: ei.intl.string(ea.default["4pBzYW"]),
                                        value: b.turn_inflight
                                            ? ei.intl.string(ea.default.Wv025I)
                                            : ei.intl.string(ea.default["7/lsFY"]),
                                    }),
                                    b.queued_messages > 0 &&
                                        (0, a.jsx)(uh, {
                                            label: ei.intl.string(ea.default["3oUYnv"]),
                                            value: un(b.queued_messages),
                                        }),
                                ],
                            }),
                        n?.analytics != null && (0, a.jsx)(up, { analytics: n.analytics }),
                    ],
                }),
            null != j &&
                (0, a.jsxs)(um, {
                    title: ei.intl.string(ea.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(uh, {
                            label: ei.intl.string(ea.default.IlDBN3),
                            value: un(j.max_subagent_iterations),
                        }),
                        (0, a.jsx)(uh, {
                            label: ei.intl.string(ea.default["ZdzKR+"]),
                            value: ei.intl.formatToPlainString(ea.default.yHJxuP, {
                                count: un(j.context_window_tokens),
                            }),
                        }),
                        (0, a.jsx)(uh, {
                            label: ei.intl.string(ea.default.cIhN2W),
                            value: ei.intl.formatToPlainString(ea.default.yHJxuP, {
                                count: un(j.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(uh, {
                            label: ei.intl.string(ea.default["+fOn/q"]),
                            value: un(j.max_user_message_chars),
                        }),
                        (0, a.jsx)(uh, { label: ei.intl.string(ea.default.kIHga0), value: un(j.max_build_attempts) }),
                        (0, a.jsx)(uh, { label: ei.intl.string(ea.default.Iw03yW), value: un(j.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var uK = n(237528),
    uW = n(629584),
    uX = n(531893);
function uY(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: uX.ut,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: ei.intl.string(ea.default.h1SE6R),
              }),
          });
}
function uJ(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: uX.qf,
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
              className: uX.qf,
              children: [
                  (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function uZ(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: uX.ps,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: ei.intl.string(ea.default.V7Ri8H),
              }),
          })
        : null;
}
var uQ = n(109079);
let u0 = i.memo(function (e) {
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
        className: uQ.vK,
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: uQ.Mt,
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
                className: uQ.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: uQ.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: uQ.Cq, children: (0, a.jsx)(uK.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: uQ.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(uK.v, {
                                text: ei.intl.string(ea.default.TrC9c8),
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
                                          color: c,
                                          selectable: !0,
                                          children: [u.prefix, " "],
                                      }),
                                  (0, a.jsxs)(j.D, {
                                      className: uQ.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": o,
                                      "aria-label": ei.intl.string(ea.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, a.jsx)(tH.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, a.jsx)(ta._, {
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
                                                  ei.intl.formatToPlainString(
                                                      "[\u2026]" === u.marker
                                                          ? ea.default.kUhyUv
                                                          : ea.default["N+fphl"],
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
                                          color: c,
                                          className: uQ.dF,
                                          selectable: !0,
                                          id: o,
                                          children: u.pretty,
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
function u1(e) {
    let { projectId: t } = e,
        n = (0, d.bG)([ek.Ay], () => ek.Ay.getLogs(t), [t]),
        l = (0, d.bG)([ek.Ay], () => ek.Ay.getHistoryState(t, "logs")),
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
                ui.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return ua(e);
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
        className: uQ.$F,
        children: [
            (0, a.jsxs)("div", {
                className: uQ.y4,
                children: [
                    (0, a.jsx)(uW.I, {
                        look: "pill",
                        "aria-label": ei.intl.string(ea.default.MhvyUU),
                        options: g,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: uQ.KT,
                        children: (0, a.jsx)(oA.I, {
                            query: o,
                            onChange: u,
                            onClear: () => u(""),
                            size: "sm",
                            placeholder: ei.intl.string(ea.default["m2+37Y"]),
                            "aria-label": ei.intl.string(ea.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, a.jsx)(uY, { state: l }),
            (0, a.jsxs)(nJ.Ch, {
                ref: f,
                onScroll: h,
                overflow: "auto",
                className: uQ.sx,
                children: [
                    (0, a.jsx)(uZ, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(uJ, {
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
                          : c.map((e) => (0, a.jsx)(u0, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function u2(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(um, {
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
function u3(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(uh, {
                      label: ei.intl.formatToPlainString(ea.default["01ZMS4"], { env: ua(n) }),
                      value: ((t = l.connected), ei.intl.string(t ? ea.default.Wv025I : ea.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(uh, {
                      label: ei.intl.string(ea.default["z1dh+F"]),
                      value: un(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${ul(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(uh, { label: ei.intl.string(ea.default.Iz5GnJ), value: un(l.guild_count) }),
                  (0, a.jsx)(uh, {
                      label: ei.intl.string(ea.default["7UqtNv"]),
                      value: un(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? ei.intl.formatToPlainString(ea.default.MasSly, {
                                    code: l.last_close_code,
                                    time: ul(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(uh, {
                          label: ei.intl.string(ea.default["x3+JXJ"]),
                          value: un(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(uh, { label: ua(n), value: ei.intl.string(ea.default.lTHQss) });
}
function u7(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(uh, {
        label: ua(t),
        value: ei.intl.formatToPlainString(ea.default["Xq+wHT"], {
            requests: un(n.requests),
            failures: un(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? ei.intl.formatToPlainString(ea.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: ul(n.last_failure.at),
                  })
                : ei.intl.formatToPlainString(ea.default["7KlGT6"], { time: ul(n.since) }),
    });
}
function u4(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(uh, {
                label: ei.intl.formatToPlainString(ea.default["92gVTm"], { env: ua(t) }),
                value: un(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    uh,
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
                                  ? ei.intl.formatToPlainString(ea.default.wxAWNv, { time: ul(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function u6(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(uh, {
        label: ua(t),
        value: ei.intl.formatToPlainString(ea.default.suAOj9, { calls: un(n.calls), errors: un(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function u5(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(um, {
            title: t,
            children: (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: ei.intl.string(ea.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(um, {
        title: t,
        children: [
            (0, a.jsx)(uh, {
                label: ei.intl.string(ea.default.xtD4Zp),
                value: un(n.requests),
                hint: ei.intl.formatToPlainString(ea.default["7KlGT6"], { time: ul(n.since) }),
            }),
            (0, a.jsx)(uh, { label: ei.intl.string(ea.default.gfRhR3), value: un(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(ug, {
                              label: ei.intl.string(ea.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: ut,
                          }),
                          (0, a.jsx)(uh, {
                              label: ei.intl.string(ea.default.mSKImM),
                              value: ut(r),
                              hint: ei.intl.formatToPlainString(ea.default.JqMU05, {
                                  total: ut(n.cpu_ms_total),
                                  wall: ut(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(uh, {
                      label: ei.intl.string(ea.default.LEJ5r3),
                      value: ei.intl.string(ea.default["2Ekb2b"]),
                      hint: ei.intl.string(ea.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(uh, { label: ei.intl.string(ea.default.xvmL1D), value: ut(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(uh, {
                    label: ei.intl.string(ea.default["4sQYwH"]),
                    value: un(n.exceeded_cpu),
                    critical: !0,
                }),
            (0, a.jsx)(uh, {
                label: ei.intl.string(ea.default.bQenOy),
                value: un(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: ei.intl.formatToPlainString(ea.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(uh, { label: ei.intl.string(ea.default.xgpn4Y), value: ur(n.build) }),
        ],
    });
}
function u8(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        o = r
            ? [{ key: "shared", label: ei.intl.string(ea.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: ei.intl.string(ea.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: ei.intl.string(ea.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(um, {
        title: ei.intl.string(ea.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(uh, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(uh, {
                                  label: ei.intl.formatToPlainString(ea.default.u7kJJ4, { env: n }),
                                  value: ue(l.r2_bytes),
                                  hint: ei.intl.formatToPlainString(
                                      l.r2_truncated ? ea.default.lH0oQw : ea.default.m9h02S,
                                      { count: un(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(ug, {
                                      label: ei.intl.formatToPlainString(ea.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: ue,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function u9(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: uz.Mf,
        children: [
            (0, a.jsx)(uf, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(u5, {
                            title: ei.intl.string(ea.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(u5, {
                            title: ei.intl.string(ea.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(u8, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(u2, {
                                title: ei.intl.string(ea.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(u3, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(u2, {
                                title: ei.intl.string(ea.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(u7, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(u2, {
                                title: ei.intl.string(ea.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(u4, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(u2, {
                                title: ei.intl.string(ea.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(u6, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(ux, { analytics: t.analytics }),
                        (0, a.jsxs)(um, {
                            title: ei.intl.string(ea.default.fQMpFp),
                            children: [
                                (0, a.jsx)(uh, {
                                    label: ei.intl.string(ea.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? ur(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(uh, {
                                    label: ei.intl.string(ea.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? ur(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var ce = n(592465);
function ct(e) {
    let { projectId: t, onClose: n } = e,
        l = eH(),
        [r, s] = i.useState(() => (l && eG?.projectId === t ? "trace" : "logs")),
        o = (0, d.bG)([i2.A], () => i2.A.getStatus(t), [t]),
        u = (0, d.bG)([i2.A], () => i2.A.getFetchState(t), [t]);
    (i.useEffect(() => {
        (0, ee.R7)(t);
    }, [t]),
        i.useEffect(() => (0, ee.Rw)(t), [t]));
    let c = i.useCallback(() => (0, ee.R7)(t), [t]),
        f = i.useCallback(() => {
            if (!l) return !1;
            let e = (function (e) {
                if (null == eG || eG.projectId !== e) return null;
                let { traceId: t } = eG;
                return ((eG = null), t);
            })(t);
            return null != e && (o6(t, e), !0);
        }, [t, l]);
    (i.useEffect(() => {
        f();
    }, [f]),
        eU(t, () => {
            f() && s("trace");
        }));
    let m = i.useCallback(() => {
            (0, na.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: i2.A.getStatus(t),
                        last_turn_usage: i2.A.getLastTurnUsage(t),
                        last_compaction: i2.A.getLastCompaction(t),
                        last_compaction_decline: i2.A.getLastCompactionDecline(t),
                        timing_traces: i2.A.getTimingTraces(t),
                        logs: ek.Ay.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, x.P0)({ text: ei.intl.string(ea.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        h = ei.intl.string(ea.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: ce.nd,
        "aria-label": h,
        children: [
            (0, a.jsxs)(nY.Ay, {
                "aria-label": h,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(nY.Ay.Icon, {
                            icon: sC.CopyIcon,
                            tooltip: ei.intl.string(ea.default.TkHqy2),
                            onClick: m,
                        }),
                        (0, a.jsx)(nY.Ay.Icon, { icon: T.P, tooltip: ei.intl.string(ei.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(nY.Ay.ChannelIcon, { icon: N.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(nY.Ay.Title, { children: h }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: ce.rf,
                children: [
                    (0, a.jsxs)(ow.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": ei.intl.string(ea.default.RvvWIh),
                        className: ce.vR,
                        children: [
                            (0, a.jsx)(ow.V.Item, { id: "logs", children: ei.intl.string(ea.default["+VRYCm"]) }),
                            (0, a.jsx)(ow.V.Item, { id: "worker", children: ei.intl.string(ea.default["50D0FZ"]) }),
                            (0, a.jsx)(ow.V.Item, { id: "agent", children: ei.intl.string(ea.default.UkbTK1) }),
                            l ? (0, a.jsx)(ow.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, a.jsx)(u1, { projectId: t })
                        : "worker" === r
                          ? (0, a.jsx)(u9, { status: o, fetchState: u, onRefresh: c })
                          : "trace" === r && l
                            ? (0, a.jsx)(o9, { projectId: t })
                            : (0, a.jsx)(uV, { projectId: t, status: o, fetchState: u, onRefresh: c }),
                ],
            }),
        ],
    });
}
var cn = n(333007),
    cl = n(365912),
    cr = n(775121),
    ca = n(873715);
function ci(e) {
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
let cs = Object.freeze({ x: -1, y: -1 });
function co(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = ci(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var cu = n(470779);
function cc(e) {
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
            takeRefs: y,
        } = iq({ projectId: t, surface: "design", onUploadFile: h }),
        k = i.useRef(null),
        w = (f || g.length > 0) && j && !m,
        A = i.useCallback(() => {
            if (!w) return;
            let e = y();
            c(e.length > 0 ? e : void 0);
        }, [w, y, c]),
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
    return (0, a.jsxs)("div", {
        ref: S,
        className: o()(cu.M0, { [cu.ho]: N && !m, [cu.ET]: m }),
        style: { left: P, top: R },
        "data-testid": "conjure-design-compose-bar",
        children: [
            (0, a.jsx)("input", {
                ref: k,
                type: "file",
                multiple: !0,
                className: cu.Fg,
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
                    className: cu.tY,
                    onClick: () => k.current?.click(),
                    "aria-label": ei.intl.string(ea.default.lgvqSB),
                    children: (0, a.jsx)(Q.H, { size: "custom", color: "currentColor", className: cu.WW }),
                }),
            }),
            (0, a.jsx)(lm.y, {
                autoFocus: !0,
                rows: 1,
                className: cu.hF,
                value: s,
                placeholder: "" === r ? ei.intl.string(ea.default.MPPV1Q) : `Edit ${r}`,
                "aria-label": ei.intl.string(ea.default.KCYqWL),
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
                      className: cu.ZO,
                      children: g.map((e) => (0, a.jsx)(iG, { draft: e, onRemove: v }, e.localId)),
                  })
                : null,
        ],
    });
}
var cd = n(192888);
function cf(e, t) {
    return (0, cd.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(co, () => ({ status: "failed" }));
}
var cm = n(108308);
let ch = { x: 25, y: 21 };
function cg(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function cp(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function cx(e, t, n, l) {
    let r = cp(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function cv(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function cj(e) {
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
function cb(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        o = null != n && n === l ? t : null,
        { active: u, annotations: c } = e9(o),
        f = (0, tx.Zv)(o),
        m = (0, te.useHasAnyModalOpen)(),
        h = (0, d.bG)([tJ.default], () => tJ.default.getCurrentUser()),
        g = h?.id ?? null,
        [p, x] = i.useState(null),
        [j, b] = i.useState(null),
        [y, k] = i.useState(!1),
        [A, N] = i.useState(!1),
        [C, S] = i.useState(null),
        [E, I] = i.useState(!1),
        _ = i.useRef(null),
        T = i.useRef(null),
        P = i.useRef(null),
        [R, L] = i.useState(null),
        [D, $] = i.useState(!1),
        [O, F] = i.useState(null),
        [z, q] = i.useState(null),
        G = i.useRef(!1),
        [U, B] = i.useState(!1),
        [H, V] = i.useState(null),
        K = u && !f && !m;
    null == O || (K && O.projectId === o) || F(null);
    let W = O?.projectId ?? null;
    (i.useEffect(() => {
        if (null != W) return () => l0(W, "design");
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
                })(r());
                x((t) => (cg(t, e) ? t : e));
            }
            e();
            let t = window.setInterval(e, 250);
            return (
                window.addEventListener("resize", e),
                () => {
                    (window.clearInterval(t), window.removeEventListener("resize", e));
                }
            );
        }, [K, r]),
        i.useEffect(() => {
            if (!K || null == o) return;
            let e = !0,
                t = r();
            if (null == t) return void N(!0);
            (k(!0), N(!1));
            let n = `design-feedback-${crypto.randomUUID()}`;
            return (
                (0, ca.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                    (t) => {
                        if (!e) return;
                        k(!1);
                        let n = "completed" === t.status ? cj(t.response) : null;
                        null == n ? N(!0) : (b(n), e6(o, { url: n.url, title: n.title, viewport: n.viewport }));
                    },
                    () => {
                        e && (k(!1), N(!0));
                    },
                ),
                () => {
                    e = !1;
                }
            );
        }, [K, r, o]));
    let X = i.useRef(null);
    (i.useEffect(() => {
        if (!K || null == p || null == o) return;
        if (null == j) {
            X.current = p;
            return;
        }
        if (cg(X.current, p)) return;
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
                    (0, ca.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !Q.current) return;
                        let l = cj(e.response);
                        null != l && (b(l), e6(o, { url: l.url, title: l.title, viewport: l.viewport }));
                        let r = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let a = ci(e.element);
                            null != a && r.set(l.id, a);
                        }),
                            (n = e3(o)).active &&
                                0 !== r.size &&
                                e7(o, {
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
    }, [K, p, j, c, o, r]),
        i.useEffect(() => {
            if (!K)
                return () => {
                    (S(null), F(null), V(null), b(null));
                };
        }, [K]));
    let Y = i.useRef(null),
        J = i.useRef(null),
        Z = i.useRef(!1),
        Q = i.useRef(!1);
    i.useEffect(() => {
        ((Q.current = K), K || ((Y.current = null), (J.current = null), (P.current = null), I(!1)));
    }, [K]);
    let et = i.useCallback(
            function e() {
                if (Z.current) return;
                let t = Y.current;
                if (null == t) return;
                Y.current = null;
                let n = r();
                null != n &&
                    ((Z.current = !0),
                    cf(n, t).then((t) => {
                        if (((Z.current = !1), Q.current)) {
                            if ("picked" !== t.status || cC(t.target, eo.current.rect, eo.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? S(null)
                                    : "unsupported" === t.status && $(!0);
                            else {
                                let e = eW(t.target);
                                (L((t) => (cN(t, e) ? t : e)),
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
        en = i.useCallback(() => {
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
            let e = setTimeout(() => q(null), cw);
            return () => clearTimeout(e);
        }, [z]));
    let el = null == j || null == p || j.viewport.width < 1 ? 1 : p.width / j.viewport.width,
        er = null != j || A,
        es = i.useMemo(() => j?.elements ?? [], [j]),
        eo = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        eo.current = { rect: p, scale: el };
    }, [p, el]);
    let eu = i.useCallback(
            (e, t, n) => {
                null != o &&
                    (l0(o, "design"),
                    V(null),
                    (G.current = !1),
                    F({ projectId: o, target: e, anchor: t, draft: "", at: n, label: eW(e) }));
            },
            [o],
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
                    (Math.abs(e.clientX - O.at.x) > cA || Math.abs(e.clientY - O.at.y) > cA) && (G.current = !0);
                    return;
                }
                if (!er) return void S(null);
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
                        })(es, t.x, t.y),
                        n = null != e && cC(e, p, el) ? null : e;
                    if (null != n) {
                        let e = eW(n);
                        L((t) => (cN(t, e) ? t : e));
                    }
                    S((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = J.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((J.current = n), (Y.current = n), et());
            },
            [p, el, er, ec, D, es, O, H, ed, et],
        ),
        em = null == H ? null : c.find((e) => e.id === H.id),
        eh = K && (E || O?.target.marker != null || em?.target.marker != null);
    i.useEffect(() => {
        if (eh)
            return () => {
                let e = r();
                null != e && cf(e, cs);
            };
    }, [eh, r]);
    let eg = i.useCallback(() => {
        (I(!1), S(null), (J.current = null), (Y.current = null));
    }, []);
    i.useEffect(() => {
        if (!K || !E || !er || D || null != O || null != H) return;
        let e = P.current,
            { rect: t, scale: n } = eo.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((J.current = l), (Y.current = l), et());
    }, [K, E, er, D, O, H, et]);
    let ep = i.useCallback(
            (e) => {
                if (null != O || null != H) {
                    (en(), V(null));
                    return;
                }
                if (null == C || null == p) return;
                let t = ec(e, p);
                eu(
                    C,
                    (function (e, t, n) {
                        let { x: l, y: r, width: a, height: i } = e.rect;
                        return a < 1 || i < 1
                            ? eV
                            : { x: Math.min(1, Math.max(0, (t - l) / a)), y: Math.min(1, Math.max(0, (n - r) / i)) };
                    })(C, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [C, p, ec, O, H, eu, en],
        ),
        ex = i.useCallback(() => {
            null != o && (S(null), e4(o));
        }, [o]),
        ev = i.useCallback(() => {
            null != o &&
                (null != O
                    ? en()
                    : H?.confirmingRemove === !0
                      ? V({ ...H, confirmingRemove: !1 })
                      : null != H
                        ? V(null)
                        : ex());
        }, [o, O, H, en, ex]),
        ej = i.useRef(ev),
        eb = i.useRef(ex);
    i.useLayoutEffect(() => {
        ((ej.current = ev), (eb.current = ex));
    });
    let ey = i.useRef(null);
    i.useEffect(() => {
        if (K)
            return (
                cr.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        cr.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), ej.current());
        }
        function t(e) {
            let t = e.target;
            (0, tO.vq)(t) &&
                ey.current?.contains(t) !== !0 &&
                s?.current?.contains(t) !== !0 &&
                !(function (e) {
                    try {
                        return ((0, cl.J$)(e), !0);
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
                    eu(C, eV, { x: (p?.left ?? 0) + C.rect.x * el, y: (p?.top ?? 0) + C.rect.y * el }));
            },
            [o, O, H, es, C, eu, ev, p, el],
        ),
        ew = i.useCallback(
            (e) => {
                null == o ||
                    null == O ||
                    ((eK(O.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, ee.dv)(
                            o,
                            (function (e, t) {
                                let { kind: n, name: l } = eW(e),
                                    r = [n, l].filter((e) => "" !== e).join(": ");
                                return `${eJ}${r}${eZ}${eY(e)}
${t.trim()}`;
                            })(O.target, O.draft),
                            e,
                        ),
                        en(),
                        S(null)));
            },
            [o, O, en],
        ),
        eA = i.useCallback((e) => (null == o ? Promise.reject(Error("no project")) : (0, ee.vX)(o, e)), [o]),
        eN = i.useCallback(() => {
            if (null != o && null != H && null != g && eK(H.draft)) {
                var e, t;
                let n, l;
                ((e = H.id),
                    (t = H.draft.trim()),
                    null != (l = (n = e3(o)).annotations.find((t) => t.id === e)) &&
                        e5(l, g) &&
                        e7(o, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    V({ ...H, editing: !1 }));
            }
        }, [o, H, g]),
        eC = i.useCallback(() => {
            if (null != o && null != H && null != g) {
                var e;
                let t, n;
                ((e = H.id),
                    null != (n = (t = e3(o)).annotations.find((t) => t.id === e)) &&
                        e5(n, g) &&
                        e7(o, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    V(null));
            }
        }, [o, H, g]),
        eS = u
            ? y
                ? ei.intl.string(ea.default["Eb/YV9"])
                : A
                  ? ei.intl.string(ea.default.FD30bh)
                  : ei.intl.formatToPlainString(ea.default.dTSqLF, { count: c.length })
            : "",
        eE = K && null != p,
        eI = E && null == H,
        eM = O?.target ?? em?.target ?? null,
        e_ = O ?? z,
        eT = O ?? (z?.instant === !0 ? null : z),
        eP =
            null != em && null != p
                ? (function (e, t) {
                      let { left: n, top: l } = cv(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(cx(em.target, em.anchor, p, el), p)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (em?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = em;
            cf(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [em, r]),
        (0, cn.createPortal)(
            (0, a.jsxs)("div", {
                ref: ey,
                className: cm.Li,
                children: [
                    (0, a.jsx)("div", {
                        className: cm.y4,
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-design-announcer",
                        children: eS,
                    }),
                    eE
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)("div", {
                                      className: cm.MT,
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
                                  null != C && null == C.marker && null == O && null == H
                                      ? (0, a.jsx)(cS, { box: cp(C, p, el) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: _,
                                      className: cm.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: cm.xz,
                                          "data-shown": null != C && null == H && null == O ? "" : void 0,
                                          "data-instant": U ? "" : void 0,
                                          children: (0, a.jsxs)(v.E, {
                                              variant: "text-xs/medium",
                                              className: cm.Ux,
                                              children: [
                                                  null == R
                                                      ? null
                                                      : (0, a.jsx)("span", { className: cm.Tl, children: R.kind }),
                                                  null == R || "" === R.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: cm.kh,
                                                            children: [" ", R.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: T,
                                      className: cm.Y,
                                      children: eI ? (0, a.jsx)("div", { className: cm.u }) : null,
                                  }),
                                  null == eT
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: cm.aZ,
                                            style: {
                                                transform: `translate3d(${eT.at.x + 20}px, ${eT.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: cm.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == O ? "" : void 0,
                                                children: (0, a.jsxs)(v.E, {
                                                    variant: "text-xs/medium",
                                                    className: cm.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: cm.Tl,
                                                            children: eT.label.kind,
                                                        }),
                                                        "" === eT.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: cm.kh,
                                                                  children: [" ", eT.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eM && null == eM.marker
                                      ? (0, a.jsx)("div", { className: cm.D0, style: cp(eM, p, el), "aria-hidden": !0 })
                                      : null,
                                  c.map((e, t) => {
                                      let n = cx(e.target, e.anchor, p, el),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: cm.xL,
                                              style: { ...cv(n, p), width: 24, height: 24 },
                                              "aria-label": ei.intl.formatToPlainString(ea.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: eX(e.target),
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
                                                  (e.stopPropagation(), en(), V(l));
                                              },
                                              children: (0, a.jsx)(cy, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == e_ || null == o
                                      ? null
                                      : (0, a.jsx)(cc, {
                                            projectId: o,
                                            at: { x: e_.at.x + 20, y: e_.at.y + 20 },
                                            bounds: p,
                                            kind: e_.label.kind,
                                            value: e_.draft,
                                            canSubmit: null != O && eK(e_.draft),
                                            onChange: (e) => {
                                                null != O && F({ ...O, draft: e });
                                            },
                                            onSubmit: ew,
                                            onDismiss: en,
                                            onUploadFile: eA,
                                            closing: null == O,
                                        }),
                                  null != em && null != H && null != eP
                                      ? (0, a.jsxs)(ck, {
                                            point: eP,
                                            frame: p,
                                            authorId: em.authorId,
                                            title: eX(em.target),
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
                                                          label: ei.intl.string(ea.default.KCYqWL),
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
                                                    : (0, a.jsx)(v.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-default",
                                                          className: cm.aC,
                                                          children: em.comment,
                                                      }),
                                                e5(em, g)
                                                    ? (0, a.jsx)("div", {
                                                          className: cm.eB,
                                                          children: H.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(v.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: cm.nv,
                                                                            children: ei.intl.string(ea.default.wOHvts),
                                                                        }),
                                                                        (0, a.jsx)(w.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: ei.intl.string(ea.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                V({ ...H, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, a.jsx)(w.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: ei.intl.string(ea.default.friIzR),
                                                                            "data-testid":
                                                                                "conjure-design-remove-confirm",
                                                                            onClick: eC,
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
                                                                                V({
                                                                                    ...H,
                                                                                    editing: !1,
                                                                                    confirmingRemove: !0,
                                                                                }),
                                                                        }),
                                                                        H.editing
                                                                            ? (0, a.jsx)(w.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !eK(H.draft),
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
                                                                                      V({
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
function cy(e) {
    let { authorId: t } = e,
        n = (0, d.bG)([tJ.default], () => tJ.default.getUser(t), [t]);
    return (0, a.jsx)(aw.eu, {
        src: null == n ? null : aC.Ay.getUserAvatarURL(n),
        size: aA._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function ck(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        { point: u, frame: c, authorId: d, title: f, testId: m, onDismiss: h, onMouseLeave: g, children: p } = e,
        x = i.useRef(null),
        j = i.useRef(null),
        [b, y] = i.useState(ch);
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
        (s = Math.min(Math.max(u.x - b.x, t), n)),
        { left: s, top: (o = Math.min(Math.max(u.y - b.y, l), r)), originX: u.x - s, originY: u.y - o }),
        C = { left: k, top: w, "--custom-conjure-card-origin-x": `${A}px`, "--custom-conjure-card-origin-y": `${N}px` };
    return (0, a.jsxs)("div", {
        ref: x,
        className: cm.Nr,
        style: C,
        "data-testid": m,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, a.jsxs)("div", {
                className: cm.MY,
                children: [
                    (0, a.jsx)("span", { ref: j, className: cm.ip, children: (0, a.jsx)(cy, { authorId: d }) }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: cm.Qc,
                        children: f,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: cm.zI, children: p }),
        ],
    });
}
let cw = 300,
    cA = 2;
function cN(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function cC(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function cS(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: cm.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var cE = n(659723),
    cI = n(697744),
    cM = n(130324);
function c_(e) {
    let t = (0, cI.c)(),
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
    let r = (0, i7.A)();
    return (
        i.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function cT(e) {
    let { className: t } = e,
        { Component: n, events: l } = c_(3e4);
    return (0, a.jsxs)("div", {
        className: t,
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: cM.o,
                children: ei.intl.string(ea.default.AyiQEp),
            }),
        ],
    });
}
var cP = n(251363),
    cR = n(944142),
    cL = n(532247),
    cD = n(501628);
function c$(e) {
    let { progress: t } = e,
        { Component: n } = c_(1500),
        l = eB.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: cD.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: cD.PM,
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
function cO(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        o = (0, d.bG)([cR.A], () => (s ? cR.A.getLiveReload(t) : null), [s, t]),
        u = (0, q.A)(n, r)?.id ?? null,
        c = o?.phase ?? null,
        f = (function (e, t) {
            let n = (0, cL.dv)(e),
                [l, r] = i.useState(null),
                [a, s] = i.useState(n);
            a !== n && (s(n), r(null == n ? (0, cL.QP)(e, a) : null));
            let o = (0, d.bG)(
                    [tL.A],
                    () => {
                        let e = tL.A.getFrame(t);
                        return (0, t_.x1)(e) && e.data.proxyTicketRefreshing;
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
                        null != n.target && n.target === (0, cP.o)(null, t) && e();
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
        m = (0, cL.h_)(c, o?.step ?? null, f);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(y.A, { tag: "div", role: "status", "aria-live": "polite", children: m?.title ?? "" }),
            null != m
                ? (0, a.jsx)("div", {
                      className: cD.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(c$, { progress: m }),
                  })
                : null,
        ],
    });
}
var cF = n(343030),
    cz = n(317608),
    cq = n(338941),
    cG = n(964404);
let cU = { width: 1 / 0, height: 1 / 0 };
function cB(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cU;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var cH = n(702083);
function cV(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, d.cf)([tg.A], () => ({
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
        f = n ? cB(l, c ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: o()(cH.dw, { [cH.PQ]: null != f }),
        children: (0, a.jsx)("div", { className: o()(cH.R9, { [cH.Vg]: null != f }), style: f ?? void 0, children: t }),
    });
}
var cK = n(347927);
function cW(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: o()(cK.Bf, l && cK.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: cK.Ux,
                children: [
                    (0, a.jsx)(S.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    null != n
                        ? (0, a.jsx)(v.E, { variant: "text-md/medium", color: "text-subtle", children: n })
                        : null,
                ],
            }),
            r,
        ],
    });
}
var cX = n(957272);
function cY(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: s, state: o } = (0, cq.A)({ applicationId: t, surface: n, launch: l }),
        u = (0, t_.VA)(t, n);
    if (
        (i.useEffect(
            () => (
                !(function (e) {
                    let t = tL.A.getFrame(e);
                    if (null == t || tD.A.getWindowOpen(eg.MLl.ACTIVITY_POPOUT)) return;
                    let n = tL.A.getMainFrame()?.id === e;
                    t.intent === t_.sV.MAIN
                        ? (n || z.A.promoteFrame(e), z.A.resetFrameLayoutModes(e))
                        : n && z.A.clearMainFrameSlot();
                })(u),
                () => {
                    let e;
                    null != (e = tL.A.getFrame(u)) &&
                        ((0, t_.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        cG.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === t_.sV.INLINE && z.A.promoteFrame(u),
                              z.A.updateFrameLayoutMode({ frameId: u, layoutMode: t_.y0.PIP }))
                            : e.intent === t_.sV.MAIN && z.A.demoteMainFrame(u));
                }
            ),
            [u],
        ),
        o === cq.n.Launched)
    ) {
        let e = (0, a.jsx)(cz.A, { frameId: s.id, level: cF.A.WithinAppContent, className: cX.Z7, overlay: r });
        return (0, tb.Q5)(n) ? (0, a.jsx)(cV, { children: e }) : e;
    }
    return (0, a.jsx)(cJ, { state: o });
}
function cJ(e) {
    let { state: t } = e;
    switch (t) {
        case cq.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: cX.qs,
                children: (0, a.jsx)(cW, {
                    title: ei.intl.string(ea.default["9kpdo7"]),
                    body: ei.intl.string(ea.default.iIA8Nj),
                }),
            });
        case cq.n.NoApplication:
            return (0, a.jsx)(cT, { className: cX.qs });
        case cq.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: cX.qs,
                children: (0, a.jsx)(cW, {
                    title: ei.intl.string(ea.default["7k4GyN"]),
                    body: ei.intl.string(ea.default.zdIy3R),
                }),
            });
        case cq.n.Error:
            return (0, a.jsxs)("div", {
                className: cX.qs,
                children: [
                    (0, a.jsx)(S.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: ei.intl.string(ea.default.lTPbnG),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: cX.tj,
                        children: ei.intl.string(ea.default.e6GiAZ),
                    }),
                ],
            });
        case cq.n.AwaitingLaunch:
        case cq.n.Loading:
            return (0, a.jsx)("div", { className: cX.qs, children: (0, a.jsx)(k.y, {}) });
    }
}
var cZ = n(308528),
    cQ = n(334738),
    c0 = n(688438),
    c1 = n(355622),
    c2 = n(365971),
    c3 = n(703462);
function c7(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: c3.f,
        children: [
            (0, a.jsx)(rX.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function c4() {
    return (0, a.jsx)("div", { className: c3.f, children: (0, a.jsx)(k.y, {}) });
}
function c6(e) {
    let t,
        n,
        { previewApplicationId: l } = e,
        { data: r, isLoading: s } = (0, $.YY)(l),
        o = r?.bot?.id ?? null,
        u = (0, d.bG)([H.A], () => {
            if (null == o) return null;
            let e = H.A.getDMFromUserId(o);
            return null != e ? H.A.getChannel(e) : null;
        });
    ((t = u?.id ?? null),
        i.useEffect(() => {
            null != t && cZ.A.preload(eg.ME, t);
        }, [t]),
        (n = (0, d.bG)([sb.A], () => sb.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, c2.Xg)();
            return (
                (0, cQ.yl)(t, e),
                () => {
                    (0, cQ.dm)(t, e);
                }
            );
        }, [t, n]));
    let [c, f] = i.useState(null),
        m = null != o && c === o;
    return (i.useEffect(() => {
        if (null == o || null != u) return;
        let e = !1;
        return (
            cZ.A.openPrivateChannel({ recipientIds: o, navigateToChannel: !1 }).catch(() => {
                e || f(o);
            }),
            () => {
                e = !0;
            }
        );
    }, [o, u]),
    s && null == r)
        ? (0, a.jsx)(c4, {})
        : null == o || m
          ? (0, a.jsx)(c7, { message: ei.intl.string(ea.default["VP/O8s"]) })
          : null == u
            ? (0, a.jsx)(c4, {})
            : (0, a.jsx)("div", {
                  className: c3.g,
                  children: (0, a.jsx)(c0.A, { channel: u, guild: null, chatInputType: c1.oU.SIDEBAR }, u.id),
              });
}
var c5 = n(887909),
    c8 = n(570962),
    c9 = n(998475);
function de(e) {
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
    } = (0, c5.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, a.jsxs)("section", {
        className: c9.Nr,
        "aria-label": t,
        children: [
            (0, a.jsx)("div", {
                className: c9.rf,
                children: (0, a.jsx)(c8.A, {
                    obscured: !0 === m,
                    children: (0, a.jsxs)("div", {
                        className: c9.Gq,
                        children: [
                            null != n
                                ? (0, a.jsxs)("div", {
                                      className: c9.z3,
                                      children: [
                                          (0, a.jsx)(S.D, {
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
                                className: o()(c9.Qs, d ? c9.cw : null, f ? c9.pN : null),
                                children: [i, null == u ? c : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != s && s.length > 0
                ? (0, a.jsx)("div", {
                      className: c9.o1,
                      children: s.map((e, t) => (0, a.jsx)(w.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var dt = n(765671),
    dn = n(269094),
    dl = n(714917),
    dr = n(582063);
let da = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function di() {
    (0, x.P0)({ text: ei.intl.string(ea.default.jj3abP), variant: "critical" });
}
function ds(e) {
    let { projectId: t } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        r = ei.intl.string(ea.default["xd/1IW"]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(Y.Y, {
                targetElementRef: n,
                align: "left",
                position: "bottom",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(du, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, a.jsx)("div", {
                        ref: n,
                        className: dr.m2,
                        children: (0, a.jsx)(b.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, a.jsx)(nt.K, {
                                "aria-label": r,
                                icon: C.SettingsIcon,
                                variant: "overlay-secondary",
                                size: "sm",
                                onClick: t,
                            }),
                        }),
                    });
                },
            }),
            (0, a.jsx)("input", {
                ref: l,
                type: "file",
                accept: da.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (da.includes(n.type)
                                ? n.size > X.aI
                                    ? (0, x.P0)({ text: ei.intl.string(ea.default.T8Spiu), variant: "critical" })
                                    : (0, ee.M$)(t, n).catch(di)
                                : (0, x.P0)({ text: ei.intl.string(ea.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function du(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, d.bG)([dl.A], () => dl.A.getBackground(t)),
        i = r?.blur === !0,
        s = r?.imageEtag ?? null;
    return (0, a.jsxs)(J.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": ei.intl.string(ea.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, a.jsxs)(Z.rX, {
                children: [
                    (0, a.jsx)(Z.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: ei.intl.string(ea.default.uQpDky),
                        icon: lO.X,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, a.jsx)(Z.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: ei.intl.string(ea.default.AiAz8J),
                        icon: uI.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, ee.Og)(t).catch(di));
                        },
                    }),
                ],
            }),
            (0, a.jsx)(Z.rX, {
                children: (0, a.jsx)(Z.fP, {
                    id: "conjure-overlay-background-blur",
                    label: ei.intl.string(ea.default["hyN+kc"]),
                    checked: i,
                    action: () => {
                        (0, ee.Y1)(t, !i) || di();
                    },
                }),
            }),
        ],
    });
}
let dc = "/assets/7cec34541705c795.webp";
function dd(e) {
    let { applicationId: t, projectId: n, size: l } = e,
        r = (0, cq.A)({ applicationId: t, surface: t_.ZN });
    return (i.useEffect(() => {
        let e = (0, t_.VA)(t, t_.ZN);
        return () => (0, tS.r)(e);
    }, [t]),
    r.state !== cq.n.Launched)
        ? (0, a.jsx)(cJ, { state: r.state })
        : r.frame.data.proxyTicketRefreshing
          ? (0, a.jsx)(cJ, { state: cq.n.Loading })
          : (0, a.jsx)(df, { lifecycle: r, projectId: n, size: l });
}
function df(e) {
    let { lifecycle: t, projectId: n, size: l } = e,
        { ref: r, width: i, height: s } = (0, dt.Ay)(),
        o = (function (e, t) {
            let { width: n, height: l } = e;
            return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
        })({ width: i, height: s }, l);
    return (0, a.jsxs)("div", {
        className: dr.JH,
        children: [
            (0, a.jsx)(dm, { projectId: n }),
            (0, a.jsx)("div", {
                ref: r,
                className: dr.dw,
                children: (0, a.jsx)("div", {
                    className: dr.HL,
                    style: {
                        "--custom-conjure-overlay-widget-width": `${l.width}px`,
                        "--custom-conjure-overlay-widget-height": `${l.height}px`,
                        "--custom-conjure-overlay-widget-scale": String(o),
                    },
                    children: (0, a.jsx)(dn.A, { frame: t.frame, application: t.application, className: dr.Gt }),
                }),
            }),
            null != n ? (0, a.jsx)(ds, { projectId: n }) : null,
        ],
    });
}
function dm(e) {
    let { projectId: t } = e,
        n = (0, d.bG)([dl.A], () => (null != t ? dl.A.getBackground(t) : null)),
        l = n?.imageEtag ?? null,
        [r, s] = i.useState(null),
        [u, c] = i.useState(null),
        [f, m] = i.useState(!1);
    (i.useEffect(() => {
        if (null != n) return;
        let e = setTimeout(() => m(!0), 2e3);
        return () => clearTimeout(e);
    }, [n]),
        i.useEffect(() => {
            if (null == t || null == l) return;
            let e = !1;
            return (
                (0, ee.Mg)(t, l).then(
                    (t) => {
                        e || s(t);
                    },
                    () => {
                        e || s(dc);
                    },
                ),
                () => {
                    e = !0;
                }
            );
        }, [t, l]));
    let h = null != l ? r : null,
        g = null == l || (null != h && h === u) ? dc : h;
    return null != g && (null == t || null != n || f)
        ? (0, a.jsx)("img", {
              className: o()(dr.LO, { [dr.Ty]: n?.blur === !0 }),
              src: g,
              alt: "",
              "aria-hidden": !0,
              onError: () => {
                  g === h && c(h);
              },
          })
        : null;
}
var dh = n(409478),
    dg = n(652227);
function dp(e) {
    let {
        applicationId: t,
        previewApplicationId: n,
        surface: l,
        frameLaunchParams: r,
        previewReady: i,
        previewGate: s,
        availability: o,
        activeMode: u,
        widgetApplicationId: c,
        overlayWidgetSize: d = tp,
        projectId: f,
        frameOverlay: m,
    } = e;
    return s?.type === "checking"
        ? (0, a.jsx)("div", { className: dg.q, children: (0, a.jsx)(k.y, {}) })
        : s?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: dg.q,
                children: null == s.authorizeProps ? (0, a.jsx)(k.y, {}) : (0, a.jsx)(de, { ...s.authorizeProps }),
            })
          : i
            ? null == t
                ? null
                : (0, a.jsxs)("div", {
                      className: dg.R,
                      children: [
                          (0, tj.yf)(o, u)
                              ? (0, a.jsx)(cY, { applicationId: t, surface: l, launch: r, frameOverlay: m })
                              : null,
                          "widget" === u && null != c
                              ? "unavailable-authorization-revoked" === o.profileState
                                  ? (0, a.jsx)("div", {
                                        className: dg.q,
                                        children: (0, a.jsx)(cW, {
                                            wide: !0,
                                            title: ei.intl.string(ea.default["08U+YO"]),
                                            body: ei.intl.string(ea.default.pKBfrc),
                                        }),
                                    })
                                  : (0, a.jsx)(dh.A, { applicationId: c })
                              : null,
                          "overlay" === u && o.modes.includes("overlay")
                              ? (0, a.jsx)(dd, { applicationId: t, projectId: f, size: d })
                              : null,
                          "bot" === u && null != n ? (0, a.jsx)(c6, { previewApplicationId: n }) : null,
                      ],
                  })
            : (0, a.jsx)(cT, { className: dg.q });
}
var dx = n(175841),
    dv = n(750506),
    dj = n(867193),
    db = n(539197),
    dy = n(977020);
function dk(e) {
    let { projectId: t } = e,
        n = (0, db.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, db.Ie)(e);
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
        className: dy.$Q,
        style: { left: r, top: s, width: u, height: c, "--custom-conjure-cursor-scale": d },
        "aria-hidden": !0,
        [db.t$]: "",
        children: [
            n.presses > 0
                ? (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)("div", { className: o()(dy.hN, dy.vW), style: f(n.pressX, n.pressY) }),
                              (0, a.jsx)("div", { className: o()(dy.hN, dy.A7), style: f(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, a.jsx)("svg", {
                className: o()(dy.UE, { [dy.SP]: n.shown, [dy.Vq]: n.pressed, [dy.GP]: n.dipping }),
                style: f(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, a.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var dw = n(417760);
function dA(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function dN(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function dC(e) {
    let { phase: t, projectId: n, onOpenPublishedApp: l, compact: r } = e,
        { stop: s, stopping: u } = (function (e) {
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
        c = (0, tx.CU)(n),
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
                      loading: u,
                      onClick: s,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return r
        ? (0, a.jsxs)("div", {
              className: o()(dw.M0, dw.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  f
                      ? (0, a.jsx)(ot.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(dx.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "none", className: dw.ID, children: m }),
                  f ? (0, a.jsx)(y.A, { children: ei.intl.string(ea.default.fg1sor) }) : null,
                  f ? (0, a.jsxs)("div", { className: dw.lC, children: [h, g] }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: dw.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: dw.sp,
                      children: [
                          (0, a.jsx)(dx.SparklesIcon, { size: "sm", color: "currentColor" }),
                          f ? (0, a.jsx)(ot.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: dw.f4,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: dw.w9,
                                      children: m,
                                  }),
                                  f
                                      ? (0, a.jsx)(v.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: dw.Rb,
                                            children: ei.intl.string(ea.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  f ? (0, a.jsxs)("div", { className: dw.lC, children: [h, g] }) : null,
              ],
          });
}
function dS(e) {
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
        f = tG(s);
    i.useEffect(() => {
        u &&
            f &&
            null != s &&
            (function (e) {
                if (!tz(e)) return;
                let t = tF(e);
                null != t && (0, t$.sP)(t);
            })(s);
    }, [u, f, s]);
    let [m, h] = i.useState(null),
        [g, p] = i.useState(null),
        [x, v] = i.useState(null),
        j = "idle" !== c;
    i.useEffect(() => {
        if (!j) return;
        function e() {
            let e = dA(r());
            h((t) => (dN(t, e) ? t : e));
            let t = null == g ? null : dA(g);
            (v((e) => (dN(e, t) ? e : t)), null != g && (0, dj.C)(g.getBoundingClientRect().height));
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
                    null != g && (0, dj.C)(0));
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
            let [e] = i.useContext(dv.uY),
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
                      className: dw.D,
                      "data-phase": c,
                      children: (0, a.jsx)("div", {
                          className: dw.QF,
                          children: (0, a.jsx)(dC, { phase: c, projectId: t, onOpenPublishedApp: o, compact: k }),
                      }),
                  })
                : null,
            (0, cn.createPortal)(
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("div", {
                        className: dw.y4,
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
                ? (0, cn.createPortal)(
                      (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: dw.ys,
                                  style: A,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: dw.om,
                                  style: w,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(dk, { projectId: t }),
                          ],
                      }),
                      N,
                  )
                : null,
        ],
    });
}
var dE = n(399503),
    dI = n(853555),
    dM = n(558960),
    d_ = n(187645);
let dT = new Map(),
    dP = !1;
function dR() {
    let e = new Map();
    for (let t of new Set([...ex.Ay.getActivityOrderedProjectIds(), ...(0, tx.T7)()])) {
        if (!ex.Ay.isThinking(t) && !(0, tx.wK)(t)) continue;
        let n = (function (e) {
            let t = ek.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = (0, tb.Rc)(t);
            return (0, t_.x1)(n) ? n.id : null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, r] of [...dT]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            dT.delete(t),
            n.unregisterLookup(),
            dM.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove());
    }
    for (let [t, n] of e)
        dT.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = d_.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    dL(n),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (dT.set(e, l),
                    (l.unregisterLookup = (0, dI.Ng)(e, () => (0, cP.o)(n, t))),
                    dM.A.registerFrameTarget(t, n, cF.A.Backstage, void 0));
            })(t, n);
    for (let e of dT.values()) dL(e.element);
}
function dL(e) {
    let t = tg.A.isBuilderPreviewMobile();
    e.classList.toggle(d_.L, !t);
    let n = t ? cB(tg.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != n ? `${n.width}px` : ""), (e.style.height = null != n ? `${n.height}px` : ""));
}
var dD = n(873727),
    d$ = n(147248),
    dO = n(418842),
    dF = n(363195),
    dz = n(818023);
let dq = null;
var dG = n(602853),
    dU = n(517461),
    dB = n(761929),
    dH = n(487336);
function dV(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: r } = e,
        s = (0, dG.r)(R.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = i.useRef(null),
        [u, c] = (0, dU.V)("VibegrationsChatSidebarWidth", 460),
        [d, f] = i.useState(u ?? 460),
        m = (0, rd.clamp)(d, 360, n);
    i.useLayoutEffect(() => {
        l(t ? m + s : 0);
    }, [m, t, s, l]);
    let h = (0, dB.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: f,
            onElementResizeEnd: c,
            orientation: dB.R.HORIZONTAL_LEFT,
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
        className: dH.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: dH.Di, onPointerDown: g }),
            (0, a.jsx)("div", { ref: o, className: dH.kL, style: { width: m }, children: r }),
        ],
    });
}
var dK = n(541940);
function dW(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: u,
            mainClassName: c,
            content: f,
            sidebar: m,
            onOpenPublishedApp: h,
            showsFrame: g,
        } = e,
        [p, x] = i.useState(null),
        v = (0, q.A)(l, s),
        j = v?.id ?? null;
    (!(function (e, t) {
        let n = (0, d.bG)([dF.A], () => (0, dD.x4)(dF.A.theme)),
            l = (0, d.bG)([d$.A], () => d$.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: s,
                forcedColors: o,
                underlineLinks: u,
            } = (0, d.cf)([iP.Ay], () => ({
                reducedMotion: iP.Ay.useReducedMotion,
                fontScale: (0, dD.U0)(),
                highContrast: iP.Ay.isHighContrastModeEnabled,
                forcedColors: iP.Ay.useForcedColors,
                underlineLinks: iP.Ay.alwaysShowLinkDecorations,
            })),
            c = eB.hH.useSetting(),
            f = (0, dO.C)(),
            m = i.useRef(!1),
            h = i.useRef(!1),
            g = i.useRef(0),
            p = i.useRef(null),
            x = i.useCallback(() => {
                let l = (0, cP.o)(e, t);
                if (null == l) return;
                p.current = l;
                let i = {
                    revision: ++g.current,
                    baseTheme: n,
                    customTheme: (0, dD.Lq)(),
                    uiDensity: f,
                    messageDisplayCompact: c,
                    fontScale: a,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: o,
                    underlineLinks: u,
                };
                (0, cd.W)(l, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, o, a, t, s, c, e, r, f, u]),
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
                let n = (0, cP.o)(e, t);
                null != n && n !== p.current && j();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, cP.o)(e, t) && ((p.current = null), j());
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
            if (null != t) return (0, dI.Ng)(t, () => (0, cP.o)(p, j));
        }, [t, p, j]));
    let b = i.useCallback(() => (0, cP.o)(p, j), [p, j]),
        y = i.useCallback(() => (g ? (0, cP.o)(p, j) : p), [g, p, j]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: o()(dK.Mh, c),
                children: [
                    u,
                    (0, a.jsx)(dS, {
                        projectId: t ?? null,
                        applicationId: l,
                        previewApplicationId: r,
                        resolveTarget: y,
                        frameId: j,
                        onOpenPublishedApp: h,
                    }),
                    (0, a.jsx)("div", { ref: x, className: dK.fm, children: f }),
                ],
            }),
            m,
            (0, a.jsx)(cb, {
                projectId: t ?? null,
                applicationId: l,
                previewApplicationId: r,
                resolveIframe: b,
                toggleRef: n,
            }),
        ],
    });
}
function dX(e) {
    let {
        projectId: t,
        designFeedbackToggleRef: n,
        applicationId: l,
        previewApplicationId: r,
        surface: s,
        frameLaunchParams: u,
        header: c,
        chatOpen: f,
        onCloseChat: m,
        chatHeaderAction: h,
        onRestoreVersion: g,
        onImportProject: p,
        debugOpen: x = !1,
        onCloseDebug: v,
        restoreState: j,
        previewReady: b,
        previewGate: y,
        availability: k,
        activeMode: w,
        widgetApplicationId: A,
        overlayWidgetSize: N,
        onOpenPublishedApp: C = null,
    } = e;
    (0, dE.k)(t, A);
    let S = s.type === ty.U.MAIN || (0, tb.Q5)(s);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, d.cf)([tg.A], () => ({
            mobile: tg.A.isBuilderPreviewMobile(),
            landscape: tg.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? dz.aX.LANDSCAPE : dz.aX.PORTRAIT), (dq = e));
                else {
                    if (dq !== e) return;
                    ((l = dz.aX.UNHANDLED), (dq = null));
                }
                lq.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(S ? l : null);
    let E = i.useRef(null),
        [I, M] = i.useState(0);
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
                dP ||
                    ((dP = !0),
                    ex.Ay.addChangeListener(dR),
                    ek.Ay.addChangeListener(dR),
                    tL.A.addChangeListener(dR),
                    tg.A.addChangeListener(dR),
                    (0, tx.W3)(dR),
                    dR()));
        }, [t]),
        i.useLayoutEffect(() => {
            let e = E.current;
            if (null == e) return;
            function t() {
                null != e && M(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return (n.observe(e), () => n.disconnect());
        }, []),
        i.useLayoutEffect(() => () => (0, ey.Zq)(0), []));
    let _ = Math.max(360, I - 320),
        P = f || S;
    return (0, a.jsx)("div", {
        ref: E,
        className: dK.LB,
        children: (0, a.jsx)(dW, {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: c,
            onOpenPublishedApp: C,
            showsFrame: (0, tj.yf)(k, w),
            mainClassName: null == c ? void 0 : o()(dK.ez, { [dK.zt]: f }),
            content: (0, a.jsx)(dp, {
                applicationId: l,
                previewApplicationId: r,
                surface: s,
                frameLaunchParams: u,
                previewReady: b,
                previewGate: y,
                availability: k,
                activeMode: w,
                widgetApplicationId: A,
                overlayWidgetSize: N,
                projectId: t,
                frameOverlay: (0, a.jsx)(cO, { projectId: t, applicationId: l, previewApplicationId: r, surface: s }),
            }),
            sidebar:
                null != t && P
                    ? (0, a.jsx)(dV, {
                          open: f,
                          maxWidth: _,
                          onWidthChange: ey.Zq,
                          children: (0, a.jsx)("div", {
                              className: dK.cO,
                              children: x
                                  ? (0, a.jsx)(ct, { projectId: t, onClose: v ?? (() => {}) }, t)
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(cE.A, { projectId: t }),
                                            (0, a.jsx)(nY.Ay, {
                                                "aria-label": ei.intl.string(ei.t["/VQax8"]),
                                                toolbar: (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        h,
                                                        null == m
                                                            ? null
                                                            : (0, a.jsx)(nY.Ay.Icon, {
                                                                  icon: T.P,
                                                                  tooltip: ei.intl.string(ea.default.JD6Oit),
                                                                  onClick: m,
                                                              }),
                                                    ],
                                                }),
                                                children: (0, a.jsx)(nY.Ay.Title, {
                                                    children: ei.intl.string(ei.t["/VQax8"]),
                                                }),
                                            }),
                                            (0, a.jsx)("div", {
                                                className: dK.cb,
                                                children: (0, a.jsx)(
                                                    ok,
                                                    {
                                                        projectId: t,
                                                        restoreState: j,
                                                        onRestoreVersion: g,
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
var dY = n(631417);
function dJ(e) {
    let { title: t, actions: n, breadcrumb: l, project: r, onOpenProjectSettings: i } = e,
        s = ei.intl.string(ea.default.FzfmQ8);
    return (0, a.jsx)(G.A, {
        hideSearch: !0,
        toolbar: n,
        className: dY.wx,
        "aria-label": t,
        children: (0, a.jsxs)("div", {
            className: dY.QF,
            children: [
                (0, a.jsx)(P.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: R.A.colors.TEXT_STRONG,
                    className: dY.Kk,
                }),
                null != l
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(G.A.Title, { onClick: l.onClick, children: l.title }),
                              (0, a.jsx)(G.A.Caret, {}),
                          ],
                      })
                    : null,
                null != r && null != i
                    ? (0, a.jsx)(b.m, {
                          asContainer: !0,
                          text: s,
                          position: "bottom",
                          children: (0, a.jsx)(j.D, {
                              className: dY.FF,
                              onClick: i,
                              "aria-label": s,
                              children: (0, a.jsx)(nw.A, { project: r, size: "header" }),
                          }),
                      })
                    : null,
                (0, a.jsx)(G.A.Title, { className: dY.Qw, wrapperClassName: dY.DD, children: t }),
            ],
        }),
    });
}
let dZ = "conjuring-help";
var dQ = n(173114);
function d0() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: n,
            } = (0, d.cf)([tJ.default, K.A, nz.Ay, sv.A], () => {
                let e = tJ.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of K.A.getGuildsArray()) {
                    if (!t.features.has(eg.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let n = nz.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, O.m1)(t, tJ.default, sv.A) === dZ;
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
                    : (0, ns.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, a.jsx)("div", {
              className: dQ.l,
              children: (0, a.jsx)(nZ.w, {
                  type: "info",
                  iconAlign: "center",
                  message: ei.intl.format(ea.default["6anmu1"], { channel: dZ, onNavigate: t }),
                  role: "static",
              }),
          });
}
var d1 = n(606128),
    d2 = n(323140);
function d3(e) {
    return (0, a.jsx)(m.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function d7(e) {
    return (0, a.jsx)(h.u, { ...e, size: "custom", width: 20, height: 20 });
}
function d4(e) {
    return (0, a.jsx)(g.k, { ...e, size: "custom", width: 20, height: 20 });
}
function d6(e) {
    return (0, a.jsx)(p.H, { ...e, size: "custom", width: 20, height: 20 });
}
let d5 = {
    showPublishBlocked: function (e, t, n) {
        (0, te.openModal)((l) => (0, a.jsx)(nV, { ...l, reason: e, message: t, onConfirm: n }));
    },
    promptFirstPublish: (e) =>
        new Promise((t) => {
            let n = !1;
            (0, te.openModal)(
                (t) =>
                    (0, a.jsx)(nB, {
                        ...t,
                        ...e,
                        onDone: () => {
                            n = !0;
                        },
                    }),
                { onCloseCallback: () => t(n) },
            );
        }),
    openPublishNotes: nK.A,
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
function d8(e) {
    var t;
    let n,
        l,
        r,
        s,
        u,
        m,
        h,
        g,
        p,
        w,
        { project: A, guildId: N, onSelect: C, onRemix: S, shared: E = !1 } = e,
        I =
            ((n = A.id),
            (l = A.name),
            (r = i.useRef(!1)),
            (s = i.useCallback(() => {
                r.current ||
                    ((r.current = !0),
                    (0, x.P0)({ text: ei.intl.formatToPlainString(ea.default.aN2JdD, { name: l }) }),
                    eu(n, l)
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
                onImport: (u = ec(
                    i.useCallback(
                        (e) => {
                            let t = eo(e);
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
                importInput: u.input,
            }),
        M =
            null == A.updated_at
                ? null
                : ei.intl.formatToPlainString(ea.default.AXydi3, { time: c()(A.updated_at).fromNow() }),
        _ = (0, tX.wu)(A),
        T =
            (0, d.bG)([K.A], () => (null == _ ? null : (K.A.getGuild(_)?.name ?? null)), [_]) ??
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
                null != h && (t3(h), g.forEach(t3));
            }, [h, g]),
            (p = (0, d.bG)([tJ.default], () => (null == h ? null : tJ.default.getUser(h)), [h])),
            (w = (0, d.yK)([tJ.default], () => g.map((e) => tJ.default.getUser(e)).filter((e) => null != e), [g])),
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
                                  (0, tZ.mG)(p),
                                  w.map((e) => (0, tZ.mG)(e)),
                              ),
                          },
                [p, w],
            )),
        D = i.useId(),
        $ = (0, a.jsx)(v.E, { variant: "text-md/semibold", color: "text-strong", className: d2.j1, children: A.name }),
        O = {
            projectId: A.id,
            projectName: A.name,
            guildId: N,
            projectGuildId: A.guild_id,
            isOwner: (0, ek.PV)(A),
            canRemix: (0, ek.H_)(A),
            onRemix: S,
            onExport: I.onExport,
            onImport: I.onImport,
        };
    return (0, a.jsxs)("div", {
        className: o()(d2.OY, { [d2.Wy]: P }),
        "aria-busy": P,
        children: [
            (0, a.jsx)(tt.Ay, { projectId: A.id }),
            P ? null : (0, a.jsx)(nS.a, { projectId: A.id }),
            (0, a.jsxs)(j.D, {
                className: d2.W6,
                onClick: P ? void 0 : C,
                onContextMenu: function (e) {
                    P || (0, L.jA)(e, () => (0, a.jsx)(ny, { ...O, onCloseMenu: L.Z_ }));
                },
                tabIndex: P ? -1 : void 0,
                "aria-describedby": null != R ? D : void 0,
                children: [
                    (0, a.jsx)(nw.A, { project: A, size: "card", className: d2.VJ }),
                    (0, a.jsxs)("div", {
                        className: d2.MM,
                        children: [
                            (0, a.jsxs)("div", {
                                className: d2.Ub,
                                children: [
                                    null != R ? (0, a.jsx)(b.m, { text: R.label, ariaHidden: !0, children: $ }) : $,
                                    null == R || P ? null : (0, a.jsx)(nC, { creator: R, className: d2.rb }),
                                    P ? null : (0, a.jsx)(nS.n, { projectId: A.id, className: d2.fs }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: d2.h3,
                                children: [
                                    (0, a.jsx)(v.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: d2.Wb,
                                        children: P ? ei.intl.string(ea.default.Yh5pAc) : T,
                                    }),
                                    null == M || P
                                        ? null
                                        : (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                  (0, a.jsx)("span", {
                                                      className: d2.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, a.jsx)(v.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: d2.zM,
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
                className: d2.M2,
                children: P
                    ? (0, a.jsx)(k.y, { type: k.t.SPINNING_CIRCLE_SIMPLE })
                    : (0, a.jsxs)("div", {
                          className: d2.Pl,
                          children: [(0, a.jsx)(nk, { ...O, trigger: "iconButton" }), I.importInput],
                      }),
            }),
        ],
    });
}
function d9(e) {
    var t, l;
    let r,
        { project: s, projectsLoaded: u, onBack: c, guildId: m } = e,
        [h, g] = i.useState(!0),
        [p, j] = i.useState(!1),
        y = eH(),
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
        { data: B, isLoading: V } = (0, $.YY)(s?.preview_application_id ?? void 0),
        K = null != _ && I !== _,
        W = D?.preview_ready === !0,
        Y = D?.has_activity === !0,
        J = (0, d.bG)([ek.Ay], () => (null == _ ? void 0 : ek.Ay.getPublishStatus(_)?.previewAppChannels), [_]),
        {
            availability: Z,
            activeMode: Q,
            setMode: et,
            frameSurface: en,
            frameSurfaceOptions: el,
            setFrameSurface: er,
            appChannel: eu,
            setAppChannel: ed,
            frameLaunchParams: ef,
            widgetApplicationId: em,
        } = (function (e) {
            var t, n, l;
            let {
                    applicationId: r,
                    previewApplicationId: a,
                    declaredActivity: s,
                    previewSupportedSurfaces: o,
                    installScope: u,
                    ownerAuthorizationRevoked: c,
                    mainCardOnly: f = !1,
                    supportsOverlay: m = !1,
                    previewAppChannels: h = tT,
                } = e,
                [g, p] = i.useState(null),
                [x, v] = i.useState(null),
                [j, b] = i.useState(null),
                [y, k] = i.useState(r);
            y !== r && (k(r), p(null), v(null), b(null));
            let w = null != a && a === r ? a : null,
                A = (0, d.bG)([tI.default], () => tI.default.getId()),
                { applicationWidgetConfig: N } = (0, tC.A)(A, w ?? void 0),
                C = N?.surfaces,
                S = (0, tj.yZ)({
                    widgetTop: C?.[tN.m.WIDGET_TOP] != null,
                    widgetBottom: C?.[tN.m.WIDGET_BOTTOM] != null,
                    miniProfile: C?.[tN.m.MINI_PROFILE] != null,
                }),
                E = null != w && (f ? S.hasMainCard : S.hasAny),
                { data: I } = (0, $.YY)(a ?? void 0),
                M = null != a && I?.bot?.id != null,
                { data: _, isLoading: T } = (0, $.YY)(r ?? void 0),
                P = s || (0, tE.X)(_),
                R = null != r && T && null == _,
                L = (0, tj.P5)(o, {
                    legacy: { hasFrame: P, hasProfileWidget: E, hasBotDm: M },
                    widgetResolvable: null != w,
                    botDmResolvable: M,
                }),
                D = (0, tj.Xm)({ installScope: u, ...L, hasOverlay: m, ownerAuthorizationRevoked: c }),
                O = i.useMemo(() => (0, tM.hR)(o), [o]),
                F = (0, tM.PH)(x, O),
                z =
                    ((t = j),
                    (n = F),
                    (l = h),
                    n !== ty.U.APP_CHANNEL || l.length < 2 ? null : null != t && l.includes(t) ? t : l[0]),
                q = i.useMemo(() => (null == z ? void 0 : { customId: z }), [z]);
            return (
                i.useEffect(() => {
                    if (null != r)
                        for (let e of (0, tb.Mm)(r)) {
                            let t = e.surface.type !== (0, tM.BR)(F),
                                n = (((0, t_.x1)(e) ? e.data.launch.customId : e.launch?.customId) ?? null) !== z;
                            (t || n) && (0, tS.r)(e.id);
                        }
                }, [r, F, z]),
                {
                    availability: D,
                    isResolving: R,
                    activeMode: R ? null : (0, tj.Qs)(g, D),
                    setMode: p,
                    frameSurface: F,
                    frameSurfaceOptions: O,
                    setFrameSurface: v,
                    appChannel: z,
                    setAppChannel: b,
                    frameLaunchParams: q,
                    widgetApplicationId: w,
                }
            );
        })({
            applicationId: s?.preview_application_id ?? null,
            previewApplicationId: s?.preview_application_id ?? null,
            declaredActivity: Y,
            previewSupportedSurfaces: s?.preview_supported_surfaces,
            installScope: s?.install_scope ?? null,
            ownerAuthorizationRevoked: D?.owner_authorization_revoked === !0,
            supportsOverlay: s?.preview_supported_surfaces?.includes(X.q7.OVERLAY) === !0,
            previewAppChannels: J,
        }),
        eh =
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
                : tp);
    ((0, tv.x)(_, (e) => {
        Z.modes.includes(e) && et(e);
    }),
        eU(_, () => {
            (g(!0), j(!0));
        }));
    let ev = Z.modes.includes("frame"),
        ej = i.useMemo(
            () =>
                (function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    return e.flatMap((e) =>
                        "frame" === e
                            ? t.flatMap((t) =>
                                  t === ty.U.APP_CHANNEL && n.length > 1
                                      ? n.map((n) => ({ mode: e, surface: t, appChannel: n }))
                                      : [{ mode: e, surface: t }],
                              )
                            : [{ mode: e }],
                    );
                })(Z.modes, el, J),
            [Z.modes, el, J],
        ),
        eb = i.useCallback(
            (e) => {
                ("frame" === e.mode && (er(e.surface), null != e.appChannel && ed?.(e.appChannel)), et(e.mode));
            },
            [ed, er, et],
        ),
        ew = (0, tj.Qg)({
            installScope: s?.install_scope ?? null,
            previewReady: W,
            integrationInstalled: D?.integration_installed ?? null,
            botPermissionsChanged: D?.bot_permissions_changed === !0,
        }),
        eA = h && !p,
        eN = ei.intl.string(eA ? ea.default.JD6Oit : ea.default.xjJAQm),
        eC = i.useCallback(() => {
            if (p) {
                (j(!1), g(!0));
                return;
            }
            g((e) => !e);
        }, [p]),
        eS = i.useCallback(() => g(!1), []),
        { active: eE } = e9(_);
    i.useEffect(() => {
        null != _ && eE && !ev && e4(_);
    }, [_, eE, ev]);
    let eI = i.useRef(null),
        eM = (0, tx.Zv)(_),
        e_ = ei.intl.string(eM ? ea.default.Sme0T0 : eE ? ea.default.vn5Rzu : ea.default["cl/Jyl"]),
        eT = i.useCallback(() => {
            if (null != _) {
                let e;
                if (eE) return void e4(_);
                (j(!1), g(!0), (e = e3(_)).active || e7(_, { ...e, active: !0 }));
            }
        }, [_, eE]),
        eP = i.useCallback(() => {
            j((e) => !e && (g(!0), !0));
        }, []),
        eR = i.useCallback(() => j(!1), []),
        eL = i.useCallback(
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
                                                title: (0, tn.T4)(e.subject).short,
                                            }),
                                            variant: "success",
                                        }),
                                    null != t)
                                ) {
                                    let e = await (0, tl.c)(l, t);
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
        eD = (0, d.bG)([tg.A], () => tg.A.isBuilderPreviewMobile()),
        e$ = ei.intl.string(eD ? ea.default.tKGF0Q : ea.default.peqEOY),
        eO = i.useCallback(() => (0, ey.GG)(!eD), [eD]),
        eF = (0, d.bG)([tg.A], () => tg.A.isBuilderPreviewLandscape()),
        ez = ei.intl.string(eF ? ea.default.tunI2l : ea.default.DoNdjA),
        eq = i.useCallback(() => (0, ey.Lw)(!eF), [eF]),
        eG = (0, tb.jS)(s),
        eB = i.useMemo(() => (0, tb.Op)(eG, en), [eG, en]),
        eV = (0, q.A)(s?.preview_application_id ?? null, eB),
        eK = (0, t_.x1)(eV) && eV.data.proxyTicketRefreshing,
        eW = i.useCallback(() => {
            null == eV || eK || z.A.refreshProxyTicket(eV.id);
        }, [eV, eK]),
        eX = i.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = eV?.id), (0, ee.Bn)(e), (0, tS.r)(t)), c());
        }, [s, eV?.id, c]),
        eY = i.useCallback(() => {
            null != s && (g(!0), (0, ee.dv)(s.id, ei.intl.string(ea.default.oU20rd)));
        }, [s]),
        eJ = ec(
            i.useCallback(
                (e) => {
                    if (null == s) return;
                    let t = s.id,
                        n = eo(e);
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
        eZ = i.useCallback(() => {
            null != s && (0, nW.A)(s, m);
        }, [s, m]),
        eQ = i.useCallback(async () => {
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
            eQ(),
            () => {
                (L.current?.abort(), (L.current = null));
            }
        ),
        [eQ],
    );
    let e0 = (0, nF.a)(s ?? null, D ?? null, m),
        e1 = ((l = s?.application_id ?? null), (0, d.bG)([nz.Ay], () => (null == l ? null : (0, nE.i8)(m, l)), [m, l])),
        e2 = i.useMemo(() => (null == e1 ? null : () => (0, U.pX)(eg.BVt.CHANNEL(m, e1))), [m, e1]),
        e6 = i.useCallback(async () => {
            null != s && (await (0, nF.$)(s, e0));
        }, [e0, s]),
        e5 = i.useCallback(async () => {
            try {
                await e6();
            } catch {}
            await eQ();
        }, [eQ, e6]),
        e8 = i.useMemo(() => {
            let e = s?.preview_application_id;
            return null == e || V || K
                ? null
                : {
                      ...(0, tW.i)({ applicationId: e, application: B ?? null, guildId: e0 }),
                      onClose: () => {
                          e5();
                      },
                  };
        }, [K, e5, e0, V, B, s?.preview_application_id]),
        tt = (0, tj.JR)(Q, ew)
            ? { type: "permissions", authorizeProps: e8 }
            : K && null == D
              ? { type: "checking" }
              : void 0,
        tr = (0, d.bG)([ek.Ay], () => null != _ && ek.Ay.isProjectDeleting(_), [_]);
    i.useEffect(() => {
        ((null == s && u) || tr) && (0, U.bG)(eg.BVt.CHANNEL(m, ep.VV.CONJURE));
    }, [m, s, u, tr]);
    let ta = i.useMemo(() => ({ guildId: m, platform: d5, busy: K || V }), [m, K, V]),
        ti = (0, nu.Ay)(_, ta),
        ts = ti?.intent === "open" && "channel" === ti.destination ? ti.appChannelId : null,
        to = (0, d.bG)([H.A], () => (null == ts ? null : H.A.getChannel(ts)), [ts]),
        tu = (0, O.Ay)(to),
        tc = (0, F.gU)(to),
        td =
            null != tu && null != tc
                ? ei.intl.format(ea.default.gR7PUV, {
                      channel: tu,
                      channelIconHook: (e, t) =>
                          (0, a.jsx)(tc, { size: "xs", color: "currentColor", className: d2.Y2 }, t),
                  })
                : ti?.label,
        tf = ti?.upToDate === !0 ? ei.intl.string(ea.default.X0kGp2) : null,
        tm =
            null == ti
                ? null
                : (0, a.jsx)("div", {
                      className: d2.As,
                      children: (0, a.jsx)(b.m, {
                          text: tf,
                          asContainer: !0,
                          children: (0, a.jsx)(w.$, {
                              size: "sm",
                              variant: ti.upToDate ? "secondary" : "primary",
                              loading: ti.publishing,
                              disabled: ti.disabled,
                              onClick: () => ti.run("header"),
                              text: td,
                          }),
                      }),
                  }),
        th = null == s ? void 0 : () => (0, nc.A)(s.id, { guildId: m, isPreview: !0, publishOptions: ta }),
        tk = (0, a.jsx)(dJ, {
            title: s?.name ?? ei.intl.string(ea.default.G1WwgK),
            breadcrumb: { title: ei.intl.string(ea.default.uk6jhJ), onClick: c },
            project: s,
            onOpenProjectSettings: th,
            actions:
                null == s
                    ? null
                    : (0, a.jsxs)("div", {
                          className: d2.FO,
                          children: [
                              (0, a.jsx)(tK, {
                                  targets: ej,
                                  target: (function (e, t) {
                                      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                                      return null == e
                                          ? null
                                          : "frame" !== e
                                            ? { mode: e }
                                            : null == n
                                              ? { mode: e, surface: t }
                                              : { mode: e, surface: t, appChannel: n };
                                  })(Q, en, eu),
                                  onChange: eb,
                              }),
                              ev
                                  ? (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            "overlay" === Q
                                                ? null
                                                : (0, a.jsx)(G.A.Icon, {
                                                      icon: eD ? d4 : d7,
                                                      tooltip: e$,
                                                      "aria-label": e$,
                                                      selected: eD,
                                                      onClick: eO,
                                                  }),
                                            eD && "overlay" !== Q
                                                ? (0, a.jsx)(G.A.Icon, {
                                                      icon: d6,
                                                      tooltip: ez,
                                                      "aria-label": ez,
                                                      selected: eF,
                                                      onClick: eq,
                                                  })
                                                : null,
                                            (0, a.jsx)(G.A.Icon, {
                                                ref: eI,
                                                icon: A.x,
                                                iconClassName: d2.D8,
                                                tooltip: e_,
                                                "aria-label": e_,
                                                selected: eE,
                                                disabled: eM,
                                                onClick: eT,
                                            }),
                                        ],
                                    })
                                  : null,
                              "frame" === Q ? (0, a.jsx)(tU, { frame: eV, controlProjectId: s.id }) : null,
                              (0, a.jsx)("div", { className: d2.YJ }),
                              y
                                  ? (0, a.jsx)(G.A.Icon, {
                                        icon: N.BugIcon,
                                        tooltip: ei.intl.string(ea.default.Mt5k9d),
                                        "aria-label": ei.intl.string(ea.default.Mt5k9d),
                                        selected: p,
                                        onClick: eP,
                                    })
                                  : null,
                              (0, a.jsx)(G.A.Icon, {
                                  icon: C.SettingsIcon,
                                  tooltip: ei.intl.string(ea.default.I2XSKe),
                                  "aria-label": ei.intl.string(ea.default.I2XSKe),
                                  onClick: th,
                              }),
                              (0, a.jsx)(nk, {
                                  projectId: s.id,
                                  projectName: s.name,
                                  guildId: m,
                                  projectGuildId: s.guild_id,
                                  isOwner: (0, ek.PV)(s),
                                  canRemix: (0, ek.H_)(s),
                                  onRefresh: (0, t_.x1)(eV) ? eW : void 0,
                                  isRefreshing: eK,
                                  onClose: eX,
                                  onExport: eY,
                                  onImport: eJ.open,
                                  onRemix: eZ,
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
                                              onRestoreVersion: (e, t) => eL(e, t, !0),
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
                                      Z.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== Z.profileState
                                          ? em
                                          : null,
                                  previewProjectId: s.id,
                              }),
                              eA
                                  ? null
                                  : (0, a.jsx)(G.A.Icon, { icon: d3, tooltip: eN, "aria-label": eN, onClick: eC }),
                          ],
                      }),
        });
    return (0, a.jsxs)("div", {
        className: o()(d2.nj, d1.T),
        children: [
            eJ.input,
            (0, a.jsx)("main", {
                className: d2.JX,
                children:
                    null == s
                        ? (0, a.jsxs)("div", {
                              className: d2.j5,
                              children: [
                                  tk,
                                  (0, a.jsxs)("div", {
                                      className: d2.sD,
                                      children: [
                                          (0, a.jsx)(S.D, {
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
                        : (0, a.jsx)(nu.bI.Provider, {
                              value: ta,
                              children: (0, a.jsx)(
                                  dX,
                                  {
                                      projectId: s.id,
                                      designFeedbackToggleRef: eI,
                                      applicationId: s.preview_application_id,
                                      previewApplicationId: s.preview_application_id,
                                      surface: eB,
                                      frameLaunchParams: ef,
                                      header: tk,
                                      chatOpen: h,
                                      onCloseChat: eS,
                                      chatHeaderAction: tm,
                                      debugOpen: y && p,
                                      onCloseDebug: eR,
                                      onRestoreVersion: eL,
                                      onImportProject: (0, ek.PV)(s) ? eJ.open : void 0,
                                      restoreState: k,
                                      previewReady: W,
                                      previewGate: tt,
                                      availability: Z,
                                      activeMode: Q,
                                      widgetApplicationId: em,
                                      overlayWidgetSize: eh,
                                      onOpenPublishedApp: e2,
                                  },
                                  s.id,
                              ),
                          }),
            }),
        ],
    });
}
function fe(e) {
    let {
            projects: t,
            idea: l,
            guildId: r,
            submitting: s,
            createError: u,
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
            onSubmitTemplate: C,
            onCancelTemplate: S,
            onSkipTemplate: L,
            onImportNewProject: D,
            importing: $,
        } = e,
        [O, F] = i.useState(() => ({ guildId: r, filter: nT(r) })),
        z = (O.guildId === r ? O.filter : nT(r)) ?? r,
        q = i.useCallback(
            (e) => {
                (n_.set(r, e), F({ guildId: r, filter: e }));
            },
            [r],
        ),
        U = (0, d.yK)(
            [K.A],
            () =>
                (function (e, t) {
                    let n = new Set([t]);
                    for (let t of e)
                        (null != t.guild_id && n.add(t.guild_id),
                            null != t.preview_guild_id && n.add(t.preview_guild_id));
                    let l = [];
                    for (let e of n) {
                        let t = K.A.getGuild(e);
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
                    value: nI,
                    leading: ed.UserIcon,
                    label: ei.intl.string(ea.default.kCSgmG),
                },
                {
                    id: "conjure-filter-no-server",
                    value: nM,
                    leading: ef.R,
                    label: ei.intl.string(ea.default["3QFps8"]),
                },
                ...U.map((e) => ({
                    id: `conjure-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, a.jsx)(eF.Ay, { guild: e, size: eF.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [U],
        ),
        H = (0, d.yK)(
            [ek.Ay, K.A],
            () => {
                let e = nP(z);
                if (null != e) return ek.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(K.A.getGuilds()))
                    ek.Ay.hasFetchedGuildProjects(e.id) && t.push(...ek.Ay.getSharedProjects(e.id));
                return t;
            },
            [z],
        );
    i.useEffect(() => {
        let e = nP(z);
        null == e || ek.Ay.hasFetchedGuildProjects(e) || (0, ey.hF)(e);
    }, [z]);
    let V = i.useMemo(
            () =>
                H.filter((e) => nR(e, z)).sort((e, t) =>
                    null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                ),
            [H, z],
        ),
        W = i.useMemo(
            () => [
                {
                    label: ei.intl.string(ea.default.NyVn6T),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: ez,
                            label: ei.intl.string(ea.default.UPLaGM),
                            leading: ed.UserIcon,
                        },
                        ...h.map((e) => ({
                            id: `conjure-target-${e.id}`,
                            value: e.id,
                            label: e.name,
                            leading: (0, a.jsx)(eF.Ay, { guild: e, size: eF.Ay.Sizes.MINI, active: !0 }),
                        })),
                    ],
                },
            ],
            [h],
        ),
        Y = i.useMemo(
            () =>
                t
                    .filter((e) => nR(e, z))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, z],
        ),
        J = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, nE.Ot)(e, r)
                    ? j(e.id)
                    : (0, x.P0)({ text: ei.intl.string(ea.default["XUl/cs"]) });
            },
            [r, j],
        ),
        Z = ei.intl.string(ea.default.ab1sMf),
        Q = [
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
                        onSubmit: (t, n, l) => C(e, t, n, l),
                        onCancel: S,
                        onSkip: L,
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
                A(e);
            },
            [h, r, S, A, L, N, C],
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
        eo = nP(z) ?? r,
        eu = (0, d.bG)([ek.Ay], () => ek.Ay.getGuildProjectsFetchState(eo), [eo]),
        ec = (0, d.bG)([ek.Ay], () => ek.Ay.getGuildProjectsFetchState(r), [r]),
        [em, eg] = i.useState(n$),
        ep = i.useMemo(() => nL.w.get(nO(r)) ?? !1, [r]),
        ex = "success" === ec,
        ev = (0, d.yK)([ek.Ay], () => ek.Ay.getSharedProjects(r), [r]).length > 0 || t.some((e) => nR(e, r)),
        eb = em ?? (!!ev || "error" === ec || (!ex && ep));
    i.useEffect(() => {
        ex && nL.w.set(nO(r), ev);
    }, [ex, ev, r]);
    let eA = i.useCallback((e) => {
            (nL.w.set(nD, e), eg(e));
        }, []),
        eN = i.useCallback(() => eA(!eb), [eA, eb]),
        eI = i.useCallback(() => eA(!1), [eA]),
        eM = ei.intl.string(ea.default.kar7jh),
        e_ = eb ? eM : ei.intl.string(ea.default.WSc5Y2);
    return (0, a.jsx)("div", {
        className: o()(d2.nj, d2.a0, d1.T),
        children: (0, a.jsxs)("div", {
            className: d2.Yo,
            children: [
                (0, a.jsxs)("main", {
                    className: d2.ps,
                    children: [
                        (0, a.jsx)(dJ, {
                            title: ei.intl.string(ea.default.uk6jhJ),
                            actions: (0, a.jsx)(G.A.Icon, {
                                icon: E.Z,
                                tooltip: e_,
                                "aria-label": e_,
                                selected: eb,
                                onClick: eN,
                            }),
                        }),
                        (0, a.jsx)(I.Ip, {
                            className: d2.Yy,
                            children: (0, a.jsx)("div", {
                                className: d2.Mo,
                                children: (0, a.jsxs)("section", {
                                    className: o()(d2.Qs, d2.Ix),
                                    children: [
                                        (0, a.jsx)(d0, {}),
                                        (0, a.jsx)(eO, {}),
                                        (0, a.jsxs)("section", {
                                            className: d2.WI,
                                            "aria-label": en,
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: d2.G9,
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
                                                    listClassName: d2.Aw,
                                                    radius: eC,
                                                    children: ee.map((e) =>
                                                        (0, a.jsx)(
                                                            "li",
                                                            {
                                                                className: d2.EA,
                                                                children: (0, a.jsxs)(ew, {
                                                                    disabled: s,
                                                                    ariaLabel: ei.intl.formatToPlainString(
                                                                        ea.default.jGyR6p,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: o()(d2.nx, d2.rz),
                                                                    onClick: () => et(e),
                                                                    children: [
                                                                        (0, a.jsx)(v.E, {
                                                                            className: d2.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, a.jsx)(v.E, {
                                                                            className: d2.BK,
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
                                            className: d2.WI,
                                            "aria-label": er,
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: d2.G9,
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
                                                    listClassName: d2.Aw,
                                                    radius: eS,
                                                    children: Q.map((e) =>
                                                        (0, a.jsx)(
                                                            "li",
                                                            {
                                                                className: d2.EA,
                                                                children: (0, a.jsx)(ew, {
                                                                    disabled: s,
                                                                    className: d2.nx,
                                                                    onClick: () => y(e),
                                                                    children: (0, a.jsx)(v.E, {
                                                                        variant: "text-md/semibold",
                                                                        color: "text-strong",
                                                                        className: d2.un,
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
                            className: d2.Yl,
                            children: (0, a.jsxs)("div", {
                                className: o()(d2.Qs, d2.DA),
                                children: [
                                    (0, a.jsx)(M.f, {
                                        label: Z,
                                        hideLabel: !0,
                                        rows: 3,
                                        value: l,
                                        placeholder: Z,
                                        error: u,
                                        onChange: b,
                                        onKeyDown: es,
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: d2.VP,
                                        children: [
                                            (0, a.jsx)("div", {
                                                className: d2.gH,
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
                                            (0, a.jsx)(th, {
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
                    className: d2.pA,
                    hidden: !eb,
                    "aria-label": ei.intl.string(ea.default.dWgSAa),
                    children: [
                        (0, a.jsxs)("div", {
                            className: d2.IR,
                            children: [
                                (0, a.jsx)(v.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: d2.RM,
                                    children: ei.intl.string(ea.default.dWgSAa),
                                }),
                                (0, a.jsxs)("div", {
                                    className: d2.Ss,
                                    children: [
                                        (0, a.jsx)(eh, { importing: $, onImport: D }),
                                        (0, a.jsx)(G.A.Icon, { icon: T.P, tooltip: eM, "aria-label": eM, onClick: eI }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsxs)(I.Ip, {
                            className: d2.xe,
                            children: [
                                (0, a.jsx)("div", {
                                    className: d2.Vw,
                                    children: (0, a.jsx)(_.l, {
                                        selectionMode: "single",
                                        label: ei.intl.string(ea.default.U6TqU9),
                                        hideLabel: !0,
                                        options: B,
                                        value: z,
                                        onSelectionChange: q,
                                    }),
                                }),
                                (0, a.jsx)(v.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: d2.wE,
                                    children: ei.intl.string(ea.default.JQpNkh),
                                }),
                                ("unattempted" === eu || "loading" === eu) && 0 === Y.length
                                    ? (0, a.jsx)("div", { className: d2.E8, children: (0, a.jsx)(k.y, {}) })
                                    : "error" === eu && 0 === Y.length
                                      ? (0, a.jsxs)("div", {
                                            className: d2.E8,
                                            children: [
                                                (0, a.jsx)(v.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: d2.JS,
                                                    children: ei.intl.string(ea.default.DJAPMO),
                                                }),
                                                (0, a.jsx)(w.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: ei.intl.string(ea.default["WFJ/vb"]),
                                                    onClick: () => (0, ey.hF)(eo),
                                                }),
                                            ],
                                        })
                                      : 0 === Y.length
                                        ? (0, a.jsx)("div", {
                                              className: d2.D1,
                                              children: (0, a.jsxs)("div", {
                                                  className: d2.ST,
                                                  children: [
                                                      (0, a.jsx)(P.D, { size: "lg", color: R.A.colors.TEXT_SUBTLE }),
                                                      (0, a.jsx)(v.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: d2.sI,
                                                          children: ei.intl.string(ea.default["9/5sLV"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, a.jsx)("div", {
                                              className: d2.Dq,
                                              children: Y.map((e) =>
                                                  (0, a.jsx)(
                                                      d8,
                                                      {
                                                          project: e,
                                                          guildId: r,
                                                          onSelect: () => J(e),
                                                          onRemix: () => (0, nW.A)(e, r),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          }),
                                V.length > 0
                                    ? (0, a.jsxs)("div", {
                                          className: d2.qx,
                                          children: [
                                              (0, a.jsxs)("div", {
                                                  className: d2.uc,
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
                                                  className: d2.Dq,
                                                  children: V.map((e) =>
                                                      (0, a.jsx)(
                                                          d8,
                                                          {
                                                              project: e,
                                                              guildId: r,
                                                              onSelect: () => J(e),
                                                              onRemix: () => (0, nW.A)(e, r),
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
function ft(e) {
    let t,
        { guildId: n, projectId: l } = e,
        r = (0, d.yK)([ek.Ay], () => ek.Ay.getOwnedProjects()),
        s = (0, d.yK)([V.Ay], () => V.Ay.getSelfMember(n)?.roles ?? [], [n]),
        o = (0, d.bG)(
            [K.A, W.A],
            () => {
                let e = K.A.getGuild(n);
                return null != e && W.A.can(eg.xBc.MANAGE_GUILD, e);
            },
            [n],
        ),
        [u, c] = i.useState(""),
        f = l ?? null,
        [m, h] = i.useState(!1),
        [g, p] = i.useState(null),
        v = (0, t7.z9)("VibegrationsScreen"),
        [j, b] = i.useState(null),
        y = (0, D.o)().get(tY.f_) === ez;
    i.useEffect(() => {
        b(null);
    }, [n, y]);
    let k = i.useMemo(() => (!y && v.some((e) => e.id === n) ? n : ez), [v, n, y]),
        w = j ?? k,
        A = w === ez ? "user" : "guild",
        N = w === ez ? n : w,
        [C, S] = i.useState(null);
    (i.useEffect(() => {
        (0, ey.hF)(n);
    }, [n, s, o]),
        i.useEffect(() => {
            (0, ey.dm)(n, f);
        }, [n, f]));
    let E = i.useCallback(
            async (e, t, n) => {
                let l = await (0, ey.gA)({ guild_id: t, install_scope: n });
                ((0, ee.Hc)(l),
                    (0, ee.r2)(l, C ?? X.A4),
                    e(l),
                    (0, U.pX)(eg.BVt.CHANNEL(t, ep.VV.CONJURE, l)),
                    c(""),
                    S(null));
            },
            [C],
        ),
        I = i.useCallback(
            async (e) => {
                let t = (e ?? u).trim(),
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
                return ((0, ee.Hc)(n), (0, ee.r2)(n, C ?? X.A4), (0, ee.dv)(n, (0, nX.Wl)(e)), n);
            },
            [C],
        ),
        T = i.useCallback(async (e, t, n, l) => {
            if (ek.Ay.getProject(t)?.guild_id !== n) {
                let e = await (0, ey.M7)(t, { guild_id: n, preview_guild_id: n });
                if (!e.ok) throw new ev.DS((0, ev.hj)(e), e.status);
            }
            ((0, ee.dv)(t, l, void 0, { templateId: e.id }), (0, U.pX)(eg.BVt.CHANNEL(n, ep.VV.CONJURE, t)), S(null));
        }, []),
        P = i.useCallback((e) => {
            (0, ey.xx)(e).catch(() => void 0);
        }, []),
        R = i.useCallback(
            (e) => {
                let t = ek.Ay.getProject(e)?.guild_id ?? n;
                ((0, U.pX)(eg.BVt.CHANNEL(t, ep.VV.CONJURE, e)), S(null));
            },
            [n],
        ),
        [L, $] = i.useState(!1),
        O = i.useCallback(
            async (e, t) => {
                let l = eo(e);
                if (null != l) return void (0, x.P0)({ text: l, variant: "critical" });
                $(!0);
                let r = null;
                try {
                    ((r = await (0, ey.gA)({ guild_id: n, install_scope: t })),
                        (0, ee.Hc)(r),
                        (0, ee.r2)(r, C ?? X.A4),
                        await es(r, e, ei.intl.string(ea.default["LUc7/5"])),
                        (0, U.pX)(eg.BVt.CHANNEL(n, ep.VV.CONJURE, r)),
                        S(null));
                } catch {
                    (null != r && (await (0, ey.xx)(r).catch(() => void 0)),
                        (0, x.P0)({ text: ei.intl.string(ea.default["Q+l4Hv"]), variant: "critical" }));
                } finally {
                    $(!1);
                }
            },
            [n, C],
        ),
        F = i.useCallback(
            (e) => {
                (0, U.pX)(eg.BVt.CHANNEL(n, ep.VV.CONJURE, e));
            },
            [n],
        ),
        z = i.useCallback(() => {
            (0, U.pX)(eg.BVt.CHANNEL(n, ep.VV.CONJURE));
        }, [n]),
        q = i.useCallback((e) => {
            (c(e), p(null));
        }, []),
        G = (0, d.bG)(
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
        ? (0, a.jsx)(d9, { project: G, projectsLoaded: B, onBack: z, guildId: n }, f)
        : (0, a.jsx)(fe, {
              projects: r,
              modelSettings: C,
              onModelSettingsChange: S,
              idea: u,
              guildId: n,
              submitting: m,
              createError: g,
              createDisabled: "idea" === (t = eb({ idea: u, installScope: A, submitting: m })) || "submitting" === t,
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
              eligibleGuilds: v,
          });
}
