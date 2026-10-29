n.d(t, { A: () => eK });
var s = n(477900),
    a = n(582128),
    l = n(503698),
    r = n.n(l),
    i = n(17928),
    o = n(97893),
    c = n(364522),
    u = n(297264),
    d = n(834730),
    m = n(65593),
    f = n(458518),
    h = n(742589),
    x = n(949757),
    g = n(858899),
    p = n(989145),
    v = n(639519),
    j = n(889921),
    N = n(371169),
    b = n(391712);
async function y(e) {
    let { guildId: t, installScope: n, prompt: s, modelSettings: a, templateId: l } = e,
        r = await (0, N.gA)(
            null != n
                ? { guild_id: t, install_scope: n }
                : { guild_id: t, auto_install_scope: !0, prompt: (s ?? "").slice(0, 4e3) },
        );
    return ((0, j.ensureConnection)(r, { templateId: l }), (0, j.stageModelSettings)(r, a ?? b.A4), r);
}
async function w(e) {
    let { start: t, ...n } = e,
        s = await y(n);
    return (await t(s), s);
}
var C = n(381991),
    A = n(708679),
    E = n(248675),
    R = n(105292);
class S extends Error {}
var I = n(705427),
    k = n(120234),
    L = n(15564),
    O = n(398773),
    P = n(735769),
    _ = n(763218),
    T = n(101766);
(n(976860), n(652215), n(746080));
var U = n(506774);
let F = "ConjureProjectsPanelOpen";
var M = n(89310),
    D = n(821609),
    z = n(661531),
    G = n(775602),
    H = n(486020),
    q = n(687966),
    W = n(323384),
    B = n(632015),
    J = n(231483),
    $ = n(430392);
let X = {
        flappy: "/assets/b43659b526f2e936.svg",
        "raid-calendar": "/assets/1d701ea289cc99e6.svg",
        "aram-widget": "/assets/05c0d07952b2d93f.svg",
        trivia: "/assets/5813258afff68797.svg",
        "spoilers-automod": "/assets/54b5cda688395473.svg",
        "movie-night": "/assets/fcb9220c49b6460a.svg",
        "welcome-bot": "/assets/56e489e9c5907add.svg",
    },
    K = { games: q.GameControllerIcon, apps: W.k, profile_widget: B.f, automod: J.ShieldIcon, chat_bot: $.RobotIcon };
var Y = n(621466);
let Q = "data-conjure-carousel-card";
var V = n(19493);
let Z = a.memo(function (e) {
        let { inspiration: t, onCopyPrompt: n } = e,
            a = K[t.category];
        return (0, s.jsxs)("li", {
            className: V.AS,
            [Q]: "",
            children: [
                (0, s.jsxs)("div", {
                    className: V.rl,
                    children: [
                        (0, s.jsx)("img", {
                            className: V.my,
                            src: (0, H.AE)(void 0, t.authorAvatarSeed),
                            alt: "",
                            "aria-hidden": !0,
                        }),
                        (0, s.jsx)(d.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            className: V.Tq,
                            children: t.shortPrompt,
                        }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: V.Nr,
                    children: [
                        (0, s.jsxs)("div", {
                            className: V.xn,
                            children: [
                                (0, s.jsx)("img", { className: V.q_, src: t.image, alt: "" }),
                                (0, s.jsx)("div", {
                                    className: V.o1,
                                    children: (0, s.jsx)(D.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: R.intl.string(E.default["6CQjTy"]),
                                        onClick: () => n(t.fullPrompt),
                                    }),
                                }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: V.qr,
                            children: [
                                (0, s.jsx)("div", {
                                    className: V.Yl,
                                    "aria-hidden": !0,
                                    children: (0, s.jsx)(a, { size: "md", color: z.A.colors.ICON_STRONG }),
                                }),
                                (0, s.jsxs)("div", {
                                    className: V.PJ,
                                    children: [
                                        (0, s.jsx)(d.E, {
                                            variant: "text-md/semibold",
                                            color: "text-strong",
                                            lineClamp: 1,
                                            children: t.name,
                                        }),
                                        (0, s.jsx)(d.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            lineClamp: 1,
                                            children: (function (e) {
                                                switch (e) {
                                                    case "games":
                                                        return R.intl.string(E.default["JU01/4"]);
                                                    case "apps":
                                                        return R.intl.string(E.default["bvcT/Q"]);
                                                    case "profile_widget":
                                                        return R.intl.string(E.default.GUb2zA);
                                                    case "automod":
                                                        return R.intl.string(E.default["+EKk4D"]);
                                                    case "chat_bot":
                                                        return R.intl.string(E.default.KBHZfO);
                                                }
                                            })(t.category),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }),
    ee = a.memo(function (e) {
        var t;
        let { inspirations: n, onCopyPrompt: l } = e,
            r = (0, i.bG)([G.Ay], () => G.Ay.useReducedMotion),
            o = a.useRef(null),
            c = a.useRef(null);
        return (
            (t = !r),
            a.useEffect(() => {
                let e = o.current,
                    n = c.current;
                if (null == e || null == n) return;
                let s = [],
                    a = [],
                    l = 1,
                    r = 0,
                    i = 1,
                    u = 0,
                    d = 0,
                    m = null,
                    f = !1,
                    h = !1,
                    x = document.hasFocus(),
                    g = !0;
                function p() {
                    if (null == e || null == n) return;
                    a = (s = Array.from(n.querySelectorAll(`[${Q}]`))).map((e) => e.offsetLeft + e.offsetWidth / 2);
                    let o = (l = s.length > 1 ? Math.abs(s[1].offsetLeft - s[0].offsetLeft) : 1) * s.length;
                    ((r = t && o >= e.clientWidth + 2 * l ? o : 0),
                        (i = "rtl" === getComputedStyle(e).direction ? -1 : 1));
                }
                function v() {
                    if (null == e) return;
                    let t = e.scrollLeft + e.clientWidth / 2;
                    s.forEach((e, n) => {
                        var s, o;
                        let c,
                            d,
                            m = a[n] - t;
                        r > 0 && (m = ((((m - u * i + (s = r) / 2) % s) + s) % s) - s / 2);
                        let { angleDeg: f, dropPx: h } =
                            ((o = m / l),
                            (d =
                                (l / ((4 * Math.PI) / 180)) *
                                (1 - Math.cos(((c = Math.max(-12, Math.min(12, 4 * o))) * Math.PI) / 180))),
                            { angleDeg: c, dropPx: d });
                        (e.style.setProperty("--custom-conjure-home-carousel-shift", `${t + m - a[n]}px`),
                            e.style.setProperty("--custom-conjure-home-carousel-angle", `${f}deg`),
                            e.style.setProperty("--custom-conjure-home-carousel-drop", `${h}px`));
                    });
                }
                function j(e) {
                    (null != m && r > 0 && (u = (u + (30 * (e - m)) / 1e3) % r),
                        (m = e),
                        v(),
                        (d = requestAnimationFrame(j)));
                }
                function N() {
                    let e = t && !f && !h && x && g;
                    e && 0 === d
                        ? ((m = null), (d = requestAnimationFrame(j)))
                        : e || 0 === d || (cancelAnimationFrame(d), (d = 0));
                }
                function b() {
                    ((f = !0), N());
                }
                function y() {
                    ((f = !1), N());
                }
                function w() {
                    ((h = !0), N());
                }
                function C(t) {
                    ((h = (0, Y.vq)(t.relatedTarget, Node) && e?.contains(t.relatedTarget) === !0), N());
                }
                function A() {
                    ((x = !0), N());
                }
                function E() {
                    ((x = !1), N());
                }
                (p(), v(), N());
                let R = new ResizeObserver(() => {
                    (p(), v());
                });
                (R.observe(e), R.observe(n));
                let S = new IntersectionObserver((e) => {
                    let [t] = e;
                    ((g = t.isIntersecting), N());
                });
                return (
                    S.observe(e),
                    e.addEventListener("scroll", v, { passive: !0 }),
                    e.addEventListener("pointerenter", b),
                    e.addEventListener("pointerleave", y),
                    e.addEventListener("focusin", w),
                    e.addEventListener("focusout", C),
                    window.addEventListener("focus", A),
                    window.addEventListener("blur", E),
                    () => {
                        (cancelAnimationFrame(d),
                            R.disconnect(),
                            S.disconnect(),
                            e.removeEventListener("scroll", v),
                            e.removeEventListener("pointerenter", b),
                            e.removeEventListener("pointerleave", y),
                            e.removeEventListener("focusin", w),
                            e.removeEventListener("focusout", C),
                            window.removeEventListener("focus", A),
                            window.removeEventListener("blur", E));
                    }
                );
            }, [o, c, t]),
            (0, s.jsx)("section", {
                ref: o,
                className: r ? V.vV : V.Dk,
                "aria-label": R.intl.string(E.default.Qc4S39),
                children: (0, s.jsx)("ul", {
                    ref: c,
                    className: V.u4,
                    children: n.map((e) => (0, s.jsx)(Z, { inspiration: e, onCopyPrompt: l }, e.id)),
                }),
            })
        );
    });
var et = n(789645),
    en = n(265872),
    es = n(980707),
    ea = n(477782),
    el = n(81369),
    er = n(950305),
    ei = n(664121);
let eo = [
    { value: "user", icon: er.UserIcon, nameMessage: E.default.s1TsXl },
    { value: "guild", icon: ei.R, nameMessage: E.default.LlLIJw },
];
function ec(e) {
    let { importing: t, onImport: n } = e,
        l = a.useRef(null),
        r = (0, x.yN)(a.useCallback((e) => n(e, "user"), [n])),
        i = (0, x.yN)(a.useCallback((e) => n(e, "guild"), [n])),
        o = { user: r.open, guild: i.open };
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(en.Y, {
                targetElementRef: l,
                position: "bottom",
                align: "right",
                animation: en.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, s.jsx)(es.W, {
                        "data-menu-migrated": !0,
                        navId: "conjure-import-scope",
                        "aria-label": R.intl.string(E.default.soVyD1),
                        onClose: t,
                        onSelect: t,
                        children: (0, s.jsx)(ea.rX, {
                            label: R.intl.string(E.default.NyVn6T),
                            children: eo
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: R.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, s.jsx)(
                                        ea.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: o[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, n) => {
                    let { isShown: a } = n;
                    return (0, s.jsx)(D.$, {
                        ...e,
                        buttonRef: l,
                        variant: "secondary",
                        size: "sm",
                        icon: el.H,
                        text: R.intl.string(E.default.NJGZA3),
                        loading: t,
                        disabled: t,
                        "aria-haspopup": "menu",
                        "aria-expanded": a,
                    });
                },
            }),
            r.input,
            i.input,
        ],
    });
}
var eu = n(574790),
    ed = n(380654),
    em = n(638693);
function ef(e) {
    let { guildId: t, archiveImport: n, onClose: l } = e,
        r = a.useCallback((e) => (0, C.Ay)(e.id), []),
        i = a.useCallback((e) => (0, s.jsx)(ed.S, { project: e, guildId: t }), [t]),
        o = a.useCallback((e, n) => (0, ed.V)(e, n, t), [t]),
        d = R.intl.string(E.default.dWgSAa),
        m = R.intl.string(E.default.kar7jh);
    return (0, s.jsxs)("aside", {
        className: em.pz,
        "aria-label": d,
        children: [
            (0, s.jsxs)("div", {
                className: em.wx,
                children: [
                    (0, s.jsx)(u.D, { variant: "heading-md/semibold", color: "text-strong", children: d }),
                    (0, s.jsxs)("div", {
                        className: em.$s,
                        children: [
                            (0, s.jsx)(ec, { importing: n.importing, onImport: n.importArchive }),
                            (0, s.jsx)(h.A.Icon, { icon: et.P, tooltip: m, "aria-label": m, onClick: l }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)(c.Ip, {
                className: em.XG,
                children: (0, s.jsx)(eu.A, {
                    onSelect: r,
                    guildId: t,
                    renderProjectActions: i,
                    onProjectContextMenu: o,
                }),
            }),
        ],
    });
}
var eh = n(559106),
    ex = n(783977),
    eg = n(559647),
    ep = n(531685),
    ev = n(957071),
    ej = n(34595),
    eN = n(587157),
    eb = n(200160),
    ey = n(465410);
function ew(e) {
    let { prompts: t, paused: n, showCaret: l } = e,
        { index: r, length: i } = (function (e, t) {
            let [n, s] = a.useState(() =>
                    t ? { index: 0, length: e[0].length, phase: "holding" } : { index: 0, length: 0, phase: "typing" },
                ),
                [l, r] = a.useState(t);
            t !== l && (r(t), t && s((t) => ({ ...t, length: e[t.index].length, phase: "holding" })));
            let i = a.useRef(n.length);
            a.useLayoutEffect(() => {
                i.current = n.length;
            });
            let { index: o, phase: c } = n;
            return (
                a.useEffect(() => {
                    if (t) return;
                    let n = e[o].length;
                    if ("holding" === c) {
                        let e = window.setTimeout(() => s((e) => ({ ...e, phase: "deleting" })), 1400);
                        return () => window.clearTimeout(e);
                    }
                    let a = "typing" === c,
                        l = i.current,
                        r = performance.now(),
                        u = l,
                        d = 0,
                        m = 0;
                    return (
                        (d = requestAnimationFrame(function t(i) {
                            let c = Math.floor((i - r) / (a ? 14 : 4)),
                                f = a ? Math.min(n, l + c) : Math.max(0, l - c);
                            (f !== u && ((u = f), s((e) => ({ ...e, length: f }))),
                                a && f === n
                                    ? s((e) => ({ ...e, length: f, phase: "holding" }))
                                    : a || 0 !== f
                                      ? (d = requestAnimationFrame(t))
                                      : (m = window.setTimeout(
                                            () => s({ index: (o + 1) % e.length, length: 0, phase: "typing" }),
                                            250,
                                        )));
                        })),
                        () => {
                            (cancelAnimationFrame(d), window.clearTimeout(m));
                        }
                    );
                }, [e, t, o, c]),
                n
            );
        })(t, n);
    return (0, s.jsxs)(d.E, {
        variant: "text-md/normal",
        color: "text-muted",
        className: eb.RC,
        children: [t[r].slice(0, i), l ? (0, s.jsx)("span", { className: eb.OW }) : null],
    });
}
function eC(e) {
    let { prompts: t, paused: n } = e,
        l = (function (e, t) {
            let [n, s] = a.useState(0);
            return (
                a.useEffect(() => {
                    if (t || e < 2) return;
                    let n = window.setInterval(() => s((t) => (t + 1) % e), 2e3);
                    return () => window.clearInterval(n);
                }, [e, 2e3, t]),
                n
            );
        })(t.length, n);
    return (0, s.jsx)(d.E, { variant: "text-md/normal", color: "text-muted", className: eb.RC, children: t[l] });
}
function eA(e) {
    let { boxFocused: t } = e,
        n = a.useMemo(
            () => [
                R.intl.string(E.default.J2o8Ae),
                R.intl.string(E.default["wn+Bzd"]),
                R.intl.string(E.default["6DCVy3"]),
                R.intl.string(E.default.iRbnRD),
                R.intl.string(E.default["p/zqml"]),
            ],
            [],
        ),
        l = (0, i.bG)([G.Ay], () => G.Ay.useReducedMotion),
        r = (0, i.bG)([ep.A], () => ep.A.isFocused()),
        o = t || !r;
    return (0, s.jsx)("div", {
        className: eb.qf,
        "aria-hidden": !0,
        children: l
            ? (0, s.jsx)(eC, { prompts: n, paused: o })
            : (0, s.jsx)(ew, { prompts: n, paused: o, showCaret: !t }),
    });
}
function eE(e) {
    let {
            idea: t,
            inputRef: n,
            onIdeaChange: l,
            onSubmit: i,
            submitting: o,
            submitDisabled: c,
            error: u,
            modelSettings: m,
            onModelSettingsChange: f,
            attachments: h,
            onImport: x,
        } = e,
        [g, p] = a.useState(!1),
        v = a.useRef(null),
        j = a.useId(),
        N = "" !== t,
        { addFiles: y, pasteFiles: w, removeAttachment: C } = h;
    a.useLayoutEffect(() => {
        let e = n.current;
        null != e &&
            (e.scrollHeight <= e.clientHeight && (e.style.height = "auto"), (e.style.height = `${e.scrollHeight}px`));
    }, [t, n]);
    let A = a.useCallback(
        (e) => {
            "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), c || i());
        },
        [c, i],
    );
    return (0, s.jsxs)("div", {
        className: eb.kL,
        children: [
            (0, s.jsxs)("div", {
                ref: v,
                className: r()(eb.yk, { [eb.Sl]: null != u }),
                children: [
                    (0, s.jsxs)(d.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        className: eb.Ox,
                        children: [
                            (0, s.jsx)(eh.vN, {
                                ringTarget: v,
                                ringClassName: eb.Rg,
                                children: (0, s.jsx)("textarea", {
                                    ref: n,
                                    className: r()(eb.hF, ey.yL),
                                    rows: 3,
                                    value: t,
                                    "aria-label": R.intl.string(E.default.cwrS1O),
                                    "aria-invalid": null != u,
                                    "aria-describedby": null != u ? j : void 0,
                                    onChange: (e) => l(e.currentTarget.value),
                                    onKeyDown: A,
                                    onPaste: (e) => w(e),
                                    onFocus: () => p(!0),
                                    onBlur: () => p(!1),
                                }),
                            }),
                            N ? null : (0, s.jsx)(eA, { boxFocused: g }),
                        ],
                    }),
                    h.attachments.length > 0
                        ? (0, s.jsx)("div", {
                              className: eb.ZO,
                              children: h.attachments.map((e) => {
                                  let { draft: t } = e;
                                  return (0, s.jsx)(ej.Nl, { draft: t, onRemove: C }, t.localId);
                              }),
                          })
                        : null,
                    (0, s.jsxs)("div", {
                        className: eb.KE,
                        children: [
                            (0, s.jsx)(ev.A, {
                                navId: "conjure-home-attach",
                                disabled: o,
                                buttonClassName: eb.gb,
                                iconClassName: eb.Xv,
                                onAddFiles: y,
                                onImport: x,
                            }),
                            (0, s.jsxs)("div", {
                                className: eb.Rc,
                                children: [
                                    (0, s.jsx)(eN.A, {
                                        settings: m ?? b.A4,
                                        tiers: b.lO,
                                        choices: (0, b.Pu)(),
                                        disabled: o,
                                        onChange: f,
                                        className: eb.gb,
                                        icon: (0, s.jsx)(ex.R, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, s.jsx)(D.$, {
                                        variant: "primary",
                                        size: "sm",
                                        icon: eg.SendMessageIcon,
                                        text: R.intl.string(E.default.bNtzxp),
                                        disabled: c,
                                        loading: o,
                                        onClick: i,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            null != u
                ? (0, s.jsx)(d.E, {
                      id: j,
                      variant: "text-sm/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      children: u,
                  })
                : null,
        ],
    });
}
var eR = n(628284),
    eS = n(369606),
    eI = n(926268),
    ek = n(406810),
    eL = n(707554);
let eO = [
    { id: "apps", title: E.default["bvcT/Q"], description: E.default.ArcJqa },
    { id: "games", title: E.default["JU01/4"], description: E.default.FXwLsv },
    { id: "bots", title: E.default.KBHZfO, description: E.default.qNmKhG },
    { id: "profile-widgets", title: E.default.GUb2zA, description: E.default["v+F6qW"] },
    { id: "overlay-widgets", title: E.default.uVOH1p, description: E.default.zm7y9u },
    { id: "automod", title: E.default["+EKk4D"], description: E.default.fpXK3z },
];
var eP = n(651346);
function e_(e) {
    let { className: t } = e;
    return (0, s.jsx)("span", { className: r()(eP.n8, t) });
}
let eT = {
    apps: function () {
        return (0, s.jsxs)("div", {
            className: eP.x,
            children: [
                (0, s.jsxs)("div", {
                    className: eP.My,
                    children: [
                        (0, s.jsx)("span", { className: eP._w }),
                        (0, s.jsx)("span", { className: eP._w }),
                        (0, s.jsx)("span", { className: eP._w }),
                    ],
                }),
                (0, s.jsx)(e_, { className: eP.Lm }),
                (0, s.jsx)("div", {
                    className: eP.Oh,
                    children: [0, 1, 2].map((e) =>
                        (0, s.jsxs)(
                            "div",
                            {
                                className: eP.ZW,
                                children: [
                                    (0, s.jsx)("span", { className: eP.NU }),
                                    0 === e
                                        ? (0, s.jsx)(eR.y, {
                                              size: "xs",
                                              color: z.A.colors.ICON_BRAND,
                                              className: eP._6,
                                          })
                                        : null,
                                    (0, s.jsx)(e_, { className: eP.Eg }),
                                ],
                            },
                            e,
                        ),
                    ),
                }),
            ],
        });
    },
    games: function () {
        return (0, s.jsxs)("div", {
            className: r()(eP.x, eP.jG),
            children: [
                (0, s.jsx)("span", { className: r()(eP.gg, eP.K1) }),
                (0, s.jsx)("span", { className: r()(eP.gg, eP.W2) }),
                (0, s.jsx)("span", { className: r()(eP.Fs, eP.A$) }),
                (0, s.jsx)("span", { className: r()(eP.Fs, eP.eP) }),
                (0, s.jsx)("span", { className: r()(eP.Fs, eP.kc) }),
                (0, s.jsx)("span", { className: r()(eP.Fs, eP.OE) }),
                (0, s.jsx)("span", { className: eP.OC }),
                (0, s.jsxs)("div", {
                    className: eP.si,
                    children: [
                        (0, s.jsx)(eS.TrophyIcon, { size: "xxs", color: z.A.colors.ICON_FEEDBACK_WARNING }),
                        (0, s.jsx)(d.E, { variant: "text-xs/bold", color: "none", className: eP.o9, children: 128 }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: eP.KQ,
                    children: [
                        (0, s.jsx)(eI.HeartIcon, { size: "xxs", color: z.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, s.jsx)(eI.HeartIcon, { size: "xxs", color: z.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, s.jsx)(eI.HeartIcon, { size: "xxs", color: z.A.colors.ICON_OVERLAY_LIGHT }),
                    ],
                }),
            ],
        });
    },
    bots: function () {
        return (0, s.jsxs)("div", {
            className: eP.x,
            children: [
                (0, s.jsxs)("div", {
                    className: eP.$y,
                    children: [(0, s.jsx)("span", { className: eP.m$ }), (0, s.jsx)(e_, { className: eP.Md })],
                }),
                (0, s.jsxs)("div", {
                    className: eP.iU,
                    children: [
                        (0, s.jsx)("span", {
                            className: r()(eP.my, eP.FY),
                            children: (0, s.jsx)($.RobotIcon, { size: "xs", color: z.A.colors.ICON_OVERLAY_LIGHT }),
                        }),
                        (0, s.jsxs)("div", {
                            className: eP.OS,
                            children: [
                                (0, s.jsxs)("div", {
                                    className: eP.f9,
                                    children: [
                                        (0, s.jsx)(e_, { className: eP.iE }),
                                        (0, s.jsx)(d.E, {
                                            variant: "text-xs/bold",
                                            color: "none",
                                            className: eP.AO,
                                            children: R.intl.string(E.default.VlgiLf),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(e_, { className: eP.xs }),
                                (0, s.jsx)(e_, { className: eP.Md }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    "profile-widgets": function () {
        return (0, s.jsxs)("div", {
            className: r()(eP.x, eP.ME),
            children: [
                (0, s.jsx)("span", { className: eP.CK }),
                (0, s.jsxs)("div", {
                    className: eP.kI,
                    children: [
                        (0, s.jsx)("span", { className: r()(eP.my, eP.jU) }),
                        (0, s.jsx)(e_, { className: eP.iE }),
                        (0, s.jsxs)("div", {
                            className: eP.Wy,
                            children: [
                                (0, s.jsx)("div", {
                                    className: eP.M1,
                                    children: [0, 1].map((e) =>
                                        (0, s.jsxs)(
                                            "div",
                                            {
                                                className: eP.dJ,
                                                children: [
                                                    (0, s.jsx)(e_, { className: eP.cR }),
                                                    (0, s.jsx)(e_, { className: eP.Zh }),
                                                ],
                                            },
                                            e,
                                        ),
                                    ),
                                }),
                                (0, s.jsx)("div", {
                                    className: eP.bW,
                                    children: [0, 1, 2, 3, 4, 5].map((e) =>
                                        (0, s.jsx)("span", { className: eP.QR }, e),
                                    ),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    "overlay-widgets": function () {
        return (0, s.jsxs)("div", {
            className: eP.JH,
            children: [
                (0, s.jsx)("span", { className: eP.rx }),
                (0, s.jsx)("span", { className: eP.ny }),
                (0, s.jsx)("span", { className: eP.ZH }),
                (0, s.jsx)("div", {
                    className: eP.$Y,
                    children: [0, 1, 2].map((e) =>
                        (0, s.jsxs)(
                            "div",
                            {
                                className: eP.fn,
                                children: [
                                    (0, s.jsx)("span", { className: r()(eP._h, { [eP.zY]: 0 === e }) }),
                                    (0, s.jsx)(e_, { className: eP.Av }),
                                ],
                            },
                            e,
                        ),
                    ),
                }),
                (0, s.jsxs)("div", {
                    className: eP.Y5,
                    children: [
                        (0, s.jsx)(ek.ClockIcon, { size: "xxs", color: z.A.colors.ICON_OVERLAY_LIGHT }),
                        (0, s.jsx)(e_, { className: eP.jB }),
                    ],
                }),
            ],
        });
    },
    automod: function () {
        return (0, s.jsxs)("div", {
            className: eP.x,
            children: [
                (0, s.jsxs)("div", {
                    className: eP.iU,
                    children: [
                        (0, s.jsx)("span", { className: eP.my }),
                        (0, s.jsxs)("div", {
                            className: eP.OS,
                            children: [
                                (0, s.jsx)(e_, { className: eP.iE }),
                                (0, s.jsx)(e_, { className: r()(eP.xs, eP.pc) }),
                                (0, s.jsx)(e_, { className: r()(eP.Md, eP.pc) }),
                            ],
                        }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: eP.jC,
                    children: [
                        (0, s.jsx)(J.ShieldIcon, { size: "sm", color: z.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, s.jsxs)("div", {
                            className: eP.qQ,
                            children: [
                                (0, s.jsx)(e_, { className: r()(eP.Md, eP.k8) }),
                                (0, s.jsx)(e_, { className: r()(eP.nq, eP.k8) }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
};
function eU(e) {
    let { id: t } = e,
        n = eT[t];
    return (0, s.jsx)(n, {});
}
let eF = a.memo(function () {
    let e = a.useId();
    return (0, s.jsx)("section", {
        className: eP.GG,
        "aria-labelledby": e,
        children: (0, s.jsx)(eL.F, {
            component: (0, s.jsx)(u.D, {
                id: e,
                variant: "heading-lg/medium",
                children: R.intl.string(E.default.IiQEVd),
            }),
            children: (0, s.jsx)("ul", {
                className: eP.Vg,
                children: eO.map((e) => {
                    let { id: t, title: n, description: a } = e;
                    return (0, s.jsxs)(
                        "li",
                        {
                            className: eP.Vs,
                            children: [
                                (0, s.jsx)("div", {
                                    className: eP.Tn,
                                    "aria-hidden": !0,
                                    children: (0, s.jsx)(eU, { id: t }),
                                }),
                                (0, s.jsxs)("div", {
                                    className: eP.pG,
                                    children: [
                                        (0, s.jsx)(u.D, {
                                            variant: "text-md/semibold",
                                            color: "text-strong",
                                            children: R.intl.string(n),
                                        }),
                                        (0, s.jsx)(d.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: R.intl.string(a),
                                        }),
                                    ],
                                }),
                            ],
                        },
                        t,
                    );
                }),
            }),
        }),
    });
});
(n(323874), n(14289), n(35956));
var eM = n(666476),
    eD = n(287111),
    ez = n(177676);
let eG = 1;
function eH(e) {
    let t = (0, ez.Ft)(e),
        n = { localId: eG++, name: e.name, contentType: t };
    if ("too-large" === (0, ez.R9)(e, t))
        return { file: e, draft: { ...n, status: "error", errorText: (0, eD.iW)(t) } };
    let s = eM.XB.has(t) ? URL.createObjectURL(e) : void 0;
    return { file: e, draft: { ...n, status: "ready", previewUrl: s } };
}
function eq(e) {
    null != e.draft.previewUrl && URL.revokeObjectURL(e.draft.previewUrl);
}
async function eW(e, t) {
    if ("fits" === (0, ez.R9)(t, (0, ez.Ft)(t))) return (0, p.vX)(e, t);
    let n = await (0, ez.th)(t);
    if (null == n) throw Error("attachment over its size limit");
    return (0, p.vX)(e, n);
}
var eB = n(698638),
    eJ = n(606128),
    e$ = n(260024);
class eX extends Error {}
function eK(e) {
    let { guildId: t, onConjurePage: n = !1 } = e,
        [l, j] = a.useState(() => (n ? P.A.getHomePrompt() : ""));
    (0, k.N$)(l);
    let b = a.useRef(l);
    (a.useLayoutEffect(() => {
        b.current = l;
    }),
        a.useEffect(() => {
            if (n) return () => (0, O.fZ)(b.current);
        }, [n]));
    let y = (0, T.A)(n ? "home" : null),
        [D, z] = a.useState(!1),
        [G, H] = a.useState(null),
        [q, W] = a.useState(null),
        [B, J] = a.useState(() => U.w.get(F) ?? null ?? !0),
        $ = a.useRef(null),
        K = a.useMemo(
            () =>
                [
                    {
                        id: "flappy",
                        category: "games",
                        shortPrompt: R.intl.string(E.default.gtX7tS),
                        fullPrompt: R.intl.string(E.default["Sfa50+"]),
                        name: R.intl.string(E.default.Tbag5k),
                        authorAvatarSeed: "1",
                    },
                    {
                        id: "raid-calendar",
                        category: "apps",
                        shortPrompt: R.intl.string(E.default.GNGB59),
                        fullPrompt: R.intl.string(E.default.lxwxNm),
                        name: R.intl.string(E.default["rzB/bE"]),
                        authorAvatarSeed: "2",
                    },
                    {
                        id: "aram-widget",
                        category: "profile_widget",
                        shortPrompt: R.intl.string(E.default.RzNoHJ),
                        fullPrompt: R.intl.string(E.default.VfUFEt),
                        name: R.intl.string(E.default.RYGHMF),
                        authorAvatarSeed: "3",
                    },
                    {
                        id: "trivia",
                        category: "games",
                        shortPrompt: R.intl.string(E.default.TGN39X),
                        fullPrompt: R.intl.string(E.default.gilNLG),
                        name: R.intl.string(E.default.vvwBlz),
                        authorAvatarSeed: "4",
                    },
                    {
                        id: "spoilers-automod",
                        category: "automod",
                        shortPrompt: R.intl.string(E.default.Gw756q),
                        fullPrompt: R.intl.string(E.default["d/WMHR"]),
                        name: R.intl.string(E.default["v9+fAY"]),
                        authorAvatarSeed: "5",
                    },
                    {
                        id: "movie-night",
                        category: "apps",
                        shortPrompt: R.intl.string(E.default.u4UWGH),
                        fullPrompt: R.intl.string(E.default.ofBNNy),
                        name: R.intl.string(E.default.DQQdZL),
                        authorAvatarSeed: "6",
                    },
                    {
                        id: "welcome-bot",
                        category: "chat_bot",
                        shortPrompt: R.intl.string(E.default["T3+H3J"]),
                        fullPrompt: R.intl.string(E.default.ryeSuC),
                        name: R.intl.string(E.default["3deXbx"]),
                        authorAvatarSeed: "7",
                    },
                ].map((e) => ({ ...e, image: X[e.id] })),
            [],
        ),
        Y = "user" === (0, f.o)().get("target") || n,
        Q = (function () {
            let [e, t] = a.useState([]),
                n = a.useRef(e);
            (a.useLayoutEffect(() => {
                n.current = e;
            }),
                a.useEffect(() => () => n.current.forEach(eq), []));
            let s = a.useCallback((e) => {
                    if (0 === e.length) return;
                    let s = e.map(eH);
                    ((n.current = [...n.current, ...s]), t(n.current));
                }, []),
                l = (0, ez.sm)(s),
                r = a.useCallback((e) => {
                    let s = n.current.find((t) => t.draft.localId === e);
                    null != s && (eq(s), (n.current = n.current.filter((e) => e !== s)), t(n.current));
                }, []),
                i = a.useCallback(() => {
                    (n.current.forEach(eq), (n.current = []), t(n.current));
                }, []),
                o = a.useMemo(
                    () =>
                        (function (e) {
                            if (e.length <= eM.lN) return e;
                            let t = (0, ez.XV)();
                            return e.map((e, n) =>
                                n < eM.lN || "error" === e.draft.status
                                    ? e
                                    : { ...e, draft: { ...e.draft, status: "error", errorText: t } },
                            );
                        })(e),
                    [e],
                );
            return {
                attachments: o,
                addFiles: s,
                pasteFiles: l,
                removeAttachment: r,
                clear: i,
                hasErrors: o.some((e) => "error" === e.draft.status),
            };
        })(),
        { attachments: V, addFiles: Z, clear: et } = Q,
        en = (function (e) {
            let { guildId: t, modelSettings: n } = e,
                [s, l] = a.useState(!1),
                r = a.useRef(!1);
            return {
                importing: s,
                importArchive: a.useCallback(
                    async (e, s) => {
                        if (r.current) return;
                        let a = (0, x.vt)(e);
                        if (null != a) return void (0, g.P0)({ text: a, variant: "critical" });
                        ((r.current = !0), l(!0));
                        try {
                            let a = await w({
                                guildId: t,
                                installScope: s,
                                modelSettings: n,
                                start: async (t) => {
                                    try {
                                        let n = await (0, p.vX)(t, e);
                                        (0, A.P6)(t, R.intl.string(E.default["LUc7/5"]), [n]);
                                    } catch {
                                        try {
                                            await (0, N.xx)(t);
                                        } catch {}
                                        throw new S();
                                    }
                                },
                            });
                            (0, C.Ay)(a);
                        } catch (e) {
                            (0, g.P0)({
                                text: e instanceof S ? R.intl.string(E.default["Q+l4Hv"]) : (0, v.mG)(e),
                                variant: "critical",
                            });
                        } finally {
                            ((r.current = !1), l(!1));
                        }
                    },
                    [t, n],
                ),
            };
        })({ guildId: t, modelSettings: q }),
        { importArchive: es } = en,
        ea = D || en.importing,
        el = "" !== l.trim() || V.length > 0,
        er = ea || !el || Q.hasErrors,
        ei = (0, x.yN)(a.useCallback((e) => es(e, Y ? "user" : null), [es, Y])),
        eo = a.useCallback((e) => Z(Array.from(e)), [Z]),
        ec = a.useContext(L.A),
        eu = (0, _.l)(),
        ed = (0, i.bG)([P.A], () => P.A.isOverlayOpen());
    (0, M.p)($, ec ? eu : !ed);
    let em = a.useCallback((e) => {
            (j(e), H(null));
        }, []),
        eh = a.useCallback(
            (e) => {
                em(e);
                let t = $.current;
                null != t && (t.focus(), t.setSelectionRange(e.length, e.length));
            },
            [em],
        ),
        ex = a.useRef(!1),
        eg = a.useCallback(async () => {
            let e = l.trim();
            if (("" !== e || 0 !== V.length) && !ex.current) {
                ((ex.current = !0), z(!0), H(null));
                try {
                    let s = await w({
                        guildId: t,
                        installScope: null,
                        prompt: e,
                        modelSettings: q,
                        start: async (s) => {
                            let a = [];
                            if (V.length > 0)
                                try {
                                    a = await Promise.all(
                                        V.map((e) => {
                                            let { file: t } = e;
                                            return eW(s, t);
                                        }),
                                    );
                                } catch {
                                    throw (await (0, N.xx)(s).catch(() => void 0), new eX());
                                }
                            ((0, A.P6)(s, e, a, n ? void 0 : t), et());
                        },
                    });
                    (j(""), (b.current = ""), (ex.current = !1), z(!1), (0, C.Ay)(s));
                } catch (e) {
                    (H(e instanceof eX ? R.intl.string(E.default["903H7m"]) : (0, v.mG)(e)), (ex.current = !1), z(!1));
                }
            }
        }, [l, q, t, n, V, et]),
        ep = a.useCallback((e) => {
            (U.w.set(F, e), J(e));
        }, []),
        ev = a.useCallback(() => ep(!1), [ep]),
        ej = R.intl.string(B ? E.default.kar7jh : E.default.WSc5Y2);
    return (0, s.jsx)("div", {
        className: r()(e$.MY, eJ.T),
        children: (0, s.jsxs)("div", {
            className: e$.Zp,
            children: [
                (0, s.jsxs)("main", {
                    className: e$.iW,
                    children: [
                        ea
                            ? null
                            : (0, s.jsx)(m.A, {
                                  title: R.intl.string(E.default.gy7byi),
                                  description: R.intl.string(E.default["dkv/WO"]),
                                  icons: eB.ir,
                                  onDrop: eo,
                              }),
                        n
                            ? null
                            : (0, s.jsx)(I.A, {
                                  title: R.intl.string(E.default.uk6jhJ),
                                  transparent: !0,
                                  actions: (0, s.jsx)(h.A.Icon, {
                                      icon: o.Z,
                                      color: "var(--icon-strong)",
                                      className: e$.FW,
                                      tooltip: ej,
                                      "aria-label": ej,
                                      selected: B,
                                      onClick: () => ep(!B),
                                  }),
                              }),
                        (0, s.jsx)(c.Ip, {
                            ref: y,
                            className: e$.XG,
                            children: (0, s.jsxs)("div", {
                                className: e$.Qs,
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: r()(e$.Lv, { [e$.$O]: n }),
                                        children: [
                                            (0, s.jsxs)("div", {
                                                className: e$.ZK,
                                                children: [
                                                    (0, s.jsx)(u.D, {
                                                        variant: "display-lg",
                                                        color: "text-strong",
                                                        className: e$.DD,
                                                        children: R.intl.string(E.default.doYpEy),
                                                    }),
                                                    (0, s.jsx)(d.E, {
                                                        variant: "text-md/normal",
                                                        color: "text-strong",
                                                        className: e$.VA,
                                                        children: R.intl.string(E.default.BH58fD),
                                                    }),
                                                ],
                                            }),
                                            (0, s.jsxs)("div", {
                                                className: e$.ZK,
                                                children: [
                                                    (0, s.jsx)(eE, {
                                                        idea: l,
                                                        inputRef: $,
                                                        onIdeaChange: em,
                                                        onSubmit: eg,
                                                        submitting: ea,
                                                        submitDisabled: er,
                                                        error: G,
                                                        modelSettings: q,
                                                        onModelSettingsChange: W,
                                                        attachments: Q,
                                                        onImport: ei.open,
                                                    }),
                                                    ei.input,
                                                    (0, s.jsx)(d.E, {
                                                        variant: "text-xxs/normal",
                                                        color: "text-muted",
                                                        children: R.intl.string(E.default.hebdhA),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, s.jsx)(ee, { inspirations: K, onCopyPrompt: eh }),
                                    (0, s.jsx)(eF, {}),
                                ],
                            }),
                        }),
                    ],
                }),
                B && !n ? (0, s.jsx)(ef, { guildId: t, archiveImport: en, onClose: ev }) : null,
            ],
        }),
    });
}
