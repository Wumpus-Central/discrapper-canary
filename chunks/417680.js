(n.r(t), n.d(t, { default: () => eg }));
var i,
    l = n(477900),
    s = n(582128),
    o = n(503698),
    a = n.n(o),
    r = n(202091),
    d = n(17928),
    u = n(289873),
    h = n(789645),
    c = n(922016),
    p = n(717421),
    f = n(778712),
    g = n(834730),
    m = n(43990),
    A = n(821609),
    v = n(387755),
    E = n(228366);
let x = {
    move(e, t) {
        E.h.dispatch({ type: "INCOMING_CALL_MOVE", x: e, y: t });
    },
};
var _ = n(730852),
    y = n(652215),
    w =
        (((i = w || {})[(i.DISABLED = 0)] = "DISABLED"),
        (i[(i.DEFAULT = 1)] = "DEFAULT"),
        (i[(i.OFFSET = 2)] = "OFFSET"),
        i);
function b(e, t, n, i, l) {
    let { top: s, bottom: o, left: a, right: r } = e;
    if (
        (null == s && null == o
            ? ((s = 0), (o = n - l))
            : null == s && null != o
              ? (s = n - (o + l))
              : null != s && (o = n - (s + l)),
        null == a && null == r
            ? ((a = 0), (r = t - i))
            : null == a && null != r
              ? (a = t - (r + i))
              : null == r && null != a && (r = t - (a + i)),
        null == s || null == o || null == a || null == r)
    )
        throw Error("Logically this can never happen based on our if/else statements");
    return { top: s, left: a, bottom: o, right: r };
}
function C(e) {
    return [null == e.bottom ? "TOP" : "BOTTOM", null == e.right ? "LEFT" : "RIGHT"];
}
function O(e) {
    let { top: t, left: n, bottom: i, right: l } = e;
    return (
        0 === t || t <= i ? (i = null) : (t = null),
        0 === n || n <= l ? (l = null) : (n = null),
        { top: t, left: n, bottom: i, right: l }
    );
}
function D(e) {
    let { top: t, left: n, bottom: i, right: l } = e;
    return (
        i < 0 && ((t += i), (i = 0)),
        t < 0 && ((i += t), (t = 0)),
        l < 0 && ((n += l), (l = 0)),
        n < 0 && ((l += n), (n = 0)),
        { top: t, left: n, bottom: i, right: l }
    );
}
function j(e) {
    return null != e ? `${e}px` : "auto";
}
class N extends s.PureComponent {
    static FlipTypes = w;
    static defaultProps = {
        snapOrientation: !1,
        maxX: 0,
        maxY: 0,
        flipVertical: 0,
        flipHorizontal: 0,
        dragAnywhere: !1,
    };
    draggableRef = s.createRef();
    _dragStart = { x: 0, y: 0 };
    _offsetX;
    _offsetY;
    position;
    constructor(e) {
        super(e);
        const [t, n] = C(e.initialPosition);
        ((this.position = (function (e) {
            let { top: t, left: n, bottom: i, right: l } = e;
            return (
                null == n && null == l && (n = 0),
                null != n && null != l && (l = null),
                null == t && null == i && (t = 0),
                null != t && null != i && (i = null),
                { top: t, left: n, bottom: i, right: l }
            );
        })(e.initialPosition)),
            (this.state = {
                dragging: !1,
                verticalOrientation: t,
                horizontalOrientation: n,
                atTopEdge: 0 === this.position.top,
            }));
    }
    componentDidMount() {
        (this.checkBounds(), this.setDOMPositions(this.position));
    }
    componentDidUpdate(e, t) {
        let {
            state: { verticalOrientation: n, horizontalOrientation: i, atTopEdge: l },
            props: { maxX: s, maxY: o, onRelocated: a, snapOrientation: r },
        } = this;
        (e.maxX !== s ||
            e.maxY !== o ||
            e.onRelocated !== a ||
            e.snapOrientation !== r ||
            t.verticalOrientation !== n ||
            t.horizontalOrientation !== i ||
            t.atTopEdge !== l) &&
            this.checkBounds();
    }
    componentWillUnmount() {
        (window.removeEventListener("mousemove", this.handleMouseMove),
            window.removeEventListener("mouseup", this.handleMouseUp));
    }
    setDOMPositions(e) {
        let { top: t, left: n, bottom: i, right: l } = e,
            {
                draggableRef: { current: s },
            } = this;
        ((this.position = { top: t, left: n, bottom: i, right: l }),
            null != s &&
                ((s.style.top = j(t)), (s.style.bottom = j(i)), (s.style.left = j(n)), (s.style.right = j(l))));
    }
    handleMouseDown = (e) => {
        let { top: t, left: n, bottom: i, right: l } = this.position,
            { dragAnywhere: s, selector: o, maxX: a, maxY: r } = this.props,
            { target: d } = e,
            { current: u } = this.draggableRef;
        if (
            null != u &&
            e.button === y.hE4.PRIMARY &&
            (s || (null != d && null != o && "" !== o && null != d.closest(o)))
        ) {
            let { x: s, y: o } = (function (e) {
                let { top: t, left: n } = e;
                return { x: n, y: t };
            })(b({ top: t, left: n, bottom: i, right: l }, a, r, u.clientWidth, u.clientHeight));
            ((this._dragStart = { x: e.clientX, y: e.clientY }),
                (this._offsetX = e.clientX - s),
                (this._offsetY = e.clientY - o),
                window.addEventListener("mousemove", this.handleMouseMove),
                window.addEventListener("mouseup", this.handleMouseUp));
        }
    };
    handleMouseMove = (e) => {
        e.preventDefault();
        let { clientX: t, clientY: n } = e,
            { current: i } = this.draggableRef,
            {
                maxX: l,
                maxY: s,
                flipVertical: o,
                flipHorizontal: a,
                onDragStart: r,
                onDrag: d,
                onFlip: u,
                snapOrientation: h,
            } = this.props,
            { dragging: c, dragging: p, verticalOrientation: f, horizontalOrientation: g } = this.state,
            m = !1;
        if (
            null == i ||
            (!c &&
                9 >
                    ((e, t) => {
                        let { x: n, y: i } = e,
                            { x: l, y: s } = t;
                        return Math.pow(n - l, 2) + Math.pow(i - s, 2);
                    })(this._dragStart, { x: t, y: n }))
        )
            return;
        c = !0;
        let { clientWidth: A, clientHeight: v } = i,
            E = D(b({ top: n - this._offsetY, left: t - this._offsetX }, l, s, A, v));
        if (h) {
            let e = C((E = O(E)));
            ((f = e[0]), (g = e[1]));
        } else E = { top: E.top, left: E.left };
        (2 === a && g !== this.state.horizontalOrientation && ((this._offsetX = A - this._offsetX), (m = !0)),
            2 === o && f !== this.state.verticalOrientation && ((this._offsetY = v - this._offsetY), (m = !0)),
            this.setDOMPositions(E),
            p || r?.(E, i),
            d?.(E, i),
            m && u?.([f, g]),
            this.setState({ dragging: c, verticalOrientation: f, horizontalOrientation: g, atTopEdge: 0 === E.top }));
    };
    handleMouseUp = () => {
        (window.removeEventListener("mousemove", this.handleMouseMove),
            window.removeEventListener("mouseup", this.handleMouseUp),
            this.state.dragging &&
                this.setState({ dragging: !1 }, () => {
                    let { onDragEnd: e } = this.props,
                        { current: t } = this.draggableRef;
                    null != t && null != e && e(this.position, t);
                }));
    };
    _checkBoundsRAF = null;
    checkBounds = () => {
        (null != this._checkBoundsRAF && cancelAnimationFrame(this._checkBoundsRAF),
            (this._checkBoundsRAF = requestAnimationFrame(this._performCheckBounds)));
    };
    _performCheckBounds = () => {
        let e,
            {
                position: t,
                state: n,
                draggableRef: { current: i },
                props: { maxX: l, maxY: s, onRelocated: o, snapOrientation: a },
            } = this,
            { verticalOrientation: r, horizontalOrientation: d } = this.state;
        if (null == i) return;
        let { clientHeight: u, clientWidth: h } = i,
            c = b(t, l, s, h, u);
        if (((c = D(c)), a)) {
            let t = C((e = O(c)));
            ((r = t[0]), (d = t[1]));
        } else e = { top: c.top, left: c.left, right: null, bottom: null };
        if (t.left === e.left && t.right === e.right && t.top === e.top && t.bottom === e.bottom) return;
        (o?.(e, i), this.setDOMPositions(e));
        let p = 0 === e.top;
        (r !== n.verticalOrientation || d !== n.horizontalOrientation || p !== n.atTopEdge) &&
            this.setState({ verticalOrientation: r, horizontalOrientation: d, atTopEdge: p });
    };
    render() {
        let { children: e, className: t } = this.props,
            { dragging: n, verticalOrientation: i, horizontalOrientation: o, atTopEdge: a } = this.state,
            { top: r, left: d, right: u, bottom: h } = this.position;
        return (0, l.jsx)("div", {
            ref: this.draggableRef,
            className: t,
            onMouseDown: this.handleMouseDown,
            style: { pointerEvents: n ? "none" : "auto", position: "absolute", top: r, left: d, bottom: h, right: u },
            children: s.cloneElement(s.Children.only(e), {
                flipped: "RIGHT" === o,
                verticalFlipped: "BOTTOM" === i,
                checkBounds: this.checkBounds,
                atTopEdge: a,
            }),
        });
    }
}
var M = n(793574),
    I = n(95561),
    R = n(688810),
    k = n(571694),
    L = n(47167),
    T = n(573435),
    P = n(976860),
    B = n(329551),
    F = n(712711),
    V = n(952572),
    G = n(151476),
    S = n(704877),
    U = n(222692),
    Y = n(404355),
    X = n(496841),
    z = n(970636),
    H = n(260509),
    K = n(71393),
    W = n(25578),
    $ = n(287809),
    J = n(531685),
    Z = n(174459),
    q = n(486020),
    Q = n(198052),
    ee = n(85448),
    et = n(329072),
    en = n(384059),
    ei = n(480890),
    el = n(806931),
    es = n(650583),
    eo = n(731854),
    ea = n(375708),
    er = n(479464),
    ed = n(890596),
    eu = n(969426);
let eh = { width: 232, height: 315 },
    ec = { width: 232, height: 267 };
function ep(e) {
    let { header: t } = e,
        n = W.Ay.getCameraComponent(),
        i = (0, d.bG)([W.Ay], () => W.Ay.getVideoDeviceId()),
        o = (0, V.A)();
    return (
        s.useEffect(() => {
            let e = $.default.getCurrentUser();
            if (o && null != e) {
                let t = (0, B.i)(e);
                (0, F.S1)(t, i, { track: !1 }).catch(y.tEg);
            }
        }, [o, i]),
        (0, l.jsxs)("div", {
            className: ed.Tg,
            children: [
                (0, l.jsx)(u.y, {}),
                (0, l.jsx)("div", {
                    className: ed.VH,
                    children: (0, l.jsx)(n, { disabled: !1, deviceId: i, width: 475, height: 267 }),
                }),
                (0, l.jsx)("div", { className: ed.dB, children: t }),
            ],
        })
    );
}
function ef(e) {
    let { canVideo: t, channel: n, numVideoDevices: i } = e,
        { parentAnalyticsLocation: o } = (0, R.Ay)(),
        { cameraUnavailable: r, enabled: d } = (0, G.A)(),
        u = (0, S.A)(n),
        p = s.useRef(null),
        f = i > 1;
    return (0, l.jsxs)("div", {
        className: a()(ed.iE, ed.o1),
        children: [
            (0, l.jsx)(Y.A, {
                iconComponent: h.P,
                label: ea.intl.string(ea.t.WAI6xu),
                className: ed.hP,
                onClick: () => {
                    ((0, en.X)(o, en.O.DISCONNECT),
                        Z.default.track(y.HAw.RING_CALL_DECLINED, {
                            location: o,
                            guild_id: n.guild_id,
                            ...(0, I.dI)(n),
                        }),
                        v.A.stopRinging(n.id));
                },
            }),
            t &&
                (0, l.jsx)(c.Y, {
                    targetElementRef: p,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, l.jsx)(et.A, {
                            onClose: t,
                            onInteraction: (0, ei.s)("VideoDeviceMenu", o, { entrypoint: el.GK.CARET }),
                        });
                    },
                    position: "top",
                    align: "center",
                    animation: c.Y.Animation.FADE,
                    children: (e, t) => {
                        let { onClick: i } = e,
                            { isShown: s } = t;
                        return (0, l.jsx)(z.A, {
                            buttonRef: p,
                            join: !0,
                            enabled: d,
                            className: a()(ed.hP, { [ed.$j]: f }),
                            color: "green",
                            centerButton: !0,
                            hasPermission: u,
                            cameraUnavailable: r,
                            channel: n,
                            onPopoutClick: f ? i : null,
                            popoutOpen: s,
                            onCameraUnavailable: U.A,
                            onChange: () => {
                                ((0, en.X)(o, en.O.JOIN_VIDEO_CALL),
                                    Z.default.track(y.HAw.RING_CALL_ACCEPTED, {
                                        location: o,
                                        guild_id: n.guild_id,
                                        ...(0, I.dI)(n),
                                    }),
                                    _.default.selectVoiceChannel(n.id, !0),
                                    (0, P.uh)(n.guild_id ?? y.ME, n.id));
                            },
                        });
                    },
                }),
            (0, l.jsx)(X.A, {
                channel: n,
                color: "join",
                centerButton: !0,
                onCallJoined: () =>
                    Z.default.track(y.HAw.RING_CALL_ACCEPTED, { location: o, guild_id: n.guild_id, ...(0, I.dI)(n) }),
                className: ed.hP,
            }),
        ],
    });
}
function eg(e) {
    let { animatedStyle: t, y: n, x: i, channel: o } = e,
        { analyticsLocations: u } = (0, R.Ay)(M.A.INCOMING_CALL_MODAL),
        [h, c] = s.useState(!1),
        E = (0, d.bG)([K.A], () => K.A.getGuild(o.guild_id)),
        _ = null != E ? q.Ay.getGuildIconURL({ id: E.id, icon: E.icon, size: 128 }) : null,
        w = (0, k.Y)(o, 128, !0) ?? _,
        b = (0, L.Ay)(o),
        [C, O] = (0, d.yK)([W.Ay], () => [W.Ay.supports(eo.O5.VIDEO), Object.keys(W.Ay.getVideoDevices()).length]),
        D = null != E ? `${b}, ${E.name}` : b,
        j = (0, d.bG)([J.A], () => J.A.isFocused()),
        I = (0, d.bG)([Q.A], () => Q.A.getMode(o.id)),
        P = s.useCallback((e) => {
            null != e.top && null != e.left && x.move(e.left, e.top);
        }, []),
        B = (0, p.z)({ value: +!!h, config: { ...r.config.stiff, clamp: !0 } }, "animate-always");
    s.useEffect(() => {
        function e(e) {
            e.key === es.dh.ESCAPE && v.A.stopRinging(o.id);
        }
        return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
    }, [o]);
    let F = I === y._Of.VIDEO && C && O > 0,
        V = I === y._Of.VOICE ? ea.intl.string(ea.t.Js8cK3) : ea.intl.string(ea.t.KcnWCO),
        G = (0, l.jsxs)(l.Fragment, {
            children: [
                null != E && null == _
                    ? (0, l.jsx)("div", {
                          className: a()(ed.Kk, er.iE, er.hs),
                          children: (0, l.jsx)(T.Ay, {
                              className: ed.dK,
                              mask: T.hW.AVATAR_DEFAULT,
                              width: h ? 40 : 80,
                              height: h ? 40 : 80,
                              children: (0, l.jsx)("div", {
                                  className: a()(ed.$f, ed.Gc),
                                  children: (0, l.jsx)("div", { className: ed.Hj, children: (0, H.Rb)(E) }),
                              }),
                          }),
                      })
                    : (0, l.jsx)(ee.Ay, {
                          className: ed.Kk,
                          ringing: j,
                          src: w ?? "",
                          ringingType: ee.Ay.RingingType.INCOMING,
                          size: h ? f._3.SIZE_40 : f._3.SIZE_80,
                      }),
                (0, l.jsxs)("div", {
                    className: ed.i8,
                    children: [
                        (0, l.jsx)(g.E, {
                            className: ed.DD,
                            color: "text-strong",
                            variant: h ? "text-md/semibold" : "text-lg/semibold",
                            children: D,
                        }),
                        (0, l.jsx)(g.E, {
                            color: "text-default",
                            className: ed.VA,
                            variant: h ? "text-sm/normal" : "text-md/normal",
                            children: V,
                        }),
                    ],
                }),
            ],
        }),
        S = F ? eh : ec,
        U = (0, d.bG)([J.A], () => J.A.windowSize());
    return (0, l.jsx)(R.f5, {
        value: u,
        children: (0, l.jsx)(N, {
            className: ed.iE,
            selector: `.${ed.zr}`,
            initialPosition: { left: i, top: n },
            maxX: U.width,
            maxY: U.height,
            onDragEnd: P,
            dragAnywhere: !0,
            children: (0, l.jsx)(m.N, {
                theme: h ? y.NJ8.DARK : void 0,
                children: (e) =>
                    (0, l.jsxs)(r.animated.div, {
                        className: a()(ed.zr, eu.a8, { [ed.mY]: h }, e),
                        style: {
                            ...t,
                            minWidth: B.value.interpolate([0, 1], [S.width, 475]),
                            minHeight: B.value.interpolate([0, 1], [S.height, 267]),
                            translateX: B.value.interpolate([0, 1], [0, (-1 * Math.abs(475 - S.width)) / 2]),
                        },
                        children: [
                            h ? (0, l.jsx)(ep, { header: G }) : (0, l.jsx)("div", { className: ed.Rh, children: G }),
                            (0, l.jsx)(ef, { canVideo: F, channel: o, numVideoDevices: O }),
                            F && !h
                                ? (0, l.jsx)("div", {
                                      "data-button-hoisted-classname-wrapper": !0,
                                      className: ed.jc,
                                      children: (0, l.jsx)(A.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: ea.intl.string(ea.t["8B0UDr"]),
                                          fullWidth: !0,
                                          onClick: () => c(!0),
                                      }),
                                  })
                                : null,
                        ],
                    }),
            }),
        }),
    });
}
