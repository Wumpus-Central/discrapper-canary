n.d(t, { A: () => e$ });
var s = n(477900),
    a = n(582128),
    l = n(503698),
    r = n.n(l),
    i = n(97893),
    o = n(364522),
    c = n(297264),
    u = n(834730),
    d = n(65593),
    m = n(458518),
    f = n(742589),
    h = n(949757),
    x = n(858899),
    g = n(989145),
    p = n(639519),
    v = n(889921),
    j = n(371169),
    N = n(391712);
async function b(e) {
    let { guildId: t, installScope: n, prompt: s, modelSettings: a, templateId: l } = e,
        r = await (0, j.gA)(
            null != n
                ? { guild_id: t, install_scope: n }
                : { guild_id: t, auto_install_scope: !0, prompt: (s ?? "").slice(0, 4e3) },
        );
    return ((0, v.ensureConnection)(r, { templateId: l }), (0, v.stageModelSettings)(r, a ?? N.A4), r);
}
async function y(e) {
    let { start: t, ...n } = e,
        s = await b(n);
    return (await t(s), s);
}
var w = n(381991),
    C = n(708679),
    A = n(248675),
    E = n(105292);
class R extends Error {}
var I = n(705427),
    S = n(120234),
    k = n(398773),
    L = n(735769),
    P = n(101766);
(n(976860), n(652215), n(746080));
var O = n(506774);
let _ = "ConjureProjectsPanelOpen";
var T = n(89310),
    U = n(17928),
    F = n(821609),
    M = n(661531),
    D = n(775602),
    z = n(486020),
    G = n(687966),
    H = n(323384),
    q = n(632015),
    W = n(231483),
    B = n(430392);
let J = {
        flappy: "/assets/b43659b526f2e936.svg",
        "raid-calendar": "/assets/1d701ea289cc99e6.svg",
        "aram-widget": "/assets/05c0d07952b2d93f.svg",
        trivia: "/assets/5813258afff68797.svg",
        "spoilers-automod": "/assets/54b5cda688395473.svg",
        "movie-night": "/assets/fcb9220c49b6460a.svg",
        "welcome-bot": "/assets/56e489e9c5907add.svg",
    },
    $ = { games: G.GameControllerIcon, apps: H.k, profile_widget: q.f, automod: W.ShieldIcon, chat_bot: B.RobotIcon };
var X = n(621466);
let K = "data-conjure-carousel-card";
var Y = n(19493);
let Q = a.memo(function (e) {
        let { inspiration: t, onCopyPrompt: n } = e,
            a = $[t.category];
        return (0, s.jsxs)("li", {
            className: Y.AS,
            [K]: "",
            children: [
                (0, s.jsxs)("div", {
                    className: Y.rl,
                    children: [
                        (0, s.jsx)("img", {
                            className: Y.my,
                            src: (0, z.AE)(void 0, t.authorAvatarSeed),
                            alt: "",
                            "aria-hidden": !0,
                        }),
                        (0, s.jsx)(u.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            className: Y.Tq,
                            children: t.shortPrompt,
                        }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: Y.Nr,
                    children: [
                        (0, s.jsxs)("div", {
                            className: Y.xn,
                            children: [
                                (0, s.jsx)("img", { className: Y.q_, src: t.image, alt: "" }),
                                (0, s.jsx)("div", {
                                    className: Y.o1,
                                    children: (0, s.jsx)(F.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: E.intl.string(A.default["6CQjTy"]),
                                        onClick: () => n(t.fullPrompt),
                                    }),
                                }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: Y.qr,
                            children: [
                                (0, s.jsx)("div", {
                                    className: Y.Yl,
                                    "aria-hidden": !0,
                                    children: (0, s.jsx)(a, { size: "md", color: M.A.colors.ICON_STRONG }),
                                }),
                                (0, s.jsxs)("div", {
                                    className: Y.PJ,
                                    children: [
                                        (0, s.jsx)(u.E, {
                                            variant: "text-md/semibold",
                                            color: "text-strong",
                                            lineClamp: 1,
                                            children: t.name,
                                        }),
                                        (0, s.jsx)(u.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            lineClamp: 1,
                                            children: (function (e) {
                                                switch (e) {
                                                    case "games":
                                                        return E.intl.string(A.default["JU01/4"]);
                                                    case "apps":
                                                        return E.intl.string(A.default["bvcT/Q"]);
                                                    case "profile_widget":
                                                        return E.intl.string(A.default.GUb2zA);
                                                    case "automod":
                                                        return E.intl.string(A.default["+EKk4D"]);
                                                    case "chat_bot":
                                                        return E.intl.string(A.default.KBHZfO);
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
    V = a.memo(function (e) {
        var t;
        let { inspirations: n, onCopyPrompt: l } = e,
            r = (0, U.bG)([D.Ay], () => D.Ay.useReducedMotion),
            i = a.useRef(null),
            o = a.useRef(null);
        return (
            (t = !r),
            a.useEffect(() => {
                let e = i.current,
                    n = o.current;
                if (null == e || null == n) return;
                let s = [],
                    a = [],
                    l = 1,
                    r = 0,
                    c = 1,
                    u = 0,
                    d = 0,
                    m = null,
                    f = !1,
                    h = !1,
                    x = document.hasFocus(),
                    g = !0;
                function p() {
                    if (null == e || null == n) return;
                    a = (s = Array.from(n.querySelectorAll(`[${K}]`))).map((e) => e.offsetLeft + e.offsetWidth / 2);
                    let i = (l = s.length > 1 ? Math.abs(s[1].offsetLeft - s[0].offsetLeft) : 1) * s.length;
                    ((r = t && i >= e.clientWidth + 2 * l ? i : 0),
                        (c = "rtl" === getComputedStyle(e).direction ? -1 : 1));
                }
                function v() {
                    if (null == e) return;
                    let t = e.scrollLeft + e.clientWidth / 2;
                    s.forEach((e, n) => {
                        var s, i;
                        let o,
                            d,
                            m = a[n] - t;
                        r > 0 && (m = ((((m - u * c + (s = r) / 2) % s) + s) % s) - s / 2);
                        let { angleDeg: f, dropPx: h } =
                            ((i = m / l),
                            (d =
                                (l / ((4 * Math.PI) / 180)) *
                                (1 - Math.cos(((o = Math.max(-12, Math.min(12, 4 * i))) * Math.PI) / 180))),
                            { angleDeg: o, dropPx: d });
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
                    ((h = (0, X.vq)(t.relatedTarget, Node) && e?.contains(t.relatedTarget) === !0), N());
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
                let I = new IntersectionObserver((e) => {
                    let [t] = e;
                    ((g = t.isIntersecting), N());
                });
                return (
                    I.observe(e),
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
                            I.disconnect(),
                            e.removeEventListener("scroll", v),
                            e.removeEventListener("pointerenter", b),
                            e.removeEventListener("pointerleave", y),
                            e.removeEventListener("focusin", w),
                            e.removeEventListener("focusout", C),
                            window.removeEventListener("focus", A),
                            window.removeEventListener("blur", E));
                    }
                );
            }, [i, o, t]),
            (0, s.jsx)("section", {
                ref: i,
                className: r ? Y.vV : Y.Dk,
                "aria-label": E.intl.string(A.default.Qc4S39),
                children: (0, s.jsx)("ul", {
                    ref: o,
                    className: Y.u4,
                    children: n.map((e) => (0, s.jsx)(Q, { inspiration: e, onCopyPrompt: l }, e.id)),
                }),
            })
        );
    });
var Z = n(789645),
    ee = n(265872),
    et = n(980707),
    en = n(477782),
    es = n(81369),
    ea = n(950305),
    el = n(664121);
let er = [
    { value: "user", icon: ea.UserIcon, nameMessage: A.default.s1TsXl },
    { value: "guild", icon: el.R, nameMessage: A.default.LlLIJw },
];
function ei(e) {
    let { importing: t, onImport: n } = e,
        l = a.useRef(null),
        r = (0, h.yN)(a.useCallback((e) => n(e, "user"), [n])),
        i = (0, h.yN)(a.useCallback((e) => n(e, "guild"), [n])),
        o = { user: r.open, guild: i.open };
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(ee.Y, {
                targetElementRef: l,
                position: "bottom",
                align: "right",
                animation: ee.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, s.jsx)(et.W, {
                        "data-menu-migrated": !0,
                        navId: "conjure-import-scope",
                        "aria-label": E.intl.string(A.default.soVyD1),
                        onClose: t,
                        onSelect: t,
                        children: (0, s.jsx)(en.rX, {
                            label: E.intl.string(A.default.NyVn6T),
                            children: er
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: E.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, s.jsx)(
                                        en.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: o[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, n) => {
                    let { isShown: a } = n;
                    return (0, s.jsx)(F.$, {
                        ...e,
                        buttonRef: l,
                        variant: "secondary",
                        size: "sm",
                        icon: es.H,
                        text: E.intl.string(A.default.NJGZA3),
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
var eo = n(919229),
    ec = n(380654),
    eu = n(638693);
function ed(e) {
    let { guildId: t, archiveImport: n, onClose: l } = e,
        r = a.useCallback((e) => (0, w.A)(e.id), []),
        i = a.useCallback((e) => (0, s.jsx)(ec.S, { project: e, guildId: t }), [t]),
        u = a.useCallback((e, n) => (0, ec.V)(e, n, t), [t]),
        d = E.intl.string(A.default.dWgSAa),
        m = E.intl.string(A.default.kar7jh);
    return (0, s.jsxs)("aside", {
        className: eu.pz,
        "aria-label": d,
        children: [
            (0, s.jsxs)("div", {
                className: eu.wx,
                children: [
                    (0, s.jsx)(c.D, { variant: "heading-md/semibold", color: "text-strong", children: d }),
                    (0, s.jsxs)("div", {
                        className: eu.$s,
                        children: [
                            (0, s.jsx)(ei, { importing: n.importing, onImport: n.importArchive }),
                            (0, s.jsx)(f.A.Icon, { icon: Z.P, tooltip: m, "aria-label": m, onClick: l }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)(o.Ip, {
                className: eu.XG,
                children: (0, s.jsx)(eo.A, {
                    onSelect: r,
                    guildId: t,
                    renderProjectActions: i,
                    onProjectContextMenu: u,
                }),
            }),
        ],
    });
}
var em = n(559106),
    ef = n(783977),
    eh = n(559647),
    ex = n(531685),
    eg = n(957071),
    ep = n(34595),
    ev = n(587157),
    ej = n(200160),
    eN = n(465410);
function eb(e) {
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
    return (0, s.jsxs)(u.E, {
        variant: "text-md/normal",
        color: "text-muted",
        className: ej.RC,
        children: [t[r].slice(0, i), l ? (0, s.jsx)("span", { className: ej.OW }) : null],
    });
}
function ey(e) {
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
    return (0, s.jsx)(u.E, { variant: "text-md/normal", color: "text-muted", className: ej.RC, children: t[l] });
}
function ew(e) {
    let { boxFocused: t } = e,
        n = a.useMemo(
            () => [
                E.intl.string(A.default.J2o8Ae),
                E.intl.string(A.default["wn+Bzd"]),
                E.intl.string(A.default["6DCVy3"]),
                E.intl.string(A.default.iRbnRD),
                E.intl.string(A.default["p/zqml"]),
            ],
            [],
        ),
        l = (0, U.bG)([D.Ay], () => D.Ay.useReducedMotion),
        r = (0, U.bG)([ex.A], () => ex.A.isFocused()),
        i = t || !r;
    return (0, s.jsx)("div", {
        className: ej.qf,
        "aria-hidden": !0,
        children: l
            ? (0, s.jsx)(ey, { prompts: n, paused: i })
            : (0, s.jsx)(eb, { prompts: n, paused: i, showCaret: !t }),
    });
}
function eC(e) {
    let {
            idea: t,
            inputRef: n,
            onIdeaChange: l,
            onSubmit: i,
            submitting: o,
            submitDisabled: c,
            error: d,
            modelSettings: m,
            onModelSettingsChange: f,
            attachments: h,
            onImport: x,
        } = e,
        [g, p] = a.useState(!1),
        v = a.useRef(null),
        j = a.useId(),
        b = "" !== t,
        { addFiles: y, pasteFiles: w, removeAttachment: C } = h;
    a.useLayoutEffect(() => {
        let e = n.current;
        null != e &&
            (e.scrollHeight <= e.clientHeight && (e.style.height = "auto"), (e.style.height = `${e.scrollHeight}px`));
    }, [t, n]);
    let R = a.useCallback(
        (e) => {
            "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), c || i());
        },
        [c, i],
    );
    return (0, s.jsxs)("div", {
        className: ej.kL,
        children: [
            (0, s.jsxs)("div", {
                ref: v,
                className: r()(ej.yk, { [ej.Sl]: null != d }),
                children: [
                    (0, s.jsxs)(u.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        className: ej.Ox,
                        children: [
                            (0, s.jsx)(em.vN, {
                                ringTarget: v,
                                ringClassName: ej.Rg,
                                children: (0, s.jsx)("textarea", {
                                    ref: n,
                                    className: r()(ej.hF, eN.yL),
                                    rows: 3,
                                    value: t,
                                    "aria-label": E.intl.string(A.default.cwrS1O),
                                    "aria-invalid": null != d,
                                    "aria-describedby": null != d ? j : void 0,
                                    onChange: (e) => l(e.currentTarget.value),
                                    onKeyDown: R,
                                    onPaste: (e) => w(e),
                                    onFocus: () => p(!0),
                                    onBlur: () => p(!1),
                                }),
                            }),
                            b ? null : (0, s.jsx)(ew, { boxFocused: g }),
                        ],
                    }),
                    h.attachments.length > 0
                        ? (0, s.jsx)("div", {
                              className: ej.ZO,
                              children: h.attachments.map((e) => {
                                  let { draft: t } = e;
                                  return (0, s.jsx)(ep.Nl, { draft: t, onRemove: C }, t.localId);
                              }),
                          })
                        : null,
                    (0, s.jsxs)("div", {
                        className: ej.KE,
                        children: [
                            (0, s.jsx)(eg.A, {
                                navId: "conjure-home-attach",
                                disabled: o,
                                buttonClassName: ej.gb,
                                iconClassName: ej.Xv,
                                onAddFiles: y,
                                onImport: x,
                            }),
                            (0, s.jsxs)("div", {
                                className: ej.Rc,
                                children: [
                                    (0, s.jsx)(ev.A, {
                                        settings: m ?? N.A4,
                                        tiers: N.lO,
                                        choices: (0, N.Pu)(),
                                        disabled: o,
                                        onChange: f,
                                        className: ej.gb,
                                        icon: (0, s.jsx)(ef.R, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, s.jsx)(F.$, {
                                        variant: "primary",
                                        size: "sm",
                                        icon: eh.SendMessageIcon,
                                        text: E.intl.string(A.default.bNtzxp),
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
            null != d
                ? (0, s.jsx)(u.E, {
                      id: j,
                      variant: "text-sm/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      children: d,
                  })
                : null,
        ],
    });
}
var eA = n(628284),
    eE = n(369606),
    eR = n(926268),
    eI = n(406810),
    eS = n(707554);
let ek = [
    { id: "apps", title: A.default["bvcT/Q"], description: A.default.ArcJqa },
    { id: "games", title: A.default["JU01/4"], description: A.default.FXwLsv },
    { id: "bots", title: A.default.KBHZfO, description: A.default.qNmKhG },
    { id: "profile-widgets", title: A.default.GUb2zA, description: A.default["v+F6qW"] },
    { id: "overlay-widgets", title: A.default.uVOH1p, description: A.default.zm7y9u },
    { id: "automod", title: A.default["+EKk4D"], description: A.default.fpXK3z },
];
var eL = n(651346);
function eP(e) {
    let { className: t } = e;
    return (0, s.jsx)("span", { className: r()(eL.n8, t) });
}
let eO = {
    apps: function () {
        return (0, s.jsxs)("div", {
            className: eL.x,
            children: [
                (0, s.jsxs)("div", {
                    className: eL.My,
                    children: [
                        (0, s.jsx)("span", { className: eL._w }),
                        (0, s.jsx)("span", { className: eL._w }),
                        (0, s.jsx)("span", { className: eL._w }),
                    ],
                }),
                (0, s.jsx)(eP, { className: eL.Lm }),
                (0, s.jsx)("div", {
                    className: eL.Oh,
                    children: [0, 1, 2].map((e) =>
                        (0, s.jsxs)(
                            "div",
                            {
                                className: eL.ZW,
                                children: [
                                    (0, s.jsx)("span", { className: eL.NU }),
                                    0 === e
                                        ? (0, s.jsx)(eA.y, {
                                              size: "xs",
                                              color: M.A.colors.ICON_BRAND,
                                              className: eL._6,
                                          })
                                        : null,
                                    (0, s.jsx)(eP, { className: eL.Eg }),
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
            className: r()(eL.x, eL.jG),
            children: [
                (0, s.jsx)("span", { className: r()(eL.gg, eL.K1) }),
                (0, s.jsx)("span", { className: r()(eL.gg, eL.W2) }),
                (0, s.jsx)("span", { className: r()(eL.Fs, eL.A$) }),
                (0, s.jsx)("span", { className: r()(eL.Fs, eL.eP) }),
                (0, s.jsx)("span", { className: r()(eL.Fs, eL.kc) }),
                (0, s.jsx)("span", { className: r()(eL.Fs, eL.OE) }),
                (0, s.jsx)("span", { className: eL.OC }),
                (0, s.jsxs)("div", {
                    className: eL.si,
                    children: [
                        (0, s.jsx)(eE.TrophyIcon, { size: "xxs", color: M.A.colors.ICON_FEEDBACK_WARNING }),
                        (0, s.jsx)(u.E, { variant: "text-xs/bold", color: "none", className: eL.o9, children: 128 }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: eL.KQ,
                    children: [
                        (0, s.jsx)(eR.HeartIcon, { size: "xxs", color: M.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, s.jsx)(eR.HeartIcon, { size: "xxs", color: M.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, s.jsx)(eR.HeartIcon, { size: "xxs", color: M.A.colors.ICON_OVERLAY_LIGHT }),
                    ],
                }),
            ],
        });
    },
    bots: function () {
        return (0, s.jsxs)("div", {
            className: eL.x,
            children: [
                (0, s.jsxs)("div", {
                    className: eL.$y,
                    children: [(0, s.jsx)("span", { className: eL.m$ }), (0, s.jsx)(eP, { className: eL.Md })],
                }),
                (0, s.jsxs)("div", {
                    className: eL.iU,
                    children: [
                        (0, s.jsx)("span", {
                            className: r()(eL.my, eL.FY),
                            children: (0, s.jsx)(B.RobotIcon, { size: "xs", color: M.A.colors.ICON_OVERLAY_LIGHT }),
                        }),
                        (0, s.jsxs)("div", {
                            className: eL.OS,
                            children: [
                                (0, s.jsxs)("div", {
                                    className: eL.f9,
                                    children: [
                                        (0, s.jsx)(eP, { className: eL.iE }),
                                        (0, s.jsx)(u.E, {
                                            variant: "text-xs/bold",
                                            color: "none",
                                            className: eL.AO,
                                            children: E.intl.string(A.default.VlgiLf),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(eP, { className: eL.xs }),
                                (0, s.jsx)(eP, { className: eL.Md }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    "profile-widgets": function () {
        return (0, s.jsxs)("div", {
            className: r()(eL.x, eL.ME),
            children: [
                (0, s.jsx)("span", { className: eL.CK }),
                (0, s.jsxs)("div", {
                    className: eL.kI,
                    children: [
                        (0, s.jsx)("span", { className: r()(eL.my, eL.jU) }),
                        (0, s.jsx)(eP, { className: eL.iE }),
                        (0, s.jsxs)("div", {
                            className: eL.Wy,
                            children: [
                                (0, s.jsx)("div", {
                                    className: eL.M1,
                                    children: [0, 1].map((e) =>
                                        (0, s.jsxs)(
                                            "div",
                                            {
                                                className: eL.dJ,
                                                children: [
                                                    (0, s.jsx)(eP, { className: eL.cR }),
                                                    (0, s.jsx)(eP, { className: eL.Zh }),
                                                ],
                                            },
                                            e,
                                        ),
                                    ),
                                }),
                                (0, s.jsx)("div", {
                                    className: eL.bW,
                                    children: [0, 1, 2, 3, 4, 5].map((e) =>
                                        (0, s.jsx)("span", { className: eL.QR }, e),
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
            className: eL.JH,
            children: [
                (0, s.jsx)("span", { className: eL.rx }),
                (0, s.jsx)("span", { className: eL.ny }),
                (0, s.jsx)("span", { className: eL.ZH }),
                (0, s.jsx)("div", {
                    className: eL.$Y,
                    children: [0, 1, 2].map((e) =>
                        (0, s.jsxs)(
                            "div",
                            {
                                className: eL.fn,
                                children: [
                                    (0, s.jsx)("span", { className: r()(eL._h, { [eL.zY]: 0 === e }) }),
                                    (0, s.jsx)(eP, { className: eL.Av }),
                                ],
                            },
                            e,
                        ),
                    ),
                }),
                (0, s.jsxs)("div", {
                    className: eL.Y5,
                    children: [
                        (0, s.jsx)(eI.ClockIcon, { size: "xxs", color: M.A.colors.ICON_OVERLAY_LIGHT }),
                        (0, s.jsx)(eP, { className: eL.jB }),
                    ],
                }),
            ],
        });
    },
    automod: function () {
        return (0, s.jsxs)("div", {
            className: eL.x,
            children: [
                (0, s.jsxs)("div", {
                    className: eL.iU,
                    children: [
                        (0, s.jsx)("span", { className: eL.my }),
                        (0, s.jsxs)("div", {
                            className: eL.OS,
                            children: [
                                (0, s.jsx)(eP, { className: eL.iE }),
                                (0, s.jsx)(eP, { className: r()(eL.xs, eL.pc) }),
                                (0, s.jsx)(eP, { className: r()(eL.Md, eL.pc) }),
                            ],
                        }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: eL.jC,
                    children: [
                        (0, s.jsx)(W.ShieldIcon, { size: "sm", color: M.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, s.jsxs)("div", {
                            className: eL.qQ,
                            children: [
                                (0, s.jsx)(eP, { className: r()(eL.Md, eL.k8) }),
                                (0, s.jsx)(eP, { className: r()(eL.nq, eL.k8) }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
};
function e_(e) {
    let { id: t } = e,
        n = eO[t];
    return (0, s.jsx)(n, {});
}
let eT = a.memo(function () {
    let e = a.useId();
    return (0, s.jsx)("section", {
        className: eL.GG,
        "aria-labelledby": e,
        children: (0, s.jsx)(eS.F, {
            component: (0, s.jsx)(c.D, {
                id: e,
                variant: "heading-lg/medium",
                children: E.intl.string(A.default.IiQEVd),
            }),
            children: (0, s.jsx)("ul", {
                className: eL.Vg,
                children: ek.map((e) => {
                    let { id: t, title: n, description: a } = e;
                    return (0, s.jsxs)(
                        "li",
                        {
                            className: eL.Vs,
                            children: [
                                (0, s.jsx)("div", {
                                    className: eL.Tn,
                                    "aria-hidden": !0,
                                    children: (0, s.jsx)(e_, { id: t }),
                                }),
                                (0, s.jsxs)("div", {
                                    className: eL.pG,
                                    children: [
                                        (0, s.jsx)(c.D, {
                                            variant: "text-md/semibold",
                                            color: "text-strong",
                                            children: E.intl.string(n),
                                        }),
                                        (0, s.jsx)(u.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: E.intl.string(a),
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
var eU = n(666476),
    eF = n(287111),
    eM = n(177676);
let eD = 1;
function ez(e) {
    let t = (0, eM.Ft)(e),
        n = { localId: eD++, name: e.name, contentType: t };
    if ("too-large" === (0, eM.R9)(e, t))
        return { file: e, draft: { ...n, status: "error", errorText: (0, eF.iW)(t) } };
    let s = eU.XB.has(t) ? URL.createObjectURL(e) : void 0;
    return { file: e, draft: { ...n, status: "ready", previewUrl: s } };
}
function eG(e) {
    null != e.draft.previewUrl && URL.revokeObjectURL(e.draft.previewUrl);
}
async function eH(e, t) {
    if ("fits" === (0, eM.R9)(t, (0, eM.Ft)(t))) return (0, g.vX)(e, t);
    let n = await (0, eM.th)(t);
    if (null == n) throw Error("attachment over its size limit");
    return (0, g.vX)(e, n);
}
var eq = n(698638),
    eW = n(606128),
    eB = n(260024);
class eJ extends Error {}
function e$(e) {
    let { guildId: t, onConjurePage: n = !1 } = e,
        [l, v] = a.useState(() => (n ? L.A.getHomePrompt() : ""));
    (0, S.N$)(l);
    let N = a.useRef(l);
    (a.useLayoutEffect(() => {
        N.current = l;
    }),
        a.useEffect(() => {
            if (n) return () => (0, k.fZ)(N.current);
        }, [n]));
    let b = (0, P.A)(n ? "home" : null),
        [U, F] = a.useState(!1),
        [M, D] = a.useState(null),
        [z, G] = a.useState(null),
        [H, q] = a.useState(() => O.w.get(_) ?? null ?? !0),
        W = a.useRef(null),
        B = a.useMemo(
            () =>
                [
                    {
                        id: "flappy",
                        category: "games",
                        shortPrompt: E.intl.string(A.default.gtX7tS),
                        fullPrompt: E.intl.string(A.default["Sfa50+"]),
                        name: E.intl.string(A.default.Tbag5k),
                        authorAvatarSeed: "1",
                    },
                    {
                        id: "raid-calendar",
                        category: "apps",
                        shortPrompt: E.intl.string(A.default.GNGB59),
                        fullPrompt: E.intl.string(A.default.lxwxNm),
                        name: E.intl.string(A.default["rzB/bE"]),
                        authorAvatarSeed: "2",
                    },
                    {
                        id: "aram-widget",
                        category: "profile_widget",
                        shortPrompt: E.intl.string(A.default.RzNoHJ),
                        fullPrompt: E.intl.string(A.default.VfUFEt),
                        name: E.intl.string(A.default.RYGHMF),
                        authorAvatarSeed: "3",
                    },
                    {
                        id: "trivia",
                        category: "games",
                        shortPrompt: E.intl.string(A.default.TGN39X),
                        fullPrompt: E.intl.string(A.default.gilNLG),
                        name: E.intl.string(A.default.vvwBlz),
                        authorAvatarSeed: "4",
                    },
                    {
                        id: "spoilers-automod",
                        category: "automod",
                        shortPrompt: E.intl.string(A.default.Gw756q),
                        fullPrompt: E.intl.string(A.default["d/WMHR"]),
                        name: E.intl.string(A.default["v9+fAY"]),
                        authorAvatarSeed: "5",
                    },
                    {
                        id: "movie-night",
                        category: "apps",
                        shortPrompt: E.intl.string(A.default.u4UWGH),
                        fullPrompt: E.intl.string(A.default.ofBNNy),
                        name: E.intl.string(A.default.DQQdZL),
                        authorAvatarSeed: "6",
                    },
                    {
                        id: "welcome-bot",
                        category: "chat_bot",
                        shortPrompt: E.intl.string(A.default["T3+H3J"]),
                        fullPrompt: E.intl.string(A.default.ryeSuC),
                        name: E.intl.string(A.default["3deXbx"]),
                        authorAvatarSeed: "7",
                    },
                ].map((e) => ({ ...e, image: J[e.id] })),
            [],
        ),
        $ = "user" === (0, m.o)().get("target") || n,
        X = (function () {
            let [e, t] = a.useState([]),
                n = a.useRef(e);
            (a.useLayoutEffect(() => {
                n.current = e;
            }),
                a.useEffect(() => () => n.current.forEach(eG), []));
            let s = a.useCallback((e) => {
                    if (0 === e.length) return;
                    let s = e.map(ez);
                    ((n.current = [...n.current, ...s]), t(n.current));
                }, []),
                l = (0, eM.sm)(s),
                r = a.useCallback((e) => {
                    let s = n.current.find((t) => t.draft.localId === e);
                    null != s && (eG(s), (n.current = n.current.filter((e) => e !== s)), t(n.current));
                }, []),
                i = a.useCallback(() => {
                    (n.current.forEach(eG), (n.current = []), t(n.current));
                }, []),
                o = a.useMemo(
                    () =>
                        (function (e) {
                            if (e.length <= eU.lN) return e;
                            let t = (0, eM.XV)();
                            return e.map((e, n) =>
                                n < eU.lN || "error" === e.draft.status
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
        { attachments: K, addFiles: Y, clear: Q } = X,
        Z = (function (e) {
            let { guildId: t, modelSettings: n } = e,
                [s, l] = a.useState(!1),
                r = a.useRef(!1);
            return {
                importing: s,
                importArchive: a.useCallback(
                    async (e, s) => {
                        if (r.current) return;
                        let a = (0, h.vt)(e);
                        if (null != a) return void (0, x.P0)({ text: a, variant: "critical" });
                        ((r.current = !0), l(!0));
                        try {
                            let a = await y({
                                guildId: t,
                                installScope: s,
                                modelSettings: n,
                                start: async (t) => {
                                    try {
                                        let n = await (0, g.vX)(t, e);
                                        (0, C.P6)(t, E.intl.string(A.default["LUc7/5"]), [n]);
                                    } catch {
                                        try {
                                            await (0, j.xx)(t);
                                        } catch {}
                                        throw new R();
                                    }
                                },
                            });
                            (0, w.A)(a);
                        } catch (e) {
                            (0, x.P0)({
                                text: e instanceof R ? E.intl.string(A.default["Q+l4Hv"]) : (0, p.mG)(e),
                                variant: "critical",
                            });
                        } finally {
                            ((r.current = !1), l(!1));
                        }
                    },
                    [t, n],
                ),
            };
        })({ guildId: t, modelSettings: z }),
        { importArchive: ee } = Z,
        et = U || Z.importing,
        en = "" !== l.trim() || K.length > 0,
        es = et || !en || X.hasErrors,
        ea = (0, h.yN)(a.useCallback((e) => ee(e, $ ? "user" : null), [ee, $])),
        el = a.useCallback((e) => Y(Array.from(e)), [Y]);
    (0, T.p)(W);
    let er = a.useCallback((e) => {
            (v(e), D(null));
        }, []),
        ei = a.useCallback(
            (e) => {
                er(e);
                let t = W.current;
                null != t && (t.focus(), t.setSelectionRange(e.length, e.length));
            },
            [er],
        ),
        eo = a.useRef(!1),
        ec = a.useCallback(async () => {
            let e = l.trim();
            if (("" !== e || 0 !== K.length) && !eo.current) {
                ((eo.current = !0), F(!0), D(null));
                try {
                    let s = await y({
                        guildId: t,
                        installScope: null,
                        prompt: e,
                        modelSettings: z,
                        start: async (s) => {
                            let a = [];
                            if (K.length > 0)
                                try {
                                    a = await Promise.all(
                                        K.map((e) => {
                                            let { file: t } = e;
                                            return eH(s, t);
                                        }),
                                    );
                                } catch {
                                    throw (await (0, j.xx)(s).catch(() => void 0), new eJ());
                                }
                            ((0, C.P6)(s, e, a, n ? void 0 : t), Q());
                        },
                    });
                    (v(""), (N.current = ""), (eo.current = !1), F(!1), (0, w.A)(s));
                } catch (e) {
                    (D(e instanceof eJ ? E.intl.string(A.default["903H7m"]) : (0, p.mG)(e)), (eo.current = !1), F(!1));
                }
            }
        }, [l, z, t, n, K, Q]),
        eu = a.useCallback((e) => {
            (O.w.set(_, e), q(e));
        }, []),
        em = a.useCallback(() => eu(!1), [eu]),
        ef = E.intl.string(H ? A.default.kar7jh : A.default.WSc5Y2);
    return (0, s.jsx)("div", {
        className: r()(eB.MY, eW.T),
        children: (0, s.jsxs)("div", {
            className: eB.Zp,
            children: [
                (0, s.jsxs)("main", {
                    className: eB.iW,
                    children: [
                        et
                            ? null
                            : (0, s.jsx)(d.A, {
                                  title: E.intl.string(A.default.gy7byi),
                                  description: E.intl.string(A.default["dkv/WO"]),
                                  icons: eq.ir,
                                  onDrop: el,
                              }),
                        n
                            ? null
                            : (0, s.jsx)(I.A, {
                                  title: E.intl.string(A.default.uk6jhJ),
                                  transparent: !0,
                                  actions: (0, s.jsx)(f.A.Icon, {
                                      icon: i.Z,
                                      color: "var(--icon-strong)",
                                      className: eB.FW,
                                      tooltip: ef,
                                      "aria-label": ef,
                                      selected: H,
                                      onClick: () => eu(!H),
                                  }),
                              }),
                        (0, s.jsx)(o.Ip, {
                            ref: b,
                            className: eB.XG,
                            children: (0, s.jsxs)("div", {
                                className: eB.Qs,
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: r()(eB.Lv, { [eB.$O]: n }),
                                        children: [
                                            (0, s.jsxs)("div", {
                                                className: eB.ZK,
                                                children: [
                                                    (0, s.jsx)(c.D, {
                                                        variant: "display-lg",
                                                        color: "text-strong",
                                                        className: eB.DD,
                                                        children: E.intl.string(A.default.doYpEy),
                                                    }),
                                                    (0, s.jsx)(u.E, {
                                                        variant: "text-md/normal",
                                                        color: "text-strong",
                                                        className: eB.VA,
                                                        children: E.intl.string(A.default.BH58fD),
                                                    }),
                                                ],
                                            }),
                                            (0, s.jsxs)("div", {
                                                className: eB.ZK,
                                                children: [
                                                    (0, s.jsx)(eC, {
                                                        idea: l,
                                                        inputRef: W,
                                                        onIdeaChange: er,
                                                        onSubmit: ec,
                                                        submitting: et,
                                                        submitDisabled: es,
                                                        error: M,
                                                        modelSettings: z,
                                                        onModelSettingsChange: G,
                                                        attachments: X,
                                                        onImport: ea.open,
                                                    }),
                                                    ea.input,
                                                    (0, s.jsx)(u.E, {
                                                        variant: "text-xxs/normal",
                                                        color: "text-muted",
                                                        children: E.intl.string(A.default.hebdhA),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, s.jsx)(V, { inspirations: B, onCopyPrompt: ei }),
                                    (0, s.jsx)(eT, {}),
                                ],
                            }),
                        }),
                    ],
                }),
                H && !n ? (0, s.jsx)(ed, { guildId: t, archiveImport: Z, onClose: em }) : null,
            ],
        }),
    });
}
