n.d(t, { A: () => eJ });
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
    j = n(639519),
    v = n(889921),
    N = n(371169),
    b = n(391712);
async function y(e) {
    let { guildId: t, installScope: n, prompt: s, modelSettings: a, templateId: l } = e,
        r = await (0, N.gA)(
            null != n
                ? { guild_id: t, install_scope: n }
                : { guild_id: t, auto_install_scope: !0, prompt: (s ?? "").slice(0, 4e3) },
        );
    return ((0, v.ensureConnection)(r, { templateId: l }), (0, v.stageModelSettings)(r, a ?? b.A4), r);
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
    V = n(430392);
let $ = { games: q.GameControllerIcon, apps: W.k, profile_widget: B.f, automod: J.ShieldIcon, chat_bot: V.RobotIcon };
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
                            src: (0, H.AE)(void 0, t.authorAvatarSeed),
                            alt: "",
                            "aria-hidden": !0,
                        }),
                        (0, s.jsx)(d.E, {
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
                            className: Y.qr,
                            children: [
                                (0, s.jsx)("div", {
                                    className: Y.Yl,
                                    "aria-hidden": !0,
                                    children: (0, s.jsx)(a, { size: "md", color: z.A.colors.ICON_STRONG }),
                                }),
                                (0, s.jsxs)("div", {
                                    className: Y.PJ,
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
    Z = a.memo(function (e) {
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
                    a = (s = Array.from(n.querySelectorAll(`[${K}]`))).map((e) => e.offsetLeft + e.offsetWidth / 2);
                    let o = (l = s.length > 1 ? Math.abs(s[1].offsetLeft - s[0].offsetLeft) : 1) * s.length;
                    ((r = t && o >= e.clientWidth + 2 * l ? o : 0),
                        (i = "rtl" === getComputedStyle(e).direction ? -1 : 1));
                }
                function j() {
                    if (null == e) return;
                    let t = e.scrollLeft + e.clientWidth / 2;
                    s.forEach((e, n) => {
                        var s;
                        let o,
                            c,
                            d = a[n] - t;
                        r > 0 && (d = ((((d - u * i + r / 2) % r) + r) % r) - r / 2);
                        let { angleDeg: m, dropPx: f } =
                            ((s = d / l),
                            (c =
                                (l / ((4 * Math.PI) / 180)) *
                                (1 - Math.cos(((o = Math.max(-12, Math.min(12, 4 * s))) * Math.PI) / 180))),
                            { angleDeg: o, dropPx: c });
                        (e.style.setProperty("--custom-conjure-home-carousel-shift", `${t + d - a[n]}px`),
                            e.style.setProperty("--custom-conjure-home-carousel-angle", `${m}deg`),
                            e.style.setProperty("--custom-conjure-home-carousel-drop", `${f}px`));
                    });
                }
                function v(e) {
                    (null != m && r > 0 && (u = (u + (30 * (e - m)) / 1e3) % r),
                        (m = e),
                        j(),
                        (d = requestAnimationFrame(v)));
                }
                function N() {
                    let e = t && !f && !h && x && g;
                    e && 0 === d
                        ? ((m = null), (d = requestAnimationFrame(v)))
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
                (p(), j(), N());
                let R = new ResizeObserver(() => {
                    (p(), j());
                });
                (R.observe(e), R.observe(n));
                let S = new IntersectionObserver((e) => {
                    let [t] = e;
                    ((g = t.isIntersecting), N());
                });
                return (
                    S.observe(e),
                    e.addEventListener("scroll", j, { passive: !0 }),
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
                            e.removeEventListener("scroll", j),
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
                className: r ? Y.vV : Y.Dk,
                "aria-label": R.intl.string(E.default.Qc4S39),
                children: (0, s.jsx)("ul", {
                    ref: c,
                    className: Y.u4,
                    children: n.map((e) => (0, s.jsx)(Q, { inspiration: e, onCopyPrompt: l }, e.id)),
                }),
            })
        );
    });
var ee = n(789645),
    et = n(265872),
    en = n(980707),
    es = n(477782),
    ea = n(81369),
    el = n(950305),
    er = n(664121);
let ei = [
    { value: "user", icon: el.UserIcon, nameMessage: E.default.s1TsXl },
    { value: "guild", icon: er.R, nameMessage: E.default.LlLIJw },
];
function eo(e) {
    let { importing: t, onImport: n } = e,
        l = a.useRef(null),
        r = (0, x.yN)(a.useCallback((e) => n(e, "user"), [n])),
        i = (0, x.yN)(a.useCallback((e) => n(e, "guild"), [n])),
        o = { user: r.open, guild: i.open };
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(et.Y, {
                targetElementRef: l,
                position: "bottom",
                align: "right",
                animation: et.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, s.jsx)(en.W, {
                        "data-menu-migrated": !0,
                        navId: "conjure-import-scope",
                        "aria-label": R.intl.string(E.default.soVyD1),
                        onClose: t,
                        onSelect: t,
                        children: (0, s.jsx)(es.rX, {
                            label: R.intl.string(E.default.NyVn6T),
                            children: ei
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: R.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, s.jsx)(
                                        es.Dr,
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
                        icon: ea.H,
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
var ec = n(574790),
    eu = n(380654),
    ed = n(638693);
function em(e) {
    let { guildId: t, archiveImport: n, onClose: l } = e,
        r = a.useCallback((e) => (0, C.Ay)(e.id), []),
        i = a.useCallback((e) => (0, s.jsx)(eu.S, { project: e, guildId: t }), [t]),
        o = a.useCallback((e, n) => (0, eu.V)(e, n, t), [t]),
        d = R.intl.string(E.default.dWgSAa),
        m = R.intl.string(E.default.kar7jh);
    return (0, s.jsxs)("aside", {
        className: ed.pz,
        "aria-label": d,
        children: [
            (0, s.jsxs)("div", {
                className: ed.wx,
                children: [
                    (0, s.jsx)(u.D, { variant: "heading-md/semibold", color: "text-strong", children: d }),
                    (0, s.jsxs)("div", {
                        className: ed.$s,
                        children: [
                            (0, s.jsx)(eo, { importing: n.importing, onImport: n.importArchive }),
                            (0, s.jsx)(h.A.Icon, { icon: ee.P, tooltip: m, "aria-label": m, onClick: l }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)(c.Ip, {
                className: ed.XG,
                children: (0, s.jsx)(ec.A, {
                    onSelect: r,
                    guildId: t,
                    renderProjectActions: i,
                    onProjectContextMenu: o,
                }),
            }),
        ],
    });
}
var ef = n(559106),
    eh = n(783977),
    ex = n(559647),
    eg = n(531685),
    ep = n(957071),
    ej = n(34595),
    ev = n(587157),
    eN = n(200160),
    eb = n(465410);
function ey(e) {
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
        className: eN.RC,
        children: [t[r].slice(0, i), l ? (0, s.jsx)("span", { className: eN.OW }) : null],
    });
}
function ew(e) {
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
    return (0, s.jsx)(d.E, { variant: "text-md/normal", color: "text-muted", className: eN.RC, children: t[l] });
}
function eC(e) {
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
        r = (0, i.bG)([eg.A], () => eg.A.isFocused()),
        o = t || !r;
    return (0, s.jsx)("div", {
        className: eN.qf,
        "aria-hidden": !0,
        children: l
            ? (0, s.jsx)(ew, { prompts: n, paused: o })
            : (0, s.jsx)(ey, { prompts: n, paused: o, showCaret: !t }),
    });
}
function eA(e) {
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
        j = a.useRef(null),
        v = a.useId(),
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
        className: eN.kL,
        children: [
            (0, s.jsxs)("div", {
                ref: j,
                className: r()(eN.yk, { [eN.Sl]: null != u }),
                children: [
                    (0, s.jsxs)(d.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        className: eN.Ox,
                        children: [
                            (0, s.jsx)(ef.vN, {
                                ringTarget: j,
                                ringClassName: eN.Rg,
                                children: (0, s.jsx)("textarea", {
                                    ref: n,
                                    className: r()(eN.hF, eb.yL),
                                    rows: 3,
                                    value: t,
                                    "aria-label": R.intl.string(E.default.cwrS1O),
                                    "aria-invalid": null != u,
                                    "aria-describedby": null != u ? v : void 0,
                                    onChange: (e) => l(e.currentTarget.value),
                                    onKeyDown: A,
                                    onPaste: (e) => w(e),
                                    onFocus: () => p(!0),
                                    onBlur: () => p(!1),
                                }),
                            }),
                            N ? null : (0, s.jsx)(eC, { boxFocused: g }),
                        ],
                    }),
                    h.attachments.length > 0
                        ? (0, s.jsx)("div", {
                              className: eN.ZO,
                              children: h.attachments.map((e) => {
                                  let { draft: t } = e;
                                  return (0, s.jsx)(ej.Nl, { draft: t, onRemove: C }, t.localId);
                              }),
                          })
                        : null,
                    (0, s.jsxs)("div", {
                        className: eN.KE,
                        children: [
                            (0, s.jsx)(ep.A, {
                                navId: "conjure-home-attach",
                                disabled: o,
                                buttonClassName: eN.gb,
                                iconClassName: eN.Xv,
                                onAddFiles: y,
                                onImport: x,
                            }),
                            (0, s.jsxs)("div", {
                                className: eN.Rc,
                                children: [
                                    (0, s.jsx)(ev.A, {
                                        settings: m ?? b.A4,
                                        tiers: b.lO,
                                        choices: (0, b.Pu)(),
                                        disabled: o,
                                        onChange: f,
                                        className: eN.gb,
                                        icon: (0, s.jsx)(eh.R, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, s.jsx)(D.$, {
                                        variant: "primary",
                                        size: "sm",
                                        icon: ex.SendMessageIcon,
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
                      id: v,
                      variant: "text-sm/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      children: u,
                  })
                : null,
        ],
    });
}
var eE = n(628284),
    eR = n(369606),
    eS = n(926268),
    eI = n(406810),
    ek = n(707554),
    eL = n(651346);
function eO(e) {
    let { className: t } = e;
    return (0, s.jsx)("span", { className: r()(eL.n8, t) });
}
let eP = [
        {
            id: "apps",
            title: E.default["bvcT/Q"],
            description: E.default.ArcJqa,
            Visual: function () {
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
                        (0, s.jsx)(eO, { className: eL.Lm }),
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
                                                ? (0, s.jsx)(eE.y, {
                                                      size: "xs",
                                                      color: z.A.colors.ICON_BRAND,
                                                      className: eL._6,
                                                  })
                                                : null,
                                            (0, s.jsx)(eO, { className: eL.Eg }),
                                        ],
                                    },
                                    e,
                                ),
                            ),
                        }),
                    ],
                });
            },
        },
        {
            id: "games",
            title: E.default["JU01/4"],
            description: E.default.FXwLsv,
            Visual: function () {
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
                                (0, s.jsx)(eR.TrophyIcon, { size: "xxs", color: z.A.colors.ICON_FEEDBACK_WARNING }),
                                (0, s.jsx)(d.E, {
                                    variant: "text-xs/bold",
                                    color: "none",
                                    className: eL.o9,
                                    children: 128,
                                }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: eL.KQ,
                            children: [
                                (0, s.jsx)(eS.HeartIcon, { size: "xxs", color: z.A.colors.ICON_FEEDBACK_CRITICAL }),
                                (0, s.jsx)(eS.HeartIcon, { size: "xxs", color: z.A.colors.ICON_FEEDBACK_CRITICAL }),
                                (0, s.jsx)(eS.HeartIcon, { size: "xxs", color: z.A.colors.ICON_OVERLAY_LIGHT }),
                            ],
                        }),
                    ],
                });
            },
        },
        {
            id: "bots",
            title: E.default.KBHZfO,
            description: E.default.qNmKhG,
            Visual: function () {
                return (0, s.jsxs)("div", {
                    className: eL.x,
                    children: [
                        (0, s.jsxs)("div", {
                            className: eL.$y,
                            children: [(0, s.jsx)("span", { className: eL.m$ }), (0, s.jsx)(eO, { className: eL.Md })],
                        }),
                        (0, s.jsxs)("div", {
                            className: eL.iU,
                            children: [
                                (0, s.jsx)("span", {
                                    className: r()(eL.my, eL.FY),
                                    children: (0, s.jsx)(V.RobotIcon, {
                                        size: "xs",
                                        color: z.A.colors.ICON_OVERLAY_LIGHT,
                                    }),
                                }),
                                (0, s.jsxs)("div", {
                                    className: eL.OS,
                                    children: [
                                        (0, s.jsxs)("div", {
                                            className: eL.f9,
                                            children: [
                                                (0, s.jsx)(eO, { className: eL.iE }),
                                                (0, s.jsx)(d.E, {
                                                    variant: "text-xs/bold",
                                                    color: "none",
                                                    className: eL.AO,
                                                    children: R.intl.string(E.default.VlgiLf),
                                                }),
                                            ],
                                        }),
                                        (0, s.jsx)(eO, { className: eL.xs }),
                                        (0, s.jsx)(eO, { className: eL.Md }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            },
        },
        {
            id: "profile-widgets",
            title: E.default.GUb2zA,
            description: E.default["v+F6qW"],
            Visual: function () {
                return (0, s.jsxs)("div", {
                    className: r()(eL.x, eL.ME),
                    children: [
                        (0, s.jsx)("span", { className: eL.CK }),
                        (0, s.jsxs)("div", {
                            className: eL.kI,
                            children: [
                                (0, s.jsx)("span", { className: r()(eL.my, eL.jU) }),
                                (0, s.jsx)(eO, { className: eL.iE }),
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
                                                            (0, s.jsx)(eO, { className: eL.cR }),
                                                            (0, s.jsx)(eO, { className: eL.Zh }),
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
        },
        {
            id: "overlay-widgets",
            title: E.default.uVOH1p,
            description: E.default.zm7y9u,
            Visual: function () {
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
                                            (0, s.jsx)(eO, { className: eL.Av }),
                                        ],
                                    },
                                    e,
                                ),
                            ),
                        }),
                        (0, s.jsxs)("div", {
                            className: eL.Y5,
                            children: [
                                (0, s.jsx)(eI.ClockIcon, { size: "xxs", color: z.A.colors.ICON_OVERLAY_LIGHT }),
                                (0, s.jsx)(eO, { className: eL.jB }),
                            ],
                        }),
                    ],
                });
            },
        },
        {
            id: "automod",
            title: E.default["+EKk4D"],
            description: E.default.fpXK3z,
            Visual: function () {
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
                                        (0, s.jsx)(eO, { className: eL.iE }),
                                        (0, s.jsx)(eO, { className: r()(eL.xs, eL.pc) }),
                                        (0, s.jsx)(eO, { className: r()(eL.Md, eL.pc) }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: eL.jC,
                            children: [
                                (0, s.jsx)(J.ShieldIcon, { size: "sm", color: z.A.colors.ICON_FEEDBACK_CRITICAL }),
                                (0, s.jsxs)("div", {
                                    className: eL.qQ,
                                    children: [
                                        (0, s.jsx)(eO, { className: r()(eL.Md, eL.k8) }),
                                        (0, s.jsx)(eO, { className: r()(eL.nq, eL.k8) }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            },
        },
    ],
    e_ = a.memo(function () {
        let e = a.useId();
        return (0, s.jsx)("section", {
            className: eL.GG,
            "aria-labelledby": e,
            children: (0, s.jsx)(ek.F, {
                component: (0, s.jsx)(u.D, {
                    id: e,
                    variant: "heading-lg/medium",
                    children: R.intl.string(E.default.IiQEVd),
                }),
                children: (0, s.jsx)("ul", {
                    className: eL.Vg,
                    children: eP.map((e) => {
                        let { id: t, title: n, description: a, Visual: l } = e;
                        return (0, s.jsxs)(
                            "li",
                            {
                                className: eL.Vs,
                                children: [
                                    (0, s.jsx)("div", {
                                        className: eL.Tn,
                                        "aria-hidden": !0,
                                        children: (0, s.jsx)(l, {}),
                                    }),
                                    (0, s.jsxs)("div", {
                                        className: eL.pG,
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
var eT = n(666476),
    eU = n(287111),
    eF = n(177676);
let eM = 1;
function eD(e) {
    let t = (0, eF.Ft)(e),
        n = { localId: eM++, name: e.name, contentType: t };
    if ("too-large" === (0, eF.R9)(e, t))
        return { file: e, draft: { ...n, status: "error", errorText: (0, eU.iW)(t) } };
    let s = eT.XB.has(t) ? URL.createObjectURL(e) : void 0;
    return { file: e, draft: { ...n, status: "ready", previewUrl: s } };
}
function ez(e) {
    null != e.draft.previewUrl && URL.revokeObjectURL(e.draft.previewUrl);
}
async function eG(e, t) {
    if ("fits" === (0, eF.R9)(t, (0, eF.Ft)(t))) return (0, p.vX)(e, t);
    let n = await (0, eF.th)(t);
    if (null == n) throw Error("attachment over its size limit");
    return (0, p.vX)(e, n);
}
var eH = n(698638),
    eq = n(606128),
    eW = n(260024);
class eB extends Error {}
function eJ(e) {
    let { guildId: t, onConjurePage: n = !1 } = e,
        [l, v] = a.useState(() => (n ? P.A.getHomePrompt() : ""));
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
        V = a.useRef(null),
        $ = a.useMemo(
            () => [
                {
                    id: "flappy",
                    category: "games",
                    shortPrompt: R.intl.string(E.default.gtX7tS),
                    fullPrompt: R.intl.string(E.default["Sfa50+"]),
                    name: R.intl.string(E.default.Tbag5k),
                    image: "/assets/b43659b526f2e936.svg",
                    authorAvatarSeed: "1",
                },
                {
                    id: "raid-calendar",
                    category: "apps",
                    shortPrompt: R.intl.string(E.default.GNGB59),
                    fullPrompt: R.intl.string(E.default.lxwxNm),
                    name: R.intl.string(E.default["rzB/bE"]),
                    image: "/assets/1d701ea289cc99e6.svg",
                    authorAvatarSeed: "2",
                },
                {
                    id: "aram-widget",
                    category: "profile_widget",
                    shortPrompt: R.intl.string(E.default.RzNoHJ),
                    fullPrompt: R.intl.string(E.default.VfUFEt),
                    name: R.intl.string(E.default.RYGHMF),
                    image: "/assets/05c0d07952b2d93f.svg",
                    authorAvatarSeed: "3",
                },
                {
                    id: "trivia",
                    category: "games",
                    shortPrompt: R.intl.string(E.default.TGN39X),
                    fullPrompt: R.intl.string(E.default.gilNLG),
                    name: R.intl.string(E.default.vvwBlz),
                    image: "/assets/5813258afff68797.svg",
                    authorAvatarSeed: "4",
                },
                {
                    id: "spoilers-automod",
                    category: "automod",
                    shortPrompt: R.intl.string(E.default.Gw756q),
                    fullPrompt: R.intl.string(E.default["d/WMHR"]),
                    name: R.intl.string(E.default["v9+fAY"]),
                    image: "/assets/54b5cda688395473.svg",
                    authorAvatarSeed: "5",
                },
                {
                    id: "movie-night",
                    category: "apps",
                    shortPrompt: R.intl.string(E.default.u4UWGH),
                    fullPrompt: R.intl.string(E.default.ofBNNy),
                    name: R.intl.string(E.default.DQQdZL),
                    image: "/assets/fcb9220c49b6460a.svg",
                    authorAvatarSeed: "6",
                },
                {
                    id: "welcome-bot",
                    category: "chat_bot",
                    shortPrompt: R.intl.string(E.default["T3+H3J"]),
                    fullPrompt: R.intl.string(E.default.ryeSuC),
                    name: R.intl.string(E.default["3deXbx"]),
                    image: "/assets/56e489e9c5907add.svg",
                    authorAvatarSeed: "7",
                },
            ],
            [],
        ),
        X = "user" === (0, f.o)().get("target") || n,
        K = (function () {
            let [e, t] = a.useState([]),
                n = a.useRef(e);
            (a.useLayoutEffect(() => {
                n.current = e;
            }),
                a.useEffect(() => () => n.current.forEach(ez), []));
            let s = a.useCallback((e) => {
                    if (0 === e.length) return;
                    let s = e.map(eD);
                    ((n.current = [...n.current, ...s]), t(n.current));
                }, []),
                l = (0, eF.sm)(s),
                r = a.useCallback((e) => {
                    let s = n.current.find((t) => t.draft.localId === e);
                    null != s && (ez(s), (n.current = n.current.filter((e) => e !== s)), t(n.current));
                }, []),
                i = a.useCallback(() => {
                    (n.current.forEach(ez), (n.current = []), t(n.current));
                }, []),
                o = a.useMemo(
                    () =>
                        (function (e) {
                            if (e.length <= eT.lN) return e;
                            let t = (0, eF.XV)();
                            return e.map((e, n) =>
                                n < eT.lN || "error" === e.draft.status
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
        { attachments: Y, addFiles: Q, clear: ee } = K,
        et = (function (e) {
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
                                text: e instanceof S ? R.intl.string(E.default["Q+l4Hv"]) : (0, j.mG)(e),
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
        { importArchive: en } = et,
        es = D || et.importing,
        ea = "" !== l.trim() || Y.length > 0,
        el = es || !ea || K.hasErrors,
        er = (0, x.yN)(a.useCallback((e) => en(e, X ? "user" : null), [en, X])),
        ei = a.useCallback((e) => Q(Array.from(e)), [Q]),
        eo = a.useContext(L.A),
        ec = (0, _.l)(),
        eu = (0, i.bG)([P.A], () => P.A.isOverlayOpen());
    (0, M.p)(V, eo ? ec : !eu);
    let ed = a.useCallback((e) => {
            (v(e), H(null));
        }, []),
        ef = a.useCallback(
            (e) => {
                ed(e);
                let t = V.current;
                null != t && (t.focus(), t.setSelectionRange(e.length, e.length));
            },
            [ed],
        ),
        eh = a.useRef(!1),
        ex = a.useCallback(async () => {
            let e = l.trim();
            if (("" !== e || 0 !== Y.length) && !eh.current) {
                ((eh.current = !0), z(!0), H(null));
                try {
                    let n = await w({
                        guildId: t,
                        installScope: null,
                        prompt: e,
                        modelSettings: q,
                        start: async (t) => {
                            let n = [];
                            if (Y.length > 0)
                                try {
                                    n = await Promise.all(
                                        Y.map((e) => {
                                            let { file: n } = e;
                                            return eG(t, n);
                                        }),
                                    );
                                } catch {
                                    throw (await (0, N.xx)(t).catch(() => void 0), new eB());
                                }
                            ((0, A.P6)(t, e, n), ee());
                        },
                    });
                    (v(""), (b.current = ""), (eh.current = !1), z(!1), (0, C.Ay)(n));
                } catch (e) {
                    (H(e instanceof eB ? R.intl.string(E.default["903H7m"]) : (0, j.mG)(e)), (eh.current = !1), z(!1));
                }
            }
        }, [l, q, t, Y, ee]),
        eg = a.useCallback((e) => {
            (U.w.set(F, e), J(e));
        }, []),
        ep = a.useCallback(() => eg(!1), [eg]),
        ej = R.intl.string(B ? E.default.kar7jh : E.default.WSc5Y2);
    return (0, s.jsx)("div", {
        className: r()(eW.MY, eq.T),
        children: (0, s.jsxs)("div", {
            className: eW.Zp,
            children: [
                (0, s.jsxs)("main", {
                    className: eW.iW,
                    children: [
                        es
                            ? null
                            : (0, s.jsx)(m.A, {
                                  title: R.intl.string(E.default.gy7byi),
                                  description: R.intl.string(E.default["dkv/WO"]),
                                  icons: eH.ir,
                                  onDrop: ei,
                              }),
                        n
                            ? null
                            : (0, s.jsx)(I.A, {
                                  title: R.intl.string(E.default.uk6jhJ),
                                  transparent: !0,
                                  actions: (0, s.jsx)(h.A.Icon, {
                                      icon: o.Z,
                                      color: "var(--icon-strong)",
                                      className: eW.FW,
                                      tooltip: ej,
                                      "aria-label": ej,
                                      selected: B,
                                      onClick: () => eg(!B),
                                  }),
                              }),
                        (0, s.jsx)(c.Ip, {
                            ref: y,
                            className: eW.XG,
                            children: (0, s.jsxs)("div", {
                                className: eW.Qs,
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: r()(eW.Lv, { [eW.$O]: n }),
                                        children: [
                                            (0, s.jsxs)("div", {
                                                className: eW.ZK,
                                                children: [
                                                    (0, s.jsx)(u.D, {
                                                        variant: "display-lg",
                                                        color: "text-strong",
                                                        className: eW.DD,
                                                        children: R.intl.string(E.default.doYpEy),
                                                    }),
                                                    (0, s.jsx)(d.E, {
                                                        variant: "text-md/normal",
                                                        color: "text-strong",
                                                        className: eW.VA,
                                                        children: R.intl.string(E.default.BH58fD),
                                                    }),
                                                ],
                                            }),
                                            (0, s.jsxs)("div", {
                                                className: eW.ZK,
                                                children: [
                                                    (0, s.jsx)(eA, {
                                                        idea: l,
                                                        inputRef: V,
                                                        onIdeaChange: ed,
                                                        onSubmit: ex,
                                                        submitting: es,
                                                        submitDisabled: el,
                                                        error: G,
                                                        modelSettings: q,
                                                        onModelSettingsChange: W,
                                                        attachments: K,
                                                        onImport: er.open,
                                                    }),
                                                    er.input,
                                                    (0, s.jsx)(d.E, {
                                                        variant: "text-xxs/normal",
                                                        color: "text-muted",
                                                        children: R.intl.string(E.default.hebdhA),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, s.jsx)(Z, { inspirations: $, onCopyPrompt: ef }),
                                    (0, s.jsx)(e_, {}),
                                ],
                            }),
                        }),
                    ],
                }),
                B && !n ? (0, s.jsx)(em, { guildId: t, archiveImport: et, onClose: ep }) : null,
            ],
        }),
    });
}
