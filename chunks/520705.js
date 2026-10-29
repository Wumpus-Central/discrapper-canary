(n.r(t), n.d(t, { default: () => er }));
var r = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    i = n(621466),
    o = n(17928),
    u = n(866665),
    c = n(408278),
    d = n(834730),
    m = n(834040),
    f = n(811893),
    h = n(70688),
    p = n(43990),
    v = n(47294),
    g = n(16961),
    x = n(429913),
    b = n(747180),
    C = n(343030),
    j = n(91242),
    k = n(545691),
    y = n(317608),
    I = n(241696),
    A = n(548118),
    L = n(956790),
    E = n(699426),
    w = n(71393),
    N = n(186111),
    S = n(381991),
    T = n(754027),
    M = n(327152),
    D = n(260498),
    P = n(919417),
    F = n(228946),
    O = n(358618),
    G = n(983851),
    R = n(625180),
    B = n(620999),
    H = n(248675),
    U = n(105292);
function _(e) {
    e.stopPropagation();
}
function K(e) {
    let { frame: t, className: n } = e;
    if (!(0, B.v)(t)) return null;
    let { userMuted: l } = t.data,
        a = U.intl.string(l ? H.default.bd0Ufh : H.default.dxBzpe);
    return (0, r.jsx)("div", {
        className: n,
        children: (0, r.jsx)(u.m, {
            text: a,
            children: (0, r.jsx)(c.K, {
                size: "sm",
                variant: "overlay-secondary",
                "aria-label": a,
                icon: l ? O._ : G.H,
                onMouseDown: _,
                onClick: (e) => {
                    (e.stopPropagation(), R.A.setFrameUserMuted(t.id, !l));
                },
            }),
        }),
    });
}
var z = n(506868),
    X = n(652215),
    $ = n(165610),
    J = n(715803),
    V = n(155819),
    W = n(969426);
function Y(e) {
    if (!(0, T.Q5)(e.surface)) return void (0, F.returnToConjureFrameSurface)(e);
    let t = D.Ay.findProjectByApplicationId(e.applicationId);
    null != t && (0, S.Ay)(t.id);
}
function Q(e) {
    let { width: t, height: n } = e;
    return Math.min(320 / t, 180 / n);
}
function Z(e) {
    let t,
        n,
        l,
        a,
        { frameId: s, level: i, overlay: o } = e,
        u = (0, M.L1)(s);
    return (0, r.jsx)("div", {
        className: J.GL,
        style:
            null != u
                ? ((t = Q(u)),
                  (n = (320 - u.width * t) / 2),
                  (l = (180 - u.height * t) / 2),
                  { width: u.width, height: u.height, transform: `translate(${n}px, ${l}px) scale(${t})` })
                : void 0,
        children: (0, r.jsx)(y.A, {
            frameId: s,
            level: i,
            className: J.Z7,
            overlay:
                null != u && null != o
                    ? (0, r.jsx)("div", {
                          className: J.bW,
                          style:
                              ((a = Q(u)), { width: u.width * a, height: u.height * a, transform: `scale(${1 / a})` }),
                          children: o,
                      })
                    : o,
        }),
    });
}
function q(e) {
    let { label: t, icon: n, onClick: l } = e;
    return (0, r.jsx)(u.m, {
        text: t,
        position: "top",
        asContainer: !0,
        children: (0, r.jsx)(c.K, { variant: "icon-only", size: "sm", "aria-label": t, icon: n, onClick: l }),
    });
}
function ee(e) {
    let { frame: t, applicationName: n } = e,
        l = (0, b.A)(t.surface),
        a = (0, o.bG)([w.A], () => w.A.getGuild(l), [l]),
        s = (0, g.G)();
    return (0, r.jsx)("div", {
        className: J.Q,
        children: (0, r.jsxs)("div", {
            className: J.KE,
            children: [
                null != a ? (0, r.jsx)(A.Ay, { guild: a, size: A.Ay.Sizes.MINI, className: J.$f }) : null,
                (0, r.jsx)(d.E, {
                    variant: "text-sm/medium",
                    color: "text-strong",
                    lineClamp: 1,
                    className: J.JB,
                    children: n,
                }),
                (0, r.jsxs)("div", {
                    className: J.FS,
                    children: [
                        (0, r.jsx)(q, {
                            label: U.intl.string(H.default.tfKtLw),
                            icon: m.MinusIcon,
                            onClick: () => (0, P.Gt)(t.applicationId, !1),
                        }),
                        s
                            ? (0, r.jsx)(q, {
                                  label: U.intl.string(U.t["3Zypbv"]),
                                  icon: f.t,
                                  onClick: () => (0, v.A)({ onConfirm: () => (0, I.A)(t.id) }),
                              })
                            : null,
                        (0, r.jsx)(q, {
                            label: U.intl.string(U.t.VkMnR2),
                            icon: h.DoorExitIcon,
                            onClick: () => (0, k.A)(t.id),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function et(e) {
    let { frameId: t, onHoverChange: n, onPress: a, onUnmount: u, shouldIgnoreClick: c } = e,
        d = (0, o.bG)([j.A], () => (0, $.ny)(j.A.getFrame(t)), [t]),
        m = (0, x.h)(d?.applicationId)?.name ?? "";
    return (l.useEffect(
        () => () => {
            (u(t), n(t, !1));
        },
        [t, n, u],
    ),
    null == d)
        ? null
        : (0, r.jsx)(p.N, {
              theme: X.NJ8.DARK,
              children: (e) =>
                  (0, r.jsxs)("div", {
                      className: s()(J.Nr, e),
                      onMouseEnter: () => n(t, !0),
                      onMouseLeave: () => n(t, !1),
                      onMouseDown: (e) => {
                          let { target: n } = e,
                              r = (0, i.vq)(n, Element) && null != n.closest("button");
                          a(t, e.currentTarget, e.nativeEvent, !r);
                      },
                      onFocus: () => n(t, !0),
                      onBlur: (e) => {
                          e.currentTarget.contains(e.relatedTarget) || n(t, !1);
                      },
                      children: [
                          (0, r.jsx)(ee, { frame: d, applicationName: m }),
                          (0, r.jsx)("div", {
                              role: "button",
                              tabIndex: 0,
                              "aria-label": U.intl.formatToPlainString(H.default.dPf03z, { appName: m }),
                              className: s()(J.VH, W.a8),
                              onClick: () => {
                                  c() || Y(d);
                              },
                              onKeyDown: (e) => {
                                  e.target === e.currentTarget &&
                                      ("Enter" === e.key || " " === e.key) &&
                                      (e.preventDefault(), Y(d));
                              },
                              children: (0, r.jsx)(Z, {
                                  frameId: d.id,
                                  level: C.A.AboveAppContent,
                                  overlay: (0, r.jsx)(K, { frame: d, className: s()(J.Lu, e) }),
                              }),
                          }),
                      ],
                  }),
          });
}
function en(e) {
    let { frameId: t } = e;
    return (0, r.jsx)("div", {
        className: J.tF,
        "aria-hidden": !0,
        children: (0, r.jsx)(Z, { frameId: t, level: C.A.Backstage }),
    });
}
function er(e) {
    var t;
    let n,
        a,
        { maxX: i, maxY: u, appContext: c, floatingPictureInPicture: d } = e,
        { shown: m, hidden: f } =
            ((t = (0, z.DU)()),
            (n = (0, P.sI)()),
            (a = (0, o.yK)(
                [j.A],
                () =>
                    t.filter((e) => {
                        let t = j.A.getFrame(e)?.applicationId;
                        return null != t && n.has(t);
                    }),
                [t, n],
            )),
            l.useMemo(() => ({ shown: t.filter((e) => !a.includes(e)), hidden: a }), [t, a])),
        h = (0, o.bG)([N.A], () => N.A.hasLayers()),
        [p, v] = l.useState(() => new Map()),
        [g, x] = l.useState(() => new Map()),
        [b, C] = l.useState(!1),
        k = l.useRef(!1),
        y = l.useCallback((e, t) => {
            v((n) => new Map(n).set(e, t));
        }, []),
        I = l.useCallback((e, t) => {
            x((n) => (n.get(e) === t ? n : new Map(n).set(e, t)));
        }, []),
        A = (function () {
            let [e, t] = l.useState(null),
                [n, r] = l.useState(null),
                [a, s] = l.useState(null),
                i = l.useRef(null),
                o = l.useRef(null),
                u = l.useCallback((e, n) => {
                    t((t) => (n ? e : t === e ? null : t));
                }, []),
                c = l.useCallback(
                    (e, t, n) => {
                        var r;
                        return (
                            (r = { ...e, top: e.top - 40 }), t >= r.left && t < r.right && n >= r.top && n < r.bottom
                        );
                    },
                    [40],
                ),
                d = l.useCallback(() => {
                    (i.current?.removeListeners(), (i.current = null), r(null));
                }, []),
                m = l.useCallback(() => {
                    (o.current?.removeListeners(), (o.current = null), s(null));
                }, []),
                f = l.useCallback(
                    (e, t) => {
                        o.current?.frameId !== e && u(e, t);
                    },
                    [u],
                ),
                h = l.useCallback(
                    (e, t, n, l) => {
                        (d(), m());
                        let a = t.ownerDocument.defaultView;
                        if (0 !== n.button || null == a) return;
                        let s = { frameId: e, pressed: !0, dragged: !1, view: a, removeListeners: () => {} };
                        function o() {
                            s.dragged || d();
                        }
                        function u(e) {
                            s.pressed && (1 & e.buttons) == 0 && o();
                        }
                        function c(e) {
                            0 === e.button && s.pressed && ((s.pressed = !1), o());
                        }
                        (a.addEventListener("mousemove", u),
                            a.addEventListener("mouseup", c),
                            a.addEventListener("pointercancel", d),
                            a.addEventListener("blur", o),
                            (s.removeListeners = () => {
                                (a.removeEventListener("mousemove", u),
                                    a.removeEventListener("mouseup", c),
                                    a.removeEventListener("pointercancel", d),
                                    a.removeEventListener("blur", o));
                            }),
                            (i.current = s),
                            l && r(e));
                    },
                    [d, m],
                ),
                p = l.useCallback(() => {
                    i.current?.pressed === !0 && (i.current.dragged = !0);
                }, []),
                v = l.useCallback(
                    (e, t, n) => {
                        let r = i.current;
                        if ((d(), m(), null == r || r.frameId !== e || null == n)) return;
                        let { frameId: l, view: a } = r;
                        u(l, c(n, t.x, t.y));
                        let f = { frameId: l, rect: n, x: t.x, y: t.y, removeListeners: () => {} };
                        function h(e) {
                            ((f.x = e.clientX), (f.y = e.clientY), u(l, c(f.rect, f.x, f.y)));
                        }
                        (a.addEventListener("mousemove", h),
                            (f.removeListeners = () => a.removeEventListener("mousemove", h)),
                            (o.current = f),
                            s(l));
                    },
                    [d, m, c, u],
                ),
                g = l.useCallback(
                    (e, t) => {
                        let n = o.current;
                        null != n && n.frameId === e && (m(), null != t && u(n.frameId, c(t, n.x, n.y)));
                    },
                    [m, c, u],
                ),
                x = l.useCallback(
                    (e) => {
                        (i.current?.frameId === e && d(), o.current?.frameId === e && m());
                    },
                    [d, m],
                );
            return (
                l.useEffect(
                    () => () => {
                        (i.current?.removeListeners(), o.current?.removeListeners());
                    },
                    [],
                ),
                {
                    isToolbarShown: l.useCallback((t) => e === t || n === t, [e, n]),
                    isSnapping: l.useCallback((e) => a === e, [a]),
                    handleHoverChange: f,
                    handlePress: h,
                    handleDragStart: p,
                    handleDragRelease: v,
                    handleDragSettle: g,
                    releaseFrame: x,
                }
            );
        })(),
        { handleDragStart: w } = A,
        S = l.useCallback(() => {
            ((k.current = !0), C(!0), w());
        }, [w]),
        T = l.useCallback(() => {
            (C(!1),
                setTimeout(() => {
                    k.current = !1;
                }, 0));
        }, []),
        M = l.useCallback(() => k.current, []);
    if (0 === m.length && 0 === f.length) return null;
    let D = new Map();
    return (
        null != d && d.height > 0 && D.set(d.position, d.height + 8),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(E.Ay, {
                    children: (0, r.jsx)("div", {
                        className: s()(V._I, { [V.cB]: b }),
                        children: m.map((e) => {
                            let t = p.get(e) ?? X.CUs.BOTTOM_RIGHT,
                                n = D.get(t) ?? 0,
                                l = g.get(e) ?? 0;
                            l > 0 && D.set(t, n + l + 8);
                            let a = t === X.CUs.TOP_LEFT || t === X.CUs.TOP_RIGHT;
                            return (0, r.jsx)(
                                L.S8,
                                {
                                    id: e,
                                    className: s()(J.x, { [J.yo]: A.isToolbarShown(e), [J.HJ]: A.isSnapping(e) }),
                                    position: t,
                                    hidden: h,
                                    appContext: c,
                                    maxX: i,
                                    maxY: u,
                                    edgeOffsetTop: L.X8.top + (a ? n : 0),
                                    edgeOffsetBottom: L.X8.bottom + (a ? 0 : n),
                                    edgeOffsetLeft: L.X8.left,
                                    edgeOffsetRight: L.X8.right,
                                    onMove: y,
                                    onHeightChange: I,
                                    onDragStart: S,
                                    onDragEnd: T,
                                    onDragRelease: A.handleDragRelease,
                                    onDragSettle: A.handleDragSettle,
                                    dragInsetTop: 40,
                                    children: (0, r.jsx)(et, {
                                        frameId: e,
                                        onHoverChange: A.handleHoverChange,
                                        onPress: A.handlePress,
                                        onUnmount: A.releaseFrame,
                                        shouldIgnoreClick: M,
                                    }),
                                },
                                e,
                            );
                        }),
                    }),
                }),
                f.map((e) => (0, r.jsx)(en, { frameId: e }, e)),
            ],
        })
    );
}
