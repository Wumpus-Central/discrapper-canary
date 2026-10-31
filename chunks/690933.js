(n.r(t), n.d(t, { default: () => en }));
var r = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    i = n(621466),
    o = n(17928),
    u = n(866665),
    c = n(408278),
    d = n(834730),
    m = n(26430),
    f = n(834040),
    v = n(70688),
    h = n(43990),
    p = n(429582),
    g = n(429913),
    x = n(747180),
    b = n(343030),
    C = n(91242),
    j = n(545691),
    k = n(317608),
    L = n(271982),
    y = n(548118),
    E = n(956790),
    I = n(699426),
    A = n(71393),
    w = n(186111),
    N = n(381991),
    S = n(754027),
    T = n(327152),
    M = n(260498),
    D = n(919417),
    F = n(228946),
    P = n(358618),
    G = n(983851),
    R = n(625180),
    B = n(620999),
    H = n(809526),
    K = n(105292);
function O(e) {
    e.stopPropagation();
}
function _(e) {
    let { frame: t, className: n } = e;
    if (!(0, B.v)(t)) return null;
    let { userMuted: l } = t.data,
        a = K.intl.string(l ? H.default.bd0Ufh : H.default.dxBzpe);
    return (0, r.jsx)("div", {
        className: n,
        children: (0, r.jsx)(u.m, {
            text: a,
            children: (0, r.jsx)(c.K, {
                size: "sm",
                variant: "overlay-secondary",
                "aria-label": a,
                icon: l ? P._ : G.H,
                onMouseDown: O,
                onClick: (e) => {
                    (e.stopPropagation(), R.A.setFrameUserMuted(t.id, !l));
                },
            }),
        }),
    });
}
var z = n(506868),
    U = n(652215),
    X = n(165610),
    $ = n(715803),
    J = n(155819),
    Q = n(969426);
function V(e) {
    if (!(0, S.Q5)(e.surface)) return void (0, F.returnToConjureFrameSurface)(e);
    let t = M.Ay.findProjectByApplicationId(e.applicationId);
    null != t && (0, N.Ay)(t.id);
}
function W(e) {
    let { width: t, height: n } = e;
    return Math.min(320 / t, 180 / n);
}
function Y(e) {
    let t,
        n,
        l,
        a,
        { frameId: s, level: i, overlay: o } = e,
        u = (0, T.L1)(s);
    return (0, r.jsx)("div", {
        className: $.GL,
        style:
            null != u
                ? ((t = W(u)),
                  (n = (320 - u.width * t) / 2),
                  (l = (180 - u.height * t) / 2),
                  { width: u.width, height: u.height, transform: `translate(${n}px, ${l}px) scale(${t})` })
                : void 0,
        children: (0, r.jsx)(k.A, {
            frameId: s,
            level: i,
            className: $.Z7,
            overlay:
                null != u && null != o
                    ? (0, r.jsx)("div", {
                          className: $.bW,
                          style:
                              ((a = W(u)), { width: u.width * a, height: u.height * a, transform: `scale(${1 / a})` }),
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
function Z(e) {
    let { frame: t, applicationName: n, interactive: l } = e,
        a = (0, x.A)(t.surface),
        s = (0, o.bG)([A.A], () => A.A.getGuild(a), [a]);
    return (0, r.jsx)("div", {
        className: $.Q,
        children: (0, r.jsxs)("div", {
            className: $.KE,
            children: [
                null != s ? (0, r.jsx)(y.Ay, { guild: s, size: y.Ay.Sizes.MINI, className: $.$f }) : null,
                (0, r.jsx)(d.E, {
                    variant: "text-sm/medium",
                    color: "text-strong",
                    lineClamp: 1,
                    className: $.JB,
                    children: n,
                }),
                (0, r.jsxs)("div", {
                    className: $.FS,
                    children: [
                        l
                            ? (0, r.jsx)(q, {
                                  label: K.intl.formatToPlainString(H.default.dPf03z, { appName: n }),
                                  icon: m._,
                                  onClick: () => V(t),
                              })
                            : null,
                        (0, r.jsx)(q, {
                            label: K.intl.string(H.default.tfKtLw),
                            icon: f.MinusIcon,
                            onClick: () => (0, D.Gt)(t.applicationId, !1),
                        }),
                        (0, r.jsx)(q, {
                            label: K.intl.string(K.t.VkMnR2),
                            icon: v.DoorExitIcon,
                            onClick: () => (0, j.A)(t.id),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function ee(e) {
    let { frameId: t, onHoverChange: n, onPress: a, onUnmount: u, shouldIgnoreClick: c } = e,
        d = (0, o.bG)([C.A], () => (0, X.ny)(C.A.getFrame(t)), [t]),
        m = (0, g.h)(d?.applicationId)?.name ?? "",
        f = (0, z.Gl)(t),
        v = l.useSyncExternalStore(L.A.subscribe, () => L.A.getFrameEntry(t)?.container ?? null);
    return (l.useEffect(() => {
        if (!f || null == v) return;
        let e = () => n(t, !0),
            r = () => n(t, !1);
        return (
            v.addEventListener("mouseenter", e),
            v.addEventListener("mouseleave", r),
            () => {
                (v.removeEventListener("mouseenter", e), v.removeEventListener("mouseleave", r));
            }
        );
    }, [t, f, n, v]),
    l.useEffect(
        () => () => {
            (u(t), n(t, !1));
        },
        [t, n, u],
    ),
    null == d)
        ? null
        : (0, r.jsx)(h.N, {
              theme: U.NJ8.DARK,
              children: (e) =>
                  (0, r.jsxs)("div", {
                      className: s()($.Nr, e),
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
                          (0, r.jsx)(Z, { frame: d, applicationName: m, interactive: f }),
                          (0, r.jsx)("div", {
                              role: "button",
                              tabIndex: 0,
                              "aria-label": K.intl.formatToPlainString(H.default.dPf03z, { appName: m }),
                              className: s()($.VH, Q.a8, { [$.bG]: f }),
                              [p.KQ]: "",
                              onClick: f
                                  ? void 0
                                  : () => {
                                        c() || V(d);
                                    },
                              onKeyDown: (e) => {
                                  e.target === e.currentTarget &&
                                      ("Enter" === e.key || " " === e.key) &&
                                      (e.preventDefault(), V(d));
                              },
                              children: (0, r.jsx)(Y, {
                                  frameId: d.id,
                                  level: b.A.AboveAppContent,
                                  overlay: (0, r.jsx)(_, { frame: d, className: s()($.Lu, e) }),
                              }),
                          }),
                      ],
                  }),
          });
}
function et(e) {
    let { frameId: t } = e;
    return (0, r.jsx)("div", {
        className: $.tF,
        "aria-hidden": !0,
        children: (0, r.jsx)(Y, { frameId: t, level: b.A.Backstage }),
    });
}
function en(e) {
    let t,
        n,
        { maxX: a, maxY: i, appContext: u, floatingPictureInPicture: c } = e,
        d = (0, z.DU)();
    (0, z.W4)(d);
    let { shown: m, hidden: f } =
            ((t = (0, D.sI)()),
            (n = (0, o.yK)(
                [C.A],
                () =>
                    d.filter((e) => {
                        let n = C.A.getFrame(e)?.applicationId;
                        return null != n && t.has(n);
                    }),
                [d, t],
            )),
            l.useMemo(() => ({ shown: d.filter((e) => !n.includes(e)), hidden: n }), [d, n])),
        v = (0, o.bG)([w.A], () => w.A.hasLayers()),
        [h, p] = l.useState(() => new Map()),
        [g, x] = l.useState(() => new Map()),
        [b, j] = l.useState(!1),
        k = l.useRef(!1),
        L = l.useCallback((e, t) => {
            p((n) => new Map(n).set(e, t));
        }, []),
        y = l.useCallback((e, t) => {
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
                v = l.useCallback(
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
                h = l.useCallback(() => {
                    i.current?.pressed === !0 && (i.current.dragged = !0);
                }, []),
                p = l.useCallback(
                    (e, t, n) => {
                        let r = i.current;
                        if ((d(), m(), null == r || r.frameId !== e || null == n)) return;
                        let { frameId: l, view: a } = r;
                        u(l, c(n, t.x, t.y));
                        let f = { frameId: l, rect: n, x: t.x, y: t.y, removeListeners: () => {} };
                        function v(e) {
                            ((f.x = e.clientX), (f.y = e.clientY), u(l, c(f.rect, f.x, f.y)));
                        }
                        (a.addEventListener("mousemove", v),
                            (f.removeListeners = () => a.removeEventListener("mousemove", v)),
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
                    handlePress: v,
                    handleDragStart: h,
                    handleDragRelease: p,
                    handleDragSettle: g,
                    releaseFrame: x,
                }
            );
        })(),
        { handleDragStart: N } = A,
        S = l.useCallback(() => {
            ((k.current = !0), j(!0), N());
        }, [N]),
        T = l.useCallback(() => {
            (j(!1),
                setTimeout(() => {
                    k.current = !1;
                }, 0));
        }, []),
        M = l.useCallback(() => k.current, []);
    if (0 === m.length && 0 === f.length) return null;
    let F = new Map();
    return (
        null != c && c.height > 0 && F.set(c.position, c.height + 8),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(I.Ay, {
                    children: (0, r.jsx)("div", {
                        className: s()(J._I, { [J.cB]: b }),
                        children: m.map((e) => {
                            let t = h.get(e) ?? U.CUs.BOTTOM_RIGHT,
                                n = F.get(t) ?? 0,
                                l = g.get(e) ?? 0;
                            l > 0 && F.set(t, n + l + 8);
                            let o = t === U.CUs.TOP_LEFT || t === U.CUs.TOP_RIGHT;
                            return (0, r.jsx)(
                                E.S8,
                                {
                                    id: e,
                                    className: s()($.x, { [$.yo]: A.isToolbarShown(e), [$.HJ]: A.isSnapping(e) }),
                                    position: t,
                                    hidden: v,
                                    appContext: u,
                                    maxX: a,
                                    maxY: i,
                                    edgeOffsetTop: E.X8.top + (o ? n : 0),
                                    edgeOffsetBottom: E.X8.bottom + (o ? 0 : n),
                                    edgeOffsetLeft: E.X8.left,
                                    edgeOffsetRight: E.X8.right,
                                    onMove: L,
                                    onHeightChange: y,
                                    onDragStart: S,
                                    onDragEnd: T,
                                    onDragRelease: A.handleDragRelease,
                                    onDragSettle: A.handleDragSettle,
                                    dragInsetTop: 40,
                                    children: (0, r.jsx)(ee, {
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
                f.map((e) => (0, r.jsx)(et, { frameId: e }, e)),
            ],
        })
    );
}
