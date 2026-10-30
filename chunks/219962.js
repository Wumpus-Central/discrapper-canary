s.d(t, { A: () => eK });
var n = s(477900),
    a = s(582128),
    l = s(503698),
    r = s.n(l),
    i = s(97893),
    c = s(364522),
    o = s(297264),
    u = s(834730),
    d = s(65593),
    m = s(458518),
    f = s(742589),
    h = s(949757),
    x = s(858899),
    g = s(989145),
    p = s(639519),
    j = s(322227),
    v = s(371169),
    N = s(391712);
async function b(e) {
    let { guildId: t, installScope: s, prompt: n, modelSettings: a, templateId: l } = e,
        r = await (0, v.gA)(
            null != s
                ? { guild_id: t, install_scope: s }
                : { guild_id: t, auto_install_scope: !0, prompt: (n ?? "").slice(0, 4e3) },
        );
    return ((0, j.ensureConnection)(r, { templateId: l }), (0, j.stageModelSettings)(r, a ?? N.A4), r);
}
async function y(e) {
    let { start: t, ...s } = e,
        n = await b(s);
    return (await t(n), n);
}
var w = s(381991),
    A = s(708679),
    C = s(567630),
    E = s(87501),
    R = s(105292);
class S extends Error {}
var I = s(705427),
    k = s(120234),
    P = s(398773),
    L = s(735769),
    O = s(101766);
(s(976860), s(652215), s(746080));
var T = s(506774);
let _ = "ConjureProjectsPanelOpen";
var U = s(89310),
    F = s(17928),
    M = s(821609),
    D = s(661531),
    z = s(775602),
    G = s(486020),
    W = s(687966),
    q = s(323384),
    H = s(632015),
    B = s(231483),
    J = s(430392);
let K = {
        flappy: "/assets/b43659b526f2e936.svg",
        "raid-calendar": "/assets/1d701ea289cc99e6.svg",
        "aram-widget": "/assets/05c0d07952b2d93f.svg",
        trivia: "/assets/5813258afff68797.svg",
        "spoilers-automod": "/assets/54b5cda688395473.svg",
        "movie-night": "/assets/fcb9220c49b6460a.svg",
        "welcome-bot": "/assets/56e489e9c5907add.svg",
    },
    $ = { games: W.GameControllerIcon, apps: q.k, profile_widget: H.f, automod: B.ShieldIcon, chat_bot: J.RobotIcon };
var X = s(621466);
let Y = "data-conjure-carousel-card";
var Q = s(19493);
let V = a.memo(function (e) {
        let { inspiration: t, onCopyPrompt: s } = e,
            a = $[t.category];
        return (0, n.jsxs)("li", {
            className: Q.AS,
            [Y]: "",
            children: [
                (0, n.jsxs)("div", {
                    className: Q.rl,
                    children: [
                        (0, n.jsx)("img", {
                            className: Q.my,
                            src: (0, G.AE)(void 0, t.authorAvatarSeed),
                            alt: "",
                            "aria-hidden": !0,
                        }),
                        (0, n.jsx)(u.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            className: Q.Tq,
                            children: t.shortPrompt,
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: Q.Nr,
                    children: [
                        (0, n.jsxs)("div", {
                            className: Q.xn,
                            children: [
                                (0, n.jsx)("img", { className: Q.q_, src: t.image, alt: "" }),
                                (0, n.jsx)("div", {
                                    className: Q.o1,
                                    children: (0, n.jsx)(M.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: R.intl.string(E.default["6CQjTy"]),
                                        onClick: () => s(t.fullPrompt),
                                    }),
                                }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: Q.qr,
                            children: [
                                (0, n.jsx)("div", {
                                    className: Q.Yl,
                                    "aria-hidden": !0,
                                    children: (0, n.jsx)(a, { size: "md", color: D.A.colors.ICON_STRONG }),
                                }),
                                (0, n.jsxs)("div", {
                                    className: Q.PJ,
                                    children: [
                                        (0, n.jsx)(u.E, {
                                            variant: "text-md/semibold",
                                            color: "text-strong",
                                            lineClamp: 1,
                                            children: t.name,
                                        }),
                                        (0, n.jsx)(u.E, {
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
        let { inspirations: s, onCopyPrompt: l } = e,
            r = (0, F.bG)([z.Ay], () => z.Ay.useReducedMotion),
            i = a.useRef(null),
            c = a.useRef(null);
        return (
            (t = !r),
            a.useEffect(() => {
                let e = i.current,
                    s = c.current;
                if (null == e || null == s) return;
                let n = [],
                    a = [],
                    l = 1,
                    r = 0,
                    o = 1,
                    u = 0,
                    d = 0,
                    m = null,
                    f = !1,
                    h = !1,
                    x = document.hasFocus(),
                    g = !0;
                function p() {
                    if (null == e || null == s) return;
                    a = (n = Array.from(s.querySelectorAll(`[${Y}]`))).map((e) => e.offsetLeft + e.offsetWidth / 2);
                    let i = (l = n.length > 1 ? Math.abs(n[1].offsetLeft - n[0].offsetLeft) : 1) * n.length;
                    ((r = t && i >= e.clientWidth + 2 * l ? i : 0),
                        (o = "rtl" === getComputedStyle(e).direction ? -1 : 1));
                }
                function j() {
                    if (null == e) return;
                    let t = e.scrollLeft + e.clientWidth / 2;
                    n.forEach((e, s) => {
                        var n, i;
                        let c,
                            d,
                            m = a[s] - t;
                        r > 0 && (m = ((((m - u * o + (n = r) / 2) % n) + n) % n) - n / 2);
                        let { angleDeg: f, dropPx: h } =
                            ((i = m / l),
                            (d =
                                (l / ((4 * Math.PI) / 180)) *
                                (1 - Math.cos(((c = Math.max(-12, Math.min(12, 4 * i))) * Math.PI) / 180))),
                            { angleDeg: c, dropPx: d });
                        (e.style.setProperty("--custom-conjure-home-carousel-shift", `${t + m - a[s]}px`),
                            e.style.setProperty("--custom-conjure-home-carousel-angle", `${f}deg`),
                            e.style.setProperty("--custom-conjure-home-carousel-drop", `${h}px`));
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
                function A(t) {
                    ((h = (0, X.vq)(t.relatedTarget, Node) && e?.contains(t.relatedTarget) === !0), N());
                }
                function C() {
                    ((x = !0), N());
                }
                function E() {
                    ((x = !1), N());
                }
                (p(), j(), N());
                let R = new ResizeObserver(() => {
                    (p(), j());
                });
                (R.observe(e), R.observe(s));
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
                    e.addEventListener("focusout", A),
                    window.addEventListener("focus", C),
                    window.addEventListener("blur", E),
                    () => {
                        (cancelAnimationFrame(d),
                            R.disconnect(),
                            S.disconnect(),
                            e.removeEventListener("scroll", j),
                            e.removeEventListener("pointerenter", b),
                            e.removeEventListener("pointerleave", y),
                            e.removeEventListener("focusin", w),
                            e.removeEventListener("focusout", A),
                            window.removeEventListener("focus", C),
                            window.removeEventListener("blur", E));
                    }
                );
            }, [i, c, t]),
            (0, n.jsx)("section", {
                ref: i,
                className: r ? Q.vV : Q.Dk,
                "aria-label": R.intl.string(E.default.Qc4S39),
                children: (0, n.jsx)("ul", {
                    ref: c,
                    className: Q.u4,
                    children: s.map((e) => (0, n.jsx)(V, { inspiration: e, onCopyPrompt: l }, e.id)),
                }),
            })
        );
    });
var ee = s(289873),
    et = s(441935),
    es = s(95264),
    en = s(260498),
    ea = s(277867),
    el = s(281091),
    er = s(380654),
    ei = s(186340),
    ec = s(919485),
    eo = s(588359),
    eu = s(638693);
function ed(e) {
    let t,
        { guildId: s, archiveImport: l } = e,
        {
            mine: r,
            others: i,
            fetchState: d,
        } = ((t = (0, el.A)(s)),
        {
            mine: t,
            others: (0, F.yK)(
                [en.Ay],
                () =>
                    (0, ea.N)(
                        en.Ay.getViewOnlyProjects(s).map((e) => ({
                            project: e,
                            turnStartedAt: null,
                            finishedAt: null,
                        })),
                    ),
                [s],
            ),
            fetchState: (0, F.bG)([en.Ay], () => en.Ay.getGuildProjectsFetchState(s), [s]),
        }),
        { importArchive: m } = l,
        f = (0, h.yN)(a.useCallback((e) => m(e, "guild"), [m])),
        x = a.useCallback((e) => (0, w.Ay)(e.id), []),
        g = a.useCallback((e) => (0, n.jsx)(er.S, { project: e, guildId: s }), [s]),
        p = a.useCallback(
            (e) =>
                (0, n.jsx)(M.$, {
                    variant: "secondary",
                    size: "sm",
                    text: R.intl.string(E.default.XWgAfc),
                    "aria-label": R.intl.formatToPlainString(E.default.g6TP7T, { name: e.name }),
                    onClick: () => (0, es.A)(e, s),
                }),
            [s],
        ),
        j = a.useCallback((e, t) => (0, er.V)(e, t, s), [s]),
        N = R.intl.string(E.default.BMn2lY),
        b = r.length > 0 || i.length > 0;
    return (0, n.jsxs)("aside", {
        className: eu.pz,
        "aria-label": N,
        children: [
            (0, n.jsxs)("div", {
                className: eu.wx,
                children: [
                    (0, n.jsx)(o.D, { variant: "heading-md/semibold", color: "text-strong", children: N }),
                    (0, n.jsx)(et.A, { importing: l.importing, onClick: f.open }),
                    f.input,
                ],
            }),
            (0, n.jsxs)(c.Ip, {
                className: eu.XG,
                children: [
                    r.length > 0
                        ? (0, n.jsx)(ec.A, {
                              title: R.intl.string(E.default["8LfMqp"]),
                              className: eu.uW,
                              children: (0, n.jsx)(ei.A, {
                                  projects: r,
                                  onSelect: x,
                                  renderProjectActions: g,
                                  onProjectContextMenu: j,
                              }),
                          })
                        : null,
                    i.length > 0
                        ? (0, n.jsx)(ec.A, {
                              title: R.intl.string(E.default.MmWif0),
                              className: eu.uW,
                              children: (0, n.jsx)(ei.A, { projects: i, renderProjectActions: p }),
                          })
                        : null,
                    b || "error" !== d
                        ? b || "success" === d
                            ? null
                            : (0, n.jsx)("div", { className: eu.E8, children: (0, n.jsx)(ee.y, {}) })
                        : (0, n.jsxs)("div", {
                              className: eu.E8,
                              children: [
                                  (0, n.jsx)(u.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: R.intl.string(E.default.DJAPMO),
                                  }),
                                  (0, n.jsx)(M.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: R.intl.string(E.default["WFJ/vb"]),
                                      onClick: () => (0, v.listProjects)(s),
                                  }),
                              ],
                          }),
                ],
            }),
            b || "success" !== d ? null : (0, n.jsx)(eo.A, {}),
        ],
    });
}
var em = s(559106),
    ef = s(783977),
    eh = s(559647),
    ex = s(531685),
    eg = s(957071),
    ep = s(34595),
    ej = s(587157),
    ev = s(200160),
    eN = s(465410);
function eb(e) {
    let { prompts: t, paused: s } = e,
        { index: l, length: r } = (function (e, t) {
            let [s, n] = a.useState(() =>
                    t ? { index: 0, length: e[0].length, phase: "holding" } : { index: 0, length: 0, phase: "typing" },
                ),
                [l, r] = a.useState(t);
            t !== l && (r(t), t && n((t) => ({ ...t, length: e[t.index].length, phase: "holding" })));
            let i = a.useRef(s.length);
            a.useLayoutEffect(() => {
                i.current = s.length;
            });
            let { index: c, phase: o } = s;
            return (
                a.useEffect(() => {
                    if (t) return;
                    let s = e[c].length;
                    if ("holding" === o) {
                        let e = window.setTimeout(() => n((e) => ({ ...e, phase: "deleting" })), 1400);
                        return () => window.clearTimeout(e);
                    }
                    let a = "typing" === o,
                        l = i.current,
                        r = performance.now(),
                        u = l,
                        d = 0,
                        m = 0;
                    return (
                        (d = requestAnimationFrame(function t(i) {
                            let o = Math.floor((i - r) / (a ? 14 : 4)),
                                f = a ? Math.min(s, l + o) : Math.max(0, l - o);
                            (f !== u && ((u = f), n((e) => ({ ...e, length: f }))),
                                a && f === s
                                    ? n((e) => ({ ...e, length: f, phase: "holding" }))
                                    : a || 0 !== f
                                      ? (d = requestAnimationFrame(t))
                                      : (m = window.setTimeout(
                                            () => n({ index: (c + 1) % e.length, length: 0, phase: "typing" }),
                                            250,
                                        )));
                        })),
                        () => {
                            (cancelAnimationFrame(d), window.clearTimeout(m));
                        }
                    );
                }, [e, t, c, o]),
                s
            );
        })(t, s);
    return (0, n.jsx)(u.E, {
        variant: "text-md/normal",
        color: "text-muted",
        className: ev.RC,
        children: t[l].slice(0, r),
    });
}
function ey(e) {
    let { prompts: t, paused: s } = e,
        l = (function (e, t) {
            let [s, n] = a.useState(0);
            return (
                a.useEffect(() => {
                    if (t || e < 2) return;
                    let s = window.setInterval(() => n((t) => (t + 1) % e), 2e3);
                    return () => window.clearInterval(s);
                }, [e, 2e3, t]),
                s
            );
        })(t.length, s);
    return (0, n.jsx)(u.E, { variant: "text-md/normal", color: "text-muted", className: ev.RC, children: t[l] });
}
function ew(e) {
    let { boxFocused: t } = e,
        s = a.useMemo(
            () => [
                R.intl.string(E.default.J2o8Ae),
                R.intl.string(E.default["wn+Bzd"]),
                R.intl.string(E.default["6DCVy3"]),
                R.intl.string(E.default.iRbnRD),
                R.intl.string(E.default["p/zqml"]),
            ],
            [],
        ),
        l = (0, F.bG)([z.Ay], () => z.Ay.useReducedMotion),
        r = (0, F.bG)([ex.A], () => ex.A.isFocused()),
        i = t || !r;
    return (0, n.jsx)("div", {
        className: ev.qf,
        "aria-hidden": !0,
        children: l ? (0, n.jsx)(ey, { prompts: s, paused: i }) : (0, n.jsx)(eb, { prompts: s, paused: i }),
    });
}
function eA(e) {
    let {
            idea: t,
            inputRef: s,
            onIdeaChange: l,
            onSubmit: i,
            submitting: c,
            submitDisabled: o,
            error: d,
            modelSettings: m,
            onModelSettingsChange: f,
            attachments: h,
            onImport: x,
        } = e,
        [g, p] = a.useState(!1),
        j = a.useRef(null),
        v = a.useId(),
        b = "" !== t,
        { addFiles: y, pasteFiles: w, removeAttachment: A } = h;
    a.useLayoutEffect(() => {
        let e = s.current;
        null != e &&
            (e.scrollHeight <= e.clientHeight && (e.style.height = "auto"), (e.style.height = `${e.scrollHeight}px`));
    }, [t, s]);
    let C = a.useCallback(
        (e) => {
            "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), o || i());
        },
        [o, i],
    );
    return (0, n.jsxs)("div", {
        className: ev.kL,
        children: [
            (0, n.jsxs)("div", {
                ref: j,
                className: r()(ev.yk, { [ev.Sl]: null != d }),
                children: [
                    (0, n.jsxs)(u.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        className: ev.Ox,
                        children: [
                            (0, n.jsx)(em.vN, {
                                ringTarget: j,
                                ringClassName: ev.Rg,
                                children: (0, n.jsx)("textarea", {
                                    ref: s,
                                    className: r()(ev.hF, eN.yL),
                                    rows: 3,
                                    value: t,
                                    "aria-label": R.intl.string(E.default.cwrS1O),
                                    "aria-invalid": null != d,
                                    "aria-describedby": null != d ? v : void 0,
                                    onChange: (e) => l(e.currentTarget.value),
                                    onKeyDown: C,
                                    onPaste: (e) => w(e),
                                    onFocus: () => p(!0),
                                    onBlur: () => p(!1),
                                }),
                            }),
                            b ? null : (0, n.jsx)(ew, { boxFocused: g }),
                        ],
                    }),
                    h.attachments.length > 0
                        ? (0, n.jsx)("div", {
                              className: ev.ZO,
                              children: h.attachments.map((e) => {
                                  let { draft: t } = e;
                                  return (0, n.jsx)(ep.Nl, { draft: t, onRemove: A }, t.localId);
                              }),
                          })
                        : null,
                    (0, n.jsxs)("div", {
                        className: ev.KE,
                        children: [
                            (0, n.jsx)(eg.A, {
                                navId: "conjure-home-attach",
                                disabled: c,
                                buttonClassName: ev.gb,
                                iconClassName: ev.Xv,
                                onAddFiles: y,
                                onImport: x,
                            }),
                            (0, n.jsxs)("div", {
                                className: ev.Rc,
                                children: [
                                    (0, n.jsx)(ej.A, {
                                        settings: m ?? N.A4,
                                        tiers: N.lO,
                                        choices: (0, N.Pu)(),
                                        disabled: c,
                                        onChange: f,
                                        className: ev.gb,
                                        icon: (0, n.jsx)(ef.R, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, n.jsx)(M.$, {
                                        variant: "primary",
                                        size: "sm",
                                        icon: eh.SendMessageIcon,
                                        text: R.intl.string(E.default.bNtzxp),
                                        disabled: o,
                                        loading: c,
                                        onClick: i,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            null != d
                ? (0, n.jsx)(u.E, {
                      id: v,
                      variant: "text-sm/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      children: d,
                  })
                : null,
        ],
    });
}
var eC = s(628284),
    eE = s(369606),
    eR = s(926268),
    eS = s(406810),
    eI = s(707554);
let ek = [
    { id: "apps", title: E.default["bvcT/Q"], description: E.default.ArcJqa },
    { id: "games", title: E.default["JU01/4"], description: E.default.FXwLsv },
    { id: "bots", title: E.default.KBHZfO, description: E.default.qNmKhG },
    { id: "profile-widgets", title: E.default.GUb2zA, description: E.default["v+F6qW"] },
    { id: "overlay-widgets", title: E.default.uVOH1p, description: E.default.zm7y9u },
    { id: "automod", title: E.default["+EKk4D"], description: E.default.fpXK3z },
];
var eP = s(651346);
function eL(e) {
    let { className: t } = e;
    return (0, n.jsx)("span", { className: r()(eP.n8, t) });
}
let eO = {
    apps: function () {
        return (0, n.jsxs)("div", {
            className: eP.x,
            children: [
                (0, n.jsxs)("div", {
                    className: eP.My,
                    children: [
                        (0, n.jsx)("span", { className: eP._w }),
                        (0, n.jsx)("span", { className: eP._w }),
                        (0, n.jsx)("span", { className: eP._w }),
                    ],
                }),
                (0, n.jsx)(eL, { className: eP.Lm }),
                (0, n.jsx)("div", {
                    className: eP.Oh,
                    children: [0, 1, 2].map((e) =>
                        (0, n.jsxs)(
                            "div",
                            {
                                className: eP.ZW,
                                children: [
                                    (0, n.jsx)("span", { className: eP.NU }),
                                    0 === e
                                        ? (0, n.jsx)(eC.y, {
                                              size: "xs",
                                              color: D.A.colors.ICON_BRAND,
                                              className: eP._6,
                                          })
                                        : null,
                                    (0, n.jsx)(eL, { className: eP.Eg }),
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
        return (0, n.jsxs)("div", {
            className: r()(eP.x, eP.jG),
            children: [
                (0, n.jsx)("span", { className: r()(eP.gg, eP.K1) }),
                (0, n.jsx)("span", { className: r()(eP.gg, eP.W2) }),
                (0, n.jsx)("span", { className: r()(eP.Fs, eP.A$) }),
                (0, n.jsx)("span", { className: r()(eP.Fs, eP.eP) }),
                (0, n.jsx)("span", { className: r()(eP.Fs, eP.kc) }),
                (0, n.jsx)("span", { className: r()(eP.Fs, eP.OE) }),
                (0, n.jsx)("span", { className: eP.OC }),
                (0, n.jsxs)("div", {
                    className: eP.si,
                    children: [
                        (0, n.jsx)(eE.TrophyIcon, { size: "xxs", color: D.A.colors.ICON_FEEDBACK_WARNING }),
                        (0, n.jsx)(u.E, { variant: "text-xs/bold", color: "none", className: eP.o9, children: 128 }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: eP.KQ,
                    children: [
                        (0, n.jsx)(eR.HeartIcon, { size: "xxs", color: D.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, n.jsx)(eR.HeartIcon, { size: "xxs", color: D.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, n.jsx)(eR.HeartIcon, { size: "xxs", color: D.A.colors.ICON_OVERLAY_LIGHT }),
                    ],
                }),
            ],
        });
    },
    bots: function () {
        return (0, n.jsxs)("div", {
            className: eP.x,
            children: [
                (0, n.jsxs)("div", {
                    className: eP.$y,
                    children: [(0, n.jsx)("span", { className: eP.m$ }), (0, n.jsx)(eL, { className: eP.Md })],
                }),
                (0, n.jsxs)("div", {
                    className: eP.iU,
                    children: [
                        (0, n.jsx)("span", {
                            className: r()(eP.my, eP.FY),
                            children: (0, n.jsx)(J.RobotIcon, { size: "xs", color: D.A.colors.ICON_OVERLAY_LIGHT }),
                        }),
                        (0, n.jsxs)("div", {
                            className: eP.OS,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: eP.f9,
                                    children: [
                                        (0, n.jsx)(eL, { className: eP.iE }),
                                        (0, n.jsx)(u.E, {
                                            variant: "text-xs/bold",
                                            color: "none",
                                            className: eP.AO,
                                            children: R.intl.string(E.default.VlgiLf),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(eL, { className: eP.xs }),
                                (0, n.jsx)(eL, { className: eP.Md }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    "profile-widgets": function () {
        return (0, n.jsxs)("div", {
            className: r()(eP.x, eP.ME),
            children: [
                (0, n.jsx)("span", { className: eP.CK }),
                (0, n.jsxs)("div", {
                    className: eP.kI,
                    children: [
                        (0, n.jsx)("span", { className: r()(eP.my, eP.jU) }),
                        (0, n.jsx)(eL, { className: eP.iE }),
                        (0, n.jsxs)("div", {
                            className: eP.Wy,
                            children: [
                                (0, n.jsx)("div", {
                                    className: eP.M1,
                                    children: [0, 1].map((e) =>
                                        (0, n.jsxs)(
                                            "div",
                                            {
                                                className: eP.dJ,
                                                children: [
                                                    (0, n.jsx)(eL, { className: eP.cR }),
                                                    (0, n.jsx)(eL, { className: eP.Zh }),
                                                ],
                                            },
                                            e,
                                        ),
                                    ),
                                }),
                                (0, n.jsx)("div", {
                                    className: eP.bW,
                                    children: [0, 1, 2, 3, 4, 5].map((e) =>
                                        (0, n.jsx)("span", { className: eP.QR }, e),
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
        return (0, n.jsxs)("div", {
            className: eP.JH,
            children: [
                (0, n.jsx)("span", { className: eP.rx }),
                (0, n.jsx)("span", { className: eP.ny }),
                (0, n.jsx)("span", { className: eP.ZH }),
                (0, n.jsx)("div", {
                    className: eP.$Y,
                    children: [0, 1, 2].map((e) =>
                        (0, n.jsxs)(
                            "div",
                            {
                                className: eP.fn,
                                children: [
                                    (0, n.jsx)("span", { className: r()(eP._h, { [eP.zY]: 0 === e }) }),
                                    (0, n.jsx)(eL, { className: eP.Av }),
                                ],
                            },
                            e,
                        ),
                    ),
                }),
                (0, n.jsxs)("div", {
                    className: eP.Y5,
                    children: [
                        (0, n.jsx)(eS.ClockIcon, { size: "xxs", color: D.A.colors.ICON_OVERLAY_LIGHT }),
                        (0, n.jsx)(eL, { className: eP.jB }),
                    ],
                }),
            ],
        });
    },
    automod: function () {
        return (0, n.jsxs)("div", {
            className: eP.x,
            children: [
                (0, n.jsxs)("div", {
                    className: eP.iU,
                    children: [
                        (0, n.jsx)("span", { className: eP.my }),
                        (0, n.jsxs)("div", {
                            className: eP.OS,
                            children: [
                                (0, n.jsx)(eL, { className: eP.iE }),
                                (0, n.jsx)(eL, { className: r()(eP.xs, eP.pc) }),
                                (0, n.jsx)(eL, { className: r()(eP.Md, eP.pc) }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: eP.jC,
                    children: [
                        (0, n.jsx)(B.ShieldIcon, { size: "sm", color: D.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, n.jsxs)("div", {
                            className: eP.qQ,
                            children: [
                                (0, n.jsx)(eL, { className: r()(eP.Md, eP.k8) }),
                                (0, n.jsx)(eL, { className: r()(eP.nq, eP.k8) }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
};
function eT(e) {
    let { id: t } = e,
        s = eO[t];
    return (0, n.jsx)(s, {});
}
let e_ = a.memo(function () {
    let e = a.useId();
    return (0, n.jsx)("section", {
        className: eP.GG,
        "aria-labelledby": e,
        children: (0, n.jsx)(eI.F, {
            component: (0, n.jsx)(o.D, {
                id: e,
                variant: "heading-lg/medium",
                children: R.intl.string(E.default.IiQEVd),
            }),
            children: (0, n.jsx)("ul", {
                className: eP.Vg,
                children: ek.map((e) => {
                    let { id: t, title: s, description: a } = e;
                    return (0, n.jsxs)(
                        "li",
                        {
                            className: eP.Vs,
                            children: [
                                (0, n.jsx)("div", {
                                    className: eP.Tn,
                                    "aria-hidden": !0,
                                    children: (0, n.jsx)(eT, { id: t }),
                                }),
                                (0, n.jsxs)("div", {
                                    className: eP.pG,
                                    children: [
                                        (0, n.jsx)(o.D, {
                                            variant: "text-md/semibold",
                                            color: "text-strong",
                                            children: R.intl.string(s),
                                        }),
                                        (0, n.jsx)(u.E, {
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
(s(323874), s(14289), s(35956));
var eU = s(666476),
    eF = s(287111),
    eM = s(177676);
let eD = 1;
function ez(e) {
    let t = (0, eM.Ft)(e),
        s = { localId: eD++, name: e.name, contentType: t };
    if ("too-large" === (0, eM.R9)(e, t))
        return { file: e, draft: { ...s, status: "error", errorText: (0, eF.iW)(t) } };
    let n = eU.XB.has(t) ? URL.createObjectURL(e) : void 0;
    return { file: e, draft: { ...s, status: "ready", previewUrl: n } };
}
function eG(e) {
    null != e.draft.previewUrl && URL.revokeObjectURL(e.draft.previewUrl);
}
async function eW(e, t) {
    if ("fits" === (0, eM.R9)(t, (0, eM.Ft)(t))) return (0, g.vX)(e, t);
    let s = await (0, eM.th)(t);
    if (null == s) throw Error("attachment over its size limit");
    return (0, g.vX)(e, s);
}
var eq = s(698638),
    eH = s(606128),
    eB = s(260024);
class eJ extends Error {}
function eK(e) {
    let { guildId: t, onConjurePage: s = !1 } = e,
        [l, j] = a.useState(() => (s ? L.A.getHomePrompt() : ""));
    (0, k.N$)(l);
    let N = a.useRef(l);
    (a.useLayoutEffect(() => {
        N.current = l;
    }),
        a.useEffect(() => {
            if (s) return () => (0, P.fZ)(N.current);
        }, [s]));
    let b = (0, O.A)(s ? "home" : null),
        [F, M] = a.useState(!1),
        [D, z] = a.useState(null),
        [G, W] = a.useState(null),
        [q, H] = a.useState(() => T.w.get(_) ?? null ?? !0),
        B = a.useRef(null),
        J = a.useMemo(
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
                ].map((e) => ({ ...e, image: K[e.id] })),
            [],
        ),
        $ = "user" === (0, m.o)().get("target") || s,
        X = (function () {
            let [e, t] = a.useState([]),
                s = a.useRef(e);
            (a.useLayoutEffect(() => {
                s.current = e;
            }),
                a.useEffect(() => () => s.current.forEach(eG), []));
            let n = a.useCallback((e) => {
                    if (0 === e.length) return;
                    let n = e.map(ez);
                    ((s.current = [...s.current, ...n]), t(s.current));
                }, []),
                l = (0, eM.sm)(n),
                r = a.useCallback((e) => {
                    let n = s.current.find((t) => t.draft.localId === e);
                    null != n && (eG(n), (s.current = s.current.filter((e) => e !== n)), t(s.current));
                }, []),
                i = a.useCallback(() => {
                    (s.current.forEach(eG), (s.current = []), t(s.current));
                }, []),
                c = a.useMemo(
                    () =>
                        (function (e) {
                            if (e.length <= eU.lN) return e;
                            let t = (0, eM.XV)();
                            return e.map((e, s) =>
                                s < eU.lN || "error" === e.draft.status
                                    ? e
                                    : { ...e, draft: { ...e.draft, status: "error", errorText: t } },
                            );
                        })(e),
                    [e],
                );
            return {
                attachments: c,
                addFiles: n,
                pasteFiles: l,
                removeAttachment: r,
                clear: i,
                hasErrors: c.some((e) => "error" === e.draft.status),
            };
        })(),
        { attachments: Y, addFiles: Q, clear: V } = X,
        ee = (function (e) {
            let { guildId: t, modelSettings: s } = e,
                [n, l] = a.useState(!1),
                r = a.useRef(!1);
            return {
                importing: n,
                importArchive: a.useCallback(
                    async (e, n) => {
                        if (r.current) return;
                        let a = (0, h.vt)(e);
                        if (null != a) return void (0, x.P0)({ text: a, variant: "critical" });
                        ((r.current = !0), l(!0));
                        try {
                            let a = (await (0, C.A)(e, t)) ?? n,
                                l = await y({
                                    guildId: t,
                                    installScope: a,
                                    modelSettings: s,
                                    start: async (t) => {
                                        try {
                                            let s = await (0, g.vX)(t, e);
                                            (0, A.P6)(t, R.intl.string(E.default["LUc7/5"]), [s]);
                                        } catch {
                                            try {
                                                await (0, v.xx)(t);
                                            } catch {}
                                            throw new S();
                                        }
                                    },
                                });
                            (0, w.Ay)(l);
                        } catch (e) {
                            (0, x.P0)({
                                text: e instanceof S ? R.intl.string(E.default["Q+l4Hv"]) : (0, p.mG)(e),
                                variant: "critical",
                            });
                        } finally {
                            ((r.current = !1), l(!1));
                        }
                    },
                    [t, s],
                ),
            };
        })({ guildId: t, modelSettings: G }),
        { importArchive: et } = ee,
        es = F || ee.importing,
        en = "" !== l.trim() || Y.length > 0,
        ea = es || !en || X.hasErrors,
        el = (0, h.yN)(a.useCallback((e) => et(e, $ ? "user" : null), [et, $])),
        er = a.useCallback((e) => Q(Array.from(e)), [Q]);
    (0, U.p)(B);
    let ei = a.useCallback((e) => {
            (j(e), z(null));
        }, []),
        ec = a.useCallback(
            (e) => {
                ei(e);
                let t = B.current;
                null != t && (t.focus(), t.setSelectionRange(e.length, e.length));
            },
            [ei],
        ),
        eo = a.useRef(!1),
        eu = a.useCallback(async () => {
            let e = l.trim();
            if (("" !== e || 0 !== Y.length) && !eo.current) {
                ((eo.current = !0), M(!0), z(null));
                try {
                    let n = await y({
                        guildId: t,
                        installScope: null,
                        prompt: e,
                        modelSettings: G,
                        start: async (n) => {
                            let a = [];
                            if (Y.length > 0)
                                try {
                                    a = await Promise.all(
                                        Y.map((e) => {
                                            let { file: t } = e;
                                            return eW(n, t);
                                        }),
                                    );
                                } catch {
                                    throw (await (0, v.xx)(n).catch(() => void 0), new eJ());
                                }
                            ((0, A.P6)(n, e, a, s ? void 0 : t), V());
                        },
                    });
                    (j(""), (N.current = ""), (eo.current = !1), M(!1), (0, w.Ay)(n));
                } catch (e) {
                    (z(e instanceof eJ ? R.intl.string(E.default["903H7m"]) : (0, p.mG)(e)), (eo.current = !1), M(!1));
                }
            }
        }, [l, G, t, s, Y, V]),
        em = a.useCallback((e) => {
            (T.w.set(_, e), H(e));
        }, []),
        ef = R.intl.string(q ? E.default.kar7jh : E.default.WSc5Y2);
    return (0, n.jsx)("div", {
        className: r()(eB.MY, eH.T),
        children: (0, n.jsxs)("div", {
            className: eB.Zp,
            children: [
                (0, n.jsxs)("main", {
                    className: eB.iW,
                    children: [
                        es
                            ? null
                            : (0, n.jsx)(d.A, {
                                  title: R.intl.string(E.default.gy7byi),
                                  description: R.intl.string(E.default["dkv/WO"]),
                                  icons: eq.ir,
                                  onDrop: er,
                              }),
                        s
                            ? null
                            : (0, n.jsx)(I.A, {
                                  title: R.intl.string(E.default.uk6jhJ),
                                  transparent: !0,
                                  actions: (0, n.jsx)(f.A.Icon, {
                                      icon: i.Z,
                                      color: "var(--icon-strong)",
                                      className: eB.FW,
                                      tooltip: ef,
                                      "aria-label": ef,
                                      selected: q,
                                      onClick: () => em(!q),
                                  }),
                              }),
                        (0, n.jsx)(c.Ip, {
                            ref: b,
                            className: eB.XG,
                            children: (0, n.jsxs)("div", {
                                className: eB.Qs,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: r()(eB.Lv, { [eB.$O]: s }),
                                        children: [
                                            (0, n.jsxs)("div", {
                                                className: eB.ZK,
                                                children: [
                                                    (0, n.jsx)(o.D, {
                                                        variant: "display-lg",
                                                        color: "text-strong",
                                                        className: eB.DD,
                                                        children: R.intl.string(E.default.doYpEy),
                                                    }),
                                                    (0, n.jsx)(u.E, {
                                                        variant: "text-md/normal",
                                                        color: "text-strong",
                                                        className: eB.VA,
                                                        children: R.intl.string(E.default.BH58fD),
                                                    }),
                                                ],
                                            }),
                                            (0, n.jsxs)("div", {
                                                className: eB.ZK,
                                                children: [
                                                    (0, n.jsx)(eA, {
                                                        idea: l,
                                                        inputRef: B,
                                                        onIdeaChange: ei,
                                                        onSubmit: eu,
                                                        submitting: es,
                                                        submitDisabled: ea,
                                                        error: D,
                                                        modelSettings: G,
                                                        onModelSettingsChange: W,
                                                        attachments: X,
                                                        onImport: el.open,
                                                    }),
                                                    el.input,
                                                    (0, n.jsx)(u.E, {
                                                        variant: "text-xxs/normal",
                                                        color: "text-muted",
                                                        children: R.intl.string(E.default.hebdhA),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)(Z, { inspirations: J, onCopyPrompt: ec }),
                                    (0, n.jsx)(e_, {}),
                                ],
                            }),
                        }),
                    ],
                }),
                q && !s ? (0, n.jsx)(ed, { guildId: t, archiveImport: ee }) : null,
            ],
        }),
    });
}
