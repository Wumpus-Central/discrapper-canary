s.d(t, { A: () => tt });
var n = s(477900),
    a = s(582128),
    l = s(503698),
    r = s.n(l),
    i = s(97893),
    c = s(95362),
    o = s(805251),
    d = s(534514),
    u = s(834730),
    m = s(65593),
    h = s(742589),
    f = s(71393),
    x = s(949757),
    g = s(858899),
    v = s(989145),
    j = s(639519),
    p = s(540665),
    N = s(233470),
    y = s(391712);
async function b(e) {
    let { start: t, ...s } = e,
        n = await (async function (e) {
            let { guildId: t, installScope: s, prompt: n, modelSettings: a, templateId: l } = e,
                r = await (0, N.gA)(
                    null != s
                        ? { guild_id: t, install_scope: s }
                        : { guild_id: t, auto_install_scope: !0, prompt: (n ?? "").slice(0, 4e3) },
                );
            return ((0, p.ensureConnection)(r, { templateId: l }), (0, p.r2)(r, a ?? y.A4), r);
        })(s);
    return (await t(n), n);
}
var A = s(381991),
    w = s(708679),
    E = s(363882),
    C = s(191850),
    I = s(792996);
class S extends Error {}
var P = s(705427),
    k = s(347111),
    L = s(120234),
    O = s(101766),
    M = s(506774);
let R = "ConjureProjectsPanelOpen";
var _ = s(246338);
let F = "conjure-home";
var D = s(89310),
    G = s(855986),
    T = s(89222),
    z = s(821609),
    H = s(646514),
    q = s(775602),
    K = s(486020);
function U() {
    return [
        {
            id: "server-calendar",
            category: "apps",
            shortPrompt: I.intl.string(C.default.qbaf5O),
            fullPrompt: I.intl.string(C.default.vo1ZBs),
            name: I.intl.string(C.default.Zx7B6B),
            authorAvatarSeed: "1",
        },
        {
            id: "cowboy-chat-bot",
            category: "chat_bot",
            shortPrompt: I.intl.string(C.default.i0y7Ld),
            fullPrompt: I.intl.string(C.default.Hddwvt),
            name: I.intl.string(C.default.dLyihE),
            authorAvatarSeed: "2",
        },
        {
            id: "library-voice-channel",
            category: "games",
            shortPrompt: I.intl.string(C.default.vYjIS6),
            fullPrompt: I.intl.string(C.default["4pASEG"]),
            name: I.intl.string(C.default.e8Jbz3),
            authorAvatarSeed: "3",
        },
        {
            id: "flappy-discord",
            category: "games",
            shortPrompt: I.intl.string(C.default.gtX7tS),
            fullPrompt: I.intl.string(C.default["Sfa50+"]),
            name: I.intl.string(C.default.Tbag5k),
            authorAvatarSeed: "4",
        },
        {
            id: "no-yelling",
            category: "automod",
            shortPrompt: I.intl.string(C.default.H8fuGK),
            fullPrompt: I.intl.string(C.default.XuiHpi),
            name: I.intl.string(C.default["5XJ55E"]),
            authorAvatarSeed: "5",
        },
        {
            id: "what-should-we-play",
            category: "apps",
            shortPrompt: I.intl.string(C.default.tZv5cM),
            fullPrompt: I.intl.string(C.default.qd87yI),
            name: I.intl.string(C.default["7KvZ91"]),
            authorAvatarSeed: "6",
        },
        {
            id: "kd-tracker",
            category: "overlay_widget",
            shortPrompt: I.intl.string(C.default.tqEROk),
            fullPrompt: I.intl.string(C.default.yym7Yj),
            name: I.intl.string(C.default.vRpB6m),
            authorAvatarSeed: "7",
        },
    ];
}
var W = s(687966),
    $ = s(323384),
    B = s(632015),
    Y = s(31300),
    V = s(231483),
    X = s(430392);
let Z = {
        "server-calendar": "/assets/1d701ea289cc99e6.svg",
        "cowboy-chat-bot": "/assets/56e489e9c5907add.svg",
        "library-voice-channel": "/assets/5813258afff68797.svg",
        "flappy-discord": "/assets/b43659b526f2e936.svg",
        "no-yelling": "/assets/54b5cda688395473.svg",
        "what-should-we-play": "/assets/fcb9220c49b6460a.svg",
        "kd-tracker": "/assets/05c0d07952b2d93f.svg",
    },
    J = {
        games: W.GameControllerIcon,
        apps: $.AppsIcon,
        profile_widget: B.WidgetsIcon,
        overlay_widget: Y.ScreenIcon,
        automod: V.ShieldIcon,
        chat_bot: X.RobotIcon,
    };
var Q = s(621466);
let ee = "data-conjure-carousel-card";
var et = s(19493);
function es(e) {
    e.preventDefault();
}
let en = a.memo(function (e) {
        let { inspiration: t, onCopyPrompt: s, repeat: a = !1 } = e,
            l = J[t.category];
        return (0, n.jsxs)("li", {
            className: et.AS,
            "aria-hidden": !!a || void 0,
            [ee]: "",
            children: [
                (0, n.jsxs)("div", {
                    className: et.rl,
                    children: [
                        (0, n.jsx)("img", {
                            className: et.my,
                            src: (0, K.AE)(void 0, t.authorAvatarSeed),
                            alt: "",
                            "aria-hidden": !0,
                        }),
                        (0, n.jsx)(u.E, {
                            variant: "body-sm/medium",
                            color: "text-strong",
                            className: et.Tq,
                            children: t.shortPrompt,
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: et.Nr,
                    children: [
                        (0, n.jsxs)("div", {
                            className: et.xn,
                            children: [
                                (0, n.jsx)("img", { className: et.q_, src: t.image, alt: "" }),
                                (0, n.jsx)("div", {
                                    className: et.o1,
                                    children: (0, n.jsx)(z.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: I.intl.string(C.default["6CQjTy"]),
                                        tabIndex: a ? -1 : void 0,
                                        onMouseDown: a ? es : void 0,
                                        onClick: () => s(t.fullPrompt),
                                    }),
                                }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: et.qr,
                            children: [
                                (0, n.jsx)("div", {
                                    className: et.Yl,
                                    "aria-hidden": !0,
                                    children: (0, n.jsx)(l, { size: "md", color: H.A.colors.ICON_STRONG }),
                                }),
                                (0, n.jsxs)("div", {
                                    className: et.PJ,
                                    children: [
                                        (0, n.jsx)(u.E, {
                                            variant: "body-md/semibold",
                                            color: "text-strong",
                                            lineClamp: 1,
                                            children: t.name,
                                        }),
                                        (0, n.jsx)(u.E, {
                                            variant: "body-sm/normal",
                                            color: "text-subtle",
                                            lineClamp: 1,
                                            children: (function (e) {
                                                switch (e) {
                                                    case "games":
                                                        return I.intl.string(C.default["JU01/4"]);
                                                    case "apps":
                                                        return I.intl.string(C.default["bvcT/Q"]);
                                                    case "profile_widget":
                                                        return I.intl.string(C.default.GUb2zA);
                                                    case "overlay_widget":
                                                        return I.intl.string(C.default.uVOH1p);
                                                    case "automod":
                                                        return I.intl.string(C.default["+EKk4D"]);
                                                    case "chat_bot":
                                                        return I.intl.string(C.default.KBHZfO);
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
    ea = a.memo(function (e) {
        var t;
        let { inspirations: s, onCopyPrompt: l } = e,
            r = (0, G.bG)([q.Ay], () => q.Ay.useReducedMotion),
            i = a.useRef(null),
            c = a.useRef(null),
            o = (function (e, t, s, n) {
                let [l, r] = a.useState(1);
                return (
                    a.useLayoutEffect(() => {
                        let a = e.current,
                            l = t.current;
                        if (!n || null == a || null == l || 0 === s) return;
                        function i() {
                            if (null == a || null == l) return;
                            let e = l.querySelector(`[${ee}]`);
                            if (null == e) return;
                            let t = parseFloat(getComputedStyle(l).columnGap),
                                n = e.offsetWidth + (Number.isNaN(t) ? 0 : t);
                            n <= 0 || r(Math.max(1, Math.ceil((a.clientWidth + 2 * n) / (n * s))));
                        }
                        i();
                        let c = new ResizeObserver(i);
                        return (c.observe(a), () => c.disconnect());
                    }, [e, t, s, n]),
                    n ? l : 1
                );
            })(i, c, s.length, !r);
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
                    d = 0,
                    u = 0,
                    m = null,
                    h = !1,
                    f = !1,
                    x = document.hasFocus(),
                    g = !0;
                function v() {
                    if (null == e || null == s) return;
                    a = (n = Array.from(s.querySelectorAll(`[${ee}]`))).map((e) => e.offsetLeft + e.offsetWidth / 2);
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
                            u,
                            m = a[s] - t;
                        r > 0 && (m = ((((m - d * o + (n = r) / 2) % n) + n) % n) - n / 2);
                        let { angleDeg: h, dropPx: f } =
                            ((i = m / l),
                            (u =
                                (l / ((4 * Math.PI) / 180)) *
                                (1 - Math.cos(((c = Math.max(-12, Math.min(12, 4 * i))) * Math.PI) / 180))),
                            { angleDeg: c, dropPx: u });
                        (e.style.setProperty("--custom-conjure-home-carousel-shift", `${t + m - a[s]}px`),
                            e.style.setProperty("--custom-conjure-home-carousel-angle", `${h}deg`),
                            e.style.setProperty("--custom-conjure-home-carousel-drop", `${f}px`));
                    });
                }
                function p(e) {
                    (null != m && r > 0 && (d = (d + (30 * (e - m)) / 1e3) % r),
                        (m = e),
                        j(),
                        (u = requestAnimationFrame(p)));
                }
                function N() {
                    let e = t && !h && !f && x && g;
                    e && 0 === u
                        ? ((m = null), (u = requestAnimationFrame(p)))
                        : e || 0 === u || (cancelAnimationFrame(u), (u = 0));
                }
                function y() {
                    ((h = !0), N());
                }
                function b() {
                    ((h = !1), N());
                }
                function A() {
                    ((f = !0), N());
                }
                function w(t) {
                    ((f = (0, Q.vq)(t.relatedTarget, Node) && e?.contains(t.relatedTarget) === !0), N());
                }
                function E() {
                    ((x = !0), N());
                }
                function C() {
                    ((x = !1), N());
                }
                (v(), j(), N());
                let I = new ResizeObserver(() => {
                    (v(), j());
                });
                (I.observe(e), I.observe(s));
                let S = new IntersectionObserver((e) => {
                    let [t] = e;
                    ((g = t.isIntersecting), N());
                });
                return (
                    S.observe(e),
                    e.addEventListener("scroll", j, { passive: !0 }),
                    e.addEventListener("pointerenter", y),
                    e.addEventListener("pointerleave", b),
                    e.addEventListener("focusin", A),
                    e.addEventListener("focusout", w),
                    window.addEventListener("focus", E),
                    window.addEventListener("blur", C),
                    () => {
                        (cancelAnimationFrame(u),
                            I.disconnect(),
                            S.disconnect(),
                            e.removeEventListener("scroll", j),
                            e.removeEventListener("pointerenter", y),
                            e.removeEventListener("pointerleave", b),
                            e.removeEventListener("focusin", A),
                            e.removeEventListener("focusout", w),
                            window.removeEventListener("focus", E),
                            window.removeEventListener("blur", C));
                    }
                );
            }, [i, c, t]),
            (0, n.jsx)("section", {
                ref: i,
                className: r ? et.vV : et.Dk,
                "aria-label": I.intl.string(C.default.Qc4S39),
                children: (0, n.jsx)("ul", {
                    ref: c,
                    className: et.u4,
                    children: Array.from({ length: o }, (e, t) =>
                        s.map((e) =>
                            (0, n.jsx)(en, { inspiration: e, onCopyPrompt: l, repeat: t > 0 }, `${e.id}-${t}`),
                        ),
                    ),
                }),
            })
        );
    });
var el = s(289873),
    er = s(123292),
    ei = s(441935),
    ec = s(939249),
    eo = s(847374),
    ed = s(5127);
function eu(e) {
    let { onClick: t } = e;
    return (0, n.jsxs)(ec.D, {
        className: r()(ed.ap, ed.jP),
        onClick: t,
        children: [
            (0, n.jsx)("span", {
                className: ed.DW,
                children: (0, n.jsx)(eo.ChevronSmallDownIcon, { size: "sm", color: "currentColor" }),
            }),
            (0, n.jsx)(u.E, { variant: "body-md/medium", color: "none", children: I.intl.string(C.default.Im1k9X) }),
        ],
    });
}
var em = s(260498),
    eh = s(615890);
function ef(e, t) {
    return e.guild_id === t || e.preview_guild_id === t;
}
var ex = s(602991),
    eg = s(685105),
    ev = s(919485),
    ej = s(588359),
    ep = s(638693);
function eN(e) {
    let { title: t, projects: s, onSelect: l, renderProjectActions: r, onProjectContextMenu: i } = e,
        {
            visibleItems: c,
            listRef: o,
            showMore: d,
        } = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
                [s, n] = a.useState(8),
                l = Math.max(s, 8 * Math.ceil((t + 1) / 8)),
                r = a.useRef(null),
                i = a.useRef(null);
            return (a.useLayoutEffect(() => {
                if (null == i.current) return;
                let e = r.current?.children[i.current]?.querySelector('[role="button"], button');
                ((i.current = null), e?.focus());
            }, [l]),
            l >= e.length)
                ? { visibleItems: e, listRef: r, showMore: null }
                : {
                      visibleItems: e.slice(0, l),
                      listRef: r,
                      showMore: () => {
                          let t = l + 8;
                          (t >= e.length && (i.current = l), n(t));
                      },
                  };
        })(s);
    return (0, n.jsxs)(ev.A, {
        title: t,
        className: ep.uW,
        children: [
            (0, n.jsx)(eg.A, {
                listRef: o,
                projects: c,
                onSelect: l,
                renderProjectActions: r,
                onProjectContextMenu: i,
            }),
            null != d ? (0, n.jsx)(eu, { onClick: d }) : null,
        ],
    });
}
function ey(e) {
    let t,
        { guildId: s, archiveImport: l } = e,
        {
            mine: r,
            shared: i,
            fetchState: o,
        } = ((t = (0, eh.UU)(() => em.Ay.getOwnedProjects().filter((e) => ef(e, s)), [s])),
        {
            mine: t,
            shared: (0, eh.UU)(() => em.Ay.getSharedProjects(s), [s]),
            fetchState: (0, G.bG)([em.Ay], () => em.Ay.getGuildProjectsFetchState(s), [s]),
        }),
        m = (0, G.yK)([em.Ay], () => em.Ay.getOwnedProjects().filter((e) => !ef(e, s)), [s]),
        { importArchive: h } = l,
        f = (0, x.yN)(a.useCallback((e) => h(e, "guild"), [h])),
        g = a.useCallback((e) => (0, A.A)(e.id, "home"), []),
        v = a.useCallback((e) => (0, n.jsx)(ex.S, { project: e, guildId: s }), [s]),
        j = a.useCallback((e, t) => (0, ex.V)(e, t, s), [s]),
        p = I.intl.string(C.default.BMn2lY),
        y = r.length > 0 || i.length > 0;
    return (0, n.jsxs)("aside", {
        className: ep.pz,
        "aria-label": p,
        children: [
            (0, n.jsxs)("div", {
                className: ep.wx,
                children: [
                    (0, n.jsx)(d.D, { variant: "heading-sm/semibold", color: "text-strong", children: p }),
                    (0, n.jsx)(ei.A, { importing: l.importing, onClick: f.open }),
                    f.input,
                ],
            }),
            (0, n.jsxs)(c.Ip, {
                className: ep.XG,
                children: [
                    r.length > 0
                        ? (0, n.jsx)(
                              eN,
                              {
                                  title: I.intl.string(C.default["8LfMqp"]),
                                  projects: r,
                                  onSelect: g,
                                  renderProjectActions: v,
                                  onProjectContextMenu: j,
                              },
                              `${s}-mine`,
                          )
                        : null,
                    i.length > 0
                        ? (0, n.jsx)(
                              eN,
                              {
                                  title: I.intl.string(C.default.YHDMK6),
                                  projects: i,
                                  onSelect: g,
                                  renderProjectActions: v,
                                  onProjectContextMenu: j,
                              },
                              `${s}-shared`,
                          )
                        : null,
                    y || "error" !== o
                        ? y || "success" === o
                            ? !y && m.length > 0
                                ? (0, n.jsx)("div", {
                                      className: ep.E8,
                                      children: (0, n.jsx)(u.E, {
                                          variant: "body-sm/normal",
                                          color: "text-muted",
                                          children: I.intl.string(C.default["/I2lbz"]),
                                      }),
                                  })
                                : null
                            : (0, n.jsx)("div", { className: ep.E8, children: (0, n.jsx)(el.y, {}) })
                        : (0, n.jsxs)("div", {
                              className: ep.E8,
                              children: [
                                  (0, n.jsx)(u.E, {
                                      variant: "body-sm/normal",
                                      color: "text-muted",
                                      children: I.intl.string(C.default.DJAPMO),
                                  }),
                                  (0, n.jsx)(z.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: I.intl.string(C.default["WFJ/vb"]),
                                      onClick: () => (0, N.listProjects)(s),
                                  }),
                              ],
                          }),
                ],
            }),
            m.length > 0
                ? (0, n.jsx)("div", {
                      className: ep.qr,
                      children: (0, n.jsx)(er.Q, {
                          variant: "secondary",
                          textVariant: "body-sm/medium",
                          text: I.intl.formatToPlainString(C.default.vnoMFE, { count: m.length }),
                          onClick: () => (0, A.A)(null),
                      }),
                  })
                : y || "success" !== o
                  ? null
                  : (0, n.jsx)(ej.A, {}),
        ],
    });
}
var eb = s(559106),
    eA = s(783977),
    ew = s(559647),
    eE = s(531685),
    eC = s(957071),
    eI = s(34595),
    eS = s(587157),
    eP = s(200160),
    ek = s(465410);
function eL(e) {
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
                        d = l,
                        u = 0,
                        m = 0;
                    return (
                        (u = requestAnimationFrame(function t(i) {
                            let o = Math.floor((i - r) / (a ? 14 : 4)),
                                h = a ? Math.min(s, l + o) : Math.max(0, l - o);
                            (h !== d && ((d = h), n((e) => ({ ...e, length: h }))),
                                a && h === s
                                    ? n((e) => ({ ...e, length: h, phase: "holding" }))
                                    : a || 0 !== h
                                      ? (u = requestAnimationFrame(t))
                                      : (m = window.setTimeout(
                                            () => n({ index: (c + 1) % e.length, length: 0, phase: "typing" }),
                                            250,
                                        )));
                        })),
                        () => {
                            (cancelAnimationFrame(u), window.clearTimeout(m));
                        }
                    );
                }, [e, t, c, o]),
                s
            );
        })(t, s);
    return (0, n.jsx)(u.E, {
        variant: "body-md/normal",
        color: "text-muted",
        className: eP.RC,
        children: t[l].slice(0, r),
    });
}
function eO(e) {
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
    return (0, n.jsx)(u.E, { variant: "body-md/normal", color: "text-muted", className: eP.RC, children: t[l] });
}
function eM(e) {
    let { boxFocused: t } = e,
        s = a.useMemo(
            () =>
                U().map((e) => {
                    let { shortPrompt: t } = e;
                    return t;
                }),
            [],
        ),
        l = (0, G.bG)([q.Ay], () => q.Ay.useReducedMotion),
        r = (0, G.bG)([eE.A], () => eE.A.isFocused()),
        i = t || !r;
    return (0, n.jsx)("div", {
        className: eP.qf,
        "aria-hidden": !0,
        children: l ? (0, n.jsx)(eO, { prompts: s, paused: i }) : (0, n.jsx)(eL, { prompts: s, paused: i }),
    });
}
function eR(e) {
    let {
            idea: t,
            inputRef: s,
            onIdeaChange: l,
            onSubmit: i,
            submitting: c,
            submitDisabled: o,
            error: d,
            modelSettings: m,
            onModelSettingsChange: h,
            attachments: f,
            onImport: x,
        } = e,
        [g, v] = a.useState(!1),
        j = a.useRef(null),
        p = a.useId(),
        N = "" !== t,
        { addFiles: b, pasteFiles: A, removeAttachment: w } = f;
    a.useLayoutEffect(() => {
        let e = s.current;
        null != e &&
            (e.scrollHeight <= e.clientHeight && (e.style.height = "auto"), (e.style.height = `${e.scrollHeight}px`));
    }, [t, s]);
    let E = a.useCallback(
        (e) => {
            "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), o || i());
        },
        [o, i],
    );
    return (0, n.jsxs)("div", {
        className: eP.kL,
        children: [
            (0, n.jsxs)("div", {
                ref: j,
                className: r()(eP.yk, { [eP.Sl]: null != d }),
                children: [
                    (0, n.jsxs)(u.E, {
                        variant: "body-md/normal",
                        color: "text-default",
                        className: eP.Ox,
                        children: [
                            (0, n.jsx)(eb.vN, {
                                ringTarget: j,
                                ringClassName: eP.Rg,
                                children: (0, n.jsx)("textarea", {
                                    ref: s,
                                    className: r()(eP.hF, ek.yL),
                                    rows: 3,
                                    value: t,
                                    "aria-label": I.intl.string(C.default.cwrS1O),
                                    "aria-invalid": null != d,
                                    "aria-describedby": null != d ? p : void 0,
                                    onChange: (e) => l(e.currentTarget.value),
                                    onKeyDown: E,
                                    onPaste: (e) => A(e),
                                    onFocus: () => v(!0),
                                    onBlur: () => v(!1),
                                }),
                            }),
                            N ? null : (0, n.jsx)(eM, { boxFocused: g }),
                        ],
                    }),
                    f.attachments.length > 0
                        ? (0, n.jsx)("div", {
                              className: eP.ZO,
                              children: f.attachments.map((e) => {
                                  let { draft: t } = e;
                                  return (0, n.jsx)(eI.Nl, { draft: t, onRemove: w }, t.localId);
                              }),
                          })
                        : null,
                    (0, n.jsxs)("div", {
                        className: eP.KE,
                        children: [
                            (0, n.jsx)(eC.A, {
                                navId: "conjure-home-attach",
                                disabled: c,
                                buttonClassName: eP.gb,
                                iconClassName: eP.Xv,
                                onAddFiles: b,
                                onImport: x,
                            }),
                            (0, n.jsxs)("div", {
                                className: eP.Rc,
                                children: [
                                    (0, n.jsx)(eS.A, {
                                        settings: m ?? y.A4,
                                        tiers: y.lO,
                                        choices: (0, y.Pu)(),
                                        disabled: c,
                                        onChange: h,
                                        className: eP.gb,
                                        icon: (0, n.jsx)(eA.FiltersHorizontalIcon, {
                                            size: "refresh_sm",
                                            color: "currentColor",
                                        }),
                                    }),
                                    (0, n.jsx)(z.$, {
                                        variant: "primary",
                                        size: "sm",
                                        icon: ew.SendMessageIcon,
                                        text: I.intl.string(C.default.bNtzxp),
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
                      id: p,
                      variant: "body-sm/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      children: d,
                  })
                : null,
        ],
    });
}
var e_ = s(628284),
    eF = s(369606),
    eD = s(926268),
    eG = s(406810),
    eT = s(707554);
let ez = [
    { id: "apps", title: C.default["bvcT/Q"], description: C.default.ArcJqa },
    { id: "bots", title: C.default.KBHZfO, description: C.default.qNmKhG },
    { id: "games", title: C.default["JU01/4"], description: C.default.FXwLsv },
    { id: "automod", title: C.default["+EKk4D"], description: C.default.fpXK3z },
    { id: "overlay-widgets", title: C.default.uVOH1p, description: C.default.zm7y9u },
    { id: "profile-widgets", title: C.default.GUb2zA, description: C.default["v+F6qW"] },
];
var eH = s(651346);
function eq(e) {
    let { className: t } = e;
    return (0, n.jsx)("span", { className: r()(eH.n8, t) });
}
let eK = {
    apps: function () {
        return (0, n.jsxs)("div", {
            className: eH.x,
            children: [
                (0, n.jsxs)("div", {
                    className: eH.My,
                    children: [
                        (0, n.jsx)("span", { className: eH._w }),
                        (0, n.jsx)("span", { className: eH._w }),
                        (0, n.jsx)("span", { className: eH._w }),
                    ],
                }),
                (0, n.jsx)(eq, { className: eH.Lm }),
                (0, n.jsx)("div", {
                    className: eH.Oh,
                    children: [0, 1, 2].map((e) =>
                        (0, n.jsxs)(
                            "div",
                            {
                                className: eH.ZW,
                                children: [
                                    (0, n.jsx)("span", { className: eH.NU }),
                                    0 === e
                                        ? (0, n.jsx)(e_.CircleCheckIcon, {
                                              size: "xs",
                                              color: H.A.colors.ICON_BRAND,
                                              className: eH._6,
                                          })
                                        : null,
                                    (0, n.jsx)(eq, { className: eH.Eg }),
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
            className: r()(eH.x, eH.jG),
            children: [
                (0, n.jsx)("span", { className: r()(eH.gg, eH.K1) }),
                (0, n.jsx)("span", { className: r()(eH.gg, eH.W2) }),
                (0, n.jsx)("span", { className: r()(eH.Fs, eH.A$) }),
                (0, n.jsx)("span", { className: r()(eH.Fs, eH.eP) }),
                (0, n.jsx)("span", { className: r()(eH.Fs, eH.kc) }),
                (0, n.jsx)("span", { className: r()(eH.Fs, eH.OE) }),
                (0, n.jsx)("span", { className: eH.OC }),
                (0, n.jsxs)("div", {
                    className: eH.si,
                    children: [
                        (0, n.jsx)(eF.TrophyIcon, { size: "xxs", color: H.A.colors.ICON_FEEDBACK_WARNING }),
                        (0, n.jsx)(u.E, {
                            variant: "body-xs/semibold",
                            color: "none",
                            className: eH.o9,
                            children: 128,
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: eH.KQ,
                    children: [
                        (0, n.jsx)(eD.HeartIcon, { size: "xxs", color: H.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, n.jsx)(eD.HeartIcon, { size: "xxs", color: H.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, n.jsx)(eD.HeartIcon, { size: "xxs", color: H.A.colors.ICON_OVERLAY_LIGHT }),
                    ],
                }),
            ],
        });
    },
    bots: function () {
        return (0, n.jsxs)("div", {
            className: eH.x,
            children: [
                (0, n.jsxs)("div", {
                    className: eH.$y,
                    children: [(0, n.jsx)("span", { className: eH.m$ }), (0, n.jsx)(eq, { className: eH.Md })],
                }),
                (0, n.jsxs)("div", {
                    className: eH.iU,
                    children: [
                        (0, n.jsx)("span", {
                            className: r()(eH.my, eH.FY),
                            children: (0, n.jsx)(X.RobotIcon, { size: "xs", color: H.A.colors.ICON_OVERLAY_LIGHT }),
                        }),
                        (0, n.jsxs)("div", {
                            className: eH.OS,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: eH.f9,
                                    children: [
                                        (0, n.jsx)(eq, { className: eH.iE }),
                                        (0, n.jsx)(u.E, {
                                            variant: "body-xs/semibold",
                                            color: "none",
                                            className: eH.AO,
                                            children: I.intl.string(C.default.VlgiLf),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(eq, { className: eH.xs }),
                                (0, n.jsx)(eq, { className: eH.Md }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    "profile-widgets": function () {
        return (0, n.jsxs)("div", {
            className: r()(eH.x, eH.ME),
            children: [
                (0, n.jsx)("span", { className: eH.CK }),
                (0, n.jsxs)("div", {
                    className: eH.kI,
                    children: [
                        (0, n.jsx)("span", { className: r()(eH.my, eH.jU) }),
                        (0, n.jsx)(eq, { className: eH.iE }),
                        (0, n.jsxs)("div", {
                            className: eH.Wy,
                            children: [
                                (0, n.jsx)("div", {
                                    className: eH.M1,
                                    children: [0, 1].map((e) =>
                                        (0, n.jsxs)(
                                            "div",
                                            {
                                                className: eH.dJ,
                                                children: [
                                                    (0, n.jsx)(eq, { className: eH.cR }),
                                                    (0, n.jsx)(eq, { className: eH.Zh }),
                                                ],
                                            },
                                            e,
                                        ),
                                    ),
                                }),
                                (0, n.jsx)("div", {
                                    className: eH.bW,
                                    children: [0, 1, 2, 3, 4, 5].map((e) =>
                                        (0, n.jsx)("span", { className: eH.QR }, e),
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
            className: eH.JH,
            children: [
                (0, n.jsx)("span", { className: eH.rx }),
                (0, n.jsx)("span", { className: eH.ny }),
                (0, n.jsx)("span", { className: eH.ZH }),
                (0, n.jsx)("div", {
                    className: eH.$Y,
                    children: [0, 1, 2].map((e) =>
                        (0, n.jsxs)(
                            "div",
                            {
                                className: eH.fn,
                                children: [
                                    (0, n.jsx)("span", { className: r()(eH._h, { [eH.zY]: 0 === e }) }),
                                    (0, n.jsx)(eq, { className: eH.Av }),
                                ],
                            },
                            e,
                        ),
                    ),
                }),
                (0, n.jsxs)("div", {
                    className: eH.Y5,
                    children: [
                        (0, n.jsx)(eG.ClockIcon, { size: "xxs", color: H.A.colors.ICON_OVERLAY_LIGHT }),
                        (0, n.jsx)(eq, { className: eH.jB }),
                    ],
                }),
            ],
        });
    },
    automod: function () {
        return (0, n.jsxs)("div", {
            className: eH.x,
            children: [
                (0, n.jsxs)("div", {
                    className: eH.iU,
                    children: [
                        (0, n.jsx)("span", { className: eH.my }),
                        (0, n.jsxs)("div", {
                            className: eH.OS,
                            children: [
                                (0, n.jsx)(eq, { className: eH.iE }),
                                (0, n.jsx)(eq, { className: r()(eH.xs, eH.pc) }),
                                (0, n.jsx)(eq, { className: r()(eH.Md, eH.pc) }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: eH.jC,
                    children: [
                        (0, n.jsx)(V.ShieldIcon, { size: "sm", color: H.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, n.jsxs)("div", {
                            className: eH.qQ,
                            children: [
                                (0, n.jsx)(eq, { className: r()(eH.Md, eH.k8) }),
                                (0, n.jsx)(eq, { className: r()(eH.nq, eH.k8) }),
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
        s = eK[t];
    return (0, n.jsx)(s, {});
}
let eW = a.memo(function () {
    let e = a.useId();
    return (0, n.jsx)("section", {
        className: eH.GG,
        "aria-labelledby": e,
        children: (0, n.jsx)(eT.F, {
            component: (0, n.jsx)(d.D, {
                id: e,
                variant: "heading-lg/medium",
                children: I.intl.string(C.default.IiQEVd),
            }),
            children: (0, n.jsx)("ul", {
                className: eH.Vg,
                children: ez.map((e) => {
                    let { id: t, title: s, description: a } = e;
                    return (0, n.jsxs)(
                        "li",
                        {
                            className: eH.Vs,
                            children: [
                                (0, n.jsx)("div", {
                                    className: eH.Tn,
                                    "aria-hidden": !0,
                                    children: (0, n.jsx)(eU, { id: t }),
                                }),
                                (0, n.jsxs)("div", {
                                    className: eH.pG,
                                    children: [
                                        (0, n.jsx)(d.D, {
                                            variant: "body-md/semibold",
                                            color: "text-strong",
                                            children: I.intl.string(s),
                                        }),
                                        (0, n.jsx)(u.E, {
                                            variant: "body-sm/normal",
                                            color: "text-subtle",
                                            children: I.intl.string(a),
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
var e$ = s(73153);
(s(323874), s(14289), s(35956));
var eB = s(839214),
    eY = s(666476),
    eV = s(287111),
    eX = s(466280);
let eZ = 1;
function eJ(e) {
    let t = (0, eX.Ft)(e),
        s = { localId: eZ++, name: e.name, contentType: t };
    if ("too-large" === (0, eX.R9)(e, t))
        return { file: e, draft: { ...s, status: "error", errorText: (0, eV.iW)(t) } };
    let n = eY.XB.has(t) ? URL.createObjectURL(e) : void 0;
    return { file: e, draft: { ...s, status: "ready", previewUrl: n } };
}
function eQ(e) {
    null != e.draft.previewUrl && URL.revokeObjectURL(e.draft.previewUrl);
}
let e0 = (0, eB.D)(() => ({ attachments: [] }));
function e1(e) {
    e0.setState({ attachments: e });
}
function e2(e) {
    0 !== e.length && e1([...e0.getState().attachments, ...e.map(eJ)]);
}
function e6(e) {
    let { attachments: t } = e0.getState(),
        s = t.find((t) => t.draft.localId === e);
    null != s && (eQ(s), e1(t.filter((e) => e !== s)));
}
function e9(e) {
    e.forEach(eQ);
}
e$.h.subscribe("LOGOUT", function () {
    (e0.getState().attachments.forEach(eQ), e1([]));
});
let e8 = 0;
e$.h.subscribe("LOGOUT", () => {
    e8 += 1;
});
var e5 = s(698638),
    e3 = s(606128),
    e4 = s(260024);
class e7 extends Error {}
function te(e) {
    let t = f.A.getGuild(e);
    return null != t && (0, _.sM)(t, "ConjureHomePage") ? "guild" : null;
}
function tt(e) {
    let t,
        s,
        l,
        { guildId: f, onConjurePage: p = !1 } = e,
        y = (0, G.bG)([T.A], () => T.A.getDraft(F));
    (0, L.N$)(y);
    let _ = (0, O.A)(p ? "home" : null),
        [z, H] = a.useState(!1),
        [q, K] = a.useState(null),
        [W, $] = a.useState(null),
        [B, Y] = a.useState(() => M.w.get(R) ?? null ?? !0),
        V = a.useRef(null),
        X = a.useMemo(() => U().map((e) => ({ ...e, image: Z[e.id] })), []),
        J =
            ((t = e0.useField("attachments")),
            (s = (0, eX.sm)(e2)),
            {
                attachments: (l = a.useMemo(
                    () =>
                        (function (e) {
                            if (e.length <= 10) return e;
                            let t = (0, eX.XV)();
                            return e.map((e, s) =>
                                s < 10 || "error" === e.draft.status
                                    ? e
                                    : { ...e, draft: { ...e.draft, status: "error", errorText: t } },
                            );
                        })(t),
                    [t],
                )),
                addFiles: e2,
                pasteFiles: s,
                removeAttachment: e6,
                hasErrors: l.some((e) => "error" === e.draft.status),
            }),
        { attachments: Q, addFiles: ee } = J,
        et = (function (e) {
            let { guildId: t, modelSettings: s } = e,
                [n, l] = a.useState(!1),
                r = a.useRef(!1);
            return {
                importing: n,
                importArchive: a.useCallback(
                    async (e, n) => {
                        if (r.current) return;
                        let a = (0, x.vt)(e);
                        if (null != a) return void (0, g.P0)({ text: a, variant: "critical" });
                        ((r.current = !0), l(!0));
                        try {
                            let a = (await (0, E.A)(e, t)) ?? n,
                                l = await b({
                                    guildId: t,
                                    installScope: a,
                                    modelSettings: s,
                                    start: async (t) => {
                                        try {
                                            let s = await (0, v.vX)(t, e);
                                            (0, w.P6)(t, I.intl.string(C.default["LUc7/5"]), [s]);
                                        } catch {
                                            try {
                                                await (0, N.xx)(t);
                                            } catch {}
                                            throw new S();
                                        }
                                    },
                                });
                            (0, A.A)(l, "create");
                        } catch (e) {
                            (0, g.P0)({
                                text: e instanceof S ? I.intl.string(C.default["Q+l4Hv"]) : (0, j.mG)(e),
                                variant: "critical",
                            });
                        } finally {
                            ((r.current = !1), l(!1));
                        }
                    },
                    [t, s],
                ),
            };
        })({ guildId: f, modelSettings: W }),
        { importArchive: es } = et,
        en = z || et.importing,
        el = "" !== y.trim() || Q.length > 0,
        er = en || !el || J.hasErrors,
        ei = (0, x.yN)(a.useCallback((e) => es(e, p ? "user" : te(f)), [es, p, f])),
        ec = a.useCallback((e) => ee(Array.from(e)), [ee]);
    (0, D.p)(V);
    let eo = a.useCallback((e) => {
            ((0, k.I)(F, e), K(null));
        }, []),
        ed = a.useCallback(
            (e) => {
                eo(e);
                let t = V.current;
                null != t && (t.focus(), t.setSelectionRange(e.length, e.length));
            },
            [eo],
        ),
        eu = a.useRef(!1),
        em = a.useCallback(async () => {
            let e = y.trim();
            if (("" !== e || 0 !== Q.length) && !eu.current) {
                ((eu.current = !0), H(!0), K(null));
                try {
                    let t = await (async function (e, t) {
                        let s = (function () {
                            let { attachments: e } = e0.getState();
                            return (e1([]), e);
                        })();
                        (0, k.I)(F, "");
                        let n = e8;
                        try {
                            let e = await t(s);
                            return (e9(s), e);
                        } catch (t) {
                            throw (
                                e8 !== n
                                    ? e9(s)
                                    : ("" === T.A.getDraft(F) && (0, k.I)(F, e),
                                      e1([...s, ...e0.getState().attachments])),
                                t
                            );
                        }
                    })(y, (t) =>
                        b({
                            guildId: f,
                            installScope: p ? null : te(f),
                            prompt: e,
                            modelSettings: W,
                            start: async (s) => {
                                let n = [];
                                if (t.length > 0)
                                    try {
                                        n = await Promise.all(
                                            t.map((e) => {
                                                let { file: t } = e;
                                                return (async function (e, t) {
                                                    if ("fits" === (0, eX.R9)(t, (0, eX.Ft)(t))) return (0, v.vX)(e, t);
                                                    let s = await (0, eX.th)(t);
                                                    if (null == s) throw Error("attachment over its size limit");
                                                    return (0, v.vX)(e, s);
                                                })(s, t);
                                            }),
                                        );
                                    } catch {
                                        throw (await (0, N.xx)(s).catch(() => void 0), new e7());
                                    }
                                (0, w.P6)(s, e, n, p ? void 0 : f);
                            },
                        }),
                    );
                    ((eu.current = !1), H(!1), (0, A.A)(t, "create"));
                } catch (e) {
                    (K(e instanceof e7 ? I.intl.string(C.default["903H7m"]) : (0, j.mG)(e)), (eu.current = !1), H(!1));
                }
            }
        }, [y, W, f, p, Q]),
        eh = a.useCallback((e) => {
            (M.w.set(R, e), Y(e));
        }, []),
        ef = I.intl.string(B ? C.default.kar7jh : C.default.WSc5Y2);
    return (0, n.jsx)("div", {
        className: r()(e4.MY, e3.T),
        children: (0, n.jsxs)("div", {
            className: e4.Zp,
            children: [
                (0, n.jsxs)("main", {
                    className: e4.iW,
                    children: [
                        en
                            ? null
                            : (0, n.jsx)(m.A, {
                                  title: I.intl.string(C.default.gy7byi),
                                  description: I.intl.string(C.default["dkv/WO"]),
                                  icons: e5.ir,
                                  onDrop: ec,
                              }),
                        p
                            ? null
                            : (0, n.jsx)(P.A, {
                                  title: I.intl.string(C.default.uk6jhJ),
                                  transparent: !0,
                                  actions: (0, n.jsx)(h.A.Icon, {
                                      icon: i.MenuIcon,
                                      color: "var(--icon-strong)",
                                      className: e4.FW,
                                      tooltip: ef,
                                      "aria-label": ef,
                                      selected: B,
                                      onClick: () => eh(!B),
                                  }),
                              }),
                        (0, n.jsx)(c.Ip, {
                            ref: _,
                            className: e4.XG,
                            children: (0, n.jsxs)("div", {
                                className: e4.Qs,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: r()(e4.Lv, { [e4.$O]: p }),
                                        children: [
                                            (0, n.jsxs)("div", {
                                                className: e4.ZK,
                                                children: [
                                                    (0, n.jsx)("div", {
                                                        children: (0, n.jsx)(o.E, {
                                                            type: { text: I.intl.string(C.default.y6T1Nu) },
                                                            variant: "primary",
                                                        }),
                                                    }),
                                                    (0, n.jsx)(d.D, {
                                                        variant: "display-lg",
                                                        color: "text-strong",
                                                        className: e4.DD,
                                                        children: I.intl.string(C.default.doYpEy),
                                                    }),
                                                    (0, n.jsx)(u.E, {
                                                        variant: "body-md/normal",
                                                        color: "text-strong",
                                                        className: e4.VA,
                                                        children: I.intl.string(C.default.BH58fD),
                                                    }),
                                                ],
                                            }),
                                            (0, n.jsxs)("div", {
                                                className: e4.ZK,
                                                children: [
                                                    (0, n.jsx)(eR, {
                                                        idea: y,
                                                        inputRef: V,
                                                        onIdeaChange: eo,
                                                        onSubmit: em,
                                                        submitting: en,
                                                        submitDisabled: er,
                                                        error: q,
                                                        modelSettings: W,
                                                        onModelSettingsChange: $,
                                                        attachments: J,
                                                        onImport: ei.open,
                                                    }),
                                                    ei.input,
                                                    (0, n.jsx)(u.E, {
                                                        variant: "footnote/normal",
                                                        color: "text-muted",
                                                        children: I.intl.string(C.default.hebdhA),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)(ea, { inspirations: X, onCopyPrompt: ed }),
                                    (0, n.jsx)(eW, {}),
                                ],
                            }),
                        }),
                    ],
                }),
                B && !p ? (0, n.jsx)(ey, { guildId: f, archiveImport: et }) : null,
            ],
        }),
    });
}
