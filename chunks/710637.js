i.r(t), i.d(t, { default: () => eH });
var n,
    l = i(627968),
    s = i(64700),
    a = i(503698),
    o = i.n(a),
    r = i(873174),
    d = i(17928),
    c = i(289873),
    u = i(789645),
    h = i(922016),
    m = i(717421),
    g = i(778712),
    f = i(834730),
    p = i(43990),
    A = i(821609),
    x = i(387755),
    v = i(228366);
let E = {
    move(e, t) {
        v.h.dispatch({ type: "INCOMING_CALL_MOVE", x: e, y: t });
    },
};
var j = i(730852),
    C = i(652215),
    _ =
        (((n = _ || {})[(n.DISABLED = 0)] = "DISABLED"),
        (n[(n.DEFAULT = 1)] = "DEFAULT"),
        (n[(n.OFFSET = 2)] = "OFFSET"),
        n);
function N(e, t, i, n, l) {
    let { top: s, bottom: a, left: o, right: r } = e;
    if (
        (null == s && null == a
            ? ((s = 0), (a = i - l))
            : null == s && null != a
              ? (s = i - (a + l))
              : null != s && (a = i - (s + l)),
        null == o && null == r
            ? ((o = 0), (r = t - n))
            : null == o && null != r
              ? (o = t - (r + n))
              : null == r && null != o && (r = t - (o + n)),
        null == s || null == a || null == o || null == r)
    )
        throw Error("Logically this can never happen based on our if/else statements");
    return { top: s, left: o, bottom: a, right: r };
}
function b(e) {
    return [null == e.bottom ? "TOP" : "BOTTOM", null == e.right ? "LEFT" : "RIGHT"];
}
function y(e) {
    let { top: t, left: i, bottom: n, right: l } = e;
    return (
        0 === t || t <= n ? (n = null) : (t = null),
        0 === i || i <= l ? (l = null) : (i = null),
        { top: t, left: i, bottom: n, right: l }
    );
}
function I(e) {
    let { top: t, left: i, bottom: n, right: l } = e;
    return (
        n < 0 && ((t += n), (n = 0)),
        t < 0 && ((n += t), (t = 0)),
        l < 0 && ((i += l), (l = 0)),
        i < 0 && ((l += i), (i = 0)),
        { top: t, left: i, bottom: n, right: l }
    );
}
function w(e) {
    return null != e ? `${e}px` : "auto";
}
class D extends s.PureComponent {
    static FlipTypes = _;
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
        const [t, i] = b(e.initialPosition);
        (this.position = (function (e) {
            let { top: t, left: i, bottom: n, right: l } = e;
            return (
                null == i && null == l && (i = 0),
                null != i && null != l && (l = null),
                null == t && null == n && (t = 0),
                null != t && null != n && (n = null),
                { top: t, left: i, bottom: n, right: l }
            );
        })(e.initialPosition)),
            (this.state = {
                dragging: !1,
                verticalOrientation: t,
                horizontalOrientation: i,
                atTopEdge: 0 === this.position.top,
            });
    }
    componentDidMount() {
        this.checkBounds(), this.setDOMPositions(this.position);
    }
    componentDidUpdate(e, t) {
        let {
            state: { verticalOrientation: i, horizontalOrientation: n, atTopEdge: l },
            props: { maxX: s, maxY: a, onRelocated: o, snapOrientation: r },
        } = this;
        (e.maxX !== s ||
            e.maxY !== a ||
            e.onRelocated !== o ||
            e.snapOrientation !== r ||
            t.verticalOrientation !== i ||
            t.horizontalOrientation !== n ||
            t.atTopEdge !== l) &&
            this.checkBounds();
    }
    componentWillUnmount() {
        window.removeEventListener("mousemove", this.handleMouseMove),
            window.removeEventListener("mouseup", this.handleMouseUp);
    }
    setDOMPositions(e) {
        let { top: t, left: i, bottom: n, right: l } = e,
            {
                draggableRef: { current: s },
            } = this;
        (this.position = { top: t, left: i, bottom: n, right: l }),
            null != s && ((s.style.top = w(t)), (s.style.bottom = w(n)), (s.style.left = w(i)), (s.style.right = w(l)));
    }
    handleMouseDown = (e) => {
        let { top: t, left: i, bottom: n, right: l } = this.position,
            { dragAnywhere: s, selector: a, maxX: o, maxY: r } = this.props,
            { target: d } = e,
            { current: c } = this.draggableRef;
        if (
            null != c &&
            e.button === C.hE4.PRIMARY &&
            (s || (null != d && null != a && "" !== a && null != d.closest(a)))
        ) {
            let { x: s, y: a } = (function (e) {
                let { top: t, left: i } = e;
                return { x: i, y: t };
            })(N({ top: t, left: i, bottom: n, right: l }, o, r, c.clientWidth, c.clientHeight));
            (this._dragStart = { x: e.clientX, y: e.clientY }),
                (this._offsetX = e.clientX - s),
                (this._offsetY = e.clientY - a),
                window.addEventListener("mousemove", this.handleMouseMove),
                window.addEventListener("mouseup", this.handleMouseUp);
        }
    };
    handleMouseMove = (e) => {
        e.preventDefault();
        let { clientX: t, clientY: i } = e,
            { current: n } = this.draggableRef,
            {
                maxX: l,
                maxY: s,
                flipVertical: a,
                flipHorizontal: o,
                onDragStart: r,
                onDrag: d,
                onFlip: c,
                snapOrientation: u,
            } = this.props,
            { dragging: h, dragging: m, verticalOrientation: g, horizontalOrientation: f } = this.state,
            p = !1;
        if (
            null == n ||
            (!h &&
                9 >
                    ((e, t) => {
                        let { x: i, y: n } = e,
                            { x: l, y: s } = t;
                        return Math.pow(i - l, 2) + Math.pow(n - s, 2);
                    })(this._dragStart, { x: t, y: i }))
        )
            return;
        h = !0;
        let { clientWidth: A, clientHeight: x } = n,
            v = I(N({ top: i - this._offsetY, left: t - this._offsetX }, l, s, A, x));
        if (u) {
            let e = b((v = y(v)));
            (g = e[0]), (f = e[1]);
        } else v = { top: v.top, left: v.left };
        2 === o && f !== this.state.horizontalOrientation && ((this._offsetX = A - this._offsetX), (p = !0)),
            2 === a && g !== this.state.verticalOrientation && ((this._offsetY = x - this._offsetY), (p = !0)),
            this.setDOMPositions(v),
            m || r?.(v, n),
            d?.(v, n),
            p && c?.([g, f]),
            this.setState({ dragging: h, verticalOrientation: g, horizontalOrientation: f, atTopEdge: 0 === v.top });
    };
    handleMouseUp = () => {
        window.removeEventListener("mousemove", this.handleMouseMove),
            window.removeEventListener("mouseup", this.handleMouseUp),
            this.state.dragging &&
                this.setState({ dragging: !1 }, () => {
                    let { onDragEnd: e } = this.props,
                        { current: t } = this.draggableRef;
                    null != t && null != e && e(this.position, t);
                });
    };
    _checkBoundsRAF = null;
    checkBounds = () => {
        null != this._checkBoundsRAF && cancelAnimationFrame(this._checkBoundsRAF),
            (this._checkBoundsRAF = requestAnimationFrame(this._performCheckBounds));
    };
    _performCheckBounds = () => {
        let e,
            {
                position: t,
                state: i,
                draggableRef: { current: n },
                props: { maxX: l, maxY: s, onRelocated: a, snapOrientation: o },
            } = this,
            { verticalOrientation: r, horizontalOrientation: d } = this.state;
        if (null == n) return;
        let { clientHeight: c, clientWidth: u } = n,
            h = N(t, l, s, u, c);
        if (((h = I(h)), o)) {
            let t = b((e = y(h)));
            (r = t[0]), (d = t[1]);
        } else e = { top: h.top, left: h.left, right: null, bottom: null };
        if (t.left === e.left && t.right === e.right && t.top === e.top && t.bottom === e.bottom) return;
        a?.(e, n), this.setDOMPositions(e);
        let m = 0 === e.top;
        (r !== i.verticalOrientation || d !== i.horizontalOrientation || m !== i.atTopEdge) &&
            this.setState({ verticalOrientation: r, horizontalOrientation: d, atTopEdge: m });
    };
    render() {
        let { children: e, className: t } = this.props,
            { dragging: i, verticalOrientation: n, horizontalOrientation: a, atTopEdge: o } = this.state,
            { top: r, left: d, right: c, bottom: u } = this.position;
        return (0, l.jsx)("div", {
            ref: this.draggableRef,
            className: t,
            onMouseDown: this.handleMouseDown,
            style: { pointerEvents: i ? "none" : "auto", position: "absolute", top: r, left: d, bottom: u, right: c },
            children: s.cloneElement(s.Children.only(e), {
                flipped: "RIGHT" === a,
                verticalFlipped: "BOTTOM" === n,
                checkBounds: this.checkBounds,
                atTopEdge: o,
            }),
        });
    }
}
var L = i(793574),
    O = i(95561),
    k = i(688810),
    R = i(571694),
    M = i(47167),
    T = i(573435),
    G = i(976860),
    P = i(329551),
    V = i(413339),
    S = i(952572),
    U = i(151476),
    F = i(704877),
    X = i(222692),
    z = i(404355),
    B = i(496841),
    Y = i(970636),
    H = i(164891),
    W = i(260509),
    $ = i(71393),
    K = i(235058),
    J = i(287809),
    Q = i(531685),
    Z = i(174459),
    q = i(486020),
    ee = i(313961),
    et = i(85448),
    ei = i(97808),
    en = i(534514),
    el = i(661531),
    es = i(364522),
    ea = i(803306),
    eo = i(713654),
    er = i(481947),
    ed = i(616356),
    ec = i(607567),
    eu = i(503509),
    eh = i(625494),
    em = i(427262),
    eg = i(980707),
    ef = i(477782),
    ep = i(428689),
    eA = i(270816),
    ex = i(495544),
    ev = i(855187),
    eE = i(384059),
    ej = i(818348),
    eC = i(731854),
    e_ = i(375708);
function eN(e) {
    let { onClose: t, channel: i } = e,
        { analyticsLocations: n } = (0, k.Ay)(),
        a = (0, d.bG)([ex.default], () => ex.default.getId()),
        o = (0, eA.H)({ deviceType: eC.oh.VIDEO_INPUT, analyticsLocations: n, asSubmenu: !0 }),
        r = (0, ev.A)(a),
        c = (0, s.useCallback)(() => {
            (0, eE.X)(n[0], eE.O.JOIN_VIDEO_CALL),
                Z.default.track(C.HAw.RING_CALL_ACCEPTED, { location: n[0], guild_id: i.guild_id, ...(0, O.dI)(i) }),
                j.default.selectVoiceChannel(i.id, !0),
                (0, G.uh)(i.guild_id ?? C.ME, i.id),
                t();
        }, [t, n, i]);
    return (0, l.jsx)(eg.W, {
        navId: "join-call-context",
        onSelect: ej.FX,
        onInteraction: ej.FX,
        onClose: t,
        "aria-label": e_.intl.string(e_.t["f+QbEQ"]),
        children: (0, l.jsxs)(ef.rX, {
            children: [
                (0, l.jsx)(ef.Dr, {
                    id: "join-video",
                    action: c,
                    label: e_.intl.string(e_.t["YbjQQ/"]),
                    leadingAccessory: { type: "icon", icon: ep.n },
                }),
                o,
                r,
            ],
        }),
    });
}
var eb = i(939249),
    ey = i(847374),
    eI = i(990078),
    ew = i(110814),
    eD = i(518229);
function eL(e) {
    let {
        ref: t,
        tooltipText: i,
        caretTooltipText: n,
        onClick: s,
        onContextMenu: a,
        text: r,
        fullWidth: d,
        size: c = "md",
        variant: u = "primary",
    } = e;
    return (0, l.jsxs)("div", {
        ref: t,
        className: o()(ew.kL, { [eD.fullWidth]: d, [eD.hasText]: null != r }),
        children: [
            (0, l.jsx)(eI.m, {
                text: i,
                children: (0, l.jsx)(eb.D, {
                    "aria-label": i,
                    onClick: s,
                    onContextMenu: a,
                    className: o()(ew.x6, eD.button, eD[c], eD[u]),
                    children: r,
                }),
            }),
            (0, l.jsx)(eI.m, {
                text: n,
                children: (0, l.jsx)(eb.D, {
                    "aria-label": n,
                    onClick: a,
                    onContextMenu: a,
                    className: o()(ew.me, eD.button, eD[c], eD[u]),
                    children: (0, l.jsx)(ey.a, { color: "currentColor", size: "xs" }),
                }),
            }),
        ],
    });
}
var eO = i(650583),
    ek = i(384043),
    eR = i(604949);
function eM(e) {
    let { voiceState: t, user: i, channel: n } = e,
        s = (0, d.bG)([ed.A], () => ed.A.getStreamForUser(i.id, n.guild_id)),
        a = (0, em.tx)(i);
    return (0, l.jsxs)("div", {
        className: ek.q7,
        children: [
            (0, l.jsxs)("div", {
                className: ek.G7,
                children: [
                    (0, l.jsx)(ei.eu, {
                        "aria-label": i.username,
                        src: i.getAvatarURL(n.guild_id, 32, !1, !1),
                        size: g._3.SIZE_32,
                    }),
                    (0, l.jsx)(f.E, { variant: "text-sm/medium", children: a }),
                ],
            }),
            (0, l.jsx)(er.Kc, {
                user: i,
                channelId: n.id,
                mute: t.isVoiceMuted(),
                deaf: t.isVoiceDeafened(),
                video: t.selfVideo,
                isStreaming: null != s && s.channelId === n.id,
                serverMute: t.mute,
                serverDeaf: t.deaf,
            }),
        ],
    });
}
function eT(e) {
    let { animatedStyle: t, x: i, y: n, channel: a, senderId: c } = e,
        { analyticsLocations: u } = (0, k.Ay)(L.A.INCOMING_CALL_MODAL),
        m = s.useRef(null),
        v = (0, d.bG)([Q.A], () => Q.A.windowSize()),
        _ = (0, d.bG)([$.A], () => $.A.getGuild(a.guild_id)),
        N = null != _ ? q.Ay.getGuildIconURL({ id: _.id, icon: _.icon, size: 40 }) : null,
        b = (0, R.Y)(a, 40, !0) ?? N,
        y = (0, M.Ay)(a),
        I = (0, d.yK)([ec.Ay, ee.A], () =>
            ec.Ay.getVoiceStatesForChannel(a).filter((e) => !ee.A.getGuildRingingUsers(a.id).has(e.user.id)),
        ),
        [w, G] = (0, d.yK)([K.Ay], () => [K.Ay.supports(eC.O5.VIDEO), Object.keys(K.Ay.getVideoDevices()).length]),
        P = (0, d.bG)([ee.A], () => ee.A.getVideoParticipants(a.id).length > 0),
        V = (0, d.bG)([J.default], () => J.default.getUser(c)),
        S = (0, em.tx)(V),
        U = P && w && G > 0,
        F = s.useCallback((e) => {
            null != e.top && null != e.left && E.move(e.left, e.top);
        }, []),
        X = s.useCallback(() => {
            (0, eE.X)(u[0], eE.O.DISCONNECT),
                Z.default.track(C.HAw.RING_CALL_DECLINED, { location: u[0], guild_id: a.guild_id, ...(0, O.dI)(a) }),
                x.A.stopRinging(a.id);
        }, [a, u]),
        z = s.useCallback(() => {
            (0, eE.X)(u[0], eE.O.JOIN_CALL),
                Z.default.track(C.HAw.RING_CALL_ACCEPTED, { location: u[0], guild_id: a.guild_id, ...(0, O.dI)(a) }),
                j.default.selectVoiceChannel(a.id);
        }, [a, u]);
    s.useEffect(() => {
        let e = (e) => {
            e.key === eO.dh.ESCAPE && x.A.stopRinging(a.id);
        };
        return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
    }, [a]),
        s.useEffect(
            () => (
                eh._.subscribe(C.jej.CALL_ACCEPT, z),
                () => {
                    eh._.unsubscribe(C.jej.CALL_ACCEPT, z);
                }
            ),
            [z],
        ),
        s.useEffect(() => {
            null == V && (0, ea.wz)(c);
        }, [c, V]);
    let B = (0, eo.gU)(a);
    return (0, l.jsx)(k.f5, {
        value: u,
        children: (0, l.jsx)(D, {
            className: ek.iE,
            selector: `.${ek.zr}`,
            initialPosition: { left: i, top: n },
            maxX: v.width,
            maxY: v.height,
            onDragEnd: F,
            dragAnywhere: !0,
            children: (0, l.jsx)(p.N, {
                children: (e) =>
                    (0, l.jsxs)(r.animated.div, {
                        className: o()(ek.zr, eR.a8, e),
                        style: { ...t, "--custom-modal-width": `${eu.c.width}px` },
                        children: [
                            (0, l.jsxs)("div", {
                                className: ek.wx,
                                children: [
                                    null != V &&
                                        (0, l.jsx)(ei.eu, {
                                            className: ek.gX,
                                            "aria-label": "user",
                                            src: V?.getAvatarURL(a.guild_id, 80, !1, !1),
                                            size: g._3.SIZE_80,
                                        }),
                                    (0, l.jsx)(en.D, {
                                        variant: "heading-lg/semibold",
                                        className: o()(ek.gX, ek.DD),
                                        children:
                                            null != V
                                                ? e_.intl.format(e_.t.M3F6cv, { username: S })
                                                : e_.intl.string(e_.t["3rE1P8"]),
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: ek.C5,
                                        children: [
                                            (null != _ || null != b) &&
                                                (0, l.jsx)(T.Ay, {
                                                    mask: T.hW.SQUIRCLE,
                                                    width: 40,
                                                    height: 40,
                                                    className: ek.NR,
                                                    children:
                                                        null != b
                                                            ? (0, l.jsx)("img", {
                                                                  alt: _?.name ?? y ?? "",
                                                                  src: b,
                                                                  width: 40,
                                                                  height: 40,
                                                              })
                                                            : null != _
                                                              ? (0, l.jsx)("div", {
                                                                    className: ek.$r,
                                                                    children: (0, l.jsx)("div", {
                                                                        className: ek.q9,
                                                                        children: (0, W.Rb)(_),
                                                                    }),
                                                                })
                                                              : null,
                                                }),
                                            (0, l.jsxs)("div", {
                                                className: ek.Ug,
                                                children: [
                                                    (0, l.jsxs)("div", {
                                                        className: ek.HA,
                                                        children: [
                                                            null != B &&
                                                                (0, l.jsx)(B, {
                                                                    size: "xs",
                                                                    color: el.A.colors.TEXT_DEFAULT,
                                                                    className: ek.NR,
                                                                }),
                                                            (0, l.jsx)(f.E, {
                                                                variant: "text-md/semibold",
                                                                color: "text-default",
                                                                className: ek.zb,
                                                                children: y,
                                                            }),
                                                        ],
                                                    }),
                                                    _?.name != null &&
                                                        (0, l.jsx)(f.E, {
                                                            variant: "text-sm/medium",
                                                            color: "text-muted",
                                                            className: ek.zb,
                                                            children: _.name,
                                                        }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, l.jsxs)(es.Ip, {
                                className: ek.XG,
                                children: [
                                    (0, l.jsx)(f.E, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        className: ek.bi,
                                        children: e_.intl.format(e_.t.e95u3C, { count: I.length }),
                                    }),
                                    (0, l.jsx)("div", {
                                        className: ek.Xk,
                                        children: I.map((e) => {
                                            let { voiceState: t, user: i } = e;
                                            return (0, l.jsx)(eM, { voiceState: t, user: i, channel: a }, i.id);
                                        }),
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: ek.o1,
                                children: [
                                    (0, l.jsx)(A.$, {
                                        text: e_.intl.string(e_.t.L5eIZ2),
                                        fullWidth: !0,
                                        variant: "secondary",
                                        onClick: X,
                                    }),
                                    U
                                        ? (0, l.jsx)(h.Y, {
                                              targetElementRef: m,
                                              renderPopout: (e) => {
                                                  let { closePopout: t } = e;
                                                  return (0, l.jsx)(eN, { onClose: t, channel: a });
                                              },
                                              position: "bottom",
                                              children: (e) => {
                                                  let { onClick: t } = e;
                                                  return (0, l.jsx)(eL, {
                                                      ref: m,
                                                      text: e_.intl.string(e_.t["96ANUN"]),
                                                      fullWidth: !0,
                                                      variant: "active",
                                                      onClick: z,
                                                      caretTooltipText: e_.intl.string(e_.t["+1H47t"]),
                                                      onContextMenu: t,
                                                  });
                                              },
                                          })
                                        : (0, l.jsx)(A.$, {
                                              text: e_.intl.string(e_.t["96ANUN"]),
                                              onClick: z,
                                              fullWidth: !0,
                                              variant: "active",
                                          }),
                                ],
                            }),
                        ],
                    }),
            }),
        }),
    });
}
var eG = i(329072),
    eP = i(480890),
    eV = i(806931),
    eS = i(126957),
    eU = i(875051);
let eF = { width: 232, height: 315 },
    eX = { width: 232, height: 267 };
function ez(e) {
    let { header: t } = e,
        i = K.Ay.getCameraComponent(),
        n = (0, d.bG)([K.Ay], () => K.Ay.getVideoDeviceId()),
        a = (0, S.A)();
    return (
        s.useEffect(() => {
            let e = J.default.getCurrentUser();
            if (a && null != e) {
                let t = (0, P.i)(e);
                (0, V.S1)(t, n, { track: !1 }).catch(C.tEg);
            }
        }, [a, n]),
        (0, l.jsxs)("div", {
            className: eU.Tg,
            children: [
                (0, l.jsx)(c.y, {}),
                (0, l.jsx)("div", {
                    className: eU.VH,
                    children: (0, l.jsx)(i, { disabled: !1, deviceId: n, width: 475, height: 267 }),
                }),
                (0, l.jsx)("div", { className: eU.dB, children: t }),
            ],
        })
    );
}
function eB(e) {
    let { canVideo: t, channel: i, numVideoDevices: n } = e,
        { parentAnalyticsLocation: a } = (0, k.Ay)(),
        { cameraUnavailable: r, enabled: d } = (0, U.A)(),
        c = (0, F.A)(i),
        m = s.useRef(null),
        g = n > 1;
    return (0, l.jsxs)("div", {
        className: o()(eU.iE, eU.o1),
        children: [
            (0, l.jsx)(z.A, {
                iconComponent: u.P,
                label: e_.intl.string(e_.t.WAI6xu),
                className: eU.hP,
                onClick: () => {
                    (0, eE.X)(a, eE.O.DISCONNECT),
                        Z.default.track(C.HAw.RING_CALL_DECLINED, {
                            location: a,
                            guild_id: i.guild_id,
                            ...(0, O.dI)(i),
                        }),
                        x.A.stopRinging(i.id);
                },
            }),
            t &&
                (0, l.jsx)(h.Y, {
                    targetElementRef: m,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, l.jsx)(eG.A, {
                            onClose: t,
                            onInteraction: (0, eP.s)("VideoDeviceMenu", a, { entrypoint: eV.GK.CARET }),
                        });
                    },
                    position: "top",
                    align: "center",
                    animation: h.Y.Animation.FADE,
                    children: (e, t) => {
                        let { onClick: n } = e,
                            { isShown: s } = t;
                        return (0, l.jsx)(Y.A, {
                            buttonRef: m,
                            join: !0,
                            enabled: d,
                            className: o()(eU.hP, { [eU.$j]: g }),
                            color: "green",
                            centerButton: !0,
                            hasPermission: c,
                            cameraUnavailable: r,
                            channel: i,
                            onPopoutClick: g ? n : null,
                            popoutOpen: s,
                            onCameraUnavailable: X.A,
                            onChange: () => {
                                (0, eE.X)(a, eE.O.JOIN_VIDEO_CALL),
                                    Z.default.track(C.HAw.RING_CALL_ACCEPTED, {
                                        location: a,
                                        guild_id: i.guild_id,
                                        ...(0, O.dI)(i),
                                    }),
                                    j.default.selectVoiceChannel(i.id, !0),
                                    (0, G.uh)(i.guild_id ?? C.ME, i.id);
                            },
                        });
                    },
                }),
            (0, l.jsx)(B.A, {
                channel: i,
                color: "join",
                centerButton: !0,
                onCallJoined: () =>
                    Z.default.track(C.HAw.RING_CALL_ACCEPTED, { location: a, guild_id: i.guild_id, ...(0, O.dI)(i) }),
                className: eU.hP,
            }),
        ],
    });
}
function eY(e) {
    let { animatedStyle: t, y: i, x: n, channel: a } = e,
        { analyticsLocations: c } = (0, k.Ay)(L.A.INCOMING_CALL_MODAL),
        [u, h] = s.useState(!1),
        v = (0, d.bG)([$.A], () => $.A.getGuild(a.guild_id)),
        j = null != v ? q.Ay.getGuildIconURL({ id: v.id, icon: v.icon, size: 128 }) : null,
        _ = (0, R.Y)(a, 128, !0) ?? j,
        N = (0, M.Ay)(a),
        [b, y] = (0, d.yK)([K.Ay], () => [K.Ay.supports(eC.O5.VIDEO), Object.keys(K.Ay.getVideoDevices()).length]),
        I = null != v ? `${N}, ${v.name}` : N,
        w = (0, d.bG)([Q.A], () => Q.A.isFocused()),
        O = (0, d.bG)([ee.A], () => ee.A.getMode(a.id)),
        G = s.useCallback((e) => {
            null != e.top && null != e.left && E.move(e.left, e.top);
        }, []),
        P = (0, m.z)({ value: +!!u, config: { ...r.config.stiff, clamp: !0 } }, "animate-always");
    s.useEffect(() => {
        let e = (e) => {
            e.key === eO.dh.ESCAPE && x.A.stopRinging(a.id);
        };
        return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
    }, [a]);
    let V = O === C._Of.VIDEO && b && y > 0,
        { enabled: S } = H.A.useExperiment({ guildId: a?.guild_id, location: "IncomingCallModal" }),
        U =
            O === C._Of.VOICE || (S && a.type === C.rbe.GUILD_VOICE)
                ? e_.intl.string(e_.t.Js8cK3)
                : e_.intl.string(e_.t.KcnWCO),
        F = (0, l.jsxs)(l.Fragment, {
            children: [
                null != v && null == j
                    ? (0, l.jsx)("div", {
                          className: o()(eU.Kk, eS.iE, eS.hs),
                          children: (0, l.jsx)(T.Ay, {
                              className: eU.dK,
                              mask: T.hW.AVATAR_DEFAULT,
                              width: u ? 40 : 80,
                              height: u ? 40 : 80,
                              children: (0, l.jsx)("div", {
                                  className: o()(eU.$f, eU.Gc),
                                  children: (0, l.jsx)("div", { className: eU.Hj, children: (0, W.Rb)(v) }),
                              }),
                          }),
                      })
                    : (0, l.jsx)(et.A, {
                          className: eU.Kk,
                          ringing: w,
                          src: _ ?? "",
                          ringingType: et.A.RingingType.INCOMING,
                          size: u ? g._3.SIZE_40 : g._3.SIZE_80,
                      }),
                (0, l.jsxs)("div", {
                    className: eU.i8,
                    children: [
                        (0, l.jsx)(f.E, {
                            className: eU.DD,
                            color: "text-strong",
                            variant: u ? "text-md/semibold" : "text-lg/semibold",
                            children: I,
                        }),
                        (0, l.jsx)(f.E, {
                            color: "text-default",
                            className: eU.VA,
                            variant: u ? "text-sm/normal" : "text-md/normal",
                            children: U,
                        }),
                    ],
                }),
            ],
        }),
        X = V ? eF : eX,
        z = (0, d.bG)([Q.A], () => Q.A.windowSize());
    return (0, l.jsx)(k.f5, {
        value: c,
        children: (0, l.jsx)(D, {
            className: eU.iE,
            selector: `.${eU.zr}`,
            initialPosition: { left: n, top: i },
            maxX: z.width,
            maxY: z.height,
            onDragEnd: G,
            dragAnywhere: !0,
            children: (0, l.jsx)(p.N, {
                theme: u ? C.NJ8.DARK : void 0,
                children: (e) =>
                    (0, l.jsxs)(r.animated.div, {
                        className: o()(eU.zr, eR.a8, { [eU.mY]: u }, e),
                        style: {
                            ...t,
                            minWidth: P.value.interpolate([0, 1], [X.width, 475]),
                            minHeight: P.value.interpolate([0, 1], [X.height, 267]),
                            translateX: P.value.interpolate([0, 1], [0, (-1 * Math.abs(475 - X.width)) / 2]),
                        },
                        children: [
                            u ? (0, l.jsx)(ez, { header: F }) : (0, l.jsx)("div", { className: eU.Rh, children: F }),
                            (0, l.jsx)(eB, { canVideo: V, channel: a, numVideoDevices: y }),
                            V && !u
                                ? (0, l.jsx)("div", {
                                      "data-button-hoisted-classname-wrapper": !0,
                                      className: eU.jc,
                                      children: (0, l.jsx)(A.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: e_.intl.string(e_.t["8B0UDr"]),
                                          fullWidth: !0,
                                          onClick: () => h(!0),
                                      }),
                                  })
                                : null,
                        ],
                    }),
            }),
        }),
    });
}
function eH(e) {
    let { enabled: t } = H.A.useExperiment({ guildId: e.channel.guild_id, location: "IncomingCallModal" });
    return t && null != e.channel.guild_id ? (0, l.jsx)(eT, { ...e }) : (0, l.jsx)(eY, { ...e });
}
