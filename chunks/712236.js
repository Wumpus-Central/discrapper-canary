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
    j = s(540665),
    p = s(639519),
    N = s(233470),
    y = s(391712);
async function b(e) {
    let { start: t, ...s } = e,
        n = await (async function (e) {
            let { guildId: t, installScope: s = "user", modelSettings: n, templateId: a } = e,
                l = await (0, N.gA)({ guild_id: t, install_scope: s });
            return ((0, j.ensureConnection)(l, { templateId: a }), (0, j.r2)(l, n ?? y.A4), l);
        })(s);
    return (await t(n), n);
}
var A = s(381991),
    w = s(363882),
    E = s(191850),
    C = s(792996);
class I extends Error {}
var S = s(705427),
    k = s(347111),
    P = s(120234),
    L = s(101766),
    M = s(506774);
let O = "ConjureProjectsPanelOpen";
var R = s(246338);
let _ = "conjure-home";
var F = s(89310),
    D = s(855986),
    G = s(89222),
    z = s(821609),
    T = s(646514),
    H = s(775602),
    q = s(486020);
function K() {
    return [
        {
            id: "server-calendar",
            category: "apps",
            shortPrompt: C.intl.string(E.default.qbaf5O),
            fullPrompt: C.intl.string(E.default.vo1ZBs),
            name: C.intl.string(E.default.Zx7B6B),
            authorAvatarSeed: "1",
        },
        {
            id: "cowboy-chat-bot",
            category: "chat_bot",
            shortPrompt: C.intl.string(E.default.i0y7Ld),
            fullPrompt: C.intl.string(E.default.Hddwvt),
            name: C.intl.string(E.default.dLyihE),
            authorAvatarSeed: "2",
        },
        {
            id: "library-voice-channel",
            category: "games",
            shortPrompt: C.intl.string(E.default.vYjIS6),
            fullPrompt: C.intl.string(E.default["4pASEG"]),
            name: C.intl.string(E.default.e8Jbz3),
            authorAvatarSeed: "3",
        },
        {
            id: "flappy-discord",
            category: "games",
            shortPrompt: C.intl.string(E.default.gtX7tS),
            fullPrompt: C.intl.string(E.default["Sfa50+"]),
            name: C.intl.string(E.default.Tbag5k),
            authorAvatarSeed: "4",
        },
        {
            id: "no-yelling",
            category: "automod",
            shortPrompt: C.intl.string(E.default.H8fuGK),
            fullPrompt: C.intl.string(E.default.XuiHpi),
            name: C.intl.string(E.default["5XJ55E"]),
            authorAvatarSeed: "5",
        },
        {
            id: "what-should-we-play",
            category: "apps",
            shortPrompt: C.intl.string(E.default.tZv5cM),
            fullPrompt: C.intl.string(E.default.qd87yI),
            name: C.intl.string(E.default["7KvZ91"]),
            authorAvatarSeed: "6",
        },
        {
            id: "kd-tracker",
            category: "overlay_widget",
            shortPrompt: C.intl.string(E.default.tqEROk),
            fullPrompt: C.intl.string(E.default.yym7Yj),
            name: C.intl.string(E.default.vRpB6m),
            authorAvatarSeed: "7",
        },
    ];
}
var W = s(687966),
    U = s(323384),
    $ = s(632015),
    B = s(31300),
    X = s(231483),
    Y = s(430392);
let Z = {
        "server-calendar": "/assets/1d701ea289cc99e6.svg",
        "cowboy-chat-bot": "/assets/56e489e9c5907add.svg",
        "library-voice-channel": "/assets/5813258afff68797.svg",
        "flappy-discord": "/assets/b43659b526f2e936.svg",
        "no-yelling": "/assets/54b5cda688395473.svg",
        "what-should-we-play": "/assets/fcb9220c49b6460a.svg",
        "kd-tracker": "/assets/05c0d07952b2d93f.svg",
    },
    V = {
        games: W.GameControllerIcon,
        apps: U.AppsIcon,
        profile_widget: $.WidgetsIcon,
        overlay_widget: B.ScreenIcon,
        automod: X.ShieldIcon,
        chat_bot: Y.RobotIcon,
    };
var J = s(621466);
let Q = "data-conjure-carousel-card";
var ee = s(19493);
function et(e) {
    e.preventDefault();
}
let es = a.memo(function (e) {
        let { inspiration: t, onCopyPrompt: s, repeat: a = !1 } = e,
            l = V[t.category];
        return (0, n.jsxs)("li", {
            className: ee.AS,
            "aria-hidden": !!a || void 0,
            [Q]: "",
            children: [
                (0, n.jsxs)("div", {
                    className: ee.rl,
                    children: [
                        (0, n.jsx)("img", {
                            className: ee.my,
                            src: (0, q.AE)(void 0, t.authorAvatarSeed),
                            alt: "",
                            "aria-hidden": !0,
                        }),
                        (0, n.jsx)(u.E, {
                            variant: "body-sm/medium",
                            color: "text-strong",
                            className: ee.Tq,
                            children: t.shortPrompt,
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: ee.Nr,
                    children: [
                        (0, n.jsxs)("div", {
                            className: ee.xn,
                            children: [
                                (0, n.jsx)("img", { className: ee.q_, src: t.image, alt: "" }),
                                (0, n.jsx)("div", {
                                    className: ee.o1,
                                    children: (0, n.jsx)(z.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: C.intl.string(E.default["6CQjTy"]),
                                        tabIndex: a ? -1 : void 0,
                                        onMouseDown: a ? et : void 0,
                                        onClick: () => s(t.fullPrompt),
                                    }),
                                }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: ee.qr,
                            children: [
                                (0, n.jsx)("div", {
                                    className: ee.Yl,
                                    "aria-hidden": !0,
                                    children: (0, n.jsx)(l, { size: "md", color: T.A.colors.ICON_STRONG }),
                                }),
                                (0, n.jsxs)("div", {
                                    className: ee.PJ,
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
                                                        return C.intl.string(E.default["JU01/4"]);
                                                    case "apps":
                                                        return C.intl.string(E.default["bvcT/Q"]);
                                                    case "profile_widget":
                                                        return C.intl.string(E.default.GUb2zA);
                                                    case "overlay_widget":
                                                        return C.intl.string(E.default.uVOH1p);
                                                    case "automod":
                                                        return C.intl.string(E.default["+EKk4D"]);
                                                    case "chat_bot":
                                                        return C.intl.string(E.default.KBHZfO);
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
    en = a.memo(function (e) {
        var t;
        let { inspirations: s, onCopyPrompt: l } = e,
            r = (0, D.bG)([H.Ay], () => H.Ay.useReducedMotion),
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
                            let e = l.querySelector(`[${Q}]`);
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
                    a = (n = Array.from(s.querySelectorAll(`[${Q}]`))).map((e) => e.offsetLeft + e.offsetWidth / 2);
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
                    ((f = (0, J.vq)(t.relatedTarget, Node) && e?.contains(t.relatedTarget) === !0), N());
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
                className: r ? ee.vV : ee.Dk,
                "aria-label": C.intl.string(E.default.Qc4S39),
                children: (0, n.jsx)("ul", {
                    ref: c,
                    className: ee.u4,
                    children: Array.from({ length: o }, (e, t) =>
                        s.map((e) =>
                            (0, n.jsx)(es, { inspiration: e, onCopyPrompt: l, repeat: t > 0 }, `${e.id}-${t}`),
                        ),
                    ),
                }),
            })
        );
    });
var ea = s(683438),
    el = s(289873),
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
            (0, n.jsx)(u.E, { variant: "body-md/medium", color: "none", children: C.intl.string(E.default.Im1k9X) }),
        ],
    });
}
var em = s(996485),
    eh = s(260498),
    ef = s(615890);
function ex(e, t) {
    return e.guild_id === t || e.preview_guild_id === t;
}
var eg = s(602991),
    ev = s(685105),
    ej = s(919485),
    ep = s(588359),
    eN = s(638693);
function ey(e) {
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
    return (0, n.jsxs)(ej.A, {
        title: t,
        className: eN.uW,
        children: [
            (0, n.jsx)(ev.A, {
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
function eb(e) {
    let t,
        { guildId: s, archiveImport: l } = e,
        {
            mine: r,
            shared: i,
            fetchState: o,
        } = ((t = (0, ef.U)(() => eh.Ay.getOwnedProjects().filter((e) => ex(e, s)), [s])),
        {
            mine: t,
            shared: (0, ef.U)(() => eh.Ay.getSharedProjects(s), [s]),
            fetchState: (0, D.bG)([eh.Ay], () => eh.Ay.getGuildProjectsFetchState(s), [s]),
        }),
        m = (0, D.yK)([eh.Ay], () => eh.Ay.getOwnedProjects().filter((e) => !ex(e, s)), [s]),
        [h, f] = a.useState(""),
        g = a.useMemo(() => (0, em.Z)(r, h), [r, h]),
        v = a.useMemo(() => (0, em.Z)(i, h), [i, h]),
        { importArchive: j } = l,
        p = (0, x.yN)(a.useCallback((e) => j(e, "guild"), [j])),
        y = a.useCallback((e) => (0, A.A)(e.id, "home"), []),
        b = a.useCallback((e) => (0, n.jsx)(eg.S, { project: e, guildId: s }), [s]),
        w = a.useCallback((e, t) => (0, eg.V)(e, t, s), [s]),
        I = C.intl.string(E.default.BMn2lY),
        S = r.length > 0 || i.length > 0;
    return (0, n.jsxs)("aside", {
        className: eN.pz,
        "aria-label": I,
        children: [
            (0, n.jsxs)("div", {
                className: eN.wx,
                children: [
                    (0, n.jsx)(d.D, { variant: "heading-sm/semibold", color: "text-strong", children: I }),
                    (0, n.jsx)(ei.A, { importing: l.importing, onClick: p.open }),
                    p.input,
                ],
            }),
            (0, n.jsxs)(c.Ip, {
                className: eN.XG,
                children: [
                    S
                        ? (0, n.jsx)("div", {
                              className: eN.$P,
                              children: (0, n.jsx)(ea.I, {
                                  query: h,
                                  onChange: f,
                                  onClear: () => f(""),
                                  size: "sm",
                                  placeholder: C.intl.string(E.default["2y8sUh"]),
                                  "aria-label": C.intl.string(E.default.u0kEN9),
                              }),
                          })
                        : null,
                    g.length > 0
                        ? (0, n.jsx)(
                              ey,
                              {
                                  title: C.intl.string(E.default["8LfMqp"]),
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
                              ey,
                              {
                                  title: C.intl.string(E.default.YHDMK6),
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
                              className: eN.WD,
                              children: C.intl.string(E.default.X37fkR),
                          })
                        : S || "error" !== o
                          ? S || "success" === o
                              ? !S && m.length > 0
                                  ? (0, n.jsx)("div", {
                                        className: eN.E8,
                                        children: (0, n.jsx)(u.E, {
                                            variant: "body-sm/normal",
                                            color: "text-muted",
                                            children: C.intl.string(E.default["/I2lbz"]),
                                        }),
                                    })
                                  : null
                              : (0, n.jsx)("div", { className: eN.E8, children: (0, n.jsx)(el.y, {}) })
                          : (0, n.jsxs)("div", {
                                className: eN.E8,
                                children: [
                                    (0, n.jsx)(u.E, {
                                        variant: "body-sm/normal",
                                        color: "text-muted",
                                        children: C.intl.string(E.default.DJAPMO),
                                    }),
                                    (0, n.jsx)(z.$, {
                                        variant: "secondary",
                                        size: "sm",
                                        text: C.intl.string(E.default["WFJ/vb"]),
                                        onClick: () => (0, N.listProjects)(s),
                                    }),
                                ],
                            }),
                ],
            }),
            m.length > 0
                ? (0, n.jsx)("div", {
                      className: eN.qr,
                      children: (0, n.jsx)(er.Q, {
                          variant: "secondary",
                          textVariant: "body-sm/medium",
                          text: C.intl.formatToPlainString(E.default.vnoMFE, { count: m.length }),
                          onClick: () => (0, A.A)(null),
                      }),
                  })
                : S || "success" !== o
                  ? null
                  : (0, n.jsx)(ep.A, {}),
        ],
    });
}
var eA = s(559106),
    ew = s(783977),
    eE = s(559647),
    eC = s(531685),
    eI = s(957071),
    eS = s(34595),
    ek = s(587157),
    eP = s(200160),
    eL = s(465410);
function eM(e) {
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
function eR(e) {
    let { boxFocused: t } = e,
        s = a.useMemo(
            () =>
                K().map((e) => {
                    let { shortPrompt: t } = e;
                    return t;
                }),
            [],
        ),
        l = (0, D.bG)([H.Ay], () => H.Ay.useReducedMotion),
        r = (0, D.bG)([eC.A], () => eC.A.isFocused()),
        i = t || !r;
    return (0, n.jsx)("div", {
        className: eP.qf,
        "aria-hidden": !0,
        children: l ? (0, n.jsx)(eO, { prompts: s, paused: i }) : (0, n.jsx)(eM, { prompts: s, paused: i }),
    });
}
function e_(e) {
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
    let I = a.useCallback(
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
                            (0, n.jsx)(eA.vN, {
                                ringTarget: j,
                                ringClassName: eP.Rg,
                                children: (0, n.jsx)("textarea", {
                                    ref: s,
                                    className: r()(eP.hF, eL.yL),
                                    rows: 3,
                                    value: t,
                                    "aria-label": C.intl.string(E.default.cwrS1O),
                                    "aria-invalid": null != d,
                                    "aria-describedby": null != d ? p : void 0,
                                    onChange: (e) => l(e.currentTarget.value),
                                    onKeyDown: I,
                                    onPaste: (e) => A(e),
                                    onFocus: () => v(!0),
                                    onBlur: () => v(!1),
                                }),
                            }),
                            N ? null : (0, n.jsx)(eR, { boxFocused: g }),
                        ],
                    }),
                    f.attachments.length > 0
                        ? (0, n.jsx)("div", {
                              className: eP.ZO,
                              children: f.attachments.map((e) => {
                                  let { draft: t } = e;
                                  return (0, n.jsx)(eS.Nl, { draft: t, onRemove: w }, t.localId);
                              }),
                          })
                        : null,
                    (0, n.jsxs)("div", {
                        className: eP.KE,
                        children: [
                            (0, n.jsx)(eI.A, {
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
                                    (0, n.jsx)(ek.A, {
                                        settings: m ?? y.A4,
                                        tiers: y.lO,
                                        choices: (0, y.Pu)(),
                                        disabled: c,
                                        onChange: h,
                                        className: eP.gb,
                                        icon: (0, n.jsx)(ew.FiltersHorizontalIcon, {
                                            size: "refresh_sm",
                                            color: "currentColor",
                                        }),
                                    }),
                                    (0, n.jsx)(z.$, {
                                        variant: "primary",
                                        size: "sm",
                                        icon: eE.SendMessageIcon,
                                        text: C.intl.string(E.default.bNtzxp),
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
var eF = s(628284),
    eD = s(369606),
    eG = s(926268),
    ez = s(406810),
    eT = s(707554);
let eH = [
    { id: "apps", title: E.default["bvcT/Q"], description: E.default.ArcJqa },
    { id: "bots", title: E.default.KBHZfO, description: E.default.qNmKhG },
    { id: "games", title: E.default["JU01/4"], description: E.default.FXwLsv },
    { id: "automod", title: E.default["+EKk4D"], description: E.default.fpXK3z },
    { id: "overlay-widgets", title: E.default.uVOH1p, description: E.default.zm7y9u },
    { id: "profile-widgets", title: E.default.GUb2zA, description: E.default["v+F6qW"] },
];
var eq = s(651346);
function eK(e) {
    let { className: t } = e;
    return (0, n.jsx)("span", { className: r()(eq.n8, t) });
}
let eW = {
    apps: function () {
        return (0, n.jsxs)("div", {
            className: eq.x,
            children: [
                (0, n.jsxs)("div", {
                    className: eq.My,
                    children: [
                        (0, n.jsx)("span", { className: eq._w }),
                        (0, n.jsx)("span", { className: eq._w }),
                        (0, n.jsx)("span", { className: eq._w }),
                    ],
                }),
                (0, n.jsx)(eK, { className: eq.Lm }),
                (0, n.jsx)("div", {
                    className: eq.Oh,
                    children: [0, 1, 2].map((e) =>
                        (0, n.jsxs)(
                            "div",
                            {
                                className: eq.ZW,
                                children: [
                                    (0, n.jsx)("span", { className: eq.NU }),
                                    0 === e
                                        ? (0, n.jsx)(eF.CircleCheckIcon, {
                                              size: "xs",
                                              color: T.A.colors.ICON_BRAND,
                                              className: eq._6,
                                          })
                                        : null,
                                    (0, n.jsx)(eK, { className: eq.Eg }),
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
            className: r()(eq.x, eq.jG),
            children: [
                (0, n.jsx)("span", { className: r()(eq.gg, eq.K1) }),
                (0, n.jsx)("span", { className: r()(eq.gg, eq.W2) }),
                (0, n.jsx)("span", { className: r()(eq.Fs, eq.A$) }),
                (0, n.jsx)("span", { className: r()(eq.Fs, eq.eP) }),
                (0, n.jsx)("span", { className: r()(eq.Fs, eq.kc) }),
                (0, n.jsx)("span", { className: r()(eq.Fs, eq.OE) }),
                (0, n.jsx)("span", { className: eq.OC }),
                (0, n.jsxs)("div", {
                    className: eq.si,
                    children: [
                        (0, n.jsx)(eD.TrophyIcon, { size: "xxs", color: T.A.colors.ICON_FEEDBACK_WARNING }),
                        (0, n.jsx)(u.E, {
                            variant: "body-xs/semibold",
                            color: "none",
                            className: eq.o9,
                            children: 128,
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: eq.KQ,
                    children: [
                        (0, n.jsx)(eG.HeartIcon, { size: "xxs", color: T.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, n.jsx)(eG.HeartIcon, { size: "xxs", color: T.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, n.jsx)(eG.HeartIcon, { size: "xxs", color: T.A.colors.ICON_OVERLAY_LIGHT }),
                    ],
                }),
            ],
        });
    },
    bots: function () {
        return (0, n.jsxs)("div", {
            className: eq.x,
            children: [
                (0, n.jsxs)("div", {
                    className: eq.$y,
                    children: [(0, n.jsx)("span", { className: eq.m$ }), (0, n.jsx)(eK, { className: eq.Md })],
                }),
                (0, n.jsxs)("div", {
                    className: eq.iU,
                    children: [
                        (0, n.jsx)("span", {
                            className: r()(eq.my, eq.FY),
                            children: (0, n.jsx)(Y.RobotIcon, { size: "xs", color: T.A.colors.ICON_OVERLAY_LIGHT }),
                        }),
                        (0, n.jsxs)("div", {
                            className: eq.OS,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: eq.f9,
                                    children: [
                                        (0, n.jsx)(eK, { className: eq.iE }),
                                        (0, n.jsx)(u.E, {
                                            variant: "body-xs/semibold",
                                            color: "none",
                                            className: eq.AO,
                                            children: C.intl.string(E.default.VlgiLf),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(eK, { className: eq.xs }),
                                (0, n.jsx)(eK, { className: eq.Md }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    "profile-widgets": function () {
        return (0, n.jsxs)("div", {
            className: r()(eq.x, eq.ME),
            children: [
                (0, n.jsx)("span", { className: eq.CK }),
                (0, n.jsxs)("div", {
                    className: eq.kI,
                    children: [
                        (0, n.jsx)("span", { className: r()(eq.my, eq.jU) }),
                        (0, n.jsx)(eK, { className: eq.iE }),
                        (0, n.jsxs)("div", {
                            className: eq.Wy,
                            children: [
                                (0, n.jsx)("div", {
                                    className: eq.M1,
                                    children: [0, 1].map((e) =>
                                        (0, n.jsxs)(
                                            "div",
                                            {
                                                className: eq.dJ,
                                                children: [
                                                    (0, n.jsx)(eK, { className: eq.cR }),
                                                    (0, n.jsx)(eK, { className: eq.Zh }),
                                                ],
                                            },
                                            e,
                                        ),
                                    ),
                                }),
                                (0, n.jsx)("div", {
                                    className: eq.bW,
                                    children: [0, 1, 2, 3, 4, 5].map((e) =>
                                        (0, n.jsx)("span", { className: eq.QR }, e),
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
            className: eq.JH,
            children: [
                (0, n.jsx)("span", { className: eq.rx }),
                (0, n.jsx)("span", { className: eq.ny }),
                (0, n.jsx)("span", { className: eq.ZH }),
                (0, n.jsx)("div", {
                    className: eq.$Y,
                    children: [0, 1, 2].map((e) =>
                        (0, n.jsxs)(
                            "div",
                            {
                                className: eq.fn,
                                children: [
                                    (0, n.jsx)("span", { className: r()(eq._h, { [eq.zY]: 0 === e }) }),
                                    (0, n.jsx)(eK, { className: eq.Av }),
                                ],
                            },
                            e,
                        ),
                    ),
                }),
                (0, n.jsxs)("div", {
                    className: eq.Y5,
                    children: [
                        (0, n.jsx)(ez.ClockIcon, { size: "xxs", color: T.A.colors.ICON_OVERLAY_LIGHT }),
                        (0, n.jsx)(eK, { className: eq.jB }),
                    ],
                }),
            ],
        });
    },
    automod: function () {
        return (0, n.jsxs)("div", {
            className: eq.x,
            children: [
                (0, n.jsxs)("div", {
                    className: eq.iU,
                    children: [
                        (0, n.jsx)("span", { className: eq.my }),
                        (0, n.jsxs)("div", {
                            className: eq.OS,
                            children: [
                                (0, n.jsx)(eK, { className: eq.iE }),
                                (0, n.jsx)(eK, { className: r()(eq.xs, eq.pc) }),
                                (0, n.jsx)(eK, { className: r()(eq.Md, eq.pc) }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: eq.jC,
                    children: [
                        (0, n.jsx)(X.ShieldIcon, { size: "sm", color: T.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, n.jsxs)("div", {
                            className: eq.qQ,
                            children: [
                                (0, n.jsx)(eK, { className: r()(eq.Md, eq.k8) }),
                                (0, n.jsx)(eK, { className: r()(eq.nq, eq.k8) }),
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
        s = eW[t];
    return (0, n.jsx)(s, {});
}
let e$ = a.memo(function () {
    let e = a.useId();
    return (0, n.jsx)("section", {
        className: eq.GG,
        "aria-labelledby": e,
        children: (0, n.jsx)(eT.F, {
            component: (0, n.jsx)(d.D, {
                id: e,
                variant: "heading-lg/medium",
                children: C.intl.string(E.default.IiQEVd),
            }),
            children: (0, n.jsx)("ul", {
                className: eq.Vg,
                children: eH.map((e) => {
                    let { id: t, title: s, description: a } = e;
                    return (0, n.jsxs)(
                        "li",
                        {
                            className: eq.Vs,
                            children: [
                                (0, n.jsx)("div", {
                                    className: eq.Tn,
                                    "aria-hidden": !0,
                                    children: (0, n.jsx)(eU, { id: t }),
                                }),
                                (0, n.jsxs)("div", {
                                    className: eq.pG,
                                    children: [
                                        (0, n.jsx)(d.D, {
                                            variant: "body-md/semibold",
                                            color: "text-strong",
                                            children: C.intl.string(s),
                                        }),
                                        (0, n.jsx)(u.E, {
                                            variant: "body-sm/normal",
                                            color: "text-subtle",
                                            children: C.intl.string(a),
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
var eB = s(73153);
(s(323874), s(14289), s(35956));
var eX = s(839214),
    eY = s(666476),
    eZ = s(287111),
    eV = s(466280);
let eJ = 1;
function eQ(e) {
    let t = (0, eV.Ft)(e),
        s = { localId: eJ++, name: e.name, contentType: t };
    if ("too-large" === (0, eV.R9)(e, t))
        return { file: e, draft: { ...s, status: "error", errorText: (0, eZ.iW)(t) } };
    let n = eY.XB.has(t) ? URL.createObjectURL(e) : void 0;
    return { file: e, draft: { ...s, status: "ready", previewUrl: n } };
}
function e0(e) {
    null != e.draft.previewUrl && URL.revokeObjectURL(e.draft.previewUrl);
}
let e1 = (0, eX.D)(() => ({ attachments: [] }));
function e2(e) {
    e1.setState({ attachments: e });
}
function e9(e) {
    0 !== e.length && e2([...e1.getState().attachments, ...e.map(eQ)]);
}
function e8(e) {
    let { attachments: t } = e1.getState(),
        s = t.find((t) => t.draft.localId === e);
    null != s && (e0(s), e2(t.filter((e) => e !== s)));
}
function e6(e) {
    e.forEach(e0);
}
eB.h.subscribe("LOGOUT", function () {
    (e1.getState().attachments.forEach(e0), e2([]));
});
let e5 = 0;
eB.h.subscribe("LOGOUT", () => {
    e5 += 1;
});
var e3 = s(698638),
    e4 = s(606128),
    e7 = s(260024);
class te extends Error {}
function tt(e) {
    let t,
        s,
        l,
        { guildId: y, onConjurePage: z = !1 } = e,
        T = (0, D.bG)([G.A], () => G.A.getDraft(_));
    (0, P.N$)(T);
    let H = (0, L.A)(z ? "home" : null),
        [q, W] = a.useState(!1),
        [U, $] = a.useState(null),
        [B, X] = a.useState(null),
        [Y, V] = a.useState(() => M.w.get(O) ?? null ?? !0),
        J = a.useRef(null),
        Q = a.useMemo(() => K().map((e) => ({ ...e, image: Z[e.id] })), []),
        ee =
            ((t = e1.useField("attachments")),
            (s = (0, eV.sm)(e9)),
            {
                attachments: (l = a.useMemo(
                    () =>
                        (function (e) {
                            if (e.length <= 10) return e;
                            let t = (0, eV.XV)();
                            return e.map((e, s) =>
                                s < 10 || "error" === e.draft.status
                                    ? e
                                    : { ...e, draft: { ...e.draft, status: "error", errorText: t } },
                            );
                        })(t),
                    [t],
                )),
                addFiles: e9,
                pasteFiles: s,
                removeAttachment: e8,
                hasErrors: l.some((e) => "error" === e.draft.status),
            }),
        { attachments: et, addFiles: es } = ee,
        ea = (function (e) {
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
                            let a = (await (0, w.A)(e, t)) ?? n,
                                l = await b({
                                    guildId: t,
                                    installScope: a,
                                    modelSettings: s,
                                    start: async (t) => {
                                        try {
                                            let s = await (0, v.vX)(t, e);
                                            (0, j.dv)(t, C.intl.string(E.default["LUc7/5"]), [s]);
                                        } catch {
                                            try {
                                                await (0, N.xx)(t);
                                            } catch {}
                                            throw new I();
                                        }
                                    },
                                });
                            (0, A.A)(l, "create");
                        } catch (e) {
                            (0, g.P0)({
                                text: e instanceof I ? C.intl.string(E.default["Q+l4Hv"]) : (0, p.mG)(e),
                                variant: "critical",
                            });
                        } finally {
                            ((r.current = !1), l(!1));
                        }
                    },
                    [t, s],
                ),
            };
        })({ guildId: y, modelSettings: B }),
        { importArchive: el } = ea,
        er = q || ea.importing,
        ei = "" !== T.trim() || et.length > 0,
        ec = er || !ei || ee.hasErrors,
        eo = (0, x.yN)(
            a.useCallback(
                (e) => {
                    let t;
                    return el(
                        e,
                        z
                            ? "user"
                            : null != (t = f.A.getGuild(y)) && (0, R.sM)(t, "ConjureHomePage")
                              ? "guild"
                              : "user",
                    );
                },
                [el, z, y],
            ),
        ),
        ed = a.useCallback((e) => es(Array.from(e)), [es]);
    (0, F.p)(J);
    let eu = a.useCallback((e) => {
            ((0, k.I)(_, e), $(null));
        }, []),
        em = a.useCallback(
            (e) => {
                eu(e);
                let t = J.current;
                null != t && (t.focus(), t.setSelectionRange(e.length, e.length));
            },
            [eu],
        ),
        eh = a.useRef(!1),
        ef = a.useCallback(async () => {
            let e = T.trim();
            if (("" !== e || 0 !== et.length) && !eh.current) {
                ((eh.current = !0), W(!0), $(null));
                try {
                    let t = await (async function (e, t) {
                        let s = (function () {
                            let { attachments: e } = e1.getState();
                            return (e2([]), e);
                        })();
                        (0, k.I)(_, "");
                        let n = e5;
                        try {
                            let e = await t(s);
                            return (e6(s), e);
                        } catch (t) {
                            throw (
                                e5 !== n
                                    ? e6(s)
                                    : ("" === G.A.getDraft(_) && (0, k.I)(_, e),
                                      e2([...s, ...e1.getState().attachments])),
                                t
                            );
                        }
                    })(T, (t) =>
                        b({
                            guildId: y,
                            modelSettings: B,
                            start: async (s) => {
                                let n = [];
                                if (t.length > 0)
                                    try {
                                        n = await Promise.all(
                                            t.map((e) => {
                                                let { file: t } = e;
                                                return (async function (e, t) {
                                                    if ("fits" === (0, eV.R9)(t, (0, eV.Ft)(t))) return (0, v.vX)(e, t);
                                                    let s = await (0, eV.th)(t);
                                                    if (null == s) throw Error("attachment over its size limit");
                                                    return (0, v.vX)(e, s);
                                                })(s, t);
                                            }),
                                        );
                                    } catch {
                                        throw (await (0, N.xx)(s).catch(() => void 0), new te());
                                    }
                                (0, j.dv)(s, e, n);
                            },
                        }),
                    );
                    ((eh.current = !1), W(!1), (0, A.A)(t, "create"));
                } catch (e) {
                    ($(e instanceof te ? C.intl.string(E.default["903H7m"]) : (0, p.mG)(e)), (eh.current = !1), W(!1));
                }
            }
        }, [T, B, y, et]),
        ex = a.useCallback((e) => {
            (M.w.set(O, e), V(e));
        }, []),
        eg = C.intl.string(Y ? E.default.kar7jh : E.default.WSc5Y2);
    return (0, n.jsx)("div", {
        className: r()(e7.MY, e4.T),
        children: (0, n.jsxs)("div", {
            className: e7.Zp,
            children: [
                (0, n.jsxs)("main", {
                    className: e7.iW,
                    children: [
                        er
                            ? null
                            : (0, n.jsx)(m.A, {
                                  title: C.intl.string(E.default.gy7byi),
                                  description: C.intl.string(E.default["dkv/WO"]),
                                  icons: e3.ir,
                                  onDrop: ed,
                              }),
                        z
                            ? null
                            : (0, n.jsx)(S.A, {
                                  title: C.intl.string(E.default.uk6jhJ),
                                  transparent: !0,
                                  actions: (0, n.jsx)(h.A.Icon, {
                                      icon: i.MenuIcon,
                                      color: "var(--icon-strong)",
                                      className: e7.FW,
                                      tooltip: eg,
                                      "aria-label": eg,
                                      selected: Y,
                                      onClick: () => ex(!Y),
                                  }),
                              }),
                        (0, n.jsx)(c.Ip, {
                            ref: H,
                            className: e7.XG,
                            children: (0, n.jsxs)("div", {
                                className: e7.Qs,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: r()(e7.Lv, { [e7.$O]: z }),
                                        children: [
                                            (0, n.jsxs)("div", {
                                                className: e7.ZK,
                                                children: [
                                                    (0, n.jsx)("div", {
                                                        children: (0, n.jsx)(o.E, {
                                                            type: { text: C.intl.string(E.default.y6T1Nu) },
                                                            variant: "primary",
                                                        }),
                                                    }),
                                                    (0, n.jsx)(d.D, {
                                                        variant: "display-lg",
                                                        color: "text-strong",
                                                        className: e7.DD,
                                                        children: C.intl.string(E.default.doYpEy),
                                                    }),
                                                    (0, n.jsx)(u.E, {
                                                        variant: "body-md/normal",
                                                        color: "text-strong",
                                                        className: e7.VA,
                                                        children: C.intl.string(E.default.BH58fD),
                                                    }),
                                                ],
                                            }),
                                            (0, n.jsxs)("div", {
                                                className: e7.ZK,
                                                children: [
                                                    (0, n.jsx)(e_, {
                                                        idea: T,
                                                        inputRef: J,
                                                        onIdeaChange: eu,
                                                        onSubmit: ef,
                                                        submitting: er,
                                                        submitDisabled: ec,
                                                        error: U,
                                                        modelSettings: B,
                                                        onModelSettingsChange: X,
                                                        attachments: ee,
                                                        onImport: eo.open,
                                                    }),
                                                    eo.input,
                                                    (0, n.jsx)(u.E, {
                                                        variant: "footnote/normal",
                                                        color: "text-muted",
                                                        children: C.intl.string(E.default.hebdhA),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)(en, { inspirations: Q, onCopyPrompt: em }),
                                    (0, n.jsx)(e$, {}),
                                ],
                            }),
                        }),
                    ],
                }),
                Y && !z ? (0, n.jsx)(eb, { guildId: y, archiveImport: ea }) : null,
            ],
        }),
    });
}
