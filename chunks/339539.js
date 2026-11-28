(n.r(t), n.d(t, { default: () => el }));
var r = n(477900),
    i = n(582128),
    l = n(855986),
    o = n(621466),
    u = n(508382),
    a = n(43105),
    s = n(365912),
    d = n(534514),
    c = n(765178),
    f = n(750506),
    h = n(976860),
    m = n(260498),
    g = n(845079),
    p = n(777847),
    v = n(258576),
    E = n(792996),
    w = n(92858);
let j = `[class~="${s.Pb}"], [${u.IP}]`;
function y(e) {
    let { walkthrough: t, targetRef: n } = e,
        o = (0, l.bG)([m.Ay], () => m.Ay.getProject(t.projectId), [t.projectId]),
        [u, a] = i.useState(null);
    return (
        i.useLayoutEffect(() => {
            if (null == u) return;
            let e = u.getBoundingClientRect(),
                t = (t, n) => `translate(${t - e.left - e.width / 2}px, ${n - e.top - e.height / 2}px)`,
                r = window.innerWidth / 2,
                i = window.innerHeight / 2,
                l = t(r, i),
                o = u.animate(
                    [
                        { transform: `${l} scale(1)`, opacity: 0, easing: "ease-out" },
                        { transform: `${l} scale(1.2)`, opacity: 1, offset: 0.2 },
                        { transform: `${l} scale(1.2)`, opacity: 1 },
                    ],
                    { duration: 1250, fill: "forwards" },
                ),
                a = null;
            return (
                (o.onfinish = () => {
                    let l = n.current?.getBoundingClientRect();
                    if (null == l) return void (0, p.vF)();
                    let o = l.left + l.width / 2,
                        s = l.top + l.height / 2,
                        d = Math.hypot(r - o, i - s),
                        c = Math.atan2(i - s, r - o),
                        f = (r - o) * (i - s) >= 0 ? 1 : -1,
                        h = Math.hypot(e.width, e.height) / 2,
                        m = (e, t, n) => Math.min(Math.max(e, t), n - t),
                        g = Array.from({ length: 9 }, (e, n) => {
                            let r = n / 8,
                                i = c + (f * r * Math.PI) / 2,
                                l = d * (1 - r),
                                u = 1.2 - r * (1.2 - 0.3),
                                a = h * u,
                                g = m(o + l * Math.cos(i), a, window.innerWidth),
                                p = m(s + l * Math.sin(i), a, window.innerHeight);
                            return {
                                transform: `${t(g, p)} rotate(${f * r * 360}deg) scale(${u})`,
                                opacity: 1 - 0.5 * r,
                            };
                        });
                    (a = u.animate(g, { duration: 1e3, easing: "ease-in-out", fill: "forwards" })).onfinish = p.vF;
                }),
                window.addEventListener("resize", p.vF),
                () => {
                    (window.removeEventListener("resize", p.vF), o.cancel(), a?.cancel());
                }
            );
        }, [u, n]),
        (0, r.jsxs)("div", {
            ref: a,
            className: w.qy,
            "aria-hidden": !0,
            children: [
                null != o ? (0, r.jsx)(g.A, { project: o, size: "dialog" }) : null,
                (0, r.jsx)(d.D, { variant: "heading-xl/semibold", color: "text-strong", children: t.appName }),
            ],
        })
    );
}
function x(e) {
    ("user:escape" === e || "user:explicit" === e) && (0, p.rK)({ open: !1 });
}
function A() {
    (0, p.rK)({ open: !1, dontShowAgain: !0 });
}
function N(e) {
    let { walkthrough: t } = e,
        { target: n, blocking: l, landed: u, appName: s } = t,
        [d] = i.useState(() => (0, p.US)(n)),
        g = i.useRef(d),
        N = i.useRef(null),
        $ = i.useRef(null),
        C = i.useRef(null),
        [R, S] = i.useState(0),
        T = i.useCallback(() => S((e) => e + 1), []);
    (i.useEffect(() => {
        let e = 0,
            n = "";
        return (
            !(function r() {
                let i = (0, p.US)(t.target),
                    l = m.Ay.getProject(t.projectId);
                if (null == i || !(0, p.Gl)(t, l, (0, h.JK)().location.pathname)) return void (0, p.rK)({ open: !1 });
                i !== g.current && ((g.current = i), T());
                let o = i.getBoundingClientRect(),
                    u = o.left - 4,
                    a = o.top - 4,
                    s = o.right + 4,
                    d = o.bottom + 4,
                    c = `${u} ${a} ${s} ${d} ${window.innerWidth} ${window.innerHeight}`;
                if (c !== n) {
                    n = c;
                    let e = $.current;
                    (null != e &&
                        ((e.style.left = `${u}px`),
                        (e.style.top = `${a}px`),
                        (e.style.width = `${s - u}px`),
                        (e.style.height = `${d - a}px`)),
                        N.current?.style.setProperty(
                            "clip-path",
                            `path(evenodd, "M0 0H${window.innerWidth}V${window.innerHeight}H0Z M${u + 12} ${a}H${s - 12}A12 12 0 0 1 ${s} ${a + 12}V${d - 12}A12 12 0 0 1 ${s - 12} ${d}H${u + 12}A12 12 0 0 1 ${u} ${d - 12}V${a + 12}A12 12 0 0 1 ${u + 12} ${a}Z")`,
                        ));
                }
                e = requestAnimationFrame(r);
            })(),
            () => cancelAnimationFrame(e)
        );
    }, [t, g, N, $, T]),
        i.useEffect(() => {
            function e(e) {
                let t = g.current;
                if (null != t && (0, o.vq)(e.target, Node)) {
                    if ("mouseover" === e.type) t.contains(e.target) && e.stopPropagation();
                    else if ((0, o.vq)(e.relatedTarget, Node) && t.contains(e.relatedTarget)) {
                        let n = t;
                        for (; null != n && !n.contains(e.target);) n = n.parentNode;
                        Object.defineProperty(e, "relatedTarget", { value: n });
                    }
                }
            }
            function t(e) {
                if ((e instanceof KeyboardEvent && "Enter" !== e.key && " " !== e.key) || !(0, o.vq)(e.target, Node))
                    return;
                let t = g.current?.contains(e.target) === !0,
                    n = l && "click" === e.type && C.current?.contains(e.target) !== !0;
                (t || n) && (e.preventDefault(), e.stopPropagation(), t && (0, p.rK)({ open: !0 }));
            }
            return (
                document.addEventListener("click", t, !0),
                document.addEventListener("keydown", t, !0),
                document.addEventListener("mouseover", e, !0),
                document.addEventListener("mouseout", e, !0),
                () => {
                    (document.removeEventListener("click", t, !0),
                        document.removeEventListener("keydown", t, !0),
                        document.removeEventListener("mouseover", e, !0),
                        document.removeEventListener("mouseout", e, !0));
                }
            );
        }, [l, g, C]),
        i.useEffect(() => {
            if (!l) return;
            g.current?.focus();
            let e = new Set(document.querySelectorAll(`:is(${j}) *`));
            function t(e) {
                return !!(0, o.vq)(e, Element) && g.current?.contains(e) !== !0 && C.current?.contains(e) !== !0;
            }
            function n(n) {
                t(n.target) &&
                    (null == n.target.closest(j) || e.has(n.target) ? g.current?.focus() : (0, p.rK)({ open: !1 }));
            }
            function r(e) {
                t(e.target) && e.preventDefault();
            }
            function i(e) {
                let t = g.current;
                if ("Tab" !== e.key || null == t) return;
                let n = [t, ...(C.current?.querySelectorAll('button, [role="link"]') ?? [])],
                    r = n.findIndex((e) => e.contains(document.activeElement));
                (e.preventDefault(), n[(r + (e.shiftKey ? n.length - 1 : 1)) % n.length].focus());
            }
            return (
                document.addEventListener("focusin", n, !0),
                document.addEventListener("mousedown", r, !0),
                document.addEventListener("keydown", i, !0),
                () => {
                    (document.removeEventListener("focusin", n, !0),
                        document.removeEventListener("mousedown", r, !0),
                        document.removeEventListener("keydown", i, !0));
                }
            );
        }, [l, g, C]),
        i.useEffect(() => {
            l && R > 0 && document.activeElement === document.body && g.current?.focus();
        }, [l, R]));
    let {
        title: k,
        body: b,
        position: _,
    } = "wand" === n.kind
        ? {
              title: E.intl.formatToPlainString(v.default.ophl3S, { project: s }),
              body: E.intl.string(v.default.xohQBW),
              position: "bottom",
          }
        : {
              title: E.intl.formatToPlainString(v.default.yWuYoL, { project: s, server: n.name }),
              body: E.intl.string(v.default.o3qloc),
              position: "right",
          };
    return (
        i.useEffect(() => {
            u && c.O.announce(`${k} ${b}`, "polite");
        }, [u, k, b]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(f.Ay, {
                    children: (0, r.jsxs)("div", {
                        children: [
                            l ? (0, r.jsx)("div", { ref: N, className: w.tB }) : null,
                            (0, r.jsx)("div", { ref: $, className: u ? w.hN : w.R, "aria-hidden": !0 }),
                            u ? null : (0, r.jsx)(y, { walkthrough: t, targetRef: g }),
                        ],
                    }),
                }),
                (0, r.jsx)(a.A, {
                    targetElementRef: $,
                    position: _,
                    shouldShow: u,
                    onRequestClose: x,
                    popoverRef: C,
                    title: k,
                    body: b,
                    textLink: { text: E.intl.string(v.default.jnib0s), onClick: A, external: !1 },
                }),
            ],
        })
    );
}
function $() {
    let e = (0, p.bP)();
    return null != e ? (0, r.jsx)(N, { walkthrough: e }, `${e.projectId} ${JSON.stringify(e.target)}`) : null;
}
var C = n(972013),
    R = n(503698),
    S = n.n(R),
    T = n(939249),
    k = n(834730),
    b = n(866665),
    _ = n(152367),
    I = n(189252),
    P = n(318774),
    O = n(831283);
function L(e) {
    let { working: t } = e,
        [n, l] = i.useState(t);
    return (
        t && !n && l(!0),
        i.useEffect(() => {
            if (t || !n) return;
            let e = setTimeout(() => l(!1), 300);
            return () => clearTimeout(e);
        }, [t, n]),
        (0, r.jsx)("span", {
            className: O.W,
            "data-page": t ? void 0 : "chat",
            "data-thinking": t ? "" : void 0,
            role: t ? "img" : void 0,
            "aria-label": t ? E.intl.string(v.default["Y8pS+n"]) : void 0,
            "aria-hidden": !t || void 0,
            children: n ? (0, r.jsx)(P.DA, {}) : null,
        })
    );
}
var U = n(381991),
    q = n(738601),
    D = n(806163),
    H = n(751841),
    J = n(352571),
    M = n(73153),
    B = n(287809),
    K = n(513425);
let F = { turns: {} };
function W(e, t) {
    let { [e]: n, ...r } = F.turns;
    F = { turns: null == t ? r : { ...r, [e]: t } };
}
class z extends l.Ay.PersistedStore {
    static displayName = "ConjureOwnTurnsStore";
    static persistKey = "ConjureOwnTurns";
    initialize(e) {
        this.waitFor(B.default, K.A, m.Ay);
        let t = Date.now() - 6048e5;
        F = {
            turns: Object.fromEntries(
                Object.entries(e?.turns ?? {}).filter((e) => {
                    let [, n] = e;
                    return n.startedAt > t;
                }),
            ),
        };
    }
    getState() {
        return F;
    }
    getStartedAt(e) {
        let t = F.turns[e];
        return null != t && t.userId === B.default.getCurrentUser()?.id ? t.startedAt : null;
    }
}
function G(e) {
    let t = F.turns[e];
    return null != t && !t.settled && (W(e, { ...t, settled: !0 }), !0);
}
function V(e) {
    let { projectId: t, nonce: n } = e,
        r = F.turns[t];
    return !(null == r || (n ?? Date.now()) < r.startedAt) && G(t);
}
function X(e, t) {
    let n = F.turns[e];
    return n?.queuedBehind != null && t !== n.queuedBehind && (W(e, { ...n, queuedBehind: void 0 }), !0);
}
let Z = new z(M.h, {
    CONJURE_CHAT_MESSAGE_APPEND: function (e) {
        let { projectId: t, id: n, userId: r, optimisticId: i } = e,
            l = F.turns[t];
        return null != i
            ? null != l && l.sendId === i && (W(t, { ...l, sendId: n }), !0)
            : null != r &&
                  (r === B.default.getCurrentUser()?.id
                      ? (W(t, { userId: r, startedAt: Date.now(), settled: !1, sendId: n }), !0)
                      : null != F.turns[t] && (W(t, null), !0));
    },
    CONJURE_CHAT_MESSAGE_DISPOSITION: function (e) {
        let { projectId: t, id: n, activeTurnId: r, disposition: i } = e,
            l = F.turns[t];
        if (null == l || l.sendId !== n) return !1;
        let o = "queued" === i || "restarting" === i ? r : void 0;
        return l.queuedBehind !== o && (W(t, { ...l, queuedBehind: o }), !0);
    },
    CONJURE_CHAT_RUNNING_TURN_SET: function (e) {
        let { projectId: t, turnId: n } = e;
        return null != n && X(t, n);
    },
    CONJURE_PROJECT_RUNNING_UPDATE: function (e) {
        let { projectId: t, running: n } = e;
        return n && X(t, null);
    },
    CONJURE_CHAT_TURN_FINISHED: function (e) {
        let { projectId: t } = e;
        return G(t);
    },
    CONJURE_TURN_SETTLED: V,
    CONJURE_TURN_NOTIFICATION: V,
    CONJURE_PROJECT_ACK: function (e) {
        let { projectId: t } = e,
            n = F.turns[t];
        return (
            !(n?.settled !== !0 || null != n.queuedBehind || K.A.isThinking(t) || m.Ay.isProjectRunning(t)) &&
            (W(t, null), !0)
        );
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        return null != F.turns[t] && (W(t, null), !0);
    },
});
function Q(e) {
    return Z.getStartedAt(e.id) ?? 0;
}
var Y = n(162052),
    ee = n(274158);
function et() {
    (0, U.A)();
}
function en(e) {
    let { project: t, working: n, unread: l, alone: o } = e,
        u = E.intl.formatToPlainString(n ? v.default["PsTKx+"] : l ? v.default.CgfUAd : v.default.G6HoRB, {
            name: t.name,
        }),
        a = t.id,
        s = i.useCallback(() => (0, U.A)(a), [a]);
    return (0, r.jsxs)(T.D, {
        tag: "div",
        role: "button",
        className: S()(ee.MX, ee.Dw, ee.v_, { [ee.Bq]: n, [ee.QR]: o }),
        "aria-label": u,
        onClick: s,
        children: [
            l
                ? (0, r.jsx)("span", {
                      className: ee.Iq,
                      "aria-hidden": !0,
                      children: (0, r.jsx)("span", { className: ee.Zm }),
                  })
                : null,
            (0, r.jsx)("span", { className: ee.VJ, children: (0, r.jsx)(g.A, { project: t, size: "header" }) }),
            (0, r.jsx)(k.E, {
                variant: "body-sm/medium",
                color: "none",
                lineClamp: 1,
                className: S()(ee.j1, { [Y.Hz]: n }),
                children: t.name,
            }),
        ],
    });
}
function er(e) {
    let { project: t, showWand: n, wandLabel: i, wandRef: l } = e,
        o = (0, q.yX)(t.id),
        u = "working" === o,
        a = !u && "unread" === o;
    return (0, r.jsxs)("div", {
        className: ee.lD,
        children: [
            (0, r.jsx)(L, { working: u }),
            (0, r.jsx)(en, { project: t, working: u, unread: a, alone: !n }),
            n
                ? (0, r.jsx)(b.m, {
                      position: "bottom",
                      text: i,
                      ariaHidden: !0,
                      children: (0, r.jsx)(T.D, {
                          innerRef: l,
                          tag: "div",
                          role: "button",
                          className: S()(ee.MX, ee.i1, { [ee.Bq]: u }),
                          "aria-label": i,
                          onClick: et,
                          children: (0, r.jsx)(_.MagicWandIcon, { size: "sm", color: "currentColor" }),
                      }),
                  })
                : null,
        ],
    });
}
function ei(e) {
    let { showWand: t } = e,
        n = (function () {
            let { pathname: e } = (0, D.zy)(),
                t = (0, l.yK)([Z, m.Ay], () =>
                    m.Ay.getRailProjects()
                        .filter((e) => null != Z.getStartedAt(e.id))
                        .sort((e, t) => Q(t) - Q(e)),
                );
            return (0, J.A)(t, (0, H.Xj)(e))[0] ?? null;
        })(),
        o = E.intl.string(v.default.uk6jhJ),
        u = i.useRef(null);
    return ((0, p.H2)(u), null != n || t)
        ? (0, r.jsx)("div", {
              className: ee.NI,
              children:
                  null != n
                      ? (0, r.jsx)(er, { project: n, showWand: t, wandLabel: o, wandRef: u }, n.id)
                      : (0, r.jsx)(I.A, { ref: u, icon: _.MagicWandIcon, tooltip: o, onClick: et }),
          })
        : null;
}
function el() {
    let e = (0, l.bG)([C.A], () => C.A.isPinned());
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(ei, { showWand: !e }), (0, r.jsx)($, {})] });
}
