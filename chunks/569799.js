(l.r(t), l.d(t, { default: () => dR }), l(321073));
var n,
    a,
    r = l(477900),
    i = l(582128),
    s = l(503698),
    u = l.n(s),
    o = l(536637),
    d = l.n(o),
    c = l(478104),
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
    A = l(140735),
    N = l(289873),
    C = l(821609),
    S = l(604525),
    E = l(92446),
    I = l(625903),
    T = l(297264),
    M = l(97893),
    _ = l(364522),
    P = l(103557),
    R = l(691885),
    L = l(789645),
    D = l(152367),
    z = l(661531),
    F = l(442433),
    O = l(458518),
    U = l(627363),
    G = l(47167),
    $ = l(713654),
    q = l(625180),
    B = l(672929),
    H = l(775946),
    V = l(742589),
    K = l(976860),
    W = l(402860),
    J = l(885386),
    X = l(734057),
    Y = l(696451),
    Q = l(71393),
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
    eu = l(264572).Buffer;
async function eo(e, t) {
    if (es.isPlatformEmbedded) {
        let l = eu.from(await e.arrayBuffer());
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
var ed = l(248675),
    ec = l(375708);
async function em(e, t, l) {
    (0, er.Hc)(e);
    let n = await (0, er.vX)(e, t);
    (0, er.dv)(e, l, [n]);
}
function ef(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, ee.Oq)(e.size, t)
        ? null
        : ec.intl.formatToPlainString(ed.default.ThxcOX, { size: (0, ee.sM)((0, ee.Ju)(t)) });
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
    await eo(a, n);
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
    { value: "user", icon: ex.UserIcon, nameMessage: ed.default.s1TsXl },
    { value: "guild", icon: ep.R, nameMessage: ed.default.LlLIJw },
];
function ej(e) {
    let { importing: t, onImport: l } = e,
        n = i.useRef(null),
        a = eg(i.useCallback((e) => l(e, "user"), [l])),
        s = eg(i.useCallback((e) => l(e, "guild"), [l])),
        u = { user: a.open, guild: s.open };
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
                        "aria-label": ec.intl.string(ed.default.soVyD1),
                        onClose: t,
                        onSelect: t,
                        children: (0, r.jsx)(en.rX, {
                            label: ec.intl.string(ed.default.NyVn6T),
                            children: ev
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: ec.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, r.jsx)(
                                        en.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: u[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, l) => {
                    let { isShown: a } = l;
                    return (0, r.jsx)(C.$, {
                        ...e,
                        buttonRef: n,
                        variant: "secondary",
                        size: "sm",
                        icon: ea.H,
                        text: ec.intl.string(ed.default.NJGZA3),
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
    ek = l(404373),
    ew = l(639519),
    eA = l(361504);
function eN(e) {
    let { idea: t, installScope: l, submitting: n } = e;
    return n ? "submitting" : "" === t.trim() ? "idea" : null == l ? "scope" : null;
}
var eC = l(371169),
    eS = l(260498);
function eE(e) {
    let { className: t, ariaLabel: l, disabled: n, onClick: a, children: i } = e;
    return (0, r.jsx)(k.D, { "aria-disabled": n, "aria-label": l, className: t, onClick: n ? void 0 : a, children: i });
}
var eI = l(865665),
    eT = l(373913);
let eM = { x: 5, y: 7 },
    e_ = { x: 5, y: 4 };
function eP(e) {
    let { listClassName: t, radius: l, children: n } = e,
        [a, s] = i.useState(!1);
    return (0, r.jsxs)("div", {
        className: eT.n,
        onMouseEnter: () => s(!0),
        onMouseLeave: () => s(!1),
        children: [
            (0, r.jsx)("ol", { className: t, children: n }),
            a ? (0, r.jsx)(eI.C, { area: 64, radius: l, color: z.A.colors.TEXT_BRAND }) : null,
        ],
    });
}
var eR = l(864970),
    eL = l(707554),
    eD = l(770178),
    ez = l(765548),
    eF = l(595528),
    eO = l(885576),
    eU = l(662429);
let eG = "heading-xxl/semibold",
    e$ = !1;
function eq() {
    let e = i.useRef(null),
        [t, l] = i.useState(!0),
        n = (0, ez.A)((e) => {
            l(e.target.clientWidth >= 500);
        }),
        a = (0, eD.w)(n, [], { fireOnMount: !0 }),
        s = (0, m.bG)([eF.A], () => eF.A.isConnected());
    i.useEffect(() => {
        if (!s || !t || e$) return;
        let l = !1,
            n = 0;
        function a() {
            l ||
                (n = window.setTimeout(() => {
                    ((e$ = !0), e.current?.play());
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
    let u = (0, m.bG)([eO.A], () => eO.A.isIdle()),
        o = i.useRef(u);
    i.useEffect(() => {
        let t = o.current && !u;
        ((o.current = u), t && e$ && (e.current?.stop(), e.current?.play()));
    }, [u]);
    let d = ec.intl.string(ed.default["+5XyCR"]);
    return (0, r.jsx)("div", {
        ref: a,
        className: eU.x,
        children: t
            ? (0, r.jsx)(eL.H, { children: (0, r.jsx)(eR.o, { ref: e, text: d, variant: eG, delay: null }) })
            : (0, r.jsx)(T.D, { variant: eG, children: d }),
    });
}
var eB = l(548118);
let eH = "user",
    eV = Object.freeze({ x: 0.5, y: 0.5 });
function eK(e) {
    return "" !== e.trim();
}
function eW(e) {
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
    let { kind: t, name: l } = eW(e);
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
let eY = "[vibegrations:selected] ",
    eQ = " \u2014 ";
function eZ(e) {
    if (!e.startsWith(eY)) return null;
    let t = e.indexOf("\n"),
        l = -1 === t ? e : e.slice(0, t),
        n = -1 === t ? "" : e.slice(t + 1),
        a = l.slice(eY.length),
        r = a.indexOf(eQ),
        i = (-1 === r ? a : a.slice(0, r)).trim();
    return "" === i ? null : { label: i, body: n };
}
let e0 = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    e1 = new Map(),
    e2 = new Set();
function e3(e) {
    return e1.get(e) ?? e0;
}
function e5(e, t) {
    for (let l of (t.active || 0 !== t.annotations.length ? e1.set(e, t) : e1.delete(e), [...e2]))
        try {
            l();
        } catch (e) {
            console.error("[vibegrations] design feedback subscriber threw", e);
        }
}
function e4(e) {
    e1.has(e) && e5(e, e0);
}
function e7(e, t) {
    let l = e3(e);
    l.active && e5(e, { ...l, context: t });
}
function e6(e, t) {
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
var te = l(192308),
    tt = l(855793),
    tl = l(128761),
    tn = l(967008),
    ta = l(900797),
    tr = l(320448),
    ti = l(783977),
    ts = l(344587),
    tu = l(534554),
    to = l(837984),
    td = l(359589),
    tc = l(254575);
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
function tf(e) {
    let { settings: t, tiers: l, choices: n, disabled: a, onChange: s, placement: o, open: d, entered: c } = e,
        [m, f] = i.useState(!1),
        h = tm(m),
        g = ee.PY.indexOf(t.tier),
        x = m ? ta.t : tr._,
        p = ee.PY.map(tu.D0),
        v = (0, tu.Tc)(t.tier),
        { text: j, phase: b } = (0, ts.Q)(v);
    return (0, r.jsx)("div", {
        className: tc.qd,
        "data-placement": o ?? void 0,
        children: (0, r.jsxs)("div", {
            className: u()(tc.t$, { [tc.Zr]: d && c, [tc.GF]: !d }),
            role: "dialog",
            "aria-label": ec.intl.string(ed.default["3E7Yc0"]),
            children: [
                h.mounted
                    ? (0, r.jsx)("div", {
                          className: u()(tc.Nr, tc.uO, { [tc.Zr]: m && h.entered, [tc.GF]: !m }),
                          children: (0, r.jsx)(td.bR, { settings: t, tiers: l, choices: n, disabled: a, onChange: s }),
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
                                    "aria-label": ec.intl.string(ed.default.eGqPbV),
                                    onClick: () => f((e) => !e),
                                    children: [
                                        (0, r.jsx)(y.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: ec.intl.string(ed.default.aBPQxX),
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
                                (0, r.jsx)(y.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: u()(tc.Z, { [tc.xQ]: "exit" === b, [tc.lm]: "enter" === b }),
                                    children: j,
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: tc.hs,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: tc.Nb,
                                    children: [
                                        (0, r.jsx)(y.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: ec.intl.string(ed.default["/tlOR5"]),
                                        }),
                                        (0, r.jsx)(y.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: ec.intl.string(ed.default.FxoUwB),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(to.A, {
                                    activeIndex: g,
                                    stops: p,
                                    ariaLabel: ec.intl.string(ed.default.aBPQxX),
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
function th(e) {
    let { settings: t, tiers: l, choices: n, disabled: a, onChange: s, className: u, icon: o } = e,
        d = i.useRef(null),
        [c, m] = (0, td.FT)(t, s),
        [f, h] = i.useState(!1),
        { mounted: g, entered: x } = tm(f);
    return (0, r.jsx)(et.Y, {
        targetElementRef: d,
        position: "top",
        align: "right",
        shouldShow: g,
        onRequestClose: () => h(!1),
        animation: et.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, r.jsx)(tf, {
                settings: c,
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
                text: ec.intl.string(ed.default["k2JN/p"]),
                shouldShow: !l,
                ariaHidden: !0,
                children: (0, r.jsx)(k.D, {
                    innerRef: d,
                    className: u ?? tc.hZ,
                    "aria-label": ec.intl.string(ed.default["k2JN/p"]),
                    ...e,
                    onClick: () => h((e) => !e),
                    "aria-expanded": f,
                    children: o ?? (0, r.jsx)(ti.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
var tg = l(111534),
    tx = l(573083),
    tp = l(855859),
    tv = l(238490),
    tj = l(754027),
    tb = l(598748),
    ty = l(294323),
    tk = l(25451),
    tw = l(280450),
    tA = l(86147),
    tN = l(729475),
    tC = l(91242),
    tS = l(869146),
    tE = l(475815),
    tI = l(621466);
function tT(e) {
    return null == e ? null : document.querySelector(`[data-frame-id="${CSS.escape(e)}"]`);
}
function tM(e) {
    let t, l;
    return (
        null != e &&
        ((l =
            (t = document).fullscreenElement ??
            t.webkitFullscreenElement ??
            t.mozFullScreenElement ??
            t.msFullscreenElement ??
            null),
        ((0, tI.vq)(l, Element) ? l.getAttribute("data-frame-id") : null) === e)
    );
}
function t_(e) {
    return (0, tE.a3)(document, e);
}
function tP(e) {
    return i.useSyncExternalStore(t_, () => tM(e));
}
var tR = l(165610);
function tL(e) {
    let { frame: t, controlProjectId: l } = e,
        n = tP(t?.id ?? null),
        a = (0, tx.Zv)(l),
        i = (0, m.bG)(
            [tS.A, tC.A],
            () => null != t && tS.A.getWindowOpen(eb.MLl.ACTIVITY_POPOUT) && tC.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, tR.x1)(t) || i || a) return null;
    let s = tT(t.id);
    if (null == s || !(0, tE.Ub)(s)) return null;
    let u = ec.intl.string(n ? ec.t.Z7MyNB : ec.t.OIDkcp);
    return (0, r.jsx)(V.A.Icon, {
        tooltip: u,
        icon: n ? tA.z : tN.T,
        "aria-label": u,
        role: "switch",
        "aria-checked": n,
        selected: n,
        onClick: () => {
            var e;
            let l;
            null != (l = tT((e = t.id))) && (0, tE.Ub)(l) && (tM(e) ? (0, tE.sP)(l) : (0, tE.tl)(l));
        },
    });
}
var tD = l(629584),
    tz = l(696645),
    tF = l(861899);
function tO(e) {
    let { modes: t, mode: l, onChange: n, className: a } = e,
        s = i.useMemo(() => t.map((e) => ({ value: e, name: (0, tz.kZ)(e), "aria-controls": (0, tz.z3)(e) })), [t]),
        o = i.useCallback(
            (e) => {
                n(e.value);
            },
            [n],
        );
    return null == l
        ? null
        : (0, r.jsx)(tD.I, {
              role: "tablist",
              look: "pill",
              className: u()(tF.b, a),
              optionClassName: tF.u,
              options: s,
              value: l,
              onChange: o,
          });
}
var tU = l(226178),
    tG = l(434279),
    t$ = l(941985),
    tq = l(287809),
    tB = l(427262),
    tH = l(245179),
    tV = l(803306);
let tK = new Set(),
    tW = new Map();
function tJ(e, t, l) {
    return null == e ? (l ?? null) : (t ?? null);
}
function tX(e) {
    if (null == e || tK.has(e) || null != tq.default.getUser(e)) return;
    let t = tW.get(e) ?? 0;
    t >= 3 ||
        (tW.set(e, t + 1),
        tK.add(e),
        tV
            .wz(e)
            .finally(() => tK.delete(e))
            .catch(() => {}));
}
var tY = l(16619),
    tQ = l(782603),
    tZ = l(780338),
    t0 = l(663417),
    t1 = l(70688),
    t2 = l(173936),
    t3 = l(473935),
    t5 = l(408278),
    t4 = l(365199),
    t7 = l(7437),
    t6 = l(147036),
    t8 = l(957565),
    t9 = l(785389),
    le = l(123917);
let lt = new Set();
var ll = l(289106),
    ln = l(616334),
    la = l(189714),
    lr = l(552821);
let li = [];
function ls(e) {
    (0, v.P)((0, j.o)(e, b.Ck.FAILURE));
}
function lu(e) {
    let {
            projectId: t,
            projectName: l,
            guildId: n,
            projectGuildId: a,
            isOwner: s,
            canRemix: u,
            onExport: o,
            onImport: d,
            onRemix: c,
            onConnectTool: h,
            onHistory: g,
            onRefresh: x,
            isRefreshing: p = !1,
            onClose: y,
            refreshApplicationId: k,
            previewProjectId: w,
            onCloseMenu: A,
        } = e,
        N = (0, la.iI)(t),
        C = i.useContext(ll.bI),
        { pending: S, refresh: E } = (0, t7.A)(k ?? null),
        { pending: T, connect: M } = (function (e, t) {
            let [l, n] = i.useState(lt),
                a = i.useRef(lt),
                r = i.useCallback((e) => {
                    ((a.current = (0, t9.Q6)(a.current, e)), n(a.current));
                }, []);
            return {
                pending: l,
                connect: i.useCallback(
                    (l) => {
                        if (null == e) return;
                        let i = (0, t9.K9)(a.current, l.type);
                        async function s() {
                            let n = await (0, er.JI)(e, l.type);
                            (r(l.type), "url" === n.type)
                                ? (0, le.h)({ href: n.url, trusted: !1 })
                                : t(
                                      "setup" === (0, t9.rq)(n.error)
                                          ? ec.intl.string(ed.default["jCQ/1B"])
                                          : ec.intl.string(ed.default.POxkSh),
                                  );
                        }
                        null != i && ((a.current = i), n(i), s().catch(() => r(l.type)));
                    },
                    [t, e, r],
                ),
            };
        })(w ?? null, ls),
        _ = (0, m.bG)([er.Ay], () => (null == w ? li : er.Ay.getDeclaredConnections(w))),
        P = (function (e) {
            let { canRefresh: t, refreshPending: l, offers: n, connectPending: a } = e,
                r = [];
            for (let { connection: e, offer: i } of (t &&
                r.push({
                    id: "preview-refresh",
                    label: ec.intl.string(ed.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: l,
                }),
            n))
                r.push(
                    "authorize" === i
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: ec.intl.formatToPlainString(ed.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: a.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: ec.intl.formatToPlainString(ed.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return r;
        })({
            canRefresh: null != k,
            refreshPending: S,
            offers: i.useMemo(() => (0, t9.Xl)(_), [_]),
            connectPending: T,
        }),
        R = i.useMemo(() => new Map(_.map((e) => [e.type, e])), [_]),
        L = null != c && u,
        D = s && null != d,
        z = L || null != o || D || null != h || null != g,
        F = t8.p5 && null != n,
        O = t8.p5,
        U = N ? tQ.BellIcon : tZ.BellSlashIcon;
    return (0, r.jsxs)(el.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": ec.intl.string(ec.t.ogxXGq),
        onClose: A,
        onSelect: A,
        children: [
            null != x || null != y
                ? (0, r.jsxs)(en.rX, {
                      children: [
                          null != x
                              ? (0, r.jsx)(en.Dr, {
                                    id: "refresh",
                                    icon: t0.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: t0.RefreshIcon },
                                    label: ec.intl.string(ed.default["p4B/7M"]),
                                    disabled: p,
                                    action: x,
                                })
                              : null,
                          null != y
                              ? (0, r.jsx)(en.Dr, {
                                    id: "close",
                                    icon: t1.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: t1.DoorExitIcon },
                                    label: ec.intl.string(ed.default["/TlGcK"]),
                                    action: y,
                                })
                              : null,
                      ],
                  })
                : null,
            P.length > 0
                ? (0, r.jsx)(en.rX, {
                      children: P.map((e) =>
                          (0, r.jsx)(
                              en.Dr,
                              {
                                  id: e.id,
                                  label: e.label,
                                  disabled: e.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === e.kind) return void E();
                                      let t = null == e.connectionType ? null : R.get(e.connectionType);
                                      null != t && M(t);
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
                    label: ec.intl.string(N ? ed.default.s9rCuH : ed.default["a+i/As"]),
                    icon: U,
                    leadingAccessory: { type: "icon", icon: U },
                    action: () => (0, la.$L)(t, !N),
                }),
            }),
            z
                ? (0, r.jsxs)(en.rX, {
                      children: [
                          L
                              ? (0, r.jsx)(en.Dr, { id: "remix", label: ec.intl.string(ed.default.XWgAfc), action: c })
                              : null,
                          null != o
                              ? (0, r.jsx)(en.Dr, { id: "export", label: ec.intl.string(ed.default.WsEEP7), action: o })
                              : null,
                          D
                              ? (0, r.jsx)(en.Dr, { id: "import", label: ec.intl.string(ed.default.rWGY3e), action: d })
                              : null,
                          null != h
                              ? (0, r.jsx)(en.Dr, {
                                    id: "connect-tool",
                                    label: ec.intl.string(ed.default.yOIql5),
                                    action: h,
                                })
                              : null,
                          null != g
                              ? (0, r.jsx)(en.Dr, {
                                    id: "history",
                                    label: ec.intl.string(ed.default["3hIVou"]),
                                    action: g,
                                })
                              : null,
                      ],
                  })
                : null,
            O
                ? (0, r.jsxs)(en.rX, {
                      children: [
                          F
                              ? (0, r.jsx)(en.Dr, {
                                    id: "copy-link",
                                    label: ec.intl.string(ec.t.WqhZss),
                                    icon: t2.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: t2.LinkIcon },
                                    action: () =>
                                        (0, t8.C)((0, t6.n)(n, ey.VV.CONJURE, t), () =>
                                            (0, v.P)((0, j.o)(ec.intl.string(ec.t["L/PwZf"]), b.Ck.SUCCESS)),
                                        ),
                                })
                              : null,
                          (0, r.jsx)(en.Dr, {
                              id: "copy-project-id",
                              label: ec.intl.string(ed.default["nm/zuU"]),
                              icon: t3.L,
                              leadingAccessory: { type: "icon", icon: t3.L },
                              action: () =>
                                  (0, t8.C)(t, () =>
                                      (0, v.P)((0, j.o)(ec.intl.string(ed.default.CmfaZG), b.Ck.SUCCESS)),
                                  ),
                          }),
                      ],
                  })
                : null,
            s
                ? (0, r.jsxs)(en.rX, {
                      children: [
                          (0, r.jsx)(en.Dr, {
                              id: "settings",
                              label: ec.intl.string(ed.default.FzfmQ8),
                              icon: I.SettingsIcon,
                              leadingAccessory: { type: "icon", icon: I.SettingsIcon },
                              action: () =>
                                  (0, ln.A)(t, {
                                      guildId: a ?? n,
                                      initialTab: "project",
                                      isPreview: !0,
                                      publishOptions: C,
                                  }),
                          }),
                          (0, r.jsx)(en.Dr, {
                              id: "delete",
                              label: ec.intl.string(ec.t.oyYWHE),
                              color: "danger",
                              action: () => {
                                  (0, f.A)({
                                      title: ec.intl.formatToPlainString(ed.default.CJBhb2, { name: l }),
                                      subtitle: ec.intl.string(ed.default["0OmrVn"]),
                                      confirmText: ec.intl.string(ec.t.oyYWHE),
                                      variant: "critical",
                                      onConfirm: () => {
                                          (0, eC.K)(t, () =>
                                              (0, v.P)((0, j.o)(ec.intl.string(ed.default["0XDHob"]), b.Ck.FAILURE)),
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
function lo(e) {
    let { trigger: t = "header", ...l } = e,
        n = i.useRef(null);
    return (0, r.jsx)(et.Y, {
        targetElementRef: n,
        position: "bottom",
        align: "right",
        animation: et.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(lu, { ...l, onCloseMenu: t });
        },
        children: (e, l) => {
            let { onClick: a } = e,
                { isShown: i } = l;
            return (0, r.jsx)("div", {
                ref: n,
                className: lr.h,
                children:
                    "iconButton" === t
                        ? (0, r.jsx)(w.m, {
                              text: ec.intl.string(ec.t["UKOtz+"]),
                              children: (0, r.jsx)(t5.K, {
                                  icon: t4.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": ec.intl.string(ec.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": i,
                                  onClick: a,
                              }),
                          })
                        : (0, r.jsx)(V.A.Icon, {
                              icon: t4.MoreHorizontalIcon,
                              tooltip: ec.intl.string(ec.t["UKOtz+"]),
                              "aria-label": ec.intl.string(ec.t["UKOtz+"]),
                              "aria-haspopup": "menu",
                              "aria-expanded": i,
                              selected: i,
                              onClick: a,
                          }),
            });
        },
    });
}
var ld = l(845079),
    lc = l(104171),
    lm = l(286739);
function lf(e) {
    let { creator: t, className: l } = e;
    return (0, r.jsx)("div", {
        className: u()(lm.c, l),
        "aria-hidden": !0,
        children: (0, r.jsx)(lc.Ay, { users: [t.creator, ...t.collaborators], max: 3, size: lc.DN.SIZE_16 }),
    });
}
var lh = l(580954),
    lg = l(246338);
let lx = "user",
    lp = "no-server",
    lv = new Map();
function lj(e) {
    return lv.get(e) ?? null;
}
function lb(e) {
    switch (e) {
        case "all":
        case lx:
        case lp:
            return null;
        default:
            return e;
    }
}
function ly(e, t) {
    switch (t) {
        case "all":
            return !0;
        case lx:
            return "user" === e.install_scope;
        case lp:
            return null == (0, tG.wu)(e);
        default:
            return e.guild_id === t || e.preview_guild_id === t;
    }
}
var lk = l(506774);
let lw = "VibegrationsProjectsPanelOpen";
function lA() {
    return lk.w.get(lw) ?? null;
}
function lN(e) {
    return `VibegrationsProjectsPanel:${e}`;
}
var lC = l(803101),
    lS = l(808728),
    lE = l(189213),
    lI = l(516288);
function lT(e) {
    let { reason: t, transitionState: l, onClose: n } = e,
        a = t === lI.k.PERMISSIONS;
    return (0, r.jsx)(lE.a, {
        transitionState: l,
        onClose: n,
        title: ec.intl.string(a ? ed.default.wQ4UyJ : ed.default.ZNGLFE),
        subtitle: ec.intl.string(a ? ed.default.Agqmbt : ed.default.ffxKGK),
        size: "sm",
        actions: [{ text: ec.intl.string(a ? ec.t.BddRzS : ed.default["/omTNx"]), variant: "primary", onClick: n }],
    });
}
var lM = l(951465),
    l_ = l(95264),
    lP = l(952644),
    lR = l(991690),
    lL = l(58736),
    lD = l(689175),
    lz = l(65593),
    lF = l(115982);
function lO(e) {
    return !(0, tH.BL)(e) && !0 !== e.stopRequested;
}
var lU = l(104317),
    lG = l(643278),
    l$ = l(566424),
    lq = l(683063),
    lB = l(847374),
    lH = l(138212);
function lV(e) {
    let { title: t, trailing: l, children: n, className: a, headerClassName: i, ...s } = e;
    return (0, r.jsxs)("section", {
        className: u()(lH.Nr, a),
        ...s,
        children: [
            (0, r.jsxs)("header", {
                className: u()(lH.wx, null != l && lH.o5, i),
                children: [
                    (0, r.jsx)(y.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    l,
                ],
            }),
            n,
        ],
    });
}
var lK = l(148590);
function lW(e) {
    let { children: t } = e;
    return (0, r.jsx)(y.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function lJ(e) {
    let {
            title: t,
            meta: l,
            superseded: n = !1,
            showLabel: a,
            hideLabel: s,
            bodyClassName: o,
            beforeBody: d,
            children: c,
            ...m
        } = e,
        f = i.useId(),
        [h, g] = i.useState(!n),
        [x, p] = i.useState(n);
    x !== n && (p(n), g(!n));
    let v = i.useCallback(() => g((e) => !e), []),
        j = h ? lB.a : tr._,
        b = null != l || n;
    return (0, r.jsxs)(lV, {
        ...m,
        title: t,
        trailing: b
            ? (0, r.jsxs)("span", {
                  className: lK.ZY,
                  children: [
                      l,
                      n
                          ? (0, r.jsx)(k.D, {
                                className: lK.L$,
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
        headerClassName: h ? void 0 : lK.RG,
        "data-superseded": n ? "true" : void 0,
        children: [d, (0, r.jsx)("div", { id: f, className: u()(lK.rf, o), hidden: !h, children: c })],
    });
}
var lX = l(883646);
let lY = [];
function lQ(e) {
    let { status: t } = e;
    return (0, r.jsxs)("span", {
        className: u()(lX.xL, {
            [lX.Vb]: "in_progress" === t,
            [lX.cT]: "completed" === t,
            [lX.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return ec.intl.string(ed.default.KvBdun);
                case "in_progress":
                    return ec.intl.string(ed.default["m5G9+S"]);
                case "unfinished":
                    return ec.intl.string(ed.default.lRpwhD);
                default:
                    return ec.intl.string(ed.default.sPGeWi);
            }
        })(t),
        children: [
            (0, r.jsx)(N.y, {
                type: N.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: lX.Qd,
                itemClassName: lX.xB,
                "aria-hidden": !0,
            }),
            (0, r.jsx)("svg", {
                className: lX.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, r.jsx)("path", { className: lX.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function lZ(e) {
    let { agents: t, active: l } = e,
        n = i.useMemo(() => (l ? t : lY), [l, t]),
        a = i.useMemo(() => new Set(n.map((e) => e.key)), [n]),
        s = n.map((e) => e.key).join("\0"),
        [u, o] = i.useState(n),
        [d, c] = i.useState(s),
        [m, f] = i.useState(!1);
    d !== s && (c(s), o([...n, ...u.filter((e) => !a.has(e.key))]), 0 === n.length && f(!1));
    let h = u.some((e) => !a.has(e.key));
    if (
        (i.useEffect(() => {
            if (!h) return;
            let e = setTimeout(() => o(n), l ? 200 : 250);
            return () => clearTimeout(e);
        }, [h, n, l]),
        i.useEffect(() => {
            if (!l || 0 === u.length) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => f(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [l, u.length]),
        0 === u.length)
    )
        return null;
    let g = u.slice(0, 3),
        x = u.length - g.length;
    return (0, r.jsxs)("span", {
        className: lX.X6,
        "data-shown": l && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: l, name: n, task: i } = e,
                    { Illocon: s } = l;
                return (0, r.jsx)(
                    lq.u,
                    {
                        asset: (0, r.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: n,
                        body: i,
                        position: "top",
                        children: (0, r.jsx)("span", {
                            className: lX.MA,
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
                      className: lX.qA,
                      children: `+${x}`,
                  })
                : null,
        ],
    });
}
function l0(e) {
    let t,
        { todos: l, provisional: n, agents: a, live: s = !0 } = e,
        o = (function (e) {
            let t = e.join("\0"),
                [l, n] = i.useState(() => new Set(e)),
                [a, r] = i.useState(t),
                [s, u] = i.useState(() => new Set());
            return (
                a !== t && (r(t), n(new Set(e)), u(0 === l.size ? new Set() : new Set(e.filter((e) => !l.has(e))))),
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
        })(i.useMemo(() => l.map((e) => e.id), [l])),
        d =
            ((t = (a ?? lY).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            i.useMemo(() => {
                let e = new Map();
                for (let t of a ?? lY) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let l = e.get(t.todoId);
                    null != l ? l.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, r.jsxs)("ul", {
        className: lX.p_,
        children: [
            l.map((e) => {
                var t;
                let l = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, r.jsxs)(
                    "li",
                    {
                        className: u()(lX.AS, { [lX.J1]: "completed" === l }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, r.jsx)(lQ, { status: l }),
                            (0, r.jsx)(y.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === l || "pending" === l ? "text-default" : "text-subtle",
                                tag: "span",
                                className: lX.iV,
                                selectable: !0,
                                children: (0, r.jsx)("span", {
                                    className: lX.Qq,
                                    children:
                                        "in_progress" === l && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, r.jsx)(lZ, { agents: d.get(e.id) ?? lY, active: "completed" !== l }),
                        ],
                    },
                    e.id,
                );
            }),
            null != n
                ? (0, r.jsxs)("li", {
                      className: lX.AS,
                      "data-provisional": !0,
                      children: [
                          (0, r.jsx)(lQ, { status: "pending" }),
                          (0, r.jsx)(y.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: lX.iV,
                              selectable: !0,
                              children: (0, r.jsx)("span", { className: lX.Qq, children: n }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function l1(e) {
    let { todos: t, provisional: l, agents: n, announceProgress: a = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: u, total: o } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === o) return null;
    let d = ec.intl.formatToPlainString(ed.default["P/I+JW"], { completed: u, total: o }),
        c = ec.intl.formatToPlainString(ed.default["7tzwKB"], { completed: u, total: o });
    return (0, r.jsx)(lJ, {
        title: ec.intl.string(ed.default.RtzECX),
        meta: (0, r.jsx)(lW, { children: d }),
        superseded: s,
        showLabel: ec.intl.string(ed.default.RKyN9q),
        hideLabel: ec.intl.string(ed.default.xydHoj),
        className: lX.Nr,
        bodyClassName: lX.rf,
        beforeBody: a && !s ? (0, r.jsx)(A.A, { role: "status", "aria-live": "polite", children: c }) : null,
        "data-conjure-todo-card": !0,
        children: (0, r.jsx)(l0, { todos: t, provisional: l, agents: n, live: i }),
    });
}
var l2 = l(308665),
    l3 = l(59678),
    l5 = l(903847);
function l4(e) {
    let { line: t, placement: l, todos: n, todosLive: a = !0, provisionalTodo: s, agents: o, onJumpToActivity: d } = e,
        c = null != l,
        [m, f] = i.useState(l ?? "top"),
        [h, g] = i.useState(c),
        [x, p] = i.useState(!1),
        [v, j] = i.useState(!1),
        [b, y] = i.useState(c);
    (b !== c && (y(c), null != l ? (f(l), g(!0)) : (p(!1), j(!1))),
        i.useEffect(() => {
            if (c || !h) return;
            let e = setTimeout(() => g(!1), 150);
            return () => clearTimeout(e);
        }, [c, h]),
        i.useEffect(() => {
            if (!h || !c) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => p(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [h, c]));
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
    let T = null != n && n.length > 0,
        M = i.useCallback(() => j((e) => !e), []);
    return h
        ? (0, r.jsxs)("div", {
              className: l5.qd,
              "data-placement": m,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, r.jsxs)("div", {
                      className: u()(l5.vK, { [l5.ho]: x && c, [l5.ET]: !c }),
                      children: [
                          null == d
                              ? (0, r.jsx)("ol", {
                                    className: u()(l5.Rk, l3.pj),
                                    "data-live": "true",
                                    children: (0, r.jsx)(l$.A, {
                                        glyph: (0, r.jsx)(l2.Ay, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, r.jsx)(k.D, {
                                    className: l5.pZ,
                                    onClick: d,
                                    "aria-label": ec.intl.string(ed.default.hEK6qu),
                                    children: (0, r.jsx)("ol", {
                                        className: u()(l5.Rk, l3.pj),
                                        "data-live": "true",
                                        children: (0, r.jsx)(l$.A, {
                                            glyph: (0, r.jsx)(l2.Ay, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          T
                              ? (0, r.jsx)(w.m, {
                                    text: ec.intl.string(ed.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, r.jsx)(k.D, {
                                        className: l5.BO,
                                        onClick: M,
                                        "aria-expanded": v,
                                        "aria-label": ec.intl.string(ed.default.RtzECX),
                                        children: (0, r.jsx)(lG.ClipboardListIcon, {
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
                  A && T
                      ? (0, r.jsx)("div", {
                            className: u()(l5.vB, { [l5.pg]: v && C, [l5.ui]: !v }),
                            children: (0, r.jsx)(l1, {
                                todos: n,
                                provisional: s,
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
var l7 = l(658675),
    l6 = l(22231),
    l8 = l(826745),
    l9 = l(123292),
    ne = l(155078);
function nt(e) {
    return e.options.some((e) => null != e.image);
}
let nl = [];
function nn(e, t) {
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
var na = l(87221),
    nr = l(144228),
    ni = l(241326),
    ns = l(26430),
    nu = l(750943),
    no = l(95477),
    nd = l(256905),
    nc = l(73153),
    nm = l(839214);
let nf = [],
    nh = 1,
    ng = (0, nm.D)(() => ({ draftsByProject: {} }));
function nx(e, t, l) {
    return e.draftsByProject[t]?.[l] ?? nf;
}
function np(e, t) {
    return nx(ng.getState(), e, t);
}
function nv(e, t, l) {
    let { draftsByProject: n } = ng.getState();
    ng.setState({ draftsByProject: { ...n, [e]: { ...n[e], [t]: l } } });
}
function nj(e, t, l, n) {
    let a = np(e, t);
    return (
        !!a.some((e) => e.localId === l) &&
        (nv(
            e,
            t,
            a.map((e) => (e.localId === l ? { ...e, ...n } : e)),
        ),
        !0)
    );
}
function nb(e, t) {
    (0, er.Vm)(e, t).catch((e) => {
        console.error("[vibegrations] attachment cleanup failed", e);
    });
}
function ny(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && nb(e, t.ref.id));
}
function nk(e, t) {
    let { deleteFromWorker: l } = t,
        { draftsByProject: n } = ng.getState(),
        a = n[e];
    if (null == a) return;
    for (let t of Object.values(a))
        for (let n of t ?? nf) l ? ny(e, n) : null != n.previewUrl && URL.revokeObjectURL(n.previewUrl);
    let { [e]: r, ...i } = n;
    ng.setState({ draftsByProject: i });
}
function nw(e) {
    return ec.intl.formatToPlainString(ed.default.JZ59Bo, { size: (0, ee.sM)((0, ee.Ju)(e)) });
}
function nA(e, t) {
    let l = np(e, t);
    if (0 !== l.length) {
        for (let t of l) ny(e, t);
        nv(e, t, nf);
    }
}
function nN(e, t) {
    let l = np(e, t);
    if (0 === l.length) return [];
    for (let e of l) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (nv(e, t, nf), l.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function nC(e, t) {
    let { clarificationAnswers: l, attachments: n = [] } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = np(e, "chat"),
        r = a.length > 0 && a.every((e) => "ready" === e.status) ? nN(e, "chat") : [];
    (0, er.dv)(e, t, [...n, ...r], { clarificationAnswers: l });
}
function nS(e, t) {
    let [l, n] = i.useState(null),
        [a, r] = i.useState(!1),
        [s, u] = i.useState(0);
    return (
        i.useEffect(() => {
            let l = !1;
            return (
                (0, er.PK)(e, t).then(
                    (e) => {
                        l || n(e);
                    },
                    () => {
                        l || (0 === s ? u(1) : r(!0));
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
                            e && 0 === s ? u(1) : r(!0);
                        },
                        () => r(!0),
                    ));
            }, [e, t, s]),
        }
    );
}
(nc.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(ng.getState().draftsByProject)) nk(e, { deleteFromWorker: !0 });
}),
    nc.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        nk(t, { deleteFromWorker: !1 });
    }));
var nE = l(907702);
function nI(e) {
    let { projectId: t, attachmentId: l, alt: n, onMeasured: a } = e,
        { src: s, gone: o, handleError: d } = nS(t, l),
        [c, m] = i.useState(null),
        f = null != s && c === s;
    return o
        ? (0, r.jsxs)("span", {
              className: u()(nE.Gt, nE.b6),
              children: [
                  (0, r.jsx)(na.D, { size: "md", color: "currentColor" }),
                  (0, r.jsx)(y.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: ec.intl.string(ed.default.lhgD88),
                  }),
              ],
          })
        : (0, r.jsx)("span", {
              className: u()(nE.Gt, { [nE.iP]: !f }),
              children:
                  null != s
                      ? (0, r.jsx)("img", {
                            src: s,
                            alt: n,
                            className: nE.Sl,
                            onLoad: (e) => {
                                m(s);
                                let { naturalWidth: t, naturalHeight: l } = e.currentTarget;
                                t > 0 && l > 0 && a({ width: t, height: l });
                            },
                            onError: d,
                            draggable: !1,
                        })
                      : null,
          });
}
function nT(e) {
    let t,
        l,
        {
            projectId: n,
            option: a,
            multi: i,
            selected: s,
            disabled: o,
            reachable: d,
            tabbable: c,
            onPick: m,
            onView: f,
            onArrow: h,
            onMeasured: g,
            onRemove: x,
        } = e,
        p = ec.intl.formatToPlainString(ed.default.JGjZMs, { answer: a.label });
    return (0, r.jsxs)("div", {
        className: u()(nE.Vs, { [nE.Q9]: s, [nE.RX]: o }),
        "data-conjure-clarification-option": a.id,
        children: [
            (0, r.jsxs)(k.D, {
                className: nE.Up,
                "data-conjure-image-option-pick": !0,
                onClick: o ? void 0 : () => m(a),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), h(a, t));
                },
                role: i ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": ec.intl.formatToPlainString(ed.default.AQbxhf, { answer: a.label }),
                "aria-disabled": o,
                tabIndex: d && c ? 0 : -1,
                children: [
                    (0, r.jsxs)("span", {
                        className: nE.$_,
                        children: [
                            null != a.image
                                ? (0, r.jsx)(nI, {
                                      projectId: n,
                                      attachmentId: a.image.attachment_id,
                                      alt: a.label,
                                      onMeasured: g,
                                  })
                                : (0, r.jsx)("span", { className: nE.Gt }),
                            (0, r.jsx)("span", {
                                className: nE.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, r.jsx)(l7.P, { checked: s, disabled: o })
                                    : (0, r.jsx)(nr.T, { checked: s, disabled: o }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(y.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: nE.pG,
                        children:
                            "" !== (l = null != (t = a.image?.page_url ?? a.image?.url) ? (0, ne.E)(t) : "")
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
                      className: nE.B4,
                      children: (0, r.jsx)(w.m, {
                          text: ec.intl.string(ed.default.HQEXJM),
                          children: (0, r.jsx)(t5.K, {
                              icon: ni.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: x,
                              disabled: o,
                              "aria-label": ec.intl.string(ed.default.HQEXJM),
                              tabIndex: d ? 0 : -1,
                          }),
                      }),
                  })
                : null != a.image
                  ? (0, r.jsx)("span", {
                        className: nE.B4,
                        children: (0, r.jsx)(w.m, {
                            text: ec.intl.string(ed.default["4/eeDD"]),
                            children: (0, r.jsx)(t5.K, {
                                icon: ns._,
                                size: "sm",
                                variant: "overlay-secondary",
                                onClick: () => f(a),
                                "aria-label": p,
                                tabIndex: d && c ? 0 : -1,
                            }),
                        }),
                    })
                  : null,
        ],
    });
}
function nM(e) {
    var t;
    let { projectId: l, question: n, selectedIds: a, disabled: s, reachable: o = !0, onPick: d, own: c } = e,
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
                            (0, nd.R)({
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
                (v(n.id), g.current?.querySelectorAll("[data-conjure-image-option-pick]")[l]?.focus(), m || s || d(n));
            },
            [s, m, d, f],
        ),
        k =
            null == c.image
                ? null
                : ((t = c.image),
                  {
                      id: `own:${t.attachment.id}`,
                      label: ec.intl.string(ed.default.SUdqCQ),
                      image: { attachment_id: t.attachment.id },
                  });
    return (0, r.jsxs)("div", {
        className: nE.Nz,
        "data-conjure-image-options": !0,
        children: [
            (0, r.jsxs)("div", {
                ref: g,
                className: u()(nE.fF, "gallery" === h ? nE.nV : nE.nM, { [nE.m3]: m }),
                role: m ? "group" : "radiogroup",
                "aria-labelledby": `${n.id}-label`,
                "data-layout": h,
                "data-count": f.length,
                children: [
                    f.map((e) =>
                        (0, r.jsx)(
                            nT,
                            {
                                projectId: l,
                                option: e,
                                multi: m,
                                selected: a.includes(e.id),
                                disabled: s,
                                reachable: o,
                                tabbable: m || e.id === j,
                                onPick: (e) => {
                                    (v(e.id), d(e));
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
                              nT,
                              {
                                  projectId: l,
                                  option: k,
                                  multi: m,
                                  selected: c.selected,
                                  disabled: s,
                                  reachable: o,
                                  tabbable: !0,
                                  onPick: c.onPick,
                                  onView: () => void 0,
                                  onArrow: () => void 0,
                                  onMeasured: () => void 0,
                                  onRemove: c.onRemove,
                              },
                              k.id,
                          )
                        : null,
                ],
            }),
            (0, r.jsx)(n_, {
                projectId: l,
                own: c,
                disabled: s,
                reachable: o,
                uploadText: ec.intl.string(/\bicons?\b/i.test(n.question) ? ed.default.qU4WN6 : ed.default.cbMDDB),
            }),
        ],
    });
}
function n_(e) {
    let { projectId: t, own: l, disabled: n, reachable: a, uploadText: s } = e,
        u = i.useRef(null),
        [o, d] = i.useState(!1),
        [c, m] = i.useState(""),
        f = a ? 0 : -1,
        h = l.busy;
    function g() {
        "" !== c.trim() &&
            null == h &&
            l.onLink(c.trim()).then(
                (e) => {
                    e && (d(!1), m(""));
                },
                () => void 0,
            );
    }
    return (0, r.jsxs)("div", {
        className: nE.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, r.jsxs)("div", {
                className: nE.QJ,
                children: [
                    (0, r.jsx)(C.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: nu.X,
                        text: s,
                        loading: "upload" === h,
                        disabled: n || "link" === h,
                        onClick: () => u.current?.click(),
                        tabIndex: f,
                        "data-conjure-own-image-upload": !0,
                    }),
                    o
                        ? null
                        : (0, r.jsx)(C.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: t2.LinkIcon,
                              text: ec.intl.string(ed.default["1TgOO+"]),
                              disabled: n || "upload" === h,
                              onClick: () => d(!0),
                              tabIndex: f,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, r.jsx)("input", {
                        ref: u,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: nE.Fg,
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
                                            : Promise.resolve({ errorText: nw(a) })),
                                    ));
                        },
                    }),
                ],
            }),
            o
                ? (0, r.jsxs)("div", {
                      className: nE.vG,
                      children: [
                          (0, r.jsx)("div", {
                              className: nE.Hs,
                              children: (0, r.jsx)(no.k, {
                                  label: ec.intl.string(ed.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: ec.intl.string(ed.default.AVhvn8),
                                  value: c,
                                  onChange: (e) => m(e),
                                  onKeyDown: (e) => {
                                      "Enter" === e.key
                                          ? (e.preventDefault(), g())
                                          : "Escape" === e.key && (e.stopPropagation(), d(!1));
                                  },
                                  autoFocus: !0,
                                  type: "url",
                                  error: null == h && l.error?.source === "link" ? l.error.text : null,
                                  disabled: n,
                                  "data-conjure-own-image-link-input": !0,
                              }),
                          }),
                          (0, r.jsxs)("div", {
                              className: nE.gd,
                              children: [
                                  (0, r.jsx)(C.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: ec.intl.string(ed.default.FbRbeM),
                                      loading: "link" === h,
                                      disabled: n || "" === c.trim(),
                                      onClick: g,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, r.jsx)(l9.Q, {
                                      variant: "secondary",
                                      textVariant: "text-sm/medium",
                                      text: ec.intl.string(ed.default.eXZL4X),
                                      onClick: () => d(!1),
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
var nP = l(29073),
    nR = l(384017);
function nL(e) {
    let { option: t, position: l, disabled: n, onPick: a, reachable: s = !0, selected: o } = e,
        d = i.useId(),
        c = !0 === t.recommended,
        m = null != t.detail && "" !== t.detail;
    return (0, r.jsxs)(k.D, {
        className: u()(nR.uK, { [nR.ue]: n, [nR.h4]: !0 === o }),
        onClick: n ? void 0 : () => a(t),
        "aria-label": ec.intl.formatToPlainString(c ? ed.default["2p6UFz"] : ed.default.AQbxhf, { answer: t.label }),
        "aria-describedby": m ? d : void 0,
        "aria-disabled": n,
        role: null != o ? "checkbox" : void 0,
        "aria-checked": o,
        tabIndex: s ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": c ? "true" : void 0,
        children: [
            null != o
                ? (0, r.jsx)("span", { className: nR.dy, children: (0, r.jsx)(l7.P, { checked: o, disabled: n }) })
                : (0, r.jsx)("span", { className: nR.Gy, "aria-hidden": !0, children: l }),
            (0, r.jsxs)("span", {
                className: nR.qO,
                children: [
                    (0, r.jsx)("span", {
                        className: nR.l8,
                        children: (0, r.jsx)(y.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: nR.ed,
                            children: t.label,
                        }),
                    }),
                    m
                        ? (0, r.jsx)(y.E, {
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
                ? (0, r.jsx)(y.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: nR.rM,
                      children: ec.intl.string(ed.default.zku6r1),
                  })
                : null,
        ],
    });
}
function nD(e) {
    let { projectId: t, question: l, selected: n, disabled: a, reachable: i = !0, onPick: s, own: u } = e,
        o = !0 === l.multi_select;
    return nt(l)
        ? (0, r.jsx)(nM, { projectId: t, question: l, selectedIds: n, disabled: a, reachable: i, onPick: s, own: u })
        : (0, r.jsx)(r.Fragment, {
              children: l.options.map((e, t) =>
                  (0, r.jsx)(
                      nL,
                      {
                          option: e,
                          position: t + 1,
                          disabled: a,
                          selected: o ? n.includes(e.id) : void 0,
                          onPick: s,
                          reachable: i,
                      },
                      e.id,
                  ),
              ),
          });
}
let nz = [];
function nF(e) {
    let {
            projectId: t,
            question: l,
            draft: n,
            selected: a,
            direction: i,
            disabled: s,
            ownImage: o,
            ownSelected: d,
        } = e,
        c = "" === n.trim() ? null : n,
        m = !0 === l.multi_select;
    return (0, r.jsxs)("div", {
        className: u()(nR.Ge, nR.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            m
                ? (0, r.jsx)(y.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: nR.aK,
                      children: ec.intl.string(ed.default.tE8qbz),
                  })
                : null,
            (0, r.jsx)(nD, {
                projectId: t,
                question: l,
                selected: a,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: nn(o, d),
            }),
            nt(l)
                ? null
                : (0, r.jsxs)("div", {
                      className: nR.Xy,
                      children: [
                          (0, r.jsx)("span", {
                              className: nR.Gy,
                              "aria-hidden": !0,
                              children: (0, r.jsx)(l6.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == c ? null : (0, r.jsx)("span", { className: u()(nR.Pu, nR.es), children: c }),
                      ],
                  }),
        ],
    });
}
function nO(e) {
    var t;
    let { projectId: l, clarification: n, onSubmit: a, onDismiss: s } = e,
        [o, d] = i.useState({}),
        [c, m] = i.useState({}),
        [f, h] = i.useState({}),
        [g, x] = i.useState(0),
        [p, v] = i.useState(null),
        [j, b] = i.useState(null),
        [A, N] = i.useState(null),
        [S, E] = i.useState(!1),
        I = i.useRef(null),
        [T, M] = i.useState(null),
        _ = i.useRef(null),
        P = i.useRef(0),
        R = null == a,
        D = n.questions.length,
        z = Math.min(g, D - 1),
        F = n.questions[z],
        [O, U] = i.useState({ id: F.id, expanded: !1 }),
        G = O.id === F.id && O.expanded,
        [$, q] = i.useState(null),
        B = c[F.id] ?? "",
        H = !0 === F.multi_select,
        V = nt(F),
        K = H ? (f[F.id] ?? nz) : ((t = o[F.id]), t?.kind === "option" ? [t.optionId] : nl),
        W = (function (e, t, l) {
            let [n, a] = i.useState({}),
                [r, s] = i.useState({}),
                [u, o] = i.useState({}),
                d = ec.intl.string(ed.default.wTsP5l),
                c = i.useCallback((e) => n[e] ?? null, [n]),
                m = i.useCallback(
                    (e) => null != n[e.id] && (!0 === e.multi_select ? !0 === u[e.id] : t[e.id]?.kind === "image"),
                    [t, n, u],
                ),
                f = i.useCallback(
                    (e) => {
                        let t = n[e.id];
                        return null != t && !0 === u[e.id] ? { attachment: t.attachment, text: d } : void 0;
                    },
                    [d, n, u],
                ),
                h = i.useCallback(
                    (i, u) => {
                        let c = i.id,
                            f = !0 === i.multi_select,
                            h = n[c] ?? null;
                        if (u) return nn(h, m(i));
                        function g(e) {
                            return s((t) => ({ ...t, [c]: e }));
                        }
                        function x(e) {
                            return { kind: "image", attachment: e.attachment, text: d };
                        }
                        let p = t[c];
                        function v(t) {
                            (a((l) => {
                                let n = l[c];
                                return (
                                    null != n && (0, er.Vm)(e, n.attachment.id).catch(() => void 0), { ...l, [c]: t }
                                );
                            }),
                                g({ busy: null, error: null }),
                                f ? o((e) => ({ ...e, [c]: !0 })) : l((e) => (e[c] === p ? { ...e, [c]: x(t) } : e)));
                        }
                        return {
                            image: h,
                            selected: m(i),
                            busy: r[c]?.busy ?? null,
                            error: r[c]?.error ?? null,
                            onPick: () => {
                                null != h &&
                                    (f ? o((e) => ({ ...e, [c]: !0 !== e[c] })) : l((e) => ({ ...e, [c]: x(h) })));
                            },
                            onRemove: () => {
                                null != h &&
                                    ((0, er.Vm)(e, h.attachment.id).catch(() => void 0),
                                    a((e) => {
                                        let { [c]: t, ...l } = e;
                                        return l;
                                    }),
                                    o((e) => ({ ...e, [c]: !1 })),
                                    l((e) => {
                                        if (e[c]?.kind !== "image") return e;
                                        let { [c]: t, ...l } = e;
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
                                                error: { source: "upload", text: ec.intl.string(ed.default["kUw/b1"]) },
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
                                                        : ec.intl.string(ed.default.l79PMc),
                                            },
                                        }),
                                        !1
                                    ),
                                )
                            ),
                        };
                    },
                    [d, t, n, e, m, l, r],
                );
            return { imageFor: c, selectedFor: m, multiPartFor: f, controlsFor: h };
        })(l, o, d),
        J = W.imageFor(F.id),
        X = W.selectedFor(F),
        { text: Y, phase: Q } = (0, ts.Q)(F.question),
        Z = Y === F.question,
        ee = Z && $?.id === F.id && $.truncated;
    i.useLayoutEffect(() => {
        if (null == T || G || !Z) return;
        function e() {
            if (null == T) return;
            let e = T.scrollHeight > T.clientHeight + 1;
            q((t) => (t?.id === F.id && t.truncated === e ? t : { id: F.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(T), () => t.disconnect());
    }, [Z, T, F.id, G]);
    let et = ec.intl.string(G ? ec.t.iTcuma : ec.t.dcl9MQ),
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
                    b({ question: F, draft: B, selected: K, ownImage: J, ownSelected: X, direction: t, moves: l }),
                    E(!0),
                    x(e));
            },
            [B, J, X, F, K],
        ),
        ea = i.useCallback(() => {
            let e = I.current,
                t = _.current;
            null != e && null != t && N({ heading: e.offsetHeight, rows: t.offsetHeight });
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
                let t = { ...o, [F.id]: e };
                d(t);
                let l =
                    z < n.questions.length - 1
                        ? z + 1
                        : (function (e, t, l) {
                              let { questions: n } = e;
                              for (let e = 1; e <= n.length; e++) {
                                  let a = (l + e) % n.length,
                                      r = t[n[a].id];
                                  if (null == r || "" === r.text.trim()) return a;
                              }
                              return null;
                          })(n, t, z);
                null == l ? el(t) : en(l, l < z ? "back" : "forward");
            },
            [o, n, R, z, F.id, el, en],
        ),
        eu = i.useCallback(() => {
            R || 0 === z || en(z - 1, "back");
        }, [R, z, en]),
        eo = z > 0 && !R,
        em = i.useCallback(
            (e) => {
                m((e) => ({ ...e, [F.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                V ? R || d((e) => ({ ...e, [F.id]: t })) : es(t);
            },
            [R, V, F.id, es],
        ),
        { multiPartFor: ef } = W,
        eh = i.useMemo(() => {
            var e;
            let t, l;
            return H
                ? ((e = ef(F)),
                  (t = B.trim()),
                  (l = F.options.filter((e) => K.includes(e.id)).map((e) => e.label)),
                  {
                      kind: "multi",
                      optionIds: K,
                      ...("" === t ? {} : { custom: t }),
                      ...(null == e ? {} : { attachment: e.attachment }),
                      text: [...l, ...(null == e ? [] : [e.text]), ...("" === t ? [] : [t])].join(", "),
                  })
                : null;
        }, [B, H, ef, F, K]),
        eg = W.controlsFor(F, R),
        ex = i.useCallback(() => {
            if (null != eh) {
                "" !== eh.text && es(eh);
                return;
            }
            let e = B.trim();
            "" !== e && es({ kind: "custom", text: e });
        }, [B, eh, es]),
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
                    : "" !== B.trim()
                      ? { kind: "custom", text: B.trim() }
                      : (o[F.id] ?? null),
            [o, B, eh, F.id],
        ),
        ew = null != ek && !R,
        eA = z === D - 1,
        eN = i.useCallback(() => {
            null == ek || R || es(ek);
        }, [R, ek, es]),
        eC = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, tI.vq)(e.target, HTMLTextAreaElement) ||
                    (0, tI.vq)(e.target, HTMLInputElement) ||
                    ((!(0, tI.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && eo
                            ? (e.preventDefault(), eu())
                            : "ArrowRight" === e.key && ew && (e.preventDefault(), eN())));
            },
            [eo, ew, eu, eN],
        );
    return (0, r.jsxs)("section", {
        className: u()(nR.$O, { [nR.fI]: ep && !ej, [nR.Oh]: ej }),
        role: "dialog",
        "aria-label": F.question,
        "data-conjure-clarification": n.id,
        "data-state": R ? "inert" : "open",
        "data-question-expanded": G ? "true" : void 0,
        "data-step": z,
        tabIndex: -1,
        onKeyDown: eC,
        children: [
            (0, r.jsxs)("div", {
                className: nR.rf,
                style: null == A ? void 0 : { height: A.heading + A.rows },
                "data-moving": S ? "" : void 0,
                children: [
                    (0, r.jsxs)("div", {
                        ref: I,
                        className: nR.wx,
                        children: [
                            (0, r.jsx)(y.E, {
                                ref: M,
                                tag: "span",
                                id: `${F.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: G ? void 0 : 5,
                                className: u()(nP.TK, nR.R_, { [nR.TB]: "exit" === Q, [nR.JU]: "enter" === Q }),
                                children: Y,
                            }),
                            ee || G
                                ? (0, r.jsx)("div", {
                                      className: nP.Q7,
                                      children: (0, r.jsx)(w.m, {
                                          text: et,
                                          children: (0, r.jsx)(t5.K, {
                                              icon: G ? ta.t : lB.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => U({ id: F.id, expanded: !G }),
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
                                      className: u()(nP.gb, nP.Q7),
                                      onClick: ey,
                                      "aria-label": ec.intl.string(ed.default.qVXlk0),
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
                        className: nR.Cg,
                        style: null == A ? void 0 : { insetBlockStart: A.heading },
                        children: (0, r.jsxs)("div", {
                            className: nR.I,
                            children: [
                                (0, r.jsxs)("div", {
                                    ref: _,
                                    className: nR.Ge,
                                    role: "group",
                                    "aria-labelledby": `${F.id}-label`,
                                    "data-direction": p?.direction,
                                    "data-parity": null == p ? void 0 : p.moves % 2,
                                    children: [
                                        H
                                            ? (0, r.jsx)(y.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: nR.aK,
                                                  children: ec.intl.string(ed.default.tE8qbz),
                                              })
                                            : null,
                                        (0, r.jsx)(nD, {
                                            projectId: l,
                                            question: F,
                                            selected: K,
                                            disabled: R,
                                            onPick: (e) =>
                                                H
                                                    ? h((t) => {
                                                          var l, n;
                                                          let a;
                                                          return {
                                                              ...t,
                                                              [F.id]:
                                                                  ((l = t[F.id] ?? nz),
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
                                        V
                                            ? null
                                            : (0, r.jsxs)("div", {
                                                  className: nR.Xy,
                                                  children: [
                                                      (0, r.jsx)("span", {
                                                          className: nR.Gy,
                                                          "aria-hidden": !0,
                                                          children: (0, r.jsx)(l6.PencilIcon, {
                                                              size: "custom",
                                                              width: 20,
                                                              height: 20,
                                                              color: "currentColor",
                                                          }),
                                                      }),
                                                      (0, r.jsx)(l8.y, {
                                                          value: B,
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
                                                          placeholder: ec.intl.string(ed.default["tOC+tn"]),
                                                          "aria-label": ec.intl.formatToPlainString(
                                                              ed.default["4JeYPB"],
                                                              { question: F.question },
                                                          ),
                                                          disabled: R,
                                                          rows: 1,
                                                          className: nR.Pu,
                                                          "data-conjure-clarification-other": F.id,
                                                      }),
                                                  ],
                                              }),
                                    ],
                                }),
                                null == j
                                    ? null
                                    : (0, r.jsx)(
                                          nF,
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
            D > 1 || H || V
                ? (0, r.jsxs)("div", {
                      className: nP.qr,
                      children: [
                          (0, r.jsx)(y.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  D > 1
                                      ? ec.intl.formatToPlainString(ed.default.yzYUjq, { index: z + 1, total: D })
                                      : null,
                          }),
                          (0, r.jsxs)("div", {
                              className: nP.zt,
                              children: [
                                  eo
                                      ? (0, r.jsx)(l9.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: ec.intl.string(ed.default.Pk5lfA),
                                            onClick: eu,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  (0, r.jsx)(C.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: ec.intl.string(eA ? ec.t.geKm7t : ed.default.w1nRmT),
                                      disabled: !ew,
                                      onClick: eN,
                                      "data-conjure-clarification-next": !0,
                                      "data-submits": eA ? "true" : void 0,
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var nU = l(856059),
    nG = l(411236);
function n$(e) {
    let { projectId: t, request: l, onDismiss: n } = e,
        a = null != l.note && "" !== l.note ? l.note : ec.intl.string(ed.default.XuOf5s);
    return (0, r.jsx)(nU.A, {
        projectId: t,
        scopeKeys: l.keys,
        notifyAgent: !0,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: l, saving: i, submit: s } = e;
            function o(e) {
                (e.preventDefault(), s());
            }
            let d = (0, r.jsx)(C.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: i,
                disabled: !l,
                text: ec.intl.string(ed.default.A7dQd9),
            });
            return null == n
                ? (0, r.jsxs)("form", {
                      className: nG.Mk,
                      onSubmit: o,
                      children: [
                          (0, r.jsx)(y.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: ec.intl.string(ed.default["jZjP+I"]),
                          }),
                          (0, r.jsx)(y.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              selectable: !0,
                              children: a,
                          }),
                          t,
                          (0, r.jsx)("div", { className: nG.p0, children: d }),
                      ],
                  })
                : (0, r.jsxs)("form", {
                      className: u()(nP.nd, nP.jx),
                      "aria-label": ec.intl.string(ed.default["jZjP+I"]),
                      onSubmit: o,
                      children: [
                          (0, r.jsxs)("div", {
                              className: nP.wx,
                              children: [
                                  (0, r.jsx)(y.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: nP.TK,
                                      children: ec.intl.string(ed.default["jZjP+I"]),
                                  }),
                                  (0, r.jsx)(k.D, {
                                      className: u()(nP.gb, nP.Q7),
                                      onClick: n,
                                      "aria-label": ec.intl.string(ed.default["iq+Pte"]),
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
                              className: nG.DQ,
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
                              className: nP.qr,
                              children: (0, r.jsx)("div", { className: nP.zt, children: d }),
                          }),
                      ],
                  });
        },
    });
}
var nq = l(935208),
    nB = l(435558),
    nH = l.n(nB);
let nV = "VibegrationsComposerDrafts";
function nK() {
    return lk.w.get(nV) ?? {};
}
let nW = new Map(),
    nJ = nH().throttle(() => {
        if (0 === nW.size) return;
        let e = nK();
        for (let [t, l] of nW) "" === l ? delete e[t] : (e[t] = l);
        (nW.clear(), lk.w.set(nV, e));
    }, 1e3);
class nX extends m.Ay.Store {
    getDraft(e) {
        let t = nW.get(e);
        return null != t ? t : (nK()[e] ?? "");
    }
}
let nY = new nX(nc.h, {
    LOGOUT: function () {
        return (nW.clear(), nJ.cancel(), lk.w.remove(nV), !1);
    },
    CONJURE_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: l } = e;
        return (nW.set(t, l), nJ(), "" === l && nJ.flush(), !1);
    },
});
function nQ(e) {
    return "" !== nY.getDraft(e).trim();
}
var nZ = l(29080),
    n0 = l(46054),
    n1 = l(615839);
function n2(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : ec.intl.string(ed.default.KcFvbo);
}
function n3(e) {
    var t;
    let l,
        n,
        { steps: a, content: r, hasProposal: i, hasAttachments: s } = e,
        u = (0, lF.B4)(a),
        o = u.filter((e) => "message" === e.type).at(-1),
        d =
            !i &&
            null != o &&
            ((t = o.content),
            (l = t.trim()),
            (n = r.trim()),
            "" !== l && "" !== n && (l === n || (t.length >= 16e3 && n.startsWith(l))))
                ? o
                : null,
        c = u.filter((e) => e !== d),
        m = c.filter((e) => "message" === e.type).at(-1),
        f = !i && "" !== r.trim();
    return {
        streamed: c,
        lastStreamedMessage: m,
        replyKey: d?.key,
        showsClosingMessage: f,
        closingContent: f ? r.trim() : "",
        attachmentsHost: (function (e) {
            let { hasAttachments: t, showsClosingMessage: l, endsOnStreamedMessage: n } = e;
            return t ? (l ? "closing" : n ? "streamed" : "standalone") : "none";
        })({ hasAttachments: s, showsClosingMessage: f, endsOnStreamedMessage: (0, lF.Lf)(a) }),
    };
}
(l(134528), l(947204));
let n5 = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    n4 = {
        snail: () => ed.default.ABeVsS,
        goat: () => ed.default.dhXay8,
        frog: () => ed.default.SHeweG,
        bunny: () => ed.default.FytFE1,
        cat: () => ed.default["5c+sHs"],
        caterpillar: () => ed.default["/FYcne"],
        butterfly: () => ed.default["Ib/AxK"],
        dog: () => ed.default.zDjBR1,
        spider: () => ed.default["6sxyrN"],
        bee: () => ed.default.cVtefg,
        bot: () => ed.default.MjCw0v,
    },
    n7 = {
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
function n6(e) {
    return { ...n7[e], name: ec.intl.string(n4[e]()) };
}
function n8(e) {
    return n5.includes(e) ? n6(e) : void 0;
}
function n9(e) {
    let t = new Map();
    for (let [l, n] of (function (e) {
        let t = 0,
            l = e[0] ?? "";
        for (let e = 0; e < l.length; e++) t = (31 * t + l.charCodeAt(e)) % n5.length;
        let n = new Map();
        return (
            e.forEach((e, l) => {
                n.set(e, n5[(t + l) % n5.length]);
            }),
            n
        );
    })(e))
        t.set(l, n6(n));
    return t;
}
var ae = l(60160),
    at = l(16634);
function al(e) {
    let { projectId: t, lane: l, Illocon: n, tint: a, name: i, connectsDown: s } = e,
        u = l.task,
        o = "running" === u.status,
        d = (0, lF.SY)(l.steps),
        c = o
            ? null != d
                ? (0, lF.WQ)(d)
                : n2(u)
            : (function (e) {
                  let t = (function (e) {
                      let [t, l] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || l !== l.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(n2(e));
                  switch (e.status) {
                      case "failed":
                          return ec.intl.formatToPlainString(ed.default.YrVgOf, { task: t });
                      case "cancelled":
                          return ec.intl.formatToPlainString(ed.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return ec.intl.formatToPlainString(ed.default["++9woZ"], {
                                  task: t,
                                  duration: (0, n1.MB)(e.durationMs),
                              });
                          return ec.intl.formatToPlainString(ed.default.nmI9Uh, { task: t });
                      default:
                          return ec.intl.formatToPlainString(ed.default.nmI9Uh, { task: t });
                  }
              })(u),
        m = o ? d : void 0,
        f =
            u.detail.length > 0 ||
            l.steps.some((e) => {
                var t;
                return e !== m || (t = e).detail.length > 0 || t.screenshots.length > 0 || t.attachments.length > 0;
            })
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          l.steps.length > 0
                              ? (0, r.jsx)("ol", {
                                    className: l3.dO,
                                    children: l.steps.map((e) =>
                                        (0, r.jsx)(
                                            at.A,
                                            { projectId: t, node: e, presentation: "detail", active: o && e === d },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          u.detail.map((e, t) =>
                              (0, r.jsx)(
                                  "div",
                                  {
                                      className: l3.iq,
                                      children: (0, r.jsx)(ae.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, r.jsx)(l$.A, {
        glyph: (0, r.jsx)(lq.u, {
            asset: (0, r.jsx)(n, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: n2(u),
            position: "left",
            children: (0, r.jsx)("span", {
                className: l3.nC,
                children: (0, r.jsx)(n, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: c,
        live: o,
        settled: !o,
        tint: a,
        detail: f,
        connected: !0,
        connectsDown: s,
    });
}
var an = l(469393);
function aa(e) {
    let { proposal: t, onRestore: l } = e,
        n = (0, tl.lG)(t.authored_at);
    return (0, r.jsx)(lV, {
        title: ec.intl.string(ed.default["t+b0rz"]),
        children: (0, r.jsxs)("div", {
            className: an.r,
            children: [
                (0, r.jsxs)("div", {
                    className: an.z,
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
                    ? (0, r.jsx)(C.$, {
                          variant: "secondary",
                          size: "sm",
                          text: ec.intl.string(ed.default.H8Jfhu),
                          onClick: l,
                      })
                    : null,
            ],
        }),
    });
}
var ar = l(231483),
    ai = l(632015),
    as = l(323384),
    au = l(633018),
    ao = l(430392),
    ad = l(885574);
let ac = {
    automod: ed.default.DnWMLj,
    widget: ed.default["EswAi+"],
    activity: ec.t.IC5Ann,
    commands: ed.default.w7JaEP,
    chat_bot: ed.default["5QSvrP"],
    bot: ed.default.VFWfz1,
};
var am = l(176999),
    af = (((n = {}).IMAGE = "image"), n),
    ah = (((a = {}).PRIVATE = "private"), (a.PUBLIC = "public"), a),
    ag = l(773669);
let ax = [],
    ap = {};
function av(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function aj(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: af.IMAGE,
        visibility: ah.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var ab = l(127258),
    ay = l(587895),
    ak = l(320095),
    aw = l(963852),
    aA = l(95701),
    aN = l(889227),
    aC = l(155718);
let aS = ["command", "user_command", "message_command", "message"],
    aE = new Set([aC.kc.CHAT, aC.kc.USER, aC.kc.MESSAGE]);
function aI(e) {
    return e.type ?? aC.kc.CHAT;
}
function aT(e) {
    return "launch" !== e.kind && aE.has(aI(e));
}
function aM(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function a_(e, t) {
    let l = aS.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        n = [...l.filter((e) => !aM(e)), ...l.filter(aM)].slice(0, 3);
    for (let a of t || 1 === l.length ? e : []) {
        if (n.length >= 3) break;
        n.includes(a) || aM(a) || n.push(a);
    }
    return aS.flatMap((t) => e.filter((e) => e.kind === t && n.includes(e)));
}
let aP = new aA.nA({ id: "1337", guild_id: "1337", type: eb.rbe.GUILD_TEXT, name: "preview" });
function aR(e, t) {
    let {
            bot: l = !1,
            discriminator: n = "0000",
            enabled: a = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = (0, m.bG)([tq.default], () => tq.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            a && r?.username !== t && (0, tV.nj)(new aN.A({ id: e, username: t, discriminator: n, bot: l }));
        }, [a, r, e, t, n, l]),
        r
    );
}
let aL = /^@\S+/;
var aD = l(628284),
    az = l(97808),
    aF = l(778712),
    aO = l(809115),
    aU = l(486020),
    aG = l(200700);
let a$ = {
        alert: { label: () => ec.intl.string(ed.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => ec.intl.string(ed.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => ec.intl.string(ed.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => ec.intl.string(ed.default.RGzFNK), blockedStyle: !1 },
    },
    aq = {
        blocked: { label: () => ec.intl.string(ed.default.YdnZ8q), tone: "red" },
        alert: { label: () => ec.intl.string(ed.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => ec.intl.string(ed.default.RGzFNK), tone: "green" },
    },
    aB = ["blocked", "alert", "allowed"],
    aH = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
var aV = l(984097),
    aK = l(13673);
let aW = { blocked: ar.ShieldIcon, alert: tQ.BellIcon, allowed: aD.y },
    aJ = {
        blurple: { text: "text-brand", icon: z.A.colors.TEXT_BRAND },
        red: { text: "text-feedback-critical", icon: z.A.colors.TEXT_FEEDBACK_CRITICAL },
        green: { text: "text-feedback-positive", icon: z.A.colors.TEXT_FEEDBACK_POSITIVE },
    };
function aX(e) {
    var t, l;
    let n,
        a,
        { example: i } = e,
        s =
            "" ===
            (a = [
                "timeout" !== (t = i).outcome || null == t.timeout_seconds
                    ? null
                    : ec.intl.formatToPlainString(ec.t["3LYql6"], {
                          duration:
                              ((l = t.timeout_seconds),
                              null != (n = (0, aG.getFriendlyDurationString)(l))
                                  ? n
                                  : l % 604800 == 0
                                    ? ec.intl.formatToPlainString(ec.t.EmoBD2, { weeks: l / 604800 })
                                    : l % 86400 == 0
                                      ? ec.intl.formatToPlainString(ec.t["k2UNz+"], { days: l / 86400 })
                                      : l % 3600 == 0
                                        ? ec.intl.formatToPlainString(ec.t.xCjYxK, { hours: l / 3600 })
                                        : l % 60 == 0
                                          ? ec.intl.formatToPlainString(ec.t.opVZ9q, { mins: l / 60 })
                                          : ec.intl.formatToPlainString(ec.t["4zv/jq"], { secs: l })),
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
function aY(e) {
    var t;
    let { example: l } = e,
        { label: n, blockedStyle: a } = a$[l.outcome];
    return (0, r.jsxs)("li", {
        className: u()(aV.nM, { [u()(aV.HV, aK.DX)]: a }),
        children: [
            (0, r.jsx)(A.A, { children: `${n()}: ` }),
            (0, r.jsx)("span", {
                className: aV.my,
                children: (0, r.jsx)(az.eu, {
                    src: (0, aU.AE)(void 0, void 0),
                    size: aF._3.SIZE_24,
                    "aria-label": ec.intl.string(ed.default["1yI0xV"]),
                }),
            }),
            (0, r.jsxs)("div", {
                className: aV.fw,
                children: [
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = l.content), n0.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    (0, r.jsx)(aX, { example: l }),
                ],
            }),
        ],
    });
}
function aQ(e) {
    let { group: t } = e,
        l = i.useId(),
        n = aq[t.section],
        a = aW[t.section],
        s = aJ[n.tone];
    return (0, r.jsxs)("div", {
        className: aV.uW,
        children: [
            (0, r.jsxs)("div", {
                className: aV.bV,
                children: [
                    (0, r.jsx)(a, { size: "xs", color: s.icon, "aria-hidden": !0 }),
                    (0, r.jsx)(y.E, {
                        id: l,
                        variant: "text-xs/semibold",
                        color: s.text,
                        className: aV.a9,
                        children: n.label(),
                    }),
                ],
            }),
            (0, r.jsx)("ul", {
                className: aV.Ge,
                "aria-labelledby": l,
                children: t.examples.map((e, t) => (0, r.jsx)(aY, { example: e }, t)),
            }),
        ],
    });
}
function aZ() {
    let { avatarSrc: e, eventHandlers: t } = (0, aO.a)(!0);
    return (0, r.jsx)("span", {
        className: aV.Gy,
        ...t,
        children: (0, r.jsx)(az.eu, { src: e, size: aF._3.SIZE_16, "aria-label": ec.intl.string(ec.t.hG1StD) }),
    });
}
function a0(e) {
    var t;
    let { automod: l } = e;
    return (0, r.jsx)("div", {
        className: aV.K1,
        children: ((t = l.examples),
        aB
            .map((e) => ({ section: e, examples: t.filter((t) => aH[t.outcome] === e) }))
            .filter((e) => e.examples.length > 0)).map((e) => (0, r.jsx)(aQ, { group: e }, e.section)),
    });
}
var a1 = l(460905),
    a2 = l(110384),
    a3 = l(763754),
    a5 = l(217424),
    a4 = l(194085),
    a7 = l(20851),
    a6 = l(692508),
    a8 = l(798819);
function a9(e) {
    let { item: t } = e,
        { iconLeft: l, icon: n } = t;
    return (0, r.jsxs)("div", {
        className: u()(a8.item, a8.labelContainer, a8.colorDefault, {
            [a8.focused]: !0 === t.highlighted,
            [a8.disabled]: !0 === t.muted,
        }),
        children: [
            null != l
                ? (0, r.jsx)("div", {
                      className: a8.iconContainerLeft,
                      children: (0, r.jsx)(l, { color: "currentColor", className: a8.icon }),
                  })
                : null,
            (0, r.jsx)("div", { className: u()(a8.label, a6.Gy), children: t.label }),
            null != n
                ? (0, r.jsx)("div", {
                      className: a8.iconContainer,
                      children: (0, r.jsx)(n, { color: "currentColor", className: a8.icon }),
                  })
                : null,
        ],
    });
}
function re(e) {
    let { target: t, commandName: l, appIconSrc: n } = e,
        a = i.useMemo(
            () =>
                null != n
                    ? (e) => {
                          let { className: t } = e;
                          return (0, r.jsx)("img", { src: n, alt: "", className: u()(t, a6.ak) });
                      }
                    : void 0,
            [n],
        ),
        s =
            "message" === t
                ? { label: ec.intl.string(ec.t["5IEsGx"]), icon: a2.W, muted: !0 }
                : { label: ec.intl.string(ec.t.LYju5J), muted: !0 };
    return (0, r.jsx)("div", {
        className: u()(a8.menu, a6.MK),
        "aria-hidden": !0,
        children: (0, r.jsxs)("div", {
            className: a8.scroller,
            children: [
                (0, r.jsx)(a9, { item: s }),
                (0, r.jsx)("div", { className: a8.separator }),
                (0, r.jsx)(a9, { item: { label: l, iconLeft: a, highlighted: !0 } }),
            ],
        }),
    });
}
var rt = l(381941);
function rl() {}
function rn(e) {
    let t,
        l,
        n,
        a,
        s,
        o,
        d,
        c,
        f,
        h,
        g,
        { projectId: x, exchanges: p } = e,
        {
            items: v,
            botIcon: j,
            appIconSrc: b,
        } = ((t = (0, m.bG)([tq.default], () => tq.default.getCurrentUser())),
        (l = (0, m.bG)([eS.Ay], () => eS.Ay.getProject(x))),
        (n = l?.application_id),
        (a = (0, m.bG)([ay.A], () => ay.A.getApplication(n)?.getIconURL(80) ?? null, [n])),
        (s = l?.name ?? ec.intl.string(ed.default.JEYq8M)),
        (o = (0, m.bG)([tq.default], () => (null != n ? tq.default.getUser(n) : void 0), [n])),
        (c = aR("31337", s, { bot: !0, enabled: !(d = o?.bot === !0) })),
        (f = d ? o : c),
        (h = aR("31338", ec.intl.string(ed.default["9iAOsw"]), { discriminator: "0003" })),
        (g = aR("31339", (0, tB.mG)(t) ?? "", { enabled: null != t })),
        {
            items: i.useMemo(
                () =>
                    null == t || null == g || null == f || null == h
                        ? []
                        : (function (e, t, l) {
                              var n, a, r;
                              let { bot: i, currentUser: s, viewer: u, member: o } = t,
                                  d = [];
                              function c(e, t) {
                                  let {
                                          interactionName: l,
                                          messageType: n,
                                          menu: a,
                                      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                      r = String(d.length + 1),
                                      i = (0, ak.rh)({
                                          ...(0, aw.Ay)({
                                              channelId: aP.id,
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
                                                        type: ab.G.APPLICATION_COMMAND,
                                                        user: (0, aw.Vi)(s),
                                                    },
                                                }
                                              : {}),
                                      });
                                  d.push({ key: r, record: i, isCommandReply: null != l, menu: a });
                              }
                              for (let t of e)
                                  switch (t.kind) {
                                      case "command":
                                          c(t.bot, i, {
                                              interactionName: t.user.trim().replace(/^\//, "").split(/\s+/)[0] ?? "",
                                              messageType: eb.lAJ.CHAT_INPUT_COMMAND,
                                          });
                                          break;
                                      case "user_command":
                                      case "message_command": {
                                          let e = "user_command" === t.kind;
                                          (c(e ? l.memberMessage : l.targetMessage, e ? o : s, {
                                              menu: { target: e ? "user" : "message", commandName: t.user },
                                          }),
                                              c(t.bot, i, {
                                                  interactionName: t.user,
                                                  messageType: eb.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (c(((n = t.user), n.trim().replace(aL, `<@${i.id}>`)), s),
                                              c(((a = t.bot), a.includes("<@") ? a : `<@${u.id}> ${a}`), i));
                                          break;
                                      case "event":
                                          c(((r = t.bot), r.split(`@${o.username}`).join(`<@${o.id}>`)), i);
                                  }
                              return d;
                          })(
                              p,
                              { bot: f, currentUser: t, viewer: g, member: h },
                              {
                                  targetMessage: ec.intl.string(ed.default["y+QYes"]),
                                  memberMessage: ec.intl.string(ed.default.BUTRDc),
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
              className: u()(a6.TE, `group-spacing-${rt.ES}`),
              children: v.map((e) => {
                  let { key: t, record: l, isCommandReply: n, menu: a } = e;
                  return (0, r.jsxs)(
                      "li",
                      {
                          className: null != a ? a6.Rz : void 0,
                          children: [
                              (0, r.jsx)(a7.A, {
                                  message: l,
                                  channel: aP,
                                  author: (0, a3.FT)(l.author, aP),
                                  isGroupStart: !0,
                                  avatarOverride: l.author.bot ? (j ?? void 0) : void 0,
                                  childrenExecutedCommand: n ? (0, r.jsx)(a5.A, { message: l, channel: aP }) : void 0,
                                  usernameClassName: a?.target === "user" ? a6.Ct : void 0,
                                  disableInteraction: !0,
                              }),
                              a?.target === "message"
                                  ? (0, r.jsx)("div", {
                                        className: a6.S3,
                                        inert: !0,
                                        "aria-hidden": !0,
                                        children: (0, r.jsxs)(a4.Ay, {
                                            children: [
                                                (0, r.jsx)(a4.qv, {
                                                    label: ec.intl.string(ec.t.lfIHs4),
                                                    icon: a1.n,
                                                    onClick: rl,
                                                }),
                                                (0, r.jsx)(a4.qv, {
                                                    label: ec.intl.string(ec.t["5IEsGx"]),
                                                    icon: a2.W,
                                                    onClick: rl,
                                                }),
                                                (0, r.jsx)(a4.qv, {
                                                    label: ec.intl.string(ec.t["UKOtz+"]),
                                                    icon: t4.MoreHorizontalIcon,
                                                    selected: !0,
                                                    onClick: rl,
                                                }),
                                            ],
                                        }),
                                    })
                                  : null,
                              null != a
                                  ? (0, r.jsx)("div", {
                                        className: "user" === a.target ? a6.ET : a6.je,
                                        inert: !0,
                                        children: (0, r.jsx)(re, {
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
var ra = l(633075),
    rr = l(946356),
    ri = l(58216),
    rs = l(27399);
function ru(e) {
    let { applicationId: t, rendererProps: l } = e,
        n = (0, m.bG)([tq.default], () => tq.default.getCurrentUser()),
        a = i.useMemo(() => new ra.R({ applicationId: t }), [t]);
    return null == n
        ? null
        : (0, r.jsx)("div", {
              className: rs.H,
              children: (0, r.jsx)(rr.A.Overlay, {
                  className: rs.w,
                  children: (0, r.jsx)(ri.A, {
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
var ro = l(443863);
let rd = {
    automod: ar.ShieldIcon,
    widget: ai.f,
    activity: as.k,
    commands: au.k,
    chat_bot: h.ChatIcon,
    bot: ao.RobotIcon,
};
function rc(e) {
    let { label: t, icon: l, info: n, children: a } = e;
    return (0, r.jsxs)("section", {
        className: ro.uW,
        children: [
            (0, r.jsxs)("span", {
                className: ro.a9,
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
function rm(e) {
    let { text: t, label: l } = e;
    return (0, r.jsx)(w.m, {
        text: t,
        children: (0, r.jsx)(k.D, {
            className: ro.bk,
            "aria-label": l,
            children: (0, r.jsx)(ad.CircleInformationIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
function rf(e) {
    let { label: t, names: l } = e;
    return 0 === l.length
        ? null
        : (0, r.jsx)(rc, {
              label: t,
              children: (0, r.jsx)("div", {
                  className: ro.Ip,
                  children: l.map((e) =>
                      (0, r.jsx)(
                          "span",
                          {
                              className: ro.jw,
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
function rh(e) {
    let { tags: t } = e;
    return (0, r.jsx)("span", {
        className: ro.K2,
        children: t.map((e) => {
            let t = rd[e];
            return (0, r.jsxs)(
                "span",
                {
                    className: ro.L6,
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
                            children: ec.intl.string(ac[e]),
                        }),
                    ],
                },
                e,
            );
        }),
    });
}
function rg(e) {
    let { projectId: t, design: l } = e,
        { id: n } = l,
        { src: a, gone: s, handleError: u } = nS(t, n),
        o = ec.intl.string(ed.default["3/aHX6"]),
        d = i.useCallback(() => {
            (0, er.PK)(t, n).then(
                (e) => {
                    (0, nd.R)({
                        items: [{ type: "IMAGE", url: e, alt: o }],
                        startingIndex: 0,
                        shouldHideMediaOptions: !0,
                        location: "VibegrationsChat",
                    });
                },
                () => {},
            );
        }, [t, n, o]);
    return s
        ? null
        : (0, r.jsx)(rc, {
              label: ec.intl.string(ed.default.X15LLY),
              info: (0, r.jsx)(rm, {
                  text: ec.intl.string(ed.default.nR4B8P),
                  label: ec.intl.string(ed.default.nc0SNY),
              }),
              children: (0, r.jsx)(k.D, {
                  className: ro.xX,
                  onClick: d,
                  "aria-label": ec.intl.string(ed.default.TvAPIm),
                  children: null != a ? (0, r.jsx)("img", { src: a, alt: o, className: ro.sN, onError: u }) : null,
              }),
          });
}
function rx(e) {
    let t,
        l,
        { projectId: n, proposal: a, version: s, onApprove: u } = e,
        { automod: o } = a,
        { botInteraction: d, botExchanges: c } =
            ((t = (function (e) {
                if (null != e.bot) return e.bot.interaction;
                let t = e.commands.some(aT),
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
                              let s = e.commands.filter(aT).map((e) =>
                                      (function (e, t) {
                                          let l = e.description?.trim() ?? "",
                                              n = "" !== l ? l : t.reply;
                                          switch (aI(e)) {
                                              case aC.kc.USER:
                                                  return { kind: "user_command", user: e.name, bot: n };
                                              case aC.kc.MESSAGE:
                                                  return { kind: "message_command", user: e.name, bot: n };
                                              default:
                                                  return { kind: "command", user: `/${e.name}`, bot: n };
                                          }
                                      })(e, l),
                                  ),
                                  u = "messages" === t ? [] : s.filter(aM),
                                  o = r.length > 0 ? a_([...r, ...u], !0) : a_("both" === t ? [...s, i] : s, !1);
                              return o.length > 0 ? o : [a];
                          })(a, t, {
                              message: ec.intl.string(ed.default.J7qggf),
                              reply: ec.intl.string(ed.default.nqYtiy),
                              event: ec.intl.string(ed.default["05lU9W"]),
                          }),
                [a, t],
            )),
            { botInteraction: t, botExchanges: l }),
        f = (function (e, t) {
            let { widget_config: l, widget_preview: n } = t,
                a = (0, m.bG)([ag.default], () => ag.default.locale),
                r = (0, m.bG)([eS.Ay], () => {
                    let t = eS.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [l, n] = i.useState(ap);
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
                u = i.useMemo(
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
                                                          ...av(l),
                                                          ...(null != l.fallback ? { fallback: av(l.fallback) } : {}),
                                                      };
                                                  t[l] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(l));
                                  let r = am.uW.safeParse(a);
                                  if (!r.success) return null;
                                  let i = r.data;
                                  return null == i[tb.m.WIDGET_TOP] || null == i[tb.m.WIDGET_BOTTOM]
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
                                                                    type: am.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof r
                                                                ? (a[e] = { type: am.oG.NUMBER, value: r })
                                                                : (a[e] = { type: am.oG.STRING, value: r });
                                                    return a;
                                                })(e, t, l),
                                                applicationAssets: Object.keys(l).map(aj),
                                                getApplicationAssetUrl: (e) => l[e.key] ?? "",
                                                localizedStrings: ax,
                                            },
                                        };
                              })(l, n, s, a),
                    [l, n, s, a],
                );
            return i.useMemo(() => (null == r || null == u ? null : { applicationId: r, rendererProps: u }), [r, u]);
        })(n, a),
        h = s?.superseded === !0,
        g = a.what_changed?.trim() ?? "";
    return (0, r.jsxs)(lJ, {
        title:
            h && null != s
                ? ec.intl.formatToPlainString(ed.default.YZ3qJs, { version: s.version })
                : ec.intl.string(ed.default["3b6e7o"]),
        meta: h
            ? (0, r.jsx)(lW, { children: ec.intl.string(ed.default.hF2c41) })
            : (0, r.jsx)(rh, {
                  tags: (function (e, t) {
                      if (null != e.automod) return ["automod"];
                      let l = null != e.widget_config ? ["widget"] : [];
                      return !0 === e.is_activity
                          ? [...l, "activity"]
                          : null == t
                            ? [...l, "bot"]
                            : (("commands" === t || "both" === t) && l.push("commands"),
                              "commands" !== t && l.push("chat_bot"),
                              l);
                  })(a, d),
              }),
        superseded: h,
        showLabel: ec.intl.string(ed.default.yD8EJS),
        hideLabel: ec.intl.string(ed.default.nSPGNb),
        bodyClassName: ro.rf,
        "data-conjure-plan-card": !0,
        children: [
            "" !== g
                ? (0, r.jsx)(rc, {
                      label: ec.intl.string(ed.default.iNS4dl),
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
            null != o && o.examples.length > 0
                ? (0, r.jsx)(rc, {
                      label: ec.intl.string(ed.default.z4ZKYG),
                      icon: (0, r.jsx)(aZ, {}),
                      info: (0, r.jsx)(rm, {
                          text: ec.intl.string(ed.default.bo4MOx),
                          label: ec.intl.string(ed.default.VPLNot),
                      }),
                      children: (0, r.jsx)(a0, { automod: o }),
                  })
                : null,
            null == o && null != a.design_image ? (0, r.jsx)(rg, { projectId: n, design: a.design_image }) : null,
            c.length > 0
                ? (0, r.jsx)(rc, {
                      label: ec.intl.string(ed.default.sA1lTv),
                      info: (0, r.jsx)(rm, {
                          text: ec.intl.string(ed.default.NnmbJu),
                          label: ec.intl.string(ed.default.KsqQJX),
                      }),
                      children: (0, r.jsx)(rn, { projectId: n, exchanges: c }),
                  })
                : null,
            null == o && null != f
                ? (0, r.jsx)(rc, {
                      label: ec.intl.string(ed.default.ove4zH),
                      info: (0, r.jsx)(rm, {
                          text: ec.intl.string(ed.default.XcIrHx),
                          label: ec.intl.string(ed.default["TwT+ht"]),
                      }),
                      children: (0, r.jsx)(ru, { ...f }),
                  })
                : null,
            a.changes.length > 0
                ? (0, r.jsx)(rc, {
                      label: ec.intl.string(ed.default["5+mG1z"]),
                      children: (0, r.jsx)("ul", {
                          className: ro.p_,
                          children: a.changes.map((e, t) =>
                              (0, r.jsx)(
                                  "li",
                                  {
                                      className: ro.Aw,
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
                ? (0, r.jsx)(rc, {
                      label: ec.intl.string(ec.t["0hKkS+"]),
                      children: (0, r.jsx)("ul", {
                          className: ro.p_,
                          children: a.commands.map((e, t) =>
                              (0, r.jsxs)(
                                  "li",
                                  {
                                      className: ro.uX,
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
            (0, r.jsx)(rf, { label: ec.intl.string(ed.default["2UbW6r"]), names: a.bot_permissions ?? [] }),
            (0, r.jsx)(rf, { label: ec.intl.string(ed.default["7TKfpj"]), names: a.privileged_intents ?? [] }),
            null == u || h
                ? null
                : (0, r.jsxs)("div", {
                      className: ro.o1,
                      children: [
                          (0, r.jsx)(C.$, {
                              variant: "primary",
                              size: "sm",
                              text: ec.intl.string(ed.default["6S+wRM"]),
                              onClick: u,
                          }),
                          (0, r.jsx)(y.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              tag: "span",
                              children: ec.intl.string(ed.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
var rp = l(331322);
function rv(e) {
    return null != e && e.status?.state === "unpublished";
}
function rj(e) {
    let { publish: t } = e,
        l = t.guildId,
        n = (0, m.bG)([Q.A], () => (null == l ? null : Q.A.getGuild(l)));
    return (0, r.jsx)(rp.B, {
        gap: 8,
        align: "start",
        children: (0, r.jsxs)(rp.B, {
            direction: "horizontal",
            gap: 8,
            align: "center",
            children: [
                (0, r.jsx)(w.m, {
                    text: t.disabledReason,
                    asContainer: !0,
                    children: (0, r.jsx)(C.$, {
                        variant: "primary",
                        size: "sm",
                        loading: t.publishing,
                        disabled: t.disabled,
                        onClick: () => t.run("card"),
                        text: t.label,
                    }),
                }),
                null != n
                    ? (0, r.jsxs)(rp.B, {
                          direction: "horizontal",
                          gap: 4,
                          align: "center",
                          children: [
                              (0, r.jsx)(y.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: ec.intl.string(ed.default["+HGTlC"]),
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
function rb(e) {
    let { projectId: t } = e,
        l = (0, ll.Ay)(t);
    return null != l && rv(l) ? (0, r.jsx)(rj, { publish: l }) : null;
}
var ry = l(478016),
    rk = l(989271);
function rw(e) {
    let { idea: t, selected: l, onPick: n } = e,
        a = i.useId(),
        s = null == n;
    return (0, r.jsxs)(k.D, {
        className: u()(rk.nM, { [rk.f1]: s, [rk.CZ]: l }),
        onClick: s ? void 0 : () => n(t),
        "aria-label": ec.intl.formatToPlainString(ed.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : a,
        "aria-disabled": s,
        "aria-pressed": l,
        children: [
            (0, r.jsxs)("div", {
                className: rk.jo,
                children: [
                    l
                        ? (0, r.jsx)(ry.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: rk.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, r.jsx)(y.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: rk.G9,
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
function rA(e) {
    let { ideas: t, pickedIdeaIds: l, onPick: n } = e,
        [a, s] = i.useState(() => new Set()),
        u = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), n?.(e));
            },
            [n],
        );
    return (0, r.jsx)(lV, {
        title: ec.intl.string(ed.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, r.jsx)(
                rw,
                { idea: e, selected: a.has(e.id) || l?.has(e.id) === !0, onPick: null == n ? void 0 : u },
                e.id,
            ),
        ),
    });
}
function rN(e) {
    let { onAsk: t } = e;
    return (0, r.jsx)(rp.B, {
        align: "start",
        "data-conjure-ideas-offer": !0,
        children: (0, r.jsx)(C.$, {
            variant: "secondary",
            size: "sm",
            disabled: null == t,
            onClick: t,
            text: ec.intl.string(ed.default["U/bLzU"]),
        }),
    });
}
var rC = l(530557),
    rS = l(872162);
function rE(e, t) {
    return { cardId: e, status: "pending" === t ? null : t };
}
var rI = l(202723);
function rT(e) {
    let { projectId: t, cardId: n, request: a, status: s, awaiting: o } = e,
        d = i.useCallback(() => {
            (0, te.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("291953"), l.e("408337")]).then(l.bind(l, 789864));
                return (l) => (0, r.jsx)(e, { ...l, projectId: t, request: a });
            });
        }, [t, a]),
        c = i.useMemo(() => a.fields.map((e) => ({ id: e.name, label: e.label, icon: rC.R })), [a.fields]),
        m = (function (e, t) {
            let [l, n] = i.useState(() => rE(e, t));
            return l.cardId !== e || (null == l.status && "pending" !== t)
                ? (n(rE(e, t)), !1)
                : null != l.status && t !== l.status;
        })(n, s),
        f = u()(rI.Lo, { [rI.jY]: m });
    return "superseded" === s
        ? (0, r.jsx)(
              "article",
              {
                  className: f,
                  children: (0, r.jsx)(y.E, {
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      tag: "span",
                      children: ec.intl.string(ed.default.CTxtdV),
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
                            children: ec.intl.string(ed.default.HCQvpO),
                        }),
                        (0, r.jsx)(rS.C, { label: ec.intl.string(ed.default.HCQvpO), size: "xs", items: c }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, r.jsx)(
                  "article",
                  {
                      className: rI.Lo,
                      children: (0, r.jsx)(rS.C, { label: ec.intl.string(ed.default.HCQvpO), size: "xs", items: c }),
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
                                className: rI.$h,
                                children: [
                                    (0, r.jsx)("span", {
                                        className: rI.c9,
                                        "aria-hidden": !0,
                                        children: (0, r.jsx)(aD.y, {
                                            size: "xs",
                                            color: z.A.colors.ICON_FEEDBACK_POSITIVE,
                                        }),
                                    }),
                                    (0, r.jsx)(y.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-feedback-positive",
                                        tag: "span",
                                        children: ec.intl.string(ed.default.sfp7Up),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(rS.C, { label: ec.intl.string(ed.default.sfp7Up), size: "xs", items: c }),
                        ],
                    },
                    s,
                )
              : (0, r.jsxs)("article", {
                    className: rI.Lo,
                    children: [
                        (0, r.jsx)(y.E, {
                            variant: "text-xs/semibold",
                            color: null != o ? "text-brand" : "text-muted",
                            tag: "span",
                            children: ec.intl.string(null != o ? ed.default.O0QIqj : ed.default.HCQvpO),
                        }),
                        (0, r.jsx)(y.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            selectable: !0,
                            children: null != a.note && "" !== a.note ? a.note : ec.intl.string(ed.default.MPGSHL),
                        }),
                        (0, r.jsx)(rS.C, { label: ec.intl.string(ed.default.HCQvpO), size: "xs", items: c }),
                        (0, r.jsx)("div", {
                            className: rI.sq,
                            children: (0, r.jsx)(C.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: d,
                                text: ec.intl.string(ed.default.EK8tKY),
                            }),
                        }),
                    ],
                });
}
var rM = l(919790),
    r_ = l(971824),
    rP = l(162052),
    rR = l(165648);
function rL(e) {
    let t = n9(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let l = null != e.task.helperMark ? n8(e.task.helperMark) : void 0,
            n = l ?? t.get(e.taskId);
        return null == n
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: n,
                      name: null != l && null != e.task.helperName ? e.task.helperName : n.name,
                      task: n2(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function rD(e) {
    let {
            projectId: t,
            steps: l,
            active: n = !1,
            turnActive: a = n,
            checklistSuperseded: s = !1,
            durationMs: u,
            interrupted: o = !1,
            todos: d,
            provisionalTodo: c,
            segment: m,
            hostsChecklist: f = !0,
            reportsDuration: h = !0,
            closed: g = !1,
            segmentDurationMs: x,
        } = e,
        p = i.useMemo(() => (0, lF.GO)(l, { turnActive: n }), [l, n]),
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
    if (o)
        return (0, r.jsx)("ol", {
            className: l3.pj,
            "data-live": !1,
            children: (0, r.jsx)(l$.A, {
                glyph: (0, r.jsx)(nZ.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: ec.intl.string(ed.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = n ? void 0 : (x ?? (h ? (p.turn?.durationMs ?? u) : void 0)),
        b = f ? ((0, lF.lt)(l) ?? d ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = n9(k.map((e) => e.taskId)),
        A = !g && (n || k.some((e) => "running" === e.task.status)),
        N = rL(k);
    return (0, r.jsx)(l$.E.Provider, {
        value: k.length,
        children: (0, r.jsxs)("ol", {
            className: l3.pj,
            "data-live": A,
            children: [
                (0, r.jsx)(lU.A, {
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
                    let n = null != e.task.helperMark ? n8(e.task.helperMark) : void 0,
                        a = n ?? w.get(e.taskId);
                    return null == a
                        ? null
                        : (0, r.jsx)(
                              al,
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
                y
                    ? (0, r.jsx)("li", {
                          className: l3.YO,
                          children: (0, r.jsx)(l1, { todos: b, provisional: c, agents: N, live: a, superseded: s }),
                      })
                    : null,
            ],
        }),
    });
}
function rz(e) {
    let {
            projectId: t,
            steps: l,
            content: n,
            proposal: a,
            planVersion: s,
            ideas: o,
            attachments: d,
            secretRequest: c,
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
            hoistedAttachmentsHost: A,
            restoreProposal: N,
            onRestoreProposal: C,
        } = e,
        S = i.useMemo(
            () => n3({ steps: l, content: n, hasProposal: null != a, hasAttachments: null != d && d.length > 0 }),
            [l, n, a, d],
        ),
        { streamed: E, lastStreamedMessage: I, showsClosingMessage: T, closingContent: M } = S,
        _ = (w ? A : void 0) ?? S.attachmentsHost,
        P = T && !w,
        R = null == d ? null : (0, r.jsx)(rM.A, { projectId: t, attachments: d }),
        L = null == R ? null : (0, r.jsx)("div", { className: l3.MT, children: R }),
        D = b
            ? (0, r.jsx)(y.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return ec.intl.string(ed.default.Mv5OmK);
                          case "queued":
                              return ec.intl.string(ed.default["Po/2mi"]);
                          case "restarting":
                              return ec.intl.string(ed.default.Vj0woh);
                          default:
                              return ec.intl.string(ed.default.gY3L8p);
                      }
                  })(k),
              })
            : null;
    return (0, r.jsxs)("div", {
        className: l3.ue,
        children: [
            E.length > 0 && !w
                ? (0, r.jsx)("ol", {
                      className: l3.dO,
                      children: E.filter((e) => "todos" !== e.type).map((e) =>
                          (0, r.jsxs)(
                              "li",
                              {
                                  className: l3.DV,
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: rR.PT,
                                          children: n0.A.parse(e.content, !0, {
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
                ? (0, r.jsx)(rx, { projectId: t, proposal: a, version: s, onApprove: j })
                : P
                  ? (0, r.jsxs)("div", {
                        className: u()(l3.ky, rP.XR),
                        children: [
                            (0, r.jsx)("div", {
                                className: u()(rR.PT, l3.cW),
                                children: n0.A.parse(M, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === _ ? L : null,
                            D,
                        ],
                    })
                  : null,
            null != c
                ? (0, r.jsx)("div", {
                      className: u()(l3.ky, rP.XR, { [r_.O]: null != f && "open" === h }),
                      children: (0, r.jsx)(rT, {
                          projectId: t,
                          cardId: m ?? "",
                          request: c,
                          status: h,
                          awaiting: "open" === h ? f : void 0,
                      }),
                  })
                : null,
            null != g
                ? (0, r.jsx)("div", {
                      className: u()(l3.ky, rP.XR),
                      children: (0, r.jsx)(n$, { projectId: t, request: g }),
                  })
                : null,
            "standalone" !== _ && ("closing" !== _ || P) ? null : R,
            null != x ? (0, r.jsx)(rb, { projectId: t }) : null,
            null != o && o.length > 0 ? (0, r.jsx)(rA, { ideas: o, pickedIdeaIds: v, onPick: p }) : null,
            null != N ? (0, r.jsx)(aa, { proposal: N, onRestore: C }) : null,
            P ? null : D,
        ],
    });
}
var rF = l(146806),
    rO = l(477262),
    rU = l(432017),
    rG = l(475358),
    r$ = l(717400),
    rq = l(663341),
    rB = l(559647),
    rH = l(775602),
    rV = l(234320),
    rK = l(285796),
    rW = l(922329);
async function rJ(e) {
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
var rX = l(153171);
let rY = ee.lN;
function rQ(e, t, l, n) {
    let a = np(e, t).length;
    !(function (e, t, l) {
        if (0 === l.length) return;
        let n = l.map((e) => {
            let { draft: t, upload: l } = e;
            return { draft: { ...t, localId: nh++ }, upload: l };
        });
        for (let { draft: l, upload: a } of (nv(e, t, [
            ...np(e, t),
            ...n.map((e) => {
                let { draft: t } = e;
                return t;
            }),
        ]),
        n))
            a?.().then(
                (n) => {
                    if ("errorText" in n) return void nj(e, t, l.localId, { status: "error", errorText: n.errorText });
                    let { converted: a, ...r } = n;
                    nj(e, t, l.localId, { ...a, status: "ready", ref: r })
                        ? setTimeout(
                              () =>
                                  nj(e, t, l.localId, {
                                      status: "error",
                                      errorText: ec.intl.string(ed.default.E7dS5n),
                                  }),
                              ee.o2 - 3e5,
                          )
                        : nb(e, r.id);
                },
                (n) => {
                    (console.error("[vibegrations] attachment upload failed", n),
                        nj(e, t, l.localId, { status: "error", errorText: ec.intl.string(ed.default["kUw/b1"]) }));
                },
            );
    })(
        e,
        t,
        l.map((e) => {
            let t = "" === e.type ? "application/octet-stream" : e.type,
                l = { name: e.name, contentType: t };
            if (a++ >= rY)
                return {
                    draft: {
                        ...l,
                        status: "error",
                        errorText: ec.intl.formatToPlainString(ed.default.Q0aCVZ, { count: rY }),
                    },
                };
            if (!(0, ee.Oq)(e.size, t))
                return "image/png" === t && e.size <= ee.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas
                    ? {
                          draft: { ...l, status: "uploading", previewUrl: URL.createObjectURL(e) },
                          upload: async () => {
                              let l = await rJ(e).catch(() => null);
                              return null != l && (0, ee.Oq)(l.size, l.type)
                                  ? { ...(await n(l)), converted: { name: l.name, contentType: l.type } }
                                  : { errorText: nw(t) };
                          },
                      }
                    : { draft: { ...l, status: "error", errorText: nw(t) } };
            let r = ee.XB.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...l, status: "uploading", previewUrl: r }, upload: () => n(e) };
        }),
    );
}
function rZ(e) {
    let { projectId: t, surface: l, onUploadFile: n } = e,
        a = ng.useState((e) => nx(e, t, l)),
        r = i.useCallback((e) => rQ(t, l, e, n), [t, l, n]),
        s = i.useCallback(
            (e) => {
                if (e.defaultPrevented) return;
                let t = Array.from(e.clipboardData?.files ?? []);
                0 !== t.length && (e.preventDefault(), r(t));
            },
            [r],
        ),
        u = i.useCallback(
            (e) => {
                let n, a;
                null != (a = (n = np(t, l)).find((t) => t.localId === e)) &&
                    (ny(t, a),
                    nv(
                        t,
                        l,
                        n.filter((t) => t.localId !== e),
                    ));
            },
            [t, l],
        ),
        o = i.useCallback(() => nN(t, l), [t, l]);
    return {
        drafts: a,
        addFiles: r,
        pasteFiles: s,
        removeDraft: u,
        settled: a.every((e) => "ready" === e.status),
        takeRefs: o,
    };
}
function r0(e) {
    let { draft: t, onRemove: l } = e;
    return (0, r.jsxs)(rW.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, r.jsx)(N.y, { type: N.t.SPINNING_CIRCLE_SIMPLE, className: rX.Rk }) : null,
            (0, r.jsx)("button", {
                type: "button",
                className: rX.o1,
                onClick: () => l(t.localId),
                "aria-label": ec.intl.string(ed.default.Slam9g),
                children: (0, r.jsx)(rK.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var r1 = l(497437);
let r2 = [
        {
            id: "add-images-videos",
            label: ed.default["51+9lc"],
            icon: rO.s,
            accept: "image/*,video/*,.png,.jpg,.jpeg,.gif,.webp,.avif,.heic,.heif,.svg,.bmp,.mp4,.m4v,.mov,.webm,.mkv,.avi",
        },
        {
            id: "add-sounds",
            label: ed.default["10ljr2"],
            icon: rU.T,
            accept: "audio/*,.mp3,.wav,.ogg,.oga,.opus,.m4a,.aac,.flac,.weba,.webm,.aif,.aiff,.mid,.midi",
        },
        { id: "add-other-files", label: ed.default.aotDee, icon: ea.H, accept: "" },
    ],
    r3 = "text-md/normal",
    r5 = null;
function r4(e) {
    let { text: t, offering: l, typed: n } = e,
        [a, s] = i.useState(t),
        o = i.useRef(null),
        d = i.useRef(null),
        c = i.useRef(0),
        [f, h] = i.useState(0),
        [g, x] = i.useState(0),
        [p, v] = i.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
    (i.useLayoutEffect(() => {
        let e = o.current,
            t = e?.parentElement;
        if (null == e || null == t) return;
        let l = c.current;
        function n() {
            let e = o.current,
                t = e?.parentElement;
            if (null == e || null == t) return;
            let n = d.current;
            if (null == n) return;
            let a = parseFloat(getComputedStyle(t).columnGap),
                r = Number.isNaN(a) ? 0 : a,
                i = e.offsetWidth,
                s = n.offsetWidth + r;
            (x(i + r), h(s));
            let u = s + i,
                c = Math.max(l, n.offsetWidth) + r + i,
                m = 0 === c ? 1 : s / c,
                f = 0 === c ? 1 : u / c;
            v({
                frontFrom: 1e3 * (0, rF._R)(m),
                frontTo: 1e3 * (0, rF._R)(f),
                backFrom: 1e3 * (0, rF.T)(m),
                backTo: 1e3 * (0, rF.T)(f),
            });
        }
        let a = new ResizeObserver(n);
        return (n(), a.observe(e), a.observe(t), null != d.current && a.observe(d.current), () => a.disconnect());
    }, [t]),
        i.useEffect(() => {
            c.current = d.current?.offsetWidth ?? 0;
        }, [t]));
    let [j, b] = i.useState(0),
        [k, w] = i.useState(null),
        A = i.useRef(!1),
        N = i.useCallback(() => {
            (w(A.current ? (l ? "through" : "out") : l ? "in" : null), b((e) => e + 1));
        }, [l]);
    i.useEffect(() => {
        A.current = l;
    }, [l, t]);
    let C = "in" === k ? p.backFrom : p.frontFrom,
        S = "out" === k ? p.frontTo : p.backTo,
        E = (0, m.bG)([rH.Ay], () => rH.Ay.useReducedMotion),
        I = t === ec.intl.string(ed.default.Zc7gML),
        T = a === t && I;
    function M(e, t, l) {
        let n = null != l;
        return (0, r.jsx)("span", {
            ref: l,
            className: u()(r1.VT, { [r1.qk]: n }),
            style: n
                ? {
                      insetInlineStart: f,
                      "--custom-cap-wipe-delay": `${C}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, S - C)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": n && j > 0 && null != k ? j % 2 : void 0,
            "data-wipe-kind": n ? (k ?? void 0) : void 0,
            children: (0, r.jsx)(rG.e, { shortcut: "tab", className: r1.xT, keyClassName: e }),
        });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eR.o, {
                text: t,
                variant: r3,
                delay: null,
                duration: 1e3,
                trailingWidth: g,
                className: u()(r1.xM, { [r1.s2]: n }),
                onStart: N,
                onComplete: () => s(t),
            }),
            M(r1.IS, l || (!E && "out" === k), o),
            (0, r.jsx)("span", {
                ref: d,
                className: r1.QI,
                "aria-hidden": !0,
                children: (0, r.jsx)(y.E, { variant: r3, tag: "span", children: t }),
            }),
            T
                ? (0, r.jsxs)("span", {
                      className: r1.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, r.jsx)(y.E, { variant: r3, tag: "span", className: r1.xM, children: t }),
                          M(r1.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
function r7(e) {
    let {
            projectId: t,
            canSend: l,
            stopped: n,
            running: a,
            restoring: s = !1,
            onSend: u,
            onInterrupt: o,
            onUploadFile: d,
            onApprove: c,
            onImport: f,
            suggestion: h,
            questionOpen: g = !1,
            hasPendingContext: x = !1,
            onDraftHasTextChange: p,
            modelSettings: v,
            onModelSettingsChange: j,
        } = e,
        [b, y] = i.useState(() => nY.getDraft(t)),
        k = i.useCallback(
            (e) => {
                ((0, eC.I$)(t, e), y(e));
            },
            [t],
        ),
        N = "" !== b.trim();
    i.useEffect(() => p?.(N), [N, p]);
    let [C, S] = i.useState(t);
    C !== t && (S(t), y(nY.getDraft(t)));
    let E = (0, m.bG)([rH.Ay], () => rH.Ay.isSubmitButtonEnabled),
        [I, T] = i.useState(!1);
    i.useEffect(() => {
        a || T(!1);
    }, [a]);
    let M = i.useRef(null),
        {
            drafts: _,
            addFiles: P,
            pasteFiles: R,
            removeDraft: L,
            settled: D,
            takeRefs: z,
        } = rZ({ projectId: t, surface: "chat", onUploadFile: d }),
        F = "" !== b.trim() || _.length > 0 || x,
        O = l && F && D,
        [U, G] = i.useState(null);
    i.useEffect(() => {
        if (null == U) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => G(null));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [U]);
    let $ = i.useCallback(() => {
            if (!O) return;
            let e = z();
            u(b, e.length > 0 ? e : void 0);
            let t = (function (e, t, l) {
                let n,
                    a,
                    r = l.split("\n", 1)[0] ?? "";
                if (null == e || "" === r) return r;
                null == r5 && (r5 = document.createElement("canvas").getContext("2d"));
                let i = r5;
                if (null == i) return r;
                let s = getComputedStyle(e);
                i.font = "" !== s.font ? s.font : `${s.fontWeight} ${s.fontSize} ${s.fontFamily}`;
                let u =
                    t > 0
                        ? t
                        : ((n = parseFloat(s.paddingInlineStart)),
                          (a = parseFloat(s.paddingInlineEnd)),
                          e.clientWidth - (Number.isNaN(n) ? 0 : n) - (Number.isNaN(a) ? 0 : a));
                if (u <= 0 || i.measureText(r).width <= u) return r;
                let o = 0,
                    d = r.length;
                for (; o < d;) {
                    let e = Math.ceil((o + d) / 2);
                    i.measureText(r.slice(0, e)).width <= u ? (o = e) : (d = e - 1);
                }
                let c = r.slice(0, o),
                    m = c.lastIndexOf(" ");
                return (m > 0 ? c.slice(0, m) : c).trimEnd();
            })(J.current?.querySelector("textarea") ?? null, eu.current, b);
            ("" !== t && G(t), k(""));
        }, [O, b, u, z, k]),
        q = i.useCallback(
            (e) => {
                (e.preventDefault(), $());
            },
            [$],
        ),
        B = i.useCallback(() => {
            null == o || I || (T(!0), o());
        }, [o, I]),
        H = null == h || "" !== b || !l || n || s || x ? null : h,
        V = i.useCallback(
            (e) => {
                if ("Escape" === e.key && a && null != o && !I) {
                    (e.preventDefault(), e.stopPropagation(), B());
                    return;
                }
                if ("Tab" === e.key && !e.shiftKey && null != H) {
                    (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), k(H));
                    return;
                }
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != c && (e.preventDefault(), c());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), $());
            },
            [$, c, a, o, I, B, H, k],
        ),
        K = i.useCallback(
            (e) => {
                l && R(e);
            },
            [l, R],
        );
    (0, rV.Vo)({
        event: eb.jej.GLOBAL_CLIPBOARD_PASTE,
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
        J = i.useRef(null),
        X = i.useRef(null),
        Y = i.useCallback((e) => {
            let t = M.current;
            null != t && ((t.accept = e), t.click());
        }, []),
        [Q, Z] = i.useState(0),
        [ee, ea] = i.useState(!1);
    i.useEffect(() => {
        if (0 === b.length) return void ea(!1);
        let e = J.current?.querySelector("textarea");
        if (null != e) {
            let t = r9(e);
            null != t && Z(t);
        }
        ea(!0);
        let t = setTimeout(() => ea(!1), r6);
        return () => clearTimeout(t);
    }, [b]);
    let er = i.useMemo(() => ({ "--custom-glow-x": `${Q}px` }), [Q]),
        ei = ee ? ` ${r1.EB}` : "",
        es = s
            ? ec.intl.string(ed.default.qqlUiW)
            : n
              ? ec.intl.string(ed.default.mPB3eo)
              : l
                ? x
                    ? ec.intl.string(ed.default.knUjL3)
                    : g
                      ? ec.intl.string(ed.default.IevBEw)
                      : ec.intl.string(a ? ed.default["0BJa/0"] : ed.default.TEeU7z)
                : ec.intl.string(ed.default.zZ9NgM),
        eu = i.useRef(0),
        eo = i.useRef(null),
        em = i.useCallback((e) => {
            if ((eo.current?.disconnect(), null == e)) return;
            eu.current = e.clientWidth;
            let t = new ResizeObserver(() => {
                eu.current = e.clientWidth;
            });
            (t.observe(e), (eo.current = t));
        }, []),
        ef = i.useId(),
        eh = null != H,
        eg = U ?? H ?? es,
        ex = "" === b && "" !== eg;
    return (0, r.jsxs)("form", {
        onSubmit: q,
        className: r1.DA,
        children: [
            _.length > 0
                ? (0, r.jsx)("div", {
                      className: r1.lN,
                      children: _.map((e) => (0, r.jsx)(r0, { draft: e, onRemove: L }, e.localId)),
                  })
                : null,
            (0, r.jsx)("span", { className: `${r1.wg} ${r1.LP}${ei}`, style: er, "aria-hidden": !0 }),
            (0, r.jsx)("span", { className: `${r1.wg} ${r1.L3}${ei}`, style: er, "aria-hidden": !0 }),
            (0, r.jsxs)("div", {
                className: r1.VA,
                ref: J,
                children: [
                    (0, r.jsx)("input", {
                        ref: M,
                        type: "file",
                        multiple: !0,
                        onChange: W,
                        className: r1.nY,
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
                                "aria-label": ec.intl.string(ec.t.d56gCa),
                                onClose: t,
                                onSelect: t,
                                children: (0, r.jsxs)(en.rX, {
                                    children: [
                                        r2.map((e) =>
                                            (0, r.jsx)(
                                                en.Dr,
                                                {
                                                    id: e.id,
                                                    label: ec.intl.string(e.label),
                                                    iconLeft: e.icon,
                                                    leadingAccessory: { type: "icon", icon: e.icon },
                                                    action: () => Y(e.accept),
                                                },
                                                e.id,
                                            ),
                                        ),
                                        null != f
                                            ? (0, r.jsx)(en.Dr, {
                                                  id: "import-project",
                                                  label: ec.intl.string(ed.default["p/k5i7"]),
                                                  iconLeft: r$.q,
                                                  leadingAccessory: { type: "icon", icon: r$.q },
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
                                ref: X,
                                type: "button",
                                className: `${r1.Y0} ${r1.nu}`,
                                disabled: !l,
                                "aria-label": ec.intl.string(ec.t.d56gCa),
                                "aria-haspopup": "menu",
                                "aria-expanded": n,
                                children: (0, r.jsx)(rq.PlusLargeIcon, {
                                    size: "refresh_sm",
                                    color: "currentColor",
                                    className: r1.Qu,
                                }),
                            });
                        },
                    }),
                    ex
                        ? (0, r.jsx)("div", {
                              ref: em,
                              className: r1.ar,
                              "aria-hidden": "true",
                              children: (0, r.jsx)(r4, { text: eg, offering: eh && null == U, typed: null != U }),
                          })
                        : null,
                    (0, r.jsx)(l8.y, {
                        value: b,
                        onChange: (e) => k(e.currentTarget.value),
                        onKeyDown: V,
                        onPaste: K,
                        placeholder: ex ? "" : es,
                        disabled: !l,
                        "aria-label": ec.intl.string(ed.default.ldNl9x),
                        "aria-describedby": ex ? ef : void 0,
                        rows: 1,
                        className: r1.jp,
                    }),
                    ex ? (0, r.jsx)(A.A, { id: ef, children: es }) : null,
                    (0, r.jsx)("div", {
                        className: r1.Sz,
                        children:
                            a && null != o
                                ? (0, r.jsx)(w.m, {
                                      text: ec.intl.string(ed.default.wiguT0),
                                      ariaHidden: !0,
                                      children: (0, r.jsx)("button", {
                                          type: "button",
                                          className: `${r1.Y0} ${r1.$E}`,
                                          disabled: I,
                                          onClick: B,
                                          "aria-label": ec.intl.string(ed.default.wiguT0),
                                          children: (0, r.jsx)(nZ.w, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : v?.tierSettings != null && null != j
                                  ? (0, r.jsx)(th, {
                                        settings: v.tierSettings,
                                        tiers: v.tiers,
                                        choices: v.choices,
                                        disabled: !l,
                                        onChange: j,
                                        className: `${r1.Y0} ${r1.$E}`,
                                        icon: (0, r.jsx)(ti.R, {
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
                              className: r1.fF,
                              children: [
                                  (0, r.jsx)("div", { className: r1.MT }),
                                  (0, r.jsx)("button", {
                                      type: "submit",
                                      className: r1.rt,
                                      disabled: !O,
                                      "aria-label": ec.intl.string(ed.default.rxW2cl),
                                      children: (0, r.jsx)(rB.SendMessageIcon, {
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
let r6 = 1500,
    r8 = [
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
function r9(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = r9.mirror;
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
                (r9.mirror = t),
                t
            );
        })(),
        l = window.getComputedStyle(e);
    for (let e of r8) t.style.setProperty(e, l.getPropertyValue(e));
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let n = document.createElement("span");
    ((n.textContent = "\u200B"), t.appendChild(n));
    let a = n.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + a - e.scrollLeft);
}
r9.mirror = null;
var ie = l(155899),
    it = l(148087);
let il = [6e4, 18e4, 6e5],
    ia = [
        {
            key: "outdated",
            priority: 2,
            idleDelayMs: 6e4,
            backoffDelaysMs: il,
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
                    (0, tH.BL)(t) &&
                    !(null != l.publishCta && rv(n))
                );
            },
        },
    ];
function ir(e, t) {
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
let ii = new Map();
function is(e) {
    let { projectId: t, notice: l } = e;
    return "outdated" === l ? (0, r.jsx)(io, { projectId: t }) : (0, r.jsx)(iu, { projectId: t, notice: l });
}
function iu(e) {
    let { projectId: t, notice: l } = e,
        n = i.useContext(ll.bI),
        a = (0, m.bG)([eS.Ay, ay.A], () => {
            let e = eS.Ay.getProject(t);
            return null == e ? "" : (ay.A.getApplication(e.application_id)?.name ?? e.name);
        }),
        s = i.useCallback(() => {
            null != n && (0, ll.ub)(t, n);
        }, [n, t]);
    return (0, r.jsx)(y.E, {
        variant: "text-md/normal",
        color: "text-default",
        children: ec.intl.format(
            (function (e) {
                if (!e.update) return ed.default.MOrR29;
                switch (e.surface) {
                    case "bot":
                        return ed.default.zfpeIL;
                    case "widget":
                        return ed.default.DxCfTh;
                    case "automod":
                        return ed.default["8ytGC3"];
                    case "activity":
                    case null:
                        return ed.default.WSmpBT;
                }
            })(l),
            { name: a, onOpen: s },
        ),
    });
}
function io(e) {
    let { projectId: t } = e,
        l = (0, ll.Ay)(t),
        [n, a] = i.useState(!1);
    return null == l
        ? null
        : n && (l.publishing || !l.isUpdate)
          ? (0, r.jsx)(id, {})
          : (0, r.jsx)(y.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: ec.intl.format(ed.default.X8tdbS, {
                    action: l.label,
                    onUpdate: () => {
                        (a(!0), ii.get(t)?.forEach((e) => e()), l.run("outdated_notice"));
                    },
                }),
            });
}
function id() {
    let e = ec.intl.string(ed.default.lexcBN),
        t = (function () {
            let e = (0, m.bG)([rH.Ay], () => rH.Ay.useReducedMotion),
                [t, l] = i.useState(1);
            return (
                i.useEffect(() => {
                    if (e) return;
                    let t = setInterval(() => l((e) => (e % 3) + 1), 400);
                    return () => clearInterval(t);
                }, [e]),
                ".".repeat(e ? 3 : t)
            );
        })();
    return (0, r.jsxs)(y.E, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: [e, (0, r.jsx)("span", { "aria-hidden": !0, children: t })],
    });
}
var ic = l(248798);
function im(e, t) {
    e.style.height = `${t.offsetHeight}px`;
}
function ih(e) {
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
        o = i.useRef(null),
        d = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            let e = o.current;
            if (null == e || s) return;
            e.getBoundingClientRect();
            let t = d.current;
            if (null == t) {
                e.style.height = "0px";
                return;
            }
            im(e, t);
            let l = new ResizeObserver(() => im(e, t));
            return (l.observe(t), () => l.disconnect());
        }, [a, s]),
        (0, r.jsx)("div", {
            ref: o,
            className: u()(ic.NI, { [ic.Jg]: null == a }),
            "aria-live": "polite",
            children: (0, r.jsx)("div", {
                className: ic.t$,
                children: n.map((e) =>
                    (0, r.jsx)(
                        "div",
                        {
                            ref: e.leaving ? void 0 : d,
                            "aria-hidden": e.leaving || void 0,
                            className: u()(ic.qd, e.leaving ? ic.cu : ic.We),
                            children: l(e.key),
                        },
                        e.key,
                    ),
                ),
            }),
        })
    );
}
var ig = l(521981),
    ix = l(491182),
    ip = l(438729),
    iv = l(622868),
    ij = l(448368),
    ib = l(837528),
    iy = l(439762),
    ik = l(715628),
    iw = l(752636),
    iA = l(9842),
    iN = l(589022),
    iC = l(994500),
    iS = l(967198),
    iE = l(7584);
let iI = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function iT(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function iM(e, t) {
    if (t <= 0) return;
    let l = e.charCodeAt(t - 1);
    if (l >= 56320 && l <= 57343 && t >= 2) {
        let n = e.charCodeAt(t - 2);
        if (n >= 55296 && n <= 56319) return (n - 55296) * 1024 + (l - 56320) + 65536;
    }
    return l;
}
function i_(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let l = e.charCodeAt(t - 1),
        n = e.charCodeAt(t);
    if (l >= 55296 && l <= 56319 && n >= 56320 && n <= 57343) return !0;
    let a = iM(e, t),
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
    if (iT(a) && iT(r)) {
        let l = 0,
            n = t;
        for (; l < 32 && iT(iM(e, n));) (l++, (n -= 2));
        return l % 2 == 1;
    }
    return !1;
}
function iP(e, t) {
    let { streaming: l } = t,
        n = (0, m.bG)([rH.Ay], () => rH.Ay.useReducedMotion),
        a = l && !n,
        [r, s] = i.useState(() => ({ target: e, length: e.length })),
        u = r;
    (u.target !== e &&
        (u = {
            target: e,
            length: a
                ? (function (e, t, l) {
                      let n = Math.min(Math.max(l, 0), e.length);
                      if (0 === n) return 0;
                      if (t.length >= n && t.startsWith(e.slice(0, n))) return n;
                      let a = Math.min(n, t.length),
                          r = 0;
                      for (; r < a && e.charCodeAt(r) === t.charCodeAt(r);) r++;
                      for (; r > 0 && i_(t, r);) r--;
                      return r;
                  })(u.target, e, u.length)
                : e.length,
        }),
        a || u.length === e.length || (u = { target: e, length: e.length }),
        u !== r && s(u));
    let o = a && u.length < e.length,
        d = i.useRef(u);
    i.useLayoutEffect(() => {
        d.current = u;
    });
    let c = i.useRef(0),
        f = i.useRef(0);
    (i.useEffect(() => {
        if (o)
            return (
                (f.current = 0),
                (c.current = requestAnimationFrame(function e(t) {
                    let l = 0 === f.current ? 32 : t - f.current;
                    if (l >= 32) {
                        f.current = t;
                        let e = d.current,
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
                                    for (; n > t + 1 && l - n < 12 && iI.has(e.charAt(n - 1));) n--;
                                    return iI.has(e.charAt(n - 1)) ? l : n;
                                })(t, a, Math.min(t.length, a + i));
                                let u = s;
                                for (; u < t.length && u - s < 32 && i_(t, u);) u++;
                                return u;
                            })({ target: e.target, revealed: e.length, elapsedMs: l });
                        n !== e.length && s({ target: e.target, length: n });
                    }
                    c.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(c.current)
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
                let { target: e } = d.current;
                s({ target: e, length: e.length });
            }
        }, [o]));
    let h = Math.min(u.length, e.length);
    return { text: h >= e.length ? e : e.slice(0, h), revealing: a && h < e.length };
}
var iR = l(565645),
    iL = l(981879);
function iD(e) {
    let { emoji: t, label: l } = e;
    return (0, r.jsx)("div", {
        className: iL.H,
        children: (0, r.jsx)(iR.A, { emojiName: t, alt: l, size: "reaction" }),
    });
}
var iz = l(734495),
    iF = l(180227);
function iO(e) {
    let { message: t, onClose: l } = e,
        n = (0, iz.A)(t);
    return (0, r.jsx)(el.W, {
        navId: "conjure-message-actions",
        "aria-label": ec.intl.string(ec.t.Lv7LxN),
        onClose: l,
        onSelect: l,
        children: (0, r.jsx)(en.rX, { children: n }),
    });
}
function iU(e) {
    let { groupStart: t, renderMenu: l } = e,
        [n, a] = i.useState(!1),
        s = i.useRef(null),
        o = i.useCallback(() => a((e) => !e), []),
        d = i.useCallback(() => a(!1), []);
    return (0, r.jsx)("div", {
        className: u()(iF.QE, { [iF.Rn]: t, [iF.vg]: n }),
        children: (0, r.jsx)(a4.Ay, {
            children: (0, r.jsx)(et.Y, {
                targetElementRef: s,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return l(t);
                },
                shouldShow: n,
                onRequestClose: d,
                position: "left",
                align: "top",
                animation: et.Y.Animation.NONE,
                children: (e, t) => {
                    let { onClick: l, ...n } = e,
                        { isShown: a } = t;
                    return (0, r.jsx)(a4.qv, {
                        ref: s,
                        label: ec.intl.string(ec.t["UKOtz+"]),
                        icon: t4.MoreHorizontalIcon,
                        selected: a,
                        onClick: o,
                        ...n,
                    });
                },
            }),
        }),
    });
}
function iG(e) {
    let { message: t, groupStart: l } = e,
        n = i.useCallback((e) => (0, r.jsx)(iO, { message: t, onClose: e }), [t]);
    return null == (0, iz.A)(t) ? null : (0, r.jsx)(iU, { groupStart: l, renderMenu: n });
}
let i$ = (0, aA.createChannelRecord)({ id: "conjure-builder", type: eb.rbe.DM }),
    iq = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function iB(e, t) {
    return null == e ? e : (0, r.jsx)("div", { className: u()(iF.Yq, { [iF.x1]: t }), children: e });
}
function iH(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function iV(e, t, l) {
    let { content: n } = (0, iy.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        a = i.useMemo(() => ({ message: e, channel: i$, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != l
          ? (0, r.jsx)(ip.Ay, { className: l, message: e, content: n, compact: !1 })
          : (0, ik.A)(a, n);
}
function iK(e) {
    let [t, l] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        n = i.useCallback((e) => l((t) => ({ ...t, ...e })), []),
        a = i.useCallback(() => l({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, ib.m)(e, i$, t.usernameProfile, n),
        u = (0, ib.Jo)(t.avatarProfile, n),
        o = (0, m.bG)([iS.A], () => iS.A.getGuildId()),
        d = (0, m.bG)([tq.default], () => tq.default.getCurrentUser()),
        c = i.useCallback(
            (t) => {
                let l = tq.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, r.jsx)(iN.A, { ...t, user: l, currentUser: d, guildId: o ?? void 0 });
            },
            [d, o, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: u,
        onClickUsername: s,
        onPopoutRequestClose: a,
        renderPopout: c,
        guildId: o ?? void 0,
    };
}
function iW(e) {
    let { baseMessage: t, referenced: l, selected: n, onJumpToReplied: a } = e,
        s = i.useMemo(() => {
            let e = "" !== l.content ? (0, ig.Ay)(l, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == n
                ? e
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)("span", {
                              className: iF.GV,
                              children: [
                                  (0, r.jsx)(S.x, {
                                      className: iF.Rj,
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
        { isReplyAuthorBlocked: u, isReplyAuthorIgnored: o } = (0, m.cf)(
            [iC.A],
            () => ({
                isReplyAuthorBlocked: iC.A.isBlockedForMessage(l),
                isReplyAuthorIgnored: iC.A.isIgnoredForMessage(l),
            }),
            [l],
        ),
        d = (0, a3.X4)(l),
        c = (0, a3.X4)(t),
        f = iK(l);
    return (0, r.jsx)(ij.A, {
        repliedAuthor: d,
        baseAuthor: c,
        baseMessage: t,
        channel: i$,
        referencedMessage: { state: iA.a.LOADED, message: l },
        content: s,
        compact: !1,
        isReplyAuthorBlocked: u,
        isReplyAuthorIgnored: o,
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
function iJ(e) {
    let { message: t, author: l } = e,
        n = iK(t);
    return (0, r.jsx)(iv.Ay, {
        message: t,
        channel: i$,
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
function iX(e) {
    let { content: t, createdAt: l, userId: n, accessories: a, agentReaction: s, groupStart: u } = e;
    i.useEffect(() => tX(n), [n]);
    let o = (0, m.bG)(
            [tq.default],
            () => tJ(n, null != n ? tq.default.getUser(n) : null, tq.default.getCurrentUser()),
            [n],
        ),
        d = i.useMemo(() => (0, a3.FT)(o, null), [o]),
        c = i.useMemo(() => eZ(t), [t]),
        f = c?.body ?? t,
        h = i.useMemo(() => {
            if (null == o) return null;
            let e = (0, aw.Ay)({ channelId: i$.id, content: f, author: o });
            return (0, ak.rh)({ ...e, timestamp: iH(l, e.timestamp), state: eb.cmJ.SENT });
        }, [f, o, l]),
        g = (function (e) {
            if (null == e || "" === e) return null;
            let t = iE.Ay.convertSurrogateToName(e, !1);
            return "" === t ? null : ec.intl.formatToPlainString(ed.default.lxXLho, { emojiName: t });
        })(s);
    return null == h
        ? null
        : (0, r.jsx)(iY, {
              message: h,
              author: d,
              content: f,
              selected: c?.label,
              accessories:
                  null != s && null != g
                      ? (0, r.jsxs)(r.Fragment, { children: [a, (0, r.jsx)(iD, { emoji: s, label: g })] })
                      : a,
              groupStart: u,
          });
}
function iY(e) {
    let { message: t, author: l, content: n, selected: a, accessories: i, groupStart: s = !0 } = e,
        u = iV(t, n);
    return (0, r.jsx)(ix.A, {
        className: iF.yE,
        author: l,
        childrenHeader: s ? (0, r.jsx)(iJ, { message: t, author: l }) : void 0,
        childrenMessageContent:
            null == a
                ? u
                : (0, r.jsxs)("div", {
                      className: iF.zq,
                      children: [
                          (0, r.jsxs)("span", {
                              className: iF.GV,
                              children: [
                                  (0, r.jsx)(S.x, {
                                      className: iF.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  a,
                              ],
                          }),
                          (0, r.jsx)("span", { className: iF.WO, children: u }),
                      ],
                  }),
        childrenAccessories: iB(i, "" !== n),
        childrenButtons: (0, r.jsx)(iG, { message: t, groupStart: s }),
    });
}
function iQ(e) {
    let {
            content: t,
            createdAt: l,
            accessories: n,
            replyTo: a,
            onJumpToReplied: s,
            groupStart: u = !0,
            streaming: o = !1,
            buttons: d,
        } = e,
        { text: c, revealing: f } = iP(t, { streaming: o }),
        h = i.useMemo(() => (0, a3.FT)(null, null), []),
        g = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        x = a?.userId,
        p = (0, m.bG)(
            [tq.default],
            () => tJ(x, null != x ? tq.default.getUser(x) : null, tq.default.getCurrentUser()),
            [x],
        ),
        v = i.useMemo(() => (null == a ? null : eZ(a.content)), [a]),
        j = i.useMemo(() => {
            if (null == a || null == p) return null;
            let e = (0, aw.Ay)({ channelId: i$.id, content: v?.body ?? a.content, author: p });
            return (0, ak.rh)({ ...e, id: a.id, timestamp: iH(a.createdAt, e.timestamp), state: eb.cmJ.SENT });
        }, [a, v, p]),
        b = i.useMemo(() => (null == a ? void 0 : { channel_id: i$.id, message_id: a.id }), [a]),
        y = i.useMemo(() => {
            let e = (0, aw.Ay)({ channelId: i$.id, content: c, author: iq });
            return (0, ak.rh)({
                ...e,
                timestamp: iH(l, e.timestamp),
                state: eb.cmJ.SENT,
                ...(null != b ? { type: eb.lAJ.REPLY, message_reference: b } : {}),
            });
        }, [c, l, b]),
        k = iV(y, c, iF.OS);
    return (0, r.jsxs)("div", {
        className: iF.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": f ? "true" : void 0,
        children: [
            (0, r.jsx)(ix.A, {
                className: iF.yE,
                author: g,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, r.jsx)(iW, { baseMessage: y, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: (0, iw.A)({ message: y, channel: i$, author: g, guildId: void 0, isGroupStart: u }),
                childrenMessageContent: k,
                childrenAccessories: iB(n, "" !== c),
                disableInteraction: !0,
            }),
            d,
            u
                ? (0, r.jsx)("span", {
                      className: iF.st,
                      "aria-hidden": "true",
                      children: (0, r.jsx)(as.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
let iZ = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i;
var i0 = l(744898);
function i1(e) {
    let { onSelect: t, onClose: l = F.Z_, onRestoreVersion: n } = e;
    return (0, r.jsx)(el.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: l,
        "aria-label": ec.intl.string(ec.t.ogxXGq),
        onSelect: t,
        children: (0, r.jsx)(en.rX, {
            children: (0, r.jsx)(en.Dr, {
                id: "restore-version",
                label: ec.intl.string(ed.default.H8Jfhu),
                icon: i0.e,
                action: n,
            }),
        }),
    });
}
var i2 = l(986109);
function i3(e, t) {
    (0, ie.F)({ onConfirm: () => t(e) });
}
function i5(e) {
    let {
            projectId: t,
            messages: l,
            emptyState: n,
            ref: a,
            onPickIdea: s,
            onAskForIdeas: o,
            draftHasText: d,
            onApprovePlan: c,
            floatingSettingsMessageId: f,
            onRestoreVersion: h,
        } = e,
        g = i.useRef(null),
        x = i.useCallback(
            (e) => {
                ((g.current = e), "function" == typeof a ? a(e) : null != a && (a.current = e));
            },
            [a],
        ),
        [p, v] = i.useState(null),
        j = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(j.current), []);
    let b = i.useCallback((e) => {
            let t = g.current?.querySelector(`[data-conjure-message="${e}"]`);
            (t?.scrollIntoView({ block: "center", behavior: "smooth" }),
                v(e),
                window.clearTimeout(j.current),
                (j.current = window.setTimeout(() => v(null), 1600)));
        }, []),
        k = (0, m.bG)([eS.Ay], () => eS.Ay.getPublishStatus(t)?.state ?? null),
        w = i.useMemo(() => {
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
                                        let t = (0, lF.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(a) &&
                                (l && t.add(a.render_id), (l = !0));
                        }
                        return t;
                    })(e);
                function n(e, l) {
                    t.push({ row: e, groupable: { key: e.key, ...l } });
                }
                for (let t of e) {
                    if ("user" === t.role) {
                        n(
                            { kind: "user", key: t.render_id, message: t, groupStart: !1 },
                            { actor: "user", authorId: t.user_id, boundary: void 0 },
                        );
                        continue;
                    }
                    if ("publish_notice" === t.kind) {
                        let e = `${t.render_id}:publish`;
                        n(
                            { kind: "publishNotice", key: e, message: t, groupStart: !1 },
                            { actor: "assistant", boundary: e },
                        );
                        continue;
                    }
                    let e = !(0, tH.BL)(t),
                        a = n3({
                            steps: t.steps,
                            content: t.content,
                            hasProposal: null != t.proposal,
                            hasAttachments: (t.attachments?.length ?? 0) > 0,
                        }),
                        r = a.lastStreamedMessage?.key,
                        i = (0, lF.C6)(t.steps, { turnActive: e }),
                        { lastWork: s, open: u } = (0, lF.CT)(i, { turnActive: e }),
                        o = i.at(-1)?.index,
                        d = !1;
                    for (let c of i) {
                        if (null != c.prose && iZ.test(c.prose.content)) d = !0;
                        else if (null != c.prose && c.prose.key !== a.replyKey) {
                            let l = `${t.render_id}:${c.key}`;
                            n(
                                {
                                    kind: "prose",
                                    key: l,
                                    message: t,
                                    groupStart: !1,
                                    content: c.prose.content,
                                    hostsAttachments:
                                        "streamed" === a.attachmentsHost && c.prose.key === r && null != t.attachments,
                                    streaming: e && c.index === o && !c.hasWork,
                                },
                                { actor: "assistant", boundary: l },
                            );
                        }
                        (c.hasWork || c.hasTodos) &&
                            n(
                                {
                                    kind: "activity",
                                    key: `${t.render_id}:work-${c.index}`,
                                    message: t,
                                    groupStart: !1,
                                    segment: c.index,
                                    active: c.index === u,
                                    closed: c.index !== u,
                                    ...(null != c.durationMs ? { segmentDurationMs: c.durationMs } : {}),
                                    reportsDuration: c.index === s,
                                    hostsChecklist: c.hasTodos,
                                    turnActive: lO(t),
                                    checklistSuperseded: c.hasTodos && l.has(t.render_id),
                                },
                                { actor: null, boundary: void 0 },
                            );
                    }
                    let c = iZ.test(t.content ?? "");
                    if (
                        (!0 === t.interrupted || d || c
                            ? n(
                                  {
                                      kind: "interrupted",
                                      key: `${t.render_id}:interrupted`,
                                      message: t,
                                      groupStart: !1,
                                  },
                                  { actor: null, boundary: void 0 },
                              )
                            : i.every((e) => !e.hasTodos) &&
                              (t.todos?.length ?? 0) > 0 &&
                              n(
                                  {
                                      kind: "legacyTodos",
                                      key: `${t.render_id}:todos`,
                                      message: t,
                                      groupStart: !1,
                                      checklistSuperseded: l.has(t.render_id),
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
                        let l = `${t.render_id}:closing`;
                        n(
                            {
                                kind: "closing",
                                key: l,
                                message: t,
                                groupStart: !1,
                                active: e,
                                attachmentsHost: a.attachmentsHost,
                                content: a.closingContent,
                                sideReply: "side_reply" === t.kind,
                            },
                            {
                                actor: "assistant",
                                boundary: l,
                                separate: null != t.proposal || null != t.clarification || "side_reply" === t.kind,
                            },
                        );
                    }
                }
                let a = (function (e) {
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
                        let e = !r || a !== s.actor || t !== s.authorId || s.boundary !== l || !0 === s.separate || i;
                        (e && ((a = s.actor), (t = s.authorId), (r = !0), (i = !0 === s.separate), (l = s.boundary)),
                            n.push(e));
                    }
                    return n;
                })(t.map((e) => e.groupable));
                return t.map((e, t) => ({ ...e.row, groupStart: a[t] ?? !0 }));
            })(
                ((e = (function (e, t) {
                    if ("unpublished" !== t) return null;
                    for (let t = e.length - 1; t >= 0; t--) if (null != e[t].publishCta) return e[t].id;
                    return null;
                })(l, k)),
                l.every((t) => null == t.publishCta || t.id === e)
                    ? l
                    : l.map((t) => (null == t.publishCta || t.id === e ? t : { ...t, publishCta: null }))),
            );
        }, [l, k]),
        A = l.at(-1),
        C = (function (e, t, l) {
            var n;
            let a = (0, ll.Ay)(e),
                r = (0, it.A)(),
                s = (function (e) {
                    for (let t = e.length - 1; t >= 0; t--) {
                        let l = e[t];
                        if ("publish_notice" !== l.kind) {
                            if ("user" === l.role) return null;
                            if ((0, tH.BL)(l)) return l;
                            if (!(0, tH.B0)(e, t)) break;
                        }
                    }
                    return null;
                })(t),
                u = t.at(-1),
                o = {
                    projectId: e,
                    draftHasText: l,
                    publishing: a?.publishing === !0,
                    drift: a?.isUpdate === !0,
                    messageAt: null != u ? Math.max(u.created_at, u.finished_at ?? 0, u.settled_at ?? 0) : null,
                    visible: r,
                },
                [d, c] = i.useState(() => ir(o, Date.now())),
                m = (function (e, t, l) {
                    if (e.projectId !== t.projectId) return ir(t, l());
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
                            let t = Math.min(e.outdatedBackoff + 1, il.length - 1);
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
                })(d, o, Date.now),
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
                    ia.map((e) => ({
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
                "outdated" !== h || m.outdatedShown ? m !== d && c(m) : c({ ...m, outdatedShown: !0 }),
                i.useEffect(() => {
                    function t() {
                        c((e) => ({ ...e, outdatedUpdating: !0 }));
                    }
                    let l = ii.get(e) ?? new Set();
                    return (
                        ii.set(e, l),
                        l.add(t),
                        () => {
                            (l.delete(t), 0 === l.size && ii.delete(e));
                        }
                    );
                }, [e]),
                i.useEffect(() => {
                    if (null == g) return;
                    let e = setTimeout(() => c((e) => ({ ...e, now: Date.now() })), Math.max(0, g - Date.now()));
                    return () => clearTimeout(e);
                }, [g, m.now]),
                h
            );
        })(t, l, !0 === d),
        S = i.useCallback(
            (e) => {
                switch (e) {
                    case "outdated":
                        return (0, r.jsx)(iQ, {
                            groupStart: !1,
                            content: "",
                            accessories: (0, r.jsx)(is, { projectId: t, notice: "outdated" }),
                        });
                    case "ideas":
                        return (0, r.jsx)("div", {
                            className: i2.u$,
                            children: (0, r.jsx)(iQ, {
                                content: ec.intl.string(ed.default.s96AWB),
                                accessories: (0, r.jsx)(rN, { onAsk: o }),
                            }),
                        });
                }
            },
            [t, o],
        ),
        E = i.useMemo(
            () =>
                (function (e) {
                    if (e.at(-1)?.role !== "assistant") return null;
                    for (let t = e.length - 1; t >= 0; t--) {
                        let l = e[t];
                        if ("assistant" === l.role) {
                            if (!(0, tH.BL)(l) || "plan_implemented" === l.kind) return null;
                            if (null != l.proposal) return l.render_id;
                        }
                    }
                    return null;
                })(l),
            [l],
        ),
        I = i.useMemo(
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
        T =
            (A?.role !== "assistant" || null == A.awaitingUser || null == A.secretRequest
                ? null
                : (0, tH.BL)(A)
                  ? A.awaitingUser
                  : null) ?? void 0,
        M = (0, m.bG)([er.Ay], () => er.Ay.getSettings(t)?.secrets, [t]),
        _ = i.useMemo(
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
                                        t === ec.intl.string(ed.default.UGqnoV) ||
                                        t === ec.intl.string(ed.default.sMQt5O)
                                    );
                                })(s);
                            continue;
                        }
                        let u = s.secretRequest?.fields ?? [];
                        if (0 === u.length || !(0, tH.BL)(s)) continue;
                        let o = i;
                        for (let e of (o && null == l
                            ? n.set(s.render_id, "pending")
                            : o && null != l && u.every((e) => l.has(e.name))
                              ? n.set(s.render_id, "received")
                              : r
                                ? n.set(s.render_id, u.some((e) => a.has(e.name)) ? "superseded" : "inactive")
                                : n.set(s.render_id, "open"),
                        u))
                            a.add(e.name);
                        ((r = !0), (i = !1));
                    }
                    return n;
                })(l, M),
            [l, M],
        );
    if (0 === l.length) {
        if ("loading" === n)
            return (0, r.jsx)("ol", {
                ref: a,
                className: u()(i2.x7, i2.jH),
                "aria-busy": !0,
                children: (0, r.jsx)("li", { className: i2.Ub, children: (0, r.jsx)(N.y, {}) }),
            });
        let e = "unavailable" === n ? ed.default.Td4Sf4 : ed.default.V1QiNz;
        return (0, r.jsx)("ol", {
            ref: a,
            className: i2.x7,
            children: (0, r.jsx)(i4, { role: "assistant", children: (0, r.jsx)(iQ, { content: ec.intl.string(e) }) }),
        });
    }
    return (0, r.jsxs)("ol", {
        ref: x,
        className: i2.x7,
        children: [
            w.map((e) => {
                let n = e.message;
                switch (e.kind) {
                    case "user": {
                        let l = null != n.attachments && n.attachments.length > 0 ? n.attachments : null;
                        return (0, r.jsx)(
                            i4,
                            {
                                role: "user",
                                anchorId: n.id,
                                highlighted: p === n.id,
                                continuation: !e.groupStart,
                                children: (0, r.jsx)(iX, {
                                    groupStart: e.groupStart,
                                    content: n.content,
                                    createdAt: n.created_at,
                                    userId: n.user_id,
                                    agentReaction: n.agentReaction,
                                    accessories:
                                        null != l ? (0, r.jsx)(rM.A, { projectId: t, attachments: l }) : void 0,
                                }),
                            },
                            e.key,
                        );
                    }
                    case "prose":
                        return (0, r.jsx)(
                            i4,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                children: (0, r.jsx)(iQ, {
                                    groupStart: e.groupStart,
                                    content: e.content,
                                    streaming: e.streaming,
                                    createdAt: n.created_at,
                                    accessories:
                                        e.hostsAttachments && null != n.attachments
                                            ? (0, r.jsx)(rM.A, { projectId: t, attachments: n.attachments })
                                            : void 0,
                                }),
                            },
                            e.key,
                        );
                    case "activity":
                        return (0, r.jsx)(
                            i4,
                            {
                                role: "assistant",
                                children: (0, r.jsx)(rD, {
                                    projectId: t,
                                    steps: n.steps,
                                    segment: e.segment,
                                    active: e.active,
                                    closed: e.closed,
                                    segmentDurationMs: e.segmentDurationMs,
                                    reportsDuration: e.reportsDuration,
                                    hostsChecklist: e.hostsChecklist,
                                    turnActive: e.turnActive,
                                    checklistSuperseded: e.checklistSuperseded,
                                    durationMs: null != n.finished_at ? n.finished_at - n.created_at : void 0,
                                    todos: n.todos,
                                    provisionalTodo: n.provisionalTodo,
                                }),
                            },
                            e.key,
                        );
                    case "publishNotice":
                        return (0, r.jsx)(
                            i4,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                children: (0, r.jsx)(iQ, {
                                    groupStart: e.groupStart,
                                    content: null == n.publishNotice ? n.content : "",
                                    createdAt: n.created_at,
                                    accessories:
                                        null == n.publishNotice
                                            ? void 0
                                            : (0, r.jsx)(is, { projectId: t, notice: n.publishNotice }),
                                }),
                            },
                            e.key,
                        );
                    case "interrupted":
                        return (0, r.jsx)(
                            i4,
                            {
                                role: "assistant",
                                children: (0, r.jsx)(rD, { projectId: t, interrupted: !0, steps: n.steps }),
                            },
                            e.key,
                        );
                    case "legacyTodos":
                        return (0, r.jsx)(
                            i4,
                            {
                                role: "assistant",
                                children: (0, r.jsx)(rD, {
                                    projectId: t,
                                    steps: [],
                                    active: !1,
                                    checklistSuperseded: e.checklistSuperseded,
                                    todos: n.todos,
                                    provisionalTodo: n.provisionalTodo,
                                }),
                            },
                            e.key,
                        );
                    case "closing": {
                        let a =
                                null != h
                                    ? "assistant" !== n.role || null == n.sourceSha
                                        ? null
                                        : {
                                              sha: n.sourceSha,
                                              authorName: "",
                                              authorEmail: "",
                                              authoredAt: new Date(n.created_at).toISOString(),
                                              subject: n.content,
                                          }
                                    : null,
                            i = null != a && null != h ? () => i3(a, h) : void 0,
                            u = n.restoreProposal;
                        return (0, r.jsx)(
                            i4,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                onContextMenu:
                                    null != i
                                        ? (e) => {
                                              (0, F.jA)(e, (e) => (0, r.jsx)(i1, { ...e, onRestoreVersion: i }));
                                          }
                                        : void 0,
                                children: (0, r.jsx)(iQ, {
                                    groupStart: e.groupStart,
                                    buttons:
                                        null != i
                                            ? (0, r.jsx)(iU, {
                                                  groupStart: e.groupStart,
                                                  renderMenu: (e) =>
                                                      (0, r.jsx)(i1, { onClose: e, onSelect: e, onRestoreVersion: i }),
                                              })
                                            : void 0,
                                    content: e.content,
                                    createdAt: n.created_at,
                                    replyTo: (function (e, t) {
                                        if (null == t) return;
                                        let l = e.find((e) => e.id === t && "user" === e.role);
                                        if (null != l)
                                            return {
                                                id: l.id,
                                                content: l.content,
                                                ...(null != l.user_id ? { userId: l.user_id } : {}),
                                                createdAt: l.created_at,
                                            };
                                    })(l, n.in_reply_to),
                                    onJumpToReplied: null != n.in_reply_to ? () => b(n.in_reply_to) : void 0,
                                    accessories: (0, r.jsx)(rz, {
                                        projectId: t,
                                        steps: n.steps,
                                        content: "",
                                        proposal: n.proposal,
                                        planVersion: I.get(n.render_id),
                                        interrupted: !0 === n.interrupted,
                                        hoistedProse: !0,
                                        hoistedAttachmentsHost: e.attachmentsHost,
                                        sideReply: e.sideReply,
                                        sideReplyAcknowledges: n.acknowledges,
                                        active: e.active,
                                        ideas: e.active ? void 0 : n.ideas,
                                        pickedIdeaIds:
                                            null == n.ideas
                                                ? void 0
                                                : (function (e, t, l) {
                                                      let n = new Set();
                                                      for (let a = e.indexOf(t) + 1; a > 0 && a < e.length; a++) {
                                                          let t = e[a];
                                                          if ("user" === t.role)
                                                              for (let e of l)
                                                                  e.implementation_prompt.trim() === t.content.trim() &&
                                                                      n.add(e.id);
                                                      }
                                                      return n;
                                                  })(l, n, n.ideas),
                                        attachments: n.attachments,
                                        secretRequest: e.active ? void 0 : n.secretRequest,
                                        secretRequestId: n.render_id,
                                        secretRequestAwaiting: n === A ? T : void 0,
                                        secretRequestStatus: _.get(n.render_id),
                                        settingsRequest: e.active || n.id === f ? void 0 : n.settingsRequest,
                                        publishCta: e.active ? null : n.publishCta,
                                        onPickIdea: s,
                                        onApprovePlan: n.render_id === E ? c : void 0,
                                        restoreProposal: u,
                                        onRestoreProposal:
                                            null != u && null != h && n === A
                                                ? () =>
                                                      i3(
                                                          {
                                                              sha: u.sha,
                                                              authorName: "",
                                                              authorEmail: "",
                                                              authoredAt: u.authored_at,
                                                              subject: u.subject,
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
                ? (0, r.jsx)(i4, {
                      role: "assistant",
                      continuation: !0,
                      children: (0, r.jsx)(iQ, {
                          groupStart: !1,
                          content: "",
                          accessories: (0, r.jsx)(y.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: ec.intl.string(ed.default.YR8A2v),
                          }),
                      }),
                  })
                : null,
            (0, r.jsx)("li", {
                role: "none",
                className: i2.q3,
                children: (0, r.jsx)(ih, { reminder: C, renderReminder: S }),
            }),
        ],
    });
}
function i4(e) {
    let { role: t, children: l, anchorId: n, highlighted: a = !1, continuation: i = !1, onContextMenu: s } = e;
    return (0, r.jsx)("li", {
        onContextMenu: s,
        "data-role": t,
        "data-conjure-message": n,
        className: u()(i2.xk, { [i2.Qo]: a, [i2.q3]: i }),
        children: l,
    });
}
let i7 = [ed.default["AX+5lk"], ed.default.VAU6A7, ed.default["1emysd"], ed.default.EXHX3L, ed.default.ChslmX];
function i6(e) {
    return i7.some((t) => ec.intl.string(t) === e);
}
function i8(e) {
    switch (e) {
        case "connecting":
            return ec.intl.string(ed.default["ECl+Dx"]);
        case "closed":
            return ec.intl.string(ed.default.mQZSp1);
        case "failed":
            return ec.intl.string(ed.default.xzJSZ6);
    }
}
var i9 = l(823376),
    se = l(187447);
function st(e) {
    let { activity: t, id: l } = e,
        { text: n, revealing: a } = iP(t?.text ?? "", { streaming: null != t && "end" !== t.phase }),
        s = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            s.current?.scrollToBottom();
        }, [n]),
        (0, r.jsx)("div", {
            id: l,
            role: "tooltip",
            className: se.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, r.jsx)(lD.Ch, {
                ref: s,
                className: se.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, r.jsx)("div", {
                    className: u()(rR.PT, se.bb),
                    "data-conjure-revealing": a ? "true" : void 0,
                    children: n0.A.parse(n, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var sl = l(53659);
function sn(e) {
    let {
            activity: t,
            compacting: l = !1,
            saving: n = !1,
            restoring: a = !1,
            recalling: s = !1,
            controlling: o = !1,
            spoken: d,
            onSpokenChange: c,
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
                ? ed.default["1jqaAc"]
                : a
                  ? ed.default.M4KI5F
                  : r
                    ? i7[0]
                    : n
                      ? ed.default.mKK6wB
                      : l
                        ? ed.default.xnCAaP
                        : s
                          ? ed.default.izrt52
                          : ed.default.L9EDub;
        })({ activity: t, compacting: l, saving: n, restoring: a, recalling: s, controlling: o }),
        p = ec.intl.string(x),
        v = x === i7["0"],
        [j, b] = i.useState(d ?? p);
    n && j !== p && b(p);
    let y = i.useRef(p);
    (i.useEffect(() => {
        y.current = p;
    }, [p]),
        i.useEffect(() => {
            c?.(j);
        }, [j, c]));
    let w = i.useRef(null),
        A = i.useRef(j);
    i.useEffect(() => {
        A.current = j;
    }, [j]);
    let N = i.useRef(v),
        C = i.useRef(0);
    (i.useEffect(() => {
        ((N.current = v), !v && i6(A.current) && b(y.current));
    }, [v]),
        i.useEffect(() => {
            let e = 0,
                t = 0;
            function l() {
                if (N.current) {
                    var e;
                    ((C.current = i6(A.current) ? C.current + 1 : 0),
                        b(((e = C.current), ec.intl.string(i7[e % i7.length]))));
                } else y.current !== A.current ? b(y.current) : w.current?.play();
            }
            function n() {
                (window.clearTimeout(e), window.clearInterval(t), (e = 0), (t = 0));
            }
            function a() {
                (n(),
                    (e = window.setTimeout(() => {
                        (l(), (t = window.setInterval(l, 2400)));
                    }, 1800)));
            }
            function r() {
                (w.current?.stop(), a());
            }
            return (
                ("u" < typeof document || document.hasFocus()) && a(),
                window.addEventListener("focus", r),
                window.addEventListener("blur", n),
                () => {
                    (n(), window.removeEventListener("focus", r), window.removeEventListener("blur", n));
                }
            );
        }, []));
    let S = null != t && "" !== t.text,
        E = t?.session ?? null,
        I = S && null != E && h === E,
        T = i.useCallback(() => {
            S && null != E && g((e) => (e === E ? null : E));
        }, [S, E]),
        M = i.useCallback(() => g(null), []);
    return (0, r.jsx)(et.Y, {
        targetElementRef: m,
        position: "top",
        align: "left",
        shouldShow: I,
        onRequestClose: M,
        renderPopout: () => (0, r.jsx)(st, { id: f, activity: t }),
        children: () =>
            (0, r.jsxs)(k.D, {
                innerRef: m,
                className: u()(sl.hF, S && sl.Xd),
                "aria-label": ec.intl.string(a ? ed.default.qqlUiW : v ? i7["0"] : ed.default["Uuj/gh"]),
                "aria-expanded": I,
                "aria-describedby": I ? f : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": ec.intl.string(x),
                onClick: T,
                children: [
                    (0, r.jsx)("span", {
                        className: sl.bl,
                        children: (0, r.jsx)(i9.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, r.jsx)("span", {
                        className: sl.xu,
                        "aria-hidden": !!o || !!v || void 0,
                        children: (0, r.jsx)(eR.o, {
                            ref: w,
                            text: j,
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            duration: 1e3,
                            delay: null,
                            className: sl.yE,
                        }),
                    }),
                ],
            }),
    });
}
let sa = { second: 1e3, minute: 6e4 };
function sr(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [l, n] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let l;
            if (null == e) return;
            let a = sa[t];
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
var si = l(719374);
function ss(e) {
    let { startedAt: t } = e,
        l = sr(t);
    return (0, r.jsx)(y.E, {
        tag: "span",
        variant: "text-xs/medium",
        color: "text-muted",
        "aria-hidden": !0,
        className: si.$,
        "data-conjure-turn-timer": !0,
        children: (0, n1.C7)(l),
    });
}
function su(e) {
    let { startedAt: t } = e,
        l = sr(t, "minute");
    return (0, r.jsx)(A.A, { role: "timer", children: (0, n1.Us)(l) });
}
var so = l(436804);
function sd(e) {
    return e.toLocaleString();
}
function sc(e) {
    let { label: t, usage: l, cached: n = !0 } = e;
    return (0, r.jsxs)("div", {
        className: so.Q$,
        children: [
            (0, r.jsxs)("div", {
                className: so.mf,
                children: [
                    (0, r.jsx)(y.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, r.jsxs)(y.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [sd((0, ee.aM)(l)), " tokens"],
                    }),
                ],
            }),
            (0, r.jsxs)(y.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    sd(l.input_tokens),
                    " in \xb7 ",
                    sd(l.output_tokens),
                    " out",
                    n
                        ? ` \xb7 ${sd(l.cache_creation_input_tokens)} cache write \xb7 ${sd(l.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function sm(e) {
    let { project: t } = e,
        l = (0, ee.wU)(t.compaction),
        n = (0, ee.wU)(t.classifier),
        a = (0, ee.wV)(t.orchestrator, t.codegen),
        i = (0, ee.wV)(a, l);
    return (0, r.jsxs)("div", {
        className: so.si,
        role: "dialog",
        "aria-label": ec.intl.string(ed.default.p5EGzq),
        children: [
            (0, r.jsx)("div", {
                className: so.Q$,
                children: (0, r.jsxs)("div", {
                    className: so.mf,
                    children: [
                        (0, r.jsxs)(y.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [sd((0, ee.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, r.jsxs)(y.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(sc, { label: ec.intl.string(ed.default["9Sj3SX"]), usage: a }),
            (0, r.jsx)(sc, { label: ec.intl.string(ed.default.ANCEo3), usage: l }),
            (0, r.jsx)(sc, { label: ec.intl.string(ed.default.ugL6D4), usage: n, cached: !1 }),
            (0, r.jsxs)("div", {
                className: so.mf,
                children: [
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: ec.intl.string(ed.default["8OUg09"]),
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
function sf(e) {
    let { project: t } = e,
        l = i.useRef(null);
    return (0, r.jsx)(et.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, r.jsx)(sm, { project: t }),
        children: (e) =>
            (0, r.jsx)(k.D, {
                innerRef: l,
                className: so.Y$,
                "aria-label": ec.intl.string(ed.default.Z96gxQ),
                ...e,
                children: (0, r.jsx)(ad.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var sh = l(997421);
function sg(e) {
    let t,
        {
            projectId: l,
            thinking: n,
            turnStartedAt: a,
            restoring: s = !1,
            recalling: u = !1,
            thinkingActivity: o,
            compacting: d,
            saving: c,
            projectUsage: m,
            connState: f,
        } = e,
        h = (0, tx.Zv)(l),
        [g, x] = i.useState(null),
        p = i.useCallback((e) => x(i6(e) || e === ec.intl.string(ed.default.mKK6wB) ? null : e), []),
        v =
            null == m
                ? null
                : ((t = (0, ee.a7)(m.cost_usd)),
                  {
                      text: ec.intl.formatToPlainString(ed.default.gMuw5d, { runes: t.toLocaleString() }),
                      aria: ec.intl.formatToPlainString(ed.default.Z4LvGa, { runes: t, turns: m.turns }),
                  }),
        j = n && null != a;
    return (0, r.jsxs)("div", {
        className: sh.jf,
        children: [
            (0, r.jsxs)("div", {
                className: sh.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    n || s || u || h || !0 === c
                        ? (0, r.jsx)(sn, {
                              activity: o,
                              compacting: d,
                              saving: c,
                              restoring: s,
                              recalling: u,
                              controlling: h,
                              spoken: g,
                              onSpokenChange: p,
                          })
                        : null,
                    j ? (0, r.jsx)(ss, { startedAt: a }) : null,
                ],
            }),
            j ? (0, r.jsx)(su, { startedAt: a }) : null,
            null == m || null == v
                ? null
                : (0, r.jsxs)("span", {
                      className: sh.BP,
                      children: [
                          (0, r.jsx)(y.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": v.aria,
                              children: v.text,
                          }),
                          (0, r.jsx)(sf, { project: m }),
                      ],
                  }),
            "open" === f
                ? null
                : (0, r.jsx)(y.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === f ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": ec.intl.formatToPlainString(ed.default["tCo+ZM"], { status: i8(f) }),
                      "data-conjure-conn": !0,
                      "data-state": f,
                      className: sh.XF,
                      children: i8(f),
                  }),
        ],
    });
}
var sx = l(698638),
    sp = l(608711);
let sv = [ec.intl.string(ed.default["9w+Chc"]), ec.intl.string(ed.default.WAvmdq), ec.intl.string(ed.default.SKsrzl)];
function sj(e) {
    var t;
    let { projectId: l, restoreState: n, onRestoreVersion: a, onImportProject: s } = e,
        u = (0, m.bG)([tH.Ay], () => tH.Ay.getMessages(l), [l]),
        o = (0, m.bG)([er.Ay], () => er.Ay.getConnState(l), [l]),
        d = (0, m.bG)([er.Ay], () => er.Ay.isChatStopped(l), [l]),
        c = (0, m.bG)([tH.Ay], () => tH.Ay.getProjectUsage(l), [l]),
        f = (0, m.bG)([tH.Ay], () => tH.Ay.getThinkingActivity(l), [l]),
        h = (0, m.bG)([tH.Ay], () => tH.Ay.isCompacting(l), [l]),
        g = (0, m.bG)([tH.Ay], () => tH.Ay.isSaving(l), [l]),
        x = (0, m.bG)([er.Ay], () => er.Ay.getModelSettings(l), [l]),
        p = i.useRef(null),
        v = i.useRef(null),
        j = i.useRef(null),
        b = i.useRef(!0),
        [k, w] = i.useState(!0),
        A = i.useRef(null);
    i.useLayoutEffect(() => {
        let e = v.current?.getScrollerNode();
        if (null == e) return;
        let t = A.current;
        b.current
            ? v.current?.scrollToBottom()
            : t?.row.isConnected === !0 && (e.scrollTop += t.row.getBoundingClientRect().top + e.scrollTop - t.top);
        let n = j.current?.firstElementChild;
        ((A.current = null != n ? { row: n, top: n.getBoundingClientRect().top + e.scrollTop } : null),
            e.scrollTop < 600 && (0, er.P6)(l));
    }, [u, l]);
    let N = i.useCallback(() => {
            let e = p.current;
            if (null == e) return;
            let t = e.querySelector('[data-conjure-turn-status="true"][data-live="true"]'),
                l = e.querySelectorAll('[data-conjure-turn-status="true"]'),
                n = t ?? l[l.length - 1];
            if (null == n) return;
            let a = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
            n.scrollIntoView({ block: "center", behavior: a ? "auto" : "smooth" });
        }, []),
        S = i.useCallback(() => {
            let e = v.current;
            if (null == e) return;
            let t = e.getDistanceFromBottom();
            b.current = t < 32;
            let n = t > 1;
            w((e) => (!n === e ? e : !n));
            let a = e.getScrollerNode();
            null != a && a.scrollTop < 600 && (0, er.P6)(l);
        }, [l]);
    (i.useLayoutEffect(() => {
        let e = p.current,
            t = j.current;
        if (null == e) return;
        let l = v.current?.getScrollerNode(),
            n = e.getBoundingClientRect().width,
            a = t?.getBoundingClientRect().height,
            r = l?.getBoundingClientRect().height,
            i = null;
        function s() {
            b.current &&
                (null != i && cancelAnimationFrame(i), (i = requestAnimationFrame(() => v.current?.scrollToBottom())));
        }
        let u = new ResizeObserver((t) => {
            for (let i of t)
                if (i.target === e) {
                    let e = i.contentRect.width;
                    if (e === n) continue;
                    ((n = e), s());
                } else if (i.target === l) {
                    let e = i.contentRect.height;
                    if (e === r) continue;
                    ((r = e), s());
                } else {
                    let e = i.contentRect.height;
                    if (e === a) continue;
                    ((a = e), s());
                }
        });
        return (
            u.observe(e),
            null != l && u.observe(l),
            null != t && u.observe(t),
            () => {
                (u.disconnect(), null != i && cancelAnimationFrame(i));
            }
        );
    }, []),
        i.useEffect(() => {
            (0, er.Hc)(l);
        }, [l]),
        (0, ek.E1)(l));
    let E = e9(l),
        I = i.useCallback(
            (e, t) => {
                (0, er.dv)(l, e, t);
            },
            [l],
        ),
        T = i.useCallback(
            (e, t) => {
                0 === E.annotations.length
                    ? I(e, t)
                    : (I(
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
                          })({ annotations: E.annotations, metaComment: e, context: E.context }),
                          t,
                      ),
                      e4(l));
            },
            [E, I, l],
        ),
        M = i.useCallback(() => (0, er.fu)(l), [l]),
        _ = i.useCallback((e) => nC(l, e.implementation_prompt), [l]),
        [P, R] = (function (e) {
            let [t, l] = i.useState(() => nQ(e)),
                [n, a] = i.useState(e),
                r = n !== e,
                s = r ? nQ(e) : t;
            return (r && (a(e), l(s)), [s, l]);
        })(l),
        L = i.useCallback(() => I(ec.intl.string(ed.default["t5CN3+"])), [I]),
        D = i.useCallback((e, t, n) => nC(l, e, { clarificationAnswers: t, attachments: n }), [l]),
        z = i.useCallback((e) => (0, er.XZ)(l, e), [l]),
        F = i.useCallback((e) => (0, er.vX)(l, e), [l]),
        O = i.useCallback((e) => rQ(l, "chat", Array.from(e), F), [l, F]),
        U = i.useCallback(() => nC(l, ec.intl.string(ed.default.Zc7gML)), [l]),
        G = n?.status === "restoring",
        $ = "open" === o && !d && !G,
        q = u[u.length - 1],
        B = null != q && "assistant" === q.role && null != q.proposal,
        [H, V] = i.useState(null),
        K = q?.clarification != null && q.clarification.id !== H ? q.clarification : null,
        W = i.useCallback(() => {
            null != K && V(K.id);
        }, [K]),
        J = (0, m.bG)([er.Ay], () => er.Ay.getSettings(l), [l]),
        [X, Y] = i.useState(null),
        Q =
            null != q &&
            "assistant" === q.role &&
            null != q.settingsRequest &&
            (0, tH.BL)(q) &&
            q.id !== X &&
            ((t = q.settingsRequest),
            null != J &&
                (t.keys ?? []).some((e) => {
                    let t = J.schema.find((t) => t.key === e);
                    if (null == t) return !1;
                    if ("secret" === t.type) return J.secrets.find((t) => t.name === e)?.set !== !0;
                    let l = J.values[e];
                    return null == l || "" === l;
                }))
                ? q
                : null,
        Z = Q?.settingsRequest ?? null,
        ee = i.useCallback(() => {
            null != Q && Y(Q.id);
        }, [Q]),
        et = null != Z,
        el = (function (e) {
            let { historyLoaded: t, historyUnavailable: l, connState: n } = e;
            return l ? "unavailable" : t ? "greeting" : "failed" === n || "closed" === n ? "unavailable" : "loading";
        })({
            historyLoaded: (0, m.bG)([tH.Ay], () => tH.Ay.hasLoadedHistory(l), [l]),
            historyUnavailable: (0, m.bG)([tH.Ay], () => tH.Ay.isHistoryUnavailable(l), [l]),
            connState: o,
        }),
        en = "loading" === el && 0 === u.length,
        ea = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < l.length; t++) e = (31 * e + l.charCodeAt(t)) % 0x7fffffff;
            return sv[e % sv.length];
        }, [l]),
        ei = B ? ec.intl.string(ed.default.Zc7gML) : "greeting" === el && 0 === u.length ? ea : null,
        es = i.useMemo(() => {
            for (let e = u.length - 1; e >= 0; e--) {
                let t = u[e];
                if ("assistant" === t.role && !(0, tH.BL)(t)) return t;
            }
        }, [u]),
        eu = null != es,
        eo =
            null != es
                ? (function (e) {
                      let t = e.turn_id ?? e.steps.find((e) => null != e.turn_id)?.turn_id;
                      if (null != t && /^\d+$/.test(t)) {
                          let e = nq.default.extractTimestamp(t);
                          if (Number.isFinite(e) && e > 0) return e;
                      }
                      return e.created_at;
                  })(es)
                : void 0,
        em = B && $ ? U : void 0,
        ef = i.useCallback(() => nC(l, ec.intl.string(ed.default.EMgIuY)), [l]),
        [eh, eg] = i.useState(null),
        [ex, ep] = i.useState(eu);
    (ex !== eu && (ep(eu), eu || eg(null)),
        i.useEffect(() => {
            if (!eu) return;
            let e = v.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let l = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? eg(null)
                        : eg(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (l.observe(t), () => l.disconnect());
        }, [eu, es?.steps]));
    let ev = i.useMemo(() => (null != es ? (0, lU.b)(es.steps) : ""), [es]),
        ej = i.useMemo(() => (null != es ? ((0, lF.lt)(es.steps) ?? es.todos) : void 0), [es]),
        eb = es?.provisionalTodo,
        ey = null != es && lO(es),
        ew = i.useMemo(() => {
            var e;
            return null != es ? ((e = es.steps), rL((0, lF.GO)(e, { turnActive: !0 }).tasks)) : void 0;
        }, [es]);
    return (0, r.jsxs)("section", {
        ref: p,
        "data-conjure-chat": !0,
        className: sp.TE,
        children: [
            $
                ? (0, r.jsx)(lz.A, {
                      title: ec.intl.string(ed.default.gy7byi),
                      description: ec.intl.string(ed.default["dkv/WO"]),
                      icons: sx.ir,
                      onDrop: O,
                  })
                : null,
            (0, r.jsx)(l4, {
                onJumpToActivity: N,
                line: ev,
                placement: eu && "top" === eh ? "top" : null,
                todos: ej,
                todosLive: ey,
                provisionalTodo: eb,
                agents: ew,
            }),
            (0, r.jsxs)("div", {
                className: sp.JX,
                children: [
                    (0, r.jsx)(lD.Ch, {
                        ref: v,
                        onScroll: S,
                        scrollbarGutter: en ? "both-edges" : "stable",
                        className: [sp.N$, k ? null : sp.hB, et ? sp.J9 : null].filter(Boolean).join(" "),
                        children: (0, r.jsx)(i5, {
                            ref: j,
                            projectId: l,
                            messages: u,
                            emptyState: el,
                            floatingSettingsMessageId: Q?.id,
                            onPickIdea: $ ? _ : void 0,
                            onAskForIdeas: $ ? L : void 0,
                            draftHasText: P,
                            onApprovePlan: $ ? ef : void 0,
                            onRestoreVersion: G || eu ? void 0 : a,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: sp.NJ,
                        children: (0, r.jsx)(sg, {
                            projectId: l,
                            thinking: eu,
                            turnStartedAt: eo,
                            restoring: G,
                            recalling: en,
                            thinkingActivity: f,
                            compacting: h,
                            saving: g,
                            projectUsage: c,
                            connState: o,
                        }),
                    }),
                    null == K
                        ? null
                        : (0, r.jsx)("div", {
                              className: et ? `${sp.B5} ${sp.J9}` : sp.B5,
                              children: (0, r.jsx)(
                                  nO,
                                  { projectId: l, clarification: K, onSubmit: $ ? D : void 0, onDismiss: W },
                                  K.id,
                              ),
                          }),
                    null == Z
                        ? null
                        : (0, r.jsx)("div", {
                              className: sp.B5,
                              children: (0, r.jsx)(n$, { projectId: l, request: Z, onDismiss: ee }, Q?.id),
                          }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: sp.Jx,
                children: [
                    (0, r.jsx)(l4, {
                        onJumpToActivity: N,
                        line: ev,
                        placement: eu && "bottom" === eh ? "bottom" : null,
                        todos: ej,
                        todosLive: ey,
                        provisionalTodo: eb,
                        agents: ew,
                    }),
                    0 === E.annotations.length
                        ? null
                        : (0, r.jsxs)("div", {
                              className: sp.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, r.jsx)(y.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: ec.intl.formatToPlainString(ed.default["7b49dS"], {
                                          count: E.annotations.length,
                                      }),
                                  }),
                                  (0, r.jsx)(y.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: ec.intl.string(ed.default["5zG+CR"]),
                                  }),
                                  (0, r.jsx)(C.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: ec.intl.string(ed.default["/zOv9+"]),
                                      onClick: () => e4(l),
                                  }),
                              ],
                          }),
                    (0, r.jsx)(r7, {
                        projectId: l,
                        canSend: $,
                        stopped: d,
                        running: eu,
                        restoring: G,
                        onSend: T,
                        hasPendingContext: E.annotations.length > 0,
                        onInterrupt: $ ? M : void 0,
                        onUploadFile: F,
                        onImport: s,
                        onApprove: em,
                        suggestion: ei,
                        questionOpen: null != K || null != Z,
                        modelSettings: x,
                        onModelSettingsChange: z,
                        onDraftHasTextChange: R,
                    }),
                ],
            }),
        ],
    });
}
var sb = l(624479),
    sy = l(761508),
    sk = l(540999);
let sw = [],
    sA = new Map(),
    sN = new Map(),
    sC = new Map(),
    sS = new Map(),
    sE = new Map(),
    sI = new Map(),
    sT = new Map();
class sM extends m.Ay.Store {
    getStatus(e) {
        return sA.get(e) ?? null;
    }
    getFetchState(e) {
        return sN.get(e) ?? "idle";
    }
    getLastCompaction(e) {
        return sS.get(e) ?? null;
    }
    getLastTurnUsage(e) {
        return sI.get(e) ?? null;
    }
    getLastCompactionDecline(e) {
        return sE.get(e) ?? null;
    }
    getModelCalls(e) {
        return sT.get(e) ?? sw;
    }
    getForceCompactionState(e) {
        return sC.get(e) ?? "idle";
    }
}
let s_ = new sM(nc.h, {
    LOGOUT: function () {
        if (
            0 === sA.size &&
            0 === sN.size &&
            0 === sC.size &&
            0 === sS.size &&
            0 === sE.size &&
            0 === sI.size &&
            0 === sT.size
        )
            return !1;
        (sA.clear(), sN.clear(), sC.clear(), sS.clear(), sE.clear(), sI.clear(), sT.clear());
    },
    CONJURE_DEBUG_STATUS_REQUESTED: function (e) {
        let { projectId: t } = e;
        sN.set(t, "loading");
    },
    CONJURE_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: l } = e;
        if ("open" === l) return !1;
        let n = "pending" === sC.get(t);
        n &&
            sC.set(t, {
                outcome: "failed",
                reason: "Connection lost before the worker answered",
                observedAt: new Date().toISOString(),
            });
        let a = "loading" === sN.get(t);
        if ((a && sN.set(t, "failed"), !n && !a)) return !1;
    },
    CONJURE_DEBUG_STATUS_SET: function (e) {
        let { projectId: t, status: l, failed: n } = e;
        n || null == l ? sN.set(t, "failed") : (sA.set(t, l), sN.set(t, "loaded"));
    },
    CONJURE_DEBUG_COMPACTION_REPORT: function (e) {
        sS.set(e.projectId, {
            tokensBefore: e.tokensBefore,
            tokensAfter: e.tokensAfter,
            retainedMessages: e.retainedMessages,
            promptCeiling: e.promptCeiling,
            observedAt: e.observedAt,
        });
    },
    CONJURE_DEBUG_COMPACTION_DECLINED: function (e) {
        sE.set(e.projectId, {
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
        sC.set(t, "pending");
    },
    CONJURE_DEBUG_FORCE_COMPACTION_RESULT: function (e) {
        sC.set(e.projectId, {
            outcome: e.outcome,
            reason: e.reason,
            ...(!0 === e.pendingTurn ? { pendingTurn: !0 } : {}),
            observedAt: e.observedAt,
        });
    },
    CONJURE_DEBUG_MODEL_CALL: function (e) {
        let t = sT.get(e.projectId);
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
        sT.set(e.projectId, n.length > 200 ? n.slice(-200) : n);
    },
    CONJURE_CHAT_USAGE_SET: function (e) {
        let { projectId: t, turn: l } = e;
        if (0 === (0, ee.aM)(l.total)) return !1;
        sI.set(t, l);
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        (sA.delete(t), sN.delete(t), sC.delete(t), sS.delete(t), sE.delete(t), sI.delete(t), sT.delete(t));
    },
});
function sP(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let l = t / 1024;
    if (l < 1024) return `${l >= 100 ? Math.round(l) : l.toFixed(1)} MB`;
    let n = l / 1024;
    return `${n >= 100 ? Math.round(n) : n.toFixed(1)} GB`;
}
function sR(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function sL(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function sD(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = String(t.getHours()).padStart(2, "0"),
        n = String(t.getMinutes()).padStart(2, "0"),
        a = String(t.getSeconds()).padStart(2, "0");
    return `${l}:${n}:${a}`;
}
function sz(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = new Date();
    return t.getFullYear() === l.getFullYear() && t.getMonth() === l.getMonth() && t.getDate() === l.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function sF(e) {
    let t = e.split("/").filter((e) => "" !== e),
        l = t[t.length - 1] ?? e;
    return l.length > 12 ? l.slice(0, 12) : l;
}
function sO(e) {
    return ec.intl.string("preview" === e ? ed.default["2yLYlG"] : ed.default.eiAi57);
}
let sU = ["all", "preview", "stable", "web"],
    sG = new Set(["error", "aborted", "length"]);
function s$(e) {
    switch (e.reason) {
        case "local":
            return ec.intl.string(ed.default.mUeKML);
        case "unconfigured":
            return ec.intl.string(ed.default.bGefb5);
        case "unauthorized":
            return ec.intl.string(ed.default.KLx6Bb);
        default:
            return null != e.detail
                ? ec.intl.formatToPlainString(ed.default.t09Q6q, { detail: e.detail })
                : ec.intl.string(ed.default["t+tG59"]);
    }
}
function sq(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : ec.intl.formatToPlainString(ed.default["XO/bN4"], {
              p50: sP(e.memory_p50_bytes ?? 0),
              p999: sP(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let sB = {
    db: () => ed.default["7l+DFG"],
    db_preview: () => ed.default.FAuffi,
    runtime: () => ed.default["Gkl+ab"],
    runtime_preview: () => ed.default.ynpJzv,
    bot: () => ed.default["5/i0cj"],
    bot_preview: () => ed.default.m2jsnw,
};
var sH = l(911608),
    sV = l(177427);
function sK(e) {
    let { generatedAt: t, fetchState: l, onRefresh: n } = e;
    return (0, r.jsxs)("div", {
        className: sV.KE,
        children: [
            (0, r.jsx)("div", {
                className: sV.IQ,
                children:
                    "loading" === l
                        ? (0, r.jsx)(N.y, { type: N.t.PULSING_ELLIPSIS })
                        : "failed" === l
                          ? (0, r.jsx)(y.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: ec.intl.string(ed.default.ZVByPX),
                            })
                          : null != t
                            ? (0, r.jsx)(y.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: ec.intl.formatToPlainString(ed.default.INVO50, { time: sz(t) }),
                              })
                            : null,
            }),
            (0, r.jsx)(C.$, { variant: "secondary", size: "sm", text: ec.intl.string(ed.default.oKEgiu), onClick: n }),
        ],
    });
}
function sW(e) {
    let { title: t, children: l } = e;
    return (0, r.jsxs)("section", {
        className: sV.uW,
        "aria-label": t,
        children: [
            (0, r.jsx)(y.E, { variant: "text-xs/semibold", color: "text-muted", className: sV.Gf, children: t }),
            l,
        ],
    });
}
function sJ(e) {
    let { label: t, value: l, hint: n, critical: a = !1 } = e;
    return (0, r.jsxs)("div", {
        className: sV.N8,
        children: [
            (0, r.jsxs)("div", {
                className: sV.x7,
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
function sX(e) {
    let { label: t, used: l, max: n, formatValue: a } = e,
        i = n > 0 ? Math.min(1, Math.max(0, l / n)) : 0,
        s = i >= 0.9;
    return (0, r.jsxs)("div", {
        className: sV.N8,
        children: [
            (0, r.jsxs)("div", {
                className: sV.x7,
                children: [
                    (0, r.jsx)(y.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${a(l)} / ${a(n)}`,
                    }),
                ],
            }),
            (0, r.jsx)(sH.z, {
                value: 100 * i,
                valueLabel: `${a(l)} of ${a(n)}`,
                "aria-label": t,
                className: s ? sV.dh : void 0,
            }),
        ],
    });
}
function sY(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, r.jsx)(sJ, {
            label: ec.intl.string(ed.default.SXP7pD),
            value: ec.intl.string(ed.default.E5hKVi),
            hint: s$(t),
        });
    let l = t.objects?.find((e) => "agent" === e.role);
    if (null == l)
        return (0, r.jsx)(sJ, {
            label: ec.intl.string(ed.default.SXP7pD),
            value: "\u2014",
            hint: ec.intl.string(ed.default.AGvoMJ),
        });
    let n = sq(l);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(sJ, { label: ec.intl.string(ed.default["H/X+FI"]), value: sR(l.cpu_ms) }),
            null != n && (0, r.jsx)(sJ, { label: ec.intl.string(ed.default.lmFmMO), value: n }),
        ],
    });
}
function sQ(e) {
    let { analytics: t } = e,
        l = ec.intl.string(ed.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, r.jsx)(sW, {
            title: l,
            children: (0, r.jsx)(y.E, { variant: "text-sm/normal", color: "text-muted", children: s$(t) }),
        });
    let n = (t.objects ?? [])
        .map((e) => {
            var t;
            let l;
            return {
                object: e,
                label: null != (l = "agent" !== (t = e.role) ? sB[t] : null) ? ec.intl.string(l()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, r.jsx)(sW, {
        title: l,
        children:
            0 === n.length
                ? (0, r.jsx)(y.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: ec.intl.string(ed.default.AGvoMJ),
                  })
                : n.map((e) => {
                      let { object: t, label: l } = e;
                      return (0, r.jsx)(
                          sJ,
                          {
                              label: l,
                              value: ec.intl.formatToPlainString(ed.default["w/2voO"], { cpu: sR(t.cpu_ms) }),
                              hint: sq(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var sZ = l(400154);
let s0 = [];
function s1(e) {
    let t,
        { call: l } = e,
        { text: n, bad: a } =
            ((t = null != l.stopReason && sG.has(l.stopReason)),
            {
                text: [
                    null != l.durationMs ? sR(l.durationMs) : null,
                    `${sL(l.inputTokens + l.cacheReadTokens + l.cacheWriteTokens)} \u{2192} ${sL(l.outputTokens)}`,
                    t ? l.stopReason : null,
                ]
                    .filter((e) => null != e)
                    .join(" \xb7 "),
                bad: t,
            });
    return (0, r.jsxs)("div", {
        className: sZ.p5,
        children: [
            (0, r.jsx)(y.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: sZ.Q5,
                children: sD(l.observedAt),
            }),
            (0, r.jsxs)(y.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-default",
                className: sZ.qN,
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
function s2(e, t) {
    return (0, r.jsx)(sJ, {
        label: e,
        value: ec.intl.formatToPlainString(ed.default.yHJxuP, { count: sL((0, ee.aM)(t)) }),
        hint: `${sL(t.input_tokens)} in \xb7 ${sL(t.output_tokens)} out \xb7 ${sL(t.cache_read_input_tokens)} cache read`,
    });
}
function s3(e) {
    let { projectId: t, status: l, fetchState: n, onRefresh: a, traceVisible: s = !1 } = e,
        u = (0, m.bG)([s_], () => s_.getLastTurnUsage(t), [t]),
        o = (0, m.bG)([s_], () => s_.getLastCompaction(t), [t]),
        d = (0, m.bG)([s_], () => s_.getLastCompactionDecline(t), [t]),
        c = (0, m.bG)([s_], () => s_.getForceCompactionState(t), [t]),
        f = i.useCallback(() => (0, er.Lj)(t), [t]),
        h = i.useCallback(() => (0, er.Lj)(t, !0), [t]),
        g = (0, m.bG)([s_], () => (s ? s0 : s_.getModelCalls(t)), [t, s]),
        x = l?.agent?.lifetime ?? null,
        p = l?.agent?.limits ?? null,
        v = l?.agent?.session ?? null,
        j = o?.promptCeiling ?? p?.context_window_tokens ?? null;
    return (0, r.jsxs)("div", {
        className: sZ.Mf,
        children: [
            (0, r.jsx)(sK, { generatedAt: l?.generated_at ?? null, fetchState: n, onRefresh: a }),
            (0, r.jsx)(sW, {
                title: ec.intl.string(ed.default.JghNal),
                children:
                    null == x
                        ? (0, r.jsx)(y.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: ec.intl.string(ed.default.s0U5Fv),
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(sJ, {
                                      label: ec.intl.string(ed.default["9nqym2"]),
                                      value: sL((0, ee.a7)(x.cost_usd)),
                                      hint: ec.intl.formatToPlainString(ed.default.NCdUIh, { count: sL(x.turns) }),
                                  }),
                                  s2(ec.intl.string(ed.default.xtxP0e), x.orchestrator),
                                  s2(ec.intl.string(ed.default["9Sj3SX"]), x.codegen),
                                  s2(ec.intl.string(ed.default.ANCEo3), (0, ee.wU)(x.compaction)),
                                  l?.agent?.outcomes != null &&
                                      Object.keys(l.agent.outcomes).length > 0 &&
                                      (0, r.jsx)(sJ, {
                                          label: ec.intl.string(ed.default.SQHm7C),
                                          value: Object.entries(l.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, l] = e,
                                                      [, n] = t;
                                                  return n - l;
                                              })
                                              .map((e) => {
                                                  let [t, l] = e;
                                                  return `${sL(l)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, r.jsx)(sW, {
                title: ec.intl.string(ed.default.dZHPE5),
                children:
                    null == u
                        ? (0, r.jsx)(y.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: ec.intl.string(ed.default.DfVjal),
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  s2(ec.intl.string(ed.default["7X3i9d"]), u.total),
                                  (0, r.jsx)(sJ, {
                                      label: ec.intl.string(ed.default["8OUg09"]),
                                      value: `${Math.round((u.cache_hit_rate ?? (0, ee.CA)(u.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, r.jsxs)(sW, {
                title: ec.intl.string(ed.default.NbRk9a),
                children: [
                    null != o && null != j
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(sX, {
                                      label: ec.intl.string(ed.default.Kw5wiQ),
                                      used: o.tokensAfter,
                                      max: j,
                                      formatValue: sL,
                                  }),
                                  (0, r.jsx)(sJ, {
                                      label: ec.intl.string(ed.default.mRbSns),
                                      value: `${sL(o.tokensBefore)} \u{2192} ${sL(o.tokensAfter)}`,
                                      hint: ec.intl.formatToPlainString(ed.default.Vq3skS, {
                                          count: sL(o.retainedMessages),
                                          time: sz(o.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, r.jsx)(y.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != j
                                      ? ec.intl.formatToPlainString(ed.default.GMLCNv, { ceiling: sL(j) })
                                      : ec.intl.string(ed.default.s0U5Fv),
                          }),
                    null != d &&
                        (0, r.jsx)(sJ, {
                            label: ec.intl.string(ed.default["4BX5KK"]),
                            value: `${sL(d.projected)} / ${sL(d.threshold)}`,
                            critical: !0,
                            hint: ec.intl.formatToPlainString(ed.default["6ngCax"], { time: sz(d.observedAt) }),
                        }),
                    (0, r.jsxs)("div", {
                        className: sZ.Lj,
                        children: [
                            (0, r.jsx)(C.$, {
                                variant: "secondary",
                                size: "sm",
                                text: ec.intl.string(ed.default["1EiJeb"]),
                                disabled: "pending" === c,
                                onClick: f,
                            }),
                            (0, r.jsx)(y.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof c && "compacted" !== c.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return ec.intl.string(ed.default.wox6Ev);
                                    if ("pending" === e) return ec.intl.string(ed.default.OcPHQ1);
                                    let t = sz(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return ec.intl.formatToPlainString(ed.default.BhRjZZ, { time: t });
                                    let l =
                                        "declined" === e.outcome
                                            ? ed.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? ed.default.YZb4hK
                                              : ed.default.ZoUSVK;
                                    return ec.intl.formatToPlainString(l, {
                                        reason: e.reason ?? "no reason given",
                                        time: t,
                                    });
                                })(c),
                            }),
                            "object" == typeof c &&
                                !0 === c.pendingTurn &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(C.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: ec.intl.string(ed.default.ZxG2AI),
                                            onClick: h,
                                        }),
                                        (0, r.jsx)(y.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: ec.intl.string(ed.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            !s &&
                (0, r.jsx)(sW, {
                    title: ec.intl.string(ed.default.TkTRdW),
                    children:
                        0 === g.length
                            ? (0, r.jsx)(y.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: ec.intl.string(ed.default["r3/FhI"]),
                              })
                            : (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      g
                                          .slice(-30)
                                          .reverse()
                                          .map((e) => (0, r.jsx)(s1, { call: e }, e.id)),
                                      g.length > 30 &&
                                          (0, r.jsx)(y.E, {
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              children: ec.intl.formatToPlainString(ed.default["uZ9P/O"], {
                                                  shown: 30,
                                                  total: g.length,
                                              }),
                                          }),
                                  ],
                              }),
                }),
            (null != v || l?.analytics != null) &&
                (0, r.jsxs)(sW, {
                    title: ec.intl.string(ed.default.EsSzCS),
                    children: [
                        null != v &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(sJ, {
                                        label: ec.intl.string(ed.default.CLXHAs),
                                        value: sz(v.instance_since),
                                        hint: ec.intl.string(ed.default.UCwUEX),
                                    }),
                                    (0, r.jsx)(sJ, {
                                        label: ec.intl.string(ed.default["8V8e1Z"]),
                                        value: sL(v.sockets),
                                    }),
                                    (0, r.jsx)(sJ, {
                                        label: ec.intl.string(ed.default["4pBzYW"]),
                                        value: v.turn_inflight
                                            ? ec.intl.string(ed.default.Wv025I)
                                            : ec.intl.string(ed.default["7/lsFY"]),
                                    }),
                                    v.queued_messages > 0 &&
                                        (0, r.jsx)(sJ, {
                                            label: ec.intl.string(ed.default["3oUYnv"]),
                                            value: sL(v.queued_messages),
                                        }),
                                ],
                            }),
                        l?.analytics != null && (0, r.jsx)(sY, { analytics: l.analytics }),
                    ],
                }),
            null != p &&
                (0, r.jsxs)(sW, {
                    title: ec.intl.string(ed.default["LEIhp/"]),
                    children: [
                        (0, r.jsx)(sJ, {
                            label: ec.intl.string(ed.default.IlDBN3),
                            value: sL(p.max_subagent_iterations),
                        }),
                        (0, r.jsx)(sJ, {
                            label: ec.intl.string(ed.default["ZdzKR+"]),
                            value: ec.intl.formatToPlainString(ed.default.yHJxuP, {
                                count: sL(p.context_window_tokens),
                            }),
                        }),
                        (0, r.jsx)(sJ, {
                            label: ec.intl.string(ed.default.cIhN2W),
                            value: ec.intl.formatToPlainString(ed.default.yHJxuP, {
                                count: sL(p.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, r.jsx)(sJ, {
                            label: ec.intl.string(ed.default["+fOn/q"]),
                            value: sL(p.max_user_message_chars),
                        }),
                        (0, r.jsx)(sJ, { label: ec.intl.string(ed.default.kIHga0), value: sL(p.max_build_attempts) }),
                        (0, r.jsx)(sJ, { label: ec.intl.string(ed.default.Iw03yW), value: sL(p.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var s5 = l(237528),
    s4 = l(683438),
    s7 = l(531893);
function s6(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, r.jsx)("div", {
              className: s7.ut,
              children: (0, r.jsx)(y.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: ec.intl.string(ed.default.h1SE6R),
              }),
          });
}
function s8(e) {
    let { state: t, emptyTitle: l, emptyBody: n } = e;
    return "failed" === t.status
        ? (0, r.jsxs)("div", {
              className: s7.qf,
              children: [
                  (0, r.jsx)(y.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: ec.intl.string(ed.default.h1SE6R),
                  }),
                  (0, r.jsx)(y.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: ec.intl.string(ed.default["8SErdg"]),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: s7.qf,
              children: [
                  (0, r.jsx)(y.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                  (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-muted", children: n }),
              ],
          });
}
function s9(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, r.jsx)("div", {
              className: s7.ps,
              children: (0, r.jsx)(y.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: ec.intl.string(ed.default.V7Ri8H),
              }),
          })
        : null;
}
var ue = l(109079);
let ut = i.memo(function (e) {
    var t;
    let { entry: l, showSource: n } = e,
        [a, s] = i.useState(!1),
        u = i.useId(),
        o = i.useMemo(
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
        d = "error" === l.level ? "text-feedback-critical" : "text-default";
    return (0, r.jsxs)("div", {
        className: ue.vK,
        children: [
            (0, r.jsx)(y.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: ue.Mt,
                selectable: !0,
                children: sD(l.ts),
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
                className: ue.dm,
                children: l.level,
            }),
            (0, r.jsxs)("div", {
                className: ue.t4,
                children: [
                    n &&
                        null != l.source &&
                        (0, r.jsx)("span", { className: ue.Cq, children: (0, r.jsx)(s5.v, { text: l.source }) }),
                    null != l.kind &&
                        (0, r.jsx)("span", {
                            className: ue.Cq,
                            title: l.build ?? void 0,
                            children: (0, r.jsx)(s5.v, {
                                text: ec.intl.string(ed.default.TrC9c8),
                                variant: "redLight",
                            }),
                        }),
                    null != o
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  "" !== o.prefix &&
                                      (0, r.jsxs)(y.E, {
                                          tag: "span",
                                          variant: "text-xs/normal",
                                          color: d,
                                          selectable: !0,
                                          children: [o.prefix, " "],
                                      }),
                                  (0, r.jsxs)(k.D, {
                                      className: ue.Pq,
                                      "aria-expanded": a,
                                      "aria-controls": u,
                                      "aria-label": ec.intl.string(ed.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          a
                                              ? (0, r.jsx)(lB.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, r.jsx)(tr._, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, r.jsxs)(y.E, {
                                              tag: "span",
                                              variant: "text-xs/medium",
                                              color: "none",
                                              children: [
                                                  o.marker,
                                                  " ",
                                                  ec.intl.formatToPlainString(
                                                      "[\u2026]" === o.marker
                                                          ? ed.default.kUhyUv
                                                          : ed.default["N+fphl"],
                                                      { count: o.size },
                                                  ),
                                              ],
                                          }),
                                      ],
                                  }),
                                  a &&
                                      (0, r.jsx)(y.E, {
                                          tag: "div",
                                          variant: "text-xs/normal",
                                          color: d,
                                          className: ue.dF,
                                          selectable: !0,
                                          id: u,
                                          children: o.pretty,
                                      }),
                              ],
                          })
                        : (0, r.jsx)(y.E, {
                              tag: "span",
                              variant: "text-xs/normal",
                              color: d,
                              selectable: !0,
                              children: l.message,
                          }),
                ],
            }),
        ],
    });
});
function ul(e) {
    let { projectId: t } = e,
        l = (0, m.bG)([eS.Ay], () => eS.Ay.getLogs(t), [t]),
        n = (0, m.bG)([eS.Ay], () => eS.Ay.getHistoryState(t, "logs")),
        [a, s] = i.useState("all"),
        [u, o] = i.useState(""),
        d = i.useMemo(() => {
            let e = u.trim().toLowerCase();
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
        }, [l, a, u]),
        c = i.useRef(null),
        f = i.useRef(!0);
    i.useEffect(() => {
        f.current && c.current?.scrollToBottom();
    }, [d]);
    let h = i.useCallback(() => {
            let e = c.current;
            null != e && (f.current = 32 > e.getDistanceFromBottom());
        }, []),
        g = i.useMemo(
            () =>
                sU.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return sO(e);
                            case "web":
                                return ec.intl.string(ed.default.IVzfVV);
                            default:
                                return ec.intl.string(ed.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, r.jsxs)("div", {
        className: ue.$F,
        children: [
            (0, r.jsxs)("div", {
                className: ue.y4,
                children: [
                    (0, r.jsx)(tD.I, {
                        look: "pill",
                        "aria-label": ec.intl.string(ed.default.MhvyUU),
                        options: g,
                        value: a,
                        onChange: (e) => s(e.value),
                    }),
                    (0, r.jsx)("div", {
                        className: ue.KT,
                        children: (0, r.jsx)(s4.I, {
                            query: u,
                            onChange: o,
                            onClear: () => o(""),
                            size: "sm",
                            placeholder: ec.intl.string(ed.default["m2+37Y"]),
                            "aria-label": ec.intl.string(ed.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            l.length > 0 && (0, r.jsx)(s6, { state: n }),
            (0, r.jsxs)(lD.Ch, {
                ref: c,
                onScroll: h,
                overflow: "auto",
                className: ue.sx,
                children: [
                    (0, r.jsx)(s9, { state: n }),
                    0 === l.length
                        ? (0, r.jsx)(s8, {
                              state: n,
                              emptyTitle: ec.intl.string(ed.default.S7qlPG),
                              emptyBody: ec.intl.string(ed.default.nD0S9z),
                          })
                        : 0 === d.length
                          ? (0, r.jsx)(y.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: ec.intl.string(ed.default["4SIdrX"]),
                            })
                          : d.map((e) => (0, r.jsx)(ut, { entry: e.log, showSource: "all" === a }, e.key)),
                ],
            }),
        ],
    });
}
function un(e) {
    let { title: t, preview: l, stable: n, renderEnv: a } = e,
        s = [];
    return (
        null != l && s.push((0, r.jsx)(i.Fragment, { children: a("preview", l) }, "preview")),
        null != n && s.push((0, r.jsx)(i.Fragment, { children: a("stable", n) }, "stable")),
        (0, r.jsx)(sW, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, r.jsx)(y.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: ec.intl.string(ed.default.umcjif),
                      }),
        })
    );
}
function ua(e) {
    var t;
    let { env: l, bot: n } = e;
    return n.ever_started
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(sJ, {
                      label: ec.intl.formatToPlainString(ed.default["01ZMS4"], { env: sO(l) }),
                      value: ((t = n.connected), ec.intl.string(t ? ed.default.Wv025I : ed.default["7/lsFY"])),
                      critical: !n.connected && null != n.fatal_reason,
                      hint: n.fatal_reason ?? (n.connected ? void 0 : (n.last_start_reason ?? void 0)),
                  }),
                  (0, r.jsx)(sJ, {
                      label: ec.intl.string(ed.default["z1dh+F"]),
                      value: sL(n.events_received),
                      hint:
                          null != n.last_event_type && null != n.last_event_at
                              ? `${n.last_event_type} \xb7 ${sz(n.last_event_at)}`
                              : void 0,
                  }),
                  (0, r.jsx)(sJ, { label: ec.intl.string(ed.default.Iz5GnJ), value: sL(n.guild_count) }),
                  (0, r.jsx)(sJ, {
                      label: ec.intl.string(ed.default["7UqtNv"]),
                      value: sL(n.reconnects),
                      hint:
                          null != n.last_close_code && null != n.last_close_at
                              ? ec.intl.formatToPlainString(ed.default.MasSly, {
                                    code: n.last_close_code,
                                    time: sz(n.last_close_at),
                                })
                              : void 0,
                  }),
                  n.dispatch_errors > 0 &&
                      (0, r.jsx)(sJ, {
                          label: ec.intl.string(ed.default["x3+JXJ"]),
                          value: sL(n.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, r.jsx)(sJ, { label: sO(l), value: ec.intl.string(ed.default.lTHQss) });
}
function ur(e) {
    let { env: t, metrics: l } = e,
        n = l.status_4xx + l.status_5xx;
    return (0, r.jsx)(sJ, {
        label: sO(t),
        value: ec.intl.formatToPlainString(ed.default["Xq+wHT"], {
            requests: sL(l.requests),
            failures: sL(n + l.errors),
        }),
        critical: l.errors + l.status_5xx > 0,
        hint:
            null != l.last_failure
                ? ec.intl.formatToPlainString(ed.default["o/ZBm4"], {
                      host: l.last_failure.host,
                      status: l.last_failure.status ?? "network",
                      time: sz(l.last_failure.at),
                  })
                : ec.intl.formatToPlainString(ed.default["7KlGT6"], { time: sz(l.since) }),
    });
}
function ui(e) {
    let { env: t, runtime: l } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(sJ, {
                label: ec.intl.formatToPlainString(ed.default["92gVTm"], { env: sO(t) }),
                value: sL(l.connections),
            }),
            l.schedules.map((e) =>
                (0, r.jsx)(
                    sJ,
                    {
                        label: ec.intl.formatToPlainString(ed.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? ec.intl.formatToPlainString(ed.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? ec.intl.formatToPlainString(ed.default.wxAWNv, { time: sz(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function us(e) {
    let { env: t, metrics: l } = e;
    return (0, r.jsx)(sJ, {
        label: sO(t),
        value: ec.intl.formatToPlainString(ed.default.suAOj9, { calls: sL(l.calls), errors: sL(l.errors) }),
        critical: l.errors > 0,
        hint: l.last_model,
    });
}
function uu(e) {
    let { title: t, metrics: l, limits: n } = e;
    if (null == l || 0 === l.requests)
        return (0, r.jsx)(sW, {
            title: t,
            children: (0, r.jsx)(y.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: ec.intl.string(ed.default["Noami/"]),
            }),
        });
    let a = l.cpu_ms_total / l.requests,
        i = l.cpu_ms_total > 0;
    return (0, r.jsxs)(sW, {
        title: t,
        children: [
            (0, r.jsx)(sJ, {
                label: ec.intl.string(ed.default.xtD4Zp),
                value: sL(l.requests),
                hint: ec.intl.formatToPlainString(ed.default["7KlGT6"], { time: sz(l.since) }),
            }),
            (0, r.jsx)(sJ, { label: ec.intl.string(ed.default.gfRhR3), value: sL(l.errors), critical: l.errors > 0 }),
            i
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(sX, {
                              label: ec.intl.string(ed.default.LEJ5r3),
                              used: l.cpu_ms_max,
                              max: n.cpu_ms_per_request,
                              formatValue: sR,
                          }),
                          (0, r.jsx)(sJ, {
                              label: ec.intl.string(ed.default.mSKImM),
                              value: sR(a),
                              hint: ec.intl.formatToPlainString(ed.default.JqMU05, {
                                  total: sR(l.cpu_ms_total),
                                  wall: sR(l.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, r.jsx)(sJ, {
                      label: ec.intl.string(ed.default.LEJ5r3),
                      value: ec.intl.string(ed.default["2Ekb2b"]),
                      hint: ec.intl.string(ed.default.G0aq7i),
                  }),
            !i &&
                l.wall_ms_total > 0 &&
                (0, r.jsx)(sJ, { label: ec.intl.string(ed.default.xvmL1D), value: sR(l.wall_ms_total) }),
            l.exceeded_cpu > 0 &&
                (0, r.jsx)(sJ, {
                    label: ec.intl.string(ed.default["4sQYwH"]),
                    value: sL(l.exceeded_cpu),
                    critical: !0,
                }),
            (0, r.jsx)(sJ, {
                label: ec.intl.string(ed.default.bQenOy),
                value: sL(l.exceeded_memory),
                critical: l.exceeded_memory > 0,
                hint: ec.intl.formatToPlainString(ed.default["5jIZwv"], { limit: `${n.memory_mb} MB` }),
            }),
            null != l.build && (0, r.jsx)(sJ, { label: ec.intl.string(ed.default.xgpn4Y), value: sF(l.build) }),
        ],
    });
}
function uo(e) {
    let { status: t } = e,
        { stable: l, preview: n, shared_data: a } = t.storage,
        s = t.worker.limits,
        u = a
            ? [{ key: "shared", label: ec.intl.string(ed.default.V5kbaH), metrics: l }]
            : [
                  { key: "preview", label: ec.intl.string(ed.default["2yLYlG"]), metrics: n },
                  { key: "stable", label: ec.intl.string(ed.default.eiAi57), metrics: l },
              ];
    return (0, r.jsx)(sW, {
        title: ec.intl.string(ed.default.mRt7MW),
        children: u.map((e) => {
            let { key: t, label: l, metrics: n } = e;
            return null == n
                ? (0, r.jsx)(sJ, { label: l, value: "\u2014" }, t)
                : (0, r.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, r.jsx)(sJ, {
                                  label: ec.intl.formatToPlainString(ed.default.u7kJJ4, { env: l }),
                                  value: sP(n.r2_bytes),
                                  hint: ec.intl.formatToPlainString(
                                      n.r2_truncated ? ed.default.lH0oQw : ed.default.m9h02S,
                                      { count: sL(n.r2_objects) },
                                  ),
                              }),
                              null != n.db_bytes &&
                                  (0, r.jsx)(sX, {
                                      label: ec.intl.formatToPlainString(ed.default.mnbPqt, { env: l }),
                                      used: n.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: sP,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function ud(e) {
    let { status: t, fetchState: l, onRefresh: n } = e;
    return (0, r.jsxs)("div", {
        className: sZ.Mf,
        children: [
            (0, r.jsx)(sK, { generatedAt: t?.generated_at ?? null, fetchState: l, onRefresh: n }),
            null != t &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(uu, {
                            title: ec.intl.string(ed.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, r.jsx)(uu, {
                            title: ec.intl.string(ed.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, r.jsx)(uo, { status: t }),
                        null != t.bot &&
                            (0, r.jsx)(un, {
                                title: ec.intl.string(ed.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, r.jsx)(ua, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, r.jsx)(un, {
                                title: ec.intl.string(ed.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, r.jsx)(ur, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, r.jsx)(un, {
                                title: ec.intl.string(ed.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, r.jsx)(ui, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, r.jsx)(un, {
                                title: ec.intl.string(ed.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, r.jsx)(us, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, r.jsx)(sQ, { analytics: t.analytics }),
                        (0, r.jsxs)(sW, {
                            title: ec.intl.string(ed.default.fQMpFp),
                            children: [
                                (0, r.jsx)(sJ, {
                                    label: ec.intl.string(ed.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? sF(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, r.jsx)(sJ, {
                                    label: ec.intl.string(ed.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? sF(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var uc = l(761929);
function um(e, t) {
    return String(e).padStart(t, "0");
}
function uf(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let l = Date.parse(e);
    if (Number.isNaN(l)) return null;
    let n = new Date(l),
        a = `${um(n.getHours(), 2)}:${um(n.getMinutes(), 2)}:${um(n.getSeconds(), 2)}`;
    return "millis" === t ? `${a}.${um(n.getMilliseconds(), 3)}` : a;
}
var uh = l(382541);
let ug = new Map(),
    ux = new Map(),
    up = 0,
    uv = 0;
async function uj(e, t, l) {
    let n = up,
        a = ug.get(t);
    if (null != a) return { status: "loaded", rich: a };
    if (Date.now() < uv) return { status: "forbidden" };
    let r = ux.get(t);
    if (null != r) return r;
    let i = (async () => {
        try {
            let a,
                { ticket: r, baseUrl: i } = await (0, uh.d)(e),
                s = await fetch(
                    ((a = new URL(`${i}/agent/trace-detail`)).searchParams.set("ticket", r),
                    a.searchParams.set("id", t),
                    a.toString()),
                    { method: "GET", credentials: "omit" },
                );
            if (403 === s.status) return ((uv = Date.now() + 6e4), { status: "forbidden" });
            if (!s.ok) return { status: "failed" };
            let u = await s.json();
            if (!0 !== u.available || null == u.rich) return { status: "unavailable" };
            if (n !== up) return { status: "failed" };
            var l = u.rich;
            for (ug.set(t, l); ug.size > 100;) {
                let e = ug.keys().next();
                if (!0 === e.done) break;
                ug.delete(e.value);
            }
            return { status: "loaded", rich: u.rich };
        } catch {
            return { status: "failed" };
        }
    })();
    ux.set(t, i);
    let s = await i;
    return (ux.get(t) === i && ux.delete(t), l?.aborted === !0 ? { status: "failed" } : s);
}
function ub() {
    ((up += 1), ug.clear(), ux.clear(), (uv = 0));
}
function uy(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function uk(e) {
    if (e < 1e3) return String(e);
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function uw(e) {
    switch (e) {
        case "subagent":
            return ec.intl.string(ed.default.PbKt9r);
        case "context":
            return ec.intl.string(ed.default["tNk/P2"]);
        case "tool":
            return ec.intl.string(ed.default.NBOJcw);
        case "delegated":
            return ec.intl.string(ed.default.QgrFdt);
        default:
            return ec.intl.string(ed.default.LsLVUy);
    }
}
function uA(e) {
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
let uN = ["model", "tool", "subagent", "delegated", "context"];
function uC(e, t) {
    let l = t.trim().toLowerCase();
    return "" === l
        ? e
        : e.filter((e) => {
              let t;
              return ((t =
                  "model" === e.kind
                      ? [e.model, e.agent, e.stopReason ?? "", e.error ?? ""]
                      : [e.tool, e.agent, e.summary ?? "", e.error ?? ""]).push(uA(e)),
              t.join(" ").toLowerCase()).includes(l);
          });
}
function uS(e, t) {
    return null == t ? null : (e.find((e) => e.id === t) ?? null);
}
let uE = {
    model: "blurpleLight",
    subagent: "greenLight",
    context: "grayLight",
    tool: "grayMedium",
    delegated: "orangeLight",
};
function uI(e) {
    let { category: t } = e;
    return (0, r.jsx)(s5.v, { text: uw(t), variant: uE[t] });
}
var uT = l(28863);
let uM = ["arguments", "result", "usage", "diagnostics"];
var u_ = l(536113);
let uP = { started: u_.Vf, ok: u_.mo, error: u_.Sr };
function uR(e) {
    let { status: t } = e;
    return (0, r.jsx)("span", {
        className: `${u_.Om} ${uP[t] ?? u_.Vf}`,
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "started":
                    return ec.intl.string(ed.default["2wyRDK"]);
                case "error":
                    return ec.intl.string(ed.default["2Cu8n+"]);
                default:
                    return ec.intl.string(ed.default["6kgw6D"]);
            }
        })(t),
    });
}
function uL(e) {
    let { label: t, value: l } = e;
    return (0, r.jsxs)("div", {
        className: u_.wV,
        children: [
            (0, r.jsx)(y.E, { variant: "text-xs/medium", color: "text-muted", className: u_.D6, children: t }),
            (0, r.jsx)("div", { className: u_.zL, children: l }),
        ],
    });
}
function uD(e) {
    let { label: t, value: l } = e;
    return (0, r.jsx)(uL, {
        label: t,
        value: (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-default", selectable: !0, children: l }),
    });
}
function uz(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: u_.WA, children: t });
}
function uF(e) {
    let { title: t, children: l } = e,
        n = i.useId();
    return (0, r.jsxs)("section", {
        "aria-labelledby": n,
        className: u_.xd,
        children: [
            (0, r.jsx)(y.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                id: n,
                className: u_.Hm,
                children: t,
            }),
            l,
        ],
    });
}
function uO(e) {
    let { title: t, children: l } = e;
    return (0, r.jsxs)("details", {
        className: u_.XK,
        children: [
            (0, r.jsxs)("summary", {
                className: u_.It,
                children: [
                    (0, r.jsx)(tr._, { className: u_.k, size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    (0, r.jsx)(y.E, { variant: "text-xs/semibold", color: "none", children: t }),
                ],
            }),
            (0, r.jsx)("div", { className: u_.bG, children: l }),
        ],
    });
}
function uU(e) {
    let { field: t } = e;
    if (null != t.value)
        return (0, r.jsx)(uL, {
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
            ? ec.intl.formatToPlainString(ed.default.ib7All, { count: t.chars })
            : null != t.items
              ? ec.intl.formatToPlainString(ed.default.cIqKbA, { count: t.items })
              : null;
    return (0, r.jsx)(uL, {
        label: t.key,
        value: (0, r.jsxs)("div", {
            className: u_.Kv,
            children: [
                (0, r.jsx)(y.E, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    children: (function (e) {
                        switch (e) {
                            case "prose":
                                return ec.intl.string(ed.default["6oDpz5"]);
                            case "content":
                                return ec.intl.string(ed.default.kSGhxQ);
                            default:
                                return ec.intl.string(ed.default.JwGtRz);
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
function uG(e) {
    let { entries: t } = e;
    return 0 === t.length
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", {
                      className: u_.QR,
                      children: (0, r.jsx)(s5.v, { text: ec.intl.string(ed.default.LRIpHQ), variant: "orangeLight" }),
                  }),
                  t.map((e) =>
                      (0, r.jsx)(
                          uL,
                          {
                              label: e.key,
                              value: (0, r.jsxs)("div", {
                                  className: u_.TY,
                                  children: [
                                      null == e.value
                                          ? null
                                          : (0, r.jsx)(y.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                className: u_.Px,
                                                selectable: !0,
                                                children: e.value,
                                            }),
                                      !0 !== e.scrubbed
                                          ? null
                                          : (0, r.jsx)(y.E, {
                                                variant: "text-xs/normal",
                                                color: "text-feedback-warning",
                                                children: ec.intl.string(ed.default["+kQ+K3"]),
                                            }),
                                      !0 !== e.truncated
                                          ? null
                                          : (0, r.jsx)(y.E, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children:
                                                    null == e.chars
                                                        ? ec.intl.string(ed.default.ijkkUh)
                                                        : ec.intl.formatToPlainString(ed.default.PRt8I0, {
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
function u$(e) {
    let { detail: t } = e,
        l =
            null == t || "loaded" === t.status || "forbidden" === t.status
                ? null
                : ec.intl.string(
                      "loading" === t.status
                          ? ed.default.SKbSyo
                          : "unavailable" === t.status
                            ? ed.default.tdq5Zn
                            : ed.default["Dw1JW/"],
                  );
    return null == l
        ? null
        : (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-subtle", className: u_.E7, children: l });
}
function uq(e) {
    let { projectId: t, entry: l, onClose: n, parent: a, onSelect: s, childCount: u } = e,
        o = (function (e) {
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
                uM.filter((e) => n.has(e))
            );
        })(l, { childCount: u, hasParent: null != a }),
        d = (function (e, t) {
            let [l, n] = i.useState(null);
            if (
                (i.useEffect(() => {
                    if (null == t || null != ug.get(t)) return;
                    let l = new AbortController();
                    return (
                        uj(e, t, l.signal).then((e) => {
                            l.signal.aborted || n({ detailId: t, detail: e });
                        }),
                        () => l.abort()
                    );
                }, [e, t]),
                null == t)
            )
                return null;
            let a = ug.get(t);
            return null != a ? { status: "loaded", rich: a } : l?.detailId === t ? l.detail : { status: "loading" };
        })(t, "tool" === l.kind ? l.detailId : void 0),
        c = "model" === l.kind ? l.model : l.tool,
        m = uf(l.startedAt, "millis"),
        f = uA(l),
        h = i.useCallback(
            (e) => {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), n());
            },
            [n],
        );
    return (0, r.jsxs)(lD.Ch, {
        className: u_._0,
        onKeyDown: h,
        role: "region",
        "aria-label": ec.intl.formatToPlainString(ed.default.Qiaeyz, { name: c }),
        children: [
            (0, r.jsx)("div", {
                className: u_.sy,
                children: (0, r.jsxs)("div", {
                    className: u_.HI,
                    children: [
                        (0, r.jsx)(uR, { status: l.status }),
                        (0, r.jsx)(uI, { category: f }),
                        (0, r.jsx)(y.E, {
                            variant: "text-sm/semibold",
                            color: "text-strong",
                            className: u_.kc,
                            children: c,
                        }),
                        (0, r.jsx)(y.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            tabularNumbers: !0,
                            className: u_.l5,
                            children: null == l.durationMs ? ec.intl.string(ed.default["2wyRDK"]) : uy(l.durationMs),
                        }),
                    ],
                }),
            }),
            null == l.error
                ? null
                : (0, r.jsx)(y.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: u_.Um,
                      selectable: !0,
                      children: l.error,
                  }),
            o.includes("arguments") && "tool" === l.kind
                ? (0, r.jsxs)(uF, {
                      title: ec.intl.string(ed.default["G/4JST"]),
                      children: [
                          (l.fields ?? []).map((e) => (0, r.jsx)(uU, { field: e }, e.key)),
                          d?.status === "loaded" && null != d.rich.args
                              ? (0, r.jsx)(uG, { entries: d.rich.args })
                              : null,
                          (0, r.jsx)(u$, { detail: d }),
                      ],
                  })
                : null,
            o.includes("result") && "tool" === l.kind
                ? (0, r.jsxs)(uF, {
                      title: ec.intl.string(ed.default.Dgg25Y),
                      children: [
                          (0, r.jsx)(uD, {
                              label: ec.intl.string(ed.default["U+OQCo"]),
                              value: ec.intl.formatToPlainString(ed.default.ib7All, { count: l.resultChars ?? 0 }),
                          }),
                          null == l.resultAdded
                              ? null
                              : (0, r.jsx)(uD, {
                                    label: ec.intl.string(ed.default["MQYS+n"]),
                                    value: `+${l.resultAdded} \u{2212}${l.resultRemoved ?? 0}`,
                                }),
                          !0 !== l.resultTruncated
                              ? null
                              : (0, r.jsx)(uL, {
                                    label: ec.intl.string(ed.default.t7GJFc),
                                    value: (0, r.jsx)(y.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        children: ec.intl.string(ed.default.ijkkUh),
                                    }),
                                }),
                          d?.status === "loaded" && null != d.rich.result
                              ? (0, r.jsx)(uG, { entries: d.rich.result })
                              : null,
                      ],
                  })
                : null,
            o.includes("usage") && "model" === l.kind
                ? (0, r.jsxs)(uF, {
                      title: ec.intl.string(ed.default.NXmRw1),
                      children: [
                          (0, r.jsxs)(uz, {
                              children: [
                                  null == l.promptTokens
                                      ? null
                                      : (0, r.jsx)(uD, {
                                            label: ec.intl.string(ed.default.iq3T1q),
                                            value: ec.intl.formatToPlainString(ed.default["6GQUgQ"], {
                                                tokens: uk(l.promptTokens),
                                            }),
                                        }),
                                  null == l.systemTokens
                                      ? null
                                      : (0, r.jsx)(uD, {
                                            label: ec.intl.string(ed.default.ZELAZn),
                                            value: ec.intl.formatToPlainString(ed.default.Te7mPn, {
                                                system: uk(l.systemTokens),
                                                tools: uk(l.toolsTokens ?? 0),
                                                toolCount: l.tools ?? 0,
                                                messages: uk(l.messagesTokens ?? 0),
                                                messageCount: l.messages ?? 0,
                                            }),
                                        }),
                                  null == l.inputTokens
                                      ? null
                                      : (0, r.jsx)(uD, {
                                            label: ec.intl.string(ed.default["LENc/T"]),
                                            value: String(l.inputTokens),
                                        }),
                                  null == l.outputTokens
                                      ? null
                                      : (0, r.jsx)(uD, {
                                            label: ec.intl.string(ed.default.ewRHwx),
                                            value: String(l.outputTokens),
                                        }),
                                  null == l.cacheReadTokens
                                      ? null
                                      : (0, r.jsx)(uD, {
                                            label: ec.intl.string(ed.default.heVFQD),
                                            value: ec.intl.formatToPlainString(ed.default.VO3gdd, {
                                                read: l.cacheReadTokens,
                                                write: l.cacheWriteTokens ?? 0,
                                            }),
                                        }),
                                  null == l.costUsd
                                      ? null
                                      : (0, r.jsx)(uD, {
                                            label: ec.intl.string(ed.default.aBw2Vm),
                                            value: `$${l.costUsd.toFixed(4)}`,
                                        }),
                              ],
                          }),
                          (0, r.jsx)(y.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              className: u_.E7,
                              children: ec.intl.string(ed.default["foF/Bc"]),
                          }),
                      ],
                  })
                : null,
            o.includes("arguments") || o.includes("result")
                ? (0, r.jsx)(y.E, {
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: u_.E7,
                      children: ec.intl.string(ed.default.o24IFK),
                  })
                : null,
            o.includes("diagnostics")
                ? (0, r.jsx)(uO, {
                      title: ec.intl.string(ed.default["dix/W4"]),
                      children: (0, r.jsxs)(uz, {
                          children: [
                              null == a
                                  ? null
                                  : (0, r.jsx)(uL, {
                                        label: ec.intl.string(ed.default.soPsOJ),
                                        value: (0, r.jsx)(uT.Anchor, {
                                            onClick: () => s(a.id),
                                            children: (0, r.jsx)(y.E, {
                                                tag: "span",
                                                variant: "text-xs/normal",
                                                color: "none",
                                                children: "model" === a.kind ? a.model : a.tool,
                                            }),
                                        }),
                                    }),
                              0 === u
                                  ? null
                                  : (0, r.jsx)(uD, {
                                        label: ec.intl.string(ed.default.kNZBxr),
                                        value: ec.intl.formatToPlainString(ed.default["6LoCUh"], { count: u }),
                                    }),
                              null == l.turnId
                                  ? null
                                  : (0, r.jsx)(uD, { label: ec.intl.string(ed.default.bL1r5J), value: l.turnId }),
                              (0, r.jsx)(uD, { label: ec.intl.string(ed.default.Ndwr7X), value: l.id }),
                              null == m ? null : (0, r.jsx)(uD, { label: ec.intl.string(ed.default.sO8ghW), value: m }),
                              "model" !== l.kind || null == l.stopReason
                                  ? null
                                  : (0, r.jsx)(uD, { label: ec.intl.string(ed.default.VfYxPF), value: l.stopReason }),
                              "tool" !== l.kind || null == l.schema || 0 === l.schema.length
                                  ? null
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(y.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                className: u_.Hm,
                                                children: ec.intl.string(ed.default.mSm8iy),
                                            }),
                                            l.schema.map((e) =>
                                                (0, r.jsx)(
                                                    uD,
                                                    {
                                                        label: e.name,
                                                        value: e.required
                                                            ? ec.intl.formatToPlainString(ed.default["6aSRPA"], {
                                                                  type: e.type,
                                                              })
                                                            : ec.intl.formatToPlainString(ed.default.q2B975, {
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
                className: u_.E7,
                children: ec.intl.string(ed.default.FloyTQ),
            }),
        ],
    });
}
let uB = { model: u_.WI, subagent: u_.uM, context: u_.eH, tool: u_.pw, delegated: u_.C8 };
function uH(e) {
    let { entries: t } = e,
        l = i.useMemo(
            () =>
                (function (e) {
                    let t = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 },
                        l = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 };
                    for (let n of e) {
                        let e = uA(n);
                        ((t[e] += n.durationMs ?? 0), (l[e] += 1));
                    }
                    return uN.map((e) => ({ category: e, ms: t[e], calls: l[e] }));
                })(t),
            [t],
        ),
        n = l.reduce((e, t) => e + t.ms, 0);
    return (0, r.jsxs)("div", {
        className: u_.M0,
        children: [
            (0, r.jsx)("div", {
                className: u_.pZ,
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
                                            className: `${u_.dL} ${uB[t]}`,
                                            style: { "--custom-conjure-trace-segment-weight": String(l) },
                                        },
                                        t,
                                    );
                          }),
            }),
            (0, r.jsx)("div", {
                className: u_.z4,
                role: "group",
                "aria-label": ec.intl.string(ed.default["Gioq+C"]),
                children: uN.map((e) => {
                    let t = l.find((t) => t.category === e),
                        a = t?.ms ?? 0,
                        i = t?.calls ?? 0,
                        s = 0 === n ? 0 : Math.round((a / n) * 100);
                    return (0, r.jsxs)(
                        "div",
                        {
                            className: u_.fI,
                            children: [
                                (0, r.jsx)("span", { className: `${u_.A9} ${uB[e]}`, "aria-hidden": !0 }),
                                (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-muted", children: uw(e) }),
                                (0, r.jsx)(y.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: ec.intl.formatToPlainString(ed.default["3dQ1ly"], { percent: s }),
                                }),
                                (0, r.jsx)(y.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: ec.intl.formatToPlainString(ed.default.Ow0k34, { count: i }),
                                }),
                                0 === a
                                    ? null
                                    : (0, r.jsx)(y.E, {
                                          variant: "text-xs/normal",
                                          color: "text-subtle",
                                          tabularNumbers: !0,
                                          children: uy(a),
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
function uV(e) {
    let { entry: t, selected: l, tabbable: n, onSelect: a, onKeyDown: i, nested: s } = e,
        u = uA(t),
        o = "model" === t.kind ? t.model : t.tool,
        d =
            "model" === t.kind && null != t.promptTokens
                ? ec.intl.formatToPlainString(ed.default["6GQUgQ"], { tokens: uk(t.promptTokens) })
                : null != t.durationMs
                  ? uy(t.durationMs)
                  : null;
    return (0, r.jsxs)(k.D, {
        tag: "div",
        role: "option",
        "aria-selected": l,
        tabIndex: n ? 0 : -1,
        id: `trace-${t.id}`,
        className: `${u_.nM} ${s ? u_.A5 : ""} ${"error" === t.status ? u_.Cr : ""} ${l ? u_.CZ : ""}`,
        onKeyDown: i,
        onClick: () => a(t.id),
        children: [
            (0, r.jsxs)("div", {
                className: u_.sU,
                children: [
                    (0, r.jsx)(uR, { status: t.status }),
                    (0, r.jsx)(uI, { category: u }),
                    (0, r.jsx)(y.E, {
                        variant: "text-xs/semibold",
                        color: "text-default",
                        className: u_.G9,
                        children: o,
                    }),
                    null == d
                        ? null
                        : (0, r.jsx)(y.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              tabularNumbers: !0,
                              className: u_.j2,
                              children: d,
                          }),
                ],
            }),
            "tool" === t.kind && null != t.summary
                ? (0, r.jsx)(y.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: u_.Ne,
                      children: t.summary,
                  })
                : null,
            null == t.error
                ? null
                : (0, r.jsx)(y.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: u_.Xu,
                      children: t.error,
                  }),
        ],
    });
}
function uK(e) {
    var t;
    let { projectId: l, query: n } = e,
        a = (0, m.yK)([eS.Ay], () => eS.Ay.getTrace(l), [l]),
        s = (0, m.bG)([eS.Ay], () => eS.Ay.getHistoryState(l, "trace"));
    i.useEffect(() => ub, [l]);
    let [u, o] = i.useState(null),
        [d, c] = i.useState(40),
        [f, h] = i.useState(!1),
        g = i.useRef(null),
        x = i.useRef(null),
        p = i.useRef(null),
        v = i.useRef(null),
        j = i.useId(),
        b = i.useCallback((e) => {
            null != e && document.getElementById(`trace-${e}`)?.focus();
        }, []),
        k = i.useCallback((e) => o((t) => (t === e ? null : e)), []),
        w = i.useCallback((e) => {
            let t = g.current?.offsetHeight ?? 0;
            return 0 === t ? 40 : (0, nB.clamp)((e / t) * 100, 25, 75);
        }, []),
        A = i.useCallback((e) => {
            let t = g.current?.offsetHeight ?? 0;
            return 0 === t ? e : (0, nB.clamp)(e, (25 * t) / 100, (75 * t) / 100);
        }, []),
        N = (0, uc.A)({
            resizableDomNodeRef: x,
            orientation: uc.R.VERTICAL_TOP,
            getClampedValue: A,
            onElementResize: (e) => c(w(e)),
            onElementResizeStart: () => h(!0),
            onElementResizeEnd: () => h(!1),
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        C = i.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), N(e));
            },
            [N],
        ),
        S = i.useCallback((e) => {
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
            null != t && (e.preventDefault(), c((e) => (0, nB.clamp)(e + t, 25, 75)));
        }, []),
        E = i.useCallback(() => {
            (o(null), b(u));
        }, [u, b]),
        I = i.useMemo(() => uC(a, n), [a, n]),
        T = i.useMemo(
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
                    .map((e, t) => ({ ...e, index: t, entries: uC(e.entries, n) }))
                    .filter((e) => e.entries.length > 0),
            [a, n],
        ),
        M = uS(I, u),
        _ = M?.kind === "tool" ? uS(a, M.parentId ?? null) : null,
        P = null == M ? 0 : ((t = M.id), a.filter((e) => "tool" === e.kind && e.parentId === t)).length,
        R = I[I.length - 1];
    i.useLayoutEffect(() => {
        if (null != u) return;
        let e = p.current?.getScrollerNode();
        null != e && (e.scrollTop = e.scrollHeight);
    }, [R, u]);
    let L = i.useCallback(
        (e) => {
            if (0 === I.length) return;
            let t = I.findIndex((e) => e.id === u);
            function l(t) {
                e.preventDefault();
                let l = Math.max(0, Math.min(I.length - 1, t));
                (o(I[l].id), document.getElementById(`trace-${I[l].id}`)?.scrollIntoView({ block: "nearest" }));
            }
            "ArrowDown" === e.key
                ? l(t + 1)
                : "ArrowUp" === e.key
                  ? l(-1 === t ? I.length - 1 : t - 1)
                  : "Home" === e.key
                    ? l(0)
                    : "End" === e.key
                      ? l(I.length - 1)
                      : "Escape" === e.key && null != u && (e.preventDefault(), o(null), b(u));
        },
        [I, u, b],
    );
    return 0 === a.length
        ? (0, r.jsx)("div", {
              className: u_.uP,
              ref: g,
              children: (0, r.jsx)(s8, {
                  state: s,
                  emptyTitle: ec.intl.string(ed.default["Tpvy/s"]),
                  emptyBody: ec.intl.string(ed.default.J0WcVA),
              }),
          })
        : (0, r.jsxs)("div", {
              className: `${u_.uP} ${f ? u_.F4 : ""}`,
              ref: g,
              children: [
                  (0, r.jsxs)("div", {
                      className: u_.DK,
                      children: [
                          (0, r.jsx)(uH, { entries: a }),
                          (0, r.jsx)(s6, { state: s }),
                          0 === I.length
                              ? (0, r.jsx)("div", {
                                    className: u_.Ie,
                                    children: (0, r.jsx)(y.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children: ec.intl.string(ed.default.tDB4lC),
                                    }),
                                })
                              : (0, r.jsxs)(lD.Ch, {
                                    ref: p,
                                    className: u_.Ns,
                                    children: [
                                        (0, r.jsx)(s9, { state: s }),
                                        (0, r.jsx)("div", {
                                            ref: v,
                                            id: j,
                                            role: "listbox",
                                            "aria-label": ec.intl.string(ed.default.SGbiNE),
                                            className: u_.p_,
                                            children: T.map((e) => {
                                                let t = uf(e.startedAt),
                                                    l = ec.intl.formatToPlainString(ed.default.gPwGYA, {
                                                        number: e.index + 1,
                                                    });
                                                return (0, r.jsxs)(
                                                    "div",
                                                    {
                                                        role: "presentation",
                                                        children: [
                                                            (0, r.jsxs)("div", {
                                                                className: u_.mf,
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
                                                                              children: uy(e.spanMs),
                                                                          }),
                                                                ],
                                                            }),
                                                            (0, r.jsx)("div", {
                                                                role: "group",
                                                                "aria-label": l,
                                                                className: u_.M5,
                                                                children: e.entries.map((e) =>
                                                                    (0, r.jsx)(
                                                                        uV,
                                                                        {
                                                                            entry: e,
                                                                            selected: e.id === u,
                                                                            tabbable: e.id === (u ?? I[0]?.id),
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
                  null == M
                      ? null
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("div", {
                                    role: "separator",
                                    "aria-orientation": "horizontal",
                                    "aria-label": ec.intl.string(ed.default.DtSORy),
                                    "aria-valuenow": Math.round(d),
                                    "aria-valuemin": 25,
                                    "aria-valuemax": 75,
                                    tabIndex: 0,
                                    className: u_.b1,
                                    onPointerDown: C,
                                    onKeyDown: S,
                                }),
                                (0, r.jsx)("div", {
                                    ref: x,
                                    className: u_.Or,
                                    style: { "--custom-conjure-trace-detail-share": String(d) },
                                    children: (0, r.jsx)(uq, {
                                        projectId: l,
                                        entry: M,
                                        parent: _,
                                        childCount: P,
                                        onSelect: o,
                                        onClose: E,
                                    }),
                                }),
                            ],
                        }),
              ],
          });
}
function uW(e) {
    let { projectId: t, query: l, onQueryChange: n } = e,
        a = (0, m.yK)([eS.Ay], () => eS.Ay.getTrace(t), [t]),
        s = i.useRef(null),
        u = i.useCallback(() => {
            eo(
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
                className: u_.ED,
                children: (0, r.jsx)(s4.I, {
                    query: l,
                    onChange: n,
                    onClear: () => n(""),
                    size: "sm",
                    placeholder: ec.intl.string(ed.default["EY8/Mt"]),
                    "aria-label": ec.intl.string(ed.default["EY8/Mt"]),
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
                        "aria-label": ec.intl.string(ec.t.ogxXGq),
                        onClose: l,
                        onSelect: l,
                        children: (0, r.jsx)(en.rX, {
                            children: (0, r.jsx)(en.Dr, {
                                id: "export",
                                label: ec.intl.string(ed.default.WXrPRZ),
                                disabled: 0 === a.length,
                                action: u,
                            }),
                        }),
                    });
                },
                children: (e, t) => {
                    let { isShown: l } = t;
                    return (0, r.jsx)(t5.K, {
                        ...e,
                        buttonRef: s,
                        icon: t4.MoreHorizontalIcon,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": ec.intl.string(ec.t["UKOtz+"]),
                        "aria-haspopup": "menu",
                        "aria-expanded": l,
                    });
                },
            }),
        ],
    });
}
var uJ = l(592465);
function uX(e) {
    let { projectId: t, onClose: l } = e,
        [n, a] = i.useState("logs"),
        [s, u] = i.useState(""),
        o = (0, m.bG)([sk.A], () => sk.A.isDeveloper),
        d = (0, m.bG)([s_], () => s_.getStatus(t), [t]),
        c = (0, m.bG)([s_], () => s_.getFetchState(t), [t]);
    i.useEffect(() => {
        (0, er.R7)(t);
    }, [t]);
    let f = i.useCallback(() => (0, er.R7)(t), [t]),
        h = i.useCallback(() => {
            (0, t8.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: s_.getStatus(t),
                        last_turn_usage: s_.getLastTurnUsage(t),
                        last_compaction: s_.getLastCompaction(t),
                        last_compaction_decline: s_.getLastCompactionDecline(t),
                        model_calls: s_.getModelCalls(t),
                        logs: eS.Ay.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, v.P)((0, j.o)(ec.intl.string(ed.default.wI6fhl), b.Ck.SUCCESS)),
            );
        }, [t]),
        g = ec.intl.string(ed.default["Q4FN+H"]);
    return (0, r.jsxs)("section", {
        className: uJ.nd,
        "aria-label": g,
        children: [
            (0, r.jsxs)(lL.Ay, {
                "aria-label": g,
                toolbar: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(lL.Ay.Icon, {
                            icon: sb.CopyIcon,
                            tooltip: ec.intl.string(ed.default.TkHqy2),
                            onClick: h,
                        }),
                        (0, r.jsx)(lL.Ay.Icon, { icon: L.P, tooltip: ec.intl.string(ec.t.cpT0Cq), onClick: l }),
                    ],
                }),
                children: [
                    (0, r.jsx)(lL.Ay.ChannelIcon, { icon: E.BugIcon, "aria-hidden": !0 }),
                    (0, r.jsx)(lL.Ay.Title, { children: g }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: uJ.rf,
                children: [
                    (0, r.jsxs)(sy.V, {
                        selectedItem: n,
                        type: "top",
                        onItemSelect: (e) => a(e),
                        "aria-label": ec.intl.string(ed.default.RvvWIh),
                        className: uJ.vR,
                        children: [
                            (0, r.jsx)(sy.V.Item, { id: "logs", children: ec.intl.string(ed.default["+VRYCm"]) }),
                            (0, r.jsx)(sy.V.Item, { id: "worker", children: ec.intl.string(ed.default["50D0FZ"]) }),
                            (0, r.jsx)(sy.V.Item, { id: "agent", children: ec.intl.string(ed.default.UkbTK1) }),
                            o
                                ? (0, r.jsx)(sy.V.Item, { id: "trace", children: ec.intl.string(ed.default.O6nNjP) })
                                : null,
                        ],
                    }),
                    "logs" === n
                        ? (0, r.jsx)(ul, { projectId: t })
                        : "worker" === n
                          ? (0, r.jsx)(ud, { status: d, fetchState: c, onRefresh: f })
                          : "trace" === n && o
                            ? (0, r.jsxs)("div", {
                                  className: uJ.uP,
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: uJ.XH,
                                          children: (0, r.jsx)(uW, { projectId: t, query: s, onQueryChange: u }),
                                      }),
                                      (0, r.jsx)(uK, { projectId: t, query: s }),
                                  ],
                              })
                            : (0, r.jsx)(s3, { projectId: t, status: d, fetchState: c, onRefresh: f, traceVisible: o }),
                ],
            }),
        ],
    });
}
var uY = l(333007),
    uQ = l(365912),
    uZ = l(775121),
    u0 = l(873715);
function u1(e) {
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
let u2 = Object.freeze({ x: -1, y: -1 });
function u3(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = u1(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var u5 = l(470779);
function u4(e) {
    let {
            projectId: t,
            at: l,
            bounds: n,
            kind: a,
            value: s,
            onChange: o,
            onSubmit: d,
            onDismiss: c,
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
        } = rZ({ projectId: t, surface: "design", onUploadFile: h }),
        y = i.useRef(null),
        k = (m || g.length > 0) && j && !f,
        A = i.useCallback(() => {
            if (!k) return;
            let e = b();
            d(e.length > 0 ? e : void 0);
        }, [k, b, d]),
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
    let T = E?.height ?? 44,
        M = n.left + 8,
        _ = n.top + 8,
        P = Math.max(l.x, M),
        R = Math.min(Math.max(l.y + 32 + 4, _), Math.max(_, n.top + n.height - T - 8));
    return (0, r.jsxs)("div", {
        ref: S,
        className: u()(u5.M0, { [u5.ho]: N && !f, [u5.ET]: f }),
        style: { left: P, top: R },
        "data-testid": "conjure-design-compose-bar",
        children: [
            (0, r.jsx)("input", {
                ref: y,
                type: "file",
                multiple: !0,
                className: u5.Fg,
                tabIndex: -1,
                "aria-hidden": !0,
                onChange: (e) => {
                    (x(Array.from(e.target.files ?? [])), (e.target.value = ""));
                },
            }),
            (0, r.jsx)(w.m, {
                position: "bottom",
                text: ec.intl.string(ed.default.lgvqSB),
                ariaHidden: !0,
                children: (0, r.jsx)("button", {
                    type: "button",
                    className: u5.tY,
                    onClick: () => y.current?.click(),
                    "aria-label": ec.intl.string(ed.default.lgvqSB),
                    children: (0, r.jsx)(ea.H, { size: "custom", color: "currentColor", className: u5.WW }),
                }),
            }),
            (0, r.jsx)(l8.y, {
                autoFocus: !0,
                rows: 1,
                className: u5.hF,
                value: s,
                placeholder: "" === a ? ec.intl.string(ed.default.MPPV1Q) : `Edit ${a}`,
                "aria-label": ec.intl.string(ed.default.KCYqWL),
                onChange: (e) => o(e.target.value),
                onPaste: f ? void 0 : p,
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), e.stopPropagation(), c());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), A());
                },
            }),
            g.length > 0
                ? (0, r.jsx)("div", {
                      className: u5.ZO,
                      children: g.map((e) => (0, r.jsx)(r0, { draft: e, onRemove: v }, e.localId)),
                  })
                : null,
        ],
    });
}
var u7 = l(192888);
function u6(e, t) {
    return (0, u7.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(u3, () => ({ status: "failed" }));
}
var u8 = l(108308);
let u9 = { x: 25, y: 21 };
function oe(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function ot(e, t, l) {
    return {
        left: t.left + e.rect.x * l,
        top: t.top + e.rect.y * l,
        width: Math.max(e.rect.width * l, 1),
        height: Math.max(e.rect.height * l, 1),
    };
}
function ol(e, t, l, n) {
    let a = ot(e, l, n);
    return { x: a.left + a.width * t.x, y: a.top + a.height * t.y };
}
function on(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function oa(e) {
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
function or(e) {
    let { projectId: t, applicationId: l, previewApplicationId: n, resolveIframe: a, toggleRef: s } = e,
        u = null != l && l === n ? t : null,
        { active: o, annotations: d } = e9(u),
        c = (0, tx.Zv)(u),
        f = (0, te.useHasAnyModalOpen)(),
        h = (0, m.bG)([tq.default], () => tq.default.getCurrentUser()),
        g = h?.id ?? null,
        [x, p] = i.useState(null),
        [v, j] = i.useState(null),
        [b, k] = i.useState(!1),
        [w, A] = i.useState(!1),
        [N, S] = i.useState(null),
        [E, I] = i.useState(!1),
        T = i.useRef(null),
        M = i.useRef(null),
        _ = i.useRef(null),
        [R, L] = i.useState(null),
        [D, z] = i.useState(!1),
        [F, O] = i.useState(null),
        [U, G] = i.useState(null),
        $ = i.useRef(!1),
        [q, B] = i.useState(!1),
        [H, V] = i.useState(null),
        K = o && !c && !f;
    null == F || (K && F.projectId === u) || O(null);
    let W = F?.projectId ?? null;
    (i.useEffect(() => {
        if (null != W) return () => nA(W, "design");
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
                p((t) => (oe(t, e) ? t : e));
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
            if (!K || null == u) return;
            let e = !0,
                t = a();
            if (null == t) return void A(!0);
            (k(!0), A(!1));
            let l = `design-feedback-${crypto.randomUUID()}`;
            return (
                (0, u0.J)(t, l, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                    (t) => {
                        if (!e) return;
                        k(!1);
                        let l = "completed" === t.status ? oa(t.response) : null;
                        null == l ? A(!0) : (j(l), e7(u, { url: l.url, title: l.title, viewport: l.viewport }));
                    },
                    () => {
                        e && (k(!1), A(!0));
                    },
                ),
                () => {
                    e = !1;
                }
            );
        }, [K, a, u]));
    let J = i.useRef(null);
    (i.useEffect(() => {
        if (!K || null == x || null == u) return;
        if (null == v) {
            J.current = x;
            return;
        }
        if (oe(J.current, x)) return;
        let e = window.setTimeout(() => {
            let e = a();
            if (null == e) return;
            J.current = x;
            let t = [];
            for (let e = 0; e < d.length; e += 24) t.push(d.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, l) => {
                    let n = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, u0.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: n.length > 0 ? n : [{ action: "snapshot" }],
                        snapshot: 0 === l && n.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let l;
                        if ("completed" !== e.status || !Z.current) return;
                        let n = oa(e.response);
                        null != n && (j(n), e7(u, { url: n.url, title: n.title, viewport: n.viewport }));
                        let a = new Map();
                        (e.response.results.forEach((e, l) => {
                            let n = t[l];
                            if (null == n || "locate" !== e.action || !e.ok) return;
                            let r = u1(e.element);
                            null != r && a.set(n.id, r);
                        }),
                            (l = e3(u)).active &&
                                0 !== a.size &&
                                e5(u, {
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
    }, [K, x, v, d, u, a]),
        i.useEffect(() => {
            if (!K)
                return () => {
                    (S(null), O(null), V(null), j(null));
                };
        }, [K]));
    let X = i.useRef(null),
        Y = i.useRef(null),
        Q = i.useRef(!1),
        Z = i.useRef(!1);
    i.useEffect(() => {
        ((Z.current = K), K || ((X.current = null), (Y.current = null), (_.current = null), I(!1)));
    }, [K]);
    let ee = i.useCallback(
            function e() {
                if (Q.current) return;
                let t = X.current;
                if (null == t) return;
                X.current = null;
                let l = a();
                null != l &&
                    ((Q.current = !0),
                    u6(l, t).then((t) => {
                        if (((Q.current = !1), Z.current)) {
                            if ("picked" !== t.status || oc(t.target, ei.current.rect, ei.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? S(null)
                                    : "unsupported" === t.status && z(!0);
                            else {
                                let e = eW(t.target);
                                (L((t) => (od(t, e) ? t : e)),
                                    S((e) => {
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
            let e = !$.current;
            (G({ at: F.at, label: F.label, draft: F.draft, instant: e }), B(e), O(null));
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
            if (null == U) return;
            let e = setTimeout(() => G(null), ou);
            return () => clearTimeout(e);
        }, [U]));
    let el = null == v || null == x || v.viewport.width < 1 ? 1 : x.width / v.viewport.width,
        en = null != v || w,
        ea = i.useMemo(() => v?.elements ?? [], [v]),
        ei = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        ei.current = { rect: x, scale: el };
    }, [x, el]);
    let es = i.useCallback(
            (e, t, l) => {
                null != u &&
                    (nA(u, "design"),
                    V(null),
                    ($.current = !1),
                    O({ projectId: u, target: e, anchor: t, draft: "", at: l, label: eW(e) }));
            },
            [u],
        ),
        eu = i.useCallback((e, t) => ({ x: (e.clientX - t.left) / el, y: (e.clientY - t.top) / el }), [el]),
        eo = i.useCallback(() => {
            let e = _.current;
            if (null == e) return;
            let t = T.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let l = M.current;
            null != l && (l.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    i.useLayoutEffect(eo);
    let em = i.useCallback(
            (e) => {
                if (null == x || null != H) return;
                if (((_.current = { x: e.clientX, y: e.clientY }), eo(), I(!0), null != F)) {
                    (Math.abs(e.clientX - F.at.x) > oo || Math.abs(e.clientY - F.at.y) > oo) && ($.current = !0);
                    return;
                }
                if (!en) return void S(null);
                let t = eu(e, x);
                if (D) {
                    let e = (function (e, t, l) {
                            let n = null,
                                a = 1 / 0;
                            for (let r of e) {
                                let { x: e, y: i, width: s, height: u } = r.rect;
                                if (s < 1 || u < 1 || t < e || l < i || t > e + s || l > i + u) continue;
                                let o = s * u;
                                o < a && ((n = r), (a = o));
                            }
                            return n;
                        })(ea, t.x, t.y),
                        l = null != e && oc(e, x, el) ? null : e;
                    if (null != l) {
                        let e = eW(l);
                        L((t) => (od(t, e) ? t : e));
                    }
                    S((e) => (e?.ref === l?.ref ? e : l));
                    return;
                }
                let l = { x: Math.round(t.x), y: Math.round(t.y) },
                    n = Y.current;
                (null == n || n.x !== l.x || n.y !== l.y) && ((Y.current = l), (X.current = l), ee());
            },
            [x, el, en, eu, D, ea, F, H, eo, ee],
        ),
        ef = null == H ? null : d.find((e) => e.id === H.id),
        eh = K && (E || F?.target.marker != null || ef?.target.marker != null);
    i.useEffect(() => {
        if (eh)
            return () => {
                let e = a();
                null != e && u6(e, u2);
            };
    }, [eh, a]);
    let eg = i.useCallback(() => {
        (I(!1), S(null), (Y.current = null), (X.current = null));
    }, []);
    i.useEffect(() => {
        if (!K || !E || !en || D || null != F || null != H) return;
        let e = _.current,
            { rect: t, scale: l } = ei.current;
        if (null == e || null == t) return;
        let n = { x: Math.round((e.x - t.left) / l), y: Math.round((e.y - t.top) / l) };
        ((Y.current = n), (X.current = n), ee());
    }, [K, E, en, D, F, H, ee]);
    let ex = i.useCallback(
            (e) => {
                if (null != F || null != H) {
                    (et(), V(null));
                    return;
                }
                if (null == N || null == x) return;
                let t = eu(e, x);
                es(
                    N,
                    (function (e, t, l) {
                        let { x: n, y: a, width: r, height: i } = e.rect;
                        return r < 1 || i < 1
                            ? eV
                            : { x: Math.min(1, Math.max(0, (t - n) / r)), y: Math.min(1, Math.max(0, (l - a) / i)) };
                    })(N, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [N, x, eu, F, H, es, et],
        ),
        ep = i.useCallback(() => {
            null != u && (S(null), e4(u));
        }, [u]),
        ev = i.useCallback(() => {
            null != u &&
                (null != F
                    ? et()
                    : H?.confirmingRemove === !0
                      ? V({ ...H, confirmingRemove: !1 })
                      : null != H
                        ? V(null)
                        : ep());
        }, [u, F, H, et, ep]),
        ej = i.useRef(ev),
        eb = i.useRef(ep);
    i.useLayoutEffect(() => {
        ((ej.current = ev), (eb.current = ep));
    });
    let ey = i.useRef(null);
    i.useEffect(() => {
        if (K)
            return (
                uZ.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        uZ.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), ej.current());
        }
        function t(e) {
            let t = e.target;
            (0, tI.vq)(t) &&
                ey.current?.contains(t) !== !0 &&
                s?.current?.contains(t) !== !0 &&
                !(function (e) {
                    try {
                        return ((0, uQ.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) &&
                eb.current();
        }
    }, [K, s]);
    let ek = i.useCallback(
            (e) => {
                if (null == u) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), ev());
                    return;
                }
                if (null != F || null != H || 0 === ea.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    l = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || l) {
                    e.preventDefault();
                    let l = null == N ? -1 : ea.findIndex((e) => e.ref === N.ref);
                    S(ea[(l + (t ? 1 : -1) + ea.length) % ea.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != N &&
                    (e.preventDefault(),
                    es(N, eV, { x: (x?.left ?? 0) + N.rect.x * el, y: (x?.top ?? 0) + N.rect.y * el }));
            },
            [u, F, H, ea, N, es, ev, x, el],
        ),
        ew = i.useCallback(
            (e) => {
                null == u ||
                    null == F ||
                    ((eK(F.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, er.dv)(
                            u,
                            (function (e, t) {
                                let { kind: l, name: n } = eW(e),
                                    a = [l, n].filter((e) => "" !== e).join(": ");
                                return `${eY}${a}${eQ}${eX(e)}
${t.trim()}`;
                            })(F.target, F.draft),
                            e,
                        ),
                        et(),
                        S(null)));
            },
            [u, F, et],
        ),
        eA = i.useCallback((e) => (null == u ? Promise.reject(Error("no project")) : (0, er.vX)(u, e)), [u]),
        eN = i.useCallback(() => {
            if (null != u && null != H && null != g && eK(H.draft)) {
                var e, t;
                let l, n;
                ((e = H.id),
                    (t = H.draft.trim()),
                    null != (n = (l = e3(u)).annotations.find((t) => t.id === e)) &&
                        e6(n, g) &&
                        e5(u, { ...l, annotations: l.annotations.map((l) => (l.id === e ? { ...l, comment: t } : l)) }),
                    V({ ...H, editing: !1 }));
            }
        }, [u, H, g]),
        eC = i.useCallback(() => {
            if (null != u && null != H && null != g) {
                var e;
                let t, l;
                ((e = H.id),
                    null != (l = (t = e3(u)).annotations.find((t) => t.id === e)) &&
                        e6(l, g) &&
                        e5(u, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    V(null));
            }
        }, [u, H, g]),
        eS = o
            ? b
                ? ec.intl.string(ed.default["Eb/YV9"])
                : w
                  ? ec.intl.string(ed.default.FD30bh)
                  : ec.intl.formatToPlainString(ed.default.dTSqLF, { count: d.length })
            : "",
        eE = K && null != x,
        eI = E && null == H,
        eT = F?.target ?? ef?.target ?? null,
        eM = F ?? U,
        e_ = F ?? (U?.instant === !0 ? null : U),
        eP =
            null != ef && null != x
                ? (function (e, t) {
                      let { left: l, top: n } = on(e, t);
                      return { x: l + 12, y: n + 12 };
                  })(ol(ef.target, ef.anchor, x, el), x)
                : null;
    return (
        i.useEffect(() => {
            let e = a();
            if (ef?.target.marker == null || null == e) return;
            let { target: t, anchor: l } = ef;
            u6(e, { x: Math.round(t.rect.x + t.rect.width * l.x), y: Math.round(t.rect.y + t.rect.height * l.y) });
        }, [ef, a]),
        (0, uY.createPortal)(
            (0, r.jsxs)("div", {
                ref: ey,
                className: u8.Li,
                children: [
                    (0, r.jsx)("div", {
                        className: u8.y4,
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-design-announcer",
                        children: eS,
                    }),
                    eE
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)("div", {
                                      className: u8.MT,
                                      style: { left: x.left, top: x.top, width: x.width, height: x.height },
                                      "data-plain-cursor": eI ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": ec.intl.string(ed.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: em,
                                      onMouseLeave: eg,
                                      onClick: ex,
                                      onKeyDown: ek,
                                  }),
                                  null != N && null == N.marker && null == F && null == H
                                      ? (0, r.jsx)(om, { box: ot(N, x, el) })
                                      : null,
                                  (0, r.jsx)("div", {
                                      ref: T,
                                      className: u8.aZ,
                                      children: (0, r.jsx)("div", {
                                          className: u8.xz,
                                          "data-shown": null != N && null == H && null == F ? "" : void 0,
                                          "data-instant": q ? "" : void 0,
                                          children: (0, r.jsxs)(y.E, {
                                              variant: "text-xs/medium",
                                              className: u8.Ux,
                                              children: [
                                                  null == R
                                                      ? null
                                                      : (0, r.jsx)("span", { className: u8.Tl, children: R.kind }),
                                                  null == R || "" === R.name
                                                      ? null
                                                      : (0, r.jsxs)("span", {
                                                            className: u8.kh,
                                                            children: [" ", R.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, r.jsx)("div", {
                                      ref: M,
                                      className: u8.Y,
                                      children: eI ? (0, r.jsx)("div", { className: u8.u }) : null,
                                  }),
                                  null == e_
                                      ? null
                                      : (0, r.jsx)("div", {
                                            className: u8.aZ,
                                            style: {
                                                transform: `translate3d(${e_.at.x + 20}px, ${e_.at.y + 20}px, 0)`,
                                            },
                                            children: (0, r.jsx)("div", {
                                                className: u8.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == F ? "" : void 0,
                                                children: (0, r.jsxs)(y.E, {
                                                    variant: "text-xs/medium",
                                                    className: u8.Ux,
                                                    children: [
                                                        (0, r.jsx)("span", {
                                                            className: u8.Tl,
                                                            children: e_.label.kind,
                                                        }),
                                                        "" === e_.label.name
                                                            ? null
                                                            : (0, r.jsxs)("span", {
                                                                  className: u8.kh,
                                                                  children: [" ", e_.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eT && null == eT.marker
                                      ? (0, r.jsx)("div", { className: u8.D0, style: ot(eT, x, el), "aria-hidden": !0 })
                                      : null,
                                  d.map((e, t) => {
                                      let l = ol(e.target, e.anchor, x, el),
                                          n = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, r.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: u8.xL,
                                              style: { ...on(l, x), width: 24, height: 24 },
                                              "aria-label": ec.intl.formatToPlainString(ed.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: eJ(e.target),
                                              }),
                                              "aria-expanded": H?.id === e.id,
                                              "data-testid": "conjure-design-marker",
                                              onMouseEnter: () => {
                                                  null == F && V(n);
                                              },
                                              onFocus: () => {
                                                  null == F && V(n);
                                              },
                                              onClick: (e) => {
                                                  (e.stopPropagation(), et(), V(n));
                                              },
                                              children: (0, r.jsx)(oi, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eM || null == u
                                      ? null
                                      : (0, r.jsx)(u4, {
                                            projectId: u,
                                            at: { x: eM.at.x + 20, y: eM.at.y + 20 },
                                            bounds: x,
                                            kind: eM.label.kind,
                                            value: eM.draft,
                                            canSubmit: null != F && eK(eM.draft),
                                            onChange: (e) => {
                                                null != F && O({ ...F, draft: e });
                                            },
                                            onSubmit: ew,
                                            onDismiss: et,
                                            onUploadFile: eA,
                                            closing: null == F,
                                        }),
                                  null != ef && null != H && null != eP
                                      ? (0, r.jsxs)(os, {
                                            point: eP,
                                            frame: x,
                                            authorId: ef.authorId,
                                            title: eJ(ef.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                H.confirmingRemove ? V({ ...H, confirmingRemove: !1 }) : V(null);
                                            },
                                            onMouseLeave: () => {
                                                H.editing || H.confirmingRemove || V(null);
                                            },
                                            children: [
                                                H.editing
                                                    ? (0, r.jsx)(P.f, {
                                                          autoFocus: !0,
                                                          label: ec.intl.string(ed.default.KCYqWL),
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
                                                    : (0, r.jsx)(y.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-default",
                                                          className: u8.aC,
                                                          children: ef.comment,
                                                      }),
                                                e6(ef, g)
                                                    ? (0, r.jsx)("div", {
                                                          className: u8.eB,
                                                          children: H.confirmingRemove
                                                              ? (0, r.jsxs)(r.Fragment, {
                                                                    children: [
                                                                        (0, r.jsx)(y.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: u8.nv,
                                                                            children: ec.intl.string(ed.default.wOHvts),
                                                                        }),
                                                                        (0, r.jsx)(C.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: ec.intl.string(ed.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                V({ ...H, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, r.jsx)(C.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: ec.intl.string(ed.default.friIzR),
                                                                            "data-testid":
                                                                                "conjure-design-remove-confirm",
                                                                            onClick: eC,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, r.jsxs)(r.Fragment, {
                                                                    children: [
                                                                        (0, r.jsx)(C.$, {
                                                                            variant: "critical-secondary",
                                                                            size: "sm",
                                                                            text: ec.intl.string(ed.default.friIzR),
                                                                            onClick: () =>
                                                                                V({
                                                                                    ...H,
                                                                                    editing: !1,
                                                                                    confirmingRemove: !0,
                                                                                }),
                                                                        }),
                                                                        H.editing
                                                                            ? (0, r.jsx)(C.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !eK(H.draft),
                                                                                  text: ec.intl.string(
                                                                                      ed.default.iicRP9,
                                                                                  ),
                                                                                  onClick: eN,
                                                                              })
                                                                            : (0, r.jsx)(C.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: ec.intl.string(
                                                                                      ed.default["6eW9lg"],
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
function oi(e) {
    let { authorId: t } = e,
        l = (0, m.bG)([tq.default], () => tq.default.getUser(t), [t]);
    return (0, r.jsx)(az.eu, {
        src: null == l ? null : aU.Ay.getUserAvatarURL(l),
        size: aF._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function os(e) {
    let t,
        l,
        n,
        a,
        s,
        u,
        { point: o, frame: d, authorId: c, title: m, testId: f, onDismiss: h, onMouseLeave: g, children: x } = e,
        p = i.useRef(null),
        v = i.useRef(null),
        [j, b] = i.useState(u9);
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
            originX: A,
            originY: N,
        } = ((l = Math.max((t = d.left + 8), d.left + d.width - 300 - 8)),
        (a = Math.max((n = d.top + 8), d.top + d.height - 160 - 8)),
        (s = Math.min(Math.max(o.x - j.x, t), l)),
        { left: s, top: (u = Math.min(Math.max(o.y - j.y, n), a)), originX: o.x - s, originY: o.y - u }),
        C = { left: k, top: w, "--custom-conjure-card-origin-x": `${A}px`, "--custom-conjure-card-origin-y": `${N}px` };
    return (0, r.jsxs)("div", {
        ref: p,
        className: u8.Nr,
        style: C,
        "data-testid": f,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, r.jsxs)("div", {
                className: u8.MY,
                children: [
                    (0, r.jsx)("span", { ref: v, className: u8.ip, children: (0, r.jsx)(oi, { authorId: c }) }),
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: u8.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: u8.zI, children: x }),
        ],
    });
}
let ou = 300,
    oo = 2;
function od(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function oc(e, t, l) {
    if (null == t || l <= 0) return !1;
    let n = t.width / l,
        a = t.height / l;
    return !(n < 1) && !(a < 1) && e.rect.width >= 0.98 * n && e.rect.height >= 0.98 * a;
}
function om(e) {
    let { box: t } = e;
    return (0, r.jsx)("div", { className: u8.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var of = l(659723),
    oh = l(697744),
    og = l(130324);
function ox(e) {
    let t = (0, oh.c)(),
        { events: l, getDuration: n } = t;
    return (
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
        }, [l, n]),
        i.useEffect(() => {
            let t = setInterval(l.onMouseEnter, e);
            return () => clearInterval(t);
        }, [l, e]),
        t
    );
}
function op(e) {
    let { className: t } = e,
        { Component: l, events: n } = ox(3e4);
    return (0, r.jsxs)("div", {
        className: t,
        onMouseEnter: n.onMouseEnter,
        onMouseLeave: n.onMouseLeave,
        children: [
            (0, r.jsx)(l, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, r.jsx)(y.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: og.o,
                children: ec.intl.string(ed.default.AyiQEp),
            }),
        ],
    });
}
var ov = l(251363),
    oj = l(944142),
    ob = l(532247),
    oy = l(501628);
function ok(e) {
    let { progress: t } = e,
        { Component: l } = ox(1500),
        n = J.Q_.useSetting();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, r.jsx)(y.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, r.jsx)("div", {
                className: oy.Ci,
                children: Array.from({ length: t.stepCount }, (e, l) =>
                    (0, r.jsx)(
                        "span",
                        {
                            className: oy.PM,
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
function ow(e) {
    let { projectId: t, applicationId: l, previewApplicationId: n, surface: a } = e,
        s = null != t && null != l && l === n,
        u = (0, m.bG)([oj.A], () => (s ? oj.A.getLiveReload(t) : null), [s, t]),
        o = (0, B.A)(l, a)?.id ?? null,
        d = u?.phase ?? null,
        c = (function (e, t) {
            let l = (0, ob.dv)(e),
                [n, a] = i.useState(null),
                [r, s] = i.useState(l);
            r !== l && (s(l), a(null == l ? (0, ob.QP)(e, r) : null));
            let u = (0, m.bG)(
                    [tC.A],
                    () => {
                        let e = tC.A.getFrame(t);
                        return (0, tR.x1)(e) && e.data.proxyTicketRefreshing;
                    },
                    [t],
                ),
                o = i.useRef(u),
                d = i.useRef(!1);
            return (
                i.useEffect(() => {
                    ((o.current = u), u && (d.current = !0));
                }, [u]),
                i.useEffect(() => {
                    if (null == n) return;
                    function e() {
                        return a(null);
                    }
                    function l(l) {
                        null != l.target && l.target === (0, ov.o)(null, t) && e();
                    }
                    ((d.current = o.current), document.addEventListener("load", l, !0));
                    let r = window.setTimeout(() => {
                            d.current || e();
                        }, 4e3),
                        i = window.setTimeout(e, 15e3);
                    return () => {
                        (document.removeEventListener("load", l, !0), window.clearTimeout(r), window.clearTimeout(i));
                    };
                }, [n, t]),
                n
            );
        })(d, o),
        f = (0, ob.h_)(d, u?.step ?? null, c);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(A.A, { tag: "div", role: "status", "aria-live": "polite", children: f?.title ?? "" }),
            null != f
                ? (0, r.jsx)("div", {
                      className: oy.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, r.jsx)(ok, { progress: f }),
                  })
                : null,
        ],
    });
}
var oA = l(343030),
    oN = l(317608),
    oC = l(206600),
    oS = l(964404);
let oE = { width: 1 / 0, height: 1 / 0 };
function oI(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oE;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var oT = l(702083);
function oM(e) {
    let { children: t } = e,
        { mobile: l, landscape: n } = (0, m.cf)([tg.A], () => ({
            mobile: tg.A.isBuilderPreviewMobile(),
            landscape: tg.A.isBuilderPreviewLandscape(),
        })),
        a = i.useRef(null),
        [s, o] = i.useState(null);
    i.useLayoutEffect(() => {
        let e = a.current;
        if (null == e) return;
        function t() {
            if (null == e) return;
            let t = { width: e.clientWidth, height: e.clientHeight };
            o((e) => (e?.width === t.width && e.height === t.height ? e : t));
        }
        t();
        let l = new ResizeObserver(t);
        return (l.observe(e), () => l.disconnect());
    }, []);
    let d = null != s && s.width > 0 ? s : null,
        c = l ? oI(n, d ?? void 0) : null;
    return (0, r.jsx)("div", {
        ref: a,
        className: u()(oT.dw, { [oT.PQ]: null != c }),
        children: (0, r.jsx)("div", { className: u()(oT.R9, { [oT.Vg]: null != c }), style: c ?? void 0, children: t }),
    });
}
var o_ = l(347927);
function oP(e) {
    let { title: t, body: l, wide: n = !1, children: a } = e;
    return (0, r.jsxs)("div", {
        className: u()(o_.Bf, n && o_.Qx),
        children: [
            (0, r.jsxs)("div", {
                className: o_.Ux,
                children: [
                    (0, r.jsx)(T.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, r.jsx)(y.E, { variant: "text-md/medium", color: "text-subtle", children: l }),
                ],
            }),
            a,
        ],
    });
}
var oR = l(957272);
function oL(e) {
    let { applicationId: t, surface: l, frameOverlay: n } = e,
        { frame: a, state: s } = (0, oC.A)({ applicationId: t, surface: l }),
        u = (0, tR.VA)(t, l);
    switch (
        (i.useEffect(
            () => (
                !(function (e) {
                    let t = tC.A.getFrame(e);
                    if (null == t || tS.A.getWindowOpen(eb.MLl.ACTIVITY_POPOUT)) return;
                    let l = tC.A.getMainFrame()?.id === e;
                    t.intent === tR.sV.MAIN
                        ? (l || q.A.promoteFrame(e), q.A.resetFrameLayoutModes(e))
                        : l && q.A.clearMainFrameSlot();
                })(u),
                () => {
                    let e;
                    null != (e = tC.A.getFrame(u)) &&
                        ((0, tR.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        oS.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === tR.sV.INLINE && q.A.promoteFrame(u),
                              q.A.updateFrameLayoutMode({ frameId: u, layoutMode: tR.y0.PIP }))
                            : e.intent === tR.sV.MAIN && q.A.demoteMainFrame(u));
                }
            ),
            [u],
        ),
        s)
    ) {
        case oC.n.Launched: {
            let e = (0, r.jsx)(oN.A, { frameId: a.id, level: oA.A.WithinAppContent, className: oR.Z7, overlay: n });
            return (0, tj.Q5)(l) ? (0, r.jsx)(oM, { children: e }) : e;
        }
        case oC.n.RenderingElsewhere:
            return (0, r.jsx)("div", {
                className: oR.qs,
                children: (0, r.jsx)(oP, {
                    title: ec.intl.string(ed.default["9kpdo7"]),
                    body: ec.intl.string(ed.default.iIA8Nj),
                }),
            });
        case oC.n.NoApplication:
            return (0, r.jsx)(op, { className: oR.qs });
        case oC.n.DoesNotSupportSurface:
            return (0, r.jsx)("div", {
                className: oR.qs,
                children: (0, r.jsx)(oP, {
                    title: ec.intl.string(ed.default["7k4GyN"]),
                    body: ec.intl.string(ed.default.zdIy3R),
                }),
            });
        case oC.n.Error:
            return (0, r.jsxs)("div", {
                className: oR.qs,
                children: [
                    (0, r.jsx)(T.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: ec.intl.string(ed.default.lTPbnG),
                    }),
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: oR.tj,
                        children: ec.intl.string(ed.default.e6GiAZ),
                    }),
                ],
            });
        case oC.n.AwaitingLaunch:
        case oC.n.Loading:
            return (0, r.jsx)("div", { className: oR.qs, children: (0, r.jsx)(N.y, {}) });
    }
}
var oD = l(308528),
    oz = l(334738),
    oF = l(688438),
    oO = l(355622),
    oU = l(531685),
    oG = l(365971),
    o$ = l(703462);
function oq(e) {
    let { message: t } = e;
    return (0, r.jsxs)("div", {
        className: o$.f,
        children: [
            (0, r.jsx)(as.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, r.jsx)(y.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function oB() {
    return (0, r.jsx)("div", { className: o$.f, children: (0, r.jsx)(N.y, {}) });
}
function oH(e) {
    let t,
        l,
        { previewApplicationId: n } = e,
        { data: a, isLoading: s } = (0, U.YY)(n),
        u = a?.bot?.id ?? null,
        o = (0, m.bG)([X.A], () => {
            if (null == u) return null;
            let e = X.A.getDMFromUserId(u);
            return null != e ? X.A.getChannel(e) : null;
        });
    ((t = o?.id ?? null),
        i.useEffect(() => {
            null != t && oD.A.preload(eb.ME, t);
        }, [t]),
        (l = (0, m.bG)([oU.A], () => oU.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !l) return;
            let e = (0, oG.Xg)();
            return (
                (0, oz.yl)(t, e),
                () => {
                    (0, oz.dm)(t, e);
                }
            );
        }, [t, l]));
    let [d, c] = i.useState(null),
        f = null != u && d === u;
    return (i.useEffect(() => {
        if (null == u || null != o) return;
        let e = !1;
        return (
            oD.A.openPrivateChannel({ recipientIds: u, navigateToChannel: !1 }).catch(() => {
                e || c(u);
            }),
            () => {
                e = !0;
            }
        );
    }, [u, o]),
    s && null == a)
        ? (0, r.jsx)(oB, {})
        : null == u || f
          ? (0, r.jsx)(oq, { message: ec.intl.string(ed.default["VP/O8s"]) })
          : null == o
            ? (0, r.jsx)(oB, {})
            : (0, r.jsx)("div", {
                  className: o$.g,
                  children: (0, r.jsx)(oF.A, { channel: o, guild: null, chatInputType: oO.oU.SIDEBAR }, o.id),
              });
}
var oV = l(887909),
    oK = l(570962),
    oW = l(998475);
function oJ(e) {
    let {
        label: t,
        title: l,
        subtitle: n,
        header: a,
        body: i,
        actions: s,
        nextStep: o,
        appDetails: d,
        hasContentBackground: c,
        noPadding: m,
        obscured: f,
    } = (0, oV.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, r.jsxs)("section", {
        className: oW.Nr,
        "aria-label": t,
        children: [
            (0, r.jsx)("div", {
                className: oW.rf,
                children: (0, r.jsx)(oK.A, {
                    obscured: !0 === f,
                    children: (0, r.jsxs)("div", {
                        className: oW.Gq,
                        children: [
                            null != l
                                ? (0, r.jsxs)("div", {
                                      className: oW.z3,
                                      children: [
                                          (0, r.jsx)(T.D, {
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
                                className: u()(oW.Qs, c ? oW.cw : null, m ? oW.pN : null),
                                children: [i, null == o ? d : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != s && s.length > 0
                ? (0, r.jsx)("div", {
                      className: oW.o1,
                      children: s.map((e, t) => (0, r.jsx)(C.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var oX = l(409478),
    oY = l(652227);
function oQ(e) {
    let {
            applicationId: t,
            previewApplicationId: l,
            surface: n,
            previewReady: a,
            previewGate: i,
            availability: s,
            activeMode: u,
            widgetApplicationId: o,
            frameOverlay: d,
        } = e,
        { data: c, isLoading: m } = (0, U.YY)(t ?? void 0);
    if (i?.type === "checking") return (0, r.jsx)("div", { className: oY.q, children: (0, r.jsx)(N.y, {}) });
    if (i?.type === "permissions")
        return (0, r.jsx)("div", {
            className: oY.q,
            children: null == i.authorizeProps ? (0, r.jsx)(N.y, {}) : (0, r.jsx)(oJ, { ...i.authorizeProps }),
        });
    if (!a) return (0, r.jsx)(op, { className: oY.q });
    if (null == t) return null;
    if (m && null == c) return (0, r.jsx)("div", { className: oY.q, children: (0, r.jsx)(N.y, {}) });
    let f = s.showModeSwitch && null != u ? { role: "tabpanel", id: (0, tz.z3)(u), "aria-label": (0, tz.kZ)(u) } : {};
    return (0, r.jsxs)("div", {
        className: oY.R,
        ...f,
        children: [
            (0, tv.yf)(s, u) ? (0, r.jsx)(oL, { applicationId: t, surface: n, frameOverlay: d }) : null,
            "widget" === u && null != o
                ? "unavailable-authorization-revoked" === s.profileState
                    ? (0, r.jsx)("div", {
                          className: oY.q,
                          children: (0, r.jsx)(oP, {
                              wide: !0,
                              title: ec.intl.string(ed.default["08U+YO"]),
                              body: ec.intl.string(ed.default.pKBfrc),
                          }),
                      })
                    : (0, r.jsx)(oX.A, { applicationId: o })
                : null,
            "bot" === u && null != l ? (0, r.jsx)(oH, { previewApplicationId: l }) : null,
        ],
    });
}
var oZ = l(175841),
    o0 = l(750506),
    o1 = l(867193),
    o2 = l(417760);
function o3(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function o5(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function o4(e) {
    let { phase: t, projectId: l, onOpenPublishedApp: n, compact: a } = e,
        { stop: s, stopping: o } = (function (e) {
            let t = (0, m.bG)([tH.Ay], () => null != e && tH.Ay.isThinking(e)),
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
        d = (0, tx.CU)(l),
        c = "controlling" === t,
        f = ec.intl.string(c ? (d ? ed.default["VJW/5P"] : ed.default["+hD2Iz"]) : ed.default["h+i1r9"]),
        h =
            null != n
                ? (0, r.jsx)(C.$, {
                      variant: "overlay-secondary",
                      size: "sm",
                      text: ec.intl.string(ed.default["1NcO7H"]),
                      onClick: n,
                  })
                : null,
        g =
            null != s
                ? (0, r.jsx)(C.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: ec.intl.string(ed.default.oU59sU),
                      loading: o,
                      onClick: s,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return a
        ? (0, r.jsxs)("div", {
              className: u()(o2.M0, o2.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  c
                      ? (0, r.jsx)(i9.i, { size: 12, color: "currentColor" })
                      : (0, r.jsx)(oZ.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, r.jsx)(y.E, { variant: "text-sm/semibold", color: "none", className: o2.ID, children: f }),
                  c ? (0, r.jsx)(A.A, { children: ec.intl.string(ed.default.fg1sor) }) : null,
                  c ? (0, r.jsxs)("div", { className: o2.lC, children: [h, g] }) : null,
              ],
          })
        : (0, r.jsxs)("div", {
              className: o2.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, r.jsxs)("div", {
                      className: o2.sp,
                      children: [
                          (0, r.jsx)(oZ.SparklesIcon, { size: "sm", color: "currentColor" }),
                          c ? (0, r.jsx)(i9.i, { size: 12, color: "currentColor" }) : null,
                          (0, r.jsxs)("div", {
                              className: o2.f4,
                              children: [
                                  (0, r.jsx)(y.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: o2.w9,
                                      children: f,
                                  }),
                                  c
                                      ? (0, r.jsx)(y.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: o2.Rb,
                                            children: ec.intl.string(ed.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  c ? (0, r.jsxs)("div", { className: o2.lC, children: [h, g] }) : null,
              ],
          });
}
function o7(e) {
    let {
            projectId: t,
            applicationId: l,
            previewApplicationId: n,
            resolveTarget: a,
            frameId: s,
            onOpenPublishedApp: u = null,
        } = e,
        o = (0, tx.Zv)(null != l && l === n ? t : null),
        d = (function (e) {
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
        })(o),
        c = (0, te.useHasAnyModalOpen)(),
        m = tP(s);
    i.useEffect(() => {
        o &&
            m &&
            null != s &&
            (function (e) {
                if (!tM(e)) return;
                let t = tT(e);
                null != t && (0, tE.sP)(t);
            })(s);
    }, [o, m, s]);
    let [f, h] = i.useState(null),
        [g, x] = i.useState(null),
        [p, v] = i.useState(null),
        j = "idle" !== d;
    i.useEffect(() => {
        if (!j) return;
        function e() {
            let e = o3(a());
            h((t) => (o5(t, e) ? t : e));
            let t = null == g ? null : o3(g);
            (v((e) => (o5(e, t) ? e : t)), null != g && (0, o1.C)(g.getBoundingClientRect().height));
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
                    null != g && (0, o1.C)(0));
            }
        );
    }, [j, a, g]);
    let b = "idle" !== d && null != f,
        y = b && "controlling" === d && !c,
        k = null != f && f.width < 420,
        w = null == f ? void 0 : { left: f.left, top: f.top, width: f.width, height: f.height },
        A =
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
        N = (function () {
            let [e] = i.useContext(o0.uY),
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
                      className: o2.D,
                      "data-phase": d,
                      children: (0, r.jsx)("div", {
                          className: o2.QF,
                          children: (0, r.jsx)(o4, { phase: d, projectId: t, onOpenPublishedApp: u, compact: k }),
                      }),
                  })
                : null,
            (0, uY.createPortal)(
                (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)("div", {
                        className: o2.y4,
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-control-announcer",
                        children:
                            "controlling" === d
                                ? ec.intl.string(ed.default.oWcemF)
                                : "handoff" === d
                                  ? ec.intl.string(ed.default["h+i1r9"])
                                  : "",
                    }),
                }),
                document.body,
            ),
            y
                ? (0, uY.createPortal)(
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", {
                                  className: o2.ys,
                                  style: A,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, r.jsx)("div", {
                                  className: o2.om,
                                  style: w,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                          ],
                      }),
                      N,
                  )
                : null,
        ],
    });
}
var o6 = l(399503),
    o8 = l(853555),
    o9 = l(558960),
    de = l(187645);
let dt = new Map(),
    dl = !1;
function dn() {
    let e = new Map();
    for (let t of new Set([...tH.Ay.getActivityOrderedProjectIds(), ...(0, tx.T7)()])) {
        if (!tH.Ay.isThinking(t) && !(0, tx.wK)(t)) continue;
        let l = (function (e) {
            let t = eS.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let l = (0, tj.Rc)(t);
            return (0, tR.x1)(l) ? l.id : null;
        })(t);
        null != l && e.set(t, l);
    }
    for (let [n, a] of [...dt]) {
        var t, l;
        e.get(n) !== a.frameId &&
            ((t = n),
            (l = a),
            dt.delete(t),
            l.unregisterLookup(),
            o9.A.removeFrameTarget(l.frameId, l.element),
            l.element.remove());
    }
    for (let [t, l] of e)
        dt.has(t) ||
            (function (e, t) {
                let l = document.createElement("div");
                ((l.className = de.t),
                    l.setAttribute("inert", ""),
                    l.setAttribute("aria-hidden", "true"),
                    da(l),
                    document.body.appendChild(l));
                let n = { frameId: t, element: l, unregisterLookup: () => {} };
                (dt.set(e, n),
                    (n.unregisterLookup = (0, o8.Ng)(e, () => (0, ov.o)(l, t))),
                    o9.A.registerFrameTarget(t, l, oA.A.Backstage, void 0));
            })(t, l);
    for (let e of dt.values()) da(e.element);
}
function da(e) {
    let t = tg.A.isBuilderPreviewMobile();
    e.classList.toggle(de.L, !t);
    let l = t ? oI(tg.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != l ? `${l.width}px` : ""), (e.style.height = null != l ? `${l.height}px` : ""));
}
var dr = l(873727),
    di = l(147248),
    ds = l(418842),
    du = l(363195),
    dd = l(818023);
let dc = null;
var dm = l(602853),
    df = l(517461),
    dh = l(487336);
function dg(e) {
    let { open: t, maxWidth: l, onWidthChange: n, children: a } = e,
        s = (0, dm.r)(z.A.modules.chat.RESIZE_HANDLE_WIDTH),
        u = i.useRef(null),
        [o, d] = (0, df.V)("VibegrationsChatSidebarWidth", 460),
        [c, m] = i.useState(o ?? 460),
        f = (0, nB.clamp)(c, 360, l);
    i.useLayoutEffect(() => {
        n(t ? f + s : 0);
    }, [f, t, s, n]);
    let h = (0, uc.A)({
            minDimension: 360,
            maxDimension: l,
            resizableDomNodeRef: u,
            onElementResize: m,
            onElementResizeEnd: d,
            orientation: uc.R.HORIZONTAL_LEFT,
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
        className: dh.pz,
        hidden: !t,
        children: [
            (0, r.jsx)("div", { className: dh.Di, onPointerDown: g }),
            (0, r.jsx)("div", { ref: u, className: dh.kL, style: { width: f }, children: a }),
        ],
    });
}
var dx = l(541940);
function dp(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: n,
            previewApplicationId: a,
            surface: s,
            header: o,
            mainClassName: d,
            content: c,
            sidebar: f,
            onOpenPublishedApp: h,
            showsFrame: g,
        } = e,
        [x, p] = i.useState(null),
        v = (0, B.A)(n, s),
        j = v?.id ?? null;
    (!(function (e, t) {
        let l = (0, m.bG)([du.A], () => (0, dr.x4)(du.A.theme)),
            n = (0, m.bG)([di.A], () => di.A.gradientPreset),
            {
                reducedMotion: a,
                fontScale: r,
                highContrast: s,
                forcedColors: u,
                underlineLinks: o,
            } = (0, m.cf)([rH.Ay], () => ({
                reducedMotion: rH.Ay.useReducedMotion,
                fontScale: (0, dr.U0)(),
                highContrast: rH.Ay.isHighContrastModeEnabled,
                forcedColors: rH.Ay.useForcedColors,
                underlineLinks: rH.Ay.alwaysShowLinkDecorations,
            })),
            d = J.hH.useSetting(),
            c = (0, ds.C)(),
            f = i.useRef(!1),
            h = i.useRef(!1),
            g = i.useRef(0),
            x = i.useRef(null),
            p = i.useCallback(() => {
                let n = (0, ov.o)(e, t);
                if (null == n) return;
                x.current = n;
                let i = {
                    revision: ++g.current,
                    baseTheme: l,
                    customTheme: (0, dr.Lq)(),
                    uiDensity: c,
                    messageDisplayCompact: d,
                    fontScale: r,
                    reducedMotion: a,
                    highContrast: s,
                    forcedColors: u,
                    underlineLinks: o,
                };
                (0, u7.W)(n, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [l, u, r, t, s, d, e, a, c, o]),
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
                let l = (0, ov.o)(e, t);
                null != l && l !== x.current && j();
            }),
            i.useEffect(() => {
                function l(l) {
                    l.target === (0, ov.o)(e, t) && ((x.current = null), j());
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
            if (null != t) return (0, o8.Ng)(t, () => (0, ov.o)(x, j));
        }, [t, x, j]));
    let b = i.useCallback(() => (0, ov.o)(x, j), [x, j]),
        y = i.useCallback(() => (g ? (0, ov.o)(x, j) : x), [g, x, j]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: u()(dx.Mh, d),
                children: [
                    o,
                    (0, r.jsx)(o7, {
                        projectId: t ?? null,
                        applicationId: n,
                        previewApplicationId: a,
                        resolveTarget: y,
                        frameId: j,
                        onOpenPublishedApp: h,
                    }),
                    (0, r.jsx)("div", { ref: p, className: dx.fm, children: c }),
                ],
            }),
            f,
            (0, r.jsx)(or, {
                projectId: t ?? null,
                applicationId: n,
                previewApplicationId: a,
                resolveIframe: b,
                toggleRef: l,
            }),
        ],
    });
}
function dv(e) {
    let {
        projectId: t,
        designFeedbackToggleRef: l,
        applicationId: n,
        previewApplicationId: a,
        surface: s,
        header: o,
        chatOpen: d,
        onCloseChat: c,
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
        onOpenPublishedApp: A = null,
    } = e;
    (0, o6.k)(t, w);
    let N = s.type === lR.U.MAIN || (0, tj.Q5)(s);
    !(function (e) {
        let { mobile: t, landscape: l } = (0, m.cf)([tg.A], () => ({
            mobile: tg.A.isBuilderPreviewMobile(),
            landscape: tg.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let n;
            if (null != e) {
                if (t) ((n = l ? dd.aX.LANDSCAPE : dd.aX.PORTRAIT), (dc = e));
                else {
                    if (dc !== e) return;
                    ((n = dd.aX.UNHANDLED), (dc = null));
                }
                nc.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: n, applicationId: e });
            }
        }, [e, t, l]);
    })(N ? n : null);
    let C = i.useRef(null),
        [S, E] = i.useState(0);
    (i.useLayoutEffect(() => {
        if (N) return ((0, eC.HV)(n), () => (0, eC.HV)(null));
    }, [n, N]),
        i.useEffect(() => {
            null != t &&
                ((0, er.Hc)(t),
                dl ||
                    ((dl = !0),
                    tH.Ay.addChangeListener(dn),
                    eS.Ay.addChangeListener(dn),
                    tC.A.addChangeListener(dn),
                    tg.A.addChangeListener(dn),
                    (0, tx.W3)(dn),
                    dn()));
        }, [t]),
        i.useLayoutEffect(() => {
            let e = C.current;
            if (null == e) return;
            function t() {
                null != e && E(e.getBoundingClientRect().width);
            }
            t();
            let l = new ResizeObserver(t);
            return (l.observe(e), () => l.disconnect());
        }, []),
        i.useLayoutEffect(() => () => (0, eC.Zq)(0), []));
    let I = Math.max(360, S - 320),
        T = d || N;
    return (0, r.jsx)("div", {
        ref: C,
        className: dx.LB,
        children: (0, r.jsx)(dp, {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: n,
            previewApplicationId: a,
            surface: s,
            header: o,
            onOpenPublishedApp: A,
            showsFrame: (0, tv.yf)(y, k),
            mainClassName: null == o ? void 0 : u()(dx.ez, { [dx.zt]: d }),
            content: (0, r.jsx)(oQ, {
                applicationId: n,
                previewApplicationId: a,
                surface: s,
                previewReady: j,
                previewGate: b,
                availability: y,
                activeMode: k,
                widgetApplicationId: w,
                frameOverlay: (0, r.jsx)(ow, { projectId: t, applicationId: n, previewApplicationId: a, surface: s }),
            }),
            sidebar:
                null != t && T
                    ? (0, r.jsx)(dg, {
                          open: d,
                          maxWidth: I,
                          onWidthChange: eC.Zq,
                          children: (0, r.jsx)("div", {
                              className: dx.cO,
                              children: x
                                  ? (0, r.jsx)(uX, { projectId: t, onClose: p ?? (() => {}) }, t)
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(of.A, { projectId: t }),
                                            (0, r.jsx)(lL.Ay, {
                                                "aria-label": ec.intl.string(ec.t["/VQax8"]),
                                                toolbar: (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        f,
                                                        null == c
                                                            ? null
                                                            : (0, r.jsx)(lL.Ay.Icon, {
                                                                  icon: L.P,
                                                                  tooltip: ec.intl.string(ed.default.JD6Oit),
                                                                  onClick: c,
                                                              }),
                                                    ],
                                                }),
                                                children: (0, r.jsx)(lL.Ay.Title, {
                                                    children: ec.intl.string(ec.t["/VQax8"]),
                                                }),
                                            }),
                                            (0, r.jsx)("div", {
                                                className: dx.cb,
                                                children: (0, r.jsx)(
                                                    sj,
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
var dj = l(631417);
function db(e) {
    let { title: t, actions: l, breadcrumb: n } = e;
    return (0, r.jsx)(V.A, {
        hideSearch: !0,
        toolbar: l,
        className: dj.wx,
        "aria-label": t,
        children: (0, r.jsxs)("div", {
            className: dj.QF,
            children: [
                (0, r.jsx)(D.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: z.A.colors.TEXT_STRONG,
                    className: dj.Kk,
                }),
                null != n
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(V.A.Title, { onClick: n.onClick, children: n.title }),
                              (0, r.jsx)(V.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, r.jsx)(V.A.Title, { className: dj.Qw, wrapperClassName: dj.DD, children: t }),
            ],
        }),
    });
}
var dy = l(683071);
let dk = "conjuring-help";
var dw = l(173114);
function dA() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: l,
            } = (0, m.cf)([tq.default, Q.A, lS.Ay, iC.A], () => {
                let e = tq.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of Q.A.getGuildsArray()) {
                    if (!t.features.has(eb.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let l = lS.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, G.m1)(t, tq.default, iC.A) === dk;
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
                    ? (0, K.pX)(eb.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, le.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, r.jsx)("div", {
              className: dw.l,
              children: (0, r.jsx)(dy.w, {
                  type: "info",
                  iconAlign: "center",
                  message: ec.intl.format(ed.default["6anmu1"], { channel: dk, onNavigate: t }),
                  role: "static",
              }),
          });
}
var dN = l(323140);
function dC(e) {
    return (0, r.jsx)(h.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function dS(e) {
    return (0, r.jsx)(g.u, { ...e, size: "custom", width: 20, height: 20 });
}
function dE(e) {
    return (0, r.jsx)(x.k, { ...e, size: "custom", width: 20, height: 20 });
}
function dI(e) {
    return (0, r.jsx)(p.H, { ...e, size: "custom", width: 20, height: 20 });
}
let dT = {
    showPublishBlocked: function (e) {
        (0, te.openModal)((t) => (0, r.jsx)(lT, { ...t, reason: e }));
    },
    openPublishNotes: lM.A,
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
function dM(e) {
    var t;
    let l,
        n,
        a,
        s,
        o,
        h,
        g,
        x,
        p,
        C,
        { project: S, guildId: E, onSelect: I, onRemix: T, shared: M = !1 } = e,
        _ =
            ((l = S.id),
            (n = S.name),
            (a = i.useRef(!1)),
            (s = i.useCallback(() => {
                a.current ||
                    ((a.current = !0),
                    (0, v.P)((0, j.o)(ec.intl.formatToPlainString(ed.default.aN2JdD, { name: n }), b.Ck.MESSAGE)),
                    eh(l, n)
                        .catch((e) => {
                            let t;
                            (console.error("[vibegrations] project export failed", l, e),
                                (0, v.P)(
                                    (0, j.o)(
                                        409 === (t = e instanceof er.xE ? e.status : null)
                                            ? ec.intl.string(ed.default["9oqbEw"])
                                            : 404 === t
                                              ? ec.intl.string(ed.default["0W8uLq"])
                                              : ec.intl.string(ed.default.N8753A),
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
                onImport: (o = eg(
                    i.useCallback(
                        (e) => {
                            let t = ef(e);
                            null != t
                                ? (0, v.P)((0, j.o)(t, b.Ck.FAILURE))
                                : (0, f.A)({
                                      title: ec.intl.formatToPlainString(ed.default["Gm+u1+"], { name: n }),
                                      subtitle: ec.intl.string(ed.default.M7H3sJ),
                                      confirmText: ec.intl.string(ed.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, K.pX)(eb.BVt.CHANNEL(E, ey.VV.CONJURE, l));
                                          try {
                                              await em(l, e, ec.intl.string(ed.default.Owerd3));
                                          } catch {
                                              (0, v.P)((0, j.o)(ec.intl.string(ed.default["Q+l4Hv"]), b.Ck.FAILURE));
                                          }
                                      },
                                  });
                        },
                        [l, n, E],
                    ),
                )).open,
                importInput: o.input,
            }),
        P =
            null == S.updated_at
                ? null
                : ec.intl.formatToPlainString(ed.default.AXydi3, { time: d()(S.updated_at).fromNow() }),
        R = (0, tG.wu)(S),
        L =
            (0, m.bG)([Q.A], () => (null == R ? null : (Q.A.getGuild(R)?.name ?? null)), [R]) ??
            ec.intl.string(ed.default["3QFps8"]),
        D = (0, m.bG)([eS.Ay], () => eS.Ay.isProjectDeleting(S.id), [S.id]),
        z =
            ((t = M ? S : null),
            (h = t?.id),
            (g = t?.owner_user_id),
            (x = (0, m.yK)(
                [tH.Ay],
                () =>
                    null == h
                        ? []
                        : [
                              ...new Set(
                                  tH.Ay.getMessages(h)
                                      .flatMap((e) => (null != e.user_id && e.user_id !== g ? [e.user_id] : []))
                                      .reverse(),
                              ),
                          ],
                [h, g],
            )),
            i.useEffect(() => {
                null != g && (tX(g), x.forEach(tX));
            }, [g, x]),
            (p = (0, m.bG)([tq.default], () => (null == g ? null : tq.default.getUser(g)), [g])),
            (C = (0, m.yK)([tq.default], () => x.map((e) => tq.default.getUser(e)).filter((e) => null != e), [x])),
            i.useMemo(
                () =>
                    null == p
                        ? null
                        : {
                              creator: p,
                              collaborators: C,
                              label: (function (e, t) {
                                  let l;
                                  return 0 === t.length
                                      ? ec.intl.formatToPlainString(ed.default.t5RWBS, { creator: e })
                                      : ec.intl.formatToPlainString(ed.default["b5uCe/"], {
                                            creator: e,
                                            collaborators:
                                                0 === (l = void 0 ?? t.length)
                                                    ? ""
                                                    : 1 === l
                                                      ? ec.intl.formatToPlainString(ec.t["8s9z8P"], { first: t[0] })
                                                      : 2 === l
                                                        ? ec.intl.formatToPlainString(ec.t["i0K/dw"], {
                                                              first: t[0],
                                                              second: t[1],
                                                          })
                                                        : 3 === l
                                                          ? ec.intl.formatToPlainString(ec.t["/KSOKY"], {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                            })
                                                          : ec.intl.formatToPlainString(ec.t.xpU76u, {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                                count: l - 3,
                                                            }),
                                        });
                              })(
                                  (0, tB.mG)(p),
                                  C.map((e) => (0, tB.mG)(e)),
                              ),
                          },
                [p, C],
            )),
        O = i.useId(),
        U = (0, r.jsx)(y.E, { variant: "text-md/semibold", color: "text-strong", className: dN.j1, children: S.name }),
        G = (0, ek.oF)(S.id),
        $ = {
            projectId: S.id,
            projectName: S.name,
            guildId: E,
            projectGuildId: S.guild_id,
            isOwner: (0, eS.PV)(S),
            canRemix: (0, eS.H_)(S),
            onRemix: T,
            onExport: _.onExport,
            onImport: _.onImport,
        };
    return (0, r.jsxs)("div", {
        className: u()(dN.OY, { [dN.Wy]: D }),
        "aria-busy": D,
        children: [
            (0, r.jsx)(tt.Ay, { projectId: S.id }),
            null == G || D ? null : (0, r.jsx)("div", { className: dN.SB, "aria-hidden": !0 }),
            (0, r.jsxs)(k.D, {
                className: dN.W6,
                onClick: D ? void 0 : I,
                onContextMenu: function (e) {
                    D || (0, F.jA)(e, () => (0, r.jsx)(lu, { ...$, onCloseMenu: F.Z_ }));
                },
                tabIndex: D ? -1 : void 0,
                "aria-describedby": null != z ? O : void 0,
                children: [
                    (0, r.jsx)(ld.A, { project: S, size: "md", className: dN.VJ }),
                    (0, r.jsxs)("div", {
                        className: dN.MM,
                        children: [
                            (0, r.jsxs)("div", {
                                className: dN.Ub,
                                children: [
                                    null != z ? (0, r.jsx)(w.m, { text: z.label, ariaHidden: !0, children: U }) : U,
                                    null == z || D ? null : (0, r.jsx)(lf, { creator: z, className: dN.rb }),
                                    G !== c.I.NEEDS_INPUT || D
                                        ? null
                                        : (0, r.jsxs)("div", {
                                              className: dN.fs,
                                              children: [
                                                  (0, r.jsx)(H.A, { mentionsCount: 1 }),
                                                  (0, r.jsx)(A.A, { children: ec.intl.string(ed.default.hfIuc7) }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: dN.h3,
                                children: [
                                    (0, r.jsx)(y.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: dN.Wb,
                                        children: D ? ec.intl.string(ed.default.Yh5pAc) : L,
                                    }),
                                    null == P || D
                                        ? null
                                        : (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)("span", {
                                                      className: dN.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, r.jsx)(y.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: dN.zM,
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
            null != z ? (0, r.jsx)(A.A, { id: O, children: z.label }) : null,
            (0, r.jsx)("div", {
                className: dN.M2,
                children: D
                    ? (0, r.jsx)(N.y, { type: N.t.SPINNING_CIRCLE_SIMPLE })
                    : (0, r.jsxs)("div", {
                          className: dN.Pl,
                          children: [(0, r.jsx)(lo, { ...$, trigger: "iconButton" }), _.importInput],
                      }),
            }),
        ],
    });
}
function d_(e) {
    var t;
    let { project: n, projectsLoaded: a, onBack: s, guildId: u } = e,
        [o, d] = i.useState(!0),
        [c, h] = i.useState(!1),
        g = J.Q_.useSetting(),
        [x, p] = i.useState(null),
        [k, A] = i.useState(null),
        N = n?.id ?? null,
        M = i.useRef(N),
        _ = i.useRef(!0),
        P = i.useRef(!1),
        R = i.useRef(null);
    ((M.current = N),
        i.useEffect(
            () => (
                (_.current = !0),
                () => {
                    _.current = !1;
                }
            ),
            [],
        ));
    let L = (0, m.bG)([eS.Ay], () => (null == N ? null : eS.Ay.getIntegrationStatus(N)), [N]),
        { data: D, isLoading: z } = (0, U.YY)(n?.preview_application_id ?? void 0),
        F = null != N && k !== N,
        O = L?.preview_ready === !0,
        H = L?.has_activity === !0,
        {
            availability: W,
            activeMode: Y,
            setMode: Q,
            widgetApplicationId: Z,
        } = (function (e) {
            let {
                    applicationId: t,
                    previewApplicationId: l,
                    declaredActivity: n,
                    installScope: a,
                    ownerAuthorizationRevoked: r,
                    mainCardOnly: s = !1,
                } = e,
                [u, o] = i.useState(null),
                [d, c] = i.useState(t);
            d !== t && (c(t), o(null));
            let f = null != l && l === t ? l : null,
                h = (0, m.bG)([tw.default], () => tw.default.getId()),
                { applicationWidgetConfig: g } = (0, ty.A)(h, f ?? void 0),
                x = g?.surfaces,
                p = (0, tv.yZ)({
                    widgetTop: x?.[tb.m.WIDGET_TOP] != null,
                    widgetBottom: x?.[tb.m.WIDGET_BOTTOM] != null,
                    miniProfile: x?.[tb.m.MINI_PROFILE] != null,
                }),
                v = null != f && (s ? p.hasMainCard : p.hasAny),
                { data: j } = (0, U.YY)(l ?? void 0),
                b = null != l && j?.bot?.id != null,
                { data: y, isLoading: k } = (0, U.YY)(t ?? void 0),
                w = n || (0, tk.X)(y),
                A = null != t && k && null == y,
                N = (0, tv.Xm)({
                    installScope: a,
                    hasFrame: w,
                    hasProfileWidget: v,
                    hasBotDm: b,
                    ownerAuthorizationRevoked: r,
                });
            return {
                availability: N,
                isResolving: A,
                activeMode: A ? null : (0, tv.Qs)(u, N),
                setMode: o,
                widgetApplicationId: f,
            };
        })({
            applicationId: n?.preview_application_id ?? null,
            previewApplicationId: n?.preview_application_id ?? null,
            declaredActivity: H,
            installScope: n?.install_scope ?? null,
            ownerAuthorizationRevoked: L?.owner_authorization_revoked === !0,
        });
    (0, tp.x)(N, (e) => {
        W.modes.includes(e) && Q(e);
    });
    let ee = W.modes.includes("frame"),
        et = (0, tv.Qg)({
            installScope: n?.install_scope ?? null,
            previewReady: O,
            integrationInstalled: L?.integration_installed ?? null,
            botPermissionsChanged: L?.bot_permissions_changed === !0,
        }),
        el = o && !c,
        en = ec.intl.string(el ? ed.default.JD6Oit : ed.default.xjJAQm),
        ea = i.useCallback(() => {
            if (c) {
                (h(!1), d(!0));
                return;
            }
            d((e) => !e);
        }, [c]),
        ei = i.useCallback(() => d(!1), []),
        { active: es } = e9(N);
    i.useEffect(() => {
        null != N && es && !ee && e4(N);
    }, [N, es, ee]);
    let eu = i.useRef(null),
        eo = (0, tx.Zv)(N),
        eh = ec.intl.string(eo ? ed.default.Sme0T0 : es ? ed.default.vn5Rzu : ed.default["cl/Jyl"]),
        ex = i.useCallback(() => {
            if (null != N) {
                let e;
                if (es) return void e4(N);
                (h(!1), d(!0), (e = e3(N)).active || e5(N, { ...e, active: !0 }));
            }
        }, [N, es]),
        ep = i.useCallback(() => {
            h((e) => !e && (d(!0), !0));
        }, []),
        ev = i.useCallback(() => h(!1), []),
        ej = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (null == n || P.current) return;
                let a = n.id;
                function r() {
                    return _.current && M.current === a;
                }
                ((P.current = !0),
                    h(!1),
                    d(!0),
                    p({ entry: e, status: "restoring" }),
                    (0, er.oB)(a, e.sha)
                        .then(
                            async () => {
                                if (
                                    (l &&
                                        r() &&
                                        (0, v.P)(
                                            (0, j.o)(
                                                ec.intl.formatToPlainString(ed.default.Z4n6LX, {
                                                    title: (0, tl.T4)(e.subject).short,
                                                }),
                                                b.Ck.SUCCESS,
                                            ),
                                        ),
                                    null != t)
                                ) {
                                    let e = await (0, tn.c)(a, t);
                                    null != e && (0, v.P)((0, j.o)(e, b.Ck.FAILURE));
                                }
                                r() && p({ entry: e, status: "restored" });
                            },
                            (t) => {
                                r() &&
                                    (p({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", a, t),
                                    (0, v.P)((0, j.o)(ec.intl.string(ed.default["PSdo+w"]), b.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            r() && (P.current = !1);
                        }));
            },
            [n],
        ),
        ek = (0, m.bG)([tg.A], () => tg.A.isBuilderPreviewMobile()),
        ew = ec.intl.string(ek ? ed.default.tKGF0Q : ed.default.peqEOY),
        eA = i.useCallback(() => (0, eC.GG)(!ek), [ek]),
        eN = (0, m.bG)([tg.A], () => tg.A.isBuilderPreviewLandscape()),
        eE = ec.intl.string(eN ? ed.default.tunI2l : ed.default.DoNdjA),
        eI = i.useCallback(() => (0, eC.Lw)(!eN), [eN]),
        eT = (0, tj.jS)(n),
        eM = i.useMemo(() => (0, tj.Op)(eT), [eT]),
        e_ = (0, B.A)(n?.preview_application_id ?? null, eM),
        eP = (0, tR.x1)(e_) && e_.data.proxyTicketRefreshing,
        eR = i.useCallback(() => {
            null == e_ || eP || q.A.refreshProxyTicket(e_.id);
        }, [e_, eP]),
        eL = i.useCallback(() => {
            var e, t;
            (null != n && ((e = n.id), (t = e_?.id), (0, er.Bn)(e), (0, lh.A)().leaveFrame(t)), s());
        }, [n, e_?.id, s]),
        eD = i.useCallback(() => {
            null != n && (d(!0), (0, er.dv)(n.id, ec.intl.string(ed.default.oU20rd)));
        }, [n]),
        ez = eg(
            i.useCallback(
                (e) => {
                    if (null == n) return;
                    let t = n.id,
                        l = ef(e);
                    null != l
                        ? (0, v.P)((0, j.o)(l, b.Ck.FAILURE))
                        : (0, f.A)({
                              title: ec.intl.formatToPlainString(ed.default["Gm+u1+"], { name: n.name }),
                              subtitle: ec.intl.string(ed.default.M7H3sJ),
                              confirmText: ec.intl.string(ed.default.gFHykw),
                              variant: "critical",
                              onConfirm: async () => {
                                  d(!0);
                                  try {
                                      await em(t, e, ec.intl.string(ed.default.Owerd3));
                                  } catch {
                                      (0, v.P)((0, j.o)(ec.intl.string(ed.default["Q+l4Hv"]), b.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [n],
            ),
        ),
        eF = i.useCallback(() => {
            null != n && (0, l_.A)(n, u);
        }, [n, u]),
        eO = i.useCallback(async () => {
            if (null == N || M.current !== N) return;
            R.current?.abort();
            let e = new AbortController();
            ((R.current = e), A(null));
            try {
                await (0, eC.U1)(N, e.signal);
            } catch {
            } finally {
                e.signal.aborted || R.current !== e || M.current !== N || A(N);
            }
        }, [N]);
    i.useEffect(
        () => (
            eO(),
            () => {
                (R.current?.abort(), (R.current = null));
            }
        ),
        [eO],
    );
    let eU = (0, lC.a)(n ?? null, L ?? null, u),
        eG = ((t = n?.application_id ?? null), (0, m.bG)([lS.Ay], () => (null == t ? null : (0, lg.i8)(u, t)), [u, t])),
        e$ = i.useMemo(() => (null == eG ? null : () => (0, K.pX)(eb.BVt.CHANNEL(u, eG))), [u, eG]),
        eq = i.useCallback(async () => {
            null != n && (await (0, lC.$)(n, eU));
        }, [eU, n]),
        eB = i.useCallback(async () => {
            try {
                await eq();
            } catch {}
            await eO();
        }, [eO, eq]),
        eH = i.useMemo(() => {
            let e = n?.preview_application_id;
            return null == e || z || F
                ? null
                : {
                      ...(0, tU.i)({ applicationId: e, application: D ?? null, guildId: eU }),
                      onClose: () => {
                          eB();
                      },
                  };
        }, [F, eB, eU, z, D, n?.preview_application_id]),
        eV = (0, tv.JR)(Y, et)
            ? { type: "permissions", authorizeProps: eH }
            : F && null == L
              ? { type: "checking" }
              : void 0,
        eK = (0, m.bG)([eS.Ay], () => null != N && eS.Ay.isProjectDeleting(N), [N]);
    i.useEffect(() => {
        ((null == n && a) || eK) && (0, K.bG)(eb.BVt.CHANNEL(u, ey.VV.CONJURE));
    }, [u, n, a, eK]);
    let eW = i.useMemo(() => ({ guildId: u, platform: dT, busy: F || z }), [u, F, z]),
        eJ = (0, ll.Ay)(N, eW),
        eX = eJ?.intent === "open" && "channel" === eJ.destination ? eJ.appChannelId : null,
        eY = (0, m.bG)([X.A], () => (null == eX ? null : X.A.getChannel(eX)), [eX]),
        eQ = (0, G.Ay)(eY),
        eZ = (0, $.gU)(eY),
        e0 =
            null != eQ && null != eZ
                ? ec.intl.format(ed.default.gR7PUV, {
                      channel: eQ,
                      channelIconHook: (e, t) =>
                          (0, r.jsx)(eZ, { size: "xs", color: "currentColor", className: dN.Y2 }, t),
                  })
                : eJ?.label,
        e1 = eJ?.upToDate === !0 ? ec.intl.string(ed.default.X0kGp2) : (eJ?.disabledReason ?? null),
        e2 =
            null == eJ
                ? null
                : (0, r.jsx)("div", {
                      className: dN.As,
                      children: (0, r.jsx)(w.m, {
                          text: e1,
                          asContainer: !0,
                          children: (0, r.jsx)(C.$, {
                              size: "sm",
                              variant: eJ.upToDate ? "secondary" : "primary",
                              loading: eJ.publishing,
                              disabled: eJ.disabled,
                              onClick: () => eJ.run("header"),
                              text: e0,
                          }),
                      }),
                  }),
        e7 = (0, r.jsx)(db, {
            title: n?.name ?? ec.intl.string(ed.default.G1WwgK),
            breadcrumb: { title: ec.intl.string(ed.default.uk6jhJ), onClick: s },
            actions:
                null == n
                    ? null
                    : (0, r.jsxs)("div", {
                          className: dN.FO,
                          children: [
                              W.showModeSwitch ? (0, r.jsx)(tO, { modes: W.modes, mode: Y, onChange: Q }) : null,
                              ee
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(V.A.Icon, {
                                                icon: ek ? dE : dS,
                                                tooltip: ew,
                                                "aria-label": ew,
                                                selected: ek,
                                                onClick: eA,
                                            }),
                                            ek
                                                ? (0, r.jsx)(V.A.Icon, {
                                                      icon: dI,
                                                      tooltip: eE,
                                                      "aria-label": eE,
                                                      selected: eN,
                                                      onClick: eI,
                                                  })
                                                : null,
                                            (0, r.jsx)(V.A.Icon, {
                                                ref: eu,
                                                icon: S.x,
                                                iconClassName: dN.D8,
                                                tooltip: eh,
                                                "aria-label": eh,
                                                selected: es,
                                                disabled: eo,
                                                onClick: ex,
                                            }),
                                        ],
                                    })
                                  : null,
                              "frame" === Y ? (0, r.jsx)(tL, { frame: e_, controlProjectId: n.id }) : null,
                              (0, r.jsx)("div", { className: dN.YJ }),
                              g
                                  ? (0, r.jsx)(V.A.Icon, {
                                        icon: E.BugIcon,
                                        tooltip: ec.intl.string(ed.default.Mt5k9d),
                                        "aria-label": ec.intl.string(ed.default.Mt5k9d),
                                        selected: c,
                                        onClick: ep,
                                    })
                                  : null,
                              (0, r.jsx)(V.A.Icon, {
                                  icon: I.SettingsIcon,
                                  tooltip: ec.intl.string(ed.default.I2XSKe),
                                  "aria-label": ec.intl.string(ed.default.I2XSKe),
                                  onClick: () => (0, ln.A)(n.id, { guildId: u, isPreview: !0, publishOptions: eW }),
                              }),
                              (0, r.jsx)(lo, {
                                  projectId: n.id,
                                  projectName: n.name,
                                  guildId: u,
                                  projectGuildId: n.guild_id,
                                  isOwner: (0, eS.PV)(n),
                                  canRemix: (0, eS.H_)(n),
                                  onRefresh: (0, tR.x1)(e_) ? eR : void 0,
                                  isRefreshing: eP,
                                  onClose: eL,
                                  onExport: eD,
                                  onImport: ez.open,
                                  onRemix: eF,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = n.id),
                                          void (0, te.openModalLazy)(async () => {
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
                                              projectId: n.id,
                                              installScope: n.install_scope,
                                              restoreDisabled: x?.status === "restoring",
                                              onRestoreVersion: (e, t) => ej(e, t, !0),
                                          }),
                                          void (0, te.openModalLazy)(async () => {
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
                                      W.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== W.profileState
                                          ? Z
                                          : null,
                                  previewProjectId: n.id,
                              }),
                              el
                                  ? null
                                  : (0, r.jsx)(V.A.Icon, { icon: dC, tooltip: en, "aria-label": en, onClick: ea }),
                          ],
                      }),
        });
    return (0, r.jsxs)("div", {
        className: dN.nj,
        children: [
            ez.input,
            (0, r.jsx)("main", {
                className: dN.JX,
                children:
                    null == n
                        ? (0, r.jsxs)("div", {
                              className: dN.j5,
                              children: [
                                  e7,
                                  (0, r.jsxs)("div", {
                                      className: dN.sD,
                                      children: [
                                          (0, r.jsx)(T.D, {
                                              variant: "heading-lg/semibold",
                                              children: ec.intl.string(ed.default.G1WwgK),
                                          }),
                                          (0, r.jsx)(y.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: ec.intl.string(ed.default.fINulo),
                                          }),
                                          (0, r.jsx)(C.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: ec.intl.string(ed.default["WFJ/vb"]),
                                              onClick: () => (0, eC.hF)(u),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, r.jsx)(ll.bI.Provider, {
                              value: eW,
                              children: (0, r.jsx)(
                                  dv,
                                  {
                                      projectId: n.id,
                                      designFeedbackToggleRef: eu,
                                      applicationId: n.preview_application_id,
                                      previewApplicationId: n.preview_application_id,
                                      surface: eM,
                                      header: e7,
                                      chatOpen: o,
                                      onCloseChat: ei,
                                      chatHeaderAction: e2,
                                      debugOpen: g && c,
                                      onCloseDebug: ev,
                                      onRestoreVersion: ej,
                                      onImportProject: (0, eS.PV)(n) ? ez.open : void 0,
                                      restoreState: x,
                                      previewReady: O,
                                      previewGate: eV,
                                      availability: W,
                                      activeMode: Y,
                                      widgetApplicationId: Z,
                                      onOpenPublishedApp: e$,
                                  },
                                  n.id,
                              ),
                          }),
            }),
        ],
    });
}
function dP(e) {
    let {
            projects: t,
            idea: n,
            guildId: a,
            submitting: s,
            createError: o,
            createDisabled: d,
            conjureTarget: c,
            onConjureTargetChange: f,
            eligibleGuilds: h,
            modelSettings: g,
            onModelSettingsChange: x,
            onSelectProject: p,
            onIdeaChange: k,
            onCreate: w,
            onCreateFromTemplate: A,
            onStartTemplate: S,
            onSubmitTemplate: E,
            onCancelTemplate: I,
            onSkipTemplate: T,
            onImportNewProject: F,
            importing: O,
        } = e,
        [U, G] = i.useState(() => ({ guildId: a, filter: lj(a) })),
        $ = (U.guildId === a ? U.filter : lj(a)) ?? a,
        q = i.useCallback(
            (e) => {
                (lv.set(a, e), G({ guildId: a, filter: e }));
            },
            [a],
        ),
        B = (0, m.yK)(
            [Q.A],
            () =>
                (function (e, t) {
                    let l = new Set([t]);
                    for (let t of e)
                        (null != t.guild_id && l.add(t.guild_id),
                            null != t.preview_guild_id && l.add(t.preview_guild_id));
                    let n = [];
                    for (let e of l) {
                        let t = Q.A.getGuild(e);
                        null != t && n.push(t);
                    }
                    return n.sort((e, t) => e.name.localeCompare(t.name));
                })(t, a),
            [t, a],
        ),
        H = i.useMemo(
            () => [
                { id: "conjure-filter-all", value: "all", leading: D.D, label: ec.intl.string(ed.default["Xi/oIC"]) },
                {
                    id: "conjure-filter-user",
                    value: lx,
                    leading: ex.UserIcon,
                    label: ec.intl.string(ed.default.kCSgmG),
                },
                {
                    id: "conjure-filter-no-server",
                    value: lp,
                    leading: ep.R,
                    label: ec.intl.string(ed.default["3QFps8"]),
                },
                ...B.map((e) => ({
                    id: `conjure-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, r.jsx)(eB.Ay, { guild: e, size: eB.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [B],
        ),
        K = (0, m.yK)(
            [eS.Ay, Q.A],
            () => {
                let e = lb($);
                if (null != e) return eS.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(Q.A.getGuilds()))
                    eS.Ay.hasFetchedGuildProjects(e.id) && t.push(...eS.Ay.getSharedProjects(e.id));
                return t;
            },
            [$],
        );
    i.useEffect(() => {
        let e = lb($);
        null == e || eS.Ay.hasFetchedGuildProjects(e) || (0, eC.hF)(e);
    }, [$]);
    let W = i.useMemo(
            () =>
                K.filter((e) => ly(e, $)).sort((e, t) =>
                    null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                ),
            [K, $],
        ),
        J = i.useMemo(
            () => [
                {
                    label: ec.intl.string(ed.default.NyVn6T),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: eH,
                            label: ec.intl.string(ed.default.UPLaGM),
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
        X = i.useMemo(
            () =>
                t
                    .filter((e) => ly(e, $))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, $],
        ),
        Y = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, lg.Ot)(e, a)
                    ? p(e.id)
                    : (0, v.P)((0, j.o)(ec.intl.string(ed.default["XUl/cs"]), b.Ck.MESSAGE));
            },
            [a, p],
        ),
        Z = ec.intl.string(ed.default.ab1sMf),
        et = [
            ec.intl.string(ed.default["9w+Chc"]),
            ec.intl.string(ed.default.WAvmdq),
            ec.intl.string(ed.default.SKsrzl),
        ],
        el = [
            {
                id: "moderation-bot",
                name: ec.intl.string(ed.default.lGLnE8),
                description: ec.intl.string(ed.default["pAC6k/"]),
                wizard: !0,
            },
            {
                id: "feature-showcase",
                name: ec.intl.string(ed.default.uJKQTs),
                description: ec.intl.string(ed.default["+dKy/B"]),
            },
            {
                id: "rust-sphere",
                name: ec.intl.string(ed.default.iF5Oru),
                description: ec.intl.string(ed.default.NbDDO6),
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
                        onStart: (t) => S(e.name, t),
                        onSubmit: (t, l, n) => E(e, t, l, n),
                        onCancel: I,
                        onSkip: T,
                    }),
                    (0, te.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([l.e("881965"), l.e("166781")]).then(
                                l.bind(l, 790028),
                            );
                            return (l) => (0, r.jsx)(e, { ...l, ...t });
                        },
                        { modalKey: "ConjureTemplateWizardModal" },
                    ));
                }
                A(e);
            },
            [h, a, I, A, T, S, E],
        ),
        ea = ec.intl.string(ed.default.zzYLlW),
        er =
            (i.useEffect(() => {
                (0, eC.b8)();
            }, []),
            (0, m.bG)([eS.Ay], () => {
                let e = eS.Ay.getMaxProjects();
                return null != e && eS.Ay.hasFetchedOwnedProjects()
                    ? Math.max(0, e - eS.Ay.getOwnedProjects().length)
                    : null;
            })),
        ei = ec.intl.string(ed.default["2XcV3x"]),
        es = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), d || w());
            },
            [d, w],
        ),
        eu = lb($) ?? a,
        eo = (0, m.bG)([eS.Ay], () => eS.Ay.getGuildProjectsFetchState(eu), [eu]),
        em = (0, m.bG)([eS.Ay], () => eS.Ay.getGuildProjectsFetchState(a), [a]),
        [ef, eh] = i.useState(lA),
        eg = i.useMemo(() => lk.w.get(lN(a)) ?? !1, [a]),
        ev = "success" === em,
        eb = (0, m.yK)([eS.Ay], () => eS.Ay.getSharedProjects(a), [a]).length > 0 || t.some((e) => ly(e, a)),
        ey = ef ?? (!!eb || "error" === em || (!ev && eg));
    i.useEffect(() => {
        ev && lk.w.set(lN(a), eb);
    }, [ev, eb, a]);
    let ek = i.useCallback((e) => {
            (lk.w.set(lw, e), eh(e));
        }, []),
        ew = i.useCallback(() => ek(!ey), [ek, ey]),
        eN = i.useCallback(() => ek(!1), [ek]),
        eI = ec.intl.string(ed.default.kar7jh),
        eT = ey ? eI : ec.intl.string(ed.default.WSc5Y2);
    return (0, r.jsx)("div", {
        className: u()(dN.nj, dN.a0),
        children: (0, r.jsxs)("div", {
            className: dN.Yo,
            children: [
                (0, r.jsxs)("main", {
                    className: dN.ps,
                    children: [
                        (0, r.jsx)(db, {
                            title: ec.intl.string(ed.default.uk6jhJ),
                            actions: (0, r.jsx)(V.A.Icon, {
                                icon: M.Z,
                                tooltip: eT,
                                "aria-label": eT,
                                selected: ey,
                                onClick: ew,
                            }),
                        }),
                        (0, r.jsx)(_.Ip, {
                            className: dN.Yy,
                            children: (0, r.jsx)("div", {
                                className: dN.Mo,
                                children: (0, r.jsxs)("section", {
                                    className: u()(dN.Qs, dN.Ix),
                                    children: [
                                        (0, r.jsx)(dA, {}),
                                        (0, r.jsx)(eq, {}),
                                        (0, r.jsxs)("section", {
                                            className: dN.WI,
                                            "aria-label": ea,
                                            children: [
                                                (0, r.jsxs)("div", {
                                                    className: dN.G9,
                                                    children: [
                                                        (0, r.jsx)(y.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: ea,
                                                        }),
                                                        (0, r.jsx)(y.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: ec.intl.string(ed.default["N88+Ld"]),
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsx)(eP, {
                                                    listClassName: dN.Aw,
                                                    radius: eM,
                                                    children: el.map((e) =>
                                                        (0, r.jsx)(
                                                            "li",
                                                            {
                                                                className: dN.EA,
                                                                children: (0, r.jsxs)(eE, {
                                                                    disabled: s,
                                                                    ariaLabel: ec.intl.formatToPlainString(
                                                                        ed.default.jGyR6p,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: u()(dN.nx, dN.rz),
                                                                    onClick: () => en(e),
                                                                    children: [
                                                                        (0, r.jsx)(y.E, {
                                                                            className: dN.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, r.jsx)(y.E, {
                                                                            className: dN.BK,
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
                                            className: dN.WI,
                                            "aria-label": ei,
                                            children: [
                                                (0, r.jsxs)("div", {
                                                    className: dN.G9,
                                                    children: [
                                                        (0, r.jsx)(y.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: ei,
                                                        }),
                                                        (0, r.jsx)(y.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: ec.intl.string(ed.default.JnJOAn),
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsx)(eP, {
                                                    listClassName: dN.Aw,
                                                    radius: e_,
                                                    children: et.map((e) =>
                                                        (0, r.jsx)(
                                                            "li",
                                                            {
                                                                className: dN.EA,
                                                                children: (0, r.jsx)(eE, {
                                                                    disabled: s,
                                                                    className: dN.nx,
                                                                    onClick: () => w(e),
                                                                    children: (0, r.jsx)(y.E, {
                                                                        variant: "text-md/semibold",
                                                                        color: "text-strong",
                                                                        className: dN.un,
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
                            className: dN.Yl,
                            children: (0, r.jsxs)("div", {
                                className: u()(dN.Qs, dN.DA),
                                children: [
                                    (0, r.jsx)(P.f, {
                                        label: Z,
                                        hideLabel: !0,
                                        rows: 3,
                                        value: n,
                                        placeholder: Z,
                                        error: o,
                                        onChange: k,
                                        onKeyDown: es,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: dN.VP,
                                        children: [
                                            (0, r.jsx)("div", {
                                                className: dN.gH,
                                                children: (0, r.jsx)(R.l, {
                                                    selectionMode: "single",
                                                    label: ec.intl.string(ed.default.NyVn6T),
                                                    hideLabel: !0,
                                                    placeholder: ec.intl.string(ed.default.NyVn6T),
                                                    options: J,
                                                    value: c,
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
                                                              ? ec.intl.string(ed.default.s28pGG)
                                                              : ec.intl.formatToPlainString(ed.default.Wy5aK4, {
                                                                    count: er,
                                                                }),
                                                  })
                                                : null,
                                            (0, r.jsx)(th, {
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
                                            (0, r.jsx)(C.$, {
                                                variant: "primary",
                                                size: "md",
                                                text: ec.intl.string(ec.t.CumH4u),
                                                disabled: d,
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
                    className: dN.pA,
                    hidden: !ey,
                    "aria-label": ec.intl.string(ed.default.dWgSAa),
                    children: [
                        (0, r.jsxs)("div", {
                            className: dN.IR,
                            children: [
                                (0, r.jsx)(y.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: dN.RM,
                                    children: ec.intl.string(ed.default.dWgSAa),
                                }),
                                (0, r.jsxs)("div", {
                                    className: dN.Ss,
                                    children: [
                                        (0, r.jsx)(ej, { importing: O, onImport: F }),
                                        (0, r.jsx)(V.A.Icon, { icon: L.P, tooltip: eI, "aria-label": eI, onClick: eN }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsxs)(_.Ip, {
                            className: dN.xe,
                            children: [
                                (0, r.jsx)("div", {
                                    className: dN.Vw,
                                    children: (0, r.jsx)(R.l, {
                                        selectionMode: "single",
                                        label: ec.intl.string(ed.default.U6TqU9),
                                        hideLabel: !0,
                                        options: H,
                                        value: $,
                                        onSelectionChange: q,
                                    }),
                                }),
                                (0, r.jsx)(y.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: dN.wE,
                                    children: ec.intl.string(ed.default.JQpNkh),
                                }),
                                ("unattempted" === eo || "loading" === eo) && 0 === X.length
                                    ? (0, r.jsx)("div", { className: dN.E8, children: (0, r.jsx)(N.y, {}) })
                                    : "error" === eo && 0 === X.length
                                      ? (0, r.jsxs)("div", {
                                            className: dN.E8,
                                            children: [
                                                (0, r.jsx)(y.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: dN.JS,
                                                    children: ec.intl.string(ed.default.DJAPMO),
                                                }),
                                                (0, r.jsx)(C.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: ec.intl.string(ed.default["WFJ/vb"]),
                                                    onClick: () => (0, eC.hF)(eu),
                                                }),
                                            ],
                                        })
                                      : 0 === X.length
                                        ? (0, r.jsx)("div", {
                                              className: dN.D1,
                                              children: (0, r.jsxs)("div", {
                                                  className: dN.ST,
                                                  children: [
                                                      (0, r.jsx)(D.D, { size: "lg", color: z.A.colors.TEXT_SUBTLE }),
                                                      (0, r.jsx)(y.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: dN.sI,
                                                          children: ec.intl.string(ed.default["9/5sLV"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, r.jsx)("div", {
                                              className: dN.Dq,
                                              children: X.map((e) =>
                                                  (0, r.jsx)(
                                                      dM,
                                                      {
                                                          project: e,
                                                          guildId: a,
                                                          onSelect: () => Y(e),
                                                          onRemix: () => (0, l_.A)(e, a),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          }),
                                W.length > 0
                                    ? (0, r.jsxs)("div", {
                                          className: dN.qx,
                                          children: [
                                              (0, r.jsxs)("div", {
                                                  className: dN.uc,
                                                  children: [
                                                      (0, r.jsx)(y.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-strong",
                                                          children: ec.intl.string(ed.default["wFi8+o"]),
                                                      }),
                                                      (0, r.jsx)(y.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          children: ec.intl.string(ed.default.dQ3U1J),
                                                      }),
                                                  ],
                                              }),
                                              (0, r.jsx)("div", {
                                                  className: dN.Dq,
                                                  children: W.map((e) =>
                                                      (0, r.jsx)(
                                                          dM,
                                                          {
                                                              project: e,
                                                              guildId: a,
                                                              onSelect: () => Y(e),
                                                              onRemix: () => (0, l_.A)(e, a),
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
function dR(e) {
    let t,
        { guildId: l, projectId: n } = e,
        a = (0, m.yK)([eS.Ay], () => eS.Ay.getOwnedProjects()),
        s = (0, m.yK)([Y.Ay], () => Y.Ay.getSelfMember(l)?.roles ?? [], [l]),
        u = (0, m.bG)(
            [Q.A, Z.A],
            () => {
                let e = Q.A.getGuild(l);
                return null != e && Z.A.can(eb.xBc.MANAGE_GUILD, e);
            },
            [l],
        ),
        [o, d] = i.useState(""),
        c = n ?? null,
        [f, h] = i.useState(!1),
        [g, x] = i.useState(null),
        p = (0, tY.z9)("VibegrationsScreen"),
        [y, k] = i.useState(null),
        w = (0, O.o)().get(t$.f_) === eH;
    i.useEffect(() => {
        k(null);
    }, [l, w]);
    let A = i.useMemo(() => (!w && p.some((e) => e.id === l) ? l : eH), [p, l, w]),
        N = y ?? A,
        C = N === eH ? "user" : "guild",
        S = N === eH ? l : N,
        [E, I] = i.useState(null);
    (i.useEffect(() => {
        (0, eC.hF)(l);
    }, [l, s, u]),
        i.useEffect(() => {
            (0, eC.dm)(l, c);
        }, [l, c]));
    let T = i.useCallback(
            async (e, t, l) => {
                let n = await (0, eC.gA)({ guild_id: t, install_scope: l });
                ((0, er.Hc)(n),
                    (0, er.r2)(n, E ?? ee.A4),
                    e(n),
                    (0, K.pX)(eb.BVt.CHANNEL(t, ey.VV.CONJURE, n)),
                    d(""),
                    I(null));
            },
            [E],
        ),
        M = i.useCallback(
            async (e) => {
                let t = (e ?? o).trim(),
                    l = eN({ idea: t, installScope: C, submitting: f });
                if ("idea" !== l && "submitting" !== l) {
                    (null != e && d(e), h(!0), x(null));
                    try {
                        await T((e) => (0, er.dv)(e, t), S, C);
                    } catch (e) {
                        x((0, ew.mG)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [T, C, S, o, f],
        ),
        _ = i.useCallback(
            async (e) => {
                if (!f) {
                    (h(!0), x(null));
                    try {
                        await T(
                            (t) => {
                                var l;
                                (0, er.dv)(
                                    t,
                                    ((l = e.name),
                                    ec.intl.formatToPlainString(ed.default["0PQip6"], { templateName: l })),
                                    void 0,
                                    { templateId: e.id },
                                );
                            },
                            S,
                            C,
                        );
                    } catch (e) {
                        x((0, ew.mG)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [T, C, S, f],
        ),
        P = i.useCallback(
            async (e, t) => {
                let l = await (0, eC.gA)({ guild_id: t, install_scope: "guild" });
                return ((0, er.Hc)(l), (0, er.r2)(l, E ?? ee.A4), (0, er.dv)(l, (0, lP.Wl)(e)), l);
            },
            [E],
        ),
        R = i.useCallback(async (e, t, l, n) => {
            if (eS.Ay.getProject(t)?.guild_id !== l) {
                let e = await (0, eC.M7)(t, { guild_id: l, preview_guild_id: l });
                if (!e.ok) throw new ew.DS((0, ew.hj)(e), e.status);
            }
            ((0, er.dv)(t, n, void 0, { templateId: e.id }), (0, K.pX)(eb.BVt.CHANNEL(l, ey.VV.CONJURE, t)), I(null));
        }, []),
        L = i.useCallback((e) => {
            (0, eC.xx)(e).catch(() => void 0);
        }, []),
        D = i.useCallback(
            (e) => {
                let t = eS.Ay.getProject(e)?.guild_id ?? l;
                ((0, K.pX)(eb.BVt.CHANNEL(t, ey.VV.CONJURE, e)), I(null));
            },
            [l],
        ),
        [z, F] = i.useState(!1),
        U = i.useCallback(
            async (e, t) => {
                let n = ef(e);
                if (null != n) return void (0, v.P)((0, j.o)(n, b.Ck.FAILURE));
                F(!0);
                let a = null;
                try {
                    ((a = await (0, eC.gA)({ guild_id: l, install_scope: t })),
                        (0, er.Hc)(a),
                        (0, er.r2)(a, E ?? ee.A4),
                        await em(a, e, ec.intl.string(ed.default["LUc7/5"])),
                        (0, K.pX)(eb.BVt.CHANNEL(l, ey.VV.CONJURE, a)),
                        I(null));
                } catch {
                    (null != a && (await (0, eC.xx)(a).catch(() => void 0)),
                        (0, v.P)((0, j.o)(ec.intl.string(ed.default["Q+l4Hv"]), b.Ck.FAILURE)));
                } finally {
                    F(!1);
                }
            },
            [l, E],
        ),
        G = i.useCallback(
            (e) => {
                (0, K.pX)(eb.BVt.CHANNEL(l, ey.VV.CONJURE, e));
            },
            [l],
        ),
        $ = i.useCallback(() => {
            (0, K.pX)(eb.BVt.CHANNEL(l, ey.VV.CONJURE));
        }, [l]),
        q = i.useCallback((e) => {
            (d(e), x(null));
        }, []),
        B = (0, m.bG)(
            [eS.Ay],
            () => {
                if (null == c) return null;
                let e = eS.Ay.getProject(c);
                return null == e || (0, eS.PV)(e) || e.guild_id === l ? e : null;
            },
            [c, l],
        ),
        H = (0, m.bG)([eS.Ay], () => eS.Ay.hasFetchedGuildProjects(l), [l]);
    return null != c
        ? (0, r.jsx)(d_, { project: B, projectsLoaded: H, onBack: $, guildId: l }, c)
        : (0, r.jsx)(dP, {
              projects: a,
              modelSettings: E,
              onModelSettingsChange: I,
              idea: o,
              guildId: l,
              submitting: f,
              createError: g,
              createDisabled: "idea" === (t = eN({ idea: o, installScope: C, submitting: f })) || "submitting" === t,
              onSelectProject: G,
              onIdeaChange: q,
              onCreate: M,
              onCreateFromTemplate: _,
              onStartTemplate: P,
              onSubmitTemplate: R,
              onCancelTemplate: L,
              onSkipTemplate: D,
              onImportNewProject: U,
              importing: z,
              conjureTarget: N,
              onConjureTargetChange: k,
              eligibleGuilds: p,
          });
}
