s.d(t, { A: () => eJ });
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
    C = s(87501),
    E = s(105292);
class R extends Error {}
var S = s(705427),
    I = s(120234),
    k = s(398773),
    P = s(735769),
    L = s(101766);
(s(976860), s(652215), s(746080));
var O = s(506774);
let T = "ConjureProjectsPanelOpen";
var _ = s(89310),
    U = s(17928),
    F = s(821609),
    M = s(661531),
    D = s(775602),
    z = s(486020),
    G = s(687966),
    W = s(323384),
    q = s(632015),
    H = s(231483),
    B = s(430392);
let J = {
        flappy: "/assets/b43659b526f2e936.svg",
        "raid-calendar": "/assets/1d701ea289cc99e6.svg",
        "aram-widget": "/assets/05c0d07952b2d93f.svg",
        trivia: "/assets/5813258afff68797.svg",
        "spoilers-automod": "/assets/54b5cda688395473.svg",
        "movie-night": "/assets/fcb9220c49b6460a.svg",
        "welcome-bot": "/assets/56e489e9c5907add.svg",
    },
    K = { games: G.GameControllerIcon, apps: W.k, profile_widget: q.f, automod: H.ShieldIcon, chat_bot: B.RobotIcon };
var $ = s(621466);
let X = "data-conjure-carousel-card";
var Y = s(19493);
let Q = a.memo(function (e) {
        let { inspiration: t, onCopyPrompt: s } = e,
            a = K[t.category];
        return (0, n.jsxs)("li", {
            className: Y.AS,
            [X]: "",
            children: [
                (0, n.jsxs)("div", {
                    className: Y.rl,
                    children: [
                        (0, n.jsx)("img", {
                            className: Y.my,
                            src: (0, z.AE)(void 0, t.authorAvatarSeed),
                            alt: "",
                            "aria-hidden": !0,
                        }),
                        (0, n.jsx)(u.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            className: Y.Tq,
                            children: t.shortPrompt,
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: Y.Nr,
                    children: [
                        (0, n.jsxs)("div", {
                            className: Y.xn,
                            children: [
                                (0, n.jsx)("img", { className: Y.q_, src: t.image, alt: "" }),
                                (0, n.jsx)("div", {
                                    className: Y.o1,
                                    children: (0, n.jsx)(F.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: E.intl.string(C.default["6CQjTy"]),
                                        onClick: () => s(t.fullPrompt),
                                    }),
                                }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: Y.qr,
                            children: [
                                (0, n.jsx)("div", {
                                    className: Y.Yl,
                                    "aria-hidden": !0,
                                    children: (0, n.jsx)(a, { size: "md", color: M.A.colors.ICON_STRONG }),
                                }),
                                (0, n.jsxs)("div", {
                                    className: Y.PJ,
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
                                                        return E.intl.string(C.default["JU01/4"]);
                                                    case "apps":
                                                        return E.intl.string(C.default["bvcT/Q"]);
                                                    case "profile_widget":
                                                        return E.intl.string(C.default.GUb2zA);
                                                    case "automod":
                                                        return E.intl.string(C.default["+EKk4D"]);
                                                    case "chat_bot":
                                                        return E.intl.string(C.default.KBHZfO);
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
        let { inspirations: s, onCopyPrompt: l } = e,
            r = (0, U.bG)([D.Ay], () => D.Ay.useReducedMotion),
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
                    a = (n = Array.from(s.querySelectorAll(`[${X}]`))).map((e) => e.offsetLeft + e.offsetWidth / 2);
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
                    ((h = (0, $.vq)(t.relatedTarget, Node) && e?.contains(t.relatedTarget) === !0), N());
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
                className: r ? Y.vV : Y.Dk,
                "aria-label": E.intl.string(C.default.Qc4S39),
                children: (0, n.jsx)("ul", {
                    ref: c,
                    className: Y.u4,
                    children: s.map((e) => (0, n.jsx)(Q, { inspiration: e, onCopyPrompt: l }, e.id)),
                }),
            })
        );
    });
var Z = s(289873),
    ee = s(441935),
    et = s(95264),
    es = s(260498),
    en = s(277867),
    ea = s(281091),
    el = s(380654),
    er = s(186340),
    ei = s(919485),
    ec = s(588359),
    eo = s(638693);
function eu(e) {
    let t,
        { guildId: s, archiveImport: l } = e,
        {
            mine: r,
            others: i,
            fetchState: d,
        } = ((t = (0, ea.A)(s)),
        {
            mine: t,
            others: (0, U.yK)(
                [es.Ay],
                () =>
                    (0, en.N)(
                        es.Ay.getViewOnlyProjects(s).map((e) => ({
                            project: e,
                            turnStartedAt: null,
                            finishedAt: null,
                        })),
                    ),
                [s],
            ),
            fetchState: (0, U.bG)([es.Ay], () => es.Ay.getGuildProjectsFetchState(s), [s]),
        }),
        { importArchive: m } = l,
        f = (0, h.yN)(a.useCallback((e) => m(e, "guild"), [m])),
        x = a.useCallback((e) => (0, w.A)(e.id), []),
        g = a.useCallback((e) => (0, n.jsx)(el.S, { project: e, guildId: s }), [s]),
        p = a.useCallback(
            (e) =>
                (0, n.jsx)(F.$, {
                    variant: "secondary",
                    size: "sm",
                    text: E.intl.string(C.default.XWgAfc),
                    "aria-label": E.intl.formatToPlainString(C.default.g6TP7T, { name: e.name }),
                    onClick: () => (0, et.A)(e, s),
                }),
            [s],
        ),
        j = a.useCallback((e, t) => (0, el.V)(e, t, s), [s]),
        N = E.intl.string(C.default.BMn2lY),
        b = r.length > 0 || i.length > 0;
    return (0, n.jsxs)("aside", {
        className: eo.pz,
        "aria-label": N,
        children: [
            (0, n.jsxs)("div", {
                className: eo.wx,
                children: [
                    (0, n.jsx)(o.D, { variant: "heading-md/semibold", color: "text-strong", children: N }),
                    (0, n.jsx)(ee.A, { importing: l.importing, onClick: f.open }),
                    f.input,
                ],
            }),
            (0, n.jsxs)(c.Ip, {
                className: eo.XG,
                children: [
                    r.length > 0
                        ? (0, n.jsx)(ei.A, {
                              title: E.intl.string(C.default["8LfMqp"]),
                              className: eo.uW,
                              children: (0, n.jsx)(er.A, {
                                  projects: r,
                                  onSelect: x,
                                  renderProjectActions: g,
                                  onProjectContextMenu: j,
                              }),
                          })
                        : null,
                    i.length > 0
                        ? (0, n.jsx)(ei.A, {
                              title: E.intl.string(C.default.MmWif0),
                              className: eo.uW,
                              children: (0, n.jsx)(er.A, { projects: i, renderProjectActions: p }),
                          })
                        : null,
                    b || "error" !== d
                        ? b || "success" === d
                            ? null
                            : (0, n.jsx)("div", { className: eo.E8, children: (0, n.jsx)(Z.y, {}) })
                        : (0, n.jsxs)("div", {
                              className: eo.E8,
                              children: [
                                  (0, n.jsx)(u.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: E.intl.string(C.default.DJAPMO),
                                  }),
                                  (0, n.jsx)(F.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: E.intl.string(C.default["WFJ/vb"]),
                                      onClick: () => (0, v.listProjects)(s),
                                  }),
                              ],
                          }),
                ],
            }),
            b || "success" !== d ? null : (0, n.jsx)(ec.A, {}),
        ],
    });
}
var ed = s(559106),
    em = s(783977),
    ef = s(559647),
    eh = s(531685),
    ex = s(957071),
    eg = s(34595),
    ep = s(587157),
    ej = s(200160),
    ev = s(465410);
function eN(e) {
    let { prompts: t, paused: s, showCaret: l } = e,
        { index: r, length: i } = (function (e, t) {
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
    return (0, n.jsxs)(u.E, {
        variant: "text-md/normal",
        color: "text-muted",
        className: ej.RC,
        children: [t[r].slice(0, i), l ? (0, n.jsx)("span", { className: ej.OW }) : null],
    });
}
function eb(e) {
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
    return (0, n.jsx)(u.E, { variant: "text-md/normal", color: "text-muted", className: ej.RC, children: t[l] });
}
function ey(e) {
    let { boxFocused: t } = e,
        s = a.useMemo(
            () => [
                E.intl.string(C.default.J2o8Ae),
                E.intl.string(C.default["wn+Bzd"]),
                E.intl.string(C.default["6DCVy3"]),
                E.intl.string(C.default.iRbnRD),
                E.intl.string(C.default["p/zqml"]),
            ],
            [],
        ),
        l = (0, U.bG)([D.Ay], () => D.Ay.useReducedMotion),
        r = (0, U.bG)([eh.A], () => eh.A.isFocused()),
        i = t || !r;
    return (0, n.jsx)("div", {
        className: ej.qf,
        "aria-hidden": !0,
        children: l
            ? (0, n.jsx)(eb, { prompts: s, paused: i })
            : (0, n.jsx)(eN, { prompts: s, paused: i, showCaret: !t }),
    });
}
function ew(e) {
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
    let R = a.useCallback(
        (e) => {
            "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), o || i());
        },
        [o, i],
    );
    return (0, n.jsxs)("div", {
        className: ej.kL,
        children: [
            (0, n.jsxs)("div", {
                ref: j,
                className: r()(ej.yk, { [ej.Sl]: null != d }),
                children: [
                    (0, n.jsxs)(u.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        className: ej.Ox,
                        children: [
                            (0, n.jsx)(ed.vN, {
                                ringTarget: j,
                                ringClassName: ej.Rg,
                                children: (0, n.jsx)("textarea", {
                                    ref: s,
                                    className: r()(ej.hF, ev.yL),
                                    rows: 3,
                                    value: t,
                                    "aria-label": E.intl.string(C.default.cwrS1O),
                                    "aria-invalid": null != d,
                                    "aria-describedby": null != d ? v : void 0,
                                    onChange: (e) => l(e.currentTarget.value),
                                    onKeyDown: R,
                                    onPaste: (e) => w(e),
                                    onFocus: () => p(!0),
                                    onBlur: () => p(!1),
                                }),
                            }),
                            b ? null : (0, n.jsx)(ey, { boxFocused: g }),
                        ],
                    }),
                    h.attachments.length > 0
                        ? (0, n.jsx)("div", {
                              className: ej.ZO,
                              children: h.attachments.map((e) => {
                                  let { draft: t } = e;
                                  return (0, n.jsx)(eg.Nl, { draft: t, onRemove: A }, t.localId);
                              }),
                          })
                        : null,
                    (0, n.jsxs)("div", {
                        className: ej.KE,
                        children: [
                            (0, n.jsx)(ex.A, {
                                navId: "conjure-home-attach",
                                disabled: c,
                                buttonClassName: ej.gb,
                                iconClassName: ej.Xv,
                                onAddFiles: y,
                                onImport: x,
                            }),
                            (0, n.jsxs)("div", {
                                className: ej.Rc,
                                children: [
                                    (0, n.jsx)(ep.A, {
                                        settings: m ?? N.A4,
                                        tiers: N.lO,
                                        choices: (0, N.Pu)(),
                                        disabled: c,
                                        onChange: f,
                                        className: ej.gb,
                                        icon: (0, n.jsx)(em.R, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, n.jsx)(F.$, {
                                        variant: "primary",
                                        size: "sm",
                                        icon: ef.SendMessageIcon,
                                        text: E.intl.string(C.default.bNtzxp),
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
var eA = s(628284),
    eC = s(369606),
    eE = s(926268),
    eR = s(406810),
    eS = s(707554);
let eI = [
    { id: "apps", title: C.default["bvcT/Q"], description: C.default.ArcJqa },
    { id: "games", title: C.default["JU01/4"], description: C.default.FXwLsv },
    { id: "bots", title: C.default.KBHZfO, description: C.default.qNmKhG },
    { id: "profile-widgets", title: C.default.GUb2zA, description: C.default["v+F6qW"] },
    { id: "overlay-widgets", title: C.default.uVOH1p, description: C.default.zm7y9u },
    { id: "automod", title: C.default["+EKk4D"], description: C.default.fpXK3z },
];
var ek = s(651346);
function eP(e) {
    let { className: t } = e;
    return (0, n.jsx)("span", { className: r()(ek.n8, t) });
}
let eL = {
    apps: function () {
        return (0, n.jsxs)("div", {
            className: ek.x,
            children: [
                (0, n.jsxs)("div", {
                    className: ek.My,
                    children: [
                        (0, n.jsx)("span", { className: ek._w }),
                        (0, n.jsx)("span", { className: ek._w }),
                        (0, n.jsx)("span", { className: ek._w }),
                    ],
                }),
                (0, n.jsx)(eP, { className: ek.Lm }),
                (0, n.jsx)("div", {
                    className: ek.Oh,
                    children: [0, 1, 2].map((e) =>
                        (0, n.jsxs)(
                            "div",
                            {
                                className: ek.ZW,
                                children: [
                                    (0, n.jsx)("span", { className: ek.NU }),
                                    0 === e
                                        ? (0, n.jsx)(eA.y, {
                                              size: "xs",
                                              color: M.A.colors.ICON_BRAND,
                                              className: ek._6,
                                          })
                                        : null,
                                    (0, n.jsx)(eP, { className: ek.Eg }),
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
            className: r()(ek.x, ek.jG),
            children: [
                (0, n.jsx)("span", { className: r()(ek.gg, ek.K1) }),
                (0, n.jsx)("span", { className: r()(ek.gg, ek.W2) }),
                (0, n.jsx)("span", { className: r()(ek.Fs, ek.A$) }),
                (0, n.jsx)("span", { className: r()(ek.Fs, ek.eP) }),
                (0, n.jsx)("span", { className: r()(ek.Fs, ek.kc) }),
                (0, n.jsx)("span", { className: r()(ek.Fs, ek.OE) }),
                (0, n.jsx)("span", { className: ek.OC }),
                (0, n.jsxs)("div", {
                    className: ek.si,
                    children: [
                        (0, n.jsx)(eC.TrophyIcon, { size: "xxs", color: M.A.colors.ICON_FEEDBACK_WARNING }),
                        (0, n.jsx)(u.E, { variant: "text-xs/bold", color: "none", className: ek.o9, children: 128 }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: ek.KQ,
                    children: [
                        (0, n.jsx)(eE.HeartIcon, { size: "xxs", color: M.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, n.jsx)(eE.HeartIcon, { size: "xxs", color: M.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, n.jsx)(eE.HeartIcon, { size: "xxs", color: M.A.colors.ICON_OVERLAY_LIGHT }),
                    ],
                }),
            ],
        });
    },
    bots: function () {
        return (0, n.jsxs)("div", {
            className: ek.x,
            children: [
                (0, n.jsxs)("div", {
                    className: ek.$y,
                    children: [(0, n.jsx)("span", { className: ek.m$ }), (0, n.jsx)(eP, { className: ek.Md })],
                }),
                (0, n.jsxs)("div", {
                    className: ek.iU,
                    children: [
                        (0, n.jsx)("span", {
                            className: r()(ek.my, ek.FY),
                            children: (0, n.jsx)(B.RobotIcon, { size: "xs", color: M.A.colors.ICON_OVERLAY_LIGHT }),
                        }),
                        (0, n.jsxs)("div", {
                            className: ek.OS,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: ek.f9,
                                    children: [
                                        (0, n.jsx)(eP, { className: ek.iE }),
                                        (0, n.jsx)(u.E, {
                                            variant: "text-xs/bold",
                                            color: "none",
                                            className: ek.AO,
                                            children: E.intl.string(C.default.VlgiLf),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(eP, { className: ek.xs }),
                                (0, n.jsx)(eP, { className: ek.Md }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    "profile-widgets": function () {
        return (0, n.jsxs)("div", {
            className: r()(ek.x, ek.ME),
            children: [
                (0, n.jsx)("span", { className: ek.CK }),
                (0, n.jsxs)("div", {
                    className: ek.kI,
                    children: [
                        (0, n.jsx)("span", { className: r()(ek.my, ek.jU) }),
                        (0, n.jsx)(eP, { className: ek.iE }),
                        (0, n.jsxs)("div", {
                            className: ek.Wy,
                            children: [
                                (0, n.jsx)("div", {
                                    className: ek.M1,
                                    children: [0, 1].map((e) =>
                                        (0, n.jsxs)(
                                            "div",
                                            {
                                                className: ek.dJ,
                                                children: [
                                                    (0, n.jsx)(eP, { className: ek.cR }),
                                                    (0, n.jsx)(eP, { className: ek.Zh }),
                                                ],
                                            },
                                            e,
                                        ),
                                    ),
                                }),
                                (0, n.jsx)("div", {
                                    className: ek.bW,
                                    children: [0, 1, 2, 3, 4, 5].map((e) =>
                                        (0, n.jsx)("span", { className: ek.QR }, e),
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
            className: ek.JH,
            children: [
                (0, n.jsx)("span", { className: ek.rx }),
                (0, n.jsx)("span", { className: ek.ny }),
                (0, n.jsx)("span", { className: ek.ZH }),
                (0, n.jsx)("div", {
                    className: ek.$Y,
                    children: [0, 1, 2].map((e) =>
                        (0, n.jsxs)(
                            "div",
                            {
                                className: ek.fn,
                                children: [
                                    (0, n.jsx)("span", { className: r()(ek._h, { [ek.zY]: 0 === e }) }),
                                    (0, n.jsx)(eP, { className: ek.Av }),
                                ],
                            },
                            e,
                        ),
                    ),
                }),
                (0, n.jsxs)("div", {
                    className: ek.Y5,
                    children: [
                        (0, n.jsx)(eR.ClockIcon, { size: "xxs", color: M.A.colors.ICON_OVERLAY_LIGHT }),
                        (0, n.jsx)(eP, { className: ek.jB }),
                    ],
                }),
            ],
        });
    },
    automod: function () {
        return (0, n.jsxs)("div", {
            className: ek.x,
            children: [
                (0, n.jsxs)("div", {
                    className: ek.iU,
                    children: [
                        (0, n.jsx)("span", { className: ek.my }),
                        (0, n.jsxs)("div", {
                            className: ek.OS,
                            children: [
                                (0, n.jsx)(eP, { className: ek.iE }),
                                (0, n.jsx)(eP, { className: r()(ek.xs, ek.pc) }),
                                (0, n.jsx)(eP, { className: r()(ek.Md, ek.pc) }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: ek.jC,
                    children: [
                        (0, n.jsx)(H.ShieldIcon, { size: "sm", color: M.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, n.jsxs)("div", {
                            className: ek.qQ,
                            children: [
                                (0, n.jsx)(eP, { className: r()(ek.Md, ek.k8) }),
                                (0, n.jsx)(eP, { className: r()(ek.nq, ek.k8) }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
};
function eO(e) {
    let { id: t } = e,
        s = eL[t];
    return (0, n.jsx)(s, {});
}
let eT = a.memo(function () {
    let e = a.useId();
    return (0, n.jsx)("section", {
        className: ek.GG,
        "aria-labelledby": e,
        children: (0, n.jsx)(eS.F, {
            component: (0, n.jsx)(o.D, {
                id: e,
                variant: "heading-lg/medium",
                children: E.intl.string(C.default.IiQEVd),
            }),
            children: (0, n.jsx)("ul", {
                className: ek.Vg,
                children: eI.map((e) => {
                    let { id: t, title: s, description: a } = e;
                    return (0, n.jsxs)(
                        "li",
                        {
                            className: ek.Vs,
                            children: [
                                (0, n.jsx)("div", {
                                    className: ek.Tn,
                                    "aria-hidden": !0,
                                    children: (0, n.jsx)(eO, { id: t }),
                                }),
                                (0, n.jsxs)("div", {
                                    className: ek.pG,
                                    children: [
                                        (0, n.jsx)(o.D, {
                                            variant: "text-md/semibold",
                                            color: "text-strong",
                                            children: E.intl.string(s),
                                        }),
                                        (0, n.jsx)(u.E, {
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
(s(323874), s(14289), s(35956));
var e_ = s(666476),
    eU = s(287111),
    eF = s(177676);
let eM = 1;
function eD(e) {
    let t = (0, eF.Ft)(e),
        s = { localId: eM++, name: e.name, contentType: t };
    if ("too-large" === (0, eF.R9)(e, t))
        return { file: e, draft: { ...s, status: "error", errorText: (0, eU.iW)(t) } };
    let n = e_.XB.has(t) ? URL.createObjectURL(e) : void 0;
    return { file: e, draft: { ...s, status: "ready", previewUrl: n } };
}
function ez(e) {
    null != e.draft.previewUrl && URL.revokeObjectURL(e.draft.previewUrl);
}
async function eG(e, t) {
    if ("fits" === (0, eF.R9)(t, (0, eF.Ft)(t))) return (0, g.vX)(e, t);
    let s = await (0, eF.th)(t);
    if (null == s) throw Error("attachment over its size limit");
    return (0, g.vX)(e, s);
}
var eW = s(698638),
    eq = s(606128),
    eH = s(260024);
class eB extends Error {}
function eJ(e) {
    let { guildId: t, onConjurePage: s = !1 } = e,
        [l, j] = a.useState(() => (s ? P.A.getHomePrompt() : ""));
    (0, I.N$)(l);
    let N = a.useRef(l);
    (a.useLayoutEffect(() => {
        N.current = l;
    }),
        a.useEffect(() => {
            if (s) return () => (0, k.fZ)(N.current);
        }, [s]));
    let b = (0, L.A)(s ? "home" : null),
        [U, F] = a.useState(!1),
        [M, D] = a.useState(null),
        [z, G] = a.useState(null),
        [W, q] = a.useState(() => O.w.get(T) ?? null ?? !0),
        H = a.useRef(null),
        B = a.useMemo(
            () =>
                [
                    {
                        id: "flappy",
                        category: "games",
                        shortPrompt: E.intl.string(C.default.gtX7tS),
                        fullPrompt: E.intl.string(C.default["Sfa50+"]),
                        name: E.intl.string(C.default.Tbag5k),
                        authorAvatarSeed: "1",
                    },
                    {
                        id: "raid-calendar",
                        category: "apps",
                        shortPrompt: E.intl.string(C.default.GNGB59),
                        fullPrompt: E.intl.string(C.default.lxwxNm),
                        name: E.intl.string(C.default["rzB/bE"]),
                        authorAvatarSeed: "2",
                    },
                    {
                        id: "aram-widget",
                        category: "profile_widget",
                        shortPrompt: E.intl.string(C.default.RzNoHJ),
                        fullPrompt: E.intl.string(C.default.VfUFEt),
                        name: E.intl.string(C.default.RYGHMF),
                        authorAvatarSeed: "3",
                    },
                    {
                        id: "trivia",
                        category: "games",
                        shortPrompt: E.intl.string(C.default.TGN39X),
                        fullPrompt: E.intl.string(C.default.gilNLG),
                        name: E.intl.string(C.default.vvwBlz),
                        authorAvatarSeed: "4",
                    },
                    {
                        id: "spoilers-automod",
                        category: "automod",
                        shortPrompt: E.intl.string(C.default.Gw756q),
                        fullPrompt: E.intl.string(C.default["d/WMHR"]),
                        name: E.intl.string(C.default["v9+fAY"]),
                        authorAvatarSeed: "5",
                    },
                    {
                        id: "movie-night",
                        category: "apps",
                        shortPrompt: E.intl.string(C.default.u4UWGH),
                        fullPrompt: E.intl.string(C.default.ofBNNy),
                        name: E.intl.string(C.default.DQQdZL),
                        authorAvatarSeed: "6",
                    },
                    {
                        id: "welcome-bot",
                        category: "chat_bot",
                        shortPrompt: E.intl.string(C.default["T3+H3J"]),
                        fullPrompt: E.intl.string(C.default.ryeSuC),
                        name: E.intl.string(C.default["3deXbx"]),
                        authorAvatarSeed: "7",
                    },
                ].map((e) => ({ ...e, image: J[e.id] })),
            [],
        ),
        K = "user" === (0, m.o)().get("target") || s,
        $ = (function () {
            let [e, t] = a.useState([]),
                s = a.useRef(e);
            (a.useLayoutEffect(() => {
                s.current = e;
            }),
                a.useEffect(() => () => s.current.forEach(ez), []));
            let n = a.useCallback((e) => {
                    if (0 === e.length) return;
                    let n = e.map(eD);
                    ((s.current = [...s.current, ...n]), t(s.current));
                }, []),
                l = (0, eF.sm)(n),
                r = a.useCallback((e) => {
                    let n = s.current.find((t) => t.draft.localId === e);
                    null != n && (ez(n), (s.current = s.current.filter((e) => e !== n)), t(s.current));
                }, []),
                i = a.useCallback(() => {
                    (s.current.forEach(ez), (s.current = []), t(s.current));
                }, []),
                c = a.useMemo(
                    () =>
                        (function (e) {
                            if (e.length <= e_.lN) return e;
                            let t = (0, eF.XV)();
                            return e.map((e, s) =>
                                s < e_.lN || "error" === e.draft.status
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
        { attachments: X, addFiles: Y, clear: Q } = $,
        Z = (function (e) {
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
                            let a = await y({
                                guildId: t,
                                installScope: n,
                                modelSettings: s,
                                start: async (t) => {
                                    try {
                                        let s = await (0, g.vX)(t, e);
                                        (0, A.P6)(t, E.intl.string(C.default["LUc7/5"]), [s]);
                                    } catch {
                                        try {
                                            await (0, v.xx)(t);
                                        } catch {}
                                        throw new R();
                                    }
                                },
                            });
                            (0, w.A)(a);
                        } catch (e) {
                            (0, x.P0)({
                                text: e instanceof R ? E.intl.string(C.default["Q+l4Hv"]) : (0, p.mG)(e),
                                variant: "critical",
                            });
                        } finally {
                            ((r.current = !1), l(!1));
                        }
                    },
                    [t, s],
                ),
            };
        })({ guildId: t, modelSettings: z }),
        { importArchive: ee } = Z,
        et = U || Z.importing,
        es = "" !== l.trim() || X.length > 0,
        en = et || !es || $.hasErrors,
        ea = (0, h.yN)(a.useCallback((e) => ee(e, K ? "user" : null), [ee, K])),
        el = a.useCallback((e) => Y(Array.from(e)), [Y]);
    (0, _.p)(H);
    let er = a.useCallback((e) => {
            (j(e), D(null));
        }, []),
        ei = a.useCallback(
            (e) => {
                er(e);
                let t = H.current;
                null != t && (t.focus(), t.setSelectionRange(e.length, e.length));
            },
            [er],
        ),
        ec = a.useRef(!1),
        eo = a.useCallback(async () => {
            let e = l.trim();
            if (("" !== e || 0 !== X.length) && !ec.current) {
                ((ec.current = !0), F(!0), D(null));
                try {
                    let n = await y({
                        guildId: t,
                        installScope: null,
                        prompt: e,
                        modelSettings: z,
                        start: async (n) => {
                            let a = [];
                            if (X.length > 0)
                                try {
                                    a = await Promise.all(
                                        X.map((e) => {
                                            let { file: t } = e;
                                            return eG(n, t);
                                        }),
                                    );
                                } catch {
                                    throw (await (0, v.xx)(n).catch(() => void 0), new eB());
                                }
                            ((0, A.P6)(n, e, a, s ? void 0 : t), Q());
                        },
                    });
                    (j(""), (N.current = ""), (ec.current = !1), F(!1), (0, w.A)(n));
                } catch (e) {
                    (D(e instanceof eB ? E.intl.string(C.default["903H7m"]) : (0, p.mG)(e)), (ec.current = !1), F(!1));
                }
            }
        }, [l, z, t, s, X, Q]),
        ed = a.useCallback((e) => {
            (O.w.set(T, e), q(e));
        }, []),
        em = E.intl.string(W ? C.default.kar7jh : C.default.WSc5Y2);
    return (0, n.jsx)("div", {
        className: r()(eH.MY, eq.T),
        children: (0, n.jsxs)("div", {
            className: eH.Zp,
            children: [
                (0, n.jsxs)("main", {
                    className: eH.iW,
                    children: [
                        et
                            ? null
                            : (0, n.jsx)(d.A, {
                                  title: E.intl.string(C.default.gy7byi),
                                  description: E.intl.string(C.default["dkv/WO"]),
                                  icons: eW.ir,
                                  onDrop: el,
                              }),
                        s
                            ? null
                            : (0, n.jsx)(S.A, {
                                  title: E.intl.string(C.default.uk6jhJ),
                                  transparent: !0,
                                  actions: (0, n.jsx)(f.A.Icon, {
                                      icon: i.Z,
                                      color: "var(--icon-strong)",
                                      className: eH.FW,
                                      tooltip: em,
                                      "aria-label": em,
                                      selected: W,
                                      onClick: () => ed(!W),
                                  }),
                              }),
                        (0, n.jsx)(c.Ip, {
                            ref: b,
                            className: eH.XG,
                            children: (0, n.jsxs)("div", {
                                className: eH.Qs,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: r()(eH.Lv, { [eH.$O]: s }),
                                        children: [
                                            (0, n.jsxs)("div", {
                                                className: eH.ZK,
                                                children: [
                                                    (0, n.jsx)(o.D, {
                                                        variant: "display-lg",
                                                        color: "text-strong",
                                                        className: eH.DD,
                                                        children: E.intl.string(C.default.doYpEy),
                                                    }),
                                                    (0, n.jsx)(u.E, {
                                                        variant: "text-md/normal",
                                                        color: "text-strong",
                                                        className: eH.VA,
                                                        children: E.intl.string(C.default.BH58fD),
                                                    }),
                                                ],
                                            }),
                                            (0, n.jsxs)("div", {
                                                className: eH.ZK,
                                                children: [
                                                    (0, n.jsx)(ew, {
                                                        idea: l,
                                                        inputRef: H,
                                                        onIdeaChange: er,
                                                        onSubmit: eo,
                                                        submitting: et,
                                                        submitDisabled: en,
                                                        error: M,
                                                        modelSettings: z,
                                                        onModelSettingsChange: G,
                                                        attachments: $,
                                                        onImport: ea.open,
                                                    }),
                                                    ea.input,
                                                    (0, n.jsx)(u.E, {
                                                        variant: "text-xxs/normal",
                                                        color: "text-muted",
                                                        children: E.intl.string(C.default.hebdhA),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)(V, { inspirations: B, onCopyPrompt: ei }),
                                    (0, n.jsx)(eT, {}),
                                ],
                            }),
                        }),
                    ],
                }),
                W && !s ? (0, n.jsx)(eu, { guildId: t, archiveImport: Z }) : null,
            ],
        }),
    });
}
