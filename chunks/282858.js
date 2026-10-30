s.d(t, { A: () => eY });
var n = s(477900),
    l = s(582128),
    a = s(503698),
    r = s.n(a),
    i = s(97893),
    o = s(364522),
    c = s(297264),
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
    let { guildId: t, installScope: s, prompt: n, modelSettings: l, templateId: a } = e,
        r = await (0, v.gA)(
            null != s
                ? { guild_id: t, install_scope: s }
                : { guild_id: t, auto_install_scope: !0, prompt: (n ?? "").slice(0, 4e3) },
        );
    return ((0, j.ensureConnection)(r, { templateId: a }), (0, j.stageModelSettings)(r, l ?? N.A4), r);
}
async function y(e) {
    let { start: t, ...s } = e,
        n = await b(s);
    return (await t(n), n);
}
var w = s(381991),
    C = s(708679),
    A = s(567630),
    E = s(809526),
    S = s(105292);
class R extends Error {}
var I = s(705427),
    P = s(120234),
    k = s(398773),
    L = s(735769),
    O = s(101766);
(s(976860), s(652215), s(746080));
var _ = s(506774);
let U = "ConjureProjectsPanelOpen";
var T = s(89310),
    M = s(17928),
    F = s(821609),
    D = s(661531),
    z = s(775602),
    G = s(486020),
    q = s(687966),
    H = s(323384),
    W = s(632015),
    B = s(231483),
    J = s(430392);
let $ = {
        flappy: "/assets/b43659b526f2e936.svg",
        "raid-calendar": "/assets/1d701ea289cc99e6.svg",
        "aram-widget": "/assets/05c0d07952b2d93f.svg",
        trivia: "/assets/5813258afff68797.svg",
        "spoilers-automod": "/assets/54b5cda688395473.svg",
        "movie-night": "/assets/fcb9220c49b6460a.svg",
        "welcome-bot": "/assets/56e489e9c5907add.svg",
    },
    K = { games: q.GameControllerIcon, apps: H.k, profile_widget: W.f, automod: B.ShieldIcon, chat_bot: J.RobotIcon };
var X = s(621466);
let Y = "data-conjure-carousel-card";
var Q = s(19493);
let Z = l.memo(function (e) {
        let { inspiration: t, onCopyPrompt: s } = e,
            l = K[t.category];
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
                                    children: (0, n.jsx)(F.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: S.intl.string(E.default["6CQjTy"]),
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
                                    children: (0, n.jsx)(l, { size: "md", color: D.A.colors.ICON_STRONG }),
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
                                                        return S.intl.string(E.default["JU01/4"]);
                                                    case "apps":
                                                        return S.intl.string(E.default["bvcT/Q"]);
                                                    case "profile_widget":
                                                        return S.intl.string(E.default.GUb2zA);
                                                    case "automod":
                                                        return S.intl.string(E.default["+EKk4D"]);
                                                    case "chat_bot":
                                                        return S.intl.string(E.default.KBHZfO);
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
    V = l.memo(function (e) {
        var t;
        let { inspirations: s, onCopyPrompt: a } = e,
            r = (0, M.bG)([z.Ay], () => z.Ay.useReducedMotion),
            i = l.useRef(null),
            o = l.useRef(null);
        return (
            (t = !r),
            l.useEffect(() => {
                let e = i.current,
                    s = o.current;
                if (null == e || null == s) return;
                let n = [],
                    l = [],
                    a = 1,
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
                    if (null == e || null == s) return;
                    l = (n = Array.from(s.querySelectorAll(`[${Y}]`))).map((e) => e.offsetLeft + e.offsetWidth / 2);
                    let i = (a = n.length > 1 ? Math.abs(n[1].offsetLeft - n[0].offsetLeft) : 1) * n.length;
                    ((r = t && i >= e.clientWidth + 2 * a ? i : 0),
                        (c = "rtl" === getComputedStyle(e).direction ? -1 : 1));
                }
                function j() {
                    if (null == e) return;
                    let t = e.scrollLeft + e.clientWidth / 2;
                    n.forEach((e, s) => {
                        var n, i;
                        let o,
                            d,
                            m = l[s] - t;
                        r > 0 && (m = ((((m - u * c + (n = r) / 2) % n) + n) % n) - n / 2);
                        let { angleDeg: f, dropPx: h } =
                            ((i = m / a),
                            (d =
                                (a / ((4 * Math.PI) / 180)) *
                                (1 - Math.cos(((o = Math.max(-12, Math.min(12, 4 * i))) * Math.PI) / 180))),
                            { angleDeg: o, dropPx: d });
                        (e.style.setProperty("--custom-conjure-home-carousel-shift", `${t + m - l[s]}px`),
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
                let S = new ResizeObserver(() => {
                    (p(), j());
                });
                (S.observe(e), S.observe(s));
                let R = new IntersectionObserver((e) => {
                    let [t] = e;
                    ((g = t.isIntersecting), N());
                });
                return (
                    R.observe(e),
                    e.addEventListener("scroll", j, { passive: !0 }),
                    e.addEventListener("pointerenter", b),
                    e.addEventListener("pointerleave", y),
                    e.addEventListener("focusin", w),
                    e.addEventListener("focusout", C),
                    window.addEventListener("focus", A),
                    window.addEventListener("blur", E),
                    () => {
                        (cancelAnimationFrame(d),
                            S.disconnect(),
                            R.disconnect(),
                            e.removeEventListener("scroll", j),
                            e.removeEventListener("pointerenter", b),
                            e.removeEventListener("pointerleave", y),
                            e.removeEventListener("focusin", w),
                            e.removeEventListener("focusout", C),
                            window.removeEventListener("focus", A),
                            window.removeEventListener("blur", E));
                    }
                );
            }, [i, o, t]),
            (0, n.jsx)("section", {
                ref: i,
                className: r ? Q.vV : Q.Dk,
                "aria-label": S.intl.string(E.default.Qc4S39),
                children: (0, n.jsx)("ul", {
                    ref: o,
                    className: Q.u4,
                    children: s.map((e) => (0, n.jsx)(Z, { inspiration: e, onCopyPrompt: a }, e.id)),
                }),
            })
        );
    });
var ee = s(289873),
    et = s(441935),
    es = s(939249),
    en = s(847374),
    el = s(5127);
function ea(e) {
    let { onClick: t } = e;
    return (0, n.jsxs)(es.D, {
        className: r()(el.ap, el.jP),
        onClick: t,
        children: [
            (0, n.jsx)("span", { className: el.DW, children: (0, n.jsx)(en.a, { size: "sm", color: "currentColor" }) }),
            (0, n.jsx)(u.E, { variant: "text-md/medium", color: "none", children: S.intl.string(E.default.Im1k9X) }),
        ],
    });
}
var er = s(260498),
    ei = s(741907),
    eo = s(602991),
    ec = s(186340),
    eu = s(919485),
    ed = s(588359),
    em = s(638693);
function ef(e) {
    let { title: t, projects: s, onSelect: a, renderProjectActions: r, onProjectContextMenu: i } = e,
        {
            visibleItems: o,
            listRef: c,
            showMore: u,
        } = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
                [s, n] = l.useState(8),
                a = Math.max(s, 8 * Math.ceil((t + 1) / 8)),
                r = l.useRef(null),
                i = l.useRef(null);
            return (l.useLayoutEffect(() => {
                if (null == i.current) return;
                let e = r.current?.children[i.current]?.querySelector('[role="button"], button');
                ((i.current = null), e?.focus());
            }, [a]),
            a >= e.length)
                ? { visibleItems: e, listRef: r, showMore: null }
                : {
                      visibleItems: e.slice(0, a),
                      listRef: r,
                      showMore: () => {
                          let t = a + 8;
                          (t >= e.length && (i.current = a), n(t));
                      },
                  };
        })(s);
    return (0, n.jsxs)(eu.A, {
        title: t,
        className: em.uW,
        children: [
            (0, n.jsx)(ec.A, {
                listRef: c,
                projects: o,
                onSelect: a,
                renderProjectActions: r,
                onProjectContextMenu: i,
            }),
            null != u ? (0, n.jsx)(ea, { onClick: u }) : null,
        ],
    });
}
function eh(e) {
    let t,
        { guildId: s, archiveImport: a } = e,
        {
            mine: r,
            shared: i,
            fetchState: d,
        } = ((t = (0, ei.U)(
            () => er.Ay.getOwnedProjects().filter((e) => e.guild_id === s || e.preview_guild_id === s),
            [s],
        )),
        {
            mine: t,
            shared: (0, ei.U)(() => er.Ay.getSharedProjects(s), [s]),
            fetchState: (0, M.bG)([er.Ay], () => er.Ay.getGuildProjectsFetchState(s), [s]),
        }),
        { importArchive: m } = a,
        f = (0, h.yN)(l.useCallback((e) => m(e, "guild"), [m])),
        x = l.useCallback((e) => (0, w.Ay)(e.id, "home"), []),
        g = l.useCallback((e) => (0, n.jsx)(eo.S, { project: e, guildId: s }), [s]),
        p = l.useCallback((e, t) => (0, eo.V)(e, t, s), [s]),
        j = S.intl.string(E.default.BMn2lY),
        N = r.length > 0 || i.length > 0;
    return (0, n.jsxs)("aside", {
        className: em.pz,
        "aria-label": j,
        children: [
            (0, n.jsxs)("div", {
                className: em.wx,
                children: [
                    (0, n.jsx)(c.D, { variant: "heading-md/semibold", color: "text-strong", children: j }),
                    (0, n.jsx)(et.A, { importing: a.importing, onClick: f.open }),
                    f.input,
                ],
            }),
            (0, n.jsxs)(o.Ip, {
                className: em.XG,
                children: [
                    r.length > 0
                        ? (0, n.jsx)(
                              ef,
                              {
                                  title: S.intl.string(E.default["8LfMqp"]),
                                  projects: r,
                                  onSelect: x,
                                  renderProjectActions: g,
                                  onProjectContextMenu: p,
                              },
                              `${s}-mine`,
                          )
                        : null,
                    i.length > 0
                        ? (0, n.jsx)(
                              ef,
                              {
                                  title: S.intl.string(E.default.YHDMK6),
                                  projects: i,
                                  onSelect: x,
                                  renderProjectActions: g,
                                  onProjectContextMenu: p,
                              },
                              `${s}-shared`,
                          )
                        : null,
                    N || "error" !== d
                        ? N || "success" === d
                            ? null
                            : (0, n.jsx)("div", { className: em.E8, children: (0, n.jsx)(ee.y, {}) })
                        : (0, n.jsxs)("div", {
                              className: em.E8,
                              children: [
                                  (0, n.jsx)(u.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: S.intl.string(E.default.DJAPMO),
                                  }),
                                  (0, n.jsx)(F.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: S.intl.string(E.default["WFJ/vb"]),
                                      onClick: () => (0, v.listProjects)(s),
                                  }),
                              ],
                          }),
                ],
            }),
            N || "success" !== d ? null : (0, n.jsx)(ed.A, {}),
        ],
    });
}
var ex = s(559106),
    eg = s(783977),
    ep = s(559647),
    ej = s(531685),
    ev = s(957071),
    eN = s(34595),
    eb = s(587157),
    ey = s(200160),
    ew = s(465410);
function eC(e) {
    let { prompts: t, paused: s } = e,
        { index: a, length: r } = (function (e, t) {
            let [s, n] = l.useState(() =>
                    t ? { index: 0, length: e[0].length, phase: "holding" } : { index: 0, length: 0, phase: "typing" },
                ),
                [a, r] = l.useState(t);
            t !== a && (r(t), t && n((t) => ({ ...t, length: e[t.index].length, phase: "holding" })));
            let i = l.useRef(s.length);
            l.useLayoutEffect(() => {
                i.current = s.length;
            });
            let { index: o, phase: c } = s;
            return (
                l.useEffect(() => {
                    if (t) return;
                    let s = e[o].length;
                    if ("holding" === c) {
                        let e = window.setTimeout(() => n((e) => ({ ...e, phase: "deleting" })), 1400);
                        return () => window.clearTimeout(e);
                    }
                    let l = "typing" === c,
                        a = i.current,
                        r = performance.now(),
                        u = a,
                        d = 0,
                        m = 0;
                    return (
                        (d = requestAnimationFrame(function t(i) {
                            let c = Math.floor((i - r) / (l ? 14 : 4)),
                                f = l ? Math.min(s, a + c) : Math.max(0, a - c);
                            (f !== u && ((u = f), n((e) => ({ ...e, length: f }))),
                                l && f === s
                                    ? n((e) => ({ ...e, length: f, phase: "holding" }))
                                    : l || 0 !== f
                                      ? (d = requestAnimationFrame(t))
                                      : (m = window.setTimeout(
                                            () => n({ index: (o + 1) % e.length, length: 0, phase: "typing" }),
                                            250,
                                        )));
                        })),
                        () => {
                            (cancelAnimationFrame(d), window.clearTimeout(m));
                        }
                    );
                }, [e, t, o, c]),
                s
            );
        })(t, s);
    return (0, n.jsx)(u.E, {
        variant: "text-md/normal",
        color: "text-muted",
        className: ey.RC,
        children: t[a].slice(0, r),
    });
}
function eA(e) {
    let { prompts: t, paused: s } = e,
        a = (function (e, t) {
            let [s, n] = l.useState(0);
            return (
                l.useEffect(() => {
                    if (t || e < 2) return;
                    let s = window.setInterval(() => n((t) => (t + 1) % e), 2e3);
                    return () => window.clearInterval(s);
                }, [e, 2e3, t]),
                s
            );
        })(t.length, s);
    return (0, n.jsx)(u.E, { variant: "text-md/normal", color: "text-muted", className: ey.RC, children: t[a] });
}
function eE(e) {
    let { boxFocused: t } = e,
        s = l.useMemo(
            () => [
                S.intl.string(E.default.J2o8Ae),
                S.intl.string(E.default["wn+Bzd"]),
                S.intl.string(E.default["6DCVy3"]),
                S.intl.string(E.default.iRbnRD),
                S.intl.string(E.default["p/zqml"]),
            ],
            [],
        ),
        a = (0, M.bG)([z.Ay], () => z.Ay.useReducedMotion),
        r = (0, M.bG)([ej.A], () => ej.A.isFocused()),
        i = t || !r;
    return (0, n.jsx)("div", {
        className: ey.qf,
        "aria-hidden": !0,
        children: a ? (0, n.jsx)(eA, { prompts: s, paused: i }) : (0, n.jsx)(eC, { prompts: s, paused: i }),
    });
}
function eS(e) {
    let {
            idea: t,
            inputRef: s,
            onIdeaChange: a,
            onSubmit: i,
            submitting: o,
            submitDisabled: c,
            error: d,
            modelSettings: m,
            onModelSettingsChange: f,
            attachments: h,
            onImport: x,
        } = e,
        [g, p] = l.useState(!1),
        j = l.useRef(null),
        v = l.useId(),
        b = "" !== t,
        { addFiles: y, pasteFiles: w, removeAttachment: C } = h;
    l.useLayoutEffect(() => {
        let e = s.current;
        null != e &&
            (e.scrollHeight <= e.clientHeight && (e.style.height = "auto"), (e.style.height = `${e.scrollHeight}px`));
    }, [t, s]);
    let A = l.useCallback(
        (e) => {
            "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), c || i());
        },
        [c, i],
    );
    return (0, n.jsxs)("div", {
        className: ey.kL,
        children: [
            (0, n.jsxs)("div", {
                ref: j,
                className: r()(ey.yk, { [ey.Sl]: null != d }),
                children: [
                    (0, n.jsxs)(u.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        className: ey.Ox,
                        children: [
                            (0, n.jsx)(ex.vN, {
                                ringTarget: j,
                                ringClassName: ey.Rg,
                                children: (0, n.jsx)("textarea", {
                                    ref: s,
                                    className: r()(ey.hF, ew.yL),
                                    rows: 3,
                                    value: t,
                                    "aria-label": S.intl.string(E.default.cwrS1O),
                                    "aria-invalid": null != d,
                                    "aria-describedby": null != d ? v : void 0,
                                    onChange: (e) => a(e.currentTarget.value),
                                    onKeyDown: A,
                                    onPaste: (e) => w(e),
                                    onFocus: () => p(!0),
                                    onBlur: () => p(!1),
                                }),
                            }),
                            b ? null : (0, n.jsx)(eE, { boxFocused: g }),
                        ],
                    }),
                    h.attachments.length > 0
                        ? (0, n.jsx)("div", {
                              className: ey.ZO,
                              children: h.attachments.map((e) => {
                                  let { draft: t } = e;
                                  return (0, n.jsx)(eN.Nl, { draft: t, onRemove: C }, t.localId);
                              }),
                          })
                        : null,
                    (0, n.jsxs)("div", {
                        className: ey.KE,
                        children: [
                            (0, n.jsx)(ev.A, {
                                navId: "conjure-home-attach",
                                disabled: o,
                                buttonClassName: ey.gb,
                                iconClassName: ey.Xv,
                                onAddFiles: y,
                                onImport: x,
                            }),
                            (0, n.jsxs)("div", {
                                className: ey.Rc,
                                children: [
                                    (0, n.jsx)(eb.A, {
                                        settings: m ?? N.A4,
                                        tiers: N.lO,
                                        choices: (0, N.Pu)(),
                                        disabled: o,
                                        onChange: f,
                                        className: ey.gb,
                                        icon: (0, n.jsx)(eg.R, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, n.jsx)(F.$, {
                                        variant: "primary",
                                        size: "sm",
                                        icon: ep.SendMessageIcon,
                                        text: S.intl.string(E.default.bNtzxp),
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
var eR = s(628284),
    eI = s(369606),
    eP = s(926268),
    ek = s(406810),
    eL = s(707554);
let eO = [
    { id: "apps", title: E.default["bvcT/Q"], description: E.default.ArcJqa },
    { id: "games", title: E.default["JU01/4"], description: E.default.FXwLsv },
    { id: "bots", title: E.default.KBHZfO, description: E.default.qNmKhG },
    { id: "profile-widgets", title: E.default.GUb2zA, description: E.default["v+F6qW"] },
    { id: "overlay-widgets", title: E.default.uVOH1p, description: E.default.zm7y9u },
    { id: "automod", title: E.default["+EKk4D"], description: E.default.fpXK3z },
];
var e_ = s(651346);
function eU(e) {
    let { className: t } = e;
    return (0, n.jsx)("span", { className: r()(e_.n8, t) });
}
let eT = {
    apps: function () {
        return (0, n.jsxs)("div", {
            className: e_.x,
            children: [
                (0, n.jsxs)("div", {
                    className: e_.My,
                    children: [
                        (0, n.jsx)("span", { className: e_._w }),
                        (0, n.jsx)("span", { className: e_._w }),
                        (0, n.jsx)("span", { className: e_._w }),
                    ],
                }),
                (0, n.jsx)(eU, { className: e_.Lm }),
                (0, n.jsx)("div", {
                    className: e_.Oh,
                    children: [0, 1, 2].map((e) =>
                        (0, n.jsxs)(
                            "div",
                            {
                                className: e_.ZW,
                                children: [
                                    (0, n.jsx)("span", { className: e_.NU }),
                                    0 === e
                                        ? (0, n.jsx)(eR.y, {
                                              size: "xs",
                                              color: D.A.colors.ICON_BRAND,
                                              className: e_._6,
                                          })
                                        : null,
                                    (0, n.jsx)(eU, { className: e_.Eg }),
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
            className: r()(e_.x, e_.jG),
            children: [
                (0, n.jsx)("span", { className: r()(e_.gg, e_.K1) }),
                (0, n.jsx)("span", { className: r()(e_.gg, e_.W2) }),
                (0, n.jsx)("span", { className: r()(e_.Fs, e_.A$) }),
                (0, n.jsx)("span", { className: r()(e_.Fs, e_.eP) }),
                (0, n.jsx)("span", { className: r()(e_.Fs, e_.kc) }),
                (0, n.jsx)("span", { className: r()(e_.Fs, e_.OE) }),
                (0, n.jsx)("span", { className: e_.OC }),
                (0, n.jsxs)("div", {
                    className: e_.si,
                    children: [
                        (0, n.jsx)(eI.TrophyIcon, { size: "xxs", color: D.A.colors.ICON_FEEDBACK_WARNING }),
                        (0, n.jsx)(u.E, { variant: "text-xs/bold", color: "none", className: e_.o9, children: 128 }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: e_.KQ,
                    children: [
                        (0, n.jsx)(eP.HeartIcon, { size: "xxs", color: D.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, n.jsx)(eP.HeartIcon, { size: "xxs", color: D.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, n.jsx)(eP.HeartIcon, { size: "xxs", color: D.A.colors.ICON_OVERLAY_LIGHT }),
                    ],
                }),
            ],
        });
    },
    bots: function () {
        return (0, n.jsxs)("div", {
            className: e_.x,
            children: [
                (0, n.jsxs)("div", {
                    className: e_.$y,
                    children: [(0, n.jsx)("span", { className: e_.m$ }), (0, n.jsx)(eU, { className: e_.Md })],
                }),
                (0, n.jsxs)("div", {
                    className: e_.iU,
                    children: [
                        (0, n.jsx)("span", {
                            className: r()(e_.my, e_.FY),
                            children: (0, n.jsx)(J.RobotIcon, { size: "xs", color: D.A.colors.ICON_OVERLAY_LIGHT }),
                        }),
                        (0, n.jsxs)("div", {
                            className: e_.OS,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: e_.f9,
                                    children: [
                                        (0, n.jsx)(eU, { className: e_.iE }),
                                        (0, n.jsx)(u.E, {
                                            variant: "text-xs/bold",
                                            color: "none",
                                            className: e_.AO,
                                            children: S.intl.string(E.default.VlgiLf),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(eU, { className: e_.xs }),
                                (0, n.jsx)(eU, { className: e_.Md }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    "profile-widgets": function () {
        return (0, n.jsxs)("div", {
            className: r()(e_.x, e_.ME),
            children: [
                (0, n.jsx)("span", { className: e_.CK }),
                (0, n.jsxs)("div", {
                    className: e_.kI,
                    children: [
                        (0, n.jsx)("span", { className: r()(e_.my, e_.jU) }),
                        (0, n.jsx)(eU, { className: e_.iE }),
                        (0, n.jsxs)("div", {
                            className: e_.Wy,
                            children: [
                                (0, n.jsx)("div", {
                                    className: e_.M1,
                                    children: [0, 1].map((e) =>
                                        (0, n.jsxs)(
                                            "div",
                                            {
                                                className: e_.dJ,
                                                children: [
                                                    (0, n.jsx)(eU, { className: e_.cR }),
                                                    (0, n.jsx)(eU, { className: e_.Zh }),
                                                ],
                                            },
                                            e,
                                        ),
                                    ),
                                }),
                                (0, n.jsx)("div", {
                                    className: e_.bW,
                                    children: [0, 1, 2, 3, 4, 5].map((e) =>
                                        (0, n.jsx)("span", { className: e_.QR }, e),
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
            className: e_.JH,
            children: [
                (0, n.jsx)("span", { className: e_.rx }),
                (0, n.jsx)("span", { className: e_.ny }),
                (0, n.jsx)("span", { className: e_.ZH }),
                (0, n.jsx)("div", {
                    className: e_.$Y,
                    children: [0, 1, 2].map((e) =>
                        (0, n.jsxs)(
                            "div",
                            {
                                className: e_.fn,
                                children: [
                                    (0, n.jsx)("span", { className: r()(e_._h, { [e_.zY]: 0 === e }) }),
                                    (0, n.jsx)(eU, { className: e_.Av }),
                                ],
                            },
                            e,
                        ),
                    ),
                }),
                (0, n.jsxs)("div", {
                    className: e_.Y5,
                    children: [
                        (0, n.jsx)(ek.ClockIcon, { size: "xxs", color: D.A.colors.ICON_OVERLAY_LIGHT }),
                        (0, n.jsx)(eU, { className: e_.jB }),
                    ],
                }),
            ],
        });
    },
    automod: function () {
        return (0, n.jsxs)("div", {
            className: e_.x,
            children: [
                (0, n.jsxs)("div", {
                    className: e_.iU,
                    children: [
                        (0, n.jsx)("span", { className: e_.my }),
                        (0, n.jsxs)("div", {
                            className: e_.OS,
                            children: [
                                (0, n.jsx)(eU, { className: e_.iE }),
                                (0, n.jsx)(eU, { className: r()(e_.xs, e_.pc) }),
                                (0, n.jsx)(eU, { className: r()(e_.Md, e_.pc) }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: e_.jC,
                    children: [
                        (0, n.jsx)(B.ShieldIcon, { size: "sm", color: D.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, n.jsxs)("div", {
                            className: e_.qQ,
                            children: [
                                (0, n.jsx)(eU, { className: r()(e_.Md, e_.k8) }),
                                (0, n.jsx)(eU, { className: r()(e_.nq, e_.k8) }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
};
function eM(e) {
    let { id: t } = e,
        s = eT[t];
    return (0, n.jsx)(s, {});
}
let eF = l.memo(function () {
    let e = l.useId();
    return (0, n.jsx)("section", {
        className: e_.GG,
        "aria-labelledby": e,
        children: (0, n.jsx)(eL.F, {
            component: (0, n.jsx)(c.D, {
                id: e,
                variant: "heading-lg/medium",
                children: S.intl.string(E.default.IiQEVd),
            }),
            children: (0, n.jsx)("ul", {
                className: e_.Vg,
                children: eO.map((e) => {
                    let { id: t, title: s, description: l } = e;
                    return (0, n.jsxs)(
                        "li",
                        {
                            className: e_.Vs,
                            children: [
                                (0, n.jsx)("div", {
                                    className: e_.Tn,
                                    "aria-hidden": !0,
                                    children: (0, n.jsx)(eM, { id: t }),
                                }),
                                (0, n.jsxs)("div", {
                                    className: e_.pG,
                                    children: [
                                        (0, n.jsx)(c.D, {
                                            variant: "text-md/semibold",
                                            color: "text-strong",
                                            children: S.intl.string(s),
                                        }),
                                        (0, n.jsx)(u.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: S.intl.string(l),
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
var eD = s(666476),
    ez = s(287111),
    eG = s(177676);
let eq = 1;
function eH(e) {
    let t = (0, eG.Ft)(e),
        s = { localId: eq++, name: e.name, contentType: t };
    if ("too-large" === (0, eG.R9)(e, t))
        return { file: e, draft: { ...s, status: "error", errorText: (0, ez.iW)(t) } };
    let n = eD.XB.has(t) ? URL.createObjectURL(e) : void 0;
    return { file: e, draft: { ...s, status: "ready", previewUrl: n } };
}
function eW(e) {
    null != e.draft.previewUrl && URL.revokeObjectURL(e.draft.previewUrl);
}
async function eB(e, t) {
    if ("fits" === (0, eG.R9)(t, (0, eG.Ft)(t))) return (0, g.vX)(e, t);
    let s = await (0, eG.th)(t);
    if (null == s) throw Error("attachment over its size limit");
    return (0, g.vX)(e, s);
}
var eJ = s(698638),
    e$ = s(606128),
    eK = s(260024);
class eX extends Error {}
function eY(e) {
    let { guildId: t, onConjurePage: s = !1 } = e,
        [a, j] = l.useState(() => L.A.getHomePrompt());
    (0, P.N$)(a);
    let N = (0, O.A)(s ? "home" : null),
        [b, M] = l.useState(!1),
        [F, D] = l.useState(null),
        [z, G] = l.useState(null),
        [q, H] = l.useState(() => _.w.get(U) ?? null ?? !0),
        W = l.useRef(null),
        B = l.useMemo(
            () =>
                [
                    {
                        id: "flappy",
                        category: "games",
                        shortPrompt: S.intl.string(E.default.gtX7tS),
                        fullPrompt: S.intl.string(E.default["Sfa50+"]),
                        name: S.intl.string(E.default.Tbag5k),
                        authorAvatarSeed: "1",
                    },
                    {
                        id: "raid-calendar",
                        category: "apps",
                        shortPrompt: S.intl.string(E.default.GNGB59),
                        fullPrompt: S.intl.string(E.default.lxwxNm),
                        name: S.intl.string(E.default["rzB/bE"]),
                        authorAvatarSeed: "2",
                    },
                    {
                        id: "aram-widget",
                        category: "profile_widget",
                        shortPrompt: S.intl.string(E.default.RzNoHJ),
                        fullPrompt: S.intl.string(E.default.VfUFEt),
                        name: S.intl.string(E.default.RYGHMF),
                        authorAvatarSeed: "3",
                    },
                    {
                        id: "trivia",
                        category: "games",
                        shortPrompt: S.intl.string(E.default.TGN39X),
                        fullPrompt: S.intl.string(E.default.gilNLG),
                        name: S.intl.string(E.default.vvwBlz),
                        authorAvatarSeed: "4",
                    },
                    {
                        id: "spoilers-automod",
                        category: "automod",
                        shortPrompt: S.intl.string(E.default.Gw756q),
                        fullPrompt: S.intl.string(E.default["d/WMHR"]),
                        name: S.intl.string(E.default["v9+fAY"]),
                        authorAvatarSeed: "5",
                    },
                    {
                        id: "movie-night",
                        category: "apps",
                        shortPrompt: S.intl.string(E.default.u4UWGH),
                        fullPrompt: S.intl.string(E.default.ofBNNy),
                        name: S.intl.string(E.default.DQQdZL),
                        authorAvatarSeed: "6",
                    },
                    {
                        id: "welcome-bot",
                        category: "chat_bot",
                        shortPrompt: S.intl.string(E.default["T3+H3J"]),
                        fullPrompt: S.intl.string(E.default.ryeSuC),
                        name: S.intl.string(E.default["3deXbx"]),
                        authorAvatarSeed: "7",
                    },
                ].map((e) => ({ ...e, image: $[e.id] })),
            [],
        ),
        J = "user" === (0, m.o)().get("target") || s,
        K = (function () {
            let [e, t] = l.useState([]),
                s = l.useRef(e);
            (l.useLayoutEffect(() => {
                s.current = e;
            }),
                l.useEffect(() => () => s.current.forEach(eW), []));
            let n = l.useCallback((e) => {
                    if (0 === e.length) return;
                    let n = e.map(eH);
                    ((s.current = [...s.current, ...n]), t(s.current));
                }, []),
                a = (0, eG.sm)(n),
                r = l.useCallback((e) => {
                    let n = s.current.find((t) => t.draft.localId === e);
                    null != n && (eW(n), (s.current = s.current.filter((e) => e !== n)), t(s.current));
                }, []),
                i = l.useCallback(() => {
                    (s.current.forEach(eW), (s.current = []), t(s.current));
                }, []),
                o = l.useMemo(
                    () =>
                        (function (e) {
                            if (e.length <= eD.lN) return e;
                            let t = (0, eG.XV)();
                            return e.map((e, s) =>
                                s < eD.lN || "error" === e.draft.status
                                    ? e
                                    : { ...e, draft: { ...e.draft, status: "error", errorText: t } },
                            );
                        })(e),
                    [e],
                );
            return {
                attachments: o,
                addFiles: n,
                pasteFiles: a,
                removeAttachment: r,
                clear: i,
                hasErrors: o.some((e) => "error" === e.draft.status),
            };
        })(),
        { attachments: X, addFiles: Y, clear: Q } = K,
        Z = (function (e) {
            let { guildId: t, modelSettings: s } = e,
                [n, a] = l.useState(!1),
                r = l.useRef(!1);
            return {
                importing: n,
                importArchive: l.useCallback(
                    async (e, n) => {
                        if (r.current) return;
                        let l = (0, h.vt)(e);
                        if (null != l) return void (0, x.P0)({ text: l, variant: "critical" });
                        ((r.current = !0), a(!0));
                        try {
                            let l = (await (0, A.A)(e, t)) ?? n,
                                a = await y({
                                    guildId: t,
                                    installScope: l,
                                    modelSettings: s,
                                    start: async (t) => {
                                        try {
                                            let s = await (0, g.vX)(t, e);
                                            (0, C.P6)(t, S.intl.string(E.default["LUc7/5"]), [s]);
                                        } catch {
                                            try {
                                                await (0, v.xx)(t);
                                            } catch {}
                                            throw new R();
                                        }
                                    },
                                });
                            (0, w.Ay)(a, "create");
                        } catch (e) {
                            (0, x.P0)({
                                text: e instanceof R ? S.intl.string(E.default["Q+l4Hv"]) : (0, p.mG)(e),
                                variant: "critical",
                            });
                        } finally {
                            ((r.current = !1), a(!1));
                        }
                    },
                    [t, s],
                ),
            };
        })({ guildId: t, modelSettings: z }),
        { importArchive: ee } = Z,
        et = b || Z.importing,
        es = "" !== a.trim() || X.length > 0,
        en = et || !es || K.hasErrors,
        el = (0, h.yN)(l.useCallback((e) => ee(e, J ? "user" : null), [ee, J])),
        ea = l.useCallback((e) => Y(Array.from(e)), [Y]);
    (0, T.p)(W);
    let er = l.useCallback((e) => {
            (j(e), (0, k.fZ)(e), D(null));
        }, []),
        ei = l.useCallback(
            (e) => {
                er(e);
                let t = W.current;
                null != t && (t.focus(), t.setSelectionRange(e.length, e.length));
            },
            [er],
        ),
        eo = l.useRef(!1),
        ec = l.useCallback(async () => {
            let e = a.trim();
            if (("" !== e || 0 !== X.length) && !eo.current) {
                ((eo.current = !0), M(!0), D(null));
                try {
                    let n = await y({
                        guildId: t,
                        installScope: null,
                        prompt: e,
                        modelSettings: z,
                        start: async (n) => {
                            let l = [];
                            if (X.length > 0)
                                try {
                                    l = await Promise.all(
                                        X.map((e) => {
                                            let { file: t } = e;
                                            return eB(n, t);
                                        }),
                                    );
                                } catch {
                                    throw (await (0, v.xx)(n).catch(() => void 0), new eX());
                                }
                            ((0, C.P6)(n, e, l, s ? void 0 : t), Q());
                        },
                    });
                    (j(""), (0, k.fZ)(""), (eo.current = !1), M(!1), (0, w.Ay)(n, "create"));
                } catch (e) {
                    (D(e instanceof eX ? S.intl.string(E.default["903H7m"]) : (0, p.mG)(e)), (eo.current = !1), M(!1));
                }
            }
        }, [a, z, t, s, X, Q]),
        eu = l.useCallback((e) => {
            (_.w.set(U, e), H(e));
        }, []),
        ed = S.intl.string(q ? E.default.kar7jh : E.default.WSc5Y2);
    return (0, n.jsx)("div", {
        className: r()(eK.MY, e$.T),
        children: (0, n.jsxs)("div", {
            className: eK.Zp,
            children: [
                (0, n.jsxs)("main", {
                    className: eK.iW,
                    children: [
                        et
                            ? null
                            : (0, n.jsx)(d.A, {
                                  title: S.intl.string(E.default.gy7byi),
                                  description: S.intl.string(E.default["dkv/WO"]),
                                  icons: eJ.ir,
                                  onDrop: ea,
                              }),
                        s
                            ? null
                            : (0, n.jsx)(I.A, {
                                  title: S.intl.string(E.default.uk6jhJ),
                                  transparent: !0,
                                  actions: (0, n.jsx)(f.A.Icon, {
                                      icon: i.Z,
                                      color: "var(--icon-strong)",
                                      className: eK.FW,
                                      tooltip: ed,
                                      "aria-label": ed,
                                      selected: q,
                                      onClick: () => eu(!q),
                                  }),
                              }),
                        (0, n.jsx)(o.Ip, {
                            ref: N,
                            className: eK.XG,
                            children: (0, n.jsxs)("div", {
                                className: eK.Qs,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: r()(eK.Lv, { [eK.$O]: s }),
                                        children: [
                                            (0, n.jsxs)("div", {
                                                className: eK.ZK,
                                                children: [
                                                    (0, n.jsx)(c.D, {
                                                        variant: "display-lg",
                                                        color: "text-strong",
                                                        className: eK.DD,
                                                        children: S.intl.string(E.default.doYpEy),
                                                    }),
                                                    (0, n.jsx)(u.E, {
                                                        variant: "text-md/normal",
                                                        color: "text-strong",
                                                        className: eK.VA,
                                                        children: S.intl.string(E.default.BH58fD),
                                                    }),
                                                ],
                                            }),
                                            (0, n.jsxs)("div", {
                                                className: eK.ZK,
                                                children: [
                                                    (0, n.jsx)(eS, {
                                                        idea: a,
                                                        inputRef: W,
                                                        onIdeaChange: er,
                                                        onSubmit: ec,
                                                        submitting: et,
                                                        submitDisabled: en,
                                                        error: F,
                                                        modelSettings: z,
                                                        onModelSettingsChange: G,
                                                        attachments: K,
                                                        onImport: el.open,
                                                    }),
                                                    el.input,
                                                    (0, n.jsx)(u.E, {
                                                        variant: "text-xxs/normal",
                                                        color: "text-muted",
                                                        children: S.intl.string(E.default.hebdhA),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)(V, { inspirations: B, onCopyPrompt: ei }),
                                    (0, n.jsx)(eF, {}),
                                ],
                            }),
                        }),
                    ],
                }),
                q && !s ? (0, n.jsx)(eh, { guildId: t, archiveImport: Z }) : null,
            ],
        }),
    });
}
