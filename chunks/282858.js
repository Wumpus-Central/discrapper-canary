n.d(t, { A: () => e0 });
var s = n(477900),
    r = n(582128),
    l = n(503698),
    a = n.n(l),
    i = n(97893),
    c = n(364522),
    o = n(62010),
    u = n(297264),
    d = n(834730),
    m = n(65593),
    f = n(458518),
    h = n(742589),
    x = n(949757),
    g = n(858899),
    p = n(989145),
    j = n(639519),
    v = n(322227),
    N = n(371169),
    y = n(391712);
async function b(e) {
    let { guildId: t, installScope: n, prompt: s, modelSettings: r, templateId: l } = e,
        a = await (0, N.gA)(
            null != n
                ? { guild_id: t, install_scope: n }
                : { guild_id: t, auto_install_scope: !0, prompt: (s ?? "").slice(0, 4e3) },
        );
    return ((0, v.ensureConnection)(a, { templateId: l }), (0, v.stageModelSettings)(a, r ?? y.A4), a);
}
async function w(e) {
    let { start: t, ...n } = e,
        s = await b(n);
    return (await t(s), s);
}
var A = n(381991),
    C = n(708679),
    E = n(567630),
    S = n(809526),
    I = n(105292);
class R extends Error {}
var k = n(705427),
    P = n(120234),
    L = n(398773),
    O = n(735769),
    _ = n(101766);
(n(976860), n(652215), n(746080));
var U = n(506774);
let T = "ConjureProjectsPanelOpen";
var M = n(89310),
    F = n(17928),
    D = n(821609),
    z = n(661531),
    G = n(775602),
    q = n(486020);
function H() {
    return [
        {
            id: "server-calendar",
            category: "apps",
            shortPrompt: I.intl.string(S.default.qbaf5O),
            fullPrompt: I.intl.string(S.default.vo1ZBs),
            name: I.intl.string(S.default.Zx7B6B),
            authorAvatarSeed: "1",
        },
        {
            id: "cowboy-chat-bot",
            category: "chat_bot",
            shortPrompt: I.intl.string(S.default.i0y7Ld),
            fullPrompt: I.intl.string(S.default.Hddwvt),
            name: I.intl.string(S.default.dLyihE),
            authorAvatarSeed: "2",
        },
        {
            id: "library-voice-channel",
            category: "games",
            shortPrompt: I.intl.string(S.default.vYjIS6),
            fullPrompt: I.intl.string(S.default["4pASEG"]),
            name: I.intl.string(S.default.e8Jbz3),
            authorAvatarSeed: "3",
        },
        {
            id: "flappy-discord",
            category: "games",
            shortPrompt: I.intl.string(S.default.gtX7tS),
            fullPrompt: I.intl.string(S.default["Sfa50+"]),
            name: I.intl.string(S.default.Tbag5k),
            authorAvatarSeed: "4",
        },
        {
            id: "no-yelling",
            category: "automod",
            shortPrompt: I.intl.string(S.default.H8fuGK),
            fullPrompt: I.intl.string(S.default.XuiHpi),
            name: I.intl.string(S.default["5XJ55E"]),
            authorAvatarSeed: "5",
        },
        {
            id: "what-should-we-play",
            category: "apps",
            shortPrompt: I.intl.string(S.default.tZv5cM),
            fullPrompt: I.intl.string(S.default.qd87yI),
            name: I.intl.string(S.default["7KvZ91"]),
            authorAvatarSeed: "6",
        },
        {
            id: "kd-tracker",
            category: "overlay_widget",
            shortPrompt: I.intl.string(S.default.tqEROk),
            fullPrompt: I.intl.string(S.default.yym7Yj),
            name: I.intl.string(S.default.vRpB6m),
            authorAvatarSeed: "7",
        },
    ];
}
var W = n(687966),
    $ = n(323384),
    B = n(632015),
    K = n(31300),
    J = n(231483),
    X = n(430392);
let Y = {
        "server-calendar": "/assets/1d701ea289cc99e6.svg",
        "cowboy-chat-bot": "/assets/56e489e9c5907add.svg",
        "library-voice-channel": "/assets/5813258afff68797.svg",
        "flappy-discord": "/assets/b43659b526f2e936.svg",
        "no-yelling": "/assets/54b5cda688395473.svg",
        "what-should-we-play": "/assets/fcb9220c49b6460a.svg",
        "kd-tracker": "/assets/05c0d07952b2d93f.svg",
    },
    Z = {
        games: W.GameControllerIcon,
        apps: $.k,
        profile_widget: B.f,
        overlay_widget: K.k,
        automod: J.ShieldIcon,
        chat_bot: X.RobotIcon,
    };
var Q = n(621466);
let V = "data-conjure-carousel-card";
var ee = n(19493);
function et(e) {
    e.preventDefault();
}
let en = r.memo(function (e) {
        let { inspiration: t, onCopyPrompt: n, repeat: r = !1 } = e,
            l = Z[t.category];
        return (0, s.jsxs)("li", {
            className: ee.AS,
            "aria-hidden": !!r || void 0,
            [V]: "",
            children: [
                (0, s.jsxs)("div", {
                    className: ee.rl,
                    children: [
                        (0, s.jsx)("img", {
                            className: ee.my,
                            src: (0, q.AE)(void 0, t.authorAvatarSeed),
                            alt: "",
                            "aria-hidden": !0,
                        }),
                        (0, s.jsx)(d.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            className: ee.Tq,
                            children: t.shortPrompt,
                        }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: ee.Nr,
                    children: [
                        (0, s.jsxs)("div", {
                            className: ee.xn,
                            children: [
                                (0, s.jsx)("img", { className: ee.q_, src: t.image, alt: "" }),
                                (0, s.jsx)("div", {
                                    className: ee.o1,
                                    children: (0, s.jsx)(D.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: I.intl.string(S.default["6CQjTy"]),
                                        tabIndex: r ? -1 : void 0,
                                        onMouseDown: r ? et : void 0,
                                        onClick: () => n(t.fullPrompt),
                                    }),
                                }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: ee.qr,
                            children: [
                                (0, s.jsx)("div", {
                                    className: ee.Yl,
                                    "aria-hidden": !0,
                                    children: (0, s.jsx)(l, { size: "md", color: z.A.colors.ICON_STRONG }),
                                }),
                                (0, s.jsxs)("div", {
                                    className: ee.PJ,
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
                                                        return I.intl.string(S.default["JU01/4"]);
                                                    case "apps":
                                                        return I.intl.string(S.default["bvcT/Q"]);
                                                    case "profile_widget":
                                                        return I.intl.string(S.default.GUb2zA);
                                                    case "overlay_widget":
                                                        return I.intl.string(S.default.uVOH1p);
                                                    case "automod":
                                                        return I.intl.string(S.default["+EKk4D"]);
                                                    case "chat_bot":
                                                        return I.intl.string(S.default.KBHZfO);
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
    es = r.memo(function (e) {
        var t;
        let { inspirations: n, onCopyPrompt: l } = e,
            a = (0, F.bG)([G.Ay], () => G.Ay.useReducedMotion),
            i = r.useRef(null),
            c = r.useRef(null),
            o = (function (e, t, n, s) {
                let [l, a] = r.useState(1);
                return (
                    r.useLayoutEffect(() => {
                        let r = e.current,
                            l = t.current;
                        if (!s || null == r || null == l || 0 === n) return;
                        function i() {
                            if (null == r || null == l) return;
                            let e = l.querySelector(`[${V}]`);
                            if (null == e) return;
                            let t = parseFloat(getComputedStyle(l).columnGap),
                                s = e.offsetWidth + (Number.isNaN(t) ? 0 : t);
                            s <= 0 || a(Math.max(1, Math.ceil((r.clientWidth + 2 * s) / (s * n))));
                        }
                        i();
                        let c = new ResizeObserver(i);
                        return (c.observe(r), () => c.disconnect());
                    }, [e, t, n, s]),
                    s ? l : 1
                );
            })(i, c, n.length, !a);
        return (
            (t = !a),
            r.useEffect(() => {
                let e = i.current,
                    n = c.current;
                if (null == e || null == n) return;
                let s = [],
                    r = [],
                    l = 1,
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
                    if (null == e || null == n) return;
                    r = (s = Array.from(n.querySelectorAll(`[${V}]`))).map((e) => e.offsetLeft + e.offsetWidth / 2);
                    let i = (l = s.length > 1 ? Math.abs(s[1].offsetLeft - s[0].offsetLeft) : 1) * s.length;
                    ((a = t && i >= e.clientWidth + 2 * l ? i : 0),
                        (o = "rtl" === getComputedStyle(e).direction ? -1 : 1));
                }
                function j() {
                    if (null == e) return;
                    let t = e.scrollLeft + e.clientWidth / 2;
                    s.forEach((e, n) => {
                        var s, i;
                        let c,
                            d,
                            m = r[n] - t;
                        a > 0 && (m = ((((m - u * o + (s = a) / 2) % s) + s) % s) - s / 2);
                        let { angleDeg: f, dropPx: h } =
                            ((i = m / l),
                            (d =
                                (l / ((4 * Math.PI) / 180)) *
                                (1 - Math.cos(((c = Math.max(-12, Math.min(12, 4 * i))) * Math.PI) / 180))),
                            { angleDeg: c, dropPx: d });
                        (e.style.setProperty("--custom-conjure-home-carousel-shift", `${t + m - r[n]}px`),
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
                function y() {
                    ((f = !0), N());
                }
                function b() {
                    ((f = !1), N());
                }
                function w() {
                    ((h = !0), N());
                }
                function A(t) {
                    ((h = (0, Q.vq)(t.relatedTarget, Node) && e?.contains(t.relatedTarget) === !0), N());
                }
                function C() {
                    ((x = !0), N());
                }
                function E() {
                    ((x = !1), N());
                }
                (p(), j(), N());
                let S = new ResizeObserver(() => {
                    (p(), j());
                });
                (S.observe(e), S.observe(n));
                let I = new IntersectionObserver((e) => {
                    let [t] = e;
                    ((g = t.isIntersecting), N());
                });
                return (
                    I.observe(e),
                    e.addEventListener("scroll", j, { passive: !0 }),
                    e.addEventListener("pointerenter", y),
                    e.addEventListener("pointerleave", b),
                    e.addEventListener("focusin", w),
                    e.addEventListener("focusout", A),
                    window.addEventListener("focus", C),
                    window.addEventListener("blur", E),
                    () => {
                        (cancelAnimationFrame(d),
                            S.disconnect(),
                            I.disconnect(),
                            e.removeEventListener("scroll", j),
                            e.removeEventListener("pointerenter", y),
                            e.removeEventListener("pointerleave", b),
                            e.removeEventListener("focusin", w),
                            e.removeEventListener("focusout", A),
                            window.removeEventListener("focus", C),
                            window.removeEventListener("blur", E));
                    }
                );
            }, [i, c, t]),
            (0, s.jsx)("section", {
                ref: i,
                className: a ? ee.vV : ee.Dk,
                "aria-label": I.intl.string(S.default.Qc4S39),
                children: (0, s.jsx)("ul", {
                    ref: c,
                    className: ee.u4,
                    children: Array.from({ length: o }, (e, t) =>
                        n.map((e) =>
                            (0, s.jsx)(en, { inspiration: e, onCopyPrompt: l, repeat: t > 0 }, `${e.id}-${t}`),
                        ),
                    ),
                }),
            })
        );
    });
var er = n(289873),
    el = n(441935),
    ea = n(939249),
    ei = n(847374),
    ec = n(5127);
function eo(e) {
    let { onClick: t } = e;
    return (0, s.jsxs)(ea.D, {
        className: a()(ec.ap, ec.jP),
        onClick: t,
        children: [
            (0, s.jsx)("span", { className: ec.DW, children: (0, s.jsx)(ei.a, { size: "sm", color: "currentColor" }) }),
            (0, s.jsx)(d.E, { variant: "text-md/medium", color: "none", children: I.intl.string(S.default.Im1k9X) }),
        ],
    });
}
var eu = n(260498),
    ed = n(741907),
    em = n(602991),
    ef = n(186340),
    eh = n(919485),
    ex = n(588359),
    eg = n(638693);
function ep(e) {
    let { title: t, projects: n, onSelect: l, renderProjectActions: a, onProjectContextMenu: i } = e,
        {
            visibleItems: c,
            listRef: o,
            showMore: u,
        } = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
                [n, s] = r.useState(8),
                l = Math.max(n, 8 * Math.ceil((t + 1) / 8)),
                a = r.useRef(null),
                i = r.useRef(null);
            return (r.useLayoutEffect(() => {
                if (null == i.current) return;
                let e = a.current?.children[i.current]?.querySelector('[role="button"], button');
                ((i.current = null), e?.focus());
            }, [l]),
            l >= e.length)
                ? { visibleItems: e, listRef: a, showMore: null }
                : {
                      visibleItems: e.slice(0, l),
                      listRef: a,
                      showMore: () => {
                          let t = l + 8;
                          (t >= e.length && (i.current = l), s(t));
                      },
                  };
        })(n);
    return (0, s.jsxs)(eh.A, {
        title: t,
        className: eg.uW,
        children: [
            (0, s.jsx)(ef.A, {
                listRef: o,
                projects: c,
                onSelect: l,
                renderProjectActions: a,
                onProjectContextMenu: i,
            }),
            null != u ? (0, s.jsx)(eo, { onClick: u }) : null,
        ],
    });
}
function ej(e) {
    let t,
        { guildId: n, archiveImport: l } = e,
        {
            mine: a,
            shared: i,
            fetchState: o,
        } = ((t = (0, ed.U)(
            () => eu.Ay.getOwnedProjects().filter((e) => e.guild_id === n || e.preview_guild_id === n),
            [n],
        )),
        {
            mine: t,
            shared: (0, ed.U)(() => eu.Ay.getSharedProjects(n), [n]),
            fetchState: (0, F.bG)([eu.Ay], () => eu.Ay.getGuildProjectsFetchState(n), [n]),
        }),
        { importArchive: m } = l,
        f = (0, x.yN)(r.useCallback((e) => m(e, "guild"), [m])),
        h = r.useCallback((e) => (0, A.Ay)(e.id, "home"), []),
        g = r.useCallback((e) => (0, s.jsx)(em.S, { project: e, guildId: n }), [n]),
        p = r.useCallback((e, t) => (0, em.V)(e, t, n), [n]),
        j = I.intl.string(S.default.BMn2lY),
        v = a.length > 0 || i.length > 0;
    return (0, s.jsxs)("aside", {
        className: eg.pz,
        "aria-label": j,
        children: [
            (0, s.jsxs)("div", {
                className: eg.wx,
                children: [
                    (0, s.jsx)(u.D, { variant: "heading-md/semibold", color: "text-strong", children: j }),
                    (0, s.jsx)(el.A, { importing: l.importing, onClick: f.open }),
                    f.input,
                ],
            }),
            (0, s.jsxs)(c.Ip, {
                className: eg.XG,
                children: [
                    a.length > 0
                        ? (0, s.jsx)(
                              ep,
                              {
                                  title: I.intl.string(S.default["8LfMqp"]),
                                  projects: a,
                                  onSelect: h,
                                  renderProjectActions: g,
                                  onProjectContextMenu: p,
                              },
                              `${n}-mine`,
                          )
                        : null,
                    i.length > 0
                        ? (0, s.jsx)(
                              ep,
                              {
                                  title: I.intl.string(S.default.YHDMK6),
                                  projects: i,
                                  onSelect: h,
                                  renderProjectActions: g,
                                  onProjectContextMenu: p,
                              },
                              `${n}-shared`,
                          )
                        : null,
                    v || "error" !== o
                        ? v || "success" === o
                            ? null
                            : (0, s.jsx)("div", { className: eg.E8, children: (0, s.jsx)(er.y, {}) })
                        : (0, s.jsxs)("div", {
                              className: eg.E8,
                              children: [
                                  (0, s.jsx)(d.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: I.intl.string(S.default.DJAPMO),
                                  }),
                                  (0, s.jsx)(D.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: I.intl.string(S.default["WFJ/vb"]),
                                      onClick: () => (0, N.listProjects)(n),
                                  }),
                              ],
                          }),
                ],
            }),
            v || "success" !== o ? null : (0, s.jsx)(ex.A, {}),
        ],
    });
}
var ev = n(559106),
    eN = n(783977),
    ey = n(559647),
    eb = n(531685),
    ew = n(957071),
    eA = n(34595),
    eC = n(587157),
    eE = n(200160),
    eS = n(465410);
function eI(e) {
    let { prompts: t, paused: n } = e,
        { index: l, length: a } = (function (e, t) {
            let [n, s] = r.useState(() =>
                    t ? { index: 0, length: e[0].length, phase: "holding" } : { index: 0, length: 0, phase: "typing" },
                ),
                [l, a] = r.useState(t);
            t !== l && (a(t), t && s((t) => ({ ...t, length: e[t.index].length, phase: "holding" })));
            let i = r.useRef(n.length);
            r.useLayoutEffect(() => {
                i.current = n.length;
            });
            let { index: c, phase: o } = n;
            return (
                r.useEffect(() => {
                    if (t) return;
                    let n = e[c].length;
                    if ("holding" === o) {
                        let e = window.setTimeout(() => s((e) => ({ ...e, phase: "deleting" })), 1400);
                        return () => window.clearTimeout(e);
                    }
                    let r = "typing" === o,
                        l = i.current,
                        a = performance.now(),
                        u = l,
                        d = 0,
                        m = 0;
                    return (
                        (d = requestAnimationFrame(function t(i) {
                            let o = Math.floor((i - a) / (r ? 14 : 4)),
                                f = r ? Math.min(n, l + o) : Math.max(0, l - o);
                            (f !== u && ((u = f), s((e) => ({ ...e, length: f }))),
                                r && f === n
                                    ? s((e) => ({ ...e, length: f, phase: "holding" }))
                                    : r || 0 !== f
                                      ? (d = requestAnimationFrame(t))
                                      : (m = window.setTimeout(
                                            () => s({ index: (c + 1) % e.length, length: 0, phase: "typing" }),
                                            250,
                                        )));
                        })),
                        () => {
                            (cancelAnimationFrame(d), window.clearTimeout(m));
                        }
                    );
                }, [e, t, c, o]),
                n
            );
        })(t, n);
    return (0, s.jsx)(d.E, {
        variant: "text-md/normal",
        color: "text-muted",
        className: eE.RC,
        children: t[l].slice(0, a),
    });
}
function eR(e) {
    let { prompts: t, paused: n } = e,
        l = (function (e, t) {
            let [n, s] = r.useState(0);
            return (
                r.useEffect(() => {
                    if (t || e < 2) return;
                    let n = window.setInterval(() => s((t) => (t + 1) % e), 2e3);
                    return () => window.clearInterval(n);
                }, [e, 2e3, t]),
                n
            );
        })(t.length, n);
    return (0, s.jsx)(d.E, { variant: "text-md/normal", color: "text-muted", className: eE.RC, children: t[l] });
}
function ek(e) {
    let { boxFocused: t } = e,
        n = r.useMemo(
            () =>
                H().map((e) => {
                    let { shortPrompt: t } = e;
                    return t;
                }),
            [],
        ),
        l = (0, F.bG)([G.Ay], () => G.Ay.useReducedMotion),
        a = (0, F.bG)([eb.A], () => eb.A.isFocused()),
        i = t || !a;
    return (0, s.jsx)("div", {
        className: eE.qf,
        "aria-hidden": !0,
        children: l ? (0, s.jsx)(eR, { prompts: n, paused: i }) : (0, s.jsx)(eI, { prompts: n, paused: i }),
    });
}
function eP(e) {
    let {
            idea: t,
            inputRef: n,
            onIdeaChange: l,
            onSubmit: i,
            submitting: c,
            submitDisabled: o,
            error: u,
            modelSettings: m,
            onModelSettingsChange: f,
            attachments: h,
            onImport: x,
        } = e,
        [g, p] = r.useState(!1),
        j = r.useRef(null),
        v = r.useId(),
        N = "" !== t,
        { addFiles: b, pasteFiles: w, removeAttachment: A } = h;
    r.useLayoutEffect(() => {
        let e = n.current;
        null != e &&
            (e.scrollHeight <= e.clientHeight && (e.style.height = "auto"), (e.style.height = `${e.scrollHeight}px`));
    }, [t, n]);
    let C = r.useCallback(
        (e) => {
            "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), o || i());
        },
        [o, i],
    );
    return (0, s.jsxs)("div", {
        className: eE.kL,
        children: [
            (0, s.jsxs)("div", {
                ref: j,
                className: a()(eE.yk, { [eE.Sl]: null != u }),
                children: [
                    (0, s.jsxs)(d.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        className: eE.Ox,
                        children: [
                            (0, s.jsx)(ev.vN, {
                                ringTarget: j,
                                ringClassName: eE.Rg,
                                children: (0, s.jsx)("textarea", {
                                    ref: n,
                                    className: a()(eE.hF, eS.yL),
                                    rows: 3,
                                    value: t,
                                    "aria-label": I.intl.string(S.default.cwrS1O),
                                    "aria-invalid": null != u,
                                    "aria-describedby": null != u ? v : void 0,
                                    onChange: (e) => l(e.currentTarget.value),
                                    onKeyDown: C,
                                    onPaste: (e) => w(e),
                                    onFocus: () => p(!0),
                                    onBlur: () => p(!1),
                                }),
                            }),
                            N ? null : (0, s.jsx)(ek, { boxFocused: g }),
                        ],
                    }),
                    h.attachments.length > 0
                        ? (0, s.jsx)("div", {
                              className: eE.ZO,
                              children: h.attachments.map((e) => {
                                  let { draft: t } = e;
                                  return (0, s.jsx)(eA.Nl, { draft: t, onRemove: A }, t.localId);
                              }),
                          })
                        : null,
                    (0, s.jsxs)("div", {
                        className: eE.KE,
                        children: [
                            (0, s.jsx)(ew.A, {
                                navId: "conjure-home-attach",
                                disabled: c,
                                buttonClassName: eE.gb,
                                iconClassName: eE.Xv,
                                onAddFiles: b,
                                onImport: x,
                            }),
                            (0, s.jsxs)("div", {
                                className: eE.Rc,
                                children: [
                                    (0, s.jsx)(eC.A, {
                                        settings: m ?? y.A4,
                                        tiers: y.lO,
                                        choices: (0, y.Pu)(),
                                        disabled: c,
                                        onChange: f,
                                        className: eE.gb,
                                        icon: (0, s.jsx)(eN.R, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, s.jsx)(D.$, {
                                        variant: "primary",
                                        size: "sm",
                                        icon: ey.SendMessageIcon,
                                        text: I.intl.string(S.default.bNtzxp),
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
var eL = n(628284),
    eO = n(369606),
    e_ = n(926268),
    eU = n(406810),
    eT = n(707554);
let eM = [
    { id: "apps", title: S.default["bvcT/Q"], description: S.default.ArcJqa },
    { id: "bots", title: S.default.KBHZfO, description: S.default.qNmKhG },
    { id: "games", title: S.default["JU01/4"], description: S.default.FXwLsv },
    { id: "automod", title: S.default["+EKk4D"], description: S.default.fpXK3z },
    { id: "overlay-widgets", title: S.default.uVOH1p, description: S.default.zm7y9u },
    { id: "profile-widgets", title: S.default.GUb2zA, description: S.default["v+F6qW"] },
];
var eF = n(651346);
function eD(e) {
    let { className: t } = e;
    return (0, s.jsx)("span", { className: a()(eF.n8, t) });
}
let ez = {
    apps: function () {
        return (0, s.jsxs)("div", {
            className: eF.x,
            children: [
                (0, s.jsxs)("div", {
                    className: eF.My,
                    children: [
                        (0, s.jsx)("span", { className: eF._w }),
                        (0, s.jsx)("span", { className: eF._w }),
                        (0, s.jsx)("span", { className: eF._w }),
                    ],
                }),
                (0, s.jsx)(eD, { className: eF.Lm }),
                (0, s.jsx)("div", {
                    className: eF.Oh,
                    children: [0, 1, 2].map((e) =>
                        (0, s.jsxs)(
                            "div",
                            {
                                className: eF.ZW,
                                children: [
                                    (0, s.jsx)("span", { className: eF.NU }),
                                    0 === e
                                        ? (0, s.jsx)(eL.y, {
                                              size: "xs",
                                              color: z.A.colors.ICON_BRAND,
                                              className: eF._6,
                                          })
                                        : null,
                                    (0, s.jsx)(eD, { className: eF.Eg }),
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
            className: a()(eF.x, eF.jG),
            children: [
                (0, s.jsx)("span", { className: a()(eF.gg, eF.K1) }),
                (0, s.jsx)("span", { className: a()(eF.gg, eF.W2) }),
                (0, s.jsx)("span", { className: a()(eF.Fs, eF.A$) }),
                (0, s.jsx)("span", { className: a()(eF.Fs, eF.eP) }),
                (0, s.jsx)("span", { className: a()(eF.Fs, eF.kc) }),
                (0, s.jsx)("span", { className: a()(eF.Fs, eF.OE) }),
                (0, s.jsx)("span", { className: eF.OC }),
                (0, s.jsxs)("div", {
                    className: eF.si,
                    children: [
                        (0, s.jsx)(eO.TrophyIcon, { size: "xxs", color: z.A.colors.ICON_FEEDBACK_WARNING }),
                        (0, s.jsx)(d.E, { variant: "text-xs/bold", color: "none", className: eF.o9, children: 128 }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: eF.KQ,
                    children: [
                        (0, s.jsx)(e_.HeartIcon, { size: "xxs", color: z.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, s.jsx)(e_.HeartIcon, { size: "xxs", color: z.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, s.jsx)(e_.HeartIcon, { size: "xxs", color: z.A.colors.ICON_OVERLAY_LIGHT }),
                    ],
                }),
            ],
        });
    },
    bots: function () {
        return (0, s.jsxs)("div", {
            className: eF.x,
            children: [
                (0, s.jsxs)("div", {
                    className: eF.$y,
                    children: [(0, s.jsx)("span", { className: eF.m$ }), (0, s.jsx)(eD, { className: eF.Md })],
                }),
                (0, s.jsxs)("div", {
                    className: eF.iU,
                    children: [
                        (0, s.jsx)("span", {
                            className: a()(eF.my, eF.FY),
                            children: (0, s.jsx)(X.RobotIcon, { size: "xs", color: z.A.colors.ICON_OVERLAY_LIGHT }),
                        }),
                        (0, s.jsxs)("div", {
                            className: eF.OS,
                            children: [
                                (0, s.jsxs)("div", {
                                    className: eF.f9,
                                    children: [
                                        (0, s.jsx)(eD, { className: eF.iE }),
                                        (0, s.jsx)(d.E, {
                                            variant: "text-xs/bold",
                                            color: "none",
                                            className: eF.AO,
                                            children: I.intl.string(S.default.VlgiLf),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(eD, { className: eF.xs }),
                                (0, s.jsx)(eD, { className: eF.Md }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    "profile-widgets": function () {
        return (0, s.jsxs)("div", {
            className: a()(eF.x, eF.ME),
            children: [
                (0, s.jsx)("span", { className: eF.CK }),
                (0, s.jsxs)("div", {
                    className: eF.kI,
                    children: [
                        (0, s.jsx)("span", { className: a()(eF.my, eF.jU) }),
                        (0, s.jsx)(eD, { className: eF.iE }),
                        (0, s.jsxs)("div", {
                            className: eF.Wy,
                            children: [
                                (0, s.jsx)("div", {
                                    className: eF.M1,
                                    children: [0, 1].map((e) =>
                                        (0, s.jsxs)(
                                            "div",
                                            {
                                                className: eF.dJ,
                                                children: [
                                                    (0, s.jsx)(eD, { className: eF.cR }),
                                                    (0, s.jsx)(eD, { className: eF.Zh }),
                                                ],
                                            },
                                            e,
                                        ),
                                    ),
                                }),
                                (0, s.jsx)("div", {
                                    className: eF.bW,
                                    children: [0, 1, 2, 3, 4, 5].map((e) =>
                                        (0, s.jsx)("span", { className: eF.QR }, e),
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
            className: eF.JH,
            children: [
                (0, s.jsx)("span", { className: eF.rx }),
                (0, s.jsx)("span", { className: eF.ny }),
                (0, s.jsx)("span", { className: eF.ZH }),
                (0, s.jsx)("div", {
                    className: eF.$Y,
                    children: [0, 1, 2].map((e) =>
                        (0, s.jsxs)(
                            "div",
                            {
                                className: eF.fn,
                                children: [
                                    (0, s.jsx)("span", { className: a()(eF._h, { [eF.zY]: 0 === e }) }),
                                    (0, s.jsx)(eD, { className: eF.Av }),
                                ],
                            },
                            e,
                        ),
                    ),
                }),
                (0, s.jsxs)("div", {
                    className: eF.Y5,
                    children: [
                        (0, s.jsx)(eU.ClockIcon, { size: "xxs", color: z.A.colors.ICON_OVERLAY_LIGHT }),
                        (0, s.jsx)(eD, { className: eF.jB }),
                    ],
                }),
            ],
        });
    },
    automod: function () {
        return (0, s.jsxs)("div", {
            className: eF.x,
            children: [
                (0, s.jsxs)("div", {
                    className: eF.iU,
                    children: [
                        (0, s.jsx)("span", { className: eF.my }),
                        (0, s.jsxs)("div", {
                            className: eF.OS,
                            children: [
                                (0, s.jsx)(eD, { className: eF.iE }),
                                (0, s.jsx)(eD, { className: a()(eF.xs, eF.pc) }),
                                (0, s.jsx)(eD, { className: a()(eF.Md, eF.pc) }),
                            ],
                        }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: eF.jC,
                    children: [
                        (0, s.jsx)(J.ShieldIcon, { size: "sm", color: z.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, s.jsxs)("div", {
                            className: eF.qQ,
                            children: [
                                (0, s.jsx)(eD, { className: a()(eF.Md, eF.k8) }),
                                (0, s.jsx)(eD, { className: a()(eF.nq, eF.k8) }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
};
function eG(e) {
    let { id: t } = e,
        n = ez[t];
    return (0, s.jsx)(n, {});
}
let eq = r.memo(function () {
    let e = r.useId();
    return (0, s.jsx)("section", {
        className: eF.GG,
        "aria-labelledby": e,
        children: (0, s.jsx)(eT.F, {
            component: (0, s.jsx)(u.D, {
                id: e,
                variant: "heading-lg/medium",
                children: I.intl.string(S.default.IiQEVd),
            }),
            children: (0, s.jsx)("ul", {
                className: eF.Vg,
                children: eM.map((e) => {
                    let { id: t, title: n, description: r } = e;
                    return (0, s.jsxs)(
                        "li",
                        {
                            className: eF.Vs,
                            children: [
                                (0, s.jsx)("div", {
                                    className: eF.Tn,
                                    "aria-hidden": !0,
                                    children: (0, s.jsx)(eG, { id: t }),
                                }),
                                (0, s.jsxs)("div", {
                                    className: eF.pG,
                                    children: [
                                        (0, s.jsx)(u.D, {
                                            variant: "text-md/semibold",
                                            color: "text-strong",
                                            children: I.intl.string(n),
                                        }),
                                        (0, s.jsx)(d.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: I.intl.string(r),
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
var eH = n(666476),
    eW = n(287111),
    e$ = n(177676);
let eB = 1;
function eK(e) {
    let t = (0, e$.Ft)(e),
        n = { localId: eB++, name: e.name, contentType: t };
    if ("too-large" === (0, e$.R9)(e, t))
        return { file: e, draft: { ...n, status: "error", errorText: (0, eW.iW)(t) } };
    let s = eH.XB.has(t) ? URL.createObjectURL(e) : void 0;
    return { file: e, draft: { ...n, status: "ready", previewUrl: s } };
}
function eJ(e) {
    null != e.draft.previewUrl && URL.revokeObjectURL(e.draft.previewUrl);
}
async function eX(e, t) {
    if ("fits" === (0, e$.R9)(t, (0, e$.Ft)(t))) return (0, p.vX)(e, t);
    let n = await (0, e$.th)(t);
    if (null == n) throw Error("attachment over its size limit");
    return (0, p.vX)(e, n);
}
var eY = n(698638),
    eZ = n(606128),
    eQ = n(260024);
class eV extends Error {}
function e0(e) {
    let { guildId: t, onConjurePage: n = !1 } = e,
        [l, v] = r.useState(() => O.A.getHomePrompt());
    (0, P.N$)(l);
    let y = (0, _.A)(n ? "home" : null),
        [b, F] = r.useState(!1),
        [D, z] = r.useState(null),
        [G, q] = r.useState(null),
        [W, $] = r.useState(() => U.w.get(T) ?? null ?? !0),
        B = r.useRef(null),
        K = r.useMemo(() => H().map((e) => ({ ...e, image: Y[e.id] })), []),
        J = "user" === (0, f.o)().get("target") || n,
        X = (function () {
            let [e, t] = r.useState([]),
                n = r.useRef(e);
            (r.useLayoutEffect(() => {
                n.current = e;
            }),
                r.useEffect(() => () => n.current.forEach(eJ), []));
            let s = r.useCallback((e) => {
                    if (0 === e.length) return;
                    let s = e.map(eK);
                    ((n.current = [...n.current, ...s]), t(n.current));
                }, []),
                l = (0, e$.sm)(s),
                a = r.useCallback((e) => {
                    let s = n.current.find((t) => t.draft.localId === e);
                    null != s && (eJ(s), (n.current = n.current.filter((e) => e !== s)), t(n.current));
                }, []),
                i = r.useCallback(() => {
                    (n.current.forEach(eJ), (n.current = []), t(n.current));
                }, []),
                c = r.useMemo(
                    () =>
                        (function (e) {
                            if (e.length <= eH.lN) return e;
                            let t = (0, e$.XV)();
                            return e.map((e, n) =>
                                n < eH.lN || "error" === e.draft.status
                                    ? e
                                    : { ...e, draft: { ...e.draft, status: "error", errorText: t } },
                            );
                        })(e),
                    [e],
                );
            return {
                attachments: c,
                addFiles: s,
                pasteFiles: l,
                removeAttachment: a,
                clear: i,
                hasErrors: c.some((e) => "error" === e.draft.status),
            };
        })(),
        { attachments: Z, addFiles: Q, clear: V } = X,
        ee = (function (e) {
            let { guildId: t, modelSettings: n } = e,
                [s, l] = r.useState(!1),
                a = r.useRef(!1);
            return {
                importing: s,
                importArchive: r.useCallback(
                    async (e, s) => {
                        if (a.current) return;
                        let r = (0, x.vt)(e);
                        if (null != r) return void (0, g.P0)({ text: r, variant: "critical" });
                        ((a.current = !0), l(!0));
                        try {
                            let r = (await (0, E.A)(e, t)) ?? s,
                                l = await w({
                                    guildId: t,
                                    installScope: r,
                                    modelSettings: n,
                                    start: async (t) => {
                                        try {
                                            let n = await (0, p.vX)(t, e);
                                            (0, C.P6)(t, I.intl.string(S.default["LUc7/5"]), [n]);
                                        } catch {
                                            try {
                                                await (0, N.xx)(t);
                                            } catch {}
                                            throw new R();
                                        }
                                    },
                                });
                            (0, A.Ay)(l, "create");
                        } catch (e) {
                            (0, g.P0)({
                                text: e instanceof R ? I.intl.string(S.default["Q+l4Hv"]) : (0, j.mG)(e),
                                variant: "critical",
                            });
                        } finally {
                            ((a.current = !1), l(!1));
                        }
                    },
                    [t, n],
                ),
            };
        })({ guildId: t, modelSettings: G }),
        { importArchive: et } = ee,
        en = b || ee.importing,
        er = "" !== l.trim() || Z.length > 0,
        el = en || !er || X.hasErrors,
        ea = (0, x.yN)(r.useCallback((e) => et(e, J ? "user" : null), [et, J])),
        ei = r.useCallback((e) => Q(Array.from(e)), [Q]);
    (0, M.p)(B);
    let ec = r.useCallback((e) => {
            (v(e), (0, L.fZ)(e), z(null));
        }, []),
        eo = r.useCallback(
            (e) => {
                ec(e);
                let t = B.current;
                null != t && (t.focus(), t.setSelectionRange(e.length, e.length));
            },
            [ec],
        ),
        eu = r.useRef(!1),
        ed = r.useCallback(async () => {
            let e = l.trim();
            if (("" !== e || 0 !== Z.length) && !eu.current) {
                ((eu.current = !0), F(!0), z(null));
                try {
                    let s = await w({
                        guildId: t,
                        installScope: null,
                        prompt: e,
                        modelSettings: G,
                        start: async (s) => {
                            let r = [];
                            if (Z.length > 0)
                                try {
                                    r = await Promise.all(
                                        Z.map((e) => {
                                            let { file: t } = e;
                                            return eX(s, t);
                                        }),
                                    );
                                } catch {
                                    throw (await (0, N.xx)(s).catch(() => void 0), new eV());
                                }
                            ((0, C.P6)(s, e, r, n ? void 0 : t), V());
                        },
                    });
                    (v(""), (0, L.fZ)(""), (eu.current = !1), F(!1), (0, A.Ay)(s, "create"));
                } catch (e) {
                    (z(e instanceof eV ? I.intl.string(S.default["903H7m"]) : (0, j.mG)(e)), (eu.current = !1), F(!1));
                }
            }
        }, [l, G, t, n, Z, V]),
        em = r.useCallback((e) => {
            (U.w.set(T, e), $(e));
        }, []),
        ef = I.intl.string(W ? S.default.kar7jh : S.default.WSc5Y2);
    return (0, s.jsx)("div", {
        className: a()(eQ.MY, eZ.T),
        children: (0, s.jsxs)("div", {
            className: eQ.Zp,
            children: [
                (0, s.jsxs)("main", {
                    className: eQ.iW,
                    children: [
                        en
                            ? null
                            : (0, s.jsx)(m.A, {
                                  title: I.intl.string(S.default.gy7byi),
                                  description: I.intl.string(S.default["dkv/WO"]),
                                  icons: eY.ir,
                                  onDrop: ei,
                              }),
                        n
                            ? null
                            : (0, s.jsx)(k.A, {
                                  title: I.intl.string(S.default.uk6jhJ),
                                  transparent: !0,
                                  actions: (0, s.jsx)(h.A.Icon, {
                                      icon: i.Z,
                                      color: "var(--icon-strong)",
                                      className: eQ.FW,
                                      tooltip: ef,
                                      "aria-label": ef,
                                      selected: W,
                                      onClick: () => em(!W),
                                  }),
                              }),
                        (0, s.jsx)(c.Ip, {
                            ref: y,
                            className: eQ.XG,
                            children: (0, s.jsxs)("div", {
                                className: eQ.Qs,
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: a()(eQ.Lv, { [eQ.$O]: n }),
                                        children: [
                                            (0, s.jsxs)("div", {
                                                className: eQ.ZK,
                                                children: [
                                                    (0, s.jsx)("div", {
                                                        children: (0, s.jsx)(o.E, {
                                                            type: { text: I.intl.string(S.default.y6T1Nu) },
                                                            variant: "primary",
                                                        }),
                                                    }),
                                                    (0, s.jsx)(u.D, {
                                                        variant: "display-lg",
                                                        color: "text-strong",
                                                        className: eQ.DD,
                                                        children: I.intl.string(S.default.doYpEy),
                                                    }),
                                                    (0, s.jsx)(d.E, {
                                                        variant: "text-md/normal",
                                                        color: "text-strong",
                                                        className: eQ.VA,
                                                        children: I.intl.string(S.default.BH58fD),
                                                    }),
                                                ],
                                            }),
                                            (0, s.jsxs)("div", {
                                                className: eQ.ZK,
                                                children: [
                                                    (0, s.jsx)(eP, {
                                                        idea: l,
                                                        inputRef: B,
                                                        onIdeaChange: ec,
                                                        onSubmit: ed,
                                                        submitting: en,
                                                        submitDisabled: el,
                                                        error: D,
                                                        modelSettings: G,
                                                        onModelSettingsChange: q,
                                                        attachments: X,
                                                        onImport: ea.open,
                                                    }),
                                                    ea.input,
                                                    (0, s.jsx)(d.E, {
                                                        variant: "text-xxs/normal",
                                                        color: "text-muted",
                                                        children: I.intl.string(S.default.hebdhA),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, s.jsx)(es, { inspirations: K, onCopyPrompt: eo }),
                                    (0, s.jsx)(eq, {}),
                                ],
                            }),
                        }),
                    ],
                }),
                W && !n ? (0, s.jsx)(ej, { guildId: t, archiveImport: ee }) : null,
            ],
        }),
    });
}
