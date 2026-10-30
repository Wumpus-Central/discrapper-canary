s.d(t, { A: () => eY });
var n = s(477900),
    l = s(582128),
    r = s(503698),
    a = s.n(r),
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
    let { guildId: t, installScope: s, prompt: n, modelSettings: l, templateId: r } = e,
        a = await (0, v.gA)(
            null != s
                ? { guild_id: t, install_scope: s }
                : { guild_id: t, auto_install_scope: !0, prompt: (n ?? "").slice(0, 4e3) },
        );
    return ((0, j.ensureConnection)(a, { templateId: r }), (0, j.stageModelSettings)(a, l ?? N.A4), a);
}
async function y(e) {
    let { start: t, ...s } = e,
        n = await b(s);
    return (await t(n), n);
}
var w = s(381991),
    C = s(708679),
    A = s(567630),
    E = s(87501),
    R = s(105292);
class S extends Error {}
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
    V = l.memo(function (e) {
        var t;
        let { inspirations: s, onCopyPrompt: r } = e,
            a = (0, M.bG)([z.Ay], () => z.Ay.useReducedMotion),
            i = l.useRef(null),
            c = l.useRef(null);
        return (
            (t = !a),
            l.useEffect(() => {
                let e = i.current,
                    s = c.current;
                if (null == e || null == s) return;
                let n = [],
                    l = [],
                    r = 1,
                    a = 0,
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
                    l = (n = Array.from(s.querySelectorAll(`[${Y}]`))).map((e) => e.offsetLeft + e.offsetWidth / 2);
                    let i = (r = n.length > 1 ? Math.abs(n[1].offsetLeft - n[0].offsetLeft) : 1) * n.length;
                    ((a = t && i >= e.clientWidth + 2 * r ? i : 0),
                        (o = "rtl" === getComputedStyle(e).direction ? -1 : 1));
                }
                function j() {
                    if (null == e) return;
                    let t = e.scrollLeft + e.clientWidth / 2;
                    n.forEach((e, s) => {
                        var n, i;
                        let c,
                            d,
                            m = l[s] - t;
                        a > 0 && (m = ((((m - u * o + (n = a) / 2) % n) + n) % n) - n / 2);
                        let { angleDeg: f, dropPx: h } =
                            ((i = m / r),
                            (d =
                                (r / ((4 * Math.PI) / 180)) *
                                (1 - Math.cos(((c = Math.max(-12, Math.min(12, 4 * i))) * Math.PI) / 180))),
                            { angleDeg: c, dropPx: d });
                        (e.style.setProperty("--custom-conjure-home-carousel-shift", `${t + m - l[s]}px`),
                            e.style.setProperty("--custom-conjure-home-carousel-angle", `${f}deg`),
                            e.style.setProperty("--custom-conjure-home-carousel-drop", `${h}px`));
                    });
                }
                function v(e) {
                    (null != m && a > 0 && (u = (u + (30 * (e - m)) / 1e3) % a),
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
            }, [i, c, t]),
            (0, n.jsx)("section", {
                ref: i,
                className: a ? Q.vV : Q.Dk,
                "aria-label": R.intl.string(E.default.Qc4S39),
                children: (0, n.jsx)("ul", {
                    ref: c,
                    className: Q.u4,
                    children: s.map((e) => (0, n.jsx)(Z, { inspiration: e, onCopyPrompt: r }, e.id)),
                }),
            })
        );
    });
var ee = s(289873),
    et = s(441935),
    es = s(939249),
    en = s(847374),
    el = s(5127);
function er(e) {
    let { onClick: t } = e;
    return (0, n.jsxs)(es.D, {
        className: a()(el.ap, el.jP),
        onClick: t,
        children: [
            (0, n.jsx)("span", { className: el.DW, children: (0, n.jsx)(en.a, { size: "sm", color: "currentColor" }) }),
            (0, n.jsx)(u.E, { variant: "text-md/medium", color: "none", children: R.intl.string(E.default.Im1k9X) }),
        ],
    });
}
var ea = s(260498),
    ei = s(741907),
    ec = s(380654),
    eo = s(186340),
    eu = s(919485),
    ed = s(588359),
    em = s(638693);
function ef(e) {
    let { title: t, projects: s, onSelect: r, renderProjectActions: a, onProjectContextMenu: i } = e,
        {
            visibleItems: c,
            listRef: o,
            showMore: u,
        } = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
                [s, n] = l.useState(8),
                r = Math.max(s, 8 * Math.ceil((t + 1) / 8)),
                a = l.useRef(null),
                i = l.useRef(null);
            return (l.useLayoutEffect(() => {
                if (null == i.current) return;
                let e = a.current?.children[i.current]?.querySelector('[role="button"], button');
                ((i.current = null), e?.focus());
            }, [r]),
            r >= e.length)
                ? { visibleItems: e, listRef: a, showMore: null }
                : {
                      visibleItems: e.slice(0, r),
                      listRef: a,
                      showMore: () => {
                          let t = r + 8;
                          (t >= e.length && (i.current = r), n(t));
                      },
                  };
        })(s);
    return (0, n.jsxs)(eu.A, {
        title: t,
        className: em.uW,
        children: [
            (0, n.jsx)(eo.A, {
                listRef: o,
                projects: c,
                onSelect: r,
                renderProjectActions: a,
                onProjectContextMenu: i,
            }),
            null != u ? (0, n.jsx)(er, { onClick: u }) : null,
        ],
    });
}
function eh(e) {
    let t,
        { guildId: s, archiveImport: r } = e,
        {
            mine: a,
            shared: i,
            fetchState: d,
        } = ((t = (0, ei.U)(
            () => ea.Ay.getOwnedProjects().filter((e) => e.guild_id === s || e.preview_guild_id === s),
            [s],
        )),
        {
            mine: t,
            shared: (0, ei.U)(() => ea.Ay.getSharedProjects(s), [s]),
            fetchState: (0, M.bG)([ea.Ay], () => ea.Ay.getGuildProjectsFetchState(s), [s]),
        }),
        { importArchive: m } = r,
        f = (0, h.yN)(l.useCallback((e) => m(e, "guild"), [m])),
        x = l.useCallback((e) => (0, w.Ay)(e.id), []),
        g = l.useCallback((e) => (0, n.jsx)(ec.S, { project: e, guildId: s }), [s]),
        p = l.useCallback((e, t) => (0, ec.V)(e, t, s), [s]),
        j = R.intl.string(E.default.BMn2lY),
        N = a.length > 0 || i.length > 0;
    return (0, n.jsxs)("aside", {
        className: em.pz,
        "aria-label": j,
        children: [
            (0, n.jsxs)("div", {
                className: em.wx,
                children: [
                    (0, n.jsx)(o.D, { variant: "heading-md/semibold", color: "text-strong", children: j }),
                    (0, n.jsx)(et.A, { importing: r.importing, onClick: f.open }),
                    f.input,
                ],
            }),
            (0, n.jsxs)(c.Ip, {
                className: em.XG,
                children: [
                    a.length > 0
                        ? (0, n.jsx)(
                              ef,
                              {
                                  title: R.intl.string(E.default["8LfMqp"]),
                                  projects: a,
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
                                  title: R.intl.string(E.default.YHDMK6),
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
                                      children: R.intl.string(E.default.DJAPMO),
                                  }),
                                  (0, n.jsx)(F.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: R.intl.string(E.default["WFJ/vb"]),
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
        { index: r, length: a } = (function (e, t) {
            let [s, n] = l.useState(() =>
                    t ? { index: 0, length: e[0].length, phase: "holding" } : { index: 0, length: 0, phase: "typing" },
                ),
                [r, a] = l.useState(t);
            t !== r && (a(t), t && n((t) => ({ ...t, length: e[t.index].length, phase: "holding" })));
            let i = l.useRef(s.length);
            l.useLayoutEffect(() => {
                i.current = s.length;
            });
            let { index: c, phase: o } = s;
            return (
                l.useEffect(() => {
                    if (t) return;
                    let s = e[c].length;
                    if ("holding" === o) {
                        let e = window.setTimeout(() => n((e) => ({ ...e, phase: "deleting" })), 1400);
                        return () => window.clearTimeout(e);
                    }
                    let l = "typing" === o,
                        r = i.current,
                        a = performance.now(),
                        u = r,
                        d = 0,
                        m = 0;
                    return (
                        (d = requestAnimationFrame(function t(i) {
                            let o = Math.floor((i - a) / (l ? 14 : 4)),
                                f = l ? Math.min(s, r + o) : Math.max(0, r - o);
                            (f !== u && ((u = f), n((e) => ({ ...e, length: f }))),
                                l && f === s
                                    ? n((e) => ({ ...e, length: f, phase: "holding" }))
                                    : l || 0 !== f
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
        className: ey.RC,
        children: t[r].slice(0, a),
    });
}
function eA(e) {
    let { prompts: t, paused: s } = e,
        r = (function (e, t) {
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
    return (0, n.jsx)(u.E, { variant: "text-md/normal", color: "text-muted", className: ey.RC, children: t[r] });
}
function eE(e) {
    let { boxFocused: t } = e,
        s = l.useMemo(
            () => [
                R.intl.string(E.default.J2o8Ae),
                R.intl.string(E.default["wn+Bzd"]),
                R.intl.string(E.default["6DCVy3"]),
                R.intl.string(E.default.iRbnRD),
                R.intl.string(E.default["p/zqml"]),
            ],
            [],
        ),
        r = (0, M.bG)([z.Ay], () => z.Ay.useReducedMotion),
        a = (0, M.bG)([ej.A], () => ej.A.isFocused()),
        i = t || !a;
    return (0, n.jsx)("div", {
        className: ey.qf,
        "aria-hidden": !0,
        children: r ? (0, n.jsx)(eA, { prompts: s, paused: i }) : (0, n.jsx)(eC, { prompts: s, paused: i }),
    });
}
function eR(e) {
    let {
            idea: t,
            inputRef: s,
            onIdeaChange: r,
            onSubmit: i,
            submitting: c,
            submitDisabled: o,
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
            "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), o || i());
        },
        [o, i],
    );
    return (0, n.jsxs)("div", {
        className: ey.kL,
        children: [
            (0, n.jsxs)("div", {
                ref: j,
                className: a()(ey.yk, { [ey.Sl]: null != d }),
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
                                    className: a()(ey.hF, ew.yL),
                                    rows: 3,
                                    value: t,
                                    "aria-label": R.intl.string(E.default.cwrS1O),
                                    "aria-invalid": null != d,
                                    "aria-describedby": null != d ? v : void 0,
                                    onChange: (e) => r(e.currentTarget.value),
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
                                disabled: c,
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
                                        disabled: c,
                                        onChange: f,
                                        className: ey.gb,
                                        icon: (0, n.jsx)(eg.R, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, n.jsx)(F.$, {
                                        variant: "primary",
                                        size: "sm",
                                        icon: ep.SendMessageIcon,
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
var eS = s(628284),
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
    return (0, n.jsx)("span", { className: a()(e_.n8, t) });
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
                                        ? (0, n.jsx)(eS.y, {
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
            className: a()(e_.x, e_.jG),
            children: [
                (0, n.jsx)("span", { className: a()(e_.gg, e_.K1) }),
                (0, n.jsx)("span", { className: a()(e_.gg, e_.W2) }),
                (0, n.jsx)("span", { className: a()(e_.Fs, e_.A$) }),
                (0, n.jsx)("span", { className: a()(e_.Fs, e_.eP) }),
                (0, n.jsx)("span", { className: a()(e_.Fs, e_.kc) }),
                (0, n.jsx)("span", { className: a()(e_.Fs, e_.OE) }),
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
                            className: a()(e_.my, e_.FY),
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
                                            children: R.intl.string(E.default.VlgiLf),
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
            className: a()(e_.x, e_.ME),
            children: [
                (0, n.jsx)("span", { className: e_.CK }),
                (0, n.jsxs)("div", {
                    className: e_.kI,
                    children: [
                        (0, n.jsx)("span", { className: a()(e_.my, e_.jU) }),
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
                                    (0, n.jsx)("span", { className: a()(e_._h, { [e_.zY]: 0 === e }) }),
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
                                (0, n.jsx)(eU, { className: a()(e_.xs, e_.pc) }),
                                (0, n.jsx)(eU, { className: a()(e_.Md, e_.pc) }),
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
                                (0, n.jsx)(eU, { className: a()(e_.Md, e_.k8) }),
                                (0, n.jsx)(eU, { className: a()(e_.nq, e_.k8) }),
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
            component: (0, n.jsx)(o.D, {
                id: e,
                variant: "heading-lg/medium",
                children: R.intl.string(E.default.IiQEVd),
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
                                        (0, n.jsx)(o.D, {
                                            variant: "text-md/semibold",
                                            color: "text-strong",
                                            children: R.intl.string(s),
                                        }),
                                        (0, n.jsx)(u.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: R.intl.string(l),
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
        [r, j] = l.useState(() => (s ? L.A.getHomePrompt() : ""));
    (0, P.N$)(r);
    let N = l.useRef(r);
    (l.useLayoutEffect(() => {
        N.current = r;
    }),
        l.useEffect(() => {
            if (s) return () => (0, k.fZ)(N.current);
        }, [s]));
    let b = (0, O.A)(s ? "home" : null),
        [M, F] = l.useState(!1),
        [D, z] = l.useState(null),
        [G, q] = l.useState(null),
        [H, W] = l.useState(() => _.w.get(U) ?? null ?? !0),
        B = l.useRef(null),
        J = l.useMemo(
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
                ].map((e) => ({ ...e, image: $[e.id] })),
            [],
        ),
        K = "user" === (0, m.o)().get("target") || s,
        X = (function () {
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
                r = (0, eG.sm)(n),
                a = l.useCallback((e) => {
                    let n = s.current.find((t) => t.draft.localId === e);
                    null != n && (eW(n), (s.current = s.current.filter((e) => e !== n)), t(s.current));
                }, []),
                i = l.useCallback(() => {
                    (s.current.forEach(eW), (s.current = []), t(s.current));
                }, []),
                c = l.useMemo(
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
                attachments: c,
                addFiles: n,
                pasteFiles: r,
                removeAttachment: a,
                clear: i,
                hasErrors: c.some((e) => "error" === e.draft.status),
            };
        })(),
        { attachments: Y, addFiles: Q, clear: Z } = X,
        ee = (function (e) {
            let { guildId: t, modelSettings: s } = e,
                [n, r] = l.useState(!1),
                a = l.useRef(!1);
            return {
                importing: n,
                importArchive: l.useCallback(
                    async (e, n) => {
                        if (a.current) return;
                        let l = (0, h.vt)(e);
                        if (null != l) return void (0, x.P0)({ text: l, variant: "critical" });
                        ((a.current = !0), r(!0));
                        try {
                            let l = (await (0, A.A)(e, t)) ?? n,
                                r = await y({
                                    guildId: t,
                                    installScope: l,
                                    modelSettings: s,
                                    start: async (t) => {
                                        try {
                                            let s = await (0, g.vX)(t, e);
                                            (0, C.P6)(t, R.intl.string(E.default["LUc7/5"]), [s]);
                                        } catch {
                                            try {
                                                await (0, v.xx)(t);
                                            } catch {}
                                            throw new S();
                                        }
                                    },
                                });
                            (0, w.Ay)(r);
                        } catch (e) {
                            (0, x.P0)({
                                text: e instanceof S ? R.intl.string(E.default["Q+l4Hv"]) : (0, p.mG)(e),
                                variant: "critical",
                            });
                        } finally {
                            ((a.current = !1), r(!1));
                        }
                    },
                    [t, s],
                ),
            };
        })({ guildId: t, modelSettings: G }),
        { importArchive: et } = ee,
        es = M || ee.importing,
        en = "" !== r.trim() || Y.length > 0,
        el = es || !en || X.hasErrors,
        er = (0, h.yN)(l.useCallback((e) => et(e, K ? "user" : null), [et, K])),
        ea = l.useCallback((e) => Q(Array.from(e)), [Q]);
    (0, T.p)(B);
    let ei = l.useCallback((e) => {
            (j(e), z(null));
        }, []),
        ec = l.useCallback(
            (e) => {
                ei(e);
                let t = B.current;
                null != t && (t.focus(), t.setSelectionRange(e.length, e.length));
            },
            [ei],
        ),
        eo = l.useRef(!1),
        eu = l.useCallback(async () => {
            let e = r.trim();
            if (("" !== e || 0 !== Y.length) && !eo.current) {
                ((eo.current = !0), F(!0), z(null));
                try {
                    let n = await y({
                        guildId: t,
                        installScope: null,
                        prompt: e,
                        modelSettings: G,
                        start: async (n) => {
                            let l = [];
                            if (Y.length > 0)
                                try {
                                    l = await Promise.all(
                                        Y.map((e) => {
                                            let { file: t } = e;
                                            return eB(n, t);
                                        }),
                                    );
                                } catch {
                                    throw (await (0, v.xx)(n).catch(() => void 0), new eX());
                                }
                            ((0, C.P6)(n, e, l, s ? void 0 : t), Z());
                        },
                    });
                    (j(""), (N.current = ""), (eo.current = !1), F(!1), (0, w.Ay)(n));
                } catch (e) {
                    (z(e instanceof eX ? R.intl.string(E.default["903H7m"]) : (0, p.mG)(e)), (eo.current = !1), F(!1));
                }
            }
        }, [r, G, t, s, Y, Z]),
        ed = l.useCallback((e) => {
            (_.w.set(U, e), W(e));
        }, []),
        em = R.intl.string(H ? E.default.kar7jh : E.default.WSc5Y2);
    return (0, n.jsx)("div", {
        className: a()(eK.MY, e$.T),
        children: (0, n.jsxs)("div", {
            className: eK.Zp,
            children: [
                (0, n.jsxs)("main", {
                    className: eK.iW,
                    children: [
                        es
                            ? null
                            : (0, n.jsx)(d.A, {
                                  title: R.intl.string(E.default.gy7byi),
                                  description: R.intl.string(E.default["dkv/WO"]),
                                  icons: eJ.ir,
                                  onDrop: ea,
                              }),
                        s
                            ? null
                            : (0, n.jsx)(I.A, {
                                  title: R.intl.string(E.default.uk6jhJ),
                                  transparent: !0,
                                  actions: (0, n.jsx)(f.A.Icon, {
                                      icon: i.Z,
                                      color: "var(--icon-strong)",
                                      className: eK.FW,
                                      tooltip: em,
                                      "aria-label": em,
                                      selected: H,
                                      onClick: () => ed(!H),
                                  }),
                              }),
                        (0, n.jsx)(c.Ip, {
                            ref: b,
                            className: eK.XG,
                            children: (0, n.jsxs)("div", {
                                className: eK.Qs,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: a()(eK.Lv, { [eK.$O]: s }),
                                        children: [
                                            (0, n.jsxs)("div", {
                                                className: eK.ZK,
                                                children: [
                                                    (0, n.jsx)(o.D, {
                                                        variant: "display-lg",
                                                        color: "text-strong",
                                                        className: eK.DD,
                                                        children: R.intl.string(E.default.doYpEy),
                                                    }),
                                                    (0, n.jsx)(u.E, {
                                                        variant: "text-md/normal",
                                                        color: "text-strong",
                                                        className: eK.VA,
                                                        children: R.intl.string(E.default.BH58fD),
                                                    }),
                                                ],
                                            }),
                                            (0, n.jsxs)("div", {
                                                className: eK.ZK,
                                                children: [
                                                    (0, n.jsx)(eR, {
                                                        idea: r,
                                                        inputRef: B,
                                                        onIdeaChange: ei,
                                                        onSubmit: eu,
                                                        submitting: es,
                                                        submitDisabled: el,
                                                        error: D,
                                                        modelSettings: G,
                                                        onModelSettingsChange: q,
                                                        attachments: X,
                                                        onImport: er.open,
                                                    }),
                                                    er.input,
                                                    (0, n.jsx)(u.E, {
                                                        variant: "text-xxs/normal",
                                                        color: "text-muted",
                                                        children: R.intl.string(E.default.hebdhA),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)(V, { inspirations: J, onCopyPrompt: ec }),
                                    (0, n.jsx)(eF, {}),
                                ],
                            }),
                        }),
                    ],
                }),
                H && !s ? (0, n.jsx)(eh, { guildId: t, archiveImport: ee }) : null,
            ],
        }),
    });
}
