n.r(t), n.d(t, { default: () => eW });
var i,
    l = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(419354),
    c = n(17928),
    d = n(289873),
    u = n(789645),
    h = n(922016),
    _ = n(717421),
    g = n(778712),
    f = n(834730),
    A = n(43990),
    m = n(821609),
    v = n(387755),
    p = n(228366);
let x = {
    move(e, t) {
        p.h.dispatch({ type: "INCOMING_CALL_MOVE", x: e, y: t });
    },
};
var b = n(956793),
    I = n(652215),
    E =
        (((i = E || {})[(i.DISABLED = 0)] = "DISABLED"),
        (i[(i.DEFAULT = 1)] = "DEFAULT"),
        (i[(i.OFFSET = 2)] = "OFFSET"),
        i);
function C(e, t, n, i, l) {
    let { top: s, bottom: a, left: r, right: o } = e;
    if (
        (null == s && null == a
            ? ((s = 0), (a = n - l))
            : null == s && null != a
              ? (s = n - (a + l))
              : null != s && (a = n - (s + l)),
        null == r && null == o
            ? ((r = 0), (o = t - i))
            : null == r && null != o
              ? (r = t - (o + i))
              : null == o && null != r && (o = t - (r + i)),
        null == s || null == a || null == r || null == o)
    )
        throw Error("Logically this can never happen based on our if/else statements");
    return { top: s, left: r, bottom: a, right: o };
}
function D(e) {
    return [null == e.bottom ? "TOP" : "BOTTOM", null == e.right ? "LEFT" : "RIGHT"];
}
function y(e) {
    let { top: t, left: n, bottom: i, right: l } = e;
    return (
        0 === t || t <= i ? (i = null) : (t = null),
        0 === n || n <= l ? (l = null) : (n = null),
        { top: t, left: n, bottom: i, right: l }
    );
}
function N(e) {
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
class O extends s.PureComponent {
    static FlipTypes = E;
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
        const [t, n] = D(e.initialPosition);
        (this.position = (function (e) {
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
            });
    }
    componentDidMount() {
        this.checkBounds(), this.setDOMPositions(this.position);
    }
    componentDidUpdate(e, t) {
        let {
            state: { verticalOrientation: n, horizontalOrientation: i, atTopEdge: l },
            props: { maxX: s, maxY: a, onRelocated: r, snapOrientation: o },
        } = this;
        (e.maxX !== s ||
            e.maxY !== a ||
            e.onRelocated !== r ||
            e.snapOrientation !== o ||
            t.verticalOrientation !== n ||
            t.horizontalOrientation !== i ||
            t.atTopEdge !== l) &&
            this.checkBounds();
    }
    componentWillUnmount() {
        window.removeEventListener("mousemove", this.handleMouseMove),
            window.removeEventListener("mouseup", this.handleMouseUp);
    }
    setDOMPositions(e) {
        let { top: t, left: n, bottom: i, right: l } = e,
            {
                draggableRef: { current: s },
            } = this;
        (this.position = { top: t, left: n, bottom: i, right: l }),
            null != s && ((s.style.top = j(t)), (s.style.bottom = j(i)), (s.style.left = j(n)), (s.style.right = j(l)));
    }
    handleMouseDown = (e) => {
        let { top: t, left: n, bottom: i, right: l } = this.position,
            { dragAnywhere: s, selector: a, maxX: r, maxY: o } = this.props,
            { target: c } = e,
            { current: d } = this.draggableRef;
        if (
            null != d &&
            e.button === I.hE4.PRIMARY &&
            (s || (null != c && null != a && "" !== a && null != c.closest(a)))
        ) {
            let { x: s, y: a } = (function (e) {
                let { top: t, left: n } = e;
                return { x: n, y: t };
            })(C({ top: t, left: n, bottom: i, right: l }, r, o, d.clientWidth, d.clientHeight));
            (this._dragStart = { x: e.clientX, y: e.clientY }),
                (this._offsetX = e.clientX - s),
                (this._offsetY = e.clientY - a),
                window.addEventListener("mousemove", this.handleMouseMove),
                window.addEventListener("mouseup", this.handleMouseUp);
        }
    };
    handleMouseMove = (e) => {
        e.preventDefault();
        let { clientX: t, clientY: n } = e,
            { current: i } = this.draggableRef,
            {
                maxX: l,
                maxY: s,
                flipVertical: a,
                flipHorizontal: r,
                onDragStart: o,
                onDrag: c,
                onFlip: d,
                snapOrientation: u,
            } = this.props,
            { dragging: h, dragging: _, verticalOrientation: g, horizontalOrientation: f } = this.state,
            A = !1;
        if (
            null == i ||
            (!h &&
                9 >
                    ((e, t) => {
                        let { x: n, y: i } = e,
                            { x: l, y: s } = t;
                        return Math.pow(n - l, 2) + Math.pow(i - s, 2);
                    })(this._dragStart, { x: t, y: n }))
        )
            return;
        h = !0;
        let { clientWidth: m, clientHeight: v } = i,
            p = N(C({ top: n - this._offsetY, left: t - this._offsetX }, l, s, m, v));
        if (u) {
            let e = D((p = y(p)));
            (g = e[0]), (f = e[1]);
        } else p = { top: p.top, left: p.left };
        2 === r && f !== this.state.horizontalOrientation && ((this._offsetX = m - this._offsetX), (A = !0)),
            2 === a && g !== this.state.verticalOrientation && ((this._offsetY = v - this._offsetY), (A = !0)),
            this.setDOMPositions(p),
            _ || o?.(p, i),
            c?.(p, i),
            A && d?.([g, f]),
            this.setState({ dragging: h, verticalOrientation: g, horizontalOrientation: f, atTopEdge: 0 === p.top });
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
                state: n,
                draggableRef: { current: i },
                props: { maxX: l, maxY: s, onRelocated: a, snapOrientation: r },
            } = this,
            { verticalOrientation: o, horizontalOrientation: c } = this.state;
        if (null == i) return;
        let { clientHeight: d, clientWidth: u } = i,
            h = C(t, l, s, u, d);
        if (((h = N(h)), r)) {
            let t = D((e = y(h)));
            (o = t[0]), (c = t[1]);
        } else e = { top: h.top, left: h.left, right: null, bottom: null };
        if (t.left === e.left && t.right === e.right && t.top === e.top && t.bottom === e.bottom) return;
        a?.(e, i), this.setDOMPositions(e);
        let _ = 0 === e.top;
        (o !== n.verticalOrientation || c !== n.horizontalOrientation || _ !== n.atTopEdge) &&
            this.setState({ verticalOrientation: o, horizontalOrientation: c, atTopEdge: _ });
    };
    render() {
        let { children: e, className: t } = this.props,
            { dragging: n, verticalOrientation: i, horizontalOrientation: a, atTopEdge: r } = this.state,
            { top: o, left: c, right: d, bottom: u } = this.position;
        return (0, l.jsx)("div", {
            ref: this.draggableRef,
            className: t,
            onMouseDown: this.handleMouseDown,
            style: { pointerEvents: n ? "none" : "auto", position: "absolute", top: o, left: c, bottom: u, right: d },
            children: s.cloneElement(s.Children.only(e), {
                flipped: "RIGHT" === a,
                verticalFlipped: "BOTTOM" === i,
                checkBounds: this.checkBounds,
                atTopEdge: r,
            }),
        });
    }
}
var T = n(793574),
    L = n(58149),
    w = n(688810),
    R = n(571694),
    M = n(47167),
    k = n(573435),
    U = n(976860),
    P = n(329551),
    G = n(413339),
    V = n(952572),
    S = n(151476),
    F = n(704877),
    B = n(222692),
    X = n(404355),
    z = n(496841),
    H = n(970636),
    W = n(164891),
    $ = n(260509),
    K = n(71393),
    Y = n(969341),
    Z = n(287809),
    Q = n(531685),
    J = n(954571),
    q = n(486020),
    ee = n(313961),
    et = n(85448),
    en = n(97808),
    ei = n(534514),
    el = n(661531),
    es = n(364522),
    ea = n(803306),
    er = n(713654),
    eo = n(481947),
    ec = n(616356),
    ed = n(607567),
    eu = n(503509),
    eh = n(625494),
    e_ = n(427262),
    eg = n(550079),
    ef = n(477782),
    eA = n(428689),
    em = n(270816),
    ev = n(495544),
    ep = n(855187),
    ex = n(384059),
    eb = n(818348),
    eI = n(731854),
    eE = n(985018);
function eC(e) {
    let { onClose: t, channel: n } = e,
        { analyticsLocations: i } = (0, w.Ay)(),
        a = (0, c.bG)([ev.default], () => ev.default.getId()),
        r = (0, em.H)({ deviceType: eI.oh.VIDEO_INPUT, analyticsLocations: i, asSubmenu: !0 }),
        o = (0, ep.A)(a),
        d = (0, s.useCallback)(() => {
            (0, ex.X)(i[0], ex.O.JOIN_VIDEO_CALL),
                J.default.track(I.HAw.RING_CALL_ACCEPTED, { location: i[0], guild_id: n.guild_id, ...(0, L.dI)(n) }),
                b.default.selectVoiceChannel(n.id, !0),
                (0, U.uh)(n.guild_id ?? I.ME, n.id),
                t();
        }, [t, i, n]);
    return (0, l.jsx)(eg.W, {
        navId: "join-call-context",
        onSelect: eb.FX,
        onInteraction: eb.FX,
        onClose: t,
        "aria-label": eE.intl.string(eE.t["f+QbEQ"]),
        children: (0, l.jsxs)(ef.rX, {
            children: [
                (0, l.jsx)(ef.Dr, {
                    id: "join-video",
                    action: d,
                    label: eE.intl.string(eE.t["YbjQQ/"]),
                    leadingAccessory: { type: "icon", icon: eA.n },
                }),
                r,
                o,
            ],
        }),
    });
}
var eD = n(939249),
    ey = n(847374),
    eN = n(990078),
    ej = n(110814),
    eO = n(518229);
function eT(e) {
    let {
        ref: t,
        tooltipText: n,
        caretTooltipText: i,
        onClick: s,
        onContextMenu: a,
        text: o,
        fullWidth: c,
        size: d = "md",
        variant: u = "primary",
    } = e;
    return (0, l.jsxs)("div", {
        ref: t,
        className: r()(ej.kL, { [eO.fullWidth]: c, [eO.hasText]: null != o }),
        children: [
            (0, l.jsx)(eN.m, {
                text: n,
                children: (0, l.jsx)(eD.D, {
                    "aria-label": n,
                    onClick: s,
                    onContextMenu: a,
                    className: r()(ej.x6, eO.button, eO[d], eO[u]),
                    children: o,
                }),
            }),
            (0, l.jsx)(eN.m, {
                text: i,
                children: (0, l.jsx)(eD.D, {
                    "aria-label": i,
                    onClick: a,
                    onContextMenu: a,
                    className: r()(ej.me, eO.button, eO[d], eO[u]),
                    children: (0, l.jsx)(ey.a, { color: "currentColor", size: "xs" }),
                }),
            }),
        ],
    });
}
var eL = n(650583),
    ew = n(384043),
    eR = n(604949);
function eM(e) {
    let { voiceState: t, user: n, channel: i } = e,
        s = (0, c.bG)([ec.A], () => ec.A.getStreamForUser(n.id, i.guild_id)),
        a = (0, e_.tx)(n);
    return (0, l.jsxs)("div", {
        className: ew.q7,
        children: [
            (0, l.jsxs)("div", {
                className: ew.G7,
                children: [
                    (0, l.jsx)(en.eu, {
                        "aria-label": n.username,
                        src: n.getAvatarURL(i.guild_id, 32, !1, !1),
                        size: g._3.SIZE_32,
                    }),
                    (0, l.jsx)(f.E, { variant: "text-sm/medium", children: a }),
                ],
            }),
            (0, l.jsx)(eo.Kc, {
                user: n,
                channelId: i.id,
                mute: t.isVoiceMuted(),
                deaf: t.isVoiceDeafened(),
                video: t.selfVideo,
                isStreaming: null != s && s.channelId === i.id,
                serverMute: t.mute,
                serverDeaf: t.deaf,
            }),
        ],
    });
}
function ek(e) {
    let { animatedStyle: t, x: n, y: i, channel: a, senderId: d } = e,
        { analyticsLocations: u } = (0, w.Ay)(T.A.INCOMING_CALL_MODAL),
        _ = s.useRef(null),
        p = (0, c.bG)([Q.A], () => Q.A.windowSize()),
        E = (0, c.bG)([K.A], () => K.A.getGuild(a.guild_id)),
        C = null != E ? q.Ay.getGuildIconURL({ id: E.id, icon: E.icon, size: 40 }) : null,
        D = (0, R.Y)(a, 40, !0) ?? C,
        y = (0, M.Ay)(a),
        N = (0, c.yK)([ed.Ay, ee.A], () =>
            ed.Ay.getVoiceStatesForChannel(a).filter((e) => !ee.A.getGuildRingingUsers(a.id).has(e.user.id)),
        ),
        [j, U] = (0, c.yK)([Y.Ay], () => [Y.Ay.supports(eI.O5.VIDEO), Object.keys(Y.Ay.getVideoDevices()).length]),
        P = (0, c.bG)([ee.A], () => ee.A.getVideoParticipants(a.id).length > 0),
        G = (0, c.bG)([Z.default], () => Z.default.getUser(d)),
        V = (0, e_.tx)(G),
        S = P && j && U > 0,
        F = s.useCallback((e) => {
            null != e.top && null != e.left && x.move(e.left, e.top);
        }, []),
        B = s.useCallback(() => {
            (0, ex.X)(u[0], ex.O.DISCONNECT),
                J.default.track(I.HAw.RING_CALL_DECLINED, { location: u[0], guild_id: a.guild_id, ...(0, L.dI)(a) }),
                v.A.stopRinging(a.id);
        }, [a, u]),
        X = s.useCallback(() => {
            (0, ex.X)(u[0], ex.O.JOIN_CALL),
                J.default.track(I.HAw.RING_CALL_ACCEPTED, { location: u[0], guild_id: a.guild_id, ...(0, L.dI)(a) }),
                b.default.selectVoiceChannel(a.id);
        }, [a, u]);
    s.useEffect(() => {
        let e = (e) => {
            e.key === eL.dh.ESCAPE && v.A.stopRinging(a.id);
        };
        return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
    }, [a]),
        s.useEffect(
            () => (
                eh._.subscribe(I.jej.CALL_ACCEPT, X),
                () => {
                    eh._.unsubscribe(I.jej.CALL_ACCEPT, X);
                }
            ),
            [X],
        ),
        s.useEffect(() => {
            null == G && (0, ea.wz)(d);
        }, [d, G]);
    let z = (0, er.gU)(a);
    return (0, l.jsx)(w.f5, {
        value: u,
        children: (0, l.jsx)(O, {
            className: ew.iE,
            selector: `.${ew.zr}`,
            initialPosition: { left: n, top: i },
            maxX: p.width,
            maxY: p.height,
            onDragEnd: F,
            dragAnywhere: !0,
            children: (0, l.jsx)(A.N, {
                children: (e) =>
                    (0, l.jsxs)(o.animated.div, {
                        className: r()(ew.zr, eR.a8, e),
                        style: { ...t, "--custom-modal-width": `${eu.c.width}px` },
                        children: [
                            (0, l.jsxs)("div", {
                                className: ew.wx,
                                children: [
                                    null != G &&
                                        (0, l.jsx)(en.eu, {
                                            className: ew.gX,
                                            "aria-label": "user",
                                            src: G?.getAvatarURL(a.guild_id, 80, !1, !1),
                                            size: g._3.SIZE_80,
                                        }),
                                    (0, l.jsx)(ei.D, {
                                        variant: "heading-lg/semibold",
                                        className: r()(ew.gX, ew.DD),
                                        children:
                                            null != G
                                                ? eE.intl.format(eE.t.M3F6cv, { username: V })
                                                : eE.intl.string(eE.t["3rE1P8"]),
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: ew.C5,
                                        children: [
                                            (null != E || null != D) &&
                                                (0, l.jsx)(k.Ay, {
                                                    mask: k.hW.SQUIRCLE,
                                                    width: 40,
                                                    height: 40,
                                                    className: ew.NR,
                                                    children:
                                                        null != D
                                                            ? (0, l.jsx)("img", {
                                                                  alt: E?.name ?? y ?? "",
                                                                  src: D,
                                                                  width: 40,
                                                                  height: 40,
                                                              })
                                                            : null != E
                                                              ? (0, l.jsx)("div", {
                                                                    className: ew.$r,
                                                                    children: (0, l.jsx)("div", {
                                                                        className: ew.q9,
                                                                        children: (0, $.Rb)(E),
                                                                    }),
                                                                })
                                                              : null,
                                                }),
                                            (0, l.jsxs)("div", {
                                                className: ew.Ug,
                                                children: [
                                                    (0, l.jsxs)("div", {
                                                        className: ew.HA,
                                                        children: [
                                                            null != z &&
                                                                (0, l.jsx)(z, {
                                                                    size: "xs",
                                                                    color: el.A.colors.TEXT_DEFAULT,
                                                                    className: ew.NR,
                                                                }),
                                                            (0, l.jsx)(f.E, {
                                                                variant: "text-md/semibold",
                                                                color: "text-default",
                                                                className: ew.zb,
                                                                children: y,
                                                            }),
                                                        ],
                                                    }),
                                                    E?.name != null &&
                                                        (0, l.jsx)(f.E, {
                                                            variant: "text-sm/medium",
                                                            color: "text-muted",
                                                            className: ew.zb,
                                                            children: E.name,
                                                        }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, l.jsxs)(es.Ip, {
                                className: ew.XG,
                                children: [
                                    (0, l.jsx)(f.E, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        className: ew.bi,
                                        children: eE.intl.format(eE.t.e95u3C, { count: N.length }),
                                    }),
                                    (0, l.jsx)("div", {
                                        className: ew.Xk,
                                        children: N.map((e) => {
                                            let { voiceState: t, user: n } = e;
                                            return (0, l.jsx)(eM, { voiceState: t, user: n, channel: a }, n.id);
                                        }),
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: ew.o1,
                                children: [
                                    (0, l.jsx)(m.$, {
                                        text: eE.intl.string(eE.t.L5eIZ2),
                                        fullWidth: !0,
                                        variant: "secondary",
                                        onClick: B,
                                    }),
                                    S
                                        ? (0, l.jsx)(h.Y, {
                                              targetElementRef: _,
                                              renderPopout: (e) => {
                                                  let { closePopout: t } = e;
                                                  return (0, l.jsx)(eC, { onClose: t, channel: a });
                                              },
                                              position: "bottom",
                                              children: (e) => {
                                                  let { onClick: t } = e;
                                                  return (0, l.jsx)(eT, {
                                                      ref: _,
                                                      text: eE.intl.string(eE.t["96ANUN"]),
                                                      fullWidth: !0,
                                                      variant: "active",
                                                      onClick: X,
                                                      caretTooltipText: eE.intl.string(eE.t["+1H47t"]),
                                                      onContextMenu: t,
                                                  });
                                              },
                                          })
                                        : (0, l.jsx)(m.$, {
                                              text: eE.intl.string(eE.t["96ANUN"]),
                                              onClick: X,
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
var eU = n(329072),
    eP = n(480890),
    eG = n(806931),
    eV = n(126957),
    eS = n(875051);
let eF = { width: 232, height: 315 },
    eB = { width: 232, height: 267 };
function eX(e) {
    let { header: t } = e,
        n = Y.Ay.getCameraComponent(),
        i = (0, c.bG)([Y.Ay], () => Y.Ay.getVideoDeviceId()),
        a = (0, V.A)();
    return (
        s.useEffect(() => {
            let e = Z.default.getCurrentUser();
            if (a && null != e) {
                let t = (0, P.i)(e);
                (0, G.S1)(t, i, { track: !1 }).catch(I.tEg);
            }
        }, [a, i]),
        (0, l.jsxs)("div", {
            className: eS.Tg,
            children: [
                (0, l.jsx)(d.y, {}),
                (0, l.jsx)("div", {
                    className: eS.VH,
                    children: (0, l.jsx)(n, { disabled: !1, deviceId: i, width: 475, height: 267 }),
                }),
                (0, l.jsx)("div", { className: eS.dB, children: t }),
            ],
        })
    );
}
function ez(e) {
    let { canVideo: t, channel: n, numVideoDevices: i } = e,
        { parentAnalyticsLocation: a } = (0, w.Ay)(),
        { cameraUnavailable: o, enabled: c } = (0, S.A)(),
        d = (0, F.A)(n),
        _ = s.useRef(null),
        g = i > 1;
    return (0, l.jsxs)("div", {
        className: r()(eS.iE, eS.o1),
        children: [
            (0, l.jsx)(X.A, {
                iconComponent: u.P,
                label: eE.intl.string(eE.t.WAI6xu),
                className: eS.hP,
                onClick: () => {
                    (0, ex.X)(a, ex.O.DISCONNECT),
                        J.default.track(I.HAw.RING_CALL_DECLINED, {
                            location: a,
                            guild_id: n.guild_id,
                            ...(0, L.dI)(n),
                        }),
                        v.A.stopRinging(n.id);
                },
            }),
            t &&
                (0, l.jsx)(h.Y, {
                    targetElementRef: _,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, l.jsx)(eU.A, {
                            onClose: t,
                            onInteraction: (0, eP.s)("VideoDeviceMenu", a, { entrypoint: eG.GK.CARET }),
                        });
                    },
                    position: "top",
                    align: "center",
                    animation: h.Y.Animation.FADE,
                    children: (e, t) => {
                        let { onClick: i } = e,
                            { isShown: s } = t;
                        return (0, l.jsx)(H.A, {
                            buttonRef: _,
                            join: !0,
                            enabled: c,
                            className: r()(eS.hP, { [eS.$j]: g }),
                            color: "green",
                            centerButton: !0,
                            hasPermission: d,
                            cameraUnavailable: o,
                            channel: n,
                            onPopoutClick: g ? i : null,
                            popoutOpen: s,
                            onCameraUnavailable: B.A,
                            onChange: () => {
                                (0, ex.X)(a, ex.O.JOIN_VIDEO_CALL),
                                    J.default.track(I.HAw.RING_CALL_ACCEPTED, {
                                        location: a,
                                        guild_id: n.guild_id,
                                        ...(0, L.dI)(n),
                                    }),
                                    b.default.selectVoiceChannel(n.id, !0),
                                    (0, U.uh)(n.guild_id ?? I.ME, n.id);
                            },
                        });
                    },
                }),
            (0, l.jsx)(z.A, {
                channel: n,
                color: "join",
                centerButton: !0,
                onCallJoined: () =>
                    J.default.track(I.HAw.RING_CALL_ACCEPTED, { location: a, guild_id: n.guild_id, ...(0, L.dI)(n) }),
                className: eS.hP,
            }),
        ],
    });
}
function eH(e) {
    let { animatedStyle: t, y: n, x: i, channel: a } = e,
        { analyticsLocations: d } = (0, w.Ay)(T.A.INCOMING_CALL_MODAL),
        [u, h] = s.useState(!1),
        p = (0, c.bG)([K.A], () => K.A.getGuild(a.guild_id)),
        b = null != p ? q.Ay.getGuildIconURL({ id: p.id, icon: p.icon, size: 128 }) : null,
        E = (0, R.Y)(a, 128, !0) ?? b,
        C = (0, M.Ay)(a),
        [D, y] = (0, c.yK)([Y.Ay], () => [Y.Ay.supports(eI.O5.VIDEO), Object.keys(Y.Ay.getVideoDevices()).length]),
        N = null != p ? `${C}, ${p.name}` : C,
        j = (0, c.bG)([Q.A], () => Q.A.isFocused()),
        L = (0, c.bG)([ee.A], () => ee.A.getMode(a.id)),
        U = s.useCallback((e) => {
            null != e.top && null != e.left && x.move(e.left, e.top);
        }, []),
        P = (0, _.z)({ value: +!!u, config: { ...o.config.stiff, clamp: !0 } }, "animate-always");
    s.useEffect(() => {
        let e = (e) => {
            e.key === eL.dh.ESCAPE && v.A.stopRinging(a.id);
        };
        return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
    }, [a]);
    let G = L === I._Of.VIDEO && D && y > 0,
        { enabled: V } = W.A.useExperiment({ guildId: a?.guild_id, location: "IncomingCallModal" }),
        S =
            L === I._Of.VOICE || (V && a.type === I.rbe.GUILD_VOICE)
                ? eE.intl.string(eE.t.Js8cK3)
                : eE.intl.string(eE.t.KcnWCO),
        F = (0, l.jsxs)(l.Fragment, {
            children: [
                null != p && null == b
                    ? (0, l.jsx)("div", {
                          className: r()(eS.Kk, eV.iE, eV.hs),
                          children: (0, l.jsx)(k.Ay, {
                              className: eS.dK,
                              mask: k.hW.AVATAR_DEFAULT,
                              width: u ? 40 : 80,
                              height: u ? 40 : 80,
                              children: (0, l.jsx)("div", {
                                  className: r()(eS.$f, eS.Gc),
                                  children: (0, l.jsx)("div", { className: eS.Hj, children: (0, $.Rb)(p) }),
                              }),
                          }),
                      })
                    : (0, l.jsx)(et.A, {
                          className: eS.Kk,
                          ringing: j,
                          src: E ?? "",
                          ringingType: et.A.RingingType.INCOMING,
                          size: u ? g._3.SIZE_40 : g._3.SIZE_80,
                      }),
                (0, l.jsxs)("div", {
                    className: eS.i8,
                    children: [
                        (0, l.jsx)(f.E, {
                            className: eS.DD,
                            color: "text-strong",
                            variant: u ? "text-md/semibold" : "text-lg/semibold",
                            children: N,
                        }),
                        (0, l.jsx)(f.E, {
                            color: "text-default",
                            className: eS.VA,
                            variant: u ? "text-sm/normal" : "text-md/normal",
                            children: S,
                        }),
                    ],
                }),
            ],
        }),
        B = G ? eF : eB,
        X = (0, c.bG)([Q.A], () => Q.A.windowSize());
    return (0, l.jsx)(w.f5, {
        value: d,
        children: (0, l.jsx)(O, {
            className: eS.iE,
            selector: `.${eS.zr}`,
            initialPosition: { left: i, top: n },
            maxX: X.width,
            maxY: X.height,
            onDragEnd: U,
            dragAnywhere: !0,
            children: (0, l.jsx)(A.N, {
                theme: u ? I.NJ8.DARK : void 0,
                children: (e) =>
                    (0, l.jsxs)(o.animated.div, {
                        className: r()(eS.zr, eR.a8, { [eS.mY]: u }, e),
                        style: {
                            ...t,
                            minWidth: P.value.interpolate([0, 1], [B.width, 475]),
                            minHeight: P.value.interpolate([0, 1], [B.height, 267]),
                            translateX: P.value.interpolate([0, 1], [0, (-1 * Math.abs(475 - B.width)) / 2]),
                        },
                        children: [
                            u ? (0, l.jsx)(eX, { header: F }) : (0, l.jsx)("div", { className: eS.Rh, children: F }),
                            (0, l.jsx)(ez, { canVideo: G, channel: a, numVideoDevices: y }),
                            G && !u
                                ? (0, l.jsx)("div", {
                                      "data-button-hoisted-classname-wrapper": !0,
                                      className: eS.jc,
                                      children: (0, l.jsx)(m.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: eE.intl.string(eE.t["8B0UDr"]),
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
function eW(e) {
    let { enabled: t } = W.A.useExperiment({ guildId: e.channel.guild_id, location: "IncomingCallModal" });
    return t && null != e.channel.guild_id ? (0, l.jsx)(ek, { ...e }) : (0, l.jsx)(eH, { ...e });
}
