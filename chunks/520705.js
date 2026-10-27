(n.r(t), n.d(t, { default: () => W }));
var r = n(477900),
    a = n(582128),
    l = n(503698),
    s = n.n(l),
    o = n(621466),
    i = n(17928),
    u = n(866665),
    c = n(408278),
    d = n(834730),
    m = n(834040),
    f = n(811893),
    p = n(70688),
    v = n(43990),
    g = n(47294),
    h = n(16961),
    b = n(429913),
    x = n(747180),
    C = n(343030),
    k = n(91242),
    j = n(545691),
    I = n(317608),
    A = n(241696),
    E = n(548118),
    L = n(956790),
    y = n(699426),
    N = n(71393),
    S = n(186111),
    T = n(919417),
    w = n(228946),
    D = n(358618),
    M = n(983851),
    F = n(625180),
    P = n(620999),
    O = n(248675),
    R = n(105292);
function G(e) {
    e.stopPropagation();
}
function B(e) {
    let { frame: t, className: n } = e;
    if (!(0, P.v)(t)) return null;
    let { userMuted: a } = t.data,
        l = R.intl.string(a ? O.default.bd0Ufh : O.default.dxBzpe);
    return (0, r.jsx)("div", {
        className: n,
        children: (0, r.jsx)(u.m, {
            text: l,
            children: (0, r.jsx)(c.K, {
                size: "sm",
                variant: "overlay-secondary",
                "aria-label": l,
                icon: a ? D._ : M.H,
                onMouseDown: G,
                onClick: (e) => {
                    (e.stopPropagation(), F.A.setFrameUserMuted(t.id, !a));
                },
            }),
        }),
    });
}
var H = n(506868),
    U = n(652215),
    _ = n(165610),
    K = n(715803),
    z = n(155819),
    X = n(969426);
function J(e) {
    let { label: t, icon: n, onClick: a } = e;
    return (0, r.jsx)(u.m, {
        text: t,
        position: "top",
        asContainer: !0,
        children: (0, r.jsx)(c.K, { variant: "icon-only", size: "sm", "aria-label": t, icon: n, onClick: a }),
    });
}
function V(e) {
    let { frame: t, applicationName: n } = e,
        a = (0, x.A)(t.surface),
        l = (0, i.bG)([N.A], () => N.A.getGuild(a), [a]),
        s = (0, h.G)();
    return (0, r.jsx)("div", {
        className: K.Q,
        children: (0, r.jsxs)("div", {
            className: K.KE,
            children: [
                null != l ? (0, r.jsx)(E.Ay, { guild: l, size: E.Ay.Sizes.MINI, className: K.$f }) : null,
                (0, r.jsx)(d.E, {
                    variant: "text-sm/medium",
                    color: "text-strong",
                    lineClamp: 1,
                    className: K.JB,
                    children: n,
                }),
                (0, r.jsxs)("div", {
                    className: K.FS,
                    children: [
                        (0, r.jsx)(J, {
                            label: R.intl.string(O.default.tfKtLw),
                            icon: m.MinusIcon,
                            onClick: () => (0, T.Gt)(t.applicationId, !1),
                        }),
                        s
                            ? (0, r.jsx)(J, {
                                  label: R.intl.string(R.t["3Zypbv"]),
                                  icon: f.t,
                                  onClick: () => (0, g.A)({ onConfirm: () => (0, A.A)(t.id) }),
                              })
                            : null,
                        (0, r.jsx)(J, {
                            label: R.intl.string(R.t.VkMnR2),
                            icon: p.DoorExitIcon,
                            onClick: () => (0, j.A)(t.id),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function Y(e) {
    let { frameId: t, onHoverChange: n, onPress: l, onUnmount: u, shouldIgnoreClick: c } = e,
        d = (0, i.bG)([k.A], () => (0, _.ny)(k.A.getFrame(t)), [t]),
        m = (0, b.h)(d?.applicationId)?.name ?? "";
    return (a.useEffect(
        () => () => {
            (u(t), n(t, !1));
        },
        [t, n, u],
    ),
    null == d)
        ? null
        : (0, r.jsx)(v.N, {
              theme: U.NJ8.DARK,
              children: (e) =>
                  (0, r.jsxs)("div", {
                      className: s()(K.Nr, e),
                      onMouseEnter: () => n(t, !0),
                      onMouseLeave: () => n(t, !1),
                      onMouseDown: (e) => {
                          let { target: n } = e,
                              r = (0, o.vq)(n, Element) && null != n.closest("button");
                          l(t, e.currentTarget, e.nativeEvent, !r);
                      },
                      onFocus: () => n(t, !0),
                      onBlur: (e) => {
                          e.currentTarget.contains(e.relatedTarget) || n(t, !1);
                      },
                      children: [
                          (0, r.jsx)(V, { frame: d, applicationName: m }),
                          (0, r.jsx)("div", {
                              role: "button",
                              tabIndex: 0,
                              "aria-label": R.intl.formatToPlainString(O.default.dPf03z, { appName: m }),
                              className: s()(K.VH, X.a8),
                              onClick: () => {
                                  c() || (0, w.returnToConjureFrameSurface)(d);
                              },
                              onKeyDown: (e) => {
                                  e.target === e.currentTarget &&
                                      ("Enter" === e.key || " " === e.key) &&
                                      (e.preventDefault(), (0, w.returnToConjureFrameSurface)(d));
                              },
                              children: (0, r.jsx)(I.A, {
                                  frameId: d.id,
                                  level: C.A.AboveAppContent,
                                  className: K.Z7,
                                  overlay: (0, r.jsx)(B, { frame: d, className: s()(K.Lu, e) }),
                              }),
                          }),
                      ],
                  }),
          });
}
function Z(e) {
    let { frameId: t } = e;
    return (0, r.jsx)("div", {
        className: K.tF,
        "aria-hidden": !0,
        children: (0, r.jsx)(I.A, { frameId: t, level: C.A.Backstage, className: K.Z7 }),
    });
}
function W(e) {
    var t;
    let n,
        l,
        { maxX: o, maxY: u, appContext: c, floatingPictureInPicture: d } = e,
        { shown: m, hidden: f } =
            ((t = (0, H.DU)()),
            (n = (0, T.sI)()),
            (l = (0, i.yK)(
                [k.A],
                () =>
                    t.filter((e) => {
                        let t = k.A.getFrame(e)?.applicationId;
                        return null != t && n.has(t);
                    }),
                [t, n],
            )),
            a.useMemo(() => ({ shown: t.filter((e) => !l.includes(e)), hidden: l }), [t, l])),
        p = (0, i.bG)([S.A], () => S.A.hasLayers()),
        [v, g] = a.useState(() => new Map()),
        [h, b] = a.useState(() => new Map()),
        [x, C] = a.useState(!1),
        j = a.useRef(!1),
        I = a.useCallback((e, t) => {
            g((n) => new Map(n).set(e, t));
        }, []),
        A = a.useCallback((e, t) => {
            b((n) => (n.get(e) === t ? n : new Map(n).set(e, t)));
        }, []),
        E = (function () {
            let [e, t] = a.useState(null),
                [n, r] = a.useState(null),
                [l, s] = a.useState(null),
                o = a.useRef(null),
                i = a.useRef(null),
                u = a.useCallback((e, n) => {
                    t((t) => (n ? e : t === e ? null : t));
                }, []),
                c = a.useCallback(
                    (e, t, n) => {
                        var r;
                        return (
                            (r = { ...e, top: e.top - 40 }), t >= r.left && t < r.right && n >= r.top && n < r.bottom
                        );
                    },
                    [40],
                ),
                d = a.useCallback(() => {
                    (o.current?.removeListeners(), (o.current = null), r(null));
                }, []),
                m = a.useCallback(() => {
                    (i.current?.removeListeners(), (i.current = null), s(null));
                }, []),
                f = a.useCallback(
                    (e, t) => {
                        i.current?.frameId !== e && u(e, t);
                    },
                    [u],
                ),
                p = a.useCallback(
                    (e, t, n, a) => {
                        (d(), m());
                        let l = t.ownerDocument.defaultView;
                        if (0 !== n.button || null == l) return;
                        let s = { frameId: e, pressed: !0, dragged: !1, view: l, removeListeners: () => {} };
                        function i() {
                            s.dragged || d();
                        }
                        function u(e) {
                            s.pressed && (1 & e.buttons) == 0 && i();
                        }
                        function c(e) {
                            0 === e.button && s.pressed && ((s.pressed = !1), i());
                        }
                        (l.addEventListener("mousemove", u),
                            l.addEventListener("mouseup", c),
                            l.addEventListener("pointercancel", d),
                            l.addEventListener("blur", i),
                            (s.removeListeners = () => {
                                (l.removeEventListener("mousemove", u),
                                    l.removeEventListener("mouseup", c),
                                    l.removeEventListener("pointercancel", d),
                                    l.removeEventListener("blur", i));
                            }),
                            (o.current = s),
                            a && r(e));
                    },
                    [d, m],
                ),
                v = a.useCallback(() => {
                    o.current?.pressed === !0 && (o.current.dragged = !0);
                }, []),
                g = a.useCallback(
                    (e, t, n) => {
                        let r = o.current;
                        if ((d(), m(), null == r || r.frameId !== e || null == n)) return;
                        let { frameId: a, view: l } = r;
                        u(a, c(n, t.x, t.y));
                        let f = { frameId: a, rect: n, x: t.x, y: t.y, removeListeners: () => {} };
                        function p(e) {
                            ((f.x = e.clientX), (f.y = e.clientY), u(a, c(f.rect, f.x, f.y)));
                        }
                        (l.addEventListener("mousemove", p),
                            (f.removeListeners = () => l.removeEventListener("mousemove", p)),
                            (i.current = f),
                            s(a));
                    },
                    [d, m, c, u],
                ),
                h = a.useCallback(
                    (e, t) => {
                        let n = i.current;
                        null != n && n.frameId === e && (m(), null != t && u(n.frameId, c(t, n.x, n.y)));
                    },
                    [m, c, u],
                ),
                b = a.useCallback(
                    (e) => {
                        (o.current?.frameId === e && d(), i.current?.frameId === e && m());
                    },
                    [d, m],
                );
            return (
                a.useEffect(
                    () => () => {
                        (o.current?.removeListeners(), i.current?.removeListeners());
                    },
                    [],
                ),
                {
                    isToolbarShown: a.useCallback((t) => e === t || n === t, [e, n]),
                    isSnapping: a.useCallback((e) => l === e, [l]),
                    handleHoverChange: f,
                    handlePress: p,
                    handleDragStart: v,
                    handleDragRelease: g,
                    handleDragSettle: h,
                    releaseFrame: b,
                }
            );
        })(),
        { handleDragStart: N } = E,
        w = a.useCallback(() => {
            ((j.current = !0), C(!0), N());
        }, [N]),
        D = a.useCallback(() => {
            (C(!1),
                setTimeout(() => {
                    j.current = !1;
                }, 0));
        }, []),
        M = a.useCallback(() => j.current, []);
    if (0 === m.length && 0 === f.length) return null;
    let F = new Map();
    return (
        null != d && d.height > 0 && F.set(d.position, d.height + 8),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(y.Ay, {
                    children: (0, r.jsx)("div", {
                        className: s()(z._I, { [z.cB]: x }),
                        children: m.map((e) => {
                            let t = v.get(e) ?? U.CUs.BOTTOM_RIGHT,
                                n = F.get(t) ?? 0,
                                a = h.get(e) ?? 0;
                            a > 0 && F.set(t, n + a + 8);
                            let l = t === U.CUs.TOP_LEFT || t === U.CUs.TOP_RIGHT;
                            return (0, r.jsx)(
                                L.S8,
                                {
                                    id: e,
                                    className: s()(K.x, { [K.yo]: E.isToolbarShown(e), [K.HJ]: E.isSnapping(e) }),
                                    position: t,
                                    hidden: p,
                                    appContext: c,
                                    maxX: o,
                                    maxY: u,
                                    edgeOffsetTop: L.X8.top + (l ? n : 0),
                                    edgeOffsetBottom: L.X8.bottom + (l ? 0 : n),
                                    edgeOffsetLeft: L.X8.left,
                                    edgeOffsetRight: L.X8.right,
                                    onMove: I,
                                    onHeightChange: A,
                                    onDragStart: w,
                                    onDragEnd: D,
                                    onDragRelease: E.handleDragRelease,
                                    onDragSettle: E.handleDragSettle,
                                    dragInsetTop: 40,
                                    children: (0, r.jsx)(Y, {
                                        frameId: e,
                                        onHoverChange: E.handleHoverChange,
                                        onPress: E.handlePress,
                                        onUnmount: E.releaseFrame,
                                        shouldIgnoreClick: M,
                                    }),
                                },
                                e,
                            );
                        }),
                    }),
                }),
                f.map((e) => (0, r.jsx)(Z, { frameId: e }, e)),
            ],
        })
    );
}
