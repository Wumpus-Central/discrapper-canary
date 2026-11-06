s.d(t, { A: () => tn });
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
var k = s(705427),
    P = s(347111),
    L = s(120234),
    M = s(101766),
    O = s(506774);
let R = "ConjureProjectsPanelOpen";
var _ = s(246338);
let F = "conjure-home";
var D = s(89310),
    G = s(855986),
    z = s(89222),
    T = s(821609),
    H = s(646514),
    q = s(775602),
    K = s(486020);
function W() {
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
var U = s(687966),
    $ = s(323384),
    B = s(632015),
    X = s(31300),
    Y = s(231483),
    Z = s(430392);
let V = {
        "server-calendar": "/assets/1d701ea289cc99e6.svg",
        "cowboy-chat-bot": "/assets/56e489e9c5907add.svg",
        "library-voice-channel": "/assets/5813258afff68797.svg",
        "flappy-discord": "/assets/b43659b526f2e936.svg",
        "no-yelling": "/assets/54b5cda688395473.svg",
        "what-should-we-play": "/assets/fcb9220c49b6460a.svg",
        "kd-tracker": "/assets/05c0d07952b2d93f.svg",
    },
    J = {
        games: U.GameControllerIcon,
        apps: $.AppsIcon,
        profile_widget: B.WidgetsIcon,
        overlay_widget: X.ScreenIcon,
        automod: Y.ShieldIcon,
        chat_bot: Z.RobotIcon,
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
                                    children: (0, n.jsx)(T.$, {
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
var el = s(683438),
    er = s(289873),
    ei = s(123292),
    ec = s(441935),
    eo = s(939249),
    ed = s(847374),
    eu = s(5127);
function em(e) {
    let { onClick: t } = e;
    return (0, n.jsxs)(eo.D, {
        className: r()(eu.ap, eu.jP),
        onClick: t,
        children: [
            (0, n.jsx)("span", {
                className: eu.DW,
                children: (0, n.jsx)(ed.ChevronSmallDownIcon, { size: "sm", color: "currentColor" }),
            }),
            (0, n.jsx)(u.E, { variant: "body-md/medium", color: "none", children: I.intl.string(C.default.Im1k9X) }),
        ],
    });
}
var eh = s(996485),
    ef = s(260498),
    ex = s(615890);
function eg(e, t) {
    return e.guild_id === t || e.preview_guild_id === t;
}
var ev = s(602991),
    ej = s(685105),
    ep = s(919485),
    eN = s(588359),
    ey = s(638693);
function eb(e) {
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
    return (0, n.jsxs)(ep.A, {
        title: t,
        className: ey.uW,
        children: [
            (0, n.jsx)(ej.A, {
                listRef: o,
                projects: c,
                onSelect: l,
                renderProjectActions: r,
                onProjectContextMenu: i,
            }),
            null != d ? (0, n.jsx)(em, { onClick: d }) : null,
        ],
    });
}
function eA(e) {
    let t,
        { guildId: s, archiveImport: l } = e,
        {
            mine: r,
            shared: i,
            fetchState: o,
        } = ((t = (0, ex.U)(() => ef.Ay.getOwnedProjects().filter((e) => eg(e, s)), [s])),
        {
            mine: t,
            shared: (0, ex.U)(() => ef.Ay.getSharedProjects(s), [s]),
            fetchState: (0, G.bG)([ef.Ay], () => ef.Ay.getGuildProjectsFetchState(s), [s]),
        }),
        m = (0, G.yK)([ef.Ay], () => ef.Ay.getOwnedProjects().filter((e) => !eg(e, s)), [s]),
        [h, f] = a.useState(""),
        g = a.useMemo(() => (0, eh.Z)(r, h), [r, h]),
        v = a.useMemo(() => (0, eh.Z)(i, h), [i, h]),
        { importArchive: j } = l,
        p = (0, x.yN)(a.useCallback((e) => j(e, "guild"), [j])),
        y = a.useCallback((e) => (0, A.A)(e.id, "home"), []),
        b = a.useCallback((e) => (0, n.jsx)(ev.S, { project: e, guildId: s }), [s]),
        w = a.useCallback((e, t) => (0, ev.V)(e, t, s), [s]),
        E = I.intl.string(C.default.BMn2lY),
        S = r.length > 0 || i.length > 0;
    return (0, n.jsxs)("aside", {
        className: ey.pz,
        "aria-label": E,
        children: [
            (0, n.jsxs)("div", {
                className: ey.wx,
                children: [
                    (0, n.jsx)(d.D, { variant: "heading-sm/semibold", color: "text-strong", children: E }),
                    (0, n.jsx)(ec.A, { importing: l.importing, onClick: p.open }),
                    p.input,
                ],
            }),
            (0, n.jsxs)(c.Ip, {
                className: ey.XG,
                children: [
                    S
                        ? (0, n.jsx)("div", {
                              className: ey.$P,
                              children: (0, n.jsx)(el.I, {
                                  query: h,
                                  onChange: f,
                                  onClear: () => f(""),
                                  size: "sm",
                                  placeholder: I.intl.string(C.default["2y8sUh"]),
                                  "aria-label": I.intl.string(C.default.u0kEN9),
                              }),
                          })
                        : null,
                    g.length > 0
                        ? (0, n.jsx)(
                              eb,
                              {
                                  title: I.intl.string(C.default["8LfMqp"]),
                                  projects: g,
                                  onSelect: y,
                                  renderProjectActions: b,
                                  onProjectContextMenu: w,
                              },
                              `${s}-mine`,
                          )
                        : null,
                    v.length > 0
                        ? (0, n.jsx)(
                              eb,
                              {
                                  title: I.intl.string(C.default.YHDMK6),
                                  projects: v,
                                  onSelect: y,
                                  renderProjectActions: b,
                                  onProjectContextMenu: w,
                              },
                              `${s}-shared`,
                          )
                        : null,
                    S && 0 === g.length && 0 === v.length
                        ? (0, n.jsx)(u.E, {
                              variant: "body-sm/normal",
                              color: "text-subtle",
                              className: ey.WD,
                              children: I.intl.string(C.default.X37fkR),
                          })
                        : S || "error" !== o
                          ? S || "success" === o
                              ? !S && m.length > 0
                                  ? (0, n.jsx)("div", {
                                        className: ey.E8,
                                        children: (0, n.jsx)(u.E, {
                                            variant: "body-sm/normal",
                                            color: "text-muted",
                                            children: I.intl.string(C.default["/I2lbz"]),
                                        }),
                                    })
                                  : null
                              : (0, n.jsx)("div", { className: ey.E8, children: (0, n.jsx)(er.y, {}) })
                          : (0, n.jsxs)("div", {
                                className: ey.E8,
                                children: [
                                    (0, n.jsx)(u.E, {
                                        variant: "body-sm/normal",
                                        color: "text-muted",
                                        children: I.intl.string(C.default.DJAPMO),
                                    }),
                                    (0, n.jsx)(T.$, {
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
                      className: ey.qr,
                      children: (0, n.jsx)(ei.Q, {
                          variant: "secondary",
                          textVariant: "body-sm/medium",
                          text: I.intl.formatToPlainString(C.default.vnoMFE, { count: m.length }),
                          onClick: () => (0, A.A)(null),
                      }),
                  })
                : S || "success" !== o
                  ? null
                  : (0, n.jsx)(eN.A, {}),
        ],
    });
}
var ew = s(559106),
    eE = s(783977),
    eC = s(559647),
    eI = s(531685),
    eS = s(957071),
    ek = s(34595),
    eP = s(587157),
    eL = s(200160),
    eM = s(465410);
function eO(e) {
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
        className: eL.RC,
        children: t[l].slice(0, r),
    });
}
function eR(e) {
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
    return (0, n.jsx)(u.E, { variant: "body-md/normal", color: "text-muted", className: eL.RC, children: t[l] });
}
function e_(e) {
    let { boxFocused: t } = e,
        s = a.useMemo(
            () =>
                W().map((e) => {
                    let { shortPrompt: t } = e;
                    return t;
                }),
            [],
        ),
        l = (0, G.bG)([q.Ay], () => q.Ay.useReducedMotion),
        r = (0, G.bG)([eI.A], () => eI.A.isFocused()),
        i = t || !r;
    return (0, n.jsx)("div", {
        className: eL.qf,
        "aria-hidden": !0,
        children: l ? (0, n.jsx)(eR, { prompts: s, paused: i }) : (0, n.jsx)(eO, { prompts: s, paused: i }),
    });
}
function eF(e) {
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
        className: eL.kL,
        children: [
            (0, n.jsxs)("div", {
                ref: j,
                className: r()(eL.yk, { [eL.Sl]: null != d }),
                children: [
                    (0, n.jsxs)(u.E, {
                        variant: "body-md/normal",
                        color: "text-default",
                        className: eL.Ox,
                        children: [
                            (0, n.jsx)(ew.vN, {
                                ringTarget: j,
                                ringClassName: eL.Rg,
                                children: (0, n.jsx)("textarea", {
                                    ref: s,
                                    className: r()(eL.hF, eM.yL),
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
                            N ? null : (0, n.jsx)(e_, { boxFocused: g }),
                        ],
                    }),
                    f.attachments.length > 0
                        ? (0, n.jsx)("div", {
                              className: eL.ZO,
                              children: f.attachments.map((e) => {
                                  let { draft: t } = e;
                                  return (0, n.jsx)(ek.Nl, { draft: t, onRemove: w }, t.localId);
                              }),
                          })
                        : null,
                    (0, n.jsxs)("div", {
                        className: eL.KE,
                        children: [
                            (0, n.jsx)(eS.A, {
                                navId: "conjure-home-attach",
                                disabled: c,
                                buttonClassName: eL.gb,
                                iconClassName: eL.Xv,
                                onAddFiles: b,
                                onImport: x,
                            }),
                            (0, n.jsxs)("div", {
                                className: eL.Rc,
                                children: [
                                    (0, n.jsx)(eP.A, {
                                        settings: m ?? y.A4,
                                        tiers: y.lO,
                                        choices: (0, y.Pu)(),
                                        disabled: c,
                                        onChange: h,
                                        className: eL.gb,
                                        icon: (0, n.jsx)(eE.FiltersHorizontalIcon, {
                                            size: "refresh_sm",
                                            color: "currentColor",
                                        }),
                                    }),
                                    (0, n.jsx)(T.$, {
                                        variant: "primary",
                                        size: "sm",
                                        icon: eC.SendMessageIcon,
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
var eD = s(628284),
    eG = s(369606),
    ez = s(926268),
    eT = s(406810),
    eH = s(707554);
let eq = [
    { id: "apps", title: C.default["bvcT/Q"], description: C.default.ArcJqa },
    { id: "bots", title: C.default.KBHZfO, description: C.default.qNmKhG },
    { id: "games", title: C.default["JU01/4"], description: C.default.FXwLsv },
    { id: "automod", title: C.default["+EKk4D"], description: C.default.fpXK3z },
    { id: "overlay-widgets", title: C.default.uVOH1p, description: C.default.zm7y9u },
    { id: "profile-widgets", title: C.default.GUb2zA, description: C.default["v+F6qW"] },
];
var eK = s(651346);
function eW(e) {
    let { className: t } = e;
    return (0, n.jsx)("span", { className: r()(eK.n8, t) });
}
let eU = {
    apps: function () {
        return (0, n.jsxs)("div", {
            className: eK.x,
            children: [
                (0, n.jsxs)("div", {
                    className: eK.My,
                    children: [
                        (0, n.jsx)("span", { className: eK._w }),
                        (0, n.jsx)("span", { className: eK._w }),
                        (0, n.jsx)("span", { className: eK._w }),
                    ],
                }),
                (0, n.jsx)(eW, { className: eK.Lm }),
                (0, n.jsx)("div", {
                    className: eK.Oh,
                    children: [0, 1, 2].map((e) =>
                        (0, n.jsxs)(
                            "div",
                            {
                                className: eK.ZW,
                                children: [
                                    (0, n.jsx)("span", { className: eK.NU }),
                                    0 === e
                                        ? (0, n.jsx)(eD.CircleCheckIcon, {
                                              size: "xs",
                                              color: H.A.colors.ICON_BRAND,
                                              className: eK._6,
                                          })
                                        : null,
                                    (0, n.jsx)(eW, { className: eK.Eg }),
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
            className: r()(eK.x, eK.jG),
            children: [
                (0, n.jsx)("span", { className: r()(eK.gg, eK.K1) }),
                (0, n.jsx)("span", { className: r()(eK.gg, eK.W2) }),
                (0, n.jsx)("span", { className: r()(eK.Fs, eK.A$) }),
                (0, n.jsx)("span", { className: r()(eK.Fs, eK.eP) }),
                (0, n.jsx)("span", { className: r()(eK.Fs, eK.kc) }),
                (0, n.jsx)("span", { className: r()(eK.Fs, eK.OE) }),
                (0, n.jsx)("span", { className: eK.OC }),
                (0, n.jsxs)("div", {
                    className: eK.si,
                    children: [
                        (0, n.jsx)(eG.TrophyIcon, { size: "xxs", color: H.A.colors.ICON_FEEDBACK_WARNING }),
                        (0, n.jsx)(u.E, {
                            variant: "body-xs/semibold",
                            color: "none",
                            className: eK.o9,
                            children: 128,
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: eK.KQ,
                    children: [
                        (0, n.jsx)(ez.HeartIcon, { size: "xxs", color: H.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, n.jsx)(ez.HeartIcon, { size: "xxs", color: H.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, n.jsx)(ez.HeartIcon, { size: "xxs", color: H.A.colors.ICON_OVERLAY_LIGHT }),
                    ],
                }),
            ],
        });
    },
    bots: function () {
        return (0, n.jsxs)("div", {
            className: eK.x,
            children: [
                (0, n.jsxs)("div", {
                    className: eK.$y,
                    children: [(0, n.jsx)("span", { className: eK.m$ }), (0, n.jsx)(eW, { className: eK.Md })],
                }),
                (0, n.jsxs)("div", {
                    className: eK.iU,
                    children: [
                        (0, n.jsx)("span", {
                            className: r()(eK.my, eK.FY),
                            children: (0, n.jsx)(Z.RobotIcon, { size: "xs", color: H.A.colors.ICON_OVERLAY_LIGHT }),
                        }),
                        (0, n.jsxs)("div", {
                            className: eK.OS,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: eK.f9,
                                    children: [
                                        (0, n.jsx)(eW, { className: eK.iE }),
                                        (0, n.jsx)(u.E, {
                                            variant: "body-xs/semibold",
                                            color: "none",
                                            className: eK.AO,
                                            children: I.intl.string(C.default.VlgiLf),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(eW, { className: eK.xs }),
                                (0, n.jsx)(eW, { className: eK.Md }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    "profile-widgets": function () {
        return (0, n.jsxs)("div", {
            className: r()(eK.x, eK.ME),
            children: [
                (0, n.jsx)("span", { className: eK.CK }),
                (0, n.jsxs)("div", {
                    className: eK.kI,
                    children: [
                        (0, n.jsx)("span", { className: r()(eK.my, eK.jU) }),
                        (0, n.jsx)(eW, { className: eK.iE }),
                        (0, n.jsxs)("div", {
                            className: eK.Wy,
                            children: [
                                (0, n.jsx)("div", {
                                    className: eK.M1,
                                    children: [0, 1].map((e) =>
                                        (0, n.jsxs)(
                                            "div",
                                            {
                                                className: eK.dJ,
                                                children: [
                                                    (0, n.jsx)(eW, { className: eK.cR }),
                                                    (0, n.jsx)(eW, { className: eK.Zh }),
                                                ],
                                            },
                                            e,
                                        ),
                                    ),
                                }),
                                (0, n.jsx)("div", {
                                    className: eK.bW,
                                    children: [0, 1, 2, 3, 4, 5].map((e) =>
                                        (0, n.jsx)("span", { className: eK.QR }, e),
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
            className: eK.JH,
            children: [
                (0, n.jsx)("span", { className: eK.rx }),
                (0, n.jsx)("span", { className: eK.ny }),
                (0, n.jsx)("span", { className: eK.ZH }),
                (0, n.jsx)("div", {
                    className: eK.$Y,
                    children: [0, 1, 2].map((e) =>
                        (0, n.jsxs)(
                            "div",
                            {
                                className: eK.fn,
                                children: [
                                    (0, n.jsx)("span", { className: r()(eK._h, { [eK.zY]: 0 === e }) }),
                                    (0, n.jsx)(eW, { className: eK.Av }),
                                ],
                            },
                            e,
                        ),
                    ),
                }),
                (0, n.jsxs)("div", {
                    className: eK.Y5,
                    children: [
                        (0, n.jsx)(eT.ClockIcon, { size: "xxs", color: H.A.colors.ICON_OVERLAY_LIGHT }),
                        (0, n.jsx)(eW, { className: eK.jB }),
                    ],
                }),
            ],
        });
    },
    automod: function () {
        return (0, n.jsxs)("div", {
            className: eK.x,
            children: [
                (0, n.jsxs)("div", {
                    className: eK.iU,
                    children: [
                        (0, n.jsx)("span", { className: eK.my }),
                        (0, n.jsxs)("div", {
                            className: eK.OS,
                            children: [
                                (0, n.jsx)(eW, { className: eK.iE }),
                                (0, n.jsx)(eW, { className: r()(eK.xs, eK.pc) }),
                                (0, n.jsx)(eW, { className: r()(eK.Md, eK.pc) }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: eK.jC,
                    children: [
                        (0, n.jsx)(Y.ShieldIcon, { size: "sm", color: H.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, n.jsxs)("div", {
                            className: eK.qQ,
                            children: [
                                (0, n.jsx)(eW, { className: r()(eK.Md, eK.k8) }),
                                (0, n.jsx)(eW, { className: r()(eK.nq, eK.k8) }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
};
function e$(e) {
    let { id: t } = e,
        s = eU[t];
    return (0, n.jsx)(s, {});
}
let eB = a.memo(function () {
    let e = a.useId();
    return (0, n.jsx)("section", {
        className: eK.GG,
        "aria-labelledby": e,
        children: (0, n.jsx)(eH.F, {
            component: (0, n.jsx)(d.D, {
                id: e,
                variant: "heading-lg/medium",
                children: I.intl.string(C.default.IiQEVd),
            }),
            children: (0, n.jsx)("ul", {
                className: eK.Vg,
                children: eq.map((e) => {
                    let { id: t, title: s, description: a } = e;
                    return (0, n.jsxs)(
                        "li",
                        {
                            className: eK.Vs,
                            children: [
                                (0, n.jsx)("div", {
                                    className: eK.Tn,
                                    "aria-hidden": !0,
                                    children: (0, n.jsx)(e$, { id: t }),
                                }),
                                (0, n.jsxs)("div", {
                                    className: eK.pG,
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
var eX = s(73153);
(s(323874), s(14289), s(35956));
var eY = s(839214),
    eZ = s(666476),
    eV = s(287111),
    eJ = s(466280);
let eQ = 1;
function e0(e) {
    let t = (0, eJ.Ft)(e),
        s = { localId: eQ++, name: e.name, contentType: t };
    if ("too-large" === (0, eJ.R9)(e, t))
        return { file: e, draft: { ...s, status: "error", errorText: (0, eV.iW)(t) } };
    let n = eZ.XB.has(t) ? URL.createObjectURL(e) : void 0;
    return { file: e, draft: { ...s, status: "ready", previewUrl: n } };
}
function e1(e) {
    null != e.draft.previewUrl && URL.revokeObjectURL(e.draft.previewUrl);
}
let e9 = (0, eY.D)(() => ({ attachments: [] }));
function e2(e) {
    e9.setState({ attachments: e });
}
function e6(e) {
    0 !== e.length && e2([...e9.getState().attachments, ...e.map(e0)]);
}
function e8(e) {
    let { attachments: t } = e9.getState(),
        s = t.find((t) => t.draft.localId === e);
    null != s && (e1(s), e2(t.filter((e) => e !== s)));
}
function e5(e) {
    e.forEach(e1);
}
eX.h.subscribe("LOGOUT", function () {
    (e9.getState().attachments.forEach(e1), e2([]));
});
let e3 = 0;
eX.h.subscribe("LOGOUT", () => {
    e3 += 1;
});
var e4 = s(698638),
    e7 = s(606128),
    te = s(260024);
class tt extends Error {}
function ts(e) {
    let t = f.A.getGuild(e);
    return null != t && (0, _.sM)(t, "ConjureHomePage") ? "guild" : null;
}
function tn(e) {
    let t,
        s,
        l,
        { guildId: f, onConjurePage: p = !1 } = e,
        y = (0, G.bG)([z.A], () => z.A.getDraft(F));
    (0, L.N$)(y);
    let _ = (0, M.A)(p ? "home" : null),
        [T, H] = a.useState(!1),
        [q, K] = a.useState(null),
        [U, $] = a.useState(null),
        [B, X] = a.useState(() => O.w.get(R) ?? null ?? !0),
        Y = a.useRef(null),
        Z = a.useMemo(() => W().map((e) => ({ ...e, image: V[e.id] })), []),
        J =
            ((t = e9.useField("attachments")),
            (s = (0, eJ.sm)(e6)),
            {
                attachments: (l = a.useMemo(
                    () =>
                        (function (e) {
                            if (e.length <= 10) return e;
                            let t = (0, eJ.XV)();
                            return e.map((e, s) =>
                                s < 10 || "error" === e.draft.status
                                    ? e
                                    : { ...e, draft: { ...e.draft, status: "error", errorText: t } },
                            );
                        })(t),
                    [t],
                )),
                addFiles: e6,
                pasteFiles: s,
                removeAttachment: e8,
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
        })({ guildId: f, modelSettings: U }),
        { importArchive: es } = et,
        en = T || et.importing,
        el = "" !== y.trim() || Q.length > 0,
        er = en || !el || J.hasErrors,
        ei = (0, x.yN)(a.useCallback((e) => es(e, p ? "user" : ts(f)), [es, p, f])),
        ec = a.useCallback((e) => ee(Array.from(e)), [ee]);
    (0, D.p)(Y);
    let eo = a.useCallback((e) => {
            ((0, P.I)(F, e), K(null));
        }, []),
        ed = a.useCallback(
            (e) => {
                eo(e);
                let t = Y.current;
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
                            let { attachments: e } = e9.getState();
                            return (e2([]), e);
                        })();
                        (0, P.I)(F, "");
                        let n = e3;
                        try {
                            let e = await t(s);
                            return (e5(s), e);
                        } catch (t) {
                            throw (
                                e3 !== n
                                    ? e5(s)
                                    : ("" === z.A.getDraft(F) && (0, P.I)(F, e),
                                      e2([...s, ...e9.getState().attachments])),
                                t
                            );
                        }
                    })(y, (t) =>
                        b({
                            guildId: f,
                            installScope: p ? null : ts(f),
                            prompt: e,
                            modelSettings: U,
                            start: async (s) => {
                                let n = [];
                                if (t.length > 0)
                                    try {
                                        n = await Promise.all(
                                            t.map((e) => {
                                                let { file: t } = e;
                                                return (async function (e, t) {
                                                    if ("fits" === (0, eJ.R9)(t, (0, eJ.Ft)(t))) return (0, v.vX)(e, t);
                                                    let s = await (0, eJ.th)(t);
                                                    if (null == s) throw Error("attachment over its size limit");
                                                    return (0, v.vX)(e, s);
                                                })(s, t);
                                            }),
                                        );
                                    } catch {
                                        throw (await (0, N.xx)(s).catch(() => void 0), new tt());
                                    }
                                (0, w.P6)(s, e, n, p ? void 0 : f);
                            },
                        }),
                    );
                    ((eu.current = !1), H(!1), (0, A.A)(t, "create"));
                } catch (e) {
                    (K(e instanceof tt ? I.intl.string(C.default["903H7m"]) : (0, j.mG)(e)), (eu.current = !1), H(!1));
                }
            }
        }, [y, U, f, p, Q]),
        eh = a.useCallback((e) => {
            (O.w.set(R, e), X(e));
        }, []),
        ef = I.intl.string(B ? C.default.kar7jh : C.default.WSc5Y2);
    return (0, n.jsx)("div", {
        className: r()(te.MY, e7.T),
        children: (0, n.jsxs)("div", {
            className: te.Zp,
            children: [
                (0, n.jsxs)("main", {
                    className: te.iW,
                    children: [
                        en
                            ? null
                            : (0, n.jsx)(m.A, {
                                  title: I.intl.string(C.default.gy7byi),
                                  description: I.intl.string(C.default["dkv/WO"]),
                                  icons: e4.ir,
                                  onDrop: ec,
                              }),
                        p
                            ? null
                            : (0, n.jsx)(k.A, {
                                  title: I.intl.string(C.default.uk6jhJ),
                                  transparent: !0,
                                  actions: (0, n.jsx)(h.A.Icon, {
                                      icon: i.MenuIcon,
                                      color: "var(--icon-strong)",
                                      className: te.FW,
                                      tooltip: ef,
                                      "aria-label": ef,
                                      selected: B,
                                      onClick: () => eh(!B),
                                  }),
                              }),
                        (0, n.jsx)(c.Ip, {
                            ref: _,
                            className: te.XG,
                            children: (0, n.jsxs)("div", {
                                className: te.Qs,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: r()(te.Lv, { [te.$O]: p }),
                                        children: [
                                            (0, n.jsxs)("div", {
                                                className: te.ZK,
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
                                                        className: te.DD,
                                                        children: I.intl.string(C.default.doYpEy),
                                                    }),
                                                    (0, n.jsx)(u.E, {
                                                        variant: "body-md/normal",
                                                        color: "text-strong",
                                                        className: te.VA,
                                                        children: I.intl.string(C.default.BH58fD),
                                                    }),
                                                ],
                                            }),
                                            (0, n.jsxs)("div", {
                                                className: te.ZK,
                                                children: [
                                                    (0, n.jsx)(eF, {
                                                        idea: y,
                                                        inputRef: Y,
                                                        onIdeaChange: eo,
                                                        onSubmit: em,
                                                        submitting: en,
                                                        submitDisabled: er,
                                                        error: q,
                                                        modelSettings: U,
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
                                    (0, n.jsx)(ea, { inspirations: Z, onCopyPrompt: ed }),
                                    (0, n.jsx)(eB, {}),
                                ],
                            }),
                        }),
                    ],
                }),
                B && !p ? (0, n.jsx)(eA, { guildId: f, archiveImport: et }) : null,
            ],
        }),
    });
}
