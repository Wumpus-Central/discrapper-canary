n.d(t, { A: () => e2 });
var s = n(477900),
    l = n(582128),
    r = n(503698),
    a = n.n(r),
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
    v = n(639519),
    j = n(322227),
    N = n(371169),
    y = n(391712);
async function b(e) {
    let { guildId: t, installScope: n, prompt: s, modelSettings: l, templateId: r } = e,
        a = await (0, N.gA)(
            null != n
                ? { guild_id: t, install_scope: n }
                : { guild_id: t, auto_install_scope: !0, prompt: (s ?? "").slice(0, 4e3) },
        );
    return ((0, j.ensureConnection)(a, { templateId: r }), (0, j.stageModelSettings)(a, l ?? y.A4), a);
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
var T = n(506774);
let U = "ConjureProjectsPanelOpen";
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
let en = l.memo(function (e) {
        let { inspiration: t, onCopyPrompt: n, repeat: l = !1 } = e,
            r = Z[t.category];
        return (0, s.jsxs)("li", {
            className: ee.AS,
            "aria-hidden": !!l || void 0,
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
                                        tabIndex: l ? -1 : void 0,
                                        onMouseDown: l ? et : void 0,
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
                                    children: (0, s.jsx)(r, { size: "md", color: z.A.colors.ICON_STRONG }),
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
    es = l.memo(function (e) {
        var t;
        let { inspirations: n, onCopyPrompt: r } = e,
            a = (0, F.bG)([G.Ay], () => G.Ay.useReducedMotion),
            i = l.useRef(null),
            c = l.useRef(null),
            o = (function (e, t, n, s) {
                let [r, a] = l.useState(1);
                return (
                    l.useLayoutEffect(() => {
                        let l = e.current,
                            r = t.current;
                        if (!s || null == l || null == r || 0 === n) return;
                        function i() {
                            if (null == l || null == r) return;
                            let e = r.querySelector(`[${V}]`);
                            if (null == e) return;
                            let t = parseFloat(getComputedStyle(r).columnGap),
                                s = e.offsetWidth + (Number.isNaN(t) ? 0 : t);
                            s <= 0 || a(Math.max(1, Math.ceil((l.clientWidth + 2 * s) / (s * n))));
                        }
                        i();
                        let c = new ResizeObserver(i);
                        return (c.observe(l), () => c.disconnect());
                    }, [e, t, n, s]),
                    s ? r : 1
                );
            })(i, c, n.length, !a);
        return (
            (t = !a),
            l.useEffect(() => {
                let e = i.current,
                    n = c.current;
                if (null == e || null == n) return;
                let s = [],
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
                    if (null == e || null == n) return;
                    l = (s = Array.from(n.querySelectorAll(`[${V}]`))).map((e) => e.offsetLeft + e.offsetWidth / 2);
                    let i = (r = s.length > 1 ? Math.abs(s[1].offsetLeft - s[0].offsetLeft) : 1) * s.length;
                    ((a = t && i >= e.clientWidth + 2 * r ? i : 0),
                        (o = "rtl" === getComputedStyle(e).direction ? -1 : 1));
                }
                function v() {
                    if (null == e) return;
                    let t = e.scrollLeft + e.clientWidth / 2;
                    s.forEach((e, n) => {
                        var s, i;
                        let c,
                            d,
                            m = l[n] - t;
                        a > 0 && (m = ((((m - u * o + (s = a) / 2) % s) + s) % s) - s / 2);
                        let { angleDeg: f, dropPx: h } =
                            ((i = m / r),
                            (d =
                                (r / ((4 * Math.PI) / 180)) *
                                (1 - Math.cos(((c = Math.max(-12, Math.min(12, 4 * i))) * Math.PI) / 180))),
                            { angleDeg: c, dropPx: d });
                        (e.style.setProperty("--custom-conjure-home-carousel-shift", `${t + m - l[n]}px`),
                            e.style.setProperty("--custom-conjure-home-carousel-angle", `${f}deg`),
                            e.style.setProperty("--custom-conjure-home-carousel-drop", `${h}px`));
                    });
                }
                function j(e) {
                    (null != m && a > 0 && (u = (u + (30 * (e - m)) / 1e3) % a),
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
                (p(), v(), N());
                let S = new ResizeObserver(() => {
                    (p(), v());
                });
                (S.observe(e), S.observe(n));
                let I = new IntersectionObserver((e) => {
                    let [t] = e;
                    ((g = t.isIntersecting), N());
                });
                return (
                    I.observe(e),
                    e.addEventListener("scroll", v, { passive: !0 }),
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
                            e.removeEventListener("scroll", v),
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
                            (0, s.jsx)(en, { inspiration: e, onCopyPrompt: r, repeat: t > 0 }, `${e.id}-${t}`),
                        ),
                    ),
                }),
            })
        );
    });
var el = n(289873),
    er = n(123292),
    ea = n(441935),
    ei = n(939249),
    ec = n(847374),
    eo = n(5127);
function eu(e) {
    let { onClick: t } = e;
    return (0, s.jsxs)(ei.D, {
        className: a()(eo.ap, eo.jP),
        onClick: t,
        children: [
            (0, s.jsx)("span", { className: eo.DW, children: (0, s.jsx)(ec.a, { size: "sm", color: "currentColor" }) }),
            (0, s.jsx)(d.E, { variant: "text-md/medium", color: "none", children: I.intl.string(S.default.Im1k9X) }),
        ],
    });
}
var ed = n(260498),
    em = n(741907);
function ef(e, t) {
    return e.guild_id === t || e.preview_guild_id === t;
}
var eh = n(602991),
    ex = n(186340),
    eg = n(919485),
    ep = n(588359),
    ev = n(638693);
function ej(e) {
    let { title: t, projects: n, onSelect: r, renderProjectActions: a, onProjectContextMenu: i } = e,
        {
            visibleItems: c,
            listRef: o,
            showMore: u,
        } = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
                [n, s] = l.useState(8),
                r = Math.max(n, 8 * Math.ceil((t + 1) / 8)),
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
                          (t >= e.length && (i.current = r), s(t));
                      },
                  };
        })(n);
    return (0, s.jsxs)(eg.A, {
        title: t,
        className: ev.uW,
        children: [
            (0, s.jsx)(ex.A, {
                listRef: o,
                projects: c,
                onSelect: r,
                renderProjectActions: a,
                onProjectContextMenu: i,
            }),
            null != u ? (0, s.jsx)(eu, { onClick: u }) : null,
        ],
    });
}
function eN(e) {
    let t,
        { guildId: n, archiveImport: r } = e,
        {
            mine: a,
            shared: i,
            fetchState: o,
        } = ((t = (0, em.U)(() => ed.Ay.getOwnedProjects().filter((e) => ef(e, n)), [n])),
        {
            mine: t,
            shared: (0, em.U)(() => ed.Ay.getSharedProjects(n), [n]),
            fetchState: (0, F.bG)([ed.Ay], () => ed.Ay.getGuildProjectsFetchState(n), [n]),
        }),
        m = (0, F.yK)([ed.Ay], () => ed.Ay.getOwnedProjects().filter((e) => !ef(e, n)), [n]),
        { importArchive: f } = r,
        h = (0, x.yN)(l.useCallback((e) => f(e, "guild"), [f])),
        g = l.useCallback((e) => (0, A.Ay)(e.id, "home"), []),
        p = l.useCallback((e) => (0, s.jsx)(eh.S, { project: e, guildId: n }), [n]),
        v = l.useCallback((e, t) => (0, eh.V)(e, t, n), [n]),
        j = I.intl.string(S.default.BMn2lY),
        y = a.length > 0 || i.length > 0;
    return (0, s.jsxs)("aside", {
        className: ev.pz,
        "aria-label": j,
        children: [
            (0, s.jsxs)("div", {
                className: ev.wx,
                children: [
                    (0, s.jsx)(u.D, { variant: "heading-md/semibold", color: "text-strong", children: j }),
                    (0, s.jsx)(ea.A, { importing: r.importing, onClick: h.open }),
                    h.input,
                ],
            }),
            (0, s.jsxs)(c.Ip, {
                className: ev.XG,
                children: [
                    a.length > 0
                        ? (0, s.jsx)(
                              ej,
                              {
                                  title: I.intl.string(S.default["8LfMqp"]),
                                  projects: a,
                                  onSelect: g,
                                  renderProjectActions: p,
                                  onProjectContextMenu: v,
                              },
                              `${n}-mine`,
                          )
                        : null,
                    i.length > 0
                        ? (0, s.jsx)(
                              ej,
                              {
                                  title: I.intl.string(S.default.YHDMK6),
                                  projects: i,
                                  onSelect: g,
                                  renderProjectActions: p,
                                  onProjectContextMenu: v,
                              },
                              `${n}-shared`,
                          )
                        : null,
                    y || "error" !== o
                        ? y || "success" === o
                            ? !y && m.length > 0
                                ? (0, s.jsx)("div", {
                                      className: ev.E8,
                                      children: (0, s.jsx)(d.E, {
                                          variant: "text-sm/normal",
                                          color: "text-muted",
                                          children: I.intl.string(S.default["/I2lbz"]),
                                      }),
                                  })
                                : null
                            : (0, s.jsx)("div", { className: ev.E8, children: (0, s.jsx)(el.y, {}) })
                        : (0, s.jsxs)("div", {
                              className: ev.E8,
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
            m.length > 0
                ? (0, s.jsx)("div", {
                      className: ev.qr,
                      children: (0, s.jsx)(er.Q, {
                          variant: "secondary",
                          textVariant: "text-sm/medium",
                          text: I.intl.formatToPlainString(S.default.vnoMFE, { count: m.length }),
                          onClick: () => (0, A.Ay)(null),
                      }),
                  })
                : y || "success" !== o
                  ? null
                  : (0, s.jsx)(ep.A, {}),
        ],
    });
}
var ey = n(559106),
    eb = n(783977),
    ew = n(559647),
    eA = n(531685),
    eC = n(957071),
    eE = n(34595),
    eS = n(587157),
    eI = n(200160),
    eR = n(465410);
function ek(e) {
    let { prompts: t, paused: n } = e,
        { index: r, length: a } = (function (e, t) {
            let [n, s] = l.useState(() =>
                    t ? { index: 0, length: e[0].length, phase: "holding" } : { index: 0, length: 0, phase: "typing" },
                ),
                [r, a] = l.useState(t);
            t !== r && (a(t), t && s((t) => ({ ...t, length: e[t.index].length, phase: "holding" })));
            let i = l.useRef(n.length);
            l.useLayoutEffect(() => {
                i.current = n.length;
            });
            let { index: c, phase: o } = n;
            return (
                l.useEffect(() => {
                    if (t) return;
                    let n = e[c].length;
                    if ("holding" === o) {
                        let e = window.setTimeout(() => s((e) => ({ ...e, phase: "deleting" })), 1400);
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
                                f = l ? Math.min(n, r + o) : Math.max(0, r - o);
                            (f !== u && ((u = f), s((e) => ({ ...e, length: f }))),
                                l && f === n
                                    ? s((e) => ({ ...e, length: f, phase: "holding" }))
                                    : l || 0 !== f
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
        className: eI.RC,
        children: t[r].slice(0, a),
    });
}
function eP(e) {
    let { prompts: t, paused: n } = e,
        r = (function (e, t) {
            let [n, s] = l.useState(0);
            return (
                l.useEffect(() => {
                    if (t || e < 2) return;
                    let n = window.setInterval(() => s((t) => (t + 1) % e), 2e3);
                    return () => window.clearInterval(n);
                }, [e, 2e3, t]),
                n
            );
        })(t.length, n);
    return (0, s.jsx)(d.E, { variant: "text-md/normal", color: "text-muted", className: eI.RC, children: t[r] });
}
function eL(e) {
    let { boxFocused: t } = e,
        n = l.useMemo(
            () =>
                H().map((e) => {
                    let { shortPrompt: t } = e;
                    return t;
                }),
            [],
        ),
        r = (0, F.bG)([G.Ay], () => G.Ay.useReducedMotion),
        a = (0, F.bG)([eA.A], () => eA.A.isFocused()),
        i = t || !a;
    return (0, s.jsx)("div", {
        className: eI.qf,
        "aria-hidden": !0,
        children: r ? (0, s.jsx)(eP, { prompts: n, paused: i }) : (0, s.jsx)(ek, { prompts: n, paused: i }),
    });
}
function eO(e) {
    let {
            idea: t,
            inputRef: n,
            onIdeaChange: r,
            onSubmit: i,
            submitting: c,
            submitDisabled: o,
            error: u,
            modelSettings: m,
            onModelSettingsChange: f,
            attachments: h,
            onImport: x,
        } = e,
        [g, p] = l.useState(!1),
        v = l.useRef(null),
        j = l.useId(),
        N = "" !== t,
        { addFiles: b, pasteFiles: w, removeAttachment: A } = h;
    l.useLayoutEffect(() => {
        let e = n.current;
        null != e &&
            (e.scrollHeight <= e.clientHeight && (e.style.height = "auto"), (e.style.height = `${e.scrollHeight}px`));
    }, [t, n]);
    let C = l.useCallback(
        (e) => {
            "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), o || i());
        },
        [o, i],
    );
    return (0, s.jsxs)("div", {
        className: eI.kL,
        children: [
            (0, s.jsxs)("div", {
                ref: v,
                className: a()(eI.yk, { [eI.Sl]: null != u }),
                children: [
                    (0, s.jsxs)(d.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        className: eI.Ox,
                        children: [
                            (0, s.jsx)(ey.vN, {
                                ringTarget: v,
                                ringClassName: eI.Rg,
                                children: (0, s.jsx)("textarea", {
                                    ref: n,
                                    className: a()(eI.hF, eR.yL),
                                    rows: 3,
                                    value: t,
                                    "aria-label": I.intl.string(S.default.cwrS1O),
                                    "aria-invalid": null != u,
                                    "aria-describedby": null != u ? j : void 0,
                                    onChange: (e) => r(e.currentTarget.value),
                                    onKeyDown: C,
                                    onPaste: (e) => w(e),
                                    onFocus: () => p(!0),
                                    onBlur: () => p(!1),
                                }),
                            }),
                            N ? null : (0, s.jsx)(eL, { boxFocused: g }),
                        ],
                    }),
                    h.attachments.length > 0
                        ? (0, s.jsx)("div", {
                              className: eI.ZO,
                              children: h.attachments.map((e) => {
                                  let { draft: t } = e;
                                  return (0, s.jsx)(eE.Nl, { draft: t, onRemove: A }, t.localId);
                              }),
                          })
                        : null,
                    (0, s.jsxs)("div", {
                        className: eI.KE,
                        children: [
                            (0, s.jsx)(eC.A, {
                                navId: "conjure-home-attach",
                                disabled: c,
                                buttonClassName: eI.gb,
                                iconClassName: eI.Xv,
                                onAddFiles: b,
                                onImport: x,
                            }),
                            (0, s.jsxs)("div", {
                                className: eI.Rc,
                                children: [
                                    (0, s.jsx)(eS.A, {
                                        settings: m ?? y.A4,
                                        tiers: y.lO,
                                        choices: (0, y.Pu)(),
                                        disabled: c,
                                        onChange: f,
                                        className: eI.gb,
                                        icon: (0, s.jsx)(eb.R, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, s.jsx)(D.$, {
                                        variant: "primary",
                                        size: "sm",
                                        icon: ew.SendMessageIcon,
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
var e_ = n(628284),
    eT = n(369606),
    eU = n(926268),
    eM = n(406810),
    eF = n(707554);
let eD = [
    { id: "apps", title: S.default["bvcT/Q"], description: S.default.ArcJqa },
    { id: "bots", title: S.default.KBHZfO, description: S.default.qNmKhG },
    { id: "games", title: S.default["JU01/4"], description: S.default.FXwLsv },
    { id: "automod", title: S.default["+EKk4D"], description: S.default.fpXK3z },
    { id: "overlay-widgets", title: S.default.uVOH1p, description: S.default.zm7y9u },
    { id: "profile-widgets", title: S.default.GUb2zA, description: S.default["v+F6qW"] },
];
var ez = n(651346);
function eG(e) {
    let { className: t } = e;
    return (0, s.jsx)("span", { className: a()(ez.n8, t) });
}
let eq = {
    apps: function () {
        return (0, s.jsxs)("div", {
            className: ez.x,
            children: [
                (0, s.jsxs)("div", {
                    className: ez.My,
                    children: [
                        (0, s.jsx)("span", { className: ez._w }),
                        (0, s.jsx)("span", { className: ez._w }),
                        (0, s.jsx)("span", { className: ez._w }),
                    ],
                }),
                (0, s.jsx)(eG, { className: ez.Lm }),
                (0, s.jsx)("div", {
                    className: ez.Oh,
                    children: [0, 1, 2].map((e) =>
                        (0, s.jsxs)(
                            "div",
                            {
                                className: ez.ZW,
                                children: [
                                    (0, s.jsx)("span", { className: ez.NU }),
                                    0 === e
                                        ? (0, s.jsx)(e_.y, {
                                              size: "xs",
                                              color: z.A.colors.ICON_BRAND,
                                              className: ez._6,
                                          })
                                        : null,
                                    (0, s.jsx)(eG, { className: ez.Eg }),
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
            className: a()(ez.x, ez.jG),
            children: [
                (0, s.jsx)("span", { className: a()(ez.gg, ez.K1) }),
                (0, s.jsx)("span", { className: a()(ez.gg, ez.W2) }),
                (0, s.jsx)("span", { className: a()(ez.Fs, ez.A$) }),
                (0, s.jsx)("span", { className: a()(ez.Fs, ez.eP) }),
                (0, s.jsx)("span", { className: a()(ez.Fs, ez.kc) }),
                (0, s.jsx)("span", { className: a()(ez.Fs, ez.OE) }),
                (0, s.jsx)("span", { className: ez.OC }),
                (0, s.jsxs)("div", {
                    className: ez.si,
                    children: [
                        (0, s.jsx)(eT.TrophyIcon, { size: "xxs", color: z.A.colors.ICON_FEEDBACK_WARNING }),
                        (0, s.jsx)(d.E, { variant: "text-xs/bold", color: "none", className: ez.o9, children: 128 }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: ez.KQ,
                    children: [
                        (0, s.jsx)(eU.HeartIcon, { size: "xxs", color: z.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, s.jsx)(eU.HeartIcon, { size: "xxs", color: z.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, s.jsx)(eU.HeartIcon, { size: "xxs", color: z.A.colors.ICON_OVERLAY_LIGHT }),
                    ],
                }),
            ],
        });
    },
    bots: function () {
        return (0, s.jsxs)("div", {
            className: ez.x,
            children: [
                (0, s.jsxs)("div", {
                    className: ez.$y,
                    children: [(0, s.jsx)("span", { className: ez.m$ }), (0, s.jsx)(eG, { className: ez.Md })],
                }),
                (0, s.jsxs)("div", {
                    className: ez.iU,
                    children: [
                        (0, s.jsx)("span", {
                            className: a()(ez.my, ez.FY),
                            children: (0, s.jsx)(X.RobotIcon, { size: "xs", color: z.A.colors.ICON_OVERLAY_LIGHT }),
                        }),
                        (0, s.jsxs)("div", {
                            className: ez.OS,
                            children: [
                                (0, s.jsxs)("div", {
                                    className: ez.f9,
                                    children: [
                                        (0, s.jsx)(eG, { className: ez.iE }),
                                        (0, s.jsx)(d.E, {
                                            variant: "text-xs/bold",
                                            color: "none",
                                            className: ez.AO,
                                            children: I.intl.string(S.default.VlgiLf),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(eG, { className: ez.xs }),
                                (0, s.jsx)(eG, { className: ez.Md }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    "profile-widgets": function () {
        return (0, s.jsxs)("div", {
            className: a()(ez.x, ez.ME),
            children: [
                (0, s.jsx)("span", { className: ez.CK }),
                (0, s.jsxs)("div", {
                    className: ez.kI,
                    children: [
                        (0, s.jsx)("span", { className: a()(ez.my, ez.jU) }),
                        (0, s.jsx)(eG, { className: ez.iE }),
                        (0, s.jsxs)("div", {
                            className: ez.Wy,
                            children: [
                                (0, s.jsx)("div", {
                                    className: ez.M1,
                                    children: [0, 1].map((e) =>
                                        (0, s.jsxs)(
                                            "div",
                                            {
                                                className: ez.dJ,
                                                children: [
                                                    (0, s.jsx)(eG, { className: ez.cR }),
                                                    (0, s.jsx)(eG, { className: ez.Zh }),
                                                ],
                                            },
                                            e,
                                        ),
                                    ),
                                }),
                                (0, s.jsx)("div", {
                                    className: ez.bW,
                                    children: [0, 1, 2, 3, 4, 5].map((e) =>
                                        (0, s.jsx)("span", { className: ez.QR }, e),
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
            className: ez.JH,
            children: [
                (0, s.jsx)("span", { className: ez.rx }),
                (0, s.jsx)("span", { className: ez.ny }),
                (0, s.jsx)("span", { className: ez.ZH }),
                (0, s.jsx)("div", {
                    className: ez.$Y,
                    children: [0, 1, 2].map((e) =>
                        (0, s.jsxs)(
                            "div",
                            {
                                className: ez.fn,
                                children: [
                                    (0, s.jsx)("span", { className: a()(ez._h, { [ez.zY]: 0 === e }) }),
                                    (0, s.jsx)(eG, { className: ez.Av }),
                                ],
                            },
                            e,
                        ),
                    ),
                }),
                (0, s.jsxs)("div", {
                    className: ez.Y5,
                    children: [
                        (0, s.jsx)(eM.ClockIcon, { size: "xxs", color: z.A.colors.ICON_OVERLAY_LIGHT }),
                        (0, s.jsx)(eG, { className: ez.jB }),
                    ],
                }),
            ],
        });
    },
    automod: function () {
        return (0, s.jsxs)("div", {
            className: ez.x,
            children: [
                (0, s.jsxs)("div", {
                    className: ez.iU,
                    children: [
                        (0, s.jsx)("span", { className: ez.my }),
                        (0, s.jsxs)("div", {
                            className: ez.OS,
                            children: [
                                (0, s.jsx)(eG, { className: ez.iE }),
                                (0, s.jsx)(eG, { className: a()(ez.xs, ez.pc) }),
                                (0, s.jsx)(eG, { className: a()(ez.Md, ez.pc) }),
                            ],
                        }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: ez.jC,
                    children: [
                        (0, s.jsx)(J.ShieldIcon, { size: "sm", color: z.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, s.jsxs)("div", {
                            className: ez.qQ,
                            children: [
                                (0, s.jsx)(eG, { className: a()(ez.Md, ez.k8) }),
                                (0, s.jsx)(eG, { className: a()(ez.nq, ez.k8) }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
};
function eH(e) {
    let { id: t } = e,
        n = eq[t];
    return (0, s.jsx)(n, {});
}
let eW = l.memo(function () {
    let e = l.useId();
    return (0, s.jsx)("section", {
        className: ez.GG,
        "aria-labelledby": e,
        children: (0, s.jsx)(eF.F, {
            component: (0, s.jsx)(u.D, {
                id: e,
                variant: "heading-lg/medium",
                children: I.intl.string(S.default.IiQEVd),
            }),
            children: (0, s.jsx)("ul", {
                className: ez.Vg,
                children: eD.map((e) => {
                    let { id: t, title: n, description: l } = e;
                    return (0, s.jsxs)(
                        "li",
                        {
                            className: ez.Vs,
                            children: [
                                (0, s.jsx)("div", {
                                    className: ez.Tn,
                                    "aria-hidden": !0,
                                    children: (0, s.jsx)(eH, { id: t }),
                                }),
                                (0, s.jsxs)("div", {
                                    className: ez.pG,
                                    children: [
                                        (0, s.jsx)(u.D, {
                                            variant: "text-md/semibold",
                                            color: "text-strong",
                                            children: I.intl.string(n),
                                        }),
                                        (0, s.jsx)(d.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: I.intl.string(l),
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
var e$ = n(666476),
    eB = n(287111),
    eK = n(177676);
let eJ = 1;
function eX(e) {
    let t = (0, eK.Ft)(e),
        n = { localId: eJ++, name: e.name, contentType: t };
    if ("too-large" === (0, eK.R9)(e, t))
        return { file: e, draft: { ...n, status: "error", errorText: (0, eB.iW)(t) } };
    let s = e$.XB.has(t) ? URL.createObjectURL(e) : void 0;
    return { file: e, draft: { ...n, status: "ready", previewUrl: s } };
}
function eY(e) {
    null != e.draft.previewUrl && URL.revokeObjectURL(e.draft.previewUrl);
}
async function eZ(e, t) {
    if ("fits" === (0, eK.R9)(t, (0, eK.Ft)(t))) return (0, p.vX)(e, t);
    let n = await (0, eK.th)(t);
    if (null == n) throw Error("attachment over its size limit");
    return (0, p.vX)(e, n);
}
var eQ = n(698638),
    eV = n(606128),
    e0 = n(260024);
class e1 extends Error {}
function e2(e) {
    let { guildId: t, onConjurePage: n = !1 } = e,
        [r, j] = l.useState(() => O.A.getHomePrompt());
    (0, P.N$)(r);
    let y = (0, _.A)(n ? "home" : null),
        [b, F] = l.useState(!1),
        [D, z] = l.useState(null),
        [G, q] = l.useState(null),
        [W, $] = l.useState(() => T.w.get(U) ?? null ?? !0),
        B = l.useRef(null),
        K = l.useMemo(() => H().map((e) => ({ ...e, image: Y[e.id] })), []),
        J = "user" === (0, f.o)().get("target") || n,
        X = (function () {
            let [e, t] = l.useState([]),
                n = l.useRef(e);
            (l.useLayoutEffect(() => {
                n.current = e;
            }),
                l.useEffect(() => () => n.current.forEach(eY), []));
            let s = l.useCallback((e) => {
                    if (0 === e.length) return;
                    let s = e.map(eX);
                    ((n.current = [...n.current, ...s]), t(n.current));
                }, []),
                r = (0, eK.sm)(s),
                a = l.useCallback((e) => {
                    let s = n.current.find((t) => t.draft.localId === e);
                    null != s && (eY(s), (n.current = n.current.filter((e) => e !== s)), t(n.current));
                }, []),
                i = l.useCallback(() => {
                    (n.current.forEach(eY), (n.current = []), t(n.current));
                }, []),
                c = l.useMemo(
                    () =>
                        (function (e) {
                            if (e.length <= e$.lN) return e;
                            let t = (0, eK.XV)();
                            return e.map((e, n) =>
                                n < e$.lN || "error" === e.draft.status
                                    ? e
                                    : { ...e, draft: { ...e.draft, status: "error", errorText: t } },
                            );
                        })(e),
                    [e],
                );
            return {
                attachments: c,
                addFiles: s,
                pasteFiles: r,
                removeAttachment: a,
                clear: i,
                hasErrors: c.some((e) => "error" === e.draft.status),
            };
        })(),
        { attachments: Z, addFiles: Q, clear: V } = X,
        ee = (function (e) {
            let { guildId: t, modelSettings: n } = e,
                [s, r] = l.useState(!1),
                a = l.useRef(!1);
            return {
                importing: s,
                importArchive: l.useCallback(
                    async (e, s) => {
                        if (a.current) return;
                        let l = (0, x.vt)(e);
                        if (null != l) return void (0, g.P0)({ text: l, variant: "critical" });
                        ((a.current = !0), r(!0));
                        try {
                            let l = (await (0, E.A)(e, t)) ?? s,
                                r = await w({
                                    guildId: t,
                                    installScope: l,
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
                            (0, A.Ay)(r, "create");
                        } catch (e) {
                            (0, g.P0)({
                                text: e instanceof R ? I.intl.string(S.default["Q+l4Hv"]) : (0, v.mG)(e),
                                variant: "critical",
                            });
                        } finally {
                            ((a.current = !1), r(!1));
                        }
                    },
                    [t, n],
                ),
            };
        })({ guildId: t, modelSettings: G }),
        { importArchive: et } = ee,
        en = b || ee.importing,
        el = "" !== r.trim() || Z.length > 0,
        er = en || !el || X.hasErrors,
        ea = (0, x.yN)(l.useCallback((e) => et(e, J ? "user" : null), [et, J])),
        ei = l.useCallback((e) => Q(Array.from(e)), [Q]);
    (0, M.p)(B);
    let ec = l.useCallback((e) => {
            (j(e), (0, L.fZ)(e), z(null));
        }, []),
        eo = l.useCallback(
            (e) => {
                ec(e);
                let t = B.current;
                null != t && (t.focus(), t.setSelectionRange(e.length, e.length));
            },
            [ec],
        ),
        eu = l.useRef(!1),
        ed = l.useCallback(async () => {
            let e = r.trim();
            if (("" !== e || 0 !== Z.length) && !eu.current) {
                ((eu.current = !0), F(!0), z(null));
                try {
                    let s = await w({
                        guildId: t,
                        installScope: null,
                        prompt: e,
                        modelSettings: G,
                        start: async (s) => {
                            let l = [];
                            if (Z.length > 0)
                                try {
                                    l = await Promise.all(
                                        Z.map((e) => {
                                            let { file: t } = e;
                                            return eZ(s, t);
                                        }),
                                    );
                                } catch {
                                    throw (await (0, N.xx)(s).catch(() => void 0), new e1());
                                }
                            ((0, C.P6)(s, e, l, n ? void 0 : t), V());
                        },
                    });
                    (j(""), (0, L.fZ)(""), (eu.current = !1), F(!1), (0, A.Ay)(s, "create"));
                } catch (e) {
                    (z(e instanceof e1 ? I.intl.string(S.default["903H7m"]) : (0, v.mG)(e)), (eu.current = !1), F(!1));
                }
            }
        }, [r, G, t, n, Z, V]),
        em = l.useCallback((e) => {
            (T.w.set(U, e), $(e));
        }, []),
        ef = I.intl.string(W ? S.default.kar7jh : S.default.WSc5Y2);
    return (0, s.jsx)("div", {
        className: a()(e0.MY, eV.T),
        children: (0, s.jsxs)("div", {
            className: e0.Zp,
            children: [
                (0, s.jsxs)("main", {
                    className: e0.iW,
                    children: [
                        en
                            ? null
                            : (0, s.jsx)(m.A, {
                                  title: I.intl.string(S.default.gy7byi),
                                  description: I.intl.string(S.default["dkv/WO"]),
                                  icons: eQ.ir,
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
                                      className: e0.FW,
                                      tooltip: ef,
                                      "aria-label": ef,
                                      selected: W,
                                      onClick: () => em(!W),
                                  }),
                              }),
                        (0, s.jsx)(c.Ip, {
                            ref: y,
                            className: e0.XG,
                            children: (0, s.jsxs)("div", {
                                className: e0.Qs,
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: a()(e0.Lv, { [e0.$O]: n }),
                                        children: [
                                            (0, s.jsxs)("div", {
                                                className: e0.ZK,
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
                                                        className: e0.DD,
                                                        children: I.intl.string(S.default.doYpEy),
                                                    }),
                                                    (0, s.jsx)(d.E, {
                                                        variant: "text-md/normal",
                                                        color: "text-strong",
                                                        className: e0.VA,
                                                        children: I.intl.string(S.default.BH58fD),
                                                    }),
                                                ],
                                            }),
                                            (0, s.jsxs)("div", {
                                                className: e0.ZK,
                                                children: [
                                                    (0, s.jsx)(eO, {
                                                        idea: r,
                                                        inputRef: B,
                                                        onIdeaChange: ec,
                                                        onSubmit: ed,
                                                        submitting: en,
                                                        submitDisabled: er,
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
                                    (0, s.jsx)(eW, {}),
                                ],
                            }),
                        }),
                    ],
                }),
                W && !n ? (0, s.jsx)(eN, { guildId: t, archiveImport: ee }) : null,
            ],
        }),
    });
}
