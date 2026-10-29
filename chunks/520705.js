(n.r(t), n.d(t, { default: () => Z }));
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
    f = n(70688),
    h = n(43990),
    p = n(429913),
    v = n(747180),
    g = n(343030),
    x = n(91242),
    b = n(545691),
    C = n(317608),
    j = n(548118),
    k = n(956790),
    I = n(699426),
    L = n(71393),
    y = n(186111),
    A = n(381991),
    w = n(754027),
    E = n(327152),
    N = n(260498),
    S = n(919417),
    T = n(228946),
    M = n(358618),
    D = n(983851),
    F = n(625180),
    R = n(620999),
    P = n(248675),
    B = n(105292);
function G(e) {
    e.stopPropagation();
}
function H(e) {
    let { frame: t, className: n } = e;
    if (!(0, R.v)(t)) return null;
    let { userMuted: l } = t.data,
        a = B.intl.string(l ? P.default.bd0Ufh : P.default.dxBzpe);
    return (0, r.jsx)("div", {
        className: n,
        children: (0, r.jsx)(u.m, {
            text: a,
            children: (0, r.jsx)(c.K, {
                size: "sm",
                variant: "overlay-secondary",
                "aria-label": a,
                icon: l ? M._ : D.H,
                onMouseDown: G,
                onClick: (e) => {
                    (e.stopPropagation(), F.A.setFrameUserMuted(t.id, !l));
                },
            }),
        }),
    });
}
var O = n(506868),
    K = n(652215),
    U = n(165610),
    _ = n(715803),
    z = n(155819),
    X = n(969426);
function $(e) {
    if (!(0, w.Q5)(e.surface)) return void (0, T.returnToConjureFrameSurface)(e);
    let t = N.Ay.findProjectByApplicationId(e.applicationId);
    null != t && (0, A.A)(t.id);
}
function J(e) {
    let { width: t, height: n } = e;
    return Math.min(320 / t, 180 / n);
}
function V(e) {
    let t,
        n,
        l,
        a,
        { frameId: s, level: i, overlay: o } = e,
        u = (0, E.L1)(s);
    return (0, r.jsx)("div", {
        className: _.GL,
        style:
            null != u
                ? ((t = J(u)),
                  (n = (320 - u.width * t) / 2),
                  (l = (180 - u.height * t) / 2),
                  { width: u.width, height: u.height, transform: `translate(${n}px, ${l}px) scale(${t})` })
                : void 0,
        children: (0, r.jsx)(C.A, {
            frameId: s,
            level: i,
            className: _.Z7,
            overlay:
                null != u && null != o
                    ? (0, r.jsx)("div", {
                          className: _.bW,
                          style:
                              ((a = J(u)), { width: u.width * a, height: u.height * a, transform: `scale(${1 / a})` }),
                          children: o,
                      })
                    : o,
        }),
    });
}
function Q(e) {
    let { label: t, icon: n, onClick: l } = e;
    return (0, r.jsx)(u.m, {
        text: t,
        position: "top",
        asContainer: !0,
        children: (0, r.jsx)(c.K, { variant: "icon-only", size: "sm", "aria-label": t, icon: n, onClick: l }),
    });
}
function Y(e) {
    let { frame: t, applicationName: n } = e,
        l = (0, v.A)(t.surface),
        a = (0, o.bG)([L.A], () => L.A.getGuild(l), [l]);
    return (0, r.jsx)("div", {
        className: _.Q,
        children: (0, r.jsxs)("div", {
            className: _.KE,
            children: [
                null != a ? (0, r.jsx)(j.Ay, { guild: a, size: j.Ay.Sizes.MINI, className: _.$f }) : null,
                (0, r.jsx)(d.E, {
                    variant: "text-sm/medium",
                    color: "text-strong",
                    lineClamp: 1,
                    className: _.JB,
                    children: n,
                }),
                (0, r.jsxs)("div", {
                    className: _.FS,
                    children: [
                        (0, r.jsx)(Q, {
                            label: B.intl.string(P.default.tfKtLw),
                            icon: m.MinusIcon,
                            onClick: () => (0, S.Gt)(t.applicationId, !1),
                        }),
                        (0, r.jsx)(Q, {
                            label: B.intl.string(B.t.VkMnR2),
                            icon: f.DoorExitIcon,
                            onClick: () => (0, b.A)(t.id),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function q(e) {
    let { frameId: t, onHoverChange: n, onPress: a, onUnmount: u, shouldIgnoreClick: c } = e,
        d = (0, o.bG)([x.A], () => (0, U.ny)(x.A.getFrame(t)), [t]),
        m = (0, p.h)(d?.applicationId)?.name ?? "";
    return (l.useEffect(
        () => () => {
            (u(t), n(t, !1));
        },
        [t, n, u],
    ),
    null == d)
        ? null
        : (0, r.jsx)(h.N, {
              theme: K.NJ8.DARK,
              children: (e) =>
                  (0, r.jsxs)("div", {
                      className: s()(_.Nr, e),
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
                          (0, r.jsx)(Y, { frame: d, applicationName: m }),
                          (0, r.jsx)("div", {
                              role: "button",
                              tabIndex: 0,
                              "aria-label": B.intl.formatToPlainString(P.default.dPf03z, { appName: m }),
                              className: s()(_.VH, X.a8),
                              onClick: () => {
                                  c() || $(d);
                              },
                              onKeyDown: (e) => {
                                  e.target === e.currentTarget &&
                                      ("Enter" === e.key || " " === e.key) &&
                                      (e.preventDefault(), $(d));
                              },
                              children: (0, r.jsx)(V, {
                                  frameId: d.id,
                                  level: g.A.AboveAppContent,
                                  overlay: (0, r.jsx)(H, { frame: d, className: s()(_.Lu, e) }),
                              }),
                          }),
                      ],
                  }),
          });
}
function W(e) {
    let { frameId: t } = e;
    return (0, r.jsx)("div", {
        className: _.tF,
        "aria-hidden": !0,
        children: (0, r.jsx)(V, { frameId: t, level: g.A.Backstage }),
    });
}
function Z(e) {
    var t;
    let n,
        a,
        { maxX: i, maxY: u, appContext: c, floatingPictureInPicture: d } = e,
        { shown: m, hidden: f } =
            ((t = (0, O.DU)()),
            (n = (0, S.sI)()),
            (a = (0, o.yK)(
                [x.A],
                () =>
                    t.filter((e) => {
                        let t = x.A.getFrame(e)?.applicationId;
                        return null != t && n.has(t);
                    }),
                [t, n],
            )),
            l.useMemo(() => ({ shown: t.filter((e) => !a.includes(e)), hidden: a }), [t, a])),
        h = (0, o.bG)([y.A], () => y.A.hasLayers()),
        [p, v] = l.useState(() => new Map()),
        [g, b] = l.useState(() => new Map()),
        [C, j] = l.useState(!1),
        L = l.useRef(!1),
        A = l.useCallback((e, t) => {
            v((n) => new Map(n).set(e, t));
        }, []),
        w = l.useCallback((e, t) => {
            b((n) => (n.get(e) === t ? n : new Map(n).set(e, t)));
        }, []),
        E = (function () {
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
        { handleDragStart: N } = E,
        T = l.useCallback(() => {
            ((L.current = !0), j(!0), N());
        }, [N]),
        M = l.useCallback(() => {
            (j(!1),
                setTimeout(() => {
                    L.current = !1;
                }, 0));
        }, []),
        D = l.useCallback(() => L.current, []);
    if (0 === m.length && 0 === f.length) return null;
    let F = new Map();
    return (
        null != d && d.height > 0 && F.set(d.position, d.height + 8),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(I.Ay, {
                    children: (0, r.jsx)("div", {
                        className: s()(z._I, { [z.cB]: C }),
                        children: m.map((e) => {
                            let t = p.get(e) ?? K.CUs.BOTTOM_RIGHT,
                                n = F.get(t) ?? 0,
                                l = g.get(e) ?? 0;
                            l > 0 && F.set(t, n + l + 8);
                            let a = t === K.CUs.TOP_LEFT || t === K.CUs.TOP_RIGHT;
                            return (0, r.jsx)(
                                k.S8,
                                {
                                    id: e,
                                    className: s()(_.x, { [_.yo]: E.isToolbarShown(e), [_.HJ]: E.isSnapping(e) }),
                                    position: t,
                                    hidden: h,
                                    appContext: c,
                                    maxX: i,
                                    maxY: u,
                                    edgeOffsetTop: k.X8.top + (a ? n : 0),
                                    edgeOffsetBottom: k.X8.bottom + (a ? 0 : n),
                                    edgeOffsetLeft: k.X8.left,
                                    edgeOffsetRight: k.X8.right,
                                    onMove: A,
                                    onHeightChange: w,
                                    onDragStart: T,
                                    onDragEnd: M,
                                    onDragRelease: E.handleDragRelease,
                                    onDragSettle: E.handleDragSettle,
                                    dragInsetTop: 40,
                                    children: (0, r.jsx)(q, {
                                        frameId: e,
                                        onHoverChange: E.handleHoverChange,
                                        onPress: E.handlePress,
                                        onUnmount: E.releaseFrame,
                                        shouldIgnoreClick: D,
                                    }),
                                },
                                e,
                            );
                        }),
                    }),
                }),
                f.map((e) => (0, r.jsx)(W, { frameId: e }, e)),
            ],
        })
    );
}
