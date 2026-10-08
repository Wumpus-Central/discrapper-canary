(l.r(t), l.d(t, { default: () => d7 }), l(321073));
var n,
    a,
    r = l(477900),
    i = l(582128),
    s = l(503698),
    o = l.n(s),
    u = l(536637),
    c = l.n(u),
    d = l(478104),
    f = l(17928),
    m = l(314116),
    h = l(534890),
    g = l(646270),
    p = l(31300),
    x = l(831453),
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
    z = l(442433),
    F = l(458518),
    O = l(627363),
    U = l(47167),
    G = l(713654),
    q = l(625180),
    B = l(672929),
    K = l(775946),
    H = l(742589),
    V = l(976860),
    W = l(402860),
    J = l(885386),
    X = l(734057),
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
var ec = l(261425),
    ed = l(660183);
async function ef(e, t, l) {
    (0, er.Hc)(e);
    let n = await (0, er.vX)(e, t);
    (0, er.dv)(e, l, [n]);
}
function em(e) {
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
var ep = l(950305),
    ex = l(664121);
let ev = [
    { value: "user", icon: ep.UserIcon, nameMessage: ec.default.s1TsXl },
    { value: "guild", icon: ex.R, nameMessage: ec.default.LlLIJw },
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
    ez = l(765548),
    eF = l(595528),
    eO = l(885576),
    eU = l(662429);
let eG = "heading-xxl/semibold",
    eq = !1;
function eB() {
    let e = i.useRef(null),
        [t, l] = i.useState(!0),
        n = (0, ez.A)((e) => {
            l(e.target.clientWidth >= 500);
        }),
        a = (0, e$.w)(n, [], { fireOnMount: !0 }),
        s = (0, f.bG)([eF.A], () => eF.A.isConnected());
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
    let o = (0, f.bG)([eO.A], () => eO.A.isIdle()),
        u = i.useRef(o);
    i.useEffect(() => {
        let t = u.current && !o;
        ((u.current = o), t && eq && (e.current?.stop(), e.current?.play()));
    }, [o]);
    let c = ed.intl.string(ec.default["+5XyCR"]);
    return (0, r.jsx)("div", {
        ref: a,
        className: eU.x,
        children: t
            ? (0, r.jsx)(eD.H, { children: (0, r.jsx)(eL.o, { ref: e, text: c, variant: eG, delay: null }) })
            : (0, r.jsx)(M.D, { variant: eG, children: c }),
    });
}
var eK = l(548118);
let eH = "user",
    eV = Object.freeze({ x: 0.5, y: 0.5 });
function eW(e) {
    return "" !== e.trim();
}
function eJ(e) {
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
function eX(e) {
    let { kind: t, name: l } = eJ(e);
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
function e5(e, t) {
    for (let l of (t.active || 0 !== t.annotations.length ? e2.set(e, t) : e2.delete(e), [...e3]))
        try {
            l();
        } catch (e) {
            console.error("[vibegrations] design feedback subscriber threw", e);
        }
}
function e7(e) {
    e2.has(e) && e5(e, e1);
}
function e6(e, t) {
    let l = e4(e);
    l.active && e5(e, { ...l, context: t });
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
    ta = l(744627),
    tr = l(900797),
    ti = l(320448),
    ts = l(783977),
    to = l(344587),
    tu = l(534554),
    tc = l(837984),
    td = l(359589),
    tf = l(254575);
function tm(e) {
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
        [f, m] = i.useState(!1),
        h = tm(f),
        g = ee.PY.indexOf(t.tier),
        p = f ? tr.t : ti._,
        x = ee.PY.map(tu.D0),
        v = (0, tu.Tc)(t.tier),
        { text: j, phase: b } = (0, to.Q)(v);
    return (0, r.jsx)("div", {
        className: tf.qd,
        "data-placement": u ?? void 0,
        children: (0, r.jsxs)("div", {
            className: o()(tf.t$, { [tf.Zr]: c && d, [tf.GF]: !c }),
            role: "dialog",
            "aria-label": ed.intl.string(ec.default["3E7Yc0"]),
            children: [
                h.mounted
                    ? (0, r.jsx)("div", {
                          className: o()(tf.Nr, tf.uO, { [tf.Zr]: f && h.entered, [tf.GF]: !f }),
                          children: (0, r.jsx)(td.bR, { settings: t, tiers: l, choices: n, disabled: a, onChange: s }),
                      })
                    : null,
                (0, r.jsxs)("div", {
                    className: `${tf.Nr} ${tf.rF}`,
                    children: [
                        (0, r.jsxs)("div", {
                            className: tf.wx,
                            children: [
                                (0, r.jsxs)("button", {
                                    type: "button",
                                    className: tf.y6,
                                    "aria-expanded": f,
                                    "aria-label": ed.intl.string(ec.default.eGqPbV),
                                    onClick: () => m((e) => !e),
                                    children: [
                                        (0, r.jsx)(y.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: ed.intl.string(ec.default.aBPQxX),
                                        }),
                                        (0, r.jsx)(p, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: tf.vg,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(y.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: o()(tf.Z, { [tf.xQ]: "exit" === b, [tf.lm]: "enter" === b }),
                                    children: j,
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: tf.hs,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: tf.Nb,
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
                                    stops: x,
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
        [d, f] = (0, td.FT)(t, s),
        [m, h] = i.useState(!1),
        { mounted: g, entered: p } = tm(m);
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
                onChange: f,
                placement: t,
                open: m,
                entered: p,
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
                    className: o ?? tf.hZ,
                    "aria-label": ed.intl.string(ec.default["k2JN/p"]),
                    ...e,
                    onClick: () => h((e) => !e),
                    "aria-expanded": m,
                    children: u ?? (0, r.jsx)(ts.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
var tp = l(111534);
let tx = { width: 320, height: 240 };
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
function tz(e) {
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
function tF(e) {
    return (0, tL.a3)(document, e);
}
function tO(e) {
    return i.useSyncExternalStore(tF, () => tz(e));
}
var tU = l(165610);
function tG(e) {
    let { frame: t, controlProjectId: l } = e,
        n = tO(t?.id ?? null),
        a = (0, tv.Zv)(l),
        i = (0, f.bG)(
            [tR.A, tP.A],
            () => null != t && tR.A.getWindowOpen(eb.MLl.ACTIVITY_POPOUT) && tP.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, tU.x1)(t) || i || a) return null;
    let s = t$(t.id);
    if (null == s || !(0, tL.Ub)(s)) return null;
    let o = ed.intl.string(n ? ed.t.Z7MyNB : ed.t.OIDkcp);
    return (0, r.jsx)(H.A.Icon, {
        tooltip: o,
        icon: n ? tT.z : t_.T,
        "aria-label": o,
        role: "switch",
        "aria-checked": n,
        selected: n,
        onClick: () => {
            var e;
            let l;
            null != (l = t$((e = t.id))) && (0, tL.Ub)(l) && (tz(e) ? (0, tL.sP)(l) : (0, tL.tl)(l));
        },
    });
}
var tq = l(559106),
    tB = l(847374),
    tK = l(704745);
function tH(e) {
    let { targets: t, target: l, onChange: n } = e,
        [a, s] = i.useState(!1),
        o = null != l && t.length > 1;
    a && !o && s(!1);
    let u = i.useCallback(() => s(!1), []),
        c = i.useCallback(() => s((e) => !e), []),
        d = i.useRef(null);
    if (!o) return null;
    let f = ed.intl.string(ec.default.I2ucou);
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
                "aria-label": f,
                onClose: a,
                onSelect: a,
                children: (0, r.jsx)(en.rX, {
                    label: f,
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
                    className: tK.h,
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
                        (0, r.jsx)(tB.a, { size: "xs", color: "currentColor" }),
                    ],
                }),
            });
        },
    });
}
var tV = l(226178),
    tW = l(434279),
    tJ = l(941985),
    tX = l(287809),
    tQ = l(427262),
    tY = l(803306);
let tZ = new Set(),
    t0 = new Map();
function t1(e, t, l) {
    return null == e ? (l ?? null) : (t ?? null);
}
function t2(e) {
    if (null == e || tZ.has(e) || null != tX.default.getUser(e)) return;
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
    t5 = l(780338),
    t7 = l(663417),
    t6 = l(70688),
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
    lf = l.n(ld),
    lm = l(587895),
    lh = l(321191),
    lg = l(808728),
    lp = l(994500),
    lx = l(426035);
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
        [f, m] = i.useState(null),
        h = "delete" === a,
        g = h
            ? ((t = [{ key: "project", kind: "project", label: n.projectName }]).push(...lv(n)),
              null != n.previewAppName && t.push({ key: "preview-app", kind: "app", label: n.previewAppName }),
              t)
            : lv(n),
        p = h
            ? ed.intl.formatToPlainString(ec.default.CJBhb2, { name: n.projectName })
            : ed.intl.formatToPlainString(ec.default.x6FvsZ, { app: n.appName });
    async function x() {
        (d(!0), m(null));
        let e = h ? (0, eC.xx)(l.id) : (0, eC.YI)(l.id, { alsoRemovePreviewBot: o }),
            t = await e.catch(() => null);
        (d(!1), t?.ok !== !0)
            ? m(ed.intl.string(h ? ec.default["0XDHob"] : ec.default.PJ2Fkn))
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
        title: h ? p : lC(ec.default.x6FvsZ, n.appName),
        subtitle: h
            ? (function (e) {
                  let { appName: t, guildName: l } = e;
                  return ed.intl.formatToPlainString(ec.default["9CvVB9"], { app: t, server: l });
              })(n)
            : ed.intl.string(ec.default["8OKM1N"]),
        "aria-label": p,
        notice: null == f ? void 0 : { message: f, type: "critical" },
        actions: [
            { text: ed.intl.string(ed.t["ETE/oC"]), variant: "secondary", onClick: s.onClose },
            {
                text: ed.intl.string(h ? ec.default.aC42bN : ec.default.BGF8VT),
                variant: "critical-primary",
                loading: c,
                disabled: c,
                onClick: () => {
                    x().catch(() => {});
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
            onRefresh: p,
            isRefreshing: x = !1,
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
        _ = (0, f.bG)([er.Ay], () => (null == w ? lP : er.Ay.getDeclaredConnections(w))),
        P = i.useMemo(() => (0, lr.Xl)(_), [_]),
        R = (0, f.bG)(
            [eE.Ay, Y.A, lg.Ay, lh.A, lm.A, tX.default, lp.A],
            () => {
                let e,
                    l = null == t ? null : eE.Ay.getProject(t);
                return null == l
                    ? null
                    : null != (e = null == l.guild_id ? null : Y.A.getGuild(l.guild_id)) &&
                        (0, eE.jf)(l) &&
                        "in_server" === (0, lx.kF)(l)
                      ? {
                            projectName: l.name,
                            appName: lm.A.getApplication(l.application_id)?.name ?? l.name,
                            previewAppName:
                                null == l.preview_application_id
                                    ? null
                                    : (lm.A.getApplication(l.preview_application_id)?.name ?? `${l.name} (Preview)`),
                            guildName: e.name,
                            channelNames: (0, lx.xI)(e.id, l.application_id).map((e) => (0, U.m1)(e, tX.default, lp.A)),
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
        z = s && null != c,
        F = $ || null != u || z || null != h || null != g,
        O = la.p5 && null != n,
        G = la.p5,
        q = A ? t4.BellIcon : t5.BellSlashIcon;
    return (0, r.jsxs)(el.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": ed.intl.string(ed.t.ogxXGq),
        onClose: N,
        onSelect: N,
        children: [
            null != p || null != y
                ? (0, r.jsxs)(en.rX, {
                      children: [
                          null != p
                              ? (0, r.jsx)(en.Dr, {
                                    id: "refresh",
                                    icon: t7.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: t7.RefreshIcon },
                                    label: ed.intl.string(ec.default["p4B/7M"]),
                                    disabled: x,
                                    action: p,
                                })
                              : null,
                          null != y
                              ? (0, r.jsx)(en.Dr, {
                                    id: "close",
                                    icon: t6.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: t6.DoorExitIcon },
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
            F
                ? (0, r.jsxs)(en.rX, {
                      children: [
                          $
                              ? (0, r.jsx)(en.Dr, { id: "remix", label: ed.intl.string(ec.default.XWgAfc), action: d })
                              : null,
                          null != u
                              ? (0, r.jsx)(en.Dr, { id: "export", label: ed.intl.string(ec.default.WsEEP7), action: u })
                              : null,
                          z
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
            G
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
                                            (0, m.A)({
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
                        : (0, r.jsx)(H.A.Icon, {
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
    lz = l(104171),
    lF = l(286739);
function lO(e) {
    let { creator: t, className: l } = e;
    return (0, r.jsx)("div", {
        className: o()(lF.c, l),
        "aria-hidden": !0,
        children: (0, r.jsx)(lz.Ay, { users: [t.creator, ...t.collaborators], max: 3, size: lz.DN.SIZE_16 }),
    });
}
var lU = l(246338);
let lG = "user",
    lq = "no-server",
    lB = new Map();
function lK(e) {
    return lB.get(e) ?? null;
}
function lH(e) {
    switch (e) {
        case "all":
        case lG:
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
        case lG:
            return "user" === e.install_scope;
        case lq:
            return null == (0, tW.wu)(e);
        default:
            return e.guild_id === t || e.preview_guild_id === t;
    }
}
var lW = l(506774);
let lJ = "VibegrationsProjectsPanelOpen";
function lX() {
    return lW.w.get(lJ) ?? null;
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
    l5 = l(58736),
    l7 = l(689175),
    l6 = l(65593),
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
            ...f
        } = e,
        m = i.useId(),
        [h, g] = i.useState(!n),
        [p, x] = i.useState(n);
    p !== n && (x(n), g(!n));
    let v = i.useCallback(() => g((e) => !e), []),
        j = h ? tB.a : ti._,
        b = null != l || n;
    return (0, r.jsxs)(nr, {
        ...f,
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
                                "aria-controls": m,
                                "aria-label": h ? s : a,
                                children: (0, r.jsx)(j, { size: "xs", color: "currentColor" }),
                            })
                          : null,
                  ],
              })
            : void 0,
        headerClassName: h ? void 0 : ni.RG,
        "data-superseded": n ? "true" : void 0,
        children: [c, (0, r.jsx)("div", { id: m, className: o()(ni.rf, u), hidden: !h, children: d })],
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
function nf(e) {
    let { agents: t, active: l } = e,
        n = i.useMemo(() => (l ? t : nc), [l, t]),
        a = i.useMemo(() => new Set(n.map((e) => e.key)), [n]),
        s = n.map((e) => e.key).join("\0"),
        [o, u] = i.useState(n),
        [c, d] = i.useState(s),
        [f, m] = i.useState(!1);
    c !== s && (d(s), u([...n, ...o.filter((e) => !a.has(e.key))]), 0 === n.length && m(!1));
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
                    e = requestAnimationFrame(() => m(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [l, o.length]),
        0 === o.length)
    )
        return null;
    let g = o.slice(0, 3),
        p = o.length - g.length;
    return (0, r.jsxs)("span", {
        className: nu.X6,
        "data-shown": l && f ? "true" : void 0,
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
            p > 0
                ? (0, r.jsx)(y.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: nu.qA,
                      children: `+${p}`,
                  })
                : null,
        ],
    });
}
function nm(e) {
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
                            (0, r.jsx)(nf, { agents: c.get(e.id) ?? nc, active: "completed" !== l }),
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
        children: (0, r.jsx)(nm, { todos: t, provisional: l, agents: n, live: i }),
    });
}
var ng = l(308665),
    np = l(59678),
    nx = l(903847);
function nv(e) {
    let { line: t, placement: l, todos: n, todosLive: a = !0, provisionalTodo: s, agents: u, onJumpToActivity: c } = e,
        d = null != l,
        [f, m] = i.useState(l ?? "top"),
        [h, g] = i.useState(d),
        [p, x] = i.useState(!1),
        [v, j] = i.useState(!1),
        [b, y] = i.useState(d);
    (b !== d && (y(d), null != l ? (m(l), g(!0)) : (x(!1), j(!1))),
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
              className: nx.qd,
              "data-placement": f,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, r.jsxs)("div", {
                      className: o()(nx.vK, { [nx.ho]: p && d, [nx.ET]: !d }),
                      children: [
                          null == c
                              ? (0, r.jsx)("ol", {
                                    className: o()(nx.Rk, np.pj),
                                    "data-live": "true",
                                    children: (0, r.jsx)(nl.A, {
                                        glyph: (0, r.jsx)(ng.Ay, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, r.jsx)(k.D, {
                                    className: nx.pZ,
                                    onClick: c,
                                    "aria-label": ed.intl.string(ec.default.hEK6qu),
                                    children: (0, r.jsx)("ol", {
                                        className: o()(nx.Rk, np.pj),
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
                                        className: nx.BO,
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
                            className: o()(nx.vB, { [nx.pg]: v && S, [nx.ui]: !v }),
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
    nz = (0, nL.D)(() => ({ draftsByProject: {} }));
function nF(e, t, l) {
    return e.draftsByProject[t]?.[l] ?? nD;
}
function nO(e, t) {
    return nF(nz.getState(), e, t);
}
function nU(e, t, l) {
    let { draftsByProject: n } = nz.getState();
    nz.setState({ draftsByProject: { ...n, [e]: { ...n[e], [t]: l } } });
}
function nG(e, t, l, n) {
    let a = nO(e, t);
    return (
        !!a.some((e) => e.localId === l) &&
        (nU(
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
function nB(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && nq(e, t.ref.id));
}
function nK(e, t) {
    let { deleteFromWorker: l } = t,
        { draftsByProject: n } = nz.getState(),
        a = n[e];
    if (null == a) return;
    for (let t of Object.values(a))
        for (let n of t ?? nD) l ? nB(e, n) : null != n.previewUrl && URL.revokeObjectURL(n.previewUrl);
    let { [e]: r, ...i } = n;
    nz.setState({ draftsByProject: i });
}
function nH(e) {
    return ed.intl.formatToPlainString(ec.default.JZ59Bo, { size: (0, ee.sM)((0, ee.Ju)(e)) });
}
function nV(e, t) {
    let l = nO(e, t);
    if (0 !== l.length) {
        for (let t of l) nB(e, t);
        nU(e, t, nD);
    }
}
function nW(e, t) {
    let l = nO(e, t);
    if (0 === l.length) return [];
    for (let e of l) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (nU(e, t, nD), l.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function nJ(e, t) {
    let { clarificationAnswers: l, attachments: n = [] } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = nO(e, "chat"),
        r = a.length > 0 && a.every((e) => "ready" === e.status) ? nW(e, "chat") : [];
    (0, er.dv)(e, t, [...n, ...r], { clarificationAnswers: l });
}
function nX(e, t) {
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
    for (let e of Object.keys(nz.getState().draftsByProject)) nK(e, { deleteFromWorker: !0 });
}),
    nR.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        nK(t, { deleteFromWorker: !1 });
    }));
var nQ = l(907702);
function nY(e) {
    let { projectId: t, attachmentId: l, alt: n, onMeasured: a } = e,
        { src: s, gone: u, handleError: c } = nX(t, l),
        [d, f] = i.useState(null),
        m = null != s && d === s;
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
              className: o()(nQ.Gt, { [nQ.iP]: !m }),
              children:
                  null != s
                      ? (0, r.jsx)("img", {
                            src: s,
                            alt: n,
                            className: nQ.Sl,
                            onLoad: (e) => {
                                f(s);
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
            onPick: f,
            onView: m,
            onArrow: h,
            onMeasured: g,
            onRemove: p,
        } = e,
        x = ed.intl.formatToPlainString(ec.default.JGjZMs, { answer: a.label });
    return (0, r.jsxs)("div", {
        className: o()(nQ.Vs, { [nQ.Q9]: s, [nQ.RX]: u }),
        "data-conjure-clarification-option": a.id,
        children: [
            (0, r.jsxs)(k.D, {
                className: nQ.Up,
                "data-conjure-image-option-pick": !0,
                onClick: u ? void 0 : () => f(a),
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
            null != p
                ? (0, r.jsx)("span", {
                      className: nQ.B4,
                      children: (0, r.jsx)(w.m, {
                          text: ed.intl.string(ec.default.HQEXJM),
                          children: (0, r.jsx)(le.K, {
                              icon: nI.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: p,
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
                                onClick: () => m(a),
                                "aria-label": x,
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
        f = !0 === n.multi_select,
        { options: m } = n,
        h = m.length > 4 ? "gallery" : "row",
        g = i.useRef(null),
        p = i.useRef(new Map()),
        [x, v] = i.useState(null),
        j = null != x && m.some((e) => e.id === x) ? x : (m.find((e) => a.includes(e.id)) ?? m[0])?.id,
        b = i.useCallback(
            (e) => {
                let t = m.flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    n = t.findIndex((t) => t.id === e.id);
                n < 0 ||
                    Promise.all(t.map((e) => (0, er.PK)(l, e.image.attachment_id))).then(
                        (e) => {
                            (0, nP.R)({
                                items: e.map((e, l) => {
                                    let n,
                                        a = p.current.get(t[l].id);
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
            [m, l],
        ),
        y = i.useCallback(
            (e, t) => {
                let l = (m.findIndex((t) => t.id === e.id) + t + m.length) % m.length,
                    n = m[l];
                (v(n.id), g.current?.querySelectorAll("[data-conjure-image-option-pick]")[l]?.focus(), f || s || c(n));
            },
            [s, f, c, m],
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
                className: o()(nQ.fF, "gallery" === h ? nQ.nV : nQ.nM, { [nQ.m3]: f }),
                role: f ? "group" : "radiogroup",
                "aria-labelledby": `${n.id}-label`,
                "data-layout": h,
                "data-count": m.length,
                children: [
                    m.map((e) =>
                        (0, r.jsx)(
                            nZ,
                            {
                                projectId: l,
                                option: e,
                                multi: f,
                                selected: a.includes(e.id),
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
                        ? (0, r.jsx)(
                              nZ,
                              {
                                  projectId: l,
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
        [d, f] = i.useState(""),
        m = a ? 0 : -1,
        h = l.busy;
    function g() {
        "" !== d.trim() &&
            null == h &&
            l.onLink(d.trim()).then(
                (e) => {
                    e && (c(!1), f(""));
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
                        tabIndex: m,
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
                              tabIndex: m,
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
                                            : Promise.resolve({ errorText: nH(a) })),
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
                                  onChange: (e) => f(e),
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
        f = null != t.detail && "" !== t.detail;
    return (0, r.jsxs)(k.D, {
        className: o()(n3.uK, { [n3.ue]: n, [n3.h4]: !0 === u }),
        onClick: n ? void 0 : () => a(t),
        "aria-label": ed.intl.formatToPlainString(d ? ec.default["2p6UFz"] : ec.default.AQbxhf, { answer: t.label }),
        "aria-describedby": f ? c : void 0,
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
                    f
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
function n5(e) {
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
        f = !0 === l.multi_select;
    return (0, r.jsxs)("div", {
        className: o()(n3.Ge, n3.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            f
                ? (0, r.jsx)(y.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: n3.aK,
                      children: ed.intl.string(ec.default.tE8qbz),
                  })
                : null,
            (0, r.jsx)(n5, {
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
        [d, f] = i.useState({}),
        [m, h] = i.useState({}),
        [g, p] = i.useState(0),
        [x, v] = i.useState(null),
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
        z = n.questions[$],
        [F, O] = i.useState({ id: z.id, expanded: !1 }),
        U = F.id === z.id && F.expanded,
        [G, q] = i.useState(null),
        B = d[z.id] ?? "",
        K = !0 === z.multi_select,
        H = nN(z),
        V = K ? (m[z.id] ?? n7) : ((t = u[z.id]), t?.kind === "option" ? [t.optionId] : nA),
        W = (function (e, t, l) {
            let [n, a] = i.useState({}),
                [r, s] = i.useState({}),
                [o, u] = i.useState({}),
                c = ed.intl.string(ec.default.wTsP5l),
                d = i.useCallback((e) => n[e] ?? null, [n]),
                f = i.useCallback(
                    (e) => null != n[e.id] && (!0 === e.multi_select ? !0 === o[e.id] : t[e.id]?.kind === "image"),
                    [t, n, o],
                ),
                m = i.useCallback(
                    (e) => {
                        let t = n[e.id];
                        return null != t && !0 === o[e.id] ? { attachment: t.attachment, text: c } : void 0;
                    },
                    [c, n, o],
                ),
                h = i.useCallback(
                    (i, o) => {
                        let d = i.id,
                            m = !0 === i.multi_select,
                            h = n[d] ?? null;
                        if (o) return nS(h, f(i));
                        function g(e) {
                            return s((t) => ({ ...t, [d]: e }));
                        }
                        function p(e) {
                            return { kind: "image", attachment: e.attachment, text: c };
                        }
                        let x = t[d];
                        function v(t) {
                            (a((l) => {
                                let n = l[d];
                                return (
                                    null != n && (0, er.Vm)(e, n.attachment.id).catch(() => void 0), { ...l, [d]: t }
                                );
                            }),
                                g({ busy: null, error: null }),
                                m ? u((e) => ({ ...e, [d]: !0 })) : l((e) => (e[d] === x ? { ...e, [d]: p(t) } : e)));
                        }
                        return {
                            image: h,
                            selected: f(i),
                            busy: r[d]?.busy ?? null,
                            error: r[d]?.error ?? null,
                            onPick: () => {
                                null != h &&
                                    (m ? u((e) => ({ ...e, [d]: !0 !== e[d] })) : l((e) => ({ ...e, [d]: p(h) })));
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
                    [c, t, n, e, f, l, r],
                );
            return { imageFor: d, selectedFor: f, multiPartFor: m, controlsFor: h };
        })(l, u, c),
        J = W.imageFor(z.id),
        X = W.selectedFor(z),
        { text: Q, phase: Y } = (0, to.Q)(z.question),
        Z = Q === z.question,
        ee = Z && G?.id === z.id && G.truncated;
    i.useLayoutEffect(() => {
        if (null == M || U || !Z) return;
        function e() {
            if (null == M) return;
            let e = M.scrollHeight > M.clientHeight + 1;
            q((t) => (t?.id === z.id && t.truncated === e ? t : { id: z.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(M), () => t.disconnect());
    }, [Z, M, z.id, U]);
    let et = ed.intl.string(U ? ed.t.iTcuma : ed.t.dcl9MQ),
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
                    b({ question: z, draft: B, selected: V, ownImage: J, ownSelected: X, direction: t, moves: l }),
                    E(!0),
                    p(e));
            },
            [B, J, X, z, V],
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
    let ei = x?.moves;
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
                let t = { ...u, [z.id]: e };
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
            [u, n, R, $, z.id, el, en],
        ),
        eo = i.useCallback(() => {
            R || 0 === $ || en($ - 1, "back");
        }, [R, $, en]),
        eu = $ > 0 && !R,
        ef = i.useCallback(
            (e) => {
                f((e) => ({ ...e, [z.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                H ? R || c((e) => ({ ...e, [z.id]: t })) : es(t);
            },
            [R, H, z.id, es],
        ),
        { multiPartFor: em } = W,
        eh = i.useMemo(() => {
            var e;
            let t, l;
            return K
                ? ((e = em(z)),
                  (t = B.trim()),
                  (l = z.options.filter((e) => V.includes(e.id)).map((e) => e.label)),
                  {
                      kind: "multi",
                      optionIds: V,
                      ...("" === t ? {} : { custom: t }),
                      ...(null == e ? {} : { attachment: e.attachment }),
                      text: [...l, ...(null == e ? [] : [e.text]), ...("" === t ? [] : [t])].join(", "),
                  })
                : null;
        }, [B, K, em, z, V]),
        eg = W.controlsFor(z, R),
        ep = i.useCallback(() => {
            if (null != eh) {
                "" !== eh.text && es(eh);
                return;
            }
            let e = B.trim();
            "" !== e && es({ kind: "custom", text: e });
        }, [B, eh, es]),
        [ex, ev] = i.useState(!1),
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
                    : "" !== B.trim()
                      ? { kind: "custom", text: B.trim() }
                      : (u[z.id] ?? null),
            [u, B, eh, z.id],
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
        className: o()(n3.$O, { [n3.fI]: ex && !ej, [n3.Oh]: ej }),
        role: "dialog",
        "aria-label": z.question,
        "data-conjure-clarification": n.id,
        "data-state": R ? "inert" : "open",
        "data-question-expanded": U ? "true" : void 0,
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
                                id: `${z.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: U ? void 0 : 5,
                                className: o()(n2.TK, n3.R_, { [n3.TB]: "exit" === Y, [n3.JU]: "enter" === Y }),
                                children: Q,
                            }),
                            ee || U
                                ? (0, r.jsx)("div", {
                                      className: n2.Q7,
                                      children: (0, r.jsx)(w.m, {
                                          text: et,
                                          children: (0, r.jsx)(le.K, {
                                              icon: U ? tr.t : tB.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => O({ id: z.id, expanded: !U }),
                                              "aria-label": et,
                                              "aria-controls": `${z.id}-label`,
                                              "aria-expanded": U,
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
                                    "aria-labelledby": `${z.id}-label`,
                                    "data-direction": x?.direction,
                                    "data-parity": null == x ? void 0 : x.moves % 2,
                                    children: [
                                        K
                                            ? (0, r.jsx)(y.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: n3.aK,
                                                  children: ed.intl.string(ec.default.tE8qbz),
                                              })
                                            : null,
                                        (0, r.jsx)(n5, {
                                            projectId: l,
                                            question: z,
                                            selected: V,
                                            disabled: R,
                                            onPick: (e) =>
                                                K
                                                    ? h((t) => {
                                                          var l, n;
                                                          let a;
                                                          return {
                                                              ...t,
                                                              [z.id]:
                                                                  ((l = t[z.id] ?? n7),
                                                                  (n = e.id),
                                                                  (a = l.includes(n)
                                                                      ? l.filter((e) => e !== n)
                                                                      : [...l, n]),
                                                                  z.options
                                                                      .filter((e) => a.includes(e.id))
                                                                      .map((e) => e.id)),
                                                          };
                                                      })
                                                    : ef(e),
                                            own: eg,
                                        }),
                                        H
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
                                                          value: B,
                                                          onChange: (e) => {
                                                              let { value: t } = e.currentTarget;
                                                              f((e) => ({ ...e, [z.id]: t }));
                                                          },
                                                          onKeyDown: (e) => {
                                                              "Enter" !== e.key ||
                                                                  e.shiftKey ||
                                                                  e.nativeEvent.isComposing ||
                                                                  (e.preventDefault(), ep());
                                                          },
                                                          placeholder: ed.intl.string(ec.default["tOC+tn"]),
                                                          "aria-label": ed.intl.formatToPlainString(
                                                              ec.default["4JeYPB"],
                                                              { question: z.question },
                                                          ),
                                                          disabled: R,
                                                          rows: 1,
                                                          className: n3.Pu,
                                                          "data-conjure-clarification-other": z.id,
                                                      }),
                                                  ],
                                              }),
                                    ],
                                }),
                                null == j
                                    ? null
                                    : (0, r.jsx)(
                                          n6,
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
            D > 1 || K || H
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
    ai = lf().throttle(() => {
        if (0 === ar.size) return;
        let e = aa();
        for (let [t, l] of ar) "" === l ? delete e[t] : (e[t] = l);
        (ar.clear(), lW.w.set(an, e));
    }, 1e3);
class as extends f.Ay.Store {
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
    af = l(615839);
function am(e) {
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
        f = d.filter((e) => "message" === e.type).at(-1),
        m = !i && "" !== r.trim();
    return {
        streamed: d,
        lastStreamedMessage: f,
        replyKey: c?.key,
        showsClosingMessage: m,
        closingContent: m ? r.trim() : "",
        attachmentsHost: (function (e) {
            let { hasAttachments: t, showsClosingMessage: l, endsOnStreamedMessage: n } = e;
            return t ? (l ? "closing" : n ? "streamed" : "standalone") : "none";
        })({ hasAttachments: s, showsClosingMessage: m, endsOnStreamedMessage: (0, l8.Lf)(a) }),
    };
}
(l(134528), l(947204));
let ag = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
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
    ax = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
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
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
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
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
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
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
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
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
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
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
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
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
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
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
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
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
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
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
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
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": n,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
    };
function av(e) {
    return { ...ax[e], name: ed.intl.string(ap[e]()) };
}
function aj(e) {
    return ag.includes(e) ? av(e) : void 0;
}
function ab(e) {
    let t = new Map();
    for (let [l, n] of (function (e) {
        let t = 0,
            l = e[0] ?? "";
        for (let e = 0; e < l.length; e++) t = (31 * t + l.charCodeAt(e)) % ag.length;
        let n = new Map();
        return (
            e.forEach((e, l) => {
                n.set(e, ag[(t + l) % ag.length]);
            }),
            n
        );
    })(e))
        t.set(l, av(n));
    return t;
}
var ay = l(60160),
    ak = l(16634);
function aw(e) {
    let { projectId: t, lane: l, Illocon: n, tint: a, name: i, connectsDown: s } = e,
        o = l.task,
        u = "running" === o.status,
        c = (0, l8.SY)(l.steps),
        d = u
            ? null != c
                ? (0, l8.WQ)(c)
                : am(o)
            : (function (e) {
                  let t = (function (e) {
                      let [t, l] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || l !== l.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(am(e));
                  switch (e.status) {
                      case "failed":
                          return ed.intl.formatToPlainString(ec.default.YrVgOf, { task: t });
                      case "cancelled":
                          return ed.intl.formatToPlainString(ec.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return ed.intl.formatToPlainString(ec.default["++9woZ"], {
                                  task: t,
                                  duration: (0, af.MB)(e.durationMs),
                              });
                          return ed.intl.formatToPlainString(ec.default.nmI9Uh, { task: t });
                      default:
                          return ed.intl.formatToPlainString(ec.default.nmI9Uh, { task: t });
                  }
              })(o),
        f = u ? c : void 0,
        m =
            o.detail.length > 0 ||
            l.steps.some((e) => {
                var t;
                return e !== f || (t = e).detail.length > 0 || t.screenshots.length > 0 || t.attachments.length > 0;
            })
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          l.steps.length > 0
                              ? (0, r.jsx)("ol", {
                                    className: np.dO,
                                    children: l.steps.map((e) =>
                                        (0, r.jsx)(
                                            ak.A,
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
                                      className: np.iq,
                                      children: (0, r.jsx)(ay.A, { text: e, variant: "text-sm/normal" }),
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
            body: am(o),
            position: "left",
            children: (0, r.jsx)("span", {
                className: np.nC,
                children: (0, r.jsx)(n, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: d,
        live: u,
        settled: !u,
        tint: a,
        detail: m,
        connected: !0,
        connectsDown: s,
    });
}
var aN = l(998445),
    aA = l(643210),
    aS = l(648127),
    aC = l(372795),
    aE = l(163897);
let aI = "conjure-browser-viewer";
function aM(e) {
    let { projectId: t, sessionIds: l } = e,
        n = (0, f.yK)(
            [aA.A],
            () =>
                l.flatMap((e) => {
                    let l = aA.A.getTab(t, e);
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
        className: aE.kR,
        "aria-label": ed.intl.string(ec.default.Uvkr1G),
        children: n.map((e) =>
            (0, r.jsx)("li", { children: (0, r.jsx)(aT, { projectId: t, tab: e, sessionIds: a }) }, e.session.id),
        ),
    });
}
function aT(e) {
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
        c = (0, tt.useHasModalOpen)(aI),
        [d, f] = i.useState(!1),
        m = i.useCallback((e, t) => f(t), []),
        { ended: h } = n,
        g = (0, aS.i)(n.session);
    return (0, r.jsxs)(k.D, {
        innerRef: s,
        className: o()(aE.Nr, h && aE.Xj),
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
                    { modalKey: aI },
                )
            );
        },
        "aria-label": ed.intl.formatToPlainString(ec.default.G3a822, { title: g }),
        children: [
            (0, r.jsxs)("div", {
                className: aE.Gt,
                children: [
                    (0, r.jsx)(aC.A, {
                        projectId: t,
                        sessionId: n.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !u || c || h,
                        className: aE.Ji,
                        "aria-label": ed.intl.formatToPlainString(ec.default.rnwqXb, { name: g }),
                        onStateChange: m,
                    }),
                    d
                        ? null
                        : (0, r.jsx)("div", {
                              className: aE.qf,
                              children: (0, r.jsx)(aN.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    h
                        ? (0, r.jsx)("div", {
                              className: aE.HS,
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
                className: aE.pG,
                children: [
                    (0, r.jsx)("span", { className: o()(aE.W9, h && aE.oM) }),
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
var a_ = l(268409);
let aP = new WeakMap(),
    aR = new WeakMap();
function aL(e) {
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
        o = (0, f.yK)(
            [ek.Ay],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = aP.get(e);
                    if (null != t) return t;
                    let l = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = aR.get(e);
                            if (null == t) {
                                let l = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) l.push(e);
                                ((t = l), aR.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            l.set(e, t.steps);
                    return (aP.set(e, l), l);
                })(ek.Ay.getMessages(t));
                return s.filter((t) => e.get(t) === l);
            },
            [s, t, l],
        );
    return 0 === o.length
        ? null
        : (0, r.jsx)("li", { className: a_.h, children: (0, r.jsx)(aM, { projectId: t, sessionIds: o }) });
}
var aD = l(469393);
function a$(e) {
    let { proposal: t, onRestore: l } = e,
        n = (0, tn.lG)(t.authored_at);
    return (0, r.jsx)(nr, {
        title: ed.intl.string(ec.default["t+b0rz"]),
        children: (0, r.jsxs)("div", {
            className: aD.r,
            children: [
                (0, r.jsxs)("div", {
                    className: aD.z,
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
    aF = l(687966),
    aO = l(632015),
    aU = l(633018),
    aG = l(885574);
let aq = {
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
    aH = (((a = {}).PRIVATE = "private"), (a.PUBLIC = "public"), a),
    aV = l(773669);
let aW = [],
    aJ = {};
function aX(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function aQ(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: aK.IMAGE,
        visibility: aH.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var aY = l(127258),
    aZ = l(320095),
    a0 = l(963852),
    a1 = l(95701),
    a2 = l(889227),
    a3 = l(155718);
let a4 = ["command", "user_command", "message_command", "message"],
    a5 = new Set([a3.kc.CHAT, a3.kc.USER, a3.kc.MESSAGE]);
function a7(e) {
    return e.type ?? a3.kc.CHAT;
}
function a6(e) {
    return "launch" !== e.kind && a5.has(a7(e));
}
function a8(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function a9(e, t) {
    let l = a4.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        n = [...l.filter((e) => !a8(e)), ...l.filter(a8)].slice(0, 3);
    for (let a of t || 1 === l.length ? e : []) {
        if (n.length >= 3) break;
        n.includes(a) || a8(a) || n.push(a);
    }
    return a4.flatMap((t) => e.filter((e) => e.kind === t && n.includes(e)));
}
let re = new a1.nA({ id: "1337", guild_id: "1337", type: eb.rbe.GUILD_TEXT, name: "preview" });
function rt(e, t) {
    let {
            bot: l = !1,
            discriminator: n = "0000",
            enabled: a = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = (0, f.bG)([tX.default], () => tX.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            a && r?.username !== t && (0, tY.nj)(new a2.A({ id: e, username: t, discriminator: n, bot: l }));
        }, [a, r, e, t, n, l]),
        r
    );
}
let rl = /^@\S+/;
var rn = l(628284),
    ra = l(97808),
    rr = l(778712),
    ri = l(809115),
    rs = l(486020),
    ro = l(200700);
let ru = {
        alert: { label: () => ed.intl.string(ec.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => ed.intl.string(ec.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => ed.intl.string(ec.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => ed.intl.string(ec.default.RGzFNK), blockedStyle: !1 },
    },
    rc = {
        blocked: { label: () => ed.intl.string(ec.default.YdnZ8q), tone: "red" },
        alert: { label: () => ed.intl.string(ec.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => ed.intl.string(ec.default.RGzFNK), tone: "green" },
    },
    rd = ["blocked", "alert", "allowed"],
    rf = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
var rm = l(984097),
    rh = l(13673);
let rg = { blocked: az.ShieldIcon, alert: t4.BellIcon, allowed: rn.y },
    rp = {
        blurple: { text: "text-brand", icon: $.A.colors.TEXT_BRAND },
        red: { text: "text-feedback-critical", icon: $.A.colors.TEXT_FEEDBACK_CRITICAL },
        green: { text: "text-feedback-positive", icon: $.A.colors.TEXT_FEEDBACK_POSITIVE },
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
                    : ed.intl.formatToPlainString(ed.t["3LYql6"], {
                          duration:
                              ((l = t.timeout_seconds),
                              null != (n = (0, ro.getFriendlyDurationString)(l))
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
function rv(e) {
    var t;
    let { example: l } = e,
        { label: n, blockedStyle: a } = ru[l.outcome];
    return (0, r.jsxs)("li", {
        className: o()(rm.nM, { [o()(rm.HV, rh.DX)]: a }),
        children: [
            (0, r.jsx)(N.A, { children: `${n()}: ` }),
            (0, r.jsx)("span", {
                className: rm.my,
                children: (0, r.jsx)(ra.eu, {
                    src: (0, rs.AE)(void 0, void 0),
                    size: rr._3.SIZE_24,
                    "aria-label": ed.intl.string(ec.default["1yI0xV"]),
                }),
            }),
            (0, r.jsxs)("div", {
                className: rm.fw,
                children: [
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = l.content), ad.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    (0, r.jsx)(rx, { example: l }),
                ],
            }),
        ],
    });
}
function rj(e) {
    let { group: t } = e,
        l = i.useId(),
        n = rc[t.section],
        a = rg[t.section],
        s = rp[n.tone];
    return (0, r.jsxs)("div", {
        className: rm.uW,
        children: [
            (0, r.jsxs)("div", {
                className: rm.bV,
                children: [
                    (0, r.jsx)(a, { size: "xs", color: s.icon, "aria-hidden": !0 }),
                    (0, r.jsx)(y.E, {
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
                children: t.examples.map((e, t) => (0, r.jsx)(rv, { example: e }, t)),
            }),
        ],
    });
}
function rb() {
    let { avatarSrc: e, eventHandlers: t } = (0, ri.a)(!0);
    return (0, r.jsx)("span", {
        className: rm.Gy,
        ...t,
        children: (0, r.jsx)(ra.eu, { src: e, size: rr._3.SIZE_16, "aria-label": ed.intl.string(ed.t.hG1StD) }),
    });
}
function ry(e) {
    var t;
    let { automod: l } = e;
    return (0, r.jsx)("div", {
        className: rm.K1,
        children: ((t = l.examples),
        rd
            .map((e) => ({ section: e, examples: t.filter((t) => rf[t.outcome] === e) }))
            .filter((e) => e.examples.length > 0)).map((e) => (0, r.jsx)(rj, { group: e }, e.section)),
    });
}
var rk = l(460905),
    rw = l(110384),
    rN = l(763754),
    rA = l(217424),
    rS = l(194085),
    rC = l(20851),
    rE = l(692508),
    rI = l(798819);
function rM(e) {
    let { item: t } = e,
        { iconLeft: l, icon: n } = t;
    return (0, r.jsxs)("div", {
        className: o()(rI.item, rI.labelContainer, rI.colorDefault, {
            [rI.focused]: !0 === t.highlighted,
            [rI.disabled]: !0 === t.muted,
        }),
        children: [
            null != l
                ? (0, r.jsx)("div", {
                      className: rI.iconContainerLeft,
                      children: (0, r.jsx)(l, { color: "currentColor", className: rI.icon }),
                  })
                : null,
            (0, r.jsx)("div", { className: o()(rI.label, rE.Gy), children: t.label }),
            null != n
                ? (0, r.jsx)("div", {
                      className: rI.iconContainer,
                      children: (0, r.jsx)(n, { color: "currentColor", className: rI.icon }),
                  })
                : null,
        ],
    });
}
function rT(e) {
    let { target: t, commandName: l, appIconSrc: n } = e,
        a = i.useMemo(
            () =>
                null != n
                    ? (e) => {
                          let { className: t } = e;
                          return (0, r.jsx)("img", { src: n, alt: "", className: o()(t, rE.ak) });
                      }
                    : void 0,
            [n],
        ),
        s =
            "message" === t
                ? { label: ed.intl.string(ed.t["5IEsGx"]), icon: rw.W, muted: !0 }
                : { label: ed.intl.string(ed.t.LYju5J), muted: !0 };
    return (0, r.jsx)("div", {
        className: o()(rI.menu, rE.MK),
        "aria-hidden": !0,
        children: (0, r.jsxs)("div", {
            className: rI.scroller,
            children: [
                (0, r.jsx)(rM, { item: s }),
                (0, r.jsx)("div", { className: rI.separator }),
                (0, r.jsx)(rM, { item: { label: l, iconLeft: a, highlighted: !0 } }),
            ],
        }),
    });
}
var r_ = l(381941);
function rP() {}
function rR(e) {
    let t,
        l,
        n,
        a,
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
        (l = (0, f.bG)([eE.Ay], () => eE.Ay.getProject(p))),
        (n = l?.application_id),
        (a = (0, f.bG)([lm.A], () => lm.A.getApplication(n)?.getIconURL(80) ?? null, [n])),
        (s = l?.name ?? ed.intl.string(ec.default.JEYq8M)),
        (u = (0, f.bG)([tX.default], () => (null != n ? tX.default.getUser(n) : void 0), [n])),
        (d = rt("31337", s, { bot: !0, enabled: !(c = u?.bot === !0) })),
        (m = c ? u : d),
        (h = rt("31338", ed.intl.string(ec.default["9iAOsw"]), { discriminator: "0003" })),
        (g = rt("31339", (0, tQ.mG)(t) ?? "", { enabled: null != t })),
        {
            items: i.useMemo(
                () =>
                    null == t || null == g || null == m || null == h
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
                                      i = (0, aZ.rh)({
                                          ...(0, a0.Ay)({
                                              channelId: re.id,
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
                                                        type: aY.G.APPLICATION_COMMAND,
                                                        user: (0, a0.Vi)(s),
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
                                          (d(((n = t.user), n.trim().replace(rl, `<@${i.id}>`)), s),
                                              d(((a = t.bot), a.includes("<@") ? a : `<@${o.id}> ${a}`), i));
                                          break;
                                      case "event":
                                          d(((r = t.bot), r.split(`@${u.username}`).join(`<@${u.id}>`)), i);
                                  }
                              return c;
                          })(
                              x,
                              { bot: m, currentUser: t, viewer: g, member: h },
                              {
                                  targetMessage: ed.intl.string(ec.default["y+QYes"]),
                                  memberMessage: ed.intl.string(ec.default.BUTRDc),
                              },
                          ),
                [x, m, t, g, h],
            ),
            botIcon: a,
            appIconSrc: a ?? m?.getAvatarURL(void 0, 80),
        });
    return 0 === v.length
        ? null
        : (0, r.jsx)("ol", {
              className: o()(rE.TE, `group-spacing-${r_.ES}`),
              children: v.map((e) => {
                  let { key: t, record: l, isCommandReply: n, menu: a } = e;
                  return (0, r.jsxs)(
                      "li",
                      {
                          className: null != a ? rE.Rz : void 0,
                          children: [
                              (0, r.jsx)(rC.A, {
                                  message: l,
                                  channel: re,
                                  author: (0, rN.FT)(l.author, re),
                                  isGroupStart: !0,
                                  avatarOverride: l.author.bot ? (j ?? void 0) : void 0,
                                  childrenExecutedCommand: n ? (0, r.jsx)(rA.A, { message: l, channel: re }) : void 0,
                                  usernameClassName: a?.target === "user" ? rE.Ct : void 0,
                                  disableInteraction: !0,
                              }),
                              a?.target === "message"
                                  ? (0, r.jsx)("div", {
                                        className: rE.S3,
                                        inert: !0,
                                        "aria-hidden": !0,
                                        children: (0, r.jsxs)(rS.Ay, {
                                            children: [
                                                (0, r.jsx)(rS.qv, {
                                                    label: ed.intl.string(ed.t.lfIHs4),
                                                    icon: rk.n,
                                                    onClick: rP,
                                                }),
                                                (0, r.jsx)(rS.qv, {
                                                    label: ed.intl.string(ed.t["5IEsGx"]),
                                                    icon: rw.W,
                                                    onClick: rP,
                                                }),
                                                (0, r.jsx)(rS.qv, {
                                                    label: ed.intl.string(ed.t["UKOtz+"]),
                                                    icon: lt.MoreHorizontalIcon,
                                                    selected: !0,
                                                    onClick: rP,
                                                }),
                                            ],
                                        }),
                                    })
                                  : null,
                              null != a
                                  ? (0, r.jsx)("div", {
                                        className: "user" === a.target ? rE.ET : rE.je,
                                        inert: !0,
                                        children: (0, r.jsx)(rT, {
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
var rL = l(633075),
    rD = l(946356),
    r$ = l(58216),
    rz = l(27399);
function rF(e) {
    let { applicationId: t, rendererProps: l } = e,
        n = (0, f.bG)([tX.default], () => tX.default.getCurrentUser()),
        a = i.useMemo(() => new rL.R({ applicationId: t }), [t]);
    return null == n
        ? null
        : (0, r.jsx)("div", {
              className: rz.H,
              children: (0, r.jsx)(rD.A.Overlay, {
                  className: rz.w,
                  children: (0, r.jsx)(r$.A, {
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
var rO = l(443863);
let rU = {
    automod: az.ShieldIcon,
    overlay: aF.GameControllerIcon,
    widget: aO.f,
    activity: lk.k,
    commands: aU.k,
    chat_bot: h.ChatIcon,
    bot: lw.RobotIcon,
};
function rG(e) {
    let { label: t, icon: l, info: n, children: a } = e;
    return (0, r.jsxs)("section", {
        className: rO.uW,
        children: [
            (0, r.jsxs)("span", {
                className: rO.a9,
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
function rq(e) {
    let { text: t, label: l } = e;
    return (0, r.jsx)(w.m, {
        text: t,
        children: (0, r.jsx)(k.D, {
            className: rO.bk,
            "aria-label": l,
            children: (0, r.jsx)(aG.CircleInformationIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
function rB(e) {
    let { label: t, names: l } = e;
    return 0 === l.length
        ? null
        : (0, r.jsx)(rG, {
              label: t,
              children: (0, r.jsx)("div", {
                  className: rO.Ip,
                  children: l.map((e) =>
                      (0, r.jsx)(
                          "span",
                          {
                              className: rO.jw,
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
        className: rO.K2,
        children: t.map((e) => {
            let t = rU[e];
            return (0, r.jsxs)(
                "span",
                {
                    className: rO.L6,
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
                            children: ed.intl.string(aq[e]),
                        }),
                    ],
                },
                e,
            );
        }),
    });
}
function rH(e) {
    let { projectId: t, design: l } = e,
        { id: n } = l,
        { src: a, gone: s, handleError: o } = nX(t, n),
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
        : (0, r.jsx)(rG, {
              label: ed.intl.string(ec.default.X15LLY),
              info: (0, r.jsx)(rq, {
                  text: ed.intl.string(ec.default.nR4B8P),
                  label: ed.intl.string(ec.default.nc0SNY),
              }),
              children: (0, r.jsx)(k.D, {
                  className: rO.xX,
                  onClick: c,
                  "aria-label": ed.intl.string(ec.default.TvAPIm),
                  children: null != a ? (0, r.jsx)("img", { src: a, alt: u, className: rO.sN, onError: o }) : null,
              }),
          });
}
function rV(e) {
    let t,
        l,
        { projectId: n, proposal: a, version: s, onApprove: o } = e,
        { automod: u } = a,
        { botInteraction: c, botExchanges: d } =
            ((t = (function (e) {
                if (null != e.bot) return e.bot.interaction;
                let t = e.commands.some(a6),
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
                              let s = e.commands.filter(a6).map((e) =>
                                      (function (e, t) {
                                          let l = e.description?.trim() ?? "",
                                              n = "" !== l ? l : t.reply;
                                          switch (a7(e)) {
                                              case a3.kc.USER:
                                                  return { kind: "user_command", user: e.name, bot: n };
                                              case a3.kc.MESSAGE:
                                                  return { kind: "message_command", user: e.name, bot: n };
                                              default:
                                                  return { kind: "command", user: `/${e.name}`, bot: n };
                                          }
                                      })(e, l),
                                  ),
                                  o = "messages" === t ? [] : s.filter(a8),
                                  u = r.length > 0 ? a9([...r, ...o], !0) : a9("both" === t ? [...s, i] : s, !1);
                              return u.length > 0 ? u : [a];
                          })(a, t, {
                              message: ed.intl.string(ec.default.J7qggf),
                              reply: ed.intl.string(ec.default.nqYtiy),
                              event: ed.intl.string(ec.default["05lU9W"]),
                          }),
                [a, t],
            )),
            { botInteraction: t, botExchanges: l }),
        m = (function (e, t) {
            let { widget_config: l, widget_preview: n } = t,
                a = (0, f.bG)([aV.default], () => aV.default.locale),
                r = (0, f.bG)([eE.Ay], () => {
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
                                                          ...aX(l),
                                                          ...(null != l.fallback ? { fallback: aX(l.fallback) } : {}),
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
                                                applicationAssets: Object.keys(l).map(aQ),
                                                getApplicationAssetUrl: (e) => l[e.key] ?? "",
                                                localizedStrings: aW,
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
        bodyClassName: rO.rf,
        "data-conjure-plan-card": !0,
        children: [
            "" !== g
                ? (0, r.jsx)(rG, {
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
                ? (0, r.jsx)(rG, {
                      label: ed.intl.string(ec.default.z4ZKYG),
                      icon: (0, r.jsx)(rb, {}),
                      info: (0, r.jsx)(rq, {
                          text: ed.intl.string(ec.default.bo4MOx),
                          label: ed.intl.string(ec.default.VPLNot),
                      }),
                      children: (0, r.jsx)(ry, { automod: u }),
                  })
                : null,
            null == u && null != a.design_image ? (0, r.jsx)(rH, { projectId: n, design: a.design_image }) : null,
            d.length > 0
                ? (0, r.jsx)(rG, {
                      label: ed.intl.string(ec.default.sA1lTv),
                      info: (0, r.jsx)(rq, {
                          text: ed.intl.string(ec.default.NnmbJu),
                          label: ed.intl.string(ec.default.KsqQJX),
                      }),
                      children: (0, r.jsx)(rR, { projectId: n, exchanges: d }),
                  })
                : null,
            null == u && null != m
                ? (0, r.jsx)(rG, {
                      label: ed.intl.string(ec.default.ove4zH),
                      info: (0, r.jsx)(rq, {
                          text: ed.intl.string(ec.default.XcIrHx),
                          label: ed.intl.string(ec.default["TwT+ht"]),
                      }),
                      children: (0, r.jsx)(rF, { ...m }),
                  })
                : null,
            a.changes.length > 0
                ? (0, r.jsx)(rG, {
                      label: ed.intl.string(ec.default["5+mG1z"]),
                      children: (0, r.jsx)("ul", {
                          className: rO.p_,
                          children: a.changes.map((e, t) =>
                              (0, r.jsx)(
                                  "li",
                                  {
                                      className: rO.Aw,
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
                ? (0, r.jsx)(rG, {
                      label: ed.intl.string(ed.t["0hKkS+"]),
                      children: (0, r.jsx)("ul", {
                          className: rO.p_,
                          children: a.commands.map((e, t) =>
                              (0, r.jsxs)(
                                  "li",
                                  {
                                      className: rO.uX,
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
                      className: rO.o1,
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
function rW(e) {
    return null != e && e.status?.state === "unpublished";
}
let rJ = new WeakMap();
function rX(e) {
    let { publish: t } = e,
        l = t.guildId,
        n = (0, f.bG)([Y.A], () => (null == l ? null : Y.A.getGuild(l)));
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
                              (0, r.jsx)(eK.Ay, { guild: n, size: eK.Ay.Sizes.SMOL }),
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
function rQ(e) {
    let { projectId: t } = e,
        l = (0, lo.Ay)(t);
    return null != l && rW(l) ? (0, r.jsx)(rX, { publish: l }) : null;
}
var rY = l(478016),
    rZ = l(989271);
function r0(e) {
    let { idea: t, selected: l, onPick: n } = e,
        a = i.useId(),
        s = null == n;
    return (0, r.jsxs)(k.D, {
        className: o()(rZ.nM, { [rZ.f1]: s, [rZ.CZ]: l }),
        onClick: s ? void 0 : () => n(t),
        "aria-label": ed.intl.formatToPlainString(ec.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : a,
        "aria-disabled": s,
        "aria-pressed": l,
        children: [
            (0, r.jsxs)("div", {
                className: rZ.jo,
                children: [
                    l
                        ? (0, r.jsx)(rY.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: rZ.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, r.jsx)(y.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: rZ.G9,
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
function r1(e) {
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
                r0,
                { idea: e, selected: a.has(e.id) || l?.has(e.id) === !0, onPick: null == n ? void 0 : o },
                e.id,
            ),
        ),
    });
}
function r2(e) {
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
var r3 = l(530557),
    r4 = l(872162);
function r5(e, t) {
    return { cardId: e, status: "pending" === t ? null : t };
}
var r7 = l(202723);
function r6(e) {
    let { projectId: t, cardId: n, request: a, status: s, awaiting: u } = e,
        c = i.useCallback(() => {
            (0, tt.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("291953"), l.e("408337")]).then(l.bind(l, 789864));
                return (l) => (0, r.jsx)(e, { ...l, projectId: t, request: a });
            });
        }, [t, a]),
        d = i.useMemo(() => a.fields.map((e) => ({ id: e.name, label: e.label, icon: r3.R })), [a.fields]),
        f = (function (e, t) {
            let [l, n] = i.useState(() => r5(e, t));
            return l.cardId !== e || (null == l.status && "pending" !== t)
                ? (n(r5(e, t)), !1)
                : null != l.status && t !== l.status;
        })(n, s),
        m = o()(r7.Lo, { [r7.jY]: f });
    return "superseded" === s
        ? (0, r.jsx)(
              "article",
              {
                  className: m,
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
                    className: m,
                    children: [
                        (0, r.jsx)(y.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            tag: "span",
                            children: ed.intl.string(ec.default.HCQvpO),
                        }),
                        (0, r.jsx)(r4.C, { label: ed.intl.string(ec.default.HCQvpO), size: "xs", items: d }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, r.jsx)(
                  "article",
                  {
                      className: r7.Lo,
                      children: (0, r.jsx)(r4.C, { label: ed.intl.string(ec.default.HCQvpO), size: "xs", items: d }),
                  },
                  s,
              )
            : "received" === s
              ? (0, r.jsxs)(
                    "article",
                    {
                        className: m,
                        children: [
                            (0, r.jsxs)("div", {
                                className: r7.$h,
                                children: [
                                    (0, r.jsx)("span", {
                                        className: r7.c9,
                                        "aria-hidden": !0,
                                        children: (0, r.jsx)(rn.y, {
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
                            (0, r.jsx)(r4.C, { label: ed.intl.string(ec.default.sfp7Up), size: "xs", items: d }),
                        ],
                    },
                    s,
                )
              : (0, r.jsxs)("article", {
                    className: r7.Lo,
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
                        (0, r.jsx)(r4.C, { label: ed.intl.string(ec.default.HCQvpO), size: "xs", items: d }),
                        (0, r.jsx)("div", {
                            className: r7.sq,
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
var r8 = l(919790),
    r9 = l(971824),
    ie = l(162052),
    it = l(165648);
function il(e) {
    let t = ab(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let l = null != e.task.helperMark ? aj(e.task.helperMark) : void 0,
            n = l ?? t.get(e.taskId);
        return null == n
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: n,
                      name: null != l && null != e.task.helperName ? e.task.helperName : n.name,
                      task: am(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function ia(e) {
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
            segment: f,
            hostsChecklist: m = !0,
            reportsDuration: h = !0,
            closed: g = !1,
            segmentDurationMs: p,
        } = e,
        x = i.useMemo(() => (0, l8.Jf)(l, n), [l, n]),
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
        return (0, r.jsx)("ol", {
            className: np.pj,
            "data-live": !1,
            children: (0, r.jsx)(nl.A, {
                glyph: (0, r.jsx)(ac.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: ed.intl.string(ec.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = n ? void 0 : (p ?? (h ? (x.turn?.durationMs ?? o) : void 0)),
        b = m ? ((0, l8.lt)(l) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = ab(k.map((e) => e.taskId)),
        N = !g && (n || k.some((e) => "running" === e.task.status)),
        A = il(k);
    return (0, r.jsxs)("ol", {
        className: np.pj,
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
                tier: x.turn?.tier,
            }),
            k.map((e, l) => {
                let n = null != e.task.helperMark ? aj(e.task.helperMark) : void 0,
                    a = n ?? w.get(e.taskId);
                return null == a
                    ? null
                    : (0, r.jsx)(
                          aw,
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
            (0, r.jsx)(aL, { projectId: t, steps: l, tree: x, segment: f }),
            y
                ? (0, r.jsx)("li", {
                      className: np.YO,
                      children: (0, r.jsx)(nh, { todos: b, provisional: d, agents: A, live: a, superseded: s }),
                  })
                : null,
        ],
    });
}
function ir(e) {
    let {
            projectId: t,
            steps: l,
            content: n,
            proposal: a,
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
        R = null == c ? null : (0, r.jsx)(r8.A, { projectId: t, attachments: c }),
        L = null == R ? null : (0, r.jsx)("div", { className: np.MT, children: R }),
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
        className: np.ue,
        children: [
            E.length > 0 && !w
                ? (0, r.jsx)("ol", {
                      className: np.dO,
                      children: E.filter((e) => "todos" !== e.type).map((e) =>
                          (0, r.jsxs)(
                              "li",
                              {
                                  className: np.DV,
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: it.PT,
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
                ? (0, r.jsx)(rV, { projectId: t, proposal: a, version: s, onApprove: j })
                : P
                  ? (0, r.jsxs)("div", {
                        className: o()(np.ky, ie.XR),
                        children: [
                            (0, r.jsx)("div", {
                                className: o()(it.PT, np.cW),
                                children: ad.A.parse(T, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === _ ? L : null,
                            D,
                        ],
                    })
                  : null,
            null != d
                ? (0, r.jsx)("div", {
                      className: o()(np.ky, ie.XR, { [r9.O]: null != m && "open" === h }),
                      children: (0, r.jsx)(r6, {
                          projectId: t,
                          cardId: f ?? "",
                          request: d,
                          status: h,
                          awaiting: "open" === h ? m : void 0,
                      }),
                  })
                : null,
            null != g
                ? (0, r.jsx)("div", {
                      className: o()(np.ky, ie.XR),
                      children: (0, r.jsx)(at, { projectId: t, request: g }),
                  })
                : null,
            "standalone" !== _ && ("closing" !== _ || P) ? null : R,
            null != p ? (0, r.jsx)(rQ, { projectId: t }) : null,
            null != u && u.length > 0 ? (0, r.jsx)(r1, { ideas: u, pickedIdeaIds: v, onPick: x }) : null,
            null != A ? (0, r.jsx)(a$, { proposal: A, onRestore: S }) : null,
            P ? null : D,
        ],
    });
}
var ii = l(146806),
    is = l(477262),
    io = l(432017),
    iu = l(475358),
    ic = l(717400),
    id = l(663341),
    im = l(559647),
    ih = l(775602),
    ig = l(234320),
    ip = l(285796),
    ix = l(922329);
async function iv(e) {
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
var ij = l(153171);
let ib = ee.lN;
function iy(e, t, l, n) {
    let a = nO(e, t).length;
    !(function (e, t, l) {
        if (0 === l.length) return;
        let n = l.map((e) => {
            let { draft: t, upload: l } = e;
            return { draft: { ...t, localId: n$++ }, upload: l };
        });
        for (let { draft: l, upload: a } of (nU(e, t, [
            ...nO(e, t),
            ...n.map((e) => {
                let { draft: t } = e;
                return t;
            }),
        ]),
        n))
            a?.().then(
                (n) => {
                    if ("errorText" in n) return void nG(e, t, l.localId, { status: "error", errorText: n.errorText });
                    let { converted: a, ...r } = n;
                    nG(e, t, l.localId, { ...a, status: "ready", ref: r })
                        ? setTimeout(
                              () =>
                                  nG(e, t, l.localId, {
                                      status: "error",
                                      errorText: ed.intl.string(ec.default.E7dS5n),
                                  }),
                              ee.o2 - 3e5,
                          )
                        : nq(e, r.id);
                },
                (n) => {
                    (console.error("[vibegrations] attachment upload failed", n),
                        nG(e, t, l.localId, { status: "error", errorText: ed.intl.string(ec.default["kUw/b1"]) }));
                },
            );
    })(
        e,
        t,
        l.map((e) => {
            let t = "" === e.type ? "application/octet-stream" : e.type,
                l = { name: e.name, contentType: t };
            if (a++ >= ib)
                return {
                    draft: {
                        ...l,
                        status: "error",
                        errorText: ed.intl.formatToPlainString(ec.default.Q0aCVZ, { count: ib }),
                    },
                };
            if (!(0, ee.Oq)(e.size, t))
                return "image/png" === t && e.size <= ee.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas
                    ? {
                          draft: { ...l, status: "uploading", previewUrl: URL.createObjectURL(e) },
                          upload: async () => {
                              let l = await iv(e).catch(() => null);
                              return null != l && (0, ee.Oq)(l.size, l.type)
                                  ? { ...(await n(l)), converted: { name: l.name, contentType: l.type } }
                                  : { errorText: nH(t) };
                          },
                      }
                    : { draft: { ...l, status: "error", errorText: nH(t) } };
            let r = ee.XB.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...l, status: "uploading", previewUrl: r }, upload: () => n(e) };
        }),
    );
}
function ik(e) {
    let { projectId: t, surface: l, onUploadFile: n } = e,
        a = nz.useState((e) => nF(e, t, l)),
        r = i.useCallback((e) => iy(t, l, e, n), [t, l, n]),
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
                    (nB(t, a),
                    nU(
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
function iw(e) {
    let { draft: t, onRemove: l } = e;
    return (0, r.jsxs)(ix.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, r.jsx)(A.y, { type: A.t.SPINNING_CIRCLE_SIMPLE, className: ij.Rk }) : null,
            (0, r.jsx)("button", {
                type: "button",
                className: ij.o1,
                onClick: () => l(t.localId),
                "aria-label": ed.intl.string(ec.default.Slam9g),
                children: (0, r.jsx)(ip.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var iN = l(497437);
let iA = [
        {
            id: "add-images-videos",
            label: ec.default["51+9lc"],
            icon: is.s,
            accept: "image/*,video/*,.png,.jpg,.jpeg,.gif,.webp,.avif,.heic,.heif,.svg,.bmp,.mp4,.m4v,.mov,.webm,.mkv,.avi",
        },
        {
            id: "add-sounds",
            label: ec.default["10ljr2"],
            icon: io.T,
            accept: "audio/*,.mp3,.wav,.ogg,.oga,.opus,.m4a,.aac,.flac,.weba,.webm,.aif,.aiff,.mid,.midi",
        },
        { id: "add-other-files", label: ec.default.aotDee, icon: ea.H, accept: "" },
    ],
    iS = "text-md/normal",
    iC = null;
function iE(e) {
    let { text: t, offering: l, typed: n } = e,
        [a, s] = i.useState(t),
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
            (p(i + r), h(s));
            let o = s + i,
                d = Math.max(l, n.offsetWidth) + r + i,
                f = 0 === d ? 1 : s / d,
                m = 0 === d ? 1 : o / d;
            v({
                frontFrom: 1e3 * (0, ii._R)(f),
                frontTo: 1e3 * (0, ii._R)(m),
                backFrom: 1e3 * (0, ii.T)(f),
                backTo: 1e3 * (0, ii.T)(m),
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
    let S = "in" === k ? x.backFrom : x.frontFrom,
        C = "out" === k ? x.frontTo : x.backTo,
        E = (0, f.bG)([ih.Ay], () => ih.Ay.useReducedMotion),
        I = t === ed.intl.string(ec.default.Zc7gML),
        M = a === t && I;
    function T(e, t, l) {
        let n = null != l;
        return (0, r.jsx)("span", {
            ref: l,
            className: o()(iN.VT, { [iN.qk]: n }),
            style: n
                ? {
                      insetInlineStart: m,
                      "--custom-cap-wipe-delay": `${S}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, C - S)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": n && j > 0 && null != k ? j % 2 : void 0,
            "data-wipe-kind": n ? (k ?? void 0) : void 0,
            children: (0, r.jsx)(iu.e, { shortcut: "tab", className: iN.xT, keyClassName: e }),
        });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eL.o, {
                text: t,
                variant: iS,
                delay: null,
                duration: 1e3,
                trailingWidth: g,
                className: o()(iN.xM, { [iN.s2]: n }),
                onStart: A,
                onComplete: () => s(t),
            }),
            T(iN.IS, l || (!E && "out" === k), u),
            (0, r.jsx)("span", {
                ref: c,
                className: iN.QI,
                "aria-hidden": !0,
                children: (0, r.jsx)(y.E, { variant: iS, tag: "span", children: t }),
            }),
            M
                ? (0, r.jsxs)("span", {
                      className: iN.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, r.jsx)(y.E, { variant: iS, tag: "span", className: iN.xM, children: t }),
                          T(iN.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let iI = i.memo(function (e) {
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
                onImport: m,
                suggestion: h,
                questionOpen: g = !1,
                hasPendingContext: p = !1,
                onDraftHasTextChange: x,
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
        i.useEffect(() => x?.(A), [A, x]);
        let [S, C] = i.useState(t);
        S !== t && (C(t), y(ao.getDraft(t)));
        let E = (0, f.bG)([ih.Ay], () => ih.Ay.isSubmitButtonEnabled),
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
            } = ik({ projectId: t, surface: "chat", onUploadFile: c }),
            z = "" !== b.trim() || _.length > 0 || p,
            F = l && z && D,
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
                if (!F) return;
                let e = $();
                o(b, e.length > 0 ? e : void 0);
                let t = (function (e, t, l) {
                    let n,
                        a,
                        r = l.split("\n", 1)[0] ?? "";
                    if (null == e || "" === r) return r;
                    null == iC && (iC = document.createElement("canvas").getContext("2d"));
                    let i = iC;
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
                        f = d.lastIndexOf(" ");
                    return (f > 0 ? d.slice(0, f) : d).trimEnd();
                })(J.current?.querySelector("textarea") ?? null, eo.current, b);
                ("" !== t && U(t), k(""));
            }, [F, b, o, $, k]),
            q = i.useCallback(
                (e) => {
                    (e.preventDefault(), G());
                },
                [G],
            ),
            B = i.useCallback(() => {
                null == u || I || (M(!0), u());
            }, [u, I]),
            K = null == h || "" !== b || !l || n || s || p ? null : h,
            H = i.useCallback(
                (e) => {
                    if ("Escape" === e.key && a && null != u && !I) {
                        (e.preventDefault(), e.stopPropagation(), B());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != K) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), k(K));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != d && (e.preventDefault(), d());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), G());
                },
                [G, d, a, u, I, B, K, k],
            ),
            V = i.useCallback(
                (e) => {
                    l && R(e);
                },
                [l, R],
            );
        (0, ig.Vo)({
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
            J = i.useRef(null),
            X = i.useRef(null),
            Q = i.useCallback((e) => {
                let t = T.current;
                null != t && ((t.accept = e), t.click());
            }, []),
            [Y, Z] = i.useState(0),
            [ee, ea] = i.useState(!1);
        i.useEffect(() => {
            if (0 === b.length) return void ea(!1);
            let e = J.current?.querySelector("textarea");
            if (null != e) {
                let t = i_(e);
                null != t && Z(t);
            }
            ea(!0);
            let t = setTimeout(() => ea(!1), iM);
            return () => clearTimeout(t);
        }, [b]);
        let er = i.useMemo(() => ({ "--custom-glow-x": `${Y}px` }), [Y]),
            ei = ee ? ` ${iN.EB}` : "",
            es = s
                ? ed.intl.string(ec.default.qqlUiW)
                : n
                  ? ed.intl.string(ec.default.mPB3eo)
                  : l
                    ? p
                        ? ed.intl.string(ec.default.knUjL3)
                        : g
                          ? ed.intl.string(ec.default.IevBEw)
                          : ed.intl.string(a ? ec.default["0BJa/0"] : ec.default.TEeU7z)
                    : ed.intl.string(ec.default.zZ9NgM),
            eo = i.useRef(0),
            eu = i.useRef(null),
            ef = i.useCallback((e) => {
                if ((eu.current?.disconnect(), null == e)) return;
                eo.current = e.clientWidth;
                let t = new ResizeObserver(() => {
                    eo.current = e.clientWidth;
                });
                (t.observe(e), (eu.current = t));
            }, []),
            em = i.useId(),
            eh = null != K,
            eg = O ?? K ?? es,
            ep = "" === b && "" !== eg;
        return (0, r.jsxs)("form", {
            onSubmit: q,
            className: iN.DA,
            children: [
                _.length > 0
                    ? (0, r.jsx)("div", {
                          className: iN.lN,
                          children: _.map((e) => (0, r.jsx)(iw, { draft: e, onRemove: L }, e.localId)),
                      })
                    : null,
                (0, r.jsx)("span", { className: `${iN.wg} ${iN.LP}${ei}`, style: er, "aria-hidden": !0 }),
                (0, r.jsx)("span", { className: `${iN.wg} ${iN.L3}${ei}`, style: er, "aria-hidden": !0 }),
                (0, r.jsxs)("div", {
                    className: iN.VA,
                    ref: J,
                    children: [
                        (0, r.jsx)("input", {
                            ref: T,
                            type: "file",
                            multiple: !0,
                            onChange: W,
                            className: iN.nY,
                            tabIndex: -1,
                            "aria-hidden": !0,
                        }),
                        (0, r.jsx)(et.Y, {
                            targetElementRef: X,
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
                                            iA.map((e) =>
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
                                            null != m
                                                ? (0, r.jsx)(en.Dr, {
                                                      id: "import-project",
                                                      label: ed.intl.string(ec.default["p/k5i7"]),
                                                      iconLeft: ic.q,
                                                      leadingAccessory: { type: "icon", icon: ic.q },
                                                      action: m,
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
                                    ref: X,
                                    type: "button",
                                    className: `${iN.Y0} ${iN.nu}`,
                                    disabled: !l,
                                    "aria-label": ed.intl.string(ed.t.d56gCa),
                                    "aria-haspopup": "menu",
                                    "aria-expanded": n,
                                    children: (0, r.jsx)(id.PlusLargeIcon, {
                                        size: "refresh_sm",
                                        color: "currentColor",
                                        className: iN.Qu,
                                    }),
                                });
                            },
                        }),
                        ep
                            ? (0, r.jsx)("div", {
                                  ref: ef,
                                  className: iN.ar,
                                  "aria-hidden": "true",
                                  children: (0, r.jsx)(iE, { text: eg, offering: eh && null == O, typed: null != O }),
                              })
                            : null,
                        (0, r.jsx)(ny.y, {
                            value: b,
                            onChange: (e) => k(e.currentTarget.value),
                            onKeyDown: H,
                            onPaste: V,
                            placeholder: ep ? "" : es,
                            disabled: !l,
                            "aria-label": ed.intl.string(ec.default.ldNl9x),
                            "aria-describedby": ep ? em : void 0,
                            rows: 1,
                            className: iN.jp,
                        }),
                        ep ? (0, r.jsx)(N.A, { id: em, children: es }) : null,
                        (0, r.jsx)("div", {
                            className: iN.Sz,
                            children:
                                a && null != u
                                    ? (0, r.jsx)(w.m, {
                                          text: ed.intl.string(ec.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, r.jsx)("button", {
                                              type: "button",
                                              className: `${iN.Y0} ${iN.$E}`,
                                              disabled: I,
                                              onClick: B,
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
                                            className: `${iN.Y0} ${iN.$E}`,
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
                                  className: iN.fF,
                                  children: [
                                      (0, r.jsx)("div", { className: iN.MT }),
                                      (0, r.jsx)("button", {
                                          type: "submit",
                                          className: iN.rt,
                                          disabled: !F,
                                          "aria-label": ed.intl.string(ec.default.rxW2cl),
                                          children: (0, r.jsx)(im.SendMessageIcon, {
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
    iM = 1500,
    iT = [
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
function i_(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = i_.mirror;
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
                (i_.mirror = t),
                t
            );
        })(),
        l = window.getComputedStyle(e);
    for (let e of iT) t.style.setProperty(e, l.getPropertyValue(e));
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let n = document.createElement("span");
    ((n.textContent = "\u200B"), t.appendChild(n));
    let a = n.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + a - e.scrollLeft);
}
i_.mirror = null;
var iP = l(52133),
    iR = l(531685),
    iL = l(155899),
    iD = l(148087);
let i$ = [6e4, 18e4, 6e5],
    iz = [
        {
            key: "outdated",
            priority: 2,
            idleDelayMs: 6e4,
            backoffDelaysMs: i$,
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
                    !(null != l.publishCta && rW(n))
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
let iO = new Map();
function iU(e) {
    return (0, f.bG)([eE.Ay, lm.A], () => {
        let t = eE.Ay.getProject(e);
        return null == t ? "" : (lm.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
function iG(e) {
    let { projectId: t, notice: l } = e;
    return "outdated" === l ? (0, r.jsx)(iB, { projectId: t }) : (0, r.jsx)(iq, { projectId: t, notice: l });
}
function iq(e) {
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
                        (a(!0), iO.get(t)?.forEach((e) => e()), l.run("outdated_notice"));
                    },
                }),
            });
}
function iK() {
    let e = ed.intl.string(ec.default.lexcBN),
        t = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = (0, f.bG)([ih.Ay], () => ih.Ay.useReducedMotion),
                [l, n] = i.useState(1);
            return (
                i.useEffect(() => {
                    if (t || e) return;
                    let l = setInterval(() => n((e) => (e % 3) + 1), 400);
                    return () => clearInterval(l);
                }, [t, e]),
                ".".repeat(t ? 3 : l)
            );
        })(!(0, iD.A)());
    return (0, r.jsxs)(y.E, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: [e, (0, r.jsx)("span", { "aria-hidden": !0, children: t })],
    });
}
var iH = l(248798);
function iV(e, t) {
    e.style.height = `${t.offsetHeight}px`;
}
function iW(e) {
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
            iV(e, t);
            let l = new ResizeObserver(() => iV(e, t));
            return (l.observe(t), () => l.disconnect());
        }, [a, s]),
        (0, r.jsx)("div", {
            ref: u,
            className: o()(iH.NI, { [iH.Jg]: null == a }),
            "aria-live": "polite",
            children: (0, r.jsx)("div", {
                className: iH.t$,
                children: n.map((e) =>
                    (0, r.jsx)(
                        "div",
                        {
                            ref: e.leaving ? void 0 : c,
                            "aria-hidden": e.leaving || void 0,
                            className: o()(iH.qd, e.leaving ? iH.cu : iH.We),
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
    iX = l(491182),
    iQ = l(438729),
    iY = l(622868),
    iZ = l(448368),
    i0 = l(837528),
    i1 = l(439762),
    i2 = l(715628),
    i3 = l(752636),
    i4 = l(9842),
    i5 = l(589022),
    i7 = l(967198),
    i6 = l(7584);
let i8 = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function i9(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function se(e, t) {
    if (t <= 0) return;
    let l = e.charCodeAt(t - 1);
    if (l >= 56320 && l <= 57343 && t >= 2) {
        let n = e.charCodeAt(t - 2);
        if (n >= 55296 && n <= 56319) return (n - 55296) * 1024 + (l - 56320) + 65536;
    }
    return l;
}
function st(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let l = e.charCodeAt(t - 1),
        n = e.charCodeAt(t);
    if (l >= 55296 && l <= 56319 && n >= 56320 && n <= 57343) return !0;
    let a = se(e, t),
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
    if (i9(a) && i9(r)) {
        let l = 0,
            n = t;
        for (; l < 32 && i9(se(e, n));) (l++, (n -= 2));
        return l % 2 == 1;
    }
    return !1;
}
function sl(e, t) {
    let { streaming: l } = t,
        n = (0, f.bG)([ih.Ay], () => ih.Ay.useReducedMotion),
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
                      for (; r > 0 && st(t, r);) r--;
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
        m = i.useRef(0);
    (i.useEffect(() => {
        if (u)
            return (
                (m.current = 0),
                (d.current = requestAnimationFrame(function e(t) {
                    let l = 0 === m.current ? 32 : t - m.current;
                    if (l >= 32) {
                        m.current = t;
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
                                    for (; n > t + 1 && l - n < 12 && i8.has(e.charAt(n - 1));) n--;
                                    return i8.has(e.charAt(n - 1)) ? l : n;
                                })(t, a, Math.min(t.length, a + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && st(t, o);) o++;
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
var sn = l(565645),
    sa = l(981879);
function sr(e) {
    let { emoji: t, label: l } = e;
    return (0, r.jsx)("div", {
        className: sa.H,
        children: (0, r.jsx)(sn.A, { emojiName: t, alt: l, size: "reaction" }),
    });
}
var si = l(624479),
    ss = l(890377),
    so = l(744898),
    su = l(180227);
function sc(e) {
    let { groupStart: t, actions: l } = e;
    return 0 === l.length
        ? null
        : (0, r.jsx)("div", {
              className: o()(su.QE, { [su.Rn]: t }),
              children: (0, r.jsx)(rS.Ay, {
                  children: l.map((e) =>
                      (0, r.jsx)(
                          rS.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function sd(e) {
    return la.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: ed.intl.string(ed.t.JrGD7E), icon: si.CopyIcon, onClick: () => (0, la.C)(e) }]
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
                          icon: ss.V,
                          onClick: () => n("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: ed.intl.string(ec.default.urZwpN),
                          icon: L.P,
                          onClick: () => n("cancel"),
                      },
                  ];
    return (0, r.jsx)(sc, { groupStart: l, actions: [...a, ...sd(t)] });
}
function sm(e) {
    let { content: t, groupStart: l, onRestoreVersion: n } = e,
        a =
            null == n
                ? []
                : [{ id: "restore-version", label: ed.intl.string(ec.default.H8Jfhu), icon: so.e, onClick: n }];
    return (0, r.jsx)(sc, { groupStart: l, actions: [...a, ...sd(t)] });
}
let sh = (0, a1.createChannelRecord)({ id: "conjure-builder", type: eb.rbe.DM }),
    sg = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function sp(e, t) {
    return null == e ? e : (0, r.jsx)("div", { className: o()(su.Yq, { [su.x1]: t }), children: e });
}
function sx(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function sv(e, t, l) {
    let { content: n } = (0, i1.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        a = i.useMemo(() => ({ message: e, channel: sh, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != l
          ? (0, r.jsx)(iQ.Ay, { className: l, message: e, content: n, compact: !1 })
          : (0, i2.A)(a, n);
}
function sj(e) {
    let [t, l] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        n = i.useCallback((e) => l((t) => ({ ...t, ...e })), []),
        a = i.useCallback(() => l({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, i0.m)(e, sh, t.usernameProfile, n),
        o = (0, i0.Jo)(t.avatarProfile, n),
        u = (0, f.bG)([i7.A], () => i7.A.getGuildId()),
        c = (0, f.bG)([tX.default], () => tX.default.getCurrentUser()),
        d = i.useCallback(
            (t) => {
                let l = tX.default.getUser(e.author.id) ?? e.author;
                return null == c ? null : (0, r.jsx)(i5.A, { ...t, user: l, currentUser: c, guildId: u ?? void 0 });
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
function sb(e) {
    let { baseMessage: t, referenced: l, selected: n, onJumpToReplied: a } = e,
        s = i.useMemo(() => {
            let e = "" !== l.content ? (0, iJ.Ay)(l, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == n
                ? e
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)("span", {
                              className: su.GV,
                              children: [
                                  (0, r.jsx)(C.x, {
                                      className: su.Rj,
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
        { isReplyAuthorBlocked: o, isReplyAuthorIgnored: u } = (0, f.cf)(
            [lp.A],
            () => ({
                isReplyAuthorBlocked: lp.A.isBlockedForMessage(l),
                isReplyAuthorIgnored: lp.A.isIgnoredForMessage(l),
            }),
            [l],
        ),
        c = (0, rN.X4)(l),
        d = (0, rN.X4)(t),
        m = sj(l);
    return (0, r.jsx)(iZ.A, {
        repliedAuthor: c,
        baseAuthor: d,
        baseMessage: t,
        channel: sh,
        referencedMessage: { state: i4.a.LOADED, message: l },
        content: s,
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
function sy(e) {
    let { message: t, author: l } = e,
        n = sj(t);
    return (0, r.jsx)(iY.Ay, {
        message: t,
        channel: sh,
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
function sk(e) {
    let { content: t, createdAt: l, userId: n, accessories: a, agentReaction: s, groupStart: o, onQueuedAction: u } = e;
    i.useEffect(() => t2(n), [n]);
    let c = (0, f.bG)(
            [tX.default],
            () => t1(n, null != n ? tX.default.getUser(n) : null, tX.default.getCurrentUser()),
            [n],
        ),
        d = i.useMemo(() => (0, rN.FT)(c, null), [c]),
        m = i.useMemo(() => e0(t), [t]),
        h = m?.body ?? t,
        g = i.useMemo(() => {
            if (null == c) return null;
            let e = (0, a0.Ay)({ channelId: sh.id, content: h, author: c });
            return (0, aZ.rh)({ ...e, timestamp: sx(l, e.timestamp), state: eb.cmJ.SENT });
        }, [h, c, l]),
        p = (function (e) {
            if (null == e || "" === e) return null;
            let t = i6.Ay.convertSurrogateToName(e, !1);
            return "" === t ? null : ed.intl.formatToPlainString(ec.default.lxXLho, { emojiName: t });
        })(s);
    return null == g
        ? null
        : (0, r.jsx)(sw, {
              message: g,
              author: d,
              content: h,
              selected: m?.label,
              accessories:
                  null != s && null != p
                      ? (0, r.jsxs)(r.Fragment, { children: [a, (0, r.jsx)(sr, { emoji: s, label: p })] })
                      : a,
              groupStart: o,
              onQueuedAction: u,
          });
}
function sw(e) {
    let { message: t, author: l, content: n, selected: a, accessories: i, groupStart: s = !0, onQueuedAction: o } = e,
        u = sv(t, n);
    return (0, r.jsx)(iX.A, {
        className: su.yE,
        author: l,
        childrenHeader: s ? (0, r.jsx)(sy, { message: t, author: l }) : void 0,
        childrenMessageContent:
            null == a
                ? u
                : (0, r.jsxs)("div", {
                      className: su.zq,
                      children: [
                          (0, r.jsxs)("span", {
                              className: su.GV,
                              children: [
                                  (0, r.jsx)(C.x, {
                                      className: su.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  a,
                              ],
                          }),
                          (0, r.jsx)("span", { className: su.WO, children: u }),
                      ],
                  }),
        childrenAccessories: sp(i, "" !== n),
        childrenButtons: (0, r.jsx)(sf, { content: n, groupStart: s, onQueuedAction: o }),
    });
}
function sN(e) {
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
        { text: d, revealing: m } = sl(t, { streaming: (0, f.bG)([iR.A], () => u && iR.A.isFocused(), [u]) }),
        h = i.useMemo(() => (0, rN.FT)(null, null), []),
        g = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        p = a?.userId,
        x = (0, f.bG)(
            [tX.default],
            () => t1(p, null != p ? tX.default.getUser(p) : null, tX.default.getCurrentUser()),
            [p],
        ),
        v = i.useMemo(() => (null == a ? null : e0(a.content)), [a]),
        j = i.useMemo(() => {
            if (null == a || null == x) return null;
            let e = (0, a0.Ay)({ channelId: sh.id, content: v?.body ?? a.content, author: x });
            return (0, aZ.rh)({ ...e, id: a.id, timestamp: sx(a.createdAt, e.timestamp), state: eb.cmJ.SENT });
        }, [a, v, x]),
        b = i.useMemo(() => (null == a ? void 0 : { channel_id: sh.id, message_id: a.id }), [a]),
        [y] = i.useState(() => (0, a0.Ay)({ channelId: sh.id, content: "", author: sg })),
        k = i.useMemo(
            () =>
                (0, aZ.rh)({
                    ...y,
                    timestamp: sx(l, y.timestamp),
                    state: eb.cmJ.SENT,
                    ...(null != b ? { type: eb.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, l, b],
        ),
        w = i.useMemo(() => k.set("content", d), [k, d]),
        N = i.useMemo(
            () => (0, i3.A)({ message: k, channel: sh, author: g, guildId: void 0, isGroupStart: o }),
            [k, g, o],
        ),
        A = sv(w, d, su.OS);
    return (0, r.jsxs)("div", {
        className: su.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": m ? "true" : void 0,
        children: [
            (0, r.jsx)(iX.A, {
                className: su.yE,
                author: g,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, r.jsx)(sb, { baseMessage: k, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: N,
                childrenMessageContent: A,
                childrenAccessories: sp(n, "" !== d),
                disableInteraction: !0,
            }),
            c,
            o
                ? (0, r.jsx)("span", {
                      className: su.st,
                      "aria-hidden": "true",
                      children: (0, r.jsx)(lk.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
let sA = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    sS = new WeakMap();
var sC = l(288539);
function sE(e, t, l) {
    return (0, r.jsx)(sC.A, { userId: e, content: `@${t}` }, l);
}
function sI(e) {
    let { projectId: t, event: l } = e,
        n = (function (e, t, l) {
            let n = t.actor_user_id;
            i.useEffect(() => t2(n), [n]);
            let a = (0, f.bG)([tX.default], () => (null == n ? null : tX.default.getUser(n)), [n]),
                r = (0, tQ.tx)(a),
                s = iU(e),
                o =
                    (0, f.bG)([Y.A], () => (null == t.guild_id ? null : Y.A.getGuild(t.guild_id)?.name), [
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
        })(t, l, sE);
    return (0, r.jsx)(y.E, { variant: "text-md/normal", color: "text-default", children: n });
}
function sM(e) {
    let { onSelect: t, onClose: l = z.Z_, onRestoreVersion: n } = e;
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
                icon: so.e,
                action: n,
            }),
        }),
    });
}
function sT(e, t, l) {
    let n = Math.max(0, Math.min(e.length, l)),
        a = Math.max(0, Math.min(n, t));
    return { start: a, end: n, startKey: e[a] ?? null, endKey: n >= e.length ? null : (e[n - 1] ?? null) };
}
function s_(e, t, l) {
    if (null == t) return l;
    let n = e.indexOf(t);
    return -1 === n ? l : n;
}
var sP = l(986109);
let sR = i.createContext(null);
function sL(e, t) {
    (0, iL.F)({ onConfirm: () => t(e) });
}
let sD = i.memo(function (e) {
        let {
                projectId: t,
                messages: l,
                emptyState: n,
                onPickIdea: a,
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
            M = (0, f.bG)([eE.Ay], () => eE.Ay.getPublishStatus(t)?.state ?? null),
            T = (0, f.bG)([tX.default], () => tX.default.getCurrentUser()?.id),
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
                            a = sS.get(n);
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
                                if (null != l.prose && sA.test(l.prose.content)) d = !0;
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
                            let f = sA.test(e.content ?? "");
                            if (
                                (!0 === e.interrupted || d || f
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
                                (r.showsClosingMessage && !f) ||
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
                        (sS.set(n, { superseded: e, planned: r }), t.push(...r));
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
                if (null == t) return sT(e, e.length - 60, e.length);
                let n = null == t.endKey,
                    a = n ? e.length : s_(e, t.endKey, t.end - 1) + 1,
                    r = s_(e, t.startKey, t.start);
                return (n && l && a - r > 120 && (r = a - 60), sT(e, r, a));
            })(P, R, p),
            $ = i.useRef(D),
            z = i.useRef(P),
            F = i.useRef(_),
            O = i.useRef(null),
            U = i.useRef(null),
            G = i.useRef(new Set()),
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
            B = i.useCallback(() => {
                let e = h.current?.getScrollerNode();
                if (null == e) return;
                let l = (function (e, t, l) {
                    let { nearTop: n, nearBottom: a, pinned: r } = l;
                    if (a && null != t.endKey) {
                        let l;
                        return ((l = Math.min(e.length, t.end + 30)), sT(e, Math.max(t.start, l - 120), l));
                    }
                    if (!n) return null;
                    if (0 === t.start) return "older";
                    if (!r && !a) {
                        let l, n;
                        return ((l = t.start - 30), (n = Math.min(t.end, Math.max(l, 0) + 120)), sT(e, l, n));
                    }
                    let i = Math.max(t.start - 30, t.end - 120);
                    return i < t.start ? sT(e, i, t.end) : null;
                })(z.current, $.current, {
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
                        B());
                },
                recordAnchor: q,
                showLatest(e) {
                    ((U.current = e ?? null), L(null));
                },
            }),
            [q, B],
        );
        let K = i.useCallback(
            (e) => {
                let t = b.current?.querySelector(`[data-conjure-message="${e}"]`);
                if (null != t) {
                    (x(), L($.current), t.scrollIntoView({ block: "center", behavior: "smooth" }), I(e));
                    return;
                }
                let l = F.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                if (-1 !== l) {
                    var n;
                    let t;
                    (x(),
                        (U.current = () => {
                            (b.current
                                ?.querySelector(`[data-conjure-message="${e}"]`)
                                ?.scrollIntoView({ block: "center" }),
                                I(e));
                        }),
                        L(((n = z.current), sT(n, (t = Math.max(0, l - 30)), t + 60))));
                }
            },
            [I, x],
        );
        i.useLayoutEffect(() => {
            if (null == k) return;
            let e = k.getBoundingClientRect().height,
                t = new ResizeObserver((t) => {
                    let [l] = t,
                        n = l?.contentRect.height;
                    null != n && n !== e && ((e = n), g.current ? h.current?.scrollToBottom() : q());
                });
            return (t.observe(k), () => t.disconnect());
        }, [k, q, h, g]);
        let H = null == D.endKey;
        (i.useEffect(() => j?.(H), [H, j]),
            i.useLayoutEffect(() => {
                (($.current = D), (z.current = P), (F.current = _));
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
                    let n = U.current;
                    ((U.current = null), n?.(), q(), B());
                }
                G.current = new Set(P);
            }, [_, P, D.start, D.end, h, g, q, B]));
        let V = l.at(-1),
            W = (function (e, t, l) {
                var n;
                let a = (0, lo.Ay)(e),
                    r = (0, iD.A)(),
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
                    [c, d] = i.useState(() => iF(u, Date.now())),
                    f = (function (e, t, l) {
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
                                let t = Math.min(e.outdatedBackoff + 1, i$.length - 1);
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
                    m =
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
                                  draftTyped: f.draftTyped && l,
                                  outdatedUpdating: f.outdatedUpdating,
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
                        let l = iO.get(e) ?? new Set();
                        return (
                            iO.set(e, l),
                            l.add(t),
                            () => {
                                (l.delete(t), 0 === l.size && iO.delete(e));
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
            })(t, l, !0 === u),
            J = i.useCallback(
                (e) => {
                    switch (e) {
                        case "outdated":
                            return (0, r.jsx)(sN, {
                                groupStart: !1,
                                content: "",
                                accessories: (0, r.jsx)(iG, { projectId: t, notice: "outdated" }),
                            });
                        case "ideas":
                            return (0, r.jsx)("div", {
                                className: sP.u$,
                                children: (0, r.jsx)(sN, {
                                    content: ed.intl.string(ec.default.s96AWB),
                                    accessories: (0, r.jsx)(r2, { onAsk: s }),
                                }),
                            });
                    }
                },
                [t, s],
            ),
            X = i.useMemo(
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
            Q = i.useMemo(
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
            Y = i.useMemo(
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
            Z = i.useMemo(
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
            ee =
                (V?.role !== "assistant" || null == V.awaitingUser || null == V.secretRequest
                    ? null
                    : (0, ek.BL)(V)
                      ? V.awaitingUser
                      : null) ?? void 0,
            et = (0, f.bG)([er.Ay], () => er.Ay.getSettings(t)?.secrets, [t]),
            el = i.useMemo(
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
                    })(l, et),
                [l, et],
            );
        if (0 === l.length) {
            if ("loading" === n)
                return (0, r.jsx)("ol", {
                    className: o()(sP.x7, sP.jH),
                    "aria-busy": !0,
                    children: (0, r.jsx)("li", { className: sP.Ub, children: (0, r.jsx)(A.y, {}) }),
                });
            let e = "unavailable" === n ? ec.default.Td4Sf4 : ec.default.V1QiNz;
            return (0, r.jsx)("ol", {
                className: sP.x7,
                children: (0, r.jsx)(sO, {
                    role: "assistant",
                    children: (0, r.jsx)(sN, { content: ed.intl.string(e) }),
                }),
            });
        }
        return (0, r.jsx)(sR.Provider, {
            value: G,
            children: (0, r.jsxs)("ol", {
                ref: N,
                className: sP.x7,
                children: [
                    _.slice(D.start, D.end).map((e) => {
                        let l = e.message;
                        if ("closing" !== e.kind)
                            return (0, r.jsx)(
                                s$,
                                {
                                    row: e,
                                    projectId: t,
                                    highlighted: "user" === e.kind && S === l.id,
                                    currentUserId: "user" === e.kind ? T : void 0,
                                },
                                e.key,
                            );
                        let n = l === V;
                        return (0, r.jsx)(
                            s$,
                            {
                                row: e,
                                projectId: t,
                                highlighted: !1,
                                replyTo: null != l.in_reply_to ? Z.get(l.in_reply_to) : void 0,
                                onJumpTo: K,
                                planVersion: Q.get(l.render_id),
                                pickedIdeaIds: Y.get(l.render_id),
                                secretRequestAwaiting: n ? ee : void 0,
                                secretRequestStatus: el.get(l.render_id),
                                settingsFloating: l.id === d,
                                isNewest: n,
                                onPickIdea: a,
                                onApprovePlan: l.render_id === X ? c : void 0,
                                onRestoreVersion: m,
                            },
                            e.key,
                        );
                    }),
                    null != ee && H
                        ? (0, r.jsx)(sO, {
                              role: "assistant",
                              continuation: !0,
                              children: (0, r.jsx)(sN, {
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
                    H
                        ? (0, r.jsx)("li", {
                              role: "none",
                              className: sP.q3,
                              children: (0, r.jsx)(iW, { reminder: W, renderReminder: J }),
                          })
                        : null,
                ],
            }),
        });
    }),
    s$ = i.memo(
        function (e) {
            let { row: t, projectId: l, highlighted: n, currentUserId: a, ...i } = e,
                s = t.message;
            switch (t.kind) {
                case "user": {
                    let e = null != s.attachments && s.attachments.length > 0 ? s.attachments : null;
                    return (0, r.jsx)(sO, {
                        rowKey: t.key,
                        role: "user",
                        anchorId: s.id,
                        highlighted: n,
                        continuation: !t.groupStart,
                        children: (0, r.jsx)(sk, {
                            groupStart: t.groupStart,
                            content: s.content,
                            createdAt: s.created_at,
                            userId: s.user_id,
                            agentReaction: s.agentReaction,
                            accessories: null != e ? (0, r.jsx)(r8.A, { projectId: l, attachments: e }) : void 0,
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
                    return (0, r.jsx)(sO, {
                        rowKey: t.key,
                        role: "assistant",
                        continuation: !t.groupStart,
                        children: (0, r.jsx)(sN, {
                            groupStart: t.groupStart,
                            content: t.content,
                            streaming: t.streaming,
                            createdAt: s.created_at,
                            accessories:
                                t.hostsAttachments && null != s.attachments
                                    ? (0, r.jsx)(r8.A, { projectId: l, attachments: s.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, r.jsx)(sO, {
                        rowKey: t.key,
                        role: "assistant",
                        children: (0, r.jsx)(ia, {
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
                    return (0, r.jsx)(sO, {
                        rowKey: t.key,
                        role: "assistant",
                        continuation: !t.groupStart,
                        children: (0, r.jsx)(sN, {
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
                    return (0, r.jsx)(sO, {
                        rowKey: t.key,
                        role: "assistant",
                        continuation: !t.groupStart,
                        children: (0, r.jsx)(sN, {
                            groupStart: t.groupStart,
                            content: null == s.projectEvent ? s.content : "",
                            createdAt: s.created_at,
                            accessories:
                                null == s.projectEvent
                                    ? void 0
                                    : (0, r.jsx)(sI, { projectId: l, event: s.projectEvent }),
                        }),
                    });
                case "interrupted":
                    return (0, r.jsx)(sO, {
                        rowKey: t.key,
                        role: "assistant",
                        children: (0, r.jsx)(ia, { projectId: l, interrupted: !0, steps: s.steps }),
                    });
                case "legacyTodos":
                    return (0, r.jsx)(sO, {
                        rowKey: t.key,
                        role: "assistant",
                        children: (0, r.jsx)(ia, {
                            projectId: l,
                            steps: sz,
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
                (0, iP.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, iP.A)(e.row, t.row, ["message"]) &&
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
                (0, iP.A)(e.replyTo, t.replyTo) &&
                (0, iP.A)(e.planVersion, t.planVersion) &&
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
        x = null != p && null != h ? () => sL(p, h) : void 0,
        v = g.in_reply_to,
        j = g.restoreProposal;
    return (0, r.jsx)(sO, {
        rowKey: t.key,
        role: "assistant",
        continuation: !t.groupStart,
        onContextMenu:
            null != x
                ? (e) => {
                      (0, z.jA)(e, (e) => (0, r.jsx)(sM, { ...e, onRestoreVersion: x }));
                  }
                : void 0,
        children: (0, r.jsx)(sN, {
            groupStart: t.groupStart,
            buttons: (0, r.jsx)(sm, { groupStart: t.groupStart, content: t.content, onRestoreVersion: x }),
            content: t.content,
            createdAt: g.created_at,
            replyTo: n,
            onJumpToReplied: null != v && null != a ? () => a(v) : void 0,
            accessories: (0, r.jsx)(ir, {
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
                onPickIdea: f,
                onApprovePlan: m,
                restoreProposal: j,
                onRestoreProposal:
                    null != j && null != h && d
                        ? () =>
                              sL(
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
function sO(e) {
    let {
            role: t,
            children: l,
            rowKey: n,
            anchorId: a,
            highlighted: s = !1,
            continuation: u = !1,
            onContextMenu: c,
        } = e,
        d = i.useContext(sR),
        [f] = i.useState(() => !iR.A.isFocused() || (null != n && d?.current.has(n) === !0));
    return (0, r.jsx)("li", {
        onContextMenu: c,
        "data-role": t,
        "data-conjure-message": a,
        "data-conjure-row-key": n,
        className: o()(sP.xk, { [sP.g5]: f, [sP.Qo]: s, [sP.q3]: u }),
        children: l,
    });
}
let sU = [ec.default["AX+5lk"], ec.default.VAU6A7, ec.default["1emysd"], ec.default.EXHX3L, ec.default.ChslmX];
function sG(e) {
    return sU.some((t) => ed.intl.string(t) === e);
}
function sq(e) {
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
function sH(e) {
    let { activity: t, id: l } = e,
        n = (0, iD.A)(),
        { text: a, revealing: s } = sl(t?.text ?? "", { streaming: n && null != t && "end" !== t.phase }),
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
                    className: o()(it.PT, sK.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: ad.A.parse(a, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var sV = l(53659);
function sW(e) {
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
        f = i.useRef(null),
        m = i.useId(),
        [h, g] = i.useState(null),
        p = (function (e) {
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
        x = ed.intl.string(p),
        v = p === sU["0"],
        [j, b] = i.useState(c ?? x),
        w = (0, iD.A)();
    (!n && (w || v)) || j === x || b(x);
    let N = i.useRef(x);
    (i.useEffect(() => {
        N.current = x;
    }, [x]),
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
        ((C.current = v), !v && sG(S.current) && b(N.current));
    }, [v]),
        i.useEffect(() => {
            if (!w) return;
            let e = 0,
                t = 0;
            function l() {
                if (C.current) {
                    var e;
                    ((E.current = sG(S.current) ? E.current + 1 : 0),
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
        targetElementRef: f,
        position: "top",
        align: "left",
        shouldShow: T,
        onRequestClose: P,
        renderPopout: () => (0, r.jsx)(sH, { id: m, activity: t }),
        children: () =>
            (0, r.jsxs)(k.D, {
                innerRef: f,
                className: o()(sV.hF, I && sV.Xd),
                "aria-label": ed.intl.string(a ? ec.default.qqlUiW : v ? sU["0"] : ec.default["Uuj/gh"]),
                "aria-expanded": T,
                "aria-describedby": T ? m : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": ed.intl.string(p),
                onClick: _,
                children: [
                    (0, r.jsx)("span", {
                        className: sV.bl,
                        children: (0, r.jsx)(sB.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, r.jsx)("span", {
                        className: sV.xu,
                        "aria-hidden": !!u || !!v || void 0,
                        children: w
                            ? (0, r.jsx)(eL.o, {
                                  ref: A,
                                  text: j,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  duration: 1e3,
                                  delay: null,
                                  className: sV.yE,
                              })
                            : (0, r.jsx)(y.E, {
                                  tag: "span",
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  className: sV.yE,
                                  children: j,
                              }),
                    }),
                ],
            }),
    });
}
let sJ = { second: 1e3, minute: 6e4 };
function sX(e) {
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
var sQ = l(719374);
function sY(e) {
    let { startedAt: t } = e,
        l = sX(t);
    return (0, r.jsx)(y.E, {
        tag: "span",
        variant: "text-xs/medium",
        color: "text-muted",
        "aria-hidden": !0,
        className: sQ.$,
        "data-conjure-turn-timer": !0,
        children: (0, af.C7)(l),
    });
}
function sZ(e) {
    let { startedAt: t } = e,
        l = sX(t, "minute");
    return (0, r.jsx)(N.A, { role: "timer", children: (0, af.Us)(l) });
}
var s0 = l(436804);
function s1(e) {
    return e.toLocaleString();
}
function s2(e) {
    let { label: t, usage: l, cached: n = !0 } = e;
    return (0, r.jsxs)("div", {
        className: s0.Q$,
        children: [
            (0, r.jsxs)("div", {
                className: s0.mf,
                children: [
                    (0, r.jsx)(y.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, r.jsxs)(y.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [s1((0, ee.aM)(l)), " tokens"],
                    }),
                ],
            }),
            (0, r.jsxs)(y.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    s1(l.input_tokens),
                    " in \xb7 ",
                    s1(l.output_tokens),
                    " out",
                    n
                        ? ` \xb7 ${s1(l.cache_creation_input_tokens)} cache write \xb7 ${s1(l.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function s3(e) {
    let { project: t } = e,
        l = (0, ee.wU)(t.compaction),
        n = (0, ee.wU)(t.classifier),
        a = (0, ee.wV)(t.orchestrator, t.codegen),
        i = (0, ee.wV)(a, l);
    return (0, r.jsxs)("div", {
        className: s0.si,
        role: "dialog",
        "aria-label": ed.intl.string(ec.default.p5EGzq),
        children: [
            (0, r.jsx)("div", {
                className: s0.Q$,
                children: (0, r.jsxs)("div", {
                    className: s0.mf,
                    children: [
                        (0, r.jsxs)(y.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [s1((0, ee.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, r.jsxs)(y.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(s2, { label: ed.intl.string(ec.default["9Sj3SX"]), usage: a }),
            (0, r.jsx)(s2, { label: ed.intl.string(ec.default.ANCEo3), usage: l }),
            (0, r.jsx)(s2, { label: ed.intl.string(ec.default.ugL6D4), usage: n, cached: !1 }),
            (0, r.jsxs)("div", {
                className: s0.mf,
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
function s4(e) {
    let { project: t } = e,
        l = i.useRef(null);
    return (0, r.jsx)(et.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, r.jsx)(s3, { project: t }),
        children: (e) =>
            (0, r.jsx)(k.D, {
                innerRef: l,
                className: s0.Y$,
                "aria-label": ed.intl.string(ec.default.Z96gxQ),
                ...e,
                children: (0, r.jsx)(aG.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var s5 = l(997421);
function s7(e) {
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
            projectUsage: f,
            connState: m,
        } = e,
        h = (0, tv.Zv)(l),
        [g, p] = i.useState(null),
        x = i.useCallback((e) => p(sG(e) || e === ed.intl.string(ec.default.mKK6wB) ? null : e), []),
        v =
            null == f
                ? null
                : ((t = (0, ee.a7)(f.cost_usd)),
                  {
                      text: ed.intl.formatToPlainString(ec.default.gMuw5d, { runes: t.toLocaleString() }),
                      aria: ed.intl.formatToPlainString(ec.default.Z4LvGa, { runes: t, turns: f.turns }),
                  }),
        j = n && null != a;
    return (0, r.jsxs)("div", {
        className: s5.jf,
        children: [
            (0, r.jsxs)("div", {
                className: s5.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    n || s || o || h || !0 === d
                        ? (0, r.jsx)(sW, {
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
                    j ? (0, r.jsx)(sY, { startedAt: a }) : null,
                ],
            }),
            j ? (0, r.jsx)(sZ, { startedAt: a }) : null,
            null == f || null == v
                ? null
                : (0, r.jsxs)("span", {
                      className: s5.BP,
                      children: [
                          (0, r.jsx)(y.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": v.aria,
                              children: v.text,
                          }),
                          (0, r.jsx)(s4, { project: f }),
                      ],
                  }),
            "open" === m
                ? null
                : (0, r.jsx)(y.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === m ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": ed.intl.formatToPlainString(ec.default["tCo+ZM"], { status: sq(m) }),
                      "data-conjure-conn": !0,
                      "data-state": m,
                      className: s5.XF,
                      children: sq(m),
                  }),
        ],
    });
}
var s6 = l(698638),
    s8 = l(608711);
let s9 = [ed.intl.string(ec.default["9w+Chc"]), ed.intl.string(ec.default.WAvmdq), ed.intl.string(ec.default.SKsrzl)];
function oe(e) {
    var t;
    let { projectId: l, restoreState: n, onRestoreVersion: a, onImportProject: s } = e,
        o = (0, f.bG)([ek.Ay], () => ek.Ay.getMessages(l), [l]),
        u = (0, f.bG)([er.Ay], () => er.Ay.getConnState(l), [l]),
        c = (0, f.bG)([er.Ay], () => er.Ay.isChatStopped(l), [l]),
        d = (0, f.bG)([ek.Ay], () => ek.Ay.getProjectUsage(l), [l]),
        m = (0, f.bG)([ek.Ay], () => ek.Ay.getThinkingActivity(l), [l]),
        h = (0, f.bG)([ek.Ay], () => ek.Ay.isCompacting(l), [l]),
        g = (0, f.bG)([ek.Ay], () => ek.Ay.isSaving(l), [l]),
        p = (0, f.bG)([er.Ay], () => er.Ay.getModelSettings(l), [l]),
        x = i.useRef(null),
        v = i.useRef(null),
        j = i.useRef(null),
        b = i.useRef(!0),
        [k, w] = i.useState(!0),
        [N, A] = i.useState(!0),
        C = i.useCallback(() => {
            ((b.current = !1), w(!1));
        }, []),
        [E, I] = i.useState(!0),
        M = i.useRef(!0),
        T = i.useCallback((e) => {
            ((M.current = e), I(e));
        }, []),
        _ = i.useCallback(() => {
            function e() {
                let e = x.current;
                if (null == e) return;
                let t = e.querySelector('[data-conjure-turn-status="true"][data-live="true"]'),
                    l = e.querySelectorAll('[data-conjure-turn-status="true"]'),
                    n = t ?? l[l.length - 1];
                if (null == n) return;
                let a = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
                n.scrollIntoView({ block: "center", behavior: a ? "auto" : "smooth" });
            }
            M.current ? e() : j.current?.showLatest(e);
        }, []),
        P = i.useCallback(() => {
            let e = v.current;
            if (null == e) return;
            let t = e.getDistanceFromBottom(),
                l = t < 32 && M.current;
            b.current = l;
            let n = t > 1 || !M.current;
            (A((e) => (!n === e ? e : !n)), w((e) => (e === l ? e : l)), j.current?.handleScroll());
        }, []);
    (i.useLayoutEffect(() => {
        let e = x.current;
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
    }, []),
        i.useEffect(() => {
            (0, er.Hc)(l);
        }, [l]),
        (0, ew.E1)(l));
    let R = te(l),
        L = i.useCallback(
            (e, t) => {
                (0, er.dv)(l, e, t);
            },
            [l],
        ),
        D = i.useCallback(
            (e, t) => {
                0 === R.annotations.length
                    ? L(e, t)
                    : (L(
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
                          })({ annotations: R.annotations, metaComment: e, context: R.context }),
                          t,
                      ),
                      e7(l));
            },
            [R, L, l],
        ),
        $ = i.useCallback(() => (0, er.fu)(l), [l]),
        z = i.useCallback((e) => nJ(l, e.implementation_prompt), [l]),
        [F, O] = (function (e) {
            let [t, l] = i.useState(() => au(e)),
                [n, a] = i.useState(e),
                r = n !== e,
                s = r ? au(e) : t;
            return (r && (a(e), l(s)), [s, l]);
        })(l),
        U = i.useCallback(() => L(ed.intl.string(ec.default["t5CN3+"])), [L]),
        G = i.useCallback((e, t, n) => nJ(l, e, { clarificationAnswers: t, attachments: n }), [l]),
        q = i.useCallback((e) => (0, er.XZ)(l, e), [l]),
        B = i.useCallback((e) => (0, er.vX)(l, e), [l]),
        K = i.useCallback((e) => iy(l, "chat", Array.from(e), B), [l, B]),
        H = i.useCallback(() => nJ(l, ed.intl.string(ec.default.Zc7gML)), [l]),
        V = n?.status === "restoring",
        W = "open" === u && !c && !V,
        J = o[o.length - 1],
        X = null != J && "assistant" === J.role && null != J.proposal,
        [Q, Y] = i.useState(null),
        Z = J?.clarification != null && J.clarification.id !== Q ? J.clarification : null,
        ee = i.useCallback(() => {
            null != Z && Y(Z.id);
        }, [Z]),
        et = (0, f.bG)([er.Ay], () => er.Ay.getSettings(l), [l]),
        [el, en] = i.useState(null),
        ea =
            null != J &&
            "assistant" === J.role &&
            null != J.settingsRequest &&
            (0, ek.BL)(J) &&
            J.id !== el &&
            ((t = J.settingsRequest),
            null != et &&
                (t.keys ?? []).some((e) => {
                    let t = et.schema.find((t) => t.key === e);
                    if (null == t) return !1;
                    if ("secret" === t.type) return et.secrets.find((t) => t.name === e)?.set !== !0;
                    let l = et.values[e];
                    return null == l || "" === l;
                }))
                ? J
                : null,
        ei = ea?.settingsRequest ?? null,
        es = i.useCallback(() => {
            null != ea && en(ea.id);
        }, [ea]),
        eo = null != ei,
        eu = (function (e) {
            let { historyLoaded: t, historyUnavailable: l, connState: n } = e;
            return l ? "unavailable" : t ? "greeting" : "failed" === n || "closed" === n ? "unavailable" : "loading";
        })({
            historyLoaded: (0, f.bG)([ek.Ay], () => ek.Ay.hasLoadedHistory(l), [l]),
            historyUnavailable: (0, f.bG)([ek.Ay], () => ek.Ay.isHistoryUnavailable(l), [l]),
            connState: u,
        }),
        ef = "loading" === eu && 0 === o.length,
        em = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < l.length; t++) e = (31 * e + l.charCodeAt(t)) % 0x7fffffff;
            return s9[e % s9.length];
        }, [l]),
        eh = X ? ed.intl.string(ec.default.Zc7gML) : "greeting" === eu && 0 === o.length ? em : null,
        eg = i.useMemo(() => {
            for (let e = o.length - 1; e >= 0; e--) {
                let t = o[e];
                if ("assistant" === t.role && !(0, ek.BL)(t)) return t;
            }
        }, [o]),
        ep = null != eg,
        ex =
            null != eg
                ? (function (e) {
                      let t = e.turn_id ?? e.steps.find((e) => null != e.turn_id)?.turn_id;
                      if (null != t && /^\d+$/.test(t)) {
                          let e = al.default.extractTimestamp(t);
                          if (Number.isFinite(e) && e > 0) return e;
                      }
                      return e.created_at;
                  })(eg)
                : void 0,
        ev = X && W ? H : void 0,
        ej = i.useCallback(() => nJ(l, ed.intl.string(ec.default.EMgIuY)), [l]),
        [eb, ey] = i.useState(null),
        [eN, eA] = i.useState(ep);
    (eN !== ep && (eA(ep), ep || ey(null)),
        i.useEffect(() => {
            if (!ep) return;
            let e = v.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let l = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? ey(null)
                        : ey(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (l.observe(t), () => l.disconnect());
        }, [ep, eg?.steps, E]));
    let eS = E ? eb : "bottom",
        eC = i.useMemo(() => (null != eg ? (0, ne.b)(eg.steps) : ""), [eg]),
        eE = i.useMemo(() => (null != eg ? ((0, l8.lt)(eg.steps) ?? eg.todos) : void 0), [eg]),
        eI = eg?.provisionalTodo,
        eM = null != eg && l9(eg),
        eT = i.useMemo(() => {
            var e;
            return null != eg ? ((e = eg.steps), il((0, l8.Jf)(e, !0).tasks)) : void 0;
        }, [eg]);
    return (0, r.jsxs)("section", {
        ref: x,
        "data-conjure-chat": !0,
        className: s8.TE,
        children: [
            W
                ? (0, r.jsx)(l6.A, {
                      title: ed.intl.string(ec.default.gy7byi),
                      description: ed.intl.string(ec.default["dkv/WO"]),
                      icons: s6.ir,
                      onDrop: K,
                  })
                : null,
            (0, r.jsx)(nv, {
                onJumpToActivity: _,
                line: eC,
                placement: ep && "top" === eS ? "top" : null,
                todos: eE,
                todosLive: eM,
                provisionalTodo: eI,
                agents: eT,
            }),
            (0, r.jsxs)("div", {
                className: s8.JX,
                children: [
                    (0, r.jsx)(l7.Ch, {
                        ref: v,
                        onScroll: P,
                        scrollbarGutter: ef ? "both-edges" : "stable",
                        className: [s8.N$, N ? null : s8.hB, eo ? s8.J9 : null].filter(Boolean).join(" "),
                        children: (0, r.jsx)(sD, {
                            projectId: l,
                            messages: o,
                            emptyState: eu,
                            floatingSettingsMessageId: ea?.id,
                            onPickIdea: W ? z : void 0,
                            onAskForIdeas: W ? U : void 0,
                            draftHasText: F,
                            onApprovePlan: W ? ej : void 0,
                            onRestoreVersion: V || ep ? void 0 : a,
                            scrollerRef: v,
                            stickToBottomRef: b,
                            pinned: k,
                            onUnpin: C,
                            handleRef: j,
                            onShowsLatestChange: T,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: s8.NJ,
                        children: (0, r.jsx)(s7, {
                            projectId: l,
                            thinking: ep,
                            turnStartedAt: ex,
                            restoring: V,
                            recalling: ef,
                            thinkingActivity: m,
                            compacting: h,
                            saving: g,
                            projectUsage: d,
                            connState: u,
                        }),
                    }),
                    null == Z
                        ? null
                        : (0, r.jsx)("div", {
                              className: eo ? `${s8.B5} ${s8.J9}` : s8.B5,
                              children: (0, r.jsx)(
                                  n8,
                                  { projectId: l, clarification: Z, onSubmit: W ? G : void 0, onDismiss: ee },
                                  Z.id,
                              ),
                          }),
                    null == ei
                        ? null
                        : (0, r.jsx)("div", {
                              className: s8.B5,
                              children: (0, r.jsx)(at, { projectId: l, request: ei, onDismiss: es }, ea?.id),
                          }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: s8.Jx,
                children: [
                    (0, r.jsx)(nv, {
                        onJumpToActivity: _,
                        line: eC,
                        placement: ep && "bottom" === eS ? "bottom" : null,
                        todos: eE,
                        todosLive: eM,
                        provisionalTodo: eI,
                        agents: eT,
                    }),
                    0 === R.annotations.length
                        ? null
                        : (0, r.jsxs)("div", {
                              className: s8.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, r.jsx)(y.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: ed.intl.formatToPlainString(ec.default["7b49dS"], {
                                          count: R.annotations.length,
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
                    (0, r.jsx)(iI, {
                        projectId: l,
                        canSend: W,
                        stopped: c,
                        running: ep,
                        restoring: V,
                        onSend: D,
                        hasPendingContext: R.annotations.length > 0,
                        onInterrupt: W ? $ : void 0,
                        onUploadFile: B,
                        onImport: s,
                        onApprove: ev,
                        suggestion: eh,
                        questionOpen: null != Z || null != ei,
                        modelSettings: p,
                        onModelSettingsChange: q,
                        onDraftHasTextChange: O,
                    }),
                ],
            }),
        ],
    });
}
var ot = l(761508),
    ol = l(540999);
let on = [],
    oa = [],
    or = new Map(),
    oi = new Map(),
    os = new Map(),
    oo = new Map(),
    ou = new Map(),
    oc = new Map(),
    od = new Map(),
    of = new Map();
class om extends f.Ay.Store {
    getStatus(e) {
        return or.get(e) ?? null;
    }
    getFetchState(e) {
        return oi.get(e) ?? "idle";
    }
    getLastCompaction(e) {
        return oo.get(e) ?? null;
    }
    getLastTurnUsage(e) {
        return oc.get(e) ?? null;
    }
    getLastCompactionDecline(e) {
        return ou.get(e) ?? null;
    }
    getModelCalls(e) {
        return od.get(e) ?? on;
    }
    getForceCompactionState(e) {
        return os.get(e) ?? "idle";
    }
    getTimingTraces(e) {
        return of.get(e) ?? oa;
    }
    getTimingTrace(e, t) {
        return of.get(e)?.find((e) => e.id === t) ?? null;
    }
}
let oh = new om(nR.h, {
    LOGOUT: function () {
        if (
            0 === or.size &&
            0 === oi.size &&
            0 === os.size &&
            0 === oo.size &&
            0 === ou.size &&
            0 === oc.size &&
            0 === od.size &&
            0 === of.size
        )
            return !1;
        (or.clear(), oi.clear(), os.clear(), oo.clear(), ou.clear(), oc.clear(), od.clear(), of.clear());
    },
    CONJURE_DEBUG_STATUS_REQUESTED: function (e) {
        let { projectId: t } = e;
        oi.set(t, "loading");
    },
    CONJURE_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: l } = e;
        if ("open" === l) return !1;
        let n = "pending" === os.get(t);
        n &&
            os.set(t, {
                outcome: "failed",
                reason: "Connection lost before the worker answered",
                observedAt: new Date().toISOString(),
            });
        let a = "loading" === oi.get(t);
        if ((a && oi.set(t, "failed"), !n && !a)) return !1;
    },
    CONJURE_DEBUG_STATUS_SET: function (e) {
        let { projectId: t, status: l, failed: n } = e;
        n || null == l ? oi.set(t, "failed") : (or.set(t, l), oi.set(t, "loaded"));
    },
    CONJURE_DEBUG_COMPACTION_REPORT: function (e) {
        oo.set(e.projectId, {
            tokensBefore: e.tokensBefore,
            tokensAfter: e.tokensAfter,
            retainedMessages: e.retainedMessages,
            promptCeiling: e.promptCeiling,
            observedAt: e.observedAt,
        });
    },
    CONJURE_DEBUG_COMPACTION_DECLINED: function (e) {
        ou.set(e.projectId, {
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
        os.set(t, "pending");
    },
    CONJURE_DEBUG_FORCE_COMPACTION_RESULT: function (e) {
        os.set(e.projectId, {
            outcome: e.outcome,
            reason: e.reason,
            ...(!0 === e.pendingTurn ? { pendingTurn: !0 } : {}),
            observedAt: e.observedAt,
        });
    },
    CONJURE_DEBUG_MODEL_CALL: function (e) {
        let t = od.get(e.projectId);
        if (null != t && t.some((t) => t.id === e.id)) return !1;
        let l = {
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
            n = null == t ? [l] : t.concat(l);
        od.set(e.projectId, n.length > 200 ? n.slice(-200) : n);
    },
    CONJURE_DEBUG_TIMING_TRACE: function (e) {
        let { projectId: t, trace: l } = e,
            n = (of.get(t) ?? [])
                .filter((e) => e.id !== l.id)
                .concat(l)
                .sort((e, t) => e.started_at - t.started_at);
        of.set(t, n.slice(-100));
    },
    CONJURE_CHAT_USAGE_SET: function (e) {
        let { projectId: t, turn: l } = e;
        if (0 === (0, ee.aM)(l.total)) return !1;
        oc.set(t, l);
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        (or.delete(t),
            oi.delete(t),
            os.delete(t),
            oo.delete(t),
            ou.delete(t),
            oc.delete(t),
            od.delete(t),
            of.delete(t));
    },
});
function og(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function op(e) {
    if (e < 1e3) return String(e);
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function ox(e) {
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
var ov = l(536113);
let oj = { started: ov.Vf, ok: ov.mo, error: ov.Sr };
function ob(e) {
    let { status: t } = e;
    return (0, r.jsx)("span", {
        className: `${ov.Om} ${oj[t] ?? ov.Vf}`,
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
function oy(e, t) {
    return String(e).padStart(t, "0");
}
function ok(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let l = Date.parse(e);
    if (Number.isNaN(l)) return null;
    let n = new Date(l),
        a = `${oy(n.getHours(), 2)}:${oy(n.getMinutes(), 2)}:${oy(n.getSeconds(), 2)}`;
    return "millis" === t ? `${a}.${oy(n.getMilliseconds(), 3)}` : a;
}
let ow = ["op", "model", "tool", "setup", "worktree", "sandbox", "build", "platform", "other"],
    oN = {
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
function oA(e) {
    return e.spans.find((e) => null == e.parent) ?? null;
}
function oS(e) {
    return { collapsed: o_(e, (e) => e.depth > 0 && !e.children.some((e) => e.significant)), revealed: new Set() };
}
function oC(e, t) {
    let l = null;
    return (
        oM(e, (e) => {
            e.key === t && (l = e);
        }),
        l
    );
}
function oE(e) {
    return null == e
        ? ""
        : Object.entries(e)
              .map((e) => {
                  let [t, l] = e;
                  return !0 === l ? t : `${t}=${String(l)}`;
              })
              .join(" ");
}
function oI(e) {
    return e.count > 1 ? e.totalMs : e.end - e.start;
}
function oM(e, t) {
    for (let l of (t(e), e.children)) oM(l, t);
}
function oT(e) {
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
        category: oN[l] ?? "other",
    };
}
function o_(e, t) {
    let l = new Set();
    return (
        !(function e(n) {
            for (let a of (n.children.length > 0 && t(n) && l.add(n.key), n.children)) e(a);
        })(e),
        l
    );
}
function oP(e) {
    return `${e.name} ${oE(e.attrs)}`;
}
function oR(e) {
    let t = new Map();
    for (let l of e.spans) {
        let e = t.get(l.parent) ?? [];
        (e.push(l), t.set(l.parent, e));
    }
    for (let e of t.values()) e.sort((e, t) => e.start - t.start);
    return t;
}
function oL(e, t) {
    return t.end ?? e.reported_at;
}
function oD(e, t, l, n) {
    let a = t
            .map((t) => [Math.max(t.start, l), Math.min(oL(e, t), n)])
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
let o$ = {
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
function oz(e) {
    return og(Math.round(e));
}
function oF(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function oO(e) {
    return oz(e.count > 1 ? e.totalMs : e.end - e.start);
}
function oU(e) {
    let t = oA(e)?.end;
    return null == t ? null : og(t);
}
function oG(e) {
    return [ok(new Date(e.started_at).toISOString()) ?? "", oF(e.spans.length), oE(oA(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
var oq = l(738188),
    oB = l(430993),
    oK = l(364840),
    oH = l(224640),
    oV = l(20742);
let oW = { collapsed: new Set(), revealed: new Set() };
var oJ = l(872892);
let oX = {
    op: oJ.Q,
    model: oJ.i3,
    tool: oJ.dH,
    setup: oJ.kc,
    worktree: oJ.Qx,
    sandbox: oJ.QH,
    build: oJ.F1,
    platform: oJ.Op,
    other: oJ.fv,
};
function oQ(e) {
    return `conjure-perf-trace-${e}`;
}
function oY(e) {
    let { start: t, end: l, extent: n, barClass: a, duration: i } = e,
        s = (t / n) * 100,
        o = ((l - t) / n) * 100;
    return (0, r.jsxs)("div", {
        className: oJ.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(o) },
        children: [
            (0, r.jsx)("div", { className: a }),
            (0, r.jsx)(y.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${oJ.p0} ${s + o > 85 ? oJ.EU : oJ.jh}`,
                children: i,
            }),
        ],
    });
}
function oZ(e) {
    let { node: t, extent: l, collapsed: n, selected: a, onSelect: s, onToggle: o, onExpandSubtree: u } = e,
        c = t.children.length > 0,
        d = n ? ti._ : tB.a,
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
    return (0, r.jsxs)(k.D, {
        tag: "div",
        role: "treeitem",
        id: oQ(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !n : void 0,
        "aria-selected": a,
        className: `${oJ.$y} ${a ? oJ.wQ : ""}`,
        onClick: f,
        children: [
            (0, r.jsxs)("div", {
                className: oJ.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, r.jsx)(k.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: oJ.ai,
                              onClick: m,
                              children: (0, r.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, r.jsx)("span", { className: oJ.YJ }),
                    (0, r.jsx)(y.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: oJ.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, r.jsx)("span", { className: `${oJ.nf} ${oX[t.category]}` }),
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        className: oJ.eu,
                        children: t.service,
                    }),
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: oJ.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, r.jsx)(y.E, {
                              variant: "text-xs/semibold",
                              color: "text-default",
                              className: oJ.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, r.jsx)(oq.WarningIcon, { size: "xs", color: "currentColor", className: oJ.ik })
                        : null,
                ],
            }),
            (0, r.jsx)(oY, {
                start: t.start,
                end: t.end,
                extent: l,
                barClass: t.failed
                    ? `${oJ.M0} ${oJ.Nh}`
                    : t.running
                      ? `${oJ.M0} ${oJ.rF}`
                      : `${oJ.M0} ${oX[t.category]}`,
                duration: oO(t),
            }),
        ],
    });
}
function o0(e) {
    let { row: t, extent: l, selected: n, onReveal: a } = e;
    return (0, r.jsxs)(k.D, {
        tag: "div",
        role: "treeitem",
        id: oQ(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": n,
        className: `${oJ.$y} ${n ? oJ.wQ : ""}`,
        onClick: () => a(t.parentKey),
        children: [
            (0, r.jsxs)("div", {
                className: oJ.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, r.jsx)("span", {
                        className: oJ.ai,
                        children: (0, r.jsx)(ti._, { size: "xs", color: "currentColor" }),
                    }),
                    (0, r.jsx)("span", { className: oJ.U9 }),
                    (0, r.jsx)("span", { className: `${oJ.nf} ${oJ.dL}` }),
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: oJ.MQ,
                        children: oF(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, r.jsx)(oY, {
                start: t.start,
                end: t.end,
                extent: l,
                barClass: `${oJ.M0} ${oJ.ab} ${oJ.dL}`,
                duration: oz(t.totalMs),
            }),
        ],
    });
}
function o1(e) {
    let { node: t } = e;
    return null == t
        ? (0, r.jsx)(y.E, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, r.jsxs)("div", {
              className: oJ._0,
              children: [
                  (0, r.jsxs)("div", {
                      className: oJ.TQ,
                      children: [
                          (0, r.jsx)("span", { className: `${oJ.nf} ${oX[t.category]}` }),
                          (0, r.jsx)(y.E, { variant: "text-sm/semibold", color: "text-strong", children: t.service }),
                          (0, r.jsx)(y.E, { variant: "text-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [
                          { label: "Start", value: `+${oz(e.start)}` },
                          { label: "Duration", value: oO(e) },
                      ];
                      for (let [l, n] of (e.count > 1
                          ? t.push(
                                { label: "Calls", value: String(e.count) },
                                { label: "Longest call", value: oz(e.maxMs) },
                                { label: "Spread over", value: oz(e.end - e.start) },
                            )
                          : e.children.length > 0 && t.push({ label: "Self time", value: oz(e.selfMs) }),
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
function o2(e) {
    let { trace: t } = e,
        l = (function (e) {
            let t = i.useMemo(
                    () =>
                        null == e
                            ? null
                            : (function (e) {
                                  let t = oR(e);
                                  function l(e) {
                                      return !t.has(e.id) && null != e.end && null == e.error;
                                  }
                                  let n = oA(e);
                                  if (null == n) return null;
                                  let a = (function n(a, r, i, s) {
                                          let o = a[0],
                                              u = Math.min(...a.map((e) => e.start)),
                                              c = Math.max(...a.map((t) => oL(e, t))),
                                              d = a.map((t) => oL(e, t) - t.start),
                                              f = 1 === a.length ? (t.get(o.id) ?? []) : [],
                                              m = {
                                                  key: 1 === a.length ? `span-${o.id}` : `fold-${o.id}`,
                                                  depth: r,
                                                  span: o,
                                                  count: a.length,
                                                  start: u,
                                                  end: c,
                                                  totalMs: d.reduce((e, t) => e + t, 0),
                                                  maxMs: Math.max(...d),
                                                  selfMs: c - u - oD(e, f, u, c),
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
                                                              r.start < oL(n, i) && i.start < oL(n, r))
                                                          );
                                                      }),
                                                  ),
                                                  outlivedParent: c > s,
                                                  ...oT(o),
                                                  significant: !1,
                                                  children: [],
                                                  descendants: 0,
                                              },
                                              h = new Map();
                                          for (let e of f) l(e) && h.set(oP(e), (h.get(oP(e)) ?? 0) + 1);
                                          let g = new Set();
                                          for (let e of f) {
                                              let t = oP(e);
                                              if (l(e) && (h.get(t) ?? 0) >= 4) {
                                                  if (g.has(t)) continue;
                                                  g.add(t);
                                                  let e = f.filter((e) => l(e) && oP(e) === t);
                                                  m.children.push(n(e, r + 1, f, c));
                                              } else m.children.push(n([e], r + 1, f, c));
                                          }
                                          return (
                                              (m.descendants = m.children.reduce(
                                                  (e, t) => e + t.count + t.descendants,
                                                  0,
                                              )),
                                              m
                                          );
                                      })([n], 0, [], 1 / 0),
                                      r = 0.1 * (a.end - a.start);
                                  return (
                                      oM(a, (e) => {
                                          e.significant = oI(e) >= r;
                                      }),
                                      a
                                  );
                              })(e),
                    [e],
                ),
                [l, n] = i.useState(() => (null == t ? oW : oS(t))),
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
                                            totalMs: r.reduce((e, t) => e + oI(t), 0),
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
                        let l = null == t ? null : oC(t, e);
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
                        let l = null == t ? null : oC(t, e);
                        null != l &&
                            n((e) => {
                                let t, n;
                                return (
                                    (t = new Set(e.collapsed)),
                                    (n = new Set(e.revealed)),
                                    oM(l, (e) => {
                                        (t.delete(e.key), n.add(e.key));
                                    }),
                                    { collapsed: t, revealed: n }
                                );
                            });
                    },
                    [t],
                ),
                d = i.useCallback(() => {
                    null != t && n({ collapsed: new Set(), revealed: o_(t, () => !0) });
                }, [t]),
                f = i.useCallback(() => {
                    null != t && n({ collapsed: o_(t, (e) => e.depth > 0), revealed: new Set() });
                }, [t]),
                m = i.useCallback(() => {
                    null != t && n(oS(t));
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
                collapseAll: f,
                reset: m,
            };
        })(t),
        { rows: n, collapsed: a, selected: s, selectedKey: o, select: u, toggle: c, reveal: d, expandSubtree: f } = l,
        m = Math.max(1, ...t.spans.map((e) => oL(t, e))),
        h = i.useMemo(
            () =>
                (function (e) {
                    let t = e / 6,
                        l = 10 ** Math.floor(Math.log10(t)),
                        n = [1, 2, 5, 10].map((e) => e * l).find((e) => e >= t) ?? t,
                        a = [];
                    for (let t = 0; t <= e; t += n) a.push(t);
                    return a;
                })(m),
            [m],
        ),
        g = i.useMemo(
            () =>
                (function (e) {
                    let t = oR(e),
                        l = new Map();
                    for (let n of e.spans) {
                        if (null == n.parent) continue;
                        let a = oL(e, n),
                            r = a - n.start - oD(e, t.get(n.id) ?? [], n.start, a),
                            { service: i, operation: s } = oT(n),
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
        p = h.length > 1 ? ((h[1] - h[0]) / m) * 100 : 100,
        x = i.useCallback(
            (e) => {
                let t,
                    l = n.findIndex((e) => e.key === o),
                    r = n[l];
                if ("ArrowDown" === e.key) t = n[Math.min(n.length - 1, l + 1)];
                else if ("ArrowUp" === e.key) t = n[Math.max(0, l - 1)];
                else if (null == r) return;
                else if ("smaller" === r.kind && ("ArrowRight" === e.key || "Enter" === e.key)) d(r.parentKey);
                else if ("node" === r.kind && "ArrowRight" === e.key && e.shiftKey) f(r.key);
                else if ("node" === r.kind && "ArrowRight" === e.key && a.has(r.key)) c(r.key);
                else {
                    if ("node" !== r.kind || "ArrowLeft" !== e.key || !(r.node.children.length > 0) || a.has(r.key))
                        return;
                    c(r.key);
                }
                (e.preventDefault(),
                    null != t && (u(t.key), document.getElementById(oQ(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [a, f, d, n, u, o, c],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(oB.c, {
                children: [
                    (0, r.jsxs)("div", {
                        className: oJ.z,
                        children: [
                            (0, r.jsx)(y.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: oU(t) ?? "still running",
                            }),
                            (0, r.jsx)(y.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: oG(t),
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
                                      children: `${oF(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: oJ.KE,
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
                                className: oJ.o1,
                                children: ow.map((e) =>
                                    (0, r.jsxs)(
                                        "span",
                                        {
                                            className: oJ.fI,
                                            children: [
                                                (0, r.jsx)("span", { className: `${oJ.nf} ${oX[e]}` }),
                                                (0, r.jsx)(y.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: o$[e],
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
                        "aria-activedescendant": null == o ? void 0 : oQ(o),
                        className: oJ.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(p) },
                        onKeyDown: x,
                        children: [
                            (0, r.jsxs)("div", {
                                className: oJ.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: oJ.So,
                                        children: (0, r.jsx)(y.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, r.jsx)("div", {
                                        className: oJ.c1,
                                        children: h.map((e) =>
                                            (0, r.jsx)(
                                                y.E,
                                                {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${oJ.io} ${(e / m) * 100 > 85 ? oJ.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / m) * 100),
                                                    },
                                                    children: 0 === e ? "0" : oz(e),
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
                                          oZ,
                                          {
                                              node: e.node,
                                              extent: m,
                                              collapsed: a.has(e.key),
                                              selected: e.key === o,
                                              onSelect: u,
                                              onToggle: c,
                                              onExpandSubtree: f,
                                          },
                                          e.key,
                                      )
                                    : (0, r.jsx)(o0, { row: e, extent: m, selected: e.key === o, onReveal: d }, e.key),
                            ),
                        ],
                    }),
                    0 === g.length
                        ? null
                        : (0, r.jsxs)("div", {
                              className: oJ.xZ,
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
                                              children: `${t} ${oz(l)}`,
                                          },
                                          t,
                                      );
                                  }),
                              ],
                          }),
                ],
            }),
            (0, r.jsx)(oK.j, { children: (0, r.jsx)(o1, { node: s }) }),
        ],
    });
}
function o3(e) {
    let { transitionState: t, onClose: l, projectId: n, traceId: a } = e,
        i = (0, f.bG)([oh], () => oh.getTimingTrace(n, a), [n, a]),
        s = i?.name ?? "Perf Trace";
    return (0, r.jsxs)(oH.d, {
        transitionState: t,
        onClose: l,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, r.jsx)(oV.rQ, { title: s }),
            null == i
                ? (0, r.jsx)(oB.c, {
                      children: (0, r.jsx)(y.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, r.jsx)(o2, { trace: i }),
        ],
    });
}
function o4(e) {
    let { projectId: t, trace: l } = e,
        n = l.spans.find((e) => null != e.error)?.error,
        a = i.useCallback(() => {
            (0, tt.openModal)((e) => (0, r.jsx)(o3, { ...e, projectId: t, traceId: l.id }));
        }, [t, l.id]);
    return (0, r.jsxs)(k.D, {
        className: oJ.nM,
        onClick: a,
        children: [
            (0, r.jsxs)("div", {
                className: oJ.sU,
                children: [
                    (0, r.jsx)(ob, {
                        status:
                            l.spans.some((e) => null != e.error) || oA(l)?.attrs?.ok === !1
                                ? "error"
                                : l.spans.some((e) => null == e.end)
                                  ? "started"
                                  : "ok",
                    }),
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        className: oJ._k,
                        children: l.name,
                    }),
                    (0, r.jsx)(y.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: oU(l) ?? "still running",
                    }),
                ],
            }),
            (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-muted", tabularNumbers: !0, children: oG(l) }),
            null == n
                ? null
                : (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: n }),
        ],
    });
}
function o5(e) {
    let { projectId: t } = e,
        l = (0, f.yK)([oh], () => oh.getTimingTraces(t), [t]),
        n = i.useMemo(() => [...l].reverse(), [l]);
    return 0 === l.length
        ? (0, r.jsxs)("div", {
              className: oJ.Ie,
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
              className: oJ.nd,
              children: (0, r.jsx)(l7.Ch, {
                  className: oJ.XG,
                  children: (0, r.jsx)("ul", {
                      className: oJ.p_,
                      "aria-label": "Perf traces",
                      children: n.map((e) =>
                          (0, r.jsx)("li", { children: (0, r.jsx)(o4, { projectId: t, trace: e }) }, e.id),
                      ),
                  }),
              }),
          });
}
function o7(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let l = t / 1024;
    if (l < 1024) return `${l >= 100 ? Math.round(l) : l.toFixed(1)} MB`;
    let n = l / 1024;
    return `${n >= 100 ? Math.round(n) : n.toFixed(1)} GB`;
}
function o6(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function o8(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function o9(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = String(t.getHours()).padStart(2, "0"),
        n = String(t.getMinutes()).padStart(2, "0"),
        a = String(t.getSeconds()).padStart(2, "0");
    return `${l}:${n}:${a}`;
}
function ue(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = new Date();
    return t.getFullYear() === l.getFullYear() && t.getMonth() === l.getMonth() && t.getDate() === l.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function ut(e) {
    let t = e.split("/").filter((e) => "" !== e),
        l = t[t.length - 1] ?? e;
    return l.length > 12 ? l.slice(0, 12) : l;
}
function ul(e) {
    return ed.intl.string("preview" === e ? ec.default["2yLYlG"] : ec.default.eiAi57);
}
let un = ["all", "preview", "stable", "web"],
    ua = new Set(["error", "aborted", "length"]);
function ur(e) {
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
function ui(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : ed.intl.formatToPlainString(ec.default["XO/bN4"], {
              p50: o7(e.memory_p50_bytes ?? 0),
              p999: o7(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let us = {
    db: () => ec.default["7l+DFG"],
    db_preview: () => ec.default.FAuffi,
    runtime: () => ec.default["Gkl+ab"],
    runtime_preview: () => ec.default.ynpJzv,
    bot: () => ec.default["5/i0cj"],
    bot_preview: () => ec.default.m2jsnw,
};
var uo = l(911608),
    uu = l(177427);
function uc(e) {
    let { generatedAt: t, fetchState: l, onRefresh: n } = e;
    return (0, r.jsxs)("div", {
        className: uu.KE,
        children: [
            (0, r.jsx)("div", {
                className: uu.IQ,
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
                                  children: ed.intl.formatToPlainString(ec.default.INVO50, { time: ue(t) }),
                              })
                            : null,
            }),
            (0, r.jsx)(S.$, { variant: "secondary", size: "sm", text: ed.intl.string(ec.default.oKEgiu), onClick: n }),
        ],
    });
}
function ud(e) {
    let { title: t, children: l } = e;
    return (0, r.jsxs)("section", {
        className: uu.uW,
        "aria-label": t,
        children: [
            (0, r.jsx)(y.E, { variant: "text-xs/semibold", color: "text-muted", className: uu.Gf, children: t }),
            l,
        ],
    });
}
function uf(e) {
    let { label: t, value: l, hint: n, critical: a = !1 } = e;
    return (0, r.jsxs)("div", {
        className: uu.N8,
        children: [
            (0, r.jsxs)("div", {
                className: uu.x7,
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
function um(e) {
    let { label: t, used: l, max: n, formatValue: a } = e,
        i = n > 0 ? Math.min(1, Math.max(0, l / n)) : 0,
        s = i >= 0.9;
    return (0, r.jsxs)("div", {
        className: uu.N8,
        children: [
            (0, r.jsxs)("div", {
                className: uu.x7,
                children: [
                    (0, r.jsx)(y.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${a(l)} / ${a(n)}`,
                    }),
                ],
            }),
            (0, r.jsx)(uo.z, {
                value: 100 * i,
                valueLabel: `${a(l)} of ${a(n)}`,
                "aria-label": t,
                className: s ? uu.dh : void 0,
            }),
        ],
    });
}
function uh(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, r.jsx)(uf, {
            label: ed.intl.string(ec.default.SXP7pD),
            value: ed.intl.string(ec.default.E5hKVi),
            hint: ur(t),
        });
    let l = t.objects?.find((e) => "agent" === e.role);
    if (null == l)
        return (0, r.jsx)(uf, {
            label: ed.intl.string(ec.default.SXP7pD),
            value: "\u2014",
            hint: ed.intl.string(ec.default.AGvoMJ),
        });
    let n = ui(l);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(uf, { label: ed.intl.string(ec.default["H/X+FI"]), value: o6(l.cpu_ms) }),
            null != n && (0, r.jsx)(uf, { label: ed.intl.string(ec.default.lmFmMO), value: n }),
        ],
    });
}
function ug(e) {
    let { analytics: t } = e,
        l = ed.intl.string(ec.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, r.jsx)(ud, {
            title: l,
            children: (0, r.jsx)(y.E, { variant: "text-sm/normal", color: "text-muted", children: ur(t) }),
        });
    let n = (t.objects ?? [])
        .map((e) => {
            var t;
            let l;
            return {
                object: e,
                label: null != (l = "agent" !== (t = e.role) ? us[t] : null) ? ed.intl.string(l()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, r.jsx)(ud, {
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
                          uf,
                          {
                              label: l,
                              value: ed.intl.formatToPlainString(ec.default["w/2voO"], { cpu: o6(t.cpu_ms) }),
                              hint: ui(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var up = l(400154);
let ux = [];
function uv(e) {
    let t,
        { call: l } = e,
        { text: n, bad: a } =
            ((t = null != l.stopReason && ua.has(l.stopReason)),
            {
                text: [
                    null != l.durationMs ? o6(l.durationMs) : null,
                    `${o8(l.inputTokens + l.cacheReadTokens + l.cacheWriteTokens)} \u{2192} ${o8(l.outputTokens)}`,
                    t ? l.stopReason : null,
                ]
                    .filter((e) => null != e)
                    .join(" \xb7 "),
                bad: t,
            });
    return (0, r.jsxs)("div", {
        className: up.p5,
        children: [
            (0, r.jsx)(y.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: up.Q5,
                children: o9(l.observedAt),
            }),
            (0, r.jsxs)(y.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-default",
                className: up.qN,
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
function uj(e, t) {
    return (0, r.jsx)(uf, {
        label: e,
        value: ed.intl.formatToPlainString(ec.default.yHJxuP, { count: o8((0, ee.aM)(t)) }),
        hint: `${o8(t.input_tokens)} in \xb7 ${o8(t.output_tokens)} out \xb7 ${o8(t.cache_read_input_tokens)} cache read`,
    });
}
function ub(e) {
    let { projectId: t, status: l, fetchState: n, onRefresh: a, traceVisible: s = !1 } = e,
        o = (0, f.bG)([oh], () => oh.getLastTurnUsage(t), [t]),
        u = (0, f.bG)([oh], () => oh.getLastCompaction(t), [t]),
        c = (0, f.bG)([oh], () => oh.getLastCompactionDecline(t), [t]),
        d = (0, f.bG)([oh], () => oh.getForceCompactionState(t), [t]),
        m = i.useCallback(() => (0, er.Lj)(t), [t]),
        h = i.useCallback(() => (0, er.Lj)(t, !0), [t]),
        g = (0, f.bG)([oh], () => (s ? ux : oh.getModelCalls(t)), [t, s]),
        p = l?.agent?.lifetime ?? null,
        x = l?.agent?.limits ?? null,
        v = l?.agent?.session ?? null,
        j = u?.promptCeiling ?? x?.context_window_tokens ?? null;
    return (0, r.jsxs)("div", {
        className: up.Mf,
        children: [
            (0, r.jsx)(uc, { generatedAt: l?.generated_at ?? null, fetchState: n, onRefresh: a }),
            (0, r.jsx)(ud, {
                title: ed.intl.string(ec.default.JghNal),
                children:
                    null == p
                        ? (0, r.jsx)(y.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: ed.intl.string(ec.default.s0U5Fv),
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(uf, {
                                      label: ed.intl.string(ec.default["9nqym2"]),
                                      value: o8((0, ee.a7)(p.cost_usd)),
                                      hint: ed.intl.formatToPlainString(ec.default.NCdUIh, { count: o8(p.turns) }),
                                  }),
                                  uj(ed.intl.string(ec.default.xtxP0e), p.orchestrator),
                                  uj(ed.intl.string(ec.default["9Sj3SX"]), p.codegen),
                                  uj(ed.intl.string(ec.default.ANCEo3), (0, ee.wU)(p.compaction)),
                                  l?.agent?.outcomes != null &&
                                      Object.keys(l.agent.outcomes).length > 0 &&
                                      (0, r.jsx)(uf, {
                                          label: ed.intl.string(ec.default.SQHm7C),
                                          value: Object.entries(l.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, l] = e,
                                                      [, n] = t;
                                                  return n - l;
                                              })
                                              .map((e) => {
                                                  let [t, l] = e;
                                                  return `${o8(l)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, r.jsx)(ud, {
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
                                  uj(ed.intl.string(ec.default["7X3i9d"]), o.total),
                                  (0, r.jsx)(uf, {
                                      label: ed.intl.string(ec.default["8OUg09"]),
                                      value: `${Math.round((o.cache_hit_rate ?? (0, ee.CA)(o.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, r.jsxs)(ud, {
                title: ed.intl.string(ec.default.NbRk9a),
                children: [
                    null != u && null != j
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(um, {
                                      label: ed.intl.string(ec.default.Kw5wiQ),
                                      used: u.tokensAfter,
                                      max: j,
                                      formatValue: o8,
                                  }),
                                  (0, r.jsx)(uf, {
                                      label: ed.intl.string(ec.default.mRbSns),
                                      value: `${o8(u.tokensBefore)} \u{2192} ${o8(u.tokensAfter)}`,
                                      hint: ed.intl.formatToPlainString(ec.default.Vq3skS, {
                                          count: o8(u.retainedMessages),
                                          time: ue(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, r.jsx)(y.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != j
                                      ? ed.intl.formatToPlainString(ec.default.GMLCNv, { ceiling: o8(j) })
                                      : ed.intl.string(ec.default.s0U5Fv),
                          }),
                    null != c &&
                        (0, r.jsx)(uf, {
                            label: ed.intl.string(ec.default["4BX5KK"]),
                            value: `${o8(c.projected)} / ${o8(c.threshold)}`,
                            critical: !0,
                            hint: ed.intl.formatToPlainString(ec.default["6ngCax"], { time: ue(c.observedAt) }),
                        }),
                    (0, r.jsxs)("div", {
                        className: up.Lj,
                        children: [
                            (0, r.jsx)(S.$, {
                                variant: "secondary",
                                size: "sm",
                                text: ed.intl.string(ec.default["1EiJeb"]),
                                disabled: "pending" === d,
                                onClick: m,
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
                                    let t = ue(e.observedAt);
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
                (0, r.jsx)(ud, {
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
                                          .map((e) => (0, r.jsx)(uv, { call: e }, e.id)),
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
                (0, r.jsxs)(ud, {
                    title: ed.intl.string(ec.default.EsSzCS),
                    children: [
                        null != v &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(uf, {
                                        label: ed.intl.string(ec.default.CLXHAs),
                                        value: ue(v.instance_since),
                                        hint: ed.intl.string(ec.default.UCwUEX),
                                    }),
                                    (0, r.jsx)(uf, {
                                        label: ed.intl.string(ec.default["8V8e1Z"]),
                                        value: o8(v.sockets),
                                    }),
                                    (0, r.jsx)(uf, {
                                        label: ed.intl.string(ec.default["4pBzYW"]),
                                        value: v.turn_inflight
                                            ? ed.intl.string(ec.default.Wv025I)
                                            : ed.intl.string(ec.default["7/lsFY"]),
                                    }),
                                    v.queued_messages > 0 &&
                                        (0, r.jsx)(uf, {
                                            label: ed.intl.string(ec.default["3oUYnv"]),
                                            value: o8(v.queued_messages),
                                        }),
                                ],
                            }),
                        l?.analytics != null && (0, r.jsx)(uh, { analytics: l.analytics }),
                    ],
                }),
            null != x &&
                (0, r.jsxs)(ud, {
                    title: ed.intl.string(ec.default["LEIhp/"]),
                    children: [
                        (0, r.jsx)(uf, {
                            label: ed.intl.string(ec.default.IlDBN3),
                            value: o8(x.max_subagent_iterations),
                        }),
                        (0, r.jsx)(uf, {
                            label: ed.intl.string(ec.default["ZdzKR+"]),
                            value: ed.intl.formatToPlainString(ec.default.yHJxuP, {
                                count: o8(x.context_window_tokens),
                            }),
                        }),
                        (0, r.jsx)(uf, {
                            label: ed.intl.string(ec.default.cIhN2W),
                            value: ed.intl.formatToPlainString(ec.default.yHJxuP, {
                                count: o8(x.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, r.jsx)(uf, {
                            label: ed.intl.string(ec.default["+fOn/q"]),
                            value: o8(x.max_user_message_chars),
                        }),
                        (0, r.jsx)(uf, { label: ed.intl.string(ec.default.kIHga0), value: o8(x.max_build_attempts) }),
                        (0, r.jsx)(uf, { label: ed.intl.string(ec.default.Iw03yW), value: o8(x.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var uy = l(237528),
    uk = l(629584),
    uw = l(683438),
    uN = l(531893);
function uA(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, r.jsx)("div", {
              className: uN.ut,
              children: (0, r.jsx)(y.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: ed.intl.string(ec.default.h1SE6R),
              }),
          });
}
function uS(e) {
    let { state: t, emptyTitle: l, emptyBody: n } = e;
    return "failed" === t.status
        ? (0, r.jsxs)("div", {
              className: uN.qf,
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
              className: uN.qf,
              children: [
                  (0, r.jsx)(y.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                  (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-muted", children: n }),
              ],
          });
}
function uC(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, r.jsx)("div", {
              className: uN.ps,
              children: (0, r.jsx)(y.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: ed.intl.string(ec.default.V7Ri8H),
              }),
          })
        : null;
}
var uE = l(109079);
let uI = i.memo(function (e) {
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
        className: uE.vK,
        children: [
            (0, r.jsx)(y.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: uE.Mt,
                selectable: !0,
                children: o9(l.ts),
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
                className: uE.dm,
                children: l.level,
            }),
            (0, r.jsxs)("div", {
                className: uE.t4,
                children: [
                    n &&
                        null != l.source &&
                        (0, r.jsx)("span", { className: uE.Cq, children: (0, r.jsx)(uy.v, { text: l.source }) }),
                    null != l.kind &&
                        (0, r.jsx)("span", {
                            className: uE.Cq,
                            title: l.build ?? void 0,
                            children: (0, r.jsx)(uy.v, {
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
                                      className: uE.Pq,
                                      "aria-expanded": a,
                                      "aria-controls": o,
                                      "aria-label": ed.intl.string(ec.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          a
                                              ? (0, r.jsx)(tB.a, {
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
                                          className: uE.dF,
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
function uM(e) {
    let { projectId: t } = e,
        l = (0, f.bG)([eE.Ay], () => eE.Ay.getLogs(t), [t]),
        n = (0, f.bG)([eE.Ay], () => eE.Ay.getHistoryState(t, "logs")),
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
                un.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return ul(e);
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
        className: uE.$F,
        children: [
            (0, r.jsxs)("div", {
                className: uE.y4,
                children: [
                    (0, r.jsx)(uk.I, {
                        look: "pill",
                        "aria-label": ed.intl.string(ec.default.MhvyUU),
                        options: g,
                        value: a,
                        onChange: (e) => s(e.value),
                    }),
                    (0, r.jsx)("div", {
                        className: uE.KT,
                        children: (0, r.jsx)(uw.I, {
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
            l.length > 0 && (0, r.jsx)(uA, { state: n }),
            (0, r.jsxs)(l7.Ch, {
                ref: d,
                onScroll: h,
                overflow: "auto",
                className: uE.sx,
                children: [
                    (0, r.jsx)(uC, { state: n }),
                    0 === l.length
                        ? (0, r.jsx)(uS, {
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
                          : c.map((e) => (0, r.jsx)(uI, { entry: e.log, showSource: "all" === a }, e.key)),
                ],
            }),
        ],
    });
}
function uT(e) {
    let { title: t, preview: l, stable: n, renderEnv: a } = e,
        s = [];
    return (
        null != l && s.push((0, r.jsx)(i.Fragment, { children: a("preview", l) }, "preview")),
        null != n && s.push((0, r.jsx)(i.Fragment, { children: a("stable", n) }, "stable")),
        (0, r.jsx)(ud, {
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
function u_(e) {
    var t;
    let { env: l, bot: n } = e;
    return n.ever_started
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(uf, {
                      label: ed.intl.formatToPlainString(ec.default["01ZMS4"], { env: ul(l) }),
                      value: ((t = n.connected), ed.intl.string(t ? ec.default.Wv025I : ec.default["7/lsFY"])),
                      critical: !n.connected && null != n.fatal_reason,
                      hint: n.fatal_reason ?? (n.connected ? void 0 : (n.last_start_reason ?? void 0)),
                  }),
                  (0, r.jsx)(uf, {
                      label: ed.intl.string(ec.default["z1dh+F"]),
                      value: o8(n.events_received),
                      hint:
                          null != n.last_event_type && null != n.last_event_at
                              ? `${n.last_event_type} \xb7 ${ue(n.last_event_at)}`
                              : void 0,
                  }),
                  (0, r.jsx)(uf, { label: ed.intl.string(ec.default.Iz5GnJ), value: o8(n.guild_count) }),
                  (0, r.jsx)(uf, {
                      label: ed.intl.string(ec.default["7UqtNv"]),
                      value: o8(n.reconnects),
                      hint:
                          null != n.last_close_code && null != n.last_close_at
                              ? ed.intl.formatToPlainString(ec.default.MasSly, {
                                    code: n.last_close_code,
                                    time: ue(n.last_close_at),
                                })
                              : void 0,
                  }),
                  n.dispatch_errors > 0 &&
                      (0, r.jsx)(uf, {
                          label: ed.intl.string(ec.default["x3+JXJ"]),
                          value: o8(n.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, r.jsx)(uf, { label: ul(l), value: ed.intl.string(ec.default.lTHQss) });
}
function uP(e) {
    let { env: t, metrics: l } = e,
        n = l.status_4xx + l.status_5xx;
    return (0, r.jsx)(uf, {
        label: ul(t),
        value: ed.intl.formatToPlainString(ec.default["Xq+wHT"], {
            requests: o8(l.requests),
            failures: o8(n + l.errors),
        }),
        critical: l.errors + l.status_5xx > 0,
        hint:
            null != l.last_failure
                ? ed.intl.formatToPlainString(ec.default["o/ZBm4"], {
                      host: l.last_failure.host,
                      status: l.last_failure.status ?? "network",
                      time: ue(l.last_failure.at),
                  })
                : ed.intl.formatToPlainString(ec.default["7KlGT6"], { time: ue(l.since) }),
    });
}
function uR(e) {
    let { env: t, runtime: l } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(uf, {
                label: ed.intl.formatToPlainString(ec.default["92gVTm"], { env: ul(t) }),
                value: o8(l.connections),
            }),
            l.schedules.map((e) =>
                (0, r.jsx)(
                    uf,
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
                                  ? ed.intl.formatToPlainString(ec.default.wxAWNv, { time: ue(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function uL(e) {
    let { env: t, metrics: l } = e;
    return (0, r.jsx)(uf, {
        label: ul(t),
        value: ed.intl.formatToPlainString(ec.default.suAOj9, { calls: o8(l.calls), errors: o8(l.errors) }),
        critical: l.errors > 0,
        hint: l.last_model,
    });
}
function uD(e) {
    let { title: t, metrics: l, limits: n } = e;
    if (null == l || 0 === l.requests)
        return (0, r.jsx)(ud, {
            title: t,
            children: (0, r.jsx)(y.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: ed.intl.string(ec.default["Noami/"]),
            }),
        });
    let a = l.cpu_ms_total / l.requests,
        i = l.cpu_ms_total > 0;
    return (0, r.jsxs)(ud, {
        title: t,
        children: [
            (0, r.jsx)(uf, {
                label: ed.intl.string(ec.default.xtD4Zp),
                value: o8(l.requests),
                hint: ed.intl.formatToPlainString(ec.default["7KlGT6"], { time: ue(l.since) }),
            }),
            (0, r.jsx)(uf, { label: ed.intl.string(ec.default.gfRhR3), value: o8(l.errors), critical: l.errors > 0 }),
            i
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(um, {
                              label: ed.intl.string(ec.default.LEJ5r3),
                              used: l.cpu_ms_max,
                              max: n.cpu_ms_per_request,
                              formatValue: o6,
                          }),
                          (0, r.jsx)(uf, {
                              label: ed.intl.string(ec.default.mSKImM),
                              value: o6(a),
                              hint: ed.intl.formatToPlainString(ec.default.JqMU05, {
                                  total: o6(l.cpu_ms_total),
                                  wall: o6(l.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, r.jsx)(uf, {
                      label: ed.intl.string(ec.default.LEJ5r3),
                      value: ed.intl.string(ec.default["2Ekb2b"]),
                      hint: ed.intl.string(ec.default.G0aq7i),
                  }),
            !i &&
                l.wall_ms_total > 0 &&
                (0, r.jsx)(uf, { label: ed.intl.string(ec.default.xvmL1D), value: o6(l.wall_ms_total) }),
            l.exceeded_cpu > 0 &&
                (0, r.jsx)(uf, {
                    label: ed.intl.string(ec.default["4sQYwH"]),
                    value: o8(l.exceeded_cpu),
                    critical: !0,
                }),
            (0, r.jsx)(uf, {
                label: ed.intl.string(ec.default.bQenOy),
                value: o8(l.exceeded_memory),
                critical: l.exceeded_memory > 0,
                hint: ed.intl.formatToPlainString(ec.default["5jIZwv"], { limit: `${n.memory_mb} MB` }),
            }),
            null != l.build && (0, r.jsx)(uf, { label: ed.intl.string(ec.default.xgpn4Y), value: ut(l.build) }),
        ],
    });
}
function u$(e) {
    let { status: t } = e,
        { stable: l, preview: n, shared_data: a } = t.storage,
        s = t.worker.limits,
        o = a
            ? [{ key: "shared", label: ed.intl.string(ec.default.V5kbaH), metrics: l }]
            : [
                  { key: "preview", label: ed.intl.string(ec.default["2yLYlG"]), metrics: n },
                  { key: "stable", label: ed.intl.string(ec.default.eiAi57), metrics: l },
              ];
    return (0, r.jsx)(ud, {
        title: ed.intl.string(ec.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: l, metrics: n } = e;
            return null == n
                ? (0, r.jsx)(uf, { label: l, value: "\u2014" }, t)
                : (0, r.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, r.jsx)(uf, {
                                  label: ed.intl.formatToPlainString(ec.default.u7kJJ4, { env: l }),
                                  value: o7(n.r2_bytes),
                                  hint: ed.intl.formatToPlainString(
                                      n.r2_truncated ? ec.default.lH0oQw : ec.default.m9h02S,
                                      { count: o8(n.r2_objects) },
                                  ),
                              }),
                              null != n.db_bytes &&
                                  (0, r.jsx)(um, {
                                      label: ed.intl.formatToPlainString(ec.default.mnbPqt, { env: l }),
                                      used: n.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: o7,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function uz(e) {
    let { status: t, fetchState: l, onRefresh: n } = e;
    return (0, r.jsxs)("div", {
        className: up.Mf,
        children: [
            (0, r.jsx)(uc, { generatedAt: t?.generated_at ?? null, fetchState: l, onRefresh: n }),
            null != t &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(uD, {
                            title: ed.intl.string(ec.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, r.jsx)(uD, {
                            title: ed.intl.string(ec.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, r.jsx)(u$, { status: t }),
                        null != t.bot &&
                            (0, r.jsx)(uT, {
                                title: ed.intl.string(ec.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, r.jsx)(u_, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, r.jsx)(uT, {
                                title: ed.intl.string(ec.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, r.jsx)(uP, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, r.jsx)(uT, {
                                title: ed.intl.string(ec.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, r.jsx)(uR, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, r.jsx)(uT, {
                                title: ed.intl.string(ec.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, r.jsx)(uL, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, r.jsx)(ug, { analytics: t.analytics }),
                        (0, r.jsxs)(ud, {
                            title: ed.intl.string(ec.default.fQMpFp),
                            children: [
                                (0, r.jsx)(uf, {
                                    label: ed.intl.string(ec.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? ut(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, r.jsx)(uf, {
                                    label: ed.intl.string(ec.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? ut(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var uF = l(761929),
    uO = l(382541);
let uU = new Map(),
    uG = new Map(),
    uq = 0,
    uB = 0;
async function uK(e, t, l) {
    let n = uq,
        a = uU.get(t);
    if (null != a) return { status: "loaded", rich: a };
    if (Date.now() < uB) return { status: "forbidden" };
    let r = uG.get(t);
    if (null != r) return r;
    let i = (async () => {
        try {
            let a,
                { ticket: r, baseUrl: i } = await (0, uO.d)(e),
                s = await fetch(
                    ((a = new URL(`${i}/agent/trace-detail`)).searchParams.set("ticket", r),
                    a.searchParams.set("id", t),
                    a.toString()),
                    { method: "GET", credentials: "omit" },
                );
            if (403 === s.status) return ((uB = Date.now() + 6e4), { status: "forbidden" });
            if (!s.ok) return { status: "failed" };
            let o = await s.json();
            if (!0 !== o.available || null == o.rich) return { status: "unavailable" };
            if (n !== uq) return { status: "failed" };
            var l = o.rich;
            for (uU.set(t, l); uU.size > 100;) {
                let e = uU.keys().next();
                if (!0 === e.done) break;
                uU.delete(e.value);
            }
            return { status: "loaded", rich: o.rich };
        } catch {
            return { status: "failed" };
        }
    })();
    uG.set(t, i);
    let s = await i;
    return (uG.get(t) === i && uG.delete(t), l?.aborted === !0 ? { status: "failed" } : s);
}
function uH() {
    ((uq += 1), uU.clear(), uG.clear(), (uB = 0));
}
function uV(e) {
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
let uW = ["model", "tool", "subagent", "delegated", "context"];
function uJ(e, t) {
    let l = t.trim().toLowerCase();
    return "" === l
        ? e
        : e.filter((e) => {
              let t;
              return ((t =
                  "model" === e.kind
                      ? [e.model, e.agent, e.stopReason ?? "", e.error ?? ""]
                      : [e.tool, e.agent, e.summary ?? "", e.error ?? ""]).push(uV(e)),
              t.join(" ").toLowerCase()).includes(l);
          });
}
function uX(e, t) {
    return null == t ? null : (e.find((e) => e.id === t) ?? null);
}
let uQ = {
    model: "blurpleLight",
    subagent: "greenLight",
    context: "grayLight",
    tool: "grayMedium",
    delegated: "orangeLight",
};
function uY(e) {
    let { category: t } = e;
    return (0, r.jsx)(uy.v, { text: ox(t), variant: uQ[t] });
}
var uZ = l(28863);
let u0 = ["arguments", "result", "usage", "diagnostics"];
function u1(e) {
    let { label: t, value: l } = e;
    return (0, r.jsxs)("div", {
        className: ov.wV,
        children: [
            (0, r.jsx)(y.E, { variant: "text-xs/medium", color: "text-muted", className: ov.D6, children: t }),
            (0, r.jsx)("div", { className: ov.zL, children: l }),
        ],
    });
}
function u2(e) {
    let { label: t, value: l } = e;
    return (0, r.jsx)(u1, {
        label: t,
        value: (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-default", selectable: !0, children: l }),
    });
}
function u3(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: ov.WA, children: t });
}
function u4(e) {
    let { title: t, children: l } = e,
        n = i.useId();
    return (0, r.jsxs)("section", {
        "aria-labelledby": n,
        className: ov.xd,
        children: [
            (0, r.jsx)(y.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                id: n,
                className: ov.Hm,
                children: t,
            }),
            l,
        ],
    });
}
function u5(e) {
    let { title: t, children: l } = e;
    return (0, r.jsxs)("details", {
        className: ov.XK,
        children: [
            (0, r.jsxs)("summary", {
                className: ov.It,
                children: [
                    (0, r.jsx)(ti._, { className: ov.k, size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    (0, r.jsx)(y.E, { variant: "text-xs/semibold", color: "none", children: t }),
                ],
            }),
            (0, r.jsx)("div", { className: ov.bG, children: l }),
        ],
    });
}
function u7(e) {
    let { field: t } = e;
    if (null != t.value)
        return (0, r.jsx)(u1, {
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
    return (0, r.jsx)(u1, {
        label: t.key,
        value: (0, r.jsxs)("div", {
            className: ov.Kv,
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
function u6(e) {
    let { entries: t } = e;
    return 0 === t.length
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", {
                      className: ov.QR,
                      children: (0, r.jsx)(uy.v, { text: ed.intl.string(ec.default.LRIpHQ), variant: "orangeLight" }),
                  }),
                  t.map((e) =>
                      (0, r.jsx)(
                          u1,
                          {
                              label: e.key,
                              value: (0, r.jsxs)("div", {
                                  className: ov.TY,
                                  children: [
                                      null == e.value
                                          ? null
                                          : (0, r.jsx)(y.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                className: ov.Px,
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
function u8(e) {
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
        : (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-subtle", className: ov.E7, children: l });
}
function u9(e) {
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
                u0.filter((e) => n.has(e))
            );
        })(l, { childCount: o, hasParent: null != a }),
        c = (function (e, t) {
            let [l, n] = i.useState(null);
            if (
                (i.useEffect(() => {
                    if (null == t || null != uU.get(t)) return;
                    let l = new AbortController();
                    return (
                        uK(e, t, l.signal).then((e) => {
                            l.signal.aborted || n({ detailId: t, detail: e });
                        }),
                        () => l.abort()
                    );
                }, [e, t]),
                null == t)
            )
                return null;
            let a = uU.get(t);
            return null != a ? { status: "loaded", rich: a } : l?.detailId === t ? l.detail : { status: "loading" };
        })(t, "tool" === l.kind ? l.detailId : void 0),
        d = "model" === l.kind ? l.model : l.tool,
        f = ok(l.startedAt, "millis"),
        m = uV(l),
        h = i.useCallback(
            (e) => {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), n());
            },
            [n],
        );
    return (0, r.jsxs)(l7.Ch, {
        className: ov._0,
        onKeyDown: h,
        role: "region",
        "aria-label": ed.intl.formatToPlainString(ec.default.Qiaeyz, { name: d }),
        children: [
            (0, r.jsx)("div", {
                className: ov.sy,
                children: (0, r.jsxs)("div", {
                    className: ov.HI,
                    children: [
                        (0, r.jsx)(ob, { status: l.status }),
                        (0, r.jsx)(uY, { category: m }),
                        (0, r.jsx)(y.E, {
                            variant: "text-sm/semibold",
                            color: "text-strong",
                            className: ov.kc,
                            children: d,
                        }),
                        (0, r.jsx)(y.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            tabularNumbers: !0,
                            className: ov.l5,
                            children: null == l.durationMs ? ed.intl.string(ec.default["2wyRDK"]) : og(l.durationMs),
                        }),
                    ],
                }),
            }),
            null == l.error
                ? null
                : (0, r.jsx)(y.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: ov.Um,
                      selectable: !0,
                      children: l.error,
                  }),
            u.includes("arguments") && "tool" === l.kind
                ? (0, r.jsxs)(u4, {
                      title: ed.intl.string(ec.default["G/4JST"]),
                      children: [
                          (l.fields ?? []).map((e) => (0, r.jsx)(u7, { field: e }, e.key)),
                          c?.status === "loaded" && null != c.rich.args
                              ? (0, r.jsx)(u6, { entries: c.rich.args })
                              : null,
                          (0, r.jsx)(u8, { detail: c }),
                      ],
                  })
                : null,
            u.includes("result") && "tool" === l.kind
                ? (0, r.jsxs)(u4, {
                      title: ed.intl.string(ec.default.Dgg25Y),
                      children: [
                          (0, r.jsx)(u2, {
                              label: ed.intl.string(ec.default["U+OQCo"]),
                              value: ed.intl.formatToPlainString(ec.default.ib7All, { count: l.resultChars ?? 0 }),
                          }),
                          null == l.resultAdded
                              ? null
                              : (0, r.jsx)(u2, {
                                    label: ed.intl.string(ec.default["MQYS+n"]),
                                    value: `+${l.resultAdded} \u{2212}${l.resultRemoved ?? 0}`,
                                }),
                          !0 !== l.resultTruncated
                              ? null
                              : (0, r.jsx)(u1, {
                                    label: ed.intl.string(ec.default.t7GJFc),
                                    value: (0, r.jsx)(y.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        children: ed.intl.string(ec.default.ijkkUh),
                                    }),
                                }),
                          c?.status === "loaded" && null != c.rich.result
                              ? (0, r.jsx)(u6, { entries: c.rich.result })
                              : null,
                      ],
                  })
                : null,
            u.includes("usage") && "model" === l.kind
                ? (0, r.jsxs)(u4, {
                      title: ed.intl.string(ec.default.NXmRw1),
                      children: [
                          (0, r.jsxs)(u3, {
                              children: [
                                  null == l.promptTokens
                                      ? null
                                      : (0, r.jsx)(u2, {
                                            label: ed.intl.string(ec.default.iq3T1q),
                                            value: ed.intl.formatToPlainString(ec.default["6GQUgQ"], {
                                                tokens: op(l.promptTokens),
                                            }),
                                        }),
                                  null == l.systemTokens
                                      ? null
                                      : (0, r.jsx)(u2, {
                                            label: ed.intl.string(ec.default.ZELAZn),
                                            value: ed.intl.formatToPlainString(ec.default.Te7mPn, {
                                                system: op(l.systemTokens),
                                                tools: op(l.toolsTokens ?? 0),
                                                toolCount: l.tools ?? 0,
                                                messages: op(l.messagesTokens ?? 0),
                                                messageCount: l.messages ?? 0,
                                            }),
                                        }),
                                  null == l.inputTokens
                                      ? null
                                      : (0, r.jsx)(u2, {
                                            label: ed.intl.string(ec.default["LENc/T"]),
                                            value: String(l.inputTokens),
                                        }),
                                  null == l.outputTokens
                                      ? null
                                      : (0, r.jsx)(u2, {
                                            label: ed.intl.string(ec.default.ewRHwx),
                                            value: String(l.outputTokens),
                                        }),
                                  null == l.cacheReadTokens
                                      ? null
                                      : (0, r.jsx)(u2, {
                                            label: ed.intl.string(ec.default.heVFQD),
                                            value: ed.intl.formatToPlainString(ec.default.VO3gdd, {
                                                read: l.cacheReadTokens,
                                                write: l.cacheWriteTokens ?? 0,
                                            }),
                                        }),
                                  null == l.costUsd
                                      ? null
                                      : (0, r.jsx)(u2, {
                                            label: ed.intl.string(ec.default.aBw2Vm),
                                            value: `$${l.costUsd.toFixed(4)}`,
                                        }),
                              ],
                          }),
                          (0, r.jsx)(y.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              className: ov.E7,
                              children: ed.intl.string(ec.default["foF/Bc"]),
                          }),
                      ],
                  })
                : null,
            u.includes("arguments") || u.includes("result")
                ? (0, r.jsx)(y.E, {
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: ov.E7,
                      children: ed.intl.string(ec.default.o24IFK),
                  })
                : null,
            u.includes("diagnostics")
                ? (0, r.jsx)(u5, {
                      title: ed.intl.string(ec.default["dix/W4"]),
                      children: (0, r.jsxs)(u3, {
                          children: [
                              null == a
                                  ? null
                                  : (0, r.jsx)(u1, {
                                        label: ed.intl.string(ec.default.soPsOJ),
                                        value: (0, r.jsx)(uZ.Anchor, {
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
                                  : (0, r.jsx)(u2, {
                                        label: ed.intl.string(ec.default.kNZBxr),
                                        value: ed.intl.formatToPlainString(ec.default["6LoCUh"], { count: o }),
                                    }),
                              null == l.turnId
                                  ? null
                                  : (0, r.jsx)(u2, { label: ed.intl.string(ec.default.bL1r5J), value: l.turnId }),
                              (0, r.jsx)(u2, { label: ed.intl.string(ec.default.Ndwr7X), value: l.id }),
                              null == f ? null : (0, r.jsx)(u2, { label: ed.intl.string(ec.default.sO8ghW), value: f }),
                              "model" !== l.kind || null == l.stopReason
                                  ? null
                                  : (0, r.jsx)(u2, { label: ed.intl.string(ec.default.VfYxPF), value: l.stopReason }),
                              "tool" !== l.kind || null == l.schema || 0 === l.schema.length
                                  ? null
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(y.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                className: ov.Hm,
                                                children: ed.intl.string(ec.default.mSm8iy),
                                            }),
                                            l.schema.map((e) =>
                                                (0, r.jsx)(
                                                    u2,
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
                className: ov.E7,
                children: ed.intl.string(ec.default.FloyTQ),
            }),
        ],
    });
}
let ce = { model: ov.WI, subagent: ov.uM, context: ov.eH, tool: ov.pw, delegated: ov.C8 };
function ct(e) {
    let { entries: t } = e,
        l = i.useMemo(
            () =>
                (function (e) {
                    let t = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 },
                        l = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 };
                    for (let n of e) {
                        let e = uV(n);
                        ((t[e] += n.durationMs ?? 0), (l[e] += 1));
                    }
                    return uW.map((e) => ({ category: e, ms: t[e], calls: l[e] }));
                })(t),
            [t],
        ),
        n = l.reduce((e, t) => e + t.ms, 0);
    return (0, r.jsxs)("div", {
        className: ov.M0,
        children: [
            (0, r.jsx)("div", {
                className: ov.pZ,
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
                                            className: `${ov.dL} ${ce[t]}`,
                                            style: { "--custom-conjure-trace-segment-weight": String(l) },
                                        },
                                        t,
                                    );
                          }),
            }),
            (0, r.jsx)("div", {
                className: ov.z4,
                role: "group",
                "aria-label": ed.intl.string(ec.default["Gioq+C"]),
                children: uW.map((e) => {
                    let t = l.find((t) => t.category === e),
                        a = t?.ms ?? 0,
                        i = t?.calls ?? 0,
                        s = 0 === n ? 0 : Math.round((a / n) * 100);
                    return (0, r.jsxs)(
                        "div",
                        {
                            className: ov.fI,
                            children: [
                                (0, r.jsx)("span", { className: `${ov.A9} ${ce[e]}`, "aria-hidden": !0 }),
                                (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-muted", children: ox(e) }),
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
function cl(e) {
    let { entry: t, selected: l, tabbable: n, onSelect: a, onKeyDown: i, nested: s } = e,
        o = uV(t),
        u = "model" === t.kind ? t.model : t.tool,
        c =
            "model" === t.kind && null != t.promptTokens
                ? ed.intl.formatToPlainString(ec.default["6GQUgQ"], { tokens: op(t.promptTokens) })
                : null != t.durationMs
                  ? og(t.durationMs)
                  : null;
    return (0, r.jsxs)(k.D, {
        tag: "div",
        role: "option",
        "aria-selected": l,
        tabIndex: n ? 0 : -1,
        id: `trace-${t.id}`,
        className: `${ov.nM} ${s ? ov.A5 : ""} ${"error" === t.status ? ov.Cr : ""} ${l ? ov.CZ : ""}`,
        onKeyDown: i,
        onClick: () => a(t.id),
        children: [
            (0, r.jsxs)("div", {
                className: ov.sU,
                children: [
                    (0, r.jsx)(ob, { status: t.status }),
                    (0, r.jsx)(uY, { category: o }),
                    (0, r.jsx)(y.E, {
                        variant: "text-xs/semibold",
                        color: "text-default",
                        className: ov.G9,
                        children: u,
                    }),
                    null == c
                        ? null
                        : (0, r.jsx)(y.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              tabularNumbers: !0,
                              className: ov.j2,
                              children: c,
                          }),
                ],
            }),
            "tool" === t.kind && null != t.summary
                ? (0, r.jsx)(y.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: ov.Ne,
                      children: t.summary,
                  })
                : null,
            null == t.error
                ? null
                : (0, r.jsx)(y.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: ov.Xu,
                      children: t.error,
                  }),
        ],
    });
}
function cn(e) {
    var t;
    let { projectId: l, query: n } = e,
        a = (0, f.yK)([eE.Ay], () => eE.Ay.getTrace(l), [l]),
        s = (0, f.bG)([eE.Ay], () => eE.Ay.getHistoryState(l, "trace"));
    i.useEffect(() => uH, [l]);
    let [o, u] = i.useState(null),
        [c, d] = i.useState(40),
        [m, h] = i.useState(!1),
        g = i.useRef(null),
        p = i.useRef(null),
        x = i.useRef(null),
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
        A = (0, uF.A)({
            resizableDomNodeRef: p,
            orientation: uF.R.VERTICAL_TOP,
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
        I = i.useMemo(() => uJ(a, n), [a, n]),
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
                    .map((e, t) => ({ ...e, index: t, entries: uJ(e.entries, n) }))
                    .filter((e) => e.entries.length > 0),
            [a, n],
        ),
        T = uX(I, o),
        _ = T?.kind === "tool" ? uX(a, T.parentId ?? null) : null,
        P = null == T ? 0 : ((t = T.id), a.filter((e) => "tool" === e.kind && e.parentId === t)).length,
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
              className: ov.uP,
              ref: g,
              children: (0, r.jsx)(uS, {
                  state: s,
                  emptyTitle: ed.intl.string(ec.default["Tpvy/s"]),
                  emptyBody: ed.intl.string(ec.default.J0WcVA),
              }),
          })
        : (0, r.jsxs)("div", {
              className: `${ov.uP} ${m ? ov.F4 : ""}`,
              ref: g,
              children: [
                  (0, r.jsxs)("div", {
                      className: ov.DK,
                      children: [
                          (0, r.jsx)(ct, { entries: a }),
                          (0, r.jsx)(uA, { state: s }),
                          0 === I.length
                              ? (0, r.jsx)("div", {
                                    className: ov.Ie,
                                    children: (0, r.jsx)(y.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children: ed.intl.string(ec.default.tDB4lC),
                                    }),
                                })
                              : (0, r.jsxs)(l7.Ch, {
                                    ref: x,
                                    className: ov.Ns,
                                    children: [
                                        (0, r.jsx)(uC, { state: s }),
                                        (0, r.jsx)("div", {
                                            ref: v,
                                            id: j,
                                            role: "listbox",
                                            "aria-label": ed.intl.string(ec.default.SGbiNE),
                                            className: ov.p_,
                                            children: M.map((e) => {
                                                let t = ok(e.startedAt),
                                                    l = ed.intl.formatToPlainString(ec.default.gPwGYA, {
                                                        number: e.index + 1,
                                                    });
                                                return (0, r.jsxs)(
                                                    "div",
                                                    {
                                                        role: "presentation",
                                                        children: [
                                                            (0, r.jsxs)("div", {
                                                                className: ov.mf,
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
                                                                              children: og(e.spanMs),
                                                                          }),
                                                                ],
                                                            }),
                                                            (0, r.jsx)("div", {
                                                                role: "group",
                                                                "aria-label": l,
                                                                className: ov.M5,
                                                                children: e.entries.map((e) =>
                                                                    (0, r.jsx)(
                                                                        cl,
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
                                    className: ov.b1,
                                    onPointerDown: S,
                                    onKeyDown: C,
                                }),
                                (0, r.jsx)("div", {
                                    ref: p,
                                    className: ov.Or,
                                    style: { "--custom-conjure-trace-detail-share": String(c) },
                                    children: (0, r.jsx)(u9, {
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
function ca(e) {
    let { projectId: t, query: l, onQueryChange: n } = e,
        a = (0, f.yK)([eE.Ay], () => eE.Ay.getTrace(t), [t]),
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
                className: ov.ED,
                children: (0, r.jsx)(uw.I, {
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
var cr = l(592465);
function ci(e) {
    let { projectId: t, onClose: l } = e,
        [n, a] = i.useState("logs"),
        [s, o] = i.useState(""),
        u = (0, f.bG)([ol.A], () => ol.A.isDeveloper),
        c = (0, f.bG)([oh], () => oh.getStatus(t), [t]),
        d = (0, f.bG)([oh], () => oh.getFetchState(t), [t]);
    i.useEffect(() => {
        (0, er.R7)(t);
    }, [t]);
    let m = i.useCallback(() => (0, er.R7)(t), [t]),
        h = i.useCallback(() => {
            (0, la.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: oh.getStatus(t),
                        last_turn_usage: oh.getLastTurnUsage(t),
                        last_compaction: oh.getLastCompaction(t),
                        last_compaction_decline: oh.getLastCompactionDecline(t),
                        model_calls: oh.getModelCalls(t),
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
        className: cr.nd,
        "aria-label": g,
        children: [
            (0, r.jsxs)(l5.Ay, {
                "aria-label": g,
                toolbar: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l5.Ay.Icon, {
                            icon: si.CopyIcon,
                            tooltip: ed.intl.string(ec.default.TkHqy2),
                            onClick: h,
                        }),
                        (0, r.jsx)(l5.Ay.Icon, { icon: L.P, tooltip: ed.intl.string(ed.t.cpT0Cq), onClick: l }),
                    ],
                }),
                children: [
                    (0, r.jsx)(l5.Ay.ChannelIcon, { icon: E.BugIcon, "aria-hidden": !0 }),
                    (0, r.jsx)(l5.Ay.Title, { children: g }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: cr.rf,
                children: [
                    (0, r.jsxs)(ot.V, {
                        selectedItem: n,
                        type: "top",
                        onItemSelect: (e) => a(e),
                        "aria-label": ed.intl.string(ec.default.RvvWIh),
                        className: cr.vR,
                        children: [
                            (0, r.jsx)(ot.V.Item, { id: "logs", children: ed.intl.string(ec.default["+VRYCm"]) }),
                            (0, r.jsx)(ot.V.Item, { id: "worker", children: ed.intl.string(ec.default["50D0FZ"]) }),
                            (0, r.jsx)(ot.V.Item, { id: "agent", children: ed.intl.string(ec.default.UkbTK1) }),
                            u
                                ? (0, r.jsx)(ot.V.Item, { id: "trace", children: ed.intl.string(ec.default.O6nNjP) })
                                : null,
                            u ? (0, r.jsx)(ot.V.Item, { id: "perf", children: "Perf Trace" }) : null,
                        ],
                    }),
                    "logs" === n
                        ? (0, r.jsx)(uM, { projectId: t })
                        : "worker" === n
                          ? (0, r.jsx)(uz, { status: c, fetchState: d, onRefresh: m })
                          : "trace" === n && u
                            ? (0, r.jsxs)("div", {
                                  className: cr.uP,
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: cr.XH,
                                          children: (0, r.jsx)(ca, { projectId: t, query: s, onQueryChange: o }),
                                      }),
                                      (0, r.jsx)(cn, { projectId: t, query: s }),
                                  ],
                              })
                            : "perf" === n && u
                              ? (0, r.jsx)(o5, { projectId: t })
                              : (0, r.jsx)(ub, {
                                    projectId: t,
                                    status: c,
                                    fetchState: d,
                                    onRefresh: m,
                                    traceVisible: u,
                                }),
                ],
            }),
        ],
    });
}
var cs = l(333007),
    co = l(365912),
    cu = l(775121),
    cc = l(873715);
function cd(e) {
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
let cf = Object.freeze({ x: -1, y: -1 });
function cm(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = cd(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var ch = l(470779);
function cg(e) {
    let {
            projectId: t,
            at: l,
            bounds: n,
            kind: a,
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
        } = ik({ projectId: t, surface: "design", onUploadFile: h }),
        y = i.useRef(null),
        k = (f || g.length > 0) && j && !m,
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
        className: o()(ch.M0, { [ch.ho]: A && !m, [ch.ET]: m }),
        style: { left: P, top: R },
        "data-testid": "conjure-design-compose-bar",
        children: [
            (0, r.jsx)("input", {
                ref: y,
                type: "file",
                multiple: !0,
                className: ch.Fg,
                tabIndex: -1,
                "aria-hidden": !0,
                onChange: (e) => {
                    (p(Array.from(e.target.files ?? [])), (e.target.value = ""));
                },
            }),
            (0, r.jsx)(w.m, {
                position: "bottom",
                text: ed.intl.string(ec.default.lgvqSB),
                ariaHidden: !0,
                children: (0, r.jsx)("button", {
                    type: "button",
                    className: ch.tY,
                    onClick: () => y.current?.click(),
                    "aria-label": ed.intl.string(ec.default.lgvqSB),
                    children: (0, r.jsx)(ea.H, { size: "custom", color: "currentColor", className: ch.WW }),
                }),
            }),
            (0, r.jsx)(ny.y, {
                autoFocus: !0,
                rows: 1,
                className: ch.hF,
                value: s,
                placeholder: "" === a ? ed.intl.string(ec.default.MPPV1Q) : `Edit ${a}`,
                "aria-label": ed.intl.string(ec.default.KCYqWL),
                onChange: (e) => u(e.target.value),
                onPaste: m ? void 0 : x,
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
                      className: ch.ZO,
                      children: g.map((e) => (0, r.jsx)(iw, { draft: e, onRemove: v }, e.localId)),
                  })
                : null,
        ],
    });
}
var cp = l(192888);
function cx(e, t) {
    return (0, cp.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(cm, () => ({ status: "failed" }));
}
var cv = l(108308);
let cj = { x: 25, y: 21 };
function cb(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function cy(e, t, l) {
    return {
        left: t.left + e.rect.x * l,
        top: t.top + e.rect.y * l,
        width: Math.max(e.rect.width * l, 1),
        height: Math.max(e.rect.height * l, 1),
    };
}
function ck(e, t, l, n) {
    let a = cy(e, l, n);
    return { x: a.left + a.width * t.x, y: a.top + a.height * t.y };
}
function cw(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function cN(e) {
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
function cA(e) {
    let { projectId: t, applicationId: l, previewApplicationId: n, resolveIframe: a, toggleRef: s } = e,
        o = null != l && l === n ? t : null,
        { active: u, annotations: c } = te(o),
        d = (0, tv.Zv)(o),
        m = (0, tt.useHasAnyModalOpen)(),
        h = (0, f.bG)([tX.default], () => tX.default.getCurrentUser()),
        g = h?.id ?? null,
        [p, x] = i.useState(null),
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
        [z, F] = i.useState(null),
        [O, U] = i.useState(null),
        G = i.useRef(!1),
        [q, B] = i.useState(!1),
        [K, H] = i.useState(null),
        V = u && !d && !m;
    null == z || (V && z.projectId === o) || F(null);
    let W = z?.projectId ?? null;
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
                x((t) => (cb(t, e) ? t : e));
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
                (0, cc.J)(t, l, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                    (t) => {
                        if (!e) return;
                        k(!1);
                        let l = "completed" === t.status ? cN(t.response) : null;
                        null == l ? N(!0) : (j(l), e6(o, { url: l.url, title: l.title, viewport: l.viewport }));
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
    let J = i.useRef(null);
    (i.useEffect(() => {
        if (!V || null == p || null == o) return;
        if (null == v) {
            J.current = p;
            return;
        }
        if (cb(J.current, p)) return;
        let e = window.setTimeout(() => {
            let e = a();
            if (null == e) return;
            J.current = p;
            let t = [];
            for (let e = 0; e < c.length; e += 24) t.push(c.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, l) => {
                    let n = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, cc.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: n.length > 0 ? n : [{ action: "snapshot" }],
                        snapshot: 0 === l && n.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let l;
                        if ("completed" !== e.status || !Z.current) return;
                        let n = cN(e.response);
                        null != n && (j(n), e6(o, { url: n.url, title: n.title, viewport: n.viewport }));
                        let a = new Map();
                        (e.response.results.forEach((e, l) => {
                            let n = t[l];
                            if (null == n || "locate" !== e.action || !e.ok) return;
                            let r = cd(e.element);
                            null != r && a.set(n.id, r);
                        }),
                            (l = e4(o)).active &&
                                0 !== a.size &&
                                e5(o, {
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
    }, [V, p, v, c, o, a]),
        i.useEffect(() => {
            if (!V)
                return () => {
                    (C(null), F(null), H(null), j(null));
                };
        }, [V]));
    let X = i.useRef(null),
        Q = i.useRef(null),
        Y = i.useRef(!1),
        Z = i.useRef(!1);
    i.useEffect(() => {
        ((Z.current = V), V || ((X.current = null), (Q.current = null), (_.current = null), I(!1)));
    }, [V]);
    let ee = i.useCallback(
            function e() {
                if (Y.current) return;
                let t = X.current;
                if (null == t) return;
                X.current = null;
                let l = a();
                null != l &&
                    ((Y.current = !0),
                    cx(l, t).then((t) => {
                        if (((Y.current = !1), Z.current)) {
                            if ("picked" !== t.status || cT(t.target, ei.current.rect, ei.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? C(null)
                                    : "unsupported" === t.status && $(!0);
                            else {
                                let e = eJ(t.target);
                                (L((t) => (cM(t, e) ? t : e)),
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
            if (null == z) return;
            let e = !G.current;
            (U({ at: z.at, label: z.label, draft: z.draft, instant: e }), B(e), F(null));
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
            let e = setTimeout(() => U(null), cE);
            return () => clearTimeout(e);
        }, [O]));
    let el = null == v || null == p || v.viewport.width < 1 ? 1 : p.width / v.viewport.width,
        en = null != v || w,
        ea = i.useMemo(() => v?.elements ?? [], [v]),
        ei = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        ei.current = { rect: p, scale: el };
    }, [p, el]);
    let es = i.useCallback(
            (e, t, l) => {
                null != o &&
                    (nV(o, "design"),
                    H(null),
                    (G.current = !1),
                    F({ projectId: o, target: e, anchor: t, draft: "", at: l, label: eJ(e) }));
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
    let ef = i.useCallback(
            (e) => {
                if (null == p || null != K) return;
                if (((_.current = { x: e.clientX, y: e.clientY }), eu(), I(!0), null != z)) {
                    (Math.abs(e.clientX - z.at.x) > cI || Math.abs(e.clientY - z.at.y) > cI) && (G.current = !0);
                    return;
                }
                if (!en) return void C(null);
                let t = eo(e, p);
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
                        l = null != e && cT(e, p, el) ? null : e;
                    if (null != l) {
                        let e = eJ(l);
                        L((t) => (cM(t, e) ? t : e));
                    }
                    C((e) => (e?.ref === l?.ref ? e : l));
                    return;
                }
                let l = { x: Math.round(t.x), y: Math.round(t.y) },
                    n = Q.current;
                (null == n || n.x !== l.x || n.y !== l.y) && ((Q.current = l), (X.current = l), ee());
            },
            [p, el, en, eo, D, ea, z, K, eu, ee],
        ),
        em = null == K ? null : c.find((e) => e.id === K.id),
        eh = V && (E || z?.target.marker != null || em?.target.marker != null);
    i.useEffect(() => {
        if (eh)
            return () => {
                let e = a();
                null != e && cx(e, cf);
            };
    }, [eh, a]);
    let eg = i.useCallback(() => {
        (I(!1), C(null), (Q.current = null), (X.current = null));
    }, []);
    i.useEffect(() => {
        if (!V || !E || !en || D || null != z || null != K) return;
        let e = _.current,
            { rect: t, scale: l } = ei.current;
        if (null == e || null == t) return;
        let n = { x: Math.round((e.x - t.left) / l), y: Math.round((e.y - t.top) / l) };
        ((Q.current = n), (X.current = n), ee());
    }, [V, E, en, D, z, K, ee]);
    let ep = i.useCallback(
            (e) => {
                if (null != z || null != K) {
                    (et(), H(null));
                    return;
                }
                if (null == A || null == p) return;
                let t = eo(e, p);
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
            [A, p, eo, z, K, es, et],
        ),
        ex = i.useCallback(() => {
            null != o && (C(null), e7(o));
        }, [o]),
        ev = i.useCallback(() => {
            null != o &&
                (null != z
                    ? et()
                    : K?.confirmingRemove === !0
                      ? H({ ...K, confirmingRemove: !1 })
                      : null != K
                        ? H(null)
                        : ex());
        }, [o, z, K, et, ex]),
        ej = i.useRef(ev),
        eb = i.useRef(ex);
    i.useLayoutEffect(() => {
        ((ej.current = ev), (eb.current = ex));
    });
    let ey = i.useRef(null);
    i.useEffect(() => {
        if (V)
            return (
                cu.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        cu.A.enable());
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
                        return ((0, co.J$)(e), !0);
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
                if (null != z || null != K || 0 === ea.length) return;
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
                    es(A, eV, { x: (p?.left ?? 0) + A.rect.x * el, y: (p?.top ?? 0) + A.rect.y * el }));
            },
            [o, z, K, ea, A, es, ev, p, el],
        ),
        ew = i.useCallback(
            (e) => {
                null == o ||
                    null == z ||
                    ((eW(z.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, er.dv)(
                            o,
                            (function (e, t) {
                                let { kind: l, name: n } = eJ(e),
                                    a = [l, n].filter((e) => "" !== e).join(": ");
                                return `${eY}${a}${eZ}${eQ(e)}
${t.trim()}`;
                            })(z.target, z.draft),
                            e,
                        ),
                        et(),
                        C(null)));
            },
            [o, z, et],
        ),
        eN = i.useCallback((e) => (null == o ? Promise.reject(Error("no project")) : (0, er.vX)(o, e)), [o]),
        eA = i.useCallback(() => {
            if (null != o && null != K && null != g && eW(K.draft)) {
                var e, t;
                let l, n;
                ((e = K.id),
                    (t = K.draft.trim()),
                    null != (n = (l = e4(o)).annotations.find((t) => t.id === e)) &&
                        e8(n, g) &&
                        e5(o, { ...l, annotations: l.annotations.map((l) => (l.id === e ? { ...l, comment: t } : l)) }),
                    H({ ...K, editing: !1 }));
            }
        }, [o, K, g]),
        eS = i.useCallback(() => {
            if (null != o && null != K && null != g) {
                var e;
                let t, l;
                ((e = K.id),
                    null != (l = (t = e4(o)).annotations.find((t) => t.id === e)) &&
                        e8(l, g) &&
                        e5(o, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    H(null));
            }
        }, [o, K, g]),
        eC = u
            ? b
                ? ed.intl.string(ec.default["Eb/YV9"])
                : w
                  ? ed.intl.string(ec.default.FD30bh)
                  : ed.intl.formatToPlainString(ec.default.dTSqLF, { count: c.length })
            : "",
        eE = V && null != p,
        eI = E && null == K,
        eM = z?.target ?? em?.target ?? null,
        eT = z ?? O,
        e_ = z ?? (O?.instant === !0 ? null : O),
        eP =
            null != em && null != p
                ? (function (e, t) {
                      let { left: l, top: n } = cw(e, t);
                      return { x: l + 12, y: n + 12 };
                  })(ck(em.target, em.anchor, p, el), p)
                : null;
    return (
        i.useEffect(() => {
            let e = a();
            if (em?.target.marker == null || null == e) return;
            let { target: t, anchor: l } = em;
            cx(e, { x: Math.round(t.rect.x + t.rect.width * l.x), y: Math.round(t.rect.y + t.rect.height * l.y) });
        }, [em, a]),
        (0, cs.createPortal)(
            (0, r.jsxs)("div", {
                ref: ey,
                className: cv.Li,
                children: [
                    (0, r.jsx)("div", {
                        className: cv.y4,
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-design-announcer",
                        children: eC,
                    }),
                    eE
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)("div", {
                                      className: cv.MT,
                                      style: { left: p.left, top: p.top, width: p.width, height: p.height },
                                      "data-plain-cursor": eI ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": ed.intl.string(ec.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: ef,
                                      onMouseLeave: eg,
                                      onClick: ep,
                                      onKeyDown: ek,
                                  }),
                                  null != A && null == A.marker && null == z && null == K
                                      ? (0, r.jsx)(c_, { box: cy(A, p, el) })
                                      : null,
                                  (0, r.jsx)("div", {
                                      ref: M,
                                      className: cv.aZ,
                                      children: (0, r.jsx)("div", {
                                          className: cv.xz,
                                          "data-shown": null != A && null == K && null == z ? "" : void 0,
                                          "data-instant": q ? "" : void 0,
                                          children: (0, r.jsxs)(y.E, {
                                              variant: "text-xs/medium",
                                              className: cv.Ux,
                                              children: [
                                                  null == R
                                                      ? null
                                                      : (0, r.jsx)("span", { className: cv.Tl, children: R.kind }),
                                                  null == R || "" === R.name
                                                      ? null
                                                      : (0, r.jsxs)("span", {
                                                            className: cv.kh,
                                                            children: [" ", R.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, r.jsx)("div", {
                                      ref: T,
                                      className: cv.Y,
                                      children: eI ? (0, r.jsx)("div", { className: cv.u }) : null,
                                  }),
                                  null == e_
                                      ? null
                                      : (0, r.jsx)("div", {
                                            className: cv.aZ,
                                            style: {
                                                transform: `translate3d(${e_.at.x + 20}px, ${e_.at.y + 20}px, 0)`,
                                            },
                                            children: (0, r.jsx)("div", {
                                                className: cv.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == z ? "" : void 0,
                                                children: (0, r.jsxs)(y.E, {
                                                    variant: "text-xs/medium",
                                                    className: cv.Ux,
                                                    children: [
                                                        (0, r.jsx)("span", {
                                                            className: cv.Tl,
                                                            children: e_.label.kind,
                                                        }),
                                                        "" === e_.label.name
                                                            ? null
                                                            : (0, r.jsxs)("span", {
                                                                  className: cv.kh,
                                                                  children: [" ", e_.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eM && null == eM.marker
                                      ? (0, r.jsx)("div", { className: cv.D0, style: cy(eM, p, el), "aria-hidden": !0 })
                                      : null,
                                  c.map((e, t) => {
                                      let l = ck(e.target, e.anchor, p, el),
                                          n = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, r.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: cv.xL,
                                              style: { ...cw(l, p), width: 24, height: 24 },
                                              "aria-label": ed.intl.formatToPlainString(ec.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: eX(e.target),
                                              }),
                                              "aria-expanded": K?.id === e.id,
                                              "data-testid": "conjure-design-marker",
                                              onMouseEnter: () => {
                                                  null == z && H(n);
                                              },
                                              onFocus: () => {
                                                  null == z && H(n);
                                              },
                                              onClick: (e) => {
                                                  (e.stopPropagation(), et(), H(n));
                                              },
                                              children: (0, r.jsx)(cS, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eT || null == o
                                      ? null
                                      : (0, r.jsx)(cg, {
                                            projectId: o,
                                            at: { x: eT.at.x + 20, y: eT.at.y + 20 },
                                            bounds: p,
                                            kind: eT.label.kind,
                                            value: eT.draft,
                                            canSubmit: null != z && eW(eT.draft),
                                            onChange: (e) => {
                                                null != z && F({ ...z, draft: e });
                                            },
                                            onSubmit: ew,
                                            onDismiss: et,
                                            onUploadFile: eN,
                                            closing: null == z,
                                        }),
                                  null != em && null != K && null != eP
                                      ? (0, r.jsxs)(cC, {
                                            point: eP,
                                            frame: p,
                                            authorId: em.authorId,
                                            title: eX(em.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                K.confirmingRemove ? H({ ...K, confirmingRemove: !1 }) : H(null);
                                            },
                                            onMouseLeave: () => {
                                                K.editing || K.confirmingRemove || H(null);
                                            },
                                            children: [
                                                K.editing
                                                    ? (0, r.jsx)(P.f, {
                                                          autoFocus: !0,
                                                          label: ed.intl.string(ec.default.KCYqWL),
                                                          hideLabel: !0,
                                                          value: K.draft,
                                                          maxLength: 1e3,
                                                          rows: 3,
                                                          onChange: (e) => H({ ...K, draft: e }),
                                                          onKeyDown: (e) => {
                                                              "Enter" !== e.key ||
                                                                  e.shiftKey ||
                                                                  (e.preventDefault(), eA());
                                                          },
                                                      })
                                                    : (0, r.jsx)(y.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-default",
                                                          className: cv.aC,
                                                          children: em.comment,
                                                      }),
                                                e8(em, g)
                                                    ? (0, r.jsx)("div", {
                                                          className: cv.eB,
                                                          children: K.confirmingRemove
                                                              ? (0, r.jsxs)(r.Fragment, {
                                                                    children: [
                                                                        (0, r.jsx)(y.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: cv.nv,
                                                                            children: ed.intl.string(ec.default.wOHvts),
                                                                        }),
                                                                        (0, r.jsx)(S.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: ed.intl.string(ec.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                H({ ...K, confirmingRemove: !1 }),
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
                                                                                H({
                                                                                    ...K,
                                                                                    editing: !1,
                                                                                    confirmingRemove: !0,
                                                                                }),
                                                                        }),
                                                                        K.editing
                                                                            ? (0, r.jsx)(S.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !eW(K.draft),
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
                                                                                      H({
                                                                                          ...K,
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
function cS(e) {
    let { authorId: t } = e,
        l = (0, f.bG)([tX.default], () => tX.default.getUser(t), [t]);
    return (0, r.jsx)(ra.eu, {
        src: null == l ? null : rs.Ay.getUserAvatarURL(l),
        size: rr._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function cC(e) {
    let t,
        l,
        n,
        a,
        s,
        o,
        { point: u, frame: c, authorId: d, title: f, testId: m, onDismiss: h, onMouseLeave: g, children: p } = e,
        x = i.useRef(null),
        v = i.useRef(null),
        [j, b] = i.useState(cj);
    i.useLayoutEffect(() => {
        let e = x.current?.getBoundingClientRect(),
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
        ref: x,
        className: cv.Nr,
        style: S,
        "data-testid": m,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, r.jsxs)("div", {
                className: cv.MY,
                children: [
                    (0, r.jsx)("span", { ref: v, className: cv.ip, children: (0, r.jsx)(cS, { authorId: d }) }),
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: cv.Qc,
                        children: f,
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: cv.zI, children: p }),
        ],
    });
}
let cE = 300,
    cI = 2;
function cM(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function cT(e, t, l) {
    if (null == t || l <= 0) return !1;
    let n = t.width / l,
        a = t.height / l;
    return !(n < 1) && !(a < 1) && e.rect.width >= 0.98 * n && e.rect.height >= 0.98 * a;
}
function c_(e) {
    let { box: t } = e;
    return (0, r.jsx)("div", { className: cv.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var cP = l(659723),
    cR = l(697744),
    cL = l(130324);
function cD(e) {
    let t = (0, cR.c)(),
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
    let a = (0, iD.A)();
    return (
        i.useEffect(() => {
            if (!a) return;
            let t = setInterval(l.onMouseEnter, e);
            return () => clearInterval(t);
        }, [l, e, a]),
        t
    );
}
function c$(e) {
    let { className: t } = e,
        { Component: l, events: n } = cD(3e4);
    return (0, r.jsxs)("div", {
        className: t,
        onMouseEnter: n.onMouseEnter,
        onMouseLeave: n.onMouseLeave,
        children: [
            (0, r.jsx)(l, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, r.jsx)(y.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: cL.o,
                children: ed.intl.string(ec.default.AyiQEp),
            }),
        ],
    });
}
var cz = l(251363),
    cF = l(944142),
    cO = l(532247),
    cU = l(501628);
function cG(e) {
    let { progress: t } = e,
        { Component: l } = cD(1500),
        n = J.Q_.useSetting();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, r.jsx)(y.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, r.jsx)("div", {
                className: cU.Ci,
                children: Array.from({ length: t.stepCount }, (e, l) =>
                    (0, r.jsx)(
                        "span",
                        {
                            className: cU.PM,
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
function cq(e) {
    let { projectId: t, applicationId: l, previewApplicationId: n, surface: a } = e,
        s = null != t && null != l && l === n,
        o = (0, f.bG)([cF.A], () => (s ? cF.A.getLiveReload(t) : null), [s, t]),
        u = (0, B.A)(l, a)?.id ?? null,
        c = o?.phase ?? null,
        d = (function (e, t) {
            let l = (0, cO.dv)(e),
                [n, a] = i.useState(null),
                [r, s] = i.useState(l);
            r !== l && (s(l), a(null == l ? (0, cO.QP)(e, r) : null));
            let o = (0, f.bG)(
                    [tP.A],
                    () => {
                        let e = tP.A.getFrame(t);
                        return (0, tU.x1)(e) && e.data.proxyTicketRefreshing;
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
                        null != l.target && l.target === (0, cz.o)(null, t) && e();
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
        m = (0, cO.h_)(c, o?.step ?? null, d);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(N.A, { tag: "div", role: "status", "aria-live": "polite", children: m?.title ?? "" }),
            null != m
                ? (0, r.jsx)("div", {
                      className: cU.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, r.jsx)(cG, { progress: m }),
                  })
                : null,
        ],
    });
}
var cB = l(343030),
    cK = l(317608),
    cH = l(338941),
    cV = l(964404);
let cW = { width: 1 / 0, height: 1 / 0 };
function cJ(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cW;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var cX = l(702083);
function cQ(e) {
    let { children: t } = e,
        { mobile: l, landscape: n } = (0, f.cf)([tp.A], () => ({
            mobile: tp.A.isBuilderPreviewMobile(),
            landscape: tp.A.isBuilderPreviewLandscape(),
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
        d = l ? cJ(n, c ?? void 0) : null;
    return (0, r.jsx)("div", {
        ref: a,
        className: o()(cX.dw, { [cX.PQ]: null != d }),
        children: (0, r.jsx)("div", { className: o()(cX.R9, { [cX.Vg]: null != d }), style: d ?? void 0, children: t }),
    });
}
var cY = l(347927);
function cZ(e) {
    let { title: t, body: l, wide: n = !1, children: a } = e;
    return (0, r.jsxs)("div", {
        className: o()(cY.Bf, n && cY.Qx),
        children: [
            (0, r.jsxs)("div", {
                className: cY.Ux,
                children: [
                    (0, r.jsx)(M.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, r.jsx)(y.E, { variant: "text-md/medium", color: "text-subtle", children: l }),
                ],
            }),
            a,
        ],
    });
}
var c0 = l(957272);
function c1(e) {
    let { applicationId: t, surface: l, frameOverlay: n } = e,
        { frame: a, state: s } = (0, cH.A)({ applicationId: t, surface: l }),
        o = (0, tU.VA)(t, l);
    if (
        (i.useEffect(
            () => (
                !(function (e) {
                    let t = tP.A.getFrame(e);
                    if (null == t || tR.A.getWindowOpen(eb.MLl.ACTIVITY_POPOUT)) return;
                    let l = tP.A.getMainFrame()?.id === e;
                    t.intent === tU.sV.MAIN
                        ? (l || q.A.promoteFrame(e), q.A.resetFrameLayoutModes(e))
                        : l && q.A.clearMainFrameSlot();
                })(o),
                () => {
                    let e;
                    null != (e = tP.A.getFrame(o)) &&
                        ((0, tU.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        cV.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === tU.sV.INLINE && q.A.promoteFrame(o),
                              q.A.updateFrameLayoutMode({ frameId: o, layoutMode: tU.y0.PIP }))
                            : e.intent === tU.sV.MAIN && q.A.demoteMainFrame(o));
                }
            ),
            [o],
        ),
        s === cH.n.Launched)
    ) {
        let e = (0, r.jsx)(cK.A, { frameId: a.id, level: cB.A.WithinAppContent, className: c0.Z7, overlay: n });
        return (0, ty.Q5)(l) ? (0, r.jsx)(cQ, { children: e }) : e;
    }
    return (0, r.jsx)(c2, { state: s });
}
function c2(e) {
    let { state: t } = e;
    switch (t) {
        case cH.n.RenderingElsewhere:
            return (0, r.jsx)("div", {
                className: c0.qs,
                children: (0, r.jsx)(cZ, {
                    title: ed.intl.string(ec.default["9kpdo7"]),
                    body: ed.intl.string(ec.default.iIA8Nj),
                }),
            });
        case cH.n.NoApplication:
            return (0, r.jsx)(c$, { className: c0.qs });
        case cH.n.DoesNotSupportSurface:
            return (0, r.jsx)("div", {
                className: c0.qs,
                children: (0, r.jsx)(cZ, {
                    title: ed.intl.string(ec.default["7k4GyN"]),
                    body: ed.intl.string(ec.default.zdIy3R),
                }),
            });
        case cH.n.Error:
            return (0, r.jsxs)("div", {
                className: c0.qs,
                children: [
                    (0, r.jsx)(M.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: ed.intl.string(ec.default.lTPbnG),
                    }),
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: c0.tj,
                        children: ed.intl.string(ec.default.e6GiAZ),
                    }),
                ],
            });
        case cH.n.AwaitingLaunch:
        case cH.n.Loading:
            return (0, r.jsx)("div", { className: c0.qs, children: (0, r.jsx)(A.y, {}) });
    }
}
var c3 = l(308528),
    c4 = l(334738),
    c5 = l(688438),
    c7 = l(355622),
    c6 = l(365971),
    c8 = l(703462);
function c9(e) {
    let { message: t } = e;
    return (0, r.jsxs)("div", {
        className: c8.f,
        children: [
            (0, r.jsx)(lk.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, r.jsx)(y.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function de() {
    return (0, r.jsx)("div", { className: c8.f, children: (0, r.jsx)(A.y, {}) });
}
function dt(e) {
    let t,
        l,
        { previewApplicationId: n } = e,
        { data: a, isLoading: s } = (0, O.YY)(n),
        o = a?.bot?.id ?? null,
        u = (0, f.bG)([X.A], () => {
            if (null == o) return null;
            let e = X.A.getDMFromUserId(o);
            return null != e ? X.A.getChannel(e) : null;
        });
    ((t = u?.id ?? null),
        i.useEffect(() => {
            null != t && c3.A.preload(eb.ME, t);
        }, [t]),
        (l = (0, f.bG)([iR.A], () => iR.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !l) return;
            let e = (0, c6.Xg)();
            return (
                (0, c4.yl)(t, e),
                () => {
                    (0, c4.dm)(t, e);
                }
            );
        }, [t, l]));
    let [c, d] = i.useState(null),
        m = null != o && c === o;
    return (i.useEffect(() => {
        if (null == o || null != u) return;
        let e = !1;
        return (
            c3.A.openPrivateChannel({ recipientIds: o, navigateToChannel: !1 }).catch(() => {
                e || d(o);
            }),
            () => {
                e = !0;
            }
        );
    }, [o, u]),
    s && null == a)
        ? (0, r.jsx)(de, {})
        : null == o || m
          ? (0, r.jsx)(c9, { message: ed.intl.string(ec.default["VP/O8s"]) })
          : null == u
            ? (0, r.jsx)(de, {})
            : (0, r.jsx)("div", {
                  className: c8.g,
                  children: (0, r.jsx)(c5.A, { channel: u, guild: null, chatInputType: c7.oU.SIDEBAR }, u.id),
              });
}
var dl = l(887909),
    dn = l(570962),
    da = l(998475);
function dr(e) {
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
        noPadding: f,
        obscured: m,
    } = (0, dl.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, r.jsxs)("section", {
        className: da.Nr,
        "aria-label": t,
        children: [
            (0, r.jsx)("div", {
                className: da.rf,
                children: (0, r.jsx)(dn.A, {
                    obscured: !0 === m,
                    children: (0, r.jsxs)("div", {
                        className: da.Gq,
                        children: [
                            null != l
                                ? (0, r.jsxs)("div", {
                                      className: da.z3,
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
                                className: o()(da.Qs, d ? da.cw : null, f ? da.pN : null),
                                children: [i, null == u ? c : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != s && s.length > 0
                ? (0, r.jsx)("div", {
                      className: da.o1,
                      children: s.map((e, t) => (0, r.jsx)(S.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var di = l(765671),
    ds = l(269094),
    du = l(582063);
function dc(e) {
    let { applicationId: t, size: l } = e,
        n = (0, cH.A)({ applicationId: t, surface: tU.ZN });
    return (i.useEffect(() => {
        let e = (0, tU.VA)(t, tU.ZN);
        return () => (0, tC.r)(e);
    }, [t]),
    n.state !== cH.n.Launched)
        ? (0, r.jsx)(c2, { state: n.state })
        : n.frame.data.proxyTicketRefreshing
          ? (0, r.jsx)(c2, { state: cH.n.Loading })
          : (0, r.jsx)(dd, { lifecycle: n, size: l });
}
function dd(e) {
    let { lifecycle: t, size: l } = e,
        { ref: n, width: a, height: i } = (0, di.Ay)(),
        s = (function (e, t) {
            let { width: l, height: n } = e;
            return null == l || null == n || l <= 0 || n <= 0 ? 1 : Math.min(1, l / t.width, n / t.height);
        })({ width: a, height: i }, l);
    return (0, r.jsxs)("div", {
        className: du.JH,
        children: [
            (0, r.jsx)("div", { className: du.LO, "aria-hidden": !0 }),
            (0, r.jsx)("div", {
                ref: n,
                className: du.dw,
                children: (0, r.jsx)("div", {
                    className: du.HL,
                    style: {
                        "--custom-conjure-overlay-widget-width": `${l.width}px`,
                        "--custom-conjure-overlay-widget-height": `${l.height}px`,
                        "--custom-conjure-overlay-widget-scale": String(s),
                    },
                    children: (0, r.jsx)(ds.A, { frame: t.frame, application: t.application, className: du.Gt }),
                }),
            }),
        ],
    });
}
var df = l(409478),
    dm = l(652227);
function dh(e) {
    let {
        applicationId: t,
        previewApplicationId: l,
        surface: n,
        previewReady: a,
        previewGate: i,
        availability: s,
        activeMode: o,
        widgetApplicationId: u,
        overlayWidgetSize: c = tx,
        frameOverlay: d,
    } = e;
    return i?.type === "checking"
        ? (0, r.jsx)("div", { className: dm.q, children: (0, r.jsx)(A.y, {}) })
        : i?.type === "permissions"
          ? (0, r.jsx)("div", {
                className: dm.q,
                children: null == i.authorizeProps ? (0, r.jsx)(A.y, {}) : (0, r.jsx)(dr, { ...i.authorizeProps }),
            })
          : a
            ? null == t
                ? null
                : (0, r.jsxs)("div", {
                      className: dm.R,
                      children: [
                          (0, tb.yf)(s, o) ? (0, r.jsx)(c1, { applicationId: t, surface: n, frameOverlay: d }) : null,
                          "widget" === o && null != u
                              ? "unavailable-authorization-revoked" === s.profileState
                                  ? (0, r.jsx)("div", {
                                        className: dm.q,
                                        children: (0, r.jsx)(cZ, {
                                            wide: !0,
                                            title: ed.intl.string(ec.default["08U+YO"]),
                                            body: ed.intl.string(ec.default.pKBfrc),
                                        }),
                                    })
                                  : (0, r.jsx)(df.A, { applicationId: u })
                              : null,
                          "overlay" === o && s.modes.includes("overlay")
                              ? (0, r.jsx)(dc, { applicationId: t, size: c })
                              : null,
                          "bot" === o && null != l ? (0, r.jsx)(dt, { previewApplicationId: l }) : null,
                      ],
                  })
            : (0, r.jsx)(c$, { className: dm.q });
}
var dg = l(175841),
    dp = l(750506),
    dx = l(867193),
    dv = l(417760);
function dj(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function db(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function dy(e) {
    let { phase: t, projectId: l, onOpenPublishedApp: n, compact: a } = e,
        { stop: s, stopping: u } = (function (e) {
            let t = (0, f.bG)([ek.Ay], () => null != e && ek.Ay.isThinking(e)),
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
        m = ed.intl.string(d ? (c ? ec.default["VJW/5P"] : ec.default["+hD2Iz"]) : ec.default["h+i1r9"]),
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
              className: o()(dv.M0, dv.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  d
                      ? (0, r.jsx)(sB.i, { size: 12, color: "currentColor" })
                      : (0, r.jsx)(dg.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, r.jsx)(y.E, { variant: "text-sm/semibold", color: "none", className: dv.ID, children: m }),
                  d ? (0, r.jsx)(N.A, { children: ed.intl.string(ec.default.fg1sor) }) : null,
                  d ? (0, r.jsxs)("div", { className: dv.lC, children: [h, g] }) : null,
              ],
          })
        : (0, r.jsxs)("div", {
              className: dv.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, r.jsxs)("div", {
                      className: dv.sp,
                      children: [
                          (0, r.jsx)(dg.SparklesIcon, { size: "sm", color: "currentColor" }),
                          d ? (0, r.jsx)(sB.i, { size: 12, color: "currentColor" }) : null,
                          (0, r.jsxs)("div", {
                              className: dv.f4,
                              children: [
                                  (0, r.jsx)(y.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: dv.w9,
                                      children: m,
                                  }),
                                  d
                                      ? (0, r.jsx)(y.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: dv.Rb,
                                            children: ed.intl.string(ec.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  d ? (0, r.jsxs)("div", { className: dv.lC, children: [h, g] }) : null,
              ],
          });
}
function dk(e) {
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
        f = tO(s);
    i.useEffect(() => {
        u &&
            f &&
            null != s &&
            (function (e) {
                if (!tz(e)) return;
                let t = t$(e);
                null != t && (0, tL.sP)(t);
            })(s);
    }, [u, f, s]);
    let [m, h] = i.useState(null),
        [g, p] = i.useState(null),
        [x, v] = i.useState(null),
        j = "idle" !== c;
    i.useEffect(() => {
        if (!j) return;
        function e() {
            let e = dj(a());
            h((t) => (db(t, e) ? t : e));
            let t = null == g ? null : dj(g);
            (v((e) => (db(e, t) ? e : t)), null != g && (0, dx.C)(g.getBoundingClientRect().height));
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
                    null != g && (0, dx.C)(0));
            }
        );
    }, [j, a, g]);
    let b = "idle" !== c && null != m,
        y = b && "controlling" === c && !d,
        k = null != m && m.width < 420,
        w = null == m ? void 0 : { left: m.left, top: m.top, width: m.width, height: m.height },
        N =
            null == m
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
                  })(m, x),
        A = (function () {
            let [e] = i.useContext(dp.uY),
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
                      ref: p,
                      className: dv.D,
                      "data-phase": c,
                      children: (0, r.jsx)("div", {
                          className: dv.QF,
                          children: (0, r.jsx)(dy, { phase: c, projectId: t, onOpenPublishedApp: o, compact: k }),
                      }),
                  })
                : null,
            (0, cs.createPortal)(
                (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)("div", {
                        className: dv.y4,
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
                ? (0, cs.createPortal)(
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", {
                                  className: dv.ys,
                                  style: N,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, r.jsx)("div", {
                                  className: dv.om,
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
var dw = l(399503),
    dN = l(853555),
    dA = l(558960),
    dS = l(187645);
let dC = new Map(),
    dE = !1;
function dI() {
    let e = new Map();
    for (let t of new Set([...ek.Ay.getActivityOrderedProjectIds(), ...(0, tv.T7)()])) {
        if (!ek.Ay.isThinking(t) && !(0, tv.wK)(t)) continue;
        let l = (function (e) {
            let t = eE.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let l = (0, ty.Rc)(t);
            return (0, tU.x1)(l) ? l.id : null;
        })(t);
        null != l && e.set(t, l);
    }
    for (let [n, a] of [...dC]) {
        var t, l;
        e.get(n) !== a.frameId &&
            ((t = n),
            (l = a),
            dC.delete(t),
            l.unregisterLookup(),
            dA.A.removeFrameTarget(l.frameId, l.element),
            l.element.remove());
    }
    for (let [t, l] of e)
        dC.has(t) ||
            (function (e, t) {
                let l = document.createElement("div");
                ((l.className = dS.t),
                    l.setAttribute("inert", ""),
                    l.setAttribute("aria-hidden", "true"),
                    dM(l),
                    document.body.appendChild(l));
                let n = { frameId: t, element: l, unregisterLookup: () => {} };
                (dC.set(e, n),
                    (n.unregisterLookup = (0, dN.Ng)(e, () => (0, cz.o)(l, t))),
                    dA.A.registerFrameTarget(t, l, cB.A.Backstage, void 0));
            })(t, l);
    for (let e of dC.values()) dM(e.element);
}
function dM(e) {
    let t = tp.A.isBuilderPreviewMobile();
    e.classList.toggle(dS.L, !t);
    let l = t ? cJ(tp.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != l ? `${l.width}px` : ""), (e.style.height = null != l ? `${l.height}px` : ""));
}
var dT = l(873727),
    d_ = l(147248),
    dP = l(418842),
    dR = l(363195),
    dL = l(818023);
let dD = null;
var d$ = l(602853),
    dz = l(517461),
    dF = l(487336);
function dO(e) {
    let { open: t, maxWidth: l, onWidthChange: n, children: a } = e,
        s = (0, d$.r)($.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = i.useRef(null),
        [u, c] = (0, dz.V)("VibegrationsChatSidebarWidth", 460),
        [d, f] = i.useState(u ?? 460),
        m = (0, ld.clamp)(d, 360, l);
    i.useLayoutEffect(() => {
        n(t ? m + s : 0);
    }, [m, t, s, n]);
    let h = (0, uF.A)({
            minDimension: 360,
            maxDimension: l,
            resizableDomNodeRef: o,
            onElementResize: f,
            onElementResizeEnd: c,
            orientation: uF.R.HORIZONTAL_LEFT,
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
        className: dF.pz,
        hidden: !t,
        children: [
            (0, r.jsx)("div", { className: dF.Di, onPointerDown: g }),
            (0, r.jsx)("div", { ref: o, className: dF.kL, style: { width: m }, children: a }),
        ],
    });
}
var dU = l(541940);
function dG(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: n,
            previewApplicationId: a,
            surface: s,
            header: u,
            mainClassName: c,
            content: d,
            sidebar: m,
            onOpenPublishedApp: h,
            showsFrame: g,
        } = e,
        [p, x] = i.useState(null),
        v = (0, B.A)(n, s),
        j = v?.id ?? null;
    (!(function (e, t) {
        let l = (0, f.bG)([dR.A], () => (0, dT.x4)(dR.A.theme)),
            n = (0, f.bG)([d_.A], () => d_.A.gradientPreset),
            {
                reducedMotion: a,
                fontScale: r,
                highContrast: s,
                forcedColors: o,
                underlineLinks: u,
            } = (0, f.cf)([ih.Ay], () => ({
                reducedMotion: ih.Ay.useReducedMotion,
                fontScale: (0, dT.U0)(),
                highContrast: ih.Ay.isHighContrastModeEnabled,
                forcedColors: ih.Ay.useForcedColors,
                underlineLinks: ih.Ay.alwaysShowLinkDecorations,
            })),
            c = J.hH.useSetting(),
            d = (0, dP.C)(),
            m = i.useRef(!1),
            h = i.useRef(!1),
            g = i.useRef(0),
            p = i.useRef(null),
            x = i.useCallback(() => {
                let n = (0, cz.o)(e, t);
                if (null == n) return;
                p.current = n;
                let i = {
                    revision: ++g.current,
                    baseTheme: l,
                    customTheme: (0, dT.Lq)(),
                    uiDensity: d,
                    messageDisplayCompact: c,
                    fontScale: r,
                    reducedMotion: a,
                    highContrast: s,
                    forcedColors: o,
                    underlineLinks: u,
                };
                (0, cp.W)(n, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [l, o, r, t, s, c, e, a, d, u]),
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
            }, [n, j]),
            i.useLayoutEffect(() => {
                (x(), j());
            }, [j, x]),
            i.useLayoutEffect(() => {
                let l = (0, cz.o)(e, t);
                null != l && l !== p.current && j();
            }),
            i.useEffect(() => {
                function l(l) {
                    l.target === (0, cz.o)(e, t) && ((p.current = null), j());
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
    })(p, j),
        i.useEffect(() => {
            if (null != t) return (0, dN.Ng)(t, () => (0, cz.o)(p, j));
        }, [t, p, j]));
    let b = i.useCallback(() => (0, cz.o)(p, j), [p, j]),
        y = i.useCallback(() => (g ? (0, cz.o)(p, j) : p), [g, p, j]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: o()(dU.Mh, c),
                children: [
                    u,
                    (0, r.jsx)(dk, {
                        projectId: t ?? null,
                        applicationId: n,
                        previewApplicationId: a,
                        resolveTarget: y,
                        frameId: j,
                        onOpenPublishedApp: h,
                    }),
                    (0, r.jsx)("div", { ref: x, className: dU.fm, children: d }),
                ],
            }),
            m,
            (0, r.jsx)(cA, {
                projectId: t ?? null,
                applicationId: n,
                previewApplicationId: a,
                resolveIframe: b,
                toggleRef: l,
            }),
        ],
    });
}
function dq(e) {
    let {
        projectId: t,
        designFeedbackToggleRef: l,
        applicationId: n,
        previewApplicationId: a,
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
        overlayWidgetSize: N,
        onOpenPublishedApp: A = null,
    } = e;
    (0, dw.k)(t, w);
    let S = s.type === l4.U.MAIN || (0, ty.Q5)(s);
    !(function (e) {
        let { mobile: t, landscape: l } = (0, f.cf)([tp.A], () => ({
            mobile: tp.A.isBuilderPreviewMobile(),
            landscape: tp.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let n;
            if (null != e) {
                if (t) ((n = l ? dL.aX.LANDSCAPE : dL.aX.PORTRAIT), (dD = e));
                else {
                    if (dD !== e) return;
                    ((n = dL.aX.UNHANDLED), (dD = null));
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
                dE ||
                    ((dE = !0),
                    ek.Ay.addChangeListener(dI),
                    eE.Ay.addChangeListener(dI),
                    tP.A.addChangeListener(dI),
                    tp.A.addChangeListener(dI),
                    (0, tv.W3)(dI),
                    dI()));
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
        className: dU.LB,
        children: (0, r.jsx)(dG, {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: n,
            previewApplicationId: a,
            surface: s,
            header: u,
            onOpenPublishedApp: A,
            showsFrame: (0, tb.yf)(y, k),
            mainClassName: null == u ? void 0 : o()(dU.ez, { [dU.zt]: c }),
            content: (0, r.jsx)(dh, {
                applicationId: n,
                previewApplicationId: a,
                surface: s,
                previewReady: j,
                previewGate: b,
                availability: y,
                activeMode: k,
                widgetApplicationId: w,
                overlayWidgetSize: N,
                frameOverlay: (0, r.jsx)(cq, { projectId: t, applicationId: n, previewApplicationId: a, surface: s }),
            }),
            sidebar:
                null != t && T
                    ? (0, r.jsx)(dO, {
                          open: c,
                          maxWidth: M,
                          onWidthChange: eC.Zq,
                          children: (0, r.jsx)("div", {
                              className: dU.cO,
                              children: p
                                  ? (0, r.jsx)(ci, { projectId: t, onClose: x ?? (() => {}) }, t)
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(cP.A, { projectId: t }),
                                            (0, r.jsx)(l5.Ay, {
                                                "aria-label": ed.intl.string(ed.t["/VQax8"]),
                                                toolbar: (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        m,
                                                        null == d
                                                            ? null
                                                            : (0, r.jsx)(l5.Ay.Icon, {
                                                                  icon: L.P,
                                                                  tooltip: ed.intl.string(ec.default.JD6Oit),
                                                                  onClick: d,
                                                              }),
                                                    ],
                                                }),
                                                children: (0, r.jsx)(l5.Ay.Title, {
                                                    children: ed.intl.string(ed.t["/VQax8"]),
                                                }),
                                            }),
                                            (0, r.jsx)("div", {
                                                className: dU.cb,
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
var dB = l(631417);
function dK(e) {
    let { title: t, actions: l, breadcrumb: n, project: a, onOpenProjectSettings: i } = e,
        s = ed.intl.string(ec.default.FzfmQ8);
    return (0, r.jsx)(H.A, {
        hideSearch: !0,
        toolbar: l,
        className: dB.wx,
        "aria-label": t,
        children: (0, r.jsxs)("div", {
            className: dB.QF,
            children: [
                (0, r.jsx)(D.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: $.A.colors.TEXT_STRONG,
                    className: dB.Kk,
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
                    ? (0, r.jsx)(w.m, {
                          asContainer: !0,
                          text: s,
                          position: "bottom",
                          children: (0, r.jsx)(k.D, {
                              className: dB.FF,
                              onClick: i,
                              "aria-label": s,
                              children: (0, r.jsx)(l$.A, { project: a, size: "header" }),
                          }),
                      })
                    : null,
                (0, r.jsx)(H.A.Title, { className: dB.Qw, wrapperClassName: dB.DD, children: t }),
            ],
        }),
    });
}
var dH = l(683071);
let dV = "conjuring-help";
var dW = l(173114);
function dJ() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: l,
            } = (0, f.cf)([tX.default, Y.A, lg.Ay, lp.A], () => {
                let e = tX.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of Y.A.getGuildsArray()) {
                    if (!t.features.has(eb.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let l = lg.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, U.m1)(t, tX.default, lp.A) === dV;
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
              className: dW.l,
              children: (0, r.jsx)(dH.w, {
                  type: "info",
                  iconAlign: "center",
                  message: ed.intl.format(ec.default["6anmu1"], { channel: dV, onNavigate: t }),
                  role: "static",
              }),
          });
}
var dX = l(606128),
    dQ = l(323140);
function dY(e) {
    return (0, r.jsx)(h.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function dZ(e) {
    return (0, r.jsx)(g.u, { ...e, size: "custom", width: 20, height: 20 });
}
function d0(e) {
    return (0, r.jsx)(p.k, { ...e, size: "custom", width: 20, height: 20 });
}
function d1(e) {
    return (0, r.jsx)(x.H, { ...e, size: "custom", width: 20, height: 20 });
}
let d2 = {
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
function d3(e) {
    var t;
    let l,
        n,
        a,
        s,
        u,
        h,
        g,
        p,
        x,
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
                            let t = em(e);
                            null != t
                                ? (0, v.P)((0, j.o)(t, b.Ck.FAILURE))
                                : (0, m.A)({
                                      title: ed.intl.formatToPlainString(ec.default["Gm+u1+"], { name: n }),
                                      subtitle: ed.intl.string(ec.default.M7H3sJ),
                                      confirmText: ed.intl.string(ec.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, V.pX)(eb.BVt.CHANNEL(E, ey.VV.CONJURE, l));
                                          try {
                                              await ef(l, e, ed.intl.string(ec.default.Owerd3));
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
            (0, f.bG)([Y.A], () => (null == R ? null : (Y.A.getGuild(R)?.name ?? null)), [R]) ??
            ed.intl.string(ec.default["3QFps8"]),
        D = (0, f.bG)([eE.Ay], () => eE.Ay.isProjectDeleting(C.id), [C.id]),
        $ =
            ((t = T ? C : null),
            (h = t?.id),
            (g = t?.owner_user_id),
            (p = (0, f.yK)(
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
                null != g && (t2(g), p.forEach(t2));
            }, [g, p]),
            (x = (0, f.bG)([tX.default], () => (null == g ? null : tX.default.getUser(g)), [g])),
            (S = (0, f.yK)([tX.default], () => p.map((e) => tX.default.getUser(e)).filter((e) => null != e), [p])),
            i.useMemo(
                () =>
                    null == x
                        ? null
                        : {
                              creator: x,
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
                                  (0, tQ.mG)(x),
                                  S.map((e) => (0, tQ.mG)(e)),
                              ),
                          },
                [x, S],
            )),
        F = i.useId(),
        O = (0, r.jsx)(y.E, { variant: "text-md/semibold", color: "text-strong", className: dQ.j1, children: C.name }),
        U = (0, ew.oF)(C.id),
        G = {
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
        className: o()(dQ.OY, { [dQ.Wy]: D }),
        "aria-busy": D,
        children: [
            (0, r.jsx)(tl.Ay, { projectId: C.id }),
            null == U || D ? null : (0, r.jsx)("div", { className: dQ.SB, "aria-hidden": !0 }),
            (0, r.jsxs)(k.D, {
                className: dQ.W6,
                onClick: D ? void 0 : I,
                onContextMenu: function (e) {
                    D || (0, z.jA)(e, () => (0, r.jsx)(lL, { ...G, onCloseMenu: z.Z_ }));
                },
                tabIndex: D ? -1 : void 0,
                "aria-describedby": null != $ ? F : void 0,
                children: [
                    (0, r.jsx)(l$.A, { project: C, size: "card", className: dQ.VJ }),
                    (0, r.jsxs)("div", {
                        className: dQ.MM,
                        children: [
                            (0, r.jsxs)("div", {
                                className: dQ.Ub,
                                children: [
                                    null != $ ? (0, r.jsx)(w.m, { text: $.label, ariaHidden: !0, children: O }) : O,
                                    null == $ || D ? null : (0, r.jsx)(lO, { creator: $, className: dQ.rb }),
                                    U !== d.I.NEEDS_INPUT || D
                                        ? null
                                        : (0, r.jsxs)("div", {
                                              className: dQ.fs,
                                              children: [
                                                  (0, r.jsx)(K.A, { mentionsCount: 1 }),
                                                  (0, r.jsx)(N.A, { children: ed.intl.string(ec.default.hfIuc7) }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: dQ.h3,
                                children: [
                                    (0, r.jsx)(y.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: dQ.Wb,
                                        children: D ? ed.intl.string(ec.default.Yh5pAc) : L,
                                    }),
                                    null == P || D
                                        ? null
                                        : (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)("span", {
                                                      className: dQ.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, r.jsx)(y.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: dQ.zM,
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
            null != $ ? (0, r.jsx)(N.A, { id: F, children: $.label }) : null,
            (0, r.jsx)("div", {
                className: dQ.M2,
                children: D
                    ? (0, r.jsx)(A.y, { type: A.t.SPINNING_CIRCLE_SIMPLE })
                    : (0, r.jsxs)("div", {
                          className: dQ.Pl,
                          children: [(0, r.jsx)(lD, { ...G, trigger: "iconButton" }), _.importInput],
                      }),
            }),
        ],
    });
}
function d4(e) {
    var t, n;
    let a,
        { project: s, projectsLoaded: u, onBack: c, guildId: d } = e,
        [h, g] = i.useState(!0),
        [p, x] = i.useState(!1),
        k = J.Q_.useSetting(),
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
    let z = (0, f.bG)([eE.Ay], () => (null == P ? null : eE.Ay.getIntegrationStatus(P)), [P]),
        { data: F, isLoading: K } = (0, O.YY)(s?.preview_application_id ?? void 0),
        W = null != P && T !== P,
        Q = z?.preview_ready === !0,
        Y = z?.has_activity === !0,
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
                [m, h] = i.useState(null),
                [g, p] = i.useState(t);
            g !== t && (p(t), d(null), h(null));
            let x = null != l && l === t ? l : null,
                v = (0, f.bG)([tI.default], () => tI.default.getId()),
                { applicationWidgetConfig: j } = (0, tS.A)(v, x ?? void 0),
                b = j?.surfaces,
                y = (0, tb.yZ)({
                    widgetTop: b?.[tA.m.WIDGET_TOP] != null,
                    widgetBottom: b?.[tA.m.WIDGET_BOTTOM] != null,
                    miniProfile: b?.[tA.m.MINI_PROFILE] != null,
                }),
                k = null != x && (o ? y.hasMainCard : y.hasAny),
                { data: w } = (0, O.YY)(l ?? void 0),
                N = null != l && w?.bot?.id != null,
                { data: A, isLoading: S } = (0, O.YY)(t ?? void 0),
                C = n || (0, tE.X)(A),
                E = null != t && S && null == A,
                I = (0, tb.P5)(a, {
                    legacy: { hasFrame: C, hasProfileWidget: k, hasBotDm: N },
                    widgetResolvable: null != x,
                    botDmResolvable: N,
                }),
                M = (0, tb.Xm)({ installScope: r, ...I, hasOverlay: u, ownerAuthorizationRevoked: s }),
                T = i.useMemo(() => (0, tM.hR)(a), [a]),
                _ = (0, tM.PH)(m, T);
            return (
                i.useEffect(() => {
                    if (null != t) for (let e of (0, ty.Mm)(t)) e.surface.type !== _ && (0, tC.r)(e.id);
                }, [t, _]),
                {
                    availability: M,
                    isResolving: E,
                    activeMode: E ? null : (0, tb.Qs)(c, M),
                    setMode: d,
                    frameSurface: _,
                    frameSurfaceOptions: T,
                    setFrameSurface: h,
                    widgetApplicationId: x,
                }
            );
        })({
            applicationId: s?.preview_application_id ?? null,
            previewApplicationId: s?.preview_application_id ?? null,
            declaredActivity: Y,
            previewSupportedSurfaces: s?.preview_supported_surfaces,
            installScope: s?.install_scope ?? null,
            ownerAuthorizationRevoked: z?.owner_authorization_revoked === !0,
            supportsOverlay: s?.preview_supported_surfaces?.includes(ee.q7.OVERLAY) === !0,
        }),
        eo =
            ((t = (0, f.bG)(
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
                : tx);
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
        ep = i.useCallback(
            (e) => {
                ("frame" === e.mode && ei(e.surface), el(e.mode));
            },
            [ei, el],
        ),
        ex = (0, tb.Qg)({
            installScope: s?.install_scope ?? null,
            previewReady: Q,
            integrationInstalled: z?.integration_installed ?? null,
            botPermissionsChanged: z?.bot_permissions_changed === !0,
        }),
        ev = h && !p,
        ej = ed.intl.string(ev ? ec.default.JD6Oit : ec.default.xjJAQm),
        ew = i.useCallback(() => {
            if (p) {
                (x(!1), g(!0));
                return;
            }
            g((e) => !e);
        }, [p]),
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
                (x(!1), g(!0), (e = e4(P)).active || e5(P, { ...e, active: !0 }));
            }
        }, [P, eA]),
        e_ = i.useCallback(() => {
            x((e) => !e && (g(!0), !0));
        }, []),
        eP = i.useCallback(() => x(!1), []),
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
                    x(!1),
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
        eL = (0, f.bG)([tp.A], () => tp.A.isBuilderPreviewMobile()),
        eD = ed.intl.string(eL ? ec.default.tKGF0Q : ec.default.peqEOY),
        e$ = i.useCallback(() => (0, eC.GG)(!eL), [eL]),
        ez = (0, f.bG)([tp.A], () => tp.A.isBuilderPreviewLandscape()),
        eF = ed.intl.string(ez ? ec.default.tunI2l : ec.default.DoNdjA),
        eO = i.useCallback(() => (0, eC.Lw)(!ez), [ez]),
        eU = (0, ty.jS)(s),
        eG = i.useMemo(() => (0, ty.Op)(eU, en), [eU, en]),
        eq = (0, B.A)(s?.preview_application_id ?? null, eG),
        eB = (0, tU.x1)(eq) && eq.data.proxyTicketRefreshing,
        eK = i.useCallback(() => {
            null == eq || eB || q.A.refreshProxyTicket(eq.id);
        }, [eq, eB]),
        eH = i.useCallback(() => {
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
                        l = em(e);
                    null != l
                        ? (0, v.P)((0, j.o)(l, b.Ck.FAILURE))
                        : (0, m.A)({
                              title: ed.intl.formatToPlainString(ec.default["Gm+u1+"], { name: s.name }),
                              subtitle: ed.intl.string(ec.default.M7H3sJ),
                              confirmText: ed.intl.string(ec.default.gFHykw),
                              variant: "critical",
                              onConfirm: async () => {
                                  g(!0);
                                  try {
                                      await ef(t, e, ed.intl.string(ec.default.Owerd3));
                                  } catch {
                                      (0, v.P)((0, j.o)(ed.intl.string(ec.default["Q+l4Hv"]), b.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [s],
            ),
        ),
        eJ = i.useCallback(() => {
            null != s && (0, l2.A)(s, d);
        }, [s, d]),
        eX = i.useCallback(async () => {
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
            eX(),
            () => {
                ($.current?.abort(), ($.current = null));
            }
        ),
        [eX],
    );
    let eQ = (0, lY.a)(s ?? null, z ?? null, d),
        eY = ((n = s?.application_id ?? null), (0, f.bG)([lg.Ay], () => (null == n ? null : (0, lU.i8)(d, n)), [d, n])),
        eZ = i.useMemo(() => (null == eY ? null : () => (0, V.pX)(eb.BVt.CHANNEL(d, eY))), [d, eY]),
        e0 = i.useCallback(async () => {
            null != s && (await (0, lY.$)(s, eQ));
        }, [eQ, s]),
        e1 = i.useCallback(async () => {
            try {
                await e0();
            } catch {}
            await eX();
        }, [eX, e0]),
        e2 = i.useMemo(() => {
            let e = s?.preview_application_id;
            return null == e || K || W
                ? null
                : {
                      ...(0, tV.i)({ applicationId: e, application: F ?? null, guildId: eQ }),
                      onClose: () => {
                          e1();
                      },
                  };
        }, [W, e1, eQ, K, F, s?.preview_application_id]),
        e3 = (0, tb.JR)(et, ex)
            ? { type: "permissions", authorizeProps: e2 }
            : W && null == z
              ? { type: "checking" }
              : void 0,
        e6 = (0, f.bG)([eE.Ay], () => null != P && eE.Ay.isProjectDeleting(P), [P]);
    i.useEffect(() => {
        ((null == s && u) || e6) && (0, V.bG)(eb.BVt.CHANNEL(d, ey.VV.CONJURE));
    }, [d, s, u, e6]);
    let e8 = i.useMemo(() => ({ guildId: d, platform: d2, busy: W || K }), [d, W, K]),
        e9 = (0, lo.Ay)(P, e8),
        tl = e9?.intent === "open" && "channel" === e9.destination ? e9.appChannelId : null,
        tr = (0, f.bG)([X.A], () => (null == tl ? null : X.A.getChannel(tl)), [tl]),
        ti = (0, U.Ay)(tr),
        ts = (0, G.gU)(tr),
        to =
            null != ti && null != ts
                ? ed.intl.format(ec.default.gR7PUV, {
                      channel: ti,
                      channelIconHook: (e, t) =>
                          (0, r.jsx)(ts, { size: "xs", color: "currentColor", className: dQ.Y2 }, t),
                  })
                : e9?.label,
        tu = e9?.upToDate === !0 ? ed.intl.string(ec.default.X0kGp2) : (e9?.disabledReason ?? null),
        tc =
            null == e9
                ? null
                : (0, r.jsx)("div", {
                      className: dQ.As,
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
        tf = (0, r.jsx)(dK, {
            title: s?.name ?? ed.intl.string(ec.default.G1WwgK),
            breadcrumb: { title: ed.intl.string(ec.default.uk6jhJ), onClick: c },
            project: s,
            onOpenProjectSettings: td,
            actions:
                null == s
                    ? null
                    : (0, r.jsxs)("div", {
                          className: dQ.FO,
                          children: [
                              (0, r.jsx)(tH, {
                                  targets: eh,
                                  target: null == et ? null : "frame" === et ? { mode: et, surface: en } : { mode: et },
                                  onChange: ep,
                              }),
                              eu
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            "overlay" === et
                                                ? null
                                                : (0, r.jsx)(H.A.Icon, {
                                                      icon: eL ? d0 : dZ,
                                                      tooltip: eD,
                                                      "aria-label": eD,
                                                      selected: eL,
                                                      onClick: e$,
                                                  }),
                                            eL && "overlay" !== et
                                                ? (0, r.jsx)(H.A.Icon, {
                                                      icon: d1,
                                                      tooltip: eF,
                                                      "aria-label": eF,
                                                      selected: ez,
                                                      onClick: eO,
                                                  })
                                                : null,
                                            (0, r.jsx)(H.A.Icon, {
                                                ref: eS,
                                                icon: C.x,
                                                iconClassName: dQ.D8,
                                                tooltip: eM,
                                                "aria-label": eM,
                                                selected: eA,
                                                disabled: eI,
                                                onClick: eT,
                                            }),
                                        ],
                                    })
                                  : null,
                              "frame" === et ? (0, r.jsx)(tG, { frame: eq, controlProjectId: s.id }) : null,
                              (0, r.jsx)("div", { className: dQ.YJ }),
                              k
                                  ? (0, r.jsx)(H.A.Icon, {
                                        icon: E.BugIcon,
                                        tooltip: ed.intl.string(ec.default.Mt5k9d),
                                        "aria-label": ed.intl.string(ec.default.Mt5k9d),
                                        selected: p,
                                        onClick: e_,
                                    })
                                  : null,
                              (0, r.jsx)(H.A.Icon, {
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
                                  onRefresh: (0, tU.x1)(eq) ? eK : void 0,
                                  isRefreshing: eB,
                                  onClose: eH,
                                  onExport: eV,
                                  onImport: eW.open,
                                  onRemix: eJ,
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
                                  : (0, r.jsx)(H.A.Icon, { icon: dY, tooltip: ej, "aria-label": ej, onClick: ew }),
                          ],
                      }),
        });
    return (0, r.jsxs)("div", {
        className: o()(dQ.nj, dX.T),
        children: [
            eW.input,
            (0, r.jsx)("main", {
                className: dQ.JX,
                children:
                    null == s
                        ? (0, r.jsxs)("div", {
                              className: dQ.j5,
                              children: [
                                  tf,
                                  (0, r.jsxs)("div", {
                                      className: dQ.sD,
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
                                  dq,
                                  {
                                      projectId: s.id,
                                      designFeedbackToggleRef: eS,
                                      applicationId: s.preview_application_id,
                                      previewApplicationId: s.preview_application_id,
                                      surface: eG,
                                      header: tf,
                                      chatOpen: h,
                                      onCloseChat: eN,
                                      chatHeaderAction: tc,
                                      debugOpen: k && p,
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
function d5(e) {
    let {
            projects: t,
            idea: n,
            guildId: a,
            submitting: s,
            createError: u,
            createDisabled: c,
            conjureTarget: d,
            onConjureTargetChange: m,
            eligibleGuilds: h,
            modelSettings: g,
            onModelSettingsChange: p,
            onSelectProject: x,
            onIdeaChange: k,
            onCreate: w,
            onCreateFromTemplate: N,
            onStartTemplate: C,
            onSubmitTemplate: E,
            onCancelTemplate: I,
            onSkipTemplate: M,
            onImportNewProject: z,
            importing: F,
        } = e,
        [O, U] = i.useState(() => ({ guildId: a, filter: lK(a) })),
        G = (O.guildId === a ? O.filter : lK(a)) ?? a,
        q = i.useCallback(
            (e) => {
                (lB.set(a, e), U({ guildId: a, filter: e }));
            },
            [a],
        ),
        B = (0, f.yK)(
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
        K = i.useMemo(
            () => [
                { id: "conjure-filter-all", value: "all", leading: D.D, label: ed.intl.string(ec.default["Xi/oIC"]) },
                {
                    id: "conjure-filter-user",
                    value: lG,
                    leading: ep.UserIcon,
                    label: ed.intl.string(ec.default.kCSgmG),
                },
                {
                    id: "conjure-filter-no-server",
                    value: lq,
                    leading: ex.R,
                    label: ed.intl.string(ec.default["3QFps8"]),
                },
                ...B.map((e) => ({
                    id: `conjure-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, r.jsx)(eK.Ay, { guild: e, size: eK.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [B],
        ),
        V = (0, f.yK)(
            [eE.Ay, Y.A],
            () => {
                let e = lH(G);
                if (null != e) return eE.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(Y.A.getGuilds()))
                    eE.Ay.hasFetchedGuildProjects(e.id) && t.push(...eE.Ay.getSharedProjects(e.id));
                return t;
            },
            [G],
        );
    i.useEffect(() => {
        let e = lH(G);
        null == e || eE.Ay.hasFetchedGuildProjects(e) || (0, eC.hF)(e);
    }, [G]);
    let W = i.useMemo(
            () =>
                V.filter((e) => lV(e, G)).sort((e, t) =>
                    null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                ),
            [V, G],
        ),
        J = i.useMemo(
            () => [
                {
                    label: ed.intl.string(ec.default.NyVn6T),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: eH,
                            label: ed.intl.string(ec.default.UPLaGM),
                            leading: ep.UserIcon,
                        },
                        ...h.map((e) => ({
                            id: `conjure-target-${e.id}`,
                            value: e.id,
                            label: e.name,
                            leading: (0, r.jsx)(eK.Ay, { guild: e, size: eK.Ay.Sizes.MINI, active: !0 }),
                        })),
                    ],
                },
            ],
            [h],
        ),
        X = i.useMemo(
            () =>
                t
                    .filter((e) => lV(e, G))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, G],
        ),
        Q = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, lU.Ot)(e, a)
                    ? x(e.id)
                    : (0, v.P)((0, j.o)(ed.intl.string(ec.default["XUl/cs"]), b.Ck.MESSAGE));
            },
            [a, x],
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
            (0, f.bG)([eE.Ay], () => {
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
        eo = lH(G) ?? a,
        eu = (0, f.bG)([eE.Ay], () => eE.Ay.getGuildProjectsFetchState(eo), [eo]),
        ef = (0, f.bG)([eE.Ay], () => eE.Ay.getGuildProjectsFetchState(a), [a]),
        [em, eh] = i.useState(lX),
        eg = i.useMemo(() => lW.w.get(lQ(a)) ?? !1, [a]),
        ev = "success" === ef,
        eb = (0, f.yK)([eE.Ay], () => eE.Ay.getSharedProjects(a), [a]).length > 0 || t.some((e) => lV(e, a)),
        ey = em ?? (!!eb || "error" === ef || (!ev && eg));
    i.useEffect(() => {
        ev && lW.w.set(lQ(a), eb);
    }, [ev, eb, a]);
    let ek = i.useCallback((e) => {
            (lW.w.set(lJ, e), eh(e));
        }, []),
        ew = i.useCallback(() => ek(!ey), [ek, ey]),
        eN = i.useCallback(() => ek(!1), [ek]),
        eS = ed.intl.string(ec.default.kar7jh),
        eM = ey ? eS : ed.intl.string(ec.default.WSc5Y2);
    return (0, r.jsx)("div", {
        className: o()(dQ.nj, dQ.a0, dX.T),
        children: (0, r.jsxs)("div", {
            className: dQ.Yo,
            children: [
                (0, r.jsxs)("main", {
                    className: dQ.ps,
                    children: [
                        (0, r.jsx)(dK, {
                            title: ed.intl.string(ec.default.uk6jhJ),
                            actions: (0, r.jsx)(H.A.Icon, {
                                icon: T.Z,
                                tooltip: eM,
                                "aria-label": eM,
                                selected: ey,
                                onClick: ew,
                            }),
                        }),
                        (0, r.jsx)(_.Ip, {
                            className: dQ.Yy,
                            children: (0, r.jsx)("div", {
                                className: dQ.Mo,
                                children: (0, r.jsxs)("section", {
                                    className: o()(dQ.Qs, dQ.Ix),
                                    children: [
                                        (0, r.jsx)(dJ, {}),
                                        (0, r.jsx)(eB, {}),
                                        (0, r.jsxs)("section", {
                                            className: dQ.WI,
                                            "aria-label": ea,
                                            children: [
                                                (0, r.jsxs)("div", {
                                                    className: dQ.G9,
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
                                                    listClassName: dQ.Aw,
                                                    radius: e_,
                                                    children: el.map((e) =>
                                                        (0, r.jsx)(
                                                            "li",
                                                            {
                                                                className: dQ.EA,
                                                                children: (0, r.jsxs)(eI, {
                                                                    disabled: s,
                                                                    ariaLabel: ed.intl.formatToPlainString(
                                                                        ec.default.jGyR6p,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: o()(dQ.nx, dQ.rz),
                                                                    onClick: () => en(e),
                                                                    children: [
                                                                        (0, r.jsx)(y.E, {
                                                                            className: dQ.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, r.jsx)(y.E, {
                                                                            className: dQ.BK,
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
                                            className: dQ.WI,
                                            "aria-label": ei,
                                            children: [
                                                (0, r.jsxs)("div", {
                                                    className: dQ.G9,
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
                                                    listClassName: dQ.Aw,
                                                    radius: eP,
                                                    children: et.map((e) =>
                                                        (0, r.jsx)(
                                                            "li",
                                                            {
                                                                className: dQ.EA,
                                                                children: (0, r.jsx)(eI, {
                                                                    disabled: s,
                                                                    className: dQ.nx,
                                                                    onClick: () => w(e),
                                                                    children: (0, r.jsx)(y.E, {
                                                                        variant: "text-md/semibold",
                                                                        color: "text-strong",
                                                                        className: dQ.un,
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
                            className: dQ.Yl,
                            children: (0, r.jsxs)("div", {
                                className: o()(dQ.Qs, dQ.DA),
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
                                        className: dQ.VP,
                                        children: [
                                            (0, r.jsx)("div", {
                                                className: dQ.gH,
                                                children: (0, r.jsx)(R.l, {
                                                    selectionMode: "single",
                                                    label: ed.intl.string(ec.default.NyVn6T),
                                                    hideLabel: !0,
                                                    placeholder: ed.intl.string(ec.default.NyVn6T),
                                                    options: J,
                                                    value: d,
                                                    onSelectionChange: m,
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
                                                onChange: p,
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
                    className: dQ.pA,
                    hidden: !ey,
                    "aria-label": ed.intl.string(ec.default.dWgSAa),
                    children: [
                        (0, r.jsxs)("div", {
                            className: dQ.IR,
                            children: [
                                (0, r.jsx)(y.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: dQ.RM,
                                    children: ed.intl.string(ec.default.dWgSAa),
                                }),
                                (0, r.jsxs)("div", {
                                    className: dQ.Ss,
                                    children: [
                                        (0, r.jsx)(ej, { importing: F, onImport: z }),
                                        (0, r.jsx)(H.A.Icon, { icon: L.P, tooltip: eS, "aria-label": eS, onClick: eN }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsxs)(_.Ip, {
                            className: dQ.xe,
                            children: [
                                (0, r.jsx)("div", {
                                    className: dQ.Vw,
                                    children: (0, r.jsx)(R.l, {
                                        selectionMode: "single",
                                        label: ed.intl.string(ec.default.U6TqU9),
                                        hideLabel: !0,
                                        options: K,
                                        value: G,
                                        onSelectionChange: q,
                                    }),
                                }),
                                (0, r.jsx)(y.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: dQ.wE,
                                    children: ed.intl.string(ec.default.JQpNkh),
                                }),
                                ("unattempted" === eu || "loading" === eu) && 0 === X.length
                                    ? (0, r.jsx)("div", { className: dQ.E8, children: (0, r.jsx)(A.y, {}) })
                                    : "error" === eu && 0 === X.length
                                      ? (0, r.jsxs)("div", {
                                            className: dQ.E8,
                                            children: [
                                                (0, r.jsx)(y.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: dQ.JS,
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
                                      : 0 === X.length
                                        ? (0, r.jsx)("div", {
                                              className: dQ.D1,
                                              children: (0, r.jsxs)("div", {
                                                  className: dQ.ST,
                                                  children: [
                                                      (0, r.jsx)(D.D, { size: "lg", color: $.A.colors.TEXT_SUBTLE }),
                                                      (0, r.jsx)(y.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: dQ.sI,
                                                          children: ed.intl.string(ec.default["9/5sLV"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, r.jsx)("div", {
                                              className: dQ.Dq,
                                              children: X.map((e) =>
                                                  (0, r.jsx)(
                                                      d3,
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
                                          className: dQ.qx,
                                          children: [
                                              (0, r.jsxs)("div", {
                                                  className: dQ.uc,
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
                                                  className: dQ.Dq,
                                                  children: W.map((e) =>
                                                      (0, r.jsx)(
                                                          d3,
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
function d7(e) {
    let t,
        { guildId: l, projectId: n } = e,
        a = (0, f.yK)([eE.Ay], () => eE.Ay.getOwnedProjects()),
        s = (0, f.yK)([Q.Ay], () => Q.Ay.getSelfMember(l)?.roles ?? [], [l]),
        o = (0, f.bG)(
            [Y.A, Z.A],
            () => {
                let e = Y.A.getGuild(l);
                return null != e && Z.A.can(eb.xBc.MANAGE_GUILD, e);
            },
            [l],
        ),
        [u, c] = i.useState(""),
        d = n ?? null,
        [m, h] = i.useState(!1),
        [g, p] = i.useState(null),
        x = (0, t3.z9)("VibegrationsScreen"),
        [y, k] = i.useState(null),
        w = (0, F.o)().get(tJ.f_) === eH;
    i.useEffect(() => {
        k(null);
    }, [l, w]);
    let N = i.useMemo(() => (!w && x.some((e) => e.id === l) ? l : eH), [x, l, w]),
        A = y ?? N,
        S = A === eH ? "user" : "guild",
        C = A === eH ? l : A,
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
                    l = eS({ idea: t, installScope: S, submitting: m });
                if ("idea" !== l && "submitting" !== l) {
                    (null != e && c(e), h(!0), p(null));
                    try {
                        await M((e) => (0, er.dv)(e, t), C, S);
                    } catch (e) {
                        p((0, eN.mG)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [M, S, C, u, m],
        ),
        _ = i.useCallback(
            async (e) => {
                if (!m) {
                    (h(!0), p(null));
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
                        p((0, eN.mG)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [M, S, C, m],
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
        [$, z] = i.useState(!1),
        O = i.useCallback(
            async (e, t) => {
                let n = em(e);
                if (null != n) return void (0, v.P)((0, j.o)(n, b.Ck.FAILURE));
                z(!0);
                let a = null;
                try {
                    ((a = await (0, eC.gA)({ guild_id: l, install_scope: t })),
                        (0, er.Hc)(a),
                        (0, er.r2)(a, E ?? ee.A4),
                        await ef(a, e, ed.intl.string(ec.default["LUc7/5"])),
                        (0, V.pX)(eb.BVt.CHANNEL(l, ey.VV.CONJURE, a)),
                        I(null));
                } catch {
                    (null != a && (await (0, eC.xx)(a).catch(() => void 0)),
                        (0, v.P)((0, j.o)(ed.intl.string(ec.default["Q+l4Hv"]), b.Ck.FAILURE)));
                } finally {
                    z(!1);
                }
            },
            [l, E],
        ),
        U = i.useCallback(
            (e) => {
                (0, V.pX)(eb.BVt.CHANNEL(l, ey.VV.CONJURE, e));
            },
            [l],
        ),
        G = i.useCallback(() => {
            (0, V.pX)(eb.BVt.CHANNEL(l, ey.VV.CONJURE));
        }, [l]),
        q = i.useCallback((e) => {
            (c(e), p(null));
        }, []),
        B = (0, f.bG)(
            [eE.Ay],
            () => {
                if (null == d) return null;
                let e = eE.Ay.getProject(d);
                return null == e || (0, eE.PV)(e) || e.guild_id === l ? e : null;
            },
            [d, l],
        ),
        K = (0, f.bG)([eE.Ay], () => eE.Ay.hasFetchedGuildProjects(l), [l]);
    return null != d
        ? (0, r.jsx)(d4, { project: B, projectsLoaded: K, onBack: G, guildId: l }, d)
        : (0, r.jsx)(d5, {
              projects: a,
              modelSettings: E,
              onModelSettingsChange: I,
              idea: u,
              guildId: l,
              submitting: m,
              createError: g,
              createDisabled: "idea" === (t = eS({ idea: u, installScope: S, submitting: m })) || "submitting" === t,
              onSelectProject: U,
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
              eligibleGuilds: x,
          });
}
